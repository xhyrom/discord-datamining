"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62348"],
  {
    139387: function (e, n, t) {
      var i = t(570140),
        r = t(434404),
        u = t(821864),
        l = t(308063);
      n.Z = {
        init() {
          i.Z.dispatch({ type: "INTEGRATION_SETTINGS_INIT" });
        },
        setSection(e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_SET_SECTION",
            section: e,
            sectionId: n,
          });
        },
        startEditingCommandPermissions(e) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
            commandId: e,
          });
        },
        stopEditingCommandPermissions(e) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
            commandId: e,
          });
        },
        startEditingIntegration(e) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
            integrationId: e,
          });
        },
        stopEditingIntegration() {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION",
          });
        },
        updateIntegration(e) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
            settings: e,
          });
        },
        startEditingWebhook(e) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
            webhookId: e,
          });
        },
        stopEditingWebhook() {
          i.Z.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK" });
        },
        updateWebhook(e) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
            settings: e,
          });
        },
        async saveApplicationPermissions(e, n, t) {
          try {
            i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await u.U3({
                applicationId: e,
                commandId: e,
                defaultEveryoneValue: !0,
                defaultEverywhereValue: !0,
                guildId: n,
                permissions: t,
              }),
              i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (e) {
            i.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: e.body,
            });
          }
        },
        async saveIntegration(e, n) {
          try {
            i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await r.Z.updateIntegration(
                e,
                n.id,
                n.expire_behavior,
                n.expire_grace_period,
                n.enable_emoticons,
              ),
              i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (e) {
            i.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: e.body,
            });
          }
        },
        async saveWebhook(e, n) {
          try {
            i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await l.Z.update(e, n.id, n),
              i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (e) {
            i.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: e.body,
            });
          }
        },
      };
    },
    308063: function (e, n, t) {
      var i = t(392711),
        r = t.n(i),
        u = t(544891),
        l = t(570140),
        a = t(981631);
      let o = ["Spidey Bot", "Captain Hook"];
      n.Z = {
        fetchForGuild(e) {
          l.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            u.tn
              .get({ url: a.ANM.GUILD_WEBHOOKS(e), oldFormErrors: !0 })
              .then((n) => {
                let { body: t } = n;
                return l.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  webhooks: t,
                });
              })
              .catch((n) => {
                let { body: t } = n;
                l.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  error: t.message,
                });
              });
        },
        fetchForChannel(e, n) {
          l.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e, channelId: n }),
            u.tn
              .get({ url: a.ANM.CHANNEL_WEBHOOKS(n), oldFormErrors: !0 })
              .then((t) => {
                let { body: i } = t;
                return l.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  channelId: n,
                  webhooks: i,
                });
              });
        },
        create: (e, n, t) => (
          null == t && (t = o[r().random(0, o.length - 1)]),
          u.tn
            .post({
              url: a.ANM.CHANNEL_WEBHOOKS(n),
              body: { name: t },
              oldFormErrors: !0,
            })
            .then((n) => {
              let { body: t } = n;
              return (
                l.Z.dispatch({
                  type: "WEBHOOK_CREATE",
                  guildId: e,
                  webhook: t,
                }),
                t
              );
            })
        ),
        delete: (e, n) =>
          u.tn.del({ url: a.ANM.WEBHOOK(n), oldFormErrors: !0 }).then(() => {
            l.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: n });
          }),
        update: (e, n, t) =>
          u.tn
            .patch({ url: a.ANM.WEBHOOK(n), body: t, oldFormErrors: !0 })
            .then((n) => {
              let { body: t } = n;
              return (
                l.Z.dispatch({
                  type: "WEBHOOK_UPDATE",
                  guildId: e,
                  webhook: t,
                }),
                t
              );
            }),
      };
    },
    394059: function (e, n, t) {
      var i, r;
      t.d(n, {
        K: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.STREAM = 0)] = "STREAM"),
        (r[(r.VIDEO = 1)] = "VIDEO");
    },
    27584: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(442837),
        r = t(846027),
        u = t(314897),
        l = t(131951),
        a = t(981631),
        o = t(65154);
      function d(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.Yn.DEFAULT,
          t = (0, i.e7)([u.default], () => u.default.getId()),
          d = (0, i.e7)(
            [l.Z],
            () => l.Z.supports(o.AN.DISABLE_VIDEO) && l.Z.isVideoEnabled(),
          ),
          s = (0, i.e7)([l.Z], () => l.Z.isLocalVideoDisabled(t, n), [t, n]),
          c = null == e || e === t;
        return [
          c && (d || s),
          s,
          (e) => {
            let i = e ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(t, i, n);
          },
        ];
      }
    },
    295510: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(153867),
        u = t(468026),
        l = t(394059),
        a = t(689938);
      function o(e) {
        let { type: n, onConfirm: t, ...o } = e,
          d =
            n === l.K.STREAM
              ? a.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : a.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          s =
            n === l.K.STREAM
              ? a.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : a.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, i.jsx)(u.default, {
          confirmText: a.Z.Messages.CONFIRM,
          secondaryConfirmText: a.Z.Messages.DONT_ASK_AGAIN,
          title: d,
          cancelText: a.Z.Messages.CANCEL,
          onConfirm: t,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              t();
          },
          body: s,
          ...o,
        });
      }
    },
    441061: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(442837),
        u = t(481060),
        l = t(475179),
        a = t(358221),
        o = t(689938);
      function d(e) {
        let n = (0, r.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(e));
        return (0, i.jsx)(u.MenuCheckboxItem, {
          id: "no-video-hide",
          label: o.Z.Messages.STREAM_SHOW_NON_VIDEO,
          checked: !n,
          action: () => l.Z.toggleVoiceParticipantsHidden(e, !n),
        });
      }
    },
    167675: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var r = t(442837),
        u = t(481060),
        l = t(740492),
        a = t(27584),
        o = t(295510),
        d = t(394059),
        s = t(65154),
        c = t(689938);
      function _(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          [t, _, E] = (0, a.Z)(e, n),
          I = (0, r.e7)(
            [l.ZP],
            () => l.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return t
          ? (0, i.jsx)(u.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.Z.Messages.SHOW_SELF_VIDEO,
              checked: !_,
              action: () => {
                if (I || _) return E(!_);
                (0, u.openModal)((e) =>
                  (0, i.jsx)(o.Z, {
                    ...e,
                    type: d.K.VIDEO,
                    onConfirm: () => E(!_),
                  }),
                );
              },
            })
          : null;
      }
    },
    276022: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return T;
        },
      }),
        t(653041);
      var i = t(735250),
        r = t(470079),
        u = t(442837),
        l = t(481060),
        a = t(139387),
        o = t(230711),
        d = t(213459),
        s = t(434404),
        c = t(430824),
        _ = t(496675),
        E = t(981631),
        I = t(689938);
      function T(e) {
        let { user: n, guildId: t, channel: T, context: N } = e,
          S = c.Z.getGuild(t),
          A = (0, u.e7)([_.Z], () =>
            null != S ? _.Z.can(E.Plq.MANAGE_GUILD, S) : null,
          ),
          p = (0, d.em)(T, !0, !0),
          O = (0, d.PL)(!0, !0),
          { isUserApp: f, isGuildApp: M } = r.useMemo(() => {
            var e, t, i, r;
            if ((null == n ? void 0 : n.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let u = Object.values(
                null !==
                  (i =
                    null === (e = p.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {},
              ),
              l = Object.values(
                null !==
                  (r =
                    null === (t = O.result) || void 0 === t
                      ? void 0
                      : t.sections) && void 0 !== r
                  ? r
                  : {},
              );
            return {
              isGuildApp: u.some((e) => {
                var t;
                return (
                  (null === (t = e.descriptor.application) || void 0 === t
                    ? void 0
                    : t.id) === (null == n ? void 0 : n.id)
                );
              }),
              isUserApp: l.some((e) => {
                var t;
                return (
                  (null === (t = e.descriptor.application) || void 0 === t
                    ? void 0
                    : t.id) === (null == n ? void 0 : n.id)
                );
              }),
            };
          }, [p, O, null == n ? void 0 : n.id]),
          h = r.useCallback(() => {
            if ((null == S ? void 0 : S.id) != null)
              s.Z.open(S.id, E.pNK.INTEGRATIONS),
                a.Z.setSection(E.b4C.APPLICATION, null == n ? void 0 : n.id);
          }, [null == n ? void 0 : n.id, null == S ? void 0 : S.id]),
          Z = r.useCallback(() => {
            o.Z.open(E.oAB.AUTHORIZED_APPS);
          }, []),
          R = N === E.IlC.POPOUT;
        if (!(null == n ? void 0 : n.bot) || !A || R || (!M && !f)) return null;
        let C = [];
        return (
          M &&
            C.push(
              (0, i.jsx)(
                l.MenuItem,
                {
                  id: "manage-integration",
                  label: I.Z.Messages.MANAGE_INTEGRATION,
                  action: h,
                },
                "manage-integration",
              ),
            ),
          f &&
            C.push(
              (0, i.jsx)(
                l.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: I.Z.Messages.MANAGE_AUTHORIZED_APP,
                  action: Z,
                },
                "manage-authorized-app",
              ),
            ),
          C
        );
      }
    },
    251794: function (e, n, t) {
      t.d(n, {
        q: function () {
          return l;
        },
        z: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(481060);
      function u(e, n, u) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await t.e("72920").then(t.bind(t, 109730));
          return (t) =>
            (0, i.jsx)(r, {
              guildId: e,
              userId: n,
              anaylticsLocations: u,
              ...t,
            });
        });
      }
      function l(e, n, u) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await t.e("76233").then(t.bind(t, 171494));
          return (t) =>
            (0, i.jsx)(r, {
              guildId: e,
              userId: n,
              anaylticsLocations: u,
              ...t,
            });
        });
      }
    },
    910693: function (e, n, t) {
      t.d(n, {
        BG: function () {
          return T;
        },
        aY: function () {
          return u;
        },
        dW: function () {
          return N;
        },
        gm: function () {
          return I;
        },
        h1: function () {
          return A;
        },
        jQ: function () {
          return l;
        },
        sE: function () {
          return S;
        },
      });
      var i,
        r,
        u,
        l,
        a = t(470079),
        o = t(100527),
        d = t(367907),
        s = t(314897),
        c = t(626135),
        _ = t(981631);
      function E(e, n, t) {
        var i;
        let r = {
          ...n,
          ...(0, d.hH)(null !== (i = n.guild_id) && void 0 !== i ? i : t),
        };
        c.default.track(e, r);
      }
      function I(e) {
        return a.useCallback(
          (n) => {
            !(function (e) {
              let n = { guild_id: e, location: o.Z.MEMBER_SAFETY_PAGE };
              E(_.rMx.MOD_DASH_SEARCH_MEMBERS, n);
            })(e);
          },
          [e],
        );
      }
      function T(e) {
        return a.useCallback(
          (n) => {
            !(function (e, n) {
              let t = {
                selected_role_count: n.size,
                guild_id: e,
                location: o.Z.MEMBER_SAFETY_PAGE,
              };
              E(_.rMx.MOD_DASH_FILTER_ROLES, t);
            })(e, n);
          },
          [e],
        );
      }
      ((i = u || (u = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (i.COMMUNICATION_DISABLED = "communication_disabled"),
        (i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (i.USERNAME_QUARANTINED = "username_quarantined");
      function N(e) {
        return a.useCallback(
          (n) => {
            !(function (e, n) {
              let t = {
                flag_type: n,
                guild_id: e,
                location: o.Z.MEMBER_SAFETY_PAGE,
              };
              E(_.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t);
            })(e, n);
          },
          [e],
        );
      }
      function S(e, n) {
        let { location: t, targetUserId: i, targets: r, locations: u } = n;
        return a.useCallback(
          (n) => {
            let l = {
              action_type: n,
              mod_user_id: s.default.getId(),
              guild_id: e,
              location: t,
              locations: u,
              target_user_id: null != i ? i : void 0,
              targets: null != r ? r : void 0,
            };
            E(_.rMx.MODERATION_ACTION, l);
          },
          [e, t, i, r, u],
        );
      }
      function A(e, n) {
        E(_.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: e, location: n });
      }
      ((r = l || (l = {})).BAN = "ban"),
        (r.KICK = "kick"),
        (r.MUTE = "mute"),
        (r.TIMEOUT = "timeout"),
        (r.ADD_ROLE = "add_role"),
        (r.REMOVE_ROLE = "remove_role"),
        (r.COPY_ID = "copy_id"),
        (r.CHANGE_NICKNAME = "change_nickname");
    },
    821864: function (e, n, t) {
      t.d(n, {
        I4: function () {
          return _;
        },
        Sn: function () {
          return s;
        },
        U3: function () {
          return I;
        },
        Ui: function () {
          return E;
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
      var i = t(544891),
        r = t(570140),
        u = t(555573),
        l = t(581364),
        a = t(981631);
      function o() {
        r.Z.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function d(e, n, t) {
        r.Z.dispatch({
          applicationId: e,
          commandId: n,
          permissions: t,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function s(e, n) {
        i.tn.get(a.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, n)).then(
          (t) => {
            r.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
              applicationId: n,
              commands: t.body.application_commands,
              guildId: e,
              permissions: t.body.permissions,
            });
          },
          () => {
            r.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
              applicationId: n,
            });
          },
        );
      }
      async function c(e, n, t) {
        let u = [];
        try {
          let r = await i.tn.get(
            a.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, n, t),
          );
          r.ok && (u = r.body.permissions);
        } catch (i) {
          if (404 !== i.status) {
            r.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
              applicationId: e,
              commandId: t,
              guildId: n,
            });
            return;
          }
        }
        r.Z.dispatch({
          type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
          applicationId: e,
          commandId: t,
          guildId: n,
          permissions: u,
        });
      }
      function _(e) {
        r.Z.dispatch({
          applicationId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_INIT",
        });
      }
      function E(e) {
        r.Z.dispatch({
          commandId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_RESET",
        });
      }
      async function I(e) {
        let {
            applicationId: n,
            commandId: t,
            defaultEveryoneValue: i,
            defaultEverywhereValue: a,
            guildId: o,
            permissions: d,
          } = e,
          s =
            t === n
              ? (function (e, n, t, i) {
                  if (!t || !i) return n;
                  let r = { [e]: t, [(0, l.bD)(e)]: i };
                  return n.filter((e) => {
                    let n = r[e.id];
                    return null == n || e.permission !== n;
                  });
                })(o, d, i, a)
              : d,
          c = await u.dh(n, o, t, s);
        c.ok &&
          r.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: n,
            commandId: t,
            guildId: o,
            permissions: c.body.permissions,
          });
      }
    },
    978983: function (e, n, t) {
      var i = t(735250);
      t(470079);
      var r = t(481060),
        u = t(882441);
      n.Z = () =>
        (0, i.jsx)("div", {
          className: u.loadingWrapper,
          children: (0, i.jsx)(r.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    760373: function (e, n, t) {
      var i, r, u, l;
      t.d(n, {
        $J: function () {
          return o;
        },
        GB: function () {
          return S;
        },
        HK: function () {
          return N;
        },
        KN: function () {
          return I;
        },
        WK: function () {
          return _;
        },
        Xj: function () {
          return A;
        },
        YP: function () {
          return c;
        },
        ak: function () {
          return T;
        },
        iQ: function () {
          return E;
        },
        l4: function () {
          return a;
        },
        s9: function () {
          return d;
        },
        tu: function () {
          return r;
        },
        y6: function () {
          return s;
        },
      });
      let a = "",
        o = "",
        d = "",
        s = 5,
        c = 30,
        _ = 3,
        E = 5,
        I = 60,
        T = 4;
      ((u = i || (i = {})).MATCH = "match"),
        (u.OTHER_USER_ALREADY_VERIFIED = "other_user_already_verified"),
        (u.MISMATCH = "mismatch"),
        (u.UNABLE_TO_VERIFY = "unable_to_verify"),
        (u.OTHER_USER_DISCONNECTED = "other_user_disconnected"),
        (u.CURRENT_USER_DISCONNECTED = "current_user_disconnected");
      let N = 100;
      ((l = r || (r = {})).RTC_DEBUG_PANEL = "rtc_debug_panel"),
        (l.RTC_SECURE_FRAMES = "rtc_secure_frames");
      let S = 1,
        A = 0;
    },
    977059: function (e, n, t) {
      t.d(n, {
        c: function () {
          return i;
        },
      });
      let i = (0, t(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
    },
    441894: function (e, n, t) {
      t.d(n, {
        J: function () {
          return o;
        },
      }),
        t(47120);
      var i = t(442837),
        r = t(592125),
        u = t(19780),
        l = t(977059),
        a = t(760373);
      function o(e) {
        let { channelId: n, location: t } = e,
          { enabled: o } = l.c.useExperiment({ location: t });
        return (0, i.e7)(
          [u.Z, r.Z],
          () =>
            (function (e, n) {
              var t;
              let [i, l] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [u.Z, r.Z];
              if (!n || null == e || i.getChannelId() !== e) return !1;
              let o = l.getChannel(e);
              if (null == o || o.isGuildStageVoice()) return !1;
              let d =
                null === (t = i.getSecureFramesState()) || void 0 === t
                  ? void 0
                  : t.version;
              return null != d && d > a.HK;
            })(n, o, [u.Z, r.Z]),
          [n, o],
        );
      }
    },
    471253: function (e, n, t) {
      t.d(n, {
        DT: function () {
          return M;
        },
        Ef: function () {
          return C;
        },
        HO: function () {
          return R;
        },
        NZ: function () {
          return g;
        },
        Pq: function () {
          return Z;
        },
        Q1: function () {
          return A;
        },
        RK: function () {
          return O;
        },
        _0: function () {
          return p;
        },
        hz: function () {
          return h;
        },
        yi: function () {
          return f;
        },
      });
      var i = t(512722),
        r = t.n(i),
        u = t(149765),
        l = t(544891),
        a = t(493683);
      t(749210);
      var o = t(911969),
        d = t(367907),
        s = t(944486),
        c = t(979651),
        _ = t(700785),
        E = t(922482),
        I = t(192079),
        T = t(706058),
        N = t(590415),
        S = t(981631);
      function A(e, n) {
        let t = e.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          n && (0, d.yw)(S.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, I.s$)(e) }),
          l.tn.patch({
            url: S.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function p(e, n) {
        let t = e.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          l.tn.patch({
            url: S.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function O(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == e ? void 0 : e.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let u = c.Z.getVoiceStateForChannel(e.id);
        return (
          (0, N.gf)(u) === N.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, d.yw)(S.rMx.PROMOTED_TO_SPEAKER, { ...(0, I.s$)(e) }),
          l.tn.patch({
            url: S.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: n,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(t ? { silent: t } : {}),
            },
          })
        );
      }
      function f(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          r()(null != n, "This channel cannot be guildless."),
          l.tn.patch({
            url: S.ANM.UPDATE_VOICE_STATE(n),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function M(e, n, t) {
        let i = e.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          l.tn.patch({
            url: S.ANM.UPDATE_VOICE_STATE(i, n),
            body: { suppress: t, channel_id: e.id },
          })
        );
      }
      function h(e, n) {
        if (null == n || null == e) return;
        let t = n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          M(n, e.id, !0),
          l.tn.patch({
            url: S.ANM.UPDATE_VOICE_STATE(t, e.id),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function Z(e, n, t) {
        let i = e.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let l = e.permissionOverwrites[i],
          d = { id: i, type: o.BN.ROLE, allow: _.Hn, deny: _.Hn, ...l };
        t
          ? ((d.allow = u.IH(d.allow, n)), (d.deny = u.Od(d.deny, n)))
          : ((d.allow = u.Od(d.allow, n)), (d.deny = u.IH(d.deny, n))),
          a.Z.updatePermissionOverwrite(e.id, d);
      }
      async function R(e, n, t, i) {
        if ("" === n) return;
        s.Z.getVoiceChannelId() !== e.id && (0, E.TM)(e);
        let r = await (0, T.me)(e.id, n, t, i);
        return O(e, !1, !0), r;
      }
      async function C(e, n, t) {
        if ("" !== n) return await (0, T.Dk)(e.id, n, t);
      }
      async function g(e) {
        await (0, T.Ix)(e.id);
      }
    },
    192079: function (e, n, t) {
      t.d(n, {
        ER: function () {
          return c;
        },
        kk: function () {
          return _;
        },
        s$: function () {
          return E;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var i = t(19780),
        r = t(5192),
        u = t(700785),
        l = t(427679),
        a = t(157925),
        o = t(981631),
        d = t(71080),
        s = t(689938);
      function c(e, n, t, i) {
        let u = n[0],
          l = r.ZP.getName(e, t, u),
          a = null != i ? i : n.length;
        return 1 === a && null != u
          ? l
          : null == u
            ? s.Z.Messages.SPEAKING_COUNT.format({ count: a })
            : s.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: l,
                count: a - 1,
              });
      }
      function _(e, n) {
        switch (e) {
          case d.aC.OWNER:
            return s.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case d.aC.ADMINISTRATOR:
            return s.Z.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case d.aC.MEMBER:
          case d.aC.ROLE:
            return n
              ? s.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : s.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case d.aC.EMPTY_STATE:
        }
        return null;
      }
      function E(e) {
        let n = l.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: u.Uu(o.Plq.REQUEST_TO_SPEAK, e)
            ? a.BM.EVERYONE
            : a.BM.NO_ONE,
          stage_instance_id: null == n ? void 0 : n.id,
        };
      }
    },
    706058: function (e, n, t) {
      t.d(n, {
        Dk: function () {
          return l;
        },
        Ix: function () {
          return a;
        },
        me: function () {
          return u;
        },
      });
      var i = t(544891),
        r = t(981631);
      async function u(e, n, t, u, l) {
        return (
          await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
              channel_id: e,
              topic: n,
              privacy_level: t,
              guild_scheduled_event_id: l,
              send_start_notification: u,
            },
          })
        ).body;
      }
      async function l(e, n, t) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(e),
            body: { topic: n, privacy_level: t },
          })
        ).body;
      }
      function a(e) {
        return i.tn.del(r.ANM.STAGE_INSTANCE(e));
      }
    },
    623633: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(442837),
        r = t(592125),
        u = t(944486);
      function l() {
        return (0, i.e7)([u.Z, r.Z], () => {
          let e = u.Z.getVoiceChannelId();
          if (null != e) {
            let n = r.Z.getChannel(e);
            if (null == n ? void 0 : n.isGuildStageVoice()) return n;
          }
          return null;
        });
      }
    },
    286694: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(442837),
        u = t(481060),
        l = t(592125),
        a = t(430824),
        o = t(496675),
        d = t(594174),
        s = t(471253),
        c = t(88751),
        _ = t(981631),
        E = t(689938);
      function I(e, n, t) {
        var I;
        let T = l.Z.getChannel(t),
          N = (0, r.e7)([a.Z], () => a.Z.getGuild(n), [n]),
          S = (0, r.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, t), [
            t,
            e.id,
          ]),
          A =
            (null === (I = d.default.getCurrentUser()) || void 0 === I
              ? void 0
              : I.id) === e.id,
          p = (0, r.e7)(
            [o.Z],
            () =>
              null != t &&
              o.Z.canWithPartialContext(_.Plq.MUTE_MEMBERS, { channelId: t }),
            [t],
          );
        return null != T && null != N && (p || A) && S.speaker
          ? (0, i.jsx)(u.MenuItem, {
              id: "audience",
              label: A
                ? E.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE
                : E.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
              action: () => {
                A ? (0, s.yi)(T) : (0, s.hz)(e, T);
              },
            })
          : null;
      }
    },
    757387: function (e, n, t) {
      t.r(n);
      var i = t(735250);
      t(470079);
      var r = t(442837),
        u = t(481060),
        l = t(239091),
        a = t(883385),
        o = t(108843),
        d = t(911969),
        s = t(947440),
        c = t(100527),
        _ = t(441061),
        E = t(167675),
        I = t(737013),
        T = t(145474),
        N = t(299206),
        S = t(976192),
        A = t(819403),
        p = t(286694),
        O = t(592125),
        f = t(777658),
        M = t(858488),
        h = t(185457),
        Z = t(933409),
        R = t(570870),
        C = t(389052),
        g = t(24311),
        G = t(332576),
        m = t(710631),
        y = t(297047),
        D = t(88966),
        v = t(712301),
        U = t(991307),
        b = t(725119),
        P = t(931617),
        H = t(700994),
        L = t(332031),
        x = t(981631),
        B = t(689938);
      n.default = (0, o.Z)(
        (0, a.Z)(
          function (e) {
            let {
                user: n,
                guildId: t,
                channel: a,
                showMediaItems: o = !1,
                showChatItems: c = !0,
                showChannelCallItems: F = !1,
                showModalItems: V = !0,
                showStageChannelItems: k = !1,
                context: w,
                onSelect: j,
                onHeightUpdate: K,
                viewingChannelId: W,
              } = e,
              Y = {
                page: x.ZY5.GUILD_CHANNEL,
                section: x.jXE.CHAT_USERNAME,
                object: x.qAy.CONTEXT_MENU_ITEM,
              },
              q = (0, b.Z)({ userId: n.id, guildId: t, channelId: a.id }),
              z = (0, y.Z)(n, t, w),
              Q = (0, D.Z)(n.id, w),
              X = (0, L.Z)(n.id),
              $ = (0, g.Z)({ user: n, context: w }),
              J = (0, h.Z)({
                user: n,
                guildId: t,
                channelId: a.id,
                context: w,
              }),
              ee = (0, M.Z)({ user: n }),
              en = (0, H.Z)(n.id),
              et = (0, U.Z)(n.id),
              ei = (0, T.P)({
                userId: n.id,
                channelId: a.id,
                location: "GuildChannelUserContextMenu",
              }),
              er = (0, S.Z)({
                guildId: t,
                userId: n.id,
                analyticsLocation: Y,
                context: w,
              }),
              eu = (0, m.Z)({ user: n, guildId: t }),
              el = (0, s.Z)(null, n),
              ea = (0, f.Z)(n),
              eo = (0, C.Z)({ user: n }),
              ed = (0, Z.Z)(n, t, a.id),
              es = (0, P.Z)(n.id, t),
              ec = (0, v.Z)(n, t),
              e_ = (0, N.Z)({ id: n.id, label: B.Z.Messages.COPY_ID_USER }),
              eE = (0, G.Z)(n.id, a.id),
              eI = (0, E.Z)(n.id),
              eT = (0, _.Z)(a.id),
              eN = (0, A.Z)(n),
              eS = (0, p.Z)(n, t, a.id),
              eA = (0, r.e7)([O.Z], () =>
                null != W ? O.Z.getChannel(W) : null,
              ),
              ep = (0, R.Z)({
                commandType: d.yU.USER,
                commandTargetId: n.id,
                channel: null != eA ? eA : a,
                guildId: t,
                onHeightUpdate: K,
                context: w,
              }),
              eO = (0, I.Z)(n.id),
              ef = n.isNonUserBot();
            return (0, i.jsxs)(u.Menu, {
              navId: "user-context",
              onClose: l.Zy,
              "aria-label": B.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: j,
              children: [
                !ef &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(u.MenuGroup, { children: [eN, k && eS] }),
                      (0, i.jsxs)(u.MenuGroup, {
                        children: [V && q, c && z, Q, $, V && J, V && ee, X],
                      }),
                      o && (0, i.jsx)(u.MenuGroup, { children: en }),
                      (0, i.jsx)(u.MenuGroup, { children: V && el }),
                      (0, i.jsxs)(u.MenuGroup, {
                        children: [
                          o && et,
                          o && ei,
                          o && eE,
                          V && er,
                          ep,
                          V && eu,
                          ea,
                          V && eo,
                          F && eO,
                        ],
                      }),
                      (0, i.jsx)(u.MenuGroup, { children: ed }),
                      (0, i.jsxs)(u.MenuGroup, { children: [es, ec] }),
                      F && (0, i.jsxs)(u.MenuGroup, { children: [eT, eI] }),
                    ],
                  }),
                (0, i.jsx)(u.MenuGroup, { children: e_ }),
              ],
            });
          },
          { object: x.qAy.CONTEXT_MENU },
        ),
        [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU],
      );
    },
    570870: function (e, n, t) {
      var i = t(735250),
        r = t(470079),
        u = t(512722),
        l = t.n(u),
        a = t(442837),
        o = t(481060),
        d = t(10718),
        s = t(667204),
        c = t(826298),
        _ = t(276022),
        E = t(978983),
        I = t(430824),
        T = t(594174),
        N = t(981631),
        S = t(689079),
        A = t(689938),
        p = t(359522);
      n.Z = (e) => {
        let n,
          {
            commandType: t,
            commandTargetId: u,
            channel: O,
            guildId: f,
            onHeightUpdate: M,
            context: h,
          } = e,
          Z = (0, a.e7)([I.Z], () => I.Z.getGuild(null != f ? f : O.guild_id)),
          R = (0, a.e7)([T.default], () => T.default.getUser(u)),
          C = (0, _.Z)({
            user: R,
            guildId: null == Z ? void 0 : Z.id,
            channel: O,
            context: h,
          }),
          {
            commands: g,
            sectionDescriptors: G,
            loading: m,
          } = d.wi(O, { commandTypes: [t] }, { limit: S.lr }),
          { sections: y } = r.useMemo(() => {
            let e = {};
            return (
              G.forEach((n) => {
                e[n.id] = n;
              }),
              { sections: e }
            );
          }, [G]),
          D = r.useRef(m.current);
        r.useEffect(() => {
          m.current !== D.current &&
            ((D.current = m.current), null == M || M());
        }, [m, M]);
        let v = r.useCallback(
          (e) => {
            l()(null != O, "menu item should not show if channel is null");
            let n = y[e.applicationId],
              t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
              o.MenuItem,
              {
                id: e.id,
                label: e.displayName,
                showIconFirst: !0,
                icon: () =>
                  null != t
                    ? (0, i.jsx)(t, {
                        channel: O,
                        section: n,
                        width: 18,
                        height: 18,
                        selectable: !1,
                      })
                    : null,
                action: () => {
                  (0, s.Z)({
                    command: e,
                    optionValues: {},
                    context: { channel: O, guild: Z },
                    commandTargetId: u,
                  });
                },
              },
              e.id,
            );
          },
          [O, Z, u, y],
        );
        if (
          (m.current
            ? (n = (0, i.jsx)(
                o.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(E.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((n =
                0 === g.length
                  ? (0, i.jsx)(
                      o.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: A.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : g.map(v)),
              null != C &&
                (n = (0, i.jsxs)(i.Fragment, {
                  children: [
                    n,
                    (0, i.jsx)(o.MenuSeparator, {}, "separator"),
                    C,
                  ],
                }))),
          !N.TPd.TEXTUAL.has(O.type))
        ) {
          if (null == C) return null;
          n = C;
        }
        return (0, i.jsx)(o.MenuItem, {
          id: "apps",
          label: A.Z.Messages.APPS,
          listClassName: p.list,
          children: n,
        });
      };
    },
    936124: function (e, n, t) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    882441: function (e, n, t) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    359522: function (e, n, t) {
      e.exports = { list: "list_fd4745" };
    },
    480881: function (e, n, t) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    522425: function (e, n, t) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=bcf16d3f980173fd96bd.js.map
