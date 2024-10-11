"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38902"],
  {
    787014: function (e, t, n) {
      n.d(t, {
        S1: function () {
          return s;
        },
        pW: function () {
          return N;
        },
        wk: function () {
          return S;
        },
        xv: function () {
          return E;
        },
        zc: function () {
          return _;
        },
        zz: function () {
          return c;
        },
      }),
        n(789020);
      var l = n(544891),
        i = n(570140),
        r = n(408987);
      n(57132), n(777639);
      var u = n(346479);
      n(388610);
      var a = n(592125),
        o = n(37234),
        d = n(981631);
      function s(e, t, n) {
        i.Z.dispatch({
          type: "CHANNEL_SETTINGS_INIT",
          channelId: e,
          location: t,
          subsection: n,
        });
      }
      function E() {
        i.Z.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
      }
      function _(e) {
        i.Z.dispatch({ type: "CHANNEL_SETTINGS_SET_SECTION", section: e });
      }
      function N(e) {
        let {
          name: t,
          type: n,
          topic: l,
          bitrate: r,
          userLimit: u,
          nsfw: a,
          flags: o,
          rateLimitPerUser: d,
          defaultThreadRateLimitPerUser: s,
          defaultAutoArchiveDuration: E,
          template: _,
          defaultReactionEmoji: N,
          rtcRegion: S,
          videoQualityMode: c,
          autoArchiveDuration: T,
          locked: I,
          invitable: C,
          availableTags: f,
          defaultSortOrder: h,
          defaultForumLayout: m,
          iconEmoji: A,
          themeColor: p,
        } = e;
        i.Z.dispatch({
          type: "CHANNEL_SETTINGS_UPDATE",
          name: t,
          channelType: n,
          topic: l,
          bitrate: r,
          userLimit: u,
          nsfw: a,
          flags: o,
          rateLimitPerUser: d,
          defaultThreadRateLimitPerUser: s,
          defaultAutoArchiveDuration: E,
          template: _,
          defaultReactionEmoji: N,
          rtcRegion: S,
          videoQualityMode: c,
          autoArchiveDuration: T,
          locked: I,
          invitable: C,
          availableTags: f,
          defaultSortOrder: h,
          defaultForumLayout: m,
          iconEmoji: A,
          themeColor: p,
        });
      }
      async function S(e, t) {
        let {
            name: n,
            type: o,
            position: s,
            topic: E,
            bitrate: _,
            userLimit: N,
            nsfw: S,
            flags: c,
            permissionOverwrites: T,
            rateLimitPerUser: I,
            defaultThreadRateLimitPerUser: C,
            defaultAutoArchiveDuration: f,
            template: h,
            defaultReactionEmoji: m,
            rtcRegion: A,
            videoQualityMode: p,
            autoArchiveDuration: L,
            locked: v,
            invitable: g,
            availableTags: y,
            defaultSortOrder: Z,
            defaultForumLayout: O,
            iconEmoji: G,
            themeColor: H,
          } = t,
          U = a.Z.getChannel(e);
        return (
          i.Z.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
          await u.Z.unarchiveThreadIfNecessary(e),
          l.tn
            .patch({
              url: d.ANM.CHANNEL(e),
              body: {
                name: n,
                type: o,
                position: s,
                topic: E,
                bitrate: _,
                user_limit: N,
                nsfw: S,
                flags: c,
                permission_overwrites: T,
                rate_limit_per_user: I,
                default_thread_rate_limit_per_user: C,
                default_auto_archive_duration: f,
                template: h,
                rtc_region: A,
                video_quality_mode: p,
                auto_archive_duration: L,
                locked: v,
                invitable: g,
                default_reaction_emoji:
                  null != m
                    ? {
                        emoji_id: null == m ? void 0 : m.emojiId,
                        emoji_name: null == m ? void 0 : m.emojiName,
                      }
                    : null === m
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
                  null != G
                    ? { id: G.id, name: G.name }
                    : null === G
                      ? null
                      : void 0,
                theme_color: H,
              },
              oldFormErrors: !0,
            })
            .then(
              (t) => {
                i.Z.dispatch({
                  type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                  channelId: e,
                });
                let n = null == U ? void 0 : U.getGuildId();
                return (
                  null != n &&
                    !(null == U ? void 0 : U.isThread()) &&
                    r.Z.checkGuildTemplateDirty(n),
                  t
                );
              },
              (e) => (
                i.Z.dispatch({
                  type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                  errors: e.body,
                }),
                e
              ),
            )
        );
      }
      function c(e) {
        let t = a.Z.getChannel(e);
        l.tn.del({ url: d.ANM.CHANNEL(e), oldFormErrors: !0 }).then(() => {
          let e = null == t ? void 0 : t.getGuildId();
          null != e &&
            !(null == t ? void 0 : t.isThread()) &&
            r.Z.checkGuildTemplateDirty(e),
            E();
        });
      }
      t.ZP = {
        init: s,
        open: function (e, t, n) {
          s(e, t, n), (0, o.jN)(d.S9g.CHANNEL_SETTINGS);
        },
        close: E,
        setSection: _,
        selectPermissionOverwrite: function (e) {
          i.Z.dispatch({
            type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
            overwriteId: e,
          });
        },
        updateChannel: N,
        saveChannel: S,
        deleteChannel: c,
        updateVoiceChannelStatus: function (e, t) {
          return l.tn.put({
            url: d.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
          });
        },
        removeLinkedLobby: function (e) {
          return l.tn.del({ url: d.ANM.CHANNEL_LINKED_LOBBY(e) });
        },
      };
    },
    388610: function (e, t, n) {
      let l, i, r, u, a, o;
      n(724458), n(789020), n(47120);
      var d,
        s,
        E,
        _,
        N = n(392711),
        S = n.n(N),
        c = n(913527),
        T = n.n(c),
        I = n(442837),
        C = n(544891),
        f = n(570140),
        h = n(131704),
        m = n(601964),
        A = n(758449),
        p = n(598077),
        L = n(592125),
        v = n(981631);
      let g = v.QZA.CLOSED,
        y = {},
        Z = {},
        O = !1,
        G = !1,
        H = null,
        U = [
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
      function b(e) {
        let t = L.Z.getChannel(e.channelId);
        if (null == t) return P();
        (g = v.QZA.OPEN),
          (u = r = t),
          (H = "location" in e && null != e.location ? e.location : null),
          (i = "subsection" in e ? e.subsection : null),
          null != u && (u = u.set("nsfw", u.isNSFW())),
          (a = L.Z.getChannel(u.parent_id)),
          (o = u.getGuildId()),
          (y = {}),
          M({
            type: "CHANNEL_SETTINGS_SET_SECTION",
            section: null != l ? l : v.CoT.OVERVIEW,
            subsection: i,
          });
      }
      function M(e) {
        (l = e.section),
          (i = e.subsection),
          null != u &&
            l === v.CoT.INSTANT_INVITES &&
            ((O = !0),
            C.tn
              .get({ url: v.ANM.INSTANT_INVITES(u.id), oldFormErrors: !0 })
              .then(
                (e) => {
                  (O = !1),
                    f.Z.dispatch({
                      type: "CHANNEL_SETTINGS_LOADED_INVITES",
                      invites: e.body,
                    });
                },
                () => (O = !1),
              ));
      }
      function P() {
        (G = !1),
          (g = v.QZA.CLOSED),
          (l = null),
          (u = r = null),
          (a = null),
          (Z = {});
      }
      let R = S().debounce(() => {
        if (null == u || null == r) return !1;
        let e = u.toJS(),
          t = r.toJS();
        U.every((n) => e[n] === t[n]) && u !== r && ((u = r), k.emitChange());
      }, 500);
      function j(e) {
        return new A.Z({
          code: e.code,
          temporary: e.temporary,
          revoked: e.revoked,
          inviter: null != e.inviter ? new p.Z(e.inviter) : null,
          channel: (0, h.jD)(e.channel),
          guild: null != e.guild ? new m.ZP(e.guild) : null,
          uses: e.uses,
          maxUses: e.max_uses,
          maxAge: e.max_age,
          createdAt: T()(e.created_at),
          type: e.type,
        });
      }
      function w(e) {
        return (
          !!(function (e) {
            if (null == r || r.id !== e) return !1;
            if (r === u) {
              let t = L.Z.getChannel(e);
              if (null == t) return !1;
              (u = r = t), (a = L.Z.getChannel(u.parent_id));
            } else {
              let t = L.Z.getChannel(e);
              if (null == t) return !1;
              (r = t),
                null != u &&
                  ((u = u.set("permissionOverwrites", r.permissionOverwrites)),
                  (a = L.Z.getChannel(u.parent_id)));
            }
            return !0;
          })(e) &&
          null != u &&
          (null != o &&
            null == u.permissionOverwrites[o] &&
            (o = u.getGuildId()),
          !0)
        );
      }
      function D(e) {
        let { channelId: t } = e;
        return w(t);
      }
      class V extends (d = I.ZP.Store) {
        initialize() {
          this.waitFor(L.Z);
        }
        hasChanges() {
          return u !== r;
        }
        isOpen() {
          return G;
        }
        getSection() {
          return l;
        }
        getInvites() {
          return { invites: Z, loading: O };
        }
        showNotice() {
          return this.hasChanges();
        }
        getChannel() {
          return u;
        }
        getFormState() {
          return g;
        }
        getCategory() {
          return a;
        }
        getProps() {
          return {
            submitting: g === v.QZA.SUBMITTING,
            errors: y,
            channel: u,
            section: l,
            subsection: i,
            invites: Z,
            selectedOverwriteId: o,
            hasChanges: this.hasChanges(),
            analyticsLocation: H,
          };
        }
      }
      (_ = "ChannelSettingsStore"),
        (E = "displayName") in (s = V)
          ? Object.defineProperty(s, E, {
              value: _,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[E] = _);
      let k = new V(f.Z, {
        CHANNEL_SETTINGS_INIT: b,
        CHANNEL_SETTINGS_OPEN: function (e) {
          (G = !0), b(e);
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
          (g = v.QZA.SUBMITTING), (y = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
          (r = u), (g = v.QZA.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
          var t;
          (g = v.QZA.OPEN),
            (y = Object.keys(
              null !== (t = e.errors) && void 0 !== t ? t : {},
            ).reduce((t, n) => {
              let l = e.errors[n];
              return (0, N.isArray)(l) ? (t[n] = l.join("\n")) : (t[n] = l), t;
            }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: P,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: D,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: D,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
          let { overwriteId: t } = e;
          o = t;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
          let {
            name: t,
            channelType: n,
            topic: l,
            bitrate: i,
            userLimit: r,
            nsfw: a,
            flags: o,
            rateLimitPerUser: d,
            defaultThreadRateLimitPerUser: s,
            autoArchiveDuration: E,
            locked: _,
            invitable: N,
            defaultAutoArchiveDuration: S,
            template: c,
            defaultReactionEmoji: T,
            rtcRegion: I,
            videoQualityMode: C,
            availableTags: f,
            defaultSortOrder: h,
            defaultForumLayout: m,
            iconEmoji: A,
            themeColor: p,
          } = e;
          if (null == u) return !1;
          null != t && (u = u.set("name", t)),
            null != l && (u = u.set("topic", l)),
            null != i && (u = u.set("bitrate", i)),
            null != r && (u = u.set("userLimit", r)),
            null != a && (u = u.set("nsfw", a)),
            null != o && (u = u.set("flags", o)),
            null != d && (u = u.set("rateLimitPerUser", d)),
            null != s && (u = u.set("defaultThreadRateLimitPerUser", s)),
            null != E &&
              (u = u.set("threadMetadata", {
                ...u.threadMetadata,
                autoArchiveDuration: E,
              })),
            null != _ &&
              (u = u.set("threadMetadata", { ...u.threadMetadata, locked: _ })),
            null != N &&
              (u = u.set("threadMetadata", {
                ...u.threadMetadata,
                invitable: N,
              })),
            null != S && (u = u.set("defaultAutoArchiveDuration", S)),
            null != c && (u = u.set("template", c)),
            null != n && (u = u.set("type", n)),
            void 0 !== I && (u = u.set("rtcRegion", I)),
            null != C && (u = u.set("videoQualityMode", C)),
            void 0 !== T && (u = u.set("defaultReactionEmoji", T)),
            null != f && (u = u.set("availableTags", f)),
            null != h && (u = u.set("defaultSortOrder", h)),
            null != m && (u = u.set("defaultForumLayout", m)),
            void 0 !== A && (u = u.set("iconEmoji", A)),
            null != p && (u = u.set("themeColor", p)),
            R();
        },
        CHANNEL_SETTINGS_SET_SECTION: M,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
          (Z = {}),
            e.invites.forEach((e) => {
              Z[e.code] = j(e);
            });
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e;
          if (null == u) return !1;
          let n = !1;
          for (let e of t) n = w(e.id) || n;
          return n;
        },
        CHANNEL_DELETE: function (e) {
          let {
            channel: { id: t },
          } = e;
          if (null == u || u.id !== t) return !1;
          g = v.QZA.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
          (Z = { ...Z }), delete Z[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
          Z = { ...Z, [e.invite.code]: j(e.invite) };
        },
      });
      t.Z = 12633 == n.j ? k : null;
    },
  },
]);
//# sourceMappingURL=31697e6d0ebfa518a98d.js.map
