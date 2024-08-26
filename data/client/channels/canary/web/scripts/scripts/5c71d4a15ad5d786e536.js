"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46826"],
  {
    5036: function (e, n, t) {
      var a = t(570140),
        i = t(149071),
        l = t(9156);
      n.Z = {
        update(e) {
          a.Z.dispatch({ type: "CHANNEL_COLLAPSE", channelId: e });
        },
        toggleCollapseGuild(e) {
          i.Z.saveUserGuildSettings(e, {
            hide_muted_channels: !l.ZP.isGuildCollapsed(e),
          }),
            a.Z.dispatch({ type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: e });
        },
      };
    },
    52011: function (e, n, t) {
      t.d(n, {
        F: function () {
          return a;
        },
      });
      let a = (0, t(818083).B)({
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
          return g;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(120356),
        l = t.n(i),
        s = t(704215),
        o = t(481060),
        u = t(605236),
        r = t(434404),
        d = t(41776),
        c = t(703656),
        E = t(981631),
        I = t(689938),
        _ = t(591822);
      let g = (e) => {
        let { guild: n } = e,
          i = n.id,
          g = async () => {
            let e = d.Z.isLurking(i);
            await r.Z.leaveGuild(i),
              e
                ? (0, c.uL)(E.Z5c.GUILD_DISCOVERY)
                : !(0, u.un)(s.z.GUILD_LEAVE_FEEDBACK) &&
                  (0, o.openModalLazy)(async () => {
                    let { default: e } = await t
                      .e("74920")
                      .then(t.bind(t, 131102));
                    return (t) =>
                      (0, a.jsx)(e, { ...t, guildId: i, guildName: n.name });
                  });
          };
        return (0, a.jsx)(o.ConfirmModal, {
          className: l()(_.__invalid_confirmModal),
          bodyClassName: l()(_.__invalid_confirmModalBody),
          header: I.Z.Messages.LEAVE_SERVER_TITLE.format({ name: n.name }),
          confirmText: n.hasFeature(E.oNc.HUB)
            ? I.Z.Messages.LEAVE_HUB
            : I.Z.Messages.LEAVE_SERVER,
          cancelText: I.Z.Messages.CANCEL,
          onConfirm: g,
          ...e,
          children: (0, a.jsx)(o.Text, {
            variant: "text-md/normal",
            children: n.hasFeature(E.oNc.HUB)
              ? I.Z.Messages.LEAVE_HUB_BODY.format({ name: n.name })
              : I.Z.Messages.LEAVE_SERVER_BODY.format({ name: n.name }),
          }),
        });
      };
    },
    294978: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(392711),
        l = t.n(i),
        s = t(442837),
        o = t(481060),
        u = t(344185),
        r = t(665906),
        d = t(689938);
      function c(e) {
        let n = (0, r.Xb)(e),
          i = (0, s.e7)(
            [u.Z],
            () => !l().isEmpty(u.Z.getThreadsForGuild(e.id)),
          );
        return n && i
          ? (0, a.jsx)(o.MenuItem, {
              id: "active-threads",
              label: d.Z.Messages.ACTIVE_THREADS,
              icon: o.ChatIcon,
              action: () => {
                (0, o.openModalLazy)(async () => {
                  let { default: n } = await t
                    .e("22482")
                    .then(t.bind(t, 157743));
                  return (t) => (0, a.jsx)(n, { guildId: e.id, ...t });
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
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(132871),
        s = t(147890),
        o = t(689938);
      function u(e) {
        return (0, a.jsx)(i.MenuItem, {
          id: "application-directory",
          label: (0, a.jsx)(a.Fragment, {
            children: o.Z.Messages.APP_DIRECTORY,
          }),
          icon: i.RobotIcon,
          action: () => {
            (0, s.goToAppDirectory)({
              guildId: e.id,
              entrypoint: {
                name: l.ApplicationDirectoryEntrypointNames.GUILD_HEADER_POPOUT,
              },
            });
          },
        });
      }
    },
    976192: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var a = t(735250),
        i = t(470079),
        l = t(442837),
        s = t(481060),
        o = t(58540),
        u = t(40851),
        r = t(300284),
        d = t(484459),
        c = t(314897),
        E = t(271383),
        I = t(430824),
        _ = t(496675),
        g = t(594174),
        M = t(981631),
        f = t(689938),
        N = t(936124);
      function p(e) {
        let {
            guildId: n,
            userId: p,
            analyticsLocation: Z,
            analyticsLocations: h,
            context: A,
            icon: L,
          } = e,
          C = I.Z.getGuild(n),
          T = c.default.getId(),
          m = (0, l.e7)([g.default], () => g.default.getUser(p)),
          x = (0, l.e7)([E.ZP], () => E.ZP.isGuestOrLurker(n, p), [n, p]);
        (0, l.e7)([_.Z], () => _.Z.getGuildVersion(n), [n]);
        let G = i.useMemo(() => ({ [n]: [p] }), [n, p]);
        (0, o.$)(G);
        let D = A === M.IlC.POPOUT,
          b = (0, r.Z)({ guild: C, analyticsLocation: Z }),
          S = (0, u.Aq)();
        if (null == C || D) return null;
        let R =
            T === p &&
            (_.Z.can(M.Plq.CHANGE_NICKNAME, C) ||
              _.Z.can(M.Plq.MANAGE_NICKNAMES, C)),
          U = T === p,
          O = _.Z.canManageUser(M.Plq.MANAGE_NICKNAMES, p, C);
        if (!(R || O || U) || null == m || x) return null;
        let v = C.hasFeature(M.oNc.HUB)
            ? f.Z.Messages.HUB_EDIT_PROFILE
            : f.Z.Messages.CHANGE_IDENTITY,
          P = U ? v : f.Z.Messages.CHANGE_NICKNAME;
        return (0, a.jsx)(s.MenuItem, {
          id: "change-nickname",
          label: (0, a.jsx)("div", {
            className: N.labelWrapper,
            children: (0, a.jsx)("span", { className: N.label, children: P }),
          }),
          icon: L,
          action: () => {
            U
              ? ((0, d.Z)(m.id, m.getAvatarURL(n, 80), { guildId: n }),
                b(),
                S.dispatch(M.CkL.POPOUT_CLOSE))
              : (0, s.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("17712")
                    .then(t.bind(t, 620021));
                  return (t) =>
                    (0, a.jsx)(e, {
                      ...t,
                      guildId: n,
                      user: m,
                      analyticsSource: Z,
                      analyticsLocations: h,
                    });
                });
          },
        });
      }
    },
    429824: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var a = t(735250),
        i = t(470079),
        l = t(481060),
        s = t(528011),
        o = t(666657),
        u = t(533244),
        r = t(689938);
      function d(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          {
            shouldShowIncidentActions: d,
            isUnderLockdown: c,
            incidentData: E,
          } = (0, s.mI)(e.id),
          I = i.useCallback(() => {
            let n = { source: o.Zu.CONTEXT_MENU, alertType: (0, u.T1)(E) };
            (0, l.openModalLazy)(async () => {
              let { default: i } = await t.e("61536").then(t.bind(t, 664452));
              return (t) =>
                (0, a.jsx)(i, { ...t, guildId: e.id, analyticsData: n });
            });
          }, [e.id, E]);
        return e.isCommunity() && d
          ? (0, a.jsx)(l.MenuItem, {
              id: "server-lockdown",
              label: c
                ? r.Z.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK
                : r.Z.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
              icon: n ? (c ? l.LockUnlockedIcon : l.LockIcon) : void 0,
              action: I,
              color: "danger",
            })
          : null;
      }
    },
    466330: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        s = t(159300),
        o = t(984933),
        u = t(496675),
        r = t(981631),
        d = t(689938);
      function c(e) {
        let { source: n, guild: t, channel: a, stageInstance: l } = e,
          d = (0, i.e7)([o.ZP], () =>
            o.ZP.getDefaultChannel(t.id, !0, r.Plq.CREATE_INSTANT_INVITE),
          ),
          c = (0, i.e7)([u.Z], () => (0, s.b)(u.Z, t, a, l)),
          _ = E(n, t, c && null != a ? a : d),
          g = I(n);
        return null == a && n === r.t4x.GUILD_CONTEXT_MENU
          ? null
          : c || null != d
            ? _
            : g;
      }
      let E = (e, n, i) =>
          (0, a.jsx)(l.MenuItem, {
            id: "invite-people",
            label: d.Z.Messages.INVITE_PEOPLE,
            color: "brand",
            icon: e === r.t4x.GUILD_HEADER ? l.GroupPlusIcon : void 0,
            action: () =>
              (0, l.openModalLazy)(async () => {
                let { default: l } = await Promise.all([
                  t.e("7654"),
                  t.e("66633"),
                ]).then(t.bind(t, 560114));
                return (t) =>
                  (0, a.jsx)(l, { ...t, guild: n, channel: i, source: e });
              }),
          }),
        I = (e) =>
          (0, a.jsx)(l.MenuItem, {
            id: "invite-people",
            label: d.Z.Messages.INVITE_PEOPLE,
            color: "brand",
            icon: e === r.t4x.GUILD_HEADER ? l.GroupPlusIcon : void 0,
            action: () =>
              (0, l.openModalLazy)(async () => {
                let { default: e } = await t.e("88358").then(t.bind(t, 598402));
                return (n) => (0, a.jsx)(e, { ...n });
              }),
          });
    },
    369994: function (e, n, t) {
      t.d(n, {
        C4: function () {
          return g;
        },
        Fi: function () {
          return _;
        },
        KK: function () {
          return c;
        },
        f6: function () {
          return E;
        },
        n: function () {
          return I;
        },
      }),
        t(47120);
      var a = t(913527),
        i = t.n(a),
        l = t(544891),
        s = t(367907),
        o = t(434404),
        u = t(430824),
        r = t(626135),
        d = t(981631);
      function c(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== n.length)
          r.default.track(d.rMx.GUILD_RAID_REPORTED, {
            ...(0, s.hH)(e),
            guild_id: e,
            raid_types: n,
          });
      }
      async function E(e, n) {
        let t = new Set(e.features);
        t.has(d.oNc.COMMUNITY)
          ? n
            ? t.delete(d.oNc.RAID_ALERTS_DISABLED)
            : t.add(d.oNc.RAID_ALERTS_DISABLED)
          : n
            ? t.add(d.oNc.NON_COMMUNITY_RAID_ALERTS)
            : t.delete(d.oNc.NON_COMMUNITY_RAID_ALERTS),
          await o.Z.saveGuild(e.id, { features: t }, { throwErr: !0 });
      }
      async function I(e, n, t, a) {
        let s = i()().add(a, "hours").toISOString();
        return await l.tn.put({
          url: d.ANM.GUILD_INCIDENT_ACTIONS(e),
          body: {
            invites_disabled_until: n ? s : null,
            dms_disabled_until: t ? s : null,
          },
        });
      }
      async function _(e, n, t) {
        let a = u.Z.getGuild(e);
        return null == (null == a ? void 0 : a.getSafetyAlertsChannelId())
          ? null
          : await l.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: { alert_message_id: n, reason: t },
            });
      }
      async function g(e) {
        let n = u.Z.getGuild(e);
        return null == (null == n ? void 0 : n.getSafetyAlertsChannelId())
          ? null
          : await l.tn.post({ url: d.ANM.GUILD_INCIDENT_REPORT_RAID(e) });
      }
    },
    191471: function (e, n, t) {
      t.d(n, {
        J: function () {
          return l;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060);
      function l(e) {
        (0, i.openModalLazy)(async () => {
          let { default: n } = await t.e("9354").then(t.bind(t, 461533));
          return (t) => (0, a.jsx)(n, { ...t, guildId: e });
        });
      }
      t(866266);
    },
    162157: function (e, n, t) {
      t.d(n, {
        BT: function () {
          return r;
        },
        N8: function () {
          return u;
        },
      });
      var a = t(442837);
      t(467319);
      var i = t(496675),
        l = t(533244),
        s = t(487419),
        o = t(981631);
      function u(e) {
        let n = (0, a.e7)(
            [i.Z],
            () =>
              (function (e) {
                let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : i.Z;
                return (
                  n.can(o.Plq.BAN_MEMBERS, e) ||
                  n.can(o.Plq.KICK_MEMBERS, e) ||
                  n.can(o.Plq.MANAGE_GUILD, e)
                );
              })(e, i.Z),
            [e],
          ),
          t = (0, a.e7)(
            [s.Z],
            () => (null != e ? s.Z.getGuildIncident(e.id) : null),
            [e],
          );
        return !(null != t && (0, l.i9)(t)) && n;
      }
      function r(e) {
        return (0, a.e7)(
          [i.Z],
          () =>
            (function (e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : i.Z;
              return n.can(o.Plq.MANAGE_GUILD, e);
            })(e, i.Z),
          [e],
        );
      }
    },
    866266: function (e, n, t) {
      t(47120),
        t(735250),
        t(470079),
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
        t(689938),
        t(969978);
    },
    894059: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(518756),
        s = t(576749),
        o = t(689938);
      function u(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          u = (0, l.Z)(e),
          r = (0, s.Z)();
        return u
          ? (0, a.jsx)(i.MenuItem, {
              id: "create-event",
              label: o.Z.Messages.SCHEDULE_EVENT,
              icon: n ? i.CalendarPlusIcon : void 0,
              action: () => {
                (0, i.openModalLazy)(async () => {
                  let { default: n } = await Promise.all([
                    t.e("18543"),
                    t.e("53115"),
                    t.e("22347"),
                    t.e("58023"),
                    t.e("6719"),
                  ]).then(t.bind(t, 779250));
                  return (t) => (0, a.jsx)(n, { ...t, guildId: e });
                }, r);
              },
            })
          : null;
      }
    },
    771212: function (e, n, t) {
      t.d(n, {
        Fv: function () {
          return u;
        },
        eA: function () {
          return r;
        },
      });
      var a = t(470079),
        i = t(818083),
        l = t(594174),
        s = t(981631);
      let o = (0, i.B)({
        kind: "guild",
        id: "2022-03_guild_access_rate_insight_experiment",
        label: "Guild Access Rate Insight Experiment",
        defaultConfig: { showAccessRate: !1 },
        treatments: [
          {
            id: 1,
            label: "Show guild access rate in insights",
            config: { showAccessRate: !0 },
          },
        ],
      });
      function u(e) {
        var n;
        return (
          (null === (n = l.default.getCurrentUser()) || void 0 === n
            ? void 0
            : n.isStaff()) &&
          o.getCurrentConfig({ guildId: e, location: "77b4b2_1" })
            .showAccessRate
        );
      }
      function r(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          a.useEffect(() => {
            !n &&
              null != e &&
              o.trackExposure({ guildId: e, location: "77b4b2_2" });
          }, [e, n]),
          o.useExperiment(
            { guildId: null != e ? e : s.lds, location: "77b4b2_3" },
            { autoTrackExposure: !1, disable: n || null == e },
          )
        );
      }
    },
    859432: function (e, n, t) {
      t.r(n), t(47120);
      var a = t(735250),
        i = t(470079),
        l = t(512722),
        s = t.n(l),
        o = t(442837),
        u = t(704215),
        r = t(481060),
        d = t(5036),
        c = t(553385),
        E = t(52011),
        I = t(890477),
        _ = t(458034),
        g = t(706140),
        M = t(362658),
        f = t(241851),
        N = t(294978),
        p = t(513102),
        Z = t(976192),
        h = t(429824),
        A = t(466330),
        L = t(191471),
        C = t(162157),
        T = t(623624),
        m = t(894059),
        x = t(771212),
        G = t(434404),
        D = t(41776),
        b = t(837949),
        S = t(11352),
        R = t(703656),
        U = t(271383),
        O = t(496675),
        v = t(9156),
        P = t(594174),
        j = t(709586),
        y = t(626135),
        w = t(981631),
        V = t(647086),
        B = t(689938),
        H = t(602343);
      function k(e) {
        (0, r.openModal)((n) => (0, a.jsx)(f.g, { ...n, guild: e }));
      }
      let z = i.memo(function (e) {
        let { guild: n, onClose: l, onSelect: f } = e,
          z = (0, o.e7)([P.default], () => P.default.getCurrentUser());
        s()(null != z, "GuildHeaderPopout: user cannot be undefined"),
          i.useEffect(() => {
            y.default.track(w.rMx.GUILD_DROPDOWN_MENU_VIEWED, {
              guild_id: n.id,
            });
          });
        let F = (0, o.e7)([v.ZP], () => v.ZP.isGuildCollapsed(n.id), [n.id]),
          {
            canAccessSettings: Y,
            canManageChannels: K,
            showGuildAnalytics: W,
          } = (0, o.cj)(
            [O.Z],
            () => {
              let e =
                O.Z.can(w.Plq.VIEW_GUILD_ANALYTICS, n) &&
                n.hasFeature(w.oNc.COMMUNITY);
              return {
                canAccessSettings: O.Z.canAccessGuildSettings(n),
                canManageChannels: O.Z.can(w.Plq.MANAGE_CHANNELS, n),
                showGuildAnalytics: (0, x.Fv)(n.id) || e,
              };
            },
            [n],
          ),
          q = (0, C.N8)(n),
          X = n.isOwner(z),
          J = (0, o.e7)([D.Z], () => D.Z.isLurking(n.id), [n.id]),
          Q = (0, o.e7)([U.ZP], () => U.ZP.isCurrentUserGuest(n.id)),
          $ = (0, m.Z)(n.id, !0),
          ee = (0, _.ZP)(n),
          en = (0, A.Z)({ source: w.t4x.GUILD_HEADER, guild: n }),
          et = (0, Z.Z)({
            guildId: n.id,
            userId: z.id,
            analyticsLocation: {
              page: w.ZY5.GUILD_CHANNEL,
              section: w.jXE.GUILD_DROPDOWN_MENU,
            },
            icon: r.PencilIcon,
          }),
          ea = n.hasFeature(w.oNc.HUB),
          ei = n.id === V._,
          el = (0, b.Z)(n.id),
          es = (0, N.Z)(n),
          eo = (0, p.Z)(n),
          eu = (0, h.Z)(n, !0),
          { isFavoritesPerk: er } = (0, M.z)("GuildHeaderPopout"),
          { triggerDeadchat: ed } = I.Z.useExperiment(
            { guildId: n.id, location: "guild header" },
            { autoTrackExposure: !1 },
          ),
          { triggerGamingStats: ec } = E.F.useExperiment(
            { guildId: n.id, location: "guild header" },
            { autoTrackExposure: !1 },
          ),
          eE = S.Y.useExperiment(
            { location: "GuildHeaderPopout" },
            { autoTrackExposure: !0 },
          ).enabled,
          [eI] = (0, g.cv)([
            u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE,
          ]),
          e_ = eE && eI === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
        return J || Q
          ? (0, a.jsx)(r.Menu, {
              onSelect: f,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: l,
              "aria-label": B.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
              children: (0, a.jsx)(r.MenuItem, {
                id: "leave-guild",
                label: B.Z.Messages.LEAVE_SERVER,
                icon: r.DoorExitIcon,
                action: () => {
                  G.Z.leaveGuild(n.id), !Q && (0, R.uL)(w.Z5c.GUILD_DISCOVERY);
                },
              }),
            })
          : ei
            ? (0, a.jsxs)(r.Menu, {
                onSelect: f,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: l,
                "aria-label": B.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                children: [
                  (0, a.jsxs)(r.MenuGroup, {
                    children: [
                      er &&
                        (0, a.jsx)(r.MenuItem, {
                          id: "add-channel",
                          label: B.Z.Messages.FAVORITES_ADD_A_CHANNEL,
                          color: "brand",
                          icon: r.CirclePlusIcon,
                          action: () =>
                            (0, r.openModalLazy)(async () => {
                              let { default: e } = await t
                                .e("29608")
                                .then(t.bind(t, 178125));
                              return (n) => (0, a.jsx)(e, { ...n });
                            }),
                        }),
                      (0, a.jsx)(r.MenuItem, {
                        id: "create-category",
                        label: B.Z.Messages.CREATE_CATEGORY,
                        icon: r.FolderPlusIcon,
                        action: () =>
                          (0, r.openModalLazy)(async () => {
                            let { default: e } = await t
                              .e("33356")
                              .then(t.bind(t, 477782));
                            return (n) => (0, a.jsx)(e, { ...n });
                          }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(r.MenuGroup, {
                    children: (0, a.jsx)(r.MenuCheckboxItem, {
                      id: "hide-muted-channels",
                      label: B.Z.Messages.HIDE_MUTED_CHANNELS,
                      checked: F,
                      action: () => d.Z.toggleCollapseGuild(n.id),
                    }),
                  }),
                ],
              })
            : ea
              ? (0, a.jsxs)(r.Menu, {
                  onSelect: f,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: l,
                  "aria-label": B.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                  children: [
                    (0, a.jsxs)(r.MenuGroup, {
                      children: [
                        Y
                          ? (0, a.jsx)(r.MenuItem, {
                              id: "settings",
                              label: B.Z.Messages.SERVER_SETTINGS,
                              icon: r.SettingsIcon,
                              action: () => {
                                G.Z.open(n.id, w.pNK.OVERVIEW);
                              },
                            })
                          : null,
                        en,
                        (0, a.jsx)(r.MenuItem, {
                          id: "privacy",
                          label: B.Z.Messages.PRIVACY_SETTINGS,
                          icon: r.ShieldIcon,
                          action: () =>
                            (0, r.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                t.e("96427"),
                                t.e("65149"),
                                t.e("52249"),
                                t.e("54803"),
                                t.e("15685"),
                                t.e("47006"),
                                t.e("32776"),
                                t.e("18209"),
                                t.e("33053"),
                                t.e("8016"),
                                t.e("37581"),
                                t.e("76540"),
                                t.e("68136"),
                                t.e("87624"),
                                t.e("22646"),
                                t.e("5528"),
                                t.e("18146"),
                                t.e("43331"),
                                t.e("30419"),
                                t.e("18824"),
                                t.e("37229"),
                                t.e("52619"),
                                t.e("29291"),
                                t.e("54535"),
                                t.e("96934"),
                                t.e("2047"),
                              ]).then(t.bind(t, 241420));
                              return (t) => (0, a.jsx)(e, { ...t, guild: n });
                            }),
                        }),
                        et,
                      ],
                    }),
                    X
                      ? null
                      : (0, a.jsx)(r.MenuGroup, {
                          children: (0, a.jsx)(r.MenuItem, {
                            id: "leave",
                            label: B.Z.Messages.LEAVE_HUB,
                            icon: r.DoorExitIcon,
                            color: "danger",
                            action: () => k(n),
                          }),
                        }),
                  ],
                })
              : (0, a.jsxs)(r.Menu, {
                  onSelect: f,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: l,
                  "aria-label": B.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                  children: [
                    (0, a.jsx)(r.MenuGroup, {
                      children: (0, a.jsx)(r.MenuItem, {
                        id: "premium-subscribe",
                        label:
                          B.Z.Messages
                            .PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
                        icon: (0, r.makeIconCompat)(j.Z),
                        action: () => {
                          (0, T.f)({
                            guildId: n.id,
                            location: { section: w.jXE.GUILD_HEADER_POPOUT },
                          });
                        },
                      }),
                    }),
                    (0, a.jsxs)(r.MenuGroup, {
                      children: [
                        X && z.isStaff() && ed
                          ? (0, a.jsx)(r.MenuItem, {
                              id: "create-deadchat",
                              label: "Deadchat Ping",
                              icon: r.ChatCheckIcon,
                              action: () => {
                                (0, c.j8)(
                                  n.id,
                                  w.uaV.GUILD_DEADCHAT_REVIVE_PROMPT,
                                );
                              },
                            })
                          : null,
                        X && z.isStaff() && ec
                          ? (0, a.jsx)(r.MenuItem, {
                              id: "create-gaming-ping",
                              label: "Gaming Stats Ping",
                              icon: r.ChatCheckIcon,
                              action: () => {
                                (0, c.j8)(
                                  n.id,
                                  w.uaV.GUILD_GAMING_STATS_PROMPT,
                                );
                              },
                            })
                          : null,
                        en,
                        Y
                          ? (0, a.jsx)(r.MenuItem, {
                              id: "settings",
                              label: B.Z.Messages.SERVER_SETTINGS,
                              icon: r.SettingsIcon,
                              action: () => {
                                G.Z.open(n.id, w.pNK.OVERVIEW);
                              },
                            })
                          : null,
                        W
                          ? (0, a.jsx)(r.MenuItem, {
                              id: "insights",
                              label: B.Z.Messages.SERVER_INSIGHTS,
                              icon: r.AnalyticsIcon,
                              action: () => G.Z.open(n.id, w.pNK.ANALYTICS),
                            })
                          : null,
                        K
                          ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)(r.MenuItem, {
                                  id: "create-channel",
                                  label: B.Z.Messages.CREATE_CHANNEL,
                                  icon: r.CirclePlusIcon,
                                  action: () =>
                                    (0, r.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([
                                        t.e("45094"),
                                        t.e("58983"),
                                      ]).then(t.bind(t, 218613));
                                      return (t) =>
                                        (0, a.jsx)(e, {
                                          ...t,
                                          channelType: w.d4z.GUILD_TEXT,
                                          guildId: n.id,
                                        });
                                    }),
                                }),
                                (0, a.jsx)(r.MenuItem, {
                                  id: "create-category",
                                  label: B.Z.Messages.CREATE_CATEGORY,
                                  icon: r.FolderPlusIcon,
                                  action: () =>
                                    (0, r.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([
                                        t.e("45094"),
                                        t.e("58983"),
                                      ]).then(t.bind(t, 218613));
                                      return (t) =>
                                        (0, a.jsx)(e, {
                                          ...t,
                                          channelType: w.d4z.GUILD_CATEGORY,
                                          guildId: n.id,
                                        });
                                    }),
                                }),
                              ],
                            })
                          : null,
                        $,
                        es,
                        eo,
                        ee,
                      ],
                    }),
                    (0, a.jsxs)(r.MenuGroup, {
                      children: [
                        el,
                        (0, a.jsx)(r.MenuItem, {
                          id: "notifications",
                          label: (0, a.jsxs)("div", {
                            className: H.newBadgeRow,
                            children: [
                              B.Z.Messages.NOTIFICATION_SETTINGS,
                              e_ &&
                                (0, a.jsx)(r.TextBadge, {
                                  className: H.newBadge,
                                  text: B.Z.Messages.NEW,
                                }),
                            ],
                          }),
                          icon: e_ ? void 0 : r.BellIcon,
                          action: () =>
                            (0, r.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                t.e("5863"),
                                t.e("48324"),
                              ]).then(t.bind(t, 751212));
                              return (t) =>
                                (0, a.jsx)(e, { ...t, guildId: n.id });
                            }),
                        }),
                        (0, a.jsx)(r.MenuItem, {
                          id: "privacy",
                          label: B.Z.Messages.PRIVACY_SETTINGS,
                          icon: r.ShieldIcon,
                          action: () =>
                            (0, r.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                t.e("96427"),
                                t.e("65149"),
                                t.e("52249"),
                                t.e("54803"),
                                t.e("15685"),
                                t.e("47006"),
                                t.e("32776"),
                                t.e("18209"),
                                t.e("33053"),
                                t.e("8016"),
                                t.e("37581"),
                                t.e("76540"),
                                t.e("68136"),
                                t.e("87624"),
                                t.e("22646"),
                                t.e("5528"),
                                t.e("18146"),
                                t.e("43331"),
                                t.e("30419"),
                                t.e("18824"),
                                t.e("37229"),
                                t.e("52619"),
                                t.e("29291"),
                                t.e("54535"),
                                t.e("96934"),
                                t.e("2047"),
                              ]).then(t.bind(t, 241420));
                              return (t) => (0, a.jsx)(e, { ...t, guild: n });
                            }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)(r.MenuGroup, {
                      children: [
                        et,
                        (0, a.jsx)(r.MenuCheckboxItem, {
                          id: "hide-muted-channels",
                          label: B.Z.Messages.HIDE_MUTED_CHANNELS,
                          checked: F,
                          action: () => d.Z.toggleCollapseGuild(n.id),
                        }),
                      ],
                    }),
                    (0, a.jsxs)(r.MenuGroup, {
                      children: [
                        eu,
                        q && n.isCommunity()
                          ? (0, a.jsx)(r.MenuItem, {
                              id: "report-raid",
                              label:
                                B.Z.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                              icon: r.ShieldIcon,
                              color: "danger",
                              action: () => (0, L.J)(n.id),
                            })
                          : null,
                        X
                          ? null
                          : (0, a.jsx)(r.MenuItem, {
                              id: "leave",
                              label: B.Z.Messages.LEAVE_SERVER,
                              icon: r.DoorExitIcon,
                              color: "danger",
                              action: () => k(n),
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
          return c;
        },
        kH: function () {
          return E;
        },
        rz: function () {
          return I;
        },
      }),
        t(789020),
        t(47120),
        t(653041),
        t(524437);
      var a = t(549817);
      t(581883);
      var i = t(984933),
        l = t(271383),
        s = t(9156),
        o = t(630388),
        u = t(152376),
        r = t(398758),
        d = t(372897);
      function c(e) {
        var n, t;
        let a = (0, r.r1)(e),
          i =
            null !==
              (t =
                null === (n = l.ZP.getSelfMember(e)) || void 0 === n
                  ? void 0
                  : n.flags) && void 0 !== t
              ? t
              : 0,
          u = (0, o.yE)(i, d.q.COMPLETED_ONBOARDING),
          c = s.ZP.getOptedInChannels(e).size > 0;
        return !a && !u && !c;
      }
      function E(e) {
        if (c(e)) {
          I(e);
          return;
        }
        {
          let n = (0, r.r1)(e);
          (0, u.QG)(e, !n);
        }
      }
      function I(e) {
        let { include: n = new Set(), exclude: t = new Set() } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          l = i.ZP.getChannels(e),
          s = [...l[i.sH], ...l[i.Zb]]
            .filter((e) => {
              let { channel: n } = e;
              return !n.isThread() && !t.has(n.id);
            })
            .map((e) => {
              let { channel: n } = e;
              return n.id;
            });
        n.forEach((e) => s.push(e)), a.Z.onboardExistingMember(e, new Set(s));
      }
    },
    837949: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        s = t(430824),
        o = t(594174),
        u = t(724213),
        r = t(398758),
        d = t(981631),
        c = t(689938);
      function E(e) {
        let n = (0, r.DM)(e),
          t = (0, i.e7)([s.Z], () => s.Z.getGuild(e)),
          E = (0, i.e7)([o.default], () => o.default.getCurrentUser());
        return null != E &&
          null != t &&
          (t.hasFeature(d.oNc.COMMUNITY) || E.isStaff())
          ? (0, a.jsx)(l.MenuCheckboxItem, {
              id: "opt-in",
              label: c.Z.Messages.GUILD_CHANNEL_OPT_IN,
              checked: !n,
              action: () => {
                (0, u.kH)(e);
              },
            })
          : null;
      }
    },
    591822: function (e, n, t) {
      e.exports = {};
    },
    936124: function (e, n, t) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    969978: function (e, n, t) {
      e.exports = {};
    },
    602343: function (e, n, t) {
      e.exports = {
        newBadgeRow: "newBadgeRow_f08bf8",
        newBadge: "newBadge_f08bf8",
      };
    },
  },
]);
//# sourceMappingURL=5c71d4a15ad5d786e536.js.map
