"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46097"],
  {
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
        if (3 === o) return (0, i.jsx)(v, { itemsForLayout: n });
        if (4 === o) return (0, i.jsx)(y, { itemsForLayout: n });
        let l = o % 3;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            1 === l && (0, i.jsx)(M, { itemsForLayout: n.slice(0, l) }),
            2 === l && (0, i.jsx)(T, { itemsForLayout: n.slice(0, l) }),
            0 === l
              ? (0, i.jsx)(E, { itemsForLayout: n })
              : (0, i.jsx)(E, { itemsForLayout: n.slice(l) }),
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
          children: (0, i.jsx)(w, {
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
                children: (0, i.jsx)(w, {
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
      function v(e) {
        let { itemsForLayout: n } = e;
        return (0, i.jsxs)("div", {
          className: s()(I.oneByTwoGrid, I.oneByTwoLayoutThreeGrid),
          children: [
            (0, i.jsx)("div", {
              className: I.oneByTwoSoloItem,
              children: (0, i.jsx)(w, { props: n[0], maxWidth: C }),
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
                        children: (0, i.jsx)(w, {
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
      function y(e) {
        let { itemsForLayout: n } = e;
        return (0, i.jsx)("div", {
          className: I.twoByTwoGrid,
          children: n.map((e) =>
            (0, i.jsx)(
              w,
              { props: e, maxWidth: p, maxHeight: g },
              e.item.uniqueId,
            ),
          ),
        });
      }
      function E(e) {
        let { itemsForLayout: n } = e;
        return (0, i.jsx)("div", {
          className: I.threeByThreeGrid,
          children: n.map((e) =>
            (0, i.jsx)(
              w,
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
        O = (e) => ({ className: s()(e, I.lazyImg) });
      function w(e) {
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
            ...("VIDEO" === r && O(n.className)),
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
                      children: (0, i.jsx)(w, { props: e }),
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
          return _;
        },
        OB: function () {
          return F;
        },
        R_: function () {
          return V;
        },
        aw: function () {
          return P;
        },
        pU: function () {
          return k;
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
        v = t(406432),
        y = t(169525),
        E = t(65838),
        N = t(217702),
        O = t(981631),
        w = t(689938),
        A = t(670347),
        L = t(458857);
      let S = /\.(mp3|m4a|ogg|wav|flac)$/i,
        V = (e) => "IMAGE" === e || "VIDEO" === e || "CLIP" === e,
        _ = (e) => "IMAGE" === e || "VIDEO" === e;
      function F(e, n) {
        return {
          uniqueId: e.id,
          originalItem: e,
          type: P(e, n),
          downloadUrl: e.url,
          height: e.height,
          width: e.width,
          spoiler: e.spoiler,
          contentType: e.content_type,
        };
      }
      function P(e, n) {
        let { filename: t, width: i, height: o } = e;
        if (n && null != i && i > 0 && null != o && o > 0) {
          if ((0, v.CO)(t)) return "IMAGE";
          if (!(0, v.NU)(t) || null == e.proxy_url) return "INVALID";
          else {
            var l;
            return (0, M.yE)(
              null !== (l = e.flags) && void 0 !== l ? l : 0,
              O.J0y.IS_CLIP,
            )
              ? "CLIP"
              : "VIDEO";
          }
        }
        if (null != n && S.test(t) && null != e.url) return "AUDIO";
        if (null != e.url && (0, E.O)(t)) return "PLAINTEXT_PREVIEW";
        return "OTHER";
      }
      function k(e, n) {
        let { contentType: t, width: i, height: o } = e;
        if (n && i > 0 && o > 0)
          return (0, v.tw)(t) ? "IMAGE" : (0, v.X2)(t) ? "VIDEO" : "INVALID";
        return "OTHER";
      }
      let H = (e) => {
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
            text: w.Z.Messages.DOWNLOAD,
            children: (e) =>
              (0, i.jsx)(h.Z, {
                ...e,
                target: "_blank",
                rel: "noreferrer noopener",
                className: L.hoverButton,
                iconClassName: A.downloadHoverButtonIcon,
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
                  className: s()(L.hoverButton, A.removeMosaicItemHoverButton),
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
        let [g, C] = o.useState(!1),
          f = o.useCallback(() => C((e) => !e), []);
        return (I &&
          (l = (0, i.jsx)(m.Z, {
            toggleShowMenu: f,
            showMenu: g,
            channelId: p,
            className: s()(L.hoverButton, { [L.selected]: g }),
            imageUrl: u,
            mimeType: a,
          })),
        null == t && null == n && null == l)
          ? null
          : (0, i.jsxs)("div", {
              className: s()(L.hoverButtonGroup, {
                [L.nonMediaMosaicItem]: !x,
                [L.forceShowHover]: g,
              }),
              children: [l, n, t],
            });
      };
      function D(e) {
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
            renderVideoComponent: v,
            renderAudioComponent: y,
            renderPlaintextFilePreview: E,
            renderGenericFileComponent: L,
            className: S,
            imgContainerClassName: V,
            imgClassName: _,
            focusable: F,
            hiddenSpoilers: P,
            mediaLayoutType: k,
            maxWidth: D,
            maxHeight: G,
            hasFooter: b,
            useFullWidth: B,
            isVisualMediaType: W,
            onVideoControlsShow: R,
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
        if (W) {
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
                    j.default.track(O.rMx.IMAGE_HOVERED, {
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
            if (k === N.hV.MOSAIC) {
              let e =
                (!ei && ["VIDEO", "CLIP", "AUDIO"].includes(J)) ||
                "OTHER" === J;
              return ea
                ? null
                : !K &&
                    (0, i.jsx)(H, {
                      mimeType: el,
                      downloadURL: t.downloadUrl,
                      showDownload: e,
                      showImageAppPicker: es && eo && !0 !== U,
                      onRemoveItem: m ? er : void 0,
                      isVisualMediaType: W,
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
                "aria-label": w.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
                children: (0, i.jsx)(r.XSmallIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
              })
            );
          }, [k, m, z, J, W, K, t, el, er, c, eo, ei, en, es, ea, U]);
        switch (J) {
          case "IMAGE":
            return (0, i.jsx)(p.h.Consumer, {
              children: (e) =>
                (0, i.jsx)(M, {
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
                  imageClassName: _,
                  shouldLink: F,
                  hiddenSpoilers: P,
                  responsive: !0,
                  mediaLayoutType: k,
                  maxWidth: D,
                  maxHeight: G,
                  useFullWidth: B,
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
              className: s()(S, { [A.hasFooter]: b }),
              playable: F,
              responsive: !0,
              mediaLayoutType: k,
              maxWidth: D,
              maxHeight: G,
              useFullWidth: B,
              mimeType: el,
              onControlsShow: R,
              onControlsHide: Z,
              downloadable: !ei,
              mediaPlayerClassName: b ? A.hasFooter : void 0,
            });
          case "AUDIO":
            return (0, i.jsx)(y, {
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
            return (0, i.jsx)(E, {
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
          [M, v] = o.useState(null != j),
          E = d === N.hV.MOSAIC,
          O = !E && ((null != g && g < 200) || (null != C && C < 50));
        let w = "IMAGE" === (n = f) || "VIDEO" === n,
          L = V(f),
          S = m && null != j && (0, I.bR)(g, C),
          [_, F] = o.useState(!1),
          P = () => {
            F(!0);
          },
          k = () => {
            F(!1);
          },
          H = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(D, {
              ...p,
              item: l,
              message: a,
              getObscureReason: r,
              hiddenSpoilers: e,
              className: s()(t, A.mosaicItemContent, {
                [A.obscured]: M && !O,
                [A.hiddenSpoiler]: M && j === y.wk.SPOILER,
                [A.hiddenExplicit]:
                  M &&
                  null != j &&
                  [
                    y.wk.EXPLICIT_CONTENT,
                    y.wk.POTENTIAL_EXPLICIT_CONTENT,
                  ].includes(j),
                [A.hiddenMosaicItem]: M && e,
                [A.inline]: M && O,
              }),
              focusable: !e,
              mediaLayoutType: d,
              hasFooter: null != h,
              useFullWidth: !!S || u,
              isVisualMediaType: L,
              onVideoControlsShow: P,
              onVideoControlsHide: k,
            });
          };
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: s()(A.mosaicItem, {
              [A.mosaicItemNoJustify]: w,
              [A.mosaicItemFullWidth]: u,
              [A.mosaicItemMediaMosaic]: E,
              [A.hideOverflow]: E && L,
              [A.mosaicItemWithFooter]: null != h,
            }),
            children: [
              null != j
                ? (0, i.jsx)(c.Z, {
                    type: c.Z.Types.ATTACHMENT,
                    inline: O,
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
                    })(l, w, d),
                    obscurityControlClassName: s()({
                      [A.obscureVideoSpacing]: "VIDEO" === f && m && !M && _,
                    }),
                    onToggleObscurity: () => v((e) => !e),
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
//# sourceMappingURL=1d2780990e69b82da0d8.js.map
