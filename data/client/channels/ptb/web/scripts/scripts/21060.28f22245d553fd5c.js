"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21060"],
  {
    435183(e, t, n) {
      n.d(t, {
        Ay: () => T,
        D3: () => c,
        RT: () => N,
        Ts: () => d,
        VN: () => E,
        c4: () => _,
        fy: () => S,
      }),
        n(938796);
      var l = n(636537),
        r = n(228366),
        i = n(568185);
      n(250953);
      var a = n(867455);
      n(863036);
      var u = n(734057),
        o = n(398590),
        s = n(652215);
      function d(e, t, n) {
        r.h.dispatch({
          type: "CHANNEL_SETTINGS_INIT",
          channelId: e,
          location: t,
          subsection: n,
        });
      }
      function E() {
        r.h.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
      }
      function _(e) {
        r.h.dispatch({ type: "CHANNEL_SETTINGS_SET_SECTION", section: e });
      }
      function S(e) {
        let {
          name: t,
          type: n,
          topic: l,
          bitrate: i,
          userLimit: a,
          nsfw: u,
          flags: o,
          rateLimitPerUser: s,
          defaultThreadRateLimitPerUser: d,
          defaultAutoArchiveDuration: E,
          template: _,
          defaultReactionEmoji: S,
          rtcRegion: N,
          videoQualityMode: c,
          autoArchiveDuration: T,
          locked: h,
          invitable: I,
          availableTags: C,
          defaultSortOrder: A,
          defaultForumLayout: f,
          defaultTagSetting: m,
          iconEmoji: p,
          themeColor: L,
        } = e;
        r.h.dispatch({
          type: "CHANNEL_SETTINGS_UPDATE",
          name: t,
          channelType: n,
          topic: l,
          bitrate: i,
          userLimit: a,
          nsfw: u,
          flags: o,
          rateLimitPerUser: s,
          defaultThreadRateLimitPerUser: d,
          defaultAutoArchiveDuration: E,
          template: _,
          defaultReactionEmoji: S,
          rtcRegion: N,
          videoQualityMode: c,
          autoArchiveDuration: T,
          locked: h,
          invitable: I,
          availableTags: C,
          defaultSortOrder: A,
          defaultForumLayout: f,
          defaultTagSetting: m,
          iconEmoji: p,
          themeColor: L,
        });
      }
      async function N(e, t) {
        let {
            name: n,
            type: o,
            position: d,
            topic: E,
            bitrate: _,
            userLimit: S,
            nsfw: N,
            flags: c,
            permissionOverwrites: T,
            rateLimitPerUser: h,
            defaultThreadRateLimitPerUser: I,
            defaultAutoArchiveDuration: C,
            template: A,
            defaultReactionEmoji: f,
            rtcRegion: m,
            videoQualityMode: p,
            autoArchiveDuration: L,
            locked: g,
            invitable: v,
            availableTags: y,
            defaultSortOrder: H,
            defaultForumLayout: O,
            defaultTagSetting: R,
            iconEmoji: G,
            themeColor: U,
          } = t,
          b = u.A.getChannel(e);
        return (
          r.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
          await a.A.unarchiveThreadIfNecessary(e),
          l.Bo.patch({
            url: s.Rsh.CHANNEL(e),
            body: {
              name: n,
              type: o,
              position: d,
              topic: E,
              bitrate: _,
              user_limit: S,
              nsfw: N,
              flags: c,
              permission_overwrites: T,
              rate_limit_per_user: h,
              default_thread_rate_limit_per_user: I,
              default_auto_archive_duration: C,
              template: A,
              rtc_region: m,
              video_quality_mode: p,
              auto_archive_duration: L,
              locked: g,
              invitable: v,
              default_reaction_emoji:
                null != f
                  ? { emoji_id: f?.emojiId, emoji_name: f?.emojiName }
                  : null === f
                    ? null
                    : void 0,
              available_tags: y?.map((e) => ({
                id: e.id,
                name: e.name,
                emoji_id: e.emojiId,
                emoji_name: e.emojiName,
                moderated: e.moderated,
              })),
              default_sort_order: H,
              default_forum_layout: O,
              default_tag_setting: R,
              icon_emoji:
                null != G
                  ? { id: G.id, name: G.name }
                  : null === G
                    ? null
                    : void 0,
              theme_color: U,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
          }).then(
            (t) => {
              r.h.dispatch({
                type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                channelId: e,
              });
              let n = b?.getGuildId();
              return (
                null == n || b?.isThread() || i.A.checkGuildTemplateDirty(n), t
              );
            },
            (e) => (
              r.h.dispatch({
                type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                errors: e.body,
              }),
              e
            ),
          )
        );
      }
      async function c(e) {
        let t = u.A.getChannel(e);
        await l.Bo.del({
          url: s.Rsh.CHANNEL(e),
          oldFormErrors: !0,
          rejectWithError: !0,
        });
        let n = t?.getGuildId();
        null == n || t?.isThread() || i.A.checkGuildTemplateDirty(n), E();
      }
      let T = {
        init: d,
        open: function (e, t, n) {
          d(e, t, n), (0, o.id)(s.zgK.CHANNEL_SETTINGS);
        },
        close: E,
        setSection: _,
        selectPermissionOverwrite: function (e) {
          r.h.dispatch({
            type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
            overwriteId: e,
          });
        },
        updateChannel: S,
        saveChannel: N,
        deleteChannel: c,
        updateVoiceChannelStatus: function (e, t) {
          return l.Bo.put({
            url: s.Rsh.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
            rejectWithError: !1,
          });
        },
        removeLinkedLobby: function (e) {
          return l.Bo.del({
            url: s.Rsh.CHANNEL_LINKED_LOBBY(e),
            rejectWithError: !0,
          });
        },
      };
    },
    863036(e, t, n) {
      let l, r, i, a, u, o;
      n.d(t, { A: () => w }), n(938796);
      var s = n(735438),
        d = n.n(s),
        E = n(989349),
        _ = n.n(E),
        S = n(17928),
        N = n(636537),
        c = n(228366),
        T = n(95701),
        h = n(671759),
        I = n(889227),
        C = n(860689),
        A = n(734057),
        f = n(652215);
      let m = f.XlH.CLOSED,
        p = {},
        L = {},
        g = !1,
        v = !1,
        y = null,
        H = [
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
          "defaultTagSetting",
          "iconEmoji",
          "themeColor",
        ];
      function O(e) {
        (l = e.section),
          (r = e.subsection),
          null != a &&
            l === f.p_A.INSTANT_INVITES &&
            ((g = !0),
            N.Bo.get({
              url: f.Rsh.INSTANT_INVITES(a.id),
              oldFormErrors: !0,
              rejectWithError: !0,
            }).then(
              (e) => {
                (g = !1),
                  c.h.dispatch({
                    type: "CHANNEL_SETTINGS_LOADED_INVITES",
                    invites: e.body,
                  });
              },
              () => (g = !1),
            ));
      }
      function R() {
        (v = !1),
          (m = f.XlH.CLOSED),
          (l = null),
          (a = i = null),
          (u = null),
          (L = {});
      }
      let G = d().debounce(() => {
        if (null == a || null == i) return !1;
        let e = a.toJS(),
          t = i.toJS();
        H.every((n) => e[n] === t[n]) && a !== i && ((a = i), M.emitChange());
      }, 500);
      function U(e) {
        return new h.A({
          code: e.code,
          temporary: e.temporary,
          revoked: e.revoked,
          inviter: null != e.inviter ? new I.A(e.inviter) : null,
          channel: (0, T.OY)(e.channel),
          guild: null != e.guild ? (0, C.DY)(e.guild) : null,
          uses: e.uses,
          maxUses: e.max_uses,
          maxAge: e.max_age,
          createdAt: _()(e.created_at),
          type: e.type,
          roles: e.roles,
        });
      }
      function b(e) {
        return (
          !!(function (e) {
            if (null == i || i.id !== e) return !1;
            if (i === a) {
              let t = A.A.getChannel(e);
              if (null == t) return !1;
              (a = i = t), (u = A.A.getChannel(a.parent_id));
            } else {
              let t = A.A.getChannel(e);
              if (null == t) return !1;
              (i = t),
                null != a &&
                  ((a = a
                    .set("permissionOverwrites", i.permissionOverwrites)
                    .set("availableTags", i.availableTags)),
                  (u = A.A.getChannel(a.parent_id)));
            }
            return !0;
          })(e) &&
          null != a &&
          (null != o &&
            null == a.permissionOverwrites[o] &&
            (o = a.getGuildId()),
          !0)
        );
      }
      function j(e) {
        let { channelId: t } = e;
        return b(t);
      }
      class D extends S.Ay.Store {
        static displayName = "ChannelSettingsStore";
        initialize() {
          this.waitFor(A.A);
        }
        hasChanges() {
          return a !== i;
        }
        isOpen() {
          return v;
        }
        getSection() {
          return l;
        }
        getInvites() {
          return { invites: L, loading: g };
        }
        showNotice() {
          return this.hasChanges();
        }
        getChannel() {
          return a;
        }
        getFormState() {
          return m;
        }
        getCategory() {
          return u;
        }
        getProps() {
          return {
            submitting: m === f.XlH.SUBMITTING,
            errors: p,
            channel: a,
            section: l,
            subsection: r,
            invites: L,
            selectedOverwriteId: o,
            hasChanges: this.hasChanges(),
            analyticsLocation: y,
          };
        }
      }
      let M = new D(c.h, {
          CHANNEL_SETTINGS_INIT: function (e) {
            let t = A.A.getChannel(e.channelId);
            if (null == t) return R();
            (m = f.XlH.OPEN),
              (a = i = t),
              (y = "location" in e && null != e.location ? e.location : null),
              (r = "subsection" in e ? e.subsection : null),
              null != a && (a = a.set("nsfw", a.isNSFW())),
              (u = A.A.getChannel(a.parent_id)),
              (o = a.getGuildId());
            let n = a.isModeratorReportChannel()
              ? f.p_A.PERMISSIONS
              : f.p_A.OVERVIEW;
            return (
              (p = {}),
              O({
                type: "CHANNEL_SETTINGS_SET_SECTION",
                section: l ?? n,
                subsection: r,
              }),
              !0
            );
          },
          CHANNEL_SETTINGS_SUBMIT: function () {
            (m = f.XlH.SUBMITTING), (p = {});
          },
          CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
            (i = a), (m = f.XlH.OPEN);
          },
          CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
            (m = f.XlH.OPEN),
              (p = Object.keys(e.errors ?? {}).reduce((t, n) => {
                let l = e.errors[n];
                return (
                  (0, s.isArray)(l) ? (t[n] = l.join("\n")) : (t[n] = l), t
                );
              }, {}));
          },
          CHANNEL_SETTINGS_CLOSE: R,
          CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: j,
          CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: j,
          CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
            let { overwriteId: t } = e;
            o = t;
          },
          CHANNEL_SETTINGS_UPDATE: function (e) {
            let {
              name: t,
              channelType: n,
              topic: l,
              bitrate: r,
              userLimit: i,
              nsfw: u,
              flags: o,
              rateLimitPerUser: s,
              defaultThreadRateLimitPerUser: d,
              autoArchiveDuration: E,
              locked: _,
              invitable: S,
              defaultAutoArchiveDuration: N,
              template: c,
              defaultReactionEmoji: T,
              rtcRegion: h,
              videoQualityMode: I,
              availableTags: C,
              defaultSortOrder: A,
              defaultForumLayout: f,
              defaultTagSetting: m,
              iconEmoji: p,
              themeColor: L,
            } = e;
            if (null == a) return !1;
            null != t && (a = a.set("name", t)),
              null != l && (a = a.set("topic", l)),
              null != r && (a = a.set("bitrate", r)),
              null != i && (a = a.set("userLimit", i)),
              null != u && (a = a.set("nsfw", u)),
              null != o && (a = a.set("flags", o)),
              null != s && (a = a.set("rateLimitPerUser", s)),
              null != d && (a = a.set("defaultThreadRateLimitPerUser", d)),
              null != E &&
                (a = a.set("threadMetadata", {
                  ...a.threadMetadata,
                  autoArchiveDuration: E,
                })),
              null != _ &&
                (a = a.set("threadMetadata", {
                  ...a.threadMetadata,
                  locked: _,
                })),
              null != S &&
                (a = a.set("threadMetadata", {
                  ...a.threadMetadata,
                  invitable: S,
                })),
              null != N && (a = a.set("defaultAutoArchiveDuration", N)),
              null != c && (a = a.set("template", c)),
              null != n && (a = a.set("type", n)),
              void 0 !== h && (a = a.set("rtcRegion", h)),
              null != I && (a = a.set("videoQualityMode", I)),
              void 0 !== T && (a = a.set("defaultReactionEmoji", T)),
              null != C && (a = a.set("availableTags", C)),
              null != A && (a = a.set("defaultSortOrder", A)),
              null != m && (a = a.set("defaultTagSetting", m)),
              null != f && (a = a.set("defaultForumLayout", f)),
              void 0 !== p && (a = a.set("iconEmoji", p)),
              null != L && (a = a.set("themeColor", L)),
              G();
          },
          CHANNEL_SETTINGS_SET_SECTION: O,
          CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
            (L = {}),
              e.invites.forEach((e) => {
                L[e.code] = U(e);
              });
          },
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (null == a) return !1;
            let n = !1;
            for (let e of t) n = b(e.id) || n;
            return n;
          },
          THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return null != a && b(t.id);
          },
          CHANNEL_DELETE: function (e) {
            let {
              channel: { id: t },
            } = e;
            if (null == a || a.id !== t) return !1;
            m = f.XlH.CLOSED;
          },
          INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
            (L = { ...L }), delete L[e.code];
          },
          INSTANT_INVITE_CREATE_SUCCESS: function (e) {
            L = { ...L, [e.invite.code]: U(e.invite) };
          },
        }),
        w = 21552 == n.j ? M : null;
    },
  },
]);
//# sourceMappingURL=21060.28f22245d553fd5c.js.map
