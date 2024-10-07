"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33213"],
  {
    5036: function (e, n, t) {
      var s = t(570140),
        i = t(149071),
        a = t(9156);
      n.Z = {
        update(e) {
          s.Z.dispatch({ type: "CHANNEL_COLLAPSE", channelId: e });
        },
        toggleCollapseGuild(e) {
          i.Z.saveUserGuildSettings(e, {
            hide_muted_channels: !a.ZP.isGuildCollapsed(e),
          }),
            s.Z.dispatch({ type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: e });
        },
      };
    },
    241851: function (e, n, t) {
      t.d(n, {
        g: function () {
          return N;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(120356),
        a = t.n(i),
        l = t(704215),
        u = t(481060),
        o = t(605236),
        r = t(434404),
        d = t(41776),
        c = t(703656),
        E = t(981631),
        _ = t(689938),
        M = t(214201);
      let N = (e) => {
        let { guild: n } = e,
          i = n.id,
          N = async () => {
            let e = d.Z.isLurking(i);
            await r.Z.leaveGuild(i),
              e
                ? (0, c.uL)(E.Z5c.GUILD_DISCOVERY)
                : !(0, o.un)(l.z.GUILD_LEAVE_FEEDBACK) &&
                  (0, u.openModalLazy)(async () => {
                    let { default: e } = await t
                      .e("74920")
                      .then(t.bind(t, 131102));
                    return (t) =>
                      (0, s.jsx)(e, { ...t, guildId: i, guildName: n.name });
                  });
          };
        return (0, s.jsx)(u.ConfirmModal, {
          className: a()(M.__invalid_confirmModal),
          bodyClassName: a()(M.__invalid_confirmModalBody),
          header: _.Z.Messages.LEAVE_SERVER_TITLE.format({ name: n.name }),
          confirmText: n.hasFeature(E.oNc.HUB)
            ? _.Z.Messages.LEAVE_HUB
            : _.Z.Messages.LEAVE_SERVER,
          cancelText: _.Z.Messages.CANCEL,
          onConfirm: N,
          ...e,
          children: (0, s.jsx)(u.Text, {
            variant: "text-md/normal",
            children: n.hasFeature(E.oNc.HUB)
              ? _.Z.Messages.LEAVE_HUB_BODY.format({ name: n.name })
              : _.Z.Messages.LEAVE_SERVER_BODY.format({ name: n.name }),
          }),
        });
      };
    },
    545135: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return v;
          },
        });
      var s = t(735250);
      t(470079);
      var i = t(512722),
        a = t.n(i),
        l = t(442837),
        u = t(481060),
        o = t(239091),
        r = t(100527),
        d = t(906732),
        c = t(299206),
        E = t(894059),
        _ = t(423589),
        M = t(837949),
        N = t(122074),
        I = t(314897),
        S = t(984933),
        g = t(594174),
        L = t(241851),
        T = t(94953),
        A = t(976192),
        h = t(904483),
        f = t(429824),
        O = t(919815),
        Z = t(858822),
        p = t(993356),
        C = t(58338),
        m = t(422525),
        x = t(522762),
        G = t(466330),
        b = t(981631),
        U = t(689938);
      function P(e) {
        let { guild: n, onSelect: i, hideSettings: r } = e,
          d = n.id,
          P = S.ZP.getDefaultChannel(d),
          v = (0, l.e7)(
            [g.default],
            () => {
              let e = g.default.getCurrentUser();
              return (
                a()(null != e, "GuildContextMenu: user cannot be undefined"),
                n.isOwner(e)
              );
            },
            [n],
          ),
          R = (0, G.Z)({
            guild: n,
            source: b.t4x.GUILD_CONTEXT_MENU,
            channel: P,
          }),
          j = (0, x.Z)(d),
          D = (0, Z.Z)(n),
          y = (0, p.Z)(n),
          k = (0, m.Z)(n),
          F = (0, A.Z)({
            guildId: n.id,
            userId: I.default.getId(),
            analyticsLocation: {
              page: b.ZY5.GUILD_CHANNEL,
              section: b.jXE.CHAT_USERNAME,
              object: b.qAy.CONTEXT_MENU_ITEM,
            },
          }),
          B = (0, T.Z)({
            guildId: n.id,
            userId: I.default.getId(),
            analyticsLocation: {
              page: b.ZY5.GUILD_CHANNEL,
              section: b.jXE.CHAT_USERNAME,
              object: b.qAy.CONTEXT_MENU_ITEM,
            },
          }),
          Y = (0, h.Z)(n),
          H = (0, E.Z)(n.id),
          V = (0, c.Z)({ id: n.id, label: U.Z.Messages.COPY_ID_GUILD }),
          w = (0, O.Z)(n, { section: b.jXE.GUILD_LIST }),
          z = (0, M.Z)(n.id),
          q = (0, C.Z)(n.id),
          K = (0, N.ng)(n.id, !1),
          X = (0, f.Z)(n),
          W = (0, _.Mn)("GuildContextMenu");
        function Q() {
          (0, u.openModal)((e) => (0, s.jsx)(L.g, { ...e, guild: n }));
        }
        return n.hasFeature(b.oNc.HUB)
          ? (0, s.jsxs)(u.Menu, {
              navId: "guild-context",
              onClose: o.Zy,
              "aria-label": U.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
              onSelect: i,
              children: [
                (0, s.jsxs)(u.MenuGroup, {
                  children: [
                    R,
                    (0, s.jsx)(u.MenuItem, {
                      id: "privacy",
                      label: U.Z.Messages.HUB_PRIVACY_SETTINGS,
                      action: () =>
                        (0, u.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                            t.e("77298"),
                            t.e("23357"),
                            t.e("50506"),
                            t.e("81039"),
                            t.e("31045"),
                            t.e("84605"),
                            t.e("52249"),
                            t.e("29549"),
                            t.e("54803"),
                            t.e("15685"),
                            t.e("72652"),
                            t.e("32776"),
                            t.e("79915"),
                            t.e("6380"),
                            t.e("8016"),
                            t.e("18543"),
                            t.e("31605"),
                            t.e("72181"),
                            t.e("76540"),
                            t.e("30671"),
                            t.e("68136"),
                            t.e("81272"),
                            t.e("95393"),
                            t.e("52774"),
                            t.e("56602"),
                            t.e("87624"),
                            t.e("79107"),
                            t.e("22646"),
                            t.e("46097"),
                            t.e("88390"),
                            t.e("8739"),
                            t.e("58059"),
                            t.e("25183"),
                            t.e("18895"),
                            t.e("43244"),
                            t.e("18101"),
                            t.e("57674"),
                            t.e("37447"),
                            t.e("30419"),
                            t.e("48923"),
                            t.e("18824"),
                            t.e("52619"),
                            t.e("8821"),
                            t.e("68241"),
                            t.e("18815"),
                            t.e("43149"),
                            t.e("37229"),
                            t.e("64838"),
                            t.e("28044"),
                            t.e("71843"),
                            t.e("35539"),
                            t.e("24582"),
                            t.e("70482"),
                          ]).then(t.bind(t, 241420));
                          return (t) => (0, s.jsx)(e, { ...t, guild: n });
                        }),
                    }),
                    F,
                  ],
                }),
                v
                  ? null
                  : (0, s.jsx)(u.MenuGroup, {
                      children: (0, s.jsx)(u.MenuItem, {
                        id: "leave-guild",
                        label: U.Z.Messages.LEAVE_HUB,
                        action: Q,
                        color: "danger",
                      }),
                    }),
                (0, s.jsx)(u.MenuGroup, { children: V }),
              ],
            })
          : (0, s.jsxs)(u.Menu, {
              navId: "guild-context",
              onClose: o.Zy,
              "aria-label": U.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
              onSelect: i,
              children: [
                (0, s.jsx)(u.MenuGroup, { children: w }),
                (0, s.jsx)(u.MenuGroup, { children: R }),
                (0, s.jsxs)(u.MenuGroup, {
                  children: [
                    D,
                    W || __OVERLAY__ ? null : y,
                    W && !__OVERLAY__ ? q : null,
                    K,
                    j,
                    z,
                  ],
                }),
                (0, s.jsxs)(u.MenuGroup, {
                  children: [
                    r ? null : k,
                    __OVERLAY__
                      ? null
                      : (0, s.jsx)(u.MenuItem, {
                          id: "privacy",
                          label: U.Z.Messages.PRIVACY_SETTINGS,
                          action: () =>
                            (0, u.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                t.e("77298"),
                                t.e("23357"),
                                t.e("50506"),
                                t.e("81039"),
                                t.e("31045"),
                                t.e("84605"),
                                t.e("52249"),
                                t.e("29549"),
                                t.e("54803"),
                                t.e("15685"),
                                t.e("72652"),
                                t.e("32776"),
                                t.e("79915"),
                                t.e("6380"),
                                t.e("8016"),
                                t.e("18543"),
                                t.e("31605"),
                                t.e("72181"),
                                t.e("76540"),
                                t.e("30671"),
                                t.e("68136"),
                                t.e("81272"),
                                t.e("95393"),
                                t.e("52774"),
                                t.e("56602"),
                                t.e("87624"),
                                t.e("79107"),
                                t.e("22646"),
                                t.e("46097"),
                                t.e("88390"),
                                t.e("8739"),
                                t.e("58059"),
                                t.e("25183"),
                                t.e("18895"),
                                t.e("43244"),
                                t.e("18101"),
                                t.e("57674"),
                                t.e("37447"),
                                t.e("30419"),
                                t.e("48923"),
                                t.e("18824"),
                                t.e("52619"),
                                t.e("8821"),
                                t.e("68241"),
                                t.e("18815"),
                                t.e("43149"),
                                t.e("37229"),
                                t.e("64838"),
                                t.e("28044"),
                                t.e("71843"),
                                t.e("35539"),
                                t.e("24582"),
                                t.e("70482"),
                              ]).then(t.bind(t, 241420));
                              return (t) => (0, s.jsx)(e, { ...t, guild: n });
                            }),
                        }),
                    F,
                    B,
                  ],
                }),
                (0, s.jsxs)(u.MenuGroup, { children: [Y, H] }),
                (0, s.jsxs)(u.MenuGroup, {
                  children: [
                    X,
                    !v &&
                      (0, s.jsx)(u.MenuItem, {
                        id: "leave-guild",
                        label: U.Z.Messages.LEAVE_SERVER,
                        action: Q,
                        color: "danger",
                      }),
                  ],
                }),
                (0, s.jsx)(u.MenuGroup, { children: V }),
              ],
            });
      }
      function v(e) {
        let { analyticsLocations: n } = (0, d.ZP)(r.Z.CONTEXT_MENU);
        return (0, s.jsx)(d.Gt, {
          value: n,
          children: (0, s.jsx)(P, { ...e }),
        });
      }
    },
    94953: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      }),
        t(47120);
      var s = t(735250),
        i = t(470079),
        a = t(442837),
        l = t(481060),
        u = t(58540),
        o = t(100527),
        r = t(931240),
        d = t(353093),
        c = t(314897),
        E = t(271383),
        _ = t(430824),
        M = t(496675),
        N = t(594174),
        I = t(981631),
        S = t(689938);
      function g(e) {
        let {
            guildId: n,
            userId: t,
            analyticsLocation: g,
            analyticsLocations: L,
            context: T,
            icon: A,
          } = e,
          h = (0, a.e7)([_.Z], () => _.Z.getGuild(n), [n]),
          f = (0, a.e7)([c.default], () => c.default.getId()),
          O = (0, a.e7)([N.default], () => N.default.getUser(t)),
          Z = (0, a.e7)([E.ZP], () => E.ZP.isGuestOrLurker(n, t), [n, t]),
          p = i.useMemo(() => ({ [n]: [t] }), [n, t]),
          C = (0, d.EJ)(h);
        (0, u.$)(p);
        let m = T === I.IlC.POPOUT,
          x = f === t,
          [G, b] = (0, a.Wu)(
            [M.Z],
            () => {
              if (null == h) return [!1, !1];
              let e =
                f === t &&
                (M.Z.can(I.Plq.CHANGE_NICKNAME, h) ||
                  M.Z.can(I.Plq.MANAGE_NICKNAMES, h));
              return [e, M.Z.canManageUser(I.Plq.MANAGE_NICKNAMES, t, h)];
            },
            [f, t, h],
          ),
          U = i.useCallback(
            (e, n) => () => {
              (0, r.nE)(e, n, o.Z.CONTEXT_MENU);
            },
            [],
          );
        return null != h &&
          !m &&
          (G || b || x) &&
          null != O &&
          !Z &&
          C &&
          O.isStaff()
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(l.MenuItem, {
                  id: "adopt-clan-identity",
                  label: S.Z.Messages.CLAN_ADOPT_CLAN_IDENTITY,
                  icon: A,
                  action: U(n, !0),
                }),
                (0, s.jsx)(l.MenuItem, {
                  id: "deadopt-clan-identity",
                  label: S.Z.Messages.CLAN_CLEAR_CLAN_IDENTITY,
                  icon: A,
                  action: U(null, null),
                }),
              ],
            })
          : null;
      }
    },
    976192: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return L;
        },
      });
      var s = t(735250),
        i = t(470079),
        a = t(442837),
        l = t(481060),
        u = t(58540),
        o = t(40851),
        r = t(300284),
        d = t(484459),
        c = t(314897),
        E = t(271383),
        _ = t(430824),
        M = t(496675),
        N = t(594174),
        I = t(981631),
        S = t(689938),
        g = t(745974);
      function L(e) {
        let {
            guildId: n,
            userId: L,
            analyticsLocation: T,
            analyticsLocations: A,
            context: h,
            icon: f,
          } = e,
          O = _.Z.getGuild(n),
          Z = c.default.getId(),
          p = (0, a.e7)([N.default], () => N.default.getUser(L)),
          C = (0, a.e7)([E.ZP], () => E.ZP.isGuestOrLurker(n, L), [n, L]);
        (0, a.e7)([M.Z], () => M.Z.getGuildVersion(n), [n]);
        let m = i.useMemo(() => ({ [n]: [L] }), [n, L]);
        (0, u.$)(m);
        let x = h === I.IlC.POPOUT,
          G = (0, r.Z)({ guild: O, analyticsLocation: T }),
          b = (0, o.Aq)();
        if (null == O || x) return null;
        let U =
            Z === L &&
            (M.Z.can(I.Plq.CHANGE_NICKNAME, O) ||
              M.Z.can(I.Plq.MANAGE_NICKNAMES, O)),
          P = Z === L,
          v = M.Z.canManageUser(I.Plq.MANAGE_NICKNAMES, L, O);
        if (!(U || v || P) || null == p || C) return null;
        let R = O.hasFeature(I.oNc.HUB)
            ? S.Z.Messages.HUB_EDIT_PROFILE
            : S.Z.Messages.CHANGE_IDENTITY,
          j = P ? R : S.Z.Messages.CHANGE_NICKNAME;
        return (0, s.jsx)(l.MenuItem, {
          id: "change-nickname",
          label: (0, s.jsx)("div", {
            className: g.labelWrapper,
            children: (0, s.jsx)("span", { className: g.label, children: j }),
          }),
          icon: f,
          action: () => {
            P
              ? ((0, d.Z)(p.id, p.getAvatarURL(n, 80), { guildId: n }),
                G(),
                b.dispatch(I.CkL.POPOUT_CLOSE),
                (0, l.closeAllModals)())
              : (0, l.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("17712")
                    .then(t.bind(t, 620021));
                  return (t) =>
                    (0, s.jsx)(e, {
                      ...t,
                      guildId: n,
                      user: p,
                      analyticsSource: T,
                      analyticsLocations: A,
                    });
                });
          },
        });
      }
    },
    904483: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(442837),
        a = t(481060),
        l = t(496675),
        u = t(981631),
        o = t(647086),
        r = t(689938);
      function d(e) {
        let n = (0, i.e7)([l.Z], () => l.Z.can(u.Plq.MANAGE_CHANNELS, e));
        return __OVERLAY__
          ? null
          : e.id === o._
            ? (0, s.jsx)(s.Fragment, {
                children: (0, s.jsx)(a.MenuItem, {
                  id: "create-category",
                  label: r.Z.Messages.CREATE_CATEGORY,
                  action: () =>
                    (0, a.openModalLazy)(async () => {
                      let { default: e } = await t
                        .e("1812")
                        .then(t.bind(t, 477782));
                      return (n) => (0, s.jsx)(e, { ...n });
                    }),
                }),
              })
            : n
              ? [
                  (0, s.jsx)(
                    a.MenuItem,
                    {
                      id: "create-channel",
                      label: r.Z.Messages.CREATE_CHANNEL,
                      action: () =>
                        (0, a.openModalLazy)(async () => {
                          let { default: n } = await Promise.all([
                            t.e("7590"),
                            t.e("45094"),
                            t.e("5769"),
                          ]).then(t.bind(t, 218613));
                          return (t) =>
                            (0, s.jsx)(n, {
                              ...t,
                              channelType: u.d4z.GUILD_TEXT,
                              guildId: e.id,
                            });
                        }),
                    },
                    "create-channel",
                  ),
                  (0, s.jsx)(
                    a.MenuItem,
                    {
                      id: "create-category",
                      label: r.Z.Messages.CREATE_CATEGORY,
                      action: () =>
                        (0, a.openModalLazy)(async () => {
                          let { default: n } = await Promise.all([
                            t.e("7590"),
                            t.e("45094"),
                            t.e("5769"),
                          ]).then(t.bind(t, 218613));
                          return (t) =>
                            (0, s.jsx)(n, {
                              ...t,
                              channelType: u.d4z.GUILD_CATEGORY,
                              guildId: e.id,
                            });
                        }),
                    },
                    "create-category",
                  ),
                ]
              : null;
      }
    },
    429824: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var s = t(735250),
        i = t(470079),
        a = t(481060),
        l = t(528011),
        u = t(666657),
        o = t(533244),
        r = t(689938);
      function d(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          {
            shouldShowIncidentActions: d,
            isUnderLockdown: c,
            incidentData: E,
          } = (0, l.mI)(e.id),
          _ = i.useCallback(() => {
            let n = { source: u.Zu.CONTEXT_MENU, alertType: (0, o.T1)(E) };
            (0, a.openModalLazy)(async () => {
              let { default: i } = await t.e("61536").then(t.bind(t, 664452));
              return (t) =>
                (0, s.jsx)(i, { ...t, guildId: e.id, analyticsData: n });
            });
          }, [e.id, E]);
        return e.isCommunity() && d
          ? (0, s.jsx)(a.MenuItem, {
              id: "server-lockdown",
              label: c
                ? r.Z.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK
                : r.Z.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
              icon: n ? (c ? a.LockUnlockedIcon : a.LockIcon) : void 0,
              action: _,
              color: "danger",
            })
          : null;
      }
    },
    919815: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(442837),
        a = t(481060),
        l = t(888369),
        u = t(181945),
        o = t(689938);
      function r(e, n) {
        let t = e.id,
          r = (0, i.e7)(
            [l.default],
            () => l.default.getGuildHasUnreadIgnoreMuted(t),
            [t],
          );
        return (0, s.jsx)(a.MenuItem, {
          id: "mark-guild-read",
          label: o.Z.Messages.MARK_AS_READ,
          icon: void 0,
          action: () => (0, u.Z)([t], n.section),
          disabled: !r,
        });
      }
    },
    993356: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(442837),
        a = t(481060),
        l = t(87051),
        u = t(778123),
        o = t(122074),
        r = t(9156),
        d = t(621600),
        c = t(981631),
        E = t(689938);
      function _() {
        return [
          {
            setting: c.bL.ALL_MESSAGES,
            label: E.Z.Messages.FORM_LABEL_ALL_MESSAGES,
          },
          {
            setting: c.bL.ONLY_MENTIONS,
            label: E.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
          },
          { setting: c.bL.NO_MESSAGES, label: E.Z.Messages.FORM_LABEL_NOTHING },
        ];
      }
      function M(e) {
        var n, M;
        let N = (function (e) {
            let {
                suppressEveryone: n,
                suppressRoles: t,
                mobilePush: M,
                messageNotifications: N,
                notifyHighlights: I,
              } = (0, i.cj)(
                [r.ZP],
                () => ({
                  suppressEveryone: r.ZP.isSuppressEveryoneEnabled(e.id),
                  suppressRoles: r.ZP.isSuppressRolesEnabled(e.id),
                  mobilePush: r.ZP.isMobilePushEnabled(e.id),
                  messageNotifications: r.ZP.getMessageNotifications(e.id),
                  notifyHighlights: r.ZP.getNotifyHighlights(e.id),
                }),
                [e.id],
              ),
              S = I === c.gLR.DISABLED,
              g = (0, u.Z)(e.id);
            function L(n, t) {
              l.Z.updateGuildNotificationSettings(e.id, n, t);
            }
            let T = (0, o.ng)(e.id, !0);
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(a.MenuGroup, {
                  children: _().map((e) => {
                    let { setting: n, label: t } = e;
                    return (0, s.jsx)(
                      a.MenuRadioItem,
                      {
                        group: "guild-notifications",
                        id: "".concat(n),
                        label: t,
                        action: () =>
                          L(
                            { message_notifications: n },
                            d.UE.notifications(n),
                          ),
                        checked: n === N,
                      },
                      n,
                    );
                  }),
                }),
                null != T && (0, s.jsx)(a.MenuGroup, { children: T }),
                (0, s.jsxs)(a.MenuGroup, {
                  children: [
                    (0, s.jsx)(a.MenuCheckboxItem, {
                      id: "suppress-everyone",
                      label: E.Z.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                      action: () =>
                        L({ suppress_everyone: !n }, d.UE.suppressEveryone(!n)),
                      checked: n,
                    }),
                    (0, s.jsx)(a.MenuCheckboxItem, {
                      id: "suppress-roles",
                      label: E.Z.Messages.FORM_LABEL_SUPPRESS_ROLES,
                      action: () =>
                        L({ suppress_roles: !t }, d.UE.suppressRoles(!t)),
                      checked: t,
                    }),
                    (0, s.jsx)(a.MenuCheckboxItem, {
                      id: "suppress-highlights",
                      label: E.Z.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                      action: () => {
                        L(
                          {
                            notify_highlights: S
                              ? c.gLR.ENABLED
                              : c.gLR.DISABLED,
                          },
                          d.UE.highlights(S),
                        );
                      },
                      checked: S,
                    }),
                    g,
                  ],
                }),
                (0, s.jsx)(a.MenuGroup, {
                  children: (0, s.jsx)(a.MenuCheckboxItem, {
                    id: "mobile-push",
                    label: E.Z.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                    action: () => L({ mobile_push: !M }, d.UE.mobilePush(!M)),
                    checked: M,
                  }),
                }),
              ],
            });
          })(e),
          I = (0, i.e7)([r.ZP], () => r.ZP.getMessageNotifications(e.id), [
            e.id,
          ]),
          S =
            null === (M = _()) || void 0 === M
              ? void 0
              : null ===
                    (n = M.find((e) => {
                      let { setting: n } = e;
                      return n === I;
                    })) || void 0 === n
                ? void 0
                : n.label,
          g = (0, o.U)();
        return null != N
          ? (0, s.jsx)(a.MenuItem, {
              id: "guild-notifications",
              label: (0, s.jsxs)(s.Fragment, {
                children: [g, E.Z.Messages.NOTIFICATION_SETTINGS],
              }),
              subtext: S,
              action: () =>
                (0, a.openModalLazy)(async () => {
                  let { default: n } = await Promise.all([
                    t.e("5863"),
                    t.e("42769"),
                  ]).then(t.bind(t, 751212));
                  return (t) => (0, s.jsx)(n, { ...t, guildId: e.id });
                }),
              children: N,
            })
          : null;
      }
    },
    58338: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      }),
        t(47120),
        t(789020);
      var s = t(735250),
        i = t(470079),
        a = t(442837),
        l = t(481060),
        u = t(87051),
        o = t(113449),
        r = t(748756),
        d = t(686660),
        c = t(122074),
        E = t(9156),
        _ = t(621600),
        M = t(981631),
        N = t(490897),
        I = t(526761),
        S = t(689938);
      function g(e) {
        let n = (0, c.ng)(e, !0),
          g = (0, c.U)();
        return (0, s.jsxs)(l.MenuItem, {
          id: "notification",
          label: (0, s.jsxs)(s.Fragment, {
            children: [g, S.Z.Messages.NOTIFICATIONS],
          }),
          action: () => {
            (0, l.openModalLazy)(async () => {
              let { default: n } = await Promise.all([
                t.e("5863"),
                t.e("42769"),
              ]).then(t.bind(t, 751212));
              return (t) => (0, s.jsx)(n, { ...t, guildId: e });
            });
          },
          children: [
            (function (e) {
              let [n, t] = i.useState(!1),
                [c, g] = i.useState(!1),
                L = (0, a.e7)([E.ZP], () => E.ZP.getGuildUnreadSetting(e)),
                T = (0, a.e7)([E.ZP], () => E.ZP.getMessageNotifications(e)),
                A = c ? d.s8.CUSTOM : (0, d.gs)(L, T),
                h = (n) => {
                  g(!1);
                  let t = { message_notifications: n };
                  n === M.bL.ALL_MESSAGES &&
                    L !== N.i.ALL_MESSAGES &&
                    (t.flags = (0, o.Q4)(
                      E.ZP.getGuildFlags(e),
                      I.vc.UNREADS_ALL_MESSAGES,
                    )),
                    u.Z.updateGuildNotificationSettings(
                      e,
                      t,
                      _.UE.notifications(n),
                    );
                },
                f = (n) => {
                  g(!1);
                  let t = E.ZP.getGuildFlags(e);
                  u.Z.updateGuildNotificationSettings(
                    e,
                    {
                      flags: (0, o.Q4)(
                        t,
                        n === N.i.ALL_MESSAGES
                          ? I.vc.UNREADS_ALL_MESSAGES
                          : I.vc.UNREADS_ONLY_MENTIONS,
                      ),
                    },
                    _.UE.unreads(n),
                  );
                };
              return (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsxs)(l.MenuGroup, {
                    children: [
                      (0, s.jsx)(l.MenuRadioItem, {
                        id: "everything",
                        group: "notification-preset",
                        checked: A === d.s8.ALL_MESSAGES,
                        label: S.Z.Messages.NOTIFICATION_PRESET_1,
                        action: () => ((0, r.V)(e, d.s8.ALL_MESSAGES), g(!1)),
                      }),
                      (0, s.jsx)(l.MenuRadioItem, {
                        id: "essentials",
                        group: "notification-preset",
                        checked: A === d.s8.MENTIONS,
                        label: S.Z.Messages.NOTIFICATION_PRESET_2,
                        action: () => ((0, r.V)(e, d.s8.MENTIONS), g(!1)),
                      }),
                      (0, s.jsx)(l.MenuRadioItem, {
                        id: "nothing",
                        group: "notification-preset",
                        checked: A === d.s8.NOTHING,
                        label: S.Z.Messages.NOTIFICATION_PRESET_3,
                        action: () => ((0, r.V)(e, d.s8.NOTHING), g(!1)),
                      }),
                      (0, s.jsx)(l.MenuRadioItem, {
                        id: "custom",
                        group: "notification-preset",
                        checked: A === d.s8.CUSTOM,
                        action: () => (t(!0), g(!0)),
                        label: S.Z.Messages.NOTIFICATION_PRESET_CUSTOM,
                      }),
                    ],
                  }),
                  (A === d.s8.CUSTOM || n) &&
                    (0, s.jsxs)(l.MenuGroup, {
                      children: [
                        (0, s.jsxs)(
                          l.MenuItem,
                          {
                            id: "unread_setting",
                            label: "Unread Badges",
                            children: [
                              (0, s.jsx)(l.MenuRadioItem, {
                                id: "unread_setting_all_messages",
                                group: "unread_setting",
                                checked: L === N.i.ALL_MESSAGES,
                                label:
                                  S.Z.Messages
                                    .NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                                action: () => f(N.i.ALL_MESSAGES),
                              }),
                              (0, s.jsx)(l.MenuRadioItem, {
                                id: "unread_setting_mention_only",
                                group: "unread_setting",
                                checked: L === N.i.ONLY_MENTIONS,
                                label:
                                  S.Z.Messages
                                    .NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                                action: () => f(N.i.ONLY_MENTIONS),
                                disabled:
                                  L !== N.i.ONLY_MENTIONS &&
                                  T === M.bL.ALL_MESSAGES,
                                subtext:
                                  L !== N.i.ONLY_MENTIONS &&
                                  T === M.bL.ALL_MESSAGES
                                    ? S.Z.Messages
                                        .NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED
                                    : void 0,
                              }),
                            ],
                          },
                          "unread_setting",
                        ),
                        (0, s.jsxs)(
                          l.MenuItem,
                          {
                            id: "push_settings",
                            label: S.Z.Messages.NOTIFICATIONS,
                            children: [
                              (0, s.jsx)(l.MenuRadioItem, {
                                group: "notification-preset",
                                id: "push_settings_everything",
                                label:
                                  S.Z.Messages
                                    .NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                                checked: T === M.bL.ALL_MESSAGES,
                                action: () => h(M.bL.ALL_MESSAGES),
                                subtext:
                                  L !== N.i.ALL_MESSAGES &&
                                  T !== M.bL.ALL_MESSAGES
                                    ? S.Z.Messages
                                        .NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING
                                    : void 0,
                              }),
                              (0, s.jsx)(l.MenuRadioItem, {
                                group: "notification-preset",
                                id: "push_settings_everything_mention",
                                checked: T === M.bL.ONLY_MENTIONS,
                                label:
                                  S.Z.Messages
                                    .NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                                action: () => h(M.bL.ONLY_MENTIONS),
                              }),
                              (0, s.jsx)(l.MenuRadioItem, {
                                group: "notification-preset",
                                id: "push_settings_everything_nothing",
                                label:
                                  S.Z.Messages
                                    .NOTIFICATION_SETTINGS_PRESETS_NONE,
                                checked: T === M.bL.NO_MESSAGES,
                                action: () => h(M.bL.NO_MESSAGES),
                              }),
                            ],
                          },
                          "push_settings",
                        ),
                      ],
                    }),
                ],
              });
            })(e),
            null != n && (0, s.jsx)(l.MenuGroup, { children: n }),
            (function (e) {
              let n = (0, a.cj)([E.ZP], () => ({
                  highligths: E.ZP.getNotifyHighlights(e),
                  mobilePush: E.ZP.isMobilePushEnabled(e),
                  suppressRoles: E.ZP.isSuppressRolesEnabled(e),
                  suppressEveryone: E.ZP.isSuppressEveryoneEnabled(e),
                  muteScheduledEvents: E.ZP.isMuteScheduledEventsEnabled(e),
                })),
                t = u.Z.updateGuildNotificationSettings;
              return (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsxs)(l.MenuGroup, {
                    children: [
                      (0, s.jsx)(l.MenuCheckboxItem, {
                        id: "mention",
                        checked: n.suppressEveryone,
                        label:
                          S.Z.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                        action: () =>
                          t(
                            e,
                            { suppress_everyone: !n.suppressEveryone },
                            _.UE.suppressEveryone(!n.suppressEveryone),
                          ),
                      }),
                      (0, s.jsx)(l.MenuCheckboxItem, {
                        id: "roles",
                        checked: n.suppressRoles,
                        label: S.Z.Messages.FORM_LABEL_SUPPRESS_ROLES,
                        action: () =>
                          t(
                            e,
                            { suppress_roles: !n.suppressRoles },
                            _.UE.suppressRoles(!n.suppressRoles),
                          ),
                      }),
                      (0, s.jsx)(l.MenuCheckboxItem, {
                        id: "hightlight",
                        label: S.Z.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                        checked: n.highligths === M.gLR.ENABLED,
                        action: () =>
                          t(
                            e,
                            {
                              notify_highlights:
                                n.highligths === M.gLR.ENABLED
                                  ? M.gLR.DISABLED
                                  : M.gLR.ENABLED,
                            },
                            _.UE.highlights(n.highligths !== M.gLR.ENABLED),
                          ),
                      }),
                    ],
                  }),
                  (0, s.jsxs)(l.MenuGroup, {
                    children: [
                      (0, s.jsx)(l.MenuCheckboxItem, {
                        id: "event",
                        checked: n.muteScheduledEvents,
                        label: S.Z.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                        action: () =>
                          t(
                            e,
                            { mute_scheduled_events: !n.muteScheduledEvents },
                            _.UE.mutedEvents(!n.muteScheduledEvents),
                          ),
                      }),
                      (0, s.jsx)(l.MenuCheckboxItem, {
                        id: "mobile_push",
                        checked: n.mobilePush,
                        label:
                          S.Z.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                        action: () =>
                          t(
                            e,
                            { mobile_push: !n.mobilePush },
                            _.UE.mobilePush(!n.mobilePush),
                          ),
                      }),
                    ],
                  }),
                ],
              });
            })(e),
          ],
        });
      }
    },
    422525: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(442837),
        a = t(481060),
        l = t(40851),
        u = t(132871),
        o = t(147890),
        r = t(593128),
        d = t(434404),
        c = t(956324),
        E = t(994763),
        _ = t(84615),
        M = t(984933),
        N = t(981631),
        I = t(308083),
        S = t(689938);
      function g(e) {
        let n = (0, l.Aq)(),
          t = (0, c.Z)(e),
          g = (0, i.Wu)([M.ZP], () => M.ZP.getChannels(e.id).SELECTABLE, [e]);
        if (__OVERLAY__ || !t) return null;
        let L = (t) => {
          d.Z.open(e.id, t),
            n.dispatch(N.CkL.POPOUT_CLOSE),
            (0, a.closeAllModals)();
        };
        return (0, s.jsx)(a.MenuItem, {
          id: "guild-settings",
          label: S.Z.Messages.SERVER_SETTINGS,
          action: () => L(),
          children: (0, E.getGuildSettingsSections)(e, g).map((n) => {
            let { section: t, label: i } = n;
            if (null == i) return null;
            switch (t) {
              case N.pNK.DELETE:
                return null;
              case N.pNK.COMMUNITY:
                return (0, s.jsx)(
                  a.MenuItem,
                  {
                    id: t,
                    action: () => L(t),
                    label: S.Z.Messages.GUILD_SETTINGS_COMMUNITY,
                  },
                  t,
                );
              case N.pNK.APP_DIRECTORY:
                return (0, s.jsx)(
                  a.MenuItem,
                  {
                    id: t,
                    action: () => {
                      (0, o.goToAppDirectory)({
                        guildId: e.id,
                        entrypoint: {
                          name: u.ApplicationDirectoryEntrypointNames
                            .GUILD_CONTEXT_MENU,
                        },
                      });
                    },
                    label: i,
                  },
                  t,
                );
              case N.pNK.CLAN:
                return (0, s.jsx)(a.MenuItem, {
                  id: "guild-settings",
                  label: S.Z.Messages.CLAN_SETTINGS,
                  action: () =>
                    (0, _.q4)(
                      (n) => {
                        let { closeLayer: t } = n;
                        return (0, s.jsx)(r.Z, { onClose: t, guildId: e.id });
                      },
                      { layerKey: I.q2 },
                    ),
                });
              default:
                return (0, s.jsx)(
                  a.MenuItem,
                  { id: t, action: () => L(t), label: i },
                  t,
                );
            }
          }),
        });
      }
    },
    522762: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(442837),
        a = t(481060),
        l = t(5036),
        u = t(9156),
        o = t(689938);
      function r(e) {
        let n = (0, i.e7)([u.ZP], () => u.ZP.isGuildCollapsed(e), [e]);
        return (0, s.jsx)(a.MenuCheckboxItem, {
          id: "hide-muted-channels",
          label: o.Z.Messages.HIDE_MUTED_CHANNELS,
          action: () => l.Z.toggleCollapseGuild(e),
          checked: n,
        });
      }
    },
    466330: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(442837),
        a = t(481060),
        l = t(159300),
        u = t(984933),
        o = t(496675),
        r = t(981631),
        d = t(689938);
      function c(e) {
        let { source: n, guild: t, channel: s, stageInstance: a } = e,
          d = (0, i.e7)([u.ZP], () =>
            u.ZP.getDefaultChannel(t.id, !0, r.Plq.CREATE_INSTANT_INVITE),
          ),
          c = (0, i.e7)([o.Z], () => (0, l.b)(o.Z, t, s, a)),
          M = E(n, t, c && null != s ? s : d),
          N = _(n);
        return null == s && n === r.t4x.GUILD_CONTEXT_MENU
          ? null
          : c || null != d
            ? M
            : N;
      }
      let E = (e, n, i) =>
          (0, s.jsx)(a.MenuItem, {
            id: "invite-people",
            label: d.Z.Messages.INVITE_PEOPLE,
            color: "brand",
            icon: e === r.t4x.GUILD_HEADER ? a.GroupPlusIcon : void 0,
            action: () =>
              (0, a.openModalLazy)(async () => {
                let { default: a } = await Promise.all([
                  t.e("7654"),
                  t.e("85683"),
                ]).then(t.bind(t, 560114));
                return (t) =>
                  (0, s.jsx)(a, { ...t, guild: n, channel: i, source: e });
              }),
          }),
        _ = (e) =>
          (0, s.jsx)(a.MenuItem, {
            id: "invite-people",
            label: d.Z.Messages.INVITE_PEOPLE,
            color: "brand",
            icon: e === r.t4x.GUILD_HEADER ? a.GroupPlusIcon : void 0,
            action: () =>
              (0, a.openModalLazy)(async () => {
                let { default: e } = await t.e("88358").then(t.bind(t, 598402));
                return (n) => (0, s.jsx)(e, { ...n });
              }),
          });
    },
    894059: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(481060),
        a = t(518756),
        l = t(576749),
        u = t(689938);
      function o(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          o = (0, a.Z)(e),
          r = (0, l.Z)();
        return o
          ? (0, s.jsx)(i.MenuItem, {
              id: "create-event",
              label: u.Z.Messages.SCHEDULE_EVENT,
              icon: n ? i.CalendarPlusIcon : void 0,
              action: () => {
                (0, i.openModalLazy)(async () => {
                  let { default: n } = await Promise.all([
                    t.e("18543"),
                    t.e("53115"),
                    t.e("22347"),
                    t.e("58023"),
                    t.e("91899"),
                  ]).then(t.bind(t, 779250));
                  return (t) => (0, s.jsx)(n, { ...t, guildId: e });
                }, r);
              },
            })
          : null;
      }
    },
    778123: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(442837),
        a = t(481060),
        l = t(87051),
        u = t(9156),
        o = t(621600),
        r = t(689938);
      function d(e) {
        let n = (0, i.e7)([u.ZP], () => u.ZP.isMuteScheduledEventsEnabled(e), [
          e,
        ]);
        return (0, s.jsx)(a.MenuCheckboxItem, {
          id: "mute-events",
          label: r.Z.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
          action: () => {
            var t;
            return (
              (t = { mute_scheduled_events: !n }),
              void l.Z.updateGuildNotificationSettings(
                e,
                t,
                o.UE.mutedEvents(t.mute_scheduled_events),
              )
            );
          },
          checked: n,
        });
      }
    },
    956324: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var s = t(442837),
        i = t(496675),
        a = t(981631);
      function l(e) {
        let {
          canManageGuild: n,
          canManageRoles: t,
          canBanMembers: l,
          canManageNicknames: u,
          canCreateEmojisAndStickers: o,
          canManageEmojisAndStickers: r,
          canManageWebhooks: d,
          canViewAuditLog: c,
        } = (0, s.cj)(
          [i.Z],
          () => ({
            canManageGuild: i.Z.can(a.Plq.MANAGE_GUILD, e),
            canManageRoles: i.Z.can(a.Plq.MANAGE_ROLES, e),
            canBanMembers: i.Z.can(a.Plq.BAN_MEMBERS, e),
            canManageNicknames: i.Z.can(a.Plq.MANAGE_NICKNAMES, e),
            canCreateEmojisAndStickers: i.Z.can(
              a.Plq.CREATE_GUILD_EXPRESSIONS,
              e,
            ),
            canManageEmojisAndStickers: i.Z.can(
              a.Plq.MANAGE_GUILD_EXPRESSIONS,
              e,
            ),
            canManageWebhooks: i.Z.can(a.Plq.MANAGE_WEBHOOKS, e),
            canViewAuditLog: i.Z.can(a.Plq.VIEW_AUDIT_LOG, e),
          }),
          [e],
        );
        return n || t || l || u || o || r || d || c;
      }
    },
    748756: function (e, n, t) {
      t.d(n, {
        V: function () {
          return d;
        },
      }),
        t(399606);
      var s = t(87051),
        i = t(9156),
        a = t(621600),
        l = t(113449),
        u = t(686660),
        o = t(981631),
        r = t(526761);
      function d(e, n) {
        let t = i.ZP.getGuildFlags(e);
        n === u.s8.ALL_MESSAGES
          ? s.Z.updateGuildNotificationSettings(
              e,
              {
                message_notifications: o.bL.ALL_MESSAGES,
                flags: (0, l.Q4)(t, r.vc.UNREADS_ALL_MESSAGES),
              },
              a.ZB.PresetAll,
            )
          : n === u.s8.MENTIONS
            ? s.Z.updateGuildNotificationSettings(
                e,
                {
                  message_notifications: o.bL.ONLY_MENTIONS,
                  flags: (0, l.Q4)(t, r.vc.UNREADS_ONLY_MENTIONS),
                },
                a.ZB.PresetMentions,
              )
            : n === u.s8.NOTHING &&
              s.Z.updateGuildNotificationSettings(
                e,
                {
                  message_notifications: o.bL.NO_MESSAGES,
                  flags: (0, l.Q4)(t, r.vc.UNREADS_ONLY_MENTIONS),
                },
                a.ZB.PresetNothing,
              );
      }
    },
    724213: function (e, n, t) {
      t.d(n, {
        hi: function () {
          return c;
        },
        kH: function () {
          return E;
        },
        rz: function () {
          return _;
        },
      }),
        t(789020),
        t(47120),
        t(653041),
        t(524437);
      var s = t(549817);
      t(581883);
      var i = t(984933),
        a = t(271383),
        l = t(9156),
        u = t(630388),
        o = t(152376),
        r = t(398758),
        d = t(372897);
      function c(e) {
        var n, t;
        let s = (0, r.r1)(e),
          i =
            null !==
              (t =
                null === (n = a.ZP.getSelfMember(e)) || void 0 === n
                  ? void 0
                  : n.flags) && void 0 !== t
              ? t
              : 0,
          o = (0, u.yE)(i, d.q.COMPLETED_ONBOARDING),
          c = l.ZP.getOptedInChannels(e).size > 0;
        return !s && !o && !c;
      }
      function E(e) {
        if (c(e)) {
          _(e);
          return;
        }
        {
          let n = (0, r.r1)(e);
          (0, o.QG)(e, !n);
        }
      }
      function _(e) {
        let { include: n = new Set(), exclude: t = new Set() } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = i.ZP.getChannels(e),
          l = [...a[i.sH], ...a[i.Zb]]
            .filter((e) => {
              let { channel: n } = e;
              return !n.isThread() && !t.has(n.id);
            })
            .map((e) => {
              let { channel: n } = e;
              return n.id;
            });
        n.forEach((e) => l.push(e)), s.Z.onboardExistingMember(e, new Set(l));
      }
    },
    837949: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(442837),
        a = t(481060),
        l = t(430824),
        u = t(594174),
        o = t(724213),
        r = t(398758),
        d = t(981631),
        c = t(689938);
      function E(e) {
        let n = (0, r.DM)(e),
          t = (0, i.e7)([l.Z], () => l.Z.getGuild(e)),
          E = (0, i.e7)([u.default], () => u.default.getCurrentUser());
        return null != E &&
          null != t &&
          (t.hasFeature(d.oNc.COMMUNITY) || E.isStaff())
          ? (0, s.jsx)(a.MenuCheckboxItem, {
              id: "opt-in",
              label: c.Z.Messages.GUILD_CHANNEL_OPT_IN,
              checked: !n,
              action: () => {
                (0, o.kH)(e);
              },
            })
          : null;
      }
    },
    122074: function (e, n, t) {
      t.d(n, {
        U: function () {
          return C;
        },
        Uf: function () {
          return p;
        },
        ng: function () {
          return Z;
        },
      }),
        t(47120);
      var s = t(735250),
        i = t(470079),
        a = t(442837),
        l = t(704215),
        u = t(481060),
        o = t(436774),
        r = t(706140),
        d = t(9156),
        c = t(594174),
        E = t(74538),
        _ = t(759198),
        M = t(11352),
        N = t(213931),
        I = t(767157),
        S = t(112440),
        g = t(671105),
        L = t(552958),
        T = t(981631),
        A = t(921944),
        h = t(871465),
        f = t(689938),
        O = t(100210);
      function Z(e, n) {
        let t = M.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ),
          i = m(
            e,
            void 0,
            l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE,
            t.nestedEntry ? "trailing" : "top",
          ),
          a = (t.nestedEntry && n) || (!t.nestedEntry && !n);
        return (0, s.jsx)(s.Fragment, { children: a && i });
      }
      function p(e, n, t) {
        return m(e, n, l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, t);
      }
      function C() {
        let e = M.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ),
          [n] = (0, r.cv)([l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
        return (0, s.jsx)(s.Fragment, {
          children:
            e.enabled &&
            e.nestedEntry &&
            n === l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
            (0, s.jsx)(u.TextBadge, {
              className: O.newBadge,
              text: f.Z.Messages.NEW,
            }),
        });
      }
      function m(e, n, l, Z) {
        var p, C;
        let m = (0, g.OR)(e),
          x = (0, g._c)(e, n),
          G = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
          b = (0, a.e7)([d.ZP], () => d.ZP.isMuted(e), [e]),
          U = E.ZP.canUseCustomNotificationSounds(G),
          P = U ? (null != x ? x : m) : h.YC.CLASSIC,
          v = M.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ).enabled,
          [R, j] = i.useState(!1),
          { playSound: D } = (0, L.Z)(),
          [y, k] = (0, r.cv)([l]),
          F = y === l;
        if (
          (i.useEffect(
            () => () => {
              R && k(A.L.TAKE_ACTION);
            },
            [R, k],
          ),
          !v)
        )
          return null;
        let B = (t) => {
            if ((D(t), k(A.L.TAKE_ACTION), !U && t !== h.YC.CLASSIC)) {
              (0, I.Z)(t, "contextMenu"), (0, S.Z)();
              return;
            }
            null != n
              ? (0, N.M)(e, n, P, t, "contextMenu")
              : (0, N.t)(e, P, t, "contextMenu");
          },
          Y = U ? u.Text : _.Z,
          H = (0, h.LB)(),
          V =
            null !==
              (C =
                null === (p = H.find((e) => e.value === P)) || void 0 === p
                  ? void 0
                  : p.label) && void 0 !== C
              ? C
              : f.Z.Messages.SOUNDPACK_DEFAULT_LABEL,
          w = (0, s.jsx)(u.TextBadge, {
            className: O.newBadge,
            text: f.Z.Messages.NEW,
          });
        return (0, s.jsx)(u.MenuItem, {
          id: "notification-sounds",
          label: (e) => {
            let { isFocused: n } = e;
            return (
              n && j(n),
              (0, s.jsxs)("div", {
                className: O.rootContainer,
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      F && "top" === Z && w,
                      (0, s.jsxs)("div", {
                        className: O.headerContainer,
                        children: [
                          (0, s.jsx)(Y, {
                            className: O.text,
                            color: n ? "always-white" : void 0,
                            variant: "text-sm/medium",
                            children:
                              f.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND,
                          }),
                          (0, s.jsx)(u.NitroWheelIcon, {
                            size: "xs",
                            className: O.nitroWheel,
                            color: n
                              ? "white"
                              : U
                                ? void 0
                                : o.JX.PREMIUM_TIER_2,
                          }),
                        ],
                      }),
                      null != V &&
                        (0, s.jsx)(Y, {
                          className: O.text,
                          color: n ? "always-white" : void 0,
                          variant: "text-xs/normal",
                          children: V,
                        }),
                    ],
                  }),
                  F && "trailing" === Z && w,
                ],
              })
            );
          },
          action:
            e !== T.aIL
              ? () =>
                  (0, u.openModalLazy)(async () => {
                    let { default: n } = await Promise.all([
                      t.e("5863"),
                      t.e("17468"),
                    ]).then(t.bind(t, 751212));
                    return (t) => (0, s.jsx)(n, { ...t, guildId: e });
                  })
              : void 0,
          hasSubmenu: !0,
          children: (0, s.jsxs)(u.MenuGroup, {
            children: [
              H.map((e, n) =>
                (0, s.jsxs)(
                  i.Fragment,
                  {
                    children: [
                      U || e.value === h.YC.CLASSIC
                        ? (0, s.jsx)(u.MenuRadioItem, {
                            id: e.label,
                            group: "notification-preset",
                            checked: (null != P ? P : h.YC.CLASSIC) === e.value,
                            label: e.label,
                            action: () => B(e.value),
                          })
                        : (0, s.jsx)(u.MenuItem, {
                            id: e.label,
                            label: (n) => {
                              let { isFocused: t } = n;
                              return (0, s.jsxs)("div", {
                                className: O.labelContainer,
                                children: [
                                  (0, s.jsx)(_.Z, {
                                    color: t ? "always-white" : void 0,
                                    variant: "text-sm/medium",
                                    children: e.label,
                                  }),
                                  (0, s.jsx)(u.CirclePlayIcon, {
                                    className: O.playButton,
                                    color: t
                                      ? u.tokens.colors.INTERACTIVE_ACTIVE
                                      : u.tokens.colors.INTERACTIVE_NORMAL,
                                  }),
                                ],
                              });
                            },
                            action: () => B(e.value),
                          }),
                      e.value === h.YC.CLASSIC
                        ? (0, s.jsx)(u.MenuSeparator, {})
                        : null,
                    ],
                  },
                  n,
                ),
              ),
              b &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(u.MenuSeparator, {}),
                    (0, s.jsx)(u.MenuItem, {
                      id: "label",
                      label: (0, s.jsx)(u.Text, {
                        className: O.mutedLabel,
                        variant: "text-sm/medium",
                        children:
                          f.Z.Messages
                            .PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING,
                      }),
                    }),
                  ],
                }),
            ],
          }),
        });
      }
    },
    552958: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      }),
        t(47120);
      var s = t(470079),
        i = t(974180),
        a = t(557177);
      function l() {
        let [e, n] = s.useState(),
          t = s.useRef(-1);
        return {
          playSound: s.useCallback((e) => {
            n(e),
              a.GN(
                i.Ay,
                i.yk,
                () => {
                  clearTimeout(t.current),
                    (t.current = setTimeout(() => {
                      n(void 0);
                    }, 500));
                },
                e,
              );
          }, []),
          isPlaying: null != e,
          soundpackPlaying: e,
        };
      }
    },
    213931: function (e, n, t) {
      t.d(n, {
        M: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      var s = t(381499),
        i = t(675478),
        a = t(592125),
        l = t(626135),
        u = t(981631);
      function o(e, n, t, a) {
        if (n !== t)
          (0, i.PS)(
            e,
            (e) => {
              e.customNotificationSoundConfig = {
                notificationSoundPackId: s.Gm.create({ value: t }),
              };
            },
            i.fy.INFREQUENT_USER_ACTION,
          ),
            l.default.track(u.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
              guild_id: e,
              location: a,
              soundpack: t,
            });
      }
      function r(e, n, t, o, r) {
        var d;
        if (t !== o)
          (0, i.BU)(
            e,
            n,
            (e) => {
              e.customNotificationSoundConfig = {
                notificationSoundPackId: s.Gm.create({ value: o }),
              };
            },
            i.fy.INFREQUENT_USER_ACTION,
          ),
            l.default.track(u.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
              guild_id: e,
              channel_id: n,
              channel_type:
                null === (d = a.Z.getChannel(n)) || void 0 === d
                  ? void 0
                  : d.type,
              location: r,
              soundpack: o,
            });
      }
    },
    767157: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var s = t(626135),
        i = t(981631);
      function a(e, n) {
        s.default.track(i.rMx.CUSTOM_NOTIFICATION_SOUND_OPTION_PLAYED, {
          location: n,
          soundpack: e,
        });
      }
    },
    112440: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(481060);
      function a() {
        (0, i.openModalLazy)(async () => {
          let { default: e } = await t.e("72323").then(t.bind(t, 933006));
          return (n) => (0, s.jsx)(e, { ...n });
        });
      }
    },
  },
]);
//# sourceMappingURL=01a6253bfed3b22a5ba4.js.map
