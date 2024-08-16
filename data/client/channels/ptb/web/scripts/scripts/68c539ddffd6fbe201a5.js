"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38626"],
  {
    139387: function (t, e, T) {
      var n = T(570140),
        I = T(434404),
        E = T(821864),
        i = T(308063);
      e.Z = {
        init() {
          n.Z.dispatch({ type: "INTEGRATION_SETTINGS_INIT" });
        },
        setSection(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          n.Z.dispatch({
            type: "INTEGRATION_SETTINGS_SET_SECTION",
            section: t,
            sectionId: e,
          });
        },
        startEditingCommandPermissions(t) {
          n.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
            commandId: t,
          });
        },
        stopEditingCommandPermissions(t) {
          n.Z.dispatch({
            type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
            commandId: t,
          });
        },
        startEditingIntegration(t) {
          n.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
            integrationId: t,
          });
        },
        stopEditingIntegration() {
          n.Z.dispatch({
            type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION",
          });
        },
        updateIntegration(t) {
          n.Z.dispatch({
            type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
            settings: t,
          });
        },
        startEditingWebhook(t) {
          n.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
            webhookId: t,
          });
        },
        stopEditingWebhook() {
          n.Z.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK" });
        },
        updateWebhook(t) {
          n.Z.dispatch({
            type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
            settings: t,
          });
        },
        async saveApplicationPermissions(t, e, T) {
          try {
            n.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await E.U3({
                applicationId: t,
                commandId: t,
                defaultEveryoneValue: !0,
                defaultEverywhereValue: !0,
                guildId: e,
                permissions: T,
              }),
              n.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (t) {
            n.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: t.body,
            });
          }
        },
        async saveIntegration(t, e) {
          try {
            n.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await I.Z.updateIntegration(
                t,
                e.id,
                e.expire_behavior,
                e.expire_grace_period,
                e.enable_emoticons,
              ),
              n.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (t) {
            n.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: t.body,
            });
          }
        },
        async saveWebhook(t, e) {
          try {
            n.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await i.Z.update(t, e.id, e),
              n.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (t) {
            n.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: t.body,
            });
          }
        },
      };
    },
    308063: function (t, e, T) {
      var n = T(392711),
        I = T.n(n),
        E = T(544891),
        i = T(570140),
        N = T(981631);
      let r = ["Spidey Bot", "Captain Hook"];
      e.Z = {
        fetchForGuild(t) {
          i.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: t }),
            E.tn
              .get({ url: N.ANM.GUILD_WEBHOOKS(t), oldFormErrors: !0 })
              .then((e) => {
                let { body: T } = e;
                return i.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: t,
                  webhooks: T,
                });
              })
              .catch((e) => {
                let { body: T } = e;
                i.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: t,
                  error: T.message,
                });
              });
        },
        fetchForChannel(t, e) {
          i.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: t, channelId: e }),
            E.tn
              .get({ url: N.ANM.CHANNEL_WEBHOOKS(e), oldFormErrors: !0 })
              .then((T) => {
                let { body: n } = T;
                return i.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: t,
                  channelId: e,
                  webhooks: n,
                });
              });
        },
        create: (t, e, T) => (
          null == T && (T = r[I().random(0, r.length - 1)]),
          E.tn
            .post({
              url: N.ANM.CHANNEL_WEBHOOKS(e),
              body: { name: T },
              oldFormErrors: !0,
            })
            .then((e) => {
              let { body: T } = e;
              return (
                i.Z.dispatch({
                  type: "WEBHOOK_CREATE",
                  guildId: t,
                  webhook: T,
                }),
                T
              );
            })
        ),
        delete: (t, e) =>
          E.tn.del({ url: N.ANM.WEBHOOK(e), oldFormErrors: !0 }).then(() => {
            i.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: t, webhookId: e });
          }),
        update: (t, e, T) =>
          E.tn
            .patch({ url: N.ANM.WEBHOOK(e), body: T, oldFormErrors: !0 })
            .then((e) => {
              let { body: T } = e;
              return (
                i.Z.dispatch({
                  type: "WEBHOOK_UPDATE",
                  guildId: t,
                  webhook: T,
                }),
                T
              );
            }),
      };
    },
    821864: function (t, e, T) {
      T.d(e, {
        I4: function () {
          return _;
        },
        Sn: function () {
          return o;
        },
        U3: function () {
          return c;
        },
        Ui: function () {
          return a;
        },
        W4: function () {
          return s;
        },
        gq: function () {
          return S;
        },
        kZ: function () {
          return r;
        },
      });
      var n = T(544891),
        I = T(570140),
        E = T(555573),
        i = T(581364),
        N = T(981631);
      function r() {
        I.Z.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function s(t, e, T) {
        I.Z.dispatch({
          applicationId: t,
          commandId: e,
          permissions: T,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function o(t, e) {
        n.tn.get(N.ANM.GUILD_COMMANDS_FOR_APPLICATION(t, e)).then(
          (T) => {
            I.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
              applicationId: e,
              commands: T.body.application_commands,
              guildId: t,
              permissions: T.body.permissions,
            });
          },
          () => {
            I.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
              applicationId: e,
            });
          },
        );
      }
      async function S(t, e, T) {
        let E = [];
        try {
          let I = await n.tn.get(
            N.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(t, e, T),
          );
          I.ok && (E = I.body.permissions);
        } catch (n) {
          if (404 !== n.status) {
            I.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
              applicationId: t,
              commandId: T,
              guildId: e,
            });
            return;
          }
        }
        I.Z.dispatch({
          type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
          applicationId: t,
          commandId: T,
          guildId: e,
          permissions: E,
        });
      }
      function _(t) {
        I.Z.dispatch({
          applicationId: t,
          type: "INTEGRATION_PERMISSION_SETTINGS_INIT",
        });
      }
      function a(t) {
        I.Z.dispatch({
          commandId: t,
          type: "INTEGRATION_PERMISSION_SETTINGS_RESET",
        });
      }
      async function c(t) {
        let {
            applicationId: e,
            commandId: T,
            defaultEveryoneValue: n,
            defaultEverywhereValue: N,
            guildId: r,
            permissions: s,
          } = t,
          o =
            T === e
              ? (function (t, e, T, n) {
                  if (!T || !n) return e;
                  let I = { [t]: T, [(0, i.bD)(t)]: n };
                  return e.filter((t) => {
                    let e = I[t.id];
                    return null == e || t.permission !== e;
                  });
                })(r, s, n, N)
              : s,
          S = await E.dh(e, r, T, o);
        S.ok &&
          I.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: e,
            commandId: T,
            guildId: r,
            permissions: S.body.permissions,
          });
      }
    },
    240678: function (t, e, T) {
      T.r(e),
        T.d(e, {
          default: function () {
            return A;
          },
        });
      var n = T(735250);
      T(470079);
      var I = T(374470),
        E = T(481060),
        i = T(239091),
        N = T(911969),
        r = T(299206),
        s = T(26737),
        o = T(905041),
        S = T(89013),
        _ = T(570870),
        a = T(449751),
        c = T(601184),
        p = T(168405),
        d = T(134323),
        O = T(689938);
      function A(t) {
        var e;
        let T,
          A,
          u,
          {
            channel: G,
            message: h,
            target: l,
            mediaItem: y,
            onSelect: R,
            onHeightUpdate: Z,
          } = t,
          M = l;
        if (null != y) A = T = y.url;
        else
          for (; (0, I.k)(M); )
            (0, I.k)(M, HTMLImageElement) && null != M.src && (A = M.src),
              (0, I.k)(M, HTMLAnchorElement) &&
                null != M.href &&
                ((T = M.href), (u = M.textContent)),
              (M = M.parentNode);
        let C =
            null === (e = document.getSelection()) || void 0 === e
              ? void 0
              : e.toString(),
          m = (0, s.Z)(C),
          f = (0, S.Z)(C),
          g = (0, _.Z)({
            commandType: N.yU.MESSAGE,
            commandTargetId: h.id,
            channel: G,
            guildId: void 0,
            onHeightUpdate: Z,
          }),
          P = (0, p.Z)(h, G),
          D = (0, a.Z)(h, G),
          U = (0, c.Z)(h, G),
          H = (0, o.Z)(null != T ? T : A, u),
          b = (0, r.Z)({
            id: h.id,
            label: O.Z.Messages.COPY_ID_MESSAGE,
            shiftId: "".concat(h.channel_id, "-").concat(h.id),
          }),
          B = (0, d.Z)(h, G);
        return (0, n.jsxs)(E.Menu, {
          navId: "message",
          onClose: i.Zy,
          "aria-label": O.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
          onSelect: R,
          children: [
            (0, n.jsx)(E.MenuGroup, { children: m }),
            (0, n.jsx)(E.MenuGroup, { children: f }),
            (0, n.jsxs)(E.MenuGroup, { children: [B, g, P, D, U] }),
            (0, n.jsx)(E.MenuGroup, { children: H }),
            (0, n.jsx)(E.MenuGroup, { children: b }),
          ],
        });
      }
    },
    608362: function (t, e, T) {
      t.exports = {
        spacing: "spacing_ddcc45",
        spacingTop: "spacingTop_ddcc45",
        message: "message_ddcc45",
      };
    },
    359522: function (t, e, T) {
      t.exports = { list: "list_fd4745" };
    },
  },
]);
//# sourceMappingURL=68c539ddffd6fbe201a5.js.map
