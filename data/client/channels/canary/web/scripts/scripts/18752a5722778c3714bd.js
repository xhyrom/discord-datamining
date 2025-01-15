"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64676"],
  {
    33122: function (e, t, n) {
      n.d(t, {
        r: function () {
          return P;
        },
      }),
        n(47120);
      var s,
        i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(748780),
        d = n(481060),
        h = n(112724),
        u = n(446411),
        c = n(468846),
        m = n(679056),
        p = n(44488),
        g = n(519160),
        C = n(124347),
        I = n(283756),
        x = n(524444),
        v = n(585483),
        f = n(981631),
        E = n(260243);
      function N(e, t, n) {
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
      function b() {
        var e, t;
        let n =
          ((e = ["grayscale(", ")"]),
          !t && (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
          ));
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      let P = {
          SMALL: { width: 640, height: 360, margin: 15 },
          MEDIUM: { width: 880, height: 495, margin: 20 },
        },
        S = { width: 1920, height: 1080 },
        L = { width: 1280, height: 720 },
        y = (e) =>
          (0, x.lV)({
            ...e,
            className: E.videoWrapper,
            mediaPlayerClassName: E.mediaPlayer,
          }),
        M = (e) => (0, i.jsx)(C.ZP, { ...e }),
        j = (e) => {
          let t,
            n,
            s,
            {
              item: a,
              size: r,
              onPlay: l,
              onEnded: o,
              onClick: h,
              playable: m,
              volume: p,
              isMuted: g,
              onVolumeChange: C,
              onMute: I,
            } = e;
          if (a.type === f.s9s.YOUTUBE_VIDEO)
            (t = { url: (0, f.n8r)(a.youtubeVideoId), ...S }),
              (n = {
                url: ""
                  .concat((0, f.ivE)(a.youtubeVideoId), "?")
                  .concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                ...L,
              }),
              (s = c.pn.YOUTUBE);
          else {
            let e = null != a.width ? a.width : 0,
              s = null != a.height ? a.height : 0;
            (t = { url: a.thumbnailSrc, width: e, height: s }),
              (n = { url: a.src, proxyURL: a.src, width: e, height: s });
          }
          let v = (0, i.jsx)(u.BC, {
            href: null,
            thumbnail: t,
            video: n,
            provider: s,
            allowFullScreen: !0,
            maxHeight: r.height,
            maxWidth: r.width,
            onPlay: l,
            onEnded: o,
            playable: m,
            className: E.video,
            volume: p,
            onVolumeChange: C,
            autoMute: g,
            onMute: I,
            autoPlay: m,
            renderVideoComponent: y,
            renderImageComponent: M,
            renderLinkComponent: x.iT,
          });
          return m
            ? v
            : (0, i.jsx)(d.Clickable, {
                className: E.itemImageWrapper,
                onClick: h,
                children: v,
              });
        },
        _ = () =>
          (0, i.jsx)("div", {
            className: E.paginationVideoOverlay,
            children: (0, i.jsx)(I.Z, {
              inactive: !0,
              className: E.paginationVideoPlayPill,
              renderLinkComponent: x.iT,
            }),
          });
      class A extends (s = a.PureComponent) {
        componentDidMount() {
          v.S.subscribe(f.CkL.CAROUSEL_PREV, this.manualPrevious),
            v.S.subscribe(f.CkL.CAROUSEL_NEXT, this.manualNext);
        }
        componentWillUnmount() {
          v.S.unsubscribe(f.CkL.CAROUSEL_PREV, this.manualPrevious),
            v.S.unsubscribe(f.CkL.CAROUSEL_NEXT, this.manualNext);
        }
        getStyle(e, t) {
          let n = t.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: o.Z.Extrapolate.CLAMP,
          });
          return {
            opacity: t.interpolate({
              inputRange: [0, 1],
              outputRange: [0.3, 1],
              extrapolate: o.Z.Extrapolate.CLAMP,
            }),
            filter: o.Z.template(b(), n),
          };
        }
        handleCurrentItemClick(e, t) {
          let { onCurrentItemClick: n } = this.props;
          null != n && n(e, t), this.setState({ hasInteracted: !0 });
        }
        handleEdgeItemMouseEnter(e) {
          let { currentIndex: t } = this.state;
          e < t
            ? this.setState({ hoveringPreviousItem: !0 })
            : e > t && this.setState({ hoveringNextItem: !0 });
        }
        renderCarousel() {
          let { items: e } = this.props,
            {
              currentIndex: t,
              animate: n,
              hoveringPreviousItem: s,
              hoveringNextItem: a,
            } = this.state,
            r = (0, i.jsx)(g.ZP, {
              items: e,
              itemSize: this.getItemSize(),
              renderItem: this.renderItem,
              currentIndex: t,
              animate: n,
              edgeItems: 2,
            });
          return e.length <= 1
            ? r
            : (0, i.jsxs)("div", {
                className: E.carouselButtonsContainer,
                children: [
                  r,
                  (0, i.jsx)(p.am, {
                    onClick: this.manualPrevious,
                    className: l()(E.arrow, { [E.arrowHovered]: s }),
                  }),
                  (0, i.jsx)(p.Pz, {
                    onClick: this.manualNext,
                    className: l()(E.arrow, { [E.arrowHovered]: a }),
                  }),
                ],
              });
        }
        getPaginationSrc(e) {
          return e.type === f.s9s.YOUTUBE_VIDEO
            ? (0, f.n8r)(e.youtubeVideoId)
            : e.type === f.s9s.IMG
              ? e.src
              : e.type === f.s9s.VIDEO
                ? e.thumbnailSrc
                : null;
        }
        render() {
          let {
              items: e,
              className: t,
              autoplayInterval: n,
              paused: s,
            } = this.props,
            { currentIndex: a, playingVideo: r, hasInteracted: l } = this.state;
          return (0, i.jsxs)(m.Z, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: n,
            className: t,
            disable: r || l || s,
            children: [
              this.renderCarousel(),
              (0, i.jsx)("div", {
                className: E.pagination,
                children: (0, i.jsx)(p.ZP, {
                  renderItem: this.renderPaginationItem,
                  scrollToPadding: 85,
                  items: e,
                  selectedIndex: a,
                  onSetItem: (e) => this.setItem(e, !0),
                  paginationContainerClass: E.scroller,
                  align: e.length < 6 ? p.ZP.Align.LEFT : p.ZP.Align.CENTER,
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            N(this, "state", {
              currentIndex: 0,
              animate: !0,
              playingVideo: !1,
              hasInteracted: !1,
              hoveringPreviousItem: !1,
              hoveringNextItem: !1,
              volume: 1,
              isMuted: !0,
            }),
            N(this, "getItemSize", () => {
              let { width: e } = this.props,
                t = P.MEDIUM;
              return null != e && e < t.width && (t = P.SMALL), t;
            }),
            N(this, "setItem", (e, t) => {
              let {
                  props: { items: n, onIntentionalChange: s },
                  state: { currentIndex: i },
                } = this,
                a = (0, g.gN)(i, n.length),
                r = (0, g.gN)(e, n.length),
                l =
                  1 === Math.abs(e - a) ||
                  (e === n.length - 1 && 0 === a) ||
                  (0 === e && a === n.length - 1);
              this.setState({
                playingVideo: !1,
                currentIndex: r,
                animate: l,
                hasInteracted: t,
              }),
                t && null != s && s(n[r], a, r);
            }),
            N(this, "autoNext", () => {
              this.setItem(this.state.currentIndex + 1, !1);
            }),
            N(this, "manualNext", () => {
              this.setItem(this.state.currentIndex + 1, !0);
            }),
            N(this, "manualPrevious", () => {
              this.setItem(this.state.currentIndex - 1, !0);
            }),
            N(this, "handlePlay", (e) =>
              this.setState({ playingVideo: !0, hasInteracted: !e }),
            ),
            N(this, "handleEnded", () => {
              !this.state.hasInteracted && this.autoNext();
            }),
            N(this, "handleVolumeChange", (e) => {
              this.setState({ volume: e, hasInteracted: !0 });
            }),
            N(this, "handleMute", (e) => {
              this.setState({ isMuted: e, hasInteracted: !0 });
            }),
            N(this, "handleVideoClick", (e) => {
              this.setItem(e, !0);
            }),
            N(this, "handleEdgeItemMouseLeave", () => {
              this.setState({ hoveringPreviousItem: !1, hoveringNextItem: !1 });
            }),
            N(this, "renderCarouselImage", (e, t, n) =>
              n
                ? (0, i.jsx)(d.Clickable, {
                    onClick: () => this.handleCurrentItemClick(e, t),
                    className: E.itemImageWrapper,
                    children: (0, i.jsx)("img", {
                      src: e.src,
                      alt: "",
                      className: E.currentImage,
                    }),
                  })
                : (0, i.jsx)(d.Clickable, {
                    onClick: () => this.setItem(t, !0),
                    className: E.itemImageWrapper,
                    children: (0, i.jsx)("img", {
                      alt: "",
                      className: E.itemImage,
                      src: e.src,
                      draggable: !1,
                    }),
                  }),
            ),
            N(this, "renderItem", (e, t, n) => {
              let { currentIndex: s, volume: a, isMuted: r } = this.state,
                d = t === (0, g.gN)(s, this.props.items.length);
              return (0, i.jsx)(o.Z.div, {
                className: l()(E.item, { [E.currentItem]: d }),
                style: null != n ? this.getStyle(t, n) : null,
                onMouseEnter: d ? null : () => this.handleEdgeItemMouseEnter(t),
                onMouseLeave: d ? null : this.handleEdgeItemMouseLeave,
                children:
                  e.type === f.s9s.VIDEO || e.type === f.s9s.YOUTUBE_VIDEO
                    ? (0, i.jsx)(j, {
                        item: e,
                        size: this.getItemSize(),
                        onPlay: this.handlePlay,
                        onEnded: this.handleEnded,
                        playable: d,
                        onClick: () => this.handleVideoClick(t),
                        volume: a,
                        onVolumeChange: this.handleVolumeChange,
                        isMuted: r,
                        onMute: this.handleMute,
                      })
                    : this.renderCarouselImage(e, t, d),
              });
            }),
            N(this, "renderPaginationItem", (e, t) => {
              let { currentIndex: n } = this.state,
                s = n === t;
              return (0, i.jsxs)(
                "div",
                {
                  className: l()(
                    E.paginationItem,
                    s
                      ? E.selectedStorePaginationItem
                      : E.unselectedStorePaginationItem,
                  ),
                  children: [
                    (0, i.jsx)("img", {
                      alt: null == e.alt ? t : e.alt,
                      className: E.storePaginationImg,
                      src: this.getPaginationSrc(e),
                      draggable: !1,
                    }),
                    e.type === f.s9s.YOUTUBE_VIDEO || e.type === f.s9s.VIDEO
                      ? (0, i.jsx)(_, {})
                      : null,
                    s
                      ? (0, i.jsx)("div", { className: E.overlappingBorder })
                      : null,
                  ],
                },
                "page-".concat(t),
              );
            });
        }
      }
      N(A, "defaultProps", { autoplayInterval: 8e3, paused: !1 }),
        (t.Z = (0, h.Z)(A));
    },
    761705: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(47120),
        n(653041);
      var s,
        i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(299608),
        d = n.n(o),
        h = n(748780),
        u = n(215569),
        c = n(376641),
        m = n(714338),
        p = n(134432),
        g = n(44488),
        C = n(585483),
        I = n(981631),
        x = n(795754);
      function v(e, t, n) {
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
      let f = { friction: 10, tension: 100 };
      function E(e, t) {
        return ((e % t) + t) % t;
      }
      class N extends a.Component {
        componentWillEnter(e) {
          let { directionHistory: t } = this.props,
            { translate: n, opacity: s } = this.state;
          n.setValue(t[t.length - 1]),
            s.setValue(0),
            e(),
            h.Z.parallel([
              h.Z.timing(s, {
                toValue: 1,
                easing: h.Z.Easing.out(h.Z.Easing.linear),
                duration: 200,
              }),
              h.Z.spring(n, { toValue: 0, ...f }),
            ]).start();
        }
        componentWillLeave(e) {
          let { directionHistory: t } = this.props,
            { opacity: n, translate: s } = this.state;
          h.Z.parallel([
            h.Z.timing(n, {
              toValue: 0,
              easing: h.Z.Easing.in(h.Z.Easing.linear),
              duration: 200,
            }),
            h.Z.spring(s, { toValue: -1 * t[t.length - 1], ...f }),
          ]).start(e);
        }
        getStyle() {
          let { translate: e, opacity: t } = this.state;
          return h.Z.accelerate({
            opacity: t,
            transform: [
              {
                translateX: e.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0px", "300px"],
                }),
              },
            ],
          });
        }
        render() {
          let { item: e } = this.props,
            { className: t } = this.props;
          return (0, i.jsx)(h.Z.img, {
            src: e.src,
            alt: "",
            className: l()(x.slide, t),
            style: this.getStyle(),
          });
        }
        constructor(...e) {
          super(...e),
            v(this, "state", {
              translate: new h.Z.Value(0),
              opacity: new h.Z.Value(1),
            });
        }
      }
      class b extends (s = a.Component) {
        componentDidMount() {
          this.preloadNextImages(),
            m.Z.disable(),
            m.Z.enableTemp(c.P),
            C.S.subscribe(I.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
            C.S.subscribe(I.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
        }
        componentWillUnmount() {
          m.Z.disableTemp(),
            C.S.unsubscribe(I.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
            C.S.unsubscribe(I.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
        }
        preloadNextImages() {
          var e, t;
          let { currentIndex: n } = this.state,
            { items: s } = this.props;
          let i = (((n + 1) % (e = s.length)) + e) % e;
          let a = (((n - 1) % (t = s.length)) + t) % t;
          this.preloadImage(s[i]), this.preloadImage(s[a]);
        }
        preloadImage(e) {
          (0, p.po)(e.src);
        }
        componentDidUpdate(e, t) {
          let { currentIndex: n } = this.state;
          n !== t.currentIndex && this.preloadNextImages();
        }
        navigateTo(e) {
          var t, n, s;
          let { directionHistory: i, currentIndex: a } = this.state;
          i.push(e - a),
            (e = ((e % (s = this.props.items.length)) + s) % s),
            this.setState({ currentIndex: e, directionHistory: i }),
            null === (t = (n = this.props).onIndexChange) ||
              void 0 === t ||
              t.call(n, e);
        }
        render() {
          var e;
          let { className: t } = this.props,
            { currentIndex: n, directionHistory: s } = this.state,
            { modalCarouselItemClassName: a } = this.props,
            r = this.props.items[n],
            o = this.props.items;
          return (0, i.jsxs)(u.W, {
            component: "div",
            className: l()(x.wrapper, t),
            children: [
              o.length > 1
                ? (0, i.jsx)(g.am, {
                    className: x.navPrev,
                    onClick: this.gotoPrev,
                  })
                : null,
              null !== (e = r.component) && void 0 !== e
                ? e
                : (0, i.jsx)(
                    N,
                    { item: r, directionHistory: s, className: a },
                    r.src,
                  ),
              o.length > 1
                ? (0, i.jsx)(g.Pz, {
                    className: x.navNext,
                    onClick: this.gotoNext,
                  })
                : null,
            ],
          });
        }
        constructor(e) {
          super(e),
            v(this, "gotoNext", () => {
              let { currentIndex: e } = this.state;
              this.navigateTo(e + 1);
            }),
            v(this, "gotoPrev", () => {
              let { currentIndex: e } = this.state;
              this.navigateTo(e - 1);
            }),
            v(this, "gotoNextThrottled", d()(this.gotoNext, 300)),
            v(this, "gotoPrevThrottled", d()(this.gotoPrev, 300)),
            (this.state = { currentIndex: e.startWith, directionHistory: [] });
        }
      }
      v(b, "defaultProps", { startWith: 0 });
    },
    15470: function (e, t, n) {
      n.d(t, {
        i: function () {
          return I;
        },
      }),
        n(47120);
      var s = n(200651),
        i = n(192379),
        a = n(120356),
        r = n.n(a),
        l = n(477660),
        o = n.n(l),
        d = n(481060),
        h = n(770146),
        u = n(241209),
        c = n(73346),
        m = n(388032),
        p = n(779263);
      function g(e, t, n) {
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
      let C = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
        I = {
          ...u.Z.rules,
          heading: {
            ...u.Z.rules.heading,
            react(e, t, n) {
              let i = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
              return (0, s.jsx)(
                h.Z,
                { tag: i, children: t(e.content, n) },
                n.key,
              );
            },
          },
          assetImage: {
            order: 5,
            match(e, t) {
              let n = e.match(C);
              if (null != n) {
                let e = n[2],
                  s = t.assets.find((t) => t.id === e);
                return null != s && [...n, s, t.applicationId];
              }
              return !1;
            },
            parse: (e) => ({ asset: e[3], alt: e[1], applicationId: e[4] }),
            react: (e, t, n) =>
              (0, s.jsx)(
                "div",
                {
                  className: p.assetWrapper,
                  children: (0, s.jsx)("img", {
                    alt: e.alt,
                    src: (0, c._W)(e.applicationId, e.asset, 800),
                    className: p.asset,
                  }),
                },
                n.key,
              ),
          },
        },
        x = o().parserFor(I),
        v = o().reactFor(o().ruleOutput(I, "react"));
      class f extends i.PureComponent {
        componentDidMount() {
          if (null != this._container) {
            let { height: e } = this._container.getBoundingClientRect();
            this.setState({ collapsable: e > 400 });
          }
        }
        render() {
          let {
              applicationId: e,
              description: t,
              blurb: n,
              className: i,
              assets: a,
            } = this.props,
            { collapsed: l, collapsable: o } = this.state;
          return (0, s.jsxs)("div", {
            className: i,
            children: [
              (0, s.jsx)("div", {
                className: r()({ [p.collapsed]: o && l }),
                children: (0, s.jsxs)("div", {
                  ref: this.setContentContainerRef,
                  children: [
                    (0, s.jsx)("div", { className: p.blurb, children: n }),
                    (0, s.jsx)(u.Z, {
                      className: p.description,
                      parser: x,
                      output: v,
                      state: { assets: a, applicationId: e },
                      children: t,
                    }),
                  ],
                }),
              }),
              o
                ? (0, s.jsx)(d.Button, {
                    className: p.toggleCollapseButton,
                    onClick: this.handleToggleCollapse,
                    color: d.Button.Colors.PRIMARY,
                    children: l
                      ? m.intl.string(m.t.DxcOXF)
                      : m.intl.string(m.t.rD6EaG),
                  })
                : null,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            g(this, "state", { collapsed: !0, collapsable: !0 }),
            g(this, "_container", void 0),
            g(this, "handleToggleCollapse", () => {
              this.setState({ collapsed: !this.state.collapsed });
            }),
            g(this, "setContentContainerRef", (e) => {
              this._container = e;
            });
        }
      }
      t.Z = f;
    },
    445986: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return c;
        },
      }),
        n(653041),
        n(47120);
      var s = n(200651),
        i = n(192379),
        a = n(481060),
        r = n(33122),
        l = n(761705),
        o = n(9807),
        d = n(843445),
        h = n(981631),
        u = n(388032);
      function c(e) {
        return "".concat(e.split("?")[0], "?size=").concat(2048);
      }
      let m = (e) => {
        let { index: t, items: n, ...i } = e,
          a = n[t],
          r = 0,
          o = [];
        for (let e of n)
          if (e.type === h.s9s.IMG) {
            let { width: t, height: n, src: s } = e;
            e === a && (r = o.length),
              o.push({ src: c(s), width: t, height: n });
          }
        return (0, s.jsx)(l.Z, { ...i, items: o, startWith: r });
      };
      class p extends i.Component {
        render() {
          let { pageSize: e, ...t } = this.props,
            n = e === d.b.SMALL ? o.Z : r.Z;
          return (0, s.jsx)(n, {
            ...t,
            onCurrentItemClick: this.handleCurrentItemClick,
          });
        }
        constructor(...e) {
          var t, n, i;
          super(...e),
            (t = this),
            (n = "handleCurrentItemClick"),
            (i = (e, t) => {
              e.type === h.s9s.IMG &&
                !(0, a.hasAnyModalOpen)() &&
                (0, a.openModal)((e) =>
                  (0, s.jsx)(a.ModalRoot, {
                    size: a.ModalSize.DYNAMIC,
                    "aria-label": u.intl.string(u.t.X4IxWF),
                    ...e,
                    children: (0, s.jsx)(m, {
                      ...e,
                      index: t,
                      items: this.props.items,
                    }),
                  }),
                );
            }),
            n in t
              ? Object.defineProperty(t, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = i);
        }
      }
      t.Z = p;
    },
    843445: function (e, t, n) {
      n.d(t, {
        b: function () {
          return i;
        },
        x: function () {
          return s;
        },
      });
      let s = 1e3,
        i = Object.freeze({ SMALL: "small", LARGE: "large" });
    },
    9807: function (e, t, n) {
      n(47120), n(411104);
      var s,
        i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(481060),
        d = n(33122),
        h = n(446411),
        u = n(468846),
        c = n(453499),
        m = n(124347),
        p = n(80966),
        g = n(524444),
        C = n(843445),
        I = n(981631),
        x = n(388032),
        v = n(877564);
      function f(e, t, n) {
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
      let E = (e) => {
          let { className: t, ...n } = e;
          return (0, i.jsx)(p.Z, {
            ...n,
            className: l()(v.sizedToParent, t),
            mediaPlayerClassName: v.sizedToParent,
            renderLinkComponent: g.iT,
          });
        },
        N = (e) => {
          let { containerClassName: t, className: n, ...s } = e;
          return (0, i.jsx)(m.ZP, { ...s, className: l()(n, t) });
        },
        b = { width: 1280, height: 720 },
        P = { width: 640, height: 360 },
        S = (e) => {
          let t,
            n,
            s,
            {
              item: a,
              onPlay: r,
              volume: l,
              onVolumeChange: o,
              onMute: c,
              isMuted: m,
              autoPlay: p,
            } = e;
          if (a.type === I.s9s.YOUTUBE_VIDEO)
            (t = { url: (0, I.n8r)(a.youtubeVideoId), ...b }),
              (n = {
                url: ""
                  .concat((0, I.ivE)(a.youtubeVideoId), "?")
                  .concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                ...P,
              }),
              (s = u.pn.YOUTUBE);
          else {
            let e = null != a.width ? a.width : 0,
              s = null != a.height ? a.height : 0;
            (t = { url: a.thumbnailSrc, width: e, height: s }),
              (n = { url: a.src, proxyURL: a.src, width: e, height: s });
          }
          return (0, i.jsx)("div", {
            className: v.embedContainer,
            children: (0, i.jsx)(h.BC, {
              className: v.sizedToParent,
              iframeWrapperClassName: v.sizedToParent,
              href: null,
              thumbnail: t,
              video: n,
              provider: s,
              maxHeight: d.r.SMALL.height,
              maxWidth: C.b.SMALL,
              onPlay: r,
              playable: !0,
              volume: l,
              onVolumeChange: o,
              autoMute: m,
              onMute: c,
              autoPlay: p,
              renderImageComponent: N,
              renderVideoComponent: E,
              renderLinkComponent: g.iT,
            }),
          });
        };
      class L extends (s = a.PureComponent) {
        componentDidMount() {
          let { items: e } = this.props;
          e.length > 0 &&
            e[0].type === I.s9s.IMG &&
            this.setState({
              imageLoadingStartTime: new Map(
                this.state.imageLoadingStartTime,
              ).set(e[0].src, Date.now()),
            });
        }
        handleCurrentItemClick(e, t) {
          let { onCurrentItemClick: n } = this.props;
          null != n && n(e, t), this.setState({ hasInteracted: !0 });
        }
        render() {
          let {
              items: e,
              autoplayInterval: t,
              className: n,
              paused: s,
              themedPagination: a,
            } = this.props,
            { hasInteracted: r } = this.state;
          return (0, i.jsx)(c.Z, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: s || r,
            renderItem: this.renderItem,
            className: l()(v.smallCarousel, n),
            themedPagination: a,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
          });
        }
        constructor(...e) {
          super(...e),
            f(this, "state", {
              hasInteracted: !1,
              isVideoPlaying: !1,
              isMuted: !0,
              volume: 1,
              status: new Map(),
              imageLoadingStartTime: new Map(),
            }),
            f(this, "handlePlay", (e) => {
              this.setState({ isVideoPlaying: !0, hasInteracted: !e });
            }),
            f(this, "handleVolumeChange", (e) => {
              this.setState({ volume: e, hasInteracted: !0 });
            }),
            f(this, "handleMute", (e) => {
              this.setState({ isMuted: e, hasInteracted: !0 });
            }),
            f(this, "handleChangeItem", (e) => {
              this.setState({ isVideoPlaying: !1 }),
                e.type === I.s9s.IMG &&
                  this.setState({
                    imageLoadingStartTime: new Map(
                      this.state.imageLoadingStartTime,
                    ).set(e.src, Date.now()),
                  });
            }),
            f(this, "handleIntentionalChange", (e, t, n, s) => {
              this.setState({ hasInteracted: !0 });
              let { onIntentionalChange: i } = this.props;
              null != i && i(e, t, n, s);
            }),
            f(this, "handleOnErrorImg", (e) => {
              this.setState({
                status: new Map(this.state.status).set(e.target.src, "errored"),
              });
            }),
            f(this, "handleOnLoadImg", (e) => {
              let { onImageLoad: t } = this.props;
              this.setState({
                status: new Map(this.state.status).set(e.target.src, "loaded"),
              });
              let n = this.state.imageLoadingStartTime.get(e.target.src),
                s = null != n ? Date.now() - n : void 0;
              null == t || t({ src: e.target.src, loadTimeMs: s });
            }),
            f(this, "renderItem", (e, t) => {
              let n;
              let { isMuted: s, volume: a } = this.state,
                { videoAutoPlay: r } = this.props;
              switch (e.type) {
                case I.s9s.YOUTUBE_VIDEO:
                case I.s9s.VIDEO:
                  n = (0, i.jsx)(S, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: s,
                    volume: a,
                    onVolumeChange: this.handleVolumeChange,
                    onMute: this.handleMute,
                    autoPlay: r,
                  });
                  break;
                case I.s9s.IMG:
                  if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, i.jsx)(o.Heading, {
                      variant: "heading-xl/semibold",
                      children: x.intl.string(x.t.UvDfMz),
                    });
                    return (0, i.jsx)("div", {
                      className: v.errorContainer,
                      children:
                        void 0 !== this.props.errorComponent
                          ? this.props.errorComponent
                          : e,
                    });
                  }
                  {
                    var d;
                    let t =
                      null !== (d = e.alt) && void 0 !== d
                        ? d
                        : x.intl.string(x.t.X4IxWF);
                    n = (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(o.Spinner, {
                          className: l()(v.spinner, {
                            [v.hidden]: void 0 !== this.state.status.get(e.src),
                          }),
                          type: o.Spinner.Type.SPINNING_CIRCLE,
                        }),
                        (0, i.jsx)("img", {
                          onError: this.handleOnErrorImg,
                          onLoad: this.handleOnLoadImg,
                          className: l()(v.smallCarouselImage, {
                            [v.hidden]:
                              "loaded" !== this.state.status.get(e.src),
                          }),
                          src: e.src,
                          alt: t,
                        }),
                      ],
                    });
                  }
                  break;
                default:
                  throw Error("Unexpected MediaType");
              }
              return (0, i.jsx)(o.Clickable, {
                className: v.smallCarouselItem,
                onClick: () => this.handleCurrentItemClick(e, t),
                children: n,
              });
            });
        }
      }
      f(L, "defaultProps", { paused: !1, videoAutoPlay: !0 }), (t.Z = L);
    },
    817718: function (e, t, n) {
      n.d(t, {
        U3: function () {
          return c;
        },
        XM: function () {
          return h;
        },
        hd: function () {
          return d;
        },
        lI: function () {
          return o;
        },
        py: function () {
          return u;
        },
      });
      var s = n(481060),
        i = n(819640),
        a = n(585483),
        r = n(981631);
      let l = () => i.Z.hasLayers() || (0, s.hasAnyModalOpen)(),
        o = {
          binds: ["right"],
          comboKeysBindGlobal: !0,
          action() {
            if (!l()) return a.S.dispatch(r.CkL.CAROUSEL_NEXT), !1;
          },
        },
        d = {
          binds: ["left"],
          comboKeysBindGlobal: !0,
          action() {
            if (!l()) return a.S.dispatch(r.CkL.CAROUSEL_PREV), !1;
          },
        },
        h = {
          binds: ["right", "down", "space"],
          comboKeysBindGlobal: !0,
          action: () => (a.S.dispatch(r.CkL.MODAL_CAROUSEL_NEXT), !1),
        },
        u = {
          binds: ["left", "up"],
          comboKeysBindGlobal: !0,
          action: () => (a.S.dispatch(r.CkL.MODAL_CAROUSEL_PREV), !1),
        },
        c = {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action() {
            if (a.S.hasSubscribers(r.CkL.MODAL_CLOSE))
              return a.S.dispatch(r.CkL.MODAL_CLOSE), !1;
          },
        };
    },
    376641: function (e, t, n) {
      n.d(t, {
        P: function () {
          return a;
        },
        v: function () {
          return r;
        },
      });
      var s = n(817718),
        i = n(981631);
      let a = {
          [i.EkH.MODAL_CAROUSEL_NEXT]: s.XM,
          [i.EkH.MODAL_CAROUSEL_PREV]: s.py,
          [i.EkH.CLOSE_MODAL]: s.U3,
        },
        r = { [i.EkH.CLOSE_MODAL]: s.U3 };
    },
    326135: function (e, t, n) {
      n.d(t, {
        G: function () {
          return i;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var s = n(981631);
      let i = (e) => {
        let { id: t, name: n, locale: i } = e,
          a = "https://"
            .concat(s.xr4, "/hc/")
            .concat(i.toLowerCase(), "/requests/new"),
          r = new URLSearchParams();
        return (
          r.append(
            "tf_12275088515223",
            "field_value_dc_category_report_an_app_bot",
          ),
          r.append(
            "tf_12276208289431",
            "field_value_dc_reported_action_app_directory",
          ),
          r.append("tf_12094971213335", t),
          r.append("ticket_form_id", "12275528604823"),
          r.append(
            "tf_subject",
            "App Directory Report ".concat(n, " ").concat(t),
          ),
          "".concat(a, "?").concat(r.toString())
        );
      };
    },
    214912: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var s = n(200651);
      n(192379);
      var i = n(120356),
        a = n.n(i),
        r = n(481060),
        l = n(410030),
        o = n(686546),
        d = n(565138),
        h = n(372769),
        u = n(134432),
        c = n(601964),
        m = n(768581),
        p = n(981631),
        g = n(388032),
        C = n(263021),
        I = n(129512),
        x = n(330065);
      function v(e) {
        let { guild: t, className: n, onClick: i } = e,
          v = (0, l.ZP)(),
          f = new c.ZP({ name: t.name, icon: t.icon }),
          E = m.ZP.getGuildDiscoverySplashURL({
            id: t.id,
            splash: t.discovery_splash,
            size: 192 * (0, u.x_)(),
          }),
          N =
            null != E
              ? E
              : (function (e) {
                  switch (e) {
                    case p.BRd.DARK:
                      return I;
                    case p.BRd.LIGHT:
                      return x;
                  }
                })(v),
          b = m.ZP.getGuildIconURL({ id: t.id, icon: t.icon, size: 50 });
        return (0, s.jsxs)(r.Clickable, {
          className: a()(C.card, n),
          onClick: i,
          "aria-label": g.intl.string(g.t.RB4L29),
          children: [
            (0, s.jsxs)("div", {
              className: C.cardHeader,
              children: [
                (0, s.jsx)("img", {
                  src: N,
                  alt: "",
                  className: C.splashImage,
                }),
                (0, s.jsx)("div", {
                  className: C.guildIcon,
                  children: (0, s.jsx)(o.ZP, {
                    mask: o.ZP.Masks.AVATAR_DEFAULT,
                    width: 58,
                    height: 58,
                    children: (0, s.jsx)("div", {
                      className: C.iconMask,
                      children: (0, s.jsx)(d.Z, {
                        className: C.__invalid_icon,
                        iconSrc: b,
                        guild: f,
                        size: d.Z.Sizes.LARGE,
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: C.cardDetails,
              children: [
                (0, s.jsxs)("div", {
                  className: C.guildNameWrapper,
                  children: [
                    (0, s.jsx)(h.Z, {
                      className: C.guildBadge,
                      guild: t,
                      tooltipColor: r.Tooltip.Colors.PRIMARY,
                    }),
                    (0, s.jsx)(r.Heading, {
                      variant: "heading-md/semibold",
                      className: C.guildName,
                      children: t.name,
                    }),
                  ],
                }),
                (0, s.jsx)(r.Text, {
                  className: C.guildDescription,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  lineClamp: 2,
                  children: t.description,
                }),
                (0, s.jsx)("div", {
                  className: C.memberInfo,
                  children: (0, s.jsxs)("div", {
                    className: C.memberCountWrapper,
                    children: [
                      (0, s.jsx)(r.UserIcon, {
                        color: "currentColor",
                        className: C.memberCountIcon,
                        size: "xs",
                      }),
                      (0, s.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: g.intl.format(g.t.zRl6XV, {
                          count: t.approximate_member_count,
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    939893: function (e, t, n) {
      var s = n(200651);
      n(192379);
      var i = n(477660),
        a = n.n(i),
        r = n(481060),
        l = n(447543),
        o = n(15470),
        d = n(960904),
        h = n(830121),
        u = n(746878),
        c = n(241209);
      let m = /^discord.gg\/[a-zA-Z0-9-]+/,
        p = {
          ...c.Z.rules,
          heading: { ...o.i.heading },
          image: { ...a().defaultRules.image },
          inviteLink: {
            order: c.Z.rules.link.order + 1,
            match: (e, t) => (t.inline ? m.exec(e) : null),
            parse: (e, t, n) => {
              let s = (0, h.zO)(e[0]);
              return null == s || s.type !== d.g.INVITE
                ? { type: "text", content: e[0] }
                : {
                    type: "inviteLink",
                    content: [{ type: "text", content: e[0] }],
                    onClick: () => {
                      var e;
                      l.Z.acceptInviteAndTransitionToInviteChannel({
                        inviteKey: s.code,
                        context: { location: "Application Directory" },
                      }),
                        null === (e = n.closeModal) ||
                          void 0 === e ||
                          e.call(n);
                    },
                  };
            },
            react: (e, t, n) =>
              (0, s.jsx)(
                r.Anchor,
                {
                  onClick: (t) => {
                    t.preventDefault(), e.onClick();
                  },
                  children: (0, u.S)(e, t, n),
                },
                n.key,
              ),
          },
        };
      t.Z = p;
    },
    860719: function (e, t, n) {
      n.d(t, {
        w: function () {
          return i;
        },
      }),
        n(789020);
      var s = n(85025);
      function i(e) {
        let { flags: t } = e,
          n = (0, s.O)(t),
          i =
            null != n &&
            ((null == n ? void 0 : n.messageContent) ||
              (null == n ? void 0 : n.messageContentLimited)),
          a =
            null != n &&
            ((null == n ? void 0 : n.guildPresences) ||
              (null == n ? void 0 : n.guildPresencesLimited)),
          r =
            null != n &&
            ((null == n ? void 0 : n.guildMembers) ||
              (null == n ? void 0 : n.guildMembersLimited));
        return {
          hasMessageContent: i,
          hasGuildPresences: a,
          hasGuildMembers: r,
          hasIntents: i || a || r,
        };
      }
    },
    85025: function (e, t, n) {
      n.d(t, {
        O: function () {
          return a;
        },
      });
      var s = n(630388),
        i = n(981631);
      function a(e) {
        if (null != e)
          return {
            guildPresences: (0, s.yE)(e, i.udG.GATEWAY_PRESENCE),
            guildMembers: (0, s.yE)(e, i.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, s.yE)(e, i.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, s.yE)(e, i.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, s.yE)(
              e,
              i.udG.GATEWAY_GUILD_MEMBERS_LIMITED,
            ),
            messageContentLimited: (0, s.yE)(
              e,
              i.udG.GATEWAY_MESSAGE_CONTENT_LIMITED,
            ),
          };
      }
    },
    44488: function (e, t, n) {
      n.d(t, {
        Pz: function () {
          return g;
        },
        am: function () {
          return p;
        },
      }),
        n(47120);
      var s,
        i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(481060),
        d = n(768762),
        h = n(39741);
      function u(e, t, n) {
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
      let c = { CENTER: h.alignCenter, LEFT: h.alignLeft };
      class m extends (s = a.PureComponent) {
        componentDidUpdate(e) {
          let { selectedIndex: t } = this.props;
          e.selectedIndex !== t && this.handleSelectedIndexChange(t);
        }
        render() {
          let {
              renderItem: e,
              items: t,
              vertical: n,
              paginationContainerClass: s,
              align: r,
            } = this.props,
            d = n
              ? h.verticalPaginationItemContainer
              : h.horizontalPaginationItemContainer;
          return (0, i.jsx)(o.AdvancedScrollerAuto, {
            orientation: n ? "vertical" : "horizontal",
            className: l()(d, s, r),
            ref: this.handleSetScrollerRef,
            children: t.map((t, n) =>
              a.cloneElement(e(t, n), {
                onClick: () => this.handlePageClick(n),
                key: n,
                ref: (e) => {
                  this._paginationItemRefs[n] = e;
                },
              }),
            ),
          });
        }
        constructor(...e) {
          super(...e),
            u(this, "_scrollerRef", null),
            u(this, "_paginationItemRefs", []),
            u(this, "handleSetScrollerRef", (e) => {
              this._scrollerRef = e;
            }),
            u(this, "handleSelectedIndexChange", (e) => {
              let t = this._scrollerRef;
              if (null == t) return;
              let n = this._paginationItemRefs[e];
              if (null != n)
                t.scrollIntoViewNode({
                  node: n,
                  animate: !0,
                  padding: this.props.scrollToPadding,
                });
            }),
            u(this, "handlePageClick", (e) => {
              let { onSetItem: t } = this.props;
              t(e);
            });
        }
      }
      u(m, "Align", c),
        u(m, "defaultProps", {
          scrollToPadding: { top: 0, left: 0, bottom: 0, right: 0 },
          align: c.CENTER,
        });
      class p extends a.PureComponent {
        render() {
          let { className: e } = this.props;
          return (0, i.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.NONE,
            className: l()(h.prevButtonContainer, e),
            onClick: this.handlePrevClick,
            children: (0, i.jsx)(d.Z, {
              className: h.arrow,
              direction: d.Z.Directions.LEFT,
            }),
          });
        }
        constructor(...e) {
          super(...e),
            u(this, "handlePrevClick", (e) => {
              e.stopPropagation(), e.preventDefault();
              let { onClick: t } = this.props;
              null == t || t(e);
            });
        }
      }
      class g extends a.PureComponent {
        render() {
          let { className: e } = this.props;
          return (0, i.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.NONE,
            className: l()(h.nextButtonContainer, e),
            onClick: this.handleNextClick,
            children: (0, i.jsx)(d.Z, {
              className: h.arrow,
              direction: d.Z.Directions.RIGHT,
            }),
          });
        }
        constructor(...e) {
          super(...e),
            u(this, "handleNextClick", (e) => {
              e.stopPropagation(), e.preventDefault();
              let { onClick: t } = this.props;
              null == t || t(e);
            });
        }
      }
      t.ZP = m;
    },
    519160: function (e, t, n) {
      n.d(t, {
        gN: function () {
          return g;
        },
      }),
        n(47120),
        n(411104);
      var s,
        i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(748780),
        d = n(112724),
        h = n(833139);
      function u(e, t, n) {
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
      let c = { tension: 7, friction: 5, overshootClamping: !0 },
        m = "center",
        p = "right";
      function g(e, t) {
        return ((e % t) + t) % t;
      }
      class C extends (s = a.Component) {
        componentDidMount() {
          this.animatedIndex.setValue(this.props.currentIndex);
        }
        componentDidUpdate(e) {
          let {
              align: t,
              animate: n,
              currentIndex: s,
              items: i,
              width: a,
            } = this.props,
            r = g(s, i.length),
            l = g(e.currentIndex, i.length);
          (r !== l || i.length !== e.items.length) &&
            this.updateAnimatedIndex(r, l),
            a !== e.width
              ? this.animatedAlignmentOffset.setValue(
                  this.getAlignmentOffset(t),
                )
              : n &&
                (t !== e.align || r !== l) &&
                o.Z.spring(this.animatedAlignmentOffset, {
                  ...c,
                  toValue: this.getAlignmentOffset(t),
                }).start();
        }
        getAlignmentOffset(e) {
          let {
              width: t,
              itemSize: n,
              currentIndex: s,
              gutter: i,
              items: a,
            } = this.props,
            r = i * g(s, a.length) * 2;
          return e === m
            ? (t - n.width) / 2 + r
            : e === p
              ? t - n.width - i + r
              : i + r;
        }
        getCarouselTranslate() {
          let { itemSize: e, edgeItems: t } = this.props;
          return t * (e.width + e.margin);
        }
        animateToIndex(e, t) {
          let { animatedIndex: n } = this,
            { items: s, edgeItems: i } = this.props;
          i > 0 &&
            (0 === e && t === s.length - 1
              ? n.setValue(-1)
              : 0 === t &&
                e === s.length - 1 &&
                s.length > 2 &&
                n.setValue(s.length)),
            o.Z.spring(n, { ...c, toValue: e }).start();
        }
        updateAnimatedIndex(e, t) {
          let { animatedIndex: n, animatedOpacity: s } = this,
            { animate: i } = this.props;
          i
            ? this.animateToIndex(e, t)
            : o.Z.timing(s, { fromValue: 1, toValue: 0, duration: 100 }).start(
                () => {
                  n.setValue(e),
                    o.Z.timing(s, {
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
            className: s,
          } = this.props;
          return (0, i.jsx)("div", {
            className: l()(h.singleItemWrapper, h.viewport, s),
            children: (0, i.jsx)("div", {
              className: h.singleItem,
              style: { width: n.width, height: n.height },
              children: e(t[0], 0),
            }),
          });
        }
        renderCarouselItems() {
          let e;
          let {
              animatedIndex: t,
              animatedAlignmentOffset: n,
              animatedOpacity: s,
            } = this,
            {
              renderItem: a,
              items: r,
              itemSize: l,
              edgeItems: d,
              gutter: u,
            } = this.props,
            { margin: c, width: m } = l,
            p = this.getCarouselTranslate(),
            g = this.getItemStyle(),
            C = (e = d > 0 ? [...r.slice(-d), ...r, ...r.slice(0, d)] : r).map(
              (e, t) =>
                (0, i.jsx)(
                  "div",
                  {
                    style: g,
                    className: h.item,
                    children: a(e, t - d, this.interpolateValueForItem(t - d)),
                  },
                  t,
                ),
            );
          return (0, i.jsx)(o.Z.div, {
            className: h.carousel,
            style: {
              opacity: s,
              left: o.Z.add(
                t.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-p, -c - m - p - u * (r.length - 1)],
                }),
                n,
              ),
            },
            children: C,
          });
        }
        render() {
          let { items: e, className: t, hideOverflow: n } = this.props;
          if (e.length <= 0) throw Error("Carousel has no items");
          return 1 === e.length
            ? this.renderSingleItem()
            : (0, i.jsx)("div", {
                className: l()({ [h.viewport]: n }, t),
                children: this.renderCarouselItems(),
              });
        }
        constructor(...e) {
          super(...e),
            u(this, "animatedIndex", new o.Z.Value(this.props.currentIndex)),
            u(
              this,
              "animatedAlignmentOffset",
              new o.Z.Value(this.getAlignmentOffset(this.props.align)),
            ),
            u(this, "animatedOpacity", new o.Z.Value(1)),
            u(this, "getItemStyle", () => {
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
            }),
            u(this, "interpolateValueForItem", (e) =>
              this.animatedIndex.interpolate({
                inputRange: [e - 1, e, e + 1],
                outputRange: [0, 1, 0],
                extrapolate: "clamp",
              }),
            );
        }
      }
      u(C, "defaultProps", {
        animate: !0,
        edgeItems: 2,
        align: m,
        gutter: 0,
        hideOverflow: !0,
      }),
        (t.ZP = (0, d.Z)(C));
    },
    341176: function (e, t, n) {
      n.d(t, {
        D: function () {
          return p;
        },
        Z: function () {
          return g;
        },
      });
      var s = n(200651),
        i = n(120356),
        a = n.n(i),
        r = n(524444),
        l = n(52824),
        o = n(956664),
        d = n(589530),
        h = n(591759),
        u = n(124347),
        c = n(80966),
        m = n(598741);
      let p = { DEFAULT: null, CONTAIN: m.contain, SCALE_DOWN: m.scaleDown };
      function g(e) {
        let {
            media: t,
            fit: n = p.DEFAULT,
            obscured: i = !1,
            onContextMenu: g,
          } = e,
          {
            width: C,
            height: I,
            url: x,
            proxyUrl: v,
            alt: f,
            type: E,
            maxWidth: N,
            maxHeight: b,
            ...P
          } = t,
          { width: S, height: L } = (0, o.zp)(
            null != C ? C : 0,
            null != I ? I : 0,
          ),
          y = (0, l.q)({ proxyURL: v, url: x }),
          M = !(null == C || 0 === C || null == I || 0 === I);
        if ("VIDEO" === E && M && null != v) {
          var j;
          let e = (function (e) {
            let t = h.Z.toURLSafe(e);
            return null == t
              ? null
              : (t.searchParams.append("format", "webp"), t.toString());
          })(v);
          if (null == e) return null;
          let n =
            null !== (j = t.renderLinkComponent) && void 0 !== j ? j : r.iT;
          return (0, s.jsx)(c.Z, {
            ...P,
            src: y,
            width: C,
            height: I,
            maxWidth: S,
            maxHeight: L,
            poster: e,
            naturalWidth: C,
            naturalHeight: I,
            volume: d.FC,
            autoMute: d.rs,
            onVolumeChange: d.jA,
            onMute: d.Zj,
            renderLinkComponent: n,
            autoPlay: !i,
            alt: f,
            onContextMenu: g,
          });
        }
        if ("IMAGE" === E)
          return M
            ? (0, s.jsx)(u.ZP, {
                ...P,
                imageClassName: a()(m.slide, n),
                src: y,
                width: C,
                height: I,
                shouldLink: !1,
                maxWidth: S,
                maxHeight: L,
                animated: !i && t.animated,
                autoPlay: !i,
                alt: f,
                zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                onContextMenu: g,
              })
            : (0, s.jsx)("img", {
                src: y,
                alt: f,
                className: a()(m.slide, n),
                onContextMenu: g,
              });
        return null;
      }
    },
  },
]);
//# sourceMappingURL=18752a5722778c3714bd.js.map
