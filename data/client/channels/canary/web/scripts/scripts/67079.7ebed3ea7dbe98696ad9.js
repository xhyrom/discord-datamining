(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67079"], {
        437822: function(t, e, o) {
            "use strict";
            let n;
            o.r(e), o.d(e, {
                PasswordResetResult: function() {
                    return d
                },
                default: function() {
                    return D
                }
            }), o("70102"), o("860677"), o("506083");
            var d, r, l = o("759843"),
                i = o("171718"),
                a = o("872717"),
                s = o("95410"),
                u = o("913144"),
                E = o("448993"),
                c = o("307439"),
                p = o("605250"),
                _ = o("21121"),
                h = o("393414"),
                S = o("271938"),
                O = o("350522"),
                I = o("840707"),
                f = o("772017"),
                A = o("49111"),
                R = o("191349");
            let N = new p.default("AuthenticationActionCreators"),
                T = null;

            function y(t) {
                let e = {
                    type: "LOGOUT",
                    ...t
                };
                u.default.dispatch(e).catch(t => {
                    var e;
                    throw N.error("Error while dispatching LOGOUT", t), null === (e = window.DiscordErrors) || void 0 === e || e.softCrash(t), t
                })
            }

            function C() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A.Routes.DEFAULT_LOGGED_OUT;
                y();
                let e = (0, _.getRootNavigationRefIfInExperiment)();
                null != t && (null != e ? (f.default.popAll(), e.navigate("auth")) : (0, h.transitionTo)(t))
            }(r = d || (d = {})).MFA = "MFA", r.SUCCESS = "SUCCESS";
            var D = {
                startSession(t) {
                    u.default.wait(() => {
                        u.default.dispatch({
                            type: "START_SESSION",
                            token: t
                        })
                    })
                },
                setLoginCredentials(t, e) {
                    u.default.dispatch({
                        type: "SET_LOGIN_CREDENTIALS",
                        login: t,
                        password: e
                    })
                },
                login(t) {
                    var e;
                    let {
                        login: o,
                        password: n,
                        loginCode: d,
                        undelete: r,
                        source: i,
                        giftCodeSKUId: a,
                        invite: s,
                        isMultiAccount: c
                    } = t;
                    u.default.dispatch({
                        type: "LOGIN",
                        login: o,
                        loginMethod: null != d && "" !== d ? A.LoginMethods.LOGIN_CODE : A.LoginMethods.PASSWORD
                    }), this.setLoginCredentials(o, null !== (e = null != n ? n : d) && void 0 !== e ? e : void 0), I.default.post({
                        url: A.Endpoints.LOGIN,
                        body: {
                            login: o,
                            password: n,
                            undelete: r,
                            login_code: d,
                            login_source: i,
                            gift_code_sku_id: a
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_LOGIN,
                            properties: {
                                invite_code: null == s ? void 0 : s.code,
                                is_multi_account: c
                            }
                        },
                        ...c ? {
                            headers: {
                                authorization: ""
                            }
                        } : {}
                    }).then(t => {
                        let {
                            body: {
                                mfa: e,
                                sms: o,
                                webauthn: n,
                                ticket: d,
                                token: r,
                                backup: l,
                                user_id: i,
                                required_actions: a,
                                totp: s
                            }
                        } = t;
                        u.default.dispatch({
                            type: "LOGIN_ATTEMPTED",
                            user_id: i,
                            required_actions: a
                        }), e ? u.default.dispatch({
                            type: "LOGIN_MFA_STEP",
                            ticket: d,
                            sms: o,
                            webauthn: n,
                            totp: s,
                            backup: l
                        }) : c ? this.switchAccountToken(r) : u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: r
                        })
                    }, t => {
                        var e, d, r;
                        if (null != t.body && (null === (e = t.body) || void 0 === e ? void 0 : e.suspended_user_token) != null) {
                            u.default.dispatch({
                                type: "LOGIN_SUSPENDED_USER",
                                suspendedUserToken: null === (r = t.body) || void 0 === r ? void 0 : r.suspended_user_token
                            });
                            return
                        }
                        let l = null === (d = t.body) || void 0 === d ? void 0 : d.code;
                        l === A.AbortCodes.ACCOUNT_SCHEDULED_FOR_DELETION && null != n && "" !== n ? u.default.dispatch({
                            type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
                            credentials: {
                                login: o,
                                password: n
                            }
                        }) : l === A.AbortCodes.ACCOUNT_DISABLED && null != n && "" !== n ? u.default.dispatch({
                            type: "LOGIN_ACCOUNT_DISABLED",
                            credentials: {
                                login: o,
                                password: n
                            }
                        }) : l === A.AbortCodes.PHONE_VERIFICATION_REQUIRED ? u.default.dispatch({
                            type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"
                        }) : u.default.dispatch({
                            type: "LOGIN_FAILURE",
                            error: new E.V6OrEarlierAPIError(t)
                        })
                    })
                },
                loginMFAv2(t) {
                    let e, {
                        code: o,
                        ticket: n,
                        source: d,
                        giftCodeSKUId: r,
                        isMultiAccount: i,
                        mfaType: a
                    } = t;
                    return e = "webauthn" === a ? A.Endpoints.LOGIN_WEBAUTHN : "sms" === a ? A.Endpoints.LOGIN_SMS : A.Endpoints.LOGIN_MFA, I.default.post({
                        url: e,
                        body: {
                            code: o,
                            ticket: n,
                            login_source: d,
                            gift_code_sku_id: r
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_LOGIN_MFA
                        }
                    }).then(t => {
                        i ? this.switchAccountToken(t.body.token) : u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: t.body.token
                        })
                    }).catch(t => {
                        var e;
                        if (null != t.body && null != t.body.suspended_user_token) {
                            u.default.dispatch({
                                type: "LOGIN_SUSPENDED_USER",
                                suspendedUserToken: t.body.suspended_user_token
                            });
                            return
                        }
                        if ((null === (e = t.body) || void 0 === e ? void 0 : e.code) === A.AbortCodes.MFA_INVALID_CODE) throw Error(t.body.message);
                        throw t
                    })
                },
                loginToken(t) {
                    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return u.default.dispatch({
                        type: "LOGIN"
                    }), new Promise(o => {
                        setImmediate(() => {
                            u.default.dispatch({
                                type: "LOGIN_SUCCESS",
                                token: t
                            }), e && this.startSession(t), o()
                        })
                    })
                },
                loginReset(t) {
                    u.default.dispatch({
                        type: "LOGIN_RESET",
                        isMultiAccount: t
                    })
                },
                loginStatusReset() {
                    u.default.dispatch({
                        type: "LOGIN_STATUS_RESET"
                    })
                },
                logoutInternal(t) {
                    y(t)
                },
                logout() {
                    var t;
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A.Routes.DEFAULT_LOGGED_OUT,
                        o = arguments.length > 1 ? arguments[1] : void 0;
                    return I.default.post({
                        url: A.Endpoints.LOGOUT,
                        body: {
                            provider: (0, R.getDevicePushProvider)(),
                            token: s.default.get(A.DEVICE_TOKEN),
                            voip_provider: R.DEVICE_PUSH_VOIP_PROVIDER,
                            voip_token: s.default.get(A.DEVICE_VOIP_TOKEN)
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_LOGOUT
                        },
                        ...null != o && {
                            headers: {
                                authorization: null !== (t = i.default.getToken(o)) && void 0 !== t ? t : ""
                            }
                        }
                    }).finally(() => {
                        (null == o || o === S.default.getId()) && C(e)
                    })
                },
                switchAccountToken(t) {
                    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        o = S.default.getToken();
                    N.log("Switching accounts", {
                        wasLoggedIn: null != o,
                        tokenHasChanged: t !== o
                    }), y({
                        isSwitchingAccount: !0
                    });
                    let n = this.loginToken(t, !0).then(() => {
                        let e = S.default.getToken();
                        N.log("Switched accounts finished", {
                            isCorrectToken: t === e
                        })
                    });
                    return e && (0, h.transitionTo)(A.Routes.ME), n
                },
                verifySSOToken() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A.Routes.DEFAULT_LOGGED_OUT;
                    return a.default.get({
                        url: A.Endpoints.ME,
                        oldFormErrors: !0
                    }).catch(() => C(t))
                },
                verify(t) {
                    null != t ? I.default.post({
                        url: A.Endpoints.VERIFY,
                        body: {
                            token: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_VERIFY
                        }
                    }).then(t => {
                        u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: t.body.token
                        }), u.default.dispatch({
                            type: "VERIFY_SUCCESS",
                            verifyingUserId: t.body.user_id
                        })
                    }, t => u.default.dispatch({
                        type: "VERIFY_FAILURE",
                        errors: t.body
                    })) : u.default.dispatch({
                        type: "VERIFY_FAILURE",
                        errors: {}
                    })
                },
                async authorizePayment(t) {
                    try {
                        await I.default.post({
                            url: A.Endpoints.AUTHORIZE_PAYMENT,
                            body: {
                                token: t
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: l.NetworkActionNames.AUTHORIZE_PAYMENT
                            }
                        }), u.default.dispatch({
                            type: "VERIFY_SUCCESS"
                        })
                    } catch (t) {
                        u.default.dispatch({
                            type: "VERIFY_FAILURE",
                            errors: {}
                        })
                    }
                },
                async authorizeIPAddress(t) {
                    if (null == t) {
                        u.default.dispatch({
                            type: "VERIFY_FAILURE",
                            errors: {}
                        });
                        return
                    }
                    try {
                        await I.default.post({
                            url: A.Endpoints.AUTHORIZE_IP,
                            body: {
                                token: t
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: l.NetworkActionNames.AUTHORIZE_IP
                            }
                        }), u.default.dispatch({
                            type: "VERIFY_SUCCESS"
                        })
                    } catch (t) {
                        u.default.dispatch({
                            type: "VERIFY_FAILURE",
                            errors: {}
                        })
                    }
                },
                verifyResend: () => I.default.post({
                    url: A.Endpoints.VERIFY_RESEND,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: l.NetworkActionNames.USER_VERIFY_RESEND
                    }
                }),
                async resetPassword(t, e, o) {
                    u.default.dispatch({
                        type: "LOGIN"
                    });
                    let n = {
                            token: t,
                            password: e,
                            source: o
                        },
                        d = s.default.get(A.DEVICE_TOKEN),
                        r = (0, R.getDevicePushProvider)();
                    null != r && null != d && (n.push_provider = r, n.push_token = d);
                    let i = s.default.get(A.DEVICE_VOIP_TOKEN);
                    null != R.DEVICE_PUSH_VOIP_PROVIDER && null != i && (n.push_voip_provider = R.DEVICE_PUSH_VOIP_PROVIDER, n.push_voip_token = i);
                    try {
                        let {
                            body: {
                                mfa: t,
                                sms: e,
                                webauthn: o,
                                ticket: d,
                                token: r,
                                backup: i,
                                totp: a
                            }
                        } = await I.default.post({
                            url: A.Endpoints.RESET_PASSWORD,
                            body: n,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: l.NetworkActionNames.USER_RESET_PASSWORD
                            }
                        });
                        return {
                            result: t ? "MFA" : "SUCCESS",
                            sms: e,
                            webauthn: o,
                            ticket: d,
                            token: r,
                            backup: i,
                            totp: a
                        }
                    } catch (t) {
                        throw u.default.dispatch({
                            type: "LOGIN_FAILURE",
                            error: new E.V6OrEarlierAPIError(t)
                        }), t
                    }
                },
                async resetPasswordMFAv2(t) {
                    let {
                        method: e,
                        code: o,
                        ticket: n,
                        password: d,
                        token: r,
                        source: i
                    } = t;
                    u.default.dispatch({
                        type: "LOGIN_MFA"
                    });
                    let a = await I.default.post({
                        url: A.Endpoints.RESET_PASSWORD,
                        body: {
                            code: o,
                            ticket: n,
                            password: d,
                            token: r,
                            source: i,
                            method: e
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_RESET_PASSWORD,
                            properties: {
                                mfa: !0
                            }
                        }
                    });
                    return a.body.token
                },
                async forgotPassword(t) {
                    this.setLoginCredentials(t), u.default.dispatch({
                        type: "FORGOT_PASSWORD_REQUEST"
                    });
                    try {
                        await I.default.post({
                            url: A.Endpoints.FORGOT_PASSWORD,
                            body: {
                                login: t
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: l.NetworkActionNames.FORGOT_PASSWORD
                            }
                        }), u.default.dispatch({
                            type: "FORGOT_PASSWORD_SENT"
                        })
                    } catch (o) {
                        let t = new E.V6OrEarlierAPIError(o),
                            e = t.code;
                        throw e === A.AbortCodes.PHONE_VERIFICATION_REQUIRED ? u.default.dispatch({
                            type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION"
                        }) : u.default.dispatch({
                            type: "LOGIN_FAILURE",
                            error: t
                        }), o
                    }
                },
                setFingerprint(t) {
                    u.default.dispatch({
                        type: "FINGERPRINT",
                        fingerprint: t
                    })
                },
                getExperiments(t) {
                    u.default.dispatch({
                        type: "EXPERIMENTS_FETCH",
                        withGuildExperiments: t
                    })
                },
                getLocationMetadata: () => null != T ? T : (clearTimeout(n), n = setTimeout(() => {
                    u.default.dispatch({
                        type: "SET_CONSENT_REQUIRED",
                        consentRequired: !0
                    })
                }, 5e3), T = a.default.get({
                    url: A.Endpoints.AUTH_LOCATION_METADATA,
                    retries: 2,
                    oldFormErrors: !0
                }).then(t => {
                    var e, o, d, r, l;
                    if (clearTimeout(n), null == O.default.getAuthenticationConsentRequired()) {
                        let e = null === (r = null == t ? void 0 : null === (d = t.body) || void 0 === d ? void 0 : d.consent_required) || void 0 === r || r;
                        u.default.dispatch({
                            type: "SET_CONSENT_REQUIRED",
                            consentRequired: e
                        })
                    }
                    if (u.default.dispatch({
                            type: "SET_LOCATION_METADATA",
                            countryCode: null !== (l = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.country_code) && void 0 !== l ? l : void 0
                        }), T = null, (null == t ? void 0 : null === (o = t.body) || void 0 === o ? void 0 : o.promotional_email_opt_in) != null) {
                        let e = t.body.promotional_email_opt_in;
                        (0, c.setPromoEmailConsentState)({
                            required: e.required,
                            checked: e.pre_checked,
                            preChecked: e.pre_checked
                        })
                    }
                }, () => {
                    clearTimeout(n), u.default.dispatch({
                        type: "SET_CONSENT_REQUIRED",
                        consentRequired: !0
                    }), T = null
                })),
                closeSuspendedUser() {
                    u.default.dispatch({
                        type: "CLOSE_SUSPENDED_USER"
                    })
                }
            }
        },
        772017: function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, {
                default: function() {
                    return E
                }
            }), o("424973");
            var n = o("995008"),
                d = o.n(n),
                r = o("913144"),
                l = o("693051"),
                i = o("153498"),
                a = o("76493"),
                s = o("91731"),
                u = o("49111"),
                E = {
                    push(t, e) {
                        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d("modal"),
                            n = arguments.length > 3 ? arguments[3] : void 0,
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : u.AppContext.APP;
                        return (0, i.pushModal)({
                            key: o,
                            modal: (0, s.default)(t, {}, e, o),
                            ...n
                        }), r.default.dispatch({
                            type: "MODAL_PUSH",
                            modal: t,
                            props: e,
                            key: o,
                            appContext: l
                        }), o
                    },
                    pushLazy(t, e) {
                        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d("modal"),
                            n = arguments.length > 3 ? arguments[3] : void 0,
                            r = (0, l.getRootNavigationRef)();
                        return null != r && r.isReady() ? (t instanceof Promise ? t.then(t => {
                            let {
                                default: e
                            } = t;
                            return e
                        }) : t()).then(t => this.push(t, e, o, n)) : new Promise(d => a.default.enqueue(() => d(this.pushLazy(t, e, o, n))))
                    },
                    updateAnimation(t, e) {
                        r.default.dispatch({
                            type: "MODAL_UPDATE",
                            key: t,
                            props: {},
                            partial: !0,
                            animation: e
                        })
                    },
                    pop() {
                        (0, i.popModal)(), r.default.dispatch({
                            type: "MODAL_POP"
                        })
                    },
                    popWithKey(t, e) {
                        (0, i.popModal)(t, e), r.default.dispatch({
                            type: "MODAL_POP",
                            key: t,
                            onExited: e
                        })
                    },
                    popAll() {
                        (0, i.popAllModals)(), r.default.dispatch({
                            type: "MODAL_POP_ALL"
                        }), r.default.dispatch({
                            type: "CHANNEL_SETTINGS_CLOSE"
                        }), r.default.dispatch({
                            type: "EMAIL_VERIFICATION_MODAL_CLOSE"
                        }), r.default.dispatch({
                            type: "GUILD_SETTINGS_CLOSE"
                        }), r.default.dispatch({
                            type: "HIDE_ACTION_SHEET"
                        }), r.default.dispatch({
                            type: "DISPLAYED_INVITE_CLEAR"
                        }), r.default.dispatch({
                            type: "DRAWER_CLOSE",
                            animated: !0
                        }), r.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        }), r.default.dispatch({
                            type: "QUICKSWITCHER_HIDE"
                        }), r.default.dispatch({
                            type: "MENTION_MODAL_CLOSE"
                        }), r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), r.default.dispatch({
                            type: "SEARCH_MODAL_CLOSE"
                        }), r.default.dispatch({
                            type: "CONNECTIONS_GRID_MODAL_HIDE"
                        })
                    }
                }
        },
        307439: function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, {
                setPromoEmailConsentState: function() {
                    return r
                },
                setPromoEmailConsentChecked: function() {
                    return l
                },
                usePromoEmailConsentStore: function() {
                    return i
                }
            });
            var n = o("308503");
            let d = (0, n.default)(() => ({
                    required: !1,
                    checked: !1,
                    preChecked: !1
                })),
                r = t => {
                    d.setState(t)
                },
                l = t => {
                    d.setState({
                        checked: t
                    })
                },
                i = d
        },
        76493: function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, {
                default: function() {
                    return n
                }
            }), o("424973");
            var n = new class t {
                enqueue(t) {
                    this.queue.push(t)
                }
                flush() {
                    for (; this.queue.length > 0;) {
                        var t;
                        null === (t = this.queue.shift()) || void 0 === t || t()
                    }
                }
                constructor() {
                    this.queue = []
                }
            }
        },
        191349: function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return l
                },
                getDevicePushProvider: function() {
                    return i
                }
            });
            var n, d, r = o("773336");
            let l = null;

            function i() {
                return (0, r.isAndroid)(), null
            }(n = d || (d = {})).REMINDER = "reminder", n.TOP_MESSAGE_PUSH = "top_messages_push", n.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        350522: function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, {
                default: function() {
                    return u
                }
            });
            var n = o("446674"),
                d = o("913144");
            let r = !1,
                l = !1,
                i = {},
                a = null;
            class s extends n.default.Store {
                hasConsented(t) {
                    return null != i[t] && i[t].consented
                }
                get fetchedConsents() {
                    return r
                }
                get receivedConsentsInConnectionOpen() {
                    return l
                }
                getAuthenticationConsentRequired() {
                    return a
                }
            }
            s.displayName = "ConsentStore";
            var u = new s(d.default, {
                CONNECTION_OPEN: function(t) {
                    let {
                        consents: e
                    } = t;
                    null != e && (i = {
                        ...i,
                        ...e
                    }, l = !0)
                },
                UPDATE_CONSENTS: function(t) {
                    let {
                        consents: e
                    } = t;
                    i = {
                        ...e
                    }, r = !0
                },
                SET_CONSENT_REQUIRED: function(t) {
                    a = t.consentRequired
                },
                LOGOUT: function() {
                    a = null
                }
            })
        },
        91731: function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, {
                default: function() {
                    return r
                }
            });
            var n = o("206230"),
                d = o("49111");

            function r(t, e, o) {
                var r, l, i, a, s, u, E, c;
                let p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    key: null !== (l = null !== (r = e.key) && void 0 !== r ? r : p) && void 0 !== l ? l : "modal",
                    modal: t,
                    animation: null !== (i = e.animation) && void 0 !== i ? i : n.default.useReducedMotion ? d.ModalAnimation.FADE : d.ModalAnimation.SLIDE_UP,
                    shouldPersistUnderModals: null !== (a = e.shouldPersistUnderModals) && void 0 !== a && a,
                    props: o,
                    backdropStyle: null !== (s = e.backdropStyle) && void 0 !== s ? s : null,
                    backdropInstant: null !== (u = e.backdropInstant) && void 0 !== u && u,
                    disableAnimation: null !== (E = e.disableAnimation) && void 0 !== E && E,
                    closable: "boolean" != typeof e.closable || e.closable,
                    label: null !== (c = e.label) && void 0 !== c ? c : "",
                    callbacks: {}
                }
            }
        }
    }
]);
//# sourceMappingURL=67079.7ebed3ea7dbe98696ad9.js.map