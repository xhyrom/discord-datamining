"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16987"],
  {
    902294: function (e) {
      e.exports = "/assets/82e4627b29fa4e594d1d.svg";
    },
    33122: function (e, t, n) {
      n.d(t, {
        r: function () {
          return j;
        },
      }),
        n(47120);
      var i,
        a = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(748780),
        c = n(481060),
        d = n(112724),
        u = n(446411),
        m = n(468846),
        p = n(679056),
        h = n(44488),
        g = n(519160),
        C = n(124347),
        x = n(283756),
        v = n(524444),
        _ = n(585483),
        f = n(981631),
        b = n(396587);
      function I(e, t, n) {
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
      function S() {
        var e, t;
        let n =
          ((e = ["grayscale(", ")"]),
          !t && (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
          ));
        return (
          (S = function () {
            return n;
          }),
          n
        );
      }
      let j = {
          SMALL: { width: 640, height: 360, margin: 15 },
          MEDIUM: { width: 880, height: 495, margin: 20 },
        },
        N = { width: 1920, height: 1080 },
        E = { width: 1280, height: 720 },
        y = (e) =>
          (0, v.lV)({
            ...e,
            className: b.videoWrapper,
            mediaPlayerClassName: b.mediaPlayer,
          }),
        P = (e) => (0, a.jsx)(C.ZP, { ...e }),
        A = (e) => {
          let t,
            n,
            i,
            {
              item: r,
              size: l,
              onPlay: o,
              onEnded: s,
              onClick: d,
              playable: p,
              volume: h,
              isMuted: g,
              onVolumeChange: C,
              onMute: x,
            } = e;
          if (r.type === f.s9s.YOUTUBE_VIDEO)
            (t = { url: (0, f.n8r)(r.youtubeVideoId), ...N }),
              (n = {
                url: ""
                  .concat((0, f.ivE)(r.youtubeVideoId), "?")
                  .concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                ...E,
              }),
              (i = m.pn.YOUTUBE);
          else {
            let e = null != r.width ? r.width : 0,
              i = null != r.height ? r.height : 0;
            (t = { url: r.thumbnailSrc, width: e, height: i }),
              (n = { url: r.src, proxyURL: r.src, width: e, height: i });
          }
          let _ = (0, a.jsx)(u.BC, {
            href: null,
            thumbnail: t,
            video: n,
            provider: i,
            allowFullScreen: !0,
            maxHeight: l.height,
            maxWidth: l.width,
            onPlay: o,
            onEnded: s,
            playable: p,
            className: b.video,
            volume: h,
            onVolumeChange: C,
            autoMute: g,
            onMute: x,
            autoPlay: p,
            renderVideoComponent: y,
            renderImageComponent: P,
            renderLinkComponent: v.iT,
          });
          return p
            ? _
            : (0, a.jsx)(c.Clickable, {
                className: b.itemImageWrapper,
                onClick: d,
                children: _,
              });
        },
        L = () =>
          (0, a.jsx)("div", {
            className: b.paginationVideoOverlay,
            children: (0, a.jsx)(x.Z, {
              inactive: !0,
              className: b.paginationVideoPlayPill,
              renderLinkComponent: v.iT,
            }),
          });
      class T extends (i = r.PureComponent) {
        componentDidMount() {
          _.S.subscribe(f.CkL.CAROUSEL_PREV, this.manualPrevious),
            _.S.subscribe(f.CkL.CAROUSEL_NEXT, this.manualNext);
        }
        componentWillUnmount() {
          _.S.unsubscribe(f.CkL.CAROUSEL_PREV, this.manualPrevious),
            _.S.unsubscribe(f.CkL.CAROUSEL_NEXT, this.manualNext);
        }
        getStyle(e, t) {
          let n = t.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: s.Z.Extrapolate.CLAMP,
          });
          return {
            opacity: t.interpolate({
              inputRange: [0, 1],
              outputRange: [0.3, 1],
              extrapolate: s.Z.Extrapolate.CLAMP,
            }),
            filter: s.Z.template(S(), n),
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
              hoveringPreviousItem: i,
              hoveringNextItem: r,
            } = this.state,
            l = (0, a.jsx)(g.ZP, {
              items: e,
              itemSize: this.getItemSize(),
              renderItem: this.renderItem,
              currentIndex: t,
              animate: n,
              edgeItems: 2,
            });
          return e.length <= 1
            ? l
            : (0, a.jsxs)("div", {
                className: b.carouselButtonsContainer,
                children: [
                  l,
                  (0, a.jsx)(h.am, {
                    onClick: this.manualPrevious,
                    className: o()(b.arrow, { [b.arrowHovered]: i }),
                  }),
                  (0, a.jsx)(h.Pz, {
                    onClick: this.manualNext,
                    className: o()(b.arrow, { [b.arrowHovered]: r }),
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
              paused: i,
            } = this.props,
            { currentIndex: r, playingVideo: l, hasInteracted: o } = this.state;
          return (0, a.jsxs)(p.Z, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: n,
            className: t,
            disable: l || o || i,
            children: [
              this.renderCarousel(),
              (0, a.jsx)("div", {
                className: b.pagination,
                children: (0, a.jsx)(h.ZP, {
                  renderItem: this.renderPaginationItem,
                  scrollToPadding: 85,
                  items: e,
                  selectedIndex: r,
                  onSetItem: (e) => this.setItem(e, !0),
                  paginationContainerClass: b.scroller,
                  align: e.length < 6 ? h.ZP.Align.LEFT : h.ZP.Align.CENTER,
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            I(this, "state", {
              currentIndex: 0,
              animate: !0,
              playingVideo: !1,
              hasInteracted: !1,
              hoveringPreviousItem: !1,
              hoveringNextItem: !1,
              volume: 1,
              isMuted: !0,
            }),
            I(this, "getItemSize", () => {
              let { width: e } = this.props,
                t = j.MEDIUM;
              return null != e && e < t.width && (t = j.SMALL), t;
            }),
            I(this, "setItem", (e, t) => {
              let {
                  props: { items: n, onIntentionalChange: i },
                  state: { currentIndex: a },
                } = this,
                r = (0, g.gN)(a, n.length),
                l = (0, g.gN)(e, n.length),
                o =
                  1 === Math.abs(e - r) ||
                  (e === n.length - 1 && 0 === r) ||
                  (0 === e && r === n.length - 1);
              this.setState({
                playingVideo: !1,
                currentIndex: l,
                animate: o,
                hasInteracted: t,
              }),
                t && null != i && i(n[l], r, l);
            }),
            I(this, "autoNext", () => {
              this.setItem(this.state.currentIndex + 1, !1);
            }),
            I(this, "manualNext", () => {
              this.setItem(this.state.currentIndex + 1, !0);
            }),
            I(this, "manualPrevious", () => {
              this.setItem(this.state.currentIndex - 1, !0);
            }),
            I(this, "handlePlay", (e) =>
              this.setState({ playingVideo: !0, hasInteracted: !e }),
            ),
            I(this, "handleEnded", () => {
              !this.state.hasInteracted && this.autoNext();
            }),
            I(this, "handleVolumeChange", (e) => {
              this.setState({ volume: e, hasInteracted: !0 });
            }),
            I(this, "handleMute", (e) => {
              this.setState({ isMuted: e, hasInteracted: !0 });
            }),
            I(this, "handleVideoClick", (e) => {
              this.setItem(e, !0);
            }),
            I(this, "handleEdgeItemMouseLeave", () => {
              this.setState({ hoveringPreviousItem: !1, hoveringNextItem: !1 });
            }),
            I(this, "renderCarouselImage", (e, t, n) =>
              n
                ? (0, a.jsx)(c.Clickable, {
                    onClick: () => this.handleCurrentItemClick(e, t),
                    className: b.itemImageWrapper,
                    children: (0, a.jsx)("img", {
                      src: e.src,
                      alt: "",
                      className: b.currentImage,
                    }),
                  })
                : (0, a.jsx)(c.Clickable, {
                    onClick: () => this.setItem(t, !0),
                    className: b.itemImageWrapper,
                    children: (0, a.jsx)("img", {
                      alt: "",
                      className: b.itemImage,
                      src: e.src,
                      draggable: !1,
                    }),
                  }),
            ),
            I(this, "renderItem", (e, t, n) => {
              let { currentIndex: i, volume: r, isMuted: l } = this.state,
                c = t === (0, g.gN)(i, this.props.items.length);
              return (0, a.jsx)(s.Z.div, {
                className: o()(b.item, { [b.currentItem]: c }),
                style: null != n ? this.getStyle(t, n) : null,
                onMouseEnter: c ? null : () => this.handleEdgeItemMouseEnter(t),
                onMouseLeave: c ? null : this.handleEdgeItemMouseLeave,
                children:
                  e.type === f.s9s.VIDEO || e.type === f.s9s.YOUTUBE_VIDEO
                    ? (0, a.jsx)(A, {
                        item: e,
                        size: this.getItemSize(),
                        onPlay: this.handlePlay,
                        onEnded: this.handleEnded,
                        playable: c,
                        onClick: () => this.handleVideoClick(t),
                        volume: r,
                        onVolumeChange: this.handleVolumeChange,
                        isMuted: l,
                        onMute: this.handleMute,
                      })
                    : this.renderCarouselImage(e, t, c),
              });
            }),
            I(this, "renderPaginationItem", (e, t) => {
              let { currentIndex: n } = this.state,
                i = n === t;
              return (0, a.jsxs)(
                "div",
                {
                  className: o()(
                    b.paginationItem,
                    i
                      ? b.selectedStorePaginationItem
                      : b.unselectedStorePaginationItem,
                  ),
                  children: [
                    (0, a.jsx)("img", {
                      alt: null == e.alt ? t : e.alt,
                      className: b.storePaginationImg,
                      src: this.getPaginationSrc(e),
                      draggable: !1,
                    }),
                    e.type === f.s9s.YOUTUBE_VIDEO || e.type === f.s9s.VIDEO
                      ? (0, a.jsx)(L, {})
                      : null,
                    i
                      ? (0, a.jsx)("div", { className: b.overlappingBorder })
                      : null,
                  ],
                },
                "page-".concat(t),
              );
            });
        }
      }
      I(T, "defaultProps", { autoplayInterval: 8e3, paused: !1 }),
        (t.Z = (0, d.Z)(T));
    },
    761705: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
      }),
        n(47120),
        n(653041);
      var i,
        a = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(299608),
        c = n.n(s),
        d = n(748780),
        u = n(215569),
        m = n(376641),
        p = n(714338),
        h = n(134432),
        g = n(44488),
        C = n(585483),
        x = n(981631),
        v = n(707337);
      function _(e, t, n) {
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
      function b(e, t) {
        return ((e % t) + t) % t;
      }
      class I extends r.Component {
        componentWillEnter(e) {
          let { directionHistory: t } = this.props,
            { translate: n, opacity: i } = this.state;
          n.setValue(t[t.length - 1]),
            i.setValue(0),
            e(),
            d.Z.parallel([
              d.Z.timing(i, {
                toValue: 1,
                easing: d.Z.Easing.out(d.Z.Easing.linear),
                duration: 200,
              }),
              d.Z.spring(n, { toValue: 0, ...f }),
            ]).start();
        }
        componentWillLeave(e) {
          let { directionHistory: t } = this.props,
            { opacity: n, translate: i } = this.state;
          d.Z.parallel([
            d.Z.timing(n, {
              toValue: 0,
              easing: d.Z.Easing.in(d.Z.Easing.linear),
              duration: 200,
            }),
            d.Z.spring(i, { toValue: -1 * t[t.length - 1], ...f }),
          ]).start(e);
        }
        getStyle() {
          let { translate: e, opacity: t } = this.state;
          return d.Z.accelerate({
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
          return (0, a.jsx)(d.Z.img, {
            src: e.src,
            alt: "",
            className: o()(v.slide, t),
            style: this.getStyle(),
          });
        }
        constructor(...e) {
          super(...e),
            _(this, "state", {
              translate: new d.Z.Value(0),
              opacity: new d.Z.Value(1),
            });
        }
      }
      class S extends (i = r.Component) {
        componentDidMount() {
          this.preloadNextImages(),
            p.Z.disable(),
            p.Z.enableTemp(m.P),
            C.S.subscribe(x.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
            C.S.subscribe(x.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
        }
        componentWillUnmount() {
          p.Z.disableTemp(),
            C.S.unsubscribe(x.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
            C.S.unsubscribe(x.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
        }
        preloadNextImages() {
          var e, t;
          let { currentIndex: n } = this.state,
            { items: i } = this.props;
          let a = (((n + 1) % (e = i.length)) + e) % e;
          let r = (((n - 1) % (t = i.length)) + t) % t;
          this.preloadImage(i[a]), this.preloadImage(i[r]);
        }
        preloadImage(e) {
          (0, h.po)(e.src);
        }
        componentDidUpdate(e, t) {
          let { currentIndex: n } = this.state;
          n !== t.currentIndex && this.preloadNextImages();
        }
        navigateTo(e) {
          var t, n, i;
          let { directionHistory: a, currentIndex: r } = this.state;
          a.push(e - r),
            (e = ((e % (i = this.props.items.length)) + i) % i),
            this.setState({ currentIndex: e, directionHistory: a }),
            null === (t = (n = this.props).onIndexChange) ||
              void 0 === t ||
              t.call(n, e);
        }
        render() {
          var e;
          let { className: t } = this.props,
            { currentIndex: n, directionHistory: i } = this.state,
            { modalCarouselItemClassName: r } = this.props,
            l = this.props.items[n],
            s = this.props.items;
          return (0, a.jsxs)(u.W, {
            component: "div",
            className: o()(v.wrapper, t),
            children: [
              s.length > 1
                ? (0, a.jsx)(g.am, {
                    className: v.navPrev,
                    onClick: this.gotoPrev,
                  })
                : null,
              null !== (e = l.component) && void 0 !== e
                ? e
                : (0, a.jsx)(
                    I,
                    { item: l, directionHistory: i, className: r },
                    l.src,
                  ),
              s.length > 1
                ? (0, a.jsx)(g.Pz, {
                    className: v.navNext,
                    onClick: this.gotoNext,
                  })
                : null,
            ],
          });
        }
        constructor(e) {
          super(e),
            _(this, "gotoNext", () => {
              let { currentIndex: e } = this.state;
              this.navigateTo(e + 1);
            }),
            _(this, "gotoPrev", () => {
              let { currentIndex: e } = this.state;
              this.navigateTo(e - 1);
            }),
            _(this, "gotoNextThrottled", c()(this.gotoNext, 300)),
            _(this, "gotoPrevThrottled", c()(this.gotoPrev, 300)),
            (this.state = { currentIndex: e.startWith, directionHistory: [] });
        }
      }
      _(S, "defaultProps", { startWith: 0 });
    },
    15470: function (e, t, n) {
      n.d(t, {
        i: function () {
          return x;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(477660),
        s = n.n(o),
        c = n(481060),
        d = n(770146),
        u = n(241209),
        m = n(73346),
        p = n(388032),
        h = n(797844);
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
        x = {
          ...u.Z.rules,
          heading: {
            ...u.Z.rules.heading,
            react(e, t, n) {
              let a = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
              return (0, i.jsx)(
                d.Z,
                { tag: a, children: t(e.content, n) },
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
                  i = t.assets.find((t) => t.id === e);
                return null != i && [...n, i, t.applicationId];
              }
              return !1;
            },
            parse: (e) => ({ asset: e[3], alt: e[1], applicationId: e[4] }),
            react: (e, t, n) =>
              (0, i.jsx)(
                "div",
                {
                  className: h.assetWrapper,
                  children: (0, i.jsx)("img", {
                    alt: e.alt,
                    src: (0, m._W)(e.applicationId, e.asset, 800),
                    className: h.asset,
                  }),
                },
                n.key,
              ),
          },
        },
        v = s().parserFor(x),
        _ = s().reactFor(s().ruleOutput(x, "react"));
      class f extends a.PureComponent {
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
              className: a,
              assets: r,
            } = this.props,
            { collapsed: o, collapsable: s } = this.state;
          return (0, i.jsxs)("div", {
            className: a,
            children: [
              (0, i.jsx)("div", {
                className: l()({ [h.collapsed]: s && o }),
                children: (0, i.jsxs)("div", {
                  ref: this.setContentContainerRef,
                  children: [
                    (0, i.jsx)("div", { className: h.blurb, children: n }),
                    (0, i.jsx)(u.Z, {
                      className: h.description,
                      parser: v,
                      output: _,
                      state: { assets: r, applicationId: e },
                      children: t,
                    }),
                  ],
                }),
              }),
              s
                ? (0, i.jsx)(c.Button, {
                    className: h.toggleCollapseButton,
                    onClick: this.handleToggleCollapse,
                    color: c.Button.Colors.PRIMARY,
                    children: o
                      ? p.intl.string(p.t.DxcOXF)
                      : p.intl.string(p.t.rD6EaG),
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
          return m;
        },
      }),
        n(653041),
        n(47120);
      var i = n(200651),
        a = n(192379),
        r = n(481060),
        l = n(33122),
        o = n(761705),
        s = n(9807),
        c = n(843445),
        d = n(981631),
        u = n(388032);
      function m(e) {
        return "".concat(e.split("?")[0], "?size=").concat(2048);
      }
      let p = (e) => {
        let { index: t, items: n, ...a } = e,
          r = n[t],
          l = 0,
          s = [];
        for (let e of n)
          if (e.type === d.s9s.IMG) {
            let { width: t, height: n, src: i } = e;
            e === r && (l = s.length),
              s.push({ src: m(i), width: t, height: n });
          }
        return (0, i.jsx)(o.Z, { ...a, items: s, startWith: l });
      };
      class h extends a.Component {
        render() {
          let { pageSize: e, ...t } = this.props,
            n = e === c.b.SMALL ? s.Z : l.Z;
          return (0, i.jsx)(n, {
            ...t,
            onCurrentItemClick: this.handleCurrentItemClick,
          });
        }
        constructor(...e) {
          var t, n, a;
          super(...e),
            (t = this),
            (n = "handleCurrentItemClick"),
            (a = (e, t) => {
              e.type === d.s9s.IMG &&
                !(0, r.hasAnyModalOpen)() &&
                (0, r.openModal)((e) =>
                  (0, i.jsx)(r.ModalRoot, {
                    size: r.ModalSize.DYNAMIC,
                    "aria-label": u.intl.string(u.t.X4IxWF),
                    ...e,
                    children: (0, i.jsx)(p, {
                      ...e,
                      index: t,
                      items: this.props.items,
                    }),
                  }),
                );
            }),
            n in t
              ? Object.defineProperty(t, n, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = a);
        }
      }
      t.Z = h;
    },
    843445: function (e, t, n) {
      n.d(t, {
        b: function () {
          return a;
        },
        x: function () {
          return i;
        },
      });
      let i = 1e3,
        a = Object.freeze({ SMALL: "small", LARGE: "large" });
    },
    9807: function (e, t, n) {
      n(47120), n(411104);
      var i,
        a = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(481060),
        c = n(33122),
        d = n(446411),
        u = n(468846),
        m = n(453499),
        p = n(124347),
        h = n(80966),
        g = n(524444),
        C = n(843445),
        x = n(981631),
        v = n(388032),
        _ = n(16655);
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
      let b = (e) => {
          let { className: t, ...n } = e;
          return (0, a.jsx)(h.Z, {
            ...n,
            className: o()(_.sizedToParent, t),
            mediaPlayerClassName: _.sizedToParent,
            renderLinkComponent: g.iT,
          });
        },
        I = (e) => {
          let { containerClassName: t, className: n, ...i } = e;
          return (0, a.jsx)(p.ZP, { ...i, className: o()(n, t) });
        },
        S = { width: 1280, height: 720 },
        j = { width: 640, height: 360 },
        N = (e) => {
          let t,
            n,
            i,
            {
              item: r,
              onPlay: l,
              volume: o,
              onVolumeChange: s,
              onMute: m,
              isMuted: p,
              autoPlay: h,
            } = e;
          if (r.type === x.s9s.YOUTUBE_VIDEO)
            (t = { url: (0, x.n8r)(r.youtubeVideoId), ...S }),
              (n = {
                url: ""
                  .concat((0, x.ivE)(r.youtubeVideoId), "?")
                  .concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                ...j,
              }),
              (i = u.pn.YOUTUBE);
          else {
            let e = null != r.width ? r.width : 0,
              i = null != r.height ? r.height : 0;
            (t = { url: r.thumbnailSrc, width: e, height: i }),
              (n = { url: r.src, proxyURL: r.src, width: e, height: i });
          }
          return (0, a.jsx)("div", {
            className: _.embedContainer,
            children: (0, a.jsx)(d.BC, {
              className: _.sizedToParent,
              iframeWrapperClassName: _.sizedToParent,
              href: null,
              thumbnail: t,
              video: n,
              provider: i,
              maxHeight: c.r.SMALL.height,
              maxWidth: C.b.SMALL,
              onPlay: l,
              playable: !0,
              volume: o,
              onVolumeChange: s,
              autoMute: p,
              onMute: m,
              autoPlay: h,
              renderImageComponent: I,
              renderVideoComponent: b,
              renderLinkComponent: g.iT,
            }),
          });
        };
      class E extends (i = r.PureComponent) {
        componentDidMount() {
          let { items: e } = this.props;
          e.length > 0 &&
            e[0].type === x.s9s.IMG &&
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
              paused: i,
              themedPagination: r,
            } = this.props,
            { hasInteracted: l } = this.state;
          return (0, a.jsx)(m.Z, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: i || l,
            renderItem: this.renderItem,
            className: o()(_.smallCarousel, n),
            themedPagination: r,
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
                e.type === x.s9s.IMG &&
                  this.setState({
                    imageLoadingStartTime: new Map(
                      this.state.imageLoadingStartTime,
                    ).set(e.src, Date.now()),
                  });
            }),
            f(this, "handleIntentionalChange", (e, t, n, i) => {
              this.setState({ hasInteracted: !0 });
              let { onIntentionalChange: a } = this.props;
              null != a && a(e, t, n, i);
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
                i = null != n ? Date.now() - n : void 0;
              null == t || t({ src: e.target.src, loadTimeMs: i });
            }),
            f(this, "renderItem", (e, t) => {
              let n;
              let { isMuted: i, volume: r } = this.state,
                { videoAutoPlay: l } = this.props;
              switch (e.type) {
                case x.s9s.YOUTUBE_VIDEO:
                case x.s9s.VIDEO:
                  n = (0, a.jsx)(N, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: i,
                    volume: r,
                    onVolumeChange: this.handleVolumeChange,
                    onMute: this.handleMute,
                    autoPlay: l,
                  });
                  break;
                case x.s9s.IMG:
                  if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, a.jsx)(s.Heading, {
                      variant: "heading-xl/semibold",
                      children: v.intl.string(v.t.UvDfMz),
                    });
                    return (0, a.jsx)("div", {
                      className: _.errorContainer,
                      children:
                        void 0 !== this.props.errorComponent
                          ? this.props.errorComponent
                          : e,
                    });
                  }
                  {
                    var c;
                    let t =
                      null !== (c = e.alt) && void 0 !== c
                        ? c
                        : v.intl.string(v.t.X4IxWF);
                    n = (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(s.Spinner, {
                          className: o()(_.spinner, {
                            [_.hidden]: void 0 !== this.state.status.get(e.src),
                          }),
                          type: s.Spinner.Type.SPINNING_CIRCLE,
                        }),
                        (0, a.jsx)("img", {
                          onError: this.handleOnErrorImg,
                          onLoad: this.handleOnLoadImg,
                          className: o()(_.smallCarouselImage, {
                            [_.hidden]:
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
              return (0, a.jsx)(s.Clickable, {
                className: _.smallCarouselItem,
                onClick: () => this.handleCurrentItemClick(e, t),
                children: n,
              });
            });
        }
      }
      f(E, "defaultProps", { paused: !1, videoAutoPlay: !0 }), (t.Z = E);
    },
    817718: function (e, t, n) {
      n.d(t, {
        U3: function () {
          return m;
        },
        XM: function () {
          return d;
        },
        hd: function () {
          return c;
        },
        lI: function () {
          return s;
        },
        py: function () {
          return u;
        },
      });
      var i = n(481060),
        a = n(819640),
        r = n(585483),
        l = n(981631);
      let o = () => a.Z.hasLayers() || (0, i.hasAnyModalOpen)(),
        s = {
          binds: ["right"],
          comboKeysBindGlobal: !0,
          action() {
            if (!o()) return r.S.dispatch(l.CkL.CAROUSEL_NEXT), !1;
          },
        },
        c = {
          binds: ["left"],
          comboKeysBindGlobal: !0,
          action() {
            if (!o()) return r.S.dispatch(l.CkL.CAROUSEL_PREV), !1;
          },
        },
        d = {
          binds: ["right", "down", "space"],
          comboKeysBindGlobal: !0,
          action: () => (r.S.dispatch(l.CkL.MODAL_CAROUSEL_NEXT), !1),
        },
        u = {
          binds: ["left", "up"],
          comboKeysBindGlobal: !0,
          action: () => (r.S.dispatch(l.CkL.MODAL_CAROUSEL_PREV), !1),
        },
        m = {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action() {
            if (r.S.hasSubscribers(l.CkL.MODAL_CLOSE))
              return r.S.dispatch(l.CkL.MODAL_CLOSE), !1;
          },
        };
    },
    376641: function (e, t, n) {
      n.d(t, {
        P: function () {
          return r;
        },
        v: function () {
          return l;
        },
      });
      var i = n(817718),
        a = n(981631);
      let r = {
          [a.EkH.MODAL_CAROUSEL_NEXT]: i.XM,
          [a.EkH.MODAL_CAROUSEL_PREV]: i.py,
          [a.EkH.CLOSE_MODAL]: i.U3,
        },
        l = { [a.EkH.CLOSE_MODAL]: i.U3 };
    },
    924489: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
        x: function () {
          return i;
        },
      }),
        n(653041);
      var i,
        a,
        r = n(200651),
        l = n(192379),
        o = n(120356),
        s = n.n(o),
        c = n(442837),
        d = n(477690),
        u = n(481060),
        m = n(686546),
        p = n(706454),
        h = n(768581),
        g = n(624138),
        C = n(388032),
        x = n(484759);
      ((a = i || (i = {}))[
        (a.SMALL = (0, g.Mg)(d.Z.GUILD_COUNT_SMALL_ICON_SIZE))
      ] = "SMALL"),
        (a[(a.LARGE = (0, g.Mg)(d.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE");
      let v = { [i.SMALL]: x.moreGuildsSmall, [i.LARGE]: x.moreGuildsLarge },
        _ = { [i.SMALL]: x.iconSmall, [i.LARGE]: x.iconLarge };
      function f(e) {
        var t, n, a;
        let {
            application: o,
            mutualGuilds: d,
            mutualGuildShownMax: g = 4,
            className: f,
            textVariant: b = "text-sm/normal",
            compact: I,
            guildIconSize: S = i.LARGE,
            guildsClassName: j,
          } = e,
          N = (0, c.e7)([p.default], () => p.default.locale),
          E = new Intl.ListFormat(N),
          y =
            null !==
              (n =
                null === (t = o.directory_entry) || void 0 === t
                  ? void 0
                  : t.guild_count) && void 0 !== n
              ? n
              : 0,
          P =
            null !== (a = null == d ? void 0 : d.length) && void 0 !== a
              ? a
              : 0,
          A = Math.max(0, y - P),
          { shownMutualGuilds: L, hiddenMutualGuilds: T } = l.useMemo(() => {
            let e = [],
              t = [];
            return (
              null == d ||
                d.forEach((n) => {
                  e.length < g && null != n.icon ? e.push(n) : t.push(n);
                }),
              e.length === g &&
                t.length > 0 &&
                (t.push(e[g - 1]), (e = e.slice(0, g - 1))),
              { shownMutualGuilds: e, hiddenMutualGuilds: t }
            );
          }, [d, g]),
          R = T.length,
          Z = (function (e, t, n, i, a) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === n)
              return C.intl.formatToPlainString(C.t.pnzE1t, {
                mutualGuildCount: t,
              });
            let r = t > 0 ? C.t.YR8PSE : C.t.GQjq6e,
              l = new Intl.NumberFormat(i, {
                notation: a ? "compact" : "standard",
                compactDisplay: "short",
              });
            return C.intl.formatToPlainString(r, {
              guildCount: l.format(e),
              mutualGuildCount: t,
              nonMutualGuildCount: l.format(n),
            });
          })(y, P, A, N, I);
        return 0 === L.length && null == Z
          ? null
          : (0, r.jsxs)("div", {
              className: s()(f, x.wrapper),
              children: [
                (0, r.jsx)("div", {
                  className: s()(x.icons, j),
                  children:
                    L.length > 0
                      ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            L.map((e, t) => {
                              let n = t === L.length - 1 && 0 === R,
                                i = h.ZP.getGuildIconURL({
                                  id: e.id,
                                  icon: e.icon,
                                  size: S,
                                  canAnimate: !1,
                                }),
                                a = (0, r.jsx)(u.Tooltip, {
                                  text: e.name,
                                  position: "top",
                                  children: (e) =>
                                    (0, r.jsx)("img", {
                                      ...e,
                                      className: s()(x.icon, _[S]),
                                      src: i,
                                      alt: "",
                                    }),
                                });
                              return n
                                ? (0, r.jsx)(l.Fragment, { children: a }, e.id)
                                : (0, r.jsx)(
                                    m.ZP,
                                    {
                                      className: x.iconMask,
                                      height: S,
                                      width: S,
                                      mask: m.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                      children: a,
                                    },
                                    e.id,
                                  );
                            }),
                            R > 0
                              ? (0, r.jsx)(u.Tooltip, {
                                  text: C.intl.formatToPlainString(C.t.m6oRrK, {
                                    appNames: E.format(T.map((e) => e.name)),
                                  }),
                                  position: "top",
                                  children: (e) =>
                                    (0, r.jsxs)("div", {
                                      ...e,
                                      className: s()(x.moreGuilds, v[S]),
                                      children: ["+", R],
                                    }),
                                })
                              : null,
                          ],
                        })
                      : (0, r.jsx)(u.ServerIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: S,
                          height: S,
                          className: x.defaultIcon,
                        }),
                }),
                null != Z
                  ? (0, r.jsx)(u.Text, {
                      variant: b,
                      color: "header-secondary",
                      children: Z,
                    })
                  : null,
              ],
            });
      }
    },
    125909: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(120356),
        r = n.n(a),
        l = n(481060),
        o = n(496008);
      function s(e) {
        let { loading: t, children: n } = e;
        return (0, i.jsxs)("div", {
          className: o.container,
          children: [
            t
              ? (0, i.jsx)("div", {
                  className: o.spinnerContainer,
                  children: (0, i.jsx)(l.Spinner, {
                    className: o.spinner,
                    type: l.Spinner.Type.SPINNING_CIRCLE,
                  }),
                })
              : null,
            (0, i.jsx)("div", {
              className: r()({ [o.loading]: t }),
              children: n,
            }),
          ],
        });
      }
    },
    326135: function (e, t, n) {
      n.d(t, {
        G: function () {
          return a;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i = n(981631);
      let a = (e) => {
        let { id: t, name: n, locale: a } = e,
          r = "https://"
            .concat(i.xr4, "/hc/")
            .concat(a.toLowerCase(), "/requests/new"),
          l = new URLSearchParams();
        return (
          l.append(
            "tf_12275088515223",
            "field_value_dc_category_report_an_app_bot",
          ),
          l.append(
            "tf_12276208289431",
            "field_value_dc_reported_action_app_directory",
          ),
          l.append("tf_12094971213335", t),
          l.append("ticket_form_id", "12275528604823"),
          l.append(
            "tf_subject",
            "App Directory Report ".concat(n, " ").concat(t),
          ),
          "".concat(r, "?").concat(l.toString())
        );
      };
    },
    214912: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(120356),
        r = n.n(a),
        l = n(481060),
        o = n(410030),
        s = n(686546),
        c = n(565138),
        d = n(372769),
        u = n(134432),
        m = n(601964),
        p = n(768581),
        h = n(981631),
        g = n(388032),
        C = n(892528),
        x = n(129512),
        v = n(330065);
      function _(e) {
        let { guild: t, className: n, onClick: a } = e,
          _ = (0, o.ZP)(),
          f = new m.ZP({ name: t.name, icon: t.icon }),
          b = p.ZP.getGuildDiscoverySplashURL({
            id: t.id,
            splash: t.discovery_splash,
            size: 192 * (0, u.x_)(),
          }),
          I =
            null != b
              ? b
              : (function (e) {
                  switch (e) {
                    case h.BRd.DARK:
                      return x;
                    case h.BRd.LIGHT:
                      return v;
                  }
                })(_),
          S = p.ZP.getGuildIconURL({ id: t.id, icon: t.icon, size: 50 });
        return (0, i.jsxs)(l.Clickable, {
          className: r()(C.card, n),
          onClick: a,
          "aria-label": g.intl.string(g.t.RB4L29),
          children: [
            (0, i.jsxs)("div", {
              className: C.cardHeader,
              children: [
                (0, i.jsx)("img", {
                  src: I,
                  alt: "",
                  className: C.splashImage,
                }),
                (0, i.jsx)("div", {
                  className: C.guildIcon,
                  children: (0, i.jsx)(s.ZP, {
                    mask: s.ZP.Masks.AVATAR_DEFAULT,
                    width: 58,
                    height: 58,
                    children: (0, i.jsx)("div", {
                      className: C.iconMask,
                      children: (0, i.jsx)(c.Z, {
                        className: C.__invalid_icon,
                        iconSrc: S,
                        guild: f,
                        size: c.Z.Sizes.LARGE,
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: C.cardDetails,
              children: [
                (0, i.jsxs)("div", {
                  className: C.guildNameWrapper,
                  children: [
                    (0, i.jsx)(d.Z, {
                      className: C.guildBadge,
                      guild: t,
                      tooltipColor: l.Tooltip.Colors.PRIMARY,
                    }),
                    (0, i.jsx)(l.Heading, {
                      variant: "heading-md/semibold",
                      className: C.guildName,
                      children: t.name,
                    }),
                  ],
                }),
                (0, i.jsx)(l.Text, {
                  className: C.guildDescription,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  lineClamp: 2,
                  children: t.description,
                }),
                (0, i.jsx)("div", {
                  className: C.memberInfo,
                  children: (0, i.jsxs)("div", {
                    className: C.memberCountWrapper,
                    children: [
                      (0, i.jsx)(l.UserIcon, {
                        color: "currentColor",
                        className: C.memberCountIcon,
                        size: "xs",
                      }),
                      (0, i.jsx)(l.Text, {
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
      var i = n(200651);
      n(192379);
      var a = n(477660),
        r = n.n(a),
        l = n(481060),
        o = n(447543),
        s = n(15470),
        c = n(960904),
        d = n(830121),
        u = n(746878),
        m = n(241209);
      let p = /^discord.gg\/[a-zA-Z0-9-]+/,
        h = {
          ...m.Z.rules,
          heading: { ...s.i.heading },
          image: { ...r().defaultRules.image },
          inviteLink: {
            order: m.Z.rules.link.order + 1,
            match: (e, t) => (t.inline ? p.exec(e) : null),
            parse: (e, t, n) => {
              let i = (0, d.zO)(e[0]);
              return null == i || i.type !== c.g.INVITE
                ? { type: "text", content: e[0] }
                : {
                    type: "inviteLink",
                    content: [{ type: "text", content: e[0] }],
                    onClick: () => {
                      var e;
                      o.Z.acceptInviteAndTransitionToInviteChannel({
                        inviteKey: i.code,
                        context: { location: "Application Directory" },
                      }),
                        null === (e = n.closeModal) ||
                          void 0 === e ||
                          e.call(n);
                    },
                  };
            },
            react: (e, t, n) =>
              (0, i.jsx)(
                l.Anchor,
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
      t.Z = h;
    },
    860719: function (e, t, n) {
      n.d(t, {
        w: function () {
          return a;
        },
      }),
        n(789020);
      var i = n(85025);
      function a(e) {
        let { flags: t } = e,
          n = (0, i.O)(t),
          a =
            null != n &&
            ((null == n ? void 0 : n.messageContent) ||
              (null == n ? void 0 : n.messageContentLimited)),
          r =
            null != n &&
            ((null == n ? void 0 : n.guildPresences) ||
              (null == n ? void 0 : n.guildPresencesLimited)),
          l =
            null != n &&
            ((null == n ? void 0 : n.guildMembers) ||
              (null == n ? void 0 : n.guildMembersLimited));
        return {
          hasMessageContent: a,
          hasGuildPresences: r,
          hasGuildMembers: l,
          hasIntents: a || r || l,
        };
      }
    },
    85025: function (e, t, n) {
      n.d(t, {
        O: function () {
          return r;
        },
      });
      var i = n(630388),
        a = n(981631);
      function r(e) {
        if (null != e)
          return {
            guildPresences: (0, i.yE)(e, a.udG.GATEWAY_PRESENCE),
            guildMembers: (0, i.yE)(e, a.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, i.yE)(e, a.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, i.yE)(e, a.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, i.yE)(
              e,
              a.udG.GATEWAY_GUILD_MEMBERS_LIMITED,
            ),
            messageContentLimited: (0, i.yE)(
              e,
              a.udG.GATEWAY_MESSAGE_CONTENT_LIMITED,
            ),
          };
      }
    },
    648113: function (e, t, n) {
      n.d(t, {
        C: function () {
          return s;
        },
      });
      var i = n(120356),
        a = n.n(i),
        r = n(442837),
        l = n(514361),
        o = n(358459);
      function s(e) {
        let t = (0, r.e7)([l.Z], () => null != l.Z.gradientPreset);
        return a()(o.gradient, e, { [o.clientThemes]: t });
      }
    },
    979233: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      });
      var i = n(192379),
        a = n(397341);
      function r() {
        let e = i.useRef(new a.Z()),
          t = i.useCallback((t) => {
            e.current.handleScroll(t);
          }, []);
        return {
          resetScrollPosition: i.useCallback(() => {
            e.current.scrollPosition.set(0);
          }, []),
          scrollPosition: e.current.scrollPosition,
          onScroll: t,
        };
      }
    },
    88693: function (e, t, n) {
      n.d(t, {
        U: function () {
          return s;
        },
      });
      var i = n(192379),
        a = n(49898),
        r = n(406014);
      let l =
          20 +
          a.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX -
          a.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
        o =
          20 +
          a.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX +
          a.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;
      function s(e) {
        let {
            isSearchBarVisible: t,
            isSearchBarEmpty: n,
            searchBarState: s,
            setSearchBarState: c,
          } = e,
          d = i.useCallback(
            (e) => {
              if (!t) return;
              let i = Math.round(e);
              switch (s) {
                case a.GlobalDiscoverySearchBarState.DEFAULT:
                  i < 20 &&
                    c(
                      n
                        ? a.GlobalDiscoverySearchBarState.COLLAPSED
                        : a.GlobalDiscoverySearchBarState.FLOATING,
                    );
                  break;
                case a.GlobalDiscoverySearchBarState.COLLAPSED:
                  i > l && c(a.GlobalDiscoverySearchBarState.DEFAULT);
                  break;
                case a.GlobalDiscoverySearchBarState.FLOATING:
                  i > o && c(a.GlobalDiscoverySearchBarState.DEFAULT);
              }
            },
            [n, t, s, c],
          ),
          u = i.useCallback(() => {
            c(a.GlobalDiscoverySearchBarState.FLOATING);
          }, [c]),
          m = i.useCallback(() => {
            s === a.GlobalDiscoverySearchBarState.FLOATING &&
              n &&
              c(a.GlobalDiscoverySearchBarState.COLLAPSED);
          }, [n, s, c]);
        return {
          onTabsAvailableWidthChange: d,
          tabsClassName:
            s === a.GlobalDiscoverySearchBarState.FLOATING
              ? r.floatingSearchTabsMask
              : void 0,
          onCollapsedSearchBarClick: u,
          onSearchBarBlur: m,
        };
      }
    },
    322665: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651),
        a = n(648113),
        r = n(358459);
      function l() {
        let e = (0, a.C)();
        return (0, i.jsxs)("div", {
          className: r.gradientBackground,
          children: [
            (0, i.jsx)("div", { className: e }),
            (0, i.jsx)("div", { className: r.gradientOverlay }),
          ],
        });
      }
    },
    17845: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(780384),
        s = n(481060),
        c = n(410030),
        d = n(358459);
      function u(e) {
        let { title: t } = e;
        return (0, i.jsx)(s.Heading, {
          className: l()(d.title, d.uppercase),
          variant: "display-lg",
          color: "header-primary",
          children: t,
        });
      }
      function m(e) {
        let {
            title: t,
            description: n,
            button: r,
            className: m,
            children: p,
          } = e,
          h = (0, c.ZP)(),
          g = (0, o.wj)(h),
          C = a.useMemo(
            () =>
              Array.isArray(t)
                ? t.map((e, t) => (0, i.jsx)(u, { title: e }, t))
                : (0, i.jsx)(u, { title: t }),
            [t],
          );
        return (0, i.jsxs)("div", {
          className: l()(d.container, m),
          children: [
            (0, i.jsx)("div", {
              className: d.content,
              children: (0, i.jsxs)("div", {
                className: d.textContainer,
                children: [
                  C,
                  null != n &&
                    (0, i.jsx)(s.Text, {
                      className: d.description,
                      variant: "text-md/medium",
                      color: g ? "text-muted" : "header-primary",
                      children: n,
                    }),
                  null != r &&
                    (0, i.jsx)("div", {
                      className: d.buttonContainer,
                      children: r,
                    }),
                ],
              }),
            }),
            p,
          ],
        });
      }
    },
    374939: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(278741);
      function r(e) {
        let { children: t } = e;
        return (0, i.jsx)("section", {
          className: a.contentSection,
          children: (0, i.jsx)("div", { className: a.content, children: t }),
        });
      }
    },
    233374: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var a = n(120356),
        r = n.n(a),
        l = n(481060),
        o = n(578451);
      t.Z = function (e) {
        let { tabs: t, onTabSelect: n, selectedTab: a, className: s } = e;
        return (0, i.jsx)(l.TabBar, {
          type: "top-pill",
          selectedItem: a,
          onItemSelect: n,
          className: s,
          children: t.map((e, t) => {
            let { id: n, label: a, count: s } = e;
            return (0, i.jsx)(
              l.TabBar.Item,
              {
                id: n,
                className: r()(o.tabItem, {
                  [o.firstChildSpacingFix]: 0 === t,
                }),
                "aria-label": a,
                children:
                  null != s && s > 0 ? "".concat(a, " (").concat(s, ")") : a,
              },
              n,
            );
          }),
        });
      };
    },
    611928: function (e, t, n) {
      n.d(t, {
        Cm: function () {
          return h;
        },
        ZP: function () {
          return g;
        },
        _6: function () {
          return a;
        },
        aV: function () {
          return p;
        },
        z6: function () {
          return m;
        },
      });
      var i,
        a,
        r = n(200651),
        l = n(192379),
        o = n(120356),
        s = n.n(o),
        c = n(642128),
        d = n(481060),
        u = n(406014);
      function m(e) {
        let { scrollPosition: t } = e;
        return (0, r.jsx)(c.animated.div, {
          className: u.backdrop,
          style: { opacity: null == t ? void 0 : t.to([0, 100], [0, 1]) },
        });
      }
      function p(e) {
        let { icon: t } = e;
        return (0, r.jsx)(t, {
          className: u.icon,
          color: d.tokens.colors.HEADER_PRIMARY,
          size: "md",
        });
      }
      function h(e) {
        let { onClick: t, icon: n } = e;
        return (0, r.jsx)(d.Clickable, {
          className: u.iconButton,
          onClick: t,
          children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
        });
      }
      ((i = a || (a = {})).OVERLAY = "overlay"), (i.RELATIVE = "relative");
      function g(e) {
        let { className: t, variant: n, children: i } = e,
          a = l.useMemo(
            () =>
              (function (e) {
                if ("overlay" === e) return u.overlay;
                return u.relative;
              })(n),
            [n],
          );
        return (0, r.jsx)("div", {
          className: s()(u.headerBar, a, t),
          children: i,
        });
      }
    },
    397341: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(642128);
      class a {
        handleScroll(e) {
          this.top.set(e.currentTarget.scrollTop);
        }
        get scrollPosition() {
          return this.top;
        }
        constructor() {
          var e, t, n;
          (e = this),
            (t = "top"),
            (n = new i.SpringValue(0)),
            "top" in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n);
        }
      }
    },
    922122: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(47120),
        n(724458);
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(21260),
        s = n(780384),
        c = n(481060),
        d = n(410030),
        u = n(540059),
        m = n(889711),
        p = n(79707),
        h = n(388032),
        g = n(333078);
      function C(e) {
        let { onTabSelect: t, tabs: n, selectedTab: r } = e,
          o = (0, d.ZP)(),
          m = (0, s.wj)(o),
          C = (0, u.Q3)("GlobalDiscoveryHeaderMoreTab"),
          x = a.useMemo(
            () =>
              null !=
              n.find((e) => {
                let { id: t } = e;
                return t === r;
              }),
            [r, n],
          ),
          [v, _] = a.useState(!1),
          f = (function (e) {
            let {
              selected: t,
              isVisualRefreshEnabled: n,
              isDarkTheme: i,
              isHovered: a,
            } = e;
            if (n) return a ? "text-primary" : t ? "text-brand" : "text-normal";
            return !t && a
              ? "interactive-hover"
              : t
                ? "header-primary"
                : i
                  ? "interactive-normal"
                  : "header-primary";
          })({
            selected: x,
            isVisualRefreshEnabled: C,
            isDarkTheme: m,
            isHovered: v,
          }),
          b = (function (e) {
            let {
              selected: t,
              isVisualRefreshEnabled: n,
              isDarkTheme: i,
              isHovered: a,
            } = e;
            if (n)
              return a
                ? c.tokens.colors.TEXT_PRIMARY
                : t
                  ? c.tokens.colors.TEXT_BRAND
                  : c.tokens.colors.INTERACTIVE_NORMAL;
            return !t && a
              ? c.tokens.colors.INTERACTIVE_HOVER
              : t
                ? c.tokens.colors.HEADER_PRIMARY
                : i
                  ? c.tokens.colors.TEXT_MUTED
                  : c.tokens.colors.HEADER_PRIMARY;
          })({
            selected: x,
            isVisualRefreshEnabled: C,
            isDarkTheme: m,
            isHovered: v,
          }),
          I = a.useCallback(() => _(!0), []),
          S = a.useCallback(() => _(!1), []);
        return (0, i.jsx)(c.Popout, {
          renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, i.jsx)(p.Z, {
              selectedTab: r,
              onClose: a,
              tabs: n,
              onTabSelect: t,
            });
          },
          position: "bottom",
          align: "left",
          children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(c.TabBar.Item, {
              ...e,
              id: "more",
              look: "brand",
              selectedItem: C && x ? "more" : void 0,
              className: l()(g.tab, { [g.selected]: !C && x }),
              "aria-label": h.intl.string(h.t.UKOtz8),
              children: (0, i.jsxs)("div", {
                className: g.more,
                onMouseEnter: I,
                onMouseLeave: S,
                children: [
                  (0, i.jsx)(c.Text, {
                    variant: C ? "text-sm/semibold" : "text-md/medium",
                    color: f,
                    children: h.intl.string(h.t.UKOtz8),
                  }),
                  n
                    ? (0, i.jsx)(c.ChevronSmallUpIcon, { size: "xs", color: b })
                    : (0, i.jsx)(c.ChevronSmallDownIcon, {
                        size: "xs",
                        color: b,
                      }),
                ],
              }),
            });
          },
        });
      }
      function x(e) {
        let {
            className: t,
            selectedTab: n,
            tabs: r,
            onTabSelect: s,
            onAvailableWidthChange: d,
          } = e,
          [p, h] = a.useState(0),
          x = a.useRef(p),
          {
            lastVisibleIndex: v,
            onItemLayout: _,
            overflowItemsRef: f,
            itemWidthsRef: b,
          } = (0, o.zP)({
            items: r,
            itemGapPx: 20,
            maxLines: 1,
            containerWidth: p,
          }),
          I = a.useMemo(() => r.slice(0, v + 1), [v, r]),
          S = a.useMemo(() => r.slice(v + 1), [v, r]),
          j = a.useRef(null),
          N = a.useCallback(() => {
            var e;
            let t =
              null === (e = j.current) || void 0 === e
                ? void 0
                : e.getBoundingClientRect();
            if (null == t || x.current === t.width) return;
            h(t.width), (x.current = t.width);
            let n = b.current.reduce((e, t, n) => e + t + (0 === n ? 0 : 20)),
              i = t.width - n;
            null == d || d(i);
          }, [b, d]);
        a.useEffect(() => {
          let e = (0, m.pP)(N);
          return (0, m.YP)(e, document.body), () => (0, m.UC)(e, document.body);
        }, [N]);
        let E = 0 !== p,
          y = (0, u.Q3)("GlobalDiscoveryHeaderTabs");
        return (0, i.jsxs)("div", {
          className: l()(g.container, t),
          ref: j,
          children: [
            (0, i.jsxs)("div", {
              className: g.measurements,
              children: [
                r.map((e, t) =>
                  (0, i.jsx)(
                    o.AJ,
                    {
                      index: t,
                      onItemLayout: _,
                      children: (0, i.jsx)(c.TabBar.Item, {
                        id: e.id,
                        "aria-label": e.label,
                        className: g.tab,
                        children: (0, i.jsx)(c.Text, {
                          variant: "text-md/medium",
                          children: e.label,
                        }),
                      }),
                    },
                    e.id,
                  ),
                ),
                (0, i.jsx)("div", {
                  ref: f,
                  children: (0, i.jsx)(C, {
                    tabs: S,
                    onTabSelect: s,
                    selectedTab: n,
                  }),
                }),
              ],
            }),
            E &&
              (0, i.jsxs)(c.TabBar, {
                type: "top",
                look: "brand",
                selectedItem: n,
                onItemSelect: s,
                className: g.tabs,
                children: [
                  I.map((e) =>
                    (0, i.jsx)(
                      c.TabBar.Item,
                      {
                        id: e.id,
                        look: "brand",
                        "aria-label": e.label,
                        className: l()(g.tab, {
                          [g.selected]: !y && n === e.id,
                        }),
                        children: e.label,
                      },
                      e.id,
                    ),
                  ),
                  0 !== S.length
                    ? (0, i.jsx)(C, { tabs: S, onTabSelect: s, selectedTab: n })
                    : null,
                ],
              }),
          ],
        });
      }
    },
    79707: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(481060),
        r = n(388032);
      function l(e) {
        let { tabs: t, selectedTab: n, onTabSelect: l, onClose: o } = e;
        return (0, i.jsx)(a.Menu, {
          navId: "global-discovery-tabs-overflow-menu",
          "aria-label": r.intl.string(r.t.riPnr6),
          hideScroller: !0,
          onClose: o,
          onSelect: o,
          children: (0, i.jsx)(
            a.MenuGroup,
            {
              children: t.map((e) => {
                let { id: t, label: r } = e;
                return (0, i.jsx)(
                  a.MenuItem,
                  {
                    id: t,
                    label: r,
                    icon: t === n ? a.CircleCheckIcon : void 0,
                    action: () => l(t),
                  },
                  t,
                );
              }),
            },
            "overflow-tabs",
          ),
        });
      }
    },
    283293: function (e, t, n) {
      var i = n(200651),
        a = n(192379),
        r = n(481060),
        l = n(789560);
      t.Z = a.forwardRef(function (e, t) {
        let { onScroll: n, children: a } = e;
        return (0, i.jsx)(r.AdvancedScroller, {
          onScroll: n,
          className: l.scroller,
          ref: t,
          children: a,
        });
      });
    },
    680180: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(481060),
        s = n(49898),
        c = n(149025);
      function d(e) {
        let {
            state: t,
            query: n,
            placeholder: r,
            onTextChange: d,
            onCollapsedClick: u,
            onClear: m,
            onBlur: p,
            onSubmit: h,
          } = e,
          g = a.useRef(null),
          C = a.useCallback(
            (e) => {
              "Enter" === e.key && h();
            },
            [h],
          ),
          x = a.useCallback(() => {
            u(),
              setTimeout(() => {
                var e;
                return null === (e = g.current) || void 0 === e
                  ? void 0
                  : e.focus();
              });
          }, [u]);
        return t === s.GlobalDiscoverySearchBarState.COLLAPSED
          ? (0, i.jsx)(o.Clickable, {
              className: c.searchIcon,
              onClick: x,
              children: (0, i.jsx)(o.MagnifyingGlassIcon, {
                size: "md",
                color: o.tokens.colors.INTERACTIVE_NORMAL,
              }),
            })
          : (0, i.jsx)(o.SearchBar, {
              ref: g,
              className: l()(c.searchBar, {
                [c.searchFloating]:
                  t === s.GlobalDiscoverySearchBarState.FLOATING,
              }),
              size: o.SearchBar.Sizes.MEDIUM,
              query: n,
              placeholder: r,
              onChange: d,
              onClear: m,
              onKeyDown: C,
              onBlur: p,
            });
      }
    },
    89182: function (e, t, n) {
      n.d(t, {
        PA: function () {
          return a;
        },
        ZP: function () {
          return h;
        },
        iG: function () {
          return p;
        },
      });
      var i,
        a,
        r = n(200651),
        l = n(192379),
        o = n(120356),
        s = n.n(o),
        c = n(481060),
        d = n(706454),
        u = n(600419);
      function m(e) {
        let { items: t, onClose: n, onSelect: i, selected: a, ...l } = e;
        return (0, r.jsx)(c.Menu, {
          className: u.menu,
          navId: "global-discovery-search-filter-options",
          "aria-label": l["aria-label"],
          hideScroller: !0,
          onClose: n,
          onSelect: n,
          children: (0, r.jsx)(
            c.MenuGroup,
            {
              children: t.map((e) => {
                let { id: t, label: n } = e;
                return (0, r.jsx)(
                  c.MenuItem,
                  {
                    id: t,
                    label: n,
                    icon: t === a ? c.CircleCheckIcon : void 0,
                    action: () => i(t),
                  },
                  t,
                );
              }),
            },
            "overflow-tabs",
          ),
        });
      }
      function p(e) {
        let { count: t, name: n } = e,
          i = t.toLocaleString(d.default.locale);
        return (0, r.jsxs)("div", {
          className: u.categoryLabel,
          children: [
            (0, r.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "header-primary",
              children: n,
            }),
            (0, r.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: i,
            }),
          ],
        });
      }
      ((i = a || (a = {})).FILLED = "FILLED"), (i.TRANSPARENT = "TRANSPARENT");
      function h(e) {
        let {
            items: t,
            title: n,
            onSelect: i,
            selected: a,
            variant: o = "TRANSPARENT",
            ...d
          } = e,
          p = l.useMemo(
            () =>
              (function (e) {
                switch (e) {
                  case "FILLED":
                    return u.filterBackground;
                  case "TRANSPARENT":
                    return;
                }
              })(o),
            [o],
          );
        return (0, r.jsx)(c.Popout, {
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(m, {
              selected: a,
              onClose: n,
              items: t,
              onSelect: i,
              "aria-label": d["aria-label"],
            });
          },
          position: "bottom",
          align: "left",
          children: (e, t) => {
            let { isShown: i } = t;
            return (0, r.jsxs)("div", {
              ...e,
              className: s()(u.filter, p),
              children: [
                (0, r.jsx)(c.Text, {
                  variant: "text-sm/medium",
                  color: "interactive-normal",
                  children: n,
                }),
                i
                  ? (0, r.jsx)(c.ChevronSmallUpIcon, {
                      size: "xs",
                      color: c.tokens.colors.INTERACTIVE_NORMAL,
                    })
                  : (0, r.jsx)(c.ChevronSmallDownIcon, {
                      size: "xs",
                      color: c.tokens.colors.INTERACTIVE_NORMAL,
                    }),
              ],
            });
          },
        });
      }
    },
    66637: function (e, t, n) {
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(481060),
        s = n(704839);
      t.Z = a.memo(function (e) {
        let {
          onClick: t,
          onContextMenu: n,
          className: a,
          disabled: r,
          children: c,
        } = e;
        return (0, i.jsx)(o.Clickable, {
          className: l()(s.card, a, {
            [s.clickable]: null != t,
            [s.disabled]: r,
          }),
          onContextMenu: n,
          onClick: r ? void 0 : t,
          children: c,
        });
      });
    },
    31569: function (e, t, n) {
      var i = n(972959);
      let a = Object.freeze({
          query: "",
          searchBarState: n(49898).GlobalDiscoverySearchBarState.DEFAULT,
        }),
        r = (0, i.H)(() => a);
      t.Z = r;
    },
    493646: function (e, t, n) {
      n.d(t, {
        K: function () {
          return l;
        },
        v: function () {
          return r;
        },
      });
      var i = n(979007),
        a = n(388032);
      function r(e) {
        switch (e.id) {
          case 4:
            return a.intl.string(a.t["3m9EgY"]);
          case 6:
            return a.intl.string(a.t.VJRr3d);
          case 8:
            return a.intl.string(a.t.Uv7mFR);
          case 9:
            return a.intl.string(a.t.TEK9Aw);
          case 10:
            return a.intl.string(a.t.lfBt2d);
        }
        return "";
      }
      function l() {
        return {
          id: i.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID,
          name: a.intl.string(a.t.ijDDw8),
        };
      }
    },
    319443: function (e, t, n) {
      n.r(t), n(47120);
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(392711),
        s = n(442837),
        c = n(481060),
        d = n(674588),
        u = n(264043),
        m = n(894653),
        p = n(34674),
        h = n(132871),
        g = n(979233),
        C = n(88693),
        x = n(611928),
        v = n(922122),
        _ = n(680180),
        f = n(726115),
        b = n(703656),
        I = n(314897),
        S = n(594174),
        j = n(626135),
        N = n(31569),
        E = n(881294),
        y = n(975907),
        P = n(119014),
        A = n(258971),
        L = n(133743),
        T = n(726941),
        R = n(666697),
        Z = n(548514),
        O = n(370648),
        M = n(569527),
        k = n(979007),
        D = n(981631),
        w = n(388032),
        B = n(544973);
      function G(e) {
        let {
            applicationId: t,
            hideDetailHeaderButtons: n,
            onClickBack: r,
          } = e,
          o = (0, s.e7)([u.Z], () => u.Z.getApplication(t)),
          [d, m] = a.useState(n),
          p = a.useCallback(() => {
            m(n);
          }, [n]);
        return (0, i.jsxs)("div", {
          className: B.detailHeaderContainer,
          children: [
            (0, i.jsx)("div", {
              className: B.detailHeaderSection,
              children: (0, i.jsx)(x.Cm, {
                icon: c.ArrowLargeLeftIcon,
                onClick: r,
              }),
            }),
            (0, i.jsx)(c.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              className: B.detailHeader,
              lineClamp: 1,
              children: null == o ? void 0 : o.name,
            }),
            (0, i.jsx)("div", {
              className: l()(
                B.detailHeaderSection,
                B.detailHeaderButtonsContainer,
                { [B.visible]: !n, [B.hide]: n && !d, [B.hidden]: n && d },
              ),
              onTransitionEnd: p,
              children:
                null != o
                  ? (0, i.jsx)(Z.Z, { application: o, size: "sm" })
                  : null,
            }),
          ],
        });
      }
      function U() {
        let e = a.useCallback(() => {
            (0, E.qF)();
          }, []),
          t = a.useCallback(() => {
            (0, E.rf)();
          }, []);
        return (0, i.jsxs)(c.Notice, {
          color: c.NoticeColors.BRAND,
          className: B.nagbar,
          children: [
            (0, i.jsx)(c.ClydeIcon, {
              size: "custom",
              color: "white",
              className: B.logo,
            }),
            (0, i.jsx)(c.Text, {
              tag: "span",
              color: "always-white",
              variant: "text-md/normal",
              children: w.intl.string(w.t.Ol3MIi),
            }),
            (0, i.jsxs)("div", {
              className: B.nagbarActionContainer,
              children: [
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                  onClick: e,
                  noticeType: D.kVF.LOGIN,
                  children: w.intl.string(w.t["825cFx"]),
                }),
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                  onClick: t,
                  noticeType: D.kVF.REGISTER,
                  minor: !0,
                  children: w.intl.string(w.t.HAkXzs),
                }),
              ],
            }),
          ],
        });
      }
      t.default = function () {
        var e;
        let t = (0, s.e7)([I.default], () => !I.default.isAuthenticated()),
          {
            onScroll: n,
            scrollPosition: r,
            resetScrollPosition: u,
          } = (0, g.M)(),
          Z = (0, A.Xh)(),
          H = (0, E.nu)(),
          z =
            (null == Z ? void 0 : Z.type) === A.m_.CATEGORY
              ? Z.categoryId
              : void 0,
          { applicationId: V, section: F } =
            (null == Z ? void 0 : Z.type) === A.m_.APPLICATION ? Z : {},
          { query: Y, categoryId: W } =
            (null == Z ? void 0 : Z.type) === A.m_.SEARCH ? Z : {},
          X = (0, s.e7)([m.Z], () => m.Z.getCategories()),
          K = a.useMemo(() => [(0, p.KQ)(), ...X], [X]),
          q = a.useMemo(() => K.find((e) => e.id === Number(W)), [K, W]),
          {
            tabs: Q,
            selectedTab: J,
            onSelectTab: $,
          } = (0, P.i)(null == z ? void 0 : z.toString()),
          [ee, et] = a.useState(!0),
          en = A.z8.useField("trackedOpenedFromExternalEntrypoint"),
          ei = A.z8.useField("sessionId"),
          ea = (0, s.e7)([S.default], () => S.default.getCurrentUser());
        a.useEffect(() => {
          if (!en && null == ei) {
            let e = (0, f.PM)();
            j.default.track(D.rMx.APP_DIRECTORY_OPENED, {
              source: h.n3.EXTERNAL,
              session_id: e,
              user_id: null == ea ? void 0 : ea.id,
            }),
              A.z8.setState({
                trackedOpenedFromExternalEntrypoint: !0,
                sessionId: e,
                entrypoint: { name: h.n3.EXTERNAL },
                guildId: null,
              });
          }
        }, [ei, en, null == ea ? void 0 : ea.id]),
          a.useEffect(() => {
            d.CP();
          }, []),
          a.useEffect(() => {
            H && d.g5();
          }, [H]),
          a.useEffect(() => A.aQ.setState({ lastItem: Z }), [Z]);
        let er = null != V,
          el = (null == Z ? void 0 : Z.type) === A.m_.SEARCH,
          {
            searchQuery: eo,
            onSearchTextChange: es,
            onClearSearch: ec,
            onSearchSubmit: ed,
          } = (0, y.M)({ initialQuery: null != Y ? Y : "" }),
          eu = N.Z.useField("searchBarState"),
          {
            onTabsAvailableWidthChange: em,
            onCollapsedSearchBarClick: ep,
            onSearchBarBlur: eh,
          } = (0, C.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === eo.trim(),
            searchBarState: eu,
            setSearchBarState: (e) => N.Z.setState({ searchBarState: e }),
          }),
          eg = a.useCallback(
            (e) => {
              $(e), el && ec(), u();
            },
            [el, ec, $, u],
          ),
          eC = a.useCallback((e) => (0, L.ph)({ applicationId: e }), []),
          ex = er || el,
          ev = a.useCallback(() => {
            null != (0, A.Uc)() ? (0, b.op)() : (0, L.Yp)();
          }, []),
          e_ = (0, o.debounce)((e) => {
            let {
              scrollTop: t,
              offsetHeight: n,
              scrollHeight: i,
              location: a,
            } = e;
            t > 0 &&
              (0, E.zZ)(D.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
                scroll_visible_percentile: (t + n) / i,
                current_page: a,
              });
          }, 200),
          ef = a.useCallback(
            (e, t) => {
              n(e),
                e_({
                  scrollTop: e.currentTarget.scrollTop,
                  offsetHeight: e.currentTarget.offsetHeight,
                  scrollHeight: e.currentTarget.scrollHeight,
                  location: t,
                });
            },
            [e_, n],
          );
        return (0, i.jsxs)("div", {
          className: l()(B.outerContainer, { [B.loggedOutContainer]: t }),
          children: [
            t ? (0, i.jsx)(U, {}) : null,
            (0, i.jsxs)("div", {
              className: B.innerContainer,
              children: [
                (0, i.jsxs)(x.ZP, {
                  variant: ex ? x._6.RELATIVE : x._6.OVERLAY,
                  children: [
                    !ex && (0, i.jsx)(x.z6, { scrollPosition: r }),
                    er
                      ? (0, i.jsx)(G, {
                          applicationId: V,
                          hideDetailHeaderButtons: ee,
                          onClickBack: ev,
                        })
                      : (0, i.jsxs)(i.Fragment, {
                          children: [
                            el
                              ? (0, i.jsx)(x.Cm, {
                                  icon: c.ArrowLargeLeftIcon,
                                  onClick: ev,
                                })
                              : (0, i.jsx)(x.aV, { icon: c.AppsIcon }),
                            el
                              ? (0, i.jsx)(c.Heading, {
                                  variant: "heading-lg/semibold",
                                  color: "header-primary",
                                  className: B.searchHeader,
                                  children:
                                    null != Y && "" !== Y
                                      ? w.intl.formatToPlainString(w.t.zHdzqa, {
                                          query: Y,
                                        })
                                      : w.intl.formatToPlainString(w.t.Qhj5Bg, {
                                          categoryName:
                                            null !==
                                              (e =
                                                null == q ? void 0 : q.name) &&
                                            void 0 !== e
                                              ? e
                                              : w.intl.string(w.t.E407b2),
                                        }),
                                })
                              : (0, i.jsx)(v.Z, {
                                  tabs: Q,
                                  selectedTab: J,
                                  onTabSelect: eg,
                                  onAvailableWidthChange: em,
                                }),
                            (0, i.jsx)(_.Z, {
                              query: eo,
                              placeholder: w.intl.string(w.t.HPQXEB),
                              onTextChange: es,
                              onClear: ec,
                              onSubmit: ed,
                              onCollapsedClick: ep,
                              state: eu,
                              onBlur: eh,
                            }),
                          ],
                        }),
                  ],
                }),
                er
                  ? (0, i.jsx)(R.Z, {
                      onScroll: (e) => ef(e, A.m_.APPLICATION),
                      onSelectApplication: eC,
                      applicationId: V,
                      initialTab: F,
                      onButtonsVisibilityChange: et,
                    })
                  : el
                    ? (0, i.jsx)(M.Z, {
                        onSelectApplication: eC,
                        onScroll: (e) => ef(e, A.m_.SEARCH),
                      })
                    : J ===
                        k.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                      ? (0, i.jsx)(O.Z, {
                          onScroll: (e) => ef(e, A.m_.HOME),
                          onSelectApplication: eC,
                        })
                      : (0, i.jsx)(T.Z, {
                          tabId: Number(J),
                          onScroll: (e) => ef(e, A.m_.CATEGORY),
                          onSelectApplication: eC,
                        }),
              ],
            }),
          ],
        });
      };
    },
    881294: function (e, t, n) {
      n.d(t, {
        nu: function () {
          return m;
        },
        qF: function () {
          return h;
        },
        rf: function () {
          return p;
        },
        zZ: function () {
          return u;
        },
      }),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i = n(860911),
        a = n(442837),
        r = n(703656),
        l = n(314897),
        o = n(594174),
        s = n(626135),
        c = n(258971),
        d = n(981631);
      function u(e, t) {
        var n;
        let i = c.z8.getField("sessionId"),
          a = c.z8.getField("guildId"),
          r =
            null === (n = c.z8.getField("entrypoint")) || void 0 === n
              ? void 0
              : n.name,
          l = o.default.getCurrentUser();
        return s.default.track(e, {
          ...t,
          guild_id: a,
          directory_session_id: i,
          source: r,
          user_id: null == l ? void 0 : l.id,
        });
      }
      function m() {
        return (0, a.e7)([l.default], () => l.default.isAuthenticated());
      }
      function p() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = new URL(location.href);
        for (let n in e) {
          let i = e[n];
          t.searchParams.set(n, i);
        }
        let n = t.pathname + t.search,
          a = (0, i.Ui)(n, !1);
        (0, r.uL)(a);
      }
      function h() {
        let e = new URL(location.href),
          t = "?redirect_to=".concat(encodeURIComponent(e.pathname + e.search));
        (0, r.uL)(d.Z5c.REGISTER + t);
      }
    },
    956965: function (e, t, n) {
      n(47120);
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(442837),
        s = n(607070),
        c = n(361213),
        d = n(778569),
        u = n(783097),
        m = n(70097),
        p = n(768581),
        h = n(829409),
        g = n(226944);
      let C = 16 / 9,
        x = 325 / 72;
      function v(e) {
        let {
            application: t,
            isHovered: n,
            botBannerUrl: r,
            botBannerUrlAnimated: o,
            iconURL: s,
          } = e,
          p = (0, d.Z)({
            applicationId: t.id,
            size: 600,
            names: ["embedded_cover"],
          }),
          h = a.useMemo(() => {
            let e = (0, u.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id
              ? (0, c.Z)(t.id, e.activity_preview_video_asset_id)
              : null;
          }, [t]),
          { imageUrl: C, imageUrlAnimated: x } = a.useMemo(
            () =>
              "fetched" === p.state && null != p.url
                ? { imageUrl: p.url }
                : { imageUrl: r, imageUrlAnimated: o },
            [p.state, p.url, r, o],
          ),
          v = null != C,
          I = null != h;
        return "loading" === p.state
          ? null
          : I
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  v
                    ? (0, i.jsx)(_, {
                        isHovered: n,
                        url: C,
                        animatedUrl: void 0,
                      })
                    : (0, i.jsx)(m.Z, {
                        src: h,
                        className: l()(g.bannerImage, g.bannerContent),
                        muted: !0,
                      }),
                  (0, i.jsx)(f, { isHovered: n, url: h, isVideo: !0 }),
                ],
              })
            : v
              ? (0, i.jsx)(_, { isHovered: n, url: C, animatedUrl: x })
              : (0, i.jsx)(b, { iconURL: s });
      }
      function _(e) {
        let { isHovered: t, url: n, animatedUrl: r } = e,
          [o, s] = a.useState(!1);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("img", {
              src: n,
              alt: "",
              className: l()(g.bannerImage, g.bannerContent, { [g.loaded]: o }),
              onLoad: () => s(!0),
            }),
            null != r
              ? (0, i.jsx)(f, { isHovered: t, url: r, isVideo: !1 })
              : null,
          ],
        });
      }
      function f(e) {
        let { isHovered: t, url: n, isVideo: r } = e,
          [o, s] = a.useState(!1),
          [c, d] = a.useState(t);
        return (a.useEffect(() => {
          t && d(!0);
        }, [t]),
        c)
          ? (0, i.jsx)("div", {
              className: l()(g.bannerAnimatedContainer, {
                [g.videoFadeOut]: !t,
                [g.videoFadeIn]: t && o,
              }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: r
                ? (0, i.jsx)(m.Z, {
                    src: n,
                    loop: !0,
                    autoPlay: !0,
                    muted: !0,
                    className: g.bannerContent,
                    onLoadedData: () => s(!0),
                  })
                : (0, i.jsx)("img", {
                    src: n,
                    alt: "",
                    className: g.bannerContent,
                    onLoad: () => s(!0),
                  }),
            })
          : null;
      }
      function b(e) {
        let { iconURL: t } = e,
          { backgroundGradient: n, hasFetchedColors: a } = (0, h.u)(t);
        return (0, i.jsx)("div", {
          className: l()(g.bannerContent, g.bannerGradient, { [g.loaded]: a }),
          style: { backgroundImage: n },
        });
      }
      t.Z = function (e) {
        let { application: t, bannerType: n, iconURL: r } = e,
          l = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
          [c, d] = a.useState(!1),
          m = a.useCallback(() => {
            d(!0);
          }, []),
          h = a.useCallback(() => d(!1), []),
          f = (0, u.ye)(t),
          I = t.bot,
          { botBannerUrl: S, botBannerUrlAnimated: j } = a.useMemo(
            () =>
              (null == I ? void 0 : I.id) == null ||
              (null == I ? void 0 : I.banner) == null
                ? {}
                : {
                    botBannerUrl: (0, p.aN)({
                      id: I.id,
                      banner: I.banner,
                      canAnimate: !1,
                      size: 600,
                    }),
                    botBannerUrlAnimated: l
                      ? void 0
                      : (0, p.aN)({
                          id: I.id,
                          banner: I.banner,
                          canAnimate: !0,
                          size: 600,
                        }),
                  },
            [null == I ? void 0 : I.id, null == I ? void 0 : I.banner, l],
          );
        return (0, i.jsx)("div", {
          className: g.bannerContainer,
          style: { aspectRatio: "card" === n ? C : x },
          onMouseEnter: m,
          onFocus: m,
          onMouseLeave: h,
          onBlur: h,
          children:
            "card" === n && f
              ? (0, i.jsx)(v, {
                  application: t,
                  isHovered: c,
                  botBannerUrl: null == S ? void 0 : S,
                  botBannerUrlAnimated: null == j ? void 0 : j,
                })
              : null != S
                ? (0, i.jsx)(_, { isHovered: c, url: S, animatedUrl: j })
                : (0, i.jsx)(b, { iconURL: r }),
        });
      };
    },
    797908: function (e, t, n) {
      n(47120);
      var i = n(200651),
        a = n(192379),
        r = n(622535),
        l = n(481060),
        o = n(783097),
        s = n(66637),
        c = n(768581),
        d = n(956965),
        u = n(388032),
        m = n(833643);
      let p = 28;
      t.Z = function (e) {
        var t, n, h;
        let {
            application: g,
            onSelectApplication: C,
            showCategory: x = !1,
          } = e,
          v = null === (t = g.categories) || void 0 === t ? void 0 : t[0],
          [_, f] = a.useState(!1),
          b = a.useCallback((e) => {
            e && f(!0);
          }, []),
          I = (0, o.lf)(g),
          S = a.useCallback(() => {
            C(g.id);
          }, [C, g.id]),
          j = a.useMemo(
            () =>
              _
                ? c.ZP.getApplicationIconURL({
                    id: g.id,
                    icon: g.icon,
                    size: 48,
                  })
                : void 0,
            [_, g],
          ),
          N = x && null != v;
        return (0, i.jsx)(r.$, {
          onChange: b,
          active: !_,
          children: (0, i.jsx)("div", {
            className: m.container,
            children: (0, i.jsxs)(s.Z, {
              className: m.card,
              onClick: S,
              onContextMenu: () => {},
              children: [
                (0, i.jsxs)("div", {
                  className: m.header,
                  children: [
                    (0, i.jsx)("div", {
                      style: {
                        width: "100%",
                        display: "block",
                        aspectRatio: 16 / 9,
                      },
                      children: _
                        ? (0, i.jsx)(d.Z, {
                            application: g,
                            bannerType: "card",
                            iconURL: j,
                          })
                        : null,
                    }),
                    (0, i.jsx)("div", {
                      className: m.avatarContainer,
                      style: { height: p },
                      children: _
                        ? (0, i.jsx)("img", {
                            src: j,
                            alt: "",
                            className: m.avatar,
                            height: 48,
                            width: 48,
                            style: { borderWidth: 4, marginLeft: 12 },
                          })
                        : null,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: m.appDetails,
                  children: [
                    (0, i.jsx)("div", {
                      className: m.titleContainer,
                      children: (0, i.jsx)("div", {
                        className: m.title,
                        children: (0, i.jsx)(l.Heading, {
                          variant: "heading-md/semibold",
                          color: "header-primary",
                          className: m.appName,
                          children: g.name,
                        }),
                      }),
                    }),
                    N || I
                      ? (0, i.jsxs)("div", {
                          className: m.infoContainer,
                          children: [
                            N
                              ? (0, i.jsx)(l.Text, {
                                  className: m.appCategory,
                                  variant: "text-xs/medium",
                                  color: "text-normal",
                                  children: v.name,
                                })
                              : null,
                            N && I
                              ? (0, i.jsx)(l.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-secondary",
                                  children: "•",
                                })
                              : null,
                            I
                              ? (0, i.jsx)(l.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-secondary",
                                  children: u.intl.string(u.t["/eVltr"]),
                                })
                              : null,
                          ],
                        })
                      : null,
                    (0, i.jsx)(l.Text, {
                      className: m.description,
                      variant: "text-sm/medium",
                      color: "header-secondary",
                      lineClamp: N || I ? 2 : 3,
                      children:
                        null !==
                          (h =
                            null === (n = g.directory_entry) || void 0 === n
                              ? void 0
                              : n.short_description) && void 0 !== h
                          ? h
                          : g.description,
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    292191: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(481060),
        s = n(388032),
        c = n(928261),
        d = n(902294);
      function u(e) {
        let {
          heading: t = s.intl.string(s.t.NGw8v7),
          body: n = s.intl.string(s.t["1XZRY2"]),
          className: r,
        } = e;
        return (0, i.jsxs)("div", {
          className: l()(c.container, r),
          children: [
            (0, i.jsx)("div", {
              className: c.imageContainer,
              children: (0, i.jsx)("img", {
                className: c.image,
                src: d,
                alt: s.intl.string(s.t["/UJaIy"]),
              }),
            }),
            (0, i.jsxs)(a.Fragment, {
              children: [
                (0, i.jsx)(o.Heading, {
                  variant: "heading-xl/semibold",
                  className: c.header,
                  children: t,
                }),
                (0, i.jsx)(o.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: n,
                }),
              ],
            }),
          ],
        });
      }
    },
    975907: function (e, t, n) {
      n.d(t, {
        M: function () {
          return d;
        },
      });
      var i = n(192379),
        a = n(31569),
        r = n(493646),
        l = n(881294),
        o = n(258971),
        s = n(133743),
        c = n(981631);
      function d(e) {
        let { initialQuery: t = "" } = e,
          n = a.Z.useField("query");
        i.useEffect(() => a.Z.setState({ query: t }), [t]);
        let d = i.useCallback((e) => {
            a.Z.setState({ query: e });
          }, []),
          u = i.useCallback(() => {
            a.Z.setState({ query: "" });
          }, []),
          m = i.useCallback(() => {
            let e = (0, r.K)();
            (0, l.zZ)(c.rMx.APP_DIRECTORY_SEARCH_STARTED, {
              search_term: n,
              category: e.name,
              current_page: o.m_.HOME,
              category_id: e.id,
            }),
              (0, s.pR)({ query: n });
          }, [n]);
        return {
          searchQuery: n,
          onSearchTextChange: d,
          onClearSearch: u,
          onSearchSubmit: m,
        };
      }
    },
    119014: function (e, t, n) {
      n.d(t, {
        i: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(192379),
        a = n(442837),
        r = n(894653),
        l = n(493646),
        o = n(881294),
        s = n(258971),
        c = n(133743),
        d = n(981631);
      function u(e) {
        let t = (0, a.e7)([r.Z], () => r.Z.getCategories()),
          n = (0, l.K)(),
          u = i.useMemo(
            () => [
              { id: n.id.toString(), label: n.name },
              ...t.map((e) => ({ id: e.id.toString(), label: e.name })),
            ],
            [t, n],
          ),
          m = (0, s.Xh)(),
          p = i.useCallback(
            (e) => {
              let t = u.find((t) => t.id === e);
              null != t &&
                ((0, o.zZ)(d.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                  category: t.label,
                  category_id: Number(t.id),
                  current_page: null == m ? void 0 : m.type,
                }),
                (0, c.O4)({ categoryId: e }));
            },
            [null == m ? void 0 : m.type, u],
          ),
          h = null != e && u.some((t) => t.id === e) ? e : u[0].id;
        return { tabs: u, selectedTab: h, onSelectTab: p };
      }
    },
    829409: function (e, t, n) {
      n.d(t, {
        u: function () {
          return a;
        },
      }),
        n(47120);
      var i = n(220082);
      function a(e) {
        let [t, n, a] = (0, i.Cf)(e, "transparent"),
          r = (0, i.Dq)(e);
        return {
          backgroundGradient: "linear-gradient(45deg, "
            .concat(t, ", ")
            .concat(null != a ? a : n, ")"),
          hasFetchedColors: r,
        };
      }
    },
    133743: function (e, t, n) {
      n.d(t, {
        Gp: function () {
          return u;
        },
        O4: function () {
          return s;
        },
        Yp: function () {
          return o;
        },
        pR: function () {
          return d;
        },
        ph: function () {
          return c;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i = n(34674),
        a = n(703656),
        r = n(258971),
        l = n(981631);
      let o = () => {
          let e = { previousView: (0, r.Xh)() };
          (0, a.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS, { state: e });
        },
        s = (e) => {
          let { categoryId: t } = e,
            n = { previousView: (0, r.Xh)() };
          (0, a.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t), { state: n });
        },
        c = (e) => {
          let { applicationId: t } = e,
            n = { previousView: (0, r.Xh)() };
          (0, a.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t), { state: n });
        },
        d = function () {
          let {
              query: e,
              categoryId: t,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            o = { previousView: (0, r.Xh)() },
            s = new URLSearchParams();
          null != e && "" !== e && s.set("q", e),
            null != t && t !== i.MU && s.set("category_id", t.toString()),
            null != n && n > 1 && s.set("page", n.toString()),
            (0, a.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
              state: o,
              search: s.toString(),
            });
        },
        u = (e) => {
          let {
            location: { state: t },
          } = (0, a.s1)();
          (0, a.dL)(e, t);
        };
    },
    726941: function (e, t, n) {
      var i = n(200651),
        a = n(192379),
        r = n(442837),
        l = n(894653),
        o = n(322665),
        s = n(17845),
        c = n(374939),
        d = n(283293),
        u = n(493646),
        m = n(292191),
        p = n(683544),
        h = n(863375);
      t.Z = function (e) {
        var t;
        let { tabId: n, onSelectApplication: g, onScroll: C } = e,
          x = a.useRef(null),
          v = a.useCallback(() => {
            var e;
            null === (e = x.current) || void 0 === e || e.scrollTo({ to: 0 });
          }, []),
          _ = (0, r.e7)([l.Z], () => l.Z.getCategories()),
          f = a.useMemo(() => _.find((e) => e.id === n), [_, n]),
          b = a.useMemo(() => (null != f ? (0, u.v)(f) : ""), [f]);
        return (0, i.jsxs)(d.Z, {
          onScroll: C,
          ref: x,
          children: [
            (0, i.jsx)(s.Z, {
              title:
                null !== (t = null == f ? void 0 : f.name) && void 0 !== t
                  ? t
                  : "",
              description: b,
              children: (0, i.jsx)(o.Z, {}),
            }),
            (0, i.jsx)(c.Z, {
              children:
                null == f
                  ? (0, i.jsx)("div", {
                      className: h.errorContainer,
                      children: (0, i.jsx)(m.Z, { className: h.error }),
                    })
                  : (0, i.jsx)(p.Z, {
                      categoryId: f.id,
                      onSelectApplication: g,
                      resetScroll: v,
                    }),
            }),
          ],
        });
      };
    },
    683544: function (e, t, n) {
      n(47120);
      var i = n(200651),
        a = n(192379),
        r = n(209173),
        l = n(399606),
        o = n(481060),
        s = n(699682),
        c = n(674588),
        d = n(368862),
        u = n(809547),
        m = n(125909),
        p = n(881294),
        h = n(797908),
        g = n(292191),
        C = n(258971),
        x = n(979007),
        v = n(981631),
        _ = n(76413);
      let f = { results: [], totalPages: 0, loadId: "" };
      t.Z = function (e) {
        var t;
        let { categoryId: n, onSelectApplication: b, resetScroll: I } = e,
          [S, j] = a.useState(1),
          N = a.useCallback((e) => {
            j(e);
          }, []);
        a.useEffect(() => {
          j(1);
        }, [n]);
        let E = a.useMemo(
            () => ({
              query: x.EMPTY_QUERY,
              page: S,
              pageSize: x.PAGE_SIZE,
              categoryId: n,
            }),
            [S, n],
          ),
          y = (0, l.e7)([u.Z], () =>
            u.Z.getFetchState({
              query: x.EMPTY_QUERY,
              page: S,
              pageSize: x.PAGE_SIZE,
              categoryId: n,
            }),
          ),
          P = (0, l.cj)([u.Z], () => {
            var e;
            return null !== (e = u.Z.getSearchResults(E)) && void 0 !== e
              ? e
              : f;
          }),
          A = null !== (t = (0, s.Z)(P)) && void 0 !== t ? t : f,
          {
            results: L,
            totalPages: T,
            loadId: R,
          } = a.useMemo(() => (y === d.M.FETCHING ? A : P), [y, A, P]),
          Z = a.useMemo(
            () =>
              null == L
                ? void 0
                : L.filter((e) => !(e.type !== r.s.APPLICATION)),
            [L],
          ),
          O = a.useCallback((e) => {
            let {
              page: t,
              activeCategoryId: n,
              onSuccessCallback: i,
              guildId: a,
              fetchCounts: r,
            } = e;
            r && c.yC({ query: x.EMPTY_QUERY, guildId: a }),
              c.yC({
                query: x.EMPTY_QUERY,
                guildId: a,
                options: { page: t, pageSize: x.PAGE_SIZE, categoryId: n },
                onSuccessCallback: i,
              });
          }, []);
        a.useEffect(() => {
          I(), O({ page: S, activeCategoryId: n, onSuccessCallback: () => {} });
        }, [n, I, O, S]);
        let M = a.useCallback(
          (e, t) => {
            (0, p.zZ)(v.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
              current_page: C.m_.SEARCH,
              application_id: e,
              load_id: R,
              position: t,
            }),
              b(e);
          },
          [R, b],
        );
        return y === d.M.ERROR
          ? (0, i.jsx)("div", {
              className: _.errorContainer,
              children: (0, i.jsx)(g.Z, { className: _.error }),
            })
          : (0, i.jsxs)(m.Z, {
              loading: y === d.M.FETCHING,
              children: [
                (0, i.jsx)("div", {
                  className: _.content,
                  children:
                    null == Z
                      ? void 0
                      : Z.map((e, t) => {
                          if (e.type === r.s.APPLICATION) {
                            let n = e.data;
                            return (0, i.jsx)(
                              h.Z,
                              {
                                application: n,
                                onSelectApplication: (e) => M(e, t),
                              },
                              n.id,
                            );
                          }
                          return null;
                        }),
                }),
                (0, i.jsx)(o.Paginator, {
                  className: _.paginationInput,
                  totalCount: Math.min(
                    T * x.PAGE_SIZE,
                    x.MAX_PAGES * x.PAGE_SIZE,
                  ),
                  pageSize: x.PAGE_SIZE,
                  disablePaginationGap: !0,
                  hideMaxPage: !0,
                  currentPage: S,
                  onPageChange: N,
                }),
              ],
            });
      };
    },
    666697: function (e, t, n) {
      n(610138), n(216116), n(78328), n(815648), n(47120);
      var i = n(200651),
        a = n(192379),
        r = n(442837),
        l = n(674588),
        o = n(264043),
        s = n(303383),
        c = n(125909),
        d = n(283836),
        u = n(374939),
        m = n(233374),
        p = n(283293),
        h = n(881294),
        g = n(292191),
        C = n(258971),
        x = n(133743),
        v = n(680474),
        _ = n(571737),
        f = n(796150),
        b = n(946542),
        I = n(213746),
        S = n(979007),
        j = n(981631),
        N = n(388032),
        E = n(890030);
      t.Z = function (e) {
        let {
            applicationId: t,
            onSelectApplication: n,
            onScroll: y,
            initialTab: P,
            onButtonsVisibilityChange: A,
          } = e,
          L = a.useRef(null),
          T = (0, r.e7)([o.Z], () => o.Z.getApplication(t)),
          R = (0, r.e7)([o.Z], () => o.Z.getApplicationFetchState(t));
        a.useEffect(() => {
          if (null != t && null == T) {
            let e =
              "true" === new URLSearchParams(location.search).get("preview") ||
              void 0;
            l.i6(t, { noCache: e });
          }
        }, [t, T]),
          a.useEffect(() => {
            l.T4({ applicationId: t });
          }, [t]),
          a.useEffect(() => () => A(!0), [A]);
        let Z = null == T ? void 0 : T.storefront_available,
          [O, M] = a.useState(
            null != P ? P : S.GlobalDiscoveryAppsSections.ABOUT,
          ),
          k = a.useCallback(
            (e) => {
              var t;
              null === (t = L.current) || void 0 === t || t.scrollTo({ to: 0 }),
                M(S.GlobalDiscoveryAppsSections.ABOUT),
                n(e);
            },
            [n],
          );
        a.useEffect(() => {
          (null == T ? void 0 : T.storefront_available) &&
            null != t &&
            (0, d.Z)(t);
        }, [null == T ? void 0 : T.storefront_available, t]);
        let D = (0, C.Uc)(),
          w = (0, r.e7)([s.Z], () =>
            s.Z.getFetchState({ applicationId: null == T ? void 0 : T.id }),
          ),
          B = (0, r.e7)([s.Z], () =>
            s.Z.getSimilarApplications({
              applicationId: null == T ? void 0 : T.id,
            }),
          ),
          G = a.useMemo(
            () => (null == B ? void 0 : B.applications.slice(0, 3)),
            [B],
          ),
          U = { displayedSimilarApplications: G, previousView: D },
          H = a.useRef(U);
        a.useEffect(() => {
          H.current = U;
        }),
          a.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } =
              H.current;
            (null == T ? void 0 : T.id) != null &&
              w !== s.M.FETCHING &&
              (0, h.zZ)(j.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: C.m_.APPLICATION,
                previous_page: null == t ? void 0 : t.type,
                application_id: T.id,
                referrer: document.referrer,
                suggested_application_ids:
                  null == e ? void 0 : e.map((e) => e.id),
              });
          }, [null == T ? void 0 : T.id, w]);
        let z = a.useMemo(
            () => [
              {
                id: S.GlobalDiscoveryAppsSections.ABOUT,
                label: N.intl.string(N.t.DkyHMD),
              },
              {
                id: S.GlobalDiscoveryAppsSections.STORE,
                label: N.intl.string(N.t.jgEXGB),
              },
            ],
            [],
          ),
          V = a.useMemo(() => {
            if (null == T) return null;
            switch (O) {
              case S.GlobalDiscoveryAppsSections.ABOUT:
                return (0, i.jsx)(v.Z, { application: T });
              case S.GlobalDiscoveryAppsSections.STORE:
                return (0, i.jsx)(I.Z, { application: T });
            }
          }, [O, T]),
          F = a.useCallback(
            (e) => {
              (0, h.zZ)(j.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                application_id: t,
                tab_name: e,
              }),
                M(e),
                e === S.GlobalDiscoveryAppsSections.ABOUT
                  ? (0, x.Gp)(j.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t))
                  : (0, x.Gp)(
                      j.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e),
                    );
            },
            [t],
          ),
          Y = O === S.GlobalDiscoveryAppsSections.ABOUT;
        return (0, i.jsx)(p.Z, {
          onScroll: y,
          ref: L,
          children: (0, i.jsx)(u.Z, {
            children:
              null == T
                ? null == R || R === o.M.FETCHING
                  ? (0, i.jsx)("div", {
                      className: E.centerContainer,
                      children: (0, i.jsx)(c.Z, { loading: !0 }),
                    })
                  : (0, i.jsx)("div", {
                      className: E.centerContainer,
                      children: (0, i.jsx)(g.Z, { className: E.error }),
                    })
                : (0, i.jsxs)("div", {
                    className: E.detailContainer,
                    children: [
                      (0, i.jsx)(_.Z, {
                        application: T,
                        onButtonsVisibilityChange: A,
                      }),
                      (0, i.jsxs)("div", {
                        className: E.contentContainer,
                        children: [
                          (0, i.jsxs)("div", {
                            className: E.contentTabsContainer,
                            children: [
                              Z &&
                                (0, i.jsx)("div", {
                                  className: E.contentTabs,
                                  children: (0, i.jsx)(m.Z, {
                                    tabs: z,
                                    onTabSelect: F,
                                    selectedTab: O,
                                  }),
                                }),
                              V,
                              (0, i.jsx)(b.Z, {
                                applicationId: t,
                                fetchState: w,
                                similarApplications: G,
                                onSelectApplication: k,
                                similarLoadId: null == B ? void 0 : B.loadId,
                              }),
                            ],
                          }),
                          Y &&
                            (0, i.jsx)(f.Z, {
                              className: E.sidebar,
                              application: T,
                              view: "side",
                            }),
                        ],
                      }),
                    ],
                  }),
          }),
        });
      };
    },
    680474: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      });
      var i = n(200651),
        a = n(192379),
        r = n(793030),
        l = n(34674),
        o = n(823379),
        s = n(448021),
        c = n(405411),
        d = n(215453),
        u = n(796150),
        m = n(24746),
        p = n(669401),
        h = n(388032),
        g = n(609396);
      function C(e) {
        let { application: t } = e,
          n = a.useMemo(() => {
            var e, n, i;
            return null !==
              (i = (
                null !==
                  (n =
                    null === (e = t.directory_entry) || void 0 === e
                      ? void 0
                      : e.carousel_items) && void 0 !== n
                  ? n
                  : []
              )
                .map(l.RF)
                .filter(o.lm)) && void 0 !== i
              ? i
              : [];
          }, [t]);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: g.aboutContainer,
              children: [
                (0, i.jsx)(s.Z, { application: t, carouselItems: n }),
                (0, i.jsx)(m.Z, { application: t }),
                (0, i.jsx)(c.Z, { application: t }),
                (0, i.jsx)(p.Z, { application: t }),
                (0, i.jsx)(d.Z, { application: t }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: g.informationContainer,
              children: [
                (0, i.jsx)("div", { className: g.divider }),
                (0, i.jsx)(r.X6, {
                  variant: "heading-lg/semibold",
                  color: "header-primary",
                  children: h.intl.string(h.t["mD+J/v"]),
                }),
                (0, i.jsx)(u.Z, { application: t, view: "embedded" }),
              ],
            }),
          ],
        });
      }
    },
    548514: function (e, t, n) {
      n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(873546),
        s = n(442837),
        c = n(481060),
        d = n(782568),
        u = n(906732),
        m = n(783097),
        p = n(606192),
        h = n(326135),
        g = n(299206),
        C = n(703656),
        x = n(706454),
        v = n(626135),
        _ = n(572004),
        f = n(135431),
        b = n(881294),
        I = n(258971),
        S = n(981631),
        j = n(388032),
        N = n(914045);
      let E = "start_application_install";
      function y(e) {
        let { renderDropdown: t, size: n } = e;
        return (0, i.jsx)(c.Popout, {
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return t(n);
          },
          position: "left",
          align: "top",
          animation: c.Popout.Animation.NONE,
          children: (e) =>
            (0, i.jsx)(c.Button, {
              look: c.Button.Looks.FILLED,
              size: c.Button.Sizes.ICON,
              color: c.Button.Colors.PRIMARY,
              className: l()(N.iconButton, { [N.small]: "sm" === n }),
              innerClassName: N.innerIconButton,
              "aria-label": j.intl.string(j.t.UKOtz8),
              ...e,
              children: (0, i.jsx)(c.MoreHorizontalIcon, {
                size: "xs",
                color: "currentColor",
              }),
            }),
        });
      }
      function P(e) {
        let { application: t, variant: n, size: r, analyticsLocations: s } = e,
          { onClickInstallApplication: d, canInstall: u } = (function (e) {
            let t = (0, b.nu)(),
              n = a.useCallback(() => {
                var t;
                let n =
                  null !== (t = I.z8.getField("guildId")) && void 0 !== t
                    ? t
                    : void 0;
                (0, f.LO)({
                  applicationId: e.id,
                  customInstallUrl: e.custom_install_url,
                  installParams: e.install_params,
                  integrationTypesConfig: e.integration_types_config,
                  guildId: n,
                  source: "product_page",
                });
              }, [e]);
            a.useEffect(() => {
              let e = new URL(location.href);
              if (t && "true" === e.searchParams.get(E)) {
                e.searchParams.delete(E);
                let t = e.pathname + e.search;
                (0, C.dL)(t), n();
              }
            }, [t, n]);
            let i = a.useCallback(() => {
              if (
                ((0, b.zZ)(S.rMx.APP_DIRECTORY_INSTALL_CLICKED, {
                  application_id: e.id,
                }),
                (o.tq || o.Em) && null == e.custom_install_url)
              ) {
                let t = (0, f.Er)({
                  applicationId: e.id,
                  customInstallUrl: e.custom_install_url,
                  installParams: e.install_params,
                  integrationTypesConfig: e.integration_types_config,
                });
                if (null != t) {
                  window.open(t, "_blank");
                  return;
                }
              }
              if (t) n();
              else {
                let t = I.z8.getField("guildId");
                v.default.track(S.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                  application_id: e.id,
                  guild_id: t,
                  auth_type:
                    null != e.custom_install_url ? "custom_url" : "in_app",
                  source: "product_page",
                  device_platform: o.tq ? "mobile_web" : "desktop_web",
                }),
                  (0, b.rf)({ [E]: "true" });
              }
            }, [e, n, t]);
            return {
              onClickInstallApplication: i,
              canInstall: a.useMemo(
                () =>
                  (0, f.Eb)({
                    customInstallUrl: e.custom_install_url,
                    installParams: e.install_params,
                    integrationTypesConfig: e.integration_types_config,
                  }),
                [e],
              ),
            };
          })(t),
          { onClickLaunchActivity: h, isSubmitting: g } = (function (e, t) {
            var n;
            let i = e.id,
              r =
                null == e
                  ? void 0
                  : null === (n = e.bot) || void 0 === n
                    ? void 0
                    : n.id,
              l = null != r && (0, m.BQ)(e) && (0, m.ye)(e),
              [o, s] = a.useState(!1),
              c = a.useCallback(async () => {
                if (null != r) {
                  (0, b.zZ)(S.rMx.APP_DIRECTORY_LAUNCH_CLICKED, {
                    application_id: i,
                  }),
                    s(!0);
                  try {
                    await (0, p.W)({
                      appId: i,
                      botId: r,
                      analyticsLocations: t,
                    });
                  } catch (e) {}
                  s(!1);
                }
              }, [r, i, t]);
            return { onClickLaunchActivity: l ? c : void 0, isSubmitting: o };
          })(t, s),
          x = null != h,
          _ = x ? h : d;
        if ("icon" === n)
          return (0, i.jsx)(c.Button, {
            look: c.Button.Looks.FILLED,
            size: c.Button.Sizes.ICON,
            color: c.Button.Colors.BRAND,
            className: l()(N.iconButton, { [N.small]: "sm" === r }),
            onClick: _,
            submitting: g,
            "aria-label": j.intl.string(j.t.NgXl3N),
            innerClassName: N.innerIconButton,
            disabled: !u,
            children: x
              ? (0, i.jsx)(c.PlayIcon, { size: "xs", color: "currentColor" })
              : (0, i.jsx)(c.PlusLargeIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
          });
        {
          let e;
          return (
            (e = x
              ? j.intl.string(j.t.QO7rOz)
              : "small" === n
                ? j.intl.string(j.t.qRZ35u)
                : j.intl.string(j.t.NgXl3N)),
            (0, i.jsx)(c.Button, {
              size: "sm" === r ? c.Button.Sizes.SMALL : c.Button.Sizes.MEDIUM,
              color: c.Button.Colors.BRAND,
              onClick: _,
              submitting: g,
              disabled: !x && !u,
              children: e,
            })
          );
        }
      }
      t.Z = function (e) {
        let { application: t, size: n } = e,
          r = (e) =>
            ""
              .concat(location.protocol, "//")
              .concat(location.host)
              .concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
          { analyticsLocations: o } = (0, u.ZP)(),
          m = a.useCallback(() => {
            (0, b.zZ)(S.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, {
              application_id: t.id,
            }),
              (0, _.JG)(r(t.id)),
              (0, c.showToast)(
                (0, c.createToast)(
                  j.intl.string(j.t["L/PwZW"]),
                  c.ToastType.SUCCESS,
                ),
              );
          }, [t.id]),
          p = (0, s.e7)([x.default], () => x.default.locale),
          C = a.useCallback(() => {
            (0, d.Z)((0, h.G)({ id: t.id, name: t.name, locale: p }));
          }, [p, t]),
          v = (0, g.Z)({
            id: t.id,
            label: j.intl.string(j.t["FfCL+/"]),
            onSuccess: () =>
              (0, c.showToast)(
                (0, c.createToast)(
                  j.intl.string(j.t.eNjAam),
                  c.ToastType.SUCCESS,
                ),
              ),
          }),
          f = a.useCallback(
            (e, t) =>
              (0, i.jsxs)(c.Menu, {
                navId: "application-directory-profile",
                "aria-label": j.intl.string(j.t["/7I4/P"]),
                onClose: t,
                onSelect: void 0,
                children: [
                  e
                    ? (0, i.jsx)(c.MenuGroup, {
                        children: (0, i.jsx)(c.MenuItem, {
                          id: "copy",
                          label: j.intl.string(j.t.z4sP5O),
                          action: m,
                          icon: c.LinkIcon,
                        }),
                      })
                    : null,
                  (0, i.jsx)(c.MenuGroup, {
                    children: (0, i.jsx)(c.MenuItem, {
                      id: "report",
                      label: j.intl.string(j.t.NgA5vr),
                      color: "danger",
                      action: C,
                    }),
                  }),
                  null != v ? (0, i.jsx)(c.MenuGroup, { children: v }) : null,
                ],
              }),
            [v, C, m],
          );
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsxs)("div", {
              className: l()(N.actionContainer, N.wide),
              children: [
                (0, i.jsx)(P, {
                  application: t,
                  variant: "normal",
                  size: n,
                  analyticsLocations: o,
                }),
                _.wS
                  ? (0, i.jsx)(c.Button, {
                      look: c.Button.Looks.FILLED,
                      size: c.Button.Sizes.ICON,
                      color: c.Button.Colors.PRIMARY,
                      className: l()(N.iconButton, { [N.small]: "sm" === n }),
                      innerClassName: N.innerIconButton,
                      "aria-label": j.intl.string(j.t.z4sP5O),
                      onClick: m,
                      children: (0, i.jsx)(c.LinkIcon, {
                        size: "xs",
                        color: "currentColor",
                      }),
                    })
                  : null,
                (0, i.jsx)(y, { renderDropdown: (e) => f(!1, e), size: n }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: l()(N.actionContainer, N.small),
              children: [
                (0, i.jsx)(P, {
                  application: t,
                  variant: "small",
                  size: n,
                  analyticsLocations: o,
                }),
                (0, i.jsx)(y, { renderDropdown: (e) => f(_.wS, e), size: n }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: l()(N.actionContainer, N.tiny),
              children: [
                (0, i.jsx)(P, {
                  application: t,
                  variant: "icon",
                  size: n,
                  analyticsLocations: o,
                }),
                (0, i.jsx)(y, { renderDropdown: (e) => f(_.wS, e), size: n }),
              ],
            }),
          ],
        });
      };
    },
    448021: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      });
      var i = n(200651),
        a = n(192379),
        r = n(793030),
        l = n(442837),
        o = n(445986),
        s = n(9807),
        c = n(341176),
        d = n(312097),
        u = n(451478),
        m = n(981631),
        p = n(388032),
        h = n(520432),
        g = n(902294);
      function C(e) {
        let { application: t, carouselItems: n } = e,
          C = (0, l.e7)([u.Z], () => u.Z.isFocused()),
          x = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("img", {
                className: h.errorImage,
                src: g,
                "aria-hidden": !0,
                alt: "",
              }),
              (0, i.jsx)(r.X6, {
                variant: "heading-xl/semibold",
                children: p.intl.string(p.t.UvDfMz),
              }),
            ],
          });
        n.forEach((e, i) => {
          e.alt = p.intl.formatToPlainString(p.t.sSEhHR, {
            index: i + 1,
            totalImages: n.length,
            name: t.name,
          });
        });
        let v = a.useCallback(
          (e, t) => {
            if (e.type === m.s9s.IMG) {
              let t = n.filter((e) => e.type === m.s9s.IMG),
                i = t.findIndex((t) => t === e);
              if (i < 0) return;
              let a = t.map((e) => ({
                url: (0, o.Q)(e.src),
                original: e.src,
                width: e.width,
                height: e.height,
                type: "IMAGE",
              }));
              (0, d.K)({
                items: a,
                startingIndex: i,
                fit: c.D.CONTAIN,
                shouldHideMediaOptions: !0,
                shouldAnimateCarousel: !0,
                location: "GlobalDiscoveryAppsDetailCarousel",
              });
            }
          },
          [n],
        );
        return 0 === n.length
          ? null
          : (0, i.jsx)(s.Z, {
              className: h.carousel,
              themedPagination: !0,
              items: n,
              autoplayInterval: 8e3,
              paused: !C,
              videoAutoPlay: !0,
              onCurrentItemClick: v,
              errorComponent: x,
            });
      }
    },
    424472: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651),
        a = n(192379),
        r = n(481060),
        l = n(881294),
        o = n(258971),
        s = n(133743),
        c = n(981631),
        d = n(388032),
        u = n(190778);
      function m(e) {
        let { application: t, className: n } = e,
          m = a.useCallback((e) => {
            (0, l.zZ)(c.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
              category: e.name,
              category_id: e.id,
              current_page: o.m_.APPLICATION,
            }),
              (0, s.pR)({ categoryId: e.id });
          }, []);
        return null == t.categories || 0 === t.categories.length
          ? null
          : (0, i.jsxs)("div", {
              className: n,
              children: [
                (0, i.jsx)(r.Heading, {
                  variant: "heading-sm/semibold",
                  color: "header-primary",
                  children: d.intl.string(d.t.s7ialZ),
                }),
                (0, i.jsx)("div", {
                  className: u.categories,
                  children: t.categories.map((e) =>
                    (0, i.jsx)(
                      r.Clickable,
                      {
                        className: u.category,
                        onClick: () => m(e),
                        children: (0, i.jsx)(r.Text, {
                          variant: "text-sm/semibold",
                          color: "redesign-button-tertiary-text",
                          children: e.name,
                        }),
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            });
      }
    },
    405411: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651),
        a = n(192379),
        r = n(481060),
        l = n(581364),
        o = n(665692),
        s = n(388032),
        c = n(765853);
      function d(e) {
        let { application: t } = e,
          n = a.useMemo(() => {
            var e;
            let n =
              null === (e = t.directory_entry) || void 0 === e
                ? void 0
                : e.popular_application_commands;
            return null != n
              ? n.map((e) =>
                  (0, l.Z8)({
                    rootCommand: e,
                    command: e,
                    applicationId: e.application_id,
                  }),
                )
              : [];
          }, [t]);
        return 0 === n.length
          ? null
          : (0, i.jsxs)("div", {
              className: c.sectionContainer,
              children: [
                (0, i.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  color: "header-primary",
                  children: s.intl.string(s.t.swIgTE),
                }),
                (0, i.jsx)("div", {
                  className: c.contentContainer,
                  children: n.map((e) =>
                    (0, i.jsxs)(
                      "div",
                      {
                        className: c.commandContainer,
                        children: [
                          (0, i.jsxs)(r.Text, {
                            className: c.commandName,
                            variant: "code",
                            color: "header-primary",
                            children: [o.GI, e.displayName],
                          }),
                          (0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "text-normal",
                            children: e.displayDescription,
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            });
      }
    },
    215453: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(789020);
      var i = n(200651),
        a = n(192379),
        r = n(481060),
        l = n(860719),
        o = n(63063),
        s = n(49012),
        c = n(981631),
        d = n(388032),
        u = n(349778);
      let m = o.Z.getArticleURL(c.BhN.BOT_DATA_ACCESS);
      function p(e) {
        let { application: t } = e,
          {
            hasMessageContent: n,
            hasGuildPresences: o,
            hasGuildMembers: c,
            hasIntents: p,
          } = (0, l.w)({ flags: null == t ? void 0 : t.flags }),
          g = a.useCallback(() => {
            null != t.privacy_policy_url &&
              (0, s.q)({ href: t.privacy_policy_url });
          }, [t.privacy_policy_url]);
        return (0, i.jsxs)("div", {
          className: u.sectionContainer,
          children: [
            (0, i.jsx)(r.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: d.intl.string(d.t.QzDgMj),
            }),
            (0, i.jsxs)("div", {
              className: u.contentContainer,
              children: [
                p &&
                  (0, i.jsxs)("ul", {
                    className: u.intentsList,
                    children: [
                      (0, i.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-secondary",
                        children: d.intl.string(d.t.U6KH5e),
                      }),
                      n &&
                        (0, i.jsx)(h, {
                          icon: r.ChatIcon,
                          heading: d.intl.string(d.t.gJpBOz),
                          body: d.intl.string(d.t["L+QVbm"]),
                        }),
                      o &&
                        (0, i.jsx)(h, {
                          icon: r.UserCircleStatusIcon,
                          heading: d.intl.string(d.t.jo0oj4),
                          body: d.intl.string(d.t.Dm0jq6),
                        }),
                      c &&
                        (0, i.jsx)(h, {
                          icon: r.GroupIcon,
                          heading: d.intl.string(d.t.QZql7O),
                          body: d.intl.string(d.t["ez/N/f"]),
                        }),
                    ],
                  }),
                (0, i.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: d.intl.format(d.t.b6nqk5, { helpCenterUrl: m }),
                }),
                null != t.privacy_policy_url &&
                  (0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    className: u.privacyPolicy,
                    children: d.intl.format(d.t.agYVY2, { onClick: g }),
                  }),
              ],
            }),
          ],
        });
      }
      function h(e) {
        let { icon: t, heading: n, body: a } = e;
        return (0, i.jsxs)("li", {
          className: u.intentContainer,
          children: [
            (0, i.jsx)(t, { color: "currentColor", size: "md" }),
            (0, i.jsxs)("div", {
              className: u.intentTextContainer,
              children: [
                (0, i.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  color: "header-secondary",
                  children: n,
                }),
                (0, i.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: a,
                }),
              ],
            }),
          ],
        });
      }
    },
    571737: function (e, t, n) {
      n(653041);
      var i = n(200651),
        a = n(192379),
        r = n(622535),
        l = n(481060),
        o = n(783097),
        s = n(768581),
        c = n(956965),
        d = n(548514),
        u = n(388032),
        m = n(137762);
      let p = 52;
      t.Z = function (e) {
        let { application: t, onButtonsVisibilityChange: n } = e,
          h = a.useMemo(
            () =>
              s.ZP.getApplicationIconURL({ id: t.id, icon: t.icon, size: 96 }),
            [t],
          ),
          g = a.useMemo(() => {
            let e = [];
            return (
              (0, o.vJ)(t) && e.push(u.intl.string(u.t.LO4f0N)),
              (0, o.Cb)(t) &&
                (0 !== e.length && e.push("•"),
                e.push(u.intl.string(u.t["8z5B2d"]))),
              (0, o.Hu)(t) &&
                (0 !== e.length && e.push("•"),
                e.push(u.intl.string(u.t["5khEk5"]))),
              e
            );
          }, [t]);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(c.Z, {
              application: t,
              bannerType: "detail",
              iconURL: h,
            }),
            (0, i.jsx)("div", {
              className: m.avatarContainer,
              style: { height: p },
              children: (0, i.jsx)("img", {
                src: h,
                alt: "",
                className: m.avatar,
                height: 96,
                width: 96,
                style: { borderWidth: 4, marginLeft: 28 },
              }),
            }),
            (0, i.jsxs)("div", {
              className: m.infoContainer,
              children: [
                (0, i.jsxs)("div", {
                  className: m.metadataContainer,
                  children: [
                    (0, i.jsx)(l.Heading, {
                      variant: "heading-xxl/bold",
                      color: "header-primary",
                      lineClamp: 1,
                      children: t.name,
                    }),
                    (0, i.jsx)("div", {
                      className: m.disclosuresContainer,
                      children: g.map((e, t) =>
                        (0, i.jsx)(
                          l.Text,
                          {
                            className: m.disclosuresText,
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: e,
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, i.jsx)(r.$, {
                  onChange: n,
                  active: !0,
                  children: (0, i.jsx)(d.Z, { application: t, size: "md" }),
                }),
              ],
            }),
          ],
        });
      };
    },
    796150: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(120356),
        r = n.n(a),
        l = n(793030),
        o = n(924489),
        s = n(824606),
        c = n(424472),
        d = n(682807),
        u = n(691703),
        m = n(953989),
        p = n(388032),
        h = n(75655);
      function g(e) {
        let { className: t, view: n, application: a } = e,
          g = "embedded" === n,
          C = (0, s.Z)({ application: a });
        return (0, i.jsxs)("div", {
          className: r()(t, { [h.sideContainer]: !g, [h.gridContainer]: g }),
          children: [
            (0, i.jsxs)("div", {
              className: r()(h.sectionContainer, { [h.reducedGap]: g }),
              children: [
                (0, i.jsxs)("div", {
                  className: h.infoSection,
                  children: [
                    (0, i.jsx)(l.X6, {
                      variant: "heading-sm/semibold",
                      color: "header-primary",
                      children: p.intl.string(p.t["3NxHCw"]),
                    }),
                    (0, i.jsx)(o.Z, {
                      application: a,
                      mutualGuilds: C,
                      mutualGuildShownMax: 3,
                      className: h.guildCountContainer,
                      guildIconSize: o.x.SMALL,
                      guildsClassName: h.guildsIconContainer,
                      compact: !0,
                    }),
                  ],
                }),
                (0, i.jsx)(c.Z, { application: a, className: h.infoSection }),
                (0, i.jsx)(m.Z, { application: a, className: h.infoSection }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: r()(h.sectionContainer, { [h.reducedGap]: g }),
              children: [
                (0, i.jsx)(d.Z, {
                  application: a,
                  className: h.infoSection,
                  innerClassName: g ? h.linkGrid : void 0,
                }),
                (0, i.jsx)(u.Z, { application: a, className: h.infoSection }),
              ],
            }),
          ],
        });
      }
    },
    682807: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(120356),
        r = n.n(a),
        l = n(780384),
        o = n(481060),
        s = n(794295),
        c = n(410030),
        d = n(726542),
        u = n(881294),
        m = n(388032),
        p = n(140577);
      function h(e) {
        var t, n;
        let { application: a, className: l, innerClassName: s } = e,
          c =
            null !==
              (n =
                null === (t = a.directory_entry) || void 0 === t
                  ? void 0
                  : t.external_urls) && void 0 !== n
              ? n
              : [];
        return null != a.terms_of_service_url ||
          null != a.privacy_policy_url ||
          c.length > 0
          ? (0, i.jsxs)("div", {
              className: r()(p.container, l),
              children: [
                (0, i.jsx)(o.Heading, {
                  variant: "heading-sm/semibold",
                  color: "header-primary",
                  children: m.intl.string(m.t.l6DP2t),
                }),
                (0, i.jsxs)("div", {
                  className: r()(p.list, s),
                  children: [
                    c.map((e, t) =>
                      (0, i.jsx)(g, { url: e.url, children: e.name }, t),
                    ),
                    null != a.terms_of_service_url
                      ? (0, i.jsx)(C, {
                          icon: o.FileIcon,
                          url: a.terms_of_service_url,
                          children: m.intl.string(m.t.s7STcX),
                        })
                      : null,
                    null != a.privacy_policy_url
                      ? (0, i.jsx)(C, {
                          icon: o.LockIcon,
                          url: a.privacy_policy_url,
                          children: m.intl.string(m.t.kH3JR0),
                        })
                      : null,
                  ],
                }),
              ],
            })
          : null;
      }
      function g(e) {
        var t, n;
        let { url: a, children: r } = e,
          s = (0, c.ZP)(),
          u = d.Z.getByUrl(a),
          m = (0, l.wj)(s)
            ? null == u
              ? void 0
              : null === (t = u.icon) || void 0 === t
                ? void 0
                : t.darkSVG
            : null == u
              ? void 0
              : null === (n = u.icon) || void 0 === n
                ? void 0
                : n.lightSVG;
        return (0, i.jsx)(C, {
          icon: void 0 === m ? o.LinkIcon : void 0,
          imageSrc: m,
          url: a,
          children: r,
        });
      }
      function C(e) {
        let { icon: t, imageSrc: n, iconColor: a, url: l, children: c } = e,
          d = (0, u.nu)(),
          m = null;
        null != t
          ? (m = (0, i.jsx)(t, {
              className: p.listIcon,
              color: null != a ? a : "currentColor",
              width: 20,
              height: 20,
              size: "custom",
            }))
          : null != n &&
            (m = (0, i.jsx)("img", {
              className: p.listImage,
              src: n,
              alt: "",
            }));
        let h = (0, i.jsxs)(i.Fragment, {
          children: [
            m,
            (0, i.jsx)(o.Text, {
              className: p.listText,
              variant: "text-sm/medium",
              selectable: !0,
              children: c,
            }),
          ],
        });
        return (0, i.jsx)(s.Z, {
          href: l,
          className: r()(p.listItem, p.linkItem),
          trusted: !d,
          useDefaultUnderlineStyles: !1,
          children: h,
        });
      }
    },
    24746: function (e, t, n) {
      n(47120);
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(477660),
        s = n.n(o),
        c = n(481060),
        d = n(939893),
        u = n(241209),
        m = n(388032),
        p = n(285136);
      let h = s().parserFor(d.Z),
        g = s().reactFor(s().ruleOutput(d.Z, "react"));
      function C(e) {
        let { description: t, supportsMarkdown: n } = e,
          [r, o] = a.useState(!1),
          s = a.useRef(null);
        a.useEffect(() => {
          if (null == s.current) return;
          let e = new ResizeObserver(() => {
            var e, t, n, i;
            let a =
              null !==
                (n =
                  null === (e = s.current) || void 0 === e
                    ? void 0
                    : e.scrollHeight) && void 0 !== n
                ? n
                : 0;
            o(
              a -
                (null !==
                  (i =
                    null === (t = s.current) || void 0 === t
                      ? void 0
                      : t.clientHeight) && void 0 !== i
                  ? i
                  : 0) >
                1,
            );
          });
          return e.observe(s.current), () => e.disconnect();
        }, []);
        let [d, m] = a.useState(!1),
          C = a.useCallback(() => {
            m((e) => !e);
          }, []);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              ref: s,
              className: l()({
                [p.descriptionClamp]: !d,
                [p.descriptionClampSafari]: !d && "Safari" === platform.name,
              }),
              children: n
                ? (0, i.jsx)(u.Z, {
                    className: p.detailedDescription,
                    parser: h,
                    output: g,
                    state: { allowLinks: !0 },
                    children: t,
                  })
                : (0, i.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "text-normal",
                    children: t,
                  }),
            }),
            r || d ? (0, i.jsx)(x, { isShowingMore: d, onToggle: C }) : null,
          ],
        });
      }
      function x(e) {
        let { onToggle: t, isShowingMore: n } = e,
          r = a.useMemo(
            () =>
              (0, i.jsxs)("div", {
                className: p.showMoreContent,
                children: [
                  (0, i.jsx)(c.Text, {
                    variant: "text-md/semibold",
                    color: "interactive-normal",
                    children: n
                      ? m.intl.string(m.t["vtfc4+"])
                      : m.intl.string(m.t.ZDRyur),
                  }),
                  n
                    ? (0, i.jsx)(c.ChevronSmallUpIcon, {
                        size: "md",
                        color: "currentColor",
                        className: p.showMoreButtonIcon,
                      })
                    : (0, i.jsx)(c.ChevronSmallDownIcon, {
                        size: "md",
                        color: "currentColor",
                        className: p.showMoreButtonIcon,
                      }),
                ],
              }),
            [n],
          );
        return (0, i.jsxs)(c.Clickable, {
          className: p.showMoreButton,
          onClick: t,
          children: [
            (0, i.jsx)("div", { className: p.divider }),
            r,
            (0, i.jsx)("div", { className: p.divider }),
          ],
        });
      }
      t.Z = function (e) {
        var t, n;
        let { application: r } = e,
          l =
            null === (t = r.directory_entry) || void 0 === t
              ? void 0
              : t.detailed_description,
          o =
            null === (n = r.directory_entry) || void 0 === n
              ? void 0
              : n.short_description,
          s = a.useMemo(
            () =>
              null != l && l.length > 0
                ? (0, i.jsx)(C, { description: l, supportsMarkdown: !0 })
                : null != o && o.length > 0
                  ? (0, i.jsx)(C, { description: o, supportsMarkdown: !1 })
                  : null,
            [l, o],
          );
        return null == s
          ? null
          : (0, i.jsxs)("div", {
              className: p.overviewContainer,
              children: [
                (0, i.jsx)(c.Heading, {
                  variant: "heading-lg/semibold",
                  color: "header-primary",
                  children: m.intl.string(m.t.txraKS),
                }),
                s,
              ],
            });
      };
    },
    669401: function (e, t, n) {
      var i = n(200651),
        a = n(192379),
        r = n(149765),
        l = n(481060),
        o = n(995648),
        s = n(422559),
        c = n(388032),
        d = n(878744);
      t.Z = function (e) {
        var t;
        let { application: n } = e,
          u = a.useMemo(() => {
            var e;
            let t =
              null == n
                ? void 0
                : null === (e = n.install_params) || void 0 === e
                  ? void 0
                  : e.permissions;
            if (null != t) return s.VY.filter((e) => r.e$(r.vB(t), e));
          }, [
            null == n
              ? void 0
              : null === (t = n.install_params) || void 0 === t
                ? void 0
                : t.permissions,
          ]);
        return null != u && u.length > 0
          ? (0, i.jsxs)("div", {
              className: d.sectionContainer,
              children: [
                (0, i.jsx)(l.Heading, {
                  variant: "heading-lg/semibold",
                  color: "header-primary",
                  children: c.intl.string(c.t.runNFx),
                }),
                (0, i.jsx)(o.Z, {
                  className: d.contentContainer,
                  grantedPermissions: u,
                  grantedPermissionsHeader: c.intl.string(c.t.SLgiND),
                }),
              ],
            })
          : null;
      };
    },
    946542: function (e, t, n) {
      n(47120);
      var i = n(200651),
        a = n(192379),
        r = n(481060),
        l = n(434650),
        o = n(303383),
        s = n(924489),
        c = n(125909),
        d = n(824606),
        u = n(768581),
        m = n(881294),
        p = n(981631),
        h = n(388032),
        g = n(69812);
      function C(e) {
        let {
            applicationId: t,
            similarApplications: n,
            onSelectApplication: r,
            similarLoadId: o,
          } = e,
          s = (function (e) {
            let { applicationId: t, similarAppIds: n } = e,
              [i, r] = a.useState(),
              o = (0, l.O)((e) => {
                e && r(t);
              });
            return (
              a.useEffect(() => {
                i === t &&
                  (0, m.zZ)(p.rMx.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                    application_id: t,
                    suggested_application_ids: n,
                  });
              }, [i, t, n]),
              o
            );
          })({
            applicationId: t,
            similarAppIds: a.useMemo(() => n.map((e) => e.id), [n]),
          });
        return (0, i.jsx)("div", {
          className: g.contentContainer,
          ref: s,
          children: n.map((e, n) =>
            (0, i.jsx)(
              x,
              {
                applicationId: t,
                similarApplication: e,
                onSelectApplication: r,
                similarLoadId: o,
                position: n,
              },
              e.id,
            ),
          ),
        });
      }
      function x(e) {
        var t, n, l;
        let {
            applicationId: o,
            similarApplication: c,
            onSelectApplication: h,
            position: C,
            similarLoadId: x,
          } = e,
          v = (0, d.Z)({ application: c }),
          _ = null === (t = c.categories) || void 0 === t ? void 0 : t[0],
          f = a.useMemo(
            () =>
              u.ZP.getApplicationIconURL({ id: c.id, icon: c.icon, size: 48 }),
            [c],
          ),
          b = a.useCallback(() => {
            (0, m.zZ)(p.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
              current_page: "product",
              application_id: o,
              suggested_application_id: c.id,
              position: C,
              load_id: x,
              shown_mutual_guilds_count: v.length,
            }),
              h(c.id);
          }, [h, c.id, o, v.length, x, C]);
        return (0, i.jsxs)(r.Clickable, {
          onClick: b,
          className: g.appContainer,
          children: [
            (0, i.jsxs)("div", {
              className: g.appHeader,
              children: [
                (0, i.jsx)("img", {
                  src: f,
                  alt: "",
                  className: g.avatar,
                  height: 48,
                  width: 48,
                }),
                (0, i.jsxs)("div", {
                  className: g.titleContainer,
                  children: [
                    (0, i.jsx)("div", {
                      style: { flex: 1, minWidth: 0, overflow: "hidden" },
                      children: (0, i.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        className: g.appName,
                        children: c.name,
                      }),
                    }),
                    null != _
                      ? (0, i.jsx)(r.Text, {
                          className: g.appCategory,
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: _.name,
                        })
                      : null,
                  ],
                }),
              ],
            }),
            (0, i.jsx)(r.Text, {
              className: g.appDescription,
              variant: "text-sm/medium",
              color: "header-secondary",
              lineClamp: 2,
              children:
                null !==
                  (l =
                    null === (n = c.directory_entry) || void 0 === n
                      ? void 0
                      : n.short_description) && void 0 !== l
                  ? l
                  : c.description,
            }),
            (0, i.jsx)(s.Z, {
              application: c,
              textVariant: "text-xs/medium",
              mutualGuilds: v,
              mutualGuildShownMax: 3,
              guildIconSize: s.x.SMALL,
              compact: !0,
            }),
          ],
        });
      }
      t.Z = function (e) {
        let {
          applicationId: t,
          fetchState: n,
          similarApplications: a,
          onSelectApplication: l,
          similarLoadId: s,
        } = e;
        return n !== o.M.FETCHING && (null == a || 0 === a.length)
          ? null
          : (0, i.jsxs)("div", {
              className: g.sectionContainer,
              children: [
                (0, i.jsx)("div", { className: g.divider }),
                (0, i.jsx)(r.Heading, {
                  variant: "heading-sm/semibold",
                  color: "header-primary",
                  className: g.sectionHeader,
                  children: h.intl.string(h.t.E8wCnp),
                }),
                (0, i.jsx)(c.Z, {
                  loading: n === o.M.FETCHING,
                  children:
                    null != a
                      ? (0, i.jsx)(C, {
                          applicationId: t,
                          similarApplications: a,
                          onSelectApplication: l,
                          similarLoadId: s,
                        })
                      : null,
                }),
              ],
            });
      };
    },
    213746: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(789020);
      var i = n(200651),
        a = n(192379),
        r = n(793030),
        l = n(442837),
        o = n(481060),
        s = n(794295),
        c = n(765717),
        d = n(283836),
        u = n(507608),
        m = n(955335),
        p = n(171246),
        h = n(55563),
        g = n(881294),
        C = n(133743),
        x = n(979007),
        v = n(981631),
        _ = n(388032),
        f = n(272680);
      function b(e) {
        let { application: t } = e;
        return (0, i.jsxs)("div", {
          className: f.storeContainer,
          children: [
            (0, i.jsx)(I, { application: t }),
            (0, i.jsx)(j, { application: t }),
          ],
        });
      }
      function I(e) {
        let { application: t } = e,
          { subscriptions: n, otps: a } = (0, d.q)(t.id);
        return (0, i.jsxs)("div", {
          className: f.storeContainer,
          children: [
            n.length > 0 &&
              (0, i.jsxs)("div", {
                className: f.productSection,
                children: [
                  (0, i.jsx)(m.r, {
                    subscriptions: n,
                    color: "header-primary",
                  }),
                  (0, i.jsx)("div", {
                    className: f.products,
                    children: n.map((e) => {
                      let n = (0, p.KW)(e.skuFlags) ? "user" : "guild";
                      return (0, i.jsx)(
                        u.zz,
                        {
                          appId: t.id,
                          listing: e,
                          subscriptionType: n,
                          onDetails: () =>
                            (0, C.Gp)(
                              v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                                t.id,
                                e.skuId,
                              ),
                            ),
                        },
                        e.id,
                      );
                    }),
                  }),
                ],
              }),
            a.length > 0 &&
              (0, i.jsxs)("div", {
                className: f.productSection,
                children: [
                  (0, i.jsx)(r.X6, {
                    variant: "heading-lg/semibold",
                    color: "header-primary",
                    children: _.intl.string(_.t.yUGTs7),
                  }),
                  (0, i.jsx)("div", {
                    className: f.products,
                    children: a.map((e) =>
                      (0, i.jsx)(
                        u.hd,
                        {
                          skuId: e.skuId,
                          appId: t.id,
                          onDetails: () =>
                            (0, C.Gp)(
                              v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                                t.id,
                                e.skuId,
                              ),
                            ),
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
            (0, i.jsx)(c.Z, {
              path: v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                ":applicationId",
                ":skuId",
              ),
              exact: !0,
              render: (e) => (0, i.jsx)(S, { ...e }),
            }),
          ],
        });
      }
      function S(e) {
        let {
            match: {
              params: { applicationId: t, skuId: r },
            },
          } = e,
          s = (0, l.e7)([h.Z], () => h.Z.get(r), [r]),
          c = (0, l.e7)(
            [h.Z],
            () => (null != r ? h.Z.getParentSKU(r) : void 0),
            [r],
          ),
          d = a.useId(),
          u = a.useCallback(
            () =>
              (0, C.Gp)(
                v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  t,
                  x.GlobalDiscoveryAppsSections.STORE,
                ),
              ),
            [t],
          );
        return (
          a.useLayoutEffect(() => {
            var e, a, l, u, m, h, g;
            switch (null == s ? void 0 : s.type) {
              case v.epS.CONSUMABLE:
              case v.epS.DURABLE:
                return (
                  (e = d),
                  (a = t),
                  (l = r),
                  void (0, o.openModalLazy)(
                    async () => {
                      let { ItemDetailsModal: e } = await n
                        .e("69796")
                        .then(n.bind(n, 147496));
                      return (t) => (0, i.jsx)(e, { appId: a, skuId: l, ...t });
                    },
                    {
                      modalKey: e,
                      onCloseCallback: () => {
                        !N() &&
                          (0, C.Gp)(
                            v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                              a,
                              x.GlobalDiscoveryAppsSections.STORE,
                            ),
                          );
                      },
                    },
                  )
                );
              case v.epS.SUBSCRIPTION:
                if ((null == c ? void 0 : c.flags) == null) return;
                return (
                  (u = d),
                  (m = t),
                  (h = r),
                  (g = (0, p.KW)(c.flags) ? "user" : "guild"),
                  void (0, o.openModalLazy)(
                    async () => {
                      let { SubscriptionDetailsModal: e } = await Promise.all([
                        n.e("86282"),
                        n.e("23642"),
                      ]).then(n.bind(n, 519896));
                      return (t) =>
                        (0, i.jsx)(e, {
                          appId: m,
                          subscriptionType: g,
                          skuId: h,
                          guildId: void 0,
                          ...t,
                        });
                    },
                    {
                      modalKey: u,
                      onCloseCallback: () => {
                        !N() &&
                          (0, C.Gp)(
                            v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                              m,
                              x.GlobalDiscoveryAppsSections.STORE,
                            ),
                          );
                      },
                    },
                  )
                );
            }
          }, [
            t,
            d,
            u,
            null == c ? void 0 : c.flags,
            null == s ? void 0 : s.flags,
            null == s ? void 0 : s.type,
            r,
          ]),
          a.useLayoutEffect(
            () => () => {
              (0, o.closeModal)(d);
            },
            [d],
          ),
          null
        );
      }
      function j(e) {
        let { application: t } = e,
          n = (0, g.nu)(),
          a = t.terms_of_service_url,
          l = t.privacy_policy_url;
        if (null == a && null == l) return null;
        let o = (e, t) =>
          (0, i.jsx)(s.Z, { href: t, trusted: !n, children: e });
        return (0, i.jsx)("div", {
          className: f.legalContainer,
          children: (0, i.jsx)(r.xv, {
            color: "header-primary",
            variant: "text-sm/normal",
            children:
              null != a && null != l
                ? _.intl.format(_.t.nylPOT, {
                    termsHook: (e) => o(e, a),
                    privacyHook: (e) => o(e, l),
                  })
                : null != a
                  ? _.intl.format(_.t["0cPyDw"], { termsHook: (e) => o(e, a) })
                  : null != l
                    ? _.intl.format(_.t.loYGCw, { privacyHook: (e) => o(e, l) })
                    : null,
          }),
        });
      }
      function N() {
        return window.location.pathname.startsWith("/login");
      }
    },
    691703: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      }),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i = n(200651),
        a = n(192379),
        r = n(442837),
        l = n(481060),
        o = n(214912),
        s = n(703656),
        c = n(314897),
        d = n(900849),
        u = n(881294),
        m = n(981631),
        p = n(388032);
      let h = "redirect_to_support_server";
      function g(e) {
        let { application: t, className: n } = e,
          { onGoToSupportServer: g } = (function (e) {
            let t = (0, u.nu)(),
              n = (0, r.e7)([c.default], () => c.default.getSessionId()),
              i = a.useCallback(async () => {
                try {
                  var t;
                  let n =
                    null == e
                      ? void 0
                      : null === (t = e.guild) || void 0 === t
                        ? void 0
                        : t.id;
                  if (null != n) {
                    (0, u.zZ)(m.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                      application_id: e.id,
                      support_guild_id: n,
                    });
                    let t = { page: m.ZY5.APPLICATION_DIRECTORY };
                    await (0, d.Ub)(n, t, { setsHistorySnapshot: !1 });
                  }
                } catch {}
              }, [e]);
            return (
              a.useEffect(() => {
                let a = new URL(location.href);
                if (
                  null != e &&
                  t &&
                  null != n &&
                  "true" === a.searchParams.get(h)
                ) {
                  a.searchParams.delete(h);
                  let e = a.pathname + a.search;
                  (0, s.dL)(e), i();
                }
              }, [t, i, n, e]),
              {
                onGoToSupportServer: a.useCallback(() => {
                  var n;
                  null !=
                    (null == e
                      ? void 0
                      : null === (n = e.guild) || void 0 === n
                        ? void 0
                        : n.id) && (t ? i() : (0, u.rf)({ [h]: "true" }));
                }, [e, i, t]),
              }
            );
          })(t);
        return null != t.guild && t.guild.features.includes(m.oNc.DISCOVERABLE)
          ? (0, i.jsxs)("div", {
              className: n,
              children: [
                (0, i.jsx)(l.Heading, {
                  variant: "heading-sm/semibold",
                  color: "header-primary",
                  children: p.intl.string(p.t.KJEO29),
                }),
                (0, i.jsx)(o.Z, { guild: t.guild, onClick: g }),
              ],
            })
          : null;
      }
    },
    953989: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(442837),
        s = n(481060),
        c = n(706454),
        d = n(388032),
        u = n(181169);
      let m = (0, d.getAvailableLocales)();
      function p(e) {
        let { application: t, className: n } = e,
          r = (0, o.e7)([c.default], () => c.default.locale),
          { supportedLanguages: p, usersLanguageIsFirst: h } = a.useMemo(() => {
            var e;
            if (
              (null === (e = t.directory_entry) || void 0 === e
                ? void 0
                : e.supported_locales) != null
            ) {
              let e = new Set(t.directory_entry.supported_locales),
                n = e.has(r),
                i = m.filter((t) => e.has(t.value));
              return (
                n &&
                  i.sort((e, t) =>
                    e.value === r ? -1 : t.value === r ? 1 : 0,
                  ),
                {
                  supportedLanguages: i.map((e) =>
                    d.intl.string(e.localizedName),
                  ),
                  usersLanguageIsFirst: n,
                }
              );
            }
            return { supportedLanguages: [], usersLanguageIsFirst: !1 };
          }, [t.directory_entry, r]);
        return (0, i.jsxs)("div", {
          className: n,
          children: [
            (0, i.jsx)(s.Heading, {
              variant: "heading-sm/semibold",
              color: "header-primary",
              children: d.intl.string(d.t.Fbjlu7),
            }),
            (0, i.jsx)("ul", {
              className: u.outerContainer,
              children: p.map((e, t) =>
                (0, i.jsx)(
                  "li",
                  {
                    className: l()(u.innerContainer, u.languageItem),
                    children: (0, i.jsx)(s.Text, {
                      variant: 0 === t && h ? "text-sm/bold" : "text-sm/normal",
                      children: e,
                    }),
                  },
                  e,
                ),
              ),
            }),
            " ",
          ],
        });
      }
    },
    370648: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var a = n(105862),
        r = n(322665),
        l = n(17845),
        o = n(374939),
        s = n(283293),
        c = n(499692),
        d = n(388032),
        u = n(894183);
      t.Z = function (e) {
        let { onScroll: t, onSelectApplication: n } = e;
        return (0, i.jsxs)(s.Z, {
          onScroll: t,
          children: [
            (0, i.jsx)(l.Z, {
              title: d.intl.format(d.t["kEcZ9/"], {}),
              description: d.intl.string(d.t.XxFts7),
              children: (0, i.jsx)(r.Z, {}),
            }),
            (0, i.jsx)(o.Z, {
              children: (0, i.jsxs)("div", {
                className: u.contentContainer,
                children: [
                  (0, i.jsx)(c.Z, { onSelectApplication: n }),
                  (0, i.jsx)(a.Z, { showImage: !1, padding: !0 }),
                ],
              }),
            }),
          ],
        });
      };
    },
    499692: function (e, t, n) {
      n(47120);
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(535655),
        s = n(973693),
        c = n(912370),
        d = n(873199),
        u = n(442837),
        m = n(481060),
        p = n(434650),
        h = n(674588),
        g = n(368862),
        C = n(125909),
        x = n(857192),
        v = n(881294),
        _ = n(797908),
        f = n(292191),
        b = n(981631),
        I = n(318708);
      let S = s.Y.APPLICATION_DIRECTORY;
      function j(e) {
        let { collection: t, index: n, onSelectApplication: r } = e,
          o = (function (e) {
            let { collectionId: t, index: n } = e,
              [i, r] = a.useState(!1),
              l = (0, p.O)((e) => {
                e && r(!0);
              });
            return (
              a.useEffect(() => {
                i &&
                  (0, v.zZ)(b.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
                    collection_id: t,
                    collection_position: n,
                  });
              }, [i, t, n]),
              l
            );
          })({ collectionId: t.id, index: n }),
          s = a.useCallback(
            (e, i) => {
              (0, v.zZ)(b.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                collection_id: t.id,
                item_position: i,
                collection_position: n,
                application_id: e,
              }),
                r(e);
            },
            [t.id, n, r],
          );
        return (0, i.jsxs)("div", {
          ref: o,
          children: [
            (0, i.jsx)(m.Heading, {
              className: l()(I.sectionTitle, {
                [I.titleExtraPadding]: 0 === n,
              }),
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: t.title,
            }),
            (0, i.jsx)("div", {
              className: I.content,
              children: t.application_directory_collection_items.map((e, t) =>
                e.type !== c.C.APPLICATION || null == e.application
                  ? null
                  : (0, i.jsx)(
                      _.Z,
                      {
                        application: e.application,
                        onSelectApplication: () => s(e.application.id, t),
                        showCategory: !0,
                      },
                      e.id,
                    ),
              ),
            }),
          ],
        });
      }
      t.Z = function (e) {
        let { onSelectApplication: t } = e,
          n = (0, u.e7)(
            [x.default],
            () => x.default.onlyShowPreviewAppCollections,
          )
            ? o.E.PREVIEW
            : o.E.ACTIVE,
          r = (0, u.e7)([g.Z], () =>
            g.Z.getFetchState({ surface: S, activeState: n }),
          ),
          l = (0, u.e7)([g.Z], () =>
            g.Z.getCollections({ surface: S, activeState: n }),
          );
        a.useEffect(() => {
          h.XK({ surface: S, activeState: n });
        }, [n]);
        let s = a.useMemo(
          () => (null == l ? void 0 : l.filter((e) => e.type !== d.o.GALLERY)),
          [l],
        );
        return r === g.M.ERROR
          ? (0, i.jsx)("div", {
              className: I.errorContainer,
              children: (0, i.jsx)(f.Z, { className: I.error }),
            })
          : (0, i.jsx)(C.Z, {
              loading: r === g.M.FETCHING,
              children:
                null == s
                  ? void 0
                  : s.map((e, n) =>
                      (0, i.jsx)(
                        j,
                        { collection: e, index: n, onSelectApplication: t },
                        n,
                      ),
                    ),
            });
      };
    },
    120549: function (e, t, n) {
      n.d(t, {
        V: function () {
          return x;
        },
        Z: function () {
          return C;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(442837),
        s = n(481060),
        c = n(894653),
        d = n(34674),
        u = n(89182),
        m = n(706454),
        p = n(388032),
        h = n(968654);
      function g(e) {
        let { category: t, count: n, onSelectCategory: r, selected: o } = e,
          c = a.useCallback(() => {
            r(t.id);
          }, [t.id, r]),
          d = n.toLocaleString(m.default.locale);
        return (0, i.jsxs)(s.Clickable, {
          onClick: c,
          className: l()(h.category, { [h.selected]: o }),
          children: [
            (0, i.jsx)(s.Text, {
              className: h.name,
              variant: "text-sm/medium",
              color: "header-primary",
              children: t.name,
            }),
            (0, i.jsx)(s.Text, {
              className: h.count,
              variant: "text-sm/normal",
              color: "text-muted",
              children: d,
            }),
          ],
        });
      }
      function C(e) {
        let {
            countsByCategory: t,
            onSelectCategory: n,
            selectedCategoryId: r,
          } = e,
          l = (0, o.e7)([c.Z], () => c.Z.getCategories()),
          s = a.useMemo(
            () => [
              (0, d.KQ)(),
              ...l.filter((e) => {
                var n;
                return (null !== (n = t[e.id]) && void 0 !== n ? n : 0) !== 0;
              }),
            ],
            [l, t],
          );
        return 0 === s.length
          ? null
          : (0, i.jsx)("div", {
              className: h.categories,
              children: s.map((e) => {
                var a;
                let l = e.id,
                  o = null !== (a = t[l]) && void 0 !== a ? a : 0;
                return (0, i.jsx)(
                  g,
                  {
                    category: e,
                    count: o,
                    selected: l === r,
                    onSelectCategory: () => n(e),
                  },
                  l,
                );
              }),
            });
      }
      function x(e) {
        var t;
        let {
            countsByCategory: n,
            onSelectCategory: r,
            selectedCategoryId: l,
          } = e,
          m = (0, o.e7)([c.Z], () => c.Z.getCategories()),
          g = a.useMemo(
            () => [
              (0, d.KQ)(),
              ...m.filter((e) => {
                var t;
                return (null !== (t = n[e.id]) && void 0 !== t ? t : 0) !== 0;
              }),
            ],
            [m, n],
          ),
          C = a.useMemo(
            () =>
              g.map((e) => ({
                id: "".concat(e.id),
                label: (0, i.jsx)(u.iG, { count: n[e.id], name: e.name }),
              })),
            [g, n],
          ),
          x = a.useCallback(
            (e) => {
              let t = g.find((t) => t.id === Number(e));
              null != t && r(t);
            },
            [r, g],
          ),
          v = a.useMemo(() => g.find((e) => e.id === l), [l, g]);
        return 0 === C.length
          ? null
          : (0, i.jsxs)("div", {
              className: h.container,
              children: [
                (0, i.jsx)(s.Text, {
                  variant: "text-sm/medium",
                  color: "text-secondary",
                  children: p.intl.string(p.t.f09BQE),
                }),
                (0, i.jsx)(u.ZP, {
                  items: C,
                  title:
                    null !== (t = null == v ? void 0 : v.name) && void 0 !== t
                      ? t
                      : "",
                  onSelect: x,
                  selected: "".concat(l),
                  "aria-label": p.intl.string(p.t.WHdCwc),
                  variant: u.PA.FILLED,
                }),
              ],
            });
      }
    },
    753511: function (e, t, n) {
      var i = n(200651),
        a = n(192379),
        r = n(442837),
        l = n(481060),
        o = n(894653),
        s = n(34674),
        c = n(388032),
        d = n(207876),
        u = n(882008);
      t.Z = function (e) {
        let { selectedCategoryId: t, searchAllCategories: n } = e,
          m = (0, r.e7)([o.Z], () => o.Z.getCategories()),
          p = a.useMemo(() => {
            var e;
            return null === (e = m.find((e) => e.id === t)) || void 0 === e
              ? void 0
              : e.name;
          }, [m, t]),
          h =
            t === s.MU || null == p
              ? c.intl.string(c.t["FVJt+/"])
              : c.intl.formatToPlainString(c.t.FjCaND, { categoryName: p }),
          g =
            t === s.MU
              ? c.intl.string(c.t.GXiMtb)
              : c.intl.format(c.t.JaLoFB, { onClick: n });
        return (0, i.jsxs)("div", {
          className: d.container,
          children: [
            (0, i.jsx)("img", { alt: "", src: u, className: d.image }),
            (0, i.jsx)(l.Heading, {
              variant: "heading-xl/semibold",
              className: d.header,
              children: h,
            }),
            (0, i.jsx)(l.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: g,
            }),
          ],
        });
      };
    },
    569527: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return L;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i = n(200651),
        a = n(192379),
        r = n(512969),
        l = n(209173),
        o = n(288385),
        s = n(442837),
        c = n(481060),
        d = n(110924),
        u = n(674588),
        m = n(264043),
        p = n(894653),
        h = n(809547),
        g = n(34674),
        C = n(125909),
        x = n(374939),
        v = n(283293),
        _ = n(314897),
        f = n(493646),
        b = n(881294),
        I = n(797908),
        S = n(258971),
        j = n(133743),
        N = n(120549),
        E = n(753511),
        y = n(979007),
        P = n(981631),
        A = n(378105);
      function L(e) {
        var t;
        let { onSelectApplication: n, onScroll: L } = e,
          T = (0, s.e7)([_.default], () => _.default.isAuthenticated()),
          R = a.useRef(null),
          Z = (0, r.TH)(),
          O = a.useRef(null),
          {
            query: M,
            page: k,
            categoryId: D,
          } = a.useMemo(() => {
            var e, t;
            let n = new URLSearchParams(Z.search),
              i = n.get("page"),
              a = null != i ? Number(i) : 1;
            return {
              query: null !== (e = n.get("q")) && void 0 !== e ? e : "",
              page: a,
              categoryId:
                null !== (t = Number(n.get("category_id"))) && void 0 !== t
                  ? t
                  : y.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID,
            };
          }, [Z.search]),
          w = (0, s.e7)([p.Z], () => p.Z.getCategories()),
          B = a.useMemo(
            () => (null == w ? void 0 : w.find((e) => e.id === D)),
            [w, D],
          ),
          G = a.useCallback(
            (e) => {
              (0, b.zZ)(P.rMx.APP_DIRECTORY_SEARCHED, {
                search_term: M,
                num_results: e,
                current_page: S.m_.SEARCH,
                result_page: k,
                category: null == B ? void 0 : B.name,
                category_id: null == B ? void 0 : B.id,
              });
            },
            [M, k, null == B ? void 0 : B.name, null == B ? void 0 : B.id],
          );
        a.useEffect(() => {
          var e;
          null === (e = R.current) || void 0 === e || e.scrollTo({ to: 0 }),
            M !== O.current &&
              ((O.current = M),
              u.yC({ query: M, options: { source: o.F.APP_DIRECTORY } })),
            u.yC({
              query: M,
              options: {
                categoryId: D,
                page: k,
                pageSize: y.PAGE_SIZE,
                source: o.F.APP_DIRECTORY,
              },
              onSuccessCallback: G,
            });
        }, [D, k, M, G]);
        let { fetchState: U, searchResults: H } = (0, s.cj)([h.Z], () => ({
            fetchState: h.Z.getFetchState({
              query: M,
              categoryId: D,
              page: k,
              pageSize: y.PAGE_SIZE,
              source: o.F.APP_DIRECTORY,
            }),
            searchResults: h.Z.getSearchResults({
              query: M,
              categoryId: D,
              page: k,
              pageSize: y.PAGE_SIZE,
              source: o.F.APP_DIRECTORY,
            }),
          })),
          z = (0, s.cj)([h.Z], () => {
            let e = h.Z.getSearchResults({
              query: M,
              source: o.F.APP_DIRECTORY,
            });
            return null != e
              ? { [g.MU]: e.totalCount, ...e.countsByCategory }
              : {};
          }),
          V = (0, d.Z)(H),
          F = a.useMemo(() => (U === m.M.FETCHING ? V : H), [U, V, H]),
          Y = a.useCallback(
            (e) => {
              (0, j.pR)({ query: M, categoryId: D, page: e });
            },
            [D, M],
          ),
          W = a.useCallback(
            (e) => {
              (0, b.zZ)(P.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: S.m_.SEARCH,
              }),
                (0, j.pR)({ query: M, categoryId: e.id });
            },
            [M],
          ),
          X = a.useCallback(
            (e, t) => {
              (0, b.zZ)(P.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                current_page: S.m_.SEARCH,
                application_id: e,
                load_id: null == F ? void 0 : F.loadId,
                search_term: M,
                position: t,
              }),
                n(e);
            },
            [null == F ? void 0 : F.loadId, n, M],
          ),
          K = (0, f.K)();
        return (0, i.jsxs)("div", {
          className: A.container,
          children: [
            (0, i.jsx)(v.Z, {
              ref: R,
              onScroll: L,
              children: (0, i.jsxs)("div", {
                className: A.innerContainer,
                children: [
                  T
                    ? null
                    : (0, i.jsx)("div", { className: A.centeringBuffer }),
                  (0, i.jsx)(x.Z, {
                    children: (0, i.jsxs)("div", {
                      className: A.contentContainer,
                      children: [
                        (0, i.jsx)("div", {
                          className: A.topFilterContainer,
                          children: (0, i.jsx)(N.V, {
                            countsByCategory: z,
                            selectedCategoryId: D,
                            onSelectCategory: W,
                          }),
                        }),
                        (0, i.jsx)(C.Z, {
                          loading: U === m.M.FETCHING,
                          children:
                            U === m.M.FETCHED &&
                            (null == F ||
                              (null == F ? void 0 : F.results.length) === 0)
                              ? (0, i.jsx)(E.Z, {
                                  selectedCategoryId: null != D ? D : K.id,
                                  searchAllCategories: () => W(K),
                                })
                              : (0, i.jsx)("div", {
                                  className: A.content,
                                  children:
                                    null == F
                                      ? void 0
                                      : F.results.map((e, t) => {
                                          if (e.type === l.s.APPLICATION) {
                                            let n = e.data;
                                            return (0, i.jsx)(
                                              I.Z,
                                              {
                                                application: n,
                                                onSelectApplication: (e) =>
                                                  X(e, t),
                                                showCategory: !0,
                                              },
                                              n.id,
                                            );
                                          }
                                          return null;
                                        }),
                                }),
                        }),
                        (0, i.jsx)(c.Paginator, {
                          className: A.paginationInput,
                          totalCount: Math.min(
                            (null !== (t = null == F ? void 0 : F.totalPages) &&
                            void 0 !== t
                              ? t
                              : 0) * y.PAGE_SIZE,
                            y.MAX_PAGES * y.PAGE_SIZE,
                          ),
                          pageSize: y.PAGE_SIZE,
                          disablePaginationGap: !0,
                          hideMaxPage: !0,
                          currentPage: k,
                          onPageChange: Y,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, i.jsx)("div", {
              className: A.sideFilterContainer,
              children: (0, i.jsx)("div", {
                className: A.sideFilterContent,
                children: (0, i.jsx)(N.Z, {
                  countsByCategory: z,
                  selectedCategoryId: D,
                  onSelectCategory: W,
                }),
              }),
            }),
          ],
        });
      }
    },
    44488: function (e, t, n) {
      n.d(t, {
        Pz: function () {
          return g;
        },
        am: function () {
          return h;
        },
      }),
        n(47120);
      var i,
        a = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(481060),
        c = n(768762),
        d = n(723478);
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
      let m = { CENTER: d.alignCenter, LEFT: d.alignLeft };
      class p extends (i = r.PureComponent) {
        componentDidUpdate(e) {
          let { selectedIndex: t } = this.props;
          e.selectedIndex !== t && this.handleSelectedIndexChange(t);
        }
        render() {
          let {
              renderItem: e,
              items: t,
              vertical: n,
              paginationContainerClass: i,
              align: l,
            } = this.props,
            c = n
              ? d.verticalPaginationItemContainer
              : d.horizontalPaginationItemContainer;
          return (0, a.jsx)(s.AdvancedScrollerAuto, {
            orientation: n ? "vertical" : "horizontal",
            className: o()(c, i, l),
            ref: this.handleSetScrollerRef,
            children: t.map((t, n) =>
              r.cloneElement(e(t, n), {
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
      u(p, "Align", m),
        u(p, "defaultProps", {
          scrollToPadding: { top: 0, left: 0, bottom: 0, right: 0 },
          align: m.CENTER,
        });
      class h extends r.PureComponent {
        render() {
          let { className: e } = this.props;
          return (0, a.jsx)(s.Button, {
            look: s.Button.Looks.BLANK,
            size: s.Button.Sizes.NONE,
            className: o()(d.prevButtonContainer, e),
            onClick: this.handlePrevClick,
            children: (0, a.jsx)(c.Z, {
              className: d.arrow,
              direction: c.Z.Directions.LEFT,
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
      class g extends r.PureComponent {
        render() {
          let { className: e } = this.props;
          return (0, a.jsx)(s.Button, {
            look: s.Button.Looks.BLANK,
            size: s.Button.Sizes.NONE,
            className: o()(d.nextButtonContainer, e),
            onClick: this.handleNextClick,
            children: (0, a.jsx)(c.Z, {
              className: d.arrow,
              direction: c.Z.Directions.RIGHT,
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
      t.ZP = p;
    },
    519160: function (e, t, n) {
      n.d(t, {
        gN: function () {
          return g;
        },
      }),
        n(47120),
        n(411104);
      var i,
        a = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(748780),
        c = n(112724),
        d = n(72714);
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
      let m = { tension: 7, friction: 5, overshootClamping: !0 },
        p = "center",
        h = "right";
      function g(e, t) {
        return ((e % t) + t) % t;
      }
      class C extends (i = r.Component) {
        componentDidMount() {
          this.animatedIndex.setValue(this.props.currentIndex);
        }
        componentDidUpdate(e) {
          let {
              align: t,
              animate: n,
              currentIndex: i,
              items: a,
              width: r,
            } = this.props,
            l = g(i, a.length),
            o = g(e.currentIndex, a.length);
          (l !== o || a.length !== e.items.length) &&
            this.updateAnimatedIndex(l, o),
            r !== e.width
              ? this.animatedAlignmentOffset.setValue(
                  this.getAlignmentOffset(t),
                )
              : n &&
                (t !== e.align || l !== o) &&
                s.Z.spring(this.animatedAlignmentOffset, {
                  ...m,
                  toValue: this.getAlignmentOffset(t),
                }).start();
        }
        getAlignmentOffset(e) {
          let {
              width: t,
              itemSize: n,
              currentIndex: i,
              gutter: a,
              items: r,
            } = this.props,
            l = a * g(i, r.length) * 2;
          return e === p
            ? (t - n.width) / 2 + l
            : e === h
              ? t - n.width - a + l
              : a + l;
        }
        getCarouselTranslate() {
          let { itemSize: e, edgeItems: t } = this.props;
          return t * (e.width + e.margin);
        }
        animateToIndex(e, t) {
          let { animatedIndex: n } = this,
            { items: i, edgeItems: a } = this.props;
          a > 0 &&
            (0 === e && t === i.length - 1
              ? n.setValue(-1)
              : 0 === t &&
                e === i.length - 1 &&
                i.length > 2 &&
                n.setValue(i.length)),
            s.Z.spring(n, { ...m, toValue: e }).start();
        }
        updateAnimatedIndex(e, t) {
          let { animatedIndex: n, animatedOpacity: i } = this,
            { animate: a } = this.props;
          a
            ? this.animateToIndex(e, t)
            : s.Z.timing(i, { fromValue: 1, toValue: 0, duration: 100 }).start(
                () => {
                  n.setValue(e),
                    s.Z.timing(i, {
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
            className: i,
          } = this.props;
          return (0, a.jsx)("div", {
            className: o()(d.singleItemWrapper, d.viewport, i),
            children: (0, a.jsx)("div", {
              className: d.singleItem,
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
              animatedOpacity: i,
            } = this,
            {
              renderItem: r,
              items: l,
              itemSize: o,
              edgeItems: c,
              gutter: u,
            } = this.props,
            { margin: m, width: p } = o,
            h = this.getCarouselTranslate(),
            g = this.getItemStyle(),
            C = (e = c > 0 ? [...l.slice(-c), ...l, ...l.slice(0, c)] : l).map(
              (e, t) =>
                (0, a.jsx)(
                  "div",
                  {
                    style: g,
                    className: d.item,
                    children: r(e, t - c, this.interpolateValueForItem(t - c)),
                  },
                  t,
                ),
            );
          return (0, a.jsx)(s.Z.div, {
            className: d.carousel,
            style: {
              opacity: i,
              left: s.Z.add(
                t.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-h, -m - p - h - u * (l.length - 1)],
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
            : (0, a.jsx)("div", {
                className: o()({ [d.viewport]: n }, t),
                children: this.renderCarouselItems(),
              });
        }
        constructor(...e) {
          super(...e),
            u(this, "animatedIndex", new s.Z.Value(this.props.currentIndex)),
            u(
              this,
              "animatedAlignmentOffset",
              new s.Z.Value(this.getAlignmentOffset(this.props.align)),
            ),
            u(this, "animatedOpacity", new s.Z.Value(1)),
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
        align: p,
        gutter: 0,
        hideOverflow: !0,
      }),
        (t.ZP = (0, c.Z)(C));
    },
    453499: function (e, t, n) {
      n(47120);
      var i,
        a,
        r,
        l,
        o = n(200651),
        s = n(192379),
        c = n(120356),
        d = n.n(c),
        u = n(392711),
        m = n.n(u),
        p = n(846519),
        h = n(481060),
        g = n(570140),
        C = n(578361),
        x = n(768762),
        v = n(259580),
        _ = n(585483),
        f = n(981631),
        b = n(388032),
        I = n(262309);
      function S(e, t, n) {
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
      let j = { JUMP: "jump", NEXT: "next", PREVIOUS: "previous" };
      ((l = i || (i = {})).ARROW = "arrow"), (l.CARET = "caret");
      class N extends (a = s.PureComponent) {
        componentDidMount() {
          _.S.subscribe(f.CkL.CAROUSEL_PREV, this.handlePrevious),
            _.S.subscribe(f.CkL.CAROUSEL_NEXT, this.handleNext);
        }
        componentWillUnmount() {
          _.S.unsubscribe(f.CkL.CAROUSEL_PREV, this.handlePrevious),
            _.S.unsubscribe(f.CkL.CAROUSEL_NEXT, this.handleNext);
        }
        render() {
          let {
              current: e,
              count: t,
              includeHitboxPadding: n,
              arrowClassName: i,
              paginationDotClassName: a,
              paginationDotSelectedClassName: r,
              paginationArrowIconType: l = "arrow",
            } = this.props,
            s = d()(I.arrowHitbox, { [I.arrowHitboxPadding]: n }, i);
          return (0, o.jsxs)("div", {
            className: d()(I.controls, this.props.className),
            children: [
              (0, o.jsx)(h.Button, {
                look: h.Button.Looks.BLANK,
                className: s,
                onClick: this.handlePrevious,
                "aria-label": b.intl.string(b.t.vgfxaG),
                children:
                  "caret" === l
                    ? (0, o.jsx)(v.Z, {
                        className: I.arrow,
                        direction: v.Z.Directions.LEFT,
                      })
                    : (0, o.jsx)(x.Z, {
                        className: I.arrow,
                        direction: x.Z.Directions.LEFT,
                      }),
              }),
              (0, o.jsx)("div", {
                className: I.dots,
                children: m().times(t, (t) =>
                  (0, o.jsx)(
                    h.Button,
                    {
                      look: h.Button.Looks.BLANK,
                      size: h.Button.Sizes.NONE,
                      onClick: () => this.handleDotClick(t),
                      className:
                        t === e ? d()(I.dotSelected, r) : d()(I.dotNormal, a),
                      "aria-label": b.intl.formatToPlainString(b.t["2SXOrK"], {
                        pageNumber: t + 1,
                      }),
                    },
                    "dot-".concat(t),
                  ),
                ),
              }),
              (0, o.jsx)(h.Button, {
                look: h.Button.Looks.BLANK,
                className: s,
                onClick: this.handleNext,
                "aria-label": b.intl.string(b.t.XiOHRU),
                children:
                  "caret" === l
                    ? (0, o.jsx)(v.Z, {
                        className: I.arrow,
                        direction: v.Z.Directions.RIGHT,
                      })
                    : (0, o.jsx)(x.Z, {
                        className: I.arrow,
                        direction: x.Z.Directions.RIGHT,
                      }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            S(this, "handleDotClick", (e) => {
              let {
                onSetItem: t,
                onIntentionalChange: n,
                current: i,
              } = this.props;
              null == n || n(i, e, j.JUMP), t(e);
            }),
            S(this, "handleNext", () => {
              let {
                  onIntentionalChange: e,
                  current: t,
                  onChangePage: n,
                } = this.props,
                i = n(1);
              null == e || e(t, i, j.NEXT);
            }),
            S(this, "handlePrevious", () => {
              let {
                  onIntentionalChange: e,
                  current: t,
                  onChangePage: n,
                } = this.props,
                i = n(-1);
              null == e || e(t, i, j.PREVIOUS);
            });
        }
      }
      S(N, "defaultProps", { includeHitboxPadding: !0 });
      class E extends (r = s.PureComponent) {
        componentDidMount() {
          g.Z.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange),
            !this.props.initialPaused &&
              !this.state.paused &&
              this.startTimer();
        }
        componentWillUnmount() {
          this.stopTimer(),
            g.Z.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange);
        }
        componentDidUpdate(e, t) {
          let n, i, a, r;
          let l =
            ((n = this.props), (i = this.state), !n.initialPaused && !i.paused);
          let o = ((a = e), (r = t), !a.initialPaused && !r.paused);
          l && !o ? this.startTimer() : !l && o && this.stopTimer();
          let { items: s } = this.props,
            { visibleIndex: c } = this.state;
          null == s[c] && this.changeItem(s, 1);
        }
        startTimer() {
          if (null != this.props.delay)
            this.timer.start(this.props.delay, this.nextItem);
        }
        stopTimer() {
          if (null != this.props.delay) this.timer.stop();
        }
        changeItem(e, t) {
          let n = this.state.visibleIndex + t;
          n < 0 ? (n = e.length - 1) : n > e.length - 1 && (n = 0);
          let { onChangeItem: i } = this.props;
          null == i || i(e[n], this.state.visibleIndex, n);
          let a = t > 0 ? C.n.LEFT : C.n.RIGHT;
          return this.setState({ visibleIndex: n, direction: a }), n;
        }
        render() {
          let {
              items: e,
              renderItem: t,
              className: n,
              slideAnimatorClassName: i,
              slideAnimatorSpringSettings: a,
              slideAnimatorFadeInOut: r,
              paginationClassName: l,
              paginationArrowClassName: s,
              paginationArrowIconType: c,
              paginationDotClassName: u,
              paginationDotSelectedClassName: m,
              themedPagination: p,
              includeHitboxPadding: h,
              style: g,
              aspectRatio: x,
              children: v,
            } = this.props,
            { visibleIndex: _ } = this.state;
          return (0, o.jsxs)("div", {
            className: I.root,
            children: [
              (0, o.jsxs)("div", {
                className: d()(I.carouselContainer, n),
                style: g,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                children: [
                  (0, o.jsx)("div", {
                    style: { aspectRatio: x },
                    children: (0, o.jsx)(C.Z, {
                      className: d()(I.carousel, i),
                      step: _,
                      direction: this.getCurrentDirection(),
                      springSettings: a,
                      fadeInOut: r,
                      children: t(e[_], _),
                    }),
                  }),
                  e.length > 1 &&
                    (0, o.jsx)(N, {
                      className: d()(l, p ? I.themedPagination : I.pagination),
                      arrowClassName: s,
                      includeHitboxPadding: h,
                      current: _,
                      count: e.length,
                      onChangePage: (t) => this.changeItem(e, t),
                      onSetItem: this.handleSetItem,
                      onIntentionalChange: this.handleIntentionalChange,
                      paginationArrowIconType: c,
                      paginationDotClassName: u,
                      paginationDotSelectedClassName: m,
                    }),
                ],
              }),
              null != v &&
                v({ step: _, direction: this.getCurrentDirection() }),
            ],
          });
        }
        constructor(e) {
          super(e),
            S(this, "timer", new p.Xp()),
            S(this, "handleWindowFocusChange", (e) => {
              let { focused: t } = e;
              this.setState({ paused: !t });
            }),
            S(this, "getCurrentDirection", () => this.state.direction),
            S(this, "nextItem", () => {
              let { items: e } = this.props;
              this.changeItem(e, 1);
            }),
            S(this, "previousItem", () => {
              let { items: e } = this.props;
              this.changeItem(e, -1);
            }),
            S(this, "handleSetItem", (e) => {
              let { visibleIndex: t } = this.state,
                { items: n } = this.props;
              this.changeItem(n, e - t);
            }),
            S(this, "handleMouseEnter", () => {
              this.setState({ paused: !0 });
            }),
            S(this, "handleMouseLeave", () => {
              this.setState({ paused: !1 });
            }),
            S(this, "handleIntentionalChange", (e, t, n) => {
              let { items: i, onIntentionalChange: a } = this.props;
              return null == a ? void 0 : a(i[t], e, t, n);
            }),
            (this.state = {
              visibleIndex:
                !0 === e.randomize ? m().random(0, e.items.length - 1) : 0,
              direction: C.n.LEFT,
              paused: !1,
            });
        }
      }
      S(E, "defaultProps", { aspectRatio: 16 / 9 }), (t.Z = E);
    },
    341176: function (e, t, n) {
      n.d(t, {
        D: function () {
          return h;
        },
        Z: function () {
          return g;
        },
      });
      var i = n(200651),
        a = n(120356),
        r = n.n(a),
        l = n(524444),
        o = n(52824),
        s = n(956664),
        c = n(589530),
        d = n(591759),
        u = n(124347),
        m = n(80966),
        p = n(891589);
      let h = { DEFAULT: null, CONTAIN: p.contain, SCALE_DOWN: p.scaleDown };
      function g(e) {
        let {
            media: t,
            fit: n = h.DEFAULT,
            obscured: a = !1,
            onContextMenu: g,
          } = e,
          {
            width: C,
            height: x,
            url: v,
            proxyUrl: _,
            alt: f,
            type: b,
            maxWidth: I,
            maxHeight: S,
            ...j
          } = t,
          { width: N, height: E } = (0, s.zp)(
            null != C ? C : 0,
            null != x ? x : 0,
          ),
          y = (0, o.q)({ proxyURL: _, url: v }),
          P = !(null == C || 0 === C || null == x || 0 === x);
        if ("VIDEO" === b && P && null != _) {
          var A;
          let e = (function (e) {
            let t = d.Z.toURLSafe(e);
            return null == t
              ? null
              : (t.searchParams.append("format", "webp"), t.toString());
          })(_);
          if (null == e) return null;
          let n =
            null !== (A = t.renderLinkComponent) && void 0 !== A ? A : l.iT;
          return (0, i.jsx)(m.Z, {
            ...j,
            src: y,
            width: C,
            height: x,
            maxWidth: N,
            maxHeight: E,
            poster: e,
            naturalWidth: C,
            naturalHeight: x,
            volume: c.FC,
            autoMute: c.rs,
            onVolumeChange: c.jA,
            onMute: c.Zj,
            renderLinkComponent: n,
            autoPlay: !a,
            alt: f,
            onContextMenu: g,
          });
        }
        if ("IMAGE" === b)
          return P
            ? (0, i.jsx)(u.ZP, {
                ...j,
                imageClassName: r()(p.slide, n),
                src: y,
                width: C,
                height: x,
                shouldLink: !1,
                maxWidth: N,
                maxHeight: E,
                animated: !a && t.animated,
                autoPlay: !a,
                alt: f,
                zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                onContextMenu: g,
              })
            : (0, i.jsx)("img", {
                src: y,
                alt: f,
                className: r()(p.slide, n),
                onContextMenu: g,
              });
        return null;
      }
    },
    95648: function (e, t, n) {
      e.exports = {
        list: "list_a06168",
        container: "container_a06168",
        header: "header_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
      };
    },
    396587: function (e, t, n) {
      e.exports = {
        item: "item_b60f40",
        currentItem: "currentItem_b60f40",
        itemImage: "itemImage_b60f40",
        currentImage: "currentImage_b60f40 itemImage_b60f40",
        itemImageWrapper: "itemImageWrapper_b60f40",
        paginationItem: "paginationItem_b60f40",
        storePaginationImg: "storePaginationImg_b60f40",
        selectedStorePaginationItem: "selectedStorePaginationItem_b60f40",
        unselectedStorePaginationItem: "unselectedStorePaginationItem_b60f40",
        overlappingBorder: "overlappingBorder_b60f40",
        paginationVideoOverlay: "paginationVideoOverlay_b60f40",
        paginationVideoPlayPill: "paginationVideoPlayPill_b60f40",
        pagination: "pagination_b60f40",
        carouselButtonsContainer: "carouselButtonsContainer_b60f40",
        arrow: "arrow_b60f40",
        arrowHovered: "arrowHovered_b60f40",
        scroller: "scroller_b60f40",
        video: "video_b60f40",
        videoWrapper: "videoWrapper_b60f40",
        mediaPlayer: "mediaPlayer_b60f40",
      };
    },
    707337: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_b6f1f8",
        slide: "slide_b6f1f8",
        navPrev: "navPrev_b6f1f8 nav_b6f1f8",
        navNext: "navNext_b6f1f8 nav_b6f1f8",
      };
    },
    797844: function (e, t, n) {
      e.exports = {
        collapsed: "collapsed_e2ea95",
        blurb: "blurb_e2ea95",
        description: "description_e2ea95",
        toggleCollapseButton: "toggleCollapseButton_e2ea95",
        assetWrapper: "assetWrapper_e2ea95",
        asset: "asset_e2ea95",
      };
    },
    16655: function (e, t, n) {
      e.exports = {
        smallCarousel: "smallCarousel_b0360e",
        smallCarouselItem: "smallCarouselItem_b0360e",
        smallCarouselImage: "smallCarouselImage_b0360e",
        embedContainer: "embedContainer_b0360e",
        hidden: "hidden_b0360e",
        spinner: "spinner_b0360e",
        errorContainer: "errorContainer_b0360e",
        sizedToParent: "sizedToParent_b0360e",
      };
    },
    484759: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_b3d866",
        icons: "icons_b3d866",
        iconMask: "iconMask_b3d866",
        icon: "icon_b3d866",
        iconSmall: "iconSmall_b3d866",
        iconLarge: "iconLarge_b3d866",
        moreGuilds: "moreGuilds_b3d866",
        moreGuildsSmall: "moreGuildsSmall_b3d866",
        moreGuildsLarge: "moreGuildsLarge_b3d866",
        defaultIcon: "defaultIcon_b3d866",
      };
    },
    496008: function (e, t, n) {
      e.exports = {
        container: "container_da6719",
        spinnerContainer: "spinnerContainer_da6719",
        spinner: "spinner_da6719",
        loading: "loading_da6719",
      };
    },
    892528: function (e, t, n) {
      e.exports = {
        card: "card_b5d566",
        cardHeader: "cardHeader_b5d566",
        splashImage: "splashImage_b5d566",
        guildIcon: "guildIcon_b5d566",
        iconMask: "iconMask_b5d566",
        cardDetails: "cardDetails_b5d566",
        guildNameWrapper: "guildNameWrapper_b5d566",
        guildBadge: "guildBadge_b5d566",
        guildName: "guildName_b5d566",
        guildDescription: "guildDescription_b5d566",
        memberInfo: "memberInfo_b5d566",
        memberCountWrapper: "memberCountWrapper_b5d566",
        memberCountIcon: "memberCountIcon_b5d566",
      };
    },
    941221: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_bfa0f5",
        productsContainer: "productsContainer_bfa0f5",
        productSection: "productSection_bfa0f5",
        subscriptionCardSubtext: "subscriptionCardSubtext_bfa0f5",
      };
    },
    755522: function (e, t, n) {
      e.exports = { heading: "heading_fcab0f" };
    },
    358459: function (e, t, n) {
      e.exports = {
        container: "container_b97772",
        content: "content_b97772",
        textContainer: "textContainer_b97772",
        buttonContainer: "buttonContainer_b97772",
        title: "title_b97772",
        uppercase: "uppercase_b97772",
        description: "description_b97772",
        gradient: "gradient_b97772",
        clientThemes: "clientThemes_b97772",
        gradientOverlay: "gradientOverlay_b97772",
        gradientBackground: "gradientBackground_b97772",
      };
    },
    278741: function (e, t, n) {
      e.exports = {
        contentSection: "contentSection_a56260",
        content: "content_a56260",
      };
    },
    578451: function (e, t, n) {
      e.exports = {
        firstChildSpacingFix: "firstChildSpacingFix_d2d101",
        tabItem: "tabItem_d2d101",
      };
    },
    406014: function (e, t, n) {
      e.exports = {
        headerBar: "headerBar_accde0",
        overlay: "overlay_accde0",
        relative: "relative_accde0",
        backdrop: "backdrop_accde0",
        icon: "icon_accde0",
        iconButton: "iconButton_accde0",
        floatingSearchTabsMask: "floatingSearchTabsMask_accde0",
      };
    },
    333078: function (e, t, n) {
      e.exports = {
        container: "container_a853ca",
        measurements: "measurements_a853ca",
        tabs: "tabs_a853ca",
        tab: "tab_a853ca",
        more: "more_a853ca",
        selected: "selected_a853ca",
      };
    },
    789560: function (e, t, n) {
      e.exports = { scroller: "scroller_b91a2d" };
    },
    149025: function (e, t, n) {
      e.exports = {
        searchBar: "searchBar_e06425 search_e06425",
        searchIcon: "searchIcon_e06425 search_e06425",
        searchFloating: "searchFloating_e06425",
      };
    },
    600419: function (e, t, n) {
      e.exports = {
        filter: "filter_e4088d",
        filterBackground: "filterBackground_e4088d",
        menu: "menu_e4088d",
        categoryLabel: "categoryLabel_e4088d",
      };
    },
    704839: function (e, t, n) {
      e.exports = {
        card: "card_e32e6f",
        clickable: "clickable_e32e6f",
        disabled: "disabled_e32e6f",
        cardPlaceholder: "cardPlaceholder_e32e6f card_e32e6f",
        transitionItem: "transitionItem_e32e6f",
      };
    },
    544973: function (e, t, n) {
      e.exports = {
        outerContainer: "outerContainer_d862e5",
        loggedOutContainer: "loggedOutContainer_d862e5",
        innerContainer: "innerContainer_d862e5",
        detailHeaderContainer: "detailHeaderContainer_d862e5",
        detailHeaderSection: "detailHeaderSection_d862e5",
        detailHeaderButtonsContainer: "detailHeaderButtonsContainer_d862e5",
        hidden: "hidden_d862e5",
        hide: "hide_d862e5",
        visible: "visible_d862e5",
        detailHeader: "detailHeader_d862e5",
        searchHeader: "searchHeader_d862e5",
        nagbar: "nagbar_d862e5",
        nagbarActionContainer: "nagbarActionContainer_d862e5",
        logo: "logo_d862e5",
      };
    },
    226944: function (e, t, n) {
      e.exports = {
        bannerContainer: "bannerContainer_ea6128",
        bannerContent: "bannerContent_ea6128",
        bannerGradient: "bannerGradient_ea6128",
        loaded: "loaded_ea6128",
        bannerImage: "bannerImage_ea6128",
        bannerAnimatedContainer: "bannerAnimatedContainer_ea6128",
        videoFadeIn: "videoFadeIn_ea6128",
        videoFadeOut: "videoFadeOut_ea6128",
      };
    },
    833643: function (e, t, n) {
      e.exports = {
        container: "container_f2758d",
        card: "card_f2758d",
        avatar: "avatar_f2758d",
        header: "header_f2758d",
        avatarContainer: "avatarContainer_f2758d",
        appDetails: "appDetails_f2758d",
        titleContainer: "titleContainer_f2758d",
        title: "title_f2758d",
        infoContainer: "infoContainer_f2758d",
        appName: "appName_f2758d",
        appCategory: "appCategory_f2758d",
        description: "description_f2758d",
      };
    },
    928261: function (e, t, n) {
      e.exports = {
        container: "container_f47946",
        imageContainer: "imageContainer_f47946",
        image: "image_f47946",
        header: "header_f47946",
      };
    },
    863375: function (e, t, n) {
      e.exports = {
        errorContainer: "errorContainer_dff12c",
        error: "error_dff12c",
      };
    },
    76413: function (e, t, n) {
      e.exports = {
        content: "content_c657e4",
        errorContainer: "errorContainer_c657e4",
        error: "error_c657e4",
        paginationInput: "paginationInput_c657e4",
      };
    },
    890030: function (e, t, n) {
      e.exports = {
        detailContainer: "detailContainer_dc60cd",
        contentContainer: "contentContainer_dc60cd",
        contentTabsContainer: "contentTabsContainer_dc60cd",
        contentTabs: "contentTabs_dc60cd",
        centerContainer: "centerContainer_dc60cd",
        error: "error_dc60cd",
        sidebar: "sidebar_dc60cd",
      };
    },
    609396: function (e, t, n) {
      e.exports = {
        aboutContainer: "aboutContainer_d0b14a",
        divider: "divider_d0b14a",
        informationContainer: "informationContainer_d0b14a",
      };
    },
    914045: function (e, t, n) {
      e.exports = {
        actionContainer: "actionContainer_bf142c",
        iconButton: "iconButton_bf142c",
        small: "small_bf142c",
        innerIconButton: "innerIconButton_bf142c",
        wide: "wide_bf142c",
        tiny: "tiny_bf142c",
      };
    },
    520432: function (e, t, n) {
      e.exports = {
        errorImage: "errorImage_d90cba",
        carousel: "carousel_d90cba",
      };
    },
    190778: function (e, t, n) {
      e.exports = {
        categories: "categories_edecf1",
        category: "category_edecf1",
      };
    },
    765853: function (e, t, n) {
      e.exports = {
        sectionContainer: "sectionContainer_a7f862",
        contentContainer: "contentContainer_a7f862",
        commandContainer: "commandContainer_a7f862",
        commandName: "commandName_a7f862",
      };
    },
    349778: function (e, t, n) {
      e.exports = {
        sectionContainer: "sectionContainer_ab98a8",
        contentContainer: "contentContainer_ab98a8",
        privacyPolicy: "privacyPolicy_ab98a8",
        intentsList: "intentsList_ab98a8",
        intentContainer: "intentContainer_ab98a8",
        intentTextContainer: "intentTextContainer_ab98a8",
      };
    },
    137762: function (e, t, n) {
      e.exports = {
        avatarContainer: "avatarContainer_e55bd2",
        avatar: "avatar_e55bd2",
        infoContainer: "infoContainer_e55bd2",
        metadataContainer: "metadataContainer_e55bd2",
        disclosuresContainer: "disclosuresContainer_e55bd2",
        disclosuresText: "disclosuresText_e55bd2",
      };
    },
    75655: function (e, t, n) {
      e.exports = {
        sideContainer: "sideContainer_b7edb7",
        gridContainer: "gridContainer_b7edb7",
        guildCountContainer: "guildCountContainer_b7edb7",
        guildsIconContainer: "guildsIconContainer_b7edb7",
        sectionContainer: "sectionContainer_b7edb7",
        reducedGap: "reducedGap_b7edb7",
        infoSection: "infoSection_b7edb7",
        linkGrid: "linkGrid_b7edb7",
      };
    },
    140577: function (e, t, n) {
      e.exports = {
        container: "container_ab2e08",
        list: "list_ab2e08",
        listItem: "listItem_ab2e08",
        linkItem: "linkItem_ab2e08",
        listIcon: "listIcon_ab2e08",
        listText: "listText_ab2e08",
        listImage: "listImage_ab2e08",
      };
    },
    285136: function (e, t, n) {
      e.exports = {
        overviewContainer: "overviewContainer_b6e1a1",
        descriptionClamp: "descriptionClamp_b6e1a1",
        descriptionClampSafari: "descriptionClampSafari_b6e1a1",
        detailedDescription: "detailedDescription_b6e1a1",
        showMoreButton: "showMoreButton_b6e1a1",
        showMoreContent: "showMoreContent_b6e1a1",
        showMoreButtonIcon: "showMoreButtonIcon_b6e1a1",
        divider: "divider_b6e1a1",
      };
    },
    878744: function (e, t, n) {
      e.exports = {
        sectionContainer: "sectionContainer_d51bcd",
        contentContainer: "contentContainer_d51bcd",
      };
    },
    69812: function (e, t, n) {
      e.exports = {
        sectionContainer: "sectionContainer_a211ab",
        divider: "divider_a211ab",
        sectionHeader: "sectionHeader_a211ab",
        contentContainer: "contentContainer_a211ab",
        appContainer: "appContainer_a211ab",
        appHeader: "appHeader_a211ab",
        avatar: "avatar_a211ab",
        titleContainer: "titleContainer_a211ab",
        appName: "appName_a211ab",
        appCategory: "appCategory_a211ab",
        appDescription: "appDescription_a211ab",
      };
    },
    272680: function (e, t, n) {
      e.exports = {
        storeContainer: "storeContainer_a41aee",
        productSection: "productSection_a41aee",
        products: "products_a41aee",
        legalContainer: "legalContainer_a41aee",
      };
    },
    181169: function (e, t, n) {
      e.exports = {
        outerContainer: "outerContainer_e2a33b",
        innerContainer: "innerContainer_e2a33b",
        languageItem: "languageItem_e2a33b",
      };
    },
    894183: function (e, t, n) {
      e.exports = { contentContainer: "contentContainer_bec863" };
    },
    318708: function (e, t, n) {
      e.exports = {
        sectionTitle: "sectionTitle_b1e578",
        titleExtraPadding: "titleExtraPadding_b1e578",
        content: "content_b1e578",
        errorContainer: "errorContainer_b1e578",
        error: "error_b1e578",
      };
    },
    968654: function (e, t, n) {
      e.exports = {
        categories: "categories_acddb7",
        category: "category_acddb7",
        name: "name_acddb7",
        count: "count_acddb7",
        selected: "selected_acddb7",
        container: "container_acddb7",
      };
    },
    207876: function (e, t, n) {
      e.exports = {
        container: "container_e848c7",
        image: "image_e848c7",
        header: "header_e848c7",
      };
    },
    378105: function (e, t, n) {
      e.exports = {
        container: "container_e9dbfa",
        innerContainer: "innerContainer_e9dbfa",
        centeringBuffer: "centeringBuffer_e9dbfa",
        contentContainer: "contentContainer_e9dbfa",
        content: "content_e9dbfa",
        paginationInput: "paginationInput_e9dbfa",
        topFilterContainer: "topFilterContainer_e9dbfa",
        sideFilterContainer: "sideFilterContainer_e9dbfa",
        sideFilterContent: "sideFilterContent_e9dbfa",
      };
    },
    723478: function (e, t, n) {
      e.exports = {
        alignCenter: "alignCenter_ad2a08",
        alignLeft: "alignLeft_ad2a08",
        horizontalPaginationItemContainer:
          "horizontalPaginationItemContainer_ad2a08",
        verticalPaginationItemContainer:
          "verticalPaginationItemContainer_ad2a08 alignLeft_ad2a08",
        arrow: "arrow_ad2a08",
        prevButtonContainer: "prevButtonContainer_ad2a08 arrowContainer_ad2a08",
        nextButtonContainer: "nextButtonContainer_ad2a08 arrowContainer_ad2a08",
      };
    },
    72714: function (e, t, n) {
      e.exports = {
        singleItemWrapper: "singleItemWrapper_e3183f",
        carousel: "carousel_e3183f",
        item: "item_e3183f",
        singleItem: "singleItem_e3183f item_e3183f",
        viewport: "viewport_e3183f",
      };
    },
    262309: function (e, t, n) {
      e.exports = {
        root: "root_db3abe",
        carouselContainer: "carouselContainer_db3abe",
        carousel: "carousel_db3abe",
        pagination: "pagination_db3abe",
        themedPagination: "themedPagination_db3abe pagination_db3abe",
        controls: "controls_db3abe",
        arrowHitbox: "arrowHitbox_db3abe",
        arrow: "arrow_db3abe",
        arrowHitboxPadding: "arrowHitboxPadding_db3abe",
        dots: "dots_db3abe",
        dotNormal: "dotNormal_db3abe dot_db3abe",
        dotSelected: "dotSelected_db3abe dot_db3abe",
      };
    },
    891589: function (e, t, n) {
      e.exports = {
        slide: "slide_f97a12",
        scaleDown: "scaleDown_f97a12",
        contain: "contain_f97a12",
      };
    },
    422235: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    134992: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_a8220a",
        cardHeaderImg: "cardHeaderImg_a8220a",
        details: "details_a8220a",
        description: "description_a8220a",
        footer: "footer_a8220a",
      };
    },
  },
]);
//# sourceMappingURL=a71a05ca640335a39b3a.js.map
