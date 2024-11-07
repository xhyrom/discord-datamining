"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46097"],
  {
    162609: function (e, n, t) {
      t.d(n, {
        P: function () {
          return i;
        },
      });
      let i = (0, t(818083).B)({
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
    976853: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(399606),
        l = t(592125),
        o = t(176505);
      function s(e) {
        let n = (0, i.e7)([l.Z], () => {
          let n = l.Z.getChannel(e);
          return (null == n ? void 0 : n.parent_id) != null && n.isForumPost()
            ? l.Z.getChannel(null == n ? void 0 : n.parent_id)
            : null;
        });
        return (
          (null == n ? void 0 : n.hasFlag(o.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) ===
          !0
        );
      }
    },
    499376: function (e, n, t) {
      t.d(n, {
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
        t(789020);
      var i = t(630388),
        l = t(406432),
        o = t(828061),
        s = t(981631);
      let a = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
        r = (e) => "IMAGE" === e || "VIDEO" === e || "CLIP" === e,
        u = (e) => "IMAGE" === e || "VIDEO" === e;
      function d(e, n) {
        let { filename: t, width: r, height: u } = e;
        if (n && null != r && r > 0 && null != u && u > 0) {
          if ((0, l.CO)(t)) return "IMAGE";
          if (!(0, l.NU)(t) || null == e.proxy_url) return "INVALID";
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
        if (null != n && a.test(t) && null != e.url) return "AUDIO";
        if (null != e.url && (0, o.O)(t)) return "PLAINTEXT_PREVIEW";
        return "OTHER";
      }
      function m(e, n) {
        let { contentType: t, width: i, height: o } = e;
        if (n && i > 0 && o > 0)
          return (0, l.tw)(t) ? "IMAGE" : (0, l.X2)(t) ? "VIDEO" : "INVALID";
        return "OTHER";
      }
    },
    884182: function (e, n, t) {
      t(47120);
      var i = t(200651),
        l = t(192379),
        o = t(120356),
        s = t.n(o),
        a = t(512722),
        r = t.n(a),
        u = t(392711),
        d = t.n(u),
        m = t(947849),
        c = t(499376),
        h = t(546432),
        I = t(217702),
        x = t(421502);
      let g = Math.round((I.mT - 8) / 3),
        p = Math.round((I.mT - 4) / 2),
        f = Math.round((I.Jj - 4) / 2),
        C = Math.round((2 * (I.mT - 4)) / 3),
        j = C / 2;
      function v(e) {
        let { visualMediaItems: n, footer: t } = e;
        null != t &&
          r()(1 === n.length, "footer only gets applied to single items");
        let l = n.length;
        if (1 === l)
          return (0, i.jsx)(y, {
            itemsForLayout: n,
            isSingleImage: !0,
            footer: t,
          });
        if (2 === l) return (0, i.jsx)(M, { itemsForLayout: n });
        if (3 === l) return (0, i.jsx)(T, { itemsForLayout: n });
        if (4 === l) return (0, i.jsx)(N, { itemsForLayout: n });
        let o = l % 3;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            1 === o && (0, i.jsx)(y, { itemsForLayout: n.slice(0, o) }),
            2 === o && (0, i.jsx)(M, { itemsForLayout: n.slice(0, o) }),
            0 === o
              ? (0, i.jsx)(w, { itemsForLayout: n })
              : (0, i.jsx)(w, { itemsForLayout: n.slice(o) }),
          ],
        });
      }
      function y(e) {
        let { itemsForLayout: n, isSingleImage: t, footer: l } = e,
          o = n[0];
        return (0, i.jsx)("div", {
          className: s()(x.oneByOneGrid, {
            [x.oneByOneGridSingle]: t,
            [x.oneByOneGridMosaic]: !t,
            [x.hasFooter]: null != l,
          }),
          children: (0, i.jsx)(A, {
            props: o,
            useFullWidth: !t,
            isSingleItem: !0,
            footer: l,
          }),
        });
      }
      function M(e) {
        let { itemsForLayout: n } = e;
        return (0, i.jsx)("div", {
          className: x.oneByTwoGrid,
          children: n.map((e) =>
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
      function T(e) {
        let { itemsForLayout: n } = e;
        return (0, i.jsxs)("div", {
          className: s()(x.oneByTwoGrid, x.oneByTwoLayoutThreeGrid),
          children: [
            (0, i.jsx)("div", {
              className: x.oneByTwoSoloItem,
              children: (0, i.jsx)(A, { props: n[0], maxWidth: C }),
            }),
            (0, i.jsx)("div", {
              className: x.oneByTwoDuoItem,
              children: (0, i.jsx)("div", {
                className: x.twoByOneGrid,
                children: n
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
        let { itemsForLayout: n } = e;
        return (0, i.jsx)("div", {
          className: x.twoByTwoGrid,
          children: n.map((e) =>
            (0, i.jsx)(
              A,
              { props: e, maxWidth: p, maxHeight: f },
              e.item.uniqueId,
            ),
          ),
        });
      }
      function w(e) {
        let { itemsForLayout: n } = e;
        return (0, i.jsx)("div", {
          className: x.threeByThreeGrid,
          children: n.map((e) =>
            (0, i.jsx)(
              A,
              { props: e, maxWidth: g, maxHeight: g },
              e.item.uniqueId,
            ),
          ),
        });
      }
      let E = (e) => ({
          className: s()(e, x.itemContentContainer),
          imgContainerClassName: x.lazyImgContainer,
          imgClassName: x.lazyImg,
        }),
        O = (e) => ({ className: s()(e, x.lazyImg) });
      function A(e) {
        let {
            props: n,
            maxWidth: t = I.mT,
            maxHeight: l = I.Jj,
            useFullWidth: o = !0,
            isSingleItem: s = !1,
            footer: a,
          } = e,
          r = n.item.type,
          u = {
            ...n,
            ...("IMAGE" === r && E(n.className)),
            ...("VIDEO" === r && O(n.className)),
            mediaLayoutType: I.hV.MOSAIC,
            maxWidth: t,
            maxHeight: l,
            useFullWidth: o,
            isSingleMosaicItem: s,
          };
        return (0, i.jsx)(m.h.Provider, {
          value: n.gifFavoriteButton,
          children: (0, i.jsx)(h.Z, { ...u, footer: a }),
        });
      }
      n.Z = function (e) {
        let { items: n, inlineForwardButton: t } = e,
          {
            groupableVisualMediaItems: o,
            nonGroupableVisualMediaItems: a,
            nonVisualMediaItems: r,
          } = (function (e) {
            return l.useMemo(() => {
              let [n, t] = d().partition(e, (e) => (0, c.R_)(e.item.type)),
                [i, l] = d().partition(n, (e) => (0, c.Ld)(e.item.type));
              return {
                groupableVisualMediaItems: i,
                nonGroupableVisualMediaItems: l,
                nonVisualMediaItems: t,
              };
            }, [e]);
          })(n);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            o.length > 0 &&
              (null != t
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
                      t,
                    ],
                  })
                : (0, i.jsx)("div", {
                    className: x.visualMediaItemContainer,
                    children: (0, i.jsx)(v, { visualMediaItems: o }),
                  })),
            a.length > 0 &&
              a.map((e) => {
                let n = e.renderMosaicItemFooter({
                  item: e.item,
                  message: e.message,
                });
                return (0, i.jsx)(
                  "div",
                  {
                    className: x.visualMediaItemContainer,
                    children: (0, i.jsx)(v, {
                      visualMediaItems: [e],
                      footer: n,
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
    546432: function (e, n, t) {
      t.d(n, {
        O: function () {
          return L;
        },
      }),
        t(47120),
        t(789020);
      var i = t(200651),
        l = t(192379),
        o = t(120356),
        s = t.n(o),
        a = t(892814),
        r = t(481060),
        u = t(399654),
        d = t(162609),
        m = t(370298),
        c = t(95398),
        h = t(167080),
        I = t(247206),
        x = t(25610),
        g = t(947849),
        p = t(124347),
        f = t(976853),
        C = t(592125),
        j = t(626135),
        v = t(630388),
        y = t(956664),
        M = t(169525),
        T = t(499376),
        N = t(217702),
        w = t(981631),
        E = t(388032),
        O = t(166353),
        A = t(985146);
      function L(e, n) {
        return {
          uniqueId: e.id,
          originalItem: e,
          type: (0, T.aw)(e, n),
          downloadUrl: e.url,
          height: e.height,
          width: e.width,
          spoiler: e.spoiler,
          contentType: e.content_type,
        };
      }
      let _ = (e) => {
        let n,
          t,
          o,
          {
            mimeType: a,
            downloadURL: u,
            onRemoveItem: d,
            showDownload: c,
            showImageAppPicker: I,
            isVisualMediaType: x,
            channelId: g,
          } = e;
        c &&
          (n = (0, i.jsx)(r.Tooltip, {
            text: E.intl.string(E.t["1WjMbG"]),
            children: (e) =>
              (0, i.jsx)(h.Z, {
                ...e,
                target: "_blank",
                rel: "noreferrer noopener",
                className: A.hoverButton,
                iconClassName: O.downloadHoverButtonIcon,
                focusProps: { offset: 2 },
                href: u,
                mimeType: a,
              }),
          })),
          null != d &&
            (t = (0, i.jsx)(r.Tooltip, {
              text: E.intl.string(E.t["/XT3io"]),
              children: (e) =>
                (0, i.jsx)(r.Clickable, {
                  ...e,
                  className: s()(A.hoverButton, O.removeMosaicItemHoverButton),
                  focusProps: { offset: 2 },
                  onClick: d,
                  "aria-label": E.intl.string(E.t["0+xZHx"]),
                  children: (0, i.jsx)(r.TrashIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                  }),
                }),
            }));
        let [p, f] = l.useState(!1),
          C = l.useCallback(() => f((e) => !e), []);
        return (I &&
          (o = (0, i.jsx)(m.Z, {
            toggleShowMenu: C,
            showMenu: p,
            channelId: g,
            className: s()(A.hoverButton, { [A.selected]: p }),
            imageUrl: u,
            mimeType: a,
          })),
        null == t && null == n && null == o)
          ? null
          : (0, i.jsxs)("div", {
              className: s()(A.hoverButtonGroup, {
                [A.nonMediaMosaicItem]: !x,
                [A.forceShowHover]: p,
              }),
              children: [o, n, t],
            });
      };
      function S(e) {
        var n;
        let {
            message: t,
            item: o,
            autoPlayGif: m,
            canRemoveItem: c,
            onRemoveItem: h,
            onClick: I,
            onContextMenu: x,
            onPlay: M,
            renderImageComponent: T,
            renderVideoComponent: A,
            renderAudioComponent: L,
            renderPlaintextFilePreview: S,
            renderGenericFileComponent: b,
            className: V,
            imgContainerClassName: F,
            imgClassName: k,
            focusable: P,
            hiddenSpoilers: G,
            mediaLayoutType: H,
            maxWidth: D,
            maxHeight: B,
            hasFooter: R,
            useFullWidth: W,
            isVisualMediaType: Z,
            onVideoControlsShow: U,
            onVideoControlsHide: X,
            isSearchResult: q,
          } = e,
          { width: z, height: J, spoiler: Y, type: $, contentType: K } = o,
          [Q, ee] = l.useState(!1),
          [en, et] = l.useState(!1),
          ei = t.getChannelId(),
          el = C.Z.getChannel(ei),
          eo = (0, f.Z)(ei),
          es = d.P.useExperiment(
            { location: "MediaMosaicItem" },
            { autoTrackExposure: !0 },
          ).imageRecsEnabled,
          ea = l.useMemo(
            () =>
              null != K && -1 !== K.indexOf("/")
                ? K.split("/")
                : ["unknown", "unknown"],
            [K],
          ),
          er = o.originalItem,
          eu =
            "IMAGE" === $ &&
            !p.uo.test(o.downloadUrl) &&
            !(
              p.YG.test(o.downloadUrl) &&
              (0, v.yE)(
                null !== (n = er.flags) && void 0 !== n ? n : 0,
                w.J0y.IS_ANIMATED,
              )
            ),
          ed = !1;
        if (Z) {
          (null == z || null == J) && (ed = !0);
          let e = (0, y.Dc)({
            width: null != z ? z : 0,
            height: null != J ? J : 0,
            maxWidth: N.mT,
            maxHeight: N.Jj,
          });
          !W &&
            (e * (null != z ? z : 0) < N.OF ||
              e * (null != J ? J : 0) < N.OF) &&
            (ed = !0);
        }
        let em = l.useCallback(() => {
            h(o);
          }, [o, h]),
          ec = l.useCallback(
            (e) => {
              if (eu && !ed && !0 !== q) {
                if (e && !en) {
                  if ((et(!0), es)) {
                    var n;
                    (0, u.a)({
                      channelId:
                        null !== (n = null == el ? void 0 : el.id) &&
                        void 0 !== n
                          ? n
                          : "",
                      location: a.I.CONTEXTUAL_IMAGE,
                      withCommands: !0,
                    });
                  }
                  j.default.track(w.rMx.IMAGE_HOVERED, {
                    guild_id: null == el ? void 0 : el.guild_id,
                    channel_id: null == el ? void 0 : el.id,
                    image_recommendations_shown: es,
                  });
                } else !e && en && et(!1);
              }
            },
            [en, el, es, eu, ed, q],
          ),
          eh = l.useCallback(() => {
            if (H === N.hV.MOSAIC) {
              let e =
                (!eo && ["VIDEO", "CLIP", "AUDIO"].includes($)) ||
                "OTHER" === $;
              return ed
                ? null
                : !Q &&
                    (0, i.jsx)(_, {
                      mimeType: ea,
                      downloadURL: o.downloadUrl,
                      showDownload: e,
                      showImageAppPicker: eu && es && !0 !== q,
                      onRemoveItem: c ? em : void 0,
                      isVisualMediaType: Z,
                      channelId: ei,
                    });
            }
            return (
              c &&
              (0, i.jsx)(r.Clickable, {
                className: Y
                  ? O.spoilerRemoveMosaicItemButton
                  : O.removeMosaicItemButton,
                focusProps: { offset: { bottom: 4 } },
                onClick: () => h(o),
                "aria-label": E.intl.string(E.t["0+xZHx"]),
                children: (0, i.jsx)(r.XSmallIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
              })
            );
          }, [H, c, Y, $, Z, Q, o, ea, em, h, es, eo, ei, eu, ed, q]);
        switch ($) {
          case "IMAGE":
            return (0, i.jsx)(g.h.Consumer, {
              children: (e) =>
                (0, i.jsx)(T, {
                  item: o,
                  message: t,
                  width: z,
                  height: J,
                  autoPlay: m && !G,
                  onClick: I,
                  onContextMenu: x,
                  shouldHideMediaOptions: eo,
                  renderAccessory: e,
                  renderAdjacentContent: eh,
                  containerClassName: V,
                  className: F,
                  imageClassName: k,
                  shouldLink: P,
                  hiddenSpoilers: G,
                  responsive: !0,
                  mediaLayoutType: H,
                  maxWidth: D,
                  maxHeight: B,
                  useFullWidth: W,
                  onMouseEnter: () => ec(!0),
                  onMouseLeave: () => ec(!1),
                }),
            });
          case "VIDEO":
          case "CLIP":
            return (0, i.jsx)(A, {
              item: o,
              message: t,
              width: z,
              height: J,
              onClick: I,
              onContextMenu: x,
              renderAdjacentContent: eh,
              naturalWidth: z,
              naturalHeight: J,
              className: s()(V, { [O.hasFooter]: R }),
              playable: P,
              responsive: !0,
              mediaLayoutType: H,
              maxWidth: D,
              maxHeight: B,
              useFullWidth: W,
              mimeType: ea,
              onControlsShow: U,
              onControlsHide: X,
              downloadable: !eo,
              mediaPlayerClassName: R ? O.hasFooter : void 0,
            });
          case "AUDIO":
            return (0, i.jsx)(L, {
              item: o,
              message: t,
              className: V,
              playable: P,
              mimeType: ea,
              renderAdjacentContent: eh,
              onVolumeShow: () => ee(!0),
              onVolumeHide: () => ee(!1),
              onPlay: M,
            });
          case "PLAINTEXT_PREVIEW":
            return (0, i.jsx)(S, {
              item: o,
              message: t,
              className: V,
              onClick: I,
              onContextMenu: x,
              renderAdjacentContent: eh,
            });
          case "OTHER":
            return (0, i.jsx)(b, {
              item: o,
              message: t,
              className: V,
              onClick: I,
              onContextMenu: x,
              renderAdjacentContent: eh,
            });
          case "INVALID":
            return null;
        }
      }
      n.Z = function (e) {
        var n;
        let {
            className: t,
            item: o,
            message: a,
            getObscureReason: r,
            useFullWidth: u,
            mediaLayoutType: d,
            isSingleMosaicItem: m,
            footer: h,
            ...g
          } = e,
          { width: p, height: f, type: C } = o,
          j = r(o, (0, x.V)(a.channel_id, a.author.id)),
          [v, w] = l.useState(null != j),
          E = d === N.hV.MOSAIC,
          A = !E && ((null != p && p < 200) || (null != f && f < 50));
        let L = "IMAGE" === (n = C) || "VIDEO" === n,
          _ = (0, T.R_)(C),
          b = m && null != j && (0, I.bR)(p, f),
          [V, F] = l.useState(!1),
          k = () => {
            F(!0);
          },
          P = () => {
            F(!1);
          },
          G = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(S, {
              ...g,
              item: o,
              message: a,
              getObscureReason: r,
              hiddenSpoilers: e,
              className: s()(t, O.mosaicItemContent, {
                [O.obscured]: v && !A,
                [O.hiddenSpoiler]: v && j === M.wk.SPOILER,
                [O.hiddenExplicit]:
                  v &&
                  null != j &&
                  [
                    M.wk.EXPLICIT_CONTENT,
                    M.wk.POTENTIAL_EXPLICIT_CONTENT,
                  ].includes(j),
                [O.hiddenMosaicItem]: v && e,
                [O.inline]: v && A,
              }),
              focusable: !e,
              mediaLayoutType: d,
              hasFooter: null != h,
              useFullWidth: !!b || u,
              isVisualMediaType: _,
              onVideoControlsShow: k,
              onVideoControlsHide: P,
            });
          };
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: s()(O.mosaicItem, {
              [O.mosaicItemNoJustify]: L,
              [O.mosaicItemFullWidth]: u,
              [O.mosaicItemMediaMosaic]: E,
              [O.hideOverflow]: E && _,
              [O.mosaicItemWithFooter]: null != h,
            }),
            children: [
              null != j
                ? (0, i.jsx)(c.Z, {
                    type: c.Z.Types.ATTACHMENT,
                    inline: A,
                    reason: j,
                    isSingleMosaicItem: m,
                    obscured: v,
                    containerStyles: (function (e, n, t) {
                      if (!n) return;
                      let i = e.width;
                      if (void 0 !== e.width && void 0 !== e.height) {
                        let { width: n } = (0, y.Tj)({
                          width: e.width,
                          height: e.height,
                          maxWidth: 400,
                          maxHeight: 300,
                        });
                        i = n;
                      }
                      return {
                        ...(t !== N.hV.MOSAIC && {
                          maxWidth: null != i ? i : "400px",
                        }),
                        width: "100%",
                        height: "100%",
                        justifySelf: "auto",
                      };
                    })(o, L, d),
                    obscurityControlClassName: s()({
                      [O.obscureVideoSpacing]: "VIDEO" === C && m && !v && V,
                    }),
                    onToggleObscurity: () => w((e) => !e),
                    children: (e) => G(e),
                  })
                : G(),
              h,
            ],
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=f087b8778bfd505e9be9.js.map
