"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6632"],
  {
    883385: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return i;
        },
      });
      var r = t(735250);
      t(470079);
      var u = t(410575);
      function i(n, e) {
        return function (t) {
          return (0, r.jsx)(u.Z, {
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
          return i;
        },
      });
      var r = t(735250);
      t(470079);
      var u = t(906732);
      function i(n, e) {
        return function (t) {
          let { analyticsLocations: i } = (0, u.ZP)(e);
          return (0, r.jsx)(u.Gt, {
            value: i,
            children: (0, r.jsx)(n, { ...t }),
          });
        };
      }
    },
    273504: function (n, e, t) {
      t.d(e, {
        I3: function () {
          return d;
        },
        Ic: function () {
          return T;
        },
        Lg: function () {
          return I;
        },
        OU: function () {
          return A;
        },
        RH: function () {
          return l;
        },
        Ux: function () {
          return u;
        },
        VW: function () {
          return _;
        },
        Vg: function () {
          return O;
        },
        Vk: function () {
          return E;
        },
        _6: function () {
          return L;
        },
        aj: function () {
          return f;
        },
        dc: function () {
          return N;
        },
        fX: function () {
          return o.f;
        },
        hu: function () {
          return s;
        },
        jj: function () {
          return i.j;
        },
        n4: function () {
          return c;
        },
        q4: function () {
          return a.q;
        },
        uE: function () {
          return M;
        },
      });
      var r,
        u,
        i = t(401653),
        a = t(95930),
        o = t(41381);
      ((r = u || (u = {}))[(r.PROFANITY = 1)] = "PROFANITY"),
        (r[(r.SEXUAL_CONTENT = 2)] = "SEXUAL_CONTENT"),
        (r[(r.SLURS = 3)] = "SLURS"),
        o.f.USER_PROFILE,
        o.f.SERVER_POLICY,
        o.f.MENTION_SPAM,
        o.f.ML_SPAM,
        o.f.DEFAULT_KEYWORD_LIST,
        o.f.KEYWORD;
      let l = 1e3,
        c = 100,
        d = 1e3,
        _ = 10,
        s = 60,
        E = 1,
        M = 1,
        f = 260,
        A = 100,
        O = 1,
        I = 50,
        T = 20,
        L = 150,
        N = "automod-profile-quarantine-alert";
    },
    787824: function (n, e, t) {
      t.d(e, {
        C: function () {
          return function n(e) {
            return null == e
              ? e
              : Object.keys(e).reduce((t, u) => {
                  let i = (0, r.camelCase)(u);
                  return (
                    "object" != typeof e[u] || Array.isArray(e[u])
                      ? (t[i] = e[u])
                      : (t[i] = n(e[u])),
                    t
                  );
                }, {});
          };
        },
        X: function () {
          return function n(e) {
            return null == e
              ? e
              : Object.keys(e).reduce((t, u) => {
                  let i = (0, r.snakeCase)(u);
                  return (
                    "object" != typeof e[u] || Array.isArray(e[u])
                      ? (t[i] = e[u])
                      : (t[i] = n(e[u])),
                    (t[i] = e[u]),
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
          return l;
        },
        kW: function () {
          return c;
        },
        km: function () {
          return o;
        },
      });
      var r = t(735250);
      t(470079);
      var u = t(481060),
        i = t(273504),
        a = t(689938);
      function o(n) {
        return {
          [i.jj.BLOCK_MESSAGE]: (n, e) =>
            new Promise((n) => {
              (0, u.openModalLazy)(async () => {
                let { default: u } = await t.e("94005").then(t.bind(t, 144462));
                return (t) => {
                  var i;
                  return (0, r.jsx)(u, {
                    initialCustomMessage:
                      null !== (i = e.metadata.customMessage) && void 0 !== i
                        ? i
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
          [i.jj.FLAG_TO_CHANNEL]: (e, a) =>
            new Promise((o) => {
              (0, u.openModalLazy)(async () => {
                let { default: u } = await t.e("74543").then(t.bind(t, 643611)),
                  l = e.actions.find((n) => n.type === i.jj.FLAG_TO_CHANNEL);
                return (t) =>
                  (0, r.jsx)(u, {
                    action: a,
                    isEdit: null != l,
                    triggerType: e.triggerType,
                    guildId: n,
                    onEditChannel: (n) => {
                      (a.metadata.channelId = n),
                        e.exemptChannels.add(n),
                        o(a),
                        t.onClose();
                    },
                    ...t,
                    onClose: () => (o(null), t.onClose()),
                  });
              });
            }),
          [i.jj.USER_COMMUNICATION_DISABLED]: (n, e) =>
            new Promise((a) => {
              (0, u.openModalLazy)(async () => {
                let { default: u } = await t.e("78273").then(t.bind(t, 41767)),
                  o = n.actions.find(
                    (n) => n.type === i.jj.USER_COMMUNICATION_DISABLED,
                  );
                return (t) =>
                  (0, r.jsx)(u, {
                    action: e,
                    isEdit: null != o,
                    triggerType: n.triggerType,
                    onUpdateDuration: (n) => {
                      null != n && (e.metadata.durationSeconds = n),
                        a(e),
                        t.onClose();
                    },
                    ...t,
                    onClose: () => (a(null), t.onClose()),
                  });
              });
            }),
        };
      }
      function l(n, e, i, a) {
        (0, u.openModalLazy)(async () => {
          let { default: u } = await t.e("37483").then(t.bind(t, 241046));
          return (t) =>
            (0, r.jsx)(u, {
              ...t,
              automodDecision: {
                messageId: n,
                messageContent: e,
                decisionId: i,
                channel: a,
              },
            });
        });
      }
      function c(n, e) {
        (0, u.openModalLazy)(async () => {
          let { default: u } = await t.e("28382").then(t.bind(t, 537623));
          return (t) => (0, r.jsx)(u, { ...t, messageId: n, guildId: e });
        });
      }
      function d(n) {
        (0, u.openModal)((e) =>
          (0, r.jsx)(u.ConfirmModal, {
            header: a.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
            confirmText: a.Z.Messages.CONFIRM,
            onConfirm: n,
            cancelText: a.Z.Messages.CANCEL,
            ...e,
            children: (0, r.jsx)(u.Text, {
              variant: "text-md/normal",
              children:
                a.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY,
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
          return T;
        },
        Je: function () {
          return L;
        },
        T9: function () {
          return p;
        },
        UE: function () {
          return S;
        },
        Xx: function () {
          return D;
        },
        mm: function () {
          return N;
        },
        qY: function () {
          return I;
        },
      }),
        t(47120);
      var r = t(544891),
        u = t(570140),
        i = t(367907),
        a = t(430824),
        o = t(496675),
        l = t(823379),
        c = t(709054),
        d = t(177862),
        _ = t(787824),
        s = t(226192),
        E = t(981631);
      function M(n) {
        return { type: n.type, metadata: (0, _.X)(n.metadata) };
      }
      function f(n) {
        var e, t;
        let r = (0, _.X)(n.triggerMetadata);
        return (
          null != r && delete r.keywordLists,
          {
            id: n.id,
            name: n.name,
            guild_id: n.guildId,
            event_type: n.eventType,
            trigger_type: n.triggerType,
            trigger_metadata: r,
            actions: n.actions.filter(l.lm).map(M),
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
        return { type: n.type, metadata: (0, _.C)(n.metadata) };
      }
      function O(n) {
        var e, t, r;
        let u = {
          id:
            null !== (e = n.id) && void 0 !== e
              ? e
              : c.default.fromTimestamp(Date.now()),
          name: n.name,
          guildId: n.guild_id,
          eventType: n.event_type,
          triggerType: n.trigger_type,
          triggerMetadata: (0, _.C)(n.trigger_metadata),
          actions: n.actions.filter(l.lm).map(A),
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
          null != u.triggerMetadata && delete u.triggerMetadata.keywordLists, u
        );
      }
      async function I(n) {
        let e = f(n),
          t = await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_VALIDATE_RULE(n.guildId),
            body: e,
          });
        return (0, _.C)(t.body);
      }
      async function T(n) {
        let e = f(n);
        return (
          delete e.id,
          O(
            (
              await r.tn.post({
                url: E.ANM.GUILD_AUTOMOD_RULES(n.guildId),
                body: e,
              })
            ).body,
          )
        );
      }
      async function L(n) {
        let e = f(n);
        return O(
          (
            await r.tn.patch({
              url: E.ANM.GUILD_AUTOMOD_RULE(n.guildId, n.id),
              body: e,
            })
          ).body,
        );
      }
      async function N(n, e) {
        return await r.tn.del({ url: E.ANM.GUILD_AUTOMOD_RULE(e, n) }), !0;
      }
      async function U(n) {
        let e = await r.tn.get({ url: E.ANM.GUILD_AUTOMOD_RULES(n) });
        return Array.isArray(e.body) ? e.body.map(O) : [];
      }
      async function D(n, e, t) {
        if (!!o.Z.can(E.Plq.MANAGE_MESSAGES, e))
          await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_ALERT_ACTION(e.guild_id),
            body: { message_id: n, channel_id: e.id, alert_action_type: t },
          });
      }
      function S(n, e, t) {
        let u = a.Z.getGuild(n);
        if (null != u && !!o.Z.can(E.Plq.MANAGE_GUILD, u))
          (0, s.UV)(() => {
            (0, i.yw)(E.rMx.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: d.x2.MENTION_RAID_REMOVE_RESTRICTION,
              decision_id: e,
            }),
              r.tn.post({ url: E.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(n) }),
              t();
          });
      }
      function p(n) {
        u.Z.dispatch({
          type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
          guildId: n,
        });
      }
    },
    251794: function (n, e, t) {
      t.d(e, {
        q: function () {
          return a;
        },
        z: function () {
          return i;
        },
      });
      var r = t(735250);
      t(470079);
      var u = t(481060);
      function i(n, e, i) {
        (0, u.openModalLazy)(async () => {
          let { default: u } = await t.e("72920").then(t.bind(t, 109730));
          return (t) =>
            (0, r.jsx)(u, {
              guildId: n,
              userId: e,
              anaylticsLocations: i,
              ...t,
            });
        });
      }
      function a(n, e, i) {
        (0, u.openModalLazy)(async () => {
          let { default: u } = await t.e("76233").then(t.bind(t, 171494));
          return (t) =>
            (0, r.jsx)(u, {
              guildId: n,
              userId: e,
              anaylticsLocations: i,
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
          return i;
        },
        dW: function () {
          return A;
        },
        gm: function () {
          return M;
        },
        h1: function () {
          return I;
        },
        jQ: function () {
          return a;
        },
        sE: function () {
          return O;
        },
      });
      var r,
        u,
        i,
        a,
        o = t(470079),
        l = t(100527),
        c = t(367907),
        d = t(314897),
        _ = t(626135),
        s = t(981631);
      function E(n, e, t) {
        var r;
        let u = {
          ...e,
          ...(0, c.hH)(null !== (r = e.guild_id) && void 0 !== r ? r : t),
        };
        _.default.track(n, u);
      }
      function M(n) {
        return o.useCallback(
          (e) => {
            !(function (n) {
              let e = { guild_id: n, location: l.Z.MEMBER_SAFETY_PAGE };
              E(s.rMx.MOD_DASH_SEARCH_MEMBERS, e);
            })(n);
          },
          [n],
        );
      }
      function f(n) {
        return o.useCallback(
          (e) => {
            !(function (n, e) {
              let t = {
                selected_role_count: e.size,
                guild_id: n,
                location: l.Z.MEMBER_SAFETY_PAGE,
              };
              E(s.rMx.MOD_DASH_FILTER_ROLES, t);
            })(n, e);
          },
          [n],
        );
      }
      ((r = i || (i = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (r.COMMUNICATION_DISABLED = "communication_disabled"),
        (r.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (r.USERNAME_QUARANTINED = "username_quarantined");
      function A(n) {
        return o.useCallback(
          (e) => {
            !(function (n, e) {
              let t = {
                flag_type: e,
                guild_id: n,
                location: l.Z.MEMBER_SAFETY_PAGE,
              };
              E(s.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t);
            })(n, e);
          },
          [n],
        );
      }
      function O(n, e) {
        let { location: t, targetUserId: r, targets: u, locations: i } = e;
        return o.useCallback(
          (e) => {
            let a = {
              action_type: e,
              mod_user_id: d.default.getId(),
              guild_id: n,
              location: t,
              locations: i,
              target_user_id: null != r ? r : void 0,
              targets: null != u ? u : void 0,
            };
            E(s.rMx.MODERATION_ACTION, a);
          },
          [n, t, r, u, i],
        );
      }
      function I(n, e) {
        E(s.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: n, location: e });
      }
      ((u = a || (a = {})).BAN = "ban"),
        (u.KICK = "kick"),
        (u.MUTE = "mute"),
        (u.TIMEOUT = "timeout"),
        (u.ADD_ROLE = "add_role"),
        (u.REMOVE_ROLE = "remove_role"),
        (u.COPY_ID = "copy_id"),
        (u.CHANGE_NICKNAME = "change_nickname");
    },
    833737: function (n, e, t) {
      t.r(e);
      var r = t(735250),
        u = t(470079),
        i = t(442837),
        a = t(481060),
        o = t(239091),
        l = t(883385),
        c = t(108843),
        d = t(2052),
        _ = t(100527),
        s = t(906732),
        E = t(299206),
        M = t(976192),
        f = t(910693),
        A = t(271383),
        O = t(979651),
        I = t(933409),
        T = t(389052),
        L = t(88966),
        N = t(712301),
        U = t(567711),
        D = t(358386),
        S = t(725119),
        p = t(931617),
        C = t(981631),
        g = t(689938);
      e.default = (0, c.Z)(
        (0, l.Z)(
          function (n) {
            var e;
            let {
                user: t,
                guildId: l,
                channelId: c,
                context: C,
                onSelect: y,
                moderationAlertId: R,
                analyticsLocation: m,
                analyticsLocations: b,
                onCloseContextMenu: x,
                showTransferOwnershipItem: j,
              } = n,
              { analyticsLocations: v } = (0, s.ZP)(_.Z.CONTEXT_MENU),
              Z = (0, d.O)(),
              h =
                null !== (e = null == b ? void 0 : b[0]) && void 0 !== e
                  ? e
                  : v[0],
              G = (0, f.sE)(l, { location: h, targetUserId: t.id }),
              P = (0, i.e7)(
                [O.Z],
                () => {
                  var n;
                  return null !== (n = O.Z.getUserVoiceChannelId(l, t.id)) &&
                    void 0 !== n
                    ? n
                    : void 0;
                },
                [l, t.id],
              ),
              w = u.useCallback(() => {
                G(f.jQ.COPY_ID);
              }, [G]),
              k = (0, i.e7)([A.ZP], () => A.ZP.isMember(l, t.id), [l, t.id]),
              F = (0, S.Z)({
                userId: t.id,
                guildId: l,
                sourceAnalyticsLocations: b,
              }),
              Y = (0, L.Z)(t.id, C),
              B = (0, M.Z)({
                guildId: l,
                userId: t.id,
                analyticsLocation: null != m ? m : Z.location,
                analyticsLocations: [h],
                context: C,
              }),
              K = (0, T.Z)({ user: t, location: h }),
              V = (0, I.Z)(t, l, null != c ? c : P, h),
              W = (0, U.Z)(c, R),
              H = (0, D.Z)(t, l),
              q = (0, p.Z)(t.id, l, !1, h),
              X = (0, E.Z)({
                id: t.id,
                label: g.Z.Messages.COPY_ID_USER,
                onSuccess: w,
              }),
              z = (0, N.Z)(t, l),
              Q = !!(null == t ? void 0 : t.isNonUserBot());
            return (0, r.jsxs)(a.Menu, {
              navId: "user-context",
              onClose: () => {
                (0, o.Zy)(), null == x || x();
              },
              "aria-label": g.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: y,
              children: [
                !Q &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsxs)(a.MenuGroup, { children: [F, Y] }),
                      (0, r.jsxs)(a.MenuGroup, { children: [B, K] }),
                      k &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(a.MenuGroup, { children: V }),
                            (0, r.jsxs)(a.MenuGroup, { children: [q, z] }),
                          ],
                        }),
                      null != R ? W : null,
                      j && null != H
                        ? (0, r.jsx)(a.MenuGroup, { children: H })
                        : null,
                    ],
                  }),
                (0, r.jsx)(a.MenuGroup, { children: X }),
              ],
            });
          },
          { object: C.qAy.CONTEXT_MENU },
        ),
        [_.Z.CONTEXT_MENU, _.Z.GUILD_MODERATION_USER_MENU],
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
      var u = t(442837),
        i = t(481060),
        a = t(313889),
        o = t(825829),
        l = t(36459),
        c = t(592125),
        d = t(375954),
        _ = t(496675),
        s = t(981631),
        E = t(689938);
      function M(n, e) {
        let t = (0, u.e7)(
            [_.Z],
            () =>
              null != n &&
              _.Z.canWithPartialContext(s.Plq.MANAGE_MESSAGES, {
                channelId: n,
              }),
            [n],
          ),
          M = (0, u.e7)([c.Z], () => c.Z.getChannel(n), [n]),
          f = (0, u.e7)([d.Z], () =>
            null != n && null != e ? d.Z.getMessage(n, e) : null,
          ),
          A = (0, o.NK)(null != f ? f : null);
        if (null == M || null == f) return null;
        let O =
            null != A && A.actions.hasOwnProperty(a.d.SET_COMPLETED)
              ? a.d.UNSET_COMPLETED
              : a.d.SET_COMPLETED,
          I =
            O === a.d.SET_COMPLETED
              ? E.Z.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED
              : E.Z.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
        return t && null != e
          ? (0, r.jsx)(
              i.MenuItem,
              {
                id: "mark-automod-alert-completed",
                label: I,
                action: () => {
                  (0, l.Xx)(e, M, O);
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
      var u = t(442837),
        i = t(481060),
        a = t(430824),
        o = t(594174),
        l = t(689938);
      function c(n, e) {
        let c = (0, u.e7)([o.default], () => o.default.getCurrentUser()),
          d = (0, u.e7)([a.Z], () => a.Z.getGuild(e));
        return null == d ||
          null == c ||
          n.id === d.ownerId ||
          n.bot ||
          !d.isOwnerWithRequiredMfaLevel(c)
          ? null
          : (0, r.jsx)(i.MenuItem, {
              id: "transfer-ownership",
              color: "danger",
              label: l.Z.Messages.TRANSFER_OWNERSHIP,
              action: () =>
                (0, i.openModalLazy)(async () => {
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
      var r, u;
      t.d(e, {
        j: function () {
          return r;
        },
      }),
        ((u = r || (r = {}))[(u.BLOCK_MESSAGE = 1)] = "BLOCK_MESSAGE"),
        (u[(u.FLAG_TO_CHANNEL = 2)] = "FLAG_TO_CHANNEL"),
        (u[(u.USER_COMMUNICATION_DISABLED = 3)] =
          "USER_COMMUNICATION_DISABLED"),
        (u[(u.QUARANTINE_USER = 4)] = "QUARANTINE_USER");
    },
    95930: function (n, e, t) {
      var r, u;
      t.d(e, {
        q: function () {
          return r;
        },
      }),
        ((u = r || (r = {}))[(u.UNKNOWN = 0)] = "UNKNOWN"),
        (u[(u.MESSAGE_SEND = 1)] = "MESSAGE_SEND"),
        (u[(u.GUILD_MEMBER_JOIN_OR_UPDATE = 2)] =
          "GUILD_MEMBER_JOIN_OR_UPDATE");
    },
    41381: function (n, e, t) {
      var r, u;
      t.d(e, {
        f: function () {
          return r;
        },
      }),
        ((u = r || (r = {}))[(u.KEYWORD = 1)] = "KEYWORD"),
        (u[(u.SPAM_LINK = 2)] = "SPAM_LINK"),
        (u[(u.ML_SPAM = 3)] = "ML_SPAM"),
        (u[(u.DEFAULT_KEYWORD_LIST = 4)] = "DEFAULT_KEYWORD_LIST"),
        (u[(u.MENTION_SPAM = 5)] = "MENTION_SPAM"),
        (u[(u.USER_PROFILE = 6)] = "USER_PROFILE"),
        (u[(u.SERVER_POLICY = 7)] = "SERVER_POLICY");
    },
    936124: function (n, e, t) {
      n.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    522425: function (n, e, t) {
      n.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=f686d4195a666a1e250a.js.map
