(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["44504"], {
        626839: function(e, t, s) {
            "use strict";
            e.exports = s.p + "d4dd118fbb46696c4b53.svg"
        },
        353962: function(e, t, s) {
            "use strict";
            e.exports = s.p + "d619655b15293074d742.svg"
        },
        29887: function(e, t, s) {
            "use strict";
            e.exports = s.p + "679cef38d2928bbc10e5.svg"
        },
        311908: function(e, t, s) {
            "use strict";
            e.exports = s.p + "9af61b18ad6cd164dbb5.svg"
        },
        429300: function(e, t, s) {
            "use strict";
            e.exports = s.p + "010fced8ed1844b9f9dd.svg"
        },
        949004: function(e, t, s) {
            "use strict";
            e.exports = s.p + "2c946c5f3df49f71ccdd.svg"
        },
        209988: function(e, t, s) {
            "use strict";
            e.exports = s.p + "47f8da753daecdf648c7.svg"
        },
        382100: function(e, t, s) {
            "use strict";
            e.exports = s.p + "af4880fd576e4d86d601.svg"
        },
        335071: function(e, t, s) {
            "use strict";
            e.exports = s.p + "3e31291227af49679828.svg"
        },
        43636: function(e, t, s) {
            "use strict";
            e.exports = s.p + "218d6a625bee12aee527.svg"
        },
        427945: function(e, t, s) {
            "use strict";
            e.exports = s.p + "30caa98c359c7dbd0b03.svg"
        },
        189775: function(e, t, s) {
            "use strict";
            e.exports = s.p + "873f845567c87001cb16.png"
        },
        402826: function(e, t, s) {
            "use strict";
            e.exports = s.p + "56077ef9f3fc982efbef.png"
        },
        938305: function(e, t, s) {
            "use strict";
            e.exports = s.p + "83aa75a7abb153a316f4.svg"
        },
        144865: function(e, t, s) {
            "use strict";
            e.exports = s.p + "c0f08bfce576c1a0b2ba.svg"
        },
        309504: function(e, t, s) {
            "use strict";
            e.exports = s.p + "c76e8f35b17ef04e4793.svg"
        },
        859528: function(e, t, s) {
            "use strict";
            e.exports = s.p + "cf1148f8bd93ae5e1384.svg"
        },
        856642: function(e, t, s) {
            "use strict";
            e.exports = s.p + "0546170ce1b1c6bb52a4.svg"
        },
        153315: function(e, t, s) {
            "use strict";
            e.exports = s.p + "a2ee97ec2c7ff61876e0.svg"
        },
        679412: function(e, t, s) {
            "use strict";
            e.exports = s.p + "d5d800e66e9efdec5826.png"
        },
        312269: function(e, t, s) {
            "use strict";
            e.exports = s.p + "261982b9ab12d98c2df2.png"
        },
        706037: function(e, t, s) {
            "use strict";
            e.exports = s.p + "b344f953d26b6068b8e9.svg"
        },
        206538: function(e, t, s) {
            "use strict";
            e.exports = s.p + "f63d52393c82c1471c11.svg"
        },
        801050: function(e, t, s) {
            "use strict";
            e.exports = s.p + "ad5452682f3912f7edac.png"
        },
        989409: function(e, t, s) {
            "use strict";
            e.exports = s.p + "ef49a0550c34dbeb2f95.png"
        },
        510572: function(e, t, s) {
            "use strict";
            e.exports = s.p + "36b97cc0b08ad70ab967.svg"
        },
        697254: function(e, t, s) {
            "use strict";
            e.exports = s.p + "a1a7464a22d7de0c3fe4.svg"
        },
        215508: function(e, t, s) {
            "use strict";
            e.exports = s.p + "e252c687d3a758994eed.svg"
        },
        845120: function(e, t, s) {
            "use strict";
            e.exports = s.p + "a9a1c5b0fc67d0e137dd.gif"
        },
        710978: function(e, t, s) {
            "use strict";
            e.exports = s.p + "208dd45bce5abe26b2c8.png"
        },
        725019: function(e, t, s) {
            "use strict";
            e.exports = s.p + "379a87a2eafce053b217.png"
        },
        723956: function(e, t, s) {
            "use strict";
            e.exports = s.p + "00beb5eccbd89bd6831a.png"
        },
        506197: function(e, t, s) {
            "use strict";
            e.exports = s.p + "aeb0884e649be1418151.svg"
        },
        304580: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var i, r, a = s("37983");
            s("884691");
            var l = s("414456"),
                o = s.n(l),
                n = s("394846"),
                u = s("77078"),
                d = s("945330"),
                c = s("381546"),
                E = s("782340"),
                _ = s("371938");
            (i = r || (r = {})).DEFAULT = "", i.BOLD = "Bold", i.SOLID = "Solid";
            let T = e => {
                let {
                    closeAction: t,
                    variant: s,
                    keybind: i,
                    className: r
                } = e;
                return (0, a.jsxs)("div", {
                    className: o(_.container, r),
                    children: [(0, a.jsx)(u.Clickable, {
                        className: o(_.closeButton, {
                            [_.closeButtonBold]: "Bold" === s,
                            [_.closeButtonSolid]: "Solid" === s
                        }),
                        onClick: t,
                        "aria-label": E.default.Messages.CLOSE,
                        children: "Solid" === s ? (0, a.jsx)(c.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, a.jsx)(d.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), n.isMobile ? null : (0, a.jsx)("div", {
                        className: o(_.keybind),
                        "aria-hidden": !0,
                        children: i
                    })]
                })
            };
            T.defaultProps = {
                variant: ""
            }, T.Variants = r;
            var I = T
        },
        67587: function(e, t, s) {
            "use strict";
            s.r(t);
            var i = s("478565");
            s.es(i, t)
        },
        663453: function(e, t, s) {
            "use strict";
            s.r(t);
            var i = s("842458");
            s.es(i, t)
        },
        305861: function(e, t, s) {
            "use strict";
            s.r(t);
            var i = s("105159");
            s.es(i, t)
        },
        292915: function(e, t, s) {
            "use strict";
            s.r(t);
            var i = s("353982");
            s.es(i, t)
        },
        526887: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ConfettiCannonContext: function() {
                    return d
                },
                ConfettiCannonContextProvider: function() {
                    return c
                }
            });
            var i = s("37983"),
                r = s("884691"),
                a = s("516555"),
                l = s("65597"),
                o = s("206230"),
                n = s("49111");
            let u = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => n.NOOP,
                    removeClickListener: n.NOOP
                },
                d = r.createContext(u);

            function c(e) {
                let {
                    children: t,
                    confettiCanvas: s,
                    spriteCanvas: n,
                    baseConfig: c,
                    addClickListener: E,
                    removeClickListener: _
                } = e, T = (0, a.useConfettiCannon)(s, n), I = (0, l.default)([o.default], () => o.default.useReducedMotion), N = r.useMemo(() => I ? u : {
                    confettiCanvas: s,
                    cannon: T,
                    createConfetti: (e, t) => T.createConfetti({
                        ...c,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, s, i) => T.createConfetti({
                        ...c,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...s
                    }, i),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            s = arguments.length > 2 ? arguments[2] : void 0;
                        return T.createMultipleConfetti({
                            ...c,
                            ...e
                        }, t, s)
                    },
                    createMultipleConfettiAt: function(e, t, s) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        return T.createMultipleConfetti({
                            ...c,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...s
                        }, i, r)
                    },
                    addClickListener: E,
                    removeClickListener: _
                }, [E, c, T, s, I, _]);
                return (0, i.jsx)(d.Provider, {
                    value: N,
                    children: t
                })
            }
        },
        95039: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                openGuildBoostingMarketingModal: function() {
                    return T
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("627445"),
                a = s.n(r),
                l = s("446674"),
                o = s("812204"),
                n = s("685665"),
                u = s("305961"),
                d = s("697218"),
                c = s("708169"),
                E = s("783121");
            let _ = e => {
                let {
                    guildId: t,
                    close: s,
                    location: r
                } = e, c = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser());
                a(null != c, "PremiumGuildPerksModalConnected: currentUser cannot be undefined");
                let _ = (0, l.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]),
                    {
                        AnalyticsLocationProvider: T
                    } = (0, n.default)(o.default.BOOSTED_GUILD_PERKS_MODAL);
                return null == _ ? null : (0, i.jsx)(T, {
                    children: (0, i.jsx)(E.default, {
                        analyticsLocation: r,
                        onClose: s,
                        guild: _
                    })
                })
            };

            function T(e) {
                let {
                    guildId: t,
                    location: s
                } = e;
                (0, c.openFullScreenLayer)(e => {
                    let {
                        closeLayer: r
                    } = e;
                    return (0, i.jsx)(_, {
                        close: r,
                        guildId: t,
                        location: s
                    })
                }, {
                    layerKey: "BoostedGuildPerksModalConnected"
                })
            }
        },
        783121: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return G
                }
            }), s("222007");
            var i = s("37983"),
                r = s("884691"),
                a = s("775560"),
                l = s("290381"),
                o = s("77078"),
                n = s("304580"),
                u = s("685665"),
                d = s("599110"),
                c = s("677591"),
                E = s("890800"),
                _ = s("904519"),
                T = s("738463"),
                I = s("141075"),
                N = s("706081"),
                f = s("695561"),
                R = s("56186"),
                g = s("390604"),
                m = s("49111"),
                S = s("782340"),
                M = s("76996"),
                G = function(e) {
                    let {
                        analyticsLocation: t,
                        guild: s,
                        onClose: G
                    } = e, [h, O] = r.useState(!0), p = r.useRef(!1), C = (0, a.useLazyValue)(() => Date.now()), {
                        analyticsLocations: A
                    } = (0, u.default)(), B = r.useCallback(() => {
                        G(), d.default.track(m.AnalyticEvents.MODAL_DISMISSED, {
                            type: m.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                            location_stack: A,
                            location_section: t.section,
                            location_object: t.object,
                            guild_id: s.id,
                            duration_open_ms: Date.now() - C
                        })
                    }, [G, t, A, C, s.id]), x = r.useCallback(e => {
                        e && !p.current && (d.default.track(m.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                            type: m.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                            location_stack: A,
                            location_section: t.section,
                            location_object: t.object,
                            guild_id: s.id
                        }), p.current = !0)
                    }, [t, A, s.id]);
                    return r.useEffect(() => {
                        d.default.track(m.AnalyticEvents.OPEN_MODAL, {
                            type: m.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                            location_stack: A,
                            location_section: t.section,
                            location_object: t.object,
                            guild_id: s.id
                        })
                    }, [s.id, t, A]), r.useEffect(() => {
                        function e(e) {
                            "Escape" === e.key && B()
                        }
                        return window.addEventListener("keydown", e), () => {
                            window.removeEventListener("keydown", e)
                        }
                    }, [B]), (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: M.closeIconWrapper,
                            children: (0, i.jsx)(n.default, {
                                className: M.closeIcon,
                                closeAction: B,
                                keybind: "ESC",
                                variant: n.default.Variants.SOLID
                            })
                        }), (0, i.jsxs)(o.AdvancedScrollerAuto, {
                            className: M.scroller,
                            children: [(0, i.jsxs)("div", {
                                className: M.header,
                                children: [(0, i.jsxs)("div", {
                                    className: M.headerContentWrapper,
                                    children: [(0, i.jsx)(o.Heading, {
                                        className: M.heading,
                                        color: "always-white",
                                        variant: "display-lg",
                                        children: S.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_HEADING
                                    }), (0, i.jsx)(E.default, {
                                        guild: s,
                                        closeLayer: B,
                                        onCtaVisibilityChange: O
                                    }), (0, i.jsx)(I.default, {
                                        guild: s
                                    }), (0, i.jsx)(N.default, {
                                        guild: s
                                    })]
                                }), (0, i.jsx)(g.HeaderWave, {})]
                            }), (0, i.jsx)("div", {
                                className: M.middleBodyContentWrapper,
                                children: (0, i.jsx)(R.default, {})
                            }), (0, i.jsxs)("div", {
                                className: M.lowerBody,
                                children: [(0, i.jsxs)("div", {
                                    className: M.lowerBodyContentWrapper,
                                    children: [(0, i.jsx)(f.default, {
                                        className: M.tierComparisonTable,
                                        guild: s
                                    }), (0, i.jsx)(c.default, {}), (0, i.jsx)(_.default, {})]
                                }), (0, i.jsx)(g.BodyWave, {}), (0, i.jsx)("div", {
                                    className: M.lowerBodyBackgroundImage
                                })]
                            }), (0, i.jsx)(l.VisibilitySensor, {
                                onChange: x,
                                children: (0, i.jsx)("div", {
                                    className: M.persistentCtaSpacer
                                })
                            })]
                        }), (0, i.jsx)(T.default, {
                            guild: s,
                            isVisible: !h,
                            closeLayer: B
                        })]
                    })
                }
        },
        677591: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("414456"),
                a = s.n(r),
                l = s("77078"),
                o = s("326880"),
                n = s("51947"),
                u = s("890128"),
                d = s("782340"),
                c = s("82760"),
                E = s("506197");

            function _(e) {
                let {
                    className: t,
                    icon: s,
                    children: r
                } = e;
                return (0, i.jsxs)("li", {
                    className: a(c.card, t),
                    children: [(0, i.jsx)(s, {
                        className: c.icon
                    }), (0, i.jsx)(l.Text, {
                        className: c.description,
                        variant: "text-sm/medium",
                        children: r
                    })]
                })
            }
            var T = function(e) {
                let {
                    cardClassName: t
                } = e;
                return (0, i.jsxs)("div", {
                    className: c.wrapper,
                    children: [(0, i.jsxs)("div", {
                        className: c.content,
                        children: [(0, i.jsx)(l.Heading, {
                            className: c.heading,
                            color: "always-white",
                            variant: "heading-xxl/bold",
                            children: d.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_HEADING
                        }), (0, i.jsxs)("ul", {
                            className: c.cards,
                            children: [(0, i.jsx)(_, {
                                className: t,
                                icon: o.default,
                                children: d.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_MEMBER_LIST_ICON
                            }), (0, i.jsx)(_, {
                                className: t,
                                icon: e => (0, i.jsx)("img", {
                                    className: a(e.className, c.iconImage),
                                    src: E,
                                    alt: ""
                                }),
                                children: d.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_PROFILE_BADGE
                            }), (0, i.jsx)(_, {
                                className: t,
                                icon: u.default,
                                children: d.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_BOOSTER_ROLE
                            }), (0, i.jsx)(_, {
                                className: t,
                                icon: n.default,
                                children: d.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_COMMUNITY_SUPPORT
                            })]
                        })]
                    }), (0, i.jsx)("div", {
                        className: c.backgroundImages
                    })]
                })
            }
        },
        890800: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return G
                }
            });
            var i = s("37983"),
                r = s("884691"),
                a = s("414456"),
                l = s.n(a),
                o = s("446674"),
                n = s("290381"),
                u = s("77078"),
                d = s("685665"),
                c = s("649844"),
                E = s("697218"),
                _ = s("625634"),
                T = s("476263"),
                I = s("978679"),
                N = s("118503"),
                f = s("719923"),
                R = s("617917"),
                g = s("49111"),
                m = s("646718"),
                S = s("782340"),
                M = s("668481"),
                G = function(e) {
                    let {
                        closeLayer: t,
                        guild: s,
                        onCtaVisibilityChange: a
                    } = e, G = (0, o.useStateFromStores)([E.default], () => E.default.getCurrentUser()), h = (0, o.useStateFromStores)([_.default], () => _.default.boostSlots), {
                        analyticsLocations: O
                    } = (0, d.default)(), p = r.useMemo(() => Object.keys(h).filter(e => {
                        let t = h[e];
                        return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === s.id
                    }), [h, s.id]);
                    return (0, i.jsxs)("div", {
                        className: M.guildStatus,
                        children: [(0, i.jsx)(T.default, {
                            className: M.guildIcon,
                            guild: s,
                            size: T.default.Sizes.LARGER
                        }), (0, i.jsx)(u.Heading, {
                            className: M.guildName,
                            color: "always-white",
                            variant: "text-lg/bold",
                            children: s.name
                        }), (0, i.jsxs)("div", {
                            className: M.guildBoostCountWrapper,
                            children: [(0, i.jsxs)("div", {
                                className: M.guildBoostCount,
                                children: [(0, i.jsx)(N.default, {
                                    className: l(M.guildBoostBadge, {
                                        [M.guildBoostBadgeWithBoosts]: s.premiumSubscriberCount > 0
                                    })
                                }), (0, i.jsx)(u.Text, {
                                    className: M.guildStatusCopy,
                                    variant: "text-md/bold",
                                    children: S.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
                                        subscriptions: s.premiumSubscriberCount
                                    })
                                })]
                            }), p.length > 0 ? (0, i.jsx)(u.Text, {
                                className: M.guildBoostCountCurrentUser,
                                variant: "text-sm/normal",
                                children: S.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_USER_SUBSCRIPTION_COUNT.format({
                                    numSubscriptions: p.length
                                })
                            }) : null]
                        }), (0, i.jsxs)("div", {
                            className: M.guildBoostCtas,
                            children: [(0, i.jsx)(n.VisibilitySensor, {
                                onChange: a,
                                threshold: .9,
                                children: (0, i.jsx)("div", {
                                    className: l(M.guildBoostCta, M.guildBoostCtaBoostWrapper),
                                    children: (0, i.jsx)(R.default, {
                                        className: M.guildBoostCtaBoost,
                                        innerClassName: l(M.guildBoostCtaContent, M.guildBoostCtaBoostContent),
                                        buttonShineClassName: M.guildBoostCtaBoostShine,
                                        guild: s,
                                        analyticsLocation: {
                                            page: g.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                            section: g.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                            object: g.AnalyticsObjects.BUTTON_CTA,
                                            objectType: g.AnalyticsObjectTypes.BUY
                                        },
                                        closeLayer: t,
                                        color: u.Button.Colors.WHITE,
                                        size: u.Button.Sizes.LARGE,
                                        fullWidth: !0
                                    })
                                })
                            }), f.default.hasFreeBoosts(G) || f.default.isPremium(G, m.PremiumTypes.TIER_2) ? (0, i.jsxs)(u.Button, {
                                className: l(M.guildBoostCta, M.guildBoostCtaSecondary),
                                innerClassName: l(M.guildBoostCtaContent, M.guildBoostCtaGiftContent),
                                look: u.Button.Looks.OUTLINED,
                                color: u.Button.Colors.WHITE,
                                onClick: function() {
                                    (0, c.default)({
                                        initialPlanId: null,
                                        subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
                                        isGift: !0,
                                        analyticsLocations: O,
                                        analyticsObject: {
                                            page: g.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                            section: g.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                            object: g.AnalyticsObjects.BUTTON_ICON,
                                            objectType: g.AnalyticsObjectTypes.GIFT
                                        },
                                        onClose: e => e && t()
                                    })
                                },
                                size: u.Button.Sizes.LARGE,
                                children: [(0, i.jsx)(I.default, {
                                    className: M.guildBoostCtaGiftIcon
                                }), S.default.Messages.PREMIUM_GUILD_PERKS_MODAL_GIFT_NITRO]
                            }) : (0, i.jsx)(u.Button, {
                                className: l(M.guildBoostCta, M.guildBoostCtaSecondary),
                                innerClassName: l(M.guildBoostCtaContent, M.guildBoostCtaSubscribeContent),
                                look: u.Button.Looks.OUTLINED,
                                color: u.Button.Colors.WHITE,
                                onClick: function() {
                                    (0, c.default)({
                                        initialPlanId: null,
                                        subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
                                        analyticsLocations: O,
                                        analyticsObject: {
                                            page: g.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                            section: g.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                            object: g.AnalyticsObjects.BUTTON_ICON,
                                            objectType: g.AnalyticsObjectTypes.BUY
                                        },
                                        onClose: e => e && t()
                                    })
                                },
                                size: u.Button.Sizes.LARGE,
                                children: S.default.Messages.PREMIUM_GUILD_PERKS_MODAL_SUBSCRIBE_WITH_FREE_BOOSTS
                            })]
                        })]
                    })
                }
        },
        904519: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            }), s("222007");
            var i = s("37983"),
                r = s("884691"),
                a = s("414456"),
                l = s.n(a),
                o = s("77078"),
                n = s("151185"),
                u = s("342169"),
                d = s("701909"),
                c = s("49111"),
                E = s("782340"),
                _ = s("669511");
            let T = [{
                getQuestion: () => E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_1,
                getAnswer: () => E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_1
            }, {
                getQuestion: () => E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_2,
                getAnswer: () => E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_2.format({
                    helpCenterUrl: d.default.getArticleURL(c.HelpdeskArticles.GUILD_BOOSTING_FAQ)
                })
            }, {
                getQuestion: () => E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_3,
                getAnswer: () => E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_3
            }, {
                getQuestion: () => E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_4,
                getAnswer: () => E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_4
            }];
            var I = function(e) {
                let {
                    className: t
                } = e, [s, a] = r.useState(null);
                return (0, i.jsxs)("div", {
                    className: l(_.wrapper, t),
                    children: [(0, i.jsx)(o.Heading, {
                        className: _.heading,
                        variant: "heading-xxl/bold",
                        children: E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_HEADING
                    }), (0, i.jsx)("ul", {
                        className: _.list,
                        children: T.map((e, t) => {
                            let r = s === t;
                            return (0, i.jsxs)("div", {
                                className: _.listItem,
                                children: [(0, i.jsxs)(o.Clickable, {
                                    className: l(_.questionWrapper, {
                                        [_.questionWrapperExpanded]: r
                                    }),
                                    onClick: () => a(e => e === t ? null : t),
                                    tag: "li",
                                    children: [(0, i.jsx)(o.Text, {
                                        className: _.question,
                                        variant: "text-lg/normal",
                                        children: e.getQuestion()
                                    }), r ? (0, i.jsx)(u.default, {
                                        className: _.questionIcon
                                    }) : (0, i.jsx)(n.default, {
                                        className: _.questionIcon
                                    })]
                                }), r && (0, i.jsx)(o.Text, {
                                    className: _.answer,
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    children: e.getAnswer()
                                })]
                            }, t)
                        })
                    })]
                })
            }
        },
        738463: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("146606"),
                a = s("65597"),
                l = s("77078"),
                o = s("206230"),
                n = s("476263"),
                u = s("617917"),
                d = s("49111"),
                c = s("532039"),
                E = function(e) {
                    let {
                        closeLayer: t,
                        guild: s,
                        isVisible: E
                    } = e, _ = (0, a.default)([o.default], () => o.default.useReducedMotion), T = (0, r.useSpring)({
                        transform: E ? "translateY(-100%)" : "translateY(0%)",
                        opacity: E ? 1 : 0,
                        config: {
                            tension: 120,
                            friction: 12
                        },
                        immediate: _
                    });
                    return (0, i.jsx)(r.animated.div, {
                        className: c.wrapper,
                        style: T,
                        children: (0, i.jsxs)("div", {
                            className: c.innerWrapper,
                            children: [(0, i.jsxs)("div", {
                                className: c.guildInfo,
                                children: [(0, i.jsx)(n.default, {
                                    className: c.guildIcon,
                                    guild: s,
                                    size: n.default.Sizes.LARGER
                                }), (0, i.jsx)(l.Heading, {
                                    className: c.guildName,
                                    variant: "text-lg/bold",
                                    children: s.name
                                })]
                            }), (0, i.jsx)(u.default, {
                                className: c.ctaButton,
                                guild: s,
                                analyticsLocation: {
                                    page: d.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                    section: d.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                                    object: d.AnalyticsObjects.BUTTON_CTA,
                                    objectType: d.AnalyticsObjectTypes.BUY
                                },
                                closeLayer: t,
                                pauseAnimation: !E,
                                size: l.Button.Sizes.LARGE
                            })]
                        })
                    })
                }
        },
        141075: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            }), s("222007");
            var i = s("37983"),
                r = s("884691"),
                a = s("146606"),
                l = s("446674"),
                o = s("206230"),
                n = s("427459"),
                u = s("651971"),
                d = s("903921"),
                c = s("49111"),
                E = s("782340"),
                _ = s("782050");
            let T = [c.BoostedGuildTiers.NONE, c.BoostedGuildTiers.TIER_1, c.BoostedGuildTiers.TIER_2, c.BoostedGuildTiers.TIER_3];

            function I(e) {
                let {
                    guild: t
                } = e, s = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion), [I, N] = r.useState(!1), [f, R] = r.useState(0), g = r.useRef(null), m = Math.min(c.BoostedGuildTiers.TIER_3, t.premiumTier + 1), S = c.AppliedGuildBoostsRequiredForBoostedGuildTier[t.premiumTier], M = c.AppliedGuildBoostsRequiredForBoostedGuildTier[m], G = (t.premiumSubscriberCount - S) / (M - S), h = d.TierMarkerPositions[t.premiumTier], O = d.TierMarkerPositions[m], p = t.premiumTier === c.BoostedGuildTiers.TIER_3, C = I || s, {
                    progressBarFillWidthFactor: A,
                    isProgressBarAnimationComplete: B,
                    setShouldFireConfetti: x,
                    shouldFireConfetti: v,
                    tierMarkerAnimationPosition: P
                } = function(e) {
                    let {
                        fillFactor: t,
                        guildBoostCount: s,
                        premiumTier: i,
                        isRevealed: l,
                        useReducedMotion: o
                    } = e, [n, u] = r.useState(o ? i : -1), [E, _] = r.useState(0 === s), [T, I] = r.useState(!1), N = r.useRef(!0), {
                        widthFactor: f
                    } = (0, a.useSpring)({
                        from: {
                            widthFactor: 0
                        },
                        to: {
                            widthFactor: l ? t : 0
                        },
                        config: {
                            tension: 15,
                            friction: 7,
                            clamp: !0
                        },
                        immediate: o,
                        onChange: function(e) {
                            let {
                                widthFactor: t
                            } = e;
                            for (let [e, s] of Object.entries(d.TierMarkerPositions).reverse())
                                if (t >= s - .02727272727272727) {
                                    u(Number(e));
                                    break
                                }
                        },
                        onStart: () => {
                            _(!1)
                        },
                        onRest: () => {
                            _(!0), i === c.BoostedGuildTiers.TIER_3 && (I(!0), window.setTimeout(() => {
                                N.current && I(!1)
                            }, 200))
                        }
                    });
                    return r.useEffect(() => () => {
                        N.current = !1
                    }, []), {
                        isProgressBarAnimationComplete: E,
                        progressBarFillWidthFactor: f,
                        setShouldFireConfetti: I,
                        shouldFireConfetti: T,
                        tierMarkerAnimationPosition: n
                    }
                }({
                    fillFactor: p ? 1 : G * (O - h) + h,
                    isRevealed: C,
                    useReducedMotion: s,
                    premiumTier: t.premiumTier,
                    guildBoostCount: t.premiumSubscriberCount
                });
                return r.useEffect(() => {
                    let e = window.setTimeout(() => {
                        N(!0)
                    }, 250);
                    return () => {
                        window.clearTimeout(e)
                    }
                }, []), (0, i.jsxs)("div", {
                    className: _.progressBar,
                    role: "progressbar",
                    "aria-valuenow": t.premiumSubscriberCount,
                    "aria-valuetext": t.premiumTier === c.BoostedGuildTiers.NONE ? E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE.format({
                        numSubscriptionsApplied: t.premiumSubscriberCount
                    }) : E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE_TIER_UNLOCKED.format({
                        numSubscriptionsApplied: t.premiumSubscriberCount,
                        tierName: (0, n.getTierName)(t.premiumTier, {
                            useLevels: !1
                        })
                    }),
                    children: [(0, i.jsxs)("div", {
                        className: _.progressBarScrubber,
                        children: [(0, i.jsx)(a.animated.div, {
                            className: _.progressBarFill,
                            style: {
                                width: A.to({
                                    range: [0, 1],
                                    output: [0, 100]
                                }).to(e => "".concat(e, "%"))
                            }
                        }), (0, i.jsx)("div", {
                            className: _.progressBarTrack
                        })]
                    }), T.map(e => (0, i.jsx)(d.default, {
                        confettiTriggerRef: g,
                        guild: t,
                        isProgressBarAnimationComplete: B,
                        setConfettiCount: R,
                        setShouldFireConfetti: x,
                        tier: e,
                        tierMarkerAnimationPosition: P,
                        children: (0, n.getTierName)(e)
                    }, e)), (0, i.jsx)(u.default, {
                        confettiCount: f,
                        confettiTriggerRef: g,
                        isFiring: v
                    })]
                })
            }
        },
        651971: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ProgressBarConfettiTrigger: function() {
                    return _
                },
                default: function() {
                    return T
                }
            }), s("222007");
            var i, r, a = s("37983"),
                l = s("884691"),
                o = s("146606"),
                n = s("446674"),
                u = s("77078"),
                d = s("206230"),
                c = s("526887"),
                E = s("95291");

            function _(e) {
                let {
                    children: t,
                    confettiTriggerRef: s,
                    setConfettiCount: i,
                    setShouldFireConfetti: r,
                    tooltipProps: c
                } = e, [_, T] = l.useState(0), I = l.useRef(-1), N = l.useRef(!0), f = (0, n.useStateFromStores)([d.default], () => d.default.useReducedMotion), {
                    scaleFactor: R
                } = (0, o.useSpring)({
                    from: {
                        scaleFactor: 1
                    },
                    to: {
                        scaleFactor: 1 === _ ? .9 : 2 === _ ? 1.2 : 1
                    },
                    config: {
                        tension: 380,
                        friction: 7
                    }
                });
                return (l.useEffect(() => () => {
                    N.current = !1
                }, []), f) ? (0, a.jsx)(a.Fragment, {
                    children: t
                }) : (0, a.jsx)(o.animated.div, {
                    className: E.confettiTriggerWrapper,
                    style: {
                        transform: R.to(e => "scale(".concat(e, ")"))
                    },
                    children: (0, a.jsx)(u.Clickable, {
                        className: E.confettiTrigger,
                        onMouseDown: () => {
                            T(1), r(!0), i(e => Math.min(e + 2, 200)), window.clearTimeout(I.current), I.current = window.setTimeout(() => {
                                N.current && i(0)
                            }, 200)
                        },
                        onMouseUp: () => {
                            T(0), r(!1)
                        },
                        onMouseEnter: () => {
                            var e;
                            T(2), null == c || null === (e = c.onMouseEnter) || void 0 === e || e.call(c)
                        },
                        onMouseLeave: () => {
                            var e;
                            T(0), null == c || null === (e = c.onMouseLeave) || void 0 === e || e.call(c)
                        },
                        innerRef: s,
                        children: t
                    })
                })
            }(r = i || (i = {}))[r.INACTIVE = 0] = "INACTIVE", r[r.PRESSED = 1] = "PRESSED", r[r.HOVERED = 2] = "HOVERED";
            var T = function(e) {
                let {
                    confettiCount: t,
                    confettiTriggerRef: s,
                    isFiring: i
                } = e, {
                    cannon: r,
                    createMultipleConfettiAt: a
                } = l.useContext(c.ConfettiCannonContext), o = (0, n.useStateFromStores)([d.default], () => d.default.useReducedMotion);
                return l.useEffect(() => () => {
                    null == r || r.clearConfetti()
                }, [r]), l.useEffect(() => {
                    if (!i || o || null == s.current) return;
                    let e = s.current.getBoundingClientRect(),
                        r = e.left + e.width / 2,
                        l = e.top + e.height / 2;
                    a(r, l, {
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: -180,
                                y: -180
                            },
                            maxValue: {
                                x: 180,
                                y: 180
                            }
                        }
                    }, Math.max(t, 20))
                }, [t, s, a, i, o]), null
            }
        },
        903921: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                TierMarkerPositions: function() {
                    return g
                },
                default: function() {
                    return m
                }
            }), s("70102");
            var i = s("37983");
            s("884691");
            var r = s("414456"),
                a = s.n(r),
                l = s("146606"),
                o = s("65597"),
                n = s("77078"),
                u = s("206230"),
                d = s("685665"),
                c = s("206453"),
                E = s("36694"),
                _ = s("427459"),
                T = s("954296"),
                I = s("651971"),
                N = s("49111"),
                f = s("782340"),
                R = s("319519");
            let g = {
                [N.BoostedGuildTiers.NONE]: 0,
                [N.BoostedGuildTiers.TIER_1]: 1 / 3,
                [N.BoostedGuildTiers.TIER_2]: 2 / 3,
                [N.BoostedGuildTiers.TIER_3]: 1
            };
            var m = function(e) {
                let {
                    children: t,
                    confettiTriggerRef: s,
                    guild: r,
                    isProgressBarAnimationComplete: m,
                    setConfettiCount: S,
                    setShouldFireConfetti: M,
                    tier: G,
                    tierMarkerAnimationPosition: h
                } = e, O = (0, o.default)([u.default], () => u.default.useReducedMotion), {
                    analyticsLocations: p
                } = (0, d.default)(), C = N.AppliedGuildBoostsRequiredForBoostedGuildTier[G], A = C - r.premiumSubscriberCount, B = G <= h || m, x = B && G <= r.premiumTier, v = B && G < r.premiumTier, P = B && G === r.premiumTier, {
                    scaleFactor: L
                } = (0, l.useSpring)({
                    from: {
                        scaleFactor: 0
                    },
                    to: {
                        scaleFactor: h >= G || m && h + 1 === G || m && -1 === h && G === N.BoostedGuildTiers.NONE ? 1 : 0
                    },
                    config: {
                        tension: 360,
                        friction: 12
                    },
                    immediate: O
                }), j = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(l.animated.div, {
                        className: R.progressBarMarkerIndicator,
                        style: {
                            transform: L.to(e => "translate(-50%, -50%) scale(".concat(e, ")"))
                        }
                    }), G !== N.BoostedGuildTiers.NONE && (0, i.jsx)(c.default, {
                        tier: G,
                        className: R.boostedTierIcon
                    })]
                }), D = x ? "div" : n.Clickable, b = x ? {} : {
                    onClick: function() {
                        B && (0, T.addAppliedGuildBoosts)({
                            analyticsLocations: p,
                            analyticsLocation: {
                                page: N.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                section: N.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                                object: N.AnalyticsObjects.SUBSCRIBE_TO_TIER_BUTTON,
                                objectType: function(e) {
                                    switch (e) {
                                        case N.BoostedGuildTiers.TIER_3:
                                            return N.AnalyticsObjectTypes.TIER_3;
                                        case N.BoostedGuildTiers.TIER_2:
                                            return N.AnalyticsObjectTypes.TIER_2;
                                        case N.BoostedGuildTiers.TIER_1:
                                            return N.AnalyticsObjectTypes.TIER_1;
                                        default:
                                            throw Error("Unsupported Boosting tier: ".concat(e))
                                    }
                                }(G)
                            },
                            numberOfBoostsToAdd: A,
                            guild: r
                        })
                    }
                };
                return (0, i.jsx)(n.Tooltip, {
                    text: x ? f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_TIER_UNLOCKED.format({
                        tierName: (0, _.getTierName)(G, {
                            useLevels: !1
                        })
                    }) : f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_REMAINING_FOR_TIER.format({
                        numBoostsRequired: A,
                        tierName: (0, _.getTierName)(G, {
                            useLevels: !1
                        })
                    }),
                    shouldShow: G !== N.BoostedGuildTiers.NONE,
                    children: e => (0, i.jsxs)(D, {
                        className: a(R.progressBarMarker, {
                            [R.progressBarMarkerUnlocked]: x,
                            [R.progressBarMarkerLocked]: !x,
                            [R.progressBarMarkerLower]: v,
                            [R.progressBarMarkerCurrent]: P
                        }),
                        style: {
                            left: "".concat(100 * g[G], "%")
                        },
                        ...e,
                        ...b,
                        children: [!x && (0, i.jsx)("div", {
                            className: R.boostedTierIconBackground
                        }), x && G === N.BoostedGuildTiers.TIER_3 ? (0, i.jsx)(I.ProgressBarConfettiTrigger, {
                            confettiTriggerRef: s,
                            setConfettiCount: S,
                            setShouldFireConfetti: M,
                            children: j
                        }) : j, (0, i.jsxs)(n.Text, {
                            className: R.progressBarMarkerLabel,
                            variant: "text-md/normal",
                            children: [x && G !== N.BoostedGuildTiers.NONE && (0, i.jsx)(E.default, {
                                className: R.progressBarMarkerUnlockedIcon
                            }), t]
                        })]
                    })
                })
            }
        },
        706081: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("414456"),
                a = s.n(r),
                l = s("77078"),
                o = s("441413"),
                n = s("46829"),
                u = s("700297"),
                d = s("549586"),
                c = s("110006"),
                E = s("83900"),
                _ = s("394832"),
                T = s("754576"),
                I = s("277703"),
                N = s("16988"),
                f = s("368121"),
                R = s("228427"),
                g = s("507491"),
                m = s("427459"),
                S = s("49111"),
                M = s("646718"),
                G = s("782340"),
                h = s("888601");
            let O = [{
                tier: S.BoostedGuildTiers.TIER_1,
                perks: [{
                    icon: n.default,
                    getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_EMOJI.format({
                        numEmojiSlots: M.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_1].limits.emoji
                    })
                }, {
                    icon: T.default,
                    getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_SOUNDS.format({
                        numSoundboardSlots: M.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_1].limits.soundboardSounds
                    }),
                    isNew: !0
                }, {
                    icon: c.default,
                    getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_ICON
                }, {
                    icon: f.default,
                    getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_AUDIO_QUALITY
                }]
            }, {
                tier: S.BoostedGuildTiers.TIER_2,
                perks: [{
                    icon: _.default,
                    getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STREAM_QUALITY
                }, {
                    icon: g.default,
                    getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({
                        uploadSizeLimit: G.default.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_2
                    })
                }, {
                    icon: u.default,
                    getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ROLE_ICONS
                }, {
                    icon: d.default,
                    getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_GUILD_BANNER
                }]
            }, {
                tier: S.BoostedGuildTiers.TIER_3,
                perks: [{
                    icon: E.default,
                    getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_VANITY_URL
                }, {
                    icon: g.default,
                    getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({
                        uploadSizeLimit: G.default.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_3
                    })
                }, {
                    icon: f.default,
                    getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_HIGHEST_AUDIO_QUALITY
                }, {
                    icon: c.default,
                    getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_BANNER
                }, {
                    icon: R.default,
                    getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STAGE_SEATS_AND_MORE.format({
                        numStageSeats: S.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                    })
                }]
            }];
            var p = function(e) {
                let {
                    guild: t
                } = e;
                return (0, i.jsx)("div", {
                    className: h.tierCards,
                    children: O.map(e => (0, i.jsxs)("div", {
                        className: h.tierCard,
                        children: [e.tier === S.BoostedGuildTiers.TIER_3 && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: a(h.tierCardBorderHighlight, h.tierCardBorderHighlightTopRight)
                            }), (0, i.jsx)("div", {
                                className: a(h.tierCardBorderHighlight, h.tierCardBorderHighlightBottomLeft)
                            }), (0, i.jsxs)("div", {
                                className: a(h.tierCardSparkleHighlight, h.tierCardSparkleHighlightTopRight),
                                children: [(0, i.jsx)(N.default, {
                                    className: h.tierCardSparkle1
                                }), (0, i.jsx)(N.default, {
                                    className: h.tierCardSparkle2
                                }), (0, i.jsx)(I.default, {
                                    className: h.tierCardSparkle3
                                })]
                            }), (0, i.jsx)("div", {
                                className: a(h.tierCardSparkleHighlight, h.tierCardSparkleHighlightBottomLeft),
                                children: (0, i.jsx)(N.default, {
                                    className: h.tierCardSparkle1
                                })
                            })]
                        }), e.tier === t.premiumTier && (0, i.jsx)(l.Text, {
                            className: h.tierCardCurrentTier,
                            tag: "div",
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_CURRENT_TIER_LABEL
                        }), (0, i.jsxs)("div", {
                            className: h.tierCardHeader,
                            children: [(0, i.jsx)(l.Heading, {
                                className: h.tierCardHeading,
                                variant: "heading-xxl/semibold",
                                color: "always-white",
                                children: (0, m.getTierName)(e.tier, {
                                    useLevels: !1
                                })
                            }), (0, i.jsx)(l.Text, {
                                className: h.tierCardBoostRequirement,
                                variant: "text-md/normal",
                                color: "always-white",
                                children: G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTS_REQUIRED.format({
                                    numBoostsRequired: S.AppliedGuildBoostsRequiredForBoostedGuildTier[e.tier]
                                })
                            })]
                        }), (0, i.jsx)("ul", {
                            className: h.tierCardList,
                            children: e.perks.map((e, t) => null == e.predicate || e.predicate() ? (0, i.jsxs)("li", {
                                className: h.tierCardPerkRow,
                                children: [(0, i.jsxs)(l.Text, {
                                    className: h.tierCardListItem,
                                    variant: "text-md/normal",
                                    color: "always-white",
                                    children: [(0, i.jsx)(e.icon, {
                                        className: h.tierCardListIcon
                                    }), e.getCopy()]
                                }), e.isNew ? (0, i.jsx)(o.default, {
                                    className: h.tierCardNewFeatureBadge,
                                    forceUseColorForSparkles: !0,
                                    shouldInheritBackgroundColor: !0,
                                    shouldInheritTextColor: !0
                                }) : null]
                            }, t) : null)
                        })]
                    }, e.tier))
                })
            }
        },
        695561: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            }), s("222007");
            var i = s("37983"),
                r = s("884691"),
                a = s("414456"),
                l = s.n(a),
                o = s("819855"),
                n = s("77078"),
                u = s("841098"),
                d = s("36694"),
                c = s("945330"),
                E = s("49111"),
                _ = s("646718"),
                T = s("782340"),
                I = s("553922");
            let N = [{
                getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_EMOJI_SLOTS,
                getPerkPreviewLightTheme: () => s("209988"),
                getPerkPreviewDarkTheme: () => s("949004"),
                getTier0Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.emoji,
                getTier1Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.emoji,
                getTier2Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.emoji,
                getTier3Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.emoji
            }, {
                getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_STICKER_SLOTS,
                getPerkPreviewLightTheme: () => s("859528"),
                getPerkPreviewDarkTheme: () => s("309504"),
                getTier0Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.stickers,
                getTier1Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.stickers,
                getTier2Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.stickers,
                getTier3Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.stickers
            }, {
                getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_SOUNDBOARD_SLOTS,
                getPerkPreviewLightTheme: () => s("144865"),
                getPerkPreviewDarkTheme: () => s("938305"),
                getTier0Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.soundboardSounds,
                getTier1Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.soundboardSounds,
                getTier2Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.soundboardSounds,
                getTier3Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.soundboardSounds
            }, {
                getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_STREAM_QUALITY,
                getPerkPreviewLightTheme: () => s("153315"),
                getPerkPreviewDarkTheme: () => s("856642"),
                getTier0Value: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
                    resolution: _.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.screenShareQualityResolution,
                    framerate: _.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.screenShareQualityFramerate
                }),
                getTier1Value: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
                    resolution: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.screenShareQualityResolution,
                    framerate: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.screenShareQualityFramerate
                }),
                getTier2Value: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
                    resolution: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.screenShareQualityResolution,
                    framerate: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.screenShareQualityFramerate
                }),
                getTier3Value: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
                    resolution: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.screenShareQualityResolution,
                    framerate: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.screenShareQualityFramerate
                })
            }, {
                getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VOICE_QUALITY,
                getPerkPreviewLightTheme: () => s("697254"),
                getPerkPreviewDarkTheme: () => s("510572"),
                getTier0Value: () => T.default.Messages.BITRATE_KBPS_NO_SPACE.format({
                    bitrate: _.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.bitrate / 1e3
                }),
                getTier1Value: () => T.default.Messages.BITRATE_KBPS_NO_SPACE.format({
                    bitrate: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.bitrate / 1e3
                }),
                getTier2Value: () => T.default.Messages.BITRATE_KBPS_NO_SPACE.format({
                    bitrate: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.bitrate / 1e3
                }),
                getTier3Value: () => T.default.Messages.BITRATE_KBPS_NO_SPACE.format({
                    bitrate: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.bitrate / 1e3
                })
            }, {
                getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_UPLOAD_SIZE_LIMIT,
                getPerkPreviewLightTheme: () => s("312269"),
                getPerkPreviewDarkTheme: () => s("679412"),
                getTier0Value: () => T.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
                    size: _.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.fileSize / 1024 / 1024
                }),
                getTier1Value: () => T.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
                    size: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.fileSize / 1024 / 1024
                }),
                getTier2Value: () => T.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
                    size: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024
                }),
                getTier3Value: () => T.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
                    size: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.fileSize / 1024 / 1024
                })
            }, {
                getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VIDEO_STAGE_SEATS,
                getPerkPreviewLightTheme: () => s("989409"),
                getPerkPreviewDarkTheme: () => s("801050"),
                getTier0Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.stageVideoUsers,
                getTier1Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.stageVideoUsers,
                getTier2Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.stageVideoUsers,
                getTier3Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.stageVideoUsers
            }, {
                getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_ANIMATED_GUILD_ICON,
                getPerkPreviewLightTheme: () => s("429300"),
                getPerkPreviewDarkTheme: () => s("311908"),
                getTier0Value: () => !1,
                getTier1Value: () => !0,
                getTier2Value: () => !0,
                getTier3Value: () => !0
            }, {
                getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_GUILD_INVITE_BACKGROUND,
                getPerkPreviewLightTheme: () => s("335071"),
                getPerkPreviewDarkTheme: () => s("382100"),
                getTier0Value: () => !1,
                getTier1Value: () => !0,
                getTier2Value: () => !0,
                getTier3Value: () => !0
            }, {
                getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_GUILD_BANNER,
                getPerkPreviewLightTheme: () => s("402826"),
                getPerkPreviewDarkTheme: () => s("189775"),
                getTier0Value: () => !1,
                getTier1Value: () => !1,
                getTier2Value: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_GUILD_BANNER_STATIC,
                getTier3Value: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_GUILD_BANNER_ANIMATED
            }, {
                getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_CUSTOM_ROLE_ICONS,
                getPerkPreviewLightTheme: () => s("427945"),
                getPerkPreviewDarkTheme: () => s("43636"),
                getTier0Value: () => !1,
                getTier1Value: () => !1,
                getTier2Value: () => !0,
                getTier3Value: () => !0
            }, {
                getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VANITY_URL,
                getPerkPreviewLightTheme: () => s("206538"),
                getPerkPreviewDarkTheme: () => s("706037"),
                getTier0Value: () => !1,
                getTier1Value: () => !1,
                getTier2Value: () => !1,
                getTier3Value: () => !0
            }];

            function f(e) {
                let {
                    children: t,
                    className: s,
                    tier: r
                } = e, a = r === E.BoostedGuildTiers.NONE ? "text-muted" : "header-primary", o = r === E.BoostedGuildTiers.NONE || null == r ? "heading-xl/normal" : "heading-xl/bold";
                return (0, i.jsxs)("th", {
                    className: l(I.columnHeading, s),
                    scope: "col",
                    children: [(0, i.jsx)(n.Heading, {
                        color: a,
                        variant: o,
                        children: t
                    }), null != r && (0, i.jsx)(n.Text, {
                        color: a,
                        variant: "text-md/normal",
                        children: T.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
                            subscriptions: E.AppliedGuildBoostsRequiredForBoostedGuildTier[r]
                        })
                    })]
                })
            }

            function R(e) {
                let t;
                let {
                    className: s,
                    textVariant: r = "text-md/bold",
                    value: a
                } = e;
                if ("boolean" == typeof a) {
                    let e = l(I.booleanValueIcon, {
                        [I.booleanValueTrue]: a
                    });
                    t = a ? (0, i.jsx)(d.default, {
                        className: e
                    }) : (0, i.jsx)(c.default, {
                        className: e
                    })
                } else t = (0, i.jsx)(n.Text, {
                    color: "interactive-active",
                    variant: r,
                    children: a
                });
                return (0, i.jsx)("td", {
                    className: l(I.tableCell, s),
                    children: t
                })
            }

            function g(e) {
                let {
                    currentTier: t
                } = e, s = function(e) {
                    switch (e) {
                        case E.BoostedGuildTiers.NONE:
                        case E.BoostedGuildTiers.TIER_1:
                            return E.BoostedGuildTiers.TIER_2;
                        case E.BoostedGuildTiers.TIER_2:
                        case E.BoostedGuildTiers.TIER_3:
                            return E.BoostedGuildTiers.TIER_3;
                        default:
                            return null
                    }
                }(t);
                return null == s ? null : (0, i.jsx)("div", {
                    className: l(I.recommendedTierHighlight, {
                        [I.recommendedTierHighlightTier2]: s === E.BoostedGuildTiers.TIER_2,
                        [I.recommendedTierHighlightTier3]: s === E.BoostedGuildTiers.TIER_3
                    }),
                    children: (0, i.jsx)(n.Text, {
                        className: I.recommendedTierHighlightTag,
                        color: "always-white",
                        variant: "text-xs/bold",
                        children: t === E.BoostedGuildTiers.TIER_3 ? T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CURRENT_TAG : T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_RECOMMENDED_TAG
                    })
                })
            }
            var m = function(e) {
                let t = (0, u.default)(),
                    [s, a] = r.useState(null),
                    {
                        className: d,
                        guild: c,
                        hideHeading: _,
                        hideTier0: m
                    } = e;

                function S() {
                    a(null)
                }
                return (0, i.jsxs)("div", {
                    className: d,
                    children: [!_ && (0, i.jsx)(n.Heading, {
                        className: I.heading,
                        variant: "heading-xxl/extrabold",
                        children: T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_HEADING
                    }), (0, i.jsxs)("div", {
                        className: I.tableWrapper,
                        children: [null != c && (0, i.jsx)(g, {
                            currentTier: c.premiumTier
                        }), (0, i.jsxs)("table", {
                            className: I.table,
                            cellPadding: 0,
                            cellSpacing: 0,
                            children: [(0, i.jsx)("thead", {
                                children: (0, i.jsxs)("tr", {
                                    className: I.tableRow,
                                    children: [(0, i.jsx)(f, {
                                        className: I.tableRowHeading,
                                        children: T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_COLUMN_HEADING_PERKS
                                    }), !m && (0, i.jsx)(f, {
                                        tier: E.BoostedGuildTiers.NONE,
                                        children: T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME
                                    }), (0, i.jsx)(f, {
                                        tier: E.BoostedGuildTiers.TIER_1,
                                        children: T.default.Messages.PREMIUM_GUILD_TIER_1
                                    }), (0, i.jsx)(f, {
                                        tier: E.BoostedGuildTiers.TIER_2,
                                        children: T.default.Messages.PREMIUM_GUILD_TIER_2
                                    }), (0, i.jsx)(f, {
                                        tier: E.BoostedGuildTiers.TIER_3,
                                        children: T.default.Messages.PREMIUM_GUILD_TIER_3
                                    })]
                                })
                            }), (0, i.jsx)("tbody", {
                                className: I.tableBody,
                                children: N.map((e, r) => {
                                    let u = s === r;

                                    function d() {
                                        a(r)
                                    }
                                    return void 0 === e.predicate ? (0, i.jsxs)("tr", {
                                        className: I.tableRow,
                                        children: [(0, i.jsx)("th", {
                                            className: l(I.tableCell, I.tableCellWrapper),
                                            scope: "row",
                                            children: (0, i.jsx)(n.Clickable, {
                                                className: l(I.tableRowHeading, I.tableCell, I.tableCellInner),
                                                onFocus: d,
                                                onBlur: S,
                                                onMouseEnter: d,
                                                onMouseLeave: S,
                                                children: (0, i.jsx)(n.Popout, {
                                                    align: "center",
                                                    disablePointerEvents: !0,
                                                    nudgeAlignIntoViewport: !0,
                                                    position: "bottom",
                                                    renderPopout: () => (0, i.jsx)("img", {
                                                        className: I.perkPreviewImage,
                                                        src: (0, o.isThemeDark)(t) ? e.getPerkPreviewDarkTheme() : e.getPerkPreviewLightTheme(),
                                                        alt: ""
                                                    }),
                                                    shouldShow: u,
                                                    spacing: 16,
                                                    children: () => (0, i.jsx)(n.Text, {
                                                        variant: "text-md/normal",
                                                        children: e.getPerkHeading()
                                                    })
                                                })
                                            })
                                        }), !m && (0, i.jsx)(R, {
                                            textVariant: "text-md/normal",
                                            value: e.getTier0Value()
                                        }), (0, i.jsx)(R, {
                                            value: e.getTier1Value()
                                        }), (0, i.jsx)(R, {
                                            value: e.getTier2Value()
                                        }), (0, i.jsx)(R, {
                                            value: e.getTier3Value()
                                        })]
                                    }, r) : null
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        56186: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("65597"),
                a = s("77078"),
                l = s("206230"),
                o = s("782340"),
                n = s("838118"),
                u = s("845120"),
                d = s("710978"),
                c = s("725019"),
                E = s("723956");

            function _(e) {
                let {
                    description: t,
                    heading: s,
                    imgSrc: r
                } = e;
                return (0, i.jsxs)("div", {
                    className: n.topPerksCard,
                    children: [(0, i.jsx)("img", {
                        className: n.topPerksCardImage,
                        src: r,
                        alt: ""
                    }), (0, i.jsx)(a.Heading, {
                        className: n.topPerksCardHeading,
                        variant: "heading-lg/extrabold",
                        children: s
                    }), (0, i.jsx)(a.Text, {
                        className: n.topPerksCardDescription,
                        variant: "text-sm/normal",
                        children: t
                    })]
                })
            }
            var T = function() {
                let e = (0, r.default)([l.default], () => l.default.useReducedMotion);
                return (0, i.jsxs)("div", {
                    className: n.wrapper,
                    children: [(0, i.jsx)(a.Heading, {
                        className: n.heading,
                        variant: "heading-xxl/extrabold",
                        children: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HEADING
                    }), (0, i.jsxs)("div", {
                        className: n.topPerksCards,
                        children: [(0, i.jsx)(_, {
                            description: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HD_STREAMING_DESCRIPTION,
                            heading: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HD_STREAMING_HEADING,
                            imgSrc: c
                        }), (0, i.jsx)(_, {
                            description: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_ANIMATED_GUILD_ICON_DESCRIPTION,
                            heading: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_ANIMATED_GUILD_ICON_HEADING,
                            imgSrc: e ? d : u
                        }), (0, i.jsx)(_, {
                            description: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_VANITY_URL_DESCRIPTION,
                            heading: o.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_VANITY_URL_HEADING,
                            imgSrc: E
                        })]
                    })]
                })
            }
        },
        390604: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                HeaderWave: function() {
                    return l
                },
                BodyWave: function() {
                    return n
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("748820"),
                a = s("735987");

            function l() {
                return (0, i.jsx)("svg", {
                    className: a.headerWave,
                    version: "1.1",
                    preserveAspectRatio: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 1512 510",
                    xmlSpace: "preserve",
                    children: (0, i.jsx)("path", {
                        style: {
                            fill: "currentColor"
                        },
                        d: "M1512,25.1c-294.3-135.3-565.2,319.2-855,322.2c-232,2.4-279-101.8-415.5-100.5C149.9,247.7,49.8,311.3,0,355.4  v154.4h1512V25.1z"
                    })
                })
            }
            let o = (0, r.v4)();

            function n() {
                return (0, i.jsxs)("svg", {
                    className: a.bodyWave,
                    version: "1.1",
                    preserveAspectRatio: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 1512 1619",
                    xmlSpace: "preserve",
                    children: [(0, i.jsxs)("linearGradient", {
                        id: o,
                        gradientUnits: "userSpaceOnUse",
                        x1: "-13.3959",
                        y1: "82.1225",
                        x2: "1221.1846",
                        y2: "1689.3361",
                        children: [(0, i.jsx)("stop", {
                            offset: "0",
                            className: a.bodyWaveGradientStop1
                        }), (0, i.jsx)("stop", {
                            offset: "0.5",
                            className: a.bodyWaveGradientStop2
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            className: a.bodyWaveGradientStop3
                        })]
                    }), (0, i.jsx)("path", {
                        style: {
                            fill: "url(#".concat(o, ")")
                        },
                        d: "M0,1619c507-247.2,1154.7-241,1512-194.7V548.5c-150.9,56.4-400.3,51.2-691-222.6C506.6,29.9,186.8-16.5,0,4.3  V1619z"
                    })]
                })
            }
        },
        700297: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("469563"),
                a = s("906069"),
                l = s("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: a,
                            d: "M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.522 2 12 2ZM9 7C10.104 7 11 7.896 11 9C11 10.105 10.104 11 9 11C7.896 11 7 10.105 7 9C7 7.896 7.896 7 9 7ZM12 19C9.609 19 7.412 17.868 6 16.043L7.559 14.486C8.555 15.92 10.196 16.831 12 16.831C13.809 16.831 15.447 15.92 16.443 14.481L18 16.04C16.59 17.867 14.396 19 12 19ZM18 10H14V8H18V10Z"
                        })
                    })
                }, a.ReactionIcon, void 0, {
                    size: 24
                })
        },
        549586: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("469563"),
                a = s("663453"),
                l = s("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsxs)("g", {
                            fill: r,
                            className: a,
                            children: [(0, i.jsx)("circle", {
                                cx: "16.9804",
                                cy: "7.01942",
                                r: "4.01942"
                            }), (0, i.jsx)("circle", {
                                cx: "16.9804",
                                cy: "16.9805",
                                r: "4.01942"
                            }), (0, i.jsx)("circle", {
                                cx: "7.01942",
                                cy: "16.9805",
                                r: "4.01942"
                            }), (0, i.jsx)("rect", {
                                x: "3",
                                y: "3",
                                width: "8.03884",
                                height: "8.03884",
                                rx: "2"
                            })]
                        })
                    })
                }, a.ServerGridIcon, void 0, {
                    size: 24
                })
        },
        51947: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("469563"),
                a = s("67587"),
                l = s("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: r = "currentColor",
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: s,
                        ...(0, l.default)(a),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            d: "M16 4.00098C14.406 4.00098 12.93 4.83798 12 6.08098C11.07 4.83798 9.594 4.00098 8 4.00098C5.243 4.00098 3 6.24398 3 9.00098C3 14.492 11.124 19.633 11.471 19.849C11.633 19.95 11.817 20.001 12 20.001C12.183 20.001 12.367 19.95 12.529 19.849C12.876 19.633 21 14.492 21 9.00098C21 6.24398 18.757 4.00098 16 4.00098Z",
                            fill: r
                        })
                    })
                }, a.HeartIcon, void 0, {
                    size: 24
                })
        },
        110006: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("469563"),
                a = s("666031"),
                l = s("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: s,
                        ...(0, l.default)(o),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            d: "m2 2c-1.1046 0-2 0.89543-2 2v16c0 1.1046 0.89543 2 2 2h20c1.1046 0 2-0.8954 2-2v-16c0-1.1046-0.8954-2-2-2h-20zm2.4846 13.931c0.55833 0.375 1.2 0.5625 1.925 0.5625 0.96667 0 1.6958-0.3333 2.1875-1l0.2375 0.825h1.475v-4.9h-3.7625v1.625h1.9875v1.075c-0.15833 0.225-0.38333 0.4042-0.675 0.5375-0.28333 0.125-0.59583 0.1875-0.9375 0.1875-0.76667 0-1.3542-0.2458-1.7625-0.7375-0.40833-0.4916-0.6125-1.1916-0.6125-2.1 0-0.9 0.20417-1.5958 0.6125-2.0874 0.40833-0.5 0.99583-0.75 1.7625-0.75 0.84167 0 1.475 0.39166 1.9 1.175l1.4125-1.0124c-0.30003-0.575-0.74586-1.0208-1.3375-1.3375-0.58333-0.31667-1.2458-0.475-1.9875-0.475-0.875 0-1.6292 0.19166-2.2625 0.575-0.625 0.38333-1.1042 0.9125-1.4375 1.5875-0.325 0.67495-0.4875 1.45-0.4875 2.325 0 0.8834 0.15417 1.6667 0.4625 2.35 0.30833 0.675 0.74167 1.2 1.3 1.575zm7.4509 0.3875h1.825v-8.625h-1.825v8.625zm3.5767 0h1.825v-3.275h3.2v-1.65h-3.2v-2.05h3.9375v-1.65h-5.7625v8.625z",
                            clipRule: "evenodd",
                            fillRule: "evenodd",
                            fill: r,
                            className: a
                        })
                    })
                }, a.GifIcon, void 0, {
                    size: 24
                })
        },
        890128: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("469563"),
                a = s("305861"),
                l = s("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: r = "currentColor",
                        className: a,
                        foreground: o,
                        ...n
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(n),
                        className: a,
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            d: "M21.487 5.126L12.487 0.126C12.184 -0.042 11.818 -0.042 11.515 0.126L2.51498 5.126C2.19798 5.302 2.00098 5.636 2.00098 5.999C2.00098 6.693 2.11498 22.999 12.001 22.999C21.887 22.999 22.001 6.693 22.001 5.999C22.001 5.636 21.804 5.302 21.487 5.126ZM12.001 5.999C13.382 5.999 14.501 7.118 14.501 8.499C14.501 9.88 13.382 10.999 12.001 10.999C10.62 10.999 9.50098 9.88 9.50098 8.499C9.50098 7.118 10.62 5.999 12.001 5.999ZM8.25098 16C8.25098 13.699 9.69998 12.25 12.001 12.25C14.302 12.25 15.751 13.699 15.751 16H8.25098Z",
                            fill: r,
                            className: o
                        })
                    })
                }, a.ShieldUserIcon, void 0, {
                    size: 24
                })
        },
        394832: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("469563"),
                a = s("125094"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: r = "currentColor",
                        className: a,
                        foreground: l
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: a,
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
                        })
                    })
                }, a.ScreenArrowIcon, void 0, {
                    size: 24
                })
        },
        754576: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("469563"),
                a = s("292915"),
                l = s("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: r = "currentColor",
                        ...a
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, l.default)(a),
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsxs)("g", {
                            clipPath: "url(#clip0_414_20322)",
                            children: [(0, i.jsx)("path", {
                                d: "M2 6.00299V18.003C2 19.107 2.895 20.003 4 20.003H5V4.00299H4C2.895 4.00299 2 4.89799 2 6.00299Z",
                                fill: r
                            }), (0, i.jsx)("path", {
                                d: "M20 4.00299H7V20.003H20C21.104 20.003 22 19.107 22 18.003V6.00299C22 4.89799 21.104 4.00299 20 4.00299ZM19 14.003C19 15.107 18.104 16.003 17 16.003C15.896 16.003 15 15.107 15 14.003C15 12.899 15.896 12.003 17 12.003V9.38999L13 10.724C13 10.724 13 14.984 13 15.003C13 16.107 12.104 17.003 11 17.003C9.896 17.003 9 16.107 9 15.003C9 13.899 9.896 13.003 11 13.003V10.003C11 9.57199 11.275 9.19099 11.684 9.05399L17.684 7.05399C17.989 6.95199 18.323 7.00299 18.585 7.19199C18.846 7.37899 19 7.68199 19 8.00299C19 8.00299 19 13.983 19 14.003Z",
                                fill: r
                            })]
                        }), (0, i.jsx)("defs", {
                            children: (0, i.jsx)("clipPath", {
                                id: "clip0_414_20322",
                                children: (0, i.jsx)("rect", {
                                    width: "24",
                                    height: "24",
                                    fill: "white"
                                })
                            })
                        })]
                    })
                }, a.SoundboardIcon, void 0, {
                    size: 24
                })
        },
        277703: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("75196");

            function a(e) {
                let {
                    width: t = 23,
                    height: s = 45,
                    color: a = "currentColor",
                    foreground: l,
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(o),
                    width: t,
                    height: s,
                    viewBox: "0 0 23 45",
                    children: (0, i.jsx)("path", {
                        fill: a,
                        className: l,
                        d: "M21.4319 21.1098C19.3401 19.7799 17.5593 18.0272 16.2075 15.9678C14.8557 13.9084 13.9638 11.5895 13.5911 9.16477L12.3366 0.720848C12.311 0.520662 12.2117 0.336692 12.0575 0.203827C11.9034 0.0709621 11.7051 -0.00155639 11.5002 2.53393e-05C11.2954 -0.00155639 11.0971 0.0709621 10.9429 0.203827C10.7888 0.336692 10.6895 0.520662 10.6639 0.720848L9.30486 9.16477C8.9519 11.5956 8.06815 13.9223 6.71457 15.9844C5.36098 18.0465 3.56973 19.7952 1.46411 21.1098L0.314098 21.8307C0.211503 21.9209 0.130281 22.0322 0.0760932 22.1568C0.0219055 22.2813 -0.00391655 22.4161 0.000480577 22.5515C-0.00393532 22.6721 0.0224444 22.7919 0.0772418 22.8998C0.132039 23.0078 0.213487 23.1004 0.314098 23.1693L1.46411 23.8902C3.57262 25.2261 5.36427 26.9937 6.71725 29.0726C8.07022 31.1516 8.95279 33.4932 9.30486 35.9382L10.6639 44.2792C10.6895 44.4793 10.7888 44.6633 10.9429 44.7962C11.0971 44.929 11.2954 45.0016 11.5002 45C11.7051 45.0016 11.9034 44.929 12.0575 44.7962C12.2117 44.6633 12.311 44.4793 12.3366 44.2792L13.5911 35.9382C13.9627 33.4993 14.8532 31.1652 16.2044 29.0889C17.5557 27.0127 19.3371 25.241 21.4319 23.8902L22.5818 23.1693C22.6957 23.1058 22.793 23.0168 22.8656 22.9095C22.9383 22.8021 22.9843 22.6795 23 22.5515C22.9849 22.4093 22.9399 22.2718 22.8679 22.1477C22.7959 22.0236 22.6985 21.9156 22.5818 21.8307L21.4319 21.1098Z"
                    })
                })
            }
        },
        16988: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("75196");

            function a(e) {
                let {
                    width: t = 18,
                    height: s = 15,
                    color: a = "currentColor",
                    foreground: l,
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(o),
                    width: t,
                    height: s,
                    viewBox: "0 0 18 15",
                    children: (0, i.jsx)("path", {
                        fill: a,
                        className: l,
                        d: "M11.7943 9.86263L17.9025 7.66483C18.0325 7.55494 18.0325 7.44507 17.9025 7.44507L11.7943 5.13737L9.06497 0.0824176C9.06497 -0.0274725 8.93499 -0.0274725 8.80502 0.0824176L6.20573 5.13737H6.0758L0.0974733 7.44507C-0.0324911 7.44507 -0.0324911 7.55494 0.0974733 7.66483L6.0758 9.86263H6.20573L8.80502 14.9176C8.93499 15.0275 9.06497 15.0275 9.06497 14.9176L11.7943 9.86263Z"
                    })
                })
            }
        },
        507491: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("469563"),
                a = s("596256"),
                l = s("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: r = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: r,
                            d: "M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z"
                        })
                    })
                }, a.UploadIcon, void 0, {
                    size: 16
                })
        },
        708169: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                FullScreenLayers: function() {
                    return M
                },
                useFullScreenLayerStore: function() {
                    return R
                },
                openFullScreenLayer: function() {
                    return G
                },
                closeFullScreenLayer: function() {
                    return h
                }
            }), s("222007");
            var i, r, a = s("37983"),
                l = s("884691"),
                o = s("995008"),
                n = s.n(o),
                u = s("324134"),
                d = s("308503"),
                c = s("769846"),
                E = s("77078"),
                _ = s("485328"),
                T = s("159885"),
                I = s("983782"),
                N = s("847820");
            let f = (0, T.cssValueToNumber)(c.default.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            (r = i || (i = {}))[r.ENTERING = 1] = "ENTERING", r[r.ENTERED = 2] = "ENTERED", r[r.EXITING = 3] = "EXITING", r[r.EXITED = 4] = "EXITED";
            let R = (0, d.default)(e => ({
                fullScreenLayers: [],
                addLayer: t => e(e => {
                    let {
                        fullScreenLayers: s
                    } = e;
                    return {
                        fullScreenLayers: [...s, t]
                    }
                })
            }));

            function g(e) {
                let {
                    item: t
                } = e, s = l.useRef(null);
                return (0, E.useFocusLock)(s), l.useEffect(() => (_.default.disable(), _.default.enableTemp(function(e) {
                    return {
                        POP_LAYER: {
                            binds: ["esc"],
                            comboKeysBindGlobal: !0,
                            action() {
                                h(e)
                            }
                        }
                    }
                }(t.key)), () => {
                    _.default.disableTemp()
                }), [t.key]), (0, a.jsx)(t.LayerComponent, {
                    children: (0, a.jsxs)("div", {
                        className: N.root,
                        ref: s,
                        children: [(0, a.jsx)("div", {
                            className: N.drag
                        }), t.render({
                            transitionState: null != t ? t.transitionState : 3,
                            closeLayer: () => h(t.key)
                        })]
                    })
                })
            }
            let m = {
                    enter: N.enter,
                    enterActive: N.enterActive,
                    enterDone: N.enterDone,
                    exit: N.exit,
                    exitActive: N.exitActive,
                    exitDone: N.exitDone
                },
                S = {
                    enter: N.enterReducedMotion,
                    enterActive: N.enterActiveReducedMotion,
                    enterDone: N.enterDoneReducedMotion,
                    exit: N.exitReducedMotion,
                    exitActive: N.exitActiveReducedMotion,
                    exitDone: N.exitDoneReducedMotion
                };

            function M() {
                let {
                    reducedMotion: e
                } = l.useContext(E.AccessibilityPreferencesContext), t = e.enabled, s = t ? S : m, i = R(e => e.fullScreenLayers);
                return (0, a.jsx)(u.TransitionGroup, {
                    children: i.map(e => (0, a.jsx)(u.CSSTransition, {
                        classNames: s,
                        timeout: f,
                        onEntered: () => {
                            R.setState({
                                fullScreenLayers: i.map(t => t.key === e.key ? {
                                    ...t,
                                    transitionState: 2
                                } : t)
                            })
                        },
                        unmountOnExit: !0,
                        children: (0, a.jsx)(g, {
                            item: e
                        })
                    }, e.key))
                })
            }

            function G(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    {
                        layerKey: s,
                        Layer: i
                    } = t,
                    r = null != s ? s : n();
                return R.setState(t => ({
                    fullScreenLayers: [...t.fullScreenLayers, {
                        key: r,
                        transitionState: 1,
                        LayerComponent: null != i ? i : I.default,
                        render: e
                    }]
                })), r
            }

            function h(e) {
                R.setState(t => ({
                    fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
                }))
            }
        },
        478565: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                HeartIcon: function() {
                    return l
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("669491"),
                a = s("82169");
            let l = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...n
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(n),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M12.47 21.73a.92.92 0 0 1-.94 0C9.43 20.48 1 15.09 1 8.75A5.75 5.75 0 0 1 6.75 3c2.34 0 3.88.9 5.25 2.26A6.98 6.98 0 0 1 17.25 3 5.75 5.75 0 0 1 23 8.75c0 6.34-8.42 11.73-10.53 12.98Z",
                        className: o
                    })
                })
            }
        },
        842458: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ServerGridIcon: function() {
                    return l
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("669491"),
                a = s("82169");
            let l = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...n
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(n),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M5.25 2A3.25 3.25 0 0 0 2 5.25v2.5C2 9.55 3.46 11 5.25 11h2.5C9.55 11 11 9.54 11 7.75v-2.5C11 3.45 9.54 2 7.75 2h-2.5ZM5.25 13A3.25 3.25 0 0 0 2 16.25v2.5C2 20.55 3.46 22 5.25 22h2.5c1.8 0 3.25-1.46 3.25-3.25v-2.5C11 14.45 9.54 13 7.75 13h-2.5ZM13 5.25C13 3.45 14.46 2 16.25 2h2.5C20.55 2 22 3.46 22 5.25v2.5c0 1.8-1.46 3.25-3.25 3.25h-2.5A3.25 3.25 0 0 1 13 7.75v-2.5ZM16.25 13A3.25 3.25 0 0 0 13 16.25v2.5c0 1.8 1.46 3.25 3.25 3.25h2.5c1.8 0 3.25-1.46 3.25-3.25v-2.5c0-1.8-1.46-3.25-3.25-3.25h-2.5Z",
                        className: o
                    })
                })
            }
        },
        105159: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ShieldUserIcon: function() {
                    return l
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("669491"),
                a = s("82169");
            let l = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...n
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(n),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M3.47 5.18c.27-.4.64-.74 1.1-.96l6.09-3.05a3 3 0 0 1 2.68 0l6.1 3.05A2.83 2.83 0 0 1 21 6.75v3.5a14.17 14.17 0 0 1-8.42 12.5c-.37.16-.79.16-1.16 0A14.18 14.18 0 0 1 3 9.77V6.75c0-.57.17-1.11.47-1.57Zm2.95 10.3A12.18 12.18 0 0 0 12 20.82a12.18 12.18 0 0 0 5.58-5.32A9.49 9.49 0 0 0 12.47 14h-.94c-1.88 0-3.63.55-5.11 1.49ZM12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        353982: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                SoundboardIcon: function() {
                    return l
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("669491"),
                a = s("82169");
            let l = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...n
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, a.default)(n),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M14.24 1.03a1 1 0 0 1 .73 1.21l-1 4a1 1 0 1 1-1.94-.48l1-4a1 1 0 0 1 1.21-.73ZM20.7 4.7a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 0 0 1.4 1.4l4-4Z",
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M15.14 20.14c1.78-1.78.7-5.75-2.42-8.86-3.11-3.12-7.08-4.2-8.86-2.42A3.13 3.13 0 0 0 3 11V11l-1.16 8.92a2 2 0 0 0 2.24 2.24L13 21c.86-.04 1.6-.32 2.14-.86Zm-1.3-3.4a9.61 9.61 0 0 0-2.53-4.05 9.61 9.61 0 0 0-4.05-2.53c-1.27-.35-1.82-.05-1.99.11-.16.17-.46.72-.11 2a9.61 9.61 0 0 0 2.53 4.04 9.61 9.61 0 0 0 4.05 2.53c1.27.35 1.82.05 1.99-.11.16-.17.46-.72.11-2Z",
                        clipRule: "evenodd",
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M7.05 3.32a1 1 0 0 1 1.9-.64l1 3a1 1 0 0 1-1.9.64l-1-3ZM22.97 9.76a1 1 0 0 0-1.21-.73l-4 1a1 1 0 1 0 .48 1.94l4-1a1 1 0 0 0 .73-1.21ZM20.68 16.95a1 1 0 0 0 .64-1.9l-3-1a1 1 0 0 0-.64 1.9l3 1Z",
                        className: o
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=44504.d153e82113445970455e.js.map