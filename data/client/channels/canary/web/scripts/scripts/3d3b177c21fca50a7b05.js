"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95470"],
  {
    139387: function (t, n, e) {
      var i = e(570140),
        r = e(434404),
        o = e(821864),
        a = e(308063);
      n.Z = {
        init() {
          i.Z.dispatch({ type: "INTEGRATION_SETTINGS_INIT" });
        },
        setSection(t) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_SET_SECTION",
            section: t,
            sectionId: n,
          });
        },
        startEditingCommandPermissions(t) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
            commandId: t,
          });
        },
        stopEditingCommandPermissions(t) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
            commandId: t,
          });
        },
        startEditingIntegration(t) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
            integrationId: t,
          });
        },
        stopEditingIntegration() {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION",
          });
        },
        updateIntegration(t) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
            settings: t,
          });
        },
        startEditingWebhook(t) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
            webhookId: t,
          });
        },
        stopEditingWebhook() {
          i.Z.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK" });
        },
        updateWebhook(t) {
          i.Z.dispatch({
            type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
            settings: t,
          });
        },
        async saveApplicationPermissions(t, n, e) {
          try {
            i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await o.U3({
                applicationId: t,
                commandId: t,
                defaultEveryoneValue: !0,
                defaultEverywhereValue: !0,
                guildId: n,
                permissions: e,
              }),
              i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (t) {
            i.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: t.body,
            });
          }
        },
        async saveIntegration(t, n) {
          try {
            i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await r.Z.updateIntegration(
                t,
                n.id,
                n.expire_behavior,
                n.expire_grace_period,
                n.enable_emoticons,
              ),
              i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (t) {
            i.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: t.body,
            });
          }
        },
        async saveWebhook(t, n) {
          try {
            i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await a.Z.update(t, n.id, n),
              i.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (t) {
            i.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: t.body,
            });
          }
        },
      };
    },
    308063: function (t, n, e) {
      var i = e(392711),
        r = e.n(i),
        o = e(544891),
        a = e(570140),
        u = e(981631);
      let l = ["Spidey Bot", "Captain Hook"];
      n.Z = {
        fetchForGuild(t) {
          a.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: t }),
            o.tn
              .get({ url: u.ANM.GUILD_WEBHOOKS(t), oldFormErrors: !0 })
              .then((n) => {
                let { body: e } = n;
                return a.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: t,
                  webhooks: e,
                });
              })
              .catch((n) => {
                let { body: e } = n;
                a.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: t,
                  error: e.message,
                });
              });
        },
        fetchForChannel(t, n) {
          a.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: t, channelId: n }),
            o.tn
              .get({ url: u.ANM.CHANNEL_WEBHOOKS(n), oldFormErrors: !0 })
              .then((e) => {
                let { body: i } = e;
                return a.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: t,
                  channelId: n,
                  webhooks: i,
                });
              });
        },
        create: (t, n, e) => (
          null == e && (e = l[r().random(0, l.length - 1)]),
          o.tn
            .post({
              url: u.ANM.CHANNEL_WEBHOOKS(n),
              body: { name: e },
              oldFormErrors: !0,
            })
            .then((n) => {
              let { body: e } = n;
              return (
                a.Z.dispatch({
                  type: "WEBHOOK_CREATE",
                  guildId: t,
                  webhook: e,
                }),
                e
              );
            })
        ),
        delete: (t, n) =>
          o.tn.del({ url: u.ANM.WEBHOOK(n), oldFormErrors: !0 }).then(() => {
            a.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: t, webhookId: n });
          }),
        update: (t, n, e) =>
          o.tn
            .patch({ url: u.ANM.WEBHOOK(n), body: e, oldFormErrors: !0 })
            .then((n) => {
              let { body: e } = n;
              return (
                a.Z.dispatch({
                  type: "WEBHOOK_UPDATE",
                  guildId: t,
                  webhook: e,
                }),
                e
              );
            }),
      };
    },
    394059: function (t, n, e) {
      var i, r;
      e.d(n, {
        K: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.STREAM = 0)] = "STREAM"),
        (r[(r.VIDEO = 1)] = "VIDEO");
    },
    27584: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = e(442837),
        r = e(846027),
        o = e(314897),
        a = e(131951),
        u = e(981631),
        l = e(65154);
      function d(t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : l.Yn.DEFAULT,
          e = (0, i.e7)([o.default], () => o.default.getId()),
          d = (0, i.e7)(
            [a.Z],
            () => a.Z.supports(l.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled(),
          ),
          s = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(e, n), [e, n]),
          c = null == t || t === e;
        return [
          c && (d || s),
          s,
          (t) => {
            let i = t ? u.ZUi.DISABLED : u.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(e, i, n);
          },
        ];
      }
    },
    295510: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(153867),
        o = e(468026),
        a = e(394059),
        u = e(388032);
      function l(t) {
        let { type: n, onConfirm: e, ...l } = t,
          d =
            n === a.K.STREAM
              ? u.intl.string(u.t["/lFMWl"])
              : u.intl.string(u.t.xzxhZW),
          s =
            n === a.K.STREAM
              ? u.intl.string(u.t.xaOX7e)
              : u.intl.string(u.t.oU1p9P);
        return (0, i.jsx)(o.default, {
          confirmText: u.intl.string(u.t["cY+Ooa"]),
          secondaryConfirmText: u.intl.string(u.t["JdIQ/f"]),
          title: d,
          cancelText: u.intl.string(u.t["ETE/oK"]),
          onConfirm: e,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              e();
          },
          body: s,
          ...l,
        });
      }
    },
    441061: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        o = e(481060),
        a = e(475179),
        u = e(358221),
        l = e(388032);
      function d(t) {
        let n = (0, r.e7)([u.Z], () => u.Z.getVoiceParticipantsHidden(t));
        return (0, i.jsx)(o.MenuCheckboxItem, {
          id: "no-video-hide",
          label: l.intl.string(l.t.BL8ss7),
          checked: !n,
          action: () => a.Z.toggleVoiceParticipantsHidden(t, !n),
        });
      }
    },
    167675: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return E;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var r = e(442837),
        o = e(481060),
        a = e(740492),
        u = e(27584),
        l = e(295510),
        d = e(394059),
        s = e(65154),
        c = e(388032);
      function E(t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          [e, E, f] = (0, u.Z)(t, n),
          I = (0, r.e7)(
            [a.ZP],
            () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return e
          ? (0, i.jsx)(o.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.intl.string(c.t.MH8ESU),
              checked: !E,
              action: () => {
                if (I || E) return f(!E);
                (0, o.openModal)((t) =>
                  (0, i.jsx)(l.Z, {
                    ...t,
                    type: d.K.VIDEO,
                    onConfirm: () => f(!E),
                  }),
                );
              },
            })
          : null;
      }
    },
    117984: function (t, n, e) {
      e.d(n, {
        CM: function () {
          return T;
        },
        UT: function () {
          return I;
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
          return _;
        },
        uA: function () {
          return N;
        },
        xh: function () {
          return p;
        },
      }),
        e(47120);
      var i = e(524437),
        r = e(675478),
        o = e(592125),
        a = e(496675),
        u = e(709054),
        l = e(853856),
        d = e(231338);
      function s() {
        let t = l.Z.getFavoriteChannels(),
          n = 1;
        for (let e in t) n = Math.max(n, t[e].order);
        return n + 1;
      }
      function c(t) {
        for (let n in t) {
          let e = t[n];
          if (null == e) {
            delete t[n];
            continue;
          }
          if (e.type === i.Dd.CATEGORY) continue;
          let r = o.Z.getChannel(n);
          if (null == r) {
            delete t[n];
            continue;
          }
          if (!r.isPrivate()) {
            if (!a.Z.can(d.Pl.VIEW_CHANNEL, r)) {
              delete t[n];
              continue;
            }
          }
        }
      }
      function E(t, n) {
        if (!l.Z.isFavorite(t))
          r.hW.updateAsync(
            "favorites",
            (e) => {
              (e.favoriteChannels[t] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: s(),
                parentId: null != n ? n : "0",
              })),
                c(e.favoriteChannels);
            },
            r.fy.FREQUENT_USER_ACTION,
          );
      }
      function f(t) {
        let n = l.Z.getFavorite(t);
        if (null != n)
          r.hW.updateAsync(
            "favorites",
            (e) => {
              if ((delete e.favoriteChannels[t], n.type === i.Dd.CATEGORY))
                for (let n in e.favoriteChannels)
                  e.favoriteChannels[n].parentId === t &&
                    (e.favoriteChannels[n].parentId = "0");
              c(e.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function I(t, n) {
        if (!!l.Z.isFavorite(t))
          r.hW.updateAsync(
            "favorites",
            (e) => {
              e.favoriteChannels[t].nickname = null != n ? n : "";
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function T(t) {
        let n = u.default.fromTimestamp(Date.now());
        r.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[n] = i.aV.create({
              nickname: t,
              type: i.Dd.CATEGORY,
              position: s(),
              parentId: "0",
            });
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function p(t) {
        f(t);
      }
      function _(t) {
        r.hW.updateAsync(
          "favorites",
          (n) => {
            for (let i of t)
              if (
                (null != i.position &&
                  (n.favoriteChannels[i.id].position = i.position),
                void 0 !== i.parent_id)
              ) {
                var e;
                n.favoriteChannels[i.id].parentId =
                  null !== (e = i.parent_id) && void 0 !== e ? e : "0";
              }
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function N(t, n) {
        r.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[t].parentId = null != n ? n : "0";
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function A() {
        r.hW.updateAsync(
          "favorites",
          (t) => {
            t.muted = !t.muted;
          },
          r.fy.INFREQUENT_USER_ACTION,
        );
      }
    },
    593214: function (t, n, e) {
      e.d(n, {
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
          return p;
        },
        zv: function () {
          return I;
        },
      }),
        e(47120),
        e(653041);
      var i = e(192379),
        r = e(106351),
        o = e(442837);
      e(592125);
      var a = e(984933),
        u = e(914010);
      e(709054);
      var l = e(853856),
        d = e(362658),
        s = e(434065),
        c = e(981631);
      function E(t) {
        let { favoritesEnabled: n, hasStaffPrivileges: e } = (0, d.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, o.e7)([l.Z], () => l.Z.isFavorite(t.id)),
          r = t.isDM() || t.isThread();
        return n && !__OVERLAY__ && !i && (!r || e);
      }
      function f(t) {
        return (0, o.e7)([l.Z], () => l.Z.getFavorite(t));
      }
      function I() {
        return (0, o.e7)([a.ZP], () => a.ZP.getChannels(c.I_8))[
          r.d.GUILD_CATEGORY
        ].map((t) => ({
          id: "null" === t.channel.id ? null : t.channel.id,
          name: t.channel.name,
        }));
      }
      function T() {
        return (0, o.e7)([u.Z], () => u.Z.getGuildId()) === c.I_8;
      }
      function p() {
        let { isFavoritesPerk: t } = (0, d.z)("useFavoriteAdded"),
          n = (0, s.r)(),
          e = i.useCallback(() => {
            t && n.notifyFavoriteAdded();
          }, [n, t]),
          r = i.useCallback(() => {
            t && n.clearFavoriteAdded();
          }, [n, t]);
        return {
          favoriteAdded: n.favoriteAdded,
          notifyFavoriteAdded: e,
          clearFavoriteAdded: r,
        };
      }
    },
    434065: function (t, n, e) {
      e.d(n, {
        r: function () {
          return o;
        },
      });
      var i = e(903797),
        r = e(731965);
      let o = (0, i.Z)((t) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, r.j)(() => t({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, r.j)(() => t({ favoriteAdded: !1 })),
      }));
    },
    276022: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return T;
        },
      }),
        e(653041);
      var i = e(200651),
        r = e(192379),
        o = e(442837),
        a = e(481060),
        u = e(139387),
        l = e(230711),
        d = e(213459),
        s = e(434404),
        c = e(430824),
        E = e(496675),
        f = e(981631),
        I = e(388032);
      function T(t) {
        let { user: n, guildId: e, channel: T, context: p } = t,
          _ = c.Z.getGuild(e),
          N = (0, o.e7)([E.Z], () =>
            null != _ ? E.Z.can(f.Plq.MANAGE_GUILD, _) : null,
          ),
          A = (0, d.em)(T, !0, !0),
          S = (0, d.PL)(!0, !0),
          { isUserApp: h, isGuildApp: C } = r.useMemo(() => {
            var t, e, i, r;
            if ((null == n ? void 0 : n.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let o = Object.values(
                null !==
                  (i =
                    null === (t = A.result) || void 0 === t
                      ? void 0
                      : t.sections) && void 0 !== i
                  ? i
                  : {},
              ),
              a = Object.values(
                null !==
                  (r =
                    null === (e = S.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== r
                  ? r
                  : {},
              );
            return {
              isGuildApp: o.some((t) => {
                var e;
                return (
                  (null === (e = t.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === (null == n ? void 0 : n.id)
                );
              }),
              isUserApp: a.some((t) => {
                var e;
                return (
                  (null === (e = t.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === (null == n ? void 0 : n.id)
                );
              }),
            };
          }, [A, S, null == n ? void 0 : n.id]),
          v = r.useCallback(() => {
            if ((null == _ ? void 0 : _.id) != null)
              s.Z.open(_.id, f.pNK.INTEGRATIONS),
                u.Z.setSection(f.b4C.APPLICATION, null == n ? void 0 : n.id);
          }, [null == n ? void 0 : n.id, null == _ ? void 0 : _.id]),
          m = r.useCallback(() => {
            l.Z.open(f.oAB.AUTHORIZED_APPS);
          }, []),
          O = p === f.IlC.POPOUT;
        if (!(null == n ? void 0 : n.bot) || !N || O || (!C && !h)) return null;
        let R = [];
        return (
          C &&
            R.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-integration",
                  label: I.intl.string(I.t["aw+qtb"]),
                  action: v,
                },
                "manage-integration",
              ),
            ),
          h &&
            R.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: I.intl.string(I.t.ALLIgY),
                  action: m,
                },
                "manage-authorized-app",
              ),
            ),
          R
        );
      }
    },
    523361: function (t, n, e) {
      e.d(n, {
        HG: function () {
          return u;
        },
        Md: function () {
          return a;
        },
        Q8: function () {
          return o;
        },
      });
      var i = e(373228),
        r = e(388032);
      let o = () => [r.intl.string(r.t.b6wEe3), r.intl.string(r.t.i8o9hY)],
        a = () => [r.intl.string(r.t.vqnToa), r.intl.string(r.t["9yh+dH"])],
        u = [
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
    35125: function (t, n, e) {
      e.d(n, {
        PA: function () {
          return s;
        },
        Tn: function () {
          return d;
        },
        _i: function () {
          return p;
        },
        eI: function () {
          return I;
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
        o = e(430824),
        a = e(594174);
      e(709054), e(523361);
      var u = e(981631),
        l = e(388032);
      function d(t) {
        let {
            username: n,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: o,
          } = t,
          { content: a, formatParams: u } = E({
            username: n,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: o,
          });
        return l.intl.format(a, u);
      }
      function s(t) {
        let {
            username: n,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: o,
          } = t,
          { content: a, formatParams: u } = E({
            username: n,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: o,
          });
        return l.intl.formatToParts(a, u);
      }
      function c(t, n) {
        var e, i;
        let r = o.Z.getGuild(t),
          a =
            null !== (e = null == n ? void 0 : n.total_months_subscribed) &&
            void 0 !== e
              ? e
              : 0;
        return {
          guild: r,
          totalMonthsSubscribed: a,
          showWithDuration: a > 0,
          isRenewal:
            null !== (i = null == n ? void 0 : n.is_renewal) &&
            void 0 !== i &&
            i,
        };
      }
      function E(t) {
        let n,
          {
            username: e,
            usernameOnClickHandler: i,
            roleSubscriptionOnClickHandler: r,
            guildId: o,
            roleSubscriptionData: a,
          } = t,
          {
            guild: u,
            totalMonthsSubscribed: d,
            showWithDuration: s,
            isRenewal: E,
          } = c(o, a);
        return (
          (n = s ? (E ? l.t.Iy66Mz : l.t.eCgb2d) : E ? l.t.mPTTdn : l.t.mYjFFx),
          {
            content: n,
            formatParams: {
              username: e,
              usernameHook: i,
              guildName: null == u ? void 0 : u.name,
              handleGuildNameClick: r,
              tierName: null == a ? void 0 : a.tier_name,
              months: d,
            },
          }
        );
      }
      function f(t) {
        let n,
          {
            username: e,
            usernameOnClickHandler: i = u.dG4,
            roleSubscriptionOnClickHandler: r = u.dG4,
            guildId: o,
            roleSubscriptionData: a,
          } = t,
          {
            guild: d,
            totalMonthsSubscribed: s,
            showWithDuration: E,
            isRenewal: f,
          } = c(o, a),
          I = {
            guildName: null == d ? void 0 : d.name,
            tierName: null == a ? void 0 : a.tier_name,
            username: e,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
          };
        return (n = E
          ? f
            ? l.intl.formatToParts(l.t.OQ0OU1, { ...I, months: s })
            : l.intl.formatToParts(l.t["+N9bxs"], { ...I, months: s })
          : f
            ? l.intl.formatToParts(l.t.OxP1ND, I)
            : l.intl.formatToParts(l.t["6Z1E+/"], I));
      }
      function I(t) {
        return (0, r.l)(t);
      }
      function T(t, n, e, r) {
        var o;
        i.ZP.trackWithMetadata(
          u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: t,
            user_id:
              null === (o = a.default.getCurrentUser()) || void 0 === o
                ? void 0
                : o.id,
            channel_id: n,
            message_id: e,
            role_subscription_listing_id: r,
          },
        );
      }
      function p(t, n) {
        var e;
        return {
          guild_id: t.guild_id,
          sender:
            null === (e = a.default.getCurrentUser()) || void 0 === e
              ? void 0
              : e.id,
          target_user: n.author.id,
          channel_id: t.id,
          message_id: n.id,
        };
      }
    },
    821864: function (t, n, e) {
      e.d(n, {
        I4: function () {
          return E;
        },
        Sn: function () {
          return s;
        },
        U3: function () {
          return I;
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
          return l;
        },
      });
      var i = e(544891),
        r = e(570140),
        o = e(555573),
        a = e(581364),
        u = e(981631);
      function l() {
        r.Z.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function d(t, n, e) {
        r.Z.dispatch({
          applicationId: t,
          commandId: n,
          permissions: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function s(t, n) {
        i.tn.get(u.ANM.GUILD_COMMANDS_FOR_APPLICATION(t, n)).then(
          (e) => {
            r.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
              applicationId: n,
              commands: e.body.application_commands,
              guildId: t,
              permissions: e.body.permissions,
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
      async function c(t, n, e) {
        let o = [];
        try {
          let r = await i.tn.get(
            u.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(t, n, e),
          );
          r.ok && (o = r.body.permissions);
        } catch (i) {
          if (404 !== i.status) {
            r.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
              applicationId: t,
              commandId: e,
              guildId: n,
            });
            return;
          }
        }
        r.Z.dispatch({
          type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
          applicationId: t,
          commandId: e,
          guildId: n,
          permissions: o,
        });
      }
      function E(t) {
        r.Z.dispatch({
          applicationId: t,
          type: "INTEGRATION_PERMISSION_SETTINGS_INIT",
        });
      }
      function f(t) {
        r.Z.dispatch({
          commandId: t,
          type: "INTEGRATION_PERMISSION_SETTINGS_RESET",
        });
      }
      async function I(t) {
        let {
            applicationId: n,
            commandId: e,
            defaultEveryoneValue: i,
            defaultEverywhereValue: u,
            guildId: l,
            permissions: d,
          } = t,
          s =
            e === n
              ? (function (t, n, e, i) {
                  if (!e || !i) return n;
                  let r = { [t]: e, [(0, a.bD)(t)]: i };
                  return n.filter((t) => {
                    let n = r[t.id];
                    return null == n || t.permission !== n;
                  });
                })(l, d, i, u)
              : d,
          c = await o.dh(n, l, e, s);
        c.ok &&
          r.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: n,
            commandId: e,
            guildId: l,
            permissions: c.body.permissions,
          });
      }
    },
    978983: function (t, n, e) {
      var i = e(200651);
      e(192379);
      var r = e(481060),
        o = e(53304);
      n.Z = () =>
        (0, i.jsx)("div", {
          className: o.loadingWrapper,
          children: (0, i.jsx)(r.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    823162: function (t, n, e) {
      e.d(n, {
        Xy: function () {
          return s;
        },
        e4: function () {
          return l;
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
        o = e(893776),
        a = e(290323),
        u = e(981631);
      async function l(t) {
        await i.tn.put({
          url: u.ANM.CHANNEL_RECIPIENT_ME(t),
          body: { consent_status: a.h.ACCEPTED },
        }),
          r.Z.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: t,
          });
      }
      function d(t) {
        return i.tn.put({
          url: u.ANM.CHANNEL_RECIPIENT_ME(t),
          body: { consent_status: a.h.UNSPECIFIED },
        });
      }
      function s(t) {
        return i.tn.put({
          url: u.ANM.CHANNEL_RECIPIENT_ME(t),
          body: { consent_status: a.h.PENDING },
        });
      }
      function c(t) {
        return i.tn.del({ url: u.ANM.CHANNEL_RECIPIENT_ME(t) });
      }
      function E(t) {
        return i.tn.put({
          url: u.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: t },
        });
      }
      function f() {
        o.Z.getLocationMetadata();
      }
    },
    290323: function (t, n, e) {
      var i, r;
      e.d(n, {
        h: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.PENDING = 1)] = "PENDING"),
        (r[(r.ACCEPTED = 2)] = "ACCEPTED"),
        (r[(r.REJECTED = 3)] = "REJECTED");
    },
    977059: function (t, n, e) {
      e.d(n, {
        R: function () {
          return o;
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
      function r(t) {
        let { location: n } = t;
        return i.useExperiment({ location: n }, { autoTrackExposure: !0 });
      }
      function o(t) {
        let { location: n } = t;
        return i.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
      }
    },
    441894: function (t, n, e) {
      e.d(n, {
        J: function () {
          return l;
        },
      }),
        e(47120);
      var i = e(442837),
        r = e(592125),
        o = e(19780),
        a = e(977059),
        u = e(760373);
      function l(t) {
        let { channelId: n, location: e } = t,
          { enabled: l } = (0, a.S)({ location: e });
        return (0, i.e7)(
          [o.Z, r.Z],
          () =>
            (function (t, n) {
              var e;
              let [i, a] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [o.Z, r.Z];
              if (!n || null == t || i.getChannelId() !== t) return !1;
              let l = a.getChannel(t);
              if (null == l || l.isGuildStageVoice()) return !1;
              let d =
                null === (e = i.getSecureFramesState()) || void 0 === e
                  ? void 0
                  : e.version;
              return null != d && d !== u.Eg;
            })(n, l, [o.Z, r.Z]),
          [n, l],
        );
      }
    },
    897769: function (t, n, e) {
      e.d(n, {
        S: function () {
          return o;
        },
      });
      var i = e(442837),
        r = e(359119);
      function o(t, n) {
        return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(t), [t])
          .filter((t) => t.type === n)
          .find((t) => null == t.dismiss_timestamp);
      }
    },
    981312: function (t, n, e) {
      e.d(n, {
        U: function () {
          return o;
        },
      });
      var i = e(442837),
        r = e(594174);
      function o() {
        return (
          !1 ===
          (0, i.e7)([r.default], () => {
            var t;
            return null === (t = r.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.nsfwAllowed;
          })
        );
      }
    },
    13279: function (t, n, e) {
      e.d(n, {
        z: function () {
          return l;
        },
      });
      var i = e(359119),
        r = e(897769),
        o = e(237292),
        a = e(403485),
        u = e(604849);
      function l(t, n) {
        let e = (0, o.y0)({ location: n }),
          l = (0, u.c)(),
          d = (0, a.h)(t),
          s = (0, r.S)(t, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
        if (
          !(
            !e ||
            !l ||
            0 === d.length ||
            d.some(
              (t) =>
                t.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                (t.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2 &&
                  null != t.dismiss_timestamp),
            )
          )
        )
          return s;
      }
    },
    403485: function (t, n, e) {
      e.d(n, {
        h: function () {
          return o;
        },
      });
      var i = e(442837),
        r = e(359119);
      function o(t) {
        return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(t), [
          t,
        ]).filter(
          (t) =>
            t.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
            t.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        );
      }
    },
    604849: function (t, n, e) {
      e.d(n, {
        c: function () {
          return a;
        },
      });
      var i = e(442837),
        r = e(581883),
        o = e(981312);
      let a = () => {
        let t = (0, i.e7)([r.Z], () => {
          var t, n, e;
          return (
            null ===
              (e =
                null === (n = r.Z.settings.privacy) || void 0 === n
                  ? void 0
                  : null === (t = n.inappropriateConversationWarnings) ||
                      void 0 === t
                    ? void 0
                    : t.value) ||
            void 0 === e ||
            e
          );
        });
        return (0, o.U)() && t;
      };
    },
    570870: function (t, n, e) {
      var i = e(200651),
        r = e(192379),
        o = e(512722),
        a = e.n(o),
        u = e(442837),
        l = e(481060),
        d = e(10718),
        s = e(667204),
        c = e(826298),
        E = e(276022),
        f = e(978983),
        I = e(430824),
        T = e(594174),
        p = e(981631),
        _ = e(689079),
        N = e(388032),
        A = e(62352);
      n.Z = (t) => {
        let n,
          {
            commandType: e,
            commandTargetId: o,
            channel: S,
            guildId: h,
            onHeightUpdate: C,
            context: v,
          } = t,
          m = (0, u.e7)([I.Z], () => I.Z.getGuild(null != h ? h : S.guild_id)),
          O = (0, u.e7)([T.default], () => T.default.getUser(o)),
          R = (0, E.Z)({
            user: O,
            guildId: null == m ? void 0 : m.id,
            channel: S,
            context: v,
          }),
          {
            commands: y,
            sectionDescriptors: Z,
            loading: g,
          } = d.wi({
            channel: S,
            filters: { commandTypes: [e] },
            options: { limit: _.lr },
            allowFetch: !0,
          }),
          { sections: G } = r.useMemo(() => {
            let t = {};
            return (
              Z.forEach((n) => {
                t[n.id] = n;
              }),
              { sections: t }
            );
          }, [Z]),
          P = r.useRef(g.current);
        r.useEffect(() => {
          g.current !== P.current &&
            ((P.current = g.current), null == C || C());
        }, [g, C]);
        let M = r.useCallback(
          (t) => {
            a()(null != S, "menu item should not show if channel is null");
            let n = G[t.applicationId],
              e = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
              l.MenuItem,
              {
                id: t.id,
                label: t.displayName,
                iconLeft: () =>
                  null != e
                    ? (0, i.jsx)(e, {
                        channel: S,
                        section: n,
                        width: 18,
                        height: 18,
                        selectable: !1,
                      })
                    : null,
                action: () => {
                  (0, s.Z)({
                    command: t,
                    optionValues: {},
                    context: { channel: S, guild: m },
                    commandTargetId: o,
                  });
                },
              },
              t.id,
            );
          },
          [S, m, o, G],
        );
        if (
          (g.current
            ? (n = (0, i.jsx)(
                l.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(f.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((n =
                0 === y.length
                  ? (0, i.jsx)(
                      l.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: N.intl.string(N.t.YSNlV1),
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : y.map(M)),
              null != R &&
                (n = (0, i.jsxs)(i.Fragment, {
                  children: [
                    n,
                    (0, i.jsx)(l.MenuSeparator, {}, "separator"),
                    R,
                  ],
                }))),
          !p.TPd.TEXTUAL.has(S.type))
        ) {
          if (null == R) return null;
          n = R;
        }
        return (0, i.jsx)(l.MenuItem, {
          id: "apps",
          label: N.intl.string(N.t.PHjkRE),
          listClassName: A.list,
          children: n,
        });
      };
    },
    53304: function (t, n, e) {
      t.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    100210: function (t, n, e) {
      t.exports = {
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
    507815: function (t, n, e) {
      t.exports = { text: "text_b953a6" };
    },
    62352: function (t, n, e) {
      t.exports = { list: "list_fd4745" };
    },
    201683: function (t, n, e) {
      t.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
  },
]);
//# sourceMappingURL=3d3b177c21fca50a7b05.js.map
