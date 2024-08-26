"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61736"],
  {
    963458: function (e, t, n) {
      var r = n(192291),
        i = n(22092),
        o = r.aTypedArrayConstructor;
      (0, r.exportTypedArrayStaticMethod)(
        "of",
        function () {
          for (var e = 0, t = arguments.length, n = new (o(this))(t); t > e; )
            n[e] = arguments[e++];
          return n;
        },
        i,
      );
    },
    139387: function (e, t, n) {
      var r = n(570140),
        i = n(434404),
        o = n(821864),
        a = n(308063);
      t.Z = {
        init() {
          r.Z.dispatch({ type: "INTEGRATION_SETTINGS_INIT" });
        },
        setSection(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_SET_SECTION",
            section: e,
            sectionId: t,
          });
        },
        startEditingCommandPermissions(e) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
            commandId: e,
          });
        },
        stopEditingCommandPermissions(e) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
            commandId: e,
          });
        },
        startEditingIntegration(e) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
            integrationId: e,
          });
        },
        stopEditingIntegration() {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION",
          });
        },
        updateIntegration(e) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
            settings: e,
          });
        },
        startEditingWebhook(e) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
            webhookId: e,
          });
        },
        stopEditingWebhook() {
          r.Z.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK" });
        },
        updateWebhook(e) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
            settings: e,
          });
        },
        async saveApplicationPermissions(e, t, n) {
          try {
            r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await o.U3({
                applicationId: e,
                commandId: e,
                defaultEveryoneValue: !0,
                defaultEverywhereValue: !0,
                guildId: t,
                permissions: n,
              }),
              r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (e) {
            r.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: e.body,
            });
          }
        },
        async saveIntegration(e, t) {
          try {
            r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await i.Z.updateIntegration(
                e,
                t.id,
                t.expire_behavior,
                t.expire_grace_period,
                t.enable_emoticons,
              ),
              r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (e) {
            r.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: e.body,
            });
          }
        },
        async saveWebhook(e, t) {
          try {
            r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await a.Z.update(e, t.id, t),
              r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (e) {
            r.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: e.body,
            });
          }
        },
      };
    },
    308063: function (e, t, n) {
      var r = n(392711),
        i = n.n(r),
        o = n(544891),
        a = n(570140),
        l = n(981631);
      let u = ["Spidey Bot", "Captain Hook"];
      t.Z = {
        fetchForGuild(e) {
          a.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            o.tn
              .get({ url: l.ANM.GUILD_WEBHOOKS(e), oldFormErrors: !0 })
              .then((t) => {
                let { body: n } = t;
                return a.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  webhooks: n,
                });
              })
              .catch((t) => {
                let { body: n } = t;
                a.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  error: n.message,
                });
              });
        },
        fetchForChannel(e, t) {
          a.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e, channelId: t }),
            o.tn
              .get({ url: l.ANM.CHANNEL_WEBHOOKS(t), oldFormErrors: !0 })
              .then((n) => {
                let { body: r } = n;
                return a.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  channelId: t,
                  webhooks: r,
                });
              });
        },
        create: (e, t, n) => (
          null == n && (n = u[i().random(0, u.length - 1)]),
          o.tn
            .post({
              url: l.ANM.CHANNEL_WEBHOOKS(t),
              body: { name: n },
              oldFormErrors: !0,
            })
            .then((t) => {
              let { body: n } = t;
              return (
                a.Z.dispatch({
                  type: "WEBHOOK_CREATE",
                  guildId: e,
                  webhook: n,
                }),
                n
              );
            })
        ),
        delete: (e, t) =>
          o.tn.del({ url: l.ANM.WEBHOOK(t), oldFormErrors: !0 }).then(() => {
            a.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: t });
          }),
        update: (e, t, n) =>
          o.tn
            .patch({ url: l.ANM.WEBHOOK(t), body: n, oldFormErrors: !0 })
            .then((t) => {
              let { body: n } = t;
              return (
                a.Z.dispatch({
                  type: "WEBHOOK_UPDATE",
                  guildId: e,
                  webhook: n,
                }),
                n
              );
            }),
      };
    },
    394059: function (e, t, n) {
      var r, i;
      n.d(t, {
        K: function () {
          return r;
        },
      }),
        ((i = r || (r = {}))[(i.STREAM = 0)] = "STREAM"),
        (i[(i.VIDEO = 1)] = "VIDEO");
    },
    27584: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(442837),
        i = n(846027),
        o = n(314897),
        a = n(131951),
        l = n(981631),
        u = n(65154);
      function s(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : u.Yn.DEFAULT,
          n = (0, r.e7)([o.default], () => o.default.getId()),
          s = (0, r.e7)(
            [a.Z],
            () => a.Z.supports(u.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled(),
          ),
          d = (0, r.e7)([a.Z], () => a.Z.isLocalVideoDisabled(n, t), [n, t]),
          c = null == e || e === n;
        return [
          c && (s || d),
          d,
          (e) => {
            let r = e ? l.ZUi.DISABLED : l.ZUi.MANUAL_ENABLED;
            i.Z.setDisableLocalVideo(n, r, t);
          },
        ];
      }
    },
    295510: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(153867),
        o = n(468026),
        a = n(394059),
        l = n(689938);
      function u(e) {
        let { type: t, onConfirm: n, ...u } = e,
          s =
            t === a.K.STREAM
              ? l.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : l.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          d =
            t === a.K.STREAM
              ? l.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : l.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, r.jsx)(o.default, {
          confirmText: l.Z.Messages.CONFIRM,
          secondaryConfirmText: l.Z.Messages.DONT_ASK_AGAIN,
          title: s,
          cancelText: l.Z.Messages.CANCEL,
          onConfirm: n,
          onConfirmSecondary: () => {
            i.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              n();
          },
          body: d,
          ...u,
        });
      }
    },
    441061: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(442837),
        o = n(481060),
        a = n(475179),
        l = n(358221),
        u = n(689938);
      function s(e) {
        let t = (0, i.e7)([l.Z], () => l.Z.getVoiceParticipantsHidden(e));
        return (0, r.jsx)(o.MenuCheckboxItem, {
          id: "no-video-hide",
          label: u.Z.Messages.STREAM_SHOW_NON_VIDEO,
          checked: !t,
          action: () => a.Z.toggleVoiceParticipantsHidden(e, !t),
        });
      }
    },
    167675: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      }),
        n(47120);
      var r = n(735250);
      n(470079);
      var i = n(442837),
        o = n(481060),
        a = n(740492),
        l = n(27584),
        u = n(295510),
        s = n(394059),
        d = n(65154),
        c = n(689938);
      function E(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.Yn.DEFAULT,
          [n, E, I] = (0, l.Z)(e, t),
          _ = (0, i.e7)(
            [a.ZP],
            () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return n
          ? (0, r.jsx)(o.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.Z.Messages.SHOW_SELF_VIDEO,
              checked: !E,
              action: () => {
                if (_ || E) return I(!E);
                (0, o.openModal)((e) =>
                  (0, r.jsx)(u.Z, {
                    ...e,
                    type: s.K.VIDEO,
                    onConfirm: () => I(!E),
                  }),
                );
              },
            })
          : null;
      }
    },
    276022: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
      }),
        n(653041);
      var r = n(735250),
        i = n(470079),
        o = n(442837),
        a = n(481060),
        l = n(139387),
        u = n(230711),
        s = n(213459),
        d = n(434404),
        c = n(430824),
        E = n(496675),
        I = n(981631),
        _ = n(689938);
      function T(e) {
        let { user: t, guildId: n, channel: T, context: f } = e,
          p = c.Z.getGuild(n),
          A = (0, o.e7)([E.Z], () =>
            null != p ? E.Z.can(I.Plq.MANAGE_GUILD, p) : null,
          ),
          N = (0, s.em)(T, !0, !0),
          S = (0, s.PL)(!0, !0),
          { isUserApp: h, isGuildApp: O } = i.useMemo(() => {
            var e, n, r, i;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let o = Object.values(
                null !==
                  (r =
                    null === (e = N.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== r
                  ? r
                  : {},
              ),
              a = Object.values(
                null !==
                  (i =
                    null === (n = S.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== i
                  ? i
                  : {},
              );
            return {
              isGuildApp: o.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
              isUserApp: a.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
            };
          }, [N, S, null == t ? void 0 : t.id]),
          g = i.useCallback(() => {
            if ((null == p ? void 0 : p.id) != null)
              d.Z.open(p.id, I.pNK.INTEGRATIONS),
                l.Z.setSection(I.b4C.APPLICATION, null == t ? void 0 : t.id);
          }, [null == t ? void 0 : t.id, null == p ? void 0 : p.id]),
          y = i.useCallback(() => {
            u.Z.open(I.oAB.AUTHORIZED_APPS);
          }, []),
          Z = f === I.IlC.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !A || Z || (!O && !h)) return null;
        let M = [];
        return (
          O &&
            M.push(
              (0, r.jsx)(
                a.MenuItem,
                {
                  id: "manage-integration",
                  label: _.Z.Messages.MANAGE_INTEGRATION,
                  action: g,
                },
                "manage-integration",
              ),
            ),
          h &&
            M.push(
              (0, r.jsx)(
                a.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: _.Z.Messages.MANAGE_AUTHORIZED_APP,
                  action: y,
                },
                "manage-authorized-app",
              ),
            ),
          M
        );
      }
    },
    251794: function (e, t, n) {
      n.d(t, {
        q: function () {
          return a;
        },
        z: function () {
          return o;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(481060);
      function o(e, t, o) {
        (0, i.openModalLazy)(async () => {
          let { default: i } = await n.e("72920").then(n.bind(n, 109730));
          return (n) =>
            (0, r.jsx)(i, {
              guildId: e,
              userId: t,
              anaylticsLocations: o,
              ...n,
            });
        });
      }
      function a(e, t, o) {
        (0, i.openModalLazy)(async () => {
          let { default: i } = await n.e("76233").then(n.bind(n, 171494));
          return (n) =>
            (0, r.jsx)(i, {
              guildId: e,
              userId: t,
              anaylticsLocations: o,
              ...n,
            });
        });
      }
    },
    910693: function (e, t, n) {
      n.d(t, {
        BG: function () {
          return T;
        },
        aY: function () {
          return o;
        },
        dW: function () {
          return f;
        },
        gm: function () {
          return _;
        },
        h1: function () {
          return A;
        },
        jQ: function () {
          return a;
        },
        sE: function () {
          return p;
        },
      });
      var r,
        i,
        o,
        a,
        l = n(470079),
        u = n(100527),
        s = n(367907),
        d = n(314897),
        c = n(626135),
        E = n(981631);
      function I(e, t, n) {
        var r;
        let i = {
          ...t,
          ...(0, s.hH)(null !== (r = t.guild_id) && void 0 !== r ? r : n),
        };
        c.default.track(e, i);
      }
      function _(e) {
        return l.useCallback(
          (t) => {
            !(function (e) {
              let t = { guild_id: e, location: u.Z.MEMBER_SAFETY_PAGE };
              I(E.rMx.MOD_DASH_SEARCH_MEMBERS, t);
            })(e);
          },
          [e],
        );
      }
      function T(e) {
        return l.useCallback(
          (t) => {
            !(function (e, t) {
              let n = {
                selected_role_count: t.size,
                guild_id: e,
                location: u.Z.MEMBER_SAFETY_PAGE,
              };
              I(E.rMx.MOD_DASH_FILTER_ROLES, n);
            })(e, t);
          },
          [e],
        );
      }
      ((r = o || (o = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (r.COMMUNICATION_DISABLED = "communication_disabled"),
        (r.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (r.USERNAME_QUARANTINED = "username_quarantined");
      function f(e) {
        return l.useCallback(
          (t) => {
            !(function (e, t) {
              let n = {
                flag_type: t,
                guild_id: e,
                location: u.Z.MEMBER_SAFETY_PAGE,
              };
              I(E.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n);
            })(e, t);
          },
          [e],
        );
      }
      function p(e, t) {
        let { location: n, targetUserId: r, targets: i, locations: o } = t;
        return l.useCallback(
          (t) => {
            let a = {
              action_type: t,
              mod_user_id: d.default.getId(),
              guild_id: e,
              location: n,
              locations: o,
              target_user_id: null != r ? r : void 0,
              targets: null != i ? i : void 0,
            };
            I(E.rMx.MODERATION_ACTION, a);
          },
          [e, n, r, i, o],
        );
      }
      function A(e, t) {
        I(E.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: e, location: t });
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
    821864: function (e, t, n) {
      n.d(t, {
        I4: function () {
          return E;
        },
        Sn: function () {
          return d;
        },
        U3: function () {
          return _;
        },
        Ui: function () {
          return I;
        },
        W4: function () {
          return s;
        },
        gq: function () {
          return c;
        },
        kZ: function () {
          return u;
        },
      });
      var r = n(544891),
        i = n(570140),
        o = n(555573),
        a = n(581364),
        l = n(981631);
      function u() {
        i.Z.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function s(e, t, n) {
        i.Z.dispatch({
          applicationId: e,
          commandId: t,
          permissions: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function d(e, t) {
        r.tn.get(l.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(
          (n) => {
            i.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
              applicationId: t,
              commands: n.body.application_commands,
              guildId: e,
              permissions: n.body.permissions,
            });
          },
          () => {
            i.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
              applicationId: t,
            });
          },
        );
      }
      async function c(e, t, n) {
        let o = [];
        try {
          let i = await r.tn.get(
            l.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
          );
          i.ok && (o = i.body.permissions);
        } catch (r) {
          if (404 !== r.status) {
            i.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
              applicationId: e,
              commandId: n,
              guildId: t,
            });
            return;
          }
        }
        i.Z.dispatch({
          type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
          applicationId: e,
          commandId: n,
          guildId: t,
          permissions: o,
        });
      }
      function E(e) {
        i.Z.dispatch({
          applicationId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_INIT",
        });
      }
      function I(e) {
        i.Z.dispatch({
          commandId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_RESET",
        });
      }
      async function _(e) {
        let {
            applicationId: t,
            commandId: n,
            defaultEveryoneValue: r,
            defaultEverywhereValue: l,
            guildId: u,
            permissions: s,
          } = e,
          d =
            n === t
              ? (function (e, t, n, r) {
                  if (!n || !r) return t;
                  let i = { [e]: n, [(0, a.bD)(e)]: r };
                  return t.filter((e) => {
                    let t = i[e.id];
                    return null == t || e.permission !== t;
                  });
                })(u, s, r, l)
              : s,
          c = await o.dh(t, u, n, d);
        c.ok &&
          i.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: n,
            guildId: u,
            permissions: c.body.permissions,
          });
      }
    },
    978983: function (e, t, n) {
      var r = n(735250);
      n(470079);
      var i = n(481060),
        o = n(882441);
      t.Z = () =>
        (0, r.jsx)("div", {
          className: o.loadingWrapper,
          children: (0, r.jsx)(i.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    977059: function (e, t, n) {
      n.d(t, {
        R: function () {
          return o;
        },
        S: function () {
          return i;
        },
      });
      let r = (0, n(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function i(e) {
        let { location: t } = e;
        return r.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function o(e) {
        let { location: t } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    441894: function (e, t, n) {
      n.d(t, {
        J: function () {
          return u;
        },
      }),
        n(47120);
      var r = n(442837),
        i = n(592125),
        o = n(19780),
        a = n(977059),
        l = n(760373);
      function u(e) {
        let { channelId: t, location: n } = e,
          { enabled: u } = (0, a.S)({ location: n });
        return (0, r.e7)(
          [o.Z, i.Z],
          () =>
            (function (e, t) {
              var n;
              let [r, a] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [o.Z, i.Z];
              if (!t || null == e || r.getChannelId() !== e) return !1;
              let u = a.getChannel(e);
              if (null == u || u.isGuildStageVoice()) return !1;
              let s =
                null === (n = r.getSecureFramesState()) || void 0 === n
                  ? void 0
                  : n.version;
              return null != s && s > l.HK;
            })(t, u, [o.Z, i.Z]),
          [t, u],
        );
      }
    },
    286694: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(442837),
        o = n(481060),
        a = n(592125),
        l = n(430824),
        u = n(496675),
        s = n(594174),
        d = n(471253),
        c = n(88751),
        E = n(981631),
        I = n(689938);
      function _(e, t, n) {
        var _;
        let T = a.Z.getChannel(n),
          f = (0, i.e7)([l.Z], () => l.Z.getGuild(t), [t]),
          p = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, n), [
            n,
            e.id,
          ]),
          A =
            (null === (_ = s.default.getCurrentUser()) || void 0 === _
              ? void 0
              : _.id) === e.id,
          N = (0, i.e7)(
            [u.Z],
            () =>
              null != n &&
              u.Z.canWithPartialContext(E.Plq.MUTE_MEMBERS, { channelId: n }),
            [n],
          );
        return null != T && null != f && (N || A) && p.speaker
          ? (0, r.jsx)(o.MenuItem, {
              id: "audience",
              label: A
                ? I.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE
                : I.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
              action: () => {
                A ? (0, d.yi)(T) : (0, d.hz)(e, T);
              },
            })
          : null;
      }
    },
    757387: function (e, t, n) {
      n.r(t);
      var r = n(735250);
      n(470079);
      var i = n(442837),
        o = n(481060),
        a = n(239091),
        l = n(883385),
        u = n(108843),
        s = n(911969),
        d = n(947440),
        c = n(100527),
        E = n(441061),
        I = n(167675),
        _ = n(737013),
        T = n(607783),
        f = n(299206),
        p = n(976192),
        A = n(819403),
        N = n(286694),
        S = n(592125),
        h = n(777658),
        O = n(858488),
        g = n(185457),
        y = n(933409),
        Z = n(570870),
        M = n(389052),
        m = n(24311),
        R = n(332576),
        G = n(710631),
        b = n(297047),
        C = n(88966),
        v = n(712301),
        D = n(991307),
        U = n(725119),
        L = n(931617),
        w = n(700994),
        P = n(332031),
        x = n(981631),
        H = n(689938);
      t.default = (0, u.Z)(
        (0, l.Z)(
          function (e) {
            let {
                user: t,
                guildId: n,
                channel: l,
                showMediaItems: u = !1,
                showChatItems: c = !0,
                showChannelCallItems: B = !1,
                showModalItems: k = !0,
                showStageChannelItems: F = !1,
                context: V,
                onSelect: j,
                onHeightUpdate: W,
                viewingChannelId: K,
              } = e,
              z = {
                page: x.ZY5.GUILD_CHANNEL,
                section: x.jXE.CHAT_USERNAME,
                object: x.qAy.CONTEXT_MENU_ITEM,
              },
              Y = (0, U.Z)({ userId: t.id, guildId: n, channelId: l.id }),
              q = (0, b.Z)(t, n, V),
              X = (0, C.Z)(t.id, V),
              Q = (0, P.Z)(t.id),
              $ = (0, m.Z)({ user: t, context: V }),
              J = (0, g.Z)({
                user: t,
                guildId: n,
                channelId: l.id,
                context: V,
              }),
              ee = (0, O.Z)({ user: t }),
              et = (0, w.Z)(t.id),
              en = (0, D.Z)(t.id),
              er = (0, T.B)({
                userId: t.id,
                channelId: l.id,
                guildId: l.getGuildId(),
                location: "GuildChannelUserContextMenu",
              }),
              ei = (0, p.Z)({
                guildId: n,
                userId: t.id,
                analyticsLocation: z,
                context: V,
              }),
              eo = (0, G.Z)({ user: t, guildId: n }),
              ea = (0, d.Z)(null, t),
              el = (0, h.Z)(t),
              eu = (0, M.Z)({ user: t }),
              es = (0, y.Z)(t, n, l.id),
              ed = (0, L.Z)(t.id, n),
              ec = (0, v.Z)(t, n),
              eE = (0, f.Z)({ id: t.id, label: H.Z.Messages.COPY_ID_USER }),
              eI = (0, R.Z)(t.id, l.id),
              e_ = (0, I.Z)(t.id),
              eT = (0, E.Z)(l.id),
              ef = (0, A.Z)(t),
              ep = (0, N.Z)(t, n, l.id),
              eA = (0, i.e7)([S.Z], () =>
                null != K ? S.Z.getChannel(K) : null,
              ),
              eN = (0, Z.Z)({
                commandType: s.yU.USER,
                commandTargetId: t.id,
                channel: null != eA ? eA : l,
                guildId: n,
                onHeightUpdate: W,
                context: V,
              }),
              eS = (0, _.Z)(t.id),
              eh = t.isNonUserBot();
            return (0, r.jsxs)(o.Menu, {
              navId: "user-context",
              onClose: a.Zy,
              "aria-label": H.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: j,
              children: [
                !eh &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsxs)(o.MenuGroup, { children: [ef, F && ep] }),
                      (0, r.jsxs)(o.MenuGroup, {
                        children: [k && Y, c && q, X, $, k && J, k && ee, Q],
                      }),
                      u && (0, r.jsx)(o.MenuGroup, { children: et }),
                      (0, r.jsx)(o.MenuGroup, { children: k && ea }),
                      (0, r.jsxs)(o.MenuGroup, {
                        children: [
                          u && en,
                          u && er,
                          u && eI,
                          k && ei,
                          eN,
                          k && eo,
                          el,
                          k && eu,
                          B && eS,
                        ],
                      }),
                      (0, r.jsx)(o.MenuGroup, { children: es }),
                      (0, r.jsxs)(o.MenuGroup, { children: [ed, ec] }),
                      B && (0, r.jsxs)(o.MenuGroup, { children: [eT, e_] }),
                    ],
                  }),
                (0, r.jsx)(o.MenuGroup, { children: eE }),
              ],
            });
          },
          { object: x.qAy.CONTEXT_MENU },
        ),
        [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU],
      );
    },
    570870: function (e, t, n) {
      var r = n(735250),
        i = n(470079),
        o = n(512722),
        a = n.n(o),
        l = n(442837),
        u = n(481060),
        s = n(10718),
        d = n(667204),
        c = n(826298),
        E = n(276022),
        I = n(978983),
        _ = n(430824),
        T = n(594174),
        f = n(981631),
        p = n(689079),
        A = n(689938),
        N = n(359522);
      t.Z = (e) => {
        let t,
          {
            commandType: n,
            commandTargetId: o,
            channel: S,
            guildId: h,
            onHeightUpdate: O,
            context: g,
          } = e,
          y = (0, l.e7)([_.Z], () => _.Z.getGuild(null != h ? h : S.guild_id)),
          Z = (0, l.e7)([T.default], () => T.default.getUser(o)),
          M = (0, E.Z)({
            user: Z,
            guildId: null == y ? void 0 : y.id,
            channel: S,
            context: g,
          }),
          {
            commands: m,
            sectionDescriptors: R,
            loading: G,
          } = s.wi(S, { commandTypes: [n] }, { limit: p.lr }),
          { sections: b } = i.useMemo(() => {
            let e = {};
            return (
              R.forEach((t) => {
                e[t.id] = t;
              }),
              { sections: e }
            );
          }, [R]),
          C = i.useRef(G.current);
        i.useEffect(() => {
          G.current !== C.current &&
            ((C.current = G.current), null == O || O());
        }, [G, O]);
        let v = i.useCallback(
          (e) => {
            a()(null != S, "menu item should not show if channel is null");
            let t = b[e.applicationId],
              n = null != t ? (0, c.ky)(t) : void 0;
            return (0, r.jsx)(
              u.MenuItem,
              {
                id: e.id,
                label: e.displayName,
                iconLeft: () =>
                  null != n
                    ? (0, r.jsx)(n, {
                        channel: S,
                        section: t,
                        width: 18,
                        height: 18,
                        selectable: !1,
                      })
                    : null,
                action: () => {
                  (0, d.Z)({
                    command: e,
                    optionValues: {},
                    context: { channel: S, guild: y },
                    commandTargetId: o,
                  });
                },
              },
              e.id,
            );
          },
          [S, y, o, b],
        );
        if (
          (G.current
            ? (t = (0, r.jsx)(
                u.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, r.jsx)(I.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((t =
                0 === m.length
                  ? (0, r.jsx)(
                      u.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: A.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : m.map(v)),
              null != M &&
                (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                    t,
                    (0, r.jsx)(u.MenuSeparator, {}, "separator"),
                    M,
                  ],
                }))),
          !f.TPd.TEXTUAL.has(S.type))
        ) {
          if (null == M) return null;
          t = M;
        }
        return (0, r.jsx)(u.MenuItem, {
          id: "apps",
          label: A.Z.Messages.APPS,
          listClassName: N.list,
          children: t,
        });
      };
    },
    936124: function (e, t, n) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    882441: function (e, t, n) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    359522: function (e, t, n) {
      e.exports = { list: "list_fd4745" };
    },
    480881: function (e, t, n) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    522425: function (e, t, n) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
    892816: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      let r = {
        "SHA-1": { outputLength: 20, blockSize: 64 },
        "SHA-256": { outputLength: 32, blockSize: 64 },
        "SHA-384": { outputLength: 48, blockSize: 128 },
        "SHA-512": { outputLength: 64, blockSize: 128 },
      };
      function i(e, t, n, i, a = "SHA-256") {
        return new Promise((l, u) => {
          a in r ||
            u(
              RangeError(
                `Valid hash algorithm values are any of ${Object.keys(r).toString()}`,
              ),
            ),
            "string" == typeof e
              ? (e = new TextEncoder().encode(e))
              : e instanceof ArrayBuffer
                ? (e = new Uint8Array(e))
                : ArrayBuffer.isView(e) ||
                  u(
                    RangeError(
                      "P should be string, ArrayBuffer, TypedArray, DataView",
                    ),
                  ),
            "string" == typeof t
              ? (t = new TextEncoder().encode(t))
              : t instanceof ArrayBuffer
                ? (t = new Uint8Array(t))
                : ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : u(
                      RangeError(
                        "S should be string, ArrayBuffer, TypedArray, DataView",
                      ),
                    ),
            crypto.subtle
              .importKey("raw", e, "PBKDF2", !1, ["deriveBits"])
              .then(
                (s) => {
                  let d = { name: "PBKDF2", hash: a, salt: t, iterations: n };
                  crypto.subtle.deriveBits(d, s, 8 * i).then(
                    (e) => l(e),
                    (s) => {
                      (async function (e, t, n, i, a) {
                        if (!(a in r))
                          throw RangeError(
                            `Valid hash algorithm values are any of ${Object.keys(r).toString()}`,
                          );
                        if (!Number.isInteger(n) || n <= 0)
                          throw RangeError("c must be a positive integer");
                        let l = r[a].outputLength;
                        if (
                          !Number.isInteger(i) ||
                          i <= 0 ||
                          i >= (4294967296 - 1) * l
                        )
                          throw RangeError(
                            "dkLen must be a positive integer < (2 ** 32 - 1) * hLen",
                          );
                        let u = Math.ceil(i / l),
                          s = i - (u - 1) * l,
                          d = Array(u);
                        0 === e.byteLength &&
                          (e = new Uint8Array(r[a].blockSize));
                        let c = await crypto.subtle.importKey(
                            "raw",
                            e,
                            { name: "HMAC", hash: { name: a } },
                            !0,
                            ["sign"],
                          ),
                          E = async function (e, t) {
                            return new Uint8Array(
                              await crypto.subtle.sign("HMAC", e, t),
                            );
                          };
                        for (let e = 0; e < u; e++)
                          d[e] = await I(c, t, n, e + 1);
                        async function I(e, t, n, r) {
                          let i = await E(
                              e,
                              o(
                                t,
                                (function (e) {
                                  let t = new ArrayBuffer(4);
                                  return (
                                    new DataView(t).setUint32(0, e, !1),
                                    new Uint8Array(t)
                                  );
                                })(r),
                              ),
                            ),
                            a = i;
                          for (let t = 1; t < n; t++)
                            (function (e, t) {
                              for (let n = 0; n < e.length; n++) e[n] ^= t[n];
                            })(i, (a = await E(e, a)));
                          return i;
                        }
                        return (
                          (d[u - 1] = d[u - 1].slice(0, s)), o(...d).buffer
                        );
                      })(e, t, n, i, a).then(
                        (e) => l(e),
                        (e) => u(e),
                      );
                    },
                  );
                },
                (e) => u(e),
              );
        });
      }
      function o(...e) {
        let t = e.reduce((e, t) => e + t.length, 0);
        if (0 === e.length) throw RangeError("Cannot concat no arrays");
        let n = new Uint8Array(t),
          r = 0;
        for (let t of e) n.set(t, r), (r += t.length);
        return n;
      }
    },
    259137: function (e, t, n) {
      n.d(t, {
        f3: function () {
          return u;
        },
      });
      var r = n(892816);
      let i = function (e) {
          function t(e, t) {
            return (e << t) | (e >>> (32 - t));
          }
          let n = e.slice(0);
          for (let e = 8; e > 0; e -= 2)
            (n[4] ^= t(n[0] + n[12], 7)),
              (n[8] ^= t(n[4] + n[0], 9)),
              (n[12] ^= t(n[8] + n[4], 13)),
              (n[0] ^= t(n[12] + n[8], 18)),
              (n[9] ^= t(n[5] + n[1], 7)),
              (n[13] ^= t(n[9] + n[5], 9)),
              (n[1] ^= t(n[13] + n[9], 13)),
              (n[5] ^= t(n[1] + n[13], 18)),
              (n[14] ^= t(n[10] + n[6], 7)),
              (n[2] ^= t(n[14] + n[10], 9)),
              (n[6] ^= t(n[2] + n[14], 13)),
              (n[10] ^= t(n[6] + n[2], 18)),
              (n[3] ^= t(n[15] + n[11], 7)),
              (n[7] ^= t(n[3] + n[15], 9)),
              (n[11] ^= t(n[7] + n[3], 13)),
              (n[15] ^= t(n[11] + n[7], 18)),
              (n[1] ^= t(n[0] + n[3], 7)),
              (n[2] ^= t(n[1] + n[0], 9)),
              (n[3] ^= t(n[2] + n[1], 13)),
              (n[0] ^= t(n[3] + n[2], 18)),
              (n[6] ^= t(n[5] + n[4], 7)),
              (n[7] ^= t(n[6] + n[5], 9)),
              (n[4] ^= t(n[7] + n[6], 13)),
              (n[5] ^= t(n[4] + n[7], 18)),
              (n[11] ^= t(n[10] + n[9], 7)),
              (n[8] ^= t(n[11] + n[10], 9)),
              (n[9] ^= t(n[8] + n[11], 13)),
              (n[10] ^= t(n[9] + n[8], 18)),
              (n[12] ^= t(n[15] + n[14], 7)),
              (n[13] ^= t(n[12] + n[15], 9)),
              (n[14] ^= t(n[13] + n[12], 13)),
              (n[15] ^= t(n[14] + n[13], 18));
          for (let t = 0; t < 16; t++) e[t] = n[t] + e[t];
        },
        o = function (e, t) {
          for (let n = 0; n < e.length; n++) e[n] ^= t[n];
        },
        a = function (e) {
          let t = e.byteLength / 128,
            n = 16 * (2 * t - 1),
            r = e.slice(n, n + 16),
            a = new Uint32Array(e.length / 2),
            l = !0;
          for (let n = 0; n < 2 * t; n++) {
            let t = 16 * n;
            o(r, e.subarray(t, t + 16)), i(r);
            let u = 16 * (n >> 1);
            if (l) for (let t = 0; t < 16; t++) e[u + t] = r[t];
            else for (let e = 0; e < 16; e++) a[u + e] = r[e];
            l = !l;
          }
          let u = 16 * t;
          for (let t = 0; t < u; t++) e[u + t] = a[t];
        },
        l = function (e, t) {
          let n = e.byteLength / 128,
            r = Array(t);
          for (let n = 0; n < t; n++) (r[n] = e.slice(0)), a(e);
          for (let i = 0; i < t; i++) {
            let i =
              new DataView(e.buffer, 64 * (2 * n - 1), 64).getUint32(0, !0) % t;
            o(e, r[i]), a(e);
          }
        },
        u = async function (e, t, n, i) {
          if ("string" == typeof e) e = new TextEncoder().encode(e);
          else if (e instanceof ArrayBuffer) e = new Uint8Array(e);
          else if (!ArrayBuffer.isView(e))
            throw RangeError(
              "P should be string, ArrayBuffer, TypedArray, DataView",
            );
          if ("string" == typeof t) t = new TextEncoder().encode(t);
          else if (t instanceof ArrayBuffer) t = new Uint8Array(t);
          else if (!ArrayBuffer.isView(t))
            throw RangeError(
              "S should be string, ArrayBuffer, TypedArray, DataView",
            );
          if (!Number.isInteger(n) || n <= 0 || n > 137438953440)
            throw RangeError(
              "dkLen is the intended output length in octets of the derived key; a positive integer less than or equal to (2^32 - 1) * hLen where hLen is 32",
            );
          let o = void 0 !== i && void 0 !== i.N ? i.N : 131072,
            a = void 0 !== i && void 0 !== i.r ? i.r : 8,
            u = void 0 !== i && void 0 !== i.p ? i.p : 1;
          if (!Number.isInteger(o) || o <= 0 || 0 != (o & (o - 1)))
            throw RangeError("N must be a power of 2");
          if (
            !Number.isInteger(a) ||
            a <= 0 ||
            !Number.isInteger(u) ||
            u <= 0 ||
            u * a > 1073741823.75
          )
            throw RangeError(
              "Parallelization parameter p and blocksize parameter r must be positive integers satisfying p ≤ (2^32− 1) * hLen / MFLen where hLen is 32 and MFlen is 128 * r.",
            );
          let s = new Uint32Array(await (0, r.Z)(e, t, 1, 128 * u * a));
          for (let e = 0; e < u; e++) {
            let t = 32 * a,
              n = e * t,
              r = s.slice(n, n + t);
            l(r, o);
            for (let e = 0; e < 32 * a; e++) s[n + e] = r[e];
          }
          return await (0, r.Z)(e, s, 1, n);
        };
    },
  },
]);
//# sourceMappingURL=a00810016a315ebc5f61.js.map
