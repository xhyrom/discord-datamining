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
          return c;
        },
        xv: function () {
          return E;
        },
        zc: function () {
          return _;
        },
        zz: function () {
          return S;
        },
      }),
        n(789020);
      var i = n(544891),
        r = n(570140),
        l = n(408987),
        u = n(346479);
      n(388610);
      var a = n(592125),
        o = n(37234),
        d = n(981631);
      function s(e, t, n) {
        r.Z.dispatch({
          type: "CHANNEL_SETTINGS_INIT",
          channelId: e,
          location: t,
          subsection: n,
        });
      }
      function E() {
        r.Z.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
      }
      function _(e) {
        r.Z.dispatch({ type: "CHANNEL_SETTINGS_SET_SECTION", section: e });
      }
      function N(e) {
        let {
          name: t,
          type: n,
          topic: i,
          bitrate: l,
          userLimit: u,
          nsfw: a,
          flags: o,
          rateLimitPerUser: d,
          defaultThreadRateLimitPerUser: s,
          defaultAutoArchiveDuration: E,
          template: _,
          defaultReactionEmoji: N,
          rtcRegion: c,
          videoQualityMode: S,
          autoArchiveDuration: T,
          locked: I,
          invitable: h,
          availableTags: C,
          defaultSortOrder: f,
          defaultForumLayout: m,
          iconEmoji: A,
          themeColor: p,
        } = e;
        r.Z.dispatch({
          type: "CHANNEL_SETTINGS_UPDATE",
          name: t,
          channelType: n,
          topic: i,
          bitrate: l,
          userLimit: u,
          nsfw: a,
          flags: o,
          rateLimitPerUser: d,
          defaultThreadRateLimitPerUser: s,
          defaultAutoArchiveDuration: E,
          template: _,
          defaultReactionEmoji: N,
          rtcRegion: c,
          videoQualityMode: S,
          autoArchiveDuration: T,
          locked: I,
          invitable: h,
          availableTags: C,
          defaultSortOrder: f,
          defaultForumLayout: m,
          iconEmoji: A,
          themeColor: p,
        });
      }
      async function c(e, t) {
        let {
            name: n,
            type: o,
            position: s,
            topic: E,
            bitrate: _,
            userLimit: N,
            nsfw: c,
            flags: S,
            permissionOverwrites: T,
            rateLimitPerUser: I,
            defaultThreadRateLimitPerUser: h,
            defaultAutoArchiveDuration: C,
            template: f,
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
          r.Z.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
          await u.Z.unarchiveThreadIfNecessary(e),
          i.tn
            .patch({
              url: d.ANM.CHANNEL(e),
              body: {
                name: n,
                type: o,
                position: s,
                topic: E,
                bitrate: _,
                user_limit: N,
                nsfw: c,
                flags: S,
                permission_overwrites: T,
                rate_limit_per_user: I,
                default_thread_rate_limit_per_user: h,
                default_auto_archive_duration: C,
                template: f,
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
              rejectWithError: !1,
            })
            .then(
              (t) => {
                r.Z.dispatch({
                  type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                  channelId: e,
                });
                let n = null == U ? void 0 : U.getGuildId();
                return (
                  null != n &&
                    !(null == U ? void 0 : U.isThread()) &&
                    l.Z.checkGuildTemplateDirty(n),
                  t
                );
              },
              (e) => (
                r.Z.dispatch({
                  type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                  errors: e.body,
                }),
                e
              ),
            )
        );
      }
      function S(e) {
        let t = a.Z.getChannel(e);
        i.tn
          .del({
            url: d.ANM.CHANNEL(e),
            oldFormErrors: !0,
            rejectWithError: !0,
          })
          .then(() => {
            let e = null == t ? void 0 : t.getGuildId();
            null != e &&
              !(null == t ? void 0 : t.isThread()) &&
              l.Z.checkGuildTemplateDirty(e),
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
          r.Z.dispatch({
            type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
            overwriteId: e,
          });
        },
        updateChannel: N,
        saveChannel: c,
        deleteChannel: S,
        updateVoiceChannelStatus: function (e, t) {
          return i.tn.put({
            url: d.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
            rejectWithError: !1,
          });
        },
        removeLinkedLobby: function (e) {
          return i.tn.del({
            url: d.ANM.CHANNEL_LINKED_LOBBY(e),
            rejectWithError: !0,
          });
        },
      };
    },
    388610: function (e, t, n) {
      let i, r, l, u, a, o;
      n(724458), n(789020), n(47120);
      var d,
        s,
        E,
        _,
        N = n(392711),
        c = n.n(N),
        S = n(913527),
        T = n.n(S),
        I = n(442837),
        h = n(544891),
        C = n(570140),
        f = n(131704),
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
        if (null == t) return M();
        (g = v.QZA.OPEN),
          (u = l = t),
          (H = "location" in e && null != e.location ? e.location : null),
          (r = "subsection" in e ? e.subsection : null),
          null != u && (u = u.set("nsfw", u.isNSFW())),
          (a = L.Z.getChannel(u.parent_id)),
          (o = u.getGuildId()),
          (y = {}),
          j({
            type: "CHANNEL_SETTINGS_SET_SECTION",
            section: null != i ? i : v.CoT.OVERVIEW,
            subsection: r,
          });
      }
      function j(e) {
        (i = e.section),
          (r = e.subsection),
          null != u &&
            i === v.CoT.INSTANT_INVITES &&
            ((O = !0),
            h.tn
              .get({
                url: v.ANM.INSTANT_INVITES(u.id),
                oldFormErrors: !0,
                rejectWithError: !0,
              })
              .then(
                (e) => {
                  (O = !1),
                    C.Z.dispatch({
                      type: "CHANNEL_SETTINGS_LOADED_INVITES",
                      invites: e.body,
                    });
                },
                () => (O = !1),
              ));
      }
      function M() {
        (G = !1),
          (g = v.QZA.CLOSED),
          (i = null),
          (u = l = null),
          (a = null),
          (Z = {});
      }
      let P = c().debounce(() => {
        if (null == u || null == l) return !1;
        let e = u.toJS(),
          t = l.toJS();
        U.every((n) => e[n] === t[n]) && u !== l && ((u = l), k.emitChange());
      }, 500);
      function R(e) {
        return new A.Z({
          code: e.code,
          temporary: e.temporary,
          revoked: e.revoked,
          inviter: null != e.inviter ? new p.Z(e.inviter) : null,
          channel: (0, f.jD)(e.channel),
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
            if (null == l || l.id !== e) return !1;
            if (l === u) {
              let t = L.Z.getChannel(e);
              if (null == t) return !1;
              (u = l = t), (a = L.Z.getChannel(u.parent_id));
            } else {
              let t = L.Z.getChannel(e);
              if (null == t) return !1;
              (l = t),
                null != u &&
                  ((u = u.set("permissionOverwrites", l.permissionOverwrites)),
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
          return u !== l;
        }
        isOpen() {
          return G;
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
            section: i,
            subsection: r,
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
      let k = new V(C.Z, {
        CHANNEL_SETTINGS_INIT: b,
        CHANNEL_SETTINGS_OPEN: function (e) {
          (G = !0), b(e);
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
          (g = v.QZA.SUBMITTING), (y = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
          (l = u), (g = v.QZA.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
          var t;
          (g = v.QZA.OPEN),
            (y = Object.keys(
              null !== (t = e.errors) && void 0 !== t ? t : {},
            ).reduce((t, n) => {
              let i = e.errors[n];
              return (0, N.isArray)(i) ? (t[n] = i.join("\n")) : (t[n] = i), t;
            }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: M,
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
            topic: i,
            bitrate: r,
            userLimit: l,
            nsfw: a,
            flags: o,
            rateLimitPerUser: d,
            defaultThreadRateLimitPerUser: s,
            autoArchiveDuration: E,
            locked: _,
            invitable: N,
            defaultAutoArchiveDuration: c,
            template: S,
            defaultReactionEmoji: T,
            rtcRegion: I,
            videoQualityMode: h,
            availableTags: C,
            defaultSortOrder: f,
            defaultForumLayout: m,
            iconEmoji: A,
            themeColor: p,
          } = e;
          if (null == u) return !1;
          null != t && (u = u.set("name", t)),
            null != i && (u = u.set("topic", i)),
            null != r && (u = u.set("bitrate", r)),
            null != l && (u = u.set("userLimit", l)),
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
            null != c && (u = u.set("defaultAutoArchiveDuration", c)),
            null != S && (u = u.set("template", S)),
            null != n && (u = u.set("type", n)),
            void 0 !== I && (u = u.set("rtcRegion", I)),
            null != h && (u = u.set("videoQualityMode", h)),
            void 0 !== T && (u = u.set("defaultReactionEmoji", T)),
            null != C && (u = u.set("availableTags", C)),
            null != f && (u = u.set("defaultSortOrder", f)),
            null != m && (u = u.set("defaultForumLayout", m)),
            void 0 !== A && (u = u.set("iconEmoji", A)),
            null != p && (u = u.set("themeColor", p)),
            P();
        },
        CHANNEL_SETTINGS_SET_SECTION: j,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
          (Z = {}),
            e.invites.forEach((e) => {
              Z[e.code] = R(e);
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
          Z = { ...Z, [e.invite.code]: R(e.invite) };
        },
      });
      t.Z = 12633 == n.j ? k : null;
    },
  },
]);
//# sourceMappingURL=27ca01e6b59dc6c67f40.js.map
