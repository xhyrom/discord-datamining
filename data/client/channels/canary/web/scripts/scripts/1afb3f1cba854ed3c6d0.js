"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18751"],
  {
    33122: function (e, t, n) {
      n.d(t, {
        r: function () {
          return P;
        },
      }),
        n(47120);
      var a,
        i = n(200651),
        s = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(748780),
        d = n(481060),
        c = n(112724),
        u = n(446411),
        h = n(468846),
        p = n(679056),
        m = n(44488),
        g = n(519160),
        b = n(124347),
        f = n(283756),
        C = n(524444),
        I = n(585483),
        x = n(981631),
        _ = n(745747);
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
      function N() {
        var e, t;
        let n =
          ((e = ["grayscale(", ")"]),
          !t && (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
          ));
        return (
          (N = function () {
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
        E = { width: 1280, height: 720 },
        L = (e) =>
          (0, C.lV)({
            ...e,
            className: _.videoWrapper,
            mediaPlayerClassName: _.mediaPlayer,
          }),
        y = (e) => (0, i.jsx)(b.ZP, { ...e }),
        j = (e) => {
          let t,
            n,
            a,
            {
              item: s,
              size: r,
              onPlay: l,
              onEnded: o,
              onClick: c,
              playable: p,
              volume: m,
              isMuted: g,
              onVolumeChange: b,
              onMute: f,
            } = e;
          if (s.type === x.s9s.YOUTUBE_VIDEO)
            (t = { url: (0, x.n8r)(s.youtubeVideoId), ...S }),
              (n = {
                url: ""
                  .concat((0, x.ivE)(s.youtubeVideoId), "?")
                  .concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                ...E,
              }),
              (a = h.pn.YOUTUBE);
          else {
            let e = null != s.width ? s.width : 0,
              a = null != s.height ? s.height : 0;
            (t = { url: s.thumbnailSrc, width: e, height: a }),
              (n = { url: s.src, proxyURL: s.src, width: e, height: a });
          }
          let I = (0, i.jsx)(u.BC, {
            href: null,
            thumbnail: t,
            video: n,
            provider: a,
            allowFullScreen: !0,
            maxHeight: r.height,
            maxWidth: r.width,
            onPlay: l,
            onEnded: o,
            playable: p,
            className: _.video,
            volume: m,
            onVolumeChange: b,
            autoMute: g,
            onMute: f,
            autoPlay: p,
            renderVideoComponent: L,
            renderImageComponent: y,
            renderLinkComponent: C.iT,
          });
          return p
            ? I
            : (0, i.jsx)(d.Clickable, {
                className: _.itemImageWrapper,
                onClick: c,
                children: I,
              });
        },
        k = () =>
          (0, i.jsx)("div", {
            className: _.paginationVideoOverlay,
            children: (0, i.jsx)(f.Z, {
              inactive: !0,
              className: _.paginationVideoPlayPill,
              renderLinkComponent: C.iT,
            }),
          });
      class w extends (a = s.PureComponent) {
        componentDidMount() {
          I.S.subscribe(x.CkL.CAROUSEL_PREV, this.manualPrevious),
            I.S.subscribe(x.CkL.CAROUSEL_NEXT, this.manualNext);
        }
        componentWillUnmount() {
          I.S.unsubscribe(x.CkL.CAROUSEL_PREV, this.manualPrevious),
            I.S.unsubscribe(x.CkL.CAROUSEL_NEXT, this.manualNext);
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
            filter: o.Z.template(N(), n),
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
              hoveringPreviousItem: a,
              hoveringNextItem: s,
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
                className: _.carouselButtonsContainer,
                children: [
                  r,
                  (0, i.jsx)(m.am, {
                    onClick: this.manualPrevious,
                    className: l()(_.arrow, { [_.arrowHovered]: a }),
                  }),
                  (0, i.jsx)(m.Pz, {
                    onClick: this.manualNext,
                    className: l()(_.arrow, { [_.arrowHovered]: s }),
                  }),
                ],
              });
        }
        getPaginationSrc(e) {
          return e.type === x.s9s.YOUTUBE_VIDEO
            ? (0, x.n8r)(e.youtubeVideoId)
            : e.type === x.s9s.IMG
              ? e.src
              : e.type === x.s9s.VIDEO
                ? e.thumbnailSrc
                : null;
        }
        render() {
          let {
              items: e,
              className: t,
              autoplayInterval: n,
              paused: a,
            } = this.props,
            { currentIndex: s, playingVideo: r, hasInteracted: l } = this.state;
          return (0, i.jsxs)(p.Z, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: n,
            className: t,
            disable: r || l || a,
            children: [
              this.renderCarousel(),
              (0, i.jsx)("div", {
                className: _.pagination,
                children: (0, i.jsx)(m.ZP, {
                  renderItem: this.renderPaginationItem,
                  scrollToPadding: 85,
                  items: e,
                  selectedIndex: s,
                  onSetItem: (e) => this.setItem(e, !0),
                  paginationContainerClass: _.scroller,
                  align: e.length < 6 ? m.ZP.Align.LEFT : m.ZP.Align.CENTER,
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            v(this, "state", {
              currentIndex: 0,
              animate: !0,
              playingVideo: !1,
              hasInteracted: !1,
              hoveringPreviousItem: !1,
              hoveringNextItem: !1,
              volume: 1,
              isMuted: !0,
            }),
            v(this, "getItemSize", () => {
              let { width: e } = this.props,
                t = P.MEDIUM;
              return null != e && e < t.width && (t = P.SMALL), t;
            }),
            v(this, "setItem", (e, t) => {
              let {
                  props: { items: n, onIntentionalChange: a },
                  state: { currentIndex: i },
                } = this,
                s = (0, g.gN)(i, n.length),
                r = (0, g.gN)(e, n.length),
                l =
                  1 === Math.abs(e - s) ||
                  (e === n.length - 1 && 0 === s) ||
                  (0 === e && s === n.length - 1);
              this.setState({
                playingVideo: !1,
                currentIndex: r,
                animate: l,
                hasInteracted: t,
              }),
                t && null != a && a(n[r], s, r);
            }),
            v(this, "autoNext", () => {
              this.setItem(this.state.currentIndex + 1, !1);
            }),
            v(this, "manualNext", () => {
              this.setItem(this.state.currentIndex + 1, !0);
            }),
            v(this, "manualPrevious", () => {
              this.setItem(this.state.currentIndex - 1, !0);
            }),
            v(this, "handlePlay", (e) =>
              this.setState({ playingVideo: !0, hasInteracted: !e }),
            ),
            v(this, "handleEnded", () => {
              !this.state.hasInteracted && this.autoNext();
            }),
            v(this, "handleVolumeChange", (e) => {
              this.setState({ volume: e, hasInteracted: !0 });
            }),
            v(this, "handleMute", (e) => {
              this.setState({ isMuted: e, hasInteracted: !0 });
            }),
            v(this, "handleVideoClick", (e) => {
              this.setItem(e, !0);
            }),
            v(this, "handleEdgeItemMouseLeave", () => {
              this.setState({ hoveringPreviousItem: !1, hoveringNextItem: !1 });
            }),
            v(this, "renderCarouselImage", (e, t, n) =>
              n
                ? (0, i.jsx)(d.Clickable, {
                    onClick: () => this.handleCurrentItemClick(e, t),
                    className: _.itemImageWrapper,
                    children: (0, i.jsx)("img", {
                      src: e.src,
                      alt: "",
                      className: _.currentImage,
                    }),
                  })
                : (0, i.jsx)(d.Clickable, {
                    onClick: () => this.setItem(t, !0),
                    className: _.itemImageWrapper,
                    children: (0, i.jsx)("img", {
                      alt: "",
                      className: _.itemImage,
                      src: e.src,
                      draggable: !1,
                    }),
                  }),
            ),
            v(this, "renderItem", (e, t, n) => {
              let { currentIndex: a, volume: s, isMuted: r } = this.state,
                d = t === (0, g.gN)(a, this.props.items.length);
              return (0, i.jsx)(o.Z.div, {
                className: l()(_.item, { [_.currentItem]: d }),
                style: null != n ? this.getStyle(t, n) : null,
                onMouseEnter: d ? null : () => this.handleEdgeItemMouseEnter(t),
                onMouseLeave: d ? null : this.handleEdgeItemMouseLeave,
                children:
                  e.type === x.s9s.VIDEO || e.type === x.s9s.YOUTUBE_VIDEO
                    ? (0, i.jsx)(j, {
                        item: e,
                        size: this.getItemSize(),
                        onPlay: this.handlePlay,
                        onEnded: this.handleEnded,
                        playable: d,
                        onClick: () => this.handleVideoClick(t),
                        volume: s,
                        onVolumeChange: this.handleVolumeChange,
                        isMuted: r,
                        onMute: this.handleMute,
                      })
                    : this.renderCarouselImage(e, t, d),
              });
            }),
            v(this, "renderPaginationItem", (e, t) => {
              let { currentIndex: n } = this.state,
                a = n === t;
              return (0, i.jsxs)(
                "div",
                {
                  className: l()(
                    _.paginationItem,
                    a
                      ? _.selectedStorePaginationItem
                      : _.unselectedStorePaginationItem,
                  ),
                  children: [
                    (0, i.jsx)("img", {
                      alt: null == e.alt ? t : e.alt,
                      className: _.storePaginationImg,
                      src: this.getPaginationSrc(e),
                      draggable: !1,
                    }),
                    e.type === x.s9s.YOUTUBE_VIDEO || e.type === x.s9s.VIDEO
                      ? (0, i.jsx)(k, {})
                      : null,
                    a
                      ? (0, i.jsx)("div", { className: _.overlappingBorder })
                      : null,
                  ],
                },
                "page-".concat(t),
              );
            });
        }
      }
      v(w, "defaultProps", { autoplayInterval: 8e3, paused: !1 }),
        (t.Z = (0, c.Z)(w));
    },
    761705: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(47120),
        n(653041);
      var a,
        i = n(200651),
        s = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(299608),
        d = n.n(o),
        c = n(748780),
        u = n(215569),
        h = n(376641),
        p = n(714338),
        m = n(134432),
        g = n(44488),
        b = n(585483),
        f = n(981631),
        C = n(998294);
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
      let x = { friction: 10, tension: 100 };
      function _(e, t) {
        return ((e % t) + t) % t;
      }
      class v extends s.Component {
        componentWillEnter(e) {
          let { directionHistory: t } = this.props,
            { translate: n, opacity: a } = this.state;
          n.setValue(t[t.length - 1]),
            a.setValue(0),
            e(),
            c.Z.parallel([
              c.Z.timing(a, {
                toValue: 1,
                easing: c.Z.Easing.out(c.Z.Easing.linear),
                duration: 200,
              }),
              c.Z.spring(n, { toValue: 0, ...x }),
            ]).start();
        }
        componentWillLeave(e) {
          let { directionHistory: t } = this.props,
            { opacity: n, translate: a } = this.state;
          c.Z.parallel([
            c.Z.timing(n, {
              toValue: 0,
              easing: c.Z.Easing.in(c.Z.Easing.linear),
              duration: 200,
            }),
            c.Z.spring(a, { toValue: -1 * t[t.length - 1], ...x }),
          ]).start(e);
        }
        getStyle() {
          let { translate: e, opacity: t } = this.state;
          return c.Z.accelerate({
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
          return (0, i.jsx)(c.Z.img, {
            src: e.src,
            alt: "",
            className: l()(C.slide, t),
            style: this.getStyle(),
          });
        }
        constructor(...e) {
          super(...e),
            I(this, "state", {
              translate: new c.Z.Value(0),
              opacity: new c.Z.Value(1),
            });
        }
      }
      class N extends (a = s.Component) {
        componentDidMount() {
          this.preloadNextImages(),
            p.Z.disable(),
            p.Z.enableTemp(h.P),
            b.S.subscribe(f.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
            b.S.subscribe(f.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
        }
        componentWillUnmount() {
          p.Z.disableTemp(),
            b.S.unsubscribe(f.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
            b.S.unsubscribe(f.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
        }
        preloadNextImages() {
          var e, t;
          let { currentIndex: n } = this.state,
            { items: a } = this.props;
          let i = (((n + 1) % (e = a.length)) + e) % e;
          let s = (((n - 1) % (t = a.length)) + t) % t;
          this.preloadImage(a[i]), this.preloadImage(a[s]);
        }
        preloadImage(e) {
          (0, m.po)(e.src);
        }
        componentDidUpdate(e, t) {
          let { currentIndex: n } = this.state;
          n !== t.currentIndex && this.preloadNextImages();
        }
        navigateTo(e) {
          var t, n, a;
          let { directionHistory: i, currentIndex: s } = this.state;
          i.push(e - s),
            (e = ((e % (a = this.props.items.length)) + a) % a),
            this.setState({ currentIndex: e, directionHistory: i }),
            null === (t = (n = this.props).onIndexChange) ||
              void 0 === t ||
              t.call(n, e);
        }
        render() {
          var e;
          let { className: t } = this.props,
            { currentIndex: n, directionHistory: a } = this.state,
            { modalCarouselItemClassName: s } = this.props,
            r = this.props.items[n],
            o = this.props.items;
          return (0, i.jsxs)(u.W, {
            component: "div",
            className: l()(C.wrapper, t),
            children: [
              o.length > 1
                ? (0, i.jsx)(g.am, {
                    className: C.navPrev,
                    onClick: this.gotoPrev,
                  })
                : null,
              null !== (e = r.component) && void 0 !== e
                ? e
                : (0, i.jsx)(
                    v,
                    { item: r, directionHistory: a, className: s },
                    r.src,
                  ),
              o.length > 1
                ? (0, i.jsx)(g.Pz, {
                    className: C.navNext,
                    onClick: this.gotoNext,
                  })
                : null,
            ],
          });
        }
        constructor(e) {
          super(e),
            I(this, "gotoNext", () => {
              let { currentIndex: e } = this.state;
              this.navigateTo(e + 1);
            }),
            I(this, "gotoPrev", () => {
              let { currentIndex: e } = this.state;
              this.navigateTo(e - 1);
            }),
            I(this, "gotoNextThrottled", d()(this.gotoNext, 300)),
            I(this, "gotoPrevThrottled", d()(this.gotoPrev, 300)),
            (this.state = { currentIndex: e.startWith, directionHistory: [] });
        }
      }
      I(N, "defaultProps", { startWith: 0 });
    },
    15470: function (e, t, n) {
      n.d(t, {
        i: function () {
          return f;
        },
      }),
        n(47120);
      var a = n(200651),
        i = n(192379),
        s = n(120356),
        r = n.n(s),
        l = n(302454),
        o = n.n(l),
        d = n(481060),
        c = n(770146),
        u = n(241209),
        h = n(73346),
        p = n(388032),
        m = n(17142);
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
      let b = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
        f = {
          ...u.Z.rules,
          heading: {
            ...u.Z.rules.heading,
            react(e, t, n) {
              let i = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
              return (0, a.jsx)(
                c.Z,
                { tag: i, children: t(e.content, n) },
                n.key,
              );
            },
          },
          assetImage: {
            order: 5,
            match(e, t) {
              let n = e.match(b);
              if (null != n) {
                let e = n[2],
                  a = t.assets.find((t) => t.id === e);
                return null != a && [...n, a, t.applicationId];
              }
              return !1;
            },
            parse: (e) => ({ asset: e[3], alt: e[1], applicationId: e[4] }),
            react: (e, t, n) =>
              (0, a.jsx)(
                "div",
                {
                  className: m.assetWrapper,
                  children: (0, a.jsx)("img", {
                    alt: e.alt,
                    src: (0, h._W)(e.applicationId, e.asset, 800),
                    className: m.asset,
                  }),
                },
                n.key,
              ),
          },
        },
        C = o().parserFor(f),
        I = o().reactFor(o().ruleOutput(f, "react"));
      class x extends i.PureComponent {
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
              assets: s,
            } = this.props,
            { collapsed: l, collapsable: o } = this.state;
          return (0, a.jsxs)("div", {
            className: i,
            children: [
              (0, a.jsx)("div", {
                className: r()({ [m.collapsed]: o && l }),
                children: (0, a.jsxs)("div", {
                  ref: this.setContentContainerRef,
                  children: [
                    (0, a.jsx)("div", { className: m.blurb, children: n }),
                    (0, a.jsx)(u.Z, {
                      className: m.description,
                      parser: C,
                      output: I,
                      state: { assets: s, applicationId: e },
                      children: t,
                    }),
                  ],
                }),
              }),
              o
                ? (0, a.jsx)(d.Button, {
                    className: m.toggleCollapseButton,
                    onClick: this.handleToggleCollapse,
                    color: d.Button.Colors.PRIMARY,
                    children: l
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
      t.Z = x;
    },
    445986: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return h;
        },
      }),
        n(653041),
        n(47120);
      var a = n(200651),
        i = n(192379),
        s = n(481060),
        r = n(33122),
        l = n(761705),
        o = n(9807),
        d = n(843445),
        c = n(981631),
        u = n(388032);
      function h(e) {
        return "".concat(e.split("?")[0], "?size=").concat(2048);
      }
      let p = (e) => {
        let { index: t, items: n, ...i } = e,
          s = n[t],
          r = 0,
          o = [];
        for (let e of n)
          if (e.type === c.s9s.IMG) {
            let { width: t, height: n, src: a } = e;
            e === s && (r = o.length),
              o.push({ src: h(a), width: t, height: n });
          }
        return (0, a.jsx)(l.Z, { ...i, items: o, startWith: r });
      };
      class m extends i.Component {
        render() {
          let { pageSize: e, ...t } = this.props,
            n = e === d.b.SMALL ? o.Z : r.Z;
          return (0, a.jsx)(n, {
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
              e.type === c.s9s.IMG &&
                !(0, s.hasAnyModalOpen)() &&
                (0, s.openModal)((e) =>
                  (0, a.jsx)(s.ModalRoot, {
                    size: s.ModalSize.DYNAMIC,
                    "aria-label": u.intl.string(u.t.X4IxWF),
                    ...e,
                    children: (0, a.jsx)(p, {
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
          return a;
        },
      });
      let a = 1e3,
        i = Object.freeze({ SMALL: "small", LARGE: "large" });
    },
    9807: function (e, t, n) {
      n(47120), n(411104);
      var a,
        i = n(200651),
        s = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(481060),
        d = n(33122),
        c = n(446411),
        u = n(468846),
        h = n(453499),
        p = n(124347),
        m = n(80966),
        g = n(524444),
        b = n(843445),
        f = n(981631),
        C = n(388032),
        I = n(862756);
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
      let _ = (e) => {
          let { className: t, ...n } = e;
          return (0, i.jsx)(m.Z, {
            ...n,
            className: l()(I.sizedToParent, t),
            mediaPlayerClassName: I.sizedToParent,
            renderLinkComponent: g.iT,
          });
        },
        v = (e) => {
          let { containerClassName: t, className: n, ...a } = e;
          return (0, i.jsx)(p.ZP, { ...a, className: l()(n, t) });
        },
        N = { width: 1280, height: 720 },
        P = { width: 640, height: 360 },
        S = (e) => {
          let t,
            n,
            a,
            {
              item: s,
              onPlay: r,
              volume: l,
              onVolumeChange: o,
              onMute: h,
              isMuted: p,
              autoPlay: m,
            } = e;
          if (s.type === f.s9s.YOUTUBE_VIDEO)
            (t = { url: (0, f.n8r)(s.youtubeVideoId), ...N }),
              (n = {
                url: ""
                  .concat((0, f.ivE)(s.youtubeVideoId), "?")
                  .concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                ...P,
              }),
              (a = u.pn.YOUTUBE);
          else {
            let e = null != s.width ? s.width : 0,
              a = null != s.height ? s.height : 0;
            (t = { url: s.thumbnailSrc, width: e, height: a }),
              (n = { url: s.src, proxyURL: s.src, width: e, height: a });
          }
          return (0, i.jsx)("div", {
            className: I.embedContainer,
            children: (0, i.jsx)(c.BC, {
              className: I.sizedToParent,
              iframeWrapperClassName: I.sizedToParent,
              href: null,
              thumbnail: t,
              video: n,
              provider: a,
              maxHeight: d.r.SMALL.height,
              maxWidth: b.b.SMALL,
              onPlay: r,
              playable: !0,
              volume: l,
              onVolumeChange: o,
              autoMute: p,
              onMute: h,
              autoPlay: m,
              renderImageComponent: v,
              renderVideoComponent: _,
              renderLinkComponent: g.iT,
            }),
          });
        };
      class E extends (a = s.PureComponent) {
        componentDidMount() {
          let { items: e } = this.props;
          e.length > 0 &&
            e[0].type === f.s9s.IMG &&
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
              paused: a,
              themedPagination: s,
            } = this.props,
            { hasInteracted: r } = this.state;
          return (0, i.jsx)(h.Z, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: a || r,
            renderItem: this.renderItem,
            className: l()(I.smallCarousel, n),
            themedPagination: s,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
          });
        }
        constructor(...e) {
          super(...e),
            x(this, "state", {
              hasInteracted: !1,
              isVideoPlaying: !1,
              isMuted: !0,
              volume: 1,
              status: new Map(),
              imageLoadingStartTime: new Map(),
            }),
            x(this, "handlePlay", (e) => {
              this.setState({ isVideoPlaying: !0, hasInteracted: !e });
            }),
            x(this, "handleVolumeChange", (e) => {
              this.setState({ volume: e, hasInteracted: !0 });
            }),
            x(this, "handleMute", (e) => {
              this.setState({ isMuted: e, hasInteracted: !0 });
            }),
            x(this, "handleChangeItem", (e) => {
              this.setState({ isVideoPlaying: !1 }),
                e.type === f.s9s.IMG &&
                  this.setState({
                    imageLoadingStartTime: new Map(
                      this.state.imageLoadingStartTime,
                    ).set(e.src, Date.now()),
                  });
            }),
            x(this, "handleIntentionalChange", (e, t, n, a) => {
              this.setState({ hasInteracted: !0 });
              let { onIntentionalChange: i } = this.props;
              null != i && i(e, t, n, a);
            }),
            x(this, "handleOnErrorImg", (e) => {
              this.setState({
                status: new Map(this.state.status).set(e.target.src, "errored"),
              });
            }),
            x(this, "handleOnLoadImg", (e) => {
              let { onImageLoad: t } = this.props;
              this.setState({
                status: new Map(this.state.status).set(e.target.src, "loaded"),
              });
              let n = this.state.imageLoadingStartTime.get(e.target.src),
                a = null != n ? Date.now() - n : void 0;
              null == t || t({ src: e.target.src, loadTimeMs: a });
            }),
            x(this, "renderItem", (e, t) => {
              let n;
              let { isMuted: a, volume: s } = this.state,
                { videoAutoPlay: r } = this.props;
              switch (e.type) {
                case f.s9s.YOUTUBE_VIDEO:
                case f.s9s.VIDEO:
                  n = (0, i.jsx)(S, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: a,
                    volume: s,
                    onVolumeChange: this.handleVolumeChange,
                    onMute: this.handleMute,
                    autoPlay: r,
                  });
                  break;
                case f.s9s.IMG:
                  if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, i.jsx)(o.Heading, {
                      variant: "heading-xl/semibold",
                      children: C.intl.string(C.t.UvDfMz),
                    });
                    return (0, i.jsx)("div", {
                      className: I.errorContainer,
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
                        : C.intl.string(C.t.X4IxWF);
                    n = (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(o.Spinner, {
                          className: l()(I.spinner, {
                            [I.hidden]: void 0 !== this.state.status.get(e.src),
                          }),
                          type: o.Spinner.Type.SPINNING_CIRCLE,
                        }),
                        (0, i.jsx)("img", {
                          onError: this.handleOnErrorImg,
                          onLoad: this.handleOnLoadImg,
                          className: l()(I.smallCarouselImage, {
                            [I.hidden]:
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
                className: I.smallCarouselItem,
                onClick: () => this.handleCurrentItemClick(e, t),
                children: n,
              });
            });
        }
      }
      x(E, "defaultProps", { paused: !1, videoAutoPlay: !0 }), (t.Z = E);
    },
    817718: function (e, t, n) {
      n.d(t, {
        U3: function () {
          return h;
        },
        XM: function () {
          return c;
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
      var a = n(481060),
        i = n(819640),
        s = n(585483),
        r = n(981631);
      let l = () => i.Z.hasLayers() || (0, a.hasAnyModalOpen)(),
        o = {
          binds: ["right"],
          comboKeysBindGlobal: !0,
          action() {
            if (!l()) return s.S.dispatch(r.CkL.CAROUSEL_NEXT), !1;
          },
        },
        d = {
          binds: ["left"],
          comboKeysBindGlobal: !0,
          action() {
            if (!l()) return s.S.dispatch(r.CkL.CAROUSEL_PREV), !1;
          },
        },
        c = {
          binds: ["right", "down", "space"],
          comboKeysBindGlobal: !0,
          action: () => (s.S.dispatch(r.CkL.MODAL_CAROUSEL_NEXT), !1),
        },
        u = {
          binds: ["left", "up"],
          comboKeysBindGlobal: !0,
          action: () => (s.S.dispatch(r.CkL.MODAL_CAROUSEL_PREV), !1),
        },
        h = {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action() {
            if (s.S.hasSubscribers(r.CkL.MODAL_CLOSE))
              return s.S.dispatch(r.CkL.MODAL_CLOSE), !1;
          },
        };
    },
    376641: function (e, t, n) {
      n.d(t, {
        P: function () {
          return s;
        },
        v: function () {
          return r;
        },
      });
      var a = n(817718),
        i = n(981631);
      let s = {
          [i.EkH.MODAL_CAROUSEL_NEXT]: a.XM,
          [i.EkH.MODAL_CAROUSEL_PREV]: a.py,
          [i.EkH.CLOSE_MODAL]: a.U3,
        },
        r = { [i.EkH.CLOSE_MODAL]: a.U3 };
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
      var a = n(981631);
      let i = (e) => {
        let { id: t, name: n, locale: i } = e,
          s = "https://"
            .concat(a.xr4, "/hc/")
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
          "".concat(s, "?").concat(r.toString())
        );
      };
    },
    214912: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var a = n(200651);
      n(192379);
      var i = n(120356),
        s = n.n(i),
        r = n(481060),
        l = n(410030),
        o = n(686546),
        d = n(565138),
        c = n(372769),
        u = n(134432),
        h = n(601964),
        p = n(768581),
        m = n(981631),
        g = n(388032),
        b = n(470946),
        f = n(129512),
        C = n(330065);
      function I(e) {
        let { guild: t, className: n, onClick: i } = e,
          I = (0, l.ZP)(),
          x = new h.ZP({ name: t.name, icon: t.icon }),
          _ = p.ZP.getGuildDiscoverySplashURL({
            id: t.id,
            splash: t.discovery_splash,
            size: 192 * (0, u.x_)(),
          }),
          v =
            null != _
              ? _
              : (function (e) {
                  switch (e) {
                    case m.BRd.DARK:
                      return f;
                    case m.BRd.LIGHT:
                      return C;
                  }
                })(I),
          N = p.ZP.getGuildIconURL({ id: t.id, icon: t.icon, size: 50 });
        return (0, a.jsxs)(r.Clickable, {
          className: s()(b.card, n),
          onClick: i,
          "aria-label": g.intl.string(g.t.RB4L29),
          children: [
            (0, a.jsxs)("div", {
              className: b.cardHeader,
              children: [
                (0, a.jsx)("img", {
                  src: v,
                  alt: "",
                  className: b.splashImage,
                }),
                (0, a.jsx)("div", {
                  className: b.guildIcon,
                  children: (0, a.jsx)(o.ZP, {
                    mask: o.ZP.Masks.AVATAR_DEFAULT,
                    width: 58,
                    height: 58,
                    children: (0, a.jsx)("div", {
                      className: b.iconMask,
                      children: (0, a.jsx)(d.Z, {
                        className: b.__invalid_icon,
                        iconSrc: N,
                        guild: x,
                        size: d.Z.Sizes.LARGE,
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: b.cardDetails,
              children: [
                (0, a.jsxs)("div", {
                  className: b.guildNameWrapper,
                  children: [
                    (0, a.jsx)(c.Z, {
                      className: b.guildBadge,
                      guild: t,
                      tooltipColor: r.Tooltip.Colors.PRIMARY,
                    }),
                    (0, a.jsx)(r.Heading, {
                      variant: "heading-md/semibold",
                      className: b.guildName,
                      children: t.name,
                    }),
                  ],
                }),
                (0, a.jsx)(r.Text, {
                  className: b.guildDescription,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  lineClamp: 2,
                  children: t.description,
                }),
                (0, a.jsx)("div", {
                  className: b.memberInfo,
                  children: (0, a.jsxs)("div", {
                    className: b.memberCountWrapper,
                    children: [
                      (0, a.jsx)(r.UserIcon, {
                        color: "currentColor",
                        className: b.memberCountIcon,
                        size: "xs",
                      }),
                      (0, a.jsx)(r.Text, {
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
      var a = n(200651);
      n(192379);
      var i = n(302454),
        s = n.n(i),
        r = n(481060),
        l = n(447543),
        o = n(15470),
        d = n(960904),
        c = n(830121),
        u = n(746878),
        h = n(241209);
      let p = /^discord.gg\/[a-zA-Z0-9-]+/,
        m = {
          ...h.Z.rules,
          heading: { ...o.i.heading },
          image: { ...s().defaultRules.image },
          inviteLink: {
            order: h.Z.rules.link.order + 1,
            match: (e, t) => (t.inline ? p.exec(e) : null),
            parse: (e, t, n) => {
              let a = (0, c.zO)(e[0]);
              return null == a || a.type !== d.g.INVITE
                ? { type: "text", content: e[0] }
                : {
                    type: "inviteLink",
                    content: [{ type: "text", content: e[0] }],
                    onClick: () => {
                      var e;
                      l.Z.acceptInviteAndTransitionToInviteChannel({
                        inviteKey: a.code,
                        context: { location: "Application Directory" },
                      }),
                        null === (e = n.closeModal) ||
                          void 0 === e ||
                          e.call(n);
                    },
                  };
            },
            react: (e, t, n) =>
              (0, a.jsx)(
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
      t.Z = m;
    },
    290247: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(200651);
      n(192379);
      var i = n(120356),
        s = n.n(i),
        r = n(481060),
        l = n(798058);
      function o(e) {
        let { supportedLanguages: t } = e;
        return (0, a.jsx)("ul", {
          className: l.outerContainer,
          children: t.map((e) =>
            (0, a.jsx)(
              "li",
              {
                className: s()(l.innerContainer, l.languageItem),
                children: (0, a.jsx)(r.Text, {
                  variant: "text-md/normal",
                  children: e,
                }),
              },
              e,
            ),
          ),
        });
      }
    },
    860719: function (e, t, n) {
      n.d(t, {
        w: function () {
          return i;
        },
      }),
        n(789020);
      var a = n(85025);
      function i(e) {
        let { flags: t } = e,
          n = (0, a.O)(t),
          i =
            null != n &&
            ((null == n ? void 0 : n.messageContent) ||
              (null == n ? void 0 : n.messageContentLimited)),
          s =
            null != n &&
            ((null == n ? void 0 : n.guildPresences) ||
              (null == n ? void 0 : n.guildPresencesLimited)),
          r =
            null != n &&
            ((null == n ? void 0 : n.guildMembers) ||
              (null == n ? void 0 : n.guildMembersLimited));
        return {
          hasMessageContent: i,
          hasGuildPresences: s,
          hasGuildMembers: r,
          hasIntents: i || s || r,
        };
      }
    },
    85025: function (e, t, n) {
      n.d(t, {
        O: function () {
          return s;
        },
      });
      var a = n(630388),
        i = n(981631);
      function s(e) {
        if (null != e)
          return {
            guildPresences: (0, a.yE)(e, i.udG.GATEWAY_PRESENCE),
            guildMembers: (0, a.yE)(e, i.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, a.yE)(e, i.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, a.yE)(e, i.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, a.yE)(
              e,
              i.udG.GATEWAY_GUILD_MEMBERS_LIMITED,
            ),
            messageContentLimited: (0, a.yE)(
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
      var a = n(200651);
      n(192379);
      var i = n(120356),
        s = n.n(i),
        r = n(62456);
      function l(e) {
        let { children: t, tag: n, className: i } = e;
        return (
          (n = null != n ? n : "h3"),
          (0, a.jsx)(n, { className: s()(r.title, i), children: t })
        );
      }
    },
    241209: function (e, t, n) {
      var a,
        i,
        s = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        d = n(302454),
        c = n.n(d),
        u = n(663993),
        h = n(770146),
        p = n(772096),
        m = n(428595),
        g = n(532901),
        b = n(230568),
        f = n(110933);
      function C(e, t, n) {
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
      let I = new RegExp(
        "https?://".concat(
          null !== (a = window.GLOBAL_ENV.CDN_HOST) && void 0 !== a ? a : "",
        ),
      );
      function x(e) {
        return "string" == typeof e.content ? e.content : N(e.content);
      }
      let _ = {
          ...c().defaultRules,
          heading: {
            ...c().defaultRules.heading,
            react(e, t, n) {
              let a = "h".concat(e.level);
              return (0, s.jsx)(
                h.Z,
                { tag: a, children: t(e.content, n) },
                n.key,
              );
            },
          },
          paragraph: {
            ...c().defaultRules.paragraph,
            react: (e, t, n) =>
              (0, s.jsx)(
                "div",
                { className: b.paragraph, children: t(e.content, n) },
                n.key,
              ),
          },
          strong: { ...c().defaultRules.strong, order: 6 },
          em: { ...c().defaultRules.em, order: 6 },
          u: { ...c().defaultRules.u, order: 5 },
          del: { ...c().defaultRules.del, order: 6 },
          link: {
            ...p.ZP,
            ...(0, g.Z)({ enableBuildOverrides: !1 }),
            order: 6,
          },
          blockQuote: {
            ...c().defaultRules.blockQuote,
            react: (e, t, n) =>
              (0, s.jsx)(
                "blockquote",
                { className: b.blockquote, children: x(e) },
                n.key,
              ),
          },
          image: {
            ...c().defaultRules.image,
            order: 6,
            match(e, t, n) {
              let a = c().defaultRules.image;
              if (null == a || null == a.match) return !1;
              let i = a.match(e, t, n);
              if (null != i && Array.isArray(i) && i.length >= 3) {
                let e = i[2];
                if ("string" == typeof e) return null != e.match(I) ? i : null;
              }
              return !1;
            },
          },
          inlineCode: {
            ...m.Z.RULES.inlineCode,
            order: 6,
            react: (e, t, n) =>
              (0, s.jsx)(
                "code",
                { className: b.codeInline, children: x(e) },
                n.key,
              ),
          },
          codeBlock: {
            ...c().defaultRules.codeBlock,
            react(e, t, a) {
              let i = () =>
                (0, s.jsx)(
                  "pre",
                  {
                    children: (0, s.jsx)("code", {
                      className: o()(f.scrollbarGhostHairline, "hljs"),
                      children: x(e),
                    }),
                  },
                  a.key,
                );
              return (0, s.jsx)(
                u.GI,
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
                        : (0, s.jsx)(
                            "pre",
                            {
                              children: (0, s.jsx)("code", {
                                className: o()(
                                  f.scrollbarGhostHairline,
                                  "hljs",
                                  n.language,
                                ),
                                dangerouslySetInnerHTML: { __html: n.value },
                              }),
                            },
                            a.key,
                          );
                    }
                  },
                },
                a.key,
              );
            },
          },
        },
        v = c().parserFor(_),
        N = c().reactFor(c().ruleOutput(_, "react"));
      class P extends (i = r.PureComponent) {
        render() {
          let {
              className: e,
              children: t,
              state: n,
              parser: a,
              output: i,
            } = this.props,
            r = i(a("".concat(t, "\n\n"), { inline: !1, ...n }));
          return (0, s.jsx)("div", {
            className: o()(b.markdown, e),
            children: r,
          });
        }
      }
      C(P, "rules", _),
        C(P, "defaultProps", { parser: v, output: N }),
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
      var a,
        i = n(200651),
        s = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(481060),
        d = n(768762),
        c = n(943142);
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
      let h = { CENTER: c.alignCenter, LEFT: c.alignLeft };
      class p extends (a = s.PureComponent) {
        componentDidUpdate(e) {
          let { selectedIndex: t } = this.props;
          e.selectedIndex !== t && this.handleSelectedIndexChange(t);
        }
        render() {
          let {
              renderItem: e,
              items: t,
              vertical: n,
              paginationContainerClass: a,
              align: r,
            } = this.props,
            d = n
              ? c.verticalPaginationItemContainer
              : c.horizontalPaginationItemContainer;
          return (0, i.jsx)(o.AdvancedScrollerAuto, {
            orientation: n ? "vertical" : "horizontal",
            className: l()(d, a, r),
            ref: this.handleSetScrollerRef,
            children: t.map((t, n) =>
              s.cloneElement(e(t, n), {
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
      u(p, "Align", h),
        u(p, "defaultProps", {
          scrollToPadding: { top: 0, left: 0, bottom: 0, right: 0 },
          align: h.CENTER,
        });
      class m extends s.PureComponent {
        render() {
          let { className: e } = this.props;
          return (0, i.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.NONE,
            className: l()(c.prevButtonContainer, e),
            onClick: this.handlePrevClick,
            children: (0, i.jsx)(d.Z, {
              className: c.arrow,
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
      class g extends s.PureComponent {
        render() {
          let { className: e } = this.props;
          return (0, i.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.NONE,
            className: l()(c.nextButtonContainer, e),
            onClick: this.handleNextClick,
            children: (0, i.jsx)(d.Z, {
              className: c.arrow,
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
      var a,
        i = n(200651),
        s = n(192379),
        r = n(120356),
        l = n.n(r),
        o = n(748780),
        d = n(112724),
        c = n(91628);
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
      let h = { tension: 7, friction: 5, overshootClamping: !0 },
        p = "center",
        m = "right";
      function g(e, t) {
        return ((e % t) + t) % t;
      }
      class b extends (a = s.Component) {
        componentDidMount() {
          this.animatedIndex.setValue(this.props.currentIndex);
        }
        componentDidUpdate(e) {
          let {
              align: t,
              animate: n,
              currentIndex: a,
              items: i,
              width: s,
            } = this.props,
            r = g(a, i.length),
            l = g(e.currentIndex, i.length);
          (r !== l || i.length !== e.items.length) &&
            this.updateAnimatedIndex(r, l),
            s !== e.width
              ? this.animatedAlignmentOffset.setValue(
                  this.getAlignmentOffset(t),
                )
              : n &&
                (t !== e.align || r !== l) &&
                o.Z.spring(this.animatedAlignmentOffset, {
                  ...h,
                  toValue: this.getAlignmentOffset(t),
                }).start();
        }
        getAlignmentOffset(e) {
          let {
              width: t,
              itemSize: n,
              currentIndex: a,
              gutter: i,
              items: s,
            } = this.props,
            r = i * g(a, s.length) * 2;
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
            { items: a, edgeItems: i } = this.props;
          i > 0 &&
            (0 === e && t === a.length - 1
              ? n.setValue(-1)
              : 0 === t &&
                e === a.length - 1 &&
                a.length > 2 &&
                n.setValue(a.length)),
            o.Z.spring(n, { ...h, toValue: e }).start();
        }
        updateAnimatedIndex(e, t) {
          let { animatedIndex: n, animatedOpacity: a } = this,
            { animate: i } = this.props;
          i
            ? this.animateToIndex(e, t)
            : o.Z.timing(a, { fromValue: 1, toValue: 0, duration: 100 }).start(
                () => {
                  n.setValue(e),
                    o.Z.timing(a, {
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
            className: a,
          } = this.props;
          return (0, i.jsx)("div", {
            className: l()(c.singleItemWrapper, c.viewport, a),
            children: (0, i.jsx)("div", {
              className: c.singleItem,
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
              animatedOpacity: a,
            } = this,
            {
              renderItem: s,
              items: r,
              itemSize: l,
              edgeItems: d,
              gutter: u,
            } = this.props,
            { margin: h, width: p } = l,
            m = this.getCarouselTranslate(),
            g = this.getItemStyle(),
            b = (e = d > 0 ? [...r.slice(-d), ...r, ...r.slice(0, d)] : r).map(
              (e, t) =>
                (0, i.jsx)(
                  "div",
                  {
                    style: g,
                    className: c.item,
                    children: s(e, t - d, this.interpolateValueForItem(t - d)),
                  },
                  t,
                ),
            );
          return (0, i.jsx)(o.Z.div, {
            className: c.carousel,
            style: {
              opacity: a,
              left: o.Z.add(
                t.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-m, -h - p - m - u * (r.length - 1)],
                }),
                n,
              ),
            },
            children: b,
          });
        }
        render() {
          let { items: e, className: t, hideOverflow: n } = this.props;
          if (e.length <= 0) throw Error("Carousel has no items");
          return 1 === e.length
            ? this.renderSingleItem()
            : (0, i.jsx)("div", {
                className: l()({ [c.viewport]: n }, t),
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
      u(b, "defaultProps", {
        animate: !0,
        edgeItems: 2,
        align: p,
        gutter: 0,
        hideOverflow: !0,
      }),
        (t.ZP = (0, d.Z)(b));
    },
    453499: function (e, t, n) {
      n(47120);
      var a,
        i,
        s,
        r,
        l = n(200651),
        o = n(192379),
        d = n(120356),
        c = n.n(d),
        u = n(392711),
        h = n.n(u),
        p = n(846519),
        m = n(481060),
        g = n(570140),
        b = n(578361),
        f = n(768762),
        C = n(259580),
        I = n(585483),
        x = n(981631),
        _ = n(388032),
        v = n(644279);
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
      let P = { JUMP: "jump", NEXT: "next", PREVIOUS: "previous" };
      ((r = a || (a = {})).ARROW = "arrow"), (r.CARET = "caret");
      class S extends (i = o.PureComponent) {
        componentDidMount() {
          I.S.subscribe(x.CkL.CAROUSEL_PREV, this.handlePrevious),
            I.S.subscribe(x.CkL.CAROUSEL_NEXT, this.handleNext);
        }
        componentWillUnmount() {
          I.S.unsubscribe(x.CkL.CAROUSEL_PREV, this.handlePrevious),
            I.S.unsubscribe(x.CkL.CAROUSEL_NEXT, this.handleNext);
        }
        render() {
          let {
              current: e,
              count: t,
              includeHitboxPadding: n,
              arrowClassName: a,
              paginationDotClassName: i,
              paginationDotSelectedClassName: s,
              paginationArrowIconType: r = "arrow",
            } = this.props,
            o = c()(v.arrowHitbox, { [v.arrowHitboxPadding]: n }, a);
          return (0, l.jsxs)("div", {
            className: c()(v.controls, this.props.className),
            children: [
              (0, l.jsx)(m.Button, {
                look: m.Button.Looks.BLANK,
                className: o,
                onClick: this.handlePrevious,
                "aria-label": _.intl.string(_.t.vgfxaG),
                children:
                  "caret" === r
                    ? (0, l.jsx)(C.Z, {
                        className: v.arrow,
                        direction: C.Z.Directions.LEFT,
                      })
                    : (0, l.jsx)(f.Z, {
                        className: v.arrow,
                        direction: f.Z.Directions.LEFT,
                      }),
              }),
              (0, l.jsx)("div", {
                className: v.dots,
                children: h().times(t, (t) =>
                  (0, l.jsx)(
                    m.Button,
                    {
                      look: m.Button.Looks.BLANK,
                      size: m.Button.Sizes.NONE,
                      onClick: () => this.handleDotClick(t),
                      className:
                        t === e ? c()(v.dotSelected, s) : c()(v.dotNormal, i),
                      "aria-label": _.intl.formatToPlainString(_.t["2SXOrK"], {
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
                "aria-label": _.intl.string(_.t.XiOHRU),
                children:
                  "caret" === r
                    ? (0, l.jsx)(C.Z, {
                        className: v.arrow,
                        direction: C.Z.Directions.RIGHT,
                      })
                    : (0, l.jsx)(f.Z, {
                        className: v.arrow,
                        direction: f.Z.Directions.RIGHT,
                      }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            N(this, "handleDotClick", (e) => {
              let {
                onSetItem: t,
                onIntentionalChange: n,
                current: a,
              } = this.props;
              null == n || n(a, e, P.JUMP), t(e);
            }),
            N(this, "handleNext", () => {
              let {
                  onIntentionalChange: e,
                  current: t,
                  onChangePage: n,
                } = this.props,
                a = n(1);
              null == e || e(t, a, P.NEXT);
            }),
            N(this, "handlePrevious", () => {
              let {
                  onIntentionalChange: e,
                  current: t,
                  onChangePage: n,
                } = this.props,
                a = n(-1);
              null == e || e(t, a, P.PREVIOUS);
            });
        }
      }
      N(S, "defaultProps", { includeHitboxPadding: !0 });
      class E extends (s = o.PureComponent) {
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
          let n, a, i, s;
          let r =
            ((n = this.props), (a = this.state), !n.initialPaused && !a.paused);
          let l = ((i = e), (s = t), !i.initialPaused && !s.paused);
          r && !l ? this.startTimer() : !r && l && this.stopTimer();
          let { items: o } = this.props,
            { visibleIndex: d } = this.state;
          null == o[d] && this.changeItem(o, 1);
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
          let { onChangeItem: a } = this.props;
          null == a || a(e[n], this.state.visibleIndex, n);
          let i = t > 0 ? b.n.LEFT : b.n.RIGHT;
          return this.setState({ visibleIndex: n, direction: i }), n;
        }
        render() {
          let {
              items: e,
              renderItem: t,
              className: n,
              slideAnimatorClassName: a,
              slideAnimatorSpringSettings: i,
              slideAnimatorFadeInOut: s,
              paginationClassName: r,
              paginationArrowClassName: o,
              paginationArrowIconType: d,
              paginationDotClassName: u,
              paginationDotSelectedClassName: h,
              themedPagination: p,
              includeHitboxPadding: m,
              style: g,
              aspectRatio: f,
              children: C,
            } = this.props,
            { visibleIndex: I } = this.state;
          return (0, l.jsxs)("div", {
            className: v.root,
            children: [
              (0, l.jsxs)("div", {
                className: c()(v.carouselContainer, n),
                style: g,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                children: [
                  (0, l.jsx)("div", {
                    style: { aspectRatio: f },
                    children: (0, l.jsx)(b.Z, {
                      className: c()(v.carousel, a),
                      step: I,
                      direction: this.getCurrentDirection(),
                      springSettings: i,
                      fadeInOut: s,
                      children: t(e[I], I),
                    }),
                  }),
                  e.length > 1 &&
                    (0, l.jsx)(S, {
                      className: c()(r, p ? v.themedPagination : v.pagination),
                      arrowClassName: o,
                      includeHitboxPadding: m,
                      current: I,
                      count: e.length,
                      onChangePage: (t) => this.changeItem(e, t),
                      onSetItem: this.handleSetItem,
                      onIntentionalChange: this.handleIntentionalChange,
                      paginationArrowIconType: d,
                      paginationDotClassName: u,
                      paginationDotSelectedClassName: h,
                    }),
                ],
              }),
              null != C &&
                C({ step: I, direction: this.getCurrentDirection() }),
            ],
          });
        }
        constructor(e) {
          super(e),
            N(this, "timer", new p.Xp()),
            N(this, "handleWindowFocusChange", (e) => {
              let { focused: t } = e;
              this.setState({ paused: !t });
            }),
            N(this, "getCurrentDirection", () => this.state.direction),
            N(this, "nextItem", () => {
              let { items: e } = this.props;
              this.changeItem(e, 1);
            }),
            N(this, "previousItem", () => {
              let { items: e } = this.props;
              this.changeItem(e, -1);
            }),
            N(this, "handleSetItem", (e) => {
              let { visibleIndex: t } = this.state,
                { items: n } = this.props;
              this.changeItem(n, e - t);
            }),
            N(this, "handleMouseEnter", () => {
              this.setState({ paused: !0 });
            }),
            N(this, "handleMouseLeave", () => {
              this.setState({ paused: !1 });
            }),
            N(this, "handleIntentionalChange", (e, t, n) => {
              let { items: a, onIntentionalChange: i } = this.props;
              return null == i ? void 0 : i(a[t], e, t, n);
            }),
            (this.state = {
              visibleIndex:
                !0 === e.randomize ? h().random(0, e.items.length - 1) : 0,
              direction: b.n.LEFT,
              paused: !1,
            });
        }
      }
      N(E, "defaultProps", { aspectRatio: 16 / 9 }), (t.Z = E);
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
      var a = n(200651),
        i = n(120356),
        s = n.n(i),
        r = n(524444),
        l = n(52824),
        o = n(956664),
        d = n(589530),
        c = n(591759),
        u = n(124347),
        h = n(80966),
        p = n(151236);
      let m = { DEFAULT: null, CONTAIN: p.contain, SCALE_DOWN: p.scaleDown };
      function g(e) {
        let {
            media: t,
            fit: n = m.DEFAULT,
            obscured: i = !1,
            onContextMenu: g,
          } = e,
          {
            width: b,
            height: f,
            url: C,
            proxyUrl: I,
            alt: x,
            type: _,
            maxWidth: v,
            maxHeight: N,
            ...P
          } = t,
          { width: S, height: E } = (0, o.zp)(
            null != b ? b : 0,
            null != f ? f : 0,
          ),
          L = (0, l.q)({ proxyURL: I, url: C }),
          y = !(null == b || 0 === b || null == f || 0 === f);
        if ("VIDEO" === _ && y && null != I) {
          var j;
          let e = (function (e) {
            let t = c.Z.toURLSafe(e);
            return null == t
              ? null
              : (t.searchParams.append("format", "webp"), t.toString());
          })(I);
          if (null == e) return null;
          let n =
            null !== (j = t.renderLinkComponent) && void 0 !== j ? j : r.iT;
          return (0, a.jsx)(h.Z, {
            ...P,
            src: L,
            width: b,
            height: f,
            maxWidth: S,
            maxHeight: E,
            poster: e,
            naturalWidth: b,
            naturalHeight: f,
            volume: d.FC,
            autoMute: d.rs,
            onVolumeChange: d.jA,
            onMute: d.Zj,
            renderLinkComponent: n,
            autoPlay: !i,
            alt: x,
            onContextMenu: g,
          });
        }
        if ("IMAGE" === _)
          return y
            ? (0, a.jsx)(u.ZP, {
                ...P,
                imageClassName: s()(p.slide, n),
                src: L,
                width: b,
                height: f,
                shouldLink: !1,
                maxWidth: S,
                maxHeight: E,
                animated: !i && t.animated,
                autoPlay: !i,
                alt: x,
                zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                onContextMenu: g,
              })
            : (0, a.jsx)("img", {
                src: L,
                alt: x,
                className: s()(p.slide, n),
                onContextMenu: g,
              });
        return null;
      }
    },
    354266: function (e, t, n) {
      e.exports = {
        list: "list_a06168",
        container: "container_a06168",
        header: "header_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
      };
    },
    745747: function (e, t, n) {
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
    998294: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_b6f1f8",
        slide: "slide_b6f1f8",
        navPrev: "navPrev_b6f1f8 nav_b6f1f8",
        navNext: "navNext_b6f1f8 nav_b6f1f8",
      };
    },
    17142: function (e, t, n) {
      e.exports = {
        collapsed: "collapsed_e2ea95",
        blurb: "blurb_e2ea95",
        description: "description_e2ea95",
        toggleCollapseButton: "toggleCollapseButton_e2ea95",
        assetWrapper: "assetWrapper_e2ea95",
        asset: "asset_e2ea95",
      };
    },
    862756: function (e, t, n) {
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
    343364: function (e, t, n) {
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
    694123: function (e, t, n) {
      e.exports = {
        container: "container_da6719",
        spinnerContainer: "spinnerContainer_da6719",
        spinner: "spinner_da6719",
        loading: "loading_da6719",
      };
    },
    470946: function (e, t, n) {
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
    798058: function (e, t, n) {
      e.exports = {
        outerContainer: "outerContainer_b51750",
        innerContainer: "innerContainer_b51750",
        languageItem: "languageItem_b51750",
      };
    },
    800879: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_bfa0f5",
        productsContainer: "productsContainer_bfa0f5",
        productSection: "productSection_bfa0f5",
        subscriptionCardSubtext: "subscriptionCardSubtext_bfa0f5",
      };
    },
    920633: function (e, t, n) {
      e.exports = { heading: "heading_fcab0f" };
    },
    62456: function (e, t, n) {
      e.exports = { title: "title_eaa702" };
    },
    230568: function (e, t, n) {
      e.exports = {
        markdown: "markdown_b97ce2",
        blockquote: "blockquote_b97ce2",
        codeInline: "codeInline_b97ce2",
        paragraph: "paragraph_b97ce2",
      };
    },
    943142: function (e, t, n) {
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
    91628: function (e, t, n) {
      e.exports = {
        singleItemWrapper: "singleItemWrapper_e3183f",
        carousel: "carousel_e3183f",
        item: "item_e3183f",
        singleItem: "singleItem_e3183f item_e3183f",
        viewport: "viewport_e3183f",
      };
    },
    644279: function (e, t, n) {
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
    151236: function (e, t, n) {
      e.exports = {
        slide: "slide_f97a12",
        scaleDown: "scaleDown_f97a12",
        contain: "contain_f97a12",
      };
    },
    13951: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    917626: function (e, t, n) {
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
//# sourceMappingURL=1afb3f1cba854ed3c6d0.js.map
