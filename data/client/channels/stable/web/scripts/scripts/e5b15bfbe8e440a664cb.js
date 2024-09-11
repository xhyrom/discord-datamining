"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51529"],
  {
    787014: function (e, t, n) {
      n.d(t, {
        S1: function () {
          return d;
        },
        pW: function () {
          return N;
        },
        wk: function () {
          return E;
        },
        xv: function () {
          return c;
        },
        zc: function () {
          return _;
        },
        zz: function () {
          return T;
        },
      }),
        n(789020);
      var l = n(544891),
        i = n(570140),
        r = n(408987);
      n(57132), n(777639);
      var a = n(346479);
      n(388610);
      var u = n(592125),
        o = n(37234),
        s = n(981631);
      function d(e, t, n) {
        i.Z.dispatch({
          type: "CHANNEL_SETTINGS_INIT",
          channelId: e,
          location: t,
          subsection: n,
        });
      }
      function c() {
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
          userLimit: a,
          nsfw: u,
          flags: o,
          rateLimitPerUser: s,
          defaultThreadRateLimitPerUser: d,
          defaultAutoArchiveDuration: c,
          template: _,
          defaultReactionEmoji: N,
          rtcRegion: E,
          videoQualityMode: T,
          autoArchiveDuration: S,
          locked: C,
          invitable: f,
          availableTags: h,
          defaultSortOrder: A,
          defaultForumLayout: I,
          iconEmoji: m,
          themeColor: p,
        } = e;
        i.Z.dispatch({
          type: "CHANNEL_SETTINGS_UPDATE",
          name: t,
          channelType: n,
          topic: l,
          bitrate: r,
          userLimit: a,
          nsfw: u,
          flags: o,
          rateLimitPerUser: s,
          defaultThreadRateLimitPerUser: d,
          defaultAutoArchiveDuration: c,
          template: _,
          defaultReactionEmoji: N,
          rtcRegion: E,
          videoQualityMode: T,
          autoArchiveDuration: S,
          locked: C,
          invitable: f,
          availableTags: h,
          defaultSortOrder: A,
          defaultForumLayout: I,
          iconEmoji: m,
          themeColor: p,
        });
      }
      async function E(e, t) {
        let {
            name: n,
            type: o,
            position: d,
            topic: c,
            bitrate: _,
            userLimit: N,
            nsfw: E,
            flags: T,
            permissionOverwrites: S,
            rateLimitPerUser: C,
            defaultThreadRateLimitPerUser: f,
            defaultAutoArchiveDuration: h,
            template: A,
            defaultReactionEmoji: I,
            rtcRegion: m,
            videoQualityMode: p,
            autoArchiveDuration: L,
            locked: v,
            invitable: Z,
            availableTags: g,
            defaultSortOrder: M,
            defaultForumLayout: y,
            iconEmoji: O,
            themeColor: G,
          } = t,
          H = u.Z.getChannel(e);
        return (
          i.Z.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
          await a.Z.unarchiveThreadIfNecessary(e),
          l.tn
            .patch({
              url: s.ANM.CHANNEL(e),
              body: {
                name: n,
                type: o,
                position: d,
                topic: c,
                bitrate: _,
                user_limit: N,
                nsfw: E,
                flags: T,
                permission_overwrites: S,
                rate_limit_per_user: C,
                default_thread_rate_limit_per_user: f,
                default_auto_archive_duration: h,
                template: A,
                rtc_region: m,
                video_quality_mode: p,
                auto_archive_duration: L,
                locked: v,
                invitable: Z,
                default_reaction_emoji:
                  null != I
                    ? {
                        emoji_id: null == I ? void 0 : I.emojiId,
                        emoji_name: null == I ? void 0 : I.emojiName,
                      }
                    : null === I
                      ? null
                      : void 0,
                available_tags:
                  null == g
                    ? void 0
                    : g.map((e) => ({
                        id: e.id,
                        name: e.name,
                        emoji_id: e.emojiId,
                        emoji_name: e.emojiName,
                        moderated: e.moderated,
                      })),
                default_sort_order: M,
                default_forum_layout: y,
                icon_emoji:
                  null != O
                    ? { id: O.id, name: O.name }
                    : null === O
                      ? null
                      : void 0,
                theme_color: G,
              },
              oldFormErrors: !0,
            })
            .then(
              (t) => {
                i.Z.dispatch({
                  type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                  channelId: e,
                });
                let n = null == H ? void 0 : H.getGuildId();
                return (
                  null != n &&
                    !(null == H ? void 0 : H.isThread()) &&
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
      function T(e) {
        let t = u.Z.getChannel(e);
        l.tn.del({ url: s.ANM.CHANNEL(e), oldFormErrors: !0 }).then(() => {
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
        setSection: _,
        selectPermissionOverwrite: function (e) {
          i.Z.dispatch({
            type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
            overwriteId: e,
          });
        },
        updateChannel: N,
        saveChannel: E,
        deleteChannel: T,
        updateVoiceChannelStatus: function (e, t) {
          return l.tn.put({
            url: s.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
          });
        },
        removeLinkedLobby: function (e) {
          return l.tn.del({ url: s.ANM.CHANNEL_LINKED_LOBBY(e) });
        },
      };
    },
    108843: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var l = n(735250);
      n(470079);
      var i = n(906732);
      function r(e, t) {
        return function (n) {
          let { analyticsLocations: r } = (0, i.ZP)(t);
          return (0, l.jsx)(i.Gt, {
            value: r,
            children: (0, l.jsx)(e, { ...n }),
          });
        };
      }
    },
    228620: function (e, t, n) {
      n.r(t);
      var l = n(735250);
      n(470079);
      var i = n(481060),
        r = n(239091),
        a = n(37234),
        u = n(108843),
        o = n(100527),
        s = n(299206),
        d = n(703656),
        c = n(852245),
        _ = n(689938);
      t.default = (0, u.Z)(
        function (e) {
          let { channel: t, onSelect: n } = e,
            u = (0, c.Z)(t),
            o = (0, s.Z)({ id: t.id, label: _.Z.Messages.COPY_ID_CHANNEL });
          return (0, l.jsxs)(i.Menu, {
            navId: "channel-context",
            onClose: r.Zy,
            "aria-label": _.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
            onSelect: n,
            children: [
              (0, l.jsxs)(i.MenuGroup, {
                children: [
                  u,
                  t.isCategory()
                    ? null
                    : (0, l.jsx)(i.MenuItem, {
                        id: "jump-to-channel",
                        label: _.Z.Messages.JUMP_TO_CHANNEL,
                        action: () => {
                          (0, d.XU)(t.guild_id, t.id), (0, a.xf)();
                        },
                      }),
                ],
              }),
              (0, l.jsx)(i.MenuGroup, { children: o }),
            ],
          });
        },
        [o.Z.CONTEXT_MENU, o.Z.CHANNEL_AUDIT_LOG_MENU],
      );
    },
    852245: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var l = n(735250);
      n(470079);
      var i = n(442837),
        r = n(481060),
        a = n(787014),
        u = n(496675),
        o = n(981631),
        s = n(689938);
      function d(e) {
        let {
          canManageChannels: t,
          canManageRoles: n,
          canManageWebhooks: d,
          canAccessChannel: c,
        } = (0, i.cj)(
          [u.Z],
          () => ({
            canManageChannels: u.Z.can(o.Plq.MANAGE_CHANNELS, e),
            canManageRoles: u.Z.can(o.Plq.MANAGE_ROLES, e),
            canManageWebhooks: u.Z.can(o.Plq.MANAGE_WEBHOOKS, e),
            canAccessChannel: u.Z.can(e.accessPermissions, e),
          }),
          [e],
        );
        return !__OVERLAY__ && c && (t || n || d)
          ? (0, l.jsx)(r.MenuItem, {
              id: "edit-channel",
              label:
                e.type === o.d4z.GUILD_CATEGORY
                  ? s.Z.Messages.EDIT_CATEGORY
                  : s.Z.Messages.EDIT_CHANNEL,
              action: () => a.ZP.open(e.id),
            })
          : null;
      }
    },
    388610: function (e, t, n) {
      let l, i, r, a, u, o;
      n(724458), n(789020), n(47120);
      var s,
        d,
        c,
        _,
        N = n(392711),
        E = n.n(N),
        T = n(913527),
        S = n.n(T),
        C = n(442837),
        f = n(544891),
        h = n(570140),
        A = n(131704),
        I = n(601964),
        m = n(758449),
        p = n(598077),
        L = n(592125),
        v = n(981631);
      let Z = v.QZA.CLOSED,
        g = {},
        M = {},
        y = !1,
        O = !1,
        G = null,
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
          "iconEmoji",
          "themeColor",
        ];
      function U(e) {
        let t = L.Z.getChannel(e.channelId);
        if (null == t) return j();
        (Z = v.QZA.OPEN),
          (a = r = t),
          (G = "location" in e && null != e.location ? e.location : null),
          (i = "subsection" in e ? e.subsection : null),
          null != a && (a = a.set("nsfw", a.isNSFW())),
          (u = L.Z.getChannel(a.parent_id)),
          (o = a.getGuildId()),
          (g = {}),
          b({
            type: "CHANNEL_SETTINGS_SET_SECTION",
            section: null != l ? l : v.CoT.OVERVIEW,
            subsection: i,
          });
      }
      function b(e) {
        (l = e.section),
          (i = e.subsection),
          null != a &&
            l === v.CoT.INSTANT_INVITES &&
            ((y = !0),
            f.tn
              .get({ url: v.ANM.INSTANT_INVITES(a.id), oldFormErrors: !0 })
              .then(
                (e) => {
                  (y = !1),
                    h.Z.dispatch({
                      type: "CHANNEL_SETTINGS_LOADED_INVITES",
                      invites: e.body,
                    });
                },
                () => (y = !1),
              ));
      }
      function j() {
        (O = !1),
          (Z = v.QZA.CLOSED),
          (l = null),
          (a = r = null),
          (u = null),
          (M = {});
      }
      let P = E().debounce(() => {
        if (null == a || null == r) return !1;
        let e = a.toJS(),
          t = r.toJS();
        H.every((n) => e[n] === t[n]) && a !== r && ((a = r), R.emitChange());
      }, 500);
      function D(e) {
        return new m.Z({
          code: e.code,
          temporary: e.temporary,
          revoked: e.revoked,
          inviter: null != e.inviter ? new p.Z(e.inviter) : null,
          channel: (0, A.jD)(e.channel),
          guild: null != e.guild ? new I.ZP(e.guild) : null,
          uses: e.uses,
          maxUses: e.max_uses,
          maxAge: e.max_age,
          createdAt: S()(e.created_at),
          type: e.type,
        });
      }
      class w extends (s = C.ZP.Store) {
        initialize() {
          this.waitFor(L.Z);
        }
        hasChanges() {
          return a !== r;
        }
        isOpen() {
          return O;
        }
        getSection() {
          return l;
        }
        getInvites() {
          return { invites: M, loading: y };
        }
        showNotice() {
          return this.hasChanges();
        }
        getChannel() {
          return a;
        }
        getFormState() {
          return Z;
        }
        getCategory() {
          return u;
        }
        getProps() {
          return {
            submitting: Z === v.QZA.SUBMITTING,
            errors: g,
            channel: a,
            section: l,
            subsection: i,
            invites: M,
            selectedOverwriteId: o,
            hasChanges: this.hasChanges(),
            analyticsLocation: G,
          };
        }
      }
      (_ = "ChannelSettingsStore"),
        (c = "displayName") in (d = w)
          ? Object.defineProperty(d, c, {
              value: _,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (d[c] = _);
      let R = new w(h.Z, {
        CHANNEL_SETTINGS_INIT: U,
        CHANNEL_SETTINGS_OPEN: function (e) {
          (O = !0), U(e);
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
          (Z = v.QZA.SUBMITTING), (g = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
          (r = a), (Z = v.QZA.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
          var t;
          (Z = v.QZA.OPEN),
            (g = Object.keys(
              null !== (t = e.errors) && void 0 !== t ? t : {},
            ).reduce((t, n) => {
              let l = e.errors[n];
              return (0, N.isArray)(l) ? (t[n] = l.join("\n")) : (t[n] = l), t;
            }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: j,
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
            nsfw: u,
            flags: o,
            rateLimitPerUser: s,
            defaultThreadRateLimitPerUser: d,
            autoArchiveDuration: c,
            locked: _,
            invitable: N,
            defaultAutoArchiveDuration: E,
            template: T,
            defaultReactionEmoji: S,
            rtcRegion: C,
            videoQualityMode: f,
            availableTags: h,
            defaultSortOrder: A,
            defaultForumLayout: I,
            iconEmoji: m,
            themeColor: p,
          } = e;
          if (null == a) return !1;
          null != t && (a = a.set("name", t)),
            null != l && (a = a.set("topic", l)),
            null != i && (a = a.set("bitrate", i)),
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
            null != _ &&
              (a = a.set("threadMetadata", { ...a.threadMetadata, locked: _ })),
            null != N &&
              (a = a.set("threadMetadata", {
                ...a.threadMetadata,
                invitable: N,
              })),
            null != E && (a = a.set("defaultAutoArchiveDuration", E)),
            null != T && (a = a.set("template", T)),
            null != n && (a = a.set("type", n)),
            void 0 !== C && (a = a.set("rtcRegion", C)),
            null != f && (a = a.set("videoQualityMode", f)),
            void 0 !== S && (a = a.set("defaultReactionEmoji", S)),
            null != h && (a = a.set("availableTags", h)),
            null != A && (a = a.set("defaultSortOrder", A)),
            null != I && (a = a.set("defaultForumLayout", I)),
            void 0 !== m && (a = a.set("iconEmoji", m)),
            null != p && (a = a.set("themeColor", p)),
            P();
        },
        CHANNEL_SETTINGS_SET_SECTION: b,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
          (M = {}),
            e.invites.forEach((e) => {
              M[e.code] = D(e);
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
                let t = L.Z.getChannel(e);
                if (null == t) return !1;
                (a = r = t), (u = L.Z.getChannel(a.parent_id));
              } else {
                let t = L.Z.getChannel(e);
                if (null == t) return !1;
                (r = t),
                  null != a &&
                    ((a = a.set(
                      "permissionOverwrites",
                      r.permissionOverwrites,
                    )),
                    (u = L.Z.getChannel(a.parent_id)));
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
          Z = v.QZA.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
          (M = { ...M }), delete M[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
          M = { ...M, [e.invite.code]: D(e.invite) };
        },
      });
      t.Z = 12633 == n.j ? R : null;
    },
  },
]);
//# sourceMappingURL=e5b15bfbe8e440a664cb.js.map
