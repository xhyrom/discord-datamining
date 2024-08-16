"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39285"],
  {
    787014: function (e, t, n) {
      n.d(t, {
        S1: function () {
          return d;
        },
        pW: function () {
          return f;
        },
        wk: function () {
          return _;
        },
        xv: function () {
          return c;
        },
        zc: function () {
          return E;
        },
        zz: function () {
          return N;
        },
      }),
        n(789020);
      var i = n(544891),
        l = n(570140),
        r = n(408987);
      n(57132), n(777639);
      var a = n(346479);
      n(388610);
      var u = n(592125),
        o = n(37234),
        s = n(981631);
      function d(e, t, n) {
        l.Z.dispatch({
          type: "CHANNEL_SETTINGS_INIT",
          channelId: e,
          location: t,
          subsection: n,
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
          name: t,
          type: n,
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
          rtcRegion: _,
          videoQualityMode: N,
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
          name: t,
          channelType: n,
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
          rtcRegion: _,
          videoQualityMode: N,
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
      async function _(e, t) {
        let {
            name: n,
            type: o,
            position: d,
            topic: c,
            bitrate: E,
            userLimit: f,
            nsfw: _,
            flags: N,
            permissionOverwrites: T,
            rateLimitPerUser: S,
            defaultThreadRateLimitPerUser: C,
            defaultAutoArchiveDuration: h,
            template: I,
            defaultReactionEmoji: A,
            rtcRegion: p,
            videoQualityMode: v,
            autoArchiveDuration: m,
            locked: g,
            invitable: y,
            availableTags: Z,
            defaultSortOrder: L,
            defaultForumLayout: O,
            iconEmoji: U,
            themeColor: R,
          } = t,
          G = u.Z.getChannel(e);
        return (
          l.Z.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
          await a.Z.unarchiveThreadIfNecessary(e),
          i.tn
            .patch({
              url: s.ANM.CHANNEL(e),
              body: {
                name: n,
                type: o,
                position: d,
                topic: c,
                bitrate: E,
                user_limit: f,
                nsfw: _,
                flags: N,
                permission_overwrites: T,
                rate_limit_per_user: S,
                default_thread_rate_limit_per_user: C,
                default_auto_archive_duration: h,
                template: I,
                rtc_region: p,
                video_quality_mode: v,
                auto_archive_duration: m,
                locked: g,
                invitable: y,
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
                  null == Z
                    ? void 0
                    : Z.map((e) => ({
                        id: e.id,
                        name: e.name,
                        emoji_id: e.emojiId,
                        emoji_name: e.emojiName,
                        moderated: e.moderated,
                      })),
                default_sort_order: L,
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
              (t) => {
                l.Z.dispatch({
                  type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                  channelId: e,
                });
                let n = null == G ? void 0 : G.getGuildId();
                return (
                  null != n &&
                    !(null == G ? void 0 : G.isThread()) &&
                    r.Z.checkGuildTemplateDirty(n),
                  t
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
      function N(e) {
        let t = u.Z.getChannel(e);
        i.tn.del({ url: s.ANM.CHANNEL(e), oldFormErrors: !0 }).then(() => {
          let e = null == t ? void 0 : t.getGuildId();
          null != e &&
            !(null == t ? void 0 : t.isThread()) &&
            r.Z.checkGuildTemplateDirty(e),
            c();
        });
      }
      t.ZP = {
        init: d,
        open: function (e, t, n) {
          d(e, t, n), (0, o.jN)(s.S9g.CHANNEL_SETTINGS);
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
        saveChannel: _,
        deleteChannel: N,
        updateVoiceChannelStatus: function (e, t) {
          return i.tn.put({
            url: s.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
          });
        },
      };
    },
    323597: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(442837),
        r = n(481060),
        a = n(787014),
        u = n(904245),
        o = n(787263),
        s = n(660189),
        d = n(144140),
        c = n(314897),
        E = n(496675),
        f = n(709054),
        _ = n(981631),
        N = n(689938);
      function T(e) {
        let t = e.isForumPost(),
          n = (0, l.e7)([c.default], () => e.isOwner(c.default.getId()), [e]),
          { canManageChannel: T, canAccessChannel: S } = (0, l.cj)(
            [E.Z],
            () => ({
              canAccessChannel: E.Z.can(e.accessPermissions, e),
              canManageChannel: E.Z.can(
                e.isThread() ? _.Plq.MANAGE_THREADS : _.Plq.MANAGE_CHANNELS,
                e,
              ),
            }),
            [e],
          ),
          C = (0, l.e7)(
            [d.Z],
            () => {
              var t;
              return null !== (t = d.Z.getCount(e.id)) && void 0 !== t ? t : 0;
            },
            [e.id],
          ),
          { firstMessage: h } = (0, l.e7)([s.Z], () => s.Z.getMessage(e.id), [
            e.id,
          ]),
          I = t && (T || (n && C < 1)),
          A = t && n && !T && C > 0 && null != h;
        return S && (T || I || A)
          ? (0, i.jsx)(r.MenuItem, {
              id: "delete-channel",
              label: (() => {
                if (e.type === _.d4z.GUILD_CATEGORY)
                  return N.Z.Messages.DELETE_CATEGORY;
                if (e.isForumPost())
                  return I
                    ? N.Z.Messages.DELETE_FORUM_POST
                    : N.Z.Messages.DELETE_MESSAGE;
                if (e.isThread()) return N.Z.Messages.DELETE_THREAD;
                return N.Z.Messages.DELETE_CHANNEL;
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
    787263: function (e, t, n) {
      n.d(t, {
        w: function () {
          return r;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(481060);
      function r(e, t) {
        return (0, l.openModalLazy)(async () => {
          let { default: l } = await Promise.all([
            n.e("53115"),
            n.e("79521"),
          ]).then(n.bind(n, 207540));
          return (n) =>
            (0, i.jsx)(l, {
              ...n,
              onConfirm: () => {
                n.onClose(), t();
              },
              channel: e,
            });
        });
      }
    },
    117984: function (e, t, n) {
      n.d(t, {
        CM: function () {
          return N;
        },
        UT: function () {
          return _;
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
        n(47120);
      var i = n(524437),
        l = n(675478),
        r = n(592125),
        a = n(496675),
        u = n(709054),
        o = n(853856),
        s = n(231338);
      function d() {
        let e = o.Z.getFavoriteChannels(),
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
          if (n.type === i.Dd.CATEGORY) continue;
          let l = r.Z.getChannel(t);
          if (null == l) {
            delete e[t];
            continue;
          }
          if (!l.isPrivate()) {
            if (!a.Z.can(s.Pl.VIEW_CHANNEL, l)) {
              delete e[t];
              continue;
            }
          }
        }
      }
      function E(e, t) {
        if (!o.Z.isFavorite(e))
          l.hW.updateAsync(
            "favorites",
            (n) => {
              (n.favoriteChannels[e] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: d(),
                parentId: null != t ? t : "0",
              })),
                c(n.favoriteChannels);
            },
            l.fy.FREQUENT_USER_ACTION,
          );
      }
      function f(e) {
        let t = o.Z.getFavorite(e);
        if (null != t)
          l.hW.updateAsync(
            "favorites",
            (n) => {
              if ((delete n.favoriteChannels[e], t.type === i.Dd.CATEGORY))
                for (let t in n.favoriteChannels)
                  n.favoriteChannels[t].parentId === e &&
                    (n.favoriteChannels[t].parentId = "0");
              c(n.favoriteChannels);
            },
            l.fy.INFREQUENT_USER_ACTION,
          );
      }
      function _(e, t) {
        if (!!o.Z.isFavorite(e))
          l.hW.updateAsync(
            "favorites",
            (n) => {
              n.favoriteChannels[e].nickname = null != t ? t : "";
            },
            l.fy.INFREQUENT_USER_ACTION,
          );
      }
      function N(e) {
        let t = u.default.fromTimestamp(Date.now());
        l.hW.updateAsync(
          "favorites",
          (n) => {
            n.favoriteChannels[t] = i.aV.create({
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
          l.fy.FREQUENT_USER_ACTION,
        );
      }
      function C(e, t) {
        l.hW.updateAsync(
          "favorites",
          (n) => {
            n.favoriteChannels[e].parentId = null != t ? t : "0";
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
    388610: function (e, t, n) {
      let i, l, r, a, u, o;
      n(724458), n(789020), n(47120);
      var s,
        d,
        c,
        E,
        f = n(392711),
        _ = n.n(f),
        N = n(913527),
        T = n.n(N),
        S = n(442837),
        C = n(544891),
        h = n(570140),
        I = n(131704),
        A = n(601964),
        p = n(758449),
        v = n(598077),
        m = n(592125),
        g = n(981631);
      let y = g.QZA.CLOSED,
        Z = {},
        L = {},
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
        let t = m.Z.getChannel(e.channelId);
        if (null == t) return D();
        (y = g.QZA.OPEN),
          (a = r = t),
          (R = "location" in e && null != e.location ? e.location : null),
          (l = "subsection" in e ? e.subsection : null),
          null != a && (a = a.set("nsfw", a.isNSFW())),
          (u = m.Z.getChannel(a.parent_id)),
          (o = a.getGuildId()),
          (Z = {}),
          H({
            type: "CHANNEL_SETTINGS_SET_SECTION",
            section: null != i ? i : g.CoT.OVERVIEW,
            subsection: l,
          });
      }
      function H(e) {
        (i = e.section),
          (l = e.subsection),
          null != a &&
            i === g.CoT.INSTANT_INVITES &&
            ((O = !0),
            C.tn
              .get({ url: g.ANM.INSTANT_INVITES(a.id), oldFormErrors: !0 })
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
          (y = g.QZA.CLOSED),
          (i = null),
          (a = r = null),
          (u = null),
          (L = {});
      }
      let P = _().debounce(() => {
        if (null == a || null == r) return !1;
        let e = a.toJS(),
          t = r.toJS();
        G.every((n) => e[n] === t[n]) && a !== r && ((a = r), F.emitChange());
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
          return { invites: L, loading: O };
        }
        showNotice() {
          return this.hasChanges();
        }
        getChannel() {
          return a;
        }
        getFormState() {
          return y;
        }
        getCategory() {
          return u;
        }
        getProps() {
          return {
            submitting: y === g.QZA.SUBMITTING,
            errors: Z,
            channel: a,
            section: i,
            subsection: l,
            invites: L,
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
          (y = g.QZA.SUBMITTING), (Z = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
          (r = a), (y = g.QZA.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
          var t;
          (y = g.QZA.OPEN),
            (Z = Object.keys(
              null !== (t = e.errors) && void 0 !== t ? t : {},
            ).reduce((t, n) => {
              let i = e.errors[n];
              return (0, f.isArray)(i) ? (t[n] = i.join("\n")) : (t[n] = i), t;
            }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: D,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
          let { overwriteId: t } = e;
          o = t;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
          let {
            name: t,
            channelType: n,
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
            defaultAutoArchiveDuration: _,
            template: N,
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
          null != t && (a = a.set("name", t)),
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
            null != _ && (a = a.set("defaultAutoArchiveDuration", _)),
            null != N && (a = a.set("template", N)),
            null != n && (a = a.set("type", n)),
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
          (L = {}),
            e.invites.forEach((e) => {
              L[e.code] = b(e);
            });
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e;
          if (null == a) return !1;
          let n = !1;
          for (let e of t)
            (function (e) {
              if (null == r || r.id !== e) return !1;
              if (r === a) {
                let t = m.Z.getChannel(e);
                if (null == t) return !1;
                (a = r = t), (u = m.Z.getChannel(a.parent_id));
              } else {
                let t = m.Z.getChannel(e);
                if (null == t) return !1;
                (r = t),
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
              (n = !0));
          return n;
        },
        CHANNEL_DELETE: function (e) {
          let {
            channel: { id: t },
          } = e;
          if (null == a || a.id !== t) return !1;
          y = g.QZA.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
          (L = { ...L }), delete L[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
          L = { ...L, [e.invite.code]: b(e.invite) };
        },
      });
      t.Z = 12633 == n.j ? F : null;
    },
  },
]);
//# sourceMappingURL=bab1ffaf1dcdfd5360af.js.map
