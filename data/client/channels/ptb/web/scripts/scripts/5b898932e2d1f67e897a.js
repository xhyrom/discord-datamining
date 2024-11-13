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
        r = (e) =>
          "IMAGE" === e ||
          "VIDEO" === e ||
          "CLIP" === e ||
          "VISUAL_PLACEHOLDER" === e,
        u = (e) => "IMAGE" === e || "VIDEO" === e || "VISUAL_PLACEHOLDER" === e;
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
      function m(e) {
        let { contentType: n, width: t, height: i } = e;
        if (t > 0 && i > 0) {
          if ((0, l.tw)(n)) return "IMAGE";
          if ((0, l.X2)(n)) return "VIDEO";
        }
        return "VISUAL_PLACEHOLDER";
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
        x = t(834909);
      let g = Math.round((I.mT - 8) / 3),
        p = Math.round((I.mT - 4) / 2),
        C = Math.round((I.Jj - 4) / 2),
        f = Math.round((2 * (I.mT - 4)) / 3),
        j = f / 2;
      function y(e) {
        let { visualMediaItems: n, footer: t } = e;
        null != t &&
          r()(1 === n.length, "footer only gets applied to single items");
        let l = n.length;
        if (1 === l)
          return (0, i.jsx)(v, {
            itemsForLayout: n,
            isSingleImage: !0,
            footer: t,
          });
        if (2 === l) return (0, i.jsx)(E, { itemsForLayout: n });
        if (3 === l) return (0, i.jsx)(M, { itemsForLayout: n });
        if (4 === l) return (0, i.jsx)(N, { itemsForLayout: n });
        let o = l % 3;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            1 === o && (0, i.jsx)(v, { itemsForLayout: n.slice(0, o) }),
            2 === o && (0, i.jsx)(E, { itemsForLayout: n.slice(0, o) }),
            0 === o
              ? (0, i.jsx)(T, { itemsForLayout: n })
              : (0, i.jsx)(T, { itemsForLayout: n.slice(o) }),
          ],
        });
      }
      function v(e) {
        let { itemsForLayout: n, isSingleImage: t, footer: l } = e,
          o = n[0];
        return (0, i.jsx)("div", {
          className: s()(x.oneByOneGrid, {
            [x.oneByOneGridSingle]: t,
            [x.oneByOneGridMosaic]: !t,
            [x.hasFooter]: null != l,
          }),
          children: (0, i.jsx)(L, {
            props: o,
            useFullWidth: !t,
            isSingleItem: !0,
            footer: l,
          }),
        });
      }
      function E(e) {
        let { itemsForLayout: n } = e;
        return (0, i.jsx)("div", {
          className: x.oneByTwoGrid,
          children: n.map((e) =>
            (0, i.jsx)(
              "div",
              {
                className: x.oneByTwoGridItem,
                children: (0, i.jsx)(L, {
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
        let { itemsForLayout: n } = e;
        return (0, i.jsxs)("div", {
          className: s()(x.oneByTwoGrid, x.oneByTwoLayoutThreeGrid),
          children: [
            (0, i.jsx)("div", {
              className: x.oneByTwoSoloItem,
              children: (0, i.jsx)(L, { props: n[0], maxWidth: f }),
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
                        children: (0, i.jsx)(L, {
                          props: e,
                          maxWidth: j,
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
      function N(e) {
        let { itemsForLayout: n } = e;
        return (0, i.jsx)("div", {
          className: x.twoByTwoGrid,
          children: n.map((e) =>
            (0, i.jsx)(
              L,
              { props: e, maxWidth: p, maxHeight: C },
              e.item.uniqueId,
            ),
          ),
        });
      }
      function T(e) {
        let { itemsForLayout: n } = e;
        return (0, i.jsx)("div", {
          className: x.threeByThreeGrid,
          children: n.map((e) =>
            (0, i.jsx)(
              L,
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
      function L(e) {
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
            ...("IMAGE" === r && w(n.className)),
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
                        children: (0, i.jsx)(y, { visualMediaItems: o }),
                      }),
                      t,
                    ],
                  })
                : (0, i.jsx)("div", {
                    className: x.visualMediaItemContainer,
                    children: (0, i.jsx)(y, { visualMediaItems: o }),
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
                    children: (0, i.jsx)(y, {
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
                      children: (0, i.jsx)(L, { props: e }),
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
          return A;
        },
      }),
        t(47120),
        t(789020),
        t(411104);
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
        C = t(976853),
        f = t(592125),
        j = t(626135),
        y = t(630388),
        v = t(956664),
        E = t(169525),
        M = t(499376),
        N = t(217702),
        T = t(981631),
        w = t(388032),
        O = t(526675),
        L = t(275703);
      function A(e, n) {
        return {
          uniqueId: e.id,
          originalItem: e,
          type: (0, M.aw)(e, n),
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
            text: w.intl.string(w.t["1WjMbG"]),
            children: (e) =>
              (0, i.jsx)(h.Z, {
                ...e,
                target: "_blank",
                rel: "noreferrer noopener",
                className: L.hoverButton,
                iconClassName: O.downloadHoverButtonIcon,
                focusProps: { offset: 2 },
                href: u,
                mimeType: a,
              }),
          })),
          null != d &&
            (t = (0, i.jsx)(r.Tooltip, {
              text: w.intl.string(w.t["/XT3io"]),
              children: (e) =>
                (0, i.jsx)(r.Clickable, {
                  ...e,
                  className: s()(L.hoverButton, O.removeMosaicItemHoverButton),
                  focusProps: { offset: 2 },
                  onClick: d,
                  "aria-label": w.intl.string(w.t["0+xZHx"]),
                  children: (0, i.jsx)(r.TrashIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                  }),
                }),
            }));
        let [p, C] = l.useState(!1),
          f = l.useCallback(() => C((e) => !e), []);
        return (I &&
          (o = (0, i.jsx)(m.Z, {
            toggleShowMenu: f,
            showMenu: p,
            channelId: g,
            className: s()(L.hoverButton, { [L.selected]: p }),
            imageUrl: u,
            mimeType: a,
          })),
        null == t && null == n && null == o)
          ? null
          : (0, i.jsxs)("div", {
              className: s()(L.hoverButtonGroup, {
                [L.nonMediaMosaicItem]: !x,
                [L.forceShowHover]: p,
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
            onPlay: E,
            renderImageComponent: M,
            renderVideoComponent: L,
            renderAudioComponent: A,
            renderPlaintextFilePreview: S,
            renderGenericFileComponent: V,
            renderVisualPlaceholderComponent: P,
            className: b,
            imgContainerClassName: F,
            imgClassName: H,
            focusable: k,
            hiddenSpoilers: D,
            mediaLayoutType: G,
            maxWidth: R,
            maxHeight: B,
            hasFooter: W,
            useFullWidth: U,
            isVisualMediaType: Z,
            onVideoControlsShow: X,
            onVideoControlsHide: q,
            isSearchResult: z,
          } = e,
          { width: J, height: Y, spoiler: $, type: K, contentType: Q } = o,
          [ee, en] = l.useState(!1),
          [et, ei] = l.useState(!1),
          el = t.getChannelId(),
          eo = f.Z.getChannel(el),
          es = (0, C.Z)(el),
          ea = d.P.useExperiment(
            { location: "MediaMosaicItem" },
            { autoTrackExposure: !0 },
          ).imageRecsEnabled,
          er = l.useMemo(
            () =>
              null != Q && -1 !== Q.indexOf("/")
                ? Q.split("/")
                : ["unknown", "unknown"],
            [Q],
          ),
          eu = o.originalItem,
          ed =
            "IMAGE" === K &&
            !p.uo.test(o.downloadUrl) &&
            !(
              p.YG.test(o.downloadUrl) &&
              (0, y.yE)(
                null !== (n = eu.flags) && void 0 !== n ? n : 0,
                T.J0y.IS_ANIMATED,
              )
            ),
          em = !1;
        if (Z) {
          (null == J || null == Y) && (em = !0);
          let e = (0, v.Dc)({
            width: null != J ? J : 0,
            height: null != Y ? Y : 0,
            maxWidth: N.mT,
            maxHeight: N.Jj,
          });
          !U &&
            (e * (null != J ? J : 0) < N.OF ||
              e * (null != Y ? Y : 0) < N.OF) &&
            (em = !0);
        }
        let ec = l.useCallback(() => {
            h(o);
          }, [o, h]),
          eh = l.useCallback(
            (e) => {
              if (ed && !em && !0 !== z) {
                if (e && !et) {
                  if ((ei(!0), ea)) {
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
                  j.default.track(T.rMx.IMAGE_HOVERED, {
                    guild_id: null == eo ? void 0 : eo.guild_id,
                    channel_id: null == eo ? void 0 : eo.id,
                    image_recommendations_shown: ea,
                  });
                } else !e && et && ei(!1);
              }
            },
            [et, eo, ea, ed, em, z],
          ),
          eI = l.useCallback(() => {
            if (G === N.hV.MOSAIC) {
              let e =
                (!es && ["VIDEO", "CLIP", "AUDIO"].includes(K)) ||
                "OTHER" === K;
              return em
                ? null
                : !ee &&
                    (0, i.jsx)(_, {
                      mimeType: er,
                      downloadURL: o.downloadUrl,
                      showDownload: e,
                      showImageAppPicker: ed && ea && !0 !== z,
                      onRemoveItem: c ? ec : void 0,
                      isVisualMediaType: Z,
                      channelId: el,
                    });
            }
            return (
              c &&
              (0, i.jsx)(r.Clickable, {
                className: $
                  ? O.spoilerRemoveMosaicItemButton
                  : O.removeMosaicItemButton,
                focusProps: { offset: { bottom: 4 } },
                onClick: () => h(o),
                "aria-label": w.intl.string(w.t["0+xZHx"]),
                children: (0, i.jsx)(r.XSmallIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
              })
            );
          }, [G, c, $, K, Z, ee, o, er, ec, h, ea, es, el, ed, em, z]);
        switch (K) {
          case "IMAGE":
            return (0, i.jsx)(g.h.Consumer, {
              children: (e) =>
                (0, i.jsx)(M, {
                  item: o,
                  message: t,
                  width: J,
                  height: Y,
                  autoPlay: m && !D,
                  onClick: I,
                  onContextMenu: x,
                  shouldHideMediaOptions: es,
                  renderAccessory: e,
                  renderAdjacentContent: eI,
                  containerClassName: b,
                  className: F,
                  imageClassName: H,
                  shouldLink: k,
                  hiddenSpoilers: D,
                  responsive: !0,
                  mediaLayoutType: G,
                  maxWidth: R,
                  maxHeight: B,
                  useFullWidth: U,
                  onMouseEnter: () => eh(!0),
                  onMouseLeave: () => eh(!1),
                }),
            });
          case "VIDEO":
          case "CLIP":
            return (0, i.jsx)(L, {
              item: o,
              message: t,
              width: J,
              height: Y,
              onClick: I,
              onContextMenu: x,
              renderAdjacentContent: eI,
              naturalWidth: J,
              naturalHeight: Y,
              className: s()(b, { [O.hasFooter]: W }),
              playable: k,
              responsive: !0,
              mediaLayoutType: G,
              maxWidth: R,
              maxHeight: B,
              useFullWidth: U,
              mimeType: er,
              onControlsShow: X,
              onControlsHide: q,
              downloadable: !es,
              mediaPlayerClassName: W ? O.hasFooter : void 0,
            });
          case "VISUAL_PLACEHOLDER":
            if (null == P) return null;
            return (0, i.jsx)(P, {
              item: o,
              message: t,
              className: F,
              imageClassName: H,
              maxWidth: R,
              maxHeight: B,
              mediaLayoutType: G,
              useFullWidth: U,
            });
          case "AUDIO":
            return (0, i.jsx)(A, {
              item: o,
              message: t,
              className: b,
              playable: k,
              mimeType: er,
              renderAdjacentContent: eI,
              onVolumeShow: () => en(!0),
              onVolumeHide: () => en(!1),
              onPlay: E,
            });
          case "PLAINTEXT_PREVIEW":
            return (0, i.jsx)(S, {
              item: o,
              message: t,
              className: b,
              onClick: I,
              onContextMenu: x,
              renderAdjacentContent: eI,
            });
          case "OTHER":
            return (0, i.jsx)(V, {
              item: o,
              message: t,
              className: b,
              onClick: I,
              onContextMenu: x,
              renderAdjacentContent: eI,
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
          { width: p, height: C, type: f } = o,
          j = r(o, (0, x.V)(a.channel_id, a.author.id)),
          [y, T] = l.useState(null != j),
          w = d === N.hV.MOSAIC,
          L = !w && ((null != p && p < 200) || (null != C && C < 50));
        let A = "IMAGE" === (n = f) || "VIDEO" === n,
          _ = (0, M.R_)(f),
          V = m && null != j && (0, I.bR)(p, C),
          [P, b] = l.useState(!1),
          F = () => {
            b(!0);
          },
          H = () => {
            b(!1);
          },
          k = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(S, {
              ...g,
              item: o,
              message: a,
              getObscureReason: r,
              hiddenSpoilers: e,
              className: s()(t, O.mosaicItemContent, {
                [O.obscured]: y && !L,
                [O.hiddenSpoiler]: y && j === E.wk.SPOILER,
                [O.hiddenExplicit]:
                  y &&
                  null != j &&
                  [
                    E.wk.EXPLICIT_CONTENT,
                    E.wk.POTENTIAL_EXPLICIT_CONTENT,
                  ].includes(j),
                [O.hiddenMosaicItem]: y && e,
                [O.inline]: y && L,
              }),
              focusable: !e,
              mediaLayoutType: d,
              hasFooter: null != h,
              useFullWidth: !!V || u,
              isVisualMediaType: _,
              onVideoControlsShow: F,
              onVideoControlsHide: H,
            });
          };
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: s()(O.mosaicItem, {
              [O.mosaicItemNoJustify]: A,
              [O.mosaicItemFullWidth]: u,
              [O.mosaicItemMediaMosaic]: w,
              [O.hideOverflow]: w && _,
              [O.mosaicItemWithFooter]: null != h,
            }),
            children: [
              null != j
                ? (0, i.jsx)(c.Z, {
                    type: c.Z.Types.ATTACHMENT,
                    inline: L,
                    reason: j,
                    isSingleMosaicItem: m,
                    obscured: y,
                    containerStyles: (function (e, n, t) {
                      if (!n) return;
                      let i = e.width;
                      if (void 0 !== e.width && void 0 !== e.height) {
                        let { width: n } = (0, v.Tj)({
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
                    })(o, A, d),
                    obscurityControlClassName: s()({
                      [O.obscureVideoSpacing]: "VIDEO" === f && m && !y && P,
                    }),
                    onToggleObscurity: () => T((e) => !e),
                    children: (e) => k(e),
                  })
                : k(),
              h,
            ],
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=5b898932e2d1f67e897a.js.map
