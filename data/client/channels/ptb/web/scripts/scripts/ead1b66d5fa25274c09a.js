"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34879"],
  {
    139387: function (e, n, t) {
      var i = t(570140),
        r = t(434404),
        a = t(821864),
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
        a = t(544891),
        l = t(570140),
        u = t(981631);
      let o = ["Spidey Bot", "Captain Hook"];
      n.Z = {
        fetchForGuild(e) {
          l.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            a.tn
              .get({ url: u.ANM.GUILD_WEBHOOKS(e), oldFormErrors: !0 })
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
            a.tn
              .get({ url: u.ANM.CHANNEL_WEBHOOKS(n), oldFormErrors: !0 })
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
          a.tn
            .post({
              url: u.ANM.CHANNEL_WEBHOOKS(n),
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
          a.tn.del({ url: u.ANM.WEBHOOK(n), oldFormErrors: !0 }).then(() => {
            l.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: n });
          }),
        update: (e, n, t) =>
          a.tn
            .patch({ url: u.ANM.WEBHOOK(n), body: t, oldFormErrors: !0 })
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
        a = t(314897),
        l = t(131951),
        u = t(981631),
        o = t(65154);
      function d(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.Yn.DEFAULT,
          t = (0, i.e7)([a.default], () => a.default.getId()),
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
            let i = e ? u.ZUi.DISABLED : u.ZUi.MANUAL_ENABLED;
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
        l = t(394059),
        u = t(689938);
      function o(e) {
        let { type: n, onConfirm: t, ...o } = e,
          d =
            n === l.K.STREAM
              ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          s =
            n === l.K.STREAM
              ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, i.jsx)(a.default, {
          confirmText: u.Z.Messages.CONFIRM,
          secondaryConfirmText: u.Z.Messages.DONT_ASK_AGAIN,
          title: d,
          cancelText: u.Z.Messages.CANCEL,
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
        a = t(481060),
        l = t(475179),
        u = t(358221),
        o = t(689938);
      function d(e) {
        let n = (0, r.e7)([u.Z], () => u.Z.getVoiceParticipantsHidden(e));
        return (0, i.jsx)(a.MenuCheckboxItem, {
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
          return E;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var r = t(442837),
        a = t(481060),
        l = t(740492),
        u = t(27584),
        o = t(295510),
        d = t(394059),
        s = t(65154),
        c = t(689938);
      function E(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          [t, E, I] = (0, u.Z)(e, n),
          _ = (0, r.e7)(
            [l.ZP],
            () => l.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return t
          ? (0, i.jsx)(a.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.Z.Messages.SHOW_SELF_VIDEO,
              checked: !E,
              action: () => {
                if (_ || E) return I(!E);
                (0, a.openModal)((e) =>
                  (0, i.jsx)(o.Z, {
                    ...e,
                    type: d.K.VIDEO,
                    onConfirm: () => I(!E),
                  }),
                );
              },
            })
          : null;
      }
    },
    976192: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var i = t(735250),
        r = t(470079),
        a = t(442837),
        l = t(481060),
        u = t(58540),
        o = t(40851),
        d = t(300284),
        s = t(484459),
        c = t(314897),
        E = t(271383),
        I = t(430824),
        _ = t(496675),
        T = t(594174),
        N = t(981631),
        S = t(689938),
        A = t(745974);
      function p(e) {
        let {
            guildId: n,
            userId: p,
            analyticsLocation: O,
            analyticsLocations: Z,
            context: M,
            icon: f,
          } = e,
          h = I.Z.getGuild(n),
          G = c.default.getId(),
          C = (0, a.e7)([T.default], () => T.default.getUser(p)),
          g = (0, a.e7)([E.ZP], () => E.ZP.isGuestOrLurker(n, p), [n, p]);
        (0, a.e7)([_.Z], () => _.Z.getGuildVersion(n), [n]);
        let m = r.useMemo(() => ({ [n]: [p] }), [n, p]);
        (0, u.$)(m);
        let R = M === N.IlC.POPOUT,
          y = (0, d.Z)({ guild: h, analyticsLocation: O }),
          D = (0, o.Aq)();
        if (null == h || R) return null;
        let v =
            G === p &&
            (_.Z.can(N.Plq.CHANGE_NICKNAME, h) ||
              _.Z.can(N.Plq.MANAGE_NICKNAMES, h)),
          U = G === p,
          b = _.Z.canManageUser(N.Plq.MANAGE_NICKNAMES, p, h);
        if (!(v || b || U) || null == C || g) return null;
        let P = h.hasFeature(N.oNc.HUB)
            ? S.Z.Messages.HUB_EDIT_PROFILE
            : S.Z.Messages.CHANGE_IDENTITY,
          L = U ? P : S.Z.Messages.CHANGE_NICKNAME;
        return (0, i.jsx)(l.MenuItem, {
          id: "change-nickname",
          label: (0, i.jsx)("div", {
            className: A.labelWrapper,
            children: (0, i.jsx)("span", { className: A.label, children: L }),
          }),
          icon: f,
          action: () => {
            U
              ? ((0, s.Z)(C.id, C.getAvatarURL(n, 80), { guildId: n }),
                y(),
                D.dispatch(N.CkL.POPOUT_CLOSE),
                (0, l.closeAllModals)())
              : (0, l.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("17712")
                    .then(t.bind(t, 620021));
                  return (t) =>
                    (0, i.jsx)(e, {
                      ...t,
                      guildId: n,
                      user: C,
                      analyticsSource: O,
                      analyticsLocations: Z,
                    });
                });
          },
        });
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
        l = t(481060),
        u = t(139387),
        o = t(230711),
        d = t(213459),
        s = t(434404),
        c = t(430824),
        E = t(496675),
        I = t(981631),
        _ = t(689938);
      function T(e) {
        let { user: n, guildId: t, channel: T, context: N } = e,
          S = c.Z.getGuild(t),
          A = (0, a.e7)([E.Z], () =>
            null != S ? E.Z.can(I.Plq.MANAGE_GUILD, S) : null,
          ),
          p = (0, d.em)(T, !0, !0),
          O = (0, d.PL)(!0, !0),
          { isUserApp: Z, isGuildApp: M } = r.useMemo(() => {
            var e, t, i, r;
            if ((null == n ? void 0 : n.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let a = Object.values(
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
              isGuildApp: a.some((e) => {
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
          f = r.useCallback(() => {
            if ((null == S ? void 0 : S.id) != null)
              s.Z.open(S.id, I.pNK.INTEGRATIONS),
                u.Z.setSection(I.b4C.APPLICATION, null == n ? void 0 : n.id);
          }, [null == n ? void 0 : n.id, null == S ? void 0 : S.id]),
          h = r.useCallback(() => {
            o.Z.open(I.oAB.AUTHORIZED_APPS);
          }, []),
          G = N === I.IlC.POPOUT;
        if (!(null == n ? void 0 : n.bot) || !A || G || (!M && !Z)) return null;
        let C = [];
        return (
          M &&
            C.push(
              (0, i.jsx)(
                l.MenuItem,
                {
                  id: "manage-integration",
                  label: _.Z.Messages.MANAGE_INTEGRATION,
                  action: f,
                },
                "manage-integration",
              ),
            ),
          Z &&
            C.push(
              (0, i.jsx)(
                l.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: _.Z.Messages.MANAGE_AUTHORIZED_APP,
                  action: h,
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
          return a;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(481060);
      function a(e, n, a) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await t.e("72920").then(t.bind(t, 109730));
          return (t) =>
            (0, i.jsx)(r, {
              guildId: e,
              userId: n,
              anaylticsLocations: a,
              ...t,
            });
        });
      }
      function l(e, n, a) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await t.e("76233").then(t.bind(t, 171494));
          return (t) =>
            (0, i.jsx)(r, {
              guildId: e,
              userId: n,
              anaylticsLocations: a,
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
          return a;
        },
        dW: function () {
          return N;
        },
        gm: function () {
          return _;
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
        a,
        l,
        u = t(470079),
        o = t(100527),
        d = t(367907),
        s = t(314897),
        c = t(626135),
        E = t(981631);
      function I(e, n, t) {
        var i;
        let r = {
          ...n,
          ...(0, d.hH)(null !== (i = n.guild_id) && void 0 !== i ? i : t),
        };
        c.default.track(e, r);
      }
      function _(e) {
        return u.useCallback(
          (n) => {
            !(function (e) {
              let n = { guild_id: e, location: o.Z.MEMBER_SAFETY_PAGE };
              I(E.rMx.MOD_DASH_SEARCH_MEMBERS, n);
            })(e);
          },
          [e],
        );
      }
      function T(e) {
        return u.useCallback(
          (n) => {
            !(function (e, n) {
              let t = {
                selected_role_count: n.size,
                guild_id: e,
                location: o.Z.MEMBER_SAFETY_PAGE,
              };
              I(E.rMx.MOD_DASH_FILTER_ROLES, t);
            })(e, n);
          },
          [e],
        );
      }
      ((i = a || (a = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (i.COMMUNICATION_DISABLED = "communication_disabled"),
        (i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (i.USERNAME_QUARANTINED = "username_quarantined");
      function N(e) {
        return u.useCallback(
          (n) => {
            !(function (e, n) {
              let t = {
                flag_type: n,
                guild_id: e,
                location: o.Z.MEMBER_SAFETY_PAGE,
              };
              I(E.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t);
            })(e, n);
          },
          [e],
        );
      }
      function S(e, n) {
        let { location: t, targetUserId: i, targets: r, locations: a } = n;
        return u.useCallback(
          (n) => {
            let l = {
              action_type: n,
              mod_user_id: s.default.getId(),
              guild_id: e,
              location: t,
              locations: a,
              target_user_id: null != i ? i : void 0,
              targets: null != r ? r : void 0,
            };
            I(E.rMx.MODERATION_ACTION, l);
          },
          [e, t, i, r, a],
        );
      }
      function A(e, n) {
        I(E.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: e, location: n });
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
          return E;
        },
        Sn: function () {
          return s;
        },
        U3: function () {
          return _;
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
          return o;
        },
      });
      var i = t(544891),
        r = t(570140),
        a = t(555573),
        l = t(581364),
        u = t(981631);
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
        i.tn.get(u.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, n)).then(
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
            u.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, n, t),
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
      function I(e) {
        r.Z.dispatch({
          commandId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_RESET",
        });
      }
      async function _(e) {
        let {
            applicationId: n,
            commandId: t,
            defaultEveryoneValue: i,
            defaultEverywhereValue: u,
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
                })(o, d, i, u)
              : d,
          c = await a.dh(n, o, t, s);
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
        a = t(53304);
      n.Z = () =>
        (0, i.jsx)("div", {
          className: a.loadingWrapper,
          children: (0, i.jsx)(r.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    977059: function (e, n, t) {
      t.d(n, {
        R: function () {
          return a;
        },
        S: function () {
          return r;
        },
      });
      let i = (0, t(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function r(e) {
        let { location: n } = e;
        return i.useExperiment({ location: n }, { autoTrackExposure: !0 });
      }
      function a(e) {
        let { location: n } = e;
        return i.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
      }
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
        l = t(977059),
        u = t(760373);
      function o(e) {
        let { channelId: n, location: t } = e,
          { enabled: o } = (0, l.S)({ location: t });
        return (0, i.e7)(
          [a.Z, r.Z],
          () =>
            (function (e, n) {
              var t;
              let [i, l] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [a.Z, r.Z];
              if (!n || null == e || i.getChannelId() !== e) return !1;
              let o = l.getChannel(e);
              if (null == o || o.isGuildStageVoice()) return !1;
              let d =
                null === (t = i.getSecureFramesState()) || void 0 === t
                  ? void 0
                  : t.version;
              return null != d && d !== u.Eg;
            })(n, o, [a.Z, r.Z]),
          [n, o],
        );
      }
    },
    286694: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(442837),
        a = t(481060),
        l = t(592125),
        u = t(430824),
        o = t(496675),
        d = t(594174),
        s = t(471253),
        c = t(88751),
        E = t(981631),
        I = t(689938);
      function _(e, n, t) {
        var _;
        let T = l.Z.getChannel(t),
          N = (0, r.e7)([u.Z], () => u.Z.getGuild(n), [n]),
          S = (0, r.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, t), [
            t,
            e.id,
          ]),
          A =
            (null === (_ = d.default.getCurrentUser()) || void 0 === _
              ? void 0
              : _.id) === e.id,
          p = (0, r.e7)(
            [o.Z],
            () =>
              null != t &&
              o.Z.canWithPartialContext(E.Plq.MUTE_MEMBERS, { channelId: t }),
            [t],
          );
        return null != T && null != N && (p || A) && S.speaker
          ? (0, i.jsx)(a.MenuItem, {
              id: "audience",
              label: A
                ? I.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE
                : I.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
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
        a = t(481060),
        l = t(239091),
        u = t(883385),
        o = t(108843),
        d = t(911969),
        s = t(947440),
        c = t(100527),
        E = t(441061),
        I = t(167675),
        _ = t(737013),
        T = t(607783),
        N = t(299206),
        S = t(976192),
        A = t(819403),
        p = t(286694),
        O = t(592125),
        Z = t(777658),
        M = t(858488),
        f = t(185457),
        h = t(933409),
        G = t(570870),
        C = t(389052),
        g = t(24311),
        m = t(332576),
        R = t(710631),
        y = t(297047),
        D = t(88966),
        v = t(712301),
        U = t(991307),
        b = t(725119),
        P = t(931617),
        L = t(700994),
        x = t(332031),
        H = t(981631),
        F = t(689938);
      n.default = (0, o.Z)(
        (0, u.Z)(
          function (e) {
            let {
                user: n,
                guildId: t,
                channel: u,
                showMediaItems: o = !1,
                showChatItems: c = !0,
                showChannelCallItems: B = !1,
                showModalItems: j = !0,
                showStageChannelItems: k = !1,
                context: V,
                onSelect: W,
                onHeightUpdate: K,
                viewingChannelId: w,
              } = e,
              Y = {
                page: H.ZY5.GUILD_CHANNEL,
                section: H.jXE.CHAT_USERNAME,
                object: H.qAy.CONTEXT_MENU_ITEM,
              },
              q = (0, b.Z)({ userId: n.id, guildId: t, channelId: u.id }),
              z = (0, y.Z)(n, t, V),
              X = (0, D.Z)(n.id, V),
              Q = (0, x.Z)(n.id),
              J = (0, g.Z)({ user: n, context: V }),
              $ = (0, f.Z)({
                user: n,
                guildId: t,
                channelId: u.id,
                context: V,
              }),
              ee = (0, M.Z)({ user: n }),
              en = (0, L.Z)(n.id),
              et = (0, U.Z)(n.id),
              ei = (0, T.B)({
                userId: n.id,
                channelId: u.id,
                guildId: u.getGuildId(),
                location: "GuildChannelUserContextMenu",
              }),
              er = (0, S.Z)({
                guildId: t,
                userId: n.id,
                analyticsLocation: Y,
                context: V,
              }),
              ea = (0, R.Z)({ user: n, guildId: t }),
              el = (0, s.Z)(null, n),
              eu = (0, Z.Z)(n),
              eo = (0, C.Z)({ user: n }),
              ed = (0, h.Z)(n, t, u.id),
              es = (0, P.Z)(n.id, t),
              ec = (0, v.Z)(n, t),
              eE = (0, N.Z)({ id: n.id, label: F.Z.Messages.COPY_ID_USER }),
              eI = (0, m.Z)(n.id, u.id),
              e_ = (0, I.Z)(n.id),
              eT = (0, E.Z)(u.id),
              eN = (0, A.Z)(n),
              eS = (0, p.Z)(n, t, u.id),
              eA = (0, r.e7)([O.Z], () =>
                null != w ? O.Z.getChannel(w) : null,
              ),
              ep = (0, G.Z)({
                commandType: d.yU.USER,
                commandTargetId: n.id,
                channel: null != eA ? eA : u,
                guildId: t,
                onHeightUpdate: K,
                context: V,
              }),
              eO = (0, _.Z)(n.id),
              eZ = n.isNonUserBot();
            return (0, i.jsxs)(a.Menu, {
              navId: "user-context",
              onClose: l.Zy,
              "aria-label": F.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: W,
              children: [
                !eZ &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(a.MenuGroup, { children: [eN, k && eS] }),
                      (0, i.jsxs)(a.MenuGroup, {
                        children: [j && q, c && z, X, J, j && $, j && ee, Q],
                      }),
                      o && (0, i.jsx)(a.MenuGroup, { children: en }),
                      (0, i.jsx)(a.MenuGroup, { children: j && el }),
                      (0, i.jsxs)(a.MenuGroup, {
                        children: [
                          o && et,
                          o && ei,
                          o && eI,
                          j && er,
                          ep,
                          j && ea,
                          eu,
                          j && eo,
                          B && eO,
                        ],
                      }),
                      (0, i.jsx)(a.MenuGroup, { children: ed }),
                      (0, i.jsxs)(a.MenuGroup, { children: [es, ec] }),
                      B && (0, i.jsxs)(a.MenuGroup, { children: [eT, e_] }),
                    ],
                  }),
                (0, i.jsx)(a.MenuGroup, { children: eE }),
              ],
            });
          },
          { object: H.qAy.CONTEXT_MENU },
        ),
        [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU],
      );
    },
    570870: function (e, n, t) {
      var i = t(735250),
        r = t(470079),
        a = t(512722),
        l = t.n(a),
        u = t(442837),
        o = t(481060),
        d = t(10718),
        s = t(667204),
        c = t(826298),
        E = t(276022),
        I = t(978983),
        _ = t(430824),
        T = t(594174),
        N = t(981631),
        S = t(689079),
        A = t(689938),
        p = t(62352);
      n.Z = (e) => {
        let n,
          {
            commandType: t,
            commandTargetId: a,
            channel: O,
            guildId: Z,
            onHeightUpdate: M,
            context: f,
          } = e,
          h = (0, u.e7)([_.Z], () => _.Z.getGuild(null != Z ? Z : O.guild_id)),
          G = (0, u.e7)([T.default], () => T.default.getUser(a)),
          C = (0, E.Z)({
            user: G,
            guildId: null == h ? void 0 : h.id,
            channel: O,
            context: f,
          }),
          {
            commands: g,
            sectionDescriptors: m,
            loading: R,
          } = d.wi(O, { commandTypes: [t] }, { limit: S.lr }),
          { sections: y } = r.useMemo(() => {
            let e = {};
            return (
              m.forEach((n) => {
                e[n.id] = n;
              }),
              { sections: e }
            );
          }, [m]),
          D = r.useRef(R.current);
        r.useEffect(() => {
          R.current !== D.current &&
            ((D.current = R.current), null == M || M());
        }, [R, M]);
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
                iconLeft: () =>
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
                    context: { channel: O, guild: h },
                    commandTargetId: a,
                  });
                },
              },
              e.id,
            );
          },
          [O, h, a, y],
        );
        if (
          (R.current
            ? (n = (0, i.jsx)(
                o.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(I.Z, {}),
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
    745974: function (e, n, t) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    53304: function (e, n, t) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    62352: function (e, n, t) {
      e.exports = { list: "list_fd4745" };
    },
    201683: function (e, n, t) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    587525: function (e, n, t) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=ead1b66d5fa25274c09a.js.map
