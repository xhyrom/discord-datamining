"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11256"],
  {
    33122: function (e, t, s) {
      s.d(t, {
        r: function () {
          return S;
        },
      }),
        s(47120);
      var n,
        i = s(735250),
        a = s(470079),
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
        C = s(283756),
        x = s(524444),
        f = s(585483),
        N = s(981631),
        v = s(161243);
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
        E = { width: 1920, height: 1080 },
        L = { width: 1280, height: 720 },
        y = (e) =>
          (0, x.lV)({
            ...e,
            className: v.videoWrapper,
            mediaPlayerClassName: v.mediaPlayer,
          }),
        O = (e) => (0, i.jsx)(I.Z, { ...e }),
        j = (e) => {
          let t,
            s,
            n,
            {
              item: a,
              size: r,
              onPlay: l,
              onEnded: o,
              onClick: d,
              playable: p,
              volume: m,
              isMuted: g,
              onVolumeChange: I,
              onMute: C,
            } = e;
          if (a.type === N.s9s.YOUTUBE_VIDEO)
            (t = { url: (0, N.n8r)(a.youtubeVideoId), ...E }),
              (s = {
                url: ""
                  .concat((0, N.ivE)(a.youtubeVideoId), "?")
                  .concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                ...L,
              }),
              (n = c.pn.YOUTUBE);
          else {
            let e = null != a.width ? a.width : 0,
              n = null != a.height ? a.height : 0;
            (t = { url: a.thumbnailSrc, width: e, height: n }),
              (s = { url: a.src, proxyURL: a.src, width: e, height: n });
          }
          let f = (0, i.jsx)(u.BC, {
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
            className: v.video,
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
                className: v.itemImageWrapper,
                onClick: d,
                children: f,
              });
        },
        k = () =>
          (0, i.jsx)("div", {
            className: v.paginationVideoOverlay,
            children: (0, i.jsx)(C.Z, {
              inactive: !0,
              className: v.paginationVideoPlayPill,
              renderLinkComponent: x.iT,
            }),
          });
      class M extends (n = a.PureComponent) {
        componentDidMount() {
          f.S.subscribe(N.CkL.CAROUSEL_PREV, this.manualPrevious),
            f.S.subscribe(N.CkL.CAROUSEL_NEXT, this.manualNext);
        }
        componentWillUnmount() {
          f.S.unsubscribe(N.CkL.CAROUSEL_PREV, this.manualPrevious),
            f.S.unsubscribe(N.CkL.CAROUSEL_NEXT, this.manualNext);
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
              hoveringNextItem: a,
            } = this.state,
            r = (0, i.jsx)(g.ZP, {
              items: e,
              itemSize: this.getItemSize(),
              renderItem: this.renderItem,
              currentIndex: t,
              animate: s,
              edgeItems: 2,
            });
          return e.length <= 1
            ? r
            : (0, i.jsxs)("div", {
                className: v.carouselButtonsContainer,
                children: [
                  r,
                  (0, i.jsx)(m.am, {
                    onClick: this.manualPrevious,
                    className: l()(v.arrow, { [v.arrowHovered]: n }),
                  }),
                  (0, i.jsx)(m.Pz, {
                    onClick: this.manualNext,
                    className: l()(v.arrow, { [v.arrowHovered]: a }),
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
            { currentIndex: a, playingVideo: r, hasInteracted: l } = this.state;
          return (0, i.jsxs)(p.Z, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: s,
            className: t,
            disable: r || l || n,
            children: [
              this.renderCarousel(),
              (0, i.jsx)("div", {
                className: v.pagination,
                children: (0, i.jsx)(m.ZP, {
                  renderItem: this.renderPaginationItem,
                  scrollToPadding: 85,
                  items: e,
                  selectedIndex: a,
                  onSetItem: (e) => this.setItem(e, !0),
                  paginationContainerClass: v.scroller,
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
                  state: { currentIndex: i },
                } = this,
                a = (0, g.gN)(i, s.length),
                r = (0, g.gN)(e, s.length),
                l =
                  1 === Math.abs(e - a) ||
                  (e === s.length - 1 && 0 === a) ||
                  (0 === e && a === s.length - 1);
              this.setState({
                playingVideo: !1,
                currentIndex: r,
                animate: l,
                hasInteracted: t,
              }),
                t && null != n && n(s[r], a, r);
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
                ? (0, i.jsx)(h.Clickable, {
                    onClick: () => this.handleCurrentItemClick(e, t),
                    className: v.itemImageWrapper,
                    children: (0, i.jsx)("img", {
                      src: e.src,
                      alt: "",
                      className: v.currentImage,
                    }),
                  })
                : (0, i.jsx)(h.Clickable, {
                    onClick: () => this.setItem(t, !0),
                    className: v.itemImageWrapper,
                    children: (0, i.jsx)("img", {
                      alt: "",
                      className: v.itemImage,
                      src: e.src,
                      draggable: !1,
                    }),
                  }),
            ),
            b(this, "renderItem", (e, t, s) => {
              let { currentIndex: n, volume: a, isMuted: r } = this.state,
                h = t === (0, g.gN)(n, this.props.items.length);
              return (0, i.jsx)(o.Z.div, {
                className: l()(v.item, { [v.currentItem]: h }),
                style: null != s ? this.getStyle(t, s) : null,
                onMouseEnter: h ? null : () => this.handleEdgeItemMouseEnter(t),
                onMouseLeave: h ? null : this.handleEdgeItemMouseLeave,
                children:
                  e.type === N.s9s.VIDEO || e.type === N.s9s.YOUTUBE_VIDEO
                    ? (0, i.jsx)(j, {
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
            b(this, "renderPaginationItem", (e, t) => {
              let { currentIndex: s } = this.state,
                n = s === t;
              return (0, i.jsxs)(
                "div",
                {
                  className: l()(
                    v.paginationItem,
                    n
                      ? v.selectedStorePaginationItem
                      : v.unselectedStorePaginationItem,
                  ),
                  children: [
                    (0, i.jsx)("img", {
                      alt: null == e.alt ? t : e.alt,
                      className: v.storePaginationImg,
                      src: this.getPaginationSrc(e),
                      draggable: !1,
                    }),
                    e.type === N.s9s.YOUTUBE_VIDEO || e.type === N.s9s.VIDEO
                      ? (0, i.jsx)(k, {})
                      : null,
                    n
                      ? (0, i.jsx)("div", { className: v.overlappingBorder })
                      : null,
                  ],
                },
                "page-".concat(t),
              );
            });
        }
      }
      b(M, "defaultProps", { autoplayInterval: 8e3, paused: !1 }),
        (t.Z = (0, d.Z)(M));
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
        i = s(735250),
        a = s(470079),
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
        C = s(981631),
        x = s(31185);
      function f(e, t, s) {
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
      function v(e, t) {
        return ((e % t) + t) % t;
      }
      class b extends a.Component {
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
          return (0, i.jsx)(d.Z.img, {
            src: e.src,
            alt: "",
            className: l()(x.slide, t),
            style: this.getStyle(),
          });
        }
        constructor(...e) {
          super(...e),
            f(this, "state", {
              translate: new d.Z.Value(0),
              opacity: new d.Z.Value(1),
            });
        }
      }
      class P extends (n = a.Component) {
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
          let { currentIndex: s } = this.state,
            { items: n } = this.props;
          let i = (((s + 1) % (e = n.length)) + e) % e;
          let a = (((s - 1) % (t = n.length)) + t) % t;
          this.preloadImage(n[i]), this.preloadImage(n[a]);
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
          let { directionHistory: i, currentIndex: a } = this.state;
          i.push(e - a),
            (e = ((e % (n = this.props.items.length)) + n) % n),
            this.setState({ currentIndex: e, directionHistory: i }),
            null === (t = (s = this.props).onIndexChange) ||
              void 0 === t ||
              t.call(s, e);
        }
        render() {
          var e;
          let { className: t } = this.props,
            { currentIndex: s, directionHistory: n } = this.state,
            { modalCarouselItemClassName: a } = this.props,
            r = this.props.items[s],
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
                    b,
                    { item: r, directionHistory: n, className: a },
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
      f(P, "defaultProps", { startWith: 0 });
    },
    15470: function (e, t, s) {
      s.d(t, {
        i: function () {
          return C;
        },
      }),
        s(47120);
      var n = s(735250),
        i = s(470079),
        a = s(120356),
        r = s.n(a),
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
        C = {
          ...u.Z.rules,
          heading: {
            ...u.Z.rules.heading,
            react(e, t, s) {
              let i = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
              return (0, n.jsx)(
                d.Z,
                { tag: i, children: t(e.content, s) },
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
        x = o().parserFor(C),
        f = o().reactFor(o().ruleOutput(C, "react"));
      class N extends i.PureComponent {
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
              className: i,
              assets: a,
            } = this.props,
            { collapsed: l, collapsable: o } = this.state;
          return (0, n.jsxs)("div", {
            className: i,
            children: [
              (0, n.jsx)("div", {
                className: r()({ [m.collapsed]: o && l }),
                children: (0, n.jsxs)("div", {
                  ref: this.setContentContainerRef,
                  children: [
                    (0, n.jsx)("div", { className: m.blurb, children: s }),
                    (0, n.jsx)(u.Z, {
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
        i = s(470079),
        a = s(481060),
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
        let { index: t, items: s, ...i } = e,
          a = s[t],
          r = 0,
          o = [];
        for (let e of s)
          if (e.type === d.s9s.IMG) {
            let { width: t, height: s, src: n } = e;
            e === a && (r = o.length),
              o.push({ src: c(n), width: t, height: s });
          }
        return (0, n.jsx)(l.Z, { ...i, items: o, startWith: r });
      };
      class m extends i.Component {
        render() {
          let { pageSize: e, ...t } = this.props,
            s = e === h.b.SMALL ? o.Z : r.Z;
          return (0, n.jsx)(s, {
            ...t,
            onCurrentItemClick: this.handleCurrentItemClick,
          });
        }
        constructor(...e) {
          var t, s, i;
          super(...e),
            (t = this),
            (s = "handleCurrentItemClick"),
            (i = (e, t) => {
              e.type === d.s9s.IMG &&
                !(0, a.hasAnyModalOpen)() &&
                (0, a.openModal)((e) =>
                  (0, n.jsx)(a.ModalRoot, {
                    size: a.ModalSize.DYNAMIC,
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
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[s] = i);
        }
      }
      t.Z = m;
    },
    843445: function (e, t, s) {
      s.d(t, {
        b: function () {
          return i;
        },
        x: function () {
          return n;
        },
      });
      let n = 1e3,
        i = Object.freeze({ SMALL: "small", LARGE: "large" });
    },
    9807: function (e, t, s) {
      s(47120), s(411104);
      var n,
        i = s(735250),
        a = s(470079),
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
        C = s(981631),
        x = s(689938),
        f = s(310436);
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
      let v = (e) => {
          let { className: t, ...s } = e;
          return (0, i.jsx)(m.Z, {
            ...s,
            className: l()(f.sizedToParent, t),
            mediaPlayerClassName: f.sizedToParent,
            renderLinkComponent: g.iT,
          });
        },
        b = (e) => {
          let { containerClassName: t, className: s, ...n } = e;
          return (0, i.jsx)(p.Z, { ...n, className: l()(s, t) });
        },
        P = { width: 1280, height: 720 },
        S = { width: 640, height: 360 },
        E = (e) => {
          let t,
            s,
            n,
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
            (t = { url: (0, C.n8r)(a.youtubeVideoId), ...P }),
              (s = {
                url: ""
                  .concat((0, C.ivE)(a.youtubeVideoId), "?")
                  .concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                ...S,
              }),
              (n = u.pn.YOUTUBE);
          else {
            let e = null != a.width ? a.width : 0,
              n = null != a.height ? a.height : 0;
            (t = { url: a.thumbnailSrc, width: e, height: n }),
              (s = { url: a.src, proxyURL: a.src, width: e, height: n });
          }
          return (0, i.jsx)("div", {
            className: f.embedContainer,
            children: (0, i.jsx)(d.BC, {
              className: f.sizedToParent,
              iframeWrapperClassName: f.sizedToParent,
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
              renderVideoComponent: v,
              renderLinkComponent: g.iT,
            }),
          });
        };
      class L extends (n = a.PureComponent) {
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
          let { onCurrentItemClick: s } = this.props;
          null != s && s(e, t), this.setState({ hasInteracted: !0 });
        }
        render() {
          let {
              items: e,
              autoplayInterval: t,
              className: s,
              paused: n,
              themedPagination: a,
            } = this.props,
            { hasInteracted: r } = this.state;
          return (0, i.jsx)(c.Z, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: n || r,
            renderItem: this.renderItem,
            className: l()(f.smallCarousel, s),
            themedPagination: a,
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
                e.type === C.s9s.IMG &&
                  this.setState({
                    imageLoadingStartTime: new Map(
                      this.state.imageLoadingStartTime,
                    ).set(e.src, Date.now()),
                  });
            }),
            N(this, "handleIntentionalChange", (e, t, s, n) => {
              this.setState({ hasInteracted: !0 });
              let { onIntentionalChange: i } = this.props;
              null != i && i(e, t, s, n);
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
              let { isMuted: n, volume: a } = this.state,
                { videoAutoPlay: r } = this.props;
              switch (e.type) {
                case C.s9s.YOUTUBE_VIDEO:
                case C.s9s.VIDEO:
                  s = (0, i.jsx)(E, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: n,
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
                    s = (0, i.jsxs)(i.Fragment, {
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
                children: s,
              });
            });
        }
      }
      N(L, "defaultProps", { paused: !1, videoAutoPlay: !0 }), (t.Z = L);
    },
    817718: function (e, t, s) {
      s.d(t, {
        U3: function () {
          return c;
        },
        XM: function () {
          return d;
        },
        hd: function () {
          return h;
        },
        lI: function () {
          return o;
        },
        py: function () {
          return u;
        },
      });
      var n = s(481060),
        i = s(819640),
        a = s(585483),
        r = s(981631);
      let l = () => i.Z.hasLayers() || (0, n.hasAnyModalOpen)(),
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
        d = {
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
    376641: function (e, t, s) {
      s.d(t, {
        P: function () {
          return a;
        },
      });
      var n = s(817718),
        i = s(981631);
      let a = {
        [i.EkH.MODAL_CAROUSEL_NEXT]: n.XM,
        [i.EkH.MODAL_CAROUSEL_PREV]: n.py,
        [i.EkH.CLOSE_MODAL]: n.U3,
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
      var i = s(120356),
        a = s.n(i),
        r = s(353947);
      function l(e) {
        let { children: t, tag: s, className: i } = e;
        return (
          (s = null != s ? s : "h3"),
          (0, n.jsx)(s, { className: a()(r.title, i), children: t })
        );
      }
    },
    241209: function (e, t, s) {
      var n,
        i,
        a = s(735250),
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
        C = s(112864);
      function x(e, t, s) {
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
      let f = new RegExp(
        "https?://".concat(
          null !== (n = window.GLOBAL_ENV.CDN_HOST) && void 0 !== n ? n : "",
        ),
      );
      function N(e) {
        return "string" == typeof e.content ? e.content : P(e.content);
      }
      let v = {
          ...d().defaultRules,
          heading: {
            ...d().defaultRules.heading,
            react(e, t, s) {
              let n = "h".concat(e.level);
              return (0, a.jsx)(
                c.Z,
                { tag: n, children: t(e.content, s) },
                s.key,
              );
            },
          },
          paragraph: {
            ...d().defaultRules.paragraph,
            react: (e, t, s) =>
              (0, a.jsx)(
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
              (0, a.jsx)(
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
              let i = n.match(e, t, s);
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
            react: (e, t, s) =>
              (0, a.jsx)(
                "code",
                { className: I.codeInline, children: N(e) },
                s.key,
              ),
          },
          codeBlock: {
            ...d().defaultRules.codeBlock,
            react(e, t, n) {
              let i = () =>
                (0, a.jsx)(
                  "pre",
                  {
                    children: (0, a.jsx)("code", {
                      className: o()(C.scrollbarGhostHairline, "hljs"),
                      children: N(e),
                    }),
                  },
                  n.key,
                );
              return (0, a.jsx)(
                u.GI,
                {
                  createPromise: () =>
                    Promise.resolve().then(s.bind(s, 364964)),
                  webpackId: 364964,
                  renderFallback: i,
                  render: (t) => {
                    if (
                      !(e.lang && t.hasLanguage(e.lang)) ||
                      "string" != typeof e.content
                    )
                      return i();
                    {
                      let s = t.highlight(e.lang, e.content, !0);
                      return null == s
                        ? i()
                        : (0, a.jsx)(
                            "pre",
                            {
                              children: (0, a.jsx)("code", {
                                className: o()(
                                  C.scrollbarGhostHairline,
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
        b = d().parserFor(v),
        P = d().reactFor(d().ruleOutput(v, "react"));
      class S extends (i = r.PureComponent) {
        render() {
          let {
              className: e,
              children: t,
              state: s,
              parser: n,
              output: i,
            } = this.props,
            r = i(n("".concat(t, "\n\n"), { inline: !1, ...s }));
          return (0, a.jsx)("div", {
            className: o()(I.markdown, e),
            children: r,
          });
        }
      }
      x(S, "rules", v),
        x(S, "defaultProps", { parser: b, output: P }),
        (t.Z = S);
    },
    44488: function (e, t, s) {
      s.d(t, {
        Pz: function () {
          return g;
        },
        am: function () {
          return m;
        },
      }),
        s(47120);
      var n,
        i = s(735250),
        a = s(470079),
        r = s(120356),
        l = s.n(r),
        o = s(481060),
        h = s(768762),
        d = s(446174);
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
      let c = { CENTER: d.alignCenter, LEFT: d.alignLeft };
      class p extends (n = a.PureComponent) {
        componentDidUpdate(e) {
          let { selectedIndex: t } = this.props;
          e.selectedIndex !== t && this.handleSelectedIndexChange(t);
        }
        render() {
          let {
              renderItem: e,
              items: t,
              vertical: s,
              paginationContainerClass: n,
              align: r,
            } = this.props,
            h = s
              ? d.verticalPaginationItemContainer
              : d.horizontalPaginationItemContainer;
          return (0, i.jsx)(o.AdvancedScrollerAuto, {
            orientation: s ? "vertical" : "horizontal",
            className: l()(h, n, r),
            ref: this.handleSetScrollerRef,
            children: t.map((t, s) =>
              a.cloneElement(e(t, s), {
                onClick: () => this.handlePageClick(s),
                key: s,
                ref: (e) => {
                  this._paginationItemRefs[s] = e;
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
              let s = this._paginationItemRefs[e];
              if (null != s)
                t.scrollIntoViewNode({
                  node: s,
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
      u(p, "Align", c),
        u(p, "defaultProps", {
          scrollToPadding: { top: 0, left: 0, bottom: 0, right: 0 },
          align: c.CENTER,
        });
      class m extends a.PureComponent {
        render() {
          let { className: e } = this.props;
          return (0, i.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.NONE,
            className: l()(d.prevButtonContainer, e),
            onClick: this.handlePrevClick,
            children: (0, i.jsx)(h.Z, {
              className: d.arrow,
              direction: h.Z.Directions.LEFT,
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
            className: l()(d.nextButtonContainer, e),
            onClick: this.handleNextClick,
            children: (0, i.jsx)(h.Z, {
              className: d.arrow,
              direction: h.Z.Directions.RIGHT,
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
    519160: function (e, t, s) {
      s.d(t, {
        gN: function () {
          return g;
        },
      }),
        s(47120),
        s(411104);
      var n,
        i = s(735250),
        a = s(470079),
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
      class I extends (n = a.Component) {
        componentDidMount() {
          this.animatedIndex.setValue(this.props.currentIndex);
        }
        componentDidUpdate(e) {
          let {
              align: t,
              animate: s,
              currentIndex: n,
              items: i,
              width: a,
            } = this.props,
            r = g(n, i.length),
            l = g(e.currentIndex, i.length);
          (r !== l || i.length !== e.items.length) &&
            this.updateAnimatedIndex(r, l),
            a !== e.width
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
              gutter: i,
              items: a,
            } = this.props,
            r = i * g(n, a.length) * 2;
          return e === p
            ? (t - s.width) / 2 + r
            : e === m
              ? t - s.width - i + r
              : i + r;
        }
        getCarouselTranslate() {
          let { itemSize: e, edgeItems: t } = this.props;
          return t * (e.width + e.margin);
        }
        animateToIndex(e, t) {
          let { animatedIndex: s } = this,
            { items: n, edgeItems: i } = this.props;
          i > 0 &&
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
            { animate: i } = this.props;
          i
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
          return (0, i.jsx)("div", {
            className: l()(d.singleItemWrapper, d.viewport, n),
            children: (0, i.jsx)("div", {
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
              renderItem: a,
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
                (0, i.jsx)(
                  "div",
                  {
                    style: g,
                    className: d.item,
                    children: a(e, t - h, this.interpolateValueForItem(t - h)),
                  },
                  t,
                ),
            );
          return (0, i.jsx)(o.Z.div, {
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
            : (0, i.jsx)("div", {
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
        i,
        a,
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
        C = s(768762),
        x = s(259580),
        f = s(585483),
        N = s(981631),
        v = s(689938),
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
      class E extends (i = o.PureComponent) {
        componentDidMount() {
          f.S.subscribe(N.CkL.CAROUSEL_PREV, this.handlePrevious),
            f.S.subscribe(N.CkL.CAROUSEL_NEXT, this.handleNext);
        }
        componentWillUnmount() {
          f.S.unsubscribe(N.CkL.CAROUSEL_PREV, this.handlePrevious),
            f.S.unsubscribe(N.CkL.CAROUSEL_NEXT, this.handleNext);
        }
        render() {
          let {
              current: e,
              count: t,
              includeHitboxPadding: s,
              arrowClassName: n,
              paginationDotClassName: i,
              paginationDotSelectedClassName: a,
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
                "aria-label": v.Z.Messages.PAGINATION_PREVIOUS,
                children:
                  "caret" === r
                    ? (0, l.jsx)(x.Z, {
                        className: b.arrow,
                        direction: x.Z.Directions.LEFT,
                      })
                    : (0, l.jsx)(C.Z, {
                        className: b.arrow,
                        direction: C.Z.Directions.LEFT,
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
                        t === e ? d()(b.dotSelected, a) : d()(b.dotNormal, i),
                      "aria-label": v.Z.Messages.PAGINATION_SLIDE_LABEL.format({
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
                "aria-label": v.Z.Messages.PAGINATION_NEXT,
                children:
                  "caret" === r
                    ? (0, l.jsx)(x.Z, {
                        className: b.arrow,
                        direction: x.Z.Directions.RIGHT,
                      })
                    : (0, l.jsx)(C.Z, {
                        className: b.arrow,
                        direction: C.Z.Directions.RIGHT,
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
      P(E, "defaultProps", { includeHitboxPadding: !0 });
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
          let s, n, i, a;
          let r =
            ((s = this.props), (n = this.state), !s.initialPaused && !n.paused);
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
          let s = this.state.visibleIndex + t;
          s < 0 ? (s = e.length - 1) : s > e.length - 1 && (s = 0);
          let { onChangeItem: n } = this.props;
          null == n || n(e[s], this.state.visibleIndex, s);
          let i = t > 0 ? I.n.LEFT : I.n.RIGHT;
          return this.setState({ visibleIndex: s, direction: i }), s;
        }
        render() {
          let {
              items: e,
              renderItem: t,
              className: s,
              slideAnimatorClassName: n,
              slideAnimatorSpringSettings: i,
              slideAnimatorFadeInOut: a,
              paginationClassName: r,
              paginationArrowClassName: o,
              paginationArrowIconType: h,
              paginationDotClassName: u,
              paginationDotSelectedClassName: c,
              themedPagination: p,
              includeHitboxPadding: m,
              style: g,
              aspectRatio: C,
              children: x,
            } = this.props,
            { visibleIndex: f } = this.state;
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
                    style: { aspectRatio: C },
                    children: (0, l.jsx)(I.Z, {
                      className: d()(b.carousel, n),
                      step: f,
                      direction: this.getCurrentDirection(),
                      springSettings: i,
                      fadeInOut: a,
                      children: t(e[f], f),
                    }),
                  }),
                  e.length > 1 &&
                    (0, l.jsx)(E, {
                      className: d()(r, p ? b.themedPagination : b.pagination),
                      arrowClassName: o,
                      includeHitboxPadding: m,
                      current: f,
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
              null != x &&
                x({ step: f, direction: this.getCurrentDirection() }),
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
              let { items: n, onIntentionalChange: i } = this.props;
              return null == i ? void 0 : i(n[t], e, t, s);
            }),
            (this.state = {
              visibleIndex:
                !0 === e.randomize ? c().random(0, e.items.length - 1) : 0,
              direction: I.n.LEFT,
              paused: !1,
            });
        }
      }
      P(L, "defaultProps", { aspectRatio: 16 / 9 }), (t.Z = L);
    },
  },
]);
//# sourceMappingURL=58594d2cb6a9a24cc213.js.map
