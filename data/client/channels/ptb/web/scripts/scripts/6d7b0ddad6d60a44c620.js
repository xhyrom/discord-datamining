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
        r = t(605236),
        u = t(434404),
        d = t(41776),
        c = t(703656),
        E = t(981631),
        I = t(689938),
        _ = t(214201);
      let g = (e) => {
        let { guild: n } = e,
          i = n.id,
          g = async () => {
            let e = d.Z.isLurking(i);
            await u.Z.leaveGuild(i),
              e
                ? (0, c.uL)(E.Z5c.GUILD_DISCOVERY)
                : !(0, r.un)(s.z.GUILD_LEAVE_FEEDBACK) &&
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
        r = t(344185),
        u = t(665906),
        d = t(689938);
      function c(e) {
        let n = (0, u.Xb)(e),
          i = (0, s.e7)(
            [r.Z],
            () => !l().isEmpty(r.Z.getThreadsForGuild(e.id)),
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
          return r;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(132871),
        s = t(147890),
        o = t(689938);
      function r(e) {
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
        r = t(40851),
        u = t(300284),
        d = t(484459),
        c = t(314897),
        E = t(271383),
        I = t(430824),
        _ = t(496675),
        g = t(594174),
        M = t(981631),
        f = t(689938),
        N = t(745974);
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
        let b = i.useMemo(() => ({ [n]: [p] }), [n, p]);
        (0, o.$)(b);
        let D = A === M.IlC.POPOUT,
          G = (0, u.Z)({ guild: C, analyticsLocation: Z }),
          S = (0, r.Aq)();
        if (null == C || D) return null;
        let R =
            T === p &&
            (_.Z.can(M.Plq.CHANGE_NICKNAME, C) ||
              _.Z.can(M.Plq.MANAGE_NICKNAMES, C)),
          U = T === p,
          v = _.Z.canManageUser(M.Plq.MANAGE_NICKNAMES, p, C);
        if (!(R || v || U) || null == m || x) return null;
        let O = C.hasFeature(M.oNc.HUB)
            ? f.Z.Messages.HUB_EDIT_PROFILE
            : f.Z.Messages.CHANGE_IDENTITY,
          P = U ? O : f.Z.Messages.CHANGE_NICKNAME;
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
                G(),
                S.dispatch(M.CkL.POPOUT_CLOSE),
                (0, s.closeAllModals)())
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
    887904: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(557239),
        s = t(689938);
      function o(e) {
        let { guildFriendsEnabled: n } = l.Z.useExperiment(
          { location: "useFriendsItem" },
          { autoTrackExposure: !1 },
        );
        return n
          ? (0, a.jsx)(i.MenuItem, {
              id: "friends",
              label: s.Z.Messages.GUILD_FRIENDS,
              icon: i.FriendsIcon,
              action: () => {
                (0, i.openModalLazy)(async () => {
                  let { default: n } = await t
                    .e("62635")
                    .then(t.bind(t, 564232));
                  return (t) => (0, a.jsx)(n, { guild: e, ...t });
                });
              },
            })
          : null;
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
        r = t(533244),
        u = t(689938);
      function d(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          {
            shouldShowIncidentActions: d,
            isUnderLockdown: c,
            incidentData: E,
          } = (0, s.mI)(e.id),
          I = i.useCallback(() => {
            let n = { source: o.Zu.CONTEXT_MENU, alertType: (0, r.T1)(E) };
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
                ? u.Z.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK
                : u.Z.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
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
        r = t(496675),
        u = t(981631),
        d = t(689938);
      function c(e) {
        let { source: n, guild: t, channel: a, stageInstance: l } = e,
          d = (0, i.e7)([o.ZP], () =>
            o.ZP.getDefaultChannel(t.id, !0, u.Plq.CREATE_INSTANT_INVITE),
          ),
          c = (0, i.e7)([r.Z], () => (0, s.b)(r.Z, t, a, l)),
          _ = E(n, t, c && null != a ? a : d),
          g = I(n);
        return null == a && n === u.t4x.GUILD_CONTEXT_MENU
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
            icon: e === u.t4x.GUILD_HEADER ? l.GroupPlusIcon : void 0,
            action: () =>
              (0, l.openModalLazy)(async () => {
                let { default: l } = await Promise.all([
                  t.e("7654"),
                  t.e("85683"),
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
            icon: e === u.t4x.GUILD_HEADER ? l.GroupPlusIcon : void 0,
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
        r = t(430824),
        u = t(626135),
        d = t(981631);
      function c(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== n.length)
          u.default.track(d.rMx.GUILD_RAID_REPORTED, {
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
        let a = r.Z.getGuild(e);
        return null == (null == a ? void 0 : a.getSafetyAlertsChannelId())
          ? null
          : await l.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: { alert_message_id: n, reason: t },
            });
      }
      async function g(e) {
        let n = r.Z.getGuild(e);
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
          return u;
        },
        N8: function () {
          return r;
        },
      });
      var a = t(442837);
      t(467319);
      var i = t(496675),
        l = t(533244),
        s = t(487419),
        o = t(981631);
      function r(e) {
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
      function u(e) {
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
        t(563953);
    },
    894059: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(518756),
        s = t(576749),
        o = t(689938);
      function r(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = (0, l.Z)(e),
          u = (0, s.Z)();
        return r
          ? (0, a.jsx)(i.MenuItem, {
              id: "create-event",
              label: o.Z.Messages.SCHEDULE_EVENT,
              icon: n ? i.CalendarPlusIcon : void 0,
              action: () => {
                (0, i.openModalLazy)(async () => {
                  let { default: n } = await Promise.all([
                    t.e("53115"),
                    t.e("22347"),
                    t.e("58023"),
                    t.e("49613"),
                  ]).then(t.bind(t, 779250));
                  return (t) => (0, a.jsx)(n, { ...t, guildId: e });
                }, u);
              },
            })
          : null;
      }
    },
    771212: function (e, n, t) {
      t.d(n, {
        Fv: function () {
          return r;
        },
        eA: function () {
          return u;
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
      function r(e) {
        var n;
        return (
          (null === (n = l.default.getCurrentUser()) || void 0 === n
            ? void 0
            : n.isStaff()) &&
          o.getCurrentConfig({ guildId: e, location: "77b4b2_1" })
            .showAccessRate
        );
      }
      function u(e) {
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
        r = t(704215),
        u = t(481060),
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
        h = t(887904),
        A = t(429824),
        L = t(466330),
        C = t(191471),
        T = t(162157),
        m = t(623624),
        x = t(894059),
        b = t(771212),
        D = t(434404),
        G = t(41776),
        S = t(837949),
        R = t(11352),
        U = t(703656),
        v = t(271383),
        O = t(496675),
        P = t(9156),
        j = t(594174),
        y = t(709586),
        w = t(626135),
        V = t(981631),
        B = t(647086),
        H = t(689938),
        k = t(359149);
      function F(e) {
        (0, u.openModal)((n) => (0, a.jsx)(f.g, { ...n, guild: e }));
      }
      let z = i.memo(function (e) {
        let { guild: n, onClose: l, onSelect: f } = e,
          z = (0, o.e7)([j.default], () => j.default.getCurrentUser());
        s()(null != z, "GuildHeaderPopout: user cannot be undefined"),
          i.useEffect(() => {
            w.default.track(V.rMx.GUILD_DROPDOWN_MENU_VIEWED, {
              guild_id: n.id,
            });
          });
        let Y = (0, o.e7)([P.ZP], () => P.ZP.isGuildCollapsed(n.id), [n.id]),
          {
            canAccessSettings: K,
            canManageChannels: W,
            showGuildAnalytics: q,
          } = (0, o.cj)(
            [O.Z],
            () => {
              let e =
                O.Z.can(V.Plq.VIEW_GUILD_ANALYTICS, n) &&
                n.hasFeature(V.oNc.COMMUNITY);
              return {
                canAccessSettings: O.Z.canAccessGuildSettings(n),
                canManageChannels: O.Z.can(V.Plq.MANAGE_CHANNELS, n),
                showGuildAnalytics: (0, b.Fv)(n.id) || e,
              };
            },
            [n],
          ),
          X = (0, T.N8)(n),
          J = n.isOwner(z),
          Q = (0, o.e7)([G.Z], () => G.Z.isLurking(n.id), [n.id]),
          $ = (0, o.e7)([v.ZP], () => v.ZP.isCurrentUserGuest(n.id)),
          ee = (0, x.Z)(n.id, !0),
          en = (0, _.ZP)(n),
          et = (0, L.Z)({ source: V.t4x.GUILD_HEADER, guild: n }),
          ea = (0, Z.Z)({
            guildId: n.id,
            userId: z.id,
            analyticsLocation: {
              page: V.ZY5.GUILD_CHANNEL,
              section: V.jXE.GUILD_DROPDOWN_MENU,
            },
            icon: u.PencilIcon,
          }),
          ei = n.hasFeature(V.oNc.HUB),
          el = n.id === B._,
          es = (0, S.Z)(n.id),
          eo = (0, N.Z)(n),
          er = (0, p.Z)(n),
          eu = (0, A.Z)(n, !0),
          ed = (0, h.Z)(n),
          { isFavoritesPerk: ec } = (0, M.z)("GuildHeaderPopout"),
          { triggerDeadchat: eE } = I.Z.useExperiment(
            { guildId: n.id, location: "guild header" },
            { autoTrackExposure: !1 },
          ),
          { triggerGamingStats: eI } = E.F.useExperiment(
            { guildId: n.id, location: "guild header" },
            { autoTrackExposure: !1 },
          ),
          e_ = R.Y.useExperiment(
            { location: "GuildHeaderPopout" },
            { autoTrackExposure: !0 },
          ).enabled,
          [eg] = (0, g.cv)([
            r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE,
          ]),
          eM = e_ && eg === r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
        return Q || $
          ? (0, a.jsx)(u.Menu, {
              onSelect: f,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: l,
              "aria-label": H.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
              children: (0, a.jsx)(u.MenuItem, {
                id: "leave-guild",
                label: H.Z.Messages.LEAVE_SERVER,
                icon: u.DoorExitIcon,
                action: () => {
                  D.Z.leaveGuild(n.id), !$ && (0, U.uL)(V.Z5c.GUILD_DISCOVERY);
                },
              }),
            })
          : el
            ? (0, a.jsxs)(u.Menu, {
                onSelect: f,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: l,
                "aria-label": H.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                children: [
                  (0, a.jsxs)(u.MenuGroup, {
                    children: [
                      ec &&
                        (0, a.jsx)(u.MenuItem, {
                          id: "add-channel",
                          label: H.Z.Messages.FAVORITES_ADD_A_CHANNEL,
                          color: "brand",
                          icon: u.CirclePlusIcon,
                          action: () =>
                            (0, u.openModalLazy)(async () => {
                              let { default: e } = await t
                                .e("29608")
                                .then(t.bind(t, 178125));
                              return (n) => (0, a.jsx)(e, { ...n });
                            }),
                        }),
                      (0, a.jsx)(u.MenuItem, {
                        id: "create-category",
                        label: H.Z.Messages.CREATE_CATEGORY,
                        icon: u.FolderPlusIcon,
                        action: () =>
                          (0, u.openModalLazy)(async () => {
                            let { default: e } = await t
                              .e("33356")
                              .then(t.bind(t, 477782));
                            return (n) => (0, a.jsx)(e, { ...n });
                          }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(u.MenuGroup, {
                    children: (0, a.jsx)(u.MenuCheckboxItem, {
                      id: "hide-muted-channels",
                      label: H.Z.Messages.HIDE_MUTED_CHANNELS,
                      checked: Y,
                      action: () => d.Z.toggleCollapseGuild(n.id),
                    }),
                  }),
                ],
              })
            : ei
              ? (0, a.jsxs)(u.Menu, {
                  onSelect: f,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: l,
                  "aria-label": H.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                  children: [
                    (0, a.jsxs)(u.MenuGroup, {
                      children: [
                        K
                          ? (0, a.jsx)(u.MenuItem, {
                              id: "settings",
                              label: H.Z.Messages.SERVER_SETTINGS,
                              icon: u.SettingsIcon,
                              action: () => {
                                D.Z.open(n.id, V.pNK.OVERVIEW);
                              },
                            })
                          : null,
                        et,
                        (0, a.jsx)(u.MenuItem, {
                          id: "privacy",
                          label: H.Z.Messages.PRIVACY_SETTINGS,
                          icon: u.ShieldIcon,
                          action: () =>
                            (0, u.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                t.e("96427"),
                                t.e("51514"),
                                t.e("81039"),
                                t.e("52249"),
                                t.e("54803"),
                                t.e("15685"),
                                t.e("72652"),
                                t.e("32776"),
                                t.e("79915"),
                                t.e("33053"),
                                t.e("8016"),
                                t.e("37581"),
                                t.e("68136"),
                                t.e("76540"),
                                t.e("87624"),
                                t.e("22646"),
                                t.e("25183"),
                                t.e("57674"),
                                t.e("30419"),
                                t.e("48923"),
                                t.e("18824"),
                                t.e("52619"),
                                t.e("8821"),
                                t.e("18815"),
                                t.e("70290"),
                              ]).then(t.bind(t, 241420));
                              return (t) => (0, a.jsx)(e, { ...t, guild: n });
                            }),
                        }),
                        ea,
                      ],
                    }),
                    J
                      ? null
                      : (0, a.jsx)(u.MenuGroup, {
                          children: (0, a.jsx)(u.MenuItem, {
                            id: "leave",
                            label: H.Z.Messages.LEAVE_HUB,
                            icon: u.DoorExitIcon,
                            color: "danger",
                            action: () => F(n),
                          }),
                        }),
                  ],
                })
              : (0, a.jsxs)(u.Menu, {
                  onSelect: f,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: l,
                  "aria-label": H.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                  children: [
                    (0, a.jsx)(u.MenuGroup, {
                      children: (0, a.jsx)(u.MenuItem, {
                        id: "premium-subscribe",
                        label:
                          H.Z.Messages
                            .PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
                        icon: (0, u.makeIconCompat)(y.Z),
                        action: () => {
                          (0, m.f)({
                            guildId: n.id,
                            location: { section: V.jXE.GUILD_HEADER_POPOUT },
                          });
                        },
                      }),
                    }),
                    (0, a.jsxs)(u.MenuGroup, {
                      children: [
                        J && z.isStaff() && eE
                          ? (0, a.jsx)(u.MenuItem, {
                              id: "create-deadchat",
                              label: "Deadchat Ping",
                              icon: u.ChatCheckIcon,
                              action: () => {
                                (0, c.j8)(
                                  n.id,
                                  V.uaV.GUILD_DEADCHAT_REVIVE_PROMPT,
                                );
                              },
                            })
                          : null,
                        J && z.isStaff() && eI
                          ? (0, a.jsx)(u.MenuItem, {
                              id: "create-gaming-ping",
                              label: "Gaming Stats Ping",
                              icon: u.ChatCheckIcon,
                              action: () => {
                                (0, c.j8)(
                                  n.id,
                                  V.uaV.GUILD_GAMING_STATS_PROMPT,
                                );
                              },
                            })
                          : null,
                        et,
                        K
                          ? (0, a.jsx)(u.MenuItem, {
                              id: "settings",
                              label: H.Z.Messages.SERVER_SETTINGS,
                              icon: u.SettingsIcon,
                              action: () => {
                                D.Z.open(n.id, V.pNK.OVERVIEW);
                              },
                            })
                          : null,
                        q
                          ? (0, a.jsx)(u.MenuItem, {
                              id: "insights",
                              label: H.Z.Messages.SERVER_INSIGHTS,
                              icon: u.AnalyticsIcon,
                              action: () => D.Z.open(n.id, V.pNK.ANALYTICS),
                            })
                          : null,
                        W
                          ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)(u.MenuItem, {
                                  id: "create-channel",
                                  label: H.Z.Messages.CREATE_CHANNEL,
                                  icon: u.CirclePlusIcon,
                                  action: () =>
                                    (0, u.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([
                                        t.e("45094"),
                                        t.e("5324"),
                                      ]).then(t.bind(t, 218613));
                                      return (t) =>
                                        (0, a.jsx)(e, {
                                          ...t,
                                          channelType: V.d4z.GUILD_TEXT,
                                          guildId: n.id,
                                        });
                                    }),
                                }),
                                (0, a.jsx)(u.MenuItem, {
                                  id: "create-category",
                                  label: H.Z.Messages.CREATE_CATEGORY,
                                  icon: u.FolderPlusIcon,
                                  action: () =>
                                    (0, u.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([
                                        t.e("45094"),
                                        t.e("5324"),
                                      ]).then(t.bind(t, 218613));
                                      return (t) =>
                                        (0, a.jsx)(e, {
                                          ...t,
                                          channelType: V.d4z.GUILD_CATEGORY,
                                          guildId: n.id,
                                        });
                                    }),
                                }),
                              ],
                            })
                          : null,
                        ee,
                        eo,
                        er,
                        en,
                        ed,
                      ],
                    }),
                    (0, a.jsxs)(u.MenuGroup, {
                      children: [
                        es,
                        (0, a.jsx)(u.MenuItem, {
                          id: "notifications",
                          label: (0, a.jsxs)("div", {
                            className: k.newBadgeRow,
                            children: [
                              H.Z.Messages.NOTIFICATION_SETTINGS,
                              eM &&
                                (0, a.jsx)(u.TextBadge, {
                                  className: k.newBadge,
                                  text: H.Z.Messages.NEW,
                                }),
                            ],
                          }),
                          icon: eM ? void 0 : u.BellIcon,
                          action: () =>
                            (0, u.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                t.e("5863"),
                                t.e("53658"),
                              ]).then(t.bind(t, 751212));
                              return (t) =>
                                (0, a.jsx)(e, { ...t, guildId: n.id });
                            }),
                        }),
                        (0, a.jsx)(u.MenuItem, {
                          id: "privacy",
                          label: H.Z.Messages.PRIVACY_SETTINGS,
                          icon: u.ShieldIcon,
                          action: () =>
                            (0, u.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                t.e("96427"),
                                t.e("51514"),
                                t.e("81039"),
                                t.e("52249"),
                                t.e("54803"),
                                t.e("15685"),
                                t.e("72652"),
                                t.e("32776"),
                                t.e("79915"),
                                t.e("33053"),
                                t.e("8016"),
                                t.e("37581"),
                                t.e("68136"),
                                t.e("76540"),
                                t.e("87624"),
                                t.e("22646"),
                                t.e("25183"),
                                t.e("57674"),
                                t.e("30419"),
                                t.e("48923"),
                                t.e("18824"),
                                t.e("52619"),
                                t.e("8821"),
                                t.e("18815"),
                                t.e("70290"),
                              ]).then(t.bind(t, 241420));
                              return (t) => (0, a.jsx)(e, { ...t, guild: n });
                            }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)(u.MenuGroup, {
                      children: [
                        ea,
                        (0, a.jsx)(u.MenuCheckboxItem, {
                          id: "hide-muted-channels",
                          label: H.Z.Messages.HIDE_MUTED_CHANNELS,
                          checked: Y,
                          action: () => d.Z.toggleCollapseGuild(n.id),
                        }),
                      ],
                    }),
                    (0, a.jsxs)(u.MenuGroup, {
                      children: [
                        eu,
                        X && n.isCommunity()
                          ? (0, a.jsx)(u.MenuItem, {
                              id: "report-raid",
                              label:
                                H.Z.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                              icon: u.ShieldIcon,
                              color: "danger",
                              action: () => (0, C.J)(n.id),
                            })
                          : null,
                        J
                          ? null
                          : (0, a.jsx)(u.MenuItem, {
                              id: "leave",
                              label: H.Z.Messages.LEAVE_SERVER,
                              icon: u.DoorExitIcon,
                              color: "danger",
                              action: () => F(n),
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
        r = t(152376),
        u = t(398758),
        d = t(372897);
      function c(e) {
        var n, t;
        let a = (0, u.r1)(e),
          i =
            null !==
              (t =
                null === (n = l.ZP.getSelfMember(e)) || void 0 === n
                  ? void 0
                  : n.flags) && void 0 !== t
              ? t
              : 0,
          r = (0, o.yE)(i, d.q.COMPLETED_ONBOARDING),
          c = s.ZP.getOptedInChannels(e).size > 0;
        return !a && !r && !c;
      }
      function E(e) {
        if (c(e)) {
          I(e);
          return;
        }
        {
          let n = (0, u.r1)(e);
          (0, r.QG)(e, !n);
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
        r = t(724213),
        u = t(398758),
        d = t(981631),
        c = t(689938);
      function E(e) {
        let n = (0, u.DM)(e),
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
                (0, r.kH)(e);
              },
            })
          : null;
      }
    },
    557239: function (e, n, t) {
      let a = (0, t(818083).B)({
        kind: "user",
        id: "2024-09_friends_in_server",
        label: "Friends in Server",
        defaultConfig: { guildFriendsEnabled: !1 },
        treatments: [
          { id: 1, label: "Enabled", config: { guildFriendsEnabled: !0 } },
        ],
      });
      n.Z = a;
    },
    214201: function (e, n, t) {
      e.exports = {};
    },
    745974: function (e, n, t) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    563953: function (e, n, t) {
      e.exports = {};
    },
    359149: function (e, n, t) {
      e.exports = {
        newBadgeRow: "newBadgeRow_f08bf8",
        newBadge: "newBadge_f08bf8",
      };
    },
  },
]);
//# sourceMappingURL=6d7b0ddad6d60a44c620.js.map
