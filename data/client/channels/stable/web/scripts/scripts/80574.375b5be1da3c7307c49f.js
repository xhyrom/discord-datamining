(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["80574"], {
        393828: function(e, t, i) {
            "use strict";
            e.exports = i.p + "714405524ef39906bd06.png"
        },
        527382: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                FileUploadIconClassNames: function() {
                    return a
                },
                DEFAULT_FILE_UPLOAD_ICONS: function() {
                    return l
                },
                EMOJI_FILE_UPLOAD_ICONS: function() {
                    return o
                }
            });
            var s, n, r = i("831839");
            (s = n || (n = {}))[s.IMAGE = 0] = "IMAGE", s[s.DOCUMENT = 1] = "DOCUMENT", s[s.CODE = 2] = "CODE";
            let a = {
                    0: r.image,
                    1: r.document,
                    2: r.code
                },
                l = [1, 0, 2],
                o = [0, 0, 0]
        },
        109036: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var s = i("37983");
            i("884691");
            var n = i("414456"),
                r = i.n(n),
                a = i("527382"),
                l = i("831839"),
                o = function(e) {
                    let {
                        icons: t,
                        className: i
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: r(l.icons, i),
                        children: [(0, s.jsx)("div", {
                            className: l.wrapOne,
                            children: (0, s.jsx)("div", {
                                className: r(l.icon, l.one, a.FileUploadIconClassNames[t[0]])
                            })
                        }), (0, s.jsx)("div", {
                            className: l.wrapThree,
                            children: (0, s.jsx)("div", {
                                className: r(l.icon, l.three, a.FileUploadIconClassNames[t[2]])
                            })
                        }), (0, s.jsx)("div", {
                            className: l.wrapTwo,
                            children: (0, s.jsx)("div", {
                                className: r(l.icon, l.two, a.FileUploadIconClassNames[t[1]])
                            })
                        })]
                    })
                }
        },
        336522: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return m
                },
                UPLOAD_ERROR_MODAL_KEY: function() {
                    return E
                },
                openUploadError: function() {
                    return f
                }
            });
            var s = i("37983");
            i("884691");
            var n = i("414456"),
                r = i.n(n),
                a = i("551042"),
                l = i("516256"),
                o = i("202664"),
                u = i("476765"),
                c = i("109036"),
                d = i("527382"),
                _ = i("831839");

            function m(e) {
                let {
                    title: t,
                    help: i,
                    showPremiumUpsell: n,
                    transitionState: a,
                    icons: m,
                    fileSize: E,
                    onClose: f
                } = e, I = (0, u.useUID)(), L = null != m ? m : d.DEFAULT_FILE_UPLOAD_ICONS;
                return n ? (0, s.jsx)(o.default, {
                    transitionState: a,
                    onClose: f,
                    fileSize: E
                }) : (0, s.jsx)(l.ModalRoot, {
                    size: l.ModalSize.DYNAMIC,
                    "aria-labelledby": I,
                    transitionState: a,
                    children: (0, s.jsx)("div", {
                        className: r(_.uploadDropModal, _.error),
                        children: (0, s.jsxs)("div", {
                            className: _.inner,
                            children: [(0, s.jsx)(c.default, {
                                icons: L
                            }), (0, s.jsx)("div", {
                                id: I,
                                className: _.title,
                                children: t
                            }), (0, s.jsx)("div", {
                                className: _.instructions,
                                children: i
                            })]
                        })
                    })
                })
            }
            let E = "UPLOAD_ERROR_MODAL_KEY";

            function f(e) {
                (0, a.openModal)(t => (0, s.jsx)(m, {
                    ...t,
                    ...e
                }), {
                    modalKey: E
                })
            }
        },
        942377: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getHigherExpectedValue: function() {
                    return r
                },
                getHighestLikelihood: function() {
                    return a
                }
            });
            var s = i("716849"),
                n = i("646718");

            function r(e, t, i) {
                return null == e ? n.PremiumTypes.TIER_2 : e[n.PremiumSubscriptionSKUs.TIER_0] * t > e[n.PremiumSubscriptionSKUs.TIER_2] * i ? n.PremiumTypes.TIER_0 : n.PremiumTypes.TIER_2
            }

            function a(e) {
                if (null == e) return n.PremiumTypes.TIER_0;
                let t = e[s.NON_SUBSCRIBER_SENTINEL],
                    i = e[n.PremiumSubscriptionSKUs.TIER_0],
                    r = e[n.PremiumSubscriptionSKUs.TIER_2];
                return r > i && r > t ? n.PremiumTypes.TIER_2 : n.PremiumTypes.TIER_0
            }
        },
        843647: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return _
                }
            });
            var s = i("446674"),
                n = i("697218"),
                r = i("10514"),
                a = i("719923"),
                l = i("716849"),
                o = i("676572"),
                u = i("942377"),
                c = i("917247"),
                d = i("646718");

            function _(e) {
                let {
                    autoTrackExposure: t,
                    experiment: i,
                    location: _
                } = e, m = (0, s.useStateFromStores)([n.default], () => n.default.getCurrentUser()), E = (0, c.usePremiumTrialOffer)(), f = null != E, I = null != m && (0, a.isPremium)(m);
                (0, l.useMaybeFetchPremiumLikelihood)(i);
                let {
                    enabled: L,
                    useExpectedValue: T,
                    useLikelihood: P
                } = i.useExperiment({
                    location: null != _ ? _ : "1"
                }, {
                    autoTrackExposure: !I && !f && t
                }), {
                    premiumLikelihood: p,
                    fetched: R
                } = (0, s.useStateFromStoresObject)([o.default], () => {
                    let e = o.default.getState();
                    return {
                        fetched: e.fetched,
                        premiumLikelihood: e.premiumLikelihood
                    }
                }), U = (0, s.useStateFromStores)([r.default], () => r.default.isLoadedForSKUs([d.PremiumSubscriptionSKUs.TIER_0, d.PremiumSubscriptionSKUs.TIER_2])), S = !I && L && !f && (T ? !R || !U : !R), M = d.PremiumTypes.TIER_2;
                if (f) {
                    let e = E.subscription_trial;
                    (null == e ? void 0 : e.sku_id) === d.PremiumSubscriptionSKUs.TIER_0 ? M = d.PremiumTypes.TIER_0 : (null == e ? void 0 : e.sku_id) === d.PremiumSubscriptionSKUs.TIER_2 && (M = d.PremiumTypes.TIER_2)
                } else if (!I && !S && L) {
                    if (T) {
                        let {
                            amount: e
                        } = (0, a.getPrice)(d.SubscriptionPlans.PREMIUM_MONTH_TIER_0), {
                            amount: t
                        } = (0, a.getPrice)(d.SubscriptionPlans.PREMIUM_MONTH_TIER_2);
                        M = (0, u.getHigherExpectedValue)(p, e, t)
                    } else P && (M = (0, u.getHighestLikelihood)(p))
                }
                return {
                    isLoading: S,
                    suggestedPremiumType: M
                }
            }
        },
        202664: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return R
                }
            });
            var s = i("37983"),
                n = i("884691"),
                r = i("414456"),
                a = i.n(r),
                l = i("446674"),
                o = i("77078"),
                u = i("109036"),
                c = i("697218"),
                d = i("993105"),
                _ = i("719923"),
                m = i("552917"),
                E = i("843647"),
                f = i("789946"),
                I = i("646718"),
                L = i("49111"),
                T = i("527382"),
                P = i("782340"),
                p = i("74230");

            function R(e) {
                let t, {
                        onClose: i,
                        fileSize: r,
                        ...R
                    } = e,
                    U = null != r && I.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE < r,
                    {
                        isLoading: S,
                        suggestedPremiumType: M
                    } = (0, E.default)({
                        autoTrackExposure: !U,
                        experiment: m.default,
                        location: I.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL
                    }),
                    x = !U && M === I.PremiumTypes.TIER_0,
                    A = (0, l.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
                    O = (0, s.jsx)(u.default, {
                        icons: T.DEFAULT_FILE_UPLOAD_ICONS
                    });
                t = x ? P.default.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
                    premiumPlan: (0, _.getPremiumTypeDisplayName)(I.PremiumTypes.TIER_0),
                    premiumMaxSize: P.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
                }) : P.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
                let N = n.useMemo(() => {
                        let e = _.default.getUserMaxFileSize(A),
                            t = (0, d.formatSize)(e / 1024, {
                                useKibibytes: !0
                            }),
                            i = P.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                                maxSize: t
                            });
                        switch (null == A ? void 0 : A.premiumType) {
                            case I.PremiumTypes.TIER_0:
                                i = P.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
                                    maxSize: t
                                });
                                break;
                            case I.PremiumTypes.TIER_1:
                                i = P.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
                                    maxSize: t
                                })
                        }
                        return i
                    }, [A]),
                    h = (0, s.jsxs)("div", {
                        className: p.body,
                        children: [(0, s.jsx)("span", {
                            children: N
                        }), (0, s.jsx)(o.Text, {
                            variant: "text-md/medium",
                            children: t
                        })]
                    });
                return (0, s.jsx)(f.default, {
                    artElement: O,
                    artContainerClassName: a(p.artContainer),
                    enableArtBoxShadow: !1,
                    type: I.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
                    title: P.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    body: h,
                    context: P.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                        maxSize: P.default.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
                    }),
                    glowUp: t,
                    analyticsLocation: {
                        section: L.AnalyticsSections.FILE_UPLOAD_POPOUT
                    },
                    onClose: i,
                    subscriptionTier: x ? I.PremiumSubscriptionSKUs.TIER_0 : I.PremiumSubscriptionSKUs.TIER_2,
                    isLoading: S,
                    ...R
                })
            }
        },
        789946: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return U
                }
            });
            var s = i("37983"),
                n = i("884691"),
                r = i("414456"),
                a = i.n(r),
                l = i("77078"),
                o = i("812204"),
                u = i("685665"),
                c = i("617917"),
                d = i("599110"),
                _ = i("719923"),
                m = i("154889"),
                E = i("917247"),
                f = i("956597"),
                I = i("635956"),
                L = i("646718"),
                T = i("49111"),
                P = i("782340"),
                p = i("857513"),
                R = i("393828");

            function U(e) {
                var t, i, r;
                let {
                    title: U,
                    type: S,
                    guildBoostProps: M,
                    analyticsSource: x,
                    analyticsLocation: A,
                    body: O,
                    context: N,
                    glowUp: h,
                    modalClassName: v,
                    artContainerClassName: D,
                    bodyClassName: C,
                    transitionState: b,
                    onClose: g,
                    onSubscribeClick: j,
                    onSecondaryClick: y,
                    secondaryCTA: k,
                    subscribeButtonText: F,
                    showNewBadge: B = !1,
                    enableArtBoxShadow: K = !0,
                    subscriptionTier: z = L.PremiumSubscriptionSKUs.TIER_2,
                    isLoading: w = !1,
                    hideBackButton: Y,
                    backButtonText: H,
                    ...G
                } = e, V = null != M, W = (0, E.usePremiumTrialOffer)(), J = (0, m.usePremiumDiscountOffer)(), X = ((null == W ? void 0 : null === (t = W.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === z || (0, m.discountOfferHasTier)(J, z)) && !V, {
                    analyticsLocations: Z
                } = (0, u.default)(o.default.PREMIUM_UPSELL_MODAL);
                n.useEffect(() => {
                    !w && (V ? d.default.track(T.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(S, " - Tier ").concat(M.boostedGuildTier),
                        guild_id: M.guild.id,
                        channel_id: M.channelId,
                        location: A,
                        location_stack: Z
                    }) : d.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: S,
                        source: x,
                        location_stack: Z,
                        sku_id: z
                    }))
                }, [V, z, w]);
                let q = K ? a(p.artContainer, p.artContainerBoxShadow, D) : a(p.artContainer, D),
                    Q = null;
                return Q = "artURL" in G ? (0, s.jsx)("img", {
                    className: p.art,
                    alt: "",
                    src: G.artURL
                }) : G.artElement, (0, s.jsxs)(l.ModalRoot, {
                    className: a(p.root, v),
                    "aria-label": U,
                    transitionState: b,
                    children: [(0, s.jsxs)("div", {
                        className: q,
                        children: [Q, B ? (0, s.jsx)("img", {
                            className: p.sparkleBadge,
                            alt: "",
                            src: R
                        }) : null]
                    }), (0, s.jsx)(l.ModalContent, {
                        className: p.content,
                        children: w ? (0, s.jsx)(l.Spinner, {}) : (0, s.jsx)(s.Fragment, {
                            children: X ? (0, s.jsx)(s.Fragment, {
                                children: (0, s.jsx)(f.default, {
                                    onClose: g,
                                    type: S,
                                    subscriptionTier: null !== (r = null == W ? void 0 : null === (i = W.subscription_trial) || void 0 === i ? void 0 : i.sku_id) && void 0 !== r ? r : L.PremiumSubscriptionSKUs.TIER_2,
                                    headingText: U,
                                    context: N,
                                    analyticsLocationObject: A,
                                    discountOffer: J,
                                    trialOffer: W,
                                    children: h
                                })
                            }) : (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(l.Heading, {
                                    className: p.header,
                                    variant: "heading-xl/semibold",
                                    children: U
                                }), (0, s.jsx)(l.Text, {
                                    variant: "text-md/normal",
                                    className: a(C),
                                    children: O
                                })]
                            })
                        })
                    }), (0, s.jsxs)(l.ModalFooter, {
                        className: p.footer,
                        children: [(0, s.jsxs)("div", {
                            className: p.primaryActions,
                            children: [null != k ? (0, s.jsx)(l.Button, {
                                className: p.secondaryAction,
                                onClick: y,
                                size: l.Button.Sizes.SMALL,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: k
                            }) : null, (() => {
                                let e, t;
                                if (V) return (0, s.jsx)(c.default, {
                                    analyticsLocation: A,
                                    guild: M.guild,
                                    onClose: g
                                });
                                if (X) {
                                    if (null != W) {
                                        var i, n;
                                        e = (0, _.formatTrialCtaIntervalDuration)({
                                            intervalType: null == W ? void 0 : null === (i = W.subscription_trial) || void 0 === i ? void 0 : i.interval,
                                            intervalCount: null == W ? void 0 : null === (n = W.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                                        }), t = null == W ? void 0 : W.trial_id
                                    } else null != J && (e = P.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                        percent: J.discount.amount
                                    }))
                                }
                                return (0, s.jsx)(I.default, {
                                    premiumModalAnalyticsLocation: A,
                                    subscriptionTier: z,
                                    trialId: t,
                                    size: l.Button.Sizes.SMALL,
                                    color: l.Button.Colors.GREEN,
                                    onClick: () => {
                                        null == j || j(), g()
                                    },
                                    buttonText: null != F ? F : e
                                })
                            })()]
                        }), !Y && (0, s.jsx)(l.Button, {
                            onClick: g,
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            children: null != H ? H : P.default.Messages.BACK
                        })]
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=80574.375b5be1da3c7307c49f.js.map