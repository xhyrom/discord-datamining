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
            }), l("70102");
            var n = l("913144"),
                a = l("605250"),
                i = l("355045"),
                s = l("49111");
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
                    if ((l = await i.syncApplication(t, e, a)).type === s.CloudSyncResultTypes.CONFLICT) throw n.default.dispatch({
                        type: "GAME_CLOUD_SYNC_CONFLICT",
                        applicationId: t,
                        branchId: e,
                        next: l.next,
                        remote: l.remote
                    }), new u("Conflict in cloud sync.");
                    (l.type === s.CloudSyncResultTypes.PULL || l.type === s.CloudSyncResultTypes.PUSH) && o.info("Sync complete", l)
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
                    updateChannelDimensions(t, e, l, a, i) {
                        n.default.wait(() => {
                            n.default.dispatch({
                                type: "UPDATE_CHANNEL_DIMENSIONS",
                                channelId: t,
                                scrollTop: e,
                                scrollHeight: l,
                                offsetHeight: a
                            }), null != i && i()
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
            }), l("70102"), l("222007");
            var n = l("37983"),
                a = l("884691"),
                i = l("866227"),
                s = l.n(i),
                o = l("446674"),
                u = l("77078"),
                c = l("959254"),
                r = l("823411"),
                d = l("299285"),
                p = l("148813"),
                f = l("145131"),
                C = l("599110"),
                h = l("49111"),
                A = l("782340"),
                _ = l("141804"),
                y = l("926622");
            class T extends a.PureComponent {
                renderConflictButton(t, e, l, a) {
                    return (0, n.jsxs)(u.Button, {
                        className: _.conflictButton,
                        innerClassName: _.conflictButtonInner,
                        onClick: a,
                        children: [(0, n.jsx)("div", {
                            className: l
                        }), (0, n.jsxs)("div", {
                            className: _.buttonBody,
                            children: [(0, n.jsx)("div", {
                                className: _.conflictTitle,
                                children: t
                            }), (0, n.jsx)("div", {
                                children: A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_LAST_MODIFIED
                            }), (0, n.jsx)("div", {
                                className: _.timestamp,
                                children: s(e).calendar()
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
                                    className: _.errorArt
                                })
                            }), (0, n.jsx)("div", {
                                className: _.description,
                                children: A.default.Messages.CLOUD_SYNC_MODAL_ERROR_DESCRIPTION.format({
                                    applicationName: t.name
                                })
                            })]
                        }), (0, n.jsx)(u.ModalFooter, {
                            children: (0, n.jsxs)(f.default, {
                                justify: f.default.Justify.BETWEEN,
                                children: [(0, n.jsx)(u.Button, {
                                    className: _.linkButton,
                                    size: _.linkButtonSize,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    onClick: this.onClose,
                                    children: A.default.Messages.CANCEL
                                }), (0, n.jsxs)(f.default, {
                                    direction: f.default.Direction.HORIZONTAL,
                                    justify: f.default.Justify.END,
                                    children: [(0, n.jsx)(u.Button, {
                                        look: u.Button.Looks.LINK,
                                        color: u.Button.Colors.PRIMARY,
                                        onClick: () => this.handlePlay(),
                                        className: _.retryButton,
                                        children: A.default.Messages.RETRY
                                    }), (0, n.jsx)(u.Button, {
                                        onClick: () => this.handlePlay(!1),
                                        children: A.default.Messages.GAME_ACTION_BUTTON_PLAY
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
                    if (e.type !== h.CloudSyncStateTypes.CONFLICT) throw Error("Cannot render conflict for non conflict type");
                    return (0, n.jsxs)(u.ModalContent, {
                        className: y.marginBottom20,
                        children: [(0, n.jsx)("div", {
                            className: _.description,
                            children: A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_DESCRIPTION.format({
                                applicationName: t.name
                            })
                        }), this.renderConflictButton(A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_DOWNLOAD, e.remote.timestamp, _.conflictDownloadArt, this.handleChooseDownload), (0, n.jsxs)(f.default, {
                            className: _.choiceWrapper,
                            align: f.default.Align.CENTER,
                            children: [(0, n.jsx)("div", {
                                className: _.choiceLine
                            }), (0, n.jsx)("div", {
                                className: _.choiceTitle,
                                children: A.default.Messages.CLOUD_SYNC_MODAL_OR
                            }), (0, n.jsx)("div", {
                                className: _.choiceLine
                            })]
                        }), this.renderConflictButton(A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_UPLOAD, e.next.timestamp, _.conflictUploadArt, this.handleChooseUpload)]
                    })
                }
                render() {
                    let {
                        cloudSyncState: t,
                        transitionState: e
                    } = this.props, l = t.type === h.CloudSyncStateTypes.CONFLICT ? A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_HEADER : A.default.Messages.CLOUD_SYNC_MODAL_ERROR_HEADER;
                    return (0, n.jsxs)(u.ModalRoot, {
                        transitionState: e,
                        className: _.modal,
                        "aria-label": l,
                        children: [(0, n.jsxs)(u.ModalHeader, {
                            separator: !1,
                            children: [(0, n.jsx)(u.ModalCloseButton, {
                                className: _.closeButton,
                                onClick: this.onClose
                            }), (0, n.jsx)(u.FormTitle, {
                                tag: "h2",
                                className: y.marginReset,
                                children: l
                            })]
                        }), t.type === h.CloudSyncStateTypes.CONFLICT ? this.renderConflict() : this.renderError()]
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
                        t.type === h.CloudSyncStateTypes.CONFLICT && this.handlePlay(!0, t.remote.hash)
                    }, this.handleChooseUpload = () => {
                        let {
                            cloudSyncState: t
                        } = this.props;
                        t.type === h.CloudSyncStateTypes.CONFLICT && this.handlePlay(!0, t.next.hash)
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
                    cloudSync: i = !0,
                    cloudSyncForceHash: s = null,
                    analyticsParams: o
                } = l;
                if (i && null != e) {
                    let t = e.branchId;
                    try {
                        await c.sync(e.id, t, s)
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
                return C.default.track(h.AnalyticEvents.APPLICATION_OPENED, {
                    application_id: a.id,
                    application_name: a.name,
                    type: h.AnalyticsGameOpenTypes.LAUNCH,
                    distributor: null != e ? e.getDistributor() : null,
                    ...o
                }), r.default.launch(a.id, null == e ? void 0 : e.branchId)
            }
        },
        104589: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                show: function() {
                    return O
                },
                hide: function() {
                    return D
                },
                search: function() {
                    return U
                },
                selectResult: function() {
                    return P
                },
                switchToResult: function() {
                    return b
                }
            }), l("781738"), l("222007");
            var n = l("913144"),
                a = l("450911"),
                i = l("255397"),
                s = l("406189"),
                o = l("987317"),
                u = l("123225"),
                c = l("537325"),
                r = l("144491"),
                d = l("239380"),
                p = l("233069"),
                f = l("42203"),
                C = l("686470"),
                h = l("18494"),
                A = l("162771"),
                _ = l("599110"),
                y = l("340454"),
                T = l("116460"),
                E = l("49111"),
                S = l("724210");
            let I = () => Promise.resolve();
            {
                let t = l("780009");
                I = t.playApplication
            }
            let N = Object.freeze({
                    [u.AutocompleterQuerySymbols.USER]: u.AutocompleterResultTypes.USER,
                    [u.AutocompleterQuerySymbols.TEXT_CHANNEL]: u.AutocompleterResultTypes.TEXT_CHANNEL,
                    [u.AutocompleterQuerySymbols.VOICE_CHANNEL]: u.AutocompleterResultTypes.VOICE_CHANNEL,
                    [u.AutocompleterQuerySymbols.GUILD]: u.AutocompleterResultTypes.GUILD,
                    [u.AutocompleterQuerySymbols.APPLICATION]: u.AutocompleterResultTypes.APPLICATION
                }),
                m = new RegExp("^".concat(u.AutocompleterQuerySymbols.USER, "|").concat(u.AutocompleterQuerySymbols.TEXT_CHANNEL, "|").concat(u.AutocompleterQuerySymbols.VOICE_CHANNEL, "|\\").concat(u.AutocompleterQuerySymbols.GUILD, "|\\").concat(u.AutocompleterQuerySymbols.APPLICATION));

            function L(t) {
                let [e, l] = function(t) {
                    var e;
                    let l = t.charAt(0),
                        n = null !== (e = N[l]) && void 0 !== e ? e : null;
                    return [t.replace(m, ""), n]
                }(t);
                return {
                    query: e,
                    queryMode: l
                }
            }

            function R(t, e) {
                let {
                    results: l,
                    queryMode: n,
                    query: a,
                    maxQueryLength: i
                } = T.default.getProps(), s = A.default.getGuildId(), o = h.default.getChannelId(s), c = l[(0, u.findNextSelectedResult)(u.FindResultDirections.DOWN, -1, l)], r = y.default.isEmail(a), d = y.default.isPhoneNumber(a), C = y.default.isUserTagLike(a), E = null != o && (0, S.isStaticChannelRoute)(o), I = {
                    current_channel_id: E ? void 0 : o,
                    current_channel_static_route: E ? o : void 0,
                    current_guild_id: s,
                    query_mode: null != n ? n : "GENERAL",
                    query_length: a.length,
                    max_query_length: i,
                    is_email_like: r,
                    is_phone_like: d,
                    is_username_like: C,
                    query: r || d || C ? null : a,
                    top_result_type: null != c ? c.type : null,
                    top_result_score: null != c ? c.score : null,
                    num_results_total: T.default.getResultTotals(),
                    num_results_users: T.default.getResultTotals(u.AutocompleterResultTypes.USER),
                    num_results_text_channels: T.default.getResultTotals(u.AutocompleterResultTypes.TEXT_CHANNEL),
                    num_results_voice_channels: T.default.getResultTotals(u.AutocompleterResultTypes.VOICE_CHANNEL),
                    num_results_guilds: T.default.getResultTotals(u.AutocompleterResultTypes.GUILD),
                    num_results_group_dms: T.default.getResultTotals(u.AutocompleterResultTypes.GROUP_DM)
                };
                if (null != o) {
                    let t = f.default.getChannel(o);
                    I.current_channel_type = null != t ? t.type : null
                }
                if (null != e) {
                    let {
                        type: t,
                        score: n,
                        record: a
                    } = e;
                    switch (I.selected_type = t, I.selected_score = n, I.selected_index = l.indexOf(e), t) {
                        case u.AutocompleterResultTypes.GUILD:
                            I.selected_guild_id = a.id;
                            break;
                        case u.AutocompleterResultTypes.TEXT_CHANNEL:
                        case u.AutocompleterResultTypes.VOICE_CHANNEL:
                            a instanceof p.ChannelRecordBase && (I.selected_guild_id = null != a.guild_id ? a.guild_id : null), I.selected_channel_id = a.id;
                            break;
                        case u.AutocompleterResultTypes.GROUP_DM:
                            I.selected_channel_id = a.id;
                            break;
                        case u.AutocompleterResultTypes.USER:
                            I.selected_user_id = a.id
                    }
                }
                _.default.track(t, I)
            }

            function g() {
                n.default.dispatch({
                    type: "QUICKSWITCHER_HIDE"
                })
            }

            function O() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                ! function(t) {
                    let e;
                    if (T.default.isOpen()) return;
                    let l = A.default.getGuildId(),
                        n = h.default.getChannelId(l);
                    if (null != n) {
                        let t = f.default.getChannel(n);
                        e = null != t ? t.type : null
                    }
                    _.default.track(E.AnalyticEvents.QUICKSWITCHER_OPENED, {
                        source: t,
                        current_guild_id: l,
                        current_channel_id: n,
                        current_channel_type: e
                    })
                }(t), n.default.dispatch({
                    type: "QUICKSWITCHER_SHOW",
                    ...L(e)
                })
            }

            function D() {
                R(E.AnalyticEvents.QUICKSWITCHER_CLOSED), g()
            }

            function U(t) {
                n.default.dispatch({
                    type: "QUICKSWITCHER_SEARCH",
                    ...L(t)
                })
            }

            function P(t) {
                n.default.dispatch({
                    type: "QUICKSWITCHER_SELECT",
                    selectedIndex: t
                })
            }

            function b(t) {
                let e, l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                g(), R(E.AnalyticEvents.QUICKSWITCHER_RESULT_SELECTED, t);
                let {
                    type: p,
                    record: h
                } = t, A = {
                    page: E.AnalyticsPages.QUICK_SWITCHER
                };
                switch (p) {
                    case u.AutocompleterResultTypes.GUILD:
                        (0, d.transitionToGuild)(h.id, {
                            navigationReplace: !0
                        });
                        break;
                    case u.AutocompleterResultTypes.TEXT_CHANNEL:
                        null != (e = f.default.getChannel(h.id)) && (0, r.transitionToChannel)(e.id, {
                            state: {
                                analyticsSource: A
                            },
                            navigationReplace: !0
                        });
                        break;
                    case u.AutocompleterResultTypes.VOICE_CHANNEL:
                        null != (e = f.default.getChannel(h.id)) && (l ? i.default.updateChatOpen(h.id, !0) : o.default.selectVoiceChannel(h.id), (0, r.transitionToChannel)(e.id, {
                            state: {
                                analyticsSource: A
                            },
                            navigationReplace: !0
                        }));
                        break;
                    case u.AutocompleterResultTypes.USER:
                        a.default.openPrivateChannel([h.id], !1, !1, "Quickswitcher"), s.default.channelListScrollTo(E.ME, h.id);
                        break;
                    case u.AutocompleterResultTypes.GROUP_DM:
                        (0, r.transitionToChannel)(h.id, {
                            navigationReplace: !0
                        }), s.default.channelListScrollTo(E.ME, h.id);
                        break;
                    case u.AutocompleterResultTypes.APPLICATION:
                        let _ = C.default.getActiveLibraryApplication(h.id);
                        I(h.id, _, {
                            analyticsParams: {
                                source: E.AnalyticsLocations.QUICK_SWITCHER,
                                location: E.AnalyticsLocations.QUICK_SWITCHER
                            }
                        });
                        break;
                    case u.AutocompleterResultTypes.LINK:
                        (0, c.default)(h.path, {
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
            }), l("424973");
            var a = l("446674"),
                i = l("913144");
            let s = {
                hasAcceptedStoreTerms: !1,
                hasAcceptedEulaIds: []
            };
            class o extends a.default.PersistedStore {
                initialize(t) {
                    n = null != t ? t : s
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
            var u = new o(i.default, {
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
            let n, a, i;
            l.r(e), l.d(e, {
                default: function() {
                    return A
                }
            }), l("222007");
            var s = l("446674"),
                o = l("913144"),
                u = l("959254"),
                c = l("686470"),
                r = l("568307"),
                d = l("964889"),
                p = l("773336"),
                f = l("355045"),
                C = l("49111");
            class h extends s.default.Store {
                initialize() {
                    p.isPlatformEmbedded && f.init(), n = {}, a = new Set, i = []
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
            h.displayName = "CloudSyncStore";
            var A = new h(o.default, {
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
                    } = t, i = (0, d.getComboId)(e, l);
                    return a.delete(i), n[i] = {
                        type: C.CloudSyncStateTypes.DONE,
                        timestamp: Date.now()
                    }, !0
                },
                GAME_CLOUD_SYNC_CONFLICT: function(t) {
                    let {
                        applicationId: e,
                        branchId: l,
                        next: i,
                        remote: s
                    } = t, o = (0, d.getComboId)(e, l);
                    n[o] = {
                        type: C.CloudSyncStateTypes.CONFLICT,
                        next: i,
                        remote: s
                    }, a.delete(o)
                },
                GAME_CLOUD_SYNC_ERROR: function(t) {
                    let {
                        applicationId: e,
                        branchId: l
                    } = t, i = (0, d.getComboId)(e, l);
                    n[i] = {
                        type: C.CloudSyncStateTypes.ERROR
                    }, a.delete(i)
                },
                RUNNING_GAMES_CHANGE: function() {
                    let t = r.default.getRunningDiscordApplicationIds(),
                        e = i.filter(e => !t.includes(e));
                    for (let t of e) {
                        let e = c.default.getActiveLibraryApplication(t);
                        null != e && o.default.wait(() => {
                            try {
                                u.sync(e.id, e.branchId)
                            } catch (t) {}
                        })
                    }
                    return i = t, !1
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
                    return h
                }
            }), l("70102");
            var a = l("872717"),
                i = l("913144"),
                s = l("605250"),
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
                    new(0, s.default)("CloudSyncUtils").warn("CloudSync is not supported on this platform");
                    return
                }
                await p.default.ensureModule("discord_cloudsync");
                let t = p.default.getCloudSync();
                (n = new t).on("state", t => i.default.dispatch({
                    type: "GAME_CLOUD_SYNC_UPDATE",
                    state: t
                }))
            }

            function h(t, e) {
                var l;
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (!c.default.supportsCloudSync(t, e)) return Promise.resolve({
                    type: f.CloudSyncResultTypes.NONE
                });
                let s = function() {
                        if (null == n) throw Error("Initialize cloud sync module before syncing.");
                        return n
                    }(),
                    d = c.default.getState(t, e);
                if (null == d) throw Error("No dispatch state for ".concat(t, ":").concat(e));
                let p = null !== (l = d.storage) && void 0 !== l ? l : {},
                    C = (0, r.getComboId)(t, e),
                    h = u.default.getToken();
                if (null == h) throw Error("Cannot use cloud sync when not authenticated.");
                let A = null != d.installPath ? (0, o.default)(d.installPath) : null;
                if (null == A) throw Error("No install path for ".concat(t, ":").concat(e));
                let _ = u.default.getId(),
                    y = {
                        forceHash: i,
                        manifestPath: f.DefaultCloudSyncConfiguration.STORAGE_MANIFEST(A, _),
                        roots: null != p.roots ? p.roots : [{
                            id: f.DefaultCloudSyncConfiguration.ROOT_ID,
                            paths: Object.keys(f.DefaultCloudSyncConfiguration.ROOT_PLATFORMS).map(t => ({
                                platform: t,
                                path: f.DefaultCloudSyncConfiguration.ROOT_STORAGE_PATH(A, _)
                            })),
                            patterns: f.DefaultCloudSyncConfiguration.ROOT_PATTERN
                        }],
                        storage: {
                            baseURL: "".concat(a.default.getAPIBaseURL()).concat(f.Endpoints.APPLICATION_STORAGE(t, e)),
                            token: h
                        },
                        replacements: {
                            INSTALLDIR: f.DefaultCloudSyncConfiguration.INSTALL_DIR(A),
                            USERID: _,
                            BRANCHID: e
                        }
                    };
                return s.sync(C, y)
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
                i = l("190017"),
                s = l("971427"),
                o = l("98328");

            function u(t, e, u, c, r) {
                let d = o.default.getInstallationPath(t.id, e),
                    p = null != t.eulaId && !s.default.hasAcceptedEULA(t.eulaId);
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
                }) : (0, i.installApplication)({
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
                    return h
                }
            });
            var n = l("190017"),
                a = l("596169"),
                i = l("299285"),
                s = l("677225"),
                o = l("9377"),
                u = l("535974"),
                c = l("352326"),
                r = l("551994"),
                d = l("49111");

            function p(t, e, l) {
                let n = i.default.getApplication(t);
                if (null == n) return;
                let a = s.default.getTargetBuildId(n.id, e),
                    o = s.default.getTargetManifests(n.id, e);
                null != a && null != o && null != r.installApplication && (0, r.installApplication)(n, e, a, o, l)
            }

            function f(t, e) {
                let l = i.default.getApplication(t);
                if (null != l) return n.updateApplication(l, e, s.default.getTargetBuildId(l.id, e), s.default.getTargetManifests(l.id, e))
            }

            function C(t, e, l) {
                let a = i.default.getApplication(t);
                if (null != a) return n.repairApplication(a, e, l)
            }

            function h(t, e) {
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
//# sourceMappingURL=37102.32ea61569c6da4c25583.js.map