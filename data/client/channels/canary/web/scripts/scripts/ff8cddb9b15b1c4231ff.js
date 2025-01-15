"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12837"],
  {
    883385: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = e(200651);
      e(192379);
      var i = e(410575);
      function u(n, t) {
        return function (e) {
          return (0, r.jsx)(i.Z, {
            page: t.page,
            section: t.section,
            object: t.object,
            objectType: t.objectType,
            children: (0, r.jsx)(n, { ...e }),
          });
        };
      }
    },
    108843: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = e(200651);
      e(192379);
      var i = e(906732);
      function u(n, t) {
        return function (e) {
          let { analyticsLocations: u } = (0, i.ZP)(t);
          return (0, r.jsx)(i.Gt, {
            value: u,
            children: (0, r.jsx)(n, { ...e }),
          });
        };
      }
    },
    976192: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return N;
        },
      });
      var r = e(200651),
        i = e(192379),
        u = e(442837),
        a = e(481060),
        l = e(616780),
        o = e(40851),
        c = e(300284),
        d = e(484459),
        s = e(314897),
        _ = e(271383),
        E = e(430824),
        f = e(496675),
        M = e(594174),
        A = e(981631),
        I = e(388032),
        O = e(241287);
      function N(n) {
        let {
            guildId: t,
            userId: N,
            analyticsLocation: T,
            analyticsLocations: L,
            context: g,
            icon: p,
          } = n,
          S = E.Z.getGuild(t),
          U = s.default.getId(),
          y = (0, u.e7)([M.default], () => M.default.getUser(N)),
          C = (0, u.e7)([_.ZP], () => _.ZP.isGuestOrLurker(t, N), [t, N]);
        (0, u.e7)([f.Z], () => f.Z.getGuildVersion(t), [t]);
        let m = i.useMemo(() => ({ [t]: [N] }), [t, N]);
        (0, l.$)(m);
        let D = g === A.IlC.POPOUT,
          R = (0, c.Z)({ guild: S, analyticsLocation: T }),
          j = (0, o.Aq)();
        if (null == S || D) return null;
        let h =
            U === N &&
            (f.Z.can(A.Plq.CHANGE_NICKNAME, S) ||
              f.Z.can(A.Plq.MANAGE_NICKNAMES, S)),
          x = U === N,
          b = f.Z.canManageUser(A.Plq.MANAGE_NICKNAMES, N, S);
        if (!(h || b || x) || null == y || C) return null;
        let Z = S.hasFeature(A.oNc.HUB)
            ? I.intl.string(I.t["+MWrWl"])
            : I.intl.string(I.t["PKQB/P"]),
          v = x ? Z : I.intl.string(I.t.dilOFx);
        return (0, r.jsx)(a.MenuItem, {
          id: "change-nickname",
          label: (0, r.jsx)("div", {
            className: O.labelWrapper,
            children: (0, r.jsx)("span", { className: O.label, children: v }),
          }),
          icon: p,
          action: () => {
            x
              ? ((0, d.Z)(y.id, y.getAvatarURL(t, 80), { guildId: t }),
                R(),
                j.dispatch(A.CkL.POPOUT_CLOSE),
                (0, a.closeAllModals)())
              : (0, a.openModalLazy)(async () => {
                  let { default: n } = await e
                    .e("17712")
                    .then(e.bind(e, 620021));
                  return (e) =>
                    (0, r.jsx)(n, {
                      ...e,
                      guildId: t,
                      user: y,
                      analyticsSource: T,
                      analyticsLocations: L,
                    });
                });
          },
        });
      }
    },
    273504: function (n, t, e) {
      e.d(t, {
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
          return i;
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
          return M;
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
          return a.q;
        },
        uE: function () {
          return f;
        },
      });
      var r,
        i,
        u = e(401653),
        a = e(95930),
        l = e(41381);
      ((r = i || (i = {}))[(r.PROFANITY = 1)] = "PROFANITY"),
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
        f = 1,
        M = 260,
        A = 100,
        I = 1,
        O = 50,
        N = 20,
        T = 150,
        L = "automod-profile-quarantine-alert";
    },
    787824: function (n, t, e) {
      e.d(t, {
        C: function () {
          return function n(t) {
            return null == t
              ? t
              : Object.keys(t).reduce((e, i) => {
                  let u = (0, r.camelCase)(i);
                  return (
                    "object" != typeof t[i] || Array.isArray(t[i])
                      ? (e[u] = t[i])
                      : (e[u] = n(t[i])),
                    e
                  );
                }, {});
          };
        },
        X: function () {
          return function n(t) {
            return null == t
              ? t
              : Object.keys(t).reduce((e, i) => {
                  let u = (0, r.snakeCase)(i);
                  return (
                    "object" != typeof t[i] || Array.isArray(t[i])
                      ? (e[u] = t[i])
                      : (e[u] = n(t[i])),
                    (e[u] = t[i]),
                    e
                  );
                }, {});
          };
        },
      }),
        e(724458);
      var r = e(392711);
    },
    226192: function (n, t, e) {
      e.d(t, {
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
      var r = e(200651);
      e(192379);
      var i = e(481060),
        u = e(273504),
        a = e(388032);
      function l(n) {
        return {
          [u.jj.BLOCK_MESSAGE]: (n, t) =>
            new Promise((n) => {
              (0, i.openModalLazy)(async () => {
                let { default: i } = await e.e("94005").then(e.bind(e, 144462));
                return (e) => {
                  var u;
                  return (0, r.jsx)(i, {
                    initialCustomMessage:
                      null !== (u = t.metadata.customMessage) && void 0 !== u
                        ? u
                        : "",
                    onSubmit: (r) => {
                      (t.metadata.customMessage = r), n(t), e.onClose();
                    },
                    ...e,
                    onClose: () => (n(null), e.onClose()),
                  });
                };
              });
            }),
          [u.jj.FLAG_TO_CHANNEL]: (t, a) =>
            new Promise((l) => {
              (0, i.openModalLazy)(async () => {
                let { default: i } = await e.e("74543").then(e.bind(e, 643611)),
                  o = t.actions.find((n) => n.type === u.jj.FLAG_TO_CHANNEL);
                return (e) =>
                  (0, r.jsx)(i, {
                    action: a,
                    isEdit: null != o,
                    triggerType: t.triggerType,
                    guildId: n,
                    onEditChannel: (n) => {
                      (a.metadata.channelId = n),
                        t.exemptChannels.add(n),
                        l(a),
                        e.onClose();
                    },
                    ...e,
                    onClose: () => (l(null), e.onClose()),
                  });
              });
            }),
          [u.jj.USER_COMMUNICATION_DISABLED]: (n, t) =>
            new Promise((a) => {
              (0, i.openModalLazy)(async () => {
                let { default: i } = await e.e("78273").then(e.bind(e, 41767)),
                  l = n.actions.find(
                    (n) => n.type === u.jj.USER_COMMUNICATION_DISABLED,
                  );
                return (e) =>
                  (0, r.jsx)(i, {
                    action: t,
                    isEdit: null != l,
                    triggerType: n.triggerType,
                    onUpdateDuration: (n) => {
                      null != n && (t.metadata.durationSeconds = n),
                        a(t),
                        e.onClose();
                    },
                    ...e,
                    onClose: () => (a(null), e.onClose()),
                  });
              });
            }),
        };
      }
      function o(n, t, u, a) {
        (0, i.openModalLazy)(async () => {
          let { default: i } = await e.e("37483").then(e.bind(e, 241046));
          return (e) =>
            (0, r.jsx)(i, {
              ...e,
              automodDecision: {
                messageId: n,
                messageContent: t,
                decisionId: u,
                channel: a,
              },
            });
        });
      }
      function c(n, t) {
        (0, i.openModalLazy)(async () => {
          let { default: i } = await e.e("28382").then(e.bind(e, 537623));
          return (e) => (0, r.jsx)(i, { ...e, messageId: n, guildId: t });
        });
      }
      function d(n) {
        (0, i.openModal)((t) =>
          (0, r.jsx)(i.ConfirmModal, {
            header: a.intl.string(a.t.wLGrjI),
            confirmText: a.intl.string(a.t["cY+Ooa"]),
            onConfirm: n,
            cancelText: a.intl.string(a.t["ETE/oK"]),
            ...t,
            children: (0, r.jsx)(i.Text, {
              variant: "text-md/normal",
              children: a.intl.string(a.t.arYQ2d),
            }),
          }),
        );
      }
    },
    36459: function (n, t, e) {
      e.d(t, {
        $Y: function () {
          return g;
        },
        JK: function () {
          return N;
        },
        Je: function () {
          return T;
        },
        T9: function () {
          return U;
        },
        UE: function () {
          return S;
        },
        Xx: function () {
          return p;
        },
        mm: function () {
          return L;
        },
        qY: function () {
          return O;
        },
      }),
        e(47120);
      var r = e(544891),
        i = e(570140),
        u = e(367907),
        a = e(430824),
        l = e(496675),
        o = e(823379),
        c = e(709054),
        d = e(177862),
        s = e(787824),
        _ = e(226192),
        E = e(981631);
      function f(n) {
        return { type: n.type, metadata: (0, s.X)(n.metadata) };
      }
      function M(n) {
        var t, e;
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
            actions: n.actions.filter(o.lm).map(f),
            enabled: n.enabled,
            creator_id: n.creatorId,
            position: n.position,
            exempt_channels: Array.from(
              null !== (t = n.exemptChannels) && void 0 !== t ? t : [],
            ),
            exempt_roles: Array.from(
              null !== (e = n.exemptRoles) && void 0 !== e ? e : [],
            ),
          }
        );
      }
      function A(n) {
        return { type: n.type, metadata: (0, s.C)(n.metadata) };
      }
      function I(n) {
        var t, e, r;
        let i = {
          id:
            null !== (t = n.id) && void 0 !== t
              ? t
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
            null !== (e = n.exempt_channels) && void 0 !== e ? e : [],
          ),
          exemptRoles: new Set(
            null !== (r = n.exempt_roles) && void 0 !== r ? r : [],
          ),
        };
        return (
          null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i
        );
      }
      async function O(n) {
        let t = M(n),
          e = await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_VALIDATE_RULE(n.guildId),
            body: t,
            rejectWithError: !1,
          });
        return (0, s.C)(e.body);
      }
      async function N(n) {
        let t = M(n);
        return (
          delete t.id,
          I(
            (
              await r.tn.post({
                url: E.ANM.GUILD_AUTOMOD_RULES(n.guildId),
                body: t,
                rejectWithError: !1,
              })
            ).body,
          )
        );
      }
      async function T(n) {
        let t = M(n);
        return I(
          (
            await r.tn.patch({
              url: E.ANM.GUILD_AUTOMOD_RULE(n.guildId, n.id),
              body: t,
              rejectWithError: !1,
            })
          ).body,
        );
      }
      async function L(n, t) {
        return (
          await r.tn.del({
            url: E.ANM.GUILD_AUTOMOD_RULE(t, n),
            rejectWithError: !1,
          }),
          !0
        );
      }
      async function g(n) {
        let t = await r.tn.get({
          url: E.ANM.GUILD_AUTOMOD_RULES(n),
          rejectWithError: !1,
        });
        return Array.isArray(t.body) ? t.body.map(I) : [];
      }
      async function p(n, t, e) {
        if (!!l.Z.can(E.Plq.MANAGE_MESSAGES, t))
          await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: { message_id: n, channel_id: t.id, alert_action_type: e },
            rejectWithError: !1,
          });
      }
      function S(n, t, e) {
        let i = a.Z.getGuild(n);
        if (null != i && !!l.Z.can(E.Plq.MANAGE_GUILD, i))
          (0, _.UV)(() => {
            (0, u.yw)(E.rMx.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: d.x2.MENTION_RAID_REMOVE_RESTRICTION,
              decision_id: t,
            }),
              r.tn.post({
                url: E.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(n),
                rejectWithError: !0,
              }),
              e();
          });
      }
      function U(n) {
        i.Z.dispatch({
          type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
          guildId: n,
        });
      }
    },
    251794: function (n, t, e) {
      e.d(t, {
        q: function () {
          return a;
        },
        z: function () {
          return u;
        },
      });
      var r = e(200651);
      e(192379);
      var i = e(481060);
      function u(n) {
        let { guildId: t, userId: u, anaylticsLocations: a } = n;
        (0, i.openModalLazy)(async () => {
          let { default: n } = await e.e("72920").then(e.bind(e, 109730));
          return (e) =>
            (0, r.jsx)(n, {
              guildId: t,
              userId: u,
              anaylticsLocations: a,
              ...e,
            });
        });
      }
      function a(n) {
        let { guildId: t, userId: u, anaylticsLocations: a } = n;
        (0, i.openModalLazy)(async () => {
          let { default: n } = await e.e("76233").then(e.bind(e, 171494));
          return (e) =>
            (0, r.jsx)(n, {
              guildId: t,
              userId: u,
              anaylticsLocations: a,
              ...e,
            });
        });
      }
    },
    910693: function (n, t, e) {
      e.d(t, {
        BG: function () {
          return M;
        },
        aY: function () {
          return u;
        },
        dW: function () {
          return A;
        },
        gm: function () {
          return f;
        },
        h1: function () {
          return O;
        },
        jQ: function () {
          return a;
        },
        sE: function () {
          return I;
        },
      });
      var r,
        i,
        u,
        a,
        l = e(192379),
        o = e(100527),
        c = e(367907),
        d = e(314897),
        s = e(626135),
        _ = e(981631);
      function E(n, t, e) {
        var r;
        let i = {
          ...t,
          ...(0, c.hH)(null !== (r = t.guild_id) && void 0 !== r ? r : e),
        };
        s.default.track(n, i);
      }
      function f(n) {
        return l.useCallback(
          (t) => {
            !(function (n) {
              let t = { guild_id: n, location: o.Z.MEMBER_SAFETY_PAGE };
              E(_.rMx.MOD_DASH_SEARCH_MEMBERS, t);
            })(n);
          },
          [n],
        );
      }
      function M(n) {
        return l.useCallback(
          (t) => {
            !(function (n, t) {
              let e = {
                selected_role_count: t.size,
                guild_id: n,
                location: o.Z.MEMBER_SAFETY_PAGE,
              };
              E(_.rMx.MOD_DASH_FILTER_ROLES, e);
            })(n, t);
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
          (t) => {
            !(function (n, t) {
              let e = {
                flag_type: t,
                guild_id: n,
                location: o.Z.MEMBER_SAFETY_PAGE,
              };
              E(_.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, e);
            })(n, t);
          },
          [n],
        );
      }
      function I(n, t) {
        let { location: e, targetUserId: r, targets: i, locations: u } = t;
        return l.useCallback(
          (t) => {
            let a = {
              action_type: t,
              mod_user_id: d.default.getId(),
              guild_id: n,
              location: e,
              locations: u,
              target_user_id: null != r ? r : void 0,
              targets: null != i ? i : void 0,
            };
            E(_.rMx.MODERATION_ACTION, a);
          },
          [n, e, r, i, u],
        );
      }
      function O(n, t) {
        E(_.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: n, location: t });
      }
      ((i = a || (a = {})).BAN = "ban"),
        (i.KICK = "kick"),
        (i.MUTE = "mute"),
        (i.TIMEOUT = "timeout"),
        (i.ADD_ROLE = "add_role"),
        (i.REMOVE_ROLE = "remove_role"),
        (i.COPY_ID = "copy_id"),
        (i.CHANGE_NICKNAME = "change_nickname");
    },
    833737: function (n, t, e) {
      e.r(t);
      var r = e(200651),
        i = e(192379),
        u = e(442837),
        a = e(481060),
        l = e(239091),
        o = e(883385),
        c = e(108843),
        d = e(2052),
        s = e(100527),
        _ = e(906732),
        E = e(299206),
        f = e(976192),
        M = e(910693),
        A = e(271383),
        I = e(979651),
        O = e(933409),
        N = e(389052),
        T = e(158508),
        L = e(88966),
        g = e(712301),
        p = e(567711),
        S = e(358386),
        U = e(37258),
        y = e(931617),
        C = e(981631),
        m = e(388032);
      t.default = (0, c.Z)(
        (0, o.Z)(
          function (n) {
            var t;
            let {
                user: e,
                guildId: o,
                channelId: c,
                context: C,
                onSelect: D,
                moderationAlertId: R,
                analyticsLocation: j,
                analyticsLocations: h,
                onCloseContextMenu: x,
                showTransferOwnershipItem: b,
              } = n,
              { analyticsLocations: Z } = (0, _.ZP)(s.Z.CONTEXT_MENU),
              v = (0, d.O)(),
              P =
                null !== (t = null == h ? void 0 : h[0]) && void 0 !== t
                  ? t
                  : Z[0],
              G = (0, M.sE)(o, { location: P, targetUserId: e.id }),
              w = (0, u.e7)(
                [I.Z],
                () => {
                  var n;
                  return null !== (n = I.Z.getUserVoiceChannelId(o, e.id)) &&
                    void 0 !== n
                    ? n
                    : void 0;
                },
                [o, e.id],
              ),
              k = i.useCallback(() => {
                G(M.jQ.COPY_ID);
              }, [G]),
              W = (0, u.e7)([A.ZP], () => A.ZP.isMember(o, e.id), [o, e.id]),
              Y = (0, U.Z)({
                userId: e.id,
                guildId: o,
                sourceAnalyticsLocations: h,
              }),
              F = (0, L.Z)(e.id, C),
              K = (0, f.Z)({
                guildId: o,
                userId: e.id,
                analyticsLocation: null != j ? j : v.location,
                analyticsLocations: [P],
                context: C,
              }),
              B = (0, N.Z)({ user: e, guildId: o, location: P, channelId: c }),
              q = (0, T.Z)({ user: e, guildId: o, location: P, channelId: c }),
              V = (0, O.Z)(e, o, null != c ? c : w, P),
              H = (0, p.Z)(c, R),
              X = (0, S.Z)(e, o),
              z = (0, y.Z)(e.id, o, !1, P),
              Q = (0, E.Z)({
                id: e.id,
                label: m.intl.string(m.t["/AXYnJ"]),
                onSuccess: k,
              }),
              J = (0, g.Z)(e, o),
              $ = !!(null == e ? void 0 : e.isNonUserBot());
            return (0, r.jsxs)(a.Menu, {
              navId: "user-context",
              onClose: () => {
                (0, l.Zy)(), null == x || x();
              },
              "aria-label": m.intl.string(m.t.liqwPD),
              onSelect: D,
              children: [
                !$ &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsxs)(a.MenuGroup, { children: [Y, F] }),
                      (0, r.jsxs)(a.MenuGroup, { children: [K, q, B] }),
                      W &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(a.MenuGroup, { children: V }),
                            (0, r.jsxs)(a.MenuGroup, { children: [z, J] }),
                          ],
                        }),
                      null != R ? H : null,
                      b && null != X
                        ? (0, r.jsx)(a.MenuGroup, { children: X })
                        : null,
                    ],
                  }),
                (0, r.jsx)(a.MenuGroup, { children: Q }),
              ],
            });
          },
          { object: C.qAy.CONTEXT_MENU },
        ),
        [s.Z.CONTEXT_MENU, s.Z.GUILD_MODERATION_USER_MENU],
      );
    },
    567711: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return f;
        },
      });
      var r = e(200651);
      e(192379);
      var i = e(442837),
        u = e(481060),
        a = e(313889),
        l = e(825829),
        o = e(36459),
        c = e(592125),
        d = e(375954),
        s = e(496675),
        _ = e(981631),
        E = e(388032);
      function f(n, t) {
        let e = (0, i.e7)(
            [s.Z],
            () =>
              null != n &&
              s.Z.canWithPartialContext(_.Plq.MANAGE_MESSAGES, {
                channelId: n,
              }),
            [n],
          ),
          f = (0, i.e7)([c.Z], () => c.Z.getChannel(n), [n]),
          M = (0, i.e7)([d.Z], () =>
            null != n && null != t ? d.Z.getMessage(n, t) : null,
          ),
          A = (0, l.NK)(null != M ? M : null);
        if (null == f || null == M) return null;
        let I =
            null != A && A.actions.hasOwnProperty(a.d.SET_COMPLETED)
              ? a.d.UNSET_COMPLETED
              : a.d.SET_COMPLETED,
          O =
            I === a.d.SET_COMPLETED
              ? E.intl.string(E.t.VWNyUl)
              : E.intl.string(E.t.l9GqxM);
        return e && null != t
          ? (0, r.jsx)(
              u.MenuItem,
              {
                id: "mark-automod-alert-completed",
                label: O,
                action: () => {
                  (0, o.Xx)(t, f, I);
                },
              },
              "mark-automod-alert-completed",
            )
          : null;
      }
    },
    358386: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = e(200651);
      e(192379);
      var i = e(442837),
        u = e(481060),
        a = e(430824),
        l = e(594174),
        o = e(388032);
      function c(n, t) {
        let c = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
          d = (0, i.e7)([a.Z], () => a.Z.getGuild(t));
        return null == d ||
          null == c ||
          n.id === d.ownerId ||
          n.bot ||
          !d.isOwnerWithRequiredMfaLevel(c)
          ? null
          : (0, r.jsx)(u.MenuItem, {
              id: "transfer-ownership",
              color: "danger",
              label: o.intl.string(o.t.Z5s7PD),
              action: () =>
                (0, u.openModalLazy)(async () => {
                  let { default: t } = await e
                    .e("8653")
                    .then(e.bind(e, 928090));
                  return (e) =>
                    (0, r.jsx)(t, { ...e, guild: d, fromUser: c, toUser: n });
                }),
            });
      }
    },
    401653: function (n, t, e) {
      var r, i;
      e.d(t, {
        j: function () {
          return r;
        },
      }),
        ((i = r || (r = {}))[(i.BLOCK_MESSAGE = 1)] = "BLOCK_MESSAGE"),
        (i[(i.FLAG_TO_CHANNEL = 2)] = "FLAG_TO_CHANNEL"),
        (i[(i.USER_COMMUNICATION_DISABLED = 3)] =
          "USER_COMMUNICATION_DISABLED"),
        (i[(i.QUARANTINE_USER = 4)] = "QUARANTINE_USER");
    },
    95930: function (n, t, e) {
      var r, i;
      e.d(t, {
        q: function () {
          return r;
        },
      }),
        ((i = r || (r = {}))[(i.UNKNOWN = 0)] = "UNKNOWN"),
        (i[(i.MESSAGE_SEND = 1)] = "MESSAGE_SEND"),
        (i[(i.GUILD_MEMBER_JOIN_OR_UPDATE = 2)] =
          "GUILD_MEMBER_JOIN_OR_UPDATE");
    },
    41381: function (n, t, e) {
      var r, i;
      e.d(t, {
        f: function () {
          return r;
        },
      }),
        ((i = r || (r = {}))[(i.KEYWORD = 1)] = "KEYWORD"),
        (i[(i.SPAM_LINK = 2)] = "SPAM_LINK"),
        (i[(i.ML_SPAM = 3)] = "ML_SPAM"),
        (i[(i.DEFAULT_KEYWORD_LIST = 4)] = "DEFAULT_KEYWORD_LIST"),
        (i[(i.MENTION_SPAM = 5)] = "MENTION_SPAM"),
        (i[(i.USER_PROFILE = 6)] = "USER_PROFILE"),
        (i[(i.SERVER_POLICY = 7)] = "SERVER_POLICY");
    },
    241287: function (n, t, e) {
      n.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    5118: function (n, t, e) {
      n.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=ff8cddb9b15b1c4231ff.js.map
