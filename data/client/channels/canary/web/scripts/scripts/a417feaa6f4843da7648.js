"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9005"],
  {
    902294: function (t) {
      t.exports = "/assets/82e4627b29fa4e594d1d.svg";
    },
    924489: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return L;
        },
        x: function () {
          return s;
        },
      }),
        n(653041);
      var s,
        i,
        a = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        h = n(442837),
        c = n(477690),
        d = n(481060),
        u = n(686546),
        p = n(706454),
        m = n(768581),
        g = n(624138),
        x = n(388032),
        N = n(484759);
      ((i = s || (s = {}))[
        (i.SMALL = (0, g.Mg)(c.Z.GUILD_COUNT_SMALL_ICON_SIZE))
      ] = "SMALL"),
        (i[(i.LARGE = (0, g.Mg)(c.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE");
      let C = { [s.SMALL]: N.moreGuildsSmall, [s.LARGE]: N.moreGuildsLarge },
        I = { [s.SMALL]: N.iconSmall, [s.LARGE]: N.iconLarge };
      function L(t) {
        var e, n, i;
        let {
            application: o,
            mutualGuilds: c,
            mutualGuildShownMax: g = 4,
            className: L,
            textVariant: S = "text-sm/normal",
            compact: v,
            guildIconSize: E = s.LARGE,
            guildsClassName: f,
          } = t,
          b = (0, h.e7)([p.default], () => p.default.locale),
          j = new Intl.ListFormat(b),
          P =
            null !==
              (n =
                null === (e = o.directory_entry) || void 0 === e
                  ? void 0
                  : e.guild_count) && void 0 !== n
              ? n
              : 0,
          T =
            null !== (i = null == c ? void 0 : c.length) && void 0 !== i
              ? i
              : 0,
          R = Math.max(0, P - T),
          { shownMutualGuilds: M, hiddenMutualGuilds: w } = l.useMemo(() => {
            let t = [],
              e = [];
            return (
              null == c ||
                c.forEach((n) => {
                  t.length < g && null != n.icon ? t.push(n) : e.push(n);
                }),
              t.length === g &&
                e.length > 0 &&
                (e.push(t[g - 1]), (t = t.slice(0, g - 1))),
              { shownMutualGuilds: t, hiddenMutualGuilds: e }
            );
          }, [c, g]),
          A = w.length,
          k = (function (t, e, n, s, i) {
            if (0 === e && 0 === t) return null;
            if (e > 0 && 0 === n)
              return x.intl.formatToPlainString(x.t.pnzE1t, {
                mutualGuildCount: e,
              });
            let a = e > 0 ? x.t.YR8PSE : x.t.GQjq6e,
              l = new Intl.NumberFormat(s, {
                notation: i ? "compact" : "standard",
                compactDisplay: "short",
              });
            return x.intl.formatToPlainString(a, {
              guildCount: l.format(t),
              mutualGuildCount: e,
              nonMutualGuildCount: l.format(n),
            });
          })(P, T, R, b, v);
        return 0 === M.length && null == k
          ? null
          : (0, a.jsxs)("div", {
              className: r()(L, N.wrapper),
              children: [
                (0, a.jsx)("div", {
                  className: r()(N.icons, f),
                  children:
                    M.length > 0
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            M.map((t, e) => {
                              let n = e === M.length - 1 && 0 === A,
                                s = m.ZP.getGuildIconURL({
                                  id: t.id,
                                  icon: t.icon,
                                  size: E,
                                  canAnimate: !1,
                                }),
                                i = (0, a.jsx)(d.Tooltip, {
                                  text: t.name,
                                  position: "top",
                                  children: (t) =>
                                    (0, a.jsx)("img", {
                                      ...t,
                                      className: r()(N.icon, I[E]),
                                      src: s,
                                      alt: "",
                                    }),
                                });
                              return n
                                ? (0, a.jsx)(l.Fragment, { children: i }, t.id)
                                : (0, a.jsx)(
                                    u.ZP,
                                    {
                                      className: N.iconMask,
                                      height: E,
                                      width: E,
                                      mask: u.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                      children: i,
                                    },
                                    t.id,
                                  );
                            }),
                            A > 0
                              ? (0, a.jsx)(d.Tooltip, {
                                  text: x.intl.formatToPlainString(x.t.m6oRrK, {
                                    appNames: j.format(w.map((t) => t.name)),
                                  }),
                                  position: "top",
                                  children: (t) =>
                                    (0, a.jsxs)("div", {
                                      ...t,
                                      className: r()(N.moreGuilds, C[E]),
                                      children: ["+", A],
                                    }),
                                })
                              : null,
                          ],
                        })
                      : (0, a.jsx)(d.ServerIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: E,
                          height: E,
                          className: N.defaultIcon,
                        }),
                }),
                null != k
                  ? (0, a.jsx)(d.Text, {
                      variant: S,
                      color: "header-secondary",
                      children: k,
                    })
                  : null,
              ],
            });
      }
    },
    125909: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return r;
        },
      });
      var s = n(200651);
      n(192379);
      var i = n(120356),
        a = n.n(i),
        l = n(481060),
        o = n(496008);
      function r(t) {
        let { loading: e, children: n } = t;
        return (0, s.jsxs)("div", {
          className: o.container,
          children: [
            e
              ? (0, s.jsx)("div", {
                  className: o.spinnerContainer,
                  children: (0, s.jsx)(l.Spinner, {
                    className: o.spinner,
                    type: l.Spinner.Type.SPINNING_CIRCLE,
                  }),
                })
              : null,
            (0, s.jsx)("div", {
              className: a()({ [o.loading]: e }),
              children: n,
            }),
          ],
        });
      }
    },
    453499: function (t, e, n) {
      n(47120);
      var s,
        i,
        a,
        l,
        o = n(200651),
        r = n(192379),
        h = n(120356),
        c = n.n(h),
        d = n(392711),
        u = n.n(d),
        p = n(846519),
        m = n(481060),
        g = n(570140),
        x = n(578361),
        N = n(768762),
        C = n(259580),
        I = n(585483),
        L = n(981631),
        S = n(388032),
        v = n(262309);
      function E(t, e, n) {
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
      let f = { JUMP: "jump", NEXT: "next", PREVIOUS: "previous" };
      ((l = s || (s = {})).ARROW = "arrow"), (l.CARET = "caret");
      class b extends (i = r.PureComponent) {
        componentDidMount() {
          I.S.subscribe(L.CkL.CAROUSEL_PREV, this.handlePrevious),
            I.S.subscribe(L.CkL.CAROUSEL_NEXT, this.handleNext);
        }
        componentWillUnmount() {
          I.S.unsubscribe(L.CkL.CAROUSEL_PREV, this.handlePrevious),
            I.S.unsubscribe(L.CkL.CAROUSEL_NEXT, this.handleNext);
        }
        render() {
          let {
              current: t,
              count: e,
              includeHitboxPadding: n,
              arrowClassName: s,
              paginationDotClassName: i,
              paginationDotSelectedClassName: a,
              paginationArrowIconType: l = "arrow",
            } = this.props,
            r = c()(v.arrowHitbox, { [v.arrowHitboxPadding]: n }, s);
          return (0, o.jsxs)("div", {
            className: c()(v.controls, this.props.className),
            children: [
              (0, o.jsx)(m.Button, {
                look: m.Button.Looks.BLANK,
                className: r,
                onClick: this.handlePrevious,
                "aria-label": S.intl.string(S.t.vgfxaG),
                children:
                  "caret" === l
                    ? (0, o.jsx)(C.Z, {
                        className: v.arrow,
                        direction: C.Z.Directions.LEFT,
                      })
                    : (0, o.jsx)(N.Z, {
                        className: v.arrow,
                        direction: N.Z.Directions.LEFT,
                      }),
              }),
              (0, o.jsx)("div", {
                className: v.dots,
                children: u().times(e, (e) =>
                  (0, o.jsx)(
                    m.Button,
                    {
                      look: m.Button.Looks.BLANK,
                      size: m.Button.Sizes.NONE,
                      onClick: () => this.handleDotClick(e),
                      className:
                        e === t ? c()(v.dotSelected, a) : c()(v.dotNormal, i),
                      "aria-label": S.intl.formatToPlainString(S.t["2SXOrK"], {
                        pageNumber: e + 1,
                      }),
                    },
                    "dot-".concat(e),
                  ),
                ),
              }),
              (0, o.jsx)(m.Button, {
                look: m.Button.Looks.BLANK,
                className: r,
                onClick: this.handleNext,
                "aria-label": S.intl.string(S.t.XiOHRU),
                children:
                  "caret" === l
                    ? (0, o.jsx)(C.Z, {
                        className: v.arrow,
                        direction: C.Z.Directions.RIGHT,
                      })
                    : (0, o.jsx)(N.Z, {
                        className: v.arrow,
                        direction: N.Z.Directions.RIGHT,
                      }),
              }),
            ],
          });
        }
        constructor(...t) {
          super(...t),
            E(this, "handleDotClick", (t) => {
              let {
                onSetItem: e,
                onIntentionalChange: n,
                current: s,
              } = this.props;
              null == n || n(s, t, f.JUMP), e(t);
            }),
            E(this, "handleNext", () => {
              let {
                  onIntentionalChange: t,
                  current: e,
                  onChangePage: n,
                } = this.props,
                s = n(1);
              null == t || t(e, s, f.NEXT);
            }),
            E(this, "handlePrevious", () => {
              let {
                  onIntentionalChange: t,
                  current: e,
                  onChangePage: n,
                } = this.props,
                s = n(-1);
              null == t || t(e, s, f.PREVIOUS);
            });
        }
      }
      E(b, "defaultProps", { includeHitboxPadding: !0 });
      class j extends (a = r.PureComponent) {
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
        componentDidUpdate(t, e) {
          let n, s, i, a;
          let l =
            ((n = this.props), (s = this.state), !n.initialPaused && !s.paused);
          let o = ((i = t), (a = e), !i.initialPaused && !a.paused);
          l && !o ? this.startTimer() : !l && o && this.stopTimer();
          let { items: r } = this.props,
            { visibleIndex: h } = this.state;
          null == r[h] && this.changeItem(r, 1);
        }
        startTimer() {
          if (null != this.props.delay)
            this.timer.start(this.props.delay, this.nextItem);
        }
        stopTimer() {
          if (null != this.props.delay) this.timer.stop();
        }
        changeItem(t, e) {
          let n = this.state.visibleIndex + e;
          n < 0 ? (n = t.length - 1) : n > t.length - 1 && (n = 0);
          let { onChangeItem: s } = this.props;
          null == s || s(t[n], this.state.visibleIndex, n);
          let i = e > 0 ? x.n.LEFT : x.n.RIGHT;
          return this.setState({ visibleIndex: n, direction: i }), n;
        }
        render() {
          let {
              items: t,
              renderItem: e,
              className: n,
              slideAnimatorClassName: s,
              slideAnimatorSpringSettings: i,
              slideAnimatorFadeInOut: a,
              paginationClassName: l,
              paginationArrowClassName: r,
              paginationArrowIconType: h,
              paginationDotClassName: d,
              paginationDotSelectedClassName: u,
              themedPagination: p,
              includeHitboxPadding: m,
              style: g,
              aspectRatio: N,
              children: C,
            } = this.props,
            { visibleIndex: I } = this.state;
          return (0, o.jsxs)("div", {
            className: v.root,
            children: [
              (0, o.jsxs)("div", {
                className: c()(v.carouselContainer, n),
                style: g,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                children: [
                  (0, o.jsx)("div", {
                    style: { aspectRatio: N },
                    children: (0, o.jsx)(x.Z, {
                      className: c()(v.carousel, s),
                      step: I,
                      direction: this.getCurrentDirection(),
                      springSettings: i,
                      fadeInOut: a,
                      children: e(t[I], I),
                    }),
                  }),
                  t.length > 1 &&
                    (0, o.jsx)(b, {
                      className: c()(l, p ? v.themedPagination : v.pagination),
                      arrowClassName: r,
                      includeHitboxPadding: m,
                      current: I,
                      count: t.length,
                      onChangePage: (e) => this.changeItem(t, e),
                      onSetItem: this.handleSetItem,
                      onIntentionalChange: this.handleIntentionalChange,
                      paginationArrowIconType: h,
                      paginationDotClassName: d,
                      paginationDotSelectedClassName: u,
                    }),
                ],
              }),
              null != C &&
                C({ step: I, direction: this.getCurrentDirection() }),
            ],
          });
        }
        constructor(t) {
          super(t),
            E(this, "timer", new p.Xp()),
            E(this, "handleWindowFocusChange", (t) => {
              let { focused: e } = t;
              this.setState({ paused: !e });
            }),
            E(this, "getCurrentDirection", () => this.state.direction),
            E(this, "nextItem", () => {
              let { items: t } = this.props;
              this.changeItem(t, 1);
            }),
            E(this, "previousItem", () => {
              let { items: t } = this.props;
              this.changeItem(t, -1);
            }),
            E(this, "handleSetItem", (t) => {
              let { visibleIndex: e } = this.state,
                { items: n } = this.props;
              this.changeItem(n, t - e);
            }),
            E(this, "handleMouseEnter", () => {
              this.setState({ paused: !0 });
            }),
            E(this, "handleMouseLeave", () => {
              this.setState({ paused: !1 });
            }),
            E(this, "handleIntentionalChange", (t, e, n) => {
              let { items: s, onIntentionalChange: i } = this.props;
              return null == i ? void 0 : i(s[e], t, e, n);
            }),
            (this.state = {
              visibleIndex:
                !0 === t.randomize ? u().random(0, t.items.length - 1) : 0,
              direction: x.n.LEFT,
              paused: !1,
            });
        }
      }
      E(j, "defaultProps", { aspectRatio: 16 / 9 }), (e.Z = j);
    },
  },
]);
//# sourceMappingURL=a417feaa6f4843da7648.js.map
