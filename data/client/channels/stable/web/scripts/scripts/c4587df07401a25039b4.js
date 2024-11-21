"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33862"],
  {
    139387: function (e, t, n) {
      var i = n(570140),
        r = n(434404),
        l = n(821864),
        T = n(308063);
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
              await T.Z.update(e, t.id, t),
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
        T = n(570140),
        I = n(981631);
      let o = ["Spidey Bot", "Captain Hook"];
      t.Z = {
        fetchForGuild(e) {
          T.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            l.tn
              .get({
                url: I.ANM.GUILD_WEBHOOKS(e),
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then((t) => {
                let { body: n } = t;
                return T.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  webhooks: n,
                });
              })
              .catch((t) => {
                let { body: n } = t;
                T.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  error: n.message,
                });
              });
        },
        fetchForChannel(e, t) {
          T.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e, channelId: t }),
            l.tn
              .get({
                url: I.ANM.CHANNEL_WEBHOOKS(t),
                oldFormErrors: !0,
                rejectWithError: !0,
              })
              .then((n) => {
                let { body: i } = n;
                return T.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  channelId: t,
                  webhooks: i,
                });
              });
        },
        create: (e, t, n) => (
          null == n && (n = o[r().random(0, o.length - 1)]),
          l.tn
            .post({
              url: I.ANM.CHANNEL_WEBHOOKS(t),
              body: { name: n },
              oldFormErrors: !0,
              rejectWithError: !1,
            })
            .then((t) => {
              let { body: n } = t;
              return (
                T.Z.dispatch({
                  type: "WEBHOOK_CREATE",
                  guildId: e,
                  webhook: n,
                }),
                n
              );
            })
        ),
        delete: (e, t) =>
          l.tn
            .del({
              url: I.ANM.WEBHOOK(t),
              oldFormErrors: !0,
              rejectWithError: !1,
            })
            .then(() => {
              T.Z.dispatch({
                type: "WEBHOOK_DELETE",
                guildId: e,
                webhookId: t,
              });
            }),
        update: (e, t, n) =>
          l.tn
            .patch({
              url: I.ANM.WEBHOOK(t),
              body: n,
              oldFormErrors: !0,
              rejectWithError: !1,
            })
            .then((t) => {
              let { body: n } = t;
              return (
                T.Z.dispatch({
                  type: "WEBHOOK_UPDATE",
                  guildId: e,
                  webhook: n,
                }),
                n
              );
            }),
      };
    },
    360606: function (e, t, n) {
      let i, r;
      n.r(t), n(653041), n(47120);
      var l,
        T,
        I,
        o,
        E = n(392711),
        u = n.n(E),
        N = n(442837),
        a = n(570140),
        _ = n(308063),
        S = n(496675),
        c = n(855674),
        d = n(999382),
        s = n(981631);
      let O = [],
        G = [],
        p = null,
        A = null,
        h = null,
        f = !1,
        R = !1,
        Z = s.QZA.CLOSED,
        y = {},
        g = !1,
        C = null;
      function P(e) {
        let { section: t } = e;
        if (t !== s.pNK.INTEGRATIONS) return !1;
        if (null == i) {
          let e = d.Z.getGuildId();
          null != e && _.Z.fetchForGuild(e), D(!1);
        }
      }
      function D(e) {
        if (
          null != (i = d.Z.getProps().guild) &&
          S.Z.can(s.Plq.MANAGE_GUILD, i)
        ) {
          let e = d.Z.getProps().integrations;
          null == e && (R = !0), (O = null != e ? e : []);
        } else O = [];
        if (
          ((G =
            null != i && S.Z.can(s.Plq.MANAGE_WEBHOOKS, i)
              ? c.Z.getWebhooksForGuild(i.id)
              : []),
          !e && null != A)
        ) {
          let e = M(A.id);
          null != e && (A = e);
        }
        if (null != h) {
          let e = b(h.id);
          null != e && (h = e);
        }
        (p = null), (Z = s.QZA.OPEN), (y = {}), (g = !1);
      }
      let v = u().debounce(() => {
        g &&
          (null != A
            ? u().isEqual(A, M(A.id)) && (g = !1)
            : null != h && u().isEqual(h, b(h.id)) && (g = !1),
          !g && W.emitChange());
      }, 500);
      function M(e) {
        return O.find((t) => {
          let { id: n } = t;
          return n === e;
        });
      }
      function b(e) {
        return G.find((t) => {
          let { id: n } = t;
          return n === e;
        });
      }
      class m extends (l = N.ZP.Store) {
        initialize() {
          this.waitFor(d.Z, c.Z, S.Z);
        }
        hasChanges() {
          return g;
        }
        get guild() {
          return i;
        }
        get integrations() {
          return O;
        }
        get webhooks() {
          return G;
        }
        get editedCommandId() {
          return p;
        }
        get editedIntegration() {
          return A;
        }
        get editedWebhook() {
          return h;
        }
        get formState() {
          return Z;
        }
        getErrors() {
          return y;
        }
        getSection() {
          return null != r ? r : s.b4C.OVERVIEW;
        }
        getSectionId() {
          return C;
        }
        getIntegration(e) {
          return M(e);
        }
        getWebhook(e) {
          return b(e);
        }
        isFetching() {
          return R || f;
        }
        showNotice() {
          return this.hasChanges();
        }
        getApplication(e) {
          var t;
          return null ===
            (t = O.find((t) => {
              var n;
              return (
                (null === (n = t.application) || void 0 === n
                  ? void 0
                  : n.id) === e
              );
            })) || void 0 === t
            ? void 0
            : t.application;
        }
      }
      (o = "GuildSettingsIntegrationsStore"),
        (I = "displayName") in (T = m)
          ? Object.defineProperty(T, I, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (T[I] = o);
      let W = new m(
        a.Z,
        __OVERLAY__
          ? {}
          : {
              INTEGRATION_SETTINGS_INIT: function () {
                return D(!1);
              },
              INTEGRATION_SETTINGS_SAVE_SUCCESS: function () {
                return D(!0);
              },
              GUILD_SETTINGS_INIT: P,
              GUILD_SETTINGS_SET_SECTION: P,
              INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                let { section: t, sectionId: n } = e;
                (r = t), (C = n);
              },
              INTEGRATION_SETTINGS_START_EDITING_COMMAND: function (e) {
                let { commandId: t } = e;
                (p = t), (A = null), (h = null), (y = {}), (g = !0);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function (e) {
                let { commandId: t } = e;
                if (null == p || p !== t) return !1;
                (p = null), (y = {}), (g = !1);
              },
              INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function (e) {
                let { integrationId: t } = e,
                  n = M(t);
                if (null == n) return !1;
                (A = n), (p = null), (h = null), (y = {}), (g = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function () {
                (A = null), (y = {}), (g = !1);
              },
              INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function (e) {
                let { settings: t } = e;
                if (null == A) return !1;
                (A = { ...A }),
                  null != t.enableEmoticons &&
                    A.enable_emoticons !== t.enableEmoticons &&
                    ((A.enable_emoticons = t.enableEmoticons), (g = !0)),
                  null != t.expireBehavior &&
                    A.expire_behavior !== t.expireBehavior &&
                    ((A.expire_behavior = t.expireBehavior), (g = !0)),
                  null != t.expireGracePeriod &&
                    A.expire_grace_period !== t.expireGracePeriod &&
                    ((A.expire_grace_period = t.expireGracePeriod), (g = !0)),
                  g && v();
              },
              INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                let { settings: t } = e;
                if (null == h) return !1;
                (h = { ...h }),
                  null != t.name &&
                    h.name !== t.name &&
                    ((h.name = t.name), (g = !0)),
                  void 0 !== t.avatar &&
                    h.avatar !== t.avatar &&
                    ((h.avatar = t.avatar), (g = !0)),
                  null != t.channelId &&
                    h.channel_id !== t.channelId &&
                    ((h.channel_id = t.channelId), (g = !0)),
                  g && v();
              },
              INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                let { webhookId: t } = e,
                  n = b(t);
                if (null == n) return !1;
                (h = n), (p = null), (A = null), (y = {}), (g = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                (h = null), (y = {}), (g = !1);
              },
              GUILD_SETTINGS_CLOSE: function () {
                (i = null),
                  (O = []),
                  (G = []),
                  (p = null),
                  (A = null),
                  (h = null),
                  (Z = s.QZA.CLOSED),
                  (g = !1);
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                let { guildId: t, integrations: n } = e;
                if (null == i || t !== i.id || Z === s.QZA.SUBMITTING)
                  return !1;
                for (let e of ((R = !1), n))
                  if (
                    null ==
                    O.find((t) => {
                      let { id: n } = t;
                      if (n === e.id) return !0;
                    })
                  ) {
                    var r, l;
                    O.push(e),
                      e.type === (null == A ? void 0 : A.type) &&
                        (null === (r = e.account) || void 0 === r
                          ? void 0
                          : r.id) ===
                          (null === (l = A.account) || void 0 === l
                            ? void 0
                            : l.id) &&
                        (A = e);
                  }
                for (let e = O.length - 1; e >= 0; e--) {
                  let t = O[e],
                    i = n.find((e) => {
                      let { id: n } = e;
                      if (n === t.id) return !0;
                    });
                  if (null != i) {
                    let n = { ...t, ...i };
                    (null == A ? void 0 : A.id) === n.id &&
                      (!1 === n.enabled ? (A = null) : !g && (A = n)),
                      (O[e] = n);
                  } else
                    (null == A ? void 0 : A.id) === t.id && (A = null),
                      O.splice(e, 1);
                }
                (O = [...O]), v();
              },
              WEBHOOKS_UPDATE: function (e) {
                let { guildId: t, channelId: n, webhooks: r } = e;
                if (
                  null == i ||
                  t !== i.id ||
                  null == r ||
                  Z === s.QZA.SUBMITTING
                )
                  return !1;
                f = !1;
                for (let e = G.length - 1; e >= 0; e--) {
                  let t = G[e];
                  if (null != n && (null == t ? void 0 : t.channel_id) !== n)
                    continue;
                  let i = r.find((e) => {
                    let { id: n } = e;
                    if (n === t.id) return !0;
                  });
                  if (null != i) {
                    let n = { ...t, ...i };
                    (G[e] = n),
                      !g && (null == h ? void 0 : h.id) === n.id && (h = n);
                  } else
                    (null == h ? void 0 : h.id) === t.id && (h = null),
                      G.splice(e, 1);
                }
                for (let e of r)
                  null ==
                    G.find((t) => {
                      let { id: n } = t;
                      if (n === e.id) return !0;
                    }) && G.push(e);
                (G = [...G]), v();
              },
              INTEGRATION_SETTINGS_SUBMITTING: function () {
                (Z = s.QZA.SUBMITTING), (y = {});
              },
              INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                var t;
                if (Z !== s.QZA.SUBMITTING) return !1;
                (Z = s.QZA.OPEN),
                  (y = null !== (t = e.errors) && void 0 !== t ? t : {});
              },
            },
      );
      t.default = W;
    },
    821864: function (e, t, n) {
      n.d(t, {
        I4: function () {
          return a;
        },
        Sn: function () {
          return u;
        },
        U3: function () {
          return S;
        },
        Ui: function () {
          return _;
        },
        W4: function () {
          return E;
        },
        gq: function () {
          return N;
        },
        kZ: function () {
          return o;
        },
      });
      var i = n(544891),
        r = n(570140),
        l = n(555573),
        T = n(581364),
        I = n(981631);
      function o() {
        r.Z.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function E(e, t, n) {
        r.Z.dispatch({
          applicationId: e,
          commandId: t,
          permissions: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function u(e, t) {
        i.tn
          .get({
            url: I.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t),
            rejectWithError: !0,
          })
          .then(
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
      async function N(e, t, n) {
        let l = [];
        try {
          let r = await i.tn.get({
            url: I.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
            rejectWithError: !1,
          });
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
      function a(e) {
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
      async function S(e) {
        let {
            applicationId: t,
            commandId: n,
            defaultEveryoneValue: i,
            defaultEverywhereValue: I,
            guildId: o,
            permissions: E,
          } = e,
          u =
            n === t
              ? (function (e, t, n, i) {
                  if (!n || !i) return t;
                  let r = { [e]: n, [(0, T.bD)(e)]: i };
                  return t.filter((e) => {
                    let t = r[e.id];
                    return null == t || e.permission !== t;
                  });
                })(o, E, i, I)
              : E,
          N = await l.dh(t, o, n, u);
        N.ok &&
          r.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: n,
            guildId: o,
            permissions: N.body.permissions,
          });
      }
    },
    855674: function (e, t, n) {
      let i;
      n(47120);
      var r,
        l,
        T,
        I,
        o = n(392711),
        E = n.n(o),
        u = n(442837),
        N = n(570140),
        a = n(308063);
      let _ = {},
        S = {};
      function c(e, t) {
        return null == t && (t = "guild"), "".concat(e, ":").concat(t);
      }
      function d(e) {
        return null != _[e] ? _[e] : ((_[e] = {}), _[e]);
      }
      function s(e) {
        let { guildId: t, webhook: n } = e;
        d(t)[n.id] = n;
      }
      class O extends (r = u.ZP.Store) {
        isFetching(e, t) {
          return null != S[c(e, t)];
        }
        getWebhooksForGuild(e) {
          return E().values(d(e));
        }
        getWebhooksForChannel(e, t) {
          return E()(d(e))
            .values()
            .filter((e) => e.channel_id === t)
            .value();
        }
        get error() {
          return i;
        }
      }
      (I = "WebhooksStore"),
        (T = "displayName") in (l = O)
          ? Object.defineProperty(l, T, {
              value: I,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[T] = I),
        (t.Z = new O(N.Z, {
          WEBHOOKS_UPDATE: function (e) {
            let { guildId: t, channelId: n, webhooks: r, error: l } = e;
            if (null == r) {
              null != l
                ? ((i = l), delete S[c(t, n)])
                : null != n &&
                  null != _[t] &&
                  ((i = null), a.Z.fetchForChannel(t, n));
              return;
            }
            i = null;
            let T = [];
            null != n &&
              (T = E()(d(t))
                .values()
                .filter((e) => e.channel_id !== n)
                .value());
            let I = (_[t] = {});
            T.concat(r).forEach((e) => (I[e.id] = e)), delete S[c(t, n)];
          },
          WEBHOOKS_FETCHING: function (e) {
            let { guildId: t, channelId: n } = e;
            S[c(t, n)] = !0;
          },
          WEBHOOK_CREATE: s,
          WEBHOOK_UPDATE: s,
          WEBHOOK_DELETE: function (e) {
            let { guildId: t, webhookId: n } = e;
            delete d(t)[n];
          },
        }));
    },
  },
]);
//# sourceMappingURL=c4587df07401a25039b4.js.map
