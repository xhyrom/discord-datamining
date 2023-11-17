(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["72870"], {
        375822: function(e, t, l) {
            "use strict";
            var a, i, n, r, u, s;
            l.r(t), l.d(t, {
                HeaderRecord: function() {
                    return o
                },
                FindResultDirections: function() {
                    return a
                },
                AutocompleterResultTypes: function() {
                    return i
                },
                AutocompleterQuerySymbols: function() {
                    return n
                }
            });
            class o {
                constructor(e) {
                    this.id = e, this.text = e
                }
            }(r = a || (a = {})).UP = "UP", r.DOWN = "DOWN", (u = i || (i = {})).GUILD = "GUILD", u.TEXT_CHANNEL = "TEXT_CHANNEL", u.GROUP_DM = "GROUP_DM", u.VOICE_CHANNEL = "VOICE_CHANNEL", u.USER = "USER", u.HEADER = "HEADER", u.APPLICATION = "APPLICATION", u.SKU = "SKU", u.LINK = "LINK", (s = n || (n = {})).USER = "@", s.TEXT_CHANNEL = "#", s.VOICE_CHANNEL = "!", s.GUILD = "*", s.APPLICATION = "$"
        },
        195547: function(e, t, l) {
            "use strict";

            function a(e, t) {
                if (e.score === t.score) {
                    var l, a, i, n, r, u;
                    let s = null !== (n = null !== (i = e.sortable) && void 0 !== i ? i : null === (l = e.comparator) || void 0 === l ? void 0 : l.toLocaleLowerCase()) && void 0 !== n ? n : "",
                        o = null !== (u = null !== (r = e.sortable) && void 0 !== r ? r : null === (a = t.comparator) || void 0 === a ? void 0 : a.toLocaleLowerCase()) && void 0 !== u ? u : "";
                    if (s < o) return -1;
                    if (s > o) return 1
                }
                return t.score - e.score
            }
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            })
        },
        966506: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var a = l("42203"),
                i = l("49111");

            function n(e) {
                if (null == e.parent_id) return e.type === i.ChannelTypes.GUILD_CATEGORY ? (e.position + 1) * 1e3 : e.position;
                {
                    var t, l;
                    let i = ((null !== (l = null === (t = a.default.getChannel(e.parent_id)) || void 0 === t ? void 0 : t.position) && void 0 !== l ? l : 0) + 1) * 1e3;
                    return e.isGuildVocal() ? i + e.position + 500 : i + e.position
                }
            }

            function r(e, t) {
                var l, a, i, r, u, s;
                if (e.score !== t.score) return t.score - e.score;
                let o = n(e.record),
                    c = n(t.record);
                if (o !== c) return o - c;
                let d = null !== (r = null !== (i = e.sortable) && void 0 !== i ? i : null === (l = e.comparator) || void 0 === l ? void 0 : l.toLocaleLowerCase()) && void 0 !== r ? r : "",
                    f = null !== (s = null !== (u = e.sortable) && void 0 !== u ? u : null === (a = t.comparator) || void 0 === a ? void 0 : a.toLocaleLowerCase()) && void 0 !== s ? s : "";
                return d < f ? -1 : d > f ? 1 : 0
            }
        },
        860285: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            }), l("222007");
            var a = l("446674"),
                i = l("913144");
            let n = new Set,
                r = {};

            function u(e) {
                let {
                    applicationId: t
                } = e;
                n.add(t)
            }

            function s(e) {
                let {
                    applicationId: t
                } = e;
                n.delete(t)
            }
            class o extends a.default.Store {
                get launchingGames() {
                    return n
                }
                get launchableGames() {
                    return r
                }
                isLaunchable(e) {
                    return null != r[e] ? r[e] : (r[e] = !1, i.default.dispatch({
                        type: "CHECK_LAUNCHABLE_GAME",
                        gameId: e
                    }), !1)
                }
            }
            o.displayName = "LaunchableGameStore";
            var c = new o(i.default, {
                GAME_LAUNCHABLE_UPDATE: function(e) {
                    let {
                        gameId: t,
                        isLaunchable: l
                    } = e;
                    r[t] = l
                },
                GAME_CLOUD_SYNC_START: u,
                GAME_LAUNCH_START: u,
                GAME_LAUNCH_SUCCESS: s,
                GAME_LAUNCH_FAIL: s,
                GAME_CLOUD_SYNC_CONFLICT: s,
                GAME_CLOUD_SYNC_ERROR: s,
                GAME_CLOUD_SYNC_COMPLETE: s
            })
        },
        361776: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                },
                isGuildOnboardingAvailable: function() {
                    return u
                }
            });
            var a = l("446674"),
                i = l("38654"),
                n = l("49111");

            function r(e) {
                let t = (0, a.useStateFromStores)([i.default], () => {
                    if ((null == e ? void 0 : e.id) == null) return !1;
                    let t = i.default.isFullServerPreview(e.id),
                        l = i.default.isOnboardingEnabled(e.id);
                    return t && l
                });
                return t || (null == e ? void 0 : e.hasFeature(n.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS))
            }

            function u(e) {
                if (null == e) return !1;
                let t = i.default.isFullServerPreview(e.id),
                    l = i.default.isOnboardingEnabled(e.id);
                return t && l || e.hasFeature(n.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
            }
        },
        577427: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return B
                }
            }), l("222007");
            var a = l("448105"),
                i = l.n(a),
                n = l("917351"),
                r = l.n(n),
                u = l("866227"),
                s = l.n(u),
                o = l("446674"),
                c = l("913144"),
                d = l("299285"),
                f = l("860285"),
                p = l("915639"),
                h = l("86878"),
                E = l("546463"),
                A = l("686470"),
                L = l("568307"),
                g = l("102985"),
                y = l("251013"),
                C = l("946749"),
                m = l("535974"),
                S = l("352326"),
                _ = l("117362"),
                N = l("449008"),
                T = l("964889"),
                I = l("773336"),
                R = l("50885"),
                v = l("602043"),
                b = l("9377"),
                U = l("49111");
            let M = s().subtract(1, "week"),
                G = [],
                D = "",
                O = !1;

            function P(e, t) {
                return e.application.name.localeCompare(t.application.name, p.default.locale, {
                    sensitivity: "base"
                })
            }
            let w = {
                    [U.GameTableListKeys.NAME]: P,
                    [U.GameTableListKeys.PLATFORM]: (e, t, l) => {
                        let a = e.libraryApplication.getDistributor(),
                            i = t.libraryApplication.getDistributor();
                        return a === i ? (l === U.TableSortDirections.DESCENDING ? -1 : 1) * P(e, t) : null == a ? 1 : null == i ? -1 : a.localeCompare(i)
                    },
                    [U.GameTableListKeys.LAST_PLAYED]: (e, t) => e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
                    [U.GameTableListKeys.ACTIONS]: null
                },
                F = (0, _.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.shouldShowInLibrary)),
                q = (0, _.cachedFunction)(e => e.filter(e => null != e.libraryApplication && m.default.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
                H = (0, _.cachedFunction)((e, t) => e.filter(e => i(t.toLowerCase(), e.application.name.toLowerCase()))),
                x = (0, _.cachedFunction)((e, t, l, a) => {
                    let i = w[t];
                    if (null == i) return e;
                    let n = [...e],
                        r = n.sort(i);
                    return l === U.TableSortDirections.DESCENDING ? r.reverse() : r
                }),
                V = (0, _.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.libraryApplication.isHidden()));

            function k(e, t) {
                let l = y.default.getCurrentUserStatisticsForApplication(e.id);
                if (null != l) return new Date(l.last_played_at).getTime();
                let a = t[e.id];
                return null != a ? a : 0
            }

            function K() {
                let e = new Set(L.default.getRunningVerifiedApplicationIds()),
                    t = {},
                    l = new Set,
                    a = L.default.getGamesSeen(!1, !1).map(e => {
                        let l = E.default.getGameByGameData(e);
                        return null != l ? (t[l.id] = 1e3 * e.lastFocused, l.id) : null
                    }),
                    i = Object.values(A.default.getAllLibraryApplications()),
                    n = i.map(a => (function(e, t, l, a, i) {
                        var n, r;
                        if (!i && t.has(e.id)) return null;
                        let u = d.default.getApplication(e.id);
                        if (null == u) return null;
                        let o = k(u, l);
                        if (t.add(e.id), !(0, T.isUserEntitledToLibraryApplication)(e) && !m.default.isInstalled(e.id, e.branchId)) return null;
                        return {
                            key: "".concat(e.id, "-").concat(e.branchId),
                            application: u,
                            libraryApplication: e,
                            lastPlayed: o,
                            supportsCloudSync: null != e && m.default.supportsCloudSync(e.id, e.branchId),
                            isNew: (n = e, r = o, null != n && s(n.createdAt).isAfter(M) && 0 === r),
                            isLaunching: f.default.launchingGames.has(e.id),
                            isRunning: a.has(e.id),
                            isLaunchable: (0, v.isLaunchable)({
                                LibraryApplicationStore: A.default,
                                LaunchableGameStore: f.default,
                                DispatchApplicationStore: m.default,
                                ConnectedAppsStore: h.default,
                                applicationId: e.id,
                                branchId: e.branchId
                            }),
                            isUpdatingFlags: A.default.isUpdatingFlags(e.id, e.branchId),
                            shouldShowInLibrary: (0, T.shouldShowGameInLibrary)(u, e, g.default),
                            defaultAction: (0, b.getDefaultLibraryApplicationAction)(e, m.default, S.default)
                        }
                    })(a, l, t, e, !0)).filter(N.isNotNullish),
                    u = a.map(a => (function(e, t, l, a) {
                        let i = null != e ? d.default.getApplication(e) : null;
                        if (null == i || null == e || t.has(e)) return null;
                        let n = k(i, l);
                        return t.add(e), {
                            key: e,
                            application: i,
                            lastPlayed: n,
                            supportsCloudSync: !1,
                            isNew: !1,
                            isLaunching: f.default.launchingGames.has(e),
                            isRunning: a.has(e),
                            isLaunchable: (0, v.isLaunchable)({
                                LibraryApplicationStore: A.default,
                                LaunchableGameStore: f.default,
                                DispatchApplicationStore: m.default,
                                ConnectedAppsStore: h.default,
                                applicationId: e,
                                branchId: null
                            }),
                            isUpdatingFlags: !1,
                            shouldShowInLibrary: !1,
                            libraryApplication: null,
                            defaultAction: null
                        }
                    })(a, l, t, e)).filter(N.isNotNullish),
                    o = [...u, ...n].sort((e, t) => e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1);
                return O = null != E.default.lastFetched && A.default.fetched, !r.isEqual(o, G) && (G = o, I.isPlatformEmbedded && R.default.setSystemTrayApplications(q(G).map(e => e.application).slice(0, 5)), !0)
            }
            class Y extends o.default.Store {
                initialize() {
                    this.syncWith([d.default, E.default, f.default, L.default, m.default, S.default, A.default, y.default, g.default, h.default], K, 200), this.syncWith([C.default, p.default], () => !0)
                }
                get applicationFilterQuery() {
                    return D
                }
                get applicationViewItems() {
                    return G
                }
                get launchableApplicationViewItems() {
                    return q(G)
                }
                get libraryApplicationViewItems() {
                    return F(G)
                }
                get filteredLibraryApplicationViewItems() {
                    return H(this.libraryApplicationViewItems, D)
                }
                get sortedFilteredLibraryApplicationViewItems() {
                    return x(this.filteredLibraryApplicationViewItems, C.default.sortKey, C.default.sortDirection, p.default.locale)
                }
                get hiddenLibraryApplicationViewItems() {
                    return V(G)
                }
                get hasFetchedApplications() {
                    return O
                }
            }
            Y.displayName = "ApplicationViewStore";
            var B = new Y(c.default, {
                LIBRARY_APPLICATION_FILTER_UPDATE: function(e) {
                    let {
                        query: t
                    } = e;
                    D = t
                }
            })
        },
        9377: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                getDefaultLibraryApplicationAction: function() {
                    return n
                }
            });
            var a = l("602043"),
                i = l("49111");

            function n(e, t, l) {
                let n = t.getState(e.id, e.branchId),
                    r = l.getQueuePosition(e.id, e.branchId),
                    u = l.paused;
                if (null != n) {
                    if (null == r || -1 === r) switch (n.type) {
                        case i.LocalDispatchApplicationStates.INSTALLING:
                            return i.LibraryApplicationActions.INSTALL;
                        case i.LocalDispatchApplicationStates.UPDATING:
                        case i.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                            return i.LibraryApplicationActions.UPDATE
                    }
                    switch (n.type) {
                        case i.LocalDispatchApplicationStates.INSTALLING:
                        case i.LocalDispatchApplicationStates.UPDATING:
                        case i.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                        case i.LocalDispatchApplicationStates.REPAIRING:
                            if (r > 0) return i.LibraryApplicationActions.MOVE_UP;
                            if (u) return i.LibraryApplicationActions.RESUME;
                            return i.LibraryApplicationActions.PAUSE;
                        case i.LocalDispatchApplicationStates.UP_TO_DATE:
                            return i.LibraryApplicationActions.PLAY;
                        case i.LocalDispatchApplicationStates.UNINSTALLING:
                            return null
                    }
                }
                return null != r && r > 0 ? i.LibraryApplicationActions.MOVE_UP : (0, a.isSupportedPlatform)() ? i.LibraryApplicationActions.INSTALL : null
            }
        },
        946749: function(e, t, l) {
            "use strict";
            let a;
            l.r(t), l.d(t, {
                default: function() {
                    return L
                }
            });
            var i = l("917351"),
                n = l.n(i),
                r = l("446674"),
                u = l("95410"),
                s = l("913144"),
                o = l("49111");
            let c = "GameLibraryViewStore",
                d = o.TableSortDirections.ASCENDING,
                f = o.GameTableListKeys.LAST_PLAYED,
                p = !1,
                h = n.debounce(() => {
                    p = !1, A.emitChange()
                }, 200);
            class E extends r.default.Store {
                initialize() {
                    var e;
                    let t = null !== (e = u.default.get(c)) && void 0 !== e ? e : {};
                    null != t.sortDirection && null != t.sortKey && (d = t.sortDirection, f = t.sortKey)
                }
                get sortDirection() {
                    return d
                }
                get sortKey() {
                    return f
                }
                get activeRowKey() {
                    return a
                }
                get isNavigatingByKeyboard() {
                    return p
                }
            }
            E.displayName = "GameLibraryViewStore";
            let A = new E(s.default, {
                LIBRARY_TABLE_SORT_UPDATE: function(e) {
                    let {
                        direction: t,
                        key: l
                    } = e;
                    d = t, f = l, u.default.set(c, {
                        sortDirection: d,
                        sortKey: f
                    })
                },
                LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function(e) {
                    let {
                        key: t,
                        isKeyboardEvent: l
                    } = e;
                    l && (p = !0, h()), a = t
                }
            });
            var L = A
        },
        25292: function(e, t, l) {
            "use strict";
            let a;
            l.r(t), l.d(t, {
                COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS: function() {
                    return et
                },
                default: function() {
                    return eu
                }
            }), l("424973"), l("843762"), l("781738"), l("222007");
            var i = l("448105"),
                n = l.n(i),
                r = l("917351"),
                u = l.n(r),
                s = l("195547"),
                o = l("679653"),
                c = l("966506"),
                d = l("605250"),
                f = l("385976"),
                p = l("677315"),
                h = l("361776"),
                E = l("290886"),
                A = l("866353"),
                L = l("865372"),
                g = l("364685"),
                y = l("161585"),
                C = l("401690"),
                m = l("872173"),
                S = l("233069"),
                _ = l("766274"),
                N = l("42203"),
                T = l("923959"),
                I = l("26989"),
                R = l("305961"),
                v = l("377253"),
                b = l("957255"),
                U = l("824563"),
                M = l("27618"),
                G = l("18494"),
                D = l("162771"),
                O = l("697218"),
                P = l("552712"),
                w = l("449008"),
                F = l("651879"),
                q = l("991170"),
                H = l("655518"),
                x = l("159885"),
                V = l("158998"),
                k = l("49111"),
                K = l("375822"),
                Y = l("724210"),
                B = l("782340");
            let Q = new d.default("AutocompleteUtils"),
                W = () => !0,
                X = /(\t|\s)/,
                z = [];
            a = l("905571").default;
            let j = a.MENTION_EVERYONE,
                J = a.MENTION_HERE,
                Z = a.MENTION_CLYDE,
                $ = a.LAUNCHABLE_APPLICATIONS;

            function ee() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return 1e3 * e * (null != t ? t : 1)
            }
            let et = [T.GUILD_SELECTABLE_CHANNELS_KEY, T.GUILD_VOCAL_CHANNELS_KEY, k.ChannelTypes.GUILD_CATEGORY];

            function el(e, t) {
                let {
                    exactQuery: l,
                    containQuery: a,
                    queryLower: i
                } = t, r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                try {
                    if (l.test(e)) {
                        if (e.toLocaleLowerCase() === i) return 10;
                        return 7
                    }
                    if (a.test(e)) return 5;
                    if (function(e, t) {
                            let l = e.split(/(?:,| )+/);
                            return l.every(e => {
                                let l = RegExp(H.default.escape(e), "i");
                                return l.test(t)
                            })
                        }(i, e)) return 3;
                    if (r && n(i, e)) return 1
                } catch (e) {
                    Q.error(e)
                }
                return 0
            }

            function ea(e) {
                return (null == e ? void 0 : e.joinedAt) != null && !e.isPending
            }

            function ei(e) {
                let {
                    query: t,
                    members: l,
                    limit: a,
                    filter: i,
                    allowSnowflake: r
                } = e, u = O.default.getUsers(), o = D.default.getGuildId(), c = t.toLocaleLowerCase(), d = (0, x.normalize)(c), f = [], p = [], h = l.length, E = 0, A = 0;
                for (; E < h;) {
                    var L, g, y, C, m, S, N, T, R;
                    let e, a;
                    let s = l[E];
                    s instanceof _.default ? (a = s, e = null === (g = I.default.getNick(o, a.id)) || void 0 === g ? void 0 : g.toLocaleLowerCase()) : (e = null === (y = s.nick) || void 0 === y ? void 0 : y.toLocaleLowerCase(), a = u[s.userId]);
                    let h = null === (L = V.default.getGlobalName(a)) || void 0 === L ? void 0 : L.toLocaleLowerCase();
                    if (null == i || i(a)) {
                        let l = a.username.toLocaleLowerCase(),
                            i = (0, x.stripDiacritics)(l),
                            u = (0, x.normalize)(i),
                            s = null != e ? (0, x.stripDiacritics)(e) : null,
                            o = null != s ? (0, x.normalize)(s) : null,
                            E = null != h ? (0, x.stripDiacritics)(h) : null,
                            L = null != E ? (0, x.normalize)(E) : null;
                        r && t === a.id || l.substring(0, c.length) === c || i.substring(0, c.length) === c || (null == e ? void 0 : e.substring(0, c.length)) === c || (null == s ? void 0 : s.substring(0, c.length)) === c || (null == h ? void 0 : h.substring(0, c.length)) === c || (null == E ? void 0 : E.substring(0, c.length)) === c ? f.push({
                            type: K.AutocompleterResultTypes.USER,
                            record: a,
                            score: 10,
                            comparator: null !== (C = null != h ? h : e) && void 0 !== C ? C : l,
                            sortable: null !== (m = null != E ? E : s) && void 0 !== m ? m : i
                        }) : u.substring(0, d.length) === d || (null == o ? void 0 : o.substring(0, d.length)) === d || (null == L ? void 0 : L.substring(0, d.length)) === d ? f.push({
                            type: K.AutocompleterResultTypes.USER,
                            record: a,
                            score: 1,
                            comparator: null !== (S = null != h ? h : e) && void 0 !== S ? S : l,
                            sortable: null !== (N = null != E ? E : s) && void 0 !== N ? N : i
                        }) : A < 50 && (n(c, i) || n(d, u) || null != s && n(c, s) || null != o && n(d, o) || null != E && n(c, E) || null != L && n(d, L)) && (p.push({
                            type: K.AutocompleterResultTypes.USER,
                            record: a,
                            score: 1,
                            comparator: null !== (T = null != h ? h : e) && void 0 !== T ? T : l,
                            sortable: null !== (R = null != E ? E : s) && void 0 !== R ? R : i
                        }), A += 1)
                    }
                    E += 1
                }
                return f.sort(s.default), f.length < a && (p.sort(s.default), f = f.concat(p.slice(0, Math.max(0, a - f.length)))), f.length > a && (f.length = a), f
            }

            function en(e, t, l) {
                let a = 0,
                    i = null;
                for (let n of t) {
                    let t = el(e, n, l);
                    t > a && (a = t, i = n)
                }
                return null != i && (i.isFullMatch ? t.length = 0 : t.splice(t.indexOf(i), 1)), a
            }

            function er(e, t) {
                let l = N.default.getChannel(e);
                return null == e || null == l ? [] : u(v.default.getMessages(e).toArray()).reverse().uniqBy(e => e.author.id).map(e => O.default.getUser(e.author.id)).filter(e => {
                    if (null == e || e.isNonUserBot() && !e.isClyde()) return !1;
                    let t = l.getGuildId();
                    if (null == t) return !0;
                    let a = I.default.getMember(t, e.id);
                    return ea(a)
                }).map(e => {
                    var t;
                    let a = l.getGuildId(),
                        i = null != a ? I.default.getMember(a, e.id) : null;
                    return {
                        type: K.AutocompleterResultTypes.USER,
                        record: e,
                        score: 0,
                        comparator: null !== (t = null == i ? void 0 : i.nick) && void 0 !== t ? t : V.default.getName(e)
                    }
                }).take(t).value()
            }
            var eu = {
                queryFriends(e) {
                    let {
                        query: t,
                        limit: l = 10,
                        _fuzzy: a = !0,
                        filter: i
                    } = e;
                    return ei({
                        query: t,
                        members: M.default.getFriendIDs().map(e => O.default.getUser(e)).filter(w.isNotNullish),
                        limit: l,
                        filter: i
                    })
                },
                queryDMUsers(e) {
                    let {
                        query: t,
                        limit: l = 10,
                        filter: a
                    } = e;
                    return ei({
                        query: t,
                        members: N.default.getDMUserIds().map(e => O.default.getUser(e)).filter(w.isNotNullish),
                        limit: l,
                        filter: a
                    })
                },
                queryChannelUsers(e) {
                    let t, {
                            channelId: l,
                            query: a,
                            limit: i = 10,
                            request: n = !0,
                            checkRecentlyTalkedOnEmptyQuery: r = !0,
                            allowSnowflake: u = !1
                        } = e,
                        s = N.default.getChannel(l);
                    if (null == s) return [];
                    let o = s.isThread() ? N.default.getChannel(s.parent_id) : null,
                        c = null != o ? o : s;
                    if (null == c) return [];
                    if (c.isPrivate()) {
                        t = c.recipients.map(e => {
                            var t;
                            return {
                                userId: e,
                                nick: null !== (t = M.default.getNickname(e)) && void 0 !== t ? t : null
                            }
                        });
                        let e = O.default.getCurrentUser();
                        null != e && t.push({
                            userId: e.id,
                            nick: null
                        })
                    } else {
                        if (0 === a.length && r) {
                            let e = er(s.id, i);
                            if (e.length > 0) return e
                        }
                        t = I.default.getMembers(c.guild_id).filter(ea), n && F.default.requestMembers(c.guild_id, a, i)
                    }
                    return ei({
                        query: a,
                        members: t,
                        limit: i,
                        filter: e => c.isPrivate() || q.default.can({
                            permission: k.Permissions.VIEW_CHANNEL,
                            user: e,
                            context: c
                        }),
                        allowSnowflake: u
                    })
                },
                queryGuildUsers(e) {
                    let {
                        guildId: t,
                        query: l,
                        limit: a = 10,
                        request: i = !0,
                        checkRecentlyTalkedOnEmptyQuery: n = !0,
                        filter: r,
                        allowSnowflake: u
                    } = e;
                    if (null == R.default.getGuild(t)) return [];
                    if (0 === l.length && n) {
                        let e = er(G.default.getChannelId(t), a);
                        if (e.length > 0) return e
                    }
                    let s = I.default.getMembers(t).filter(ea);
                    return i && l.length > 0 && F.default.requestMembers(t, l, a), ei({
                        query: l,
                        members: s,
                        limit: a,
                        filter: r,
                        allowSnowflake: u
                    })
                },
                queryUsers(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                        l = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
                        a = arguments.length > 4 ? arguments[4] : void 0;
                    return l && e.length > 0 && F.default.requestMembers(null, e, t), ei({
                        query: e,
                        members: u(O.default.getUsers()).values().value(),
                        limit: t,
                        filter: a
                    })
                },
                queryChannels(e) {
                    let t, {
                            query: l,
                            guildId: a,
                            limit: i = k.MAX_AUTOCOMPLETE_RESULTS,
                            fuzzy: n = !0,
                            filter: r = W,
                            type: c = T.GUILD_SELECTABLE_CHANNELS_KEY,
                            allowEmptyQueries: d = !1,
                            requireVocalConnectAccess: f = !0,
                            boosters: p = {},
                            allowSnowflake: h
                        } = e,
                        E = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                l = e.split(" ").filter(e => "" !== e || t).map(e => {
                                    let t = e.toLocaleLowerCase();
                                    return {
                                        queryLower: t,
                                        exactQuery: RegExp("^".concat(H.default.escape(t)), "i"),
                                        containQuery: RegExp(H.default.escape(t), "i"),
                                        isFullMatch: !1
                                    }
                                });
                            if (e.includes(" ")) {
                                let t = e.toLocaleLowerCase();
                                l.unshift({
                                    queryLower: t,
                                    exactQuery: RegExp("^".concat(H.default.escape(t).replace(" ", "( |-)")), "i"),
                                    containQuery: RegExp(H.default.escape(t).replace(" ", "( |-)"), "i"),
                                    isFullMatch: !0
                                })
                            }
                            return l
                        }(l, d);
                    t = null != a ? u(T.default.getChannels(a)[c]).map(e => e.channel).concat(C.default.computeAllActiveJoinedThreads(a)).value() : u(N.default.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(C.default.computeAllActiveJoinedThreads()).value();
                    let A = {},
                        L = [];
                    for (let e of t) {
                        var g, y, m, _, I;
                        if (g = c, y = e.type, m = null != a, !(g === y || (m || (0, S.isGuildChannelType)(y)) && (g === T.GUILD_SELECTABLE_CHANNELS_KEY ? (0, S.isGuildSelectableChannelType)(y) || (0, S.isGuildVocalChannelType)(y) : g === T.GUILD_VOCAL_CHANNELS_KEY && (0, S.isGuildVocalChannelType)(y))) || (0, S.isGuildChannelType)(e.type) && !b.default.can(f ? e.accessPermissions : k.Permissions.VIEW_CHANNEL, e) || !r(e)) continue;
                        let t = [...E],
                            i = e.name.toLocaleLowerCase(),
                            u = h && l === e.id,
                            s = u ? 10 : en(i, t, n);
                        if (0 !== s) {
                            if (t.length > 0) {
                                for (let l of [function(e, t) {
                                        if (null == e.guild_id) return;
                                        let l = t[e.guild_id];
                                        if (null == l) {
                                            var a;
                                            l = t[e.guild_id] = null === (a = R.default.getGuild(e.guild_id)) || void 0 === a ? void 0 : a.toString().toLocaleLowerCase()
                                        }
                                        return l
                                    }(e, A), function(e, t) {
                                        if (null == e.parent_id) return;
                                        let l = t[e.parent_id];
                                        if (null == l) {
                                            var a;
                                            l = t[e.parent_id] = null === (a = N.default.getChannel(e.parent_id)) || void 0 === a ? void 0 : a.name.toLocaleLowerCase()
                                        }
                                        return l
                                    }(e, A)]) {
                                    if (null == l || "" === l) continue;
                                    let e = en(l, t, !1);
                                    0 !== e && (s += .5 * e)
                                }
                                s = Math.min(9, s)
                            }
                            if (0 !== s && !(t.length > 1) && (1 !== t.length || t[0].isFullMatch || u)) {
                                ;
                                if (_ = c, I = e.type, _ === T.GUILD_SELECTABLE_CHANNELS_KEY && (0, S.isGuildVocalChannelType)(I)) s = Math.max(s - 1, .5);
                                L.push({
                                    type: (0, S.isGuildVocalChannelType)(e.type) ? K.AutocompleterResultTypes.VOICE_CHANNEL : K.AutocompleterResultTypes.TEXT_CHANNEL,
                                    record: e,
                                    score: ee(s, p[e.id]),
                                    comparator: (0, o.computeChannelName)(e, O.default, M.default),
                                    sortable: i
                                })
                            }
                        }
                    }
                    return L.sort(s.default), null != i && L.length > i && (L.length = i), L
                },
                queryGuilds(e) {
                    let {
                        query: t,
                        limit: l = 10,
                        fuzzy: a = !0,
                        filter: i = W,
                        boosters: n = {}
                    } = e, r = "" === t ? "" : t.toLocaleLowerCase(), o = {
                        exactQuery: RegExp("^".concat(H.default.escape(r)), "i"),
                        containQuery: RegExp(H.default.escape(r), "i"),
                        queryLower: r
                    }, c = [], d = u(R.default.getGuilds()).values().value();
                    for (let e of d) {
                        if (!i(e)) continue;
                        let t = e.name.toLocaleLowerCase(),
                            l = el(t, o, a);
                        l > 0 && c.push({
                            type: K.AutocompleterResultTypes.GUILD,
                            record: e,
                            score: ee(l, n[e.id]),
                            comparator: e.toString(),
                            sortable: t
                        })
                    }
                    return c.sort(s.default), c.length > l && (c.length = l), c
                },
                queryGroupDMs(e) {
                    let {
                        query: t,
                        limit: l = 10,
                        fuzzy: a = !0,
                        filter: i = W,
                        boosters: n = {}
                    } = e, r = (0, x.stripDiacritics)((0, x.normalize)(t.toLocaleLowerCase())), c = {
                        exactQuery: RegExp("^".concat(H.default.escape(r)), "i"),
                        containQuery: RegExp(H.default.escape(r), "i"),
                        queryLower: r
                    }, d = u(N.default.getMutablePrivateChannels()).values().value(), f = [];
                    for (let e of d) {
                        if (!e.isMultiUserDM() || !i(e)) continue;
                        let t = (0, o.computeChannelName)(e, O.default, M.default).toLocaleLowerCase(),
                            l = (0, x.stripDiacritics)(t),
                            r = el(l, c, a);
                        r > 0 && f.push({
                            type: K.AutocompleterResultTypes.GROUP_DM,
                            record: e,
                            score: ee(r, n[e.id]),
                            comparator: (0, o.computeChannelName)(e, O.default, M.default),
                            sortable: l
                        })
                    }
                    return f.sort(s.default), f.length > l && (f.length = l), f
                },
                queryApplications(e) {
                    let {
                        query: t,
                        limit: l = 10,
                        fuzzy: a = !0,
                        filter: i = W
                    } = e, n = t.toLocaleLowerCase(), r = {
                        exactQuery: RegExp("^".concat(H.default.escape(n)), "i"),
                        containQuery: RegExp(H.default.escape(n), "i"),
                        queryLower: n
                    }, u = $(), o = [];
                    for (let {
                            application: e
                        }
                        of u) {
                        if (!i(e)) continue;
                        let t = e.name.toLocaleLowerCase(),
                            l = el(t, r, a);
                        l > 0 && o.push({
                            type: K.AutocompleterResultTypes.APPLICATION,
                            record: e,
                            score: l,
                            comparator: e.name,
                            sortable: t
                        })
                    }
                    return o.sort(s.default), o.length > l && (o.length = l), o
                },
                querySKUs(e) {
                    let {
                        query: t,
                        limit: l = 10,
                        fuzzy: a = !0,
                        filter: i = W
                    } = e, n = t.toLocaleLowerCase(), r = {
                        exactQuery: RegExp("^".concat(H.default.escape(n)), "i"),
                        containQuery: RegExp(H.default.escape(n), "i"),
                        queryLower: n
                    }, o = u(P.default.getSKUs()).values().value(), c = [];
                    for (let e of o)
                        if (e.type === k.SKUTypes.DURABLE_PRIMARY && i(e)) {
                            let t = e.name.toLocaleLowerCase(),
                                l = el(t, r, a);
                            l > 0 && c.push({
                                type: K.AutocompleterResultTypes.SKU,
                                record: e,
                                score: l,
                                comparator: e.name,
                                sortable: t
                            })
                        } return c.sort(s.default), c.length > l && (c.length = l), c
                },
                getRecentlyTalked: er,
                queryMentionResults(e) {
                    let {
                        query: t,
                        channel: l,
                        canMentionEveryone: a = !1,
                        canMentionHere: i = !0,
                        canMentionUsers: r = !0,
                        canMentionRoles: s = !0,
                        canMentionClyde: o = !1,
                        includeAllGuildUsers: c = !1,
                        includeNonMentionableRoles: d = !1,
                        checkRecentlyTalkedOnEmptyQuery: f = !0,
                        limit: p = k.MAX_AUTOCOMPLETE_RESULTS,
                        request: h,
                        allowSnowflake: E = !1
                    } = e, A = r ? (c && null != l.guild_id ? this.queryGuildUsers({
                        guildId: l.guild_id,
                        query: t,
                        limit: p,
                        checkRecentlyTalkedOnEmptyQuery: f,
                        request: h,
                        allowSnowflake: E
                    }) : this.queryChannelUsers({
                        channelId: l.id,
                        query: t,
                        limit: p,
                        checkRecentlyTalkedOnEmptyQuery: f,
                        allowSnowflake: E
                    })).map(e => {
                        let {
                            record: t,
                            score: a,
                            comparator: i
                        } = e;
                        return {
                            user: t,
                            score: a,
                            comparator: i,
                            nick: I.default.getNick(l.guild_id, t.id),
                            status: U.default.getStatus(t.id)
                        }
                    }) : [], L = A.length, g = t.toLowerCase(), y = [];
                    if (L < p && s) {
                        let e = l.getGuildId(),
                            t = R.default.getGuild(e);
                        null != t && (u(t.roles).filter(t => {
                            let {
                                mentionable: l,
                                name: i,
                                id: r
                            } = t;
                            return (l || a || d) && (n(g, i.toLowerCase()) || E && g === r) && r !== e
                        }).take(p - L).forEach(e => {
                            y.push(e)
                        }), L += y.length)
                    }
                    let C = [];
                    return !l.isPrivate() && a && s && (L < p && n(g, j().test) && (C.push(j()), L += 1), i && L < p && n(g, J().test) && C.push(J())), o && n(g, Z().test) && C.push(Z()), {
                        users: A,
                        globals: C,
                        roles: y
                    }
                },
                queryGuildMentionResults(e) {
                    let {
                        query: t,
                        guildId: l,
                        canMentionEveryone: a = !1,
                        canMentionUsers: i = !0,
                        canMentionRoles: r = !0,
                        canMentionNonMentionableRoles: s = !1
                    } = e, o = i ? this.queryGuildUsers({
                        guildId: l,
                        query: t
                    }).map(e => ({
                        ...e,
                        status: U.default.getStatus(e.record.id)
                    })) : [], c = o.length, d = t.toLowerCase(), f = [];
                    if (c < k.MAX_AUTOCOMPLETE_RESULTS && r) {
                        let e = R.default.getGuild(l);
                        null != e && (u(e.roles).filter(e => {
                            let {
                                mentionable: t,
                                name: i,
                                id: r
                            } = e;
                            return (t || a || s) && n(d, i.toLowerCase()) && r !== l
                        }).take(k.MAX_AUTOCOMPLETE_RESULTS - c).forEach(e => {
                            f.push(e)
                        }), c += f.length)
                    }
                    let p = [];
                    return a && r && (c < k.MAX_AUTOCOMPLETE_RESULTS && n(d, j().test) && (p.push(j()), c += 1), c < k.MAX_AUTOCOMPLETE_RESULTS && n(d, J().test) && p.push(J()), p.push(Z())), {
                        users: o,
                        globals: p,
                        roles: f
                    }
                },
                queryChoice(e) {
                    let {
                        query: t,
                        choices: l,
                        limit: a = 10,
                        fuzzy: i = !0
                    } = e, n = t.toLocaleLowerCase(), r = RegExp("^".concat(H.default.escape(n)), "i"), s = RegExp(H.default.escape(n), "i"), o = u(l).map((e, t) => {
                        let l = el(e.displayName.toLocaleLowerCase(), {
                            exactQuery: r,
                            containQuery: s,
                            queryLower: n
                        }, i);
                        return l > 0 ? {
                            choice: e,
                            score: l,
                            originalIndex: t
                        } : null
                    }).filter(w.isNotNullish).sortBy(e => -1 * e.score);
                    return null !== a && (o = o.take(a)), o.value()
                },
                queryStaticRouteChannels(e) {
                    let {
                        query: t,
                        guild: l
                    } = e, a = t.toLocaleLowerCase(), i = {
                        exactQuery: RegExp("^".concat(H.default.escape(a)), "i"),
                        containQuery: RegExp(H.default.escape(a), "i"),
                        queryLower: a
                    }, n = ((0, p.canSeeGuildHome)(l.id) || (0, E.canSeeOnboardingHome)(l.id)) && !l.hasFeature(k.GuildFeatures.HUB), r = l.hasFeature(k.GuildFeatures.COMMUNITY), u = (0, h.isGuildOnboardingAvailable)(l) && l.hasFeature(k.GuildFeatures.COMMUNITY), s = [{
                        id: Y.StaticChannelId.SERVER_GUIDE,
                        name: B.default.Messages.SERVER_GUIDE
                    }, {
                        id: Y.StaticChannelId.CHANNEL_BROWSER,
                        name: B.default.Messages.CHANNEL_BROWSER_TITLE
                    }, {
                        id: Y.StaticChannelId.CUSTOMIZE_COMMUNITY,
                        name: B.default.Messages.CHANNELS_AND_ROLES
                    }], o = [];
                    for (let e of s) {
                        if (e.id === Y.StaticChannelId.SERVER_GUIDE && !n || e.id === Y.StaticChannelId.CHANNEL_BROWSER && !r || e.id === Y.StaticChannelId.CUSTOMIZE_COMMUNITY && !u) continue;
                        let t = e.name.toLocaleLowerCase(),
                            a = el(t, i, !1);
                        a > 0 && o.push(new S.UnknownChannelRecord({
                            id: e.id,
                            name: e.name,
                            type: k.ChannelTypes.UNKNOWN,
                            guild_id: l.id
                        }))
                    }
                    return o
                },
                queryChannelResults(e) {
                    let {
                        query: t,
                        channel: l,
                        type: a = T.GUILD_SELECTABLE_CHANNELS_KEY,
                        channelTypes: i
                    } = e, n = this.queryChannels({
                        query: t,
                        guildId: l.getGuildId(),
                        limit: void 0,
                        fuzzy: void 0,
                        filter: e => null == i || i.includes(e.type),
                        type: a,
                        allowEmptyQueries: !0
                    }).map(e => e.record);
                    return {
                        channels: n
                    }
                },
                queryApplicationCommandChannelResults(e) {
                    let {
                        query: t,
                        channel: l,
                        channelTypes: a,
                        limit: i = k.MAX_AUTOCOMPLETE_RESULTS,
                        allowSnowflake: n
                    } = e;
                    if (null == l.guild_id) {
                        let e = [];
                        return (null == a || a.includes(l.type)) && e.push(l), {
                            channels: e
                        }
                    }
                    let r = [];
                    for (let e of et) r = r.concat(this.queryChannels({
                        query: t,
                        guildId: l.guild_id,
                        limit: i,
                        fuzzy: !0,
                        filter: e => null == a || a.includes(e.type),
                        type: e,
                        allowEmptyQueries: !0,
                        requireVocalConnectAccess: !1,
                        allowSnowflake: n
                    }));
                    return r = r.filter(e => {
                        let {
                            record: t
                        } = e;
                        return "null" !== t.id
                    }).sort(c.default), null != i && r.length > i && (r = r.slice(0, i)), {
                        channels: r.map(e => e.record)
                    }
                },
                queryChoiceResults(e) {
                    let {
                        query: t,
                        choices: l
                    } = e, a = this.queryChoice({
                        query: t,
                        choices: l,
                        limit: null
                    }).map(e => e.choice);
                    return {
                        choices: a
                    }
                },
                queryEmojiResults(e) {
                    let {
                        query: t,
                        channel: l,
                        intention: a,
                        canViewAndUsePackEmoji: i,
                        maxCount: n = k.MAX_AUTOCOMPLETE_RESULTS,
                        matchComparator: r
                    } = e;
                    m.FrecencyUserSettingsActionCreators.loadIfNecessary();
                    let u = f.default.searchWithoutFetchingLatest({
                        channel: l,
                        query: t,
                        count: n,
                        intention: a,
                        canViewAndUsePackEmoji: i,
                        matchComparator: r
                    });
                    return {
                        emojis: u
                    }
                },
                queryStickers(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        [l, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, W],
                        {
                            stickerMetadata: i
                        } = g.default,
                        n = O.default.getCurrentUser(),
                        r = new Set,
                        s = [];
                    for (let u of (m.FrecencyUserSettingsActionCreators.loadIfNecessary(), e)) {
                        if ("" === u) continue;
                        let e = u.toLocaleLowerCase(),
                            o = (0, x.stripDiacritics)(e),
                            c = RegExp("^".concat(H.default.escape(o)), "i"),
                            d = RegExp("".concat(H.default.escape(o)), "i");
                        i.forEach((i, u) => {
                            let o = 0,
                                f = null,
                                p = g.default.getStickerById(u);
                            if (null == p || !a(p, (0, A.getStickerSendability)(p, n, l))) return;
                            for (let l of i) {
                                let {
                                    type: a,
                                    value: i
                                } = l, n = function(e) {
                                    switch (e) {
                                        case y.StickerMetadataTypes.STICKER_NAME:
                                            return 11;
                                        case y.StickerMetadataTypes.CORRELATED_EMOJI:
                                            return 6;
                                        case y.StickerMetadataTypes.TAG:
                                            return 1;
                                        case y.StickerMetadataTypes.GUILD_NAME:
                                        case y.StickerMetadataTypes.PACK_NAME:
                                            return 8;
                                        default:
                                            return 1
                                    }
                                }(a), r = 0;
                                t ? i === e ? r = 10 * n : c.test(i) ? r = 7 * n : (a === y.StickerMetadataTypes.GUILD_NAME || a === y.StickerMetadataTypes.PACK_NAME || a === y.StickerMetadataTypes.STICKER_NAME) && d.test(i) && (r = 5 * n) : i === e && (r = 10 * n, f = i), r > o && (o = r, f = i)
                            }
                            let h = L.default.stickerFrecencyWithoutFetchingLatest.getScore(u);
                            null != h && (o *= h / 100), o > 0 && null != f && !r.has(p.id) && (r.add(p.id), s.push({
                                sticker: p,
                                comparator: f,
                                score: o
                            }))
                        })
                    }
                    return 0 === (s = u(s).sortBy(e => -1 * e.score).value()).length && (s = z), s
                },
                matchSentinel(e, t, l) {
                    let a = X.test(t);
                    return !a && e === l
                },
                hasSameRoleAsUsername(e, t) {
                    var l;
                    if (!t.isPomelo()) return !1;
                    let a = R.default.getGuild(e.getGuildId()),
                        i = null !== (l = null == a ? void 0 : a.roles) && void 0 !== l ? l : {};
                    for (let {
                            name: e
                        }
                        of Object.values(i))
                        if (t.username.startsWith(e.toLowerCase())) return !0;
                    return !1
                }
            }
        },
        651879: function(e, t, l) {
            "use strict";
            let a;
            l.r(t), l.d(t, {
                default: function() {
                    return A
                }
            }), l("424973");
            var i = l("917351"),
                n = l.n(i),
                r = l("693566"),
                u = l.n(r),
                s = l("851387"),
                o = l("305961"),
                c = l("697218"),
                d = l("158998"),
                f = l("782340");
            let p = new u({
                maxAge: 6e4
            });

            function h(e, t, l) {
                null != a && clearTimeout(a), a = setTimeout(() => {
                    let a = [],
                        i = e => {
                            a.push(e.id)
                        };
                    if (null == e) n.forEach(o.default.getGuilds(), i);
                    else if (Array.isArray(e)) e.forEach(e => {
                        let t = o.default.getGuild(e);
                        null != t && i(t)
                    });
                    else {
                        let t = o.default.getGuild(e);
                        null != t && i(t)
                    }
                    a.length > 0 && s.default.requestMembers(a, t.toLocaleLowerCase(), l)
                }, 200)
            }

            function E(e, t) {
                let l = "".concat(null != e ? e : "", ":").concat(t),
                    a = p.get(l);
                if (null != a) return a;
                p.set(l, !0)
            }
            var A = {
                getGuildNameSuggestion: function(e) {
                    let t = c.default.getCurrentUser(),
                        l = d.getName(t);
                    return null == l || 0 === l.length ? "" : f.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                        username: (null == e ? void 0 : e.truncateUsername) ? l.slice(0, 20) : l
                    })
                },
                requestMembers(e, t) {
                    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        a = Array.isArray(e),
                        i = [],
                        n = !1;
                    if (a) e.forEach(e => {
                        let l = E(e, t);
                        null == l && i.push(e)
                    });
                    else {
                        let l = E(e, t);
                        null == l && (n = !0)
                    }
                    i.length > 0 && a ? h(i, t, l) : n && h(e, t, l)
                }
            }
        },
        905571: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            var a = l("577427"),
                i = l("782340"),
                n = {
                    MENTION_EVERYONE: () => ({
                        test: "everyone",
                        text: "@everyone",
                        description: i.default.Messages.MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION
                    }),
                    MENTION_HERE: () => ({
                        test: "here",
                        text: "@here",
                        description: i.default.Messages.MENTION_HERE_AUTOCOMPLETE_DESCRIPTION
                    }),
                    MENTION_CLYDE: () => ({
                        test: "clyde",
                        text: "@Clyde",
                        description: i.default.Messages.CLYDE_MENTION_DESCRIPTION
                    }),
                    LAUNCHABLE_APPLICATIONS: () => a.default.launchableApplicationViewItems
                }
        }
    }
]);
//# sourceMappingURL=25f4465a5663faa10637.js.map