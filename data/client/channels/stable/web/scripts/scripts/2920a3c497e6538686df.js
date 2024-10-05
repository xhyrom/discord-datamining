"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92999"],
  {
    822869: function (e, n, i) {
      i.d(n, {
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
      var t = i(470079),
        o = i(392711),
        a = i(626135),
        c = i(981631);
      function r(e, n, i) {
        a.default.track(c.rMx.FORWARD_MESSAGE_STARTED, {
          channel_id: e,
          message_id: n,
          source: i,
        });
      }
      function l(e) {
        let {
          channelId: n,
          messageId: i,
          numDestinationChanges: t,
          numQueryChanges: o,
        } = e;
        a.default.track(c.rMx.FORWARD_MESSAGE_CANCELLED, {
          channel_id: n,
          message_id: i,
          num_destination_changes: t,
          num_query_changes: o,
        });
      }
      function s(e) {
        let {
          channelId: n,
          messageId: i,
          hasError: t,
          hasContextMessage: o,
          numDestinations: r,
          numDestinationChanges: l,
          numQueryChanges: s,
          anyDestinationHasSlowmode: d,
        } = e;
        a.default.track(c.rMx.FORWARD_MESSAGE_SENT, {
          channel_id: n,
          message_id: i,
          has_error: t,
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
        return t.useMemo(
          () =>
            (0, o.once)((e, n, i) => {
              a.default.track(c.rMx.FORWARD_ADD_RECIPIENT, {
                channel_id: e,
                message_id: n,
                has_query: i,
              });
            }),
          [],
        );
      }
      function _() {
        return t.useMemo(
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
        return t.useMemo(
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
    868643: function (e, n, i) {
      i.d(n, {
        a: function () {
          return _;
        },
        h: function () {
          return u;
        },
      }),
        i(789020);
      var t = i(470079),
        o = i(442837),
        a = i(430198),
        c = i(592125),
        r = i(630388),
        l = i(981631);
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
        let i =
          null === (n = c.Z.getChannel(e.channel_id)) || void 0 === n
            ? void 0
            : n.guild_id;
        return (
          !(null != i && a.Z.isChannelOrThreadParentGated(i, e.channel_id)) &&
          !0
        );
      }
      function _(e) {
        let n = (0, o.e7)([a.Z, c.Z], () => {
          var n;
          if (null == e) return !1;
          let i =
            null === (n = c.Z.getChannel(e.channel_id)) || void 0 === n
              ? void 0
              : n.guild_id;
          return null != i && a.Z.isChannelOrThreadParentGated(i, e.channel_id);
        });
        return t.useMemo(() => null != e && d(e), [e]) && !n;
      }
    },
    394779: function (e, n, i) {
      i.d(n, {
        s: function () {
          return h;
        },
      });
      var t = i(735250),
        o = i(470079),
        a = i(120356),
        c = i.n(a),
        r = i(481060),
        l = i(346610),
        s = i(868643),
        d = i(912332),
        u = i(503349),
        _ = i(689938),
        f = i(760997);
      function m() {
        (0, r.closeModal)(u.c);
      }
      function I(e) {
        let { className: n, channelId: i, messageId: a, target: l } = e,
          s = o.useCallback(() => {
            if ("embed" === l.type) {
              (0, d.l8)({
                messageId: a,
                channelId: i,
                source: "media-viewer",
                forwardOptions: { onlyEmbedIndices: [l.embedIndex] },
                onRequestSent: m,
              });
              return;
            }
            (0, d.l8)({
              messageId: a,
              channelId: i,
              source: "media-viewer",
              forwardOptions: { onlyAttachmentIds: [l.attachmentId] },
              onRequestSent: m,
            });
          }, [i, a, l]);
        return (0, t.jsx)(r.Clickable, {
          className: c()(f.container, n),
          onClick: s,
          children: (0, t.jsx)(r.Text, {
            className: f.text,
            variant: "text-sm/medium",
            color: "always-white",
            children: _.Z.Messages.MESSAGE_ACTION_FORWARD,
          }),
        });
      }
      function h(e, n) {
        let { canForwardMessages: i } = (0, l.WT)(
          { location: "ForwardLink" },
          { autoTrackExposure: !1 },
        );
        return i && (0, s.h)(e)
          ? (i) => {
              let { className: o } = i;
              return (0, t.jsx)(I, {
                className: o,
                channelId: e.channel_id,
                messageId: e.id,
                target: n,
              });
            }
          : () => null;
      }
    },
    912332: function (e, n, i) {
      i.d(n, {
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
      var t = i(735250);
      i(470079);
      var o = i(481060),
        a = i(822869);
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
                i.e("6380"),
                i.e("99452"),
              ]).then(i.bind(i, 930864));
              return (i) =>
                (0, t.jsx)(e, {
                  ...i,
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
          let { ForwardFailedAlertModal: e } = await i
            .e("86590")
            .then(i.bind(i, 384331));
          return (i) =>
            (0, t.jsx)(e, {
              ...i,
              messageId: n,
              channelId: a,
              failedDestinations: c,
              forwardOptions: r,
            });
        });
      }
    },
    850908: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return t;
        },
      });
      function t(e) {
        if (null != e.title && null != e.filename) {
          let n = e.filename.lastIndexOf("."),
            i = n > 0 ? e.filename.substr(n) : "";
          return e.title + i;
        }
        return e.filename;
      }
    },
    219797: function (e, n, i) {
      i.d(n, {
        L9: function () {
          return x;
        },
        ZK: function () {
          return T;
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
        i(789020);
      var t = i(735250),
        o = i(470079),
        a = i(442837),
        c = i(993365),
        r = i(981729),
        l = i(481060),
        s = i(543651),
        d = i(394779),
        u = i(519320),
        _ = i(592125),
        f = i(52824),
        m = i(630388),
        I = i(591759),
        h = i(850908),
        p = i(524444),
        E = i(981631),
        C = i(689938),
        y = i(120131);
      function S(e) {
        var n;
        let i = e.item.originalItem;
        return (0, p.Yi)({
          ...e,
          alt: i.description,
          src: (0, f.q)({ proxyURL: i.proxy_url, url: i.url }),
          original: i.url,
          placeholder: i.placeholder,
          placeholderVersion: i.placeholder_version,
          srcIsAnimated: (0, m.yE)(
            null !== (n = i.flags) && void 0 !== n ? n : 0,
            E.J0y.IS_ANIMATED,
          ),
          renderForwardComponent: (0, d.s)(e.message, {
            type: "attachment",
            attachmentId: i.id,
          }),
        });
      }
      function v(e) {
        var n;
        let i = e.item.originalItem,
          a = o.useCallback(() => {
            var e;
            return (0, m.yE)(
              null !== (e = i.flags) && void 0 !== e ? e : 0,
              E.J0y.IS_CLIP,
            )
              ? (0, t.jsxs)(r.DY, {
                  text: C.Z.Messages.CLIPS_BETA_TAG_HOVER,
                  className: y.clipPill,
                  children: [
                    (0, t.jsx)(l.ClipsIcon, {
                      size: "xs",
                      color: "currentColor",
                    }),
                    (0, t.jsx)(c.x, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      children: C.Z.Messages.CLIP_TAG,
                    }),
                  ],
                })
              : null;
          }, [i]),
          s = I.Z.toURLSafe(i.proxy_url);
        return null == s
          ? null
          : (s.searchParams.append("format", "webp"),
            (0, p.lV)({
              ...e,
              alt: i.description,
              poster: s.toString(),
              fileSize: i.size,
              fileName: (0, h.Z)(i),
              src: i.url,
              placeholder: i.placeholder,
              placeholderVersion: i.placeholder_version,
              srcIsAnimated: (0, m.yE)(
                null !== (n = i.flags) && void 0 !== n ? n : 0,
                E.J0y.IS_ANIMATED,
              ),
              renderOverlayContent: a,
              renderForwardComponent: (0, d.s)(e.message, {
                type: "attachment",
                attachmentId: i.id,
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
        let { message: n, item: i } = e,
          t = i.originalItem,
          a = o.useCallback(
            (e, i, o) => {
              var a;
              (0, u.tb)(
                n.id,
                null !== (a = t.duration_secs) && void 0 !== a ? a : null,
                i,
                n.author.id,
              );
            },
            [n, t.duration_secs],
          ),
          c = o.useCallback(
            (e, i) => {
              var o;
              (0, u.EW)(
                n.id,
                null !== (o = t.duration_secs) && void 0 !== o ? o : null,
                e,
                n.author.id,
                i,
              );
            },
            [n, t.duration_secs],
          ),
          r = o.useCallback(
            (e) => {
              var i;
              (0, u.Np)(
                n.id,
                null !== (i = null == e ? void 0 : e.message) && void 0 !== i
                  ? i
                  : null,
              );
            },
            [n],
          );
        return (0, p.wj)({
          ...e,
          fileSize: t.size,
          fileName: (0, h.Z)(t),
          src: t.url,
          durationSecs: t.duration_secs,
          waveform: t.waveform,
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
      function T(e) {
        let n = e.item.originalItem;
        return (0, p.ur)({
          ...e,
          url: n.url,
          fileName: (0, h.Z)(n),
          fileSize: n.size,
        });
      }
      function x(e) {
        if ("CLIP" === e.item.type)
          return (0, t.jsx)(O, {
            attachment: e.item.originalItem,
            message: e.message,
          });
        return null;
      }
      function O(e) {
        var n;
        let { attachment: i, message: o } = e,
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
          } = i;
        return (0, t.jsx)(s.Z, {
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
    963550: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return a;
        },
      });
      var t = i(735250);
      i(470079);
      var o = i(930282);
      function a(e, n) {
        let { message: i } = e;
        return (0, t.jsx)(o.ZP, { message: i, content: n });
      }
    },
    845080: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return l;
        },
      });
      var t = i(735250),
        o = i(470079),
        a = i(901461),
        c = i(464891);
      let r = o.memo(c.ZP);
      function l(e) {
        let {
          message: n,
          channel: i,
          author: o,
          compact: c,
          animateAvatar: l,
          guildId: s,
          isGroupStart: d = !0,
          roleIcon: u,
          hideTimestamp: _,
        } = e;
        return !(0, a.Z)(n) && (d || c)
          ? (0, t.jsx)(r, {
              message: n,
              channel: i,
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
    519320: function (e, n, i) {
      i.d(n, {
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
      var t,
        o,
        a = i(626135),
        c = i(981631);
      function r(e, n, i, t) {
        a.default.track(c.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
          message_id: e,
          total_duration_secs: n,
          start_duration_secs: Math.min(null != n ? n : i, i),
          sender_user_id: t,
        });
      }
      function l(e, n, i, t, o) {
        a.default.track(c.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
          message_id: e,
          total_duration_secs: n,
          end_duration_secs: Math.min(null != n ? n : i, i),
          sender_user_id: t,
          duration_listening_secs: o,
        });
      }
      function s(e, n) {
        a.default.track(c.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
          message_id: e,
          error_message: n,
        });
      }
      ((t = o || (o = {})).SENT = "sent"),
        (t.CANCELLED_DURATION = "cancelled_duration"),
        (t.CANCELLED_USER_REQUESTED = "cancelled_user_requested"),
        (t.CANCELLED_GESTURE_CONFLICT = "cancelled_gesture_conflict"),
        (t.CANCELLED_ON_BACKGROUND = "cancelled_on_background");
    },
    973335: function (e, n, i) {
      e.exports = { title: "title_d9a510" };
    },
    275703: function (e, n, i) {
      e.exports = {
        hoverButtonGroup: "hoverButtonGroup_d0395d",
        forceShowHover: "forceShowHover_d0395d",
        hoverButton: "hoverButton_d0395d",
        selected: "selected_d0395d",
        nonMediaMosaicItem: "nonMediaMosaicItem_d0395d",
      };
    },
    760997: function (e, n, i) {
      e.exports = { container: "container_e31053", text: "text_e31053" };
    },
    53304: function (e, n, i) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    120131: function (e, n, i) {
      e.exports = { clipPill: "clipPill_d8447f" };
    },
    834909: function (e, n, i) {
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
    526675: function (e, n, i) {
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
    300106: function (e, n, i) {
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
    105548: function (e, n, i) {
      e.exports = {
        image: "image_ceb0f1",
        modalRoot: "modalRoot_ceb0f1",
        modalContent: "modalContent_ceb0f1",
        modalHeader: "modalHeader_ceb0f1",
        modalClose: "modalClose_ceb0f1",
      };
    },
    246697: function (e, n, i) {
      e.exports = {
        classificationEvidenceContainer:
          "classificationEvidenceContainer_e3b35e",
      };
    },
    530124: function (e, n, i) {
      e.exports = {
        classificationEvidenceCard: "classificationEvidenceCard_b59990",
        classificationEvidenceMessageAttachment:
          "classificationEvidenceMessageAttachment_b59990",
      };
    },
  },
]);
//# sourceMappingURL=2920a3c497e6538686df.js.map
