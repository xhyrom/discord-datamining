"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["75365"],
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
        h = n(481060),
        u = n(112724),
        d = n(446411),
        c = n(468846),
        p = n(679056),
        m = n(44488),
        g = n(519160),
        I = n(124347),
        C = n(283756),
        x = n(524444),
        f = n(585483),
        v = n(981631),
        E = n(161243);
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
        O = (e) => (0, i.jsx)(I.ZP, { ...e }),
        M = (e) => {
          let t,
            n,
            s,
            {
              item: a,
              size: r,
              onPlay: l,
              onEnded: o,
              onClick: u,
              playable: p,
              volume: m,
              isMuted: g,
              onVolumeChange: I,
              onMute: C,
            } = e;
          if (a.type === v.s9s.YOUTUBE_VIDEO)
            (t = { url: (0, v.n8r)(a.youtubeVideoId), ...S }),
              (n = {
                url: ""
                  .concat((0, v.ivE)(a.youtubeVideoId), "?")
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
          let f = (0, i.jsx)(d.BC, {
            href: null,
            thumbnail: t,
            video: n,
            provider: s,
            allowFullScreen: !0,
            maxHeight: r.height,
            maxWidth: r.width,
            onPlay: l,
            onEnded: o,
            playable: p,
            className: E.video,
            volume: m,
            onVolumeChange: I,
            autoMute: g,
            onMute: C,
            autoPlay: p,
            renderVideoComponent: y,
            renderImageComponent: O,
            renderLinkComponent: x.iT,
          });
          return p
            ? f
            : (0, i.jsx)(h.Clickable, {
                className: E.itemImageWrapper,
                onClick: u,
                children: f,
              });
        },
        T = () =>
          (0, i.jsx)("div", {
            className: E.paginationVideoOverlay,
            children: (0, i.jsx)(C.Z, {
              inactive: !0,
              className: E.paginationVideoPlayPill,
              renderLinkComponent: x.iT,
            }),
          });
      class j extends (s = a.PureComponent) {
        componentDidMount() {
          f.S.subscribe(v.CkL.CAROUSEL_PREV, this.manualPrevious),
            f.S.subscribe(v.CkL.CAROUSEL_NEXT, this.manualNext);
        }
        componentWillUnmount() {
          f.S.unsubscribe(v.CkL.CAROUSEL_PREV, this.manualPrevious),
            f.S.unsubscribe(v.CkL.CAROUSEL_NEXT, this.manualNext);
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
                  (0, i.jsx)(m.am, {
                    onClick: this.manualPrevious,
                    className: l()(E.arrow, { [E.arrowHovered]: s }),
                  }),
                  (0, i.jsx)(m.Pz, {
                    onClick: this.manualNext,
                    className: l()(E.arrow, { [E.arrowHovered]: a }),
                  }),
                ],
              });
        }
        getPaginationSrc(e) {
          return e.type === v.s9s.YOUTUBE_VIDEO
            ? (0, v.n8r)(e.youtubeVideoId)
            : e.type === v.s9s.IMG
              ? e.src
              : e.type === v.s9s.VIDEO
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
          return (0, i.jsxs)(p.Z, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: n,
            className: t,
            disable: r || l || s,
            children: [
              this.renderCarousel(),
              (0, i.jsx)("div", {
                className: E.pagination,
                children: (0, i.jsx)(m.ZP, {
                  renderItem: this.renderPaginationItem,
                  scrollToPadding: 85,
                  items: e,
                  selectedIndex: a,
                  onSetItem: (e) => this.setItem(e, !0),
                  paginationContainerClass: E.scroller,
                  align: e.length < 6 ? m.ZP.Align.LEFT : m.ZP.Align.CENTER,
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
                ? (0, i.jsx)(h.Clickable, {
                    onClick: () => this.handleCurrentItemClick(e, t),
                    className: E.itemImageWrapper,
                    children: (0, i.jsx)("img", {
                      src: e.src,
                      alt: "",
                      className: E.currentImage,
                    }),
                  })
                : (0, i.jsx)(h.Clickable, {
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
                h = t === (0, g.gN)(s, this.props.items.length);
              return (0, i.jsx)(o.Z.div, {
                className: l()(E.item, { [E.currentItem]: h }),
                style: null != n ? this.getStyle(t, n) : null,
                onMouseEnter: h ? null : () => this.handleEdgeItemMouseEnter(t),
                onMouseLeave: h ? null : this.handleEdgeItemMouseLeave,
                children:
                  e.type === v.s9s.VIDEO || e.type === v.s9s.YOUTUBE_VIDEO
                    ? (0, i.jsx)(M, {
                        item: e,
                        size: this.getItemSize(),
                        onPlay: this.handlePlay,
                        onEnded: this.handleEnded,
                        playable: h,
                        onClick: () => this.handleVideoClick(t),
                        volume: a,
                        onVolumeChange: this.handleVolumeChange,
                        isMuted: r,
                        onMute: this.handleMute,
                      })
                    : this.renderCarouselImage(e, t, h),
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
                    e.type === v.s9s.YOUTUBE_VIDEO || e.type === v.s9s.VIDEO
                      ? (0, i.jsx)(T, {})
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
      N(j, "defaultProps", { autoplayInterval: 8e3, paused: !1 }),
        (t.Z = (0, u.Z)(j));
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
        h = n.n(o),
        u = n(748780),
        d = n(215569),
        c = n(376641),
        p = n(714338),
        m = n(134432),
        g = n(44488),
        I = n(585483),
        C = n(981631),
        x = n(31185);
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
      let v = { friction: 10, tension: 100 };
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
            u.Z.parallel([
              u.Z.timing(s, {
                toValue: 1,
                easing: u.Z.Easing.out(u.Z.Easing.linear),
                duration: 200,
              }),
              u.Z.spring(n, { toValue: 0, ...v }),
            ]).start();
        }
        componentWillLeave(e) {
          let { directionHistory: t } = this.props,
            { opacity: n, translate: s } = this.state;
          u.Z.parallel([
            u.Z.timing(n, {
              toValue: 0,
              easing: u.Z.Easing.in(u.Z.Easing.linear),
              duration: 200,
            }),
            u.Z.spring(s, { toValue: -1 * t[t.length - 1], ...v }),
          ]).start(e);
        }
        getStyle() {
          let { translate: e, opacity: t } = this.state;
          return u.Z.accelerate({
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
          return (0, i.jsx)(u.Z.img, {
            src: e.src,
            alt: "",
            className: l()(x.slide, t),
            style: this.getStyle(),
          });
        }
        constructor(...e) {
          super(...e),
            f(this, "state", {
              translate: new u.Z.Value(0),
              opacity: new u.Z.Value(1),
            });
        }
      }
      class b extends (s = a.Component) {
        componentDidMount() {
          this.preloadNextImages(),
            p.Z.disable(),
            p.Z.enableTemp(c.P),
            I.S.subscribe(C.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
            I.S.subscribe(C.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
        }
        componentWillUnmount() {
          p.Z.disableTemp(),
            I.S.unsubscribe(C.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
            I.S.unsubscribe(C.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
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
          (0, m.po)(e.src);
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
          return (0, i.jsxs)(d.W, {
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
            f(this, "gotoNext", () => {
              let { currentIndex: e } = this.state;
              this.navigateTo(e + 1);
            }),
            f(this, "gotoPrev", () => {
              let { currentIndex: e } = this.state;
              this.navigateTo(e - 1);
            }),
            f(this, "gotoNextThrottled", h()(this.gotoNext, 300)),
            f(this, "gotoPrevThrottled", h()(this.gotoPrev, 300)),
            (this.state = { currentIndex: e.startWith, directionHistory: [] });
        }
      }
      f(b, "defaultProps", { startWith: 0 });
    },
    15470: function (e, t, n) {
      n.d(t, {
        i: function () {
          return C;
        },
      }),
        n(47120);
      var s = n(200651),
        i = n(192379),
        a = n(120356),
        r = n.n(a),
        l = n(302454),
        o = n.n(l),
        h = n(481060),
        u = n(770146),
        d = n(241209),
        c = n(73346),
        p = n(689938),
        m = n(499142);
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
      let I = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
        C = {
          ...d.Z.rules,
          heading: {
            ...d.Z.rules.heading,
            react(e, t, n) {
              let i = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
              return (0, s.jsx)(
                u.Z,
                { tag: i, children: t(e.content, n) },
                n.key,
              );
            },
          },
          assetImage: {
            order: 5,
            match(e, t) {
              let n = e.match(I);
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
                  className: m.assetWrapper,
                  children: (0, s.jsx)("img", {
                    alt: e.alt,
                    src: (0, c._W)(e.applicationId, e.asset, 800),
                    className: m.asset,
                  }),
                },
                n.key,
              ),
          },
        },
        x = o().parserFor(C),
        f = o().reactFor(o().ruleOutput(C, "react"));
      class v extends i.PureComponent {
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
                className: r()({ [m.collapsed]: o && l }),
                children: (0, s.jsxs)("div", {
                  ref: this.setContentContainerRef,
                  children: [
                    (0, s.jsx)("div", { className: m.blurb, children: n }),
                    (0, s.jsx)(d.Z, {
                      className: m.description,
                      parser: x,
                      output: f,
                      state: { assets: a, applicationId: e },
                      children: t,
                    }),
                  ],
                }),
              }),
              o
                ? (0, s.jsx)(h.Button, {
                    className: m.toggleCollapseButton,
                    onClick: this.handleToggleCollapse,
                    color: h.Button.Colors.PRIMARY,
                    children: l
                      ? p.Z.Messages.APPLICATION_STORE_DESCRIPTION_READ_MORE
                      : p.Z.Messages.APPLICATION_STORE_DESCRIPTION_READ_LESS,
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
      t.Z = v;
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
        h = n(843445),
        u = n(981631),
        d = n(689938);
      function c(e) {
        return "".concat(e.split("?")[0], "?size=").concat(2048);
      }
      let p = (e) => {
        let { index: t, items: n, ...i } = e,
          a = n[t],
          r = 0,
          o = [];
        for (let e of n)
          if (e.type === u.s9s.IMG) {
            let { width: t, height: n, src: s } = e;
            e === a && (r = o.length),
              o.push({ src: c(s), width: t, height: n });
          }
        return (0, s.jsx)(l.Z, { ...i, items: o, startWith: r });
      };
      class m extends i.Component {
        render() {
          let { pageSize: e, ...t } = this.props,
            n = e === h.b.SMALL ? o.Z : r.Z;
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
              e.type === u.s9s.IMG &&
                !(0, a.hasAnyModalOpen)() &&
                (0, a.openModal)((e) =>
                  (0, s.jsx)(a.ModalRoot, {
                    size: a.ModalSize.DYNAMIC,
                    "aria-label": d.Z.Messages.IMAGE,
                    ...e,
                    children: (0, s.jsx)(p, {
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
      t.Z = m;
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
        h = n(33122),
        u = n(446411),
        d = n(468846),
        c = n(453499),
        p = n(124347),
        m = n(80966),
        g = n(524444),
        I = n(843445),
        C = n(981631),
        x = n(689938),
        f = n(310436);
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
      let E = (e) => {
          let { className: t, ...n } = e;
          return (0, i.jsx)(m.Z, {
            ...n,
            className: l()(f.sizedToParent, t),
            mediaPlayerClassName: f.sizedToParent,
            renderLinkComponent: g.iT,
          });
        },
        N = (e) => {
          let { containerClassName: t, className: n, ...s } = e;
          return (0, i.jsx)(p.ZP, { ...s, className: l()(n, t) });
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
              isMuted: p,
              autoPlay: m,
            } = e;
          if (a.type === C.s9s.YOUTUBE_VIDEO)
            (t = { url: (0, C.n8r)(a.youtubeVideoId), ...b }),
              (n = {
                url: ""
                  .concat((0, C.ivE)(a.youtubeVideoId), "?")
                  .concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                ...P,
              }),
              (s = d.pn.YOUTUBE);
          else {
            let e = null != a.width ? a.width : 0,
              s = null != a.height ? a.height : 0;
            (t = { url: a.thumbnailSrc, width: e, height: s }),
              (n = { url: a.src, proxyURL: a.src, width: e, height: s });
          }
          return (0, i.jsx)("div", {
            className: f.embedContainer,
            children: (0, i.jsx)(u.BC, {
              className: f.sizedToParent,
              iframeWrapperClassName: f.sizedToParent,
              href: null,
              thumbnail: t,
              video: n,
              provider: s,
              maxHeight: h.r.SMALL.height,
              maxWidth: I.b.SMALL,
              onPlay: r,
              playable: !0,
              volume: l,
              onVolumeChange: o,
              autoMute: p,
              onMute: c,
              autoPlay: m,
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
            e[0].type === C.s9s.IMG &&
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
            className: l()(f.smallCarousel, n),
            themedPagination: a,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
          });
        }
        constructor(...e) {
          super(...e),
            v(this, "state", {
              hasInteracted: !1,
              isVideoPlaying: !1,
              isMuted: !0,
              volume: 1,
              status: new Map(),
              imageLoadingStartTime: new Map(),
            }),
            v(this, "handlePlay", (e) => {
              this.setState({ isVideoPlaying: !0, hasInteracted: !e });
            }),
            v(this, "handleVolumeChange", (e) => {
              this.setState({ volume: e, hasInteracted: !0 });
            }),
            v(this, "handleMute", (e) => {
              this.setState({ isMuted: e, hasInteracted: !0 });
            }),
            v(this, "handleChangeItem", (e) => {
              this.setState({ isVideoPlaying: !1 }),
                e.type === C.s9s.IMG &&
                  this.setState({
                    imageLoadingStartTime: new Map(
                      this.state.imageLoadingStartTime,
                    ).set(e.src, Date.now()),
                  });
            }),
            v(this, "handleIntentionalChange", (e, t, n, s) => {
              this.setState({ hasInteracted: !0 });
              let { onIntentionalChange: i } = this.props;
              null != i && i(e, t, n, s);
            }),
            v(this, "handleOnErrorImg", (e) => {
              this.setState({
                status: new Map(this.state.status).set(e.target.src, "errored"),
              });
            }),
            v(this, "handleOnLoadImg", (e) => {
              let { onImageLoad: t } = this.props;
              this.setState({
                status: new Map(this.state.status).set(e.target.src, "loaded"),
              });
              let n = this.state.imageLoadingStartTime.get(e.target.src),
                s = null != n ? Date.now() - n : void 0;
              null == t || t({ src: e.target.src, loadTimeMs: s });
            }),
            v(this, "renderItem", (e, t) => {
              let n;
              let { isMuted: s, volume: a } = this.state,
                { videoAutoPlay: r } = this.props;
              switch (e.type) {
                case C.s9s.YOUTUBE_VIDEO:
                case C.s9s.VIDEO:
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
                case C.s9s.IMG:
                  if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, i.jsx)(o.Heading, {
                      variant: "heading-xl/semibold",
                      children: x.Z.Messages.ERRORS_IMAGE_NOT_FOUND,
                    });
                    return (0, i.jsx)("div", {
                      className: f.errorContainer,
                      children:
                        void 0 !== this.props.errorComponent
                          ? this.props.errorComponent
                          : e,
                    });
                  }
                  {
                    var h;
                    let t =
                      null !== (h = e.alt) && void 0 !== h
                        ? h
                        : x.Z.Messages.IMAGE;
                    n = (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(o.Spinner, {
                          className: l()(f.spinner, {
                            [f.hidden]: void 0 !== this.state.status.get(e.src),
                          }),
                          type: o.Spinner.Type.SPINNING_CIRCLE,
                        }),
                        (0, i.jsx)("img", {
                          onError: this.handleOnErrorImg,
                          onLoad: this.handleOnLoadImg,
                          className: l()(f.smallCarouselImage, {
                            [f.hidden]:
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
                className: f.smallCarouselItem,
                onClick: () => this.handleCurrentItemClick(e, t),
                children: n,
              });
            });
        }
      }
      v(L, "defaultProps", { paused: !1, videoAutoPlay: !0 }), (t.Z = L);
    },
    817718: function (e, t, n) {
      n.d(t, {
        U3: function () {
          return c;
        },
        XM: function () {
          return u;
        },
        hd: function () {
          return h;
        },
        lI: function () {
          return o;
        },
        py: function () {
          return d;
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
        h = {
          binds: ["left"],
          comboKeysBindGlobal: !0,
          action() {
            if (!l()) return a.S.dispatch(r.CkL.CAROUSEL_PREV), !1;
          },
        },
        u = {
          binds: ["right", "down", "space"],
          comboKeysBindGlobal: !0,
          action: () => (a.S.dispatch(r.CkL.MODAL_CAROUSEL_NEXT), !1),
        },
        d = {
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
      });
      var s = n(817718),
        i = n(981631);
      let a = {
        [i.EkH.MODAL_CAROUSEL_NEXT]: s.XM,
        [i.EkH.MODAL_CAROUSEL_PREV]: s.py,
        [i.EkH.CLOSE_MODAL]: s.U3,
      };
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
    939893: function (e, t, n) {
      var s = n(200651);
      n(192379);
      var i = n(302454),
        a = n.n(i),
        r = n(481060),
        l = n(447543),
        o = n(15470),
        h = n(960904),
        u = n(830121),
        d = n(746878),
        c = n(241209);
      let p = /^discord.gg\/[a-zA-Z0-9-]+/,
        m = {
          ...c.Z.rules,
          heading: { ...o.i.heading },
          image: { ...a().defaultRules.image },
          inviteLink: {
            order: c.Z.rules.link.order + 1,
            match: (e, t) => (t.inline ? p.exec(e) : null),
            parse: (e, t, n) => {
              let s = (0, u.zO)(e[0]);
              return null == s || s.type !== h.g.INVITE
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
                  children: (0, d.S)(e, t, n),
                },
                n.key,
              ),
          },
        };
      t.Z = m;
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
    770146: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = n(200651);
      n(192379);
      var i = n(120356),
        a = n.n(i),
        r = n(353947);
      function l(e) {
        let { children: t, tag: n, className: i } = e;
        return (
          (n = null != n ? n : "h3"),
          (0, s.jsx)(n, { className: a()(r.title, i), children: t })
        );
      }
    },
    241209: function (e, t, n) {
      var s,
        i,
        a = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        h = n(302454),
        u = n.n(h),
        d = n(663993),
        c = n(770146),
        p = n(772096),
        m = n(428595),
        g = n(532901),
        I = n(207533),
        C = n(112864);
      function x(e, t, n) {
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
      let f = new RegExp(
        "https?://".concat(
          null !== (s = window.GLOBAL_ENV.CDN_HOST) && void 0 !== s ? s : "",
        ),
      );
      function v(e) {
        return "string" == typeof e.content ? e.content : b(e.content);
      }
      let E = {
          ...u().defaultRules,
          heading: {
            ...u().defaultRules.heading,
            react(e, t, n) {
              let s = "h".concat(e.level);
              return (0, a.jsx)(
                c.Z,
                { tag: s, children: t(e.content, n) },
                n.key,
              );
            },
          },
          paragraph: {
            ...u().defaultRules.paragraph,
            react: (e, t, n) =>
              (0, a.jsx)(
                "div",
                { className: I.paragraph, children: t(e.content, n) },
                n.key,
              ),
          },
          strong: { ...u().defaultRules.strong, order: 6 },
          em: { ...u().defaultRules.em, order: 6 },
          u: { ...u().defaultRules.u, order: 5 },
          del: { ...u().defaultRules.del, order: 6 },
          link: {
            ...p.ZP,
            ...(0, g.Z)({ enableBuildOverrides: !1 }),
            order: 6,
          },
          blockQuote: {
            ...u().defaultRules.blockQuote,
            react: (e, t, n) =>
              (0, a.jsx)(
                "blockquote",
                { className: I.blockquote, children: v(e) },
                n.key,
              ),
          },
          image: {
            ...u().defaultRules.image,
            order: 6,
            match(e, t, n) {
              let s = u().defaultRules.image;
              if (null == s || null == s.match) return !1;
              let i = s.match(e, t, n);
              if (null != i && Array.isArray(i) && i.length >= 3) {
                let e = i[2];
                if ("string" == typeof e) return null != e.match(f) ? i : null;
              }
              return !1;
            },
          },
          inlineCode: {
            ...m.Z.RULES.inlineCode,
            order: 6,
            react: (e, t, n) =>
              (0, a.jsx)(
                "code",
                { className: I.codeInline, children: v(e) },
                n.key,
              ),
          },
          codeBlock: {
            ...u().defaultRules.codeBlock,
            react(e, t, s) {
              let i = () =>
                (0, a.jsx)(
                  "pre",
                  {
                    children: (0, a.jsx)("code", {
                      className: o()(C.scrollbarGhostHairline, "hljs"),
                      children: v(e),
                    }),
                  },
                  s.key,
                );
              return (0, a.jsx)(
                d.GI,
                {
                  createPromise: () =>
                    Promise.resolve().then(n.bind(n, 364964)),
                  webpackId: 364964,
                  renderFallback: i,
                  render: (t) => {
                    if (
                      !(e.lang && t.hasLanguage(e.lang)) ||
                      "string" != typeof e.content
                    )
                      return i();
                    {
                      let n = t.highlight(e.lang, e.content, !0);
                      return null == n
                        ? i()
                        : (0, a.jsx)(
                            "pre",
                            {
                              children: (0, a.jsx)("code", {
                                className: o()(
                                  C.scrollbarGhostHairline,
                                  "hljs",
                                  n.language,
                                ),
                                dangerouslySetInnerHTML: { __html: n.value },
                              }),
                            },
                            s.key,
                          );
                    }
                  },
                },
                s.key,
              );
            },
          },
        },
        N = u().parserFor(E),
        b = u().reactFor(u().ruleOutput(E, "react"));
      class P extends (i = r.PureComponent) {
        render() {
          let {
              className: e,
              children: t,
              state: n,
              parser: s,
              output: i,
            } = this.props,
            r = i(s("".concat(t, "\n\n"), { inline: !1, ...n }));
          return (0, a.jsx)("div", {
            className: o()(I.markdown, e),
            children: r,
          });
        }
      }
      x(P, "rules", E),
        x(P, "defaultProps", { parser: N, output: b }),
        (t.Z = P);
    },
    44488: function (e, t, n) {
      n.d(t, {
        Pz: function () {
          return g;
        },
        am: function () {
          return m;
        },
      }),
        n(47120);
      var s,
        i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(481060),
        h = n(768762),
        u = n(446174);
      function d(e, t, n) {
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
      let c = { CENTER: u.alignCenter, LEFT: u.alignLeft };
      class p extends (s = a.PureComponent) {
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
            h = n
              ? u.verticalPaginationItemContainer
              : u.horizontalPaginationItemContainer;
          return (0, i.jsx)(o.AdvancedScrollerAuto, {
            orientation: n ? "vertical" : "horizontal",
            className: l()(h, s, r),
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
            d(this, "_scrollerRef", null),
            d(this, "_paginationItemRefs", []),
            d(this, "handleSetScrollerRef", (e) => {
              this._scrollerRef = e;
            }),
            d(this, "handleSelectedIndexChange", (e) => {
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
            d(this, "handlePageClick", (e) => {
              let { onSetItem: t } = this.props;
              t(e);
            });
        }
      }
      d(p, "Align", c),
        d(p, "defaultProps", {
          scrollToPadding: { top: 0, left: 0, bottom: 0, right: 0 },
          align: c.CENTER,
        });
      class m extends a.PureComponent {
        render() {
          let { className: e } = this.props;
          return (0, i.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.NONE,
            className: l()(u.prevButtonContainer, e),
            onClick: this.handlePrevClick,
            children: (0, i.jsx)(h.Z, {
              className: u.arrow,
              direction: h.Z.Directions.LEFT,
            }),
          });
        }
        constructor(...e) {
          super(...e),
            d(this, "handlePrevClick", (e) => {
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
            className: l()(u.nextButtonContainer, e),
            onClick: this.handleNextClick,
            children: (0, i.jsx)(h.Z, {
              className: u.arrow,
              direction: h.Z.Directions.RIGHT,
            }),
          });
        }
        constructor(...e) {
          super(...e),
            d(this, "handleNextClick", (e) => {
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
      var s,
        i = n(200651),
        a = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(748780),
        h = n(112724),
        u = n(744184);
      function d(e, t, n) {
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
        p = "center",
        m = "right";
      function g(e, t) {
        return ((e % t) + t) % t;
      }
      class I extends (s = a.Component) {
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
          return e === p
            ? (t - n.width) / 2 + r
            : e === m
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
            className: l()(u.singleItemWrapper, u.viewport, s),
            children: (0, i.jsx)("div", {
              className: u.singleItem,
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
              edgeItems: h,
              gutter: d,
            } = this.props,
            { margin: c, width: p } = l,
            m = this.getCarouselTranslate(),
            g = this.getItemStyle(),
            I = (e = h > 0 ? [...r.slice(-h), ...r, ...r.slice(0, h)] : r).map(
              (e, t) =>
                (0, i.jsx)(
                  "div",
                  {
                    style: g,
                    className: u.item,
                    children: a(e, t - h, this.interpolateValueForItem(t - h)),
                  },
                  t,
                ),
            );
          return (0, i.jsx)(o.Z.div, {
            className: u.carousel,
            style: {
              opacity: s,
              left: o.Z.add(
                t.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-m, -c - p - m - d * (r.length - 1)],
                }),
                n,
              ),
            },
            children: I,
          });
        }
        render() {
          let { items: e, className: t, hideOverflow: n } = this.props;
          if (e.length <= 0) throw Error("Carousel has no items");
          return 1 === e.length
            ? this.renderSingleItem()
            : (0, i.jsx)("div", {
                className: l()({ [u.viewport]: n }, t),
                children: this.renderCarouselItems(),
              });
        }
        constructor(...e) {
          super(...e),
            d(this, "animatedIndex", new o.Z.Value(this.props.currentIndex)),
            d(
              this,
              "animatedAlignmentOffset",
              new o.Z.Value(this.getAlignmentOffset(this.props.align)),
            ),
            d(this, "animatedOpacity", new o.Z.Value(1)),
            d(this, "getItemStyle", () => {
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
            d(this, "interpolateValueForItem", (e) =>
              this.animatedIndex.interpolate({
                inputRange: [e - 1, e, e + 1],
                outputRange: [0, 1, 0],
                extrapolate: "clamp",
              }),
            );
        }
      }
      d(I, "defaultProps", {
        animate: !0,
        edgeItems: 2,
        align: p,
        gutter: 0,
        hideOverflow: !0,
      }),
        (t.ZP = (0, h.Z)(I));
    },
    453499: function (e, t, n) {
      n(47120);
      var s,
        i,
        a,
        r,
        l = n(200651),
        o = n(192379),
        h = n(120356),
        u = n.n(h),
        d = n(392711),
        c = n.n(d),
        p = n(846519),
        m = n(481060),
        g = n(570140),
        I = n(578361),
        C = n(768762),
        x = n(259580),
        f = n(585483),
        v = n(981631),
        E = n(689938),
        N = n(665923);
      function b(e, t, n) {
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
      let P = { JUMP: "jump", NEXT: "next", PREVIOUS: "previous" };
      ((r = s || (s = {})).ARROW = "arrow"), (r.CARET = "caret");
      class S extends (i = o.PureComponent) {
        componentDidMount() {
          f.S.subscribe(v.CkL.CAROUSEL_PREV, this.handlePrevious),
            f.S.subscribe(v.CkL.CAROUSEL_NEXT, this.handleNext);
        }
        componentWillUnmount() {
          f.S.unsubscribe(v.CkL.CAROUSEL_PREV, this.handlePrevious),
            f.S.unsubscribe(v.CkL.CAROUSEL_NEXT, this.handleNext);
        }
        render() {
          let {
              current: e,
              count: t,
              includeHitboxPadding: n,
              arrowClassName: s,
              paginationDotClassName: i,
              paginationDotSelectedClassName: a,
              paginationArrowIconType: r = "arrow",
            } = this.props,
            o = u()(N.arrowHitbox, { [N.arrowHitboxPadding]: n }, s);
          return (0, l.jsxs)("div", {
            className: u()(N.controls, this.props.className),
            children: [
              (0, l.jsx)(m.Button, {
                look: m.Button.Looks.BLANK,
                className: o,
                onClick: this.handlePrevious,
                "aria-label": E.Z.Messages.PAGINATION_PREVIOUS,
                children:
                  "caret" === r
                    ? (0, l.jsx)(x.Z, {
                        className: N.arrow,
                        direction: x.Z.Directions.LEFT,
                      })
                    : (0, l.jsx)(C.Z, {
                        className: N.arrow,
                        direction: C.Z.Directions.LEFT,
                      }),
              }),
              (0, l.jsx)("div", {
                className: N.dots,
                children: c().times(t, (t) =>
                  (0, l.jsx)(
                    m.Button,
                    {
                      look: m.Button.Looks.BLANK,
                      size: m.Button.Sizes.NONE,
                      onClick: () => this.handleDotClick(t),
                      className:
                        t === e ? u()(N.dotSelected, a) : u()(N.dotNormal, i),
                      "aria-label": E.Z.Messages.PAGINATION_SLIDE_LABEL.format({
                        pageNumber: t + 1,
                      }),
                    },
                    "dot-".concat(t),
                  ),
                ),
              }),
              (0, l.jsx)(m.Button, {
                look: m.Button.Looks.BLANK,
                className: o,
                onClick: this.handleNext,
                "aria-label": E.Z.Messages.PAGINATION_NEXT,
                children:
                  "caret" === r
                    ? (0, l.jsx)(x.Z, {
                        className: N.arrow,
                        direction: x.Z.Directions.RIGHT,
                      })
                    : (0, l.jsx)(C.Z, {
                        className: N.arrow,
                        direction: C.Z.Directions.RIGHT,
                      }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            b(this, "handleDotClick", (e) => {
              let {
                onSetItem: t,
                onIntentionalChange: n,
                current: s,
              } = this.props;
              null == n || n(s, e, P.JUMP), t(e);
            }),
            b(this, "handleNext", () => {
              let {
                  onIntentionalChange: e,
                  current: t,
                  onChangePage: n,
                } = this.props,
                s = n(1);
              null == e || e(t, s, P.NEXT);
            }),
            b(this, "handlePrevious", () => {
              let {
                  onIntentionalChange: e,
                  current: t,
                  onChangePage: n,
                } = this.props,
                s = n(-1);
              null == e || e(t, s, P.PREVIOUS);
            });
        }
      }
      b(S, "defaultProps", { includeHitboxPadding: !0 });
      class L extends (a = o.PureComponent) {
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
          let n, s, i, a;
          let r =
            ((n = this.props), (s = this.state), !n.initialPaused && !s.paused);
          let l = ((i = e), (a = t), !i.initialPaused && !a.paused);
          r && !l ? this.startTimer() : !r && l && this.stopTimer();
          let { items: o } = this.props,
            { visibleIndex: h } = this.state;
          null == o[h] && this.changeItem(o, 1);
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
          let { onChangeItem: s } = this.props;
          null == s || s(e[n], this.state.visibleIndex, n);
          let i = t > 0 ? I.n.LEFT : I.n.RIGHT;
          return this.setState({ visibleIndex: n, direction: i }), n;
        }
        render() {
          let {
              items: e,
              renderItem: t,
              className: n,
              slideAnimatorClassName: s,
              slideAnimatorSpringSettings: i,
              slideAnimatorFadeInOut: a,
              paginationClassName: r,
              paginationArrowClassName: o,
              paginationArrowIconType: h,
              paginationDotClassName: d,
              paginationDotSelectedClassName: c,
              themedPagination: p,
              includeHitboxPadding: m,
              style: g,
              aspectRatio: C,
              children: x,
            } = this.props,
            { visibleIndex: f } = this.state;
          return (0, l.jsxs)("div", {
            className: N.root,
            children: [
              (0, l.jsxs)("div", {
                className: u()(N.carouselContainer, n),
                style: g,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                children: [
                  (0, l.jsx)("div", {
                    style: { aspectRatio: C },
                    children: (0, l.jsx)(I.Z, {
                      className: u()(N.carousel, s),
                      step: f,
                      direction: this.getCurrentDirection(),
                      springSettings: i,
                      fadeInOut: a,
                      children: t(e[f], f),
                    }),
                  }),
                  e.length > 1 &&
                    (0, l.jsx)(S, {
                      className: u()(r, p ? N.themedPagination : N.pagination),
                      arrowClassName: o,
                      includeHitboxPadding: m,
                      current: f,
                      count: e.length,
                      onChangePage: (t) => this.changeItem(e, t),
                      onSetItem: this.handleSetItem,
                      onIntentionalChange: this.handleIntentionalChange,
                      paginationArrowIconType: h,
                      paginationDotClassName: d,
                      paginationDotSelectedClassName: c,
                    }),
                ],
              }),
              null != x &&
                x({ step: f, direction: this.getCurrentDirection() }),
            ],
          });
        }
        constructor(e) {
          super(e),
            b(this, "timer", new p.Xp()),
            b(this, "handleWindowFocusChange", (e) => {
              let { focused: t } = e;
              this.setState({ paused: !t });
            }),
            b(this, "getCurrentDirection", () => this.state.direction),
            b(this, "nextItem", () => {
              let { items: e } = this.props;
              this.changeItem(e, 1);
            }),
            b(this, "previousItem", () => {
              let { items: e } = this.props;
              this.changeItem(e, -1);
            }),
            b(this, "handleSetItem", (e) => {
              let { visibleIndex: t } = this.state,
                { items: n } = this.props;
              this.changeItem(n, e - t);
            }),
            b(this, "handleMouseEnter", () => {
              this.setState({ paused: !0 });
            }),
            b(this, "handleMouseLeave", () => {
              this.setState({ paused: !1 });
            }),
            b(this, "handleIntentionalChange", (e, t, n) => {
              let { items: s, onIntentionalChange: i } = this.props;
              return null == i ? void 0 : i(s[t], e, t, n);
            }),
            (this.state = {
              visibleIndex:
                !0 === e.randomize ? c().random(0, e.items.length - 1) : 0,
              direction: I.n.LEFT,
              paused: !1,
            });
        }
      }
      b(L, "defaultProps", { aspectRatio: 16 / 9 }), (t.Z = L);
    },
    341176: function (e, t, n) {
      n.d(t, {
        D: function () {
          return m;
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
        h = n(589530),
        u = n(591759),
        d = n(124347),
        c = n(80966),
        p = n(519817);
      let m = { DEFAULT: null, CONTAIN: p.contain, SCALE_DOWN: p.scaleDown };
      function g(e) {
        let {
            media: t,
            fit: n = m.DEFAULT,
            obscured: i = !1,
            onContextMenu: g,
          } = e,
          {
            width: I,
            height: C,
            url: x,
            proxyUrl: f,
            alt: v,
            type: E,
            maxWidth: N,
            maxHeight: b,
            ...P
          } = t,
          { width: S, height: L } = (0, o.zp)(
            null != I ? I : 0,
            null != C ? C : 0,
          ),
          y = (0, l.q)({ proxyURL: f, url: x }),
          O = !(null == I || 0 === I || null == C || 0 === C);
        if ("VIDEO" === E && O && null != f) {
          var M;
          let e = (function (e) {
            let t = u.Z.toURLSafe(e);
            return null == t
              ? null
              : (t.searchParams.append("format", "webp"), t.toString());
          })(f);
          if (null == e) return null;
          let n =
            null !== (M = t.renderLinkComponent) && void 0 !== M ? M : r.iT;
          return (0, s.jsx)(c.Z, {
            ...P,
            src: y,
            width: I,
            height: C,
            maxWidth: S,
            maxHeight: L,
            poster: e,
            naturalWidth: I,
            naturalHeight: C,
            volume: h.FC,
            autoMute: h.rs,
            onVolumeChange: h.jA,
            onMute: h.Zj,
            renderLinkComponent: n,
            autoPlay: !i,
            alt: v,
            onContextMenu: g,
          });
        }
        if ("IMAGE" === E)
          return O
            ? (0, s.jsx)(d.ZP, {
                ...P,
                imageClassName: a()(p.slide, n),
                src: y,
                width: I,
                height: C,
                shouldLink: !1,
                maxWidth: S,
                maxHeight: L,
                animated: !i && t.animated,
                autoPlay: !i,
                alt: v,
                zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                onContextMenu: g,
              })
            : (0, s.jsx)("img", {
                src: y,
                alt: v,
                className: a()(p.slide, n),
                onContextMenu: g,
              });
        return null;
      }
    },
  },
]);
//# sourceMappingURL=d2a4ba7dd73c8bacc776.js.map
