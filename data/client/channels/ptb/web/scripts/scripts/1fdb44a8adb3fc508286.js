"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33213"],
  {
    5036: function (e, n, t) {
      var i = t(570140),
        l = t(149071),
        a = t(9156);
      n.Z = {
        update(e) {
          i.Z.dispatch({ type: "CHANNEL_COLLAPSE", channelId: e });
        },
        toggleCollapseGuild(e) {
          l.Z.saveUserGuildSettings(e, {
            hide_muted_channels: !a.ZP.isGuildCollapsed(e),
          }),
            i.Z.dispatch({ type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: e });
        },
      };
    },
    241851: function (e, n, t) {
      t.d(n, {
        g: function () {
          return M;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        a = t.n(l),
        s = t(704215),
        r = t(481060),
        u = t(605236),
        o = t(434404),
        d = t(41776),
        c = t(703656),
        g = t(981631),
        E = t(388032),
        h = t(385982);
      let M = (e) => {
        let { guild: n } = e,
          l = n.id,
          M = async () => {
            let e = d.Z.isLurking(l);
            await o.Z.leaveGuild(l),
              e
                ? (0, c.uL)(g.Z5c.GUILD_DISCOVERY)
                : !(0, u.un)(s.z.GUILD_LEAVE_FEEDBACK) &&
                  (0, r.openModalLazy)(async () => {
                    let { default: e } = await t
                      .e("74920")
                      .then(t.bind(t, 131102));
                    return (t) =>
                      (0, i.jsx)(e, { ...t, guildId: l, guildName: n.name });
                  });
          };
        return (0, i.jsx)(r.ConfirmModal, {
          className: a()(h.__invalid_confirmModal),
          bodyClassName: a()(h.__invalid_confirmModalBody),
          header: E.intl.formatToPlainString(E.t["1GX6Pz"], { name: n.name }),
          confirmText: n.hasFeature(g.oNc.HUB)
            ? E.intl.string(E.t.Dv8gFR)
            : E.intl.string(E.t.J2TBi4),
          cancelText: E.intl.string(E.t["ETE/oK"]),
          onConfirm: M,
          ...e,
          children: (0, i.jsx)(r.Text, {
            variant: "text-md/normal",
            children: n.hasFeature(g.oNc.HUB)
              ? E.intl.format(E.t.ZHTXVF, { name: n.name })
              : E.intl.format(E.t.ZEXC0t, { name: n.name }),
          }),
        });
      };
    },
    545135: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return P;
          },
        });
      var i = t(200651);
      t(192379);
      var l = t(512722),
        a = t.n(l),
        s = t(442837),
        r = t(481060),
        u = t(239091),
        o = t(100527),
        d = t(906732),
        c = t(299206),
        g = t(894059),
        E = t(423589),
        h = t(837949),
        M = t(122074),
        f = t(314897),
        _ = t(984933),
        N = t(594174),
        S = t(241851),
        I = t(94953),
        p = t(976192),
        m = t(904483),
        x = t(429824),
        L = t(919815),
        A = t(858822),
        b = t(993356),
        Z = t(58338),
        v = t(422525),
        G = t(522762),
        C = t(466330),
        j = t(981631),
        T = t(388032);
      function O(e) {
        let { guild: n, onSelect: l, hideSettings: o } = e,
          d = n.id,
          O = _.ZP.getDefaultChannel(d),
          P = (0, s.e7)(
            [N.default],
            () => {
              let e = N.default.getCurrentUser();
              return (
                a()(null != e, "GuildContextMenu: user cannot be undefined"),
                n.isOwner(e)
              );
            },
            [n],
          ),
          y = (0, C.Z)({
            guild: n,
            source: j.t4x.GUILD_CONTEXT_MENU,
            channel: O,
          }),
          U = (0, G.Z)(d),
          D = (0, A.Z)(n),
          R = (0, b.Z)(n),
          k = (0, v.Z)(n),
          w = (0, p.Z)({
            guildId: n.id,
            userId: f.default.getId(),
            analyticsLocation: {
              page: j.ZY5.GUILD_CHANNEL,
              section: j.jXE.CHAT_USERNAME,
              object: j.qAy.CONTEXT_MENU_ITEM,
            },
          }),
          B = (0, I.Z)({
            guildId: n.id,
            userId: f.default.getId(),
            analyticsLocation: {
              page: j.ZY5.GUILD_CHANNEL,
              section: j.jXE.CHAT_USERNAME,
              object: j.qAy.CONTEXT_MENU_ITEM,
            },
          }),
          F = (0, m.Z)(n),
          H = (0, g.Z)(n.id),
          Y = (0, c.Z)({ id: n.id, label: T.intl.string(T.t["94lLDw"]) }),
          z = (0, L.Z)(n, { section: j.jXE.GUILD_LIST }),
          V = (0, h.Z)(n.id),
          q = (0, Z.Z)(n.id),
          K = (0, M.ng)(n.id, !1),
          X = (0, x.Z)(n),
          W = (0, E.Mn)("GuildContextMenu");
        function Q() {
          (0, r.openModal)((e) => (0, i.jsx)(S.g, { ...e, guild: n }));
        }
        return n.hasFeature(j.oNc.HUB)
          ? (0, i.jsxs)(r.Menu, {
              navId: "guild-context",
              onClose: u.Zy,
              "aria-label": T.intl.string(T.t.HpQykZ),
              onSelect: l,
              children: [
                (0, i.jsxs)(r.MenuGroup, {
                  children: [
                    y,
                    (0, i.jsx)(r.MenuItem, {
                      id: "privacy",
                      label: T.intl.string(T.t.IlFwwc),
                      action: () =>
                        (0, r.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                            t.e("77298"),
                            t.e("23357"),
                            t.e("50506"),
                            t.e("96211"),
                            t.e("23217"),
                            t.e("84605"),
                            t.e("12013"),
                            t.e("73503"),
                            t.e("8016"),
                            t.e("52249"),
                            t.e("68956"),
                            t.e("6380"),
                            t.e("72181"),
                            t.e("26182"),
                            t.e("18543"),
                            t.e("95900"),
                            t.e("51269"),
                            t.e("32776"),
                            t.e("66711"),
                            t.e("13351"),
                            t.e("76540"),
                            t.e("86282"),
                            t.e("17938"),
                            t.e("21628"),
                            t.e("95393"),
                            t.e("87624"),
                            t.e("74421"),
                            t.e("18101"),
                            t.e("24207"),
                            t.e("25788"),
                            t.e("46097"),
                            t.e("22646"),
                            t.e("8739"),
                            t.e("58059"),
                            t.e("3940"),
                            t.e("18895"),
                            t.e("24391"),
                            t.e("57674"),
                            t.e("99393"),
                            t.e("48923"),
                            t.e("30419"),
                            t.e("99008"),
                            t.e("57661"),
                            t.e("8821"),
                            t.e("18824"),
                            t.e("38175"),
                            t.e("34935"),
                            t.e("37229"),
                            t.e("25183"),
                            t.e("28044"),
                            t.e("48542"),
                            t.e("57085"),
                            t.e("80566"),
                          ]).then(t.bind(t, 241420));
                          return (t) => (0, i.jsx)(e, { ...t, guild: n });
                        }),
                    }),
                    w,
                  ],
                }),
                P
                  ? null
                  : (0, i.jsx)(r.MenuGroup, {
                      children: (0, i.jsx)(r.MenuItem, {
                        id: "leave-guild",
                        label: T.intl.string(T.t.Dv8gFR),
                        action: Q,
                        color: "danger",
                      }),
                    }),
                (0, i.jsx)(r.MenuGroup, { children: Y }),
              ],
            })
          : (0, i.jsxs)(r.Menu, {
              navId: "guild-context",
              onClose: u.Zy,
              "aria-label": T.intl.string(T.t.HpQykZ),
              onSelect: l,
              children: [
                (0, i.jsx)(r.MenuGroup, { children: z }),
                (0, i.jsx)(r.MenuGroup, { children: y }),
                (0, i.jsxs)(r.MenuGroup, {
                  children: [
                    D,
                    W || __OVERLAY__ ? null : R,
                    W && !__OVERLAY__ ? q : null,
                    K,
                    U,
                    V,
                  ],
                }),
                (0, i.jsxs)(r.MenuGroup, {
                  children: [
                    o ? null : k,
                    __OVERLAY__
                      ? null
                      : (0, i.jsx)(r.MenuItem, {
                          id: "privacy",
                          label: T.intl.string(T.t.BayiAg),
                          action: () =>
                            (0, r.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                t.e("77298"),
                                t.e("23357"),
                                t.e("50506"),
                                t.e("96211"),
                                t.e("23217"),
                                t.e("84605"),
                                t.e("12013"),
                                t.e("73503"),
                                t.e("8016"),
                                t.e("52249"),
                                t.e("68956"),
                                t.e("6380"),
                                t.e("72181"),
                                t.e("26182"),
                                t.e("18543"),
                                t.e("95900"),
                                t.e("51269"),
                                t.e("32776"),
                                t.e("66711"),
                                t.e("13351"),
                                t.e("76540"),
                                t.e("86282"),
                                t.e("17938"),
                                t.e("21628"),
                                t.e("95393"),
                                t.e("87624"),
                                t.e("74421"),
                                t.e("18101"),
                                t.e("24207"),
                                t.e("25788"),
                                t.e("46097"),
                                t.e("22646"),
                                t.e("8739"),
                                t.e("58059"),
                                t.e("3940"),
                                t.e("18895"),
                                t.e("24391"),
                                t.e("57674"),
                                t.e("99393"),
                                t.e("48923"),
                                t.e("30419"),
                                t.e("99008"),
                                t.e("57661"),
                                t.e("8821"),
                                t.e("18824"),
                                t.e("38175"),
                                t.e("34935"),
                                t.e("37229"),
                                t.e("25183"),
                                t.e("28044"),
                                t.e("48542"),
                                t.e("57085"),
                                t.e("80566"),
                              ]).then(t.bind(t, 241420));
                              return (t) => (0, i.jsx)(e, { ...t, guild: n });
                            }),
                        }),
                    w,
                    B,
                  ],
                }),
                (0, i.jsxs)(r.MenuGroup, { children: [F, H] }),
                (0, i.jsxs)(r.MenuGroup, {
                  children: [
                    X,
                    !P &&
                      (0, i.jsx)(r.MenuItem, {
                        id: "leave-guild",
                        label: T.intl.string(T.t.J2TBi4),
                        action: Q,
                        color: "danger",
                      }),
                  ],
                }),
                (0, i.jsx)(r.MenuGroup, { children: Y }),
              ],
            });
      }
      function P(e) {
        let { analyticsLocations: n } = (0, d.ZP)(o.Z.CONTEXT_MENU);
        return (0, i.jsx)(d.Gt, {
          value: n,
          children: (0, i.jsx)(O, { ...e }),
        });
      }
    },
    94953: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(442837),
        s = t(481060),
        r = t(616780),
        u = t(100527),
        o = t(931240),
        d = t(353093),
        c = t(314897),
        g = t(271383),
        E = t(430824),
        h = t(496675),
        M = t(594174),
        f = t(981631),
        _ = t(388032);
      function N(e) {
        let {
            guildId: n,
            userId: t,
            analyticsLocation: N,
            analyticsLocations: S,
            context: I,
            icon: p,
          } = e,
          m = (0, a.e7)([E.Z], () => E.Z.getGuild(n), [n]),
          x = (0, a.e7)([c.default], () => c.default.getId()),
          L = (0, a.e7)([M.default], () => M.default.getUser(t)),
          A = (0, a.e7)([g.ZP], () => g.ZP.isGuestOrLurker(n, t), [n, t]),
          b = l.useMemo(() => ({ [n]: [t] }), [n, t]),
          Z = (0, d.EJ)(m);
        (0, r.$)(b);
        let v = I === f.IlC.POPOUT,
          G = x === t,
          [C, j] = (0, a.Wu)(
            [h.Z],
            () => {
              if (null == m) return [!1, !1];
              let e =
                x === t &&
                (h.Z.can(f.Plq.CHANGE_NICKNAME, m) ||
                  h.Z.can(f.Plq.MANAGE_NICKNAMES, m));
              return [e, h.Z.canManageUser(f.Plq.MANAGE_NICKNAMES, t, m)];
            },
            [x, t, m],
          ),
          T = l.useCallback(
            (e, n) => () => {
              (0, o.nE)(e, n, u.Z.CONTEXT_MENU);
            },
            [],
          );
        return null != m &&
          !v &&
          (C || j || G) &&
          null != L &&
          !A &&
          Z &&
          L.isStaff()
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(s.MenuItem, {
                  id: "adopt-clan-identity",
                  label: _.intl.string(_.t.A2gzRU),
                  icon: p,
                  action: T(n, !0),
                }),
                (0, i.jsx)(s.MenuItem, {
                  id: "deadopt-clan-identity",
                  label: _.intl.string(_.t.RFfO9v),
                  icon: p,
                  action: T(null, null),
                }),
              ],
            })
          : null;
      }
    },
    976192: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return S;
        },
      });
      var i = t(200651),
        l = t(192379),
        a = t(442837),
        s = t(481060),
        r = t(616780),
        u = t(40851),
        o = t(300284),
        d = t(484459),
        c = t(314897),
        g = t(271383),
        E = t(430824),
        h = t(496675),
        M = t(594174),
        f = t(981631),
        _ = t(388032),
        N = t(497523);
      function S(e) {
        let {
            guildId: n,
            userId: S,
            analyticsLocation: I,
            analyticsLocations: p,
            context: m,
            icon: x,
          } = e,
          L = E.Z.getGuild(n),
          A = c.default.getId(),
          b = (0, a.e7)([M.default], () => M.default.getUser(S)),
          Z = (0, a.e7)([g.ZP], () => g.ZP.isGuestOrLurker(n, S), [n, S]);
        (0, a.e7)([h.Z], () => h.Z.getGuildVersion(n), [n]);
        let v = l.useMemo(() => ({ [n]: [S] }), [n, S]);
        (0, r.$)(v);
        let G = m === f.IlC.POPOUT,
          C = (0, o.Z)({ guild: L, analyticsLocation: I }),
          j = (0, u.Aq)();
        if (null == L || G) return null;
        let T =
            A === S &&
            (h.Z.can(f.Plq.CHANGE_NICKNAME, L) ||
              h.Z.can(f.Plq.MANAGE_NICKNAMES, L)),
          O = A === S,
          P = h.Z.canManageUser(f.Plq.MANAGE_NICKNAMES, S, L);
        if (!(T || P || O) || null == b || Z) return null;
        let y = L.hasFeature(f.oNc.HUB)
            ? _.intl.string(_.t["+MWrWl"])
            : _.intl.string(_.t["PKQB/P"]),
          U = O ? y : _.intl.string(_.t.dilOFx);
        return (0, i.jsx)(s.MenuItem, {
          id: "change-nickname",
          label: (0, i.jsx)("div", {
            className: N.labelWrapper,
            children: (0, i.jsx)("span", { className: N.label, children: U }),
          }),
          icon: x,
          action: () => {
            O
              ? ((0, d.Z)(b.id, b.getAvatarURL(n, 80), { guildId: n }),
                C(),
                j.dispatch(f.CkL.POPOUT_CLOSE),
                (0, s.closeAllModals)())
              : (0, s.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("17712")
                    .then(t.bind(t, 620021));
                  return (t) =>
                    (0, i.jsx)(e, {
                      ...t,
                      guildId: n,
                      user: b,
                      analyticsSource: I,
                      analyticsLocations: p,
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
      var i = t(200651);
      t(192379);
      var l = t(442837),
        a = t(481060),
        s = t(496675),
        r = t(981631),
        u = t(647086),
        o = t(388032);
      function d(e) {
        let n = (0, l.e7)([s.Z], () => s.Z.can(r.Plq.MANAGE_CHANNELS, e));
        return __OVERLAY__
          ? null
          : e.id === u._
            ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(a.MenuItem, {
                  id: "create-category",
                  label: o.intl.string(o.t["ISN+ND"]),
                  action: () =>
                    (0, a.openModalLazy)(async () => {
                      let { default: e } = await t
                        .e("1812")
                        .then(t.bind(t, 477782));
                      return (n) => (0, i.jsx)(e, { ...n });
                    }),
                }),
              })
            : n
              ? [
                  (0, i.jsx)(
                    a.MenuItem,
                    {
                      id: "create-channel",
                      label: o.intl.string(o.t["fUYU+v"]),
                      action: () =>
                        (0, a.openModalLazy)(async () => {
                          let { default: n } = await Promise.all([
                            t.e("7590"),
                            t.e("45094"),
                            t.e("74100"),
                          ]).then(t.bind(t, 218613));
                          return (t) =>
                            (0, i.jsx)(n, {
                              ...t,
                              channelType: r.d4z.GUILD_TEXT,
                              guildId: e.id,
                            });
                        }),
                    },
                    "create-channel",
                  ),
                  (0, i.jsx)(
                    a.MenuItem,
                    {
                      id: "create-category",
                      label: o.intl.string(o.t["ISN+ND"]),
                      action: () =>
                        (0, a.openModalLazy)(async () => {
                          let { default: n } = await Promise.all([
                            t.e("7590"),
                            t.e("45094"),
                            t.e("74100"),
                          ]).then(t.bind(t, 218613));
                          return (t) =>
                            (0, i.jsx)(n, {
                              ...t,
                              channelType: r.d4z.GUILD_CATEGORY,
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
      var i = t(200651),
        l = t(192379),
        a = t(481060),
        s = t(528011),
        r = t(666657),
        u = t(533244),
        o = t(388032);
      function d(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          {
            shouldShowIncidentActions: d,
            isUnderLockdown: c,
            incidentData: g,
          } = (0, s.mI)(e.id),
          E = l.useCallback(() => {
            let n = { source: r.Zu.CONTEXT_MENU, alertType: (0, u.T1)(g) };
            (0, a.openModalLazy)(async () => {
              let { default: l } = await t.e("61536").then(t.bind(t, 664452));
              return (t) =>
                (0, i.jsx)(l, { ...t, guildId: e.id, analyticsData: n });
            });
          }, [e.id, g]);
        return e.isCommunity() && d
          ? (0, i.jsx)(a.MenuItem, {
              id: "server-lockdown",
              label: c
                ? o.intl.string(o.t["+tSVi4"])
                : o.intl.string(o.t.EPlEdn),
              icon: n ? (c ? a.LockUnlockedIcon : a.LockIcon) : void 0,
              action: E,
              color: "danger",
            })
          : null;
      }
    },
    919815: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        a = t(481060),
        s = t(888369),
        r = t(181945),
        u = t(388032);
      function o(e, n) {
        let t = e.id,
          o = (0, l.e7)(
            [s.default],
            () => s.default.getGuildHasUnreadIgnoreMuted(t),
            [t],
          );
        return (0, i.jsx)(a.MenuItem, {
          id: "mark-guild-read",
          label: u.intl.string(u.t.e6RscX),
          icon: void 0,
          action: () => (0, r.Z)([t], n.section),
          disabled: !o,
        });
      }
    },
    993356: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        a = t(481060),
        s = t(87051),
        r = t(778123),
        u = t(122074),
        o = t(9156),
        d = t(621600),
        c = t(981631),
        g = t(388032);
      function E() {
        return [
          { setting: c.bL.ALL_MESSAGES, label: g.intl.string(g.t["n/bTaW"]) },
          { setting: c.bL.ONLY_MENTIONS, label: g.intl.format(g.t.L2hmY2, {}) },
          { setting: c.bL.NO_MESSAGES, label: g.intl.string(g.t.CtVGyc) },
        ];
      }
      function h(e) {
        var n, h;
        let M = (function (e) {
            let {
                suppressEveryone: n,
                suppressRoles: t,
                mobilePush: h,
                messageNotifications: M,
                notifyHighlights: f,
              } = (0, l.cj)(
                [o.ZP],
                () => ({
                  suppressEveryone: o.ZP.isSuppressEveryoneEnabled(e.id),
                  suppressRoles: o.ZP.isSuppressRolesEnabled(e.id),
                  mobilePush: o.ZP.isMobilePushEnabled(e.id),
                  messageNotifications: o.ZP.getMessageNotifications(e.id),
                  notifyHighlights: o.ZP.getNotifyHighlights(e.id),
                }),
                [e.id],
              ),
              _ = f === c.gLR.DISABLED,
              N = (0, r.Z)(e.id);
            function S(n, t) {
              s.Z.updateGuildNotificationSettings(e.id, n, t);
            }
            let I = (0, u.ng)(e.id, !0);
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(a.MenuGroup, {
                  children: E().map((e) => {
                    let { setting: n, label: t } = e;
                    return (0, i.jsx)(
                      a.MenuRadioItem,
                      {
                        group: "guild-notifications",
                        id: "".concat(n),
                        label: t,
                        action: () =>
                          S(
                            { message_notifications: n },
                            d.UE.notifications(n),
                          ),
                        checked: n === M,
                      },
                      n,
                    );
                  }),
                }),
                null != I && (0, i.jsx)(a.MenuGroup, { children: I }),
                (0, i.jsxs)(a.MenuGroup, {
                  children: [
                    (0, i.jsx)(a.MenuCheckboxItem, {
                      id: "suppress-everyone",
                      label: g.intl.format(g.t.OWiWAg, {}),
                      action: () =>
                        S({ suppress_everyone: !n }, d.UE.suppressEveryone(!n)),
                      checked: n,
                    }),
                    (0, i.jsx)(a.MenuCheckboxItem, {
                      id: "suppress-roles",
                      label: g.intl.string(g.t["O/QdoK"]),
                      action: () =>
                        S({ suppress_roles: !t }, d.UE.suppressRoles(!t)),
                      checked: t,
                    }),
                    (0, i.jsx)(a.MenuCheckboxItem, {
                      id: "suppress-highlights",
                      label: g.intl.string(g.t.gPuteH),
                      action: () => {
                        S(
                          {
                            notify_highlights: _
                              ? c.gLR.ENABLED
                              : c.gLR.DISABLED,
                          },
                          d.UE.highlights(_),
                        );
                      },
                      checked: _,
                    }),
                    N,
                  ],
                }),
                (0, i.jsx)(a.MenuGroup, {
                  children: (0, i.jsx)(a.MenuCheckboxItem, {
                    id: "mobile-push",
                    label: g.intl.string(g.t["h1DL6+"]),
                    action: () => S({ mobile_push: !h }, d.UE.mobilePush(!h)),
                    checked: h,
                  }),
                }),
              ],
            });
          })(e),
          f = (0, l.e7)([o.ZP], () => o.ZP.getMessageNotifications(e.id), [
            e.id,
          ]),
          _ =
            null === (h = E()) || void 0 === h
              ? void 0
              : null ===
                    (n = h.find((e) => {
                      let { setting: n } = e;
                      return n === f;
                    })) || void 0 === n
                ? void 0
                : n.label,
          N = (0, u.U)();
        return null != M
          ? (0, i.jsx)(a.MenuItem, {
              id: "guild-notifications",
              label: (0, i.jsxs)(i.Fragment, {
                children: [N, g.intl.string(g.t.h850Sk)],
              }),
              subtext: _,
              action: () =>
                (0, a.openModalLazy)(async () => {
                  let { default: n } = await Promise.all([
                    t.e("5863"),
                    t.e("67913"),
                  ]).then(t.bind(t, 751212));
                  return (t) => (0, i.jsx)(n, { ...t, guildId: e.id });
                }),
              children: M,
            })
          : null;
      }
    },
    58338: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      }),
        t(47120),
        t(789020);
      var i = t(200651),
        l = t(192379),
        a = t(442837),
        s = t(481060),
        r = t(87051),
        u = t(113449),
        o = t(748756),
        d = t(686660),
        c = t(122074),
        g = t(9156),
        E = t(621600),
        h = t(981631),
        M = t(490897),
        f = t(526761),
        _ = t(388032);
      function N(e) {
        let n = (0, c.ng)(e, !0),
          N = (0, c.U)();
        return (0, i.jsxs)(s.MenuItem, {
          id: "notification",
          label: (0, i.jsxs)(i.Fragment, {
            children: [N, _.intl.string(_.t.HcoRu7)],
          }),
          action: () => {
            (0, s.openModalLazy)(async () => {
              let { default: n } = await Promise.all([
                t.e("5863"),
                t.e("67913"),
              ]).then(t.bind(t, 751212));
              return (t) => (0, i.jsx)(n, { ...t, guildId: e });
            });
          },
          children: [
            (function (e) {
              let [n, t] = l.useState(!1),
                [c, N] = l.useState(!1),
                S = (0, a.e7)([g.ZP], () => g.ZP.getGuildUnreadSetting(e)),
                I = (0, a.e7)([g.ZP], () => g.ZP.getMessageNotifications(e)),
                p = c ? d.s8.CUSTOM : (0, d.gs)(S, I),
                m = (n) => {
                  N(!1);
                  let t = { message_notifications: n };
                  n === h.bL.ALL_MESSAGES &&
                    S !== M.i.ALL_MESSAGES &&
                    (t.flags = (0, u.Q4)(
                      g.ZP.getGuildFlags(e),
                      f.vc.UNREADS_ALL_MESSAGES,
                    )),
                    r.Z.updateGuildNotificationSettings(
                      e,
                      t,
                      E.UE.notifications(n),
                    );
                },
                x = (n) => {
                  N(!1);
                  let t = g.ZP.getGuildFlags(e);
                  r.Z.updateGuildNotificationSettings(
                    e,
                    {
                      flags: (0, u.Q4)(
                        t,
                        n === M.i.ALL_MESSAGES
                          ? f.vc.UNREADS_ALL_MESSAGES
                          : f.vc.UNREADS_ONLY_MENTIONS,
                      ),
                    },
                    E.UE.unreads(n),
                  );
                };
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)(s.MenuGroup, {
                    children: [
                      (0, i.jsx)(s.MenuRadioItem, {
                        id: "everything",
                        group: "notification-preset",
                        checked: p === d.s8.ALL_MESSAGES,
                        label: _.intl.string(_.t.hZrr6u),
                        action: () => ((0, o.V)(e, d.s8.ALL_MESSAGES), N(!1)),
                      }),
                      (0, i.jsx)(s.MenuRadioItem, {
                        id: "essentials",
                        group: "notification-preset",
                        checked: p === d.s8.MENTIONS,
                        label: _.intl.string(_.t.y59NJi),
                        action: () => ((0, o.V)(e, d.s8.MENTIONS), N(!1)),
                      }),
                      (0, i.jsx)(s.MenuRadioItem, {
                        id: "nothing",
                        group: "notification-preset",
                        checked: p === d.s8.NOTHING,
                        label: _.intl.string(_.t["pGn/bG"]),
                        action: () => ((0, o.V)(e, d.s8.NOTHING), N(!1)),
                      }),
                      (0, i.jsx)(s.MenuRadioItem, {
                        id: "custom",
                        group: "notification-preset",
                        checked: p === d.s8.CUSTOM,
                        action: () => (t(!0), N(!0)),
                        label: _.intl.string(_.t["32yow8"]),
                      }),
                    ],
                  }),
                  (p === d.s8.CUSTOM || n) &&
                    (0, i.jsxs)(s.MenuGroup, {
                      children: [
                        (0, i.jsxs)(
                          s.MenuItem,
                          {
                            id: "unread_setting",
                            label: "Unread Badges",
                            children: [
                              (0, i.jsx)(s.MenuRadioItem, {
                                id: "unread_setting_all_messages",
                                group: "unread_setting",
                                checked: S === M.i.ALL_MESSAGES,
                                label: _.intl.string(_.t["HVah//"]),
                                action: () => x(M.i.ALL_MESSAGES),
                              }),
                              (0, i.jsx)(s.MenuRadioItem, {
                                id: "unread_setting_mention_only",
                                group: "unread_setting",
                                checked: S === M.i.ONLY_MENTIONS,
                                label: _.intl.string(_.t["tu+ZWF"]),
                                action: () => x(M.i.ONLY_MENTIONS),
                                disabled:
                                  S !== M.i.ONLY_MENTIONS &&
                                  I === h.bL.ALL_MESSAGES,
                                subtext:
                                  S !== M.i.ONLY_MENTIONS &&
                                  I === h.bL.ALL_MESSAGES
                                    ? _.intl.string(_.t.eP8yWV)
                                    : void 0,
                              }),
                            ],
                          },
                          "unread_setting",
                        ),
                        (0, i.jsxs)(
                          s.MenuItem,
                          {
                            id: "push_settings",
                            label: _.intl.string(_.t.HcoRu7),
                            children: [
                              (0, i.jsx)(s.MenuRadioItem, {
                                group: "notification-preset",
                                id: "push_settings_everything",
                                label: _.intl.string(_.t["HVah//"]),
                                checked: I === h.bL.ALL_MESSAGES,
                                action: () => m(h.bL.ALL_MESSAGES),
                                subtext:
                                  S !== M.i.ALL_MESSAGES &&
                                  I !== h.bL.ALL_MESSAGES
                                    ? _.intl.string(_.t.idXSbG)
                                    : void 0,
                              }),
                              (0, i.jsx)(s.MenuRadioItem, {
                                group: "notification-preset",
                                id: "push_settings_everything_mention",
                                checked: I === h.bL.ONLY_MENTIONS,
                                label: _.intl.string(_.t["tu+ZWF"]),
                                action: () => m(h.bL.ONLY_MENTIONS),
                              }),
                              (0, i.jsx)(s.MenuRadioItem, {
                                group: "notification-preset",
                                id: "push_settings_everything_nothing",
                                label: _.intl.string(_.t.X4wWUl),
                                checked: I === h.bL.NO_MESSAGES,
                                action: () => m(h.bL.NO_MESSAGES),
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
            null != n && (0, i.jsx)(s.MenuGroup, { children: n }),
            (function (e) {
              let n = (0, a.cj)([g.ZP], () => ({
                  highligths: g.ZP.getNotifyHighlights(e),
                  mobilePush: g.ZP.isMobilePushEnabled(e),
                  suppressRoles: g.ZP.isSuppressRolesEnabled(e),
                  suppressEveryone: g.ZP.isSuppressEveryoneEnabled(e),
                  muteScheduledEvents: g.ZP.isMuteScheduledEventsEnabled(e),
                })),
                t = r.Z.updateGuildNotificationSettings;
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)(s.MenuGroup, {
                    children: [
                      (0, i.jsx)(s.MenuCheckboxItem, {
                        id: "mention",
                        checked: n.suppressEveryone,
                        label: _.intl.format(_.t.OWiWAg, {}),
                        action: () =>
                          t(
                            e,
                            { suppress_everyone: !n.suppressEveryone },
                            E.UE.suppressEveryone(!n.suppressEveryone),
                          ),
                      }),
                      (0, i.jsx)(s.MenuCheckboxItem, {
                        id: "roles",
                        checked: n.suppressRoles,
                        label: _.intl.string(_.t["O/QdoK"]),
                        action: () =>
                          t(
                            e,
                            { suppress_roles: !n.suppressRoles },
                            E.UE.suppressRoles(!n.suppressRoles),
                          ),
                      }),
                      (0, i.jsx)(s.MenuCheckboxItem, {
                        id: "hightlight",
                        label: _.intl.string(_.t.gPuteH),
                        checked: n.highligths === h.gLR.ENABLED,
                        action: () =>
                          t(
                            e,
                            {
                              notify_highlights:
                                n.highligths === h.gLR.ENABLED
                                  ? h.gLR.DISABLED
                                  : h.gLR.ENABLED,
                            },
                            E.UE.highlights(n.highligths !== h.gLR.ENABLED),
                          ),
                      }),
                    ],
                  }),
                  (0, i.jsxs)(s.MenuGroup, {
                    children: [
                      (0, i.jsx)(s.MenuCheckboxItem, {
                        id: "event",
                        checked: n.muteScheduledEvents,
                        label: _.intl.string(_.t.ONG3Y2),
                        action: () =>
                          t(
                            e,
                            { mute_scheduled_events: !n.muteScheduledEvents },
                            E.UE.mutedEvents(!n.muteScheduledEvents),
                          ),
                      }),
                      (0, i.jsx)(s.MenuCheckboxItem, {
                        id: "mobile_push",
                        checked: n.mobilePush,
                        label: _.intl.string(_.t["h1DL6+"]),
                        action: () =>
                          t(
                            e,
                            { mobile_push: !n.mobilePush },
                            E.UE.mobilePush(!n.mobilePush),
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
          return f;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        a = t(40851),
        s = t(132871),
        r = t(147890),
        u = t(593128),
        o = t(434404),
        d = t(956324),
        c = t(640678),
        g = t(84615),
        E = t(981631),
        h = t(308083),
        M = t(388032);
      function f(e) {
        let n = (0, a.Aq)(),
          t = (0, d.Z)(e);
        if (__OVERLAY__ || !t) return null;
        let f = (t) => {
          o.Z.open(e.id, t),
            n.dispatch(E.CkL.POPOUT_CLOSE),
            (0, l.closeAllModals)();
        };
        return (0, i.jsx)(l.MenuItem, {
          id: "guild-settings",
          label: M.intl.string(M.t["154/bG"]),
          action: () => f(),
          children: (0, c.t)(e).map((n) => {
            let { section: t, label: a } = n;
            if (null == a) return null;
            switch (t) {
              case E.pNK.DELETE:
                return null;
              case E.pNK.COMMUNITY:
                return (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: t,
                    action: () => f(t),
                    label: M.intl.string(M.t.nRtNqq),
                  },
                  t,
                );
              case E.pNK.APP_DIRECTORY:
                return (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: t,
                    action: () => {
                      (0, r.goToAppDirectory)({
                        guildId: e.id,
                        entrypoint: {
                          name: s.ApplicationDirectoryEntrypointNames
                            .GUILD_CONTEXT_MENU,
                        },
                      });
                    },
                    label: a,
                  },
                  t,
                );
              case E.pNK.CLAN:
                return (0, i.jsx)(l.MenuItem, {
                  id: "guild-settings",
                  label: M.intl.string(M.t["6g8uHB"]),
                  action: () =>
                    (0, g.q4)(
                      (n) => {
                        let { closeLayer: t } = n;
                        return (0, i.jsx)(u.Z, { onClose: t, guildId: e.id });
                      },
                      { layerKey: h.q2 },
                    ),
                });
              default:
                return (0, i.jsx)(
                  l.MenuItem,
                  { id: t, action: () => f(t), label: a },
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
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        a = t(481060),
        s = t(5036),
        r = t(9156),
        u = t(388032);
      function o(e) {
        let n = (0, l.e7)([r.ZP], () => r.ZP.isGuildCollapsed(e), [e]);
        return (0, i.jsx)(a.MenuCheckboxItem, {
          id: "hide-muted-channels",
          label: u.intl.string(u.t.UwOLJC),
          action: () => s.Z.toggleCollapseGuild(e),
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
      var i = t(200651);
      t(192379);
      var l = t(442837),
        a = t(481060),
        s = t(159300),
        r = t(984933),
        u = t(496675),
        o = t(981631),
        d = t(388032);
      function c(e) {
        let { source: n, guild: t, channel: i, stageInstance: a } = e,
          d = (0, l.e7)([r.ZP], () =>
            r.ZP.getDefaultChannel(t.id, !0, o.Plq.CREATE_INSTANT_INVITE),
          ),
          c = (0, l.e7)([u.Z], () => (0, s.b)(u.Z, t, i, a)),
          h = g(n, t, c && null != i ? i : d),
          M = E(n);
        return null == i && n === o.t4x.GUILD_CONTEXT_MENU
          ? null
          : c || null != d
            ? h
            : M;
      }
      let g = (e, n, l) =>
          (0, i.jsx)(a.MenuItem, {
            id: "invite-people",
            label: d.intl.string(d.t.BN75l5),
            color: "brand",
            icon: e === o.t4x.GUILD_HEADER ? a.GroupPlusIcon : void 0,
            action: () =>
              (0, a.openModalLazy)(async () => {
                let { default: a } = await Promise.all([
                  t.e("7654"),
                  t.e("86004"),
                ]).then(t.bind(t, 560114));
                return (t) =>
                  (0, i.jsx)(a, { ...t, guild: n, channel: l, source: e });
              }),
          }),
        E = (e) =>
          (0, i.jsx)(a.MenuItem, {
            id: "invite-people",
            label: d.intl.string(d.t.BN75l5),
            color: "brand",
            icon: e === o.t4x.GUILD_HEADER ? a.GroupPlusIcon : void 0,
            action: () =>
              (0, a.openModalLazy)(async () => {
                let { default: e } = await t.e("88358").then(t.bind(t, 598402));
                return (n) => (0, i.jsx)(e, { ...n });
              }),
          });
    },
    894059: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        a = t(518756),
        s = t(576749),
        r = t(388032);
      function u(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          u = (0, a.Z)(e),
          o = (0, s.Z)();
        return u
          ? (0, i.jsx)(l.MenuItem, {
              id: "create-event",
              label: r.intl.string(r.t["60lJ0N"]),
              icon: n ? l.CalendarPlusIcon : void 0,
              action: () => {
                (0, l.openModalLazy)(async () => {
                  let { default: n } = await Promise.all([
                    t.e("18543"),
                    t.e("22347"),
                    t.e("58023"),
                    t.e("99267"),
                  ]).then(t.bind(t, 779250));
                  return (t) => (0, i.jsx)(n, { ...t, guildId: e });
                }, o);
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
      var i = t(200651);
      t(192379);
      var l = t(442837),
        a = t(481060),
        s = t(87051),
        r = t(9156),
        u = t(621600),
        o = t(388032);
      function d(e) {
        let n = (0, l.e7)([r.ZP], () => r.ZP.isMuteScheduledEventsEnabled(e), [
          e,
        ]);
        return (0, i.jsx)(a.MenuCheckboxItem, {
          id: "mute-events",
          label: o.intl.string(o.t.ONG3Y2),
          action: () => {
            var t;
            return (
              (t = { mute_scheduled_events: !n }),
              void s.Z.updateGuildNotificationSettings(
                e,
                t,
                u.UE.mutedEvents(t.mute_scheduled_events),
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
          return s;
        },
      });
      var i = t(442837),
        l = t(496675),
        a = t(981631);
      function s(e) {
        let {
          canManageGuild: n,
          canManageRoles: t,
          canBanMembers: s,
          canManageNicknames: r,
          canCreateEmojisAndStickers: u,
          canManageEmojisAndStickers: o,
          canManageWebhooks: d,
          canViewAuditLog: c,
        } = (0, i.cj)(
          [l.Z],
          () => ({
            canManageGuild: l.Z.can(a.Plq.MANAGE_GUILD, e),
            canManageRoles: l.Z.can(a.Plq.MANAGE_ROLES, e),
            canBanMembers: l.Z.can(a.Plq.BAN_MEMBERS, e),
            canManageNicknames: l.Z.can(a.Plq.MANAGE_NICKNAMES, e),
            canCreateEmojisAndStickers: l.Z.can(
              a.Plq.CREATE_GUILD_EXPRESSIONS,
              e,
            ),
            canManageEmojisAndStickers: l.Z.can(
              a.Plq.MANAGE_GUILD_EXPRESSIONS,
              e,
            ),
            canManageWebhooks: l.Z.can(a.Plq.MANAGE_WEBHOOKS, e),
            canViewAuditLog: l.Z.can(a.Plq.VIEW_AUDIT_LOG, e),
          }),
          [e],
        );
        return n || t || s || r || u || o || d || c;
      }
    },
    640678: function (e, n, t) {
      t.d(n, {
        t: function () {
          return c;
        },
      });
      var i = t(63568),
        l = t(163400),
        a = t(995532),
        s = t(496675),
        r = t(600553),
        u = t(896007),
        o = t(981631);
      let d = { HEADER: "HEADER", DIVIDER: "DIVIDER" };
      function c(e) {
        let n = s.Z.getGuildPermissionProps(e),
          t = (0, l.p)(e.id).length > 0,
          c = (0, i.K2)(e.id, "getGuildSettingsSections"),
          g = (0, r.i1)({
            guildId: e.id,
            location: "getGuildSettingsSections",
          });
        return u.ZP.generateSections({
          showDirtyGuildTemplateIndicator: !1,
          ...n,
          canUnlinkChannels: t,
          canAccessClanSettings: n.isGuildAdmin && e.hasFeature(o.oNc.CLAN),
          welcomeScreenEmpty: a.Z.isEmpty(e.id),
          memberVerificationRolloutEnabled: c,
          isGuildSettingsFoundationEnabled: g,
        })
          .filter((e) => {
            let { section: n } = e;
            return n !== d.HEADER && n !== d.DIVIDER;
          })
          .filter((e) => null == e.predicate || e.predicate());
      }
    },
    748756: function (e, n, t) {
      t.d(n, {
        V: function () {
          return d;
        },
      }),
        t(399606);
      var i = t(87051),
        l = t(9156),
        a = t(621600),
        s = t(113449),
        r = t(686660),
        u = t(981631),
        o = t(526761);
      function d(e, n) {
        let t = l.ZP.getGuildFlags(e);
        n === r.s8.ALL_MESSAGES
          ? i.Z.updateGuildNotificationSettings(
              e,
              {
                message_notifications: u.bL.ALL_MESSAGES,
                flags: (0, s.Q4)(t, o.vc.UNREADS_ALL_MESSAGES),
              },
              a.ZB.PresetAll,
            )
          : n === r.s8.MENTIONS
            ? i.Z.updateGuildNotificationSettings(
                e,
                {
                  message_notifications: u.bL.ONLY_MENTIONS,
                  flags: (0, s.Q4)(t, o.vc.UNREADS_ONLY_MENTIONS),
                },
                a.ZB.PresetMentions,
              )
            : n === r.s8.NOTHING &&
              i.Z.updateGuildNotificationSettings(
                e,
                {
                  message_notifications: u.bL.NO_MESSAGES,
                  flags: (0, s.Q4)(t, o.vc.UNREADS_ONLY_MENTIONS),
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
          return g;
        },
        rz: function () {
          return E;
        },
      }),
        t(789020),
        t(47120),
        t(653041),
        t(524437);
      var i = t(549817);
      t(581883);
      var l = t(984933),
        a = t(271383),
        s = t(9156),
        r = t(630388),
        u = t(152376),
        o = t(398758),
        d = t(372897);
      function c(e) {
        var n, t;
        let i = (0, o.r1)(e),
          l =
            null !==
              (t =
                null === (n = a.ZP.getSelfMember(e)) || void 0 === n
                  ? void 0
                  : n.flags) && void 0 !== t
              ? t
              : 0,
          u = (0, r.yE)(l, d.q.COMPLETED_ONBOARDING),
          c = s.ZP.getOptedInChannels(e).size > 0;
        return !i && !u && !c;
      }
      function g(e) {
        if (c(e)) {
          E(e);
          return;
        }
        {
          let n = (0, o.r1)(e);
          (0, u.QG)(e, !n);
        }
      }
      function E(e) {
        let { include: n = new Set(), exclude: t = new Set() } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = l.ZP.getChannels(e),
          s = [...a[l.sH], ...a[l.Zb]]
            .filter((e) => {
              let { channel: n } = e;
              return !n.isThread() && !t.has(n.id);
            })
            .map((e) => {
              let { channel: n } = e;
              return n.id;
            });
        n.forEach((e) => s.push(e)), i.Z.onboardExistingMember(e, new Set(s));
      }
    },
    837949: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        a = t(481060),
        s = t(430824),
        r = t(594174),
        u = t(724213),
        o = t(398758),
        d = t(981631),
        c = t(388032);
      function g(e) {
        let n = (0, o.DM)(e),
          t = (0, l.e7)([s.Z], () => s.Z.getGuild(e)),
          g = (0, l.e7)([r.default], () => r.default.getCurrentUser());
        return null != g &&
          null != t &&
          (t.hasFeature(d.oNc.COMMUNITY) || g.isStaff())
          ? (0, i.jsx)(a.MenuCheckboxItem, {
              id: "opt-in",
              label: c.intl.string(c.t.FB2ZZW),
              checked: !n,
              action: () => {
                (0, u.kH)(e);
              },
            })
          : null;
      }
    },
    122074: function (e, n, t) {
      t.d(n, {
        U: function () {
          return Z;
        },
        Uf: function () {
          return b;
        },
        ng: function () {
          return A;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(442837),
        s = t(704215),
        r = t(481060),
        u = t(436774),
        o = t(706140),
        d = t(9156),
        c = t(594174),
        g = t(74538),
        E = t(759198),
        h = t(11352),
        M = t(213931),
        f = t(767157),
        _ = t(112440),
        N = t(671105),
        S = t(552958),
        I = t(981631),
        p = t(921944),
        m = t(871465),
        x = t(388032),
        L = t(150626);
      function A(e, n) {
        let t = h.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ),
          l = v(
            e,
            void 0,
            s.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE,
            t.nestedEntry ? "trailing" : "top",
          ),
          a = (t.nestedEntry && n) || (!t.nestedEntry && !n);
        return (0, i.jsx)(i.Fragment, { children: a && l });
      }
      function b(e, n, t) {
        return v(e, n, s.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, t);
      }
      function Z() {
        let e = h.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ),
          [n] = (0, o.cv)([s.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
        return (0, i.jsx)(i.Fragment, {
          children:
            e.enabled &&
            e.nestedEntry &&
            n === s.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
            (0, i.jsx)(r.TextBadge, {
              className: L.newBadge,
              text: x.intl.string(x.t.y2b7CA),
            }),
        });
      }
      function v(e, n, s, A) {
        var b, Z;
        let v = (0, N.OR)(e),
          G = (0, N._c)(e, n),
          C = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
          j = (0, a.e7)([d.ZP], () => d.ZP.isMuted(e), [e]),
          T = g.ZP.canUseCustomNotificationSounds(C),
          O = T ? (null != G ? G : v) : m.YC.CLASSIC,
          P = h.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ).enabled,
          [y, U] = l.useState(!1),
          { playSound: D } = (0, S.Z)(),
          [R, k] = (0, o.cv)([s]),
          w = R === s;
        if (
          (l.useEffect(
            () => () => {
              y && k(p.L.TAKE_ACTION);
            },
            [y, k],
          ),
          !P)
        )
          return null;
        let B = (t) => {
            if ((D(t), k(p.L.TAKE_ACTION), !T && t !== m.YC.CLASSIC)) {
              (0, f.Z)(t, "contextMenu"), (0, _.Z)();
              return;
            }
            null != n
              ? (0, M.M)(e, n, O, t, "contextMenu")
              : (0, M.t)(e, O, t, "contextMenu");
          },
          F = T ? r.Text : E.Z,
          H = (0, m.LB)(),
          Y =
            null !==
              (Z =
                null === (b = H.find((e) => e.value === O)) || void 0 === b
                  ? void 0
                  : b.label) && void 0 !== Z
              ? Z
              : x.intl.string(x.t.p3Hg5e),
          z = (0, i.jsx)(r.TextBadge, {
            className: L.newBadge,
            text: x.intl.string(x.t.y2b7CA),
          });
        return (0, i.jsx)(r.MenuItem, {
          id: "notification-sounds",
          label: (e) => {
            let { isFocused: n } = e;
            return (
              n && U(n),
              (0, i.jsxs)("div", {
                className: L.rootContainer,
                children: [
                  (0, i.jsxs)("div", {
                    children: [
                      w && "top" === A && z,
                      (0, i.jsxs)("div", {
                        className: L.headerContainer,
                        children: [
                          (0, i.jsx)(F, {
                            className: L.text,
                            color: n ? "always-white" : void 0,
                            variant: "text-sm/medium",
                            children: x.intl.string(x.t.mrqSOj),
                          }),
                          (0, i.jsx)(r.NitroWheelIcon, {
                            size: "xs",
                            className: L.nitroWheel,
                            color: n
                              ? "white"
                              : T
                                ? void 0
                                : u.JX.PREMIUM_TIER_2,
                          }),
                        ],
                      }),
                      null != Y &&
                        (0, i.jsx)(F, {
                          className: L.text,
                          color: n ? "always-white" : void 0,
                          variant: "text-xs/normal",
                          children: Y,
                        }),
                    ],
                  }),
                  w && "trailing" === A && z,
                ],
              })
            );
          },
          action:
            e !== I.aIL
              ? () =>
                  (0, r.openModalLazy)(async () => {
                    let { default: n } = await Promise.all([
                      t.e("5863"),
                      t.e("66847"),
                    ]).then(t.bind(t, 751212));
                    return (t) => (0, i.jsx)(n, { ...t, guildId: e });
                  })
              : void 0,
          hasSubmenu: !0,
          children: (0, i.jsxs)(r.MenuGroup, {
            children: [
              H.map((e, n) =>
                (0, i.jsxs)(
                  l.Fragment,
                  {
                    children: [
                      T || e.value === m.YC.CLASSIC
                        ? (0, i.jsx)(r.MenuRadioItem, {
                            id: e.label,
                            group: "notification-preset",
                            checked: (null != O ? O : m.YC.CLASSIC) === e.value,
                            label: e.label,
                            action: () => B(e.value),
                          })
                        : (0, i.jsx)(r.MenuItem, {
                            id: e.label,
                            label: (n) => {
                              let { isFocused: t } = n;
                              return (0, i.jsxs)("div", {
                                className: L.labelContainer,
                                children: [
                                  (0, i.jsx)(E.Z, {
                                    color: t ? "always-white" : void 0,
                                    variant: "text-sm/medium",
                                    children: e.label,
                                  }),
                                  (0, i.jsx)(r.CirclePlayIcon, {
                                    className: L.playButton,
                                    color: t
                                      ? r.tokens.colors.INTERACTIVE_ACTIVE
                                      : r.tokens.colors.INTERACTIVE_NORMAL,
                                  }),
                                ],
                              });
                            },
                            action: () => B(e.value),
                          }),
                      e.value === m.YC.CLASSIC
                        ? (0, i.jsx)(r.MenuSeparator, {})
                        : null,
                    ],
                  },
                  n,
                ),
              ),
              j &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(r.MenuSeparator, {}),
                    (0, i.jsx)(r.MenuItem, {
                      id: "label",
                      label: (0, i.jsx)(r.Text, {
                        className: L.mutedLabel,
                        variant: "text-sm/medium",
                        children: x.intl.string(x.t["a9G/ER"]),
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
          return s;
        },
      }),
        t(47120);
      var i = t(192379),
        l = t(974180),
        a = t(557177);
      function s() {
        let [e, n] = i.useState(),
          t = i.useRef(-1);
        return {
          playSound: i.useCallback((e) => {
            n(e),
              a.GN(
                l.Ay,
                l.yk,
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
          return o;
        },
        t: function () {
          return u;
        },
      });
      var i = t(381499),
        l = t(675478),
        a = t(592125),
        s = t(626135),
        r = t(981631);
      function u(e, n, t, a) {
        if (n !== t)
          (0, l.PS)(
            e,
            (e) => {
              e.customNotificationSoundConfig = {
                notificationSoundPackId: i.Gm.create({ value: t }),
              };
            },
            l.fy.INFREQUENT_USER_ACTION,
          ),
            s.default.track(r.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
              guild_id: e,
              location: a,
              soundpack: t,
            });
      }
      function o(e, n, t, u, o) {
        var d;
        if (t !== u)
          (0, l.BU)(
            e,
            n,
            (e) => {
              e.customNotificationSoundConfig = {
                notificationSoundPackId: i.Gm.create({ value: u }),
              };
            },
            l.fy.INFREQUENT_USER_ACTION,
          ),
            s.default.track(r.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
              guild_id: e,
              channel_id: n,
              channel_type:
                null === (d = a.Z.getChannel(n)) || void 0 === d
                  ? void 0
                  : d.type,
              location: o,
              soundpack: u,
            });
      }
    },
    767157: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = t(626135),
        l = t(981631);
      function a(e, n) {
        i.default.track(l.rMx.CUSTOM_NOTIFICATION_SOUND_OPTION_PLAYED, {
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
      var i = t(200651);
      t(192379);
      var l = t(481060);
      function a() {
        (0, l.openModalLazy)(async () => {
          let { default: e } = await t.e("72323").then(t.bind(t, 933006));
          return (n) => (0, i.jsx)(e, { ...n });
        });
      }
    },
  },
]);
//# sourceMappingURL=1fdb44a8adb3fc508286.js.map
