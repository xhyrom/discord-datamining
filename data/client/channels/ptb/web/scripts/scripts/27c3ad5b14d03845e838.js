"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15324"],
  {
    139387: function (e, n, t) {
      var i = t(570140),
        r = t(434404),
        a = t(821864),
        s = t(308063);
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
              await a.U3({
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
              await s.Z.update(e, n.id, n),
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
        a = t(544891),
        s = t(570140),
        l = t(981631);
      let o = ["Spidey Bot", "Captain Hook"];
      n.Z = {
        fetchForGuild(e) {
          s.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            a.tn
              .get({ url: l.ANM.GUILD_WEBHOOKS(e), oldFormErrors: !0 })
              .then((n) => {
                let { body: t } = n;
                return s.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  webhooks: t,
                });
              })
              .catch((n) => {
                let { body: t } = n;
                s.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  error: t.message,
                });
              });
        },
        fetchForChannel(e, n) {
          s.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e, channelId: n }),
            a.tn
              .get({ url: l.ANM.CHANNEL_WEBHOOKS(n), oldFormErrors: !0 })
              .then((t) => {
                let { body: i } = t;
                return s.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  channelId: n,
                  webhooks: i,
                });
              });
        },
        create: (e, n, t) => (
          null == t && (t = o[r().random(0, o.length - 1)]),
          a.tn
            .post({
              url: l.ANM.CHANNEL_WEBHOOKS(n),
              body: { name: t },
              oldFormErrors: !0,
            })
            .then((n) => {
              let { body: t } = n;
              return (
                s.Z.dispatch({
                  type: "WEBHOOK_CREATE",
                  guildId: e,
                  webhook: t,
                }),
                t
              );
            })
        ),
        delete: (e, n) =>
          a.tn.del({ url: l.ANM.WEBHOOK(n), oldFormErrors: !0 }).then(() => {
            s.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: n });
          }),
        update: (e, n, t) =>
          a.tn
            .patch({ url: l.ANM.WEBHOOK(n), body: t, oldFormErrors: !0 })
            .then((n) => {
              let { body: t } = n;
              return (
                s.Z.dispatch({
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
          return u;
        },
      });
      var i = t(442837),
        r = t(846027),
        a = t(314897),
        s = t(131951),
        l = t(981631),
        o = t(65154);
      function u(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.Yn.DEFAULT,
          t = (0, i.e7)([a.default], () => a.default.getId()),
          u = (0, i.e7)(
            [s.Z],
            () => s.Z.supports(o.AN.DISABLE_VIDEO) && s.Z.isVideoEnabled(),
          ),
          d = (0, i.e7)([s.Z], () => s.Z.isLocalVideoDisabled(t, n), [t, n]),
          c = null == e || e === t;
        return [
          c && (u || d),
          d,
          (e) => {
            let i = e ? l.ZUi.DISABLED : l.ZUi.MANUAL_ENABLED;
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
        a = t(468026),
        s = t(394059),
        l = t(689938);
      function o(e) {
        let { type: n, onConfirm: t, ...o } = e,
          u =
            n === s.K.STREAM
              ? l.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : l.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          d =
            n === s.K.STREAM
              ? l.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : l.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, i.jsx)(a.default, {
          confirmText: l.Z.Messages.CONFIRM,
          secondaryConfirmText: l.Z.Messages.DONT_ASK_AGAIN,
          title: u,
          cancelText: l.Z.Messages.CANCEL,
          onConfirm: t,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              t();
          },
          body: d,
          ...o,
        });
      }
    },
    441061: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(442837),
        a = t(481060),
        s = t(475179),
        l = t(358221),
        o = t(689938);
      function u(e) {
        let n = (0, r.e7)([l.Z], () => l.Z.getVoiceParticipantsHidden(e));
        return (0, i.jsx)(a.MenuCheckboxItem, {
          id: "no-video-hide",
          label: o.Z.Messages.STREAM_SHOW_NON_VIDEO,
          checked: !n,
          action: () => s.Z.toggleVoiceParticipantsHidden(e, !n),
        });
      }
    },
    167675: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var r = t(442837),
        a = t(481060),
        s = t(740492),
        l = t(27584),
        o = t(295510),
        u = t(394059),
        d = t(65154),
        c = t(689938);
      function E(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.Yn.DEFAULT,
          [t, E, _] = (0, l.Z)(e, n),
          I = (0, r.e7)(
            [s.ZP],
            () => s.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return t
          ? (0, i.jsx)(a.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.Z.Messages.SHOW_SELF_VIDEO,
              checked: !E,
              action: () => {
                if (I || E) return _(!E);
                (0, a.openModal)((e) =>
                  (0, i.jsx)(o.Z, {
                    ...e,
                    type: u.K.VIDEO,
                    onConfirm: () => _(!E),
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
        a = t(442837),
        s = t(481060),
        l = t(139387),
        o = t(230711),
        u = t(213459),
        d = t(434404),
        c = t(430824),
        E = t(496675),
        _ = t(981631),
        I = t(689938);
      function T(e) {
        let { user: n, guildId: t, channel: T, context: N } = e,
          S = c.Z.getGuild(t),
          p = (0, a.e7)([E.Z], () =>
            null != S ? E.Z.can(_.Plq.MANAGE_GUILD, S) : null,
          ),
          f = (0, u.em)(T, !0, !0),
          A = (0, u.PL)(!0, !0),
          { isUserApp: O, isGuildApp: h } = r.useMemo(() => {
            var e, t, i, r;
            if ((null == n ? void 0 : n.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let a = Object.values(
                null !==
                  (i =
                    null === (e = f.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {},
              ),
              s = Object.values(
                null !==
                  (r =
                    null === (t = A.result) || void 0 === t
                      ? void 0
                      : t.sections) && void 0 !== r
                  ? r
                  : {},
              );
            return {
              isGuildApp: a.some((e) => {
                var t;
                return (
                  (null === (t = e.descriptor.application) || void 0 === t
                    ? void 0
                    : t.id) === (null == n ? void 0 : n.id)
                );
              }),
              isUserApp: s.some((e) => {
                var t;
                return (
                  (null === (t = e.descriptor.application) || void 0 === t
                    ? void 0
                    : t.id) === (null == n ? void 0 : n.id)
                );
              }),
            };
          }, [f, A, null == n ? void 0 : n.id]),
          Z = r.useCallback(() => {
            if ((null == S ? void 0 : S.id) != null)
              d.Z.open(S.id, _.pNK.INTEGRATIONS),
                l.Z.setSection(_.b4C.APPLICATION, null == n ? void 0 : n.id);
          }, [null == n ? void 0 : n.id, null == S ? void 0 : S.id]),
          M = r.useCallback(() => {
            o.Z.open(_.oAB.AUTHORIZED_APPS);
          }, []),
          m = N === _.IlC.POPOUT;
        if (!(null == n ? void 0 : n.bot) || !p || m || (!h && !O)) return null;
        let g = [];
        return (
          h &&
            g.push(
              (0, i.jsx)(
                s.MenuItem,
                {
                  id: "manage-integration",
                  label: I.Z.Messages.MANAGE_INTEGRATION,
                  action: Z,
                },
                "manage-integration",
              ),
            ),
          O &&
            g.push(
              (0, i.jsx)(
                s.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: I.Z.Messages.MANAGE_AUTHORIZED_APP,
                  action: M,
                },
                "manage-authorized-app",
              ),
            ),
          g
        );
      }
    },
    821864: function (e, n, t) {
      t.d(n, {
        I4: function () {
          return E;
        },
        Sn: function () {
          return d;
        },
        U3: function () {
          return I;
        },
        Ui: function () {
          return _;
        },
        W4: function () {
          return u;
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
        a = t(555573),
        s = t(581364),
        l = t(981631);
      function o() {
        r.Z.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function u(e, n, t) {
        r.Z.dispatch({
          applicationId: e,
          commandId: n,
          permissions: t,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function d(e, n) {
        i.tn.get(l.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, n)).then(
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
        let a = [];
        try {
          let r = await i.tn.get(
            l.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, n, t),
          );
          r.ok && (a = r.body.permissions);
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
          permissions: a,
        });
      }
      function E(e) {
        r.Z.dispatch({
          applicationId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_INIT",
        });
      }
      function _(e) {
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
            defaultEverywhereValue: l,
            guildId: o,
            permissions: u,
          } = e,
          d =
            t === n
              ? (function (e, n, t, i) {
                  if (!t || !i) return n;
                  let r = { [e]: t, [(0, s.bD)(e)]: i };
                  return n.filter((e) => {
                    let n = r[e.id];
                    return null == n || e.permission !== n;
                  });
                })(o, u, i, l)
              : u,
          c = await a.dh(n, o, t, d);
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
        a = t(882441);
      n.Z = () =>
        (0, i.jsx)("div", {
          className: a.loadingWrapper,
          children: (0, i.jsx)(r.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    760373: function (e, n, t) {
      var i, r, a, s;
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
          return E;
        },
        Xj: function () {
          return p;
        },
        YP: function () {
          return c;
        },
        ak: function () {
          return T;
        },
        iQ: function () {
          return _;
        },
        l4: function () {
          return l;
        },
        s9: function () {
          return u;
        },
        tu: function () {
          return r;
        },
        y6: function () {
          return d;
        },
      });
      let l = "",
        o = "",
        u = "",
        d = 5,
        c = 30,
        E = 3,
        _ = 5,
        I = 60,
        T = 4;
      ((a = i || (i = {})).MATCH = "match"),
        (a.OTHER_USER_ALREADY_VERIFIED = "other_user_already_verified"),
        (a.MISMATCH = "mismatch"),
        (a.UNABLE_TO_VERIFY = "unable_to_verify"),
        (a.OTHER_USER_DISCONNECTED = "other_user_disconnected"),
        (a.CURRENT_USER_DISCONNECTED = "current_user_disconnected");
      let N = 100;
      ((s = r || (r = {})).RTC_DEBUG_PANEL = "rtc_debug_panel"),
        (s.RTC_SECURE_FRAMES = "rtc_secure_frames");
      let S = 1,
        p = 0;
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
        a = t(19780),
        s = t(977059),
        l = t(760373);
      function o(e) {
        let { channelId: n, location: t } = e,
          { enabled: o } = s.c.useExperiment({ location: t });
        return (0, i.e7)(
          [a.Z, r.Z],
          () =>
            (function (e, n) {
              var t;
              let [i, s] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [a.Z, r.Z];
              if (!n || null == e || i.getChannelId() !== e) return !1;
              let o = s.getChannel(e);
              if (null == o || o.isGuildStageVoice()) return !1;
              let u =
                null === (t = i.getSecureFramesState()) || void 0 === t
                  ? void 0
                  : t.version;
              return null != u && u > l.HK;
            })(n, o, [a.Z, r.Z]),
          [n, o],
        );
      }
    },
    471253: function (e, n, t) {
      t.d(n, {
        DT: function () {
          return h;
        },
        Ef: function () {
          return g;
        },
        HO: function () {
          return m;
        },
        NZ: function () {
          return R;
        },
        Pq: function () {
          return M;
        },
        Q1: function () {
          return p;
        },
        RK: function () {
          return A;
        },
        _0: function () {
          return f;
        },
        hz: function () {
          return Z;
        },
        yi: function () {
          return O;
        },
      });
      var i = t(512722),
        r = t.n(i),
        a = t(149765),
        s = t(544891),
        l = t(493683);
      t(749210);
      var o = t(911969),
        u = t(367907),
        d = t(944486),
        c = t(979651),
        E = t(700785),
        _ = t(922482),
        I = t(192079),
        T = t(706058),
        N = t(590415),
        S = t(981631);
      function p(e, n) {
        let t = e.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          n && (0, u.yw)(S.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, I.s$)(e) }),
          s.tn.patch({
            url: S.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function f(e, n) {
        let t = e.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          s.tn.patch({
            url: S.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function A(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == e ? void 0 : e.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let a = c.Z.getVoiceStateForChannel(e.id);
        return (
          (0, N.gf)(a) === N.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, u.yw)(S.rMx.PROMOTED_TO_SPEAKER, { ...(0, I.s$)(e) }),
          s.tn.patch({
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
      function O(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          r()(null != n, "This channel cannot be guildless."),
          s.tn.patch({
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
      function h(e, n, t) {
        let i = e.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          s.tn.patch({
            url: S.ANM.UPDATE_VOICE_STATE(i, n),
            body: { suppress: t, channel_id: e.id },
          })
        );
      }
      function Z(e, n) {
        if (null == n || null == e) return;
        let t = n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          h(n, e.id, !0),
          s.tn.patch({
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
      function M(e, n, t) {
        let i = e.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let s = e.permissionOverwrites[i],
          u = { id: i, type: o.BN.ROLE, allow: E.Hn, deny: E.Hn, ...s };
        t
          ? ((u.allow = a.IH(u.allow, n)), (u.deny = a.Od(u.deny, n)))
          : ((u.allow = a.Od(u.allow, n)), (u.deny = a.IH(u.deny, n))),
          l.Z.updatePermissionOverwrite(e.id, u);
      }
      async function m(e, n, t, i) {
        if ("" === n) return;
        d.Z.getVoiceChannelId() !== e.id && (0, _.TM)(e);
        let r = await (0, T.me)(e.id, n, t, i);
        return A(e, !1, !0), r;
      }
      async function g(e, n, t) {
        if ("" !== n) return await (0, T.Dk)(e.id, n, t);
      }
      async function R(e) {
        await (0, T.Ix)(e.id);
      }
    },
    192079: function (e, n, t) {
      t.d(n, {
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
        t(724458),
        t(47120),
        t(392711);
      var i = t(19780),
        r = t(5192),
        a = t(700785),
        s = t(427679),
        l = t(157925),
        o = t(981631),
        u = t(71080),
        d = t(689938);
      function c(e, n, t, i) {
        let a = n[0],
          s = r.ZP.getName(e, t, a),
          l = null != i ? i : n.length;
        return 1 === l && null != a
          ? s
          : null == a
            ? d.Z.Messages.SPEAKING_COUNT.format({ count: l })
            : d.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: s,
                count: l - 1,
              });
      }
      function E(e, n) {
        switch (e) {
          case u.aC.OWNER:
            return d.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case u.aC.ADMINISTRATOR:
            return d.Z.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case u.aC.MEMBER:
          case u.aC.ROLE:
            return n
              ? d.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : d.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case u.aC.EMPTY_STATE:
        }
        return null;
      }
      function _(e) {
        let n = s.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: a.Uu(o.Plq.REQUEST_TO_SPEAK, e)
            ? l.BM.EVERYONE
            : l.BM.NO_ONE,
          stage_instance_id: null == n ? void 0 : n.id,
        };
      }
    },
    706058: function (e, n, t) {
      t.d(n, {
        Dk: function () {
          return s;
        },
        Ix: function () {
          return l;
        },
        me: function () {
          return a;
        },
      });
      var i = t(544891),
        r = t(981631);
      async function a(e, n, t, a, s) {
        return (
          await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
              channel_id: e,
              topic: n,
              privacy_level: t,
              guild_scheduled_event_id: s,
              send_start_notification: a,
            },
          })
        ).body;
      }
      async function s(e, n, t) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(e),
            body: { topic: n, privacy_level: t },
          })
        ).body;
      }
      function l(e) {
        return i.tn.del(r.ANM.STAGE_INSTANCE(e));
      }
    },
    623633: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(442837),
        r = t(592125),
        a = t(944486);
      function s() {
        return (0, i.e7)([a.Z, r.Z], () => {
          let e = a.Z.getVoiceChannelId();
          if (null != e) {
            let n = r.Z.getChannel(e);
            if (null == n ? void 0 : n.isGuildStageVoice()) return n;
          }
          return null;
        });
      }
    },
    354589: function (e, n, t) {
      t.r(n);
      var i = t(735250);
      t(470079);
      var r = t(481060),
        a = t(239091),
        s = t(883385),
        l = t(108843),
        o = t(911969),
        u = t(947440),
        d = t(100527),
        c = t(441061),
        E = t(167675),
        _ = t(737013),
        I = t(607783),
        T = t(299206),
        N = t(819403),
        S = t(777658),
        p = t(858488),
        f = t(185457),
        A = t(570870),
        O = t(389052),
        h = t(24311),
        Z = t(915193),
        M = t(332576),
        m = t(710631),
        g = t(297047),
        R = t(88966),
        v = t(397616),
        C = t(558924),
        G = t(991307),
        y = t(725119),
        D = t(700994),
        P = t(332031),
        U = t(981631),
        b = t(689938);
      n.default = (0, l.Z)(
        (0, s.Z)(
          function (e) {
            var n;
            let {
                user: t,
                channel: s,
                context: l,
                showChatItems: d = !0,
                showMediaItems: U = !1,
                showChannelCallItems: x = !1,
                showModalItems: H = !0,
                onSelect: j,
                onHeightUpdate: L,
              } = e,
              w = (0, y.Z)({ userId: t.id, guildId: null }),
              B = (0, g.Z)(t, null, l),
              F = (0, C.Z)(t.id, s.id),
              V = (0, R.Z)(t.id, l),
              k = (0, h.Z)({ user: t, context: l }),
              W = (0, f.Z)({ user: t, channelId: s.id, context: l }),
              K = (0, p.Z)({ user: t }),
              Y = (0, D.Z)(t.id),
              z = (0, v.Z)(t.id, s.id),
              q = (0, G.Z)(t.id),
              Q = (0, I.B)({
                userId: t.id,
                channelId: s.id,
                location: "GroupDMUserContextMenu",
              }),
              X = (0, M.Z)(t.id, s.id),
              $ = (0, m.Z)({ user: t }),
              J = (0, u.Z)(null, t),
              ee = (0, S.Z)(t),
              en = (0, O.Z)({ user: t }),
              et = (0, T.Z)({ id: t.id, label: b.Z.Messages.COPY_ID_USER }),
              ei = (0, P.Z)(t.id),
              er = (0, E.Z)(t.id),
              ea = (0, c.Z)(s.id),
              es = (0, N.Z)(t),
              el = (0, _.Z)(t.id),
              eo = (0, A.Z)({
                commandType: o.yU.USER,
                commandTargetId: t.id,
                channel: s,
                guildId: void 0,
                onHeightUpdate: L,
              }),
              eu = (0, Z.Z)(t, s),
              ed = t.isNonUserBot(),
              ec = s.isManaged(),
              eE =
                null === (n = s.recipients) || void 0 === n
                  ? void 0
                  : n.includes(t.id);
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: a.Zy,
              "aria-label": b.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: j,
              children: [
                !ed &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(r.MenuGroup, { children: es }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          H && w,
                          d && B,
                          V,
                          k,
                          !ec && F,
                          H && W,
                          H && K,
                          ei,
                        ],
                      }),
                      U && (0, i.jsx)(r.MenuGroup, { children: Y }),
                      eE &&
                        (0, i.jsxs)(r.MenuGroup, { children: [!ec && z, eu] }),
                      (0, i.jsx)(r.MenuGroup, { children: H && J }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          U && q,
                          U && Q,
                          U && X,
                          eo,
                          H && $,
                          ee,
                          H && en,
                          U && el,
                        ],
                      }),
                      x && (0, i.jsxs)(r.MenuGroup, { children: [ea, er] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: et }),
              ],
            });
          },
          { object: U.qAy.CONTEXT_MENU },
        ),
        [d.Z.CONTEXT_MENU, d.Z.GROUP_DM_USER_MENU],
      );
    },
    570870: function (e, n, t) {
      var i = t(735250),
        r = t(470079),
        a = t(512722),
        s = t.n(a),
        l = t(442837),
        o = t(481060),
        u = t(10718),
        d = t(667204),
        c = t(826298),
        E = t(276022),
        _ = t(978983),
        I = t(430824),
        T = t(594174),
        N = t(981631),
        S = t(689079),
        p = t(689938),
        f = t(359522);
      n.Z = (e) => {
        let n,
          {
            commandType: t,
            commandTargetId: a,
            channel: A,
            guildId: O,
            onHeightUpdate: h,
            context: Z,
          } = e,
          M = (0, l.e7)([I.Z], () => I.Z.getGuild(null != O ? O : A.guild_id)),
          m = (0, l.e7)([T.default], () => T.default.getUser(a)),
          g = (0, E.Z)({
            user: m,
            guildId: null == M ? void 0 : M.id,
            channel: A,
            context: Z,
          }),
          {
            commands: R,
            sectionDescriptors: v,
            loading: C,
          } = u.wi(A, { commandTypes: [t] }, { limit: S.lr }),
          { sections: G } = r.useMemo(() => {
            let e = {};
            return (
              v.forEach((n) => {
                e[n.id] = n;
              }),
              { sections: e }
            );
          }, [v]),
          y = r.useRef(C.current);
        r.useEffect(() => {
          C.current !== y.current &&
            ((y.current = C.current), null == h || h());
        }, [C, h]);
        let D = r.useCallback(
          (e) => {
            s()(null != A, "menu item should not show if channel is null");
            let n = G[e.applicationId],
              t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
              o.MenuItem,
              {
                id: e.id,
                label: e.displayName,
                iconLeft: () =>
                  null != t
                    ? (0, i.jsx)(t, {
                        channel: A,
                        section: n,
                        width: 18,
                        height: 18,
                        selectable: !1,
                      })
                    : null,
                action: () => {
                  (0, d.Z)({
                    command: e,
                    optionValues: {},
                    context: { channel: A, guild: M },
                    commandTargetId: a,
                  });
                },
              },
              e.id,
            );
          },
          [A, M, a, G],
        );
        if (
          (C.current
            ? (n = (0, i.jsx)(
                o.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(_.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((n =
                0 === R.length
                  ? (0, i.jsx)(
                      o.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: p.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : R.map(D)),
              null != g &&
                (n = (0, i.jsxs)(i.Fragment, {
                  children: [
                    n,
                    (0, i.jsx)(o.MenuSeparator, {}, "separator"),
                    g,
                  ],
                }))),
          !N.TPd.TEXTUAL.has(A.type))
        ) {
          if (null == g) return null;
          n = g;
        }
        return (0, i.jsx)(o.MenuItem, {
          id: "apps",
          label: p.Z.Messages.APPS,
          listClassName: f.list,
          children: n,
        });
      };
    },
    915193: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(442837),
        a = t(692547),
        s = t(481060),
        l = t(493683),
        o = t(129861),
        u = t(700582),
        d = t(594174),
        c = t(689938),
        E = t(725458);
      function _(e) {
        let { color: n, className: t } = e;
        return (0, i.jsx)("svg", {
          className: t,
          height: "16",
          width: "80",
          viewBox: "0 0 80 16",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            opacity: ".6",
            children: [
              (0, i.jsx)("path", { d: "m0 0h80v16h-80z" }),
              (0, i.jsxs)("g", {
                stroke: n,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                children: [
                  (0, i.jsx)("path", { d: "m71 1h4v4.16" }),
                  (0, i.jsx)("path", {
                    d: "m2 1h4v4.16",
                    transform: "matrix(-1 0 0 1 8 0)",
                  }),
                  (0, i.jsx)("path", {
                    d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4",
                  }),
                  (0, i.jsx)("path", {
                    d: "m72.13 10.474 2.869 3.12 2.631-3.12",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function I(e, n) {
        let t = (0, r.e7)([d.default], () => d.default.getCurrentUser());
        return null == t ||
          n.ownerId !== t.id ||
          e.id === t.id ||
          (null == n ? void 0 : n.isBroadcastChannel())
          ? null
          : (0, i.jsx)(s.MenuItem, {
              id: "make-dm-owner",
              color: "danger",
              label: c.Z.Messages.CHANGE_DM_OWNER,
              action: () => {
                var r;
                return (
                  (r = t),
                  void (0, s.openModal)((t) =>
                    (0, i.jsxs)(s.ConfirmModal, {
                      bodyClassName: E.confirmModal,
                      header: c.Z.Messages.TRANSFER_GROUP_OWNERSHIP,
                      confirmText: c.Z.Messages.CONFIRM,
                      cancelText: c.Z.Messages.CANCEL,
                      onConfirm: () => l.Z.setDMOwner(n.id, e.id),
                      ...t,
                      children: [
                        (0, i.jsx)(_, {
                          color: a.Z.unsafe_rawColors.PRIMARY_300.css,
                        }),
                        (0, i.jsxs)("div", {
                          className: E.fromToWrapper,
                          children: [
                            (0, i.jsx)("div", {
                              className: E.from,
                              children: (0, i.jsx)(u.Z, {
                                user: r,
                                size: s.AvatarSizes.SIZE_80,
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: E.to,
                              children: (0, i.jsx)(u.Z, {
                                user: e,
                                size: s.AvatarSizes.SIZE_80,
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(s.Text, {
                          variant: "text-md/normal",
                          children: c.Z.Messages.CONFIRM_CHANGE_DM_OWNER.format(
                            {
                              usernameHook: (n, t) =>
                                (0, i.jsx)(
                                  o.Z,
                                  {
                                    usernameIcon: (0, i.jsx)(s.Avatar, {
                                      className: E.avatarIcon,
                                      src: e.getAvatarURL(void 0, 16),
                                      size: s.AvatarSizes.SIZE_16,
                                      "aria-hidden": !0,
                                    }),
                                    className: E.discordTag,
                                    usernameClass: E.username,
                                    discriminatorClass: E.discriminator,
                                    user: e,
                                  },
                                  t,
                                ),
                            },
                          ),
                        }),
                      ],
                    }),
                  )
                );
              },
            });
      }
    },
    88966: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(481060),
        a = t(493683),
        s = t(37234),
        l = t(314897),
        o = t(981631),
        u = t(689938);
      function d(e, n) {
        let t = l.default.getId(),
          d = n === o.IlC.POPOUT;
        return t === e || d
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "message-user",
              label: u.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                a.Z.openPrivateChannel(e), (0, s.xf)();
              },
            });
      }
    },
    397616: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(442837),
        a = t(481060),
        s = t(493683),
        l = t(592125),
        o = t(594174),
        u = t(689938);
      function d(e, n) {
        let t = (0, r.e7)([o.default], () => o.default.getCurrentUser(), []),
          d = (0, r.e7)([l.Z], () => l.Z.getChannel(n), [n]);
        return null == d || d.isOwner(e) || null == t || !d.isOwner(t.id)
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "remove",
              label: u.Z.Messages.REMOVE_FROM_GROUP,
              action: () => s.Z.removeRecipient(n, e),
              color: "danger",
            });
      }
    },
    558924: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var r = t(442837),
        a = t(481060),
        s = t(26151),
        l = t(358221),
        o = t(314897),
        u = t(354459),
        d = t(689938);
      function c(e, n) {
        let t = (0, r.e7)([o.default], () => o.default.getId() === e, [e]),
          [c, E] = (0, r.Wu)(
            [l.Z],
            () => [l.Z.getParticipants(n), l.Z.getParticipant(n, e)],
            [n, e],
          );
        return t || 0 === c.length
          ? null
          : null == E
            ? (0, i.jsx)(a.MenuItem, {
                id: "ring",
                label: d.Z.Messages.RING,
                action: () => s.Z.ring(n, [e]),
              })
            : E.type === u.fO.USER && E.ringing
              ? (0, i.jsx)(a.MenuItem, {
                  id: "stop-ringing",
                  label: d.Z.Messages.STOP_RINGING,
                  action: () => s.Z.stopRinging(n, [e]),
                })
              : null;
      }
    },
    882441: function (e, n, t) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    359522: function (e, n, t) {
      e.exports = { list: "list_fd4745" };
    },
    725458: function (e, n, t) {
      e.exports = {
        confirmModal: "confirmModal_a9fa9a",
        discordTag: "discordTag_a9fa9a",
        avatarIcon: "avatarIcon_a9fa9a",
        username: "username_a9fa9a",
        discriminator: "discriminator_a9fa9a",
        fromToWrapper: "fromToWrapper_a9fa9a",
        from: "from_a9fa9a",
        to: "to_a9fa9a",
      };
    },
    480881: function (e, n, t) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
  },
]);
//# sourceMappingURL=27c3ad5b14d03845e838.js.map
