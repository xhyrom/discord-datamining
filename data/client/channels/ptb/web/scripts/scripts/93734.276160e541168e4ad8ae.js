(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["93734"], {
        668973: function(e, t, n) {
            "use strict";
            e.exports = n.p + "18517b33da6ed36b855b.svg"
        },
        124036: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2304725db3c96705e901.svg"
        },
        721569: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b21a7b48a6e973958489.svg"
        },
        644286: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5ff8ffaa3831478d2a28.svg"
        },
        597346: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4ba6811c2bcb626963c6.svg"
        },
        380499: function(e, t, n) {
            "use strict";
            e.exports = n.p + "20c942338703af7dccd1.svg"
        },
        50617: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d18655651bd838408129.svg"
        },
        972094: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5f5e1a58ecf11d0d8d15.svg"
        },
        92729: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f5710b460ce933c9abe8.svg"
        },
        335e3: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f5c7b6adf73fe335fa05.svg"
        },
        302872: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4fd94b2e62b94b0454d3.svg"
        },
        425914: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5b74fc90eac76055a5ad.svg"
        },
        272477: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d994d2093d7d1924be78.svg"
        },
        164059: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e9b67e80d0033605e8f4.svg"
        },
        653240: function(e, t, n) {
            "use strict";
            e.exports = n.p + "baa5b6db50bb89d55668.svg"
        },
        140802: function(e, t, n) {
            "use strict";
            e.exports = n.p + "abb37025036befe38e64.svg"
        },
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
        131810: function(e, t, n) {
            "use strict";
            e.exports = n.p + "289b6053fc6a89d75452.svg"
        },
        481927: function(e, t, n) {
            "use strict";
            e.exports = n.p + "75ad54f57ebd84babdf2.svg"
        },
        527382: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FileUploadIconClassNames: function() {
                    return l
                },
                DEFAULT_FILE_UPLOAD_ICONS: function() {
                    return s
                },
                EMOJI_FILE_UPLOAD_ICONS: function() {
                    return o
                }
            });
            var r, i, a = n("1065");
            (r = i || (i = {}))[r.IMAGE = 0] = "IMAGE", r[r.DOCUMENT = 1] = "DOCUMENT", r[r.CODE = 2] = "CODE";
            let l = {
                    0: a.image,
                    1: a.document,
                    2: a.code
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
                a = n.n(i),
                l = n("527382"),
                s = n("1065"),
                o = function(e) {
                    let {
                        icons: t,
                        className: n
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: a(s.icons, n),
                        children: [(0, r.jsx)("div", {
                            className: s.wrapOne,
                            children: (0, r.jsx)("div", {
                                className: a(s.icon, s.one, l.FileUploadIconClassNames[t[0]])
                            })
                        }), (0, r.jsx)("div", {
                            className: s.wrapThree,
                            children: (0, r.jsx)("div", {
                                className: a(s.icon, s.three, l.FileUploadIconClassNames[t[2]])
                            })
                        }), (0, r.jsx)("div", {
                            className: s.wrapTwo,
                            children: (0, r.jsx)("div", {
                                className: a(s.icon, s.two, l.FileUploadIconClassNames[t[1]])
                            })
                        })]
                    })
                }
        },
        336522: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
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
                a = n.n(i),
                l = n("551042"),
                s = n("516256"),
                o = n("202664"),
                u = n("476765"),
                c = n("109036"),
                d = n("527382"),
                f = n("1065");

            function m(e) {
                let {
                    title: t,
                    help: n,
                    showPremiumUpsell: i,
                    transitionState: l,
                    icons: m,
                    fileSize: _,
                    onClose: E
                } = e, I = (0, u.useUID)(), T = null != m ? m : d.DEFAULT_FILE_UPLOAD_ICONS;
                return i ? (0, r.jsx)(o.default, {
                    transitionState: l,
                    onClose: E,
                    fileSize: _
                }) : (0, r.jsx)(s.ModalRoot, {
                    size: s.ModalSize.DYNAMIC,
                    "aria-labelledby": I,
                    transitionState: l,
                    children: (0, r.jsx)("div", {
                        className: a(f.uploadDropModal, f.error),
                        children: (0, r.jsxs)("div", {
                            className: f.inner,
                            children: [(0, r.jsx)(c.default, {
                                icons: T
                            }), (0, r.jsx)("div", {
                                id: I,
                                className: f.title,
                                children: t
                            }), (0, r.jsx)("div", {
                                className: f.instructions,
                                children: n
                            })]
                        })
                    })
                })
            }
            let _ = "UPLOAD_ERROR_MODAL_KEY";

            function E(e) {
                (0, l.openModal)(t => (0, r.jsx)(m, {
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
                    return l
                }
            });
            var r = n("775560"),
                i = n("888400"),
                a = n("149638");

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = (0, i.diffAsUnits)(Date.now(), e),
                    o = (0, r.useForceUpdate)();
                return (0, a.default)(() => {
                    let e = 0 === s.days && 0 === s.hours && 0 === s.minutes && 0 === s.seconds;
                    !e && !l && (o(), null == n || n())
                }, l ? null : t), s
            }
        },
        149638: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("884691"),
                i = n("627445"),
                a = n.n(i);

            function l(e, t) {
                let n = (0, r.useRef)(e);
                (0, r.useEffect)(() => {
                    n.current = e
                }, [e]), (0, r.useEffect)(() => {
                    if (null === t) return;
                    let e = setInterval(function() {
                        a(null != n.current, "Missing callback"), n.current()
                    }, t);
                    return () => clearInterval(e)
                }, [t])
            }
        },
        862013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function() {
                    return a
                },
                MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
                    return l
                },
                MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
                    return s
                },
                IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
                    return o
                },
                insertAccessibilityLabelElements: function() {
                    return u
                }
            });
            var r = n("476765"),
                i = n("782340");
            let a = (0, r.uid)(),
                l = (0, r.uid)(),
                s = (0, r.uid)(),
                o = (0, r.uid)();

            function u() {
                [{
                    id: a,
                    text: ","
                }, {
                    id: l,
                    text: ","
                }, {
                    id: s,
                    text: i.default.Messages.REACTIONS
                }, {
                    id: o,
                    text: i.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
                }].forEach(e => {
                    let {
                        id: t,
                        text: n
                    } = e, r = document.getElementById(t);
                    null == r && ((r = document.createElement("div")).setAttribute("id", t), r.innerText = n, r.style.display = "none", document.body.appendChild(r))
                })
            }
        },
        32531: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateBackgroundGradientPreset: function() {
                    return i
                },
                resetBackgroundGradientPreset: function() {
                    return a
                },
                openEditor: function() {
                    return l
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
                a = () => {
                    r.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                        presetId: null
                    })
                },
                l = () => {
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
            let a = {
                fetched: !1,
                affinities: []
            };
            class l extends r.default.Store {
                get hasFetched() {
                    return a.fetched
                }
                get affinities() {
                    return a.affinities
                }
            }
            var s = new l(i.default, {
                BILLING_NITRO_AFFINITY_FETCHED: function(e) {
                    let {} = e;
                    a.fetched = !0
                },
                BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(e) {
                    let {
                        res: t
                    } = e;
                    a.affinities = t
                }
            })
        },
        626301: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                navigateToPremiumMarketingPage: function() {
                    return a
                }
            });
            var r = n("79112"),
                i = n("49111");
            let a = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                r.default.open(i.UserSettingsSections.PREMIUM, null, {
                    openWithoutBackstack: e
                })
            }
        },
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return E
                },
                useOneTimePurchaseInvoicePreview: function() {
                    return S
                },
                useSubscriptionInvoicePreview: function() {
                    return P
                },
                useGetSubscriptionInvoice: function() {
                    return R
                },
                getItemUnitPriceWithDiscount: function() {
                    return C
                }
            }), n("222007");
            var r = n("884691"),
                i = n("627445"),
                a = n.n(i),
                l = n("446674"),
                s = n("872717"),
                o = n("448993"),
                u = n("195358"),
                c = n("521012"),
                d = n("719923"),
                f = n("271560"),
                m = n("49111");
            async function _(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: r,
                    code: i,
                    applyEntitlements: a = !1,
                    currency: l,
                    renewal: c,
                    metadata: f
                } = e;
                t = (0, d.coerceExistingItemsToNewItemInterval)(t);
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
                    apply_entitlements: a,
                    currency: l,
                    renewal: c,
                    metadata: f
                };
                try {
                    let e = await s.HTTP.post({
                        url: m.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: _,
                        oldFormErrors: !0
                    });
                    return u.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new o.BillingError(e)
                }
            }
            async function E(e) {
                let {
                    subscriptionId: t,
                    items: n,
                    paymentSourceId: r,
                    renewal: i,
                    currency: a,
                    applyEntitlements: l = !1,
                    analyticsLocations: c,
                    analyticsLocation: f,
                    userDiscountOfferId: _
                } = e;
                null != n && (n = (0, d.coerceExistingItemsToNewItemInterval)(n));
                let E = {
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
                    apply_entitlements: l,
                    currency: a,
                    user_discount_offer_id: _
                };
                try {
                    let e = await s.HTTP.patch({
                        url: m.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                        query: {
                            location: f,
                            location_stack: c
                        },
                        body: E,
                        oldFormErrors: !0
                    });
                    return u.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new o.BillingError(e)
                }
            }
            async function I(e) {
                let {
                    paymentSourceId: t,
                    skuId: n,
                    subscriptionPlanId: r
                } = e;
                a(n, "SKU ID is missing for one time purchase gift invoice preview");
                try {
                    let e = await (0, f.httpGetWithCountryCodeQuery)({
                        url: m.Endpoints.STORE_SKU_PURCHASE(n),
                        query: {
                            gift: !0,
                            payment_source_id: t,
                            sku_subscription_plan_id: r
                        },
                        oldFormErrors: !0
                    });
                    return u.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new o.BillingError(e)
                }
            }
            async function T(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let r = await s.HTTP.get({
                    url: m.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return u.default.createInvoiceFromServer(r.body)
            }

            function p(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [i, a] = (0, r.useState)(null), [s, o] = (0, r.useState)(null), u = (0, l.useStateFromStores)([c.default], () => c.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let e = !1;
                    async function r() {
                        try {
                            o(null), a(null);
                            let n = await t();
                            !e && a(n)
                        } catch (t) {
                            !e && o(t)
                        }
                    }
                    return !n && r(), () => {
                        e = !0
                    }
                }, [n, t, u]), [i, s]
            }

            function S(e) {
                let t = (0, r.useCallback)(() => I(e), [JSON.stringify(e)]);
                return p(e, t)
            }

            function P(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...n
                    } = e;
                    e = n
                }
                let t = (0, r.useCallback)(() => "subscriptionId" in e ? E(e) : "items" in e ? _(e) : null, [JSON.stringify(e)]);
                return p(e, t)
            }

            function R(e) {
                let t = (0, r.useCallback)(() => T(e), [JSON.stringify(e)]);
                return p(e, t)
            }

            function C(e) {
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
                    return E
                },
                useHasDiscountApplied: function() {
                    return I
                },
                useActiveDiscountInfo: function() {
                    return T
                },
                useFetchChurnUserDiscountOffer: function() {
                    return S
                },
                useShouldFetchChurnOffer: function() {
                    return P
                }
            }), n("222007");
            var r = n("884691"),
                i = n("866227"),
                a = n.n(i),
                l = n("446674"),
                s = n("872717"),
                o = n("521012"),
                u = n("324878"),
                c = n("77860"),
                d = n("154889"),
                f = n("917247"),
                m = n("646718"),
                _ = n("49111");

            function E() {
                let e = (0, f.usePremiumTrialOffer)(),
                    t = (0, u.useHasActiveTrial)(),
                    n = (0, d.usePremiumDiscountOffer)(),
                    r = I();
                return null != e || t || null != n || r
            }
            let I = () => {
                    var e;
                    let t = (0, l.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
                        n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
                    return null != n && a(Date.now()) <= a(n)
                },
                T = () => {
                    var e;
                    let t = (0, l.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
                        n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_id;
                    switch (n) {
                        case m.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID:
                        case m.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID:
                            return {
                                duration: 1, percentage: 30
                            };
                        case m.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID:
                        case m.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID:
                        case m.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID:
                            return {
                                duration: 3, percentage: 30
                            };
                        case m.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID:
                            return {
                                duration: 1, percentage: 40
                            };
                        default:
                            return
                    }
                },
                p = async () => {
                    let e = null;
                    try {
                        var t;
                        let n = await s.HTTP.post({
                            url: _.Endpoints.CHURN_USER_OFFER
                        });
                        e = null !== (t = n.body.offer) && void 0 !== t ? t : null
                    } catch (e) {}
                    return e
                }, S = e => {
                    let [t, n] = r.useState(!1), [i, a] = r.useState(!1), [l, s] = r.useState(null);
                    if (e) return {
                        churnUserDiscountOffer: l,
                        isFetchingChurnDiscountOffer: i
                    };
                    let o = () => {
                        n(!0), a(!1)
                    };
                    return !i && !t && (a(!0), p().then(e => {
                        s(e), o()
                    }).catch(e => {
                        o()
                    })), {
                        churnUserDiscountOffer: l,
                        isFetchingChurnDiscountOffer: i
                    }
                }, P = () => {
                    let {
                        enabled: e
                    } = c.default.useExperiment({
                        location: "useShouldFetchChurnOffer"
                    }, {
                        autoTrackExposure: !1
                    }), t = (0, l.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()), n = I(), r = null !== t && t.hasPremiumNitroMonthly, i = null != t && null != t.trialId;
                    return e && r && !i && !n
                }
        },
        324878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useHasActiveTrial: function() {
                    return l
                },
                useCurrentPremiumTrialTier: function() {
                    return s
                }
            });
            var r = n("446674"),
                i = n("697218"),
                a = n("521012");
            n("646718");
            let l = () => {
                let e = (0, r.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription());
                return (null == e ? void 0 : e.trialId) != null
            };

            function s() {
                let e = (0, r.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()),
                    t = (0, r.useStateFromStores)([i.default], () => i.default.getCurrentUser());
                return (null == e ? void 0 : e.trialId) != null ? null == t ? void 0 : t.premiumType : null
            }
        },
        942377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getHigherExpectedValue: function() {
                    return a
                },
                getHighestLikelihood: function() {
                    return l
                }
            });
            var r = n("716849"),
                i = n("646718");

            function a(e, t, n) {
                return null == e ? i.PremiumTypes.TIER_2 : e[i.PremiumSubscriptionSKUs.TIER_0] * t > e[i.PremiumSubscriptionSKUs.TIER_2] * n ? i.PremiumTypes.TIER_0 : i.PremiumTypes.TIER_2
            }

            function l(e) {
                if (null == e) return i.PremiumTypes.TIER_0;
                let t = e[r.NON_SUBSCRIBER_SENTINEL],
                    n = e[i.PremiumSubscriptionSKUs.TIER_0],
                    a = e[i.PremiumSubscriptionSKUs.TIER_2];
                return a > n && a > t ? i.PremiumTypes.TIER_2 : i.PremiumTypes.TIER_0
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
                a = n("913144"),
                l = n("10641"),
                s = n("872173"),
                o = n("49111"),
                u = {
                    async fetchUserTrialOffer() {
                        try {
                            let {
                                body: e
                            } = await r.HTTP.get({
                                url: o.Endpoints.USER_TRIAL_OFFER,
                                oldFormErrors: !0
                            });
                            null == e && (0, l.isDismissibleContentDismissed)(i.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, s.removeDismissedContent)(i.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), a.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS",
                                userTrialOffer: e
                            })
                        } catch (e) {
                            a.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS"
                            })
                        }
                    },
                    async acknowledgeUserTrialOffer(e) {
                        if (null == e.expires_at) try {
                            let {
                                body: t
                            } = await r.HTTP.post({
                                url: o.Endpoints.USER_TRIAL_OFFER_ACKNOWLEDGED(e.id)
                            });
                            a.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS",
                                userTrialOffer: t
                            })
                        } catch (e) {
                            404 === e.status && a.default.dispatch({
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
                    return a
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
            var a = i
        },
        935566: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BogoPromotionExperiment: function() {
                    return i
                },
                isBogoPromotionExperimentEnabled: function() {
                    return a
                },
                default: function() {
                    return l
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
                a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return i.getCurrentConfig({
                        location: "489551_2"
                    }, {
                        autoTrackExposure: e
                    })
                };
            var l = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return i.useExperiment({
                    location: "489551_1"
                }, {
                    autoTrackExposure: e
                })
            }
        },
        77860: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2024-02_churn_user_discount_offer_experiment",
                label: "Churn User Discount Offer",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 0,
                    label: "users receive no discount offer when churning",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 1,
                    label: "users receive a 1 month discout offer when churning",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "users receive a 3 month discount offer when churning",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var a = i
        },
        688771: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EnhancedHDStreamingRoadblockVariants: function() {
                    return i
                },
                GradientVariants: function() {
                    return l
                },
                default: function() {
                    return o
                }
            });
            var r, i, a = n("862205");
            (r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.VARIANT_1A = 1] = "VARIANT_1A", r[r.VARIANT_1B = 2] = "VARIANT_1B", r[r.VARIANT_2A = 3] = "VARIANT_2A", r[r.VARIANT_2B = 4] = "VARIANT_2B";
            let l = [1, 3],
                s = (0, a.createExperiment)({
                    kind: "user",
                    id: "2024-01_enhanced_hd_streaming_roadblock",
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
        921941: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2024-03_social_proof_hd_streaming",
                label: "Social proof in HD streaming upsell",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show social proof in HD streaming upsell",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var a = i
        },
        843647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("446674"),
                i = n("697218"),
                a = n("10514"),
                l = n("719923"),
                s = n("716849"),
                o = n("676572"),
                u = n("942377"),
                c = n("917247"),
                d = n("646718");

            function f(e) {
                let {
                    autoTrackExposure: t,
                    experiment: n,
                    location: f
                } = e, m = (0, r.useStateFromStores)([i.default], () => i.default.getCurrentUser()), _ = (0, c.usePremiumTrialOffer)(), E = null != _, I = null != m && (0, l.isPremium)(m);
                (0, s.useMaybeFetchPremiumLikelihood)(n);
                let {
                    enabled: T,
                    useExpectedValue: p,
                    useLikelihood: S
                } = n.useExperiment({
                    location: null != f ? f : "1"
                }, {
                    autoTrackExposure: !I && !E && t
                }), {
                    premiumLikelihood: P,
                    fetched: R
                } = (0, r.useStateFromStoresObject)([o.default], () => {
                    let e = o.default.getState();
                    return {
                        fetched: e.fetched,
                        premiumLikelihood: e.premiumLikelihood
                    }
                }), C = (0, r.useStateFromStores)([a.default], () => a.default.isLoadedForSKUs([d.PremiumSubscriptionSKUs.TIER_0, d.PremiumSubscriptionSKUs.TIER_2])), O = !I && T && !E && (p ? !R || !C : !R), g = d.PremiumTypes.TIER_2;
                if (E) {
                    let e = _.subscription_trial;
                    (null == e ? void 0 : e.sku_id) === d.PremiumSubscriptionSKUs.TIER_0 ? g = d.PremiumTypes.TIER_0 : (null == e ? void 0 : e.sku_id) === d.PremiumSubscriptionSKUs.TIER_2 && (g = d.PremiumTypes.TIER_2)
                } else if (!I && !O && T) {
                    if (p) {
                        let {
                            amount: e
                        } = (0, l.getPrice)(d.SubscriptionPlans.PREMIUM_MONTH_TIER_0), {
                            amount: t
                        } = (0, l.getPrice)(d.SubscriptionPlans.PREMIUM_MONTH_TIER_2);
                        g = (0, u.getHigherExpectedValue)(P, e, t)
                    } else S && (g = (0, u.getHighestLikelihood)(P))
                }
                return {
                    isLoading: O,
                    suggestedPremiumType: g
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
                    return f
                },
                outboundPromotionFromServer: function() {
                    return m
                },
                bogoPromotionFromServer: function() {
                    return _
                },
                fetchClaimedOutboundPromotionCodes: function() {
                    return I
                },
                claimOutboundPromotion: function() {
                    return T
                },
                getOutboundPromotionRedemptionUrl: function() {
                    return p
                },
                shouldShowOutboundPromotionNotice: function() {
                    return S
                },
                shouldShowOutboundPromotionOnPlatform: function() {
                    return P
                },
                isOutboundPromotionRedeemableByTrialUsers: function() {
                    return R
                },
                isTrialUserEligibleToSeeOutboundPromotion: function() {
                    return C
                }
            }), n("702976"), n("781738");
            var r = n("872717"),
                i = n("819855"),
                a = n("915639"),
                l = n("521012"),
                s = n("568734"),
                o = n("773336"),
                u = n("807345"),
                c = n("646718"),
                d = n("49111");

            function f(e, t) {
                let n = (0, i.isThemeDark)(t) ? "logo-dark" : "logo-light",
                    r = window.GLOBAL_ENV.CDN_HOST,
                    a = "?size=256";
                return null != r ? "".concat(location.protocol, "//").concat(r, "/promotions/").concat(e, "/").concat(n).concat(a) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/").concat(e, "/").concat(n).concat(a)
            }

            function m(e) {
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
                    promotion: m(e.promotion)
                }
            }
            async function I() {
                let e = await r.HTTP.get({
                        url: d.Endpoints.CLAIMED_OUTBOUND_PROMOTION_CODES,
                        query: {
                            locale: a.default.locale
                        },
                        oldFormErrors: !0
                    }),
                    t = e.body;
                return t.map(E)
            }
            async function T(e) {
                let t = await r.HTTP.post({
                        url: d.Endpoints.CLAIM_OUTBOUND_PROMOTION_CODE(e)
                    }),
                    n = t.body;
                return E(n)
            }

            function p(e, t) {
                return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e)) : t.outboundRedemptionPageLink
            }

            function S() {
                let e = u.default.lastSeenOutboundPromotionStartDate,
                    t = u.default.outboundPromotions,
                    n = u.default.consumedInboundPromotionId,
                    r = t.filter(e => {
                        let {
                            id: t,
                            flags: r
                        } = e;
                        return t !== n && !(0, s.hasFlag)(r, c.PromotionFlags.SUPPRESS_NOTIFICATION)
                    }),
                    i = null == e ? r : r.filter(t => {
                        let {
                            startDate: n
                        } = t;
                        return new Date(n) > new Date(e)
                    }),
                    a = u.default.lastDismissedOutboundPromotionStartDate,
                    o = l.default.getPremiumTypeSubscription(),
                    d = (null == o ? void 0 : o.trialId) != null,
                    f = d ? i.filter(e => R(e)) : i;
                return 0 !== f.length && (null == a || f.some(e => {
                    let {
                        startDate: t
                    } = e;
                    return new Date(t) > new Date(a)
                }))
            }

            function P(e) {
                return !(0, o.isIOS)() || !(0, s.hasFlag)(e.flags, c.PromotionFlags.IS_BLOCKED_IOS)
            }

            function R(e) {
                return (0, s.hasFlag)(e.flags, c.PromotionFlags.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS)
            }

            function C(e, t) {
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
                    return I
                }
            });
            var r = n("872717"),
                i = n("750028"),
                a = n("913144"),
                l = n("316718"),
                s = n("915639"),
                o = n("872173"),
                u = n("772465"),
                c = n("44678"),
                d = n("807345"),
                f = n("646718"),
                m = n("49111");
            async function _() {
                if (!d.default.isFetchingActiveOutboundPromotions) try {
                    a.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH"
                    });
                    let t = u.PromotionPreviewExperiment.getCurrentConfig({
                            location: "5731cc_1"
                        }, {
                            autoTrackExposure: !1
                        }).previewEnabled ? m.Endpoints.OUTBOUND_PROMOTIONS_PREVIEW : m.Endpoints.OUTBOUND_PROMOTIONS,
                        n = await r.HTTP.get({
                            url: t,
                            query: {
                                locale: s.default.locale
                            },
                            oldFormErrors: !0
                        }),
                        i = n.body,
                        o = d.default.consumedInboundPromotionId;
                    if (!d.default.hasFetchedConsumedInboundPromotionId) {
                        var e;
                        let t = await (0, l.fetchUserEntitlementsForApplication)(f.PREMIUM_SUBSCRIPTION_APPLICATION, !1),
                            n = t.find(e => null != e.promotion_id && !0 === e.consumed);
                        o = null !== (e = null == n ? void 0 : n.promotion_id) && void 0 !== e ? e : null
                    }
                    a.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS",
                        activeOutboundPromotions: i.map(e => (0, c.outboundPromotionFromServer)(e)),
                        consumedInboundPromotionId: o
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL"
                    })
                }
            }
            async function E() {
                if (!d.default.isFetchingActiveBogoPromotion) try {
                    a.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH"
                    });
                    let e = await r.HTTP.get({
                            url: m.Endpoints.BOGO_PROMOTIONS,
                            query: {
                                locale: s.default.locale
                            }
                        }),
                        t = e.body;
                    a.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
                        activePromotion: (0, c.bogoPromotionFromServer)(t)
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL"
                    })
                }
            }
            var I = {
                fetchActiveOutboundPromotions: _,
                dismissOutboundPromotionNotice: function() {
                    a.default.dispatch({
                        type: "OUTBOUND_PROMOTION_NOTICE_DISMISS"
                    });
                    let e = d.default.lastDismissedOutboundPromotionStartDate;
                    null != e && o.PreloadedUserSettingsActionCreators.updateAsync("userContent", t => {
                        t.lastDismissedOutboundPromotionStartDate = i.StringValue.create({
                            value: e
                        })
                    }, o.UserSettingsDelay.INFREQUENT_USER_ACTION)
                },
                markOutboundPromotionsSeen() {
                    a.default.dispatch({
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
                    return I
                }
            }), n("222007");
            var r = n("884691"),
                i = n("446674"),
                a = n("913144"),
                l = n("697218"),
                s = n("719923"),
                o = n("324878"),
                u = n("44678"),
                c = n("538620"),
                d = n("807345"),
                f = n("646718");

            function m() {
                let e = (0, i.useStateFromStoresArray)([d.default], () => d.default.outboundPromotions),
                    t = (0, i.useStateFromStores)([d.default], () => d.default.consumedInboundPromotionId),
                    n = r.useMemo(() => e.filter(e => {
                        let {
                            id: n
                        } = e;
                        return n !== t
                    }), [e, t]);
                return n
            }

            function _() {
                let e = (0, i.useStateFromStores)([d.default], () => d.default.lastFetchedActivePromotions),
                    t = m(),
                    n = (0, i.useStateFromStores)([l.default], () => l.default.getCurrentUser()),
                    _ = (0, o.useHasActiveTrial)(),
                    [E, I] = r.useState(!1),
                    [T, p] = r.useState([]);
                r.useEffect(() => {
                    null != e && a.default.wait(() => c.default.markOutboundPromotionsSeen())
                }, [e]);
                let S = r.useCallback(e => {
                        p(t => t.some(t => {
                            let {
                                promotion: n
                            } = t;
                            return n.id === e.promotion.id
                        }) ? t : [...t, e])
                    }, []),
                    P = (0, s.isPremiumExactly)(n, f.PremiumTypes.TIER_2);
                r.useEffect(() => {
                    a.default.wait(() => {
                        P && null == e && c.default.fetchActiveOutboundPromotions()
                    })
                }, [e, P]), r.useEffect(() => {
                    a.default.wait(() => {
                        (0, u.fetchClaimedOutboundPromotionCodes)().then(e => {
                            p(e), I(!0)
                        }).catch(() => {
                            p([]), I(!0)
                        })
                    })
                }, []);
                let R = {};
                for (let {
                        code: e,
                        promotion: t
                    }
                    of T) R[t.id] = e;
                let C = new Set(t.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    })),
                    O = T.filter(e => {
                        let {
                            promotion: t
                        } = e;
                        return !C.has(t.id)
                    }),
                    g = E && (!P || null != e);
                return {
                    promotionsLoaded: g,
                    activeOutboundPromotions: t.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e) && (!_ || (0, u.isTrialUserEligibleToSeeOutboundPromotion)(e, R))),
                    claimedEndedOutboundPromotions: O.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e.promotion)),
                    claimedOutboundPromotionCodeMap: R,
                    addClaimedOutboundPromotionCode: S
                }
            }

            function E() {
                let e = (0, i.useStateFromStores)([d.default], () => d.default.lastSeenOutboundPromotionStartDate),
                    t = (0, o.useHasActiveTrial)(),
                    n = m(),
                    a = r.useMemo(() => {
                        if (null == e) return t ? n.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : n;
                        let r = n.filter(t => {
                            let {
                                startDate: n
                            } = t;
                            return new Date(n) > new Date(e)
                        });
                        return t ? r.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : r
                    }, [n, e, t]);
                return a.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e))
            }

            function I() {
                let e = (0, i.useStateFromStores)([d.default], () => d.default.bogoPromotion);
                return {
                    promotion: e
                }
            }
        },
        807345: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var r = n("446674"),
                i = n("913144"),
                a = n("374363");

            function l() {
                return {
                    hasFetchedConsumedInboundPromotionId: !1,
                    consumedInboundPromotionId: null,
                    lastSeenOutboundPromotionStartDate: null,
                    bogoPromotion: null
                }
            }
            let s = l(),
                o = !1,
                u = null,
                c = !1,
                d = null,
                f = [],
                m = null;

            function _() {
                let e = null;
                for (let t of f)(null == e || new Date(t.startDate) > new Date(e)) && (e = t.startDate);
                return e
            }

            function E() {
                var e, t, n;
                m = null !== (n = null === (t = a.default.settings.userContent) || void 0 === t ? void 0 : null === (e = t.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : null
            }
            class I extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (s = e), this.waitFor(a.default), this.syncWith([a.default], E)
                }
                get outboundPromotions() {
                    return f
                }
                get lastSeenOutboundPromotionStartDate() {
                    return s.lastSeenOutboundPromotionStartDate
                }
                get lastDismissedOutboundPromotionStartDate() {
                    return m
                }
                get lastFetchedActivePromotions() {
                    return d
                }
                get isFetchingActiveOutboundPromotions() {
                    return c
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
            I.displayName = "PromotionsStore", I.persistKey = "PromotionsPersistedStore";
            var T = new I(i.default, {
                ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: function(e) {
                    let {
                        activeOutboundPromotions: t,
                        consumedInboundPromotionId: n
                    } = e;
                    f = t, d = Date.now(), c = !1, !s.hasFetchedConsumedInboundPromotionId && (s.hasFetchedConsumedInboundPromotionId = !0, s.consumedInboundPromotionId = n)
                },
                ACTIVE_OUTBOUND_PROMOTIONS_FETCH: function() {
                    c = !0
                },
                ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: function() {
                    f = [], c = !1
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
                    if (0 === f.length) return !1;
                    let e = _();
                    null != e && (m = e)
                },
                OUTBOUND_PROMOTIONS_SEEN: function() {
                    if (0 === f.length) return !1;
                    let e = _();
                    null != e && (m = e, s.lastSeenOutboundPromotionStartDate = e)
                },
                LOGOUT: function() {
                    s = l(), c = !1, d = null, o = !1, u = null, f = []
                }
            })
        },
        478968: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useDiscountedPrice: function() {
                    return d
                },
                useChurnDiscountedPrice: function() {
                    return f
                }
            }), n("222007");
            var r = n("798609"),
                i = n("854381"),
                a = n("986681"),
                l = n("719923"),
                s = n("153160"),
                o = n("809071"),
                u = n("154889"),
                c = n("646718");
            let d = e => {
                    var t, n, d, f;
                    let {
                        paymentSourceId: m
                    } = (0, a.default)({
                        isGift: !1,
                        activeSubscription: null
                    }), _ = (0, l.castPremiumSubscriptionAsSkuId)(c.SubscriptionPlanInfo[e].skuId), {
                        priceOptions: E
                    } = (0, i.default)({
                        activeSubscription: null,
                        skuIDs: [_],
                        paymentSourceId: m,
                        isGift: !1
                    }), I = (0, u.usePremiumDiscountOffer)(), [T, p] = (0, o.useSubscriptionInvoicePreview)({
                        items: [{
                            planId: e,
                            quantity: 1
                        }],
                        renewal: !0,
                        preventFetch: !(null != I),
                        paymentSourceId: m,
                        currency: E.currency
                    }), S = null == T ? void 0 : null === (f = T.invoiceItems) || void 0 === f ? void 0 : null === (d = f.find(t => t.subscriptionPlanId === e)) || void 0 === d ? void 0 : null === (n = d.discounts) || void 0 === n ? void 0 : null === (t = n.find(e => e.type === r.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount, P = (0, l.getPrice)(e, !1, !1, E);
                    return (0, s.formatPrice)(P.amount - (null != S ? S : 0), P.currency)
                },
                f = (e, t, n) => {
                    var u, d, f, m;
                    let {
                        paymentSourceId: _
                    } = (0, a.default)({
                        isGift: !1,
                        activeSubscription: null
                    }), E = (0, l.castPremiumSubscriptionAsSkuId)(c.SubscriptionPlanInfo[t].skuId), {
                        priceOptions: I
                    } = (0, i.default)({
                        activeSubscription: null,
                        skuIDs: [E],
                        paymentSourceId: _,
                        isGift: !1
                    }), [T, p] = (0, o.useSubscriptionInvoicePreview)({
                        subscriptionId: e.id,
                        items: [{
                            planId: t,
                            quantity: 1
                        }],
                        renewal: !0,
                        preventFetch: !(null != n),
                        paymentSourceId: _,
                        currency: I.currency,
                        userDiscountOfferId: null == n ? void 0 : n.id
                    }), S = null == T ? void 0 : null === (m = T.invoiceItems) || void 0 === m ? void 0 : null === (f = m.find(e => e.subscriptionPlanId === t)) || void 0 === f ? void 0 : null === (d = f.discounts) || void 0 === d ? void 0 : null === (u = d.find(e => e.type === r.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === u ? void 0 : u.amount, P = (0, l.getPrice)(t, !1, !1, I);
                    return (0, s.formatPrice)(P.amount - (null != S ? S : 0), P.currency)
                }
        },
        641078: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsEligibleForBogoPromotion: function() {
                    return v
                },
                maybeFetchActiveBogoPromotion: function() {
                    return x
                },
                isEligibleForBOGOAnnouncementModal: function() {
                    return A
                },
                getBOGOPillCopy: function() {
                    return U
                }
            });
            var r = n("866227"),
                i = n.n(r),
                a = n("65597"),
                l = n("151426"),
                s = n("850068"),
                o = n("174727"),
                u = n("619935"),
                c = n("10641"),
                d = n("915639"),
                f = n("697218"),
                m = n("521012"),
                _ = n("340412"),
                E = n("719923"),
                I = n("982457"),
                T = n("433947"),
                p = n("705337"),
                S = n("935566"),
                P = n("917247"),
                R = n("538620"),
                C = n("694540"),
                O = n("807345"),
                g = n("646718"),
                M = n("49111"),
                h = n("782340");

            function L(e) {
                var t, n, r;
                let {
                    experimentEnabled: a,
                    premiumSubscription: l,
                    mostRecentSubscription: s
                } = e, o = !1, u = !1;
                if (null != s && s.status === M.SubscriptionStatusTypes.ENDED) {
                    let e = (null === (t = s.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? i(s.metadata.ended_at) : null,
                        r = null === (n = (0, E.getPremiumPlanItem)(s)) || void 0 === n ? void 0 : n.planId,
                        a = null != r && E.default.getPremiumType(r) === g.PremiumTypes.TIER_2;
                    u = null != e && a && e.add(10, "days").isAfter(i())
                }
                if (null != l) {
                    let e = null === (r = (0, E.getPremiumPlanItem)(l)) || void 0 === r ? void 0 : r.planId,
                        t = null != e && E.default.getPremiumType(e) === g.PremiumTypes.TIER_2,
                        n = f.default.getCurrentUser(),
                        i = (null == l ? void 0 : l.trialId) != null && E.default.isPremiumExactly(n, g.PremiumTypes.TIER_0);
                    o = t || i
                }
                return !a || o || u
            }

            function v() {
                var e;
                let {
                    paymentsBlocked: t
                } = u.default.useExperiment({
                    location: "153d31_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    promotion: n
                } = (0, C.useBogoPromotion)(), {
                    enabled: r
                } = (0, S.default)(), {
                    mostRecentSubscription: i,
                    premiumSubscription: l
                } = (0, a.useStateFromStoresObject)([m.default], () => ({
                    mostRecentSubscription: m.default.getMostRecentPremiumTypeSubscription(),
                    premiumSubscription: m.default.getPremiumTypeSubscription()
                })), s = (0, P.usePremiumTrialOffer)(), c = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf();
                (0, o.default)(c, 1e3, void 0, c + 2e3 < Date.now());
                let d = !L({
                        experimentEnabled: r,
                        premiumSubscription: l,
                        mostRecentSubscription: i
                    }),
                    f = d && null == s && null != n && !t,
                    _ = Date.now(),
                    {
                        enabled: E
                    } = p.default.useExperiment({
                        location: "153d31_2"
                    }, {
                        autoTrackExposure: f,
                        disable: !f
                    });
                return !(_ > c) && E
            }
            async function N() {
                var e;
                let t = f.default.getCurrentUser(),
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
                    } = (0, S.isBogoPromotionExperimentEnabled)(),
                    {
                        enabled: a
                    } = p.default.getCurrentConfig({
                        location: "153d31_4"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: l
                    } = T.BOGOAnnouncementModalExperiment.getCurrentConfig({
                        location: "153d31_5"
                    }, {
                        autoTrackExposure: !1
                    });
                if (n || r || !i || !l && !a) return !1;
                if (_.default.shouldFetchOffer() && await I.default.fetchUserTrialOffer(), _.default.hasFetchedOffer() && _.default.hasAnyUnexpiredOffer()) return !1;
                !m.default.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(g.PremiumSubscriptionSKUs.TIER_2)) && await (0, s.fetchMostRecentSubscription)(), !m.default.hasFetchedSubscriptions() && await (0, s.fetchSubscriptions)();
                let o = m.default.getMostRecentPremiumTypeSubscription(),
                    c = m.default.getPremiumTypeSubscription();
                return !L({
                    experimentEnabled: i,
                    premiumSubscription: c,
                    mostRecentSubscription: o
                })
            }
            async function x() {
                let e = await N();
                if (!e) return;
                let t = O.default.bogoPromotion;
                if (null != t) {
                    let e = new Date(t.endDate).valueOf();
                    if (e >= Date.now()) return
                }
                await (0, R.fetchActiveBogoPromotion)()
            }
            async function A() {
                let e = O.default.bogoPromotion,
                    t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
                    n = (0, c.isDismissibleContentDismissed)(l.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL),
                    r = await N(),
                    {
                        enabled: i
                    } = S.BogoPromotionExperiment.getCurrentConfig({
                        location: "153d31_6"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: a
                    } = T.BOGOAnnouncementModalExperiment.getCurrentConfig({
                        location: "153d31_7"
                    }, {
                        autoTrackExposure: t && i && !n && r
                    });
                return t && a && i && !n && r
            }

            function U() {
                let e = d.default.locale;
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
                        return h.default.Messages.NITRO_BADGE_TEXT;
                    default:
                        return h.default.Messages.BOGO_PILL
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
                a = n("414456"),
                l = n.n(a),
                s = n("627445"),
                o = n.n(s),
                u = n("866227"),
                c = n.n(u),
                d = n("446674"),
                f = n("551042"),
                m = n("819855"),
                _ = n("77078"),
                E = n("841098"),
                I = n("206230"),
                T = n("32531"),
                p = n("393414"),
                S = n("945330"),
                P = n("41250"),
                R = n("379863"),
                C = n("216422"),
                O = n("719923"),
                g = n("286235"),
                M = n("626301"),
                h = n("917247"),
                L = n("635956"),
                v = n("400307"),
                N = n("646718"),
                x = n("49111"),
                A = n("782340"),
                U = n("821535"),
                b = n("481927");

            function y(e) {
                if (null == e) return null;
                let t = c(e),
                    n = t.diff(c(), "h");
                if (n > 24) {
                    let e = t.diff(c(), "d");
                    return A.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({
                        numDays: e
                    })
                }
                if (n > 1) return A.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({
                    numHours: n
                });
                let r = t.diff(c(), "minutes");
                return A.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({
                    numMinutes: r
                })
            }

            function D(e) {
                var t, n, i;
                let {
                    className: a,
                    children: s,
                    withBottomMargin: o,
                    discountOffer: u,
                    trialOffer: c
                } = e, d = null !== (t = null == c ? void 0 : c.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at, f = null == c ? void 0 : c.subscription_trial, m = null !== (i = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == f ? void 0 : f.sku_id) && void 0 !== i ? i : N.PremiumSubscriptionSKUs.TIER_2;
                return (0, r.jsxs)("div", {
                    className: l(a, U.gradientUpsellWrapper, {
                        [U.gradientUpsellWrapperTier0]: m === N.PremiumSubscriptionSKUs.TIER_0,
                        [U.gradientUpsellWrapperTier2]: m === N.PremiumSubscriptionSKUs.TIER_2,
                        [U.gradientUpsellWrapperWithBottomMargin]: o
                    }),
                    children: [(0, r.jsxs)("div", {
                        className: U.logo,
                        children: [(0, r.jsx)(C.default, {
                            className: U.logoIcon
                        }), m === N.PremiumSubscriptionSKUs.TIER_0 && (0, r.jsx)(R.default, {
                            className: U.logoWordmark
                        }), m === N.PremiumSubscriptionSKUs.TIER_2 && (0, r.jsx)(P.default, {
                            className: U.logoWordmark
                        })]
                    }), (0, r.jsx)(_.Text, {
                        variant: "text-md/medium",
                        className: U.copy,
                        color: "none",
                        children: s
                    }), (0, r.jsx)(v.PremiumPillWithSparkles, {
                        text: null != u ? A.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                            percent: u.discount.amount
                        }) : A.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        colorOptions: m === N.PremiumSubscriptionSKUs.TIER_0 ? v.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : v.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
                    }), (0, r.jsx)(_.Text, {
                        variant: "eyebrow",
                        className: U.countdownText,
                        children: y(d)
                    })]
                })
            }

            function j(e) {
                var t, n;
                let {
                    className: a,
                    onClose: l,
                    subscriptionTier: s,
                    analyticsLocationObject: o,
                    trialOffer: u,
                    discountOffer: c
                } = e, [d, f] = i.useState(!1), m = null != c ? A.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                    percent: c.discount.amount
                }) : (0, O.formatTrialCtaIntervalDuration)({
                    intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
                    intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                });
                return (0, r.jsx)(L.default, {
                    className: a,
                    subscriptionTier: s,
                    trialId: null == u ? void 0 : u.trial_id,
                    submitting: d,
                    premiumModalAnalyticsLocation: o,
                    size: _.Button.Sizes.MEDIUM,
                    color: _.Button.Colors.GREEN,
                    onClick: () => {
                        f(!0)
                    },
                    onSubscribeModalClose: e => {
                        f(!1), e && (null == l || l())
                    },
                    buttonText: m
                })
            }

            function F(e) {
                var t, n;
                let i = null === (t = (0, h.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial,
                    a = null !== (n = null == i ? void 0 : i.sku_id) && void 0 !== n ? n : N.PremiumSubscriptionSKUs.TIER_2;
                return (0, r.jsx)(_.Text, {
                    variant: "text-xs/bold",
                    className: l(U.trialBadge, e.className, {
                        [U.trialBadgeGradientTier0]: a === N.PremiumSubscriptionSKUs.TIER_0,
                        [U.trialBadgeGradientTier2]: a === N.PremiumSubscriptionSKUs.TIER_2
                    }),
                    color: "none",
                    children: (0, O.formatTrialOfferIntervalDuration)({
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
                    trialOffer: a,
                    discountOffer: l
                } = e;
                return (0, r.jsxs)("div", {
                    className: U.footer,
                    children: [(0, r.jsx)(_.Button, {
                        onClick: n,
                        size: _.Button.Sizes.SMALL,
                        look: _.ButtonLooks.BLANK,
                        className: U.cancelButton,
                        children: A.default.Messages.CLOSE
                    }), (0, r.jsx)(j, {
                        className: U.subscribeButton,
                        subscriptionTier: t,
                        analyticsLocationObject: i,
                        onClose: n,
                        discountOffer: l,
                        trialOffer: a
                    })]
                })
            }

            function k(e) {
                let {
                    onClose: t,
                    analyticsLocationObject: n
                } = e, i = (0, h.usePremiumTrialOffer)();
                return (0, r.jsxs)("div", {
                    className: U.tryOutUpsellContainer,
                    children: [(0, r.jsx)(v.PremiumPillWithSparkles, {
                        className: U.topRimPill,
                        text: A.default.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
                        colorOptions: v.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                    }), (0, r.jsx)(_.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-normal",
                        children: A.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({
                            onClick: M.navigateToPremiumMarketingPage
                        })
                    }), (0, r.jsx)(j, {
                        trialOffer: i,
                        className: U.subscribeButtonWide,
                        subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocationObject: n,
                        onClose: t
                    }), (0, r.jsx)(_.Text, {
                        variant: "eyebrow",
                        className: U.countdownTextInSetting,
                        children: y(null == i ? void 0 : i.expires_at)
                    })]
                })
            }

            function w(e) {
                let {
                    headingText: t,
                    context: n,
                    children: i,
                    trialOffer: a,
                    discountOffer: l
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(_.Heading, {
                        className: U.header,
                        variant: "heading-xl/semibold",
                        children: t
                    }), null != n && (0, r.jsx)(_.Text, {
                        className: U.context,
                        variant: "text-md/normal",
                        children: n
                    }), (0, r.jsx)(D, {
                        trialOffer: a,
                        discountOffer: l,
                        children: i
                    })]
                })
            }

            function G(e) {
                let {
                    headingText: t,
                    context: i,
                    children: a,
                    onClose: s,
                    type: u,
                    subscriptionTier: c,
                    analyticsLocationObject: P,
                    trialOffer: R,
                    discountOffer: C
                } = e, M = (0, d.useStateFromStores)([I.default], () => I.default.useReducedMotion), h = (0, E.default)();
                switch (u) {
                    case N.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL:
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(_.Clickable, {
                                className: U.upsellClose,
                                onClick: s,
                                children: (0, r.jsx)(S.default, {})
                            }), (0, r.jsxs)("div", {
                                className: U.contentContainer,
                                children: [(0, r.jsx)("img", {
                                    className: U.upsellImage,
                                    src: b,
                                    alt: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                                }), (0, r.jsx)(_.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: A.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                                }), (0, r.jsx)(D, {
                                    trialOffer: R,
                                    discountOffer: C,
                                    children: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                        planName: (0, O.getDisplayNameFromSku)(c),
                                        onClick: () => (0, p.transitionTo)(x.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, r.jsx)(B, {
                                subscriptionTier: c,
                                onClose: s,
                                analyticsLocationObject: {
                                    section: x.AnalyticsSections.EXPRESSION_PICKER,
                                    object: x.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: R,
                                discountOffer: C
                            })]
                        });
                    case N.PremiumUpsellTypes.STICKER_PICKER_UPSELL:
                        return o(null != a, "You must specify children for this upsell type"), (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)("div", {
                                className: U.contentContainer,
                                children: [(0, r.jsx)("img", {
                                    className: U.upsellImage,
                                    src: b,
                                    alt: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                                }), (0, r.jsx)(_.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                                }), (0, r.jsx)(D, {
                                    trialOffer: R,
                                    discountOffer: C,
                                    children: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                        planName: (0, O.getDisplayNameFromSku)(c),
                                        onClick: () => (0, p.transitionTo)(x.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, r.jsx)(B, {
                                subscriptionTier: c,
                                onClose: s,
                                analyticsLocationObject: {
                                    section: x.AnalyticsSections.EXPRESSION_PICKER,
                                    object: x.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: R,
                                discountOffer: C
                            })]
                        });
                    case N.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
                        o(null != a, "You must specify children for this upsell type");
                        let L = (0, m.isThemeLight)(h) ? n("602291") : n("609708");
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)("div", {
                                className: U.contentContainer,
                                children: [(0, r.jsx)("img", {
                                    alt: "",
                                    className: U.upsellImage,
                                    src: L
                                }), (0, r.jsx)(_.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: A.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                                }), (0, r.jsx)(D, {
                                    trialOffer: R,
                                    discountOffer: C,
                                    children: A.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
                                        planName: (0, O.getDisplayNameFromSku)(c),
                                        onClick: () => (0, p.transitionTo)(x.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, r.jsx)(B, {
                                subscriptionTier: c,
                                onClose: s,
                                analyticsLocationObject: {
                                    section: x.AnalyticsSections.EMOJI_PICKER_POPOUT,
                                    object: x.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: R,
                                discountOffer: C
                            })]
                        });
                    case N.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                    case N.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                    case N.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                    case N.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                        let v;
                        switch (u) {
                            case N.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                                v = A.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
                                    planName: (0, O.getDisplayNameFromSku)(c),
                                    premiumMaxSize: c === N.PremiumSubscriptionSKUs.TIER_0 ? A.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : A.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
                                    onClick: () => {
                                        (0, p.transitionTo)(x.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                });
                                break;
                            case N.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                                v = A.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                                    planName: (0, O.getDisplayNameFromSku)(c),
                                    onClick: () => {
                                        (0, p.transitionTo)(x.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                });
                                break;
                            case N.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                                v = A.default.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
                                    onClick: () => {
                                        (0, p.transitionTo)(x.Routes.APPLICATION_STORE), null == s || s(), (0, f.closeAllModals)()
                                    }
                                });
                                break;
                            case N.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                                v = A.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                                    premiumMaxMessageLength: x.MAX_MESSAGE_LENGTH_PREMIUM,
                                    onClick: () => {
                                        (0, p.transitionTo)(x.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                })
                        }
                        return o(null != v, "There must be some upsell context"), (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsxs)("div", {
                                className: U.contentContainer,
                                children: [(0, r.jsx)(_.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: t
                                }), (0, r.jsx)(_.Text, {
                                    variant: "text-md/normal",
                                    children: i
                                }), (0, r.jsx)(D, {
                                    trialOffer: R,
                                    discountOffer: C,
                                    children: v
                                })]
                            })
                        });
                    case N.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL:
                        return (0, r.jsxs)("div", {
                            className: U.contentContainer,
                            children: [(0, r.jsx)(_.Heading, {
                                variant: "heading-xl/bold",
                                color: "header-primary",
                                children: t
                            }), (0, r.jsx)(_.Text, {
                                variant: "text-md/normal",
                                children: i
                            }), (0, r.jsx)(D, {
                                trialOffer: R,
                                discountOffer: C,
                                children: A.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                                    planName: (0, O.getDisplayNameFromSku)(c),
                                    onClick: () => (0, p.transitionTo)(x.Routes.APPLICATION_STORE)
                                })
                            }), (0, r.jsx)(j, {
                                className: U.upsellButton,
                                subscriptionTier: c,
                                analyticsLocationObject: P,
                                onClose: s,
                                trialOffer: R,
                                discountOffer: C
                            })]
                        });
                    case N.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
                        return o(null != a, "You must specify children for this upsell type"), (0, r.jsx)(D, {
                            trialOffer: R,
                            discountOffer: C,
                            children: A.default.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
                                onClick: () => {
                                    (0, p.transitionTo)(x.Routes.APPLICATION_STORE), (0, T.closeEditor)()
                                }
                            })
                        });
                    case N.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
                        return (0, r.jsxs)("div", {
                            className: l(U.messageLengthUpsellContainer, {
                                [U.messageLengthUpsellAppearAnimation]: !M
                            }),
                            children: [(0, r.jsx)(_.Text, {
                                variant: "text-lg/bold",
                                color: "status-danger",
                                children: i
                            }), (0, r.jsx)(_.Heading, {
                                variant: "heading-lg/extrabold",
                                color: "header-primary",
                                className: U.messageLengthUpsellHeader,
                                children: A.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
                            }), (0, r.jsx)("div", {
                                className: U.divider
                            }), (0, r.jsx)(D, {
                                trialOffer: R,
                                discountOffer: C,
                                className: U.messageLengthBrandedContainer,
                                subscriptionTier: c,
                                children: A.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                                    premiumMaxMessageLength: x.MAX_MESSAGE_LENGTH_PREMIUM,
                                    onClick: () => {
                                        (0, p.transitionTo)(x.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                })
                            }), (0, r.jsx)(j, {
                                subscriptionTier: c,
                                analyticsLocationObject: P,
                                onClose: s,
                                trialOffer: R,
                                discountOffer: C
                            })]
                        });
                    case N.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL:
                    case N.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
                        return (0, r.jsx)(k, {});
                    case N.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL:
                    case N.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL:
                    case N.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL:
                    case N.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL:
                    case N.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
                    case N.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
                    case N.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED:
                        return (0, r.jsx)(w, {
                            trialOffer: R,
                            discountOffer: C,
                            headingText: t,
                            context: i,
                            children: a
                        });
                    default:
                        return g.default.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(u)), (0, r.jsx)(w, {
                            headingText: t,
                            context: i,
                            children: a,
                            trialOffer: R,
                            discountOffer: C
                        })
                }
            }
        },
        635956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                l = n("446674"),
                s = n("77078"),
                o = n("79112"),
                u = n("685665"),
                c = n("788506"),
                d = n("649844"),
                f = n("393414"),
                m = n("797647"),
                _ = n("697218"),
                E = n("521012"),
                I = n("471671"),
                T = n("181114"),
                p = n("978679"),
                S = n("216422"),
                P = n("719923"),
                R = n("646718"),
                C = n("49111"),
                O = n("782340"),
                g = n("917746"),
                M = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: i,
                        onClick: M,
                        size: h,
                        className: L,
                        trialId: v,
                        isTrialCTA: N,
                        buttonText: x,
                        buttonTextClassName: A,
                        iconClassName: U,
                        postSuccessGuild: b,
                        onSubscribeModalClose: y,
                        premiumModalAnalyticsLocation: D,
                        showIcon: j = !0,
                        disableShine: F,
                        applicationId: B,
                        giftMessage: k,
                        overrideDisabledButtonText: w,
                        shinyButtonClassName: G,
                        ...H
                    } = e, K = (0, l.useStateFromStores)([_.default], () => _.default.getCurrentUser()), V = (0, l.useStateFromStores)([I.default], () => I.default.isFocused()), W = (0, l.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), {
                        analyticsLocations: z
                    } = (0, u.default)(), Z = e => {
                        if (e.preventDefault(), null == K) {
                            (0, f.transitionTo)(C.Routes.LOGIN);
                            return
                        }
                        if (null == M || M(e), (null == W ? void 0 : W.status) === C.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, c.trackPremiumSettingsPaneOpened)(), o.default.open(C.UserSettingsSections.PREMIUM), null == y || y(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: i,
                                isGift: a,
                                subscriptionTier: l,
                                trialId: o,
                                postSuccessGuild: u,
                                onSubscribeModalClose: c,
                                analyticsLocations: f,
                                premiumModalAnalyticsLocation: m,
                                applicationId: _,
                                giftMessage: E
                            } = e;
                            if (!t) {
                                (0, s.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("984599").then(n.bind(n, "984599"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...i
                                        } = t;
                                        return (0, r.jsx)(e, {
                                            ...i,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            if (!i) {
                                (0, s.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("899917").then(n.bind(n, "899917"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...i
                                        } = t;
                                        return (0, r.jsx)(e, {
                                            ...i,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            let I = C.AnalyticsObjectTypes.BUY;
                            null != o ? I = C.AnalyticsObjectTypes.TRIAL : a && (I = C.AnalyticsObjectTypes.GIFT), (0, d.default)({
                                isGift: a,
                                initialPlanId: null,
                                subscriptionTier: l,
                                analyticsLocations: f,
                                analyticsObject: {
                                    object: C.AnalyticsObjects.BUTTON_CTA,
                                    objectType: I,
                                    ...m
                                },
                                trialId: o,
                                postSuccessGuild: u,
                                onClose: c,
                                applicationId: _,
                                giftMessage: E
                            })
                        }({
                            isClaimed: K.isClaimed(),
                            isVerified: K.verified,
                            isGift: t,
                            subscriptionTier: i,
                            trialId: v,
                            postSuccessGuild: b,
                            onSubscribeModalClose: y,
                            analyticsLocations: z,
                            premiumModalAnalyticsLocation: D,
                            applicationId: B,
                            giftMessage: k
                        })
                    };
                    if (N) return (0, r.jsxs)(s.Button, {
                        size: h,
                        className: L,
                        innerClassName: g.premiumSubscribeButton,
                        look: s.Button.Looks.INVERTED,
                        onClick: Z,
                        ...H,
                        children: [j && (0, r.jsx)(S.default, {
                            className: g.premiumIcon
                        }), (0, r.jsx)("span", {
                            className: a(g.buttonText, A),
                            children: null != x ? x : O.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, r.jsxs)(s.Button, {
                        size: h,
                        className: L,
                        innerClassName: g.giftButton,
                        color: s.Button.Colors.PRIMARY,
                        onClick: Z,
                        ...H,
                        children: [(0, r.jsx)(p.default, {
                            className: g.giftIcon
                        }), (0, r.jsx)("span", {
                            className: a(g.buttonText, A),
                            children: null != x ? x : O.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let Y = O.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        X = null != W ? (0, P.getPremiumPlanItem)(W) : null,
                        J = null != X ? P.default.getPremiumType(X.planId) : null == K ? void 0 : K.premiumType,
                        q = i === R.PremiumSubscriptionSKUs.TIER_2 && null != J && [R.PremiumTypes.TIER_0, R.PremiumTypes.TIER_1].includes(J);
                    q && (Y = O.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let Q = null != W && W.status !== C.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, m.isNoneSubscription)(W.planId) && !q,
                        $ = Q ? null != w ? w : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, r = null, i = null;
                            if (null != t && t !== R.PremiumSubscriptionSKUs.LEGACY && t !== R.PremiumSubscriptionSKUs.TIER_0 && t !== R.PremiumSubscriptionSKUs.TIER_1 && t !== R.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: r,
                                disabledButtonTooltipText: i
                            };
                            let a = null != t ? R.PremiumSubscriptionSKUToPremiumType[(0, P.castPremiumSubscriptionAsSkuId)(t)] : null,
                                l = null != a ? R.PremiumTypeOrder[a] : null,
                                s = null != n ? R.PremiumTypeOrder[n] : null;
                            return null != s && null != l && l < s ? (r = O.default.Messages.APPLICATION_STORE_GET_PREMIUM, i = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != a && null != n && a === n ? (r = O.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, i = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == a && null != n && n === R.PremiumTypes.TIER_2 && (i = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: r,
                                disabledButtonTooltipText: i
                            }
                        }({
                            ctaSubscriptionSkuId: i,
                            currentPremiumType: J
                        }) : null;

                    function ee(e) {
                        var t, n;
                        return (0, r.jsxs)(T.default, {
                            disabled: Q,
                            onClick: Z,
                            innerClassName: g.premiumSubscribeButton,
                            color: i === R.PremiumSubscriptionSKUs.TIER_1 ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
                            size: h,
                            className: G,
                            wrapperClassName: L,
                            pauseAnimation: !V || F,
                            ...H,
                            ...e,
                            children: [j && (0, r.jsx)(S.default, {
                                className: a(g.premiumIcon, U)
                            }), (0, r.jsx)("span", {
                                className: a(g.buttonText, A),
                                children: null !== (n = null !== (t = null == $ ? void 0 : $.disabledButtonText) && void 0 !== t ? t : x) && void 0 !== n ? n : Y
                            })]
                        })
                    }
                    return (null == $ ? void 0 : $.disabledButtonTooltipText) != null ? (0, r.jsx)(s.Tooltip, {
                        text: $.disabledButtonTooltipText,
                        children: ee
                    }) : ee()
                }
        },
        496521: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("819855"),
                l = n("841098"),
                s = n("484321"),
                o = n("646718"),
                u = n("359235"),
                c = e => {
                    let {
                        isStacked: t,
                        ctaButton: n,
                        isGift: c,
                        trialOfferTier: d,
                        discountOffer: f
                    } = e, m = !c && (d === o.PremiumSubscriptionSKUs.TIER_2 || null != f), _ = (0, l.default)(), E = (0, a.isThemeLight)(_) && t, I = E ? void 0 : i.default.colors.WHITE.css;
                    return t ? c || d !== o.PremiumSubscriptionSKUs.TIER_2 && null == f ? (0, r.jsx)(r.Fragment, {
                        children: n
                    }) : (0, r.jsxs)("div", {
                        className: u.sparklesAndButton,
                        children: [(0, r.jsx)(s.SparkleGroupLeft, {
                            color: I,
                            wrapperStyle: u.leftSparkle
                        }), (0, r.jsx)("div", {
                            className: u.ctaFullWidth,
                            children: n
                        }), (0, r.jsx)(s.SparkleGroupRight, {
                            color: I,
                            wrapperStyle: u.rightSparkle
                        })]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [n, m && (0, r.jsx)(s.ButtonSparkleGroup, {
                            tier: o.PremiumTypes.TIER_2
                        })]
                    })
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
                    return ed
                },
                Tier2FeatureSet: function() {
                    return u
                },
                Tier2FeatureItems: function() {
                    return ef
                },
                Tier2Card: function() {
                    return em
                },
                PremiumTierCardsVariant: function() {
                    return c
                },
                default: function() {
                    return e_
                }
            });
            var r, i, a, l, s, o, u, c, d = n("37983");
            n("884691");
            var f = n("414456"),
                m = n.n(f),
                _ = n("866227"),
                E = n.n(_),
                I = n("446674"),
                T = n("669491"),
                p = n("819855"),
                S = n("77078"),
                P = n("841098"),
                R = n("206230"),
                C = n("812204"),
                O = n("685665"),
                g = n("441413"),
                M = n("915639"),
                h = n("697218"),
                L = n("521012"),
                v = n("594098"),
                N = n("491614"),
                x = n("716589"),
                A = n("46829"),
                U = n("118503"),
                b = n("41250"),
                y = n("379863"),
                D = n("216422"),
                j = n("619911"),
                F = n("698015"),
                B = n("75196"),
                k = n("240481"),
                w = n("719923"),
                G = n("309318"),
                H = n("446488"),
                K = n("182650"),
                V = n("154889"),
                W = n("917247"),
                z = n("478968"),
                Z = n("641078"),
                Y = n("496521"),
                X = n("992118"),
                J = n("484321"),
                q = n("332291"),
                Q = n("646718"),
                $ = n("719347"),
                ee = n("782340"),
                et = n("350872"),
                en = n("939784"),
                er = n("769015");

            function ei(e) {
                let {
                    text: t,
                    className: n,
                    colorOptions: r = 2
                } = e;
                return (0, d.jsx)("div", {
                    className: m(n, et.freeTrialPill, {
                        [et.freeTrialPillTier0GradientFill]: 1 === r,
                        [et.freeTrialPillTier2GradientFill]: 3 === r,
                        [et.freeTrialPillTier2OldGradientFill]: 4 === r,
                        [et.lightBackgroundPill]: 5 === r
                    }),
                    children: (0, d.jsx)(S.Text, {
                        variant: "text-xs/bold",
                        className: m(et.freeTrialPillText, {
                            [et.freeTrialPillTextInverted]: 0 !== r && 2 !== r,
                            [et.freeTrialPillTextTier0]: 0 === r,
                            [et.freeTrialPillTextTier2]: 2 === r
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
                    isPillOnBorder: a = !0
                } = e;
                switch (i) {
                    case 1:
                        t = T.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
                        break;
                    case 3:
                        t = "url(#".concat(J.PREMIUM_NEW_TIER_2_SVG_GRADIENT_ID, ")");
                        break;
                    case 4:
                    case 5:
                        t = "url(#".concat(J.PREMIUM_OLD_TIER_2_SVG_GRADIENT_ID, ")");
                        break;
                    default:
                        t = "white"
                }
                return a ? (0, d.jsxs)("div", {
                    className: m(r, et.freeTrialPillWithSparkles),
                    children: [(0, d.jsx)(J.SparkleStar, {
                        foreground: et.sparkleStar1,
                        color: t
                    }), (0, d.jsx)(J.SparkleStar, {
                        foreground: et.sparkleStar2,
                        color: t
                    }), (0, d.jsx)(J.SparkleStar, {
                        foreground: et.sparkleStar3,
                        color: t
                    }), (0, d.jsx)(ei, {
                        text: n,
                        colorOptions: i
                    }), (0, d.jsx)(J.SparkleStar, {
                        foreground: et.sparkleStar4,
                        color: t
                    }), (0, d.jsx)(J.SparkleStar, {
                        foreground: et.sparkleStar5,
                        color: t
                    })]
                }) : (0, d.jsxs)("div", {
                    className: m(r, et.freeTrialPillWithSparkles),
                    children: [(0, d.jsx)(ei, {
                        text: n,
                        colorOptions: i
                    }), (0, d.jsx)(J.SparkleStar, {
                        foreground: et.sparkleStar1,
                        style: {
                            marginLeft: 4,
                            marginBottom: -6
                        },
                        color: t
                    }), (0, d.jsx)(J.SparkleStar, {
                        foreground: et.sparkleStar2,
                        color: t
                    })]
                })
            }

            function el(e) {
                let {
                    width: t = 83,
                    height: n = 82,
                    ...r
                } = e;
                return (0, d.jsxs)("svg", {
                    ...(0, B.default)({
                        ...r
                    }),
                    width: t,
                    height: n,
                    viewBox: "0 0 83 82",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, d.jsx)("g", {
                        clipPath: "url(#clip0_1691_113820)",
                        children: (0, d.jsx)("path", {
                            d: "M75.6975 45.1322C75.2844 48.0717 70.2815 49.7001 69.2458 52.3302C68.0858 55.0537 70.4287 59.7129 68.6614 62.0181C66.8941 64.3233 61.7294 63.1533 59.479 64.9465C57.2438 66.6308 56.836 71.9026 54.133 72.966C51.5389 74.0448 47.5818 70.602 44.6592 70.8574C41.8456 71.1281 38.9013 75.4884 35.9617 75.0752C33.0222 74.6621 31.3938 69.6592 28.7638 68.6235C26.0402 67.4635 21.381 69.8064 19.0758 68.0391C16.7706 66.2718 17.9406 61.1071 16.1474 58.8566C14.5873 56.5279 9.31547 56.1201 8.25204 53.4171C7.17332 50.823 10.6161 46.8659 10.3607 43.9434C9.96577 41.2233 5.60554 38.279 6.01868 35.3394C6.43181 32.3999 11.4347 30.7715 12.4704 28.1414C13.6304 25.4179 11.2876 20.7587 13.0548 18.4535C14.8221 16.1483 19.9868 17.3183 22.2373 15.5251C24.4724 13.8408 24.8802 8.56898 27.5832 7.50556C30.1774 6.42683 34.1345 9.86958 37.057 9.61417C39.8706 9.34346 42.8149 4.98323 45.7545 5.39636C48.6941 5.80949 50.3224 10.8124 52.9525 11.8481C55.6761 13.0081 60.3352 10.6652 62.6404 12.4325C64.9456 14.1998 63.7756 19.3645 65.5688 21.615C67.2531 23.8501 72.5249 24.2579 73.5884 26.9609C74.6671 29.555 71.2243 33.5122 71.4797 36.4347C71.7505 39.2483 76.1107 42.1926 75.6975 45.1322Z",
                            fill: "currentColor"
                        })
                    }), (0, d.jsx)("path", {
                        d: "M30.1999 41.1212L26.9681 32.3582L23.3318 31.8471L21.6757 43.6313L24.3355 44.0051L25.5209 35.571L28.9482 44.6534L32.3488 45.1313L34.0049 33.3471L31.3451 32.9733L30.1999 41.1212ZM43.2501 41.8738C43.6191 39.2476 42.3243 37.5893 39.7655 37.2296C36.971 36.8369 34.9959 38.4305 34.6269 41.0567C34.2341 43.8513 35.9048 45.8886 38.935 46.3145C40.3996 46.5203 41.6035 46.2603 42.3119 45.862L42.5887 43.8924C41.8322 44.2668 40.8661 44.4228 39.9065 44.288C38.2567 44.0561 37.4063 43.2671 37.286 42.1686L43.0939 42.9849L43.2501 41.8738ZM39.5418 39.3098C40.5182 39.447 41.0822 40.0756 40.9668 41.1409L37.5326 40.6583C37.8069 39.6839 38.4812 39.1607 39.5418 39.3098ZM53.3558 44.7704L52.6485 39.2977L49.9214 38.9145L47.757 43.9321L47.211 38.5335L44.4838 38.1503L45.6771 47.0045L48.4043 47.3878L50.7631 42.2087L51.6534 47.8444L54.4311 48.2348L58.2208 40.0809L55.5104 39.7L53.3558 44.7704ZM61.6245 45.4004L62.7507 37.3871L60.0067 37.0015L58.8805 45.0147L61.6245 45.4004ZM59.7123 49.2345C60.6719 49.3694 61.4423 48.7738 61.5677 47.8816C61.6954 46.9725 61.1167 46.2045 60.1571 46.0696C59.1975 45.9348 58.4127 46.5112 58.2849 47.4202C58.1595 48.3125 58.7527 49.0997 59.7123 49.2345Z",
                        fill: "#5865F2"
                    }), (0, d.jsx)("path", {
                        d: "M57.6991 28.0304L61.3718 26.9774C61.3856 26.9721 61.3978 26.9632 61.4071 26.9517C61.4163 26.9401 61.4223 26.9262 61.4243 26.9116C61.4264 26.8969 61.4245 26.882 61.4188 26.8683C61.4131 26.8546 61.4038 26.8427 61.392 26.8338L58.1518 24.8093C58.1409 24.8077 58.1311 24.8019 58.1244 24.7932C58.1178 24.7844 58.1149 24.7733 58.1165 24.7625L57.0607 21.0782C57.0282 21.0109 56.9459 20.9993 56.9167 21.058L54.8864 24.3085C54.8629 24.3261 54.86 24.3466 54.8394 24.3437L51.1462 25.3939C51.1324 25.3992 51.1202 25.4081 51.1109 25.4196C51.1017 25.4312 51.0957 25.445 51.0937 25.4597C51.0916 25.4744 51.0935 25.4893 51.0992 25.503C51.1049 25.5167 51.1142 25.5286 51.126 25.5375L54.3867 27.5649C54.4073 27.5678 54.4044 27.5883 54.4221 27.6117L55.4778 31.296C55.4898 31.3604 55.5721 31.372 55.6219 31.3162L57.6522 28.0657C57.6537 28.0548 57.6595 28.045 57.6683 28.0384C57.6771 28.0318 57.6882 28.0289 57.6991 28.0304V28.0304Z",
                        fill: "#5865F2"
                    }), (0, d.jsx)("path", {
                        d: "M27.9939 54.8801L30.1446 54.2599C30.156 54.2502 30.1635 54.2367 30.1656 54.2219C30.1676 54.207 30.1642 54.1919 30.1559 54.1795L28.2594 52.9905C28.2541 52.9897 28.2493 52.9869 28.2461 52.9826C28.2429 52.9783 28.2415 52.9729 28.2422 52.9676L27.626 50.8105C27.6275 50.7998 27.6247 50.789 27.6182 50.7804C27.6118 50.7718 27.6022 50.7662 27.5915 50.7647C27.5809 50.7632 27.5701 50.766 27.5616 50.7725C27.553 50.7789 27.5473 50.7886 27.5458 50.7992L26.3589 52.7029L26.3388 52.7001L24.1881 53.3203C24.1775 53.3188 24.1667 53.3216 24.1581 53.3281C24.1495 53.3346 24.1439 53.3442 24.1424 53.3549C24.1409 53.3655 24.1437 53.3763 24.1501 53.3849C24.1566 53.3935 24.1662 53.3992 24.1768 53.4007L26.0733 54.5897C26.0786 54.5904 26.0834 54.5933 26.0866 54.5976C26.0898 54.6019 26.0912 54.6073 26.0905 54.6126L26.7067 56.7697C26.7164 56.7811 26.7299 56.7886 26.7446 56.7907C26.7594 56.7928 26.7745 56.7893 26.7869 56.7809L27.9738 54.8773C27.9738 54.8773 27.9738 54.8773 27.9939 54.8801Z",
                        fill: "#5865F2"
                    }), (0, d.jsx)("defs", {
                        children: (0, d.jsx)("clipPath", {
                            id: "clip0_1691_113820",
                            children: (0, d.jsx)("rect", {
                                width: "70.3636",
                                height: "70.3636",
                                fill: "white",
                                transform: "translate(10.915 0.5) rotate(8)"
                            })
                        })
                    })]
                })
            }

            function es(e) {
                let {
                    Icon: t,
                    text: n,
                    isNew: r = !1
                } = e;
                return (0, d.jsxs)("div", {
                    className: et.item,
                    children: [(0, d.jsx)(t, {
                        className: et.icon
                    }), (0, d.jsx)(S.Text, {
                        variant: "text-md/normal",
                        color: "always-white",
                        children: n
                    }), r ? (0, d.jsx)(g.default, {
                        className: et.newTagItem,
                        forceUseColorForSparkles: !0,
                        shouldInheritBackgroundColor: !0,
                        shouldInheritTextColor: !0
                    }) : null]
                })
            }

            function eo(e) {
                var t;
                let {
                    defaultPriceString: n,
                    subscriptionPlan: r,
                    discountOffer: i
                } = e, a = (0, z.useDiscountedPrice)(r);
                return (0, d.jsx)(d.Fragment, {
                    children: ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION_GENERIC.format({
                        numMonths: null !== (t = i.discount.user_usage_limit) && void 0 !== t ? t : Q.DISCOUNT_DURATION_FALLBACK,
                        discountedPrice: a,
                        regularPrice: n
                    })
                })
            }

            function eu(e) {
                var t, n, r, i, a, l;
                let {
                    isGift: s,
                    premiumTier: o,
                    offerTierMatchesCard: u,
                    offerType: c,
                    showYearlyPrice: f,
                    isStacked: _,
                    isFullScreen: T,
                    priceOptions: p
                } = e, P = (0, I.useStateFromStores)([L.default], () => L.default.getPremiumTypeSubscription()), R = (0, I.useStateFromStores)([h.default], () => h.default.getCurrentUser()), C = (0, K.useHasDiscountApplied)(), O = (0, K.useActiveDiscountInfo)(), g = o === Q.PremiumTypes.TIER_0 ? Q.PremiumSubscriptionSKUs.TIER_0 : Q.PremiumSubscriptionSKUs.TIER_2, M = (null == P ? void 0 : P.trialId) != null ? null == R ? void 0 : R.premiumType : C ? Q.PremiumTypes.TIER_2 : null, v = (0, W.usePremiumTrialOffer)(), N = (0, V.usePremiumDiscountOffer)(), x = null == v ? void 0 : v.subscription_trial;
                if (!s && null != M && o === M && null != P && null != P.planIdFromItems && !_) {
                    let e = null != P.trialEndsAt ? E(null == P ? void 0 : P.trialEndsAt).diff(E(), "d") : 0,
                        r = Q.SubscriptionPlanInfo[P.planIdFromItems],
                        i = w.default.formatPriceString(w.default.getDefaultPrice(r.id), r.interval);
                    return (0, d.jsx)(d.Fragment, {
                        children: (0, d.jsx)(S.Heading, {
                            variant: "heading-md/normal",
                            color: "always-white",
                            className: et.trialHeader,
                            children: 0 === c ? ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                                remainingTime: e,
                                price: i
                            }) : ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                                percent: null !== (t = null == O ? void 0 : O.percentage) && void 0 !== t ? t : Q.DISCOUNT_PERCENTAGE_FALLBACK,
                                regularPrice: i,
                                numMonths: null !== (n = null == O ? void 0 : O.duration) && void 0 !== n ? n : Q.DISCOUNT_DURATION_FALLBACK
                            })
                        })
                    })
                }
                if (!s && u && !_) {
                    let e = w.default.formatPriceString(w.default.getDefaultPrice(o === Q.PremiumTypes.TIER_0 ? Q.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : Q.SubscriptionPlans.PREMIUM_MONTH_TIER_2), Q.SubscriptionIntervalTypes.MONTH);
                    if (0 === c) return (0, d.jsx)(S.Heading, {
                        variant: "heading-md/normal",
                        color: "always-white",
                        className: et.trialHeader,
                        children: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
                            planName: (0, w.getTierDisplayName)(null !== (i = Q.PREMIUM_SKU_TO_MONTHLY_PLAN[null !== (r = null == x ? void 0 : x.sku_id) && void 0 !== r ? r : Q.PremiumSubscriptionSKUs.NONE]) && void 0 !== i ? i : Q.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
                            duration: (0, w.formatIntervalDuration)({
                                intervalType: null !== (a = null == x ? void 0 : x.interval) && void 0 !== a ? a : Q.SubscriptionIntervalTypes.DAY,
                                intervalCount: null !== (l = null == x ? void 0 : x.interval_count) && void 0 !== l ? l : 30,
                                capitalize: !1
                            }),
                            price: e
                        })
                    });
                    if (null != N) return (0, d.jsx)(S.Heading, {
                        variant: "heading-md/normal",
                        color: "always-white",
                        className: et.trialHeader,
                        children: (0, d.jsx)(eo, {
                            defaultPriceString: e,
                            subscriptionPlan: Q.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
                            discountOffer: N
                        })
                    })
                }
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(X.default, {
                        subscriptionTier: g,
                        isGift: s,
                        className: m(et.price, {
                            [et.priceStacked]: _ && T,
                            [et.priceStackedSmallScreen]: _ && !T
                        }),
                        variant: _ ? "heading-lg/extrabold" : void 0,
                        priceOptions: p
                    }), f && (0, d.jsx)(X.default, {
                        subscriptionTier: g,
                        interval: Q.SubscriptionIntervalTypes.YEAR,
                        isGift: s,
                        className: et.price,
                        priceOptions: p
                    })]
                })
            }

            function ec() {
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(es, {
                        Icon: F.default,
                        text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(Q.PremiumTypes.TIER_0, {
                                useSpace: !1
                            })
                        })
                    }), (0, d.jsx)(es, {
                        Icon: A.default,
                        text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), (0, d.jsx)(es, {
                        Icon: N.default,
                        text: ee.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
                    }), (0, d.jsx)(es, {
                        Icon: D.default,
                        text: ee.default.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
                    })]
                })
            }

            function ed(e) {
                var t;
                let {
                    showWumpus: n,
                    showBadge: r,
                    ctaButton: i,
                    showYearlyPrice: a,
                    className: l,
                    isGift: s = !1,
                    variant: o = 0,
                    isFullScreen: u,
                    priceOptions: c
                } = e, f = (0, I.useStateFromStores)([L.default], () => L.default.getPremiumTypeSubscription()), _ = (0, I.useStateFromStores)([h.default], () => h.default.getCurrentUser()), E = (0, W.usePremiumTrialOffer)(), T = null == E ? void 0 : null === (t = E.subscription_trial) || void 0 === t ? void 0 : t.sku_id, p = (null == f ? void 0 : f.trialId) != null, P = (null == f ? void 0 : f.trialId) != null ? null == _ ? void 0 : _.premiumType : null, R = null != T || p, C = 1 === o;
                return (0, d.jsxs)("div", {
                    className: m(et.card, l, {
                        [et.card]: !C,
                        [et.stackedCard]: C,
                        [et.withTier0Rim]: !s && R,
                        [et.withCardHover]: !s && R,
                        [et.tier0Stacked]: C,
                        [et.tier0]: !C
                    }),
                    children: [T === Q.PremiumSubscriptionSKUs.TIER_0 ? (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(ea, {
                            text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: et.topRimPill,
                            colorOptions: 0
                        }), (0, d.jsx)("div", {
                            className: et.rimGlowTier0
                        })]
                    }) : null, r && (0, d.jsx)(el, {
                        className: et.newCircleIcon
                    }), n ? (0, d.jsx)("div", {
                        className: et.wumpusImageContainer,
                        children: (0, d.jsx)(v.default, {
                            src: en,
                            mediaLayoutType: $.MediaLayoutType.RESPONSIVE,
                            width: 270,
                            height: 242,
                            zoomable: !1
                        })
                    }) : null, s || T !== Q.PremiumSubscriptionSKUs.TIER_0 ? null : (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(ea, {
                            text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: et.topRimPill,
                            colorOptions: 0
                        }), (0, d.jsx)("div", {
                            className: et.rimGlowTier0
                        })]
                    }), s || P !== Q.PremiumTypes.TIER_0 ? null : (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(ea, {
                            text: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                            className: et.topRimPill,
                            colorOptions: 0
                        }), (0, d.jsx)("div", {
                            className: et.rimGlowTier0
                        })]
                    }), (0, d.jsxs)("div", {
                        className: m({
                            [et.body]: C && u,
                            [et.bodySmallScreen]: C && !u
                        }),
                        children: [(0, d.jsx)("div", {
                            className: m({
                                [et.planContainer]: C && u,
                                [et.planContainerSmallScreen]: C && !u
                            }),
                            children: (0, d.jsxs)("div", {
                                className: m({
                                    [et.subscriptionPlanInfo]: C
                                }),
                                children: [(0, d.jsx)(y.default, {
                                    className: m({
                                        [et.title]: !C,
                                        [et.tier0Title]: !C,
                                        [et.tier0TitleStacked]: C && u,
                                        [et.tier0TitleStackedSmallScreen]: C && !u
                                    })
                                }), (0, d.jsx)(eu, {
                                    isGift: s,
                                    premiumTier: Q.PremiumTypes.TIER_0,
                                    offerType: 0,
                                    offerTierMatchesCard: T === Q.PremiumSubscriptionSKUs.TIER_0,
                                    showYearlyPrice: a,
                                    isStacked: C,
                                    isFullScreen: u,
                                    priceOptions: c
                                })]
                            })
                        }), (0, d.jsxs)("div", {
                            className: m({
                                [et.perkContainer]: C && u,
                                [et.perkContainerSmallScreen]: C && !u
                            }),
                            children: [(0, d.jsxs)("div", {
                                children: [C && (0, d.jsx)(S.Heading, {
                                    variant: "heading-xxl/extrabold",
                                    className: u ? et.stackedCardTitle : et.stackedCardTitleSmallScreen,
                                    children: ee.default.Messages.NITRO_MARKETING_JUST_THE_BASICS
                                }), (0, d.jsx)("div", {
                                    className: m({
                                        [et.listItemsBasic]: C
                                    }),
                                    children: (0, d.jsx)(ec, {})
                                })]
                            }), C && i]
                        })]
                    }), !C && i, s || T !== Q.PremiumSubscriptionSKUs.TIER_0 ? null : (0, d.jsx)(J.ButtonSparkleGroup, {
                        tier: Q.PremiumTypes.TIER_0
                    })]
                })
            }

            function ef(e) {
                let {
                    featureSet: t = 0,
                    isModal: n = !1,
                    isGift: r = !1
                } = e, i = (0, I.useStateFromStores)([M.default], () => M.default.locale), a = (0, I.useStateFromStores)([H.default], () => H.default.affinities), {
                    planSelectionEnabled: l
                } = G.default.useExperiment({
                    location: "planSelection"
                }, {
                    autoTrackExposure: !1
                }), s = n && !r && a.length > 0;
                s && G.default.trackExposure({
                    location: "planSelection"
                });
                if (1 === t) return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(es, {
                        Icon: U.default,
                        text: ee.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
                            numBoosts: Q.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                            percentageOff: (0, k.formatPercent)(i, Q.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                        })
                    }), (0, d.jsx)(es, {
                        Icon: F.default,
                        text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(Q.PremiumTypes.TIER_2, {
                                useSpace: !1
                            })
                        })
                    }), (0, d.jsx)(es, {
                        Icon: A.default,
                        text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), (0, d.jsx)(es, {
                        Icon: j.default,
                        text: ee.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }), (0, d.jsx)(es, {
                        Icon: x.default,
                        text: ee.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    })]
                });
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(es, {
                        Icon: F.default,
                        text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, w.getMaxFileSizeForPremiumType)(Q.PremiumTypes.TIER_2, {
                                useSpace: !1
                            })
                        })
                    }), (0, d.jsx)(es, {
                        Icon: A.default,
                        text: ee.default.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                    }), (0, d.jsx)(es, {
                        Icon: N.default,
                        text: ee.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
                    }), (0, d.jsx)(es, {
                        Icon: j.default,
                        text: ee.default.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                    }), (0, d.jsx)(es, {
                        Icon: U.default,
                        text: ee.default.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
                    }), (0, d.jsx)(es, {
                        Icon: x.default,
                        text: ee.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    }), l && s && (0, d.jsx)(q.default, {})]
                })
            }

            function em(e) {
                var t;
                let n, {
                        showWumpus: r,
                        ctaButton: i,
                        showYearlyPrice: a,
                        featureSet: l = 0,
                        className: s,
                        isGift: o = !1,
                        isModal: u = !1,
                        variant: c = 0,
                        isFullScreen: f,
                        priceOptions: _
                    } = e,
                    E = (0, I.useStateFromStores)([L.default], () => L.default.getPremiumTypeSubscription()),
                    T = (0, I.useStateFromStores)([h.default], () => h.default.getCurrentUser()),
                    R = (0, W.usePremiumTrialOffer)(),
                    C = null == R ? void 0 : null === (t = R.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
                    O = (null == E ? void 0 : E.trialId) != null ? null == T ? void 0 : T.premiumType : null,
                    g = (0, K.useIsInPremiumOfferExperience)(),
                    M = (0, V.usePremiumDiscountOffer)(),
                    N = (0, K.useHasDiscountApplied)(),
                    x = null != C || null != O ? 0 : null != M || N ? 1 : null,
                    A = 1 === c,
                    U = (0, Z.useIsEligibleForBogoPromotion)(),
                    y = !o && g,
                    D = (0, Z.getBOGOPillCopy)(),
                    j = (0, p.isThemeLight)((0, P.default)()),
                    F = j ? 5 : 2;
                return !y || A || j ? y && A && !j && (n = et.rimGlowTier2Stacked) : n = et.rimGlowTier2, (0, d.jsxs)("div", {
                    className: m(et.card, s, {
                        [et.withTier2Rim]: y && !A,
                        [et.withTier2RimStacked]: y && A,
                        [et.withCardHover]: y,
                        [et.tier2Stacked]: A,
                        [et.tier2]: !A
                    }),
                    children: [!o && null != M && (0, V.discountOfferHasTier)(M, Q.PremiumSubscriptionSKUs.TIER_2) && void 0 !== M.discount.amount ? (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(ea, {
                            text: N ? ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : ee.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                                percent: M.discount.amount
                            }),
                            className: et.topRimPill,
                            colorOptions: F
                        }), (0, d.jsx)("div", {
                            className: n
                        })]
                    }) : null, o || C !== Q.PremiumSubscriptionSKUs.TIER_2 ? null : (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(ea, {
                            text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: et.topRimPill,
                            colorOptions: F
                        }), (0, d.jsx)("div", {
                            className: n
                        })]
                    }), o || O !== Q.PremiumTypes.TIER_2 ? null : (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(ea, {
                            text: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                            className: et.topRimPill,
                            colorOptions: F
                        }), (0, d.jsx)("div", {
                            className: n
                        })]
                    }), !o && N && (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(ea, {
                            text: ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                            className: et.topRimPill,
                            colorOptions: F
                        }), (0, d.jsx)("div", {
                            className: n
                        })]
                    }), r ? (0, d.jsx)("div", {
                        className: et.wumpusImageContainer,
                        children: (0, d.jsx)(v.default, {
                            src: er,
                            mediaLayoutType: $.MediaLayoutType.RESPONSIVE,
                            width: 270,
                            height: 242,
                            zoomable: !1
                        })
                    }) : null, (0, d.jsxs)("div", {
                        className: m({
                            [et.body]: A && f,
                            [et.bodySmallScreen]: A && !f
                        }),
                        children: [(0, d.jsx)("div", {
                            className: m({
                                [et.planContainer]: A && f,
                                [et.planContainerSmallScreen]: A && !f
                            }),
                            children: (0, d.jsxs)("div", {
                                className: m({
                                    [et.subscriptionPlanInfo]: A
                                }),
                                children: [(0, d.jsx)(b.default, {
                                    className: m({
                                        [et.title]: !A,
                                        [et.tier2Title]: !A,
                                        [et.tier2TitleStacked]: A && f,
                                        [et.tier2TitleStackedSmallScreen]: A && !f
                                    })
                                }), !o && C !== Q.PremiumSubscriptionSKUs.TIER_2 && U && (0, d.jsx)(S.Text, {
                                    variant: "text-xs/bold",
                                    className: et.freeTrialPillInline,
                                    children: D
                                }), (0, d.jsx)(eu, {
                                    isGift: o,
                                    premiumTier: Q.PremiumTypes.TIER_2,
                                    offerType: x,
                                    offerTierMatchesCard: C === Q.PremiumSubscriptionSKUs.TIER_2 || (0, V.discountOfferHasTier)(M, Q.PremiumSubscriptionSKUs.TIER_2),
                                    showYearlyPrice: a,
                                    isStacked: A,
                                    isFullScreen: f,
                                    priceOptions: _
                                })]
                            })
                        }), (0, d.jsxs)("div", {
                            className: m({
                                [et.perkContainer]: A && f,
                                [et.perkContainerSmallScreen]: A && !f
                            }),
                            children: [(0, d.jsxs)("div", {
                                children: [A && (0, d.jsx)(S.Heading, {
                                    className: m({
                                        [et.stackedCardTitle]: f,
                                        [et.stackedCardTitleSmallScreen]: !f
                                    }),
                                    variant: "heading-xxl/extrabold",
                                    children: ee.default.Messages.NITRO_MARKETING_CARDS_SUPERCHARGE_YOUR_DISCORD
                                }), (0, d.jsx)("div", {
                                    className: m({
                                        [et.listItems]: A
                                    }),
                                    children: (0, d.jsx)(ef, {
                                        featureSet: l,
                                        isModal: u,
                                        isGift: o
                                    })
                                })]
                            }), A && (0, d.jsx)(Y.default, {
                                isStacked: A,
                                ctaButton: i,
                                isGift: o,
                                trialOfferTier: C,
                                discountOffer: M
                            })]
                        })]
                    }), !A && (0, d.jsx)(Y.default, {
                        isStacked: A,
                        ctaButton: i,
                        isGift: o,
                        trialOfferTier: C,
                        discountOffer: M
                    })]
                })
            }

            function e_(e) {
                let {
                    showWumpus: t,
                    showBadge: n,
                    tier0CTAButton: r,
                    tier2CTAButton: i,
                    className: a,
                    variant: l = 0,
                    selectedPremiumType: s,
                    isFullScreen: o
                } = e, {
                    analyticsLocations: u
                } = (0, O.default)(C.default.PREMIUM_MARKETING_TIER_CARD), c = 1 === l, f = s === Q.PremiumTypes.TIER_0, _ = (0, I.useStateFromStores)([R.default], () => R.default.useReducedMotion);
                return (0, d.jsx)(O.AnalyticsLocationProvider, {
                    value: u,
                    children: (0, d.jsxs)("div", {
                        className: m({
                            [et.premiumCards]: !c,
                            [et.premiumCardsStackedVariant]: c && o,
                            [et.premiumCardsStackedVariantSmallScreen]: c && !o
                        }, a),
                        children: [(0, d.jsx)(ed, {
                            className: m({
                                [et.tierCardFocused]: c && f,
                                [et.tierCardHidden]: c && !f,
                                [et.tierCardAnimation]: c && !_
                            }),
                            showWumpus: t,
                            showBadge: n,
                            ctaButton: r,
                            variant: l,
                            isFullScreen: o
                        }), (0, d.jsx)(em, {
                            className: m({
                                [et.tierCardFocused]: c && !f,
                                [et.tierCardHidden]: c && f,
                                [et.tierCardAnimation]: c && !_
                            }),
                            showWumpus: t,
                            ctaButton: i,
                            variant: l,
                            isFullScreen: o
                        })]
                    })
                })
            }(r = s || (s = {}))[r.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", r[r.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", r[r.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", r[r.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", r[r.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", r[r.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE", (i = o || (o = {}))[i.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", i[i.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (a = u || (u = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.BOOSTING = 1] = "BOOSTING", (l = c || (c = {}))[l.DEFAULT = 0] = "DEFAULT", l[l.STACKED = 1] = "STACKED"
        },
        992118: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                l = n("446674"),
                s = n("77078"),
                o = n("10514"),
                u = n("719923"),
                c = n("646718"),
                d = n("891533"),
                f = function(e) {
                    let {
                        subscriptionTier: t,
                        interval: n = c.SubscriptionIntervalTypes.MONTH,
                        className: i,
                        isGift: f = !1,
                        variant: m,
                        priceOptions: _
                    } = e, E = (0, l.useStateFromStores)([o.default], () => o.default.isLoadedForPremiumSKUs());
                    if (!E) return (0, r.jsx)(s.Spinner, {
                        type: s.Spinner.Type.PULSING_ELLIPSIS,
                        className: d.priceSpinner
                    });
                    let I = o.default.getForSkuAndInterval((0, u.castPremiumSubscriptionAsSkuId)(t), n),
                        T = null != I ? (0, u.getFormattedPriceForPlan)(I, _, !1, f) : null;
                    return (0, r.jsxs)(s.Heading, {
                        color: "always-white",
                        variant: null != m ? m : "heading-md/medium",
                        className: a(d.pricePerInterval, i),
                        children: [(0, r.jsx)("span", {
                            className: d.price,
                            children: T
                        }), " / ", (0, u.getIntervalStringAsNoun)(n)]
                    })
                }
        },
        484321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PREMIUM_NEW_TIER_2_SVG_GRADIENT_ID: function() {
                    return d
                },
                PREMIUM_OLD_TIER_2_SVG_GRADIENT_ID: function() {
                    return f
                },
                SparkleGroupLeft: function() {
                    return m
                },
                SparkleGroupRight: function() {
                    return _
                },
                ButtonSparkleGroup: function() {
                    return E
                },
                SparkleStar: function() {
                    return I
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                l = n("819855"),
                s = n("841098"),
                o = n("75196"),
                u = n("646718"),
                c = n("359235");
            let d = "premium_new_tier_2_gradient",
                f = "premium_old_tier_2_gradient",
                m = e => {
                    let {
                        width: t = 28,
                        height: n = 53,
                        color: i,
                        foreground: a,
                        wrapperStyle: l,
                        ...s
                    } = e, u = "sparkle-gradient-".concat(Math.random().toString(36).substring(2, 15));
                    return (0, r.jsx)("div", {
                        className: l,
                        children: (0, r.jsxs)("svg", {
                            ...(0, o.default)({
                                ...s
                            }),
                            width: t,
                            height: n,
                            viewBox: "0 0 28 53",
                            className: a,
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, r.jsx)("defs", {
                                children: (0, r.jsxs)("linearGradient", {
                                    id: u,
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0%",
                                    children: [(0, r.jsx)("stop", {
                                        stopColor: "#B473F5"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#E292AA"
                                    })]
                                })
                            }), (0, r.jsx)("path", {
                                d: "M19.1626 48.3974L21.7394 49.4231C21.7943 49.4744 21.7943 49.5256 21.7394 49.5256L19.1626 50.6026L18.0112 52.9615C18.0112 53.0128 17.9564 53.0128 17.9015 52.9615L16.805 50.6026H16.7502L14.2281 49.5256C14.1733 49.5256 14.1733 49.4744 14.2281 49.4231L16.7502 48.3974H16.805L17.9015 46.0385C17.9564 45.9872 18.0112 45.9872 18.0112 46.0385L19.1626 48.3974Z",
                                fill: null != i ? i : "url(#".concat(u, ")")
                            }), (0, r.jsx)("path", {
                                d: "M26.5697 14.865C25.3611 15.6925 24.3322 16.7831 23.5512 18.0645C22.7702 19.3459 22.2549 20.7888 22.0395 22.2975L21.3147 27.5515C21.2999 27.676 21.2426 27.7905 21.1535 27.8732C21.0644 27.9558 20.9498 28.001 20.8315 28C20.7131 28.001 20.5986 27.9558 20.5095 27.8732C20.4204 27.7905 20.3631 27.676 20.3483 27.5515L19.5631 22.2975C19.3591 20.7849 18.8485 19.3373 18.0665 18.0542C17.2844 16.771 16.2495 15.683 15.0329 14.865L14.3685 14.4165C14.3092 14.3603 14.2623 14.291 14.231 14.2136C14.1997 14.1361 14.1847 14.0522 14.1873 13.968C14.1847 13.8929 14.2 13.8184 14.2316 13.7512C14.2633 13.6841 14.3104 13.6264 14.3685 13.5835L15.0329 13.135C16.2512 12.3038 17.2863 11.2039 18.068 9.91036C18.8497 8.61677 19.3597 7.15977 19.5631 5.63845L20.3483 0.44853C20.3631 0.323971 20.4204 0.209499 20.5095 0.126827C20.5986 0.044157 20.7131 -0.000967026 20.8315 1.71661e-05C20.9498 -0.000967026 21.0644 0.044157 21.1535 0.126827C21.2426 0.209499 21.2999 0.323971 21.3147 0.44853L22.0395 5.63845C22.2542 7.15601 22.7687 8.60832 23.5494 9.90022C24.3301 11.1921 25.3594 12.2945 26.5697 13.135L27.2341 13.5835C27.2999 13.6231 27.3561 13.6785 27.3981 13.7452C27.44 13.812 27.4666 13.8883 27.4757 13.968C27.467 14.0564 27.441 14.142 27.3994 14.2192C27.3578 14.2964 27.3015 14.3636 27.2341 14.4165L26.5697 14.865Z",
                                fill: null != i ? i : "url(#".concat(u, ")")
                            }), (0, r.jsx)("path", {
                                d: "M8.70724 31.8901L13.2167 30.1319C13.3127 30.044 13.3127 29.9561 13.2167 29.9561L8.70724 28.1099L6.6923 24.0659C6.6923 23.978 6.59634 23.978 6.5004 24.0659L4.58145 28.1099H4.48552L0.0719606 29.9561C-0.0239869 29.9561 -0.0239869 30.044 0.0719606 30.1319L4.48552 31.8901H4.58145L6.5004 35.9341C6.59634 36.022 6.6923 36.022 6.6923 35.9341L8.70724 31.8901Z",
                                fill: null != i ? i : "url(#".concat(u, ")")
                            })]
                        })
                    })
                },
                _ = e => {
                    let {
                        width: t = 21,
                        height: n = 22,
                        color: i,
                        wrapperStyle: a
                    } = e, l = "sparkle-gradient-".concat(Math.random().toString(36).substring(2, 15));
                    return (0, r.jsx)("div", {
                        className: a,
                        children: (0, r.jsxs)("svg", {
                            width: t,
                            height: n,
                            viewBox: "0 0 21 22",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, r.jsx)("defs", {
                                children: (0, r.jsxs)("linearGradient", {
                                    id: l,
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0%",
                                    children: [(0, r.jsx)("stop", {
                                        stopColor: "#B473F5"
                                    }), (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#E292AA"
                                    })]
                                })
                            }), (0, r.jsx)("path", {
                                d: "M17.8554 2.39744L20.4323 3.42308C20.4871 3.47436 20.4871 3.52563 20.4323 3.52563L17.8554 4.60256L16.7041 6.96154C16.7041 7.01282 16.6492 7.01282 16.5944 6.96154L15.4979 4.60256H15.443L12.921 3.52563C12.8662 3.52563 12.8662 3.47436 12.921 3.42308L15.443 2.39744H15.4979L16.5944 0.0384612C16.6492 -0.0128207 16.7041 -0.0128207 16.7041 0.0384612L17.8554 2.39744Z",
                                fill: null != i ? i : "url(#".concat(l, ")")
                            }), (0, r.jsx)("path", {
                                d: "M8.62582 14.7674L12.8132 16.3791C12.9023 16.4597 12.9023 16.5403 12.8132 16.5403L8.62582 18.2326L6.75481 21.9396C6.75481 22.0201 6.6657 22.0201 6.57661 21.9396L4.79473 18.2326H4.70566L0.607348 16.5403C0.518254 16.5403 0.518254 16.4597 0.607348 16.3791L4.70566 14.7674H4.79473L6.57661 11.0604C6.6657 10.9799 6.75481 10.9799 6.75481 11.0604L8.62582 14.7674Z",
                                fill: null != i ? i : "url(#".concat(l, ")")
                            })]
                        })
                    })
                };

            function E(e) {
                let {
                    tier: t = u.PremiumTypes.TIER_2
                } = e, n = (0, s.default)(), i = (0, l.isThemeLight)(n);
                return (0, r.jsxs)(r.Fragment, {
                    children: [!i && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: a(c.rimGlowVertical, {
                                [c.rimGlowVerticalTier0]: t === u.PremiumTypes.TIER_0,
                                [c.rimGlowVerticalTier2]: t === u.PremiumTypes.TIER_2
                            })
                        }), (0, r.jsx)(I, {
                            foreground: c.buttonSparkleStar1
                        })]
                    }), (0, r.jsx)(I, {
                        foreground: c.buttonSparkleStar2
                    }), (0, r.jsx)(I, {
                        foreground: c.buttonSparkleStar3
                    }), (0, r.jsx)(I, {
                        foreground: c.buttonSparkleStar4
                    }), (0, r.jsx)(I, {
                        foreground: c.buttonSparkleStar5
                    })]
                })
            }

            function I(e) {
                let {
                    width: t = 14,
                    height: n = 13,
                    color: i = "white",
                    foreground: a,
                    ...l
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, o.default)({
                        ...l
                    }),
                    preserveAspectRatio: "none",
                    width: t,
                    height: n,
                    viewBox: "0 0 14 13",
                    className: a,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsxs)("defs", {
                        children: [(0, r.jsxs)("linearGradient", {
                            id: d,
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [(0, r.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#8547C6"
                            }), (0, r.jsx)("stop", {
                                offset: "50%",
                                stopColor: "#B845C1"
                            }), (0, r.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#AB5D8A"
                            })]
                        }), (0, r.jsxs)("linearGradient", {
                            id: f,
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [(0, r.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#B473F5"
                            }), (0, r.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#E292AA"
                            })]
                        })]
                    }), (0, r.jsx)("path", {
                        d: "M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z",
                        fill: i
                    })]
                })
            }
        },
        871948: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                AvatarWrapper: function() {
                    return E
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("414456"),
                l = n.n(a),
                s = n("446674"),
                o = n("77078"),
                u = n("106435"),
                c = n("446488"),
                d = n("52904"),
                f = n("782340"),
                m = n("270166");

            function _(e) {
                let {
                    smallerText: t,
                    className: n,
                    textColor: a
                } = e, u = (0, s.useStateFromStores)([c.default], () => c.default.affinities.slice(0, 3).reverse()), _ = u.map((e, t) => (0, r.jsx)(E, {
                    affinity: e,
                    applyMask: t !== u.length - 1,
                    size: d.AvatarSizes.SIZE_32
                }, e.id)), I = e => null != e.globalName ? e.globalName : e.username, T = i.useMemo(() => 3 === u.length ? f.default.Messages.AFFINITIES_MARKETING_HEADER_V2_3.format({
                    username: I(u[2])
                }) : 2 === u.length ? f.default.Messages.AFFINITIES_MARKETING_HEADER_V2_2.format({
                    username: I(u[1]),
                    otherUsername: I(u[0])
                }) : 1 === u.length ? f.default.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
                    username: I(u[0])
                }) : "", [u]);
                return 0 === u.length ? null : (0, r.jsxs)("div", {
                    className: l(m.container, n),
                    children: [(0, r.jsx)("div", {
                        className: m.iconContainer,
                        children: _
                    }), (0, r.jsx)("div", {
                        className: m.textContainer,
                        children: (0, r.jsx)(function() {
                            return t ? (0, r.jsx)(o.Text, {
                                variant: "text-lg/medium",
                                color: a,
                                children: T
                            }) : (0, r.jsx)(o.Heading, {
                                variant: "heading-xl/medium",
                                color: a,
                                children: T
                            })
                        }, {})
                    })]
                })
            }

            function E(e) {
                let {
                    affinity: t,
                    applyMask: n,
                    size: i
                } = e, {
                    avatarSrc: a,
                    eventHandlers: s
                } = (0, u.default)({
                    user: t,
                    size: i,
                    animateOnHover: !0
                });
                return (0, r.jsx)(o.Avatar, {
                    className: l(m.icon, {
                        [m.mask]: n
                    }),
                    src: a,
                    "aria-label": t.username,
                    size: i,
                    ...s
                })
            }
        },
        332291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("414456"),
                l = n.n(a),
                s = n("446674"),
                o = n("77078"),
                u = n("106435"),
                c = n("446488"),
                d = n("782340"),
                f = n("808559");

            function m() {
                let e = (0, s.useStateFromStores)([c.default], () => c.default.affinities.slice(0, 3)),
                    t = e[0],
                    {
                        avatarSrc: n,
                        eventHandlers: a
                    } = (0, u.default)({
                        user: t,
                        size: o.AvatarSizes.SIZE_24,
                        animateOnHover: !0
                    }),
                    m = e => null != e.globalName ? e.globalName : e.username,
                    _ = i.useMemo(() => e.length >= 2 ? d.default.Messages.AFFINITIES_MARKETING_HEADER_V2_3.format({
                        username: m(e[0])
                    }) : 1 === e.length ? d.default.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
                        username: m(e[0])
                    }) : "", [e]);
                return 0 === e.length ? null : (0, r.jsxs)("div", {
                    className: f.container,
                    children: [(0, r.jsx)(o.Avatar, {
                        className: f.icon,
                        src: n,
                        "aria-label": t.username,
                        size: o.AvatarSizes.SIZE_24,
                        ...a
                    }), (0, r.jsx)(o.Text, {
                        className: l(f.text),
                        variant: "text-sm/normal",
                        color: "always-white",
                        children: _
                    })]
                })
            }
        },
        141399: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("414456"),
                l = n.n(a),
                s = n("459334"),
                o = n("446674"),
                u = n("850068"),
                c = n("446488"),
                d = n("921941"),
                f = n("871948"),
                m = n("646718"),
                _ = n("52904"),
                E = n("782340"),
                I = n("46901");
            let T = [m.PremiumUpsellTypes.STREAM_QUALITY_UPSELL];

            function p(e) {
                let {
                    premiumUpsellType: t,
                    className: n
                } = e, a = (0, o.useStateFromStores)([c.default], () => c.default.affinities), p = a.length > 0 && T.includes(t), S = d.default.useExperiment({
                    location: "HD Streaming Upsell"
                }, {
                    autoTrackExposure: p,
                    disable: !p
                }).enabled, P = (0, o.useStateFromStores)([c.default], () => c.default.hasFetched);
                i.useEffect(() => {
                    !P && u.getNitroAffinity()
                }, [P]);
                let R = a.map((e, t) => (0, r.jsx)(f.AvatarWrapper, {
                    affinity: e,
                    applyMask: t !== a.length - 1,
                    size: _.AvatarSizes.SIZE_20
                }, e.id));
                return S ? (0, r.jsxs)("div", {
                    className: l(I.container, n),
                    children: [(0, r.jsx)("div", {
                        className: I.iconContainer,
                        children: R
                    }), (0, r.jsx)("div", {
                        className: I.textContainer,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            children: (() => {
                                if (t === m.PremiumUpsellTypes.STREAM_QUALITY_UPSELL) return E.default.Messages.STREAM_PREMIUM_AFFINITY_UPSELL.format({
                                    numFriends: a.length
                                });
                                return null
                            })()
                        })
                    })]
                }) : null
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
                a = n("414456"),
                l = n.n(a),
                s = n("446674"),
                o = n("77078"),
                u = n("109036"),
                c = n("697218"),
                d = n("993105"),
                f = n("719923"),
                m = n("552917"),
                _ = n("843647"),
                E = n("789946"),
                I = n("646718"),
                T = n("49111"),
                p = n("527382"),
                S = n("782340"),
                P = n("348133");

            function R(e) {
                let t, {
                        onClose: n,
                        fileSize: a,
                        ...R
                    } = e,
                    C = null != a && I.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE < a,
                    {
                        isLoading: O,
                        suggestedPremiumType: g
                    } = (0, _.default)({
                        autoTrackExposure: !C,
                        experiment: m.default,
                        location: I.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL
                    }),
                    M = !C && g === I.PremiumTypes.TIER_0,
                    h = (0, s.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
                    L = (0, r.jsx)(u.default, {
                        icons: p.DEFAULT_FILE_UPLOAD_ICONS
                    });
                t = M ? S.default.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
                    premiumPlan: (0, f.getPremiumTypeDisplayName)(I.PremiumTypes.TIER_0),
                    premiumMaxSize: S.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
                }) : S.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
                let v = i.useMemo(() => {
                        let e = f.default.getUserMaxFileSize(h),
                            t = (0, d.formatSize)(e / 1024, {
                                useKibibytes: !0
                            }),
                            n = S.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                                maxSize: t
                            });
                        switch (null == h ? void 0 : h.premiumType) {
                            case I.PremiumTypes.TIER_0:
                                n = S.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
                                    maxSize: t
                                });
                                break;
                            case I.PremiumTypes.TIER_1:
                                n = S.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
                                    maxSize: t
                                })
                        }
                        return n
                    }, [h]),
                    N = (0, r.jsxs)("div", {
                        className: P.body,
                        children: [(0, r.jsx)("span", {
                            children: v
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-md/medium",
                            children: t
                        })]
                    });
                return (0, r.jsx)(E.default, {
                    artElement: L,
                    artContainerClassName: l(P.artContainer),
                    enableArtBoxShadow: !1,
                    type: I.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
                    title: S.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    body: N,
                    context: S.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                        maxSize: S.default.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
                    }),
                    glowUp: t,
                    analyticsLocation: {
                        section: T.AnalyticsSections.FILE_UPLOAD_POPOUT
                    },
                    onClose: n,
                    subscriptionTier: M ? I.PremiumSubscriptionSKUs.TIER_0 : I.PremiumSubscriptionSKUs.TIER_2,
                    isLoading: O,
                    ...R
                })
            }
        },
        789946: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("414456"),
                l = n.n(a),
                s = n("77078"),
                o = n("812204"),
                u = n("685665"),
                c = n("617917"),
                d = n("599110"),
                f = n("719923"),
                m = n("688771"),
                _ = n("154889"),
                E = n("917247"),
                I = n("956597"),
                T = n("635956"),
                p = n("141399"),
                S = n("646718"),
                P = n("49111"),
                R = n("782340"),
                C = n("758542"),
                O = n("393828");

            function g(e) {
                var t, n, a;
                let {
                    title: g,
                    type: M,
                    guildBoostProps: h,
                    analyticsSource: L,
                    analyticsLocation: v,
                    body: N,
                    context: x,
                    glowUp: A,
                    modalClassName: U,
                    artContainerClassName: b,
                    bodyClassName: y,
                    transitionState: D,
                    onClose: j,
                    onSubscribeClick: F,
                    onSecondaryClick: B,
                    secondaryCTA: k,
                    subscribeButtonText: w,
                    showNewBadge: G = !1,
                    enableArtBoxShadow: H = !0,
                    subscriptionTier: K = S.PremiumSubscriptionSKUs.TIER_2,
                    isLoading: V = !1,
                    hideBackButton: W,
                    backButtonText: z,
                    ...Z
                } = e, Y = null != h, X = (0, E.usePremiumTrialOffer)(), J = (0, _.usePremiumDiscountOffer)(), q = ((null == X ? void 0 : null === (t = X.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === K || (0, _.discountOfferHasTier)(J, K)) && !Y, {
                    analyticsLocations: Q
                } = (0, u.default)(o.default.PREMIUM_UPSELL_MODAL), {
                    enabled: $,
                    variant: ee
                } = m.default.useExperiment({
                    location: "PremiumUpsellModal"
                }, {
                    autoTrackExposure: !1
                }), et = $ && M === S.PremiumUpsellTypes.STREAM_QUALITY_UPSELL, en = et && m.GradientVariants.includes(ee);
                i.useEffect(() => {
                    !V && (Y ? d.default.track(P.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(M, " - Tier ").concat(h.boostedGuildTier),
                        guild_id: h.guild.id,
                        channel_id: h.channelId,
                        location: v,
                        location_stack: Q
                    }) : d.default.track(P.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: M,
                        source: L,
                        location: v,
                        location_stack: Q,
                        sku_id: (0, f.castPremiumSubscriptionAsSkuId)(K)
                    }))
                }, [Y, K, V]);
                let er = H ? l(C.artContainer, C.artContainerBoxShadow, b) : l(C.artContainer, b),
                    ei = null;
                return ei = "artURL" in Z ? (0, r.jsx)("img", {
                    className: C.art,
                    alt: "",
                    src: Z.artURL
                }) : Z.artElement, (0, r.jsxs)(s.ModalRoot, {
                    className: l(C.root, U),
                    "aria-label": g,
                    transitionState: D,
                    children: [(0, r.jsxs)("div", {
                        className: er,
                        children: [ei, G ? (0, r.jsx)("img", {
                            className: C.sparkleBadge,
                            alt: "",
                            src: O
                        }) : null]
                    }), et ? (0, r.jsx)(s.ModalCloseButton, {
                        onClick: j,
                        className: C.closeButton
                    }) : null, (0, r.jsx)(s.ModalContent, {
                        className: C.content,
                        children: V ? (0, r.jsx)(s.Spinner, {}) : (0, r.jsx)(r.Fragment, {
                            children: q ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(I.default, {
                                    onClose: j,
                                    type: M,
                                    subscriptionTier: null !== (a = null == X ? void 0 : null === (n = X.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : S.PremiumSubscriptionSKUs.TIER_2,
                                    headingText: g,
                                    context: x,
                                    analyticsLocationObject: v,
                                    discountOffer: J,
                                    trialOffer: X,
                                    children: A
                                })
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(s.Heading, {
                                    className: l(C.header, {
                                        [C.enhancedHeader]: et
                                    }),
                                    variant: "heading-xl/semibold",
                                    children: g
                                }), (0, r.jsx)(p.default, {
                                    premiumUpsellType: M
                                }), (0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    className: l(y, C.subHeader),
                                    children: N
                                })]
                            })
                        })
                    }), (0, r.jsxs)(s.ModalFooter, {
                        className: l(C.footer, {
                            [C.enhancedFooter]: et
                        }),
                        children: [(0, r.jsxs)("div", {
                            className: l(C.primaryActions, {
                                [C.enhancedPrimaryActions]: et
                            }),
                            children: [null != k ? (0, r.jsx)(s.Button, {
                                className: l(C.secondaryAction, {
                                    [C.enhancedSecondaryAction]: en
                                }),
                                onClick: B,
                                size: s.Button.Sizes.SMALL,
                                color: en ? s.Button.Colors.CUSTOM : s.Button.Colors.PRIMARY,
                                look: s.Button.Looks.LINK,
                                children: k
                            }) : null, (() => {
                                let e;
                                if (Y) return (0, r.jsx)(c.default, {
                                    analyticsLocation: v,
                                    guild: h.guild,
                                    onClose: j
                                });
                                let t = et ? R.default.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
                                if (q) {
                                    if (null != X) {
                                        var n, i;
                                        t = (0, f.formatTrialCtaIntervalDuration)({
                                            intervalType: null == X ? void 0 : null === (n = X.subscription_trial) || void 0 === n ? void 0 : n.interval,
                                            intervalCount: null == X ? void 0 : null === (i = X.subscription_trial) || void 0 === i ? void 0 : i.interval_count
                                        }), e = null == X ? void 0 : X.trial_id
                                    } else null != J && (t = R.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                        percent: J.discount.amount
                                    }))
                                }
                                return (0, r.jsx)(T.default, {
                                    className: l({
                                        [C.getNitroCTA]: en
                                    }),
                                    premiumModalAnalyticsLocation: v,
                                    subscriptionTier: K,
                                    trialId: e,
                                    size: s.Button.Sizes.SMALL,
                                    color: en ? s.Button.Colors.CUSTOM : s.Button.Colors.GREEN,
                                    onClick: () => {
                                        null == F || F(), j()
                                    },
                                    buttonText: null != w ? w : t
                                })
                            })()]
                        }), !W && !et && (0, r.jsx)(s.Button, {
                            onClick: j,
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            children: null != z ? z : R.default.Messages.BACK
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
                    guildId: a,
                    isTryItOutFlow: l = !1
                } = e;
                r.default.dispatch({
                    type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                    imageSrc: t,
                    file: n,
                    uploadType: i,
                    guildId: a,
                    isTryItOutFlow: l
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
                    return m
                },
                showFileSizeErrorModal: function() {
                    return _
                },
                getPreviewAvatar: function() {
                    return E
                },
                getPreviewNickname: function() {
                    return I
                },
                getPreviewDisplayName: function() {
                    return T
                },
                isColorDark: function() {
                    return p
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("509043"),
                a = n("77078"),
                l = n("336522"),
                s = n("315102"),
                o = n("254490"),
                u = n("737403"),
                c = n("453252"),
                d = n("75015"),
                f = n("782340");

            function m(e, t, i, l) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await n.el("420333").then(n.bind(n, "420333"));
                    return n => (0, r.jsx)(a, {
                        filters: l,
                        maxFileSizeBytes: c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                        imageSpecifications: e === d.UploadTypes.BANNER && f.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
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
                (0, l.openUploadError)({
                    title: f.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: f.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, o.sizeString)(c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
                    })
                })
            }

            function E(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (null != e) return e;
                let {
                    size: i = 80,
                    canAnimate: a = !0
                } = r, l = null === e;
                return l && null == t ? s.default.getDefaultAvatarURL(n.id, n.discriminator) : l || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, i, a) : n.getAvatarURL(null == t ? void 0 : t.guildId, i, a)
            }

            function I(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function T(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function p(e) {
                let t = null != e ? (0, i.getDarkness)(e) : 1;
                return t > .25
            }
        },
        504439: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                thumbHashToRGBA: function() {
                    return i
                }
            }), n("424973"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var r = n("723251");

            function i(e) {
                let {
                    detail: t = 1,
                    pop: n = 1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    PI: i,
                    min: a,
                    max: l,
                    cos: s,
                    round: o
                } = Math, u = e[0] | e[1] << 8 | e[2] << 16, c = e[3] | e[4] << 8, d = (63 & u) / 63, f = (u >> 6 & 63) / 31.5 - 1, m = (u >> 12 & 63) / 31.5 - 1, _ = u >> 23, E = c >> 15, I = l(3, E ? _ ? 5 : 7 : 7 & c), T = l(3, E ? 7 & c : _ ? 5 : 7), p = _ ? (15 & e[5]) / 15 : 1, S = (e[5] >> 4) / 15, P = _ ? 6 : 5, R = 0, C = (t, n, r) => {
                    let i = [];
                    for (let a = 0; a < n; a++)
                        for (let l = a ? 0 : 1; l * n < t * (n - a); l++) i.push(((e[P + (R >> 1)] >> ((1 & R++) << 2) & 15) / 7.5 - 1) * r);
                    return i
                }, O = C(I, T, (u >> 18 & 31) / 31 / 2), g = C(3, 3, (c >> 3 & 63) / 63 * n), M = C(3, 3, (c >> 9 & 63) / 63 * n), h = _ ? C(5, 5, S) : [], L = (0, r.thumbHashToApproximateAspectRatio)(e), v = o(L > 1 ? 32 : 32 * L), N = o(L > 1 ? 32 / L : 32), x = new Uint8Array(v * N * 4), A = [], U = [];
                for (let e = 0, n = 0; e < N; e++)
                    for (let r = 0; r < v; r++, n += 4) {
                        let o = d,
                            u = f,
                            c = m,
                            E = p;
                        for (let e = 0, t = l(I, _ ? 5 : 3); e < t; e++) A[e] = s(i / v * (r + .5) * e);
                        for (let t = 0, n = l(T, _ ? 5 : 3); t < n; t++) U[t] = s(i / N * (e + .5) * t);
                        for (let e = 0, n = 0; e < T; e++)
                            for (let r = e ? 0 : 1, i = 2 * U[e]; r * T < I * (T - e); r++, n++) !(r > t) && !(e > t) && (o += O[n] * A[r] * i);
                        for (let e = 0, t = 0; e < 3; e++)
                            for (let n = e ? 0 : 1, r = 2 * U[e]; n < 3 - e; n++, t++) {
                                let e = A[n] * r;
                                u += g[t] * e, c += M[t] * e
                            }
                        if (_)
                            for (let e = 0, t = 0; e < 5; e++)
                                for (let n = e ? 0 : 1, r = 2 * U[e]; n < 5 - e; n++, t++) E += h[t] * A[n] * r;
                        let S = o - 2 / 3 * u,
                            P = (3 * o - S + c) / 2,
                            R = P - c;
                        x[n] = l(0, 255 * a(1, P)), x[n + 1] = l(0, 255 * a(1, R)), x[n + 2] = l(0, 255 * a(1, S)), x[n + 3] = l(0, 255 * a(1, E))
                    }
                return {
                    w: v,
                    h: N,
                    rgba: x
                }
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
                a = n("606292"),
                l = n("688318"),
                s = n("19287");

            function o(e) {
                let {
                    user: t,
                    guildId: n,
                    size: o,
                    showPending: u = !1,
                    showTryItOut: c = !1,
                    animateOnHover: d = !1,
                    avatarDecorationOverride: f,
                    avatarOverride: m
                } = e, {
                    avatarSrc: _,
                    isAvatarAnimating: E,
                    eventHandlers: I
                } = (0, s.useAnimatedAvatarSrc)({
                    user: t,
                    guildId: n,
                    size: (0, i.getAvatarSize)(o),
                    showPending: u,
                    animateOnHover: d,
                    avatarOverride: m
                }), {
                    avatarPlaceholderSrc: T,
                    avatarDecorationSrc: p,
                    eventHandlers: S
                } = (0, l.default)({
                    user: t,
                    guildId: null != n ? n : void 0,
                    size: (0, a.getDecorationSizeForAvatarSize)(o),
                    showPending: u,
                    animateOnHover: d,
                    avatarDecorationOverride: f,
                    showTryItOut: c
                }), P = r.useCallback(() => {
                    I.onMouseEnter(), S.onMouseEnter()
                }, [I, S]), R = r.useCallback(() => {
                    I.onMouseLeave(), S.onMouseLeave()
                }, [I, S]);
                return {
                    avatarPlaceholderSrc: T,
                    avatarDecorationSrc: p,
                    avatarSrc: _,
                    isAnimating: E,
                    eventHandlers: {
                        onMouseEnter: P,
                        onMouseLeave: R
                    }
                }
            }
        },
        19287: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnimatedAvatarSrc: function() {
                    return c
                }
            }), n("222007");
            var r = n("884691"),
                i = n("446674"),
                a = n("206230"),
                l = n("771325"),
                s = n("26989"),
                o = n("471671"),
                u = n("91653");

            function c(e) {
                let {
                    user: t,
                    guildId: n,
                    size: c,
                    showPending: d = !1,
                    animateOnHover: f = !1,
                    avatarOverride: m
                } = e, [_, E] = r.useState(!1), I = (0, i.useStateFromStores)([a.default], () => a.default.useReducedMotion), T = (0, i.useStateFromStores)([o.default], () => o.default.isFocused()), p = T && (_ || !I && !f), {
                    pendingAvatar: S
                } = (0, u.default)({}), P = (0, i.useStateFromStores)([s.default], () => null != n && null != t ? s.default.getMember(n, t.id) : null), R = r.useMemo(() => null != t ? (0, l.getPreviewAvatar)(d ? null != m ? m : S : void 0, P, t, {
                    canAnimate: p,
                    size: c
                }) : void 0, [d, S, P, t, p, c, m]), C = r.useCallback(() => E(!0), []), O = r.useCallback(() => E(!1), []);
                return {
                    avatarSrc: R,
                    isAvatarAnimating: p,
                    eventHandlers: {
                        onMouseEnter: C,
                        onMouseLeave: O
                    }
                }
            }
        },
        594098: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Image
                }
            }), n("222007");
            var r, Image, i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                s = n.n(l),
                o = n("819855"),
                u = n("77078"),
                c = n("841098"),
                d = n("862013"),
                f = n("103603"),
                m = n("547630"),
                _ = n("193513"),
                E = n("719347"),
                I = n("49111"),
                T = n("782340"),
                p = n("366822"),
                S = n("653240"),
                P = n("140802");

            function R(e) {
                let {
                    size: t,
                    mediaLayoutType: n,
                    alt: r
                } = e, a = (0, c.default)();
                return (0, i.jsx)("div", {
                    className: p.imageErrorWrapper,
                    style: function(e, t) {
                        switch (t) {
                            case E.MediaLayoutType.MOSAIC:
                                return {
                                    width: "100%", height: "100%", aspectRatio: "".concat(e.width, " / ").concat(e.height), display: "flex", maxHeight: "inherit"
                                };
                            case E.MediaLayoutType.RESPONSIVE:
                                return {
                                    ...O(e), display: "flex"
                                };
                            default:
                                return e
                        }
                    }(t, n),
                    children: (0, i.jsx)("img", {
                        src: (0, o.isThemeLight)(a) ? P : S,
                        className: p.imageError,
                        alt: null != r ? r : T.default.Messages.IMAGE
                    })
                })
            }(r = class extends a.PureComponent {
                render() {
                    let e;
                    let {
                        className: t,
                        imageClassName: n,
                        readyState: r,
                        src: a,
                        placeholder: l,
                        placeholderVersion: o,
                        alt: c,
                        width: m,
                        height: S,
                        maxWidth: P = m,
                        maxHeight: O = S,
                        minWidth: g,
                        minHeight: M,
                        mediaLayoutType: h,
                        limitResponsiveWidth: L = !0,
                        accessory: v,
                        zoomable: N,
                        original: x,
                        children: A,
                        renderAccessory: U,
                        onClick: b,
                        tabIndex: y,
                        useFullWidth: D = !1,
                        ...j
                    } = this.props;
                    if (1 === m && 1 === S) return null;
                    let F = (0, f.fit)({
                            width: m,
                            height: S,
                            maxWidth: P,
                            maxHeight: O,
                            minWidth: g,
                            minHeight: M
                        }),
                        B = 0 !== F.width ? F.width / F.height : 1;
                    "" !== a && r !== I.ImageReadyStates.ERROR ? e = A({
                        src: a,
                        size: F,
                        alt: c,
                        className: n,
                        mediaLayoutType: h
                    }) : r !== I.ImageReadyStates.LOADING && (e = (0, i.jsx)(R, {
                        size: F,
                        mediaLayoutType: h,
                        alt: c
                    })), e = (0, i.jsx)(_.ImageLoadingOverlay, {
                        readyState: r,
                        aspectRatio: B,
                        placeholder: l,
                        placeholderVersion: o,
                        placeholderStyle: C(F, h),
                        children: e
                    });
                    let k = null != U ? U() : null;
                    return k = null != k ? k : v, (0, i.jsx)(u.FocusRing, {
                        ringTarget: this._containerRef,
                        focusTarget: this._clickableRef,
                        children: (0, i.jsxs)("div", {
                            className: s(p.imageWrapper, {
                                [p.imageZoom]: N,
                                [p.imageWrapperBackground]: r !== I.ImageReadyStates.READY,
                                [p.clickable]: null != b
                            }, t),
                            style: function(e, t, n, r) {
                                return r === E.MediaLayoutType.MOSAIC ? {
                                    display: "block",
                                    maxHeight: "inherit",
                                    margin: "auto",
                                    width: !n && e.width <= E.MEDIA_MOSAIC_MAX_WIDTH ? e.width : "100%",
                                    height: "100%"
                                } : r === E.MediaLayoutType.RESPONSIVE ? {
                                    maxWidth: t ? e.width : void 0,
                                    width: "100%",
                                    aspectRatio: "".concat(e.width, " / ").concat(e.height)
                                } : e
                            }(F, L, D, h),
                            ...j,
                            children: [null != x && (0, i.jsx)("a", {
                                tabIndex: -1,
                                onClick: b,
                                "aria-hidden": !0,
                                className: p.originalLink,
                                href: x,
                                ref: this._containerRef,
                                "data-role": "img",
                                "data-safe-src": a
                            }), null != b ? (0, i.jsx)(u.Clickable, {
                                className: p.clickableWrapper,
                                tabIndex: null != y ? y : 0,
                                onClick: b,
                                "aria-label": null != c ? c : T.default.Messages.IMAGE,
                                "aria-describedby": d.IMAGE_OPEN_DIALOG_DESCRIPTION,
                                innerRef: this._clickableRef,
                                focusProps: {
                                    enabled: !1
                                },
                                children: e
                            }) : e, null != k ? (0, i.jsx)("div", {
                                className: p.imageAccessory,
                                children: k
                            }) : null]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._containerRef = a.createRef(), this._clickableRef = a.createRef()
                }
            }).defaultProps = {
                readyState: I.ImageReadyStates.READY,
                zoomable: !0,
                children: e => {
                    let {
                        src: t,
                        size: n,
                        alt: r,
                        className: a,
                        mediaLayoutType: l
                    } = e;
                    return (0, i.jsx)("img", {
                        className: null != a ? a : void 0,
                        alt: null != r ? r : T.default.Messages.IMAGE,
                        src: t,
                        style: C(n, l)
                    })
                },
                minWidth: 0,
                minHeight: 0
            }, Image = r;

            function C(e, t) {
                switch (t) {
                    case E.MediaLayoutType.MOSAIC:
                        return {
                            display: "block", objectFit: "cover", minWidth: "100%", minHeight: "100%", maxWidth: 1 === (0, m.default)() ? "calc(100% + 1px)" : "100%"
                        };
                    case E.MediaLayoutType.RESPONSIVE:
                        return O(e);
                    default:
                        return e
                }
            }

            function O(e) {
                let {
                    width: t,
                    height: n
                } = e;
                return {
                    maxWidth: t,
                    maxHeight: n,
                    width: "100%",
                    display: "block",
                    aspectRatio: "".concat(t, " / ").concat(n)
                }
            }
        },
        193513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageLoadingOverlay: function() {
                    return _
                }
            }), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("492311"), n("101997");
            var r = n("37983"),
                i = n("884691"),
                a = n("146606"),
                l = n("723251"),
                s = n("77078"),
                o = n("504439"),
                u = n("49111"),
                c = n("366822");
            let d = {
                    from: {
                        opacity: 1
                    },
                    enter: {
                        opacity: 1
                    },
                    leave: {
                        opacity: 0
                    },
                    config: {
                        duration: 200
                    }
                },
                f = {
                    ...d,
                    config: {
                        duration: 50
                    }
                },
                m = {
                    ...d,
                    config: (e, t) => t ? {
                        duration: 800
                    } : {
                        duration: 200
                    }
                };

            function _(e) {
                let {
                    readyState: t,
                    aspectRatio: n,
                    placeholder: _,
                    placeholderVersion: E,
                    placeholderStyle: I,
                    children: T
                } = e, p = t === u.ImageReadyStates.LOADING, [S] = i.useState(() => Date.now()), [P] = i.useState(p), [R, C] = i.useState(!1), O = i.useMemo(() => {
                    if (P && 1 === E && null != _) {
                        let e = Uint8Array.from(atob(_), e => e.charCodeAt(0)),
                            t = (0, o.thumbHashToRGBA)(e, {
                                detail: 1,
                                pop: 1.1
                            }),
                            n = (0, l.rgbaToDataURL)(t.w, t.h, t.rgba);
                        return n
                    }
                }, [P, _, E]);
                i.useEffect(() => {
                    let e = setTimeout(() => {
                        C(!0)
                    }, 2e3);
                    return () => {
                        clearTimeout(e)
                    }
                }, [P]);
                let g = t === u.ImageReadyStates.READY && Date.now() - S < 200,
                    M = (0, a.useTransition)(p && null != O, g ? f : d),
                    h = (0, a.useTransition)(p && R, m);
                return (0, r.jsxs)("div", {
                    className: c.loadingOverlay,
                    style: {
                        aspectRatio: n
                    },
                    children: [T, M((e, t) => t && (0, r.jsx)(a.animated.img, {
                        style: {
                            ...I,
                            ...e
                        },
                        className: c.imagePlaceholder,
                        src: O,
                        alt: ""
                    })), h((e, t) => t && (0, r.jsx)(a.animated.div, {
                        style: e,
                        className: c.imageLoadingOverlay,
                        children: (0, r.jsx)(s.Spinner, {
                            type: s.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                            className: c.cornerLoadingSpinner
                        })
                    }))]
                })
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
                a = n("856567"),
                l = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: n = 18,
                        color: i = "currentColor",
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(a),
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
                }, a.SuperReactionIcon, void 0, {
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
                a = n("361019"),
                l = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 25,
                        height: n = 25,
                        color: i = "currentColor",
                        ...a
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, l.default)(a),
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
                }, a.UserSquareIcon, void 0, {
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
                a = n("125094"),
                l = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("path", {
                            d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                            className: a,
                            fill: i
                        }), (0, r.jsx)("path", {
                            d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                            className: a,
                            fill: i
                        })]
                    })
                }, a.ScreenArrowIcon, void 0, {
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
                a = n("596256"),
                l = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.2137 2.00088L2.27111 13.3826C1.9299 13.8168 2.00535 14.4455 2.43963 14.7867C2.61581 14.9251 2.83338 15.0004 3.05744 15.0004H7V21.0004C7 21.5527 7.44772 22.0004 8 22.0004H16C16.5523 22.0004 17 21.5527 17 21.0004V15.0004H20.9425C21.4948 15.0004 21.9425 14.5527 21.9425 14.0004C21.9425 13.7763 21.8673 13.5588 21.7289 13.3826L12.7863 2.00088C12.4451 1.56661 11.8165 1.49116 11.3822 1.83237C11.3195 1.88162 11.2629 1.93819 11.2137 2.00088Z"
                        })
                    })
                }, a.UploadIcon, void 0, {
                    size: 24
                })
        },
        631153: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SuperReactionIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("82169");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M15.4 1.53A11 11 0 0 0 1.63 15.68c1.4-1.2 3.8-.81 4.54 1.18l.26.7.7.27c2 .73 2.4 3.14 1.19 4.54A11 11 0 0 0 22.47 8.6a2.93 2.93 0 0 1-5.21-.57l-.34-.93a.05.05 0 0 0-.03-.03l-.93-.34a2.93 2.93 0 0 1-.56-5.2ZM6.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-2.79.54c.27-.43.02-.95-.43-1.09l-4.06-1.23c-.45-.14-.94.15-.96.66a3.02 3.02 0 0 0 2.05 3.06c1.29.4 2.66-.21 3.4-1.4Z",
                        clipRule: "evenodd",
                        fill: "string" == typeof l ? l : l.css,
                        className: s
                    }), (0, r.jsx)("path", {
                        d: "M19.42 3.88c.24.22.48.46.7.7a4 4 0 0 0-.12.14c-.2-.27-.45-.51-.72-.72l.14-.12Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: s
                    }), (0, r.jsx)("path", {
                        d: "M19.09.63a.97.97 0 0 1 1.82 0l.34.93a2 2 0 0 0 1.19 1.19l.93.34a.97.97 0 0 1 0 1.82l-.93.34a2 2 0 0 0-1.19 1.19l-.34.93a.97.97 0 0 1-1.82 0l-.34-.93a2 2 0 0 0-1.19-1.19l-.93-.34a.97.97 0 0 1 0-1.82l.93-.34a2 2 0 0 0 1.19-1.19l.34-.93ZM2.7 17.55a.85.85 0 0 1 1.6 0l.26.71a2 2 0 0 0 1.18 1.18l.7.26a.85.85 0 0 1 0 1.6l-.7.26a2 2 0 0 0-1.18 1.18l-.26.7a.85.85 0 0 1-1.6 0l-.26-.7a2 2 0 0 0-1.18-1.18l-.7-.26a.85.85 0 0 1 0-1.6l.7-.26a2 2 0 0 0 1.18-1.18l.26-.7Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: s
                    })]
                })
            }
        },
        731935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserSquareIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("82169");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
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
//# sourceMappingURL=93734.276160e541168e4ad8ae.js.map