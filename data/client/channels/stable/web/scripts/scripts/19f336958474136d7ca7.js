"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39955"],
  {
    787014: function (e, t, n) {
      n.d(t, {
        S1: function () {
          return d;
        },
        pW: function () {
          return E;
        },
        wk: function () {
          return c;
        },
        xv: function () {
          return N;
        },
        zc: function () {
          return _;
        },
        zz: function () {
          return S;
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
      function N() {
        i.Z.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
      }
      function _(e) {
        i.Z.dispatch({ type: "CHANNEL_SETTINGS_SET_SECTION", section: e });
      }
      function E(e) {
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
          defaultAutoArchiveDuration: N,
          template: _,
          defaultReactionEmoji: E,
          rtcRegion: c,
          videoQualityMode: S,
          autoArchiveDuration: T,
          locked: C,
          invitable: I,
          availableTags: f,
          defaultSortOrder: m,
          defaultForumLayout: h,
          iconEmoji: A,
          themeColor: L,
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
          defaultAutoArchiveDuration: N,
          template: _,
          defaultReactionEmoji: E,
          rtcRegion: c,
          videoQualityMode: S,
          autoArchiveDuration: T,
          locked: C,
          invitable: I,
          availableTags: f,
          defaultSortOrder: m,
          defaultForumLayout: h,
          iconEmoji: A,
          themeColor: L,
        });
      }
      async function c(e, t) {
        let {
            name: n,
            type: o,
            position: d,
            topic: N,
            bitrate: _,
            userLimit: E,
            nsfw: c,
            flags: S,
            permissionOverwrites: T,
            rateLimitPerUser: C,
            defaultThreadRateLimitPerUser: I,
            defaultAutoArchiveDuration: f,
            template: m,
            defaultReactionEmoji: h,
            rtcRegion: A,
            videoQualityMode: L,
            autoArchiveDuration: p,
            locked: v,
            invitable: g,
            availableTags: Z,
            defaultSortOrder: y,
            defaultForumLayout: O,
            iconEmoji: G,
            themeColor: H,
          } = t,
          M = u.Z.getChannel(e);
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
                topic: N,
                bitrate: _,
                user_limit: E,
                nsfw: c,
                flags: S,
                permission_overwrites: T,
                rate_limit_per_user: C,
                default_thread_rate_limit_per_user: I,
                default_auto_archive_duration: f,
                template: m,
                rtc_region: A,
                video_quality_mode: L,
                auto_archive_duration: p,
                locked: v,
                invitable: g,
                default_reaction_emoji:
                  null != h
                    ? {
                        emoji_id: null == h ? void 0 : h.emojiId,
                        emoji_name: null == h ? void 0 : h.emojiName,
                      }
                    : null === h
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
                default_sort_order: y,
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
                let n = null == M ? void 0 : M.getGuildId();
                return (
                  null != n &&
                    !(null == M ? void 0 : M.isThread()) &&
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
      function S(e) {
        let t = u.Z.getChannel(e);
        l.tn.del({ url: s.ANM.CHANNEL(e), oldFormErrors: !0 }).then(() => {
          let e = null == t ? void 0 : t.getGuildId();
          null != e &&
            !(null == t ? void 0 : t.isThread()) &&
            r.Z.checkGuildTemplateDirty(e),
            N();
        });
      }
      t.ZP = {
        init: d,
        open: function (e, t, n) {
          d(e, t, n), (0, o.jN)(s.S9g.CHANNEL_SETTINGS);
        },
        close: N,
        setSection: _,
        selectPermissionOverwrite: function (e) {
          i.Z.dispatch({
            type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
            overwriteId: e,
          });
        },
        updateChannel: E,
        saveChannel: c,
        deleteChannel: S,
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
    547653: function (e, t, n) {
      n.r(t), n(47120);
      var l = n(735250),
        i = n(470079),
        r = n(481060),
        a = n(668781),
        u = n(787014),
        o = n(689938);
      t.default = function (e) {
        let { channelId: t, application: n, onClose: s, ...d } = e,
          [N, _] = i.useState(!1),
          E = async () => {
            try {
              _(!0), await u.ZP.removeLinkedLobby(t), s();
            } catch (e) {
              _(!1),
                a.Z.show({
                  title: o.Z.Messages.CHANNEL_SYNCING_STOP_SYNCING_ERROR_TITLE,
                  body: o.Z.Messages.CHANNEL_SYNCING_STOP_SYNCING_ERROR,
                });
            }
          };
        return (0, l.jsx)(r.ConfirmModal, {
          header: o.Z.Messages.CHANNEL_SYNCING_STOP_SYNCING_ALERT_TITLE,
          confirmText: o.Z.Messages.CONFIRM,
          cancelText: o.Z.Messages.CANCEL,
          confirmButtonColor: r.Button.Colors.BRAND,
          onConfirm: E,
          loading: N,
          onClose: s,
          ...d,
          children: (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            children:
              o.Z.Messages.CHANNEL_SYNCING_STOP_SYNCING_ALERT_BODY.format({
                applicationName: n.name,
              }),
          }),
        });
      };
    },
    388610: function (e, t, n) {
      let l, i, r, a, u, o;
      n(724458), n(789020), n(47120);
      var s,
        d,
        N,
        _,
        E = n(392711),
        c = n.n(E),
        S = n(913527),
        T = n.n(S),
        C = n(442837),
        I = n(544891),
        f = n(570140),
        m = n(131704),
        h = n(601964),
        A = n(758449),
        L = n(598077),
        p = n(592125),
        v = n(981631);
      let g = v.QZA.CLOSED,
        Z = {},
        y = {},
        O = !1,
        G = !1,
        H = null,
        M = [
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
        let t = p.Z.getChannel(e.channelId);
        if (null == t) return U();
        (g = v.QZA.OPEN),
          (a = r = t),
          (H = "location" in e && null != e.location ? e.location : null),
          (i = "subsection" in e ? e.subsection : null),
          null != a && (a = a.set("nsfw", a.isNSFW())),
          (u = p.Z.getChannel(a.parent_id)),
          (o = a.getGuildId()),
          (Z = {}),
          R({
            type: "CHANNEL_SETTINGS_SET_SECTION",
            section: null != l ? l : v.CoT.OVERVIEW,
            subsection: i,
          });
      }
      function R(e) {
        (l = e.section),
          (i = e.subsection),
          null != a &&
            l === v.CoT.INSTANT_INVITES &&
            ((O = !0),
            I.tn
              .get({ url: v.ANM.INSTANT_INVITES(a.id), oldFormErrors: !0 })
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
      function U() {
        (G = !1),
          (g = v.QZA.CLOSED),
          (l = null),
          (a = r = null),
          (u = null),
          (y = {});
      }
      let P = c().debounce(() => {
        if (null == a || null == r) return !1;
        let e = a.toJS(),
          t = r.toJS();
        M.every((n) => e[n] === t[n]) && a !== r && ((a = r), D.emitChange());
      }, 500);
      function j(e) {
        return new A.Z({
          code: e.code,
          temporary: e.temporary,
          revoked: e.revoked,
          inviter: null != e.inviter ? new L.Z(e.inviter) : null,
          channel: (0, m.jD)(e.channel),
          guild: null != e.guild ? new h.ZP(e.guild) : null,
          uses: e.uses,
          maxUses: e.max_uses,
          maxAge: e.max_age,
          createdAt: T()(e.created_at),
          type: e.type,
        });
      }
      class w extends (s = C.ZP.Store) {
        initialize() {
          this.waitFor(p.Z);
        }
        hasChanges() {
          return a !== r;
        }
        isOpen() {
          return G;
        }
        getSection() {
          return l;
        }
        getInvites() {
          return { invites: y, loading: O };
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
            submitting: g === v.QZA.SUBMITTING,
            errors: Z,
            channel: a,
            section: l,
            subsection: i,
            invites: y,
            selectedOverwriteId: o,
            hasChanges: this.hasChanges(),
            analyticsLocation: H,
          };
        }
      }
      (_ = "ChannelSettingsStore"),
        (N = "displayName") in (d = w)
          ? Object.defineProperty(d, N, {
              value: _,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (d[N] = _);
      let D = new w(f.Z, {
        CHANNEL_SETTINGS_INIT: b,
        CHANNEL_SETTINGS_OPEN: function (e) {
          (G = !0), b(e);
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
          (g = v.QZA.SUBMITTING), (Z = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
          (r = a), (g = v.QZA.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
          var t;
          (g = v.QZA.OPEN),
            (Z = Object.keys(
              null !== (t = e.errors) && void 0 !== t ? t : {},
            ).reduce((t, n) => {
              let l = e.errors[n];
              return (0, E.isArray)(l) ? (t[n] = l.join("\n")) : (t[n] = l), t;
            }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: U,
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
            autoArchiveDuration: N,
            locked: _,
            invitable: E,
            defaultAutoArchiveDuration: c,
            template: S,
            defaultReactionEmoji: T,
            rtcRegion: C,
            videoQualityMode: I,
            availableTags: f,
            defaultSortOrder: m,
            defaultForumLayout: h,
            iconEmoji: A,
            themeColor: L,
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
            null != N &&
              (a = a.set("threadMetadata", {
                ...a.threadMetadata,
                autoArchiveDuration: N,
              })),
            null != _ &&
              (a = a.set("threadMetadata", { ...a.threadMetadata, locked: _ })),
            null != E &&
              (a = a.set("threadMetadata", {
                ...a.threadMetadata,
                invitable: E,
              })),
            null != c && (a = a.set("defaultAutoArchiveDuration", c)),
            null != S && (a = a.set("template", S)),
            null != n && (a = a.set("type", n)),
            void 0 !== C && (a = a.set("rtcRegion", C)),
            null != I && (a = a.set("videoQualityMode", I)),
            void 0 !== T && (a = a.set("defaultReactionEmoji", T)),
            null != f && (a = a.set("availableTags", f)),
            null != m && (a = a.set("defaultSortOrder", m)),
            null != h && (a = a.set("defaultForumLayout", h)),
            void 0 !== A && (a = a.set("iconEmoji", A)),
            null != L && (a = a.set("themeColor", L)),
            P();
        },
        CHANNEL_SETTINGS_SET_SECTION: R,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
          (y = {}),
            e.invites.forEach((e) => {
              y[e.code] = j(e);
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
                let t = p.Z.getChannel(e);
                if (null == t) return !1;
                (a = r = t), (u = p.Z.getChannel(a.parent_id));
              } else {
                let t = p.Z.getChannel(e);
                if (null == t) return !1;
                (r = t),
                  null != a &&
                    ((a = a.set(
                      "permissionOverwrites",
                      r.permissionOverwrites,
                    )),
                    (u = p.Z.getChannel(a.parent_id)));
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
          g = v.QZA.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
          (y = { ...y }), delete y[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
          y = { ...y, [e.invite.code]: j(e.invite) };
        },
      });
      t.Z = 12633 == n.j ? D : null;
    },
  },
]);
//# sourceMappingURL=19f336958474136d7ca7.js.map
