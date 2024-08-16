"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46679"],
  {
    139387: function (e, n, t) {
      var i = t(570140),
        r = t(434404),
        u = t(821864),
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
              await u.U3({
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
        u = t(544891),
        a = t(570140),
        o = t(981631);
      let l = ["Spidey Bot", "Captain Hook"];
      n.Z = {
        fetchForGuild(e) {
          a.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            u.tn
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
            u.tn
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
          null == t && (t = l[r().random(0, l.length - 1)]),
          u.tn
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
          u.tn.del({ url: o.ANM.WEBHOOK(n), oldFormErrors: !0 }).then(() => {
            a.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: n });
          }),
        update: (e, n, t) =>
          u.tn
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
          return s;
        },
      });
      var i = t(442837),
        r = t(846027),
        u = t(314897),
        a = t(131951),
        o = t(981631),
        l = t(65154);
      function s(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : l.Yn.DEFAULT,
          t = (0, i.e7)([u.default], () => u.default.getId()),
          s = (0, i.e7)(
            [a.Z],
            () => a.Z.supports(l.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled(),
          ),
          d = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(t, n), [t, n]),
          E = null == e || e === t;
        return [
          E && (s || d),
          d,
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
          return l;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(153867),
        u = t(468026),
        a = t(394059),
        o = t(689938);
      function l(e) {
        let { type: n, onConfirm: t, ...l } = e,
          s =
            n === a.K.STREAM
              ? o.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : o.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          d =
            n === a.K.STREAM
              ? o.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : o.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, i.jsx)(u.default, {
          confirmText: o.Z.Messages.CONFIRM,
          secondaryConfirmText: o.Z.Messages.DONT_ASK_AGAIN,
          title: s,
          cancelText: o.Z.Messages.CANCEL,
          onConfirm: t,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              t();
          },
          body: d,
          ...l,
        });
      }
    },
    441061: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(442837),
        u = t(481060),
        a = t(475179),
        o = t(358221),
        l = t(689938);
      function s(e) {
        let n = (0, r.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(e));
        return (0, i.jsx)(u.MenuCheckboxItem, {
          id: "no-video-hide",
          label: l.Z.Messages.STREAM_SHOW_NON_VIDEO,
          checked: !n,
          action: () => a.Z.toggleVoiceParticipantsHidden(e, !n),
        });
      }
    },
    167675: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var r = t(442837),
        u = t(481060),
        a = t(740492),
        o = t(27584),
        l = t(295510),
        s = t(394059),
        d = t(65154),
        E = t(689938);
      function c(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.Yn.DEFAULT,
          [t, c, _] = (0, o.Z)(e, n),
          I = (0, r.e7)(
            [a.ZP],
            () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return t
          ? (0, i.jsx)(u.MenuCheckboxItem, {
              id: "self-video-hide",
              label: E.Z.Messages.SHOW_SELF_VIDEO,
              checked: !c,
              action: () => {
                if (I || c) return _(!c);
                (0, u.openModal)((e) =>
                  (0, i.jsx)(l.Z, {
                    ...e,
                    type: s.K.VIDEO,
                    onConfirm: () => _(!c),
                  }),
                );
              },
            })
          : null;
      }
    },
    117984: function (e, n, t) {
      t.d(n, {
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
          return c;
        },
        oC: function () {
          return _;
        },
        s3: function () {
          return f;
        },
        uA: function () {
          return S;
        },
        xh: function () {
          return N;
        },
      }),
        t(47120);
      var i = t(524437),
        r = t(675478),
        u = t(592125),
        a = t(496675),
        o = t(709054),
        l = t(853856),
        s = t(231338);
      function d() {
        let e = l.Z.getFavoriteChannels(),
          n = 1;
        for (let t in e) n = Math.max(n, e[t].order);
        return n + 1;
      }
      function E(e) {
        for (let n in e) {
          let t = e[n];
          if (null == t) {
            delete e[n];
            continue;
          }
          if (t.type === i.Dd.CATEGORY) continue;
          let r = u.Z.getChannel(n);
          if (null == r) {
            delete e[n];
            continue;
          }
          if (!r.isPrivate()) {
            if (!a.Z.can(s.Pl.VIEW_CHANNEL, r)) {
              delete e[n];
              continue;
            }
          }
        }
      }
      function c(e, n) {
        if (!l.Z.isFavorite(e))
          r.hW.updateAsync(
            "favorites",
            (t) => {
              (t.favoriteChannels[e] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: d(),
                parentId: null != n ? n : "0",
              })),
                E(t.favoriteChannels);
            },
            r.fy.FREQUENT_USER_ACTION,
          );
      }
      function _(e) {
        let n = l.Z.getFavorite(e);
        if (null != n)
          r.hW.updateAsync(
            "favorites",
            (t) => {
              if ((delete t.favoriteChannels[e], n.type === i.Dd.CATEGORY))
                for (let n in t.favoriteChannels)
                  t.favoriteChannels[n].parentId === e &&
                    (t.favoriteChannels[n].parentId = "0");
              E(t.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function I(e, n) {
        if (!!l.Z.isFavorite(e))
          r.hW.updateAsync(
            "favorites",
            (t) => {
              t.favoriteChannels[e].nickname = null != n ? n : "";
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function T(e) {
        let n = o.default.fromTimestamp(Date.now());
        r.hW.updateAsync(
          "favorites",
          (t) => {
            t.favoriteChannels[n] = i.aV.create({
              nickname: e,
              type: i.Dd.CATEGORY,
              position: d(),
              parentId: "0",
            });
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function N(e) {
        _(e);
      }
      function f(e) {
        r.hW.updateAsync(
          "favorites",
          (n) => {
            for (let i of e)
              if (
                (null != i.position &&
                  (n.favoriteChannels[i.id].position = i.position),
                void 0 !== i.parent_id)
              ) {
                var t;
                n.favoriteChannels[i.id].parentId =
                  null !== (t = i.parent_id) && void 0 !== t ? t : "0";
              }
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function S(e, n) {
        r.hW.updateAsync(
          "favorites",
          (t) => {
            t.favoriteChannels[e].parentId = null != n ? n : "0";
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
    593214: function (e, n, t) {
      t.d(n, {
        Mt: function () {
          return T;
        },
        li: function () {
          return c;
        },
        s4: function () {
          return _;
        },
        up: function () {
          return N;
        },
        zv: function () {
          return I;
        },
      }),
        t(47120),
        t(653041);
      var i = t(470079),
        r = t(106351),
        u = t(442837);
      t(592125);
      var a = t(984933),
        o = t(914010);
      t(709054);
      var l = t(853856),
        s = t(362658),
        d = t(434065),
        E = t(981631);
      function c(e) {
        let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, s.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, u.e7)([l.Z], () => l.Z.isFavorite(e.id)),
          r = e.isDM() || e.isThread();
        return n && !__OVERLAY__ && !i && (!r || t);
      }
      function _(e) {
        return (0, u.e7)([l.Z], () => l.Z.getFavorite(e));
      }
      function I() {
        return (0, u.e7)([a.ZP], () => a.ZP.getChannels(E.I_8))[
          r.d.GUILD_CATEGORY
        ].map((e) => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function T() {
        return (0, u.e7)([o.Z], () => o.Z.getGuildId()) === E.I_8;
      }
      function N() {
        let { isFavoritesPerk: e } = (0, s.z)("useFavoriteAdded"),
          n = (0, d.r)(),
          t = i.useCallback(() => {
            e && n.notifyFavoriteAdded();
          }, [n, e]),
          r = i.useCallback(() => {
            e && n.clearFavoriteAdded();
          }, [n, e]);
        return {
          favoriteAdded: n.favoriteAdded,
          notifyFavoriteAdded: t,
          clearFavoriteAdded: r,
        };
      }
    },
    434065: function (e, n, t) {
      t.d(n, {
        r: function () {
          return u;
        },
      });
      var i = t(652874),
        r = t(731965);
      let u = (0, i.Z)((e) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, r.j)(() => e({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, r.j)(() => e({ favoriteAdded: !1 })),
      }));
    },
    276022: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return T;
        },
      }),
        t(653041);
      var i = t(735250),
        r = t(470079),
        u = t(442837),
        a = t(481060),
        o = t(139387),
        l = t(230711),
        s = t(213459),
        d = t(434404),
        E = t(430824),
        c = t(496675),
        _ = t(981631),
        I = t(689938);
      function T(e) {
        let { user: n, guildId: t, channel: T, context: N } = e,
          f = E.Z.getGuild(t),
          S = (0, u.e7)([c.Z], () =>
            null != f ? c.Z.can(_.Plq.MANAGE_GUILD, f) : null,
          ),
          A = (0, s.em)(T, !0, !0),
          p = (0, s.PL)(!0, !0),
          { isUserApp: O, isGuildApp: C } = r.useMemo(() => {
            var e, t, i, r;
            if ((null == n ? void 0 : n.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let u = Object.values(
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
                    null === (t = p.result) || void 0 === t
                      ? void 0
                      : t.sections) && void 0 !== r
                  ? r
                  : {},
              );
            return {
              isGuildApp: u.some((e) => {
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
          }, [A, p, null == n ? void 0 : n.id]),
          h = r.useCallback(() => {
            if ((null == f ? void 0 : f.id) != null)
              d.Z.open(f.id, _.pNK.INTEGRATIONS),
                o.Z.setSection(_.b4C.APPLICATION, null == n ? void 0 : n.id);
          }, [null == n ? void 0 : n.id, null == f ? void 0 : f.id]),
          R = r.useCallback(() => {
            l.Z.open(_.oAB.AUTHORIZED_APPS);
          }, []),
          M = N === _.IlC.POPOUT;
        if (!(null == n ? void 0 : n.bot) || !S || M || (!C && !O)) return null;
        let v = [];
        return (
          C &&
            v.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-integration",
                  label: I.Z.Messages.MANAGE_INTEGRATION,
                  action: h,
                },
                "manage-integration",
              ),
            ),
          O &&
            v.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: I.Z.Messages.MANAGE_AUTHORIZED_APP,
                  action: R,
                },
                "manage-authorized-app",
              ),
            ),
          v
        );
      }
    },
    523361: function (e, n, t) {
      t.d(n, {
        HG: function () {
          return o;
        },
        Md: function () {
          return a;
        },
        Q8: function () {
          return u;
        },
      });
      var i = t(373228),
        r = t(689938);
      let u = () => [
          r.Z.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL1,
          r.Z.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL2,
        ],
        a = () => [
          r.Z.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL1,
          r.Z.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL2,
        ],
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
    35125: function (e, n, t) {
      t.d(n, {
        PA: function () {
          return d;
        },
        Tn: function () {
          return s;
        },
        _i: function () {
          return N;
        },
        eI: function () {
          return I;
        },
        vp: function () {
          return _;
        },
        y8: function () {
          return T;
        },
      });
      var i = t(367907),
        r = t(200876),
        u = t(430824),
        a = t(594174);
      t(709054), t(523361);
      var o = t(981631),
        l = t(689938);
      function s(e) {
        let {
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: u,
          } = e,
          { content: a, formatParams: o } = c({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: u,
          });
        return a.format(o);
      }
      function d(e) {
        let {
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: u,
          } = e,
          { content: a, formatParams: o } = c({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: u,
          });
        return a.astFormat(o);
      }
      function E(e, n) {
        var t, i;
        let r = u.Z.getGuild(e),
          a =
            null !== (t = null == n ? void 0 : n.total_months_subscribed) &&
            void 0 !== t
              ? t
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
      function c(e) {
        let n,
          {
            username: t,
            usernameOnClickHandler: i,
            roleSubscriptionOnClickHandler: r,
            guildId: u,
            roleSubscriptionData: a,
          } = e,
          {
            guild: o,
            totalMonthsSubscribed: s,
            showWithDuration: d,
            isRenewal: c,
          } = E(u, a);
        return (
          (n = d
            ? c
              ? l.Z.Messages
                  .SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION
              : l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION
            : c
              ? l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW
              : l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN),
          {
            content: n,
            formatParams: {
              username: t,
              usernameHook: i,
              guildName: null == o ? void 0 : o.name,
              handleGuildNameClick: r,
              tierName: null == a ? void 0 : a.tier_name,
              months: s,
            },
          }
        );
      }
      function _(e) {
        let n,
          {
            username: t,
            usernameOnClickHandler: i = o.dG4,
            roleSubscriptionOnClickHandler: r = o.dG4,
            guildId: u,
            roleSubscriptionData: a,
          } = e,
          {
            guild: s,
            totalMonthsSubscribed: d,
            showWithDuration: c,
            isRenewal: _,
          } = E(u, a),
          I = {
            guildName: null == s ? void 0 : s.name,
            tierName: null == a ? void 0 : a.tier_name,
            username: t,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
          };
        return (n = c
          ? _
            ? l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat(
                { ...I, months: d },
              )
            : l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat(
                { ...I, months: d },
              )
          : _
            ? l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(
                I,
              )
            : l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(
                I,
              ));
      }
      function I(e) {
        return (0, r.l)(e);
      }
      function T(e, n, t, r) {
        var u;
        i.ZP.trackWithMetadata(
          o.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: e,
            user_id:
              null === (u = a.default.getCurrentUser()) || void 0 === u
                ? void 0
                : u.id,
            channel_id: n,
            message_id: t,
            role_subscription_listing_id: r,
          },
        );
      }
      function N(e, n) {
        var t;
        return {
          guild_id: e.guild_id,
          sender:
            null === (t = a.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id,
          target_user: n.author.id,
          channel_id: e.id,
          message_id: n.id,
        };
      }
    },
    821864: function (e, n, t) {
      t.d(n, {
        I4: function () {
          return c;
        },
        Sn: function () {
          return d;
        },
        U3: function () {
          return I;
        },
        Ui: function () {
          return _;
        },
        W4: function () {
          return s;
        },
        gq: function () {
          return E;
        },
        kZ: function () {
          return l;
        },
      });
      var i = t(544891),
        r = t(570140),
        u = t(555573),
        a = t(581364),
        o = t(981631);
      function l() {
        r.Z.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function s(e, n, t) {
        r.Z.dispatch({
          applicationId: e,
          commandId: n,
          permissions: t,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function d(e, n) {
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
      async function E(e, n, t) {
        let u = [];
        try {
          let r = await i.tn.get(
            o.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, n, t),
          );
          r.ok && (u = r.body.permissions);
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
          permissions: u,
        });
      }
      function c(e) {
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
      async function I(e) {
        let {
            applicationId: n,
            commandId: t,
            defaultEveryoneValue: i,
            defaultEverywhereValue: o,
            guildId: l,
            permissions: s,
          } = e,
          d =
            t === n
              ? (function (e, n, t, i) {
                  if (!t || !i) return n;
                  let r = { [e]: t, [(0, a.bD)(e)]: i };
                  return n.filter((e) => {
                    let n = r[e.id];
                    return null == n || e.permission !== n;
                  });
                })(l, s, i, o)
              : s,
          E = await u.dh(n, l, t, d);
        E.ok &&
          r.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: n,
            commandId: t,
            guildId: l,
            permissions: E.body.permissions,
          });
      }
    },
    978983: function (e, n, t) {
      var i = t(735250);
      t(470079);
      var r = t(481060),
        u = t(882441);
      n.Z = () =>
        (0, i.jsx)("div", {
          className: u.loadingWrapper,
          children: (0, i.jsx)(r.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    823162: function (e, n, t) {
      t.d(n, {
        Xy: function () {
          return d;
        },
        e4: function () {
          return l;
        },
        gN: function () {
          return E;
        },
        hi: function () {
          return _;
        },
        qR: function () {
          return s;
        },
        r_: function () {
          return c;
        },
      });
      var i = t(544891),
        r = t(570140),
        u = t(893776),
        a = t(290323),
        o = t(981631);
      async function l(e) {
        await i.tn.put({
          url: o.ANM.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: a.h.ACCEPTED },
        }),
          r.Z.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: e,
          });
      }
      function s(e) {
        return i.tn.put({
          url: o.ANM.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: a.h.UNSPECIFIED },
        });
      }
      function d(e) {
        return i.tn.put({
          url: o.ANM.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: a.h.PENDING },
        });
      }
      function E(e) {
        return i.tn.del({ url: o.ANM.CHANNEL_RECIPIENT_CONSENT(e) });
      }
      function c(e) {
        return i.tn.put({
          url: o.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: e },
        });
      }
      function _() {
        u.Z.getLocationMetadata();
      }
    },
    290323: function (e, n, t) {
      var i, r;
      t.d(n, {
        h: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.PENDING = 1)] = "PENDING"),
        (r[(r.ACCEPTED = 2)] = "ACCEPTED"),
        (r[(r.REJECTED = 3)] = "REJECTED");
    },
    760373: function (e, n, t) {
      var i, r, u, a;
      t.d(n, {
        $J: function () {
          return l;
        },
        GB: function () {
          return f;
        },
        HK: function () {
          return N;
        },
        KN: function () {
          return I;
        },
        WK: function () {
          return c;
        },
        Xj: function () {
          return S;
        },
        YP: function () {
          return E;
        },
        ak: function () {
          return T;
        },
        iQ: function () {
          return _;
        },
        l4: function () {
          return o;
        },
        s9: function () {
          return s;
        },
        tu: function () {
          return r;
        },
        y6: function () {
          return d;
        },
      });
      let o = "",
        l = "",
        s = "",
        d = 5,
        E = 30,
        c = 3,
        _ = 5,
        I = 60,
        T = 4;
      ((u = i || (i = {})).MATCH = "match"),
        (u.OTHER_USER_ALREADY_VERIFIED = "other_user_already_verified"),
        (u.MISMATCH = "mismatch"),
        (u.UNABLE_TO_VERIFY = "unable_to_verify"),
        (u.OTHER_USER_DISCONNECTED = "other_user_disconnected"),
        (u.CURRENT_USER_DISCONNECTED = "current_user_disconnected");
      let N = 100;
      ((a = r || (r = {})).RTC_DEBUG_PANEL = "rtc_debug_panel"),
        (a.RTC_SECURE_FRAMES = "rtc_secure_frames");
      let f = 1,
        S = 0;
    },
    977059: function (e, n, t) {
      t.d(n, {
        c: function () {
          return i;
        },
      });
      let i = (0, t(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
    },
    441894: function (e, n, t) {
      t.d(n, {
        J: function () {
          return l;
        },
      }),
        t(47120);
      var i = t(442837),
        r = t(592125),
        u = t(19780),
        a = t(977059),
        o = t(760373);
      function l(e) {
        let { channelId: n, location: t } = e,
          { enabled: l } = a.c.useExperiment({ location: t });
        return (0, i.e7)(
          [u.Z, r.Z],
          () =>
            (function (e, n) {
              var t;
              let [i, a] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [u.Z, r.Z];
              if (!n || null == e || i.getChannelId() !== e) return !1;
              let l = a.getChannel(e);
              if (null == l || l.isGuildStageVoice()) return !1;
              let s =
                null === (t = i.getSecureFramesState()) || void 0 === t
                  ? void 0
                  : t.version;
              return null != s && s > o.HK;
            })(n, l, [u.Z, r.Z]),
          [n, l],
        );
      }
    },
    897769: function (e, n, t) {
      t.d(n, {
        S: function () {
          return u;
        },
      });
      var i = t(442837),
        r = t(359119);
      function u(e, n) {
        return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(e), [e])
          .filter((e) => e.type === n)
          .find((e) => null == e.dismiss_timestamp);
      }
    },
    981312: function (e, n, t) {
      t.d(n, {
        U: function () {
          return a;
        },
      });
      var i = t(442837),
        r = t(594174),
        u = t(699816);
      function a(e) {
        let n = (0, i.e7)([r.default], () => {
            var e;
            return null === (e = r.default.getCurrentUser()) || void 0 === e
              ? void 0
              : e.nsfwAllowed;
          }),
          t = (0, u.zL)(e);
        return !1 === n || t;
      }
    },
    13279: function (e, n, t) {
      t.d(n, {
        z: function () {
          return l;
        },
      });
      var i = t(359119),
        r = t(897769),
        u = t(237292),
        a = t(403485),
        o = t(604849);
      function l(e, n) {
        let t = (0, u.y0)({ location: n }),
          l = (0, o.c)(),
          s = (0, a.h)(e),
          d = (0, r.S)(e, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
        if (
          !(
            !t ||
            !l ||
            0 === s.length ||
            s.some(
              (e) =>
                e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                (e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2 &&
                  null != e.dismiss_timestamp),
            )
          )
        )
          return d;
      }
    },
    403485: function (e, n, t) {
      t.d(n, {
        h: function () {
          return u;
        },
      });
      var i = t(442837),
        r = t(359119);
      function u(e) {
        return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(e), [
          e,
        ]).filter(
          (e) =>
            e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
            e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        );
      }
    },
    604849: function (e, n, t) {
      t.d(n, {
        c: function () {
          return a;
        },
      });
      var i = t(442837),
        r = t(581883),
        u = t(981312);
      let a = () => {
        let e = (0, i.e7)([r.Z], () => {
          var e, n, t;
          return (
            null ===
              (t =
                null === (n = r.Z.settings.privacy) || void 0 === n
                  ? void 0
                  : null === (e = n.inappropriateConversationWarnings) ||
                      void 0 === e
                    ? void 0
                    : e.value) ||
            void 0 === t ||
            t
          );
        });
        return (0, u.U)("safety_warnings_setting") && e;
      };
    },
    471253: function (e, n, t) {
      t.d(n, {
        DT: function () {
          return C;
        },
        Ef: function () {
          return v;
        },
        HO: function () {
          return M;
        },
        NZ: function () {
          return m;
        },
        Pq: function () {
          return R;
        },
        Q1: function () {
          return S;
        },
        RK: function () {
          return p;
        },
        _0: function () {
          return A;
        },
        hz: function () {
          return h;
        },
        yi: function () {
          return O;
        },
      });
      var i = t(512722),
        r = t.n(i),
        u = t(149765),
        a = t(544891),
        o = t(493683);
      t(749210);
      var l = t(911969),
        s = t(367907),
        d = t(944486),
        E = t(979651),
        c = t(700785),
        _ = t(922482),
        I = t(192079),
        T = t(706058),
        N = t(590415),
        f = t(981631);
      function S(e, n) {
        let t = e.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          n && (0, s.yw)(f.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, I.s$)(e) }),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function A(e, n) {
        let t = e.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function p(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == e ? void 0 : e.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let u = E.Z.getVoiceStateForChannel(e.id);
        return (
          (0, N.gf)(u) === N.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, s.yw)(f.rMx.PROMOTED_TO_SPEAKER, { ...(0, I.s$)(e) }),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: n,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(t ? { silent: t } : {}),
            },
          })
        );
      }
      function O(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          r()(null != n, "This channel cannot be guildless."),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(n),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function C(e, n, t) {
        let i = e.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(i, n),
            body: { suppress: t, channel_id: e.id },
          })
        );
      }
      function h(e, n) {
        if (null == n || null == e) return;
        let t = n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          C(n, e.id, !0),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(t, e.id),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function R(e, n, t) {
        let i = e.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let a = e.permissionOverwrites[i],
          s = { id: i, type: l.BN.ROLE, allow: c.Hn, deny: c.Hn, ...a };
        t
          ? ((s.allow = u.IH(s.allow, n)), (s.deny = u.Od(s.deny, n)))
          : ((s.allow = u.Od(s.allow, n)), (s.deny = u.IH(s.deny, n))),
          o.Z.updatePermissionOverwrite(e.id, s);
      }
      async function M(e, n, t, i) {
        if ("" === n) return;
        d.Z.getVoiceChannelId() !== e.id && (0, _.TM)(e);
        let r = await (0, T.me)(e.id, n, t, i);
        return p(e, !1, !0), r;
      }
      async function v(e, n, t) {
        if ("" !== n) return await (0, T.Dk)(e.id, n, t);
      }
      async function m(e) {
        await (0, T.Ix)(e.id);
      }
    },
    192079: function (e, n, t) {
      t.d(n, {
        ER: function () {
          return E;
        },
        kk: function () {
          return c;
        },
        s$: function () {
          return _;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var i = t(19780),
        r = t(5192),
        u = t(700785),
        a = t(427679),
        o = t(157925),
        l = t(981631),
        s = t(71080),
        d = t(689938);
      function E(e, n, t, i) {
        let u = n[0],
          a = r.ZP.getName(e, t, u),
          o = null != i ? i : n.length;
        return 1 === o && null != u
          ? a
          : null == u
            ? d.Z.Messages.SPEAKING_COUNT.format({ count: o })
            : d.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: a,
                count: o - 1,
              });
      }
      function c(e, n) {
        switch (e) {
          case s.aC.OWNER:
            return d.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case s.aC.ADMINISTRATOR:
            return d.Z.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case s.aC.MEMBER:
          case s.aC.ROLE:
            return n
              ? d.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : d.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case s.aC.EMPTY_STATE:
        }
        return null;
      }
      function _(e) {
        let n = a.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: u.Uu(l.Plq.REQUEST_TO_SPEAK, e)
            ? o.BM.EVERYONE
            : o.BM.NO_ONE,
          stage_instance_id: null == n ? void 0 : n.id,
        };
      }
    },
    706058: function (e, n, t) {
      t.d(n, {
        Dk: function () {
          return a;
        },
        Ix: function () {
          return o;
        },
        me: function () {
          return u;
        },
      });
      var i = t(544891),
        r = t(981631);
      async function u(e, n, t, u, a) {
        return (
          await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
              channel_id: e,
              topic: n,
              privacy_level: t,
              guild_scheduled_event_id: a,
              send_start_notification: u,
            },
          })
        ).body;
      }
      async function a(e, n, t) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(e),
            body: { topic: n, privacy_level: t },
          })
        ).body;
      }
      function o(e) {
        return i.tn.del(r.ANM.STAGE_INSTANCE(e));
      }
    },
    623633: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = t(442837),
        r = t(592125),
        u = t(944486);
      function a() {
        return (0, i.e7)([u.Z, r.Z], () => {
          let e = u.Z.getVoiceChannelId();
          if (null != e) {
            let n = r.Z.getChannel(e);
            if (null == n ? void 0 : n.isGuildStageVoice()) return n;
          }
          return null;
        });
      }
    },
    570870: function (e, n, t) {
      var i = t(735250),
        r = t(470079),
        u = t(512722),
        a = t.n(u),
        o = t(442837),
        l = t(481060),
        s = t(10718),
        d = t(667204),
        E = t(826298),
        c = t(276022),
        _ = t(978983),
        I = t(430824),
        T = t(594174),
        N = t(981631),
        f = t(689079),
        S = t(689938),
        A = t(359522);
      n.Z = (e) => {
        let n,
          {
            commandType: t,
            commandTargetId: u,
            channel: p,
            guildId: O,
            onHeightUpdate: C,
            context: h,
          } = e,
          R = (0, o.e7)([I.Z], () => I.Z.getGuild(null != O ? O : p.guild_id)),
          M = (0, o.e7)([T.default], () => T.default.getUser(u)),
          v = (0, c.Z)({
            user: M,
            guildId: null == R ? void 0 : R.id,
            channel: p,
            context: h,
          }),
          {
            commands: m,
            sectionDescriptors: Z,
            loading: g,
          } = s.wi(p, { commandTypes: [t] }, { limit: f.lr }),
          { sections: y } = r.useMemo(() => {
            let e = {};
            return (
              Z.forEach((n) => {
                e[n.id] = n;
              }),
              { sections: e }
            );
          }, [Z]),
          P = r.useRef(g.current);
        r.useEffect(() => {
          g.current !== P.current &&
            ((P.current = g.current), null == C || C());
        }, [g, C]);
        let G = r.useCallback(
          (e) => {
            a()(null != p, "menu item should not show if channel is null");
            let n = y[e.applicationId],
              t = null != n ? (0, E.ky)(n) : void 0;
            return (0, i.jsx)(
              l.MenuItem,
              {
                id: e.id,
                label: e.displayName,
                showIconFirst: !0,
                icon: () =>
                  null != t
                    ? (0, i.jsx)(t, {
                        channel: p,
                        section: n,
                        width: 18,
                        height: 18,
                        selectable: !1,
                      })
                    : null,
                action: () => {
                  (0, d.Z)({
                    command: e,
                    optionValues: {},
                    context: { channel: p, guild: R },
                    commandTargetId: u,
                  });
                },
              },
              e.id,
            );
          },
          [p, R, u, y],
        );
        if (
          (g.current
            ? (n = (0, i.jsx)(
                l.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(_.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((n =
                0 === m.length
                  ? (0, i.jsx)(
                      l.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: S.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : m.map(G)),
              null != v &&
                (n = (0, i.jsxs)(i.Fragment, {
                  children: [
                    n,
                    (0, i.jsx)(l.MenuSeparator, {}, "separator"),
                    v,
                  ],
                }))),
          !N.TPd.TEXTUAL.has(p.type))
        ) {
          if (null == v) return null;
          n = v;
        }
        return (0, i.jsx)(l.MenuItem, {
          id: "apps",
          label: S.Z.Messages.APPS,
          listClassName: A.list,
          children: n,
        });
      };
    },
    882441: function (e, n, t) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    465094: function (e, n, t) {
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
    100535: function (e, n, t) {
      e.exports = { text: "text_b953a6" };
    },
    359522: function (e, n, t) {
      e.exports = { list: "list_fd4745" };
    },
    480881: function (e, n, t) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
  },
]);
//# sourceMappingURL=5c288c03569fe7193073.js.map
