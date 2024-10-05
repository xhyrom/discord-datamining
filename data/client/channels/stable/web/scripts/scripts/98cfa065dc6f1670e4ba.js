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
        o = t(592125),
        l = t(176505);
      function s(e) {
        let n = (0, i.e7)([o.Z], () => {
          let n = o.Z.getChannel(e);
          return (null == n ? void 0 : n.parent_id) != null && n.isForumPost()
            ? o.Z.getChannel(null == n ? void 0 : n.parent_id)
            : null;
        });
        return (
          (null == n ? void 0 : n.hasFlag(l.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) ===
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
        o = t(406432),
        l = t(828061),
        s = t(981631);
      let a = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
        r = (e) => "IMAGE" === e || "VIDEO" === e || "CLIP" === e,
        u = (e) => "IMAGE" === e || "VIDEO" === e;
      function d(e, n) {
        let { filename: t, width: r, height: u } = e;
        if (n && null != r && r > 0 && null != u && u > 0) {
          if ((0, o.CO)(t)) return "IMAGE";
          if (!(0, o.NU)(t) || null == e.proxy_url) return "INVALID";
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
        if (null != e.url && (0, l.O)(t)) return "PLAINTEXT_PREVIEW";
        return "OTHER";
      }
      function m(e, n) {
        let { contentType: t, width: i, height: l } = e;
        if (n && i > 0 && l > 0)
          return (0, o.tw)(t) ? "IMAGE" : (0, o.X2)(t) ? "VIDEO" : "INVALID";
        return "OTHER";
      }
    },
    884182: function (e, n, t) {
      t(47120);
      var i = t(735250),
        o = t(470079),
        l = t(120356),
        s = t.n(l),
        a = t(512722),
        r = t.n(a),
        u = t(392711),
        d = t.n(u),
        m = t(947849),
        c = t(499376),
        h = t(546432),
        I = t(217702),
        x = t(834909);
      let g = Math.round((I.mT - 8) / 3),
        p = Math.round((I.mT - 4) / 2),
        C = Math.round((I.Jj - 4) / 2),
        f = Math.round((2 * (I.mT - 4)) / 3),
        M = f / 2;
      function T(e) {
        let { visualMediaItems: n, footer: t } = e;
        null != t &&
          r()(1 === n.length, "footer only gets applied to single items");
        let o = n.length;
        if (1 === o)
          return (0, i.jsx)(j, {
            itemsForLayout: n,
            isSingleImage: !0,
            footer: t,
          });
        if (2 === o) return (0, i.jsx)(v, { itemsForLayout: n });
        if (3 === o) return (0, i.jsx)(E, { itemsForLayout: n });
        if (4 === o) return (0, i.jsx)(y, { itemsForLayout: n });
        let l = o % 3;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            1 === l && (0, i.jsx)(j, { itemsForLayout: n.slice(0, l) }),
            2 === l && (0, i.jsx)(v, { itemsForLayout: n.slice(0, l) }),
            0 === l
              ? (0, i.jsx)(N, { itemsForLayout: n })
              : (0, i.jsx)(N, { itemsForLayout: n.slice(l) }),
          ],
        });
      }
      function j(e) {
        let { itemsForLayout: n, isSingleImage: t, footer: o } = e,
          l = n[0];
        return (0, i.jsx)("div", {
          className: s()(x.oneByOneGrid, {
            [x.oneByOneGridSingle]: t,
            [x.oneByOneGridMosaic]: !t,
            [x.hasFooter]: null != o,
          }),
          children: (0, i.jsx)(A, {
            props: l,
            useFullWidth: !t,
            isSingleItem: !0,
            footer: o,
          }),
        });
      }
      function v(e) {
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
      function E(e) {
        let { itemsForLayout: n } = e;
        return (0, i.jsxs)("div", {
          className: s()(x.oneByTwoGrid, x.oneByTwoLayoutThreeGrid),
          children: [
            (0, i.jsx)("div", {
              className: x.oneByTwoSoloItem,
              children: (0, i.jsx)(A, { props: n[0], maxWidth: f }),
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
                          maxWidth: M,
                          maxHeight: C,
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
      function y(e) {
        let { itemsForLayout: n } = e;
        return (0, i.jsx)("div", {
          className: x.twoByTwoGrid,
          children: n.map((e) =>
            (0, i.jsx)(
              A,
              { props: e, maxWidth: p, maxHeight: C },
              e.item.uniqueId,
            ),
          ),
        });
      }
      function N(e) {
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
      let w = (e) => ({
          className: s()(e, x.itemContentContainer),
          imgContainerClassName: x.lazyImgContainer,
          imgClassName: x.lazyImg,
        }),
        O = (e) => ({ className: s()(e, x.lazyImg) });
      function A(e) {
        let {
            props: n,
            maxWidth: t = I.mT,
            maxHeight: o = I.Jj,
            useFullWidth: l = !0,
            isSingleItem: s = !1,
            footer: a,
          } = e,
          r = n.item.type,
          u = {
            ...n,
            ...("IMAGE" === r && w(n.className)),
            ...("VIDEO" === r && O(n.className)),
            mediaLayoutType: I.hV.MOSAIC,
            maxWidth: t,
            maxHeight: o,
            useFullWidth: l,
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
            groupableVisualMediaItems: l,
            nonGroupableVisualMediaItems: a,
            nonVisualMediaItems: r,
          } = (function (e) {
            return o.useMemo(() => {
              let [n, t] = d().partition(e, (e) => (0, c.R_)(e.item.type)),
                [i, o] = d().partition(n, (e) => (0, c.Ld)(e.item.type));
              return {
                groupableVisualMediaItems: i,
                nonGroupableVisualMediaItems: o,
                nonVisualMediaItems: t,
              };
            }, [e]);
          })(n);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            l.length > 0 &&
              (null != t
                ? (0, i.jsxs)("div", {
                    className: s()(
                      x.mosaicContainer,
                      1 === l.length && x.single,
                    ),
                    children: [
                      (0, i.jsx)("div", {
                        className: x.visualMediaItemContainer,
                        children: (0, i.jsx)(T, { visualMediaItems: l }),
                      }),
                      t,
                    ],
                  })
                : (0, i.jsx)("div", {
                    className: x.visualMediaItemContainer,
                    children: (0, i.jsx)(T, { visualMediaItems: l }),
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
                    children: (0, i.jsx)(T, {
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
          return _;
        },
      }),
        t(47120),
        t(789020);
      var i = t(735250),
        o = t(470079),
        l = t(120356),
        s = t.n(l),
        a = t(892814),
        r = t(481060),
        u = t(399654),
        d = t(162609),
        m = t(370298),
        c = t(95398),
        h = t(167080),
        I = t(163268),
        x = t(25610),
        g = t(947849),
        p = t(124347),
        C = t(976853),
        f = t(592125),
        M = t(626135),
        T = t(630388),
        j = t(956664),
        v = t(169525),
        E = t(499376),
        y = t(217702),
        N = t(981631),
        w = t(689938),
        O = t(526675),
        A = t(275703);
      function _(e, n) {
        return {
          uniqueId: e.id,
          originalItem: e,
          type: (0, E.aw)(e, n),
          downloadUrl: e.url,
          height: e.height,
          width: e.width,
          spoiler: e.spoiler,
          contentType: e.content_type,
        };
      }
      let L = (e) => {
        let n,
          t,
          l,
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
            text: w.Z.Messages.DOWNLOAD,
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
              text: w.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
              children: (e) =>
                (0, i.jsx)(r.Clickable, {
                  ...e,
                  className: s()(A.hoverButton, O.removeMosaicItemHoverButton),
                  focusProps: { offset: 2 },
                  onClick: d,
                  "aria-label": w.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
                  children: (0, i.jsx)(r.TrashIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                  }),
                }),
            }));
        let [p, C] = o.useState(!1),
          f = o.useCallback(() => C((e) => !e), []);
        return (I &&
          (l = (0, i.jsx)(m.Z, {
            toggleShowMenu: f,
            showMenu: p,
            channelId: g,
            className: s()(A.hoverButton, { [A.selected]: p }),
            imageUrl: u,
            mimeType: a,
          })),
        null == t && null == n && null == l)
          ? null
          : (0, i.jsxs)("div", {
              className: s()(A.hoverButtonGroup, {
                [A.nonMediaMosaicItem]: !x,
                [A.forceShowHover]: p,
              }),
              children: [l, n, t],
            });
      };
      function S(e) {
        var n;
        let {
            message: t,
            item: l,
            autoPlayGif: m,
            canRemoveItem: c,
            onRemoveItem: h,
            onClick: I,
            onContextMenu: x,
            onPlay: v,
            renderImageComponent: E,
            renderVideoComponent: A,
            renderAudioComponent: _,
            renderPlaintextFilePreview: S,
            renderGenericFileComponent: V,
            className: b,
            imgContainerClassName: F,
            imgClassName: P,
            focusable: k,
            hiddenSpoilers: D,
            mediaLayoutType: G,
            maxWidth: H,
            maxHeight: R,
            hasFooter: B,
            useFullWidth: W,
            isVisualMediaType: Z,
            onVideoControlsShow: U,
            onVideoControlsHide: X,
            isSearchResult: q,
          } = e,
          { width: z, height: J, spoiler: Y, type: $, contentType: K } = l,
          [Q, ee] = o.useState(!1),
          [en, et] = o.useState(!1),
          ei = t.getChannelId(),
          eo = f.Z.getChannel(ei),
          el = (0, C.Z)(ei),
          es = d.P.useExperiment(
            { location: "MediaMosaicItem" },
            { autoTrackExposure: !0 },
          ).imageRecsEnabled,
          ea = o.useMemo(
            () =>
              null != K && -1 !== K.indexOf("/")
                ? K.split("/")
                : ["unknown", "unknown"],
            [K],
          ),
          er = l.originalItem,
          eu =
            "IMAGE" === $ &&
            !p.uo.test(l.downloadUrl) &&
            !(
              p.YG.test(l.downloadUrl) &&
              (0, T.yE)(
                null !== (n = er.flags) && void 0 !== n ? n : 0,
                N.J0y.IS_ANIMATED,
              )
            ),
          ed = !1;
        if (Z) {
          (null == z || null == J) && (ed = !0);
          let e = (0, j.Dc)({
            width: null != z ? z : 0,
            height: null != J ? J : 0,
            maxWidth: y.mT,
            maxHeight: y.Jj,
          });
          !W &&
            (e * (null != z ? z : 0) < y.OF ||
              e * (null != J ? J : 0) < y.OF) &&
            (ed = !0);
        }
        let em = o.useCallback(() => {
            h(l);
          }, [l, h]),
          ec = o.useCallback(
            (e) => {
              if (eu && !ed && !0 !== q) {
                if (e && !en) {
                  if ((et(!0), es)) {
                    var n;
                    (0, u.a)({
                      channelId:
                        null !== (n = null == eo ? void 0 : eo.id) &&
                        void 0 !== n
                          ? n
                          : "",
                      location: a.I.CONTEXTUAL_IMAGE,
                      withCommands: !0,
                    });
                  }
                  M.default.track(N.rMx.IMAGE_HOVERED, {
                    guild_id: null == eo ? void 0 : eo.guild_id,
                    channel_id: null == eo ? void 0 : eo.id,
                    image_recommendations_shown: es,
                  });
                } else !e && en && et(!1);
              }
            },
            [en, eo, es, eu, ed, q],
          ),
          eh = o.useCallback(() => {
            if (G === y.hV.MOSAIC) {
              let e =
                (!el && ["VIDEO", "CLIP", "AUDIO"].includes($)) ||
                "OTHER" === $;
              return ed
                ? null
                : !Q &&
                    (0, i.jsx)(L, {
                      mimeType: ea,
                      downloadURL: l.downloadUrl,
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
                onClick: () => h(l),
                "aria-label": w.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
                children: (0, i.jsx)(r.XSmallIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
              })
            );
          }, [G, c, Y, $, Z, Q, l, ea, em, h, es, el, ei, eu, ed, q]);
        switch ($) {
          case "IMAGE":
            return (0, i.jsx)(g.h.Consumer, {
              children: (e) =>
                (0, i.jsx)(E, {
                  item: l,
                  message: t,
                  width: z,
                  height: J,
                  autoPlay: m && !D,
                  onClick: I,
                  onContextMenu: x,
                  shouldHideMediaOptions: el,
                  renderAccessory: e,
                  renderAdjacentContent: eh,
                  containerClassName: b,
                  className: F,
                  imageClassName: P,
                  shouldLink: k,
                  hiddenSpoilers: D,
                  responsive: !0,
                  mediaLayoutType: G,
                  maxWidth: H,
                  maxHeight: R,
                  useFullWidth: W,
                  onMouseEnter: () => ec(!0),
                  onMouseLeave: () => ec(!1),
                }),
            });
          case "VIDEO":
          case "CLIP":
            return (0, i.jsx)(A, {
              item: l,
              message: t,
              width: z,
              height: J,
              onClick: I,
              onContextMenu: x,
              renderAdjacentContent: eh,
              naturalWidth: z,
              naturalHeight: J,
              className: s()(b, { [O.hasFooter]: B }),
              playable: k,
              responsive: !0,
              mediaLayoutType: G,
              maxWidth: H,
              maxHeight: R,
              useFullWidth: W,
              mimeType: ea,
              onControlsShow: U,
              onControlsHide: X,
              downloadable: !el,
              mediaPlayerClassName: B ? O.hasFooter : void 0,
            });
          case "AUDIO":
            return (0, i.jsx)(_, {
              item: l,
              message: t,
              className: b,
              playable: k,
              mimeType: ea,
              renderAdjacentContent: eh,
              onVolumeShow: () => ee(!0),
              onVolumeHide: () => ee(!1),
              onPlay: v,
            });
          case "PLAINTEXT_PREVIEW":
            return (0, i.jsx)(S, {
              item: l,
              message: t,
              className: b,
              onClick: I,
              onContextMenu: x,
              renderAdjacentContent: eh,
            });
          case "OTHER":
            return (0, i.jsx)(V, {
              item: l,
              message: t,
              className: b,
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
            item: l,
            message: a,
            getObscureReason: r,
            useFullWidth: u,
            mediaLayoutType: d,
            isSingleMosaicItem: m,
            footer: h,
            ...g
          } = e,
          { width: p, height: C, type: f } = l,
          M = r(l, (0, x.V)(a.channel_id, a.author.id)),
          [T, N] = o.useState(null != M),
          w = d === y.hV.MOSAIC,
          A = !w && ((null != p && p < 200) || (null != C && C < 50));
        let _ = "IMAGE" === (n = f) || "VIDEO" === n,
          L = (0, E.R_)(f),
          V = m && null != M && (0, I.bR)(p, C),
          [b, F] = o.useState(!1),
          P = () => {
            F(!0);
          },
          k = () => {
            F(!1);
          },
          D = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(S, {
              ...g,
              item: l,
              message: a,
              getObscureReason: r,
              hiddenSpoilers: e,
              className: s()(t, O.mosaicItemContent, {
                [O.obscured]: T && !A,
                [O.hiddenSpoiler]: T && M === v.wk.SPOILER,
                [O.hiddenExplicit]:
                  T &&
                  null != M &&
                  [
                    v.wk.EXPLICIT_CONTENT,
                    v.wk.POTENTIAL_EXPLICIT_CONTENT,
                  ].includes(M),
                [O.hiddenMosaicItem]: T && e,
                [O.inline]: T && A,
              }),
              focusable: !e,
              mediaLayoutType: d,
              hasFooter: null != h,
              useFullWidth: !!V || u,
              isVisualMediaType: L,
              onVideoControlsShow: P,
              onVideoControlsHide: k,
            });
          };
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: s()(O.mosaicItem, {
              [O.mosaicItemNoJustify]: _,
              [O.mosaicItemFullWidth]: u,
              [O.mosaicItemMediaMosaic]: w,
              [O.hideOverflow]: w && L,
              [O.mosaicItemWithFooter]: null != h,
            }),
            children: [
              null != M
                ? (0, i.jsx)(c.Z, {
                    type: c.Z.Types.ATTACHMENT,
                    inline: A,
                    reason: M,
                    isSingleMosaicItem: m,
                    obscured: T,
                    containerStyles: (function (e, n, t) {
                      if (!n) return;
                      let i = e.width;
                      if (void 0 !== e.width && void 0 !== e.height) {
                        let { width: n } = (0, j.Tj)({
                          width: e.width,
                          height: e.height,
                          maxWidth: 400,
                          maxHeight: 300,
                        });
                        i = n;
                      }
                      return {
                        ...(t !== y.hV.MOSAIC && {
                          maxWidth: null != i ? i : "400px",
                        }),
                        width: "100%",
                        height: "100%",
                        justifySelf: "auto",
                      };
                    })(l, _, d),
                    obscurityControlClassName: s()({
                      [O.obscureVideoSpacing]: "VIDEO" === f && m && !T && b,
                    }),
                    onToggleObscurity: () => N((e) => !e),
                    children: (e) => D(e),
                  })
                : D(),
              h,
            ],
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=98cfa065dc6f1670e4ba.js.map
