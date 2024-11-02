"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34879"],
  {
    139387: function (e, t, n) {
      var i = n(570140),
        r = n(434404),
        l = n(821864),
        a = n(308063);
      t.Z = {
        init() {
          i.Z.dispatch({ type: "INTEGRATION_SETTINGS_INIT" });
        },
        setSection(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_SET_SECTION",
            section: e,
            sectionId: t,
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
        async saveApplicationPermissions(e, t, n) {
          try {
            i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await l.U3({
                applicationId: e,
                commandId: e,
                defaultEveryoneValue: !0,
                defaultEverywhereValue: !0,
                guildId: t,
                permissions: n,
              }),
              i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (e) {
            i.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: e.body,
            });
          }
        },
        async saveIntegration(e, t) {
          try {
            i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await r.Z.updateIntegration(
                e,
                t.id,
                t.expire_behavior,
                t.expire_grace_period,
                t.enable_emoticons,
              ),
              i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (e) {
            i.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: e.body,
            });
          }
        },
        async saveWebhook(e, t) {
          try {
            i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await a.Z.update(e, t.id, t),
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
    308063: function (e, t, n) {
      var i = n(392711),
        r = n.n(i),
        l = n(544891),
        a = n(570140),
        o = n(981631);
      let u = ["Spidey Bot", "Captain Hook"];
      t.Z = {
        fetchForGuild(e) {
          a.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            l.tn
              .get({ url: o.ANM.GUILD_WEBHOOKS(e), oldFormErrors: !0 })
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
            l.tn
              .get({ url: o.ANM.CHANNEL_WEBHOOKS(t), oldFormErrors: !0 })
              .then((n) => {
                let { body: i } = n;
                return a.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  channelId: t,
                  webhooks: i,
                });
              });
        },
        create: (e, t, n) => (
          null == n && (n = u[r().random(0, u.length - 1)]),
          l.tn
            .post({
              url: o.ANM.CHANNEL_WEBHOOKS(t),
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
          l.tn.del({ url: o.ANM.WEBHOOK(t), oldFormErrors: !0 }).then(() => {
            a.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: t });
          }),
        update: (e, t, n) =>
          l.tn
            .patch({ url: o.ANM.WEBHOOK(t), body: n, oldFormErrors: !0 })
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
      var i, r;
      n.d(t, {
        K: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.STREAM = 0)] = "STREAM"),
        (r[(r.VIDEO = 1)] = "VIDEO");
    },
    27584: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(442837),
        r = n(846027),
        l = n(314897),
        a = n(131951),
        o = n(981631),
        u = n(65154);
      function d(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : u.Yn.DEFAULT,
          n = (0, i.e7)([l.default], () => l.default.getId()),
          d = (0, i.e7)(
            [a.Z],
            () => a.Z.supports(u.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled(),
          ),
          s = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(n, t), [n, t]),
          c = null == e || e === n;
        return [
          c && (d || s),
          s,
          (e) => {
            let i = e ? o.ZUi.DISABLED : o.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(n, i, t);
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
      var i = n(200651);
      n(192379);
      var r = n(153867),
        l = n(468026),
        a = n(394059),
        o = n(388032);
      function u(e) {
        let { type: t, onConfirm: n, ...u } = e,
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
          onConfirm: n,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              n();
          },
          body: s,
          ...u,
        });
      }
    },
    441061: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(442837),
        l = n(481060),
        a = n(475179),
        o = n(358221),
        u = n(388032);
      function d(e) {
        let t = (0, r.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(e));
        return (0, i.jsx)(l.MenuCheckboxItem, {
          id: "no-video-hide",
          label: u.intl.string(u.t.BL8ss7),
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
      var i = n(200651);
      n(192379);
      var r = n(442837),
        l = n(481060),
        a = n(740492),
        o = n(27584),
        u = n(295510),
        d = n(394059),
        s = n(65154),
        c = n(388032);
      function E(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          [n, E, I] = (0, o.Z)(e, t),
          T = (0, r.e7)(
            [a.ZP],
            () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return n
          ? (0, i.jsx)(l.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.intl.string(c.t.MH8ESU),
              checked: !E,
              action: () => {
                if (T || E) return I(!E);
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
    976192: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return A;
        },
      });
      var i = n(200651),
        r = n(192379),
        l = n(442837),
        a = n(481060),
        o = n(58540),
        u = n(40851),
        d = n(300284),
        s = n(484459),
        c = n(314897),
        E = n(271383),
        I = n(430824),
        T = n(496675),
        _ = n(594174),
        p = n(981631),
        N = n(388032),
        S = n(745974);
      function A(e) {
        let {
            guildId: t,
            userId: A,
            analyticsLocation: f,
            analyticsLocations: Z,
            context: h,
            icon: O,
          } = e,
          M = I.Z.getGuild(t),
          g = c.default.getId(),
          G = (0, l.e7)([_.default], () => _.default.getUser(A)),
          m = (0, l.e7)([E.ZP], () => E.ZP.isGuestOrLurker(t, A), [t, A]);
        (0, l.e7)([T.Z], () => T.Z.getGuildVersion(t), [t]);
        let C = r.useMemo(() => ({ [t]: [A] }), [t, A]);
        (0, o.$)(C);
        let y = h === p.IlC.POPOUT,
          R = (0, d.Z)({ guild: M, analyticsLocation: f }),
          v = (0, u.Aq)();
        if (null == M || y) return null;
        let b =
            g === A &&
            (T.Z.can(p.Plq.CHANGE_NICKNAME, M) ||
              T.Z.can(p.Plq.MANAGE_NICKNAMES, M)),
          U = g === A,
          P = T.Z.canManageUser(p.Plq.MANAGE_NICKNAMES, A, M);
        if (!(b || P || U) || null == G || m) return null;
        let D = M.hasFeature(p.oNc.HUB)
            ? N.intl.string(N.t["+MWrWl"])
            : N.intl.string(N.t["PKQB/P"]),
          x = U ? D : N.intl.string(N.t.dilOFx);
        return (0, i.jsx)(a.MenuItem, {
          id: "change-nickname",
          label: (0, i.jsx)("div", {
            className: S.labelWrapper,
            children: (0, i.jsx)("span", { className: S.label, children: x }),
          }),
          icon: O,
          action: () => {
            U
              ? ((0, s.Z)(G.id, G.getAvatarURL(t, 80), { guildId: t }),
                R(),
                v.dispatch(p.CkL.POPOUT_CLOSE),
                (0, a.closeAllModals)())
              : (0, a.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("17712")
                    .then(n.bind(n, 620021));
                  return (n) =>
                    (0, i.jsx)(e, {
                      ...n,
                      guildId: t,
                      user: G,
                      analyticsSource: f,
                      analyticsLocations: Z,
                    });
                });
          },
        });
      }
    },
    276022: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      }),
        n(653041);
      var i = n(200651),
        r = n(192379),
        l = n(442837),
        a = n(481060),
        o = n(139387),
        u = n(230711),
        d = n(213459),
        s = n(434404),
        c = n(430824),
        E = n(496675),
        I = n(981631),
        T = n(388032);
      function _(e) {
        let { user: t, guildId: n, channel: _, context: p } = e,
          N = c.Z.getGuild(n),
          S = (0, l.e7)([E.Z], () =>
            null != N ? E.Z.can(I.Plq.MANAGE_GUILD, N) : null,
          ),
          A = (0, d.em)(_, !0, !0),
          f = (0, d.PL)(!0, !0),
          { isUserApp: Z, isGuildApp: h } = r.useMemo(() => {
            var e, n, i, r;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let l = Object.values(
                null !==
                  (i =
                    null === (e = A.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {},
              ),
              a = Object.values(
                null !==
                  (r =
                    null === (n = f.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== r
                  ? r
                  : {},
              );
            return {
              isGuildApp: l.some((e) => {
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
          }, [A, f, null == t ? void 0 : t.id]),
          O = r.useCallback(() => {
            if ((null == N ? void 0 : N.id) != null)
              s.Z.open(N.id, I.pNK.INTEGRATIONS),
                o.Z.setSection(I.b4C.APPLICATION, null == t ? void 0 : t.id);
          }, [null == t ? void 0 : t.id, null == N ? void 0 : N.id]),
          M = r.useCallback(() => {
            u.Z.open(I.oAB.AUTHORIZED_APPS);
          }, []),
          g = p === I.IlC.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !S || g || (!h && !Z)) return null;
        let G = [];
        return (
          h &&
            G.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-integration",
                  label: T.intl.string(T.t["aw+qtb"]),
                  action: O,
                },
                "manage-integration",
              ),
            ),
          Z &&
            G.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: T.intl.string(T.t.ALLIgY),
                  action: M,
                },
                "manage-authorized-app",
              ),
            ),
          G
        );
      }
    },
    251794: function (e, t, n) {
      n.d(t, {
        q: function () {
          return a;
        },
        z: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060);
      function l(e, t, l) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await n.e("72920").then(n.bind(n, 109730));
          return (n) =>
            (0, i.jsx)(r, {
              guildId: e,
              userId: t,
              anaylticsLocations: l,
              ...n,
            });
        });
      }
      function a(e, t, l) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await n.e("76233").then(n.bind(n, 171494));
          return (n) =>
            (0, i.jsx)(r, {
              guildId: e,
              userId: t,
              anaylticsLocations: l,
              ...n,
            });
        });
      }
    },
    910693: function (e, t, n) {
      n.d(t, {
        BG: function () {
          return _;
        },
        aY: function () {
          return l;
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
          return a;
        },
        sE: function () {
          return N;
        },
      });
      var i,
        r,
        l,
        a,
        o = n(192379),
        u = n(100527),
        d = n(367907),
        s = n(314897),
        c = n(626135),
        E = n(981631);
      function I(e, t, n) {
        var i;
        let r = {
          ...t,
          ...(0, d.hH)(null !== (i = t.guild_id) && void 0 !== i ? i : n),
        };
        c.default.track(e, r);
      }
      function T(e) {
        return o.useCallback(
          (t) => {
            !(function (e) {
              let t = { guild_id: e, location: u.Z.MEMBER_SAFETY_PAGE };
              I(E.rMx.MOD_DASH_SEARCH_MEMBERS, t);
            })(e);
          },
          [e],
        );
      }
      function _(e) {
        return o.useCallback(
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
      ((i = l || (l = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (i.COMMUNICATION_DISABLED = "communication_disabled"),
        (i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (i.USERNAME_QUARANTINED = "username_quarantined");
      function p(e) {
        return o.useCallback(
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
      function N(e, t) {
        let { location: n, targetUserId: i, targets: r, locations: l } = t;
        return o.useCallback(
          (t) => {
            let a = {
              action_type: t,
              mod_user_id: s.default.getId(),
              guild_id: e,
              location: n,
              locations: l,
              target_user_id: null != i ? i : void 0,
              targets: null != r ? r : void 0,
            };
            I(E.rMx.MODERATION_ACTION, a);
          },
          [e, n, i, r, l],
        );
      }
      function S(e, t) {
        I(E.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: e, location: t });
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
    821864: function (e, t, n) {
      n.d(t, {
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
      var i = n(544891),
        r = n(570140),
        l = n(555573),
        a = n(581364),
        o = n(981631);
      function u() {
        r.Z.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function d(e, t, n) {
        r.Z.dispatch({
          applicationId: e,
          commandId: t,
          permissions: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function s(e, t) {
        i.tn.get(o.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(
          (n) => {
            r.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
              applicationId: t,
              commands: n.body.application_commands,
              guildId: e,
              permissions: n.body.permissions,
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
      async function c(e, t, n) {
        let l = [];
        try {
          let r = await i.tn.get(
            o.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
          );
          r.ok && (l = r.body.permissions);
        } catch (i) {
          if (404 !== i.status) {
            r.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
              applicationId: e,
              commandId: n,
              guildId: t,
            });
            return;
          }
        }
        r.Z.dispatch({
          type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
          applicationId: e,
          commandId: n,
          guildId: t,
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
      async function T(e) {
        let {
            applicationId: t,
            commandId: n,
            defaultEveryoneValue: i,
            defaultEverywhereValue: o,
            guildId: u,
            permissions: d,
          } = e,
          s =
            n === t
              ? (function (e, t, n, i) {
                  if (!n || !i) return t;
                  let r = { [e]: n, [(0, a.bD)(e)]: i };
                  return t.filter((e) => {
                    let t = r[e.id];
                    return null == t || e.permission !== t;
                  });
                })(u, d, i, o)
              : d,
          c = await l.dh(t, u, n, s);
        c.ok &&
          r.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: n,
            guildId: u,
            permissions: c.body.permissions,
          });
      }
    },
    978983: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var r = n(481060),
        l = n(53304);
      t.Z = () =>
        (0, i.jsx)("div", {
          className: l.loadingWrapper,
          children: (0, i.jsx)(r.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    977059: function (e, t, n) {
      n.d(t, {
        R: function () {
          return l;
        },
        S: function () {
          return r;
        },
      });
      let i = (0, n(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function r(e) {
        let { location: t } = e;
        return i.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function l(e) {
        let { location: t } = e;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    441894: function (e, t, n) {
      n.d(t, {
        J: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(442837),
        r = n(592125),
        l = n(19780),
        a = n(977059),
        o = n(760373);
      function u(e) {
        let { channelId: t, location: n } = e,
          { enabled: u } = (0, a.S)({ location: n });
        return (0, i.e7)(
          [l.Z, r.Z],
          () =>
            (function (e, t) {
              var n;
              let [i, a] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [l.Z, r.Z];
              if (!t || null == e || i.getChannelId() !== e) return !1;
              let u = a.getChannel(e);
              if (null == u || u.isGuildStageVoice()) return !1;
              let d =
                null === (n = i.getSecureFramesState()) || void 0 === n
                  ? void 0
                  : n.version;
              return null != d && d !== o.Eg;
            })(t, u, [l.Z, r.Z]),
          [t, u],
        );
      }
    },
    286694: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(442837),
        l = n(481060),
        a = n(592125),
        o = n(430824),
        u = n(496675),
        d = n(594174),
        s = n(471253),
        c = n(88751),
        E = n(981631),
        I = n(388032);
      function T(e, t, n) {
        var T;
        let _ = a.Z.getChannel(n),
          p = (0, r.e7)([o.Z], () => o.Z.getGuild(t), [t]),
          N = (0, r.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, n), [
            n,
            e.id,
          ]),
          S =
            (null === (T = d.default.getCurrentUser()) || void 0 === T
              ? void 0
              : T.id) === e.id,
          A = (0, r.e7)(
            [u.Z],
            () =>
              null != n &&
              u.Z.canWithPartialContext(E.Plq.MUTE_MEMBERS, { channelId: n }),
            [n],
          );
        return null != _ && null != p && (A || S) && N.speaker
          ? (0, i.jsx)(l.MenuItem, {
              id: "audience",
              label: S
                ? I.intl.string(I.t["6C6PJy"])
                : I.intl.string(I.t.VK3vQ0),
              action: () => {
                S ? (0, s.yi)(_) : (0, s.hz)(e, _);
              },
            })
          : null;
      }
    },
    757387: function (e, t, n) {
      n.r(t);
      var i = n(200651);
      n(192379);
      var r = n(442837),
        l = n(481060),
        a = n(239091),
        o = n(883385),
        u = n(108843),
        d = n(911969),
        s = n(947440),
        c = n(100527),
        E = n(441061),
        I = n(167675),
        T = n(737013),
        _ = n(607783),
        p = n(299206),
        N = n(976192),
        S = n(819403),
        A = n(286694),
        f = n(592125),
        Z = n(777658),
        h = n(858488),
        O = n(185457),
        M = n(933409),
        g = n(570870),
        G = n(389052),
        m = n(24311),
        C = n(332576),
        y = n(710631),
        R = n(297047),
        v = n(88966),
        b = n(712301),
        U = n(991307),
        P = n(725119),
        D = n(931617),
        x = n(700994),
        L = n(332031),
        H = n(981631),
        j = n(388032);
      t.default = (0, u.Z)(
        (0, o.Z)(
          function (e) {
            let {
                user: t,
                guildId: n,
                channel: o,
                showMediaItems: u = !1,
                showChatItems: c = !0,
                showChannelCallItems: k = !1,
                showModalItems: B = !0,
                showStageChannelItems: F = !1,
                context: W,
                onSelect: K,
                onHeightUpdate: V,
                viewingChannelId: w,
              } = e,
              Y = {
                page: H.ZY5.GUILD_CHANNEL,
                section: H.jXE.CHAT_USERNAME,
                object: H.qAy.CONTEXT_MENU_ITEM,
              },
              q = (0, P.Z)({ userId: t.id, guildId: n, channelId: o.id }),
              z = (0, R.Z)(t, n, W),
              X = (0, v.Z)(t.id, W),
              Q = (0, L.Z)(t.id),
              J = (0, m.Z)({ user: t, context: W }),
              $ = (0, O.Z)({
                user: t,
                guildId: n,
                channelId: o.id,
                context: W,
              }),
              ee = (0, h.Z)({ user: t }),
              et = (0, x.Z)(t.id),
              en = (0, U.Z)(t.id),
              ei = (0, _.B)({
                userId: t.id,
                channelId: o.id,
                guildId: o.getGuildId(),
                location: "GuildChannelUserContextMenu",
              }),
              er = (0, N.Z)({
                guildId: n,
                userId: t.id,
                analyticsLocation: Y,
                context: W,
              }),
              el = (0, y.Z)({ user: t, guildId: n }),
              ea = (0, s.Z)(null, t),
              eo = (0, Z.Z)(t),
              eu = (0, G.Z)({ user: t }),
              ed = (0, M.Z)(t, n, o.id),
              es = (0, D.Z)(t.id, n),
              ec = (0, b.Z)(t, n),
              eE = (0, p.Z)({ id: t.id, label: j.intl.string(j.t["/AXYnJ"]) }),
              eI = (0, C.Z)(t.id, o.id),
              eT = (0, I.Z)(t.id),
              e_ = (0, E.Z)(o.id),
              ep = (0, S.Z)(t),
              eN = (0, A.Z)(t, n, o.id),
              eS = (0, r.e7)([f.Z], () =>
                null != w ? f.Z.getChannel(w) : null,
              ),
              eA = (0, g.Z)({
                commandType: d.yU.USER,
                commandTargetId: t.id,
                channel: null != eS ? eS : o,
                guildId: n,
                onHeightUpdate: V,
                context: W,
              }),
              ef = (0, T.Z)(t.id),
              eZ = t.isNonUserBot();
            return (0, i.jsxs)(l.Menu, {
              navId: "user-context",
              onClose: a.Zy,
              "aria-label": j.intl.string(j.t.liqwPD),
              onSelect: K,
              children: [
                !eZ &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(l.MenuGroup, { children: [ep, F && eN] }),
                      (0, i.jsxs)(l.MenuGroup, {
                        children: [B && q, c && z, X, J, B && $, B && ee, Q],
                      }),
                      u && (0, i.jsx)(l.MenuGroup, { children: et }),
                      (0, i.jsx)(l.MenuGroup, { children: B && ea }),
                      (0, i.jsxs)(l.MenuGroup, {
                        children: [
                          u && en,
                          u && ei,
                          u && eI,
                          B && er,
                          eA,
                          B && el,
                          eo,
                          B && eu,
                          k && ef,
                        ],
                      }),
                      (0, i.jsx)(l.MenuGroup, { children: ed }),
                      (0, i.jsxs)(l.MenuGroup, { children: [es, ec] }),
                      k && (0, i.jsxs)(l.MenuGroup, { children: [e_, eT] }),
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
    570870: function (e, t, n) {
      var i = n(200651),
        r = n(192379),
        l = n(512722),
        a = n.n(l),
        o = n(442837),
        u = n(481060),
        d = n(10718),
        s = n(667204),
        c = n(826298),
        E = n(276022),
        I = n(978983),
        T = n(430824),
        _ = n(594174),
        p = n(981631),
        N = n(689079),
        S = n(388032),
        A = n(62352);
      t.Z = (e) => {
        let t,
          {
            commandType: n,
            commandTargetId: l,
            channel: f,
            guildId: Z,
            onHeightUpdate: h,
            context: O,
          } = e,
          M = (0, o.e7)([T.Z], () => T.Z.getGuild(null != Z ? Z : f.guild_id)),
          g = (0, o.e7)([_.default], () => _.default.getUser(l)),
          G = (0, E.Z)({
            user: g,
            guildId: null == M ? void 0 : M.id,
            channel: f,
            context: O,
          }),
          {
            commands: m,
            sectionDescriptors: C,
            loading: y,
          } = d.wi({
            channel: f,
            filters: { commandTypes: [n] },
            options: { limit: N.lr },
            allowFetch: !0,
          }),
          { sections: R } = r.useMemo(() => {
            let e = {};
            return (
              C.forEach((t) => {
                e[t.id] = t;
              }),
              { sections: e }
            );
          }, [C]),
          v = r.useRef(y.current);
        r.useEffect(() => {
          y.current !== v.current &&
            ((v.current = y.current), null == h || h());
        }, [y, h]);
        let b = r.useCallback(
          (e) => {
            a()(null != f, "menu item should not show if channel is null");
            let t = R[e.applicationId],
              n = null != t ? (0, c.ky)(t) : void 0;
            return (0, i.jsx)(
              u.MenuItem,
              {
                id: e.id,
                label: e.displayName,
                iconLeft: () =>
                  null != n
                    ? (0, i.jsx)(n, {
                        channel: f,
                        section: t,
                        width: 18,
                        height: 18,
                        selectable: !1,
                      })
                    : null,
                action: () => {
                  (0, s.Z)({
                    command: e,
                    optionValues: {},
                    context: { channel: f, guild: M },
                    commandTargetId: l,
                  });
                },
              },
              e.id,
            );
          },
          [f, M, l, R],
        );
        if (
          (y.current
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
                0 === m.length
                  ? (0, i.jsx)(
                      u.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: S.intl.string(S.t.YSNlV1),
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : m.map(b)),
              null != G &&
                (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                    t,
                    (0, i.jsx)(u.MenuSeparator, {}, "separator"),
                    G,
                  ],
                }))),
          !p.TPd.TEXTUAL.has(f.type))
        ) {
          if (null == G) return null;
          t = G;
        }
        return (0, i.jsx)(u.MenuItem, {
          id: "apps",
          label: S.intl.string(S.t.PHjkRE),
          listClassName: A.list,
          children: t,
        });
      };
    },
    745974: function (e, t, n) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    53304: function (e, t, n) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    62352: function (e, t, n) {
      e.exports = { list: "list_fd4745" };
    },
    201683: function (e, t, n) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    587525: function (e, t, n) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=2aebbdebc7a874f43443.js.map
