"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33685"],
  {
    883385: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return u;
        },
      });
      var r = t(735250);
      t(470079);
      var a = t(410575);
      function u(n, e) {
        return function (t) {
          return (0, r.jsx)(a.Z, {
            page: e.page,
            section: e.section,
            object: e.object,
            objectType: e.objectType,
            children: (0, r.jsx)(n, { ...t }),
          });
        };
      }
    },
    108843: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return u;
        },
      });
      var r = t(735250);
      t(470079);
      var a = t(906732);
      function u(n, e) {
        return function (t) {
          let { analyticsLocations: u } = (0, a.ZP)(e);
          return (0, r.jsx)(a.Gt, {
            value: u,
            children: (0, r.jsx)(n, { ...t }),
          });
        };
      }
    },
    976192: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return N;
        },
      });
      var r = t(735250),
        a = t(470079),
        u = t(442837),
        i = t(481060),
        l = t(58540),
        o = t(40851),
        c = t(300284),
        d = t(484459),
        s = t(314897),
        _ = t(271383),
        E = t(430824),
        M = t(496675),
        f = t(594174),
        A = t(981631),
        I = t(689938),
        O = t(745974);
      function N(n) {
        let {
            guildId: e,
            userId: N,
            analyticsLocation: T,
            analyticsLocations: L,
            context: U,
            icon: C,
          } = n,
          S = E.Z.getGuild(e),
          g = s.default.getId(),
          D = (0, u.e7)([f.default], () => f.default.getUser(N)),
          p = (0, u.e7)([_.ZP], () => _.ZP.isGuestOrLurker(e, N), [e, N]);
        (0, u.e7)([M.Z], () => M.Z.getGuildVersion(e), [e]);
        let y = a.useMemo(() => ({ [e]: [N] }), [e, N]);
        (0, l.$)(y);
        let R = U === A.IlC.POPOUT,
          m = (0, c.Z)({ guild: S, analyticsLocation: T }),
          Z = (0, o.Aq)();
        if (null == S || R) return null;
        let b =
            g === N &&
            (M.Z.can(A.Plq.CHANGE_NICKNAME, S) ||
              M.Z.can(A.Plq.MANAGE_NICKNAMES, S)),
          x = g === N,
          j = M.Z.canManageUser(A.Plq.MANAGE_NICKNAMES, N, S);
        if (!(b || j || x) || null == D || p) return null;
        let v = S.hasFeature(A.oNc.HUB)
            ? I.Z.Messages.HUB_EDIT_PROFILE
            : I.Z.Messages.CHANGE_IDENTITY,
          h = x ? v : I.Z.Messages.CHANGE_NICKNAME;
        return (0, r.jsx)(i.MenuItem, {
          id: "change-nickname",
          label: (0, r.jsx)("div", {
            className: O.labelWrapper,
            children: (0, r.jsx)("span", { className: O.label, children: h }),
          }),
          icon: C,
          action: () => {
            x
              ? ((0, d.Z)(D.id, D.getAvatarURL(e, 80), { guildId: e }),
                m(),
                Z.dispatch(A.CkL.POPOUT_CLOSE),
                (0, i.closeAllModals)())
              : (0, i.openModalLazy)(async () => {
                  let { default: n } = await t
                    .e("17712")
                    .then(t.bind(t, 620021));
                  return (t) =>
                    (0, r.jsx)(n, {
                      ...t,
                      guildId: e,
                      user: D,
                      analyticsSource: T,
                      analyticsLocations: L,
                    });
                });
          },
        });
      }
    },
    273504: function (n, e, t) {
      t.d(e, {
        I3: function () {
          return d;
        },
        Ic: function () {
          return N;
        },
        Lg: function () {
          return O;
        },
        OU: function () {
          return A;
        },
        RH: function () {
          return o;
        },
        Ux: function () {
          return a;
        },
        VW: function () {
          return s;
        },
        Vg: function () {
          return I;
        },
        Vk: function () {
          return E;
        },
        _6: function () {
          return T;
        },
        aj: function () {
          return f;
        },
        dc: function () {
          return L;
        },
        fX: function () {
          return l.f;
        },
        hu: function () {
          return _;
        },
        jj: function () {
          return u.j;
        },
        n4: function () {
          return c;
        },
        q4: function () {
          return i.q;
        },
        uE: function () {
          return M;
        },
      });
      var r,
        a,
        u = t(401653),
        i = t(95930),
        l = t(41381);
      ((r = a || (a = {}))[(r.PROFANITY = 1)] = "PROFANITY"),
        (r[(r.SEXUAL_CONTENT = 2)] = "SEXUAL_CONTENT"),
        (r[(r.SLURS = 3)] = "SLURS"),
        l.f.USER_PROFILE,
        l.f.SERVER_POLICY,
        l.f.MENTION_SPAM,
        l.f.ML_SPAM,
        l.f.DEFAULT_KEYWORD_LIST,
        l.f.KEYWORD;
      let o = 1e3,
        c = 100,
        d = 1e3,
        s = 10,
        _ = 60,
        E = 1,
        M = 1,
        f = 260,
        A = 100,
        I = 1,
        O = 50,
        N = 20,
        T = 150,
        L = "automod-profile-quarantine-alert";
    },
    787824: function (n, e, t) {
      t.d(e, {
        C: function () {
          return function n(e) {
            return null == e
              ? e
              : Object.keys(e).reduce((t, a) => {
                  let u = (0, r.camelCase)(a);
                  return (
                    "object" != typeof e[a] || Array.isArray(e[a])
                      ? (t[u] = e[a])
                      : (t[u] = n(e[a])),
                    t
                  );
                }, {});
          };
        },
        X: function () {
          return function n(e) {
            return null == e
              ? e
              : Object.keys(e).reduce((t, a) => {
                  let u = (0, r.snakeCase)(a);
                  return (
                    "object" != typeof e[a] || Array.isArray(e[a])
                      ? (t[u] = e[a])
                      : (t[u] = n(e[a])),
                    (t[u] = e[a]),
                    t
                  );
                }, {});
          };
        },
      }),
        t(724458);
      var r = t(392711);
    },
    226192: function (n, e, t) {
      t.d(e, {
        UV: function () {
          return d;
        },
        _s: function () {
          return o;
        },
        kW: function () {
          return c;
        },
        km: function () {
          return l;
        },
      });
      var r = t(735250);
      t(470079);
      var a = t(481060),
        u = t(273504),
        i = t(689938);
      function l(n) {
        return {
          [u.jj.BLOCK_MESSAGE]: (n, e) =>
            new Promise((n) => {
              (0, a.openModalLazy)(async () => {
                let { default: a } = await t.e("94005").then(t.bind(t, 144462));
                return (t) => {
                  var u;
                  return (0, r.jsx)(a, {
                    initialCustomMessage:
                      null !== (u = e.metadata.customMessage) && void 0 !== u
                        ? u
                        : "",
                    onSubmit: (r) => {
                      (e.metadata.customMessage = r), n(e), t.onClose();
                    },
                    ...t,
                    onClose: () => (n(null), t.onClose()),
                  });
                };
              });
            }),
          [u.jj.FLAG_TO_CHANNEL]: (e, i) =>
            new Promise((l) => {
              (0, a.openModalLazy)(async () => {
                let { default: a } = await t.e("74543").then(t.bind(t, 643611)),
                  o = e.actions.find((n) => n.type === u.jj.FLAG_TO_CHANNEL);
                return (t) =>
                  (0, r.jsx)(a, {
                    action: i,
                    isEdit: null != o,
                    triggerType: e.triggerType,
                    guildId: n,
                    onEditChannel: (n) => {
                      (i.metadata.channelId = n),
                        e.exemptChannels.add(n),
                        l(i),
                        t.onClose();
                    },
                    ...t,
                    onClose: () => (l(null), t.onClose()),
                  });
              });
            }),
          [u.jj.USER_COMMUNICATION_DISABLED]: (n, e) =>
            new Promise((i) => {
              (0, a.openModalLazy)(async () => {
                let { default: a } = await t.e("78273").then(t.bind(t, 41767)),
                  l = n.actions.find(
                    (n) => n.type === u.jj.USER_COMMUNICATION_DISABLED,
                  );
                return (t) =>
                  (0, r.jsx)(a, {
                    action: e,
                    isEdit: null != l,
                    triggerType: n.triggerType,
                    onUpdateDuration: (n) => {
                      null != n && (e.metadata.durationSeconds = n),
                        i(e),
                        t.onClose();
                    },
                    ...t,
                    onClose: () => (i(null), t.onClose()),
                  });
              });
            }),
        };
      }
      function o(n, e, u, i) {
        (0, a.openModalLazy)(async () => {
          let { default: a } = await t.e("37483").then(t.bind(t, 241046));
          return (t) =>
            (0, r.jsx)(a, {
              ...t,
              automodDecision: {
                messageId: n,
                messageContent: e,
                decisionId: u,
                channel: i,
              },
            });
        });
      }
      function c(n, e) {
        (0, a.openModalLazy)(async () => {
          let { default: a } = await t.e("28382").then(t.bind(t, 537623));
          return (t) => (0, r.jsx)(a, { ...t, messageId: n, guildId: e });
        });
      }
      function d(n) {
        (0, a.openModal)((e) =>
          (0, r.jsx)(a.ConfirmModal, {
            header: i.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
            confirmText: i.Z.Messages.CONFIRM,
            onConfirm: n,
            cancelText: i.Z.Messages.CANCEL,
            ...e,
            children: (0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              children:
                i.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY,
            }),
          }),
        );
      }
    },
    36459: function (n, e, t) {
      t.d(e, {
        $Y: function () {
          return U;
        },
        JK: function () {
          return N;
        },
        Je: function () {
          return T;
        },
        T9: function () {
          return g;
        },
        UE: function () {
          return S;
        },
        Xx: function () {
          return C;
        },
        mm: function () {
          return L;
        },
        qY: function () {
          return O;
        },
      }),
        t(47120);
      var r = t(544891),
        a = t(570140),
        u = t(367907),
        i = t(430824),
        l = t(496675),
        o = t(823379),
        c = t(709054),
        d = t(177862),
        s = t(787824),
        _ = t(226192),
        E = t(981631);
      function M(n) {
        return { type: n.type, metadata: (0, s.X)(n.metadata) };
      }
      function f(n) {
        var e, t;
        let r = (0, s.X)(n.triggerMetadata);
        return (
          null != r && delete r.keywordLists,
          {
            id: n.id,
            name: n.name,
            guild_id: n.guildId,
            event_type: n.eventType,
            trigger_type: n.triggerType,
            trigger_metadata: r,
            actions: n.actions.filter(o.lm).map(M),
            enabled: n.enabled,
            creator_id: n.creatorId,
            position: n.position,
            exempt_channels: Array.from(
              null !== (e = n.exemptChannels) && void 0 !== e ? e : [],
            ),
            exempt_roles: Array.from(
              null !== (t = n.exemptRoles) && void 0 !== t ? t : [],
            ),
          }
        );
      }
      function A(n) {
        return { type: n.type, metadata: (0, s.C)(n.metadata) };
      }
      function I(n) {
        var e, t, r;
        let a = {
          id:
            null !== (e = n.id) && void 0 !== e
              ? e
              : c.default.fromTimestamp(Date.now()),
          name: n.name,
          guildId: n.guild_id,
          eventType: n.event_type,
          triggerType: n.trigger_type,
          triggerMetadata: (0, s.C)(n.trigger_metadata),
          actions: n.actions.filter(o.lm).map(A),
          enabled: n.enabled,
          creatorId: n.creator_id,
          position: n.position,
          exemptChannels: new Set(
            null !== (t = n.exempt_channels) && void 0 !== t ? t : [],
          ),
          exemptRoles: new Set(
            null !== (r = n.exempt_roles) && void 0 !== r ? r : [],
          ),
        };
        return (
          null != a.triggerMetadata && delete a.triggerMetadata.keywordLists, a
        );
      }
      async function O(n) {
        let e = f(n),
          t = await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_VALIDATE_RULE(n.guildId),
            body: e,
          });
        return (0, s.C)(t.body);
      }
      async function N(n) {
        let e = f(n);
        return (
          delete e.id,
          I(
            (
              await r.tn.post({
                url: E.ANM.GUILD_AUTOMOD_RULES(n.guildId),
                body: e,
              })
            ).body,
          )
        );
      }
      async function T(n) {
        let e = f(n);
        return I(
          (
            await r.tn.patch({
              url: E.ANM.GUILD_AUTOMOD_RULE(n.guildId, n.id),
              body: e,
            })
          ).body,
        );
      }
      async function L(n, e) {
        return await r.tn.del({ url: E.ANM.GUILD_AUTOMOD_RULE(e, n) }), !0;
      }
      async function U(n) {
        let e = await r.tn.get({ url: E.ANM.GUILD_AUTOMOD_RULES(n) });
        return Array.isArray(e.body) ? e.body.map(I) : [];
      }
      async function C(n, e, t) {
        if (!!l.Z.can(E.Plq.MANAGE_MESSAGES, e))
          await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_ALERT_ACTION(e.guild_id),
            body: { message_id: n, channel_id: e.id, alert_action_type: t },
          });
      }
      function S(n, e, t) {
        let a = i.Z.getGuild(n);
        if (null != a && !!l.Z.can(E.Plq.MANAGE_GUILD, a))
          (0, _.UV)(() => {
            (0, u.yw)(E.rMx.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: d.x2.MENTION_RAID_REMOVE_RESTRICTION,
              decision_id: e,
            }),
              r.tn.post({ url: E.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(n) }),
              t();
          });
      }
      function g(n) {
        a.Z.dispatch({
          type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
          guildId: n,
        });
      }
    },
    251794: function (n, e, t) {
      t.d(e, {
        q: function () {
          return i;
        },
        z: function () {
          return u;
        },
      });
      var r = t(735250);
      t(470079);
      var a = t(481060);
      function u(n, e, u) {
        (0, a.openModalLazy)(async () => {
          let { default: a } = await t.e("72920").then(t.bind(t, 109730));
          return (t) =>
            (0, r.jsx)(a, {
              guildId: n,
              userId: e,
              anaylticsLocations: u,
              ...t,
            });
        });
      }
      function i(n, e, u) {
        (0, a.openModalLazy)(async () => {
          let { default: a } = await t.e("76233").then(t.bind(t, 171494));
          return (t) =>
            (0, r.jsx)(a, {
              guildId: n,
              userId: e,
              anaylticsLocations: u,
              ...t,
            });
        });
      }
    },
    910693: function (n, e, t) {
      t.d(e, {
        BG: function () {
          return f;
        },
        aY: function () {
          return u;
        },
        dW: function () {
          return A;
        },
        gm: function () {
          return M;
        },
        h1: function () {
          return O;
        },
        jQ: function () {
          return i;
        },
        sE: function () {
          return I;
        },
      });
      var r,
        a,
        u,
        i,
        l = t(470079),
        o = t(100527),
        c = t(367907),
        d = t(314897),
        s = t(626135),
        _ = t(981631);
      function E(n, e, t) {
        var r;
        let a = {
          ...e,
          ...(0, c.hH)(null !== (r = e.guild_id) && void 0 !== r ? r : t),
        };
        s.default.track(n, a);
      }
      function M(n) {
        return l.useCallback(
          (e) => {
            !(function (n) {
              let e = { guild_id: n, location: o.Z.MEMBER_SAFETY_PAGE };
              E(_.rMx.MOD_DASH_SEARCH_MEMBERS, e);
            })(n);
          },
          [n],
        );
      }
      function f(n) {
        return l.useCallback(
          (e) => {
            !(function (n, e) {
              let t = {
                selected_role_count: e.size,
                guild_id: n,
                location: o.Z.MEMBER_SAFETY_PAGE,
              };
              E(_.rMx.MOD_DASH_FILTER_ROLES, t);
            })(n, e);
          },
          [n],
        );
      }
      ((r = u || (u = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (r.COMMUNICATION_DISABLED = "communication_disabled"),
        (r.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (r.USERNAME_QUARANTINED = "username_quarantined");
      function A(n) {
        return l.useCallback(
          (e) => {
            !(function (n, e) {
              let t = {
                flag_type: e,
                guild_id: n,
                location: o.Z.MEMBER_SAFETY_PAGE,
              };
              E(_.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t);
            })(n, e);
          },
          [n],
        );
      }
      function I(n, e) {
        let { location: t, targetUserId: r, targets: a, locations: u } = e;
        return l.useCallback(
          (e) => {
            let i = {
              action_type: e,
              mod_user_id: d.default.getId(),
              guild_id: n,
              location: t,
              locations: u,
              target_user_id: null != r ? r : void 0,
              targets: null != a ? a : void 0,
            };
            E(_.rMx.MODERATION_ACTION, i);
          },
          [n, t, r, a, u],
        );
      }
      function O(n, e) {
        E(_.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: n, location: e });
      }
      ((a = i || (i = {})).BAN = "ban"),
        (a.KICK = "kick"),
        (a.MUTE = "mute"),
        (a.TIMEOUT = "timeout"),
        (a.ADD_ROLE = "add_role"),
        (a.REMOVE_ROLE = "remove_role"),
        (a.COPY_ID = "copy_id"),
        (a.CHANGE_NICKNAME = "change_nickname");
    },
    833737: function (n, e, t) {
      t.r(e);
      var r = t(735250),
        a = t(470079),
        u = t(442837),
        i = t(481060),
        l = t(239091),
        o = t(883385),
        c = t(108843),
        d = t(2052),
        s = t(100527),
        _ = t(906732),
        E = t(299206),
        M = t(976192),
        f = t(910693),
        A = t(271383),
        I = t(979651),
        O = t(933409),
        N = t(389052),
        T = t(88966),
        L = t(712301),
        U = t(567711),
        C = t(358386),
        S = t(725119),
        g = t(931617),
        D = t(981631),
        p = t(689938);
      e.default = (0, c.Z)(
        (0, o.Z)(
          function (n) {
            var e;
            let {
                user: t,
                guildId: o,
                channelId: c,
                context: D,
                onSelect: y,
                moderationAlertId: R,
                analyticsLocation: m,
                analyticsLocations: Z,
                onCloseContextMenu: b,
                showTransferOwnershipItem: x,
              } = n,
              { analyticsLocations: j } = (0, _.ZP)(s.Z.CONTEXT_MENU),
              v = (0, d.O)(),
              h =
                null !== (e = null == Z ? void 0 : Z[0]) && void 0 !== e
                  ? e
                  : j[0],
              G = (0, f.sE)(o, { location: h, targetUserId: t.id }),
              P = (0, u.e7)(
                [I.Z],
                () => {
                  var n;
                  return null !== (n = I.Z.getUserVoiceChannelId(o, t.id)) &&
                    void 0 !== n
                    ? n
                    : void 0;
                },
                [o, t.id],
              ),
              w = a.useCallback(() => {
                G(f.jQ.COPY_ID);
              }, [G]),
              k = (0, u.e7)([A.ZP], () => A.ZP.isMember(o, t.id), [o, t.id]),
              F = (0, S.Z)({
                userId: t.id,
                guildId: o,
                sourceAnalyticsLocations: Z,
              }),
              Y = (0, T.Z)(t.id, D),
              B = (0, M.Z)({
                guildId: o,
                userId: t.id,
                analyticsLocation: null != m ? m : v.location,
                analyticsLocations: [h],
                context: D,
              }),
              K = (0, N.Z)({ user: t, location: h }),
              H = (0, O.Z)(t, o, null != c ? c : P, h),
              V = (0, U.Z)(c, R),
              W = (0, C.Z)(t, o),
              q = (0, g.Z)(t.id, o, !1, h),
              z = (0, E.Z)({
                id: t.id,
                label: p.Z.Messages.COPY_ID_USER,
                onSuccess: w,
              }),
              X = (0, L.Z)(t, o),
              Q = !!(null == t ? void 0 : t.isNonUserBot());
            return (0, r.jsxs)(i.Menu, {
              navId: "user-context",
              onClose: () => {
                (0, l.Zy)(), null == b || b();
              },
              "aria-label": p.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: y,
              children: [
                !Q &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsxs)(i.MenuGroup, { children: [F, Y] }),
                      (0, r.jsxs)(i.MenuGroup, { children: [B, K] }),
                      k &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(i.MenuGroup, { children: H }),
                            (0, r.jsxs)(i.MenuGroup, { children: [q, X] }),
                          ],
                        }),
                      null != R ? V : null,
                      x && null != W
                        ? (0, r.jsx)(i.MenuGroup, { children: W })
                        : null,
                    ],
                  }),
                (0, r.jsx)(i.MenuGroup, { children: z }),
              ],
            });
          },
          { object: D.qAy.CONTEXT_MENU },
        ),
        [s.Z.CONTEXT_MENU, s.Z.GUILD_MODERATION_USER_MENU],
      );
    },
    567711: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return M;
        },
      });
      var r = t(735250);
      t(470079);
      var a = t(442837),
        u = t(481060),
        i = t(313889),
        l = t(825829),
        o = t(36459),
        c = t(592125),
        d = t(375954),
        s = t(496675),
        _ = t(981631),
        E = t(689938);
      function M(n, e) {
        let t = (0, a.e7)(
            [s.Z],
            () =>
              null != n &&
              s.Z.canWithPartialContext(_.Plq.MANAGE_MESSAGES, {
                channelId: n,
              }),
            [n],
          ),
          M = (0, a.e7)([c.Z], () => c.Z.getChannel(n), [n]),
          f = (0, a.e7)([d.Z], () =>
            null != n && null != e ? d.Z.getMessage(n, e) : null,
          ),
          A = (0, l.NK)(null != f ? f : null);
        if (null == M || null == f) return null;
        let I =
            null != A && A.actions.hasOwnProperty(i.d.SET_COMPLETED)
              ? i.d.UNSET_COMPLETED
              : i.d.SET_COMPLETED,
          O =
            I === i.d.SET_COMPLETED
              ? E.Z.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED
              : E.Z.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
        return t && null != e
          ? (0, r.jsx)(
              u.MenuItem,
              {
                id: "mark-automod-alert-completed",
                label: O,
                action: () => {
                  (0, o.Xx)(e, M, I);
                },
              },
              "mark-automod-alert-completed",
            )
          : null;
      }
    },
    358386: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
      });
      var r = t(735250);
      t(470079);
      var a = t(442837),
        u = t(481060),
        i = t(430824),
        l = t(594174),
        o = t(689938);
      function c(n, e) {
        let c = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
          d = (0, a.e7)([i.Z], () => i.Z.getGuild(e));
        return null == d ||
          null == c ||
          n.id === d.ownerId ||
          n.bot ||
          !d.isOwnerWithRequiredMfaLevel(c)
          ? null
          : (0, r.jsx)(u.MenuItem, {
              id: "transfer-ownership",
              color: "danger",
              label: o.Z.Messages.TRANSFER_OWNERSHIP,
              action: () =>
                (0, u.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("8653")
                    .then(t.bind(t, 928090));
                  return (t) =>
                    (0, r.jsx)(e, { ...t, guild: d, fromUser: c, toUser: n });
                }),
            });
      }
    },
    401653: function (n, e, t) {
      var r, a;
      t.d(e, {
        j: function () {
          return r;
        },
      }),
        ((a = r || (r = {}))[(a.BLOCK_MESSAGE = 1)] = "BLOCK_MESSAGE"),
        (a[(a.FLAG_TO_CHANNEL = 2)] = "FLAG_TO_CHANNEL"),
        (a[(a.USER_COMMUNICATION_DISABLED = 3)] =
          "USER_COMMUNICATION_DISABLED"),
        (a[(a.QUARANTINE_USER = 4)] = "QUARANTINE_USER");
    },
    95930: function (n, e, t) {
      var r, a;
      t.d(e, {
        q: function () {
          return r;
        },
      }),
        ((a = r || (r = {}))[(a.UNKNOWN = 0)] = "UNKNOWN"),
        (a[(a.MESSAGE_SEND = 1)] = "MESSAGE_SEND"),
        (a[(a.GUILD_MEMBER_JOIN_OR_UPDATE = 2)] =
          "GUILD_MEMBER_JOIN_OR_UPDATE");
    },
    41381: function (n, e, t) {
      var r, a;
      t.d(e, {
        f: function () {
          return r;
        },
      }),
        ((a = r || (r = {}))[(a.KEYWORD = 1)] = "KEYWORD"),
        (a[(a.SPAM_LINK = 2)] = "SPAM_LINK"),
        (a[(a.ML_SPAM = 3)] = "ML_SPAM"),
        (a[(a.DEFAULT_KEYWORD_LIST = 4)] = "DEFAULT_KEYWORD_LIST"),
        (a[(a.MENTION_SPAM = 5)] = "MENTION_SPAM"),
        (a[(a.USER_PROFILE = 6)] = "USER_PROFILE"),
        (a[(a.SERVER_POLICY = 7)] = "SERVER_POLICY");
    },
    745974: function (n, e, t) {
      n.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    587525: function (n, e, t) {
      n.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=b8f2070aaf9563378a7e.js.map
