(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86480"], {
        668973: function(e, t, i) {
            "use strict";
            e.exports = i.p + "18517b33da6ed36b855b.svg"
        },
        124036: function(e, t, i) {
            "use strict";
            e.exports = i.p + "2304725db3c96705e901.svg"
        },
        721569: function(e, t, i) {
            "use strict";
            e.exports = i.p + "b21a7b48a6e973958489.svg"
        },
        644286: function(e, t, i) {
            "use strict";
            e.exports = i.p + "5ff8ffaa3831478d2a28.svg"
        },
        597346: function(e, t, i) {
            "use strict";
            e.exports = i.p + "4ba6811c2bcb626963c6.svg"
        },
        380499: function(e, t, i) {
            "use strict";
            e.exports = i.p + "20c942338703af7dccd1.svg"
        },
        50617: function(e, t, i) {
            "use strict";
            e.exports = i.p + "d18655651bd838408129.svg"
        },
        972094: function(e, t, i) {
            "use strict";
            e.exports = i.p + "5f5e1a58ecf11d0d8d15.svg"
        },
        92729: function(e, t, i) {
            "use strict";
            e.exports = i.p + "f5710b460ce933c9abe8.svg"
        },
        335e3: function(e, t, i) {
            "use strict";
            e.exports = i.p + "f5c7b6adf73fe335fa05.svg"
        },
        302872: function(e, t, i) {
            "use strict";
            e.exports = i.p + "4fd94b2e62b94b0454d3.svg"
        },
        425914: function(e, t, i) {
            "use strict";
            e.exports = i.p + "5b74fc90eac76055a5ad.svg"
        },
        272477: function(e, t, i) {
            "use strict";
            e.exports = i.p + "d994d2093d7d1924be78.svg"
        },
        164059: function(e, t, i) {
            "use strict";
            e.exports = i.p + "e9b67e80d0033605e8f4.svg"
        },
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
                    return l
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
            var n = i("476765"),
                s = i("782340");
            let a = (0, n.uid)(),
                l = (0, n.uid)(),
                r = (0, n.uid)(),
                u = (0, n.uid)();

            function o() {
                [{
                    id: a,
                    text: ","
                }, {
                    id: l,
                    text: ","
                }, {
                    id: r,
                    text: s.default.Messages.REACTIONS
                }, {
                    id: u,
                    text: s.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
                }].forEach(e => {
                    let {
                        id: t,
                        text: i
                    } = e, n = document.getElementById(t);
                    null == n && ((n = document.createElement("div")).setAttribute("id", t), n.innerText = i, n.style.display = "none", document.body.appendChild(n))
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
            var n = i("79112"),
                s = i("49111");
            let a = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                n.default.open(s.UserSettingsSections.PREMIUM, null, {
                    openWithoutBackstack: e
                })
            }
        },
        635956: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return A
                }
            });
            var n = i("37983");
            i("884691");
            var s = i("414456"),
                a = i.n(s),
                l = i("446674"),
                r = i("77078"),
                u = i("79112"),
                o = i("685665"),
                c = i("788506"),
                d = i("649844"),
                f = i("393414"),
                p = i("797647"),
                m = i("697218"),
                I = i("521012"),
                T = i("471671"),
                g = i("181114"),
                h = i("978679"),
                S = i("216422"),
                E = i("719923"),
                N = i("646718"),
                _ = i("49111"),
                y = i("782340"),
                b = i("683437"),
                A = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: s,
                        onClick: A,
                        size: R,
                        className: x,
                        trialId: M,
                        isTrialCTA: P,
                        buttonText: O,
                        buttonTextClassName: L,
                        iconClassName: v,
                        postSuccessGuild: C,
                        onSubscribeModalClose: j,
                        premiumModalAnalyticsLocation: U,
                        showIcon: G = !0,
                        disableShine: B,
                        applicationId: D,
                        giftMessage: k,
                        overrideDisabledButtonText: w,
                        shinyButtonClassName: W,
                        ...H
                    } = e, F = (0, l.useStateFromStores)([m.default], () => m.default.getCurrentUser()), Y = (0, l.useStateFromStores)([T.default], () => T.default.isFocused()), z = (0, l.useStateFromStores)([I.default], () => I.default.getPremiumTypeSubscription()), {
                        analyticsLocations: K
                    } = (0, o.default)(), V = e => {
                        if (e.preventDefault(), null == F) {
                            (0, f.transitionTo)(_.Routes.LOGIN);
                            return
                        }
                        if (null == A || A(e), (null == z ? void 0 : z.status) === _.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, c.trackPremiumSettingsPaneOpened)(), u.default.open(_.UserSettingsSections.PREMIUM), null == j || j(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: s,
                                isGift: a,
                                subscriptionTier: l,
                                trialId: u,
                                postSuccessGuild: o,
                                onSubscribeModalClose: c,
                                analyticsLocations: f,
                                premiumModalAnalyticsLocation: p,
                                applicationId: m,
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
                                            ...s
                                        } = t;
                                        return (0, n.jsx)(e, {
                                            ...s,
                                            onClose: i
                                        })
                                    }
                                });
                                return
                            }
                            if (!s) {
                                (0, r.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await i.el("899917").then(i.bind(i, "899917"));
                                    return t => {
                                        let {
                                            onClose: i,
                                            ...s
                                        } = t;
                                        return (0, n.jsx)(e, {
                                            ...s,
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
                                subscriptionTier: l,
                                analyticsLocations: f,
                                analyticsObject: {
                                    object: _.AnalyticsObjects.BUTTON_CTA,
                                    objectType: T,
                                    ...p
                                },
                                trialId: u,
                                postSuccessGuild: o,
                                onClose: c,
                                applicationId: m,
                                giftMessage: I
                            })
                        }({
                            isClaimed: F.isClaimed(),
                            isVerified: F.verified,
                            isGift: t,
                            subscriptionTier: s,
                            trialId: M,
                            postSuccessGuild: C,
                            onSubscribeModalClose: j,
                            analyticsLocations: K,
                            premiumModalAnalyticsLocation: U,
                            applicationId: D,
                            giftMessage: k
                        })
                    };
                    if (P) return (0, n.jsxs)(r.Button, {
                        size: R,
                        className: x,
                        innerClassName: b.premiumSubscribeButton,
                        look: r.Button.Looks.INVERTED,
                        onClick: V,
                        ...H,
                        children: [G && (0, n.jsx)(S.default, {
                            className: b.premiumIcon
                        }), (0, n.jsx)("span", {
                            className: a(b.buttonText, L),
                            children: null != O ? O : y.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, n.jsxs)(r.Button, {
                        size: R,
                        className: x,
                        innerClassName: b.giftButton,
                        color: r.Button.Colors.PRIMARY,
                        onClick: V,
                        ...H,
                        children: [(0, n.jsx)(h.default, {
                            className: b.giftIcon
                        }), (0, n.jsx)("span", {
                            className: a(b.buttonText, L),
                            children: null != O ? O : y.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let X = y.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        Z = null != z ? (0, E.getPremiumPlanItem)(z) : null,
                        q = null != Z ? E.default.getPremiumType(Z.planId) : null == F ? void 0 : F.premiumType,
                        J = s === N.PremiumSubscriptionSKUs.TIER_2 && null != q && [N.PremiumTypes.TIER_0, N.PremiumTypes.TIER_1].includes(q);
                    J && (X = y.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let Q = null != z && z.status !== _.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, p.isNoneSubscription)(z.planId) && !J,
                        $ = Q ? null != w ? w : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: i
                            } = e, n = null, s = null;
                            if (null != t && t !== N.PremiumSubscriptionSKUs.LEGACY && t !== N.PremiumSubscriptionSKUs.TIER_0 && t !== N.PremiumSubscriptionSKUs.TIER_1 && t !== N.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: n,
                                disabledButtonTooltipText: s
                            };
                            let a = null != t ? N.PremiumSubscriptionSKUToPremiumType[t] : null,
                                l = null != a ? N.PremiumTypeOrder[a] : null,
                                r = null != i ? N.PremiumTypeOrder[i] : null;
                            return null != r && null != l && l < r ? (n = y.default.Messages.APPLICATION_STORE_GET_PREMIUM, s = y.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != a && null != i && a === i ? (n = y.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, s = y.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == a && null != i && i === N.PremiumTypes.TIER_2 && (s = y.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: n,
                                disabledButtonTooltipText: s
                            }
                        }({
                            ctaSubscriptionSkuId: s,
                            currentPremiumType: q
                        }) : null;

                    function ee(e) {
                        var t, i;
                        return (0, n.jsxs)(g.default, {
                            disabled: Q,
                            onClick: V,
                            innerClassName: b.premiumSubscribeButton,
                            color: s === N.PremiumSubscriptionSKUs.TIER_1 ? r.Button.Colors.PRIMARY : r.Button.Colors.GREEN,
                            size: R,
                            className: W,
                            wrapperClassName: x,
                            pauseAnimation: !Y || B,
                            ...H,
                            ...e,
                            children: [G && (0, n.jsx)(S.default, {
                                className: a(b.premiumIcon, v)
                            }), (0, n.jsx)("span", {
                                className: a(b.buttonText, L),
                                children: null !== (i = null !== (t = null == $ ? void 0 : $.disabledButtonText) && void 0 !== t ? t : O) && void 0 !== i ? i : X
                            })]
                        })
                    }
                    return (null == $ ? void 0 : $.disabledButtonTooltipText) != null ? (0, n.jsx)(r.Tooltip, {
                        text: $.disabledButtonTooltipText,
                        children: ee
                    }) : ee()
                }
        },
        504439: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                thumbHashToRGBA: function() {
                    return s
                }
            }), i("424973"), i("311790"), i("477657"), i("811875"), i("90301"), i("652153"), i("28797"), i("817884"), i("597349"), i("667536"), i("690341");
            var n = i("723251");

            function s(e) {
                let {
                    detail: t = 1,
                    pop: i = 1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    PI: s,
                    min: a,
                    max: l,
                    cos: r,
                    round: u
                } = Math, o = e[0] | e[1] << 8 | e[2] << 16, c = e[3] | e[4] << 8, d = (63 & o) / 63, f = (o >> 6 & 63) / 31.5 - 1, p = (o >> 12 & 63) / 31.5 - 1, m = o >> 23, I = c >> 15, T = l(3, I ? m ? 5 : 7 : 7 & c), g = l(3, I ? 7 & c : m ? 5 : 7), h = m ? (15 & e[5]) / 15 : 1, S = (e[5] >> 4) / 15, E = m ? 6 : 5, N = 0, _ = (t, i, n) => {
                    let s = [];
                    for (let a = 0; a < i; a++)
                        for (let l = a ? 0 : 1; l * i < t * (i - a); l++) s.push(((e[E + (N >> 1)] >> ((1 & N++) << 2) & 15) / 7.5 - 1) * n);
                    return s
                }, y = _(T, g, (o >> 18 & 31) / 31 / 2), b = _(3, 3, (c >> 3 & 63) / 63 * i), A = _(3, 3, (c >> 9 & 63) / 63 * i), R = m ? _(5, 5, S) : [], x = (0, n.thumbHashToApproximateAspectRatio)(e), M = u(x > 1 ? 32 : 32 * x), P = u(x > 1 ? 32 / x : 32), O = new Uint8Array(M * P * 4), L = [], v = [];
                for (let e = 0, i = 0; e < P; e++)
                    for (let n = 0; n < M; n++, i += 4) {
                        let u = d,
                            o = f,
                            c = p,
                            I = h;
                        for (let e = 0, t = l(T, m ? 5 : 3); e < t; e++) L[e] = r(s / M * (n + .5) * e);
                        for (let t = 0, i = l(g, m ? 5 : 3); t < i; t++) v[t] = r(s / P * (e + .5) * t);
                        for (let e = 0, i = 0; e < g; e++)
                            for (let n = e ? 0 : 1, s = 2 * v[e]; n * g < T * (g - e); n++, i++) !(n > t) && !(e > t) && (u += y[i] * L[n] * s);
                        for (let e = 0, t = 0; e < 3; e++)
                            for (let i = e ? 0 : 1, n = 2 * v[e]; i < 3 - e; i++, t++) {
                                let e = L[i] * n;
                                o += b[t] * e, c += A[t] * e
                            }
                        if (m)
                            for (let e = 0, t = 0; e < 5; e++)
                                for (let i = e ? 0 : 1, n = 2 * v[e]; i < 5 - e; i++, t++) I += R[t] * L[i] * n;
                        let S = u - 2 / 3 * o,
                            E = (3 * u - S + c) / 2,
                            N = E - c;
                        O[i] = l(0, 255 * a(1, E)), O[i + 1] = l(0, 255 * a(1, N)), O[i + 2] = l(0, 255 * a(1, S)), O[i + 3] = l(0, 255 * a(1, I))
                    }
                return {
                    w: M,
                    h: P,
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
            var n, Image, s = i("37983"),
                a = i("884691"),
                l = i("414456"),
                r = i.n(l),
                u = i("819855"),
                o = i("77078"),
                c = i("841098"),
                d = i("862013"),
                f = i("103603"),
                p = i("547630"),
                m = i("193513"),
                I = i("719347"),
                T = i("49111"),
                g = i("782340"),
                h = i("151739"),
                S = i("653240"),
                E = i("140802");

            function N(e) {
                let {
                    size: t,
                    mediaLayoutType: i,
                    alt: n
                } = e, a = (0, c.default)();
                return (0, s.jsx)("div", {
                    className: h.imageErrorWrapper,
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
                    children: (0, s.jsx)("img", {
                        src: (0, u.isThemeLight)(a) ? E : S,
                        className: h.imageError,
                        alt: null != n ? n : g.default.Messages.IMAGE
                    })
                })
            }(n = class extends a.PureComponent {
                render() {
                    let e;
                    let {
                        className: t,
                        imageClassName: i,
                        readyState: n,
                        src: a,
                        placeholder: l,
                        placeholderVersion: u,
                        showThumbhashPlaceholder: c,
                        alt: p,
                        width: S,
                        height: E,
                        maxWidth: y = S,
                        maxHeight: b = E,
                        minWidth: A,
                        minHeight: R,
                        mediaLayoutType: x,
                        limitResponsiveWidth: M = !0,
                        accessory: P,
                        zoomable: O,
                        original: L,
                        children: v,
                        renderItem: C,
                        renderAccessory: j,
                        onClick: U,
                        tabIndex: G,
                        useFullWidth: B = !1,
                        ...D
                    } = this.props;
                    if (1 === S && 1 === E) return null;
                    let k = (0, f.fit)({
                        width: S,
                        height: E,
                        maxWidth: y,
                        maxHeight: b,
                        minWidth: A,
                        minHeight: R
                    });
                    if (null != a && n === T.ImageReadyStates.READY && "function" == typeof v) e = null != C ? C() : v({
                        src: a,
                        size: k,
                        alt: p,
                        className: i,
                        mediaLayoutType: x
                    });
                    else if (!c) {
                        if (n === T.ImageReadyStates.LOADING) {
                            let t = 0 !== k.width ? k.height / k.width : 1;
                            e = null != a && "" !== a ? (0, s.jsxs)("div", {
                                children: [(0, s.jsx)("img", {
                                    alt: null != p ? p : g.default.Messages.IMAGE,
                                    title: p,
                                    src: a,
                                    style: _(k, x)
                                }), (0, s.jsx)("div", {
                                    className: h.imagePlaceholderOverlay
                                }), (0, s.jsx)(o.Spinner, {
                                    type: o.SpinnerTypes.WANDERING_CUBES,
                                    className: h.placeholderLoadingSpinner
                                })]
                            }) : (0, s.jsx)(s.Fragment, {
                                children: (0, s.jsx)("div", {
                                    style: {
                                        paddingBottom: "".concat(100 * t, "%")
                                    },
                                    children: (0, s.jsx)("div", {
                                        className: h.loadingWrapperInner,
                                        children: (0, s.jsx)(o.Spinner, {
                                            type: o.SpinnerTypes.WANDERING_CUBES,
                                            className: h.loadingSpinner
                                        })
                                    })
                                })
                            })
                        } else e = (0, s.jsx)(N, {
                            size: k,
                            mediaLayoutType: x,
                            alt: p
                        })
                    }
                    if (c) {
                        let t = 0 !== k.width ? k.width / k.height : 1;
                        null != a && "" !== a && n !== T.ImageReadyStates.ERROR ? e = v({
                            src: a,
                            size: k,
                            alt: p,
                            className: i,
                            mediaLayoutType: x
                        }) : n !== T.ImageReadyStates.LOADING && (e = (0, s.jsx)(N, {
                            size: k,
                            mediaLayoutType: x,
                            alt: p
                        })), e = (0, s.jsx)(m.ImageLoadingOverlay, {
                            readyState: n,
                            aspectRatio: t,
                            placeholder: l,
                            placeholderVersion: u,
                            placeholderStyle: _(k, x),
                            children: e
                        })
                    }
                    let w = null != j ? j() : null;
                    return w = null != w ? w : P, (0, s.jsx)(o.FocusRing, {
                        ringTarget: this._containerRef,
                        focusTarget: this._clickableRef,
                        children: (0, s.jsxs)("div", {
                            className: r(h.imageWrapper, {
                                [h.imageZoom]: O,
                                [h.imageWrapperBackground]: n !== T.ImageReadyStates.READY,
                                [h.clickable]: null != U
                            }, t),
                            style: function(e, t, i, n, s) {
                                return s === I.MediaLayoutType.MOSAIC ? {
                                    display: "block",
                                    maxHeight: "inherit",
                                    margin: "auto",
                                    width: !i && e.width <= I.MEDIA_MOSAIC_MAX_WIDTH ? e.width : "100%",
                                    height: "100%"
                                } : null != n || s === I.MediaLayoutType.RESPONSIVE ? {
                                    maxWidth: t ? e.width : void 0,
                                    width: "100%",
                                    aspectRatio: "".concat(e.width, " / ").concat(e.height)
                                } : e
                            }(k, M, B, C, x),
                            ...D,
                            children: [null != L && (0, s.jsx)("a", {
                                tabIndex: -1,
                                onClick: U,
                                "aria-hidden": !0,
                                className: h.originalLink,
                                href: L,
                                ref: this._containerRef,
                                "data-role": "img",
                                "data-safe-src": a
                            }), null != U ? (0, s.jsx)(o.Clickable, {
                                className: h.clickableWrapper,
                                tabIndex: null != G ? G : 0,
                                onClick: U,
                                "aria-label": null != p ? p : g.default.Messages.IMAGE,
                                "aria-describedby": d.IMAGE_OPEN_DIALOG_DESCRIPTION,
                                innerRef: this._clickableRef,
                                focusProps: {
                                    enabled: !1
                                },
                                children: e
                            }) : e, null != w ? (0, s.jsx)("div", {
                                className: h.imageAccessory,
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
                        alt: n,
                        className: a,
                        mediaLayoutType: l
                    } = e;
                    return (0, s.jsx)("img", {
                        className: null != a ? a : void 0,
                        alt: null != n ? n : g.default.Messages.IMAGE,
                        src: t,
                        style: _(i, l)
                    })
                },
                minWidth: 0,
                minHeight: 0
            }, Image = n;

            function _(e, t) {
                switch (t) {
                    case I.MediaLayoutType.MOSAIC:
                        return {
                            display: "block", objectFit: "cover", minWidth: "100%", minHeight: "100%", maxWidth: 1 === (0, p.default)() ? "calc(100% + 1px)" : "100%"
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
                    return m
                }
            }), i("222007"), i("311790"), i("477657"), i("811875"), i("90301"), i("652153"), i("28797"), i("817884"), i("597349"), i("667536"), i("690341"), i("492311"), i("101997");
            var n = i("37983"),
                s = i("884691"),
                a = i("907002"),
                l = i("723251"),
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
                f = {
                    ...d,
                    config: {
                        duration: 50
                    }
                },
                p = {
                    ...d,
                    config: (e, t) => t ? {
                        duration: 800
                    } : {
                        duration: 200
                    }
                };

            function m(e) {
                let {
                    readyState: t,
                    aspectRatio: i,
                    placeholder: m,
                    placeholderVersion: I,
                    placeholderStyle: T,
                    children: g
                } = e, h = t === o.ImageReadyStates.LOADING, [S] = s.useState(() => Date.now()), [E] = s.useState(h), [N, _] = s.useState(!1), y = s.useMemo(() => {
                    if (E && 1 === I && null != m) {
                        let e = Uint8Array.from(atob(m), e => e.charCodeAt(0)),
                            t = (0, u.thumbHashToRGBA)(e, {
                                detail: 1,
                                pop: 1.1
                            }),
                            i = (0, l.rgbaToDataURL)(t.w, t.h, t.rgba);
                        return i
                    }
                }, [E, m, I]);
                s.useEffect(() => {
                    let e = setTimeout(() => {
                        _(!0)
                    }, 2e3);
                    return () => {
                        clearTimeout(e)
                    }
                }, [E]);
                let b = t === o.ImageReadyStates.READY && Date.now() - S < 200,
                    A = (0, a.useTransition)(h && null != y, b ? f : d),
                    R = (0, a.useTransition)(h && N, p);
                return (0, n.jsxs)("div", {
                    className: c.loadingOverlay,
                    style: {
                        aspectRatio: i
                    },
                    children: [g, A((e, t) => t && (0, n.jsx)(a.animated.img, {
                        style: {
                            ...T,
                            ...e
                        },
                        className: c.imagePlaceholder,
                        src: y,
                        alt: ""
                    })), R((e, t) => t && (0, n.jsx)(a.animated.div, {
                        style: e,
                        className: c.imageLoadingOverlay,
                        children: (0, n.jsx)(r.Spinner, {
                            type: r.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                            className: c.cornerLoadingSpinner
                        })
                    }))]
                })
            }
        }
    }
]);
//# sourceMappingURL=86480.7807f1597064c9cf1872.js.map