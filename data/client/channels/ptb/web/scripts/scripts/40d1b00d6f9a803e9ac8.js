"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21628"],
  {
    446411: function (e, t, l) {
      l.d(t, {
        BC: function () {
          return O;
        },
        ZP: function () {
          return G;
        },
      }),
        l(47120),
        l(653041);
      var n,
        i = l(200651),
        r = l(192379),
        a = l(120356),
        s = l.n(a),
        o = l(892814),
        d = l(481060),
        u = l(399654),
        m = l(370298),
        h = l(95398),
        c = l(947849),
        p = l(768494),
        b = l(624195),
        g = l(44824),
        v = l(124347),
        f = l(283756),
        x = l(169525),
        I = l(94396),
        _ = l(785992),
        y = l(400266),
        w = l(592125),
        C = l(52824),
        S = l(626135),
        E = l(585483),
        T = l(55935),
        M = l(408433),
        N = l(956664),
        A = l(468846),
        j = l(401419),
        H = l(249458),
        k = l(981631),
        F = l(217702),
        L = l(388032),
        V = l(340702),
        B = l(740909),
        R = l(665162),
        P = l(803205);
      function W(e, t, l) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = l),
          e
        );
      }
      function O(e) {
        var t, l;
        let {
            className: n,
            iframeWrapperClassName: a,
            maxWidth: o,
            maxHeight: d,
            thumbnail: u,
            video: m,
            provider: h,
            allowFullScreen: c = !0,
            responsive: p = !1,
            renderImageComponent: b,
            renderVideoComponent: g,
            renderLinkComponent: v,
            playable: x = !0,
            autoPlay: I = !1,
            autoMute: _,
            volume: y,
            onPlay: w,
            onPause: S,
            onEnded: T,
            onControlsHide: M,
            onControlsShow: j,
            onVolumeChange: H,
            onMute: F,
            href: L,
            placeholder: B,
            placeholderVersion: R,
            sourceMetadata: P,
          } = e,
          [W, O] = r.useState(I),
          D = null != m && null == m.proxyURL,
          G = r.useCallback(() => O(!1), [O]),
          U = (e) => {
            e.preventDefault(),
              e.stopPropagation(),
              null == w || w(!1),
              O(!0),
              D &&
                (E.S.dispatch(k.CkL.VIDEO_EMBED_PLAYBACK_STARTED),
                E.S.subscribeOnce(k.CkL.VIDEO_EMBED_PLAYBACK_STARTED, G));
          };
        r.useEffect(
          () => () => {
            D && E.S.unsubscribe(k.CkL.VIDEO_EMBED_PLAYBACK_STARTED, G);
          },
          [D, G],
        );
        let { width: Z, height: z } = u;
        null != m && ((Z = m.width), (z = m.height));
        let X = (0, N.Tj)({ width: Z, height: z, maxWidth: o, maxHeight: d });
        (Z = Math.max(X.width, 150)), (z = Math.max(X.height, 144));
        let Y = (0, C.q)(u);
        if (null != m && null != m.proxyURL)
          return (0, i.jsx)("div", {
            className: s()(V.embedVideo, n),
            children: g({
              poster: Y,
              src: m.proxyURL,
              placeholder: B,
              placeholderVersion: R,
              width: Z,
              height: z,
              responsive: p,
              autoPlay: I,
              onEnded: T,
              naturalWidth: m.width,
              naturalHeight: m.height,
              onVolumeChange: H,
              playable: x,
              autoMute: _,
              volume: y,
              onPlay: w,
              onPause: S,
              onMute: F,
              onControlsHide: M,
              onControlsShow: j,
              sourceMetadata: P,
            }),
          });
        if (W && null != m) {
          let e;
          let t = !0 === _ || ("function" == typeof _ && _()),
            l = { width: Z, height: z },
            r = { width: Z, height: z };
          if (p) {
            let t = 0 !== Z ? z / Z : 1;
            (l = { maxWidth: o, maxHeight: d, width: void 0, height: void 0 }),
              (r = { paddingBottom: "".concat(100 * t, "%"), maxWidth: Z }),
              (e = {
                position: "absolute",
                top: 0,
                left: 0,
                maxWidth: Z,
                maxHeight: z,
              });
          }
          return (0, i.jsx)("div", {
            className: n,
            style: l,
            children: (0, i.jsx)("div", {
              className: s()(V.embedVideo, a),
              style: r,
              children: (0, i.jsx)(A.ZP, {
                provider: h,
                src: m.url,
                style: e,
                width: Z,
                height: z,
                allowFullScreen: c,
                autoMute: t,
              }),
            }),
          });
        }
        return (0, i.jsxs)("div", {
          className: s()(V.embedVideo, n),
          style: p ? { maxWidth: Z } : { width: Z, height: z },
          children: [
            b({
              src: Y,
              width: Z,
              height: z,
              maxWidth: Z,
              maxHeight: z,
              responsive: p,
              containerClassName: V.embedVideoImageComponent,
              imageClassName: V.embedVideoImageComponentInner,
              placeholder: B,
              placeholderVersion: R,
              onClick: x && null != m ? U : null,
              sourceMetadata: P,
            }),
            (0, i.jsx)("div", {
              className: V.embedVideoActions,
              children: (0, i.jsx)("div", {
                className: V.centerContent,
                children: x
                  ? (0, i.jsx)(f.Z, {
                      onPlay: null != m ? U : null,
                      externalURL: L,
                      renderLinkComponent: v,
                      messageId:
                        null == P
                          ? void 0
                          : null === (t = P.message) || void 0 === t
                            ? void 0
                            : t.id,
                      channelId:
                        null == P
                          ? void 0
                          : null === (l = P.message) || void 0 === l
                            ? void 0
                            : l.channel_id,
                    })
                  : null,
              }),
            }),
          ],
        });
      }
      function D(e) {
        let {
          className: t,
          href: l,
          autoPlay: n,
          maxWidth: r,
          maxHeight: a,
          thumbnail: o,
          video: d,
          renderImageComponent: u,
          responsive: m,
          alt: h,
          disableAltTextDisplay: c = !1,
          playable: p = !0,
          hiddenSpoilers: b,
          placeholder: v,
          placeholderVersion: f,
          sourceMetadata: x,
        } = e;
        return (0, i.jsx)(g.Z, {
          className: s()(V.embedVideo, t),
          original: l,
          poster: (0, C.q)(o),
          src: (0, C.q)(d),
          alt: h,
          width: o.width,
          height: o.height,
          naturalHeight: d.height,
          naturalWidth: d.width,
          maxWidth: r,
          maxHeight: a,
          responsive: m,
          autoPlay: n,
          playable: p,
          renderImageComponent: u,
          hiddenSpoilers: b,
          disableAltTextDisplay: c,
          placeholder: v,
          placeholderVersion: f,
          sourceMetadata: x,
        });
      }
      class G extends (n = r.PureComponent) {
        renderProvider() {
          let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0],
            {
              embed: { provider: t },
              renderLinkComponent: l,
              message: n,
            } = this.props;
          return null == t
            ? null
            : (0, i.jsx)("div", {
                className: s()(V.embedProvider, V.embedMargin),
                children:
                  null != t.url
                    ? l({
                        className: V.embedLink,
                        href: t.url,
                        tabIndex: e ? 0 : -1,
                        children: t.name,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        messageId: null == n ? void 0 : n.id,
                        channelId: null == n ? void 0 : n.channel_id,
                      })
                    : (0, i.jsx)("span", { children: t.name }),
              });
        }
        renderAuthor() {
          let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0],
            {
              embed: { author: t },
              renderLinkComponent: l,
              message: n,
            } = this.props;
          return null == t
            ? null
            : (0, i.jsxs)("div", {
                className: s()(V.embedAuthor, V.embedMargin),
                children: [
                  null != t.iconProxyURL
                    ? (0, i.jsx)("img", {
                        alt: "",
                        className: V.embedAuthorIcon,
                        src: t.iconProxyURL,
                      })
                    : null,
                  null != t.url
                    ? l({
                        className: V.embedAuthorNameLink,
                        href: t.url,
                        tabIndex: e ? 0 : -1,
                        children: t.name,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        messageId: null == n ? void 0 : n.id,
                        channelId: null == n ? void 0 : n.channel_id,
                      })
                    : (0, i.jsx)("span", {
                        className: V.embedAuthorName,
                        children: t.name,
                      }),
                ],
              });
        }
        renderTitle() {
          let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0],
            {
              embed: t,
              renderLinkComponent: l,
              renderTitle: n,
              message: r,
            } = this.props,
            { rawTitle: a, url: o } = t;
          return null == a
            ? null
            : (0, i.jsx)("div", {
                className: s()(V.embedTitle, V.embedMargin),
                children:
                  null != o
                    ? l({
                        className: V.embedTitleLink,
                        href: o,
                        tabIndex: e ? 0 : -1,
                        children: n(t, a),
                        target: "_blank",
                        rel: "noreferrer noopener",
                        messageId: null == r ? void 0 : r.id,
                        channelId: null == r ? void 0 : r.channel_id,
                      })
                    : n(t, a),
              });
        }
        renderDescription() {
          let { embed: e, renderDescription: t } = this.props,
            { rawDescription: l } = e;
          return null == l
            ? null
            : (0, i.jsx)("div", {
                className: s()(V.embedDescription, V.embedMargin),
                children: t(e, l, !1),
              });
        }
        renderThumbnail() {
          let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0],
            {
              embed: { thumbnail: t },
              maxThumbnailWidth: l,
              maxThumbnailHeight: n,
              renderImageComponent: r,
              autoPlayGif: a,
            } = this.props,
            { sourceMetadata: s } = this.state;
          return null == t
            ? null
            : (0, i.jsx)(H.G.Consumer, {
                children: (i) => {
                  let { disableAnimations: o } = i;
                  return r({
                    containerClassName: V.embedThumbnail,
                    src: (0, C.q)(t),
                    original: t.url,
                    width: t.width,
                    height: t.height,
                    maxWidth: l,
                    maxHeight: n,
                    shouldLink: e,
                    autoPlay: a && !o,
                    sourceMetadata: s,
                  });
                },
              });
        }
        renderFields() {
          let { embed: e } = this.props,
            { fields: t } = e;
          if (null == t || 0 === t.length) return null;
          let l = [],
            n = null;
          return (
            t.forEach((t) => {
              let { rawName: i, rawValue: r, inline: a } = t;
              !a && null != n && (l.push(n), (n = null)),
                null == n && (n = []),
                n.push([
                  this.props.renderTitle(e, i),
                  this.props.renderDescription(e, r, !0),
                ]),
                (3 === n.length || !a) && (l.push(n), (n = null));
            }),
            null != n && l.push(n),
            (0, i.jsx)("div", {
              className: V.embedFields,
              children: l.map((e, t) => {
                let { length: l } = e;
                return e.map((e, n) => {
                  let [r, a] = e;
                  return (0, i.jsxs)(
                    "div",
                    {
                      className: V.embedField,
                      style: {
                        gridColumn: (function (e, t) {
                          let l = 12 / t,
                            n = e * l;
                          return "".concat(n + 1, " / ").concat(n + l + 1);
                        })(n, l),
                      },
                      children: [
                        (0, i.jsx)("div", {
                          className: V.embedFieldName,
                          children: r,
                        }),
                        (0, i.jsx)("div", {
                          className: V.embedFieldValue,
                          children: a,
                        }),
                      ],
                    },
                    "".concat(t, "-").concat(n),
                  );
                });
              }),
            })
          );
        }
        renderImages() {
          let { hiddenSpoiler: e = !1, isVisible: t = !0 } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { embed: l } = this.props,
            { maxMediaHeight: n } = this.state;
          if (null == l.images) return null;
          let [r, a, s, o] = l.images.map((n) =>
            this.renderImage({
              hiddenSpoiler: e,
              isVisible: t,
              image: n,
              isGalleryImage: !0,
              allImages: l.images,
            }),
          );
          return null == r && null == a && null == s && null == o
            ? null
            : (0, i.jsxs)("div", {
                className: V.embedGalleryImagesWrapper,
                style: { height: n },
                children: [
                  (0, i.jsxs)("div", {
                    className: V.embedGallerySide,
                    children: [r, null != o && s],
                  }),
                  (0, i.jsxs)("div", {
                    className: V.embedGallerySide,
                    children: [a, null == o && null != s && s, null != o && o],
                  }),
                ],
              });
        }
        renderImageHoverButtons(e) {
          let {
            mimeType: t,
            downloadURL: l,
            isVisualMediaType: n,
            channelId: r,
          } = e;
          return (0, i.jsx)("div", {
            className: s()(B.hoverButtonGroup, {
              [B.nonMediaMosaicItem]: !n,
              [B.forceShowHover]: this.state.showImageAppMenu,
            }),
            children: (0, i.jsx)(m.Z, {
              toggleShowMenu: () => {
                this.setState({
                  showImageAppMenu: !this.state.showImageAppMenu,
                });
              },
              showMenu: this.state.showImageAppMenu,
              channelId: r,
              className: s()(B.hoverButton, {
                [B.selected]: this.state.showImageAppMenu,
              }),
              imageUrl: l,
              mimeType: t,
            }),
          });
        }
        handleImageHover(e, t, l) {
          if (l) {
            if (e && !this.state.isImageHovered) {
              var n, i;
              this.setState({ isImageHovered: !0 });
              let e = w.Z.getChannel(
                null === (n = this.props.message) || void 0 === n
                  ? void 0
                  : n.channel_id,
              );
              this.props.showImageRecs &&
                (0, u.a)({
                  channelId:
                    null !== (i = null == e ? void 0 : e.id) && void 0 !== i
                      ? i
                      : "",
                  location: o.I.CONTEXTUAL_IMAGE,
                  withCommands: !0,
                }),
                S.default.track(k.rMx.IMAGE_HOVERED, {
                  guild_id: null == e ? void 0 : e.guild_id,
                  channel_id: null == e ? void 0 : e.id,
                  image_recommendations_shown: this.props.showImageRecs,
                });
            } else
              !e &&
                this.state.isImageHovered &&
                this.setState({ isImageHovered: !1 });
          }
        }
        renderImage() {
          var e, t, l, n;
          let {
              hiddenSpoiler: r = !1,
              isVisible: a = !0,
              image: o,
              isGalleryImage: d = !1,
              alt: u = L.intl.string(L.t.X4IxWF),
              allImages: m = null,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            {
              renderImageComponent: h,
              className: b,
              autoPlayGif: g,
            } = this.props,
            {
              maxMediaWidth: f,
              maxMediaHeight: x,
              sourceMetadata: _,
            } = this.state;
          if (null == o) return null;
          let y = (0, C.q)(o),
            w =
              null == m
                ? {}
                : (0, I._)(
                    m.map((e) => ({
                      ...(0, p.Hv)(e, _, "IMAGE"),
                      original: e.url,
                      srcIsAnimated: e.srcIsAnimated,
                    })),
                  ),
            S = v.ZP.isAnimated({
              src: (0, C.q)(o),
              original: o.url,
              animated: !1,
              srcIsAnimated: o.srcIsAnimated,
            }),
            E = {
              containerClassName: s()(b, {
                [V.embedMedia]: !d,
                [V.embedImage]: !d,
                [V.galleryImage]: d,
              }),
              imageContainerClassName: d ? V.galleryImageContainer : void 0,
              imageClassName: d ? V.embedGalleryImageElement : void 0,
              src: (0, C.q)(o),
              alt: u,
              responsive: !0,
              limitResponsiveWidth: !d,
              width: o.width,
              height: o.height,
              maxWidth: f,
              maxHeight: x,
              original: o.url,
              shouldLink: a,
              disableAltTextDisplay: !0,
              hiddenSpoilers: r,
              placeholder: o.placeholder,
              placeholderVersion: o.placeholderVersion,
              srcIsAnimated: o.srcIsAnimated,
            };
          y in w && (E.onClick = w[y]);
          let T =
            null !==
              (n =
                null === (e = o.url.split(".").pop()) || void 0 === e
                  ? void 0
                  : e.split("?")[0]) && void 0 !== n
              ? n
              : "";
          "jpg" === T && (T = "jpeg");
          let M =
              null != o &&
              !v.uo.test(null == o ? void 0 : o.url) &&
              !(o.srcIsAnimated && v.YG.test(null == o ? void 0 : o.url)),
            N =
              !0 !== this.props.isSearchResult &&
              a &&
              (null === (t = this.props.message) || void 0 === t
                ? void 0
                : t.channel_id) != null &&
              (null === (l = this.props.message) || void 0 === l
                ? void 0
                : l.channel_id) !== void 0 &&
              M &&
              !(function (e) {
                return null != e && (e.width <= F.OF || e.height <= F.OF);
              })(o) &&
              null != T;
          return (0, i.jsx)(c.h.Consumer, {
            children: (e) =>
              (0, i.jsx)(
                H.G.Consumer,
                {
                  children: (t) => {
                    let { disableAnimations: l } = t;
                    return h({
                      ...E,
                      autoPlay: g && !l && !r,
                      renderAccessory: S ? e : null,
                      onMouseEnter: () => this.handleImageHover(!0, o, N),
                      onMouseLeave: () => this.handleImageHover(!1, o, N),
                      renderAdjacentContent: () => {
                        var e, t;
                        return !0 === this.props.showImageRecs && N
                          ? this.renderImageHoverButtons({
                              mimeType: ["image", T],
                              downloadURL:
                                null !== (t = o.proxyURL) && void 0 !== t
                                  ? t
                                  : o.url,
                              isVisualMediaType: null != o,
                              channelId:
                                null === (e = this.props.message) ||
                                void 0 === e
                                  ? void 0
                                  : e.channel_id,
                            })
                          : null;
                      },
                      sourceMetadata: _,
                    });
                  },
                },
                o.url,
              ),
          });
        }
        renderVideo() {
          let {
              gifv: e = !1,
              isVisible: t = !0,
              hiddenSpoiler: l = !1,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            {
              embed: { url: n, thumbnail: r, video: a, provider: s },
              renderVideoComponent: o,
              renderImageComponent: d,
              renderLinkComponent: u,
              allowFullScreen: m,
              autoPlayGif: h,
              obscureReason: c,
            } = this.props,
            {
              maxMediaWidth: p,
              maxMediaHeight: b,
              sourceMetadata: g,
            } = this.state;
          if (null == n || null == r) return null;
          if (e)
            return null == a
              ? null
              : (0, i.jsx)(H.G.Consumer, {
                  children: (e) => {
                    let { disableAnimations: s } = e;
                    return (0, i.jsx)(D, {
                      className: V.embedMedia,
                      href: n,
                      thumbnail: r,
                      video: a,
                      maxWidth: p,
                      maxHeight: b,
                      responsive: !0,
                      autoPlay: !l && h && !s && t,
                      renderImageComponent: d,
                      playable: t,
                      hiddenSpoilers: l,
                      disableAltTextDisplay: null != c,
                      placeholder: a.placeholder,
                      placeholderVersion: a.placeholderVersion,
                      sourceMetadata: g,
                    });
                  },
                });
          return (0, i.jsx)(O, {
            className: V.embedMedia,
            href: n,
            allowFullScreen: m,
            thumbnail: r,
            video: a,
            provider: null == s ? void 0 : s.name,
            maxWidth: p,
            maxHeight: b,
            responsive: !0,
            renderImageComponent: d,
            renderVideoComponent: o,
            renderLinkComponent: u,
            onControlsShow: () => {
              this.setState({ videoControlsShown: !0 });
            },
            onControlsHide: () => {
              this.setState({ videoControlsShown: !1 });
            },
            playable: t && !l,
            placeholder: null == a ? void 0 : a.placeholder,
            placeholderVersion: null == a ? void 0 : a.placeholderVersion,
            sourceMetadata: g,
          });
        }
        renderFooter() {
          let { footer: e, timestamp: t } = this.props.embed;
          if (null != e) {
            let l =
              null != e.iconProxyURL && "" !== e.iconProxyURL
                ? e.iconProxyURL
                : e.iconURL;
            return (0, i.jsxs)("div", {
              className: s()(V.embedFooter, V.embedMargin),
              children: [
                null != l
                  ? (0, i.jsx)("img", {
                      alt: "",
                      className: V.embedFooterIcon,
                      src: l,
                    })
                  : null,
                (0, i.jsxs)("span", {
                  className: V.embedFooterText,
                  children: [
                    e.text,
                    null != e.text && null != t
                      ? (0, i.jsx)("span", {
                          className: V.embedFooterSeparator,
                          children: "•",
                        })
                      : null,
                    null != t ? (0, T.Y4)(t) : null,
                  ],
                }),
              ],
            });
          }
          if (null != t)
            return (0, i.jsx)("div", {
              className: s()(V.embedFooter, V.embedMargin),
              children: (0, i.jsx)("span", {
                className: V.embedFooterText,
                children: (0, T.Y4)(t),
              }),
            });
        }
        renderMedia() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: t } = this.props,
            { isVisible: l } = this.state;
          switch (t.type) {
            case k.hBH.GIFV:
              return this.renderVideo({
                gifv: !0,
                hiddenSpoiler: e,
                isVisible: l,
              });
            case k.hBH.VIDEO:
            default:
              if (null != t.video)
                return this.renderVideo({
                  gifv: !1,
                  hiddenSpoiler: e,
                  isVisible: l,
                });
              if (null != t.images)
                return this.renderImages({ hiddenSpoiler: e, isVisible: l });
              return this.renderImage({
                hiddenSpoiler: e,
                isVisible: l,
                image: t.image,
                alt: t.rawTitle,
              });
          }
        }
        renderAll() {
          let e, t;
          let { embed: l, hideMedia: n } = this.props,
            { isVisible: i } = this.state,
            r = this.renderProvider(i),
            a = this.renderAuthor(i),
            s = this.renderTitle(i);
          switch (l.type) {
            case k.hBH.IMAGE:
            case k.hBH.VIDEO:
            case k.hBH.GIFV:
              break;
            default:
              e = this.renderDescription();
          }
          let o = this.renderFields();
          !n && (t = this.renderMedia(!i));
          let d = this.renderFooter(),
            u = null == t;
          return (
            l.type === k.hBH.RICH && (u = null == l.video),
            {
              provider: r,
              author: a,
              title: s,
              description: e,
              thumbnail: !n && u ? this.renderThumbnail(i) : null,
              fields: o,
              media: t,
              footer: d,
            }
          );
        }
        getMaxWidth(e) {
          let {
              embed: { image: t, images: l, video: n, type: i, thumbnail: r },
            } = this.props,
            { maxMediaWidth: a, maxMediaHeight: s } = this.state,
            o = null != t ? t : n;
          if (null == o) return;
          let { width: d } = (0, N.Tj)({
            width: o.width,
            height: o.height,
            maxWidth: a,
            maxHeight: s,
          });
          if (!e && (i === k.hBH.VIDEO || d >= 300)) return d + 32;
          if (i === k.hBH.RICH && void 0 !== l) return 520;
          if (i === k.hBH.GIFV) {
            var u, m, h, c;
            let { width: e } = (0, N.Tj)({
              width:
                null !==
                  (m =
                    null !== (u = null == n ? void 0 : n.width) && void 0 !== u
                      ? u
                      : null == r
                        ? void 0
                        : r.width) && void 0 !== m
                  ? m
                  : 0,
              height:
                null !==
                  (c =
                    null !== (h = null == n ? void 0 : n.height) && void 0 !== h
                      ? h
                      : null == r
                        ? void 0
                        : r.height) && void 0 !== c
                  ? c
                  : 0,
              maxWidth: a,
              maxHeight: s,
            });
            return e;
          }
        }
        getMinSize() {
          let { video: e } = this.props.embed;
          return null != e ? { minWidth: 150, minHeight: 144 } : void 0;
        }
        isInline() {
          let { hideMedia: e, embed: t } = this.props;
          return !e && (0, M.dY)(t);
        }
        renderSuppressButton(e) {
          return (0, i.jsx)(d.Clickable, {
            focusProps: { offset: { bottom: 4 } },
            className: V.embedSuppressButton,
            onClick: e,
            "aria-label": L.intl.string(L.t.GT3fNz),
            children: (0, i.jsx)(d.XSmallIcon, {
              size: "xs",
              color: "currentColor",
            }),
          });
        }
        usesJustifiedAutoStyle() {
          let { embed: e } = this.props;
          return (
            e.type === k.hBH.IMAGE ||
            e.type === k.hBH.VIDEO ||
            e.type === k.hBH.GIFV ||
            ((e.type === k.hBH.RICH || e.type === k.hBH.ARTICLE) &&
              (null != e.video || null != e.image))
          );
        }
        getEmbedColor(e) {
          let { color: t } = this.props.embed;
          return (null != t && "#ffffff" === t.toLowerCase()) || e ? void 0 : t;
        }
        getSpoilerStyles(e) {
          let {
              embed: { image: t, images: l, video: n, type: i },
            } = this.props,
            { maxMediaWidth: r, maxMediaHeight: a } = this.state;
          if (!this.usesJustifiedAutoStyle()) return;
          let s = e ? void 0 : this.getMaxWidth(!1);
          if (void 0 === s && void 0 === l && i !== k.hBH.RICH) {
            let e = null != t ? t : n;
            if (void 0 !== e) {
              var o;
              let { minWidth: t, minHeight: l } =
                  null !== (o = this.getMinSize()) && void 0 !== o ? o : {},
                { width: n } = (0, N.Tj)({
                  width: e.width,
                  height: e.height,
                  maxWidth: r,
                  maxHeight: a,
                  minWidth: t,
                  minHeight: l,
                });
              s = n;
            }
          }
          return {
            maxWidth: void 0 === s ? "max-content" : s,
            justifySelf: "auto",
          };
        }
        render() {
          var e;
          let { embed: t, obscureReason: l, className: n } = this.props;
          return null != t.provider && j.j.includes(t.provider.name)
            ? (0, i.jsx)(j.Z, { embed: t, className: n })
            : (0, _.Z)(t)
              ? (0, i.jsx)(y.Z, { embed: t, className: n })
              : (null === (e = t.provider) || void 0 === e
                    ? void 0
                    : e.name) === "Amazon Music" && t.type === k.hBH.RICH
                ? (0, i.jsx)(b.Z, { embed: t, className: n })
                : this.isInline()
                  ? null != l
                    ? (0, i.jsx)(h.Z, {
                        type: h.Z.Types.ATTACHMENT,
                        reason: l,
                        onReveal: this.onReveal,
                        onToggleObscurity: this.onToggleObscurity,
                        isSingleMosaicItem: !0,
                        containerStyles: this.getSpoilerStyles(!0),
                        obscurityControlClassName: s()({
                          [V.obscureVideoSpacing]:
                            this.state.isVisible &&
                            this.state.videoControlsShown,
                        }),
                        children: this.renderInlineMediaEmbed,
                      })
                    : this.renderInlineMediaEmbed()
                  : null != l
                    ? (0, i.jsx)(h.Z, {
                        type: h.Z.Types.EMBED,
                        onReveal: this.onReveal,
                        onToggleObscurity: this.onToggleObscurity,
                        reason: l,
                        isSingleMosaicItem: !0,
                        containerStyles: this.getSpoilerStyles(!1),
                        children: this.renderEmbedContent,
                      })
                    : this.renderEmbedContent();
        }
        constructor(...e) {
          var t;
          super(...e),
            (t = this),
            W(this, "state", {
              isVisible: null == this.props.obscureReason,
              videoControlsShown: !1,
              isImageHovered: !1,
              showImageAppMenu: !1,
              sourceMetadata: {
                message: this.props.message,
                identifier: {
                  type: "embed",
                  embedIndex: this.props.embedIndex,
                },
              },
              ...(0, M.vP)(this.props.embed),
            }),
            W(this, "onReveal", () => {
              this.setState({ isVisible: !0 });
            }),
            W(this, "onToggleObscurity", () => {
              this.setState({ isVisible: !this.state.isVisible });
            }),
            W(this, "renderInlineMediaEmbed", function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                { obscureReason: l, className: n } = t.props,
                r = t.getMaxWidth(!0);
              return (0, i.jsx)("div", {
                "aria-hidden": e,
                className: s()(V.inlineMediaEmbed, n, {
                  [V.spoilerAttachment]: l === x.wk.SPOILER,
                  [V.hiddenExplicitAttachment]:
                    null != l &&
                    [
                      x.wk.EXPLICIT_CONTENT,
                      x.wk.POTENTIAL_EXPLICIT_CONTENT,
                    ].includes(l),
                  [V.isHidden]: e,
                  [V.justifyAuto]: t.usesJustifiedAutoStyle(),
                  [P.embedFlexGrow]: null != r,
                }),
                style: { maxWidth: r },
                children: t.renderMedia(e),
              });
            }),
            W(this, "renderEmbedContent", function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                {
                  className: l,
                  onSuppressEmbed: n,
                  obscureReason: r,
                } = t.props,
                {
                  provider: a,
                  author: o,
                  title: d,
                  description: u,
                  fields: m,
                  thumbnail: h,
                  media: c,
                  footer: p,
                } = t.renderAll();
              return (0, i.jsx)("article", {
                className: s()(l, P.embedFlexGrow, V.embedFull, R.markup, {
                  [V.isHidden]: e,
                  [V.spoilerEmbed]: r === x.wk.SPOILER,
                  [V.hiddenExplicitEmbed]:
                    null != r &&
                    [
                      x.wk.EXPLICIT_CONTENT,
                      x.wk.POTENTIAL_EXPLICIT_CONTENT,
                    ].includes(r),
                  [V.justifyAuto]: t.usesJustifiedAutoStyle(),
                }),
                "aria-hidden": e,
                style: {
                  borderLeftColor: t.getEmbedColor(e),
                  maxWidth: t.getMaxWidth(!1),
                },
                children: (0, i.jsx)("div", {
                  className: V.gridContainer,
                  children: (0, i.jsxs)("div", {
                    className: s()({
                      [V.grid]: !0,
                      [V.hasThumbnail]: null != h,
                    }),
                    children: [
                      null != n ? t.renderSuppressButton(n) : null,
                      a,
                      o,
                      d,
                      u,
                      m,
                      c,
                      h,
                      p,
                    ],
                  }),
                }),
              });
            });
        }
      }
      W(G, "defaultProps", {
        hideMedia: !1,
        allowFullScreen: !0,
        maxThumbnailWidth: 80,
        maxThumbnailHeight: 80,
        embedIndex: 0,
      });
    },
    468846: function (e, t, l) {
      l.d(t, {
        ZP: function () {
          return c;
        },
        pn: function () {
          return n;
        },
      }),
        l(610138),
        l(216116),
        l(78328),
        l(815648),
        l(47120);
      var n,
        i,
        r = l(200651),
        a = l(192379),
        s = l(591759),
        o = l(340702);
      function d(e, t) {
        let l = s.Z.toURLSafe(null != e ? e : "");
        return null === l
          ? ""
          : ((l.search = new URLSearchParams({
              ...l.searchParams,
              ...t,
            }).toString()),
            l.toString());
      }
      function u(e) {
        let { src: t, autoMute: l, ...n } = e,
          i = a.useRef(null),
          s = a.useCallback(
            (e) => {
              if (
                !!e.data["x-tiktok-player"] &&
                "https://www.tiktok.com" === e.origin
              ) {
                if ("onPlayerReady" === e.data.type) {
                  var t, n, r, a;
                  l &&
                    (null === (a = i.current) ||
                      void 0 === a ||
                      null === (r = a.contentWindow) ||
                      void 0 === r ||
                      r.postMessage(
                        { type: "mute", "x-tiktok-player": !0 },
                        e.origin,
                      )),
                    null === (n = i.current) ||
                      void 0 === n ||
                      null === (t = n.contentWindow) ||
                      void 0 === t ||
                      t.postMessage(
                        { type: "play", "x-tiktok-player": !0 },
                        e.origin,
                      );
                }
              }
            },
            [l],
          );
        a.useEffect(
          () => (
            window.addEventListener("message", s),
            () => window.removeEventListener("message", s)
          ),
          [s],
        );
        let o = d(t, { utm_source: "discord.gg" });
        return (0, r.jsx)(h, { src: o, ref: i, ...n });
      }
      function m(e) {
        let { src: t, autoMute: l, ...n } = e,
          i = d(t, { autoplay: "1", auto_play: "1", mute: l ? "1" : void 0 });
        return (0, r.jsx)(h, { src: i, ...n });
      }
      let h = a.forwardRef(function (e, t) {
        return (0, r.jsx)("iframe", {
          ref: t,
          className: o.embedIframe,
          allow: "autoplay",
          frameBorder: 0,
          scrolling: "no",
          sandbox:
            "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          ...e,
        });
      });
      function c(e) {
        switch (e.provider) {
          case "YouTube":
            return (0, r.jsx)(m, { ...e });
          case "TikTok":
            return (0, r.jsx)(u, { ...e });
          default:
            return (0, r.jsx)(h, { ...e });
        }
      }
      ((i = n || (n = {})).YOUTUBE = "YouTube"), (i.TIKTOK = "TikTok");
    },
    401419: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return c;
        },
        j: function () {
          return m;
        },
      });
      var n = l(200651);
      l(192379);
      var i = l(120356),
        r = l.n(i),
        a = l(729594),
        s = l(388032),
        o = l(112197);
      let d = [
          "sessionshare.sp-int.playstation.com",
          "session-share.playstation.com",
        ],
        u = (e, t, l) =>
          "https://".concat(e, "/embed/").concat(t, "?locale=").concat(l),
        m = ["PlayStation"],
        h = (e, t) => {
          let { host: l, pathname: n } = t,
            i = [];
          switch ((null != n && (i = n.split("/")), e)) {
            case "PlayStation":
              if (null == l || !d.includes(l) || 2 !== i.length) break;
              return {
                embedUrl: u(l, i[1], s.intl.currentLocale),
                style: { width: 400, height: 300, borderRadius: 6 },
              };
          }
          return null;
        };
      function c(e) {
        var t;
        let l = e.embed.url,
          i = null === (t = e.embed.provider) || void 0 === t ? void 0 : t.name;
        if (null == l || null == i) return null;
        let s = null;
        try {
          s = a.parse(l, !0);
        } catch (e) {
          return null;
        }
        let d = h(i, s);
        return null == d
          ? null
          : (0, n.jsx)("iframe", {
              src: d.embedUrl,
              className: r()(o.embedIFrame, e.className),
              style: d.style,
              sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
            });
      }
    },
    624195: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = l(200651);
      l(192379);
      var i = l(120356),
        r = l.n(i),
        a = l(729594),
        s = l(340702);
      let o = RegExp(
        "^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)",
      );
      function d(e) {
        let t = null,
          l = null,
          n = null;
        try {
          (t = (n = a.parse(e, !0)).host), (l = n.pathname);
        } catch (e) {
          return null;
        }
        return null != n && o.test(null != t ? t : "") && null != l ? n : null;
      }
      function u(e) {
        let {
          className: t,
          embed: { url: l, thumbnail: i },
        } = e;
        if (null == l || null == i) return null;
        let a = d(l);
        if (null == a) return null;
        let o = a.query.iframe_url;
        if (null == o || Array.isArray(o) || null == d(o)) return null;
        let { width: u, height: m } = i,
          h = u,
          c = m;
        return (
          (u > 500 || m > 400) &&
            (u > m
              ? ((h = 500), (c = (500 * m) / u))
              : ((h = (400 * u) / m), (c = 400))),
          (0, n.jsx)("iframe", {
            className: r()(s.embedAmazonMusic, t),
            src: o,
            style: { width: h, height: c },
            frameBorder: 0,
            sandbox:
              "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          })
        );
      }
    },
    44824: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = l(200651),
        i = l(192379),
        r = l(70097),
        a = l(947849),
        s = l(981631),
        o = l(388032);
      function d(e) {
        let {
            poster: t,
            src: l,
            width: a,
            height: o,
            naturalWidth: d,
            naturalHeight: u,
            play: m = !0,
            className: h,
            alt: c,
            responsive: p,
          } = e,
          b = i.useRef(null);
        return (i.useEffect(() => {
          let { current: e } = b;
          if (null != e) m ? e.play() : e.pause();
        }, [m]),
        (d <= s.N_j && u <= s.XKF) || (d <= s.XKF && u <= s.N_j))
          ? (0, n.jsx)(r.Z, {
              ref: b,
              className: h,
              poster: t,
              src: l,
              width: a,
              height: o,
              responsive: p,
              muted: !0,
              loop: !0,
              autoPlay: m,
              preload: "none",
              "aria-label": c,
            })
          : (0, n.jsx)("img", { alt: "", src: t, width: a, height: o });
      }
      function u(e) {
        let {
          src: t,
          poster: l,
          naturalWidth: i,
          naturalHeight: r,
          responsive: s,
          autoPlay: u,
          className: m,
          playable: h = !0,
          renderImageComponent: c,
          alt: p = o.intl.string(o.t.I5gL2N),
          sourceMetadata: b,
          ...g
        } = e;
        return (0, n.jsx)(a.h.Consumer, {
          children: (e) =>
            c({
              ...g,
              alt: p,
              src: l,
              containerClassName: m,
              autoPlay: u,
              animated: h,
              responsive: s,
              renderAccessory: e,
              tabIndex: h ? 0 : -1,
              dataSafeSrc: t,
              children(e) {
                let { src: l, size: a, animating: o, alt: u } = e;
                return (0, n.jsx)(d, {
                  alt: u,
                  className: m,
                  poster: l,
                  src: t,
                  width: a.width,
                  height: a.height,
                  naturalWidth: i,
                  naturalHeight: r,
                  responsive: s,
                  play: h && o,
                });
              },
              sourceMetadata: b,
            }),
        });
      }
    },
    254109: function (e, t, l) {
      l.d(t, {
        VO: function () {
          return u;
        },
        f0: function () {
          return m;
        },
        fS: function () {
          return d;
        },
      });
      var n = l(15729),
        i = l(731965),
        r = l(626135),
        a = l(981631);
      let s = {
          guildId: void 0,
          channelId: void 0,
          channelType: void 0,
          viewerSwipes: 0,
          thumbnailSwipes: 0,
          selectedItemChanges: 0,
          numMediaItems: 0,
        },
        o = (0, n.U)(() => s);
      function d(e, t, l, n) {
        (0, i.j)(() =>
          o.setState({
            ...s,
            guildId: e,
            channelId: t,
            channelType: l,
            numMediaItems: n,
          }),
        );
      }
      function u() {
        let e = o.getState();
        r.default.track(a.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
          guild_id: e.guildId,
          channel_id: e.channelId,
          channel_type: e.channelType,
          number_viewer_swipes: e.viewerSwipes,
          number_thumbnail_swipes: e.thumbnailSwipes,
          number_selected_item_changes: e.selectedItemChanges,
          number_media_items: e.numMediaItems,
        }),
          (0, i.j)(() => o.setState({ ...s }));
      }
      function m() {
        (0, i.j)(() =>
          o.setState((e) => ({
            selectedItemChanges: e.selectedItemChanges + 1,
          })),
        );
      }
    },
    94396: function (e, t, l) {
      l.d(t, {
        _: function () {
          return u;
        },
      }),
        l(47120),
        l(192379);
      var n = l(374470),
        i = l(254109),
        r = l(312097),
        a = l(52824),
        s = l(626135),
        o = l(981631),
        d = l(230569);
      function u(e, t, l) {
        let u = {};
        for (let [m, h] of e.entries())
          u[(0, a.q)({ proxyURL: h.proxyUrl, url: h.url })] = (a) =>
            (function (e, t, l) {
              let a =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                u = arguments.length > 4 ? arguments[4] : void 0;
              e.preventDefault(),
                (0, n.k)(e.currentTarget) && e.currentTarget.blur(),
                null != u &&
                  (s.default.track(
                    o.rMx.OPEN_MODAL,
                    { type: o.jXE.MEDIA_VIEWER, ...u },
                    { throttlePercent: 0.01 },
                  ),
                  (0, i.fS)(
                    u.guild_id,
                    u.channel_id,
                    u.channel_type,
                    t.length,
                  )),
                (0, r.K)({
                  ...a,
                  className: d.forcedTransparency,
                  onIndexChange: null != u ? i.f0 : void 0,
                  items: t,
                  startingIndex: l,
                  location: "zoomedMediaModalHelper",
                  onCloseCallback: null != u ? i.VO : void 0,
                });
            })(a, e, m, t, l);
        return u;
      }
    },
    785992: function (e, t, l) {
      l.d(t, {
        E: function () {
          return r;
        },
        Z: function () {
          return a;
        },
      });
      var n = l(729594),
        i = l(981631);
      function r(e) {
        return null != e && "open.spotify.com" === e;
      }
      function a(e) {
        var t;
        if (
          null == e.url ||
          (null === (t = e.provider) || void 0 === t ? void 0 : t.name) !==
            "Spotify" ||
          e.type !== i.hBH.LINK
        )
          return !1;
        try {
          let t = n.parse(e.url, !0).host;
          return r(t);
        } catch (e) {
          return !1;
        }
      }
    },
    400266: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return u;
        },
      }),
        l(757143);
      var n = l(200651);
      l(192379);
      var i = l(120356),
        r = l.n(i),
        a = l(729594),
        s = l(785992),
        o = l(616922),
        d = l(340702);
      function u(e) {
        let {
          className: t,
          embed: { url: l },
        } = e;
        if (null == l) return null;
        let i = null,
          u = null;
        try {
          let e = a.parse(l.replace(/intl-[^/]+\//, ""), !0);
          (i = e.host), (u = e.pathname);
        } catch (e) {
          return null;
        }
        if (!(0, s.E)(i) || null == u) return null;
        let m = u.split("/"),
          h = null != m[1] ? m[1].toLowerCase() : null,
          c = null != m[3] ? m[3].toLowerCase() : null,
          p = m[4];
        if (
          ![
            "track",
            "playlist",
            "album",
            "artist",
            "user",
            "show",
            "episode",
          ].includes(null != h ? h : "") ||
          ("user" === h && "playlist" !== c)
        )
          return null;
        "user" === h &&
          "playlist" === c &&
          null != p &&
          (u = "/playlist/".concat(p));
        let b = 352;
        return (
          "track" === h
            ? (b = 80)
            : ("episode" === h || "show" === h) && (b = 232),
          (0, n.jsx)("iframe", {
            className: r()(d.embedSpotify, t),
            src: o.C7.EMBED(u),
            style: { width: 400, height: b },
            frameBorder: 0,
            sandbox:
              "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          })
        );
      }
    },
    974378: function (e, t, l) {
      e.exports = { title: "title_d9a510" };
    },
    340702: function (e, t, l) {
      e.exports = {
        embedFull: "embedFull_b0068a embed_b0068a",
        inlineMediaEmbed: "inlineMediaEmbed_b0068a embed_b0068a",
        embedDescription: "embedDescription_b0068a",
        embedFieldName: "embedFieldName_b0068a",
        embedFieldValue: "embedFieldValue_b0068a",
        embedFooterText: "embedFooterText_b0068a",
        embedProvider: "embedProvider_b0068a",
        embedLink: "embedLink_b0068a",
        embedAuthorName: "embedAuthorName_b0068a",
        embedAuthorNameLink:
          "embedAuthorNameLink_b0068a embedLink_b0068a embedAuthorName_b0068a",
        embedTitle: "embedTitle_b0068a",
        embedTitleLink:
          "embedTitleLink_b0068a embedLink_b0068a embedTitle_b0068a",
        gridContainer: "gridContainer_b0068a",
        grid: "grid_b0068a",
        hasThumbnail: "hasThumbnail_b0068a",
        embedMargin: "embedMargin_b0068a",
        embedSuppressButton: "embedSuppressButton_b0068a",
        embedAuthor: "embedAuthor_b0068a",
        embedAuthorIcon: "embedAuthorIcon_b0068a",
        embedImage: "embedImage_b0068a",
        embedThumbnail: "embedThumbnail_b0068a",
        embedVideo: "embedVideo_b0068a",
        embedGalleryImagesWrapper: "embedGalleryImagesWrapper_b0068a",
        embedGallerySide: "embedGallerySide_b0068a",
        galleryImage: "galleryImage_b0068a",
        obscureVideoSpacing: "obscureVideoSpacing_b0068a",
        galleryImageContainer: "galleryImageContainer_b0068a",
        embedGalleryImageElement: "embedGalleryImageElement_b0068a",
        centerContent: "centerContent_b0068a",
        embedVideoImageComponent: "embedVideoImageComponent_b0068a",
        embedVideoActions: "embedVideoActions_b0068a",
        embedVideoImageComponentInner: "embedVideoImageComponentInner_b0068a",
        embedIframe: "embedIframe_b0068a",
        embedFooter: "embedFooter_b0068a",
        embedFooterSeparator: "embedFooterSeparator_b0068a",
        embedFooterIcon: "embedFooterIcon_b0068a",
        embedFields: "embedFields_b0068a",
        embedField: "embedField_b0068a",
        embedMedia: "embedMedia_b0068a",
        embedAmazonMusic: "embedAmazonMusic_b0068a",
        embedSpotify: "embedSpotify_b0068a",
        isHidden: "isHidden_b0068a",
        spoilerEmbed: "spoilerEmbed_b0068a hiddenEmbed_b0068a",
        hiddenExplicitEmbed: "hiddenExplicitEmbed_b0068a hiddenEmbed_b0068a",
        justifyAuto: "justifyAuto_b0068a",
        spoilerAttachment: "spoilerAttachment_b0068a hiddenAttachment_b0068a",
        hiddenExplicitAttachment:
          "hiddenExplicitAttachment_b0068a hiddenAttachment_b0068a",
      };
    },
    112197: function (e, t, l) {
      e.exports = { embedIFrame: "embedIFrame_c0e1f8" };
    },
    740909: function (e, t, l) {
      e.exports = {
        hoverButtonGroup: "hoverButtonGroup_d0395d",
        forceShowHover: "forceShowHover_d0395d",
        hoverButton: "hoverButton_d0395d",
        selected: "selected_d0395d",
        nonMediaMosaicItem: "nonMediaMosaicItem_d0395d",
      };
    },
    303511: function (e, t, l) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    230569: function (e, t, l) {
      e.exports = {
        carouselModal: "carouselModal_c9eb31",
        mobileCloseWrapper: "mobileCloseWrapper_c9eb31",
        forcedTransparency: "forcedTransparency_c9eb31",
      };
    },
    803205: function (e, t, l) {
      e.exports = {
        container: "container_b558d0",
        gifFavoriteButton: "gifFavoriteButton_b558d0",
        embedWrapper: "embedWrapper_b558d0",
        giftCodeContainer: "giftCodeContainer_b558d0",
        referralContainer: "referralContainer_b558d0",
        pollContainer: "pollContainer_b558d0",
        confirmText: "confirmText_b558d0",
        threadRoleMentionFailure: "threadRoleMentionFailure_b558d0",
        nitroFileSizeUpsell: "nitroFileSizeUpsell_b558d0",
        nitroBadgeSvg: "nitroBadgeSvg_b558d0",
        ctaButtonContainer: "ctaButtonContainer_b558d0",
        embedContainer: "embedContainer_b558d0",
        embedFlexGrow: "embedFlexGrow_b558d0",
      };
    },
  },
]);
//# sourceMappingURL=40d1b00d6f9a803e9ac8.js.map
