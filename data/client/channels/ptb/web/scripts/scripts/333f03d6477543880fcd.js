"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73442"],
  {
    139387: function (n, t, e) {
      var i = e(570140),
        r = e(434404),
        l = e(821864),
        a = e(308063);
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
              await l.U3({
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
              await r.Z.updateIntegration(
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
              await a.Z.update(n, t.id, t),
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
        r = e.n(i),
        l = e(544891),
        a = e(570140),
        o = e(981631);
      let u = ["Spidey Bot", "Captain Hook"];
      t.Z = {
        fetchForGuild(n) {
          a.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: n }),
            l.tn
              .get({ url: o.ANM.GUILD_WEBHOOKS(n), oldFormErrors: !0 })
              .then((t) => {
                let { body: e } = t;
                return a.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: n,
                  webhooks: e,
                });
              })
              .catch((t) => {
                let { body: e } = t;
                a.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: n,
                  error: e.message,
                });
              });
        },
        fetchForChannel(n, t) {
          a.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: n, channelId: t }),
            l.tn
              .get({ url: o.ANM.CHANNEL_WEBHOOKS(t), oldFormErrors: !0 })
              .then((e) => {
                let { body: i } = e;
                return a.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: n,
                  channelId: t,
                  webhooks: i,
                });
              });
        },
        create: (n, t, e) => (
          null == e && (e = u[r().random(0, u.length - 1)]),
          l.tn
            .post({
              url: o.ANM.CHANNEL_WEBHOOKS(t),
              body: { name: e },
              oldFormErrors: !0,
            })
            .then((t) => {
              let { body: e } = t;
              return (
                a.Z.dispatch({
                  type: "WEBHOOK_CREATE",
                  guildId: n,
                  webhook: e,
                }),
                e
              );
            })
        ),
        delete: (n, t) =>
          l.tn.del({ url: o.ANM.WEBHOOK(t), oldFormErrors: !0 }).then(() => {
            a.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: n, webhookId: t });
          }),
        update: (n, t, e) =>
          l.tn
            .patch({ url: o.ANM.WEBHOOK(t), body: e, oldFormErrors: !0 })
            .then((t) => {
              let { body: e } = t;
              return (
                a.Z.dispatch({
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
      var i, r;
      e.d(t, {
        K: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.STREAM = 0)] = "STREAM"),
        (r[(r.VIDEO = 1)] = "VIDEO");
    },
    985588: function (n, t, e) {
      e.d(t, {
        s: function () {
          return a;
        },
      });
      var i = e(442837),
        r = e(314897),
        l = e(699516);
      function a(n) {
        return (0, i.e7)([l.Z, r.default], () => {
          let t = l.Z.isFriend(n.id),
            e = r.default.getId() === n.id;
          return t && !e && !n.bot && !n.system && !n.isProvisional;
        });
      }
    },
    27584: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = e(442837),
        r = e(846027),
        l = e(314897),
        a = e(131951),
        o = e(981631),
        u = e(65154);
      function d(n) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : u.Yn.DEFAULT,
          e = (0, i.e7)([l.default], () => l.default.getId()),
          d = (0, i.e7)(
            [a.Z],
            () => a.Z.supports(u.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled(),
          ),
          s = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(e, t), [e, t]),
          c = null == n || n === e;
        return [
          c && (d || s),
          s,
          (n) => {
            let i = n ? o.ZUi.DISABLED : o.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(e, i, t);
          },
        ];
      }
    },
    295510: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(153867),
        l = e(468026),
        a = e(394059),
        o = e(388032);
      function u(n) {
        let { type: t, onConfirm: e, ...u } = n,
          d =
            t === a.K.STREAM
              ? o.intl.string(o.t["/lFMWl"])
              : o.intl.string(o.t.xzxhZW),
          s =
            t === a.K.STREAM
              ? o.intl.string(o.t.xaOX7e)
              : o.intl.string(o.t.oU1p9P);
        return (0, i.jsx)(l.default, {
          confirmText: o.intl.string(o.t["cY+Ooa"]),
          secondaryConfirmText: o.intl.string(o.t["JdIQ/f"]),
          title: d,
          cancelText: o.intl.string(o.t["ETE/oK"]),
          onConfirm: e,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              e();
          },
          body: s,
          ...u,
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
      var r = e(442837),
        l = e(481060),
        a = e(475179),
        o = e(358221),
        u = e(388032);
      function d(n) {
        let t = (0, r.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(n));
        return (0, i.jsx)(l.MenuCheckboxItem, {
          id: "no-video-hide",
          label: u.intl.string(u.t.BL8ss7),
          checked: !t,
          action: () => a.Z.toggleVoiceParticipantsHidden(n, !t),
        });
      }
    },
    167675: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return T;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var r = e(442837),
        l = e(481060),
        a = e(740492),
        o = e(27584),
        u = e(295510),
        d = e(394059),
        s = e(65154),
        c = e(388032);
      function T(n) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          [e, T, I] = (0, o.Z)(n, t),
          E = (0, r.e7)(
            [a.ZP],
            () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return e
          ? (0, i.jsx)(l.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.intl.string(c.t.MH8ESU),
              checked: !T,
              action: () => {
                if (E || T) return I(!T);
                (0, l.openModal)((n) =>
                  (0, i.jsx)(u.Z, {
                    ...n,
                    type: d.K.VIDEO,
                    onConfirm: () => I(!T),
                  }),
                );
              },
            })
          : null;
      }
    },
    276022: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return p;
        },
      }),
        e(653041);
      var i = e(200651),
        r = e(192379),
        l = e(442837),
        a = e(481060),
        o = e(139387),
        u = e(230711),
        d = e(213459),
        s = e(434404),
        c = e(430824),
        T = e(496675),
        I = e(981631),
        E = e(388032);
      function p(n) {
        let { user: t, guildId: e, channel: p, context: _ } = n,
          f = c.Z.getGuild(e),
          S = (0, l.e7)([T.Z], () =>
            null != f ? T.Z.can(I.Plq.MANAGE_GUILD, f) : null,
          ),
          N = (0, d.em)(p, !0, !0),
          h = (0, d.PL)(!0, !0),
          { isUserApp: m, isGuildApp: A } = r.useMemo(() => {
            var n, e, i, r;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let l = Object.values(
                null !==
                  (i =
                    null === (n = N.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== i
                  ? i
                  : {},
              ),
              a = Object.values(
                null !==
                  (r =
                    null === (e = h.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== r
                  ? r
                  : {},
              );
            return {
              isGuildApp: l.some((n) => {
                var e;
                return (
                  (null === (e = n.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === (null == t ? void 0 : t.id)
                );
              }),
              isUserApp: a.some((n) => {
                var e;
                return (
                  (null === (e = n.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === (null == t ? void 0 : t.id)
                );
              }),
            };
          }, [N, h, null == t ? void 0 : t.id]),
          g = r.useCallback(() => {
            if ((null == f ? void 0 : f.id) != null)
              s.Z.open(f.id, I.pNK.INTEGRATIONS),
                o.Z.setSection(I.b4C.APPLICATION, null == t ? void 0 : t.id);
          }, [null == t ? void 0 : t.id, null == f ? void 0 : f.id]),
          Z = r.useCallback(() => {
            u.Z.open(I.oAB.AUTHORIZED_APPS);
          }, []),
          O = _ === I.IlC.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !S || O || (!A && !m)) return null;
        let v = [];
        return (
          A &&
            v.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-integration",
                  label: E.intl.string(E.t["aw+qtb"]),
                  action: g,
                },
                "manage-integration",
              ),
            ),
          m &&
            v.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: E.intl.string(E.t.ALLIgY),
                  action: Z,
                },
                "manage-authorized-app",
              ),
            ),
          v
        );
      }
    },
    821864: function (n, t, e) {
      e.d(t, {
        I4: function () {
          return T;
        },
        Sn: function () {
          return s;
        },
        U3: function () {
          return E;
        },
        Ui: function () {
          return I;
        },
        W4: function () {
          return d;
        },
        gq: function () {
          return c;
        },
        kZ: function () {
          return u;
        },
      });
      var i = e(544891),
        r = e(570140),
        l = e(555573),
        a = e(581364),
        o = e(981631);
      function u() {
        r.Z.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function d(n, t, e) {
        r.Z.dispatch({
          applicationId: n,
          commandId: t,
          permissions: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function s(n, t) {
        i.tn.get(o.ANM.GUILD_COMMANDS_FOR_APPLICATION(n, t)).then(
          (e) => {
            r.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
              applicationId: t,
              commands: e.body.application_commands,
              guildId: n,
              permissions: e.body.permissions,
            });
          },
          () => {
            r.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
              applicationId: t,
            });
          },
        );
      }
      async function c(n, t, e) {
        let l = [];
        try {
          let r = await i.tn.get(
            o.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(n, t, e),
          );
          r.ok && (l = r.body.permissions);
        } catch (i) {
          if (404 !== i.status) {
            r.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
              applicationId: n,
              commandId: e,
              guildId: t,
            });
            return;
          }
        }
        r.Z.dispatch({
          type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
          applicationId: n,
          commandId: e,
          guildId: t,
          permissions: l,
        });
      }
      function T(n) {
        r.Z.dispatch({
          applicationId: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_INIT",
        });
      }
      function I(n) {
        r.Z.dispatch({
          commandId: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_RESET",
        });
      }
      async function E(n) {
        let {
            applicationId: t,
            commandId: e,
            defaultEveryoneValue: i,
            defaultEverywhereValue: o,
            guildId: u,
            permissions: d,
          } = n,
          s =
            e === t
              ? (function (n, t, e, i) {
                  if (!e || !i) return t;
                  let r = { [n]: e, [(0, a.bD)(n)]: i };
                  return t.filter((n) => {
                    let t = r[n.id];
                    return null == t || n.permission !== t;
                  });
                })(u, d, i, o)
              : d,
          c = await l.dh(t, u, e, s);
        c.ok &&
          r.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: e,
            guildId: u,
            permissions: c.body.permissions,
          });
      }
    },
    978983: function (n, t, e) {
      var i = e(200651);
      e(192379);
      var r = e(481060),
        l = e(53304);
      t.Z = () =>
        (0, i.jsx)("div", {
          className: l.loadingWrapper,
          children: (0, i.jsx)(r.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    977059: function (n, t, e) {
      e.d(t, {
        R: function () {
          return l;
        },
        S: function () {
          return r;
        },
      });
      let i = (0, e(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function r(n) {
        let { location: t } = n;
        return i.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function l(n) {
        let { location: t } = n;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    441894: function (n, t, e) {
      e.d(t, {
        J: function () {
          return u;
        },
      }),
        e(47120);
      var i = e(442837),
        r = e(592125),
        l = e(19780),
        a = e(977059),
        o = e(760373);
      function u(n) {
        let { channelId: t, location: e } = n,
          { enabled: u } = (0, a.S)({ location: e });
        return (0, i.e7)(
          [l.Z, r.Z],
          () =>
            (function (n, t) {
              var e;
              let [i, a] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [l.Z, r.Z];
              if (!t || null == n || i.getChannelId() !== n) return !1;
              let u = a.getChannel(n);
              if (null == u || u.isGuildStageVoice()) return !1;
              let d =
                null === (e = i.getSecureFramesState()) || void 0 === e
                  ? void 0
                  : e.version;
              return null != d && d !== o.Eg;
            })(t, u, [l.Z, r.Z]),
          [t, u],
        );
      }
    },
    471253: function (n, t, e) {
      e.d(t, {
        DT: function () {
          return A;
        },
        Ef: function () {
          return v;
        },
        HO: function () {
          return O;
        },
        NZ: function () {
          return M;
        },
        Pq: function () {
          return Z;
        },
        Q1: function () {
          return S;
        },
        RK: function () {
          return h;
        },
        _0: function () {
          return N;
        },
        hz: function () {
          return g;
        },
        yi: function () {
          return m;
        },
      });
      var i = e(512722),
        r = e.n(i),
        l = e(149765),
        a = e(544891),
        o = e(493683);
      e(749210);
      var u = e(911969),
        d = e(367907),
        s = e(944486),
        c = e(979651),
        T = e(700785),
        I = e(922482),
        E = e(192079),
        p = e(706058),
        _ = e(590415),
        f = e(981631);
      function S(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          t && (0, d.yw)(f.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, E.s$)(n) }),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(e),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: n.id,
            },
          })
        );
      }
      function N(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(e, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
          })
        );
      }
      function h(n, t) {
        let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let l = c.Z.getVoiceStateForChannel(n.id);
        return (
          (0, _.gf)(l) === _.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, d.yw)(f.rMx.PROMOTED_TO_SPEAKER, { ...(0, E.s$)(n) }),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(e ? { silent: e } : {}),
            },
          })
        );
      }
      function m(n) {
        let t = null == n ? void 0 : n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function A(n, t, e) {
        let i = n.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(i, t),
            body: { suppress: e, channel_id: n.id },
          })
        );
      }
      function g(n, t) {
        if (null == t || null == n) return;
        let e = t.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          A(t, n.id, !0),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(e, n.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function Z(n, t, e) {
        let i = n.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let a = n.permissionOverwrites[i],
          d = { id: i, type: u.BN.ROLE, allow: T.Hn, deny: T.Hn, ...a };
        e
          ? ((d.allow = l.IH(d.allow, t)), (d.deny = l.Od(d.deny, t)))
          : ((d.allow = l.Od(d.allow, t)), (d.deny = l.IH(d.deny, t))),
          o.Z.updatePermissionOverwrite(n.id, d);
      }
      async function O(n, t, e, i) {
        if ("" === t) return;
        s.Z.getVoiceChannelId() !== n.id && (0, I.TM)(n);
        let r = await (0, p.me)(n.id, t, e, i);
        return h(n, !1, !0), r;
      }
      async function v(n, t, e) {
        if ("" !== t) return await (0, p.Dk)(n.id, t, e);
      }
      async function M(n) {
        await (0, p.Ix)(n.id);
      }
    },
    192079: function (n, t, e) {
      e.d(t, {
        ER: function () {
          return c;
        },
        kk: function () {
          return T;
        },
        s$: function () {
          return I;
        },
      }),
        e(724458),
        e(47120),
        e(392711);
      var i = e(19780),
        r = e(5192),
        l = e(700785),
        a = e(427679),
        o = e(157925),
        u = e(981631),
        d = e(71080),
        s = e(388032);
      function c(n, t, e, i) {
        let l = t[0],
          a = r.ZP.getName(n, e, l),
          o = null != i ? i : t.length;
        return 1 === o && null != l
          ? a
          : null == l
            ? s.intl.formatToPlainString(s.t.chmM9P, { count: o })
            : s.intl.formatToPlainString(s.t.GhkJ29, { name: a, count: o - 1 });
      }
      function T(n, t) {
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
      function I(n) {
        let t = a.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: l.Uu(u.Plq.REQUEST_TO_SPEAK, n)
            ? o.BM.EVERYONE
            : o.BM.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    706058: function (n, t, e) {
      e.d(t, {
        Dk: function () {
          return a;
        },
        Ix: function () {
          return o;
        },
        me: function () {
          return l;
        },
      });
      var i = e(544891),
        r = e(981631);
      async function l(n, t, e, l, a) {
        return (
          await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: t,
              privacy_level: e,
              guild_scheduled_event_id: a,
              send_start_notification: l,
            },
          })
        ).body;
      }
      async function a(n, t, e) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(n),
            body: { topic: t, privacy_level: e },
          })
        ).body;
      }
      function o(n) {
        return i.tn.del(r.ANM.STAGE_INSTANCE(n));
      }
    },
    623633: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = e(442837),
        r = e(592125),
        l = e(944486);
      function a() {
        return (0, i.e7)([l.Z, r.Z], () => {
          let n = l.Z.getVoiceChannelId();
          if (null != n) {
            let t = r.Z.getChannel(n);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
          }
          return null;
        });
      }
    },
    354589: function (n, t, e) {
      e.r(t);
      var i = e(200651);
      e(192379);
      var r = e(481060),
        l = e(239091),
        a = e(883385),
        o = e(108843),
        u = e(911969),
        d = e(947440),
        s = e(100527),
        c = e(441061),
        T = e(167675),
        I = e(737013),
        E = e(607783),
        p = e(299206),
        _ = e(819403),
        f = e(777658),
        S = e(858488),
        N = e(185457),
        h = e(570870),
        m = e(389052),
        A = e(24311),
        g = e(915193),
        Z = e(332576),
        O = e(710631),
        v = e(297047),
        M = e(88966),
        y = e(397616),
        G = e(558924),
        C = e(991307),
        R = e(37258),
        b = e(700994),
        x = e(332031),
        P = e(981631),
        U = e(388032);
      t.default = (0, o.Z)(
        (0, a.Z)(
          function (n) {
            var t;
            let {
                user: e,
                channel: a,
                context: o,
                showChatItems: s = !0,
                showMediaItems: P = !1,
                showChannelCallItems: D = !1,
                showModalItems: j = !0,
                onSelect: w,
                onHeightUpdate: k,
              } = n,
              H = (0, R.Z)({ userId: e.id, guildId: null }),
              L = (0, v.Z)(e, null, o),
              B = (0, G.Z)(e, a.id),
              W = (0, M.Z)(e.id, o),
              V = (0, A.Z)({ user: e, context: o }),
              K = (0, N.Z)({ user: e, channelId: a.id, context: o }),
              F = (0, S.Z)({ user: e }),
              q = (0, b.Z)(e.id),
              z = (0, y.Z)(e.id, a.id),
              Y = (0, C.Z)(e.id),
              J = (0, E.B)({
                userId: e.id,
                channelId: a.id,
                guildId: a.getGuildId(),
                location: "GroupDMUserContextMenu",
              }),
              Q = (0, Z.Z)(e.id, a.id),
              X = (0, O.Z)({ user: e }),
              $ = (0, d.Z)(null, e),
              nn = (0, f.Z)(e),
              nt = (0, m.Z)({ user: e }),
              ne = (0, p.Z)({ id: e.id, label: U.intl.string(U.t["/AXYnJ"]) }),
              ni = (0, x.Z)(e.id),
              nr = (0, T.Z)(e.id),
              nl = (0, c.Z)(a.id),
              na = (0, _.Z)(e),
              no = (0, I.Z)(e.id),
              nu = (0, h.Z)({
                commandType: u.yU.USER,
                commandTargetId: e.id,
                channel: a,
                guildId: void 0,
                onHeightUpdate: k,
              }),
              nd = (0, g.Z)(e, a),
              ns = e.isNonUserBot(),
              nc = a.isManaged(),
              nT =
                null === (t = a.recipients) || void 0 === t
                  ? void 0
                  : t.includes(e.id);
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: l.Zy,
              "aria-label": U.intl.string(U.t.liqwPD),
              onSelect: w,
              children: [
                !ns &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(r.MenuGroup, { children: na }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          j && H,
                          s && L,
                          W,
                          V,
                          !nc && B,
                          j && K,
                          j && F,
                          ni,
                        ],
                      }),
                      P && (0, i.jsx)(r.MenuGroup, { children: q }),
                      nT &&
                        (0, i.jsxs)(r.MenuGroup, { children: [!nc && z, nd] }),
                      (0, i.jsx)(r.MenuGroup, { children: j && $ }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          P && Y,
                          P && J,
                          P && Q,
                          nu,
                          j && X,
                          nn,
                          j && nt,
                          P && no,
                        ],
                      }),
                      D && (0, i.jsxs)(r.MenuGroup, { children: [nl, nr] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: ne }),
              ],
            });
          },
          { object: P.qAy.CONTEXT_MENU },
        ),
        [s.Z.CONTEXT_MENU, s.Z.GROUP_DM_USER_MENU],
      );
    },
    570870: function (n, t, e) {
      var i = e(200651),
        r = e(192379),
        l = e(512722),
        a = e.n(l),
        o = e(442837),
        u = e(481060),
        d = e(10718),
        s = e(667204),
        c = e(826298),
        T = e(276022),
        I = e(978983),
        E = e(430824),
        p = e(594174),
        _ = e(981631),
        f = e(689079),
        S = e(388032),
        N = e(62352);
      t.Z = (n) => {
        let t,
          {
            commandType: e,
            commandTargetId: l,
            channel: h,
            guildId: m,
            onHeightUpdate: A,
            context: g,
          } = n,
          Z = (0, o.e7)([E.Z], () => E.Z.getGuild(null != m ? m : h.guild_id)),
          O = (0, o.e7)([p.default], () => p.default.getUser(l)),
          v = (0, T.Z)({
            user: O,
            guildId: null == Z ? void 0 : Z.id,
            channel: h,
            context: g,
          }),
          {
            commands: M,
            sectionDescriptors: y,
            loading: G,
          } = d.wi({
            channel: h,
            filters: { commandTypes: [e] },
            options: { limit: f.lr },
            allowFetch: !0,
          }),
          { sections: C } = r.useMemo(() => {
            let n = {};
            return (
              y.forEach((t) => {
                n[t.id] = t;
              }),
              { sections: n }
            );
          }, [y]),
          R = r.useRef(G.current);
        r.useEffect(() => {
          G.current !== R.current &&
            ((R.current = G.current), null == A || A());
        }, [G, A]);
        let b = r.useCallback(
          (n) => {
            a()(null != h, "menu item should not show if channel is null");
            let t = C[n.applicationId],
              e = null != t ? (0, c.ky)(t) : void 0;
            return (0, i.jsx)(
              u.MenuItem,
              {
                id: n.id,
                label: n.displayName,
                iconLeft: () =>
                  null != e
                    ? (0, i.jsx)(e, {
                        channel: h,
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
                    context: { channel: h, guild: Z },
                    commandTargetId: l,
                  });
                },
              },
              n.id,
            );
          },
          [h, Z, l, C],
        );
        if (
          (G.current
            ? (t = (0, i.jsx)(
                u.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(I.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((t =
                0 === M.length
                  ? (0, i.jsx)(
                      u.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: S.intl.string(S.t.YSNlV1),
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : M.map(b)),
              null != v &&
                (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                    t,
                    (0, i.jsx)(u.MenuSeparator, {}, "separator"),
                    v,
                  ],
                }))),
          !_.TPd.TEXTUAL.has(h.type))
        ) {
          if (null == v) return null;
          t = v;
        }
        return (0, i.jsx)(u.MenuItem, {
          id: "apps",
          label: S.intl.string(S.t.PHjkRE),
          listClassName: N.list,
          children: t,
        });
      };
    },
    915193: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return E;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        l = e(692547),
        a = e(481060),
        o = e(493683),
        u = e(129861),
        d = e(700582),
        s = e(594174),
        c = e(388032),
        T = e(346411);
      function I(n) {
        let { color: t, className: e } = n;
        return (0, i.jsx)("svg", {
          className: e,
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
                stroke: t,
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
      function E(n, t) {
        let e = (0, r.e7)([s.default], () => s.default.getCurrentUser());
        return null == e || t.ownerId !== e.id || n.id === e.id
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "make-dm-owner",
              color: "danger",
              label: c.intl.string(c.t["6t3CyM"]),
              action: () => {
                var r;
                return (
                  (r = e),
                  void (0, a.openModal)((e) =>
                    (0, i.jsxs)(a.ConfirmModal, {
                      bodyClassName: T.confirmModal,
                      header: c.intl.string(c.t.WZoUsr),
                      confirmText: c.intl.string(c.t["cY+Ooa"]),
                      cancelText: c.intl.string(c.t["ETE/oK"]),
                      onConfirm: () => o.Z.setDMOwner(t.id, n.id),
                      ...e,
                      children: [
                        (0, i.jsx)(I, {
                          color: l.Z.unsafe_rawColors.PRIMARY_300.css,
                        }),
                        (0, i.jsxs)("div", {
                          className: T.fromToWrapper,
                          children: [
                            (0, i.jsx)("div", {
                              className: T.from,
                              children: (0, i.jsx)(d.Z, {
                                user: r,
                                size: a.AvatarSizes.SIZE_80,
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: T.to,
                              children: (0, i.jsx)(d.Z, {
                                user: n,
                                size: a.AvatarSizes.SIZE_80,
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(a.Text, {
                          variant: "text-md/normal",
                          children: c.intl.format(c.t.gsBb3N, {
                            usernameHook: (t, e) =>
                              (0, i.jsx)(
                                u.Z,
                                {
                                  usernameIcon: (0, i.jsx)(a.Avatar, {
                                    className: T.avatarIcon,
                                    src: n.getAvatarURL(void 0, 16),
                                    size: a.AvatarSizes.SIZE_16,
                                    "aria-hidden": !0,
                                  }),
                                  className: T.discordTag,
                                  usernameClass: T.username,
                                  discriminatorClass: T.discriminator,
                                  user: n,
                                },
                                e,
                              ),
                          }),
                        }),
                      ],
                    }),
                  )
                );
              },
            });
      }
    },
    88966: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        l = e(481060),
        a = e(493683),
        o = e(40851),
        u = e(314897),
        d = e(981631),
        s = e(388032);
      function c(n, t) {
        let e = (0, o.Aq)();
        return (0, r.e7)([u.default], () => u.default.getId() === n) ||
          t === d.IlC.POPOUT
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "message-user",
              label: s.intl.string(s.t.OAJQlJ),
              action: () => {
                a.Z.openPrivateChannel(n),
                  e.dispatch(d.CkL.POPOUT_CLOSE),
                  (0, l.closeAllModals)();
              },
            });
      }
    },
    397616: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        l = e(481060),
        a = e(493683),
        o = e(592125),
        u = e(594174),
        d = e(388032);
      function s(n, t) {
        var e;
        let s = (0, r.e7)([u.default], () => u.default.getCurrentUser(), []),
          c = (0, r.e7)([o.Z], () => o.Z.getChannel(t), [t]);
        return null == c ||
          c.isOwner(n) ||
          null == s ||
          !c.isOwner(s.id) ||
          !(null === (e = c.recipients) || void 0 === e
            ? void 0
            : e.includes(n))
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "remove",
              label: d.intl.string(d.t.n5zMIy),
              action: () => a.Z.removeRecipient(t, n),
              color: "danger",
            });
      }
    },
    558924: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var r = e(442837),
        l = e(481060),
        a = e(26151),
        o = e(358221),
        u = e(985588),
        d = e(354459),
        s = e(388032);
      function c(n, t) {
        let [e, c] = (0, r.Wu)(
          [o.Z],
          () => [o.Z.getParticipants(t), o.Z.getParticipant(t, n.id)],
          [t, n.id],
        );
        return (0, u.s)(n) && 0 !== e.length
          ? null == c
            ? (0, i.jsx)(l.MenuItem, {
                id: "ring",
                label: s.intl.string(s.t.bHa9kJ),
                action: () => a.Z.ring(t, [n.id]),
              })
            : c.type === d.fO.USER && c.ringing
              ? (0, i.jsx)(l.MenuItem, {
                  id: "stop-ringing",
                  label: s.intl.string(s.t.ygslb2),
                  action: () => a.Z.stopRinging(t, [n.id]),
                })
              : null
          : null;
      }
    },
    53304: function (n, t, e) {
      n.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    62352: function (n, t, e) {
      n.exports = { list: "list_fd4745" };
    },
    346411: function (n, t, e) {
      n.exports = {
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
    201683: function (n, t, e) {
      n.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
  },
]);
//# sourceMappingURL=333f03d6477543880fcd.js.map
