(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37102"], {
        565581: function(e, t, l) {
            "use strict";
            e.exports = l.p + "f6bc645aead00959a690.svg"
        },
        154393: function(e, t, l) {
            "use strict";
            e.exports = l.p + "fef39f80370ecfd7507d.svg"
        },
        280609: function(e, t, l) {
            "use strict";
            e.exports = l.p + "c00cfaed1382bf7f33d4.svg"
        },
        595247: function(e, t, l) {
            "use strict";
            e.exports = l.p + "c8576c5063b9f32889cb.svg"
        },
        551921: function(e, t, l) {
            "use strict";
            e.exports = l.p + "27f92332674f9dacc1e9.svg"
        },
        153518: function(e, t, l) {
            "use strict";
            e.exports = l.p + "f95c22b2edd5edef268b.svg"
        },
        959254: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                sync: function() {
                    return c
                }
            });
            var n = l("913144"),
                a = l("605250"),
                s = l("355045"),
                i = l("49111");
            let o = new a.default("CloudSync");
            class u {
                constructor(e) {
                    this.message = e
                }
            }
            async function c(e, t) {
                let l, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                n.default.dispatch({
                    type: "GAME_CLOUD_SYNC_START",
                    applicationId: e,
                    branchId: t
                });
                try {
                    if ((l = await s.syncApplication(e, t, a)).type === i.CloudSyncResultTypes.CONFLICT) throw n.default.dispatch({
                        type: "GAME_CLOUD_SYNC_CONFLICT",
                        applicationId: e,
                        branchId: t,
                        next: l.next,
                        remote: l.remote
                    }), new u("Conflict in cloud sync.");
                    (l.type === i.CloudSyncResultTypes.PULL || l.type === i.CloudSyncResultTypes.PUSH) && o.info("Sync complete", l)
                } catch (l) {
                    if (l instanceof u) throw l;
                    throw n.default.dispatch({
                        type: "GAME_CLOUD_SYNC_ERROR",
                        applicationId: e,
                        branchId: t
                    }), o.error("Failed to cloud sync:", l), Error("Failed to cloud sync.")
                }
                return n.default.dispatch({
                    type: "GAME_CLOUD_SYNC_COMPLETE",
                    applicationId: e,
                    branchId: t
                }), l
            }
        },
        406189: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("913144"),
                a = {
                    updateChannelDimensions(e, t, l, a, s) {
                        n.default.wait(() => {
                            n.default.dispatch({
                                type: "UPDATE_CHANNEL_DIMENSIONS",
                                channelId: e,
                                scrollTop: t,
                                scrollHeight: l,
                                offsetHeight: a
                            }), null != s && s()
                        })
                    },
                    updateChannelListScroll(e, t) {
                        let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        n.default.dispatch({
                            type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                            guildId: e,
                            scrollTop: t,
                            channelIds: l
                        })
                    },
                    channelListScrollTo(e, t) {
                        n.default.dispatch({
                            type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                            guildId: e,
                            scrollTo: t,
                            channelIds: []
                        })
                    },
                    clearChannelListScrollTo(e) {
                        n.default.dispatch({
                            type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                            guildId: e,
                            scrollTo: null,
                            channelIds: []
                        })
                    },
                    clearChannelDimensions(e, t) {
                        this.updateChannelDimensions(e, null, null, null, t)
                    },
                    updateGuildListScrollTo(e) {
                        n.default.dispatch({
                            type: "UPDATE_GUILD_LIST_DIMENSIONS",
                            scrollTop: e
                        })
                    }
                }
        },
        596169: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                playApplication: function() {
                    return S
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("866227"),
                i = l.n(s),
                o = l("446674"),
                u = l("77078"),
                c = l("959254"),
                r = l("823411"),
                d = l("546463"),
                p = l("148813"),
                f = l("145131"),
                C = l("599110"),
                _ = l("49111"),
                h = l("782340"),
                y = l("141804"),
                A = l("926622");
            class T extends a.PureComponent {
                renderConflictButton(e, t, l, a) {
                    return (0, n.jsxs)(u.Button, {
                        className: y.conflictButton,
                        innerClassName: y.conflictButtonInner,
                        onClick: a,
                        children: [(0, n.jsx)("div", {
                            className: l
                        }), (0, n.jsxs)("div", {
                            className: y.buttonBody,
                            children: [(0, n.jsx)("div", {
                                className: y.conflictTitle,
                                children: e
                            }), (0, n.jsx)("div", {
                                children: h.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_LAST_MODIFIED
                            }), (0, n.jsx)("div", {
                                className: y.timestamp,
                                children: i(t).calendar()
                            })]
                        })]
                    })
                }
                renderError() {
                    let {
                        application: e
                    } = this.props;
                    return (0, n.jsxs)(a.Fragment, {
                        children: [(0, n.jsxs)(u.ModalContent, {
                            children: [(0, n.jsx)(f.default, {
                                justify: f.default.Justify.CENTER,
                                children: (0, n.jsx)("div", {
                                    className: y.errorArt
                                })
                            }), (0, n.jsx)("div", {
                                className: y.description,
                                children: h.default.Messages.CLOUD_SYNC_MODAL_ERROR_DESCRIPTION.format({
                                    applicationName: e.name
                                })
                            })]
                        }), (0, n.jsx)(u.ModalFooter, {
                            children: (0, n.jsxs)(f.default, {
                                justify: f.default.Justify.BETWEEN,
                                children: [(0, n.jsx)(u.Button, {
                                    className: y.linkButton,
                                    size: y.linkButtonSize,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    onClick: this.onClose,
                                    children: h.default.Messages.CANCEL
                                }), (0, n.jsxs)(f.default, {
                                    direction: f.default.Direction.HORIZONTAL,
                                    justify: f.default.Justify.END,
                                    children: [(0, n.jsx)(u.Button, {
                                        look: u.Button.Looks.LINK,
                                        color: u.Button.Colors.PRIMARY,
                                        onClick: () => this.handlePlay(),
                                        className: y.retryButton,
                                        children: h.default.Messages.RETRY
                                    }), (0, n.jsx)(u.Button, {
                                        onClick: () => this.handlePlay(!1),
                                        children: h.default.Messages.GAME_ACTION_BUTTON_PLAY
                                    })]
                                })]
                            })
                        })]
                    })
                }
                renderConflict() {
                    let {
                        application: e,
                        cloudSyncState: t
                    } = this.props;
                    if (t.type !== _.CloudSyncStateTypes.CONFLICT) throw Error("Cannot render conflict for non conflict type");
                    return (0, n.jsxs)(u.ModalContent, {
                        className: A.marginBottom20,
                        children: [(0, n.jsx)("div", {
                            className: y.description,
                            children: h.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_DESCRIPTION.format({
                                applicationName: e.name
                            })
                        }), this.renderConflictButton(h.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_DOWNLOAD, t.remote.timestamp, y.conflictDownloadArt, this.handleChooseDownload), (0, n.jsxs)(f.default, {
                            className: y.choiceWrapper,
                            align: f.default.Align.CENTER,
                            children: [(0, n.jsx)("div", {
                                className: y.choiceLine
                            }), (0, n.jsx)("div", {
                                className: y.choiceTitle,
                                children: h.default.Messages.CLOUD_SYNC_MODAL_OR
                            }), (0, n.jsx)("div", {
                                className: y.choiceLine
                            })]
                        }), this.renderConflictButton(h.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_UPLOAD, t.next.timestamp, y.conflictUploadArt, this.handleChooseUpload)]
                    })
                }
                render() {
                    let {
                        cloudSyncState: e,
                        transitionState: t
                    } = this.props, l = e.type === _.CloudSyncStateTypes.CONFLICT ? h.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_HEADER : h.default.Messages.CLOUD_SYNC_MODAL_ERROR_HEADER;
                    return (0, n.jsxs)(u.ModalRoot, {
                        transitionState: t,
                        className: y.modal,
                        "aria-label": l,
                        children: [(0, n.jsxs)(u.ModalHeader, {
                            separator: !1,
                            children: [(0, n.jsx)(u.ModalCloseButton, {
                                className: y.closeButton,
                                onClick: this.onClose
                            }), (0, n.jsx)(u.FormTitle, {
                                tag: "h2",
                                className: A.marginReset,
                                children: l
                            })]
                        }), e.type === _.CloudSyncStateTypes.CONFLICT ? this.renderConflict() : this.renderError()]
                    })
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.onClose = () => {
                        this.props.onClose()
                    }, this.handlePlay = function() {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            {
                                libraryApplication: n,
                                analyticsParams: a
                            } = t.props;
                        t.onClose(), S(n.id, n, {
                            analyticsParams: a,
                            cloudSync: e,
                            cloudSyncForceHash: l
                        })
                    }, this.handleChooseDownload = () => {
                        let {
                            cloudSyncState: e
                        } = this.props;
                        e.type === _.CloudSyncStateTypes.CONFLICT && this.handlePlay(!0, e.remote.hash)
                    }, this.handleChooseUpload = () => {
                        let {
                            cloudSyncState: e
                        } = this.props;
                        e.type === _.CloudSyncStateTypes.CONFLICT && this.handlePlay(!0, e.next.hash)
                    }
                }
            }
            let E = o.default.connectStores([p.default, d.default], e => {
                let {
                    libraryApplication: t,
                    branchId: l
                } = e;
                return {
                    cloudSyncState: p.default.getState(t.id, l),
                    application: d.default.getGame(t.id)
                }
            })(T);
            async function S(e, t, l) {
                let a = d.default.getGame(e);
                if (null == a) return;
                let {
                    cloudSync: s = !0,
                    cloudSyncForceHash: i = null,
                    analyticsParams: o
                } = l;
                if (s && null != t) {
                    let e = t.branchId;
                    try {
                        await c.sync(t.id, e, i)
                    } catch (l) {
                        (0, u.openModal)(l => (0, n.jsx)(E, {
                            libraryApplication: t,
                            analyticsParams: o,
                            branchId: e,
                            ...l
                        }));
                        return
                    }
                }
                return C.default.track(_.AnalyticEvents.APPLICATION_OPENED, {
                    application_id: a.id,
                    application_name: a.name,
                    type: _.AnalyticsGameOpenTypes.LAUNCH,
                    distributor: null != t ? t.getDistributor() : null,
                    ...o
                }), r.default.launch(a.id, null == t ? void 0 : t.branchId)
            }
        },
        104589: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                show: function() {
                    return g
                },
                hide: function() {
                    return O
                },
                search: function() {
                    return D
                },
                selectResult: function() {
                    return U
                },
                switchToResult: function() {
                    return P
                }
            });
            var n = l("913144"),
                a = l("450911"),
                s = l("406189"),
                i = l("987317"),
                o = l("123225"),
                u = l("537325"),
                c = l("144491"),
                r = l("239380"),
                d = l("233069"),
                p = l("42203"),
                f = l("686470"),
                C = l("18494"),
                _ = l("162771"),
                h = l("599110"),
                y = l("340454"),
                A = l("116460"),
                T = l("49111"),
                E = l("724210");
            let S = () => Promise.resolve();
            {
                let e = l("780009");
                S = e.playApplication
            }
            let I = Object.freeze({
                    [o.AutocompleterQuerySymbols.USER]: o.AutocompleterResultTypes.USER,
                    [o.AutocompleterQuerySymbols.TEXT_CHANNEL]: o.AutocompleterResultTypes.TEXT_CHANNEL,
                    [o.AutocompleterQuerySymbols.VOICE_CHANNEL]: o.AutocompleterResultTypes.VOICE_CHANNEL,
                    [o.AutocompleterQuerySymbols.GUILD]: o.AutocompleterResultTypes.GUILD,
                    [o.AutocompleterQuerySymbols.APPLICATION]: o.AutocompleterResultTypes.APPLICATION
                }),
                N = new RegExp("^".concat(o.AutocompleterQuerySymbols.USER, "|").concat(o.AutocompleterQuerySymbols.TEXT_CHANNEL, "|").concat(o.AutocompleterQuerySymbols.VOICE_CHANNEL, "|\\").concat(o.AutocompleterQuerySymbols.GUILD, "|\\").concat(o.AutocompleterQuerySymbols.APPLICATION));

            function m(e) {
                let [t, l] = function(e) {
                    var t;
                    let l = e.charAt(0),
                        n = null !== (t = I[l]) && void 0 !== t ? t : null;
                    return [e.replace(N, ""), n]
                }(e);
                return {
                    query: t,
                    queryMode: l
                }
            }

            function L(e, t) {
                let {
                    results: l,
                    queryMode: n,
                    query: a,
                    maxQueryLength: s
                } = A.default.getProps(), i = _.default.getGuildId(), u = C.default.getChannelId(i), c = l[(0, o.findNextSelectedResult)(o.FindResultDirections.DOWN, -1, l)], r = y.default.isEmail(a), f = y.default.isPhoneNumber(a), T = y.default.isUserTagLike(a), S = null != u && (0, E.isStaticChannelRoute)(u), I = {
                    current_channel_id: S ? void 0 : u,
                    current_channel_static_route: S ? u : void 0,
                    current_guild_id: i,
                    query_mode: null != n ? n : "GENERAL",
                    query_length: a.length,
                    max_query_length: s,
                    is_email_like: r,
                    is_phone_like: f,
                    is_username_like: T,
                    query: r || f || T ? null : a,
                    top_result_type: null != c ? c.type : null,
                    top_result_score: null != c ? c.score : null,
                    num_results_total: A.default.getResultTotals(),
                    num_results_users: A.default.getResultTotals(o.AutocompleterResultTypes.USER),
                    num_results_text_channels: A.default.getResultTotals(o.AutocompleterResultTypes.TEXT_CHANNEL),
                    num_results_voice_channels: A.default.getResultTotals(o.AutocompleterResultTypes.VOICE_CHANNEL),
                    num_results_guilds: A.default.getResultTotals(o.AutocompleterResultTypes.GUILD),
                    num_results_group_dms: A.default.getResultTotals(o.AutocompleterResultTypes.GROUP_DM)
                };
                if (null != u) {
                    let e = p.default.getChannel(u);
                    I.current_channel_type = null != e ? e.type : null
                }
                if (null != t) {
                    let {
                        type: e,
                        score: n,
                        record: a
                    } = t;
                    switch (I.selected_type = e, I.selected_score = n, I.selected_index = l.indexOf(t), e) {
                        case o.AutocompleterResultTypes.GUILD:
                            I.selected_guild_id = a.id;
                            break;
                        case o.AutocompleterResultTypes.TEXT_CHANNEL:
                        case o.AutocompleterResultTypes.VOICE_CHANNEL:
                            a instanceof d.ChannelRecordBase && (I.selected_guild_id = null != a.guild_id ? a.guild_id : null), I.selected_channel_id = a.id;
                            break;
                        case o.AutocompleterResultTypes.GROUP_DM:
                            I.selected_channel_id = a.id;
                            break;
                        case o.AutocompleterResultTypes.USER:
                            I.selected_user_id = a.id
                    }
                }
                h.default.track(e, I)
            }

            function R() {
                n.default.dispatch({
                    type: "QUICKSWITCHER_HIDE"
                })
            }

            function g() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                ! function(e) {
                    let t;
                    if (A.default.isOpen()) return;
                    let l = _.default.getGuildId(),
                        n = C.default.getChannelId(l);
                    if (null != n) {
                        let e = p.default.getChannel(n);
                        t = null != e ? e.type : null
                    }
                    h.default.track(T.AnalyticEvents.QUICKSWITCHER_OPENED, {
                        source: e,
                        current_guild_id: l,
                        current_channel_id: n,
                        current_channel_type: t
                    })
                }(e), n.default.dispatch({
                    type: "QUICKSWITCHER_SHOW",
                    ...m(t)
                })
            }

            function O() {
                L(T.AnalyticEvents.QUICKSWITCHER_CLOSED), R()
            }

            function D(e) {
                n.default.dispatch({
                    type: "QUICKSWITCHER_SEARCH",
                    ...m(e)
                })
            }

            function U(e) {
                n.default.dispatch({
                    type: "QUICKSWITCHER_SELECT",
                    selectedIndex: e
                })
            }

            function P(e) {
                let t;
                R(), L(T.AnalyticEvents.QUICKSWITCHER_RESULT_SELECTED, e);
                let {
                    type: l,
                    record: d
                } = e, C = {
                    page: T.AnalyticsPages.QUICK_SWITCHER
                };
                switch (l) {
                    case o.AutocompleterResultTypes.GUILD:
                        (0, r.transitionToGuild)(d.id, {
                            navigationReplace: !0
                        });
                        break;
                    case o.AutocompleterResultTypes.TEXT_CHANNEL:
                        null != (t = p.default.getChannel(d.id)) && (0, c.transitionToChannel)(t.id, {
                            state: {
                                analyticsSource: C
                            },
                            navigationReplace: !0
                        });
                        break;
                    case o.AutocompleterResultTypes.VOICE_CHANNEL:
                        null != (t = p.default.getChannel(d.id)) && (i.default.selectVoiceChannel(d.id), (0, c.transitionToChannel)(t.id, {
                            state: {
                                analyticsSource: C
                            },
                            navigationReplace: !0
                        }));
                        break;
                    case o.AutocompleterResultTypes.USER:
                        a.default.openPrivateChannel([d.id], !1, !1, "Quickswitcher"), s.default.channelListScrollTo(T.ME, d.id);
                        break;
                    case o.AutocompleterResultTypes.GROUP_DM:
                        (0, c.transitionToChannel)(d.id, {
                            navigationReplace: !0
                        }), s.default.channelListScrollTo(T.ME, d.id);
                        break;
                    case o.AutocompleterResultTypes.APPLICATION:
                        let _ = f.default.getActiveLibraryApplication(d.id);
                        S(d.id, _, {
                            analyticsParams: {
                                source: T.AnalyticsLocations.QUICK_SWITCHER,
                                location: T.AnalyticsLocations.QUICK_SWITCHER
                            }
                        });
                        break;
                    case o.AutocompleterResultTypes.LINK:
                        (0, u.default)(d.path, {
                            navigationReplace: !0
                        })
                }
                n.default.dispatch({
                    type: "QUICKSWITCHER_SWITCH_TO",
                    result: e
                })
            }
        },
        971427: function(e, t, l) {
            "use strict";
            let n;
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("446674"),
                s = l("913144");
            let i = {
                hasAcceptedStoreTerms: !1,
                hasAcceptedEulaIds: []
            };
            class o extends a.default.PersistedStore {
                initialize(e) {
                    n = null != e ? e : i
                }
                getState() {
                    return n
                }
                get hasAcceptedStoreTerms() {
                    return n.hasAcceptedStoreTerms
                }
                hasAcceptedEULA(e) {
                    return n.hasAcceptedEulaIds.includes(e)
                }
            }
            o.displayName = "ApplicationStoreUserSettingsStore", o.persistKey = "ApplicationStoreUserSettingsStore", o.migrations = [e => null == e.hasAcceptedEulaIds ? {
                ...e,
                hasAcceptedEulaIds: []
            } : e];
            var u = new o(s.default, {
                APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
                    n.hasAcceptedStoreTerms = !0
                },
                APPLICATION_STORE_ACCEPT_EULA: function(e) {
                    let {
                        eulaId: t
                    } = e;
                    if (n.hasAcceptedEulaIds.includes(t)) return !1;
                    n.hasAcceptedEulaIds.push(t)
                }
            })
        },
        148813: function(e, t, l) {
            "use strict";
            let n, a, s;
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var i = l("446674"),
                o = l("913144"),
                u = l("959254"),
                c = l("686470"),
                r = l("568307"),
                d = l("964889"),
                p = l("773336"),
                f = l("355045"),
                C = l("49111");
            class _ extends i.default.Store {
                initialize() {
                    p.isPlatformEmbedded && f.init(), n = {}, a = new Set, s = []
                }
                getState(e, t) {
                    let l = (0, d.getComboId)(e, t);
                    return n[l]
                }
                isSyncing(e, t) {
                    let l = (0, d.getComboId)(e, t);
                    return a.has(l)
                }
            }
            _.displayName = "CloudSyncStore";
            var h = new _(o.default, {
                GAME_CLOUD_SYNC_START: function(e) {
                    let {
                        applicationId: t,
                        branchId: l
                    } = e, n = (0, d.getComboId)(t, l);
                    a.add(n)
                },
                GAME_CLOUD_SYNC_UPDATE: function(e) {
                    let {
                        state: t
                    } = e;
                    for (let e of Object.keys(t)) n[e] = t[e]
                },
                GAME_CLOUD_SYNC_COMPLETE: function(e) {
                    let {
                        applicationId: t,
                        branchId: l
                    } = e, s = (0, d.getComboId)(t, l);
                    return a.delete(s), n[s] = {
                        type: C.CloudSyncStateTypes.DONE,
                        timestamp: Date.now()
                    }, !0
                },
                GAME_CLOUD_SYNC_CONFLICT: function(e) {
                    let {
                        applicationId: t,
                        branchId: l,
                        next: s,
                        remote: i
                    } = e, o = (0, d.getComboId)(t, l);
                    n[o] = {
                        type: C.CloudSyncStateTypes.CONFLICT,
                        next: s,
                        remote: i
                    }, a.delete(o)
                },
                GAME_CLOUD_SYNC_ERROR: function(e) {
                    let {
                        applicationId: t,
                        branchId: l
                    } = e, s = (0, d.getComboId)(t, l);
                    n[s] = {
                        type: C.CloudSyncStateTypes.ERROR
                    }, a.delete(s)
                },
                RUNNING_GAMES_CHANGE: function() {
                    let e = r.default.getRunningDiscordApplicationIds(),
                        t = s.filter(t => !e.includes(t));
                    for (let e of t) {
                        let t = c.default.getActiveLibraryApplication(e);
                        null != t && o.default.wait(() => {
                            try {
                                u.sync(t.id, t.branchId)
                            } catch (e) {}
                        })
                    }
                    return s = e, !1
                }
            })
        },
        355045: function(e, t, l) {
            "use strict";
            let n;
            l.r(t), l.d(t, {
                init: function() {
                    return C
                },
                syncApplication: function() {
                    return _
                }
            });
            var a = l("872717"),
                s = l("913144"),
                i = l("605250"),
                o = l("831610"),
                u = l("271938"),
                c = l("535974"),
                r = l("964889"),
                d = l("773336"),
                p = l("50885"),
                f = l("49111");
            async function C() {
                if (null != n) return;
                if (!(d.isPlatformEmbedded && ((0, d.isMac)() || (0, d.isWindows)()))) {
                    new(0, i.default)("CloudSyncUtils").warn("CloudSync is not supported on this platform");
                    return
                }
                await p.default.ensureModule("discord_cloudsync");
                let e = p.default.getCloudSync();
                (n = new e).on("state", e => s.default.dispatch({
                    type: "GAME_CLOUD_SYNC_UPDATE",
                    state: e
                }))
            }

            function _(e, t) {
                var l;
                let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (!c.default.supportsCloudSync(e, t)) return Promise.resolve({
                    type: f.CloudSyncResultTypes.NONE
                });
                let i = function() {
                        if (null == n) throw Error("Initialize cloud sync module before syncing.");
                        return n
                    }(),
                    d = c.default.getState(e, t);
                if (null == d) throw Error("No dispatch state for ".concat(e, ":").concat(t));
                let p = null !== (l = d.storage) && void 0 !== l ? l : {},
                    C = (0, r.getComboId)(e, t),
                    _ = u.default.getToken();
                if (null == _) throw Error("Cannot use cloud sync when not authenticated.");
                let h = null != d.installPath ? (0, o.default)(d.installPath) : null;
                if (null == h) throw Error("No install path for ".concat(e, ":").concat(t));
                let y = u.default.getId(),
                    A = {
                        forceHash: s,
                        manifestPath: f.DefaultCloudSyncConfiguration.STORAGE_MANIFEST(h, y),
                        roots: null != p.roots ? p.roots : [{
                            id: f.DefaultCloudSyncConfiguration.ROOT_ID,
                            paths: Object.keys(f.DefaultCloudSyncConfiguration.ROOT_PLATFORMS).map(e => ({
                                platform: e,
                                path: f.DefaultCloudSyncConfiguration.ROOT_STORAGE_PATH(h, y)
                            })),
                            patterns: f.DefaultCloudSyncConfiguration.ROOT_PATTERN
                        }],
                        storage: {
                            baseURL: "".concat(a.default.getAPIBaseURL()).concat(f.Endpoints.APPLICATION_STORAGE(e, t)),
                            token: _
                        },
                        replacements: {
                            INSTALLDIR: f.DefaultCloudSyncConfiguration.INSTALL_DIR(h),
                            USERID: y,
                            BRANCHID: t
                        }
                    };
                return i.sync(C, A)
            }
        },
        551994: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                installApplication: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                s = l("190017"),
                i = l("971427"),
                o = l("98328");

            function u(e, t, u, c, r) {
                let d = o.default.getInstallationPath(e.id, t),
                    p = null != e.eulaId && !i.default.hasAcceptedEULA(e.eulaId);
                null == d || p ? (0, a.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await l.el("727441").then(l.bind(l, "727441"));
                    return l => (0, n.jsx)(a, {
                        ...l,
                        applicationId: e.id,
                        branchId: t,
                        analyticsLocation: r
                    })
                }) : (0, s.installApplication)({
                    application: e,
                    branchId: t,
                    buildId: u,
                    manifestIds: c,
                    installationPath: d,
                    analyticsLocation: r
                })
            }
        },
        780009: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                playApplication: function() {
                    return a.playApplication
                },
                installApplication: function() {
                    return p
                },
                updateApplication: function() {
                    return f
                },
                repairApplication: function() {
                    return C
                },
                performDefaultLibraryApplicationAction: function() {
                    return _
                }
            });
            var n = l("190017"),
                a = l("596169"),
                s = l("546463"),
                i = l("677225"),
                o = l("9377"),
                u = l("535974"),
                c = l("352326"),
                r = l("551994"),
                d = l("49111");

            function p(e, t, l) {
                let n = s.default.getGame(e);
                if (null == n) return;
                let a = i.default.getTargetBuildId(n.id, t),
                    o = i.default.getTargetManifests(n.id, t);
                null != a && null != o && null != r.installApplication && (0, r.installApplication)(n, t, a, o, l)
            }

            function f(e, t) {
                let l = s.default.getGame(e);
                if (null != l) return n.updateApplication(l, t, i.default.getTargetBuildId(l.id, t), i.default.getTargetManifests(l.id, t))
            }

            function C(e, t, l) {
                let a = s.default.getGame(e);
                if (null != a) return n.repairApplication(a, t, l)
            }

            function _(e, t) {
                let l = (0, o.getDefaultLibraryApplicationAction)(e, u.default, c.default),
                    {
                        analyticsParams: n
                    } = t;
                switch (l) {
                    case d.LibraryApplicationActions.PLAY:
                        return (0, a.playApplication)(e.id, e, {
                            analyticsParams: n
                        });
                    case d.LibraryApplicationActions.INSTALL:
                        return p(e.id, e.branchId, n.source);
                    case d.LibraryApplicationActions.UPDATE:
                        return f(e.id, e.branchId)
                }
            }
        }
    }
]);
//# sourceMappingURL=a3892550d233eb36a0ef.js.map