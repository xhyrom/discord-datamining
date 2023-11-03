(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37102"], {
        565581: function(t, e, l) {
            "use strict";
            t.exports = l.p + "f6bc645aead00959a690.svg"
        },
        154393: function(t, e, l) {
            "use strict";
            t.exports = l.p + "fef39f80370ecfd7507d.svg"
        },
        280609: function(t, e, l) {
            "use strict";
            t.exports = l.p + "c00cfaed1382bf7f33d4.svg"
        },
        595247: function(t, e, l) {
            "use strict";
            t.exports = l.p + "c8576c5063b9f32889cb.svg"
        },
        551921: function(t, e, l) {
            "use strict";
            t.exports = l.p + "27f92332674f9dacc1e9.svg"
        },
        153518: function(t, e, l) {
            "use strict";
            t.exports = l.p + "f95c22b2edd5edef268b.svg"
        },
        959254: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
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
                constructor(t) {
                    this.message = t
                }
            }
            async function c(t, e) {
                let l, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                n.default.dispatch({
                    type: "GAME_CLOUD_SYNC_START",
                    applicationId: t,
                    branchId: e
                });
                try {
                    if ((l = await s.syncApplication(t, e, a)).type === i.CloudSyncResultTypes.CONFLICT) throw n.default.dispatch({
                        type: "GAME_CLOUD_SYNC_CONFLICT",
                        applicationId: t,
                        branchId: e,
                        next: l.next,
                        remote: l.remote
                    }), new u("Conflict in cloud sync.");
                    (l.type === i.CloudSyncResultTypes.PULL || l.type === i.CloudSyncResultTypes.PUSH) && o.info("Sync complete", l)
                } catch (l) {
                    if (l instanceof u) throw l;
                    throw n.default.dispatch({
                        type: "GAME_CLOUD_SYNC_ERROR",
                        applicationId: t,
                        branchId: e
                    }), o.error("Failed to cloud sync:", l), Error("Failed to cloud sync.")
                }
                return n.default.dispatch({
                    type: "GAME_CLOUD_SYNC_COMPLETE",
                    applicationId: t,
                    branchId: e
                }), l
            }
        },
        406189: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return a
                }
            });
            var n = l("913144"),
                a = {
                    updateChannelDimensions(t, e, l, a, s) {
                        n.default.wait(() => {
                            n.default.dispatch({
                                type: "UPDATE_CHANNEL_DIMENSIONS",
                                channelId: t,
                                scrollTop: e,
                                scrollHeight: l,
                                offsetHeight: a
                            }), null != s && s()
                        })
                    },
                    updateChannelListScroll(t, e) {
                        let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        n.default.dispatch({
                            type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                            guildId: t,
                            scrollTop: e,
                            channelIds: l
                        })
                    },
                    channelListScrollTo(t, e) {
                        n.default.dispatch({
                            type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                            guildId: t,
                            scrollTo: e,
                            channelIds: []
                        })
                    },
                    clearChannelListScrollTo(t) {
                        n.default.dispatch({
                            type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                            guildId: t,
                            scrollTo: null,
                            channelIds: []
                        })
                    },
                    clearChannelDimensions(t, e) {
                        this.updateChannelDimensions(t, null, null, null, e)
                    },
                    updateGuildListScrollTo(t) {
                        n.default.dispatch({
                            type: "UPDATE_GUILD_LIST_DIMENSIONS",
                            scrollTop: t
                        })
                    }
                }
        },
        596169: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
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
                d = l("299285"),
                p = l("148813"),
                f = l("145131"),
                C = l("599110"),
                A = l("49111"),
                _ = l("782340"),
                h = l("141804"),
                y = l("926622");
            class T extends a.PureComponent {
                renderConflictButton(t, e, l, a) {
                    return (0, n.jsxs)(u.Button, {
                        className: h.conflictButton,
                        innerClassName: h.conflictButtonInner,
                        onClick: a,
                        children: [(0, n.jsx)("div", {
                            className: l
                        }), (0, n.jsxs)("div", {
                            className: h.buttonBody,
                            children: [(0, n.jsx)("div", {
                                className: h.conflictTitle,
                                children: t
                            }), (0, n.jsx)("div", {
                                children: _.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_LAST_MODIFIED
                            }), (0, n.jsx)("div", {
                                className: h.timestamp,
                                children: i(e).calendar()
                            })]
                        })]
                    })
                }
                renderError() {
                    let {
                        application: t
                    } = this.props;
                    return (0, n.jsxs)(a.Fragment, {
                        children: [(0, n.jsxs)(u.ModalContent, {
                            children: [(0, n.jsx)(f.default, {
                                justify: f.default.Justify.CENTER,
                                children: (0, n.jsx)("div", {
                                    className: h.errorArt
                                })
                            }), (0, n.jsx)("div", {
                                className: h.description,
                                children: _.default.Messages.CLOUD_SYNC_MODAL_ERROR_DESCRIPTION.format({
                                    applicationName: t.name
                                })
                            })]
                        }), (0, n.jsx)(u.ModalFooter, {
                            children: (0, n.jsxs)(f.default, {
                                justify: f.default.Justify.BETWEEN,
                                children: [(0, n.jsx)(u.Button, {
                                    className: h.linkButton,
                                    size: h.linkButtonSize,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    onClick: this.onClose,
                                    children: _.default.Messages.CANCEL
                                }), (0, n.jsxs)(f.default, {
                                    direction: f.default.Direction.HORIZONTAL,
                                    justify: f.default.Justify.END,
                                    children: [(0, n.jsx)(u.Button, {
                                        look: u.Button.Looks.LINK,
                                        color: u.Button.Colors.PRIMARY,
                                        onClick: () => this.handlePlay(),
                                        className: h.retryButton,
                                        children: _.default.Messages.RETRY
                                    }), (0, n.jsx)(u.Button, {
                                        onClick: () => this.handlePlay(!1),
                                        children: _.default.Messages.GAME_ACTION_BUTTON_PLAY
                                    })]
                                })]
                            })
                        })]
                    })
                }
                renderConflict() {
                    let {
                        application: t,
                        cloudSyncState: e
                    } = this.props;
                    if (e.type !== A.CloudSyncStateTypes.CONFLICT) throw Error("Cannot render conflict for non conflict type");
                    return (0, n.jsxs)(u.ModalContent, {
                        className: y.marginBottom20,
                        children: [(0, n.jsx)("div", {
                            className: h.description,
                            children: _.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_DESCRIPTION.format({
                                applicationName: t.name
                            })
                        }), this.renderConflictButton(_.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_DOWNLOAD, e.remote.timestamp, h.conflictDownloadArt, this.handleChooseDownload), (0, n.jsxs)(f.default, {
                            className: h.choiceWrapper,
                            align: f.default.Align.CENTER,
                            children: [(0, n.jsx)("div", {
                                className: h.choiceLine
                            }), (0, n.jsx)("div", {
                                className: h.choiceTitle,
                                children: _.default.Messages.CLOUD_SYNC_MODAL_OR
                            }), (0, n.jsx)("div", {
                                className: h.choiceLine
                            })]
                        }), this.renderConflictButton(_.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_UPLOAD, e.next.timestamp, h.conflictUploadArt, this.handleChooseUpload)]
                    })
                }
                render() {
                    let {
                        cloudSyncState: t,
                        transitionState: e
                    } = this.props, l = t.type === A.CloudSyncStateTypes.CONFLICT ? _.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_HEADER : _.default.Messages.CLOUD_SYNC_MODAL_ERROR_HEADER;
                    return (0, n.jsxs)(u.ModalRoot, {
                        transitionState: e,
                        className: h.modal,
                        "aria-label": l,
                        children: [(0, n.jsxs)(u.ModalHeader, {
                            separator: !1,
                            children: [(0, n.jsx)(u.ModalCloseButton, {
                                className: h.closeButton,
                                onClick: this.onClose
                            }), (0, n.jsx)(u.FormTitle, {
                                tag: "h2",
                                className: y.marginReset,
                                children: l
                            })]
                        }), t.type === A.CloudSyncStateTypes.CONFLICT ? this.renderConflict() : this.renderError()]
                    })
                }
                constructor(...t) {
                    var e;
                    super(...t), e = this, this.onClose = () => {
                        this.props.onClose()
                    }, this.handlePlay = function() {
                        let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            {
                                libraryApplication: n,
                                analyticsParams: a
                            } = e.props;
                        e.onClose(), S(n.id, n, {
                            analyticsParams: a,
                            cloudSync: t,
                            cloudSyncForceHash: l
                        })
                    }, this.handleChooseDownload = () => {
                        let {
                            cloudSyncState: t
                        } = this.props;
                        t.type === A.CloudSyncStateTypes.CONFLICT && this.handlePlay(!0, t.remote.hash)
                    }, this.handleChooseUpload = () => {
                        let {
                            cloudSyncState: t
                        } = this.props;
                        t.type === A.CloudSyncStateTypes.CONFLICT && this.handlePlay(!0, t.next.hash)
                    }
                }
            }
            let E = o.default.connectStores([p.default, d.default], t => {
                let {
                    libraryApplication: e,
                    branchId: l
                } = t;
                return {
                    cloudSyncState: p.default.getState(e.id, l),
                    application: d.default.getApplication(e.id)
                }
            })(T);
            async function S(t, e, l) {
                let a = d.default.getApplication(t);
                if (null == a) return;
                let {
                    cloudSync: s = !0,
                    cloudSyncForceHash: i = null,
                    analyticsParams: o
                } = l;
                if (s && null != e) {
                    let t = e.branchId;
                    try {
                        await c.sync(e.id, t, i)
                    } catch (l) {
                        (0, u.openModal)(l => (0, n.jsx)(E, {
                            libraryApplication: e,
                            analyticsParams: o,
                            branchId: t,
                            ...l
                        }));
                        return
                    }
                }
                return C.default.track(A.AnalyticEvents.APPLICATION_OPENED, {
                    application_id: a.id,
                    application_name: a.name,
                    type: A.AnalyticsGameOpenTypes.LAUNCH,
                    distributor: null != e ? e.getDistributor() : null,
                    ...o
                }), r.default.launch(a.id, null == e ? void 0 : e.branchId)
            }
        },
        104589: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
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
                A = l("162771"),
                _ = l("599110"),
                h = l("340454"),
                y = l("116460"),
                T = l("49111"),
                E = l("724210");
            let S = () => Promise.resolve();
            {
                let t = l("780009");
                S = t.playApplication
            }
            let I = Object.freeze({
                    [o.AutocompleterQuerySymbols.USER]: o.AutocompleterResultTypes.USER,
                    [o.AutocompleterQuerySymbols.TEXT_CHANNEL]: o.AutocompleterResultTypes.TEXT_CHANNEL,
                    [o.AutocompleterQuerySymbols.VOICE_CHANNEL]: o.AutocompleterResultTypes.VOICE_CHANNEL,
                    [o.AutocompleterQuerySymbols.GUILD]: o.AutocompleterResultTypes.GUILD,
                    [o.AutocompleterQuerySymbols.APPLICATION]: o.AutocompleterResultTypes.APPLICATION
                }),
                N = new RegExp("^".concat(o.AutocompleterQuerySymbols.USER, "|").concat(o.AutocompleterQuerySymbols.TEXT_CHANNEL, "|").concat(o.AutocompleterQuerySymbols.VOICE_CHANNEL, "|\\").concat(o.AutocompleterQuerySymbols.GUILD, "|\\").concat(o.AutocompleterQuerySymbols.APPLICATION));

            function m(t) {
                let [e, l] = function(t) {
                    var e;
                    let l = t.charAt(0),
                        n = null !== (e = I[l]) && void 0 !== e ? e : null;
                    return [t.replace(N, ""), n]
                }(t);
                return {
                    query: e,
                    queryMode: l
                }
            }

            function L(t, e) {
                let {
                    results: l,
                    queryMode: n,
                    query: a,
                    maxQueryLength: s
                } = y.default.getProps(), i = A.default.getGuildId(), u = C.default.getChannelId(i), c = l[(0, o.findNextSelectedResult)(o.FindResultDirections.DOWN, -1, l)], r = h.default.isEmail(a), f = h.default.isPhoneNumber(a), T = h.default.isUserTagLike(a), S = null != u && (0, E.isStaticChannelRoute)(u), I = {
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
                    num_results_total: y.default.getResultTotals(),
                    num_results_users: y.default.getResultTotals(o.AutocompleterResultTypes.USER),
                    num_results_text_channels: y.default.getResultTotals(o.AutocompleterResultTypes.TEXT_CHANNEL),
                    num_results_voice_channels: y.default.getResultTotals(o.AutocompleterResultTypes.VOICE_CHANNEL),
                    num_results_guilds: y.default.getResultTotals(o.AutocompleterResultTypes.GUILD),
                    num_results_group_dms: y.default.getResultTotals(o.AutocompleterResultTypes.GROUP_DM)
                };
                if (null != u) {
                    let t = p.default.getChannel(u);
                    I.current_channel_type = null != t ? t.type : null
                }
                if (null != e) {
                    let {
                        type: t,
                        score: n,
                        record: a
                    } = e;
                    switch (I.selected_type = t, I.selected_score = n, I.selected_index = l.indexOf(e), t) {
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
                _.default.track(t, I)
            }

            function R() {
                n.default.dispatch({
                    type: "QUICKSWITCHER_HIDE"
                })
            }

            function g() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                ! function(t) {
                    let e;
                    if (y.default.isOpen()) return;
                    let l = A.default.getGuildId(),
                        n = C.default.getChannelId(l);
                    if (null != n) {
                        let t = p.default.getChannel(n);
                        e = null != t ? t.type : null
                    }
                    _.default.track(T.AnalyticEvents.QUICKSWITCHER_OPENED, {
                        source: t,
                        current_guild_id: l,
                        current_channel_id: n,
                        current_channel_type: e
                    })
                }(t), n.default.dispatch({
                    type: "QUICKSWITCHER_SHOW",
                    ...m(e)
                })
            }

            function O() {
                L(T.AnalyticEvents.QUICKSWITCHER_CLOSED), R()
            }

            function D(t) {
                n.default.dispatch({
                    type: "QUICKSWITCHER_SEARCH",
                    ...m(t)
                })
            }

            function U(t) {
                n.default.dispatch({
                    type: "QUICKSWITCHER_SELECT",
                    selectedIndex: t
                })
            }

            function P(t) {
                let e;
                R(), L(T.AnalyticEvents.QUICKSWITCHER_RESULT_SELECTED, t);
                let {
                    type: l,
                    record: d
                } = t, C = {
                    page: T.AnalyticsPages.QUICK_SWITCHER
                };
                switch (l) {
                    case o.AutocompleterResultTypes.GUILD:
                        (0, r.transitionToGuild)(d.id, {
                            navigationReplace: !0
                        });
                        break;
                    case o.AutocompleterResultTypes.TEXT_CHANNEL:
                        null != (e = p.default.getChannel(d.id)) && (0, c.transitionToChannel)(e.id, {
                            state: {
                                analyticsSource: C
                            },
                            navigationReplace: !0
                        });
                        break;
                    case o.AutocompleterResultTypes.VOICE_CHANNEL:
                        null != (e = p.default.getChannel(d.id)) && (i.default.selectVoiceChannel(d.id), (0, c.transitionToChannel)(e.id, {
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
                        let A = f.default.getActiveLibraryApplication(d.id);
                        S(d.id, A, {
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
                    result: t
                })
            }
        },
        971427: function(t, e, l) {
            "use strict";
            let n;
            l.r(e), l.d(e, {
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
                initialize(t) {
                    n = null != t ? t : i
                }
                getState() {
                    return n
                }
                get hasAcceptedStoreTerms() {
                    return n.hasAcceptedStoreTerms
                }
                hasAcceptedEULA(t) {
                    return n.hasAcceptedEulaIds.includes(t)
                }
            }
            o.displayName = "ApplicationStoreUserSettingsStore", o.persistKey = "ApplicationStoreUserSettingsStore", o.migrations = [t => null == t.hasAcceptedEulaIds ? {
                ...t,
                hasAcceptedEulaIds: []
            } : t];
            var u = new o(s.default, {
                APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
                    n.hasAcceptedStoreTerms = !0
                },
                APPLICATION_STORE_ACCEPT_EULA: function(t) {
                    let {
                        eulaId: e
                    } = t;
                    if (n.hasAcceptedEulaIds.includes(e)) return !1;
                    n.hasAcceptedEulaIds.push(e)
                }
            })
        },
        148813: function(t, e, l) {
            "use strict";
            let n, a, s;
            l.r(e), l.d(e, {
                default: function() {
                    return _
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
            class A extends i.default.Store {
                initialize() {
                    p.isPlatformEmbedded && f.init(), n = {}, a = new Set, s = []
                }
                getState(t, e) {
                    let l = (0, d.getComboId)(t, e);
                    return n[l]
                }
                isSyncing(t, e) {
                    let l = (0, d.getComboId)(t, e);
                    return a.has(l)
                }
            }
            A.displayName = "CloudSyncStore";
            var _ = new A(o.default, {
                GAME_CLOUD_SYNC_START: function(t) {
                    let {
                        applicationId: e,
                        branchId: l
                    } = t, n = (0, d.getComboId)(e, l);
                    a.add(n)
                },
                GAME_CLOUD_SYNC_UPDATE: function(t) {
                    let {
                        state: e
                    } = t;
                    for (let t of Object.keys(e)) n[t] = e[t]
                },
                GAME_CLOUD_SYNC_COMPLETE: function(t) {
                    let {
                        applicationId: e,
                        branchId: l
                    } = t, s = (0, d.getComboId)(e, l);
                    return a.delete(s), n[s] = {
                        type: C.CloudSyncStateTypes.DONE,
                        timestamp: Date.now()
                    }, !0
                },
                GAME_CLOUD_SYNC_CONFLICT: function(t) {
                    let {
                        applicationId: e,
                        branchId: l,
                        next: s,
                        remote: i
                    } = t, o = (0, d.getComboId)(e, l);
                    n[o] = {
                        type: C.CloudSyncStateTypes.CONFLICT,
                        next: s,
                        remote: i
                    }, a.delete(o)
                },
                GAME_CLOUD_SYNC_ERROR: function(t) {
                    let {
                        applicationId: e,
                        branchId: l
                    } = t, s = (0, d.getComboId)(e, l);
                    n[s] = {
                        type: C.CloudSyncStateTypes.ERROR
                    }, a.delete(s)
                },
                RUNNING_GAMES_CHANGE: function() {
                    let t = r.default.getRunningDiscordApplicationIds(),
                        e = s.filter(e => !t.includes(e));
                    for (let t of e) {
                        let e = c.default.getActiveLibraryApplication(t);
                        null != e && o.default.wait(() => {
                            try {
                                u.sync(e.id, e.branchId)
                            } catch (t) {}
                        })
                    }
                    return s = t, !1
                }
            })
        },
        355045: function(t, e, l) {
            "use strict";
            let n;
            l.r(e), l.d(e, {
                init: function() {
                    return C
                },
                syncApplication: function() {
                    return A
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
                let t = p.default.getCloudSync();
                (n = new t).on("state", t => s.default.dispatch({
                    type: "GAME_CLOUD_SYNC_UPDATE",
                    state: t
                }))
            }

            function A(t, e) {
                var l;
                let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (!c.default.supportsCloudSync(t, e)) return Promise.resolve({
                    type: f.CloudSyncResultTypes.NONE
                });
                let i = function() {
                        if (null == n) throw Error("Initialize cloud sync module before syncing.");
                        return n
                    }(),
                    d = c.default.getState(t, e);
                if (null == d) throw Error("No dispatch state for ".concat(t, ":").concat(e));
                let p = null !== (l = d.storage) && void 0 !== l ? l : {},
                    C = (0, r.getComboId)(t, e),
                    A = u.default.getToken();
                if (null == A) throw Error("Cannot use cloud sync when not authenticated.");
                let _ = null != d.installPath ? (0, o.default)(d.installPath) : null;
                if (null == _) throw Error("No install path for ".concat(t, ":").concat(e));
                let h = u.default.getId(),
                    y = {
                        forceHash: s,
                        manifestPath: f.DefaultCloudSyncConfiguration.STORAGE_MANIFEST(_, h),
                        roots: null != p.roots ? p.roots : [{
                            id: f.DefaultCloudSyncConfiguration.ROOT_ID,
                            paths: Object.keys(f.DefaultCloudSyncConfiguration.ROOT_PLATFORMS).map(t => ({
                                platform: t,
                                path: f.DefaultCloudSyncConfiguration.ROOT_STORAGE_PATH(_, h)
                            })),
                            patterns: f.DefaultCloudSyncConfiguration.ROOT_PATTERN
                        }],
                        storage: {
                            baseURL: "".concat(a.default.getAPIBaseURL()).concat(f.Endpoints.APPLICATION_STORAGE(t, e)),
                            token: A
                        },
                        replacements: {
                            INSTALLDIR: f.DefaultCloudSyncConfiguration.INSTALL_DIR(_),
                            USERID: h,
                            BRANCHID: e
                        }
                    };
                return i.sync(C, y)
            }
        },
        551994: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
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

            function u(t, e, u, c, r) {
                let d = o.default.getInstallationPath(t.id, e),
                    p = null != t.eulaId && !i.default.hasAcceptedEULA(t.eulaId);
                null == d || p ? (0, a.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await l.el("727441").then(l.bind(l, "727441"));
                    return l => (0, n.jsx)(a, {
                        ...l,
                        applicationId: t.id,
                        branchId: e,
                        analyticsLocation: r
                    })
                }) : (0, s.installApplication)({
                    application: t,
                    branchId: e,
                    buildId: u,
                    manifestIds: c,
                    installationPath: d,
                    analyticsLocation: r
                })
            }
        },
        780009: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
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
                    return A
                }
            });
            var n = l("190017"),
                a = l("596169"),
                s = l("299285"),
                i = l("677225"),
                o = l("9377"),
                u = l("535974"),
                c = l("352326"),
                r = l("551994"),
                d = l("49111");

            function p(t, e, l) {
                let n = s.default.getApplication(t);
                if (null == n) return;
                let a = i.default.getTargetBuildId(n.id, e),
                    o = i.default.getTargetManifests(n.id, e);
                null != a && null != o && null != r.installApplication && (0, r.installApplication)(n, e, a, o, l)
            }

            function f(t, e) {
                let l = s.default.getApplication(t);
                if (null != l) return n.updateApplication(l, e, i.default.getTargetBuildId(l.id, e), i.default.getTargetManifests(l.id, e))
            }

            function C(t, e, l) {
                let a = s.default.getApplication(t);
                if (null != a) return n.repairApplication(a, e, l)
            }

            function A(t, e) {
                let l = (0, o.getDefaultLibraryApplicationAction)(t, u.default, c.default),
                    {
                        analyticsParams: n
                    } = e;
                switch (l) {
                    case d.LibraryApplicationActions.PLAY:
                        return (0, a.playApplication)(t.id, t, {
                            analyticsParams: n
                        });
                    case d.LibraryApplicationActions.INSTALL:
                        return p(t.id, t.branchId, n.source);
                    case d.LibraryApplicationActions.UPDATE:
                        return f(t.id, t.branchId)
                }
            }
        }
    }
]);
//# sourceMappingURL=1f4fff5e0bafe1096b45.js.map