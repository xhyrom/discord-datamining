"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60222"],
  {
    139387: function (e, t, n) {
      var i = n(570140),
        r = n(434404),
        a = n(821864),
        o = n(308063);
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
              await a.U3({
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
              await o.Z.update(e, t.id, t),
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
        a = n(544891),
        o = n(570140),
        l = n(981631);
      let d = ["Spidey Bot", "Captain Hook"];
      t.Z = {
        fetchForGuild(e) {
          o.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            a.tn
              .get({ url: l.ANM.GUILD_WEBHOOKS(e), oldFormErrors: !0 })
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
              .get({ url: l.ANM.CHANNEL_WEBHOOKS(t), oldFormErrors: !0 })
              .then((n) => {
                let { body: i } = n;
                return o.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  channelId: t,
                  webhooks: i,
                });
              });
        },
        create: (e, t, n) => (
          null == n && (n = d[r().random(0, d.length - 1)]),
          a.tn
            .post({
              url: l.ANM.CHANNEL_WEBHOOKS(t),
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
          a.tn.del({ url: l.ANM.WEBHOOK(t), oldFormErrors: !0 }).then(() => {
            o.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: t });
          }),
        update: (e, t, n) =>
          a.tn
            .patch({ url: l.ANM.WEBHOOK(t), body: n, oldFormErrors: !0 })
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
      var i, r;
      n.d(t, {
        K: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.STREAM = 0)] = "STREAM"),
        (r[(r.VIDEO = 1)] = "VIDEO");
    },
    985588: function (e, t, n) {
      n.d(t, {
        s: function () {
          return o;
        },
      });
      var i = n(442837),
        r = n(314897),
        a = n(699516);
      function o(e) {
        return (0, i.e7)([a.Z, r.default], () => {
          let t = a.Z.isFriend(e.id),
            n = r.default.getId() === e.id;
          return t && !n && !e.bot && !e.system && !e.isProvisional;
        });
      }
    },
    27584: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(442837),
        r = n(846027),
        a = n(314897),
        o = n(131951),
        l = n(981631),
        d = n(65154);
      function s(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.Yn.DEFAULT,
          n = (0, i.e7)([a.default], () => a.default.getId()),
          s = (0, i.e7)(
            [o.Z],
            () => o.Z.supports(d.AN.DISABLE_VIDEO) && o.Z.isVideoEnabled(),
          ),
          u = (0, i.e7)([o.Z], () => o.Z.isLocalVideoDisabled(n, t), [n, t]),
          c = null == e || e === n;
        return [
          c && (s || u),
          u,
          (e) => {
            let i = e ? l.ZUi.DISABLED : l.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(n, i, t);
          },
        ];
      }
    },
    295510: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(153867),
        a = n(468026),
        o = n(394059),
        l = n(388032);
      function d(e) {
        let { type: t, onConfirm: n, ...d } = e,
          s =
            t === o.K.STREAM
              ? l.intl.string(l.t["/lFMWl"])
              : l.intl.string(l.t.xzxhZW),
          u =
            t === o.K.STREAM
              ? l.intl.string(l.t.xaOX7e)
              : l.intl.string(l.t.oU1p9P);
        return (0, i.jsx)(a.default, {
          confirmText: l.intl.string(l.t["cY+Ooa"]),
          secondaryConfirmText: l.intl.string(l.t["JdIQ/f"]),
          title: s,
          cancelText: l.intl.string(l.t["ETE/oK"]),
          onConfirm: n,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              n();
          },
          body: u,
          ...d,
        });
      }
    },
    441061: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(442837),
        a = n(481060),
        o = n(475179),
        l = n(358221),
        d = n(388032);
      function s(e) {
        let t = (0, r.e7)([l.Z], () => l.Z.getVoiceParticipantsHidden(e));
        return (0, i.jsx)(a.MenuCheckboxItem, {
          id: "no-video-hide",
          label: d.intl.string(d.t.BL8ss7),
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
      var i = n(200651);
      n(192379);
      var r = n(442837),
        a = n(481060),
        o = n(740492),
        l = n(27584),
        d = n(295510),
        s = n(394059),
        u = n(65154),
        c = n(388032);
      function I(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : u.Yn.DEFAULT,
          [n, I, T] = (0, l.Z)(e, t),
          p = (0, r.e7)(
            [o.ZP],
            () => o.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return n
          ? (0, i.jsx)(a.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.intl.string(c.t.MH8ESU),
              checked: !I,
              action: () => {
                if (p || I) return T(!I);
                (0, a.openModal)((e) =>
                  (0, i.jsx)(d.Z, {
                    ...e,
                    type: s.K.VIDEO,
                    onConfirm: () => T(!I),
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
          return E;
        },
      }),
        n(653041);
      var i = n(200651),
        r = n(192379),
        a = n(442837),
        o = n(481060),
        l = n(139387),
        d = n(230711),
        s = n(213459),
        u = n(434404),
        c = n(430824),
        I = n(496675),
        T = n(981631),
        p = n(388032);
      function E(e) {
        let { user: t, guildId: n, channel: E, context: N } = e,
          S = c.Z.getGuild(n),
          _ = (0, a.e7)([I.Z], () =>
            null != S ? I.Z.can(T.Plq.MANAGE_GUILD, S) : null,
          ),
          f = (0, s.em)(E, !0, !0),
          h = (0, s.PL)(!0, !0),
          { isUserApp: m, isGuildApp: Z } = r.useMemo(() => {
            var e, n, i, r;
            if ((null == t ? void 0 : t.id) == null)
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
              o = Object.values(
                null !==
                  (r =
                    null === (n = h.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== r
                  ? r
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
          }, [f, h, null == t ? void 0 : t.id]),
          A = r.useCallback(() => {
            if ((null == S ? void 0 : S.id) != null)
              u.Z.open(S.id, T.pNK.INTEGRATIONS),
                l.Z.setSection(T.b4C.APPLICATION, null == t ? void 0 : t.id);
          }, [null == t ? void 0 : t.id, null == S ? void 0 : S.id]),
          g = r.useCallback(() => {
            d.Z.open(T.oAB.AUTHORIZED_APPS);
          }, []),
          O = N === T.IlC.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !_ || O || (!Z && !m)) return null;
        let v = [];
        return (
          Z &&
            v.push(
              (0, i.jsx)(
                o.MenuItem,
                {
                  id: "manage-integration",
                  label: p.intl.string(p.t["aw+qtb"]),
                  action: A,
                },
                "manage-integration",
              ),
            ),
          m &&
            v.push(
              (0, i.jsx)(
                o.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: p.intl.string(p.t.ALLIgY),
                  action: g,
                },
                "manage-authorized-app",
              ),
            ),
          v
        );
      }
    },
    821864: function (e, t, n) {
      n.d(t, {
        I4: function () {
          return I;
        },
        Sn: function () {
          return u;
        },
        U3: function () {
          return p;
        },
        Ui: function () {
          return T;
        },
        W4: function () {
          return s;
        },
        gq: function () {
          return c;
        },
        kZ: function () {
          return d;
        },
      });
      var i = n(544891),
        r = n(570140),
        a = n(555573),
        o = n(581364),
        l = n(981631);
      function d() {
        r.Z.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function s(e, t, n) {
        r.Z.dispatch({
          applicationId: e,
          commandId: t,
          permissions: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function u(e, t) {
        i.tn.get(l.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(
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
        let a = [];
        try {
          let r = await i.tn.get(
            l.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
          );
          r.ok && (a = r.body.permissions);
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
          permissions: a,
        });
      }
      function I(e) {
        r.Z.dispatch({
          applicationId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_INIT",
        });
      }
      function T(e) {
        r.Z.dispatch({
          commandId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_RESET",
        });
      }
      async function p(e) {
        let {
            applicationId: t,
            commandId: n,
            defaultEveryoneValue: i,
            defaultEverywhereValue: l,
            guildId: d,
            permissions: s,
          } = e,
          u =
            n === t
              ? (function (e, t, n, i) {
                  if (!n || !i) return t;
                  let r = { [e]: n, [(0, o.bD)(e)]: i };
                  return t.filter((e) => {
                    let t = r[e.id];
                    return null == t || e.permission !== t;
                  });
                })(d, s, i, l)
              : s,
          c = await a.dh(t, d, n, u);
        c.ok &&
          r.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: n,
            guildId: d,
            permissions: c.body.permissions,
          });
      }
    },
    978983: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var r = n(481060),
        a = n(53304);
      t.Z = () =>
        (0, i.jsx)("div", {
          className: a.loadingWrapper,
          children: (0, i.jsx)(r.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    977059: function (e, t, n) {
      n.d(t, {
        R: function () {
          return a;
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
      function a(e) {
        let { location: t } = e;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    441894: function (e, t, n) {
      n.d(t, {
        J: function () {
          return d;
        },
      }),
        n(47120);
      var i = n(442837),
        r = n(592125),
        a = n(19780),
        o = n(977059),
        l = n(760373);
      function d(e) {
        let { channelId: t, location: n } = e,
          { enabled: d } = (0, o.S)({ location: n });
        return (0, i.e7)(
          [a.Z, r.Z],
          () =>
            (function (e, t) {
              var n;
              let [i, o] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [a.Z, r.Z];
              if (!t || null == e || i.getChannelId() !== e) return !1;
              let d = o.getChannel(e);
              if (null == d || d.isGuildStageVoice()) return !1;
              let s =
                null === (n = i.getSecureFramesState()) || void 0 === n
                  ? void 0
                  : n.version;
              return null != s && s !== l.Eg;
            })(t, d, [a.Z, r.Z]),
          [t, d],
        );
      }
    },
    354589: function (e, t, n) {
      n.r(t);
      var i = n(200651);
      n(192379);
      var r = n(481060),
        a = n(239091),
        o = n(883385),
        l = n(108843),
        d = n(911969),
        s = n(947440),
        u = n(100527),
        c = n(441061),
        I = n(167675),
        T = n(737013),
        p = n(607783),
        E = n(299206),
        N = n(819403),
        S = n(777658),
        _ = n(858488),
        f = n(185457),
        h = n(570870),
        m = n(389052),
        Z = n(24311),
        A = n(915193),
        g = n(332576),
        O = n(710631),
        v = n(297047),
        G = n(88966),
        M = n(397616),
        y = n(558924),
        x = n(991307),
        C = n(725119),
        R = n(700994),
        b = n(332031),
        P = n(981631),
        U = n(388032);
      t.default = (0, l.Z)(
        (0, o.Z)(
          function (e) {
            var t;
            let {
                user: n,
                channel: o,
                context: l,
                showChatItems: u = !0,
                showMediaItems: P = !1,
                showChannelCallItems: j = !1,
                showModalItems: D = !0,
                onSelect: k,
                onHeightUpdate: L,
              } = e,
              H = (0, C.Z)({ userId: n.id, guildId: null }),
              w = (0, v.Z)(n, null, l),
              W = (0, y.Z)(n, o.id),
              B = (0, G.Z)(n.id, l),
              F = (0, Z.Z)({ user: n, context: l }),
              K = (0, f.Z)({ user: n, channelId: o.id, context: l }),
              V = (0, _.Z)({ user: n }),
              z = (0, R.Z)(n.id),
              Y = (0, M.Z)(n.id, o.id),
              q = (0, x.Z)(n.id),
              J = (0, p.B)({
                userId: n.id,
                channelId: o.id,
                guildId: o.getGuildId(),
                location: "GroupDMUserContextMenu",
              }),
              X = (0, g.Z)(n.id, o.id),
              Q = (0, O.Z)({ user: n }),
              $ = (0, s.Z)(null, n),
              ee = (0, S.Z)(n),
              et = (0, m.Z)({ user: n }),
              en = (0, E.Z)({ id: n.id, label: U.intl.string(U.t["/AXYnJ"]) }),
              ei = (0, b.Z)(n.id),
              er = (0, I.Z)(n.id),
              ea = (0, c.Z)(o.id),
              eo = (0, N.Z)(n),
              el = (0, T.Z)(n.id),
              ed = (0, h.Z)({
                commandType: d.yU.USER,
                commandTargetId: n.id,
                channel: o,
                guildId: void 0,
                onHeightUpdate: L,
              }),
              es = (0, A.Z)(n, o),
              eu = n.isNonUserBot(),
              ec = o.isManaged(),
              eI =
                null === (t = o.recipients) || void 0 === t
                  ? void 0
                  : t.includes(n.id);
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: a.Zy,
              "aria-label": U.intl.string(U.t.liqwPD),
              onSelect: k,
              children: [
                !eu &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(r.MenuGroup, { children: eo }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          D && H,
                          u && w,
                          B,
                          F,
                          !ec && W,
                          D && K,
                          D && V,
                          ei,
                        ],
                      }),
                      P && (0, i.jsx)(r.MenuGroup, { children: z }),
                      eI &&
                        (0, i.jsxs)(r.MenuGroup, { children: [!ec && Y, es] }),
                      (0, i.jsx)(r.MenuGroup, { children: D && $ }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          P && q,
                          P && J,
                          P && X,
                          ed,
                          D && Q,
                          ee,
                          D && et,
                          P && el,
                        ],
                      }),
                      j && (0, i.jsxs)(r.MenuGroup, { children: [ea, er] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: en }),
              ],
            });
          },
          { object: P.qAy.CONTEXT_MENU },
        ),
        [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU],
      );
    },
    570870: function (e, t, n) {
      var i = n(200651),
        r = n(192379),
        a = n(512722),
        o = n.n(a),
        l = n(442837),
        d = n(481060),
        s = n(10718),
        u = n(667204),
        c = n(826298),
        I = n(276022),
        T = n(978983),
        p = n(430824),
        E = n(594174),
        N = n(981631),
        S = n(689079),
        _ = n(388032),
        f = n(62352);
      t.Z = (e) => {
        let t,
          {
            commandType: n,
            commandTargetId: a,
            channel: h,
            guildId: m,
            onHeightUpdate: Z,
            context: A,
          } = e,
          g = (0, l.e7)([p.Z], () => p.Z.getGuild(null != m ? m : h.guild_id)),
          O = (0, l.e7)([E.default], () => E.default.getUser(a)),
          v = (0, I.Z)({
            user: O,
            guildId: null == g ? void 0 : g.id,
            channel: h,
            context: A,
          }),
          {
            commands: G,
            sectionDescriptors: M,
            loading: y,
          } = s.wi({
            channel: h,
            filters: { commandTypes: [n] },
            options: { limit: S.lr },
            allowFetch: !0,
          }),
          { sections: x } = r.useMemo(() => {
            let e = {};
            return (
              M.forEach((t) => {
                e[t.id] = t;
              }),
              { sections: e }
            );
          }, [M]),
          C = r.useRef(y.current);
        r.useEffect(() => {
          y.current !== C.current &&
            ((C.current = y.current), null == Z || Z());
        }, [y, Z]);
        let R = r.useCallback(
          (e) => {
            o()(null != h, "menu item should not show if channel is null");
            let t = x[e.applicationId],
              n = null != t ? (0, c.ky)(t) : void 0;
            return (0, i.jsx)(
              d.MenuItem,
              {
                id: e.id,
                label: e.displayName,
                iconLeft: () =>
                  null != n
                    ? (0, i.jsx)(n, {
                        channel: h,
                        section: t,
                        width: 18,
                        height: 18,
                        selectable: !1,
                      })
                    : null,
                action: () => {
                  (0, u.Z)({
                    command: e,
                    optionValues: {},
                    context: { channel: h, guild: g },
                    commandTargetId: a,
                  });
                },
              },
              e.id,
            );
          },
          [h, g, a, x],
        );
        if (
          (y.current
            ? (t = (0, i.jsx)(
                d.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(T.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((t =
                0 === G.length
                  ? (0, i.jsx)(
                      d.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: _.intl.string(_.t.YSNlV1),
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : G.map(R)),
              null != v &&
                (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                    t,
                    (0, i.jsx)(d.MenuSeparator, {}, "separator"),
                    v,
                  ],
                }))),
          !N.TPd.TEXTUAL.has(h.type))
        ) {
          if (null == v) return null;
          t = v;
        }
        return (0, i.jsx)(d.MenuItem, {
          id: "apps",
          label: _.intl.string(_.t.PHjkRE),
          listClassName: f.list,
          children: t,
        });
      };
    },
    915193: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(442837),
        a = n(692547),
        o = n(481060),
        l = n(493683),
        d = n(129861),
        s = n(700582),
        u = n(594174),
        c = n(388032),
        I = n(346411);
      function T(e) {
        let { color: t, className: n } = e;
        return (0, i.jsx)("svg", {
          className: n,
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
      function p(e, t) {
        let n = (0, r.e7)([u.default], () => u.default.getCurrentUser());
        return null == n || t.ownerId !== n.id || e.id === n.id
          ? null
          : (0, i.jsx)(o.MenuItem, {
              id: "make-dm-owner",
              color: "danger",
              label: c.intl.string(c.t["6t3CyM"]),
              action: () => {
                var r;
                return (
                  (r = n),
                  void (0, o.openModal)((n) =>
                    (0, i.jsxs)(o.ConfirmModal, {
                      bodyClassName: I.confirmModal,
                      header: c.intl.string(c.t.WZoUsr),
                      confirmText: c.intl.string(c.t["cY+Ooa"]),
                      cancelText: c.intl.string(c.t["ETE/oK"]),
                      onConfirm: () => l.Z.setDMOwner(t.id, e.id),
                      ...n,
                      children: [
                        (0, i.jsx)(T, {
                          color: a.Z.unsafe_rawColors.PRIMARY_300.css,
                        }),
                        (0, i.jsxs)("div", {
                          className: I.fromToWrapper,
                          children: [
                            (0, i.jsx)("div", {
                              className: I.from,
                              children: (0, i.jsx)(s.Z, {
                                user: r,
                                size: o.AvatarSizes.SIZE_80,
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: I.to,
                              children: (0, i.jsx)(s.Z, {
                                user: e,
                                size: o.AvatarSizes.SIZE_80,
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(o.Text, {
                          variant: "text-md/normal",
                          children: c.intl.format(c.t.gsBb3N, {
                            usernameHook: (t, n) =>
                              (0, i.jsx)(
                                d.Z,
                                {
                                  usernameIcon: (0, i.jsx)(o.Avatar, {
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
    88966: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(442837),
        a = n(481060),
        o = n(493683),
        l = n(40851),
        d = n(314897),
        s = n(981631),
        u = n(388032);
      function c(e, t) {
        let n = (0, l.Aq)();
        return (0, r.e7)([d.default], () => d.default.getId() === e) ||
          t === s.IlC.POPOUT
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "message-user",
              label: u.intl.string(u.t.OAJQlJ),
              action: () => {
                o.Z.openPrivateChannel(e),
                  n.dispatch(s.CkL.POPOUT_CLOSE),
                  (0, a.closeAllModals)();
              },
            });
      }
    },
    397616: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(442837),
        a = n(481060),
        o = n(493683),
        l = n(592125),
        d = n(594174),
        s = n(388032);
      function u(e, t) {
        var n;
        let u = (0, r.e7)([d.default], () => d.default.getCurrentUser(), []),
          c = (0, r.e7)([l.Z], () => l.Z.getChannel(t), [t]);
        return null == c ||
          c.isOwner(e) ||
          null == u ||
          !c.isOwner(u.id) ||
          !(null === (n = c.recipients) || void 0 === n
            ? void 0
            : n.includes(e))
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "remove",
              label: s.intl.string(s.t.n5zMIy),
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
      var i = n(200651);
      n(192379);
      var r = n(442837),
        a = n(481060),
        o = n(26151),
        l = n(358221),
        d = n(985588),
        s = n(354459),
        u = n(388032);
      function c(e, t) {
        let [n, c] = (0, r.Wu)(
          [l.Z],
          () => [l.Z.getParticipants(t), l.Z.getParticipant(t, e.id)],
          [t, e.id],
        );
        return (0, d.s)(e) && 0 !== n.length
          ? null == c
            ? (0, i.jsx)(a.MenuItem, {
                id: "ring",
                label: u.intl.string(u.t.bHa9kJ),
                action: () => o.Z.ring(t, [e.id]),
              })
            : c.type === s.fO.USER && c.ringing
              ? (0, i.jsx)(a.MenuItem, {
                  id: "stop-ringing",
                  label: u.intl.string(u.t.ygslb2),
                  action: () => o.Z.stopRinging(t, [e.id]),
                })
              : null
          : null;
      }
    },
    53304: function (e, t, n) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    62352: function (e, t, n) {
      e.exports = { list: "list_fd4745" };
    },
    346411: function (e, t, n) {
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
    201683: function (e, t, n) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
  },
]);
//# sourceMappingURL=201cdeb620a267d7ebb9.js.map
