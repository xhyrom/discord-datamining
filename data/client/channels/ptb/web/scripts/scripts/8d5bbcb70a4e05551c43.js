"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["45806"],
  {
    963458: function (e, t, n) {
      var r = n(192291),
        i = n(22092),
        o = r.aTypedArrayConstructor;
      (0, r.exportTypedArrayStaticMethod)(
        "of",
        function () {
          for (var e = 0, t = arguments.length, n = new (o(this))(t); t > e; )
            n[e] = arguments[e++];
          return n;
        },
        i,
      );
    },
    139387: function (e, t, n) {
      var r = n(570140),
        i = n(434404),
        o = n(821864),
        a = n(308063);
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
              await o.U3({
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
              await a.Z.update(e, t.id, t),
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
        o = n(544891),
        a = n(570140),
        u = n(981631);
      let s = ["Spidey Bot", "Captain Hook"];
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
                let { body: r } = n;
                return a.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  channelId: t,
                  webhooks: r,
                });
              });
        },
        create: (e, t, n) => (
          null == n && (n = s[i().random(0, s.length - 1)]),
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
          return l;
        },
      });
      var r = n(442837),
        i = n(846027),
        o = n(314897),
        a = n(131951),
        u = n(981631),
        s = n(65154);
      function l(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          n = (0, r.e7)([o.default], () => o.default.getId()),
          l = (0, r.e7)(
            [a.Z],
            () => a.Z.supports(s.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled(),
          ),
          d = (0, r.e7)([a.Z], () => a.Z.isLocalVideoDisabled(n, t), [n, t]),
          c = null == e || e === n;
        return [
          c && (l || d),
          d,
          (e) => {
            let r = e ? u.ZUi.DISABLED : u.ZUi.MANUAL_ENABLED;
            i.Z.setDisableLocalVideo(n, r, t);
          },
        ];
      }
    },
    295510: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(153867),
        o = n(468026),
        a = n(394059),
        u = n(689938);
      function s(e) {
        let { type: t, onConfirm: n, ...s } = e,
          l =
            t === a.K.STREAM
              ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          d =
            t === a.K.STREAM
              ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, r.jsx)(o.default, {
          confirmText: u.Z.Messages.CONFIRM,
          secondaryConfirmText: u.Z.Messages.DONT_ASK_AGAIN,
          title: l,
          cancelText: u.Z.Messages.CANCEL,
          onConfirm: n,
          onConfirmSecondary: () => {
            i.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              n();
          },
          body: d,
          ...s,
        });
      }
    },
    441061: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(442837),
        o = n(481060),
        a = n(475179),
        u = n(358221),
        s = n(689938);
      function l(e) {
        let t = (0, i.e7)([u.Z], () => u.Z.getVoiceParticipantsHidden(e));
        return (0, r.jsx)(o.MenuCheckboxItem, {
          id: "no-video-hide",
          label: s.Z.Messages.STREAM_SHOW_NON_VIDEO,
          checked: !t,
          action: () => a.Z.toggleVoiceParticipantsHidden(e, !t),
        });
      }
    },
    167675: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      }),
        n(47120);
      var r = n(735250);
      n(470079);
      var i = n(442837),
        o = n(481060),
        a = n(740492),
        u = n(27584),
        s = n(295510),
        l = n(394059),
        d = n(65154),
        c = n(689938);
      function E(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.Yn.DEFAULT,
          [n, E, f] = (0, u.Z)(e, t),
          I = (0, i.e7)(
            [a.ZP],
            () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return n
          ? (0, r.jsx)(o.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.Z.Messages.SHOW_SELF_VIDEO,
              checked: !E,
              action: () => {
                if (I || E) return f(!E);
                (0, o.openModal)((e) =>
                  (0, r.jsx)(s.Z, {
                    ...e,
                    type: l.K.VIDEO,
                    onConfirm: () => f(!E),
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
          return _;
        },
        UT: function () {
          return I;
        },
        _Z: function () {
          return S;
        },
        kj: function () {
          return E;
        },
        oC: function () {
          return f;
        },
        s3: function () {
          return N;
        },
        uA: function () {
          return p;
        },
        xh: function () {
          return T;
        },
      }),
        n(47120);
      var r = n(524437),
        i = n(675478),
        o = n(592125),
        a = n(496675),
        u = n(709054),
        s = n(853856),
        l = n(231338);
      function d() {
        let e = s.Z.getFavoriteChannels(),
          t = 1;
        for (let n in e) t = Math.max(t, e[n].order);
        return t + 1;
      }
      function c(e) {
        for (let t in e) {
          let n = e[t];
          if (null == n) {
            delete e[t];
            continue;
          }
          if (n.type === r.Dd.CATEGORY) continue;
          let i = o.Z.getChannel(t);
          if (null == i) {
            delete e[t];
            continue;
          }
          if (!i.isPrivate()) {
            if (!a.Z.can(l.Pl.VIEW_CHANNEL, i)) {
              delete e[t];
              continue;
            }
          }
        }
      }
      function E(e, t) {
        if (!s.Z.isFavorite(e))
          i.hW.updateAsync(
            "favorites",
            (n) => {
              (n.favoriteChannels[e] = r.aV.create({
                nickname: "",
                type: r.Dd.REFERENCE_ORIGINAL,
                position: d(),
                parentId: null != t ? t : "0",
              })),
                c(n.favoriteChannels);
            },
            i.fy.FREQUENT_USER_ACTION,
          );
      }
      function f(e) {
        let t = s.Z.getFavorite(e);
        if (null != t)
          i.hW.updateAsync(
            "favorites",
            (n) => {
              if ((delete n.favoriteChannels[e], t.type === r.Dd.CATEGORY))
                for (let t in n.favoriteChannels)
                  n.favoriteChannels[t].parentId === e &&
                    (n.favoriteChannels[t].parentId = "0");
              c(n.favoriteChannels);
            },
            i.fy.INFREQUENT_USER_ACTION,
          );
      }
      function I(e, t) {
        if (!!s.Z.isFavorite(e))
          i.hW.updateAsync(
            "favorites",
            (n) => {
              n.favoriteChannels[e].nickname = null != t ? t : "";
            },
            i.fy.INFREQUENT_USER_ACTION,
          );
      }
      function _(e) {
        let t = u.default.fromTimestamp(Date.now());
        i.hW.updateAsync(
          "favorites",
          (n) => {
            n.favoriteChannels[t] = r.aV.create({
              nickname: e,
              type: r.Dd.CATEGORY,
              position: d(),
              parentId: "0",
            });
          },
          i.fy.FREQUENT_USER_ACTION,
        );
      }
      function T(e) {
        f(e);
      }
      function N(e) {
        i.hW.updateAsync(
          "favorites",
          (t) => {
            for (let r of e)
              if (
                (null != r.position &&
                  (t.favoriteChannels[r.id].position = r.position),
                void 0 !== r.parent_id)
              ) {
                var n;
                t.favoriteChannels[r.id].parentId =
                  null !== (n = r.parent_id) && void 0 !== n ? n : "0";
              }
          },
          i.fy.FREQUENT_USER_ACTION,
        );
      }
      function p(e, t) {
        i.hW.updateAsync(
          "favorites",
          (n) => {
            n.favoriteChannels[e].parentId = null != t ? t : "0";
          },
          i.fy.FREQUENT_USER_ACTION,
        );
      }
      function S() {
        i.hW.updateAsync(
          "favorites",
          (e) => {
            e.muted = !e.muted;
          },
          i.fy.INFREQUENT_USER_ACTION,
        );
      }
    },
    593214: function (e, t, n) {
      n.d(t, {
        Mt: function () {
          return _;
        },
        li: function () {
          return E;
        },
        s4: function () {
          return f;
        },
        up: function () {
          return T;
        },
        zv: function () {
          return I;
        },
      }),
        n(47120),
        n(653041);
      var r = n(470079),
        i = n(106351),
        o = n(442837);
      n(592125);
      var a = n(984933),
        u = n(914010);
      n(709054);
      var s = n(853856),
        l = n(362658),
        d = n(434065),
        c = n(981631);
      function E(e) {
        let { favoritesEnabled: t, hasStaffPrivileges: n } = (0, l.z)(
            "useCanFavoriteChannel",
          ),
          r = (0, o.e7)([s.Z], () => s.Z.isFavorite(e.id)),
          i = e.isDM() || e.isThread();
        return t && !__OVERLAY__ && !r && (!i || n);
      }
      function f(e) {
        return (0, o.e7)([s.Z], () => s.Z.getFavorite(e));
      }
      function I() {
        return (0, o.e7)([a.ZP], () => a.ZP.getChannels(c.I_8))[
          i.d.GUILD_CATEGORY
        ].map((e) => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function _() {
        return (0, o.e7)([u.Z], () => u.Z.getGuildId()) === c.I_8;
      }
      function T() {
        let { isFavoritesPerk: e } = (0, l.z)("useFavoriteAdded"),
          t = (0, d.r)(),
          n = r.useCallback(() => {
            e && t.notifyFavoriteAdded();
          }, [t, e]),
          i = r.useCallback(() => {
            e && t.clearFavoriteAdded();
          }, [t, e]);
        return {
          favoriteAdded: t.favoriteAdded,
          notifyFavoriteAdded: n,
          clearFavoriteAdded: i,
        };
      }
    },
    434065: function (e, t, n) {
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(652874),
        i = n(731965);
      let o = (0, r.Z)((e) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, i.j)(() => e({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, i.j)(() => e({ favoriteAdded: !1 })),
      }));
    },
    276022: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      }),
        n(653041);
      var r = n(735250),
        i = n(470079),
        o = n(442837),
        a = n(481060),
        u = n(139387),
        s = n(230711),
        l = n(213459),
        d = n(434404),
        c = n(430824),
        E = n(496675),
        f = n(981631),
        I = n(689938);
      function _(e) {
        let { user: t, guildId: n, channel: _, context: T } = e,
          N = c.Z.getGuild(n),
          p = (0, o.e7)([E.Z], () =>
            null != N ? E.Z.can(f.Plq.MANAGE_GUILD, N) : null,
          ),
          S = (0, l.em)(_, !0, !0),
          A = (0, l.PL)(!0, !0),
          { isUserApp: h, isGuildApp: O } = i.useMemo(() => {
            var e, n, r, i;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let o = Object.values(
                null !==
                  (r =
                    null === (e = S.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== r
                  ? r
                  : {},
              ),
              a = Object.values(
                null !==
                  (i =
                    null === (n = A.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== i
                  ? i
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
          }, [S, A, null == t ? void 0 : t.id]),
          C = i.useCallback(() => {
            if ((null == N ? void 0 : N.id) != null)
              d.Z.open(N.id, f.pNK.INTEGRATIONS),
                u.Z.setSection(f.b4C.APPLICATION, null == t ? void 0 : t.id);
          }, [null == t ? void 0 : t.id, null == N ? void 0 : N.id]),
          R = i.useCallback(() => {
            s.Z.open(f.oAB.AUTHORIZED_APPS);
          }, []),
          y = T === f.IlC.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !p || y || (!O && !h)) return null;
        let g = [];
        return (
          O &&
            g.push(
              (0, r.jsx)(
                a.MenuItem,
                {
                  id: "manage-integration",
                  label: I.Z.Messages.MANAGE_INTEGRATION,
                  action: C,
                },
                "manage-integration",
              ),
            ),
          h &&
            g.push(
              (0, r.jsx)(
                a.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: I.Z.Messages.MANAGE_AUTHORIZED_APP,
                  action: R,
                },
                "manage-authorized-app",
              ),
            ),
          g
        );
      }
    },
    523361: function (e, t, n) {
      n.d(t, {
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
      var r = n(373228),
        i = n(689938);
      let o = () => [
          i.Z.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL1,
          i.Z.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL2,
        ],
        a = () => [
          i.Z.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL1,
          i.Z.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL2,
        ],
        u = [
          {
            id: "781323471249604648",
            format_type: r.u3.APNG,
            description: "Cheerful Choco jumps out of gift box",
            name: "Surprise",
          },
          {
            id: "781324642736144424",
            format_type: r.u3.APNG,
            description: "Cheerful Choco preens against window",
            name: "Affection",
          },
          {
            id: "781323769960202280",
            format_type: r.u3.APNG,
            description: "Cheerful Choco sparkles",
            name: "OMG",
          },
          {
            id: "781324722394103808",
            format_type: r.u3.APNG,
            description: "Cheerful Choco cheers",
            name: "Cheer",
          },
          {
            id: "813951723822645278",
            format_type: r.u3.APNG,
            description: "Cheerful Choco gives thumbs up",
            name: "Nice",
          },
        ];
    },
    35125: function (e, t, n) {
      n.d(t, {
        PA: function () {
          return d;
        },
        Tn: function () {
          return l;
        },
        _i: function () {
          return T;
        },
        eI: function () {
          return I;
        },
        vp: function () {
          return f;
        },
        y8: function () {
          return _;
        },
      });
      var r = n(367907),
        i = n(200876),
        o = n(430824),
        a = n(594174);
      n(709054), n(523361);
      var u = n(981631),
        s = n(689938);
      function l(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o,
          } = e,
          { content: a, formatParams: u } = E({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o,
          });
        return a.format(u);
      }
      function d(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o,
          } = e,
          { content: a, formatParams: u } = E({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o,
          });
        return a.astFormat(u);
      }
      function c(e, t) {
        var n, r;
        let i = o.Z.getGuild(e),
          a =
            null !== (n = null == t ? void 0 : t.total_months_subscribed) &&
            void 0 !== n
              ? n
              : 0;
        return {
          guild: i,
          totalMonthsSubscribed: a,
          showWithDuration: a > 0,
          isRenewal:
            null !== (r = null == t ? void 0 : t.is_renewal) &&
            void 0 !== r &&
            r,
        };
      }
      function E(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: r,
            roleSubscriptionOnClickHandler: i,
            guildId: o,
            roleSubscriptionData: a,
          } = e,
          {
            guild: u,
            totalMonthsSubscribed: l,
            showWithDuration: d,
            isRenewal: E,
          } = c(o, a);
        return (
          (t = d
            ? E
              ? s.Z.Messages
                  .SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION
              : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION
            : E
              ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW
              : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN),
          {
            content: t,
            formatParams: {
              username: n,
              usernameHook: r,
              guildName: null == u ? void 0 : u.name,
              handleGuildNameClick: i,
              tierName: null == a ? void 0 : a.tier_name,
              months: l,
            },
          }
        );
      }
      function f(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: r = u.dG4,
            roleSubscriptionOnClickHandler: i = u.dG4,
            guildId: o,
            roleSubscriptionData: a,
          } = e,
          {
            guild: l,
            totalMonthsSubscribed: d,
            showWithDuration: E,
            isRenewal: f,
          } = c(o, a),
          I = {
            guildName: null == l ? void 0 : l.name,
            tierName: null == a ? void 0 : a.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: i,
          };
        return (t = E
          ? f
            ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat(
                { ...I, months: d },
              )
            : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat(
                { ...I, months: d },
              )
          : f
            ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(
                I,
              )
            : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(
                I,
              ));
      }
      function I(e) {
        return (0, i.l)(e);
      }
      function _(e, t, n, i) {
        var o;
        r.ZP.trackWithMetadata(
          u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: e,
            user_id:
              null === (o = a.default.getCurrentUser()) || void 0 === o
                ? void 0
                : o.id,
            channel_id: t,
            message_id: n,
            role_subscription_listing_id: i,
          },
        );
      }
      function T(e, t) {
        var n;
        return {
          guild_id: e.guild_id,
          sender:
            null === (n = a.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id,
          target_user: t.author.id,
          channel_id: e.id,
          message_id: t.id,
        };
      }
    },
    821864: function (e, t, n) {
      n.d(t, {
        I4: function () {
          return E;
        },
        Sn: function () {
          return d;
        },
        U3: function () {
          return I;
        },
        Ui: function () {
          return f;
        },
        W4: function () {
          return l;
        },
        gq: function () {
          return c;
        },
        kZ: function () {
          return s;
        },
      });
      var r = n(544891),
        i = n(570140),
        o = n(555573),
        a = n(581364),
        u = n(981631);
      function s() {
        i.Z.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function l(e, t, n) {
        i.Z.dispatch({
          applicationId: e,
          commandId: t,
          permissions: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function d(e, t) {
        r.tn.get(u.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(
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
        let o = [];
        try {
          let i = await r.tn.get(
            u.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
          );
          i.ok && (o = i.body.permissions);
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
          permissions: o,
        });
      }
      function E(e) {
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
      async function I(e) {
        let {
            applicationId: t,
            commandId: n,
            defaultEveryoneValue: r,
            defaultEverywhereValue: u,
            guildId: s,
            permissions: l,
          } = e,
          d =
            n === t
              ? (function (e, t, n, r) {
                  if (!n || !r) return t;
                  let i = { [e]: n, [(0, a.bD)(e)]: r };
                  return t.filter((e) => {
                    let t = i[e.id];
                    return null == t || e.permission !== t;
                  });
                })(s, l, r, u)
              : l,
          c = await o.dh(t, s, n, d);
        c.ok &&
          i.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: n,
            guildId: s,
            permissions: c.body.permissions,
          });
      }
    },
    978983: function (e, t, n) {
      var r = n(735250);
      n(470079);
      var i = n(481060),
        o = n(882441);
      t.Z = () =>
        (0, r.jsx)("div", {
          className: o.loadingWrapper,
          children: (0, r.jsx)(i.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    823162: function (e, t, n) {
      n.d(t, {
        Xy: function () {
          return d;
        },
        e4: function () {
          return s;
        },
        gN: function () {
          return c;
        },
        hi: function () {
          return f;
        },
        qR: function () {
          return l;
        },
        r_: function () {
          return E;
        },
      });
      var r = n(544891),
        i = n(570140),
        o = n(893776),
        a = n(290323),
        u = n(981631);
      async function s(e) {
        await r.tn.put({
          url: u.ANM.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: a.h.ACCEPTED },
        }),
          i.Z.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: e,
          });
      }
      function l(e) {
        return r.tn.put({
          url: u.ANM.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: a.h.UNSPECIFIED },
        });
      }
      function d(e) {
        return r.tn.put({
          url: u.ANM.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: a.h.PENDING },
        });
      }
      function c(e) {
        return r.tn.del({ url: u.ANM.CHANNEL_RECIPIENT_CONSENT(e) });
      }
      function E(e) {
        return r.tn.put({
          url: u.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: e },
        });
      }
      function f() {
        o.Z.getLocationMetadata();
      }
    },
    290323: function (e, t, n) {
      var r, i;
      n.d(t, {
        h: function () {
          return r;
        },
      }),
        ((i = r || (r = {}))[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.PENDING = 1)] = "PENDING"),
        (i[(i.ACCEPTED = 2)] = "ACCEPTED"),
        (i[(i.REJECTED = 3)] = "REJECTED");
    },
    977059: function (e, t, n) {
      n.d(t, {
        R: function () {
          return o;
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
      function o(e) {
        let { location: t } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    441894: function (e, t, n) {
      n.d(t, {
        J: function () {
          return s;
        },
      }),
        n(47120);
      var r = n(442837),
        i = n(592125),
        o = n(19780),
        a = n(977059),
        u = n(760373);
      function s(e) {
        let { channelId: t, location: n } = e,
          { enabled: s } = (0, a.S)({ location: n });
        return (0, r.e7)(
          [o.Z, i.Z],
          () =>
            (function (e, t) {
              var n;
              let [r, a] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [o.Z, i.Z];
              if (!t || null == e || r.getChannelId() !== e) return !1;
              let s = a.getChannel(e);
              if (null == s || s.isGuildStageVoice()) return !1;
              let l =
                null === (n = r.getSecureFramesState()) || void 0 === n
                  ? void 0
                  : n.version;
              return null != l && l > u.HK;
            })(t, s, [o.Z, i.Z]),
          [t, s],
        );
      }
    },
    897769: function (e, t, n) {
      n.d(t, {
        S: function () {
          return o;
        },
      });
      var r = n(442837),
        i = n(359119);
      function o(e, t) {
        return (0, r.e7)([i.ZP], () => i.ZP.getChannelSafetyWarnings(e), [e])
          .filter((e) => e.type === t)
          .find((e) => null == e.dismiss_timestamp);
      }
    },
    981312: function (e, t, n) {
      n.d(t, {
        U: function () {
          return a;
        },
      });
      var r = n(442837),
        i = n(594174),
        o = n(699816);
      function a(e) {
        let t = (0, r.e7)([i.default], () => {
            var e;
            return null === (e = i.default.getCurrentUser()) || void 0 === e
              ? void 0
              : e.nsfwAllowed;
          }),
          n = (0, o.zL)(e);
        return !1 === t || n;
      }
    },
    13279: function (e, t, n) {
      n.d(t, {
        z: function () {
          return s;
        },
      });
      var r = n(359119),
        i = n(897769),
        o = n(237292),
        a = n(403485),
        u = n(604849);
      function s(e, t) {
        let n = (0, o.y0)({ location: t }),
          s = (0, u.c)(),
          l = (0, a.h)(e),
          d = (0, i.S)(e, r.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
        if (
          !(
            !n ||
            !s ||
            0 === l.length ||
            l.some(
              (e) =>
                e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                (e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2 &&
                  null != e.dismiss_timestamp),
            )
          )
        )
          return d;
      }
    },
    403485: function (e, t, n) {
      n.d(t, {
        h: function () {
          return o;
        },
      });
      var r = n(442837),
        i = n(359119);
      function o(e) {
        return (0, r.e7)([i.ZP], () => i.ZP.getChannelSafetyWarnings(e), [
          e,
        ]).filter(
          (e) =>
            e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
            e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        );
      }
    },
    604849: function (e, t, n) {
      n.d(t, {
        c: function () {
          return a;
        },
      });
      var r = n(442837),
        i = n(581883),
        o = n(981312);
      let a = () => {
        let e = (0, r.e7)([i.Z], () => {
          var e, t, n;
          return (
            null ===
              (n =
                null === (t = i.Z.settings.privacy) || void 0 === t
                  ? void 0
                  : null === (e = t.inappropriateConversationWarnings) ||
                      void 0 === e
                    ? void 0
                    : e.value) ||
            void 0 === n ||
            n
          );
        });
        return (0, o.U)("safety_warnings_setting") && e;
      };
    },
    570870: function (e, t, n) {
      var r = n(735250),
        i = n(470079),
        o = n(512722),
        a = n.n(o),
        u = n(442837),
        s = n(481060),
        l = n(10718),
        d = n(667204),
        c = n(826298),
        E = n(276022),
        f = n(978983),
        I = n(430824),
        _ = n(594174),
        T = n(981631),
        N = n(689079),
        p = n(689938),
        S = n(359522);
      t.Z = (e) => {
        let t,
          {
            commandType: n,
            commandTargetId: o,
            channel: A,
            guildId: h,
            onHeightUpdate: O,
            context: C,
          } = e,
          R = (0, u.e7)([I.Z], () => I.Z.getGuild(null != h ? h : A.guild_id)),
          y = (0, u.e7)([_.default], () => _.default.getUser(o)),
          g = (0, E.Z)({
            user: y,
            guildId: null == R ? void 0 : R.id,
            channel: A,
            context: C,
          }),
          {
            commands: v,
            sectionDescriptors: m,
            loading: M,
          } = l.wi(A, { commandTypes: [n] }, { limit: N.lr }),
          { sections: Z } = i.useMemo(() => {
            let e = {};
            return (
              m.forEach((t) => {
                e[t.id] = t;
              }),
              { sections: e }
            );
          }, [m]),
          P = i.useRef(M.current);
        i.useEffect(() => {
          M.current !== P.current &&
            ((P.current = M.current), null == O || O());
        }, [M, O]);
        let G = i.useCallback(
          (e) => {
            a()(null != A, "menu item should not show if channel is null");
            let t = Z[e.applicationId],
              n = null != t ? (0, c.ky)(t) : void 0;
            return (0, r.jsx)(
              s.MenuItem,
              {
                id: e.id,
                label: e.displayName,
                iconLeft: () =>
                  null != n
                    ? (0, r.jsx)(n, {
                        channel: A,
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
                    context: { channel: A, guild: R },
                    commandTargetId: o,
                  });
                },
              },
              e.id,
            );
          },
          [A, R, o, Z],
        );
        if (
          (M.current
            ? (t = (0, r.jsx)(
                s.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, r.jsx)(f.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((t =
                0 === v.length
                  ? (0, r.jsx)(
                      s.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: p.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : v.map(G)),
              null != g &&
                (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                    t,
                    (0, r.jsx)(s.MenuSeparator, {}, "separator"),
                    g,
                  ],
                }))),
          !T.TPd.TEXTUAL.has(A.type))
        ) {
          if (null == g) return null;
          t = g;
        }
        return (0, r.jsx)(s.MenuItem, {
          id: "apps",
          label: p.Z.Messages.APPS,
          listClassName: S.list,
          children: t,
        });
      };
    },
    882441: function (e, t, n) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    465094: function (e, t, n) {
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
    100535: function (e, t, n) {
      e.exports = { text: "text_b953a6" };
    },
    359522: function (e, t, n) {
      e.exports = { list: "list_fd4745" };
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
      function i(e, t, n, i, a = "SHA-256") {
        return new Promise((u, s) => {
          a in r ||
            s(
              RangeError(
                `Valid hash algorithm values are any of ${Object.keys(r).toString()}`,
              ),
            ),
            "string" == typeof e
              ? (e = new TextEncoder().encode(e))
              : e instanceof ArrayBuffer
                ? (e = new Uint8Array(e))
                : ArrayBuffer.isView(e) ||
                  s(
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
                  : s(
                      RangeError(
                        "S should be string, ArrayBuffer, TypedArray, DataView",
                      ),
                    ),
            crypto.subtle
              .importKey("raw", e, "PBKDF2", !1, ["deriveBits"])
              .then(
                (l) => {
                  let d = { name: "PBKDF2", hash: a, salt: t, iterations: n };
                  crypto.subtle.deriveBits(d, l, 8 * i).then(
                    (e) => u(e),
                    (l) => {
                      (async function (e, t, n, i, a) {
                        if (!(a in r))
                          throw RangeError(
                            `Valid hash algorithm values are any of ${Object.keys(r).toString()}`,
                          );
                        if (!Number.isInteger(n) || n <= 0)
                          throw RangeError("c must be a positive integer");
                        let u = r[a].outputLength;
                        if (
                          !Number.isInteger(i) ||
                          i <= 0 ||
                          i >= (4294967296 - 1) * u
                        )
                          throw RangeError(
                            "dkLen must be a positive integer < (2 ** 32 - 1) * hLen",
                          );
                        let s = Math.ceil(i / u),
                          l = i - (s - 1) * u,
                          d = Array(s);
                        0 === e.byteLength &&
                          (e = new Uint8Array(r[a].blockSize));
                        let c = await crypto.subtle.importKey(
                            "raw",
                            e,
                            { name: "HMAC", hash: { name: a } },
                            !0,
                            ["sign"],
                          ),
                          E = async function (e, t) {
                            return new Uint8Array(
                              await crypto.subtle.sign("HMAC", e, t),
                            );
                          };
                        for (let e = 0; e < s; e++)
                          d[e] = await f(c, t, n, e + 1);
                        async function f(e, t, n, r) {
                          let i = await E(
                              e,
                              o(
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
                            a = i;
                          for (let t = 1; t < n; t++)
                            (function (e, t) {
                              for (let n = 0; n < e.length; n++) e[n] ^= t[n];
                            })(i, (a = await E(e, a)));
                          return i;
                        }
                        return (
                          (d[s - 1] = d[s - 1].slice(0, l)), o(...d).buffer
                        );
                      })(e, t, n, i, a).then(
                        (e) => u(e),
                        (e) => s(e),
                      );
                    },
                  );
                },
                (e) => s(e),
              );
        });
      }
      function o(...e) {
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
          return s;
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
        o = function (e, t) {
          for (let n = 0; n < e.length; n++) e[n] ^= t[n];
        },
        a = function (e) {
          let t = e.byteLength / 128,
            n = 16 * (2 * t - 1),
            r = e.slice(n, n + 16),
            a = new Uint32Array(e.length / 2),
            u = !0;
          for (let n = 0; n < 2 * t; n++) {
            let t = 16 * n;
            o(r, e.subarray(t, t + 16)), i(r);
            let s = 16 * (n >> 1);
            if (u) for (let t = 0; t < 16; t++) e[s + t] = r[t];
            else for (let e = 0; e < 16; e++) a[s + e] = r[e];
            u = !u;
          }
          let s = 16 * t;
          for (let t = 0; t < s; t++) e[s + t] = a[t];
        },
        u = function (e, t) {
          let n = e.byteLength / 128,
            r = Array(t);
          for (let n = 0; n < t; n++) (r[n] = e.slice(0)), a(e);
          for (let i = 0; i < t; i++) {
            let i =
              new DataView(e.buffer, 64 * (2 * n - 1), 64).getUint32(0, !0) % t;
            o(e, r[i]), a(e);
          }
        },
        s = async function (e, t, n, i) {
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
          let o = void 0 !== i && void 0 !== i.N ? i.N : 131072,
            a = void 0 !== i && void 0 !== i.r ? i.r : 8,
            s = void 0 !== i && void 0 !== i.p ? i.p : 1;
          if (!Number.isInteger(o) || o <= 0 || 0 != (o & (o - 1)))
            throw RangeError("N must be a power of 2");
          if (
            !Number.isInteger(a) ||
            a <= 0 ||
            !Number.isInteger(s) ||
            s <= 0 ||
            s * a > 1073741823.75
          )
            throw RangeError(
              "Parallelization parameter p and blocksize parameter r must be positive integers satisfying p ≤ (2^32− 1) * hLen / MFLen where hLen is 32 and MFlen is 128 * r.",
            );
          let l = new Uint32Array(await (0, r.Z)(e, t, 1, 128 * s * a));
          for (let e = 0; e < s; e++) {
            let t = 32 * a,
              n = e * t,
              r = l.slice(n, n + t);
            u(r, o);
            for (let e = 0; e < 32 * a; e++) l[n + e] = r[e];
          }
          return await (0, r.Z)(e, l, 1, n);
        };
    },
  },
]);
//# sourceMappingURL=8d5bbcb70a4e05551c43.js.map
