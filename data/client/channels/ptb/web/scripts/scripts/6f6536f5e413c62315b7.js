"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39285"],
  {
    787014: function (e, n, t) {
      t.d(n, {
        S1: function () {
          return d;
        },
        pW: function () {
          return f;
        },
        wk: function () {
          return N;
        },
        xv: function () {
          return c;
        },
        zc: function () {
          return E;
        },
        zz: function () {
          return _;
        },
      }),
        t(789020);
      var i = t(544891),
        l = t(570140),
        r = t(408987);
      t(57132), t(777639);
      var a = t(346479);
      t(388610);
      var u = t(592125),
        o = t(37234),
        s = t(981631);
      function d(e, n, t) {
        l.Z.dispatch({
          type: "CHANNEL_SETTINGS_INIT",
          channelId: e,
          location: n,
          subsection: t,
        });
      }
      function c() {
        l.Z.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
      }
      function E(e) {
        l.Z.dispatch({ type: "CHANNEL_SETTINGS_SET_SECTION", section: e });
      }
      function f(e) {
        let {
          name: n,
          type: t,
          topic: i,
          bitrate: r,
          userLimit: a,
          nsfw: u,
          flags: o,
          rateLimitPerUser: s,
          defaultThreadRateLimitPerUser: d,
          defaultAutoArchiveDuration: c,
          template: E,
          defaultReactionEmoji: f,
          rtcRegion: N,
          videoQualityMode: _,
          autoArchiveDuration: T,
          locked: S,
          invitable: C,
          availableTags: h,
          defaultSortOrder: I,
          defaultForumLayout: A,
          iconEmoji: p,
          themeColor: v,
        } = e;
        l.Z.dispatch({
          type: "CHANNEL_SETTINGS_UPDATE",
          name: n,
          channelType: t,
          topic: i,
          bitrate: r,
          userLimit: a,
          nsfw: u,
          flags: o,
          rateLimitPerUser: s,
          defaultThreadRateLimitPerUser: d,
          defaultAutoArchiveDuration: c,
          template: E,
          defaultReactionEmoji: f,
          rtcRegion: N,
          videoQualityMode: _,
          autoArchiveDuration: T,
          locked: S,
          invitable: C,
          availableTags: h,
          defaultSortOrder: I,
          defaultForumLayout: A,
          iconEmoji: p,
          themeColor: v,
        });
      }
      async function N(e, n) {
        let {
            name: t,
            type: o,
            position: d,
            topic: c,
            bitrate: E,
            userLimit: f,
            nsfw: N,
            flags: _,
            permissionOverwrites: T,
            rateLimitPerUser: S,
            defaultThreadRateLimitPerUser: C,
            defaultAutoArchiveDuration: h,
            template: I,
            defaultReactionEmoji: A,
            rtcRegion: p,
            videoQualityMode: v,
            autoArchiveDuration: m,
            locked: L,
            invitable: g,
            availableTags: y,
            defaultSortOrder: Z,
            defaultForumLayout: O,
            iconEmoji: U,
            themeColor: R,
          } = n,
          G = u.Z.getChannel(e);
        return (
          l.Z.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
          await a.Z.unarchiveThreadIfNecessary(e),
          i.tn
            .patch({
              url: s.ANM.CHANNEL(e),
              body: {
                name: t,
                type: o,
                position: d,
                topic: c,
                bitrate: E,
                user_limit: f,
                nsfw: N,
                flags: _,
                permission_overwrites: T,
                rate_limit_per_user: S,
                default_thread_rate_limit_per_user: C,
                default_auto_archive_duration: h,
                template: I,
                rtc_region: p,
                video_quality_mode: v,
                auto_archive_duration: m,
                locked: L,
                invitable: g,
                default_reaction_emoji:
                  null != A
                    ? {
                        emoji_id: null == A ? void 0 : A.emojiId,
                        emoji_name: null == A ? void 0 : A.emojiName,
                      }
                    : null === A
                      ? null
                      : void 0,
                available_tags:
                  null == y
                    ? void 0
                    : y.map((e) => ({
                        id: e.id,
                        name: e.name,
                        emoji_id: e.emojiId,
                        emoji_name: e.emojiName,
                        moderated: e.moderated,
                      })),
                default_sort_order: Z,
                default_forum_layout: O,
                icon_emoji:
                  null != U
                    ? { id: U.id, name: U.name }
                    : null === U
                      ? null
                      : void 0,
                theme_color: R,
              },
              oldFormErrors: !0,
            })
            .then(
              (n) => {
                l.Z.dispatch({
                  type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                  channelId: e,
                });
                let t = null == G ? void 0 : G.getGuildId();
                return (
                  null != t &&
                    !(null == G ? void 0 : G.isThread()) &&
                    r.Z.checkGuildTemplateDirty(t),
                  n
                );
              },
              (e) => (
                l.Z.dispatch({
                  type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                  errors: e.body,
                }),
                e
              ),
            )
        );
      }
      function _(e) {
        let n = u.Z.getChannel(e);
        i.tn.del({ url: s.ANM.CHANNEL(e), oldFormErrors: !0 }).then(() => {
          let e = null == n ? void 0 : n.getGuildId();
          null != e &&
            !(null == n ? void 0 : n.isThread()) &&
            r.Z.checkGuildTemplateDirty(e),
            c();
        });
      }
      n.ZP = {
        init: d,
        open: function (e, n, t) {
          d(e, n, t), (0, o.jN)(s.S9g.CHANNEL_SETTINGS);
        },
        close: c,
        setSection: E,
        selectPermissionOverwrite: function (e) {
          l.Z.dispatch({
            type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
            overwriteId: e,
          });
        },
        updateChannel: f,
        saveChannel: N,
        deleteChannel: _,
        updateVoiceChannelStatus: function (e, n) {
          return i.tn.put({
            url: s.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: n },
          });
        },
        removeLinkedLobby: function (e) {
          return i.tn.del({ url: s.ANM.CHANNEL_LINKED_LOBBY(e) });
        },
      };
    },
    323597: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return T;
        },
      });
      var i = t(735250);
      t(470079);
      var l = t(442837),
        r = t(481060),
        a = t(787014),
        u = t(904245),
        o = t(787263),
        s = t(660189),
        d = t(144140),
        c = t(314897),
        E = t(496675),
        f = t(709054),
        N = t(981631),
        _ = t(689938);
      function T(e) {
        let n = e.isForumPost(),
          t = (0, l.e7)([c.default], () => e.isOwner(c.default.getId()), [e]),
          { canManageChannel: T, canAccessChannel: S } = (0, l.cj)(
            [E.Z],
            () => ({
              canAccessChannel: E.Z.can(e.accessPermissions, e),
              canManageChannel: E.Z.can(
                e.isThread() ? N.Plq.MANAGE_THREADS : N.Plq.MANAGE_CHANNELS,
                e,
              ),
            }),
            [e],
          ),
          C = (0, l.e7)(
            [d.Z],
            () => {
              var n;
              return null !== (n = d.Z.getCount(e.id)) && void 0 !== n ? n : 0;
            },
            [e.id],
          ),
          { firstMessage: h } = (0, l.e7)([s.Z], () => s.Z.getMessage(e.id), [
            e.id,
          ]),
          I = n && (T || (t && C < 1)),
          A = n && t && !T && C > 0 && null != h;
        return S && (T || I || A)
          ? (0, i.jsx)(r.MenuItem, {
              id: "delete-channel",
              label: (() => {
                if (e.type === N.d4z.GUILD_CATEGORY)
                  return _.Z.Messages.DELETE_CATEGORY;
                if (e.isForumPost())
                  return I
                    ? _.Z.Messages.DELETE_FORUM_POST
                    : _.Z.Messages.DELETE_MESSAGE;
                if (e.isThread()) return _.Z.Messages.DELETE_THREAD;
                return _.Z.Messages.DELETE_CHANNEL;
              })(),
              color: "danger",
              action: () => {
                (0, o.w)(e, function () {
                  A
                    ? u.Z.deleteMessage(
                        e.id,
                        f.default.castChannelIdAsMessageId(e.id),
                      )
                    : a.ZP.deleteChannel(e.id);
                });
              },
            })
          : null;
      }
    },
    787263: function (e, n, t) {
      t.d(n, {
        w: function () {
          return r;
        },
      });
      var i = t(735250);
      t(470079);
      var l = t(481060);
      function r(e, n) {
        return (0, l.openModalLazy)(async () => {
          let { default: l } = await Promise.all([
            t.e("53115"),
            t.e("79521"),
          ]).then(t.bind(t, 207540));
          return (t) =>
            (0, i.jsx)(l, {
              ...t,
              onConfirm: () => {
                t.onClose(), n();
              },
              channel: e,
            });
        });
      }
    },
    117984: function (e, n, t) {
      t.d(n, {
        CM: function () {
          return _;
        },
        UT: function () {
          return N;
        },
        _Z: function () {
          return h;
        },
        kj: function () {
          return E;
        },
        oC: function () {
          return f;
        },
        s3: function () {
          return S;
        },
        uA: function () {
          return C;
        },
        xh: function () {
          return T;
        },
      }),
        t(47120);
      var i = t(524437),
        l = t(675478),
        r = t(592125),
        a = t(496675),
        u = t(709054),
        o = t(853856),
        s = t(231338);
      function d() {
        let e = o.Z.getFavoriteChannels(),
          n = 1;
        for (let t in e) n = Math.max(n, e[t].order);
        return n + 1;
      }
      function c(e) {
        for (let n in e) {
          let t = e[n];
          if (null == t) {
            delete e[n];
            continue;
          }
          if (t.type === i.Dd.CATEGORY) continue;
          let l = r.Z.getChannel(n);
          if (null == l) {
            delete e[n];
            continue;
          }
          if (!l.isPrivate()) {
            if (!a.Z.can(s.Pl.VIEW_CHANNEL, l)) {
              delete e[n];
              continue;
            }
          }
        }
      }
      function E(e, n) {
        if (!o.Z.isFavorite(e))
          l.hW.updateAsync(
            "favorites",
            (t) => {
              (t.favoriteChannels[e] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: d(),
                parentId: null != n ? n : "0",
              })),
                c(t.favoriteChannels);
            },
            l.fy.FREQUENT_USER_ACTION,
          );
      }
      function f(e) {
        let n = o.Z.getFavorite(e);
        if (null != n)
          l.hW.updateAsync(
            "favorites",
            (t) => {
              if ((delete t.favoriteChannels[e], n.type === i.Dd.CATEGORY))
                for (let n in t.favoriteChannels)
                  t.favoriteChannels[n].parentId === e &&
                    (t.favoriteChannels[n].parentId = "0");
              c(t.favoriteChannels);
            },
            l.fy.INFREQUENT_USER_ACTION,
          );
      }
      function N(e, n) {
        if (!!o.Z.isFavorite(e))
          l.hW.updateAsync(
            "favorites",
            (t) => {
              t.favoriteChannels[e].nickname = null != n ? n : "";
            },
            l.fy.INFREQUENT_USER_ACTION,
          );
      }
      function _(e) {
        let n = u.default.fromTimestamp(Date.now());
        l.hW.updateAsync(
          "favorites",
          (t) => {
            t.favoriteChannels[n] = i.aV.create({
              nickname: e,
              type: i.Dd.CATEGORY,
              position: d(),
              parentId: "0",
            });
          },
          l.fy.FREQUENT_USER_ACTION,
        );
      }
      function T(e) {
        f(e);
      }
      function S(e) {
        l.hW.updateAsync(
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
          l.fy.FREQUENT_USER_ACTION,
        );
      }
      function C(e, n) {
        l.hW.updateAsync(
          "favorites",
          (t) => {
            t.favoriteChannels[e].parentId = null != n ? n : "0";
          },
          l.fy.FREQUENT_USER_ACTION,
        );
      }
      function h() {
        l.hW.updateAsync(
          "favorites",
          (e) => {
            e.muted = !e.muted;
          },
          l.fy.INFREQUENT_USER_ACTION,
        );
      }
    },
    388610: function (e, n, t) {
      let i, l, r, a, u, o;
      t(724458), t(789020), t(47120);
      var s,
        d,
        c,
        E,
        f = t(392711),
        N = t.n(f),
        _ = t(913527),
        T = t.n(_),
        S = t(442837),
        C = t(544891),
        h = t(570140),
        I = t(131704),
        A = t(601964),
        p = t(758449),
        v = t(598077),
        m = t(592125),
        L = t(981631);
      let g = L.QZA.CLOSED,
        y = {},
        Z = {},
        O = !1,
        U = !1,
        R = null,
        G = [
          "name",
          "type",
          "topic_",
          "bitrate_",
          "userLimit_",
          "nsfw_",
          "flags_",
          "rateLimitPerUser_",
          "defaultThreadRateLimitPerUser",
          "defaultAutoArchiveDuration",
          "template",
          "defaultReactionEmoji",
          "rtcRegion",
          "videoQualityMode",
          "threadMetadata",
          "banner",
          "availableTags",
          "defaultSortOrder",
          "defaultForumLayout",
          "iconEmoji",
          "themeColor",
        ];
      function M(e) {
        let n = m.Z.getChannel(e.channelId);
        if (null == n) return D();
        (g = L.QZA.OPEN),
          (a = r = n),
          (R = "location" in e && null != e.location ? e.location : null),
          (l = "subsection" in e ? e.subsection : null),
          null != a && (a = a.set("nsfw", a.isNSFW())),
          (u = m.Z.getChannel(a.parent_id)),
          (o = a.getGuildId()),
          (y = {}),
          H({
            type: "CHANNEL_SETTINGS_SET_SECTION",
            section: null != i ? i : L.CoT.OVERVIEW,
            subsection: l,
          });
      }
      function H(e) {
        (i = e.section),
          (l = e.subsection),
          null != a &&
            i === L.CoT.INSTANT_INVITES &&
            ((O = !0),
            C.tn
              .get({ url: L.ANM.INSTANT_INVITES(a.id), oldFormErrors: !0 })
              .then(
                (e) => {
                  (O = !1),
                    h.Z.dispatch({
                      type: "CHANNEL_SETTINGS_LOADED_INVITES",
                      invites: e.body,
                    });
                },
                () => (O = !1),
              ));
      }
      function D() {
        (U = !1),
          (g = L.QZA.CLOSED),
          (i = null),
          (a = r = null),
          (u = null),
          (Z = {});
      }
      let P = N().debounce(() => {
        if (null == a || null == r) return !1;
        let e = a.toJS(),
          n = r.toJS();
        G.every((t) => e[t] === n[t]) && a !== r && ((a = r), F.emitChange());
      }, 500);
      function b(e) {
        return new p.Z({
          code: e.code,
          temporary: e.temporary,
          revoked: e.revoked,
          inviter: null != e.inviter ? new v.Z(e.inviter) : null,
          channel: (0, I.jD)(e.channel),
          guild: null != e.guild ? new A.ZP(e.guild) : null,
          uses: e.uses,
          maxUses: e.max_uses,
          maxAge: e.max_age,
          createdAt: T()(e.created_at),
          type: e.type,
        });
      }
      class w extends (s = S.ZP.Store) {
        initialize() {
          this.waitFor(m.Z);
        }
        hasChanges() {
          return a !== r;
        }
        isOpen() {
          return U;
        }
        getSection() {
          return i;
        }
        getInvites() {
          return { invites: Z, loading: O };
        }
        showNotice() {
          return this.hasChanges();
        }
        getChannel() {
          return a;
        }
        getFormState() {
          return g;
        }
        getCategory() {
          return u;
        }
        getProps() {
          return {
            submitting: g === L.QZA.SUBMITTING,
            errors: y,
            channel: a,
            section: i,
            subsection: l,
            invites: Z,
            selectedOverwriteId: o,
            hasChanges: this.hasChanges(),
            analyticsLocation: R,
          };
        }
      }
      (E = "ChannelSettingsStore"),
        (c = "displayName") in (d = w)
          ? Object.defineProperty(d, c, {
              value: E,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (d[c] = E);
      let F = new w(h.Z, {
        CHANNEL_SETTINGS_INIT: M,
        CHANNEL_SETTINGS_OPEN: function (e) {
          (U = !0), M(e);
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
          (g = L.QZA.SUBMITTING), (y = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
          (r = a), (g = L.QZA.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
          var n;
          (g = L.QZA.OPEN),
            (y = Object.keys(
              null !== (n = e.errors) && void 0 !== n ? n : {},
            ).reduce((n, t) => {
              let i = e.errors[t];
              return (0, f.isArray)(i) ? (n[t] = i.join("\n")) : (n[t] = i), n;
            }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: D,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
          let { overwriteId: n } = e;
          o = n;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
          let {
            name: n,
            channelType: t,
            topic: i,
            bitrate: l,
            userLimit: r,
            nsfw: u,
            flags: o,
            rateLimitPerUser: s,
            defaultThreadRateLimitPerUser: d,
            autoArchiveDuration: c,
            locked: E,
            invitable: f,
            defaultAutoArchiveDuration: N,
            template: _,
            defaultReactionEmoji: T,
            rtcRegion: S,
            videoQualityMode: C,
            availableTags: h,
            defaultSortOrder: I,
            defaultForumLayout: A,
            iconEmoji: p,
            themeColor: v,
          } = e;
          if (null == a) return !1;
          null != n && (a = a.set("name", n)),
            null != i && (a = a.set("topic", i)),
            null != l && (a = a.set("bitrate", l)),
            null != r && (a = a.set("userLimit", r)),
            null != u && (a = a.set("nsfw", u)),
            null != o && (a = a.set("flags", o)),
            null != s && (a = a.set("rateLimitPerUser", s)),
            null != d && (a = a.set("defaultThreadRateLimitPerUser", d)),
            null != c &&
              (a = a.set("threadMetadata", {
                ...a.threadMetadata,
                autoArchiveDuration: c,
              })),
            null != E &&
              (a = a.set("threadMetadata", { ...a.threadMetadata, locked: E })),
            null != f &&
              (a = a.set("threadMetadata", {
                ...a.threadMetadata,
                invitable: f,
              })),
            null != N && (a = a.set("defaultAutoArchiveDuration", N)),
            null != _ && (a = a.set("template", _)),
            null != t && (a = a.set("type", t)),
            void 0 !== S && (a = a.set("rtcRegion", S)),
            null != C && (a = a.set("videoQualityMode", C)),
            void 0 !== T && (a = a.set("defaultReactionEmoji", T)),
            null != h && (a = a.set("availableTags", h)),
            null != I && (a = a.set("defaultSortOrder", I)),
            null != A && (a = a.set("defaultForumLayout", A)),
            void 0 !== p && (a = a.set("iconEmoji", p)),
            null != v && (a = a.set("themeColor", v)),
            P();
        },
        CHANNEL_SETTINGS_SET_SECTION: H,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
          (Z = {}),
            e.invites.forEach((e) => {
              Z[e.code] = b(e);
            });
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: n } = e;
          if (null == a) return !1;
          let t = !1;
          for (let e of n)
            (function (e) {
              if (null == r || r.id !== e) return !1;
              if (r === a) {
                let n = m.Z.getChannel(e);
                if (null == n) return !1;
                (a = r = n), (u = m.Z.getChannel(a.parent_id));
              } else {
                let n = m.Z.getChannel(e);
                if (null == n) return !1;
                (r = n),
                  null != a &&
                    ((a = a.set(
                      "permissionOverwrites",
                      r.permissionOverwrites,
                    )),
                    (u = m.Z.getChannel(a.parent_id)));
              }
              return !0;
            })(e.id) &&
              null != a &&
              (null != o &&
                null == a.permissionOverwrites[o] &&
                (o = a.getGuildId()),
              (t = !0));
          return t;
        },
        CHANNEL_DELETE: function (e) {
          let {
            channel: { id: n },
          } = e;
          if (null == a || a.id !== n) return !1;
          g = L.QZA.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
          (Z = { ...Z }), delete Z[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
          Z = { ...Z, [e.invite.code]: b(e.invite) };
        },
      });
      n.Z = 12633 == t.j ? F : null;
    },
  },
]);
//# sourceMappingURL=6f6536f5e413c62315b7.js.map
