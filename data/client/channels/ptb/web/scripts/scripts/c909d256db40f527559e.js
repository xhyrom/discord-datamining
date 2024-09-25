"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36356"],
  {
    139387: function (e, t, n) {
      var i = n(570140),
        r = n(434404),
        o = n(821864),
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
              await o.U3({
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
        o = n(544891),
        a = n(570140),
        u = n(981631);
      let l = ["Spidey Bot", "Captain Hook"];
      t.Z = {
        fetchForGuild(e) {
          a.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            o.tn
              .get({ url: u.ANM.GUILD_WEBHOOKS(e), oldFormErrors: !0 })
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
              .get({ url: u.ANM.CHANNEL_WEBHOOKS(t), oldFormErrors: !0 })
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
          null == n && (n = l[r().random(0, l.length - 1)]),
          o.tn
            .post({
              url: u.ANM.CHANNEL_WEBHOOKS(t),
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
          o.tn.del({ url: u.ANM.WEBHOOK(t), oldFormErrors: !0 }).then(() => {
            a.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: t });
          }),
        update: (e, t, n) =>
          o.tn
            .patch({ url: u.ANM.WEBHOOK(t), body: n, oldFormErrors: !0 })
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
        o = n(314897),
        a = n(131951),
        u = n(981631),
        l = n(65154);
      function d(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : l.Yn.DEFAULT,
          n = (0, i.e7)([o.default], () => o.default.getId()),
          d = (0, i.e7)(
            [a.Z],
            () => a.Z.supports(l.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled(),
          ),
          s = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(n, t), [n, t]),
          E = null == e || e === n;
        return [
          E && (d || s),
          s,
          (e) => {
            let i = e ? u.ZUi.DISABLED : u.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(n, i, t);
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
      var i = n(735250);
      n(470079);
      var r = n(153867),
        o = n(468026),
        a = n(394059),
        u = n(689938);
      function l(e) {
        let { type: t, onConfirm: n, ...l } = e,
          d =
            t === a.K.STREAM
              ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          s =
            t === a.K.STREAM
              ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, i.jsx)(o.default, {
          confirmText: u.Z.Messages.CONFIRM,
          secondaryConfirmText: u.Z.Messages.DONT_ASK_AGAIN,
          title: d,
          cancelText: u.Z.Messages.CANCEL,
          onConfirm: n,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              n();
          },
          body: s,
          ...l,
        });
      }
    },
    441061: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(735250);
      n(470079);
      var r = n(442837),
        o = n(481060),
        a = n(475179),
        u = n(358221),
        l = n(689938);
      function d(e) {
        let t = (0, r.e7)([u.Z], () => u.Z.getVoiceParticipantsHidden(e));
        return (0, i.jsx)(o.MenuCheckboxItem, {
          id: "no-video-hide",
          label: l.Z.Messages.STREAM_SHOW_NON_VIDEO,
          checked: !t,
          action: () => a.Z.toggleVoiceParticipantsHidden(e, !t),
        });
      }
    },
    167675: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var i = n(735250);
      n(470079);
      var r = n(442837),
        o = n(481060),
        a = n(740492),
        u = n(27584),
        l = n(295510),
        d = n(394059),
        s = n(65154),
        E = n(689938);
      function c(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          [n, c, I] = (0, u.Z)(e, t),
          T = (0, r.e7)(
            [a.ZP],
            () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return n
          ? (0, i.jsx)(o.MenuCheckboxItem, {
              id: "self-video-hide",
              label: E.Z.Messages.SHOW_SELF_VIDEO,
              checked: !c,
              action: () => {
                if (T || c) return I(!c);
                (0, o.openModal)((e) =>
                  (0, i.jsx)(l.Z, {
                    ...e,
                    type: d.K.VIDEO,
                    onConfirm: () => I(!c),
                  }),
                );
              },
            })
          : null;
      }
    },
    117984: function (e, t, n) {
      n.d(t, {
        CM: function () {
          return N;
        },
        UT: function () {
          return T;
        },
        _Z: function () {
          return A;
        },
        kj: function () {
          return c;
        },
        oC: function () {
          return I;
        },
        s3: function () {
          return f;
        },
        uA: function () {
          return p;
        },
        xh: function () {
          return _;
        },
      }),
        n(47120);
      var i = n(524437),
        r = n(675478),
        o = n(592125),
        a = n(496675),
        u = n(709054),
        l = n(853856),
        d = n(231338);
      function s() {
        let e = l.Z.getFavoriteChannels(),
          t = 1;
        for (let n in e) t = Math.max(t, e[n].order);
        return t + 1;
      }
      function E(e) {
        for (let t in e) {
          let n = e[t];
          if (null == n) {
            delete e[t];
            continue;
          }
          if (n.type === i.Dd.CATEGORY) continue;
          let r = o.Z.getChannel(t);
          if (null == r) {
            delete e[t];
            continue;
          }
          if (!r.isPrivate()) {
            if (!a.Z.can(d.Pl.VIEW_CHANNEL, r)) {
              delete e[t];
              continue;
            }
          }
        }
      }
      function c(e, t) {
        if (!l.Z.isFavorite(e))
          r.hW.updateAsync(
            "favorites",
            (n) => {
              (n.favoriteChannels[e] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: s(),
                parentId: null != t ? t : "0",
              })),
                E(n.favoriteChannels);
            },
            r.fy.FREQUENT_USER_ACTION,
          );
      }
      function I(e) {
        let t = l.Z.getFavorite(e);
        if (null != t)
          r.hW.updateAsync(
            "favorites",
            (n) => {
              if ((delete n.favoriteChannels[e], t.type === i.Dd.CATEGORY))
                for (let t in n.favoriteChannels)
                  n.favoriteChannels[t].parentId === e &&
                    (n.favoriteChannels[t].parentId = "0");
              E(n.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function T(e, t) {
        if (!!l.Z.isFavorite(e))
          r.hW.updateAsync(
            "favorites",
            (n) => {
              n.favoriteChannels[e].nickname = null != t ? t : "";
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function N(e) {
        let t = u.default.fromTimestamp(Date.now());
        r.hW.updateAsync(
          "favorites",
          (n) => {
            n.favoriteChannels[t] = i.aV.create({
              nickname: e,
              type: i.Dd.CATEGORY,
              position: s(),
              parentId: "0",
            });
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function _(e) {
        I(e);
      }
      function f(e) {
        r.hW.updateAsync(
          "favorites",
          (t) => {
            for (let i of e)
              if (
                (null != i.position &&
                  (t.favoriteChannels[i.id].position = i.position),
                void 0 !== i.parent_id)
              ) {
                var n;
                t.favoriteChannels[i.id].parentId =
                  null !== (n = i.parent_id) && void 0 !== n ? n : "0";
              }
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function p(e, t) {
        r.hW.updateAsync(
          "favorites",
          (n) => {
            n.favoriteChannels[e].parentId = null != t ? t : "0";
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function A() {
        r.hW.updateAsync(
          "favorites",
          (e) => {
            e.muted = !e.muted;
          },
          r.fy.INFREQUENT_USER_ACTION,
        );
      }
    },
    593214: function (e, t, n) {
      n.d(t, {
        Mt: function () {
          return N;
        },
        li: function () {
          return c;
        },
        s4: function () {
          return I;
        },
        up: function () {
          return _;
        },
        zv: function () {
          return T;
        },
      }),
        n(47120),
        n(653041);
      var i = n(470079),
        r = n(106351),
        o = n(442837);
      n(592125);
      var a = n(984933),
        u = n(914010);
      n(709054);
      var l = n(853856),
        d = n(362658),
        s = n(434065),
        E = n(981631);
      function c(e) {
        let { favoritesEnabled: t, hasStaffPrivileges: n } = (0, d.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, o.e7)([l.Z], () => l.Z.isFavorite(e.id)),
          r = e.isDM() || e.isThread();
        return t && !__OVERLAY__ && !i && (!r || n);
      }
      function I(e) {
        return (0, o.e7)([l.Z], () => l.Z.getFavorite(e));
      }
      function T() {
        return (0, o.e7)([a.ZP], () => a.ZP.getChannels(E.I_8))[
          r.d.GUILD_CATEGORY
        ].map((e) => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function N() {
        return (0, o.e7)([u.Z], () => u.Z.getGuildId()) === E.I_8;
      }
      function _() {
        let { isFavoritesPerk: e } = (0, d.z)("useFavoriteAdded"),
          t = (0, s.r)(),
          n = i.useCallback(() => {
            e && t.notifyFavoriteAdded();
          }, [t, e]),
          r = i.useCallback(() => {
            e && t.clearFavoriteAdded();
          }, [t, e]);
        return {
          favoriteAdded: t.favoriteAdded,
          notifyFavoriteAdded: n,
          clearFavoriteAdded: r,
        };
      }
    },
    434065: function (e, t, n) {
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var i = n(652874),
        r = n(731965);
      let o = (0, i.Z)((e) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, r.j)(() => e({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, r.j)(() => e({ favoriteAdded: !1 })),
      }));
    },
    276022: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(653041);
      var i = n(735250),
        r = n(470079),
        o = n(442837),
        a = n(481060),
        u = n(139387),
        l = n(230711),
        d = n(213459),
        s = n(434404),
        E = n(430824),
        c = n(496675),
        I = n(981631),
        T = n(689938);
      function N(e) {
        let { user: t, guildId: n, channel: N, context: _ } = e,
          f = E.Z.getGuild(n),
          p = (0, o.e7)([c.Z], () =>
            null != f ? c.Z.can(I.Plq.MANAGE_GUILD, f) : null,
          ),
          A = (0, d.em)(N, !0, !0),
          S = (0, d.PL)(!0, !0),
          { isUserApp: O, isGuildApp: h } = r.useMemo(() => {
            var e, n, i, r;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let o = Object.values(
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
                    null === (n = S.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== r
                  ? r
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
          }, [A, S, null == t ? void 0 : t.id]),
          C = r.useCallback(() => {
            if ((null == f ? void 0 : f.id) != null)
              s.Z.open(f.id, I.pNK.INTEGRATIONS),
                u.Z.setSection(I.b4C.APPLICATION, null == t ? void 0 : t.id);
          }, [null == t ? void 0 : t.id, null == f ? void 0 : f.id]),
          R = r.useCallback(() => {
            l.Z.open(I.oAB.AUTHORIZED_APPS);
          }, []),
          v = _ === I.IlC.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !p || v || (!h && !O)) return null;
        let Z = [];
        return (
          h &&
            Z.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-integration",
                  label: T.Z.Messages.MANAGE_INTEGRATION,
                  action: C,
                },
                "manage-integration",
              ),
            ),
          O &&
            Z.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: T.Z.Messages.MANAGE_AUTHORIZED_APP,
                  action: R,
                },
                "manage-authorized-app",
              ),
            ),
          Z
        );
      }
    },
    821864: function (e, t, n) {
      n.d(t, {
        I4: function () {
          return c;
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
          return E;
        },
        kZ: function () {
          return l;
        },
      });
      var i = n(544891),
        r = n(570140),
        o = n(555573),
        a = n(581364),
        u = n(981631);
      function l() {
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
        i.tn.get(u.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(
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
      async function E(e, t, n) {
        let o = [];
        try {
          let r = await i.tn.get(
            u.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
          );
          r.ok && (o = r.body.permissions);
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
          permissions: o,
        });
      }
      function c(e) {
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
            defaultEverywhereValue: u,
            guildId: l,
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
                })(l, d, i, u)
              : d,
          E = await o.dh(t, l, n, s);
        E.ok &&
          r.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: n,
            guildId: l,
            permissions: E.body.permissions,
          });
      }
    },
    823162: function (e, t, n) {
      n.d(t, {
        Xy: function () {
          return s;
        },
        e4: function () {
          return l;
        },
        gN: function () {
          return E;
        },
        hi: function () {
          return I;
        },
        qR: function () {
          return d;
        },
        r_: function () {
          return c;
        },
      });
      var i = n(544891),
        r = n(570140),
        o = n(893776),
        a = n(290323),
        u = n(981631);
      async function l(e) {
        await i.tn.put({
          url: u.ANM.CHANNEL_RECIPIENT_ME(e),
          body: { consent_status: a.h.ACCEPTED },
        }),
          r.Z.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: e,
          });
      }
      function d(e) {
        return i.tn.put({
          url: u.ANM.CHANNEL_RECIPIENT_ME(e),
          body: { consent_status: a.h.UNSPECIFIED },
        });
      }
      function s(e) {
        return i.tn.put({
          url: u.ANM.CHANNEL_RECIPIENT_ME(e),
          body: { consent_status: a.h.PENDING },
        });
      }
      function E(e) {
        return i.tn.del({ url: u.ANM.CHANNEL_RECIPIENT_ME(e) });
      }
      function c(e) {
        return i.tn.put({
          url: u.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: e },
        });
      }
      function I() {
        o.Z.getLocationMetadata();
      }
    },
    290323: function (e, t, n) {
      var i, r;
      n.d(t, {
        h: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.PENDING = 1)] = "PENDING"),
        (r[(r.ACCEPTED = 2)] = "ACCEPTED"),
        (r[(r.REJECTED = 3)] = "REJECTED");
    },
    977059: function (e, t, n) {
      n.d(t, {
        R: function () {
          return o;
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
      function o(e) {
        let { location: t } = e;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    441894: function (e, t, n) {
      n.d(t, {
        J: function () {
          return l;
        },
      }),
        n(47120);
      var i = n(442837),
        r = n(592125),
        o = n(19780),
        a = n(977059),
        u = n(760373);
      function l(e) {
        let { channelId: t, location: n } = e,
          { enabled: l } = (0, a.S)({ location: n });
        return (0, i.e7)(
          [o.Z, r.Z],
          () =>
            (function (e, t) {
              var n;
              let [i, a] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [o.Z, r.Z];
              if (!t || null == e || i.getChannelId() !== e) return !1;
              let l = a.getChannel(e);
              if (null == l || l.isGuildStageVoice()) return !1;
              let d =
                null === (n = i.getSecureFramesState()) || void 0 === n
                  ? void 0
                  : n.version;
              return null != d && d !== u.Eg;
            })(t, l, [o.Z, r.Z]),
          [t, l],
        );
      }
    },
    897769: function (e, t, n) {
      n.d(t, {
        S: function () {
          return o;
        },
      });
      var i = n(442837),
        r = n(359119);
      function o(e, t) {
        return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(e), [e])
          .filter((e) => e.type === t)
          .find((e) => null == e.dismiss_timestamp);
      }
    },
    981312: function (e, t, n) {
      n.d(t, {
        U: function () {
          return o;
        },
      });
      var i = n(442837),
        r = n(594174);
      function o() {
        return (
          !1 ===
          (0, i.e7)([r.default], () => {
            var e;
            return null === (e = r.default.getCurrentUser()) || void 0 === e
              ? void 0
              : e.nsfwAllowed;
          })
        );
      }
    },
    13279: function (e, t, n) {
      n.d(t, {
        z: function () {
          return l;
        },
      });
      var i = n(359119),
        r = n(897769),
        o = n(237292),
        a = n(403485),
        u = n(604849);
      function l(e, t) {
        let n = (0, o.y0)({ location: t }),
          l = (0, u.c)(),
          d = (0, a.h)(e),
          s = (0, r.S)(e, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
        if (
          !(
            !n ||
            !l ||
            0 === d.length ||
            d.some(
              (e) =>
                e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                (e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2 &&
                  null != e.dismiss_timestamp),
            )
          )
        )
          return s;
      }
    },
    403485: function (e, t, n) {
      n.d(t, {
        h: function () {
          return o;
        },
      });
      var i = n(442837),
        r = n(359119);
      function o(e) {
        return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(e), [
          e,
        ]).filter(
          (e) =>
            e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
            e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        );
      }
    },
    604849: function (e, t, n) {
      n.d(t, {
        c: function () {
          return a;
        },
      });
      var i = n(442837),
        r = n(581883),
        o = n(981312);
      let a = () => {
        let e = (0, i.e7)([r.Z], () => {
          var e, t, n;
          return (
            null ===
              (n =
                null === (t = r.Z.settings.privacy) || void 0 === t
                  ? void 0
                  : null === (e = t.inappropriateConversationWarnings) ||
                      void 0 === e
                    ? void 0
                    : e.value) ||
            void 0 === n ||
            n
          );
        });
        return (0, o.U)() && e;
      };
    },
    570870: function (e, t, n) {
      var i = n(735250),
        r = n(470079),
        o = n(512722),
        a = n.n(o),
        u = n(442837),
        l = n(481060),
        d = n(10718),
        s = n(667204),
        E = n(826298),
        c = n(276022),
        I = n(978983),
        T = n(430824),
        N = n(594174),
        _ = n(981631),
        f = n(689079),
        p = n(689938),
        A = n(62352);
      t.Z = (e) => {
        let t,
          {
            commandType: n,
            commandTargetId: o,
            channel: S,
            guildId: O,
            onHeightUpdate: h,
            context: C,
          } = e,
          R = (0, u.e7)([T.Z], () => T.Z.getGuild(null != O ? O : S.guild_id)),
          v = (0, u.e7)([N.default], () => N.default.getUser(o)),
          Z = (0, c.Z)({
            user: v,
            guildId: null == R ? void 0 : R.id,
            channel: S,
            context: C,
          }),
          {
            commands: y,
            sectionDescriptors: m,
            loading: M,
          } = d.wi(S, { commandTypes: [n] }, { limit: f.lr }),
          { sections: G } = r.useMemo(() => {
            let e = {};
            return (
              m.forEach((t) => {
                e[t.id] = t;
              }),
              { sections: e }
            );
          }, [m]),
          P = r.useRef(M.current);
        r.useEffect(() => {
          M.current !== P.current &&
            ((P.current = M.current), null == h || h());
        }, [M, h]);
        let g = r.useCallback(
          (e) => {
            a()(null != S, "menu item should not show if channel is null");
            let t = G[e.applicationId],
              n = null != t ? (0, E.ky)(t) : void 0;
            return (0, i.jsx)(
              l.MenuItem,
              {
                id: e.id,
                label: e.displayName,
                iconLeft: () =>
                  null != n
                    ? (0, i.jsx)(n, {
                        channel: S,
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
                    context: { channel: S, guild: R },
                    commandTargetId: o,
                  });
                },
              },
              e.id,
            );
          },
          [S, R, o, G],
        );
        if (
          (M.current
            ? (t = (0, i.jsx)(
                l.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(I.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((t =
                0 === y.length
                  ? (0, i.jsx)(
                      l.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: p.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : y.map(g)),
              null != Z &&
                (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                    t,
                    (0, i.jsx)(l.MenuSeparator, {}, "separator"),
                    Z,
                  ],
                }))),
          !_.TPd.TEXTUAL.has(S.type))
        ) {
          if (null == Z) return null;
          t = Z;
        }
        return (0, i.jsx)(l.MenuItem, {
          id: "apps",
          label: p.Z.Messages.APPS,
          listClassName: A.list,
          children: t,
        });
      };
    },
    100210: function (e, t, n) {
      e.exports = {
        rootContainer: "rootContainer_e45ea8",
        headerContainer: "headerContainer_e45ea8",
        text: "text_e45ea8",
        newBadge: "newBadge_e45ea8",
        nitroWheel: "nitroWheel_e45ea8",
        labelContainer: "labelContainer_e45ea8",
        playButton: "playButton_e45ea8",
        mutedLabel: "mutedLabel_e45ea8",
      };
    },
    507815: function (e, t, n) {
      e.exports = { text: "text_b953a6" };
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
  },
]);
//# sourceMappingURL=c909d256db40f527559e.js.map
