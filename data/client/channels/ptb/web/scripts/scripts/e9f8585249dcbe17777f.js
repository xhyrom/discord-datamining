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
        x = t(421502);
      let g = Math.round((I.mT - 8) / 3),
        p = Math.round((I.mT - 4) / 2),
        C = Math.round((I.Jj - 4) / 2),
        f = Math.round((2 * (I.mT - 4)) / 3),
        j = f / 2;
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
        if (2 === l) return (0, i.jsx)(E, { itemsForLayout: n });
        if (3 === l) return (0, i.jsx)(M, { itemsForLayout: n });
        if (4 === l) return (0, i.jsx)(N, { itemsForLayout: n });
        let o = l % 3;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            1 === o && (0, i.jsx)(y, { itemsForLayout: n.slice(0, o) }),
            2 === o && (0, i.jsx)(E, { itemsForLayout: n.slice(0, o) }),
            0 === o
              ? (0, i.jsx)(T, { itemsForLayout: n })
              : (0, i.jsx)(T, { itemsForLayout: n.slice(o) }),
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
          return S;
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
        p = t(982330),
        C = t(124347),
        f = t(976853),
        j = t(587906),
        v = t(592125),
        y = t(626135),
        E = t(630388),
        M = t(956664),
        N = t(169525),
        T = t(499376),
        w = t(217702),
        O = t(981631),
        L = t(388032),
        A = t(166353),
        _ = t(985146);
      function S(e, n) {
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
      let V = (e) => {
        let n,
          t,
          o,
          a,
          {
            mimeType: u,
            downloadURL: d,
            onRemoveItem: c,
            onViewItem: I,
            showDownload: x,
            showImageAppPicker: g,
            isVisualMediaType: C,
            channelId: f,
          } = e;
        x &&
          (n = (0, i.jsx)(r.Tooltip, {
            text: L.intl.string(L.t["1WjMbG"]),
            children: (e) =>
              (0, i.jsx)(h.Z, {
                ...e,
                target: "_blank",
                rel: "noreferrer noopener",
                className: _.hoverButton,
                iconClassName: A.downloadHoverButtonIcon,
                focusProps: { offset: 2 },
                href: d,
                mimeType: u,
              }),
          })),
          null != c &&
            (t = (0, i.jsx)(r.Tooltip, {
              text: L.intl.string(L.t["/XT3io"]),
              children: (e) =>
                (0, i.jsx)(r.Clickable, {
                  ...e,
                  className: s()(_.hoverButton, A.removeMosaicItemHoverButton),
                  focusProps: { offset: 2 },
                  onClick: c,
                  "aria-label": L.intl.string(L.t["0+xZHx"]),
                  children: (0, i.jsx)(r.TrashIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                  }),
                }),
            }));
        let [v, y] = l.useState(!1),
          E = l.useCallback(() => y((e) => !e), []);
        g &&
          (o = (0, i.jsx)(m.Z, {
            toggleShowMenu: E,
            showMenu: v,
            channelId: f,
            className: s()(_.hoverButton, { [_.selected]: v }),
            imageUrl: d,
            mimeType: u,
          }));
        let { mediaViewerAffordanceEnabled: M } = (0, p.dP)(
          "MosaicItemHoverButtons",
        );
        return (M &&
          null != I &&
          (a = (0, i.jsx)(j.Z, { className: _.hoverButton, onClick: I })),
        null == t && null == n && null == o && null == a)
          ? null
          : (0, i.jsxs)("div", {
              className: s()(_.hoverButtonGroup, {
                [_.nonMediaMosaicItem]: !C,
                [_.forceShowHover]: v,
              }),
              children: [a, o, n, t],
            });
      };
      function P(e) {
        var n;
        let {
            message: t,
            item: o,
            autoPlayGif: m,
            canRemoveItem: c,
            onRemoveItem: h,
            onViewItem: I,
            onClick: x,
            onContextMenu: p,
            onPlay: j,
            renderImageComponent: N,
            renderVideoComponent: T,
            renderAudioComponent: _,
            renderPlaintextFilePreview: S,
            renderGenericFileComponent: P,
            renderVisualPlaceholderComponent: b,
            className: F,
            imgContainerClassName: H,
            imgClassName: k,
            focusable: D,
            hiddenSpoilers: B,
            mediaLayoutType: G,
            maxWidth: R,
            maxHeight: W,
            hasFooter: Z,
            useFullWidth: U,
            isVisualMediaType: X,
            onVideoControlsShow: q,
            onVideoControlsHide: z,
            isSearchResult: J,
          } = e,
          { width: Y, height: $, spoiler: K, type: Q, contentType: ee } = o,
          [en, et] = l.useState(!1),
          [ei, el] = l.useState(!1),
          eo = t.getChannelId(),
          es = v.Z.getChannel(eo),
          ea = (0, f.Z)(eo),
          er = d.P.useExperiment(
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
            "IMAGE" === Q &&
            !C.uo.test(o.downloadUrl) &&
            !(
              C.YG.test(o.downloadUrl) &&
              (0, E.yE)(
                null !== (n = ed.flags) && void 0 !== n ? n : 0,
                O.J0y.IS_ANIMATED,
              )
            ),
          ec = !1;
        if (X) {
          (null == Y || null == $) && (ec = !0);
          let e = (0, M.Dc)({
            width: null != Y ? Y : 0,
            height: null != $ ? $ : 0,
            maxWidth: w.mT,
            maxHeight: w.Jj,
          });
          !U &&
            (e * (null != Y ? Y : 0) < w.OF ||
              e * (null != $ ? $ : 0) < w.OF) &&
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
                    var n;
                    (0, u.a)({
                      channelId:
                        null !== (n = null == es ? void 0 : es.id) &&
                        void 0 !== n
                          ? n
                          : "",
                      location: a.I.CONTEXTUAL_IMAGE,
                      withCommands: !0,
                    });
                  }
                  y.default.track(O.rMx.IMAGE_HOVERED, {
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
            if (G === w.hV.MOSAIC) {
              let e =
                (!ea && ["VIDEO", "CLIP", "AUDIO"].includes(Q)) ||
                "OTHER" === Q;
              return ec
                ? null
                : !en &&
                    (0, i.jsx)(V, {
                      mimeType: eu,
                      downloadURL: o.downloadUrl,
                      showDownload: e,
                      showImageAppPicker: em && er && !0 !== J,
                      onRemoveItem: c ? eh : void 0,
                      onViewItem: I,
                      isVisualMediaType: X,
                      channelId: eo,
                    });
            }
            return (
              c &&
              (0, i.jsx)(r.Clickable, {
                className: K
                  ? A.spoilerRemoveMosaicItemButton
                  : A.removeMosaicItemButton,
                focusProps: { offset: { bottom: 4 } },
                onClick: () => h(o),
                "aria-label": L.intl.string(L.t["0+xZHx"]),
                children: (0, i.jsx)(r.XSmallIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
              })
            );
          }, [G, c, K, Q, X, en, o, eu, eh, h, I, er, ea, eo, em, ec, J]);
        switch (Q) {
          case "IMAGE":
            return (0, i.jsx)(g.h.Consumer, {
              children: (e) =>
                (0, i.jsx)(N, {
                  item: o,
                  message: t,
                  width: Y,
                  height: $,
                  autoPlay: m && !B,
                  onClick: x,
                  onContextMenu: p,
                  shouldHideMediaOptions: ea,
                  renderAccessory: e,
                  renderAdjacentContent: ex,
                  containerClassName: F,
                  className: H,
                  imageClassName: k,
                  shouldLink: D,
                  hiddenSpoilers: B,
                  responsive: !0,
                  mediaLayoutType: G,
                  maxWidth: R,
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
              message: t,
              width: Y,
              height: $,
              onClick: x,
              onContextMenu: p,
              renderAdjacentContent: ex,
              naturalWidth: Y,
              naturalHeight: $,
              className: s()(F, { [A.hasFooter]: Z }),
              playable: D,
              responsive: !0,
              mediaLayoutType: G,
              maxWidth: R,
              maxHeight: W,
              useFullWidth: U,
              mimeType: eu,
              onControlsShow: q,
              onControlsHide: z,
              downloadable: !ea,
              mediaPlayerClassName: Z ? A.hasFooter : void 0,
            });
          case "VISUAL_PLACEHOLDER":
            if (null == b) return null;
            return (0, i.jsx)(b, {
              item: o,
              message: t,
              className: H,
              imageClassName: k,
              maxWidth: R,
              maxHeight: W,
              mediaLayoutType: G,
              useFullWidth: U,
            });
          case "AUDIO":
            return (0, i.jsx)(_, {
              item: o,
              message: t,
              className: F,
              playable: D,
              mimeType: eu,
              renderAdjacentContent: ex,
              onVolumeShow: () => et(!0),
              onVolumeHide: () => et(!1),
              onPlay: j,
            });
          case "PLAINTEXT_PREVIEW":
            return (0, i.jsx)(S, {
              item: o,
              message: t,
              className: F,
              onClick: x,
              onContextMenu: p,
              renderAdjacentContent: ex,
            });
          case "OTHER":
            return (0, i.jsx)(P, {
              item: o,
              message: t,
              className: F,
              onClick: x,
              onContextMenu: p,
              renderAdjacentContent: ex,
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
          [v, y] = l.useState(null != j),
          E = d === w.hV.MOSAIC,
          O = !E && ((null != p && p < 200) || (null != C && C < 50));
        let L = "IMAGE" === (n = f) || "VIDEO" === n,
          _ = (0, T.R_)(f),
          S = m && null != j && (0, I.bR)(p, C),
          [V, b] = l.useState(!1),
          F = () => {
            b(!0);
          },
          H = () => {
            b(!1);
          },
          k = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(P, {
              ...g,
              item: o,
              message: a,
              getObscureReason: r,
              hiddenSpoilers: e,
              className: s()(t, A.mosaicItemContent, {
                [A.obscured]: v && !O,
                [A.hiddenSpoiler]: v && j === N.wk.SPOILER,
                [A.hiddenExplicit]:
                  v &&
                  null != j &&
                  [
                    N.wk.EXPLICIT_CONTENT,
                    N.wk.POTENTIAL_EXPLICIT_CONTENT,
                  ].includes(j),
                [A.hiddenMosaicItem]: v && e,
                [A.inline]: v && O,
              }),
              focusable: !e,
              mediaLayoutType: d,
              hasFooter: null != h,
              useFullWidth: !!S || u,
              isVisualMediaType: _,
              onVideoControlsShow: F,
              onVideoControlsHide: H,
            });
          };
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: s()(A.mosaicItem, {
              [A.mosaicItemNoJustify]: L,
              [A.mosaicItemFullWidth]: u,
              [A.mosaicItemMediaMosaic]: E,
              [A.hideOverflow]: E && _,
              [A.mosaicItemWithFooter]: null != h,
            }),
            children: [
              null != j
                ? (0, i.jsx)(c.Z, {
                    type: c.Z.Types.ATTACHMENT,
                    inline: O,
                    reason: j,
                    isSingleMosaicItem: m,
                    obscured: v,
                    containerStyles: (function (e, n, t) {
                      if (!n) return;
                      let i = e.width;
                      if (void 0 !== e.width && void 0 !== e.height) {
                        let { width: n } = (0, M.Tj)({
                          width: e.width,
                          height: e.height,
                          maxWidth: 400,
                          maxHeight: 300,
                        });
                        i = n;
                      }
                      return {
                        ...(t !== w.hV.MOSAIC && {
                          maxWidth: null != i ? i : "400px",
                        }),
                        width: "100%",
                        height: "100%",
                        justifySelf: "auto",
                      };
                    })(o, L, d),
                    obscurityControlClassName: s()({
                      [A.obscureVideoSpacing]: "VIDEO" === f && m && !v && V,
                    }),
                    onToggleObscurity: () => y((e) => !e),
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
//# sourceMappingURL=e9f8585249dcbe17777f.js.map
