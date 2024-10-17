"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["75350"],
  {
    33122: function (e, t, s) {
      s.d(t, {
        r: function () {
          return S;
        },
      }),
        s(47120);
      var n,
        a = s(735250),
        i = s(470079),
        r = s(120356),
        l = s.n(r),
        o = s(748780),
        h = s(481060),
        d = s(112724),
        u = s(446411),
        c = s(468846),
        p = s(679056),
        m = s(44488),
        g = s(519160),
        I = s(124347),
        x = s(283756),
        C = s(524444),
        v = s(585483),
        N = s(981631),
        f = s(161243);
      function b(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      function P() {
        var e, t;
        let s =
          ((e = ["grayscale(", ")"]),
          !t && (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
          ));
        return (
          (P = function () {
            return s;
          }),
          s
        );
      }
      let S = {
          SMALL: { width: 640, height: 360, margin: 15 },
          MEDIUM: { width: 880, height: 495, margin: 20 },
        },
        y = { width: 1920, height: 1080 },
        E = { width: 1280, height: 720 },
        j = (e) =>
          (0, C.lV)({
            ...e,
            className: f.videoWrapper,
            mediaPlayerClassName: f.mediaPlayer,
          }),
        L = (e) => (0, a.jsx)(I.ZP, { ...e }),
        O = (e) => {
          let t,
            s,
            n,
            {
              item: i,
              size: r,
              onPlay: l,
              onEnded: o,
              onClick: d,
              playable: p,
              volume: m,
              isMuted: g,
              onVolumeChange: I,
              onMute: x,
            } = e;
          if (i.type === N.s9s.YOUTUBE_VIDEO)
            (t = { url: (0, N.n8r)(i.youtubeVideoId), ...y }),
              (s = {
                url: ""
                  .concat((0, N.ivE)(i.youtubeVideoId), "?")
                  .concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                ...E,
              }),
              (n = c.pn.YOUTUBE);
          else {
            let e = null != i.width ? i.width : 0,
              n = null != i.height ? i.height : 0;
            (t = { url: i.thumbnailSrc, width: e, height: n }),
              (s = { url: i.src, proxyURL: i.src, width: e, height: n });
          }
          let v = (0, a.jsx)(u.BC, {
            href: null,
            thumbnail: t,
            video: s,
            provider: n,
            allowFullScreen: !0,
            maxHeight: r.height,
            maxWidth: r.width,
            onPlay: l,
            onEnded: o,
            playable: p,
            className: f.video,
            volume: m,
            onVolumeChange: I,
            autoMute: g,
            onMute: x,
            autoPlay: p,
            renderVideoComponent: j,
            renderImageComponent: L,
            renderLinkComponent: C.iT,
          });
          return p
            ? v
            : (0, a.jsx)(h.Clickable, {
                className: f.itemImageWrapper,
                onClick: d,
                children: v,
              });
        },
        M = () =>
          (0, a.jsx)("div", {
            className: f.paginationVideoOverlay,
            children: (0, a.jsx)(x.Z, {
              inactive: !0,
              className: f.paginationVideoPlayPill,
              renderLinkComponent: C.iT,
            }),
          });
      class T extends (n = i.PureComponent) {
        componentDidMount() {
          v.S.subscribe(N.CkL.CAROUSEL_PREV, this.manualPrevious),
            v.S.subscribe(N.CkL.CAROUSEL_NEXT, this.manualNext);
        }
        componentWillUnmount() {
          v.S.unsubscribe(N.CkL.CAROUSEL_PREV, this.manualPrevious),
            v.S.unsubscribe(N.CkL.CAROUSEL_NEXT, this.manualNext);
        }
        getStyle(e, t) {
          let s = t.interpolate({
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
            filter: o.Z.template(P(), s),
          };
        }
        handleCurrentItemClick(e, t) {
          let { onCurrentItemClick: s } = this.props;
          null != s && s(e, t), this.setState({ hasInteracted: !0 });
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
              animate: s,
              hoveringPreviousItem: n,
              hoveringNextItem: i,
            } = this.state,
            r = (0, a.jsx)(g.ZP, {
              items: e,
              itemSize: this.getItemSize(),
              renderItem: this.renderItem,
              currentIndex: t,
              animate: s,
              edgeItems: 2,
            });
          return e.length <= 1
            ? r
            : (0, a.jsxs)("div", {
                className: f.carouselButtonsContainer,
                children: [
                  r,
                  (0, a.jsx)(m.am, {
                    onClick: this.manualPrevious,
                    className: l()(f.arrow, { [f.arrowHovered]: n }),
                  }),
                  (0, a.jsx)(m.Pz, {
                    onClick: this.manualNext,
                    className: l()(f.arrow, { [f.arrowHovered]: i }),
                  }),
                ],
              });
        }
        getPaginationSrc(e) {
          return e.type === N.s9s.YOUTUBE_VIDEO
            ? (0, N.n8r)(e.youtubeVideoId)
            : e.type === N.s9s.IMG
              ? e.src
              : e.type === N.s9s.VIDEO
                ? e.thumbnailSrc
                : null;
        }
        render() {
          let {
              items: e,
              className: t,
              autoplayInterval: s,
              paused: n,
            } = this.props,
            { currentIndex: i, playingVideo: r, hasInteracted: l } = this.state;
          return (0, a.jsxs)(p.Z, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: s,
            className: t,
            disable: r || l || n,
            children: [
              this.renderCarousel(),
              (0, a.jsx)("div", {
                className: f.pagination,
                children: (0, a.jsx)(m.ZP, {
                  renderItem: this.renderPaginationItem,
                  scrollToPadding: 85,
                  items: e,
                  selectedIndex: i,
                  onSetItem: (e) => this.setItem(e, !0),
                  paginationContainerClass: f.scroller,
                  align: e.length < 6 ? m.ZP.Align.LEFT : m.ZP.Align.CENTER,
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            b(this, "state", {
              currentIndex: 0,
              animate: !0,
              playingVideo: !1,
              hasInteracted: !1,
              hoveringPreviousItem: !1,
              hoveringNextItem: !1,
              volume: 1,
              isMuted: !0,
            }),
            b(this, "getItemSize", () => {
              let { width: e } = this.props,
                t = S.MEDIUM;
              return null != e && e < t.width && (t = S.SMALL), t;
            }),
            b(this, "setItem", (e, t) => {
              let {
                  props: { items: s, onIntentionalChange: n },
                  state: { currentIndex: a },
                } = this,
                i = (0, g.gN)(a, s.length),
                r = (0, g.gN)(e, s.length),
                l =
                  1 === Math.abs(e - i) ||
                  (e === s.length - 1 && 0 === i) ||
                  (0 === e && i === s.length - 1);
              this.setState({
                playingVideo: !1,
                currentIndex: r,
                animate: l,
                hasInteracted: t,
              }),
                t && null != n && n(s[r], i, r);
            }),
            b(this, "autoNext", () => {
              this.setItem(this.state.currentIndex + 1, !1);
            }),
            b(this, "manualNext", () => {
              this.setItem(this.state.currentIndex + 1, !0);
            }),
            b(this, "manualPrevious", () => {
              this.setItem(this.state.currentIndex - 1, !0);
            }),
            b(this, "handlePlay", (e) =>
              this.setState({ playingVideo: !0, hasInteracted: !e }),
            ),
            b(this, "handleEnded", () => {
              !this.state.hasInteracted && this.autoNext();
            }),
            b(this, "handleVolumeChange", (e) => {
              this.setState({ volume: e, hasInteracted: !0 });
            }),
            b(this, "handleMute", (e) => {
              this.setState({ isMuted: e, hasInteracted: !0 });
            }),
            b(this, "handleVideoClick", (e) => {
              this.setItem(e, !0);
            }),
            b(this, "handleEdgeItemMouseLeave", () => {
              this.setState({ hoveringPreviousItem: !1, hoveringNextItem: !1 });
            }),
            b(this, "renderCarouselImage", (e, t, s) =>
              s
                ? (0, a.jsx)(h.Clickable, {
                    onClick: () => this.handleCurrentItemClick(e, t),
                    className: f.itemImageWrapper,
                    children: (0, a.jsx)("img", {
                      src: e.src,
                      alt: "",
                      className: f.currentImage,
                    }),
                  })
                : (0, a.jsx)(h.Clickable, {
                    onClick: () => this.setItem(t, !0),
                    className: f.itemImageWrapper,
                    children: (0, a.jsx)("img", {
                      alt: "",
                      className: f.itemImage,
                      src: e.src,
                      draggable: !1,
                    }),
                  }),
            ),
            b(this, "renderItem", (e, t, s) => {
              let { currentIndex: n, volume: i, isMuted: r } = this.state,
                h = t === (0, g.gN)(n, this.props.items.length);
              return (0, a.jsx)(o.Z.div, {
                className: l()(f.item, { [f.currentItem]: h }),
                style: null != s ? this.getStyle(t, s) : null,
                onMouseEnter: h ? null : () => this.handleEdgeItemMouseEnter(t),
                onMouseLeave: h ? null : this.handleEdgeItemMouseLeave,
                children:
                  e.type === N.s9s.VIDEO || e.type === N.s9s.YOUTUBE_VIDEO
                    ? (0, a.jsx)(O, {
                        item: e,
                        size: this.getItemSize(),
                        onPlay: this.handlePlay,
                        onEnded: this.handleEnded,
                        playable: h,
                        onClick: () => this.handleVideoClick(t),
                        volume: i,
                        onVolumeChange: this.handleVolumeChange,
                        isMuted: r,
                        onMute: this.handleMute,
                      })
                    : this.renderCarouselImage(e, t, h),
              });
            }),
            b(this, "renderPaginationItem", (e, t) => {
              let { currentIndex: s } = this.state,
                n = s === t;
              return (0, a.jsxs)(
                "div",
                {
                  className: l()(
                    f.paginationItem,
                    n
                      ? f.selectedStorePaginationItem
                      : f.unselectedStorePaginationItem,
                  ),
                  children: [
                    (0, a.jsx)("img", {
                      alt: null == e.alt ? t : e.alt,
                      className: f.storePaginationImg,
                      src: this.getPaginationSrc(e),
                      draggable: !1,
                    }),
                    e.type === N.s9s.YOUTUBE_VIDEO || e.type === N.s9s.VIDEO
                      ? (0, a.jsx)(M, {})
                      : null,
                    n
                      ? (0, a.jsx)("div", { className: f.overlappingBorder })
                      : null,
                  ],
                },
                "page-".concat(t),
              );
            });
        }
      }
      b(T, "defaultProps", { autoplayInterval: 8e3, paused: !1 }),
        (t.Z = (0, d.Z)(T));
    },
    761705: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return P;
        },
      }),
        s(47120),
        s(653041);
      var n,
        a = s(735250),
        i = s(470079),
        r = s(120356),
        l = s.n(r),
        o = s(299608),
        h = s.n(o),
        d = s(748780),
        u = s(215569),
        c = s(376641),
        p = s(714338),
        m = s(134432),
        g = s(44488),
        I = s(585483),
        x = s(981631),
        C = s(31185);
      function v(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      let N = { friction: 10, tension: 100 };
      function f(e, t) {
        return ((e % t) + t) % t;
      }
      class b extends i.Component {
        componentWillEnter(e) {
          let { directionHistory: t } = this.props,
            { translate: s, opacity: n } = this.state;
          s.setValue(t[t.length - 1]),
            n.setValue(0),
            e(),
            d.Z.parallel([
              d.Z.timing(n, {
                toValue: 1,
                easing: d.Z.Easing.out(d.Z.Easing.linear),
                duration: 200,
              }),
              d.Z.spring(s, { toValue: 0, ...N }),
            ]).start();
        }
        componentWillLeave(e) {
          let { directionHistory: t } = this.props,
            { opacity: s, translate: n } = this.state;
          d.Z.parallel([
            d.Z.timing(s, {
              toValue: 0,
              easing: d.Z.Easing.in(d.Z.Easing.linear),
              duration: 200,
            }),
            d.Z.spring(n, { toValue: -1 * t[t.length - 1], ...N }),
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
            className: l()(C.slide, t),
            style: this.getStyle(),
          });
        }
        constructor(...e) {
          super(...e),
            v(this, "state", {
              translate: new d.Z.Value(0),
              opacity: new d.Z.Value(1),
            });
        }
      }
      class P extends (n = i.Component) {
        componentDidMount() {
          this.preloadNextImages(),
            p.Z.disable(),
            p.Z.enableTemp(c.P),
            I.S.subscribe(x.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
            I.S.subscribe(x.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
        }
        componentWillUnmount() {
          p.Z.disableTemp(),
            I.S.unsubscribe(x.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
            I.S.unsubscribe(x.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
        }
        preloadNextImages() {
          var e, t;
          let { currentIndex: s } = this.state,
            { items: n } = this.props;
          let a = (((s + 1) % (e = n.length)) + e) % e;
          let i = (((s - 1) % (t = n.length)) + t) % t;
          this.preloadImage(n[a]), this.preloadImage(n[i]);
        }
        preloadImage(e) {
          (0, m.po)(e.src);
        }
        componentDidUpdate(e, t) {
          let { currentIndex: s } = this.state;
          s !== t.currentIndex && this.preloadNextImages();
        }
        navigateTo(e) {
          var t, s, n;
          let { directionHistory: a, currentIndex: i } = this.state;
          a.push(e - i),
            (e = ((e % (n = this.props.items.length)) + n) % n),
            this.setState({ currentIndex: e, directionHistory: a }),
            null === (t = (s = this.props).onIndexChange) ||
              void 0 === t ||
              t.call(s, e);
        }
        render() {
          var e;
          let { className: t } = this.props,
            { currentIndex: s, directionHistory: n } = this.state,
            { modalCarouselItemClassName: i } = this.props,
            r = this.props.items[s],
            o = this.props.items;
          return (0, a.jsxs)(u.W, {
            component: "div",
            className: l()(C.wrapper, t),
            children: [
              o.length > 1
                ? (0, a.jsx)(g.am, {
                    className: C.navPrev,
                    onClick: this.gotoPrev,
                  })
                : null,
              null !== (e = r.component) && void 0 !== e
                ? e
                : (0, a.jsx)(
                    b,
                    { item: r, directionHistory: n, className: i },
                    r.src,
                  ),
              o.length > 1
                ? (0, a.jsx)(g.Pz, {
                    className: C.navNext,
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
            v(this, "gotoNextThrottled", h()(this.gotoNext, 300)),
            v(this, "gotoPrevThrottled", h()(this.gotoPrev, 300)),
            (this.state = { currentIndex: e.startWith, directionHistory: [] });
        }
      }
      v(P, "defaultProps", { startWith: 0 });
    },
    15470: function (e, t, s) {
      s.d(t, {
        i: function () {
          return x;
        },
      }),
        s(47120);
      var n = s(735250),
        a = s(470079),
        i = s(120356),
        r = s.n(i),
        l = s(302454),
        o = s.n(l),
        h = s(481060),
        d = s(770146),
        u = s(241209),
        c = s(73346),
        p = s(689938),
        m = s(499142);
      function g(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      let I = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
        x = {
          ...u.Z.rules,
          heading: {
            ...u.Z.rules.heading,
            react(e, t, s) {
              let a = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
              return (0, n.jsx)(
                d.Z,
                { tag: a, children: t(e.content, s) },
                s.key,
              );
            },
          },
          assetImage: {
            order: 5,
            match(e, t) {
              let s = e.match(I);
              if (null != s) {
                let e = s[2],
                  n = t.assets.find((t) => t.id === e);
                return null != n && [...s, n, t.applicationId];
              }
              return !1;
            },
            parse: (e) => ({ asset: e[3], alt: e[1], applicationId: e[4] }),
            react: (e, t, s) =>
              (0, n.jsx)(
                "div",
                {
                  className: m.assetWrapper,
                  children: (0, n.jsx)("img", {
                    alt: e.alt,
                    src: (0, c._W)(e.applicationId, e.asset, 800),
                    className: m.asset,
                  }),
                },
                s.key,
              ),
          },
        },
        C = o().parserFor(x),
        v = o().reactFor(o().ruleOutput(x, "react"));
      class N extends a.PureComponent {
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
              blurb: s,
              className: a,
              assets: i,
            } = this.props,
            { collapsed: l, collapsable: o } = this.state;
          return (0, n.jsxs)("div", {
            className: a,
            children: [
              (0, n.jsx)("div", {
                className: r()({ [m.collapsed]: o && l }),
                children: (0, n.jsxs)("div", {
                  ref: this.setContentContainerRef,
                  children: [
                    (0, n.jsx)("div", { className: m.blurb, children: s }),
                    (0, n.jsx)(u.Z, {
                      className: m.description,
                      parser: C,
                      output: v,
                      state: { assets: i, applicationId: e },
                      children: t,
                    }),
                  ],
                }),
              }),
              o
                ? (0, n.jsx)(h.Button, {
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
      t.Z = N;
    },
    445986: function (e, t, s) {
      s.d(t, {
        Q: function () {
          return c;
        },
      }),
        s(653041),
        s(47120);
      var n = s(735250),
        a = s(470079),
        i = s(481060),
        r = s(33122),
        l = s(761705),
        o = s(9807),
        h = s(843445),
        d = s(981631),
        u = s(689938);
      function c(e) {
        return "".concat(e.split("?")[0], "?size=").concat(2048);
      }
      let p = (e) => {
        let { index: t, items: s, ...a } = e,
          i = s[t],
          r = 0,
          o = [];
        for (let e of s)
          if (e.type === d.s9s.IMG) {
            let { width: t, height: s, src: n } = e;
            e === i && (r = o.length),
              o.push({ src: c(n), width: t, height: s });
          }
        return (0, n.jsx)(l.Z, { ...a, items: o, startWith: r });
      };
      class m extends a.Component {
        render() {
          let { pageSize: e, ...t } = this.props,
            s = e === h.b.SMALL ? o.Z : r.Z;
          return (0, n.jsx)(s, {
            ...t,
            onCurrentItemClick: this.handleCurrentItemClick,
          });
        }
        constructor(...e) {
          var t, s, a;
          super(...e),
            (t = this),
            (s = "handleCurrentItemClick"),
            (a = (e, t) => {
              e.type === d.s9s.IMG &&
                !(0, i.hasAnyModalOpen)() &&
                (0, i.openModal)((e) =>
                  (0, n.jsx)(i.ModalRoot, {
                    size: i.ModalSize.DYNAMIC,
                    "aria-label": u.Z.Messages.IMAGE,
                    ...e,
                    children: (0, n.jsx)(p, {
                      ...e,
                      index: t,
                      items: this.props.items,
                    }),
                  }),
                );
            }),
            s in t
              ? Object.defineProperty(t, s, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[s] = a);
        }
      }
      t.Z = m;
    },
    843445: function (e, t, s) {
      s.d(t, {
        b: function () {
          return a;
        },
        x: function () {
          return n;
        },
      });
      let n = 1e3,
        a = Object.freeze({ SMALL: "small", LARGE: "large" });
    },
    9807: function (e, t, s) {
      s(47120), s(411104);
      var n,
        a = s(735250),
        i = s(470079),
        r = s(120356),
        l = s.n(r),
        o = s(481060),
        h = s(33122),
        d = s(446411),
        u = s(468846),
        c = s(453499),
        p = s(124347),
        m = s(80966),
        g = s(524444),
        I = s(843445),
        x = s(981631),
        C = s(689938),
        v = s(310436);
      function N(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      let f = (e) => {
          let { className: t, ...s } = e;
          return (0, a.jsx)(m.Z, {
            ...s,
            className: l()(v.sizedToParent, t),
            mediaPlayerClassName: v.sizedToParent,
            renderLinkComponent: g.iT,
          });
        },
        b = (e) => {
          let { containerClassName: t, className: s, ...n } = e;
          return (0, a.jsx)(p.ZP, { ...n, className: l()(s, t) });
        },
        P = { width: 1280, height: 720 },
        S = { width: 640, height: 360 },
        y = (e) => {
          let t,
            s,
            n,
            {
              item: i,
              onPlay: r,
              volume: l,
              onVolumeChange: o,
              onMute: c,
              isMuted: p,
              autoPlay: m,
            } = e;
          if (i.type === x.s9s.YOUTUBE_VIDEO)
            (t = { url: (0, x.n8r)(i.youtubeVideoId), ...P }),
              (s = {
                url: ""
                  .concat((0, x.ivE)(i.youtubeVideoId), "?")
                  .concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                ...S,
              }),
              (n = u.pn.YOUTUBE);
          else {
            let e = null != i.width ? i.width : 0,
              n = null != i.height ? i.height : 0;
            (t = { url: i.thumbnailSrc, width: e, height: n }),
              (s = { url: i.src, proxyURL: i.src, width: e, height: n });
          }
          return (0, a.jsx)("div", {
            className: v.embedContainer,
            children: (0, a.jsx)(d.BC, {
              className: v.sizedToParent,
              iframeWrapperClassName: v.sizedToParent,
              href: null,
              thumbnail: t,
              video: s,
              provider: n,
              maxHeight: h.r.SMALL.height,
              maxWidth: I.b.SMALL,
              onPlay: r,
              playable: !0,
              volume: l,
              onVolumeChange: o,
              autoMute: p,
              onMute: c,
              autoPlay: m,
              renderImageComponent: b,
              renderVideoComponent: f,
              renderLinkComponent: g.iT,
            }),
          });
        };
      class E extends (n = i.PureComponent) {
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
          let { onCurrentItemClick: s } = this.props;
          null != s && s(e, t), this.setState({ hasInteracted: !0 });
        }
        render() {
          let {
              items: e,
              autoplayInterval: t,
              className: s,
              paused: n,
              themedPagination: i,
            } = this.props,
            { hasInteracted: r } = this.state;
          return (0, a.jsx)(c.Z, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: n || r,
            renderItem: this.renderItem,
            className: l()(v.smallCarousel, s),
            themedPagination: i,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
          });
        }
        constructor(...e) {
          super(...e),
            N(this, "state", {
              hasInteracted: !1,
              isVideoPlaying: !1,
              isMuted: !0,
              volume: 1,
              status: new Map(),
              imageLoadingStartTime: new Map(),
            }),
            N(this, "handlePlay", (e) => {
              this.setState({ isVideoPlaying: !0, hasInteracted: !e });
            }),
            N(this, "handleVolumeChange", (e) => {
              this.setState({ volume: e, hasInteracted: !0 });
            }),
            N(this, "handleMute", (e) => {
              this.setState({ isMuted: e, hasInteracted: !0 });
            }),
            N(this, "handleChangeItem", (e) => {
              this.setState({ isVideoPlaying: !1 }),
                e.type === x.s9s.IMG &&
                  this.setState({
                    imageLoadingStartTime: new Map(
                      this.state.imageLoadingStartTime,
                    ).set(e.src, Date.now()),
                  });
            }),
            N(this, "handleIntentionalChange", (e, t, s, n) => {
              this.setState({ hasInteracted: !0 });
              let { onIntentionalChange: a } = this.props;
              null != a && a(e, t, s, n);
            }),
            N(this, "handleOnErrorImg", (e) => {
              this.setState({
                status: new Map(this.state.status).set(e.target.src, "errored"),
              });
            }),
            N(this, "handleOnLoadImg", (e) => {
              let { onImageLoad: t } = this.props;
              this.setState({
                status: new Map(this.state.status).set(e.target.src, "loaded"),
              });
              let s = this.state.imageLoadingStartTime.get(e.target.src),
                n = null != s ? Date.now() - s : void 0;
              null == t || t({ src: e.target.src, loadTimeMs: n });
            }),
            N(this, "renderItem", (e, t) => {
              let s;
              let { isMuted: n, volume: i } = this.state,
                { videoAutoPlay: r } = this.props;
              switch (e.type) {
                case x.s9s.YOUTUBE_VIDEO:
                case x.s9s.VIDEO:
                  s = (0, a.jsx)(y, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: n,
                    volume: i,
                    onVolumeChange: this.handleVolumeChange,
                    onMute: this.handleMute,
                    autoPlay: r,
                  });
                  break;
                case x.s9s.IMG:
                  if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, a.jsx)(o.Heading, {
                      variant: "heading-xl/semibold",
                      children: C.Z.Messages.ERRORS_IMAGE_NOT_FOUND,
                    });
                    return (0, a.jsx)("div", {
                      className: v.errorContainer,
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
                        : C.Z.Messages.IMAGE;
                    s = (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(o.Spinner, {
                          className: l()(v.spinner, {
                            [v.hidden]: void 0 !== this.state.status.get(e.src),
                          }),
                          type: o.Spinner.Type.SPINNING_CIRCLE,
                        }),
                        (0, a.jsx)("img", {
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
              return (0, a.jsx)(o.Clickable, {
                className: v.smallCarouselItem,
                onClick: () => this.handleCurrentItemClick(e, t),
                children: s,
              });
            });
        }
      }
      N(E, "defaultProps", { paused: !1, videoAutoPlay: !0 }), (t.Z = E);
    },
    326135: function (e, t, s) {
      s.d(t, {
        G: function () {
          return a;
        },
      }),
        s(610138),
        s(216116),
        s(78328),
        s(815648),
        s(47120);
      var n = s(981631);
      let a = (e) => {
        let { id: t, name: s, locale: a } = e,
          i = "https://"
            .concat(n.xr4, "/hc/")
            .concat(a.toLowerCase(), "/requests/new"),
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
            "App Directory Report ".concat(s, " ").concat(t),
          ),
          "".concat(i, "?").concat(r.toString())
        );
      };
    },
    770146: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = s(735250);
      s(470079);
      var a = s(120356),
        i = s.n(a),
        r = s(353947);
      function l(e) {
        let { children: t, tag: s, className: a } = e;
        return (
          (s = null != s ? s : "h3"),
          (0, n.jsx)(s, { className: i()(r.title, a), children: t })
        );
      }
    },
    241209: function (e, t, s) {
      var n,
        a,
        i = s(735250),
        r = s(470079),
        l = s(120356),
        o = s.n(l),
        h = s(302454),
        d = s.n(h),
        u = s(663993),
        c = s(770146),
        p = s(772096),
        m = s(428595),
        g = s(532901),
        I = s(207533),
        x = s(112864);
      function C(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      let v = new RegExp(
        "https?://".concat(
          null !== (n = window.GLOBAL_ENV.CDN_HOST) && void 0 !== n ? n : "",
        ),
      );
      function N(e) {
        return "string" == typeof e.content ? e.content : P(e.content);
      }
      let f = {
          ...d().defaultRules,
          heading: {
            ...d().defaultRules.heading,
            react(e, t, s) {
              let n = "h".concat(e.level);
              return (0, i.jsx)(
                c.Z,
                { tag: n, children: t(e.content, s) },
                s.key,
              );
            },
          },
          paragraph: {
            ...d().defaultRules.paragraph,
            react: (e, t, s) =>
              (0, i.jsx)(
                "div",
                { className: I.paragraph, children: t(e.content, s) },
                s.key,
              ),
          },
          strong: { ...d().defaultRules.strong, order: 6 },
          em: { ...d().defaultRules.em, order: 6 },
          u: { ...d().defaultRules.u, order: 5 },
          del: { ...d().defaultRules.del, order: 6 },
          link: {
            ...p.ZP,
            ...(0, g.Z)({ enableBuildOverrides: !1 }),
            order: 6,
          },
          blockQuote: {
            ...d().defaultRules.blockQuote,
            react: (e, t, s) =>
              (0, i.jsx)(
                "blockquote",
                { className: I.blockquote, children: N(e) },
                s.key,
              ),
          },
          image: {
            ...d().defaultRules.image,
            order: 6,
            match(e, t, s) {
              let n = d().defaultRules.image;
              if (null == n || null == n.match) return !1;
              let a = n.match(e, t, s);
              if (null != a && Array.isArray(a) && a.length >= 3) {
                let e = a[2];
                if ("string" == typeof e) return null != e.match(v) ? a : null;
              }
              return !1;
            },
          },
          inlineCode: {
            ...m.Z.RULES.inlineCode,
            order: 6,
            react: (e, t, s) =>
              (0, i.jsx)(
                "code",
                { className: I.codeInline, children: N(e) },
                s.key,
              ),
          },
          codeBlock: {
            ...d().defaultRules.codeBlock,
            react(e, t, n) {
              let a = () =>
                (0, i.jsx)(
                  "pre",
                  {
                    children: (0, i.jsx)("code", {
                      className: o()(x.scrollbarGhostHairline, "hljs"),
                      children: N(e),
                    }),
                  },
                  n.key,
                );
              return (0, i.jsx)(
                u.GI,
                {
                  createPromise: () =>
                    Promise.resolve().then(s.bind(s, 364964)),
                  webpackId: 364964,
                  renderFallback: a,
                  render: (t) => {
                    if (
                      !(e.lang && t.hasLanguage(e.lang)) ||
                      "string" != typeof e.content
                    )
                      return a();
                    {
                      let s = t.highlight(e.lang, e.content, !0);
                      return null == s
                        ? a()
                        : (0, i.jsx)(
                            "pre",
                            {
                              children: (0, i.jsx)("code", {
                                className: o()(
                                  x.scrollbarGhostHairline,
                                  "hljs",
                                  s.language,
                                ),
                                dangerouslySetInnerHTML: { __html: s.value },
                              }),
                            },
                            n.key,
                          );
                    }
                  },
                },
                n.key,
              );
            },
          },
        },
        b = d().parserFor(f),
        P = d().reactFor(d().ruleOutput(f, "react"));
      class S extends (a = r.PureComponent) {
        render() {
          let {
              className: e,
              children: t,
              state: s,
              parser: n,
              output: a,
            } = this.props,
            r = a(n("".concat(t, "\n\n"), { inline: !1, ...s }));
          return (0, i.jsx)("div", {
            className: o()(I.markdown, e),
            children: r,
          });
        }
      }
      C(S, "rules", f),
        C(S, "defaultProps", { parser: b, output: P }),
        (t.Z = S);
    },
    519160: function (e, t, s) {
      s.d(t, {
        gN: function () {
          return g;
        },
      }),
        s(47120),
        s(411104);
      var n,
        a = s(735250),
        i = s(470079),
        r = s(120356),
        l = s.n(r),
        o = s(748780),
        h = s(112724),
        d = s(744184);
      function u(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      let c = { tension: 7, friction: 5, overshootClamping: !0 },
        p = "center",
        m = "right";
      function g(e, t) {
        return ((e % t) + t) % t;
      }
      class I extends (n = i.Component) {
        componentDidMount() {
          this.animatedIndex.setValue(this.props.currentIndex);
        }
        componentDidUpdate(e) {
          let {
              align: t,
              animate: s,
              currentIndex: n,
              items: a,
              width: i,
            } = this.props,
            r = g(n, a.length),
            l = g(e.currentIndex, a.length);
          (r !== l || a.length !== e.items.length) &&
            this.updateAnimatedIndex(r, l),
            i !== e.width
              ? this.animatedAlignmentOffset.setValue(
                  this.getAlignmentOffset(t),
                )
              : s &&
                (t !== e.align || r !== l) &&
                o.Z.spring(this.animatedAlignmentOffset, {
                  ...c,
                  toValue: this.getAlignmentOffset(t),
                }).start();
        }
        getAlignmentOffset(e) {
          let {
              width: t,
              itemSize: s,
              currentIndex: n,
              gutter: a,
              items: i,
            } = this.props,
            r = a * g(n, i.length) * 2;
          return e === p
            ? (t - s.width) / 2 + r
            : e === m
              ? t - s.width - a + r
              : a + r;
        }
        getCarouselTranslate() {
          let { itemSize: e, edgeItems: t } = this.props;
          return t * (e.width + e.margin);
        }
        animateToIndex(e, t) {
          let { animatedIndex: s } = this,
            { items: n, edgeItems: a } = this.props;
          a > 0 &&
            (0 === e && t === n.length - 1
              ? s.setValue(-1)
              : 0 === t &&
                e === n.length - 1 &&
                n.length > 2 &&
                s.setValue(n.length)),
            o.Z.spring(s, { ...c, toValue: e }).start();
        }
        updateAnimatedIndex(e, t) {
          let { animatedIndex: s, animatedOpacity: n } = this,
            { animate: a } = this.props;
          a
            ? this.animateToIndex(e, t)
            : o.Z.timing(n, { fromValue: 1, toValue: 0, duration: 100 }).start(
                () => {
                  s.setValue(e),
                    o.Z.timing(n, {
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
            itemSize: s,
            className: n,
          } = this.props;
          return (0, a.jsx)("div", {
            className: l()(d.singleItemWrapper, d.viewport, n),
            children: (0, a.jsx)("div", {
              className: d.singleItem,
              style: { width: s.width, height: s.height },
              children: e(t[0], 0),
            }),
          });
        }
        renderCarouselItems() {
          let e;
          let {
              animatedIndex: t,
              animatedAlignmentOffset: s,
              animatedOpacity: n,
            } = this,
            {
              renderItem: i,
              items: r,
              itemSize: l,
              edgeItems: h,
              gutter: u,
            } = this.props,
            { margin: c, width: p } = l,
            m = this.getCarouselTranslate(),
            g = this.getItemStyle(),
            I = (e = h > 0 ? [...r.slice(-h), ...r, ...r.slice(0, h)] : r).map(
              (e, t) =>
                (0, a.jsx)(
                  "div",
                  {
                    style: g,
                    className: d.item,
                    children: i(e, t - h, this.interpolateValueForItem(t - h)),
                  },
                  t,
                ),
            );
          return (0, a.jsx)(o.Z.div, {
            className: d.carousel,
            style: {
              opacity: n,
              left: o.Z.add(
                t.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-m, -c - p - m - u * (r.length - 1)],
                }),
                s,
              ),
            },
            children: I,
          });
        }
        render() {
          let { items: e, className: t, hideOverflow: s } = this.props;
          if (e.length <= 0) throw Error("Carousel has no items");
          return 1 === e.length
            ? this.renderSingleItem()
            : (0, a.jsx)("div", {
                className: l()({ [d.viewport]: s }, t),
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
                itemSize: { width: e, margin: t, height: s },
              } = this.props;
              return {
                flexBasis: e,
                marginRight: t,
                height: s,
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
      u(I, "defaultProps", {
        animate: !0,
        edgeItems: 2,
        align: p,
        gutter: 0,
        hideOverflow: !0,
      }),
        (t.ZP = (0, h.Z)(I));
    },
    453499: function (e, t, s) {
      s(47120);
      var n,
        a,
        i,
        r,
        l = s(735250),
        o = s(470079),
        h = s(120356),
        d = s.n(h),
        u = s(392711),
        c = s.n(u),
        p = s(846519),
        m = s(481060),
        g = s(570140),
        I = s(578361),
        x = s(768762),
        C = s(259580),
        v = s(585483),
        N = s(981631),
        f = s(689938),
        b = s(665923);
      function P(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      let S = { JUMP: "jump", NEXT: "next", PREVIOUS: "previous" };
      ((r = n || (n = {})).ARROW = "arrow"), (r.CARET = "caret");
      class y extends (a = o.PureComponent) {
        componentDidMount() {
          v.S.subscribe(N.CkL.CAROUSEL_PREV, this.handlePrevious),
            v.S.subscribe(N.CkL.CAROUSEL_NEXT, this.handleNext);
        }
        componentWillUnmount() {
          v.S.unsubscribe(N.CkL.CAROUSEL_PREV, this.handlePrevious),
            v.S.unsubscribe(N.CkL.CAROUSEL_NEXT, this.handleNext);
        }
        render() {
          let {
              current: e,
              count: t,
              includeHitboxPadding: s,
              arrowClassName: n,
              paginationDotClassName: a,
              paginationDotSelectedClassName: i,
              paginationArrowIconType: r = "arrow",
            } = this.props,
            o = d()(b.arrowHitbox, { [b.arrowHitboxPadding]: s }, n);
          return (0, l.jsxs)("div", {
            className: d()(b.controls, this.props.className),
            children: [
              (0, l.jsx)(m.Button, {
                look: m.Button.Looks.BLANK,
                className: o,
                onClick: this.handlePrevious,
                "aria-label": f.Z.Messages.PAGINATION_PREVIOUS,
                children:
                  "caret" === r
                    ? (0, l.jsx)(C.Z, {
                        className: b.arrow,
                        direction: C.Z.Directions.LEFT,
                      })
                    : (0, l.jsx)(x.Z, {
                        className: b.arrow,
                        direction: x.Z.Directions.LEFT,
                      }),
              }),
              (0, l.jsx)("div", {
                className: b.dots,
                children: c().times(t, (t) =>
                  (0, l.jsx)(
                    m.Button,
                    {
                      look: m.Button.Looks.BLANK,
                      size: m.Button.Sizes.NONE,
                      onClick: () => this.handleDotClick(t),
                      className:
                        t === e ? d()(b.dotSelected, i) : d()(b.dotNormal, a),
                      "aria-label": f.Z.Messages.PAGINATION_SLIDE_LABEL.format({
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
                "aria-label": f.Z.Messages.PAGINATION_NEXT,
                children:
                  "caret" === r
                    ? (0, l.jsx)(C.Z, {
                        className: b.arrow,
                        direction: C.Z.Directions.RIGHT,
                      })
                    : (0, l.jsx)(x.Z, {
                        className: b.arrow,
                        direction: x.Z.Directions.RIGHT,
                      }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            P(this, "handleDotClick", (e) => {
              let {
                onSetItem: t,
                onIntentionalChange: s,
                current: n,
              } = this.props;
              null == s || s(n, e, S.JUMP), t(e);
            }),
            P(this, "handleNext", () => {
              let {
                  onIntentionalChange: e,
                  current: t,
                  onChangePage: s,
                } = this.props,
                n = s(1);
              null == e || e(t, n, S.NEXT);
            }),
            P(this, "handlePrevious", () => {
              let {
                  onIntentionalChange: e,
                  current: t,
                  onChangePage: s,
                } = this.props,
                n = s(-1);
              null == e || e(t, n, S.PREVIOUS);
            });
        }
      }
      P(y, "defaultProps", { includeHitboxPadding: !0 });
      class E extends (i = o.PureComponent) {
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
          let s, n, a, i;
          let r =
            ((s = this.props), (n = this.state), !s.initialPaused && !n.paused);
          let l = ((a = e), (i = t), !a.initialPaused && !i.paused);
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
          let s = this.state.visibleIndex + t;
          s < 0 ? (s = e.length - 1) : s > e.length - 1 && (s = 0);
          let { onChangeItem: n } = this.props;
          null == n || n(e[s], this.state.visibleIndex, s);
          let a = t > 0 ? I.n.LEFT : I.n.RIGHT;
          return this.setState({ visibleIndex: s, direction: a }), s;
        }
        render() {
          let {
              items: e,
              renderItem: t,
              className: s,
              slideAnimatorClassName: n,
              slideAnimatorSpringSettings: a,
              slideAnimatorFadeInOut: i,
              paginationClassName: r,
              paginationArrowClassName: o,
              paginationArrowIconType: h,
              paginationDotClassName: u,
              paginationDotSelectedClassName: c,
              themedPagination: p,
              includeHitboxPadding: m,
              style: g,
              aspectRatio: x,
              children: C,
            } = this.props,
            { visibleIndex: v } = this.state;
          return (0, l.jsxs)("div", {
            className: b.root,
            children: [
              (0, l.jsxs)("div", {
                className: d()(b.carouselContainer, s),
                style: g,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                children: [
                  (0, l.jsx)("div", {
                    style: { aspectRatio: x },
                    children: (0, l.jsx)(I.Z, {
                      className: d()(b.carousel, n),
                      step: v,
                      direction: this.getCurrentDirection(),
                      springSettings: a,
                      fadeInOut: i,
                      children: t(e[v], v),
                    }),
                  }),
                  e.length > 1 &&
                    (0, l.jsx)(y, {
                      className: d()(r, p ? b.themedPagination : b.pagination),
                      arrowClassName: o,
                      includeHitboxPadding: m,
                      current: v,
                      count: e.length,
                      onChangePage: (t) => this.changeItem(e, t),
                      onSetItem: this.handleSetItem,
                      onIntentionalChange: this.handleIntentionalChange,
                      paginationArrowIconType: h,
                      paginationDotClassName: u,
                      paginationDotSelectedClassName: c,
                    }),
                ],
              }),
              null != C &&
                C({ step: v, direction: this.getCurrentDirection() }),
            ],
          });
        }
        constructor(e) {
          super(e),
            P(this, "timer", new p.Xp()),
            P(this, "handleWindowFocusChange", (e) => {
              let { focused: t } = e;
              this.setState({ paused: !t });
            }),
            P(this, "getCurrentDirection", () => this.state.direction),
            P(this, "nextItem", () => {
              let { items: e } = this.props;
              this.changeItem(e, 1);
            }),
            P(this, "previousItem", () => {
              let { items: e } = this.props;
              this.changeItem(e, -1);
            }),
            P(this, "handleSetItem", (e) => {
              let { visibleIndex: t } = this.state,
                { items: s } = this.props;
              this.changeItem(s, e - t);
            }),
            P(this, "handleMouseEnter", () => {
              this.setState({ paused: !0 });
            }),
            P(this, "handleMouseLeave", () => {
              this.setState({ paused: !1 });
            }),
            P(this, "handleIntentionalChange", (e, t, s) => {
              let { items: n, onIntentionalChange: a } = this.props;
              return null == a ? void 0 : a(n[t], e, t, s);
            }),
            (this.state = {
              visibleIndex:
                !0 === e.randomize ? c().random(0, e.items.length - 1) : 0,
              direction: I.n.LEFT,
              paused: !1,
            });
        }
      }
      P(E, "defaultProps", { aspectRatio: 16 / 9 }), (t.Z = E);
    },
  },
]);
//# sourceMappingURL=ed5040839e747ce7f1c8.js.map
