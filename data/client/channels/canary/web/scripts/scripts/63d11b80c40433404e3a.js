"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47669"],
  {
    850908: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return t;
        },
      });
      function t(e) {
        if (null != e.title && null != e.filename) {
          let i = e.filename.lastIndexOf("."),
            n = i > 0 ? e.filename.substr(i) : "";
          return e.title + n;
        }
        return e.filename;
      }
    },
    219797: function (e, i, n) {
      n.d(i, {
        L9: function () {
          return w;
        },
        ZK: function () {
          return b;
        },
        d4: function () {
          return M;
        },
        dS: function () {
          return y;
        },
        jY: function () {
          return B;
        },
        q7: function () {
          return E;
        },
        vZ: function () {
          return g;
        },
      }),
        n(789020);
      var t = n(200651),
        o = n(192379),
        a = n(442837),
        c = n(993365),
        r = n(981729),
        l = n(481060),
        s = n(543651),
        d = n(519320),
        u = n(592125),
        m = n(52824),
        f = n(630388),
        _ = n(591759),
        p = n(850908),
        I = n(524444),
        C = n(981631),
        h = n(388032),
        v = n(381701);
      function y(e) {
        var i;
        let n = e.item.originalItem;
        return (0, I.Yi)({
          ...e,
          alt: n.description,
          src: (0, m.q)({ proxyURL: n.proxy_url, url: n.url }),
          original: n.url,
          placeholder: n.placeholder,
          placeholderVersion: n.placeholder_version,
          srcIsAnimated: (0, f.yE)(
            null !== (i = n.flags) && void 0 !== i ? i : 0,
            C.J0y.IS_ANIMATED,
          ),
          sourceMetadata: {
            message: e.message,
            identifier: {
              type: "attachment",
              attachmentId: n.id,
              filename: n.filename,
              title: n.title,
              size: n.size,
            },
          },
          analyticsSource: "ImageComponentForMessageAttachment",
        });
      }
      function g(e) {
        var i;
        let n = e.item.originalItem,
          a = o.useCallback(() => {
            var e;
            return (0, f.yE)(
              null !== (e = n.flags) && void 0 !== e ? e : 0,
              C.J0y.IS_CLIP,
            )
              ? (0, t.jsxs)(r.DY, {
                  text: h.intl.string(h.t["/fgfWl"]),
                  className: v.clipPill,
                  children: [
                    (0, t.jsx)(l.ClipsIcon, {
                      size: "xs",
                      color: "currentColor",
                    }),
                    (0, t.jsx)(c.x, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      children: h.intl.string(h.t.oA4afH),
                    }),
                  ],
                })
              : null;
          }, [n]),
          s = _.Z.toURLSafe(n.proxy_url);
        return null == s
          ? null
          : (s.searchParams.append("format", "webp"),
            (0, I.lV)({
              ...e,
              alt: n.description,
              poster: s.toString(),
              fileSize: n.size,
              fileName: (0, p.Z)(n),
              src: n.url,
              placeholder: n.placeholder,
              placeholderVersion: n.placeholder_version,
              srcIsAnimated: (0, f.yE)(
                null !== (i = n.flags) && void 0 !== i ? i : 0,
                C.J0y.IS_ANIMATED,
              ),
              renderOverlayContent: a,
              sourceMetadata: {
                message: e.message,
                identifier: {
                  type: "attachment",
                  attachmentId: n.id,
                  filename: n.filename,
                  size: n.size,
                },
              },
            }));
      }
      function E(e) {
        let i = e.item.originalItem;
        return (0, I.hX)({
          ...e,
          fileSize: i.size,
          fileName: (0, p.Z)(i),
          src: i.url,
        });
      }
      function B(e) {
        let { message: i, item: n } = e,
          t = n.originalItem,
          a = o.useCallback(
            (e, n, o) => {
              var a;
              (0, d.tb)(
                i.id,
                null !== (a = t.duration_secs) && void 0 !== a ? a : null,
                n,
                i.author.id,
              );
            },
            [i, t.duration_secs],
          ),
          c = o.useCallback(
            (e, n) => {
              var o;
              (0, d.EW)(
                i.id,
                null !== (o = t.duration_secs) && void 0 !== o ? o : null,
                e,
                i.author.id,
                n,
              );
            },
            [i, t.duration_secs],
          ),
          r = o.useCallback(
            (e) => {
              var n;
              (0, d.Np)(
                i.id,
                null !== (n = null == e ? void 0 : e.message) && void 0 !== n
                  ? n
                  : null,
              );
            },
            [i],
          );
        return (0, I.wj)({
          ...e,
          fileSize: t.size,
          fileName: (0, p.Z)(t),
          src: t.url,
          durationSecs: t.duration_secs,
          waveform: t.waveform,
          onPlay: a,
          onPause: c,
          onError: r,
        });
      }
      function M(e) {
        let i = e.item.originalItem;
        return (0, I.xi)({
          ...e,
          url: i.url,
          fileName: (0, p.Z)(i),
          fileSize: i.size,
          contentType: i.content_type,
        });
      }
      function b(e) {
        let i = e.item.originalItem;
        return (0, I.ur)({
          ...e,
          url: i.url,
          fileName: (0, p.Z)(i),
          fileSize: i.size,
        });
      }
      function w(e) {
        if ("CLIP" === e.item.type)
          return (0, t.jsx)(x, {
            attachment: e.item.originalItem,
            message: e.message,
          });
        return null;
      }
      function x(e) {
        var i;
        let { attachment: n, message: o } = e,
          c = o.channel_id,
          r = (0, a.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getBasicChannel(c)) || void 0 === e
              ? void 0
              : e.guild_id;
          }),
          {
            clip_created_at: l,
            clip_participants: d,
            title: m,
            application: f,
          } = n;
        return (0, t.jsx)(s.Z, {
          createdAt: null != l ? Date.parse(l) : void 0,
          participantIds:
            null !==
              (i =
                null == d
                  ? void 0
                  : d.map((e) => {
                      let { id: i } = e;
                      return i;
                    })) && void 0 !== i
              ? i
              : [],
          applicationId: null == f ? void 0 : f.id,
          title: m,
          guildId: r,
        });
      }
    },
    963550: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return a;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(930282);
      function a(e, i) {
        let { message: n } = e;
        return (0, t.jsx)(o.ZP, { message: n, content: i });
      }
    },
    845080: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return l;
        },
      });
      var t = n(200651),
        o = n(192379),
        a = n(901461),
        c = n(464891);
      let r = o.memo(c.ZP);
      function l(e) {
        let {
          message: i,
          channel: n,
          author: o,
          compact: c,
          animateAvatar: l,
          guildId: s,
          isGroupStart: d = !0,
          roleIcon: u,
          hideTimestamp: m,
        } = e;
        return !(0, a.Z)(i) && (d || c)
          ? (0, t.jsx)(r, {
              message: i,
              channel: n,
              author: o,
              guildId: s,
              compact: c,
              animate: l,
              roleIcon: u,
              hideTimestamp: m,
            })
          : void 0;
      }
    },
    519320: function (e, i, n) {
      n.d(i, {
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
        a = n(626135),
        c = n(981631);
      function r(e, i, n, t) {
        a.default.track(c.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
          message_id: e,
          total_duration_secs: i,
          start_duration_secs: Math.min(null != i ? i : n, n),
          sender_user_id: t,
        });
      }
      function l(e, i, n, t, o) {
        a.default.track(c.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
          message_id: e,
          total_duration_secs: i,
          end_duration_secs: Math.min(null != i ? i : n, n),
          sender_user_id: t,
          duration_listening_secs: o,
        });
      }
      function s(e, i) {
        a.default.track(c.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
          message_id: e,
          error_message: i,
        });
      }
      ((t = o || (o = {})).SENT = "sent"),
        (t.CANCELLED_DURATION = "cancelled_duration"),
        (t.CANCELLED_USER_REQUESTED = "cancelled_user_requested"),
        (t.CANCELLED_GESTURE_CONFLICT = "cancelled_gesture_conflict"),
        (t.CANCELLED_ON_BACKGROUND = "cancelled_on_background");
    },
    413956: function (e, i, n) {
      e.exports = { title: "title_d9a510" };
    },
    847153: function (e, i, n) {
      e.exports = {
        hoverButtonGroup: "hoverButtonGroup_d0395d",
        forceShowHover: "forceShowHover_d0395d",
        hoverButton: "hoverButton_d0395d",
        selected: "selected_d0395d",
        nonMediaMosaicItem: "nonMediaMosaicItem_d0395d",
        sizer: "sizer_d0395d",
      };
    },
    666350: function (e, i, n) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    381701: function (e, i, n) {
      e.exports = { clipPill: "clipPill_d8447f" };
    },
    622119: function (e, i, n) {
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
    401597: function (e, i, n) {
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
    528959: function (e, i, n) {
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
    625473: function (e, i, n) {
      e.exports = {
        image: "image_ceb0f1",
        modalRoot: "modalRoot_ceb0f1",
        modalContent: "modalContent_ceb0f1",
        modalClose: "modalClose_ceb0f1",
        modalHeader: "modalHeader_ceb0f1",
      };
    },
    946531: function (e, i, n) {
      e.exports = {
        classificationEvidenceContainer:
          "classificationEvidenceContainer_e3b35e",
      };
    },
    654220: function (e, i, n) {
      e.exports = {
        classificationEvidenceCard: "classificationEvidenceCard_b59990",
        classificationEvidenceMessageAttachment:
          "classificationEvidenceMessageAttachment_b59990",
      };
    },
  },
]);
//# sourceMappingURL=63d11b80c40433404e3a.js.map
