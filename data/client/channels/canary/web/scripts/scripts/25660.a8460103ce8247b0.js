"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25660"],
  {
    243277(e, t, n) {
      n.d(t, {
        Mc: () => l,
        hG: () => u,
        zs: () => L,
        $5: () => M,
        AH: () => d,
        vY: () => s,
        bV: () => E,
        kS: () => I,
        NX: () => N,
        oN: () => U,
        UW: () => A,
        Nu: () => R,
        M3: () => p,
        TZ: () => T,
        qm: () => c,
        Ku: () => O,
        uh: () => _,
        Us: () => S,
      });
      var a,
        r,
        i,
        o,
        d =
          (((a = {})[(a.BLOCK_MESSAGE = 1)] = "BLOCK_MESSAGE"),
          (a[(a.FLAG_TO_CHANNEL = 2)] = "FLAG_TO_CHANNEL"),
          (a[(a.USER_COMMUNICATION_DISABLED = 3)] =
            "USER_COMMUNICATION_DISABLED"),
          (a[(a.QUARANTINE_USER = 4)] = "QUARANTINE_USER"),
          a),
        l =
          (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"),
          (r[(r.MESSAGE_SEND = 1)] = "MESSAGE_SEND"),
          (r[(r.GUILD_MEMBER_JOIN_OR_UPDATE = 2)] =
            "GUILD_MEMBER_JOIN_OR_UPDATE"),
          r),
        _ =
          (((i = {})[(i.KEYWORD = 1)] = "KEYWORD"),
          (i[(i.SPAM_LINK = 2)] = "SPAM_LINK"),
          (i[(i.ML_SPAM = 3)] = "ML_SPAM"),
          (i[(i.DEFAULT_KEYWORD_LIST = 4)] = "DEFAULT_KEYWORD_LIST"),
          (i[(i.MENTION_SPAM = 5)] = "MENTION_SPAM"),
          (i[(i.USER_PROFILE = 6)] = "USER_PROFILE"),
          (i[(i.SERVER_POLICY = 7)] = "SERVER_POLICY"),
          i),
        s =
          (((o = {})[(o.PROFANITY = 1)] = "PROFANITY"),
          (o[(o.SEXUAL_CONTENT = 2)] = "SEXUAL_CONTENT"),
          (o[(o.SLURS = 3)] = "SLURS"),
          o);
      _.USER_PROFILE,
        _.SERVER_POLICY,
        _.MENTION_SPAM,
        _.ML_SPAM,
        _.DEFAULT_KEYWORD_LIST,
        _.KEYWORD;
      let E = 1e3,
        A = 100,
        u = 1e3,
        c = 10,
        I = 60,
        O = 1,
        L = 1,
        M = 260,
        N = 100,
        S = 1,
        p = 50,
        R = 20,
        T = 300,
        U = "automod-profile-quarantine-alert";
    },
    449585(e, t, n) {
      n.d(t, { Bx: () => l, is: () => s, rI: () => E, w2: () => _ });
      var a = n(627968);
      n(64700);
      var r = n(314116),
        i = n(192308),
        o = n(243277),
        d = n(985018);
      function l(e) {
        return {
          [o.AH.BLOCK_MESSAGE]: (e, t) =>
            new Promise((e) => {
              (0, i.openModalLazy)(async () => {
                let { default: r } = await Promise.all([
                  n.e("25310"),
                  n.e("8891"),
                  n.e("35023"),
                ]).then(n.bind(n, 148210));
                return (n) =>
                  (0, a.jsx)(r, {
                    initialCustomMessage: t.metadata.customMessage ?? "",
                    onSubmit: (a) => {
                      (t.metadata.customMessage = a), e(t), n.onClose();
                    },
                    ...n,
                    onClose: () => (e(null), n.onClose()),
                  });
              });
            }),
          [o.AH.FLAG_TO_CHANNEL]: (t, r) =>
            new Promise((d) => {
              (0, i.openModalLazy)(async () => {
                let { default: i } = await Promise.all([
                    n.e("20930"),
                    n.e("27779"),
                    n.e("93907"),
                    n.e("65341"),
                  ]).then(n.bind(n, 158956)),
                  l = t.actions.find((e) => e.type === o.AH.FLAG_TO_CHANNEL);
                return (n) =>
                  (0, a.jsx)(i, {
                    action: r,
                    isEdit: null != l,
                    triggerType: t.triggerType,
                    guildId: e,
                    onEditChannel: (e) => {
                      (r.metadata.channelId = e),
                        t.exemptChannels.add(e),
                        d(r),
                        n.onClose();
                    },
                    ...n,
                    onClose: () => (d(null), n.onClose()),
                  });
              });
            }),
          [o.AH.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise((r) => {
              (0, i.openModalLazy)(async () => {
                let { default: i } = await Promise.all([
                    n.e("20930"),
                    n.e("27779"),
                    n.e("93907"),
                    n.e("21932"),
                  ]).then(n.bind(n, 16039)),
                  d = e.actions.find(
                    (e) => e.type === o.AH.USER_COMMUNICATION_DISABLED,
                  );
                return (n) =>
                  (0, a.jsx)(i, {
                    action: t,
                    isEdit: null != d,
                    triggerType: e.triggerType,
                    onUpdateDuration: (e) => {
                      null != e && (t.metadata.durationSeconds = e),
                        r(t),
                        n.onClose();
                    },
                    ...n,
                    onClose: () => (r(null), n.onClose()),
                  });
              });
            }),
        };
      }
      function _(e, t, r, o) {
        (0, i.openModalLazy)(async () => {
          let { default: i } = await n.e("15112").then(n.bind(n, 794267));
          return (n) =>
            (0, a.jsx)(i, {
              ...n,
              automodDecision: {
                messageId: e,
                messageContent: t,
                decisionId: r,
                channel: o,
              },
            });
        });
      }
      function s(e, t) {
        (0, i.openModalLazy)(async () => {
          let { default: r } = await Promise.all([
            n.e("5877"),
            n.e("25310"),
            n.e("65606"),
            n.e("40258"),
            n.e("8891"),
            n.e("73669"),
            n.e("7133"),
          ]).then(n.bind(n, 580812));
          return (n) => (0, a.jsx)(r, { ...n, messageId: e, guildId: t });
        });
      }
      function E(e) {
        (0, r.A)({
          title: d.intl.string(d.t.wLGrjB),
          subtitle: d.intl.string(d.t.arYQ2X),
          confirmText: d.intl.string(d.t["cY+Oob"]),
          onConfirm: e,
        });
      }
    },
    137207(e, t, n) {
      n.d(t, {
        E5: () => T,
        G6: () => N,
        H0: () => R,
        Vj: () => S,
        W5: () => U,
        nV: () => p,
        s6: () => M,
        wu: () => y,
      });
      var a = n(636537),
        r = n(228366),
        i = n(58149),
        o = n(71393),
        d = n(576705),
        l = n(403362),
        _ = n(935208),
        s = n(615550),
        E = n(488703),
        A = n(449585),
        u = n(652215);
      function c(e) {
        return { type: e.type, metadata: (0, E.A)(e.metadata) };
      }
      function I(e) {
        let t = (0, E.A)(e.triggerMetadata);
        return (
          null != t && delete t.keywordLists,
          {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: t,
            actions: e.actions.filter(l.Vq).map(c),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(e.exemptChannels ?? []),
            exempt_roles: Array.from(e.exemptRoles ?? []),
          }
        );
      }
      function O(e) {
        return { type: e.type, metadata: (0, E.W)(e.metadata) };
      }
      function L(e) {
        let t = {
          id: e.id ?? _.default.fromTimestamp(Date.now()),
          name: e.name,
          guildId: e.guild_id,
          eventType: e.event_type,
          triggerType: e.trigger_type,
          triggerMetadata: (0, E.W)(e.trigger_metadata),
          actions: e.actions.filter(l.Vq).map(O),
          enabled: e.enabled,
          creatorId: e.creator_id,
          position: e.position,
          exemptChannels: new Set(e.exempt_channels ?? []),
          exemptRoles: new Set(e.exempt_roles ?? []),
        };
        return (
          null != t.triggerMetadata && delete t.triggerMetadata.keywordLists, t
        );
      }
      async function M(e) {
        let t = I(e),
          n = await a.Bo.post({
            url: u.Rsh.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1,
          });
        return (0, E.W)(n.body);
      }
      async function N(e) {
        let t = I(e);
        return (
          delete t.id,
          L(
            (
              await a.Bo.post({
                url: u.Rsh.GUILD_AUTOMOD_RULES(e.guildId),
                body: t,
                rejectWithError: !1,
              })
            ).body,
          )
        );
      }
      async function S(e) {
        let t = I(e);
        return L(
          (
            await a.Bo.patch({
              url: u.Rsh.GUILD_AUTOMOD_RULE(e.guildId, e.id),
              body: t,
              rejectWithError: !1,
            })
          ).body,
        );
      }
      async function p(e, t) {
        return (
          await a.Bo.del({
            url: u.Rsh.GUILD_AUTOMOD_RULE(t, e),
            rejectWithError: !1,
          }),
          !0
        );
      }
      async function R(e) {
        let t = await a.Bo.get({
          url: u.Rsh.GUILD_AUTOMOD_RULES(e),
          rejectWithError: !1,
        });
        return Array.isArray(t.body) ? t.body.map(L) : [];
      }
      async function T(e, t, n) {
        d.A.can(u.xBc.MANAGE_MESSAGES, t) &&
          (await a.Bo.post({
            url: u.Rsh.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: { message_id: e, channel_id: t.id, alert_action_type: n },
            rejectWithError: !1,
          }));
      }
      function U(e, t, n) {
        let r = o.A.getGuild(e);
        null != r &&
          d.A.can(u.xBc.MANAGE_GUILD, r) &&
          (0, A.rI)(() => {
            (0, i.zV)(u.HAw.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: s.Gb.MENTION_RAID_REMOVE_RESTRICTION,
              decision_id: t,
            }),
              a.Bo.post({
                url: u.Rsh.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
                rejectWithError: !0,
              }),
              n();
          });
      }
      function y(e) {
        r.h.dispatch({
          type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
          guildId: e,
        });
      }
    },
  },
]);
//# sourceMappingURL=25660.a8460103ce8247b0.js.map
