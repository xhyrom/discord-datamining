(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["96865"], {
        763898: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r() {
                let e = i.useRef(null);
                return null === e.current && (e.current = new AbortController), i.useEffect(() => () => {
                    var t;
                    null === (t = e.current) || void 0 === t || t.abort()
                }, []), e.current.signal
            }
        },
        599445: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildShopStorefrontExperiment: function() {
                    return r
                },
                ShowGuildRoleSubInGuildShopExperiment: function() {
                    return u
                },
                GuildShopPreviewExperiment: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-08_server_shop_storefront",
                    label: "Server Shop Storefront",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables Server shop storefront",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                u = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-09_show_server_sub_in_server_shop",
                    label: "Show server sub in server shop",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables showing server sub in server shop",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-09_server_shop_phantom_preview",
                    label: "Server Shop Phantom Preview",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables Server shop phantom preview",
                        config: {
                            enabled: !0
                        }
                    }]
                })
        },
        551254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsEligibleForGuildShopStorefront: function() {
                    return u
                },
                isEligibleForGuildShopStorefront: function() {
                    return l
                },
                useIsEligibleForSubscriptionsInGuildShop: function() {
                    return a
                },
                isEligibleForSubscriptionsInGuildShop: function() {
                    return o
                },
                useIsEligibleForGuildShopPreview: function() {
                    return s
                }
            });
            var i = n("287883"),
                r = n("599445");

            function u() {
                let {
                    enabled: e
                } = r.GuildShopStorefrontExperiment.useExperiment({
                    location: "adf3ea_1"
                });
                return e
            }

            function l() {
                let {
                    enabled: e
                } = r.GuildShopStorefrontExperiment.getCurrentConfig({
                    location: "adf3ea_2"
                });
                return e
            }

            function a(e, t) {
                let {
                    enabled: n
                } = r.ShowGuildRoleSubInGuildShopExperiment.useExperiment({
                    location: t
                }), u = (0, i.useGuildEligibleForGuildProducts)(e, t);
                return n && u
            }

            function o(e, t) {
                let {
                    enabled: n
                } = r.ShowGuildRoleSubInGuildShopExperiment.getCurrentConfig({
                    location: t
                }), u = (0, i.isGuildEligibleForGuildProducts)(e, t);
                return n && u
            }

            function s(e) {
                let {
                    enabled: t
                } = r.GuildShopPreviewExperiment.useExperiment({
                    location: e
                });
                return t
            }
        },
        991148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildShopPreviewVisible: function() {
                    return d
                }
            });
            var i = n("65597"),
                r = n("151426"),
                u = n("10641"),
                l = n("287883"),
                a = n("957255"),
                o = n("551254"),
                s = n("49111");

            function d(e, t) {
                var n;
                let d = (0, o.useIsEligibleForGuildShopPreview)(t),
                    c = (0, u.useIsDismissibleContentDismissed)(r.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW),
                    f = (0, i.default)([a.default], () => null != e && a.default.can(s.Permissions.ADMINISTRATOR, e)),
                    S = null !== (n = null == e ? void 0 : e.hasFeature(s.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) && void 0 !== n && n,
                    E = (0, l.useGuildEligibleForGuildProducts)(null == e ? void 0 : e.id, "useGuildShopPreviewVisible"),
                    I = [s.GuildFeatures.CREATOR_MONETIZABLE, s.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL, s.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED].some(t => (null == e ? void 0 : e.hasFeature(t)) === !0);
                return null != e && f && !S && I && d && E && !c
            }
        },
        590260: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildShopVisibleInGuild: function() {
                    return o
                },
                isGuildShopVisibleInGuild: function() {
                    return s
                }
            });
            var i = n("465869"),
                r = n("903724"),
                u = n("551254"),
                l = n("991148"),
                a = n("49111");

            function o(e) {
                let t = (0, u.useIsEligibleForGuildShopStorefront)(),
                    n = (0, u.useIsEligibleForSubscriptionsInGuildShop)(null == e ? void 0 : e.id, "channel_list"),
                    o = (0, r.useRoleSubscriptionsVisibleInGuild)(null == e ? void 0 : e.id),
                    s = (0, l.useGuildShopPreviewVisible)(e, "channel_list"),
                    {
                        shouldHideGuildPurchaseEntryPoints: d
                    } = (0, i.useShouldHideGuildPurchaseEntryPoints)(null == e ? void 0 : e.id);
                return !!t && null != e && !d && (e.hasFeature(a.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || n && o || s)
            }

            function s(e) {
                let t = (0, u.isEligibleForGuildShopStorefront)(),
                    n = (0, u.isEligibleForSubscriptionsInGuildShop)(null == e ? void 0 : e.id, "channel_list"),
                    i = (0, r.areRoleSubscriptionsVisibleInGuild)(null == e ? void 0 : e.id);
                return !!t && null != e && (e.hasFeature(a.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || n && i)
            }
        },
        250666: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isCreatorMonetizationEnabledGuild: function() {
                    return l
                },
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                r = n("305961"),
                u = n("49111");

            function l(e) {
                return !e.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE) || e.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))
            }

            function a(e) {
                return (0, i.useStateFromStores)([r.default], () => {
                    let t = r.default.getGuild(e);
                    return null != t && l(t)
                })
            }
        },
        465869: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShouldHideGuildPurchaseEntryPoints: function() {
                    return f
                },
                useShouldRestrictUpdatingCreatorMonetizationSettings: function() {
                    return S
                },
                useIsMonetizationReapplicationDisabled: function() {
                    return E
                }
            });
            var i = n("884691"),
                r = n("446674"),
                u = n("763898"),
                l = n("371358"),
                a = n("648825"),
                o = n("305961"),
                s = n("736271"),
                d = n("49111");
            let c = e => {
                    let t = (0, u.default)();
                    i.useEffect(() => {
                        if (null != e && !!e.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) a.default.getMonetizationRestrictionsFetchState(e.id) === a.FetchState.NOT_FETCHED && l.fetchMonetizationRestrictions(e.id, {
                            signal: t
                        })
                    }, [e, t]);
                    let n = null == e ? void 0 : e.id,
                        o = (0, r.useStateFromStoresArray)([a.default], () => {
                            var e;
                            return null !== (e = a.default.getMonetizationRestrictions(null != n ? n : "")) && void 0 !== e ? e : []
                        }),
                        s = (0, r.useStateFromStores)([a.default], () => a.default.getMonetizationRestrictionsFetchState(null != n ? n : "") === a.FetchState.FETCHING);
                    return {
                        restrictions: o,
                        restrictionsLoading: s
                    }
                },
                f = e => {
                    var t;
                    let n = (0, r.useStateFromStores)([o.default], () => o.default.getGuild(e), [e]),
                        {
                            restrictions: i,
                            restrictionsLoading: u
                        } = c(n),
                        l = null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_DISABLED),
                        a = l || (u ? null === (t = null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, s.isRestrictedFromShowingGuildPurchaseEntryPoints)(i));
                    return {
                        shouldHideGuildPurchaseEntryPoints: a,
                        restrictionsLoading: u
                    }
                },
                S = e => {
                    var t;
                    let n = (0, r.useStateFromStores)([o.default], () => o.default.getGuild(e), [e]),
                        {
                            restrictions: i,
                            restrictionsLoading: u
                        } = c(n),
                        l = null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_DISABLED),
                        a = null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING),
                        f = l || a || (u ? null === (t = null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, s.isRestrictedFromUpdatingCreatorMonetizationSettings)(i));
                    return {
                        shouldRestrictUpdatingCreatorMonetizationSettings: f,
                        restrictionsLoading: u
                    }
                },
                E = e => {
                    let t = (0, r.useStateFromStores)([o.default], () => o.default.getGuild(e), [e]),
                        {
                            restrictions: n,
                            restrictionsLoading: i
                        } = c(t),
                        u = (0, s.isRestrictedFromMonetizationReapplication)(n);
                    return {
                        isMonetizationReapplicationDisabled: u,
                        restrictionsLoading: i
                    }
                }
        },
        526253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NO_MEMBER_VERIFICATION_FORM: function() {
                    return o
                },
                default: function() {
                    return c
                }
            });
            var i = n("917351"),
                r = n.n(i),
                u = n("446674"),
                l = n("913144"),
                a = n("567054");
            let o = {
                    version: "",
                    description: "",
                    formFields: []
                },
                s = {};
            class d extends u.default.Store {
                get(e) {
                    if (null != e) return s[e]
                }
                getRulesPrompt(e) {
                    var t;
                    return r.find(null === (t = s[e]) || void 0 === t ? void 0 : t.formFields, a.isTermsFormField)
                }
            }
            d.displayName = "MemberVerificationFormStore";
            var c = new d(l.default, {
                INVITE_ACCEPT_SUCCESS: function(e) {
                    let {
                        invite: t
                    } = e, {
                        member_verification_form: n
                    } = t, {
                        guild: i
                    } = t;
                    if (null != i && null != n) {
                        var r;
                        return s[i.id] = {
                            version: n.version,
                            description: null !== (r = n.description) && void 0 !== r ? r : "",
                            formFields: n.form_fields,
                            guild: i
                        }, !0
                    }
                    return !1
                },
                MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
                    let {
                        form: t,
                        guildId: n
                    } = e;
                    s[n] = null != t ? t : o
                },
                MEMBER_VERIFICATION_FORM_FETCH_FAIL: function(e) {
                    var t;
                    let {
                        guildId: n
                    } = e;
                    s[n] = null !== (t = s[n]) && void 0 !== t ? t : o
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete s[null == t ? void 0 : t.id]
                }
            })
        },
        520141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsMemberVerificationManualApproval: function() {
                    return u
                },
                isMemberVerificationManualApproval: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "guild",
                id: "2021-11_member_verification_manual_approval",
                label: "Member Verification Manual Approval",
                defaultConfig: {
                    manualApprovalEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable manual approval for membership verification",
                    config: {
                        manualApprovalEnabled: !0
                    }
                }]
            });

            function u(e) {
                r.trackExposure({
                    guildId: e,
                    location: "bda51f_1"
                });
                let t = r.useExperiment({
                    guildId: e,
                    location: "bda51f_2"
                }, {
                    autoTrackExposure: !1
                });
                return t.manualApprovalEnabled
            }

            function l(e) {
                let t = r.getCurrentConfig({
                    guildId: e,
                    location: "bda51f_3"
                }, {
                    autoTrackExposure: !1
                });
                return t.manualApprovalEnabled
            }
        },
        875229: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canReviewGuildMemberApplications: function() {
                    return f
                },
                useCanReviewGuildMemberApplications: function() {
                    return S
                }
            });
            var i = n("884691"),
                r = n("446674"),
                u = n("305961"),
                l = n("957255"),
                a = n("50926"),
                o = n("526253"),
                s = n("520141"),
                d = n("567054"),
                c = n("49111");

            function f(e) {
                let t = u.default.getGuild(e);
                return null != t && (0, s.isMemberVerificationManualApproval)(e) && l.default.can(c.Permissions.KICK_MEMBERS, t)
            }

            function S(e) {
                var t;
                let n = (0, s.useIsMemberVerificationManualApproval)(e),
                    f = (0, r.useStateFromStores)([u.default], () => u.default.getGuild(e)),
                    S = null != f && n && l.default.can(c.Permissions.KICK_MEMBERS, f) && f.hasVerificationGate(),
                    E = (0, r.useStateFromStores)([o.default], () => o.default.get(e), [e]);
                i.useEffect(() => {
                    S && a.default.fetchVerificationForm(e)
                }, [S, e]);
                let I = i.useMemo(() => (null !== (t = null == E ? void 0 : E.formFields) && void 0 !== t ? t : []).some(e => !(0, d.isTermsFormField)(e)), [null == E ? void 0 : E.formFields]);
                return S && I
            }
        },
        536999: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberSafetyFriendExperiment: function() {
                    return d
                },
                isInMemberSafetyExperiment: function() {
                    return c
                },
                useMemberSafetyExperiment: function() {
                    return f
                },
                useIsBulkBanningExperimentEnabled: function() {
                    return S
                },
                isInMembersSearchV2Experiment: function() {
                    return E
                },
                useMembersSearchV2Experiment: function() {
                    return I
                }
            });
            var i = n("862205"),
                r = n("610174");
            let u = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-05_guild_member_safety_experiment",
                    label: "Guild Member Safety Experiment",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Guild Member Safety Experiment",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-07_member_safety_non_community",
                    label: "Members Safety Non Community Experiment",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Members Safety Page for Non Community Guilds",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                a = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-08_guild_member_bulk_ban_experiment",
                    label: "Bulk Banning Guild Members Experiment",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Bulk Banning Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                o = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-07_guild_members_search_in_elasticsearch",
                    label: "Members Search V2 Experiment",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Members Search V2 Backend Only",
                        config: {
                            enabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Enable Members Search V2 Backend + Frontend",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                s = function(e) {
                    let {
                        autoTrackExposure: t = !1,
                        disable: n = !1,
                        location: i = "f03bed_1"
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        enabled: r
                    } = l.getCurrentConfig({
                        guildId: e,
                        location: i
                    }, {
                        autoTrackExposure: t,
                        disable: n
                    });
                    return r
                },
                d = function(e) {
                    let {
                        autoTrackExposure: t = !1,
                        disable: n = !1,
                        location: i = "f03bed_2"
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        enabled: r
                    } = l.useExperiment({
                        guildId: e,
                        location: i
                    }, {
                        autoTrackExposure: t,
                        disable: n
                    });
                    return r
                },
                c = function(e) {
                    let {
                        autoTrackExposure: t = !1,
                        disable: n = !1,
                        location: i = "f03bed_3"
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        enabled: l
                    } = u.getCurrentConfig({
                        guildId: e,
                        location: i
                    }, {
                        autoTrackExposure: t,
                        disable: n
                    }), {
                        alsoShowMemberSafety: a
                    } = r.GuildAlertModeExperiment.getCurrentConfig({
                        guildId: e,
                        location: i
                    }, {
                        autoTrackExposure: t,
                        disable: n
                    }), o = s(e, {
                        autoTrackExposure: t,
                        disable: n
                    });
                    return l || a || o
                },
                f = function(e) {
                    let {
                        autoTrackExposure: t = !1,
                        disable: n = !1,
                        location: i = "f03bed_4"
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        alsoShowMemberSafety: l
                    } = r.GuildAlertModeExperiment.useExperiment({
                        guildId: e,
                        location: i
                    }, {
                        autoTrackExposure: t,
                        disable: n
                    }), {
                        enabled: a
                    } = u.useExperiment({
                        guildId: e,
                        location: i
                    }, {
                        autoTrackExposure: t,
                        disable: n
                    }), o = d(e, {
                        autoTrackExposure: t,
                        disable: n
                    });
                    return a || l || o
                },
                S = function(e) {
                    let {
                        autoTrackExposure: t = !1,
                        disable: n = !1,
                        location: i = "f03bed_5"
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        enabled: r
                    } = a.useExperiment({
                        guildId: e,
                        location: i
                    }, {
                        autoTrackExposure: t,
                        disable: n
                    });
                    return r
                },
                E = function(e) {
                    let {
                        autoTrackExposure: t = !1,
                        disable: n = !1,
                        location: i = "f03bed_7"
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        enabled: r
                    } = o.getCurrentConfig({
                        guildId: e,
                        location: i
                    }, {
                        autoTrackExposure: t,
                        disable: n
                    });
                    return r
                },
                I = function(e) {
                    let {
                        autoTrackExposure: t = !1,
                        disable: n = !1,
                        location: i = "f03bed_8"
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        enabled: r
                    } = o.useExperiment({
                        guildId: e,
                        location: i
                    }, {
                        autoTrackExposure: t,
                        disable: n
                    });
                    return r
                }
        },
        466818: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MemberSafetyPagePermissions: function() {
                    return c
                },
                canAccessMemberSafetyPage: function() {
                    return S
                },
                canAccessMemberSafetyPageWithExperiment: function() {
                    return I
                },
                useCanAccessMemberSafetyPage: function() {
                    return _
                },
                useCanAccessBulkBanningFeature: function() {
                    return p
                },
                useCanAccessInviteCodeFeature: function() {
                    return R
                },
                useCanBulkBanUser: function() {
                    return h
                },
                canBulkBanUser: function() {
                    return b
                }
            });
            var i = n("316693"),
                r = n("446674"),
                u = n("305961"),
                l = n("957255"),
                a = n("697218"),
                o = n("991170"),
                s = n("536999"),
                d = n("49111");
            let c = i.default.combine(d.Permissions.ADMINISTRATOR, d.Permissions.MANAGE_GUILD, d.Permissions.BAN_MEMBERS, d.Permissions.KICK_MEMBERS, d.Permissions.MODERATE_MEMBERS),
                f = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.default, a.default],
                        [n, i] = t,
                        r = n.getGuild(e),
                        l = i.getCurrentUser();
                    return {
                        user: l,
                        guild: r
                    }
                },
                S = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.default, a.default],
                        n = f(e, t);
                    if (null == n) return !1;
                    let r = i.default.hasAny(o.default.computePermissions({
                        user: n.user,
                        context: n.guild,
                        checkElevated: !1
                    }), c);
                    return r
                },
                E = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.default, a.default],
                        n = f(e, t);
                    return null != n && l.default.can(d.Permissions.MANAGE_GUILD, n.guild) && l.default.can(d.Permissions.BAN_MEMBERS, n.guild)
                },
                I = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = S(e),
                        i = (0, s.isInMemberSafetyExperiment)(e, {
                            autoTrackExposure: t,
                            disable: !n
                        });
                    return n && i
                };

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = (0, r.useStateFromStores)([u.default, a.default], () => S(e, [u.default, a.default]), [e]),
                    i = (0, s.useMemberSafetyExperiment)(e, {
                        autoTrackExposure: t,
                        disable: !n
                    });
                return n && i
            }

            function p(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = _(e, n),
                    l = (0, r.useStateFromStores)([u.default, a.default], () => E(e, [u.default, a.default]), [e]),
                    o = (0, s.useIsBulkBanningExperimentEnabled)(e, {
                        location: t,
                        autoTrackExposure: n,
                        disable: !l
                    });
                return i && l && o
            }

            function R(e) {
                return (0, r.useStateFromStores)([u.default, l.default], () => {
                    let t = u.default.getGuild(e);
                    return null != t && l.default.can(d.Permissions.MANAGE_GUILD, t)
                }, [e])
            }

            function h(e, t, n) {
                return (0, r.useStateFromStores)([l.default, u.default], () => {
                    let i = u.default.getGuild(e);
                    return null != i && t && l.default.canManageUser(d.Permissions.BAN_MEMBERS, n, i)
                }, [t, e, n])
            }

            function b(e, t, n) {
                let i = u.default.getGuild(e);
                return null != i && t && l.default.canManageUser(d.Permissions.BAN_MEMBERS, n, i)
            }
        },
        287883: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildEligibleForGuildProducts: function() {
                    return r
                },
                isGuildEligibleForGuildProducts: function() {
                    return u
                }
            });
            var i = n("60705");

            function r(e, t) {
                let {
                    enabled: n
                } = i.GuildProductsExperiment.useExperiment({
                    guildId: null != e ? e : "",
                    location: t
                });
                return n
            }

            function u(e, t) {
                let {
                    enabled: n
                } = i.GuildProductsExperiment.getCurrentConfig({
                    guildId: null != e ? e : "",
                    location: t
                });
                return n
            }
        },
        60705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildProductsExperiment: function() {
                    return r
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "guild",
                id: "2023-04_server_products",
                label: "Server Products",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enables Server Products (AKA one time purchases for creator guilds)",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        371358: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionsSettings: function() {
                    return c
                },
                updateSubscriptionsSettings: function() {
                    return f
                },
                fetchAllSubscriptionListingsDataForGuild: function() {
                    return S
                },
                createSubscriptionGroupListing: function() {
                    return E
                },
                fetchSubscriptionListingForPlan: function() {
                    return I
                },
                deleteSubscriptionListing: function() {
                    return _
                },
                archiveSubscriptionListing: function() {
                    return p
                },
                updateSubscriptionTrial: function() {
                    return R
                },
                createSubscriptionListing: function() {
                    return b
                },
                updateSubscriptionListing: function() {
                    return g
                },
                fetchMonetizationRestrictions: function() {
                    return G
                }
            });
            var i = n("398183"),
                r = n("913144"),
                u = n("850068"),
                l = n("775433"),
                a = n("716241"),
                o = n("599110"),
                s = n("719726"),
                d = n("49111");
            async function c(e) {
                let t = await s.getGuildRoleSubscriptionsSettings(e);
                r.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
                    settings: t
                })
            }
            async function f(e, t) {
                let n = await s.updateGuildRoleSubscriptionsSettings(e, t);
                r.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
                    settings: n
                })
            }
            async function S(e) {
                let {
                    includeSoftDeleted: t = !0,
                    countryCode: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                r.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS",
                    guildId: e
                });
                try {
                    let [i, l, a] = await Promise.all([s.getGuildRoleSubscriptionGroupListingsForGuild(e, {
                        includeSoftDeleted: t,
                        countryCode: n
                    }), s.getGuildRoleSubscriptionsSettings(e), s.getGuildRoleSubscriptionTrials(e), (0, u.fetchSubscriptions)()]);
                    r.default.dispatch({
                        type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                        guildId: e,
                        groupListings: i,
                        settings: l,
                        subscriptionTrials: a
                    })
                } catch (t) {
                    r.default.dispatch({
                        type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
                        guildId: e
                    })
                }
            }
            async function E(e, t) {
                let n = await s.createGuildRoleSubscriptionGroupListing(e, t);
                return r.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
                    listing: n
                }), n
            }
            async function I(e) {
                var t;
                r.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
                    planId: e
                });
                let n = await s.getGuildRoleSubscriptionGroupForSubscriptionPlan(e);
                r.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
                    groupListing: n
                });
                let i = null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
                for (let t of i) t.subscription_plans[0].id === e && await l.fetchSubscriptionPlansForSKU(t.id, void 0, void 0, !0)
            }
            async function _(e, t, n) {
                await s.deleteGuildRoleSubscriptionListing(e, t, n), r.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING",
                    listingId: n
                })
            }
            async function p(e, t, n) {
                let i = await s.archiveGuildRoleSubscriptionListing(e, t, n);
                r.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
                    listing: i
                })
            }
            async function R(e, t, n) {
                let i = await s.updateGuildRoleSubscriptionsTrial(e, t, n);
                r.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL",
                    subscriptionTrial: i
                })
            }
            async function h(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = await s.getGuildRoleSubscriptionGroupListing(e, t, n);
                return r.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
                    listing: i
                }), i
            }
            async function b(e) {
                let {
                    guildId: t,
                    groupListingId: n,
                    data: i,
                    analyticsContext: u,
                    onBeforeDispatchNewListing: l
                } = e, c = await s.createGuildRoleSubscriptionListing(t, n, i);
                return o.default.track(d.AnalyticEvents.ROLE_SUBSCRIPTION_LISTING_CREATED, {
                    role_subscription_listing_id: c.id,
                    role_subscription_group_listing_id: n,
                    template_name: u.templateCategory,
                    has_change_from_template: u.hasChangeFromTemplate,
                    ...(0, a.collectGuildAnalyticsMetadata)(t)
                }), await h(t, n, {
                    includeArchivedListings: !0
                }), null == l || l(c), r.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
                    listing: c
                }), c
            }
            async function g(e) {
                let {
                    guildId: t,
                    listingId: n,
                    groupListingId: i,
                    data: u
                } = e, l = await s.updateGuildRoleSubscriptionListing(t, i, n, u);
                return r.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
                    listing: l
                }), await h(t, i, {
                    includeArchivedListings: !0
                }), l
            }
            async function G(e) {
                let {
                    signal: t
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = !1;
                for (let u = 0; u < 3; u++) try {
                    if (null == t ? void 0 : t.aborted) {
                        r.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED",
                            guildId: e
                        });
                        return
                    }
                    r.default.dispatch({
                        type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS",
                        guildId: e
                    });
                    let {
                        restrictions: i
                    } = await s.getGuildMonetizationRestrictions(e, {
                        signal: t
                    });
                    r.default.dispatch({
                        type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
                        guildId: e,
                        restrictions: null != i ? i : []
                    }), n = !0;
                    break
                } catch (e) {
                    await (0, i.sleep)((u + 1) * 1e3)
                }!n && r.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE",
                    guildId: e
                })
            }
        },
        719726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createGuildRoleSubscriptionGroupListing: function() {
                    return a
                },
                createGuildRoleSubscriptionListing: function() {
                    return o
                },
                updateGuildRoleSubscriptionListing: function() {
                    return s
                },
                getGuildRoleSubscriptionGroupListingsForGuild: function() {
                    return d
                },
                getGuildRoleSubscriptionsSettings: function() {
                    return c
                },
                updateGuildRoleSubscriptionsSettings: function() {
                    return f
                },
                getPriceTiers: function() {
                    return S
                },
                getGuildRoleSubscriptionGroupListing: function() {
                    return E
                },
                getGuildRoleSubscriptionGroupForSubscriptionPlan: function() {
                    return I
                },
                deleteGuildRoleSubscriptionListing: function() {
                    return _
                },
                archiveGuildRoleSubscriptionListing: function() {
                    return p
                },
                getGuildRoleSubscriptionTrials: function() {
                    return R
                },
                updateGuildRoleSubscriptionsTrial: function() {
                    return h
                },
                getGuildRoleSubscriptionTrialEligibility: function() {
                    return b
                },
                getGuildMonetizationRestrictions: function() {
                    return g
                },
                fetchHighlightedCreatorGuildDetails: function() {
                    return G
                }
            });
            var i = n("872717"),
                r = n("448993"),
                u = n("49111"),
                l = n("843455");
            let a = async (e, t) => {
                try {
                    let n = await i.default.post({
                        url: u.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                        body: t
                    });
                    return n.body
                } catch (e) {
                    throw new r.APIError(e)
                }
            }, o = async (e, t, n) => {
                let {
                    priceTier: l,
                    ...a
                } = n;
                try {
                    let n = await i.default.post({
                        url: u.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t),
                        body: {
                            ...a,
                            price_tier: l
                        }
                    });
                    return n.body
                } catch (e) {
                    throw new r.APIError(e)
                }
            }, s = async (e, t, n, l) => {
                let {
                    priceTier: a,
                    ...o
                } = l;
                try {
                    let r = await i.default.patch({
                        url: u.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
                        body: {
                            ...o,
                            price_tier: a
                        }
                    });
                    return r.body
                } catch (e) {
                    throw new r.APIError(e)
                }
            }, d = async function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        includeSoftDeleted: !1
                    },
                    n = {
                        include_soft_deleted: t.includeSoftDeleted,
                        country_code: t.countryCode
                    };
                try {
                    let t = await i.default.get({
                        url: u.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                        query: n
                    });
                    return t.body
                } catch (e) {
                    throw new r.APIError(e)
                }
            }, c = async e => {
                let t = await i.default.get({
                    url: u.Endpoints.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e)
                });
                return t.body
            }, f = async (e, t) => {
                try {
                    let n = await i.default.patch({
                        url: u.Endpoints.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
                        body: t
                    });
                    return n.body
                } catch (e) {
                    throw new r.APIError(e)
                }
            }, S = async e => {
                try {
                    let t = await i.default.get({
                        url: u.Endpoints.PRICE_TIERS,
                        query: {
                            price_tier_type: l.PriceTierTypes.GUILD_ROLE_SUBSCRIPTIONS,
                            guild_id: e
                        }
                    });
                    return t.body
                } catch (e) {
                    throw new r.APIError(e)
                }
            }, E = async function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                try {
                    let r = await i.default.get({
                        url: u.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e, t),
                        query: {
                            include_draft_listings: n.includeDraftListings,
                            include_archived_listings: n.includeArchivedListings
                        }
                    });
                    return r.body
                } catch (e) {
                    throw new r.APIError(e)
                }
            }, I = async e => {
                try {
                    let t = await i.default.get({
                        url: u.Endpoints.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(e)
                    });
                    return t.body
                } catch (e) {
                    throw new r.APIError(e)
                }
            }, _ = async (e, t, n) => {
                try {
                    await i.default.delete({
                        url: u.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n)
                    })
                } catch (e) {
                    throw new r.APIError(e)
                }
            }, p = async (e, t, n) => {
                try {
                    let r = await i.default.post({
                        url: u.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(e, t, n)
                    });
                    return r.body
                } catch (e) {
                    throw new r.APIError(e)
                }
            }, R = async e => {
                try {
                    let t = await i.default.get({
                        url: u.Endpoints.GUILD_ROLE_SUBSCRIPTION_TRIALS(e)
                    });
                    return t.body
                } catch (e) {
                    throw new r.APIError(e)
                }
            }, h = async (e, t, n) => {
                try {
                    let r = await i.default.patch({
                        url: u.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(e, t),
                        body: n
                    });
                    return r.body
                } catch (e) {
                    throw new r.APIError(e)
                }
            }, b = async (e, t, n) => {
                try {
                    let r = await i.default.get({
                        url: u.Endpoints.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(e, t, n)
                    });
                    return r.body
                } catch (e) {
                    throw new r.APIError(e)
                }
            }, g = async function(e) {
                let {
                    signal: t
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                try {
                    let n = await i.default.get({
                        url: u.Endpoints.CREATOR_MONETIZATION_RESTRICTIONS(e),
                        signal: t
                    });
                    return n.body
                } catch (e) {
                    throw new r.APIError(e)
                }
            }, G = async e => {
                try {
                    var t;
                    let n = await i.default.get({
                        url: u.Endpoints.GUILD_DISCOVERY_SLUG(e)
                    });
                    return null !== (t = n.body) && void 0 !== t ? t : JSON.parse(n.text)
                } catch (e) {
                    throw new r.APIError(e)
                }
            }
        },
        638779: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                computeHasRoleSubscriptionsInGuild: function() {
                    return o
                },
                default: function() {
                    return s
                }
            });
            var i = n("446674"),
                r = n("271938"),
                u = n("26989"),
                l = n("305961"),
                a = n("49111");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == e ? null : u.default.getMember(e, r.default.getId()),
                    [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [l.default],
                    i = n.getGuild(e);
                if (null == i || null == t || !i.hasFeature(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return !1;
                for (let e of t.roles) {
                    var o;
                    let t = i.getRole(e);
                    if ((null == t ? void 0 : null === (o = t.tags) || void 0 === o ? void 0 : o.subscription_listing_id) != null) return !0
                }
                return !1
            }

            function s(e) {
                let t = (0, i.useStateFromStores)([r.default, u.default], () => null == e ? null : u.default.getMember(e, r.default.getId()));
                return (0, i.useStateFromStores)([l.default], () => o(e, t, [l.default]), [e, t])
            }
        },
        903724: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                areRoleSubscriptionsVisibleInGuild: function() {
                    return f
                },
                useRoleSubscriptionsVisibleInGuild: function() {
                    return S
                },
                useShowRoleSubscriptionsInChannelList: function() {
                    return E
                }
            });
            var i = n("446674"),
                r = n("551254"),
                u = n("250666"),
                l = n("465869"),
                a = n("38654"),
                o = n("305961"),
                s = n("638779"),
                d = n("49111");

            function c(e) {
                let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, a.default], i = t.getGuild(e);
                if (null == i) return !1;
                let r = (0, u.isCreatorMonetizationEnabledGuild)(i),
                    l = i.hasFeature(d.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
                if (r && l) return !0;
                let s = n.isViewingSubscriptionRoles(e);
                return !!s || !1
            }

            function f(e) {
                return !!c(e) || (0, s.computeHasRoleSubscriptionsInGuild)(e)
            }

            function S(e) {
                let t = (0, s.default)(e),
                    n = (0, i.useStateFromStores)([o.default, a.default], () => c(e, [o.default, a.default]), [e]),
                    {
                        shouldHideGuildPurchaseEntryPoints: r
                    } = (0, l.useShouldHideGuildPurchaseEntryPoints)(e);
                return !r && (n || t)
            }

            function E(e) {
                let t = S(e),
                    n = (0, r.useIsEligibleForSubscriptionsInGuildShop)(e, "useShowRoleSubscriptionsInChannelList");
                return t && !n
            }
        },
        232054: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var i = n("203288"),
                r = n("590260"),
                u = n("677315"),
                l = n("875229"),
                a = n("466818"),
                o = n("471706"),
                s = n("290886"),
                d = n("903724"),
                c = n("120252"),
                f = n("42203"),
                S = n("305961"),
                E = n("449008"),
                I = n("361572"),
                _ = n("49111"),
                p = n("724210");
            async function R(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e, R = S.default.getGuild(t);
                if (null == R && t !== _.ME) return !1;
                if (null == n) return !0;
                if ((0, p.isStaticChannelRoute)(n)) switch (n) {
                    case p.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
                        return (0, d.areRoleSubscriptionsVisibleInGuild)(t);
                    case p.StaticChannelRoute.GUILD_SHOP:
                        return (0, r.isGuildShopVisibleInGuild)(R);
                    case p.StaticChannelRoute.MEMBER_APPLICATIONS:
                        return (0, l.canReviewGuildMemberApplications)(t);
                    case p.StaticChannelRoute.GUILD_HOME:
                        return (0, u.canSeeGuildHome)(t) || (0, s.canSeeOnboardingHome)(t);
                    case p.StaticChannelRoute.CHANNEL_BROWSER:
                        return null != R && R.hasFeature(_.GuildFeatures.COMMUNITY);
                    case p.StaticChannelRoute.GUILD_ONBOARDING:
                        return o.default.shouldShowOnboarding(t);
                    case p.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
                        return null != R && R.hasFeature(_.GuildFeatures.COMMUNITY);
                    case p.StaticChannelRoute.MEMBER_SAFETY:
                        return (0, a.canAccessMemberSafetyPageWithExperiment)(t, !0);
                    default:
                        (0, E.assertNever)(n)
                }
                let h = f.default.getChannel(n);
                return (null != h || (await c.default.loadThread(n), null != (h = f.default.getChannel(n)))) && ((0, I.canViewChannel)(h) || i.default.isChannelGatedAndVisible(t, n))
            }
        },
        537325: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                u = n("565298"),
                l = n("393414"),
                a = n("239380"),
                o = n("42203"),
                s = n("361572"),
                d = n("232054"),
                c = n("49111");
            async function f(e, t, f) {
                let S = (0, s.tryParseChannelPath)(e);
                if (null != S && !await (0, d.default)(S)) {
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("657233").then(n.bind(n, "657233"));
                        return t => (0, i.jsx)(e, {
                            ...t
                        })
                    });
                    return
                }
                if (null == S) {
                    (0, l.transitionTo)(e);
                    return
                }
                let E = function(e) {
                    if (null == e.channelId) return e;
                    let t = o.default.getChannel(e.channelId);
                    if (null == t) return e;
                    let n = (0, u.getGuildIdForGenericRedirect)(t);
                    return {
                        ...e,
                        guildId: null != n ? n : c.ME
                    }
                }(S);
                if (null == E.channelId) {
                    (0, a.transitionToGuild)(E.guildId);
                    return
                }
                null != E.threadId ? (0, l.transitionTo)(c.Routes.CHANNEL_THREAD_VIEW(E.guildId, E.channelId, E.threadId, E.messageId), t, f) : (0, l.transitionTo)(c.Routes.CHANNEL(E.guildId, E.channelId, E.messageId), t, f)
            }
        },
        120252: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("803182"),
                r = n("872717"),
                u = n("913144"),
                l = n("619443"),
                a = n("233069"),
                o = n("42203"),
                s = n("18494"),
                d = n("49111"),
                c = n("724210");
            let f = {},
                S = !1;

            function E(e) {
                if (null == e || e === c.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID || (0, c.isStaticChannelRoute)(e) || null != o.default.getChannel(e)) return Promise.resolve();
                if (S || (S = !0, u.default.subscribe("CONNECTION_OPEN", () => {
                        f = {};
                        let e = s.default.getChannelId(),
                            t = o.default.getChannel(e);
                        null != e && null == t && E(e)
                    })), !l.default.isConnected()) return Promise.resolve();
                let t = f[e];
                if (null != t) return "LOADING" === t.type ? t.promise : Promise.resolve();
                let n = (0, i.matchPath)(location.pathname, {
                        path: d.Routes.CHANNEL(":guildId", ":channelId", ":messageId"),
                        exact: !0
                    }),
                    I = r.default.get(d.Endpoints.CHANNEL(e)).then(t => {
                        let {
                            body: i
                        } = t;
                        if (f[e] = {
                                type: "LOADED"
                            }, a.THREAD_CHANNEL_TYPES.has(i.type)) {
                            var r;
                            u.default.dispatch({
                                type: "THREAD_CREATE",
                                channel: (0, a.createChannelRecordFromServer)(i),
                                messageId: null == n ? void 0 : null === (r = n.params) || void 0 === r ? void 0 : r.messageId
                            })
                        }
                    }).catch(() => {
                        var t;
                        f[e] = {
                            type: "NOT_FOUND"
                        }, u.default.dispatch({
                            type: "CHANNEL_DELETE",
                            channel: {
                                id: e,
                                guild_id: null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.guildId,
                                parent_id: void 0
                            }
                        })
                    });
                return f[e] = {
                    type: "LOADING",
                    promise: I
                }, I
            }
            var I = {
                loadThread: E
            }
        }
    }
]);
//# sourceMappingURL=26156c606cda527f2fd7.js.map