(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["84009"], {
        142226: function(e, t, l) {
            "use strict";
            e.exports = l.p + "b92378012a6b664c01b6.png"
        },
        449236: function(e, t, l) {
            "use strict";
            e.exports = l.p + "904091516c5e88480f47.png"
        },
        290938: function(e, t, l) {
            "use strict";
            e.exports = l.p + "7c78ad13c2344f7f4089.svg"
        },
        229806: function(e, t, l) {
            "use strict";
            e.exports = l.p + "6cc337af6e577789bc25.svg"
        },
        654125: function(e, t, l) {
            "use strict";
            e.exports = l.p + "b45b4145db9ac11e2381.svg"
        },
        108647: function(e, t, l) {
            "use strict";
            e.exports = l.p + "ca2118f52077f527edd7.svg"
        },
        943005: function(e, t, l) {
            "use strict";
            e.exports = l.p + "b02c644f3c87d8b5aea8.svg"
        },
        52850: function(e, t, l) {
            "use strict";
            e.exports = l.p + "208304c93f6df4a80167.svg"
        },
        433562: function(e, t, l) {
            "use strict";
            e.exports = l.p + "da1259123a8e2aec4171.svg"
        },
        398664: function(e, t, l) {
            "use strict";
            e.exports = l.p + "9731e8deb0c7ac5dfb42.png"
        },
        107680: function(e, t, l) {
            "use strict";
            e.exports = l.p + "7dfcf19766f513deb774.svg"
        },
        379539: function(e, t, l) {
            "use strict";
            e.exports = l.p + "5b3b95e31a98398af233.svg"
        },
        714073: function(e, t, l) {
            "use strict";
            e.exports = l.p + "732cb12e9926a0bc2825.svg"
        },
        980923: function(e, t, l) {
            "use strict";
            e.exports = l.p + "d8c856ae3a2c83ee0c7a.svg"
        },
        779585: function(e, t, l) {
            "use strict";
            e.exports = l.p + "682143e8dba77202b120.svg"
        },
        900143: function(e, t, l) {
            "use strict";
            e.exports = l.p + "24487d7e023dfba7911f.svg"
        },
        923337: function(e, t, l) {
            "use strict";
            e.exports = l.p + "305099d8b0fc4d8b8c67.svg"
        },
        890674: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("872717"),
                s = l("49111"),
                a = {
                    updateNote(e, t) {
                        n.default.put({
                            url: s.Endpoints.NOTE(e),
                            body: {
                                note: t
                            },
                            oldFormErrors: !0
                        })
                    }
                }
        },
        581583: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                MemberRole: function() {
                    return w
                },
                default: function() {
                    return V
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("414456"),
                i = l.n(a),
                r = l("627445"),
                o = l.n(r),
                u = l("748820"),
                d = l("974667"),
                c = l("509043"),
                f = l("446674"),
                m = l("669491"),
                E = l("77078"),
                p = l("272030"),
                T = l("851387"),
                h = l("737960"),
                _ = l("206230"),
                I = l("339023"),
                S = l("405645"),
                g = l("592407"),
                A = l("26989"),
                C = l("957255"),
                v = l("697218"),
                N = l("145131"),
                M = l("476765"),
                y = l("945330"),
                O = l("907566"),
                R = l("151185"),
                x = l("483093"),
                L = l("991170"),
                P = l("487311"),
                b = l("49111"),
                D = l("782340"),
                j = l("618600");
            let U = () => Promise.resolve();

            function F(e) {
                let {
                    userRoles: t,
                    position: l,
                    ...s
                } = e, a = (0, M.useUID)();
                return (0, n.jsxs)(E.Dialog, {
                    className: i(j.overflowRolesPopout, {
                        [j.popoutBottom]: "bottom" === l,
                        [j.popoutTop]: "top" === l
                    }),
                    "aria-labelledby": a,
                    children: [(0, n.jsx)("div", {
                        className: j.overflowRolesPopoutArrowWrapper,
                        children: (0, n.jsx)("div", {
                            className: j.overflowRolesPopoutArrow
                        })
                    }), (0, n.jsxs)(N.default, {
                        className: j.overflowRolesPopoutHeader,
                        align: N.default.Align.CENTER,
                        children: [(0, n.jsx)(O.default, {
                            color: m.default.unsafe_rawColors.PRIMARY_400.css,
                            className: j.overflowRolesPopoutHeaderIcon
                        }), (0, n.jsx)("div", {
                            className: j.overflowRolesPopoutHeaderText,
                            id: a,
                            children: D.default.Messages.ROLES_LIST.format({
                                numRoles: t.length
                            })
                        })]
                    }), (0, n.jsx)(k, {
                        ...s,
                        wrap: !0,
                        userRoles: t
                    })]
                })
            }
            let w = s.forwardRef(function(e, t) {
                var a, r, o;
                let u;
                let {
                    canRemove: T,
                    className: h,
                    role: g,
                    onRemove: A,
                    guildId: C,
                    disableBorderColor: v,
                    onMouseDown: N
                } = e, {
                    tabIndex: M,
                    ...O
                } = (0, d.useListItem)(g.id), R = (0, S.useRoleIcon)({
                    roleId: g.id,
                    size: 16,
                    guildId: C
                }), L = (0, f.useStateFromStores)([_.default], () => _.default.roleStyle), P = (null === (a = g.tags) || void 0 === a ? void 0 : a.guild_connections) === null, b = s.useCallback(e => {
                    (0, p.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("443070").then(l.bind(l, "443070"));
                        return t => (0, n.jsx)(e, {
                            ...t,
                            id: g.id,
                            label: D.default.Messages.COPY_ID_ROLE
                        })
                    })
                }, [g.id]), U = (0, E.useToken)(m.default.unsafe_rawColors.PRIMARY_300).hsl(), F = null !== (r = g.colorString) && void 0 !== r ? r : U, w = null !== (o = (0, c.hex2rgb)(F, .6)) && void 0 !== o ? o : void 0, G = m.default.unsafe_rawColors.WHITE_500.css, B = (0, c.hex2int)(F);
                null != B && .3 > (0, c.getDarkness)(B) && (G = m.default.unsafe_rawColors.PRIMARY_630.css), u = P ? (0, n.jsx)(I.default, {
                    className: j.roleFlowerStar,
                    iconClassName: T ? j.roleVerifiedIcon : void 0,
                    color: F,
                    size: 14
                }) : "dot" === L ? (0, n.jsx)(E.RoleDot, {
                    className: j.roleDot,
                    color: F,
                    background: !1,
                    tooltip: !1
                }) : (0, n.jsx)(E.RoleCircle, {
                    color: F
                });
                let k = s.useMemo(() => {
                    var t;
                    return {
                        borderColor: v ? void 0 : w,
                        ...null !== (t = e.style) && void 0 !== t ? t : {}
                    }
                }, [w, v, e.style]);
                return (0, n.jsx)(E.FocusRing, {
                    children: (0, n.jsxs)("div", {
                        ref: t,
                        className: i(j.role, h),
                        style: k,
                        onContextMenu: b,
                        onMouseDown: N,
                        "aria-label": g.name,
                        tabIndex: M,
                        ...O,
                        children: [(0, n.jsxs)(E.Clickable, {
                            className: j.roleRemoveButton,
                            onClick: T ? A : void 0,
                            tabIndex: T ? M : -1,
                            focusProps: {
                                focusClassName: j.roleRemoveIconFocused
                            },
                            "aria-hidden": !T,
                            "aria-label": D.default.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
                                roleName: g.name
                            }),
                            children: [u, T ? (0, n.jsx)(y.default, {
                                color: G,
                                className: j.roleRemoveIcon,
                                "aria-hidden": !0
                            }) : null]
                        }), null != R ? (0, n.jsx)(x.default, {
                            className: j.roleIcon,
                            ...R,
                            enableTooltip: !1
                        }) : null, (0, n.jsx)("div", {
                            "aria-hidden": !0,
                            className: j.roleName,
                            children: (0, n.jsx)(E.Text, {
                                variant: "text-xs/medium",
                                className: j.roleNameOverflow,
                                children: g.name
                            })
                        })]
                    })
                })
            });

            function G(e) {
                let {
                    user: t,
                    numRolesHidden: l,
                    roleClassName: s
                } = e, a = (0, d.useListItem)("overflow-more-roles-".concat(t.id));
                return (0, n.jsx)(E.Popout, {
                    renderPopout: t => {
                        let {
                            position: l
                        } = t;
                        return (0, n.jsx)(F, {
                            ...e,
                            position: null != l ? l : "top"
                        })
                    },
                    position: "top",
                    align: "center",
                    children: e => (0, n.jsx)(E.FocusRing, {
                        children: (0, n.jsx)("button", {
                            ...e,
                            className: i(j.overflowButton, s),
                            ...a,
                            children: "+".concat(l)
                        })
                    })
                })
            }

            function B(e) {
                let {
                    guild: t,
                    user: l,
                    handleAddRole: s,
                    roleClassName: a
                } = e, r = (0, d.useListItem)("overflow-add-roles-".concat(l.id)), o = (0, f.useStateFromStores)([_.default], () => _.default.roleStyle), u = C.default.getHighestRole(t), c = A.default.getMember(t.id, l.id), m = e => e.id !== t.id && !e.managed && C.default.isRoleHigher(t, u, e) && (null == c || -1 === c.roles.indexOf(e.id));
                return (0, n.jsx)(E.Popout, {
                    renderPopout: e => {
                        let {
                            closePopout: l
                        } = e;
                        return (0, n.jsx)(P.default, {
                            guild: t,
                            roleStyle: o,
                            roleFilter: m,
                            onSelect: s,
                            onClose: l
                        })
                    },
                    position: "bottom",
                    align: "center",
                    children: e => (0, n.jsx)(E.FocusRing, {
                        children: (0, n.jsx)("button", {
                            ...e,
                            className: i(j.addButton, a),
                            "aria-label": D.default.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
                            type: "button",
                            ...r,
                            children: (0, n.jsx)(R.default, {
                                className: j.addButtonIcon,
                                "aria-hidden": !0
                            })
                        })
                    })
                })
            }

            function k(e) {
                let t;
                let {
                    user: l,
                    guild: a,
                    userRoles: r,
                    wrap: c = !0,
                    width: f,
                    className: m,
                    readOnly: E,
                    roleClassName: p,
                    disableBorderColor: h
                } = e, _ = s.useRef({}), I = s.useCallback(e => {
                    var t;
                    let n = r.filter(t => t !== e.id);
                    (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? T.default.unassignGuildRoleConnection(a.id, e.id) : g.default.updateMemberRoles(a.id, l.id, n, [], [e.id])
                }, [r, a.id, l.id]), S = s.useCallback(e => {
                    let t = r; - 1 === t.indexOf(e) && (t = t.concat([e])), g.default.updateMemberRoles(a.id, l.id, t, [e], [])
                }, [r, a.id, l.id]), [A, N] = s.useState(null), M = s.useMemo(() => {
                    let e = Object.values(a.roles).filter(e => r.includes(e.id)).sort((e, t) => {
                        var l, n;
                        let s = (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) !== null,
                            a = (null === (n = t.tags) || void 0 === n ? void 0 : n.guild_connections) !== null;
                        return s && !a ? 1 : !s && a ? -1 : 0
                    });
                    return null != A ? e.slice(0, A) : e
                }, [a.roles, A, r]), y = r.length - M.length;
                s.useLayoutEffect(() => {
                    if (c) return;
                    if ("number" != typeof f) throw Error("Unexpected null width");
                    let e = 0,
                        t = 0,
                        l = f - 30 - 4;
                    for (let n = 0; n < M.length; n++) {
                        let s = M[n],
                            a = _.current[s.id];
                        if (null == a) continue;
                        let i = a.offsetWidth;
                        if ((t += i + 4) > l) break;
                        e++
                    }
                    N(t => e < M.length ? e : t)
                }, [c, f, M]);
                let O = v.default.getCurrentUser();
                o(null != O, "MemberRolesList: currentUser cannot be undefined");
                let R = !E && C.default.can(b.Permissions.MANAGE_ROLES, a),
                    x = L.default.getHighestRole(a, O.id),
                    P = s.useMemo(() => "roles-".concat((0, u.v4)()), []),
                    F = (0, d.default)({
                        id: P,
                        isEnabled: !0,
                        scrollToStart: U,
                        scrollToEnd: U,
                        wrap: !0
                    }),
                    k = M.map(e => {
                        var t;
                        return (0, n.jsx)(w, {
                            className: p,
                            role: e,
                            canRemove: R && L.default.isRoleHigher(a, O.id, x, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && l.id === O.id,
                            onRemove: () => I(e),
                            ref: t => {
                                var l, n;
                                return l = e.id, void(null != (n = t) ? _.current[l] = n : delete _.current[l])
                            },
                            guildId: a.id,
                            disableBorderColor: h
                        }, e.id)
                    });
                return null != A && 0 !== y ? t = (0, n.jsx)(G, {
                    ...e,
                    numRolesHidden: y
                }) : R && (t = (0, n.jsx)(B, {
                    ...e,
                    handleAddRole: S
                })), (0, n.jsx)(d.ListNavigatorProvider, {
                    navigator: F,
                    children: (0, n.jsx)(d.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: l,
                                ...s
                            } = e;
                            return (0, n.jsxs)("div", {
                                className: i(j.root, m),
                                "aria-label": D.default.Messages.ROLES_LIST.format({
                                    numRoles: r.length
                                }),
                                ref: l,
                                ...s,
                                children: [k, t]
                            })
                        }
                    })
                })
            }
            let Y = (0, h.default)(k);

            function V(e) {
                return (0, f.useStateFromStores)([C.default], () => {
                    var t;
                    return C.default.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
                }), !1 === e.wrap ? (0, n.jsx)(Y, {
                    ...e
                }) : (0, n.jsx)(k, {
                    ...e
                })
            }
        },
        308289: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("77078"),
                i = l("390236"),
                r = s.memo(function(e) {
                    var t, l, r, o;
                    let {
                        user: u,
                        size: d = a.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": f = !1,
                        ...m
                    } = e, E = s.useContext(i.default);
                    return (0, n.jsx)(a.Avatar, {
                        src: (t = u, l = (0, a.getAvatarSize)(d), r = c, o = E, t.getAvatarURL(o, l, r)),
                        size: d,
                        "aria-label": f ? void 0 : u.username,
                        "aria-hidden": f,
                        ...m
                    })
                })
        },
        910330: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("817736"),
                i = l.n(a),
                r = l("446674"),
                o = l("77078"),
                u = l("890674"),
                d = l("349649"),
                c = l("102985"),
                f = l("49111"),
                m = l("782340"),
                E = l("98325");
            class p extends s.PureComponent {
                componentDidMount() {
                    if (this.props.autoFocus && !this.props.hideNote) {
                        let e = i.findDOMNode(this.noteRef.current);
                        null != e && null != e.selectionStart && (e.focus(), e.selectionStart = e.selectionEnd = e.value.length)
                    }
                }
                render() {
                    let {
                        className: e,
                        loading: t,
                        note: l,
                        hideNote: s
                    } = this.props;
                    return s ? null : (0, n.jsx)("div", {
                        className: e,
                        children: (0, n.jsx)(o.TextAreaAutosize, {
                            ref: this.noteRef,
                            className: E.textarea,
                            disabled: t,
                            placeholder: t ? m.default.Messages.LOADING_NOTE : m.default.Messages.NOTE_PLACEHOLDER,
                            "aria-label": m.default.Messages.NOTE,
                            onBlur: this.handleBlur,
                            onKeyPress: this.handleKeyPress,
                            defaultValue: null != l ? l : void 0,
                            maxLength: f.NOTE_MAX_LENGTH
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.noteRef = s.createRef(), this.handleBlur = e => {
                        let t = e.currentTarget.value,
                            {
                                note: l
                            } = this.props;
                        l !== t && u.default.updateNote(this.props.userId, t)
                    }, this.handleKeyPress = e => {
                        if (13 === e.which) {
                            if (e.shiftKey) {
                                var t;
                                (null !== (t = e.currentTarget.value.match(/\n/g)) && void 0 !== t ? t : []).length >= 5 && e.preventDefault()
                            } else e.preventDefault(), e.currentTarget.blur()
                        } else e.which === f.KeyboardKeys.SPACE && e.stopPropagation()
                    }
                }
            }

            function T(e) {
                let t = (0, r.useStateFromStores)([c.default], () => c.default.hidePersonalInformation),
                    l = (0, d.default)(e.userId);
                return (0, n.jsx)(p, {
                    ...e,
                    ...l,
                    hideNote: t
                })
            }
            p.defaultProps = {
                autoFocus: !1
            }
        },
        36341: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("414456"),
                i = l.n(a),
                r = l("627445"),
                o = l.n(r),
                u = l("446674"),
                d = l("77078"),
                c = l("450911"),
                f = l("54239"),
                m = l("819689"),
                E = l("850391"),
                p = l("884351"),
                T = l("42203"),
                h = l("27618"),
                _ = l("158998"),
                I = l("718422"),
                S = l("49111"),
                g = l("782340"),
                A = l("22531");

            function C(e) {
                let {
                    user: t,
                    autoFocus: l = !1,
                    onClose: a,
                    className: r,
                    inputClassName: C
                } = e, v = s.useRef(null), N = (0, u.useStateFromStores)([h.default], () => h.default.isBlocked(t.id)), M = s.useCallback(e => {
                    if ("Enter" === e.key) {
                        e.preventDefault(), o(null != v.current, "Keypress on Input when not mounted");
                        let l = v.current.value.trim();
                        return (0, I.applyChatRestrictions)({
                            type: E.ChatInputTypes.NORMAL,
                            content: l,
                            channel: null
                        }).then(e => {
                            let {
                                valid: n
                            } = e;
                            n && (c.default.openPrivateChannel(t.id, !1, !1, "Quick Message Input").then(e => {
                                let t = T.default.getChannel(e);
                                o(null != t, "Newly created PrivateChannel is null"), m.default.sendMessage(t.id, p.default.parse(t, l)), (0, f.popLayer)()
                            }), null == a || a())
                        }), !0
                    }
                    e.which === S.KeyboardKeys.SPACE && e.stopPropagation()
                }, [a, t]), y = N ? g.default.Messages.QUICK_DM_BLOCKED : g.default.Messages.QUICK_DM_USER.format({
                    name: _.default.getName(t)
                });
                return (0, n.jsx)(d.TextInput, {
                    className: r,
                    inputClassName: i(C, A.input),
                    inputRef: v,
                    autoFocus: l,
                    placeholder: y,
                    "aria-label": y,
                    onKeyPress: M,
                    disabled: N
                })
            }
        },
        463848: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                UserActivityTypes: function() {
                    return S
                },
                default: function() {
                    return g
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("446674"),
                a = l("77078"),
                i = l("871388"),
                r = l("152311"),
                o = l("532602"),
                u = l("769791"),
                d = l("373469"),
                c = l("42203"),
                f = l("546463"),
                m = l("305961"),
                E = l("800762"),
                p = l("313873"),
                T = l("474293"),
                h = l("49111"),
                _ = l("804354");

            function I(e) {
                let {
                    type: t,
                    source: l,
                    activity: s,
                    applicationStream: i,
                    user: u,
                    guildId: d,
                    channelId: c,
                    onAction: f,
                    isEmbedded: m = (0, r.default)(s),
                    actionColor: E
                } = e;
                return (0, n.jsx)(o.default, {
                    className: (0, T.getClass)(_, "actions", t),
                    type: t,
                    source: l,
                    activity: s,
                    applicationStream: i,
                    user: u,
                    guildId: d,
                    look: a.Button.Looks.FILLED,
                    color: null != E ? E : a.Button.Colors.PRIMARY,
                    channelId: c,
                    onAction: f,
                    isEmbedded: m
                })
            }
            let S = p.default.Types;
            var g = function(e) {
                let {
                    activity: t,
                    user: l,
                    useStoreStream: a = !0,
                    showActions: r = !0,
                    hideHeader: o = !1,
                    ...T
                } = e, _ = (0, s.useStateFromStores)([d.default], () => a ? d.default.getAnyStreamForUser(l.id) : null), S = (0, s.useStateFromStores)([m.default, E.default, c.default], () => {
                    var e, n;
                    return (0, i.default)(t, h.ActivityFlags.EMBEDDED) ? m.default.getGuild(null === (e = c.default.getChannel(null === (n = E.default.getVoiceStateForSession(l.id, null == t ? void 0 : t.session_id)) || void 0 === n ? void 0 : n.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null
                }), g = (0, s.useStateFromStores)([m.default], () => null != _ ? m.default.getGuild(_.guildId) : null), A = (0, s.useStateFromStores)([f.default], () => {
                    if (null != t) return null != t.application_id ? f.default.getGame(t.application_id) : f.default.getGameByName(t.name);
                    return null
                });
                return (0, n.jsx)(p.default, {
                    ...T,
                    activity: t,
                    user: l,
                    application: A,
                    hideHeader: o,
                    activityGuild: null != S ? S : g,
                    renderActions: r ? () => (0, n.jsx)(I, {
                        ...T,
                        applicationStream: _,
                        activity: t,
                        user: l
                    }) : null,
                    onOpenSpotifyTrack: u.openTrack,
                    onOpenSpotifyArtist: u.openArtist,
                    onOpenSpotifyAlbum: u.openAlbum
                })
            }
        },
        487311: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("448105"),
                a = l.n(s),
                i = l("917351"),
                r = l.n(i),
                o = l("509043"),
                u = l("77078"),
                d = l("49111"),
                c = l("782340"),
                f = l("558062"),
                m = function(e) {
                    var t, l;
                    let {
                        className: s,
                        guild: i,
                        roleStyle: m,
                        roleFilter: E,
                        onSelect: p,
                        onClose: T
                    } = e, h = e => r(i.roles).filter(E).filter(t => a(e.toLowerCase(), t.name.toLowerCase())).value();
                    return (0, n.jsx)(u.ComboboxPopout, {
                        className: s,
                        value: new Set,
                        onChange: p,
                        placeholder: c.default.Messages.ADD_ROLE_PLACEHOLDER,
                        "aria-label": c.default.Messages.ADD_ROLE_A11Y_LABEL,
                        onClose: T,
                        children: e => h(e).map(e => (0, n.jsxs)(u.ComboboxItem, {
                            value: e.id,
                            children: ["dot" === m ? (0, n.jsx)(u.RoleDot, {
                                className: f.popoutRoleDot,
                                color: null !== (t = e.colorString) && void 0 !== t ? t : (0, o.int2hex)(d.DEFAULT_ROLE_COLOR),
                                background: !1,
                                tooltip: !1
                            }) : (0, n.jsx)(u.RoleCircle, {
                                className: f.popoutRoleCircle,
                                color: null !== (l = e.colorString) && void 0 !== l ? l : (0, o.int2hex)(d.DEFAULT_ROLE_COLOR)
                            }), (0, n.jsx)(u.ComboboxItem.Label, {
                                children: e.name
                            })]
                        }, e.id))
                    })
                }
        },
        512330: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                TimeUnits: function() {
                    return r
                },
                getTimeAndUnit: function() {
                    return S
                },
                default: function() {
                    return g
                }
            });
            var n, s, a, i, r, o, u = l("37983"),
                d = l("884691"),
                c = l("917351"),
                f = l.n(c),
                m = l("862337"),
                E = l("782340");
            (n = i || (i = {})).ACTIVITY_FEED = "ACTIVITY_FEED", n.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW", n.USER_ACTIVITY = "USER_ACTIVITY", n.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED", n.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED", (s = r || (r = {})).NONE = "NONE", s.SECONDS = "SECONDS", s.MINUTES = "MINUTES", s.HOURS = "HOURS", s.DAYS = "DAYS", s.WEEKS = "WEEKS", s.MONTHS = "MONTHS", s.YEARS = "YEARS", (a = o || (o = {})).START = "START", a.END = "END", a.TIME = "TIME";
            let p = {
                    [r.NONE]: e => 0,
                    [r.SECONDS]: e => 60 * e,
                    [r.MINUTES]: e => e,
                    [r.HOURS]: e => e / 60,
                    [r.DAYS]: e => e / 60 / 24,
                    [r.WEEKS]: e => e / 60 / 24 / 7,
                    [r.MONTHS]: e => e / 60 / 24 / 31,
                    [r.YEARS]: e => e / 60 / 24 / 365
                },
                T = [{
                    unit: r.NONE,
                    max: 0
                }, {
                    unit: r.SECONDS,
                    max: 1
                }, {
                    unit: r.MINUTES,
                    max: 60
                }, {
                    unit: r.HOURS,
                    max: 1440
                }, {
                    unit: r.DAYS,
                    max: 44640
                }, {
                    unit: r.WEEKS,
                    max: 40320
                }, {
                    unit: r.MONTHS,
                    max: 525600
                }, {
                    unit: r.YEARS,
                    max: 1 / 0
                }],
                h = e => (t, l) => null == l ? "" : e().format({
                    time: t,
                    ...l
                }),
                _ = {
                    [i.ACTIVITY_FEED]: {
                        [o.START]: {
                            [r.SECONDS]: () => E.default.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                            [r.MINUTES]: e => E.default.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({
                                time: e
                            }),
                            [r.HOURS]: e => E.default.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({
                                time: e
                            }),
                            [r.DAYS]: e => E.default.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({
                                time: e
                            })
                        },
                        [o.END]: {
                            [r.SECONDS]: () => E.default.Messages.GAME_FEED_USER_PLAYING_JUST_ENDED,
                            [r.MINUTES]: e => E.default.Messages.GAME_FEED_USER_PLAYED_MINUTES_AGO.format({
                                time: e
                            }),
                            [r.HOURS]: e => E.default.Messages.GAME_FEED_USER_PLAYED_HOURS_AGO.format({
                                time: e
                            }),
                            [r.DAYS]: e => E.default.Messages.GAME_FEED_USER_PLAYED_DAYS_AGO.format({
                                time: e
                            }),
                            [r.WEEKS]: e => E.default.Messages.GAME_FEED_USER_PLAYED_WEEKS_AGO.format({
                                time: e
                            }),
                            [r.MONTHS]: e => E.default.Messages.GAME_FEED_USER_PLAYED_MONTHS_AGO.format({
                                time: e
                            }),
                            [r.YEARS]: e => E.default.Messages.GAME_FEED_USER_PLAYED_YEARS_AGO.format({
                                time: e
                            })
                        }
                    },
                    [i.ACTIVITY_FEED_NEW]: {
                        [o.START]: {
                            [r.SECONDS]: h(() => E.default.Messages.ACTIVITY_FEED_USER_PLAYING_JUST_STARTED),
                            [r.MINUTES]: h(() => E.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_MINUTES),
                            [r.HOURS]: h(() => E.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_HOURS),
                            [r.DAYS]: h(() => E.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_DAYS)
                        },
                        [o.END]: {
                            [r.SECONDS]: e => E.default.Messages.DURATION_SECONDS_AGO.format({
                                seconds: e
                            }),
                            [r.MINUTES]: e => E.default.Messages.DURATION_MINUTES_AGO.format({
                                minutes: e
                            }),
                            [r.HOURS]: e => E.default.Messages.DURATION_HOURS_AGO.format({
                                hours: e
                            }),
                            [r.DAYS]: e => E.default.Messages.DURATION_DAYS_AGO.format({
                                days: e
                            })
                        }
                    },
                    [i.USER_ACTIVITY]: {
                        [o.START]: {
                            [r.SECONDS]: () => E.default.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                            [r.MINUTES]: function(e, t) {
                                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return l ? E.default.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({
                                    time: e
                                }) : E.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_MINUTES.format({
                                    time: e
                                })
                            },
                            [r.HOURS]: function(e, t) {
                                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return l ? E.default.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({
                                    time: e
                                }) : E.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_HOURS.format({
                                    time: e
                                })
                            },
                            [r.DAYS]: function(e, t) {
                                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return l ? E.default.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({
                                    time: e
                                }) : E.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_DAYS.format({
                                    time: e
                                })
                            }
                        }
                    },
                    [i.GAME_LIBRARY_TIME_PLAYED]: {
                        [o.TIME]: {
                            [r.NONE]: () => E.default.Messages.GAME_LIBRARY_TIME_PLAYED_NONE,
                            [r.SECONDS]: e => E.default.Messages.GAME_LIBRARY_TIME_PLAYED_SECONDS.format({
                                time: e
                            }),
                            [r.MINUTES]: e => E.default.Messages.GAME_LIBRARY_TIME_PLAYED_MINUTES.format({
                                time: e
                            }),
                            [r.HOURS]: e => E.default.Messages.GAME_LIBRARY_TIME_PLAYED_HOURS.format({
                                time: e
                            })
                        }
                    },
                    [i.GAME_LIBRARY_LAST_PLAYED]: {
                        [o.END]: {
                            [r.NONE]: () => E.default.Messages.GAME_LIBRARY_LAST_PLAYED_NONE,
                            [r.SECONDS]: () => E.default.Messages.GAME_LIBRARY_LAST_PLAYED_JUST_NOW,
                            [r.MINUTES]: e => E.default.Messages.GAME_LIBRARY_LAST_PLAYED_MINUTES.format({
                                time: e
                            }),
                            [r.HOURS]: e => E.default.Messages.GAME_LIBRARY_LAST_PLAYED_HOURS.format({
                                time: e
                            }),
                            [r.DAYS]: e => E.default.Messages.GAME_LIBRARY_LAST_PLAYED_DAYS.format({
                                time: e
                            }),
                            [r.WEEKS]: e => E.default.Messages.GAME_LIBRARY_LAST_PLAYED_WEEKS.format({
                                time: e
                            }),
                            [r.MONTHS]: e => E.default.Messages.GAME_LIBRARY_LAST_PLAYED_MONTHS.format({
                                time: e
                            }),
                            [r.YEARS]: e => E.default.Messages.GAME_LIBRARY_LAST_PLAYED_YEARS.format({
                                time: e
                            })
                        }
                    }
                };

            function I(e, t) {
                let l = T.findIndex(t => {
                        let {
                            max: l,
                            unit: n
                        } = t;
                        return n === r.NONE && e === l || e < l
                    }),
                    n = f.findLast(T, e => {
                        let {
                            unit: l
                        } = e;
                        return t(l)
                    }, l);
                if (null != n) return n.unit;
                let s = T.find(e => {
                    let {
                        unit: l
                    } = e;
                    return t(l)
                });
                return null != s ? s.unit : null
            }

            function S(e, t) {
                let l = null != e ? I(e, e => t.includes(e)) : r.NONE,
                    n = null != l ? p[l] : null;
                return {
                    unit: l,
                    time: null != e && null != n ? Math.floor(n(e)) : null
                }
            }

            function g(e) {
                var t;
                return (t = class extends d.PureComponent {
                    componentDidMount() {
                        this.timer.start(1e4, this.update)
                    }
                    componentDidUpdate(e) {
                        let {
                            start: t,
                            end: l,
                            time: n
                        } = this.props;
                        (e.start !== t || e.end !== l || e.time !== n) && this.update()
                    }
                    componentWillUnmount() {
                        this.timer.stop()
                    }
                    getDiff() {
                        let {
                            start: e,
                            end: t,
                            time: l
                        } = this.props;
                        if (null != l) return l / 1e3 / 60;
                        let n = Date.now(),
                            s = 0;
                        return null != e ? s = n - e : null != t && (s = n - t), Math.abs(s) / 1e3 / 60
                    }
                    getTimeUnit(e, t, l) {
                        let n = I(e, e => (function(e, t, l) {
                            let n = _[l];
                            if (null != n) {
                                let l = n[t];
                                if (null != l) return null != l[e]
                            }
                            return !1
                        })(e, l, t));
                        if (null == n) throw Error("Could not get the time unit in PlayTime with time: ".concat(e, " for type: ").concat(l, " in location: ").concat(t));
                        return n
                    }
                    getType() {
                        let {
                            start: e,
                            end: t,
                            time: l
                        } = this.props;
                        if (null != e) return o.START;
                        if (null != t) return o.END;
                        if (null != l) return o.TIME;
                        return null
                    }
                    transformTime(e, t) {
                        return p[e](t)
                    }
                    render() {
                        let {
                            location: t,
                            messageProps: l,
                            isApplicationStreaming: n,
                            ...s
                        } = this.props, {
                            time: a
                        } = this.state, i = this.getType();
                        if (null == i) return null;
                        let r = this.getTimeUnit(a, t, i),
                            o = _[t][i];
                        if (null == o) return null;
                        let d = o[r],
                            c = Math.floor(this.transformTime(r, a));
                        return (0, u.jsx)(e, {
                            ...s,
                            children: null == d ? void 0 : d(c, l, n)
                        })
                    }
                    constructor(...e) {
                        super(...e), this.timer = new m.Interval, this.state = {
                            time: this.getDiff()
                        }, this.update = () => {
                            this.setState({
                                time: this.getDiff()
                            })
                        }
                    }
                }).Locations = i, t.Types = o, t
            }
        },
        832627: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("862337"),
                i = l("782340");

            function r(e) {
                return "".concat(e).length < 13 ? 1e3 * e : e
            }

            function o(e) {
                return class extends s.PureComponent {
                    componentDidMount() {
                        this._interval.start(1e3, () => this.setState(this.getUpdatedTime()))
                    }
                    componentWillUnmount() {
                        this._interval.stop()
                    }
                    componentDidUpdate(e) {
                        (e.timestamps.end !== this.props.timestamps.end || e.timestamps.start !== this.props.timestamps.start) && this.setState(this.getUpdatedTime())
                    }
                    getUpdatedTime() {
                        let {
                            timestamps: e
                        } = this.props, t = Date.now() / 1e3;
                        return null != e.end ? this.getDiff(t, r(e.end) / 1e3) : null != e.start ? this.getDiff(r(e.start) / 1e3, t) : {
                            hours: 0,
                            minutes: 0,
                            seconds: 0
                        }
                    }
                    renderTime(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return t && e <= 0 ? -1 : e < 10 ? "0".concat(e) : e
                    }
                    getDiff(e, t) {
                        let l = Math.max(t - e, 0);
                        return {
                            hours: Math.floor(l / 3600) % 24,
                            minutes: Math.floor(l / 60) % 60,
                            seconds: Math.floor(l) % 60
                        }
                    }
                    render() {
                        let {
                            timestamps: t,
                            ...l
                        } = this.props, {
                            hours: s,
                            minutes: a,
                            seconds: r
                        } = this.state, o = {
                            hours: this.renderTime(s, !0),
                            minutes: this.renderTime(a),
                            seconds: this.renderTime(r)
                        };
                        return null != t.end ? (0, n.jsx)(e, {
                            ...l,
                            message: i.default.Messages.USER_ACTIVITY_TIMESTAMP_END.format(o)
                        }) : null != t.start ? (0, n.jsx)(e, {
                            ...l,
                            message: i.default.Messages.USER_ACTIVITY_TIMESTAMP_START.format(o)
                        }) : null
                    }
                    constructor(e) {
                        super(e), this._interval = new a.Interval, this.state = {
                            ...this.getUpdatedTime()
                        }
                    }
                }
            }
        },
        267527: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ClydeIcon: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("669491"),
                a = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M19.733 4.866a18.196 18.196 0 0 0-4.597-1.437c-.216.395-.415.8-.59 1.215a17.084 17.084 0 0 0-5.093 0c-.18-.414-.377-.82-.593-1.21-1.59.273-3.136.753-4.602 1.437C1.343 9.239.557 13.503.952 17.7a18.43 18.43 0 0 0 5.641 2.87c.456-.622.86-1.286 1.205-1.979a11.646 11.646 0 0 1-1.904-.923c.162-.118.318-.236.47-.368a13.056 13.056 0 0 0 11.273 0c.151.128.307.25.463.368-.606.363-1.245.674-1.903.923.35.693.75 1.353 1.205 1.975a18.427 18.427 0 0 0 5.64-2.87h.006c.463-4.863-.791-9.085-3.315-12.831ZM8.297 15.118c-1.1 0-2.005-1.022-2.005-2.266s.884-2.267 2.005-2.267c1.122 0 2.023 1.023 2.005 2.267 0 1.244-.888 2.266-2.005 2.266Zm7.402 0c-1.1 0-2.005-1.022-2.005-2.266s.888-2.267 2.005-2.267 2.022 1.023 2.005 2.267c0 1.244-.888 2.266-2.005 2.266Z",
                        className: r
                    })
                })
            }
        },
        850062: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                EyePlusIcon: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("669491"),
                a = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M22.519 13.168c-.193.416-.867.355-1.149-.007a3.017 3.017 0 0 0-.454-.469.472.472 0 0 1-.13-.544.363.363 0 0 0-.006-.308c-.404-.902-1.182-2.393-2.395-3.757C16.875 6.383 14.81 5 12 5 9.19 5 7.126 6.382 5.614 8.083c-1.195 1.345-1.969 2.814-2.377 3.72a.48.48 0 0 0 0 .395c.408.905 1.182 2.374 2.377 3.719 1.42 1.598 3.33 2.915 5.886 3.068.276.017.496.24.541.513.051.306.149.596.285.864.138.27-.021.638-.326.638-7.113 0-10.273-7.115-10.887-8.693a.833.833 0 0 1 0-.614C1.727 10.115 4.887 3 12 3s10.273 7.115 10.887 8.693a.833.833 0 0 1 0 .614c-.08.204-.201.5-.368.86Z",
                        className: r
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M15.56 11.765c.194-.091.44.02.44.235a4 4 0 1 1-4-4c.215 0 .326.246.235.44a2.5 2.5 0 0 0 3.324 3.324ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: r
                    })]
                })
            }
        },
        202804: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                FlagIcon: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("669491"),
                a = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M3 1a1 1 0 0 1 1 1v.82l8.671-1.446A2 2 0 0 1 15 3.347V4.82l5.671-.946A2 2 0 0 1 23 5.847v7.306a2 2 0 0 1-1.671 1.973l-9 1.5a1.994 1.994 0 0 1-1.777-.594c-.204-.213-.083-.54.176-.683a5.011 5.011 0 0 0 1.94-1.939c.183-.322-.095-.658-.46-.597L4 14.18V21a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z",
                        className: r
                    })
                })
            }
        },
        971918: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                SendMessageIcon: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("669491"),
                a = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "m5.1 10.019 7.409 1.389a.602.602 0 0 1 0 1.184L5.1 13.982l-2.938 5.873c-.635 1.27.713 2.618 1.983 1.983l17.038-8.517c1.09-.544 1.09-2.098 0-2.643L4.145 2.162c-1.27-.635-2.618.713-1.983 1.983L5.1 10.019Z",
                        className: r
                    })
                })
            }
        },
        841248: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                UnknownGameIcon: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("669491"),
                a = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.813 7c-.548 0-.997.263-1.238.615a1 1 0 0 1-1.65-1.13C9.548 7.576 10.623 7 11.812 7c1.822 0 3.438 1.381 3.438 3.25 0 1.454-.977 2.612-2.27 3.055l.003.01a1 1 0 0 1-1.966.37l-.187-1a1 1 0 0 1 .982-1.185c.871 0 1.438-.633 1.438-1.25S12.683 9 11.812 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        816607: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                UserPlayIcon: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("669491"),
                a = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.533 11A9.533 9.533 0 0 0 2 20.533C2 21.343 2.657 22 3.467 22h.22c.24 0 .445-.17.504-.403.285-1.113.84-2.17 1.32-2.91.134-.208.43-.094.405.154l-.261 2.61a.5.5 0 0 0 .497.549h5.73c.368 0 .612-.385.494-.732a7 7 0 0 1 3.657-8.61c.404-.19.461-.78.048-.949A9.506 9.506 0 0 0 12.467 11h-.934Z",
                        className: r
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-2.767-.2L17.9 16.3a.25.25 0 0 0-.4.2v5a.25.25 0 0 0 .4.2l3.333-2.5a.25.25 0 0 0 0-.4Z",
                        clipRule: "evenodd",
                        className: r
                    })]
                })
            }
        },
        249978: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                WindowLaunchIcon: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("669491"),
                a = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M15 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L19.586 3H16a1 1 0 0 1-1-1Z",
                        className: r
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M5 2a3 3 0 0 0-3 3v14c0 1.655 1.34 3 2.998 3H19A2.999 2.999 0 0 0 22 19v-6a1 1 0 1 0-2 0v6c0 .553-.447 1-.999 1H4.998A.998.998 0 0 1 4 19V5a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5Z",
                        className: r
                    })]
                })
            }
        },
        340066: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("884691"),
                s = (e, t) => {
                    let l = (0, n.useRef)(e);
                    (0, n.useEffect)(() => {
                        l.current = e
                    }, [e]), (0, n.useEffect)(() => {
                        if (null === t) return;
                        let e = setTimeout(() => l.current(), t);
                        return () => clearTimeout(e)
                    }, [t, l])
                }
        },
        126808: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("800762");

            function s(e) {
                var t;
                let {
                    channelId: l,
                    userId: s,
                    activity: a
                } = e, i = (null == a ? void 0 : a.session_id) == null ? l : null === (t = n.default.getVoiceStateForSession(s, null == a ? void 0 : a.session_id)) || void 0 === t ? void 0 : t.channelId;
                return null != i ? i : void 0
            }
        },
        575365: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("36539"),
                s = l("49111");

            function a(e) {
                return null == e || null == e.type || e.type !== s.ActivityTypes.PLAYING ? null : (0, n.default)(e) ? s.ActivityGamePlatforms.XBOX : null != e.platform ? e.platform : s.ActivityGamePlatforms.DESKTOP
            }
        },
        609030: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("376556"),
                s = l("575365"),
                a = l("49111"),
                i = l("782340");

            function r(e) {
                var t;
                let l = null !== (t = (0, s.default)(e)) && void 0 !== t ? t : "";
                switch (l) {
                    case a.ActivityGamePlatforms.PS4:
                    case a.ActivityGamePlatforms.PS5:
                        return i.default.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({
                            platform: l.toUpperCase()
                        });
                    case a.ActivityGamePlatforms.XBOX:
                    case a.ActivityGamePlatforms.SAMSUNG:
                        return i.default.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({
                            platform: n.default.get(l).name
                        });
                    default:
                        return i.default.Messages.USER_ACTIVITY_HEADER_PLAYING
                }
            }
        },
        985677: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("49111");

            function s(e) {
                return null != e && e.type === n.ActivityTypes.PLAYING
            }
        },
        36539: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("954016"),
                s = l("49111");

            function a(e) {
                return null != e && (e.application_id === n.XBOX_ACTIVITY_APPLICATION_ID || e.platform === s.ActivityGamePlatforms.XBOX)
            }
        },
        532602: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return L
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                i = l("627445"),
                r = l.n(i),
                o = l("118810"),
                u = l("446674"),
                d = l("77078"),
                c = l("86621"),
                f = l("376556"),
                m = l("118033"),
                E = l("697218"),
                p = l("145131"),
                T = l("313873"),
                h = l("429928"),
                _ = l("36539"),
                I = l("698372"),
                S = l("770370"),
                g = l("667618"),
                A = l("865677"),
                C = l("774713"),
                v = l("510788"),
                N = l("756731"),
                M = l("762806"),
                y = l("438278"),
                O = l("898481"),
                R = l("49111"),
                x = l("278433"),
                L = (0, c.default)(e => {
                    let t, {
                            activity: l,
                            user: s,
                            applicationStream: i,
                            className: c,
                            guildId: L,
                            channelId: P,
                            source: b,
                            color: D = d.Button.Colors.WHITE,
                            look: j = d.Button.Looks.OUTLINED,
                            type: U,
                            onAction: F,
                            isEmbedded: w = !1
                        } = e,
                        G = (0, I.default)(),
                        B = (0, u.useStateFromStores)([E.default], () => {
                            let e = E.default.getCurrentUser();
                            return r(null != e, "UserActivityActions: currentUser cannot be undefined"), e
                        }),
                        k = U === T.Types.PROFILE || U === T.Types.PROFILE_V2,
                        Y = U === T.Types.STREAM_PREVIEW || null != i,
                        V = (0, h.default)(l),
                        H = (0, m.isStageActivity)(l),
                        W = k ? p.default.Align.END : p.default.Align.STRETCH,
                        K = V || Y ? p.default.Direction.HORIZONTAL : p.default.Direction.VERTICAL;
                    if ((0, _.default)(l)) t = [(0, n.jsx)(S.default, {
                        look: j,
                        color: D,
                        platform: f.default.get(R.PlatformTypes.XBOX)
                    }, "ConnectPlatformActivityButton")];
                    else if ((null == l ? void 0 : l.platform) != null && [R.ActivityGamePlatforms.PS4, R.ActivityGamePlatforms.PS5].includes(l.platform)) t = [(0, n.jsx)(S.default, {
                        look: j,
                        color: D,
                        platform: f.default.get(R.PlatformTypes.PLAYSTATION)
                    }, "ConnectPlatformActivityButton")];
                    else if (V) {
                        let e = (0, n.jsx)(M.default, {
                                activity: l,
                                user: s,
                                color: D,
                                look: j,
                                guildId: L,
                                channelId: P,
                                source: b
                            }, "spotify-activity-sync-button"),
                            a = (0, n.jsx)(N.default, {
                                activity: l,
                                user: s,
                                color: D,
                                look: j,
                                guildId: L,
                                channelId: P,
                                source: b
                            }, "spotify-activity-play-button");
                        t = [a, e]
                    } else if (H) {
                        let e = (0, m.unpackStageChannelParty)(l);
                        null != e && (t = [(0, n.jsx)(C.default, {
                            guildId: e.guildId,
                            channelId: e.channelId,
                            color: D,
                            look: j,
                            isProfile: k
                        }, e.channelId)])
                    } else if (Y) {
                        let e = (0, n.jsx)(O.default, {
                            isCurrentUser: B.id === s.id,
                            color: D,
                            look: j,
                            applicationStream: i
                        }, "watch-button");
                        t = [e]
                    } else {
                        let e = (0, n.jsx)(y.default, {
                                activity: l,
                                color: D,
                                look: j
                            }, "watch-button"),
                            a = (0, n.jsx)(A.default, {
                                activity: l,
                                currentEmbeddedApplication: G,
                                user: s,
                                isCurrentUser: B.id === s.id,
                                color: D,
                                look: j,
                                channelId: P,
                                isEmbedded: w
                            }, "join-activity-button"),
                            i = (0, n.jsx)(v.default, {
                                activity: l,
                                user: s,
                                color: D,
                                look: j
                            }, "notify-button"),
                            r = (0, n.jsx)(g.default, {
                                user: s,
                                color: D,
                                look: j,
                                activity: l
                            }, "custom-activity-button");
                        if (null == a && null == i && null == e && null == r) return null;
                        t = [a, i, e, r]
                    }
                    let z = K === p.default.Direction.VERTICAL;
                    return (0, n.jsx)(p.default, {
                        grow: 0,
                        align: W,
                        direction: K,
                        wrap: z ? p.default.Wrap.WRAP : p.default.Wrap.NO_WRAP,
                        className: a(c, x.buttonsWrapper, z ? x.vertical : x.horizontal),
                        onClick: function(e) {
                            if ((0, o.isElement)(e.target)) "BUTTON" === e.target.nodeName && (null == F || F())
                        },
                        children: t
                    })
                })
        },
        295999: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                i = l("77078"),
                r = l("808480");

            function o(e) {
                let {
                    className: t,
                    size: l,
                    ...s
                } = e;
                return (0, n.jsx)(i.Button, {
                    className: a(r.button, t),
                    size: a(r.buttonSize, l),
                    ...s
                })
            }
        },
        770370: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("446674"),
                a = l("926994"),
                i = l("47319"),
                r = l("295999"),
                o = l("782340"),
                u = l("52638");

            function d(e) {
                let {
                    color: t,
                    look: l,
                    platform: d
                } = e, c = (0, s.useStateFromStores)([i.default], () => i.default.getAccounts().some(e => e.type === d.type));
                return c ? null : (0, n.jsx)(r.default, {
                    onClick: () => (0, a.default)(d.type, "Activity Action"),
                    color: t,
                    look: l,
                    fullWidth: !0,
                    children: (0, n.jsxs)("div", {
                        className: u.flex,
                        children: [(0, n.jsx)("img", {
                            alt: "",
                            className: u.platformIcon,
                            src: d.icon.whiteSVG
                        }), o.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                            platform: d.name
                        })]
                    })
                }, "connect-platform-activity")
            }
        },
        667618: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("968194"),
                a = l("128259"),
                i = l("253981"),
                r = l("295999");

            function o(e) {
                let {
                    activity: t,
                    color: l,
                    user: o,
                    look: u
                } = e;
                if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
                async function d(e, t, l) {
                    try {
                        let n = await (0, s.getMetadata)(e, t);
                        if (null == n || !Array.isArray(n.button_urls)) return;
                        let r = n.button_urls[l];
                        if ("string" != typeof r) return;
                        let o = i.default.safeParseWithQuery(r);
                        if (null == o || null == o.protocol || null == o.hostname) return;
                        (0, a.handleClick)({
                            href: i.default.format(o),
                            trusted: !1
                        })
                    } catch (e) {}
                }
                return (0, n.jsx)(n.Fragment, {
                    children: t.buttons.map((e, s) => (0, n.jsx)(r.default, {
                        color: l,
                        look: u,
                        onClick: () => d(t, o.id, s),
                        children: e
                    }, "customButton-".concat(s)))
                })
            }
        },
        865677: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return G
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("446674"),
                i = l("77078"),
                r = l("260365"),
                o = l("823411"),
                u = l("987317"),
                d = l("997289"),
                c = l("685665"),
                f = l("442939"),
                m = l("860285"),
                E = l("42203"),
                p = l("86878"),
                T = l("525065"),
                h = l("305961"),
                _ = l("686470"),
                I = l("957255"),
                S = l("27618"),
                g = l("18494"),
                A = l("697218"),
                C = l("800762"),
                v = l("953998"),
                N = l("535974"),
                M = l("773336"),
                y = l("602043"),
                O = l("191225"),
                R = l("706508"),
                x = l("612696"),
                L = l("126808"),
                P = l("871388"),
                b = l("407908"),
                D = l("141962"),
                j = l("295999"),
                U = l("954016"),
                F = l("49111"),
                w = l("782340");

            function G(e) {
                let {
                    activity: t,
                    currentEmbeddedApplication: l,
                    isCurrentUser: G,
                    color: B,
                    look: k,
                    hover: Y,
                    user: V,
                    channelId: H,
                    isEmbedded: W = !1
                } = e, {
                    analyticsLocations: K
                } = (0, c.default)(), [z, Z] = s.useState(!1), X = (0, L.default)({
                    channelId: H,
                    userId: V.id,
                    activity: t
                }), J = (0, a.useStateFromStores)([A.default], () => A.default.getCurrentUser()), Q = (0, a.useStateFromStores)([_.default, m.default, N.default, p.default], () => W || (null == t ? void 0 : t.application_id) != null && (0, y.isLaunchable)({
                    LibraryApplicationStore: _.default,
                    LaunchableGameStore: m.default,
                    DispatchApplicationStore: N.default,
                    ConnectedAppsStore: p.default,
                    applicationId: t.application_id
                })), q = (0, a.useStateFromStores)([O.default], () => Array.from(O.default.getSelfEmbeddedActivities().values()).some(e => {
                    let {
                        application_id: l,
                        channelId: n
                    } = e;
                    return l === (null == t ? void 0 : t.application_id) && n === X
                })), $ = (0, a.useStateFromStores)([v.default], () => null != t && null != t.application_id && v.default.getState(t.application_id, F.ActivityActionTypes.JOIN) === F.ActivityActionStates.LOADING), [ee] = (0, f.default)((null == t ? void 0 : t.application_id) != null ? [null == t ? void 0 : t.application_id] : []), et = (0, a.useStateFromStores)([E.default, h.default, T.default, S.default, g.default, C.default, I.default], () => (0, x.default)({
                    user: V,
                    activity: t,
                    application: ee,
                    channelId: X,
                    currentUser: J,
                    isEmbedded: W,
                    ChannelStore: E.default,
                    GuildStore: h.default,
                    GuildMemberCountStore: T.default,
                    RelationshipStore: S.default,
                    SelectedChannelStore: g.default,
                    VoiceStateStore: C.default,
                    PermissionStore: I.default
                })), el = (0, d.useAnalyticsContext)(), en = !M.isPlatformEmbedded, es = (0, P.default)(t, F.ActivityFlags.JOIN) || W;
                if (null == t || !es || null == t.application_id) return null;
                let ea = !G && (en || Q) && !z && !q && (!W || et),
                    ei = null;
                G ? ei = w.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : !en && !Q && (ei = w.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                    name: t.name
                }));
                let er = async (e, t) => {
                    var l;
                    null != t.session_id && null != t.application_id && (await o.default.join({
                        userId: e.id,
                        sessionId: t.session_id,
                        applicationId: t.application_id,
                        channelId: g.default.getVoiceChannelId(),
                        messageId: null,
                        intent: U.ActivityIntent.PLAY,
                        embedded: (0, P.default)(t, F.ActivityFlags.EMBEDDED)
                    }), (0, b.default)({
                        type: F.AnalyticsGameOpenTypes.JOIN,
                        userId: e.id,
                        applicationId: t.application_id,
                        partyId: null === (l = t.party) || void 0 === l ? void 0 : l.id,
                        locationObject: el.location,
                        analyticsLocations: K
                    }))
                }, eo = async () => {
                    let e = !1;
                    if (W) {
                        if (!et || null == X) return;
                        e = await (0, R.default)({
                            activity: t,
                            currentEmbeddedApplication: l,
                            activityChannelId: X,
                            locationObject: el.location,
                            embeddedActivitiesManager: D.default,
                            analyticsLocations: K
                        })
                    }
                    if (!e) {
                        et && er(V, t), Z(!0);
                        let e = await r.default.sendActivityInviteUser({
                            type: F.ActivityActionTypes.JOIN_REQUEST,
                            userId: V.id,
                            activity: t,
                            location: F.AnalyticsLocations.PROFILE_POPOUT
                        });
                        null != e && u.default.selectPrivateChannel(e.id)
                    }
                }, eu = et ? w.default.Messages.JOIN : w.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
                return W && (eu = w.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY), (0, n.jsx)(i.Tooltip, {
                    text: ei,
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: l
                        } = e;
                        return (0, n.jsx)(j.default, {
                            onClick: eo,
                            onMouseEnter: t,
                            onMouseLeave: l,
                            color: B,
                            look: k,
                            hover: Y,
                            disabled: !ea,
                            submitting: $,
                            fullWidth: !0,
                            children: eu
                        })
                    }
                }, "join")
            }
        },
        774713: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                i = l("446674"),
                r = l("716214"),
                o = l("800762"),
                u = l("295999"),
                d = l("782340"),
                c = l("953212"),
                f = e => {
                    let {
                        guildId: t,
                        channelId: l,
                        color: s,
                        look: f,
                        isProfile: m
                    } = e, E = (0, i.useStateFromStores)([o.default], () => o.default.isInChannel(l), [l]);
                    return (0, n.jsx)(u.default, {
                        className: a(c.button, {
                            [c.popout]: !m
                        }),
                        color: s,
                        look: f,
                        disabled: E,
                        onClick: () => r.connectOrLurkStage(t, l),
                        fullWidth: !0,
                        children: d.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
                    }, "stage")
                }
        },
        510788: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("605250"),
                a = l("871388"),
                i = l("295999"),
                r = l("49111"),
                o = l("782340");

            function u(e) {
                let {
                    activity: t,
                    user: l,
                    look: u,
                    color: d
                } = e;
                return (0, a.default)(t, r.ActivityFlags.INSTANCE) ? (0, n.jsx)(i.default, {
                    look: u,
                    color: d,
                    onClick: function() {
                        new(0, s.default)("UserActivityActions").log("notify", l.id, t)
                    },
                    fullWidth: !0,
                    children: o.default.Messages.USER_ACTIVITY_ACTION_NOTIFY_ME
                }, "notify") : null
            }
        },
        756731: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("564594"),
                a = l("871388"),
                i = l("429928"),
                r = l("49111"),
                o = l("808480");

            function u(e) {
                let {
                    activity: t,
                    user: l,
                    color: u,
                    look: d,
                    guildId: c,
                    channelId: f,
                    source: m
                } = e;
                if (null == t || !(0, a.default)(t, r.ActivityFlags.PLAY) || !(0, i.default)(t)) return null;
                let E = {
                    key: "play",
                    className: o.button,
                    size: o.buttonSize,
                    color: u,
                    look: d,
                    activity: t,
                    user: l,
                    fullWidth: !0
                };
                return (0, n.jsx)(s.default, {
                    guildId: null != c ? c : void 0,
                    channelId: f,
                    source: m,
                    ...E
                })
            }
        },
        762806: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("854937"),
                a = l("871388"),
                i = l("429928"),
                r = l("49111"),
                o = l("808480");

            function u(e) {
                let {
                    activity: t,
                    user: l,
                    color: u,
                    look: d,
                    guildId: c,
                    channelId: f,
                    source: m
                } = e;
                if (null == t || !(0, a.default)(t, r.ActivityFlags.SYNC)) return null;
                let E = {
                    key: "sync",
                    className: o.button,
                    size: o.buttonSize,
                    color: u,
                    look: d,
                    user: l,
                    activity: t
                };
                return (0, i.default)(t) ? (0, n.jsx)(s.default, {
                    guildId: null != c ? c : void 0,
                    channelId: f,
                    source: m,
                    ...E
                }) : null
            }
        },
        438278: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("287585"),
                a = l("502651"),
                i = l("295999"),
                r = l("782340");

            function o(e) {
                let {
                    activity: t,
                    color: l,
                    look: o
                } = e, u = (0, a.default)(t);
                return u ? (0, n.jsx)(i.default, {
                    onClick: () => {
                        let e = (0, s.default)(t);
                        return window.open(null != e ? e : void 0)
                    },
                    color: l,
                    look: o,
                    fullWidth: !0,
                    children: r.default.Messages.WATCH
                }, "play-activity") : null
            }
        },
        898481: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return S
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("446674"),
                a = l("77078"),
                i = l("772017"),
                r = l("987317"),
                o = l("990766"),
                u = l("244201"),
                d = l("223913"),
                c = l("373469"),
                f = l("42203"),
                m = l("30672"),
                E = l("619911"),
                p = l("659500"),
                T = l("295999"),
                h = l("49111"),
                _ = l("782340"),
                I = l("317468");

            function S(e) {
                let {
                    isCurrentUser: t,
                    color: l,
                    look: S,
                    applicationStream: g
                } = e, {
                    activeStream: A,
                    watchingOtherStream: C
                } = (0, s.useStateFromStoresObject)([c.default], () => ({
                    activeStream: c.default.getActiveStreamForApplicationStream(g),
                    watchingOtherStream: null != g && c.default.getAllActiveStreamsForChannel(g.channelId).filter(e => {
                        let {
                            ownerId: t
                        } = e;
                        return t !== g.ownerId
                    }).length > 0
                })), v = (0, s.useStateFromStores)([f.default], () => f.default.getChannel(null == g ? void 0 : g.channelId)), [N, M] = (0, d.useCanWatchStream)(v), y = (0, u.useWindowDispatch)(), O = null != A && null != g && A.state !== h.ApplicationStreamStates.ENDED && A.ownerId === g.ownerId, R = e => {
                    null != g && (r.default.selectVoiceChannel(g.channelId), !O && (0, o.watchStreamAndTransitionToStream)(g, {
                        forceMultiple: e
                    }), y.dispatch(h.ComponentActions.POPOUT_CLOSE), p.ComponentDispatch.dispatch(h.ComponentActions.MODAL_CLOSE), i.default.popAll())
                };
                if (null == g) return null;
                let x = (0, d.getStreamCTAString)(M);
                t ? x = _.default.Messages.WATCH_STREAM_STREAMING : O && (x = _.default.Messages.WATCH_STREAM_WATCHING);
                let L = {
                    color: l,
                    look: S
                };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(T.default, {
                        disabled: t || O || !N,
                        onClick: () => R(!1),
                        ...L,
                        fullWidth: !0,
                        children: [(0, n.jsx)(E.default, {
                            className: I.streamIcon
                        }), x]
                    }, "play"), C && !O ? (0, n.jsx)(a.Tooltip, {
                        text: _.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                        children: e => (0, n.jsx)(T.default, {
                            ...e,
                            onClick: () => {
                                var t;
                                null === (t = e.onClick) || void 0 === t || t.call(e), R(!0)
                            },
                            ...L,
                            className: I.iconButton,
                            size: I.iconButtonSize,
                            children: (0, n.jsx)(m.default, {
                                className: I.iconSize
                            })
                        })
                    }) : null]
                })
            }
        },
        85027: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                getApplicationInstallURL: function() {
                    return a
                }
            });
            var n = l("872717"),
                s = l("49111");

            function a(e) {
                var t, l;
                if (null != e.custom_install_url) return e.custom_install_url;
                let a = {};
                a.client_id = e.id, (null === (t = e.install_params) || void 0 === t ? void 0 : t.permissions) != null && (a.permissions = e.install_params.permissions), (null === (l = e.install_params) || void 0 === l ? void 0 : l.scopes) != null && (a.scope = e.install_params.scopes.join(" "));
                let i = Object.entries(a).map(e => {
                    let [t, l] = e;
                    return "".concat(t, "=").concat(encodeURIComponent(l))
                }).join("&");
                return "".concat(n.default.getAPIBaseURL(!1)).concat(s.Endpoints.OAUTH2_AUTHORIZE, "?").concat(i)
            }
        },
        227422: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("884691"),
                s = l("760850");

            function a(e, t) {
                let [l, a] = n.useState();
                return n.useEffect(() => {
                    if (null == e || null != t) {
                        a(void 0);
                        return
                    }(0, s.default)().then(t => {
                        null != t && t.identifyGame(e, (e, t) => {
                            0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name && a("data:image/png;base64,".concat(t.icon))
                        })
                    })
                }, [e, t]), null != t ? t : l
            }
        },
        606292: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                getDecorationSizeForAvatarSize: function() {
                    return i
                },
                openAvatarDecorationModal: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("77078");
            l("103603");
            var a = l("573135");

            function i(e) {
                return "number" != typeof e ? (0, s.getAvatarSize)(e) * a.DECORATION_TO_AVATAR_RATIO : e * a.DECORATION_TO_AVATAR_RATIO
            }
            let r = e => {
                let {
                    analyticsLocations: t,
                    initialSelectedDecoration: a,
                    isTryItOutFlow: i
                } = e;
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("791050").then(l.bind(l, "791050"));
                    return l => (0, n.jsx)(e, {
                        ...l,
                        analyticsLocations: t,
                        initialSelectedDecoration: a,
                        isTryItOutFlow: i
                    })
                }, {})
            }
        },
        850391: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                SlateToolbarTypes: function() {
                    return s
                },
                ChatInputTypes: function() {
                    return I
                }
            });
            var n, s, a = l("394846"),
                i = l("474643");
            (n = s || (s = {}))[n.TOOLTIP = 0] = "TOOLTIP", n[n.STATIC = 1] = "STATIC";
            let r = {
                    analyticsName: "normal",
                    attachments: !0,
                    autocomplete: {
                        addReactionShortcut: !0,
                        forceChatLayer: !0,
                        reactions: !0
                    },
                    commands: {
                        enabled: !0
                    },
                    drafts: {
                        type: i.DraftType.ChannelMessage,
                        autoSave: !0
                    },
                    emojis: {
                        button: !0
                    },
                    gifs: {
                        button: !0,
                        allowSending: !0
                    },
                    gifts: {
                        button: !0
                    },
                    permissions: {
                        requireSendMessages: !0
                    },
                    showThreadPromptOnReply: !0,
                    stickers: {
                        button: !0,
                        allowSending: !0,
                        autoSuggest: !0
                    },
                    users: {
                        allowMentioning: !0
                    },
                    submit: {
                        button: !0,
                        ignorePreference: a.isMobile,
                        disableEnterToSubmit: a.isMobile,
                        clearOnSubmit: !0,
                        useDisabledStylesOnSubmit: !0
                    },
                    uploadLongMessages: !0,
                    upsellLongMessages: {
                        iconOnly: !1
                    },
                    showCharacterCount: !0,
                    sedReplace: !0
                },
                o = {
                    analyticsName: "overlay",
                    autocomplete: {
                        addReactionShortcut: !0,
                        forceChatLayer: !0
                    },
                    drafts: {
                        type: i.DraftType.ChannelMessage,
                        autoSave: !0
                    },
                    emojis: {
                        button: !0
                    },
                    gifs: {
                        button: !0
                    },
                    gifts: {
                        button: !0
                    },
                    permissions: {
                        requireSendMessages: !0
                    },
                    showThreadPromptOnReply: !0,
                    stickers: {
                        button: !0,
                        allowSending: !0
                    },
                    users: {
                        allowMentioning: !0
                    },
                    submit: {
                        button: !0,
                        ignorePreference: a.isMobile,
                        disableEnterToSubmit: a.isMobile,
                        clearOnSubmit: !0,
                        useDisabledStylesOnSubmit: !0
                    },
                    upsellLongMessages: {
                        iconOnly: !1
                    },
                    showCharacterCount: !0
                },
                u = {
                    analyticsName: "sidebar",
                    attachments: !0,
                    autocomplete: {
                        addReactionShortcut: !0
                    },
                    commands: {
                        enabled: !0
                    },
                    disableAutoFocus: !0,
                    drafts: {
                        type: i.DraftType.ChannelMessage
                    },
                    emojis: {
                        button: !0
                    },
                    gifs: {
                        allowSending: !0
                    },
                    permissions: {
                        requireSendMessages: !0
                    },
                    stickers: {
                        allowSending: !0,
                        autoSuggest: !0
                    },
                    users: {
                        allowMentioning: !0
                    },
                    submit: {
                        button: !0,
                        ignorePreference: a.isMobile,
                        disableEnterToSubmit: a.isMobile,
                        clearOnSubmit: !0,
                        useDisabledStylesOnSubmit: !0
                    },
                    uploadLongMessages: !0,
                    showCharacterCount: !0,
                    upsellLongMessages: {
                        iconOnly: !0
                    }
                },
                d = {
                    analyticsName: "edit",
                    drafts: {
                        type: i.DraftType.ChannelMessage
                    },
                    emojis: {
                        button: !0
                    },
                    users: {
                        allowMentioning: !0
                    },
                    expressionPicker: {
                        onlyEmojis: !0
                    },
                    permissions: {
                        requireSendMessages: !0
                    },
                    submit: {
                        useDisabledStylesOnSubmit: !0
                    },
                    showCharacterCount: !0
                },
                c = {
                    analyticsName: "forum",
                    drafts: {
                        type: i.DraftType.ChannelMessage
                    },
                    emojis: {
                        button: !0
                    },
                    gifs: {
                        allowSending: !0
                    },
                    permissions: {
                        requireSendMessages: !0
                    },
                    submit: {
                        useDisabledStylesOnSubmit: !0,
                        allowEmptyMessage: !0
                    },
                    autocomplete: {
                        alwaysUseLayer: !0,
                        small: !0
                    },
                    showCharacterCount: !0
                },
                f = {
                    analyticsName: "voice_channel_status",
                    drafts: {
                        type: i.DraftType.ChannelMessage
                    },
                    emojis: {
                        button: !0
                    },
                    expressionPicker: {
                        onlyEmojis: !0
                    },
                    permissions: {
                        requireSendMessages: !1
                    },
                    submit: {
                        useDisabledStylesOnSubmit: !0,
                        allowEmptyMessage: !0
                    },
                    autocomplete: {
                        alwaysUseLayer: !0,
                        small: !0
                    },
                    markdown: {
                        disableCodeBlocks: !0,
                        disableBlockQuotes: !0
                    },
                    showCharacterCount: !0
                },
                m = {
                    analyticsName: "thread_creation",
                    attachments: !0,
                    drafts: {
                        type: i.DraftType.FirstThreadMessage
                    },
                    emojis: {
                        button: !0
                    },
                    gifs: {
                        allowSending: !0
                    },
                    stickers: {
                        allowSending: !0
                    },
                    users: {
                        allowMentioning: !0
                    },
                    permissions: {
                        requireCreateTherads: !0
                    },
                    submit: {
                        useDisabledStylesOnSubmit: !0,
                        button: !0
                    },
                    disableAutoFocus: !0,
                    showCharacterCount: !0,
                    hideAttachmentArea: !0,
                    upsellLongMessages: {
                        iconOnly: !0
                    }
                },
                E = {
                    analyticsName: "create_forum_post",
                    attachments: !0,
                    drafts: {
                        type: i.DraftType.FirstThreadMessage
                    },
                    gifs: {
                        allowSending: !0
                    },
                    stickers: {
                        allowSending: !0
                    },
                    users: {
                        allowMentioning: !0
                    },
                    permissions: {
                        requireSendMessages: !0
                    },
                    submit: {
                        useDisabledStylesOnSubmit: !0,
                        disableEnterToSubmit: !0
                    },
                    disableAutoFocus: !0,
                    hideAttachmentArea: !0,
                    uploadLongMessages: !0
                },
                p = {
                    analyticsName: "profile_bio_input",
                    drafts: {
                        type: i.DraftType.ChannelMessage
                    },
                    emojis: {
                        button: !0
                    },
                    permissions: {
                        requireSendMessages: !0
                    },
                    submit: {
                        useDisabledStylesOnSubmit: !0,
                        disableEnterToSubmit: !0
                    },
                    disableAutoFocus: !0,
                    showCharacterCount: !0
                },
                T = {
                    analyticsName: "custom_gift_type",
                    drafts: {
                        type: i.DraftType.ChannelMessage
                    },
                    emojis: {},
                    permissions: {
                        requireSendMessages: !0
                    },
                    submit: {
                        useDisabledStylesOnSubmit: !0,
                        disableEnterToSubmit: !0
                    },
                    disableAutoFocus: !0,
                    showCharacterCount: !0
                },
                h = {
                    analyticsName: "rules_input",
                    drafts: {
                        type: i.DraftType.ChannelMessage
                    },
                    permissions: {
                        requireSendMessages: !0
                    },
                    autocomplete: {
                        alwaysUseLayer: !0,
                        small: !0
                    },
                    showCharacterCount: !0
                },
                _ = {
                    analyticsName: "forum_channel_guidelines",
                    drafts: {
                        type: i.DraftType.ChannelMessage
                    },
                    permissions: {
                        requireSendMessages: !1
                    },
                    submit: {
                        useDisabledStylesOnSubmit: !0,
                        disableEnterToSubmit: !0
                    },
                    autocomplete: {
                        alwaysUseLayer: !0,
                        small: !0
                    },
                    showCharacterCount: !0,
                    toolbarType: s.STATIC
                },
                I = {
                    NORMAL: r,
                    OVERLAY: o,
                    SIDEBAR: u,
                    EDIT: d,
                    FORM: c,
                    VOICE_CHANNEL_STATUS: f,
                    THREAD_CREATION: m,
                    PROFILE_BIO_INPUT: p,
                    CUSTOM_GIFT: T,
                    RULES_INPUT: h,
                    CREATE_FORUM_POST: E,
                    FORUM_CHANNEL_GUIDELINES: _
                }
        },
        235275: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useIsDMsToClydeEnabled: function() {
                    return o
                }
            });
            var n = l("446674"),
                s = l("862205"),
                a = l("305961"),
                i = l("980215");
            let r = (0, s.createExperiment)({
                kind: "user",
                id: "2023-05_clyde_ai_dm",
                label: "DMs to Clyde",
                defaultConfig: {
                    isDMsToClydeEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable dms to clyde",
                    config: {
                        isDMsToClydeEnabled: !0
                    }
                }]
            });

            function o() {
                let {
                    isDMsToClydeEnabled: e
                } = r.useExperiment({
                    location: "dbd3ac_1"
                }, {
                    autoTrackExposure: !1
                }), t = (0, n.useStateFromStoresArray)([a.default], () => a.default.getGuildIds()), l = t.some(e => (0, i.getClydeExperimentEnabled)(a.default.getGuild(e)));
                return e && l
            }
        },
        235767: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                i = l("446674"),
                r = l("77078"),
                o = l("697218"),
                u = l("987772"),
                d = l("158998"),
                c = l("473591"),
                f = l("782340"),
                m = l("189590");

            function E(e) {
                let {
                    userId: t,
                    guildId: l,
                    className: s
                } = e, E = (0, i.useStateFromStores)([c.default], () => c.default.getSettings(l)), p = (0, i.useStateFromStores)([o.default], () => o.default.getUser(null != t ? t : null == E ? void 0 : E.last_edited_by));
                return null == p ? null : (0, n.jsxs)("div", {
                    className: a(s, m.container),
                    children: [(0, n.jsx)(u.default, {
                        color: "var(--interactive-active)",
                        width: 12,
                        height: 12
                    }), (0, n.jsx)(r.Text, {
                        color: "text-normal",
                        variant: "text-xs/medium",
                        children: f.default.Messages.CLYDE_LAST_EDITED_BY_TAG.format({
                            username: d.default.getUserTag(p, {
                                decoration: "auto"
                            })
                        })
                    })]
                })
            }
        },
        419806: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("77078"),
                a = l("599110"),
                i = l("49111");

            function r(e) {
                a.default.track(i.AnalyticEvents.OPEN_MODAL, {
                    type: "Clyde Share Profile",
                    location_page: "Profile Popout",
                    guild_id: e
                }), (0, s.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await l.el("736139").then(l.bind(l, "736139"));
                    return l => (0, n.jsx)(t, {
                        ...l,
                        guildId: e
                    })
                })
            }
        },
        572943: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                usePlatformAllowed: function() {
                    return p
                },
                usePlatforms: function() {
                    return T
                },
                useLegacyPlatformType: function() {
                    return h
                }
            });
            var n = l("884691"),
                s = l("917351"),
                a = l.n(s),
                i = l("446674"),
                r = l("376556"),
                o = l("695702"),
                u = l("47319"),
                d = l("697218"),
                c = l("49111"),
                f = l("894282");
            let m = {
                    [c.PlatformTypes.INSTAGRAM]: ["1036753656588017764"]
                },
                E = new Map([
                    [c.PlatformTypes.INSTAGRAM, new Date(2023, 1, 18).getTime()]
                ]);

            function p(e) {
                let {
                    forUserProfile: t
                } = e, l = (0, i.useStateFromStores)([d.default], () => d.default.getCurrentUser()), n = o.PlayStationVoiceExperiment.useExperiment({
                    location: "f2f7ef_1"
                }, {
                    autoTrackExposure: !1
                }).allowPlayStationStaging;
                return e => {
                    var s;
                    return e.type === c.PlatformTypes.PLAYSTATION_STAGING ? n : !!(void 0 !== l && (null === (s = m[e.type]) || void 0 === s ? void 0 : s.includes(l.id))) || !!t || e.enabled
                }
            }

            function T() {
                var e;
                let t = (0, i.useStateFromStores)([u.default], () => u.default.getAccounts()),
                    l = p({
                        forUserProfile: !1
                    }),
                    s = n.useMemo(() => {
                        let e = new Set;
                        return t.forEach(t => e.add(t.type)), e
                    }, [t]);
                return a.sortBy(r.default.filter(l), [t => !(E.has(t.type) && Date.now() < (null !== (e = E.get(t.type)) && void 0 !== e ? e : 0) + 2592e6), e => s.has(e.type), e => e.hasMetadata, e => !c.ACTIVITY_PLATFORM_TYPES.has(e.type), e => e.name])
            }

            function h(e) {
                let [t, l] = n.useState(!1);

                function s(e) {
                    let {
                        key: t
                    } = e;
                    t === f.KeyboardKeysUpdated.SHIFT && l(!0)
                }

                function a(e) {
                    let {
                        key: t
                    } = e;
                    t === f.KeyboardKeysUpdated.SHIFT && l(!1)
                }
                return (n.useEffect(() => (window.addEventListener("keydown", s), window.addEventListener("keyup", a), () => {
                    window.removeEventListener("keydown", s), window.removeEventListener("keyup", a)
                }), []), t && e === c.PlatformTypes.TWITTER) ? c.PlatformTypes.TWITTER_LEGACY : e
            }
        },
        216049: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("65597"),
                s = l("42203"),
                a = l("26989"),
                i = l("535013");

            function r(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = (0, n.default)([a.default], () => null != e ? a.default.getMember(e.id, t) : null, [e, t]),
                    u = (0, n.default)([s.default], () => s.default.getChannel(l), [l]),
                    d = (0, n.default)([s.default], () => s.default.getChannel(null == u ? void 0 : u.parent_id), [u]);
                return null == e || null == o ? null : (0, i.getVisibleConnectionsRole)({
                    guild: e,
                    guildMember: o,
                    channel: null != u && u.isThread() && null != d ? d : u,
                    onlyChannelConnectionRoles: r
                })
            }
        },
        816499: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                generateRedditMetadataItems: function() {
                    return E
                },
                generateTwitterMetadataItems: function() {
                    return p
                },
                generateSteamMetadataItems: function() {
                    return T
                },
                generatePaypalMetadataItems: function() {
                    return h
                },
                generateEbayMetadataItems: function() {
                    return _
                },
                generateTikTokMetadataItems: function() {
                    return I
                },
                generateRoleConnectionMetadataItems: function() {
                    return S
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                i = l("917351"),
                r = l.n(i),
                o = l("77078"),
                u = l("240481"),
                d = l("535013"),
                c = l("214509"),
                f = l("782340"),
                m = l("536271");

            function E(e) {
                var t;
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    s = [],
                    a = Number(null !== (t = e[c.MetadataFields.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
                    i = "1" === e[c.MetadataFields.REDDIT_GOLD],
                    r = "1" === e[c.MetadataFields.REDDIT_MOD];
                return a > -1 && s.push((0, n.jsx)(g, {
                    className: l,
                    count: a,
                    label: f.default.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
                }, c.MetadataFields.REDDIT_TOTAL_KARMA)), i && s.push((0, n.jsx)(v, {
                    className: l,
                    label: f.default.Messages.CONNECTIONS_REDDIT_GOLD
                }, c.MetadataFields.REDDIT_GOLD)), r && s.push((0, n.jsx)(v, {
                    className: l,
                    label: f.default.Messages.CONNECTIONS_REDDIT_MOD
                }, c.MetadataFields.REDDIT_MOD)), s
            }

            function p(e) {
                var t, l;
                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    a = [],
                    i = Number(null !== (t = e[c.MetadataFields.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
                    r = Number(null !== (l = e[c.MetadataFields.TWITTER_FOLLOWERS_COUNT]) && void 0 !== l ? l : -1);
                return i > -1 && a.push((0, n.jsx)(g, {
                    className: s,
                    count: i,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
                }, c.MetadataFields.TWITTER_STATUSES_COUNT)), r > -1 && a.push((0, n.jsx)(g, {
                    className: s,
                    count: r,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
                }, c.MetadataFields.TWITTER_FOLLOWERS_COUNT)), a
            }

            function T(e) {
                var t, s, a;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    r = [],
                    o = Number(null !== (t = e[c.MetadataFields.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
                    u = Number(null !== (s = e[c.MetadataFields.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== s ? s : -1),
                    d = Number(null !== (a = e[c.MetadataFields.STEAM_ITEM_COUNT_TF2]) && void 0 !== a ? a : -1);
                return o > -1 && r.push((0, n.jsx)(g, {
                    className: i,
                    count: o,
                    label: f.default.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
                }, c.MetadataFields.STEAM_GAME_COUNT)), u > -1 && r.push((0, n.jsx)(C, {
                    className: i,
                    label: f.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                        count: u
                    }),
                    imageSrc: l("142226"),
                    imageAlt: f.default.Messages.CONNECTIONS_STEAM_DOTA2
                }, c.MetadataFields.STEAM_ITEM_COUNT_DOTA2)), d > -1 && r.push((0, n.jsx)(C, {
                    className: i,
                    label: f.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                        count: d
                    }),
                    imageSrc: l("449236"),
                    imageAlt: f.default.Messages.CONNECTIONS_STEAM_TF2
                }, c.MetadataFields.STEAM_ITEM_COUNT_TF2)), r
            }

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    l = [],
                    s = "1" === e[c.MetadataFields.PAYPAL_VERIFIED];
                return s && l.push((0, n.jsx)(v, {
                    className: a(t, m.paypalVerifiedTag),
                    label: f.default.Messages.CONNECTIONS_PAYPAL_VERIFIED
                }, c.MetadataFields.PAYPAL_VERIFIED)), l
            }

            function _(e) {
                var t;
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    s = [],
                    a = Number(null !== (t = e[c.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
                    i = "1" === e[c.MetadataFields.EBAY_TOP_RATED_SELLER];
                return a > 0 && s.push((0, n.jsx)(g, {
                    className: l,
                    count: a,
                    label: f.default.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                    percent: !0
                }, c.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE)), i && s.push((0, n.jsx)(v, {
                    className: l,
                    label: f.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                }, c.MetadataFields.EBAY_TOP_RATED_SELLER)), s
            }

            function I(e) {
                var t, l, s;
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    i = [],
                    r = "1" === e[c.MetadataFields.TIKTOK_VERIFIED],
                    o = Number(null !== (t = e[c.MetadataFields.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
                    u = Number(null !== (l = e[c.MetadataFields.TIKTOK_FOLLOWING_COUNT]) && void 0 !== l ? l : -1),
                    d = Number(null !== (s = e[c.MetadataFields.TIKTOK_LIKES_COUNT]) && void 0 !== s ? s : -1);
                return o > -1 && i.push((0, n.jsx)(g, {
                    className: a,
                    count: o,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
                }, c.MetadataFields.TIKTOK_FOLLOWER_COUNT)), u > -1 && i.push((0, n.jsx)(g, {
                    className: a,
                    count: u,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
                }, c.MetadataFields.TIKTOK_FOLLOWING_COUNT)), d > -1 && i.push((0, n.jsx)(g, {
                    className: a,
                    count: d,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
                }, c.MetadataFields.TIKTOK_LIKES_COUNT)), r && i.push((0, n.jsx)(v, {
                    className: a,
                    label: f.default.Messages.CONNECTIONS_TIKTOK_VERIFIED
                }, c.MetadataFields.TIKTOK_VERIFIED)), i
            }

            function S(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    s = [],
                    a = Object.keys(e.metadata);
                if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === a.length) return s;
                let i = r.sortBy(a, t => {
                    var l, n;
                    return null === (n = e.application_metadata) || void 0 === n ? void 0 : null === (l = n[t]) || void 0 === l ? void 0 : l.name
                });
                for (let a of i) {
                    let i = e.application_metadata[a];
                    if (null == i) continue;
                    let r = e.metadata[a];
                    try {
                        switch (i.type) {
                            case c.MetadataItemTypes.BOOLEAN_EQUAL:
                            case c.MetadataItemTypes.BOOLEAN_NOT_EQUAL: {
                                let e = i.type === c.MetadataItemTypes.BOOLEAN_EQUAL && "1" === r || i.type === c.MetadataItemTypes.BOOLEAN_NOT_EQUAL && "1" !== r;
                                e && s.push((0, n.jsx)(v, {
                                    className: t,
                                    label: i.name
                                }, i.key))
                            }
                            break;
                            case c.MetadataItemTypes.DATETIME_GREATER_THAN_EQUAL:
                            case c.MetadataItemTypes.DATETIME_LESS_THAN_EQUAL:
                                s.push((0, n.jsx)(A, {
                                    className: t,
                                    date: r,
                                    locale: l,
                                    label: i.name
                                }, i.key));
                                break;
                            case c.MetadataItemTypes.INTEGER_EQUAL:
                            case c.MetadataItemTypes.INTEGER_NOT_EQUAL:
                            case c.MetadataItemTypes.INTEGER_GREATER_THAN_EQUAL:
                            case c.MetadataItemTypes.INTEGER_LESS_THAN_EQUAL:
                                s.push((0, n.jsx)(g, {
                                    className: t,
                                    count: Number(r),
                                    label: i.name
                                }, i.key))
                        }
                    } catch (e) {}
                }
                return s
            }

            function g(e) {
                let t, {
                        count: l,
                        label: s,
                        className: i,
                        percent: r
                    } = e,
                    d = (0, u.shortenAndLocalizeNumber)(l) + (r ? "%" : "");
                return t = "string" == typeof s ? f.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                    name: s,
                    value: d
                }) : s.format({
                    value: d
                }), (0, n.jsx)(o.Text, {
                    className: a(m.connectedAccountVanityMetadata, i),
                    variant: "text-xs/normal",
                    color: "interactive-active",
                    children: t
                })
            }

            function A(e) {
                let {
                    date: t,
                    locale: l,
                    label: s,
                    className: i
                } = e;
                return (0, n.jsx)(o.Text, {
                    className: a(m.connectedAccountVanityMetadata, i),
                    variant: "text-xs/normal",
                    color: "interactive-active",
                    children: f.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                        value: (0, d.getCreatedAtDate)(t, l),
                        name: s
                    })
                })
            }

            function C(e) {
                let {
                    label: t,
                    imageSrc: l,
                    imageAlt: s,
                    className: i
                } = e;
                return (0, n.jsxs)("div", {
                    className: a(m.connectedAccountVanityMetadata, m.connectedAccountVanityMetadataItem, i),
                    children: [(0, n.jsx)(o.Tooltip, {
                        text: s,
                        children: e => (0, n.jsx)("img", {
                            ...e,
                            src: l,
                            alt: s,
                            className: m.connectedAccountVanityMetadataItemIcon
                        })
                    }), (0, n.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "interactive-active",
                        children: t
                    })]
                })
            }

            function v(e) {
                let {
                    label: t,
                    className: l
                } = e;
                return (0, n.jsx)(o.Text, {
                    variant: "text-xs/semibold",
                    color: "interactive-active",
                    className: a(m.connectedAccountVanityMetadata, m.connectedAccountVanityMetadataTag, l),
                    children: t
                })
            }
        },
        339023: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                i = l("509043"),
                r = l("446674"),
                o = l("669491"),
                u = l("77078"),
                d = l("206230"),
                c = l("83900"),
                f = l("391866");

            function m(e) {
                let t, {
                        color: l,
                        size: s,
                        forcedIconColor: m,
                        className: E,
                        iconClassName: p
                    } = e,
                    [T, h] = (0, r.useStateFromStoresArray)([d.default], () => [d.default.desaturateUserColors, d.default.saturation]),
                    _ = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_300).hex(),
                    I = (0, i.hex2int)(null != l ? l : _),
                    S = (0, i.int2hsl)(I, !1, T ? h : null);
                t = null != m ? m : .3 > (0, i.getDarkness)(I) ? o.default.unsafe_rawColors.PRIMARY_630.css : o.default.unsafe_rawColors.WHITE_500.css;
                let g = s / 8;
                return (0, n.jsx)("div", {
                    style: {
                        background: S,
                        width: s,
                        height: s,
                        borderRadius: s,
                        lineHeight: "".concat(s, "px")
                    },
                    className: E,
                    children: (0, n.jsx)(c.default, {
                        color: t,
                        className: a(f.linkIcon, p),
                        width: s - 2 * g,
                        height: s - 2 * g,
                        style: {
                            margin: g
                        }
                    })
                })
            }
        },
        526190: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("509043"),
                a = l("446674"),
                i = l("669491"),
                r = l("77078"),
                o = l("206230"),
                u = l("931138"),
                d = l("486952"),
                c = l("782340");

            function f(e) {
                let t, {
                        color: l,
                        size: f,
                        forcedIconColor: m,
                        className: E,
                        iconClassName: p,
                        tooltipText: T
                    } = e,
                    [h, _] = (0, a.useStateFromStoresArray)([o.default], () => [o.default.desaturateUserColors, o.default.saturation]),
                    I = (0, r.useToken)(i.default.unsafe_rawColors.PRIMARY_300).hex(),
                    S = (0, s.hex2int)(null != l ? l : I),
                    g = (0, s.int2hsl)(S, !1, h ? _ : null);
                return t = null != m ? m : .3 > (0, s.getDarkness)(S) ? i.default.unsafe_rawColors.PRIMARY_630.css : i.default.unsafe_rawColors.WHITE_500.css, (0, n.jsx)(r.Tooltip, {
                    text: null != T ? T : c.default.Messages.CONNECTIONS_ROLE_OFFICIAL_ICON_TOOLTIP,
                    children: e => (0, n.jsx)(u.default, {
                        ...e,
                        className: E,
                        color: g,
                        size: f,
                        children: (0, n.jsx)(d.default, {
                            color: t,
                            height: f,
                            width: f,
                            className: p
                        })
                    })
                })
            }
        },
        235145: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useGetDismissibleContent: function() {
                    return m
                },
                useDangerouslyPeekDismissibleContents: function() {
                    return E
                }
            });
            var n = l("884691"),
                s = l("446674"),
                a = l("374363"),
                i = l("162771"),
                r = l("674268"),
                o = l("989691"),
                u = l("862853"),
                d = l("10641"),
                c = l("846614"),
                f = l("397336");

            function m(e, t, l) {
                let m = (0, s.useStateFromStores)([a.default], () => {
                        var e;
                        return null === (e = a.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                    }),
                    E = (0, s.useStateFromStores)([i.default], () => i.default.getGuildId()),
                    p = (0, c.useNewUserDismissibleContent)(e),
                    T = null;
                a.default.hasLoaded(f.UserSettingsTypes.PRELOADED_USER_SETTINGS) ? T = p.find(e => null == m || !(0, r.hasBit)(m, e)) : null != m && (T = p.find(e => !(0, r.hasBit)(m, e)));
                let h = (0, u.default)(e => null != T && e.currentlyShown.has(T)),
                    _ = (0, s.useStateFromStores)([o.default], () => null != T && o.default.hasUserHitDCCap(T));
                n.useEffect(() => {
                    if (null != T) return (0, d.requestMarkDismissibleContentAsShown)(T, {
                        groupName: t,
                        guildId: E
                    }, l), () => {
                        if (null == T) return;
                        let e = !o.default.hasUserHitDCCap();
                        (0, u.removeCandidateContent)({
                            content: T,
                            groupName: t
                        }, e)
                    }
                }, [T, t, E, _, l]);
                let I = n.useCallback(e => {
                    null != T && (0, d.markDismissibleContentAsDismissed)(T, {
                        dismissAction: e,
                        groupName: t,
                        guildId: E
                    })
                }, [T, t, E]);
                return [h && null != T ? T : null, I]
            }

            function E(e) {
                let t = (0, s.useStateFromStores)([a.default], () => {
                    var e;
                    return null === (e = a.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                });
                return e.filter(e => null != t && !(0, r.hasBit)(t, e))
            }
        },
        509802: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useDismissibleContentGroup: function() {
                    return d
                },
                default: function() {
                    return c
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("65597"),
                i = l("901165"),
                r = l("495226"),
                o = l("235145"),
                u = l("994428");

            function d(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = (0, a.default)([i.default], () => !!__OVERLAY__ && i.default.isInstanceUILocked()),
                    [d, c] = (0, o.useGetDismissibleContent)(e, t, n),
                    f = !l && null != d && !r.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(d);
                return s.useEffect(() => () => {
                    f && c(u.ContentDismissActionType.AUTO_DISMISS)
                }, [f, c]), [d, c]
            }

            function c(e) {
                let {
                    contentTypes: t,
                    children: l,
                    groupName: s,
                    bypassAutoDismiss: a
                } = e, [i, r] = d(t, s, a);
                return (0, n.jsx)(n.Fragment, {
                    children: l({
                        visibleContent: i,
                        markAsDismissed: r
                    })
                })
            }
        },
        695702: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                PlayStationVoiceExperiment: function() {
                    return s
                }
            });
            var n = l("862205");
            let s = (0, n.createExperiment)({
                kind: "user",
                id: "2022-08_churro_experiment",
                label: "PS5 Voice Experiment",
                defaultConfig: {
                    allowPlayStationStaging: !1
                },
                treatments: [{
                    id: 3,
                    label: "PS Experiment + upsells + Staging",
                    config: {
                        allowPlayStationStaging: !0
                    }
                }]
            })
        },
        405645: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                getRoleIconProps: function() {
                    return r
                },
                useRoleIcon: function() {
                    return o
                },
                useRoleIconForPreview: function() {
                    return u
                }
            });
            var n = l("884691"),
                s = l("446674"),
                a = l("305961"),
                i = l("689226");

            function r(e, t) {
                var l;
                let {
                    customIconSrc: n,
                    unicodeEmoji: s
                } = null !== (l = (0, i.getRoleIconData)(e, t)) && void 0 !== l ? l : {};
                if (null != n || null != s) return {
                    src: n,
                    name: e.name,
                    roleId: e.id,
                    size: t,
                    unicodeEmoji: s
                }
            }
            let o = e => {
                    let {
                        guildId: t,
                        roleId: l,
                        size: o = 20
                    } = e, u = (0, s.useStateFromStores)([a.default], () => a.default.getGuild(t));
                    return n.useMemo(() => {
                        if (null == u || null == l) return;
                        let e = u.roles[l];
                        if ((0, i.canGuildUseRoleIcons)(u, e)) return r(e, o)
                    }, [u, l, o])
                },
                u = (e, t) => {
                    let l = (0, s.useStateFromStores)([a.default], () => a.default.getGuild(e));
                    if (null != l && (0, i.canGuildUseRoleIcons)(l, t)) return r(t)
                }
        },
        92274: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                AddFriendProminenceExperimentDesktop: function() {
                    return s
                }
            });
            var n = l("862205");
            let s = (0, n.createExperiment)({
                kind: "user",
                id: "2023-10_add_friend_prominence_desktop",
                label: "Make adding friends more prominent (desktop profile)",
                defaultConfig: {
                    moreAddFriend: !1,
                    messageButton: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable add friend button",
                    config: {
                        moreAddFriend: !0,
                        messageButton: !1
                    }
                }, {
                    id: 2,
                    label: "enable both buttons",
                    config: {
                        moreAddFriend: !0,
                        messageButton: !0
                    }
                }]
            });
            (0, n.createExperiment)({
                kind: "user",
                id: "2023-10_add_friend_prominence",
                label: "Make adding friends more prominent (mobile DM)",
                defaultConfig: {
                    moreAddFriend: !1,
                    messageButton: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable",
                    config: {
                        moreAddFriend: !0,
                        messageButton: !1
                    }
                }]
            })
        },
        769791: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                openPremiumSite: function() {
                    return o
                },
                openTrack: function() {
                    return u
                },
                openAlbum: function() {
                    return d
                },
                openArtist: function() {
                    return c
                }
            });
            var n = l("968194"),
                s = l("773336"),
                a = l("155815"),
                i = l("450484");

            function r(e, t, l) {
                let r;
                !(0, s.isDesktop)() && (r = window.open("", "_blank")), (0, n.getMetadata)(e, t).then(e => l(e)).then(e => {
                    let {
                        resourceType: t,
                        resourceId: l
                    } = e, n = a.default.isProtocolRegistered() ? i.SpotifyEndpoints.PLAYER_OPEN(t, l) : i.SpotifyEndpoints.WEB_OPEN(t, l);
                    null != r ? r.location.href = n : window.open(n)
                }).catch(() => {
                    null != r && r.close()
                })
            }

            function o() {
                window.open(i.SpotifyEndpoints.PREMIUM_SITE)
            }

            function u(e) {
                let {
                    sync_id: t
                } = e;
                if (null == t) return;
                let l = i.SpotifyResourceTypes.TRACK,
                    n = a.default.isProtocolRegistered() ? i.SpotifyEndpoints.PLAYER_OPEN(l, t) : i.SpotifyEndpoints.WEB_OPEN(l, t);
                window.open(n)
            }

            function d(e, t) {
                r(e, t, e => {
                    let {
                        album_id: t
                    } = e;
                    if (null == t) throw Error("no album id in metadata");
                    return {
                        resourceType: i.SpotifyResourceTypes.ALBUM,
                        resourceId: t
                    }
                })
            }

            function c(e, t, l) {
                r(e, t, e => {
                    let {
                        artist_ids: t
                    } = e;
                    if (null == t) throw Error("no artist ids in metadata");
                    let n = t[l];
                    if (null == n) throw Error("invalid artist index");
                    return {
                        resourceType: i.SpotifyResourceTypes.ARTIST,
                        resourceId: n
                    }
                })
            }
        },
        564594: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("376341"),
                a = l.n(s),
                i = l("77078"),
                r = l("145131"),
                o = l("936629"),
                u = l("996866"),
                d = l("228974");

            function c(e) {
                let {
                    activity: t,
                    user: l,
                    source: s,
                    ...c
                } = e, {
                    label: f,
                    tooltip: m,
                    loading: E,
                    disabled: p,
                    onClick: T
                } = (0, u.useSpotifyPlayAction)(t, l, s);
                return (0, n.jsx)(i.Tooltip, {
                    text: m,
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: l
                        } = e;
                        return (0, n.jsx)(i.Button, {
                            ...a(c, ["channelId", "guildId"]),
                            onClick: T,
                            onMouseEnter: t,
                            onMouseLeave: l,
                            disabled: p,
                            submitting: E,
                            children: (0, n.jsxs)(r.default, {
                                align: r.default.Align.CENTER,
                                children: [(0, n.jsx)(o.default, {
                                    className: d.spotifyButtonLogo
                                }), f]
                            })
                        })
                    }
                })
            }
        },
        854937: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                i = l("77078"),
                r = l("616225"),
                o = l("387111"),
                u = l("996866"),
                d = l("228974");

            function c(e) {
                let {
                    activity: t,
                    user: l,
                    channelId: s,
                    guildId: c,
                    source: f,
                    size: m,
                    className: E,
                    ...p
                } = e, {
                    tooltip: T,
                    loading: h,
                    disabled: _,
                    onClick: I
                } = (0, u.useSpotifySyncAction)(t, l, f, o.default.getNickname(c, s, l));
                return (0, n.jsx)(i.Tooltip, {
                    text: T,
                    children: e => {
                        let {
                            onMouseEnter: l,
                            onMouseLeave: s
                        } = e;
                        return (0, n.jsx)(i.Button, {
                            ...p,
                            size: a(m, d.iconButtonSize),
                            className: a(E, d.iconButton),
                            onClick: I,
                            onMouseEnter: l,
                            onMouseLeave: s,
                            disabled: _,
                            submitting: h,
                            "aria-label": null != T ? T : t.name,
                            children: (0, n.jsx)(r.default, {
                                className: d.listenAlongIcon
                            })
                        })
                    }
                })
            }
        },
        996866: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useSpotifyPlayAction: function() {
                    return _
                },
                useSpotifySyncAction: function() {
                    return I
                },
                useSpotifyJoinAction: function() {
                    return S
                }
            });
            var n = l("884691"),
                s = l("446674"),
                a = l("862337"),
                i = l("84339"),
                r = l("271938"),
                o = l("158998"),
                u = l("662285"),
                d = l("782911"),
                c = l("629414"),
                f = l("53887"),
                m = l("486150"),
                E = l("555759"),
                p = l("450484");

            function T(e) {
                let {
                    currentUserTrackId: t,
                    syncingWithUser: l,
                    syncingWithParty: s
                } = e, [r, o] = n.useState(!1), [u] = n.useState(() => new a.Timeout), d = (0, i.default)(t);
                n.useEffect(() => {
                    r && (t !== d || l || s) && (o(!1), u.stop())
                }, [t, d, l, s, r, u]);
                let c = n.useCallback(() => {
                        o(!0), u.start(3e4, () => o(!1))
                    }, [u]),
                    f = n.useCallback(() => {
                        o(!1), u.stop()
                    }, [u]);
                return n.useEffect(() => () => u.stop(), [u]), {
                    loading: r,
                    startLoading: c,
                    clearLoading: f
                }
            }

            function h(e, t) {
                return (0, s.useStateFromStoresObject)([u.default, r.default], () => (0, f.default)(u.default, r.default, t, e), [e, t])
            }

            function _(e, t, l) {
                let s = h(e, t),
                    {
                        notPlayable: a,
                        isCurrentUser: i,
                        playingSameTrack: r
                    } = s,
                    {
                        loading: o,
                        startLoading: u,
                        clearLoading: f
                    } = T(s),
                    m = n.useCallback(() => {
                        u(), (0, E.default)(s, p.SpotifyActionTypes.USER_ACTIVITY_PLAY, l).catch(f)
                    }, [s, l, u, f]);
                return {
                    label: (0, d.default)(s, p.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                    tooltip: (0, c.default)(s, p.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                    disabled: !o && (i || a || r),
                    loading: o,
                    onClick: m,
                    spotifyData: s
                }
            }

            function I(e, t, l, s) {
                let a = null != s ? s : o.default.getName(t),
                    i = h(e, t),
                    {
                        syncingWithUser: r,
                        syncingWithParty: u,
                        isCurrentUser: f
                    } = i,
                    {
                        loading: E,
                        startLoading: _,
                        clearLoading: I
                    } = T(i),
                    S = n.useCallback(() => {
                        _(), (0, m.default)(i, p.SpotifyActionTypes.USER_ACTIVITY_SYNC, l).catch(I)
                    }, [i, l, _, I]);
                return {
                    label: (0, d.default)(i, p.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                    tooltip: (0, c.default)(i, p.SpotifyActionTypes.USER_ACTIVITY_SYNC, a),
                    disabled: !E && (f || r || u),
                    loading: E,
                    onClick: S,
                    spotifyData: i
                }
            }

            function S(e, t, l) {
                let s = h(e, t),
                    {
                        notPlayable: a,
                        syncingWithUser: i,
                        syncingWithParty: r,
                        isCurrentUser: o
                    } = s,
                    {
                        loading: u,
                        startLoading: f,
                        clearLoading: E
                    } = T(s),
                    _ = n.useCallback(() => {
                        f(), (0, m.default)(s, p.SpotifyActionTypes.EMBED_SYNC, l).catch(E)
                    }, [s, l, f, E]);
                return {
                    label: (0, d.default)(s, p.SpotifyActionTypes.EMBED_SYNC),
                    tooltip: (0, c.default)(s, p.SpotifyActionTypes.EMBED_SYNC),
                    disabled: !u && (o || i || r || a),
                    loading: u,
                    onClick: _,
                    spotifyData: s
                }
            }
        },
        5667: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                CaretPosition: function() {
                    return a
                },
                ButtonLayout: function() {
                    return i
                },
                default: function() {
                    return E
                }
            });
            var n, s, a, i, r = l("37983"),
                o = l("884691"),
                u = l("414456"),
                d = l.n(u),
                c = l("77078"),
                f = l("994428"),
                m = l("142190");

            function E(e) {
                let {
                    className: t,
                    header: l,
                    headerClassName: n,
                    content: s,
                    contentClassName: u,
                    buttonCTA: E,
                    secondaryButtonCTA: p,
                    onClick: T,
                    onSecondaryClick: h,
                    onComponentMount: _,
                    asset: I,
                    markAsDismissed: S,
                    caretPosition: g = a.TOP_CENTER,
                    buttonLayout: A = i.ADJACENT
                } = e;
                o.useEffect(() => {
                    null == _ || _()
                }, []);
                let C = null != p;
                return (0, r.jsxs)("div", {
                    className: d(t, m.upsellTooltipWrapper, m[g]),
                    children: [I, null == l ? null : (0, r.jsx)(c.Heading, {
                        className: d(n, m.upsellTooltipHeader),
                        variant: "heading-md/semibold",
                        children: l
                    }), (0, r.jsx)(c.Text, {
                        color: "always-white",
                        className: d(u, m.content),
                        variant: "text-sm/normal",
                        children: s
                    }), null != E || C ? (0, r.jsxs)("div", {
                        className: d(m.upsellButtonsContainer, {
                            [m.upsellButtonsAdjacent]: A === i.ADJACENT,
                            [m.upsellButtonsStacked]: A === i.STACKED
                        }),
                        children: [C ? (0, r.jsx)(c.Button, {
                            color: c.Button.Colors.BRAND,
                            onClick: () => {
                                null == h || h(), null == S || S(f.ContentDismissActionType.SECONDARY)
                            },
                            children: p
                        }) : null, null == E ? null : (0, r.jsx)(c.Button, {
                            className: d({
                                [m.fullWidth]: !C
                            }),
                            color: c.Button.Colors.BRAND,
                            look: c.Button.Looks.INVERTED,
                            onClick: e => {
                                T(e), null == S || S(f.ContentDismissActionType.PRIMARY)
                            },
                            children: E
                        })]
                    }) : null]
                })
            }(n = a || (a = {})).TOP_CENTER = "caretTopCenter", n.TOP_RIGHT = "caretTopRight", n.TOP_LEFT = "caretTopLeft", n.BOTTOM_CENTER = "caretBottomCenter", n.BOTTOM_LEFT = "caretBottomLeft", n.LEFT_CENTER = "caretLeftCenter", n.RIGHT_CENTER = "caretRightCenter", (s = i || (i = {}))[s.ADJACENT = 0] = "ADJACENT", s[s.STACKED = 1] = "STACKED", E.CaretPosition = a, E.ButtonLayout = i
        },
        388491: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useProfileThemeValues: function() {
                    return m
                },
                getProfileTheme: function() {
                    return E
                },
                getValueInColorGradientByPercentage: function() {
                    return p
                },
                useAvatarBorderColor: function() {
                    return h
                },
                calculateButtonColor: function() {
                    return _
                },
                useMessageInputBorderColor: function() {
                    return I
                },
                useDividerColor: function() {
                    return S
                }
            });
            var n = l("884691"),
                s = l("917351"),
                a = l("509043"),
                i = l("65597"),
                r = l("669491"),
                o = l("819855"),
                u = l("206230"),
                d = l("449918"),
                c = l("172182"),
                f = l("49111");

            function m(e) {
                let t = (0, i.default)([u.default], () => u.default.saturation);
                return (0, n.useMemo)(() => null == e ? null : {
                    overlaySyncedWithUserTheme: r.default.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    overlay: r.default.colors.PROFILE_GRADIENT_OVERLAY.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    sectionBox: r.default.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    messageInputBorder: r.default.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    dividerOpacity: e === r.default.themes.DARK ? .24 : .12,
                    noteBackgroundColor: r.default.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    profileBodyBackgroundHover: r.default.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    rolePillBackgroundColor: r.default.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    rolePillBorderColor: r.default.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    icon: r.default.colors.INTERACTIVE_NORMAL.resolve({
                        theme: e,
                        saturation: t
                    }).hsl()
                }, [e, t])
            }

            function E(e) {
                if (null == e) return null;
                let t = (0, a.getDarkness)(e);
                return t > .5 ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT
            }

            function p(e, t, l) {
                let n = l / 100,
                    s = 1 - n;
                return [Math.round(e[0] * s + t[0] * n), Math.round(e[1] * s + t[1] * n), Math.round(e[2] * s + t[2] * n)]
            }

            function T(e, t) {
                let l = (0, a.int2rgbArray)(e);
                if (null == t) return 0;
                let n = c.default.parseString(t);
                if (null == n) return 0;
                let s = [n.red, n.green, n.blue],
                    i = [l[0], l[1], l[2]],
                    r = n.alpha,
                    [o, u, d] = s.map((e, t) => Math.floor(r * e + (1 - r) * i[t]));
                return (0, a.rgb2int)("rgba(".concat(o, ", ").concat(u, ", ").concat(d, ")"))
            }

            function h(e, t, l) {
                let n = m(e);
                return null == n || null == t ? null : T(t, l ? n.overlaySyncedWithUserTheme : n.overlay)
            }
            let _ = (0, s.memoize)(e => {
                let t = (0, o.getContrastingColor)(e, {
                    base: "#ffffff",
                    contrastRatio: o.WCAGContrastRatios.HighContrastText
                });
                return (0, a.hex2int)(t)
            }, e => e);

            function I(e, t) {
                let l = m(e);
                return null != l && null != t ? T(t, null == l ? void 0 : l.messageInputBorder) : null
            }

            function S(e, t) {
                let l = (0, d.useColorValue)(f.Color.WHITE_500).hex;
                return (0, o.isThemeDark)(e) ? (0, a.hex2int)(l) : null != t ? _(t) : null
            }
        },
        999203: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("446674"),
                s = l("650509"),
                a = l("90592"),
                i = l("713135"),
                r = l("49111");

            function o(e) {
                var t;
                let {
                    user: l,
                    guildId: o
                } = e, u = (0, n.useStateFromStores)([i.default], () => {
                    var e;
                    return null === (e = i.default.getUserProfile(l.id)) || void 0 === e ? void 0 : e.application
                }, [l]), {
                    applicationSubscriptionListingsShown: d
                } = (0, s.default)({
                    applicationId: null == u ? void 0 : u.id,
                    groupListingId: null == u ? void 0 : u.primarySkuId,
                    guildId: o
                }), {
                    activeSubscriptionListing: c,
                    activeEntitlement: f,
                    subscriptionGroupListing: m
                } = (0, s.useActiveSubscriptionListingForApplication)(null == u ? void 0 : u.id, o), E = null !== (t = null == m ? void 0 : m.sku_flags) && void 0 !== t ? t : 0, p = (0, a.isApplicationUserSubscription)(E) || null != o && o !== r.ME && (0, a.isApplicationGuildSubscription)(E), T = null != f;
                return d ? {
                    botUpgraded: T,
                    botUpgradeable: !T && d && p,
                    activeSubscriptionListing: c,
                    subscriptionGroupListing: m
                } : {
                    botUpgraded: !1,
                    botUpgradeable: !1,
                    activeSubscriptionListing: null,
                    subscriptionGroupListing: null
                }
            }
        },
        561845: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var n = l("446674"),
                s = l("235275"),
                a = l("267567"),
                i = l("845579"),
                r = l("271938"),
                o = l("26989"),
                u = l("27618"),
                d = l("680894");

            function c(e, t) {
                let l = (0, n.useStateFromStores)([r.default], () => r.default.getId() === e),
                    c = (0, n.useStateFromStores)([a.default], () => null != t && a.default.isLurking(t)),
                    f = i.RestrictedGuildIds.useSetting(),
                    m = (0, s.useIsDMsToClydeEnabled)() && e === d.CLYDE_AI_USER_ID;
                return (0, n.useStateFromStores)([u.default, o.default], () => !l && !c && (u.default.isFriend(e) || null != o.default.memberOf(e).find(e => !f.includes(e))) || m)
            }
        },
        874419: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return S
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("446674"),
                i = l("151426"),
                r = l("79112"),
                o = l("685665"),
                u = l("10641"),
                d = l("5667"),
                c = l("783142"),
                f = l("713135"),
                m = l("49111"),
                E = l("994428"),
                p = l("397336"),
                T = l("782340"),
                h = l("393036");
            let _ = i.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP,
                I = e => {
                    (0, u.markDismissibleContentAsDismissed)(_, {
                        dismissAction: e,
                        forceTrack: !0
                    })
                };
            var S = e => {
                let {
                    position: t,
                    onClose: l
                } = e, {
                    analyticsLocations: i
                } = (0, o.default)(), u = (0, a.useStateFromStores)([f.default], () => f.default.getIsAccessibilityTooltipViewed());
                return s.useEffect(() => u ? () => I(E.ContentDismissActionType.AUTO) : () => (0, c.handleProfileAccessibilityTooltipViewed)(), [u]), (0, n.jsx)(d.default, {
                    markAsDismissed: I,
                    header: T.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_TITLE,
                    headerClassName: h.header,
                    content: (0, n.jsx)("div", {
                        className: h.content,
                        children: T.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_DESCRIPTION
                    }),
                    buttonCTA: T.default.Messages.TAKE_ME_THERE,
                    onClick: () => {
                        null == l || l(), r.default.open(m.UserSettingsSections.ACCESSIBILITY, null, {
                            scrollPosition: p.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME,
                            analyticsLocations: i
                        })
                    },
                    secondaryButtonCTA: T.default.Messages.DISMISS,
                    onSecondaryClick: l,
                    buttonLayout: d.ButtonLayout.STACKED,
                    caretPosition: "left" === t ? d.CaretPosition.RIGHT_CENTER : d.CaretPosition.LEFT_CENTER
                })
            }
        },
        641055: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return _
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("446674"),
                i = l("151426"),
                r = l("819855"),
                o = l("77078"),
                u = l("841098"),
                d = l("340066"),
                c = l("206230"),
                f = l("10641"),
                m = l("874419"),
                E = l("430312"),
                p = l("590456"),
                T = l("393036");
            let h = () => {
                let e = (0, f.useIsDismissibleContentDismissed)(i.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP),
                    t = (0, a.useStateFromStores)([c.default], () => c.default.syncProfileThemeWithUserTheme),
                    l = (0, u.default)(),
                    {
                        profileTheme: n
                    } = s.useContext(E.UserProfileContext),
                    o = (0, r.isThemeDark)(l) && (0, r.isThemeLight)(n);
                return !e && !t && o
            };
            var _ = e => {
                let {
                    onTooltipClose: t
                } = e, {
                    profileType: l
                } = s.useContext(E.UserProfileContext), a = l === p.UserProfileTypes.POPOUT, i = h(), [r, u] = s.useState(!a && i);
                return (0, d.default)(() => u(i), a ? 300 : null), (0, n.jsx)(o.Popout, {
                    shouldShow: r,
                    position: "left",
                    align: "center",
                    spacing: 32,
                    ignoreModalClicks: !0,
                    onRequestClose: () => {
                        !a && u(!1)
                    },
                    renderPopout: e => {
                        let {
                            position: l
                        } = e;
                        return (0, n.jsx)(m.default, {
                            position: null != l ? l : "left",
                            onClose: t
                        })
                    },
                    children: () => (0, n.jsx)("span", {
                        className: T.hidden
                    })
                })
            }
        },
        609734: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return A
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                i = l("77078"),
                r = l("272030"),
                o = l("85027"),
                u = l("33942"),
                d = l("252063"),
                c = l("42203"),
                f = l("18494"),
                m = l("191814"),
                E = l("758710"),
                p = l("351825"),
                T = l("306160"),
                h = l("253981"),
                _ = l("613676"),
                I = l("49111"),
                S = l("782340"),
                g = l("834680");

            function A(e) {
                var t;
                let {
                    application: l,
                    className: s
                } = e, A = c.default.getChannel(f.default.getChannelId()), {
                    appsInGDMEnabled: C,
                    availableApplications: v
                } = (0, d.usePrivateChannelIntegrationState)({
                    channelId: null !== (t = null == A ? void 0 : A.id) && void 0 !== t ? t : ""
                });
                if (null == l || !(0, _.canInstallApplication)(l.id, l.customInstallUrl, l.installParams)) return null;
                let N = C && null != v.find(e => e.id === (null == l ? void 0 : l.id));
                return (0, n.jsx)(i.Button, {
                    color: i.Button.Colors.PRIMARY,
                    look: i.Button.Looks.FILLED,
                    size: i.Button.Sizes.SMALL,
                    onContextMenu: T.SUPPORTS_COPY ? e => {
                        var t, s;
                        let a = (0, o.getApplicationInstallURL)({
                            id: l.id,
                            custom_install_url: null !== (t = l.customInstallUrl) && void 0 !== t ? t : void 0,
                            install_params: null !== (s = l.installParams) && void 0 !== s ? s : void 0
                        });
                        (0, r.openContextMenu)(e, e => (0, n.jsx)(i.Menu, {
                            navId: "component-button",
                            onClose: r.closeContextMenu,
                            "aria-label": S.default.Messages.APPLICATION_ADD_TO_SERVER_ACTIONS,
                            onSelect: void 0,
                            ...e,
                            children: (0, n.jsx)(i.MenuGroup, {
                                children: (0, n.jsx)(i.MenuItem, {
                                    id: "copy",
                                    label: S.default.Messages.APPLICATION_ADD_TO_SERVER_ACTIONS_COPY,
                                    action: () => (0, T.copy)(a)
                                })
                            })
                        }))
                    } : void 0,
                    onClick: () => {
                        N ? (0, u.openOAuth2Modal)({
                            clientId: l.id,
                            scopes: [I.OAuth2Scopes.APPLICATIONS_COMMANDS],
                            channelId: A.id,
                            disableGuildSelect: !0
                        }) : (0, _.installApplication)({
                            applicationId: l.id,
                            customInstallUrl: l.customInstallUrl,
                            installParams: l.installParams
                        })
                    },
                    className: a(g.applicationInstallButton, s),
                    children: (0, n.jsxs)("div", {
                        className: g.applicationInstallButtonContent,
                        children: [(0, n.jsx)(p.default, {
                            width: 16,
                            height: 16
                        }), (0, n.jsx)(m.default, {
                            size: 4,
                            horizontal: !0
                        }), (0, n.jsx)("span", {
                            className: g.applicationInstallButtonText,
                            children: N ? S.default.Messages.ADD : S.default.Messages.APPLICATION_ADD_BUTTON
                        }), null == l.customInstallUrl || h.default.isDiscordUrl(l.customInstallUrl) ? null : (0, n.jsx)(E.default, {
                            className: g.launchIcon,
                            width: 16,
                            height: 16
                        })]
                    })
                })
            }
        },
        213736: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return S
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("414456"),
                i = l.n(a),
                r = l("753809"),
                o = l("77078"),
                u = l("545158"),
                d = l("368639"),
                c = l("37785"),
                f = l("62843"),
                m = l("837899"),
                E = l("425190"),
                p = l("701909"),
                T = l("49111"),
                h = l("782340"),
                _ = l("474963"),
                I = l("632215");

            function S(e) {
                let {
                    className: t,
                    lineClamp: l = 6,
                    isExpanded: a = !1
                } = e, [S, g] = s.useState(a), A = s.useMemo(() => (0, d.parseBioReact)(h.default.Messages.MORE_INFO_CLYDE_LEGAL), []);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(o.Collapsible, {
                        isExpanded: S,
                        collapsibleContent: (0, n.jsx)("div", {
                            className: i(t, I.markup),
                            children: (0, n.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                lineClamp: l,
                                children: (0, n.jsx)(f.MessagesInteractionContext.Provider, {
                                    value: {
                                        disableAnimations: !0,
                                        disableInteractions: !1
                                    },
                                    children: A
                                })
                            })
                        }),
                        className: _.collapseable,
                        children: e => {
                            let {
                                onClick: t
                            } = e;
                            return (0, n.jsx)(o.Clickable, {
                                onClick: e => {
                                    g(!S), t(e)
                                },
                                children: (0, n.jsxs)("div", {
                                    className: _.header,
                                    children: [(0, n.jsx)(o.Heading, {
                                        variant: "eyebrow",
                                        className: _.userInfoSectionHeader,
                                        children: h.default.Messages.MORE_INFO
                                    }), S ? (0, n.jsx)(E.default, {
                                        className: _.arrow
                                    }) : (0, n.jsx)(m.default, {
                                        className: _.arrow
                                    })]
                                })
                            })
                        }
                    }), (0, n.jsxs)(o.Text, {
                        className: _.helpCenterCta,
                        variant: "text-sm/medium",
                        children: [(0, n.jsx)(r.LinkIcon, {
                            color: "var(--text-link)",
                            className: _.linkIcon
                        }), (0, n.jsx)(c.default, {
                            onClick: () => (0, u.default)(p.default.getArticleURL(T.HelpdeskArticles.CLYDE_AI), !0),
                            children: h.default.Messages.MORE_INFO_HELP_CENTER
                        })]
                    })]
                })
            }
        },
        880114: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("65597"),
                a = l("77078"),
                i = l("535013"),
                r = l("915639"),
                o = l("109024"),
                u = l("153769"),
                d = l("299039"),
                c = l("782340"),
                f = l("334099");

            function m(e) {
                let {
                    userId: t,
                    headingClassName: l,
                    textClassName: m,
                    guild: E,
                    guildMember: p
                } = e, T = (0, s.default)([r.default], () => r.default.locale), h = null != E && null != p;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(a.Heading, {
                        variant: "eyebrow",
                        className: l,
                        children: h ? c.default.Messages.USER_PROFILE_MEMBER_SINCE : c.default.Messages.USER_PROFILE_DISCORD_MEMBER_SINCE
                    }), (0, n.jsxs)("div", {
                        className: f.memberSinceContainer,
                        children: [h && (0, n.jsx)(a.Tooltip, {
                            text: c.default.Messages.DISCORD_NAME,
                            children: e => (0, n.jsx)(u.default, {
                                ...e,
                                className: f.discordIcon
                            })
                        }), (0, n.jsx)(a.Text, {
                            className: m,
                            variant: "text-sm/normal",
                            children: (0, i.getCreatedAtDate)(d.default.extractTimestamp(t), T)
                        }), null != E && null != p && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("div", {
                                className: f.divider
                            }), (0, n.jsx)(a.Tooltip, {
                                text: E.name,
                                children: e => (0, n.jsx)(o.default, {
                                    ...e,
                                    guild: E,
                                    size: o.default.Sizes.SMOL
                                })
                            }), (0, n.jsx)(a.Text, {
                                className: m,
                                variant: "text-sm/normal",
                                children: (0, i.getCreatedAtDate)(p.joinedAt, T)
                            })]
                        })]
                    })]
                })
            }
        },
        824140: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ConnectedUserAccount: function() {
                    return N
                },
                ConnectedApplicationUserRoleAccount: function() {
                    return M
                },
                ConnectedUserAccounts: function() {
                    return y
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("414456"),
                i = l.n(a),
                r = l("669491"),
                o = l("819855"),
                u = l("77078"),
                d = l("308289"),
                c = l("376556"),
                f = l("716241"),
                m = l("572943"),
                E = l("535013"),
                p = l("816499"),
                T = l("526190"),
                h = l("766274"),
                _ = l("246053"),
                I = l("867544"),
                S = l("128259"),
                g = l("49111"),
                A = l("214509"),
                C = l("782340"),
                v = l("825507");

            function N(e) {
                var t, l;
                let s, a, d, {
                    connectedAccount: h,
                    theme: N,
                    locale: M,
                    userId: y,
                    className: O,
                    showMetadata: R,
                    showInvisibleIcon: x
                } = e;
                null == R && (R = !0);
                let L = null !== (l = h.metadata) && void 0 !== l ? l : {},
                    P = R ? (0, E.getCreatedAtDate)(L[A.MetadataFields.CREATED_AT], M) : null,
                    b = (0, u.useToken)(r.default.unsafe_rawColors.TWITTER).hex(),
                    D = C.default.Messages.CONNECTION_VERIFIED;
                if (R) switch (h.type) {
                    case g.PlatformTypes.REDDIT:
                        s = (0, p.generateRedditMetadataItems)(L);
                        break;
                    case g.PlatformTypes.STEAM:
                        s = (0, p.generateSteamMetadataItems)(L);
                        break;
                    case g.PlatformTypes.TWITTER: {
                        s = (0, p.generateTwitterMetadataItems)(L);
                        let e = "1" === L[A.MetadataFields.TWITTER_VERIFIED];
                        e && (a = b, D = C.default.Messages.CONNECTION_VERIFIED_ON_TWITTER);
                        break
                    }
                    case g.PlatformTypes.PAYPAL:
                        s = (0, p.generatePaypalMetadataItems)(L);
                        break;
                    case g.PlatformTypes.EBAY:
                        s = (0, p.generateEbayMetadataItems)(L);
                        break;
                    case g.PlatformTypes.TIKTOK:
                        s = (0, p.generateTikTokMetadataItems)(L)
                }
                let j = c.default.get((0, m.useLegacyPlatformType)(h.type)),
                    U = null == j ? void 0 : null === (t = j.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(j, h);
                null != x && x ? d = (0, n.jsx)(I.default, {
                    className: i(v.connectedAccountOpenIconContainer, v.connectedAccountHideIcon),
                    foregroundColor: "currentColor"
                }) : null != U && (d = (0, n.jsx)(u.Anchor, {
                    href: U,
                    onClick: e => {
                        var t, l;
                        t = h.type, l = y, (0, f.trackWithMetadata)(g.AnalyticEvents.CONNECTED_ACCOUNT_VIEWED, {
                            platform_type: t,
                            other_user_id: l
                        }), (0, S.handleClick)({
                            href: U,
                            trusted: (null == j ? void 0 : j.type) !== g.PlatformTypes.DOMAIN
                        }, e)
                    },
                    children: (0, n.jsx)(_.default, {
                        className: v.connectedAccountOpenIcon,
                        direction: _.default.Directions.RIGHT
                    })
                }));
                let F = (0, u.useToken)(r.default.colors.INTERACTIVE_MUTED).hex(),
                    w = (0, u.useToken)(r.default.colors.INTERACTIVE_ACTIVE).hex(),
                    G = h.verified ? (0, n.jsx)(T.default, {
                        className: v.connectedAccountVerifiedIcon,
                        color: null != a ? a : F,
                        forcedIconColor: w,
                        size: 16,
                        tooltipText: D
                    }) : null;
                return (0, n.jsxs)("div", {
                    className: i(v.connectedAccountContainer, null != s && s.length > 0 || null != P ? v.connectedAccountContainerWithMetadata : null, O),
                    children: [(0, n.jsxs)("div", {
                        className: v.connectedAccount,
                        children: [(0, n.jsx)(u.Tooltip, {
                            text: null == j ? void 0 : j.name,
                            children: e => (0, n.jsx)("img", {
                                ...e,
                                alt: C.default.Messages.IMG_ALT_LOGO.format({
                                    name: null == j ? void 0 : j.name
                                }),
                                className: v.connectedAccountIcon,
                                src: (0, o.isThemeDark)(N) ? null == j ? void 0 : j.icon.darkSVG : null == j ? void 0 : j.icon.lightSVG
                            })
                        }), (0, n.jsxs)("div", {
                            className: v.connectedAccountNameContainer,
                            children: [(0, n.jsxs)("div", {
                                className: v.connectedAccountName,
                                children: [(0, n.jsxs)("div", {
                                    className: v.connectedAccountNameTextContainer,
                                    children: [(0, n.jsx)(u.Tooltip, {
                                        overflowOnly: !0,
                                        text: h.name,
                                        children: e => (0, n.jsx)(u.Text, {
                                            ...e,
                                            variant: "text-md/semibold",
                                            color: "interactive-active",
                                            className: v.connectedAccountNameText,
                                            children: h.name
                                        })
                                    }), G]
                                }), d]
                            }), null != P ? (0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: C.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
                                    date: P
                                })
                            }) : null]
                        })]
                    }), null != s && s.length > 0 ? (0, n.jsx)("div", {
                        className: v.connectedAccountChildren,
                        children: s
                    }) : null]
                })
            }

            function M(e) {
                let {
                    applicationRoleConnection: t,
                    className: l,
                    locale: s
                } = e, a = (0, p.generateRoleConnectionMetadataItems)(t, void 0, s);
                return (0, n.jsxs)("div", {
                    className: i(v.connectedAccountContainer, null != a && a.length > 0 ? v.connectedAccountContainerWithMetadata : null, l),
                    children: [(0, n.jsx)("div", {
                        className: v.connectedAccount,
                        children: (0, n.jsxs)("div", {
                            className: v.connectedAccountNameContainer,
                            children: [null != t.platform_name ? (0, n.jsx)(u.Text, {
                                variant: "eyebrow",
                                color: "interactive-normal",
                                children: t.platform_name
                            }) : null, null != t.platform_username ? (0, n.jsx)("div", {
                                className: v.connectedAccountName,
                                children: (0, n.jsx)("div", {
                                    className: v.connectedAccountNameTextContainer,
                                    children: (0, n.jsx)(u.Text, {
                                        variant: "text-md/semibold",
                                        color: "interactive-active",
                                        className: v.connectedAccountNameText,
                                        children: t.platform_username
                                    })
                                })
                            }) : null]
                        })
                    }), null != a && a.length > 0 ? (0, n.jsx)("div", {
                        className: i(v.connectedAccountChildren, v.connectedAccountChildrenNoIcon),
                        children: a
                    }) : null, (0, n.jsx)("div", {
                        children: (0, n.jsx)("div", {
                            className: v.connectedAccountPoweredBy,
                            children: (0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: C.default.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
                                    applicationHook: () => (0, n.jsxs)("div", {
                                        className: v.connectedAccountPoweredByText,
                                        children: [null != t.application.bot ? (0, n.jsx)(d.default, {
                                            user: new h.default(t.application.bot),
                                            size: u.AvatarSizes.SIZE_16
                                        }) : null, (0, n.jsx)(u.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-normal",
                                            children: t.application.name
                                        })]
                                    })
                                })
                            })
                        })
                    })]
                })
            }
            let y = s.forwardRef(function(e, t) {
                let {
                    connectedAccounts: l,
                    theme: s,
                    locale: a,
                    className: r,
                    userId: o
                } = e;
                if (null == l || 0 === l.length) return null;
                let u = l.filter(e => c.default.isSupported(e.type)).map(e => (0, n.jsx)(N, {
                        connectedAccount: e,
                        theme: s,
                        locale: a,
                        userId: o
                    }, "".concat(e.type, ":").concat(e.id))),
                    d = [],
                    f = [];
                for (let e = 0; e < u.length; e++) {
                    let t = u[e];
                    e % 2 == 0 ? d.push(t) : f.push(t)
                }
                return (0, n.jsxs)("div", {
                    ref: t,
                    className: i(v.connectedAccounts, r),
                    children: [(0, n.jsx)("div", {
                        className: v.connectedAccountsColumn,
                        children: d
                    }), (0, n.jsx)("div", {
                        className: v.connectedAccountsColumn,
                        children: f
                    })]
                })
            })
        },
        717226: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                i = l("77078"),
                r = l("235275"),
                o = l("49111"),
                u = l("782340"),
                d = l("355718");

            function c(e) {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, n.jsx)(i.Button, {
                    ...l,
                    look: i.Button.Looks.FILLED,
                    size: i.Button.Sizes.SMALL,
                    className: a(d.actionButton, t)
                })
            }

            function f(e) {
                let {
                    isCurrentUser: t,
                    user: l,
                    relationshipType: s,
                    onAddFriend: a,
                    onIgnoreFriend: f,
                    onSendMessage: m,
                    addFriendText: E
                } = e, p = (0, r.useIsDMsToClydeEnabled)();
                return t || s === o.RelationshipTypes.BLOCKED || l.isClyde() && !p ? null : s === o.RelationshipTypes.FRIEND || l.bot || l.isClyde() ? (0, n.jsx)(c, {
                    color: i.Button.Colors.GREEN,
                    onClick: m,
                    children: u.default.Messages.SEND_MESSAGE
                }) : s === o.RelationshipTypes.PENDING_OUTGOING ? (0, n.jsx)(c, {
                    color: i.Button.Colors.GREEN,
                    disabled: !0,
                    children: u.default.Messages.ADD_FRIEND_BUTTON_AFTER
                }) : s === o.RelationshipTypes.PENDING_INCOMING ? (0, n.jsxs)("div", {
                    className: d.pendingIncoming,
                    children: [(0, n.jsx)(c, {
                        color: i.Button.Colors.GREEN,
                        onClick: a,
                        children: u.default.Messages.FRIEND_REQUEST_ACCEPT
                    }), (0, n.jsx)(c, {
                        color: i.Button.Colors.PRIMARY,
                        onClick: f,
                        className: d.actionRightButton,
                        children: u.default.Messages.FRIEND_REQUEST_IGNORE
                    })]
                }) : (0, n.jsx)(c, {
                    color: i.Button.Colors.GREEN,
                    onClick: a,
                    children: null != E ? E : u.default.Messages.ADD_FRIEND_BUTTON
                })
            }
        },
        981601: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return B
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("627445"),
                i = l.n(a),
                r = l("446674"),
                o = l("77078"),
                u = l("823411"),
                d = l("901582"),
                c = l("252744"),
                f = l("750560"),
                m = l("575365"),
                E = l("502651"),
                p = l("812204"),
                T = l("685665"),
                h = l("373469"),
                _ = l("546463"),
                I = l("26989"),
                S = l("305961"),
                g = l("824563"),
                A = l("27618"),
                C = l("697218"),
                v = l("599110"),
                N = l("713135"),
                M = l("561845"),
                y = l("217513"),
                O = l("641055"),
                R = l("430312"),
                x = l("763866"),
                L = l("789321"),
                P = l("935409"),
                b = l("849674"),
                D = l("590456"),
                j = l("49111"),
                U = l("450484"),
                F = l("304118");

            function w(e) {
                e.stopPropagation()
            }

            function G(e) {
                let {
                    user: t,
                    guildId: l,
                    channelId: a,
                    setNote: i,
                    closePopout: C,
                    setPopoutRef: G,
                    disableUserProfileLink: B = __OVERLAY__,
                    analyticsParams: k = {}
                } = e, Y = s.useRef(null), V = (0, y.default)(t.id, l), H = (0, c.default)(Y), W = (0, r.useStateFromStores)([N.default], () => {
                    var e;
                    return null === (e = N.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
                }), {
                    AnalyticsLocationProvider: K
                } = (0, T.default)(p.default.PROFILE_POPOUT), z = (0, r.useStateFromStores)([S.default], () => null != l ? S.default.getGuild(l) : null), Z = (0, r.useStateFromStores)([I.default], () => null != l ? I.default.getMember(l, t.id) : null), X = t.isNonUserBot(), {
                    activity: J,
                    customStatusActivity: Q,
                    status: q,
                    isMobile: $,
                    isApplicationStreaming: ee
                } = (0, r.useStateFromStoresObject)([h.default, g.default], () => {
                    let e = null != h.default.getAnyStreamForUser(t.id);
                    return {
                        activity: g.default.findActivity(t.id, t => {
                            let {
                                type: l
                            } = t;
                            return e ? l === j.ActivityTypes.PLAYING : l !== j.ActivityTypes.CUSTOM_STATUS
                        }),
                        customStatusActivity: g.default.findActivity(t.id, e => {
                            let {
                                type: t
                            } = e;
                            return t === j.ActivityTypes.CUSTOM_STATUS
                        }),
                        status: X ? null : g.default.getStatus(t.id),
                        isMobile: g.default.isMobileOnline(t.id),
                        isApplicationStreaming: e
                    }
                }), [et, el] = s.useState(!1), en = s.useMemo(() => null != l ? {
                    [l]: [t.id]
                } : {}, [l, t.id]);
                (0, f.useSubscribeGuildMembers)(en);
                let es = (0, M.default)(t.id, l),
                    {
                        shouldShow: ea,
                        markAsDismissed: ei,
                        isReadyForAnimation: er
                    } = (0, b.useShouldShowUserPopoutCollectiblesUpsell)(t, l),
                    eo = s.useMemo(() => ({
                        marginTop: ea ? L.DEFAULT_COLLECTIBLES_UPSELL_HEIGHT : void 0
                    }), [ea]),
                    eu = s.useCallback(() => null != J && null != J.application_id && null == _.default.getGame(J.application_id) ? u.default.fetchApplication(J.application_id) : Promise.resolve(), [J]);
                return s.useEffect(() => {
                    null == G || G(null == Y ? void 0 : Y.current)
                }, [Y, G]), s.useEffect(() => {
                    async function e() {
                        await eu(), (null == l || (null == Z ? void 0 : Z.fullProfileLoadedTimestamp) != null) && (function() {
                            var e, n, s;
                            let i, r, o;
                            null != J && (i = J.party, r = J.assets, o = null != J.application_id ? _.default.getGame(J.application_id) : null);
                            let u = q;
                            q === j.StatusTypes.ONLINE && (u = $ ? j.AnalyticsUserStatusTypes.ONLINE_MOBILE : j.AnalyticsUserStatusTypes.ONLINE_DESKTOP);
                            let d = null != Z ? {
                                    has_nickname: !!(null == Z ? void 0 : Z.nick),
                                    has_guild_member_avatar: !!(null == Z ? void 0 : Z.avatar),
                                    has_guild_member_banner: !!(null == V ? void 0 : V.isUsingGuildMemberBanner()),
                                    has_guild_member_bio: !!(null == V ? void 0 : V.isUsingGuildMemberBio())
                                } : {},
                                c = null != W ? {
                                    other_application_id: null == W ? void 0 : W.id,
                                    other_application_name: t.toString()
                                } : {};
                            v.default.track(j.AnalyticEvents.OPEN_POPOUT, {
                                type: "Profile Popout",
                                guild_id: l,
                                channel_id: a,
                                other_user_id: t.id,
                                application_id: null != J ? J.application_id : void 0,
                                application_name: null != J ? J.name : void 0,
                                sku_id: null != o ? o.primarySkuId : null,
                                is_friend: A.default.isFriend(t.id),
                                has_images: !!(null !== (s = null === (e = r) || void 0 === e ? void 0 : e.large_image) && void 0 !== s ? s : null === (n = r) || void 0 === n ? void 0 : n.small_image),
                                party_max: null != i && null != i.size ? i.size[1] : void 0,
                                party_id: null != i ? i.id : void 0,
                                party_platform: null != i && (0, U.isSpotifyParty)(i.id) ? j.PlatformTypes.SPOTIFY : null,
                                game_platform: (0, m.default)(J),
                                profile_user_status: u,
                                is_streaming: ee,
                                has_custom_status: null != Q,
                                has_avatar_decoration: null != t.avatarDecoration,
                                has_profile_effect: (null == V ? void 0 : V.profileEffectID) != null,
                                profile_has_nitro_customization: null != V && (null == V ? void 0 : V.hasPremiumCustomization()),
                                profile_has_theme_color_customized: null != V && V.hasThemeColors(),
                                profile_has_theme_animation: (null == V ? void 0 : V.popoutAnimationParticleType) != null,
                                ...d,
                                ...c,
                                ...k
                            })
                        }(), el(!0))
                    }!et && e()
                }, [Z, et, l]), s.useEffect(() => {
                    eu()
                }, [eu]), (0, n.jsx)(K, {
                    children: (0, n.jsx)(d.default, {
                        section: j.AnalyticsSections.PROFILE_POPOUT,
                        children: (0, n.jsx)(o.Dialog, {
                            ref: Y,
                            "aria-label": t.username,
                            onClick: w,
                            onContextMenu: w,
                            style: eo,
                            children: (0, n.jsxs)(R.default, {
                                user: t,
                                guildId: l,
                                profileType: D.UserProfileTypes.POPOUT,
                                className: ea ? F.hasCollectiblesUpsell : void 0,
                                showOutOfBoundaryComponents: er,
                                children: [(0, n.jsx)(P.default, {
                                    user: t,
                                    displayProfile: V,
                                    guildId: l,
                                    channelId: a,
                                    onClose: () => null == C ? void 0 : C(),
                                    isMobile: $,
                                    isStreaming: (0, E.default)(J),
                                    status: q,
                                    disableUserProfileLink: B,
                                    isHovering: H,
                                    showCollectiblesSocialUpsell: ea,
                                    dismissCollectiblesSocialUpsell: ei
                                }), (0, n.jsxs)(R.default.Inner, {
                                    children: [(0, n.jsx)(O.default, {
                                        onTooltipClose: C
                                    }), (0, n.jsx)(x.default, {
                                        activity: J,
                                        customStatusActivity: Q,
                                        displayProfile: V,
                                        user: t,
                                        guild: z,
                                        guildMember: Z,
                                        channelId: a,
                                        onClose: C,
                                        setNote: i,
                                        canDM: es
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
            var B = s.memo(function(e) {
                let {
                    userId: t,
                    user: l,
                    ...s
                } = e, a = (0, r.useStateFromStores)([C.default], () => C.default.getUser(t), [t]), o = null != l ? l : a;
                return i(null != o, "Unexpected missing user"), (0, n.jsx)(G, {
                    user: o,
                    ...s
                })
            })
        },
        763866: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return Q
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("414456"),
                i = l.n(a),
                r = l("446674"),
                o = l("77078"),
                u = l("450911"),
                d = l("736964"),
                c = l("335189"),
                f = l("618017"),
                m = l("980215"),
                E = l("235767"),
                p = l("190045"),
                T = l("419806"),
                h = l("92274"),
                _ = l("271938"),
                I = l("42203"),
                S = l("26989"),
                g = l("957255"),
                A = l("27618"),
                C = l("102985"),
                v = l("987772"),
                N = l("164424"),
                M = l("387111"),
                y = l("158998"),
                O = l("713135"),
                R = l("906889"),
                x = l("717226"),
                L = l("10532"),
                P = l("648149"),
                b = l("915712"),
                D = l("261523"),
                j = l("369869"),
                U = l("545590"),
                F = l("972595"),
                w = l("316095"),
                G = l("802279"),
                B = l("577172"),
                k = l("465215"),
                Y = l("301998"),
                V = l("379657"),
                H = l("853780"),
                W = l("574191"),
                K = l("491250"),
                z = l("49111"),
                Z = l("782340"),
                X = l("956330"),
                J = l("398664");

            function Q(e) {
                var t, l, a;
                let {
                    activity: Q,
                    customStatusActivity: q,
                    user: $,
                    displayProfile: ee,
                    guild: et,
                    guildMember: el,
                    channelId: en,
                    onClose: es,
                    setNote: ea = !1,
                    canDM: ei,
                    hideNote: er = !1,
                    showCopiableUsername: eo = !1
                } = e, eu = (0, r.useStateFromStores)([C.default], () => C.default.hidePersonalInformation), ed = (0, r.useStateFromStores)([O.default], () => {
                    var e;
                    return null === (e = O.default.getUserProfile($.id)) || void 0 === e ? void 0 : e.application
                }), [ec, ef] = s.useState(!1), [em, eE] = s.useState(!1), ep = (0, r.useStateFromStores)([I.default], () => I.default.getChannel(en)), eT = (0, r.useStateFromStores)([g.default], () => g.default.can(z.Permissions.USE_CLYDE_AI, ep)), {
                    profileTheme: eh
                } = (0, R.default)($, ee), e_ = s.useRef(null), [eI, eS] = s.useState(!0), eg = s.useCallback(() => {
                    let {
                        current: e
                    } = e_;
                    null != e && eS(0 === e.getScrollerState().scrollTop)
                }, []), eA = (0, f.canEditClydeAIProfile)(et), eC = (0, m.canUseCustomClydeProfiles)(et), ev = (0, r.useStateFromStores)([S.default], () => S.default.isMember(null == et ? void 0 : et.id, $.id));
                s.useLayoutEffect(() => {
                    var e;
                    let {
                        current: t
                    } = e_;
                    null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
                        top: 0
                    }))
                }, []);
                let eN = (0, r.useStateFromStores)([A.default], () => A.default.getRelationshipType($.id)),
                    eM = $.isNonUserBot() && !$.isClyde() || $.isClyde() && eC || !ei,
                    ey = !$.bot && !$.isClyde() && eN !== z.RelationshipTypes.BLOCKED,
                    {
                        moreAddFriend: eO,
                        messageButton: eR
                    } = h.AddFriendProminenceExperimentDesktop.useExperiment({
                        location: "user popout"
                    }, {
                        disable: !ey,
                        autoTrackExposure: !0
                    }),
                    ex = eO && eN !== z.RelationshipTypes.FRIEND,
                    eL = eR && !eM;
                if ($.isSystemUser()) return null;
                if ($.isNonUserBot() && !$.isClyde()) return (0, n.jsx)(K.default, {
                    user: $,
                    nickname: null,
                    pronouns: null,
                    className: X.usernameSection,
                    lastSection: !0
                });
                let eP = null !== (t = M.default.getNickname(null == et ? void 0 : et.id, en, $)) && void 0 !== t ? t : y.default.getName($);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(K.default, {
                        className: X.usernameSection,
                        user: $,
                        nickname: eP,
                        pronouns: null == ee ? void 0 : ee.pronouns,
                        usernameIcon: $.hasAvatarForGuild(null == et ? void 0 : et.id) && (0, n.jsx)(P.default, {
                            user: $,
                            nickname: eP
                        }),
                        shouldCopyOnClick: eo
                    }), $.isClyde() ? (0, n.jsx)("div", {
                        className: X.lastEditedByContainer,
                        children: (0, n.jsx)(E.default, {
                            className: X.lastEditedByTag,
                            guildId: null == et ? void 0 : et.id
                        })
                    }) : null, (0, n.jsxs)(o.HeadingLevel, {
                        children: [(0, n.jsx)(G.default, {
                            className: X.customStatusSection,
                            customStatusActivity: q
                        }), (0, n.jsx)(L.default, {
                            className: X.divider
                        }), $.isClyde() && eA && null != et ? !ev && eC ? eT && !em ? (0, n.jsx)(o.Button, {
                            className: X.editClydeButton,
                            innerClassName: X.editClydeButtonInner,
                            submitting: ec,
                            onClick: async () => {
                                ef(!0);
                                try {
                                    await (0, c.addClydeGuildMember)(et.id), ef(!1)
                                } catch (e) {
                                    ef(!1), eE(!0)
                                }
                            },
                            children: Z.default.Messages.CLYDE_ADD_CLYDE
                        }) : (0, n.jsxs)(o.Text, {
                            className: X.clydeErrorText,
                            variant: "text-sm/normal",
                            color: "text-danger",
                            children: [(0, n.jsx)("img", {
                                className: X.sadClyde,
                                src: J,
                                alt: Z.default.Messages.SAD_CLYDE_ALT_TEXT
                            }), " ", Z.default.Messages.CANNOT_ADD_CLYDE]
                        }) : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)(o.Button, {
                                className: X.editClydeButton,
                                innerClassName: X.editClydeButtonInner,
                                onClick: () => {
                                    null == es || es(), (0, p.default)(et.id)
                                },
                                children: [(0, n.jsx)(v.default, {
                                    className: X.pencilIcon
                                }), " ", Z.default.Messages.EDIT_CLYDE]
                            }), eC ? (0, n.jsxs)(o.Button, {
                                className: X.editClydeButton,
                                innerClassName: X.editClydeButtonInner,
                                color: o.ButtonColors.WHITE,
                                onClick: () => {
                                    null == es || es(), (0, T.default)(et.id)
                                },
                                children: [(0, n.jsx)(N.default, {
                                    className: X.pencilIcon
                                }), " ", Z.default.Messages.SHARE]
                            }) : null]
                        }) : null, (0, n.jsxs)(o.AdvancedScroller, {
                            className: i(X.scroller, {
                                [X.scrollerSeparator]: !eI
                            }),
                            onScroll: eg,
                            ref: e_,
                            children: [(0, n.jsx)(U.default, {
                                user: $,
                                guildId: null == et ? void 0 : et.id
                            }), (0, n.jsx)(j.default, {
                                isUsingGuildBio: null !== (l = null == ee ? void 0 : ee.isUsingGuildMemberBio()) && void 0 !== l && l,
                                bio: null == ee ? void 0 : ee.bio,
                                guild: et,
                                hidePersonalInformation: eu
                            }), $.isClyde() ? (0, n.jsx)(F.default, {}) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(k.default, {
                                    userId: $.id,
                                    guild: et,
                                    guildMember: el
                                }), (0, n.jsx)(b.default, {
                                    activity: Q,
                                    user: $,
                                    guild: et,
                                    channelId: en,
                                    onClose: es
                                }), (null == ed ? void 0 : ed.popularApplicationCommandIds) != null && null != ep ? (0, n.jsx)(V.default, {
                                    applicationId: ed.id,
                                    commandIds: ed.popularApplicationCommandIds,
                                    channel: ep,
                                    guildId: null == et ? void 0 : et.id,
                                    onClick: es
                                }) : null, (0, n.jsx)(D.default, {
                                    user: $,
                                    guildId: null == et ? void 0 : et.id
                                }), (0, n.jsx)(W.default, {
                                    user: $,
                                    guild: et,
                                    guildMember: el,
                                    showBorder: null !== (a = null == ee ? void 0 : ee.canEditThemes) && void 0 !== a && a
                                }), (0, n.jsx)(w.default, {
                                    userId: $.id,
                                    channelId: en,
                                    guild: et,
                                    onClose: es,
                                    theme: eh
                                }), null != ed && void 0 !== en && (0, n.jsx)(H.default, {
                                    channelId: en,
                                    applicationId: ed.id
                                }), (0, n.jsx)(Y.default, {
                                    user: $,
                                    setNote: ea,
                                    autoFocus: !ei,
                                    lastSection: !ei,
                                    hideNote: eu || er
                                })]
                            }), eL ? null : (0, n.jsx)(B.default, {
                                user: $,
                                setNote: ea,
                                canDM: ei,
                                onClose: es,
                                inClydeProfilesExperiment: eC
                            }), ex || eL ? (0, n.jsxs)("div", {
                                className: X.addFriendSection,
                                children: [ex ? (0, n.jsx)(x.default, {
                                    user: $,
                                    isCurrentUser: $.id === _.default.getId(),
                                    relationshipType: eN,
                                    onAddFriend: function() {
                                        d.default.addRelationship({
                                            userId: $.id,
                                            context: {
                                                location: "User Profile Popout"
                                            }
                                        })
                                    },
                                    onIgnoreFriend: function() {
                                        d.default.cancelFriendRequest($.id, {
                                            location: "User Profile Popout"
                                        })
                                    },
                                    onSendMessage: () => {},
                                    addFriendText: Z.default.Messages.FRIENDS_SECTION_ADD_FRIEND
                                }) : null, eL ? (0, n.jsx)(o.Button, {
                                    size: o.Button.Sizes.SMALL,
                                    color: o.Button.Colors.PRIMARY,
                                    onClick: () => u.default.openPrivateChannel($.id),
                                    children: Z.default.Messages.SEND_DM
                                }) : null]
                            }) : null]
                        })]
                    })]
                })
            }
        },
        915712: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("463848"),
                a = l("777003"),
                i = l("49111"),
                r = l("477691");

            function o(e) {
                let {
                    activity: t,
                    user: l,
                    guild: o,
                    channelId: u,
                    onClose: d
                } = e;
                return (0, n.jsx)(a.default, {
                    children: (0, n.jsx)(s.default, {
                        type: s.UserActivityTypes.USER_POPOUT_V2,
                        activity: t,
                        className: r.activity,
                        user: l,
                        guildId: null == o ? void 0 : o.id,
                        channelId: u,
                        source: i.AnalyticsLocations.PROFILE_POPOUT,
                        onOpenGameProfile: d,
                        onAction: d,
                        actionColor: r.buttonColor
                    })
                })
            }
        },
        261523: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("77078"),
                a = l("899604"),
                i = l("999203"),
                r = l("777003"),
                o = l("782340"),
                u = l("391119"),
                d = l("814076");

            function c(e) {
                var t;
                let {
                    user: l,
                    guildId: c
                } = e, {
                    botUpgraded: f,
                    activeSubscriptionListing: m
                } = (0, i.default)({
                    user: l,
                    guildId: c
                }), E = null == m ? void 0 : null === (t = m.sku_benefits) || void 0 === t ? void 0 : t.benefits;
                return null != c && f && null != E && 0 !== E.length ? (0, n.jsxs)(r.default, {
                    children: [(0, n.jsx)(s.Heading, {
                        variant: "eyebrow",
                        className: d.title,
                        children: o.default.Messages.BOT_PROFILE_BENEFITS_HEADING
                    }), (0, n.jsx)("div", {
                        className: u.benefitsContainer,
                        children: E.map((e, t) => (0, n.jsx)(a.default, {
                            showsDescription: !1,
                            emojiContainerClassName: u.emojiContainer,
                            nameTextVariant: "text-sm/normal",
                            nameTextColor: "text-normal",
                            benefit: e
                        }, "".concat(e.name).concat(t)))
                    })]
                }) : null
            }
        },
        545590: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return _
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("446674"),
                a = l("90592"),
                i = l("910861"),
                r = l("153335"),
                o = l("191814"),
                u = l("8161"),
                d = l("613676"),
                c = l("713135"),
                f = l("999203"),
                m = l("609734"),
                E = l("777003"),
                p = l("49111"),
                T = l("782340"),
                h = l("431375");

            function _(e) {
                let {
                    user: t,
                    guildId: l
                } = e, _ = (0, s.useStateFromStores)([c.default], () => {
                    var e;
                    return null === (e = c.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
                }), I = null != _ && (0, d.canInstallApplication)(_.id, _.customInstallUrl, _.installParams), {
                    botUpgradeable: S,
                    subscriptionGroupListing: g
                } = (0, f.default)({
                    user: t,
                    guildId: l
                }), A = null != g ? (0, a.getPayableSubscriptionListing)(g) : null, {
                    openModal: C
                } = (0, r.default)({
                    listing: A,
                    guildId: l,
                    groupListingId: null == g ? void 0 : g.id,
                    showBenefitsFirst: !0,
                    analyticsLocation: p.AnalyticsLocations.BOT_PROFILE_POPOUT
                });
                return I || S ? (0, n.jsx)(E.default, {
                    children: (0, n.jsxs)("div", {
                        className: h.buttonsContainer,
                        children: [(0, n.jsx)(m.default, {
                            application: _,
                            className: h.button
                        }), S && (0, n.jsx)(i.default, {
                            onClick: C,
                            className: h.button,
                            children: (0, n.jsxs)("div", {
                                className: h.botUpgradeButtonContent,
                                children: [(0, n.jsx)(u.default, {
                                    width: 16,
                                    height: 16
                                }), (0, n.jsx)(o.default, {
                                    size: 4,
                                    horizontal: !0
                                }), T.default.Messages.BOT_PROFILE_UPGRADE_CTA]
                            })
                        })]
                    })
                }) : null
            }
        },
        972595: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("213736"),
                a = l("777003"),
                i = l("814076");

            function r(e) {
                let {} = e;
                return (0, n.jsx)(a.default, {
                    className: i.clydeMoreInfo,
                    children: (0, n.jsx)(s.default, {})
                })
            }
        },
        316095: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("414456"),
                i = l.n(a),
                r = l("446674"),
                o = l("77078"),
                u = l("851387"),
                d = l("216049"),
                c = l("915639"),
                f = l("102985"),
                m = l("461380"),
                E = l("713135"),
                p = l("824140"),
                T = l("401642"),
                h = l("777003"),
                _ = l("590456"),
                I = l("49111"),
                S = l("782340"),
                g = l("843482"),
                A = l("814076");

            function C(e) {
                var t, l;
                let a, C, {
                        userId: v,
                        channelId: N,
                        guild: M,
                        theme: y,
                        onClose: O,
                        className: R
                    } = e,
                    x = (0, d.default)(M, v, N),
                    [L, P] = s.useState(new Set),
                    b = (0, r.useStateFromStores)([E.default], () => E.default.getUserProfile(v)),
                    D = null !== (t = null == b ? void 0 : b.connectedAccounts) && void 0 !== t ? t : [],
                    j = null !== (l = null == b ? void 0 : b.applicationRoleConnections) && void 0 !== l ? l : [],
                    U = (0, r.useStateFromStores)([f.default], () => f.default.hidePersonalInformation),
                    F = (0, r.useStateFromStores)([c.default], () => c.default.locale);
                if (s.useEffect(() => {
                        (null == M ? void 0 : M.id) != null && (null == x ? void 0 : x.id) != null && u.default.fetchGuildRoleConnectionsEligibility(M.id, x.id).then(e => {
                            let t = new Set;
                            for (let l of e)
                                for (let {
                                        connection_type: e
                                    }
                                    of l) t.add(e);
                            P(t)
                        })
                    }, [null == M ? void 0 : M.id, null == x ? void 0 : x.id]), U || null == x) return null;
                let w = Array.from(L).map(e => {
                    let t = D.find(t => t.type === e);
                    return null == t ? null : (0, n.jsx)(p.ConnectedUserAccount, {
                        connectedAccount: t,
                        theme: y,
                        locale: F,
                        userId: v
                    }, "".concat(t.type, ":").concat(t.id))
                }).filter(e => null != e);
                return (w.length > 0 && (a = (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(o.Heading, {
                        variant: "eyebrow",
                        className: A.title,
                        children: S.default.Messages.CONNECTIONS
                    }), (0, n.jsxs)("div", {
                        className: i(g.connectionsContainer, R),
                        children: [w, (0, n.jsxs)(o.Clickable, {
                            onClick: function() {
                                (0, T.openUserProfileModal)({
                                    userId: v,
                                    guildId: null == M ? void 0 : M.id,
                                    channelId: N,
                                    section: _.UserProfileSections.USER_INFO_CONNECTIONS,
                                    analyticsLocation: {
                                        section: I.AnalyticsSections.PROFILE_POPOUT
                                    }
                                }), null == O || O()
                            },
                            className: g.connections,
                            children: [(0, n.jsx)(o.Text, {
                                variant: "text-md/semibold",
                                color: "interactive-active",
                                className: g.connectionsText,
                                children: S.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_ALL
                            }), (0, n.jsx)(m.default, {
                                direction: m.default.Directions.RIGHT,
                                className: g.connectionsCaret
                            })]
                        })]
                    })]
                })), j.length > 0 && (C = (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(o.Heading, {
                        variant: "eyebrow",
                        className: A.title,
                        children: S.default.Messages.APPS
                    }), (0, n.jsx)("div", {
                        className: i(g.connectionsContainer, R),
                        children: j.map(e => (0, n.jsx)(p.ConnectedApplicationUserRoleAccount, {
                            applicationRoleConnection: e,
                            locale: F
                        }, e.application.id))
                    })]
                })), null == a && null == C) ? null : (0, n.jsxs)(h.default, {
                    children: [C, a]
                })
            }
        },
        577172: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return N
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("414456"),
                i = l.n(a),
                r = l("394846"),
                o = l("77078"),
                u = l("450911"),
                d = l("36341"),
                c = l("109264"),
                f = l("158998"),
                m = l("777003"),
                E = l("782340"),
                p = l("242379"),
                T = l("107680"),
                h = l("379539"),
                _ = l("714073"),
                I = l("980923"),
                S = l("779585"),
                g = l("900143"),
                A = l("923337");
            let C = [A, T, I, _, S, h, g];

            function v(e) {
                let {
                    userId: t
                } = e, [l, a] = s.useState(!1);
                return s.useLayoutEffect(() => {
                    !l && a(!0)
                }, [l]), (0, n.jsx)("div", {
                    className: p.wumpusWrapper,
                    children: (0, n.jsxs)("div", {
                        className: i(p.wumpus, {
                            [p.wumpusShown]: l
                        }),
                        children: [(0, n.jsx)("img", {
                            className: p.wumpusImage,
                            alt: E.default.Messages.IMG_ALT_ICON.format({
                                name: E.default.Messages.WUMPUS
                            }),
                            src: function() {
                                let e = parseInt(t.slice(-6), 10);
                                return C[e % C.length]
                            }()
                        }), (0, n.jsx)("span", {
                            className: p.wumpusTooltip,
                            children: E.default.Messages.USER_POPOUT_WUMPUS_TOOLTIP
                        })]
                    })
                })
            }

            function N(e) {
                let {
                    user: t,
                    setNote: l,
                    canDM: s,
                    onClose: a,
                    inClydeProfilesExperiment: i = !1
                } = e;
                if (t.isNonUserBot() && !t.isClyde() || t.isClyde() && i || !s) return null;
                let T = s && (0, f.isNewUser)(t) && !t.bot;
                return (0, n.jsxs)(m.default, {
                    className: p.section,
                    lastSection: !0,
                    children: [T && s ? (0, n.jsx)(v, {
                        userId: t.id
                    }) : null, s && t.isClyde() ? (0, n.jsxs)(o.Button, {
                        className: p.messageClydeButton,
                        innerClassName: p.messageClydeButtonInner,
                        onClick: () => {
                            u.default.openPrivateChannel(t.id)
                        },
                        fullWidth: !0,
                        look: o.ButtonLooks.INVERTED,
                        children: [(0, n.jsx)(c.default, {
                            width: 16,
                            height: 16,
                            className: p.messageClydeButtonIcon
                        }), E.default.Messages.CLYDE_SEND_MESSAGE]
                    }) : null, s && !t.isClyde() ? (0, n.jsx)(d.default, {
                        className: p.messageInputContainer,
                        inputClassName: p.messageInput,
                        user: t,
                        onClose: () => null == a ? void 0 : a(),
                        autoFocus: !r.isMobile && !l
                    }) : null]
                })
            }
        },
        465215: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("880114"),
                a = l("777003"),
                i = l("814076");

            function r(e) {
                let {
                    userId: t,
                    guild: l,
                    guildMember: r
                } = e;
                return (0, n.jsx)(a.default, {
                    children: (0, n.jsx)(s.default, {
                        userId: t,
                        guild: l,
                        guildMember: r,
                        headingClassName: i.title,
                        textClassName: i.body
                    })
                })
            }
        },
        301998: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("77078"),
                a = l("910330"),
                i = l("777003"),
                r = l("782340"),
                o = l("920244"),
                u = l("814076");

            function d(e) {
                let {
                    user: t,
                    setNote: l,
                    autoFocus: d,
                    lastSection: c,
                    hideNote: f
                } = e;
                return f ? null : (0, n.jsxs)(i.default, {
                    lastSection: c,
                    children: [(0, n.jsx)(s.Heading, {
                        variant: "eyebrow",
                        className: u.title,
                        children: r.default.Messages.NOTE
                    }), (0, n.jsx)(a.default, {
                        userId: t.id,
                        autoFocus: l || d,
                        className: o.note
                    }, "note")]
                })
            }
        },
        379657: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("77078"),
                i = l("716241"),
                r = l("240249"),
                o = l("781423"),
                u = l("252063"),
                d = l("599110"),
                c = l("777003"),
                f = l("49111"),
                m = l("782340"),
                E = l("640329"),
                p = l("814076");

            function T(e) {
                let {
                    applicationId: t,
                    commandIds: l,
                    channel: T,
                    guildId: h,
                    onClick: _
                } = e;
                (0, u.usePrivateChannelIntegrationState)({
                    channelId: T.id
                });
                let {
                    commands: I
                } = r.useCommandsForApplication(T, t, l), S = s.useMemo(() => null == I ? void 0 : I.filter(e => !0 !== e.nsfw), [I]), g = s.useCallback(e => {
                    null == _ || _(), d.default.track(f.AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, {
                        application_id: t,
                        command_id: e,
                        guild_id: h,
                        ...(0, i.collectChannelAnalyticsMetadataFromId)(T.id)
                    })
                }, [t, T.id, h, _]);
                return null == S || 0 === S.length ? null : (0, n.jsxs)(c.default, {
                    children: [(0, n.jsx)(a.Heading, {
                        variant: "eyebrow",
                        className: p.title,
                        children: m.default.Messages.BOT_PROFILE_SLASH_COMMANDS
                    }), (0, n.jsx)("ul", {
                        className: E.popularApplicationCommandsList,
                        children: S.map(e => (0, n.jsx)("li", {
                            children: (0, n.jsx)(o.CommandClickable, {
                                commandId: e.id,
                                commandName: e.displayName,
                                commandDescription: e.displayDescription,
                                onClick: g,
                                guildId: h,
                                channelId: T.id
                            })
                        }, e.id))
                    })]
                })
            }
        },
        853780: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("77078"),
                a = l("970755"),
                i = l("252063"),
                r = l("777003"),
                o = l("782340"),
                u = l("932741"),
                d = l("814076");

            function c(e) {
                let {
                    applicationId: t,
                    channelId: l
                } = e, {
                    installedIntegrations: c,
                    fetched: f
                } = (0, i.usePrivateChannelIntegrationState)({
                    channelId: l
                }), m = f && void 0 !== c.find(e => e.application.id === t);
                return m ? (0, n.jsxs)(r.default, {
                    children: [(0, n.jsx)(s.Heading, {
                        variant: "eyebrow",
                        className: d.title,
                        children: o.default.Messages.BOT_PROFILE_MANAGE_PRIVATE_CHANNEL_INTEGRATION
                    }), (0, n.jsx)(s.Button, {
                        onClick: () => (0, a.deletePrivateChannelIntegration)(l, t),
                        size: s.Button.Sizes.ICON,
                        color: s.Button.Colors.RED,
                        look: s.Button.Looks.LINK,
                        className: u.button,
                        children: o.default.Messages.BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION
                    })]
                }) : null
            }
        },
        574191: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                i = l("77078"),
                r = l("581583"),
                o = l("777003"),
                u = l("782340"),
                d = l("259236"),
                c = l("814076");

            function f(e) {
                let {
                    user: t,
                    guild: l,
                    guildMember: s,
                    showBorder: f
                } = e;
                return null == l || null == s ? null : (0, n.jsxs)(o.default, {
                    children: [(0, n.jsx)(i.Heading, {
                        variant: "eyebrow",
                        className: c.title,
                        children: u.default.Messages.ROLES_LIST.format({
                            numRoles: s.roles.length
                        })
                    }), (0, n.jsx)(r.default, {
                        roleClassName: a(d.rolePill, {
                            [d.rolePillBorder]: f
                        }),
                        className: d.roles,
                        guild: l,
                        user: t,
                        userRoles: s.roles,
                        disableBorderColor: !0
                    }, "roles")]
                })
            }
        },
        849674: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useShouldShowUserPopoutCollectiblesUpsell: function() {
                    return p
                }
            });
            var n = l("884691"),
                s = l("627445"),
                a = l.n(s),
                i = l("65597"),
                r = l("151426"),
                o = l("875212"),
                u = l("340066"),
                d = l("619935"),
                c = l("729022"),
                f = l("10641"),
                m = l("509802"),
                E = l("697218");
            let p = (e, t) => {
                let l = "useShouldShowUserPopoutCollectiblesUpsell";
                (0, o.useTriggerDebuggingAA)({
                    location: l + "auto on",
                    autoTrackExposure: !0
                }), (0, o.useTriggerDebuggingAA)({
                    location: l + "auto off",
                    autoTrackExposure: !1
                });
                let s = (0, i.default)([E.default], () => E.default.getCurrentUser());
                a(null != s, "currentUser should not be null");
                let p = (0, d.useBlockedPaymentsConfig)(),
                    T = (null == s ? void 0 : s.id) !== e.id && !p,
                    {
                        shouldUpsellAvatarDecoration: h,
                        shouldUpsellProfileEffect: _
                    } = (0, c.default)({
                        currentUser: s,
                        popoutUser: e,
                        guildId: t
                    }),
                    I = n.useMemo(() => {
                        let e = [];
                        return T && (h && e.push(r.DismissibleContent.COLLECTIBLES_USER_POPOUT_UPSELL), _ && e.push(r.DismissibleContent.COLLECTIBLES_PROFILE_EFFECT_SOCIAL_UPSELL)), e
                    }, [h, _, T]),
                    [S, g] = (0, m.useDismissibleContentGroup)(I, void 0, !0),
                    A = S === r.DismissibleContent.COLLECTIBLES_USER_POPOUT_UPSELL || S === r.DismissibleContent.COLLECTIBLES_PROFILE_EFFECT_SOCIAL_UPSELL,
                    C = n.useCallback(e => {
                        h && (0, f.markDismissibleContentAsDismissed)(r.DismissibleContent.COLLECTIBLES_USER_POPOUT_UPSELL, {
                            dismissAction: e,
                            forceTrack: !0
                        }), _ && (0, f.markDismissibleContentAsDismissed)(r.DismissibleContent.COLLECTIBLES_PROFILE_EFFECT_SOCIAL_UPSELL, {
                            dismissAction: e,
                            forceTrack: !0
                        })
                    }, [h, _]),
                    [v, N] = n.useState(!1);
                return (0, u.default)(() => N(!0), A ? 250 : null), {
                    shouldShow: A,
                    markAsDismissed: C,
                    isReadyForAnimation: v
                }
            }
        },
        19766: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                EVERYONE_ID: function() {
                    return v
                },
                MemberListRowTypes: function() {
                    return s
                },
                default: function() {
                    return j
                }
            });
            var n, s, a = l("917351"),
                i = l.n(a),
                r = l("210696"),
                o = l.n(r),
                u = l("316693"),
                d = l("446674"),
                c = l("913144"),
                f = l("991170"),
                m = l("373469"),
                E = l("271938"),
                p = l("42203"),
                T = l("525065"),
                h = l("26989"),
                _ = l("305961"),
                I = l("824563"),
                S = l("101125"),
                g = l("697218"),
                A = l("49111"),
                C = l("782340");
            let v = "everyone";

            function N(e, t, l, n) {
                switch (t) {
                    case A.StatusTypes.ONLINE:
                    case A.StatusTypes.OFFLINE:
                    case A.StatusTypes.UNKNOWN:
                        return {
                            type: s.GROUP, key: t, id: t, get title() {
                                switch (t) {
                                    case A.StatusTypes.ONLINE:
                                        return C.default.Messages.STATUS_ONLINE;
                                    case A.StatusTypes.OFFLINE:
                                        return C.default.Messages.STATUS_OFFLINE;
                                    default:
                                        return C.default.Messages.STATUS_UNKNOWN
                                }
                            }, count: l, index: n
                        };
                    default:
                        let a = _.default.getGuild(e),
                            i = null != a ? a.getRole(t) : null;
                        return {
                            type: s.GROUP, key: t, id: t, title: null != i ? i.name : "", count: l, index: n
                        }
                }
            }

            function M(e, t, l) {
                let n = l === E.default.getId(),
                    a = I.default.isMobileOnline(l),
                    i = n ? S.default.getStatus() : I.default.getStatus(l, e),
                    r = n ? S.default.getActivities() : I.default.getActivities(l, e),
                    o = m.default.getStreamForUser(l, e),
                    u = g.default.getUser(l);
                return null == u ? null : {
                    type: s.MEMBER,
                    ...h.default.getMember(e, l),
                    user: u,
                    status: i,
                    activities: r,
                    applicationStream: o,
                    isOwner: t === l,
                    isMobileOnline: a
                }
            }

            function y(e) {
                let t = p.default.getChannel(e);
                return null == t ? v : null == t.memberListId ? function(e) {
                    return f.default.canEveryone(A.Permissions.VIEW_CHANNEL, e) ? v : o.v3(i(e.permissionOverwrites).reduce((e, t) => {
                        let {
                            id: l,
                            allow: n,
                            deny: s
                        } = t;
                        return u.default.has(n, A.Permissions.VIEW_CHANNEL) ? e.push("allow:".concat(l)) : u.default.has(s, A.Permissions.VIEW_CHANNEL) && e.push("deny:".concat(l)), e
                    }, []).sort().join(",")).toString()
                }(t) : t.memberListId
            }(n = s || (s = {})).GROUP = "GROUP", n.MEMBER = "MEMBER";
            class O {
                updateOwnerId() {
                    let e = _.default.getGuild(this.guildId);
                    if (null == e) return !1;
                    let t = f.default.getGuildVisualOwnerId(e);
                    return this.ownerId !== t && (this.ownerId = t, !0)
                }
                setGroups(e) {
                    let t = 0;
                    this.groups = e.map(e => {
                        var l;
                        let n = t,
                            s = Math.max(0, null !== (l = e.count) && void 0 !== l ? l : 0);
                        return t += s + 1, N(this.guildId, e.id, s, n)
                    }), this.rows.length = t
                }
                sync(e, t) {
                    let [l] = e;
                    t.forEach((e, t) => this.update(l + t, e))
                }
                invalidate(e) {
                    let [t, l] = e;
                    for (let e = t; e <= l; e++) {
                        let t = this.rows[e];
                        if (null == t) break;
                        delete this.rows[e], t.type === s.MEMBER && delete this.members[t.user.id]
                    }
                    this.version++
                }
                insert(e, t) {
                    let {
                        group: l,
                        member: n
                    } = t;
                    if (null != l) this.rows.splice(e, 0, N(this.guildId, l.id, l.count));
                    else if (null != n) {
                        let t = M(this.guildId, this.ownerId, n.user.id);
                        if (null == t) return;
                        this.rows.splice(e, 0, t), this.members[n.user.id] = t
                    }
                    this.version++
                }
                update(e, t) {
                    let {
                        group: l,
                        member: n
                    } = t, a = this.rows[e];
                    if (null != a && a.type === s.MEMBER && delete this.members[a.user.id], null != l) this.rows[e] = N(this.guildId, l.id, l.count);
                    else if (null != n) {
                        let t = M(this.guildId, this.ownerId, n.user.id);
                        if (null == t) return;
                        this.rows[e] = t, this.members[n.user.id] = t
                    }
                    this.version++
                }
                delete(e) {
                    let t = this.rows[e];
                    null != t && (t.type === s.MEMBER && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++)
                }
                rebuildMember(e) {
                    let t = this.members[e];
                    null != t && (Object.assign(t, M(this.guildId, this.ownerId, e)), this.version++)
                }
                rebuildMembers() {
                    i.forEach(this.members, (e, t) => {
                        this.rebuildMember(t)
                    })
                }
                constructor(e, t) {
                    this.rows = [], this.groups = [], this.members = {}, this.version = 0, this.guildId = e, this.listId = t, this.updateOwnerId()
                }
            }
            let R = new class e {
                get(e, t) {
                    let l = this._guildLists[e];
                    null == l && (l = this._guildLists[e] = {});
                    let n = l[t];
                    return null == n && ((n = new O(e, t)).setGroups([{
                        id: A.StatusTypes.UNKNOWN,
                        count: 0
                    }]), l[t] = n), n
                }
                forEach(e, t) {
                    if (null == e) i.forEach(this._guildLists, e => {
                        i.forEach(e, t)
                    });
                    else {
                        let l = this._guildLists[e];
                        null != l && i.forEach(l, t)
                    }
                }
                delete(e) {
                    delete this._guildLists[e]
                }
                reset() {
                    this._guildLists = {}
                }
                constructor() {
                    this._guildLists = {}
                }
            };

            function x() {
                R.reset()
            }
            let L = [];

            function P() {
                let e = m.default.getAllApplicationStreams(),
                    t = L.concat(e);
                L = e, t.forEach(e => {
                    R.forEach(null, t => t.rebuildMember(e.ownerId))
                })
            }

            function b() {
                let e = E.default.getId();
                R.forEach(null, t => t.rebuildMember(e))
            }
            class D extends d.default.Store {
                initialize() {
                    this.waitFor(g.default, _.default, p.default, h.default, I.default, S.default, E.default, T.default, m.default), this.syncWith([S.default], b), this.syncWith([m.default], P)
                }
                getProps(e, t) {
                    let l = R.get(e, y(t));
                    return {
                        listId: "".concat(l.guildId, ":").concat(l.listId),
                        groups: l.groups,
                        rows: l.rows,
                        version: l.version
                    }
                }
                getRows(e, t) {
                    let l = R.get(e, y(t));
                    return l.rows
                }
            }
            D.displayName = "ChannelMemberStore";
            var j = new D(c.default, {
                CONNECTION_OPEN: x,
                OVERLAY_INITIALIZE: x,
                GUILD_MEMBER_LIST_UPDATE: function(e) {
                    let t = R.get(e.guildId, e.id);
                    e.ops.forEach(e => {
                        switch (e.op) {
                            case "SYNC":
                                t.sync(e.range, e.items);
                                break;
                            case "INVALIDATE":
                                t.invalidate(e.range);
                                break;
                            case "INSERT":
                                t.insert(e.index, e.item);
                                break;
                            case "UPDATE":
                                t.update(e.index, e.item);
                                break;
                            case "DELETE":
                                t.delete(e.index)
                        }
                    }), t.setGroups(e.groups)
                },
                GUILD_UPDATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    R.forEach(t.id, e => {
                        e.updateOwnerId() && e.rebuildMembers()
                    })
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    R.delete(t.id)
                },
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    R.forEach(t, e => e.rebuildMembers())
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: l
                    } = e;
                    R.forEach(t, e => e.rebuildMember(l.id))
                },
                CHANNEL_UPDATES: function() {
                    return !0
                }
            })
        },
        339521: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("414456"),
                i = l.n(a),
                r = l("862337"),
                o = l("145131"),
                u = l("813896");

            function d(e) {
                let {
                    percentage: t,
                    isSingleLine: l
                } = e;
                return (0, n.jsx)("div", {
                    className: i({
                        [u.bar]: l,
                        [u.barInMultiLine]: !l
                    }),
                    children: (0, n.jsx)("div", {
                        className: u.barInner,
                        style: {
                            width: "".concat(100 * Math.max(Math.min(t, 1), 0), "%")
                        }
                    })
                })
            }

            function c(e) {
                return String(e).padStart(2, "0")
            }

            function f(e) {
                let {
                    time: t,
                    padLargestUnit: l
                } = e, n = Math.floor(t) % 60, s = Math.floor(t / 60) % 60, a = Math.floor(t / 3600);
                return 0 === a ? l ? "".concat(c(s), ":").concat(c(n)) : "".concat(s, ":").concat(c(n)) : l ? "".concat(c(a), ":").concat(c(s), ":").concat(c(n)) : "".concat(a, ":").concat(c(s), ":").concat(c(n))
            }
            class m extends s.PureComponent {
                componentDidMount() {
                    this.timer.start(500, () => {
                        this.setState({
                            now: Date.now()
                        })
                    })
                }
                componentWillUnmount() {
                    this.timer.stop()
                }
                render() {
                    let {
                        start: e,
                        end: t,
                        className: l,
                        themed: s,
                        singleLine: a = !1
                    } = this.props, {
                        now: r
                    } = this.state, c = (t - e) / 1e3, m = Math.max(Math.min((r - e) / 1e3, c), 0);
                    return a ? (0, n.jsxs)("div", {
                        className: i(l, {
                            [u.themed]: s
                        }, u.singleLineContainer),
                        children: [(0, n.jsx)("div", {
                            className: u.textLeftInSingleLine,
                            children: f({
                                time: m,
                                padLargestUnit: !0
                            })
                        }), (0, n.jsx)("div", {
                            className: u.barInSingleLine,
                            children: (0, n.jsx)(d, {
                                percentage: m / c,
                                isSingleLine: !0
                            })
                        }), (0, n.jsx)("div", {
                            className: u.textRight,
                            children: f({
                                time: c,
                                padLargestUnit: !0
                            })
                        })]
                    }) : (0, n.jsxs)("div", {
                        className: i(l, {
                            [u.themed]: s
                        }),
                        children: [(0, n.jsx)(d, {
                            percentage: m / c,
                            isSingleLine: !1
                        }), (0, n.jsxs)(o.default, {
                            children: [(0, n.jsx)(o.default.Child, {
                                grow: 1,
                                className: u.textLeft,
                                children: f({
                                    time: m,
                                    padLargestUnit: !1
                                })
                            }), (0, n.jsx)(o.default.Child, {
                                grow: 0,
                                className: u.textRight,
                                children: f({
                                    time: c,
                                    padLargestUnit: !1
                                })
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.timer = new r.Interval, this.state = {
                        now: Date.now()
                    }
                }
            }
            m.defaultProps = {
                themed: !1
            };
            var E = m
        },
        953109: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                i = l("227422"),
                r = l("109024"),
                o = l("547620"),
                u = l("646718"),
                d = l("257920");
            let c = {
                    XSMALL: d.xsmall,
                    SMALL: d.small,
                    MEDIUM: d.medium,
                    LARGE: d.large
                },
                f = e => {
                    let t, {
                        game: s,
                        guild: f,
                        skuId: m,
                        pid: E,
                        className: p,
                        guildClassName: T,
                        size: h = c.MEDIUM,
                        ..._
                    } = e;
                    if (null != m && (t = function(e) {
                            if (null == e) return null;
                            switch (e) {
                                case u.PremiumSubscriptionSKUs.GUILD:
                                    return l("229806");
                                case u.PremiumSubscriptionSKUs.TIER_0:
                                    return l("654125");
                                case u.PremiumSubscriptionSKUs.TIER_1:
                                    return l("108647");
                                case u.PremiumSubscriptionSKUs.TIER_2:
                                case u.PremiumSubscriptionSKUs.LEGACY:
                                    return l("943005");
                                default:
                                    return null
                            }
                        }(m)), null != s && null == t && (t = s.getIconURL(function(e) {
                            switch (e) {
                                case c.XSMALL:
                                    return 24;
                                case c.SMALL:
                                    return 30;
                                case c.MEDIUM:
                                    return 40;
                                case c.LARGE:
                                    return 60;
                                default:
                                    return 80
                            }
                        }(h))), null == (t = (0, i.default)(E, t)) && null != f) {
                        let e = function(e) {
                            switch (e) {
                                case c.XSMALL:
                                    return r.default.Sizes.SMALLER;
                                case c.SMALL:
                                    return r.default.Sizes.SMALL;
                                case c.LARGE:
                                    return r.default.Sizes.LARGE;
                                default:
                                case c.MEDIUM:
                                    return r.default.Sizes.MEDIUM
                            }
                        }(h);
                        return (0, n.jsx)(r.default, {
                            className: a(d.gameIcon, T, p),
                            guild: f,
                            size: e
                        })
                    }
                    return null == t ? (0, n.jsx)(o.default, {
                        className: a(d.gameIcon, h, p)
                    }) : (0, n.jsx)("div", {
                        ..._,
                        className: a(d.gameIcon, h, p),
                        style: {
                            backgroundImage: "url('".concat(t, "')")
                        }
                    })
                };
            f.Sizes = c;
            var m = f
        },
        280174: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                TimeUnits: function() {
                    return s.TimeUnits
                },
                getTimeAndUnit: function() {
                    return s.getTimeAndUnit
                },
                default: function() {
                    return a
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("512330"),
                a = (0, s.default)(function(e) {
                    let {
                        children: t,
                        className: l
                    } = e;
                    return (0, n.jsx)("span", {
                        className: l,
                        children: t
                    })
                })
        },
        963422: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("77078");
            class i extends s.PureComponent {
                render() {
                    let {
                        text: e,
                        lastItem: t,
                        className: l
                    } = this.props;
                    return (0, n.jsxs)("span", {
                        children: [(0, n.jsx)(a.Anchor, {
                            className: l,
                            onClick: this.handleClick,
                            children: e
                        }), t ? "" : ", "]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClick = () => {
                        let {
                            onClick: e,
                            index: t
                        } = this.props;
                        null == e || e(t)
                    }
                }
            }
            class r extends s.PureComponent {
                render() {
                    let e = this.props.artists.split(";");
                    if (!this.props.canOpen) return e.join(", ");
                    let t = e.length - 1;
                    return e.map((e, l) => (0, n.jsx)(i, {
                        text: e,
                        index: l,
                        lastItem: l === t,
                        onClick: this.handleOpenSpotifyArtist,
                        className: this.props.linkClassName
                    }, "spotify-artist-".concat(l)))
                }
                constructor(...e) {
                    super(...e), this.handleOpenSpotifyArtist = e => {
                        let {
                            onOpenSpotifyArtist: t
                        } = this.props;
                        null == t || t(e)
                    }
                }
            }
        },
        313873: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                Types: function() {
                    return s
                },
                default: function() {
                    return V
                }
            });
            var n, s, a = l("37983"),
                i = l("884691"),
                r = l("414456"),
                o = l.n(r),
                u = l("627445"),
                d = l.n(u),
                c = l("819855"),
                f = l("77078"),
                m = l("832627"),
                E = l("841098"),
                p = l("376556"),
                T = l("609030"),
                h = l("309570"),
                _ = l("985677"),
                I = l("429928"),
                S = l("36539"),
                g = l("502651"),
                A = l("419830"),
                C = l("118033"),
                v = l("315102"),
                N = l("568734"),
                M = l("474293"),
                y = l("339521"),
                O = l("145131"),
                R = l("953109"),
                x = l("98292"),
                L = l("280174"),
                P = l("963422"),
                b = l("587974"),
                D = l("49111"),
                j = l("954016"),
                U = l("782340"),
                F = l("843616");
            (n = s || (s = {})).USER_POPOUT = "UserPopout", n.USER_POPOUT_V2 = "UserPopoutV2", n.ACTIVITY_FEED = "ActivityFeed", n.PROFILE = "Profile", n.PROFILE_V2 = "ProfileV2", n.STREAM_PREVIEW = "StreamPreview", n.VOICE_CHANNEL = "VoiceChannel";
            let w = {
                    [s.STREAM_PREVIEW]: [108, 60],
                    [s.USER_POPOUT]: [108, 60],
                    [s.USER_POPOUT_V2]: [108, 60],
                    [s.VOICE_CHANNEL]: [108, 60],
                    [s.PROFILE]: [162, 90],
                    [s.PROFILE_V2]: [162, 90],
                    [s.ACTIVITY_FEED]: [900, 500]
                },
                {
                    getAssetImage: G
                } = l("550368"),
                B = (0, m.default)(class extends i.PureComponent {
                    render() {
                        return (0, a.jsx)("div", {
                            className: F.timestamp,
                            children: this.props.message
                        })
                    }
                });

            function k(e) {
                let t, {
                        activity: l
                    } = e,
                    n = (0, E.default)();
                if ((0, I.default)(l) && (t = D.PlatformTypes.SPOTIFY), null != l.platform && [D.ActivityGamePlatforms.PS4, D.ActivityGamePlatforms.PS5].includes(l.platform) && (t = D.PlatformTypes.PLAYSTATION), null == t) return null;
                let s = p.default.get(t);
                return (0, a.jsx)("img", {
                    alt: "",
                    src: (0, c.isThemeLight)(n) ? s.icon.lightSVG : s.icon.darkSVG,
                    className: F.platformIcon
                })
            }
            class Y extends i.PureComponent {
                get activity() {
                    let {
                        activity: e,
                        activityGuild: t
                    } = this.props;
                    return null != t && (null == e ? void 0 : e.type) !== D.ActivityTypes.PLAYING && (null == e ? void 0 : e.type) !== D.ActivityTypes.WATCHING ? {
                        type: D.ActivityTypes.PLAYING,
                        name: U.default.Messages.SHARING_SCREEN
                    } : e
                }
                getTypeClass(e, t) {
                    return (0, M.getClass)(F, e, this.props.type, t)
                }
                isStreamerOnTypeProfile() {
                    return (0, g.default)(this.activity) && (this.props.type === s.PROFILE || this.props.type === s.PROFILE_V2)
                }
                isStreamerOnTypeActivityFeed() {
                    return (0, g.default)(this.activity) && this.props.type === s.ACTIVITY_FEED
                }
                renderHeader(e) {
                    var t;
                    let l;
                    let {
                        hideHeader: n,
                        activityGuild: i,
                        channel: r,
                        renderHeaderAccessory: u,
                        type: d
                    } = this.props, c = this.activity;
                    if (n || null == c) return null;
                    let {
                        name: m
                    } = c;
                    switch (c.type) {
                        case D.ActivityTypes.STREAMING:
                            l = U.default.Messages.USER_ACTIVITY_HEADER_LIVE_ON_PLATFORM.format({
                                platform: [D.PlatformTypes.TWITCH, D.PlatformTypes.YOUTUBE].includes(m.toLowerCase()) ? m : p.default.get(D.PlatformTypes.TWITCH).name
                            });
                            break;
                        case D.ActivityTypes.LISTENING:
                            l = U.default.Messages.USER_ACTIVITY_HEADER_LISTENING.format({
                                name: m
                            });
                            break;
                        case D.ActivityTypes.WATCHING:
                            l = U.default.Messages.USER_ACTIVITY_HEADER_WATCHING.format({
                                name: m
                            });
                            break;
                        case D.ActivityTypes.PLAYING:
                            l = (0, T.default)(c);
                            break;
                        case D.ActivityTypes.COMPETING:
                            l = U.default.Messages.USER_ACTIVITY_HEADER_COMPETING.format({
                                name: m
                            })
                    }
                    null != i && (l = (0, N.hasFlag)(null !== (t = null == c ? void 0 : c.flags) && void 0 !== t ? t : 0, D.ActivityFlags.EMBEDDED) ? c.type === D.ActivityTypes.WATCHING ? U.default.Messages.EMBEDDED_ACTIVITIES_WATCHING_IN_GUILD.format({
                        guildName: i.name
                    }) : U.default.Messages.EMBEDDED_ACTIVITIES_PLAYING_IN_GUILD.format({
                        guildName: i.name
                    }) : U.default.Messages.USER_ACTIVITY_HEADER_STREAMING_TO_GUILD.format({
                        server: i.name
                    }));
                    let E = (0, A.getChannelIconComponent)(r, i);
                    return null != r && (l = r.name), (0, a.jsxs)("div", {
                        className: F.headerContainer,
                        children: [null != r && null !== E ? (0, a.jsx)(E, {
                            className: o(F.icon)
                        }) : null, (0, a.jsx)(f.Heading, {
                            className: (0, M.getClass)(F, "headerText", e ? "EmptyBody" : "Normal"),
                            variant: "heading-deprecated-12/semibold",
                            color: d === s.PROFILE_V2 ? "header-primary" : void 0,
                            children: (0, a.jsx)(x.default, {
                                children: l
                            })
                        }), null == u ? void 0 : u()]
                    })
                }
                renderXboxImage() {
                    return (0, a.jsx)("div", {
                        className: F.assets,
                        children: (0, a.jsx)("img", {
                            alt: "",
                            src: p.default.get(D.PlatformTypes.XBOX).icon.customPNG,
                            className: o(this.getTypeClass("assetsLargeImage", "Xbox"))
                        })
                    })
                }
                renderImage(e) {
                    var t, l, n, s;
                    let r, u;
                    let {
                        type: d
                    } = this.props, {
                        assets: c,
                        application_id: m
                    } = e;
                    if (null == c || null == c.large_image && null == c.small_image) return null;
                    (0, g.default)(e) && (r = w[d]);
                    let E = (0, I.default)(e),
                        p = null != c.large_image ? (0, a.jsx)("img", {
                            alt: null !== (t = c.large_text) && void 0 !== t ? t : "",
                            src: G(m, c.large_image, null != r ? r : [j.ImageSizes.LARGE, j.ImageSizes.LARGE]),
                            className: o(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeProfile() || this.isStreamerOnTypeActivityFeed() ? D.PlatformTypes.TWITCH : ""), {
                                [null !== (l = this.getTypeClass("assetsLargeMask")) && void 0 !== l ? l : ""]: null != c.small_image
                            }, {
                                [F.assetsLargeImageSpotify]: E
                            })
                        }) : null;
                    if (E) p = (0, a.jsx)(f.Anchor, {
                        onClick: this.handleOpenSpotifyAlbum,
                        children: p
                    });
                    else if ((0, C.isStageActivity)(e)) {
                        let t = (0, C.unpackStageChannelParty)(e);
                        if (null == t) return null;
                        p = (0, a.jsx)(b.default, {
                            mask: b.default.Masks.SQUIRCLE,
                            width: j.ImageSizes.SMALL,
                            height: j.ImageSizes.SMALL,
                            children: (0, a.jsx)("img", {
                                src: null !== (n = v.default.getGuildIconURL({
                                    id: t.guildId,
                                    icon: c.small_image,
                                    size: j.ImageSizes.SMALL
                                })) && void 0 !== n ? n : void 0,
                                className: F.assetsLargeImageVoiceChannel,
                                alt: ""
                            })
                        })
                    }
                    return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (p = (0, a.jsxs)("div", {
                        className: F.twitchImageContainer,
                        children: [(0, a.jsxs)("div", {
                            className: F.twitchImageOverlay,
                            children: [(0, a.jsx)(f.H, {
                                className: F.streamName,
                                children: e.name
                            }), (0, a.jsx)("div", {
                                className: F.streamGame,
                                children: U.default.Messages.STREAMER_PLAYING.format({
                                    game: e.details
                                })
                            })]
                        }), (0, a.jsx)(f.Anchor, {
                            className: F.twitchBackgroundImage,
                            href: e.url,
                            children: p
                        })]
                    })), !(0, C.isStageActivity)(e) && null != c.small_image && (u = (0, a.jsx)(f.Tooltip, {
                        text: "" !== c.small_text ? c.small_text : null,
                        position: "top",
                        children: e => (0, a.jsx)("img", {
                            alt: null !== (s = c.small_text) && void 0 !== s ? s : "",
                            src: G(m, c.small_image, [j.ImageSizes.SMALL, j.ImageSizes.SMALL]),
                            className: this.getTypeClass("assetsSmallImage", null == p ? "WithoutLargeImage" : void 0),
                            ...e
                        })
                    })), null == p) ? (0, a.jsx)("div", {
                        className: F.assets,
                        children: u
                    }) : (0, a.jsxs)("div", {
                        className: F.assets,
                        children: [(0, a.jsx)(f.Tooltip, {
                            text: null != c.large_text ? c.large_text : null,
                            position: "top",
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: l
                                } = e;
                                return null != p ? i.cloneElement(p, {
                                    onMouseEnter: t,
                                    onMouseLeave: l
                                }) : null
                            }
                        }), u]
                    })
                }
                renderGameImage(e) {
                    let {
                        user: t,
                        type: l,
                        application: n,
                        activityGuild: i
                    } = this.props;
                    return null != e.assets || (0, h.default)(e) || e.type !== D.ActivityTypes.PLAYING || l === s.ACTIVITY_FEED || t.bot ? null : null == n && null != i ? (0, a.jsx)("div", {
                        className: o(F.gameIcon, F.screenshareIcon)
                    }) : (0, a.jsx)(R.default, {
                        className: F.gameIcon,
                        game: n
                    })
                }
                renderName(e) {
                    let {
                        user: t,
                        application: l,
                        hideName: n
                    } = this.props;
                    if (n) return null;
                    let {
                        details: s,
                        type: i
                    } = e;
                    if (i === D.ActivityTypes.CUSTOM_STATUS) return null;
                    let r = (0, _.default)(e),
                        o = e.name,
                        u = o;
                    return (r && null != l ? u = (0, a.jsx)("span", {
                        className: F.activityName,
                        children: u
                    }) : !r && (o = s, u = s, (0, I.default)(e) && null != e.sync_id && null != s ? u = (0, a.jsx)(f.Anchor, {
                        className: F.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: s
                    }) : (0, C.isStageActivity)(e) && (u = e.name)), null == u) ? null : (0, a.jsx)(f.Text, {
                        title: o,
                        variant: "text-sm/semibold",
                        className: (0, M.getClass)(F, "name", t.bot || this.isStreamerOnTypeProfile() ? "wrap" : "normal"),
                        children: u
                    })
                }
                renderDetails(e) {
                    let {
                        details: t,
                        state: l
                    } = e, n = t, s = t;
                    if (e.type === D.ActivityTypes.CUSTOM_STATUS) n = l;
                    else if (!(0, _.default)(e)) {
                        if (s = n = l, (0, I.default)(e) && null != l) n = U.default.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
                            artists: s,
                            artistsHook: (t, n) => (0, a.jsx)(P.default, {
                                artists: l,
                                linkClassName: F.bodyLink,
                                canOpen: null != e.sync_id,
                                onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                            }, n)
                        });
                        else if ((0, C.isStageActivity)(e)) {
                            var i;
                            n = null === (i = e.assets) || void 0 === i ? void 0 : i.small_text
                        }
                    }
                    return null == n || 0 === n.length ? null : ((0, g.default)(e) && (n = U.default.Messages.STREAMER_PLAYING.format({
                        game: n
                    })), (0, a.jsx)("div", {
                        title: null != s ? s : void 0,
                        className: (0, g.default)(e) || (0, I.default)(e) ? F.detailsWrap : F.details,
                        children: n
                    }))
                }
                renderTimePlayed(e) {
                    let {
                        activityGuild: t
                    } = this.props;
                    if (!(0, _.default)(e) || (0, I.default)(e)) return null;
                    let {
                        timestamps: l
                    } = e;
                    return null == l ? null : (0, h.default)(e) ? (0, a.jsx)(B, {
                        timestamps: l
                    }) : (0, a.jsx)(L.default, {
                        start: l.start,
                        location: L.default.Locations.USER_ACTIVITY,
                        className: F.playTime,
                        isApplicationStreaming: null != t
                    })
                }
                renderTimeBar(e) {
                    if (!(0, I.default)(e)) return null;
                    let {
                        timestamps: t
                    } = e;
                    if (null == t) return null;
                    let {
                        start: l,
                        end: n
                    } = t;
                    return null == l || null == n ? null : (0, a.jsx)(y.default, {
                        start: l,
                        end: n,
                        className: this.getTypeClass("timeBar"),
                        themed: this.props.type === s.VOICE_CHANNEL || this.props.type === s.USER_POPOUT || this.props.type === s.USER_POPOUT_V2 || this.props.type === s.PROFILE_V2
                    })
                }
                renderState(e, t) {
                    var l, n;
                    let s;
                    let {
                        state: i,
                        party: r,
                        assets: o
                    } = e, u = i, d = u;
                    return (!(0, _.default)(e) && (d = u = null == o ? void 0 : o.large_text, (0, I.default)(e) && null != u && (u = U.default.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
                        album: d,
                        albumHook: (t, l) => null != e.sync_id && null != d ? (0, a.jsx)(f.Anchor, {
                            className: F.bodyLink,
                            onClick: this.handleOpenSpotifyAlbum,
                            children: d
                        }, l) : d
                    }))), null != u && 0 !== u.length && e.type !== D.ActivityTypes.CUSTOM_STATUS || (0, C.isStageActivity)(e)) ? ((null == r ? void 0 : r.size) == null && [(0, j.POKER_NIGHT_APPLICATION_ID)].includes(null !== (l = e.application_id) && void 0 !== l ? l : "") ? s = U.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
                        count: "0",
                        max: null !== (n = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== n ? n : 0
                    }) : (0, C.isStageActivity)(e) && (null == r ? void 0 : r.size) != null ? s = U.default.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
                        numSpeakers: r.size[0],
                        numListeners: r.size[1] - r.size[0]
                    }) : (null == r ? void 0 : r.size) != null && r.size.length >= 2 && (s = U.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
                        count: r.size[0],
                        max: r.size[1]
                    })), (0, a.jsxs)("div", {
                        className: F.state,
                        children: [(0, a.jsx)("span", {
                            title: d,
                            children: u
                        }), null != s ? (0, a.jsxs)("span", {
                            children: [" ", s]
                        }) : null]
                    })) : null
                }
                render() {
                    let e;
                    let {
                        type: t,
                        renderActions: l,
                        className: n,
                        application: i
                    } = this.props, r = this.activity;
                    if (null == r || r.type === D.ActivityTypes.CUSTOM_STATUS) return null;
                    let u = t === s.USER_POPOUT || t === s.USER_POPOUT_V2,
                        d = t === s.PROFILE || t === s.PROFILE_V2,
                        c = t === s.ACTIVITY_FEED,
                        f = t === s.STREAM_PREVIEW,
                        m = !1;
                    (0, S.default)(r) ? (e = this.renderXboxImage(), m = !0) : null == (e = this.renderImage(r)) && (m = null != (e = this.renderGameImage(r)));
                    let E = this.renderName(r),
                        p = this.renderDetails(r),
                        T = this.renderState(r, i),
                        h = this.renderTimePlayed(r),
                        _ = null != l ? l() : null,
                        I = this.renderTimeBar(r),
                        g = ![e, E, p, T, h, I, _].some(e => null != e);
                    return (0, a.jsxs)("div", {
                        className: o(this.getTypeClass("activity"), n),
                        children: [this.renderHeader(g), (0, a.jsxs)("div", {
                            className: m ? F.bodyAlignCenter : F.bodyNormal,
                            children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, a.jsxs)(O.default.Child, {
                                className: o((0, M.getClass)(F, "content", m ? "GameImage" : null != e ? "Images" : "NoImages", t)),
                                children: [E, p, T, h, u || f ? null : I, c ? _ : null]
                            }), d ? _ : null]
                        }), u ? I : null, u || f ? _ : null, (0, a.jsx)(k, {
                            activity: r
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleOpenSpotifyTrack = () => {
                        let {
                            activity: e,
                            onOpenSpotifyTrack: t
                        } = this.props;
                        d(null != e, "Spotify activity was null"), null == t || t(e)
                    }, this.handleOpenSpotifyArtist = e => {
                        let {
                            activity: t,
                            onOpenSpotifyArtist: l,
                            user: n
                        } = this.props;
                        d(null != t, "Spotify activity was null"), null == l || l(t, n.id, e)
                    }, this.handleOpenSpotifyAlbum = () => {
                        let {
                            activity: e,
                            onOpenSpotifyAlbum: t,
                            user: l
                        } = this.props;
                        d(null != e, "Spotify activity was null"), null == t || t(e, l.id)
                    }
                }
            }
            Y.Types = s;
            var V = Y
        },
        547620: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("469563"),
                a = l("841248"),
                i = l("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 40 40",
                        children: (0, n.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, n.jsx)("path", {
                                className: a,
                                fill: s,
                                fillOpacity: ".8",
                                d: "M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z"
                            }), (0, n.jsx)("rect", {
                                className: a,
                                width: "38",
                                height: "38",
                                x: "1",
                                y: "1",
                                stroke: s,
                                strokeOpacity: ".4",
                                strokeWidth: "2",
                                rx: "5"
                            }), (0, n.jsx)("circle", {
                                className: a,
                                cx: "7",
                                cy: "7",
                                r: "2",
                                fill: s,
                                fillOpacity: ".4"
                            }), (0, n.jsx)("circle", {
                                className: a,
                                cx: "7",
                                cy: "33",
                                r: "2",
                                fill: s,
                                fillOpacity: ".4"
                            }), (0, n.jsx)("circle", {
                                className: a,
                                cx: "33",
                                cy: "7",
                                r: "2",
                                fill: s,
                                fillOpacity: ".4"
                            }), (0, n.jsx)("circle", {
                                className: a,
                                cx: "33",
                                cy: "33",
                                r: "2",
                                fill: s,
                                fillOpacity: ".4"
                            })]
                        })
                    })
                }, a.UnknownGameIcon)
        },
        153769: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("469563"),
                a = l("267527"),
                i = l("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 28,
                        height: l = 20,
                        color: s = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 28 20",
                        children: (0, n.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"
                        })
                    })
                }, a.ClydeIcon, {
                    color: "color",
                    className: "remove"
                }, {
                    size: 28
                })
        },
        30672: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("748820"),
                i = l("469563"),
                r = l("850062"),
                o = l("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: l = 16,
                        color: i = "currentColor",
                        foreground: r,
                        ...u
                    } = e, d = s.useRef((0, a.v4)());
                    return (0, n.jsxs)("svg", {
                        ...(0, o.default)(u),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 25",
                        children: [(0, n.jsxs)("g", {
                            clipPath: "url(".concat(d.current, ")"),
                            children: [(0, n.jsx)("path", {
                                d: "M21 0.994141V3.99414H24V5.99414H21V8.99414H19V5.99414H16V3.99414H19V0.994141H21Z",
                                fill: i,
                                className: r
                            }), (0, n.jsx)("path", {
                                d: "M14 12.9941C14 14.0987 13.1046 14.9941 12 14.9941C10.8954 14.9941 10 14.0987 10 12.9941C10 11.8896 10.8954 10.9941 12 10.9941C13.1046 10.9941 14 11.8896 14 12.9941Z",
                                fill: i,
                                className: r
                            }), (0, n.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M20 11.9941C20.6987 11.9941 21.3734 11.8918 22.0101 11.7012C22.6497 12.4666 23 12.9941 23 12.9941C23 12.9941 18.352 19.9941 12 19.9941C5.648 19.9941 1 12.9941 1 12.9941C1 12.9941 5.648 5.99414 12 5.99414C12.3661 5.99414 12.7266 6.0174 13.0808 6.06123C13.5947 9.42075 16.4968 11.9941 20 11.9941ZM8 12.9941C8 15.2041 9.791 16.9941 12 16.9941C14.209 16.9941 16 15.2041 16 12.9941C16 10.7841 14.209 8.99414 12 8.99414C9.791 8.99414 8 10.7841 8 12.9941Z",
                                fill: i,
                                className: r
                            })]
                        }), (0, n.jsx)("defs", {
                            children: (0, n.jsx)("clipPath", {
                                id: d.current,
                                children: (0, n.jsx)("rect", {
                                    width: "24",
                                    height: "24",
                                    fill: i,
                                    className: r,
                                    transform: "translate(0 0.994141)"
                                })
                            })
                        })]
                    })
                }, r.EyePlusIcon)
        },
        907566: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("469563"),
                a = l("202804"),
                i = l("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: l = 16,
                        color: s = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M20 6.00201H14V3.00201C14 2.45001 13.553 2.00201 13 2.00201H4C3.447 2.00201 3 2.45001 3 3.00201V22.002H5V14.002H10.586L8.293 16.295C8.007 16.581 7.922 17.011 8.076 17.385C8.23 17.759 8.596 18.002 9 18.002H20C20.553 18.002 21 17.554 21 17.002V7.00201C21 6.45001 20.553 6.00201 20 6.00201Z"
                        })
                    })
                }, a.FlagIcon)
        },
        758710: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("469563"),
                a = l("249978"),
                i = l("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
                        }), (0, n.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
                        })]
                    })
                }, a.WindowLaunchIcon)
        },
        616225: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("469563"),
                a = l("816607"),
                i = l("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: l = 16,
                        color: s = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: s,
                            className: a,
                            d: "M11.8 14a6.1 6.1 0 0 0 0 6H3v-2c0-2.7 5.3-4 8-4h.8zm-.8-2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6 1c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm-1 6.2l3-2.2-3-2.2v4.4z"
                        })
                    })
                }, a.UserPlayIcon)
        },
        936629: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("75196");

            function a(e) {
                let {
                    width: t = 16,
                    height: l = 16,
                    color: a = "currentColor",
                    foreground: i,
                    ...r
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(r),
                    width: t,
                    height: l,
                    viewBox: "0 0 16 16",
                    children: (0, n.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, n.jsx)("path", {
                            className: i,
                            fill: a,
                            d: "M12.7609503,7.08043507 C10.1796226,5.54647845 5.92178025,5.40543597 3.45759439,6.15380317 C3.06179846,6.27398591 2.64333918,6.05046133 2.5234242,5.65450895 C2.40350922,5.25826952 2.62670026,4.83983073 3.02268744,4.71945662 C5.85139953,3.86028398 10.5538071,4.02620506 13.52548,5.79134121 C13.8813999,6.00280925 13.9981592,6.46277616 13.7872083,6.81834866 C13.5760661,7.17449528 13.1160095,7.2919031 12.7609503,7.08043507 Z M12.7456938,9.37785148 C12.5639139,9.67256952 12.1782795,9.76502256 11.883727,9.58404861 C9.72377106,8.25738585 6.4301382,7.87299604 3.87475822,8.64810544 C3.54335063,8.74813503 3.19341953,8.56150265 3.09273996,8.2309159 C2.99292418,7.89984962 3.17979084,7.55075308 3.51062257,7.45005215 C6.42975429,6.56484307 10.0587298,6.99354129 12.5395359,8.51700243 C12.8340884,8.69826409 12.9268019,9.08380478 12.7456938,9.37785148 Z M11.7108365,11.5428368 C11.566471,11.780912 11.2582675,11.8554793 11.0223905,11.7103962 C9.13604653,10.5509855 6.76173752,10.28918 3.96555508,10.9314428 C3.69610478,10.9935661 3.42751778,10.823788 3.36603055,10.5528184 C3.30435146,10.2819451 3.47260203,10.0118436 3.74262788,9.95000969 C6.80260111,9.2465882 9.42736749,9.54929481 11.5446963,10.8504123 C11.7807651,10.995399 11.8551061,11.3055334 11.7108365,11.5428368 Z M0,7.99990447 C0,12.4185663 3.58181579,16 8,16 C12.4183753,16 16,12.4185663 16,7.99990447 C16,3.58172026 12.4183753,0 8,0 C3.58181579,0 0,3.58172026 0,7.99990447 Z"
                        }), (0, n.jsx)("rect", {
                            width: "16",
                            height: "16"
                        })]
                    })
                })
            }
        },
        164424: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("469563"),
                a = l("971918"),
                i = l("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: l = 16,
                        className: s,
                        fill: a = "currentColor",
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(r),
                        className: s,
                        width: t,
                        height: l,
                        viewBox: "0 0 16 16",
                        children: (0, n.jsx)("path", {
                            d: "M8.2738 8.49222L1.99997 9.09877L0.349029 14.3788C0.250591 14.691 0.347154 15.0322 0.595581 15.246C0.843069 15.4597 1.19464 15.5047 1.48903 15.3613L15.2384 8.7032C15.5075 8.57195 15.6781 8.29914 15.6781 8.00007C15.6781 7.70101 15.5074 7.4282 15.2384 7.29694L1.49839 0.634063C1.20401 0.490625 0.852453 0.535625 0.604941 0.749376C0.356493 0.963128 0.259941 1.30344 0.358389 1.61563L2.00932 6.89563L8.27093 7.50312C8.52405 7.52843 8.71718 7.74125 8.71718 7.99531C8.71718 8.24938 8.52406 8.46218 8.27093 8.4875L8.2738 8.49222Z",
                            fill: a
                        })
                    })
                }, a.SendMessageIcon)
        },
        483093: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                i = l("77078"),
                r = l("782340"),
                o = l("569313");

            function u(e) {
                let {
                    className: t,
                    src: l,
                    unicodeEmoji: s,
                    name: u,
                    size: d = 20,
                    enableTooltip: c = !0,
                    enableHeight: f = !0,
                    onClick: m
                } = e;
                if (null == l && null == s) return null;
                let E = e => {
                    let c = (0, n.jsx)("img", {
                        alt: "",
                        "aria-label": r.default.Messages.ROLE_ICON_ALT_TEXT.format({
                            name: u
                        }),
                        className: a(o.roleIcon, t, {
                            [o.clickable]: null != m
                        }),
                        height: f ? d : void 0,
                        src: l,
                        width: d,
                        ...e
                    });
                    return (null != s && (c = (0, n.jsx)("img", {
                        alt: "",
                        "aria-label": s.allNamesString,
                        className: a(o.roleIcon, t, {
                            [o.clickable]: null != m
                        }),
                        height: f ? d : void 0,
                        src: s.url,
                        width: d,
                        ...e
                    })), null == m) ? (0, n.jsx)(i.FocusRing, {
                        children: c
                    }) : (0, n.jsx)(i.Clickable, {
                        onClick: m,
                        tag: "span",
                        children: c
                    })
                };
                return (0, n.jsx)(i.Tooltip, {
                    text: u,
                    "aria-label": !1,
                    shouldShow: c,
                    children: e => E(e)
                })
            }
        },
        267625: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                RESTRICTIONS: function() {
                    return i
                }
            });
            var n = l("551006"),
                s = l("49111"),
                a = l("782340");
            let i = [{
                check(e, t, l) {
                    if (!l || null == t.getGuildId()) return !1;
                    let s = n.default.extractEveryoneRole(e, t);
                    if (null == s || !n.default.shouldShowEveryoneGuard(s, t)) return !1;
                    let i = n.default.everyoneMemberCount(s, t),
                        r = Math.pow(10, Math.floor(Math.log10(i))),
                        o = a.default.Messages.EVERYONE_POPOUT_BODY;
                    return t.isForumPost() ? o = a.default.Messages.EVERYONE_POPOUT_BODY_FORUM_POST : t.isThread() && (o = a.default.Messages.EVERYONE_POPOUT_BODY_THREAD), {
                        body: o.format({
                            role: s,
                            count: (Math.trunc(i / r) * r).toLocaleString()
                        }),
                        footer: a.default.Messages.EVERYONE_POPOUT_FOOTER
                    }
                },
                analyticsType: "@Everyone Warning",
                animation: {
                    dark: () => l.el("878809").then(l.t.bind(l, "878809", 19)),
                    light: () => l.el("390594").then(l.t.bind(l, "390594", 19))
                }
            }, {
                check: e => !!s.TOKEN_REGEX.test(e) && {
                    body: a.default.Messages.TOKEN_POPOUT_BODY
                },
                analyticsType: "API Token Warning"
            }]
        },
        551006: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var n = l("627445"),
                s = l.n(n),
                a = l("884351"),
                i = l("19766"),
                r = l("957255"),
                o = l("49111");
            let u = new RegExp(/@(:?everyone|here)/);

            function d(e, t) {
                let l = 0;
                if (t.isThread()) {
                    var n;
                    return null !== (n = t.memberCount) && void 0 !== n ? n : 0
                }
                let s = i.default.getProps(t.getGuildId(), t.id);
                return s.groups.forEach(t => {
                    ("@everyone" === e || t.id !== o.StatusTypes.OFFLINE) && (l += t.count)
                }), l
            }
            var c = {
                shouldShowEveryoneGuard: function(e, t) {
                    let l = t.getGuildId();
                    s(l, "isGuildChannel with null guildId");
                    let n = d(e, t);
                    return n > 30 && r.default.can(o.Permissions.MENTION_EVERYONE, t)
                },
                everyoneMemberCount: d,
                extractEveryoneRole: function(e, t) {
                    let l = a.default.parsePreprocessor(t, e);
                    for (let e of l) {
                        let t = function e(t) {
                            if ("string" == typeof t.content) {
                                var l;
                                if ("inlineCode" === t.type || "codeBlock" === t.type) return null;
                                let e = null === (l = t.content) || void 0 === l ? void 0 : l.match(u);
                                if (null != e) {
                                    let [t] = e;
                                    return t
                                }
                            } else if (Array.isArray(t.content))
                                for (let l of t.content) {
                                    let t = e(l);
                                    if (null != t) return t
                                }
                            return null
                        }(e);
                        if (null != t) return t
                    }
                    return null
                }
            }
        },
        718422: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                applyChatRestrictions: function() {
                    return p
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("77078"),
                a = l("913144"),
                i = l("135230"),
                r = l("979911"),
                o = l("401848"),
                u = l("697218"),
                d = l("599110"),
                c = l("267625"),
                f = l("719923"),
                m = l("49111"),
                E = l("782340");

            function p(e) {
                let {
                    openWarningPopout: t,
                    type: l,
                    content: p,
                    stickers: T,
                    uploads: h,
                    channel: _,
                    restrictMentions: I = !0,
                    respectCooldown: S = !0
                } = e, g = f.default.canUseIncreasedMessageLength(u.default.getCurrentUser());
                return new Promise(e => (function(e) {
                    var t, l, u;
                    let {
                        openWarningPopout: f,
                        type: p,
                        content: T,
                        stickers: h,
                        uploads: _,
                        channel: I,
                        restrictMentions: S,
                        respectCooldown: g,
                        userCanUsePremiumMessageLength: A,
                        resolve: C
                    } = e;
                    if (0 === T.length && !(null === (t = p.submit) || void 0 === t ? void 0 : t.allowEmptyMessage) && (null == h || 0 === h.length) && (null == _ || 0 === _.length)) {
                        C({
                            valid: !1,
                            failureReason: m.MessageRestrictionTypes.EMPTY_MESSAGE
                        });
                        return
                    }
                    let v = A ? m.MAX_MESSAGE_LENGTH_PREMIUM : m.MAX_MESSAGE_LENGTH;
                    if (T.length > v) {
                        if (A || null == I) {
                            ;
                            l = T.length, u = v, (0, s.openModal)(e => (0, n.jsx)(i.default, {
                                title: E.default.Messages.MESSAGE_TOO_LONG_HEADER,
                                body: E.default.Messages.MESSAGE_TOO_LONG_BODY_TEXT.format({
                                    currentLength: l,
                                    maxLength: u
                                }),
                                confirmText: E.default.Messages.OKAY,
                                ...e
                            })), d.default.track(m.AnalyticEvents.OPEN_MODAL, {
                                type: "Message Too Long Alert",
                                message_content_length: l
                            })
                        } else a.default.dispatch({
                            type: "MESSAGE_LENGTH_UPSELL",
                            channel: I,
                            content: T
                        });
                        C({
                            valid: !1,
                            failureReason: m.MessageRestrictionTypes.MESSAGE_TOO_LONG
                        });
                        return
                    }
                    if (null != I) {
                        if (null != I.getGuildId() && g && o.default.getSlowmodeCooldownGuess(I.id) > 0) {
                            C({
                                valid: !1,
                                failureReason: m.MessageRestrictionTypes.SLOWMODE_COOLDOWN
                            });
                            return
                        }
                        if (null != f)
                            for (let {
                                    check: e,
                                    analyticsType: t,
                                    animation: l
                                }
                                of c.RESTRICTIONS) {
                                let n = e(T, I, S);
                                if (!1 !== n) {
                                    f({
                                        analyticsType: t,
                                        channel: I,
                                        onCancel: () => C({
                                            valid: !1,
                                            failureReason: m.MessageRestrictionTypes.SHOUTING_CANCELLED
                                        }),
                                        onConfirm: () => C({
                                            valid: !0
                                        }),
                                        popoutText: n,
                                        animation: l
                                    });
                                    return
                                }
                            }
                    }
                    if (r.default.isFull()) {
                        (0, s.openModal)(e => (0, n.jsx)(i.default, {
                            title: E.default.Messages.MESSAGE_RATE_LIMITED_HEADER,
                            body: E.default.Messages.MESSAGE_RATE_LIMITED_BODY,
                            confirmText: E.default.Messages.MESSAGE_RATE_LIMITED_BUTTON,
                            ...e
                        }), {
                            onCloseRequest: m.NOOP
                        }), C({
                            valid: !1,
                            failureReason: m.MessageRestrictionTypes.RATE_LIMITED
                        });
                        return
                    }
                    C({
                        valid: !0
                    })
                })({
                    openWarningPopout: t,
                    type: l,
                    content: p,
                    stickers: T,
                    uploads: h,
                    channel: _,
                    restrictMentions: I,
                    respectCooldown: S,
                    userCanUsePremiumMessageLength: g,
                    resolve: e
                }))
            }
        }
    }
]);
//# sourceMappingURL=8c736a8ecc907e3cfce9.js.map