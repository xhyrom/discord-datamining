"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63517"],
  {
    333848: function (n, e, t) {
      t(411104);
      var i = t(990547),
        c = t(283693),
        r = t(570140),
        l = t(408987),
        a = t(9156),
        o = t(621600),
        d = t(573261),
        u = t(87051),
        s = t(981631),
        _ = t(526761);
      e.Z = {
        createChannel(n) {
          let {
            guildId: e,
            type: t,
            name: p,
            permissionOverwrites: E = [],
            bitrate: h,
            userLimit: T,
            parentId: A,
            skuId: g,
            branchId: f,
          } = n;
          r.Z.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT" });
          let v = { type: t, name: p, permission_overwrites: E };
          if (
            (null != h && h !== s.epw && (v.bitrate = h),
            null != T && T > 0 && (v.user_limit = T),
            null != A && (v.parent_id = A),
            t === s.d4z.GUILD_STORE)
          ) {
            if (null == g) throw Error("Unexpected missing SKU");
            (v.sku_id = g), (v.branch_id = f);
          }
          return d.Z.post({
            url: s.ANM.GUILD_CHANNELS(e),
            body: v,
            oldFormErrors: !0,
            trackedActionData: {
              event: i.NetworkActionNames.CHANNEL_CREATE,
              properties: (n) => {
                var e, t;
                return (0, c.iG)({
                  is_private: E.length > 0,
                  channel_id:
                    null == n
                      ? void 0
                      : null === (e = n.body) || void 0 === e
                        ? void 0
                        : e.id,
                  channel_type:
                    null == n
                      ? void 0
                      : null === (t = n.body) || void 0 === t
                        ? void 0
                        : t.type,
                });
              },
            },
          }).then(
            (n) => (
              a.ZP.isOptInEnabled(e) &&
                u.Z.updateChannelOverrideSettings(
                  e,
                  n.body.id,
                  { flags: _.ic.OPT_IN_ENABLED },
                  o.ZB.OptedIn,
                ),
              l.Z.checkGuildTemplateDirty(e),
              n
            ),
            (n) => {
              throw (
                (r.Z.dispatch({
                  type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                  errors: n.body,
                }),
                n)
              );
            },
          );
        },
        createRoleSubscriptionTemplateChannel: (n, e, t, r) =>
          d.Z.post({
            url: s.ANM.GUILD_CHANNELS(n),
            body: { name: e, type: t, topic: r },
            oldFormErrors: !0,
            trackedActionData: {
              event: i.NetworkActionNames.CHANNEL_CREATE,
              properties: (n) => {
                var e, t;
                return (0, c.iG)({
                  is_private: !0,
                  channel_id:
                    null == n
                      ? void 0
                      : null === (e = n.body) || void 0 === e
                        ? void 0
                        : e.id,
                  channel_type:
                    null == n
                      ? void 0
                      : null === (t = n.body) || void 0 === t
                        ? void 0
                        : t.type,
                });
              },
            },
          }),
      };
    },
    471253: function (n, e, t) {
      t.d(e, {
        DT: function () {
          return b;
        },
        Ef: function () {
          return S;
        },
        HO: function () {
          return y;
        },
        NZ: function () {
          return O;
        },
        Pq: function () {
          return C;
        },
        Q1: function () {
          return g;
        },
        RK: function () {
          return v;
        },
        _0: function () {
          return f;
        },
        hz: function () {
          return N;
        },
        yi: function () {
          return I;
        },
      });
      var i = t(512722),
        c = t.n(i),
        r = t(149765),
        l = t(544891),
        a = t(493683);
      t(749210);
      var o = t(911969),
        d = t(367907),
        u = t(944486),
        s = t(979651),
        _ = t(700785),
        p = t(922482),
        E = t(192079),
        h = t(706058),
        T = t(590415),
        A = t(981631);
      function g(n, e) {
        let t = n.getGuildId();
        return (
          c()(null != t, "This channel cannot be guildless."),
          e && (0, d.yw)(A.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, E.s$)(n) }),
          l.tn.patch({
            url: A.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: e ? new Date().toISOString() : null,
              channel_id: n.id,
            },
          })
        );
      }
      function f(n, e) {
        let t = n.getGuildId();
        return (
          c()(null != t, "This channel cannot be guildless."),
          l.tn.patch({
            url: A.ANM.UPDATE_VOICE_STATE(t, e),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
          })
        );
      }
      function v(n, e) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        c()(null != i, "This channel cannot be guildless.");
        let r = s.Z.getVoiceStateForChannel(n.id);
        return (
          (0, T.gf)(r) === T.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !e &&
            (0, d.yw)(A.rMx.PROMOTED_TO_SPEAKER, { ...(0, E.s$)(n) }),
          l.tn.patch({
            url: A.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: e,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(t ? { silent: t } : {}),
            },
          })
        );
      }
      function I(n) {
        let e = null == n ? void 0 : n.getGuildId();
        return (
          c()(null != e, "This channel cannot be guildless."),
          l.tn.patch({
            url: A.ANM.UPDATE_VOICE_STATE(e),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function b(n, e, t) {
        let i = n.getGuildId();
        return (
          c()(null != i, "This channel cannot be guildless."),
          l.tn.patch({
            url: A.ANM.UPDATE_VOICE_STATE(i, e),
            body: { suppress: t, channel_id: n.id },
          })
        );
      }
      function N(n, e) {
        if (null == e || null == n) return;
        let t = e.getGuildId();
        return (
          c()(null != t, "This channel cannot be guildless."),
          b(e, n.id, !0),
          l.tn.patch({
            url: A.ANM.UPDATE_VOICE_STATE(t, n.id),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function C(n, e, t) {
        let i = n.getGuildId();
        c()(null != i, "Channel cannot be guildless");
        let l = n.permissionOverwrites[i],
          d = { id: i, type: o.BN.ROLE, allow: _.Hn, deny: _.Hn, ...l };
        t
          ? ((d.allow = r.IH(d.allow, e)), (d.deny = r.Od(d.deny, e)))
          : ((d.allow = r.Od(d.allow, e)), (d.deny = r.IH(d.deny, e))),
          a.Z.updatePermissionOverwrite(n.id, d);
      }
      async function y(n, e, t, i) {
        if ("" === e) return;
        u.Z.getVoiceChannelId() !== n.id && (0, p.TM)(n);
        let c = await (0, h.me)(n.id, e, t, i);
        return v(n, !1, !0), c;
      }
      async function S(n, e, t) {
        if ("" !== e) return await (0, h.Dk)(n.id, e, t);
      }
      async function O(n) {
        await (0, h.Ix)(n.id);
      }
    },
    192079: function (n, e, t) {
      t.d(e, {
        ER: function () {
          return s;
        },
        kk: function () {
          return _;
        },
        s$: function () {
          return p;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var i = t(19780),
        c = t(5192),
        r = t(700785),
        l = t(427679),
        a = t(157925),
        o = t(981631),
        d = t(71080),
        u = t(388032);
      function s(n, e, t, i) {
        let r = e[0],
          l = c.ZP.getName(n, t, r),
          a = null != i ? i : e.length;
        return 1 === a && null != r
          ? l
          : null == r
            ? u.intl.formatToPlainString(u.t.chmM9P, { count: a })
            : u.intl.formatToPlainString(u.t.GhkJ29, { name: l, count: a - 1 });
      }
      function _(n, e) {
        switch (n) {
          case d.aC.OWNER:
            return u.intl.string(u.t.icuNBA);
          case d.aC.ADMINISTRATOR:
            return u.intl.string(u.t.eTmN5e);
          case d.aC.MEMBER:
          case d.aC.ROLE:
            return e ? u.intl.string(u.t.Hw3XW1) : u.intl.string(u.t.YieyPj);
          case d.aC.EMPTY_STATE:
        }
        return null;
      }
      function p(n) {
        let e = l.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == e ? void 0 : e.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: r.Uu(o.Plq.REQUEST_TO_SPEAK, n)
            ? a.BM.EVERYONE
            : a.BM.NO_ONE,
          stage_instance_id: null == e ? void 0 : e.id,
        };
      }
    },
    706058: function (n, e, t) {
      t.d(e, {
        Dk: function () {
          return l;
        },
        Ix: function () {
          return a;
        },
        me: function () {
          return r;
        },
      });
      var i = t(544891),
        c = t(981631);
      async function r(n, e, t, r, l) {
        return (
          await i.tn.post({
            url: c.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: e,
              privacy_level: t,
              guild_scheduled_event_id: l,
              send_start_notification: r,
            },
          })
        ).body;
      }
      async function l(n, e, t) {
        return (
          await i.tn.patch({
            url: c.ANM.STAGE_INSTANCE(n),
            body: { topic: e, privacy_level: t },
          })
        ).body;
      }
      function a(n) {
        return i.tn.del(c.ANM.STAGE_INSTANCE(n));
      }
    },
    727642: function (n, e, t) {
      n.exports = {
        card: "card_cc2c09",
        lurking: "lurking_cc2c09",
        padding: "padding_cc2c09",
        isRecurring: "isRecurring_cc2c09",
        joined: "joined_cc2c09",
        inline: "inline_cc2c09",
        guildIcon: "guildIcon_cc2c09",
        channelContainer: "channelContainer_cc2c09",
        channelContainerEnabled: "channelContainerEnabled_cc2c09",
        channelContainerDisabled: "channelContainerDisabled_cc2c09",
        icon: "icon_cc2c09",
        spacing: "spacing_cc2c09",
        divider: "divider_cc2c09",
        footer: "footer_cc2c09",
        channelLocation: "channelLocation_cc2c09 label_cc2c09",
        externalLocation: "externalLocation_cc2c09 label_cc2c09",
      };
    },
    673444: function (n, e, t) {
      n.exports = {
        grid: "grid_bd205c",
        speakerContainer: "speakerContainer_bd205c",
        avatar: "avatar_bd205c",
        iconMicrophone: "iconMicrophone_bd205c",
        textInGridContainer: "textInGridContainer_bd205c",
        textInGrid: "textInGrid_bd205c",
      };
    },
    321019: function (n, e, t) {
      n.exports = {
        content: "content_dec63a",
        previewCard: "previewCard_dec63a",
        inline: "inline_dec63a",
        header: "header_dec63a",
        privacyLevel: "privacyLevel_dec63a inline_dec63a",
        buttons: "buttons_dec63a",
        button: "button_dec63a",
        publicIcon: "publicIcon_dec63a",
        spacing: "spacing_dec63a",
        verticalSpacing: "verticalSpacing_dec63a",
        errorMessage: "errorMessage_dec63a",
      };
    },
  },
]);
//# sourceMappingURL=a9a784b8de5fb70f1021.js.map
