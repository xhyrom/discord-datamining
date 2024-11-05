"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["45832"],
  {
    139387: function (n, t, e) {
      var i = e(570140),
        l = e(434404),
        r = e(821864),
        u = e(308063);
      t.Z = {
        init() {
          i.Z.dispatch({ type: "INTEGRATION_SETTINGS_INIT" });
        },
        setSection(n) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_SET_SECTION",
            section: n,
            sectionId: t,
          });
        },
        startEditingCommandPermissions(n) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
            commandId: n,
          });
        },
        stopEditingCommandPermissions(n) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
            commandId: n,
          });
        },
        startEditingIntegration(n) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
            integrationId: n,
          });
        },
        stopEditingIntegration() {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION",
          });
        },
        updateIntegration(n) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
            settings: n,
          });
        },
        startEditingWebhook(n) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
            webhookId: n,
          });
        },
        stopEditingWebhook() {
          i.Z.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK" });
        },
        updateWebhook(n) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
            settings: n,
          });
        },
        async saveApplicationPermissions(n, t, e) {
          try {
            i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await r.U3({
                applicationId: n,
                commandId: n,
                defaultEveryoneValue: !0,
                defaultEverywhereValue: !0,
                guildId: t,
                permissions: e,
              }),
              i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (n) {
            i.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: n.body,
            });
          }
        },
        async saveIntegration(n, t) {
          try {
            i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await l.Z.updateIntegration(
                n,
                t.id,
                t.expire_behavior,
                t.expire_grace_period,
                t.enable_emoticons,
              ),
              i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (n) {
            i.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: n.body,
            });
          }
        },
        async saveWebhook(n, t) {
          try {
            i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await u.Z.update(n, t.id, t),
              i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (n) {
            i.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: n.body,
            });
          }
        },
      };
    },
    308063: function (n, t, e) {
      var i = e(392711),
        l = e.n(i),
        r = e(544891),
        u = e(570140),
        a = e(981631);
      let o = ["Spidey Bot", "Captain Hook"];
      t.Z = {
        fetchForGuild(n) {
          u.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: n }),
            r.tn
              .get({ url: a.ANM.GUILD_WEBHOOKS(n), oldFormErrors: !0 })
              .then((t) => {
                let { body: e } = t;
                return u.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: n,
                  webhooks: e,
                });
              })
              .catch((t) => {
                let { body: e } = t;
                u.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: n,
                  error: e.message,
                });
              });
        },
        fetchForChannel(n, t) {
          u.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: n, channelId: t }),
            r.tn
              .get({ url: a.ANM.CHANNEL_WEBHOOKS(t), oldFormErrors: !0 })
              .then((e) => {
                let { body: i } = e;
                return u.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: n,
                  channelId: t,
                  webhooks: i,
                });
              });
        },
        create: (n, t, e) => (
          null == e && (e = o[l().random(0, o.length - 1)]),
          r.tn
            .post({
              url: a.ANM.CHANNEL_WEBHOOKS(t),
              body: { name: e },
              oldFormErrors: !0,
            })
            .then((t) => {
              let { body: e } = t;
              return (
                u.Z.dispatch({
                  type: "WEBHOOK_CREATE",
                  guildId: n,
                  webhook: e,
                }),
                e
              );
            })
        ),
        delete: (n, t) =>
          r.tn.del({ url: a.ANM.WEBHOOK(t), oldFormErrors: !0 }).then(() => {
            u.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: n, webhookId: t });
          }),
        update: (n, t, e) =>
          r.tn
            .patch({ url: a.ANM.WEBHOOK(t), body: e, oldFormErrors: !0 })
            .then((t) => {
              let { body: e } = t;
              return (
                u.Z.dispatch({
                  type: "WEBHOOK_UPDATE",
                  guildId: n,
                  webhook: e,
                }),
                e
              );
            }),
      };
    },
    394059: function (n, t, e) {
      var i, l;
      e.d(t, {
        K: function () {
          return i;
        },
      }),
        ((l = i || (i = {}))[(l.STREAM = 0)] = "STREAM"),
        (l[(l.VIDEO = 1)] = "VIDEO");
    },
    27584: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = e(442837),
        l = e(846027),
        r = e(314897),
        u = e(131951),
        a = e(981631),
        o = e(65154);
      function d(n) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.Yn.DEFAULT,
          e = (0, i.e7)([r.default], () => r.default.getId()),
          d = (0, i.e7)(
            [u.Z],
            () => u.Z.supports(o.AN.DISABLE_VIDEO) && u.Z.isVideoEnabled(),
          ),
          s = (0, i.e7)([u.Z], () => u.Z.isLocalVideoDisabled(e, t), [e, t]),
          c = null == n || n === e;
        return [
          c && (d || s),
          s,
          (n) => {
            let i = n ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
            l.Z.setDisableLocalVideo(e, i, t);
          },
        ];
      }
    },
    295510: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(153867),
        r = e(468026),
        u = e(394059),
        a = e(388032);
      function o(n) {
        let { type: t, onConfirm: e, ...o } = n,
          d =
            t === u.K.STREAM
              ? a.intl.string(a.t["/lFMWl"])
              : a.intl.string(a.t.xzxhZW),
          s =
            t === u.K.STREAM
              ? a.intl.string(a.t.xaOX7e)
              : a.intl.string(a.t.oU1p9P);
        return (0, i.jsx)(r.default, {
          confirmText: a.intl.string(a.t["cY+Ooa"]),
          secondaryConfirmText: a.intl.string(a.t["JdIQ/f"]),
          title: d,
          cancelText: a.intl.string(a.t["ETE/oK"]),
          onConfirm: e,
          onConfirmSecondary: () => {
            l.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              e();
          },
          body: s,
          ...o,
        });
      }
    },
    441061: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        r = e(481060),
        u = e(475179),
        a = e(358221),
        o = e(388032);
      function d(n) {
        let t = (0, l.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(n));
        return (0, i.jsx)(r.MenuCheckboxItem, {
          id: "no-video-hide",
          label: o.intl.string(o.t.BL8ss7),
          checked: !t,
          action: () => u.Z.toggleVoiceParticipantsHidden(n, !t),
        });
      }
    },
    167675: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return E;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var l = e(442837),
        r = e(481060),
        u = e(740492),
        a = e(27584),
        o = e(295510),
        d = e(394059),
        s = e(65154),
        c = e(388032);
      function E(n) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          [e, E, _] = (0, a.Z)(n, t),
          T = (0, l.e7)(
            [u.ZP],
            () => u.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return e
          ? (0, i.jsx)(r.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.intl.string(c.t.MH8ESU),
              checked: !E,
              action: () => {
                if (T || E) return _(!E);
                (0, r.openModal)((n) =>
                  (0, i.jsx)(o.Z, {
                    ...n,
                    type: d.K.VIDEO,
                    onConfirm: () => _(!E),
                  }),
                );
              },
            })
          : null;
      }
    },
    976192: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return A;
        },
      });
      var i = e(200651),
        l = e(192379),
        r = e(442837),
        u = e(481060),
        a = e(616780),
        o = e(40851),
        d = e(300284),
        s = e(484459),
        c = e(314897),
        E = e(271383),
        _ = e(430824),
        T = e(496675),
        I = e(594174),
        p = e(981631),
        N = e(388032),
        S = e(745974);
      function A(n) {
        let {
            guildId: t,
            userId: A,
            analyticsLocation: f,
            analyticsLocations: h,
            context: O,
            icon: Z,
          } = n,
          g = _.Z.getGuild(t),
          M = c.default.getId(),
          m = (0, r.e7)([I.default], () => I.default.getUser(A)),
          G = (0, r.e7)([E.ZP], () => E.ZP.isGuestOrLurker(t, A), [t, A]);
        (0, r.e7)([T.Z], () => T.Z.getGuildVersion(t), [t]);
        let y = l.useMemo(() => ({ [t]: [A] }), [t, A]);
        (0, a.$)(y);
        let C = O === p.IlC.POPOUT,
          v = (0, d.Z)({ guild: g, analyticsLocation: f }),
          R = (0, o.Aq)();
        if (null == g || C) return null;
        let b =
            M === A &&
            (T.Z.can(p.Plq.CHANGE_NICKNAME, g) ||
              T.Z.can(p.Plq.MANAGE_NICKNAMES, g)),
          P = M === A,
          U = T.Z.canManageUser(p.Plq.MANAGE_NICKNAMES, A, g);
        if (!(b || U || P) || null == m || G) return null;
        let D = g.hasFeature(p.oNc.HUB)
            ? N.intl.string(N.t["+MWrWl"])
            : N.intl.string(N.t["PKQB/P"]),
          x = P ? D : N.intl.string(N.t.dilOFx);
        return (0, i.jsx)(u.MenuItem, {
          id: "change-nickname",
          label: (0, i.jsx)("div", {
            className: S.labelWrapper,
            children: (0, i.jsx)("span", { className: S.label, children: x }),
          }),
          icon: Z,
          action: () => {
            P
              ? ((0, s.Z)(m.id, m.getAvatarURL(t, 80), { guildId: t }),
                v(),
                R.dispatch(p.CkL.POPOUT_CLOSE),
                (0, u.closeAllModals)())
              : (0, u.openModalLazy)(async () => {
                  let { default: n } = await e
                    .e("17712")
                    .then(e.bind(e, 620021));
                  return (e) =>
                    (0, i.jsx)(n, {
                      ...e,
                      guildId: t,
                      user: m,
                      analyticsSource: f,
                      analyticsLocations: h,
                    });
                });
          },
        });
      }
    },
    276022: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return I;
        },
      }),
        e(653041);
      var i = e(200651),
        l = e(192379),
        r = e(442837),
        u = e(481060),
        a = e(139387),
        o = e(230711),
        d = e(213459),
        s = e(434404),
        c = e(430824),
        E = e(496675),
        _ = e(981631),
        T = e(388032);
      function I(n) {
        let { user: t, guildId: e, channel: I, context: p } = n,
          N = c.Z.getGuild(e),
          S = (0, r.e7)([E.Z], () =>
            null != N ? E.Z.can(_.Plq.MANAGE_GUILD, N) : null,
          ),
          A = (0, d.em)(I, !0, !0),
          f = (0, d.PL)(!0, !0),
          { isUserApp: h, isGuildApp: O } = l.useMemo(() => {
            var n, e, i, l;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let r = Object.values(
                null !==
                  (i =
                    null === (n = A.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== i
                  ? i
                  : {},
              ),
              u = Object.values(
                null !==
                  (l =
                    null === (e = f.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== l
                  ? l
                  : {},
              );
            return {
              isGuildApp: r.some((n) => {
                var e;
                return (
                  (null === (e = n.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === (null == t ? void 0 : t.id)
                );
              }),
              isUserApp: u.some((n) => {
                var e;
                return (
                  (null === (e = n.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === (null == t ? void 0 : t.id)
                );
              }),
            };
          }, [A, f, null == t ? void 0 : t.id]),
          Z = l.useCallback(() => {
            if ((null == N ? void 0 : N.id) != null)
              s.Z.open(N.id, _.pNK.INTEGRATIONS),
                a.Z.setSection(_.b4C.APPLICATION, null == t ? void 0 : t.id);
          }, [null == t ? void 0 : t.id, null == N ? void 0 : N.id]),
          g = l.useCallback(() => {
            o.Z.open(_.oAB.AUTHORIZED_APPS);
          }, []),
          M = p === _.IlC.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !S || M || (!O && !h)) return null;
        let m = [];
        return (
          O &&
            m.push(
              (0, i.jsx)(
                u.MenuItem,
                {
                  id: "manage-integration",
                  label: T.intl.string(T.t["aw+qtb"]),
                  action: Z,
                },
                "manage-integration",
              ),
            ),
          h &&
            m.push(
              (0, i.jsx)(
                u.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: T.intl.string(T.t.ALLIgY),
                  action: g,
                },
                "manage-authorized-app",
              ),
            ),
          m
        );
      }
    },
    251794: function (n, t, e) {
      e.d(t, {
        q: function () {
          return u;
        },
        z: function () {
          return r;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(481060);
      function r(n, t, r) {
        (0, l.openModalLazy)(async () => {
          let { default: l } = await e.e("72920").then(e.bind(e, 109730));
          return (e) =>
            (0, i.jsx)(l, {
              guildId: n,
              userId: t,
              anaylticsLocations: r,
              ...e,
            });
        });
      }
      function u(n, t, r) {
        (0, l.openModalLazy)(async () => {
          let { default: l } = await e.e("76233").then(e.bind(e, 171494));
          return (e) =>
            (0, i.jsx)(l, {
              guildId: n,
              userId: t,
              anaylticsLocations: r,
              ...e,
            });
        });
      }
    },
    910693: function (n, t, e) {
      e.d(t, {
        BG: function () {
          return I;
        },
        aY: function () {
          return r;
        },
        dW: function () {
          return p;
        },
        gm: function () {
          return T;
        },
        h1: function () {
          return S;
        },
        jQ: function () {
          return u;
        },
        sE: function () {
          return N;
        },
      });
      var i,
        l,
        r,
        u,
        a = e(192379),
        o = e(100527),
        d = e(367907),
        s = e(314897),
        c = e(626135),
        E = e(981631);
      function _(n, t, e) {
        var i;
        let l = {
          ...t,
          ...(0, d.hH)(null !== (i = t.guild_id) && void 0 !== i ? i : e),
        };
        c.default.track(n, l);
      }
      function T(n) {
        return a.useCallback(
          (t) => {
            !(function (n) {
              let t = { guild_id: n, location: o.Z.MEMBER_SAFETY_PAGE };
              _(E.rMx.MOD_DASH_SEARCH_MEMBERS, t);
            })(n);
          },
          [n],
        );
      }
      function I(n) {
        return a.useCallback(
          (t) => {
            !(function (n, t) {
              let e = {
                selected_role_count: t.size,
                guild_id: n,
                location: o.Z.MEMBER_SAFETY_PAGE,
              };
              _(E.rMx.MOD_DASH_FILTER_ROLES, e);
            })(n, t);
          },
          [n],
        );
      }
      ((i = r || (r = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (i.COMMUNICATION_DISABLED = "communication_disabled"),
        (i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (i.USERNAME_QUARANTINED = "username_quarantined");
      function p(n) {
        return a.useCallback(
          (t) => {
            !(function (n, t) {
              let e = {
                flag_type: t,
                guild_id: n,
                location: o.Z.MEMBER_SAFETY_PAGE,
              };
              _(E.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, e);
            })(n, t);
          },
          [n],
        );
      }
      function N(n, t) {
        let { location: e, targetUserId: i, targets: l, locations: r } = t;
        return a.useCallback(
          (t) => {
            let u = {
              action_type: t,
              mod_user_id: s.default.getId(),
              guild_id: n,
              location: e,
              locations: r,
              target_user_id: null != i ? i : void 0,
              targets: null != l ? l : void 0,
            };
            _(E.rMx.MODERATION_ACTION, u);
          },
          [n, e, i, l, r],
        );
      }
      function S(n, t) {
        _(E.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: n, location: t });
      }
      ((l = u || (u = {})).BAN = "ban"),
        (l.KICK = "kick"),
        (l.MUTE = "mute"),
        (l.TIMEOUT = "timeout"),
        (l.ADD_ROLE = "add_role"),
        (l.REMOVE_ROLE = "remove_role"),
        (l.COPY_ID = "copy_id"),
        (l.CHANGE_NICKNAME = "change_nickname");
    },
    821864: function (n, t, e) {
      e.d(t, {
        I4: function () {
          return E;
        },
        Sn: function () {
          return s;
        },
        U3: function () {
          return T;
        },
        Ui: function () {
          return _;
        },
        W4: function () {
          return d;
        },
        gq: function () {
          return c;
        },
        kZ: function () {
          return o;
        },
      });
      var i = e(544891),
        l = e(570140),
        r = e(555573),
        u = e(581364),
        a = e(981631);
      function o() {
        l.Z.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function d(n, t, e) {
        l.Z.dispatch({
          applicationId: n,
          commandId: t,
          permissions: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function s(n, t) {
        i.tn.get(a.ANM.GUILD_COMMANDS_FOR_APPLICATION(n, t)).then(
          (e) => {
            l.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
              applicationId: t,
              commands: e.body.application_commands,
              guildId: n,
              permissions: e.body.permissions,
            });
          },
          () => {
            l.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
              applicationId: t,
            });
          },
        );
      }
      async function c(n, t, e) {
        let r = [];
        try {
          let l = await i.tn.get(
            a.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(n, t, e),
          );
          l.ok && (r = l.body.permissions);
        } catch (i) {
          if (404 !== i.status) {
            l.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
              applicationId: n,
              commandId: e,
              guildId: t,
            });
            return;
          }
        }
        l.Z.dispatch({
          type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
          applicationId: n,
          commandId: e,
          guildId: t,
          permissions: r,
        });
      }
      function E(n) {
        l.Z.dispatch({
          applicationId: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_INIT",
        });
      }
      function _(n) {
        l.Z.dispatch({
          commandId: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_RESET",
        });
      }
      async function T(n) {
        let {
            applicationId: t,
            commandId: e,
            defaultEveryoneValue: i,
            defaultEverywhereValue: a,
            guildId: o,
            permissions: d,
          } = n,
          s =
            e === t
              ? (function (n, t, e, i) {
                  if (!e || !i) return t;
                  let l = { [n]: e, [(0, u.bD)(n)]: i };
                  return t.filter((n) => {
                    let t = l[n.id];
                    return null == t || n.permission !== t;
                  });
                })(o, d, i, a)
              : d,
          c = await r.dh(t, o, e, s);
        c.ok &&
          l.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: e,
            guildId: o,
            permissions: c.body.permissions,
          });
      }
    },
    978983: function (n, t, e) {
      var i = e(200651);
      e(192379);
      var l = e(481060),
        r = e(53304);
      t.Z = () =>
        (0, i.jsx)("div", {
          className: r.loadingWrapper,
          children: (0, i.jsx)(l.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    977059: function (n, t, e) {
      e.d(t, {
        R: function () {
          return r;
        },
        S: function () {
          return l;
        },
      });
      let i = (0, e(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function l(n) {
        let { location: t } = n;
        return i.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function r(n) {
        let { location: t } = n;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    441894: function (n, t, e) {
      e.d(t, {
        J: function () {
          return o;
        },
      }),
        e(47120);
      var i = e(442837),
        l = e(592125),
        r = e(19780),
        u = e(977059),
        a = e(760373);
      function o(n) {
        let { channelId: t, location: e } = n,
          { enabled: o } = (0, u.S)({ location: e });
        return (0, i.e7)(
          [r.Z, l.Z],
          () =>
            (function (n, t) {
              var e;
              let [i, u] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [r.Z, l.Z];
              if (!t || null == n || i.getChannelId() !== n) return !1;
              let o = u.getChannel(n);
              if (null == o || o.isGuildStageVoice()) return !1;
              let d =
                null === (e = i.getSecureFramesState()) || void 0 === e
                  ? void 0
                  : e.version;
              return null != d && d !== a.Eg;
            })(t, o, [r.Z, l.Z]),
          [t, o],
        );
      }
    },
    471253: function (n, t, e) {
      e.d(t, {
        DT: function () {
          return O;
        },
        Ef: function () {
          return m;
        },
        HO: function () {
          return M;
        },
        NZ: function () {
          return G;
        },
        Pq: function () {
          return g;
        },
        Q1: function () {
          return S;
        },
        RK: function () {
          return f;
        },
        _0: function () {
          return A;
        },
        hz: function () {
          return Z;
        },
        yi: function () {
          return h;
        },
      });
      var i = e(512722),
        l = e.n(i),
        r = e(149765),
        u = e(544891),
        a = e(493683);
      e(749210);
      var o = e(911969),
        d = e(367907),
        s = e(944486),
        c = e(979651),
        E = e(700785),
        _ = e(922482),
        T = e(192079),
        I = e(706058),
        p = e(590415),
        N = e(981631);
      function S(n, t) {
        let e = n.getGuildId();
        return (
          l()(null != e, "This channel cannot be guildless."),
          t && (0, d.yw)(N.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, T.s$)(n) }),
          u.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(e),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: n.id,
            },
          })
        );
      }
      function A(n, t) {
        let e = n.getGuildId();
        return (
          l()(null != e, "This channel cannot be guildless."),
          u.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(e, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
          })
        );
      }
      function f(n, t) {
        let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        l()(null != i, "This channel cannot be guildless.");
        let r = c.Z.getVoiceStateForChannel(n.id);
        return (
          (0, p.gf)(r) === p.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, d.yw)(N.rMx.PROMOTED_TO_SPEAKER, { ...(0, T.s$)(n) }),
          u.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(e ? { silent: e } : {}),
            },
          })
        );
      }
      function h(n) {
        let t = null == n ? void 0 : n.getGuildId();
        return (
          l()(null != t, "This channel cannot be guildless."),
          u.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function O(n, t, e) {
        let i = n.getGuildId();
        return (
          l()(null != i, "This channel cannot be guildless."),
          u.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(i, t),
            body: { suppress: e, channel_id: n.id },
          })
        );
      }
      function Z(n, t) {
        if (null == t || null == n) return;
        let e = t.getGuildId();
        return (
          l()(null != e, "This channel cannot be guildless."),
          O(t, n.id, !0),
          u.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(e, n.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function g(n, t, e) {
        let i = n.getGuildId();
        l()(null != i, "Channel cannot be guildless");
        let u = n.permissionOverwrites[i],
          d = { id: i, type: o.BN.ROLE, allow: E.Hn, deny: E.Hn, ...u };
        e
          ? ((d.allow = r.IH(d.allow, t)), (d.deny = r.Od(d.deny, t)))
          : ((d.allow = r.Od(d.allow, t)), (d.deny = r.IH(d.deny, t))),
          a.Z.updatePermissionOverwrite(n.id, d);
      }
      async function M(n, t, e, i) {
        if ("" === t) return;
        s.Z.getVoiceChannelId() !== n.id && (0, _.TM)(n);
        let l = await (0, I.me)(n.id, t, e, i);
        return f(n, !1, !0), l;
      }
      async function m(n, t, e) {
        if ("" !== t) return await (0, I.Dk)(n.id, t, e);
      }
      async function G(n) {
        await (0, I.Ix)(n.id);
      }
    },
    192079: function (n, t, e) {
      e.d(t, {
        ER: function () {
          return c;
        },
        kk: function () {
          return E;
        },
        s$: function () {
          return _;
        },
      }),
        e(724458),
        e(47120),
        e(392711);
      var i = e(19780),
        l = e(5192),
        r = e(700785),
        u = e(427679),
        a = e(157925),
        o = e(981631),
        d = e(71080),
        s = e(388032);
      function c(n, t, e, i) {
        let r = t[0],
          u = l.ZP.getName(n, e, r),
          a = null != i ? i : t.length;
        return 1 === a && null != r
          ? u
          : null == r
            ? s.intl.formatToPlainString(s.t.chmM9P, { count: a })
            : s.intl.formatToPlainString(s.t.GhkJ29, { name: u, count: a - 1 });
      }
      function E(n, t) {
        switch (n) {
          case d.aC.OWNER:
            return s.intl.string(s.t.icuNBA);
          case d.aC.ADMINISTRATOR:
            return s.intl.string(s.t.eTmN5e);
          case d.aC.MEMBER:
          case d.aC.ROLE:
            return t ? s.intl.string(s.t.Hw3XW1) : s.intl.string(s.t.YieyPj);
          case d.aC.EMPTY_STATE:
        }
        return null;
      }
      function _(n) {
        let t = u.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: r.Uu(o.Plq.REQUEST_TO_SPEAK, n)
            ? a.BM.EVERYONE
            : a.BM.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    706058: function (n, t, e) {
      e.d(t, {
        Dk: function () {
          return u;
        },
        Ix: function () {
          return a;
        },
        me: function () {
          return r;
        },
      });
      var i = e(544891),
        l = e(981631);
      async function r(n, t, e, r, u) {
        return (
          await i.tn.post({
            url: l.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: t,
              privacy_level: e,
              guild_scheduled_event_id: u,
              send_start_notification: r,
            },
          })
        ).body;
      }
      async function u(n, t, e) {
        return (
          await i.tn.patch({
            url: l.ANM.STAGE_INSTANCE(n),
            body: { topic: t, privacy_level: e },
          })
        ).body;
      }
      function a(n) {
        return i.tn.del(l.ANM.STAGE_INSTANCE(n));
      }
    },
    623633: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = e(442837),
        l = e(592125),
        r = e(944486);
      function u() {
        return (0, i.e7)([r.Z, l.Z], () => {
          let n = r.Z.getVoiceChannelId();
          if (null != n) {
            let t = l.Z.getChannel(n);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
          }
          return null;
        });
      }
    },
    286694: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return T;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        r = e(481060),
        u = e(592125),
        a = e(430824),
        o = e(496675),
        d = e(594174),
        s = e(471253),
        c = e(88751),
        E = e(981631),
        _ = e(388032);
      function T(n, t, e) {
        var T;
        let I = u.Z.getChannel(e),
          p = (0, l.e7)([a.Z], () => a.Z.getGuild(t), [t]),
          N = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(n.id, e), [
            e,
            n.id,
          ]),
          S =
            (null === (T = d.default.getCurrentUser()) || void 0 === T
              ? void 0
              : T.id) === n.id,
          A = (0, l.e7)(
            [o.Z],
            () =>
              null != e &&
              o.Z.canWithPartialContext(E.Plq.MUTE_MEMBERS, { channelId: e }),
            [e],
          );
        return null != I && null != p && (A || S) && N.speaker
          ? (0, i.jsx)(r.MenuItem, {
              id: "audience",
              label: S
                ? _.intl.string(_.t["6C6PJy"])
                : _.intl.string(_.t.VK3vQ0),
              action: () => {
                S ? (0, s.yi)(I) : (0, s.hz)(n, I);
              },
            })
          : null;
      }
    },
    757387: function (n, t, e) {
      e.r(t);
      var i = e(200651);
      e(192379);
      var l = e(442837),
        r = e(481060),
        u = e(239091),
        a = e(883385),
        o = e(108843),
        d = e(911969),
        s = e(947440),
        c = e(100527),
        E = e(441061),
        _ = e(167675),
        T = e(737013),
        I = e(607783),
        p = e(299206),
        N = e(976192),
        S = e(819403),
        A = e(286694),
        f = e(592125),
        h = e(777658),
        O = e(858488),
        Z = e(185457),
        g = e(933409),
        M = e(570870),
        m = e(389052),
        G = e(24311),
        y = e(332576),
        C = e(710631),
        v = e(297047),
        R = e(88966),
        b = e(712301),
        P = e(991307),
        U = e(37258),
        D = e(931617),
        x = e(700994),
        L = e(332031),
        k = e(981631),
        H = e(388032);
      t.default = (0, o.Z)(
        (0, a.Z)(
          function (n) {
            let {
                user: t,
                guildId: e,
                channel: a,
                showMediaItems: o = !1,
                showChatItems: c = !0,
                showChannelCallItems: B = !1,
                showModalItems: w = !0,
                showStageChannelItems: j = !1,
                context: V,
                onSelect: F,
                onHeightUpdate: W,
                viewingChannelId: K,
              } = n,
              q = {
                page: k.ZY5.GUILD_CHANNEL,
                section: k.jXE.CHAT_USERNAME,
                object: k.qAy.CONTEXT_MENU_ITEM,
              },
              Y = (0, U.Z)({ userId: t.id, guildId: e, channelId: a.id }),
              z = (0, v.Z)(t, e, V),
              Q = (0, R.Z)(t.id, V),
              X = (0, L.Z)(t.id),
              J = (0, G.Z)({ user: t, context: V }),
              $ = (0, Z.Z)({
                user: t,
                guildId: e,
                channelId: a.id,
                context: V,
              }),
              nn = (0, O.Z)({ user: t }),
              nt = (0, x.Z)(t.id),
              ne = (0, P.Z)(t.id),
              ni = (0, I.B)({
                userId: t.id,
                channelId: a.id,
                guildId: a.getGuildId(),
                location: "GuildChannelUserContextMenu",
              }),
              nl = (0, N.Z)({
                guildId: e,
                userId: t.id,
                analyticsLocation: q,
                context: V,
              }),
              nr = (0, C.Z)({ user: t, guildId: e }),
              nu = (0, s.Z)(null, t),
              na = (0, h.Z)(t),
              no = (0, m.Z)({ user: t }),
              nd = (0, g.Z)(t, e, a.id),
              ns = (0, D.Z)(t.id, e),
              nc = (0, b.Z)(t, e),
              nE = (0, p.Z)({ id: t.id, label: H.intl.string(H.t["/AXYnJ"]) }),
              n_ = (0, y.Z)(t.id, a.id),
              nT = (0, _.Z)(t.id),
              nI = (0, E.Z)(a.id),
              np = (0, S.Z)(t),
              nN = (0, A.Z)(t, e, a.id),
              nS = (0, l.e7)([f.Z], () =>
                null != K ? f.Z.getChannel(K) : null,
              ),
              nA = (0, M.Z)({
                commandType: d.yU.USER,
                commandTargetId: t.id,
                channel: null != nS ? nS : a,
                guildId: e,
                onHeightUpdate: W,
                context: V,
              }),
              nf = (0, T.Z)(t.id),
              nh = t.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: u.Zy,
              "aria-label": H.intl.string(H.t.liqwPD),
              onSelect: F,
              children: [
                !nh &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(r.MenuGroup, { children: [np, j && nN] }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [w && Y, c && z, Q, J, w && $, w && nn, X],
                      }),
                      o && (0, i.jsx)(r.MenuGroup, { children: nt }),
                      (0, i.jsx)(r.MenuGroup, { children: w && nu }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          o && ne,
                          o && ni,
                          o && n_,
                          w && nl,
                          nA,
                          w && nr,
                          na,
                          w && no,
                          B && nf,
                        ],
                      }),
                      (0, i.jsx)(r.MenuGroup, { children: nd }),
                      (0, i.jsxs)(r.MenuGroup, { children: [ns, nc] }),
                      B && (0, i.jsxs)(r.MenuGroup, { children: [nI, nT] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: nE }),
              ],
            });
          },
          { object: k.qAy.CONTEXT_MENU },
        ),
        [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU],
      );
    },
    570870: function (n, t, e) {
      var i = e(200651),
        l = e(192379),
        r = e(512722),
        u = e.n(r),
        a = e(442837),
        o = e(481060),
        d = e(10718),
        s = e(667204),
        c = e(826298),
        E = e(276022),
        _ = e(978983),
        T = e(430824),
        I = e(594174),
        p = e(981631),
        N = e(689079),
        S = e(388032),
        A = e(62352);
      t.Z = (n) => {
        let t,
          {
            commandType: e,
            commandTargetId: r,
            channel: f,
            guildId: h,
            onHeightUpdate: O,
            context: Z,
          } = n,
          g = (0, a.e7)([T.Z], () => T.Z.getGuild(null != h ? h : f.guild_id)),
          M = (0, a.e7)([I.default], () => I.default.getUser(r)),
          m = (0, E.Z)({
            user: M,
            guildId: null == g ? void 0 : g.id,
            channel: f,
            context: Z,
          }),
          {
            commands: G,
            sectionDescriptors: y,
            loading: C,
          } = d.wi({
            channel: f,
            filters: { commandTypes: [e] },
            options: { limit: N.lr },
            allowFetch: !0,
          }),
          { sections: v } = l.useMemo(() => {
            let n = {};
            return (
              y.forEach((t) => {
                n[t.id] = t;
              }),
              { sections: n }
            );
          }, [y]),
          R = l.useRef(C.current);
        l.useEffect(() => {
          C.current !== R.current &&
            ((R.current = C.current), null == O || O());
        }, [C, O]);
        let b = l.useCallback(
          (n) => {
            u()(null != f, "menu item should not show if channel is null");
            let t = v[n.applicationId],
              e = null != t ? (0, c.ky)(t) : void 0;
            return (0, i.jsx)(
              o.MenuItem,
              {
                id: n.id,
                label: n.displayName,
                iconLeft: () =>
                  null != e
                    ? (0, i.jsx)(e, {
                        channel: f,
                        section: t,
                        width: 18,
                        height: 18,
                        selectable: !1,
                      })
                    : null,
                action: () => {
                  (0, s.Z)({
                    command: n,
                    optionValues: {},
                    context: { channel: f, guild: g },
                    commandTargetId: r,
                  });
                },
              },
              n.id,
            );
          },
          [f, g, r, v],
        );
        if (
          (C.current
            ? (t = (0, i.jsx)(
                o.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(_.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((t =
                0 === G.length
                  ? (0, i.jsx)(
                      o.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: S.intl.string(S.t.YSNlV1),
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : G.map(b)),
              null != m &&
                (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                    t,
                    (0, i.jsx)(o.MenuSeparator, {}, "separator"),
                    m,
                  ],
                }))),
          !p.TPd.TEXTUAL.has(f.type))
        ) {
          if (null == m) return null;
          t = m;
        }
        return (0, i.jsx)(o.MenuItem, {
          id: "apps",
          label: S.intl.string(S.t.PHjkRE),
          listClassName: A.list,
          children: t,
        });
      };
    },
    745974: function (n, t, e) {
      n.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    53304: function (n, t, e) {
      n.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    62352: function (n, t, e) {
      n.exports = { list: "list_fd4745" };
    },
    201683: function (n, t, e) {
      n.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    587525: function (n, t, e) {
      n.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=1ffc3d8a45c9b921cf17.js.map
