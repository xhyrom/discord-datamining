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
      let a = /\.(mp3|m4a|ogg|wav|flac)$/i,
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
        j = f / 2;
      function M(e) {
        let { visualMediaItems: n, footer: t } = e;
        null != t &&
          r()(1 === n.length, "footer only gets applied to single items");
        let o = n.length;
        if (1 === o)
          return (0, i.jsx)(T, {
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
            1 === l && (0, i.jsx)(T, { itemsForLayout: n.slice(0, l) }),
            2 === l && (0, i.jsx)(v, { itemsForLayout: n.slice(0, l) }),
            0 === l
              ? (0, i.jsx)(N, { itemsForLayout: n })
              : (0, i.jsx)(N, { itemsForLayout: n.slice(l) }),
          ],
        });
      }
      function T(e) {
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
                        children: (0, i.jsx)(M, { visualMediaItems: l }),
                      }),
                      t,
                    ],
                  })
                : (0, i.jsx)("div", {
                    className: x.visualMediaItemContainer,
                    children: (0, i.jsx)(M, { visualMediaItems: l }),
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
                    children: (0, i.jsx)(M, {
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
          return A;
        },
      }),
        t(47120);
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
        j = t(626135),
        M = t(956664),
        T = t(169525),
        v = t(499376),
        E = t(217702),
        y = t(981631),
        N = t(689938),
        w = t(526675),
        O = t(275703);
      function A(e, n) {
        return {
          uniqueId: e.id,
          originalItem: e,
          type: (0, v.aw)(e, n),
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
            text: N.Z.Messages.DOWNLOAD,
            children: (e) =>
              (0, i.jsx)(h.Z, {
                ...e,
                target: "_blank",
                rel: "noreferrer noopener",
                className: O.hoverButton,
                iconClassName: w.downloadHoverButtonIcon,
                focusProps: { offset: 2 },
                href: u,
                mimeType: a,
              }),
          })),
          null != d &&
            (t = (0, i.jsx)(r.Tooltip, {
              text: N.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
              children: (e) =>
                (0, i.jsx)(r.Clickable, {
                  ...e,
                  className: s()(O.hoverButton, w.removeMosaicItemHoverButton),
                  focusProps: { offset: 2 },
                  onClick: d,
                  "aria-label": N.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
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
            className: s()(O.hoverButton, { [O.selected]: p }),
            imageUrl: u,
            mimeType: a,
          })),
        null == t && null == n && null == l)
          ? null
          : (0, i.jsxs)("div", {
              className: s()(O.hoverButtonGroup, {
                [O.nonMediaMosaicItem]: !x,
                [O.forceShowHover]: p,
              }),
              children: [l, n, t],
            });
      };
      function L(e) {
        let {
            message: n,
            item: t,
            autoPlayGif: l,
            canRemoveItem: m,
            onRemoveItem: c,
            onClick: h,
            onContextMenu: I,
            onPlay: x,
            renderImageComponent: T,
            renderVideoComponent: v,
            renderAudioComponent: O,
            renderPlaintextFilePreview: A,
            renderGenericFileComponent: L,
            className: S,
            imgContainerClassName: V,
            imgClassName: b,
            focusable: F,
            hiddenSpoilers: P,
            mediaLayoutType: k,
            maxWidth: H,
            maxHeight: D,
            hasFooter: G,
            useFullWidth: R,
            isVisualMediaType: B,
            onVideoControlsShow: W,
            onVideoControlsHide: Z,
            isSearchResult: U,
          } = e,
          { width: X, height: q, spoiler: z, type: J, contentType: $ } = t,
          [K, Q] = o.useState(!1),
          [Y, ee] = o.useState(!1),
          en = n.getChannelId(),
          et = f.Z.getChannel(en),
          ei = (0, C.Z)(en),
          eo = d.P.useExperiment(
            { location: "MediaMosaicItem" },
            { autoTrackExposure: !0 },
          ).imageRecsEnabled,
          el = o.useMemo(
            () =>
              null != $ && -1 !== $.indexOf("/")
                ? $.split("/")
                : ["unknown", "unknown"],
            [$],
          ),
          es = "IMAGE" === J && !p.u.test(t.downloadUrl),
          ea = !1;
        if (B) {
          (null == X || null == q) && (ea = !0);
          let e = (0, M.Dc)({
            width: null != X ? X : 0,
            height: null != q ? q : 0,
            maxWidth: E.mT,
            maxHeight: E.Jj,
          });
          !R &&
            (e * (null != X ? X : 0) < E.OF ||
              e * (null != q ? q : 0) < E.OF) &&
            (ea = !0);
        }
        let er = o.useCallback(() => {
            c(t);
          }, [t, c]),
          eu = o.useCallback(
            (e) => {
              if (es && !ea && !0 !== U) {
                if (e && !Y) {
                  if ((ee(!0), eo)) {
                    var n;
                    (0, u.a)({
                      channelId:
                        null !== (n = null == et ? void 0 : et.id) &&
                        void 0 !== n
                          ? n
                          : "",
                      location: a.I.CONTEXTUAL_IMAGE,
                      withCommands: !0,
                    });
                  }
                  j.default.track(y.rMx.IMAGE_HOVERED, {
                    guild_id: null == et ? void 0 : et.guild_id,
                    channel_id: null == et ? void 0 : et.id,
                    image_recommendations_shown: eo,
                  });
                } else !e && Y && ee(!1);
              }
            },
            [Y, et, eo, es, ea, U],
          ),
          ed = o.useCallback(() => {
            if (k === E.hV.MOSAIC) {
              let e =
                (!ei && ["VIDEO", "CLIP", "AUDIO"].includes(J)) ||
                "OTHER" === J;
              return ea
                ? null
                : !K &&
                    (0, i.jsx)(_, {
                      mimeType: el,
                      downloadURL: t.downloadUrl,
                      showDownload: e,
                      showImageAppPicker: es && eo && !0 !== U,
                      onRemoveItem: m ? er : void 0,
                      isVisualMediaType: B,
                      channelId: en,
                    });
            }
            return (
              m &&
              (0, i.jsx)(r.Clickable, {
                className: z
                  ? w.spoilerRemoveMosaicItemButton
                  : w.removeMosaicItemButton,
                focusProps: { offset: { bottom: 4 } },
                onClick: () => c(t),
                "aria-label": N.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
                children: (0, i.jsx)(r.XSmallIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
              })
            );
          }, [k, m, z, J, B, K, t, el, er, c, eo, ei, en, es, ea, U]);
        switch (J) {
          case "IMAGE":
            return (0, i.jsx)(g.h.Consumer, {
              children: (e) =>
                (0, i.jsx)(T, {
                  item: t,
                  message: n,
                  width: X,
                  height: q,
                  autoPlay: l && !P,
                  onClick: h,
                  onContextMenu: I,
                  shouldHideMediaOptions: ei,
                  renderAccessory: e,
                  renderAdjacentContent: ed,
                  containerClassName: S,
                  className: V,
                  imageClassName: b,
                  shouldLink: F,
                  hiddenSpoilers: P,
                  responsive: !0,
                  mediaLayoutType: k,
                  maxWidth: H,
                  maxHeight: D,
                  useFullWidth: R,
                  onMouseEnter: () => eu(!0),
                  onMouseLeave: () => eu(!1),
                }),
            });
          case "VIDEO":
          case "CLIP":
            return (0, i.jsx)(v, {
              item: t,
              message: n,
              width: X,
              height: q,
              onClick: h,
              onContextMenu: I,
              renderAdjacentContent: ed,
              naturalWidth: X,
              naturalHeight: q,
              className: s()(S, { [w.hasFooter]: G }),
              playable: F,
              responsive: !0,
              mediaLayoutType: k,
              maxWidth: H,
              maxHeight: D,
              useFullWidth: R,
              mimeType: el,
              onControlsShow: W,
              onControlsHide: Z,
              downloadable: !ei,
              mediaPlayerClassName: G ? w.hasFooter : void 0,
            });
          case "AUDIO":
            return (0, i.jsx)(O, {
              item: t,
              message: n,
              className: S,
              playable: F,
              mimeType: el,
              renderAdjacentContent: ed,
              onVolumeShow: () => Q(!0),
              onVolumeHide: () => Q(!1),
              onPlay: x,
            });
          case "PLAINTEXT_PREVIEW":
            return (0, i.jsx)(A, {
              item: t,
              message: n,
              className: S,
              onClick: h,
              onContextMenu: I,
              renderAdjacentContent: ed,
            });
          case "OTHER":
            return (0, i.jsx)(L, {
              item: t,
              message: n,
              className: S,
              onClick: h,
              onContextMenu: I,
              renderAdjacentContent: ed,
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
          j = r(l, (0, x.V)(a.channel_id, a.author.id)),
          [y, N] = o.useState(null != j),
          O = d === E.hV.MOSAIC,
          A = !O && ((null != p && p < 200) || (null != C && C < 50));
        let _ = "IMAGE" === (n = f) || "VIDEO" === n,
          S = (0, v.R_)(f),
          V = m && null != j && (0, I.bR)(p, C),
          [b, F] = o.useState(!1),
          P = () => {
            F(!0);
          },
          k = () => {
            F(!1);
          },
          H = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(L, {
              ...g,
              item: l,
              message: a,
              getObscureReason: r,
              hiddenSpoilers: e,
              className: s()(t, w.mosaicItemContent, {
                [w.obscured]: y && !A,
                [w.hiddenSpoiler]: y && j === T.wk.SPOILER,
                [w.hiddenExplicit]:
                  y &&
                  null != j &&
                  [
                    T.wk.EXPLICIT_CONTENT,
                    T.wk.POTENTIAL_EXPLICIT_CONTENT,
                  ].includes(j),
                [w.hiddenMosaicItem]: y && e,
                [w.inline]: y && A,
              }),
              focusable: !e,
              mediaLayoutType: d,
              hasFooter: null != h,
              useFullWidth: !!V || u,
              isVisualMediaType: S,
              onVideoControlsShow: P,
              onVideoControlsHide: k,
            });
          };
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: s()(w.mosaicItem, {
              [w.mosaicItemNoJustify]: _,
              [w.mosaicItemFullWidth]: u,
              [w.mosaicItemMediaMosaic]: O,
              [w.hideOverflow]: O && S,
              [w.mosaicItemWithFooter]: null != h,
            }),
            children: [
              null != j
                ? (0, i.jsx)(c.Z, {
                    type: c.Z.Types.ATTACHMENT,
                    inline: A,
                    reason: j,
                    isSingleMosaicItem: m,
                    obscured: y,
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
                        ...(t !== E.hV.MOSAIC && {
                          maxWidth: null != i ? i : "400px",
                        }),
                        width: "100%",
                        height: "100%",
                        justifySelf: "auto",
                      };
                    })(l, _, d),
                    obscurityControlClassName: s()({
                      [w.obscureVideoSpacing]: "VIDEO" === f && m && !y && b,
                    }),
                    onToggleObscurity: () => N((e) => !e),
                    children: (e) => H(e),
                  })
                : H(),
              h,
            ],
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=0ca7ebff3102e7543dc3.js.map
