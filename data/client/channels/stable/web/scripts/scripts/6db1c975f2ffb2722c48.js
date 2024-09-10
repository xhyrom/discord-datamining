"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99857"],
  {
    761705: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return N;
        },
      }),
        n(47120),
        n(653041);
      var a,
        i = n(735250),
        o = n(470079),
        r = n(120356),
        s = n.n(r),
        l = n(299608),
        c = n.n(l),
        u = n(748780),
        d = n(215569),
        h = n(376641),
        p = n(714338),
        g = n(134432),
        m = n(44488),
        C = n(585483),
        f = n(981631),
        b = n(31185);
      function v(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      let x = { friction: 10, tension: 100 };
      function L(t, e) {
        return ((t % e) + e) % e;
      }
      class _ extends o.Component {
        componentWillEnter(t) {
          let { directionHistory: e } = this.props,
            { translate: n, opacity: a } = this.state;
          n.setValue(e[e.length - 1]),
            a.setValue(0),
            t(),
            u.Z.parallel([
              u.Z.timing(a, {
                toValue: 1,
                easing: u.Z.Easing.out(u.Z.Easing.linear),
                duration: 200,
              }),
              u.Z.spring(n, { toValue: 0, ...x }),
            ]).start();
        }
        componentWillLeave(t) {
          let { directionHistory: e } = this.props,
            { opacity: n, translate: a } = this.state;
          u.Z.parallel([
            u.Z.timing(n, {
              toValue: 0,
              easing: u.Z.Easing.in(u.Z.Easing.linear),
              duration: 200,
            }),
            u.Z.spring(a, { toValue: -1 * e[e.length - 1], ...x }),
          ]).start(t);
        }
        getStyle() {
          let { translate: t, opacity: e } = this.state;
          return u.Z.accelerate({
            opacity: e,
            transform: [
              {
                translateX: t.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0px", "300px"],
                }),
              },
            ],
          });
        }
        render() {
          let { item: t } = this.props,
            { className: e } = this.props;
          return (0, i.jsx)(u.Z.img, {
            src: t.src,
            alt: "",
            className: s()(b.slide, e),
            style: this.getStyle(),
          });
        }
        constructor(...t) {
          super(...t),
            v(this, "state", {
              translate: new u.Z.Value(0),
              opacity: new u.Z.Value(1),
            });
        }
      }
      class N extends (a = o.Component) {
        componentDidMount() {
          this.preloadNextImages(),
            p.Z.disable(),
            p.Z.enableTemp(h.P),
            C.S.subscribe(f.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
            C.S.subscribe(f.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
        }
        componentWillUnmount() {
          p.Z.disableTemp(),
            C.S.unsubscribe(f.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
            C.S.unsubscribe(f.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
        }
        preloadNextImages() {
          var t, e;
          let { currentIndex: n } = this.state,
            { items: a } = this.props;
          let i = (((n + 1) % (t = a.length)) + t) % t;
          let o = (((n - 1) % (e = a.length)) + e) % e;
          this.preloadImage(a[i]), this.preloadImage(a[o]);
        }
        preloadImage(t) {
          (0, g.po)(t.src);
        }
        componentDidUpdate(t, e) {
          let { currentIndex: n } = this.state;
          n !== e.currentIndex && this.preloadNextImages();
        }
        navigateTo(t) {
          var e, n, a;
          let { directionHistory: i, currentIndex: o } = this.state;
          i.push(t - o),
            (t = ((t % (a = this.props.items.length)) + a) % a),
            this.setState({ currentIndex: t, directionHistory: i }),
            null === (e = (n = this.props).onIndexChange) ||
              void 0 === e ||
              e.call(n, t);
        }
        render() {
          var t;
          let { className: e } = this.props,
            { currentIndex: n, directionHistory: a } = this.state,
            { modalCarouselItemClassName: o } = this.props,
            r = this.props.items[n],
            l = this.props.items;
          return (0, i.jsxs)(d.W, {
            component: "div",
            className: s()(b.wrapper, e),
            children: [
              l.length > 1
                ? (0, i.jsx)(m.am, {
                    className: b.navPrev,
                    onClick: this.gotoPrev,
                  })
                : null,
              null !== (t = r.component) && void 0 !== t
                ? t
                : (0, i.jsx)(
                    _,
                    { item: r, directionHistory: a, className: o },
                    r.src,
                  ),
              l.length > 1
                ? (0, i.jsx)(m.Pz, {
                    className: b.navNext,
                    onClick: this.gotoNext,
                  })
                : null,
            ],
          });
        }
        constructor(t) {
          super(t),
            v(this, "gotoNext", () => {
              let { currentIndex: t } = this.state;
              this.navigateTo(t + 1);
            }),
            v(this, "gotoPrev", () => {
              let { currentIndex: t } = this.state;
              this.navigateTo(t - 1);
            }),
            v(this, "gotoNextThrottled", c()(this.gotoNext, 300)),
            v(this, "gotoPrevThrottled", c()(this.gotoPrev, 300)),
            (this.state = { currentIndex: t.startWith, directionHistory: [] });
        }
      }
      v(N, "defaultProps", { startWith: 0 });
    },
    817718: function (t, e, n) {
      n.d(e, {
        U3: function () {
          return h;
        },
        XM: function () {
          return u;
        },
        hd: function () {
          return c;
        },
        lI: function () {
          return l;
        },
        py: function () {
          return d;
        },
      });
      var a = n(481060),
        i = n(819640),
        o = n(585483),
        r = n(981631);
      let s = () => i.Z.hasLayers() || (0, a.hasAnyModalOpen)(),
        l =
          12633 == n.j
            ? {
                binds: ["right"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!s()) return o.S.dispatch(r.CkL.CAROUSEL_NEXT), !1;
                },
              }
            : null,
        c =
          12633 == n.j
            ? {
                binds: ["left"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!s()) return o.S.dispatch(r.CkL.CAROUSEL_PREV), !1;
                },
              }
            : null,
        u = {
          binds: ["right", "down", "space"],
          comboKeysBindGlobal: !0,
          action: () => (o.S.dispatch(r.CkL.MODAL_CAROUSEL_NEXT), !1),
        },
        d = {
          binds: ["left", "up"],
          comboKeysBindGlobal: !0,
          action: () => (o.S.dispatch(r.CkL.MODAL_CAROUSEL_PREV), !1),
        },
        h = {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action() {
            if (o.S.hasSubscribers(r.CkL.MODAL_CLOSE))
              return o.S.dispatch(r.CkL.MODAL_CLOSE), !1;
          },
        };
    },
    376641: function (t, e, n) {
      n.d(e, {
        P: function () {
          return o;
        },
      });
      var a = n(817718),
        i = n(981631);
      let o = {
        [i.EkH.MODAL_CAROUSEL_NEXT]: a.XM,
        [i.EkH.MODAL_CAROUSEL_PREV]: a.py,
        [i.EkH.CLOSE_MODAL]: a.U3,
      };
    },
    895023: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return c;
          },
        });
      var a = n(735250);
      n(470079);
      var i = n(120356),
        o = n.n(i),
        r = n(481060),
        s = n(761705),
        l = n(896645);
      function c(t) {
        let {
          className: e,
          transitionState: n,
          items: i,
          startingIndex: c,
          onClose: u,
          onIndexChange: d,
          modalCarouselClassName: h,
          modalCarouselItemClassName: p,
        } = t;
        return (0, a.jsx)(r.ModalRoot, {
          hideShadow: !0,
          className: o()(l.carouselModal, e),
          size: r.ModalSize.DYNAMIC,
          transitionState: n,
          "aria-label": "",
          onClick: u,
          children: (0, a.jsx)(s.Z, {
            className: h,
            items: i,
            startWith: c,
            onIndexChange: d,
            modalCarouselItemClassName: p,
          }),
        });
      }
    },
    44488: function (t, e, n) {
      n.d(e, {
        Pz: function () {
          return m;
        },
        am: function () {
          return g;
        },
      }),
        n(47120);
      var a,
        i = n(735250),
        o = n(470079),
        r = n(120356),
        s = n.n(r),
        l = n(481060),
        c = n(768762),
        u = n(446174);
      function d(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      let h = { CENTER: u.alignCenter, LEFT: u.alignLeft };
      class p extends (a = o.PureComponent) {
        componentDidUpdate(t) {
          let { selectedIndex: e } = this.props;
          t.selectedIndex !== e && this.handleSelectedIndexChange(e);
        }
        render() {
          let {
              renderItem: t,
              items: e,
              vertical: n,
              paginationContainerClass: a,
              align: r,
            } = this.props,
            c = n
              ? u.verticalPaginationItemContainer
              : u.horizontalPaginationItemContainer;
          return (0, i.jsx)(l.AdvancedScrollerAuto, {
            orientation: n ? "vertical" : "horizontal",
            className: s()(c, a, r),
            ref: this.handleSetScrollerRef,
            children: e.map((e, n) =>
              o.cloneElement(t(e, n), {
                onClick: () => this.handlePageClick(n),
                key: n,
                ref: (t) => {
                  this._paginationItemRefs[n] = t;
                },
              }),
            ),
          });
        }
        constructor(...t) {
          super(...t),
            d(this, "_scrollerRef", null),
            d(this, "_paginationItemRefs", []),
            d(this, "handleSetScrollerRef", (t) => {
              this._scrollerRef = t;
            }),
            d(this, "handleSelectedIndexChange", (t) => {
              let e = this._scrollerRef;
              if (null == e) return;
              let n = this._paginationItemRefs[t];
              if (null != n)
                e.scrollIntoViewNode({
                  node: n,
                  animate: !0,
                  padding: this.props.scrollToPadding,
                });
            }),
            d(this, "handlePageClick", (t) => {
              let { onSetItem: e } = this.props;
              e(t);
            });
        }
      }
      d(p, "Align", h),
        d(p, "defaultProps", {
          scrollToPadding: { top: 0, left: 0, bottom: 0, right: 0 },
          align: h.CENTER,
        });
      class g extends o.PureComponent {
        render() {
          let { className: t } = this.props;
          return (0, i.jsx)(l.Button, {
            look: l.Button.Looks.BLANK,
            size: l.Button.Sizes.NONE,
            className: s()(u.prevButtonContainer, t),
            onClick: this.handlePrevClick,
            children: (0, i.jsx)(c.Z, {
              className: u.arrow,
              direction: c.Z.Directions.LEFT,
            }),
          });
        }
        constructor(...t) {
          super(...t),
            d(this, "handlePrevClick", (t) => {
              t.stopPropagation(), t.preventDefault();
              let { onClick: e } = this.props;
              null == e || e(t);
            });
        }
      }
      class m extends o.PureComponent {
        render() {
          let { className: t } = this.props;
          return (0, i.jsx)(l.Button, {
            look: l.Button.Looks.BLANK,
            size: l.Button.Sizes.NONE,
            className: s()(u.nextButtonContainer, t),
            onClick: this.handleNextClick,
            children: (0, i.jsx)(c.Z, {
              className: u.arrow,
              direction: c.Z.Directions.RIGHT,
            }),
          });
        }
        constructor(...t) {
          super(...t),
            d(this, "handleNextClick", (t) => {
              t.stopPropagation(), t.preventDefault();
              let { onClick: e } = this.props;
              null == e || e(t);
            });
        }
      }
      e.ZP = 12633 == n.j ? p : null;
    },
    31185: function (t, e, n) {
      t.exports = {
        wrapper: "wrapper_b6f1f8",
        slide: "slide_b6f1f8",
        navPrev: "navPrev_b6f1f8 nav_b6f1f8",
        navNext: "navNext_b6f1f8 nav_b6f1f8",
      };
    },
    896645: function (t, e, n) {
      t.exports = { carouselModal: "carouselModal_d2b9a1" };
    },
    446174: function (t, e, n) {
      t.exports = {
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
  },
]);
//# sourceMappingURL=6db1c975f2ffb2722c48.js.map
