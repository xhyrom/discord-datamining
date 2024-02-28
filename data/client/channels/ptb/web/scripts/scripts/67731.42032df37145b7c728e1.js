(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67731"], {
        318738: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updatePermission: function() {
                    return l
                },
                selectPermission: function() {
                    return u
                },
                setAdvancedMode: function() {
                    return a
                },
                init: function() {
                    return o
                },
                savePermissionUpdates: function() {
                    return d
                },
                saveAndClearPermissionUpdates: function() {
                    return f
                }
            });
            var r = n("913144"),
                i = n("929278"),
                s = n("450911");
            async function l(e, t, n, s) {
                let l = e.getGuildId();
                if (null != l && t === l) {
                    let t = await (0, i.checkDefaultChannelThresholdMetAfterChannelPermissionDeny)(e, s, n);
                    if (!t) return !1
                }
                r.default.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION",
                    id: t,
                    allow: n,
                    deny: s
                })
            }

            function u(e) {
                r.default.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION",
                    id: e
                })
            }

            function a(e) {
                r.default.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE",
                    advancedMode: e
                })
            }

            function o() {
                r.default.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_INIT"
                })
            }

            function d(e, t, n) {
                return f(e, t, [], n)
            }

            function f(e, t, n, i) {
                return r.default.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING"
                }), new Promise(r => {
                    let i = () => {
                        if (0 === t.length && 0 === n.length) return r();
                        if (t.length > 0) {
                            let n = t.pop();
                            if (null == n) return i();
                            s.default.updatePermissionOverwrite(e, n).then(i, i)
                        } else {
                            let t = n.pop();
                            if (null == t) return i();
                            s.default.clearPermissionOverwrite(e, t).then(i, i)
                        }
                    };
                    i()
                }).then(() => {
                    r.default.dispatch({
                        type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS",
                        silent: i
                    })
                })
            }
        },
        454273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isAdmin: function() {
                    return S
                },
                getRoleRowData: function() {
                    return O
                },
                sortRoles: function() {
                    return I
                },
                getNoRolesRow: function() {
                    return A
                },
                isEveryoneRoleId: function() {
                    return p
                },
                isNotEveryoneRoleId: function() {
                    return h
                },
                getRolesRows: function() {
                    return g
                },
                getRolesRowsWithPermissionDisabled: function() {
                    return C
                },
                getExistingRolesRows: function() {
                    return w
                },
                getExistingRolesRowWithPermissionDisabled: function() {
                    return v
                },
                getMembersRows: function() {
                    return G
                },
                getExistingMembersRows: function() {
                    return H
                },
                getRowTypeLabel: function() {
                    return U
                },
                getRemoveTooltipHint: function() {
                    return B
                },
                flipEveryonePermission: function() {
                    return b
                },
                toggleChannelEveryonePermission: function() {
                    return V
                },
                grantUserChannelAccess: function() {
                    return k
                },
                isPrivateGuildChannel: function() {
                    return W
                },
                hasCustomRoles: function() {
                    return F
                },
                canCreatePrivateChannel: function() {
                    return x
                },
                getPrivateChannelHintText: function() {
                    return Y
                },
                extractPermissionOverwrites: function() {
                    return j
                }
            }), n("424973");
            var r = n("316693"),
                i = n("509043"),
                s = n("318738"),
                l = n("798609"),
                u = n("233069"),
                a = n("26989"),
                o = n("697218"),
                d = n("404008"),
                f = n("449008"),
                E = n("991170"),
                c = n("299039"),
                N = n("158998"),
                _ = n("606762"),
                R = n("49111"),
                T = n("782340");

            function S(e) {
                return r.default.has(e.permissions, R.Permissions.ADMINISTRATOR)
            }

            function O(e) {
                var t, n;
                let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let l = (n = e, r.default.has(n.permissions, R.Permissions.ADMINISTRATOR) ? _.RowType.ADMINISTRATOR : _.RowType.ROLE);
                return {
                    rowType: l,
                    colorString: null !== (t = e.colorString) && void 0 !== t ? t : (0, i.int2hex)(R.DEFAULT_ROLE_COLOR),
                    name: e.name,
                    id: e.id,
                    disabled: S(e) || s,
                    key: "".concat(l, ":").concat(e.id),
                    tags: e.tags
                }
            }

            function I(e, t) {
                let n = S(e) ? 0 : 1,
                    r = S(t) ? 0 : 1;
                return n !== r ? n - r : t.position - e.position
            }

            function A() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_ROLES;
                return [{
                    rowType: _.RowType.EMPTY_STATE,
                    colorString: (0, i.int2hex)(R.DEFAULT_ROLE_COLOR),
                    name: e,
                    disabled: !0,
                    id: "EMPTY_STATE"
                }]
            }

            function M(e, t, n, i) {
                let s = o.default.getCurrentUser();
                if (null == s) return !1;
                if (null == e) return s.id !== t;
                let l = e.permissionOverwrites[t];
                return (null == i ? void 0 : i[t]) != null && (l = i[t]), null == l || !r.default.has(l.allow, n)
            }

            function p(e, t) {
                return c.default.castGuildIdAsEveryoneGuildRoleId(e) === t
            }

            function h(e, t) {
                return !p(e, t)
            }

            function m(e, t) {
                return !p(e.id, t.id)
            }

            function g(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0;
                return null == e.roles ? [] : Object.values(e.roles).filter(i => !S(i) && M(t, i.id, n) && m(e, i) && r(i.name)).sort(I).map(e => O(e))
            }

            function C(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0;
                return null == e.roles ? [] : Object.values(e.roles).filter(r => !S(r) && M(t, r.id, n) && m(e, r) && i(r.name)).sort(I).map(e => O(e, r.default.has(e.permissions, n)))
            }

            function w(e, t, n, r) {
                var i, s, l, u;
                let a = [];
                if (null == e.roles) return a;
                return 0 === (a = (i = e, s = t, l = n, u = r, Object.values(i.roles).filter(e => S(e) || !M(s, e.id, l, u) && m(i, e))).sort(I).map(e => O(e))).length ? A(T.default.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : a
            }

            function v(e, t, n, i) {
                var s, l, u, a;
                let o = [];
                if (null == e.roles) return o;
                return 0 === (o = (s = e, l = t, u = n, a = i, Object.values(s.roles).filter(e => {
                    var t;
                    return S(e) || !M(l, e.id, u, a) && m(s, e) || r.default.has(r.default.combine(e.permissions, null === (t = l.permissionOverwrites[e.id]) || void 0 === t ? void 0 : t.allow), u)
                })).sort(I).map(e => O(e, r.default.has(e.permissions, n)))).length ? A(T.default.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : o
            }

            function L(e, t) {
                var n;
                return null !== (n = a.default.getNick(t.id, e.id)) && void 0 !== n ? n : N.default.getName(e)
            }

            function D(e, t) {
                return t.isOwner(e)
            }

            function y(e, t) {
                var n, r, i;
                let s = (r = e, t.isOwner(r) ? _.RowType.OWNER : _.RowType.MEMBER);
                return {
                    rowType: s,
                    name: L(e, t),
                    nickname: null !== (n = a.default.getNick(t.id, e.id)) && void 0 !== n ? n : null,
                    username: N.default.getName(e),
                    id: e.id,
                    avatarURL: e.getAvatarURL(t.id, 24),
                    bot: e.bot,
                    verifiedBot: e.isVerifiedBot(),
                    disabled: (i = e, t.isOwner(i)),
                    key: "".concat(s, ":").concat(e.id)
                }
            }

            function P(e, t) {
                return e.rowType !== t.rowType ? e.rowType - t.rowType : e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase())
            }

            function G(e, t, n, r) {
                let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
                return e.map(o.default.getUser).filter(f.isNotNullish).filter(e => !n.isOwner(e) && M(t, e.id, r) && (i(L(e, n)) || i(e.username) || i(e.discriminator))).map(e => y(e, n)).sort(P)
            }

            function H(e, t, n, r, i) {
                var s, l, u, a, d;
                return (s = e, l = t, u = n, a = r, d = i, s.map(o.default.getUser).filter(f.isNotNullish).filter(e => {
                    var t;
                    return !M(l, e.id, a, d) || (t = e, u.isOwner(t))
                })).map(e => y(e, n)).sort(P)
            }

            function U(e, t) {
                switch (e) {
                    case _.RowType.ROLE:
                        return T.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ROLE;
                    case _.RowType.OWNER:
                        return T.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_OWNER;
                    case _.RowType.ADMINISTRATOR:
                        return T.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ADMINISTRATOR;
                    case _.RowType.MEMBER:
                        return t ? T.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_MEMBER : null;
                    case _.RowType.USER:
                        return T.default.Messages.USER;
                    case _.RowType.GUILD:
                        return T.default.Messages.SERVER;
                    case _.RowType.EMPTY_STATE:
                        return null
                }
            }

            function B(e) {
                switch (e) {
                    case _.RowType.ROLE:
                        return T.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
                    case _.RowType.OWNER:
                        return T.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case _.RowType.ADMINISTRATOR:
                        return T.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case _.RowType.MEMBER:
                        return T.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
                    case _.RowType.EMPTY_STATE:
                    default:
                        return null
                }
            }

            function b(e, t, n) {
                let i = e.permissionOverwrites[e.guild_id];
                null == i && (i = E.default.makeEveryoneOverwrite(e.guild_id));
                let s = {
                    ...i
                };
                return s.deny = r.default.remove(s.deny, t), s.allow = r.default.remove(s.allow, t), !n && (s.deny = r.default.add(s.deny, t)), s
            }

            function V(e, t, n) {
                let r = b(e, t, n);
                (0, s.updatePermission)(e, r.id, r.allow, r.deny)
            }

            function k(e, t) {
                let n = o.default.getCurrentUser();
                if (null == n) return;
                let i = e.permissionOverwrites[n.id];
                if (null == i) {
                    let i = {
                        id: n.id,
                        type: l.PermissionOverwriteType.MEMBER,
                        allow: r.default.add(E.default.NONE, t),
                        deny: E.default.NONE
                    };
                    (0, s.savePermissionUpdates)(e.id, [i], !0)
                } else {
                    let {
                        allow: n,
                        deny: l
                    } = i;
                    n = r.default.add(n, t), (0, s.updatePermission)(e, i.id, n, l)
                }
            }

            function W(e, t) {
                if (null == e) return !1;
                let n = e.permissionOverwrites[e.guild_id];
                return (null == t ? void 0 : t[e.guild_id]) != null && (n = t[e.guild_id]), null != n && r.default.has(n.deny, e.accessPermissions)
            }

            function F(e) {
                let t = Object.keys(e.roles);
                return 0 !== t.length && (1 !== t.length || t[0] !== e.id)
            }

            function x(e, t, n) {
                return e === R.ChannelTypes.GUILD_TEXT || e === R.ChannelTypes.GUILD_ANNOUNCEMENT ? t : !(0, u.isGuildVocalChannelType)(e) && e !== R.ChannelTypes.GUILD_CATEGORY || t && n
            }

            function Y(e) {
                switch (e) {
                    case R.ChannelTypes.GUILD_TEXT:
                    case R.ChannelTypes.GUILD_ANNOUNCEMENT:
                        return T.default.Messages.PRIVATE_TEXT_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
                    case R.ChannelTypes.GUILD_VOICE:
                        return T.default.Messages.PRIVATE_VOICE_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
                    case R.ChannelTypes.GUILD_CATEGORY:
                        return T.default.Messages.PRIVATE_CATEGORY_CREATION_PERMISSION_MISSING_HINT.format();
                    default:
                        return null
                }
            }

            function j(e, t) {
                let n = [];
                return Object.values(e).forEach(e => {
                    let {
                        row: r
                    } = e;
                    null != r.id && "" !== r.id && (r.rowType === _.RowType.ROLE ? n.push((0, d.permissionOverwriteForRole)(r.id, t)) : r.rowType === _.RowType.MEMBER && n.push((0, d.permissionOverwriteForUser)(r.id, t)))
                }), n
            }
        },
        929278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isDefaultChannelThresholdMetAfterDelete: function() {
                    return c
                },
                checkDefaultChannelThresholdMetAfterChannelPermissionDeny: function() {
                    return _
                }
            }), n("222007");
            var r = n("316693"),
                i = n("404118"),
                s = n("592407"),
                l = n("305961"),
                u = n("685829"),
                a = n("863636"),
                o = n("380710"),
                d = n("653138"),
                f = n("49111"),
                E = n("782340");
            async function c(e, t) {
                return null == e || await N(e, t, {
                    removingView: !0,
                    removingChat: !0
                })
            }
            async function N(e, t, n) {
                var r;
                let i = l.default.getGuild(e);
                if (null == i) return !0;
                let s = null != i && (null === (r = i.features) || void 0 === r ? void 0 : r.has(f.GuildFeatures.GUILD_ONBOARDING));
                if (!s) return !0;
                s && a.default.shouldFetchPrompts(e) && await (0, u.fetchOnboardingPrompts)(e);
                let E = a.default.getDefaultChannelIds(e),
                    [c, N] = (0, o.getChattableDefaultChannels)(e, E),
                    _ = E.includes(t);
                if (!_) return !0;
                let R = n.removingView && N.length - 1 < d.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING,
                    T = (n.removingChat || n.removingView) && c.length - 1 < d.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
                return !R && !T
            }
            async function _(e, t, n) {
                let l = e.getGuildId();
                if (null == l) return !0;
                null != n && (t = r.default.filter(t, r.default.invert(n)));
                let u = e.permissionOverwrites[l],
                    a = null != u ? r.default.filter(u.deny, r.default.invert(u.allow)) : r.default.deserialize(0),
                    o = {
                        removingView: r.default.has(t, f.Permissions.VIEW_CHANNEL) && !r.default.has(a, f.Permissions.VIEW_CHANNEL),
                        removingChat: !1
                    };
                if (e.isForumLikeChannel() ? o.removingChat = r.default.has(t, f.Permissions.SEND_MESSAGES_IN_THREADS) && !r.default.has(a, f.Permissions.SEND_MESSAGES_IN_THREADS) : o.removingChat = r.default.has(t, f.Permissions.SEND_MESSAGES) && !r.default.has(a, f.Permissions.SEND_MESSAGES), !o.removingChat && !o.removingView) return !0;
                let d = await N(l, e.id, o);
                return !!d || (i.default.show({
                    title: E.default.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
                    body: E.default.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                        onClick: () => {
                            i.default.close(), s.default.open(l, f.GuildSettingsSections.ONBOARDING)
                        }
                    })
                }), !1)
            }
        }
    }
]);
//# sourceMappingURL=67731.42032df37145b7c728e1.js.map