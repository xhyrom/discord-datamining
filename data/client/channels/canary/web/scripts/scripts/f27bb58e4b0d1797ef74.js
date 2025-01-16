"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46097"],
  {
    162609: function (e, t, n) {
      n.d(t, {
        P: function () {
          return i;
        },
      });
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2024-07_contextual_image_recs_user",
        label: "Contextual Image Recommendations",
        defaultConfig: { imageRecsEnabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable the Contextual Image Recommendations with options",
            config: { imageRecsEnabled: !0 },
          },
        ],
      });
    },
    976853: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(399606),
        l = n(592125),
        o = n(176505);
      function s(e) {
        let t = (0, i.e7)([l.Z], () => {
          let t = l.Z.getChannel(e);
          return (null == t ? void 0 : t.parent_id) != null && t.isForumPost()
            ? l.Z.getChannel(null == t ? void 0 : t.parent_id)
            : null;
        });
        return (
          (null == t ? void 0 : t.hasFlag(o.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) ===
          !0
        );
      }
    },
    587906: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651),
        l = n(657707),
        o = n(481060),
        s = n(626135),
        a = n(981631),
        r = n(388032);
      function u(e) {
        let { className: t, onClick: n } = e,
          u = (e) => {
            s.default.track(a.rMx.MEDIA_VIEWER_AFFORDANCE_CLICKED), n(e);
          };
        return (0, i.jsx)(o.Tooltip, {
          text: r.intl.string(r.t.rTQZY2),
          children: (e) =>
            (0, i.jsx)(o.Clickable, {
              ...e,
              className: t,
              focusProps: { offset: 2 },
              onClick: u,
              "aria-label": r.intl.string(r.t.rTQZY2),
              children: (0, i.jsx)(l.bJT, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
              }),
            }),
        });
      }
    },
    499376: function (e, t, n) {
      n.d(t, {
        Ld: function () {
          return u;
        },
        R_: function () {
          return r;
        },
        aw: function () {
          return d;
        },
        pU: function () {
          return m;
        },
      }),
        n(789020);
      var i = n(630388),
        l = n(406432),
        o = n(828061),
        s = n(981631);
      let a = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
        r = (e) =>
          "IMAGE" === e ||
          "VIDEO" === e ||
          "CLIP" === e ||
          "VISUAL_PLACEHOLDER" === e,
        u = (e) => "IMAGE" === e || "VIDEO" === e || "VISUAL_PLACEHOLDER" === e;
      function d(e, t) {
        let { filename: n, width: r, height: u } = e;
        if (t && null != r && r > 0 && null != u && u > 0) {
          if ((0, l.CO)(n)) return "IMAGE";
          if (!(0, l.NU)(n) || null == e.proxy_url) return "INVALID";
          else {
            var d;
            return (0, i.yE)(
              null !== (d = e.flags) && void 0 !== d ? d : 0,
              s.J0y.IS_CLIP,
            )
              ? "CLIP"
              : "VIDEO";
          }
        }
        if (null != t && a.test(n) && null != e.url) return "AUDIO";
        if (null != e.url && (0, o.O)(n)) return "PLAINTEXT_PREVIEW";
        return "OTHER";
      }
      function m(e) {
        let { contentType: t, width: n, height: i } = e;
        if (null != n && n > 0 && null != i && i > 0) {
          if ((0, l.tw)(t)) return "IMAGE";
          if ((0, l.X2)(t)) return "VIDEO";
        }
        return "VISUAL_PLACEHOLDER";
      }
    },
    884182: function (e, t, n) {
      n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        s = n.n(o),
        a = n(512722),
        r = n.n(a),
        u = n(392711),
        d = n.n(u),
        m = n(947849),
        c = n(499376),
        h = n(546432),
        I = n(217702),
        x = n(665817);
      let g = Math.round((I.mT - 8) / 3),
        p = Math.round((I.mT - 4) / 2),
        f = Math.round((I.Jj - 4) / 2),
        C = Math.round((2 * (I.mT - 4)) / 3),
        j = C / 2;
      function v(e) {
        let { visualMediaItems: t, footer: n } = e;
        null != n &&
          r()(1 === t.length, "footer only gets applied to single items");
        let l = t.length;
        if (1 === l)
          return (0, i.jsx)(y, {
            itemsForLayout: t,
            isSingleImage: !0,
            footer: n,
          });
        if (2 === l) return (0, i.jsx)(E, { itemsForLayout: t });
        if (3 === l) return (0, i.jsx)(M, { itemsForLayout: t });
        if (4 === l) return (0, i.jsx)(N, { itemsForLayout: t });
        let o = l % 3;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            1 === o && (0, i.jsx)(y, { itemsForLayout: t.slice(0, o) }),
            2 === o && (0, i.jsx)(E, { itemsForLayout: t.slice(0, o) }),
            0 === o
              ? (0, i.jsx)(T, { itemsForLayout: t })
              : (0, i.jsx)(T, { itemsForLayout: t.slice(o) }),
          ],
        });
      }
      function y(e) {
        let { itemsForLayout: t, isSingleImage: n, footer: l } = e,
          o = t[0];
        return (0, i.jsx)("div", {
          className: s()(x.oneByOneGrid, {
            [x.oneByOneGridSingle]: n,
            [x.oneByOneGridMosaic]: !n,
            [x.hasFooter]: null != l,
          }),
          children: (0, i.jsx)(A, {
            props: o,
            useFullWidth: !n,
            isSingleItem: !0,
            footer: l,
          }),
        });
      }
      function E(e) {
        let { itemsForLayout: t } = e;
        return (0, i.jsx)("div", {
          className: x.oneByTwoGrid,
          children: t.map((e) =>
            (0, i.jsx)(
              "div",
              {
                className: x.oneByTwoGridItem,
                children: (0, i.jsx)(A, {
                  props: e,
                  maxWidth: p,
                  maxHeight: p,
                }),
              },
              e.item.uniqueId,
            ),
          ),
        });
      }
      function M(e) {
        let { itemsForLayout: t } = e;
        return (0, i.jsxs)("div", {
          className: s()(x.oneByTwoGrid, x.oneByTwoLayoutThreeGrid),
          children: [
            (0, i.jsx)("div", {
              className: x.oneByTwoSoloItem,
              children: (0, i.jsx)(A, { props: t[0], maxWidth: C }),
            }),
            (0, i.jsx)("div", {
              className: x.oneByTwoDuoItem,
              children: (0, i.jsx)("div", {
                className: x.twoByOneGrid,
                children: t
                  .splice(1)
                  .map((e) =>
                    (0, i.jsx)(
                      "div",
                      {
                        className: x.twoByOneGridItem,
                        children: (0, i.jsx)(A, {
                          props: e,
                          maxWidth: j,
                          maxHeight: f,
                        }),
                      },
                      e.item.uniqueId,
                    ),
                  ),
              }),
            }),
          ],
        });
      }
      function N(e) {
        let { itemsForLayout: t } = e;
        return (0, i.jsx)("div", {
          className: x.twoByTwoGrid,
          children: t.map((e) =>
            (0, i.jsx)(
              A,
              { props: e, maxWidth: p, maxHeight: f },
              e.item.uniqueId,
            ),
          ),
        });
      }
      function T(e) {
        let { itemsForLayout: t } = e;
        return (0, i.jsx)("div", {
          className: x.threeByThreeGrid,
          children: t.map((e) =>
            (0, i.jsx)(
              A,
              { props: e, maxWidth: g, maxHeight: g },
              e.item.uniqueId,
            ),
          ),
        });
      }
      let w = (e) => ({
          className: s()(e, x.itemContentContainer),
          imgContainerClassName: x.lazyImgContainer,
          imgClassName: x.lazyImg,
        }),
        O = (e) => ({ className: s()(e, x.lazyImg) });
      function A(e) {
        let {
            props: t,
            maxWidth: n = I.mT,
            maxHeight: l = I.Jj,
            useFullWidth: o = !0,
            isSingleItem: s = !1,
            footer: a,
          } = e,
          r = t.item.type,
          u = {
            ...t,
            ...("IMAGE" === r && w(t.className)),
            ...("VIDEO" === r && O(t.className)),
            mediaLayoutType: I.hV.MOSAIC,
            maxWidth: n,
            maxHeight: l,
            useFullWidth: o,
            isSingleMosaicItem: s,
          };
        return (0, i.jsx)(m.h.Provider, {
          value: t.gifFavoriteButton,
          children: (0, i.jsx)(h.ZP, { ...u, footer: a }),
        });
      }
      t.Z = function (e) {
        let { items: t, inlineForwardButton: n } = e,
          {
            groupableVisualMediaItems: o,
            nonGroupableVisualMediaItems: a,
            nonVisualMediaItems: r,
          } = (function (e) {
            return l.useMemo(() => {
              let [t, n] = d().partition(e, (e) => (0, c.R_)(e.item.type)),
                [i, l] = d().partition(t, (e) => (0, c.Ld)(e.item.type));
              return {
                groupableVisualMediaItems: i,
                nonGroupableVisualMediaItems: l,
                nonVisualMediaItems: n,
              };
            }, [e]);
          })(t);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            o.length > 0 &&
              (null != n
                ? (0, i.jsxs)("div", {
                    className: s()(
                      x.mosaicContainer,
                      1 === o.length && x.single,
                    ),
                    children: [
                      (0, i.jsx)("div", {
                        className: x.visualMediaItemContainer,
                        children: (0, i.jsx)(v, { visualMediaItems: o }),
                      }),
                      n,
                    ],
                  })
                : (0, i.jsx)("div", {
                    className: x.visualMediaItemContainer,
                    children: (0, i.jsx)(v, { visualMediaItems: o }),
                  })),
            a.length > 0 &&
              a.map((e) => {
                let t = e.renderMosaicItemFooter({
                  item: e.item,
                  message: e.message,
                });
                return (0, i.jsx)(
                  "div",
                  {
                    className: x.visualMediaItemContainer,
                    children: (0, i.jsx)(v, {
                      visualMediaItems: [e],
                      footer: t,
                    }),
                  },
                  e.item.uniqueId,
                );
              }),
            r.length > 0 &&
              (0, i.jsx)("div", {
                className: x.nonVisualMediaItemContainer,
                children: r.map((e) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className: x.nonVisualMediaItem,
                      children: (0, i.jsx)(A, { props: e }),
                    },
                    e.item.uniqueId,
                  ),
                ),
              }),
          ],
        });
      };
    },
    546432: function (e, t, n) {
      n.d(t, {
        OB: function () {
          return V;
        },
        mz: function () {
          return S;
        },
      }),
        n(47120),
        n(653041),
        n(789020),
        n(411104);
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        s = n.n(o),
        a = n(228458),
        r = n(481060),
        u = n(393238),
        d = n(399654),
        m = n(162609),
        c = n(370298),
        h = n(95398),
        I = n(167080),
        x = n(247206),
        g = n(25610),
        p = n(947849),
        f = n(982330),
        C = n(124347),
        j = n(976853),
        v = n(587906),
        y = n(592125),
        E = n(626135),
        M = n(630388),
        N = n(956664),
        T = n(169525),
        w = n(499376),
        O = n(217702),
        A = n(981631),
        L = n(388032),
        _ = n(157029),
        P = n(740909);
      function V(e, t) {
        return {
          uniqueId: e.id,
          originalItem: e,
          type: (0, w.aw)(e, t),
          downloadUrl: e.url,
          height: e.height,
          width: e.width,
          spoiler: e.spoiler,
          contentType: e.content_type,
        };
      }
      let S = (e) => {
        let {
            mimeType: t,
            downloadURL: n,
            onRemoveItem: o,
            onViewItem: a,
            showDownload: d,
            showImageAppPicker: m,
            isVisualMediaType: h,
            channelId: x,
          } = e,
          g = l.useRef(null),
          [p, C] = l.useState(0);
        (0, u.P)(g, (e) => {
          let { width: t } = e;
          null != t && C(Math.floor((t - 8) / 32));
        });
        let j = [],
          { mediaViewerAffordanceEnabled: y } = (0, f.dP)(
            "MosaicItemHoverButtons",
          );
        y &&
          null != a &&
          j.push(
            (0, i.jsx)(
              v.Z,
              { className: P.hoverButton, onClick: a },
              "mediaViewer",
            ),
          );
        let [E, M] = l.useState(!1),
          N = l.useCallback(() => M((e) => !e), []);
        m &&
          j.push(
            (0, i.jsx)(
              c.Z,
              {
                toggleShowMenu: N,
                showMenu: E,
                channelId: x,
                className: s()(P.hoverButton, { [P.selected]: E }),
                imageUrl: n,
                mimeType: t,
              },
              "app",
            ),
          ),
          null != o &&
            j.push(
              (0, i.jsx)(
                r.Tooltip,
                {
                  text: L.intl.string(L.t["/XT3io"]),
                  children: (e) =>
                    (0, i.jsx)(r.Clickable, {
                      ...e,
                      className: s()(
                        P.hoverButton,
                        _.removeMosaicItemHoverButton,
                      ),
                      focusProps: { offset: 2 },
                      onClick: o,
                      "aria-label": L.intl.string(L.t["0+xZHx"]),
                      children: (0, i.jsx)(r.TrashIcon, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                      }),
                    }),
                },
                "remove",
              ),
            ),
          d &&
            j.push(
              (0, i.jsx)(
                r.Tooltip,
                {
                  text: L.intl.string(L.t["1WjMbG"]),
                  children: (e) =>
                    (0, i.jsx)(I.Z, {
                      ...e,
                      target: "_blank",
                      rel: "noreferrer noopener",
                      className: P.hoverButton,
                      iconClassName: _.downloadHoverButtonIcon,
                      focusProps: { offset: 2 },
                      href: n,
                      mimeType: t,
                    }),
                },
                "download",
              ),
            );
        let T = Math.max(0, j.length - p);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            p > 0 &&
              j.length > 0 &&
              (0, i.jsx)("div", {
                className: s()(P.hoverButtonGroup, {
                  [P.nonMediaMosaicItem]: !h,
                  [P.forceShowHover]: E,
                }),
                children: j.slice(T),
              }),
            (0, i.jsx)("div", { ref: g, className: P.sizer }),
          ],
        });
      };
      function F(e) {
        var t;
        let {
            message: n,
            item: o,
            autoPlayGif: u,
            canRemoveItem: c,
            onRemoveItem: h,
            onViewItem: I,
            onClick: x,
            onContextMenu: g,
            onPlay: f,
            renderImageComponent: v,
            renderVideoComponent: T,
            renderAudioComponent: w,
            renderPlaintextFilePreview: P,
            renderGenericFileComponent: V,
            renderVisualPlaceholderComponent: F,
            className: b,
            imgContainerClassName: k,
            imgClassName: H,
            focusable: D,
            hiddenSpoilers: R,
            mediaLayoutType: B,
            maxWidth: G,
            maxHeight: W,
            hasFooter: Z,
            useFullWidth: U,
            isVisualMediaType: z,
            onVideoControlsShow: X,
            onVideoControlsHide: q,
            isSearchResult: J,
          } = e,
          { width: Y, height: Q, spoiler: K, type: $, contentType: ee } = o,
          [et, en] = l.useState(!1),
          [ei, el] = l.useState(!1),
          eo = n.getChannelId(),
          es = y.Z.getChannel(eo),
          ea = (0, j.Z)(eo),
          er = m.P.useExperiment(
            { location: "MediaMosaicItem" },
            { autoTrackExposure: !0 },
          ).imageRecsEnabled,
          eu = l.useMemo(
            () =>
              null != ee && -1 !== ee.indexOf("/")
                ? ee.split("/")
                : ["unknown", "unknown"],
            [ee],
          ),
          ed = o.originalItem,
          em =
            "IMAGE" === $ &&
            !C.uo.test(o.downloadUrl) &&
            !(
              (C.YG.test(o.downloadUrl) || C.FH.test(o.downloadUrl)) &&
              (0, M.yE)(
                null !== (t = ed.flags) && void 0 !== t ? t : 0,
                A.J0y.IS_ANIMATED,
              )
            ),
          ec = !1;
        if (z) {
          (null == Y || null == Q) && (ec = !0);
          let e = (0, N.Dc)({
            width: null != Y ? Y : 0,
            height: null != Q ? Q : 0,
            maxWidth: O.mT,
            maxHeight: O.Jj,
          });
          !U &&
            (e * (null != Y ? Y : 0) < O.OF ||
              e * (null != Q ? Q : 0) < O.OF) &&
            (ec = !0);
        }
        let eh = l.useCallback(() => {
            h(o);
          }, [o, h]),
          eI = l.useCallback(
            (e) => {
              if (em && !ec && !0 !== J) {
                if (e && !ei) {
                  if ((el(!0), er)) {
                    var t;
                    (0, d.a)({
                      channelId:
                        null !== (t = null == es ? void 0 : es.id) &&
                        void 0 !== t
                          ? t
                          : "",
                      location: a.I.CONTEXTUAL_IMAGE,
                      withCommands: !0,
                    });
                  }
                  E.default.track(A.rMx.IMAGE_HOVERED, {
                    guild_id: null == es ? void 0 : es.guild_id,
                    channel_id: null == es ? void 0 : es.id,
                    image_recommendations_shown: er,
                  });
                } else !e && ei && el(!1);
              }
            },
            [ei, es, er, em, ec, J],
          ),
          ex = l.useCallback(() => {
            if (B === O.hV.MOSAIC) {
              let e =
                (!ea && ["VIDEO", "CLIP", "AUDIO"].includes($)) ||
                "OTHER" === $;
              return ec
                ? null
                : !et &&
                    (0, i.jsx)(S, {
                      mimeType: eu,
                      downloadURL: o.downloadUrl,
                      showDownload: e,
                      showImageAppPicker: em && er && !0 !== J,
                      onRemoveItem: c ? eh : void 0,
                      onViewItem: I,
                      isVisualMediaType: z,
                      channelId: eo,
                    });
            }
            return (
              c &&
              (0, i.jsx)(r.Clickable, {
                className: K
                  ? _.spoilerRemoveMosaicItemButton
                  : _.removeMosaicItemButton,
                focusProps: { offset: { bottom: 4 } },
                onClick: () => h(o),
                "aria-label": L.intl.string(L.t["0+xZHx"]),
                children: (0, i.jsx)(r.XSmallIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
              })
            );
          }, [B, c, K, ea, $, ec, et, eu, o, em, er, J, eh, I, z, eo, h]);
        switch ($) {
          case "IMAGE":
            return (0, i.jsx)(p.h.Consumer, {
              children: (e) =>
                (0, i.jsx)(v, {
                  item: o,
                  message: n,
                  width: Y,
                  height: Q,
                  autoPlay: u && !R,
                  onClick: x,
                  onContextMenu: g,
                  shouldHideMediaOptions: ea,
                  renderAccessory: e,
                  renderAdjacentContent: ex,
                  containerClassName: b,
                  className: k,
                  imageClassName: H,
                  shouldLink: D,
                  hiddenSpoilers: R,
                  responsive: !0,
                  mediaLayoutType: B,
                  maxWidth: G,
                  maxHeight: W,
                  useFullWidth: U,
                  onMouseEnter: () => eI(!0),
                  onMouseLeave: () => eI(!1),
                }),
            });
          case "VIDEO":
          case "CLIP":
            return (0, i.jsx)(T, {
              item: o,
              message: n,
              width: Y,
              height: Q,
              onClick: x,
              onContextMenu: g,
              renderAdjacentContent: ex,
              naturalWidth: Y,
              naturalHeight: Q,
              className: s()(b, { [_.hasFooter]: Z }),
              playable: D,
              responsive: !0,
              mediaLayoutType: B,
              maxWidth: G,
              maxHeight: W,
              useFullWidth: U,
              mimeType: eu,
              onControlsShow: X,
              onControlsHide: q,
              downloadable: !ea,
              mediaPlayerClassName: Z ? _.hasFooter : void 0,
            });
          case "VISUAL_PLACEHOLDER":
            if (null == F) return null;
            return (0, i.jsx)(F, {
              item: o,
              message: n,
              className: k,
              imageClassName: H,
              maxWidth: G,
              maxHeight: W,
              mediaLayoutType: B,
              useFullWidth: U,
            });
          case "AUDIO":
            return (0, i.jsx)(w, {
              item: o,
              message: n,
              className: b,
              playable: D,
              mimeType: eu,
              renderAdjacentContent: ex,
              onVolumeShow: () => en(!0),
              onVolumeHide: () => en(!1),
              onPlay: f,
            });
          case "PLAINTEXT_PREVIEW":
            return (0, i.jsx)(P, {
              item: o,
              message: n,
              className: b,
              onClick: x,
              onContextMenu: g,
              renderAdjacentContent: ex,
            });
          case "OTHER":
            return (0, i.jsx)(V, {
              item: o,
              message: n,
              className: b,
              onClick: x,
              onContextMenu: g,
              renderAdjacentContent: ex,
            });
          case "INVALID":
            return null;
        }
      }
      t.ZP = function (e) {
        var t;
        let {
            className: n,
            item: o,
            message: a,
            getObscureReason: r,
            useFullWidth: u,
            mediaLayoutType: d,
            isSingleMosaicItem: m,
            footer: c,
            ...I
          } = e,
          { width: p, height: f, type: C } = o,
          j = r(o, (0, g.V)(a.channel_id, a.author.id)),
          [v, y] = l.useState(null != j),
          E = d === O.hV.MOSAIC,
          M = !E && ((null != p && p < 200) || (null != f && f < 50));
        let A = "IMAGE" === (t = C) || "VIDEO" === t,
          L = (0, w.R_)(C),
          P = m && null != j && (0, x.bR)(p, f),
          [V, S] = l.useState(!1),
          b = () => {
            S(!0);
          },
          k = () => {
            S(!1);
          },
          H = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(F, {
              ...I,
              item: o,
              message: a,
              getObscureReason: r,
              hiddenSpoilers: e,
              className: s()(n, _.mosaicItemContent, {
                [_.obscured]: v && !M,
                [_.hiddenSpoiler]: v && j === T.wk.SPOILER,
                [_.hiddenExplicit]:
                  v &&
                  null != j &&
                  [
                    T.wk.EXPLICIT_CONTENT,
                    T.wk.POTENTIAL_EXPLICIT_CONTENT,
                  ].includes(j),
                [_.hiddenMosaicItem]: v && e,
                [_.inline]: v && M,
              }),
              focusable: !e,
              mediaLayoutType: d,
              hasFooter: null != c,
              useFullWidth: !!P || u,
              isVisualMediaType: L,
              onVideoControlsShow: b,
              onVideoControlsHide: k,
            });
          };
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: s()(_.mosaicItem, {
              [_.mosaicItemNoJustify]: A,
              [_.mosaicItemFullWidth]: u,
              [_.mosaicItemMediaMosaic]: E,
              [_.hideOverflow]: E && L,
              [_.mosaicItemWithFooter]: null != c,
            }),
            children: [
              null != j
                ? (0, i.jsx)(h.Z, {
                    type: h.Z.Types.ATTACHMENT,
                    inline: M,
                    reason: j,
                    isSingleMosaicItem: m,
                    obscured: v,
                    containerStyles: (function (e, t, n) {
                      if (!t) return;
                      let i = e.width;
                      if (void 0 !== e.width && void 0 !== e.height) {
                        let { width: t } = (0, N.Tj)({
                          width: e.width,
                          height: e.height,
                          maxWidth: 400,
                          maxHeight: 300,
                        });
                        i = t;
                      }
                      return {
                        ...(n !== O.hV.MOSAIC && {
                          maxWidth: null != i ? i : "400px",
                        }),
                        width: "100%",
                        height: "100%",
                        justifySelf: "auto",
                      };
                    })(o, A, d),
                    obscurityControlClassName: s()({
                      [_.obscureVideoSpacing]: "VIDEO" === C && m && !v && V,
                    }),
                    onToggleObscurity: () => y((e) => !e),
                    children: (e) => H(e),
                  })
                : H(),
              c,
            ],
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=f27bb58e4b0d1797ef74.js.map
