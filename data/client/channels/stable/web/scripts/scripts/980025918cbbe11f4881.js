"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92999"],
  {
    822869: function (e, n, t) {
      t.d(n, {
        Ad: function () {
          return f;
        },
        Lb: function () {
          return r;
        },
        ZF: function () {
          return u;
        },
        gP: function () {
          return s;
        },
        mh: function () {
          return _;
        },
        sF: function () {
          return l;
        },
        xp: function () {
          return d;
        },
      });
      var i = t(470079),
        o = t(392711),
        a = t(626135),
        c = t(981631);
      function r(e, n, t) {
        a.default.track(c.rMx.FORWARD_MESSAGE_STARTED, {
          channel_id: e,
          message_id: n,
          source: t,
        });
      }
      function l(e) {
        let {
          channelId: n,
          messageId: t,
          numDestinationChanges: i,
          numQueryChanges: o,
        } = e;
        a.default.track(c.rMx.FORWARD_MESSAGE_CANCELLED, {
          channel_id: n,
          message_id: t,
          num_destination_changes: i,
          num_query_changes: o,
        });
      }
      function s(e) {
        let {
          channelId: n,
          messageId: t,
          hasError: i,
          hasContextMessage: o,
          numDestinations: r,
          numDestinationChanges: l,
          numQueryChanges: s,
          anyDestinationHasSlowmode: d,
        } = e;
        a.default.track(c.rMx.FORWARD_MESSAGE_SENT, {
          channel_id: n,
          message_id: t,
          has_error: i,
          has_context_message: o,
          num_destinations: r,
          num_destination_changes: l,
          num_query_changes: s,
          any_destination_has_slowmode: d,
        });
      }
      function d(e, n) {
        a.default.track(c.rMx.FORWARD_COPY_LINK, {
          channel_id: e,
          message_id: n,
        });
      }
      function u() {
        return i.useMemo(
          () =>
            (0, o.once)((e, n, t) => {
              a.default.track(c.rMx.FORWARD_ADD_RECIPIENT, {
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
            (0, o.once)((e, n) => {
              a.default.track(c.rMx.FORWARD_EDIT_SEARCH, {
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
            (0, o.once)((e, n) => {
              a.default.track(c.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
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
          return _;
        },
        h: function () {
          return u;
        },
      }),
        t(789020);
      var i = t(470079),
        o = t(442837),
        a = t(430198),
        c = t(592125),
        r = t(630388),
        l = t(981631);
      let s =
        l.iLy.CROSSPOSTED |
        l.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD |
        l.iLy.GUILD_FEED_HIDDEN |
        l.iLy.HAS_SNAPSHOT |
        l.iLy.HAS_THREAD |
        l.iLy.IS_CROSSPOST |
        l.iLy.IS_VOICE_MESSAGE |
        l.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING |
        l.iLy.SUPPRESS_EMBEDS |
        l.iLy.SUPPRESS_NOTIFICATIONS |
        l.iLy.URGENT;
      function d(e) {
        return (
          (!!(e.state !== l.yb.SEND_FAILED && l.V$x.FORWARDABLE.has(e.type)) &&
            null == e.poll &&
            null == e.activity &&
            null == e.call &&
            null == e.activityInstance &&
            0 === (0, r.Ge)(e.flags, s)) ||
          !1
        );
      }
      function u(e) {
        var n;
        if (!d(e)) return !1;
        let t =
          null === (n = c.Z.getChannel(e.channel_id)) || void 0 === n
            ? void 0
            : n.guild_id;
        return (
          !(null != t && a.Z.isChannelOrThreadParentGated(t, e.channel_id)) &&
          !0
        );
      }
      function _(e) {
        let n = (0, o.e7)([a.Z, c.Z], () => {
          var n;
          if (null == e) return !1;
          let t =
            null === (n = c.Z.getChannel(e.channel_id)) || void 0 === n
              ? void 0
              : n.guild_id;
          return null != t && a.Z.isChannelOrThreadParentGated(t, e.channel_id);
        });
        return i.useMemo(() => null != e && d(e), [e]) && !n;
      }
    },
    394779: function (e, n, t) {
      t.d(n, {
        s: function () {
          return h;
        },
      });
      var i = t(735250),
        o = t(470079),
        a = t(120356),
        c = t.n(a),
        r = t(481060),
        l = t(346610),
        s = t(868643),
        d = t(912332),
        u = t(503349),
        _ = t(689938),
        f = t(760997);
      function m() {
        (0, r.closeModal)(u.c);
      }
      function I(e) {
        let { className: n, channelId: t, messageId: a, target: l } = e,
          s = o.useCallback(() => {
            if ("embed" === l.type) {
              (0, d.l8)({
                messageId: a,
                channelId: t,
                source: "media-viewer",
                forwardOptions: { onlyEmbedIndices: [l.embedIndex] },
                onRequestSent: m,
              });
              return;
            }
            (0, d.l8)({
              messageId: a,
              channelId: t,
              source: "media-viewer",
              forwardOptions: { onlyAttachmentIds: [l.attachmentId] },
              onRequestSent: m,
            });
          }, [t, a, l]);
        return (0, i.jsx)(r.Clickable, {
          className: c()(f.container, n),
          onClick: s,
          children: (0, i.jsx)(r.Text, {
            className: f.text,
            variant: "text-sm/medium",
            color: "always-white",
            children: _.Z.Messages.MESSAGE_ACTION_FORWARD,
          }),
        });
      }
      function h(e, n) {
        let { canForwardMessages: t } = (0, l.WT)(
          { location: "ForwardLink" },
          { autoTrackExposure: !1 },
        );
        return t && (0, s.h)(e)
          ? (t) => {
              let { className: o } = t;
              return (0, i.jsx)(I, {
                className: o,
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
          return r;
        },
        mc: function () {
          return l;
        },
        so: function () {
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var o = t(481060),
        a = t(822869);
      let c = "forward-modal";
      function r(e) {
        let {
          messageId: n,
          channelId: r,
          source: l,
          initialSelectedDestinations: s = [],
          forwardOptions: d,
          onRequestSent: u,
        } = e;
        (0, a.Lb)(r, n, l),
          (0, o.openModalLazy)(
            async () => {
              let { ForwardModal: e } = await Promise.all([
                t.e("6380"),
                t.e("99452"),
              ]).then(t.bind(t, 930864));
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  channelId: r,
                  messageId: n,
                  initialSelectedDestinations: s,
                  forwardOptions: d,
                  onRequestSent: u,
                });
            },
            { modalKey: c },
          );
      }
      function l() {
        (0, o.closeModal)(c);
      }
      function s(e) {
        let {
          messageId: n,
          channelId: a,
          failedDestinations: c,
          forwardOptions: r,
        } = e;
        (0, o.openModalLazy)(async () => {
          let { ForwardFailedAlertModal: e } = await t
            .e("86590")
            .then(t.bind(t, 384331));
          return (t) =>
            (0, i.jsx)(e, {
              ...t,
              messageId: n,
              channelId: a,
              failedDestinations: c,
              forwardOptions: r,
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
          return T;
        },
        ZK: function () {
          return x;
        },
        d4: function () {
          return M;
        },
        dS: function () {
          return S;
        },
        jY: function () {
          return A;
        },
        q7: function () {
          return g;
        },
        vZ: function () {
          return v;
        },
      }),
        t(789020);
      var i = t(735250),
        o = t(470079),
        a = t(442837),
        c = t(993365),
        r = t(981729),
        l = t(481060),
        s = t(543651),
        d = t(394779),
        u = t(519320),
        _ = t(592125),
        f = t(52824),
        m = t(630388),
        I = t(591759),
        h = t(850908),
        p = t(524444),
        E = t(981631),
        C = t(689938),
        y = t(120131);
      function S(e) {
        let n = e.item.originalItem;
        return (0, p.Yi)({
          ...e,
          alt: n.description,
          src: (0, f.q)({ proxyURL: n.proxy_url, url: n.url }),
          original: n.url,
          placeholder: n.placeholder,
          placeholderVersion: n.placeholder_version,
          renderForwardComponent: (0, d.s)(e.message, {
            type: "attachment",
            attachmentId: n.id,
          }),
        });
      }
      function v(e) {
        let n = e.item.originalItem,
          t = o.useCallback(() => {
            var e;
            return (0, m.yE)(
              null !== (e = n.flags) && void 0 !== e ? e : 0,
              E.J0y.IS_CLIP,
            )
              ? (0, i.jsxs)(r.DY, {
                  text: C.Z.Messages.CLIPS_BETA_TAG_HOVER,
                  className: y.clipPill,
                  children: [
                    (0, i.jsx)(l.ClipsIcon, {
                      size: "xs",
                      color: "currentColor",
                    }),
                    (0, i.jsx)(c.x, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      children: C.Z.Messages.CLIP_TAG,
                    }),
                  ],
                })
              : null;
          }, [n]),
          a = I.Z.toURLSafe(n.proxy_url);
        return null == a
          ? null
          : (a.searchParams.append("format", "webp"),
            (0, p.lV)({
              ...e,
              alt: n.description,
              poster: a.toString(),
              fileSize: n.size,
              fileName: (0, h.Z)(n),
              src: n.url,
              placeholder: n.placeholder,
              placeholderVersion: n.placeholder_version,
              renderOverlayContent: t,
              renderForwardComponent: (0, d.s)(e.message, {
                type: "attachment",
                attachmentId: n.id,
              }),
            }));
      }
      function g(e) {
        let n = e.item.originalItem;
        return (0, p.hX)({
          ...e,
          fileSize: n.size,
          fileName: (0, h.Z)(n),
          src: n.url,
        });
      }
      function A(e) {
        let { message: n, item: t } = e,
          i = t.originalItem,
          a = o.useCallback(
            (e, t, o) => {
              var a;
              (0, u.tb)(
                n.id,
                null !== (a = i.duration_secs) && void 0 !== a ? a : null,
                t,
                n.author.id,
              );
            },
            [n, i.duration_secs],
          ),
          c = o.useCallback(
            (e, t) => {
              var o;
              (0, u.EW)(
                n.id,
                null !== (o = i.duration_secs) && void 0 !== o ? o : null,
                e,
                n.author.id,
                t,
              );
            },
            [n, i.duration_secs],
          ),
          r = o.useCallback(
            (e) => {
              var t;
              (0, u.Np)(
                n.id,
                null !== (t = null == e ? void 0 : e.message) && void 0 !== t
                  ? t
                  : null,
              );
            },
            [n],
          );
        return (0, p.wj)({
          ...e,
          fileSize: i.size,
          fileName: (0, h.Z)(i),
          src: i.url,
          durationSecs: i.duration_secs,
          waveform: i.waveform,
          onPlay: a,
          onPause: c,
          onError: r,
        });
      }
      function M(e) {
        let n = e.item.originalItem;
        return (0, p.xi)({
          ...e,
          url: n.url,
          fileName: (0, h.Z)(n),
          fileSize: n.size,
          contentType: n.content_type,
        });
      }
      function x(e) {
        let n = e.item.originalItem;
        return (0, p.ur)({
          ...e,
          url: n.url,
          fileName: (0, h.Z)(n),
          fileSize: n.size,
        });
      }
      function T(e) {
        if ("CLIP" === e.item.type)
          return (0, i.jsx)(O, {
            attachment: e.item.originalItem,
            message: e.message,
          });
        return null;
      }
      function O(e) {
        var n;
        let { attachment: t, message: o } = e,
          c = o.channel_id,
          r = (0, a.e7)([_.Z], () => {
            var e;
            return null === (e = _.Z.getBasicChannel(c)) || void 0 === e
              ? void 0
              : e.guild_id;
          }),
          {
            clip_created_at: l,
            clip_participants: d,
            title: u,
            application: f,
          } = t;
        return (0, i.jsx)(s.Z, {
          createdAt: null != l ? Date.parse(l) : void 0,
          participantIds:
            null !==
              (n =
                null == d
                  ? void 0
                  : d.map((e) => {
                      let { id: n } = e;
                      return n;
                    })) && void 0 !== n
              ? n
              : [],
          applicationId: null == f ? void 0 : f.id,
          title: u,
          guildId: r,
        });
      }
    },
    963550: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = t(735250);
      t(470079);
      var o = t(930282);
      function a(e, n) {
        let { message: t } = e;
        return (0, i.jsx)(o.ZP, { message: t, content: n });
      }
    },
    845080: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(735250),
        o = t(470079),
        a = t(901461),
        c = t(464891);
      let r = o.memo(c.ZP);
      function l(e) {
        let {
          message: n,
          channel: t,
          author: o,
          compact: c,
          animateAvatar: l,
          guildId: s,
          isGroupStart: d = !0,
          roleIcon: u,
          hideTimestamp: _,
        } = e;
        return !(0, a.Z)(n) && (d || c)
          ? (0, i.jsx)(r, {
              message: n,
              channel: t,
              author: o,
              guildId: s,
              compact: c,
              animate: l,
              roleIcon: u,
              hideTimestamp: _,
            })
          : void 0;
      }
    },
    519320: function (e, n, t) {
      t.d(n, {
        EW: function () {
          return l;
        },
        Np: function () {
          return s;
        },
        tb: function () {
          return r;
        },
      });
      var i,
        o,
        a = t(626135),
        c = t(981631);
      function r(e, n, t, i) {
        a.default.track(c.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
          message_id: e,
          total_duration_secs: n,
          start_duration_secs: Math.min(null != n ? n : t, t),
          sender_user_id: i,
        });
      }
      function l(e, n, t, i, o) {
        a.default.track(c.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
          message_id: e,
          total_duration_secs: n,
          end_duration_secs: Math.min(null != n ? n : t, t),
          sender_user_id: i,
          duration_listening_secs: o,
        });
      }
      function s(e, n) {
        a.default.track(c.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
          message_id: e,
          error_message: n,
        });
      }
      ((i = o || (o = {})).SENT = "sent"),
        (i.CANCELLED_DURATION = "cancelled_duration"),
        (i.CANCELLED_USER_REQUESTED = "cancelled_user_requested"),
        (i.CANCELLED_GESTURE_CONFLICT = "cancelled_gesture_conflict"),
        (i.CANCELLED_ON_BACKGROUND = "cancelled_on_background");
    },
    973335: function (e, n, t) {
      e.exports = { title: "title_d9a510", buttonIcon: "buttonIcon_d9a510" };
    },
    275703: function (e, n, t) {
      e.exports = {
        hoverButtonGroup: "hoverButtonGroup_d0395d",
        forceShowHover: "forceShowHover_d0395d",
        hoverButton: "hoverButton_d0395d",
        selected: "selected_d0395d",
        nonMediaMosaicItem: "nonMediaMosaicItem_d0395d",
      };
    },
    760997: function (e, n, t) {
      e.exports = { container: "container_e31053", text: "text_e31053" };
    },
    53304: function (e, n, t) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    120131: function (e, n, t) {
      e.exports = { clipPill: "clipPill_d8447f" };
    },
    834909: function (e, n, t) {
      e.exports = {
        oneByOneGrid: "oneByOneGrid_cda674",
        oneByOneGridSingle: "oneByOneGridSingle_cda674",
        oneByOneGridMosaic: "oneByOneGridMosaic_cda674",
        oneByTwoGrid: "oneByTwoGrid_cda674",
        oneByTwoLayoutThreeGrid: "oneByTwoLayoutThreeGrid_cda674",
        oneByTwoGridItem: "oneByTwoGridItem_cda674",
        itemContentContainer: "itemContentContainer_cda674",
        lazyImg: "lazyImg_cda674",
        oneByTwoSoloItem: "oneByTwoSoloItem_cda674",
        oneByTwoDuoItem: "oneByTwoDuoItem_cda674",
        twoByOneGrid: "twoByOneGrid_cda674",
        twoByOneGridItem: "twoByOneGridItem_cda674",
        threeByThreeGrid: "threeByThreeGrid_cda674",
        lazyImgContainer: "lazyImgContainer_cda674",
        twoByTwoGrid: "twoByTwoGrid_cda674",
        visualMediaItemContainer: "visualMediaItemContainer_cda674",
        nonVisualMediaItemContainer: "nonVisualMediaItemContainer_cda674",
        nonVisualMediaItem: "nonVisualMediaItem_cda674",
        hasFooter: "hasFooter_cda674",
        mosaicContainer: "mosaicContainer_cda674",
        single: "single_cda674",
      };
    },
    526675: function (e, n, t) {
      e.exports = {
        inline: "inline_e5c1dc",
        hiddenMosaicItem: "hiddenMosaicItem_e5c1dc",
        obscured: "obscured_e5c1dc",
        hiddenSpoiler: "hiddenSpoiler_e5c1dc",
        hiddenExplicit: "hiddenExplicit_e5c1dc",
        obscureVideoSpacing: "obscureVideoSpacing_e5c1dc",
        mosaicItemContent: "mosaicItemContent_e5c1dc",
        removeMosaicItemButton: "removeMosaicItemButton_e5c1dc",
        spoilerRemoveMosaicItemButton:
          "spoilerRemoveMosaicItemButton_e5c1dc removeMosaicItemButton_e5c1dc",
        mosaicItem: "mosaicItem_e5c1dc",
        mosaicItemNoJustify: "mosaicItemNoJustify_e5c1dc",
        mosaicItemFullWidth: "mosaicItemFullWidth_e5c1dc",
        mosaicItemMediaMosaic: "mosaicItemMediaMosaic_e5c1dc",
        hasFooter: "hasFooter_e5c1dc",
        mosaicItemWithFooter: "mosaicItemWithFooter_e5c1dc",
        hideOverflow: "hideOverflow_e5c1dc",
        removeMosaicItemHoverButton: "removeMosaicItemHoverButton_e5c1dc",
        downloadHoverButtonIcon: "downloadHoverButtonIcon_e5c1dc",
      };
    },
    300106: function (e, n, t) {
      e.exports = {
        classificationContainer: "classificationContainer_dedf6b",
        classificationHeader: "classificationHeader_dedf6b",
        classificationActionsTakenContainer:
          "classificationActionsTakenContainer_dedf6b",
        classificationActionsTakenRow: "classificationActionsTakenRow_dedf6b",
        classificationActionsTakenList: "classificationActionsTakenList_dedf6b",
        classificationActionExplanationContainer:
          "classificationActionExplanationContainer_dedf6b",
        guidelinesExplanation: "guidelinesExplanation_dedf6b",
        classificationLetUsKnowContainer:
          "classificationLetUsKnowContainer_dedf6b",
        classificationPolicyCard: "classificationPolicyCard_dedf6b",
        classificationPolicyCardIcon: "classificationPolicyCardIcon_dedf6b",
        classificationPolicyDescriptionContainer:
          "classificationPolicyDescriptionContainer_dedf6b",
        classificationPolicyLinkIcon: "classificationPolicyLinkIcon_dedf6b",
      };
    },
    105548: function (e, n, t) {
      e.exports = {
        image: "image_ceb0f1",
        modalRoot: "modalRoot_ceb0f1",
        modalContent: "modalContent_ceb0f1",
        modalHeader: "modalHeader_ceb0f1",
        modalClose: "modalClose_ceb0f1",
      };
    },
    246697: function (e, n, t) {
      e.exports = {
        classificationEvidenceContainer:
          "classificationEvidenceContainer_e3b35e",
      };
    },
    530124: function (e, n, t) {
      e.exports = {
        classificationEvidenceCard: "classificationEvidenceCard_b59990",
        classificationEvidenceMessageAttachment:
          "classificationEvidenceMessageAttachment_b59990",
      };
    },
  },
]);
//# sourceMappingURL=980025918cbbe11f4881.js.map
