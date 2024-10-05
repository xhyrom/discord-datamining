"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56602"],
  {
    446411: function (e, t, n) {
      n.d(t, {
        BC: function () {
          return W;
        },
        ZP: function () {
          return G;
        },
      }),
        n(47120),
        n(653041);
      var l,
        r = n(735250),
        i = n(470079),
        a = n(120356),
        o = n.n(a),
        s = n(892814),
        d = n(481060),
        u = n(399654),
        m = n(370298),
        h = n(95398),
        c = n(947849),
        p = n(624195),
        b = n(44824),
        g = n(124347),
        f = n(283756),
        v = n(169525),
        x = n(780088),
        I = n(785992),
        y = n(400266),
        w = n(592125),
        _ = n(52824),
        C = n(626135),
        E = n(585483),
        S = n(55935),
        j = n(408433),
        M = n(956664),
        T = n(468846),
        N = n(401419),
        A = n(249458),
        F = n(981631),
        k = n(217702),
        L = n(689938),
        H = n(269625),
        V = n(275703),
        R = n(554034),
        B = n(287847);
      function P(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function W(e) {
        let {
            className: t,
            iframeWrapperClassName: n,
            maxWidth: l,
            maxHeight: a,
            thumbnail: s,
            video: d,
            provider: u,
            allowFullScreen: m = !0,
            responsive: h = !1,
            renderImageComponent: c,
            renderVideoComponent: p,
            renderLinkComponent: b,
            renderForwardComponent: g = F.VqG,
            playable: v = !0,
            autoPlay: x = !1,
            autoMute: I,
            volume: y,
            onPlay: w,
            onPause: C,
            onEnded: S,
            onControlsHide: j,
            onControlsShow: N,
            onVolumeChange: A,
            onMute: k,
            href: L,
            messageId: V,
            channelId: R,
            placeholder: B,
            placeholderVersion: P,
          } = e,
          [W, O] = i.useState(x),
          G = null != d && null == d.proxyURL,
          D = i.useCallback(() => O(!1), [O]),
          Z = (e) => {
            e.preventDefault(),
              e.stopPropagation(),
              null == w || w(!1),
              O(!0),
              G &&
                (E.S.dispatch(F.CkL.VIDEO_EMBED_PLAYBACK_STARTED),
                E.S.subscribeOnce(F.CkL.VIDEO_EMBED_PLAYBACK_STARTED, D));
          };
        i.useEffect(
          () => () => {
            G && E.S.unsubscribe(F.CkL.VIDEO_EMBED_PLAYBACK_STARTED, D);
          },
          [G, D],
        );
        let { width: U, height: q } = s;
        null != d && ((U = d.width), (q = d.height));
        let z = (0, M.Tj)({ width: U, height: q, maxWidth: l, maxHeight: a });
        (U = Math.max(z.width, 150)), (q = Math.max(z.height, 144));
        let K = (0, _.q)(s);
        if (null != d && null != d.proxyURL)
          return (0, r.jsx)("div", {
            className: o()(H.embedVideo, t),
            children: p({
              poster: K,
              src: d.proxyURL,
              placeholder: B,
              placeholderVersion: P,
              width: U,
              height: q,
              responsive: h,
              autoPlay: x,
              onEnded: S,
              naturalWidth: d.width,
              naturalHeight: d.height,
              onVolumeChange: A,
              playable: v,
              autoMute: I,
              volume: y,
              onPlay: w,
              onPause: C,
              onMute: k,
              onControlsHide: j,
              onControlsShow: N,
              renderForwardComponent: g,
            }),
          });
        if (W && null != d) {
          let e;
          let i = !0 === I || ("function" == typeof I && I()),
            s = { width: U, height: q },
            c = { width: U, height: q };
          if (h) {
            let t = 0 !== U ? q / U : 1;
            (s = { maxWidth: l, maxHeight: a, width: void 0, height: void 0 }),
              (c = { paddingBottom: "".concat(100 * t, "%"), maxWidth: U }),
              (e = {
                position: "absolute",
                top: 0,
                left: 0,
                maxWidth: U,
                maxHeight: q,
              });
          }
          return (0, r.jsx)("div", {
            className: t,
            style: s,
            children: (0, r.jsx)("div", {
              className: o()(H.embedVideo, n),
              style: c,
              children: (0, r.jsx)(T.ZP, {
                provider: u,
                src: d.url,
                style: e,
                width: U,
                height: q,
                allowFullScreen: m,
                autoMute: i,
              }),
            }),
          });
        }
        return (0, r.jsxs)("div", {
          className: o()(H.embedVideo, t),
          style: h ? { maxWidth: U } : { width: U, height: q },
          children: [
            c({
              src: K,
              width: U,
              height: q,
              maxWidth: U,
              maxHeight: q,
              responsive: h,
              containerClassName: H.embedVideoImageComponent,
              imageClassName: H.embedVideoImageComponentInner,
              placeholder: B,
              placeholderVersion: P,
              onClick: v && null != d ? Z : null,
              renderForwardComponent: g,
            }),
            (0, r.jsx)("div", {
              className: H.embedVideoActions,
              children: (0, r.jsx)("div", {
                className: H.centerContent,
                children: v
                  ? (0, r.jsx)(f.Z, {
                      onPlay: null != d ? Z : null,
                      externalURL: L,
                      renderLinkComponent: b,
                      messageId: V,
                      channelId: R,
                    })
                  : null,
              }),
            }),
          ],
        });
      }
      function O(e) {
        let {
          className: t,
          href: n,
          autoPlay: l,
          maxWidth: i,
          maxHeight: a,
          thumbnail: s,
          video: d,
          renderImageComponent: u,
          renderForwardComponent: m,
          responsive: h,
          alt: c,
          disableAltTextDisplay: p = !1,
          playable: g = !0,
          hiddenSpoilers: f,
          placeholder: v,
          placeholderVersion: x,
        } = e;
        return (0, r.jsx)(b.Z, {
          className: o()(H.embedVideo, t),
          original: n,
          poster: (0, _.q)(s),
          src: (0, _.q)(d),
          alt: c,
          width: s.width,
          height: s.height,
          naturalHeight: d.height,
          naturalWidth: d.width,
          maxWidth: i,
          maxHeight: a,
          responsive: h,
          autoPlay: l,
          playable: g,
          renderImageComponent: u,
          renderForwardComponent: m,
          hiddenSpoilers: f,
          disableAltTextDisplay: p,
          placeholder: v,
          placeholderVersion: x,
        });
      }
      class G extends (l = i.PureComponent) {
        renderProvider() {
          let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0],
            {
              embed: { provider: t },
              renderLinkComponent: n,
              messageId: l,
              channelId: i,
            } = this.props;
          return null == t
            ? null
            : (0, r.jsx)("div", {
                className: o()(H.embedProvider, H.embedMargin),
                children:
                  null != t.url
                    ? n({
                        className: H.embedLink,
                        href: t.url,
                        tabIndex: e ? 0 : -1,
                        children: t.name,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        messageId: l,
                        channelId: i,
                      })
                    : (0, r.jsx)("span", { children: t.name }),
              });
        }
        renderAuthor() {
          let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0],
            {
              embed: { author: t },
              renderLinkComponent: n,
              messageId: l,
              channelId: i,
            } = this.props;
          return null == t
            ? null
            : (0, r.jsxs)("div", {
                className: o()(H.embedAuthor, H.embedMargin),
                children: [
                  null != t.iconProxyURL
                    ? (0, r.jsx)("img", {
                        alt: "",
                        className: H.embedAuthorIcon,
                        src: t.iconProxyURL,
                      })
                    : null,
                  null != t.url
                    ? n({
                        className: H.embedAuthorNameLink,
                        href: t.url,
                        tabIndex: e ? 0 : -1,
                        children: t.name,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        messageId: l,
                        channelId: i,
                      })
                    : (0, r.jsx)("span", {
                        className: H.embedAuthorName,
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
              renderLinkComponent: n,
              renderTitle: l,
              messageId: i,
              channelId: a,
            } = this.props,
            { rawTitle: s, url: d } = t;
          return null == s
            ? null
            : (0, r.jsx)("div", {
                className: o()(H.embedTitle, H.embedMargin),
                children:
                  null != d
                    ? n({
                        className: H.embedTitleLink,
                        href: d,
                        tabIndex: e ? 0 : -1,
                        children: l(t, s),
                        target: "_blank",
                        rel: "noreferrer noopener",
                        messageId: i,
                        channelId: a,
                      })
                    : l(t, s),
              });
        }
        renderDescription() {
          let { embed: e, renderDescription: t } = this.props,
            { rawDescription: n } = e;
          return null == n
            ? null
            : (0, r.jsx)("div", {
                className: o()(H.embedDescription, H.embedMargin),
                children: t(e, n, !1),
              });
        }
        renderThumbnail() {
          let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0],
            {
              embed: { thumbnail: t },
              maxThumbnailWidth: n,
              maxThumbnailHeight: l,
              renderImageComponent: i,
              renderForwardComponent: a,
              autoPlayGif: o,
            } = this.props;
          return null == t
            ? null
            : (0, r.jsx)(A.G.Consumer, {
                children: (r) => {
                  let { disableAnimations: s } = r;
                  return i({
                    containerClassName: H.embedThumbnail,
                    src: (0, _.q)(t),
                    original: t.url,
                    width: t.width,
                    height: t.height,
                    maxWidth: n,
                    maxHeight: l,
                    shouldLink: e,
                    autoPlay: o && !s,
                    renderForwardComponent: a,
                  });
                },
              });
        }
        renderFields() {
          let { embed: e } = this.props,
            { fields: t } = e;
          if (null == t || 0 === t.length) return null;
          let n = [],
            l = null;
          return (
            t.forEach((t) => {
              let { rawName: r, rawValue: i, inline: a } = t;
              !a && null != l && (n.push(l), (l = null)),
                null == l && (l = []),
                l.push([
                  this.props.renderTitle(e, r),
                  this.props.renderDescription(e, i, !0),
                ]),
                (3 === l.length || !a) && (n.push(l), (l = null));
            }),
            null != l && n.push(l),
            (0, r.jsx)("div", {
              className: H.embedFields,
              children: n.map((e, t) => {
                let { length: n } = e;
                return e.map((e, l) => {
                  let [i, a] = e;
                  return (0, r.jsxs)(
                    "div",
                    {
                      className: H.embedField,
                      style: {
                        gridColumn: (function (e, t) {
                          let n = 12 / t,
                            l = e * n;
                          return "".concat(l + 1, " / ").concat(l + n + 1);
                        })(l, n),
                      },
                      children: [
                        (0, r.jsx)("div", {
                          className: H.embedFieldName,
                          children: i,
                        }),
                        (0, r.jsx)("div", {
                          className: H.embedFieldValue,
                          children: a,
                        }),
                      ],
                    },
                    "".concat(t, "-").concat(l),
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
            { embed: n } = this.props,
            { maxMediaHeight: l } = this.state;
          if (null == n.images) return null;
          let [i, a, o, s] = n.images.map((l) =>
            this.renderImage({
              hiddenSpoiler: e,
              isVisible: t,
              image: l,
              isGalleryImage: !0,
              allImages: n.images,
            }),
          );
          return null == i && null == a && null == o && null == s
            ? null
            : (0, r.jsxs)("div", {
                className: H.embedGalleryImagesWrapper,
                style: { height: l },
                children: [
                  (0, r.jsxs)("div", {
                    className: H.embedGallerySide,
                    children: [i, null != s && o],
                  }),
                  (0, r.jsxs)("div", {
                    className: H.embedGallerySide,
                    children: [a, null == s && null != o && o, null != s && s],
                  }),
                ],
              });
        }
        renderImageHoverButtons(e) {
          let {
            mimeType: t,
            downloadURL: n,
            isVisualMediaType: l,
            channelId: i,
          } = e;
          return (0, r.jsx)("div", {
            className: o()(V.hoverButtonGroup, {
              [V.nonMediaMosaicItem]: !l,
              [V.forceShowHover]: this.state.showImageAppMenu,
            }),
            children: (0, r.jsx)(m.Z, {
              toggleShowMenu: () => {
                this.setState({
                  showImageAppMenu: !this.state.showImageAppMenu,
                });
              },
              showMenu: this.state.showImageAppMenu,
              channelId: i,
              className: o()(V.hoverButton, {
                [V.selected]: this.state.showImageAppMenu,
              }),
              imageUrl: n,
              mimeType: t,
            }),
          });
        }
        handleImageHover(e, t, n) {
          if (n) {
            if (e && !this.state.isImageHovered) {
              this.setState({ isImageHovered: !0 });
              let e = w.Z.getChannel(this.props.channelId);
              if (this.props.showImageRecs) {
                var l;
                (0, u.a)({
                  channelId:
                    null !== (l = null == e ? void 0 : e.id) && void 0 !== l
                      ? l
                      : "",
                  location: s.I.CONTEXTUAL_IMAGE,
                  withCommands: !0,
                });
              }
              C.default.track(F.rMx.IMAGE_HOVERED, {
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
          var e, t;
          let {
              hiddenSpoiler: n = !1,
              isVisible: l = !0,
              image: i,
              isGalleryImage: a = !1,
              alt: s = L.Z.Messages.IMAGE,
              allImages: d = null,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            {
              renderImageComponent: u,
              className: m,
              autoPlayGif: h,
              renderForwardComponent: p,
            } = this.props,
            { maxMediaWidth: b, maxMediaHeight: f } = this.state;
          if (null == i) return null;
          let v = (0, _.q)(i),
            I = null == d ? {} : (0, x.Cx)(d.map((e) => (0, x.nP)(e, p))),
            y = g.ZP.isAnimated({
              src: (0, _.q)(i),
              original: i.url,
              animated: !1,
            }),
            w = {
              containerClassName: o()(m, {
                [H.embedMedia]: !a,
                [H.embedImage]: !a,
                [H.galleryImage]: a,
              }),
              imageContainerClassName: a ? H.galleryImageContainer : void 0,
              imageClassName: a ? H.embedGalleryImageElement : void 0,
              src: (0, _.q)(i),
              alt: s,
              responsive: !0,
              limitResponsiveWidth: !a,
              width: i.width,
              height: i.height,
              maxWidth: b,
              maxHeight: f,
              original: i.url,
              shouldLink: l,
              disableAltTextDisplay: !0,
              hiddenSpoilers: n,
              placeholder: i.placeholder,
              placeholderVersion: i.placeholderVersion,
              srcIsAnimated: i.srcIsAnimated,
              renderForwardComponent: p,
            };
          v in I && (w.onClick = I[v]);
          let C =
            null !==
              (t =
                null === (e = i.url.split(".").pop()) || void 0 === e
                  ? void 0
                  : e.split("?")[0]) && void 0 !== t
              ? t
              : "";
          "jpg" === C && (C = "jpeg");
          let E =
              null != i &&
              !g.uo.test(null == i ? void 0 : i.url) &&
              !(i.srcIsAnimated && g.YG.test(null == i ? void 0 : i.url)),
            S =
              !0 !== this.props.isSearchResult &&
              l &&
              null != this.props.channelId &&
              void 0 !== this.props.channelId &&
              E &&
              !(function (e) {
                return null != e && (e.width <= k.OF || e.height <= k.OF);
              })(i) &&
              null != C;
          return (0, r.jsx)(c.h.Consumer, {
            children: (e) =>
              (0, r.jsx)(
                A.G.Consumer,
                {
                  children: (t) => {
                    let { disableAnimations: l } = t;
                    return u({
                      ...w,
                      autoPlay: h && !l && !n,
                      renderAccessory: y ? e : null,
                      onMouseEnter: () => this.handleImageHover(!0, i, S),
                      onMouseLeave: () => this.handleImageHover(!1, i, S),
                      renderAdjacentContent: () => {
                        var e;
                        return !0 === this.props.showImageRecs && S
                          ? this.renderImageHoverButtons({
                              mimeType: ["image", C],
                              downloadURL:
                                null !== (e = i.proxyURL) && void 0 !== e
                                  ? e
                                  : i.url,
                              isVisualMediaType: null != i,
                              channelId: this.props.channelId,
                            })
                          : null;
                      },
                    });
                  },
                },
                i.url,
              ),
          });
        }
        renderVideo() {
          let {
              gifv: e = !1,
              isVisible: t = !0,
              hiddenSpoiler: n = !1,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            {
              embed: { url: l, thumbnail: i, video: a, provider: o },
              renderVideoComponent: s,
              renderImageComponent: d,
              renderLinkComponent: u,
              renderForwardComponent: m,
              allowFullScreen: h,
              autoPlayGif: c,
              messageId: p,
              channelId: b,
              obscureReason: g,
            } = this.props,
            { maxMediaWidth: f, maxMediaHeight: v } = this.state;
          if (null == l || null == i) return null;
          if (e)
            return null == a
              ? null
              : (0, r.jsx)(A.G.Consumer, {
                  children: (e) => {
                    let { disableAnimations: o } = e;
                    return (0, r.jsx)(O, {
                      className: H.embedMedia,
                      href: l,
                      thumbnail: i,
                      video: a,
                      maxWidth: f,
                      maxHeight: v,
                      responsive: !0,
                      autoPlay: !n && c && !o && t,
                      renderImageComponent: d,
                      renderForwardComponent: m,
                      playable: t,
                      hiddenSpoilers: n,
                      disableAltTextDisplay: null != g,
                      placeholder: a.placeholder,
                      placeholderVersion: a.placeholderVersion,
                    });
                  },
                });
          return (0, r.jsx)(W, {
            className: H.embedMedia,
            href: l,
            allowFullScreen: h,
            thumbnail: i,
            video: a,
            provider: null == o ? void 0 : o.name,
            maxWidth: f,
            maxHeight: v,
            responsive: !0,
            renderImageComponent: d,
            renderVideoComponent: s,
            renderLinkComponent: u,
            renderForwardComponent: m,
            onControlsShow: () => {
              this.setState({ videoControlsShown: !0 });
            },
            onControlsHide: () => {
              this.setState({ videoControlsShown: !1 });
            },
            playable: t && !n,
            messageId: p,
            channelId: b,
            placeholder: null == a ? void 0 : a.placeholder,
            placeholderVersion: null == a ? void 0 : a.placeholderVersion,
          });
        }
        renderFooter() {
          let { footer: e, timestamp: t } = this.props.embed;
          if (null != e) {
            let n =
              null != e.iconProxyURL && "" !== e.iconProxyURL
                ? e.iconProxyURL
                : e.iconURL;
            return (0, r.jsxs)("div", {
              className: o()(H.embedFooter, H.embedMargin),
              children: [
                null != n
                  ? (0, r.jsx)("img", {
                      alt: "",
                      className: H.embedFooterIcon,
                      src: n,
                    })
                  : null,
                (0, r.jsxs)("span", {
                  className: H.embedFooterText,
                  children: [
                    e.text,
                    null != e.text && null != t
                      ? (0, r.jsx)("span", {
                          className: H.embedFooterSeparator,
                          children: "•",
                        })
                      : null,
                    null != t ? (0, S.Y4)(t) : null,
                  ],
                }),
              ],
            });
          }
          if (null != t)
            return (0, r.jsx)("div", {
              className: o()(H.embedFooter, H.embedMargin),
              children: (0, r.jsx)("span", {
                className: H.embedFooterText,
                children: (0, S.Y4)(t),
              }),
            });
        }
        renderMedia() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: t } = this.props,
            { isVisible: n } = this.state;
          switch (t.type) {
            case F.hBH.GIFV:
              return this.renderVideo({
                gifv: !0,
                hiddenSpoiler: e,
                isVisible: n,
              });
            case F.hBH.VIDEO:
            default:
              if (null != t.video)
                return this.renderVideo({
                  gifv: !1,
                  hiddenSpoiler: e,
                  isVisible: n,
                });
              if (null != t.images)
                return this.renderImages({ hiddenSpoiler: e, isVisible: n });
              return this.renderImage({
                hiddenSpoiler: e,
                isVisible: n,
                image: t.image,
                alt: t.rawTitle,
              });
          }
        }
        renderAll() {
          let e, t;
          let { embed: n, hideMedia: l } = this.props,
            { isVisible: r } = this.state,
            i = this.renderProvider(r),
            a = this.renderAuthor(r),
            o = this.renderTitle(r);
          switch (n.type) {
            case F.hBH.IMAGE:
            case F.hBH.VIDEO:
            case F.hBH.GIFV:
              break;
            default:
              e = this.renderDescription();
          }
          let s = this.renderFields();
          !l && (t = this.renderMedia(!r));
          let d = this.renderFooter(),
            u = null == t;
          return (
            n.type === F.hBH.RICH && (u = null == n.video),
            {
              provider: i,
              author: a,
              title: o,
              description: e,
              thumbnail: !l && u ? this.renderThumbnail(r) : null,
              fields: s,
              media: t,
              footer: d,
            }
          );
        }
        getMaxWidth(e) {
          let {
              embed: { image: t, images: n, video: l, type: r, thumbnail: i },
            } = this.props,
            { maxMediaWidth: a, maxMediaHeight: o } = this.state,
            s = null != t ? t : l;
          if (null == s) return;
          let { width: d } = (0, M.Tj)({
            width: s.width,
            height: s.height,
            maxWidth: a,
            maxHeight: o,
          });
          if (!e && (r === F.hBH.VIDEO || d >= 300)) return d + 32;
          if (r === F.hBH.RICH && void 0 !== n) return 520;
          if (r === F.hBH.GIFV) {
            var u, m, h, c;
            let { width: e } = (0, M.Tj)({
              width: Math.max(
                null !== (u = null == i ? void 0 : i.width) && void 0 !== u
                  ? u
                  : 0,
                null !== (m = null == l ? void 0 : l.width) && void 0 !== m
                  ? m
                  : 0,
              ),
              height: Math.max(
                null !== (h = null == i ? void 0 : i.height) && void 0 !== h
                  ? h
                  : 0,
                null !== (c = null == l ? void 0 : l.height) && void 0 !== c
                  ? c
                  : 0,
              ),
              maxWidth: a,
              maxHeight: o,
            });
            return e;
          }
        }
        isInline() {
          let { hideMedia: e, embed: t } = this.props;
          return !e && (0, j.dY)(t);
        }
        renderSuppressButton(e) {
          return (0, r.jsx)(d.Clickable, {
            focusProps: { offset: { bottom: 4 } },
            className: H.embedSuppressButton,
            onClick: e,
            "aria-label": L.Z.Messages.SUPPRESS_ALL_EMBEDS,
            children: (0, r.jsx)(d.XSmallIcon, {
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
          let { color: t } = this.props.embed;
          return (null != t && "#ffffff" === t.toLowerCase()) || e ? void 0 : t;
        }
        getSpoilerStyles(e) {
          let {
              embed: { image: t, images: n, video: l, type: r },
            } = this.props,
            { maxMediaWidth: i, maxMediaHeight: a } = this.state;
          if (!this.usesJustifiedAutoStyle()) return;
          let o = e ? void 0 : this.getMaxWidth(!1);
          if (void 0 === o && void 0 === n && r !== F.hBH.RICH) {
            let e = null != t ? t : l;
            if (void 0 !== e) {
              let { width: t } = (0, M.Tj)({
                width: e.width,
                height: e.height,
                maxWidth: i,
                maxHeight: a,
              });
              o = t;
            }
          }
          return {
            maxWidth: void 0 === o ? "max-content" : o,
            justifySelf: "auto",
          };
        }
        render() {
          var e;
          let { embed: t, obscureReason: n, className: l } = this.props;
          return null != t.provider && N.j.includes(t.provider.name)
            ? (0, r.jsx)(N.Z, { embed: t, className: l })
            : (0, I.Z)(t)
              ? (0, r.jsx)(y.Z, { embed: t, className: l })
              : (null === (e = t.provider) || void 0 === e
                    ? void 0
                    : e.name) === "Amazon Music" && t.type === F.hBH.RICH
                ? (0, r.jsx)(p.Z, { embed: t, className: l })
                : this.isInline()
                  ? null != n
                    ? (0, r.jsx)(h.Z, {
                        type: h.Z.Types.ATTACHMENT,
                        reason: n,
                        onReveal: this.onReveal,
                        onToggleObscurity: this.onToggleObscurity,
                        isSingleMosaicItem: !0,
                        containerStyles: this.getSpoilerStyles(!0),
                        obscurityControlClassName: o()({
                          [H.obscureVideoSpacing]:
                            this.state.isVisible &&
                            this.state.videoControlsShown,
                        }),
                        children: this.renderInlineMediaEmbed,
                      })
                    : this.renderInlineMediaEmbed()
                  : null != n
                    ? (0, r.jsx)(h.Z, {
                        type: h.Z.Types.EMBED,
                        onReveal: this.onReveal,
                        onToggleObscurity: this.onToggleObscurity,
                        reason: n,
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
            P(this, "state", {
              isVisible: null == this.props.obscureReason,
              videoControlsShown: !1,
              isImageHovered: !1,
              showImageAppMenu: !1,
              ...(0, j.vP)(this.props.embed),
            }),
            P(this, "onReveal", () => {
              this.setState({ isVisible: !0 });
            }),
            P(this, "onToggleObscurity", () => {
              this.setState({ isVisible: !this.state.isVisible });
            }),
            P(this, "renderInlineMediaEmbed", function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                { obscureReason: n, className: l } = t.props,
                i = t.getMaxWidth(!0);
              return (0, r.jsx)("div", {
                "aria-hidden": e,
                className: o()(H.inlineMediaEmbed, l, {
                  [H.spoilerAttachment]: n === v.wk.SPOILER,
                  [H.hiddenExplicitAttachment]:
                    null != n &&
                    [
                      v.wk.EXPLICIT_CONTENT,
                      v.wk.POTENTIAL_EXPLICIT_CONTENT,
                    ].includes(n),
                  [H.isHidden]: e,
                  [H.justifyAuto]: t.usesJustifiedAutoStyle(),
                  [B.embedFlexGrow]: null != i,
                }),
                style: { maxWidth: i },
                children: t.renderMedia(e),
              });
            }),
            P(this, "renderEmbedContent", function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                {
                  className: n,
                  onSuppressEmbed: l,
                  obscureReason: i,
                } = t.props,
                {
                  provider: a,
                  author: s,
                  title: d,
                  description: u,
                  fields: m,
                  thumbnail: h,
                  media: c,
                  footer: p,
                } = t.renderAll();
              return (0, r.jsx)("article", {
                className: o()(n, B.embedFlexGrow, H.embedFull, R.markup, {
                  [H.isHidden]: e,
                  [H.spoilerEmbed]: i === v.wk.SPOILER,
                  [H.hiddenExplicitEmbed]:
                    null != i &&
                    [
                      v.wk.EXPLICIT_CONTENT,
                      v.wk.POTENTIAL_EXPLICIT_CONTENT,
                    ].includes(i),
                  [H.justifyAuto]: t.usesJustifiedAutoStyle(),
                }),
                "aria-hidden": e,
                style: {
                  borderColor: t.getEmbedColor(e),
                  maxWidth: t.getMaxWidth(!1),
                },
                children: (0, r.jsx)("div", {
                  className: H.gridContainer,
                  children: (0, r.jsxs)("div", {
                    className: o()({
                      [H.grid]: !0,
                      [H.hasThumbnail]: null != h,
                    }),
                    children: [
                      null != l ? t.renderSuppressButton(l) : null,
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
      P(G, "defaultProps", {
        hideMedia: !1,
        allowFullScreen: !0,
        maxThumbnailWidth: 80,
        maxThumbnailHeight: 80,
      });
    },
    468846: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return h;
        },
        pn: function () {
          return r;
        },
      });
      var l,
        r,
        i = n(735250),
        a = n(470079),
        o = n(729594),
        s = n(269625);
      function d(e) {
        let { autoMute: t, ...n } = e,
          l = a.useRef(null),
          r = a.useCallback(
            (e) => {
              if (
                !!e.data["x-tiktok-player"] &&
                "https://www.tiktok.com" === e.origin
              ) {
                if ("onPlayerReady" === e.data.type) {
                  var n, r, i, a;
                  t &&
                    (null === (a = l.current) ||
                      void 0 === a ||
                      null === (i = a.contentWindow) ||
                      void 0 === i ||
                      i.postMessage(
                        { type: "mute", "x-tiktok-player": !0 },
                        e.origin,
                      )),
                    null === (r = l.current) ||
                      void 0 === r ||
                      null === (n = r.contentWindow) ||
                      void 0 === n ||
                      n.postMessage(
                        { type: "play", "x-tiktok-player": !0 },
                        e.origin,
                      );
                }
              }
            },
            [t],
          );
        return (
          a.useEffect(
            () => (
              window.addEventListener("message", r),
              () => window.removeEventListener("message", r)
            ),
            [r],
          ),
          (0, i.jsx)(m, { ref: l, ...n })
        );
      }
      function u(e) {
        let { src: t, autoMute: n, ...l } = e,
          r = o.parse(null != t ? t : "", !0);
        (r.query = { ...r.query, autoplay: "1", auto_play: "1" }),
          n && (r.query.mute = "1"),
          (r.search = null);
        let a = o.format(r);
        return (0, i.jsx)(m, { src: a, ...l });
      }
      let m = a.forwardRef(function (e, t) {
        return (0, i.jsx)("iframe", {
          ref: t,
          className: s.embedIframe,
          allow: "autoplay",
          frameBorder: 0,
          scrolling: "no",
          sandbox:
            "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          ...e,
        });
      });
      function h(e) {
        switch (e.provider) {
          case "YouTube":
            return (0, i.jsx)(u, { ...e });
          case "TikTok":
            return (0, i.jsx)(d, { ...e });
          default:
            return (0, i.jsx)(m, { ...e });
        }
      }
      ((l = r || (r = {})).YOUTUBE = "YouTube"), (l.TIKTOK = "TikTok");
    },
    401419: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
        j: function () {
          return m;
        },
      });
      var l = n(735250);
      n(470079);
      var r = n(120356),
        i = n.n(r),
        a = n(729594),
        o = n(689938),
        s = n(413224);
      let d = [
          "sessionshare.sp-int.playstation.com",
          "session-share.playstation.com",
        ],
        u = (e, t, n) =>
          "https://".concat(e, "/embed/").concat(t, "?locale=").concat(n),
        m = ["PlayStation"],
        h = (e, t) => {
          let { host: n, pathname: l } = t,
            r = [];
          switch ((null != l && (r = l.split("/")), e)) {
            case "PlayStation":
              if (null == n || !d.includes(n) || 2 !== r.length) break;
              return {
                embedUrl: u(n, r[1], o.Z.getLocale()),
                style: { width: 400, height: 300, borderRadius: 6 },
              };
          }
          return null;
        };
      function c(e) {
        var t;
        let n = e.embed.url,
          r = null === (t = e.embed.provider) || void 0 === t ? void 0 : t.name;
        if (null == n || null == r) return null;
        let o = null;
        try {
          o = a.parse(n, !0);
        } catch (e) {
          return null;
        }
        let d = h(r, o);
        return null == d
          ? null
          : (0, l.jsx)("iframe", {
              src: d.embedUrl,
              className: i()(s.embedIFrame, e.className),
              style: d.style,
              sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
            });
      }
    },
    624195: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var l = n(735250);
      n(470079);
      var r = n(120356),
        i = n.n(r),
        a = n(729594),
        o = n(269625);
      let s = RegExp(
        "^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)",
      );
      function d(e) {
        let t = null,
          n = null,
          l = null;
        try {
          (t = (l = a.parse(e, !0)).host), (n = l.pathname);
        } catch (e) {
          return null;
        }
        return null != l && s.test(null != t ? t : "") && null != n ? l : null;
      }
      function u(e) {
        let {
          className: t,
          embed: { url: n, thumbnail: r },
        } = e;
        if (null == n || null == r) return null;
        let a = d(n);
        if (null == a) return null;
        let s = a.query.iframe_url;
        if (null == s || Array.isArray(s) || null == d(s)) return null;
        let { width: u, height: m } = r,
          h = u,
          c = m;
        return (
          (u > 500 || m > 400) &&
            (u > m
              ? ((h = 500), (c = (500 * m) / u))
              : ((h = (400 * u) / m), (c = 400))),
          (0, l.jsx)("iframe", {
            className: i()(o.embedAmazonMusic, t),
            src: s,
            style: { width: h, height: c },
            frameBorder: 0,
            sandbox:
              "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          })
        );
      }
    },
    44824: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var l = n(735250),
        r = n(470079),
        i = n(70097),
        a = n(947849),
        o = n(981631),
        s = n(689938);
      function d(e) {
        let {
            poster: t,
            src: n,
            width: a,
            height: s,
            naturalWidth: d,
            naturalHeight: u,
            play: m = !0,
            className: h,
            alt: c,
            responsive: p,
          } = e,
          b = r.useRef(null);
        return (r.useEffect(() => {
          let { current: e } = b;
          if (null != e) m ? e.play() : e.pause();
        }, [m]),
        (d <= o.N_j && u <= o.XKF) || (d <= o.XKF && u <= o.N_j))
          ? (0, l.jsx)(i.Z, {
              ref: b,
              className: h,
              poster: t,
              src: n,
              width: a,
              height: s,
              responsive: p,
              muted: !0,
              loop: !0,
              autoPlay: m,
              preload: "none",
              "aria-label": c,
            })
          : (0, l.jsx)("img", { alt: "", src: t, width: a, height: s });
      }
      function u(e) {
        let {
          src: t,
          poster: n,
          naturalWidth: r,
          naturalHeight: i,
          responsive: o,
          autoPlay: u,
          className: m,
          playable: h = !0,
          renderImageComponent: c,
          renderForwardComponent: p,
          alt: b = s.Z.Messages.GIF,
          ...g
        } = e;
        return (0, l.jsx)(a.h.Consumer, {
          children: (e) =>
            c({
              ...g,
              alt: b,
              src: n,
              containerClassName: m,
              autoPlay: u,
              animated: h,
              responsive: o,
              renderAccessory: e,
              renderForwardComponent: p,
              tabIndex: h ? 0 : -1,
              dataSafeSrc: t,
              children(e) {
                let { src: n, size: a, animating: s, alt: u } = e;
                return (0, l.jsx)(d, {
                  alt: u,
                  className: m,
                  poster: n,
                  src: t,
                  width: a.width,
                  height: a.height,
                  naturalWidth: r,
                  naturalHeight: i,
                  responsive: o,
                  play: h && s,
                });
              },
            }),
        });
      }
    },
    254109: function (e, t, n) {
      n.d(t, {
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
      var l = n(652874),
        r = n(731965),
        i = n(626135),
        a = n(981631);
      let o = {
          guildId: void 0,
          channelId: void 0,
          channelType: void 0,
          viewerSwipes: 0,
          thumbnailSwipes: 0,
          selectedItemChanges: 0,
          numMediaItems: 0,
        },
        s = (0, l.Z)(() => o);
      function d(e, t, n, l) {
        (0, r.j)(() =>
          s.setState({
            ...o,
            guildId: e,
            channelId: t,
            channelType: n,
            numMediaItems: l,
          }),
        );
      }
      function u() {
        let e = s.getState();
        i.default.track(a.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
          guild_id: e.guildId,
          channel_id: e.channelId,
          channel_type: e.channelType,
          number_viewer_swipes: e.viewerSwipes,
          number_thumbnail_swipes: e.thumbnailSwipes,
          number_selected_item_changes: e.selectedItemChanges,
          number_media_items: e.numMediaItems,
        }),
          (0, r.j)(() => s.setState({ ...o }));
      }
      function m() {
        (0, r.j)(() =>
          s.setState((e) => ({
            selectedItemChanges: e.selectedItemChanges + 1,
          })),
        );
      }
    },
    780088: function (e, t, n) {
      n.d(t, {
        Cx: function () {
          return I;
        },
        j0: function () {
          return v;
        },
        j9: function () {
          return x;
        },
        nP: function () {
          return f;
        },
      }),
        n(47120);
      var l = n(735250);
      n(470079);
      var r = n(374470),
        i = n(481060),
        a = n(794295),
        o = n(163268),
        s = n(768494),
        d = n(751586),
        u = n(254109),
        m = n(406432),
        h = n(52824),
        c = n(626135),
        p = n(591759),
        b = n(981631),
        g = n(855199);
      function f(e, t) {
        let { width: n, height: r } = e,
          i = (0, h.q)(e);
        return {
          component: (0, l.jsx)(d.y, {
            width: n,
            height: r,
            original: e.url,
            renderLinkComponent: (e) => (0, l.jsx)(a.Z, { ...e }),
            renderForwardComponent: t,
            src: i,
          }),
          width: n,
          height: r,
          src: i,
        };
      }
      function v(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = (function (e, t) {
            var n, r;
            let i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              s =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, m.tw)(e.contentType)) return null;
            let u = null !== (n = e.width) && void 0 !== n ? n : 0,
              c = null !== (r = e.height) && void 0 !== r ? r : 0,
              p = (0, h.q)({ proxyURL: e.proxyUrl, url: e.url });
            return {
              component: (0, l.jsx)(d.y, {
                width: u,
                height: c,
                original: e.url,
                renderLinkComponent: (e) => (0, l.jsx)(a.Z, { ...e }),
                renderForwardComponent: t,
                src: p,
                shouldHideMediaOptions: i,
                obscure: (0, o.KP)({ type: o.lJ.GenericMedia, media: e }, s),
              }),
              width: u,
              height: c,
              src: p,
            };
          })(e, t, n, r);
        if (null != i) return i;
        let s = (function (e, t) {
          var n, r;
          let i =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!(0, m.X2)(e.contentType)) return null;
          let u = null !== (n = e.width) && void 0 !== n ? n : 0,
            c = null !== (r = e.height) && void 0 !== r ? r : 0,
            b = (0, h.q)({ proxyURL: e.proxyUrl, url: e.url }),
            g = p.Z.toURLSafe(e.proxyUrl);
          return null == g
            ? null
            : (g.searchParams.append("format", "webp"),
              {
                component: (0, l.jsx)(d.K, {
                  width: u,
                  height: c,
                  poster: g.toString(),
                  naturalWidth: u,
                  naturalHeight: c,
                  renderLinkComponent: (e) => (0, l.jsx)(a.Z, { ...e }),
                  renderForwardComponent: t,
                  src: b,
                  shouldHideMediaOptions: i,
                  obscure: (0, o.KP)({ type: o.lJ.GenericMedia, media: e }, s),
                }),
                width: u,
                height: c,
                src: b,
              });
        })(e, t, n, r);
        return null != s ? s : null;
      }
      function x(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return v((0, s.VY)(e), t, n, l);
      }
      function I(e, t) {
        let a = {};
        for (let [o, s] of e.entries())
          a[s.src] = (a) =>
            (function (e, t, a, o) {
              e.preventDefault(),
                (0, r.k)(e.currentTarget) && e.currentTarget.blur(),
                null != o &&
                  (c.default.track(
                    b.rMx.OPEN_MODAL,
                    { type: b.jXE.MEDIA_VIEWER, ...o },
                    { throttlePercent: 0.01 },
                  ),
                  (0, u.fS)(
                    o.guild_id,
                    o.channel_id,
                    o.channel_type,
                    t.length,
                  )),
                (0, i.openModalLazy)(
                  async () => {
                    let { default: e } = await n
                      .e("99857")
                      .then(n.bind(n, 895023));
                    return (n) => {
                      let { ...r } = n;
                      return (0, l.jsx)(e, {
                        ...r,
                        onIndexChange: null != o ? u.f0 : void 0,
                        className: g.zoomedCarouselModalRoot,
                        items: t,
                        modalCarouselClassName: g.modalCarouselWrapper,
                        startingIndex: a,
                      });
                    };
                  },
                  { onCloseCallback: null != o ? u.VO : void 0 },
                );
            })(a, e, o, t);
        return a;
      }
    },
    785992: function (e, t, n) {
      n.d(t, {
        E: function () {
          return i;
        },
        Z: function () {
          return a;
        },
      });
      var l = n(729594),
        r = n(981631);
      function i(e) {
        return null != e && "open.spotify.com" === e;
      }
      function a(e) {
        var t;
        if (
          null == e.url ||
          (null === (t = e.provider) || void 0 === t ? void 0 : t.name) !==
            "Spotify" ||
          e.type !== r.hBH.LINK
        )
          return !1;
        try {
          let t = l.parse(e.url, !0).host;
          return i(t);
        } catch (e) {
          return !1;
        }
      }
    },
    400266: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(757143);
      var l = n(735250);
      n(470079);
      var r = n(120356),
        i = n.n(r),
        a = n(729594),
        o = n(785992),
        s = n(616922),
        d = n(269625);
      function u(e) {
        let {
          className: t,
          embed: { url: n },
        } = e;
        if (null == n) return null;
        let r = null,
          u = null;
        try {
          let e = a.parse(n.replace(/intl-[^/]+\//, ""), !0);
          (r = e.host), (u = e.pathname);
        } catch (e) {
          return null;
        }
        if (!(0, o.E)(r) || null == u) return null;
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
          (0, l.jsx)("iframe", {
            className: i()(d.embedSpotify, t),
            src: s.C7.EMBED(u),
            style: { width: 400, height: b },
            frameBorder: 0,
            sandbox:
              "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          })
        );
      }
    },
    973335: function (e, t, n) {
      e.exports = { title: "title_d9a510" };
    },
    269625: function (e, t, n) {
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
    413224: function (e, t, n) {
      e.exports = { embedIFrame: "embedIFrame_c0e1f8" };
    },
    275703: function (e, t, n) {
      e.exports = {
        hoverButtonGroup: "hoverButtonGroup_d0395d",
        forceShowHover: "forceShowHover_d0395d",
        hoverButton: "hoverButton_d0395d",
        selected: "selected_d0395d",
        nonMediaMosaicItem: "nonMediaMosaicItem_d0395d",
      };
    },
    53304: function (e, t, n) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    287847: function (e, t, n) {
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
    855199: function (e, t, n) {
      e.exports = {
        modalCarouselWrapper: "modalCarouselWrapper_f74404",
        zoomedCarouselModalRoot: "zoomedCarouselModalRoot_f74404",
      };
    },
  },
]);
//# sourceMappingURL=2090d7a0543172b6a52d.js.map
