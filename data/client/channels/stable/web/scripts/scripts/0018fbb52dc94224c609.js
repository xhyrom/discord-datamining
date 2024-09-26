"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60222"],
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
        o = t(981631);
      let d = ["Spidey Bot", "Captain Hook"];
      n.Z = {
        fetchForGuild(e) {
          s.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            a.tn
              .get({ url: o.ANM.GUILD_WEBHOOKS(e), oldFormErrors: !0 })
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
              .get({ url: o.ANM.CHANNEL_WEBHOOKS(n), oldFormErrors: !0 })
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
          null == t && (t = d[r().random(0, d.length - 1)]),
          a.tn
            .post({
              url: o.ANM.CHANNEL_WEBHOOKS(n),
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
          a.tn.del({ url: o.ANM.WEBHOOK(n), oldFormErrors: !0 }).then(() => {
            s.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: n });
          }),
        update: (e, n, t) =>
          a.tn
            .patch({ url: o.ANM.WEBHOOK(n), body: t, oldFormErrors: !0 })
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
    985588: function (e, n, t) {
      t.d(n, {
        s: function () {
          return s;
        },
      });
      var i = t(442837),
        r = t(314897),
        a = t(699516);
      function s(e) {
        return (0, i.e7)([a.Z, r.default], () => {
          let n = a.Z.isFriend(e.id),
            t = r.default.getId() === e.id;
          return n && !t && !e.bot && !e.system && !e.isProvisional();
        });
      }
    },
    27584: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(442837),
        r = t(846027),
        a = t(314897),
        s = t(131951),
        o = t(981631),
        d = t(65154);
      function l(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.Yn.DEFAULT,
          t = (0, i.e7)([a.default], () => a.default.getId()),
          l = (0, i.e7)(
            [s.Z],
            () => s.Z.supports(d.AN.DISABLE_VIDEO) && s.Z.isVideoEnabled(),
          ),
          u = (0, i.e7)([s.Z], () => s.Z.isLocalVideoDisabled(t, n), [t, n]),
          c = null == e || e === t;
        return [
          c && (l || u),
          u,
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
          return d;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(153867),
        a = t(468026),
        s = t(394059),
        o = t(689938);
      function d(e) {
        let { type: n, onConfirm: t, ...d } = e,
          l =
            n === s.K.STREAM
              ? o.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : o.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          u =
            n === s.K.STREAM
              ? o.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : o.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, i.jsx)(a.default, {
          confirmText: o.Z.Messages.CONFIRM,
          secondaryConfirmText: o.Z.Messages.DONT_ASK_AGAIN,
          title: l,
          cancelText: o.Z.Messages.CANCEL,
          onConfirm: t,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              t();
          },
          body: u,
          ...d,
        });
      }
    },
    441061: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(442837),
        a = t(481060),
        s = t(475179),
        o = t(358221),
        d = t(689938);
      function l(e) {
        let n = (0, r.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(e));
        return (0, i.jsx)(a.MenuCheckboxItem, {
          id: "no-video-hide",
          label: d.Z.Messages.STREAM_SHOW_NON_VIDEO,
          checked: !n,
          action: () => s.Z.toggleVoiceParticipantsHidden(e, !n),
        });
      }
    },
    167675: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var r = t(442837),
        a = t(481060),
        s = t(740492),
        o = t(27584),
        d = t(295510),
        l = t(394059),
        u = t(65154),
        c = t(689938);
      function I(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : u.Yn.DEFAULT,
          [t, I, E] = (0, o.Z)(e, n),
          T = (0, r.e7)(
            [s.ZP],
            () => s.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return t
          ? (0, i.jsx)(a.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.Z.Messages.SHOW_SELF_VIDEO,
              checked: !I,
              action: () => {
                if (T || I) return E(!I);
                (0, a.openModal)((e) =>
                  (0, i.jsx)(d.Z, {
                    ...e,
                    type: l.K.VIDEO,
                    onConfirm: () => E(!I),
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
          return _;
        },
      }),
        t(653041);
      var i = t(735250),
        r = t(470079),
        a = t(442837),
        s = t(481060),
        o = t(139387),
        d = t(230711),
        l = t(213459),
        u = t(434404),
        c = t(430824),
        I = t(496675),
        E = t(981631),
        T = t(689938);
      function _(e) {
        let { user: n, guildId: t, channel: _, context: N } = e,
          p = c.Z.getGuild(t),
          S = (0, a.e7)([I.Z], () =>
            null != p ? I.Z.can(E.Plq.MANAGE_GUILD, p) : null,
          ),
          Z = (0, l.em)(_, !0, !0),
          O = (0, l.PL)(!0, !0),
          { isUserApp: A, isGuildApp: f } = r.useMemo(() => {
            var e, t, i, r;
            if ((null == n ? void 0 : n.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let a = Object.values(
                null !==
                  (i =
                    null === (e = Z.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {},
              ),
              s = Object.values(
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
              isUserApp: s.some((e) => {
                var t;
                return (
                  (null === (t = e.descriptor.application) || void 0 === t
                    ? void 0
                    : t.id) === (null == n ? void 0 : n.id)
                );
              }),
            };
          }, [Z, O, null == n ? void 0 : n.id]),
          h = r.useCallback(() => {
            if ((null == p ? void 0 : p.id) != null)
              u.Z.open(p.id, E.pNK.INTEGRATIONS),
                o.Z.setSection(E.b4C.APPLICATION, null == n ? void 0 : n.id);
          }, [null == n ? void 0 : n.id, null == p ? void 0 : p.id]),
          m = r.useCallback(() => {
            d.Z.open(E.oAB.AUTHORIZED_APPS);
          }, []),
          M = N === E.IlC.POPOUT;
        if (!(null == n ? void 0 : n.bot) || !S || M || (!f && !A)) return null;
        let g = [];
        return (
          f &&
            g.push(
              (0, i.jsx)(
                s.MenuItem,
                {
                  id: "manage-integration",
                  label: T.Z.Messages.MANAGE_INTEGRATION,
                  action: h,
                },
                "manage-integration",
              ),
            ),
          A &&
            g.push(
              (0, i.jsx)(
                s.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: T.Z.Messages.MANAGE_AUTHORIZED_APP,
                  action: m,
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
          return I;
        },
        Sn: function () {
          return u;
        },
        U3: function () {
          return T;
        },
        Ui: function () {
          return E;
        },
        W4: function () {
          return l;
        },
        gq: function () {
          return c;
        },
        kZ: function () {
          return d;
        },
      });
      var i = t(544891),
        r = t(570140),
        a = t(555573),
        s = t(581364),
        o = t(981631);
      function d() {
        r.Z.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function l(e, n, t) {
        r.Z.dispatch({
          applicationId: e,
          commandId: n,
          permissions: t,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function u(e, n) {
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
        let a = [];
        try {
          let r = await i.tn.get(
            o.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, n, t),
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
      function I(e) {
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
      async function T(e) {
        let {
            applicationId: n,
            commandId: t,
            defaultEveryoneValue: i,
            defaultEverywhereValue: o,
            guildId: d,
            permissions: l,
          } = e,
          u =
            t === n
              ? (function (e, n, t, i) {
                  if (!t || !i) return n;
                  let r = { [e]: t, [(0, s.bD)(e)]: i };
                  return n.filter((e) => {
                    let n = r[e.id];
                    return null == n || e.permission !== n;
                  });
                })(d, l, i, o)
              : l,
          c = await a.dh(n, d, t, u);
        c.ok &&
          r.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: n,
            commandId: t,
            guildId: d,
            permissions: c.body.permissions,
          });
      }
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
          return d;
        },
      }),
        t(47120);
      var i = t(442837),
        r = t(592125),
        a = t(19780),
        s = t(977059),
        o = t(760373);
      function d(e) {
        let { channelId: n, location: t } = e,
          { enabled: d } = (0, s.S)({ location: t });
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
              let d = s.getChannel(e);
              if (null == d || d.isGuildStageVoice()) return !1;
              let l =
                null === (t = i.getSecureFramesState()) || void 0 === t
                  ? void 0
                  : t.version;
              return null != l && l !== o.Eg;
            })(n, d, [a.Z, r.Z]),
          [n, d],
        );
      }
    },
    354589: function (e, n, t) {
      t.r(n);
      var i = t(735250);
      t(470079);
      var r = t(481060),
        a = t(239091),
        s = t(883385),
        o = t(108843),
        d = t(911969),
        l = t(947440),
        u = t(100527),
        c = t(441061),
        I = t(167675),
        E = t(737013),
        T = t(607783),
        _ = t(299206),
        N = t(819403),
        p = t(777658),
        S = t(858488),
        Z = t(185457),
        O = t(570870),
        A = t(389052),
        f = t(24311),
        h = t(915193),
        m = t(332576),
        M = t(710631),
        g = t(297047),
        G = t(88966),
        v = t(397616),
        R = t(558924),
        C = t(991307),
        y = t(725119),
        x = t(700994),
        P = t(332031),
        D = t(981631),
        b = t(689938);
      n.default = (0, o.Z)(
        (0, s.Z)(
          function (e) {
            var n;
            let {
                user: t,
                channel: s,
                context: o,
                showChatItems: u = !0,
                showMediaItems: D = !1,
                showChannelCallItems: U = !1,
                showModalItems: j = !0,
                onSelect: L,
                onHeightUpdate: H,
              } = e,
              F = (0, y.Z)({ userId: t.id, guildId: null }),
              k = (0, g.Z)(t, null, o),
              B = (0, R.Z)(t, s.id),
              W = (0, G.Z)(t.id, o),
              w = (0, f.Z)({ user: t, context: o }),
              V = (0, Z.Z)({ user: t, channelId: s.id, context: o }),
              K = (0, S.Z)({ user: t }),
              z = (0, x.Z)(t.id),
              Y = (0, v.Z)(t.id, s.id),
              q = (0, C.Z)(t.id),
              X = (0, T.B)({
                userId: t.id,
                channelId: s.id,
                guildId: s.getGuildId(),
                location: "GroupDMUserContextMenu",
              }),
              J = (0, m.Z)(t.id, s.id),
              Q = (0, M.Z)({ user: t }),
              $ = (0, l.Z)(null, t),
              ee = (0, p.Z)(t),
              en = (0, A.Z)({ user: t }),
              et = (0, _.Z)({ id: t.id, label: b.Z.Messages.COPY_ID_USER }),
              ei = (0, P.Z)(t.id),
              er = (0, I.Z)(t.id),
              ea = (0, c.Z)(s.id),
              es = (0, N.Z)(t),
              eo = (0, E.Z)(t.id),
              ed = (0, O.Z)({
                commandType: d.yU.USER,
                commandTargetId: t.id,
                channel: s,
                guildId: void 0,
                onHeightUpdate: H,
              }),
              el = (0, h.Z)(t, s),
              eu = t.isNonUserBot(),
              ec = s.isManaged(),
              eI =
                null === (n = s.recipients) || void 0 === n
                  ? void 0
                  : n.includes(t.id);
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: a.Zy,
              "aria-label": b.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: L,
              children: [
                !eu &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(r.MenuGroup, { children: es }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          j && F,
                          u && k,
                          W,
                          w,
                          !ec && B,
                          j && V,
                          j && K,
                          ei,
                        ],
                      }),
                      D && (0, i.jsx)(r.MenuGroup, { children: z }),
                      eI &&
                        (0, i.jsxs)(r.MenuGroup, { children: [!ec && Y, el] }),
                      (0, i.jsx)(r.MenuGroup, { children: j && $ }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          D && q,
                          D && X,
                          D && J,
                          ed,
                          j && Q,
                          ee,
                          j && en,
                          D && eo,
                        ],
                      }),
                      U && (0, i.jsxs)(r.MenuGroup, { children: [ea, er] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: et }),
              ],
            });
          },
          { object: D.qAy.CONTEXT_MENU },
        ),
        [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU],
      );
    },
    570870: function (e, n, t) {
      var i = t(735250),
        r = t(470079),
        a = t(512722),
        s = t.n(a),
        o = t(442837),
        d = t(481060),
        l = t(10718),
        u = t(667204),
        c = t(826298),
        I = t(276022),
        E = t(978983),
        T = t(430824),
        _ = t(594174),
        N = t(981631),
        p = t(689079),
        S = t(689938),
        Z = t(62352);
      n.Z = (e) => {
        let n,
          {
            commandType: t,
            commandTargetId: a,
            channel: O,
            guildId: A,
            onHeightUpdate: f,
            context: h,
          } = e,
          m = (0, o.e7)([T.Z], () => T.Z.getGuild(null != A ? A : O.guild_id)),
          M = (0, o.e7)([_.default], () => _.default.getUser(a)),
          g = (0, I.Z)({
            user: M,
            guildId: null == m ? void 0 : m.id,
            channel: O,
            context: h,
          }),
          {
            commands: G,
            sectionDescriptors: v,
            loading: R,
          } = l.wi(O, { commandTypes: [t] }, { limit: p.lr }),
          { sections: C } = r.useMemo(() => {
            let e = {};
            return (
              v.forEach((n) => {
                e[n.id] = n;
              }),
              { sections: e }
            );
          }, [v]),
          y = r.useRef(R.current);
        r.useEffect(() => {
          R.current !== y.current &&
            ((y.current = R.current), null == f || f());
        }, [R, f]);
        let x = r.useCallback(
          (e) => {
            s()(null != O, "menu item should not show if channel is null");
            let n = C[e.applicationId],
              t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
              d.MenuItem,
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
                  (0, u.Z)({
                    command: e,
                    optionValues: {},
                    context: { channel: O, guild: m },
                    commandTargetId: a,
                  });
                },
              },
              e.id,
            );
          },
          [O, m, a, C],
        );
        if (
          (R.current
            ? (n = (0, i.jsx)(
                d.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(E.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((n =
                0 === G.length
                  ? (0, i.jsx)(
                      d.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: S.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : G.map(x)),
              null != g &&
                (n = (0, i.jsxs)(i.Fragment, {
                  children: [
                    n,
                    (0, i.jsx)(d.MenuSeparator, {}, "separator"),
                    g,
                  ],
                }))),
          !N.TPd.TEXTUAL.has(O.type))
        ) {
          if (null == g) return null;
          n = g;
        }
        return (0, i.jsx)(d.MenuItem, {
          id: "apps",
          label: S.Z.Messages.APPS,
          listClassName: Z.list,
          children: n,
        });
      };
    },
    915193: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return T;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(442837),
        a = t(692547),
        s = t(481060),
        o = t(493683),
        d = t(129861),
        l = t(700582),
        u = t(594174),
        c = t(689938),
        I = t(346411);
      function E(e) {
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
      function T(e, n) {
        let t = (0, r.e7)([u.default], () => u.default.getCurrentUser());
        return null == t || n.ownerId !== t.id || e.id === t.id
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
                      bodyClassName: I.confirmModal,
                      header: c.Z.Messages.TRANSFER_GROUP_OWNERSHIP,
                      confirmText: c.Z.Messages.CONFIRM,
                      cancelText: c.Z.Messages.CANCEL,
                      onConfirm: () => o.Z.setDMOwner(n.id, e.id),
                      ...t,
                      children: [
                        (0, i.jsx)(E, {
                          color: a.Z.unsafe_rawColors.PRIMARY_300.css,
                        }),
                        (0, i.jsxs)("div", {
                          className: I.fromToWrapper,
                          children: [
                            (0, i.jsx)("div", {
                              className: I.from,
                              children: (0, i.jsx)(l.Z, {
                                user: r,
                                size: s.AvatarSizes.SIZE_80,
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: I.to,
                              children: (0, i.jsx)(l.Z, {
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
                                  d.Z,
                                  {
                                    usernameIcon: (0, i.jsx)(s.Avatar, {
                                      className: I.avatarIcon,
                                      src: e.getAvatarURL(void 0, 16),
                                      size: s.AvatarSizes.SIZE_16,
                                      "aria-hidden": !0,
                                    }),
                                    className: I.discordTag,
                                    usernameClass: I.username,
                                    discriminatorClass: I.discriminator,
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
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(442837),
        a = t(481060),
        s = t(493683),
        o = t(40851),
        d = t(314897),
        l = t(981631),
        u = t(689938);
      function c(e, n) {
        let t = (0, o.Aq)();
        return (0, r.e7)([d.default], () => d.default.getId() === e) ||
          n === l.IlC.POPOUT
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "message-user",
              label: u.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                s.Z.openPrivateChannel(e),
                  t.dispatch(l.CkL.POPOUT_CLOSE),
                  (0, a.closeAllModals)();
              },
            });
      }
    },
    397616: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(442837),
        a = t(481060),
        s = t(493683),
        o = t(592125),
        d = t(594174),
        l = t(689938);
      function u(e, n) {
        let t = (0, r.e7)([d.default], () => d.default.getCurrentUser(), []),
          u = (0, r.e7)([o.Z], () => o.Z.getChannel(n), [n]);
        return null == u || u.isOwner(e) || null == t || !u.isOwner(t.id)
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "remove",
              label: l.Z.Messages.REMOVE_FROM_GROUP,
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
        o = t(358221),
        d = t(985588),
        l = t(354459),
        u = t(689938);
      function c(e, n) {
        let [t, c] = (0, r.Wu)(
          [o.Z],
          () => [o.Z.getParticipants(n), o.Z.getParticipant(n, e.id)],
          [n, e.id],
        );
        return (0, d.s)(e) && 0 !== t.length
          ? null == c
            ? (0, i.jsx)(a.MenuItem, {
                id: "ring",
                label: u.Z.Messages.RING,
                action: () => s.Z.ring(n, [e.id]),
              })
            : c.type === l.fO.USER && c.ringing
              ? (0, i.jsx)(a.MenuItem, {
                  id: "stop-ringing",
                  label: u.Z.Messages.STOP_RINGING,
                  action: () => s.Z.stopRinging(n, [e.id]),
                })
              : null
          : null;
      }
    },
    62352: function (e, n, t) {
      e.exports = { list: "list_fd4745" };
    },
    346411: function (e, n, t) {
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
    201683: function (e, n, t) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
  },
]);
//# sourceMappingURL=0018fbb52dc94224c609.js.map
