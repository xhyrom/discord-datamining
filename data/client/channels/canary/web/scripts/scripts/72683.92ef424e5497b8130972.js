(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["72683"], {
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
            var r, i, l = n("1065");
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
                s = n("1065"),
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
                l = n.n(i),
                a = n("551042"),
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
                    transitionState: a,
                    icons: m,
                    fileSize: _,
                    onClose: E
                } = e, I = (0, u.useUID)(), T = null != m ? m : d.DEFAULT_FILE_UPLOAD_ICONS;
                return i ? (0, r.jsx)(o.default, {
                    transitionState: a,
                    onClose: E,
                    fileSize: _
                }) : (0, r.jsx)(s.ModalRoot, {
                    size: s.ModalSize.DYNAMIC,
                    "aria-labelledby": I,
                    transitionState: a,
                    children: (0, r.jsx)("div", {
                        className: l(f.uploadDropModal, f.error),
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
                (0, a.openModal)(t => (0, r.jsx)(m, {
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
        862013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function() {
                    return l
                },
                MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
                    return a
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
            let l = (0, r.uid)(),
                a = (0, r.uid)(),
                s = (0, r.uid)(),
                o = (0, r.uid)();

            function u() {
                [{
                    id: l,
                    text: ","
                }, {
                    id: a,
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
        626301: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                navigateToPremiumMarketingPage: function() {
                    return l
                }
            });
            var r = n("79112"),
                i = n("49111");
            let l = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                r.default.open(i.UserSettingsSections.PREMIUM, null, {
                    openWithoutBackstack: e
                })
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
                    return p
                },
                useShouldFetchChurnOffer: function() {
                    return S
                }
            }), n("222007");
            var r = n("884691"),
                i = n("866227"),
                l = n.n(i),
                a = n("446674"),
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
                    let t = (0, a.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
                        n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
                    return null != n && l(Date.now()) <= l(n)
                },
                T = () => {
                    var e;
                    let t = (0, a.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
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
                C = async () => {
                    let e = null;
                    try {
                        var t;
                        let n = await s.default.post({
                            url: _.Endpoints.CHURN_USER_OFFER
                        });
                        e = null !== (t = n.body.offer) && void 0 !== t ? t : null
                    } catch (e) {}
                    return e
                }, p = e => {
                    let [t, n] = r.useState(!1), [i, l] = r.useState(!1), [a, s] = r.useState(null);
                    if (e) return {
                        churnUserDiscountOffer: a,
                        isFetchingChurnDiscountOffer: i
                    };
                    let o = () => {
                        n(!0), l(!1)
                    };
                    return !i && !t && (l(!0), C().then(e => {
                        s(e), o()
                    }).catch(e => {
                        o()
                    })), {
                        churnUserDiscountOffer: a,
                        isFetchingChurnDiscountOffer: i
                    }
                }, S = () => {
                    let {
                        enabled: e
                    } = c.default.useExperiment({
                        location: "useShouldFetchChurnOffer"
                    }, {
                        autoTrackExposure: !1
                    }), t = (0, a.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()), n = I(), r = null !== t && t.hasPremiumNitroMonthly, i = null != t && null != t.trialId;
                    return e && r && !i && !n
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
        77860: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
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
            var l = i
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
        843647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("446674"),
                i = n("697218"),
                l = n("10514"),
                a = n("719923"),
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
                } = e, m = (0, r.useStateFromStores)([i.default], () => i.default.getCurrentUser()), _ = (0, c.usePremiumTrialOffer)(), E = null != _, I = null != m && (0, a.isPremium)(m);
                (0, s.useMaybeFetchPremiumLikelihood)(n);
                let {
                    enabled: T,
                    useExpectedValue: C,
                    useLikelihood: p
                } = n.useExperiment({
                    location: null != f ? f : "1"
                }, {
                    autoTrackExposure: !I && !E && t
                }), {
                    premiumLikelihood: S,
                    fetched: P
                } = (0, r.useStateFromStoresObject)([o.default], () => {
                    let e = o.default.getState();
                    return {
                        fetched: e.fetched,
                        premiumLikelihood: e.premiumLikelihood
                    }
                }), R = (0, r.useStateFromStores)([l.default], () => l.default.isLoadedForSKUs([d.PremiumSubscriptionSKUs.TIER_0, d.PremiumSubscriptionSKUs.TIER_2])), O = !I && T && !E && (C ? !P || !R : !P), L = d.PremiumTypes.TIER_2;
                if (E) {
                    let e = _.subscription_trial;
                    (null == e ? void 0 : e.sku_id) === d.PremiumSubscriptionSKUs.TIER_0 ? L = d.PremiumTypes.TIER_0 : (null == e ? void 0 : e.sku_id) === d.PremiumSubscriptionSKUs.TIER_2 && (L = d.PremiumTypes.TIER_2)
                } else if (!I && !O && T) {
                    if (C) {
                        let {
                            amount: e
                        } = (0, a.getPrice)(d.SubscriptionPlans.PREMIUM_MONTH_TIER_0), {
                            amount: t
                        } = (0, a.getPrice)(d.SubscriptionPlans.PREMIUM_MONTH_TIER_2);
                        L = (0, u.getHigherExpectedValue)(S, e, t)
                    } else p && (L = (0, u.getHighestLikelihood)(S))
                }
                return {
                    isLoading: O,
                    suggestedPremiumType: L
                }
            }
        },
        154889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                discountOfferHasTier: function() {
                    return d
                },
                usePremiumDiscountOffer: function() {
                    return m
                }
            }), n("222007");
            var r = n("884691"),
                i = n("446674"),
                l = n("862337"),
                a = n("697218"),
                s = n("340412"),
                o = n("719923"),
                u = n("646718");

            function c(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function d(e, t) {
                var n;
                if (null == e) return !1;
                let r = new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map(e => u.SubscriptionPlanInfo[e].skuId));
                return r.has(t)
            }

            function f(e) {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.getUserDiscountOffer(e)),
                    [n, u] = r.useState(c(t)),
                    d = (0, i.useStateFromStores)([a.default], () => (0, o.isPremium)(a.default.getCurrentUser()));
                return r.useEffect(() => {
                    if (null == t || null == t.expires_at) return;
                    let e = new l.Timeout,
                        r = () => {
                            let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                            null == e || e.start(i, () => {
                                !n && c(t) ? u(!0) : r()
                            })
                        };
                    return r(), () => e.stop()
                }, [n, t]), n || d ? null : t
            }

            function m() {
                var e, t;
                let n = f(u.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID),
                    r = f(u.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID),
                    i = f(u.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID),
                    l = f(u.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID);
                return null !== (t = null !== (e = null != n ? n : r) && void 0 !== e ? e : i) && void 0 !== t ? t : l
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
                    return C
                },
                shouldShowOutboundPromotionNotice: function() {
                    return p
                },
                shouldShowOutboundPromotionOnPlatform: function() {
                    return S
                },
                isOutboundPromotionRedeemableByTrialUsers: function() {
                    return P
                },
                isTrialUserEligibleToSeeOutboundPromotion: function() {
                    return R
                }
            }), n("702976"), n("781738");
            var r = n("872717"),
                i = n("819855"),
                l = n("915639"),
                a = n("521012"),
                s = n("568734"),
                o = n("773336"),
                u = n("807345"),
                c = n("646718"),
                d = n("49111");

            function f(e, t) {
                let n = (0, i.isThemeDark)(t) ? "logo-dark" : "logo-light",
                    r = window.GLOBAL_ENV.CDN_HOST,
                    l = "?size=256";
                return null != r ? "".concat(location.protocol, "//").concat(r, "/promotions/").concat(e, "/").concat(n).concat(l) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/").concat(e, "/").concat(n).concat(l)
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
                let e = await r.default.get({
                        url: d.Endpoints.CLAIMED_OUTBOUND_PROMOTION_CODES,
                        query: {
                            locale: l.default.locale
                        },
                        oldFormErrors: !0
                    }),
                    t = e.body;
                return t.map(E)
            }
            async function T(e) {
                let t = await r.default.post({
                        url: d.Endpoints.CLAIM_OUTBOUND_PROMOTION_CODE(e)
                    }),
                    n = t.body;
                return E(n)
            }

            function C(e, t) {
                return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e)) : t.outboundRedemptionPageLink
            }

            function p() {
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
                    l = u.default.lastDismissedOutboundPromotionStartDate,
                    o = a.default.getPremiumTypeSubscription(),
                    d = (null == o ? void 0 : o.trialId) != null,
                    f = d ? i.filter(e => P(e)) : i;
                return 0 !== f.length && (null == l || f.some(e => {
                    let {
                        startDate: t
                    } = e;
                    return new Date(t) > new Date(l)
                }))
            }

            function S(e) {
                return !(0, o.isIOS)() || !(0, s.hasFlag)(e.flags, c.PromotionFlags.IS_BLOCKED_IOS)
            }

            function P(e) {
                return (0, s.hasFlag)(e.flags, c.PromotionFlags.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS)
            }

            function R(e, t) {
                return null != t[e.id] || P(e)
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
                l = n("913144"),
                a = n("316718"),
                s = n("915639"),
                o = n("872173"),
                u = n("772465"),
                c = n("44678"),
                d = n("807345"),
                f = n("646718"),
                m = n("49111");
            async function _() {
                if (!d.default.isFetchingActiveOutboundPromotions) try {
                    l.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH"
                    });
                    let t = u.PromotionPreviewExperiment.getCurrentConfig({
                            location: "5731cc_1"
                        }, {
                            autoTrackExposure: !1
                        }).previewEnabled ? m.Endpoints.OUTBOUND_PROMOTIONS_PREVIEW : m.Endpoints.OUTBOUND_PROMOTIONS,
                        n = await r.default.get({
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
                        let t = await (0, a.fetchUserEntitlementsForApplication)(f.PREMIUM_SUBSCRIPTION_APPLICATION, !1),
                            n = t.find(e => null != e.promotion_id && !0 === e.consumed);
                        o = null !== (e = null == n ? void 0 : n.promotion_id) && void 0 !== e ? e : null
                    }
                    l.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS",
                        activeOutboundPromotions: i.map(e => (0, c.outboundPromotionFromServer)(e)),
                        consumedInboundPromotionId: o
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL"
                    })
                }
            }
            async function E() {
                if (!d.default.isFetchingActiveBogoPromotion) try {
                    l.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH"
                    });
                    let e = await r.default.get({
                            url: m.Endpoints.BOGO_PROMOTIONS,
                            query: {
                                locale: s.default.locale
                            }
                        }),
                        t = e.body;
                    l.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
                        activePromotion: (0, c.bogoPromotionFromServer)(t)
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL"
                    })
                }
            }
            var I = {
                fetchActiveOutboundPromotions: _,
                dismissOutboundPromotionNotice: function() {
                    l.default.dispatch({
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
                    return I
                }
            }), n("222007");
            var r = n("884691"),
                i = n("446674"),
                l = n("913144"),
                a = n("697218"),
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
                    n = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
                    _ = (0, o.useHasActiveTrial)(),
                    [E, I] = r.useState(!1),
                    [T, C] = r.useState([]);
                r.useEffect(() => {
                    null != e && l.default.wait(() => c.default.markOutboundPromotionsSeen())
                }, [e]);
                let p = r.useCallback(e => {
                        C(t => t.some(t => {
                            let {
                                promotion: n
                            } = t;
                            return n.id === e.promotion.id
                        }) ? t : [...t, e])
                    }, []),
                    S = (0, s.isPremiumExactly)(n, f.PremiumTypes.TIER_2);
                r.useEffect(() => {
                    l.default.wait(() => {
                        S && null == e && c.default.fetchActiveOutboundPromotions()
                    })
                }, [e, S]), r.useEffect(() => {
                    l.default.wait(() => {
                        (0, u.fetchClaimedOutboundPromotionCodes)().then(e => {
                            C(e), I(!0)
                        }).catch(() => {
                            C([]), I(!0)
                        })
                    })
                }, []);
                let P = {};
                for (let {
                        code: e,
                        promotion: t
                    }
                    of T) P[t.id] = e;
                let R = new Set(t.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    })),
                    O = T.filter(e => {
                        let {
                            promotion: t
                        } = e;
                        return !R.has(t.id)
                    }),
                    L = E && (!S || null != e);
                return {
                    promotionsLoaded: L,
                    activeOutboundPromotions: t.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e) && (!_ || (0, u.isTrialUserEligibleToSeeOutboundPromotion)(e, P))),
                    claimedEndedOutboundPromotions: O.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e.promotion)),
                    claimedOutboundPromotionCodeMap: P,
                    addClaimedOutboundPromotionCode: p
                }
            }

            function E() {
                let e = (0, i.useStateFromStores)([d.default], () => d.default.lastSeenOutboundPromotionStartDate),
                    t = (0, o.useHasActiveTrial)(),
                    n = m(),
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
                m = null !== (n = null === (t = l.default.settings.userContent) || void 0 === t ? void 0 : null === (e = t.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : null
            }
            class I extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (s = e), this.waitFor(l.default), this.syncWith([l.default], E)
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
                    s = a(), c = !1, d = null, o = !1, u = null, f = []
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
                l = n("986681"),
                a = n("719923"),
                s = n("153160"),
                o = n("809071"),
                u = n("154889"),
                c = n("646718");
            let d = e => {
                    var t, n, d, f;
                    let {
                        paymentSourceId: m
                    } = (0, l.default)({
                        isGift: !1,
                        activeSubscription: null
                    }), _ = (0, a.castPremiumSubscriptionAsSkuId)(c.SubscriptionPlanInfo[e].skuId), {
                        priceOptions: E
                    } = (0, i.default)({
                        activeSubscription: null,
                        skuIDs: [_],
                        paymentSourceId: m,
                        isGift: !1
                    }), I = (0, u.usePremiumDiscountOffer)(), [T, C] = (0, o.useSubscriptionInvoicePreview)({
                        items: [{
                            planId: e,
                            quantity: 1
                        }],
                        renewal: !0,
                        preventFetch: !(null != I),
                        paymentSourceId: m,
                        currency: E.currency
                    }), p = null == T ? void 0 : null === (f = T.invoiceItems) || void 0 === f ? void 0 : null === (d = f.find(t => t.subscriptionPlanId === e)) || void 0 === d ? void 0 : null === (n = d.discounts) || void 0 === n ? void 0 : null === (t = n.find(e => e.type === r.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount, S = (0, a.getPrice)(e, !1, !1, E);
                    return (0, s.formatPrice)(S.amount - (null != p ? p : 0), S.currency)
                },
                f = (e, t, n) => {
                    var u, d, f, m;
                    let {
                        paymentSourceId: _
                    } = (0, l.default)({
                        isGift: !1,
                        activeSubscription: null
                    }), E = (0, a.castPremiumSubscriptionAsSkuId)(c.SubscriptionPlanInfo[t].skuId), {
                        priceOptions: I
                    } = (0, i.default)({
                        activeSubscription: null,
                        skuIDs: [E],
                        paymentSourceId: _,
                        isGift: !1
                    }), [T, C] = (0, o.useSubscriptionInvoicePreview)({
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
                    }), p = null == T ? void 0 : null === (m = T.invoiceItems) || void 0 === m ? void 0 : null === (f = m.find(e => e.subscriptionPlanId === t)) || void 0 === f ? void 0 : null === (d = f.discounts) || void 0 === d ? void 0 : null === (u = d.find(e => e.type === r.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === u ? void 0 : u.amount, S = (0, a.getPrice)(t, !1, !1, I);
                    return (0, s.formatPrice)(S.amount - (null != p ? p : 0), S.currency)
                }
        },
        641078: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsEligibleForBogoPromotion: function() {
                    return x
                },
                maybeFetchActiveBogoPromotion: function() {
                    return v
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
                l = n("65597"),
                a = n("151426"),
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
                C = n("705337"),
                p = n("935566"),
                S = n("917247"),
                P = n("538620"),
                R = n("694540"),
                O = n("807345"),
                L = n("646718"),
                M = n("49111"),
                g = n("782340");

            function h(e) {
                var t, n, r;
                let {
                    experimentEnabled: l,
                    premiumSubscription: a,
                    mostRecentSubscription: s
                } = e, o = !1, u = !1;
                if (null != s && s.status === M.SubscriptionStatusTypes.ENDED) {
                    let e = (null === (t = s.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? i(s.metadata.ended_at) : null,
                        r = null === (n = (0, E.getPremiumPlanItem)(s)) || void 0 === n ? void 0 : n.planId,
                        l = null != r && E.default.getPremiumType(r) === L.PremiumTypes.TIER_2;
                    u = null != e && l && e.add(10, "days").isAfter(i())
                }
                if (null != a) {
                    let e = null === (r = (0, E.getPremiumPlanItem)(a)) || void 0 === r ? void 0 : r.planId,
                        t = null != e && E.default.getPremiumType(e) === L.PremiumTypes.TIER_2,
                        n = f.default.getCurrentUser(),
                        i = (null == a ? void 0 : a.trialId) != null && E.default.isPremiumExactly(n, L.PremiumTypes.TIER_0);
                    o = t || i
                }
                return !l || o || u
            }

            function x() {
                var e;
                let {
                    paymentsBlocked: t
                } = u.default.useExperiment({
                    location: "153d31_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    promotion: n
                } = (0, R.useBogoPromotion)(), {
                    enabled: r
                } = (0, p.default)(), {
                    mostRecentSubscription: i,
                    premiumSubscription: a
                } = (0, l.useStateFromStoresObject)([m.default], () => ({
                    mostRecentSubscription: m.default.getMostRecentPremiumTypeSubscription(),
                    premiumSubscription: m.default.getPremiumTypeSubscription()
                })), s = (0, S.usePremiumTrialOffer)(), c = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf();
                (0, o.default)(c, 1e3, void 0, c + 2e3 < Date.now());
                let d = !h({
                        experimentEnabled: r,
                        premiumSubscription: a,
                        mostRecentSubscription: i
                    }),
                    f = d && null == s && null != n && !t,
                    _ = Date.now(),
                    {
                        enabled: E
                    } = C.default.useExperiment({
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
                    } = (0, p.isBogoPromotionExperimentEnabled)(),
                    {
                        enabled: l
                    } = C.default.getCurrentConfig({
                        location: "153d31_4"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: a
                    } = T.BOGOAnnouncementModalExperiment.getCurrentConfig({
                        location: "153d31_5"
                    }, {
                        autoTrackExposure: !1
                    });
                if (n || r || !i || !a && !l) return !1;
                if (_.default.shouldFetchOffer() && await I.default.fetchUserTrialOffer(), _.default.hasFetchedOffer() && _.default.hasAnyUnexpiredOffer()) return !1;
                !m.default.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(L.PremiumSubscriptionSKUs.TIER_2)) && await (0, s.fetchMostRecentSubscription)(), !m.default.hasFetchedSubscriptions() && await (0, s.fetchSubscriptions)();
                let o = m.default.getMostRecentPremiumTypeSubscription(),
                    c = m.default.getPremiumTypeSubscription();
                return !h({
                    experimentEnabled: i,
                    premiumSubscription: c,
                    mostRecentSubscription: o
                })
            }
            async function v() {
                let e = await N();
                if (!e) return;
                let t = O.default.bogoPromotion;
                if (null != t) {
                    let e = new Date(t.endDate).valueOf();
                    if (e >= Date.now()) return
                }
                await (0, P.fetchActiveBogoPromotion)()
            }
            async function A() {
                let e = O.default.bogoPromotion,
                    t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
                    n = (0, c.isDismissibleContentDismissed)(a.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL),
                    r = await N(),
                    {
                        enabled: i
                    } = p.BogoPromotionExperiment.getCurrentConfig({
                        location: "153d31_6"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: l
                    } = T.BOGOAnnouncementModalExperiment.getCurrentConfig({
                        location: "153d31_7"
                    }, {
                        autoTrackExposure: t && i && !n && r
                    });
                return t && l && i && !n && r
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
                        return g.default.Messages.NITRO_BADGE_TEXT;
                    default:
                        return g.default.Messages.BOGO_PILL
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
                    return w
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
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
                C = n("393414"),
                p = n("945330"),
                S = n("41250"),
                P = n("379863"),
                R = n("216422"),
                O = n("719923"),
                L = n("286235"),
                M = n("626301"),
                g = n("917247"),
                h = n("635956"),
                x = n("400307"),
                N = n("646718"),
                v = n("49111"),
                A = n("782340"),
                U = n("821535"),
                b = n("481927");

            function D(e) {
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

            function y(e) {
                var t, n, i;
                let {
                    className: l,
                    children: s,
                    withBottomMargin: o,
                    discountOffer: u,
                    trialOffer: c
                } = e, d = null !== (t = null == c ? void 0 : c.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at, f = null == c ? void 0 : c.subscription_trial, m = null !== (i = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == f ? void 0 : f.sku_id) && void 0 !== i ? i : N.PremiumSubscriptionSKUs.TIER_2;
                return (0, r.jsxs)("div", {
                    className: a(l, U.gradientUpsellWrapper, {
                        [U.gradientUpsellWrapperTier0]: m === N.PremiumSubscriptionSKUs.TIER_0,
                        [U.gradientUpsellWrapperTier2]: m === N.PremiumSubscriptionSKUs.TIER_2,
                        [U.gradientUpsellWrapperWithBottomMargin]: o
                    }),
                    children: [(0, r.jsxs)("div", {
                        className: U.logo,
                        children: [(0, r.jsx)(R.default, {
                            className: U.logoIcon
                        }), m === N.PremiumSubscriptionSKUs.TIER_0 && (0, r.jsx)(P.default, {
                            className: U.logoWordmark
                        }), m === N.PremiumSubscriptionSKUs.TIER_2 && (0, r.jsx)(S.default, {
                            className: U.logoWordmark
                        })]
                    }), (0, r.jsx)(_.Text, {
                        variant: "text-md/medium",
                        className: U.copy,
                        color: "none",
                        children: s
                    }), (0, r.jsx)(x.PremiumPillWithSparkles, {
                        text: null != u ? A.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                            percent: u.discount.amount
                        }) : A.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        colorOptions: m === N.PremiumSubscriptionSKUs.TIER_0 ? x.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : x.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
                    }), (0, r.jsx)(_.Text, {
                        variant: "eyebrow",
                        className: U.countdownText,
                        children: D(d)
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
                    discountOffer: c
                } = e, [d, f] = i.useState(!1), m = null != c ? A.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                    percent: c.discount.amount
                }) : (0, O.formatTrialCtaIntervalDuration)({
                    intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
                    intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                });
                return (0, r.jsx)(h.default, {
                    className: l,
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
                        f(!1), e && (null == a || a())
                    },
                    buttonText: m
                })
            }

            function F(e) {
                var t, n;
                let i = null === (t = (0, g.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial,
                    l = null !== (n = null == i ? void 0 : i.sku_id) && void 0 !== n ? n : N.PremiumSubscriptionSKUs.TIER_2;
                return (0, r.jsx)(_.Text, {
                    variant: "text-xs/bold",
                    className: a(U.trialBadge, e.className, {
                        [U.trialBadgeGradientTier0]: l === N.PremiumSubscriptionSKUs.TIER_0,
                        [U.trialBadgeGradientTier2]: l === N.PremiumSubscriptionSKUs.TIER_2
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
                    trialOffer: l,
                    discountOffer: a
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
                        discountOffer: a,
                        trialOffer: l
                    })]
                })
            }

            function H(e) {
                let {
                    onClose: t,
                    analyticsLocationObject: n
                } = e, i = (0, g.usePremiumTrialOffer)();
                return (0, r.jsxs)("div", {
                    className: U.tryOutUpsellContainer,
                    children: [(0, r.jsx)(x.PremiumPillWithSparkles, {
                        className: U.topRimPill,
                        text: A.default.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
                        colorOptions: x.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
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
                        className: U.header,
                        variant: "heading-xl/semibold",
                        children: t
                    }), null != n && (0, r.jsx)(_.Text, {
                        className: U.context,
                        variant: "text-md/normal",
                        children: n
                    }), (0, r.jsx)(y, {
                        trialOffer: l,
                        discountOffer: a,
                        children: i
                    })]
                })
            }

            function w(e) {
                let {
                    headingText: t,
                    context: i,
                    children: l,
                    onClose: s,
                    type: u,
                    subscriptionTier: c,
                    analyticsLocationObject: S,
                    trialOffer: P,
                    discountOffer: R
                } = e, M = (0, d.useStateFromStores)([I.default], () => I.default.useReducedMotion), g = (0, E.default)();
                switch (u) {
                    case N.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL:
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(_.Clickable, {
                                className: U.upsellClose,
                                onClick: s,
                                children: (0, r.jsx)(p.default, {})
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
                                }), (0, r.jsx)(y, {
                                    trialOffer: P,
                                    discountOffer: R,
                                    children: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                        planName: (0, O.getDisplayNameFromSku)(c),
                                        onClick: () => (0, C.transitionTo)(v.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, r.jsx)(B, {
                                subscriptionTier: c,
                                onClose: s,
                                analyticsLocationObject: {
                                    section: v.AnalyticsSections.EXPRESSION_PICKER,
                                    object: v.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: P,
                                discountOffer: R
                            })]
                        });
                    case N.PremiumUpsellTypes.STICKER_PICKER_UPSELL:
                        return o(null != l, "You must specify children for this upsell type"), (0, r.jsxs)(r.Fragment, {
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
                                }), (0, r.jsx)(y, {
                                    trialOffer: P,
                                    discountOffer: R,
                                    children: A.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                        planName: (0, O.getDisplayNameFromSku)(c),
                                        onClick: () => (0, C.transitionTo)(v.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, r.jsx)(B, {
                                subscriptionTier: c,
                                onClose: s,
                                analyticsLocationObject: {
                                    section: v.AnalyticsSections.EXPRESSION_PICKER,
                                    object: v.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: P,
                                discountOffer: R
                            })]
                        });
                    case N.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
                        o(null != l, "You must specify children for this upsell type");
                        let h = (0, m.isThemeLight)(g) ? n("602291") : n("609708");
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)("div", {
                                className: U.contentContainer,
                                children: [(0, r.jsx)("img", {
                                    alt: "",
                                    className: U.upsellImage,
                                    src: h
                                }), (0, r.jsx)(_.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: A.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                                }), (0, r.jsx)(y, {
                                    trialOffer: P,
                                    discountOffer: R,
                                    children: A.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
                                        planName: (0, O.getDisplayNameFromSku)(c),
                                        onClick: () => (0, C.transitionTo)(v.Routes.APPLICATION_STORE)
                                    })
                                })]
                            }), (0, r.jsx)(B, {
                                subscriptionTier: c,
                                onClose: s,
                                analyticsLocationObject: {
                                    section: v.AnalyticsSections.EMOJI_PICKER_POPOUT,
                                    object: v.AnalyticsObjects.BUTTON_CTA
                                },
                                trialOffer: P,
                                discountOffer: R
                            })]
                        });
                    case N.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                    case N.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                    case N.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                    case N.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                        let x;
                        switch (u) {
                            case N.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
                                x = A.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
                                    planName: (0, O.getDisplayNameFromSku)(c),
                                    premiumMaxSize: c === N.PremiumSubscriptionSKUs.TIER_0 ? A.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : A.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
                                    onClick: () => {
                                        (0, C.transitionTo)(v.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                });
                                break;
                            case N.PremiumUpsellTypes.BURST_REACTION_UPSELL:
                                x = A.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                                    planName: (0, O.getDisplayNameFromSku)(c),
                                    onClick: () => {
                                        (0, C.transitionTo)(v.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                });
                                break;
                            case N.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
                                x = A.default.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
                                    onClick: () => {
                                        (0, C.transitionTo)(v.Routes.APPLICATION_STORE), null == s || s(), (0, f.closeAllModals)()
                                    }
                                });
                                break;
                            case N.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
                                x = A.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                                    premiumMaxMessageLength: v.MAX_MESSAGE_LENGTH_PREMIUM,
                                    onClick: () => {
                                        (0, C.transitionTo)(v.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                })
                        }
                        return o(null != x, "There must be some upsell context"), (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsxs)("div", {
                                className: U.contentContainer,
                                children: [(0, r.jsx)(_.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: t
                                }), (0, r.jsx)(_.Text, {
                                    variant: "text-md/normal",
                                    children: i
                                }), (0, r.jsx)(y, {
                                    trialOffer: P,
                                    discountOffer: R,
                                    children: x
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
                            }), (0, r.jsx)(y, {
                                trialOffer: P,
                                discountOffer: R,
                                children: A.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                                    planName: (0, O.getDisplayNameFromSku)(c),
                                    onClick: () => (0, C.transitionTo)(v.Routes.APPLICATION_STORE)
                                })
                            }), (0, r.jsx)(j, {
                                className: U.upsellButton,
                                subscriptionTier: c,
                                analyticsLocationObject: S,
                                onClose: s,
                                trialOffer: P,
                                discountOffer: R
                            })]
                        });
                    case N.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
                        return o(null != l, "You must specify children for this upsell type"), (0, r.jsx)(y, {
                            trialOffer: P,
                            discountOffer: R,
                            children: A.default.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
                                onClick: () => {
                                    (0, C.transitionTo)(v.Routes.APPLICATION_STORE), (0, T.closeEditor)()
                                }
                            })
                        });
                    case N.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
                        return (0, r.jsxs)("div", {
                            className: a(U.messageLengthUpsellContainer, {
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
                            }), (0, r.jsx)(y, {
                                trialOffer: P,
                                discountOffer: R,
                                className: U.messageLengthBrandedContainer,
                                subscriptionTier: c,
                                children: A.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                                    premiumMaxMessageLength: v.MAX_MESSAGE_LENGTH_PREMIUM,
                                    onClick: () => {
                                        (0, C.transitionTo)(v.Routes.APPLICATION_STORE), null == s || s()
                                    }
                                })
                            }), (0, r.jsx)(j, {
                                subscriptionTier: c,
                                analyticsLocationObject: S,
                                onClose: s,
                                trialOffer: P,
                                discountOffer: R
                            })]
                        });
                    case N.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL:
                    case N.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
                        return (0, r.jsx)(H, {});
                    case N.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL:
                    case N.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL:
                    case N.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL:
                    case N.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL:
                    case N.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
                    case N.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
                    case N.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED:
                        return (0, r.jsx)(k, {
                            trialOffer: P,
                            discountOffer: R,
                            headingText: t,
                            context: i,
                            children: l
                        });
                    default:
                        return L.default.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(u)), (0, r.jsx)(k, {
                            headingText: t,
                            context: i,
                            children: l,
                            trialOffer: P,
                            discountOffer: R
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
                l = n.n(i),
                a = n("446674"),
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
                C = n("978679"),
                p = n("216422"),
                S = n("719923"),
                P = n("646718"),
                R = n("49111"),
                O = n("782340"),
                L = n("917746"),
                M = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: i,
                        onClick: M,
                        size: g,
                        className: h,
                        trialId: x,
                        isTrialCTA: N,
                        buttonText: v,
                        buttonTextClassName: A,
                        iconClassName: U,
                        postSuccessGuild: b,
                        onSubscribeModalClose: D,
                        premiumModalAnalyticsLocation: y,
                        showIcon: j = !0,
                        disableShine: F,
                        applicationId: B,
                        giftMessage: H,
                        overrideDisabledButtonText: k,
                        shinyButtonClassName: w,
                        ...G
                    } = e, K = (0, a.useStateFromStores)([_.default], () => _.default.getCurrentUser()), V = (0, a.useStateFromStores)([I.default], () => I.default.isFocused()), Z = (0, a.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), {
                        analyticsLocations: W
                    } = (0, u.default)(), z = e => {
                        if (e.preventDefault(), null == K) {
                            (0, f.transitionTo)(R.Routes.LOGIN);
                            return
                        }
                        if (null == M || M(e), (null == Z ? void 0 : Z.status) === R.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, c.trackPremiumSettingsPaneOpened)(), o.default.open(R.UserSettingsSections.PREMIUM), null == D || D(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: i,
                                isGift: l,
                                subscriptionTier: a,
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
                            let I = R.AnalyticsObjectTypes.BUY;
                            null != o ? I = R.AnalyticsObjectTypes.TRIAL : l && (I = R.AnalyticsObjectTypes.GIFT), (0, d.default)({
                                isGift: l,
                                initialPlanId: null,
                                subscriptionTier: a,
                                analyticsLocations: f,
                                analyticsObject: {
                                    object: R.AnalyticsObjects.BUTTON_CTA,
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
                            trialId: x,
                            postSuccessGuild: b,
                            onSubscribeModalClose: D,
                            analyticsLocations: W,
                            premiumModalAnalyticsLocation: y,
                            applicationId: B,
                            giftMessage: H
                        })
                    };
                    if (N) return (0, r.jsxs)(s.Button, {
                        size: g,
                        className: h,
                        innerClassName: L.premiumSubscribeButton,
                        look: s.Button.Looks.INVERTED,
                        onClick: z,
                        ...G,
                        children: [j && (0, r.jsx)(p.default, {
                            className: L.premiumIcon
                        }), (0, r.jsx)("span", {
                            className: l(L.buttonText, A),
                            children: null != v ? v : O.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, r.jsxs)(s.Button, {
                        size: g,
                        className: h,
                        innerClassName: L.giftButton,
                        color: s.Button.Colors.PRIMARY,
                        onClick: z,
                        ...G,
                        children: [(0, r.jsx)(C.default, {
                            className: L.giftIcon
                        }), (0, r.jsx)("span", {
                            className: l(L.buttonText, A),
                            children: null != v ? v : O.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let Y = O.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        X = null != Z ? (0, S.getPremiumPlanItem)(Z) : null,
                        J = null != X ? S.default.getPremiumType(X.planId) : null == K ? void 0 : K.premiumType,
                        q = i === P.PremiumSubscriptionSKUs.TIER_2 && null != J && [P.PremiumTypes.TIER_0, P.PremiumTypes.TIER_1].includes(J);
                    q && (Y = O.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let Q = null != Z && Z.status !== R.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, m.isNoneSubscription)(Z.planId) && !q,
                        $ = Q ? null != k ? k : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, r = null, i = null;
                            if (null != t && t !== P.PremiumSubscriptionSKUs.LEGACY && t !== P.PremiumSubscriptionSKUs.TIER_0 && t !== P.PremiumSubscriptionSKUs.TIER_1 && t !== P.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: r,
                                disabledButtonTooltipText: i
                            };
                            let l = null != t ? P.PremiumSubscriptionSKUToPremiumType[(0, S.castPremiumSubscriptionAsSkuId)(t)] : null,
                                a = null != l ? P.PremiumTypeOrder[l] : null,
                                s = null != n ? P.PremiumTypeOrder[n] : null;
                            return null != s && null != a && a < s ? (r = O.default.Messages.APPLICATION_STORE_GET_PREMIUM, i = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != l && null != n && l === n ? (r = O.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, i = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == l && null != n && n === P.PremiumTypes.TIER_2 && (i = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
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
                            onClick: z,
                            innerClassName: L.premiumSubscribeButton,
                            color: i === P.PremiumSubscriptionSKUs.TIER_1 ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
                            size: g,
                            className: w,
                            wrapperClassName: h,
                            pauseAnimation: !V || F,
                            ...G,
                            ...e,
                            children: [j && (0, r.jsx)(p.default, {
                                className: l(L.premiumIcon, U)
                            }), (0, r.jsx)("span", {
                                className: l(L.buttonText, A),
                                children: null !== (n = null !== (t = null == $ ? void 0 : $.disabledButtonText) && void 0 !== t ? t : v) && void 0 !== n ? n : Y
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
                l = n("819855"),
                a = n("841098"),
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
                    } = e, m = !c && (d === o.PremiumSubscriptionSKUs.TIER_2 || null != f), _ = (0, a.default)(), E = (0, l.isThemeLight)(_) && t, I = E ? void 0 : i.default.colors.WHITE.css;
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
                    return el
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
            var r, i, l, a, s, o, u, c, d = n("37983");
            n("884691");
            var f = n("414456"),
                m = n.n(f),
                _ = n("866227"),
                E = n.n(_),
                I = n("446674"),
                T = n("669491"),
                C = n("819855"),
                p = n("77078"),
                S = n("841098"),
                P = n("206230"),
                R = n("812204"),
                O = n("685665"),
                L = n("441413"),
                M = n("915639"),
                g = n("697218"),
                h = n("521012"),
                x = n("594098"),
                N = n("491614"),
                v = n("716589"),
                A = n("46829"),
                U = n("118503"),
                b = n("41250"),
                D = n("379863"),
                y = n("216422"),
                j = n("619911"),
                F = n("698015"),
                B = n("75196"),
                H = n("240481"),
                k = n("719923"),
                w = n("309318"),
                G = n("446488"),
                K = n("182650"),
                V = n("154889"),
                Z = n("917247"),
                W = n("478968"),
                z = n("641078"),
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
                    children: (0, d.jsx)(p.Text, {
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

            function el(e) {
                let t, {
                    text: n,
                    className: r,
                    colorOptions: i = 2,
                    isPillOnBorder: l = !0
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
                return l ? (0, d.jsxs)("div", {
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

            function ea(e) {
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
                    }), (0, d.jsx)(p.Text, {
                        variant: "text-md/normal",
                        color: "always-white",
                        children: n
                    }), r ? (0, d.jsx)(L.default, {
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
                } = e, l = (0, W.useDiscountedPrice)(r);
                return (0, d.jsx)(d.Fragment, {
                    children: ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION_GENERIC.format({
                        numMonths: null !== (t = i.discount.user_usage_limit) && void 0 !== t ? t : Q.DISCOUNT_DURATION_FALLBACK,
                        discountedPrice: l,
                        regularPrice: n
                    })
                })
            }

            function eu(e) {
                var t, n, r, i, l, a;
                let {
                    isGift: s,
                    premiumTier: o,
                    offerTierMatchesCard: u,
                    offerType: c,
                    showYearlyPrice: f,
                    isStacked: _,
                    isFullScreen: T
                } = e, C = (0, I.useStateFromStores)([h.default], () => h.default.getPremiumTypeSubscription()), S = (0, I.useStateFromStores)([g.default], () => g.default.getCurrentUser()), P = (0, K.useHasDiscountApplied)(), R = (0, K.useActiveDiscountInfo)(), O = o === Q.PremiumTypes.TIER_0 ? Q.PremiumSubscriptionSKUs.TIER_0 : Q.PremiumSubscriptionSKUs.TIER_2, L = (null == C ? void 0 : C.trialId) != null ? null == S ? void 0 : S.premiumType : P ? Q.PremiumTypes.TIER_2 : null, M = (0, Z.usePremiumTrialOffer)(), x = (0, V.usePremiumDiscountOffer)(), N = null == M ? void 0 : M.subscription_trial;
                if (!s && null != L && o === L && null != C && null != C.planIdFromItems && !_) {
                    let e = null != C.trialEndsAt ? E(null == C ? void 0 : C.trialEndsAt).diff(E(), "d") : 0,
                        r = Q.SubscriptionPlanInfo[C.planIdFromItems],
                        i = k.default.formatPriceString(k.default.getDefaultPrice(r.id), r.interval);
                    return (0, d.jsx)(d.Fragment, {
                        children: (0, d.jsx)(p.Heading, {
                            variant: "heading-md/normal",
                            color: "always-white",
                            className: et.trialHeader,
                            children: 0 === c ? ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                                remainingTime: e,
                                price: i
                            }) : ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                                percent: null !== (t = null == R ? void 0 : R.percentage) && void 0 !== t ? t : Q.DISCOUNT_PERCENTAGE_FALLBACK,
                                regularPrice: i,
                                numMonths: null !== (n = null == R ? void 0 : R.duration) && void 0 !== n ? n : Q.DISCOUNT_DURATION_FALLBACK
                            })
                        })
                    })
                }
                if (!s && u && !_) {
                    let e = k.default.formatPriceString(k.default.getDefaultPrice(o === Q.PremiumTypes.TIER_0 ? Q.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : Q.SubscriptionPlans.PREMIUM_MONTH_TIER_2), Q.SubscriptionIntervalTypes.MONTH);
                    if (0 === c) return (0, d.jsx)(p.Heading, {
                        variant: "heading-md/normal",
                        color: "always-white",
                        className: et.trialHeader,
                        children: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
                            planName: (0, k.getTierDisplayName)(null !== (i = Q.PREMIUM_SKU_TO_MONTHLY_PLAN[null !== (r = null == N ? void 0 : N.sku_id) && void 0 !== r ? r : Q.PremiumSubscriptionSKUs.NONE]) && void 0 !== i ? i : Q.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
                            duration: (0, k.formatIntervalDuration)({
                                intervalType: null !== (l = null == N ? void 0 : N.interval) && void 0 !== l ? l : Q.SubscriptionIntervalTypes.DAY,
                                intervalCount: null !== (a = null == N ? void 0 : N.interval_count) && void 0 !== a ? a : 30,
                                capitalize: !1
                            }),
                            price: e
                        })
                    });
                    if (null != x) return (0, d.jsx)(p.Heading, {
                        variant: "heading-md/normal",
                        color: "always-white",
                        className: et.trialHeader,
                        children: (0, d.jsx)(eo, {
                            defaultPriceString: e,
                            subscriptionPlan: Q.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
                            discountOffer: x
                        })
                    })
                }
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(X.default, {
                        subscriptionTier: O,
                        isGift: s,
                        className: m(et.price, {
                            [et.priceStacked]: _ && T,
                            [et.priceStackedSmallScreen]: _ && !T
                        }),
                        variant: _ ? "heading-lg/extrabold" : void 0
                    }), f && (0, d.jsx)(X.default, {
                        subscriptionTier: O,
                        interval: Q.SubscriptionIntervalTypes.YEAR,
                        isGift: s,
                        className: et.price
                    })]
                })
            }

            function ec() {
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(es, {
                        Icon: F.default,
                        text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, k.getMaxFileSizeForPremiumType)(Q.PremiumTypes.TIER_0, {
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
                        Icon: y.default,
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
                    showYearlyPrice: l,
                    className: a,
                    isGift: s = !1,
                    variant: o = 0,
                    isFullScreen: u
                } = e, c = (0, I.useStateFromStores)([h.default], () => h.default.getPremiumTypeSubscription()), f = (0, I.useStateFromStores)([g.default], () => g.default.getCurrentUser()), _ = (0, Z.usePremiumTrialOffer)(), E = null == _ ? void 0 : null === (t = _.subscription_trial) || void 0 === t ? void 0 : t.sku_id, T = (null == c ? void 0 : c.trialId) != null, C = (null == c ? void 0 : c.trialId) != null ? null == f ? void 0 : f.premiumType : null, S = null != E || T, P = 1 === o;
                return (0, d.jsxs)("div", {
                    className: m(et.card, a, {
                        [et.card]: !P,
                        [et.stackedCard]: P,
                        [et.withTier0Rim]: !s && S,
                        [et.withCardHover]: !s && S,
                        [et.tier0Stacked]: P,
                        [et.tier0]: !P
                    }),
                    children: [E === Q.PremiumSubscriptionSKUs.TIER_0 ? (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(el, {
                            text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: et.topRimPill,
                            colorOptions: 0
                        }), (0, d.jsx)("div", {
                            className: et.rimGlowTier0
                        })]
                    }) : null, r && (0, d.jsx)(ea, {
                        className: et.newCircleIcon
                    }), n ? (0, d.jsx)("div", {
                        className: et.wumpusImageContainer,
                        children: (0, d.jsx)(x.default, {
                            src: en,
                            mediaLayoutType: $.MediaLayoutType.RESPONSIVE,
                            width: 270,
                            height: 242,
                            zoomable: !1
                        })
                    }) : null, s || E !== Q.PremiumSubscriptionSKUs.TIER_0 ? null : (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(el, {
                            text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: et.topRimPill,
                            colorOptions: 0
                        }), (0, d.jsx)("div", {
                            className: et.rimGlowTier0
                        })]
                    }), s || C !== Q.PremiumTypes.TIER_0 ? null : (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(el, {
                            text: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                            className: et.topRimPill,
                            colorOptions: 0
                        }), (0, d.jsx)("div", {
                            className: et.rimGlowTier0
                        })]
                    }), (0, d.jsxs)("div", {
                        className: m({
                            [et.body]: P && u,
                            [et.bodySmallScreen]: P && !u
                        }),
                        children: [(0, d.jsx)("div", {
                            className: m({
                                [et.planContainer]: P && u,
                                [et.planContainerSmallScreen]: P && !u
                            }),
                            children: (0, d.jsxs)("div", {
                                className: m({
                                    [et.subscriptionPlanInfo]: P
                                }),
                                children: [(0, d.jsx)(D.default, {
                                    className: m({
                                        [et.title]: !P,
                                        [et.tier0Title]: !P,
                                        [et.tier0TitleStacked]: P && u,
                                        [et.tier0TitleStackedSmallScreen]: P && !u
                                    })
                                }), (0, d.jsx)(eu, {
                                    isGift: s,
                                    premiumTier: Q.PremiumTypes.TIER_0,
                                    offerType: 0,
                                    offerTierMatchesCard: E === Q.PremiumSubscriptionSKUs.TIER_0,
                                    showYearlyPrice: l,
                                    isStacked: P,
                                    isFullScreen: u
                                })]
                            })
                        }), (0, d.jsxs)("div", {
                            className: m({
                                [et.perkContainer]: P && u,
                                [et.perkContainerSmallScreen]: P && !u
                            }),
                            children: [(0, d.jsxs)("div", {
                                children: [P && (0, d.jsx)(p.Heading, {
                                    variant: "heading-xxl/extrabold",
                                    className: u ? et.stackedCardTitle : et.stackedCardTitleSmallScreen,
                                    children: ee.default.Messages.NITRO_MARKETING_JUST_THE_BASICS
                                }), (0, d.jsx)("div", {
                                    className: m({
                                        [et.listItemsBasic]: P
                                    }),
                                    children: (0, d.jsx)(ec, {})
                                })]
                            }), P && i]
                        })]
                    }), !P && i, s || E !== Q.PremiumSubscriptionSKUs.TIER_0 ? null : (0, d.jsx)(J.ButtonSparkleGroup, {
                        tier: Q.PremiumTypes.TIER_0
                    })]
                })
            }

            function ef(e) {
                let {
                    featureSet: t = 0,
                    isModal: n = !1,
                    isGift: r = !1
                } = e, i = (0, I.useStateFromStores)([M.default], () => M.default.locale), l = (0, I.useStateFromStores)([G.default], () => G.default.affinities), {
                    planSelectionEnabled: a
                } = w.default.useExperiment({
                    location: "planSelection"
                }, {
                    autoTrackExposure: !1
                }), s = n && !r && l.length > 0;
                s && w.default.trackExposure({
                    location: "planSelection"
                });
                if (1 === t) return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(es, {
                        Icon: U.default,
                        text: ee.default.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
                            numBoosts: Q.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                            percentageOff: (0, H.formatPercent)(i, Q.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                        })
                    }), (0, d.jsx)(es, {
                        Icon: F.default,
                        text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, k.getMaxFileSizeForPremiumType)(Q.PremiumTypes.TIER_2, {
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
                        Icon: v.default,
                        text: ee.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    })]
                });
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(es, {
                        Icon: F.default,
                        text: ee.default.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
                            maxUploadPremium: (0, k.getMaxFileSizeForPremiumType)(Q.PremiumTypes.TIER_2, {
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
                        Icon: v.default,
                        text: ee.default.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                    }), a && s && (0, d.jsx)(q.default, {})]
                })
            }

            function em(e) {
                var t;
                let n, {
                        showWumpus: r,
                        ctaButton: i,
                        showYearlyPrice: l,
                        featureSet: a = 0,
                        className: s,
                        isGift: o = !1,
                        isModal: u = !1,
                        variant: c = 0,
                        isFullScreen: f
                    } = e,
                    _ = (0, I.useStateFromStores)([h.default], () => h.default.getPremiumTypeSubscription()),
                    E = (0, I.useStateFromStores)([g.default], () => g.default.getCurrentUser()),
                    T = (0, Z.usePremiumTrialOffer)(),
                    P = null == T ? void 0 : null === (t = T.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
                    R = (null == _ ? void 0 : _.trialId) != null ? null == E ? void 0 : E.premiumType : null,
                    O = (0, K.useIsInPremiumOfferExperience)(),
                    L = (0, V.usePremiumDiscountOffer)(),
                    M = (0, K.useHasDiscountApplied)(),
                    N = null != P || null != R ? 0 : null != L || M ? 1 : null,
                    v = 1 === c,
                    A = (0, z.useIsEligibleForBogoPromotion)(),
                    U = !o && O,
                    D = (0, z.getBOGOPillCopy)(),
                    y = (0, C.isThemeLight)((0, S.default)()),
                    j = y && v ? 5 : 2;
                return U && !v ? n = et.rimGlowTier2 : U && v && !y && (n = et.rimGlowTier2Stacked), (0, d.jsxs)("div", {
                    className: m(et.card, s, {
                        [et.withTier2Rim]: U && !v,
                        [et.withTier2RimStacked]: U && v,
                        [et.withCardHover]: U,
                        [et.tier2Stacked]: v,
                        [et.tier2]: !v
                    }),
                    children: [!o && null != L && (0, V.discountOfferHasTier)(L, Q.PremiumSubscriptionSKUs.TIER_2) && void 0 !== L.discount.amount ? (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(el, {
                            text: M ? ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : ee.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                                percent: L.discount.amount
                            }),
                            className: et.topRimPill,
                            colorOptions: j
                        }), (0, d.jsx)("div", {
                            className: n
                        })]
                    }) : null, o || P !== Q.PremiumSubscriptionSKUs.TIER_2 ? null : (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(el, {
                            text: ee.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                            className: et.topRimPill,
                            colorOptions: j
                        }), (0, d.jsx)("div", {
                            className: n
                        })]
                    }), o || R !== Q.PremiumTypes.TIER_2 ? null : (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(el, {
                            text: ee.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                            className: et.topRimPill,
                            colorOptions: j
                        }), (0, d.jsx)("div", {
                            className: n
                        })]
                    }), !o && M && (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(el, {
                            text: ee.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                            className: et.topRimPill,
                            colorOptions: j
                        }), (0, d.jsx)("div", {
                            className: n
                        })]
                    }), r ? (0, d.jsx)("div", {
                        className: et.wumpusImageContainer,
                        children: (0, d.jsx)(x.default, {
                            src: er,
                            mediaLayoutType: $.MediaLayoutType.RESPONSIVE,
                            width: 270,
                            height: 242,
                            zoomable: !1
                        })
                    }) : null, (0, d.jsxs)("div", {
                        className: m({
                            [et.body]: v && f,
                            [et.bodySmallScreen]: v && !f
                        }),
                        children: [(0, d.jsx)("div", {
                            className: m({
                                [et.planContainer]: v && f,
                                [et.planContainerSmallScreen]: v && !f
                            }),
                            children: (0, d.jsxs)("div", {
                                className: m({
                                    [et.subscriptionPlanInfo]: v
                                }),
                                children: [(0, d.jsx)(b.default, {
                                    className: m({
                                        [et.title]: !v,
                                        [et.tier2Title]: !v,
                                        [et.tier2TitleStacked]: v && f,
                                        [et.tier2TitleStackedSmallScreen]: v && !f
                                    })
                                }), !o && P !== Q.PremiumSubscriptionSKUs.TIER_2 && A && (0, d.jsx)(p.Text, {
                                    variant: "text-xs/bold",
                                    className: et.freeTrialPillInline,
                                    children: D
                                }), (0, d.jsx)(eu, {
                                    isGift: o,
                                    premiumTier: Q.PremiumTypes.TIER_2,
                                    offerType: N,
                                    offerTierMatchesCard: P === Q.PremiumSubscriptionSKUs.TIER_2 || (0, V.discountOfferHasTier)(L, Q.PremiumSubscriptionSKUs.TIER_2),
                                    showYearlyPrice: l,
                                    isStacked: v,
                                    isFullScreen: f
                                })]
                            })
                        }), (0, d.jsxs)("div", {
                            className: m({
                                [et.perkContainer]: v && f,
                                [et.perkContainerSmallScreen]: v && !f
                            }),
                            children: [(0, d.jsxs)("div", {
                                children: [v && (0, d.jsx)(p.Heading, {
                                    className: m({
                                        [et.stackedCardTitle]: f,
                                        [et.stackedCardTitleSmallScreen]: !f
                                    }),
                                    variant: "heading-xxl/extrabold",
                                    children: ee.default.Messages.NITRO_MARKETING_CARDS_SUPERCHARGE_YOUR_DISCORD
                                }), (0, d.jsx)("div", {
                                    className: m({
                                        [et.listItems]: v
                                    }),
                                    children: (0, d.jsx)(ef, {
                                        featureSet: a,
                                        isModal: u,
                                        isGift: o
                                    })
                                })]
                            }), v && (0, d.jsx)(Y.default, {
                                isStacked: v,
                                ctaButton: i,
                                isGift: o,
                                trialOfferTier: P,
                                discountOffer: L
                            })]
                        })]
                    }), !v && (0, d.jsx)(Y.default, {
                        isStacked: v,
                        ctaButton: i,
                        isGift: o,
                        trialOfferTier: P,
                        discountOffer: L
                    })]
                })
            }

            function e_(e) {
                let {
                    showWumpus: t,
                    showBadge: n,
                    tier0CTAButton: r,
                    tier2CTAButton: i,
                    className: l,
                    variant: a = 0,
                    selectedPremiumType: s,
                    isFullScreen: o
                } = e, {
                    AnalyticsLocationProvider: u
                } = (0, O.default)(R.default.PREMIUM_MARKETING_TIER_CARD), c = 1 === a, f = s === Q.PremiumTypes.TIER_0, _ = (0, I.useStateFromStores)([P.default], () => P.default.useReducedMotion);
                return (0, d.jsx)(u, {
                    children: (0, d.jsxs)("div", {
                        className: m({
                            [et.premiumCards]: !c,
                            [et.premiumCardsStackedVariant]: c && o,
                            [et.premiumCardsStackedVariantSmallScreen]: c && !o
                        }, l),
                        children: [(0, d.jsx)(ed, {
                            className: m({
                                [et.tierCardFocused]: c && f,
                                [et.tierCardHidden]: c && !f,
                                [et.tierCardAnimation]: c && !_
                            }),
                            showWumpus: t,
                            showBadge: n,
                            ctaButton: r,
                            variant: a,
                            isFullScreen: o
                        }), (0, d.jsx)(em, {
                            className: m({
                                [et.tierCardFocused]: c && !f,
                                [et.tierCardHidden]: c && f,
                                [et.tierCardAnimation]: c && !_
                            }),
                            showWumpus: t,
                            ctaButton: i,
                            variant: a,
                            isFullScreen: o
                        })]
                    })
                })
            }(r = s || (s = {}))[r.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", r[r.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", r[r.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", r[r.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", r[r.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", r[r.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE", (i = o || (o = {}))[i.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", i[i.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (l = u || (u = {}))[l.DEFAULT = 0] = "DEFAULT", l[l.BOOSTING = 1] = "BOOSTING", (a = c || (c = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.STACKED = 1] = "STACKED"
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
                l = n.n(i),
                a = n("446674"),
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
                        variant: m
                    } = e, _ = (0, a.useStateFromStores)([o.default], () => o.default.isLoadedForPremiumSKUs());
                    if (!_) return (0, r.jsx)(s.Spinner, {
                        type: s.Spinner.Type.PULSING_ELLIPSIS,
                        className: d.priceSpinner
                    });
                    let E = o.default.getForSkuAndInterval((0, u.castPremiumSubscriptionAsSkuId)(t), n),
                        I = null != E ? (0, u.getFormattedPriceForPlan)(E, void 0, !1, f) : null;
                    return (0, r.jsxs)(s.Heading, {
                        color: "always-white",
                        variant: null != m ? m : "heading-md/medium",
                        className: l(d.pricePerInterval, i),
                        children: [(0, r.jsx)("span", {
                            className: d.price,
                            children: I
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
                l = n.n(i),
                a = n("819855"),
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
                        foreground: l,
                        wrapperStyle: a,
                        ...s
                    } = e, u = "sparkle-gradient-".concat(Math.random().toString(36).substring(2, 15));
                    return (0, r.jsx)("div", {
                        className: a,
                        children: (0, r.jsxs)("svg", {
                            ...(0, o.default)({
                                ...s
                            }),
                            width: t,
                            height: n,
                            viewBox: "0 0 28 53",
                            className: l,
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
                        wrapperStyle: l
                    } = e, a = "sparkle-gradient-".concat(Math.random().toString(36).substring(2, 15));
                    return (0, r.jsx)("div", {
                        className: l,
                        children: (0, r.jsxs)("svg", {
                            width: t,
                            height: n,
                            viewBox: "0 0 21 22",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, r.jsx)("defs", {
                                children: (0, r.jsxs)("linearGradient", {
                                    id: a,
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
                                fill: null != i ? i : "url(#".concat(a, ")")
                            }), (0, r.jsx)("path", {
                                d: "M8.62582 14.7674L12.8132 16.3791C12.9023 16.4597 12.9023 16.5403 12.8132 16.5403L8.62582 18.2326L6.75481 21.9396C6.75481 22.0201 6.6657 22.0201 6.57661 21.9396L4.79473 18.2326H4.70566L0.607348 16.5403C0.518254 16.5403 0.518254 16.4597 0.607348 16.3791L4.70566 14.7674H4.79473L6.57661 11.0604C6.6657 10.9799 6.75481 10.9799 6.75481 11.0604L8.62582 14.7674Z",
                                fill: null != i ? i : "url(#".concat(a, ")")
                            })]
                        })
                    })
                };

            function E(e) {
                let {
                    tier: t = u.PremiumTypes.TIER_2
                } = e, n = (0, s.default)(), i = (0, a.isThemeLight)(n);
                return (0, r.jsxs)(r.Fragment, {
                    children: [!i && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: l(c.rimGlowVertical, {
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
                    foreground: l,
                    ...a
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, o.default)({
                        ...a
                    }),
                    preserveAspectRatio: "none",
                    width: t,
                    height: n,
                    viewBox: "0 0 14 13",
                    className: l,
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
        332291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
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
                        eventHandlers: l
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
                        ...l
                    }), (0, r.jsx)(o.Text, {
                        className: a(f.text),
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
                    return P
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
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
                C = n("527382"),
                p = n("782340"),
                S = n("348133");

            function P(e) {
                let t, {
                        onClose: n,
                        fileSize: l,
                        ...P
                    } = e,
                    R = null != l && I.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE < l,
                    {
                        isLoading: O,
                        suggestedPremiumType: L
                    } = (0, _.default)({
                        autoTrackExposure: !R,
                        experiment: m.default,
                        location: I.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL
                    }),
                    M = !R && L === I.PremiumTypes.TIER_0,
                    g = (0, s.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
                    h = (0, r.jsx)(u.default, {
                        icons: C.DEFAULT_FILE_UPLOAD_ICONS
                    });
                t = M ? p.default.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
                    premiumPlan: (0, f.getPremiumTypeDisplayName)(I.PremiumTypes.TIER_0),
                    premiumMaxSize: p.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
                }) : p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
                let x = i.useMemo(() => {
                        let e = f.default.getUserMaxFileSize(g),
                            t = (0, d.formatSize)(e / 1024, {
                                useKibibytes: !0
                            }),
                            n = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                                maxSize: t
                            });
                        switch (null == g ? void 0 : g.premiumType) {
                            case I.PremiumTypes.TIER_0:
                                n = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
                                    maxSize: t
                                });
                                break;
                            case I.PremiumTypes.TIER_1:
                                n = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
                                    maxSize: t
                                })
                        }
                        return n
                    }, [g]),
                    N = (0, r.jsxs)("div", {
                        className: S.body,
                        children: [(0, r.jsx)("span", {
                            children: x
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-md/medium",
                            children: t
                        })]
                    });
                return (0, r.jsx)(E.default, {
                    artElement: h,
                    artContainerClassName: a(S.artContainer),
                    enableArtBoxShadow: !1,
                    type: I.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
                    title: p.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    body: N,
                    context: p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                        maxSize: p.default.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
                    }),
                    glowUp: t,
                    analyticsLocation: {
                        section: T.AnalyticsSections.FILE_UPLOAD_POPOUT
                    },
                    onClose: n,
                    subscriptionTier: M ? I.PremiumSubscriptionSKUs.TIER_0 : I.PremiumSubscriptionSKUs.TIER_2,
                    isLoading: O,
                    ...P
                })
            }
        },
        789946: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
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
                C = n("646718"),
                p = n("49111"),
                S = n("782340"),
                P = n("758542"),
                R = n("393828");

            function O(e) {
                var t, n, l;
                let {
                    title: O,
                    type: L,
                    guildBoostProps: M,
                    analyticsSource: g,
                    analyticsLocation: h,
                    body: x,
                    context: N,
                    glowUp: v,
                    modalClassName: A,
                    artContainerClassName: U,
                    bodyClassName: b,
                    transitionState: D,
                    onClose: y,
                    onSubscribeClick: j,
                    onSecondaryClick: F,
                    secondaryCTA: B,
                    subscribeButtonText: H,
                    showNewBadge: k = !1,
                    enableArtBoxShadow: w = !0,
                    subscriptionTier: G = C.PremiumSubscriptionSKUs.TIER_2,
                    isLoading: K = !1,
                    hideBackButton: V,
                    backButtonText: Z,
                    ...W
                } = e, z = null != M, Y = (0, E.usePremiumTrialOffer)(), X = (0, _.usePremiumDiscountOffer)(), J = ((null == Y ? void 0 : null === (t = Y.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === G || (0, _.discountOfferHasTier)(X, G)) && !z, {
                    analyticsLocations: q
                } = (0, u.default)(o.default.PREMIUM_UPSELL_MODAL), {
                    enabled: Q,
                    variant: $
                } = m.default.useExperiment({
                    location: "PremiumUpsellModal"
                }, {
                    autoTrackExposure: !1
                }), ee = Q && L === C.PremiumUpsellTypes.STREAM_QUALITY_UPSELL, et = ee && m.GradientVariants.includes($);
                i.useEffect(() => {
                    !K && (z ? d.default.track(p.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(L, " - Tier ").concat(M.boostedGuildTier),
                        guild_id: M.guild.id,
                        channel_id: M.channelId,
                        location: h,
                        location_stack: q
                    }) : d.default.track(p.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: L,
                        source: g,
                        location: h,
                        location_stack: q,
                        sku_id: (0, f.castPremiumSubscriptionAsSkuId)(G)
                    }))
                }, [z, G, K]);
                let en = w ? a(P.artContainer, P.artContainerBoxShadow, U) : a(P.artContainer, U),
                    er = null;
                return er = "artURL" in W ? (0, r.jsx)("img", {
                    className: P.art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement, (0, r.jsxs)(s.ModalRoot, {
                    className: a(P.root, A),
                    "aria-label": O,
                    transitionState: D,
                    children: [(0, r.jsxs)("div", {
                        className: en,
                        children: [er, k ? (0, r.jsx)("img", {
                            className: P.sparkleBadge,
                            alt: "",
                            src: R
                        }) : null]
                    }), ee ? (0, r.jsx)(s.ModalCloseButton, {
                        onClick: y,
                        className: P.closeButton
                    }) : null, (0, r.jsx)(s.ModalContent, {
                        className: P.content,
                        children: K ? (0, r.jsx)(s.Spinner, {}) : (0, r.jsx)(r.Fragment, {
                            children: J ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(I.default, {
                                    onClose: y,
                                    type: L,
                                    subscriptionTier: null !== (l = null == Y ? void 0 : null === (n = Y.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== l ? l : C.PremiumSubscriptionSKUs.TIER_2,
                                    headingText: O,
                                    context: N,
                                    analyticsLocationObject: h,
                                    discountOffer: X,
                                    trialOffer: Y,
                                    children: v
                                })
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(s.Heading, {
                                    className: a(P.header, {
                                        [P.enhancedHeader]: ee
                                    }),
                                    variant: "heading-xl/semibold",
                                    children: O
                                }), (0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    className: a(b),
                                    children: x
                                })]
                            })
                        })
                    }), (0, r.jsxs)(s.ModalFooter, {
                        className: a(P.footer, {
                            [P.enhancedFooter]: ee
                        }),
                        children: [(0, r.jsxs)("div", {
                            className: a(P.primaryActions, {
                                [P.enhancedPrimaryActions]: ee
                            }),
                            children: [null != B ? (0, r.jsx)(s.Button, {
                                className: a(P.secondaryAction, {
                                    [P.enhancedSecondaryAction]: et
                                }),
                                onClick: F,
                                size: s.Button.Sizes.SMALL,
                                color: et ? s.Button.Colors.CUSTOM : s.Button.Colors.PRIMARY,
                                look: s.Button.Looks.LINK,
                                children: B
                            }) : null, (() => {
                                let e;
                                if (z) return (0, r.jsx)(c.default, {
                                    analyticsLocation: h,
                                    guild: M.guild,
                                    onClose: y
                                });
                                let t = ee ? S.default.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
                                if (J) {
                                    if (null != Y) {
                                        var n, i;
                                        t = (0, f.formatTrialCtaIntervalDuration)({
                                            intervalType: null == Y ? void 0 : null === (n = Y.subscription_trial) || void 0 === n ? void 0 : n.interval,
                                            intervalCount: null == Y ? void 0 : null === (i = Y.subscription_trial) || void 0 === i ? void 0 : i.interval_count
                                        }), e = null == Y ? void 0 : Y.trial_id
                                    } else null != X && (t = S.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                        percent: X.discount.amount
                                    }))
                                }
                                return (0, r.jsx)(T.default, {
                                    className: a({
                                        [P.getNitroCTA]: et
                                    }),
                                    premiumModalAnalyticsLocation: h,
                                    subscriptionTier: G,
                                    trialId: e,
                                    size: s.Button.Sizes.SMALL,
                                    color: et ? s.Button.Colors.CUSTOM : s.Button.Colors.GREEN,
                                    onClick: () => {
                                        null == j || j(), y()
                                    },
                                    buttonText: null != H ? H : t
                                })
                            })()]
                        }), !V && !ee && (0, r.jsx)(s.Button, {
                            onClick: y,
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            children: null != Z ? Z : S.default.Messages.BACK
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
                    return C
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
                c = n("453252"),
                d = n("75015"),
                f = n("782340");

            function m(e, t, i, a) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: l
                    } = await n.el("420333").then(n.bind(n, "420333"));
                    return n => (0, r.jsx)(l, {
                        filters: a,
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
                (0, a.openUploadError)({
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
                    canAnimate: l = !0
                } = r, a = null === e;
                return a && null == t ? s.default.getDefaultAvatarURL(n.id, n.discriminator) : a || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, i, l) : n.getAvatarURL(null == t ? void 0 : t.guildId, i, l)
            }

            function I(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function T(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function C(e) {
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
                    min: l,
                    max: a,
                    cos: s,
                    round: o
                } = Math, u = e[0] | e[1] << 8 | e[2] << 16, c = e[3] | e[4] << 8, d = (63 & u) / 63, f = (u >> 6 & 63) / 31.5 - 1, m = (u >> 12 & 63) / 31.5 - 1, _ = u >> 23, E = c >> 15, I = a(3, E ? _ ? 5 : 7 : 7 & c), T = a(3, E ? 7 & c : _ ? 5 : 7), C = _ ? (15 & e[5]) / 15 : 1, p = (e[5] >> 4) / 15, S = _ ? 6 : 5, P = 0, R = (t, n, r) => {
                    let i = [];
                    for (let l = 0; l < n; l++)
                        for (let a = l ? 0 : 1; a * n < t * (n - l); a++) i.push(((e[S + (P >> 1)] >> ((1 & P++) << 2) & 15) / 7.5 - 1) * r);
                    return i
                }, O = R(I, T, (u >> 18 & 31) / 31 / 2), L = R(3, 3, (c >> 3 & 63) / 63 * n), M = R(3, 3, (c >> 9 & 63) / 63 * n), g = _ ? R(5, 5, p) : [], h = (0, r.thumbHashToApproximateAspectRatio)(e), x = o(h > 1 ? 32 : 32 * h), N = o(h > 1 ? 32 / h : 32), v = new Uint8Array(x * N * 4), A = [], U = [];
                for (let e = 0, n = 0; e < N; e++)
                    for (let r = 0; r < x; r++, n += 4) {
                        let o = d,
                            u = f,
                            c = m,
                            E = C;
                        for (let e = 0, t = a(I, _ ? 5 : 3); e < t; e++) A[e] = s(i / x * (r + .5) * e);
                        for (let t = 0, n = a(T, _ ? 5 : 3); t < n; t++) U[t] = s(i / N * (e + .5) * t);
                        for (let e = 0, n = 0; e < T; e++)
                            for (let r = e ? 0 : 1, i = 2 * U[e]; r * T < I * (T - e); r++, n++) !(r > t) && !(e > t) && (o += O[n] * A[r] * i);
                        for (let e = 0, t = 0; e < 3; e++)
                            for (let n = e ? 0 : 1, r = 2 * U[e]; n < 3 - e; n++, t++) {
                                let e = A[n] * r;
                                u += L[t] * e, c += M[t] * e
                            }
                        if (_)
                            for (let e = 0, t = 0; e < 5; e++)
                                for (let n = e ? 0 : 1, r = 2 * U[e]; n < 5 - e; n++, t++) E += g[t] * A[n] * r;
                        let p = o - 2 / 3 * u,
                            S = (3 * o - p + c) / 2,
                            P = S - c;
                        v[n] = a(0, 255 * l(1, S)), v[n + 1] = a(0, 255 * l(1, P)), v[n + 2] = a(0, 255 * l(1, p)), v[n + 3] = a(0, 255 * l(1, E))
                    }
                return {
                    w: x,
                    h: N,
                    rgba: v
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
                l = n("606292"),
                a = n("688318"),
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
                    avatarDecorationSrc: C,
                    eventHandlers: p
                } = (0, a.default)({
                    user: t,
                    guildId: null != n ? n : void 0,
                    size: (0, l.getDecorationSizeForAvatarSize)(o),
                    showPending: u,
                    animateOnHover: d,
                    avatarDecorationOverride: f,
                    showTryItOut: c
                }), S = r.useCallback(() => {
                    I.onMouseEnter(), p.onMouseEnter()
                }, [I, p]), P = r.useCallback(() => {
                    I.onMouseLeave(), p.onMouseLeave()
                }, [I, p]);
                return {
                    avatarPlaceholderSrc: T,
                    avatarDecorationSrc: C,
                    avatarSrc: _,
                    isAnimating: E,
                    eventHandlers: {
                        onMouseEnter: S,
                        onMouseLeave: P
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
                l = n("206230"),
                a = n("771325"),
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
                } = e, [_, E] = r.useState(!1), I = (0, i.useStateFromStores)([l.default], () => l.default.useReducedMotion), T = (0, i.useStateFromStores)([o.default], () => o.default.isFocused()), C = T && (_ || !I && !f), {
                    pendingAvatar: p
                } = (0, u.default)({}), S = (0, i.useStateFromStores)([s.default], () => null != n && null != t ? s.default.getMember(n, t.id) : null), P = r.useMemo(() => null != t ? (0, a.getPreviewAvatar)(d ? null != m ? m : p : void 0, S, t, {
                    canAnimate: C,
                    size: c
                }) : void 0, [d, p, S, t, C, c, m]), R = r.useCallback(() => E(!0), []), O = r.useCallback(() => E(!1), []);
                return {
                    avatarSrc: P,
                    isAvatarAnimating: C,
                    eventHandlers: {
                        onMouseEnter: R,
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
                l = n("884691"),
                a = n("414456"),
                s = n.n(a),
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
                C = n("366822"),
                p = n("653240"),
                S = n("140802");

            function P(e) {
                let {
                    size: t,
                    mediaLayoutType: n,
                    alt: r
                } = e, l = (0, c.default)();
                return (0, i.jsx)("div", {
                    className: C.imageErrorWrapper,
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
                        src: (0, o.isThemeLight)(l) ? S : p,
                        className: C.imageError,
                        alt: null != r ? r : T.default.Messages.IMAGE
                    })
                })
            }(r = class extends l.PureComponent {
                render() {
                    let e;
                    let {
                        className: t,
                        imageClassName: n,
                        readyState: r,
                        src: l,
                        placeholder: a,
                        placeholderVersion: o,
                        alt: c,
                        width: m,
                        height: p,
                        maxWidth: S = m,
                        maxHeight: O = p,
                        minWidth: L,
                        minHeight: M,
                        mediaLayoutType: g,
                        limitResponsiveWidth: h = !0,
                        accessory: x,
                        zoomable: N,
                        original: v,
                        children: A,
                        renderAccessory: U,
                        onClick: b,
                        tabIndex: D,
                        useFullWidth: y = !1,
                        ...j
                    } = this.props;
                    if (1 === m && 1 === p) return null;
                    let F = (0, f.fit)({
                            width: m,
                            height: p,
                            maxWidth: S,
                            maxHeight: O,
                            minWidth: L,
                            minHeight: M
                        }),
                        B = 0 !== F.width ? F.width / F.height : 1;
                    null != l && r !== I.ImageReadyStates.ERROR ? e = A({
                        src: l,
                        size: F,
                        alt: c,
                        className: n,
                        mediaLayoutType: g
                    }) : r !== I.ImageReadyStates.LOADING && (e = (0, i.jsx)(P, {
                        size: F,
                        mediaLayoutType: g,
                        alt: c
                    })), e = (0, i.jsx)(_.ImageLoadingOverlay, {
                        readyState: r,
                        aspectRatio: B,
                        placeholder: a,
                        placeholderVersion: o,
                        placeholderStyle: R(F, g),
                        children: e
                    });
                    let H = null != U ? U() : null;
                    return H = null != H ? H : x, (0, i.jsx)(u.FocusRing, {
                        ringTarget: this._containerRef,
                        focusTarget: this._clickableRef,
                        children: (0, i.jsxs)("div", {
                            className: s(C.imageWrapper, {
                                [C.imageZoom]: N,
                                [C.imageWrapperBackground]: r !== I.ImageReadyStates.READY,
                                [C.clickable]: null != b
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
                            }(F, h, y, g),
                            ...j,
                            children: [null != v && (0, i.jsx)("a", {
                                tabIndex: -1,
                                onClick: b,
                                "aria-hidden": !0,
                                className: C.originalLink,
                                href: v,
                                ref: this._containerRef,
                                "data-role": "img",
                                "data-safe-src": l
                            }), null != b ? (0, i.jsx)(u.Clickable, {
                                className: C.clickableWrapper,
                                tabIndex: null != D ? D : 0,
                                onClick: b,
                                "aria-label": null != c ? c : T.default.Messages.IMAGE,
                                "aria-describedby": d.IMAGE_OPEN_DIALOG_DESCRIPTION,
                                innerRef: this._clickableRef,
                                focusProps: {
                                    enabled: !1
                                },
                                children: e
                            }) : e, null != H ? (0, i.jsx)("div", {
                                className: C.imageAccessory,
                                children: H
                            }) : null]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._containerRef = l.createRef(), this._clickableRef = l.createRef()
                }
            }).defaultProps = {
                readyState: I.ImageReadyStates.READY,
                zoomable: !0,
                children: e => {
                    let {
                        src: t,
                        size: n,
                        alt: r,
                        className: l,
                        mediaLayoutType: a
                    } = e;
                    return (0, i.jsx)("img", {
                        className: null != l ? l : void 0,
                        alt: null != r ? r : T.default.Messages.IMAGE,
                        src: t,
                        style: R(n, a)
                    })
                },
                minWidth: 0,
                minHeight: 0
            }, Image = r;

            function R(e, t) {
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
                l = n("907002"),
                a = n("723251"),
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
                } = e, C = t === u.ImageReadyStates.LOADING, [p] = i.useState(() => Date.now()), [S] = i.useState(C), [P, R] = i.useState(!1), O = i.useMemo(() => {
                    if (S && 1 === E && null != _) {
                        let e = Uint8Array.from(atob(_), e => e.charCodeAt(0)),
                            t = (0, o.thumbHashToRGBA)(e, {
                                detail: 1,
                                pop: 1.1
                            }),
                            n = (0, a.rgbaToDataURL)(t.w, t.h, t.rgba);
                        return n
                    }
                }, [S, _, E]);
                i.useEffect(() => {
                    let e = setTimeout(() => {
                        R(!0)
                    }, 2e3);
                    return () => {
                        clearTimeout(e)
                    }
                }, [S]);
                let L = t === u.ImageReadyStates.READY && Date.now() - p < 200,
                    M = (0, l.useTransition)(C && null != O, L ? f : d),
                    g = (0, l.useTransition)(C && P, m);
                return (0, r.jsxs)("div", {
                    className: c.loadingOverlay,
                    style: {
                        aspectRatio: n
                    },
                    children: [T, M((e, t) => t && (0, r.jsx)(l.animated.img, {
                        style: {
                            ...I,
                            ...e
                        },
                        className: c.imagePlaceholder,
                        src: O,
                        alt: ""
                    })), g((e, t) => t && (0, r.jsx)(l.animated.div, {
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
        41250: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196");

            function l(e) {
                let {
                    width: t = 106,
                    height: n = 26,
                    color: l = "currentColor",
                    foreground: a,
                    ...s
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 106 26",
                    children: [(0, r.jsx)("title", {
                        children: "Nitro"
                    }), (0, r.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, r.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M98.8266537 8.64800265L97.5788372 17.0822416C97.2940433 19.0754982 95.0485266 20.0010292 92.981582 20.0010292 91.0571496 20.0010292 89.1680861 19.0754982 89.4175111 17.2605602L90.6652125 8.64800265C90.9501215 6.76162212 93.1956383 5.80077257 95.2624676 5.80077257 97.3294121 5.80077257 99.1115628 6.76162212 98.8266537 8.64800265M96.2496839.0038079646L96.2503751.0000115044248 82.8208233.0000115044248C82.4777342.0000115044248 82.1864887.251383186 82.1368341.59030354L81.4839511 5.04596726C81.4228909 5.46254248 81.7462794 5.83609115 82.167825 5.83609115L84.6202551 5.83609115C84.8670304 5.83609115 85.0355795 6.08734779 84.9386897 6.31398496 84.6326976 7.03036549 84.4097703 7.8080646 84.2859219 8.64800265L83.0381053 17.2605602C82.2182861 23.0258876 87.0301735 25.9085513 92.2687909 25.9085513 97.7574094 25.9085513 103.139115 23.0258876 103.958934 17.2605602L105.206059 8.64800265C106.009634 2.99656903 101.367679.115400885 96.2496839.0038079646M15.5778562 11.7941867L15.6467505 15.9747796C15.648133 16.0607177 15.5902986 16.1363018 15.5068881 16.1574699L15.5067729 16.1574699 14.0843013 11.1148504C14.0822275 11.1071425 14.0795777 11.0996646 14.0763519 11.0923018L9.66308376.775018584C9.55432753.520885841 9.30421123.355912389 9.0273667.355912389L4.02607753.355912389C3.68126035.355912389 3.38920838.6097 3.34151232.950576106L.00682030635 24.7668062C-.0513596718 25.1820009.271568009 25.5526735.691385514 25.5526735L5.67355018 25.5526735C6.01882818 25.5526735 6.31122578 25.2981956 6.3583458 24.9566292L7.6643423 15.4949301C7.66560958 15.4857265 7.66618562 15.4762929 7.66607042 15.4669743L7.59475674 10.6052044 7.73715368 10.5697708 9.23116943 15.6125053C9.23335838 15.6196381 9.23589295 15.6267708 9.23888836 15.6336735L13.3663258 25.1370186C13.4758885 25.3893106 13.7250831 25.5526735 14.0004299 25.5526735L19.39573 25.5526735C19.7405472 25.5526735 20.0325992 25.2988858 20.0802953 24.9580097L23.4156785 1.14177965C23.4738585.726584956 23.1509308.355912389 22.7311133.355912389L17.782935.355912389C17.438233.355912389 17.146181.609469912 17.0983698.950346018L15.5795843 11.7654257C15.578317 11.7749743 15.577741 11.784523 15.5778562 11.7941867M25.2200758 25.5526274L30.2035078 25.5526274C30.5483249 25.5526274 30.8403769 25.2989549 30.888073 24.9579637L34.222765 1.14184867C34.280945.726653982 33.9580173.355981416 33.5381998.355981416L28.5547678.355981416C28.2100659.355981416 27.9180139.609653982 27.8702026.950645133L24.5355106 24.7667602C24.4773306 25.1819549 24.8002583 25.5526274 25.2200758 25.5526274M37.588782.910862832L36.9357838 5.3664115C36.8748388 5.78298673 37.1982273 6.15665044 37.6197729 6.15665044L42.8344271 6.15665044C43.2536686 6.15665044 43.5763658 6.52628761 43.5192227 6.94102212L41.0626451 24.7682788C41.005502 25.1830133 41.3281993 25.5526504 41.7474408 25.5526504L46.8027624 25.5526504C47.1481556 25.5526504 47.4405532 25.2980575 47.4875581 24.9564912L49.9960944 6.75280973C50.0430992 6.41112832 50.3354968 6.15665044 50.68089 6.15665044L56.2874814 6.15665044C56.6305704 6.15665044 56.9217007 5.90539381 56.9714705 5.56635841L57.6249296 1.11080973C57.6859898.694234513 57.3626013.320570796 56.9409404.320570796L38.2727712.320570796C37.9296821.320570796 37.6384366.571827434 37.588782.910862832M72.9157339 9.14614425C72.7371616 10.6051354 71.5970645 12.0642416 69.6364568 12.0642416L66.6908218 12.0642416C66.2704283 12.0642416 65.9472702 11.6925336 66.0063718 11.2768788L66.6298768 6.8920823C66.6782642 6.55178142 66.9700857 6.29891416 67.3143268 6.29891416L70.4562761 6.29891416C72.3453396 6.29891416 73.0936148 7.61571062 72.9157339 9.14614425M71.1691824.355958407L61.6845787.355958407C61.3397615.355958407 61.0477096.609630973 60.9998983.950622124L57.6652063 24.7667372C57.6070263 25.1819319 57.929954 25.5526044 58.3497715 25.5526044L63.4034802 25.5526044C63.7487582 25.5526044 64.0411558 25.2981265 64.0882759 24.9565602L65.0696166 17.8430292C65.0932342 17.6723035 65.2393178 17.5450646 65.4120144 17.5450646L66.0616716 17.5450646C66.1795293 17.5450646 66.2893224 17.6050027 66.3528019 17.7041708L71.1792055 25.2345071C71.3062798 25.4327283 71.5256356 25.5526044 71.7613509 25.5526044L78.0034289 25.5526044C78.5625328 25.5526044 78.8902992 24.9242327 78.5697909 24.4667018L73.5050221 17.2370912C73.383593 17.0637195 73.4460357 16.8224717 73.6364743 16.729631 76.8698986 15.1516841 78.7475566 13.5351973 79.3665685 9.03926814 80.0787836 3.13174602 76.3728918.355958407 71.1691824.355958407"
                        })
                    })]
                })
            }
        },
        379863: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196");

            function l(e) {
                let {
                    width: t = 103,
                    height: n = 39,
                    color: l = "currentColor",
                    foreground: a,
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 103 39",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsxs)("g", {
                        fill: l,
                        className: a,
                        children: [(0, r.jsx)("path", {
                            d: "M93.9519 0.175787H81.0164C80.8563 0.175146 80.7012 0.231811 80.5799 0.335344C80.4586 0.438877 80.3792 0.582303 80.3564 0.739196L79.7272 4.99334C79.7136 5.08695 79.7205 5.18236 79.7474 5.2731C79.7744 5.36384 79.8207 5.44778 79.8833 5.51923C79.946 5.59068 80.0234 5.64796 80.1103 5.68719C80.1973 5.72642 80.2917 5.74668 80.3873 5.7466H82.7491C82.804 5.74682 82.8579 5.76039 82.9062 5.78612C82.9545 5.81185 82.9956 5.84895 83.026 5.89414C83.0564 5.93932 83.075 5.99121 83.0803 6.04522C83.0857 6.09924 83.0775 6.15372 83.0565 6.20385C82.7507 6.91629 82.5392 7.66486 82.4273 8.43095L81.2248 16.6535C80.4347 22.1651 85.0697 24.9086 90.1172 24.9086C95.404 24.9086 100.588 22.1569 101.378 16.6535L102.58 8.43095C103.354 3.03162 98.8818 0.281936 93.9519 0.175787ZM96.4272 8.42687L95.2328 16.4779C94.9585 18.3804 92.7947 19.2643 90.8041 19.2643C88.9477 19.2643 87.1304 18.3804 87.3697 16.6473L88.5722 8.42483C88.8466 6.62437 91.0104 5.70781 93.0009 5.70781C94.9915 5.70781 96.7139 6.62641 96.4333 8.42687H96.4272Z"
                        }), (0, r.jsx)("path", {
                            d: "M22.1974 0.17587H17.3644C17.2005 0.176513 17.0423 0.236066 16.9194 0.343454C16.7965 0.450842 16.7171 0.598756 16.6961 0.759692L15.213 11.2256C15.212 11.2351 15.212 11.2447 15.213 11.2542L15.279 15.3001C15.2798 15.3406 15.2669 15.3801 15.2421 15.4124C15.2174 15.4446 15.1825 15.4676 15.1429 15.4777L13.7526 10.5969V10.5744L9.43527 0.582096C9.38392 0.461509 9.29788 0.35852 9.18786 0.285933C9.07784 0.213345 8.94868 0.174361 8.81645 0.173828H3.93188C3.7689 0.176072 3.61225 0.236646 3.49091 0.344348C3.36956 0.45205 3.29173 0.599594 3.27181 0.759692L0.00648965 23.8003C-0.00675491 23.8949 0.000616673 23.9912 0.0281092 24.0828C0.0556018 24.1744 0.102579 24.2591 0.165884 24.3312C0.22919 24.4033 0.307359 24.4612 0.39514 24.501C0.482921 24.5407 0.578282 24.5614 0.674817 24.5617H5.54082C5.70386 24.5612 5.86126 24.5025 5.98405 24.3964C6.10685 24.2903 6.18678 24.1438 6.20915 23.984L7.48392 14.8286C7.48494 14.8191 7.48494 14.8095 7.48392 14.8L7.41379 10.0947L7.55405 10.0621L9.01241 14.9409C9.01126 14.9476 9.01126 14.9545 9.01241 14.9613L13.043 24.1595C13.0941 24.2803 13.1801 24.3834 13.2902 24.456C13.4003 24.5287 13.5295 24.5675 13.6618 24.5678H18.9486C19.1114 24.5674 19.2685 24.509 19.3913 24.4033C19.514 24.2976 19.5941 24.1516 19.617 23.9921L22.8678 0.937289C22.8815 0.842432 22.8743 0.745785 22.8468 0.653916C22.8193 0.562046 22.7722 0.477107 22.7086 0.404871C22.645 0.332635 22.5664 0.274794 22.4782 0.235279C22.39 0.195765 22.2943 0.175503 22.1974 0.17587Z"
                        }), (0, r.jsx)("path", {
                            d: "M32.7504 0.175781H27.8844C27.7203 0.17599 27.5619 0.23539 27.4389 0.342858C27.3159 0.450326 27.2366 0.598492 27.2161 0.759604L23.959 23.8002C23.9458 23.8948 23.9531 23.9911 23.9806 24.0827C24.0081 24.1743 24.0551 24.259 24.1184 24.3311C24.1817 24.4032 24.2599 24.4611 24.3477 24.5009C24.4354 24.5406 24.5308 24.5613 24.6273 24.5616H29.4933C29.6563 24.5613 29.8137 24.503 29.9368 24.3973C30.0599 24.2916 30.1404 24.1456 30.1637 23.9859L33.4187 0.937201C33.4323 0.842515 33.4252 0.746043 33.3978 0.654318C33.3705 0.562593 33.3235 0.477757 33.2601 0.405555C33.1968 0.333353 33.1185 0.275472 33.0305 0.235829C32.9426 0.196186 32.847 0.175708 32.7504 0.175781Z"
                        }), (0, r.jsx)("path", {
                            d: "M55.5911 0.175834H37.3854C37.2235 0.17613 37.0671 0.234031 36.9448 0.338966C36.8225 0.443901 36.7424 0.588871 36.7191 0.747409L36.0817 5.04646C36.0678 5.14131 36.0747 5.238 36.1019 5.32998C36.1291 5.42195 36.176 5.50705 36.2394 5.57948C36.3028 5.65192 36.3812 5.70999 36.4694 5.74976C36.5575 5.78952 36.6532 5.81004 36.75 5.80992H41.845C41.9414 5.80989 42.0368 5.83033 42.1246 5.86985C42.2123 5.90937 42.2905 5.96706 42.3539 6.03903C42.4172 6.111 42.4642 6.19557 42.4917 6.28705C42.5192 6.37852 42.5266 6.47477 42.5133 6.5693L40.1164 23.7961C40.1032 23.8907 40.1105 23.9869 40.138 24.0784C40.1655 24.1699 40.2125 24.2545 40.2759 24.3264C40.3392 24.3984 40.4174 24.4561 40.5052 24.4956C40.593 24.5351 40.6883 24.5556 40.7848 24.5555H45.7147C45.8777 24.5551 46.0351 24.4964 46.1579 24.3902C46.2807 24.2841 46.3607 24.1377 46.383 23.9778L48.8294 6.38762C48.8509 6.22779 48.9303 6.08112 49.0529 5.97487C49.1754 5.86861 49.3328 5.81 49.4957 5.80992H54.964C55.1257 5.81012 55.2821 5.75266 55.4044 5.64806C55.5268 5.54346 55.607 5.39873 55.6303 5.24039L56.2677 0.935212C56.2811 0.839995 56.2735 0.743042 56.2455 0.650985C56.2175 0.558928 56.1698 0.473939 56.1055 0.401832C56.0413 0.329726 55.9621 0.272202 55.8733 0.233197C55.7845 0.194191 55.6882 0.174624 55.5911 0.175834Z"
                        }), (0, r.jsx)("path", {
                            d: "M69.4981 0.175781H60.2364C60.0723 0.17599 59.9139 0.23539 59.7909 0.342858C59.6679 0.450326 59.5887 0.598491 59.5681 0.759604L56.311 23.8002C56.2978 23.8948 56.3051 23.9911 56.3326 24.0827C56.3601 24.1743 56.4071 24.259 56.4704 24.3311C56.5337 24.4032 56.6119 24.4611 56.6997 24.5009C56.7875 24.5406 56.8828 24.5613 56.9794 24.5616H61.9155C62.0785 24.5612 62.2359 24.5025 62.3587 24.3963C62.4815 24.2902 62.5614 24.1437 62.5838 23.9839L63.5409 17.1005C63.5523 17.0206 63.5923 16.9474 63.6536 16.8942C63.7149 16.841 63.7935 16.8113 63.8751 16.8106H64.5104C64.5672 16.8108 64.6231 16.8251 64.6728 16.8522C64.7225 16.8793 64.7646 16.9184 64.7951 16.9658L69.5084 24.2534C69.5693 24.3477 69.6531 24.4253 69.7523 24.4792C69.8514 24.5331 69.9626 24.5614 70.0757 24.5616H76.1711C76.2947 24.5618 76.4159 24.5283 76.5216 24.465C76.6272 24.4016 76.7133 24.3107 76.7704 24.2022C76.8274 24.0937 76.8532 23.9718 76.845 23.8498C76.8368 23.7278 76.7949 23.6104 76.7239 23.5103L71.7733 16.5146C71.7454 16.4751 71.7265 16.43 71.7178 16.3826C71.7091 16.3351 71.7109 16.2863 71.7231 16.2396C71.7352 16.1929 71.7574 16.1493 71.7882 16.1119C71.8189 16.0744 71.8575 16.044 71.9012 16.0227C75.0593 14.4958 76.893 12.9301 77.4974 8.57997C78.1988 2.86218 74.5786 0.175781 69.4981 0.175781ZM71.204 8.68407C71.0287 10.0946 69.9169 11.5072 68.0006 11.5072H65.1251C65.0285 11.5073 64.9329 11.4868 64.845 11.4472C64.757 11.4076 64.6787 11.3497 64.6154 11.2775C64.552 11.2053 64.505 11.1204 64.4777 11.0287C64.4503 10.937 64.4432 10.8405 64.4568 10.7458L65.0653 6.50188C65.0882 6.34263 65.1684 6.1969 65.2912 6.09151C65.414 5.98611 65.5711 5.92815 65.7336 5.92827H68.8009C70.6471 5.92827 71.3773 7.20206 71.204 8.68407Z"
                        }), (0, r.jsx)("path", {
                            d: "M7.17861 33.4558C7.14695 33.4798 7.12131 33.5107 7.10366 33.5461C7.086 33.5815 7.07682 33.6205 7.07682 33.6599C7.07682 33.6994 7.086 33.7383 7.10366 33.7737C7.12131 33.8091 7.14695 33.84 7.17861 33.8641C8.11097 34.5683 8.07796 35.6584 7.86344 36.332C7.38901 37.9059 6.19056 38.8592 3.99993 38.8592H0.262245C0.224761 38.859 0.187761 38.8508 0.153705 38.8353C0.11965 38.8198 0.0893196 38.7973 0.0647325 38.7693C0.0401454 38.7413 0.021865 38.7085 0.0111071 38.6729C0.000349207 38.6374 -0.00263948 38.6 0.00233983 38.5632L1.31012 29.3058C1.31907 29.2439 1.35029 29.1873 1.39805 29.1464C1.4458 29.1056 1.50688 29.0831 1.57002 29.0833H5.30358C7.18892 29.0833 8.41625 30.2019 8.09447 32.0656C7.96306 32.6209 7.63894 33.1128 7.17861 33.4558ZM4.23096 36.6872C5.73675 36.6872 5.98841 34.6847 4.50943 34.6847H3.28622C3.22289 34.685 3.16179 34.7079 3.11408 34.7491C3.06637 34.7904 3.03522 34.8472 3.02632 34.9092L2.82004 36.3912C2.81506 36.428 2.81805 36.4654 2.82881 36.5009C2.83957 36.5365 2.85785 36.5693 2.88243 36.5973C2.90702 36.6253 2.93735 36.6478 2.97141 36.6633C3.00546 36.6788 3.04246 36.687 3.07995 36.6872H4.23096ZM4.76108 32.9026C5.97397 32.9026 6.26688 31.1634 5.01067 31.1634H3.78747C3.72444 31.1637 3.66359 31.1862 3.61593 31.2271C3.56826 31.2679 3.53692 31.3242 3.52756 31.3859L3.35223 32.6107C3.3469 32.6475 3.34964 32.685 3.36027 32.7207C3.37089 32.7564 3.38916 32.7894 3.41381 32.8175C3.43847 32.8456 3.46894 32.8681 3.50316 32.8834C3.53738 32.8988 3.57454 32.9068 3.61213 32.9067L4.76108 32.9026Z"
                        }), (0, r.jsx)("path", {
                            d: "M16.7972 38.8632H14.6602C14.6002 38.8632 14.5419 38.843 14.495 38.8059C14.4482 38.7688 14.4155 38.717 14.4023 38.659L14.1074 37.1219C14.0946 37.0638 14.062 37.0117 14.015 36.9746C13.9681 36.9374 13.9097 36.9173 13.8495 36.9178H11.6011C11.5504 36.9179 11.5007 36.9326 11.4582 36.9602C11.4157 36.9877 11.3823 37.0269 11.3619 37.0729L10.6193 38.7244C10.5991 38.7705 10.5657 38.8099 10.5232 38.8374C10.4806 38.865 10.4309 38.8796 10.38 38.8795H8.29251C8.24801 38.8795 8.20424 38.8683 8.16533 38.8469C8.12643 38.8255 8.09366 38.7947 8.07013 38.7573C8.0466 38.7199 8.03308 38.6772 8.03085 38.6333C8.02861 38.5893 8.03774 38.5455 8.05736 38.5059L12.6284 29.2485C12.6496 29.2047 12.683 29.1678 12.7246 29.1421C12.7663 29.1164 12.8145 29.103 12.8635 29.1035H14.7633C14.8232 29.1032 14.8813 29.1233 14.9279 29.1605C14.9746 29.1977 15.0068 29.2497 15.0191 29.3077L17.053 38.5651C17.0586 38.6018 17.0562 38.6392 17.0459 38.6748C17.0357 38.7105 17.0179 38.7435 16.9936 38.7718C16.9694 38.8 16.9393 38.8228 16.9054 38.8385C16.8715 38.8543 16.8346 38.8627 16.7972 38.8632ZM13.4968 34.707C13.5334 34.7069 13.5696 34.6992 13.603 34.6844C13.6364 34.6697 13.6663 34.6481 13.6908 34.6212C13.7153 34.5943 13.7338 34.5625 13.7452 34.5281C13.7565 34.4937 13.7605 34.4572 13.7567 34.4212L13.4927 31.8491H13.3957L12.4407 34.3559C12.4256 34.3952 12.4205 34.4375 12.4256 34.4792C12.4308 34.5209 12.4461 34.5607 12.4702 34.5953C12.4944 34.6298 12.5266 34.658 12.5643 34.6775C12.6019 34.6969 12.6437 34.7071 12.6861 34.707H13.4968Z"
                        }), (0, r.jsx)("path", {
                            d: "M19.1384 35.9359C19.1901 35.8936 19.2563 35.8728 19.3232 35.8777C19.3901 35.8826 19.4525 35.913 19.4973 35.9624C19.7378 36.2023 20.0247 36.3919 20.3408 36.5199C20.6569 36.6479 20.9957 36.7117 21.3372 36.7075C22.0056 36.7075 22.5935 36.4727 22.6904 35.9624C22.8018 35.35 21.9375 35.0928 21.1413 34.9826C19.5922 34.7335 18.1978 33.5046 18.5464 31.6552C18.9238 29.6526 20.7081 28.9484 22.5233 28.9484C23.6455 28.9484 24.6954 29.2382 25.5225 30.2834C25.5451 30.3114 25.5616 30.3436 25.5711 30.3781C25.5805 30.4127 25.5827 30.4488 25.5775 30.4842C25.5723 30.5196 25.5598 30.5536 25.5407 30.584C25.5217 30.6144 25.4965 30.6406 25.4669 30.661L24.058 31.6266C24.0095 31.6601 23.9509 31.6766 23.8918 31.6732C23.8327 31.6699 23.7765 31.647 23.7321 31.6082C23.3125 31.2544 22.7816 31.0559 22.2304 31.0469C21.6116 31.0346 21.0712 31.2673 21.0155 31.7654C20.9453 32.3309 21.4486 32.5819 22.2015 32.7453C23.9177 33.0637 25.5927 33.7128 25.1327 36.142C24.7696 38.0486 23.0947 38.9999 20.9598 38.9999C19.8459 38.9999 18.4845 38.4773 17.7006 37.4403C17.6594 37.3867 17.6406 37.3194 17.6483 37.2525C17.656 37.1855 17.6895 37.1241 17.7419 37.081L19.1384 35.9359Z"
                        }), (0, r.jsx)("path", {
                            d: "M28.365 38.8631H26.3951C26.3577 38.8629 26.3208 38.8548 26.2868 38.8393C26.2528 38.8238 26.2226 38.8012 26.1982 38.7732C26.1737 38.7451 26.1557 38.7122 26.1452 38.6767C26.1346 38.6411 26.132 38.6038 26.1373 38.5671L27.445 29.3097C27.4536 29.2476 27.4847 29.1908 27.5325 29.1498C27.5804 29.1089 27.6417 29.0866 27.7049 29.0872H29.6749C29.7122 29.0871 29.7491 29.095 29.783 29.1102C29.817 29.1255 29.8473 29.1479 29.8717 29.1758C29.8962 29.2037 29.9143 29.2364 29.9248 29.2719C29.9353 29.3073 29.938 29.3446 29.9327 29.3811L28.6249 38.6386C28.6169 38.701 28.5859 38.7583 28.538 38.7997C28.4902 38.8411 28.4286 38.8636 28.365 38.8631Z"
                        }), (0, r.jsx)("path", {
                            d: "M37.6597 36.6687C37.6947 36.686 37.7253 36.7107 37.7495 36.7411C37.7736 36.7714 37.7906 36.8068 37.7993 36.8444C37.808 36.8821 37.8081 36.9212 37.7997 36.959C37.7912 36.9967 37.7744 37.0321 37.7505 37.0627C36.5788 38.5671 35.2381 38.9999 34.0623 38.9999C32.1213 38.9999 30.337 37.8813 30.6423 35.6582L31.1167 32.29C31.4241 30.0813 33.5446 28.9484 35.5268 28.9484C36.6799 28.9484 38.0021 29.4097 38.5921 30.9489C38.6178 31.0136 38.6167 31.0858 38.5888 31.1496C38.561 31.2135 38.5088 31.2639 38.4436 31.2898L36.748 31.9308C36.6909 31.9519 36.6281 31.9526 36.5705 31.9329C36.5129 31.9131 36.4641 31.8741 36.4324 31.8226C36.1622 31.4143 35.6485 31.2265 35.1349 31.2265C34.4233 31.2408 33.7137 31.6348 33.6147 32.29L33.1403 35.6664C33.0433 36.3033 33.6559 36.7034 34.3552 36.7034C34.6326 36.7074 34.907 36.6462 35.1559 36.5249C35.4048 36.4035 35.621 36.2254 35.7868 36.0053C35.8226 35.9552 35.8752 35.9192 35.9352 35.9039C35.9953 35.8886 36.0589 35.8948 36.1147 35.9216L37.6597 36.6687Z"
                        })]
                    })
                })
            }
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
//# sourceMappingURL=72683.92ef424e5497b8130972.js.map