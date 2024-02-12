(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["47387"], {
        609708: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4a1620da08f098314241.svg"
        },
        602291: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ac64a4b16416154663f7.svg"
        },
        939784: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3af18e66cab696affd74.svg"
        },
        769015: function(e, t, n) {
            "use strict";
            e.exports = n.p + "789cbb1aaa8190be1c18.svg"
        },
        393828: function(e, t, n) {
            "use strict";
            e.exports = n.p + "714405524ef39906bd06.png"
        },
        481927: function(e, t, n) {
            "use strict";
            e.exports = n.p + "75ad54f57ebd84babdf2.svg"
        },
        527382: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FileUploadIconClassNames: function() {
                    return a
                },
                DEFAULT_FILE_UPLOAD_ICONS: function() {
                    return s
                },
                EMOJI_FILE_UPLOAD_ICONS: function() {
                    return o
                }
            });
            var r, i, l = n("831839");
            (r = i || (i = {}))[r.IMAGE = 0] = "IMAGE", r[r.DOCUMENT = 1] = "DOCUMENT", r[r.CODE = 2] = "CODE";
            let a = {
                    0: l.image,
                    1: l.document,
                    2: l.code
                },
                s = [1, 0, 2],
                o = [0, 0, 0]
        },
        109036: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("527382"),
                s = n("831839"),
                o = function(e) {
                    let {
                        icons: t,
                        className: n
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: l(s.icons, n),
                        children: [(0, r.jsx)("div", {
                            className: s.wrapOne,
                            children: (0, r.jsx)("div", {
                                className: l(s.icon, s.one, a.FileUploadIconClassNames[t[0]])
                            })
                        }), (0, r.jsx)("div", {
                            className: s.wrapThree,
                            children: (0, r.jsx)("div", {
                                className: l(s.icon, s.three, a.FileUploadIconClassNames[t[2]])
                            })
                        }), (0, r.jsx)("div", {
                            className: s.wrapTwo,
                            children: (0, r.jsx)("div", {
                                className: l(s.icon, s.two, a.FileUploadIconClassNames[t[1]])
                            })
                        })]
                    })
                }
        },
        336522: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                },
                UPLOAD_ERROR_MODAL_KEY: function() {
                    return _
                },
                openUploadError: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("551042"),
                s = n("516256"),
                o = n("202664"),
                u = n("476765"),
                d = n("109036"),
                c = n("527382"),
                m = n("831839");

            function f(e) {
                let {
                    title: t,
                    help: n,
                    showPremiumUpsell: i,
                    transitionState: a,
                    icons: f,
                    fileSize: _,
                    onClose: E
                } = e, T = (0, u.useUID)(), I = null != f ? f : c.DEFAULT_FILE_UPLOAD_ICONS;
                return i ? (0, r.jsx)(o.default, {
                    transitionState: a,
                    onClose: E,
                    fileSize: _
                }) : (0, r.jsx)(s.ModalRoot, {
                    size: s.ModalSize.DYNAMIC,
                    "aria-labelledby": T,
                    transitionState: a,
                    children: (0, r.jsx)("div", {
                        className: l(m.uploadDropModal, m.error),
                        children: (0, r.jsxs)("div", {
                            className: m.inner,
                            children: [(0, r.jsx)(d.default, {
                                icons: I
                            }), (0, r.jsx)("div", {
                                id: T,
                                className: m.title,
                                children: t
                            }), (0, r.jsx)("div", {
                                className: m.instructions,
                                children: n
                            })]
                        })
                    })
                })
            }
            let _ = "UPLOAD_ERROR_MODAL_KEY";

            function E(e) {
                (0, a.openModal)(t => (0, r.jsx)(f, {
                    ...t,
                    ...e
                }), {
                    modalKey: _
                })
            }
        },
        856567: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("631153");
            n.es(r, t)
        },
        361019: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("731935");
            n.es(r, t)
        },
        174727: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("775560"),
                i = n("888400"),
                l = n("149638");

            function a(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = (0, i.diffAsUnits)(Date.now(), e),
                    o = (0, r.useForceUpdate)();
                return (0, l.default)(() => {
                    let e = 0 === s.days && 0 === s.hours && 0 === s.minutes && 0 === s.seconds;
                    !e && !a && (o(), null == n || n())
                }, a ? null : t), s
            }
        },
        149638: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("627445"),
                l = n.n(i);

            function a(e, t) {
                let n = (0, r.useRef)(e);
                (0, r.useEffect)(() => {
                    n.current = e
                }, [e]), (0, r.useEffect)(() => {
                    if (null === t) return;
                    let e = setInterval(function() {
                        l(null != n.current, "Missing callback"), n.current()
                    }, t);
                    return () => clearInterval(e)
                }, [t])
            }
        },
        32531: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateBackgroundGradientPreset: function() {
                    return i
                },
                resetBackgroundGradientPreset: function() {
                    return l
                },
                openEditor: function() {
                    return a
                },
                closeEditor: function() {
                    return s
                },
                resetPreviewClientTheme: function() {
                    return o
                }
            });
            var r = n("913144");
            let i = e => {
                    r.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                        presetId: e
                    })
                },
                l = () => {
                    r.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                        presetId: null
                    })
                },
                a = () => {
                    r.default.dispatch({
                        type: "CLIENT_THEMES_EDITOR_OPEN"
                    })
                },
                s = () => {
                    r.default.dispatch({
                        type: "CLIENT_THEMES_EDITOR_CLOSE"
                    })
                },
                o = () => {
                    r.default.dispatch({
                        type: "RESET_PREVIEW_CLIENT_THEME"
                    })
                }
        },
        309318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-11_nitro_affinities",
                label: "Nitro Affinities",
                defaultConfig: {
                    marketingEnabled: !1,
                    planSelectionEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Nitro Affinities for Marketing Page",
                    config: {
                        marketingEnabled: !0,
                        planSelectionEnabled: !1
                    }
                }, {
                    id: 2,
                    label: "Enable Nitro Affinities for Plan Selection Page",
                    config: {
                        marketingEnabled: !1,
                        planSelectionEnabled: !0
                    }
                }, {
                    id: 3,
                    label: "Enable Nitro Affinities for Both Marketing Page and Plan Selection Page",
                    config: {
                        marketingEnabled: !0,
                        planSelectionEnabled: !0
                    }
                }]
            })
        },
        446488: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("446674"),
                i = n("913144");
            let l = {
                fetched: !1,
                affinities: []
            };
            class a extends r.default.Store {
                get hasFetched() {
                    return l.fetched
                }
                get affinities() {
                    return l.affinities
                }
            }
            var s = new a(i.default, {
                BILLING_NITRO_AFFINITY_FETCHED: function(e) {
                    let {} = e;
                    l.fetched = !0
                },
                BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(e) {
                    let {
                        res: t
                    } = e;
                    l.affinities = t
                }
            })
        },
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return m
                },
                useSubscriptionInvoicePreview: function() {
                    return E
                },
                useGetSubscriptionInvoice: function() {
                    return T
                },
                getItemUnitPriceWithDiscount: function() {
                    return I
                }
            }), n("222007");
            var r = n("884691"),
                i = n("446674"),
                l = n("872717"),
                a = n("448993"),
                s = n("195358"),
                o = n("521012"),
                u = n("719923"),
                d = n("49111");
            async function c(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: r,
                    code: i,
                    applyEntitlements: o = !1,
                    currency: c,
                    renewal: m,
                    metadata: f
                } = e;
                t = (0, u.coerceExistingItemsToNewItemInterval)(t);
                let _ = {
                    items: t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: n,
                    trial_id: r,
                    code: i,
                    apply_entitlements: o,
                    currency: c,
                    renewal: m,
                    metadata: f
                };
                try {
                    let e = await l.default.post({
                        url: d.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: _,
                        oldFormErrors: !0
                    });
                    return s.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new a.BillingError(e)
                }
            }
            async function m(e) {
                let {
                    subscriptionId: t,
                    items: n,
                    paymentSourceId: r,
                    renewal: i,
                    currency: o,
                    applyEntitlements: c = !1,
                    analyticsLocations: m,
                    analyticsLocation: f
                } = e;
                null != n && (n = (0, u.coerceExistingItemsToNewItemInterval)(n));
                let _ = {
                    items: null == n ? void 0 : n.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: r,
                    renewal: i,
                    apply_entitlements: c,
                    currency: o
                };
                try {
                    let e = await l.default.patch({
                        url: d.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                        query: {
                            location: f,
                            location_stack: m
                        },
                        body: _,
                        oldFormErrors: !0
                    });
                    return s.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new a.BillingError(e)
                }
            }
            async function f(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let r = await l.default.get({
                    url: d.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return s.default.createInvoiceFromServer(r.body)
            }

            function _(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [l, a] = (0, r.useState)(null), [s, u] = (0, r.useState)(null), d = (0, i.useStateFromStores)([o.default], () => o.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let e = !1;
                    async function r() {
                        try {
                            u(null), a(null);
                            let n = await t();
                            !e && a(n)
                        } catch (t) {
                            !e && u(t)
                        }
                    }
                    return !n && r(), () => {
                        e = !0
                    }
                }, [n, t, d]), [l, s]
            }

            function E(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...n
                    } = e;
                    e = n
                }
                let t = (0, r.useCallback)(() => "subscriptionId" in e ? m(e) : "items" in e ? c(e) : null, [JSON.stringify(e)]);
                return _(e, t)
            }

            function T(e) {
                let t = (0, r.useCallback)(() => f(e), [JSON.stringify(e)]);
                return _(e, t)
            }

            function I(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(n => {
                    let r = n.amount / e.quantity;
                    t -= r
                }), t
            }
        },
        182650: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsInPremiumOfferExperience: function() {
                    return d
                },
                useHasDiscountApplied: function() {
                    return c
                }
            });
            var r = n("866227"),
                i = n.n(r),
                l = n("446674"),
                a = n("521012"),
                s = n("324878"),
                o = n("154889"),
                u = n("917247");

            function d() {
                let e = (0, u.usePremiumTrialOffer)(),
                    t = (0, s.useHasActiveTrial)(),
                    n = (0, o.usePremiumDiscountOffer)(),
                    r = c();
                return null != e || t || null != n || r
            }
            let c = () => {
                var e, t;
                let n = (0, l.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()),
                    r = null == n ? void 0 : null === (e = n.metadata) || void 0 === e ? void 0 : e.nitro_likelihood_discount_expires_at,
                    s = null == n ? void 0 : null === (t = n.metadata) || void 0 === t ? void 0 : t.nitro_reactivation_discount_expires_at,
                    o = null != r ? r : s;
                return null != o && i(Date.now()) <= i(o)
            }
        },
        324878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useHasActiveTrial: function() {
                    return a
                },
                useCurrentPremiumTrialTier: function() {
                    return s
                }
            });
            var r = n("446674"),
                i = n("697218"),
                l = n("521012");
            n("646718");
            let a = () => {
                let e = (0, r.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription());
                return (null == e ? void 0 : e.trialId) != null
            };

            function s() {
                let e = (0, r.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription()),
                    t = (0, r.useStateFromStores)([i.default], () => i.default.getCurrentUser());
                return (null == e ? void 0 : e.trialId) != null ? null == t ? void 0 : t.premiumType : null
            }
        },
        942377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getHigherExpectedValue: function() {
                    return l
                },
                getHighestLikelihood: function() {
                    return a
                }
            });
            var r = n("716849"),
                i = n("646718");

            function l(e, t, n) {
                return null == e ? i.PremiumTypes.TIER_2 : e[i.PremiumSubscriptionSKUs.TIER_0] * t > e[i.PremiumSubscriptionSKUs.TIER_2] * n ? i.PremiumTypes.TIER_0 : i.PremiumTypes.TIER_2
            }

            function a(e) {
                if (null == e) return i.PremiumTypes.TIER_0;
                let t = e[r.NON_SUBSCRIBER_SENTINEL],
                    n = e[i.PremiumSubscriptionSKUs.TIER_0],
                    l = e[i.PremiumSubscriptionSKUs.TIER_2];
                return l > n && l > t ? i.PremiumTypes.TIER_2 : i.PremiumTypes.TIER_0
            }
        },
        982457: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("872717"),
                i = n("151426"),
                l = n("913144"),
                a = n("10641"),
                s = n("872173"),
                o = n("49111"),
                u = {
                    async fetchUserTrialOffer() {
                        try {
                            let {
                                body: e
                            } = await r.default.get({
                                url: o.Endpoints.USER_TRIAL_OFFER,
                                oldFormErrors: !0
                            });
                            null == e && (0, a.isDismissibleContentDismissed)(i.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, s.removeDismissedContent)(i.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), l.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS",
                                userTrialOffer: e
                            })
                        } catch (e) {
                            l.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS"
                            })
                        }
                    },
                    async acknowledgeUserTrialOffer(e) {
                        if (null == e.expires_at) try {
                            let {
                                body: t
                            } = await r.default.post({
                                url: o.Endpoints.USER_TRIAL_OFFER_ACKNOWLEDGED(e.id)
                            });
                            l.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS",
                                userTrialOffer: t
                            })
                        } catch (e) {
                            404 === e.status && l.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS",
                                userTrialOffer: null
                            })
                        }
                    }
                }
        },
        433947: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BOGOAnnouncementModalExperiment: function() {
                    return i
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-06_bogo_announcement_modal",
                label: "BOGO Announcement Modal",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Users will see the BOGO announcement modal",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        705337: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-07_bogo_marketing_materials_experiment",
                label: "BOGO Marketing Materials",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable BOGO marketing materials",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = i
        },
        935566: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BogoPromotionExperiment: function() {
                    return i
                },
                isBogoPromotionExperimentEnabled: function() {
                    return l
                },
                default: function() {
                    return a
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-06_bogo_promotion_gate",
                    label: "BOGO Promotion Manager",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable BOGO Promotion Manager",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return i.getCurrentConfig({
                        location: "489551_2"
                    }, {
                        autoTrackExposure: e
                    })
                };
            var a = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return i.useExperiment({
                    location: "489551_1"
                }, {
                    autoTrackExposure: e
                })
            }
        },
        688771: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EnhancedHDStreamingRoadblockVariants: function() {
                    return i
                },
                GradientVariants: function() {
                    return a
                },
                default: function() {
                    return o
                }
            });
            var r, i, l = n("862205");
            (r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.VARIANT_1A = 1] = "VARIANT_1A", r[r.VARIANT_1B = 2] = "VARIANT_1B", r[r.VARIANT_2A = 3] = "VARIANT_2A", r[r.VARIANT_2B = 4] = "VARIANT_2B";
            let a = [1, 3],
                s = (0, l.createExperiment)({
                    kind: "user",
                    id: "2024-01_enhanced_HD_streaming_roadblock",
                    label: "Enhanced HD Streaming Roadblock",
                    defaultConfig: {
                        enabled: !1,
                        variant: 0
                    },
                    treatments: [{
                        id: 1,
                        label: "Variant 1A",
                        config: {
                            enabled: !0,
                            variant: 1
                        }
                    }, {
                        id: 2,
                        label: "Variant 1B",
                        config: {
                            enabled: !0,
                            variant: 2
                        }
                    }, {
                        id: 3,
                        label: "Variant 2A",
                        config: {
                            enabled: !0,
                            variant: 3
                        }
                    }, {
                        id: 4,
                        label: "Variant 2B",
                        config: {
                            enabled: !0,
                            variant: 4
                        }
                    }]
                });
            var o = s
        },
        843647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("446674"),
                i = n("697218"),
                l = n("10514"),
                a = n("719923"),
                s = n("716849"),
                o = n("676572"),
                u = n("942377"),
                d = n("917247"),
                c = n("646718");

            function m(e) {
                let {
                    autoTrackExposure: t,
                    experiment: n,
                    location: m
                } = e, f = (0, r.useStateFromStores)([i.default], () => i.default.getCurrentUser()), _ = (0, d.usePremiumTrialOffer)(), E = null != _, T = null != f && (0, a.isPremium)(f);
                (0, s.useMaybeFetchPremiumLikelihood)(n);
                let {
                    enabled: I,
                    useExpectedValue: p,
                    useLikelihood: P
                } = n.useExperiment({
                    location: null != m ? m : "1"
                }, {
                    autoTrackExposure: !T && !E && t
                }), {
                    premiumLikelihood: S,
                    fetched: R
                } = (0, r.useStateFromStoresObject)([o.default], () => {
                    let e = o.default.getState();
                    return {
                        fetched: e.fetched,
                        premiumLikelihood: e.premiumLikelihood
                    }
                }), O = (0, r.useStateFromStores)([l.default], () => l.default.isLoadedForSKUs([c.PremiumSubscriptionSKUs.TIER_0, c.PremiumSubscriptionSKUs.TIER_2])), C = !T && I && !E && (p ? !R || !O : !R), M = c.PremiumTypes.TIER_2;
                if (E) {
                    let e = _.subscription_trial;
                    (null == e ? void 0 : e.sku_id) === c.PremiumSubscriptionSKUs.TIER_0 ? M = c.PremiumTypes.TIER_0 : (null == e ? void 0 : e.sku_id) === c.PremiumSubscriptionSKUs.TIER_2 && (M = c.PremiumTypes.TIER_2)
                } else if (!T && !C && I) {
                    if (p) {
                        let {
                            amount: e
                        } = (0, a.getPrice)(c.SubscriptionPlans.PREMIUM_MONTH_TIER_0), {
                            amount: t
                        } = (0, a.getPrice)(c.SubscriptionPlans.PREMIUM_MONTH_TIER_2);
                        M = (0, u.getHigherExpectedValue)(S, e, t)
                    } else P && (M = (0, u.getHighestLikelihood)(S))
                }
                return {
                    isLoading: C,
                    suggestedPremiumType: M
                }
            }
        },
        772465: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PromotionPreviewExperiment: function() {
                    return i
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2021-06_preview_promotions",
                label: "Promotions Preview",
                defaultConfig: {
                    previewEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Preview Enabled",
                    config: {
                        previewEnabled: !0
                    }
                }]
            })
        },
        44678: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getPromotionImageURL: function() {
                    return m
                },
                outboundPromotionFromServer: function() {
                    return f
                },
                bogoPromotionFromServer: function() {
                    return _
                },
                fetchClaimedOutboundPromotionCodes: function() {
                    return T
                },
                claimOutboundPromotion: function() {
                    return I
                },
                getOutboundPromotionRedemptionUrl: function() {
                    return p
                },
                shouldShowOutboundPromotionNotice: function() {
                    return P
                },
                shouldShowOutboundPromotionOnPlatform: function() {
                    return S
                },
                isOutboundPromotionRedeemableByTrialUsers: function() {
                    return R
                },
                isTrialUserEligibleToSeeOutboundPromotion: function() {
                    return O
                }
            }), n("702976"), n("781738");
            var r = n("872717"),
                i = n("819855"),
                l = n("915639"),
                a = n("521012"),
                s = n("568734"),
                o = n("773336"),
                u = n("807345"),
                d = n("646718"),
                c = n("49111");

            function m(e, t) {
                let n = (0, i.isThemeDark)(t) ? "logo-dark" : "logo-light",
                    r = window.GLOBAL_ENV.CDN_HOST,
                    l = "?size=256";
                return null != r ? "".concat(location.protocol, "//").concat(r, "/promotions/").concat(e, "/").concat(n).concat(l) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/").concat(e, "/").concat(n).concat(l)
            }

            function f(e) {
                return {
                    id: e.id,
                    startDate: e.start_date,
                    endDate: e.end_date,
                    outboundRedemptionEndDate: e.outbound_redemption_end_date,
                    outboundTitle: e.outbound_title,
                    outboundRedemptionModalBody: e.outbound_redemption_modal_body,
                    outboundRedemptionPageLink: e.outbound_redemption_page_link,
                    outboundRedemptionUrlFormat: e.outbound_redemption_url_format,
                    outboundTermsAndConditions: e.outbound_terms_and_conditions,
                    flags: e.flags
                }
            }

            function _(e) {
                return {
                    id: e.id,
                    startDate: e.start_date,
                    endDate: e.end_date
                }
            }

            function E(e) {
                return {
                    code: e.code,
                    userId: e.user_id,
                    claimedAt: e.claimed_at,
                    promotion: f(e.promotion)
                }
            }
            async function T() {
                let e = await r.default.get({
                        url: c.Endpoints.CLAIMED_OUTBOUND_PROMOTION_CODES,
                        query: {
                            locale: l.default.locale
                        },
                        oldFormErrors: !0
                    }),
                    t = e.body;
                return t.map(E)
            }
            async function I(e) {
                let t = await r.default.post({
                        url: c.Endpoints.CLAIM_OUTBOUND_PROMOTION_CODE(e)
                    }),
                    n = t.body;
                return E(n)
            }

            function p(e, t) {
                return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e)) : t.outboundRedemptionPageLink
            }

            function P() {
                let e = u.default.lastSeenOutboundPromotionStartDate,
                    t = u.default.outboundPromotions,
                    n = u.default.consumedInboundPromotionId,
                    r = t.filter(e => {
                        let {
                            id: t,
                            flags: r
                        } = e;
                        return t !== n && !(0, s.hasFlag)(r, d.PromotionFlags.SUPPRESS_NOTIFICATION)
                    }),
                    i = null == e ? r : r.filter(t => {
                        let {
                            startDate: n
                        } = t;
                        return new Date(n) > new Date(e)
                    }),
                    l = u.default.lastDismissedOutboundPromotionStartDate,
                    o = a.default.getPremiumTypeSubscription(),
                    c = (null == o ? void 0 : o.trialId) != null,
                    m = c ? i.filter(e => R(e)) : i;
                return 0 !== m.length && (null == l || m.some(e => {
                    let {
                        startDate: t
                    } = e;
                    return new Date(t) > new Date(l)
                }))
            }

            function S(e) {
                return !(0, o.isIOS)() || !(0, s.hasFlag)(e.flags, d.PromotionFlags.IS_BLOCKED_IOS)
            }

            function R(e) {
                return (0, s.hasFlag)(e.flags, d.PromotionFlags.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS)
            }

            function O(e, t) {
                return null != t[e.id] || R(e)
            }
        },
        538620: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchActiveOutboundPromotions: function() {
                    return _
                },
                fetchActiveBogoPromotion: function() {
                    return E
                },
                default: function() {
                    return T
                }
            });
            var r = n("872717"),
                i = n("750028"),
                l = n("913144"),
                a = n("316718"),
                s = n("915639"),
                o = n("872173"),
                u = n("772465"),
                d = n("44678"),
                c = n("807345"),
                m = n("646718"),
                f = n("49111");
            async function _() {
                if (!c.default.isFetchingActiveOutboundPromotions) try {
                    l.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH"
                    });
                    let t = u.PromotionPreviewExperiment.getCurrentConfig({
                            location: "5731cc_1"
                        }, {
                            autoTrackExposure: !1
                        }).previewEnabled ? f.Endpoints.OUTBOUND_PROMOTIONS_PREVIEW : f.Endpoints.OUTBOUND_PROMOTIONS,
                        n = await r.default.get({
                            url: t,
                            query: {
                                locale: s.default.locale
                            },
                            oldFormErrors: !0
                        }),
                        i = n.body,
                        o = c.default.consumedInboundPromotionId;
                    if (!c.default.hasFetchedConsumedInboundPromotionId) {
                        var e;
                        let t = await (0, a.fetchUserEntitlementsForApplication)(m.PREMIUM_SUBSCRIPTION_APPLICATION, !1),
                            n = t.find(e => null != e.promotion_id && !0 === e.consumed);
                        o = null !== (e = null == n ? void 0 : n.promotion_id) && void 0 !== e ? e : null
                    }
                    l.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS",
                        activeOutboundPromotions: i.map(e => (0, d.outboundPromotionFromServer)(e)),
                        consumedInboundPromotionId: o
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL"
                    })
                }
            }
            async function E() {
                if (!c.default.isFetchingActiveBogoPromotion) try {
                    l.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH"
                    });
                    let e = await r.default.get({
                            url: f.Endpoints.BOGO_PROMOTIONS,
                            query: {
                                locale: s.default.locale
                            }
                        }),
                        t = e.body;
                    l.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
                        activePromotion: (0, d.bogoPromotionFromServer)(t)
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL"
                    })
                }
            }
            var T = {
                fetchActiveOutboundPromotions: _,
                dismissOutboundPromotionNotice: function() {
                    l.default.dispatch({
                        type: "OUTBOUND_PROMOTION_NOTICE_DISMISS"
                    });
                    let e = c.default.lastDismissedOutboundPromotionStartDate;
                    null != e && o.PreloadedUserSettingsActionCreators.updateAsync("userContent", t => {
                        t.lastDismissedOutboundPromotionStartDate = i.StringValue.create({
                            value: e
                        })
                    }, o.UserSettingsDelay.INFREQUENT_USER_ACTION)
                },
                markOutboundPromotionsSeen() {
                    l.default.dispatch({
                        type: "OUTBOUND_PROMOTIONS_SEEN"
                    })
                },
                fetchActiveBogoPromotion: E
            }
        },
        694540: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useOutboundPromotions: function() {
                    return _
                },
                useUnseenOutboundPromotions: function() {
                    return E
                },
                useBogoPromotion: function() {
                    return T
                }
            }), n("222007");
            var r = n("884691"),
                i = n("446674"),
                l = n("913144"),
                a = n("697218"),
                s = n("719923"),
                o = n("324878"),
                u = n("44678"),
                d = n("538620"),
                c = n("807345"),
                m = n("646718");

            function f() {
                let e = (0, i.useStateFromStoresArray)([c.default], () => c.default.outboundPromotions),
                    t = (0, i.useStateFromStores)([c.default], () => c.default.consumedInboundPromotionId),
                    n = r.useMemo(() => e.filter(e => {
                        let {
                            id: n
                        } = e;
                        return n !== t
                    }), [e, t]);
                return n
            }

            function _() {
                let e = (0, i.useStateFromStores)([c.default], () => c.default.lastFetchedActivePromotions),
                    t = f(),
                    n = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
                    _ = (0, o.useHasActiveTrial)(),
                    [E, T] = r.useState(!1),
                    [I, p] = r.useState([]);
                r.useEffect(() => {
                    null != e && l.default.wait(() => d.default.markOutboundPromotionsSeen())
                }, [e]);
                let P = r.useCallback(e => {
                        p(t => t.some(t => {
                            let {
                                promotion: n
                            } = t;
                            return n.id === e.promotion.id
                        }) ? t : [...t, e])
                    }, []),
                    S = (0, s.isPremiumExactly)(n, m.PremiumTypes.TIER_2);
                r.useEffect(() => {
                    l.default.wait(() => {
                        S && null == e && d.default.fetchActiveOutboundPromotions()
                    })
                }, [e, S]), r.useEffect(() => {
                    l.default.wait(() => {
                        (0, u.fetchClaimedOutboundPromotionCodes)().then(e => {
                            p(e), T(!0)
                        }).catch(() => {
                            p([]), T(!0)
                        })
                    })
                }, []);
                let R = {};
                for (let {
                        code: e,
                        promotion: t
                    }
                    of I) R[t.id] = e;
                let O = new Set(t.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    })),
                    C = I.filter(e => {
                        let {
                            promotion: t
                        } = e;
                        return !O.has(t.id)
                    }),
                    M = E && (!S || null != e);
                return {
                    promotionsLoaded: M,
                    activeOutboundPromotions: t.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e) && (!_ || (0, u.isTrialUserEligibleToSeeOutboundPromotion)(e, R))),
                    claimedEndedOutboundPromotions: C.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e.promotion)),
                    claimedOutboundPromotionCodeMap: R,
                    addClaimedOutboundPromotionCode: P
                }
            }

            function E() {
                let e = (0, i.useStateFromStores)([c.default], () => c.default.lastSeenOutboundPromotionStartDate),
                    t = (0, o.useHasActiveTrial)(),
                    n = f(),
                    l = r.useMemo(() => {
                        if (null == e) return t ? n.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : n;
                        let r = n.filter(t => {
                            let {
                                startDate: n
                            } = t;
                            return new Date(n) > new Date(e)
                        });
                        return t ? r.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : r
                    }, [n, e, t]);
                return l.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e))
            }

            function T() {
                let e = (0, i.useStateFromStores)([c.default], () => c.default.bogoPromotion);
                return {
                    promotion: e
                }
            }
        },
        807345: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var r = n("446674"),
                i = n("913144"),
                l = n("374363");

            function a() {
                return {
                    hasFetchedConsumedInboundPromotionId: !1,
                    consumedInboundPromotionId: null,
                    lastSeenOutboundPromotionStartDate: null,
                    bogoPromotion: null
                }
            }
            let s = a(),
                o = !1,
                u = null,
                d = !1,
                c = null,
                m = [],
                f = null;

            function _() {
                let e = null;
                for (let t of m)(null == e || new Date(t.startDate) > new Date(e)) && (e = t.startDate);
                return e
            }

            function E() {
                var e, t, n;
                f = null !== (n = null === (t = l.default.settings.userContent) || void 0 === t ? void 0 : null === (e = t.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : null
            }
            class T extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (s = e), this.waitFor(l.default), this.syncWith([l.default], E)
                }
                get outboundPromotions() {
                    return m
                }
                get lastSeenOutboundPromotionStartDate() {
                    return s.lastSeenOutboundPromotionStartDate
                }
                get lastDismissedOutboundPromotionStartDate() {
                    return f
                }
                get lastFetchedActivePromotions() {
                    return c
                }
                get isFetchingActiveOutboundPromotions() {
                    return d
                }
                get hasFetchedConsumedInboundPromotionId() {
                    return s.hasFetchedConsumedInboundPromotionId
                }
                get consumedInboundPromotionId() {
                    return s.consumedInboundPromotionId
                }
                get bogoPromotion() {
                    return s.bogoPromotion
                }
                get isFetchingActiveBogoPromotion() {
                    return o
                }
                get lastFetchedActiveBogoPromotion() {
                    return u
                }
                getState() {
                    return s
                }
            }
            T.displayName = "PromotionsStore", T.persistKey = "PromotionsPersistedStore";
            var I = new T(i.default, {
                ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: function(e) {
                    let {
                        activeOutboundPromotions: t,
                        consumedInboundPromotionId: n
                    } = e;
                    m = t, c = Date.now(), d = !1, !s.hasFetchedConsumedInboundPromotionId && (s.hasFetchedConsumedInboundPromotionId = !0, s.consumedInboundPromotionId = n)
                },
                ACTIVE_OUTBOUND_PROMOTIONS_FETCH: function() {
                    d = !0
                },
                ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: function() {
                    m = [], d = !1
                },
                ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function(e) {
                    let {
                        activePromotion: t
                    } = e;
                    s.bogoPromotion = t, u = Date.now(), o = !1
                },
                ACTIVE_BOGO_PROMOTION_FETCH: function() {
                    o = !0
                },
                ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function() {
                    s.bogoPromotion = null, o = !1
                },
                OUTBOUND_PROMOTION_NOTICE_DISMISS: function() {
                    if (0 === m.length) return !1;
                    let e = _();
                    null != e && (f = e)
                },
                OUTBOUND_PROMOTIONS_SEEN: function() {
                    if (0 === m.length) return !1;
                    let e = _();
                    null != e && (f = e, s.lastSeenOutboundPromotionStartDate = e)
                },
                LOGOUT: function() {
                    s = a(), d = !1, c = null, o = !1, u = null, m = []
                }
            })
        },
        478968: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useDiscountedPrice: function() {
                    return c
                }
            }), n("222007");
            var r = n("798609"),
                i = n("854381"),
                l = n("986681"),
                a = n("719923"),
                s = n("153160"),
                o = n("809071"),
                u = n("154889"),
                d = n("646718");
            let c = e => {
                var t, n, c, m;
                let {
                    paymentSourceId: f
                } = (0, l.default)({
                    isGift: !1,
                    activeSubscription: null
                }), _ = d.SubscriptionPlanInfo[e].skuId, {
                    priceOptions: E
                } = (0, i.default)({
                    activeSubscription: null,
                    skuIDs: [_],
                    paymentSourceId: f,
                    isGift: !1
                }), T = (0, u.usePremiumDiscountOffer)(), [I, p] = (0, o.useSubscriptionInvoicePreview)({
                    items: [{
                        planId: e,
                        quantity: 1
                    }],
                    renewal: !0,
                    preventFetch: !(null != T),
                    paymentSourceId: f,
                    currency: E.currency
                }), P = null == I ? void 0 : null === (m = I.invoiceItems) || void 0 === m ? void 0 : null === (c = m.find(t => t.subscriptionPlanId === e)) || void 0 === c ? void 0 : null === (n = c.discounts) || void 0 === n ? void 0 : null === (t = n.find(e => e.type === r.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount, S = (0, a.getPrice)(e, !1, !1, E);
                return (0, s.formatPrice)(S.amount - (null != P ? P : 0), S.currency)
            }
        },
        641078: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsEligibleForBogoPromotion: function() {
                    return U
                },
                maybeFetchActiveBogoPromotion: function() {
                    return x
                },
                isEligibleForBOGOAnnouncementModal: function() {
                    return h
                },
                getBOGOPillCopy: function() {
                    return A
                }
            });
            var r = n("866227"),
                i = n.n(r),
                l = n("65597"),
                a = n("151426"),
                s = n("850068"),
                o = n("174727"),
                u = n("619935"),
                d = n("10641"),
                c = n("915639"),
                m = n("697218"),
                f = n("521012"),
                _ = n("340412"),
                E = n("719923"),
                T = n("982457"),
                I = n("433947"),
                p = n("705337"),
                P = n("935566"),
                S = n("917247"),
                R = n("538620"),
                O = n("694540"),
                C = n("807345"),
                M = n("646718"),
                g = n("49111"),
                L = n("782340");

            function v(e) {
                var t, n, r;
                let {
                    experimentEnabled: l,
                    premiumSubscription: a,
                    mostRecentSubscription: s
                } = e, o = !1, u = !1;
                if (null != s && s.status === g.SubscriptionStatusTypes.ENDED) {
                    let e = (null === (t = s.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? i(s.metadata.ended_at) : null,
                        r = null === (n = (0, E.getPremiumPlanItem)(s)) || void 0 === n ? void 0 : n.planId,
                        l = null != r && E.default.getPremiumType(r) === M.PremiumTypes.TIER_2;
                    u = null != e && l && e.add(10, "days").isAfter(i())
                }
                if (null != a) {
                    let e = null === (r = (0, E.getPremiumPlanItem)(a)) || void 0 === r ? void 0 : r.planId,
                        t = null != e && E.default.getPremiumType(e) === M.PremiumTypes.TIER_2,
                        n = m.default.getCurrentUser(),
                        i = (null == a ? void 0 : a.trialId) != null && E.default.isPremiumExactly(n, M.PremiumTypes.TIER_0);
                    o = t || i
                }
                return !l || o || u
            }

            function U() {
                var e;
                let {
                    paymentsBlocked: t
                } = u.default.useExperiment({
                    location: "153d31_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    promotion: n
                } = (0, O.useBogoPromotion)(), {
                    enabled: r
                } = (0, P.default)(), {
                    mostRecentSubscription: i,
                    premiumSubscription: a
                } = (0, l.useStateFromStoresObject)([f.default], () => ({
                    mostRecentSubscription: f.default.getMostRecentPremiumTypeSubscription(),
                    premiumSubscription: f.default.getPremiumTypeSubscription()
                })), s = (0, S.usePremiumTrialOffer)(), d = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf();
                (0, o.default)(d, 1e3, void 0, d + 2e3 < Date.now());
                let c = !v({
                        experimentEnabled: r,
                        premiumSubscription: a,
                        mostRecentSubscription: i
                    }),
                    m = c && null == s && null != n && !t,
                    _ = Date.now(),
                    {
                        enabled: E
                    } = p.default.useExperiment({
                        location: "153d31_2"
                    }, {
                        autoTrackExposure: m,
                        disable: !m
                    });
                return !(_ > d) && E
            }
            async function N() {
                var e;
                let t = m.default.getCurrentUser(),
                    n = !(null == t ? void 0 : t.isClaimed()),
                    {
                        paymentsBlocked: r
                    } = u.default.getCurrentConfig({
                        location: "153d31_3"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: i
                    } = (0, P.isBogoPromotionExperimentEnabled)(),
                    {
                        enabled: l
                    } = p.default.getCurrentConfig({
                        location: "153d31_4"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: a
                    } = I.BOGOAnnouncementModalExperiment.getCurrentConfig({
                        location: "153d31_5"
                    }, {
                        autoTrackExposure: !1
                    });
                if (n || r || !i || !a && !l) return !1;
                if (_.default.shouldFetchOffer() && await T.default.fetchUserTrialOffer(), _.default.hasFetchedOffer() && _.default.hasAnyUnexpiredOffer()) return !1;
                !f.default.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(M.PremiumSubscriptionSKUs.TIER_2)) && await (0, s.fetchMostRecentSubscription)(), !f.default.hasFetchedSubscriptions() && await (0, s.fetchSubscriptions)();
                let o = f.default.getMostRecentPremiumTypeSubscription(),
                    d = f.default.getPremiumTypeSubscription();
                return !v({
                    experimentEnabled: i,
                    premiumSubscription: d,
                    mostRecentSubscription: o
                })
            }
            async function x() {
                let e = await N();
                if (!e) return;
                let t = C.default.bogoPromotion;
                if (null != t) {
                    let e = new Date(t.endDate).valueOf();
                    if (e >= Date.now()) return
                }
                await (0, R.fetchActiveBogoPromotion)()
            }
            async function h() {
                let e = C.default.bogoPromotion,
                    t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
                    n = (0, d.isDismissibleContentDismissed)(a.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL),
                    r = await N(),
                    {
                        enabled: i
                    } = P.BogoPromotionExperiment.getCurrentConfig({
                        location: "153d31_6"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: l
                    } = I.BOGOAnnouncementModalExperiment.getCurrentConfig({
                        location: "153d31_7"
                    }, {
                        autoTrackExposure: t && i && !n && r
                    });
                return t && l && i && !n && r
            }

            function A() {
                let e = c.default.locale;
                switch (e) {
                    case "de":
                    case "es-ES":
                    case "fr":
                    case "hr":
                    case "it":
                    case "lt":
                    case "nl":
                    case "pl":
                    case "pt-BR":
                    case "ro":
                    case "fi":
                    case "sv-SE":
                    case "tr":
                    case "cs":
                    case "el":
                    case "bg":
                    case "ru":
                    case "uk":
                    case "ja":
                    case "ko":
                        return L.default.Messages.NITRO_BADGE_TEXT;
                    default:
                        return L.default.Messages.BOGO_PILL
                }
            }
        },
        956597: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumTrialGradientBadge: function() {
                    return F
                },
                default: function() {
                    return G
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("627445"),
                o = n.n(s),
                u = n("866227"),
                d = n.n(u),
                c = n("446674"),
                m = n("551042"),
                f = n("819855"),
                _ = n("77078"),
                E = n("841098"),
                T = n("206230"),
                I = n("32531"),
                p = n("393414"),
                P = n("945330"),
                S = n("41250"),
                R = n("379863"),
                O = n("216422"),
                C = n("719923"),
                M = n("286235"),
                g = n("626301"),
                L = n("917247"),
                v = n("635956"),
                U = n("400307"),
                N = n("646718"),
                x = n("49111"),
                h = n("782340"),
                A = n("670714"),
                b = n("481927");

            function D(e) {
                if (null == e) return null;
                let t = d(e),
                    n = t.diff(d(), "h");
                if (n > 24) {
                    let e = t.diff(d(), "d");
                    return h.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({
                        numDays: e
                    })
                }
                if (n > 1) return h.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({
                    numHours: n
                });
                let r = t.diff(d(), "minutes");
                return h.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({
                    numMinutes: r
                })
            }

            function y(e) {
                var t, n, i;
                let {
                    className: l,
                    children: s,
                    withBottomMargin: o,
                    discountOffer: u,
                    trialOffer: d
                } = e, c = null !== (t = null == d ? void 0 : d.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at, m = null == d ? void 0 : d.subscription_trial, f = null !== (i = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == m ? void 0 : m.sku_id) && void 0 !== i ? i : N.PremiumSubscriptionSKUs.TIER_2;
                return (0, r.jsxs)("div", {
                    className: a(l, A.gradientUpsellWrapper, {
                        [A.gradientUpsellWrapperTier0]: f === N.PremiumSubscriptionSKUs.TIER_0,
                        [A.gradientUpsellWrapperTier2]: f === N.PremiumSubscriptionSKUs.TIER_2,
                        [A.gradientUpsellWrapperWithBottomMargin]: o
                    }),
                    children: [(0, r.jsxs)("div", {
                        className: A.logo,
                        children: [(0, r.jsx)(O.default, {
                            className: A.logoIcon
                        }), f === N.PremiumSubscriptionSKUs.TIER_0 && (0, r.jsx)(R.default, {
                            className: A.logoWordmark
                        }), f === N.PremiumSubscriptionSKUs.TIER_2 && (0, r.jsx)(S.default, {
                            className: A.logoWordmark
                        })]
                    }), (0, r.jsx)(_.Text, {
                        variant: "text-md/medium",
                        className: A.copy,
                        color: "none",
                        children: s
                    }), (0, r.jsx)(U.PremiumPillWithSparkles, {
                        text: null != u ? h.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                            percent: u.discount.amount
                        }) : h.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        colorOptions: f === N.PremiumSubscriptionSKUs.TIER_0 ? U.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : U.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
                    }), (0, r.jsx)(_.Text, {
                        variant: "eyebrow",
                        className: A.countdownText,
                        children: D(c)
                    })]
                })
            }

            function j(e) {
                var t, n;
                let {
                    className: l,
                    onClose: a,
                    subscriptionTier: s,
                    analyticsLocationObject: o,
                    trialOffer: u,
                    discountOffer: d
                } = e, [c, m] = i.useState(!1), f = null != d ? h.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                    percent: d.discount.amount
                }) : (0, C.formatTrialCtaIntervalDuration)({
                    intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
                    intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                });
                return (0, r.jsx)(v.default, {
                    className: l,
                    subscriptionTier: s,
                    trialId: null == u ? void 0 : u.trial_id,
                    submitting: c,
                    premiumModalAnalyticsLocation: o,
                    size: _.Button.Sizes.MEDIUM,
                    color: _.Button.Colors.GREEN,
                    onClick: () => {
                        m(!0)
                    },
                    onSubscribeModalClose: e => {
                        m(!1), e && (null == a || a())
                    },
                    buttonText: f
                })
            }

            function F(e) {
                var t, n;
                let i = null === (t = (0, L.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial,
                    l = null !== (n = null == i ? void 0 : i.sku_id) && void 0 !== n ? n : N.PremiumSubscriptionSKUs.TIER_2;
                return (0, r.jsx)(_.Text, {
                    variant: "text-xs/bold",
                    className: a(A.trialBadge, e.className, {
                        [A.trialBadgeGradientTier0]: l === N.PremiumSubscriptionSKUs.TIER_0,
                        [A.trialBadgeGradientTier2]: l === N.PremiumSubscriptionSKUs.TIER_2
                    }),
                    color: "none",
                    children: (0, C.formatTrialOfferIntervalDuration)({
                        intervalType: null == i ? void 0 : i.interval,
                        intervalCount: null == i ? void 0 : i.interval_count
                    })
                })
            }

            function B(e) {
                let {
                    subscriptionTier: t,
                    onClose: n,
                    analyticsLocationObject: i,
                    trialOffer: l,
                    discountOffer: a
                } = e;
                return (0, r.jsxs)("div", {
                    className: A.footer,
                    children: [(0, r.jsx)(_.Button, {
                        onClick: n,
                        size: _.Button.Sizes.SMALL,
                        look: _.ButtonLooks.BLANK,
                        className: A.cancelButton,
                        children: h.default.Messages.CLOSE
                    }), (0, r.jsx)(j, {
                        className: A.subscribeButton,
                        subscriptionTier: t,
                        analyticsLocationObject: i,
                        onClose: n,
                        discountOffer: a,
                        trialOffer: l
                    })]
                })
            }

            function w(e) {
                let {
                    onClose: t,
                    analyticsLocationObject: n
                } = e, i = (0, L.usePremiumTrialOffer)();
                return (0, r.jsxs)("div", {
                    className: A.tryOutUpsellContainer,
                    children: [(0, r.jsx)(U.PremiumPillWithSparkles, {
                        className: A.topRimPill,
                        text: h.default.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
                        colorOptions: U.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                    }), (0, r.jsx)(_.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-normal",
                        children: h.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({
                            onClick: g.navigateToPremiumMarketingPage
                        })
                    }), (0, r.jsx)(j, {
                        trialOffer: i,
                        className: A.subscribeButtonWide,
                        subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocationObject: n,
                        onClose: t
                    }), (0, r.jsx)(_.Text, {
                        variant: "eyebrow",
                        className: A.countdownTextInSetting,
                        children: D(null == i ? void 0 : i.expires_at)
                    })]
                })
            }

            function k(e) {
                let {
                    headingText: t,
                    context: n,
                    children: i,
                    trialOffer: l,
                    discountOffer: a
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(_.Heading, {
                        className: A.header,
                        variant: "heading-xl/semibold",
                        children: t
                    }), null != n && (0, r.jsx)(_.Text, {
                        className: A.context,
                        variant: "text-md/normal",
                        children: n
                    }), (0, r.jsx)(y, {
                        trialOffer: l,
                        discountOffer: a,
                        children: i
                    })]
                })
            }

            function G(e) {
                let {
                    headingText: t,
                    context: i,
                    children: l,
                    onClose: s,
                    type: u,
                    subscriptionTier: d,
                    analyticsLocationObject: S,
                    trialOffer: R,
                    discountOffer: O
                } = e, g = (0, c.useStateFromStores)([T.default], () => T.default.useReducedMotion), L = (0, E.default)();
                switch (u) {
                    case N.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL:
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(_.Clickable, {
                                className: A.upsellClose,
                                onClick: s,
                                children: (0, r.jsx)(P.default, {})
                            }), (0, r.jsxs)("div", {
                                className: A.contentContainer,
                                children: [(0, r.jsx)("img", {
                                    className: A.upsellImage,
                                    src: b,
                                    alt: h.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                                }), (0, r.jsx)(_.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: h.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                                }), (0, r.jsx)(y, {
                                    trialOffer: R,
                                    discountOffer: O,
                                    children: h.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                        planName: (0, C.getDisplayNameFromSku)(d),
                                        onClick: () => (0, p.transitionTo)(x.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, r.jsx)(B, {
                                subscriptionTier: d,
                                onClose: s,
                                analyticsLocationObject: {
                                    section: x.AnalyticsSections.EXPRESSION_PICKER,
                                    object: x.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: R,
                                discountOffer: O
                            })]
                        });
                    case N.PremiumUpsellTypes.STICKER_PICKER_UPSELL:
                        return o(null != l, "You must specify children for this upsell type"), (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)("div", {
                                className: A.contentContainer,
                                children: [(0, r.jsx)("img", {
                                    className: A.upsellImage,
                                    src: b,
                                    alt: h.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                                }), (0, r.jsx)(_.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: h.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                                }), (0, r.jsx)(y, {
                                    trialOffer: R,
                                    discountOffer: O,
                                    children: h.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                        planName: (0, C.getDisplayNameFromSku)(d),
                                        onClick: () => (0, p.transitionTo)(x.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, r.jsx)(B, {
                                subscriptionTier: d,
                                onClose: s,
                                analyticsLocationObject: {
                                    section: x.AnalyticsSections.EXPRESSION_PICKER,
                                    object: x.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: R,
                                discountOffer: O
                            })]
                        });
                    case N.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
                        o(null != l, "You must specify children for this upsell type");
                        let v = (0, f.isThemeLight)(L) ? n("602291") : n("609708");
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)("div", {
                                className: A.contentContainer,
                                children: [(0, r.jsx)("img", {
                                    alt: "",
                                    className: A.upsellImage,
                                    src: v
                                }), (0, r.jsx)(_.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: h.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                                }), (0, r.jsx)(y, {
                                    trialOffer: R,
                                    discountOffer: O,
                                    children: h.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
                                        planName: (0, C.getDisplayNameFromSku)(d),
                                        onClick: () => (0, p.transitionTo)(x.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, r.jsx)(B, {
                                subscriptionTier: d,
                                onClose: s,
                                analyticsLocationObject: {
                                    section: x.AnalyticsSections.EMOJI_PICKER_POPOUT,
                                    object: x.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: R,
                                discountOffer: O
                            })]
                        });
                    case N.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                    case N.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                    case N.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                    case N.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                        let U;
                        switch (u) {
                            case N.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                                U = h.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
                                    planName: (0, C.getDisplayNameFromSku)(d),
                                    premiumMaxSize: d === N.PremiumSubscriptionSKUs.TIER_0 ? h.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : h.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
                                    onClick: () => {
                                        (0, p.transitionTo)(x.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                });
                                break;
                            case N.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                                U = h.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                                    planName: (0, C.getDisplayNameFromSku)(d),
                                    onClick: () => {
                                        (0, p.transitionTo)(x.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                });
                                break;
                            case N.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                                U = h.default.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
                                    onClick: () => {
                                        (0, p.transitionTo)(x.Routes.APPLICATION_STORE), null == s || s(), (0, m.closeAllModals)()
                                    }
                                });
                                break;
                            case N.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                                U = h.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                                    premiumMaxMessageLength: x.MAX_MESSAGE_LENGTH_PREMIUM,
                                    onClick: () => {
                                        (0, p.transitionTo)(x.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                })
                        }
                        return o(null != U, "There must be some upsell context"), (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsxs)("div", {
                                className: A.contentContainer,
                                children: [(0, r.jsx)(_.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: t
                                }), (0, r.jsx)(_.Text, {
                                    variant: "text-md/normal",
                                    children: i
                                }), (0, r.jsx)(y, {
                                    trialOffer: R,
                                    discountOffer: O,
                                    children: U
                                })]
                            })
                        });
                    case N.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL:
                        return (0, r.jsxs)("div", {
                            className: A.contentContainer,
                            children: [(0, r.jsx)(_.Heading, {
                                variant: "heading-xl/bold",
                                color: "header-primary",
                                children: t
                            }), (0, r.jsx)(_.Text, {
                                variant: "text-md/normal",
                                children: i
                            }), (0, r.jsx)(y, {
                                trialOffer: R,
                                discountOffer: O,
                                children: h.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                                    planName: (0, C.getDisplayNameFromSku)(d),
                                    onClick: () => (0, p.transitionTo)(x.Routes.APPLICATION_STORE)
                                })
                            }), (0, r.jsx)(j, {
                                className: A.upsellButton,
                                subscriptionTier: d,
                                analyticsLocationObject: S,
                                onClose: s,
                                trialOffer: R,
                                discountOffer: O
                            })]
                        });
                    case N.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
                        return o(null != l, "You must specify children for this upsell type"), (0, r.jsx)(y, {
                            trialOffer: R,
                            discountOffer: O,
                            children: h.default.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
                                onClick: () => {
                                    (0, p.transitionTo)(x.Routes.APPLICATION_STORE), (0, I.closeEditor)()
                                }
                            })
                        });
                    case N.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
                        return (0, r.jsxs)("div", {
                            className: a(A.messageLengthUpsellContainer, {
                                [A.messageLengthUpsellAppearAnimation]: !g
                            }),
                            children: [(0, r.jsx)(_.Text, {
                                variant: "text-lg/bold",
                                color: "status-danger",
                                children: i
                            }), (0, r.jsx)(_.Heading, {
                                variant: "heading-lg/extrabold",
                                color: "header-primary",
                                className: A.messageLengthUpsellHeader,
                                children: h.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
                            }), (0, r.jsx)("div", {
                                className: A.divider
                            }), (0, r.jsx)(y, {
                                trialOffer: R,
                                discountOffer: O,
                                className: A.messageLengthBrandedContainer,
                                subscriptionTier: d,
                                children: h.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                                    premiumMaxMessageLength: x.MAX_MESSAGE_LENGTH_PREMIUM,
                                    onClick: () => {
                                        (0, p.transitionTo)(x.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                })
                            }), (0, r.jsx)(j, {
                                subscriptionTier: d,
                                analyticsLocationObject: S,
                                onClose: s,
                                trialOffer: R,
                                discountOffer: O
                            })]
                        });
                    case N.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL:
                    case N.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
                        return (0, r.jsx)(w, {});
                    case N.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL:
                    case N.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL:
                    case N.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL:
                    case N.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL:
                    case N.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
                    case N.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
                    case N.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED:
                        return (0, r.jsx)(k, {
                            trialOffer: R,
                            discountOffer: O,
                            headingText: t,
                            context: i,
                            children: l
                        });
                    default:
                        return M.default.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(u)), (0, r.jsx)(k, {
                            headingText: t,
                            context: i,
                            children: l,
                            trialOffer: R,
                            discountOffer: O
                        })
                }
            }
        },
        400307: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPillAndSparklesColorOptions: function() {
                    return s
                },
                PremiumPillWithSparkles: function() {
                    return ea
                },
                Tier0Card: function() {
                    return em
                },
                Tier2FeatureSet: function() {
                    return u
                },
                Tier2FeatureItems: function() {
                    return ef
                },
                Tier2Card: function() {
                    return e_
                },
                PremiumTierCardsVariant: function() {
                    return d
                },
                default: function() {
                    return eE
                }
            });
            var r, i, l, a, s, o, u, d, c = n("37983");
            n("884691");
            var m = n("414456"),
                f = n.n(m),
                _ = n("866227"),
                E = n.n(_),
                T = n("446674"),
                I = n("669491"),
                p = n("819855"),
                P = n("77078"),
                S = n("841098"),
                R = n("812204"),
                O = n("685665"),
                C = n("441413"),
                M = n("915639"),
                g = n("697218"),
                L = n("521012"),
                v = n("594098"),
                U = n("491614"),
                N = n("716589"),
                x = n("46829"),
                h = n("118503"),
                A = n("41250"),
                b = n("379863"),
                D = n("216422"),
                y = n("619911"),
                j = n("698015"),
                F = n("75196"),
                B = n("240481"),
                w = n("719923"),
                k = n("309318"),
                G = n("446488"),
                H = n("182650"),
                K = n("154889"),
                V = n("917247"),
                z = n("478968"),
                W = n("641078"),
                Z = n("992118"),
                Y = n("332291"),
                X = n("646718"),
                J = n("719347"),
                q = n("782340"),
                Q = n("205988"),
                $ = n("939784"),
                ee = n("769015");
            let et = "premium_new_tier_2_gradient",
                en = "premium_old_tier_2_gradient";

            function er(e) {
                let {
                    width: t = 14,
                    height: n = 13,
                    color: r = "white",
                    foreground: i,
                    ...l
                } = e;
                return (0, c.jsxs)("svg", {
                    ...(0, F.default)({
                        ...l
                    }),
                    preserveAspectRatio: "none",
                    width: t,
                    height: n,
                    viewBox: "0 0 14 13",
                    className: i,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, c.jsxs)("defs", {
                        children: [(0, c.jsxs)("linearGradient", {
                            id: et,
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [(0, c.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#8547C6"
                            }), (0, c.jsx)("stop", {
                                offset: "50%",
                                stopColor: "#B845C1"
                            }), (0, c.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#AB5D8A"
                            })]
                        }), (0, c.jsxs)("linearGradient", {
                            id: en,
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [(0, c.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#B473F5"
                            }), (0, c.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#E292AA"
                            })]
                        })]
                    }), (0, c.jsx)("path", {
                        d: "M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z",
                        fill: r
                    })]
                })
            }

            function ei(e) {
                let {
                    tier: t = X.PremiumTypes.TIER_2
                } = e, n = (0, S.default)(), r = (0, p.isThemeLight)(n);
                return (0, c.jsxs)(c.Fragment, {
                    children: [!r && (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)("div", {
                            className: f(Q.rimGlowVertical, {
                                [Q.rimGlowVerticalTier0]: t === X.PremiumTypes.TIER_0,
                                [Q.rimGlowVerticalTier2]: t === X.PremiumTypes.TIER_2
                            })
                        }), (0, c.jsx)(er, {
                            foreground: Q.buttonSparkleStar1
                        })]
                    }), (0, c.jsx)(er, {
                        foreground: Q.buttonSparkleStar2
                    }), (0, c.jsx)(er, {
                        foreground: Q.buttonSparkleStar3
                    }), (0, c.jsx)(er, {
                        foreground: Q.buttonSparkleStar4
                    }), (0, c.jsx)(er, {
                        foreground: Q.buttonSparkleStar5
                    })]
                })
            }

            function el(e) {
                let {
                    text: t,
                    className: n,
                    colorOptions: r = 2
                } = e;
                return (0, c.jsx)("div", {
                    className: f(n, Q.freeTrialPill, {
                        [Q.freeTrialPillTier0GradientFill]: 1 === r,
                        [Q.freeTrialPillTier2GradientFill]: 3 === r,
                        [Q.freeTrialPillTier2OldGradientFill]: 4 === r
                    }),
                    children: (0, c.jsx)(P.Text, {
                        variant: "text-xs/bold",
                        className: f(Q.freeTrialPillText, {
                            [Q.freeTrialPillTextInverted]: 0 !== r && 2 !== r,
                            [Q.freeTrialPillTextTier0]: 0 === r,
                            [Q.freeTrialPillTextTier2]: 2 === r
                        }),
                        children: t
                    })
                })
            }

            function ea(e) {
                let t, {
                    text: n,
                    className: r,
                    colorOptions: i = 2,
                    isPillOnBorder: l = !0
                } = e;
                switch (i) {
                    case 1:
                        t = I.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
                        break;
                    case 3:
                        t = "url(#".concat(et, ")");
                        break;
                    case 4:
                        t = "url(#".concat(en, ")");
                        break;
                    default:
                        t = "white"
                }
                return l ? (0, c.jsxs)("div", {
                    className: f(r, Q.freeTrialPillWithSparkles),
                    children: [(0, c.jsx)(er, {
                        foreground: Q.sparkleStar1,
                        color: t
                    }), (0, c.jsx)(er, {
                        foreground: Q.sparkleStar2,
                        color: t
                    }), (0, c.jsx)(er, {
                        foreground: Q.sparkleStar3,
                        color: t
                    }), (0, c.jsx)(el, {
                        text: n,
                        colorOptions: i
                    }), (0, c.jsx)(er, {
                        foreground: Q.sparkleStar4,
                        color: t
                    }), (0, c.jsx)(er, {
                        foreground: Q.sparkleStar5,
                        color: t
                    })]
                }) : (0, c.jsxs)("div", {
                    className: f(r, Q.freeTrialPillWithSparkles),
                    children: [(0, c.jsx)(el, {
                        text: n,
                        colorOptions: i
                    }), (0, c.jsx)(er, {
                        foreground: Q.sparkleStar1,
                        style: {
                            marginLeft: 4,
                            marginBottom: -6
                        },
                        color: t
                    }), (0, c.jsx)(er, {
                        foreground: Q.sparkleStar2,
                        color: t
                    })]
                })
            }

            function es(e) {
                let {
                    width: t = 83,
                    height: n = 82,
                    ...r
                } = e;
                return (0, c.jsxs)("svg", {
                    ...(0, F.default)({
                        ...r
                    }),
                    width: t,
                    height: n,
                    viewBox: "0 0 83 82",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, c.jsx)("g", {
                        clipPath: "url(#clip0_1691_113820)",
                        children: (0, c.jsx)("path", {
                            d: "M75.6975 45.1322C75.2844 48.0717 70.2815 49.7001 69.2458 52.3302C68.0858 55.0537 70.4287 59.7129 68.6614 62.0181C66.8941 64.3233 61.7294 63.1533 59.479 64.9465C57.2438 66.6308 56.836 71.9026 54.133 72.966C51.5389 74.0448 47.5818 70.602 44.6592 70.8574C41.8456 71.1281 38.9013 75.4884 35.9617 75.0752C33.0222 74.6621 31.3938 69.6592 28.7638 68.6235C26.0402 67.4635 21.381 69.8064 19.0758 68.0391C16.7706 66.2718 17.9406 61.1071 16.1474 58.8566C14.5873 56.5279 9.31547 56.1201 8.25204 53.4171C7.17332 50.823 10.6161 46.8659 10.3607 43.9434C9.96577 41.2233 5.60554 38.279 6.01868 35.3394C6.43181 32.3999 11.4347 30.7715 12.4704 28.1414C13.6304 25.4179 11.2876 20.7587 13.0548 18.4535C14.8221 16.1483 19.9868 17.3183 22.2373 15.5251C24.4724 13.8408 24.8802 8.56898 27.5832 7.50556C30.1774 6.42683 34.1345 9.86958 37.057 9.61417C39.8706 9.34346 42.8149 4.98323 45.7545 5.39636C48.6941 5.80949 50.3224 10.8124 52.9525 11.8481C55.6761 13.0081 60.3352 10.6652 62.6404 12.4325C64.9456 14.1998 63.7756 19.3645 65.5688 21.615C67.2531 23.8501 72.5249 24.2579 73.5884 26.9609C74.6671 29.555 71.2243 33.5122 71.4797 36.4347C71.7505 39.2483 76.1107 42.1926 75.6975 45.1322Z",
                            fill: "currentColor"
                        })
                    }), (0, c.jsx)("path", {
                        d: "M30.1999 41.1212L26.9681 32.3582L23.3318 31.8471L21.6757 43.6313L24.3355 44.0051L25.5209 35.571L28.9482 44.6534L32.3488 45.1313L34.0049 33.3471L31.3451 32.9733L30.1999 41.1212ZM43.2501 41.8738C43.6191 39.2476 42.3243 37.5893 39.7655 37.2296C36.971 36.8369 34.9959 38.4305 34.6269 41.0567C34.2341 43.8513 35.9048 45.8886 38.935 46.3145C40.3996 46.5203 41.6035 46.2603 42.3119 45.862L42.5887 43.8924C41.8322 44.2668 40.8661 44.4228 39.9065 44.288C38.2567 44.0561 37.4063 43.2671 37.286 42.1686L43.0939 42.9849L43.2501 41.8738ZM39.5418 39.3098C40.5182 39.447 41.0822 40.0756 40.9668 41.1409L37.5326 40.6583C37.8069 39.6839 38.4812 39.1607 39.5418 39.3098ZM53.3558 44.7704L52.6485 39.2977L49.9214 38.9145L47.757 43.9321L47.211 38.5335L44.4838 38.1503L45.6771 47.0045L48.4043 47.3878L50.7631 42.2087L51.6534 47.8444L54.4311 48.2348L58.2208 40.0809L55.5104 39.7L53.3558 44.7704ZM61.6245 45.4004L62.7507 37.3871L60.0067 37.0015L58.8805 45.0147L61.6245 45.4004ZM59.7123 49.2345C60.6719 49.3694 61.4423 48.7738 61.5677 47.8816C61.6954 46.9725 61.1167 46.2045 60.1571 46.0696C59.1975 45.9348 58.4127 46.5112 58.2849 47.4202C58.1595 48.3125 58.7527 49.0997 59.7123 49.2345Z",
                        fill: "#5865F2"
                    }), (0, c.jsx)("path", {
                        d: "M57.6991 28.0304L61.3718 26.9774C61.3856 26.9721 61.3978 26.9632 61.4071 26.9517C61.4163 26.9401 61.4223 26.9262 61.4243 26.9116C61.4264 26.8969 61.4245 26.882 61.4188 26.8683C61.4131 26.8546 61.4038 26.8427 61.392 26.8338L58.1518 24.8093C58.1409 24.8077 58.1311 24.8019 58.1244 24.7932C58.1178 24.7844 58.1149 24.7733 58.1165 24.7625L57.0607 21.0782C57.0282 21.0109 56.9459 20.9993 56.9167 21.058L54.8864 24.3085C54.8629 24.3261 54.86 24.3466 54.8394 24.3437L51.1462 25.3939C51.1324 25.3992 51.1202 25.4081 51.1109 25.4196C51.1017 25.4312 51.0957 25.445 51.0937 25.4597C51.0916 25.4744 51.0935 25.4893 51.0992 25.503C51.1049 25.5167 51.1142 25.5286 51.126 25.5375L54.3867 27.5649C54.4073 27.5678 54.4044 27.5883 54.4221 27.6117L55.4778 31.296C55.4898 31.3604 55.5721 31.372 55.6219 31.3162L57.6522 28.0657C57.6537 28.0548 57.6595 28.045 57.6683 28.0384C57.6771 28.0318 57.6882 28.0289 57.6991 28.0304V28.0304Z",
                        fill: "#5865F2"
                    }), (0, c.jsx)("path", {
                        d: "M27.9939 54.8801L30.1446 54.2599C30.156 54.2502 30.1635 54.2367 30.1656 54.2219C30.1676 54.207 30.1642 54.1919 30.1559 54.1795L28.2594 52.9905C28.2541 52.9897 28.2493 52.9869 28.2461 52.9826C28.2429 52.9783 28.2415 52.9729 28.2422 52.9676L27.626 50.8105C27.6275 50.7998 27.6247 50.789 27.6182 50.7804C27.6118 50.7718 27.6022 50.7662 27.5915 50.7647C27.5809 50.7632 27.5701 50.766 27.5616 50.7725C27.553 50.7789 27.5473 50.7886 27.5458 50.7992L26.3589 52.7029L26.3388 52.7001L24.1881 53.3203C24.1775 53.3188 24.1667 53.3216 24.1581 53.3281C24.1495 53.3346 24.1439 53.3442 24.1424 53.3549C24.1409 53.3655 24.1437 53.3763 24.1501 53.3849C24.1566 53.3935 24.1662 53.3992 24.1768 53.4007L26.0733 54.5897C26.0786 54.5904 26.0834 54.5933 26.0866 54.5976C26.0898 54.6019 26.0912 54.6073 26.0905 54.6126L26.7067 56.7697C26.7164 56.7811 26.7299 56.7886 26.7446 56.7907C26.7594 56.7928 26.7745 56.7893 26.7869 56.7809L27.9738 54.8773C27.9738 54.8773 27.9738 54.8773 27.9939 54.8801Z",
                        fill: "#5865F2"
                    }), (0, c.jsx)("defs", {
                        children: (0, c.jsx)("clipPath", {
                            id: "clip0_1691_113820",
                            children: (0, c.jsx)("rect", {
                                width: "70.3636",
                                height: "70.3636",
                                fill: "white",
                                transform: "translate(10.915 0.5) rotate(8)"
                            })
                        })
                    })]
                })
            }

            function eo(e) {
                let {
                    Icon: t,
                    text: n,
                    isNew: r = !1
                } = e;
                return (0, c.jsxs)("div", {
                    className: Q.item,
                    children: [(0, c.jsx)(t, {
                        className: Q.icon
                    }), (0, c.jsx)(P.Text, {
                        variant: "text-md/normal",
                        color: "always-white",
                        children: n
                    }), r ? (0, c.jsx)(C.default, {
                        className: Q.newTagItem,
                        forceUseColorForSparkles: !0,
                        shouldInheritBackgroundColor: !0,
                        shouldInheritTextColor: !0
                    }) : null]
                })
            }

            function eu(e) {
                let {
                    defaultPriceString: t,
                    subscriptionPlan: n
                } = e, r = (0, z.useDiscountedPrice)(n);
                return (0, c.jsx)(c.Fragment, {
                    children: q.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION.format({
                        discountedPrice: r,
                        regularPrice: t
                    })
                })
            }

            function ed(e) {
                let {
                    isGift: t,
                    premiumTier: n,
                    offerTierMatchesCard: r,
                    offerType: i,
                    showYearlyPrice: l
                } = e, a = (0, T.useStateFromStores)([L.default], () => L.default.getPremiumTypeSubscription()), s = (0, T.useStateFromStores)([g.default], () => g.default.getCurrentUser()), o = (0, H.useHasDiscountApplied)(), u = n === X.PremiumTypes.TIER_0 ? X.PremiumSubscriptionSKUs.TIER_0 : X.PremiumSubscriptionSKUs.TIER_2, d = (null == a ? void 0 : a.trialId) != null ? null == s ? void 0 : s.premiumType : o ? X.PremiumTypes.TIER_2 : null, m = (0, V.usePremiumTrialOffer)(), f = null == m ? void 0 : m.subscription_trial;
                if (!t && null != d && n === d && null != a && null != a.planIdFromItems) {
                    let e = null != a.trialEndsAt ? E(null == a ? void 0 : a.trialEndsAt).diff(E(), "d") : 0,
                        t = X.SubscriptionPlanInfo[a.planIdFromItems],
                        n = w.default.formatPriceString(w.default.getDefaultPrice(t.id), t.interval);
                    return (0, c.jsx)(c.Fragment, {
                        children: (0, c.jsx)(P.Heading, {
                            variant: "heading-md/normal",
                            color: "always-white",
                            className: Q.trialHeader,
                            children: 0 === i ? q.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                                remainingTime: e,
                                price: n
                            }) : q.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION.format({
                                percent: 30,
                                regularPrice: n
                            })
                        })
                    })
                }
                if (!t && r) {
                    var _, I, p, S;
                    let e = w.default.formatPriceString(w.default.getDefaultPrice(n === X.PremiumTypes.TIER_0 ? X.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : X.SubscriptionPlans.PREMIUM_MONTH_TIER_2), X.SubscriptionIntervalTypes.MONTH);
                    return (0, c.jsx)(P.Heading, {
                        variant: "heading-md/normal",
                        color: "always-white",
                        className: Q.trialHeader,
                        children: 0 === i ? q.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
                            planName: (0, w.getTierDisplayName)(null !== (I = X.PREMIUM_SKU_TO_MONTHLY_PLAN[null !== (_ = null == f ? void 0 : f.sku_id) && void 0 !== _ ? _ : X.PremiumSubscriptionSKUs.NONE]) && void 0 !== I ? I : X.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
                            duration: (0, w.formatIntervalDuration)({
                                intervalType: null !== (p = null == f ? void 0 : f.interval) && void 0 !== p ? p : X.SubscriptionIntervalTypes.DAY,
                                intervalCount: null !== (S = null == f ? void 0 : f.interval_count) && void 0 !== S ? S : 30,
                                capitalize: !1
                            }),
                            price: e
                        }) : (0, c.jsx)(eu, {
                            defaultPriceString: e,
                            subscriptionPlan: X.SubscriptionPlans.PREMIUM_MONTH_TIER_2
                        })
                    })
                }
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(Z.default, {
                        subscriptionTier: u,
                        isGift: t,
                        className: Q.price
                    }), l && (0, c.jsx)(Z.default, {
                        subscriptionTier: u,
                        interval: X.SubscriptionIntervalTypes.YEAR,
                        isGift: t,
                        className: Q.price
                    })]
                })
            }

            function ec() {
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(eo, {
                        Icon: j.default,
                        text: q.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(X.PremiumTypes.TIER_0, {
                                useSpace: !1
                            })
                        })
                    }), (0, c.jsx)(eo, {
                        Icon: x.default,
                        text: q.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), (0, c.jsx)(eo, {
                        Icon: U.default,
                        text: q.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
                    }), (0, c.jsx)(eo, {
                        Icon: D.default,
                        text: q.default.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
                    })]
                })
            }

            function em(e) {
                var t;
                let {
                    showWumpus: n,
                    showBadge: r,
                    ctaButton: i,
                    showYearlyPrice: l,
                    className: a,
                    isGift: s = !1,
                    variant: o = 0
                } = e, u = (0, T.useStateFromStores)([L.default], () => L.default.getPremiumTypeSubscription()), d = (0, T.useStateFromStores)([g.default], () => g.default.getCurrentUser()), m = (0, V.usePremiumTrialOffer)(), _ = null == m ? void 0 : null === (t = m.subscription_trial) || void 0 === t ? void 0 : t.sku_id, E = (null == u ? void 0 : u.trialId) != null, I = (null == u ? void 0 : u.trialId) != null ? null == d ? void 0 : d.premiumType : null, p = null != _ || E, P = 1 === o;
                return (0, c.jsxs)("div", {
                    className: f(Q.tier0, Q.card, a, {
                        [Q.withTier0Rim]: !s && p,
                        [Q.withCardHover]: !s && p
                    }),
                    children: [_ === X.PremiumSubscriptionSKUs.TIER_0 ? (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)(ea, {
                            text: q.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: Q.topRimPill,
                            colorOptions: 0
                        }), (0, c.jsx)("div", {
                            className: Q.rimGlowTier0
                        })]
                    }) : null, r && (0, c.jsx)(es, {
                        className: Q.newCircleIcon
                    }), n ? (0, c.jsx)("div", {
                        className: Q.wumpusImageContainer,
                        children: (0, c.jsx)(v.default, {
                            src: $,
                            mediaLayoutType: J.MediaLayoutType.RESPONSIVE,
                            width: 270,
                            height: 242,
                            zoomable: !1
                        })
                    }) : null, s || _ !== X.PremiumSubscriptionSKUs.TIER_0 ? null : (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)(ea, {
                            text: q.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: Q.topRimPill,
                            colorOptions: 0
                        }), (0, c.jsx)("div", {
                            className: Q.rimGlowTier0
                        })]
                    }), s || I !== X.PremiumTypes.TIER_0 ? null : (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)(ea, {
                            text: q.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                            className: Q.topRimPill,
                            colorOptions: 0
                        }), (0, c.jsx)("div", {
                            className: Q.rimGlowTier0
                        })]
                    }), (0, c.jsxs)("div", {
                        className: f({
                            [Q.body]: P
                        }),
                        children: [(0, c.jsxs)("div", {
                            className: f({
                                [Q.subscriptionPlanInfo]: P
                            }),
                            children: [(0, c.jsx)("div", {
                                className: Q.tier0LogoContainer,
                                children: (0, c.jsx)(b.default, {
                                    className: f(Q.tier0Title, Q.title)
                                })
                            }), (0, c.jsx)(ed, {
                                isGift: s,
                                premiumTier: X.PremiumTypes.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: _ === X.PremiumSubscriptionSKUs.TIER_0,
                                showYearlyPrice: l
                            })]
                        }), (0, c.jsx)("div", {
                            children: (0, c.jsx)(ec, {})
                        })]
                    }), i, s || _ !== X.PremiumSubscriptionSKUs.TIER_0 ? null : (0, c.jsx)(ei, {
                        tier: X.PremiumTypes.TIER_0
                    })]
                })
            }

            function ef(e) {
                let {
                    featureSet: t = 0,
                    isModal: n = !1,
                    isGift: r = !1
                } = e, i = (0, T.useStateFromStores)([M.default], () => M.default.locale), l = (0, T.useStateFromStores)([G.default], () => G.default.affinities), {
                    planSelectionEnabled: a
                } = k.default.useExperiment({
                    location: "planSelection"
                }, {
                    autoTrackExposure: !1
                }), s = n && !r && l.length > 0;
                s && k.default.trackExposure({
                    location: "planSelection"
                });
                if (1 === t) return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(eo, {
                        Icon: h.default,
                        text: q.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
                            numBoosts: X.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                            percentageOff: (0, B.formatPercent)(i, X.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                        })
                    }), (0, c.jsx)(eo, {
                        Icon: j.default,
                        text: q.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(X.PremiumTypes.TIER_2, {
                                useSpace: !1
                            })
                        })
                    }), (0, c.jsx)(eo, {
                        Icon: x.default,
                        text: q.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), (0, c.jsx)(eo, {
                        Icon: y.default,
                        text: q.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }), (0, c.jsx)(eo, {
                        Icon: N.default,
                        text: q.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    })]
                });
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(eo, {
                        Icon: j.default,
                        text: q.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(X.PremiumTypes.TIER_2, {
                                useSpace: !1
                            })
                        })
                    }), (0, c.jsx)(eo, {
                        Icon: x.default,
                        text: q.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), (0, c.jsx)(eo, {
                        Icon: U.default,
                        text: q.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
                    }), (0, c.jsx)(eo, {
                        Icon: y.default,
                        text: q.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }), (0, c.jsx)(eo, {
                        Icon: h.default,
                        text: q.default.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
                    }), (0, c.jsx)(eo, {
                        Icon: N.default,
                        text: q.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    }), a && s && (0, c.jsx)(Y.default, {})]
                })
            }

            function e_(e) {
                var t;
                let {
                    showWumpus: n,
                    ctaButton: r,
                    showYearlyPrice: i,
                    featureSet: l = 0,
                    className: a,
                    isGift: s = !1,
                    isModal: o = !1,
                    variant: u = 0
                } = e, d = (0, T.useStateFromStores)([L.default], () => L.default.getPremiumTypeSubscription()), m = (0, T.useStateFromStores)([g.default], () => g.default.getCurrentUser()), _ = (0, V.usePremiumTrialOffer)(), E = null == _ ? void 0 : null === (t = _.subscription_trial) || void 0 === t ? void 0 : t.sku_id, I = (null == d ? void 0 : d.trialId) != null ? null == m ? void 0 : m.premiumType : null, p = (0, H.useIsInPremiumOfferExperience)(), S = (0, K.usePremiumDiscountOffer)(), R = (0, H.useHasDiscountApplied)(), O = null != E || null != I ? 0 : null != S || R ? 1 : null, C = 1 === u, M = (0, W.useIsEligibleForBogoPromotion)(), U = (0, W.getBOGOPillCopy)();
                return (0, c.jsxs)("div", {
                    className: f(Q.tier2, Q.card, a, {
                        [Q.withTier2Rim]: !s && p,
                        [Q.withCardHover]: !s && p
                    }),
                    children: [!s && null != S && (0, K.discountOfferHasTier)(S, X.PremiumSubscriptionSKUs.TIER_2) && void 0 !== S.discount.amount ? (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)(ea, {
                            text: R ? q.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : q.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                                percent: S.discount.amount
                            }),
                            className: Q.topRimPill,
                            colorOptions: 2
                        }), (0, c.jsx)("div", {
                            className: Q.rimGlowTier2
                        })]
                    }) : null, s || E !== X.PremiumSubscriptionSKUs.TIER_2 ? null : (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)(ea, {
                            text: q.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: Q.topRimPill,
                            colorOptions: 2
                        }), (0, c.jsx)("div", {
                            className: Q.rimGlowTier2
                        })]
                    }), s || I !== X.PremiumTypes.TIER_2 ? null : (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)(ea, {
                            text: q.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                            className: Q.topRimPill,
                            colorOptions: 2
                        }), (0, c.jsx)("div", {
                            className: Q.rimGlowTier2
                        })]
                    }), !s && R && (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)(ea, {
                            text: q.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                            className: Q.topRimPill,
                            colorOptions: 2
                        }), (0, c.jsx)("div", {
                            className: Q.rimGlowTier2
                        })]
                    }), n ? (0, c.jsx)("div", {
                        className: Q.wumpusImageContainer,
                        children: (0, c.jsx)(v.default, {
                            src: ee,
                            mediaLayoutType: J.MediaLayoutType.RESPONSIVE,
                            width: 270,
                            height: 242,
                            zoomable: !1
                        })
                    }) : null, (0, c.jsxs)("div", {
                        className: f({
                            [Q.body]: C
                        }),
                        children: [(0, c.jsxs)("div", {
                            className: f({
                                [Q.subscriptionPlanInfo]: C
                            }),
                            children: [(0, c.jsx)(A.default, {
                                className: f(Q.tier2Title, Q.title)
                            }), !s && E !== X.PremiumSubscriptionSKUs.TIER_2 && M && (0, c.jsx)(P.Text, {
                                variant: "text-xs/bold",
                                className: Q.freeTrialPillInline,
                                children: U
                            }), (0, c.jsx)(ed, {
                                isGift: s,
                                premiumTier: X.PremiumTypes.TIER_2,
                                offerType: O,
                                offerTierMatchesCard: E === X.PremiumSubscriptionSKUs.TIER_2 || (0, K.discountOfferHasTier)(S, X.PremiumSubscriptionSKUs.TIER_2),
                                showYearlyPrice: i
                            })]
                        }), (0, c.jsx)("div", {
                            children: (0, c.jsx)(ef, {
                                featureSet: l,
                                isModal: o,
                                isGift: s
                            })
                        })]
                    }), r, s || E !== X.PremiumSubscriptionSKUs.TIER_2 && null == S ? null : (0, c.jsx)(ei, {
                        tier: X.PremiumTypes.TIER_2
                    })]
                })
            }

            function eE(e) {
                let {
                    showWumpus: t,
                    showBadge: n,
                    tier0CTAButton: r,
                    tier2CTAButton: i,
                    className: l,
                    variant: a = 0,
                    toggleState: s
                } = e, {
                    AnalyticsLocationProvider: o
                } = (0, O.default)(R.default.PREMIUM_MARKETING_TIER_CARD), u = 1 === a, d = s === X.PremiumTypes.TIER_0;
                return (0, c.jsx)(o, {
                    children: (0, c.jsxs)("div", {
                        className: f({
                            [Q.premiumCards]: !u,
                            [Q.premiumCardsStackedVariant]: u
                        }, l),
                        children: [(0, c.jsx)(em, {
                            className: f({
                                [Q.tierCardFocused]: u && d,
                                [Q.tierCardHidden]: u && !d
                            }),
                            showWumpus: t,
                            showBadge: n,
                            ctaButton: r,
                            variant: a
                        }), (0, c.jsx)(e_, {
                            className: f({
                                [Q.tierCardFocused]: u && !d,
                                [Q.tierCardHidden]: u && d
                            }),
                            showWumpus: t,
                            ctaButton: i,
                            variant: a
                        })]
                    })
                })
            }(r = s || (s = {}))[r.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", r[r.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", r[r.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", r[r.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", r[r.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", (i = o || (o = {}))[i.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", i[i.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (l = u || (u = {}))[l.DEFAULT = 0] = "DEFAULT", l[l.BOOSTING = 1] = "BOOSTING", (a = d || (d = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.STACKED = 1] = "STACKED"
        },
        992118: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("446674"),
                s = n("77078"),
                o = n("10514"),
                u = n("719923"),
                d = n("646718"),
                c = n("449001"),
                m = function(e) {
                    let {
                        subscriptionTier: t,
                        interval: n = d.SubscriptionIntervalTypes.MONTH,
                        className: i,
                        isGift: m = !1
                    } = e, f = (0, a.useStateFromStores)([o.default], () => o.default.isLoadedForPremiumSKUs());
                    if (!f) return (0, r.jsx)(s.Spinner, {
                        type: s.Spinner.Type.PULSING_ELLIPSIS,
                        className: c.priceSpinner
                    });
                    let _ = o.default.getForSkuAndInterval(t, n),
                        E = null != _ ? (0, u.getFormattedPriceForPlan)(_, void 0, !1, m) : null;
                    return (0, r.jsxs)(s.Heading, {
                        color: "always-white",
                        variant: "heading-md/medium",
                        className: l(c.pricePerInterval, i),
                        children: [(0, r.jsx)("span", {
                            className: c.price,
                            children: E
                        }), " / ", (0, u.getIntervalStringAsNoun)(n)]
                    })
                }
        },
        332291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("446674"),
                o = n("77078"),
                u = n("106435"),
                d = n("446488"),
                c = n("782340"),
                m = n("760068");

            function f() {
                let e = (0, s.useStateFromStores)([d.default], () => d.default.affinities.slice(0, 3)),
                    t = e[0],
                    {
                        avatarSrc: n,
                        eventHandlers: l
                    } = (0, u.default)({
                        user: t,
                        size: o.AvatarSizes.SIZE_24,
                        animateOnHover: !0
                    }),
                    f = e => null != e.globalName ? e.globalName : e.username,
                    _ = i.useMemo(() => e.length >= 2 ? c.default.Messages.AFFINITIES_MARKETING_HEADER_3.format({
                        username: f(e[0])
                    }) : 1 === e.length ? c.default.Messages.AFFINITIES_MARKETING_HEADER_1.format({
                        username: f(e[0])
                    }) : "", [e]);
                return 0 === e.length ? null : (0, r.jsxs)("div", {
                    className: m.container,
                    children: [(0, r.jsx)(o.Avatar, {
                        className: m.icon,
                        src: n,
                        "aria-label": t.username,
                        size: o.AvatarSizes.SIZE_24,
                        ...l
                    }), (0, r.jsx)(o.Text, {
                        className: a(m.text),
                        variant: "text-sm/normal",
                        color: "always-white",
                        children: _
                    })]
                })
            }
        },
        202664: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("446674"),
                o = n("77078"),
                u = n("109036"),
                d = n("697218"),
                c = n("993105"),
                m = n("719923"),
                f = n("552917"),
                _ = n("843647"),
                E = n("789946"),
                T = n("646718"),
                I = n("49111"),
                p = n("527382"),
                P = n("782340"),
                S = n("74230");

            function R(e) {
                let t, {
                        onClose: n,
                        fileSize: l,
                        ...R
                    } = e,
                    O = null != l && T.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE < l,
                    {
                        isLoading: C,
                        suggestedPremiumType: M
                    } = (0, _.default)({
                        autoTrackExposure: !O,
                        experiment: f.default,
                        location: T.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL
                    }),
                    g = !O && M === T.PremiumTypes.TIER_0,
                    L = (0, s.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
                    v = (0, r.jsx)(u.default, {
                        icons: p.DEFAULT_FILE_UPLOAD_ICONS
                    });
                t = g ? P.default.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
                    premiumPlan: (0, m.getPremiumTypeDisplayName)(T.PremiumTypes.TIER_0),
                    premiumMaxSize: P.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
                }) : P.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
                let U = i.useMemo(() => {
                        let e = m.default.getUserMaxFileSize(L),
                            t = (0, c.formatSize)(e / 1024, {
                                useKibibytes: !0
                            }),
                            n = P.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                                maxSize: t
                            });
                        switch (null == L ? void 0 : L.premiumType) {
                            case T.PremiumTypes.TIER_0:
                                n = P.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
                                    maxSize: t
                                });
                                break;
                            case T.PremiumTypes.TIER_1:
                                n = P.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
                                    maxSize: t
                                })
                        }
                        return n
                    }, [L]),
                    N = (0, r.jsxs)("div", {
                        className: S.body,
                        children: [(0, r.jsx)("span", {
                            children: U
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-md/medium",
                            children: t
                        })]
                    });
                return (0, r.jsx)(E.default, {
                    artElement: v,
                    artContainerClassName: a(S.artContainer),
                    enableArtBoxShadow: !1,
                    type: T.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
                    title: P.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    body: N,
                    context: P.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                        maxSize: P.default.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
                    }),
                    glowUp: t,
                    analyticsLocation: {
                        section: I.AnalyticsSections.FILE_UPLOAD_POPOUT
                    },
                    onClose: n,
                    subscriptionTier: g ? T.PremiumSubscriptionSKUs.TIER_0 : T.PremiumSubscriptionSKUs.TIER_2,
                    isLoading: C,
                    ...R
                })
            }
        },
        789946: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("77078"),
                o = n("812204"),
                u = n("685665"),
                d = n("617917"),
                c = n("599110"),
                m = n("719923"),
                f = n("688771"),
                _ = n("154889"),
                E = n("917247"),
                T = n("956597"),
                I = n("635956"),
                p = n("646718"),
                P = n("49111"),
                S = n("782340"),
                R = n("857513"),
                O = n("393828");

            function C(e) {
                var t, n, l;
                let {
                    title: C,
                    type: M,
                    guildBoostProps: g,
                    analyticsSource: L,
                    analyticsLocation: v,
                    body: U,
                    context: N,
                    glowUp: x,
                    modalClassName: h,
                    artContainerClassName: A,
                    bodyClassName: b,
                    transitionState: D,
                    onClose: y,
                    onSubscribeClick: j,
                    onSecondaryClick: F,
                    secondaryCTA: B,
                    subscribeButtonText: w,
                    showNewBadge: k = !1,
                    enableArtBoxShadow: G = !0,
                    subscriptionTier: H = p.PremiumSubscriptionSKUs.TIER_2,
                    isLoading: K = !1,
                    hideBackButton: V,
                    backButtonText: z,
                    ...W
                } = e, Z = null != g, Y = (0, E.usePremiumTrialOffer)(), X = (0, _.usePremiumDiscountOffer)(), J = ((null == Y ? void 0 : null === (t = Y.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === H || (0, _.discountOfferHasTier)(X, H)) && !Z, {
                    analyticsLocations: q
                } = (0, u.default)(o.default.PREMIUM_UPSELL_MODAL), {
                    enabled: Q,
                    variant: $
                } = f.default.useExperiment({
                    location: "PremiumUpsellModal"
                }, {
                    autoTrackExposure: !1
                }), ee = Q && M === p.PremiumUpsellTypes.STREAM_QUALITY_UPSELL, et = ee && f.GradientVariants.includes($);
                i.useEffect(() => {
                    !K && (Z ? c.default.track(P.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(M, " - Tier ").concat(g.boostedGuildTier),
                        guild_id: g.guild.id,
                        channel_id: g.channelId,
                        location: v,
                        location_stack: q
                    }) : c.default.track(P.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: M,
                        source: L,
                        location: v,
                        location_stack: q,
                        sku_id: H
                    }))
                }, [Z, H, K]);
                let en = G ? a(R.artContainer, R.artContainerBoxShadow, A) : a(R.artContainer, A),
                    er = null;
                return er = "artURL" in W ? (0, r.jsx)("img", {
                    className: R.art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement, (0, r.jsxs)(s.ModalRoot, {
                    className: a(R.root, h),
                    "aria-label": C,
                    transitionState: D,
                    children: [(0, r.jsxs)("div", {
                        className: en,
                        children: [er, k ? (0, r.jsx)("img", {
                            className: R.sparkleBadge,
                            alt: "",
                            src: O
                        }) : null]
                    }), ee ? (0, r.jsx)(s.ModalCloseButton, {
                        onClick: y,
                        className: R.closeButton
                    }) : null, (0, r.jsx)(s.ModalContent, {
                        className: R.content,
                        children: K ? (0, r.jsx)(s.Spinner, {}) : (0, r.jsx)(r.Fragment, {
                            children: J ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(T.default, {
                                    onClose: y,
                                    type: M,
                                    subscriptionTier: null !== (l = null == Y ? void 0 : null === (n = Y.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== l ? l : p.PremiumSubscriptionSKUs.TIER_2,
                                    headingText: C,
                                    context: N,
                                    analyticsLocationObject: v,
                                    discountOffer: X,
                                    trialOffer: Y,
                                    children: x
                                })
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(s.Heading, {
                                    className: a(R.header, {
                                        [R.enhancedHeader]: ee
                                    }),
                                    variant: "heading-xl/semibold",
                                    children: C
                                }), (0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    className: a(b),
                                    children: U
                                })]
                            })
                        })
                    }), (0, r.jsxs)(s.ModalFooter, {
                        className: a(R.footer, {
                            [R.enhancedFooter]: ee
                        }),
                        children: [(0, r.jsxs)("div", {
                            className: a(R.primaryActions, {
                                [R.enhancedPrimaryActions]: ee
                            }),
                            children: [null != B ? (0, r.jsx)(s.Button, {
                                className: a(R.secondaryAction, {
                                    [R.enhancedSecondaryAction]: et
                                }),
                                onClick: F,
                                size: s.Button.Sizes.SMALL,
                                color: et ? s.Button.Colors.CUSTOM : s.Button.Colors.PRIMARY,
                                look: s.Button.Looks.LINK,
                                children: B
                            }) : null, (() => {
                                let e;
                                if (Z) return (0, r.jsx)(d.default, {
                                    analyticsLocation: v,
                                    guild: g.guild,
                                    onClose: y
                                });
                                let t = ee ? S.default.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
                                if (J) {
                                    if (null != Y) {
                                        var n, i;
                                        t = (0, m.formatTrialCtaIntervalDuration)({
                                            intervalType: null == Y ? void 0 : null === (n = Y.subscription_trial) || void 0 === n ? void 0 : n.interval,
                                            intervalCount: null == Y ? void 0 : null === (i = Y.subscription_trial) || void 0 === i ? void 0 : i.interval_count
                                        }), e = null == Y ? void 0 : Y.trial_id
                                    } else null != X && (t = S.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                        percent: X.discount.amount
                                    }))
                                }
                                return (0, r.jsx)(I.default, {
                                    className: a({
                                        [R.getNitroCTA]: et
                                    }),
                                    premiumModalAnalyticsLocation: v,
                                    subscriptionTier: H,
                                    trialId: e,
                                    size: s.Button.Sizes.SMALL,
                                    color: et ? s.Button.Colors.CUSTOM : s.Button.Colors.GREEN,
                                    onClick: () => {
                                        null == j || j(), y()
                                    },
                                    buttonText: null != w ? w : t
                                })
                            })()]
                        }), !V && !ee && (0, r.jsx)(s.Button, {
                            onClick: y,
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            children: null != z ? z : S.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        737403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                maybeOpenProfilePreviewModal: function() {
                    return i
                }
            });
            var r = n("913144");

            function i(e) {
                let {
                    imageSrc: t,
                    file: n,
                    uploadType: i,
                    guildId: l,
                    isTryItOutFlow: a = !1
                } = e;
                r.default.dispatch({
                    type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                    imageSrc: t,
                    file: n,
                    uploadType: i,
                    guildId: l,
                    isTryItOutFlow: a
                })
            }
        },
        453252: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return r
                }
            });
            let r = 10485760
        },
        771325: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                handleOpenSelectImageModal: function() {
                    return f
                },
                showFileSizeErrorModal: function() {
                    return _
                },
                getPreviewAvatar: function() {
                    return E
                },
                getPreviewNickname: function() {
                    return T
                },
                getPreviewDisplayName: function() {
                    return I
                },
                isColorDark: function() {
                    return p
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("509043"),
                l = n("77078"),
                a = n("336522"),
                s = n("315102"),
                o = n("254490"),
                u = n("737403"),
                d = n("453252"),
                c = n("75015"),
                m = n("782340");

            function f(e, t, i, a) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: l
                    } = await n.el("420333").then(n.bind(n, "420333"));
                    return n => (0, r.jsx)(l, {
                        filters: a,
                        maxFileSizeBytes: d.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                        imageSpecifications: e === c.UploadTypes.BANNER && m.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
                        onComplete: (n, r) => (0, u.maybeOpenProfilePreviewModal)({
                            imageSrc: n,
                            file: r,
                            uploadType: e,
                            guildId: t,
                            isTryItOutFlow: i
                        }),
                        uploadType: e,
                        showUpsellHeader: !0,
                        ...n
                    })
                })
            }

            function _() {
                (0, a.openUploadError)({
                    title: m.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: m.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, o.sizeString)(d.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
                    })
                })
            }

            function E(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (null != e) return e;
                let {
                    size: i = 80,
                    canAnimate: l = !0
                } = r, a = null === e;
                return a && null == t ? s.default.getDefaultAvatarURL(n.id, n.discriminator) : a || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, i, l) : n.getAvatarURL(null == t ? void 0 : t.guildId, i, l)
            }

            function T(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function I(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function p(e) {
                let t = null != e ? (0, i.getDarkness)(e) : 1;
                return t > .25
            }
        },
        106435: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("884691"),
                i = n("77078"),
                l = n("606292"),
                a = n("688318"),
                s = n("19287");

            function o(e) {
                let {
                    user: t,
                    guildId: n,
                    size: o,
                    showPending: u = !1,
                    showTryItOut: d = !1,
                    animateOnHover: c = !1,
                    avatarDecorationOverride: m,
                    avatarOverride: f
                } = e, {
                    avatarSrc: _,
                    isAvatarAnimating: E,
                    eventHandlers: T
                } = (0, s.useAnimatedAvatarSrc)({
                    user: t,
                    guildId: n,
                    size: (0, i.getAvatarSize)(o),
                    showPending: u,
                    animateOnHover: c,
                    avatarOverride: f
                }), {
                    avatarPlaceholderSrc: I,
                    avatarDecorationSrc: p,
                    eventHandlers: P
                } = (0, a.default)({
                    user: t,
                    size: (0, l.getDecorationSizeForAvatarSize)(o),
                    showPending: u,
                    animateOnHover: c,
                    avatarDecorationOverride: m,
                    showTryItOut: d
                }), S = r.useCallback(() => {
                    T.onMouseEnter(), P.onMouseEnter()
                }, [T, P]), R = r.useCallback(() => {
                    T.onMouseLeave(), P.onMouseLeave()
                }, [T, P]);
                return {
                    avatarPlaceholderSrc: I,
                    avatarDecorationSrc: p,
                    avatarSrc: _,
                    isAnimating: E,
                    eventHandlers: {
                        onMouseEnter: S,
                        onMouseLeave: R
                    }
                }
            }
        },
        19287: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnimatedAvatarSrc: function() {
                    return d
                }
            }), n("222007");
            var r = n("884691"),
                i = n("446674"),
                l = n("206230"),
                a = n("771325"),
                s = n("26989"),
                o = n("471671"),
                u = n("91653");

            function d(e) {
                let {
                    user: t,
                    guildId: n,
                    size: d,
                    showPending: c = !1,
                    animateOnHover: m = !1,
                    avatarOverride: f
                } = e, [_, E] = r.useState(!1), T = (0, i.useStateFromStores)([l.default], () => l.default.useReducedMotion), I = (0, i.useStateFromStores)([o.default], () => o.default.isFocused()), p = I && (_ || !T && !m), {
                    pendingAvatar: P
                } = (0, u.default)({}), S = (0, i.useStateFromStores)([s.default], () => null != n && null != t ? s.default.getMember(n, t.id) : null), R = r.useMemo(() => null != t ? (0, a.getPreviewAvatar)(c ? null != f ? f : P : void 0, S, t, {
                    canAnimate: p,
                    size: d
                }) : void 0, [c, P, S, t, p, d, f]), O = r.useCallback(() => E(!0), []), C = r.useCallback(() => E(!1), []);
                return {
                    avatarSrc: R,
                    isAvatarAnimating: p,
                    eventHandlers: {
                        onMouseEnter: O,
                        onMouseLeave: C
                    }
                }
            }
        },
        491614: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("856567"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: n = 18,
                        color: i = "currentColor",
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M23 12C23 15.4588 21.244 18.5074 18.575 20.303C16.9546 21.4361 14.9961 22.0511 12.9077 21.9996C11.5234 21.9871 10.2063 21.6933 9.01083 21.1726L8.93992 21.1486C7.24876 20.5765 5.54476 20 3.77041 20H3.5C2.67157 20 2 19.3284 2 18.5C2 17.6716 2.67157 17 3.5 17C4.03814 17 4.40201 16.7197 4.57202 16.3248C4.83747 15.7082 4.79971 14.5414 3.86441 14.1934C3.41676 14.0268 2.72587 14 2.39244 14H1.5C0.671573 14 0 13.3284 0 12.5C0 11.6716 0.671573 11 1.5 11C2.16507 11 2.69887 10.6988 3.10938 10.1953C3.46698 9.75673 3.46834 9.09578 3.27805 8.62811C3.11182 8.21955 2.77674 7.83979 2.44976 7.55367C2.17543 7.31362 2 6.96873 2 6.50001C2 5.67158 2.67157 5.00001 3.5 5.00001C4.79441 5.00001 6.01593 4.51851 7.15231 3.88709C8.79678 2.6997 10.8167 2 13 2C18.5228 2 23 6.47715 23 12ZM15.2781 13.6032C15.7366 13.7241 16.1174 14.026 16.3144 14.4105C16.5162 14.8043 16.5223 15.2869 16.2154 15.7057C15.2355 17.0432 13.4838 17.7164 11.7684 17.264C10.0529 16.8115 8.87791 15.3665 8.70867 13.726C8.65566 13.2122 8.90615 12.7973 9.28089 12.5555C9.64684 12.3195 10.13 12.2455 10.5885 12.3664L15.2781 13.6032ZM9.20943 8.1998C8.65483 8.05353 8.08712 8.27952 7.78185 8.72337C7.56782 9.03455 7.13921 9.34399 6.64391 9.21336C6.18769 9.09304 5.83028 8.58879 6.08468 8.08437C6.72953 6.80575 8.21942 6.10768 9.6745 6.49143C11.1296 6.87519 12.0653 8.21295 11.9742 9.63762C11.9382 10.1997 11.3726 10.4605 10.9163 10.3401C10.4211 10.2095 10.2071 9.73061 10.1798 9.35578C10.1409 8.82116 9.76403 8.34606 9.20943 8.1998ZM17.6296 11.3621C17.9348 10.9182 18.5026 10.6922 19.0571 10.8385C19.6117 10.9848 19.9886 11.4599 20.0275 11.9945C20.0548 12.3693 20.2688 12.8482 20.7641 12.9788C21.2203 13.0992 21.786 12.8384 21.8219 12.2763C21.913 10.8517 20.9773 9.51389 19.5222 9.13014C18.0671 8.74638 16.5772 9.44445 15.9324 10.7231C15.678 11.2275 16.0354 11.7317 16.4916 11.8521C16.9869 11.9827 17.4155 11.6733 17.6296 11.3621Z",
                            fill: i
                        })
                    })
                }, l.SuperReactionIcon, void 0, {
                    size: 18
                })
        },
        716589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("361019"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 25,
                        height: n = 25,
                        color: i = "currentColor",
                        ...l
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsxs)("g", {
                            clipPath: "url(#clip0_1473_119386)",
                            children: [(0, r.jsx)("path", {
                                d: "M16.001 20.5H4.00098C2.89798 20.5 2.00098 19.602 2.00098 18.5V8.5H4.00098V18.5H16.001V20.5Z",
                                fill: i
                            }), (0, r.jsx)("path", {
                                d: "M21.001 3.5H8.00098C6.89798 3.5 6.00098 4.396 6.00098 5.5V14.5C6.00098 15.602 6.89798 16.5 8.00098 16.5H21.001C22.104 16.5 23.001 15.602 23.001 14.5V5.5C23.001 4.396 22.104 3.5 21.001 3.5ZM9.00098 13.5C9.00098 11.659 10.16 10.5 12.001 10.5C10.896 10.5 10.001 9.604 10.001 8.5C10.001 7.396 10.896 6.5 12.001 6.5C13.106 6.5 14.001 7.396 14.001 8.5C14.001 9.604 13.105 10.5 12.001 10.5C13.842 10.5 15.001 11.659 15.001 13.5H9.00098ZM20.001 13.5H16.001V11.5H20.001V13.5ZM20.001 9.5H16.001V7.5H20.001V9.5Z",
                                fill: i
                            })]
                        }), (0, r.jsx)("defs", {
                            children: (0, r.jsx)("clipPath", {
                                id: "clip0_1473_119386",
                                children: (0, r.jsx)("rect", {
                                    width: t,
                                    height: t,
                                    fill: i,
                                    transform: "translate(0 0.5)"
                                })
                            })
                        })]
                    })
                }, l.UserSquareIcon, void 0, {
                    size: 25
                })
        },
        619911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("125094"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("path", {
                            d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                            className: l,
                            fill: i
                        }), (0, r.jsx)("path", {
                            d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                            className: l,
                            fill: i
                        })]
                    })
                }, l.ScreenArrowIcon, void 0, {
                    size: 24
                })
        },
        698015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("596256"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.2137 2.00088L2.27111 13.3826C1.9299 13.8168 2.00535 14.4455 2.43963 14.7867C2.61581 14.9251 2.83338 15.0004 3.05744 15.0004H7V21.0004C7 21.5527 7.44772 22.0004 8 22.0004H16C16.5523 22.0004 17 21.5527 17 21.0004V15.0004H20.9425C21.4948 15.0004 21.9425 14.5527 21.9425 14.0004C21.9425 13.7763 21.8673 13.5588 21.7289 13.3826L12.7863 2.00088C12.4451 1.56661 11.8165 1.49116 11.3822 1.83237C11.3195 1.88162 11.2629 1.93819 11.2137 2.00088Z"
                        })
                    })
                }, l.UploadIcon, void 0, {
                    size: 24
                })
        },
        631153: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SuperReactionIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("82169");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M15.4 1.53A11 11 0 0 0 1.63 15.68c1.4-1.2 3.8-.81 4.54 1.18l.26.7.7.27c2 .73 2.4 3.14 1.19 4.54A11 11 0 0 0 22.47 8.6a2.93 2.93 0 0 1-5.21-.57l-.34-.93a.05.05 0 0 0-.03-.03l-.93-.34a2.93 2.93 0 0 1-.56-5.2ZM6.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-2.79.54c.27-.43.02-.95-.43-1.09l-4.06-1.23c-.45-.14-.94.15-.96.66a3.02 3.02 0 0 0 2.05 3.06c1.29.4 2.66-.21 3.4-1.4Z",
                        clipRule: "evenodd",
                        fill: "string" == typeof a ? a : a.css,
                        className: s
                    }), (0, r.jsx)("path", {
                        d: "M19.42 3.88c.24.22.48.46.7.7a4 4 0 0 0-.12.14c-.2-.27-.45-.51-.72-.72l.14-.12Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: s
                    }), (0, r.jsx)("path", {
                        d: "M19.09.63a.97.97 0 0 1 1.82 0l.34.93a2 2 0 0 0 1.19 1.19l.93.34a.97.97 0 0 1 0 1.82l-.93.34a2 2 0 0 0-1.19 1.19l-.34.93a.97.97 0 0 1-1.82 0l-.34-.93a2 2 0 0 0-1.19-1.19l-.93-.34a.97.97 0 0 1 0-1.82l.93-.34a2 2 0 0 0 1.19-1.19l.34-.93ZM2.7 17.55a.85.85 0 0 1 1.6 0l.26.71a2 2 0 0 0 1.18 1.18l.7.26a.85.85 0 0 1 0 1.6l-.7.26a2 2 0 0 0-1.18 1.18l-.26.7a.85.85 0 0 1-1.6 0l-.26-.7a2 2 0 0 0-1.18-1.18l-.7-.26a.85.85 0 0 1 0-1.6l.7-.26a2 2 0 0 0 1.18-1.18l.26-.7Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: s
                    })]
                })
            }
        },
        731935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserSquareIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("82169");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm10 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 9.83A5.83 5.83 0 0 1 11.83 12h.34A5.83 5.83 0 0 1 18 17.83c0 .65-.52 1.17-1.17 1.17h-.08a.52.52 0 0 1-.5-.4c-.22-.87-.54-1.69-.83-2.3-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.3.61-.61 1.43-.83 2.3a.52.52 0 0 1-.5.4h-.08C6.52 19 6 18.48 6 17.83Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=47387.acb9f3db1fae8e93795c.js.map