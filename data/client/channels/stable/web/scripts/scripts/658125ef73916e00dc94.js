"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34879"],
  {
    139387: function (e, n, t) {
      var i = t(570140),
        r = t(434404),
        l = t(821864),
        a = t(308063);
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
              await l.U3({
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
              await a.Z.update(e, n.id, n),
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
        l = t(544891),
        a = t(570140),
        o = t(981631);
      let u = ["Spidey Bot", "Captain Hook"];
      n.Z = {
        fetchForGuild(e) {
          a.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            l.tn
              .get({ url: o.ANM.GUILD_WEBHOOKS(e), oldFormErrors: !0 })
              .then((n) => {
                let { body: t } = n;
                return a.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  webhooks: t,
                });
              })
              .catch((n) => {
                let { body: t } = n;
                a.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  error: t.message,
                });
              });
        },
        fetchForChannel(e, n) {
          a.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e, channelId: n }),
            l.tn
              .get({ url: o.ANM.CHANNEL_WEBHOOKS(n), oldFormErrors: !0 })
              .then((t) => {
                let { body: i } = t;
                return a.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  channelId: n,
                  webhooks: i,
                });
              });
        },
        create: (e, n, t) => (
          null == t && (t = u[r().random(0, u.length - 1)]),
          l.tn
            .post({
              url: o.ANM.CHANNEL_WEBHOOKS(n),
              body: { name: t },
              oldFormErrors: !0,
            })
            .then((n) => {
              let { body: t } = n;
              return (
                a.Z.dispatch({
                  type: "WEBHOOK_CREATE",
                  guildId: e,
                  webhook: t,
                }),
                t
              );
            })
        ),
        delete: (e, n) =>
          l.tn.del({ url: o.ANM.WEBHOOK(n), oldFormErrors: !0 }).then(() => {
            a.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: n });
          }),
        update: (e, n, t) =>
          l.tn
            .patch({ url: o.ANM.WEBHOOK(n), body: t, oldFormErrors: !0 })
            .then((n) => {
              let { body: t } = n;
              return (
                a.Z.dispatch({
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
        l = t(314897),
        a = t(131951),
        o = t(981631),
        u = t(65154);
      function d(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : u.Yn.DEFAULT,
          t = (0, i.e7)([l.default], () => l.default.getId()),
          d = (0, i.e7)(
            [a.Z],
            () => a.Z.supports(u.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled(),
          ),
          s = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(t, n), [t, n]),
          c = null == e || e === t;
        return [
          c && (d || s),
          s,
          (e) => {
            let i = e ? o.ZUi.DISABLED : o.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(t, i, n);
          },
        ];
      }
    },
    295510: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(153867),
        l = t(468026),
        a = t(394059),
        o = t(689938);
      function u(e) {
        let { type: n, onConfirm: t, ...u } = e,
          d =
            n === a.K.STREAM
              ? o.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : o.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          s =
            n === a.K.STREAM
              ? o.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : o.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, i.jsx)(l.default, {
          confirmText: o.Z.Messages.CONFIRM,
          secondaryConfirmText: o.Z.Messages.DONT_ASK_AGAIN,
          title: d,
          cancelText: o.Z.Messages.CANCEL,
          onConfirm: t,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              t();
          },
          body: s,
          ...u,
        });
      }
    },
    441061: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(475179),
        o = t(358221),
        u = t(689938);
      function d(e) {
        let n = (0, r.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(e));
        return (0, i.jsx)(l.MenuCheckboxItem, {
          id: "no-video-hide",
          label: u.Z.Messages.STREAM_SHOW_NON_VIDEO,
          checked: !n,
          action: () => a.Z.toggleVoiceParticipantsHidden(e, !n),
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
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(740492),
        o = t(27584),
        u = t(295510),
        d = t(394059),
        s = t(65154),
        c = t(689938);
      function E(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          [t, E, I] = (0, o.Z)(e, n),
          _ = (0, r.e7)(
            [a.ZP],
            () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return t
          ? (0, i.jsx)(l.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.Z.Messages.SHOW_SELF_VIDEO,
              checked: !E,
              action: () => {
                if (_ || E) return I(!E);
                (0, l.openModal)((e) =>
                  (0, i.jsx)(u.Z, {
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
      var i = t(200651),
        r = t(192379),
        l = t(442837),
        a = t(481060),
        o = t(58540),
        u = t(40851),
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
          C = (0, l.e7)([T.default], () => T.default.getUser(p)),
          g = (0, l.e7)([E.ZP], () => E.ZP.isGuestOrLurker(n, p), [n, p]);
        (0, l.e7)([_.Z], () => _.Z.getGuildVersion(n), [n]);
        let m = r.useMemo(() => ({ [n]: [p] }), [n, p]);
        (0, o.$)(m);
        let R = M === N.IlC.POPOUT,
          y = (0, d.Z)({ guild: h, analyticsLocation: O }),
          D = (0, u.Aq)();
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
        return (0, i.jsx)(a.MenuItem, {
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
                (0, a.closeAllModals)())
              : (0, a.openModalLazy)(async () => {
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
      var i = t(200651),
        r = t(192379),
        l = t(442837),
        a = t(481060),
        o = t(139387),
        u = t(230711),
        d = t(213459),
        s = t(434404),
        c = t(430824),
        E = t(496675),
        I = t(981631),
        _ = t(689938);
      function T(e) {
        let { user: n, guildId: t, channel: T, context: N } = e,
          S = c.Z.getGuild(t),
          A = (0, l.e7)([E.Z], () =>
            null != S ? E.Z.can(I.Plq.MANAGE_GUILD, S) : null,
          ),
          p = (0, d.em)(T, !0, !0),
          O = (0, d.PL)(!0, !0),
          { isUserApp: Z, isGuildApp: M } = r.useMemo(() => {
            var e, t, i, r;
            if ((null == n ? void 0 : n.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let l = Object.values(
                null !==
                  (i =
                    null === (e = p.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {},
              ),
              a = Object.values(
                null !==
                  (r =
                    null === (t = O.result) || void 0 === t
                      ? void 0
                      : t.sections) && void 0 !== r
                  ? r
                  : {},
              );
            return {
              isGuildApp: l.some((e) => {
                var t;
                return (
                  (null === (t = e.descriptor.application) || void 0 === t
                    ? void 0
                    : t.id) === (null == n ? void 0 : n.id)
                );
              }),
              isUserApp: a.some((e) => {
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
                o.Z.setSection(I.b4C.APPLICATION, null == n ? void 0 : n.id);
          }, [null == n ? void 0 : n.id, null == S ? void 0 : S.id]),
          h = r.useCallback(() => {
            u.Z.open(I.oAB.AUTHORIZED_APPS);
          }, []),
          G = N === I.IlC.POPOUT;
        if (!(null == n ? void 0 : n.bot) || !A || G || (!M && !Z)) return null;
        let C = [];
        return (
          M &&
            C.push(
              (0, i.jsx)(
                a.MenuItem,
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
                a.MenuItem,
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
          return a;
        },
        z: function () {
          return l;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060);
      function l(e, n, l) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await t.e("72920").then(t.bind(t, 109730));
          return (t) =>
            (0, i.jsx)(r, {
              guildId: e,
              userId: n,
              anaylticsLocations: l,
              ...t,
            });
        });
      }
      function a(e, n, l) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await t.e("76233").then(t.bind(t, 171494));
          return (t) =>
            (0, i.jsx)(r, {
              guildId: e,
              userId: n,
              anaylticsLocations: l,
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
          return l;
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
          return a;
        },
        sE: function () {
          return S;
        },
      });
      var i,
        r,
        l,
        a,
        o = t(192379),
        u = t(100527),
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
        return o.useCallback(
          (n) => {
            !(function (e) {
              let n = { guild_id: e, location: u.Z.MEMBER_SAFETY_PAGE };
              I(E.rMx.MOD_DASH_SEARCH_MEMBERS, n);
            })(e);
          },
          [e],
        );
      }
      function T(e) {
        return o.useCallback(
          (n) => {
            !(function (e, n) {
              let t = {
                selected_role_count: n.size,
                guild_id: e,
                location: u.Z.MEMBER_SAFETY_PAGE,
              };
              I(E.rMx.MOD_DASH_FILTER_ROLES, t);
            })(e, n);
          },
          [e],
        );
      }
      ((i = l || (l = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (i.COMMUNICATION_DISABLED = "communication_disabled"),
        (i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (i.USERNAME_QUARANTINED = "username_quarantined");
      function N(e) {
        return o.useCallback(
          (n) => {
            !(function (e, n) {
              let t = {
                flag_type: n,
                guild_id: e,
                location: u.Z.MEMBER_SAFETY_PAGE,
              };
              I(E.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t);
            })(e, n);
          },
          [e],
        );
      }
      function S(e, n) {
        let { location: t, targetUserId: i, targets: r, locations: l } = n;
        return o.useCallback(
          (n) => {
            let a = {
              action_type: n,
              mod_user_id: s.default.getId(),
              guild_id: e,
              location: t,
              locations: l,
              target_user_id: null != i ? i : void 0,
              targets: null != r ? r : void 0,
            };
            I(E.rMx.MODERATION_ACTION, a);
          },
          [e, t, i, r, l],
        );
      }
      function A(e, n) {
        I(E.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: e, location: n });
      }
      ((r = a || (a = {})).BAN = "ban"),
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
          return u;
        },
      });
      var i = t(544891),
        r = t(570140),
        l = t(555573),
        a = t(581364),
        o = t(981631);
      function u() {
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
        i.tn.get(o.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, n)).then(
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
        let l = [];
        try {
          let r = await i.tn.get(
            o.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, n, t),
          );
          r.ok && (l = r.body.permissions);
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
          permissions: l,
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
            defaultEverywhereValue: o,
            guildId: u,
            permissions: d,
          } = e,
          s =
            t === n
              ? (function (e, n, t, i) {
                  if (!t || !i) return n;
                  let r = { [e]: t, [(0, a.bD)(e)]: i };
                  return n.filter((e) => {
                    let n = r[e.id];
                    return null == n || e.permission !== n;
                  });
                })(u, d, i, o)
              : d,
          c = await l.dh(n, u, t, s);
        c.ok &&
          r.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: n,
            commandId: t,
            guildId: u,
            permissions: c.body.permissions,
          });
      }
    },
    978983: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(53304);
      n.Z = () =>
        (0, i.jsx)("div", {
          className: l.loadingWrapper,
          children: (0, i.jsx)(r.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    977059: function (e, n, t) {
      t.d(n, {
        R: function () {
          return l;
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
      function l(e) {
        let { location: n } = e;
        return i.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
      }
    },
    441894: function (e, n, t) {
      t.d(n, {
        J: function () {
          return u;
        },
      }),
        t(47120);
      var i = t(442837),
        r = t(592125),
        l = t(19780),
        a = t(977059),
        o = t(760373);
      function u(e) {
        let { channelId: n, location: t } = e,
          { enabled: u } = (0, a.S)({ location: t });
        return (0, i.e7)(
          [l.Z, r.Z],
          () =>
            (function (e, n) {
              var t;
              let [i, a] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [l.Z, r.Z];
              if (!n || null == e || i.getChannelId() !== e) return !1;
              let u = a.getChannel(e);
              if (null == u || u.isGuildStageVoice()) return !1;
              let d =
                null === (t = i.getSecureFramesState()) || void 0 === t
                  ? void 0
                  : t.version;
              return null != d && d !== o.Eg;
            })(n, u, [l.Z, r.Z]),
          [n, u],
        );
      }
    },
    286694: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(592125),
        o = t(430824),
        u = t(496675),
        d = t(594174),
        s = t(471253),
        c = t(88751),
        E = t(981631),
        I = t(689938);
      function _(e, n, t) {
        var _;
        let T = a.Z.getChannel(t),
          N = (0, r.e7)([o.Z], () => o.Z.getGuild(n), [n]),
          S = (0, r.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, t), [
            t,
            e.id,
          ]),
          A =
            (null === (_ = d.default.getCurrentUser()) || void 0 === _
              ? void 0
              : _.id) === e.id,
          p = (0, r.e7)(
            [u.Z],
            () =>
              null != t &&
              u.Z.canWithPartialContext(E.Plq.MUTE_MEMBERS, { channelId: t }),
            [t],
          );
        return null != T && null != N && (p || A) && S.speaker
          ? (0, i.jsx)(l.MenuItem, {
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
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(239091),
        o = t(883385),
        u = t(108843),
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
      n.default = (0, u.Z)(
        (0, o.Z)(
          function (e) {
            let {
                user: n,
                guildId: t,
                channel: o,
                showMediaItems: u = !1,
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
              q = (0, b.Z)({ userId: n.id, guildId: t, channelId: o.id }),
              z = (0, y.Z)(n, t, V),
              X = (0, D.Z)(n.id, V),
              Q = (0, x.Z)(n.id),
              J = (0, g.Z)({ user: n, context: V }),
              $ = (0, f.Z)({
                user: n,
                guildId: t,
                channelId: o.id,
                context: V,
              }),
              ee = (0, M.Z)({ user: n }),
              en = (0, L.Z)(n.id),
              et = (0, U.Z)(n.id),
              ei = (0, T.B)({
                userId: n.id,
                channelId: o.id,
                guildId: o.getGuildId(),
                location: "GuildChannelUserContextMenu",
              }),
              er = (0, S.Z)({
                guildId: t,
                userId: n.id,
                analyticsLocation: Y,
                context: V,
              }),
              el = (0, R.Z)({ user: n, guildId: t }),
              ea = (0, s.Z)(null, n),
              eo = (0, Z.Z)(n),
              eu = (0, C.Z)({ user: n }),
              ed = (0, h.Z)(n, t, o.id),
              es = (0, P.Z)(n.id, t),
              ec = (0, v.Z)(n, t),
              eE = (0, N.Z)({ id: n.id, label: F.Z.Messages.COPY_ID_USER }),
              eI = (0, m.Z)(n.id, o.id),
              e_ = (0, I.Z)(n.id),
              eT = (0, E.Z)(o.id),
              eN = (0, A.Z)(n),
              eS = (0, p.Z)(n, t, o.id),
              eA = (0, r.e7)([O.Z], () =>
                null != w ? O.Z.getChannel(w) : null,
              ),
              ep = (0, G.Z)({
                commandType: d.yU.USER,
                commandTargetId: n.id,
                channel: null != eA ? eA : o,
                guildId: t,
                onHeightUpdate: K,
                context: V,
              }),
              eO = (0, _.Z)(n.id),
              eZ = n.isNonUserBot();
            return (0, i.jsxs)(l.Menu, {
              navId: "user-context",
              onClose: a.Zy,
              "aria-label": F.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: W,
              children: [
                !eZ &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(l.MenuGroup, { children: [eN, k && eS] }),
                      (0, i.jsxs)(l.MenuGroup, {
                        children: [j && q, c && z, X, J, j && $, j && ee, Q],
                      }),
                      u && (0, i.jsx)(l.MenuGroup, { children: en }),
                      (0, i.jsx)(l.MenuGroup, { children: j && ea }),
                      (0, i.jsxs)(l.MenuGroup, {
                        children: [
                          u && et,
                          u && ei,
                          u && eI,
                          j && er,
                          ep,
                          j && el,
                          eo,
                          j && eu,
                          B && eO,
                        ],
                      }),
                      (0, i.jsx)(l.MenuGroup, { children: ed }),
                      (0, i.jsxs)(l.MenuGroup, { children: [es, ec] }),
                      B && (0, i.jsxs)(l.MenuGroup, { children: [eT, e_] }),
                    ],
                  }),
                (0, i.jsx)(l.MenuGroup, { children: eE }),
              ],
            });
          },
          { object: H.qAy.CONTEXT_MENU },
        ),
        [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU],
      );
    },
    570870: function (e, n, t) {
      var i = t(200651),
        r = t(192379),
        l = t(512722),
        a = t.n(l),
        o = t(442837),
        u = t(481060),
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
            commandTargetId: l,
            channel: O,
            guildId: Z,
            onHeightUpdate: M,
            context: f,
          } = e,
          h = (0, o.e7)([_.Z], () => _.Z.getGuild(null != Z ? Z : O.guild_id)),
          G = (0, o.e7)([T.default], () => T.default.getUser(l)),
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
          } = d.wi({
            channel: O,
            filters: { commandTypes: [t] },
            options: { limit: S.lr },
            allowFetch: !0,
          }),
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
            a()(null != O, "menu item should not show if channel is null");
            let n = y[e.applicationId],
              t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
              u.MenuItem,
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
                    commandTargetId: l,
                  });
                },
              },
              e.id,
            );
          },
          [O, h, l, y],
        );
        if (
          (R.current
            ? (n = (0, i.jsx)(
                u.MenuItem,
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
                      u.MenuItem,
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
                    (0, i.jsx)(u.MenuSeparator, {}, "separator"),
                    C,
                  ],
                }))),
          !N.TPd.TEXTUAL.has(O.type))
        ) {
          if (null == C) return null;
          n = C;
        }
        return (0, i.jsx)(u.MenuItem, {
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
//# sourceMappingURL=658125ef73916e00dc94.js.map
