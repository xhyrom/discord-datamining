"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84415"],
  {
    963458: function (e, t, n) {
      var r = n(192291),
        i = n(22092),
        a = r.aTypedArrayConstructor;
      (0, r.exportTypedArrayStaticMethod)(
        "of",
        function () {
          for (var e = 0, t = arguments.length, n = new (a(this))(t); t > e; )
            n[e] = arguments[e++];
          return n;
        },
        i,
      );
    },
    139387: function (e, t, n) {
      var r = n(570140),
        i = n(434404),
        a = n(821864),
        o = n(308063);
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
              await a.U3({
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
              await o.Z.update(e, t.id, t),
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
        a = n(544891),
        o = n(570140),
        s = n(981631);
      let l = ["Spidey Bot", "Captain Hook"];
      t.Z = {
        fetchForGuild(e) {
          o.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            a.tn
              .get({ url: s.ANM.GUILD_WEBHOOKS(e), oldFormErrors: !0 })
              .then((t) => {
                let { body: n } = t;
                return o.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  webhooks: n,
                });
              })
              .catch((t) => {
                let { body: n } = t;
                o.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  error: n.message,
                });
              });
        },
        fetchForChannel(e, t) {
          o.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e, channelId: t }),
            a.tn
              .get({ url: s.ANM.CHANNEL_WEBHOOKS(t), oldFormErrors: !0 })
              .then((n) => {
                let { body: r } = n;
                return o.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  channelId: t,
                  webhooks: r,
                });
              });
        },
        create: (e, t, n) => (
          null == n && (n = l[i().random(0, l.length - 1)]),
          a.tn
            .post({
              url: s.ANM.CHANNEL_WEBHOOKS(t),
              body: { name: n },
              oldFormErrors: !0,
            })
            .then((t) => {
              let { body: n } = t;
              return (
                o.Z.dispatch({
                  type: "WEBHOOK_CREATE",
                  guildId: e,
                  webhook: n,
                }),
                n
              );
            })
        ),
        delete: (e, t) =>
          a.tn.del({ url: s.ANM.WEBHOOK(t), oldFormErrors: !0 }).then(() => {
            o.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: t });
          }),
        update: (e, t, n) =>
          a.tn
            .patch({ url: s.ANM.WEBHOOK(t), body: n, oldFormErrors: !0 })
            .then((t) => {
              let { body: n } = t;
              return (
                o.Z.dispatch({
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
          return u;
        },
      });
      var r = n(442837),
        i = n(846027),
        a = n(314897),
        o = n(131951),
        s = n(981631),
        l = n(65154);
      function u(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : l.Yn.DEFAULT,
          n = (0, r.e7)([a.default], () => a.default.getId()),
          u = (0, r.e7)(
            [o.Z],
            () => o.Z.supports(l.AN.DISABLE_VIDEO) && o.Z.isVideoEnabled(),
          ),
          d = (0, r.e7)([o.Z], () => o.Z.isLocalVideoDisabled(n, t), [n, t]),
          c = null == e || e === n;
        return [
          c && (u || d),
          d,
          (e) => {
            let r = e ? s.ZUi.DISABLED : s.ZUi.MANUAL_ENABLED;
            i.Z.setDisableLocalVideo(n, r, t);
          },
        ];
      }
    },
    295510: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(153867),
        a = n(468026),
        o = n(394059),
        s = n(689938);
      function l(e) {
        let { type: t, onConfirm: n, ...l } = e,
          u =
            t === o.K.STREAM
              ? s.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : s.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          d =
            t === o.K.STREAM
              ? s.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : s.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, r.jsx)(a.default, {
          confirmText: s.Z.Messages.CONFIRM,
          secondaryConfirmText: s.Z.Messages.DONT_ASK_AGAIN,
          title: u,
          cancelText: s.Z.Messages.CANCEL,
          onConfirm: n,
          onConfirmSecondary: () => {
            i.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              n();
          },
          body: d,
          ...l,
        });
      }
    },
    441061: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(442837),
        a = n(481060),
        o = n(475179),
        s = n(358221),
        l = n(689938);
      function u(e) {
        let t = (0, i.e7)([s.Z], () => s.Z.getVoiceParticipantsHidden(e));
        return (0, r.jsx)(a.MenuCheckboxItem, {
          id: "no-video-hide",
          label: l.Z.Messages.STREAM_SHOW_NON_VIDEO,
          checked: !t,
          action: () => o.Z.toggleVoiceParticipantsHidden(e, !t),
        });
      }
    },
    167675: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      }),
        n(47120);
      var r = n(735250);
      n(470079);
      var i = n(442837),
        a = n(481060),
        o = n(740492),
        s = n(27584),
        l = n(295510),
        u = n(394059),
        d = n(65154),
        c = n(689938);
      function I(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.Yn.DEFAULT,
          [n, I, f] = (0, s.Z)(e, t),
          E = (0, i.e7)(
            [o.ZP],
            () => o.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return n
          ? (0, r.jsx)(a.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.Z.Messages.SHOW_SELF_VIDEO,
              checked: !I,
              action: () => {
                if (E || I) return f(!I);
                (0, a.openModal)((e) =>
                  (0, r.jsx)(l.Z, {
                    ...e,
                    type: u.K.VIDEO,
                    onConfirm: () => f(!I),
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
          return p;
        },
      }),
        n(653041);
      var r = n(735250),
        i = n(470079),
        a = n(442837),
        o = n(481060),
        s = n(139387),
        l = n(230711),
        u = n(213459),
        d = n(434404),
        c = n(430824),
        I = n(496675),
        f = n(981631),
        E = n(689938);
      function p(e) {
        let { user: t, guildId: n, channel: p, context: T } = e,
          N = c.Z.getGuild(n),
          h = (0, a.e7)([I.Z], () =>
            null != N ? I.Z.can(f.Plq.MANAGE_GUILD, N) : null,
          ),
          _ = (0, u.em)(p, !0, !0),
          S = (0, u.PL)(!0, !0),
          { isUserApp: A, isGuildApp: g } = i.useMemo(() => {
            var e, n, r, i;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let a = Object.values(
                null !==
                  (r =
                    null === (e = _.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== r
                  ? r
                  : {},
              ),
              o = Object.values(
                null !==
                  (i =
                    null === (n = S.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== i
                  ? i
                  : {},
              );
            return {
              isGuildApp: a.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
              isUserApp: o.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
            };
          }, [_, S, null == t ? void 0 : t.id]),
          m = i.useCallback(() => {
            if ((null == N ? void 0 : N.id) != null)
              d.Z.open(N.id, f.pNK.INTEGRATIONS),
                s.Z.setSection(f.b4C.APPLICATION, null == t ? void 0 : t.id);
          }, [null == t ? void 0 : t.id, null == N ? void 0 : N.id]),
          Z = i.useCallback(() => {
            l.Z.open(f.oAB.AUTHORIZED_APPS);
          }, []),
          O = T === f.IlC.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !h || O || (!g && !A)) return null;
        let y = [];
        return (
          g &&
            y.push(
              (0, r.jsx)(
                o.MenuItem,
                {
                  id: "manage-integration",
                  label: E.Z.Messages.MANAGE_INTEGRATION,
                  action: m,
                },
                "manage-integration",
              ),
            ),
          A &&
            y.push(
              (0, r.jsx)(
                o.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: E.Z.Messages.MANAGE_AUTHORIZED_APP,
                  action: Z,
                },
                "manage-authorized-app",
              ),
            ),
          y
        );
      }
    },
    821864: function (e, t, n) {
      n.d(t, {
        I4: function () {
          return I;
        },
        Sn: function () {
          return d;
        },
        U3: function () {
          return E;
        },
        Ui: function () {
          return f;
        },
        W4: function () {
          return u;
        },
        gq: function () {
          return c;
        },
        kZ: function () {
          return l;
        },
      });
      var r = n(544891),
        i = n(570140),
        a = n(555573),
        o = n(581364),
        s = n(981631);
      function l() {
        i.Z.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function u(e, t, n) {
        i.Z.dispatch({
          applicationId: e,
          commandId: t,
          permissions: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function d(e, t) {
        r.tn.get(s.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(
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
        let a = [];
        try {
          let i = await r.tn.get(
            s.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
          );
          i.ok && (a = i.body.permissions);
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
          permissions: a,
        });
      }
      function I(e) {
        i.Z.dispatch({
          applicationId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_INIT",
        });
      }
      function f(e) {
        i.Z.dispatch({
          commandId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_RESET",
        });
      }
      async function E(e) {
        let {
            applicationId: t,
            commandId: n,
            defaultEveryoneValue: r,
            defaultEverywhereValue: s,
            guildId: l,
            permissions: u,
          } = e,
          d =
            n === t
              ? (function (e, t, n, r) {
                  if (!n || !r) return t;
                  let i = { [e]: n, [(0, o.bD)(e)]: r };
                  return t.filter((e) => {
                    let t = i[e.id];
                    return null == t || e.permission !== t;
                  });
                })(l, u, r, s)
              : u,
          c = await a.dh(t, l, n, d);
        c.ok &&
          i.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: n,
            guildId: l,
            permissions: c.body.permissions,
          });
      }
    },
    978983: function (e, t, n) {
      var r = n(735250);
      n(470079);
      var i = n(481060),
        a = n(882441);
      t.Z = () =>
        (0, r.jsx)("div", {
          className: a.loadingWrapper,
          children: (0, r.jsx)(i.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    977059: function (e, t, n) {
      n.d(t, {
        R: function () {
          return a;
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
      function a(e) {
        let { location: t } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    441894: function (e, t, n) {
      n.d(t, {
        J: function () {
          return l;
        },
      }),
        n(47120);
      var r = n(442837),
        i = n(592125),
        a = n(19780),
        o = n(977059),
        s = n(760373);
      function l(e) {
        let { channelId: t, location: n } = e,
          { enabled: l } = (0, o.S)({ location: n });
        return (0, r.e7)(
          [a.Z, i.Z],
          () =>
            (function (e, t) {
              var n;
              let [r, o] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [a.Z, i.Z];
              if (!t || null == e || r.getChannelId() !== e) return !1;
              let l = o.getChannel(e);
              if (null == l || l.isGuildStageVoice()) return !1;
              let u =
                null === (n = r.getSecureFramesState()) || void 0 === n
                  ? void 0
                  : n.version;
              return null != u && u > s.HK;
            })(t, l, [a.Z, i.Z]),
          [t, l],
        );
      }
    },
    354589: function (e, t, n) {
      n.r(t);
      var r = n(735250);
      n(470079);
      var i = n(481060),
        a = n(239091),
        o = n(883385),
        s = n(108843),
        l = n(911969),
        u = n(947440),
        d = n(100527),
        c = n(441061),
        I = n(167675),
        f = n(737013),
        E = n(607783),
        p = n(299206),
        T = n(819403),
        N = n(777658),
        h = n(858488),
        _ = n(185457),
        S = n(570870),
        A = n(389052),
        g = n(24311),
        m = n(915193),
        Z = n(332576),
        O = n(710631),
        y = n(297047),
        M = n(88966),
        v = n(397616),
        R = n(558924),
        G = n(991307),
        b = n(725119),
        C = n(700994),
        w = n(332031),
        x = n(981631),
        P = n(689938);
      t.default = (0, s.Z)(
        (0, o.Z)(
          function (e) {
            var t;
            let {
                user: n,
                channel: o,
                context: s,
                showChatItems: d = !0,
                showMediaItems: x = !1,
                showChannelCallItems: U = !1,
                showModalItems: D = !0,
                onSelect: L,
                onHeightUpdate: j,
              } = e,
              H = (0, b.Z)({ userId: n.id, guildId: null }),
              B = (0, y.Z)(n, null, s),
              k = (0, R.Z)(n.id, o.id),
              F = (0, M.Z)(n.id, s),
              V = (0, g.Z)({ user: n, context: s }),
              W = (0, _.Z)({ user: n, channelId: o.id, context: s }),
              K = (0, h.Z)({ user: n }),
              z = (0, C.Z)(n.id),
              Y = (0, v.Z)(n.id, o.id),
              q = (0, G.Z)(n.id),
              X = (0, E.B)({
                userId: n.id,
                channelId: o.id,
                guildId: o.getGuildId(),
                location: "GroupDMUserContextMenu",
              }),
              $ = (0, Z.Z)(n.id, o.id),
              J = (0, O.Z)({ user: n }),
              Q = (0, u.Z)(null, n),
              ee = (0, N.Z)(n),
              et = (0, A.Z)({ user: n }),
              en = (0, p.Z)({ id: n.id, label: P.Z.Messages.COPY_ID_USER }),
              er = (0, w.Z)(n.id),
              ei = (0, I.Z)(n.id),
              ea = (0, c.Z)(o.id),
              eo = (0, T.Z)(n),
              es = (0, f.Z)(n.id),
              el = (0, S.Z)({
                commandType: l.yU.USER,
                commandTargetId: n.id,
                channel: o,
                guildId: void 0,
                onHeightUpdate: j,
              }),
              eu = (0, m.Z)(n, o),
              ed = n.isNonUserBot(),
              ec = o.isManaged(),
              eI =
                null === (t = o.recipients) || void 0 === t
                  ? void 0
                  : t.includes(n.id);
            return (0, r.jsxs)(i.Menu, {
              navId: "user-context",
              onClose: a.Zy,
              "aria-label": P.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: L,
              children: [
                !ed &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(i.MenuGroup, { children: eo }),
                      (0, r.jsxs)(i.MenuGroup, {
                        children: [
                          D && H,
                          d && B,
                          F,
                          V,
                          !ec && k,
                          D && W,
                          D && K,
                          er,
                        ],
                      }),
                      x && (0, r.jsx)(i.MenuGroup, { children: z }),
                      eI &&
                        (0, r.jsxs)(i.MenuGroup, { children: [!ec && Y, eu] }),
                      (0, r.jsx)(i.MenuGroup, { children: D && Q }),
                      (0, r.jsxs)(i.MenuGroup, {
                        children: [
                          x && q,
                          x && X,
                          x && $,
                          el,
                          D && J,
                          ee,
                          D && et,
                          x && es,
                        ],
                      }),
                      U && (0, r.jsxs)(i.MenuGroup, { children: [ea, ei] }),
                    ],
                  }),
                (0, r.jsx)(i.MenuGroup, { children: en }),
              ],
            });
          },
          { object: x.qAy.CONTEXT_MENU },
        ),
        [d.Z.CONTEXT_MENU, d.Z.GROUP_DM_USER_MENU],
      );
    },
    570870: function (e, t, n) {
      var r = n(735250),
        i = n(470079),
        a = n(512722),
        o = n.n(a),
        s = n(442837),
        l = n(481060),
        u = n(10718),
        d = n(667204),
        c = n(826298),
        I = n(276022),
        f = n(978983),
        E = n(430824),
        p = n(594174),
        T = n(981631),
        N = n(689079),
        h = n(689938),
        _ = n(359522);
      t.Z = (e) => {
        let t,
          {
            commandType: n,
            commandTargetId: a,
            channel: S,
            guildId: A,
            onHeightUpdate: g,
            context: m,
          } = e,
          Z = (0, s.e7)([E.Z], () => E.Z.getGuild(null != A ? A : S.guild_id)),
          O = (0, s.e7)([p.default], () => p.default.getUser(a)),
          y = (0, I.Z)({
            user: O,
            guildId: null == Z ? void 0 : Z.id,
            channel: S,
            context: m,
          }),
          {
            commands: M,
            sectionDescriptors: v,
            loading: R,
          } = u.wi(S, { commandTypes: [n] }, { limit: N.lr }),
          { sections: G } = i.useMemo(() => {
            let e = {};
            return (
              v.forEach((t) => {
                e[t.id] = t;
              }),
              { sections: e }
            );
          }, [v]),
          b = i.useRef(R.current);
        i.useEffect(() => {
          R.current !== b.current &&
            ((b.current = R.current), null == g || g());
        }, [R, g]);
        let C = i.useCallback(
          (e) => {
            o()(null != S, "menu item should not show if channel is null");
            let t = G[e.applicationId],
              n = null != t ? (0, c.ky)(t) : void 0;
            return (0, r.jsx)(
              l.MenuItem,
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
                    context: { channel: S, guild: Z },
                    commandTargetId: a,
                  });
                },
              },
              e.id,
            );
          },
          [S, Z, a, G],
        );
        if (
          (R.current
            ? (t = (0, r.jsx)(
                l.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, r.jsx)(f.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((t =
                0 === M.length
                  ? (0, r.jsx)(
                      l.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: h.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : M.map(C)),
              null != y &&
                (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                    t,
                    (0, r.jsx)(l.MenuSeparator, {}, "separator"),
                    y,
                  ],
                }))),
          !T.TPd.TEXTUAL.has(S.type))
        ) {
          if (null == y) return null;
          t = y;
        }
        return (0, r.jsx)(l.MenuItem, {
          id: "apps",
          label: h.Z.Messages.APPS,
          listClassName: _.list,
          children: t,
        });
      };
    },
    915193: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(442837),
        a = n(692547),
        o = n(481060),
        s = n(493683),
        l = n(129861),
        u = n(700582),
        d = n(594174),
        c = n(689938),
        I = n(725458);
      function f(e) {
        let { color: t, className: n } = e;
        return (0, r.jsx)("svg", {
          className: n,
          height: "16",
          width: "80",
          viewBox: "0 0 80 16",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            opacity: ".6",
            children: [
              (0, r.jsx)("path", { d: "m0 0h80v16h-80z" }),
              (0, r.jsxs)("g", {
                stroke: t,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                children: [
                  (0, r.jsx)("path", { d: "m71 1h4v4.16" }),
                  (0, r.jsx)("path", {
                    d: "m2 1h4v4.16",
                    transform: "matrix(-1 0 0 1 8 0)",
                  }),
                  (0, r.jsx)("path", {
                    d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4",
                  }),
                  (0, r.jsx)("path", {
                    d: "m72.13 10.474 2.869 3.12 2.631-3.12",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function E(e, t) {
        let n = (0, i.e7)([d.default], () => d.default.getCurrentUser());
        return null == n ||
          t.ownerId !== n.id ||
          e.id === n.id ||
          (null == t ? void 0 : t.isBroadcastChannel())
          ? null
          : (0, r.jsx)(o.MenuItem, {
              id: "make-dm-owner",
              color: "danger",
              label: c.Z.Messages.CHANGE_DM_OWNER,
              action: () => {
                var i;
                return (
                  (i = n),
                  void (0, o.openModal)((n) =>
                    (0, r.jsxs)(o.ConfirmModal, {
                      bodyClassName: I.confirmModal,
                      header: c.Z.Messages.TRANSFER_GROUP_OWNERSHIP,
                      confirmText: c.Z.Messages.CONFIRM,
                      cancelText: c.Z.Messages.CANCEL,
                      onConfirm: () => s.Z.setDMOwner(t.id, e.id),
                      ...n,
                      children: [
                        (0, r.jsx)(f, {
                          color: a.Z.unsafe_rawColors.PRIMARY_300.css,
                        }),
                        (0, r.jsxs)("div", {
                          className: I.fromToWrapper,
                          children: [
                            (0, r.jsx)("div", {
                              className: I.from,
                              children: (0, r.jsx)(u.Z, {
                                user: i,
                                size: o.AvatarSizes.SIZE_80,
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: I.to,
                              children: (0, r.jsx)(u.Z, {
                                user: e,
                                size: o.AvatarSizes.SIZE_80,
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsx)(o.Text, {
                          variant: "text-md/normal",
                          children: c.Z.Messages.CONFIRM_CHANGE_DM_OWNER.format(
                            {
                              usernameHook: (t, n) =>
                                (0, r.jsx)(
                                  l.Z,
                                  {
                                    usernameIcon: (0, r.jsx)(o.Avatar, {
                                      className: I.avatarIcon,
                                      src: e.getAvatarURL(void 0, 16),
                                      size: o.AvatarSizes.SIZE_16,
                                      "aria-hidden": !0,
                                    }),
                                    className: I.discordTag,
                                    usernameClass: I.username,
                                    discriminatorClass: I.discriminator,
                                    user: e,
                                  },
                                  n,
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
    88966: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(442837),
        a = n(481060),
        o = n(493683),
        s = n(40851),
        l = n(314897),
        u = n(981631),
        d = n(689938);
      function c(e, t) {
        let n = (0, s.Aq)();
        return (0, i.e7)([l.default], () => l.default.getId() === e) ||
          t === u.IlC.POPOUT
          ? null
          : (0, r.jsx)(a.MenuItem, {
              id: "message-user",
              label: d.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                o.Z.openPrivateChannel(e),
                  n.dispatch(u.CkL.POPOUT_CLOSE),
                  (0, a.closeAllModals)();
              },
            });
      }
    },
    397616: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(442837),
        a = n(481060),
        o = n(493683),
        s = n(592125),
        l = n(594174),
        u = n(689938);
      function d(e, t) {
        let n = (0, i.e7)([l.default], () => l.default.getCurrentUser(), []),
          d = (0, i.e7)([s.Z], () => s.Z.getChannel(t), [t]);
        return null == d || d.isOwner(e) || null == n || !d.isOwner(n.id)
          ? null
          : (0, r.jsx)(a.MenuItem, {
              id: "remove",
              label: u.Z.Messages.REMOVE_FROM_GROUP,
              action: () => o.Z.removeRecipient(t, e),
              color: "danger",
            });
      }
    },
    558924: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var r = n(735250);
      n(470079);
      var i = n(442837),
        a = n(481060),
        o = n(26151),
        s = n(358221),
        l = n(314897),
        u = n(354459),
        d = n(689938);
      function c(e, t) {
        let n = (0, i.e7)([l.default], () => l.default.getId() === e, [e]),
          [c, I] = (0, i.Wu)(
            [s.Z],
            () => [s.Z.getParticipants(t), s.Z.getParticipant(t, e)],
            [t, e],
          );
        return n || 0 === c.length
          ? null
          : null == I
            ? (0, r.jsx)(a.MenuItem, {
                id: "ring",
                label: d.Z.Messages.RING,
                action: () => o.Z.ring(t, [e]),
              })
            : I.type === u.fO.USER && I.ringing
              ? (0, r.jsx)(a.MenuItem, {
                  id: "stop-ringing",
                  label: d.Z.Messages.STOP_RINGING,
                  action: () => o.Z.stopRinging(t, [e]),
                })
              : null;
      }
    },
    882441: function (e, t, n) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    359522: function (e, t, n) {
      e.exports = { list: "list_fd4745" };
    },
    725458: function (e, t, n) {
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
    480881: function (e, t, n) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
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
      function i(e, t, n, i, o = "SHA-256") {
        return new Promise((s, l) => {
          o in r ||
            l(
              RangeError(
                `Valid hash algorithm values are any of ${Object.keys(r).toString()}`,
              ),
            ),
            "string" == typeof e
              ? (e = new TextEncoder().encode(e))
              : e instanceof ArrayBuffer
                ? (e = new Uint8Array(e))
                : ArrayBuffer.isView(e) ||
                  l(
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
                  : l(
                      RangeError(
                        "S should be string, ArrayBuffer, TypedArray, DataView",
                      ),
                    ),
            crypto.subtle
              .importKey("raw", e, "PBKDF2", !1, ["deriveBits"])
              .then(
                (u) => {
                  let d = { name: "PBKDF2", hash: o, salt: t, iterations: n };
                  crypto.subtle.deriveBits(d, u, 8 * i).then(
                    (e) => s(e),
                    (u) => {
                      (async function (e, t, n, i, o) {
                        if (!(o in r))
                          throw RangeError(
                            `Valid hash algorithm values are any of ${Object.keys(r).toString()}`,
                          );
                        if (!Number.isInteger(n) || n <= 0)
                          throw RangeError("c must be a positive integer");
                        let s = r[o].outputLength;
                        if (
                          !Number.isInteger(i) ||
                          i <= 0 ||
                          i >= (4294967296 - 1) * s
                        )
                          throw RangeError(
                            "dkLen must be a positive integer < (2 ** 32 - 1) * hLen",
                          );
                        let l = Math.ceil(i / s),
                          u = i - (l - 1) * s,
                          d = Array(l);
                        0 === e.byteLength &&
                          (e = new Uint8Array(r[o].blockSize));
                        let c = await crypto.subtle.importKey(
                            "raw",
                            e,
                            { name: "HMAC", hash: { name: o } },
                            !0,
                            ["sign"],
                          ),
                          I = async function (e, t) {
                            return new Uint8Array(
                              await crypto.subtle.sign("HMAC", e, t),
                            );
                          };
                        for (let e = 0; e < l; e++)
                          d[e] = await f(c, t, n, e + 1);
                        async function f(e, t, n, r) {
                          let i = await I(
                              e,
                              a(
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
                            o = i;
                          for (let t = 1; t < n; t++)
                            (function (e, t) {
                              for (let n = 0; n < e.length; n++) e[n] ^= t[n];
                            })(i, (o = await I(e, o)));
                          return i;
                        }
                        return (
                          (d[l - 1] = d[l - 1].slice(0, u)), a(...d).buffer
                        );
                      })(e, t, n, i, o).then(
                        (e) => s(e),
                        (e) => l(e),
                      );
                    },
                  );
                },
                (e) => l(e),
              );
        });
      }
      function a(...e) {
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
          return l;
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
        a = function (e, t) {
          for (let n = 0; n < e.length; n++) e[n] ^= t[n];
        },
        o = function (e) {
          let t = e.byteLength / 128,
            n = 16 * (2 * t - 1),
            r = e.slice(n, n + 16),
            o = new Uint32Array(e.length / 2),
            s = !0;
          for (let n = 0; n < 2 * t; n++) {
            let t = 16 * n;
            a(r, e.subarray(t, t + 16)), i(r);
            let l = 16 * (n >> 1);
            if (s) for (let t = 0; t < 16; t++) e[l + t] = r[t];
            else for (let e = 0; e < 16; e++) o[l + e] = r[e];
            s = !s;
          }
          let l = 16 * t;
          for (let t = 0; t < l; t++) e[l + t] = o[t];
        },
        s = function (e, t) {
          let n = e.byteLength / 128,
            r = Array(t);
          for (let n = 0; n < t; n++) (r[n] = e.slice(0)), o(e);
          for (let i = 0; i < t; i++) {
            let i =
              new DataView(e.buffer, 64 * (2 * n - 1), 64).getUint32(0, !0) % t;
            a(e, r[i]), o(e);
          }
        },
        l = async function (e, t, n, i) {
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
          let a = void 0 !== i && void 0 !== i.N ? i.N : 131072,
            o = void 0 !== i && void 0 !== i.r ? i.r : 8,
            l = void 0 !== i && void 0 !== i.p ? i.p : 1;
          if (!Number.isInteger(a) || a <= 0 || 0 != (a & (a - 1)))
            throw RangeError("N must be a power of 2");
          if (
            !Number.isInteger(o) ||
            o <= 0 ||
            !Number.isInteger(l) ||
            l <= 0 ||
            l * o > 1073741823.75
          )
            throw RangeError(
              "Parallelization parameter p and blocksize parameter r must be positive integers satisfying p ≤ (2^32− 1) * hLen / MFLen where hLen is 32 and MFlen is 128 * r.",
            );
          let u = new Uint32Array(await (0, r.Z)(e, t, 1, 128 * l * o));
          for (let e = 0; e < l; e++) {
            let t = 32 * o,
              n = e * t,
              r = u.slice(n, n + t);
            s(r, a);
            for (let e = 0; e < 32 * o; e++) u[n + e] = r[e];
          }
          return await (0, r.Z)(e, u, 1, n);
        };
    },
  },
]);
//# sourceMappingURL=8893ec83ec4d01ae12d7.js.map
