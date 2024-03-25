(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["72879"], {
        542631: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a6ac55e775bc50ff5bff.svg"
        },
        518672: function(e, t, n) {
            "use strict";
            e.exports = n.p + "52e736e812c20d1dfda1.svg"
        },
        55620: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchAllStoreListingsForApplication: function() {
                    return d
                },
                fetchStoreListingForSku: function() {
                    return f
                },
                fetchStoreListingById: function() {
                    return p
                },
                fetchStoreListingForApplication: function() {
                    return m
                },
                matureAgree: function() {
                    return h
                },
                matureDisagree: function() {
                    return S
                },
                joinPublishedStoreListingSkuGuild: function() {
                    return I
                },
                goToSKUStoreListing: function() {
                    return g
                },
                goToApplicationStoreListing: function() {
                    return C
                }
            });
            var i = n("872717"),
                a = n("913144"),
                s = n("84460");
            n("299285");
            var r = n("393414"),
                l = n("552712");
            n("698041");
            var o = n("167726"),
                u = n("271560"),
                c = n("49111");

            function d(e) {
                return (0, u.httpGetWithCountryCodeQuery)({
                    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
                    query: {
                        application_id: e
                    },
                    oldFormErrors: !0
                }).then(e => (a.default.dispatch({
                    type: "STORE_LISTINGS_FETCH_SUCCESS",
                    storeListings: e.body
                }), e.body))
            }

            function f(e) {
                let t = l.default.get(e),
                    n = null != t && (o.default.inTestModeForApplication(t.applicationId) || s.default.inDevModeForApplication(t.applicationId));
                return (0, u.httpGetWithCountryCodeQuery)(n ? c.Endpoints.STORE_LISTINGS_SKU(e) : c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e)).then(e => {
                    n ? a.default.dispatch({
                        type: "STORE_LISTINGS_FETCH_SUCCESS",
                        storeListings: e.body
                    }) : a.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: e.body
                    })
                })
            }

            function p(e) {
                return (0, u.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_LISTING(e)).then(e => {
                    a.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: e.body
                    })
                })
            }

            function m(e) {
                return (0, u.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then(e => {
                    a.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: e.body
                    })
                })
            }

            function h() {
                a.default.dispatch({
                    type: "APPLICATION_STORE_MATURE_AGREE"
                })
            }

            function S() {
                (0, r.transitionTo)(c.Routes.APPLICATION_STORE)
            }

            function I(e) {
                return i.HTTP.post({
                    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
                    oldFormErrors: !0
                })
            }

            function g(e, t) {
                let {
                    pathname: n,
                    ...i
                } = (0, u.getStoreListingLocation)(e, t);
                (0, r.transitionTo)(n, i)
            }

            function C(e, t) {
                let {
                    pathname: n,
                    ...i
                } = (0, u.getApplicationStoreListingLocation)(e, t);
                (0, r.transitionTo)(n, i)
            }
        },
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007"), n("70102"), n("843762"), n("424973");
            var i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                r = n.n(s),
                l = n("817736"),
                o = n.n(l),
                u = n("118810"),
                c = n("446674"),
                d = n("407063"),
                f = n("845579"),
                p = n("901165"),
                m = n("62843"),
                h = n("315102"),
                S = n("402671"),
                I = n("866190"),
                g = n("115279");
            class C extends a.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: i,
                            animated: a,
                            shouldAnimate: s,
                            isFocused: r,
                            isInteracting: l,
                            size: o = "default"
                        } = e,
                        {
                            hover: u
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = g.EMOJI_SIZE_MAP[o];
                        return h.default.getEmojiURL({
                            id: n,
                            animated: r && !0 === a && (!0 === s || u || !0 === l),
                            size: e
                        })
                    }
                    if (null != i) return S.default.getURL(i)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: s,
                        className: l,
                        size: o = "default",
                        alt: u,
                        shouldAnimate: c,
                        isFocused: d,
                        emojiId: f,
                        autoplay: p,
                        isInteracting: m,
                        ...h
                    } = this.props, S = this.getSrc();
                    return null == S || "" === S ? (0, i.jsx)("span", {
                        className: r("emoji", "emoji-text"),
                        children: n
                    }) : (s && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, a.createElement)("img", {
                        ...h,
                        key: this.key,
                        src: S,
                        alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: r("emoji", l, {
                            jumboable: "jumbo" === o
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != f && "" !== f ? {
                            "data-id": f
                        } : {
                            "data-name": n
                        }
                    }))
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hover: !1
                    }, this.key = void 0, this.onError = () => {
                        let e = this.getSrc();
                        null != e && (this.cancelLoadImage = (0, d.loadImage)(e, e => {
                            !e && (this.key = Date.now(), this.forceUpdate())
                        }))
                    }, this.onMouseEnter = e => {
                        this.setState({
                            hover: !0
                        });
                        let {
                            onMouseEnter: t
                        } = this.props;
                        null != t && t(e)
                    }, this.onMouseLeave = e => {
                        this.setState({
                            hover: !1
                        });
                        let {
                            onMouseLeave: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            C.defaultProps = {
                isInteracting: !1
            };
            let E = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, i.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    s = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let i = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == i) return;
                            let a = i[1];
                            if (e.intersectionRatio >= .7) {
                                var s, r;
                                if (-1 !== t.indexOf(a)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (s = e.rootBounds) || void 0 === s ? void 0 : s.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (r = e.rootBounds) || void 0 === r ? void 0 : r.top));
                                n ? t.unshift(a) : t.push(a), a.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(a); - 1 !== e && (t.splice(e, 1), a.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function r(e) {
                    let t = o.findDOMNode(e);
                    (0, u.isElement)(t) && (n.push([t, e]), s.observe(t))
                }

                function l(e) {
                    let i = o.findDOMNode(e);
                    s.unobserve(i);
                    let a = n.findIndex(t => {
                        let [n, i] = t;
                        return i === e
                    }); - 1 !== a && (n.splice(a, 1), -1 !== (a = t.indexOf(e)) && (t.splice(a, 1), a < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends a.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && r(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? r(this) : l(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && l(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: a,
                                allowAnimatedEmoji: s,
                                ...r
                            } = this.props;
                        return (0, i.jsx)(m.MessagesInteractionContext.Consumer, {
                            children: t => (0, i.jsx)(e, {
                                ...r,
                                autoplay: a || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && s
                            })
                        })
                    }
                }
            }(C);

            function v(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    a = __OVERLAY__ ? (0, c.useStateFromStores)([p.default], () => p.default.isInstanceFocused()) : (0, I.useIsWindowFocused)();
                return (0, i.jsx)(E, {
                    ...e,
                    ...n,
                    isFocused: a
                })
            }
        },
        618991: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("300036");
            n.es(i, t)
        },
        834897: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var i = n("884691"),
                a = n("244201");

            function s(e) {
                let {
                    renderWindow: t
                } = (0, i.useContext)(a.default), [n, s] = (0, i.useState)(() => t.matchMedia(e).matches);
                return (0, i.useEffect)(() => {
                    let n = t.matchMedia(e),
                        i = e => {
                            s(null == e ? void 0 : e.matches)
                        };
                    return i(n), n.addListener(i), () => n.removeListener(i)
                }, [e, t]), n
            }
        },
        635357: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftContextProvider: function() {
                    return I
                },
                useGiftContext: function() {
                    return h
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                s = n("210721"),
                r = n("53253"),
                l = n("105097"),
                o = n("659632"),
                u = n("642906"),
                c = n("646718"),
                d = n("782340");
            let f = c.PremiumGiftStyles.STANDARD_BOX,
                p = void 0,
                [m, h, S] = (0, l.default)();

            function I(e) {
                let {
                    isGift: t = !1,
                    giftRecipient: n,
                    giftMessage: l,
                    children: h
                } = e, {
                    selectedSkuId: S
                } = (0, u.usePaymentContext)(), [I, g] = a.useState(n), [C, E] = a.useState(), [v, A] = a.useState(!1), N = (0, o.shouldShowCustomGiftExperience)(I), x = (0, r.useIsSeasonalGiftingActive)(), {
                    enabled: T
                } = r.default.useExperiment({
                    location: "PaymentContextProvider"
                }, {
                    autoTrackExposure: N && x
                }), [_, b] = a.useState(N ? T && x ? c.PremiumGiftStyles.SEASONAL_STANDARD_BOX : f : p), [L, j] = a.useState(t && (0, o.getGiftExperience)(I) === o.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD ? d.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : l), [y, M] = a.useState(void 0), [O, P] = a.useState(void 0), R = (0, o.useGetGiftCode)(S, t), [U, B] = a.useState(!1), [G, w] = a.useState(!1), [D, k] = a.useState(), F = a.useCallback(e => {
                    let {
                        onSubscriptionConfirmation: t
                    } = e;
                    return w(!0), (0, s.sendGiftMessage)(I, R).then(() => {
                        w(!1), null == t || t(), B(!0)
                    }).catch(e => {
                        w(!1), k(e), B(!0)
                    })
                }, [I, R, w, B, k]);
                return (0, i.jsx)(m.Provider, {
                    value: {
                        isGift: t,
                        giftCode: R,
                        giftMessage: l,
                        giftRecipient: I,
                        setGiftRecipient: g,
                        giftRecipientError: C,
                        setGiftRecipientError: E,
                        validatingGiftRecipient: v,
                        setValidatingGiftRecipient: A,
                        soundEffect: y,
                        setSoundEffect: M,
                        emojiConfetti: O,
                        setEmojiConfetti: P,
                        customGiftMessage: L,
                        setCustomGiftMessage: j,
                        selectedGiftStyle: _,
                        setSelectedGiftStyle: b,
                        sendGiftMessage: F,
                        hasSentMessage: U,
                        isSendingMessage: G,
                        giftMessageError: D
                    },
                    children: h
                })
            }
        },
        159149: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CTAType: function() {
                    return a
                },
                default: function() {
                    return p
                }
            });
            var i, a, s = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("145131"),
                o = n("181114"),
                u = n("376641"),
                c = n("782340"),
                d = n("30501");
            (i = a || (a = {}))[i.CONTINUE = 0] = "CONTINUE", i[i.UPGRADE = 1] = "UPGRADE", i[i.PURCHASE = 2] = "PURCHASE";
            let f = e => {
                let {
                    onBack: t,
                    backText: n,
                    primaryIcon: i,
                    primaryCTA: a,
                    primaryType: f,
                    primaryText: p,
                    primaryTooltip: m,
                    primaryDisabled: h,
                    primarySubmitting: S,
                    onPrimary: I,
                    secondaryText: g,
                    onSecondary: C
                } = e;
                return (0, s.jsxs)(r.ModalFooter, {
                    justify: l.default.Justify.BETWEEN,
                    align: l.default.Align.CENTER,
                    children: [(() => {
                        if (null == a || null == p) return null;
                        let e = 2 === a ? o.default : r.Button,
                            t = {
                                innerClassName: d.button,
                                type: f,
                                disabled: h,
                                submitting: S,
                                color: 0 === a ? r.Button.Colors.BRAND : r.Button.Colors.GREEN,
                                onClick: I
                            };
                        return null != m ? (0, s.jsx)(r.Tooltip, {
                            text: m,
                            children: n => (0, s.jsxs)(e, {
                                ...n,
                                ...t,
                                children: [null == i ? null : (0, s.jsx)(i, {
                                    className: d.primaryIcon
                                }), p]
                            })
                        }) : (0, s.jsxs)(e, {
                            ...t,
                            children: [null == i ? null : (0, s.jsx)(i, {
                                className: d.primaryIcon
                            }), p]
                        })
                    })(), null == g ? null : (0, s.jsx)(r.Button, {
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        onClick: C,
                        children: g
                    }), (0, s.jsx)(u.default, {}), null == t ? null : (0, s.jsx)(r.Button, {
                        className: d.back,
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        onClick: t,
                        children: null != n ? n : c.default.Messages.BACK
                    })]
                })
            };
            f.CTAType = a;
            var p = f
        },
        376641: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                r = n("77078"),
                l = n("600785"),
                o = n("782340"),
                u = n("849693"),
                c = n("125047");

            function d() {
                return (0, i.jsxs)("div", {
                    className: s(u.paymentModalLockIcon, c.flex, c.alignCenter),
                    children: [(0, i.jsx)(l.default, {
                        className: u.lockIcon,
                        width: 18,
                        height: 18
                    }), (0, i.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        children: o.default.Messages.BILLING_SECURE
                    })]
                })
            }
        },
        426380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openApplicationPaymentModal: function() {
                    return m
                },
                openActivityApplicationPaymentModal: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("627445"),
                s = n.n(a),
                r = n("77078"),
                l = n("316718"),
                o = n("55620"),
                u = n("927078"),
                c = n("248933"),
                d = n("129408"),
                f = n("635357"),
                p = n("49111");

            function m(e) {
                let {
                    initialPlanId: t,
                    activeSubscription: a,
                    analyticsObject: s,
                    analyticsLocation: l,
                    analyticsLocations: o,
                    analyticsSubscriptionType: u,
                    renderHeader: c,
                    planGroup: d,
                    skuId: m,
                    guildId: h,
                    reviewWarningMessage: S,
                    applicationId: I,
                    showBenefitsFirst: g,
                    eligibleApplicationSubscriptionGuilds: C,
                    onComplete: E,
                    forcesTransitionToGuild: v
                } = e;
                (0, r.openModalLazy)(async () => {
                    let {
                        PaymentContextProvider: e
                    } = await n.el("642906").then(n.bind(n, "642906")), r = (await n.el("526257").then(n.bind(n, "526257"))).default, {
                        getApplicationPaymentSteps: p
                    } = await n.el("470521").then(n.bind(n, "470521")), A = p({
                        guildId: h,
                        showBenefitsFirst: g,
                        eligibleApplicationSubscriptionGuilds: C
                    });
                    return n => (0, i.jsx)(e, {
                        applicationId: I,
                        activeSubscription: a,
                        stepConfigs: A,
                        skuIDs: [m],
                        children: (0, i.jsx)(f.GiftContextProvider, {
                            children: (0, i.jsx)(r, {
                                ...n,
                                initialPlanId: t,
                                skuId: m,
                                analyticsLocations: o,
                                analyticsObject: s,
                                analyticsLocation: l,
                                analyticsSubscriptionType: u,
                                renderHeader: c,
                                planGroup: d,
                                reviewWarningMessage: S,
                                applicationId: I,
                                guildId: null != h ? h : void 0,
                                onComplete: E,
                                forcesTransitionToGuild: v
                            })
                        })
                    })
                }, {
                    onCloseRequest: p.NOOP
                })
            }
            let h = async e => {
                let t = c.default.getSubscriptionGroupListingForApplication(e);
                if (null != t) return t;
                let n = await (0, o.fetchAllStoreListingsForApplication)(e),
                    i = n.find(e => e.sku.type === p.SKUTypes.SUBSCRIPTION_GROUP);
                s(null != i, "Failed to find subscription store listing"), await (0, u.fetchAllSubscriptionListingsDataForApplication)(e, null == i ? void 0 : i.id);
                let a = c.default.getSubscriptionGroupListingForApplication(e);
                return s(null != a, "Failed to find subscription group listing"), a
            }, S = async (e, t) => {
                let n = await (0, l.fetchUserEntitlementsForApplication)(e),
                    i = n.filter(e => null == e.ends_at || new Date(e.ends_at) > new Date).find(e => e.sku_id === t);
                s(null == i, "User already has an active subscription to this SKU")
            };
            async function I(e) {
                let {
                    applicationId: t,
                    skuId: n,
                    initialPlanId: i,
                    analyticsLocationObject: a,
                    analyticsLocations: r,
                    renderHeader: l
                } = e, o = await h(t), u = (0, d.getPayableSubscriptionListing)(o);
                s(null != u, "Failed to find subscription listing");
                let c = (0, d.isApplicationUserSubscription)(u.sku_flags);
                s(c, "Guild application subscriptions unsupported!"), s(u.published, "Subscription listing not published"), await S(t, n);
                let f = {
                    initialPlanId: null != i ? i : null == u ? void 0 : u.subscription_plans[0].id,
                    activeSubscription: null,
                    analyticsLocations: r,
                    analyticsLocationObject: a,
                    analyticsSubscriptionType: p.SubscriptionTypes.APPLICATION,
                    renderHeader: l,
                    planGroup: o.subscription_listings_ids,
                    skuId: n,
                    guildId: null,
                    eligibleApplicationSubscriptionGuilds: [],
                    showBenefitsFirst: !1,
                    applicationId: t,
                    listing: u
                };
                m(f)
            }
        },
        210721: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnimationState: function() {
                    return i
                },
                sendGiftMessage: function() {
                    return f
                }
            }), n("70102");
            var i, a, s = n("627445"),
                r = n.n(s),
                l = n("450911"),
                o = n("819689"),
                u = n("884351"),
                c = n("42203"),
                d = n("659632");
            (a = i || (i = {})).ACTION = "action", a.LOOP = "loop", a.IDLE = "idle";
            let f = async (e, t) => {
                if (null == t) throw Error("giftCode must be defined");
                if (null == e) throw Error("Recipient must be defined");
                let n = await l.default.openPrivateChannel(e.id).then(e => {
                        let t = c.default.getChannel(e);
                        if (r(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                        return t
                    }),
                    i = (0, d.getGiftCodeURL)(t);
                return o.default.sendMessage(n.id, u.default.parse(n, i), void 0, {
                    isGiftLinkSentOnBehalfOfUser: !0
                })
            }
        },
        53253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SeasonalGiftingMarketingExperiment: function() {
                    return d
                },
                useIsSeasonalGiftingActive: function() {
                    return f
                },
                default: function() {
                    return p
                }
            }), n("222007");
            var i = n("884691"),
                a = n("866227"),
                s = n.n(a),
                r = n("862337"),
                l = n("296892");
            let o = new Date("2024-01-04T07:59:59.000Z"),
                u = s(o),
                c = (0, l.default)({
                    id: "2023-11_seasonal_gifting",
                    label: "Seasonal Gifting 2023",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                d = (0, l.default)({
                    id: "2023-11_seasonal_gifting_marketing_2023",
                    label: "Seasonal Gifting Marketing 2023",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function f() {
                let [e, t] = i.useState(() => u.isAfter(Date.now()));
                return i.useEffect(() => {
                    let n = new r.Timeout,
                        i = () => {
                            let e = Math.min(u.diff(Date.now(), "millisecond"), 864e5);
                            null == n || n.start(e, () => {
                                u.isBefore(Date.now()) ? t(!1) : i()
                            })
                        };
                    return e && i(), () => n.stop()
                }), e
            }
            var p = c
        },
        101703: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY: function() {
                    return i
                },
                RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY: function() {
                    return a
                }
            });
            let i = "(max-width: 485px)",
                a = "(max-height: 450px)"
        },
        945986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationBenefitsModalIcon: function() {
                    return c
                },
                ApplicationBenefitsModalHeading: function() {
                    return d
                },
                ApplicationBenefitsModalDivider: function() {
                    return f
                },
                ApplicationBenefitsModalDescription: function() {
                    return p
                },
                ApplicationBenefitsModalBenefits: function() {
                    return m
                },
                ApplicationBenefitsModalContent: function() {
                    return h
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                r = n("77078"),
                l = n("167007"),
                o = n("139737"),
                u = n("678598");
            let c = e => {
                    let {
                        application: t,
                        asset: n,
                        className: a,
                        ...s
                    } = e;
                    return (0, i.jsx)(l.default, {
                        application: t,
                        size: l.ApplicationIconSize.MEDIUM,
                        asset: n,
                        className: a,
                        ...s
                    })
                },
                d = e => {
                    let {
                        children: t,
                        className: n,
                        id: a,
                        ...l
                    } = e;
                    return (0, i.jsx)(r.Heading, {
                        className: s(u.header, n),
                        variant: "heading-xl/extrabold",
                        id: a,
                        ...l,
                        children: t
                    })
                };

            function f() {
                return (0, i.jsx)("hr", {
                    className: u.divider
                })
            }
            let p = e => {
                    let {
                        className: t,
                        title: n,
                        description: a,
                        ...s
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: t,
                        ...s,
                        children: [(0, i.jsx)(r.Heading, {
                            variant: "heading-md/bold",
                            color: "header-primary",
                            children: n
                        }), (0, i.jsx)(r.Heading, {
                            variant: "heading-sm/normal",
                            color: "header-secondary",
                            children: a
                        })]
                    })
                },
                m = e => {
                    let {
                        applicationId: t,
                        storeListingBenefits: n,
                        skuBenefits: a,
                        className: r,
                        ...l
                    } = e;
                    return (0, i.jsx)("div", {
                        className: s(u.benefitsContainer, r),
                        ...l,
                        children: (0, i.jsx)(o.SubscriptionListingBenefits, {
                            applicationId: t,
                            storeListingBenefits: n,
                            skuBenefits: a,
                            className: u.benefit
                        })
                    })
                },
                h = e => {
                    let {
                        children: t,
                        className: n,
                        ...a
                    } = e;
                    return (0, i.jsx)("div", {
                        className: s(u.container, n),
                        ...a,
                        children: t
                    })
                }
        },
        167007: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationIconSize: function() {
                    return a
                },
                default: function() {
                    return f
                }
            });
            var i, a, s = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                o = n("315102"),
                u = n("271560"),
                c = n("614181");
            (i = a || (a = {}))[i.SMALL = 40] = "SMALL", i[i.MEDIUM = 66] = "MEDIUM";
            let d = {
                40: c.small,
                66: c.medium
            };
            var f = e => {
                let t, {
                    application: n,
                    size: i,
                    asset: a,
                    className: r
                } = e;
                return t = null != a ? (0, u.getAssetURL)(n.id, a, i) : o.default.getApplicationIconURL({
                    id: n.id,
                    icon: n.icon,
                    size: i
                }), (0, s.jsx)("img", {
                    alt: "",
                    src: t,
                    className: l(c.icon, d[i], r)
                })
            }
        },
        713536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PurchaseHeader: function() {
                    return S
                },
                BenefitsConfirmation: function() {
                    return I
                },
                PurchaseConfirmation: function() {
                    return g
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("834897"),
                r = n("85336"),
                l = n("159149"),
                o = n("650484"),
                u = n("945330"),
                c = n("945986"),
                d = n("101703"),
                f = n("782340"),
                p = n("101386"),
                m = n("542631"),
                h = n("518672");
            let S = e => {
                    let {
                        step: t,
                        onClose: n
                    } = e, l = (0, s.default)(d.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                    return t === r.Step.CONFIRM || t === r.Step.BENEFITS ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
                        className: p.headerContainer,
                        children: [!l && (0, i.jsx)("div", {
                            className: p.headerImageContainer,
                            "aria-hidden": "true",
                            children: (0, i.jsx)("img", {
                                src: h,
                                alt: "",
                                className: p.headerImage
                            })
                        }), (0, i.jsx)(a.Clickable, {
                            className: p.closeContainer,
                            onClick: () => n(),
                            "aria-label": f.default.Messages.CLOSE,
                            children: (0, i.jsx)(u.default, {
                                className: p.closeIcon
                            })
                        })]
                    })
                },
                I = e => {
                    let {
                        icon: t,
                        storeListingBenefits: n,
                        skuBenefits: a,
                        application: s,
                        title: r,
                        subtitle: l,
                        description: o
                    } = e;
                    return null == s ? null : (0, i.jsx)("div", {
                        className: p.confirmationContainer,
                        children: (0, i.jsxs)(c.ApplicationBenefitsModalContent, {
                            children: [(0, i.jsx)(c.ApplicationBenefitsModalIcon, {
                                application: s,
                                asset: t
                            }), (0, i.jsx)(c.ApplicationBenefitsModalHeading, {
                                children: r
                            }), (0, i.jsx)(c.ApplicationBenefitsModalDivider, {}), (0, i.jsx)(c.ApplicationBenefitsModalDescription, {
                                title: l,
                                description: o
                            }), (0, i.jsx)(c.ApplicationBenefitsModalBenefits, {
                                applicationId: s.id,
                                storeListingBenefits: n,
                                skuBenefits: a
                            })]
                        })
                    })
                };

            function g(e) {
                let {
                    tierName: t,
                    onConfirm: n,
                    subscription: s
                } = e;
                return (0, i.jsxs)("div", {
                    className: p.purchaseConfirmation,
                    children: [(0, i.jsx)("img", {
                        src: m,
                        alt: "",
                        width: 300,
                        height: 126
                    }), (0, i.jsx)(a.Heading, {
                        className: p.confirmationTitle,
                        variant: "heading-xl/extrabold",
                        color: "header-primary",
                        children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
                            tier: t
                        })
                    }), (0, i.jsx)(a.Text, {
                        className: p.confirmationSubtitle,
                        variant: "text-md/medium",
                        color: "header-secondary",
                        children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                            timestamp: null == s ? void 0 : s.currentPeriodEnd
                        })
                    }), (0, i.jsx)(o.PaymentPortalFooter, {
                        children: (0, i.jsx)(l.default, {
                            onPrimary: n,
                            primaryCTA: l.CTAType.CONTINUE,
                            primaryText: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                        })
                    })]
                })
            }
        },
        139737: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SubscriptionListingBenefits: function() {
                    return c
                },
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                r = n("77078"),
                l = n("430568"),
                o = n("377527"),
                u = n("673064");

            function c(e) {
                let t, {
                    applicationId: n,
                    storeListingBenefits: a,
                    skuBenefits: r,
                    className: l
                } = e;
                return null != a ? t = a.map(e => (0, i.jsx)(f, {
                    applicationId: n,
                    benefit: e,
                    className: s(u.benefit, l)
                }, e.id)) : null != r && (t = r.map((e, t) => (0, i.jsx)(d, {
                    benefit: e,
                    className: s(u.benefit, l)
                }, t))), (0, i.jsx)(i.Fragment, {
                    children: t
                })
            }

            function d(e) {
                let {
                    benefit: t,
                    className: n,
                    emojiContainerClassName: a,
                    showsDescription: o = !0,
                    nameTextVariant: c = "text-md/medium",
                    nameTextColor: d = "header-primary"
                } = e;
                return (0, i.jsxs)("div", {
                    className: s(u.container, n),
                    children: [null != t.emoji && (0, i.jsx)("div", {
                        className: s(u.emojiContainer, a),
                        children: (0, i.jsx)(l.default, {
                            emojiId: t.emoji.id,
                            emojiName: t.emoji.name,
                            animated: t.emoji.animated
                        })
                    }), (0, i.jsxs)("div", {
                        className: u.infoContainer,
                        children: [(0, i.jsx)(r.Text, {
                            variant: c,
                            color: d,
                            className: u.name,
                            children: t.name
                        }), o && (0, i.jsx)(r.Text, {
                            color: "interactive-normal",
                            variant: "text-sm/normal",
                            children: t.description
                        })]
                    })]
                })
            }

            function f(e) {
                let {
                    applicationId: t,
                    benefit: n,
                    className: a,
                    emojiContainerClassName: l,
                    showsDescription: c = !0,
                    nameTextVariant: d = "text-md/medium",
                    nameTextColor: f = "header-primary"
                } = e;
                return (0, i.jsxs)("div", {
                    className: s(u.container, a),
                    children: [(0, i.jsx)("div", {
                        className: s(u.emojiContainer, l),
                        children: (0, o.getBenefitIcon)(t, n.icon)
                    }), (0, i.jsxs)("div", {
                        className: u.infoContainer,
                        children: [(0, i.jsx)(r.Text, {
                            variant: d,
                            color: f,
                            className: u.name,
                            children: n.name
                        }), c && (0, i.jsx)(r.Text, {
                            color: "interactive-normal",
                            variant: "text-sm/normal",
                            children: n.description
                        })]
                    })]
                })
            }
        },
        449809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                confirmNoSharedServerSubscribeWarningModal: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078");

            function s(e) {
                let {
                    applicationName: t,
                    onConfirm: s,
                    onCancel: r
                } = e;
                return (0, a.openModalLazy)(async () => {
                    let {
                        ConfirmNoSharedServerSubscribeWarningModal: e
                    } = await n.el("754768").then(n.bind(n, "754768"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        applicationName: t,
                        onConfirm: s,
                        onCancel: r
                    })
                }, {
                    modalKey: "application-user-subscribe-no-shared-server-warning"
                })
            }
        },
        377527: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getBenefitIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("336110"),
                s = n("430568"),
                r = n("271560");

            function l(e, t) {
                if (null != t) switch (t.type) {
                    case a.IconType.STORE_ASSET:
                        let n = (0, r.getAssetURL)(e, t.store_asset_id);
                        return (0, i.jsx)("img", {
                            src: n,
                            alt: "",
                            className: "emoji"
                        });
                    case a.IconType.EMOJI:
                        return (0, i.jsx)(s.default, {
                            emojiName: t.emoji
                        })
                }
            }
        },
        375010: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("627445"),
                r = n.n(s),
                l = n("446674"),
                o = n("913144"),
                u = n("775433"),
                c = n("685665"),
                d = n("598981"),
                f = n("426380"),
                p = n("697218"),
                m = n("10514"),
                h = n("991254"),
                S = n("129408"),
                I = n("713536"),
                g = n("449809"),
                C = n("49111"),
                E = n("782340"),
                v = e => {
                    var t;
                    let n, {
                            listing: s,
                            guildId: v,
                            groupListingId: A,
                            analyticsLocation: N,
                            showBenefitsFirst: x,
                            onComplete: T,
                            forcesTransitionToGuild: _
                        } = e,
                        b = null == s ? void 0 : s.subscription_plans[0],
                        L = null == s ? void 0 : s.application_id,
                        j = null == b ? void 0 : b.id,
                        y = (null == s ? void 0 : s.published) === !0,
                        M = null == b ? void 0 : b.sku_id,
                        O = (0, l.useStateFromStores)([m.default], () => null != j ? m.default.get(j) : null),
                        P = (0, h.useApplication)(L),
                        R = (0, h.useSubscriptionListingsForGroup)(A, {
                            includeSoftDeleted: !0
                        }),
                        U = R.map(e => e.subscription_plans[0].id),
                        {
                            analyticsLocations: B
                        } = (0, c.default)(),
                        {
                            activeSubscription: G,
                            activeEntitlement: w
                        } = (0, h.useActiveSubscriptionListingForApplication)(L, v),
                        D = (0, h.useEligibleApplicationSubscriptionGuilds)(L, v),
                        k = (0, d.default)(),
                        F = null != s && (0, S.isApplicationUserSubscription)(s.sku_flags),
                        H = null != w && w.userId === (null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                        K = null == w || H,
                        V = null == w || U.length > 1,
                        W = null != v || D.length > 0,
                        Z = F && H,
                        z = null != O && null != P && K && V && (W || F) && !Z;
                    K ? W ? Z && null != O && (n = E.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
                        tierName: O.name
                    })) : n = E.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = E.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, a.useEffect(() => {
                        y && null != M && k && o.default.wait(() => {
                            (0, u.fetchSubscriptionPlansForSKU)(M)
                        })
                    }, [y, M, k]);
                    let J = a.useCallback(() => {
                        r(null != P, "No application"), r(null != b, "No subscription plan"), r(y, "Cannot purchase this unpublished plan");
                        let e = () => {
                            (0, f.openApplicationPaymentModal)({
                                activeSubscription: G,
                                analyticsSubscriptionType: C.SubscriptionTypes.APPLICATION,
                                analyticsLocations: B,
                                analyticsLocation: N,
                                renderHeader: (e, t, n) => (0, i.jsx)(I.PurchaseHeader, {
                                    step: n,
                                    onClose: () => t(!1)
                                }),
                                initialPlanId: b.id,
                                skuId: b.sku_id,
                                guildId: v,
                                eligibleApplicationSubscriptionGuilds: D,
                                planGroup: U,
                                applicationId: P.id,
                                showBenefitsFirst: x,
                                onComplete: T,
                                forcesTransitionToGuild: _
                            })
                        };
                        !W && F ? (0, g.confirmNoSharedServerSubscribeWarningModal)({
                            applicationName: P.name,
                            onConfirm: e,
                            onCancel: () => {}
                        }) : e()
                    }, [y, b, U, P, v, W, F, B, N, G, x, D, T, _]);
                    return {
                        openModal: J,
                        canOpenModal: z,
                        cannotOpenReason: n
                    }
                }
        },
        62843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return a
                }
            });
            var i = n("884691");
            let a = i.createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        600785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("434657"),
                r = n("75196"),
                l = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: a,
                            id: "a",
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z"
                        })
                    })
                }, s.LockIcon, void 0, {
                    size: 24
                })
        },
        300036: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TicketIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("82169");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M2.1 12a3 3 0 0 0 0 4.24l.46.46c.17.17.43.2.65.1a3 3 0 0 1 4 4c-.1.2-.08.47.08.64l.47.46a3 3 0 0 0 4.24 0l6.77-6.77a1 1 0 0 1 1.36-1.36L21.9 12a3 3 0 0 0 0-4.24l-.46-.47a.56.56 0 0 0-.65-.08 3 3 0 0 1-4-4 .56.56 0 0 0-.09-.65l-.46-.46a3 3 0 0 0-4.24 0l-1.77 1.77a1 1 0 0 1-1.36 1.36L2.1 12Zm10.01-6.3A1 1 0 1 0 10.7 7.1l.69.7a1 1 0 1 0 1.41-1.42l-.69-.7Zm2.75 2.75a1 1 0 1 0-1.41 1.41l.69.7a1 1 0 0 0 1.41-1.42l-.69-.7Zm2.75 2.75a1 1 0 0 0-1.41 1.41l.69.7a1 1 0 0 0 1.41-1.42l-.69-.7Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        336110: function(e, t, n) {
            "use strict";
            var i, a;
            n.r(t), n.d(t, {
                IconType: function() {
                    return i
                }
            }), (a = i || (i = {}))[a.STORE_ASSET = 1] = "STORE_ASSET", a[a.EMOJI = 2] = "EMOJI"
        }
    }
]);
//# sourceMappingURL=72879.9fd4e38796cda8ae2157.js.map