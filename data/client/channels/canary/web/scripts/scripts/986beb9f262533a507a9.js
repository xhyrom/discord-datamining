"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33180"],
  {
    822869: function (e, n, t) {
      t.d(n, {
        Ad: function () {
          return f;
        },
        Lb: function () {
          return u;
        },
        ZF: function () {
          return d;
        },
        gP: function () {
          return s;
        },
        mh: function () {
          return _;
        },
        sF: function () {
          return o;
        },
        xp: function () {
          return c;
        },
      });
      var i = t(470079),
        r = t(392711),
        a = t(626135),
        l = t(981631);
      function u(e, n, t) {
        a.default.track(l.rMx.FORWARD_MESSAGE_STARTED, {
          channel_id: e,
          message_id: n,
          source: t,
        });
      }
      function o(e) {
        let {
          channelId: n,
          messageId: t,
          numDestinationChanges: i,
          numQueryChanges: r,
        } = e;
        a.default.track(l.rMx.FORWARD_MESSAGE_CANCELLED, {
          channel_id: n,
          message_id: t,
          num_destination_changes: i,
          num_query_changes: r,
        });
      }
      function s(e) {
        let {
          channelId: n,
          messageId: t,
          hasError: i,
          hasContextMessage: r,
          numDestinations: u,
          numDestinationChanges: o,
          numQueryChanges: s,
          anyDestinationHasSlowmode: c,
        } = e;
        a.default.track(l.rMx.FORWARD_MESSAGE_SENT, {
          channel_id: n,
          message_id: t,
          has_error: i,
          has_context_message: r,
          num_destinations: u,
          num_destination_changes: o,
          num_query_changes: s,
          any_destination_has_slowmode: c,
        });
      }
      function c(e, n) {
        a.default.track(l.rMx.FORWARD_COPY_LINK, {
          channel_id: e,
          message_id: n,
        });
      }
      function d() {
        return i.useMemo(
          () =>
            (0, r.once)((e, n, t) => {
              a.default.track(l.rMx.FORWARD_ADD_RECIPIENT, {
                channel_id: e,
                message_id: n,
                has_query: t,
              });
            }),
          [],
        );
      }
      function _() {
        return i.useMemo(
          () =>
            (0, r.once)((e, n) => {
              a.default.track(l.rMx.FORWARD_EDIT_SEARCH, {
                channel_id: e,
                message_id: n,
              });
            }),
          [],
        );
      }
      function f() {
        return i.useMemo(
          () =>
            (0, r.once)((e, n) => {
              a.default.track(l.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
                channel_id: e,
                message_id: n,
              });
            }),
          [],
        );
      }
    },
    868643: function (e, n, t) {
      t.d(n, {
        a: function () {
          return f;
        },
        h: function () {
          return _;
        },
      }),
        t(789020);
      var i = t(470079),
        r = t(442837),
        a = t(430198),
        l = t(592125),
        u = t(430824),
        o = t(630388),
        s = t(981631);
      let c =
        s.iLy.CROSSPOSTED |
        s.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD |
        s.iLy.GUILD_FEED_HIDDEN |
        s.iLy.HAS_SNAPSHOT |
        s.iLy.HAS_THREAD |
        s.iLy.IS_CROSSPOST |
        s.iLy.IS_VOICE_MESSAGE |
        s.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING |
        s.iLy.SUPPRESS_EMBEDS |
        s.iLy.SUPPRESS_NOTIFICATIONS |
        s.iLy.URGENT;
      function d(e) {
        return (
          (!!(e.state !== s.yb.SEND_FAILED && s.V$x.FORWARDABLE.has(e.type)) &&
            null == e.poll &&
            null == e.activity &&
            null == e.call &&
            null == e.activityInstance &&
            0 === (0, o.Ge)(e.flags, c)) ||
          !1
        );
      }
      function _(e) {
        var n;
        if (!d(e)) return !1;
        let t =
          null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n
            ? void 0
            : n.guild_id;
        return (
          !(null != t && a.Z.isChannelOrThreadParentGated(t, e.channel_id)) &&
          !0
        );
      }
      function f(e) {
        let n = (0, r.e7)([u.Z, a.Z, l.Z], () => {
          var n, t;
          if (null == e) return !0;
          let i =
            null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n
              ? void 0
              : n.guild_id;
          return (
            !!(
              null != i &&
              (null === (t = u.Z.getGuild(i)) || void 0 === t
                ? void 0
                : t.hasFeature(s.oNc.FORWARDING_DISABLED))
            ) ||
            (null != i && a.Z.isChannelOrThreadParentGated(i, e.channel_id))
          );
        });
        return i.useMemo(() => !n && null != e && d(e), [n, e]);
      }
    },
    394779: function (e, n, t) {
      t.d(n, {
        s: function () {
          return h;
        },
      });
      var i = t(735250),
        r = t(470079),
        a = t(120356),
        l = t.n(a),
        u = t(481060),
        o = t(346610),
        s = t(868643),
        c = t(912332),
        d = t(503349),
        _ = t(689938),
        f = t(760997);
      function m() {
        (0, u.closeModal)(d.c);
      }
      function E(e) {
        let { className: n, channelId: t, messageId: a, target: o } = e,
          s = r.useCallback(() => {
            if ("embed" === o.type) {
              (0, c.l8)({
                messageId: a,
                channelId: t,
                source: "media-viewer",
                forwardOptions: { onlyEmbedIndices: [o.embedIndex] },
                onRequestSent: m,
              });
              return;
            }
            (0, c.l8)({
              messageId: a,
              channelId: t,
              source: "media-viewer",
              forwardOptions: { onlyAttachmentIds: [o.attachmentId] },
              onRequestSent: m,
            });
          }, [t, a, o]);
        return (0, i.jsx)(u.Clickable, {
          className: l()(f.container, n),
          onClick: s,
          children: (0, i.jsx)(u.Text, {
            className: f.text,
            variant: "text-sm/medium",
            color: "always-white",
            children: _.Z.Messages.MESSAGE_ACTION_FORWARD,
          }),
        });
      }
      function h(e, n) {
        let { canForwardMessages: t } = (0, o.WT)(
          { location: "ForwardLink" },
          { autoTrackExposure: !1 },
        );
        return t && (0, s.h)(e)
          ? (t) => {
              let { className: r } = t;
              return (0, i.jsx)(E, {
                className: r,
                channelId: e.channel_id,
                messageId: e.id,
                target: n,
              });
            }
          : () => null;
      }
    },
    912332: function (e, n, t) {
      t.d(n, {
        Np: function () {
          return s;
        },
        l8: function () {
          return u;
        },
        mc: function () {
          return o;
        },
        so: function () {
          return l;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(481060),
        a = t(822869);
      let l = "forward-modal";
      function u(e) {
        let {
          messageId: n,
          channelId: u,
          source: o,
          initialSelectedDestinations: s = [],
          forwardOptions: c,
          onRequestSent: d,
        } = e;
        (0, a.Lb)(u, n, o),
          (0, r.openModalLazy)(
            async () => {
              let { ForwardModal: e } = await Promise.all([
                t.e("6380"),
                t.e("99452"),
              ]).then(t.bind(t, 930864));
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  channelId: u,
                  messageId: n,
                  initialSelectedDestinations: s,
                  forwardOptions: c,
                  onRequestSent: d,
                });
            },
            { modalKey: l },
          );
      }
      function o() {
        (0, r.closeModal)(l);
      }
      function s(e) {
        let {
          messageId: n,
          channelId: a,
          failedDestinations: l,
          forwardOptions: u,
        } = e;
        (0, r.openModalLazy)(async () => {
          let { ForwardFailedAlertModal: e } = await t
            .e("86590")
            .then(t.bind(t, 384331));
          return (t) =>
            (0, i.jsx)(e, {
              ...t,
              messageId: n,
              channelId: a,
              failedDestinations: l,
              forwardOptions: u,
            });
        });
      }
    },
    850908: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      function i(e) {
        if (null != e.title && null != e.filename) {
          let n = e.filename.lastIndexOf("."),
            t = n > 0 ? e.filename.substr(n) : "";
          return e.title + t;
        }
        return e.filename;
      }
    },
    219797: function (e, n, t) {
      t.d(n, {
        L9: function () {
          return R;
        },
        ZK: function () {
          return N;
        },
        d4: function () {
          return L;
        },
        dS: function () {
          return g;
        },
        jY: function () {
          return v;
        },
        q7: function () {
          return D;
        },
        vZ: function () {
          return C;
        },
      }),
        t(789020);
      var i = t(735250),
        r = t(470079),
        a = t(442837),
        l = t(993365),
        u = t(981729),
        o = t(481060),
        s = t(543651),
        c = t(394779),
        d = t(519320),
        _ = t(592125),
        f = t(52824),
        m = t(630388),
        E = t(591759),
        h = t(850908),
        S = t(524444),
        I = t(981631),
        A = t(689938),
        p = t(120131);
      function g(e) {
        var n;
        let t = e.item.originalItem;
        return (0, S.Yi)({
          ...e,
          alt: t.description,
          src: (0, f.q)({ proxyURL: t.proxy_url, url: t.url }),
          original: t.url,
          placeholder: t.placeholder,
          placeholderVersion: t.placeholder_version,
          srcIsAnimated: (0, m.yE)(
            null !== (n = t.flags) && void 0 !== n ? n : 0,
            I.J0y.IS_ANIMATED,
          ),
          renderForwardComponent: (0, c.s)(e.message, {
            type: "attachment",
            attachmentId: t.id,
          }),
        });
      }
      function C(e) {
        var n;
        let t = e.item.originalItem,
          a = r.useCallback(() => {
            var e;
            return (0, m.yE)(
              null !== (e = t.flags) && void 0 !== e ? e : 0,
              I.J0y.IS_CLIP,
            )
              ? (0, i.jsxs)(u.DY, {
                  text: A.Z.Messages.CLIPS_BETA_TAG_HOVER,
                  className: p.clipPill,
                  children: [
                    (0, i.jsx)(o.ClipsIcon, {
                      size: "xs",
                      color: "currentColor",
                    }),
                    (0, i.jsx)(l.x, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      children: A.Z.Messages.CLIP_TAG,
                    }),
                  ],
                })
              : null;
          }, [t]),
          s = E.Z.toURLSafe(t.proxy_url);
        return null == s
          ? null
          : (s.searchParams.append("format", "webp"),
            (0, S.lV)({
              ...e,
              alt: t.description,
              poster: s.toString(),
              fileSize: t.size,
              fileName: (0, h.Z)(t),
              src: t.url,
              placeholder: t.placeholder,
              placeholderVersion: t.placeholder_version,
              srcIsAnimated: (0, m.yE)(
                null !== (n = t.flags) && void 0 !== n ? n : 0,
                I.J0y.IS_ANIMATED,
              ),
              renderOverlayContent: a,
              renderForwardComponent: (0, c.s)(e.message, {
                type: "attachment",
                attachmentId: t.id,
              }),
            }));
      }
      function D(e) {
        let n = e.item.originalItem;
        return (0, S.hX)({
          ...e,
          fileSize: n.size,
          fileName: (0, h.Z)(n),
          src: n.url,
        });
      }
      function v(e) {
        let { message: n, item: t } = e,
          i = t.originalItem,
          a = r.useCallback(
            (e, t, r) => {
              var a;
              (0, d.tb)(
                n.id,
                null !== (a = i.duration_secs) && void 0 !== a ? a : null,
                t,
                n.author.id,
              );
            },
            [n, i.duration_secs],
          ),
          l = r.useCallback(
            (e, t) => {
              var r;
              (0, d.EW)(
                n.id,
                null !== (r = i.duration_secs) && void 0 !== r ? r : null,
                e,
                n.author.id,
                t,
              );
            },
            [n, i.duration_secs],
          ),
          u = r.useCallback(
            (e) => {
              var t;
              (0, d.Np)(
                n.id,
                null !== (t = null == e ? void 0 : e.message) && void 0 !== t
                  ? t
                  : null,
              );
            },
            [n],
          );
        return (0, S.wj)({
          ...e,
          fileSize: i.size,
          fileName: (0, h.Z)(i),
          src: i.url,
          durationSecs: i.duration_secs,
          waveform: i.waveform,
          onPlay: a,
          onPause: l,
          onError: u,
        });
      }
      function L(e) {
        let n = e.item.originalItem;
        return (0, S.xi)({
          ...e,
          url: n.url,
          fileName: (0, h.Z)(n),
          fileSize: n.size,
          contentType: n.content_type,
        });
      }
      function N(e) {
        let n = e.item.originalItem;
        return (0, S.ur)({
          ...e,
          url: n.url,
          fileName: (0, h.Z)(n),
          fileSize: n.size,
        });
      }
      function R(e) {
        if ("CLIP" === e.item.type)
          return (0, i.jsx)(y, {
            attachment: e.item.originalItem,
            message: e.message,
          });
        return null;
      }
      function y(e) {
        var n;
        let { attachment: t, message: r } = e,
          l = r.channel_id,
          u = (0, a.e7)([_.Z], () => {
            var e;
            return null === (e = _.Z.getBasicChannel(l)) || void 0 === e
              ? void 0
              : e.guild_id;
          }),
          {
            clip_created_at: o,
            clip_participants: c,
            title: d,
            application: f,
          } = t;
        return (0, i.jsx)(s.Z, {
          createdAt: null != o ? Date.parse(o) : void 0,
          participantIds:
            null !==
              (n =
                null == c
                  ? void 0
                  : c.map((e) => {
                      let { id: n } = e;
                      return n;
                    })) && void 0 !== n
              ? n
              : [],
          applicationId: null == f ? void 0 : f.id,
          title: d,
          guildId: u,
        });
      }
    },
    519320: function (e, n, t) {
      t.d(n, {
        EW: function () {
          return o;
        },
        Np: function () {
          return s;
        },
        tb: function () {
          return u;
        },
      });
      var i,
        r,
        a = t(626135),
        l = t(981631);
      function u(e, n, t, i) {
        a.default.track(l.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
          message_id: e,
          total_duration_secs: n,
          start_duration_secs: Math.min(null != n ? n : t, t),
          sender_user_id: i,
        });
      }
      function o(e, n, t, i, r) {
        a.default.track(l.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
          message_id: e,
          total_duration_secs: n,
          end_duration_secs: Math.min(null != n ? n : t, t),
          sender_user_id: i,
          duration_listening_secs: r,
        });
      }
      function s(e, n) {
        a.default.track(l.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
          message_id: e,
          error_message: n,
        });
      }
      ((i = r || (r = {})).SENT = "sent"),
        (i.CANCELLED_DURATION = "cancelled_duration"),
        (i.CANCELLED_USER_REQUESTED = "cancelled_user_requested"),
        (i.CANCELLED_GESTURE_CONFLICT = "cancelled_gesture_conflict"),
        (i.CANCELLED_ON_BACKGROUND = "cancelled_on_background");
    },
  },
]);
//# sourceMappingURL=986beb9f262533a507a9.js.map
