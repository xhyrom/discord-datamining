"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46826"],
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
    52011: function (e, n, t) {
      t.d(n, {
        F: function () {
          return i;
        },
      });
      let i = (0, t(818083).B)({
        kind: "guild",
        id: "2023-09_gaming_stats_prompt_guild",
        label: "Gaming stats prompt",
        defaultConfig: { triggerGamingStats: !1 },
        treatments: [
          {
            id: 1,
            label: "ability to trigger gaming stats prompt",
            config: { triggerGamingStats: !0 },
          },
          {
            id: 2,
            label: "ability to trigger gaming stats prompt (leaderboard)",
            config: { triggerGamingStats: !0 },
          },
        ],
      });
    },
    241851: function (e, n, t) {
      t.d(n, {
        g: function () {
          return p;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        a = t.n(l),
        r = t(704215),
        o = t(481060),
        u = t(605236),
        d = t(434404),
        c = t(41776),
        s = t(703656),
        g = t(981631),
        I = t(388032),
        f = t(385982);
      let p = (e) => {
        let { guild: n } = e,
          l = n.id,
          p = async () => {
            let e = c.Z.isLurking(l);
            await d.Z.leaveGuild(l),
              e
                ? (0, s.uL)(g.Z5c.GUILD_DISCOVERY)
                : !(0, u.un)(r.z.GUILD_LEAVE_FEEDBACK) &&
                  (0, o.openModalLazy)(async () => {
                    let { default: e } = await t
                      .e("74920")
                      .then(t.bind(t, 131102));
                    return (t) =>
                      (0, i.jsx)(e, { ...t, guildId: l, guildName: n.name });
                  });
          };
        return (0, i.jsx)(o.ConfirmModal, {
          className: a()(f.__invalid_confirmModal),
          bodyClassName: a()(f.__invalid_confirmModalBody),
          header: I.intl.formatToPlainString(I.t["1GX6Pz"], { name: n.name }),
          confirmText: n.hasFeature(g.oNc.HUB)
            ? I.intl.string(I.t.Dv8gFR)
            : I.intl.string(I.t.J2TBi4),
          cancelText: I.intl.string(I.t["ETE/oK"]),
          onConfirm: p,
          ...e,
          children: (0, i.jsx)(o.Text, {
            variant: "text-md/normal",
            children: n.hasFeature(g.oNc.HUB)
              ? I.intl.format(I.t.ZHTXVF, { name: n.name })
              : I.intl.format(I.t.ZEXC0t, { name: n.name }),
          }),
        });
      };
    },
    294978: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(392711),
        a = t.n(l),
        r = t(442837),
        o = t(481060),
        u = t(344185),
        d = t(665906),
        c = t(388032);
      function s(e) {
        let n = (0, d.Xb)(e),
          l = (0, r.e7)(
            [u.Z],
            () => !a().isEmpty(u.Z.getThreadsForGuild(e.id)),
          );
        return n && l
          ? (0, i.jsx)(o.MenuItem, {
              id: "active-threads",
              label: c.intl.string(c.t.TM6erq),
              icon: o.ChatIcon,
              action: () => {
                (0, o.openModalLazy)(async () => {
                  let { default: n } = await t
                    .e("22482")
                    .then(t.bind(t, 157743));
                  return (t) => (0, i.jsx)(n, { guildId: e.id, ...t });
                });
              },
            })
          : null;
      }
    },
    513102: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        a = t(132871),
        r = t(147890),
        o = t(388032);
      function u(e) {
        return (0, i.jsx)(l.MenuItem, {
          id: "application-directory",
          label: (0, i.jsx)(i.Fragment, {
            children: o.intl.string(o.t.AKcFUl),
          }),
          icon: l.AppsIcon,
          action: () => {
            (0, r.goToAppDirectory)({
              guildId: e.id,
              entrypoint: {
                name: a.ApplicationDirectoryEntrypointNames.GUILD_HEADER_POPOUT,
              },
            });
          },
        });
      }
    },
    976192: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var i = t(200651),
        l = t(192379),
        a = t(442837),
        r = t(481060),
        o = t(616780),
        u = t(40851),
        d = t(300284),
        c = t(484459),
        s = t(314897),
        g = t(271383),
        I = t(430824),
        f = t(496675),
        p = t(594174),
        h = t(981631),
        M = t(388032),
        E = t(497523);
      function _(e) {
        let {
            guildId: n,
            userId: _,
            analyticsLocation: m,
            analyticsLocations: x,
            context: b,
            icon: Z,
          } = e,
          N = I.Z.getGuild(n),
          G = s.default.getId(),
          C = (0, a.e7)([p.default], () => p.default.getUser(_)),
          v = (0, a.e7)([g.ZP], () => g.ZP.isGuestOrLurker(n, _), [n, _]);
        (0, a.e7)([f.Z], () => f.Z.getGuildVersion(n), [n]);
        let A = l.useMemo(() => ({ [n]: [_] }), [n, _]);
        (0, o.$)(A);
        let y = b === h.IlC.POPOUT,
          D = (0, d.Z)({ guild: N, analyticsLocation: m }),
          L = (0, u.Aq)();
        if (null == N || y) return null;
        let j =
            G === _ &&
            (f.Z.can(h.Plq.CHANGE_NICKNAME, N) ||
              f.Z.can(h.Plq.MANAGE_NICKNAMES, N)),
          P = G === _,
          T = f.Z.canManageUser(h.Plq.MANAGE_NICKNAMES, _, N);
        if (!(j || T || P) || null == C || v) return null;
        let S = N.hasFeature(h.oNc.HUB)
            ? M.intl.string(M.t["+MWrWl"])
            : M.intl.string(M.t["PKQB/P"]),
          U = P ? S : M.intl.string(M.t.dilOFx);
        return (0, i.jsx)(r.MenuItem, {
          id: "change-nickname",
          label: (0, i.jsx)("div", {
            className: E.labelWrapper,
            children: (0, i.jsx)("span", { className: E.label, children: U }),
          }),
          icon: Z,
          action: () => {
            P
              ? ((0, c.Z)(C.id, C.getAvatarURL(n, 80), { guildId: n }),
                D(),
                L.dispatch(h.CkL.POPOUT_CLOSE),
                (0, r.closeAllModals)())
              : (0, r.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("17712")
                    .then(t.bind(t, 620021));
                  return (t) =>
                    (0, i.jsx)(e, {
                      ...t,
                      guildId: n,
                      user: C,
                      analyticsSource: m,
                      analyticsLocations: x,
                    });
                });
          },
        });
      }
    },
    887904: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        a = t(557239),
        r = t(388032);
      function o(e) {
        let { guildFriendsEnabled: n } = a.Z.useExperiment(
          { location: "useFriendsItem" },
          { autoTrackExposure: !1 },
        );
        return n
          ? (0, i.jsx)(l.MenuItem, {
              id: "friends",
              label: r.intl.string(r.t.kYxEcH),
              icon: l.FriendsIcon,
              action: () => {
                (0, l.openModalLazy)(async () => {
                  let { default: n } = await t
                    .e("62635")
                    .then(t.bind(t, 564232));
                  return (t) => (0, i.jsx)(n, { guild: e, ...t });
                });
              },
            })
          : null;
      }
    },
    429824: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651),
        l = t(192379),
        a = t(481060),
        r = t(528011),
        o = t(666657),
        u = t(533244),
        d = t(388032);
      function c(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          {
            shouldShowIncidentActions: c,
            isUnderLockdown: s,
            incidentData: g,
          } = (0, r.mI)(e.id),
          I = l.useCallback(() => {
            let n = { source: o.Zu.CONTEXT_MENU, alertType: (0, u.T1)(g) };
            (0, a.openModalLazy)(async () => {
              let { default: l } = await t.e("61536").then(t.bind(t, 664452));
              return (t) =>
                (0, i.jsx)(l, { ...t, guildId: e.id, analyticsData: n });
            });
          }, [e.id, g]);
        return e.isCommunity() && c
          ? (0, i.jsx)(a.MenuItem, {
              id: "server-lockdown",
              label: s
                ? d.intl.string(d.t["+tSVi4"])
                : d.intl.string(d.t.EPlEdn),
              icon: n ? (s ? a.LockUnlockedIcon : a.LockIcon) : void 0,
              action: I,
              color: "danger",
            })
          : null;
      }
    },
    466330: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        a = t(481060),
        r = t(159300),
        o = t(984933),
        u = t(496675),
        d = t(981631),
        c = t(388032);
      function s(e) {
        let { source: n, guild: t, channel: i, stageInstance: a } = e,
          c = (0, l.e7)([o.ZP], () =>
            o.ZP.getDefaultChannel(t.id, !0, d.Plq.CREATE_INSTANT_INVITE),
          ),
          s = (0, l.e7)([u.Z], () => (0, r.b)(u.Z, t, i, a)),
          f = g(n, t, s && null != i ? i : c),
          p = I(n);
        return null == i && n === d.t4x.GUILD_CONTEXT_MENU
          ? null
          : s || null != c
            ? f
            : p;
      }
      let g = (e, n, l) =>
          (0, i.jsx)(a.MenuItem, {
            id: "invite-people",
            label: c.intl.string(c.t.BN75l5),
            color: "brand",
            icon: e === d.t4x.GUILD_HEADER ? a.GroupPlusIcon : void 0,
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
        I = (e) =>
          (0, i.jsx)(a.MenuItem, {
            id: "invite-people",
            label: c.intl.string(c.t.BN75l5),
            color: "brand",
            icon: e === d.t4x.GUILD_HEADER ? a.GroupPlusIcon : void 0,
            action: () =>
              (0, a.openModalLazy)(async () => {
                let { default: e } = await t.e("88358").then(t.bind(t, 598402));
                return (n) => (0, i.jsx)(e, { ...n });
              }),
          });
    },
    369994: function (e, n, t) {
      t.d(n, {
        C4: function () {
          return p;
        },
        Fi: function () {
          return f;
        },
        KK: function () {
          return s;
        },
        f6: function () {
          return g;
        },
        n: function () {
          return I;
        },
      }),
        t(47120);
      var i = t(913527),
        l = t.n(i),
        a = t(544891),
        r = t(367907),
        o = t(434404),
        u = t(430824),
        d = t(626135),
        c = t(981631);
      function s(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== n.length)
          d.default.track(c.rMx.GUILD_RAID_REPORTED, {
            ...(0, r.hH)(e),
            guild_id: e,
            raid_types: n,
          });
      }
      async function g(e, n) {
        let t = new Set(e.features);
        t.has(c.oNc.COMMUNITY)
          ? n
            ? t.delete(c.oNc.RAID_ALERTS_DISABLED)
            : t.add(c.oNc.RAID_ALERTS_DISABLED)
          : n
            ? t.add(c.oNc.NON_COMMUNITY_RAID_ALERTS)
            : t.delete(c.oNc.NON_COMMUNITY_RAID_ALERTS),
          await o.Z.saveGuild(e.id, { features: t }, { throwErr: !0 });
      }
      async function I(e, n, t, i) {
        let r = l()().add(i, "hours").toISOString();
        return await a.tn.put({
          url: c.ANM.GUILD_INCIDENT_ACTIONS(e),
          body: {
            invites_disabled_until: n ? r : null,
            dms_disabled_until: t ? r : null,
          },
          rejectWithError: !1,
        });
      }
      async function f(e, n, t) {
        let i = u.Z.getGuild(e);
        return null == (null == i ? void 0 : i.getSafetyAlertsChannelId())
          ? null
          : await a.tn.post({
              url: c.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: { alert_message_id: n, reason: t },
              rejectWithError: !1,
            });
      }
      async function p(e) {
        let n = u.Z.getGuild(e);
        return null == (null == n ? void 0 : n.getSafetyAlertsChannelId())
          ? null
          : await a.tn.post({
              url: c.ANM.GUILD_INCIDENT_REPORT_RAID(e),
              rejectWithError: !1,
            });
      }
    },
    191471: function (e, n, t) {
      t.d(n, {
        J: function () {
          return a;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060);
      function a(e) {
        (0, l.openModalLazy)(async () => {
          let { default: n } = await t.e("9354").then(t.bind(t, 461533));
          return (t) => (0, i.jsx)(n, { ...t, guildId: e });
        });
      }
      t(558511);
    },
    162157: function (e, n, t) {
      t.d(n, {
        BT: function () {
          return d;
        },
        N8: function () {
          return u;
        },
      });
      var i = t(442837);
      t(467319);
      var l = t(496675),
        a = t(533244),
        r = t(487419),
        o = t(981631);
      function u(e) {
        let n = (0, i.e7)(
            [l.Z],
            () =>
              (function (e) {
                let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : l.Z;
                return (
                  n.can(o.Plq.BAN_MEMBERS, e) ||
                  n.can(o.Plq.KICK_MEMBERS, e) ||
                  n.can(o.Plq.MANAGE_GUILD, e)
                );
              })(e, l.Z),
            [e],
          ),
          t = (0, i.e7)(
            [r.Z],
            () => (null != e ? r.Z.getGuildIncident(e.id) : null),
            [e],
          );
        return !(null != t && (0, a.i9)(t)) && n;
      }
      function d(e) {
        return (0, i.e7)(
          [l.Z],
          () =>
            (function (e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : l.Z;
              return n.can(o.Plq.MANAGE_GUILD, e);
            })(e, l.Z),
          [e],
        );
      }
    },
    558511: function (e, n, t) {
      t(47120),
        t(200651),
        t(192379),
        t(106351),
        t(442837),
        t(481060),
        t(367907),
        t(933557),
        t(177862),
        t(434404),
        t(984933),
        t(430824),
        t(699516),
        t(594174),
        t(369994),
        t(162157),
        t(981631),
        t(388032),
        t(177495);
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
        r = t(576749),
        o = t(388032);
      function u(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          u = (0, a.Z)(e),
          d = (0, r.Z)();
        return u
          ? (0, i.jsx)(l.MenuItem, {
              id: "create-event",
              label: o.intl.string(o.t["60lJ0N"]),
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
                }, d);
              },
            })
          : null;
      }
    },
    859432: function (e, n, t) {
      t.r(n), t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(512722),
        r = t.n(a),
        o = t(442837),
        u = t(704215),
        d = t(481060),
        c = t(5036),
        s = t(553385),
        g = t(52011),
        I = t(890477),
        f = t(458034),
        p = t(706140),
        h = t(362658),
        M = t(241851),
        E = t(294978),
        _ = t(513102),
        m = t(976192),
        x = t(887904),
        b = t(429824),
        Z = t(466330),
        N = t(191471),
        G = t(162157),
        C = t(623624),
        v = t(894059),
        A = t(434404),
        y = t(41776),
        D = t(837949),
        L = t(11352),
        j = t(703656),
        P = t(271383),
        T = t(496675),
        S = t(9156),
        U = t(594174),
        O = t(709586),
        w = t(626135),
        R = t(981631),
        k = t(647086),
        B = t(388032),
        F = t(764466);
      function H(e) {
        (0, d.openModal)((n) => (0, i.jsx)(M.g, { ...n, guild: e }));
      }
      let z = l.memo(function (e) {
        let { guild: n, onClose: a, onSelect: M } = e,
          z = (0, o.e7)([U.default], () => U.default.getCurrentUser());
        r()(null != z, "GuildHeaderPopout: user cannot be undefined"),
          l.useEffect(() => {
            w.default.track(R.rMx.GUILD_DROPDOWN_MENU_VIEWED, {
              guild_id: n.id,
            });
          });
        let V = (0, o.e7)([S.ZP], () => S.ZP.isGuildCollapsed(n.id), [n.id]),
          {
            canAccessSettings: W,
            canManageChannels: K,
            showGuildAnalytics: Y,
          } = (0, o.cj)(
            [T.Z],
            () => ({
              canAccessSettings: T.Z.canAccessGuildSettings(n),
              canManageChannels: T.Z.can(R.Plq.MANAGE_CHANNELS, n),
              showGuildAnalytics:
                T.Z.can(R.Plq.VIEW_GUILD_ANALYTICS, n) &&
                n.hasFeature(R.oNc.COMMUNITY),
            }),
            [n],
          ),
          q = (0, G.N8)(n),
          J = n.isOwner(z),
          X = (0, o.e7)([y.Z], () => y.Z.isLurking(n.id), [n.id]),
          Q = (0, o.e7)([P.ZP], () => P.ZP.isCurrentUserGuest(n.id)),
          $ = (0, v.Z)(n.id, !0),
          ee = (0, f.ZP)(n),
          en = (0, Z.Z)({ source: R.t4x.GUILD_HEADER, guild: n }),
          et = (0, m.Z)({
            guildId: n.id,
            userId: z.id,
            analyticsLocation: {
              page: R.ZY5.GUILD_CHANNEL,
              section: R.jXE.GUILD_DROPDOWN_MENU,
            },
            icon: d.PencilIcon,
          }),
          ei = n.hasFeature(R.oNc.HUB),
          el = n.id === k._,
          ea = (0, D.Z)(n.id),
          er = (0, E.Z)(n),
          eo = (0, _.Z)(n),
          eu = (0, b.Z)(n, !0),
          ed = (0, x.Z)(n),
          { isFavoritesPerk: ec } = (0, h.z)("GuildHeaderPopout"),
          { triggerDeadchat: es } = I.Z.useExperiment(
            { guildId: n.id, location: "guild header" },
            { autoTrackExposure: !1 },
          ),
          { triggerGamingStats: eg } = g.F.useExperiment(
            { guildId: n.id, location: "guild header" },
            { autoTrackExposure: !1 },
          ),
          eI = L.Y.useExperiment(
            { location: "GuildHeaderPopout" },
            { autoTrackExposure: !0 },
          ).enabled,
          [ef] = (0, p.cv)([
            u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE,
          ]),
          ep = eI && ef === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
        return X || Q
          ? (0, i.jsx)(d.Menu, {
              onSelect: M,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: a,
              "aria-label": B.intl.string(B.t.HpQykZ),
              children: (0, i.jsx)(d.MenuItem, {
                id: "leave-guild",
                label: B.intl.string(B.t.J2TBi4),
                icon: d.DoorExitIcon,
                action: () => {
                  A.Z.leaveGuild(n.id), !Q && (0, j.uL)(R.Z5c.GUILD_DISCOVERY);
                },
              }),
            })
          : el
            ? (0, i.jsxs)(d.Menu, {
                onSelect: M,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: a,
                "aria-label": B.intl.string(B.t.HpQykZ),
                children: [
                  (0, i.jsxs)(d.MenuGroup, {
                    children: [
                      ec &&
                        (0, i.jsx)(d.MenuItem, {
                          id: "add-channel",
                          label: B.intl.string(B.t["6uDHk5"]),
                          color: "brand",
                          icon: d.CirclePlusIcon,
                          action: () =>
                            (0, d.openModalLazy)(async () => {
                              let { default: e } = await t
                                .e("29608")
                                .then(t.bind(t, 178125));
                              return (n) => (0, i.jsx)(e, { ...n });
                            }),
                        }),
                      (0, i.jsx)(d.MenuItem, {
                        id: "create-category",
                        label: B.intl.string(B.t["ISN+ND"]),
                        icon: d.FolderPlusIcon,
                        action: () =>
                          (0, d.openModalLazy)(async () => {
                            let { default: e } = await t
                              .e("33356")
                              .then(t.bind(t, 477782));
                            return (n) => (0, i.jsx)(e, { ...n });
                          }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(d.MenuGroup, {
                    children: (0, i.jsx)(d.MenuCheckboxItem, {
                      id: "hide-muted-channels",
                      label: B.intl.string(B.t.UwOLJC),
                      checked: V,
                      action: () => c.Z.toggleCollapseGuild(n.id),
                    }),
                  }),
                ],
              })
            : ei
              ? (0, i.jsxs)(d.Menu, {
                  onSelect: M,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: a,
                  "aria-label": B.intl.string(B.t.HpQykZ),
                  children: [
                    (0, i.jsxs)(d.MenuGroup, {
                      children: [
                        W
                          ? (0, i.jsx)(d.MenuItem, {
                              id: "settings",
                              label: B.intl.string(B.t["154/bG"]),
                              icon: d.SettingsIcon,
                              action: () => {
                                A.Z.open(n.id, R.pNK.OVERVIEW);
                              },
                            })
                          : null,
                        en,
                        (0, i.jsx)(d.MenuItem, {
                          id: "privacy",
                          label: B.intl.string(B.t.BayiAg),
                          icon: d.ShieldIcon,
                          action: () =>
                            (0, d.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                t.e("23217"),
                                t.e("33053"),
                                t.e("8016"),
                                t.e("17298"),
                                t.e("76540"),
                                t.e("17938"),
                                t.e("22646"),
                                t.e("3940"),
                                t.e("48923"),
                                t.e("30419"),
                                t.e("8821"),
                                t.e("18824"),
                                t.e("38175"),
                                t.e("52547"),
                              ]).then(t.bind(t, 241420));
                              return (t) => (0, i.jsx)(e, { ...t, guild: n });
                            }),
                        }),
                        et,
                      ],
                    }),
                    J
                      ? null
                      : (0, i.jsx)(d.MenuGroup, {
                          children: (0, i.jsx)(d.MenuItem, {
                            id: "leave",
                            label: B.intl.string(B.t.Dv8gFR),
                            icon: d.DoorExitIcon,
                            color: "danger",
                            action: () => H(n),
                          }),
                        }),
                  ],
                })
              : (0, i.jsxs)(d.Menu, {
                  onSelect: M,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: a,
                  "aria-label": B.intl.string(B.t.HpQykZ),
                  children: [
                    (0, i.jsx)(d.MenuGroup, {
                      children: (0, i.jsx)(d.MenuItem, {
                        id: "premium-subscribe",
                        label: B.intl.string(B.t.VJEVbm),
                        icon: (0, d.makeIconCompat)(O.Z),
                        action: () => {
                          (0, C.f)({
                            guildId: n.id,
                            location: { section: R.jXE.GUILD_HEADER_POPOUT },
                          });
                        },
                      }),
                    }),
                    (0, i.jsxs)(d.MenuGroup, {
                      children: [
                        J && z.isStaff() && es
                          ? (0, i.jsx)(d.MenuItem, {
                              id: "create-deadchat",
                              label: "Deadchat Ping",
                              icon: d.ChatCheckIcon,
                              action: () => {
                                (0, s.j8)(
                                  n.id,
                                  R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT,
                                );
                              },
                            })
                          : null,
                        J && z.isStaff() && eg
                          ? (0, i.jsx)(d.MenuItem, {
                              id: "create-gaming-ping",
                              label: "Gaming Stats Ping",
                              icon: d.ChatCheckIcon,
                              action: () => {
                                (0, s.j8)(
                                  n.id,
                                  R.uaV.GUILD_GAMING_STATS_PROMPT,
                                );
                              },
                            })
                          : null,
                        en,
                        W
                          ? (0, i.jsx)(d.MenuItem, {
                              id: "settings",
                              label: B.intl.string(B.t["154/bG"]),
                              icon: d.SettingsIcon,
                              action: () => {
                                A.Z.open(n.id, R.pNK.OVERVIEW);
                              },
                            })
                          : null,
                        Y
                          ? (0, i.jsx)(d.MenuItem, {
                              id: "insights",
                              label: B.intl.string(B.t["0wWfUF"]),
                              icon: d.AnalyticsIcon,
                              action: () => A.Z.open(n.id, R.pNK.ANALYTICS),
                            })
                          : null,
                        K
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)(d.MenuItem, {
                                  id: "create-channel",
                                  label: B.intl.string(B.t["fUYU+v"]),
                                  icon: d.CirclePlusIcon,
                                  action: () =>
                                    (0, d.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([
                                        t.e("45094"),
                                        t.e("5506"),
                                      ]).then(t.bind(t, 218613));
                                      return (t) =>
                                        (0, i.jsx)(e, {
                                          ...t,
                                          channelType: R.d4z.GUILD_TEXT,
                                          guildId: n.id,
                                        });
                                    }),
                                }),
                                (0, i.jsx)(d.MenuItem, {
                                  id: "create-category",
                                  label: B.intl.string(B.t["ISN+ND"]),
                                  icon: d.FolderPlusIcon,
                                  action: () =>
                                    (0, d.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([
                                        t.e("45094"),
                                        t.e("5506"),
                                      ]).then(t.bind(t, 218613));
                                      return (t) =>
                                        (0, i.jsx)(e, {
                                          ...t,
                                          channelType: R.d4z.GUILD_CATEGORY,
                                          guildId: n.id,
                                        });
                                    }),
                                }),
                              ],
                            })
                          : null,
                        $,
                        er,
                        eo,
                        ee,
                        ed,
                      ],
                    }),
                    (0, i.jsxs)(d.MenuGroup, {
                      children: [
                        ea,
                        (0, i.jsx)(d.MenuItem, {
                          id: "notifications",
                          label: (0, i.jsxs)("div", {
                            className: F.newBadgeRow,
                            children: [
                              B.intl.string(B.t.h850Sk),
                              ep &&
                                (0, i.jsx)(d.TextBadge, {
                                  className: F.newBadge,
                                  text: B.intl.string(B.t.y2b7CA),
                                }),
                            ],
                          }),
                          icon: ep ? void 0 : d.BellIcon,
                          action: () =>
                            (0, d.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                t.e("5863"),
                                t.e("97984"),
                              ]).then(t.bind(t, 751212));
                              return (t) =>
                                (0, i.jsx)(e, { ...t, guildId: n.id });
                            }),
                        }),
                        (0, i.jsx)(d.MenuItem, {
                          id: "privacy",
                          label: B.intl.string(B.t.BayiAg),
                          icon: d.ShieldIcon,
                          action: () =>
                            (0, d.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                t.e("23217"),
                                t.e("33053"),
                                t.e("8016"),
                                t.e("17298"),
                                t.e("76540"),
                                t.e("17938"),
                                t.e("22646"),
                                t.e("3940"),
                                t.e("48923"),
                                t.e("30419"),
                                t.e("8821"),
                                t.e("18824"),
                                t.e("38175"),
                                t.e("52547"),
                              ]).then(t.bind(t, 241420));
                              return (t) => (0, i.jsx)(e, { ...t, guild: n });
                            }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.MenuGroup, {
                      children: [
                        et,
                        (0, i.jsx)(d.MenuCheckboxItem, {
                          id: "hide-muted-channels",
                          label: B.intl.string(B.t.UwOLJC),
                          checked: V,
                          action: () => c.Z.toggleCollapseGuild(n.id),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.MenuGroup, {
                      children: [
                        eu,
                        q && n.isCommunity()
                          ? (0, i.jsx)(d.MenuItem, {
                              id: "report-raid",
                              label: B.intl.string(B.t.cswId3),
                              icon: d.ShieldIcon,
                              color: "danger",
                              action: () => (0, N.J)(n.id),
                            })
                          : null,
                        J
                          ? null
                          : (0, i.jsx)(d.MenuItem, {
                              id: "leave",
                              label: B.intl.string(B.t.J2TBi4),
                              icon: d.DoorExitIcon,
                              color: "danger",
                              action: () => H(n),
                            }),
                      ],
                    }),
                  ],
                });
      });
      n.default = z;
    },
    724213: function (e, n, t) {
      t.d(n, {
        hi: function () {
          return s;
        },
        kH: function () {
          return g;
        },
        rz: function () {
          return I;
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
        r = t(9156),
        o = t(630388),
        u = t(152376),
        d = t(398758),
        c = t(372897);
      function s(e) {
        var n, t;
        let i = (0, d.r1)(e),
          l =
            null !==
              (t =
                null === (n = a.ZP.getSelfMember(e)) || void 0 === n
                  ? void 0
                  : n.flags) && void 0 !== t
              ? t
              : 0,
          u = (0, o.yE)(l, c.q.COMPLETED_ONBOARDING),
          s = r.ZP.getOptedInChannels(e).size > 0;
        return !i && !u && !s;
      }
      function g(e) {
        if (s(e)) {
          I(e);
          return;
        }
        {
          let n = (0, d.r1)(e);
          (0, u.QG)(e, !n);
        }
      }
      function I(e) {
        let { include: n = new Set(), exclude: t = new Set() } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = l.ZP.getChannels(e),
          r = [...a[l.sH], ...a[l.Zb]]
            .filter((e) => {
              let { channel: n } = e;
              return !n.isThread() && !t.has(n.id);
            })
            .map((e) => {
              let { channel: n } = e;
              return n.id;
            });
        n.forEach((e) => r.push(e)), i.Z.onboardExistingMember(e, new Set(r));
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
        r = t(430824),
        o = t(594174),
        u = t(724213),
        d = t(398758),
        c = t(981631),
        s = t(388032);
      function g(e) {
        let n = (0, d.DM)(e),
          t = (0, l.e7)([r.Z], () => r.Z.getGuild(e)),
          g = (0, l.e7)([o.default], () => o.default.getCurrentUser());
        return null != g &&
          null != t &&
          (t.hasFeature(c.oNc.COMMUNITY) || g.isStaff())
          ? (0, i.jsx)(a.MenuCheckboxItem, {
              id: "opt-in",
              label: s.intl.string(s.t.FB2ZZW),
              checked: !n,
              action: () => {
                (0, u.kH)(e);
              },
            })
          : null;
      }
    },
    557239: function (e, n, t) {
      let i = (0, t(818083).B)({
        kind: "user",
        id: "2024-09_friends_in_server",
        label: "Friends in Server",
        defaultConfig: { guildFriendsEnabled: !1 },
        treatments: [
          { id: 1, label: "Enabled", config: { guildFriendsEnabled: !0 } },
        ],
      });
      n.Z = i;
    },
    385982: function (e, n, t) {
      e.exports = {};
    },
    497523: function (e, n, t) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    177495: function (e, n, t) {
      e.exports = {};
    },
    764466: function (e, n, t) {
      e.exports = {
        newBadgeRow: "newBadgeRow_f08bf8",
        newBadge: "newBadge_f08bf8",
      };
    },
  },
]);
//# sourceMappingURL=dfcd82f679167540eada.js.map
