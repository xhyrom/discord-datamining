(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["4453"], {
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
                    return F
                },
                default: function() {
                    return B
                }
            }), l("222007"), l("70102");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("627445"),
                o = l.n(r),
                u = l("748820"),
                d = l("974667"),
                c = l("509043"),
                f = l("446674"),
                m = l("669491"),
                p = l("77078"),
                h = l("272030"),
                E = l("851387"),
                T = l("737960"),
                S = l("206230"),
                _ = l("339023"),
                g = l("405645"),
                A = l("592407"),
                I = l("26989"),
                v = l("957255"),
                N = l("697218"),
                C = l("145131"),
                y = l("476765"),
                M = l("945330"),
                x = l("907566"),
                O = l("151185"),
                R = l("483093"),
                L = l("991170"),
                P = l("487311"),
                j = l("49111"),
                b = l("782340"),
                D = l("618600");
            let U = () => Promise.resolve();

            function w(e) {
                let {
                    userRoles: t,
                    position: l,
                    ...a
                } = e, s = (0, y.useUID)();
                return (0, n.jsxs)(p.Dialog, {
                    className: i(D.overflowRolesPopout, {
                        [D.popoutBottom]: "bottom" === l,
                        [D.popoutTop]: "top" === l
                    }),
                    "aria-labelledby": s,
                    children: [(0, n.jsx)("div", {
                        className: D.overflowRolesPopoutArrowWrapper,
                        children: (0, n.jsx)("div", {
                            className: D.overflowRolesPopoutArrow
                        })
                    }), (0, n.jsxs)(C.default, {
                        className: D.overflowRolesPopoutHeader,
                        align: C.default.Align.CENTER,
                        children: [(0, n.jsx)(x.default, {
                            color: m.default.unsafe_rawColors.PRIMARY_400.css,
                            className: D.overflowRolesPopoutHeaderIcon
                        }), (0, n.jsx)("div", {
                            className: D.overflowRolesPopoutHeaderText,
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
            let F = a.forwardRef(function(e, t) {
                var s, r, o;
                let u;
                let {
                    canRemove: E,
                    className: T,
                    role: A,
                    onRemove: I,
                    guildId: v,
                    disableBorderColor: N,
                    onMouseDown: C
                } = e, {
                    tabIndex: y,
                    ...x
                } = (0, d.useListItem)(A.id), O = (0, g.useRoleIcon)({
                    roleId: A.id,
                    size: 16,
                    guildId: v
                }), L = (0, f.useStateFromStores)([S.default], () => S.default.roleStyle), P = (null === (s = A.tags) || void 0 === s ? void 0 : s.guild_connections) === null, j = a.useCallback(e => {
                    (0, h.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("443070").then(l.bind(l, "443070"));
                        return t => (0, n.jsx)(e, {
                            ...t,
                            id: A.id,
                            label: b.default.Messages.COPY_ID_ROLE
                        })
                    })
                }, [A.id]), U = (0, p.useToken)(m.default.unsafe_rawColors.PRIMARY_300).hsl(), w = null !== (r = A.colorString) && void 0 !== r ? r : U, F = null !== (o = (0, c.hex2rgb)(w, .6)) && void 0 !== o ? o : void 0, G = m.default.unsafe_rawColors.WHITE_500.css, Y = (0, c.hex2int)(w);
                null != Y && .3 > (0, c.getDarkness)(Y) && (G = m.default.unsafe_rawColors.PRIMARY_630.css), u = P ? (0, n.jsx)(_.default, {
                    className: D.roleFlowerStar,
                    iconClassName: E ? D.roleVerifiedIcon : void 0,
                    color: w,
                    size: 14
                }) : "dot" === L ? (0, n.jsx)(p.RoleDot, {
                    className: D.roleDot,
                    color: w,
                    background: !1,
                    tooltip: !1
                }) : (0, n.jsx)(p.RoleCircle, {
                    color: w
                });
                let k = a.useMemo(() => {
                    var t;
                    return {
                        borderColor: N ? void 0 : F,
                        ...null !== (t = e.style) && void 0 !== t ? t : {}
                    }
                }, [F, N, e.style]);
                return (0, n.jsx)(p.FocusRing, {
                    children: (0, n.jsxs)("div", {
                        ref: t,
                        className: i(D.role, T),
                        style: k,
                        onContextMenu: j,
                        onMouseDown: C,
                        "aria-label": A.name,
                        tabIndex: y,
                        ...x,
                        children: [(0, n.jsxs)(p.Clickable, {
                            className: D.roleRemoveButton,
                            onClick: E ? I : void 0,
                            tabIndex: E ? y : -1,
                            focusProps: {
                                focusClassName: D.roleRemoveIconFocused
                            },
                            "aria-hidden": !E,
                            "aria-label": b.default.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
                                roleName: A.name
                            }),
                            children: [u, E ? (0, n.jsx)(M.default, {
                                color: G,
                                className: D.roleRemoveIcon,
                                "aria-hidden": !0
                            }) : null]
                        }), null != O ? (0, n.jsx)(R.default, {
                            className: D.roleIcon,
                            ...O,
                            enableTooltip: !1
                        }) : null, (0, n.jsx)("div", {
                            "aria-hidden": !0,
                            className: D.roleName,
                            children: (0, n.jsx)(p.Text, {
                                variant: "text-xs/medium",
                                className: D.roleNameOverflow,
                                children: A.name
                            })
                        })]
                    })
                })
            });

            function G(e) {
                let {
                    user: t,
                    numRolesHidden: l,
                    roleClassName: a
                } = e, s = (0, d.useListItem)("overflow-more-roles-".concat(t.id));
                return (0, n.jsx)(p.Popout, {
                    renderPopout: t => {
                        let {
                            position: l
                        } = t;
                        return (0, n.jsx)(w, {
                            ...e,
                            position: null != l ? l : "top"
                        })
                    },
                    position: "top",
                    align: "center",
                    children: e => (0, n.jsx)(p.FocusRing, {
                        children: (0, n.jsx)("button", {
                            ...e,
                            className: i(D.overflowButton, a),
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
                } = e, r = (0, d.useListItem)("overflow-add-roles-".concat(l.id)), o = (0, f.useStateFromStores)([S.default], () => S.default.roleStyle), u = v.default.getHighestRole(t), c = I.default.getMember(t.id, l.id), m = e => e.id !== t.id && !e.managed && v.default.isRoleHigher(t, u, e) && (null == c || -1 === c.roles.indexOf(e.id));
                return (0, n.jsx)(p.Popout, {
                    renderPopout: e => {
                        let {
                            closePopout: l
                        } = e;
                        return (0, n.jsx)(P.default, {
                            guild: t,
                            roleStyle: o,
                            roleFilter: m,
                            onSelect: a,
                            onClose: l
                        })
                    },
                    position: "bottom",
                    align: "center",
                    children: e => (0, n.jsx)(p.FocusRing, {
                        children: (0, n.jsx)("button", {
                            ...e,
                            className: i(D.addButton, s),
                            "aria-label": b.default.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
                            type: "button",
                            ...r,
                            children: (0, n.jsx)(O.default, {
                                className: D.addButtonIcon,
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
                    userRoles: r,
                    wrap: c = !0,
                    width: f,
                    className: m,
                    readOnly: p,
                    roleClassName: h,
                    disableBorderColor: T
                } = e, S = a.useRef({}), _ = a.useCallback(e => {
                    var t;
                    let n = r.filter(t => t !== e.id);
                    (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? E.default.unassignGuildRoleConnection(s.id, e.id) : A.default.updateMemberRoles(s.id, l.id, n, [], [e.id])
                }, [r, s.id, l.id]), g = a.useCallback(e => {
                    let t = r; - 1 === t.indexOf(e) && (t = t.concat([e])), A.default.updateMemberRoles(s.id, l.id, t, [e], [])
                }, [r, s.id, l.id]), [I, C] = a.useState(null), y = a.useMemo(() => {
                    let e = Object.values(s.roles).filter(e => r.includes(e.id)).sort((e, t) => {
                        var l, n;
                        let a = (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) !== null,
                            s = (null === (n = t.tags) || void 0 === n ? void 0 : n.guild_connections) !== null;
                        return a && !s ? 1 : !a && s ? -1 : 0
                    });
                    return null != I ? e.slice(0, I) : e
                }, [s.roles, I, r]), M = r.length - y.length;
                a.useLayoutEffect(() => {
                    if (c) return;
                    if ("number" != typeof f) throw Error("Unexpected null width");
                    let e = 0,
                        t = 0,
                        l = f - 30 - 4;
                    for (let n = 0; n < y.length; n++) {
                        let a = y[n],
                            s = S.current[a.id];
                        if (null == s) continue;
                        let i = s.offsetWidth;
                        if ((t += i + 4) > l) break;
                        e++
                    }
                    C(t => e < y.length ? e : t)
                }, [c, f, y]);
                let x = N.default.getCurrentUser();
                o(null != x, "MemberRolesList: currentUser cannot be undefined");
                let O = !p && v.default.can(j.Permissions.MANAGE_ROLES, s),
                    R = L.default.getHighestRole(s, x.id),
                    P = a.useMemo(() => "roles-".concat((0, u.v4)()), []),
                    w = (0, d.default)({
                        id: P,
                        isEnabled: !0,
                        scrollToStart: U,
                        scrollToEnd: U,
                        wrap: !0
                    }),
                    k = y.map(e => {
                        var t;
                        return (0, n.jsx)(F, {
                            className: h,
                            role: e,
                            canRemove: O && L.default.isRoleHigher(s, x.id, R, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && l.id === x.id,
                            onRemove: () => _(e),
                            ref: t => {
                                var l, n;
                                return l = e.id, void(null != (n = t) ? S.current[l] = n : delete S.current[l])
                            },
                            guildId: s.id,
                            disableBorderColor: T
                        }, e.id)
                    });
                return null != I && 0 !== M ? t = (0, n.jsx)(G, {
                    ...e,
                    numRolesHidden: M
                }) : O && (t = (0, n.jsx)(Y, {
                    ...e,
                    handleAddRole: g
                })), (0, n.jsx)(d.ListNavigatorProvider, {
                    navigator: w,
                    children: (0, n.jsx)(d.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: l,
                                ...a
                            } = e;
                            return (0, n.jsxs)("div", {
                                className: i(D.root, m),
                                "aria-label": b.default.Messages.ROLES_LIST.format({
                                    numRoles: r.length
                                }),
                                ref: l,
                                ...a,
                                children: [k, t]
                            })
                        }
                    })
                })
            }
            let V = (0, T.default)(k);

            function B(e) {
                return (0, f.useStateFromStores)([v.default], () => {
                    var t;
                    return v.default.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
                }), !1 === e.wrap ? (0, n.jsx)(V, {
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
                a = l("884691"),
                s = l("77078"),
                i = l("390236"),
                r = a.memo(function(e) {
                    var t, l, r, o;
                    let {
                        user: u,
                        size: d = s.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": f = !1,
                        ...m
                    } = e, p = a.useContext(i.default);
                    return (0, n.jsx)(s.Avatar, {
                        src: (t = u, l = (0, s.getAvatarSize)(d), r = c, o = p, t.getAvatarURL(o, l, r)),
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
                    return E
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("817736"),
                i = l.n(s),
                r = l("446674"),
                o = l("77078"),
                u = l("890674"),
                d = l("349649"),
                c = l("102985"),
                f = l("49111"),
                m = l("782340"),
                p = l("98325");
            class h extends a.PureComponent {
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
                        children: (0, n.jsx)(o.TextAreaAutosize, {
                            ref: this.noteRef,
                            className: p.textarea,
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

            function E(e) {
                let t = (0, r.useStateFromStores)([c.default], () => c.default.hidePersonalInformation),
                    l = (0, d.default)(e.userId);
                return (0, n.jsx)(h, {
                    ...e,
                    ...l,
                    hideNote: t
                })
            }
            h.defaultProps = {
                autoFocus: !1
            }
        },
        36341: function(e, t, l) {
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
                r = l("627445"),
                o = l.n(r),
                u = l("446674"),
                d = l("77078"),
                c = l("450911"),
                f = l("54239"),
                m = l("819689"),
                p = l("850391"),
                h = l("884351"),
                E = l("42203"),
                T = l("27618"),
                S = l("158998"),
                _ = l("718422"),
                g = l("49111"),
                A = l("782340"),
                I = l("22531");

            function v(e) {
                let {
                    user: t,
                    autoFocus: l = !1,
                    onClose: s,
                    className: r,
                    inputClassName: v
                } = e, N = a.useRef(null), C = (0, u.useStateFromStores)([T.default], () => T.default.isBlocked(t.id)), y = a.useCallback(e => {
                    if ("Enter" === e.key) {
                        e.preventDefault(), o(null != N.current, "Keypress on Input when not mounted");
                        let l = N.current.value.trim();
                        return (0, _.applyChatRestrictions)({
                            type: p.ChatInputTypes.NORMAL,
                            content: l,
                            channel: null
                        }).then(e => {
                            let {
                                valid: n
                            } = e;
                            n && (c.default.openPrivateChannel(t.id, !1, !1, "Quick Message Input").then(e => {
                                let t = E.default.getChannel(e);
                                o(null != t, "Newly created PrivateChannel is null"), m.default.sendMessage(t.id, h.default.parse(t, l)), (0, f.popLayer)()
                            }), null == s || s())
                        }), !0
                    }
                    e.which === g.KeyboardKeys.SPACE && e.stopPropagation()
                }, [s, t]), M = C ? A.default.Messages.QUICK_DM_BLOCKED : A.default.Messages.QUICK_DM_USER.format({
                    name: S.default.getName(t)
                });
                return (0, n.jsx)(d.TextInput, {
                    className: r,
                    inputClassName: i(v, I.input),
                    inputRef: N,
                    autoFocus: l,
                    placeholder: M,
                    "aria-label": M,
                    onKeyPress: y,
                    disabled: C
                })
            }
        },
        463848: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                UserActivityTypes: function() {
                    return N
                },
                default: function() {
                    return C
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("446674"),
                i = l("77078"),
                r = l("871388"),
                o = l("152311"),
                u = l("632710"),
                d = l("299285"),
                c = l("699209"),
                f = l("769791"),
                m = l("373469"),
                p = l("42203"),
                h = l("305961"),
                E = l("957255"),
                T = l("800762"),
                S = l("313873"),
                _ = l("599110"),
                g = l("474293"),
                A = l("49111"),
                I = l("804354");

            function v(e) {
                let {
                    type: t,
                    source: l,
                    activity: a,
                    applicationStream: s,
                    user: r,
                    guildId: d,
                    channelId: c,
                    onAction: f,
                    isEmbedded: m = (0, o.default)(a),
                    actionColor: p
                } = e;
                return (0, n.jsx)(u.default, {
                    className: (0, g.getClass)(I, "actions", t),
                    type: t,
                    source: l,
                    activity: a,
                    applicationStream: s,
                    user: r,
                    guildId: d,
                    look: i.Button.Looks.FILLED,
                    color: null != p ? p : i.Button.Colors.PRIMARY,
                    channelId: c,
                    onAction: f,
                    isEmbedded: m
                })
            }
            let N = S.default.Types;
            var C = function(e) {
                let {
                    activity: t,
                    user: l,
                    useStoreStream: i = !0,
                    showActions: o = !0,
                    hideHeader: u = !1,
                    ...g
                } = e, I = (0, s.useStateFromStores)([T.default, p.default], () => {
                    var e;
                    return p.default.getChannel(null === (e = T.default.getVoiceStateForUser(l.id)) || void 0 === e ? void 0 : e.channelId)
                }), {
                    enableHangStatus: N
                } = c.HangStatusExperiment.useExperiment({
                    guildId: null == I ? void 0 : I.guild_id,
                    location: "UserActivityContainer"
                }), C = (0, s.useStateFromStores)([m.default], () => i ? m.default.getAnyStreamForUser(l.id) : null), y = N && E.default.can(A.Permissions.CONNECT, I), M = (null == t ? void 0 : t.type) === A.ActivityTypes.HANG_STATUS && y ? I : null, x = (0, s.useStateFromStores)([h.default, T.default, p.default], () => {
                    var e, n;
                    return (0, r.default)(t, A.ActivityFlags.EMBEDDED) ? h.default.getGuild(null === (e = p.default.getChannel(null === (n = T.default.getVoiceStateForSession(l.id, null == t ? void 0 : t.session_id)) || void 0 === n ? void 0 : n.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != M ? h.default.getGuild(M.getGuildId()) : null
                }), O = (0, s.useStateFromStores)([h.default], () => null != C ? h.default.getGuild(C.guildId) : null), R = (0, s.useStateFromStores)([d.default], () => {
                    if (null != t) return null != t.application_id ? d.default.getApplication(t.application_id) : d.default.getApplicationByName(t.name);
                    return null
                });
                return (a.useEffect(() => {
                    (null == t ? void 0 : t.type) === A.ActivityTypes.HANG_STATUS && y && _.default.track(A.AnalyticEvents.VIEW_HANG_STATUS, {
                        source: "UserProfilePopout",
                        guild_id: null == M ? void 0 : M.guild_id,
                        channel_id: null == M ? void 0 : M.id
                    })
                }, [null == t ? void 0 : t.type, y, M]), (null == t ? void 0 : t.type) !== A.ActivityTypes.HANG_STATUS || y) ? (0, n.jsx)(S.default, {
                    ...g,
                    activity: t,
                    user: l,
                    application: R,
                    hideHeader: u,
                    activityGuild: null != x ? x : O,
                    renderActions: o ? () => (0, n.jsx)(v, {
                        ...g,
                        applicationStream: C,
                        activity: t,
                        user: l
                    }) : null,
                    onOpenSpotifyTrack: f.openTrack,
                    onOpenSpotifyArtist: f.openArtist,
                    onOpenSpotifyAlbum: f.openAlbum
                }) : null
            }
        },
        487311: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            }), l("222007");
            var n = l("37983");
            l("884691");
            var a = l("448105"),
                s = l.n(a),
                i = l("917351"),
                r = l.n(i),
                o = l("509043"),
                u = l("77078"),
                d = l("49111"),
                c = l("782340"),
                f = l("558062"),
                m = function(e) {
                    let {
                        className: t,
                        guild: l,
                        roleStyle: a,
                        roleFilter: i,
                        onSelect: m,
                        onClose: p
                    } = e, h = e => r(l.roles).filter(i).filter(t => s(e.toLowerCase(), t.name.toLowerCase())).value();
                    return (0, n.jsx)(u.ComboboxPopout, {
                        className: t,
                        value: new Set,
                        onChange: m,
                        placeholder: c.default.Messages.ADD_ROLE_PLACEHOLDER,
                        "aria-label": c.default.Messages.ADD_ROLE_A11Y_LABEL,
                        onClose: p,
                        children: e => h(e).map(e => {
                            var t, l;
                            return (0, n.jsxs)(u.ComboboxItem, {
                                value: e.id,
                                children: ["dot" === a ? (0, n.jsx)(u.RoleDot, {
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
                            }, e.id)
                        })
                    })
                }
        },
        512330: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                TimeUnits: function() {
                    return a
                },
                getTimeAndUnit: function() {
                    return g
                },
                default: function() {
                    return A
                }
            }), l("70102"), l("700225"), l("222007");
            var n, a, s, i, r, o, u = l("37983"),
                d = l("884691"),
                c = l("917351"),
                f = l.n(c),
                m = l("862337"),
                p = l("782340");
            (i = n || (n = {})).ACTIVITY_FEED = "ACTIVITY_FEED", i.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW", i.USER_ACTIVITY = "USER_ACTIVITY", i.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED", i.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED", (r = a || (a = {})).NONE = "NONE", r.SECONDS = "SECONDS", r.MINUTES = "MINUTES", r.HOURS = "HOURS", r.DAYS = "DAYS", r.WEEKS = "WEEKS", r.MONTHS = "MONTHS", r.YEARS = "YEARS", (o = s || (s = {})).START = "START", o.END = "END", o.TIME = "TIME";
            let h = {
                    NONE: e => 0,
                    SECONDS: e => 60 * e,
                    MINUTES: e => e,
                    HOURS: e => e / 60,
                    DAYS: e => e / 60 / 24,
                    WEEKS: e => e / 60 / 24 / 7,
                    MONTHS: e => e / 60 / 24 / 31,
                    YEARS: e => e / 60 / 24 / 365
                },
                E = [{
                    unit: "NONE",
                    max: 0
                }, {
                    unit: "SECONDS",
                    max: 1
                }, {
                    unit: "MINUTES",
                    max: 60
                }, {
                    unit: "HOURS",
                    max: 1440
                }, {
                    unit: "DAYS",
                    max: 44640
                }, {
                    unit: "WEEKS",
                    max: 40320
                }, {
                    unit: "MONTHS",
                    max: 525600
                }, {
                    unit: "YEARS",
                    max: 1 / 0
                }],
                T = e => (t, l) => null == l ? "" : e().format({
                    time: t,
                    ...l
                }),
                S = {
                    ACTIVITY_FEED: {
                        START: {
                            SECONDS: () => p.default.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                            MINUTES: e => p.default.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({
                                time: e
                            }),
                            HOURS: e => p.default.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({
                                time: e
                            }),
                            DAYS: e => p.default.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({
                                time: e
                            })
                        },
                        END: {
                            SECONDS: () => p.default.Messages.GAME_FEED_USER_PLAYING_JUST_ENDED,
                            MINUTES: e => p.default.Messages.GAME_FEED_USER_PLAYED_MINUTES_AGO.format({
                                time: e
                            }),
                            HOURS: e => p.default.Messages.GAME_FEED_USER_PLAYED_HOURS_AGO.format({
                                time: e
                            }),
                            DAYS: e => p.default.Messages.GAME_FEED_USER_PLAYED_DAYS_AGO.format({
                                time: e
                            }),
                            WEEKS: e => p.default.Messages.GAME_FEED_USER_PLAYED_WEEKS_AGO.format({
                                time: e
                            }),
                            MONTHS: e => p.default.Messages.GAME_FEED_USER_PLAYED_MONTHS_AGO.format({
                                time: e
                            }),
                            YEARS: e => p.default.Messages.GAME_FEED_USER_PLAYED_YEARS_AGO.format({
                                time: e
                            })
                        }
                    },
                    ACTIVITY_FEED_NEW: {
                        START: {
                            SECONDS: T(() => p.default.Messages.ACTIVITY_FEED_USER_PLAYING_JUST_STARTED),
                            MINUTES: T(() => p.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_MINUTES),
                            HOURS: T(() => p.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_HOURS),
                            DAYS: T(() => p.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_DAYS)
                        },
                        END: {
                            SECONDS: e => p.default.Messages.DURATION_SECONDS_AGO.format({
                                seconds: e
                            }),
                            MINUTES: e => p.default.Messages.DURATION_MINUTES_AGO.format({
                                minutes: e
                            }),
                            HOURS: e => p.default.Messages.DURATION_HOURS_AGO.format({
                                hours: e
                            }),
                            DAYS: e => p.default.Messages.DURATION_DAYS_AGO.format({
                                days: e
                            })
                        }
                    },
                    USER_ACTIVITY: {
                        START: {
                            SECONDS: () => p.default.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                            MINUTES: function(e, t) {
                                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return l ? p.default.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({
                                    time: e
                                }) : p.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_MINUTES.format({
                                    time: e
                                })
                            },
                            HOURS: function(e, t) {
                                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return l ? p.default.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({
                                    time: e
                                }) : p.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_HOURS.format({
                                    time: e
                                })
                            },
                            DAYS: function(e, t) {
                                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return l ? p.default.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({
                                    time: e
                                }) : p.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_DAYS.format({
                                    time: e
                                })
                            }
                        }
                    },
                    GAME_LIBRARY_TIME_PLAYED: {
                        TIME: {
                            NONE: () => p.default.Messages.GAME_LIBRARY_TIME_PLAYED_NONE,
                            SECONDS: e => p.default.Messages.GAME_LIBRARY_TIME_PLAYED_SECONDS.format({
                                time: e
                            }),
                            MINUTES: e => p.default.Messages.GAME_LIBRARY_TIME_PLAYED_MINUTES.format({
                                time: e
                            }),
                            HOURS: e => p.default.Messages.GAME_LIBRARY_TIME_PLAYED_HOURS.format({
                                time: e
                            })
                        }
                    },
                    GAME_LIBRARY_LAST_PLAYED: {
                        END: {
                            NONE: () => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_NONE,
                            SECONDS: () => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_JUST_NOW,
                            MINUTES: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_MINUTES.format({
                                time: e
                            }),
                            HOURS: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_HOURS.format({
                                time: e
                            }),
                            DAYS: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_DAYS.format({
                                time: e
                            }),
                            WEEKS: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_WEEKS.format({
                                time: e
                            }),
                            MONTHS: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_MONTHS.format({
                                time: e
                            }),
                            YEARS: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_YEARS.format({
                                time: e
                            })
                        }
                    }
                };

            function _(e, t) {
                let l = E.findIndex(t => {
                        let {
                            max: l,
                            unit: n
                        } = t;
                        return "NONE" === n && e === l || e < l
                    }),
                    n = f.findLast(E, e => {
                        let {
                            unit: l
                        } = e;
                        return t(l)
                    }, l);
                if (null != n) return n.unit;
                let a = E.find(e => {
                    let {
                        unit: l
                    } = e;
                    return t(l)
                });
                return null != a ? a.unit : null
            }

            function g(e, t) {
                let l = null != e ? _(e, e => t.includes(e)) : "NONE",
                    n = null != l ? h[l] : null;
                return {
                    unit: l,
                    time: null != e && null != n ? Math.floor(n(e)) : null
                }
            }

            function A(e) {
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
                        let n = _(e, e => (function(e, t, l) {
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
                        if (null != e) return "START";
                        if (null != t) return "END";
                        if (null != l) return "TIME";
                        return null
                    }
                    transformTime(e, t) {
                        return h[e](t)
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
                        let r = this.getTimeUnit(s, t, i),
                            o = S[t][i];
                        if (null == o) return null;
                        let d = o[r],
                            c = Math.floor(this.transformTime(r, s));
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
                }).Locations = n, t.Types = s, t
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
                a = l("884691"),
                s = l("862337"),
                i = l("782340");

            function r(e) {
                return "".concat(e).length < 13 ? 1e3 * e : e
            }

            function o(e) {
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
                            hours: a,
                            minutes: s,
                            seconds: r
                        } = this.state, o = {
                            hours: this.renderTime(a, !0),
                            minutes: this.renderTime(s),
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
                        super(e), this._interval = new s.Interval, this.state = {
                            ...this.getUpdatedTime()
                        }
                    }
                }
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
            var a = l("669491"),
                s = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M22.52 13.17c-.2.41-.87.35-1.15 0a3.02 3.02 0 0 0-.45-.48.47.47 0 0 1-.13-.54c.04-.1.04-.2-.01-.31-.4-.9-1.18-2.4-2.4-3.76C16.89 6.38 14.82 5 12 5 9.2 5 7.13 6.38 5.61 8.08a15.05 15.05 0 0 0-2.37 3.72.48.48 0 0 0 0 .4c.4.9 1.18 2.37 2.37 3.72a8.46 8.46 0 0 0 5.89 3.07c.28.01.5.24.54.5.05.31.15.6.29.87.13.27-.03.64-.33.64-7.11 0-10.27-7.11-10.89-8.7a.83.83 0 0 1 0-.6C1.73 10.1 4.9 3 12 3c7.11 0 10.27 7.11 10.89 8.7.07.2.07.4 0 .6-.08.21-.2.5-.37.87Z",
                        className: r
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M15.56 11.77c.2-.1.44.02.44.23a4 4 0 1 1-4-4c.21 0 .33.25.23.44a2.5 2.5 0 0 0 3.32 3.32ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
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
            var a = l("669491"),
                s = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M3 1a1 1 0 0 1 1 1v.82l8.67-1.45A2 2 0 0 1 15 3.35v1.47l5.67-.95A2 2 0 0 1 23 5.85v7.3a2 2 0 0 1-1.67 1.98l-9 1.5a2 2 0 0 1-1.78-.6c-.2-.21-.08-.54.18-.68a5.01 5.01 0 0 0 1.94-1.94c.18-.32-.1-.66-.46-.6L4 14.18V21a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z",
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
            var a = l("669491"),
                s = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M6.6 10.02 14 11.4a.6.6 0 0 1 0 1.18L6.6 14l-2.94 5.87a1.48 1.48 0 0 0 1.99 1.98l17.03-8.52a1.48 1.48 0 0 0 0-2.64L5.65 2.16a1.48 1.48 0 0 0-1.99 1.98l2.94 5.88Z",
                        className: r
                    })
                })
            }
        },
        472861: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ShopSparkleIcon: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                s = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        d: "M20.14.8a1.21 1.21 0 0 0-2.28 0l-.5 1.37a2 2 0 0 1-1.19 1.18l-1.38.51a1.21 1.21 0 0 0 0 2.28l1.38.5a2 2 0 0 1 1.18 1.19l.51 1.38a1.2 1.2 0 0 0 1.15.79l.17-.01c.4-.06.79-.32.96-.78l.5-1.38a2 2 0 0 1 1.19-1.18l1.38-.51a1.21 1.21 0 0 0 0-2.28l-1.38-.5a2 2 0 0 1-1.18-1.19L20.14.79ZM20.98 11.84c0-.2-.24-.33-.42-.22-1.79 1.01-3.6-.17-4.87-1.55a.28.28 0 0 0-.4 0 4.49 4.49 0 0 1-6.58 0 .28.28 0 0 0-.4 0 4.45 4.45 0 0 1-4.94 1.11c-.17-.07-.37.06-.37.24V19a3 3 0 0 0 3 3h2.75c.14 0 .25-.11.25-.25V16c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5.75c0 .14.11.25.25.25H18a3 3 0 0 0 3-3l-.02-7.16Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, n.jsx)("path", {
                        d: "M12.98 2c.22 0 .32.4.15.54a3.22 3.22 0 0 0 .97 5.47l.12.05c.28.1.4.42.24.65A3 3 0 0 1 9 7V3a1 1 0 0 1 1-1h2.98ZM2.63 4.19A3 3 0 0 1 5.53 2H7a1 1 0 0 1 1 1v4.03A2.95 2.95 0 0 1 5.03 10h-.05c-2 0-3.44-1.9-2.9-3.83l.55-1.98Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })]
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
            var a = l("669491"),
                s = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.81 7c-.54 0-1 .26-1.23.61A1 1 0 0 1 8.92 8.5 3.49 3.49 0 0 1 11.82 7c1.81 0 3.43 1.38 3.43 3.25 0 1.45-.98 2.61-2.27 3.06a1 1 0 0 1-1.96.37l-.19-1a1 1 0 0 1 .98-1.18c.87 0 1.44-.63 1.44-1.25S12.68 9 11.81 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
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
            var a = l("669491"),
                s = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h5.73c.37 0 .61-.38.5-.73a7 7 0 0 1 3.65-8.61c.4-.2.46-.78.05-.95a9.5 9.5 0 0 0-3.61-.71h-.94Z",
                        className: r
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-2.77-.2-3.33-2.5a.25.25 0 0 0-.4.2v5c0 .2.24.32.4.2l3.33-2.5c.14-.1.14-.3 0-.4Z",
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
            var a = l("669491"),
                s = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M15 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4.41l-4.3 4.3a1 1 0 1 1-1.4-1.42L19.58 3H16a1 1 0 0 1-1-1Z",
                        className: r
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 1 0-2 0v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5Z",
                        className: r
                    })]
                })
            }
        },
        126808: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("233069"),
                a = l("42203"),
                s = l("800762");

            function i(e) {
                var t;
                let {
                    channelId: l,
                    userId: i,
                    activity: r
                } = e, o = a.default.getChannel(l), u = (null == r ? void 0 : r.session_id) == null || null != o && (0, n.isTextChannel)(o.type) ? l : null === (t = s.default.getVoiceStateForSession(i, null == r ? void 0 : r.session_id)) || void 0 === t ? void 0 : t.channelId;
                return null != u ? u : void 0
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
                    return r
                }
            });
            var n = l("376556"),
                a = l("575365"),
                s = l("49111"),
                i = l("782340");

            function r(e) {
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
        632710: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return b
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("627445"),
                r = l.n(i),
                o = l("118810"),
                u = l("446674"),
                d = l("77078"),
                c = l("86621"),
                f = l("376556"),
                m = l("118033"),
                p = l("42203"),
                h = l("697218"),
                E = l("800762"),
                T = l("145131"),
                S = l("313873"),
                _ = l("429928"),
                g = l("36539"),
                A = l("698372"),
                I = l("770370"),
                v = l("667618"),
                N = l("865677"),
                C = l("15874"),
                y = l("774713"),
                M = l("510788"),
                x = l("756731"),
                O = l("762806"),
                R = l("438278"),
                L = l("898481"),
                P = l("49111"),
                j = l("278433"),
                b = (0, c.default)(e => {
                    let t, {
                            activity: l,
                            user: a,
                            applicationStream: i,
                            className: c,
                            guildId: b,
                            channelId: D,
                            source: U,
                            color: w = d.Button.Colors.WHITE,
                            look: F = d.Button.Looks.OUTLINED,
                            type: G,
                            onAction: Y,
                            isEmbedded: k = !1
                        } = e,
                        V = (0, A.default)(),
                        B = (0, u.useStateFromStores)([h.default], () => {
                            let e = h.default.getCurrentUser();
                            return r(null != e, "UserActivityActions: currentUser cannot be undefined"), e
                        }),
                        H = G === S.Types.PROFILE || G === S.Types.PROFILE_V2,
                        W = G === S.Types.STREAM_PREVIEW || null != i,
                        z = (0, _.default)(l),
                        K = (0, m.isStageActivity)(l),
                        Z = H ? T.default.Align.END : T.default.Align.STRETCH,
                        X = z || W ? T.default.Direction.HORIZONTAL : T.default.Direction.VERTICAL,
                        J = (null == l ? void 0 : l.type) === P.ActivityTypes.HANG_STATUS,
                        Q = (0, u.useStateFromStores)([E.default, p.default], () => {
                            var e;
                            return J ? p.default.getChannel(null === (e = E.default.getVoiceStateForUser(a.id)) || void 0 === e ? void 0 : e.channelId) : null
                        });
                    if ((0, g.default)(l)) t = [(0, n.jsx)(I.default, {
                        look: F,
                        color: w,
                        platform: f.default.get(P.PlatformTypes.XBOX)
                    }, "ConnectPlatformActivityButton")];
                    else if ((null == l ? void 0 : l.platform) != null && [P.ActivityGamePlatforms.PS4, P.ActivityGamePlatforms.PS5].includes(l.platform)) t = [(0, n.jsx)(I.default, {
                        look: F,
                        color: w,
                        platform: f.default.get(P.PlatformTypes.PLAYSTATION)
                    }, "ConnectPlatformActivityButton")];
                    else if (z) {
                        let e = (0, n.jsx)(O.default, {
                                activity: l,
                                user: a,
                                color: w,
                                look: F,
                                guildId: b,
                                channelId: D,
                                source: U
                            }, "spotify-activity-sync-button"),
                            s = (0, n.jsx)(x.default, {
                                activity: l,
                                user: a,
                                color: w,
                                look: F,
                                guildId: b,
                                channelId: D,
                                source: U
                            }, "spotify-activity-play-button");
                        t = [s, e]
                    } else if (K) {
                        let e = (0, m.unpackStageChannelParty)(l);
                        null != e && (t = [(0, n.jsx)(y.default, {
                            guildId: e.guildId,
                            channelId: e.channelId,
                            color: w,
                            look: F,
                            isProfile: H
                        }, e.channelId)])
                    } else if (W) {
                        let e = (0, n.jsx)(L.default, {
                            isCurrentUser: B.id === a.id,
                            color: w,
                            look: F,
                            applicationStream: i
                        }, "watch-button");
                        t = [e]
                    } else if (J && null != Q) {
                        let e = (0, n.jsx)(C.default, {
                            color: w,
                            look: F,
                            hangStatusChannel: Q
                        }, "hang-status-button");
                        t = [e]
                    } else {
                        let e = (0, n.jsx)(R.default, {
                                activity: l,
                                color: w,
                                look: F
                            }, "watch-button"),
                            s = (0, n.jsx)(N.default, {
                                activity: l,
                                currentEmbeddedApplication: V,
                                user: a,
                                isCurrentUser: B.id === a.id,
                                color: w,
                                look: F,
                                channelId: D,
                                isEmbedded: k
                            }, "join-activity-button"),
                            i = (0, n.jsx)(M.default, {
                                activity: l,
                                user: a,
                                color: w,
                                look: F
                            }, "notify-button"),
                            r = (0, n.jsx)(v.default, {
                                user: a,
                                color: w,
                                look: F,
                                activity: l
                            }, "custom-activity-button");
                        if (null == s && null == i && null == e && null == r) return null;
                        t = [s, i, e, r]
                    }
                    let q = X === T.default.Direction.VERTICAL;
                    return (0, n.jsx)(T.default, {
                        grow: 0,
                        align: Z,
                        direction: X,
                        wrap: q ? T.default.Wrap.WRAP : T.default.Wrap.NO_WRAP,
                        className: s(c, j.buttonsWrapper, q ? j.vertical : j.horizontal),
                        onClick: function(e) {
                            (0, o.isElement)(e.target) && "BUTTON" === e.target.nodeName && (null == Y || Y())
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
            var a = l("414456"),
                s = l.n(a),
                i = l("77078"),
                r = l("808480");

            function o(e) {
                let {
                    className: t,
                    size: l,
                    ...a
                } = e;
                return (0, n.jsx)(i.Button, {
                    className: s(r.button, t),
                    size: s(r.buttonSize, l),
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
                r = l("295999"),
                o = l("782340"),
                u = l("52638");

            function d(e) {
                let {
                    color: t,
                    look: l,
                    platform: d
                } = e, c = (0, a.useStateFromStores)([i.default], () => i.default.getAccounts().some(e => e.type === d.type));
                return c ? null : (0, n.jsx)(r.default, {
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
            var a = l("968194"),
                s = l("128259"),
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
                        let n = await (0, a.getMetadata)(e, t);
                        if (null == n || !Array.isArray(n.button_urls)) return;
                        let r = n.button_urls[l];
                        if ("string" != typeof r) return;
                        let o = i.default.safeParseWithQuery(r);
                        if (null == o || null == o.protocol || null == o.hostname) return;
                        (0, s.handleClick)({
                            href: i.default.format(o),
                            trusted: !1
                        })
                    } catch (e) {}
                }
                return (0, n.jsx)(n.Fragment, {
                    children: t.buttons.map((e, a) => (0, n.jsx)(r.default, {
                        color: l,
                        look: u,
                        onClick: () => d(t, o.id, a),
                        children: e
                    }, "customButton-".concat(a)))
                })
            }
        },
        865677: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return G
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("446674"),
                i = l("77078"),
                r = l("260365"),
                o = l("823411"),
                u = l("987317"),
                d = l("997289"),
                c = l("685665"),
                f = l("442939"),
                m = l("860285"),
                p = l("42203"),
                h = l("86878"),
                E = l("525065"),
                T = l("305961"),
                S = l("686470"),
                _ = l("957255"),
                g = l("27618"),
                A = l("18494"),
                I = l("697218"),
                v = l("800762"),
                N = l("953998"),
                C = l("535974"),
                y = l("773336"),
                M = l("602043"),
                x = l("191225"),
                O = l("706508"),
                R = l("612696"),
                L = l("126808"),
                P = l("871388"),
                j = l("407908"),
                b = l("141962"),
                D = l("295999"),
                U = l("954016"),
                w = l("49111"),
                F = l("782340");

            function G(e) {
                let {
                    activity: t,
                    currentEmbeddedApplication: l,
                    isCurrentUser: G,
                    color: Y,
                    look: k,
                    hover: V,
                    user: B,
                    channelId: H,
                    isEmbedded: W = !1
                } = e, {
                    analyticsLocations: z
                } = (0, c.default)(), [K, Z] = a.useState(!1), X = (0, L.default)({
                    channelId: H,
                    userId: B.id,
                    activity: t
                }), J = (0, s.useStateFromStores)([I.default], () => I.default.getCurrentUser()), Q = (0, s.useStateFromStores)([S.default, m.default, C.default, h.default], () => W || (null == t ? void 0 : t.application_id) != null && (0, M.isLaunchable)({
                    LibraryApplicationStore: S.default,
                    LaunchableGameStore: m.default,
                    DispatchApplicationStore: C.default,
                    ConnectedAppsStore: h.default,
                    applicationId: t.application_id
                })), q = (0, s.useStateFromStores)([x.default], () => Array.from(x.default.getSelfEmbeddedActivities().values()).some(e => {
                    let {
                        applicationId: l,
                        channelId: n
                    } = e;
                    return l === (null == t ? void 0 : t.application_id) && n === X
                })), $ = (0, s.useStateFromStores)([N.default], () => null != t && null != t.application_id && N.default.getState(t.application_id, w.ActivityActionTypes.JOIN) === w.ActivityActionStates.LOADING), [ee] = (0, f.default)((null == t ? void 0 : t.application_id) != null ? [null == t ? void 0 : t.application_id] : []), et = (0, s.useStateFromStores)([p.default, T.default, E.default, g.default, A.default, v.default, _.default], () => (0, R.default)({
                    user: B,
                    activity: t,
                    application: ee,
                    channelId: X,
                    currentUser: J,
                    isEmbedded: W,
                    ChannelStore: p.default,
                    GuildStore: T.default,
                    GuildMemberCountStore: E.default,
                    RelationshipStore: g.default,
                    SelectedChannelStore: A.default,
                    VoiceStateStore: v.default,
                    PermissionStore: _.default
                })), el = (0, d.useAnalyticsContext)(), en = !y.isPlatformEmbedded, ea = (0, P.default)(t, w.ActivityFlags.JOIN) || W;
                if (null == t || !ea || null == t.application_id) return null;
                let es = !G && (en || Q) && !K && !q && (!W || et),
                    ei = null;
                G ? ei = F.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : !en && !Q && (ei = F.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                    name: t.name
                }));
                let er = async (e, t) => {
                    var l;
                    null != t.session_id && null != t.application_id && (await o.default.join({
                        userId: e.id,
                        sessionId: t.session_id,
                        applicationId: t.application_id,
                        channelId: A.default.getVoiceChannelId(),
                        messageId: null,
                        intent: U.ActivityIntent.PLAY,
                        embedded: (0, P.default)(t, w.ActivityFlags.EMBEDDED)
                    }), (0, j.default)({
                        type: w.AnalyticsGameOpenTypes.JOIN,
                        userId: e.id,
                        applicationId: t.application_id,
                        partyId: null === (l = t.party) || void 0 === l ? void 0 : l.id,
                        locationObject: el.location,
                        analyticsLocations: z
                    }))
                }, eo = async () => {
                    let e = !1;
                    if (W) {
                        if (!et || null == X || null == t.application_id) return;
                        e = await (0, O.default)({
                            applicationId: t.application_id,
                            currentEmbeddedApplication: l,
                            activityChannelId: X,
                            locationObject: el.location,
                            embeddedActivitiesManager: b.default,
                            analyticsLocations: z
                        })
                    }
                    if (!e) {
                        et && er(B, t), Z(!0);
                        let e = await r.default.sendActivityInviteUser({
                            type: w.ActivityActionTypes.JOIN_REQUEST,
                            userId: B.id,
                            activity: t,
                            location: w.AnalyticsLocations.PROFILE_POPOUT
                        });
                        null != e && u.default.selectPrivateChannel(e.id)
                    }
                }, eu = et ? F.default.Messages.JOIN : F.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
                return W && (eu = F.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY), (0, n.jsx)(i.Tooltip, {
                    text: ei,
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: l
                        } = e;
                        return (0, n.jsx)(D.default, {
                            onClick: eo,
                            onMouseEnter: t,
                            onMouseLeave: l,
                            color: Y,
                            look: k,
                            hover: V,
                            disabled: !es,
                            submitting: $,
                            fullWidth: !0,
                            children: eu
                        })
                    }
                }, "join")
            }
        },
        15874: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                s = l("987317"),
                i = l("957255"),
                r = l("945956"),
                o = l("599110"),
                u = l("295999"),
                d = l("49111"),
                c = l("782340");

            function f(e) {
                let {
                    className: t,
                    color: l,
                    look: f,
                    hangStatusChannel: m
                } = e, p = (0, a.useStateFromStores)([r.default], () => r.default.getChannelId() === m.id);
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(u.default, {
                        className: t,
                        disabled: p,
                        onClick: () => {
                            i.default.can(d.Permissions.CONNECT, m), s.default.selectVoiceChannel(m.id), o.default.track(d.AnalyticEvents.HANG_STATUS_CTA_CLICKED, {
                                source: "UserProfilePopout",
                                guild_id: m.guild_id,
                                channel_id: m.id
                            })
                        },
                        color: l,
                        look: f,
                        fullWidth: !0,
                        children: c.default.Messages.JOIN
                    }, "join-hang")
                })
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
                r = l("716214"),
                o = l("800762"),
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
                    } = e, p = (0, i.useStateFromStores)([o.default], () => o.default.isInChannel(l), [l]);
                    return (0, n.jsx)(u.default, {
                        className: s(c.button, {
                            [c.popout]: !m
                        }),
                        color: a,
                        look: f,
                        disabled: p,
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
            var a = l("605250"),
                s = l("871388"),
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
                return (0, s.default)(t, r.ActivityFlags.INSTANCE) ? (0, n.jsx)(i.default, {
                    look: u,
                    color: d,
                    onClick: function() {
                        new(0, a.default)("UserActivityActions").log("notify", l.id, t)
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
            var a = l("564594"),
                s = l("871388"),
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
                if (null == t || !(0, s.default)(t, r.ActivityFlags.PLAY) || !(0, i.default)(t)) return null;
                let p = {
                    key: "play",
                    className: o.button,
                    size: o.buttonSize,
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
                    ...p
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
                if (null == t || !(0, s.default)(t, r.ActivityFlags.SYNC)) return null;
                let p = {
                    key: "sync",
                    className: o.button,
                    size: o.buttonSize,
                    color: u,
                    look: d,
                    user: l,
                    activity: t
                };
                return (0, i.default)(t) ? (0, n.jsx)(a.default, {
                    guildId: null != c ? c : void 0,
                    channelId: f,
                    source: m,
                    ...p
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
            var a = l("287585"),
                s = l("502651"),
                i = l("295999"),
                r = l("782340");

            function o(e) {
                let {
                    activity: t,
                    color: l,
                    look: o
                } = e, u = (0, s.default)(t);
                return u ? (0, n.jsx)(i.default, {
                    onClick: () => {
                        let e = (0, a.default)(t);
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
                    return g
                }
            }), l("222007");
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                s = l("77078"),
                i = l("772017"),
                r = l("987317"),
                o = l("990766"),
                u = l("244201"),
                d = l("223913"),
                c = l("373469"),
                f = l("42203"),
                m = l("30672"),
                p = l("619911"),
                h = l("659500"),
                E = l("295999"),
                T = l("49111"),
                S = l("782340"),
                _ = l("317468");

            function g(e) {
                let {
                    isCurrentUser: t,
                    color: l,
                    look: g,
                    applicationStream: A
                } = e, {
                    activeStream: I,
                    watchingOtherStream: v
                } = (0, a.useStateFromStoresObject)([c.default], () => ({
                    activeStream: c.default.getActiveStreamForApplicationStream(A),
                    watchingOtherStream: null != A && c.default.getAllActiveStreamsForChannel(A.channelId).filter(e => {
                        let {
                            ownerId: t
                        } = e;
                        return t !== A.ownerId
                    }).length > 0
                })), N = (0, a.useStateFromStores)([f.default], () => f.default.getChannel(null == A ? void 0 : A.channelId)), [C, y] = (0, d.useCanWatchStream)(N), M = (0, u.useWindowDispatch)(), x = null != I && null != A && I.state !== T.ApplicationStreamStates.ENDED && I.ownerId === A.ownerId, O = e => {
                    null != A && (r.default.selectVoiceChannel(A.channelId), !x && (0, o.watchStreamAndTransitionToStream)(A, {
                        forceMultiple: e
                    }), M.dispatch(T.ComponentActions.POPOUT_CLOSE), h.ComponentDispatch.dispatch(T.ComponentActions.MODAL_CLOSE), i.default.popAll())
                };
                if (null == A) return null;
                let R = (0, d.getStreamCTAString)(y);
                t ? R = S.default.Messages.WATCH_STREAM_STREAMING : x && (R = S.default.Messages.WATCH_STREAM_WATCHING);
                let L = {
                    color: l,
                    look: g
                };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(E.default, {
                        disabled: t || x || !C,
                        onClick: () => O(!1),
                        ...L,
                        fullWidth: !0,
                        children: [(0, n.jsx)(p.default, {
                            className: _.streamIcon
                        }), R]
                    }, "play"), v && !x ? (0, n.jsx)(s.Tooltip, {
                        text: S.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                        children: e => (0, n.jsx)(E.default, {
                            ...e,
                            onClick: () => {
                                var t;
                                null === (t = e.onClick) || void 0 === t || t.call(e), O(!0)
                            },
                            ...L,
                            className: _.iconButton,
                            size: _.iconButtonSize,
                            children: (0, n.jsx)(m.default, {
                                className: _.iconSize
                            })
                        })
                    }) : null]
                })
            }
        },
        150216: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                appStorefrontExperiment: function() {
                    return a
                }
            });
            var n = l("862205");
            let a = (0, n.createExperiment)({
                kind: "user",
                id: "2024-02_app_storefront",
                label: "App Storefront",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable App Storefront",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        85027: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                getApplicationInstallURL: function() {
                    return s
                }
            }), l("222007");
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
            }), l("222007");
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
                    return o
                },
                openAvatarDecorationModal: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                s = l("393414");
            l("103603");
            var i = l("573135"),
                r = l("49111");

            function o(e) {
                return "number" != typeof e ? (0, a.getAvatarSize)(e) * i.DECORATION_TO_AVATAR_RATIO : e * i.DECORATION_TO_AVATAR_RATIO
            }
            let u = e => {
                let {
                    analyticsLocations: t,
                    initialSelectedDecoration: i,
                    isTryItOutFlow: o
                } = e;
                (0, a.openModalLazy)(async () => {
                    (0, s.getHistory)().location.pathname === r.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, s.transitionTo)(r.Routes.APP);
                    let {
                        default: e
                    } = await l.el("791050").then(l.bind(l, "791050"));
                    return l => (0, n.jsx)(e, {
                        ...l,
                        analyticsLocations: t,
                        initialSelectedDecoration: i,
                        isTryItOutFlow: o
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
                    return g
                }
            });
            var n, a, s = l("394846"),
                i = l("474643");
            (n = a || (a = {}))[n.TOOLTIP = 0] = "TOOLTIP", n[n.STATIC = 1] = "STATIC";
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
                        commandType: i.DraftType.SlashCommand,
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
                        type: i.DraftType.ChannelMessage,
                        commandType: i.DraftType.SlashCommand
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
                p = {
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
                h = {
                    analyticsName: "create_poll",
                    attachments: !0,
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
                        disableEnterToSubmit: !0
                    }
                },
                E = {
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
                S = {
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
                    toolbarType: 1
                },
                g = {
                    NORMAL: r,
                    OVERLAY: o,
                    SIDEBAR: u,
                    EDIT: d,
                    FORM: c,
                    VOICE_CHANNEL_STATUS: f,
                    THREAD_CREATION: m,
                    PROFILE_BIO_INPUT: E,
                    CUSTOM_GIFT: T,
                    RULES_INPUT: S,
                    CREATE_FORUM_POST: p,
                    CREATE_POLL: h,
                    FORUM_CHANNEL_GUIDELINES: _
                }
        },
        235767: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("446674"),
                r = l("77078"),
                o = l("697218"),
                u = l("987772"),
                d = l("158998"),
                c = l("473591"),
                f = l("782340"),
                m = l("189590");

            function p(e) {
                let {
                    userId: t,
                    guildId: l,
                    className: a
                } = e, p = (0, i.useStateFromStores)([c.default], () => c.default.getSettings(l)), h = (0, i.useStateFromStores)([o.default], () => o.default.getUser(null != t ? t : null == p ? void 0 : p.last_edited_by));
                return null == h ? null : (0, n.jsxs)("div", {
                    className: s(a, m.container),
                    children: [(0, n.jsx)(u.default, {
                        color: "var(--interactive-active)",
                        width: 12,
                        height: 12
                    }), (0, n.jsx)(r.Text, {
                        color: "text-normal",
                        variant: "text-xs/medium",
                        children: f.default.Messages.CLYDE_LAST_EDITED_BY_TAG.format({
                            username: d.default.getUserTag(h, {
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
            var a = l("77078"),
                s = l("599110"),
                i = l("49111");

            function r(e) {
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
                    return S
                },
                useLegacyPlatformType: function() {
                    return _
                }
            }), l("222007");
            var n = l("884691"),
                a = l("917351"),
                s = l.n(a),
                i = l("446674"),
                r = l("376556"),
                o = l("695702"),
                u = l("47319"),
                d = l("697218"),
                c = l("718517"),
                f = l("49111"),
                m = l("894282");
            let p = {
                    [f.PlatformTypes.INSTAGRAM]: ["1036753656588017764"]
                },
                h = new Map([
                    [f.PlatformTypes.INSTAGRAM, new Date(2023, 1, 18).getTime()]
                ]),
                E = 30 * c.default.Millis.DAY;

            function T(e) {
                let {
                    forUserProfile: t
                } = e, l = (0, i.useStateFromStores)([d.default], () => d.default.getCurrentUser()), n = o.PlayStationVoiceExperiment.useExperiment({
                    location: "f2f7ef_1"
                }, {
                    autoTrackExposure: !1
                }).allowPlayStationStaging;
                return e => {
                    var a;
                    return e.type === f.PlatformTypes.PLAYSTATION_STAGING ? n : !!(void 0 !== l && (null === (a = p[e.type]) || void 0 === a ? void 0 : a.includes(l.id))) || !!t || e.enabled
                }
            }

            function S() {
                let e = (0, i.useStateFromStores)([u.default], () => u.default.getAccounts()),
                    t = T({
                        forUserProfile: !1
                    }),
                    l = n.useMemo(() => {
                        let t = new Set;
                        return e.forEach(e => t.add(e.type)), t
                    }, [e]);
                return s.sortBy(r.default.filter(t), [e => {
                    var t;
                    return !(h.has(e.type) && Date.now() < (null !== (t = h.get(e.type)) && void 0 !== t ? t : 0) + E)
                }, e => l.has(e.type), e => e.hasMetadata, e => !f.ACTIVITY_PLATFORM_TYPES.has(e.type), e => e.name])
            }

            function _(e) {
                let [t, l] = n.useState(!1);

                function a(e) {
                    let {
                        key: t
                    } = e;
                    t === m.KeyboardKeysUpdated.SHIFT && l(!0)
                }

                function s(e) {
                    let {
                        key: t
                    } = e;
                    t === m.KeyboardKeysUpdated.SHIFT && l(!1)
                }
                return (n.useEffect(() => (window.addEventListener("keydown", a), window.addEventListener("keyup", s), () => {
                    window.removeEventListener("keydown", a), window.removeEventListener("keyup", s)
                }), []), t && e === f.PlatformTypes.TWITTER) ? f.PlatformTypes.TWITTER_LEGACY : e
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
                a = l("42203"),
                s = l("26989"),
                i = l("535013");

            function r(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = (0, n.default)([s.default], () => null != e ? s.default.getMember(e.id, t) : null, [e, t]),
                    u = (0, n.default)([a.default], () => a.default.getChannel(l), [l]),
                    d = (0, n.default)([a.default], () => a.default.getChannel(null == u ? void 0 : u.parent_id), [u]);
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
                    return p
                },
                generateTwitterMetadataItems: function() {
                    return h
                },
                generateSteamMetadataItems: function() {
                    return E
                },
                generatePaypalMetadataItems: function() {
                    return T
                },
                generateEbayMetadataItems: function() {
                    return S
                },
                generateTikTokMetadataItems: function() {
                    return _
                },
                generateRoleConnectionMetadataItems: function() {
                    return g
                }
            }), l("424973"), l("222007");
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("917351"),
                r = l.n(i),
                o = l("77078"),
                u = l("240481"),
                d = l("535013"),
                c = l("214509"),
                f = l("782340"),
                m = l("536271");

            function p(e) {
                var t;
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    a = [],
                    s = Number(null !== (t = e[c.MetadataFields.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
                    i = "1" === e[c.MetadataFields.REDDIT_GOLD],
                    r = "1" === e[c.MetadataFields.REDDIT_MOD];
                return s > -1 && a.push((0, n.jsx)(A, {
                    className: l,
                    count: s,
                    label: f.default.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
                }, c.MetadataFields.REDDIT_TOTAL_KARMA)), i && a.push((0, n.jsx)(N, {
                    className: l,
                    label: f.default.Messages.CONNECTIONS_REDDIT_GOLD
                }, c.MetadataFields.REDDIT_GOLD)), r && a.push((0, n.jsx)(N, {
                    className: l,
                    label: f.default.Messages.CONNECTIONS_REDDIT_MOD
                }, c.MetadataFields.REDDIT_MOD)), a
            }

            function h(e) {
                var t, l;
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    s = [],
                    i = Number(null !== (t = e[c.MetadataFields.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
                    r = Number(null !== (l = e[c.MetadataFields.TWITTER_FOLLOWERS_COUNT]) && void 0 !== l ? l : -1);
                return i > -1 && s.push((0, n.jsx)(A, {
                    className: a,
                    count: i,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
                }, c.MetadataFields.TWITTER_STATUSES_COUNT)), r > -1 && s.push((0, n.jsx)(A, {
                    className: a,
                    count: r,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
                }, c.MetadataFields.TWITTER_FOLLOWERS_COUNT)), s
            }

            function E(e) {
                var t, a, s;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    r = [],
                    o = Number(null !== (t = e[c.MetadataFields.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
                    u = Number(null !== (a = e[c.MetadataFields.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== a ? a : -1),
                    d = Number(null !== (s = e[c.MetadataFields.STEAM_ITEM_COUNT_TF2]) && void 0 !== s ? s : -1);
                return o > -1 && r.push((0, n.jsx)(A, {
                    className: i,
                    count: o,
                    label: f.default.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
                }, c.MetadataFields.STEAM_GAME_COUNT)), u > -1 && r.push((0, n.jsx)(v, {
                    className: i,
                    label: f.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                        count: u
                    }),
                    imageSrc: l("142226"),
                    imageAlt: f.default.Messages.CONNECTIONS_STEAM_DOTA2
                }, c.MetadataFields.STEAM_ITEM_COUNT_DOTA2)), d > -1 && r.push((0, n.jsx)(v, {
                    className: i,
                    label: f.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                        count: d
                    }),
                    imageSrc: l("449236"),
                    imageAlt: f.default.Messages.CONNECTIONS_STEAM_TF2
                }, c.MetadataFields.STEAM_ITEM_COUNT_TF2)), r
            }

            function T(e) {
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
                return s > 0 && a.push((0, n.jsx)(A, {
                    className: l,
                    count: s,
                    label: f.default.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                    percent: !0
                }, c.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE)), i && a.push((0, n.jsx)(N, {
                    className: l,
                    label: f.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                }, c.MetadataFields.EBAY_TOP_RATED_SELLER)), a
            }

            function _(e) {
                var t, l, a;
                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    i = [],
                    r = "1" === e[c.MetadataFields.TIKTOK_VERIFIED],
                    o = Number(null !== (t = e[c.MetadataFields.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
                    u = Number(null !== (l = e[c.MetadataFields.TIKTOK_FOLLOWING_COUNT]) && void 0 !== l ? l : -1),
                    d = Number(null !== (a = e[c.MetadataFields.TIKTOK_LIKES_COUNT]) && void 0 !== a ? a : -1);
                return o > -1 && i.push((0, n.jsx)(A, {
                    className: s,
                    count: o,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
                }, c.MetadataFields.TIKTOK_FOLLOWER_COUNT)), u > -1 && i.push((0, n.jsx)(A, {
                    className: s,
                    count: u,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
                }, c.MetadataFields.TIKTOK_FOLLOWING_COUNT)), d > -1 && i.push((0, n.jsx)(A, {
                    className: s,
                    count: d,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
                }, c.MetadataFields.TIKTOK_LIKES_COUNT)), r && i.push((0, n.jsx)(N, {
                    className: s,
                    label: f.default.Messages.CONNECTIONS_TIKTOK_VERIFIED
                }, c.MetadataFields.TIKTOK_VERIFIED)), i
            }

            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    a = [],
                    s = Object.keys(e.metadata);
                if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === s.length) return a;
                let i = r.sortBy(s, t => {
                    var l, n;
                    return null === (n = e.application_metadata) || void 0 === n ? void 0 : null === (l = n[t]) || void 0 === l ? void 0 : l.name
                });
                for (let s of i) {
                    let i = e.application_metadata[s];
                    if (null == i) continue;
                    let r = e.metadata[s];
                    try {
                        switch (i.type) {
                            case c.MetadataItemTypes.BOOLEAN_EQUAL:
                            case c.MetadataItemTypes.BOOLEAN_NOT_EQUAL: {
                                let e = i.type === c.MetadataItemTypes.BOOLEAN_EQUAL && "1" === r || i.type === c.MetadataItemTypes.BOOLEAN_NOT_EQUAL && "1" !== r;
                                e && a.push((0, n.jsx)(N, {
                                    className: t,
                                    label: i.name
                                }, i.key))
                            }
                            break;
                            case c.MetadataItemTypes.DATETIME_GREATER_THAN_EQUAL:
                            case c.MetadataItemTypes.DATETIME_LESS_THAN_EQUAL:
                                a.push((0, n.jsx)(I, {
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
                                a.push((0, n.jsx)(A, {
                                    className: t,
                                    count: Number(r),
                                    label: i.name
                                }, i.key))
                        }
                    } catch (e) {}
                }
                return a
            }

            function A(e) {
                let t, {
                        count: l,
                        label: a,
                        className: i,
                        percent: r
                    } = e,
                    d = (0, u.shortenAndLocalizeNumber)(l) + (r ? "%" : "");
                return t = "string" == typeof a ? f.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                    name: a,
                    value: d
                }) : a.format({
                    value: d
                }), (0, n.jsx)(o.Text, {
                    className: s(m.connectedAccountVanityMetadata, i),
                    variant: "text-xs/normal",
                    color: "interactive-active",
                    children: t
                })
            }

            function I(e) {
                let {
                    date: t,
                    locale: l,
                    label: a,
                    className: i
                } = e;
                return (0, n.jsx)(o.Text, {
                    className: s(m.connectedAccountVanityMetadata, i),
                    variant: "text-xs/normal",
                    color: "interactive-active",
                    children: f.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                        value: (0, d.getCreatedAtDate)(t, l),
                        name: a
                    })
                })
            }

            function v(e) {
                let {
                    label: t,
                    imageSrc: l,
                    imageAlt: a,
                    className: i
                } = e;
                return (0, n.jsxs)("div", {
                    className: s(m.connectedAccountVanityMetadata, m.connectedAccountVanityMetadataItem, i),
                    children: [(0, n.jsx)(o.Tooltip, {
                        text: a,
                        children: e => (0, n.jsx)("img", {
                            ...e,
                            src: l,
                            alt: a,
                            className: m.connectedAccountVanityMetadataItemIcon
                        })
                    }), (0, n.jsx)(o.Text, {
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
                return (0, n.jsx)(o.Text, {
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
            }), l("222007");
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
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
                        size: a,
                        forcedIconColor: m,
                        className: p,
                        iconClassName: h
                    } = e,
                    [E, T] = (0, r.useStateFromStoresArray)([d.default], () => [d.default.desaturateUserColors, d.default.saturation]),
                    S = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_300).hex(),
                    _ = (0, i.hex2int)(null != l ? l : S),
                    g = (0, i.int2hsl)(_, !1, E ? T : null);
                t = null != m ? m : .3 > (0, i.getDarkness)(_) ? o.default.unsafe_rawColors.PRIMARY_630.css : o.default.unsafe_rawColors.WHITE_500.css;
                let A = a / 8;
                return (0, n.jsx)("div", {
                    style: {
                        background: g,
                        width: a,
                        height: a,
                        borderRadius: a,
                        lineHeight: "".concat(a, "px")
                    },
                    className: p,
                    children: (0, n.jsx)(c.default, {
                        color: t,
                        className: s(f.linkIcon, h),
                        width: a - 2 * A,
                        height: a - 2 * A,
                        style: {
                            margin: A
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
            }), l("222007");
            var n = l("37983");
            l("884691");
            var a = l("509043"),
                s = l("446674"),
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
                        className: p,
                        iconClassName: h,
                        tooltipText: E
                    } = e,
                    [T, S] = (0, s.useStateFromStoresArray)([o.default], () => [o.default.desaturateUserColors, o.default.saturation]),
                    _ = (0, r.useToken)(i.default.unsafe_rawColors.PRIMARY_300).hex(),
                    g = (0, a.hex2int)(null != l ? l : _),
                    A = (0, a.int2hsl)(g, !1, T ? S : null);
                return t = null != m ? m : .3 > (0, a.getDarkness)(g) ? i.default.unsafe_rawColors.PRIMARY_630.css : i.default.unsafe_rawColors.WHITE_500.css, (0, n.jsx)(r.Tooltip, {
                    text: null != E ? E : c.default.Messages.CONNECTIONS_ROLE_OFFICIAL_ICON_TOOLTIP,
                    children: e => (0, n.jsx)(u.default, {
                        ...e,
                        className: p,
                        color: A,
                        size: f,
                        children: (0, n.jsx)(d.default, {
                            color: t,
                            height: f,
                            width: f,
                            className: h
                        })
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
                a = l("446674"),
                s = l("305961"),
                i = l("689226");

            function r(e, t) {
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
            let o = e => {
                    let {
                        guildId: t,
                        roleId: l,
                        size: o = 20
                    } = e, u = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(t));
                    return n.useMemo(() => {
                        if (null == u || null == l) return;
                        let e = u.roles[l];
                        if ((0, i.canGuildUseRoleIcons)(u, e)) return r(e, o)
                    }, [u, l, o])
                },
                u = (e, t) => {
                    let l = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(e));
                    if (null != l && (0, i.canGuildUseRoleIcons)(l, t)) return r(t)
                }
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
            }), l("70102");
            var n = l("968194"),
                a = l("773336"),
                s = l("155815"),
                i = l("450484");

            function r(e, t, l) {
                let r;
                !(0, a.isDesktop)() && (r = window.open("", "_blank")), (0, n.getMetadata)(e, t).then(e => l(e)).then(e => {
                    let {
                        resourceType: t,
                        resourceId: l
                    } = e, n = s.default.isProtocolRegistered() ? i.SpotifyEndpoints.PLAYER_OPEN(t, l) : i.SpotifyEndpoints.WEB_OPEN(t, l);
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
                    n = s.default.isProtocolRegistered() ? i.SpotifyEndpoints.PLAYER_OPEN(l, t) : i.SpotifyEndpoints.WEB_OPEN(l, t);
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
            var a = l("376341"),
                s = l.n(a),
                i = l("77078"),
                r = l("145131"),
                o = l("936629"),
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
                    loading: p,
                    disabled: h,
                    onClick: E
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
                            onClick: E,
                            onMouseEnter: t,
                            onMouseLeave: l,
                            disabled: h,
                            submitting: p,
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
            var a = l("414456"),
                s = l.n(a),
                i = l("77078"),
                r = l("616225"),
                o = l("387111"),
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
                    className: p,
                    ...h
                } = e, {
                    tooltip: E,
                    loading: T,
                    disabled: S,
                    onClick: _
                } = (0, u.useSpotifySyncAction)(t, l, f, o.default.getNickname(c, a, l));
                return (0, n.jsx)(i.Tooltip, {
                    text: E,
                    children: e => {
                        let {
                            onMouseEnter: l,
                            onMouseLeave: a
                        } = e;
                        return (0, n.jsx)(i.Button, {
                            ...h,
                            size: s(m, d.iconButtonSize),
                            className: s(p, d.iconButton),
                            onClick: _,
                            onMouseEnter: l,
                            onMouseLeave: a,
                            disabled: S,
                            submitting: T,
                            "aria-label": null != E ? E : t.name,
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
                    return g
                },
                useSpotifySyncAction: function() {
                    return A
                },
                useSpotifyJoinAction: function() {
                    return I
                }
            }), l("222007");
            var n = l("884691"),
                a = l("446674"),
                s = l("862337"),
                i = l("84339"),
                r = l("271938"),
                o = l("718517"),
                u = l("158998"),
                d = l("662285"),
                c = l("782911"),
                f = l("629414"),
                m = l("53887"),
                p = l("486150"),
                h = l("555759"),
                E = l("450484");
            let T = 30 * o.default.Millis.SECOND;

            function S(e) {
                let {
                    currentUserTrackId: t,
                    syncingWithUser: l,
                    syncingWithParty: a
                } = e, [r, o] = n.useState(!1), [u] = n.useState(() => new s.Timeout), d = (0, i.default)(t);
                n.useEffect(() => {
                    r && (t !== d || l || a) && (o(!1), u.stop())
                }, [t, d, l, a, r, u]);
                let c = n.useCallback(() => {
                        o(!0), u.start(T, () => o(!1))
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

            function _(e, t) {
                return (0, a.useStateFromStoresObject)([d.default, r.default], () => (0, m.default)(d.default, r.default, t, e), [e, t])
            }

            function g(e, t, l) {
                let a = _(e, t),
                    {
                        notPlayable: s,
                        isCurrentUser: i,
                        playingSameTrack: r
                    } = a,
                    {
                        loading: o,
                        startLoading: u,
                        clearLoading: d
                    } = S(a),
                    m = n.useCallback(() => {
                        u(), (0, h.default)(a, E.SpotifyActionTypes.USER_ACTIVITY_PLAY, l).catch(d)
                    }, [a, l, u, d]);
                return {
                    label: (0, c.default)(a, E.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                    tooltip: (0, f.default)(a, E.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                    disabled: !o && (i || s || r),
                    loading: o,
                    onClick: m,
                    spotifyData: a
                }
            }

            function A(e, t, l, a) {
                let s = null != a ? a : u.default.getName(t),
                    i = _(e, t),
                    {
                        syncingWithUser: r,
                        syncingWithParty: o,
                        isCurrentUser: d
                    } = i,
                    {
                        loading: m,
                        startLoading: h,
                        clearLoading: T
                    } = S(i),
                    g = n.useCallback(() => {
                        h(), (0, p.default)(i, E.SpotifyActionTypes.USER_ACTIVITY_SYNC, l).catch(T)
                    }, [i, l, h, T]);
                return {
                    label: (0, c.default)(i, E.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                    tooltip: (0, f.default)(i, E.SpotifyActionTypes.USER_ACTIVITY_SYNC, s),
                    disabled: !m && (d || r || o),
                    loading: m,
                    onClick: g,
                    spotifyData: i
                }
            }

            function I(e, t, l) {
                let a = _(e, t),
                    {
                        notPlayable: s,
                        syncingWithUser: i,
                        syncingWithParty: r,
                        isCurrentUser: o
                    } = a,
                    {
                        loading: u,
                        startLoading: d,
                        clearLoading: m
                    } = S(a),
                    h = n.useCallback(() => {
                        d(), (0, p.default)(a, E.SpotifyActionTypes.EMBED_SYNC, l).catch(m)
                    }, [a, l, d, m]);
                return {
                    label: (0, c.default)(a, E.SpotifyActionTypes.EMBED_SYNC),
                    tooltip: (0, f.default)(a, E.SpotifyActionTypes.EMBED_SYNC),
                    disabled: !u && (o || i || r || s),
                    loading: u,
                    onClick: h,
                    spotifyData: a
                }
            }
        },
        388491: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useProfileThemeValues: function() {
                    return m
                },
                getProfileTheme: function() {
                    return p
                },
                getValueInColorGradientByPercentage: function() {
                    return h
                },
                useAvatarBorderColor: function() {
                    return T
                },
                calculateButtonColor: function() {
                    return S
                },
                useMessageInputBorderColor: function() {
                    return _
                },
                useDividerColor: function() {
                    return g
                }
            }), l("222007");
            var n = l("884691"),
                a = l("917351"),
                s = l("509043"),
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

            function p(e) {
                if (null == e) return null;
                let t = (0, s.getDarkness)(e);
                return t > .5 ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT
            }

            function h(e, t, l) {
                let n = l / 100,
                    a = 1 - n;
                return [Math.round(e[0] * a + t[0] * n), Math.round(e[1] * a + t[1] * n), Math.round(e[2] * a + t[2] * n)]
            }

            function E(e, t) {
                let l = (0, s.int2rgbArray)(e);
                if (null == t) return 0;
                let n = c.default.parseString(t);
                if (null == n) return 0;
                let a = [n.red, n.green, n.blue],
                    i = [l[0], l[1], l[2]],
                    r = n.alpha,
                    [o, u, d] = a.map((e, t) => Math.floor(r * e + (1 - r) * i[t]));
                return (0, s.rgb2int)("rgba(".concat(o, ", ").concat(u, ", ").concat(d, ")"))
            }

            function T(e, t, l) {
                let n = m(e);
                return null == n || null == t ? null : E(t, l ? n.overlaySyncedWithUserTheme : n.overlay)
            }
            let S = (0, a.memoize)(e => {
                let t = (0, o.getContrastingColor)(e, {
                    base: "#ffffff",
                    contrastRatio: o.WCAGContrastRatios.HighContrastText
                });
                return (0, s.hex2int)(t)
            }, e => e);

            function _(e, t) {
                let l = m(e);
                return null != l && null != t ? E(t, null == l ? void 0 : l.messageInputBorder) : null
            }

            function g(e, t) {
                let l = (0, d.useColorValue)(f.Color.WHITE_500).hex;
                return (0, o.isThemeDark)(e) ? (0, s.hex2int)(l) : null != t ? S(t) : null
            }
        },
        765698: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                VoiceActivityProfileExperiment: function() {
                    return a
                }
            });
            var n = l("862205");
            let a = (0, n.createExperiment)({
                kind: "user",
                id: "2023-11_voice_activity_in_profile",
                label: "Voice Activity in Profile",
                defaultConfig: {
                    showVoiceActivityInProfile: !1
                },
                treatments: [{
                    id: 1,
                    label: "Voice activity displayed in user profile",
                    config: {
                        showVoiceActivityInProfile: !0
                    }
                }]
            })
        },
        999203: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("446674"),
                a = l("650509"),
                s = l("90592"),
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
                } = (0, a.default)({
                    applicationId: null == u ? void 0 : u.id,
                    groupListingId: null == u ? void 0 : u.primarySkuId,
                    guildId: o
                }), {
                    activeSubscriptionListing: c,
                    activeEntitlement: f,
                    subscriptionGroupListing: m
                } = (0, a.useActiveSubscriptionListingForApplication)(null == u ? void 0 : u.id, o), p = null !== (t = null == m ? void 0 : m.sku_flags) && void 0 !== t ? t : 0, h = (0, s.isApplicationUserSubscription)(p) || null != o && o !== r.ME && (0, s.isApplicationGuildSubscription)(p), E = null != f;
                return d ? {
                    botUpgraded: E,
                    botUpgradeable: !E && d && h,
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
        609734: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("77078"),
                r = l("272030"),
                o = l("85027"),
                u = l("33942"),
                d = l("252063"),
                c = l("42203"),
                f = l("18494"),
                m = l("191814"),
                p = l("758710"),
                h = l("351825"),
                E = l("306160"),
                T = l("253981"),
                S = l("613676"),
                _ = l("49111"),
                g = l("782340"),
                A = l("834680");

            function I(e) {
                var t;
                let {
                    application: l,
                    className: a
                } = e, I = c.default.getChannel(f.default.getChannelId()), {
                    appsInGDMEnabled: v,
                    availableApplications: N
                } = (0, d.usePrivateChannelIntegrationState)({
                    channelId: null !== (t = null == I ? void 0 : I.id) && void 0 !== t ? t : ""
                });
                if (null == l || !(0, S.canInstallApplication)(l.id, l.customInstallUrl, l.installParams)) return null;
                let C = v && null != N.find(e => e.id === (null == l ? void 0 : l.id));
                return (0, n.jsx)(i.Button, {
                    color: i.Button.Colors.PRIMARY,
                    look: i.Button.Looks.FILLED,
                    size: i.Button.Sizes.SMALL,
                    onContextMenu: E.SUPPORTS_COPY ? e => {
                        var t, a;
                        let s = (0, o.getApplicationInstallURL)({
                            id: l.id,
                            custom_install_url: null !== (t = l.customInstallUrl) && void 0 !== t ? t : void 0,
                            install_params: null !== (a = l.installParams) && void 0 !== a ? a : void 0
                        });
                        (0, r.openContextMenu)(e, e => (0, n.jsx)(i.Menu, {
                            navId: "component-button",
                            onClose: r.closeContextMenu,
                            "aria-label": g.default.Messages.APPLICATION_ADD_TO_SERVER_ACTIONS,
                            onSelect: void 0,
                            ...e,
                            children: (0, n.jsx)(i.MenuGroup, {
                                children: (0, n.jsx)(i.MenuItem, {
                                    id: "copy",
                                    label: g.default.Messages.APPLICATION_ADD_TO_SERVER_ACTIONS_COPY,
                                    action: () => (0, E.copy)(s)
                                })
                            })
                        }))
                    } : void 0,
                    onClick: () => {
                        C ? (0, u.openOAuth2Modal)({
                            clientId: l.id,
                            scopes: [_.OAuth2Scopes.APPLICATIONS_COMMANDS],
                            channelId: I.id,
                            disableGuildSelect: !0
                        }) : (0, S.installApplication)({
                            applicationId: l.id,
                            customInstallUrl: l.customInstallUrl,
                            installParams: l.installParams
                        })
                    },
                    className: s(A.applicationInstallButton, a),
                    children: (0, n.jsxs)("div", {
                        className: A.applicationInstallButtonContent,
                        children: [(0, n.jsx)(h.default, {
                            width: 16,
                            height: 16
                        }), (0, n.jsx)(m.default, {
                            size: 4,
                            horizontal: !0
                        }), (0, n.jsx)("span", {
                            className: A.applicationInstallButtonText,
                            children: C ? g.default.Messages.ADD : g.default.Messages.APPLICATION_ADD_BUTTON
                        }), null == l.customInstallUrl || T.default.isDiscordUrl(l.customInstallUrl) ? null : (0, n.jsx)(p.default, {
                            className: A.launchIcon,
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
                    return g
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("753809"),
                o = l("77078"),
                u = l("545158"),
                d = l("368639"),
                c = l("37785"),
                f = l("62843"),
                m = l("837899"),
                p = l("425190"),
                h = l("701909"),
                E = l("49111"),
                T = l("782340"),
                S = l("474963"),
                _ = l("632215");

            function g(e) {
                let {
                    className: t,
                    lineClamp: l = 6,
                    isExpanded: s = !1
                } = e, [g, A] = a.useState(s), I = a.useMemo(() => (0, d.parseBioReact)(T.default.Messages.MORE_INFO_CLYDE_LEGAL), []);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(o.Collapsible, {
                        isExpanded: g,
                        collapsibleContent: (0, n.jsx)("div", {
                            className: i(t, _.markup),
                            children: (0, n.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                lineClamp: l,
                                children: (0, n.jsx)(f.MessagesInteractionContext.Provider, {
                                    value: {
                                        disableAnimations: !0,
                                        disableInteractions: !1
                                    },
                                    children: I
                                })
                            })
                        }),
                        className: S.collapseable,
                        children: e => {
                            let {
                                onClick: t
                            } = e;
                            return (0, n.jsx)(o.Clickable, {
                                onClick: e => {
                                    A(!g), t(e)
                                },
                                children: (0, n.jsxs)("div", {
                                    className: S.header,
                                    children: [(0, n.jsx)(o.Heading, {
                                        variant: "eyebrow",
                                        className: S.userInfoSectionHeader,
                                        children: T.default.Messages.MORE_INFO
                                    }), g ? (0, n.jsx)(p.default, {
                                        className: S.arrow
                                    }) : (0, n.jsx)(m.default, {
                                        className: S.arrow
                                    })]
                                })
                            })
                        }
                    }), (0, n.jsxs)(o.Text, {
                        className: S.helpCenterCta,
                        variant: "text-sm/medium",
                        children: [(0, n.jsx)(r.LinkIcon, {
                            color: "var(--text-link)",
                            className: S.linkIcon
                        }), (0, n.jsx)(c.default, {
                            onClick: () => (0, u.default)(h.default.getArticleURL(E.HelpdeskArticles.CLYDE_AI), !0),
                            children: T.default.Messages.MORE_INFO_HELP_CENTER
                        })]
                    })]
                })
            }
        },
        824140: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ConnectedUserAccount: function() {
                    return C
                },
                ConnectedApplicationUserRoleAccount: function() {
                    return y
                },
                ConnectedUserAccounts: function() {
                    return M
                }
            }), l("424973");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("669491"),
                o = l("819855"),
                u = l("77078"),
                d = l("308289"),
                c = l("376556"),
                f = l("716241"),
                m = l("572943"),
                p = l("535013"),
                h = l("816499"),
                E = l("526190"),
                T = l("766274"),
                S = l("246053"),
                _ = l("867544"),
                g = l("128259"),
                A = l("49111"),
                I = l("214509"),
                v = l("782340"),
                N = l("825507");

            function C(e) {
                var t, l;
                let a, s, d, {
                    connectedAccount: T,
                    theme: C,
                    locale: y,
                    userId: M,
                    className: x,
                    showMetadata: O,
                    showInvisibleIcon: R
                } = e;
                null == O && (O = !0);
                let L = null !== (l = T.metadata) && void 0 !== l ? l : {},
                    P = O ? (0, p.getCreatedAtDate)(L[I.MetadataFields.CREATED_AT], y) : null,
                    j = (0, u.useToken)(r.default.unsafe_rawColors.TWITTER).hex(),
                    b = v.default.Messages.CONNECTION_VERIFIED;
                if (O) switch (T.type) {
                    case A.PlatformTypes.REDDIT:
                        a = (0, h.generateRedditMetadataItems)(L);
                        break;
                    case A.PlatformTypes.STEAM:
                        a = (0, h.generateSteamMetadataItems)(L);
                        break;
                    case A.PlatformTypes.TWITTER: {
                        a = (0, h.generateTwitterMetadataItems)(L);
                        let e = "1" === L[I.MetadataFields.TWITTER_VERIFIED];
                        e && (s = j, b = v.default.Messages.CONNECTION_VERIFIED_ON_TWITTER);
                        break
                    }
                    case A.PlatformTypes.PAYPAL:
                        a = (0, h.generatePaypalMetadataItems)(L);
                        break;
                    case A.PlatformTypes.EBAY:
                        a = (0, h.generateEbayMetadataItems)(L);
                        break;
                    case A.PlatformTypes.TIKTOK:
                        a = (0, h.generateTikTokMetadataItems)(L)
                }
                let D = c.default.get((0, m.useLegacyPlatformType)(T.type)),
                    U = null == D ? void 0 : null === (t = D.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(D, T);
                null != R && R ? d = (0, n.jsx)(_.default, {
                    className: i(N.connectedAccountOpenIconContainer, N.connectedAccountHideIcon),
                    foregroundColor: "currentColor"
                }) : null != U && (d = (0, n.jsx)(u.Anchor, {
                    href: U,
                    onClick: e => {
                        var t, l;
                        t = T.type, l = M, (0, f.trackWithMetadata)(A.AnalyticEvents.CONNECTED_ACCOUNT_VIEWED, {
                            platform_type: t,
                            other_user_id: l
                        }), (0, g.handleClick)({
                            href: U,
                            trusted: (null == D ? void 0 : D.type) !== A.PlatformTypes.DOMAIN
                        }, e)
                    },
                    children: (0, n.jsx)(S.default, {
                        className: N.connectedAccountOpenIcon,
                        direction: S.default.Directions.RIGHT
                    })
                }));
                let w = (0, u.useToken)(r.default.colors.INTERACTIVE_MUTED).hex(),
                    F = (0, u.useToken)(r.default.colors.INTERACTIVE_ACTIVE).hex(),
                    G = T.verified ? (0, n.jsx)(E.default, {
                        className: N.connectedAccountVerifiedIcon,
                        color: null != s ? s : w,
                        forcedIconColor: F,
                        size: 16,
                        tooltipText: b
                    }) : null;
                return (0, n.jsxs)("div", {
                    className: i(N.connectedAccountContainer, null != a && a.length > 0 || null != P ? N.connectedAccountContainerWithMetadata : null, x),
                    children: [(0, n.jsxs)("div", {
                        className: N.connectedAccount,
                        children: [(0, n.jsx)(u.Tooltip, {
                            text: null == D ? void 0 : D.name,
                            children: e => (0, n.jsx)("img", {
                                ...e,
                                alt: v.default.Messages.IMG_ALT_LOGO.format({
                                    name: null == D ? void 0 : D.name
                                }),
                                className: N.connectedAccountIcon,
                                src: (0, o.isThemeDark)(C) ? null == D ? void 0 : D.icon.darkSVG : null == D ? void 0 : D.icon.lightSVG
                            })
                        }), (0, n.jsxs)("div", {
                            className: N.connectedAccountNameContainer,
                            children: [(0, n.jsxs)("div", {
                                className: N.connectedAccountName,
                                children: [(0, n.jsxs)("div", {
                                    className: N.connectedAccountNameTextContainer,
                                    children: [(0, n.jsx)(u.Tooltip, {
                                        overflowOnly: !0,
                                        text: T.name,
                                        children: e => (0, n.jsx)(u.Text, {
                                            ...e,
                                            variant: "text-md/semibold",
                                            color: "interactive-active",
                                            className: N.connectedAccountNameText,
                                            children: T.name
                                        })
                                    }), G]
                                }), d]
                            }), null != P ? (0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: v.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
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

            function y(e) {
                let {
                    applicationRoleConnection: t,
                    className: l,
                    locale: a
                } = e, s = (0, h.generateRoleConnectionMetadataItems)(t, void 0, a);
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
                                children: v.default.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
                                    applicationHook: () => (0, n.jsxs)("div", {
                                        className: N.connectedAccountPoweredByText,
                                        children: [null != t.application.bot ? (0, n.jsx)(d.default, {
                                            user: new T.default(t.application.bot),
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
                    className: r,
                    userId: o
                } = e;
                if (null == l || 0 === l.length) return null;
                let u = l.filter(e => c.default.isSupported(e.type)).map(e => (0, n.jsx)(C, {
                        connectedAccount: e,
                        theme: a,
                        locale: s,
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
                    className: i(N.connectedAccounts, r),
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
        763866: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return X
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("446674"),
                o = l("77078"),
                u = l("335189"),
                d = l("618017"),
                c = l("980215"),
                f = l("235767"),
                m = l("190045"),
                p = l("419806"),
                h = l("373469"),
                E = l("42203"),
                T = l("26989"),
                S = l("957255"),
                _ = l("102985"),
                g = l("987772"),
                A = l("164424"),
                I = l("387111"),
                v = l("158998"),
                N = l("713135"),
                C = l("765698"),
                y = l("906889"),
                M = l("10532"),
                x = l("648149"),
                O = l("915712"),
                R = l("261523"),
                L = l("369869"),
                P = l("545590"),
                j = l("972595"),
                b = l("316095"),
                D = l("802279"),
                U = l("577172"),
                w = l("465215"),
                F = l("301998"),
                G = l("379657"),
                Y = l("853780"),
                k = l("574191"),
                V = l("491250"),
                B = l("453649"),
                H = l("49111"),
                W = l("782340"),
                z = l("956330"),
                K = l("477691"),
                Z = l("398664");

            function X(e) {
                var t, l, s;
                let {
                    activity: X,
                    customStatusActivity: J,
                    user: Q,
                    displayProfile: q,
                    guild: $,
                    guildMember: ee,
                    channelId: et,
                    onClose: el,
                    setNote: en = !1,
                    canDM: ea,
                    hideNote: es = !1,
                    showCopiableUsername: ei = !1
                } = e, er = (0, r.useStateFromStores)([_.default], () => _.default.hidePersonalInformation), eo = (0, r.useStateFromStores)([N.default], () => {
                    var e;
                    return null === (e = N.default.getUserProfile(Q.id)) || void 0 === e ? void 0 : e.application
                }), eu = (0, r.useStateFromStores)([h.default], () => null != h.default.getAnyStreamForUser(Q.id)), ed = (0, B.useGetVoiceChannelInfoForVoiceActivitySection)(Q.id, null == $ ? void 0 : $.id), ec = !eu && null != ed, {
                    showVoiceActivityInProfile: ef
                } = C.VoiceActivityProfileExperiment.useExperiment({
                    location: "user popout"
                }, {
                    autoTrackExposure: ec
                }), [em, ep] = a.useState(!1), [eh, eE] = a.useState(!1), eT = (0, r.useStateFromStores)([E.default], () => E.default.getChannel(et)), eS = (0, r.useStateFromStores)([S.default], () => S.default.can(H.Permissions.USE_CLYDE_AI, eT)), {
                    profileTheme: e_
                } = (0, y.default)(Q, q), eg = a.useRef(null), [eA, eI] = a.useState(!0), ev = a.useCallback(() => {
                    let {
                        current: e
                    } = eg;
                    null != e && eI(0 === e.getScrollerState().scrollTop)
                }, []), eN = (0, d.canEditClydeAIProfile)($), eC = (0, c.canUseCustomClydeProfiles)($), ey = (0, r.useStateFromStores)([T.default], () => T.default.isMember(null == $ ? void 0 : $.id, Q.id));
                if (a.useLayoutEffect(() => {
                        var e;
                        let {
                            current: t
                        } = eg;
                        null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
                            top: 0
                        }))
                    }, []), Q.isSystemUser()) return null;
                if (Q.isNonUserBot() && !Q.isClyde()) return (0, n.jsx)(V.default, {
                    user: Q,
                    nickname: null,
                    pronouns: null,
                    className: z.usernameSection,
                    lastSection: !0
                });
                let eM = null !== (t = I.default.getNickname(null == $ ? void 0 : $.id, et, Q)) && void 0 !== t ? t : v.default.getName(Q);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(V.default, {
                        className: z.usernameSection,
                        user: Q,
                        nickname: eM,
                        pronouns: null == q ? void 0 : q.pronouns,
                        usernameIcon: Q.hasAvatarForGuild(null == $ ? void 0 : $.id) && (0, n.jsx)(x.default, {
                            user: Q,
                            nickname: eM
                        }),
                        shouldCopyOnClick: ei
                    }), Q.isClyde() ? (0, n.jsx)("div", {
                        className: z.lastEditedByContainer,
                        children: (0, n.jsx)(f.default, {
                            className: z.lastEditedByTag,
                            guildId: null == $ ? void 0 : $.id
                        })
                    }) : null, (0, n.jsxs)(o.HeadingLevel, {
                        children: [(0, n.jsx)(D.default, {
                            className: z.customStatusSection,
                            customStatusActivity: J
                        }), (0, n.jsx)(M.default, {
                            className: z.divider
                        }), Q.isClyde() && eN && null != $ ? !ey && eC ? eS && !eh ? (0, n.jsx)(o.Button, {
                            className: z.editClydeButton,
                            innerClassName: z.editClydeButtonInner,
                            submitting: em,
                            onClick: async () => {
                                ep(!0);
                                try {
                                    await (0, u.addClydeGuildMember)($.id), ep(!1)
                                } catch (e) {
                                    ep(!1), eE(!0)
                                }
                            },
                            children: W.default.Messages.CLYDE_ADD_CLYDE
                        }) : (0, n.jsxs)(o.Text, {
                            className: z.clydeErrorText,
                            variant: "text-sm/normal",
                            color: "text-danger",
                            children: [(0, n.jsx)("img", {
                                className: z.sadClyde,
                                src: Z,
                                alt: W.default.Messages.SAD_CLYDE_ALT_TEXT
                            }), " ", W.default.Messages.CANNOT_ADD_CLYDE]
                        }) : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)(o.Button, {
                                className: z.editClydeButton,
                                innerClassName: z.editClydeButtonInner,
                                onClick: () => {
                                    null == el || el(), (0, m.default)($.id)
                                },
                                children: [(0, n.jsx)(g.default, {
                                    className: z.pencilIcon
                                }), " ", W.default.Messages.EDIT_CLYDE]
                            }), eC ? (0, n.jsxs)(o.Button, {
                                className: z.editClydeButton,
                                innerClassName: z.editClydeButtonInner,
                                color: o.ButtonColors.WHITE,
                                onClick: () => {
                                    null == el || el(), (0, p.default)($.id)
                                },
                                children: [(0, n.jsx)(A.default, {
                                    className: z.pencilIcon
                                }), " ", W.default.Messages.SHARE]
                            }) : null]
                        }) : null, (0, n.jsxs)(o.AdvancedScroller, {
                            className: i(z.scroller, {
                                [z.scrollerSeparator]: !eA
                            }),
                            onScroll: ev,
                            ref: eg,
                            children: [(0, n.jsx)(P.default, {
                                user: Q,
                                guildId: null == $ ? void 0 : $.id
                            }), (0, n.jsx)(L.default, {
                                isUsingGuildBio: null !== (l = null == q ? void 0 : q.isUsingGuildMemberBio()) && void 0 !== l && l,
                                bio: null == q ? void 0 : q.bio,
                                guild: $,
                                hidePersonalInformation: er
                            }), Q.isClyde() ? (0, n.jsx)(j.default, {}) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(w.default, {
                                    userId: Q.id,
                                    guild: $,
                                    guildMember: ee
                                }), ef && ec && (0, n.jsx)(B.default, {
                                    voiceChannel: ed.voiceChannel,
                                    voiceGuild: ed.voiceGuild,
                                    onClose: el,
                                    color: K.buttonColor
                                }), (0, n.jsx)(O.default, {
                                    activity: X,
                                    user: Q,
                                    guild: $,
                                    channelId: et,
                                    onClose: el
                                }), (null == eo ? void 0 : eo.popularApplicationCommandIds) != null && null != eT ? (0, n.jsx)(G.default, {
                                    applicationId: eo.id,
                                    commandIds: eo.popularApplicationCommandIds,
                                    channel: eT,
                                    guildId: null == $ ? void 0 : $.id,
                                    onClick: el
                                }) : null, (0, n.jsx)(R.default, {
                                    user: Q,
                                    guildId: null == $ ? void 0 : $.id
                                }), (0, n.jsx)(k.default, {
                                    user: Q,
                                    guild: $,
                                    guildMember: ee,
                                    showBorder: null !== (s = null == q ? void 0 : q.canEditThemes) && void 0 !== s && s
                                }), (0, n.jsx)(b.default, {
                                    userId: Q.id,
                                    channelId: et,
                                    guild: $,
                                    onClose: el,
                                    theme: e_
                                }), null != eo && void 0 !== et && (0, n.jsx)(Y.default, {
                                    channelId: et,
                                    applicationId: eo.id
                                }), (0, n.jsx)(F.default, {
                                    user: Q,
                                    setNote: en,
                                    autoFocus: !ea,
                                    lastSection: !ea,
                                    hideNote: er || es
                                })]
                            }), (0, n.jsx)(U.default, {
                                user: Q,
                                setNote: en,
                                canDM: ea,
                                onClose: el,
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
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("463848"),
                s = l("777003"),
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
                return (0, n.jsx)(s.default, {
                    children: (0, n.jsx)(a.default, {
                        type: a.UserActivityTypes.USER_POPOUT_V2,
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
            var a = l("77078"),
                s = l("899604"),
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
                }), p = null == m ? void 0 : null === (t = m.sku_benefits) || void 0 === t ? void 0 : t.benefits;
                return null != c && f && null != p && 0 !== p.length ? (0, n.jsxs)(r.default, {
                    children: [(0, n.jsx)(a.Heading, {
                        variant: "eyebrow",
                        className: d.title,
                        children: o.default.Messages.BOT_PROFILE_BENEFITS_HEADING
                    }), (0, n.jsx)("div", {
                        className: u.benefitsContainer,
                        children: p.map((e, t) => (0, n.jsx)(s.default, {
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
                    return A
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                s = l("472861"),
                i = l("77078"),
                r = l("150216"),
                o = l("90592"),
                u = l("910861"),
                d = l("153335"),
                c = l("191814"),
                f = l("8161"),
                m = l("613676"),
                p = l("713135"),
                h = l("999203"),
                E = l("609734"),
                T = l("777003"),
                S = l("49111"),
                _ = l("782340"),
                g = l("431375");

            function A(e) {
                let {
                    user: t,
                    guildId: l
                } = e, s = (0, a.useStateFromStores)([p.default], () => {
                    var e;
                    return null === (e = p.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
                }), i = null != s && (0, m.canInstallApplication)(s.id, s.customInstallUrl, s.installParams), {
                    botUpgradeable: o,
                    subscriptionGroupListing: u
                } = (0, h.default)({
                    user: t,
                    guildId: l
                }), {
                    enabled: d
                } = r.appStorefrontExperiment.useExperiment({
                    location: "BotButtonsSection"
                });
                return i || o ? (0, n.jsx)(T.default, {
                    children: (0, n.jsxs)("div", {
                        className: g.buttonsContainer,
                        children: [(0, n.jsx)(E.default, {
                            application: s,
                            className: g.button
                        }), o && (d ? (0, n.jsx)(v, {
                            app: s,
                            listing: u,
                            guildId: l
                        }) : (0, n.jsx)(I, {
                            guildId: l,
                            listing: u
                        }))]
                    })
                }) : null
            }

            function I(e) {
                let {
                    listing: t,
                    guildId: l
                } = e, a = null != t ? (0, o.getPayableSubscriptionListing)(t) : null, {
                    openModal: s
                } = (0, d.default)({
                    listing: a,
                    guildId: l,
                    groupListingId: null == t ? void 0 : t.id,
                    showBenefitsFirst: !0,
                    analyticsLocation: S.AnalyticsLocations.BOT_PROFILE_POPOUT
                });
                return (0, n.jsx)(u.default, {
                    onClick: s,
                    className: g.button,
                    children: (0, n.jsxs)("div", {
                        className: g.botUpgradeButtonContent,
                        children: [(0, n.jsx)(f.default, {
                            width: 16,
                            height: 16
                        }), (0, n.jsx)(c.default, {
                            size: 4,
                            horizontal: !0
                        }), _.default.Messages.BOT_PROFILE_UPGRADE_CTA]
                    })
                })
            }

            function v(e) {
                let {
                    app: t,
                    listing: a,
                    guildId: r
                } = e;
                return null == t || null == a || null == r ? null : (0, n.jsx)(u.default, {
                    onClick: () => (function(e, t, a) {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: s
                            } = await l.el("474956").then(l.bind(l, "474956"));
                            return l => (0, n.jsx)(s, {
                                transitionState: l.transitionState,
                                onClose: l.onClose,
                                appId: e.id,
                                subscriptionGroupListing: t,
                                guildId: a
                            })
                        })
                    })(t, a, r),
                    className: g.button,
                    children: (0, n.jsxs)("div", {
                        className: g.botUpgradeButtonContent,
                        children: [(0, n.jsx)(s.ShopSparkleIcon, {
                            width: 16,
                            height: 16,
                            color: "#fff"
                        }), (0, n.jsx)(c.default, {
                            size: 4,
                            horizontal: !0
                        }), _.default.Messages.STOREFRONT]
                    })
                })
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
            var a = l("213736"),
                s = l("777003"),
                i = l("814076");

            function r(e) {
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
                    return v
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("446674"),
                o = l("77078"),
                u = l("851387"),
                d = l("216049"),
                c = l("915639"),
                f = l("102985"),
                m = l("461380"),
                p = l("713135"),
                h = l("824140"),
                E = l("401642"),
                T = l("777003"),
                S = l("590456"),
                _ = l("49111"),
                g = l("782340"),
                A = l("843482"),
                I = l("814076");

            function v(e) {
                var t, l;
                let s, v, {
                        userId: N,
                        channelId: C,
                        guild: y,
                        theme: M,
                        onClose: x,
                        className: O
                    } = e,
                    R = (0, d.default)(y, N, C),
                    [L, P] = a.useState(new Set),
                    j = (0, r.useStateFromStores)([p.default], () => p.default.getUserProfile(N)),
                    b = null !== (t = null == j ? void 0 : j.connectedAccounts) && void 0 !== t ? t : [],
                    D = null !== (l = null == j ? void 0 : j.applicationRoleConnections) && void 0 !== l ? l : [],
                    U = (0, r.useStateFromStores)([f.default], () => f.default.hidePersonalInformation),
                    w = (0, r.useStateFromStores)([c.default], () => c.default.locale);
                if (a.useEffect(() => {
                        (null == y ? void 0 : y.id) != null && (null == R ? void 0 : R.id) != null && u.default.fetchGuildRoleConnectionsEligibility(y.id, R.id).then(e => {
                            let t = new Set;
                            for (let l of e)
                                for (let {
                                        connection_type: e
                                    }
                                    of l) t.add(e);
                            P(t)
                        })
                    }, [null == y ? void 0 : y.id, null == R ? void 0 : R.id]), U || null == R) return null;
                let F = Array.from(L).map(e => {
                    let t = b.find(t => t.type === e);
                    return null == t ? null : (0, n.jsx)(h.ConnectedUserAccount, {
                        connectedAccount: t,
                        theme: M,
                        locale: w,
                        userId: N
                    }, "".concat(t.type, ":").concat(t.id))
                }).filter(e => null != e);
                return (F.length > 0 && (s = (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(o.Heading, {
                        variant: "eyebrow",
                        className: I.title,
                        children: g.default.Messages.CONNECTIONS
                    }), (0, n.jsxs)("div", {
                        className: i(A.connectionsContainer, O),
                        children: [F, (0, n.jsxs)(o.Clickable, {
                            onClick: function() {
                                (0, E.openUserProfileModal)({
                                    userId: N,
                                    guildId: null == y ? void 0 : y.id,
                                    channelId: C,
                                    section: S.UserProfileSections.USER_INFO_CONNECTIONS,
                                    analyticsLocation: {
                                        section: _.AnalyticsSections.PROFILE_POPOUT
                                    }
                                }), null == x || x()
                            },
                            className: A.connections,
                            children: [(0, n.jsx)(o.Text, {
                                variant: "text-md/semibold",
                                color: "interactive-active",
                                className: A.connectionsText,
                                children: g.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_ALL
                            }), (0, n.jsx)(m.default, {
                                direction: m.default.Directions.RIGHT,
                                className: A.connectionsCaret
                            })]
                        })]
                    })]
                })), D.length > 0 && (v = (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(o.Heading, {
                        variant: "eyebrow",
                        className: I.title,
                        children: g.default.Messages.APPS
                    }), (0, n.jsx)("div", {
                        className: i(A.connectionsContainer, O),
                        children: D.map(e => (0, n.jsx)(h.ConnectedApplicationUserRoleAccount, {
                            applicationRoleConnection: e,
                            locale: w
                        }, e.application.id))
                    })]
                })), null == s && null == v) ? null : (0, n.jsxs)(T.default, {
                    children: [v, s]
                })
            }
        },
        577172: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("394846"),
                o = l("77078"),
                u = l("450911"),
                d = l("36341"),
                c = l("109264"),
                f = l("158998"),
                m = l("777003"),
                p = l("782340"),
                h = l("242379"),
                E = l("107680"),
                T = l("379539"),
                S = l("714073"),
                _ = l("980923"),
                g = l("779585"),
                A = l("900143"),
                I = l("923337");
            let v = [I, E, _, S, g, T, A];

            function N(e) {
                let {
                    userId: t
                } = e, [l, s] = a.useState(!1);
                return a.useLayoutEffect(() => {
                    !l && s(!0)
                }, [l]), (0, n.jsx)("div", {
                    className: h.wumpusWrapper,
                    children: (0, n.jsxs)("div", {
                        className: i(h.wumpus, {
                            [h.wumpusShown]: l
                        }),
                        children: [(0, n.jsx)("img", {
                            className: h.wumpusImage,
                            alt: p.default.Messages.IMG_ALT_ICON.format({
                                name: p.default.Messages.WUMPUS
                            }),
                            src: function() {
                                let e = parseInt(t.slice(-6), 10);
                                return v[e % v.length]
                            }()
                        }), (0, n.jsx)("span", {
                            className: h.wumpusTooltip,
                            children: p.default.Messages.USER_POPOUT_WUMPUS_TOOLTIP
                        })]
                    })
                })
            }

            function C(e) {
                let {
                    user: t,
                    setNote: l,
                    canDM: a,
                    onClose: s,
                    inClydeProfilesExperiment: i = !1
                } = e;
                if (t.isNonUserBot() && !t.isClyde() || t.isClyde() && i || !a) return null;
                let E = a && (0, f.isNewUser)(t) && !t.bot;
                return (0, n.jsxs)(m.default, {
                    className: h.section,
                    lastSection: !0,
                    children: [E && a ? (0, n.jsx)(N, {
                        userId: t.id
                    }) : null, a && t.isClyde() ? (0, n.jsxs)(o.Button, {
                        className: h.messageClydeButton,
                        innerClassName: h.messageClydeButtonInner,
                        onClick: () => {
                            u.default.openPrivateChannel(t.id)
                        },
                        fullWidth: !0,
                        look: o.ButtonLooks.INVERTED,
                        children: [(0, n.jsx)(c.default, {
                            width: 16,
                            height: 16,
                            className: h.messageClydeButtonIcon
                        }), p.default.Messages.CLYDE_SEND_MESSAGE]
                    }) : null, a && !t.isClyde() ? (0, n.jsx)(d.default, {
                        className: h.messageInputContainer,
                        inputClassName: h.messageInput,
                        user: t,
                        onClose: () => null == s ? void 0 : s(),
                        autoFocus: !r.isMobile && !l
                    }) : null]
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
                    children: [(0, n.jsx)(a.Heading, {
                        variant: "eyebrow",
                        className: u.title,
                        children: r.default.Messages.NOTE
                    }), (0, n.jsx)(s.default, {
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
                    return E
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("77078"),
                i = l("716241"),
                r = l("240249"),
                o = l("781423"),
                u = l("252063"),
                d = l("599110"),
                c = l("777003"),
                f = l("49111"),
                m = l("782340"),
                p = l("640329"),
                h = l("814076");

            function E(e) {
                let {
                    applicationId: t,
                    commandIds: l,
                    channel: E,
                    guildId: T,
                    onClick: S
                } = e;
                (0, u.usePrivateChannelIntegrationState)({
                    channelId: E.id
                });
                let {
                    commands: _
                } = r.useCommandsForApplication(E, t, l), g = a.useMemo(() => null == _ ? void 0 : _.filter(e => !0 !== e.nsfw), [_]), A = a.useCallback(e => {
                    null == S || S(), d.default.track(f.AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, {
                        application_id: t,
                        command_id: e,
                        guild_id: T,
                        ...(0, i.collectChannelAnalyticsMetadataFromId)(E.id)
                    })
                }, [t, E.id, T, S]);
                return null == g || 0 === g.length ? null : (0, n.jsxs)(c.default, {
                    children: [(0, n.jsx)(s.Heading, {
                        variant: "eyebrow",
                        className: h.title,
                        children: m.default.Messages.BOT_PROFILE_SLASH_COMMANDS
                    }), (0, n.jsx)("ul", {
                        className: p.popularApplicationCommandsList,
                        children: g.map(e => (0, n.jsx)("li", {
                            children: (0, n.jsx)(o.CommandClickable, {
                                commandId: e.id,
                                commandName: e.displayName,
                                commandDescription: e.displayDescription,
                                onClick: A,
                                guildId: T,
                                channelId: E.id
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
                    children: [(0, n.jsx)(a.Heading, {
                        variant: "eyebrow",
                        className: d.title,
                        children: o.default.Messages.BOT_PROFILE_MANAGE_PRIVATE_CHANNEL_INTEGRATION
                    }), (0, n.jsx)(a.Button, {
                        onClick: () => (0, s.deletePrivateChannelIntegration)(l, t),
                        size: a.Button.Sizes.ICON,
                        color: a.Button.Colors.RED,
                        look: a.Button.Looks.LINK,
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
            var a = l("414456"),
                s = l.n(a),
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
                    guildMember: a,
                    showBorder: f
                } = e;
                return null == l || null == a ? null : (0, n.jsxs)(o.default, {
                    children: [(0, n.jsx)(i.Heading, {
                        variant: "eyebrow",
                        className: c.title,
                        children: u.default.Messages.ROLES_LIST.format({
                            numRoles: a.roles.length
                        })
                    }), (0, n.jsx)(r.default, {
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
        453649: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useGetVoiceChannelInfoForVoiceActivitySection: function() {
                    return _
                },
                default: function() {
                    return g
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                s = l("77078"),
                i = l("242740"),
                r = l("42203"),
                o = l("305961"),
                u = l("957255"),
                d = l("945956"),
                c = l("800762"),
                f = l("476263"),
                m = l("368121"),
                p = l("777003"),
                h = l("49111"),
                E = l("782340"),
                T = l("814076"),
                S = l("293773");

            function _(e, t) {
                let l = (0, a.useStateFromStores)([c.default], () => {
                        var l;
                        return null !== (l = c.default.getVoiceState(t, e)) && void 0 !== l ? l : c.default.getVoiceStateForUser(e)
                    }, [t, e]),
                    n = (0, a.useStateFromStores)([r.default], () => null != l && null != l.channelId ? r.default.getChannel(l.channelId) : null, [l]),
                    s = (0, a.useStateFromStores)([o.default], () => null != n ? o.default.getGuild(n.guild_id) : null, [n]),
                    i = (0, a.useStateFromStores)([u.default], () => null != n && u.default.can(h.Permissions.VIEW_CHANNEL, n), [n]),
                    d = (0, a.useStateFromStores)([u.default], () => null != n && u.default.can(h.Permissions.CONNECT, n), [n]);
                return i && d && null != n && null != s ? {
                    voiceGuild: s,
                    voiceChannel: n
                } : null
            }

            function g(e) {
                let {
                    voiceGuild: t,
                    voiceChannel: l,
                    onClose: r,
                    color: o
                } = e, u = (0, a.useStateFromStores)([d.default], () => d.default.getChannelId() === l.id), c = u ? E.default.Messages.PROFILE_OPEN_VOICE_CHANNEL : l.isGuildStageVoice() ? E.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : E.default.Messages.PROFILE_JOIN_VOICE_CHANNEL;
                return (0, n.jsxs)(p.default, {
                    children: [(0, n.jsx)(s.Heading, {
                        variant: "eyebrow",
                        className: T.title,
                        children: E.default.Messages.PROFILE_IN_VOICE_CALL
                    }), (0, n.jsxs)("div", {
                        className: S.voiceDisplayContainer,
                        children: [(0, n.jsxs)("div", {
                            className: S.iconContainer,
                            children: [(0, n.jsx)(f.default, {
                                size: f.default.Sizes.SMALL,
                                active: !0,
                                guild: t
                            }), (0, n.jsx)("div", {
                                className: S.speakerIconContainer,
                                children: (0, n.jsx)(m.default, {
                                    className: S.speakerIcon
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            className: S.voiceChannelInfo,
                            children: [(0, n.jsx)(s.Text, {
                                variant: "text-sm/semibold",
                                children: l.name
                            }), (0, n.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: null == t ? void 0 : t.name
                            })]
                        })]
                    }), (0, n.jsx)(s.Button, {
                        onClick: function() {
                            null != l && (i.default.handleVoiceConnect({
                                channel: l,
                                connected: d.default.getChannelId() === l.id,
                                needSubscriptionToAccess: !1
                            }), null == r || r())
                        },
                        color: null != o ? o : s.Button.Colors.PRIMARY,
                        size: s.Button.Sizes.SMALL,
                        fullWidth: !0,
                        children: c
                    })]
                })
            }
        },
        339521: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
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
                } = e, n = Math.floor(t) % 60, a = Math.floor(t / 60) % 60, s = Math.floor(t / 3600);
                return 0 === s ? l ? "".concat(c(a), ":").concat(c(n)) : "".concat(a, ":").concat(c(n)) : l ? "".concat(c(s), ":").concat(c(a), ":").concat(c(n)) : "".concat(s, ":").concat(c(a), ":").concat(c(n))
            }
            class m extends a.PureComponent {
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
                        themed: a,
                        singleLine: s = !1
                    } = this.props, {
                        now: r
                    } = this.state, c = (t - e) / 1e3, m = Math.max(Math.min((r - e) / 1e3, c), 0);
                    return s ? (0, n.jsxs)("div", {
                        className: i(l, {
                            [u.themed]: a
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
                            [u.themed]: a
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
            var p = m
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
            var a = l("414456"),
                s = l.n(a),
                i = l("227422"),
                r = l("476263"),
                o = l("547620"),
                u = l("646718"),
                d = l("257920");
            let c = {
                    XXSMALL: d.xxsmall,
                    XSMALL: d.xsmall,
                    SMALL: d.small,
                    MEDIUM: d.medium,
                    LARGE: d.large
                },
                f = e => {
                    let t, {
                        game: a,
                        guild: f,
                        skuId: m,
                        pid: p,
                        className: h,
                        guildClassName: E,
                        size: T = c.MEDIUM,
                        ...S
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
                        }(m)), null != a && null == t && (t = a.getIconURL(function(e) {
                            switch (e) {
                                case c.XXSMALL:
                                    return 16;
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
                        }(T))), null == (t = (0, i.default)(p, t)) && null != f) {
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
                        }(T);
                        return (0, n.jsx)(r.default, {
                            className: s(d.gameIcon, E, h),
                            guild: f,
                            size: e
                        })
                    }
                    return null == t ? (0, n.jsx)(o.default, {
                        className: s(d.gameIcon, T, h)
                    }) : (0, n.jsx)("div", {
                        ...S,
                        className: s(d.gameIcon, T, h),
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
                    return a.TimeUnits
                },
                getTimeAndUnit: function() {
                    return a.getTimeAndUnit
                },
                default: function() {
                    return s
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("512330"),
                s = (0, a.default)(function(e) {
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
                    return n
                }
            }), l("222007");
            var n, a = l("37983"),
                s = l("884691"),
                i = l("77078");
            class r extends s.PureComponent {
                render() {
                    let {
                        text: e,
                        lastItem: t,
                        className: l
                    } = this.props;
                    return (0, a.jsxs)("span", {
                        children: [(0, a.jsx)(i.Anchor, {
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
            n = class extends s.PureComponent {
                render() {
                    let e = this.props.artists.split(";");
                    if (!this.props.canOpen) return e.join(", ");
                    let t = e.length - 1;
                    return e.map((e, l) => (0, a.jsx)(r, {
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
                    return n
                },
                default: function() {
                    return z
                }
            }), l("702976"), l("222007");
            var n, a, s = l("37983"),
                i = l("884691"),
                r = l("414456"),
                o = l.n(r),
                u = l("627445"),
                d = l.n(u),
                c = l("819855"),
                f = l("77078"),
                m = l("832627"),
                p = l("841098"),
                h = l("376556"),
                E = l("609030"),
                T = l("309570"),
                S = l("985677"),
                _ = l("429928"),
                g = l("36539"),
                A = l("502651"),
                I = l("419830"),
                v = l("808742"),
                N = l("342845"),
                C = l("239380"),
                y = l("118033"),
                M = l("315102"),
                x = l("568734"),
                O = l("474293"),
                R = l("339521"),
                L = l("145131"),
                P = l("953109"),
                j = l("98292"),
                b = l("280174"),
                D = l("963422"),
                U = l("587974"),
                w = l("49111"),
                F = l("954016"),
                G = l("782340"),
                Y = l("843616");
            (a = n || (n = {})).USER_POPOUT = "UserPopout", a.USER_POPOUT_V2 = "UserPopoutV2", a.ACTIVITY_FEED = "ActivityFeed", a.PROFILE = "Profile", a.PROFILE_V2 = "ProfileV2", a.STREAM_PREVIEW = "StreamPreview", a.VOICE_CHANNEL = "VoiceChannel";
            let k = {
                    StreamPreview: [108, 60],
                    UserPopout: [108, 60],
                    UserPopoutV2: [108, 60],
                    VoiceChannel: [108, 60],
                    Profile: [162, 90],
                    ProfileV2: [162, 90],
                    ActivityFeed: [900, 500]
                },
                {
                    getAssetImage: V
                } = l("550368"),
                B = (0, m.default)(class extends i.PureComponent {
                    render() {
                        return (0, s.jsx)("div", {
                            className: Y.timestamp,
                            children: this.props.message
                        })
                    }
                });

            function H(e) {
                let t, {
                        activity: l
                    } = e,
                    n = (0, p.default)();
                if ((0, _.default)(l) && (t = w.PlatformTypes.SPOTIFY), null != l.platform && [w.ActivityGamePlatforms.PS4, w.ActivityGamePlatforms.PS5].includes(l.platform) && (t = w.PlatformTypes.PLAYSTATION), null == t) return null;
                let a = h.default.get(t);
                return (0, s.jsx)("img", {
                    alt: "",
                    src: (0, c.isThemeLight)(n) ? a.icon.lightSVG : a.icon.darkSVG,
                    className: Y.platformIcon
                })
            }
            class W extends i.PureComponent {
                get activity() {
                    let {
                        activity: e,
                        activityGuild: t
                    } = this.props;
                    return null != t && (null == e ? void 0 : e.type) !== w.ActivityTypes.PLAYING && (null == e ? void 0 : e.type) !== w.ActivityTypes.WATCHING && (null == e ? void 0 : e.type) !== w.ActivityTypes.HANG_STATUS ? {
                        type: w.ActivityTypes.PLAYING,
                        name: G.default.Messages.SHARING_SCREEN
                    } : e
                }
                getTypeClass(e, t) {
                    return (0, O.getClass)(Y, e, this.props.type, t)
                }
                isStreamerOnTypeProfile() {
                    return (0, A.default)(this.activity) && ("Profile" === this.props.type || "ProfileV2" === this.props.type)
                }
                isStreamerOnTypeActivityFeed() {
                    return (0, A.default)(this.activity) && "ActivityFeed" === this.props.type
                }
                renderHeader(e) {
                    let t;
                    let {
                        hideHeader: l,
                        activityGuild: n,
                        channel: a,
                        renderHeaderAccessory: i,
                        type: r
                    } = this.props, u = this.activity;
                    if (l || null == u) return null;
                    let {
                        name: d
                    } = u;
                    switch (u.type) {
                        case w.ActivityTypes.STREAMING:
                            t = G.default.Messages.USER_ACTIVITY_HEADER_LIVE_ON_PLATFORM.format({
                                platform: [w.PlatformTypes.TWITCH, w.PlatformTypes.YOUTUBE].includes(d.toLowerCase()) ? d : h.default.get(w.PlatformTypes.TWITCH).name
                            });
                            break;
                        case w.ActivityTypes.LISTENING:
                            t = G.default.Messages.USER_ACTIVITY_HEADER_LISTENING.format({
                                name: d
                            });
                            break;
                        case w.ActivityTypes.WATCHING:
                            t = G.default.Messages.USER_ACTIVITY_HEADER_WATCHING.format({
                                name: d
                            });
                            break;
                        case w.ActivityTypes.PLAYING:
                            t = (0, E.default)(u);
                            break;
                        case w.ActivityTypes.COMPETING:
                            t = G.default.Messages.USER_ACTIVITY_HEADER_COMPETING.format({
                                name: d
                            })
                    }
                    if (null != n) {
                        var c;
                        t = (0, x.hasFlag)(null !== (c = null == u ? void 0 : u.flags) && void 0 !== c ? c : 0, w.ActivityFlags.EMBEDDED) ? u.type === w.ActivityTypes.WATCHING ? G.default.Messages.EMBEDDED_ACTIVITIES_WATCHING_IN_GUILD.format({
                            guildName: n.name
                        }) : G.default.Messages.EMBEDDED_ACTIVITIES_PLAYING_IN_GUILD.format({
                            guildName: n.name
                        }) : G.default.Messages.USER_ACTIVITY_HEADER_STREAMING_TO_GUILD.format({
                            server: n.name
                        })
                    }(null == u ? void 0 : u.type) === w.ActivityTypes.HANG_STATUS && (t = G.default.Messages.STATUS_LEAD_IN_JUST);
                    let m = (0, I.getChannelIconComponent)(a, n);
                    return null != a && (t = a.name), (0, s.jsxs)("div", {
                        className: Y.headerContainer,
                        children: [null != a && null !== m ? (0, s.jsx)(m, {
                            className: o(Y.icon)
                        }) : null, (0, s.jsx)(f.Heading, {
                            className: (0, O.getClass)(Y, "headerText", e ? "EmptyBody" : "Normal"),
                            variant: "heading-deprecated-12/semibold",
                            color: "ProfileV2" === r ? "header-primary" : void 0,
                            children: (0, s.jsx)(j.default, {
                                children: t
                            })
                        }), null == i ? void 0 : i()]
                    })
                }
                renderXboxImage() {
                    return (0, s.jsx)("div", {
                        className: Y.assets,
                        children: (0, s.jsx)("img", {
                            alt: "",
                            src: h.default.get(w.PlatformTypes.XBOX).icon.customPNG,
                            className: o(this.getTypeClass("assetsLargeImage", "Xbox"))
                        })
                    })
                }
                renderImage(e) {
                    var t, l, n;
                    let a, r;
                    if (e.type === w.ActivityTypes.HANG_STATUS) return (0, s.jsx)("div", {
                        className: Y.assets,
                        children: (0, s.jsx)(N.default, {
                            hangStatusActivity: e,
                            className: o(Y.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
                        })
                    });
                    let {
                        type: u
                    } = this.props, {
                        assets: d,
                        application_id: c
                    } = e;
                    if (null == d || null == d.large_image && null == d.small_image) return null;
                    (0, A.default)(e) && (a = k[u]);
                    let m = (0, _.default)(e),
                        p = null != d.large_image ? (0, s.jsx)("img", {
                            alt: null !== (t = d.large_text) && void 0 !== t ? t : "",
                            src: V(c, d.large_image, null != a ? a : [F.ImageSizes.LARGE, F.ImageSizes.LARGE]),
                            className: o(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeProfile() || this.isStreamerOnTypeActivityFeed() ? w.PlatformTypes.TWITCH : ""), {
                                [null !== (l = this.getTypeClass("assetsLargeMask")) && void 0 !== l ? l : ""]: null != d.small_image
                            }, {
                                [Y.assetsLargeImageSpotify]: m
                            })
                        }) : null;
                    if (m) p = (0, s.jsx)(f.Anchor, {
                        onClick: this.handleOpenSpotifyAlbum,
                        children: p
                    });
                    else if ((0, y.isStageActivity)(e)) {
                        let t = (0, y.unpackStageChannelParty)(e);
                        if (null == t) return null;
                        p = (0, s.jsx)(U.default, {
                            mask: U.default.Masks.SQUIRCLE,
                            width: F.ImageSizes.SMALL,
                            height: F.ImageSizes.SMALL,
                            children: (0, s.jsx)("img", {
                                src: null !== (n = M.default.getGuildIconURL({
                                    id: t.guildId,
                                    icon: d.small_image,
                                    size: F.ImageSizes.SMALL
                                })) && void 0 !== n ? n : void 0,
                                className: Y.assetsLargeImageVoiceChannel,
                                alt: ""
                            })
                        })
                    }
                    return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (p = (0, s.jsxs)("div", {
                        className: Y.twitchImageContainer,
                        children: [(0, s.jsxs)("div", {
                            className: Y.twitchImageOverlay,
                            children: [(0, s.jsx)(f.H, {
                                className: Y.streamName,
                                children: e.name
                            }), (0, s.jsx)("div", {
                                className: Y.streamGame,
                                children: G.default.Messages.STREAMER_PLAYING.format({
                                    game: e.details
                                })
                            })]
                        }), (0, s.jsx)(f.Anchor, {
                            className: Y.twitchBackgroundImage,
                            href: e.url,
                            children: p
                        })]
                    })), !(0, y.isStageActivity)(e) && null != d.small_image && (r = (0, s.jsx)(f.Tooltip, {
                        text: "" !== d.small_text ? d.small_text : null,
                        position: "top",
                        children: e => {
                            var t;
                            return (0, s.jsx)("img", {
                                alt: null !== (t = d.small_text) && void 0 !== t ? t : "",
                                src: V(c, d.small_image, [F.ImageSizes.SMALL, F.ImageSizes.SMALL]),
                                className: this.getTypeClass("assetsSmallImage", null == p ? "WithoutLargeImage" : void 0),
                                ...e
                            })
                        }
                    })), null == p) ? (0, s.jsx)("div", {
                        className: Y.assets,
                        children: r
                    }) : (0, s.jsxs)("div", {
                        className: Y.assets,
                        children: [(0, s.jsx)(f.Tooltip, {
                            text: null != d.large_text ? d.large_text : null,
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
                        }), r]
                    })
                }
                renderGameImage(e) {
                    let {
                        user: t,
                        type: l,
                        application: n,
                        activityGuild: a
                    } = this.props;
                    return null != e.assets || (0, T.default)(e) || e.type !== w.ActivityTypes.PLAYING || "ActivityFeed" === l || t.bot ? null : null == n && null != a ? (0, s.jsx)("div", {
                        className: o(Y.gameIcon, Y.screenshareIcon)
                    }) : (0, s.jsx)(P.default, {
                        className: Y.gameIcon,
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
                        details: a,
                        type: i
                    } = e;
                    if (i === w.ActivityTypes.CUSTOM_STATUS) return null;
                    let r = (0, S.default)(e),
                        o = e.name,
                        u = o;
                    return (i === w.ActivityTypes.HANG_STATUS ? u = (0, v.getHangStatusText)(e) : r && null != l ? u = (0, s.jsx)("span", {
                        className: Y.activityName,
                        children: u
                    }) : !r && (o = a, u = a, (0, _.default)(e) && null != e.sync_id && null != a ? u = (0, s.jsx)(f.Anchor, {
                        className: Y.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: a
                    }) : (0, y.isStageActivity)(e) && (u = e.name)), null == u) ? null : (0, s.jsx)(f.Text, {
                        title: o,
                        variant: "text-sm/semibold",
                        className: (0, O.getClass)(Y, "name", t.bot || this.isStreamerOnTypeProfile() ? "wrap" : "normal"),
                        children: u
                    })
                }
                renderDetails(e) {
                    let t;
                    let {
                        details: l,
                        state: n
                    } = e, {
                        activityGuild: a
                    } = this.props, i = l, r = l;
                    if (e.type === w.ActivityTypes.CUSTOM_STATUS) i = n;
                    else if (e.type === w.ActivityTypes.HANG_STATUS) i = null != a ? G.default.Messages.HANG_STATUS_LOCATION.format({
                        guildName: a.name
                    }) : null, t = null != a ? () => {
                        (0, C.transitionToGuild)(a.id)
                    } : void 0;
                    else if (!(0, S.default)(e)) {
                        if (r = i = n, (0, _.default)(e) && null != n) i = G.default.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
                            artists: r,
                            artistsHook: (t, l) => (0, s.jsx)(D.default, {
                                artists: n,
                                linkClassName: Y.bodyLink,
                                canOpen: null != e.sync_id,
                                onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                            }, l)
                        });
                        else if ((0, y.isStageActivity)(e)) {
                            var o;
                            i = null === (o = e.assets) || void 0 === o ? void 0 : o.small_text
                        }
                    }
                    return null == i || 0 === i.length ? null : ((0, A.default)(e) && (i = G.default.Messages.STREAMER_PLAYING.format({
                        game: i
                    })), null != t) ? (0, s.jsx)(f.Clickable, {
                        onClick: t,
                        title: null != r ? r : void 0,
                        className: Y.clickableDetails,
                        children: i
                    }) : (0, s.jsx)("div", {
                        title: null != r ? r : void 0,
                        className: (0, A.default)(e) || (0, _.default)(e) ? Y.detailsWrap : Y.details,
                        children: i
                    })
                }
                renderTimePlayed(e) {
                    let {
                        activityGuild: t
                    } = this.props;
                    if (!(0, S.default)(e) || (0, _.default)(e)) return null;
                    let {
                        timestamps: l
                    } = e;
                    return null == l ? null : (0, T.default)(e) ? (0, s.jsx)(B, {
                        timestamps: l
                    }) : (0, s.jsx)(b.default, {
                        start: l.start,
                        location: b.default.Locations.USER_ACTIVITY,
                        className: Y.playTime,
                        isApplicationStreaming: null != t
                    })
                }
                renderTimeBar(e) {
                    if (!(0, _.default)(e)) return null;
                    let {
                        timestamps: t
                    } = e;
                    if (null == t) return null;
                    let {
                        start: l,
                        end: n
                    } = t;
                    return null == l || null == n ? null : (0, s.jsx)(R.default, {
                        start: l,
                        end: n,
                        className: this.getTypeClass("timeBar"),
                        themed: "VoiceChannel" === this.props.type || "UserPopout" === this.props.type || "UserPopoutV2" === this.props.type || "ProfileV2" === this.props.type
                    })
                }
                renderState(e, t) {
                    var l, n;
                    let a;
                    let {
                        state: i,
                        party: r,
                        assets: o
                    } = e, u = i, d = u;
                    return (!(0, S.default)(e) && (d = u = null == o ? void 0 : o.large_text, (0, _.default)(e) && null != u && (u = G.default.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
                        album: d,
                        albumHook: (t, l) => null != e.sync_id && null != d ? (0, s.jsx)(f.Anchor, {
                            className: Y.bodyLink,
                            onClick: this.handleOpenSpotifyAlbum,
                            children: d
                        }, l) : d
                    }))), null != u && 0 !== u.length && e.type !== w.ActivityTypes.CUSTOM_STATUS || (0, y.isStageActivity)(e)) ? ((null == r ? void 0 : r.size) == null && [(0, F.POKER_NIGHT_APPLICATION_ID)].includes(null !== (l = e.application_id) && void 0 !== l ? l : "") ? a = G.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
                        count: "0",
                        max: null !== (n = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== n ? n : 0
                    }) : (0, y.isStageActivity)(e) && (null == r ? void 0 : r.size) != null ? a = G.default.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
                        numSpeakers: r.size[0],
                        numListeners: r.size[1] - r.size[0]
                    }) : (null == r ? void 0 : r.size) != null && r.size.length >= 2 && (a = G.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
                        count: r.size[0],
                        max: r.size[1]
                    })), (0, s.jsxs)("div", {
                        className: Y.state,
                        children: [(0, s.jsx)("span", {
                            title: d,
                            children: u
                        }), null != a ? (0, s.jsxs)("span", {
                            children: [" ", a]
                        }) : null]
                    })) : null
                }
                render() {
                    let e;
                    let {
                        type: t,
                        renderActions: l,
                        className: n,
                        application: a
                    } = this.props, i = this.activity;
                    if (null == i || i.type === w.ActivityTypes.CUSTOM_STATUS) return null;
                    let r = "UserPopout" === t || "UserPopoutV2" === t,
                        u = "Profile" === t || "ProfileV2" === t,
                        d = "ActivityFeed" === t,
                        c = "StreamPreview" === t,
                        f = !1;
                    (0, g.default)(i) ? (e = this.renderXboxImage(), f = !0) : null == (e = this.renderImage(i)) && (f = null != (e = this.renderGameImage(i)));
                    let m = this.renderName(i),
                        p = this.renderDetails(i),
                        h = this.renderState(i, a),
                        E = this.renderTimePlayed(i),
                        T = null != l ? l() : null,
                        S = this.renderTimeBar(i),
                        _ = ![e, m, p, h, E, S, T].some(e => null != e);
                    return (0, s.jsxs)("div", {
                        className: o(this.getTypeClass("activity"), n),
                        children: [this.renderHeader(_), (0, s.jsxs)("div", {
                            className: f ? Y.bodyAlignCenter : Y.bodyNormal,
                            children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, s.jsxs)(L.default.Child, {
                                className: o((0, O.getClass)(Y, "content", f ? "GameImage" : null != e ? "Images" : "NoImages", t)),
                                children: [m, p, h, E, r || c ? null : S, d ? T : null]
                            }), u ? T : null]
                        }), r ? S : null, r || c ? T : null, (0, s.jsx)(H, {
                            activity: i
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
            W.Types = n;
            var z = W
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
            var a = l("469563"),
                s = l("841248"),
                i = l("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        foreground: s,
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
                                className: s,
                                fill: a,
                                fillOpacity: ".8",
                                d: "M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z"
                            }), (0, n.jsx)("rect", {
                                className: s,
                                width: "38",
                                height: "38",
                                x: "1",
                                y: "1",
                                stroke: a,
                                strokeOpacity: ".4",
                                strokeWidth: "2",
                                rx: "5"
                            }), (0, n.jsx)("circle", {
                                className: s,
                                cx: "7",
                                cy: "7",
                                r: "2",
                                fill: a,
                                fillOpacity: ".4"
                            }), (0, n.jsx)("circle", {
                                className: s,
                                cx: "7",
                                cy: "33",
                                r: "2",
                                fill: a,
                                fillOpacity: ".4"
                            }), (0, n.jsx)("circle", {
                                className: s,
                                cx: "33",
                                cy: "7",
                                r: "2",
                                fill: a,
                                fillOpacity: ".4"
                            }), (0, n.jsx)("circle", {
                                className: s,
                                cx: "33",
                                cy: "33",
                                r: "2",
                                fill: a,
                                fillOpacity: ".4"
                            })]
                        })
                    })
                }, s.UnknownGameIcon, void 0, {
                    size: 24
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
                a = l("884691"),
                s = l("748820"),
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
                    } = e, d = a.useRef((0, s.v4)());
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
                }, r.EyePlusIcon, void 0, {
                    size: 16
                })
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
            var a = l("469563"),
                s = l("202804"),
                i = l("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: l = 16,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M20 6.00201H14V3.00201C14 2.45001 13.553 2.00201 13 2.00201H4C3.447 2.00201 3 2.45001 3 3.00201V22.002H5V14.002H10.586L8.293 16.295C8.007 16.581 7.922 17.011 8.076 17.385C8.23 17.759 8.596 18.002 9 18.002H20C20.553 18.002 21 17.554 21 17.002V7.00201C21 6.45001 20.553 6.00201 20 6.00201Z"
                        })
                    })
                }, s.FlagIcon, void 0, {
                    size: 16
                })
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
            var a = l("469563"),
                s = l("249978"),
                i = l("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
                        }), (0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
                        })]
                    })
                }, s.WindowLaunchIcon, void 0, {
                    size: 24
                })
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
            var a = l("469563"),
                s = l("816607"),
                i = l("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: l = 16,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: a,
                            className: s,
                            d: "M11.8 14a6.1 6.1 0 0 0 0 6H3v-2c0-2.7 5.3-4 8-4h.8zm-.8-2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6 1c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm-1 6.2l3-2.2-3-2.2v4.4z"
                        })
                    })
                }, s.UserPlayIcon, void 0, {
                    size: 16
                })
        },
        936629: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("75196");

            function s(e) {
                let {
                    width: t = 16,
                    height: l = 16,
                    color: s = "currentColor",
                    foreground: i,
                    ...r
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(r),
                    width: t,
                    height: l,
                    viewBox: "0 0 16 16",
                    children: (0, n.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, n.jsx)("path", {
                            className: i,
                            fill: s,
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
            var a = l("469563"),
                s = l("971918"),
                i = l("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: l = 16,
                        className: a,
                        fill: s = "currentColor",
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(r),
                        className: a,
                        width: t,
                        height: l,
                        viewBox: "0 0 16 16",
                        children: (0, n.jsx)("path", {
                            d: "M8.2738 8.49222L1.99997 9.09877L0.349029 14.3788C0.250591 14.691 0.347154 15.0322 0.595581 15.246C0.843069 15.4597 1.19464 15.5047 1.48903 15.3613L15.2384 8.7032C15.5075 8.57195 15.6781 8.29914 15.6781 8.00007C15.6781 7.70101 15.5074 7.4282 15.2384 7.29694L1.49839 0.634063C1.20401 0.490625 0.852453 0.535625 0.604941 0.749376C0.356493 0.963128 0.259941 1.30344 0.358389 1.61563L2.00932 6.89563L8.27093 7.50312C8.52405 7.52843 8.71718 7.74125 8.71718 7.99531C8.71718 8.24938 8.52406 8.46218 8.27093 8.4875L8.2738 8.49222Z",
                            fill: s
                        })
                    })
                }, s.SendMessageIcon, void 0, {
                    size: 16
                })
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
            var a = l("414456"),
                s = l.n(a),
                i = l("77078"),
                r = l("782340"),
                o = l("569313");

            function u(e) {
                let {
                    className: t,
                    src: l,
                    unicodeEmoji: a,
                    name: u,
                    size: d = 20,
                    enableTooltip: c = !0,
                    enableHeight: f = !0,
                    onClick: m
                } = e;
                if (null == l && null == a) return null;
                let p = e => {
                    let c = (0, n.jsx)("img", {
                        alt: "",
                        "aria-label": r.default.Messages.ROLE_ICON_ALT_TEXT.format({
                            name: u
                        }),
                        className: s(o.roleIcon, t, {
                            [o.clickable]: null != m
                        }),
                        height: f ? d : void 0,
                        src: l,
                        width: d,
                        ...e
                    });
                    return (null != a && (c = (0, n.jsx)("img", {
                        alt: "",
                        "aria-label": a.allNamesString,
                        className: s(o.roleIcon, t, {
                            [o.clickable]: null != m
                        }),
                        height: f ? d : void 0,
                        src: a.url,
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
                    children: e => p(e)
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
                a = l("49111"),
                s = l("782340");
            let i = [{
                check(e, t, l) {
                    if (!l || null == t.getGuildId()) return !1;
                    let a = n.default.extractEveryoneRole(e, t);
                    if (null == a || !n.default.shouldShowEveryoneGuard(a, t)) return !1;
                    let i = n.default.everyoneMemberCount(a, t),
                        r = Math.pow(10, Math.floor(Math.log10(i))),
                        o = s.default.Messages.EVERYONE_POPOUT_BODY;
                    return t.isForumPost() ? o = s.default.Messages.EVERYONE_POPOUT_BODY_FORUM_POST : t.isThread() && (o = s.default.Messages.EVERYONE_POPOUT_BODY_THREAD), {
                        body: o.format({
                            role: a,
                            count: (Math.trunc(i / r) * r).toLocaleString()
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
            }), l("222007");
            var n = l("627445"),
                a = l.n(n),
                s = l("884351"),
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
                let a = i.default.getProps(t.getGuildId(), t.id);
                return a.groups.forEach(t => {
                    ("@everyone" === e || t.id !== o.StatusTypes.OFFLINE) && (l += t.count)
                }), l
            }
            var c = {
                shouldShowEveryoneGuard: function(e, t) {
                    let l = t.getGuildId();
                    a(l, "isGuildChannel with null guildId");
                    let n = d(e, t);
                    return n > 30 && r.default.can(o.Permissions.MENTION_EVERYONE, t)
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
                    return h
                }
            }), l("222007");
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                s = l("913144"),
                i = l("135230"),
                r = l("979911"),
                o = l("401848"),
                u = l("697218"),
                d = l("599110"),
                c = l("267625"),
                f = l("719923"),
                m = l("49111"),
                p = l("782340");

            function h(e) {
                let {
                    openWarningPopout: t,
                    type: l,
                    content: h,
                    stickers: E,
                    uploads: T,
                    channel: S,
                    restrictMentions: _ = !0,
                    respectCooldown: g = !0
                } = e, A = f.default.canUseIncreasedMessageLength(u.default.getCurrentUser());
                return new Promise(e => (function(e) {
                    var t, l, u;
                    let {
                        openWarningPopout: f,
                        type: h,
                        content: E,
                        stickers: T,
                        uploads: S,
                        channel: _,
                        restrictMentions: g,
                        respectCooldown: A,
                        userCanUsePremiumMessageLength: I,
                        resolve: v
                    } = e;
                    if (0 === E.length && !(null === (t = h.submit) || void 0 === t ? void 0 : t.allowEmptyMessage) && (null == T || 0 === T.length) && (null == S || 0 === S.length)) {
                        v({
                            valid: !1,
                            failureReason: m.MessageRestrictionTypes.EMPTY_MESSAGE
                        });
                        return
                    }
                    let N = I ? m.MAX_MESSAGE_LENGTH_PREMIUM : m.MAX_MESSAGE_LENGTH;
                    if (E.length > N) {
                        if (I || null == _) {
                            ;
                            l = E.length, u = N, (0, a.openModal)(e => (0, n.jsx)(i.default, {
                                title: p.default.Messages.MESSAGE_TOO_LONG_HEADER,
                                body: p.default.Messages.MESSAGE_TOO_LONG_BODY_TEXT.format({
                                    currentLength: l,
                                    maxLength: u
                                }),
                                confirmText: p.default.Messages.OKAY,
                                ...e
                            })), d.default.track(m.AnalyticEvents.OPEN_MODAL, {
                                type: "Message Too Long Alert",
                                message_content_length: l
                            })
                        } else s.default.dispatch({
                            type: "MESSAGE_LENGTH_UPSELL",
                            channel: _,
                            content: E
                        });
                        v({
                            valid: !1,
                            failureReason: m.MessageRestrictionTypes.MESSAGE_TOO_LONG
                        });
                        return
                    }
                    if (null != _) {
                        if (null != _.getGuildId() && A && o.default.getSlowmodeCooldownGuess(_.id) > 0) {
                            v({
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
                                let n = e(E, _, g);
                                if (!1 !== n) {
                                    f({
                                        analyticsType: t,
                                        channel: _,
                                        onCancel: () => v({
                                            valid: !1,
                                            failureReason: m.MessageRestrictionTypes.SHOUTING_CANCELLED
                                        }),
                                        onConfirm: () => v({
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
                        (0, a.openModal)(e => (0, n.jsx)(i.default, {
                            title: p.default.Messages.MESSAGE_RATE_LIMITED_HEADER,
                            body: p.default.Messages.MESSAGE_RATE_LIMITED_BODY,
                            confirmText: p.default.Messages.MESSAGE_RATE_LIMITED_BUTTON,
                            ...e
                        }), {
                            onCloseRequest: m.NOOP
                        }), v({
                            valid: !1,
                            failureReason: m.MessageRestrictionTypes.RATE_LIMITED
                        });
                        return
                    }
                    v({
                        valid: !0
                    })
                })({
                    openWarningPopout: t,
                    type: l,
                    content: h,
                    stickers: E,
                    uploads: T,
                    channel: S,
                    restrictMentions: _,
                    respectCooldown: g,
                    userCanUsePremiumMessageLength: A,
                    resolve: e
                }))
            }
        }
    }
]);
//# sourceMappingURL=4453.dca020b41417f9b01ee6.js.map