"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34268"],
  {
    175671(e, l, t) {
      t.d(l, { Ay: () => ei, rr: () => er }), t(321073);
      var r = t(627968),
        s = t(64700),
        i = t(503698),
        n = t.n(i),
        a = t(144165),
        o = t(939249),
        u = t(789645),
        d = t(775602),
        h = t(567243),
        c = t(652215);
      function m(e) {
        return "music.apple.com" === e;
      }
      var p = t(17928),
        g = t(462887),
        x = t(363195);
      let f = Object.freeze({
        EMBED: (e, l, t) =>
          `https://embed.music.apple.com/${e}?theme=${l}&i=${null != t ? encodeURIComponent(t) : ""}`,
      });
      var y = t(472840);
      function w(e) {
        let {
            className: l,
            embed: { url: t },
          } = e,
          s = (0, p.bG)([x.A], () => (0, g.M)(x.A.theme));
        if (null == t) return null;
        let i = null,
          a = null,
          o = null;
        try {
          let e = h.parse(t, !0);
          (i = e.host),
            (a = e.pathname),
            (o = e.query.i ?? null),
            Array.isArray(o) && (o = o[0]);
        } catch (e) {
          return null;
        }
        if (!m(i) || null == a) return null;
        let u = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(a) ? 2 : 1,
          d = a.split("/"),
          c = d[u]?.toLowerCase();
        null != o && (c = "song");
        let w = 450;
        return (
          "song" === c ? (w = 175) : "music-video" === c && (w = 371),
          (a = a.substr(1)),
          (0, r.jsx)("iframe", {
            className: n()(y.li, l),
            src: f.EMBED(a, s ? "dark" : "light", o),
            style: { maxWidth: 660, minWidth: 300, width: "100%", height: w },
            frameBorder: 0,
            sandbox:
              "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation",
            allow: "encrypted-media *; fullscreen *; clipboard-write",
          })
        );
      }
      var v = t(338717),
        b = t(643612),
        j = t(731068);
      let A = RegExp(
        "^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)",
      );
      function I(e) {
        let l = null,
          t = null,
          r = null;
        try {
          (l = (r = h.parse(e, !0)).host), (t = r.pathname);
        } catch (e) {
          return null;
        }
        return null != r && A.test(l ?? "") && null != t ? r : null;
      }
      function S(e) {
        let {
          className: l,
          embed: { url: t, thumbnail: s },
        } = e;
        if (null == t || null == s) return null;
        let i = I(t);
        if (null == i) return null;
        let a = i.query.iframe_url;
        if (null == a || Array.isArray(a) || null == I(a)) return null;
        let { width: o, height: u } = s,
          d = o,
          h = u;
        return (
          (o > 500 || u > 400) &&
            (o > u
              ? ((d = 500), (h = (500 * u) / o))
              : ((d = (400 * o) / u), (h = 400))),
          (0, r.jsx)("iframe", {
            className: n()(y.FS, l),
            src: a,
            style: { width: d, height: h },
            frameBorder: 0,
            sandbox:
              "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          })
        );
      }
      t(508300);
      var C = t(607470),
        N = t(985018);
      function E(e) {
        let {
            poster: l,
            src: t,
            width: i,
            height: n,
            naturalWidth: a,
            naturalHeight: o,
            play: u = !0,
            className: d,
            alt: h,
            responsive: m,
          } = e,
          p = s.useRef(null);
        return (s.useEffect(() => {
          let { current: e } = p;
          u
            ? e?.play()?.catch((e) => {
                if (
                  !(e instanceof DOMException) ||
                  "NotAllowedError" !== e.name
                )
                  throw e;
              })
            : e?.pause();
        }, [u]),
        (a <= c.AaC && o <= c.oJQ) || (a <= c.oJQ && o <= c.AaC))
          ? (0, r.jsx)(C.A, {
              ref: p,
              className: d,
              poster: l,
              src: t,
              width: i,
              height: n,
              responsive: m,
              muted: !0,
              loop: !0,
              autoPlay: u,
              playsInline: !0,
              preload: "none",
              "aria-label": h,
            })
          : (0, r.jsx)("img", { alt: "", src: l, width: i, height: n });
      }
      function P(e) {
        let {
          src: l,
          poster: t,
          naturalWidth: s,
          naturalHeight: i,
          responsive: n,
          autoPlay: a,
          className: o,
          playable: u = !0,
          renderImageComponent: d,
          alt: h = N.intl.string(N.t.I5gL2H),
          sourceMetadata: c,
          ...m
        } = e;
        return (0, r.jsx)(b.G.Consumer, {
          children: (e) =>
            d({
              ...m,
              alt: h,
              src: t,
              containerClassName: o,
              autoPlay: a,
              animated: u,
              responsive: n,
              renderAccessory: e,
              tabIndex: u ? 0 : -1,
              dataSafeSrc: l,
              children(e) {
                let { src: t, size: a, animating: d, alt: h } = e;
                return (0, r.jsx)(E, {
                  alt: h,
                  className: o,
                  poster: t,
                  src: l,
                  width: a.width,
                  height: a.height,
                  naturalWidth: s,
                  naturalHeight: i,
                  responsive: n,
                  play: u && d,
                });
              },
              sourceMetadata: c,
              analyticsSource: "LazyGIFV",
            }),
        });
      }
      var T = t(619517),
        M = t(821209),
        W = t(269849),
        L = t(114212),
        R = t(343552),
        _ = t(302031);
      function k(e) {
        return null != e && "open.spotify.com" === e;
      }
      var V = t(272984);
      function H(e) {
        let {
          className: l,
          embed: { url: t },
        } = e;
        if (null == t) return null;
        let s = null,
          i = null;
        try {
          let e = h.parse(t.replace(/intl-[^/]+\//, ""), !0);
          (s = e.host), (i = e.pathname);
        } catch (e) {
          return null;
        }
        if (!k(s) || null == i) return null;
        let a = i.split("/"),
          o = null != a[1] ? a[1].toLowerCase() : null,
          u = null != a[3] ? a[3].toLowerCase() : null,
          d = a[4];
        if (
          ![
            "track",
            "playlist",
            "album",
            "artist",
            "user",
            "show",
            "episode",
          ].includes(o ?? "") ||
          ("user" === o && "playlist" !== u)
        )
          return null;
        "user" === o && "playlist" === u && null != d && (i = `/playlist/${d}`);
        let c = 352;
        return (
          "track" === o
            ? (c = 80)
            : ("episode" === o || "show" === o) && (c = 232),
          (0, r.jsx)("iframe", {
            className: n()(y.IL, l),
            src: V.RQ.EMBED(i),
            style: { maxWidth: 400, minWidth: 300, width: "100%", height: c },
            frameBorder: 0,
            sandbox:
              "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
            allow: "clipboard-write",
          })
        );
      }
      var D = t(734057),
        O = t(644447),
        U = t(954571),
        G = t(625494),
        $ = t(58703),
        B = t(659674),
        K = t(515718),
        F = t(240248),
        z = t(998218),
        Y = t(259407),
        J = t(191704);
      let Q = [
          "sessionshare.sp-int.playstation.com",
          "session-share.playstation.com",
        ],
        q = ["PlayStation"];
      function X(e) {
        let l = e.embed.url,
          t = e.embed.provider?.name;
        if (null == l || null == t) return null;
        let s = null;
        try {
          s = h.parse(l, !0);
        } catch (e) {
          return null;
        }
        let i = ((e, l) => {
          let { host: t, pathname: r } = l,
            s = [];
          if ((null != r && (s = r.split("/")), "PlayStation" === e)) {
            let e;
            if (null == t || !Q.includes(t) || 2 !== s.length) return null;
            let l = s[1];
            return {
              embedUrl:
                ((e = N.intl.currentLocale),
                `https://${t}/embed/${l}?locale=${e}`),
              style: { width: 400, height: 300, borderRadius: 6 },
            };
          }
          return null;
        })(t, s);
        return null == i
          ? null
          : (0, r.jsx)("iframe", {
              src: i.embedUrl,
              className: n()(J.u, e.className),
              style: i.style,
              sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
            });
      }
      var Z = t(692051),
        ee = t(838541),
        el = t(992595);
      function et(e) {
        let l = z.A.toURLSafe(e);
        return null == l
          ? e
          : (l.searchParams.set("format", "png"), l.toString());
      }
      function er(e) {
        let {
            className: l,
            iframeWrapperClassName: t,
            maxWidth: i,
            maxHeight: a,
            thumbnail: o,
            video: u,
            provider: d,
            allowFullScreen: h = !0,
            responsive: m = !1,
            renderImageComponent: p,
            renderVideoComponent: g,
            renderLinkComponent: x,
            playable: f = !0,
            autoPlay: w = !1,
            autoMute: v,
            volume: b,
            onPlay: j,
            onPause: A,
            onEnded: I,
            onControlsHide: S,
            onControlsShow: C,
            onVolumeChange: N,
            onMute: E,
            href: P,
            placeholder: T,
            placeholderVersion: W,
            sourceMetadata: L,
          } = e,
          [R, _] = s.useState(w),
          k = null != u && null == u.proxyURL,
          V = s.useCallback(() => _(!1), [_]),
          H = (e) => {
            e.preventDefault(),
              e.stopPropagation(),
              j?.(!1),
              _(!0),
              k &&
                (G._.dispatch(c.jej.VIDEO_EMBED_PLAYBACK_STARTED),
                G._.subscribeOnce(c.jej.VIDEO_EMBED_PLAYBACK_STARTED, V));
          };
        s.useEffect(
          () => () => {
            k && G._.unsubscribe(c.jej.VIDEO_EMBED_PLAYBACK_STARTED, V);
          },
          [k, V],
        );
        let { width: D, height: U } = o;
        null != u && ((D = u.width), (U = u.height));
        let $ = (0, K.Uj)({ width: D, height: U, maxWidth: i, maxHeight: a });
        (D = Math.max($.width, 150)), (U = Math.max($.height, 144));
        let B = (0, O.E)(o);
        if (null != u && null != u.proxyURL)
          return (0, r.jsx)("div", {
            className: n()(y.pu, l),
            children: g({
              poster: B,
              src: u.proxyURL,
              placeholder: T,
              placeholderVersion: W,
              width: D,
              height: U,
              responsive: m,
              autoPlay: w,
              onEnded: I,
              naturalWidth: u.width,
              naturalHeight: u.height,
              onVolumeChange: N,
              playable: f,
              autoMute: v,
              volume: b,
              onPlay: j,
              onPause: A,
              onMute: E,
              onControlsHide: S,
              onControlsShow: C,
              sourceMetadata: L,
            }),
          });
        if (R && null != u) {
          let e,
            s = !0 === v || ("function" == typeof v && v()),
            o = { width: D, height: U },
            c = { width: D, height: U };
          if (m) {
            let l = 0 !== D ? U / D : 1;
            (o = { maxWidth: i, maxHeight: a, width: void 0, height: void 0 }),
              (c = { paddingBottom: `${100 * l}%`, maxWidth: D }),
              (e = {
                position: "absolute",
                top: 0,
                left: 0,
                maxWidth: D,
                maxHeight: U,
              });
          }
          return (0, r.jsx)("div", {
            className: l,
            style: o,
            children: (0, r.jsx)("div", {
              className: n()(y.pu, t),
              style: c,
              children: (0, r.jsx)(Y.Ay, {
                provider: d,
                src: u.url,
                style: e,
                width: D,
                height: U,
                allowFullScreen: h,
                autoMute: s,
              }),
            }),
          });
        }
        return (0, r.jsxs)("div", {
          className: n()(y.pu, l),
          style: m ? { maxWidth: D } : { width: D, height: U },
          children: [
            p({
              src: B,
              width: D,
              height: U,
              maxWidth: D,
              maxHeight: U,
              responsive: m,
              containerClassName: y.tW,
              imageClassName: y.jq,
              placeholder: T,
              placeholderVersion: W,
              onClick: f && null != u ? H : null,
              sourceMetadata: L,
              analyticsSource: "EmbedVideo",
            }),
            (0, r.jsx)("div", {
              className: y._W,
              children: (0, r.jsx)("div", {
                className: y.Fo,
                children: f
                  ? (0, r.jsx)(M.A, {
                      onPlay: null != u ? H : null,
                      externalURL: P,
                      renderLinkComponent: x,
                      messageId: L?.message?.id,
                      channelId: L?.message?.channel_id,
                    })
                  : null,
              }),
            }),
          ],
        });
      }
      function es(e) {
        let {
          className: l,
          href: t,
          autoPlay: s,
          maxWidth: i,
          maxHeight: a,
          thumbnail: o,
          video: u,
          renderImageComponent: d,
          responsive: h,
          alt: c,
          disableAltTextDisplay: m = !1,
          playable: p = !0,
          hiddenSpoilers: g,
          placeholder: x,
          placeholderVersion: f,
          sourceMetadata: w,
        } = e;
        return (0, r.jsx)(P, {
          className: n()(y.pu, l),
          original: t,
          poster: (0, O.E)(o),
          src: (0, O.E)(u),
          alt: c,
          width: o.width,
          height: o.height,
          naturalHeight: u.height,
          naturalWidth: u.width,
          maxWidth: i,
          maxHeight: a,
          responsive: h,
          autoPlay: s,
          playable: p,
          renderImageComponent: d,
          hiddenSpoilers: g,
          disableAltTextDisplay: m,
          placeholder: x,
          placeholderVersion: f,
          sourceMetadata: w,
        });
      }
      class ei extends s.PureComponent {
        static defaultProps = {
          hideMedia: !1,
          allowFullScreen: !0,
          maxThumbnailWidth: 80,
          maxThumbnailHeight: 80,
          embedIndex: 0,
        };
        state = {
          isVisible: null == this.props.obscureReason,
          videoControlsShown: !1,
          sourceMetadata: {
            message: this.props.message,
            identifier: { type: "embed", embedIndex: this.props.embedIndex },
          },
          ...(0, B.ds)(this.props.embed),
        };
        renderProvider() {
          let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0],
            {
              embed: { provider: l },
              renderLinkComponent: t,
              message: s,
            } = this.props;
          return null == l
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, r.jsx)("div", {
                  className: n()(y.zC, y.aK),
                  children: this.renderContentPlaceholder({
                    width: 80,
                    height: 18,
                  }),
                })
              : (0, r.jsx)("div", {
                  className: n()(y.zC, y.aK),
                  children:
                    null != l.url
                      ? t({
                          className: y.Cj,
                          href: l.url,
                          tabIndex: e ? 0 : -1,
                          children: l.name,
                          target: "_blank",
                          rel: "noreferrer noopener",
                          messageId: s?.id,
                          channelId: s?.channel_id,
                        })
                      : (0, r.jsx)("span", { children: l.name }),
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
              message: s,
              autoPlayGif: i,
            } = this.props;
          return null == l
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, r.jsx)("div", {
                  className: n()(y.rN, y.aK),
                  children: this.renderContentPlaceholder({
                    width: 150,
                    height: 18,
                  }),
                })
              : (0, r.jsx)(Z.Y.Consumer, {
                  children: (a) => {
                    let { disableAnimations: o } = a;
                    return (0, r.jsxs)("div", {
                      className: n()(y.rN, y.aK),
                      children: [
                        null != l.iconProxyURL
                          ? (0, r.jsx)("img", {
                              alt: "",
                              className: y.SG,
                              src:
                                i && !o ? l.iconProxyURL : et(l.iconProxyURL),
                            })
                          : null,
                        null != l.url
                          ? t({
                              className: y.av,
                              href: l.url,
                              tabIndex: e ? 0 : -1,
                              children: l.name,
                              target: "_blank",
                              rel: "noreferrer noopener",
                              messageId: s?.id,
                              channelId: s?.channel_id,
                            })
                          : (0, r.jsx)("span", {
                              className: y.QQ,
                              children: l.name,
                            }),
                      ],
                    });
                  },
                });
        }
        renderContentPlaceholder(e) {
          let { width: l, height: t } = e;
          return (0, r.jsx)(L.FQ, {
            className: y.Jl,
            width: l,
            height: t,
            opacity: 0.3,
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
              renderTitle: s,
              message: i,
            } = this.props,
            { rawTitle: a, url: o } = l;
          return null == a
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, r.jsx)("div", {
                  className: n()(y.gt, y.aK),
                  children: this.renderContentPlaceholder({
                    width: 400,
                    height: 30,
                  }),
                })
              : (0, r.jsx)("div", {
                  className: n()(y.gt, y.aK),
                  children:
                    null != o
                      ? t({
                          className: y.kv,
                          href: o,
                          tabIndex: e ? 0 : -1,
                          children: s(l, a),
                          target: "_blank",
                          rel: "noreferrer noopener",
                          messageId: i?.id,
                          channelId: i?.channel_id,
                        })
                      : s(l, a),
                });
        }
        renderDescription() {
          let { embed: e, renderDescription: l } = this.props,
            { rawDescription: t } = e;
          return null == t
            ? null
            : (0, r.jsx)("div", {
                className: n()(y.cD, y.aK),
                children: this.shouldShowStaticPlaceholder
                  ? this.renderContentPlaceholder({ width: 400, height: 50 })
                  : l(e, t, !1),
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
              maxThumbnailHeight: s,
              renderImageComponent: i,
              autoPlayGif: n,
            } = this.props,
            { sourceMetadata: a } = this.state;
          return null == l
            ? null
            : (0, r.jsx)(Z.Y.Consumer, {
                children: (r) => {
                  let { disableAnimations: o } = r;
                  return i({
                    containerClassName: y.ad,
                    src: (0, O.E)(l),
                    original: l.url,
                    width: l.width,
                    height: l.height,
                    maxWidth: t,
                    maxHeight: s,
                    shouldLink: e,
                    autoPlay: n && !o,
                    srcIsAnimated: l.srcIsAnimated,
                    placeholder: l.placeholder,
                    placeholderVersion: l.placeholderVersion,
                    sourceMetadata: a,
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
            s = null;
          return (
            l.forEach((l) => {
              let { rawName: r, rawValue: i, inline: n } = l;
              n || null == s || (t.push(s), (s = null)),
                null == s && (s = []),
                s.push([
                  this.props.renderTitle(e, r),
                  this.props.renderDescription(e, i, !0),
                ]),
                (3 !== s.length && n) || (t.push(s), (s = null));
            }),
            null != s && t.push(s),
            (0, r.jsx)("div", {
              className: y.j0,
              children: t.map((e, l) => {
                let { length: t } = e;
                return e.map((e, s) => {
                  let i,
                    n,
                    [a, o] = e;
                  return (0, r.jsxs)(
                    "div",
                    {
                      className: y.Me,
                      style: {
                        gridColumn:
                          ((n = s * (i = 12 / t)), `${n + 1} / ${n + i + 1}`),
                      },
                      children: [
                        (0, r.jsx)("div", { className: y.$L, children: a }),
                        (0, r.jsx)("div", { className: y.VN, children: o }),
                      ],
                    },
                    `${l}-${s}`,
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
            { maxMediaHeight: s } = this.state;
          if (null == t.images) return null;
          let [i, n, a, o] = t.images.map((r) =>
            this.renderImage({
              hiddenSpoiler: e,
              isVisible: l,
              image: r,
              isGalleryImage: !0,
              allImages: t.images,
            }),
          );
          return null == i && null == n && null == a && null == o
            ? null
            : (0, r.jsxs)("div", {
                className: y.$B,
                style: { height: s },
                children: [
                  (0, r.jsxs)("div", {
                    className: y.Zf,
                    children: [
                      (0, r.jsx)(
                        b.G.Provider,
                        {
                          value: (0, R.b)(t.images[0].url, t.images[0]),
                          children: i,
                        },
                        0,
                      ),
                      null != o &&
                        (0, r.jsx)(
                          b.G.Provider,
                          {
                            value: (0, R.b)(t.images[2]?.url, t.images[2]),
                            children: a,
                          },
                          2,
                        ),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: y.Zf,
                    children: [
                      (0, r.jsx)(
                        b.G.Provider,
                        {
                          value: (0, R.b)(t.images[1]?.url, t.images[1]),
                          children: n,
                        },
                        1,
                      ),
                      null == o &&
                        null != a &&
                        (0, r.jsx)(
                          b.G.Provider,
                          {
                            value: (0, R.b)(t.images[2]?.url, t.images[2]),
                            children: a,
                          },
                          2,
                        ),
                      null != o &&
                        (0, r.jsx)(
                          b.G.Provider,
                          {
                            value: (0, R.b)(t.images[3]?.url, t.images[3]),
                            children: o,
                          },
                          3,
                        ),
                    ],
                  }),
                ],
              });
        }
        handleImageHover() {
          let e = D.A.getChannel(this.props.message?.channel_id);
          U.default.track(c.HAw.IMAGE_HOVERED, {
            guild_id: e?.guild_id,
            channel_id: e?.id,
            image_recommendations_shown: !1,
          });
        }
        renderImage() {
          let {
              hiddenSpoiler: e = !1,
              isVisible: l = !0,
              image: t,
              isGalleryImage: s = !1,
              alt: i = N.intl.string(N.t.X4IxWL),
              allImages: a = null,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            {
              renderImageComponent: o,
              className: u,
              autoPlayGif: d,
            } = this.props,
            {
              maxMediaWidth: h,
              maxMediaHeight: c,
              sourceMetadata: m,
            } = this.state;
          if (null == t) return null;
          let p = (0, O.E)(t),
            { srcToOnClickOverride: g, srcToHandlePreloadImage: x } =
              null == a
                ? { srcToOnClickOverride: {}, srcToHandlePreloadImage: {} }
                : (0, W.o)(
                    a.map((e) => ({
                      ...(0, j.oU)(e, m, "IMAGE"),
                      original: e.url,
                      srcIsAnimated: e.srcIsAnimated,
                    })),
                    {},
                    "Embed",
                  ),
            f = T.Ay.isAnimated({
              src: (0, O.E)(t),
              original: t.url,
              animated: !1,
              srcIsAnimated: t.srcIsAnimated,
            }),
            w = {
              containerClassName: n()(u, { [y.W$]: !s, [y.Lw]: !s, [y.I_]: s }),
              imageContainerClassName: s ? y.FM : void 0,
              imageClassName: s ? y.t3 : void 0,
              src: (0, O.E)(t),
              alt:
                null == t.description || "" === t.description
                  ? i
                  : t.description,
              responsive: !0,
              limitResponsiveWidth: !s,
              width: t.width,
              height: t.height,
              maxWidth: h,
              maxHeight: c,
              original: t.url,
              shouldLink: l,
              disableAltTextDisplay:
                null == t.description || "" === t.description,
              hiddenSpoilers: e,
              placeholder: t.placeholder,
              placeholderVersion: t.placeholderVersion,
              srcIsAnimated: t.srcIsAnimated,
              mosaicStyleAlt: !0,
            },
            v = t.url.split(".").pop()?.split("?")[0] ?? "";
          return (
            "jpg" === v && (v = "jpeg"),
            (0, r.jsx)(b.G.Consumer, {
              children: (l) =>
                (0, r.jsx)(
                  Z.Y.Consumer,
                  {
                    children: (t) => {
                      let { disableAnimations: r } = t;
                      return o({
                        ...w,
                        autoPlay: d && !r && !e,
                        renderAccessory: f ? l : null,
                        handlePreloadImage: x[p],
                        onClick: g[p],
                        onMouseEnter: () => this.handleImageHover(),
                        sourceMetadata: m,
                        analyticsSource: "Embed",
                      });
                    },
                  },
                  t.url,
                ),
            })
          );
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
              embed: { url: s, thumbnail: i, video: n, provider: a },
              renderVideoComponent: o,
              renderImageComponent: u,
              renderLinkComponent: d,
              allowFullScreen: h,
              autoPlayGif: c,
              obscureReason: m,
            } = this.props,
            {
              maxMediaWidth: p,
              maxMediaHeight: g,
              sourceMetadata: x,
            } = this.state;
          if (null == s || null == i) return null;
          if (e)
            return null == n
              ? null
              : (0, r.jsx)(Z.Y.Consumer, {
                  children: (e) => {
                    let { disableAnimations: a } = e;
                    return (0, r.jsx)(es, {
                      className: y.W$,
                      href: s,
                      thumbnail: i,
                      video: n,
                      maxWidth: p,
                      maxHeight: g,
                      responsive: !0,
                      autoPlay: !t && c && !a && l,
                      renderImageComponent: u,
                      playable: l,
                      hiddenSpoilers: t,
                      disableAltTextDisplay: null != m,
                      placeholder: n.placeholder,
                      placeholderVersion: n.placeholderVersion,
                      sourceMetadata: x,
                    });
                  },
                });
          let f = () => {
              this.setState({ videoControlsShown: !0 });
            },
            w = () => {
              this.setState({ videoControlsShown: !1 });
            };
          return (0, r.jsx)(er, {
            className: y.W$,
            href: s,
            allowFullScreen: h,
            thumbnail: i,
            video: n,
            provider: (0, B.QY)(a?.name, n?.url),
            maxWidth: p,
            maxHeight: g,
            responsive: !0,
            renderImageComponent: u,
            renderVideoComponent: o,
            renderLinkComponent: d,
            onControlsShow: f,
            onControlsHide: w,
            playable: l && !t,
            placeholder: n?.placeholder,
            placeholderVersion: n?.placeholderVersion,
            sourceMetadata: x,
          });
        }
        renderFooter() {
          let { autoPlayGif: e } = this.props,
            { footer: l, timestamp: t } = this.props.embed;
          return null != l
            ? (0, r.jsx)(Z.Y.Consumer, {
                children: (s) => {
                  let { disableAnimations: i } = s;
                  return (0, r.jsxs)("div", {
                    className: n()(y.te, y.aK),
                    children: [
                      null != l.iconProxyURL && "" !== l.iconProxyURL
                        ? (0, r.jsx)("img", {
                            alt: "",
                            className: y.mG,
                            src: e && !i ? l.iconProxyURL : et(l.iconProxyURL),
                          })
                        : null,
                      (0, r.jsxs)("span", {
                        className: y.oy,
                        children: [
                          l.text,
                          null != l.text && null != t
                            ? (0, r.jsx)("span", {
                                className: y.i8,
                                children: "•",
                              })
                            : null,
                          null != t ? (0, $.mk)(t) : null,
                        ],
                      }),
                    ],
                  });
                },
              })
            : null != t
              ? (0, r.jsx)("div", {
                  className: n()(y.te, y.aK),
                  children: (0, r.jsx)("span", {
                    className: y.oy,
                    children: (0, $.mk)(t),
                  }),
                })
              : void 0;
        }
        renderStaticPlaceholderMedia() {
          let { className: e, embed: l } = this.props,
            { maxMediaWidth: t, maxMediaHeight: s } = this.state,
            i = l.image ?? l.video;
          if (null == i) return null;
          let { width: n, height: o } = (0, K.Uj)({
            width: i.width,
            height: i.height,
            maxWidth: t,
            maxHeight: s,
          });
          return (0, r.jsx)(a._, {
            className: e,
            readyState: c.Rv1.READY,
            src: "",
            width: n,
            height: o,
            maxWidth: t,
            maxHeight: s,
            mediaLayoutType: ee.dG.STATIC,
            useFullWidth: !1,
            zoomable: !1,
          });
        }
        renderMedia() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: l } = this.props,
            { isVisible: t } = this.state;
          if (this.shouldShowStaticPlaceholder)
            return this.renderStaticPlaceholderMedia();
          switch (l.type) {
            case c.Auw.GIFV:
              return this.renderVideo({
                gifv: !0,
                hiddenSpoiler: e,
                isVisible: t,
              });
            case c.Auw.VIDEO:
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
          let e,
            l,
            { embed: t, hideMedia: r } = this.props,
            { isVisible: s } = this.state,
            i = this.renderProvider(s),
            n = this.renderAuthor(s),
            a = this.renderTitle(s);
          switch (t.type) {
            case c.Auw.IMAGE:
            case c.Auw.VIDEO:
            case c.Auw.GIFV:
              break;
            default:
              e = this.renderDescription();
          }
          let o = this.renderFields();
          r || (l = this.renderMedia(!s));
          let u = this.renderFooter(),
            d = null == l;
          return (
            t.type === c.Auw.RICH && (d = null == t.video),
            {
              provider: i,
              author: n,
              title: a,
              description: e,
              thumbnail: !r && d ? this.renderThumbnail(s) : null,
              fields: o,
              media: l,
              footer: u,
            }
          );
        }
        onReveal = () => {
          this.setState({ isVisible: !0 });
        };
        onToggleObscurity = () => {
          this.setState({ isVisible: !this.state.isVisible });
        };
        getMaxWidth(e) {
          let {
              embed: { image: l, images: t, video: r, type: s, thumbnail: i },
            } = this.props,
            { maxMediaWidth: n, maxMediaHeight: a } = this.state,
            o = l ?? r;
          if (null == o) return;
          let { width: u } = (0, K.Uj)({
            width: o.width,
            height: o.height,
            maxWidth: n,
            maxHeight: a,
          });
          if (!e && (s === c.Auw.VIDEO || u >= 300)) return u + 32;
          if (s === c.Auw.RICH && void 0 !== t) return 520;
          if (s === c.Auw.GIFV) {
            let { width: e } = (0, K.Uj)({
              width: r?.width ?? i?.width ?? 0,
              height: r?.height ?? i?.height ?? 0,
              maxWidth: n,
              maxHeight: a,
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
          return !e && (0, B.NV)(l);
        }
        renderSuppressButton(e) {
          return (0, r.jsx)(o.D, {
            focusProps: { offset: { bottom: 4 } },
            className: y.PP,
            onClick: e,
            "aria-label": N.intl.string(N.t.GT3fNz),
            children: (0, r.jsx)(u.P, { size: "xs", color: "currentColor" }),
          });
        }
        renderInlineMediaEmbed = (() => {
          var e = this;
          return function () {
            let l =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              { obscureReason: t, className: s } = e.props,
              i = e.getMaxWidth(!0);
            return (0, r.jsx)("div", {
              "aria-hidden": l,
              className: n()(y.JY, s, {
                [y.gT]: t === v.Oc.SPOILER,
                [y.We]: e.shouldObscure,
                [y.dK]: l,
                [y.qU]: e.usesJustifiedAutoStyle(),
              }),
              style: { maxWidth: i },
              children: e.renderMedia(l),
            });
          };
        })();
        usesJustifiedAutoStyle() {
          let { embed: e } = this.props;
          return (
            e.type === c.Auw.IMAGE ||
            e.type === c.Auw.VIDEO ||
            e.type === c.Auw.GIFV ||
            ((e.type === c.Auw.RICH || e.type === c.Auw.ARTICLE) &&
              (null != e.video || null != e.image))
          );
        }
        renderEmbedContent = (() => {
          var e = this;
          return function () {
            let l =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              { className: t, onSuppressEmbed: s, obscureReason: i } = e.props,
              {
                provider: a,
                author: o,
                title: u,
                description: d,
                fields: h,
                thumbnail: c,
                media: m,
                footer: p,
              } = e.renderAll();
            return (0, r.jsx)("article", {
              className: n()(t, y.vO, el.PT, {
                [y.dK]: l,
                [y.o4]: i === v.Oc.SPOILER,
                [y.q$]: e.shouldObscure,
                [y.qU]: e.usesJustifiedAutoStyle(),
              }),
              "aria-hidden": l,
              style: {
                borderLeftColor: e.getEmbedColor(l),
                maxWidth: e.getMaxWidth(!1),
              },
              children: (0, r.jsx)("div", {
                className: y.UT,
                children: (0, r.jsxs)("div", {
                  className: n()({ [y.Vg]: !0, [y.$H]: null != c }),
                  children: [
                    null != s ? e.renderSuppressButton(s) : null,
                    a,
                    o,
                    u,
                    d,
                    h,
                    m,
                    c,
                    p,
                  ],
                }),
              }),
            });
          };
        })();
        getEmbedColor(e) {
          let { color: l } = this.props.embed;
          return (null != l && "#ffffff" === l.toLowerCase()) || e ? void 0 : l;
        }
        getSpoilerStyles(e) {
          let {
              embed: {
                image: l,
                images: t,
                video: r,
                type: s,
                rawDescription: i,
              },
            } = this.props,
            { maxMediaWidth: n, maxMediaHeight: a } = this.state;
          if (!this.usesJustifiedAutoStyle())
            return { justifySelf: "start", alignSelf: "start" };
          let o = e ? void 0 : this.getMaxWidth(!1);
          if (void 0 === o && void 0 === t && s !== c.Auw.RICH) {
            let e = l ?? r;
            if (void 0 !== e) {
              let { minWidth: l, minHeight: t } = this.getMinSize() ?? {},
                { width: r } = (0, K.Uj)({
                  width: e.width,
                  height: e.height,
                  maxWidth: n,
                  maxHeight: a,
                  minWidth: l,
                  minHeight: t,
                });
              o = r;
            }
          }
          let u = 150 / (d.A.fontScale / 100),
            h = null != i ? (0, F.W7)(i) : 0,
            m = (i?.split("\n").length ?? 0) >= 5;
          return {
            maxWidth: void 0 === o || h >= u || m ? "max-content" : o,
            justifySelf: "auto",
          };
        }
        get shouldObscure() {
          let { obscureReason: e } = this.props;
          return null != e && v._K.has(e);
        }
        get shouldShowStaticPlaceholder() {
          let { shouldAgeVerify: e = !1 } = this.props;
          return this.shouldObscure && e;
        }
        render() {
          let { embed: e, obscureReason: l, className: t } = this.props;
          return null != e.provider && q.includes(e.provider.name)
            ? (0, r.jsx)(X, { embed: e, className: t })
            : (function (e) {
                  if (
                    null == e.url ||
                    e.provider?.name !== "Spotify" ||
                    e.type !== c.Auw.LINK
                  )
                    return !1;
                  try {
                    let l = h.parse(e.url, !0).host;
                    return k(l);
                  } catch (e) {
                    return !1;
                  }
                })(e)
              ? (0, r.jsx)(H, { embed: e, className: t })
              : e.provider?.name === "Amazon Music" && e.type === c.Auw.RICH
                ? (0, r.jsx)(S, { embed: e, className: t })
                : (function (e) {
                      if (
                        null == e.url ||
                        e.provider?.name !== "Apple Music" ||
                        (e.type !== c.Auw.ARTICLE && e.type !== c.Auw.LINK)
                      )
                        return !1;
                      try {
                        let l = h.parse(e.url, !0).host;
                        return m(l);
                      } catch (e) {
                        return !1;
                      }
                    })(e)
                  ? (0, r.jsx)(w, { embed: e, className: t })
                  : this.isInline()
                    ? null != l
                      ? (0, r.jsx)(_.Ay, {
                          type: _.Ay.Types.ATTACHMENT,
                          reason: l,
                          onReveal: this.onReveal,
                          onToggleObscurity: this.onToggleObscurity,
                          isSingleMosaicItem: !0,
                          containerStyles: this.getSpoilerStyles(!0),
                          obscurityControlClassName: n()({
                            [y.yi]:
                              this.state.isVisible &&
                              this.state.videoControlsShown,
                          }),
                          children: this.renderInlineMediaEmbed,
                        })
                      : this.renderInlineMediaEmbed()
                    : null != l
                      ? (0, r.jsx)(_.Ay, {
                          type: _.Ay.Types.EMBED,
                          onReveal: this.onReveal,
                          onToggleObscurity: this.onToggleObscurity,
                          reason: l,
                          isSingleMosaicItem: !0,
                          containerStyles: this.getSpoilerStyles(!1),
                          children: this.renderEmbedContent,
                        })
                      : this.renderEmbedContent();
        }
      }
    },
    259407(e, l, t) {
      t.d(l, { Ay: () => g, mt: () => p });
      var r,
        s = t(627968),
        i = t(64700),
        n = t(998218),
        a = t(652215),
        o = t(472840);
      let u =
        "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";
      function d(e, l) {
        let t = n.A.toURLSafe(e ?? "");
        if (null === t) return "";
        if (null == l) return t.toString();
        for (let e in l) {
          let r = l[e];
          null != r && t.searchParams.set(e, r);
        }
        return t.toString();
      }
      function h(e) {
        let { src: l, autoMute: t, ...r } = e,
          n = i.useRef(null),
          a = i.useCallback(
            (e) => {
              e.data["x-tiktok-player"] &&
                "https://www.tiktok.com" === e.origin &&
                "onPlayerReady" === e.data.type &&
                (t &&
                  n.current?.contentWindow?.postMessage(
                    { type: "mute", "x-tiktok-player": !0 },
                    e.origin,
                  ),
                n.current?.contentWindow?.postMessage(
                  { type: "play", "x-tiktok-player": !0 },
                  e.origin,
                ));
            },
            [t],
          );
        i.useEffect(
          () => (
            window.addEventListener("message", a),
            () => window.removeEventListener("message", a)
          ),
          [a],
        );
        let o = d(l, { utm_source: "discord.gg" });
        return (0, s.jsx)(m, { src: o, ref: n, ...r });
      }
      function c(e) {
        let { src: l, autoMute: t, ...r } = e,
          i = d(l, {
            autoplay: "1",
            auto_play: "1",
            mute: t ? "1" : void 0,
            pageType: a.NzX,
          });
        return (0, s.jsx)(m, { src: i, ...r });
      }
      let m = i.forwardRef(function (e, l) {
        let { allowFullScreen: t, ...r } = e,
          i = t ? `${u} allow-fullscreen` : u;
        return (0, s.jsx)("iframe", {
          ref: l,
          className: o.Qu,
          allow: t ? "autoplay; fullscreen" : "autoplay",
          frameBorder: 0,
          scrolling: "no",
          sandbox: i,
          allowFullScreen: t,
          ...r,
        });
      });
      var p = (((r = {}).YOUTUBE = "YouTube"), (r.TIKTOK = "TikTok"), r);
      function g(e) {
        switch (e.provider) {
          case "YouTube":
            return (0, s.jsx)(c, { ...e });
          case "TikTok":
            return (0, s.jsx)(h, { ...e });
          default:
            return (0, s.jsx)(m, { ...e });
        }
      }
    },
    343552(e, l, t) {
      t.d(l, { b: () => o });
      var r = t(627968),
        s = t(803805),
        i = t(11187),
        n = t(439401),
        a = t(416620);
      let o = (e, l, t, o, u) => () => {
        let d = l ?? t;
        if (null == d) return null;
        let { url: h, proxyURL: c, width: m, height: p } = d,
          g = null != c && "" !== c ? c : h,
          x = (0, i.mW)({ providerName: u, thumbnail: o });
        return (0, r.jsx)(n.A, {
          width: m,
          height: p,
          src: g,
          gifSrc: x,
          url: null != e && "" !== e ? e : null != c && "" !== c ? c : h,
          format: null != t ? s.TL.VIDEO : s.TL.IMAGE,
          className: a.jj,
        });
      };
    },
  },
]);
//# sourceMappingURL=34268.907fa2823d077863.js.map
