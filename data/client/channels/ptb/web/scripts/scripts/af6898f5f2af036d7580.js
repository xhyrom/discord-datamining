(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75971"], {
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
                    return s
                }
            });
            var n = l("872717"),
                a = l("49111"),
                s = {
                    updateNote(e, t) {
                        n.default.put({
                            url: a.Endpoints.NOTE(e),
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
                    return G
                },
                default: function() {
                    return H
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                o = l("627445"),
                r = l.n(o),
                u = l("748820"),
                d = l("974667"),
                c = l("509043"),
                f = l("446674"),
                m = l("669491"),
                E = l("77078"),
                T = l("272030"),
                _ = l("851387"),
                p = l("737960"),
                S = l("206230"),
                I = l("339023"),
                A = l("405645"),
                h = l("592407"),
                g = l("26989"),
                C = l("957255"),
                N = l("697218"),
                v = l("145131"),
                O = l("476765"),
                M = l("945330"),
                R = l("907566"),
                y = l("151185"),
                x = l("483093"),
                L = l("991170"),
                P = l("487311"),
                D = l("49111"),
                b = l("782340"),
                U = l("618600");
            let j = () => Promise.resolve();

            function F(e) {
                let {
                    userRoles: t,
                    position: l,
                    ...a
                } = e, s = (0, O.useUID)();
                return (0, n.jsxs)(E.Dialog, {
                    className: i(U.overflowRolesPopout, {
                        [U.popoutBottom]: "bottom" === l,
                        [U.popoutTop]: "top" === l
                    }),
                    "aria-labelledby": s,
                    children: [(0, n.jsx)("div", {
                        className: U.overflowRolesPopoutArrowWrapper,
                        children: (0, n.jsx)("div", {
                            className: U.overflowRolesPopoutArrow
                        })
                    }), (0, n.jsxs)(v.default, {
                        className: U.overflowRolesPopoutHeader,
                        align: v.default.Align.CENTER,
                        children: [(0, n.jsx)(R.default, {
                            color: m.default.unsafe_rawColors.PRIMARY_400.css,
                            className: U.overflowRolesPopoutHeaderIcon
                        }), (0, n.jsx)("div", {
                            className: U.overflowRolesPopoutHeaderText,
                            id: s,
                            children: b.default.Messages.ROLES_LIST.format({
                                numRoles: t.length
                            })
                        })]
                    }), (0, n.jsx)(k, {
                        ...a,
                        wrap: !0,
                        userRoles: t
                    })]
                })
            }
            let G = a.forwardRef(function(e, t) {
                var s, o, r;
                let u;
                let {
                    canRemove: _,
                    className: p,
                    role: h,
                    onRemove: g,
                    guildId: C,
                    disableBorderColor: N,
                    onMouseDown: v
                } = e, {
                    tabIndex: O,
                    ...R
                } = (0, d.useListItem)(h.id), y = (0, A.useRoleIcon)({
                    roleId: h.id,
                    size: 16,
                    guildId: C
                }), L = (0, f.useStateFromStores)([S.default], () => S.default.roleStyle), P = (null === (s = h.tags) || void 0 === s ? void 0 : s.guild_connections) === null, D = a.useCallback(e => {
                    (0, T.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("443070").then(l.bind(l, "443070"));
                        return t => (0, n.jsx)(e, {
                            ...t,
                            id: h.id,
                            label: b.default.Messages.COPY_ID_ROLE
                        })
                    })
                }, [h.id]), j = (0, E.useToken)(m.default.unsafe_rawColors.PRIMARY_300).hsl(), F = null !== (o = h.colorString) && void 0 !== o ? o : j, G = null !== (r = (0, c.hex2rgb)(F, .6)) && void 0 !== r ? r : void 0, B = m.default.unsafe_rawColors.WHITE_500.css, Y = (0, c.hex2int)(F);
                null != Y && .3 > (0, c.getDarkness)(Y) && (B = m.default.unsafe_rawColors.PRIMARY_630.css), u = P ? (0, n.jsx)(I.default, {
                    className: U.roleFlowerStar,
                    iconClassName: _ ? U.roleVerifiedIcon : void 0,
                    color: F,
                    size: 14
                }) : "dot" === L ? (0, n.jsx)(E.RoleDot, {
                    className: U.roleDot,
                    color: F,
                    background: !1,
                    tooltip: !1
                }) : (0, n.jsx)(E.RoleCircle, {
                    color: F
                });
                let k = a.useMemo(() => {
                    var t;
                    return {
                        borderColor: N ? void 0 : G,
                        ...null !== (t = e.style) && void 0 !== t ? t : {}
                    }
                }, [G, N, e.style]);
                return (0, n.jsx)(E.FocusRing, {
                    children: (0, n.jsxs)("div", {
                        ref: t,
                        className: i(U.role, p),
                        style: k,
                        onContextMenu: D,
                        onMouseDown: v,
                        "aria-label": h.name,
                        tabIndex: O,
                        ...R,
                        children: [(0, n.jsxs)(E.Clickable, {
                            className: U.roleRemoveButton,
                            onClick: _ ? g : void 0,
                            tabIndex: _ ? O : -1,
                            focusProps: {
                                focusClassName: U.roleRemoveIconFocused
                            },
                            "aria-hidden": !_,
                            "aria-label": b.default.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
                                roleName: h.name
                            }),
                            children: [u, _ ? (0, n.jsx)(M.default, {
                                color: B,
                                className: U.roleRemoveIcon,
                                "aria-hidden": !0
                            }) : null]
                        }), null != y ? (0, n.jsx)(x.default, {
                            className: U.roleIcon,
                            ...y,
                            enableTooltip: !1
                        }) : null, (0, n.jsx)("div", {
                            "aria-hidden": !0,
                            className: U.roleName,
                            children: (0, n.jsx)(E.Text, {
                                variant: "text-xs/medium",
                                className: U.roleNameOverflow,
                                children: h.name
                            })
                        })]
                    })
                })
            });

            function B(e) {
                let {
                    user: t,
                    numRolesHidden: l,
                    roleClassName: a
                } = e, s = (0, d.useListItem)("overflow-more-roles-".concat(t.id));
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
                            className: i(U.overflowButton, a),
                            ...s,
                            children: "+".concat(l)
                        })
                    })
                })
            }

            function Y(e) {
                let {
                    guild: t,
                    user: l,
                    handleAddRole: a,
                    roleClassName: s
                } = e, o = (0, d.useListItem)("overflow-add-roles-".concat(l.id)), r = (0, f.useStateFromStores)([S.default], () => S.default.roleStyle), u = C.default.getHighestRole(t), c = g.default.getMember(t.id, l.id), m = e => e.id !== t.id && !e.managed && C.default.isRoleHigher(t, u, e) && (null == c || -1 === c.roles.indexOf(e.id));
                return (0, n.jsx)(E.Popout, {
                    renderPopout: e => {
                        let {
                            closePopout: l
                        } = e;
                        return (0, n.jsx)(P.default, {
                            guild: t,
                            roleStyle: r,
                            roleFilter: m,
                            onSelect: a,
                            onClose: l
                        })
                    },
                    position: "bottom",
                    align: "center",
                    children: e => (0, n.jsx)(E.FocusRing, {
                        children: (0, n.jsx)("button", {
                            ...e,
                            className: i(U.addButton, s),
                            "aria-label": b.default.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
                            type: "button",
                            ...o,
                            children: (0, n.jsx)(y.default, {
                                className: U.addButtonIcon,
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
                    guild: s,
                    userRoles: o,
                    wrap: c = !0,
                    width: f,
                    className: m,
                    readOnly: E,
                    roleClassName: T,
                    disableBorderColor: p
                } = e, S = a.useRef({}), I = a.useCallback(e => {
                    var t;
                    let n = o.filter(t => t !== e.id);
                    (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? _.default.unassignGuildRoleConnection(s.id, e.id) : h.default.updateMemberRoles(s.id, l.id, n, [], [e.id])
                }, [o, s.id, l.id]), A = a.useCallback(e => {
                    let t = o; - 1 === t.indexOf(e) && (t = t.concat([e])), h.default.updateMemberRoles(s.id, l.id, t, [e], [])
                }, [o, s.id, l.id]), [g, v] = a.useState(null), O = a.useMemo(() => {
                    let e = Object.values(s.roles).filter(e => o.includes(e.id)).sort((e, t) => {
                        var l, n;
                        let a = (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) !== null,
                            s = (null === (n = t.tags) || void 0 === n ? void 0 : n.guild_connections) !== null;
                        return a && !s ? 1 : !a && s ? -1 : 0
                    });
                    return null != g ? e.slice(0, g) : e
                }, [s.roles, g, o]), M = o.length - O.length;
                a.useLayoutEffect(() => {
                    if (c) return;
                    if ("number" != typeof f) throw Error("Unexpected null width");
                    let e = 0,
                        t = 0,
                        l = f - 30 - 4;
                    for (let n = 0; n < O.length; n++) {
                        let a = O[n],
                            s = S.current[a.id];
                        if (null == s) continue;
                        let i = s.offsetWidth;
                        if ((t += i + 4) > l) break;
                        e++
                    }
                    v(t => e < O.length ? e : t)
                }, [c, f, O]);
                let R = N.default.getCurrentUser();
                r(null != R, "MemberRolesList: currentUser cannot be undefined");
                let y = !E && C.default.can(D.Permissions.MANAGE_ROLES, s),
                    x = L.default.getHighestRole(s, R.id),
                    P = a.useMemo(() => "roles-".concat((0, u.v4)()), []),
                    F = (0, d.default)({
                        id: P,
                        isEnabled: !0,
                        scrollToStart: j,
                        scrollToEnd: j,
                        wrap: !0
                    }),
                    k = O.map(e => {
                        var t;
                        return (0, n.jsx)(G, {
                            className: T,
                            role: e,
                            canRemove: y && L.default.isRoleHigher(s, R.id, x, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && l.id === R.id,
                            onRemove: () => I(e),
                            ref: t => {
                                var l, n;
                                return l = e.id, void(null != (n = t) ? S.current[l] = n : delete S.current[l])
                            },
                            guildId: s.id,
                            disableBorderColor: p
                        }, e.id)
                    });
                return null != g && 0 !== M ? t = (0, n.jsx)(B, {
                    ...e,
                    numRolesHidden: M
                }) : y && (t = (0, n.jsx)(Y, {
                    ...e,
                    handleAddRole: A
                })), (0, n.jsx)(d.ListNavigatorProvider, {
                    navigator: F,
                    children: (0, n.jsx)(d.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: l,
                                ...a
                            } = e;
                            return (0, n.jsxs)("div", {
                                className: i(U.root, m),
                                "aria-label": b.default.Messages.ROLES_LIST.format({
                                    numRoles: o.length
                                }),
                                ref: l,
                                ...a,
                                children: [k, t]
                            })
                        }
                    })
                })
            }
            let w = (0, p.default)(k);

            function H(e) {
                return (0, f.useStateFromStores)([C.default], () => {
                    var t;
                    return C.default.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
                }), !1 === e.wrap ? (0, n.jsx)(w, {
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
                    return o
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("77078"),
                i = l("390236"),
                o = a.memo(function(e) {
                    var t, l, o, r;
                    let {
                        user: u,
                        size: d = s.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": f = !1,
                        ...m
                    } = e, E = a.useContext(i.default);
                    return (0, n.jsx)(s.Avatar, {
                        src: (t = u, l = (0, s.getAvatarSize)(d), o = c, r = E, t.getAvatarURL(r, l, o)),
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
                    return _
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("817736"),
                i = l.n(s),
                o = l("446674"),
                r = l("77078"),
                u = l("890674"),
                d = l("349649"),
                c = l("102985"),
                f = l("49111"),
                m = l("782340"),
                E = l("98325");
            class T extends a.PureComponent {
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
                        hideNote: a
                    } = this.props;
                    return a ? null : (0, n.jsx)("div", {
                        className: e,
                        children: (0, n.jsx)(r.TextAreaAutosize, {
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
                    super(...e), this.noteRef = a.createRef(), this.handleBlur = e => {
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

            function _(e) {
                let t = (0, o.useStateFromStores)([c.default], () => c.default.hidePersonalInformation),
                    l = (0, d.default)(e.userId);
                return (0, n.jsx)(T, {
                    ...e,
                    ...l,
                    hideNote: t
                })
            }
            T.defaultProps = {
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
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                o = l("627445"),
                r = l.n(o),
                u = l("446674"),
                d = l("77078"),
                c = l("450911"),
                f = l("54239"),
                m = l("819689"),
                E = l("850391"),
                T = l("884351"),
                _ = l("42203"),
                p = l("27618"),
                S = l("158998"),
                I = l("718422"),
                A = l("49111"),
                h = l("782340"),
                g = l("22531");

            function C(e) {
                let {
                    user: t,
                    autoFocus: l = !1,
                    onClose: s,
                    className: o,
                    inputClassName: C
                } = e, N = a.useRef(null), v = (0, u.useStateFromStores)([p.default], () => p.default.isBlocked(t.id)), O = a.useCallback(e => {
                    if ("Enter" === e.key) {
                        e.preventDefault(), r(null != N.current, "Keypress on Input when not mounted");
                        let l = N.current.value.trim();
                        return (0, I.applyChatRestrictions)({
                            type: E.ChatInputTypes.NORMAL,
                            content: l,
                            channel: null
                        }).then(e => {
                            let {
                                valid: n
                            } = e;
                            n && (c.default.openPrivateChannel(t.id, !1, !1, "Quick Message Input").then(e => {
                                let t = _.default.getChannel(e);
                                r(null != t, "Newly created PrivateChannel is null"), m.default.sendMessage(t.id, T.default.parse(t, l)), (0, f.popLayer)()
                            }), null == s || s())
                        }), !0
                    }
                    e.which === A.KeyboardKeys.SPACE && e.stopPropagation()
                }, [s, t]), M = v ? h.default.Messages.QUICK_DM_BLOCKED : h.default.Messages.QUICK_DM_USER.format({
                    name: S.default.getName(t)
                });
                return (0, n.jsx)(d.TextInput, {
                    className: o,
                    inputClassName: i(C, g.input),
                    inputRef: N,
                    autoFocus: l,
                    placeholder: M,
                    "aria-label": M,
                    onKeyPress: O,
                    disabled: v
                })
            }
        },
        463848: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                UserActivityTypes: function() {
                    return A
                },
                default: function() {
                    return h
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                s = l("77078"),
                i = l("871388"),
                o = l("152311"),
                r = l("532602"),
                u = l("769791"),
                d = l("373469"),
                c = l("42203"),
                f = l("546463"),
                m = l("305961"),
                E = l("800762"),
                T = l("313873"),
                _ = l("474293"),
                p = l("49111"),
                S = l("804354");

            function I(e) {
                let {
                    type: t,
                    source: l,
                    activity: a,
                    applicationStream: i,
                    user: u,
                    guildId: d,
                    channelId: c,
                    onAction: f,
                    isEmbedded: m = (0, o.default)(a),
                    actionColor: E
                } = e;
                return (0, n.jsx)(r.default, {
                    className: (0, _.getClass)(S, "actions", t),
                    type: t,
                    source: l,
                    activity: a,
                    applicationStream: i,
                    user: u,
                    guildId: d,
                    look: s.Button.Looks.FILLED,
                    color: null != E ? E : s.Button.Colors.PRIMARY,
                    channelId: c,
                    onAction: f,
                    isEmbedded: m
                })
            }
            let A = T.default.Types;
            var h = function(e) {
                let {
                    activity: t,
                    user: l,
                    useStoreStream: s = !0,
                    showActions: o = !0,
                    hideHeader: r = !1,
                    ..._
                } = e, S = (0, a.useStateFromStores)([d.default], () => s ? d.default.getAnyStreamForUser(l.id) : null), A = (0, a.useStateFromStores)([m.default, E.default, c.default], () => {
                    var e, n;
                    return (0, i.default)(t, p.ActivityFlags.EMBEDDED) ? m.default.getGuild(null === (e = c.default.getChannel(null === (n = E.default.getVoiceStateForSession(l.id, null == t ? void 0 : t.session_id)) || void 0 === n ? void 0 : n.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null
                }), h = (0, a.useStateFromStores)([m.default], () => null != S ? m.default.getGuild(S.guildId) : null), g = (0, a.useStateFromStores)([f.default], () => {
                    if (null != t) return null != t.application_id ? f.default.getGame(t.application_id) : f.default.getGameByName(t.name);
                    return null
                });
                return (0, n.jsx)(T.default, {
                    ..._,
                    activity: t,
                    user: l,
                    application: g,
                    hideHeader: r,
                    activityGuild: null != A ? A : h,
                    renderActions: o ? () => (0, n.jsx)(I, {
                        ..._,
                        applicationStream: S,
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
            var a = l("448105"),
                s = l.n(a),
                i = l("917351"),
                o = l.n(i),
                r = l("509043"),
                u = l("77078"),
                d = l("49111"),
                c = l("782340"),
                f = l("558062"),
                m = function(e) {
                    var t, l;
                    let {
                        className: a,
                        guild: i,
                        roleStyle: m,
                        roleFilter: E,
                        onSelect: T,
                        onClose: _
                    } = e, p = e => o(i.roles).filter(E).filter(t => s(e.toLowerCase(), t.name.toLowerCase())).value();
                    return (0, n.jsx)(u.ComboboxPopout, {
                        className: a,
                        value: new Set,
                        onChange: T,
                        placeholder: c.default.Messages.ADD_ROLE_PLACEHOLDER,
                        "aria-label": c.default.Messages.ADD_ROLE_A11Y_LABEL,
                        onClose: _,
                        children: e => p(e).map(e => (0, n.jsxs)(u.ComboboxItem, {
                            value: e.id,
                            children: ["dot" === m ? (0, n.jsx)(u.RoleDot, {
                                className: f.popoutRoleDot,
                                color: null !== (t = e.colorString) && void 0 !== t ? t : (0, r.int2hex)(d.DEFAULT_ROLE_COLOR),
                                background: !1,
                                tooltip: !1
                            }) : (0, n.jsx)(u.RoleCircle, {
                                className: f.popoutRoleCircle,
                                color: null !== (l = e.colorString) && void 0 !== l ? l : (0, r.int2hex)(d.DEFAULT_ROLE_COLOR)
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
                    return o
                },
                getTimeAndUnit: function() {
                    return A
                },
                default: function() {
                    return h
                }
            });
            var n, a, s, i, o, r, u = l("37983"),
                d = l("884691"),
                c = l("917351"),
                f = l.n(c),
                m = l("862337"),
                E = l("782340");
            (n = i || (i = {})).ACTIVITY_FEED = "ACTIVITY_FEED", n.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW", n.USER_ACTIVITY = "USER_ACTIVITY", n.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED", n.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED", (a = o || (o = {})).NONE = "NONE", a.SECONDS = "SECONDS", a.MINUTES = "MINUTES", a.HOURS = "HOURS", a.DAYS = "DAYS", a.WEEKS = "WEEKS", a.MONTHS = "MONTHS", a.YEARS = "YEARS", (s = r || (r = {})).START = "START", s.END = "END", s.TIME = "TIME";
            let T = {
                    [o.NONE]: e => 0,
                    [o.SECONDS]: e => 60 * e,
                    [o.MINUTES]: e => e,
                    [o.HOURS]: e => e / 60,
                    [o.DAYS]: e => e / 60 / 24,
                    [o.WEEKS]: e => e / 60 / 24 / 7,
                    [o.MONTHS]: e => e / 60 / 24 / 31,
                    [o.YEARS]: e => e / 60 / 24 / 365
                },
                _ = [{
                    unit: o.NONE,
                    max: 0
                }, {
                    unit: o.SECONDS,
                    max: 1
                }, {
                    unit: o.MINUTES,
                    max: 60
                }, {
                    unit: o.HOURS,
                    max: 1440
                }, {
                    unit: o.DAYS,
                    max: 44640
                }, {
                    unit: o.WEEKS,
                    max: 40320
                }, {
                    unit: o.MONTHS,
                    max: 525600
                }, {
                    unit: o.YEARS,
                    max: 1 / 0
                }],
                p = e => (t, l) => null == l ? "" : e().format({
                    time: t,
                    ...l
                }),
                S = {
                    [i.ACTIVITY_FEED]: {
                        [r.START]: {
                            [o.SECONDS]: () => E.default.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                            [o.MINUTES]: e => E.default.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({
                                time: e
                            }),
                            [o.HOURS]: e => E.default.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({
                                time: e
                            }),
                            [o.DAYS]: e => E.default.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({
                                time: e
                            })
                        },
                        [r.END]: {
                            [o.SECONDS]: () => E.default.Messages.GAME_FEED_USER_PLAYING_JUST_ENDED,
                            [o.MINUTES]: e => E.default.Messages.GAME_FEED_USER_PLAYED_MINUTES_AGO.format({
                                time: e
                            }),
                            [o.HOURS]: e => E.default.Messages.GAME_FEED_USER_PLAYED_HOURS_AGO.format({
                                time: e
                            }),
                            [o.DAYS]: e => E.default.Messages.GAME_FEED_USER_PLAYED_DAYS_AGO.format({
                                time: e
                            }),
                            [o.WEEKS]: e => E.default.Messages.GAME_FEED_USER_PLAYED_WEEKS_AGO.format({
                                time: e
                            }),
                            [o.MONTHS]: e => E.default.Messages.GAME_FEED_USER_PLAYED_MONTHS_AGO.format({
                                time: e
                            }),
                            [o.YEARS]: e => E.default.Messages.GAME_FEED_USER_PLAYED_YEARS_AGO.format({
                                time: e
                            })
                        }
                    },
                    [i.ACTIVITY_FEED_NEW]: {
                        [r.START]: {
                            [o.SECONDS]: p(() => E.default.Messages.ACTIVITY_FEED_USER_PLAYING_JUST_STARTED),
                            [o.MINUTES]: p(() => E.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_MINUTES),
                            [o.HOURS]: p(() => E.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_HOURS),
                            [o.DAYS]: p(() => E.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_DAYS)
                        },
                        [r.END]: {
                            [o.SECONDS]: e => E.default.Messages.DURATION_SECONDS_AGO.format({
                                seconds: e
                            }),
                            [o.MINUTES]: e => E.default.Messages.DURATION_MINUTES_AGO.format({
                                minutes: e
                            }),
                            [o.HOURS]: e => E.default.Messages.DURATION_HOURS_AGO.format({
                                hours: e
                            }),
                            [o.DAYS]: e => E.default.Messages.DURATION_DAYS_AGO.format({
                                days: e
                            })
                        }
                    },
                    [i.USER_ACTIVITY]: {
                        [r.START]: {
                            [o.SECONDS]: () => E.default.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                            [o.MINUTES]: function(e, t) {
                                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return l ? E.default.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({
                                    time: e
                                }) : E.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_MINUTES.format({
                                    time: e
                                })
                            },
                            [o.HOURS]: function(e, t) {
                                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return l ? E.default.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({
                                    time: e
                                }) : E.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_HOURS.format({
                                    time: e
                                })
                            },
                            [o.DAYS]: function(e, t) {
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
                        [r.TIME]: {
                            [o.NONE]: () => E.default.Messages.GAME_LIBRARY_TIME_PLAYED_NONE,
                            [o.SECONDS]: e => E.default.Messages.GAME_LIBRARY_TIME_PLAYED_SECONDS.format({
                                time: e
                            }),
                            [o.MINUTES]: e => E.default.Messages.GAME_LIBRARY_TIME_PLAYED_MINUTES.format({
                                time: e
                            }),
                            [o.HOURS]: e => E.default.Messages.GAME_LIBRARY_TIME_PLAYED_HOURS.format({
                                time: e
                            })
                        }
                    },
                    [i.GAME_LIBRARY_LAST_PLAYED]: {
                        [r.END]: {
                            [o.NONE]: () => E.default.Messages.GAME_LIBRARY_LAST_PLAYED_NONE,
                            [o.SECONDS]: () => E.default.Messages.GAME_LIBRARY_LAST_PLAYED_JUST_NOW,
                            [o.MINUTES]: e => E.default.Messages.GAME_LIBRARY_LAST_PLAYED_MINUTES.format({
                                time: e
                            }),
                            [o.HOURS]: e => E.default.Messages.GAME_LIBRARY_LAST_PLAYED_HOURS.format({
                                time: e
                            }),
                            [o.DAYS]: e => E.default.Messages.GAME_LIBRARY_LAST_PLAYED_DAYS.format({
                                time: e
                            }),
                            [o.WEEKS]: e => E.default.Messages.GAME_LIBRARY_LAST_PLAYED_WEEKS.format({
                                time: e
                            }),
                            [o.MONTHS]: e => E.default.Messages.GAME_LIBRARY_LAST_PLAYED_MONTHS.format({
                                time: e
                            }),
                            [o.YEARS]: e => E.default.Messages.GAME_LIBRARY_LAST_PLAYED_YEARS.format({
                                time: e
                            })
                        }
                    }
                };

            function I(e, t) {
                let l = _.findIndex(t => {
                        let {
                            max: l,
                            unit: n
                        } = t;
                        return n === o.NONE && e === l || e < l
                    }),
                    n = f.findLast(_, e => {
                        let {
                            unit: l
                        } = e;
                        return t(l)
                    }, l);
                if (null != n) return n.unit;
                let a = _.find(e => {
                    let {
                        unit: l
                    } = e;
                    return t(l)
                });
                return null != a ? a.unit : null
            }

            function A(e, t) {
                let l = null != e ? I(e, e => t.includes(e)) : o.NONE,
                    n = null != l ? T[l] : null;
                return {
                    unit: l,
                    time: null != e && null != n ? Math.floor(n(e)) : null
                }
            }

            function h(e) {
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
                            a = 0;
                        return null != e ? a = n - e : null != t && (a = n - t), Math.abs(a) / 1e3 / 60
                    }
                    getTimeUnit(e, t, l) {
                        let n = I(e, e => (function(e, t, l) {
                            let n = S[l];
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
                        if (null != e) return r.START;
                        if (null != t) return r.END;
                        if (null != l) return r.TIME;
                        return null
                    }
                    transformTime(e, t) {
                        return T[e](t)
                    }
                    render() {
                        let {
                            location: t,
                            messageProps: l,
                            isApplicationStreaming: n,
                            ...a
                        } = this.props, {
                            time: s
                        } = this.state, i = this.getType();
                        if (null == i) return null;
                        let o = this.getTimeUnit(s, t, i),
                            r = S[t][i];
                        if (null == r) return null;
                        let d = r[o],
                            c = Math.floor(this.transformTime(o, s));
                        return (0, u.jsx)(e, {
                            ...a,
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
                }).Locations = i, t.Types = r, t
            }
        },
        832627: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("862337"),
                i = l("782340");

            function o(e) {
                return "".concat(e).length < 13 ? 1e3 * e : e
            }

            function r(e) {
                return class extends a.PureComponent {
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
                        return null != e.end ? this.getDiff(t, o(e.end) / 1e3) : null != e.start ? this.getDiff(o(e.start) / 1e3, t) : {
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
                            hours: a,
                            minutes: s,
                            seconds: o
                        } = this.state, r = {
                            hours: this.renderTime(a, !0),
                            minutes: this.renderTime(s),
                            seconds: this.renderTime(o)
                        };
                        return null != t.end ? (0, n.jsx)(e, {
                            ...l,
                            message: i.default.Messages.USER_ACTIVITY_TIMESTAMP_END.format(r)
                        }) : null != t.start ? (0, n.jsx)(e, {
                            ...l,
                            message: i.default.Messages.USER_ACTIVITY_TIMESTAMP_START.format(r)
                        }) : null
                    }
                    constructor(e) {
                        super(e), this._interval = new s.Interval, this.state = {
                            ...this.getUpdatedTime()
                        }
                    }
                }
            }
        },
        340066: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("884691"),
                a = (e, t) => {
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
                    return a
                }
            });
            var n = l("800762");

            function a(e) {
                var t;
                let {
                    channelId: l,
                    userId: a,
                    activity: s
                } = e, i = (null == s ? void 0 : s.session_id) == null ? l : null === (t = n.default.getVoiceStateForSession(a, null == s ? void 0 : s.session_id)) || void 0 === t ? void 0 : t.channelId;
                return null != i ? i : void 0
            }
        },
        575365: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("36539"),
                a = l("49111");

            function s(e) {
                return null == e || null == e.type || e.type !== a.ActivityTypes.PLAYING ? null : (0, n.default)(e) ? a.ActivityGamePlatforms.XBOX : null != e.platform ? e.platform : a.ActivityGamePlatforms.DESKTOP
            }
        },
        609030: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("376556"),
                a = l("575365"),
                s = l("49111"),
                i = l("782340");

            function o(e) {
                var t;
                let l = null !== (t = (0, a.default)(e)) && void 0 !== t ? t : "";
                switch (l) {
                    case s.ActivityGamePlatforms.PS4:
                    case s.ActivityGamePlatforms.PS5:
                        return i.default.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({
                            platform: l.toUpperCase()
                        });
                    case s.ActivityGamePlatforms.XBOX:
                    case s.ActivityGamePlatforms.SAMSUNG:
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
                    return a
                }
            });
            var n = l("49111");

            function a(e) {
                return null != e && e.type === n.ActivityTypes.PLAYING
            }
        },
        36539: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("954016"),
                a = l("49111");

            function s(e) {
                return null != e && (e.application_id === n.XBOX_ACTIVITY_APPLICATION_ID || e.platform === a.ActivityGamePlatforms.XBOX)
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
            var a = l("414456"),
                s = l.n(a),
                i = l("627445"),
                o = l.n(i),
                r = l("118810"),
                u = l("446674"),
                d = l("77078"),
                c = l("86621"),
                f = l("376556"),
                m = l("118033"),
                E = l("697218"),
                T = l("145131"),
                _ = l("313873"),
                p = l("429928"),
                S = l("36539"),
                I = l("698372"),
                A = l("770370"),
                h = l("667618"),
                g = l("865677"),
                C = l("774713"),
                N = l("510788"),
                v = l("756731"),
                O = l("762806"),
                M = l("438278"),
                R = l("898481"),
                y = l("49111"),
                x = l("278433"),
                L = (0, c.default)(e => {
                    let t, {
                            activity: l,
                            user: a,
                            applicationStream: i,
                            className: c,
                            guildId: L,
                            channelId: P,
                            source: D,
                            color: b = d.Button.Colors.WHITE,
                            look: U = d.Button.Looks.OUTLINED,
                            type: j,
                            onAction: F,
                            isEmbedded: G = !1
                        } = e,
                        B = (0, I.default)(),
                        Y = (0, u.useStateFromStores)([E.default], () => {
                            let e = E.default.getCurrentUser();
                            return o(null != e, "UserActivityActions: currentUser cannot be undefined"), e
                        }),
                        k = j === _.Types.PROFILE || j === _.Types.PROFILE_V2,
                        w = j === _.Types.STREAM_PREVIEW || null != i,
                        H = (0, p.default)(l),
                        V = (0, m.isStageActivity)(l),
                        W = k ? T.default.Align.END : T.default.Align.STRETCH,
                        K = H || w ? T.default.Direction.HORIZONTAL : T.default.Direction.VERTICAL;
                    if ((0, S.default)(l)) t = [(0, n.jsx)(A.default, {
                        look: U,
                        color: b,
                        platform: f.default.get(y.PlatformTypes.XBOX)
                    }, "ConnectPlatformActivityButton")];
                    else if ((null == l ? void 0 : l.platform) != null && [y.ActivityGamePlatforms.PS4, y.ActivityGamePlatforms.PS5].includes(l.platform)) t = [(0, n.jsx)(A.default, {
                        look: U,
                        color: b,
                        platform: f.default.get(y.PlatformTypes.PLAYSTATION)
                    }, "ConnectPlatformActivityButton")];
                    else if (H) {
                        let e = (0, n.jsx)(O.default, {
                                activity: l,
                                user: a,
                                color: b,
                                look: U,
                                guildId: L,
                                channelId: P,
                                source: D
                            }, "spotify-activity-sync-button"),
                            s = (0, n.jsx)(v.default, {
                                activity: l,
                                user: a,
                                color: b,
                                look: U,
                                guildId: L,
                                channelId: P,
                                source: D
                            }, "spotify-activity-play-button");
                        t = [s, e]
                    } else if (V) {
                        let e = (0, m.unpackStageChannelParty)(l);
                        null != e && (t = [(0, n.jsx)(C.default, {
                            guildId: e.guildId,
                            channelId: e.channelId,
                            color: b,
                            look: U,
                            isProfile: k
                        }, e.channelId)])
                    } else if (w) {
                        let e = (0, n.jsx)(R.default, {
                            isCurrentUser: Y.id === a.id,
                            color: b,
                            look: U,
                            applicationStream: i
                        }, "watch-button");
                        t = [e]
                    } else {
                        let e = (0, n.jsx)(M.default, {
                                activity: l,
                                color: b,
                                look: U
                            }, "watch-button"),
                            s = (0, n.jsx)(g.default, {
                                activity: l,
                                currentEmbeddedApplication: B,
                                user: a,
                                isCurrentUser: Y.id === a.id,
                                color: b,
                                look: U,
                                channelId: P,
                                isEmbedded: G
                            }, "join-activity-button"),
                            i = (0, n.jsx)(N.default, {
                                activity: l,
                                user: a,
                                color: b,
                                look: U
                            }, "notify-button"),
                            o = (0, n.jsx)(h.default, {
                                user: a,
                                color: b,
                                look: U,
                                activity: l
                            }, "custom-activity-button");
                        if (null == s && null == i && null == e && null == o) return null;
                        t = [s, i, e, o]
                    }
                    let z = K === T.default.Direction.VERTICAL;
                    return (0, n.jsx)(T.default, {
                        grow: 0,
                        align: W,
                        direction: K,
                        wrap: z ? T.default.Wrap.WRAP : T.default.Wrap.NO_WRAP,
                        className: s(c, x.buttonsWrapper, z ? x.vertical : x.horizontal),
                        onClick: function(e) {
                            if ((0, r.isElement)(e.target)) "BUTTON" === e.target.nodeName && (null == F || F())
                        },
                        children: t
                    })
                })
        },
        295999: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("77078"),
                o = l("808480");

            function r(e) {
                let {
                    className: t,
                    size: l,
                    ...a
                } = e;
                return (0, n.jsx)(i.Button, {
                    className: s(o.button, t),
                    size: s(o.buttonSize, l),
                    ...a
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
            var a = l("446674"),
                s = l("926994"),
                i = l("47319"),
                o = l("295999"),
                r = l("782340"),
                u = l("52638");

            function d(e) {
                let {
                    color: t,
                    look: l,
                    platform: d
                } = e, c = (0, a.useStateFromStores)([i.default], () => i.default.getAccounts().some(e => e.type === d.type));
                return c ? null : (0, n.jsx)(o.default, {
                    onClick: () => (0, s.default)(d.type, "Activity Action"),
                    color: t,
                    look: l,
                    fullWidth: !0,
                    children: (0, n.jsxs)("div", {
                        className: u.flex,
                        children: [(0, n.jsx)("img", {
                            alt: "",
                            className: u.platformIcon,
                            src: d.icon.whiteSVG
                        }), r.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
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
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("968194"),
                s = l("128259"),
                i = l("253981"),
                o = l("295999");

            function r(e) {
                let {
                    activity: t,
                    color: l,
                    user: r,
                    look: u
                } = e;
                if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
                async function d(e, t, l) {
                    try {
                        let n = await (0, a.getMetadata)(e, t);
                        if (null == n || !Array.isArray(n.button_urls)) return;
                        let o = n.button_urls[l];
                        if ("string" != typeof o) return;
                        let r = i.default.safeParseWithQuery(o);
                        if (null == r || null == r.protocol || null == r.hostname) return;
                        (0, s.handleClick)({
                            href: i.default.format(r),
                            trusted: !1
                        })
                    } catch (e) {}
                }
                return (0, n.jsx)(n.Fragment, {
                    children: t.buttons.map((e, a) => (0, n.jsx)(o.default, {
                        color: l,
                        look: u,
                        onClick: () => d(t, r.id, a),
                        children: e
                    }, "customButton-".concat(a)))
                })
            }
        },
        865677: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return B
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("446674"),
                i = l("77078"),
                o = l("260365"),
                r = l("823411"),
                u = l("987317"),
                d = l("997289"),
                c = l("685665"),
                f = l("442939"),
                m = l("860285"),
                E = l("42203"),
                T = l("86878"),
                _ = l("525065"),
                p = l("305961"),
                S = l("686470"),
                I = l("957255"),
                A = l("27618"),
                h = l("18494"),
                g = l("697218"),
                C = l("800762"),
                N = l("953998"),
                v = l("535974"),
                O = l("773336"),
                M = l("602043"),
                R = l("191225"),
                y = l("706508"),
                x = l("612696"),
                L = l("126808"),
                P = l("871388"),
                D = l("407908"),
                b = l("141962"),
                U = l("295999"),
                j = l("954016"),
                F = l("49111"),
                G = l("782340");

            function B(e) {
                let {
                    activity: t,
                    currentEmbeddedApplication: l,
                    isCurrentUser: B,
                    color: Y,
                    look: k,
                    hover: w,
                    user: H,
                    channelId: V,
                    isEmbedded: W = !1
                } = e, {
                    analyticsLocations: K
                } = (0, c.default)(), [z, J] = a.useState(!1), Q = (0, L.default)({
                    channelId: V,
                    userId: H.id,
                    activity: t
                }), X = (0, s.useStateFromStores)([g.default], () => g.default.getCurrentUser()), q = (0, s.useStateFromStores)([S.default, m.default, v.default, T.default], () => W || (null == t ? void 0 : t.application_id) != null && (0, M.isLaunchable)({
                    LibraryApplicationStore: S.default,
                    LaunchableGameStore: m.default,
                    DispatchApplicationStore: v.default,
                    ConnectedAppsStore: T.default,
                    applicationId: t.application_id
                })), Z = (0, s.useStateFromStores)([R.default], () => Array.from(R.default.getSelfEmbeddedActivities().values()).some(e => {
                    let {
                        application_id: l,
                        channelId: n
                    } = e;
                    return l === (null == t ? void 0 : t.application_id) && n === Q
                })), $ = (0, s.useStateFromStores)([N.default], () => null != t && null != t.application_id && N.default.getState(t.application_id, F.ActivityActionTypes.JOIN) === F.ActivityActionStates.LOADING), [ee] = (0, f.default)((null == t ? void 0 : t.application_id) != null ? [null == t ? void 0 : t.application_id] : []), et = (0, s.useStateFromStores)([E.default, p.default, _.default, A.default, h.default, C.default, I.default], () => (0, x.default)({
                    user: H,
                    activity: t,
                    application: ee,
                    channelId: Q,
                    currentUser: X,
                    isEmbedded: W,
                    ChannelStore: E.default,
                    GuildStore: p.default,
                    GuildMemberCountStore: _.default,
                    RelationshipStore: A.default,
                    SelectedChannelStore: h.default,
                    VoiceStateStore: C.default,
                    PermissionStore: I.default
                })), el = (0, d.useAnalyticsContext)(), en = !O.isPlatformEmbedded, ea = (0, P.default)(t, F.ActivityFlags.JOIN) || W;
                if (null == t || !ea || null == t.application_id) return null;
                let es = !B && (en || q) && !z && !Z && (!W || et),
                    ei = null;
                B ? ei = G.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : !en && !q && (ei = G.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                    name: t.name
                }));
                let eo = async (e, t) => {
                    var l;
                    null != t.session_id && null != t.application_id && (await r.default.join({
                        userId: e.id,
                        sessionId: t.session_id,
                        applicationId: t.application_id,
                        channelId: h.default.getVoiceChannelId(),
                        messageId: null,
                        intent: j.ActivityIntent.PLAY,
                        embedded: (0, P.default)(t, F.ActivityFlags.EMBEDDED)
                    }), (0, D.default)({
                        type: F.AnalyticsGameOpenTypes.JOIN,
                        userId: e.id,
                        applicationId: t.application_id,
                        partyId: null === (l = t.party) || void 0 === l ? void 0 : l.id,
                        locationObject: el.location,
                        analyticsLocations: K
                    }))
                }, er = async () => {
                    let e = !1;
                    if (W) {
                        if (!et || null == Q) return;
                        e = await (0, y.default)({
                            activity: t,
                            currentEmbeddedApplication: l,
                            activityChannelId: Q,
                            locationObject: el.location,
                            embeddedActivitiesManager: b.default,
                            analyticsLocations: K
                        })
                    }
                    if (!e) {
                        et && eo(H, t), J(!0);
                        let e = await o.default.sendActivityInviteUser({
                            type: F.ActivityActionTypes.JOIN_REQUEST,
                            userId: H.id,
                            activity: t,
                            location: F.AnalyticsLocations.PROFILE_POPOUT
                        });
                        null != e && u.default.selectPrivateChannel(e.id)
                    }
                }, eu = et ? G.default.Messages.JOIN : G.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
                return W && (eu = G.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY), (0, n.jsx)(i.Tooltip, {
                    text: ei,
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: l
                        } = e;
                        return (0, n.jsx)(U.default, {
                            onClick: er,
                            onMouseEnter: t,
                            onMouseLeave: l,
                            color: Y,
                            look: k,
                            hover: w,
                            disabled: !es,
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
            var a = l("414456"),
                s = l.n(a),
                i = l("446674"),
                o = l("716214"),
                r = l("800762"),
                u = l("295999"),
                d = l("782340"),
                c = l("953212"),
                f = e => {
                    let {
                        guildId: t,
                        channelId: l,
                        color: a,
                        look: f,
                        isProfile: m
                    } = e, E = (0, i.useStateFromStores)([r.default], () => r.default.isInChannel(l), [l]);
                    return (0, n.jsx)(u.default, {
                        className: s(c.button, {
                            [c.popout]: !m
                        }),
                        color: a,
                        look: f,
                        disabled: E,
                        onClick: () => o.connectOrLurkStage(t, l),
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
            var a = l("605250"),
                s = l("871388"),
                i = l("295999"),
                o = l("49111"),
                r = l("782340");

            function u(e) {
                let {
                    activity: t,
                    user: l,
                    look: u,
                    color: d
                } = e;
                return (0, s.default)(t, o.ActivityFlags.INSTANCE) ? (0, n.jsx)(i.default, {
                    look: u,
                    color: d,
                    onClick: function() {
                        new(0, a.default)("UserActivityActions").log("notify", l.id, t)
                    },
                    fullWidth: !0,
                    children: r.default.Messages.USER_ACTIVITY_ACTION_NOTIFY_ME
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
            var a = l("564594"),
                s = l("871388"),
                i = l("429928"),
                o = l("49111"),
                r = l("808480");

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
                if (null == t || !(0, s.default)(t, o.ActivityFlags.PLAY) || !(0, i.default)(t)) return null;
                let E = {
                    key: "play",
                    className: r.button,
                    size: r.buttonSize,
                    color: u,
                    look: d,
                    activity: t,
                    user: l,
                    fullWidth: !0
                };
                return (0, n.jsx)(a.default, {
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
            var a = l("854937"),
                s = l("871388"),
                i = l("429928"),
                o = l("49111"),
                r = l("808480");

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
                if (null == t || !(0, s.default)(t, o.ActivityFlags.SYNC)) return null;
                let E = {
                    key: "sync",
                    className: r.button,
                    size: r.buttonSize,
                    color: u,
                    look: d,
                    user: l,
                    activity: t
                };
                return (0, i.default)(t) ? (0, n.jsx)(a.default, {
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
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("287585"),
                s = l("502651"),
                i = l("295999"),
                o = l("782340");

            function r(e) {
                let {
                    activity: t,
                    color: l,
                    look: r
                } = e, u = (0, s.default)(t);
                return u ? (0, n.jsx)(i.default, {
                    onClick: () => {
                        let e = (0, a.default)(t);
                        return window.open(null != e ? e : void 0)
                    },
                    color: l,
                    look: r,
                    fullWidth: !0,
                    children: o.default.Messages.WATCH
                }, "play-activity") : null
            }
        },
        898481: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return A
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                s = l("77078"),
                i = l("772017"),
                o = l("987317"),
                r = l("990766"),
                u = l("244201"),
                d = l("223913"),
                c = l("373469"),
                f = l("42203"),
                m = l("30672"),
                E = l("619911"),
                T = l("659500"),
                _ = l("295999"),
                p = l("49111"),
                S = l("782340"),
                I = l("317468");

            function A(e) {
                let {
                    isCurrentUser: t,
                    color: l,
                    look: A,
                    applicationStream: h
                } = e, {
                    activeStream: g,
                    watchingOtherStream: C
                } = (0, a.useStateFromStoresObject)([c.default], () => ({
                    activeStream: c.default.getActiveStreamForApplicationStream(h),
                    watchingOtherStream: null != h && c.default.getAllActiveStreamsForChannel(h.channelId).filter(e => {
                        let {
                            ownerId: t
                        } = e;
                        return t !== h.ownerId
                    }).length > 0
                })), N = (0, a.useStateFromStores)([f.default], () => f.default.getChannel(null == h ? void 0 : h.channelId)), [v, O] = (0, d.useCanWatchStream)(N), M = (0, u.useWindowDispatch)(), R = null != g && null != h && g.state !== p.ApplicationStreamStates.ENDED && g.ownerId === h.ownerId, y = e => {
                    null != h && (o.default.selectVoiceChannel(h.channelId), !R && (0, r.watchStreamAndTransitionToStream)(h, {
                        forceMultiple: e
                    }), M.dispatch(p.ComponentActions.POPOUT_CLOSE), T.ComponentDispatch.dispatch(p.ComponentActions.MODAL_CLOSE), i.default.popAll())
                };
                if (null == h) return null;
                let x = (0, d.getStreamCTAString)(O);
                t ? x = S.default.Messages.WATCH_STREAM_STREAMING : R && (x = S.default.Messages.WATCH_STREAM_WATCHING);
                let L = {
                    color: l,
                    look: A
                };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(_.default, {
                        disabled: t || R || !v,
                        onClick: () => y(!1),
                        ...L,
                        fullWidth: !0,
                        children: [(0, n.jsx)(E.default, {
                            className: I.streamIcon
                        }), x]
                    }, "play"), C && !R ? (0, n.jsx)(s.Tooltip, {
                        text: S.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                        children: e => (0, n.jsx)(_.default, {
                            ...e,
                            onClick: () => {
                                var t;
                                null === (t = e.onClick) || void 0 === t || t.call(e), y(!0)
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
                    return s
                }
            });
            var n = l("872717"),
                a = l("49111");

            function s(e) {
                var t, l;
                if (null != e.custom_install_url) return e.custom_install_url;
                let s = {};
                s.client_id = e.id, (null === (t = e.install_params) || void 0 === t ? void 0 : t.permissions) != null && (s.permissions = e.install_params.permissions), (null === (l = e.install_params) || void 0 === l ? void 0 : l.scopes) != null && (s.scope = e.install_params.scopes.join(" "));
                let i = Object.entries(s).map(e => {
                    let [t, l] = e;
                    return "".concat(t, "=").concat(encodeURIComponent(l))
                }).join("&");
                return "".concat(n.default.getAPIBaseURL(!1)).concat(a.Endpoints.OAUTH2_AUTHORIZE, "?").concat(i)
            }
        },
        227422: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("884691"),
                a = l("760850");

            function s(e, t) {
                let [l, s] = n.useState();
                return n.useEffect(() => {
                    if (null == e || null != t) {
                        s(void 0);
                        return
                    }(0, a.default)().then(t => {
                        null != t && t.identifyGame(e, (e, t) => {
                            0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name && s("data:image/png;base64,".concat(t.icon))
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
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("77078");
            l("103603");
            var s = l("573135");

            function i(e) {
                return "number" != typeof e ? (0, a.getAvatarSize)(e) * s.DECORATION_TO_AVATAR_RATIO : e * s.DECORATION_TO_AVATAR_RATIO
            }
            let o = e => {
                let {
                    analyticsLocations: t,
                    initialSelectedDecoration: s,
                    isTryItOutFlow: i
                } = e;
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("791050").then(l.bind(l, "791050"));
                    return l => (0, n.jsx)(e, {
                        ...l,
                        analyticsLocations: t,
                        initialSelectedDecoration: s,
                        isTryItOutFlow: i
                    })
                }, {})
            }
        },
        850391: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                SlateToolbarTypes: function() {
                    return a
                },
                ChatInputTypes: function() {
                    return I
                }
            });
            var n, a, s = l("394846"),
                i = l("474643");
            (n = a || (a = {}))[n.TOOLTIP = 0] = "TOOLTIP", n[n.STATIC = 1] = "STATIC";
            let o = {
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
                        ignorePreference: s.isMobile,
                        disableEnterToSubmit: s.isMobile,
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
                r = {
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
                        ignorePreference: s.isMobile,
                        disableEnterToSubmit: s.isMobile,
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
                        ignorePreference: s.isMobile,
                        disableEnterToSubmit: s.isMobile,
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
                T = {
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
                _ = {
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
                p = {
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
                S = {
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
                    toolbarType: a.STATIC
                },
                I = {
                    NORMAL: o,
                    OVERLAY: r,
                    SIDEBAR: u,
                    EDIT: d,
                    FORM: c,
                    VOICE_CHANNEL_STATUS: f,
                    THREAD_CREATION: m,
                    PROFILE_BIO_INPUT: T,
                    CUSTOM_GIFT: _,
                    RULES_INPUT: p,
                    CREATE_FORUM_POST: E,
                    FORUM_CHANNEL_GUIDELINES: S
                }
        },
        235275: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useIsDMsToClydeEnabled: function() {
                    return r
                }
            });
            var n = l("446674"),
                a = l("862205"),
                s = l("305961"),
                i = l("980215");
            let o = (0, a.createExperiment)({
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

            function r() {
                let {
                    isDMsToClydeEnabled: e
                } = o.useExperiment({
                    location: "dbd3ac_1"
                }, {
                    autoTrackExposure: !1
                }), t = (0, n.useStateFromStoresArray)([s.default], () => s.default.getGuildIds()), l = t.some(e => (0, i.getClydeExperimentEnabled)(s.default.getGuild(e)));
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
            var a = l("414456"),
                s = l.n(a),
                i = l("446674"),
                o = l("77078"),
                r = l("697218"),
                u = l("987772"),
                d = l("158998"),
                c = l("473591"),
                f = l("782340"),
                m = l("189590");

            function E(e) {
                let {
                    userId: t,
                    guildId: l,
                    className: a
                } = e, E = (0, i.useStateFromStores)([c.default], () => c.default.getSettings(l)), T = (0, i.useStateFromStores)([r.default], () => r.default.getUser(null != t ? t : null == E ? void 0 : E.last_edited_by));
                return null == T ? null : (0, n.jsxs)("div", {
                    className: s(a, m.container),
                    children: [(0, n.jsx)(u.default, {
                        color: "var(--interactive-active)",
                        width: 12,
                        height: 12
                    }), (0, n.jsx)(o.Text, {
                        color: "text-normal",
                        variant: "text-xs/medium",
                        children: f.default.Messages.CLYDE_LAST_EDITED_BY_TAG.format({
                            username: d.default.getUserTag(T, {
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
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                s = l("599110"),
                i = l("49111");

            function o(e) {
                s.default.track(i.AnalyticEvents.OPEN_MODAL, {
                    type: "Clyde Share Profile",
                    location_page: "Profile Popout",
                    guild_id: e
                }), (0, a.openModalLazy)(async () => {
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
                    return T
                },
                usePlatforms: function() {
                    return _
                },
                useLegacyPlatformType: function() {
                    return p
                }
            });
            var n = l("884691"),
                a = l("917351"),
                s = l.n(a),
                i = l("446674"),
                o = l("376556"),
                r = l("695702"),
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

            function T(e) {
                let {
                    forUserProfile: t
                } = e, l = (0, i.useStateFromStores)([d.default], () => d.default.getCurrentUser()), n = r.PlayStationVoiceExperiment.useExperiment({
                    location: "f2f7ef_1"
                }, {
                    autoTrackExposure: !1
                }).allowPlayStationStaging;
                return e => {
                    var a;
                    return e.type === c.PlatformTypes.PLAYSTATION_STAGING ? n : !!(void 0 !== l && (null === (a = m[e.type]) || void 0 === a ? void 0 : a.includes(l.id))) || !!t || e.enabled
                }
            }

            function _() {
                var e;
                let t = (0, i.useStateFromStores)([u.default], () => u.default.getAccounts()),
                    l = T({
                        forUserProfile: !1
                    }),
                    a = n.useMemo(() => {
                        let e = new Set;
                        return t.forEach(t => e.add(t.type)), e
                    }, [t]);
                return s.sortBy(o.default.filter(l), [t => !(E.has(t.type) && Date.now() < (null !== (e = E.get(t.type)) && void 0 !== e ? e : 0) + 2592e6), e => a.has(e.type), e => e.hasMetadata, e => !c.ACTIVITY_PLATFORM_TYPES.has(e.type), e => e.name])
            }

            function p(e) {
                let [t, l] = n.useState(!1);

                function a(e) {
                    let {
                        key: t
                    } = e;
                    t === f.KeyboardKeysUpdated.SHIFT && l(!0)
                }

                function s(e) {
                    let {
                        key: t
                    } = e;
                    t === f.KeyboardKeysUpdated.SHIFT && l(!1)
                }
                return (n.useEffect(() => (window.addEventListener("keydown", a), window.addEventListener("keyup", s), () => {
                    window.removeEventListener("keydown", a), window.removeEventListener("keyup", s)
                }), []), t && e === c.PlatformTypes.TWITTER) ? c.PlatformTypes.TWITTER_LEGACY : e
            }
        },
        216049: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("65597"),
                a = l("42203"),
                s = l("26989"),
                i = l("535013");

            function o(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = (0, n.default)([s.default], () => null != e ? s.default.getMember(e.id, t) : null, [e, t]),
                    u = (0, n.default)([a.default], () => a.default.getChannel(l), [l]),
                    d = (0, n.default)([a.default], () => a.default.getChannel(null == u ? void 0 : u.parent_id), [u]);
                return null == e || null == r ? null : (0, i.getVisibleConnectionsRole)({
                    guild: e,
                    guildMember: r,
                    channel: null != u && u.isThread() && null != d ? d : u,
                    onlyChannelConnectionRoles: o
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
                    return T
                },
                generateSteamMetadataItems: function() {
                    return _
                },
                generatePaypalMetadataItems: function() {
                    return p
                },
                generateEbayMetadataItems: function() {
                    return S
                },
                generateTikTokMetadataItems: function() {
                    return I
                },
                generateRoleConnectionMetadataItems: function() {
                    return A
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("917351"),
                o = l.n(i),
                r = l("77078"),
                u = l("240481"),
                d = l("535013"),
                c = l("214509"),
                f = l("782340"),
                m = l("536271");

            function E(e) {
                var t;
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    a = [],
                    s = Number(null !== (t = e[c.MetadataFields.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
                    i = "1" === e[c.MetadataFields.REDDIT_GOLD],
                    o = "1" === e[c.MetadataFields.REDDIT_MOD];
                return s > -1 && a.push((0, n.jsx)(h, {
                    className: l,
                    count: s,
                    label: f.default.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
                }, c.MetadataFields.REDDIT_TOTAL_KARMA)), i && a.push((0, n.jsx)(N, {
                    className: l,
                    label: f.default.Messages.CONNECTIONS_REDDIT_GOLD
                }, c.MetadataFields.REDDIT_GOLD)), o && a.push((0, n.jsx)(N, {
                    className: l,
                    label: f.default.Messages.CONNECTIONS_REDDIT_MOD
                }, c.MetadataFields.REDDIT_MOD)), a
            }

            function T(e) {
                var t, l;
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    s = [],
                    i = Number(null !== (t = e[c.MetadataFields.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
                    o = Number(null !== (l = e[c.MetadataFields.TWITTER_FOLLOWERS_COUNT]) && void 0 !== l ? l : -1);
                return i > -1 && s.push((0, n.jsx)(h, {
                    className: a,
                    count: i,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
                }, c.MetadataFields.TWITTER_STATUSES_COUNT)), o > -1 && s.push((0, n.jsx)(h, {
                    className: a,
                    count: o,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
                }, c.MetadataFields.TWITTER_FOLLOWERS_COUNT)), s
            }

            function _(e) {
                var t, a, s;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    o = [],
                    r = Number(null !== (t = e[c.MetadataFields.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
                    u = Number(null !== (a = e[c.MetadataFields.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== a ? a : -1),
                    d = Number(null !== (s = e[c.MetadataFields.STEAM_ITEM_COUNT_TF2]) && void 0 !== s ? s : -1);
                return r > -1 && o.push((0, n.jsx)(h, {
                    className: i,
                    count: r,
                    label: f.default.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
                }, c.MetadataFields.STEAM_GAME_COUNT)), u > -1 && o.push((0, n.jsx)(C, {
                    className: i,
                    label: f.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                        count: u
                    }),
                    imageSrc: l("142226"),
                    imageAlt: f.default.Messages.CONNECTIONS_STEAM_DOTA2
                }, c.MetadataFields.STEAM_ITEM_COUNT_DOTA2)), d > -1 && o.push((0, n.jsx)(C, {
                    className: i,
                    label: f.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                        count: d
                    }),
                    imageSrc: l("449236"),
                    imageAlt: f.default.Messages.CONNECTIONS_STEAM_TF2
                }, c.MetadataFields.STEAM_ITEM_COUNT_TF2)), o
            }

            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    l = [],
                    a = "1" === e[c.MetadataFields.PAYPAL_VERIFIED];
                return a && l.push((0, n.jsx)(N, {
                    className: s(t, m.paypalVerifiedTag),
                    label: f.default.Messages.CONNECTIONS_PAYPAL_VERIFIED
                }, c.MetadataFields.PAYPAL_VERIFIED)), l
            }

            function S(e) {
                var t;
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    a = [],
                    s = Number(null !== (t = e[c.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
                    i = "1" === e[c.MetadataFields.EBAY_TOP_RATED_SELLER];
                return s > 0 && a.push((0, n.jsx)(h, {
                    className: l,
                    count: s,
                    label: f.default.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                    percent: !0
                }, c.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE)), i && a.push((0, n.jsx)(N, {
                    className: l,
                    label: f.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                }, c.MetadataFields.EBAY_TOP_RATED_SELLER)), a
            }

            function I(e) {
                var t, l, a;
                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    i = [],
                    o = "1" === e[c.MetadataFields.TIKTOK_VERIFIED],
                    r = Number(null !== (t = e[c.MetadataFields.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
                    u = Number(null !== (l = e[c.MetadataFields.TIKTOK_FOLLOWING_COUNT]) && void 0 !== l ? l : -1),
                    d = Number(null !== (a = e[c.MetadataFields.TIKTOK_LIKES_COUNT]) && void 0 !== a ? a : -1);
                return r > -1 && i.push((0, n.jsx)(h, {
                    className: s,
                    count: r,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
                }, c.MetadataFields.TIKTOK_FOLLOWER_COUNT)), u > -1 && i.push((0, n.jsx)(h, {
                    className: s,
                    count: u,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
                }, c.MetadataFields.TIKTOK_FOLLOWING_COUNT)), d > -1 && i.push((0, n.jsx)(h, {
                    className: s,
                    count: d,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
                }, c.MetadataFields.TIKTOK_LIKES_COUNT)), o && i.push((0, n.jsx)(N, {
                    className: s,
                    label: f.default.Messages.CONNECTIONS_TIKTOK_VERIFIED
                }, c.MetadataFields.TIKTOK_VERIFIED)), i
            }

            function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    a = [],
                    s = Object.keys(e.metadata);
                if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === s.length) return a;
                let i = o.sortBy(s, t => {
                    var l, n;
                    return null === (n = e.application_metadata) || void 0 === n ? void 0 : null === (l = n[t]) || void 0 === l ? void 0 : l.name
                });
                for (let s of i) {
                    let i = e.application_metadata[s];
                    if (null == i) continue;
                    let o = e.metadata[s];
                    try {
                        switch (i.type) {
                            case c.MetadataItemTypes.BOOLEAN_EQUAL:
                            case c.MetadataItemTypes.BOOLEAN_NOT_EQUAL: {
                                let e = i.type === c.MetadataItemTypes.BOOLEAN_EQUAL && "1" === o || i.type === c.MetadataItemTypes.BOOLEAN_NOT_EQUAL && "1" !== o;
                                e && a.push((0, n.jsx)(N, {
                                    className: t,
                                    label: i.name
                                }, i.key))
                            }
                            break;
                            case c.MetadataItemTypes.DATETIME_GREATER_THAN_EQUAL:
                            case c.MetadataItemTypes.DATETIME_LESS_THAN_EQUAL:
                                a.push((0, n.jsx)(g, {
                                    className: t,
                                    date: o,
                                    locale: l,
                                    label: i.name
                                }, i.key));
                                break;
                            case c.MetadataItemTypes.INTEGER_EQUAL:
                            case c.MetadataItemTypes.INTEGER_NOT_EQUAL:
                            case c.MetadataItemTypes.INTEGER_GREATER_THAN_EQUAL:
                            case c.MetadataItemTypes.INTEGER_LESS_THAN_EQUAL:
                                a.push((0, n.jsx)(h, {
                                    className: t,
                                    count: Number(o),
                                    label: i.name
                                }, i.key))
                        }
                    } catch (e) {}
                }
                return a
            }

            function h(e) {
                let t, {
                        count: l,
                        label: a,
                        className: i,
                        percent: o
                    } = e,
                    d = (0, u.shortenAndLocalizeNumber)(l) + (o ? "%" : "");
                return t = "string" == typeof a ? f.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                    name: a,
                    value: d
                }) : a.format({
                    value: d
                }), (0, n.jsx)(r.Text, {
                    className: s(m.connectedAccountVanityMetadata, i),
                    variant: "text-xs/normal",
                    color: "interactive-active",
                    children: t
                })
            }

            function g(e) {
                let {
                    date: t,
                    locale: l,
                    label: a,
                    className: i
                } = e;
                return (0, n.jsx)(r.Text, {
                    className: s(m.connectedAccountVanityMetadata, i),
                    variant: "text-xs/normal",
                    color: "interactive-active",
                    children: f.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                        value: (0, d.getCreatedAtDate)(t, l),
                        name: a
                    })
                })
            }

            function C(e) {
                let {
                    label: t,
                    imageSrc: l,
                    imageAlt: a,
                    className: i
                } = e;
                return (0, n.jsxs)("div", {
                    className: s(m.connectedAccountVanityMetadata, m.connectedAccountVanityMetadataItem, i),
                    children: [(0, n.jsx)(r.Tooltip, {
                        text: a,
                        children: e => (0, n.jsx)("img", {
                            ...e,
                            src: l,
                            alt: a,
                            className: m.connectedAccountVanityMetadataItemIcon
                        })
                    }), (0, n.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        color: "interactive-active",
                        children: t
                    })]
                })
            }

            function N(e) {
                let {
                    label: t,
                    className: l
                } = e;
                return (0, n.jsx)(r.Text, {
                    variant: "text-xs/semibold",
                    color: "interactive-active",
                    className: s(m.connectedAccountVanityMetadata, m.connectedAccountVanityMetadataTag, l),
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
            var a = l("414456"),
                s = l.n(a),
                i = l("509043"),
                o = l("446674"),
                r = l("669491"),
                u = l("77078"),
                d = l("206230"),
                c = l("83900"),
                f = l("391866");

            function m(e) {
                let t, {
                        color: l,
                        size: a,
                        forcedIconColor: m,
                        className: E,
                        iconClassName: T
                    } = e,
                    [_, p] = (0, o.useStateFromStoresArray)([d.default], () => [d.default.desaturateUserColors, d.default.saturation]),
                    S = (0, u.useToken)(r.default.unsafe_rawColors.PRIMARY_300).hex(),
                    I = (0, i.hex2int)(null != l ? l : S),
                    A = (0, i.int2hsl)(I, !1, _ ? p : null);
                t = null != m ? m : .3 > (0, i.getDarkness)(I) ? r.default.unsafe_rawColors.PRIMARY_630.css : r.default.unsafe_rawColors.WHITE_500.css;
                let h = a / 8;
                return (0, n.jsx)("div", {
                    style: {
                        background: A,
                        width: a,
                        height: a,
                        borderRadius: a,
                        lineHeight: "".concat(a, "px")
                    },
                    className: E,
                    children: (0, n.jsx)(c.default, {
                        color: t,
                        className: s(f.linkIcon, T),
                        width: a - 2 * h,
                        height: a - 2 * h,
                        style: {
                            margin: h
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
            var a = l("509043"),
                s = l("446674"),
                i = l("669491"),
                o = l("77078"),
                r = l("206230"),
                u = l("931138"),
                d = l("486952"),
                c = l("782340");

            function f(e) {
                let t, {
                        color: l,
                        size: f,
                        forcedIconColor: m,
                        className: E,
                        iconClassName: T,
                        tooltipText: _
                    } = e,
                    [p, S] = (0, s.useStateFromStoresArray)([r.default], () => [r.default.desaturateUserColors, r.default.saturation]),
                    I = (0, o.useToken)(i.default.unsafe_rawColors.PRIMARY_300).hex(),
                    A = (0, a.hex2int)(null != l ? l : I),
                    h = (0, a.int2hsl)(A, !1, p ? S : null);
                return t = null != m ? m : .3 > (0, a.getDarkness)(A) ? i.default.unsafe_rawColors.PRIMARY_630.css : i.default.unsafe_rawColors.WHITE_500.css, (0, n.jsx)(o.Tooltip, {
                    text: null != _ ? _ : c.default.Messages.CONNECTIONS_ROLE_OFFICIAL_ICON_TOOLTIP,
                    children: e => (0, n.jsx)(u.default, {
                        ...e,
                        className: E,
                        color: h,
                        size: f,
                        children: (0, n.jsx)(d.default, {
                            color: t,
                            height: f,
                            width: f,
                            className: T
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
                a = l("446674"),
                s = l("374363"),
                i = l("162771"),
                o = l("674268"),
                r = l("989691"),
                u = l("862853"),
                d = l("10641"),
                c = l("846614"),
                f = l("397336");

            function m(e, t, l) {
                let m = (0, a.useStateFromStores)([s.default], () => {
                        var e;
                        return null === (e = s.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                    }),
                    E = (0, a.useStateFromStores)([i.default], () => i.default.getGuildId()),
                    T = (0, c.useNewUserDismissibleContent)(e),
                    _ = null;
                s.default.hasLoaded(f.UserSettingsTypes.PRELOADED_USER_SETTINGS) ? _ = T.find(e => null == m || !(0, o.hasBit)(m, e)) : null != m && (_ = T.find(e => !(0, o.hasBit)(m, e)));
                let p = (0, u.default)(e => null != _ && e.currentlyShown.has(_)),
                    S = (0, a.useStateFromStores)([r.default], () => null != _ && r.default.hasUserHitDCCap(_));
                n.useEffect(() => {
                    if (null != _) return (0, d.requestMarkDismissibleContentAsShown)(_, {
                        groupName: t,
                        guildId: E
                    }, l), () => {
                        if (null == _) return;
                        let e = !r.default.hasUserHitDCCap();
                        (0, u.removeCandidateContent)({
                            content: _,
                            groupName: t
                        }, e)
                    }
                }, [_, t, E, S, l]);
                let I = n.useCallback(e => {
                    null != _ && (0, d.markDismissibleContentAsDismissed)(_, {
                        dismissAction: e,
                        groupName: t,
                        guildId: E
                    })
                }, [_, t, E]);
                return [p && null != _ ? _ : null, I]
            }

            function E(e) {
                let t = (0, a.useStateFromStores)([s.default], () => {
                    var e;
                    return null === (e = s.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                });
                return e.filter(e => null != t && !(0, o.hasBit)(t, e))
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
                a = l("884691"),
                s = l("65597"),
                i = l("901165"),
                o = l("495226"),
                r = l("235145"),
                u = l("994428");

            function d(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = (0, s.default)([i.default], () => !!__OVERLAY__ && i.default.isInstanceUILocked()),
                    [d, c] = (0, r.useGetDismissibleContent)(e, t, n),
                    f = !l && null != d && !o.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(d);
                return a.useEffect(() => () => {
                    f && c(u.ContentDismissActionType.AUTO_DISMISS)
                }, [f, c]), [d, c]
            }

            function c(e) {
                let {
                    contentTypes: t,
                    children: l,
                    groupName: a,
                    bypassAutoDismiss: s
                } = e, [i, o] = d(t, a, s);
                return (0, n.jsx)(n.Fragment, {
                    children: l({
                        visibleContent: i,
                        markAsDismissed: o
                    })
                })
            }
        },
        695702: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                PlayStationVoiceExperiment: function() {
                    return a
                }
            });
            var n = l("862205");
            let a = (0, n.createExperiment)({
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
                    return o
                },
                useRoleIcon: function() {
                    return r
                },
                useRoleIconForPreview: function() {
                    return u
                }
            });
            var n = l("884691"),
                a = l("446674"),
                s = l("305961"),
                i = l("689226");

            function o(e, t) {
                var l;
                let {
                    customIconSrc: n,
                    unicodeEmoji: a
                } = null !== (l = (0, i.getRoleIconData)(e, t)) && void 0 !== l ? l : {};
                if (null != n || null != a) return {
                    src: n,
                    name: e.name,
                    roleId: e.id,
                    size: t,
                    unicodeEmoji: a
                }
            }
            let r = e => {
                    let {
                        guildId: t,
                        roleId: l,
                        size: r = 20
                    } = e, u = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(t));
                    return n.useMemo(() => {
                        if (null == u || null == l) return;
                        let e = u.roles[l];
                        if ((0, i.canGuildUseRoleIcons)(u, e)) return o(e, r)
                    }, [u, l, r])
                },
                u = (e, t) => {
                    let l = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(e));
                    if (null != l && (0, i.canGuildUseRoleIcons)(l, t)) return o(t)
                }
        },
        92274: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                AddFriendProminenceExperimentDesktop: function() {
                    return a
                }
            });
            var n = l("862205");
            let a = (0, n.createExperiment)({
                kind: "user",
                id: "2023-10_add_friend_prominence_desktop",
                label: "Make adding friends more prominent (desktop profile)",
                defaultConfig: {
                    moreAddFriend: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable",
                    config: {
                        moreAddFriend: !0
                    }
                }]
            });
            (0, n.createExperiment)({
                kind: "user",
                id: "2023-10_add_friend_prominence",
                label: "Make adding friends more prominent (mobile DM)",
                defaultConfig: {
                    moreAddFriend: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable",
                    config: {
                        moreAddFriend: !0
                    }
                }]
            })
        },
        769791: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                openPremiumSite: function() {
                    return r
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
                a = l("773336"),
                s = l("155815"),
                i = l("450484");

            function o(e, t, l) {
                let o;
                !(0, a.isDesktop)() && (o = window.open("", "_blank")), (0, n.getMetadata)(e, t).then(e => l(e)).then(e => {
                    let {
                        resourceType: t,
                        resourceId: l
                    } = e, n = s.default.isProtocolRegistered() ? i.SpotifyEndpoints.PLAYER_OPEN(t, l) : i.SpotifyEndpoints.WEB_OPEN(t, l);
                    null != o ? o.location.href = n : window.open(n)
                }).catch(() => {
                    null != o && o.close()
                })
            }

            function r() {
                window.open(i.SpotifyEndpoints.PREMIUM_SITE)
            }

            function u(e) {
                let {
                    sync_id: t
                } = e;
                if (null == t) return;
                let l = i.SpotifyResourceTypes.TRACK,
                    n = s.default.isProtocolRegistered() ? i.SpotifyEndpoints.PLAYER_OPEN(l, t) : i.SpotifyEndpoints.WEB_OPEN(l, t);
                window.open(n)
            }

            function d(e, t) {
                o(e, t, e => {
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
                o(e, t, e => {
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
            var a = l("376341"),
                s = l.n(a),
                i = l("77078"),
                o = l("145131"),
                r = l("936629"),
                u = l("996866"),
                d = l("228974");

            function c(e) {
                let {
                    activity: t,
                    user: l,
                    source: a,
                    ...c
                } = e, {
                    label: f,
                    tooltip: m,
                    loading: E,
                    disabled: T,
                    onClick: _
                } = (0, u.useSpotifyPlayAction)(t, l, a);
                return (0, n.jsx)(i.Tooltip, {
                    text: m,
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: l
                        } = e;
                        return (0, n.jsx)(i.Button, {
                            ...s(c, ["channelId", "guildId"]),
                            onClick: _,
                            onMouseEnter: t,
                            onMouseLeave: l,
                            disabled: T,
                            submitting: E,
                            children: (0, n.jsxs)(o.default, {
                                align: o.default.Align.CENTER,
                                children: [(0, n.jsx)(r.default, {
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
            var a = l("414456"),
                s = l.n(a),
                i = l("77078"),
                o = l("616225"),
                r = l("387111"),
                u = l("996866"),
                d = l("228974");

            function c(e) {
                let {
                    activity: t,
                    user: l,
                    channelId: a,
                    guildId: c,
                    source: f,
                    size: m,
                    className: E,
                    ...T
                } = e, {
                    tooltip: _,
                    loading: p,
                    disabled: S,
                    onClick: I
                } = (0, u.useSpotifySyncAction)(t, l, f, r.default.getNickname(c, a, l));
                return (0, n.jsx)(i.Tooltip, {
                    text: _,
                    children: e => {
                        let {
                            onMouseEnter: l,
                            onMouseLeave: a
                        } = e;
                        return (0, n.jsx)(i.Button, {
                            ...T,
                            size: s(m, d.iconButtonSize),
                            className: s(E, d.iconButton),
                            onClick: I,
                            onMouseEnter: l,
                            onMouseLeave: a,
                            disabled: S,
                            submitting: p,
                            "aria-label": null != _ ? _ : t.name,
                            children: (0, n.jsx)(o.default, {
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
                    return S
                },
                useSpotifySyncAction: function() {
                    return I
                },
                useSpotifyJoinAction: function() {
                    return A
                }
            });
            var n = l("884691"),
                a = l("446674"),
                s = l("862337"),
                i = l("84339"),
                o = l("271938"),
                r = l("158998"),
                u = l("662285"),
                d = l("782911"),
                c = l("629414"),
                f = l("53887"),
                m = l("486150"),
                E = l("555759"),
                T = l("450484");

            function _(e) {
                let {
                    currentUserTrackId: t,
                    syncingWithUser: l,
                    syncingWithParty: a
                } = e, [o, r] = n.useState(!1), [u] = n.useState(() => new s.Timeout), d = (0, i.default)(t);
                n.useEffect(() => {
                    o && (t !== d || l || a) && (r(!1), u.stop())
                }, [t, d, l, a, o, u]);
                let c = n.useCallback(() => {
                        r(!0), u.start(3e4, () => r(!1))
                    }, [u]),
                    f = n.useCallback(() => {
                        r(!1), u.stop()
                    }, [u]);
                return n.useEffect(() => () => u.stop(), [u]), {
                    loading: o,
                    startLoading: c,
                    clearLoading: f
                }
            }

            function p(e, t) {
                return (0, a.useStateFromStoresObject)([u.default, o.default], () => (0, f.default)(u.default, o.default, t, e), [e, t])
            }

            function S(e, t, l) {
                let a = p(e, t),
                    {
                        notPlayable: s,
                        isCurrentUser: i,
                        playingSameTrack: o
                    } = a,
                    {
                        loading: r,
                        startLoading: u,
                        clearLoading: f
                    } = _(a),
                    m = n.useCallback(() => {
                        u(), (0, E.default)(a, T.SpotifyActionTypes.USER_ACTIVITY_PLAY, l).catch(f)
                    }, [a, l, u, f]);
                return {
                    label: (0, d.default)(a, T.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                    tooltip: (0, c.default)(a, T.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                    disabled: !r && (i || s || o),
                    loading: r,
                    onClick: m,
                    spotifyData: a
                }
            }

            function I(e, t, l, a) {
                let s = null != a ? a : r.default.getName(t),
                    i = p(e, t),
                    {
                        syncingWithUser: o,
                        syncingWithParty: u,
                        isCurrentUser: f
                    } = i,
                    {
                        loading: E,
                        startLoading: S,
                        clearLoading: I
                    } = _(i),
                    A = n.useCallback(() => {
                        S(), (0, m.default)(i, T.SpotifyActionTypes.USER_ACTIVITY_SYNC, l).catch(I)
                    }, [i, l, S, I]);
                return {
                    label: (0, d.default)(i, T.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                    tooltip: (0, c.default)(i, T.SpotifyActionTypes.USER_ACTIVITY_SYNC, s),
                    disabled: !E && (f || o || u),
                    loading: E,
                    onClick: A,
                    spotifyData: i
                }
            }

            function A(e, t, l) {
                let a = p(e, t),
                    {
                        notPlayable: s,
                        syncingWithUser: i,
                        syncingWithParty: o,
                        isCurrentUser: r
                    } = a,
                    {
                        loading: u,
                        startLoading: f,
                        clearLoading: E
                    } = _(a),
                    S = n.useCallback(() => {
                        f(), (0, m.default)(a, T.SpotifyActionTypes.EMBED_SYNC, l).catch(E)
                    }, [a, l, f, E]);
                return {
                    label: (0, d.default)(a, T.SpotifyActionTypes.EMBED_SYNC),
                    tooltip: (0, c.default)(a, T.SpotifyActionTypes.EMBED_SYNC),
                    disabled: !u && (r || i || o || s),
                    loading: u,
                    onClick: S,
                    spotifyData: a
                }
            }
        },
        5667: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                CaretPosition: function() {
                    return s
                },
                ButtonLayout: function() {
                    return i
                },
                default: function() {
                    return E
                }
            });
            var n, a, s, i, o = l("37983"),
                r = l("884691"),
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
                    content: a,
                    contentClassName: u,
                    buttonCTA: E,
                    secondaryButtonCTA: T,
                    onClick: _,
                    onSecondaryClick: p,
                    onComponentMount: S,
                    asset: I,
                    markAsDismissed: A,
                    caretPosition: h = s.TOP_CENTER,
                    buttonLayout: g = i.ADJACENT
                } = e;
                r.useEffect(() => {
                    null == S || S()
                }, []);
                let C = null != T;
                return (0, o.jsxs)("div", {
                    className: d(t, m.upsellTooltipWrapper, m[h]),
                    children: [I, null == l ? null : (0, o.jsx)(c.Heading, {
                        className: d(n, m.upsellTooltipHeader),
                        variant: "heading-md/semibold",
                        children: l
                    }), (0, o.jsx)(c.Text, {
                        color: "always-white",
                        className: d(u, m.content),
                        variant: "text-sm/normal",
                        children: a
                    }), null != E || C ? (0, o.jsxs)("div", {
                        className: d(m.upsellButtonsContainer, {
                            [m.upsellButtonsAdjacent]: g === i.ADJACENT,
                            [m.upsellButtonsStacked]: g === i.STACKED
                        }),
                        children: [C ? (0, o.jsx)(c.Button, {
                            color: c.Button.Colors.BRAND,
                            onClick: () => {
                                null == p || p(), null == A || A(f.ContentDismissActionType.SECONDARY)
                            },
                            children: T
                        }) : null, null == E ? null : (0, o.jsx)(c.Button, {
                            className: d({
                                [m.fullWidth]: !C
                            }),
                            color: c.Button.Colors.BRAND,
                            look: c.Button.Looks.INVERTED,
                            onClick: e => {
                                _(e), null == A || A(f.ContentDismissActionType.PRIMARY)
                            },
                            children: E
                        })]
                    }) : null]
                })
            }(n = s || (s = {})).TOP_CENTER = "caretTopCenter", n.TOP_RIGHT = "caretTopRight", n.TOP_LEFT = "caretTopLeft", n.BOTTOM_CENTER = "caretBottomCenter", n.BOTTOM_LEFT = "caretBottomLeft", n.LEFT_CENTER = "caretLeftCenter", n.RIGHT_CENTER = "caretRightCenter", (a = i || (i = {}))[a.ADJACENT = 0] = "ADJACENT", a[a.STACKED = 1] = "STACKED", E.CaretPosition = s, E.ButtonLayout = i
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
                    return T
                },
                useAvatarBorderColor: function() {
                    return p
                },
                calculateButtonColor: function() {
                    return S
                },
                useMessageInputBorderColor: function() {
                    return I
                },
                useDividerColor: function() {
                    return A
                }
            });
            var n = l("884691"),
                a = l("917351"),
                s = l("509043"),
                i = l("65597"),
                o = l("669491"),
                r = l("819855"),
                u = l("206230"),
                d = l("449918"),
                c = l("172182"),
                f = l("49111");

            function m(e) {
                let t = (0, i.default)([u.default], () => u.default.saturation);
                return (0, n.useMemo)(() => null == e ? null : {
                    overlaySyncedWithUserTheme: o.default.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    overlay: o.default.colors.PROFILE_GRADIENT_OVERLAY.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    sectionBox: o.default.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    messageInputBorder: o.default.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    dividerOpacity: e === o.default.themes.DARK ? .24 : .12,
                    noteBackgroundColor: o.default.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    profileBodyBackgroundHover: o.default.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    rolePillBackgroundColor: o.default.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    rolePillBorderColor: o.default.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
                        theme: e,
                        saturation: t
                    }).hsl(),
                    icon: o.default.colors.INTERACTIVE_NORMAL.resolve({
                        theme: e,
                        saturation: t
                    }).hsl()
                }, [e, t])
            }

            function E(e) {
                if (null == e) return null;
                let t = (0, s.getDarkness)(e);
                return t > .5 ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT
            }

            function T(e, t, l) {
                let n = l / 100,
                    a = 1 - n;
                return [Math.round(e[0] * a + t[0] * n), Math.round(e[1] * a + t[1] * n), Math.round(e[2] * a + t[2] * n)]
            }

            function _(e, t) {
                let l = (0, s.int2rgbArray)(e);
                if (null == t) return 0;
                let n = c.default.parseString(t);
                if (null == n) return 0;
                let a = [n.red, n.green, n.blue],
                    i = [l[0], l[1], l[2]],
                    o = n.alpha,
                    [r, u, d] = a.map((e, t) => Math.floor(o * e + (1 - o) * i[t]));
                return (0, s.rgb2int)("rgba(".concat(r, ", ").concat(u, ", ").concat(d, ")"))
            }

            function p(e, t, l) {
                let n = m(e);
                return null == n || null == t ? null : _(t, l ? n.overlaySyncedWithUserTheme : n.overlay)
            }
            let S = (0, a.memoize)(e => {
                let t = (0, r.getContrastingColor)(e, {
                    base: "#ffffff",
                    contrastRatio: r.WCAGContrastRatios.HighContrastText
                });
                return (0, s.hex2int)(t)
            }, e => e);

            function I(e, t) {
                let l = m(e);
                return null != l && null != t ? _(t, null == l ? void 0 : l.messageInputBorder) : null
            }

            function A(e, t) {
                let l = (0, d.useColorValue)(f.Color.WHITE_500).hex;
                return (0, r.isThemeDark)(e) ? (0, s.hex2int)(l) : null != t ? S(t) : null
            }
        },
        999203: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("446674"),
                a = l("650509"),
                s = l("90592"),
                i = l("713135"),
                o = l("49111");

            function r(e) {
                var t;
                let {
                    user: l,
                    guildId: r
                } = e, u = (0, n.useStateFromStores)([i.default], () => {
                    var e;
                    return null === (e = i.default.getUserProfile(l.id)) || void 0 === e ? void 0 : e.application
                }, [l]), {
                    applicationSubscriptionListingsShown: d
                } = (0, a.default)({
                    applicationId: null == u ? void 0 : u.id,
                    groupListingId: null == u ? void 0 : u.primarySkuId,
                    guildId: r
                }), {
                    activeSubscriptionListing: c,
                    activeEntitlement: f,
                    subscriptionGroupListing: m
                } = (0, a.useActiveSubscriptionListingForApplication)(null == u ? void 0 : u.id, r), E = null !== (t = null == m ? void 0 : m.sku_flags) && void 0 !== t ? t : 0, T = (0, s.isApplicationUserSubscription)(E) || null != r && r !== o.ME && (0, s.isApplicationGuildSubscription)(E), _ = null != f;
                return d ? {
                    botUpgraded: _,
                    botUpgradeable: !_ && d && T,
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
                a = l("235275"),
                s = l("267567"),
                i = l("845579"),
                o = l("271938"),
                r = l("26989"),
                u = l("27618"),
                d = l("680894");

            function c(e, t) {
                let l = (0, n.useStateFromStores)([o.default], () => o.default.getId() === e),
                    c = (0, n.useStateFromStores)([s.default], () => null != t && s.default.isLurking(t)),
                    f = i.RestrictedGuildIds.useSetting(),
                    m = (0, a.useIsDMsToClydeEnabled)() && e === d.CLYDE_AI_USER_ID;
                return (0, n.useStateFromStores)([u.default, r.default], () => !l && !c && (u.default.isFriend(e) || null != r.default.memberOf(e).find(e => !f.includes(e))) || m)
            }
        },
        874419: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return A
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("446674"),
                i = l("151426"),
                o = l("79112"),
                r = l("685665"),
                u = l("10641"),
                d = l("5667"),
                c = l("783142"),
                f = l("713135"),
                m = l("49111"),
                E = l("994428"),
                T = l("397336"),
                _ = l("782340"),
                p = l("393036");
            let S = i.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP,
                I = e => {
                    (0, u.markDismissibleContentAsDismissed)(S, {
                        dismissAction: e,
                        forceTrack: !0
                    })
                };
            var A = e => {
                let {
                    position: t,
                    onClose: l
                } = e, {
                    analyticsLocations: i
                } = (0, r.default)(), u = (0, s.useStateFromStores)([f.default], () => f.default.getIsAccessibilityTooltipViewed());
                return a.useEffect(() => u ? () => I(E.ContentDismissActionType.AUTO) : () => (0, c.handleProfileAccessibilityTooltipViewed)(), [u]), (0, n.jsx)(d.default, {
                    markAsDismissed: I,
                    header: _.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_TITLE,
                    headerClassName: p.header,
                    content: (0, n.jsx)("div", {
                        className: p.content,
                        children: _.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_DESCRIPTION
                    }),
                    buttonCTA: _.default.Messages.TAKE_ME_THERE,
                    onClick: () => {
                        null == l || l(), o.default.open(m.UserSettingsSections.ACCESSIBILITY, null, {
                            scrollPosition: T.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME,
                            analyticsLocations: i
                        })
                    },
                    secondaryButtonCTA: _.default.Messages.DISMISS,
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
                    return S
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("446674"),
                i = l("151426"),
                o = l("819855"),
                r = l("77078"),
                u = l("841098"),
                d = l("340066"),
                c = l("206230"),
                f = l("10641"),
                m = l("874419"),
                E = l("430312"),
                T = l("590456"),
                _ = l("393036");
            let p = () => {
                let e = (0, f.useIsDismissibleContentDismissed)(i.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP),
                    t = (0, s.useStateFromStores)([c.default], () => c.default.syncProfileThemeWithUserTheme),
                    l = (0, u.default)(),
                    {
                        profileTheme: n
                    } = a.useContext(E.UserProfileContext),
                    r = (0, o.isThemeDark)(l) && (0, o.isThemeLight)(n);
                return !e && !t && r
            };
            var S = e => {
                let {
                    onTooltipClose: t
                } = e, {
                    profileType: l
                } = a.useContext(E.UserProfileContext), s = l === T.UserProfileTypes.POPOUT, i = p(), [o, u] = a.useState(!s && i);
                return (0, d.default)(() => u(i), s ? 300 : null), (0, n.jsx)(r.Popout, {
                    shouldShow: o,
                    position: "left",
                    align: "center",
                    spacing: 32,
                    ignoreModalClicks: !0,
                    onRequestClose: () => {
                        !s && u(!1)
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
                        className: _.hidden
                    })
                })
            }
        },
        609734: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("77078"),
                o = l("272030"),
                r = l("85027"),
                u = l("33942"),
                d = l("252063"),
                c = l("42203"),
                f = l("18494"),
                m = l("191814"),
                E = l("758710"),
                T = l("351825"),
                _ = l("306160"),
                p = l("253981"),
                S = l("613676"),
                I = l("49111"),
                A = l("782340"),
                h = l("834680");

            function g(e) {
                var t;
                let {
                    application: l,
                    className: a
                } = e, g = c.default.getChannel(f.default.getChannelId()), {
                    appsInGDMEnabled: C,
                    availableApplications: N
                } = (0, d.usePrivateChannelIntegrationState)({
                    channelId: null !== (t = null == g ? void 0 : g.id) && void 0 !== t ? t : ""
                });
                if (null == l || !(0, S.canInstallApplication)(l.id, l.customInstallUrl, l.installParams)) return null;
                let v = C && null != N.find(e => e.id === (null == l ? void 0 : l.id));
                return (0, n.jsx)(i.Button, {
                    color: i.Button.Colors.PRIMARY,
                    look: i.Button.Looks.FILLED,
                    size: i.Button.Sizes.SMALL,
                    onContextMenu: _.SUPPORTS_COPY ? e => {
                        var t, a;
                        let s = (0, r.getApplicationInstallURL)({
                            id: l.id,
                            custom_install_url: null !== (t = l.customInstallUrl) && void 0 !== t ? t : void 0,
                            install_params: null !== (a = l.installParams) && void 0 !== a ? a : void 0
                        });
                        (0, o.openContextMenu)(e, e => (0, n.jsx)(i.Menu, {
                            navId: "component-button",
                            onClose: o.closeContextMenu,
                            "aria-label": A.default.Messages.APPLICATION_ADD_TO_SERVER_ACTIONS,
                            onSelect: void 0,
                            ...e,
                            children: (0, n.jsx)(i.MenuGroup, {
                                children: (0, n.jsx)(i.MenuItem, {
                                    id: "copy",
                                    label: A.default.Messages.APPLICATION_ADD_TO_SERVER_ACTIONS_COPY,
                                    action: () => (0, _.copy)(s)
                                })
                            })
                        }))
                    } : void 0,
                    onClick: () => {
                        v ? (0, u.openOAuth2Modal)({
                            clientId: l.id,
                            scopes: [I.OAuth2Scopes.APPLICATIONS_COMMANDS],
                            channelId: g.id,
                            disableGuildSelect: !0
                        }) : (0, S.installApplication)({
                            applicationId: l.id,
                            customInstallUrl: l.customInstallUrl,
                            installParams: l.installParams
                        })
                    },
                    className: s(h.applicationInstallButton, a),
                    children: (0, n.jsxs)("div", {
                        className: h.applicationInstallButtonContent,
                        children: [(0, n.jsx)(T.default, {
                            width: 16,
                            height: 16
                        }), (0, n.jsx)(m.default, {
                            size: 4,
                            horizontal: !0
                        }), (0, n.jsx)("span", {
                            className: h.applicationInstallButtonText,
                            children: v ? A.default.Messages.ADD : A.default.Messages.APPLICATION_ADD_BUTTON
                        }), null == l.customInstallUrl || p.default.isDiscordUrl(l.customInstallUrl) ? null : (0, n.jsx)(E.default, {
                            className: h.launchIcon,
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
                    return A
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                o = l("753809"),
                r = l("77078"),
                u = l("545158"),
                d = l("368639"),
                c = l("37785"),
                f = l("62843"),
                m = l("837899"),
                E = l("425190"),
                T = l("701909"),
                _ = l("49111"),
                p = l("782340"),
                S = l("474963"),
                I = l("632215");

            function A(e) {
                let {
                    className: t,
                    lineClamp: l = 6,
                    isExpanded: s = !1
                } = e, [A, h] = a.useState(s), g = a.useMemo(() => (0, d.parseBioReact)(p.default.Messages.MORE_INFO_CLYDE_LEGAL), []);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(r.Collapsible, {
                        isExpanded: A,
                        collapsibleContent: (0, n.jsx)("div", {
                            className: i(t, I.markup),
                            children: (0, n.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                lineClamp: l,
                                children: (0, n.jsx)(f.MessagesInteractionContext.Provider, {
                                    value: {
                                        disableAnimations: !0,
                                        disableInteractions: !1
                                    },
                                    children: g
                                })
                            })
                        }),
                        className: S.collapseable,
                        children: e => {
                            let {
                                onClick: t
                            } = e;
                            return (0, n.jsx)(r.Clickable, {
                                onClick: e => {
                                    h(!A), t(e)
                                },
                                children: (0, n.jsxs)("div", {
                                    className: S.header,
                                    children: [(0, n.jsx)(r.Heading, {
                                        variant: "eyebrow",
                                        className: S.userInfoSectionHeader,
                                        children: p.default.Messages.MORE_INFO
                                    }), A ? (0, n.jsx)(E.default, {
                                        className: S.arrow
                                    }) : (0, n.jsx)(m.default, {
                                        className: S.arrow
                                    })]
                                })
                            })
                        }
                    }), (0, n.jsxs)(r.Text, {
                        className: S.helpCenterCta,
                        variant: "text-sm/medium",
                        children: [(0, n.jsx)(o.LinkIcon, {
                            color: "var(--text-link)",
                            className: S.linkIcon
                        }), (0, n.jsx)(c.default, {
                            onClick: () => (0, u.default)(T.default.getArticleURL(_.HelpdeskArticles.CLYDE_AI), !0),
                            children: p.default.Messages.MORE_INFO_HELP_CENTER
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
            var a = l("65597"),
                s = l("77078"),
                i = l("535013"),
                o = l("915639"),
                r = l("109024"),
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
                    guildMember: T
                } = e, _ = (0, a.default)([o.default], () => o.default.locale), p = null != E && null != T;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(s.Heading, {
                        variant: "eyebrow",
                        className: l,
                        children: p ? c.default.Messages.USER_PROFILE_MEMBER_SINCE : c.default.Messages.USER_PROFILE_DISCORD_MEMBER_SINCE
                    }), (0, n.jsxs)("div", {
                        className: f.memberSinceContainer,
                        children: [p && (0, n.jsx)(s.Tooltip, {
                            text: c.default.Messages.DISCORD_NAME,
                            children: e => (0, n.jsx)(u.default, {
                                ...e,
                                className: f.discordIcon
                            })
                        }), (0, n.jsx)(s.Text, {
                            className: m,
                            variant: "text-sm/normal",
                            children: (0, i.getCreatedAtDate)(d.default.extractTimestamp(t), _)
                        }), null != E && null != T && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("div", {
                                className: f.divider
                            }), (0, n.jsx)(s.Tooltip, {
                                text: E.name,
                                children: e => (0, n.jsx)(r.default, {
                                    ...e,
                                    guild: E,
                                    size: r.default.Sizes.SMOL
                                })
                            }), (0, n.jsx)(s.Text, {
                                className: m,
                                variant: "text-sm/normal",
                                children: (0, i.getCreatedAtDate)(T.joinedAt, _)
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
                    return v
                },
                ConnectedApplicationUserRoleAccount: function() {
                    return O
                },
                ConnectedUserAccounts: function() {
                    return M
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                o = l("669491"),
                r = l("819855"),
                u = l("77078"),
                d = l("308289"),
                c = l("376556"),
                f = l("716241"),
                m = l("572943"),
                E = l("535013"),
                T = l("816499"),
                _ = l("526190"),
                p = l("766274"),
                S = l("246053"),
                I = l("867544"),
                A = l("128259"),
                h = l("49111"),
                g = l("214509"),
                C = l("782340"),
                N = l("825507");

            function v(e) {
                var t, l;
                let a, s, d, {
                    connectedAccount: p,
                    theme: v,
                    locale: O,
                    userId: M,
                    className: R,
                    showMetadata: y,
                    showInvisibleIcon: x
                } = e;
                null == y && (y = !0);
                let L = null !== (l = p.metadata) && void 0 !== l ? l : {},
                    P = y ? (0, E.getCreatedAtDate)(L[g.MetadataFields.CREATED_AT], O) : null,
                    D = (0, u.useToken)(o.default.unsafe_rawColors.TWITTER).hex(),
                    b = C.default.Messages.CONNECTION_VERIFIED;
                if (y) switch (p.type) {
                    case h.PlatformTypes.REDDIT:
                        a = (0, T.generateRedditMetadataItems)(L);
                        break;
                    case h.PlatformTypes.STEAM:
                        a = (0, T.generateSteamMetadataItems)(L);
                        break;
                    case h.PlatformTypes.TWITTER: {
                        a = (0, T.generateTwitterMetadataItems)(L);
                        let e = "1" === L[g.MetadataFields.TWITTER_VERIFIED];
                        e && (s = D, b = C.default.Messages.CONNECTION_VERIFIED_ON_TWITTER);
                        break
                    }
                    case h.PlatformTypes.PAYPAL:
                        a = (0, T.generatePaypalMetadataItems)(L);
                        break;
                    case h.PlatformTypes.EBAY:
                        a = (0, T.generateEbayMetadataItems)(L);
                        break;
                    case h.PlatformTypes.TIKTOK:
                        a = (0, T.generateTikTokMetadataItems)(L)
                }
                let U = c.default.get((0, m.useLegacyPlatformType)(p.type)),
                    j = null == U ? void 0 : null === (t = U.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(U, p);
                null != x && x ? d = (0, n.jsx)(I.default, {
                    className: i(N.connectedAccountOpenIconContainer, N.connectedAccountHideIcon),
                    foregroundColor: "currentColor"
                }) : null != j && (d = (0, n.jsx)(u.Anchor, {
                    href: j,
                    onClick: e => {
                        var t, l;
                        t = p.type, l = M, (0, f.trackWithMetadata)(h.AnalyticEvents.CONNECTED_ACCOUNT_VIEWED, {
                            platform_type: t,
                            other_user_id: l
                        }), (0, A.handleClick)({
                            href: j,
                            trusted: (null == U ? void 0 : U.type) !== h.PlatformTypes.DOMAIN
                        }, e)
                    },
                    children: (0, n.jsx)(S.default, {
                        className: N.connectedAccountOpenIcon,
                        direction: S.default.Directions.RIGHT
                    })
                }));
                let F = (0, u.useToken)(o.default.colors.INTERACTIVE_MUTED).hex(),
                    G = (0, u.useToken)(o.default.colors.INTERACTIVE_ACTIVE).hex(),
                    B = p.verified ? (0, n.jsx)(_.default, {
                        className: N.connectedAccountVerifiedIcon,
                        color: null != s ? s : F,
                        forcedIconColor: G,
                        size: 16,
                        tooltipText: b
                    }) : null;
                return (0, n.jsxs)("div", {
                    className: i(N.connectedAccountContainer, null != a && a.length > 0 || null != P ? N.connectedAccountContainerWithMetadata : null, R),
                    children: [(0, n.jsxs)("div", {
                        className: N.connectedAccount,
                        children: [(0, n.jsx)(u.Tooltip, {
                            text: null == U ? void 0 : U.name,
                            children: e => (0, n.jsx)("img", {
                                ...e,
                                alt: C.default.Messages.IMG_ALT_LOGO.format({
                                    name: null == U ? void 0 : U.name
                                }),
                                className: N.connectedAccountIcon,
                                src: (0, r.isThemeDark)(v) ? null == U ? void 0 : U.icon.darkSVG : null == U ? void 0 : U.icon.lightSVG
                            })
                        }), (0, n.jsxs)("div", {
                            className: N.connectedAccountNameContainer,
                            children: [(0, n.jsxs)("div", {
                                className: N.connectedAccountName,
                                children: [(0, n.jsxs)("div", {
                                    className: N.connectedAccountNameTextContainer,
                                    children: [(0, n.jsx)(u.Tooltip, {
                                        overflowOnly: !0,
                                        text: p.name,
                                        children: e => (0, n.jsx)(u.Text, {
                                            ...e,
                                            variant: "text-md/semibold",
                                            color: "interactive-active",
                                            className: N.connectedAccountNameText,
                                            children: p.name
                                        })
                                    }), B]
                                }), d]
                            }), null != P ? (0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: C.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
                                    date: P
                                })
                            }) : null]
                        })]
                    }), null != a && a.length > 0 ? (0, n.jsx)("div", {
                        className: N.connectedAccountChildren,
                        children: a
                    }) : null]
                })
            }

            function O(e) {
                let {
                    applicationRoleConnection: t,
                    className: l,
                    locale: a
                } = e, s = (0, T.generateRoleConnectionMetadataItems)(t, void 0, a);
                return (0, n.jsxs)("div", {
                    className: i(N.connectedAccountContainer, null != s && s.length > 0 ? N.connectedAccountContainerWithMetadata : null, l),
                    children: [(0, n.jsx)("div", {
                        className: N.connectedAccount,
                        children: (0, n.jsxs)("div", {
                            className: N.connectedAccountNameContainer,
                            children: [null != t.platform_name ? (0, n.jsx)(u.Text, {
                                variant: "eyebrow",
                                color: "interactive-normal",
                                children: t.platform_name
                            }) : null, null != t.platform_username ? (0, n.jsx)("div", {
                                className: N.connectedAccountName,
                                children: (0, n.jsx)("div", {
                                    className: N.connectedAccountNameTextContainer,
                                    children: (0, n.jsx)(u.Text, {
                                        variant: "text-md/semibold",
                                        color: "interactive-active",
                                        className: N.connectedAccountNameText,
                                        children: t.platform_username
                                    })
                                })
                            }) : null]
                        })
                    }), null != s && s.length > 0 ? (0, n.jsx)("div", {
                        className: i(N.connectedAccountChildren, N.connectedAccountChildrenNoIcon),
                        children: s
                    }) : null, (0, n.jsx)("div", {
                        children: (0, n.jsx)("div", {
                            className: N.connectedAccountPoweredBy,
                            children: (0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: C.default.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
                                    applicationHook: () => (0, n.jsxs)("div", {
                                        className: N.connectedAccountPoweredByText,
                                        children: [null != t.application.bot ? (0, n.jsx)(d.default, {
                                            user: new p.default(t.application.bot),
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
            let M = a.forwardRef(function(e, t) {
                let {
                    connectedAccounts: l,
                    theme: a,
                    locale: s,
                    className: o,
                    userId: r
                } = e;
                if (null == l || 0 === l.length) return null;
                let u = l.filter(e => c.default.isSupported(e.type)).map(e => (0, n.jsx)(v, {
                        connectedAccount: e,
                        theme: a,
                        locale: s,
                        userId: r
                    }, "".concat(e.type, ":").concat(e.id))),
                    d = [],
                    f = [];
                for (let e = 0; e < u.length; e++) {
                    let t = u[e];
                    e % 2 == 0 ? d.push(t) : f.push(t)
                }
                return (0, n.jsxs)("div", {
                    ref: t,
                    className: i(N.connectedAccounts, o),
                    children: [(0, n.jsx)("div", {
                        className: N.connectedAccountsColumn,
                        children: d
                    }), (0, n.jsx)("div", {
                        className: N.connectedAccountsColumn,
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
            var a = l("414456"),
                s = l.n(a),
                i = l("77078"),
                o = l("235275"),
                r = l("49111"),
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
                    className: s(d.actionButton, t)
                })
            }

            function f(e) {
                let {
                    isCurrentUser: t,
                    user: l,
                    relationshipType: a,
                    onAddFriend: s,
                    onIgnoreFriend: f,
                    onSendMessage: m,
                    addFriendText: E
                } = e, T = (0, o.useIsDMsToClydeEnabled)();
                return t || a === r.RelationshipTypes.BLOCKED || l.isClyde() && !T ? null : a === r.RelationshipTypes.FRIEND || l.bot || l.isClyde() ? (0, n.jsx)(c, {
                    color: i.Button.Colors.GREEN,
                    onClick: m,
                    children: u.default.Messages.SEND_MESSAGE
                }) : a === r.RelationshipTypes.PENDING_OUTGOING ? (0, n.jsx)(c, {
                    color: i.Button.Colors.GREEN,
                    disabled: !0,
                    children: u.default.Messages.ADD_FRIEND_BUTTON_AFTER
                }) : a === r.RelationshipTypes.PENDING_INCOMING ? (0, n.jsxs)("div", {
                    className: d.pendingIncoming,
                    children: [(0, n.jsx)(c, {
                        color: i.Button.Colors.GREEN,
                        onClick: s,
                        children: u.default.Messages.FRIEND_REQUEST_ACCEPT
                    }), (0, n.jsx)(c, {
                        color: i.Button.Colors.PRIMARY,
                        onClick: f,
                        className: d.actionRightButton,
                        children: u.default.Messages.FRIEND_REQUEST_IGNORE
                    })]
                }) : (0, n.jsx)(c, {
                    color: i.Button.Colors.GREEN,
                    onClick: s,
                    children: null != E ? E : u.default.Messages.ADD_FRIEND_BUTTON
                })
            }
        },
        981601: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return Y
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("627445"),
                i = l.n(s),
                o = l("446674"),
                r = l("77078"),
                u = l("823411"),
                d = l("901582"),
                c = l("252744"),
                f = l("750560"),
                m = l("575365"),
                E = l("502651"),
                T = l("812204"),
                _ = l("685665"),
                p = l("373469"),
                S = l("546463"),
                I = l("26989"),
                A = l("305961"),
                h = l("824563"),
                g = l("27618"),
                C = l("697218"),
                N = l("599110"),
                v = l("713135"),
                O = l("561845"),
                M = l("217513"),
                R = l("641055"),
                y = l("430312"),
                x = l("763866"),
                L = l("789321"),
                P = l("935409"),
                D = l("849674"),
                b = l("590456"),
                U = l("49111"),
                j = l("450484"),
                F = l("304118");

            function G(e) {
                e.stopPropagation()
            }

            function B(e) {
                let {
                    user: t,
                    guildId: l,
                    channelId: s,
                    setNote: i,
                    closePopout: C,
                    setPopoutRef: B,
                    disableUserProfileLink: Y = __OVERLAY__,
                    analyticsParams: k = {}
                } = e, w = a.useRef(null), H = (0, M.default)(t.id, l), V = (0, c.default)(w), W = (0, o.useStateFromStores)([v.default], () => {
                    var e;
                    return null === (e = v.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
                }), {
                    AnalyticsLocationProvider: K
                } = (0, _.default)(T.default.PROFILE_POPOUT), z = (0, o.useStateFromStores)([A.default], () => null != l ? A.default.getGuild(l) : null), J = (0, o.useStateFromStores)([I.default], () => null != l ? I.default.getMember(l, t.id) : null), Q = t.isNonUserBot(), {
                    activity: X,
                    customStatusActivity: q,
                    status: Z,
                    isMobile: $,
                    isApplicationStreaming: ee
                } = (0, o.useStateFromStoresObject)([p.default, h.default], () => {
                    let e = null != p.default.getAnyStreamForUser(t.id);
                    return {
                        activity: h.default.findActivity(t.id, t => {
                            let {
                                type: l
                            } = t;
                            return e ? l === U.ActivityTypes.PLAYING : l !== U.ActivityTypes.CUSTOM_STATUS
                        }),
                        customStatusActivity: h.default.findActivity(t.id, e => {
                            let {
                                type: t
                            } = e;
                            return t === U.ActivityTypes.CUSTOM_STATUS
                        }),
                        status: Q ? null : h.default.getStatus(t.id),
                        isMobile: h.default.isMobileOnline(t.id),
                        isApplicationStreaming: e
                    }
                }), [et, el] = a.useState(!1), en = a.useMemo(() => null != l ? {
                    [l]: [t.id]
                } : {}, [l, t.id]);
                (0, f.useSubscribeGuildMembers)(en);
                let ea = (0, O.default)(t.id, l),
                    {
                        shouldShow: es,
                        markAsDismissed: ei,
                        isReadyForAnimation: eo
                    } = (0, D.useShouldShowUserPopoutCollectiblesUpsell)(t, l),
                    er = a.useMemo(() => ({
                        marginTop: es ? L.DEFAULT_COLLECTIBLES_UPSELL_HEIGHT : void 0
                    }), [es]),
                    eu = a.useCallback(() => null != X && null != X.application_id && null == S.default.getGame(X.application_id) ? u.default.fetchApplication(X.application_id) : Promise.resolve(), [X]);
                return a.useEffect(() => {
                    null == B || B(null == w ? void 0 : w.current)
                }, [w, B]), a.useEffect(() => {
                    async function e() {
                        await eu(), (null == l || (null == J ? void 0 : J.fullProfileLoadedTimestamp) != null) && (function() {
                            var e, n, a;
                            let i, o, r;
                            null != X && (i = X.party, o = X.assets, r = null != X.application_id ? S.default.getGame(X.application_id) : null);
                            let u = Z;
                            Z === U.StatusTypes.ONLINE && (u = $ ? U.AnalyticsUserStatusTypes.ONLINE_MOBILE : U.AnalyticsUserStatusTypes.ONLINE_DESKTOP);
                            let d = null != J ? {
                                    has_nickname: !!(null == J ? void 0 : J.nick),
                                    has_guild_member_avatar: !!(null == J ? void 0 : J.avatar),
                                    has_guild_member_banner: !!(null == H ? void 0 : H.isUsingGuildMemberBanner()),
                                    has_guild_member_bio: !!(null == H ? void 0 : H.isUsingGuildMemberBio())
                                } : {},
                                c = null != W ? {
                                    other_application_id: null == W ? void 0 : W.id,
                                    other_application_name: t.toString()
                                } : {};
                            N.default.track(U.AnalyticEvents.OPEN_POPOUT, {
                                type: "Profile Popout",
                                guild_id: l,
                                channel_id: s,
                                other_user_id: t.id,
                                application_id: null != X ? X.application_id : void 0,
                                application_name: null != X ? X.name : void 0,
                                sku_id: null != r ? r.primarySkuId : null,
                                is_friend: g.default.isFriend(t.id),
                                has_images: !!(null !== (a = null === (e = o) || void 0 === e ? void 0 : e.large_image) && void 0 !== a ? a : null === (n = o) || void 0 === n ? void 0 : n.small_image),
                                party_max: null != i && null != i.size ? i.size[1] : void 0,
                                party_id: null != i ? i.id : void 0,
                                party_platform: null != i && (0, j.isSpotifyParty)(i.id) ? U.PlatformTypes.SPOTIFY : null,
                                game_platform: (0, m.default)(X),
                                profile_user_status: u,
                                is_streaming: ee,
                                has_custom_status: null != q,
                                has_avatar_decoration: null != t.avatarDecoration,
                                has_profile_effect: (null == H ? void 0 : H.profileEffectID) != null,
                                profile_has_nitro_customization: null != H && (null == H ? void 0 : H.hasPremiumCustomization()),
                                profile_has_theme_color_customized: null != H && H.hasThemeColors(),
                                profile_has_theme_animation: (null == H ? void 0 : H.popoutAnimationParticleType) != null,
                                ...d,
                                ...c,
                                ...k
                            })
                        }(), el(!0))
                    }!et && e()
                }, [J, et, l]), a.useEffect(() => {
                    eu()
                }, [eu]), (0, n.jsx)(K, {
                    children: (0, n.jsx)(d.default, {
                        section: U.AnalyticsSections.PROFILE_POPOUT,
                        children: (0, n.jsx)(r.Dialog, {
                            ref: w,
                            "aria-label": t.username,
                            onClick: G,
                            onContextMenu: G,
                            style: er,
                            children: (0, n.jsxs)(y.default, {
                                user: t,
                                guildId: l,
                                profileType: b.UserProfileTypes.POPOUT,
                                className: es ? F.hasCollectiblesUpsell : void 0,
                                showOutOfBoundaryComponents: eo,
                                children: [(0, n.jsx)(P.default, {
                                    user: t,
                                    displayProfile: H,
                                    guildId: l,
                                    channelId: s,
                                    onClose: () => null == C ? void 0 : C(),
                                    isMobile: $,
                                    isStreaming: (0, E.default)(X),
                                    status: Z,
                                    disableUserProfileLink: Y,
                                    isHovering: V,
                                    showCollectiblesSocialUpsell: es,
                                    dismissCollectiblesSocialUpsell: ei
                                }), (0, n.jsxs)(y.default.Inner, {
                                    children: [(0, n.jsx)(R.default, {
                                        onTooltipClose: C
                                    }), (0, n.jsx)(x.default, {
                                        activity: X,
                                        customStatusActivity: q,
                                        displayProfile: H,
                                        user: t,
                                        guild: z,
                                        guildMember: J,
                                        channelId: s,
                                        onClose: C,
                                        setNote: i,
                                        canDM: ea
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
            var Y = a.memo(function(e) {
                let {
                    userId: t,
                    user: l,
                    ...a
                } = e, s = (0, o.useStateFromStores)([C.default], () => C.default.getUser(t), [t]), r = null != l ? l : s;
                return i(null != r, "Unexpected missing user"), (0, n.jsx)(B, {
                    user: r,
                    ...a
                })
            })
        },
        763866: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return q
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                o = l("446674"),
                r = l("77078"),
                u = l("450911"),
                d = l("736964"),
                c = l("335189"),
                f = l("618017"),
                m = l("980215"),
                E = l("235767"),
                T = l("190045"),
                _ = l("419806"),
                p = l("92274"),
                S = l("271938"),
                I = l("42203"),
                A = l("26989"),
                h = l("957255"),
                g = l("27618"),
                C = l("102985"),
                N = l("987772"),
                v = l("164424"),
                O = l("387111"),
                M = l("158998"),
                R = l("713135"),
                y = l("906889"),
                x = l("717226"),
                L = l("10532"),
                P = l("648149"),
                D = l("915712"),
                b = l("261523"),
                U = l("369869"),
                j = l("545590"),
                F = l("972595"),
                G = l("316095"),
                B = l("802279"),
                Y = l("577172"),
                k = l("465215"),
                w = l("301998"),
                H = l("379657"),
                V = l("853780"),
                W = l("574191"),
                K = l("491250"),
                z = l("49111"),
                J = l("782340"),
                Q = l("956330"),
                X = l("398664");

            function q(e) {
                var t, l, s;
                let {
                    activity: q,
                    customStatusActivity: Z,
                    user: $,
                    displayProfile: ee,
                    guild: et,
                    guildMember: el,
                    channelId: en,
                    onClose: ea,
                    setNote: es = !1,
                    canDM: ei,
                    hideNote: eo = !1,
                    showCopiableUsername: er = !1
                } = e, eu = (0, o.useStateFromStores)([C.default], () => C.default.hidePersonalInformation), ed = (0, o.useStateFromStores)([R.default], () => {
                    var e;
                    return null === (e = R.default.getUserProfile($.id)) || void 0 === e ? void 0 : e.application
                }), [ec, ef] = a.useState(!1), [em, eE] = a.useState(!1), eT = (0, o.useStateFromStores)([I.default], () => I.default.getChannel(en)), e_ = (0, o.useStateFromStores)([h.default], () => h.default.can(z.Permissions.USE_CLYDE_AI, eT)), {
                    profileTheme: ep
                } = (0, y.default)($, ee), eS = a.useRef(null), [eI, eA] = a.useState(!0), eh = a.useCallback(() => {
                    let {
                        current: e
                    } = eS;
                    null != e && eA(0 === e.getScrollerState().scrollTop)
                }, []), eg = (0, f.canEditClydeAIProfile)(et), eC = (0, m.canUseCustomClydeProfiles)(et), eN = (0, o.useStateFromStores)([A.default], () => A.default.isMember(null == et ? void 0 : et.id, $.id));
                a.useLayoutEffect(() => {
                    var e;
                    let {
                        current: t
                    } = eS;
                    null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
                        top: 0
                    }))
                }, []);
                let ev = (0, o.useStateFromStores)([g.default], () => g.default.getRelationshipType($.id)),
                    eO = !$.bot && !$.isClyde(),
                    {
                        moreAddFriend: eM
                    } = p.AddFriendProminenceExperimentDesktop.useExperiment({
                        location: "user popout"
                    }, {
                        disable: !eO,
                        autoTrackExposure: !0
                    });
                if ($.isSystemUser()) return null;
                if ($.isNonUserBot() && !$.isClyde()) return (0, n.jsx)(K.default, {
                    user: $,
                    nickname: null,
                    pronouns: null,
                    className: Q.usernameSection,
                    lastSection: !0
                });
                let eR = null !== (t = O.default.getNickname(null == et ? void 0 : et.id, en, $)) && void 0 !== t ? t : M.default.getName($),
                    ey = $.isNonUserBot() && !$.isClyde() || $.isClyde() && eC || !ei;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(K.default, {
                        className: Q.usernameSection,
                        user: $,
                        nickname: eR,
                        pronouns: null == ee ? void 0 : ee.pronouns,
                        usernameIcon: $.hasAvatarForGuild(null == et ? void 0 : et.id) && (0, n.jsx)(P.default, {
                            user: $,
                            nickname: eR
                        }),
                        shouldCopyOnClick: er
                    }), $.isClyde() ? (0, n.jsx)("div", {
                        className: Q.lastEditedByContainer,
                        children: (0, n.jsx)(E.default, {
                            className: Q.lastEditedByTag,
                            guildId: null == et ? void 0 : et.id
                        })
                    }) : null, (0, n.jsxs)(r.HeadingLevel, {
                        children: [(0, n.jsx)(B.default, {
                            className: Q.customStatusSection,
                            customStatusActivity: Z
                        }), eM && eO ? (0, n.jsxs)("div", {
                            className: Q.addFriendSection,
                            children: [ev !== z.RelationshipTypes.FRIEND ? (0, n.jsx)(x.default, {
                                user: $,
                                isCurrentUser: $.id === S.default.getId(),
                                relationshipType: ev,
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
                                addFriendText: J.default.Messages.FRIENDS_SECTION_ADD_FRIEND
                            }) : null, ey ? null : (0, n.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                color: r.Button.Colors.PRIMARY,
                                onClick: () => u.default.openPrivateChannel($.id),
                                children: J.default.Messages.SEND_MESSAGE
                            })]
                        }) : null, (0, n.jsx)(L.default, {
                            className: Q.divider
                        }), $.isClyde() && eg && null != et ? !eN && eC ? e_ && !em ? (0, n.jsx)(r.Button, {
                            className: Q.editClydeButton,
                            innerClassName: Q.editClydeButtonInner,
                            submitting: ec,
                            onClick: async () => {
                                ef(!0);
                                try {
                                    await (0, c.addClydeGuildMember)(et.id), ef(!1)
                                } catch (e) {
                                    ef(!1), eE(!0)
                                }
                            },
                            children: J.default.Messages.CLYDE_ADD_CLYDE
                        }) : (0, n.jsxs)(r.Text, {
                            className: Q.clydeErrorText,
                            variant: "text-sm/normal",
                            color: "text-danger",
                            children: [(0, n.jsx)("img", {
                                className: Q.sadClyde,
                                src: X,
                                alt: J.default.Messages.SAD_CLYDE_ALT_TEXT
                            }), " ", J.default.Messages.CANNOT_ADD_CLYDE]
                        }) : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)(r.Button, {
                                className: Q.editClydeButton,
                                innerClassName: Q.editClydeButtonInner,
                                onClick: () => {
                                    null == ea || ea(), (0, T.default)(et.id)
                                },
                                children: [(0, n.jsx)(N.default, {
                                    className: Q.pencilIcon
                                }), " ", J.default.Messages.EDIT_CLYDE]
                            }), eC ? (0, n.jsxs)(r.Button, {
                                className: Q.editClydeButton,
                                innerClassName: Q.editClydeButtonInner,
                                color: r.ButtonColors.WHITE,
                                onClick: () => {
                                    null == ea || ea(), (0, _.default)(et.id)
                                },
                                children: [(0, n.jsx)(v.default, {
                                    className: Q.pencilIcon
                                }), " ", J.default.Messages.SHARE]
                            }) : null]
                        }) : null, (0, n.jsxs)(r.AdvancedScroller, {
                            className: i(Q.scroller, {
                                [Q.scrollerSeparator]: !eI
                            }),
                            onScroll: eh,
                            ref: eS,
                            children: [(0, n.jsx)(j.default, {
                                user: $,
                                guildId: null == et ? void 0 : et.id
                            }), (0, n.jsx)(U.default, {
                                isUsingGuildBio: null !== (l = null == ee ? void 0 : ee.isUsingGuildMemberBio()) && void 0 !== l && l,
                                bio: null == ee ? void 0 : ee.bio,
                                guild: et,
                                hidePersonalInformation: eu
                            }), $.isClyde() ? (0, n.jsx)(F.default, {}) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(k.default, {
                                    userId: $.id,
                                    guild: et,
                                    guildMember: el
                                }), (0, n.jsx)(D.default, {
                                    activity: q,
                                    user: $,
                                    guild: et,
                                    channelId: en,
                                    onClose: ea
                                }), (null == ed ? void 0 : ed.popularApplicationCommandIds) != null && null != eT ? (0, n.jsx)(H.default, {
                                    applicationId: ed.id,
                                    commandIds: ed.popularApplicationCommandIds,
                                    channel: eT,
                                    guildId: null == et ? void 0 : et.id,
                                    onClick: ea
                                }) : null, (0, n.jsx)(b.default, {
                                    user: $,
                                    guildId: null == et ? void 0 : et.id
                                }), (0, n.jsx)(W.default, {
                                    user: $,
                                    guild: et,
                                    guildMember: el,
                                    showBorder: null !== (s = null == ee ? void 0 : ee.canEditThemes) && void 0 !== s && s
                                }), (0, n.jsx)(G.default, {
                                    userId: $.id,
                                    channelId: en,
                                    guild: et,
                                    onClose: ea,
                                    theme: ep
                                }), null != ed && void 0 !== en && (0, n.jsx)(V.default, {
                                    channelId: en,
                                    applicationId: ed.id
                                }), (0, n.jsx)(w.default, {
                                    user: $,
                                    setNote: es,
                                    autoFocus: !ei,
                                    lastSection: !ei,
                                    hideNote: eu || eo
                                })]
                            }), eM && eO ? null : (0, n.jsx)(Y.default, {
                                user: $,
                                setNote: es,
                                canDM: ei,
                                onClose: ea,
                                inClydeProfilesExperiment: eC
                            })]
                        })]
                    })]
                })
            }
        },
        915712: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("463848"),
                s = l("777003"),
                i = l("49111"),
                o = l("477691");

            function r(e) {
                let {
                    activity: t,
                    user: l,
                    guild: r,
                    channelId: u,
                    onClose: d
                } = e;
                return (0, n.jsx)(s.default, {
                    children: (0, n.jsx)(a.default, {
                        type: a.UserActivityTypes.USER_POPOUT_V2,
                        activity: t,
                        className: o.activity,
                        user: l,
                        guildId: null == r ? void 0 : r.id,
                        channelId: u,
                        source: i.AnalyticsLocations.PROFILE_POPOUT,
                        onOpenGameProfile: d,
                        onAction: d,
                        actionColor: o.buttonColor
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
            var a = l("77078"),
                s = l("899604"),
                i = l("999203"),
                o = l("777003"),
                r = l("782340"),
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
                return null != c && f && null != E && 0 !== E.length ? (0, n.jsxs)(o.default, {
                    children: [(0, n.jsx)(a.Heading, {
                        variant: "eyebrow",
                        className: d.title,
                        children: r.default.Messages.BOT_PROFILE_BENEFITS_HEADING
                    }), (0, n.jsx)("div", {
                        className: u.benefitsContainer,
                        children: E.map((e, t) => (0, n.jsx)(s.default, {
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
                    return S
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                s = l("90592"),
                i = l("910861"),
                o = l("153335"),
                r = l("191814"),
                u = l("8161"),
                d = l("613676"),
                c = l("713135"),
                f = l("999203"),
                m = l("609734"),
                E = l("777003"),
                T = l("49111"),
                _ = l("782340"),
                p = l("431375");

            function S(e) {
                let {
                    user: t,
                    guildId: l
                } = e, S = (0, a.useStateFromStores)([c.default], () => {
                    var e;
                    return null === (e = c.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
                }), I = null != S && (0, d.canInstallApplication)(S.id, S.customInstallUrl, S.installParams), {
                    botUpgradeable: A,
                    subscriptionGroupListing: h
                } = (0, f.default)({
                    user: t,
                    guildId: l
                }), g = null != h ? (0, s.getPayableSubscriptionListing)(h) : null, {
                    openModal: C
                } = (0, o.default)({
                    listing: g,
                    guildId: l,
                    groupListingId: null == h ? void 0 : h.id,
                    showBenefitsFirst: !0,
                    analyticsLocation: T.AnalyticsLocations.BOT_PROFILE_POPOUT
                });
                return I || A ? (0, n.jsx)(E.default, {
                    children: (0, n.jsxs)("div", {
                        className: p.buttonsContainer,
                        children: [(0, n.jsx)(m.default, {
                            application: S,
                            className: p.button
                        }), A && (0, n.jsx)(i.default, {
                            onClick: C,
                            className: p.button,
                            children: (0, n.jsxs)("div", {
                                className: p.botUpgradeButtonContent,
                                children: [(0, n.jsx)(u.default, {
                                    width: 16,
                                    height: 16
                                }), (0, n.jsx)(r.default, {
                                    size: 4,
                                    horizontal: !0
                                }), _.default.Messages.BOT_PROFILE_UPGRADE_CTA]
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
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("213736"),
                s = l("777003"),
                i = l("814076");

            function o(e) {
                let {} = e;
                return (0, n.jsx)(s.default, {
                    className: i.clydeMoreInfo,
                    children: (0, n.jsx)(a.default, {})
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
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                o = l("446674"),
                r = l("77078"),
                u = l("851387"),
                d = l("216049"),
                c = l("915639"),
                f = l("102985"),
                m = l("461380"),
                E = l("713135"),
                T = l("824140"),
                _ = l("401642"),
                p = l("777003"),
                S = l("590456"),
                I = l("49111"),
                A = l("782340"),
                h = l("843482"),
                g = l("814076");

            function C(e) {
                var t, l;
                let s, C, {
                        userId: N,
                        channelId: v,
                        guild: O,
                        theme: M,
                        onClose: R,
                        className: y
                    } = e,
                    x = (0, d.default)(O, N, v),
                    [L, P] = a.useState(new Set),
                    D = (0, o.useStateFromStores)([E.default], () => E.default.getUserProfile(N)),
                    b = null !== (t = null == D ? void 0 : D.connectedAccounts) && void 0 !== t ? t : [],
                    U = null !== (l = null == D ? void 0 : D.applicationRoleConnections) && void 0 !== l ? l : [],
                    j = (0, o.useStateFromStores)([f.default], () => f.default.hidePersonalInformation),
                    F = (0, o.useStateFromStores)([c.default], () => c.default.locale);
                if (a.useEffect(() => {
                        (null == O ? void 0 : O.id) != null && (null == x ? void 0 : x.id) != null && u.default.fetchGuildRoleConnectionsEligibility(O.id, x.id).then(e => {
                            let t = new Set;
                            for (let l of e)
                                for (let {
                                        connection_type: e
                                    }
                                    of l) t.add(e);
                            P(t)
                        })
                    }, [null == O ? void 0 : O.id, null == x ? void 0 : x.id]), j || null == x) return null;
                let G = Array.from(L).map(e => {
                    let t = b.find(t => t.type === e);
                    return null == t ? null : (0, n.jsx)(T.ConnectedUserAccount, {
                        connectedAccount: t,
                        theme: M,
                        locale: F,
                        userId: N
                    }, "".concat(t.type, ":").concat(t.id))
                }).filter(e => null != e);
                return (G.length > 0 && (s = (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(r.Heading, {
                        variant: "eyebrow",
                        className: g.title,
                        children: A.default.Messages.CONNECTIONS
                    }), (0, n.jsxs)("div", {
                        className: i(h.connectionsContainer, y),
                        children: [G, (0, n.jsxs)(r.Clickable, {
                            onClick: function() {
                                (0, _.openUserProfileModal)({
                                    userId: N,
                                    guildId: null == O ? void 0 : O.id,
                                    channelId: v,
                                    section: S.UserProfileSections.USER_INFO_CONNECTIONS,
                                    analyticsLocation: {
                                        section: I.AnalyticsSections.PROFILE_POPOUT
                                    }
                                }), null == R || R()
                            },
                            className: h.connections,
                            children: [(0, n.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                color: "interactive-active",
                                className: h.connectionsText,
                                children: A.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_ALL
                            }), (0, n.jsx)(m.default, {
                                direction: m.default.Directions.RIGHT,
                                className: h.connectionsCaret
                            })]
                        })]
                    })]
                })), U.length > 0 && (C = (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(r.Heading, {
                        variant: "eyebrow",
                        className: g.title,
                        children: A.default.Messages.APPS
                    }), (0, n.jsx)("div", {
                        className: i(h.connectionsContainer, y),
                        children: U.map(e => (0, n.jsx)(T.ConnectedApplicationUserRoleAccount, {
                            applicationRoleConnection: e,
                            locale: F
                        }, e.application.id))
                    })]
                })), null == s && null == C) ? null : (0, n.jsxs)(p.default, {
                    children: [C, s]
                })
            }
        },
        577172: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                o = l("394846"),
                r = l("77078"),
                u = l("450911"),
                d = l("36341"),
                c = l("109264"),
                f = l("158998"),
                m = l("777003"),
                E = l("782340"),
                T = l("242379"),
                _ = l("107680"),
                p = l("379539"),
                S = l("714073"),
                I = l("980923"),
                A = l("779585"),
                h = l("900143"),
                g = l("923337");
            let C = [g, _, I, S, A, p, h];

            function N(e) {
                let {
                    userId: t
                } = e, [l, s] = a.useState(!1);
                return a.useLayoutEffect(() => {
                    !l && s(!0)
                }, [l]), (0, n.jsx)("div", {
                    className: T.wumpusWrapper,
                    children: (0, n.jsxs)("div", {
                        className: i(T.wumpus, {
                            [T.wumpusShown]: l
                        }),
                        children: [(0, n.jsx)("img", {
                            className: T.wumpusImage,
                            alt: E.default.Messages.IMG_ALT_ICON.format({
                                name: E.default.Messages.WUMPUS
                            }),
                            src: function() {
                                let e = parseInt(t.slice(-6), 10);
                                return C[e % C.length]
                            }()
                        }), (0, n.jsx)("span", {
                            className: T.wumpusTooltip,
                            children: E.default.Messages.USER_POPOUT_WUMPUS_TOOLTIP
                        })]
                    })
                })
            }

            function v(e) {
                let {
                    user: t,
                    setNote: l,
                    canDM: a,
                    onClose: s,
                    inClydeProfilesExperiment: i = !1
                } = e;
                if (t.isNonUserBot() && !t.isClyde() || t.isClyde() && i || !a) return null;
                let _ = a && (0, f.isNewUser)(t) && !t.bot;
                return (0, n.jsxs)(m.default, {
                    className: T.section,
                    lastSection: !0,
                    children: [_ && a ? (0, n.jsx)(N, {
                        userId: t.id
                    }) : null, a && t.isClyde() ? (0, n.jsxs)(r.Button, {
                        className: T.messageClydeButton,
                        innerClassName: T.messageClydeButtonInner,
                        onClick: () => {
                            u.default.openPrivateChannel(t.id)
                        },
                        fullWidth: !0,
                        look: r.ButtonLooks.INVERTED,
                        children: [(0, n.jsx)(c.default, {
                            width: 16,
                            height: 16,
                            className: T.messageClydeButtonIcon
                        }), E.default.Messages.CLYDE_SEND_MESSAGE]
                    }) : null, a && !t.isClyde() ? (0, n.jsx)(d.default, {
                        className: T.messageInputContainer,
                        inputClassName: T.messageInput,
                        user: t,
                        onClose: () => null == s ? void 0 : s(),
                        autoFocus: !o.isMobile && !l
                    }) : null]
                })
            }
        },
        465215: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("880114"),
                s = l("777003"),
                i = l("814076");

            function o(e) {
                let {
                    userId: t,
                    guild: l,
                    guildMember: o
                } = e;
                return (0, n.jsx)(s.default, {
                    children: (0, n.jsx)(a.default, {
                        userId: t,
                        guild: l,
                        guildMember: o,
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
            var a = l("77078"),
                s = l("910330"),
                i = l("777003"),
                o = l("782340"),
                r = l("920244"),
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
                    children: [(0, n.jsx)(a.Heading, {
                        variant: "eyebrow",
                        className: u.title,
                        children: o.default.Messages.NOTE
                    }), (0, n.jsx)(s.default, {
                        userId: t.id,
                        autoFocus: l || d,
                        className: r.note
                    }, "note")]
                })
            }
        },
        379657: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return _
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("77078"),
                i = l("716241"),
                o = l("240249"),
                r = l("781423"),
                u = l("252063"),
                d = l("599110"),
                c = l("777003"),
                f = l("49111"),
                m = l("782340"),
                E = l("640329"),
                T = l("814076");

            function _(e) {
                let {
                    applicationId: t,
                    commandIds: l,
                    channel: _,
                    guildId: p,
                    onClick: S
                } = e;
                (0, u.usePrivateChannelIntegrationState)({
                    channelId: _.id
                });
                let {
                    commands: I
                } = o.useCommandsForApplication(_, t, l), A = a.useMemo(() => null == I ? void 0 : I.filter(e => !0 !== e.nsfw), [I]), h = a.useCallback(e => {
                    null == S || S(), d.default.track(f.AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, {
                        application_id: t,
                        command_id: e,
                        guild_id: p,
                        ...(0, i.collectChannelAnalyticsMetadataFromId)(_.id)
                    })
                }, [t, _.id, p, S]);
                return null == A || 0 === A.length ? null : (0, n.jsxs)(c.default, {
                    children: [(0, n.jsx)(s.Heading, {
                        variant: "eyebrow",
                        className: T.title,
                        children: m.default.Messages.BOT_PROFILE_SLASH_COMMANDS
                    }), (0, n.jsx)("ul", {
                        className: E.popularApplicationCommandsList,
                        children: A.map(e => (0, n.jsx)("li", {
                            children: (0, n.jsx)(r.CommandClickable, {
                                commandId: e.id,
                                commandName: e.displayName,
                                commandDescription: e.displayDescription,
                                onClick: h,
                                guildId: p,
                                channelId: _.id
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
            var a = l("77078"),
                s = l("970755"),
                i = l("252063"),
                o = l("777003"),
                r = l("782340"),
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
                return m ? (0, n.jsxs)(o.default, {
                    children: [(0, n.jsx)(a.Heading, {
                        variant: "eyebrow",
                        className: d.title,
                        children: r.default.Messages.BOT_PROFILE_MANAGE_PRIVATE_CHANNEL_INTEGRATION
                    }), (0, n.jsx)(a.Button, {
                        onClick: () => (0, s.deletePrivateChannelIntegration)(l, t),
                        size: a.Button.Sizes.ICON,
                        color: a.Button.Colors.RED,
                        look: a.Button.Looks.LINK,
                        className: u.button,
                        children: r.default.Messages.BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION
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
            var a = l("414456"),
                s = l.n(a),
                i = l("77078"),
                o = l("581583"),
                r = l("777003"),
                u = l("782340"),
                d = l("259236"),
                c = l("814076");

            function f(e) {
                let {
                    user: t,
                    guild: l,
                    guildMember: a,
                    showBorder: f
                } = e;
                return null == l || null == a ? null : (0, n.jsxs)(r.default, {
                    children: [(0, n.jsx)(i.Heading, {
                        variant: "eyebrow",
                        className: c.title,
                        children: u.default.Messages.ROLES_LIST.format({
                            numRoles: a.roles.length
                        })
                    }), (0, n.jsx)(o.default, {
                        roleClassName: s(d.rolePill, {
                            [d.rolePillBorder]: f
                        }),
                        className: d.roles,
                        guild: l,
                        user: t,
                        userRoles: a.roles,
                        disableBorderColor: !0
                    }, "roles")]
                })
            }
        },
        849674: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useShouldShowUserPopoutCollectiblesUpsell: function() {
                    return _
                }
            });
            var n = l("884691"),
                a = l("627445"),
                s = l.n(a),
                i = l("65597"),
                o = l("151426"),
                r = l("875212"),
                u = l("340066"),
                d = l("619935"),
                c = l("563775"),
                f = l("729022"),
                m = l("10641"),
                E = l("509802"),
                T = l("697218");
            let _ = (e, t) => {
                let l = "useShouldShowUserPopoutCollectiblesUpsell";
                (0, r.useTriggerDebuggingAA)({
                    location: l + "auto on",
                    autoTrackExposure: !0
                }), (0, r.useTriggerDebuggingAA)({
                    location: l + "auto off",
                    autoTrackExposure: !1
                }), (0, c.default)({
                    location: l
                });
                let a = (0, i.default)([T.default], () => T.default.getCurrentUser());
                s(null != a, "currentUser should not be null");
                let _ = (0, d.useBlockedPaymentsConfig)(),
                    p = (null == a ? void 0 : a.id) !== e.id && !_,
                    {
                        shouldUpsellAvatarDecoration: S,
                        shouldUpsellProfileEffect: I
                    } = (0, f.default)({
                        currentUser: a,
                        popoutUser: e,
                        guildId: t
                    }),
                    A = n.useMemo(() => {
                        let e = [];
                        return p && (S && e.push(o.DismissibleContent.COLLECTIBLES_USER_POPOUT_UPSELL), I && e.push(o.DismissibleContent.COLLECTIBLES_PROFILE_EFFECT_SOCIAL_UPSELL)), e
                    }, [S, I, p]),
                    [h, g] = (0, E.useDismissibleContentGroup)(A, void 0, !0),
                    C = h === o.DismissibleContent.COLLECTIBLES_USER_POPOUT_UPSELL || h === o.DismissibleContent.COLLECTIBLES_PROFILE_EFFECT_SOCIAL_UPSELL,
                    N = n.useCallback(e => {
                        S && (0, m.markDismissibleContentAsDismissed)(o.DismissibleContent.COLLECTIBLES_USER_POPOUT_UPSELL, {
                            dismissAction: e,
                            forceTrack: !0
                        }), I && (0, m.markDismissibleContentAsDismissed)(o.DismissibleContent.COLLECTIBLES_PROFILE_EFFECT_SOCIAL_UPSELL, {
                            dismissAction: e,
                            forceTrack: !0
                        })
                    }, [S, I]),
                    [v, O] = n.useState(!1);
                return (0, u.default)(() => O(!0), C ? 250 : null), {
                    shouldShow: C,
                    markAsDismissed: N,
                    isReadyForAnimation: v
                }
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
                a = l("49111"),
                s = l("782340");
            let i = [{
                check(e, t, l) {
                    if (!l || null == t.getGuildId()) return !1;
                    let a = n.default.extractEveryoneRole(e, t);
                    if (null == a || !n.default.shouldShowEveryoneGuard(a, t)) return !1;
                    let i = n.default.everyoneMemberCount(a, t),
                        o = Math.pow(10, Math.floor(Math.log10(i))),
                        r = s.default.Messages.EVERYONE_POPOUT_BODY;
                    return t.isForumPost() ? r = s.default.Messages.EVERYONE_POPOUT_BODY_FORUM_POST : t.isThread() && (r = s.default.Messages.EVERYONE_POPOUT_BODY_THREAD), {
                        body: r.format({
                            role: a,
                            count: (Math.trunc(i / o) * o).toLocaleString()
                        }),
                        footer: s.default.Messages.EVERYONE_POPOUT_FOOTER
                    }
                },
                analyticsType: "@Everyone Warning",
                animation: {
                    dark: () => l.el("878809").then(l.t.bind(l, "878809", 19)),
                    light: () => l.el("390594").then(l.t.bind(l, "390594", 19))
                }
            }, {
                check: e => !!a.TOKEN_REGEX.test(e) && {
                    body: s.default.Messages.TOKEN_POPOUT_BODY
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
                a = l.n(n),
                s = l("884351"),
                i = l("19766"),
                o = l("957255"),
                r = l("49111");
            let u = new RegExp(/@(:?everyone|here)/);

            function d(e, t) {
                let l = 0;
                if (t.isThread()) {
                    var n;
                    return null !== (n = t.memberCount) && void 0 !== n ? n : 0
                }
                let a = i.default.getProps(t.getGuildId(), t.id);
                return a.groups.forEach(t => {
                    ("@everyone" === e || t.id !== r.StatusTypes.OFFLINE) && (l += t.count)
                }), l
            }
            var c = {
                shouldShowEveryoneGuard: function(e, t) {
                    let l = t.getGuildId();
                    a(l, "isGuildChannel with null guildId");
                    let n = d(e, t);
                    return n > 30 && o.default.can(r.Permissions.MENTION_EVERYONE, t)
                },
                everyoneMemberCount: d,
                extractEveryoneRole: function(e, t) {
                    let l = s.default.parsePreprocessor(t, e);
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
                    return T
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                s = l("913144"),
                i = l("135230"),
                o = l("979911"),
                r = l("401848"),
                u = l("697218"),
                d = l("599110"),
                c = l("267625"),
                f = l("719923"),
                m = l("49111"),
                E = l("782340");

            function T(e) {
                let {
                    openWarningPopout: t,
                    type: l,
                    content: T,
                    stickers: _,
                    uploads: p,
                    channel: S,
                    restrictMentions: I = !0,
                    respectCooldown: A = !0
                } = e, h = f.default.canUseIncreasedMessageLength(u.default.getCurrentUser());
                return new Promise(e => (function(e) {
                    var t, l, u;
                    let {
                        openWarningPopout: f,
                        type: T,
                        content: _,
                        stickers: p,
                        uploads: S,
                        channel: I,
                        restrictMentions: A,
                        respectCooldown: h,
                        userCanUsePremiumMessageLength: g,
                        resolve: C
                    } = e;
                    if (0 === _.length && !(null === (t = T.submit) || void 0 === t ? void 0 : t.allowEmptyMessage) && (null == p || 0 === p.length) && (null == S || 0 === S.length)) {
                        C({
                            valid: !1,
                            failureReason: m.MessageRestrictionTypes.EMPTY_MESSAGE
                        });
                        return
                    }
                    let N = g ? m.MAX_MESSAGE_LENGTH_PREMIUM : m.MAX_MESSAGE_LENGTH;
                    if (_.length > N) {
                        if (g || null == I) {
                            ;
                            l = _.length, u = N, (0, a.openModal)(e => (0, n.jsx)(i.default, {
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
                        } else s.default.dispatch({
                            type: "MESSAGE_LENGTH_UPSELL",
                            channel: I,
                            content: _
                        });
                        C({
                            valid: !1,
                            failureReason: m.MessageRestrictionTypes.MESSAGE_TOO_LONG
                        });
                        return
                    }
                    if (null != I) {
                        if (null != I.getGuildId() && h && r.default.getSlowmodeCooldownGuess(I.id) > 0) {
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
                                let n = e(_, I, A);
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
                    if (o.default.isFull()) {
                        (0, a.openModal)(e => (0, n.jsx)(i.default, {
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
                    content: T,
                    stickers: _,
                    uploads: p,
                    channel: S,
                    restrictMentions: I,
                    respectCooldown: A,
                    userCanUsePremiumMessageLength: h,
                    resolve: e
                }))
            }
        }
    }
]);
//# sourceMappingURL=af6898f5f2af036d7580.js.map