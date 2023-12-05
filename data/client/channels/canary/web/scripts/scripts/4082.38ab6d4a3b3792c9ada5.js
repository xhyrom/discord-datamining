(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["4082"], {
        653240: function(e, t, i) {
            "use strict";
            e.exports = i.p + "baa5b6db50bb89d55668.svg"
        },
        140802: function(e, t, i) {
            "use strict";
            e.exports = i.p + "abb37025036befe38e64.svg"
        },
        862013: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function() {
                    return a
                },
                MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
                    return s
                },
                MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
                    return r
                },
                IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
                    return u
                },
                insertAccessibilityLabelElements: function() {
                    return o
                }
            });
            var l = i("476765"),
                n = i("782340");
            let a = (0, l.uid)(),
                s = (0, l.uid)(),
                r = (0, l.uid)(),
                u = (0, l.uid)();

            function o() {
                [{
                    id: a,
                    text: ","
                }, {
                    id: s,
                    text: ","
                }, {
                    id: r,
                    text: n.default.Messages.REACTIONS
                }, {
                    id: u,
                    text: n.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
                }].forEach(e => {
                    let {
                        id: t,
                        text: i
                    } = e, l = document.getElementById(t);
                    null == l && ((l = document.createElement("div")).setAttribute("id", t), l.innerText = i, l.style.display = "none", document.body.appendChild(l))
                })
            }
        },
        626301: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                navigateToPremiumMarketingPage: function() {
                    return a
                }
            });
            var l = i("79112"),
                n = i("49111");
            let a = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                l.default.open(n.UserSettingsSections.PREMIUM, null, {
                    openWithoutBackstack: e
                })
            }
        },
        635956: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return R
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("414456"),
                a = i.n(n),
                s = i("446674"),
                r = i("77078"),
                u = i("79112"),
                o = i("685665"),
                c = i("788506"),
                d = i("649844"),
                m = i("393414"),
                f = i("797647"),
                p = i("697218"),
                I = i("521012"),
                T = i("471671"),
                h = i("181114"),
                S = i("978679"),
                E = i("216422"),
                g = i("719923"),
                N = i("646718"),
                _ = i("49111"),
                y = i("782340"),
                A = i("683437"),
                R = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: n,
                        onClick: R,
                        size: M,
                        className: P,
                        trialId: b,
                        isTrialCTA: x,
                        buttonText: O,
                        buttonTextClassName: L,
                        postSuccessGuild: C,
                        onSubscribeModalClose: j,
                        premiumModalAnalyticsLocation: U,
                        showIcon: v = !0,
                        disableShine: G,
                        applicationId: B,
                        giftMessage: D,
                        overrideDisabledButtonText: k,
                        shinyButtonClassName: w,
                        ...W
                    } = e, H = (0, s.useStateFromStores)([p.default], () => p.default.getCurrentUser()), F = (0, s.useStateFromStores)([T.default], () => T.default.isFocused()), Y = (0, s.useStateFromStores)([I.default], () => I.default.getPremiumTypeSubscription()), {
                        analyticsLocations: z
                    } = (0, o.default)(), K = e => {
                        if (e.preventDefault(), null == H) {
                            (0, m.transitionTo)(_.Routes.LOGIN);
                            return
                        }
                        if (null == R || R(e), (null == Y ? void 0 : Y.status) === _.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, c.trackPremiumSettingsPaneOpened)(), u.default.open(_.UserSettingsSections.PREMIUM), null == j || j(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: n,
                                isGift: a,
                                subscriptionTier: s,
                                trialId: u,
                                postSuccessGuild: o,
                                onSubscribeModalClose: c,
                                analyticsLocations: m,
                                premiumModalAnalyticsLocation: f,
                                applicationId: p,
                                giftMessage: I
                            } = e;
                            if (!t) {
                                (0, r.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await i.el("984599").then(i.bind(i, "984599"));
                                    return t => {
                                        let {
                                            onClose: i,
                                            ...n
                                        } = t;
                                        return (0, l.jsx)(e, {
                                            ...n,
                                            onClose: i
                                        })
                                    }
                                });
                                return
                            }
                            if (!n) {
                                (0, r.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await i.el("899917").then(i.bind(i, "899917"));
                                    return t => {
                                        let {
                                            onClose: i,
                                            ...n
                                        } = t;
                                        return (0, l.jsx)(e, {
                                            ...n,
                                            onClose: i
                                        })
                                    }
                                });
                                return
                            }
                            let T = _.AnalyticsObjectTypes.BUY;
                            null != u ? T = _.AnalyticsObjectTypes.TRIAL : a && (T = _.AnalyticsObjectTypes.GIFT), (0, d.default)({
                                isGift: a,
                                initialPlanId: null,
                                subscriptionTier: s,
                                analyticsLocations: m,
                                analyticsObject: {
                                    object: _.AnalyticsObjects.BUTTON_CTA,
                                    objectType: T,
                                    ...f
                                },
                                trialId: u,
                                postSuccessGuild: o,
                                onClose: c,
                                applicationId: p,
                                giftMessage: I
                            })
                        }({
                            isClaimed: H.isClaimed(),
                            isVerified: H.verified,
                            isGift: t,
                            subscriptionTier: n,
                            trialId: b,
                            postSuccessGuild: C,
                            onSubscribeModalClose: j,
                            analyticsLocations: z,
                            premiumModalAnalyticsLocation: U,
                            applicationId: B,
                            giftMessage: D
                        })
                    };
                    if (x) return (0, l.jsxs)(r.Button, {
                        size: M,
                        className: P,
                        innerClassName: A.premiumSubscribeButton,
                        look: r.Button.Looks.INVERTED,
                        onClick: K,
                        ...W,
                        children: [v && (0, l.jsx)(E.default, {
                            className: A.premiumIcon
                        }), (0, l.jsx)("span", {
                            className: a(A.buttonText, L),
                            children: null != O ? O : y.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, l.jsxs)(r.Button, {
                        size: M,
                        className: P,
                        innerClassName: A.giftButton,
                        color: r.Button.Colors.PRIMARY,
                        onClick: K,
                        ...W,
                        children: [(0, l.jsx)(S.default, {
                            className: A.giftIcon
                        }), (0, l.jsx)("span", {
                            className: a(A.buttonText, L),
                            children: null != O ? O : y.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let V = y.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        X = null != Y ? (0, g.getPremiumPlanItem)(Y) : null,
                        Z = null != X ? g.default.getPremiumType(X.planId) : null == H ? void 0 : H.premiumType,
                        q = n === N.PremiumSubscriptionSKUs.TIER_2 && null != Z && [N.PremiumTypes.TIER_0, N.PremiumTypes.TIER_1].includes(Z);
                    q && (V = y.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let J = null != Y && Y.status !== _.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, f.isNoneSubscription)(Y.planId) && !q,
                        Q = J ? null != k ? k : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: i
                            } = e, l = null, n = null;
                            if (null != t && t !== N.PremiumSubscriptionSKUs.LEGACY && t !== N.PremiumSubscriptionSKUs.TIER_0 && t !== N.PremiumSubscriptionSKUs.TIER_1 && t !== N.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: l,
                                disabledButtonTooltipText: n
                            };
                            let a = null != t ? N.PremiumSubscriptionSKUToPremiumType[t] : null,
                                s = null != a ? N.PremiumTypeOrder[a] : null,
                                r = null != i ? N.PremiumTypeOrder[i] : null;
                            return null != r && null != s && s < r ? (l = y.default.Messages.APPLICATION_STORE_GET_PREMIUM, n = y.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != a && null != i && a === i ? (l = y.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, n = y.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == a && null != i && i === N.PremiumTypes.TIER_2 && (n = y.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: l,
                                disabledButtonTooltipText: n
                            }
                        }({
                            ctaSubscriptionSkuId: n,
                            currentPremiumType: Z
                        }) : null;

                    function $(e) {
                        var t, i;
                        return (0, l.jsxs)(h.default, {
                            disabled: J,
                            onClick: K,
                            innerClassName: A.premiumSubscribeButton,
                            color: n === N.PremiumSubscriptionSKUs.TIER_1 ? r.Button.Colors.PRIMARY : r.Button.Colors.GREEN,
                            size: M,
                            className: w,
                            wrapperClassName: P,
                            pauseAnimation: !F || G,
                            ...W,
                            ...e,
                            children: [v && (0, l.jsx)(E.default, {
                                className: A.premiumIcon
                            }), (0, l.jsx)("span", {
                                className: a(A.buttonText, L),
                                children: null !== (i = null !== (t = null == Q ? void 0 : Q.disabledButtonText) && void 0 !== t ? t : O) && void 0 !== i ? i : V
                            })]
                        })
                    }
                    return (null == Q ? void 0 : Q.disabledButtonTooltipText) != null ? (0, l.jsx)(r.Tooltip, {
                        text: Q.disabledButtonTooltipText,
                        children: $
                    }) : $()
                }
        },
        504439: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                thumbHashToRGBA: function() {
                    return n
                }
            }), i("424973"), i("311790"), i("477657"), i("811875"), i("90301"), i("652153"), i("28797"), i("817884"), i("597349"), i("667536"), i("690341");
            var l = i("723251");

            function n(e) {
                let {
                    detail: t = 1,
                    pop: i = 1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    PI: n,
                    min: a,
                    max: s,
                    cos: r,
                    round: u
                } = Math, o = e[0] | e[1] << 8 | e[2] << 16, c = e[3] | e[4] << 8, d = (63 & o) / 63, m = (o >> 6 & 63) / 31.5 - 1, f = (o >> 12 & 63) / 31.5 - 1, p = o >> 23, I = c >> 15, T = s(3, I ? p ? 5 : 7 : 7 & c), h = s(3, I ? 7 & c : p ? 5 : 7), S = p ? (15 & e[5]) / 15 : 1, E = (e[5] >> 4) / 15, g = p ? 6 : 5, N = 0, _ = (t, i, l) => {
                    let n = [];
                    for (let a = 0; a < i; a++)
                        for (let s = a ? 0 : 1; s * i < t * (i - a); s++) n.push(((e[g + (N >> 1)] >> ((1 & N++) << 2) & 15) / 7.5 - 1) * l);
                    return n
                }, y = _(T, h, (o >> 18 & 31) / 31 / 2), A = _(3, 3, (c >> 3 & 63) / 63 * i), R = _(3, 3, (c >> 9 & 63) / 63 * i), M = p ? _(5, 5, E) : [], P = (0, l.thumbHashToApproximateAspectRatio)(e), b = u(P > 1 ? 32 : 32 * P), x = u(P > 1 ? 32 / P : 32), O = new Uint8Array(b * x * 4), L = [], C = [];
                for (let e = 0, i = 0; e < x; e++)
                    for (let l = 0; l < b; l++, i += 4) {
                        let u = d,
                            o = m,
                            c = f,
                            I = S;
                        for (let e = 0, t = s(T, p ? 5 : 3); e < t; e++) L[e] = r(n / b * (l + .5) * e);
                        for (let t = 0, i = s(h, p ? 5 : 3); t < i; t++) C[t] = r(n / x * (e + .5) * t);
                        for (let e = 0, i = 0; e < h; e++)
                            for (let l = e ? 0 : 1, n = 2 * C[e]; l * h < T * (h - e); l++, i++) !(l > t) && !(e > t) && (u += y[i] * L[l] * n);
                        for (let e = 0, t = 0; e < 3; e++)
                            for (let i = e ? 0 : 1, l = 2 * C[e]; i < 3 - e; i++, t++) {
                                let e = L[i] * l;
                                o += A[t] * e, c += R[t] * e
                            }
                        if (p)
                            for (let e = 0, t = 0; e < 5; e++)
                                for (let i = e ? 0 : 1, l = 2 * C[e]; i < 5 - e; i++, t++) I += M[t] * L[i] * l;
                        let E = u - 2 / 3 * o,
                            g = (3 * u - E + c) / 2,
                            N = g - c;
                        O[i] = s(0, 255 * a(1, g)), O[i + 1] = s(0, 255 * a(1, N)), O[i + 2] = s(0, 255 * a(1, E)), O[i + 3] = s(0, 255 * a(1, I))
                    }
                return {
                    w: b,
                    h: x,
                    rgba: O
                }
            }
        },
        594098: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return Image
                }
            }), i("222007");
            var l, Image, n = i("37983"),
                a = i("884691"),
                s = i("414456"),
                r = i.n(s),
                u = i("819855"),
                o = i("77078"),
                c = i("841098"),
                d = i("862013"),
                m = i("103603"),
                f = i("547630"),
                p = i("193513"),
                I = i("719347"),
                T = i("49111"),
                h = i("782340"),
                S = i("151739"),
                E = i("653240"),
                g = i("140802");

            function N(e) {
                let {
                    size: t,
                    mediaLayoutType: i,
                    alt: l
                } = e, a = (0, c.default)();
                return (0, n.jsx)("div", {
                    className: S.imageErrorWrapper,
                    style: function(e, t) {
                        switch (t) {
                            case I.MediaLayoutType.MOSAIC:
                                return {
                                    width: "100%", height: "100%", aspectRatio: "".concat(e.width, " / ").concat(e.height), display: "flex", maxHeight: "inherit"
                                };
                            case I.MediaLayoutType.RESPONSIVE:
                                return {
                                    ...y(e), display: "flex"
                                };
                            default:
                                return e
                        }
                    }(t, i),
                    children: (0, n.jsx)("img", {
                        src: (0, u.isThemeLight)(a) ? g : E,
                        className: S.imageError,
                        alt: null != l ? l : h.default.Messages.IMAGE
                    })
                })
            }(l = class extends a.PureComponent {
                render() {
                    let e;
                    let {
                        className: t,
                        imageClassName: i,
                        readyState: l,
                        src: a,
                        placeholder: s,
                        placeholderVersion: u,
                        showThumbhashPlaceholder: c,
                        alt: f,
                        width: E,
                        height: g,
                        maxWidth: y = E,
                        maxHeight: A = g,
                        minWidth: R,
                        minHeight: M,
                        mediaLayoutType: P,
                        limitResponsiveWidth: b = !0,
                        accessory: x,
                        zoomable: O,
                        original: L,
                        children: C,
                        renderItem: j,
                        renderAccessory: U,
                        onClick: v,
                        tabIndex: G,
                        useFullWidth: B = !1,
                        ...D
                    } = this.props;
                    if (1 === E && 1 === g) return null;
                    let k = (0, m.fit)({
                        width: E,
                        height: g,
                        maxWidth: y,
                        maxHeight: A,
                        minWidth: R,
                        minHeight: M
                    });
                    if (null != a && l === T.ImageReadyStates.READY && "function" == typeof C) e = null != j ? j() : C({
                        src: a,
                        size: k,
                        alt: f,
                        className: i,
                        mediaLayoutType: P
                    });
                    else if (!c) {
                        if (l === T.ImageReadyStates.LOADING) {
                            let t = 0 !== k.width ? k.height / k.width : 1;
                            e = null != a && "" !== a ? (0, n.jsxs)("div", {
                                children: [(0, n.jsx)("img", {
                                    alt: null != f ? f : h.default.Messages.IMAGE,
                                    title: f,
                                    src: a,
                                    style: _(k, P)
                                }), (0, n.jsx)("div", {
                                    className: S.imagePlaceholderOverlay
                                }), (0, n.jsx)(o.Spinner, {
                                    type: o.SpinnerTypes.WANDERING_CUBES,
                                    className: S.placeholderLoadingSpinner
                                })]
                            }) : (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)("div", {
                                    style: {
                                        paddingBottom: "".concat(100 * t, "%")
                                    },
                                    children: (0, n.jsx)("div", {
                                        className: S.loadingWrapperInner,
                                        children: (0, n.jsx)(o.Spinner, {
                                            type: o.SpinnerTypes.WANDERING_CUBES,
                                            className: S.loadingSpinner
                                        })
                                    })
                                })
                            })
                        } else e = (0, n.jsx)(N, {
                            size: k,
                            mediaLayoutType: P,
                            alt: f
                        })
                    }
                    if (c) {
                        let t = 0 !== k.width ? k.width / k.height : 1;
                        null != a && "" !== a && l !== T.ImageReadyStates.ERROR ? e = C({
                            src: a,
                            size: k,
                            alt: f,
                            className: i,
                            mediaLayoutType: P
                        }) : l !== T.ImageReadyStates.LOADING && (e = (0, n.jsx)(N, {
                            size: k,
                            mediaLayoutType: P,
                            alt: f
                        })), e = (0, n.jsx)(p.ImageLoadingOverlay, {
                            readyState: l,
                            aspectRatio: t,
                            placeholder: s,
                            placeholderVersion: u,
                            placeholderStyle: _(k, P),
                            children: e
                        })
                    }
                    let w = null != U ? U() : null;
                    return w = null != w ? w : x, (0, n.jsx)(o.FocusRing, {
                        ringTarget: this._containerRef,
                        focusTarget: this._clickableRef,
                        children: (0, n.jsxs)("div", {
                            className: r(S.imageWrapper, {
                                [S.imageZoom]: O,
                                [S.imageWrapperBackground]: l !== T.ImageReadyStates.READY,
                                [S.clickable]: null != v
                            }, t),
                            style: function(e, t, i, l, n) {
                                return n === I.MediaLayoutType.MOSAIC ? {
                                    display: "block",
                                    maxHeight: "inherit",
                                    margin: "auto",
                                    width: !i && e.width <= I.MEDIA_MOSAIC_MAX_WIDTH ? e.width : "100%",
                                    height: "100%"
                                } : null != l || n === I.MediaLayoutType.RESPONSIVE ? {
                                    maxWidth: t ? e.width : void 0,
                                    width: "100%",
                                    aspectRatio: "".concat(e.width, " / ").concat(e.height)
                                } : e
                            }(k, b, B, j, P),
                            ...D,
                            children: [null != L && (0, n.jsx)("a", {
                                tabIndex: -1,
                                onClick: v,
                                "aria-hidden": !0,
                                className: S.originalLink,
                                href: L,
                                ref: this._containerRef,
                                "data-role": "img",
                                "data-safe-src": a
                            }), null != v ? (0, n.jsx)(o.Clickable, {
                                className: S.clickableWrapper,
                                tabIndex: null != G ? G : 0,
                                onClick: v,
                                "aria-label": null != f ? f : h.default.Messages.IMAGE,
                                "aria-describedby": d.IMAGE_OPEN_DIALOG_DESCRIPTION,
                                innerRef: this._clickableRef,
                                focusProps: {
                                    enabled: !1
                                },
                                children: e
                            }) : e, null != w ? (0, n.jsx)("div", {
                                className: S.imageAccessory,
                                children: w
                            }) : null]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._containerRef = a.createRef(), this._clickableRef = a.createRef()
                }
            }).defaultProps = {
                readyState: T.ImageReadyStates.READY,
                zoomable: !0,
                children: e => {
                    let {
                        src: t,
                        size: i,
                        alt: l,
                        className: a,
                        mediaLayoutType: s
                    } = e;
                    return (0, n.jsx)("img", {
                        className: null != a ? a : void 0,
                        alt: null != l ? l : h.default.Messages.IMAGE,
                        src: t,
                        style: _(i, s)
                    })
                },
                minWidth: 0,
                minHeight: 0
            }, Image = l;

            function _(e, t) {
                switch (t) {
                    case I.MediaLayoutType.MOSAIC:
                        return {
                            display: "block", objectFit: "cover", minWidth: "100%", minHeight: "100%", maxWidth: 1 === (0, f.default)() ? "calc(100% + 1px)" : "100%"
                        };
                    case I.MediaLayoutType.RESPONSIVE:
                        return y(e);
                    default:
                        return e
                }
            }

            function y(e) {
                let {
                    width: t,
                    height: i
                } = e;
                return {
                    maxWidth: t,
                    maxHeight: i,
                    width: "100%",
                    display: "block",
                    aspectRatio: "".concat(t, " / ").concat(i)
                }
            }
        },
        193513: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ImageLoadingOverlay: function() {
                    return p
                }
            }), i("222007"), i("311790"), i("477657"), i("811875"), i("90301"), i("652153"), i("28797"), i("817884"), i("597349"), i("667536"), i("690341"), i("492311"), i("101997");
            var l = i("37983"),
                n = i("884691"),
                a = i("301165"),
                s = i("723251"),
                r = i("77078"),
                u = i("504439"),
                o = i("49111"),
                c = i("151739");
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
                m = {
                    ...d,
                    config: {
                        duration: 50
                    }
                },
                f = {
                    ...d,
                    config: (e, t) => t ? {
                        duration: 800
                    } : {
                        duration: 200
                    }
                };

            function p(e) {
                let {
                    readyState: t,
                    aspectRatio: i,
                    placeholder: p,
                    placeholderVersion: I,
                    placeholderStyle: T,
                    children: h
                } = e, S = t === o.ImageReadyStates.LOADING, [E] = n.useState(() => Date.now()), [g] = n.useState(S), [N, _] = n.useState(!1), y = n.useMemo(() => {
                    if (g && 1 === I && null != p) {
                        let e = Uint8Array.from(atob(p), e => e.charCodeAt(0)),
                            t = (0, u.thumbHashToRGBA)(e, {
                                detail: 1,
                                pop: 1.1
                            }),
                            i = (0, s.rgbaToDataURL)(t.w, t.h, t.rgba);
                        return i
                    }
                }, [g, p, I]);
                n.useEffect(() => {
                    let e = setTimeout(() => {
                        _(!0)
                    }, 2e3);
                    return () => {
                        clearTimeout(e)
                    }
                }, [g]);
                let A = t === o.ImageReadyStates.READY && Date.now() - E < 200,
                    R = (0, a.useTransition)(S && null != y, A ? m : d),
                    M = (0, a.useTransition)(S && N, f);
                return (0, l.jsxs)("div", {
                    className: c.loadingOverlay,
                    style: {
                        aspectRatio: i
                    },
                    children: [h, R((e, t) => t && (0, l.jsx)(a.animated.img, {
                        style: {
                            ...T,
                            ...e
                        },
                        className: c.imagePlaceholder,
                        src: y,
                        alt: ""
                    })), M((e, t) => t && (0, l.jsx)(a.animated.div, {
                        style: e,
                        className: c.imageLoadingOverlay,
                        children: (0, l.jsx)(r.Spinner, {
                            type: r.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                            className: c.cornerLoadingSpinner
                        })
                    }))]
                })
            }
        }
    }
]);
//# sourceMappingURL=4082.38ab6d4a3b3792c9ada5.js.map