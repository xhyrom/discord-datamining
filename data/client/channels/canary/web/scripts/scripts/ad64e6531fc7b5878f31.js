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
        c = t(546432),
        h = t(217702),
        I = t(159696);
      let x = Math.round((h.mT - 8) / 3),
        p = Math.round((h.mT - 4) / 2),
        g = Math.round((h.Jj - 4) / 2),
        C = Math.round((2 * (h.mT - 4)) / 3),
        f = C / 2;
      function j(e) {
        let { visualMediaItems: n, footer: t } = e;
        null != t &&
          r()(1 === n.length, "footer only gets applied to single items");
        let o = n.length;
        if (1 === o)
          return (0, i.jsx)(M, {
            itemsForLayout: n,
            isSingleImage: !0,
            footer: t,
          });
        if (2 === o) return (0, i.jsx)(T, { itemsForLayout: n });
        if (3 === o) return (0, i.jsx)(E, { itemsForLayout: n });
        if (4 === o) return (0, i.jsx)(v, { itemsForLayout: n });
        let l = o % 3;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            1 === l && (0, i.jsx)(M, { itemsForLayout: n.slice(0, l) }),
            2 === l && (0, i.jsx)(T, { itemsForLayout: n.slice(0, l) }),
            0 === l
              ? (0, i.jsx)(y, { itemsForLayout: n })
              : (0, i.jsx)(y, { itemsForLayout: n.slice(l) }),
          ],
        });
      }
      function M(e) {
        let { itemsForLayout: n, isSingleImage: t, footer: o } = e,
          l = n[0];
        return (0, i.jsx)("div", {
          className: s()(I.oneByOneGrid, {
            [I.oneByOneGridSingle]: t,
            [I.oneByOneGridMosaic]: !t,
            [I.hasFooter]: null != o,
          }),
          children: (0, i.jsx)(O, {
            props: l,
            useFullWidth: !t,
            isSingleItem: !0,
            footer: o,
          }),
        });
      }
      function T(e) {
        let { itemsForLayout: n } = e;
        return (0, i.jsx)("div", {
          className: I.oneByTwoGrid,
          children: n.map((e) =>
            (0, i.jsx)(
              "div",
              {
                className: I.oneByTwoGridItem,
                children: (0, i.jsx)(O, {
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
          className: s()(I.oneByTwoGrid, I.oneByTwoLayoutThreeGrid),
          children: [
            (0, i.jsx)("div", {
              className: I.oneByTwoSoloItem,
              children: (0, i.jsx)(O, { props: n[0], maxWidth: C }),
            }),
            (0, i.jsx)("div", {
              className: I.oneByTwoDuoItem,
              children: (0, i.jsx)("div", {
                className: I.twoByOneGrid,
                children: n
                  .splice(1)
                  .map((e) =>
                    (0, i.jsx)(
                      "div",
                      {
                        className: I.twoByOneGridItem,
                        children: (0, i.jsx)(O, {
                          props: e,
                          maxWidth: f,
                          maxHeight: g,
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
      function v(e) {
        let { itemsForLayout: n } = e;
        return (0, i.jsx)("div", {
          className: I.twoByTwoGrid,
          children: n.map((e) =>
            (0, i.jsx)(
              O,
              { props: e, maxWidth: p, maxHeight: g },
              e.item.uniqueId,
            ),
          ),
        });
      }
      function y(e) {
        let { itemsForLayout: n } = e;
        return (0, i.jsx)("div", {
          className: I.threeByThreeGrid,
          children: n.map((e) =>
            (0, i.jsx)(
              O,
              { props: e, maxWidth: x, maxHeight: x },
              e.item.uniqueId,
            ),
          ),
        });
      }
      let N = (e) => ({
          className: s()(e, I.itemContentContainer),
          imgContainerClassName: I.lazyImgContainer,
          imgClassName: I.lazyImg,
        }),
        w = (e) => ({ className: s()(e, I.lazyImg) });
      function O(e) {
        let {
            props: n,
            maxWidth: t = h.mT,
            maxHeight: o = h.Jj,
            useFullWidth: l = !0,
            isSingleItem: s = !1,
            footer: a,
          } = e,
          r = n.item.type,
          u = {
            ...n,
            ...("IMAGE" === r && N(n.className)),
            ...("VIDEO" === r && w(n.className)),
            mediaLayoutType: h.hV.MOSAIC,
            maxWidth: t,
            maxHeight: o,
            useFullWidth: l,
            isSingleMosaicItem: s,
          };
        return (0, i.jsx)(m.h.Provider, {
          value: n.gifFavoriteButton,
          children: (0, i.jsx)(c.ZP, { ...u, footer: a }),
        });
      }
      n.Z = function (e) {
        let { items: n, inlineForwardButton: t } = e,
          {
            groupableVisualMediaItems: l,
            nonGroupableVisualMediaItems: s,
            nonVisualMediaItems: a,
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
                    className: I.mosaicContainer,
                    children: [
                      (0, i.jsx)("div", {
                        className: I.visualMediaItemContainer,
                        children: (0, i.jsx)(j, { visualMediaItems: l }),
                      }),
                      t,
                    ],
                  })
                : (0, i.jsx)("div", {
                    className: I.visualMediaItemContainer,
                    children: (0, i.jsx)(j, { visualMediaItems: l }),
                  })),
            s.length > 0 &&
              s.map((e) => {
                let n = e.renderMosaicItemFooter({
                  item: e.item,
                  message: e.message,
                });
                return (0, i.jsx)(
                  "div",
                  {
                    className: I.visualMediaItemContainer,
                    children: (0, i.jsx)(j, {
                      visualMediaItems: [e],
                      footer: n,
                    }),
                  },
                  e.item.uniqueId,
                );
              }),
            a.length > 0 &&
              (0, i.jsx)("div", {
                className: I.nonVisualMediaItemContainer,
                children: a.map((e) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className: I.nonVisualMediaItem,
                      children: (0, i.jsx)(O, { props: e }),
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
        Ld: function () {
          return V;
        },
        OB: function () {
          return P;
        },
        R_: function () {
          return S;
        },
        aw: function () {
          return b;
        },
        pU: function () {
          return F;
        },
      }),
        t(789020),
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
        p = t(947849),
        g = t(124347),
        C = t(976853),
        f = t(592125),
        j = t(626135),
        M = t(630388),
        T = t(956664),
        E = t(406432),
        v = t(169525),
        y = t(65838),
        N = t(217702),
        w = t(981631),
        O = t(689938),
        A = t(670347),
        _ = t(458857);
      let L = /\.(mp3|m4a|ogg|wav|flac)$/i,
        S = (e) => "IMAGE" === e || "VIDEO" === e || "CLIP" === e,
        V = (e) => "IMAGE" === e || "VIDEO" === e;
      function P(e, n) {
        return {
          uniqueId: e.id,
          originalItem: e,
          type: b(e, n),
          downloadUrl: e.url,
          height: e.height,
          width: e.width,
          spoiler: e.spoiler,
          contentType: e.content_type,
        };
      }
      function b(e, n) {
        let { filename: t, width: i, height: o } = e;
        if (n && null != i && i > 0 && null != o && o > 0) {
          if ((0, E.CO)(t)) return "IMAGE";
          if (!(0, E.NU)(t) || null == e.proxy_url) return "INVALID";
          else {
            var l;
            return (0, M.yE)(
              null !== (l = e.flags) && void 0 !== l ? l : 0,
              w.J0y.IS_CLIP,
            )
              ? "CLIP"
              : "VIDEO";
          }
        }
        if (null != n && L.test(t) && null != e.url) return "AUDIO";
        if (null != e.url && (0, y.O)(t)) return "PLAINTEXT_PREVIEW";
        return "OTHER";
      }
      function F(e, n) {
        let { contentType: t, width: i, height: o } = e;
        if (n && i > 0 && o > 0)
          return (0, E.tw)(t) ? "IMAGE" : (0, E.X2)(t) ? "VIDEO" : "INVALID";
        return "OTHER";
      }
      let k = (e) => {
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
            channelId: p,
          } = e;
        c &&
          (n = (0, i.jsx)(r.Tooltip, {
            text: O.Z.Messages.DOWNLOAD,
            children: (e) =>
              (0, i.jsx)(h.Z, {
                ...e,
                target: "_blank",
                rel: "noreferrer noopener",
                className: _.hoverButton,
                iconClassName: A.downloadHoverButtonIcon,
                focusProps: { offset: 2 },
                href: u,
                mimeType: a,
              }),
          })),
          null != d &&
            (t = (0, i.jsx)(r.Tooltip, {
              text: O.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
              children: (e) =>
                (0, i.jsx)(r.Clickable, {
                  ...e,
                  className: s()(_.hoverButton, A.removeMosaicItemHoverButton),
                  focusProps: { offset: 2 },
                  onClick: d,
                  "aria-label": O.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
                  children: (0, i.jsx)(r.TrashIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                  }),
                }),
            }));
        let [g, C] = o.useState(!1),
          f = o.useCallback(() => C((e) => !e), []);
        return (I &&
          (l = (0, i.jsx)(m.Z, {
            toggleShowMenu: f,
            showMenu: g,
            channelId: p,
            className: s()(_.hoverButton, { [_.selected]: g }),
            imageUrl: u,
            mimeType: a,
          })),
        null == t && null == n && null == l)
          ? null
          : (0, i.jsxs)("div", {
              className: s()(_.hoverButtonGroup, {
                [_.nonMediaMosaicItem]: !x,
                [_.forceShowHover]: g,
              }),
              children: [l, n, t],
            });
      };
      function H(e) {
        let {
            message: n,
            item: t,
            autoPlayGif: l,
            canRemoveItem: m,
            onRemoveItem: c,
            onClick: h,
            onContextMenu: I,
            onPlay: x,
            renderImageComponent: M,
            renderVideoComponent: E,
            renderAudioComponent: v,
            renderPlaintextFilePreview: y,
            renderGenericFileComponent: _,
            className: L,
            imgContainerClassName: S,
            imgClassName: V,
            focusable: P,
            hiddenSpoilers: b,
            mediaLayoutType: F,
            maxWidth: H,
            maxHeight: D,
            hasFooter: G,
            useFullWidth: B,
            isVisualMediaType: R,
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
          es = "IMAGE" === J && !g.u.test(t.downloadUrl),
          ea = !1;
        if (R) {
          (null == X || null == q) && (ea = !0);
          let e = (0, T.Dc)({
            width: null != X ? X : 0,
            height: null != q ? q : 0,
            maxWidth: N.mT,
            maxHeight: N.Jj,
          });
          !B &&
            (e * (null != X ? X : 0) < N.OF ||
              e * (null != q ? q : 0) < N.OF) &&
            (ea = !0);
        }
        let er = o.useCallback(() => {
            c(t);
          }, [t, c]),
          eu = o.useCallback(
            (e) => {
              if (es && !ea && !0 !== U) {
                if (e && !Y) {
                  var n;
                  ee(!0),
                    (0, u.a)({
                      channelId:
                        null !== (n = null == et ? void 0 : et.id) &&
                        void 0 !== n
                          ? n
                          : "",
                      location: a.I.CONTEXTUAL_IMAGE,
                      withCommands: !0,
                    }),
                    j.default.track(w.rMx.IMAGE_HOVERED, {
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
            if (F === N.hV.MOSAIC) {
              let e =
                (!ei && ["VIDEO", "CLIP", "AUDIO"].includes(J)) ||
                "OTHER" === J;
              return ea
                ? null
                : !K &&
                    (0, i.jsx)(k, {
                      mimeType: el,
                      downloadURL: t.downloadUrl,
                      showDownload: e,
                      showImageAppPicker: es && eo && !0 !== U,
                      onRemoveItem: m ? er : void 0,
                      isVisualMediaType: R,
                      channelId: en,
                    });
            }
            return (
              m &&
              (0, i.jsx)(r.Clickable, {
                className: z
                  ? A.spoilerRemoveMosaicItemButton
                  : A.removeMosaicItemButton,
                focusProps: { offset: { bottom: 4 } },
                onClick: () => c(t),
                "aria-label": O.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
                children: (0, i.jsx)(r.XSmallIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
              })
            );
          }, [F, m, z, J, R, K, t, el, er, c, eo, ei, en, es, ea, U]);
        switch (J) {
          case "IMAGE":
            return (0, i.jsx)(p.h.Consumer, {
              children: (e) =>
                (0, i.jsx)(M, {
                  item: t,
                  message: n,
                  width: X,
                  height: q,
                  autoPlay: l && !b,
                  onClick: h,
                  onContextMenu: I,
                  shouldHideMediaOptions: ei,
                  renderAccessory: e,
                  renderAdjacentContent: ed,
                  containerClassName: L,
                  className: S,
                  imageClassName: V,
                  shouldLink: P,
                  hiddenSpoilers: b,
                  responsive: !0,
                  mediaLayoutType: F,
                  maxWidth: H,
                  maxHeight: D,
                  useFullWidth: B,
                  onMouseEnter: () => eu(!0),
                  onMouseLeave: () => eu(!1),
                }),
            });
          case "VIDEO":
          case "CLIP":
            return (0, i.jsx)(E, {
              item: t,
              message: n,
              width: X,
              height: q,
              onClick: h,
              onContextMenu: I,
              renderAdjacentContent: ed,
              naturalWidth: X,
              naturalHeight: q,
              className: s()(L, { [A.hasFooter]: G }),
              playable: P,
              responsive: !0,
              mediaLayoutType: F,
              maxWidth: H,
              maxHeight: D,
              useFullWidth: B,
              mimeType: el,
              onControlsShow: W,
              onControlsHide: Z,
              downloadable: !ei,
              mediaPlayerClassName: G ? A.hasFooter : void 0,
            });
          case "AUDIO":
            return (0, i.jsx)(v, {
              item: t,
              message: n,
              className: L,
              playable: P,
              mimeType: el,
              renderAdjacentContent: ed,
              onVolumeShow: () => Q(!0),
              onVolumeHide: () => Q(!1),
              onPlay: x,
            });
          case "PLAINTEXT_PREVIEW":
            return (0, i.jsx)(y, {
              item: t,
              message: n,
              className: L,
              onClick: h,
              onContextMenu: I,
              renderAdjacentContent: ed,
            });
          case "OTHER":
            return (0, i.jsx)(_, {
              item: t,
              message: n,
              className: L,
              onClick: h,
              onContextMenu: I,
              renderAdjacentContent: ed,
            });
          case "INVALID":
            return null;
        }
      }
      n.ZP = function (e) {
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
            ...p
          } = e,
          { width: g, height: C, type: f } = l,
          j = r(l, (0, x.V)(a.channel_id, a.author.id)),
          [M, E] = o.useState(null != j),
          y = d === N.hV.MOSAIC,
          w = !y && ((null != g && g < 200) || (null != C && C < 50));
        let O = "IMAGE" === (n = f) || "VIDEO" === n,
          _ = S(f),
          L = m && null != j && (0, I.bR)(g, C),
          [V, P] = o.useState(!1),
          b = () => {
            P(!0);
          },
          F = () => {
            P(!1);
          },
          k = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(H, {
              ...p,
              item: l,
              message: a,
              getObscureReason: r,
              hiddenSpoilers: e,
              className: s()(t, A.mosaicItemContent, {
                [A.obscured]: M && !w,
                [A.hiddenSpoiler]: M && j === v.wk.SPOILER,
                [A.hiddenExplicit]:
                  M &&
                  null != j &&
                  [
                    v.wk.EXPLICIT_CONTENT,
                    v.wk.POTENTIAL_EXPLICIT_CONTENT,
                  ].includes(j),
                [A.hiddenMosaicItem]: M && e,
                [A.inline]: M && w,
              }),
              focusable: !e,
              mediaLayoutType: d,
              hasFooter: null != h,
              useFullWidth: !!L || u,
              isVisualMediaType: _,
              onVideoControlsShow: b,
              onVideoControlsHide: F,
            });
          };
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: s()(A.mosaicItem, {
              [A.mosaicItemNoJustify]: O,
              [A.mosaicItemFullWidth]: u,
              [A.mosaicItemMediaMosaic]: y,
              [A.hideOverflow]: y && _,
              [A.mosaicItemWithFooter]: null != h,
            }),
            children: [
              null != j
                ? (0, i.jsx)(c.Z, {
                    type: c.Z.Types.ATTACHMENT,
                    inline: w,
                    reason: j,
                    isSingleMosaicItem: m,
                    obscured: M,
                    containerStyles: (function (e, n, t) {
                      if (!n) return;
                      let i = e.width;
                      if (void 0 !== e.width && void 0 !== e.height) {
                        let { width: n } = (0, T.Tj)({
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
                    })(l, O, d),
                    obscurityControlClassName: s()({
                      [A.obscureVideoSpacing]: "VIDEO" === f && m && !M && V,
                    }),
                    onToggleObscurity: () => E((e) => !e),
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
//# sourceMappingURL=ad64e6531fc7b5878f31.js.map
