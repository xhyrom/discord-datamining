(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67079"], {
        437822: function(e, t, n) {
            "use strict";
            let s;
            n.r(t), n.d(t, {
                PasswordResetResult: function() {
                    return o
                },
                default: function() {
                    return y
                }
            }), n("70102"), n("860677"), n("506083");
            var o, l, a = n("759843"),
                i = n("171718"),
                r = n("872717"),
                d = n("95410"),
                u = n("913144"),
                c = n("448993"),
                E = n("307439"),
                _ = n("605250"),
                p = n("21121"),
                f = n("776502"),
                h = n("393414"),
                S = n("271938"),
                A = n("350522"),
                O = n("840707"),
                I = n("772017"),
                N = n("49111"),
                C = n("191349");
            let m = new _.default("AuthenticationActionCreators"),
                T = null;

            function R(e) {
                let t = {
                    type: "LOGOUT",
                    ...e
                };
                u.default.dispatch(t).catch(e => {
                    var t;
                    throw m.error("Error while dispatching LOGOUT", e), null === (t = window.DiscordErrors) || void 0 === t || t.softCrash(e), e
                })
            }

            function v() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.Routes.DEFAULT_LOGGED_OUT;
                R();
                let t = (0, p.getRootNavigationRefIfInExperiment)();
                null != e && (null != t ? (I.default.popAll(), t.navigate("auth")) : (0, h.transitionTo)(e))
            }(l = o || (o = {})).MFA = "MFA", l.SUCCESS = "SUCCESS";
            var y = {
                startSession(e) {
                    u.default.wait(() => {
                        u.default.dispatch({
                            type: "START_SESSION",
                            token: e
                        })
                    })
                },
                setLoginCredentials(e, t) {
                    u.default.dispatch({
                        type: "SET_LOGIN_CREDENTIALS",
                        login: e,
                        password: t
                    })
                },
                login(e) {
                    var t;
                    let {
                        login: n,
                        password: s,
                        loginCode: o,
                        undelete: l,
                        source: i,
                        giftCodeSKUId: r,
                        invite: d,
                        isMultiAccount: E
                    } = e;
                    u.default.dispatch({
                        type: "LOGIN",
                        login: n,
                        loginMethod: null != o && "" !== o ? N.LoginMethods.LOGIN_CODE : N.LoginMethods.PASSWORD
                    }), this.setLoginCredentials(n, null !== (t = null != s ? s : o) && void 0 !== t ? t : void 0), O.default.post({
                        url: N.Endpoints.LOGIN,
                        body: {
                            login: n,
                            password: s,
                            undelete: l,
                            login_code: o,
                            login_source: i,
                            gift_code_sku_id: r
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_LOGIN,
                            properties: {
                                invite_code: null == d ? void 0 : d.code,
                                is_multi_account: E
                            }
                        },
                        ...E ? {
                            headers: {
                                authorization: ""
                            }
                        } : {}
                    }).then(e => {
                        let {
                            body: {
                                mfa: t,
                                sms: n,
                                webauthn: s,
                                ticket: o,
                                token: l,
                                backup: a,
                                user_id: i,
                                required_actions: r,
                                totp: d
                            }
                        } = e;
                        u.default.dispatch({
                            type: "LOGIN_ATTEMPTED",
                            user_id: i,
                            required_actions: r
                        }), t ? u.default.dispatch({
                            type: "LOGIN_MFA_STEP",
                            ticket: o,
                            sms: n,
                            webauthn: s,
                            totp: d,
                            backup: a
                        }) : E ? this.switchAccountToken(l) : u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: l
                        })
                    }, e => {
                        var t;
                        let o = null === (t = e.body) || void 0 === t ? void 0 : t.code;
                        o === N.AbortCodes.ACCOUNT_SCHEDULED_FOR_DELETION && null != s && "" !== s ? u.default.dispatch({
                            type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
                            credentials: {
                                login: n,
                                password: s
                            }
                        }) : o === N.AbortCodes.ACCOUNT_DISABLED && null != s && "" !== s ? u.default.dispatch({
                            type: "LOGIN_ACCOUNT_DISABLED",
                            credentials: {
                                login: n,
                                password: s
                            }
                        }) : o === N.AbortCodes.PHONE_VERIFICATION_REQUIRED ? u.default.dispatch({
                            type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"
                        }) : u.default.dispatch({
                            type: "LOGIN_FAILURE",
                            error: new c.V6OrEarlierAPIError(e)
                        })
                    })
                },
                loginMFAv2(e) {
                    let t, {
                        code: n,
                        ticket: s,
                        source: o,
                        giftCodeSKUId: l,
                        isMultiAccount: i,
                        mfaType: r
                    } = e;
                    return t = "webauthn" === r ? N.Endpoints.LOGIN_WEBAUTHN : "sms" === r ? N.Endpoints.LOGIN_SMS : N.Endpoints.LOGIN_MFA, O.default.post({
                        url: t,
                        body: {
                            code: n,
                            ticket: s,
                            login_source: o,
                            gift_code_sku_id: l
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_LOGIN_MFA
                        }
                    }).then(e => {
                        i ? this.switchAccountToken(e.body.token) : u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: e.body.token
                        })
                    }).catch(e => {
                        var t;
                        if ((null === (t = e.body) || void 0 === t ? void 0 : t.code) === N.AbortCodes.MFA_INVALID_CODE) throw Error((0, f.mapError)(r));
                        throw e
                    })
                },
                loginToken(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return u.default.dispatch({
                        type: "LOGIN"
                    }), new Promise(n => {
                        setImmediate(() => {
                            u.default.dispatch({
                                type: "LOGIN_SUCCESS",
                                token: e
                            }), t && this.startSession(e), n()
                        })
                    })
                },
                loginReset(e) {
                    u.default.dispatch({
                        type: "LOGIN_RESET",
                        isMultiAccount: e
                    })
                },
                loginStatusReset() {
                    u.default.dispatch({
                        type: "LOGIN_STATUS_RESET"
                    })
                },
                logoutInternal(e) {
                    R(e)
                },
                logout() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.Routes.DEFAULT_LOGGED_OUT,
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    return O.default.post({
                        url: N.Endpoints.LOGOUT,
                        body: {
                            provider: (0, C.getDevicePushProvider)(),
                            token: d.default.get(N.DEVICE_TOKEN),
                            voip_provider: C.DEVICE_PUSH_VOIP_PROVIDER,
                            voip_token: d.default.get(N.DEVICE_VOIP_TOKEN)
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_LOGOUT
                        },
                        ...null != n && {
                            headers: {
                                authorization: null !== (e = i.default.getToken(n)) && void 0 !== e ? e : ""
                            }
                        }
                    }).finally(() => {
                        (null == n || n === S.default.getId()) && v(t)
                    })
                },
                switchAccountToken(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = S.default.getToken();
                    m.log("Switching accounts", {
                        wasLoggedIn: null != n,
                        tokenHasChanged: e !== n
                    }), R({
                        isSwitchingAccount: !0
                    });
                    let s = this.loginToken(e, !0).then(() => {
                        let t = S.default.getToken();
                        m.log("Switched accounts finished", {
                            isCorrectToken: e === t
                        })
                    });
                    return t && (0, h.transitionTo)(N.Routes.ME), s
                },
                verifySSOToken() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.Routes.DEFAULT_LOGGED_OUT;
                    return r.default.get({
                        url: N.Endpoints.ME,
                        oldFormErrors: !0
                    }).catch(() => v(e))
                },
                verify(e) {
                    null != e ? O.default.post({
                        url: N.Endpoints.VERIFY,
                        body: {
                            token: e
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_VERIFY
                        }
                    }).then(e => {
                        u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: e.body.token
                        }), u.default.dispatch({
                            type: "VERIFY_SUCCESS",
                            verifyingUserId: e.body.user_id
                        })
                    }, e => u.default.dispatch({
                        type: "VERIFY_FAILURE",
                        errors: e.body
                    })) : u.default.dispatch({
                        type: "VERIFY_FAILURE",
                        errors: {}
                    })
                },
                async authorizePayment(e) {
                    try {
                        await O.default.post({
                            url: N.Endpoints.AUTHORIZE_PAYMENT,
                            body: {
                                token: e
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: a.NetworkActionNames.AUTHORIZE_PAYMENT
                            }
                        }), u.default.dispatch({
                            type: "VERIFY_SUCCESS"
                        })
                    } catch (e) {
                        u.default.dispatch({
                            type: "VERIFY_FAILURE",
                            errors: {}
                        })
                    }
                },
                async authorizeIPAddress(e) {
                    if (null == e) {
                        u.default.dispatch({
                            type: "VERIFY_FAILURE",
                            errors: {}
                        });
                        return
                    }
                    try {
                        await O.default.post({
                            url: N.Endpoints.AUTHORIZE_IP,
                            body: {
                                token: e
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: a.NetworkActionNames.AUTHORIZE_IP
                            }
                        }), u.default.dispatch({
                            type: "VERIFY_SUCCESS"
                        })
                    } catch (e) {
                        u.default.dispatch({
                            type: "VERIFY_FAILURE",
                            errors: {}
                        })
                    }
                },
                verifyResend: () => O.default.post({
                    url: N.Endpoints.VERIFY_RESEND,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: a.NetworkActionNames.USER_VERIFY_RESEND
                    }
                }),
                async resetPassword(e, t, n) {
                    u.default.dispatch({
                        type: "LOGIN"
                    });
                    let s = {
                            token: e,
                            password: t,
                            source: n
                        },
                        o = d.default.get(N.DEVICE_TOKEN),
                        l = (0, C.getDevicePushProvider)();
                    null != l && null != o && (s.push_provider = l, s.push_token = o);
                    let i = d.default.get(N.DEVICE_VOIP_TOKEN);
                    null != C.DEVICE_PUSH_VOIP_PROVIDER && null != i && (s.push_voip_provider = C.DEVICE_PUSH_VOIP_PROVIDER, s.push_voip_token = i);
                    try {
                        let {
                            body: {
                                mfa: e,
                                sms: t,
                                webauthn: n,
                                ticket: o,
                                token: l,
                                backup: i,
                                totp: r
                            }
                        } = await O.default.post({
                            url: N.Endpoints.RESET_PASSWORD,
                            body: s,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: a.NetworkActionNames.USER_RESET_PASSWORD
                            }
                        });
                        return {
                            result: e ? "MFA" : "SUCCESS",
                            sms: t,
                            webauthn: n,
                            ticket: o,
                            token: l,
                            backup: i,
                            totp: r
                        }
                    } catch (e) {
                        throw u.default.dispatch({
                            type: "LOGIN_FAILURE",
                            error: new c.V6OrEarlierAPIError(e)
                        }), e
                    }
                },
                async resetPasswordMFAv2(e) {
                    let {
                        method: t,
                        code: n,
                        ticket: s,
                        password: o,
                        token: l,
                        source: i
                    } = e;
                    u.default.dispatch({
                        type: "LOGIN_MFA"
                    });
                    let r = await O.default.post({
                        url: N.Endpoints.RESET_PASSWORD,
                        body: {
                            code: n,
                            ticket: s,
                            password: o,
                            token: l,
                            source: i,
                            method: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_RESET_PASSWORD,
                            properties: {
                                mfa: !0
                            }
                        }
                    });
                    return r.body.token
                },
                async forgotPassword(e) {
                    this.setLoginCredentials(e), u.default.dispatch({
                        type: "FORGOT_PASSWORD_REQUEST"
                    });
                    try {
                        await O.default.post({
                            url: N.Endpoints.FORGOT_PASSWORD,
                            body: {
                                login: e
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: a.NetworkActionNames.FORGOT_PASSWORD
                            }
                        }), u.default.dispatch({
                            type: "FORGOT_PASSWORD_SENT"
                        })
                    } catch (n) {
                        let e = new c.V6OrEarlierAPIError(n),
                            t = e.code;
                        throw t === N.AbortCodes.PHONE_VERIFICATION_REQUIRED ? u.default.dispatch({
                            type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION"
                        }) : u.default.dispatch({
                            type: "LOGIN_FAILURE",
                            error: e
                        }), n
                    }
                },
                setFingerprint(e) {
                    u.default.dispatch({
                        type: "FINGERPRINT",
                        fingerprint: e
                    })
                },
                getExperiments(e) {
                    u.default.dispatch({
                        type: "EXPERIMENTS_FETCH",
                        withGuildExperiments: e
                    })
                },
                getLocationMetadata: () => null != T ? T : (clearTimeout(s), s = setTimeout(() => {
                    u.default.dispatch({
                        type: "SET_CONSENT_REQUIRED",
                        consentRequired: !0
                    })
                }, 5e3), T = r.default.get({
                    url: N.Endpoints.AUTH_LOCATION_METADATA,
                    retries: 2,
                    oldFormErrors: !0
                }).then(e => {
                    var t, n, o, l, a;
                    if (clearTimeout(s), null == A.default.getAuthenticationConsentRequired()) {
                        let t = null === (l = null == e ? void 0 : null === (o = e.body) || void 0 === o ? void 0 : o.consent_required) || void 0 === l || l;
                        u.default.dispatch({
                            type: "SET_CONSENT_REQUIRED",
                            consentRequired: t
                        })
                    }
                    if (u.default.dispatch({
                            type: "SET_LOCATION_METADATA",
                            countryCode: null !== (a = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.country_code) && void 0 !== a ? a : void 0
                        }), T = null, (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.promotional_email_opt_in) != null) {
                        let t = e.body.promotional_email_opt_in;
                        (0, E.setPromoEmailConsentState)({
                            required: t.required,
                            checked: t.pre_checked,
                            preChecked: t.pre_checked
                        })
                    }
                }, () => {
                    clearTimeout(s), u.default.dispatch({
                        type: "SET_CONSENT_REQUIRED",
                        consentRequired: !0
                    }), T = null
                }))
            }
        },
        772017: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("424973");
            var s = n("995008"),
                o = n.n(s),
                l = n("913144"),
                a = n("693051"),
                i = n("153498"),
                r = n("76493"),
                d = n("91731"),
                u = n("49111"),
                c = {
                    push(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o("modal"),
                            s = arguments.length > 3 ? arguments[3] : void 0,
                            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : u.AppContext.APP;
                        return (0, i.pushModal)({
                            key: n,
                            modal: (0, d.default)(e, {}, t, n),
                            ...s
                        }), l.default.dispatch({
                            type: "MODAL_PUSH",
                            modal: e,
                            props: t,
                            key: n,
                            appContext: a
                        }), n
                    },
                    pushLazy(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o("modal"),
                            s = arguments.length > 3 ? arguments[3] : void 0,
                            l = (0, a.getRootNavigationRef)();
                        return null != l && l.isReady() ? (e instanceof Promise ? e.then(e => {
                            let {
                                default: t
                            } = e;
                            return t
                        }) : e()).then(e => this.push(e, t, n, s)) : new Promise(o => r.default.enqueue(() => o(this.pushLazy(e, t, n, s))))
                    },
                    updateAnimation(e, t) {
                        l.default.dispatch({
                            type: "MODAL_UPDATE",
                            key: e,
                            props: {},
                            partial: !0,
                            animation: t
                        })
                    },
                    pop() {
                        (0, i.popModal)(), l.default.dispatch({
                            type: "MODAL_POP"
                        })
                    },
                    popWithKey(e, t) {
                        (0, i.popModal)(e, t), l.default.dispatch({
                            type: "MODAL_POP",
                            key: e,
                            onExited: t
                        })
                    },
                    popAll() {
                        (0, i.popAllModals)(), l.default.dispatch({
                            type: "MODAL_POP_ALL"
                        }), l.default.dispatch({
                            type: "CHANNEL_SETTINGS_CLOSE"
                        }), l.default.dispatch({
                            type: "EMAIL_VERIFICATION_MODAL_CLOSE"
                        }), l.default.dispatch({
                            type: "GUILD_SETTINGS_CLOSE"
                        }), l.default.dispatch({
                            type: "HIDE_ACTION_SHEET"
                        }), l.default.dispatch({
                            type: "DISPLAYED_INVITE_CLEAR"
                        }), l.default.dispatch({
                            type: "DRAWER_CLOSE",
                            animated: !0
                        }), l.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        }), l.default.dispatch({
                            type: "QUICKSWITCHER_HIDE"
                        }), l.default.dispatch({
                            type: "MENTION_MODAL_CLOSE"
                        }), l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), l.default.dispatch({
                            type: "SEARCH_MODAL_CLOSE"
                        }), l.default.dispatch({
                            type: "CONNECTIONS_GRID_MODAL_HIDE"
                        })
                    }
                }
        },
        307439: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setPromoEmailConsentState: function() {
                    return l
                },
                setPromoEmailConsentChecked: function() {
                    return a
                },
                usePromoEmailConsentStore: function() {
                    return i
                }
            });
            var s = n("308503");
            let o = (0, s.default)(() => ({
                    required: !1,
                    checked: !1,
                    preChecked: !1
                })),
                l = e => {
                    o.setState(e)
                },
                a = e => {
                    o.setState({
                        checked: e
                    })
                },
                i = o
        },
        76493: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("424973");
            var s = new class e {
                enqueue(e) {
                    this.queue.push(e)
                }
                flush() {
                    for (; this.queue.length > 0;) {
                        var e;
                        null === (e = this.queue.shift()) || void 0 === e || e()
                    }
                }
                constructor() {
                    this.queue = []
                }
            }
        },
        776502: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                mapError: function() {
                    return i
                },
                openMFAModal: function() {
                    return d
                }
            }), n("70102"), n("581081");
            var s = n("872717"),
                o = n("695501"),
                l = n("49111"),
                a = n("782340");

            function i(e) {
                let t = a.default.Messages.MFA_V2_INVALID_CODE;
                switch (e) {
                    case "webauthn":
                        t = a.default.Messages.MFA_V2_INVALID_WEBAUTHN;
                        break;
                    case "password":
                        t = a.default.Messages.MFA_V2_INVALID_PASSWORD
                }
                return t
            }
            async function r(e) {
                let {
                    ticket: t,
                    mfaType: n,
                    data: o
                } = e, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                try {
                    let e = await s.default.post({
                        url: l.Endpoints.FINISH_MFA_CHECK,
                        body: {
                            ticket: t,
                            mfa_type: n,
                            data: o
                        },
                        retries: a
                    });
                    return e.body
                } catch (e) {
                    var r;
                    if ((null === (r = e.body) || void 0 === r ? void 0 : r.code) === l.AbortCodes.MFA_INVALID_CODE) throw Error(i(n));
                    throw e
                }
            }

            function d(e, t, s) {
                let a = async e => {
                    let n = await r(e),
                        s = {
                            "X-Discord-MFA-Authorization": n.token
                        };
                    return new Promise((n, o) => {
                        t(s, (t, s, a) => {
                            var r, d;
                            return (null === (r = t.body) || void 0 === r ? void 0 : r.code) === l.AbortCodes.MFA_INVALID_CODE || (null === (d = t.body) || void 0 === d ? void 0 : d.code) === l.AbortCodes.MFA_REQUIRED ? (o(Error(i(e.mfaType))), !0) : (n(), !1)
                        })
                    })
                };
                e.methods = e.methods.filter(e => Object.hasOwn(o.SELECT_NAMES, e.type)), n("24287").openMFAModal(e, a, s)
            }
        },
        695501: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SELECT_NAMES: function() {
                    return o
                }
            });
            var s = n("782340");
            let o = {
                get webauthn() {
                    return s.default.Messages.MFA_V2_WEBAUTHN_NAME
                },
                get totp() {
                    return s.default.Messages.MFA_V2_TOTP_NAME
                },
                get sms() {
                    return s.default.Messages.MFA_V2_SMS_NAME
                },
                get password() {
                    return s.default.Messages.MFA_V2_PASSWORD_NAME
                },
                get backup() {
                    return s.default.Messages.MFA_V2_BACKUP_NAME
                }
            }
        },
        24287: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MFAModal: function() {
                    return y
                },
                MFASlides: function() {
                    return g
                },
                openMFAModal: function() {
                    return M
                }
            }), n("222007"), n("781738"), n("506083"), n("70102");
            var s = n("37983"),
                o = n("884691"),
                l = n("376507"),
                a = n("872717"),
                i = n("77078"),
                r = n("145131"),
                d = n("772280"),
                u = n("773336"),
                c = n("286235"),
                E = n("50885"),
                _ = n("695501"),
                p = n("49111"),
                f = n("782340"),
                h = n("992279");

            function S(e) {
                let {
                    subtitle: t,
                    onClose: n
                } = e;
                return (0, s.jsxs)(i.ModalHeader, {
                    direction: r.default.Direction.VERTICAL,
                    className: h.header,
                    separator: !1,
                    children: [(0, s.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        children: f.default.Messages.MFA_V2_HEADER
                    }), null != t && (0, s.jsx)(i.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        className: h.subtitle,
                        children: t
                    }), (0, s.jsx)(i.ModalCloseButton, {
                        className: h.closeButton,
                        onClick: n
                    })]
                })
            }

            function A(e) {
                let {
                    children: t
                } = e;
                return (0, s.jsx)(i.ModalContent, {
                    className: h.content,
                    children: t
                })
            }

            function O(e) {
                let {
                    error: t
                } = e;
                return null == t ? null : (0, s.jsx)(i.Text, {
                    className: h.error,
                    variant: "text-sm/normal",
                    color: "text-danger",
                    children: t
                })
            }

            function I(e) {
                let {
                    request: t,
                    setSlide: n,
                    showConfirm: o = !1,
                    ...l
                } = e, a = t.methods.length > 1;
                return a || o ? (0, s.jsxs)(i.ModalFooter, {
                    className: h.footer,
                    direction: o && !a ? r.default.Direction.HORIZONTAL_REVERSE : r.default.Direction.HORIZONTAL,
                    children: [a && (0, s.jsx)(i.Button, {
                        look: i.Button.Looks.LINK,
                        onClick: () => n("select"),
                        color: i.Button.Colors.PRIMARY,
                        children: f.default.Messages.MFA_V2_GO_TO_SELECT
                    }), o && (0, s.jsx)(i.Button, {
                        type: "submit",
                        ...l,
                        children: f.default.Messages.CONFIRM
                    })]
                }) : null
            }

            function N(e) {
                let {
                    request: t,
                    setSlide: n,
                    onClose: o
                } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(S, {
                        subtitle: f.default.Messages.MFA_V2_SELECT_HEADER,
                        onClose: o
                    }), (0, s.jsx)(A, {
                        children: t.methods.map(e => (0, s.jsxs)(i.Clickable, {
                            className: h.listItemContainer,
                            onClick: () => {
                                n(e.type)
                            },
                            children: [(0, s.jsx)(i.Text, {
                                className: h.listItemText,
                                variant: "text-md/semibold",
                                children: _.SELECT_NAMES[e.type]
                            }), (0, s.jsx)(d.default, {
                                width: 20,
                                height: 20,
                                className: h.listItemArrow
                            })]
                        }, e.type))
                    })]
                })
            }

            function C(e) {
                let {
                    request: t,
                    finish: n,
                    setSlide: a,
                    onClose: r
                } = e, [d, _] = o.useState(!1), [h, N] = o.useState(null), {
                    challenge: C
                } = t.methods.find(e => "webauthn" === e.type), m = async () => {
                    _(!0), N(null);
                    let e = u.isPlatformEmbedded && E.default.supportsFeature(p.NativeFeatures.WEBAUTHN) ? E.default.webAuthnAuthenticate(C) : l.get(JSON.parse(C)).then(e => JSON.stringify(e));
                    try {
                        let t = await e;
                        await n({
                            mfaType: "webauthn",
                            data: t
                        })
                    } catch (e) {
                        c.default.captureException(e), N(f.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR)
                    } finally {
                        _(!1)
                    }
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(S, {
                        onClose: r
                    }), (0, s.jsxs)(A, {
                        children: [(0, s.jsx)(i.Button, {
                            submitting: d,
                            onClick: m,
                            children: f.default.Messages.MFA_V2_WEBAUTHN_CTA
                        }), (0, s.jsx)(O, {
                            error: h
                        })]
                    }), (0, s.jsx)(I, {
                        request: t,
                        setSlide: a
                    })]
                })
            }

            function m(e) {
                let {
                    request: t,
                    finish: n,
                    setSlide: l,
                    onClose: a,
                    isSlideReady: r
                } = e, [d, u] = o.useState(!1), [c, E] = o.useState(null), [_, p] = o.useState(""), h = o.useRef(null), N = f.default.Messages.TWO_FA_ENTER_BACKUP_LABEL, C = f.default.Messages.TWO_FA_BACKUP_CODE, m = o.useCallback(e => {
                    p(e), E(null)
                }, [p, E]);
                return o.useEffect(() => {
                    if (r) {
                        var e;
                        null === (e = h.current) || void 0 === e || e.focus()
                    }
                }, [r]), (0, s.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(), u(!0), n({
                            mfaType: "backup",
                            data: _.replace(/-/g, "")
                        }).catch(e => {
                            var t, n;
                            E(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        }).finally(() => {
                            u(!1)
                        })
                    },
                    children: [(0, s.jsx)(S, {
                        onClose: a
                    }), (0, s.jsx)(A, {
                        children: (0, s.jsxs)(i.FormItem, {
                            title: N,
                            children: [(0, s.jsx)(i.TextInput, {
                                inputRef: h,
                                onChange: m,
                                placeholder: C,
                                maxLength: 9,
                                minLength: 8,
                                value: _,
                                spellCheck: "false",
                                disabled: d
                            }), (0, s.jsx)(O, {
                                error: c
                            })]
                        })
                    }), (0, s.jsx)(I, {
                        request: t,
                        setSlide: l,
                        showConfirm: !0,
                        disabled: _.length < 8,
                        submitting: d
                    })]
                })
            }

            function T(e) {
                let {
                    request: t,
                    finish: n,
                    setSlide: l,
                    onClose: a,
                    isSlideReady: r
                } = e, [d, u] = o.useState(!1), [c, E] = o.useState(null), [_, p] = o.useState(""), h = o.useRef(null);
                return o.useEffect(() => {
                    if (r) {
                        var e;
                        null === (e = h.current) || void 0 === e || e.focus()
                    }
                }, [r]), (0, s.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(), u(!0), n({
                            mfaType: "totp",
                            data: _
                        }).catch(e => {
                            var t, n;
                            E(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        }).finally(() => {
                            u(!1)
                        })
                    },
                    children: [(0, s.jsx)(S, {
                        onClose: a
                    }), (0, s.jsx)(A, {
                        children: (0, s.jsxs)(i.FormItem, {
                            title: f.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                            children: [(0, s.jsx)(i.TextInput, {
                                inputRef: h,
                                onChange: p,
                                placeholder: f.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                                maxLength: 6,
                                minLength: 6,
                                value: _,
                                autoComplete: "one-time-code",
                                spellCheck: "false",
                                disabled: d
                            }), (0, s.jsx)(O, {
                                error: c
                            })]
                        })
                    }), (0, s.jsx)(I, {
                        request: t,
                        setSlide: l,
                        showConfirm: !0,
                        disabled: 0 === _.length,
                        submitting: d
                    })]
                })
            }

            function R(e) {
                let {
                    request: t,
                    finish: n,
                    setSlide: l,
                    onClose: r,
                    isSlideReady: d
                } = e, [u, c] = o.useState(!1), [E, _] = o.useState(null), [N, C] = o.useState(!1), [m, T] = o.useState(null), [R, v] = o.useState(""), y = o.useRef(null);
                o.useEffect(() => {
                    c(!0), a.default.post({
                        url: p.Endpoints.LOGIN_SMS_SEND,
                        body: {
                            ticket: t.ticket
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        _(e.body.phone)
                    }).catch(e => {
                        var t;
                        T(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
                    }).finally(() => {
                        c(!1)
                    })
                }, [t.ticket]), o.useEffect(() => {
                    if (d) {
                        var e;
                        null === (e = y.current) || void 0 === e || e.focus()
                    }
                }, [d]);
                let g = null == E ? f.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : f.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
                    phoneNumber: E
                });
                return (0, s.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(), C(!0), n({
                            mfaType: "sms",
                            data: R
                        }).catch(e => {
                            var t, n;
                            T(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        }).finally(() => {
                            C(!1)
                        })
                    },
                    children: [(0, s.jsx)(S, {
                        subtitle: g,
                        onClose: r
                    }), (0, s.jsx)(A, {
                        children: (0, s.jsxs)(i.FormItem, {
                            title: f.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                            children: [(0, s.jsxs)("div", {
                                className: h.smsInputContainer,
                                children: [(0, s.jsx)(i.TextInput, {
                                    className: h.smsInput,
                                    inputRef: y,
                                    onChange: v,
                                    placeholder: f.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                                    maxLength: 10,
                                    value: R,
                                    autoComplete: "one-time-code",
                                    spellCheck: "false",
                                    disabled: N
                                }), (0, s.jsx)(i.Button, {
                                    size: i.Button.Sizes.MEDIUM,
                                    submitting: u,
                                    onClick: () => {
                                        a.default.post({
                                            url: p.Endpoints.LOGIN_SMS_SEND,
                                            body: {
                                                ticket: t.ticket
                                            },
                                            oldFormErrors: !0
                                        }).then(e => {
                                            _(e.body.phone)
                                        }).catch(e => {
                                            var t;
                                            T(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
                                        })
                                    },
                                    children: f.default.Messages.MFA_SMS_RESEND
                                })]
                            }), (0, s.jsx)(O, {
                                error: m
                            })]
                        })
                    }), (0, s.jsx)(I, {
                        request: t,
                        setSlide: l,
                        showConfirm: !0,
                        disabled: 0 === R.length,
                        submitting: N
                    })]
                })
            }

            function v(e) {
                let {
                    request: t,
                    finish: n,
                    setSlide: l,
                    onClose: a,
                    isSlideReady: r
                } = e, [d, u] = o.useState(!1), [c, E] = o.useState(null), [_, p] = o.useState(""), h = o.useRef(null);
                return o.useEffect(() => {
                    if (r) {
                        var e;
                        null === (e = h.current) || void 0 === e || e.focus()
                    }
                }, [r]), (0, s.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(), u(!0), n({
                            mfaType: "password",
                            data: _
                        }).catch(e => {
                            var t, n;
                            E(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        }).finally(() => {
                            u(!1)
                        })
                    },
                    children: [(0, s.jsx)(S, {
                        onClose: a
                    }), (0, s.jsx)(A, {
                        children: (0, s.jsxs)(i.FormItem, {
                            title: f.default.Messages.FORM_LABEL_PASSWORD,
                            children: [(0, s.jsx)(i.TextInput, {
                                inputRef: h,
                                onChange: p,
                                value: _,
                                type: "password",
                                autoComplete: "password",
                                spellCheck: "false",
                                disabled: d
                            }), (0, s.jsx)(O, {
                                error: c
                            })]
                        })
                    }), (0, s.jsx)(I, {
                        request: t,
                        setSlide: l,
                        showConfirm: !0,
                        disabled: 0 === _.length,
                        submitting: d
                    })]
                })
            }

            function y(e) {
                let {
                    transitionState: t,
                    request: n,
                    finish: o,
                    onClose: l
                } = e;
                return (0, s.jsx)(i.ModalRoot, {
                    transitionState: t,
                    size: i.ModalSize.SMALL,
                    "aria-label": f.default.Messages.MFA_V2_HEADER,
                    children: (0, s.jsx)(g, {
                        request: n,
                        mfaFinish: o,
                        onClose: l,
                        onEarlyClose: l
                    })
                })
            }

            function g(e) {
                var t, n;
                let {
                    request: l,
                    mfaFinish: a,
                    onEarlyClose: r,
                    onClose: d,
                    width: u = 440
                } = e, [c, E] = o.useState(null !== (n = null === (t = l.methods[0]) || void 0 === t ? void 0 : t.type) && void 0 !== n ? n : "select"), [_, p] = o.useState(c), f = async e => {
                    let {
                        mfaType: t,
                        data: n
                    } = e;
                    await a({
                        mfaType: t,
                        data: n,
                        ticket: l.ticket
                    }), null != d && d()
                }, h = {
                    request: l,
                    finish: f,
                    setSlide: E,
                    onClose: r
                };
                return (0, s.jsxs)(i.Slides, {
                    activeSlide: c,
                    width: u,
                    onSlideReady: p,
                    children: [(0, s.jsx)(i.Slide, {
                        id: "select",
                        children: (0, s.jsx)(N, {
                            ...h
                        })
                    }), (0, s.jsx)(i.Slide, {
                        id: "webauthn",
                        children: (0, s.jsx)(C, {
                            ...h
                        })
                    }), (0, s.jsx)(i.Slide, {
                        id: "totp",
                        children: (0, s.jsx)(T, {
                            ...h,
                            isSlideReady: "totp" === _
                        })
                    }), (0, s.jsx)(i.Slide, {
                        id: "sms",
                        children: (0, s.jsx)(R, {
                            ...h,
                            isSlideReady: "sms" === _
                        })
                    }), (0, s.jsx)(i.Slide, {
                        id: "backup",
                        children: (0, s.jsx)(m, {
                            ...h,
                            isSlideReady: "backup" === _
                        })
                    }), (0, s.jsx)(i.Slide, {
                        id: "password",
                        children: (0, s.jsx)(v, {
                            ...h,
                            isSlideReady: "password" === _
                        })
                    })]
                })
            }

            function M(e, t, n) {
                (0, i.openModal)(n => (0, s.jsx)(y, {
                    finish: t,
                    request: e,
                    ...n
                }), {
                    onCloseCallback: () => {
                        n(Error(f.default.Messages.MFA_V2_CANCELED))
                    }
                })
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return a
                },
                getDevicePushProvider: function() {
                    return i
                }
            });
            var s, o, l = n("773336");
            let a = null;

            function i() {
                return (0, l.isAndroid)(), null
            }(s = o || (o = {})).REMINDER = "reminder", s.TOP_MESSAGE_PUSH = "top_messages_push", s.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        350522: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("446674"),
                o = n("913144");
            let l = !1,
                a = !1,
                i = {},
                r = null;
            class d extends s.default.Store {
                hasConsented(e) {
                    return null != i[e] && i[e].consented
                }
                get fetchedConsents() {
                    return l
                }
                get receivedConsentsInConnectionOpen() {
                    return a
                }
                getAuthenticationConsentRequired() {
                    return r
                }
            }
            d.displayName = "ConsentStore";
            var u = new d(o.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        consents: t
                    } = e;
                    null != t && (i = {
                        ...i,
                        ...t
                    }, a = !0)
                },
                UPDATE_CONSENTS: function(e) {
                    let {
                        consents: t
                    } = e;
                    i = {
                        ...t
                    }, l = !0
                },
                SET_CONSENT_REQUIRED: function(e) {
                    r = e.consentRequired
                },
                LOGOUT: function() {
                    r = null
                }
            })
        },
        91731: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("206230"),
                o = n("49111");

            function l(e, t, n) {
                var l, a, i, r, d, u, c, E;
                let _ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    key: null !== (a = null !== (l = t.key) && void 0 !== l ? l : _) && void 0 !== a ? a : "modal",
                    modal: e,
                    animation: null !== (i = t.animation) && void 0 !== i ? i : s.default.useReducedMotion ? o.ModalAnimation.FADE : o.ModalAnimation.SLIDE_UP,
                    shouldPersistUnderModals: null !== (r = t.shouldPersistUnderModals) && void 0 !== r && r,
                    props: n,
                    backdropStyle: null !== (d = t.backdropStyle) && void 0 !== d ? d : null,
                    backdropInstant: null !== (u = t.backdropInstant) && void 0 !== u && u,
                    disableAnimation: null !== (c = t.disableAnimation) && void 0 !== c && c,
                    closable: "boolean" != typeof t.closable || t.closable,
                    label: null !== (E = t.label) && void 0 !== E ? E : "",
                    callbacks: {}
                }
            }
        }
    }
]);
//# sourceMappingURL=67079.912803f13064d4c3677e.js.map