"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38940"],
  {
    139387: function (n, t, e) {
      var i = e(570140),
        r = e(434404),
        u = e(821864),
        l = e(308063);
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
              await u.U3({
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
              await l.Z.update(n, t.id, t),
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
        u = e(544891),
        l = e(570140),
        o = e(981631);
      let a = ["Spidey Bot", "Captain Hook"];
      t.Z = {
        fetchForGuild(n) {
          l.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: n }),
            u.tn
              .get({ url: o.ANM.GUILD_WEBHOOKS(n), oldFormErrors: !0 })
              .then((t) => {
                let { body: e } = t;
                return l.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: n,
                  webhooks: e,
                });
              })
              .catch((t) => {
                let { body: e } = t;
                l.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: n,
                  error: e.message,
                });
              });
        },
        fetchForChannel(n, t) {
          l.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: n, channelId: t }),
            u.tn
              .get({ url: o.ANM.CHANNEL_WEBHOOKS(t), oldFormErrors: !0 })
              .then((e) => {
                let { body: i } = e;
                return l.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: n,
                  channelId: t,
                  webhooks: i,
                });
              });
        },
        create: (n, t, e) => (
          null == e && (e = a[r().random(0, a.length - 1)]),
          u.tn
            .post({
              url: o.ANM.CHANNEL_WEBHOOKS(t),
              body: { name: e },
              oldFormErrors: !0,
            })
            .then((t) => {
              let { body: e } = t;
              return (
                l.Z.dispatch({
                  type: "WEBHOOK_CREATE",
                  guildId: n,
                  webhook: e,
                }),
                e
              );
            })
        ),
        delete: (n, t) =>
          u.tn.del({ url: o.ANM.WEBHOOK(t), oldFormErrors: !0 }).then(() => {
            l.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: n, webhookId: t });
          }),
        update: (n, t, e) =>
          u.tn
            .patch({ url: o.ANM.WEBHOOK(t), body: e, oldFormErrors: !0 })
            .then((t) => {
              let { body: e } = t;
              return (
                l.Z.dispatch({
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
    27584: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = e(442837),
        r = e(846027),
        u = e(314897),
        l = e(131951),
        o = e(981631),
        a = e(65154);
      function d(n) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : a.Yn.DEFAULT,
          e = (0, i.e7)([u.default], () => u.default.getId()),
          d = (0, i.e7)(
            [l.Z],
            () => l.Z.supports(a.AN.DISABLE_VIDEO) && l.Z.isVideoEnabled(),
          ),
          s = (0, i.e7)([l.Z], () => l.Z.isLocalVideoDisabled(e, t), [e, t]),
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
          return a;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(153867),
        u = e(468026),
        l = e(394059),
        o = e(388032);
      function a(n) {
        let { type: t, onConfirm: e, ...a } = n,
          d =
            t === l.K.STREAM
              ? o.intl.string(o.t["/lFMWl"])
              : o.intl.string(o.t.xzxhZW),
          s =
            t === l.K.STREAM
              ? o.intl.string(o.t.xaOX7e)
              : o.intl.string(o.t.oU1p9P);
        return (0, i.jsx)(u.default, {
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
          ...a,
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
        u = e(481060),
        l = e(475179),
        o = e(358221),
        a = e(388032);
      function d(n) {
        let t = (0, r.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(n));
        return (0, i.jsx)(u.MenuCheckboxItem, {
          id: "no-video-hide",
          label: a.intl.string(a.t.BL8ss7),
          checked: !t,
          action: () => l.Z.toggleVoiceParticipantsHidden(n, !t),
        });
      }
    },
    167675: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return E;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var r = e(442837),
        u = e(481060),
        l = e(740492),
        o = e(27584),
        a = e(295510),
        d = e(394059),
        s = e(65154),
        c = e(388032);
      function E(n) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          [e, E, f] = (0, o.Z)(n, t),
          _ = (0, r.e7)(
            [l.ZP],
            () => l.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return e
          ? (0, i.jsx)(u.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.intl.string(c.t.MH8ESU),
              checked: !E,
              action: () => {
                if (_ || E) return f(!E);
                (0, u.openModal)((n) =>
                  (0, i.jsx)(a.Z, {
                    ...n,
                    type: d.K.VIDEO,
                    onConfirm: () => f(!E),
                  }),
                );
              },
            })
          : null;
      }
    },
    776568: function (n, t, e) {
      e.d(t, {
        ZP: function () {
          return h;
        },
        k: function () {
          return N;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var r = e(913527),
        u = e.n(r),
        l = e(442837),
        o = e(481060),
        a = e(211739),
        d = e(87051),
        s = e(496729),
        c = e(777861),
        E = e(9156),
        f = e(621600),
        _ = e(933557),
        T = e(981631),
        I = e(969943),
        p = e(388032);
      let N = () => [
          { value: I.Oe.MINUTES_15, label: p.intl.string(p.t["8ot6go"]) },
          { value: I.Oe.HOURS_1, label: p.intl.string(p.t.UMWBZm) },
          { value: I.Oe.HOURS_3, label: p.intl.string(p.t.QmYWtr) },
          { value: I.Oe.HOURS_8, label: p.intl.string(p.t.EpAXPD) },
          { value: I.Oe.HOURS_24, label: p.intl.string(p.t["755t4u"]) },
          { value: I.Oe.ALWAYS, label: p.intl.string(p.t.r3LawM) },
        ],
        A = (n) => {
          let t = n > 0 ? u()().add(n, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: n, end_time: t },
          };
        };
      function h(n, t) {
        let [e, r] = (0, l.Wu)([E.ZP], () => [
            E.ZP.isChannelMuted(n.guild_id, n.id),
            E.ZP.getChannelMuteConfig(n.guild_id, n.id),
          ]),
          u = (0, c.U)(r),
          I = (0, _.ZP)(n, !0);
        function h(t) {
          t && n.type === T.d4z.GUILD_CATEGORY && (0, a.c4)(n.id),
            d.Z.updateChannelOverrideSettings(
              n.guild_id,
              n.id,
              { muted: t },
              f.UE.muted(t),
            );
        }
        let S = p.intl.string(p.t.tbeRRE),
          C = p.intl.string(p.t.OYefmZ);
        switch (n.type) {
          case T.d4z.GUILD_CATEGORY:
            (S = p.intl.string(p.t.pNMCg4)), (C = p.intl.string(p.t.olaBeH));
            break;
          case T.d4z.GROUP_DM:
            (S = p.intl.string(p.t.LO3kaG)), (C = p.intl.string(p.t["s5/5fn"]));
            break;
          case T.d4z.DM:
            (S = p.intl.format(p.t.byjuJi, { name: I })),
              (C = p.intl.format(p.t["eC+9rq"], { name: I }));
            break;
          default:
            (S = p.intl.string(p.t.tbeRRE)), (C = p.intl.string(p.t.OYefmZ));
        }
        return e
          ? (0, i.jsx)(o.MenuItem, {
              id: "unmute-channel",
              label: C,
              subtext: u,
              action: () => h(!1),
            })
          : (0, i.jsx)(o.MenuItem, {
              id: "mute-channel",
              label: S,
              action: () => {
                h(!0),
                  (0, s.s)({
                    channelId: n.id,
                    location: "channel_context_menu",
                  });
              },
              children: N().map((e) => {
                let { value: r, label: u } = e;
                return (0, i.jsx)(
                  o.MenuItem,
                  {
                    id: "".concat(r),
                    label: u,
                    action: () =>
                      (function (e) {
                        n.type === T.d4z.GUILD_CATEGORY && (0, a.c4)(n.id);
                        let i = A(e);
                        d.Z.updateChannelOverrideSettings(
                          n.guild_id,
                          n.id,
                          i,
                          f.ZB.Muted,
                          t,
                        );
                      })(r),
                  },
                  r,
                );
              }),
            });
      }
    },
    117984: function (n, t, e) {
      e.d(t, {
        CM: function () {
          return T;
        },
        UT: function () {
          return _;
        },
        _Z: function () {
          return A;
        },
        kj: function () {
          return E;
        },
        oC: function () {
          return f;
        },
        s3: function () {
          return p;
        },
        uA: function () {
          return N;
        },
        xh: function () {
          return I;
        },
      }),
        e(47120);
      var i = e(524437),
        r = e(675478),
        u = e(592125),
        l = e(496675),
        o = e(709054),
        a = e(853856),
        d = e(231338);
      function s() {
        let n = a.Z.getFavoriteChannels(),
          t = 1;
        for (let e in n) t = Math.max(t, n[e].order);
        return t + 1;
      }
      function c(n) {
        for (let t in n) {
          let e = n[t];
          if (null == e) {
            delete n[t];
            continue;
          }
          if (e.type === i.Dd.CATEGORY) continue;
          let r = u.Z.getChannel(t);
          if (null == r) {
            delete n[t];
            continue;
          }
          if (!r.isPrivate()) {
            if (!l.Z.can(d.Pl.VIEW_CHANNEL, r)) {
              delete n[t];
              continue;
            }
          }
        }
      }
      function E(n, t) {
        if (!a.Z.isFavorite(n))
          r.hW.updateAsync(
            "favorites",
            (e) => {
              (e.favoriteChannels[n] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: s(),
                parentId: null != t ? t : "0",
              })),
                c(e.favoriteChannels);
            },
            r.fy.FREQUENT_USER_ACTION,
          );
      }
      function f(n) {
        let t = a.Z.getFavorite(n);
        if (null != t)
          r.hW.updateAsync(
            "favorites",
            (e) => {
              if ((delete e.favoriteChannels[n], t.type === i.Dd.CATEGORY))
                for (let t in e.favoriteChannels)
                  e.favoriteChannels[t].parentId === n &&
                    (e.favoriteChannels[t].parentId = "0");
              c(e.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function _(n, t) {
        if (!!a.Z.isFavorite(n))
          r.hW.updateAsync(
            "favorites",
            (e) => {
              e.favoriteChannels[n].nickname = null != t ? t : "";
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function T(n) {
        let t = o.default.fromTimestamp(Date.now());
        r.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[t] = i.aV.create({
              nickname: n,
              type: i.Dd.CATEGORY,
              position: s(),
              parentId: "0",
            });
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function I(n) {
        f(n);
      }
      function p(n) {
        r.hW.updateAsync(
          "favorites",
          (t) => {
            for (let i of n)
              if (
                (null != i.position &&
                  (t.favoriteChannels[i.id].position = i.position),
                void 0 !== i.parent_id)
              ) {
                var e;
                t.favoriteChannels[i.id].parentId =
                  null !== (e = i.parent_id) && void 0 !== e ? e : "0";
              }
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function N(n, t) {
        r.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[n].parentId = null != t ? t : "0";
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function A() {
        r.hW.updateAsync(
          "favorites",
          (n) => {
            n.muted = !n.muted;
          },
          r.fy.INFREQUENT_USER_ACTION,
        );
      }
    },
    593214: function (n, t, e) {
      e.d(t, {
        Mt: function () {
          return T;
        },
        li: function () {
          return E;
        },
        s4: function () {
          return f;
        },
        up: function () {
          return I;
        },
        zv: function () {
          return _;
        },
      }),
        e(47120),
        e(653041);
      var i = e(192379),
        r = e(106351),
        u = e(442837);
      e(592125);
      var l = e(984933),
        o = e(914010);
      e(709054);
      var a = e(853856),
        d = e(362658),
        s = e(434065),
        c = e(981631);
      function E(n) {
        let { favoritesEnabled: t, hasStaffPrivileges: e } = (0, d.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, u.e7)([a.Z], () => a.Z.isFavorite(n.id)),
          r = n.isDM() || n.isThread();
        return t && !__OVERLAY__ && !i && (!r || e);
      }
      function f(n) {
        return (0, u.e7)([a.Z], () => a.Z.getFavorite(n));
      }
      function _() {
        return (0, u.e7)([l.ZP], () => l.ZP.getChannels(c.I_8))[
          r.d.GUILD_CATEGORY
        ].map((n) => ({
          id: "null" === n.channel.id ? null : n.channel.id,
          name: n.channel.name,
        }));
      }
      function T() {
        return (0, u.e7)([o.Z], () => o.Z.getGuildId()) === c.I_8;
      }
      function I() {
        let { isFavoritesPerk: n } = (0, d.z)("useFavoriteAdded"),
          t = (0, s.r)(),
          e = i.useCallback(() => {
            n && t.notifyFavoriteAdded();
          }, [t, n]),
          r = i.useCallback(() => {
            n && t.clearFavoriteAdded();
          }, [t, n]);
        return {
          favoriteAdded: t.favoriteAdded,
          notifyFavoriteAdded: e,
          clearFavoriteAdded: r,
        };
      }
    },
    434065: function (n, t, e) {
      e.d(t, {
        r: function () {
          return u;
        },
      });
      var i = e(903797),
        r = e(731965);
      let u = (0, i.Z)((n) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, r.j)(() => n({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, r.j)(() => n({ favoriteAdded: !1 })),
      }));
    },
    276022: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return T;
        },
      }),
        e(653041);
      var i = e(200651),
        r = e(192379),
        u = e(442837),
        l = e(481060),
        o = e(139387),
        a = e(230711),
        d = e(213459),
        s = e(434404),
        c = e(430824),
        E = e(496675),
        f = e(981631),
        _ = e(388032);
      function T(n) {
        let { user: t, guildId: e, channel: T, context: I } = n,
          p = c.Z.getGuild(e),
          N = (0, u.e7)([E.Z], () =>
            null != p ? E.Z.can(f.Plq.MANAGE_GUILD, p) : null,
          ),
          A = (0, d.em)(T, !0, !0),
          h = (0, d.PL)(!0, !0),
          { isUserApp: S, isGuildApp: C } = r.useMemo(() => {
            var n, e, i, r;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let u = Object.values(
                null !==
                  (i =
                    null === (n = A.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== i
                  ? i
                  : {},
              ),
              l = Object.values(
                null !==
                  (r =
                    null === (e = h.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== r
                  ? r
                  : {},
              );
            return {
              isGuildApp: u.some((n) => {
                var e;
                return (
                  (null === (e = n.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === (null == t ? void 0 : t.id)
                );
              }),
              isUserApp: l.some((n) => {
                var e;
                return (
                  (null === (e = n.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === (null == t ? void 0 : t.id)
                );
              }),
            };
          }, [A, h, null == t ? void 0 : t.id]),
          m = r.useCallback(() => {
            if ((null == p ? void 0 : p.id) != null)
              s.Z.open(p.id, f.pNK.INTEGRATIONS),
                o.Z.setSection(f.b4C.APPLICATION, null == t ? void 0 : t.id);
          }, [null == t ? void 0 : t.id, null == p ? void 0 : p.id]),
          O = r.useCallback(() => {
            a.Z.open(f.oAB.AUTHORIZED_APPS);
          }, []),
          v = I === f.IlC.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !N || v || (!C && !S)) return null;
        let g = [];
        return (
          C &&
            g.push(
              (0, i.jsx)(
                l.MenuItem,
                {
                  id: "manage-integration",
                  label: _.intl.string(_.t["aw+qtb"]),
                  action: m,
                },
                "manage-integration",
              ),
            ),
          S &&
            g.push(
              (0, i.jsx)(
                l.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: _.intl.string(_.t.ALLIgY),
                  action: O,
                },
                "manage-authorized-app",
              ),
            ),
          g
        );
      }
    },
    523361: function (n, t, e) {
      e.d(t, {
        HG: function () {
          return o;
        },
        Md: function () {
          return l;
        },
        Q8: function () {
          return u;
        },
      });
      var i = e(373228),
        r = e(388032);
      let u = () => [r.intl.string(r.t.b6wEe3), r.intl.string(r.t.i8o9hY)],
        l = () => [r.intl.string(r.t.vqnToa), r.intl.string(r.t["9yh+dH"])],
        o = [
          {
            id: "781323471249604648",
            format_type: i.u3.APNG,
            description: "Cheerful Choco jumps out of gift box",
            name: "Surprise",
          },
          {
            id: "781324642736144424",
            format_type: i.u3.APNG,
            description: "Cheerful Choco preens against window",
            name: "Affection",
          },
          {
            id: "781323769960202280",
            format_type: i.u3.APNG,
            description: "Cheerful Choco sparkles",
            name: "OMG",
          },
          {
            id: "781324722394103808",
            format_type: i.u3.APNG,
            description: "Cheerful Choco cheers",
            name: "Cheer",
          },
          {
            id: "813951723822645278",
            format_type: i.u3.APNG,
            description: "Cheerful Choco gives thumbs up",
            name: "Nice",
          },
        ];
    },
    35125: function (n, t, e) {
      e.d(t, {
        PA: function () {
          return s;
        },
        Tn: function () {
          return d;
        },
        _i: function () {
          return I;
        },
        eI: function () {
          return _;
        },
        vp: function () {
          return f;
        },
        y8: function () {
          return T;
        },
      });
      var i = e(367907),
        r = e(200876),
        u = e(430824),
        l = e(594174);
      e(709054), e(523361);
      var o = e(981631),
        a = e(388032);
      function d(n) {
        let {
            username: t,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: u,
          } = n,
          { content: l, formatParams: o } = E({
            username: t,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: u,
          });
        return a.intl.format(l, o);
      }
      function s(n) {
        let {
            username: t,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: u,
          } = n,
          { content: l, formatParams: o } = E({
            username: t,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: u,
          });
        return a.intl.formatToParts(l, o);
      }
      function c(n, t) {
        var e, i;
        let r = u.Z.getGuild(n),
          l =
            null !== (e = null == t ? void 0 : t.total_months_subscribed) &&
            void 0 !== e
              ? e
              : 0;
        return {
          guild: r,
          totalMonthsSubscribed: l,
          showWithDuration: l > 0,
          isRenewal:
            null !== (i = null == t ? void 0 : t.is_renewal) &&
            void 0 !== i &&
            i,
        };
      }
      function E(n) {
        let t,
          {
            username: e,
            usernameOnClickHandler: i,
            roleSubscriptionOnClickHandler: r,
            guildId: u,
            roleSubscriptionData: l,
          } = n,
          {
            guild: o,
            totalMonthsSubscribed: d,
            showWithDuration: s,
            isRenewal: E,
          } = c(u, l);
        return (
          (t = s ? (E ? a.t.Iy66Mz : a.t.eCgb2d) : E ? a.t.mPTTdn : a.t.mYjFFx),
          {
            content: t,
            formatParams: {
              username: e,
              usernameHook: i,
              guildName: null == o ? void 0 : o.name,
              handleGuildNameClick: r,
              tierName: null == l ? void 0 : l.tier_name,
              months: d,
            },
          }
        );
      }
      function f(n) {
        let t,
          {
            username: e,
            usernameOnClickHandler: i = o.dG4,
            roleSubscriptionOnClickHandler: r = o.dG4,
            guildId: u,
            roleSubscriptionData: l,
          } = n,
          {
            guild: d,
            totalMonthsSubscribed: s,
            showWithDuration: E,
            isRenewal: f,
          } = c(u, l),
          _ = {
            guildName: null == d ? void 0 : d.name,
            tierName: null == l ? void 0 : l.tier_name,
            username: e,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
          };
        return (t = E
          ? f
            ? a.intl.formatToParts(a.t.OQ0OU1, { ..._, months: s })
            : a.intl.formatToParts(a.t["+N9bxs"], { ..._, months: s })
          : f
            ? a.intl.formatToParts(a.t.OxP1ND, _)
            : a.intl.formatToParts(a.t["6Z1E+/"], _));
      }
      function _(n) {
        return (0, r.l)(n);
      }
      function T(n, t, e, r) {
        var u;
        i.ZP.trackWithMetadata(
          o.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: n,
            user_id:
              null === (u = l.default.getCurrentUser()) || void 0 === u
                ? void 0
                : u.id,
            channel_id: t,
            message_id: e,
            role_subscription_listing_id: r,
          },
        );
      }
      function I(n, t) {
        var e;
        return {
          guild_id: n.guild_id,
          sender:
            null === (e = l.default.getCurrentUser()) || void 0 === e
              ? void 0
              : e.id,
          target_user: t.author.id,
          channel_id: n.id,
          message_id: t.id,
        };
      }
    },
    821864: function (n, t, e) {
      e.d(t, {
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
          return f;
        },
        W4: function () {
          return d;
        },
        gq: function () {
          return c;
        },
        kZ: function () {
          return a;
        },
      });
      var i = e(544891),
        r = e(570140),
        u = e(555573),
        l = e(581364),
        o = e(981631);
      function a() {
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
        let u = [];
        try {
          let r = await i.tn.get(
            o.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(n, t, e),
          );
          r.ok && (u = r.body.permissions);
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
          permissions: u,
        });
      }
      function E(n) {
        r.Z.dispatch({
          applicationId: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_INIT",
        });
      }
      function f(n) {
        r.Z.dispatch({
          commandId: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_RESET",
        });
      }
      async function _(n) {
        let {
            applicationId: t,
            commandId: e,
            defaultEveryoneValue: i,
            defaultEverywhereValue: o,
            guildId: a,
            permissions: d,
          } = n,
          s =
            e === t
              ? (function (n, t, e, i) {
                  if (!e || !i) return t;
                  let r = { [n]: e, [(0, l.bD)(n)]: i };
                  return t.filter((n) => {
                    let t = r[n.id];
                    return null == t || n.permission !== t;
                  });
                })(a, d, i, o)
              : d,
          c = await u.dh(t, a, e, s);
        c.ok &&
          r.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: e,
            guildId: a,
            permissions: c.body.permissions,
          });
      }
    },
    978983: function (n, t, e) {
      var i = e(200651);
      e(192379);
      var r = e(481060),
        u = e(53304);
      t.Z = () =>
        (0, i.jsx)("div", {
          className: u.loadingWrapper,
          children: (0, i.jsx)(r.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    823162: function (n, t, e) {
      e.d(t, {
        Xy: function () {
          return s;
        },
        e4: function () {
          return a;
        },
        gN: function () {
          return c;
        },
        hi: function () {
          return f;
        },
        qR: function () {
          return d;
        },
        r_: function () {
          return E;
        },
      });
      var i = e(544891),
        r = e(570140),
        u = e(893776),
        l = e(290323),
        o = e(981631);
      async function a(n) {
        await i.tn.put({
          url: o.ANM.CHANNEL_RECIPIENT_ME(n),
          body: { consent_status: l.h.ACCEPTED },
        }),
          r.Z.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: n,
          });
      }
      function d(n) {
        return i.tn.put({
          url: o.ANM.CHANNEL_RECIPIENT_ME(n),
          body: { consent_status: l.h.UNSPECIFIED },
        });
      }
      function s(n) {
        return i.tn.put({
          url: o.ANM.CHANNEL_RECIPIENT_ME(n),
          body: { consent_status: l.h.PENDING },
        });
      }
      function c(n) {
        return i.tn.del({ url: o.ANM.CHANNEL_RECIPIENT_ME(n) });
      }
      function E(n) {
        return i.tn.put({
          url: o.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: n },
        });
      }
      function f() {
        u.Z.getLocationMetadata();
      }
    },
    290323: function (n, t, e) {
      var i, r;
      e.d(t, {
        h: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.PENDING = 1)] = "PENDING"),
        (r[(r.ACCEPTED = 2)] = "ACCEPTED"),
        (r[(r.REJECTED = 3)] = "REJECTED");
    },
    759198: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(120356),
        u = e.n(r),
        l = e(481060),
        o = e(507815);
      function a(n) {
        let { className: t, color: e, ...r } = n;
        return (0, i.jsx)(l.Text, {
          className: u()({ [o.text]: null == e }, t),
          color: e,
          ...r,
        });
      }
    },
    977059: function (n, t, e) {
      e.d(t, {
        R: function () {
          return u;
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
      function u(n) {
        let { location: t } = n;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    441894: function (n, t, e) {
      e.d(t, {
        J: function () {
          return a;
        },
      }),
        e(47120);
      var i = e(442837),
        r = e(592125),
        u = e(19780),
        l = e(977059),
        o = e(760373);
      function a(n) {
        let { channelId: t, location: e } = n,
          { enabled: a } = (0, l.S)({ location: e });
        return (0, i.e7)(
          [u.Z, r.Z],
          () =>
            (function (n, t) {
              var e;
              let [i, l] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [u.Z, r.Z];
              if (!t || null == n || i.getChannelId() !== n) return !1;
              let a = l.getChannel(n);
              if (null == a || a.isGuildStageVoice()) return !1;
              let d =
                null === (e = i.getSecureFramesState()) || void 0 === e
                  ? void 0
                  : e.version;
              return null != d && d !== o.Eg;
            })(t, a, [u.Z, r.Z]),
          [t, a],
        );
      }
    },
    897769: function (n, t, e) {
      e.d(t, {
        S: function () {
          return u;
        },
      });
      var i = e(442837),
        r = e(359119);
      function u(n, t) {
        return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(n), [n])
          .filter((n) => n.type === t)
          .find((n) => null == n.dismiss_timestamp);
      }
    },
    981312: function (n, t, e) {
      e.d(t, {
        U: function () {
          return u;
        },
      });
      var i = e(442837),
        r = e(594174);
      function u() {
        return (
          !1 ===
          (0, i.e7)([r.default], () => {
            var n;
            return null === (n = r.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.nsfwAllowed;
          })
        );
      }
    },
    13279: function (n, t, e) {
      e.d(t, {
        z: function () {
          return a;
        },
      });
      var i = e(359119),
        r = e(897769),
        u = e(237292),
        l = e(403485),
        o = e(604849);
      function a(n, t) {
        let e = (0, u.y0)({ location: t }),
          a = (0, o.c)(),
          d = (0, l.h)(n),
          s = (0, r.S)(n, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
        if (
          !(
            !e ||
            !a ||
            0 === d.length ||
            d.some(
              (n) =>
                n.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                (n.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2 &&
                  null != n.dismiss_timestamp),
            )
          )
        )
          return s;
      }
    },
    403485: function (n, t, e) {
      e.d(t, {
        h: function () {
          return u;
        },
      });
      var i = e(442837),
        r = e(359119);
      function u(n) {
        return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(n), [
          n,
        ]).filter(
          (n) =>
            n.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
            n.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        );
      }
    },
    604849: function (n, t, e) {
      e.d(t, {
        c: function () {
          return l;
        },
      });
      var i = e(442837),
        r = e(581883),
        u = e(981312);
      let l = () => {
        let n = (0, i.e7)([r.Z], () => {
          var n, t, e;
          return (
            null ===
              (e =
                null === (t = r.Z.settings.privacy) || void 0 === t
                  ? void 0
                  : null === (n = t.inappropriateConversationWarnings) ||
                      void 0 === n
                    ? void 0
                    : n.value) ||
            void 0 === e ||
            e
          );
        });
        return (0, u.U)() && n;
      };
    },
    305587: function (n, t, e) {
      e.d(t, {
        Xs: function () {
          return r;
        },
      });
      let i = (0, e(818083).B)({
        kind: "user",
        id: "2024-09_dm_mute_feedback",
        label: "DM Mute Feedback Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable DM Mute Feedback Survey",
            config: { enabled: !0 },
          },
        ],
      });
      function r(n) {
        let { enabled: t } = i.getCurrentConfig(
          { location: n },
          { autoTrackExposure: !0 },
        );
        return t;
      }
    },
    496729: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
        s: function () {
          return s;
        },
      });
      var i = e(200651),
        r = e(704215),
        u = e(481060),
        l = e(570140),
        o = e(605236),
        a = e(592125),
        d = e(305587);
      function s(n) {
        let { channelId: t, location: e } = n,
          i = a.Z.getChannel(t),
          u = (0, o.un)(r.z.USER_DM_MUTE_FEEDBACK);
        if (null != i && !!i.isDM() && !u)
          (0, d.Xs)(e) &&
            l.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: i });
      }
      function c() {
        (0, u.openModalLazy)(async () => {
          let { default: n } = await e.e("87995").then(e.bind(e, 180970));
          return (t) => (0, i.jsx)(n, { ...t });
        });
      }
    },
    471253: function (n, t, e) {
      e.d(t, {
        DT: function () {
          return C;
        },
        Ef: function () {
          return g;
        },
        HO: function () {
          return v;
        },
        NZ: function () {
          return R;
        },
        Pq: function () {
          return O;
        },
        Q1: function () {
          return N;
        },
        RK: function () {
          return h;
        },
        _0: function () {
          return A;
        },
        hz: function () {
          return m;
        },
        yi: function () {
          return S;
        },
      });
      var i = e(512722),
        r = e.n(i),
        u = e(149765),
        l = e(544891),
        o = e(493683);
      e(749210);
      var a = e(911969),
        d = e(367907),
        s = e(944486),
        c = e(979651),
        E = e(700785),
        f = e(922482),
        _ = e(192079),
        T = e(706058),
        I = e(590415),
        p = e(981631);
      function N(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          t && (0, d.yw)(p.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, _.s$)(n) }),
          l.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(e),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: n.id,
            },
          })
        );
      }
      function A(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          l.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(e, t),
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
        let u = c.Z.getVoiceStateForChannel(n.id);
        return (
          (0, I.gf)(u) === I.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, d.yw)(p.rMx.PROMOTED_TO_SPEAKER, { ...(0, _.s$)(n) }),
          l.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(e ? { silent: e } : {}),
            },
          })
        );
      }
      function S(n) {
        let t = null == n ? void 0 : n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          l.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function C(n, t, e) {
        let i = n.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          l.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(i, t),
            body: { suppress: e, channel_id: n.id },
          })
        );
      }
      function m(n, t) {
        if (null == t || null == n) return;
        let e = t.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          C(t, n.id, !0),
          l.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(e, n.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function O(n, t, e) {
        let i = n.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let l = n.permissionOverwrites[i],
          d = { id: i, type: a.BN.ROLE, allow: E.Hn, deny: E.Hn, ...l };
        e
          ? ((d.allow = u.IH(d.allow, t)), (d.deny = u.Od(d.deny, t)))
          : ((d.allow = u.Od(d.allow, t)), (d.deny = u.IH(d.deny, t))),
          o.Z.updatePermissionOverwrite(n.id, d);
      }
      async function v(n, t, e, i) {
        if ("" === t) return;
        s.Z.getVoiceChannelId() !== n.id && (0, f.TM)(n);
        let r = await (0, T.me)(n.id, t, e, i);
        return h(n, !1, !0), r;
      }
      async function g(n, t, e) {
        if ("" !== t) return await (0, T.Dk)(n.id, t, e);
      }
      async function R(n) {
        await (0, T.Ix)(n.id);
      }
    },
    192079: function (n, t, e) {
      e.d(t, {
        ER: function () {
          return c;
        },
        kk: function () {
          return E;
        },
        s$: function () {
          return f;
        },
      }),
        e(724458),
        e(47120),
        e(392711);
      var i = e(19780),
        r = e(5192),
        u = e(700785),
        l = e(427679),
        o = e(157925),
        a = e(981631),
        d = e(71080),
        s = e(388032);
      function c(n, t, e, i) {
        let u = t[0],
          l = r.ZP.getName(n, e, u),
          o = null != i ? i : t.length;
        return 1 === o && null != u
          ? l
          : null == u
            ? s.intl.formatToPlainString(s.t.chmM9P, { count: o })
            : s.intl.formatToPlainString(s.t.GhkJ29, { name: l, count: o - 1 });
      }
      function E(n, t) {
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
      function f(n) {
        let t = l.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: u.Uu(a.Plq.REQUEST_TO_SPEAK, n)
            ? o.BM.EVERYONE
            : o.BM.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    706058: function (n, t, e) {
      e.d(t, {
        Dk: function () {
          return l;
        },
        Ix: function () {
          return o;
        },
        me: function () {
          return u;
        },
      });
      var i = e(544891),
        r = e(981631);
      async function u(n, t, e, u, l) {
        return (
          await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: t,
              privacy_level: e,
              guild_scheduled_event_id: l,
              send_start_notification: u,
            },
          })
        ).body;
      }
      async function l(n, t, e) {
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
          return l;
        },
      });
      var i = e(442837),
        r = e(592125),
        u = e(944486);
      function l() {
        return (0, i.e7)([u.Z, r.Z], () => {
          let n = u.Z.getVoiceChannelId();
          if (null != n) {
            let t = r.Z.getChannel(n);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
          }
          return null;
        });
      }
    },
    570870: function (n, t, e) {
      var i = e(200651),
        r = e(192379),
        u = e(512722),
        l = e.n(u),
        o = e(442837),
        a = e(481060),
        d = e(10718),
        s = e(667204),
        c = e(826298),
        E = e(276022),
        f = e(978983),
        _ = e(430824),
        T = e(594174),
        I = e(981631),
        p = e(689079),
        N = e(388032),
        A = e(62352);
      t.Z = (n) => {
        let t,
          {
            commandType: e,
            commandTargetId: u,
            channel: h,
            guildId: S,
            onHeightUpdate: C,
            context: m,
          } = n,
          O = (0, o.e7)([_.Z], () => _.Z.getGuild(null != S ? S : h.guild_id)),
          v = (0, o.e7)([T.default], () => T.default.getUser(u)),
          g = (0, E.Z)({
            user: v,
            guildId: null == O ? void 0 : O.id,
            channel: h,
            context: m,
          }),
          {
            commands: R,
            sectionDescriptors: y,
            loading: Z,
          } = d.wi({
            channel: h,
            filters: { commandTypes: [e] },
            options: { limit: p.lr },
            allowFetch: !0,
          }),
          { sections: P } = r.useMemo(() => {
            let n = {};
            return (
              y.forEach((t) => {
                n[t.id] = t;
              }),
              { sections: n }
            );
          }, [y]),
          G = r.useRef(Z.current);
        r.useEffect(() => {
          Z.current !== G.current &&
            ((G.current = Z.current), null == C || C());
        }, [Z, C]);
        let M = r.useCallback(
          (n) => {
            l()(null != h, "menu item should not show if channel is null");
            let t = P[n.applicationId],
              e = null != t ? (0, c.ky)(t) : void 0;
            return (0, i.jsx)(
              a.MenuItem,
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
                    context: { channel: h, guild: O },
                    commandTargetId: u,
                  });
                },
              },
              n.id,
            );
          },
          [h, O, u, P],
        );
        if (
          (Z.current
            ? (t = (0, i.jsx)(
                a.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(f.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((t =
                0 === R.length
                  ? (0, i.jsx)(
                      a.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: N.intl.string(N.t.YSNlV1),
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : R.map(M)),
              null != g &&
                (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                    t,
                    (0, i.jsx)(a.MenuSeparator, {}, "separator"),
                    g,
                  ],
                }))),
          !I.TPd.TEXTUAL.has(h.type))
        ) {
          if (null == g) return null;
          t = g;
        }
        return (0, i.jsx)(a.MenuItem, {
          id: "apps",
          label: N.intl.string(N.t.PHjkRE),
          listClassName: A.list,
          children: t,
        });
      };
    },
    53304: function (n, t, e) {
      n.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    100210: function (n, t, e) {
      n.exports = {
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
    507815: function (n, t, e) {
      n.exports = { text: "text_b953a6" };
    },
    62352: function (n, t, e) {
      n.exports = { list: "list_fd4745" };
    },
    201683: function (n, t, e) {
      n.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
  },
]);
//# sourceMappingURL=777fe6bb9d536c5a0616.js.map
