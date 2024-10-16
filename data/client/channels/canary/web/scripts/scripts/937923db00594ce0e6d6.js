"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95470"],
  {
    139387: function (e, n, t) {
      var i = t(570140),
        r = t(434404),
        o = t(821864),
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
              await o.U3({
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
        o = t(544891),
        a = t(570140),
        u = t(981631);
      let s = ["Spidey Bot", "Captain Hook"];
      n.Z = {
        fetchForGuild(e) {
          a.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            o.tn
              .get({ url: u.ANM.GUILD_WEBHOOKS(e), oldFormErrors: !0 })
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
            o.tn
              .get({ url: u.ANM.CHANNEL_WEBHOOKS(n), oldFormErrors: !0 })
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
          null == t && (t = s[r().random(0, s.length - 1)]),
          o.tn
            .post({
              url: u.ANM.CHANNEL_WEBHOOKS(n),
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
          o.tn.del({ url: u.ANM.WEBHOOK(n), oldFormErrors: !0 }).then(() => {
            a.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: n });
          }),
        update: (e, n, t) =>
          o.tn
            .patch({ url: u.ANM.WEBHOOK(n), body: t, oldFormErrors: !0 })
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
          return l;
        },
      });
      var i = t(442837),
        r = t(846027),
        o = t(314897),
        a = t(131951),
        u = t(981631),
        s = t(65154);
      function l(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          t = (0, i.e7)([o.default], () => o.default.getId()),
          l = (0, i.e7)(
            [a.Z],
            () => a.Z.supports(s.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled(),
          ),
          d = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(t, n), [t, n]),
          E = null == e || e === t;
        return [
          E && (l || d),
          d,
          (e) => {
            let i = e ? u.ZUi.DISABLED : u.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(t, i, n);
          },
        ];
      }
    },
    295510: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(153867),
        o = t(468026),
        a = t(394059),
        u = t(689938);
      function s(e) {
        let { type: n, onConfirm: t, ...s } = e,
          l =
            n === a.K.STREAM
              ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          d =
            n === a.K.STREAM
              ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, i.jsx)(o.default, {
          confirmText: u.Z.Messages.CONFIRM,
          secondaryConfirmText: u.Z.Messages.DONT_ASK_AGAIN,
          title: l,
          cancelText: u.Z.Messages.CANCEL,
          onConfirm: t,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              t();
          },
          body: d,
          ...s,
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
        o = t(481060),
        a = t(475179),
        u = t(358221),
        s = t(689938);
      function l(e) {
        let n = (0, r.e7)([u.Z], () => u.Z.getVoiceParticipantsHidden(e));
        return (0, i.jsx)(o.MenuCheckboxItem, {
          id: "no-video-hide",
          label: s.Z.Messages.STREAM_SHOW_NON_VIDEO,
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
        o = t(481060),
        a = t(740492),
        u = t(27584),
        s = t(295510),
        l = t(394059),
        d = t(65154),
        E = t(689938);
      function c(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.Yn.DEFAULT,
          [t, c, _] = (0, u.Z)(e, n),
          I = (0, r.e7)(
            [a.ZP],
            () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return t
          ? (0, i.jsx)(o.MenuCheckboxItem, {
              id: "self-video-hide",
              label: E.Z.Messages.SHOW_SELF_VIDEO,
              checked: !c,
              action: () => {
                if (I || c) return _(!c);
                (0, o.openModal)((e) =>
                  (0, i.jsx)(s.Z, {
                    ...e,
                    type: l.K.VIDEO,
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
          return p;
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
        o = t(592125),
        a = t(496675),
        u = t(709054),
        s = t(853856),
        l = t(231338);
      function d() {
        let e = s.Z.getFavoriteChannels(),
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
          let r = o.Z.getChannel(n);
          if (null == r) {
            delete e[n];
            continue;
          }
          if (!r.isPrivate()) {
            if (!a.Z.can(l.Pl.VIEW_CHANNEL, r)) {
              delete e[n];
              continue;
            }
          }
        }
      }
      function c(e, n) {
        if (!s.Z.isFavorite(e))
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
        let n = s.Z.getFavorite(e);
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
        if (!!s.Z.isFavorite(e))
          r.hW.updateAsync(
            "favorites",
            (t) => {
              t.favoriteChannels[e].nickname = null != n ? n : "";
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function T(e) {
        let n = u.default.fromTimestamp(Date.now());
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
      function p() {
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
        o = t(442837);
      t(592125);
      var a = t(984933),
        u = t(914010);
      t(709054);
      var s = t(853856),
        l = t(362658),
        d = t(434065),
        E = t(981631);
      function c(e) {
        let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, l.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, o.e7)([s.Z], () => s.Z.isFavorite(e.id)),
          r = e.isDM() || e.isThread();
        return n && !__OVERLAY__ && !i && (!r || t);
      }
      function _(e) {
        return (0, o.e7)([s.Z], () => s.Z.getFavorite(e));
      }
      function I() {
        return (0, o.e7)([a.ZP], () => a.ZP.getChannels(E.I_8))[
          r.d.GUILD_CATEGORY
        ].map((e) => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function T() {
        return (0, o.e7)([u.Z], () => u.Z.getGuildId()) === E.I_8;
      }
      function N() {
        let { isFavoritesPerk: e } = (0, l.z)("useFavoriteAdded"),
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
          return o;
        },
      });
      var i = t(652874),
        r = t(731965);
      let o = (0, i.Z)((e) => ({
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
        o = t(442837),
        a = t(481060),
        u = t(139387),
        s = t(230711),
        l = t(213459),
        d = t(434404),
        E = t(430824),
        c = t(496675),
        _ = t(981631),
        I = t(689938);
      function T(e) {
        let { user: n, guildId: t, channel: T, context: N } = e,
          f = E.Z.getGuild(t),
          S = (0, o.e7)([c.Z], () =>
            null != f ? c.Z.can(_.Plq.MANAGE_GUILD, f) : null,
          ),
          p = (0, l.em)(T, !0, !0),
          A = (0, l.PL)(!0, !0),
          { isUserApp: O, isGuildApp: C } = r.useMemo(() => {
            var e, t, i, r;
            if ((null == n ? void 0 : n.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let o = Object.values(
                null !==
                  (i =
                    null === (e = p.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {},
              ),
              a = Object.values(
                null !==
                  (r =
                    null === (t = A.result) || void 0 === t
                      ? void 0
                      : t.sections) && void 0 !== r
                  ? r
                  : {},
              );
            return {
              isGuildApp: o.some((e) => {
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
          }, [p, A, null == n ? void 0 : n.id]),
          h = r.useCallback(() => {
            if ((null == f ? void 0 : f.id) != null)
              d.Z.open(f.id, _.pNK.INTEGRATIONS),
                u.Z.setSection(_.b4C.APPLICATION, null == n ? void 0 : n.id);
          }, [null == n ? void 0 : n.id, null == f ? void 0 : f.id]),
          R = r.useCallback(() => {
            s.Z.open(_.oAB.AUTHORIZED_APPS);
          }, []),
          v = N === _.IlC.POPOUT;
        if (!(null == n ? void 0 : n.bot) || !S || v || (!C && !O)) return null;
        let m = [];
        return (
          C &&
            m.push(
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
            m.push(
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
          m
        );
      }
    },
    523361: function (e, n, t) {
      t.d(n, {
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
      var i = t(373228),
        r = t(689938);
      let o = () => [
          r.Z.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL1,
          r.Z.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL2,
        ],
        a = () => [
          r.Z.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL1,
          r.Z.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL2,
        ],
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
    35125: function (e, n, t) {
      t.d(n, {
        PA: function () {
          return d;
        },
        Tn: function () {
          return l;
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
        o = t(430824),
        a = t(594174);
      t(709054), t(523361);
      var u = t(981631),
        s = t(689938);
      function l(e) {
        let {
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: o,
          } = e,
          { content: a, formatParams: u } = c({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: o,
          });
        return a.format(u);
      }
      function d(e) {
        let {
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: o,
          } = e,
          { content: a, formatParams: u } = c({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: o,
          });
        return a.astFormat(u);
      }
      function E(e, n) {
        var t, i;
        let r = o.Z.getGuild(e),
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
            guildId: o,
            roleSubscriptionData: a,
          } = e,
          {
            guild: u,
            totalMonthsSubscribed: l,
            showWithDuration: d,
            isRenewal: c,
          } = E(o, a);
        return (
          (n = d
            ? c
              ? s.Z.Messages
                  .SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION
              : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION
            : c
              ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW
              : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN),
          {
            content: n,
            formatParams: {
              username: t,
              usernameHook: i,
              guildName: null == u ? void 0 : u.name,
              handleGuildNameClick: r,
              tierName: null == a ? void 0 : a.tier_name,
              months: l,
            },
          }
        );
      }
      function _(e) {
        let n,
          {
            username: t,
            usernameOnClickHandler: i = u.dG4,
            roleSubscriptionOnClickHandler: r = u.dG4,
            guildId: o,
            roleSubscriptionData: a,
          } = e,
          {
            guild: l,
            totalMonthsSubscribed: d,
            showWithDuration: c,
            isRenewal: _,
          } = E(o, a),
          I = {
            guildName: null == l ? void 0 : l.name,
            tierName: null == a ? void 0 : a.tier_name,
            username: t,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
          };
        return (n = c
          ? _
            ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat(
                { ...I, months: d },
              )
            : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat(
                { ...I, months: d },
              )
          : _
            ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(
                I,
              )
            : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(
                I,
              ));
      }
      function I(e) {
        return (0, r.l)(e);
      }
      function T(e, n, t, r) {
        var o;
        i.ZP.trackWithMetadata(
          u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: e,
            user_id:
              null === (o = a.default.getCurrentUser()) || void 0 === o
                ? void 0
                : o.id,
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
          return l;
        },
        gq: function () {
          return E;
        },
        kZ: function () {
          return s;
        },
      });
      var i = t(544891),
        r = t(570140),
        o = t(555573),
        a = t(581364),
        u = t(981631);
      function s() {
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
      function d(e, n) {
        i.tn.get(u.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, n)).then(
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
        let o = [];
        try {
          let r = await i.tn.get(
            u.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, n, t),
          );
          r.ok && (o = r.body.permissions);
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
          permissions: o,
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
            defaultEverywhereValue: u,
            guildId: s,
            permissions: l,
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
                })(s, l, i, u)
              : l,
          E = await o.dh(n, s, t, d);
        E.ok &&
          r.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: n,
            commandId: t,
            guildId: s,
            permissions: E.body.permissions,
          });
      }
    },
    978983: function (e, n, t) {
      var i = t(735250);
      t(470079);
      var r = t(481060),
        o = t(53304);
      n.Z = () =>
        (0, i.jsx)("div", {
          className: o.loadingWrapper,
          children: (0, i.jsx)(r.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    823162: function (e, n, t) {
      t.d(n, {
        Xy: function () {
          return d;
        },
        e4: function () {
          return s;
        },
        gN: function () {
          return E;
        },
        hi: function () {
          return _;
        },
        qR: function () {
          return l;
        },
        r_: function () {
          return c;
        },
      });
      var i = t(544891),
        r = t(570140),
        o = t(893776),
        a = t(290323),
        u = t(981631);
      async function s(e) {
        await i.tn.put({
          url: u.ANM.CHANNEL_RECIPIENT_ME(e),
          body: { consent_status: a.h.ACCEPTED },
        }),
          r.Z.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: e,
          });
      }
      function l(e) {
        return i.tn.put({
          url: u.ANM.CHANNEL_RECIPIENT_ME(e),
          body: { consent_status: a.h.UNSPECIFIED },
        });
      }
      function d(e) {
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
      function _() {
        o.Z.getLocationMetadata();
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
    977059: function (e, n, t) {
      t.d(n, {
        R: function () {
          return o;
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
      function o(e) {
        let { location: n } = e;
        return i.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
      }
    },
    441894: function (e, n, t) {
      t.d(n, {
        J: function () {
          return s;
        },
      }),
        t(47120);
      var i = t(442837),
        r = t(592125),
        o = t(19780),
        a = t(977059),
        u = t(760373);
      function s(e) {
        let { channelId: n, location: t } = e,
          { enabled: s } = (0, a.S)({ location: t });
        return (0, i.e7)(
          [o.Z, r.Z],
          () =>
            (function (e, n) {
              var t;
              let [i, a] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [o.Z, r.Z];
              if (!n || null == e || i.getChannelId() !== e) return !1;
              let s = a.getChannel(e);
              if (null == s || s.isGuildStageVoice()) return !1;
              let l =
                null === (t = i.getSecureFramesState()) || void 0 === t
                  ? void 0
                  : t.version;
              return null != l && l !== u.Eg;
            })(n, s, [o.Z, r.Z]),
          [n, s],
        );
      }
    },
    897769: function (e, n, t) {
      t.d(n, {
        S: function () {
          return o;
        },
      });
      var i = t(442837),
        r = t(359119);
      function o(e, n) {
        return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(e), [e])
          .filter((e) => e.type === n)
          .find((e) => null == e.dismiss_timestamp);
      }
    },
    981312: function (e, n, t) {
      t.d(n, {
        U: function () {
          return o;
        },
      });
      var i = t(442837),
        r = t(594174);
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
    13279: function (e, n, t) {
      t.d(n, {
        z: function () {
          return s;
        },
      });
      var i = t(359119),
        r = t(897769),
        o = t(237292),
        a = t(403485),
        u = t(604849);
      function s(e, n) {
        let t = (0, o.y0)({ location: n }),
          s = (0, u.c)(),
          l = (0, a.h)(e),
          d = (0, r.S)(e, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
        if (
          !(
            !t ||
            !s ||
            0 === l.length ||
            l.some(
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
          return o;
        },
      });
      var i = t(442837),
        r = t(359119);
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
    604849: function (e, n, t) {
      t.d(n, {
        c: function () {
          return a;
        },
      });
      var i = t(442837),
        r = t(581883),
        o = t(981312);
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
        return (0, o.U)() && e;
      };
    },
    570870: function (e, n, t) {
      var i = t(735250),
        r = t(470079),
        o = t(512722),
        a = t.n(o),
        u = t(442837),
        s = t(481060),
        l = t(10718),
        d = t(667204),
        E = t(826298),
        c = t(276022),
        _ = t(978983),
        I = t(430824),
        T = t(594174),
        N = t(981631),
        f = t(689079),
        S = t(689938),
        p = t(62352);
      n.Z = (e) => {
        let n,
          {
            commandType: t,
            commandTargetId: o,
            channel: A,
            guildId: O,
            onHeightUpdate: C,
            context: h,
          } = e,
          R = (0, u.e7)([I.Z], () => I.Z.getGuild(null != O ? O : A.guild_id)),
          v = (0, u.e7)([T.default], () => T.default.getUser(o)),
          m = (0, c.Z)({
            user: v,
            guildId: null == R ? void 0 : R.id,
            channel: A,
            context: h,
          }),
          {
            commands: M,
            sectionDescriptors: Z,
            loading: G,
          } = l.wi(A, { commandTypes: [t] }, { limit: f.lr }),
          { sections: g } = r.useMemo(() => {
            let e = {};
            return (
              Z.forEach((n) => {
                e[n.id] = n;
              }),
              { sections: e }
            );
          }, [Z]),
          P = r.useRef(G.current);
        r.useEffect(() => {
          G.current !== P.current &&
            ((P.current = G.current), null == C || C());
        }, [G, C]);
        let y = r.useCallback(
          (e) => {
            a()(null != A, "menu item should not show if channel is null");
            let n = g[e.applicationId],
              t = null != n ? (0, E.ky)(n) : void 0;
            return (0, i.jsx)(
              s.MenuItem,
              {
                id: e.id,
                label: e.displayName,
                iconLeft: () =>
                  null != t
                    ? (0, i.jsx)(t, {
                        channel: A,
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
                    context: { channel: A, guild: R },
                    commandTargetId: o,
                  });
                },
              },
              e.id,
            );
          },
          [A, R, o, g],
        );
        if (
          (G.current
            ? (n = (0, i.jsx)(
                s.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(_.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((n =
                0 === M.length
                  ? (0, i.jsx)(
                      s.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: S.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : M.map(y)),
              null != m &&
                (n = (0, i.jsxs)(i.Fragment, {
                  children: [
                    n,
                    (0, i.jsx)(s.MenuSeparator, {}, "separator"),
                    m,
                  ],
                }))),
          !N.TPd.TEXTUAL.has(A.type))
        ) {
          if (null == m) return null;
          n = m;
        }
        return (0, i.jsx)(s.MenuItem, {
          id: "apps",
          label: S.Z.Messages.APPS,
          listClassName: p.list,
          children: n,
        });
      };
    },
    53304: function (e, n, t) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    100210: function (e, n, t) {
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
    507815: function (e, n, t) {
      e.exports = { text: "text_b953a6" };
    },
    62352: function (e, n, t) {
      e.exports = { list: "list_fd4745" };
    },
    201683: function (e, n, t) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
  },
]);
//# sourceMappingURL=937923db00594ce0e6d6.js.map
