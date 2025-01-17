"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21628"],
  {
    446411: function (e, l, t) {
      t.d(l, {
        BC: function () {
          return G;
        },
        ZP: function () {
          return O;
        },
      }),
        t(47120),
        t(653041);
      var n,
        i = t(200651),
        r = t(192379),
        a = t(120356),
        o = t.n(a),
        s = t(228458),
        d = t(481060),
        u = t(399654),
        m = t(370298),
        h = t(95398),
        c = t(947849),
        p = t(768494),
        b = t(624195),
        g = t(44824),
        v = t(124347),
        f = t(283756),
        x = t(169525),
        I = t(94396),
        y = t(785992),
        _ = t(400266),
        w = t(592125),
        C = t(52824),
        T = t(626135),
        E = t(585483),
        N = t(55935),
        S = t(408433),
        A = t(956664),
        j = t(468846),
        M = t(401419),
        H = t(249458),
        F = t(981631),
        k = t(217702),
        L = t(388032),
        V = t(340702),
        B = t(740909),
        R = t(665162),
        P = t(803205);
      function W(e, l, t) {
        return (
          l in e
            ? Object.defineProperty(e, l, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[l] = t),
          e
        );
      }
      function G(e) {
        var l, t;
        let {
            className: n,
            iframeWrapperClassName: a,
            maxWidth: s,
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
            autoMute: y,
            volume: _,
            onPlay: w,
            onPause: T,
            onEnded: N,
            onControlsHide: S,
            onControlsShow: M,
            onVolumeChange: H,
            onMute: k,
            href: L,
            placeholder: B,
            placeholderVersion: R,
            sourceMetadata: P,
          } = e,
          [W, G] = r.useState(I),
          D = null != m && null == m.proxyURL,
          O = r.useCallback(() => G(!1), [G]),
          U = (e) => {
            e.preventDefault(),
              e.stopPropagation(),
              null == w || w(!1),
              G(!0),
              D &&
                (E.S.dispatch(F.CkL.VIDEO_EMBED_PLAYBACK_STARTED),
                E.S.subscribeOnce(F.CkL.VIDEO_EMBED_PLAYBACK_STARTED, O));
          };
        r.useEffect(
          () => () => {
            D && E.S.unsubscribe(F.CkL.VIDEO_EMBED_PLAYBACK_STARTED, O);
          },
          [D, O],
        );
        let { width: Z, height: z } = u;
        null != m && ((Z = m.width), (z = m.height));
        let Y = (0, A.Tj)({ width: Z, height: z, maxWidth: s, maxHeight: d });
        (Z = Math.max(Y.width, 150)), (z = Math.max(Y.height, 144));
        let q = (0, C.q)(u);
        if (null != m && null != m.proxyURL)
          return (0, i.jsx)("div", {
            className: o()(V.embedVideo, n),
            children: g({
              poster: q,
              src: m.proxyURL,
              placeholder: B,
              placeholderVersion: R,
              width: Z,
              height: z,
              responsive: p,
              autoPlay: I,
              onEnded: N,
              naturalWidth: m.width,
              naturalHeight: m.height,
              onVolumeChange: H,
              playable: x,
              autoMute: y,
              volume: _,
              onPlay: w,
              onPause: T,
              onMute: k,
              onControlsHide: S,
              onControlsShow: M,
              sourceMetadata: P,
            }),
          });
        if (W && null != m) {
          let e;
          let l = !0 === y || ("function" == typeof y && y()),
            t = { width: Z, height: z },
            r = { width: Z, height: z };
          if (p) {
            let l = 0 !== Z ? z / Z : 1;
            (t = { maxWidth: s, maxHeight: d, width: void 0, height: void 0 }),
              (r = { paddingBottom: "".concat(100 * l, "%"), maxWidth: Z }),
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
            style: t,
            children: (0, i.jsx)("div", {
              className: o()(V.embedVideo, a),
              style: r,
              children: (0, i.jsx)(j.ZP, {
                provider: h,
                src: m.url,
                style: e,
                width: Z,
                height: z,
                allowFullScreen: c,
                autoMute: l,
              }),
            }),
          });
        }
        return (0, i.jsxs)("div", {
          className: o()(V.embedVideo, n),
          style: p ? { maxWidth: Z } : { width: Z, height: z },
          children: [
            b({
              src: q,
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
              analyticsSource: "EmbedVideo",
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
                          : null === (l = P.message) || void 0 === l
                            ? void 0
                            : l.id,
                      channelId:
                        null == P
                          ? void 0
                          : null === (t = P.message) || void 0 === t
                            ? void 0
                            : t.channel_id,
                    })
                  : null,
              }),
            }),
          ],
        });
      }
      function D(e) {
        let {
          className: l,
          href: t,
          autoPlay: n,
          maxWidth: r,
          maxHeight: a,
          thumbnail: s,
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
          className: o()(V.embedVideo, l),
          original: t,
          poster: (0, C.q)(s),
          src: (0, C.q)(d),
          alt: h,
          width: s.width,
          height: s.height,
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
      class O extends (n = r.PureComponent) {
        renderProvider() {
          let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0],
            {
              embed: { provider: l },
              renderLinkComponent: t,
              message: n,
            } = this.props;
          return null == l
            ? null
            : (0, i.jsx)("div", {
                className: o()(V.embedProvider, V.embedMargin),
                children:
                  null != l.url
                    ? t({
                        className: V.embedLink,
                        href: l.url,
                        tabIndex: e ? 0 : -1,
                        children: l.name,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        messageId: null == n ? void 0 : n.id,
                        channelId: null == n ? void 0 : n.channel_id,
                      })
                    : (0, i.jsx)("span", { children: l.name }),
              });
        }
        renderAuthor() {
          let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0],
            {
              embed: { author: l },
              renderLinkComponent: t,
              message: n,
            } = this.props;
          return null == l
            ? null
            : (0, i.jsxs)("div", {
                className: o()(V.embedAuthor, V.embedMargin),
                children: [
                  null != l.iconProxyURL
                    ? (0, i.jsx)("img", {
                        alt: "",
                        className: V.embedAuthorIcon,
                        src: l.iconProxyURL,
                      })
                    : null,
                  null != l.url
                    ? t({
                        className: V.embedAuthorNameLink,
                        href: l.url,
                        tabIndex: e ? 0 : -1,
                        children: l.name,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        messageId: null == n ? void 0 : n.id,
                        channelId: null == n ? void 0 : n.channel_id,
                      })
                    : (0, i.jsx)("span", {
                        className: V.embedAuthorName,
                        children: l.name,
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
              embed: l,
              renderLinkComponent: t,
              renderTitle: n,
              message: r,
            } = this.props,
            { rawTitle: a, url: s } = l;
          return null == a
            ? null
            : (0, i.jsx)("div", {
                className: o()(V.embedTitle, V.embedMargin),
                children:
                  null != s
                    ? t({
                        className: V.embedTitleLink,
                        href: s,
                        tabIndex: e ? 0 : -1,
                        children: n(l, a),
                        target: "_blank",
                        rel: "noreferrer noopener",
                        messageId: null == r ? void 0 : r.id,
                        channelId: null == r ? void 0 : r.channel_id,
                      })
                    : n(l, a),
              });
        }
        renderDescription() {
          let { embed: e, renderDescription: l } = this.props,
            { rawDescription: t } = e;
          return null == t
            ? null
            : (0, i.jsx)("div", {
                className: o()(V.embedDescription, V.embedMargin),
                children: l(e, t, !1),
              });
        }
        renderThumbnail() {
          let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0],
            {
              embed: { thumbnail: l },
              maxThumbnailWidth: t,
              maxThumbnailHeight: n,
              renderImageComponent: r,
              autoPlayGif: a,
            } = this.props,
            { sourceMetadata: o } = this.state;
          return null == l
            ? null
            : (0, i.jsx)(H.G.Consumer, {
                children: (i) => {
                  let { disableAnimations: s } = i;
                  return r({
                    containerClassName: V.embedThumbnail,
                    src: (0, C.q)(l),
                    original: l.url,
                    width: l.width,
                    height: l.height,
                    maxWidth: t,
                    maxHeight: n,
                    shouldLink: e,
                    autoPlay: a && !s,
                    sourceMetadata: o,
                    analyticsSource: "Embed",
                  });
                },
              });
        }
        renderFields() {
          let { embed: e } = this.props,
            { fields: l } = e;
          if (null == l || 0 === l.length) return null;
          let t = [],
            n = null;
          return (
            l.forEach((l) => {
              let { rawName: i, rawValue: r, inline: a } = l;
              !a && null != n && (t.push(n), (n = null)),
                null == n && (n = []),
                n.push([
                  this.props.renderTitle(e, i),
                  this.props.renderDescription(e, r, !0),
                ]),
                (3 === n.length || !a) && (t.push(n), (n = null));
            }),
            null != n && t.push(n),
            (0, i.jsx)("div", {
              className: V.embedFields,
              children: t.map((e, l) => {
                let { length: t } = e;
                return e.map((e, n) => {
                  let [r, a] = e;
                  return (0, i.jsxs)(
                    "div",
                    {
                      className: V.embedField,
                      style: {
                        gridColumn: (function (e, l) {
                          let t = 12 / l,
                            n = e * t;
                          return "".concat(n + 1, " / ").concat(n + t + 1);
                        })(n, t),
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
                    "".concat(l, "-").concat(n),
                  );
                });
              }),
            })
          );
        }
        renderImages() {
          let { hiddenSpoiler: e = !1, isVisible: l = !0 } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { embed: t } = this.props,
            { maxMediaHeight: n } = this.state;
          if (null == t.images) return null;
          let [r, a, o, s] = t.images.map((n) =>
            this.renderImage({
              hiddenSpoiler: e,
              isVisible: l,
              image: n,
              isGalleryImage: !0,
              allImages: t.images,
            }),
          );
          return null == r && null == a && null == o && null == s
            ? null
            : (0, i.jsxs)("div", {
                className: V.embedGalleryImagesWrapper,
                style: { height: n },
                children: [
                  (0, i.jsxs)("div", {
                    className: V.embedGallerySide,
                    children: [r, null != s && o],
                  }),
                  (0, i.jsxs)("div", {
                    className: V.embedGallerySide,
                    children: [a, null == s && null != o && o, null != s && s],
                  }),
                ],
              });
        }
        renderImageHoverButtons(e) {
          let {
            mimeType: l,
            downloadURL: t,
            isVisualMediaType: n,
            channelId: r,
          } = e;
          return (0, i.jsx)("div", {
            className: o()(B.hoverButtonGroup, {
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
              className: o()(B.hoverButton, {
                [B.selected]: this.state.showImageAppMenu,
              }),
              imageUrl: t,
              mimeType: l,
            }),
          });
        }
        handleImageHover(e, l, t) {
          if (t) {
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
                  location: s.I.CONTEXTUAL_IMAGE,
                  withCommands: !0,
                }),
                T.default.track(F.rMx.IMAGE_HOVERED, {
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
          var e, l, t, n;
          let {
              hiddenSpoiler: r = !1,
              isVisible: a = !0,
              image: s,
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
              sourceMetadata: y,
            } = this.state;
          if (null == s) return null;
          let _ = (0, C.q)(s),
            w =
              null == m
                ? {}
                : (0, I._)(
                    m.map((e) => ({
                      ...(0, p.Hv)(e, y, "IMAGE"),
                      original: e.url,
                      srcIsAnimated: e.srcIsAnimated,
                    })),
                    {},
                    "Embed",
                  ),
            T = v.ZP.isAnimated({
              src: (0, C.q)(s),
              original: s.url,
              animated: !1,
              srcIsAnimated: s.srcIsAnimated,
            }),
            E = {
              containerClassName: o()(b, {
                [V.embedMedia]: !d,
                [V.embedImage]: !d,
                [V.galleryImage]: d,
              }),
              imageContainerClassName: d ? V.galleryImageContainer : void 0,
              imageClassName: d ? V.embedGalleryImageElement : void 0,
              src: (0, C.q)(s),
              alt: u,
              responsive: !0,
              limitResponsiveWidth: !d,
              width: s.width,
              height: s.height,
              maxWidth: f,
              maxHeight: x,
              original: s.url,
              shouldLink: a,
              disableAltTextDisplay: !0,
              hiddenSpoilers: r,
              placeholder: s.placeholder,
              placeholderVersion: s.placeholderVersion,
              srcIsAnimated: s.srcIsAnimated,
            };
          _ in w && (E.onClick = w[_]);
          let N =
            null !==
              (n =
                null === (e = s.url.split(".").pop()) || void 0 === e
                  ? void 0
                  : e.split("?")[0]) && void 0 !== n
              ? n
              : "";
          "jpg" === N && (N = "jpeg");
          let S =
              null != s &&
              !v.uo.test(null == s ? void 0 : s.url) &&
              !(s.srcIsAnimated && v.YG.test(null == s ? void 0 : s.url)) &&
              !(s.srcIsAnimated && v.FH.test(null == s ? void 0 : s.url)),
            A =
              !0 !== this.props.isSearchResult &&
              a &&
              (null === (l = this.props.message) || void 0 === l
                ? void 0
                : l.channel_id) != null &&
              (null === (t = this.props.message) || void 0 === t
                ? void 0
                : t.channel_id) !== void 0 &&
              S &&
              !(function (e) {
                return null != e && (e.width <= k.OF || e.height <= k.OF);
              })(s) &&
              null != N;
          return (0, i.jsx)(c.h.Consumer, {
            children: (e) =>
              (0, i.jsx)(
                H.G.Consumer,
                {
                  children: (l) => {
                    let { disableAnimations: t } = l;
                    return h({
                      ...E,
                      autoPlay: g && !t && !r,
                      renderAccessory: T ? e : null,
                      onMouseEnter: () => this.handleImageHover(!0, s, A),
                      onMouseLeave: () => this.handleImageHover(!1, s, A),
                      renderAdjacentContent: () => {
                        var e, l;
                        return !0 === this.props.showImageRecs && A
                          ? this.renderImageHoverButtons({
                              mimeType: ["image", N],
                              downloadURL:
                                null !== (l = s.proxyURL) && void 0 !== l
                                  ? l
                                  : s.url,
                              isVisualMediaType: null != s,
                              channelId:
                                null === (e = this.props.message) ||
                                void 0 === e
                                  ? void 0
                                  : e.channel_id,
                            })
                          : null;
                      },
                      sourceMetadata: y,
                      analyticsSource: "Embed",
                    });
                  },
                },
                s.url,
              ),
          });
        }
        renderVideo() {
          let {
              gifv: e = !1,
              isVisible: l = !0,
              hiddenSpoiler: t = !1,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            {
              embed: { url: n, thumbnail: r, video: a, provider: o },
              renderVideoComponent: s,
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
                    let { disableAnimations: o } = e;
                    return (0, i.jsx)(D, {
                      className: V.embedMedia,
                      href: n,
                      thumbnail: r,
                      video: a,
                      maxWidth: p,
                      maxHeight: b,
                      responsive: !0,
                      autoPlay: !t && h && !o && l,
                      renderImageComponent: d,
                      playable: l,
                      hiddenSpoilers: t,
                      disableAltTextDisplay: null != c,
                      placeholder: a.placeholder,
                      placeholderVersion: a.placeholderVersion,
                      sourceMetadata: g,
                    });
                  },
                });
          return (0, i.jsx)(G, {
            className: V.embedMedia,
            href: n,
            allowFullScreen: m,
            thumbnail: r,
            video: a,
            provider: null == o ? void 0 : o.name,
            maxWidth: p,
            maxHeight: b,
            responsive: !0,
            renderImageComponent: d,
            renderVideoComponent: s,
            renderLinkComponent: u,
            onControlsShow: () => {
              this.setState({ videoControlsShown: !0 });
            },
            onControlsHide: () => {
              this.setState({ videoControlsShown: !1 });
            },
            playable: l && !t,
            placeholder: null == a ? void 0 : a.placeholder,
            placeholderVersion: null == a ? void 0 : a.placeholderVersion,
            sourceMetadata: g,
          });
        }
        renderFooter() {
          let { footer: e, timestamp: l } = this.props.embed;
          if (null != e) {
            let t =
              null != e.iconProxyURL && "" !== e.iconProxyURL
                ? e.iconProxyURL
                : e.iconURL;
            return (0, i.jsxs)("div", {
              className: o()(V.embedFooter, V.embedMargin),
              children: [
                null != t
                  ? (0, i.jsx)("img", {
                      alt: "",
                      className: V.embedFooterIcon,
                      src: t,
                    })
                  : null,
                (0, i.jsxs)("span", {
                  className: V.embedFooterText,
                  children: [
                    e.text,
                    null != e.text && null != l
                      ? (0, i.jsx)("span", {
                          className: V.embedFooterSeparator,
                          children: "•",
                        })
                      : null,
                    null != l ? (0, N.Y4)(l) : null,
                  ],
                }),
              ],
            });
          }
          if (null != l)
            return (0, i.jsx)("div", {
              className: o()(V.embedFooter, V.embedMargin),
              children: (0, i.jsx)("span", {
                className: V.embedFooterText,
                children: (0, N.Y4)(l),
              }),
            });
        }
        renderMedia() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: l } = this.props,
            { isVisible: t } = this.state;
          switch (l.type) {
            case F.hBH.GIFV:
              return this.renderVideo({
                gifv: !0,
                hiddenSpoiler: e,
                isVisible: t,
              });
            case F.hBH.VIDEO:
            default:
              if (null != l.video)
                return this.renderVideo({
                  gifv: !1,
                  hiddenSpoiler: e,
                  isVisible: t,
                });
              if (null != l.images)
                return this.renderImages({ hiddenSpoiler: e, isVisible: t });
              return this.renderImage({
                hiddenSpoiler: e,
                isVisible: t,
                image: l.image,
                alt: l.rawTitle,
              });
          }
        }
        renderAll() {
          let e, l;
          let { embed: t, hideMedia: n } = this.props,
            { isVisible: i } = this.state,
            r = this.renderProvider(i),
            a = this.renderAuthor(i),
            o = this.renderTitle(i);
          switch (t.type) {
            case F.hBH.IMAGE:
            case F.hBH.VIDEO:
            case F.hBH.GIFV:
              break;
            default:
              e = this.renderDescription();
          }
          let s = this.renderFields();
          !n && (l = this.renderMedia(!i));
          let d = this.renderFooter(),
            u = null == l;
          return (
            t.type === F.hBH.RICH && (u = null == t.video),
            {
              provider: r,
              author: a,
              title: o,
              description: e,
              thumbnail: !n && u ? this.renderThumbnail(i) : null,
              fields: s,
              media: l,
              footer: d,
            }
          );
        }
        getMaxWidth(e) {
          let {
              embed: { image: l, images: t, video: n, type: i, thumbnail: r },
            } = this.props,
            { maxMediaWidth: a, maxMediaHeight: o } = this.state,
            s = null != l ? l : n;
          if (null == s) return;
          let { width: d } = (0, A.Tj)({
            width: s.width,
            height: s.height,
            maxWidth: a,
            maxHeight: o,
          });
          if (!e && (i === F.hBH.VIDEO || d >= 300)) return d + 32;
          if (i === F.hBH.RICH && void 0 !== t) return 520;
          if (i === F.hBH.GIFV) {
            var u, m, h, c;
            let { width: e } = (0, A.Tj)({
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
              maxHeight: o,
            });
            return e;
          }
        }
        getMinSize() {
          let { video: e } = this.props.embed;
          return null != e ? { minWidth: 150, minHeight: 144 } : void 0;
        }
        isInline() {
          let { hideMedia: e, embed: l } = this.props;
          return !e && (0, S.dY)(l);
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
            e.type === F.hBH.IMAGE ||
            e.type === F.hBH.VIDEO ||
            e.type === F.hBH.GIFV ||
            ((e.type === F.hBH.RICH || e.type === F.hBH.ARTICLE) &&
              (null != e.video || null != e.image))
          );
        }
        getEmbedColor(e) {
          let { color: l } = this.props.embed;
          return (null != l && "#ffffff" === l.toLowerCase()) || e ? void 0 : l;
        }
        getSpoilerStyles(e) {
          let {
              embed: { image: l, images: t, video: n, type: i },
            } = this.props,
            { maxMediaWidth: r, maxMediaHeight: a } = this.state;
          if (!this.usesJustifiedAutoStyle()) return;
          let o = e ? void 0 : this.getMaxWidth(!1);
          if (void 0 === o && void 0 === t && i !== F.hBH.RICH) {
            let e = null != l ? l : n;
            if (void 0 !== e) {
              var s;
              let { minWidth: l, minHeight: t } =
                  null !== (s = this.getMinSize()) && void 0 !== s ? s : {},
                { width: n } = (0, A.Tj)({
                  width: e.width,
                  height: e.height,
                  maxWidth: r,
                  maxHeight: a,
                  minWidth: l,
                  minHeight: t,
                });
              o = n;
            }
          }
          return {
            maxWidth: void 0 === o ? "max-content" : o,
            justifySelf: "auto",
          };
        }
        render() {
          var e;
          let { embed: l, obscureReason: t, className: n } = this.props;
          return null != l.provider && M.j.includes(l.provider.name)
            ? (0, i.jsx)(M.Z, { embed: l, className: n })
            : (0, y.Z)(l)
              ? (0, i.jsx)(_.Z, { embed: l, className: n })
              : (null === (e = l.provider) || void 0 === e
                    ? void 0
                    : e.name) === "Amazon Music" && l.type === F.hBH.RICH
                ? (0, i.jsx)(b.Z, { embed: l, className: n })
                : this.isInline()
                  ? null != t
                    ? (0, i.jsx)(h.Z, {
                        type: h.Z.Types.ATTACHMENT,
                        reason: t,
                        onReveal: this.onReveal,
                        onToggleObscurity: this.onToggleObscurity,
                        isSingleMosaicItem: !0,
                        containerStyles: this.getSpoilerStyles(!0),
                        obscurityControlClassName: o()({
                          [V.obscureVideoSpacing]:
                            this.state.isVisible &&
                            this.state.videoControlsShown,
                        }),
                        children: this.renderInlineMediaEmbed,
                      })
                    : this.renderInlineMediaEmbed()
                  : null != t
                    ? (0, i.jsx)(h.Z, {
                        type: h.Z.Types.EMBED,
                        onReveal: this.onReveal,
                        onToggleObscurity: this.onToggleObscurity,
                        reason: t,
                        isSingleMosaicItem: !0,
                        containerStyles: this.getSpoilerStyles(!1),
                        children: this.renderEmbedContent,
                      })
                    : this.renderEmbedContent();
        }
        constructor(...e) {
          var l;
          super(...e),
            (l = this),
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
              ...(0, S.vP)(this.props.embed),
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
                { obscureReason: t, className: n } = l.props,
                r = l.getMaxWidth(!0);
              return (0, i.jsx)("div", {
                "aria-hidden": e,
                className: o()(V.inlineMediaEmbed, n, {
                  [V.spoilerAttachment]: t === x.wk.SPOILER,
                  [V.hiddenExplicitAttachment]:
                    null != t &&
                    [
                      x.wk.EXPLICIT_CONTENT,
                      x.wk.POTENTIAL_EXPLICIT_CONTENT,
                    ].includes(t),
                  [V.isHidden]: e,
                  [V.justifyAuto]: l.usesJustifiedAutoStyle(),
                  [P.embedFlexGrow]: null != r,
                }),
                style: { maxWidth: r },
                children: l.renderMedia(e),
              });
            }),
            W(this, "renderEmbedContent", function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                {
                  className: t,
                  onSuppressEmbed: n,
                  obscureReason: r,
                } = l.props,
                {
                  provider: a,
                  author: s,
                  title: d,
                  description: u,
                  fields: m,
                  thumbnail: h,
                  media: c,
                  footer: p,
                } = l.renderAll();
              return (0, i.jsx)("article", {
                className: o()(t, P.embedFlexGrow, V.embedFull, R.markup, {
                  [V.isHidden]: e,
                  [V.spoilerEmbed]: r === x.wk.SPOILER,
                  [V.hiddenExplicitEmbed]:
                    null != r &&
                    [
                      x.wk.EXPLICIT_CONTENT,
                      x.wk.POTENTIAL_EXPLICIT_CONTENT,
                    ].includes(r),
                  [V.justifyAuto]: l.usesJustifiedAutoStyle(),
                }),
                "aria-hidden": e,
                style: {
                  borderLeftColor: l.getEmbedColor(e),
                  maxWidth: l.getMaxWidth(!1),
                },
                children: (0, i.jsx)("div", {
                  className: V.gridContainer,
                  children: (0, i.jsxs)("div", {
                    className: o()({
                      [V.grid]: !0,
                      [V.hasThumbnail]: null != h,
                    }),
                    children: [
                      null != n ? l.renderSuppressButton(n) : null,
                      a,
                      s,
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
      W(O, "defaultProps", {
        hideMedia: !1,
        allowFullScreen: !0,
        maxThumbnailWidth: 80,
        maxThumbnailHeight: 80,
        embedIndex: 0,
      });
    },
    468846: function (e, l, t) {
      t.d(l, {
        ZP: function () {
          return c;
        },
        pn: function () {
          return i;
        },
      });
      var n,
        i,
        r = t(200651),
        a = t(192379),
        o = t(591759),
        s = t(340702);
      function d(e, l) {
        let t = o.Z.toURLSafe(null != e ? e : "");
        if (null === t) return "";
        if (null == l) return t.toString();
        for (let e in l) {
          let n = l[e];
          null != n && t.searchParams.set(e, n);
        }
        return t.toString();
      }
      function u(e) {
        let { src: l, autoMute: t, ...n } = e,
          i = a.useRef(null),
          o = a.useCallback(
            (e) => {
              if (
                !!e.data["x-tiktok-player"] &&
                "https://www.tiktok.com" === e.origin
              ) {
                if ("onPlayerReady" === e.data.type) {
                  var l, n, r, a;
                  t &&
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
                      null === (l = n.contentWindow) ||
                      void 0 === l ||
                      l.postMessage(
                        { type: "play", "x-tiktok-player": !0 },
                        e.origin,
                      );
                }
              }
            },
            [t],
          );
        a.useEffect(
          () => (
            window.addEventListener("message", o),
            () => window.removeEventListener("message", o)
          ),
          [o],
        );
        let s = d(l, { utm_source: "discord.gg" });
        return (0, r.jsx)(h, { src: s, ref: i, ...n });
      }
      function m(e) {
        let { src: l, autoMute: t, ...n } = e,
          i = d(l, { autoplay: "1", auto_play: "1", mute: t ? "1" : void 0 });
        return (0, r.jsx)(h, { src: i, ...n });
      }
      let h = a.forwardRef(function (e, l) {
        return (0, r.jsx)("iframe", {
          ref: l,
          className: s.embedIframe,
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
      ((n = i || (i = {})).YOUTUBE = "YouTube"), (n.TIKTOK = "TikTok");
    },
    401419: function (e, l, t) {
      t.d(l, {
        Z: function () {
          return c;
        },
        j: function () {
          return m;
        },
      });
      var n = t(200651);
      t(192379);
      var i = t(120356),
        r = t.n(i),
        a = t(729594),
        o = t(388032),
        s = t(112197);
      let d = [
          "sessionshare.sp-int.playstation.com",
          "session-share.playstation.com",
        ],
        u = (e, l, t) =>
          "https://".concat(e, "/embed/").concat(l, "?locale=").concat(t),
        m = ["PlayStation"],
        h = (e, l) => {
          let { host: t, pathname: n } = l,
            i = [];
          switch ((null != n && (i = n.split("/")), e)) {
            case "PlayStation":
              if (null == t || !d.includes(t) || 2 !== i.length) break;
              return {
                embedUrl: u(t, i[1], o.intl.currentLocale),
                style: { width: 400, height: 300, borderRadius: 6 },
              };
          }
          return null;
        };
      function c(e) {
        var l;
        let t = e.embed.url,
          i = null === (l = e.embed.provider) || void 0 === l ? void 0 : l.name;
        if (null == t || null == i) return null;
        let o = null;
        try {
          o = a.parse(t, !0);
        } catch (e) {
          return null;
        }
        let d = h(i, o);
        return null == d
          ? null
          : (0, n.jsx)("iframe", {
              src: d.embedUrl,
              className: r()(s.embedIFrame, e.className),
              style: d.style,
              sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
            });
      }
    },
    624195: function (e, l, t) {
      t.d(l, {
        Z: function () {
          return u;
        },
      });
      var n = t(200651);
      t(192379);
      var i = t(120356),
        r = t.n(i),
        a = t(729594),
        o = t(340702);
      let s = RegExp(
        "^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)",
      );
      function d(e) {
        let l = null,
          t = null,
          n = null;
        try {
          (l = (n = a.parse(e, !0)).host), (t = n.pathname);
        } catch (e) {
          return null;
        }
        return null != n && s.test(null != l ? l : "") && null != t ? n : null;
      }
      function u(e) {
        let {
          className: l,
          embed: { url: t, thumbnail: i },
        } = e;
        if (null == t || null == i) return null;
        let a = d(t);
        if (null == a) return null;
        let s = a.query.iframe_url;
        if (null == s || Array.isArray(s) || null == d(s)) return null;
        let { width: u, height: m } = i,
          h = u,
          c = m;
        return (
          (u > 500 || m > 400) &&
            (u > m
              ? ((h = 500), (c = (500 * m) / u))
              : ((h = (400 * u) / m), (c = 400))),
          (0, n.jsx)("iframe", {
            className: r()(o.embedAmazonMusic, l),
            src: s,
            style: { width: h, height: c },
            frameBorder: 0,
            sandbox:
              "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          })
        );
      }
    },
    44824: function (e, l, t) {
      t.d(l, {
        Z: function () {
          return u;
        },
      });
      var n = t(200651),
        i = t(192379),
        r = t(70097),
        a = t(947849),
        o = t(981631),
        s = t(388032);
      function d(e) {
        let {
            poster: l,
            src: t,
            width: a,
            height: s,
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
        (d <= o.N_j && u <= o.XKF) || (d <= o.XKF && u <= o.N_j))
          ? (0, n.jsx)(r.Z, {
              ref: b,
              className: h,
              poster: l,
              src: t,
              width: a,
              height: s,
              responsive: p,
              muted: !0,
              loop: !0,
              autoPlay: m,
              preload: "none",
              "aria-label": c,
            })
          : (0, n.jsx)("img", { alt: "", src: l, width: a, height: s });
      }
      function u(e) {
        let {
          src: l,
          poster: t,
          naturalWidth: i,
          naturalHeight: r,
          responsive: o,
          autoPlay: u,
          className: m,
          playable: h = !0,
          renderImageComponent: c,
          alt: p = s.intl.string(s.t.I5gL2N),
          sourceMetadata: b,
          ...g
        } = e;
        return (0, n.jsx)(a.h.Consumer, {
          children: (e) =>
            c({
              ...g,
              alt: p,
              src: t,
              containerClassName: m,
              autoPlay: u,
              animated: h,
              responsive: o,
              renderAccessory: e,
              tabIndex: h ? 0 : -1,
              dataSafeSrc: l,
              children(e) {
                let { src: t, size: a, animating: s, alt: u } = e;
                return (0, n.jsx)(d, {
                  alt: u,
                  className: m,
                  poster: t,
                  src: l,
                  width: a.width,
                  height: a.height,
                  naturalWidth: i,
                  naturalHeight: r,
                  responsive: o,
                  play: h && s,
                });
              },
              sourceMetadata: b,
              analyticsSource: "LazyGIFV",
            }),
        });
      }
    },
    94396: function (e, l, t) {
      t.d(l, {
        _: function () {
          return o;
        },
      }),
        t(47120),
        t(192379);
      var n = t(513431),
        i = t(312097),
        r = t(52824),
        a = t(230569);
      function o(e, l, t) {
        let o = {};
        for (let [s, d] of e.entries())
          o[(0, r.q)({ proxyURL: d.proxyUrl, url: d.url })] = (r) =>
            (function (e, l, t) {
              let r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                o = arguments.length > 4 ? arguments[4] : void 0;
              e.preventDefault(),
                (0, n.k)(e.currentTarget) && e.currentTarget.blur(),
                (0, i.K)({
                  ...r,
                  className: a.forcedTransparency,
                  items: l,
                  startingIndex: t,
                  location: null != o ? o : "zoomedMediaModalHelper",
                });
            })(r, e, s, l, t);
        return o;
      }
    },
    785992: function (e, l, t) {
      t.d(l, {
        E: function () {
          return r;
        },
        Z: function () {
          return a;
        },
      });
      var n = t(729594),
        i = t(981631);
      function r(e) {
        return null != e && "open.spotify.com" === e;
      }
      function a(e) {
        var l;
        if (
          null == e.url ||
          (null === (l = e.provider) || void 0 === l ? void 0 : l.name) !==
            "Spotify" ||
          e.type !== i.hBH.LINK
        )
          return !1;
        try {
          let l = n.parse(e.url, !0).host;
          return r(l);
        } catch (e) {
          return !1;
        }
      }
    },
    400266: function (e, l, t) {
      t.d(l, {
        Z: function () {
          return u;
        },
      }),
        t(757143);
      var n = t(200651);
      t(192379);
      var i = t(120356),
        r = t.n(i),
        a = t(729594),
        o = t(785992),
        s = t(616922),
        d = t(340702);
      function u(e) {
        let {
          className: l,
          embed: { url: t },
        } = e;
        if (null == t) return null;
        let i = null,
          u = null;
        try {
          let e = a.parse(t.replace(/intl-[^/]+\//, ""), !0);
          (i = e.host), (u = e.pathname);
        } catch (e) {
          return null;
        }
        if (!(0, o.E)(i) || null == u) return null;
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
            className: r()(d.embedSpotify, l),
            src: s.C7.EMBED(u),
            style: { width: 400, height: b },
            frameBorder: 0,
            sandbox:
              "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          })
        );
      }
    },
    974378: function (e, l, t) {
      e.exports = { title: "title_d9a510" };
    },
    340702: function (e, l, t) {
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
    112197: function (e, l, t) {
      e.exports = { embedIFrame: "embedIFrame_c0e1f8" };
    },
    740909: function (e, l, t) {
      e.exports = {
        hoverButtonGroup: "hoverButtonGroup_d0395d",
        forceShowHover: "forceShowHover_d0395d",
        hoverButton: "hoverButton_d0395d",
        selected: "selected_d0395d",
        nonMediaMosaicItem: "nonMediaMosaicItem_d0395d",
        sizer: "sizer_d0395d",
      };
    },
    303511: function (e, l, t) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    230569: function (e, l, t) {
      e.exports = {
        carouselModal: "carouselModal_c9eb31",
        mobileCloseWrapper: "mobileCloseWrapper_c9eb31",
        forcedTransparency: "forcedTransparency_c9eb31",
      };
    },
    803205: function (e, l, t) {
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
//# sourceMappingURL=2815f44ce6902a351348.js.map
