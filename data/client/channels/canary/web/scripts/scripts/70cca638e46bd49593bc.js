"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60365"],
  {
    446411: function (e, l, t) {
      t.d(l, {
        BC: function () {
          return D;
        },
        ZP: function () {
          return Z;
        },
      }),
        t(47120),
        t(653041);
      var n,
        i = t(200651),
        r = t(192379),
        a = t(120356),
        s = t.n(a),
        o = t(892814),
        d = t(481060),
        u = t(399654),
        m = t(370298),
        h = t(95398),
        c = t(947849),
        p = t(768494),
        b = t(982330),
        g = t(624195),
        v = t(44824),
        f = t(124347),
        x = t(283756),
        I = t(587906),
        _ = t(169525),
        y = t(94396),
        w = t(785992),
        C = t(400266),
        E = t(592125),
        T = t(52824),
        S = t(626135),
        A = t(585483),
        N = t(55935),
        M = t(408433),
        j = t(956664),
        k = t(468846),
        H = t(401419),
        F = t(249458),
        L = t(981631),
        V = t(217702),
        B = t(388032),
        R = t(829033),
        P = t(985146),
        W = t(882530),
        O = t(329290);
      function G(e, l, t) {
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
      function D(e) {
        var l, t;
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
            playable: f = !0,
            autoPlay: I = !1,
            autoMute: _,
            volume: y,
            onPlay: w,
            onPause: C,
            onEnded: E,
            onControlsHide: S,
            onControlsShow: N,
            onVolumeChange: M,
            onMute: H,
            href: F,
            placeholder: V,
            placeholderVersion: B,
            sourceMetadata: P,
          } = e,
          [W, O] = r.useState(I),
          G = null != m && null == m.proxyURL,
          D = r.useCallback(() => O(!1), [O]),
          U = (e) => {
            e.preventDefault(),
              e.stopPropagation(),
              null == w || w(!1),
              O(!0),
              G &&
                (A.S.dispatch(L.CkL.VIDEO_EMBED_PLAYBACK_STARTED),
                A.S.subscribeOnce(L.CkL.VIDEO_EMBED_PLAYBACK_STARTED, D));
          };
        r.useEffect(
          () => () => {
            G && A.S.unsubscribe(L.CkL.VIDEO_EMBED_PLAYBACK_STARTED, D);
          },
          [G, D],
        );
        let { width: Z, height: q } = u;
        null != m && ((Z = m.width), (q = m.height));
        let z = (0, j.Tj)({ width: Z, height: q, maxWidth: o, maxHeight: d });
        (Z = Math.max(z.width, 150)), (q = Math.max(z.height, 144));
        let X = (0, T.q)(u);
        if (null != m && null != m.proxyURL)
          return (0, i.jsx)("div", {
            className: s()(R.embedVideo, n),
            children: g({
              poster: X,
              src: m.proxyURL,
              placeholder: V,
              placeholderVersion: B,
              width: Z,
              height: q,
              responsive: p,
              autoPlay: I,
              onEnded: E,
              naturalWidth: m.width,
              naturalHeight: m.height,
              onVolumeChange: M,
              playable: f,
              autoMute: _,
              volume: y,
              onPlay: w,
              onPause: C,
              onMute: H,
              onControlsHide: S,
              onControlsShow: N,
              sourceMetadata: P,
            }),
          });
        if (W && null != m) {
          let e;
          let l = !0 === _ || ("function" == typeof _ && _()),
            t = { width: Z, height: q },
            r = { width: Z, height: q };
          if (p) {
            let l = 0 !== Z ? q / Z : 1;
            (t = { maxWidth: o, maxHeight: d, width: void 0, height: void 0 }),
              (r = { paddingBottom: "".concat(100 * l, "%"), maxWidth: Z }),
              (e = {
                position: "absolute",
                top: 0,
                left: 0,
                maxWidth: Z,
                maxHeight: q,
              });
          }
          return (0, i.jsx)("div", {
            className: n,
            style: t,
            children: (0, i.jsx)("div", {
              className: s()(R.embedVideo, a),
              style: r,
              children: (0, i.jsx)(k.ZP, {
                provider: h,
                src: m.url,
                style: e,
                width: Z,
                height: q,
                allowFullScreen: c,
                autoMute: l,
              }),
            }),
          });
        }
        return (0, i.jsxs)("div", {
          className: s()(R.embedVideo, n),
          style: p ? { maxWidth: Z } : { width: Z, height: q },
          children: [
            b({
              src: X,
              width: Z,
              height: q,
              maxWidth: Z,
              maxHeight: q,
              responsive: p,
              containerClassName: R.embedVideoImageComponent,
              imageClassName: R.embedVideoImageComponentInner,
              placeholder: V,
              placeholderVersion: B,
              onClick: f && null != m ? U : null,
              sourceMetadata: P,
            }),
            (0, i.jsx)("div", {
              className: R.embedVideoActions,
              children: (0, i.jsx)("div", {
                className: R.centerContent,
                children: f
                  ? (0, i.jsx)(x.Z, {
                      onPlay: null != m ? U : null,
                      externalURL: F,
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
      function U(e) {
        let {
          className: l,
          href: t,
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
          placeholder: g,
          placeholderVersion: f,
          sourceMetadata: x,
        } = e;
        return (0, i.jsx)(v.Z, {
          className: s()(R.embedVideo, l),
          original: t,
          poster: (0, T.q)(o),
          src: (0, T.q)(d),
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
          placeholder: g,
          placeholderVersion: f,
          sourceMetadata: x,
        });
      }
      class Z extends (n = r.PureComponent) {
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
                className: s()(R.embedProvider, R.embedMargin),
                children:
                  null != l.url
                    ? t({
                        className: R.embedLink,
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
                className: s()(R.embedAuthor, R.embedMargin),
                children: [
                  null != l.iconProxyURL
                    ? (0, i.jsx)("img", {
                        alt: "",
                        className: R.embedAuthorIcon,
                        src: l.iconProxyURL,
                      })
                    : null,
                  null != l.url
                    ? t({
                        className: R.embedAuthorNameLink,
                        href: l.url,
                        tabIndex: e ? 0 : -1,
                        children: l.name,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        messageId: null == n ? void 0 : n.id,
                        channelId: null == n ? void 0 : n.channel_id,
                      })
                    : (0, i.jsx)("span", {
                        className: R.embedAuthorName,
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
            { rawTitle: a, url: o } = l;
          return null == a
            ? null
            : (0, i.jsx)("div", {
                className: s()(R.embedTitle, R.embedMargin),
                children:
                  null != o
                    ? t({
                        className: R.embedTitleLink,
                        href: o,
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
                className: s()(R.embedDescription, R.embedMargin),
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
            { sourceMetadata: s } = this.state;
          return null == l
            ? null
            : (0, i.jsx)(F.G.Consumer, {
                children: (i) => {
                  let { disableAnimations: o } = i;
                  return r({
                    containerClassName: R.embedThumbnail,
                    src: (0, T.q)(l),
                    original: l.url,
                    width: l.width,
                    height: l.height,
                    maxWidth: t,
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
              className: R.embedFields,
              children: t.map((e, l) => {
                let { length: t } = e;
                return e.map((e, n) => {
                  let [r, a] = e;
                  return (0, i.jsxs)(
                    "div",
                    {
                      className: R.embedField,
                      style: {
                        gridColumn: (function (e, l) {
                          let t = 12 / l,
                            n = e * t;
                          return "".concat(n + 1, " / ").concat(n + t + 1);
                        })(n, t),
                      },
                      children: [
                        (0, i.jsx)("div", {
                          className: R.embedFieldName,
                          children: r,
                        }),
                        (0, i.jsx)("div", {
                          className: R.embedFieldValue,
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
          let [r, a, s, o] = t.images.map((n) =>
            this.renderImage({
              hiddenSpoiler: e,
              isVisible: l,
              image: n,
              isGalleryImage: !0,
              allImages: t.images,
            }),
          );
          return null == r && null == a && null == s && null == o
            ? null
            : (0, i.jsxs)("div", {
                className: R.embedGalleryImagesWrapper,
                style: { height: n },
                children: [
                  (0, i.jsxs)("div", {
                    className: R.embedGallerySide,
                    children: [r, null != o && s],
                  }),
                  (0, i.jsxs)("div", {
                    className: R.embedGallerySide,
                    children: [a, null == o && null != s && s, null != o && o],
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
            onView: a,
            showImageRecs: o,
          } = e;
          return (0, i.jsxs)("div", {
            className: s()(P.hoverButtonGroup, {
              [P.nonMediaMosaicItem]: !n,
              [P.forceShowHover]: this.state.showImageAppMenu,
            }),
            children: [
              null != a &&
                (0, i.jsx)(I.Z, { className: P.hoverButton, onClick: a }),
              o &&
                null != r &&
                (0, i.jsx)(m.Z, {
                  toggleShowMenu: () => {
                    this.setState({
                      showImageAppMenu: !this.state.showImageAppMenu,
                    });
                  },
                  showMenu: this.state.showImageAppMenu,
                  channelId: r,
                  className: s()(P.hoverButton, {
                    [P.selected]: this.state.showImageAppMenu,
                  }),
                  imageUrl: t,
                  mimeType: l,
                }),
            ],
          });
        }
        handleImageHover(e, l, t) {
          if (t) {
            if (e && !this.state.isImageHovered) {
              var n, i;
              this.setState({ isImageHovered: !0 });
              let e = E.Z.getChannel(
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
                S.default.track(L.rMx.IMAGE_HOVERED, {
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
              image: o,
              isGalleryImage: d = !1,
              alt: u = B.intl.string(B.t.X4IxWF),
              allImages: m = null,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            {
              renderImageComponent: h,
              className: g,
              autoPlayGif: v,
            } = this.props,
            {
              maxMediaWidth: x,
              maxMediaHeight: I,
              sourceMetadata: _,
            } = this.state;
          if (null == o) return null;
          let w = (0, T.q)(o),
            C =
              null == m
                ? (0, y._)([
                    {
                      ...(0, p.Hv)(o, _, "IMAGE"),
                      original: o.url,
                      srcIsAnimated: o.srcIsAnimated,
                    },
                  ])
                : (0, y._)(
                    m.map((e) => ({
                      ...(0, p.Hv)(e, _, "IMAGE"),
                      original: e.url,
                      srcIsAnimated: e.srcIsAnimated,
                    })),
                  ),
            E = null != m,
            S = f.ZP.isAnimated({
              src: (0, T.q)(o),
              original: o.url,
              animated: !1,
              srcIsAnimated: o.srcIsAnimated,
            }),
            A = {
              containerClassName: s()(g, {
                [R.embedMedia]: !d,
                [R.embedImage]: !d,
                [R.galleryImage]: d,
              }),
              imageContainerClassName: d ? R.galleryImageContainer : void 0,
              imageClassName: d ? R.embedGalleryImageElement : void 0,
              src: (0, T.q)(o),
              alt: u,
              responsive: !0,
              limitResponsiveWidth: !d,
              width: o.width,
              height: o.height,
              maxWidth: x,
              maxHeight: I,
              original: o.url,
              shouldLink: a,
              disableAltTextDisplay: !0,
              hiddenSpoilers: r,
              placeholder: o.placeholder,
              placeholderVersion: o.placeholderVersion,
              srcIsAnimated: o.srcIsAnimated,
            };
          w in C && E && (A.onClick = C[w]);
          let N =
            null !==
              (n =
                null === (e = o.url.split(".").pop()) || void 0 === e
                  ? void 0
                  : e.split("?")[0]) && void 0 !== n
              ? n
              : "";
          "jpg" === N && (N = "jpeg");
          let M =
              null != o &&
              !f.uo.test(null == o ? void 0 : o.url) &&
              !(o.srcIsAnimated && f.YG.test(null == o ? void 0 : o.url)),
            j =
              null != this.props.showImageRecs &&
              this.props.showImageRecs &&
              !0 !== this.props.isSearchResult &&
              a &&
              (null === (l = this.props.message) || void 0 === l
                ? void 0
                : l.channel_id) != null &&
              (null === (t = this.props.message) || void 0 === t
                ? void 0
                : t.channel_id) !== void 0 &&
              M &&
              !(function (e) {
                return null != e && (e.width <= V.OF || e.height <= V.OF);
              })(o) &&
              null != N,
            k = (0, b.cS)("Embed"),
            H = j || k;
          return (0, i.jsx)(c.h.Consumer, {
            children: (e) =>
              (0, i.jsx)(
                F.G.Consumer,
                {
                  children: (l) => {
                    let { disableAnimations: t } = l;
                    return h({
                      ...A,
                      autoPlay: v && !t && !r,
                      renderAccessory: S ? e : null,
                      onMouseEnter: () => this.handleImageHover(!0, o, H),
                      onMouseLeave: () => this.handleImageHover(!1, o, H),
                      renderAdjacentContent: () => {
                        var e, l;
                        return H
                          ? this.renderImageHoverButtons({
                              onView: k ? C[w] : void 0,
                              mimeType: ["image", N],
                              downloadURL:
                                null !== (l = o.proxyURL) && void 0 !== l
                                  ? l
                                  : o.url,
                              isVisualMediaType: null != o,
                              channelId:
                                null === (e = this.props.message) ||
                                void 0 === e
                                  ? void 0
                                  : e.channel_id,
                              showImageRecs: j,
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
              isVisible: l = !0,
              hiddenSpoiler: t = !1,
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
              : (0, i.jsx)(F.G.Consumer, {
                  children: (e) => {
                    let { disableAnimations: s } = e;
                    return (0, i.jsx)(U, {
                      className: R.embedMedia,
                      href: n,
                      thumbnail: r,
                      video: a,
                      maxWidth: p,
                      maxHeight: b,
                      responsive: !0,
                      autoPlay: !t && h && !s && l,
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
          return (0, i.jsx)(D, {
            className: R.embedMedia,
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
              className: s()(R.embedFooter, R.embedMargin),
              children: [
                null != t
                  ? (0, i.jsx)("img", {
                      alt: "",
                      className: R.embedFooterIcon,
                      src: t,
                    })
                  : null,
                (0, i.jsxs)("span", {
                  className: R.embedFooterText,
                  children: [
                    e.text,
                    null != e.text && null != l
                      ? (0, i.jsx)("span", {
                          className: R.embedFooterSeparator,
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
              className: s()(R.embedFooter, R.embedMargin),
              children: (0, i.jsx)("span", {
                className: R.embedFooterText,
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
            case L.hBH.GIFV:
              return this.renderVideo({
                gifv: !0,
                hiddenSpoiler: e,
                isVisible: t,
              });
            case L.hBH.VIDEO:
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
            s = this.renderTitle(i);
          switch (t.type) {
            case L.hBH.IMAGE:
            case L.hBH.VIDEO:
            case L.hBH.GIFV:
              break;
            default:
              e = this.renderDescription();
          }
          let o = this.renderFields();
          !n && (l = this.renderMedia(!i));
          let d = this.renderFooter(),
            u = null == l;
          return (
            t.type === L.hBH.RICH && (u = null == t.video),
            {
              provider: r,
              author: a,
              title: s,
              description: e,
              thumbnail: !n && u ? this.renderThumbnail(i) : null,
              fields: o,
              media: l,
              footer: d,
            }
          );
        }
        getMaxWidth(e) {
          let {
              embed: { image: l, images: t, video: n, type: i, thumbnail: r },
            } = this.props,
            { maxMediaWidth: a, maxMediaHeight: s } = this.state,
            o = null != l ? l : n;
          if (null == o) return;
          let { width: d } = (0, j.Tj)({
            width: o.width,
            height: o.height,
            maxWidth: a,
            maxHeight: s,
          });
          if (!e && (i === L.hBH.VIDEO || d >= 300)) return d + 32;
          if (i === L.hBH.RICH && void 0 !== t) return 520;
          if (i === L.hBH.GIFV) {
            var u, m, h, c;
            let { width: e } = (0, j.Tj)({
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
        isInline() {
          let { hideMedia: e, embed: l } = this.props;
          return !e && (0, M.dY)(l);
        }
        renderSuppressButton(e) {
          return (0, i.jsx)(d.Clickable, {
            focusProps: { offset: { bottom: 4 } },
            className: R.embedSuppressButton,
            onClick: e,
            "aria-label": B.intl.string(B.t.GT3fNz),
            children: (0, i.jsx)(d.XSmallIcon, {
              size: "xs",
              color: "currentColor",
            }),
          });
        }
        usesJustifiedAutoStyle() {
          let { embed: e } = this.props;
          return (
            e.type === L.hBH.IMAGE ||
            e.type === L.hBH.VIDEO ||
            e.type === L.hBH.GIFV ||
            ((e.type === L.hBH.RICH || e.type === L.hBH.ARTICLE) &&
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
          let s = e ? void 0 : this.getMaxWidth(!1);
          if (void 0 === s && void 0 === t && i !== L.hBH.RICH) {
            let e = null != l ? l : n;
            if (void 0 !== e) {
              let { width: l } = (0, j.Tj)({
                width: e.width,
                height: e.height,
                maxWidth: r,
                maxHeight: a,
              });
              s = l;
            }
          }
          return {
            maxWidth: void 0 === s ? "max-content" : s,
            justifySelf: "auto",
          };
        }
        render() {
          var e;
          let { embed: l, obscureReason: t, className: n } = this.props;
          return null != l.provider && H.j.includes(l.provider.name)
            ? (0, i.jsx)(H.Z, { embed: l, className: n })
            : (0, w.Z)(l)
              ? (0, i.jsx)(C.Z, { embed: l, className: n })
              : (null === (e = l.provider) || void 0 === e
                    ? void 0
                    : e.name) === "Amazon Music" && l.type === L.hBH.RICH
                ? (0, i.jsx)(g.Z, { embed: l, className: n })
                : this.isInline()
                  ? null != t
                    ? (0, i.jsx)(h.Z, {
                        type: h.Z.Types.ATTACHMENT,
                        reason: t,
                        onReveal: this.onReveal,
                        onToggleObscurity: this.onToggleObscurity,
                        isSingleMosaicItem: !0,
                        containerStyles: this.getSpoilerStyles(!0),
                        obscurityControlClassName: s()({
                          [R.obscureVideoSpacing]:
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
            G(this, "state", {
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
            G(this, "onReveal", () => {
              this.setState({ isVisible: !0 });
            }),
            G(this, "onToggleObscurity", () => {
              this.setState({ isVisible: !this.state.isVisible });
            }),
            G(this, "renderInlineMediaEmbed", function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                { obscureReason: t, className: n } = l.props,
                r = l.getMaxWidth(!0);
              return (0, i.jsx)("div", {
                "aria-hidden": e,
                className: s()(R.inlineMediaEmbed, n, {
                  [R.spoilerAttachment]: t === _.wk.SPOILER,
                  [R.hiddenExplicitAttachment]:
                    null != t &&
                    [
                      _.wk.EXPLICIT_CONTENT,
                      _.wk.POTENTIAL_EXPLICIT_CONTENT,
                    ].includes(t),
                  [R.isHidden]: e,
                  [R.justifyAuto]: l.usesJustifiedAutoStyle(),
                  [O.embedFlexGrow]: null != r,
                }),
                style: { maxWidth: r },
                children: l.renderMedia(e),
              });
            }),
            G(this, "renderEmbedContent", function () {
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
                  author: o,
                  title: d,
                  description: u,
                  fields: m,
                  thumbnail: h,
                  media: c,
                  footer: p,
                } = l.renderAll();
              return (0, i.jsx)("article", {
                className: s()(t, O.embedFlexGrow, R.embedFull, W.markup, {
                  [R.isHidden]: e,
                  [R.spoilerEmbed]: r === _.wk.SPOILER,
                  [R.hiddenExplicitEmbed]:
                    null != r &&
                    [
                      _.wk.EXPLICIT_CONTENT,
                      _.wk.POTENTIAL_EXPLICIT_CONTENT,
                    ].includes(r),
                  [R.justifyAuto]: l.usesJustifiedAutoStyle(),
                }),
                "aria-hidden": e,
                style: {
                  borderColor: l.getEmbedColor(e),
                  maxWidth: l.getMaxWidth(!1),
                },
                children: (0, i.jsx)("div", {
                  className: R.gridContainer,
                  children: (0, i.jsxs)("div", {
                    className: s()({
                      [R.grid]: !0,
                      [R.hasThumbnail]: null != h,
                    }),
                    children: [
                      null != n ? l.renderSuppressButton(n) : null,
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
      G(Z, "defaultProps", {
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
        s = t(729594),
        o = t(829033);
      function d(e, l) {
        let t = s.parse(null != e ? e : "", !0);
        return (t.query = { ...t.query, ...l }), (t.search = null), s.format(t);
      }
      function u(e) {
        let { src: l, autoMute: t, ...n } = e,
          i = a.useRef(null),
          s = a.useCallback(
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
            window.addEventListener("message", s),
            () => window.removeEventListener("message", s)
          ),
          [s],
        );
        let o = d(l, { utm_source: "discord.gg" });
        return (0, r.jsx)(h, { src: o, ref: i, ...n });
      }
      function m(e) {
        let { src: l, autoMute: t, ...n } = e,
          i = d(l, { autoplay: "1", auto_play: "1", mute: t ? "1" : void 0 });
        return (0, r.jsx)(h, { src: i, ...n });
      }
      let h = a.forwardRef(function (e, l) {
        return (0, r.jsx)("iframe", {
          ref: l,
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
        s = t(388032),
        o = t(970884);
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
                embedUrl: u(t, i[1], s.intl.currentLocale),
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
        let s = null;
        try {
          s = a.parse(t, !0);
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
        s = t(829033);
      let o = RegExp(
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
        return null != n && o.test(null != l ? l : "") && null != t ? n : null;
      }
      function u(e) {
        let {
          className: l,
          embed: { url: t, thumbnail: i },
        } = e;
        if (null == t || null == i) return null;
        let a = d(t);
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
            className: r()(s.embedAmazonMusic, l),
            src: o,
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
        s = t(981631),
        o = t(388032);
      function d(e) {
        let {
            poster: l,
            src: t,
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
              poster: l,
              src: t,
              width: a,
              height: o,
              responsive: p,
              muted: !0,
              loop: !0,
              autoPlay: m,
              preload: "none",
              "aria-label": c,
            })
          : (0, n.jsx)("img", { alt: "", src: l, width: a, height: o });
      }
      function u(e) {
        let {
          src: l,
          poster: t,
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
              src: t,
              containerClassName: m,
              autoPlay: u,
              animated: h,
              responsive: s,
              renderAccessory: e,
              tabIndex: h ? 0 : -1,
              dataSafeSrc: l,
              children(e) {
                let { src: t, size: a, animating: o, alt: u } = e;
                return (0, n.jsx)(d, {
                  alt: u,
                  className: m,
                  poster: t,
                  src: l,
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
    254109: function (e, l, t) {
      t.d(l, {
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
      var n = t(905837),
        i = t(731965),
        r = t(626135),
        a = t(981631);
      let s = {
          guildId: void 0,
          channelId: void 0,
          channelType: void 0,
          viewerSwipes: 0,
          thumbnailSwipes: 0,
          selectedItemChanges: 0,
          numMediaItems: 0,
        },
        o = (0, n.Ue)(() => s);
      function d(e, l, t, n) {
        (0, i.j)(() =>
          o.setState({
            ...s,
            guildId: e,
            channelId: l,
            channelType: t,
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
    94396: function (e, l, t) {
      t.d(l, {
        _: function () {
          return u;
        },
      }),
        t(47120),
        t(192379);
      var n = t(374470),
        i = t(254109),
        r = t(312097),
        a = t(52824),
        s = t(626135),
        o = t(981631),
        d = t(431548);
      function u(e, l, t) {
        let u = {};
        for (let [m, h] of e.entries())
          u[(0, a.q)({ proxyURL: h.proxyUrl, url: h.url })] = (a) =>
            (function (e, l, t) {
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
                    l.length,
                  )),
                (0, r.K)({
                  ...a,
                  className: d.forcedTransparency,
                  onIndexChange: null != u ? i.f0 : void 0,
                  items: l,
                  startingIndex: t,
                  location: "zoomedMediaModalHelper",
                  onCloseCallback: null != u ? i.VO : void 0,
                });
            })(a, e, m, l, t);
        return u;
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
        s = t(785992),
        o = t(616922),
        d = t(829033);
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
            className: r()(d.embedSpotify, l),
            src: o.C7.EMBED(u),
            style: { width: 400, height: b },
            frameBorder: 0,
            sandbox:
              "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          })
        );
      }
    },
    379720: function (e, l, t) {
      e.exports = { title: "title_d9a510" };
    },
    829033: function (e, l, t) {
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
    970884: function (e, l, t) {
      e.exports = { embedIFrame: "embedIFrame_c0e1f8" };
    },
    985146: function (e, l, t) {
      e.exports = {
        hoverButtonGroup: "hoverButtonGroup_d0395d",
        forceShowHover: "forceShowHover_d0395d",
        hoverButton: "hoverButton_d0395d",
        selected: "selected_d0395d",
        nonMediaMosaicItem: "nonMediaMosaicItem_d0395d",
      };
    },
    808647: function (e, l, t) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    431548: function (e, l, t) {
      e.exports = {
        carouselModal: "carouselModal_c9eb31",
        mobileCloseWrapper: "mobileCloseWrapper_c9eb31",
        forcedTransparency: "forcedTransparency_c9eb31",
      };
    },
    329290: function (e, l, t) {
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
//# sourceMappingURL=70cca638e46bd49593bc.js.map
