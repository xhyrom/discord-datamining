"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20382"],
  {
    958742(e, t, n) {
      n.d(t, { A: () => E });
      var i = n(627968),
        l = n(64700),
        r = n(503698),
        a = n.n(r),
        o = n(17928),
        s = n(268218),
        d = n(776231),
        u = n(614269),
        h = n(829097),
        c = n(734057),
        m = n(401648),
        p = n(939249),
        g = n(734066),
        x = n(274372),
        A = n(794905),
        f = n(16590),
        y = n(985018),
        w = n(310882);
      function C(e) {
        let { attachment: t, channelId: n, messageId: r } = e,
          { enableAdvancedSignals: a } = g.L_.useConfig({
            location: "DistributedClipShareCTA",
          }),
          s = t.clip_remote_id,
          d = (0, o.bG)([x.A], () =>
            null != s ? x.A.getClipByRemoteId(s) : null,
          ),
          { onShareClick: u } = (0, A.A)(n),
          h = (0, o.bG)(
            [x.A],
            () =>
              null != d &&
              null != n &&
              null != s &&
              x.A.wasClipSharedInChannel(s, n),
          ),
          c = l.useCallback(
            (e) => {
              null != d &&
                (e.stopPropagation(),
                u({
                  clips: [d],
                  messageReference: { channel_id: n, message_id: r },
                }));
            },
            [u, d, n, r],
          );
        return !a || null == d || h
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                " \xb7 ",
                (0, i.jsx)(p.D, {
                  tag: "span",
                  className: w.s,
                  onClick: c,
                  children: y.intl.string(f.default.YKst58),
                }),
              ],
            });
      }
      var I = n(696016),
        v = n(581874);
      let j = (0, s.Fe)({
        createPromise: () =>
          Promise.all([
            n.e("99245"),
            n.e("57174"),
            n.e("84971"),
            n.e("30920"),
            n.e("78010"),
            n.e("91652"),
          ]).then(n.bind(n, 664111)),
        webpackId: 664111,
        name: "DiscordVideoPlayer",
        renderLoader: () => (0, i.jsx)("div", { className: v.Lq }),
      });
      function E(e) {
        let {
            attachment: t,
            posterUrl: n,
            className: r,
            active: s = !1,
            autoPlay: p,
            src: g,
            embed: x = !1,
            fillContainer: A = !1,
            minWidth: f = 500,
            maxWidth: y = 1 / 0,
            maxHeight: w = 1 / 0,
            channelId: E,
            messageId: M,
            showTextContent: S = y >= 250,
            showParticipants: _ = !0,
            volume: N,
            autoMute: O,
            onVolumeChange: b,
            onMutedChange: P,
            onClick: V,
            onContextMenu: T,
          } = e,
          D = t.width ?? 0,
          L = t.height ?? 0,
          U = (0, o.bG)([c.A], () => c.A.getBasicChannel(E)?.guild_id, [E]),
          R = D > 0 && L > 0 ? D / L : 16 / 9,
          k = Math.min(D > 0 ? D : f, y),
          F = k / R;
        F > w && (k = (F = w) * R), k < f && (F = (k = f) / R);
        let H = Math.round(Math.min(k, y)),
          W = Math.round(Math.min(F, w)),
          G = D > 0 && L > 0 ? Math.min(H / D, W / L, 1) : 1,
          X = (0, d.AE)({
            src: n,
            width: Math.round(D * G),
            height: Math.round(L * G),
          }),
          [z, B] = l.useState(!1),
          Y = (0, h._)({ location: I.Mu }).externalAnalyticsEnabled,
          Q = l.useMemo(
            () =>
              Y
                ? {
                    contentId: g,
                    videoStreamType: u.u.isHlsUrl(g) ? "hls" : "mp4",
                    contentType: "clips",
                    title: t.title,
                  }
                : void 0,
            [Y, g, t.title],
          ),
          Z = l.useCallback(
            (e) => {
              let { playerState: n, isControlBarExpanded: l } = e;
              return (0, i.jsx)(m.A, {
                createdAt:
                  null != t.clip_created_at
                    ? Date.parse(t.clip_created_at)
                    : void 0,
                participantIds: _
                  ? (t.clip_participants?.map((e) => {
                      let { id: t } = e;
                      return t;
                    }) ?? [])
                  : [],
                applicationId: t.application?.id,
                title: t.title,
                guildId: U,
                playerState: n,
                isControlBarExpanded: l,
                isFullScreen: z,
                showTextContent: S,
                shareCTA:
                  null != M &&
                  null != E &&
                  (0, i.jsx)(C, { attachment: t, messageId: M, channelId: E }),
              });
            },
            [t, U, z, _, S, E, M],
          );
        return (0, i.jsx)("div", {
          className: a()(v.kL, { [v.HA]: A }, r),
          onClick: (e) => e.stopPropagation(),
          onKeyUp: x ? (e) => e.stopPropagation() : void 0,
          onKeyDown: x ? (e) => e.stopPropagation() : void 0,
          onContextMenu: T,
          style: A ? void 0 : { width: H, height: W },
          children: (0, i.jsx)(j, {
            crossOrigin: null,
            src: g,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: X,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: s,
            autoplay: p,
            initialVolume: N,
            initialMuted: O,
            onVolumeChange: b,
            onMutedChange: P,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: Z,
            parentTransitionState: null,
            onFullscreenChange: B,
            onClick: V,
            withVideoHalo: !0,
            objectFit: A ? "cover" : void 0,
            muxContentMetadata: Q,
          }),
        });
      }
    },
    452282(e, t, n) {
      n.d(t, { Ay: () => p, U3: () => c });
      var i = n(627968),
        l = n(64700),
        r = n(503698),
        a = n.n(r),
        o = n(615300),
        s = n(456412),
        d = n(831077);
      let u = { tension: 7, friction: 5, overshootClamping: !0 },
        h = "center";
      function c(e, t) {
        return ((e % t) + t) % t;
      }
      class m extends l.Component {
        static defaultProps = {
          animate: !0,
          edgeItems: 2,
          align: h,
          gutter: 0,
          hideOverflow: !0,
        };
        animatedIndex = new o.A.Value(this.props.currentIndex);
        animatedAlignmentOffset = new o.A.Value(
          this.getAlignmentOffset(this.props.align),
        );
        animatedOpacity = new o.A.Value(1);
        componentDidMount() {
          this.animatedIndex.setValue(this.props.currentIndex);
        }
        componentDidUpdate(e) {
          let {
              align: t,
              animate: n,
              currentIndex: i,
              items: l,
              width: r,
            } = this.props,
            a = c(i, l.length),
            s = c(e.currentIndex, l.length);
          (a !== s || l.length !== e.items.length) &&
            this.updateAnimatedIndex(a, s),
            r !== e.width
              ? this.animatedAlignmentOffset.setValue(
                  this.getAlignmentOffset(t),
                )
              : n &&
                (t !== e.align || a !== s) &&
                o.A.spring(this.animatedAlignmentOffset, {
                  ...u,
                  toValue: this.getAlignmentOffset(t),
                }).start();
        }
        getAlignmentOffset(e) {
          let {
              width: t,
              itemSize: n,
              currentIndex: i,
              gutter: l,
              items: r,
            } = this.props,
            a = l * c(i, r.length) * 2;
          return e === h
            ? (t - n.width) / 2 + a
            : "right" === e
              ? t - n.width - l + a
              : l + a;
        }
        getCarouselTranslate() {
          let { itemSize: e, edgeItems: t } = this.props;
          return t * (e.width + e.margin);
        }
        getItemStyle = () => {
          let {
            itemSize: { width: e, margin: t, height: n },
          } = this.props;
          return {
            flexBasis: e,
            marginRight: t,
            height: n,
            width: e,
            maxWidth: e,
          };
        };
        interpolateValueForItem = (e) =>
          this.animatedIndex.interpolate({
            inputRange: [e - 1, e, e + 1],
            outputRange: [0, 1, 0],
            extrapolate: "clamp",
          });
        animateToIndex(e, t) {
          let { animatedIndex: n } = this,
            { items: i, edgeItems: l } = this.props;
          l > 0 &&
            (0 === e && t === i.length - 1
              ? n.setValue(-1)
              : 0 === t &&
                e === i.length - 1 &&
                i.length > 2 &&
                n.setValue(i.length)),
            o.A.spring(n, { ...u, toValue: e }).start();
        }
        updateAnimatedIndex(e, t) {
          let { animatedIndex: n, animatedOpacity: i } = this,
            { animate: l } = this.props;
          l
            ? this.animateToIndex(e, t)
            : o.A.timing(i, { fromValue: 1, toValue: 0, duration: 100 }).start(
                () => {
                  n.setValue(e),
                    o.A.timing(i, {
                      fromValue: 0,
                      toValue: 1,
                      duration: 100,
                    }).start();
                },
              );
        }
        renderSingleItem() {
          let {
            renderItem: e,
            items: t,
            itemSize: n,
            className: l,
          } = this.props;
          return (0, i.jsx)("div", {
            className: a()(d.T7, d.R9, l),
            children: (0, i.jsx)("div", {
              className: d.SF,
              style: { width: n.width, height: n.height },
              children: e(t[0], 0),
            }),
          });
        }
        renderCarouselItems() {
          let {
              animatedIndex: e,
              animatedAlignmentOffset: t,
              animatedOpacity: n,
            } = this,
            {
              renderItem: l,
              items: r,
              itemSize: a,
              edgeItems: s,
              gutter: u,
            } = this.props,
            { margin: h, width: c } = a,
            m = this.getCarouselTranslate(),
            p = this.getItemStyle(),
            g = (s > 0 ? [...r.slice(-s), ...r, ...r.slice(0, s)] : r).map(
              (e, t) =>
                (0, i.jsx)(
                  "div",
                  {
                    style: p,
                    className: d.AS,
                    children: l(e, t - s, this.interpolateValueForItem(t - s)),
                  },
                  t,
                ),
            );
          return (0, i.jsx)(o.A.div, {
            className: d.Dk,
            style: {
              opacity: n,
              left: o.A.add(
                e.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-m, -h - c - m - u * (r.length - 1)],
                }),
                t,
              ),
            },
            children: g,
          });
        }
        render() {
          let { items: e, className: t, hideOverflow: n } = this.props;
          if (e.length <= 0) throw Error("Carousel has no items");
          return 1 === e.length
            ? this.renderSingleItem()
            : (0, i.jsx)("div", {
                className: a()({ [d.R9]: n }, t),
                children: this.renderCarouselItems(),
              });
        }
      }
      let p = (0, s.A)(m);
    },
    836781(e, t, n) {
      n.d(t, { A: () => X, Z: () => G });
      var i = n(627968),
        l = n(64700),
        r = n(503698),
        a = n.n(r),
        o = n(548411),
        s = n(554830),
        d = n(930125),
        u = n(338717),
        h = n(282108),
        c = n(776231),
        m = n(302031),
        p = n(644447),
        g = n(625494),
        x = n(515718),
        A = n(700331),
        f = n(454290),
        y = n(536763),
        w = n(452282),
        C = n(967758),
        I = n(358731),
        v = n(158816);
      let j = l.memo(function (e) {
        let { items: t, currentIndex: n, children: r } = e,
          o = t[n],
          s = t.length > 1,
          d = (0, C.A)(s, { width: o.width, height: o.height }),
          [u, h] = l.useState(0);
        return (
          l.useEffect(() => {
            let e = () => h((e) => e + 1);
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }),
          l.useEffect(() => {
            if (t.length > 1) {
              let e = t[(0, w.U3)(n - 1, t.length)],
                i = t[(0, w.U3)(n + 1, t.length)];
              G(e, !0), t.length > 2 && G(i, !0);
            }
          }, [n, t]),
          (0, i.jsx)(I.Ay, {
            mode: I.nY.PINNED,
            children: (e) =>
              (0, i.jsx)("div", {
                className: a()(v.k4, e),
                children: (0, i.jsx)(
                  "div",
                  {
                    children:
                      d.width > 0 && d.height > 0 && r(d.width, d.height),
                  },
                  o.url,
                ),
              }),
          })
        );
      });
      var E = n(331322),
        M = n(87221),
        S = n(689175),
        _ = n(939249),
        N = n(775602),
        O = n(607470),
        b = n(619517),
        P = n(154872),
        V = n(838541),
        T = n(985018),
        D = n(656633);
      function L(e) {
        return `media-view-scroll-thumbnail-${e}`;
      }
      let U = l.memo(function (e) {
        let { item: t, enabledContentHarmTypeFlags: n = 0 } = e,
          l = (function (e) {
            if ("IMAGE" === e.type)
              return (0, p.E)({ proxyURL: e.proxyUrl, url: e.url });
            if ("VIDEO" === e.type) {
              if (null != e.poster) return e.poster;
              if (null != e.proxyUrl) return (0, P.VZ)(e.proxyUrl);
            }
            return null;
          })(t);
        return null == l && "VIDEO" === t.type
          ? (0, i.jsx)(O.A, {
              src: `${t.url}#t=1`,
              preload: "metadata",
              muted: !0,
              style: { width: 40, height: 40, objectFit: "cover" },
            })
          : null == l
            ? null
            : (0, h.qo)({ type: d.D.GenericMedia, media: t }, n)
              ? (0, i.jsx)(E.B, {
                  align: "center",
                  justify: "center",
                  className: D.cd,
                  style: { width: 40, height: 40 },
                  children: (0, i.jsx)(M.D, { size: "sm", color: "white" }),
                })
              : (0, i.jsx)(b.Ay, {
                  width: t.width ?? 40,
                  height: t.height ?? 40,
                  maxWidth: 40,
                  maxHeight: 40,
                  useFullWidth: !0,
                  src: l,
                  shouldAnimate: !1,
                  shouldRenderAccessory: !1,
                  srcIsAnimated: t.srcIsAnimated,
                  alt: t.alt,
                  mediaLayoutType: V.dG.MOSAIC,
                });
      });
      function R(e) {
        let {
            items: t,
            currentIndex: n,
            onGalleryItemClick: r,
            className: o,
            enabledContentHarmTypeFlags: s,
          } = e,
          d = l.useRef(null);
        return (
          l.useLayoutEffect(() => {
            let e = document.getElementById(L(n));
            null != d.current &&
              null != e &&
              d.current.scrollIntoViewNode({
                node: e,
                animate: !N.A.useReducedMotion,
                padding: 20,
              });
          }, [n]),
          (0, i.jsx)("div", {
            className: a()(D.IL, o),
            children: (0, i.jsx)(S.Ch, {
              orientation: "horizontal",
              className: a()(D.nV, o),
              ref: d,
              onClick: (e) => e.stopPropagation(),
              children: t.map((e, l) => {
                let o = l === n,
                  d = o ? T.t["qv/U5V"] : T.t.zviMAG;
                return (0, i.jsx)(
                  _.D,
                  {
                    id: L(l),
                    className: a()(D.Qq, {
                      [D.AD]: !o,
                      [D.$1]: 0 === l,
                      [D.HV]: l === t.length - 1,
                    }),
                    "aria-label": T.intl.formatToPlainString(d, {
                      pageNumber: l + 1,
                      totalPages: t.length,
                    }),
                    onClick: () => r(l),
                    children: (0, i.jsx)(U, {
                      item: e,
                      enabledContentHarmTypeFlags: s,
                    }),
                  },
                  l,
                );
              }),
            }),
          })
        );
      }
      var k = n(597351),
        F = n(652215),
        H = n(420165);
      function W(e) {
        let { children: t, isObscured: n, src: r } = e,
          [o, s] = l.useState(!1),
          d = l.useCallback(() => {
            s((e) => !e);
          }, []);
        return n
          ? (0, i.jsx)(m.Bs.Provider, {
              value: o,
              children: (0, i.jsx)(
                m.Ay,
                {
                  type: m.Ay.Types.ATTACHMENT,
                  reason: u.Oc.EXPLICIT_CONTENT,
                  obscured: !0,
                  isSingleMosaicItem: !0,
                  onToggleObscurity: d,
                  children: (e) =>
                    (0, i.jsx)("div", {
                      className: a()(H.JT, { [H.Qr]: e }),
                      children: t(e),
                    }),
                },
                r,
              ),
            })
          : (0, i.jsx)(i.Fragment, { children: t(!1) });
      }
      function G(e, t) {
        if ("IMAGE" !== e.type) return;
        if (!(0, x.eJ)(e)) return void (0, c.yt)(e.url);
        let n = (0, p.E)({ proxyURL: e.proxyUrl, url: e.url });
        (0, y.A)({
          src: n,
          width: e.width,
          height: e.height,
          hasMultiple: t,
          options: e,
        });
      }
      function X(e) {
        let {
            items: t,
            onIndexChange: n,
            startIndex: r = 0,
            enabledContentHarmTypeFlags: u = 0,
            shouldHideMediaOptions: c = !1,
          } = e,
          [m, p] = l.useState(r),
          x = l.useRef(r),
          { zoomed: y, setZoomed: w } = (0, f.Q)(),
          C = l.useCallback(
            (e) => {
              var i;
              p((e = ((e % (i = t.length)) + i) % i)),
                (x.current = e),
                n?.(e),
                w(!1);
            },
            [n, t, w],
          );
        l.useEffect(() => {
          let e = () => C(x.current + 1),
            t = () => C(x.current - 1);
          return (
            g._.subscribe(F.jej.MODAL_CAROUSEL_NEXT, e),
            g._.subscribe(F.jej.MODAL_CAROUSEL_PREV, t),
            () => {
              g._.unsubscribe(F.jej.MODAL_CAROUSEL_NEXT, e),
                g._.unsubscribe(F.jej.MODAL_CAROUSEL_PREV, t);
            }
          );
        }, [C, w]);
        let v = t[m],
          E = (0, h.qo)({ type: d.D.GenericMedia, media: v }, u),
          M = c
            ? (e) => {
                e.stopPropagation(), e.preventDefault();
              }
            : () => A.l.markActionPerformed(A.N.CONTEXT_MENU_OPENED),
          S = t.length > 1;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(I.Ay, {
              children: (e) =>
                S
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(k.A, {
                          onClick: (e) => {
                            e.stopPropagation(),
                              g._.dispatch(F.jej.MODAL_CAROUSEL_PREV);
                          },
                          icon: o.Z,
                          tooltip: T.intl.string(T.t.vgfxaA),
                          className: a()(H.vi, e),
                        }),
                        (0, i.jsx)(k.A, {
                          onClick: (e) => {
                            e.stopPropagation(),
                              g._.dispatch(F.jej.MODAL_CAROUSEL_NEXT);
                          },
                          icon: s.K,
                          tooltip: T.intl.string(T.t.XiOHRX),
                          className: a()(H.f8, e),
                        }),
                      ],
                    })
                  : void 0,
            }),
            (0, i.jsx)(j, {
              items: t,
              currentIndex: m,
              children: (e, t) =>
                (0, i.jsx)(W, {
                  isObscured: !y && E,
                  src: v.url,
                  children: (n) =>
                    (0, i.jsx)(P.Ay, {
                      media: v,
                      maxWidth: e,
                      maxHeight: t,
                      obscured: n,
                      onContextMenu: M,
                    }),
                }),
            }),
            S &&
              (0, i.jsx)(I.Ay, {
                children: (e) =>
                  (0, i.jsx)(R, {
                    items: t,
                    currentIndex: m,
                    onGalleryItemClick: C,
                    className: e,
                    enabledContentHarmTypeFlags: u,
                  }),
              }),
          ],
        });
      }
    },
    358731(e, t, n) {
      n.d(t, { Ay: () => c, nY: () => h });
      var i,
        l = n(64700),
        r = n(503698),
        a = n.n(r),
        o = n(17928),
        s = n(775602),
        d = n(454290),
        u = n(555530),
        h =
          (((i = {}).DEFAULT = "DEFAULT"),
          (i.FOCUS_SENSITIVE = "FOCUS_SENSITIVE"),
          (i.PINNED = "PINNED"),
          i);
      let c = l.memo(function (e) {
        let { children: t, mode: n = "DEFAULT" } = e,
          { zoomed: i } = (0, d.Q)(),
          l = (0, o.bG)([s.A], () => s.A.keyboardModeEnabled);
        return t(
          a()(u.E3, {
            [u.R]: i && !l && "PINNED" !== n,
            [u.rB]: "FOCUS_SENSITIVE" === n,
          }),
        );
      });
    },
    597351(e, t, n) {
      n.d(t, { A: () => d });
      var i = n(627968);
      n(64700);
      var l = n(503698),
        r = n.n(l),
        a = n(990078),
        o = n(939249),
        s = n(642070);
      function d(e) {
        let { onClick: t, icon: n, tooltip: l, className: d } = e,
          u = n({
            color: "currentColor",
            size: "custom",
            width: 20,
            height: 20,
          });
        return (0, i.jsx)(a.m, {
          text: l,
          position: "bottom",
          children: (0, i.jsx)(o.D, {
            onClick: (e) => {
              t(e);
            },
            "aria-label": l,
            className: r()(s.x, d),
            children: (0, i.jsx)("div", { className: s.h, children: u }),
          }),
        });
      }
    },
    154872(e, t, n) {
      n.d(t, { VZ: () => j, Ay: () => E, FX: () => v }), n(938796);
      var i = n(627968),
        l = n(64700),
        r = n(665260),
        a = n(958742),
        o = n(731068),
        s = n(619517),
        d = n(248643),
        u = n(803316),
        h = n(34337),
        c = n(644447),
        m = n(587481),
        p = n(998218),
        g = n(454290),
        x = n(925747),
        A = n(765671),
        f = n(700331);
      function y(e) {
        let { width: t, height: n, offset: i, delta: l } = e,
          r = t > window.innerWidth,
          a = n > window.innerHeight,
          o = (window.innerWidth - t) / 2 + i.x,
          s = (window.innerHeight - n) / 2 + i.y,
          d = (window.innerWidth + t) / 2 + i.x,
          u = (window.innerHeight + n) / 2 + i.y,
          { x: h, y: c } = i;
        return (
          r &&
            ((h += l.x),
            o + l.x > 0 && (h = (t - window.innerWidth) / 2),
            d + l.x < window.innerWidth && (h = (window.innerWidth - t) / 2)),
          a &&
            ((c += l.y),
            s + l.y > 0 && (c = (n - window.innerHeight) / 2),
            u + l.y < window.innerHeight && (c = (window.innerHeight - n) / 2)),
          { x: h, y: c }
        );
      }
      let w = l.memo(function (e) {
        let { children: t } = e,
          {
            scale: n,
            x: r,
            y: a,
            setOffset: o,
            zoomed: s,
            setZoomed: d,
          } = (0, g.Q)(),
          { ref: u, width: h, height: c } = (0, A.Ay)(),
          [m, p] = [h ?? 0, c ?? 0],
          w = l.useRef(!1),
          [C, I] = l.useState({ x: 0, y: 0 }),
          v = (e, t) => {
            let i = y({
              width: m * n.goal,
              height: p * n.goal,
              offset: { x: r.goal, y: a.goal },
              delta: { x: e, y: t },
            });
            o(i.x, i.y, { immediate: !0 });
          };
        return (0, i.jsx)(x.animated.div, {
          ref: u,
          onMouseDown: (e) => {
            s &&
              0 === e.button &&
              (e.preventDefault(),
              (w.current = !0),
              I({ x: e.clientX, y: e.clientY }));
          },
          onMouseUp: (e) => {
            if (!s) {
              if (0 === e.button) {
                f.l.markActionPerformed(f.N.ZOOM_IN_IMAGE_PRESSED), d(!0);
                let t = e.clientX - window.innerWidth / 2,
                  i = e.clientY - window.innerHeight / 2,
                  l = y({
                    width: m * n.goal,
                    height: p * n.goal,
                    offset: { x: 0, y: 0 },
                    delta: { x: -t * (n.goal - 1), y: -i * (n.goal - 1) },
                  });
                o(l.x, l.y);
              }
              return;
            }
            (e.clientX - C.x) ** 2 + (e.clientY - C.y) ** 2 < 400 &&
              (f.l.markActionPerformed(f.N.ZOOM_OUT_IMAGE_PRESSED), d(!1)),
              (w.current = !1);
          },
          onMouseMove: (e) => w.current && v(e.movementX, e.movementY),
          onWheel: (e) => !e.ctrlKey && v(-e.deltaX, -e.deltaY),
          onMouseLeave: () => (w.current = !1),
          onClick: (e) => e.stopPropagation(),
          style: { scale: n, x: r, y: a, cursor: s ? "zoom-out" : "zoom-in" },
          children: t,
        });
      });
      var C = n(652215),
        I = n(610995);
      function v(e, t) {
        return {
          ...e,
          type: (0, o.FE)(e),
          original: e.url,
          srcIsAnimated: (0, r.Lt)(e.flags, o.e5.IS_ANIMATED),
          sourceMetadata: { message: t },
        };
      }
      function j(e) {
        let t = p.A.toURLSafe(e);
        return null == t
          ? null
          : (t.searchParams.append("format", "webp"), t.toString());
      }
      let E = l.memo(function (e) {
        var t, n, l, o, x;
        let A,
          {
            media: f,
            obscured: y = !1,
            maxWidth: v,
            maxHeight: E,
            onContextMenu: M,
          } = e,
          {
            width: S,
            height: _,
            url: N,
            proxyUrl: O,
            alt: b,
            type: P,
            maxWidth: V,
            maxHeight: T,
            ...D
          } = f,
          { zoomed: L } = (0, g.Q)(),
          U = (function (e) {
            if (e?.identifier?.type !== "attachment" || null == e.message)
              return null;
            let t = e.identifier.attachmentId,
              n = e.message.attachments.find((e) => e.id === t);
            return null != n && (0, r.Lt)(n.flags ?? 0, C.sbO.IS_CLIP)
              ? n
              : null;
          })(f.sourceMetadata),
          R =
            ((t = L),
            (n = N),
            (l = O),
            (o = f.contentType),
            (x = f.originalContentType),
            t && p.A.isDiscordAssetUrl(n, o, x)
              ? (0, u.XW)(n, o, x)
              : (0, c.E)({ proxyURL: l, url: n })),
          k = null != S && 0 !== S && null != _ && 0 !== _;
        if ("VIDEO" === P && k && null != O) {
          let e = f.poster ?? j(O);
          if (null == e) return null;
          if (null != U)
            return (0, i.jsx)(a.A, {
              attachment: U,
              src: R,
              posterUrl: e,
              channelId: f.sourceMetadata?.message?.channel_id,
              maxWidth: v,
              maxHeight: E,
              active: !0,
              messageId: f.sourceMetadata?.message?.id,
              autoPlay: f.autoPlay ?? !y,
              autoMute:
                "function" == typeof f.autoMute
                  ? f.autoMute()
                  : (f.autoMute ?? (0, m.uj)()),
              volume: (0, m.v1)(),
              onContextMenu: M,
              onVolumeChange: m.ls,
              onMutedChange: m.y5,
            });
          let t = f.renderLinkComponent ?? h.bU;
          return (0, i.jsx)(d.A, {
            ...D,
            src: R,
            width: S,
            height: _,
            maxWidth: v,
            maxHeight: E,
            poster: e,
            naturalWidth: S,
            naturalHeight: _,
            volume: m.v1,
            autoMute: f.autoMute ?? m.uj,
            onVolumeChange: m.ls,
            onMute: m.y5,
            renderLinkComponent: t,
            autoPlay: f.autoPlay ?? !y,
            alt: b,
            onContextMenu: M,
            disableArrowKeySeek: !0,
          });
        }
        return (
          "IMAGE" === P &&
            (A = k
              ? (0, i.jsx)(s.Ay, {
                  ...D,
                  src: R,
                  width: S,
                  height: _,
                  maxWidth: v,
                  maxHeight: E,
                  useFullWidth: !0,
                  shouldLink: !1,
                  className: I.$_,
                  animated: !y && f.animated,
                  autoPlay: !y,
                  alt: b,
                  onContextMenu: M,
                })
              : (0, i.jsx)("img", {
                  src: R,
                  alt: b,
                  onContextMenu: M,
                  className: I.xx,
                  style: { maxWidth: v, maxHeight: E },
                })),
          null != A ? (0, i.jsx)(w, { children: A }) : null
        );
      });
    },
    454290(e, t, n) {
      n.d(t, { Q: () => a, f: () => r });
      var i = n(64700),
        l = n(925747);
      let r = (0, i.createContext)({
        scale: new l.SpringValue(1),
        x: new l.SpringValue(0),
        y: new l.SpringValue(0),
        setScale() {},
        setOffset() {},
        zoomed: !1,
        setZoomed() {},
      });
      function a() {
        return (0, i.useContext)(r);
      }
    },
    644447(e, t, n) {
      n.d(t, { E: () => i });
      function i(e) {
        let { proxyURL: t, url: n } = e;
        return null != t && "" !== t ? t : n;
      }
    },
  },
]);
//# sourceMappingURL=20382.611afb615bf3d089.js.map
