"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67477"],
  {
    882008: function (e) {
      e.exports = "/assets/b92aabcc8b65fa979f9f.svg";
    },
    129512: function (e) {
      e.exports = "/assets/04f1e61a6726a54518ee.svg";
    },
    330065: function (e) {
      e.exports = "/assets/4c698a6babb08607f4af.svg";
    },
    983008: function (e) {
      e.exports = "/assets/eb3bf32fdaa61a5ecc53.svg";
    },
    478408: function (e) {
      e.exports = "/assets/03afde423124b81bde24.svg";
    },
    995648: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        a = n.n(r),
        o = n(481060),
        s = n(422559),
        c = n(95648);
      function l(e) {
        let {
          grantedPermissions: t,
          disabledPermissions: n,
          grantedPermissionsHeader: r,
          disabledPermissionsHeader: l,
          className: u,
        } = e;
        return (0, i.jsxs)("div", {
          className: a()(c.list, u),
          children: [
            null != t && t.length > 0
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    null != r
                      ? (0, i.jsx)(o.Heading, {
                          variant: "heading-sm/semibold",
                          color: "header-primary",
                          className: c.header,
                          children: r,
                        })
                      : null,
                    (0, i.jsx)("div", {
                      className: c.container,
                      children: t.map((e) =>
                        (0, i.jsxs)(
                          "div",
                          {
                            className: c.permission,
                            children: [
                              (0, i.jsx)(o.CheckmarkLargeIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: c.check,
                              }),
                              (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: (0, s.wt)(e),
                              }),
                            ],
                          },
                          e.toString(),
                        ),
                      ),
                    }),
                  ],
                })
              : null,
            null != n && n.length > 0
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    null != l
                      ? (0, i.jsx)(o.Heading, {
                          variant: "heading-sm/semibold",
                          color: "header-primary",
                          className: c.header,
                          children: l,
                        })
                      : null,
                    (0, i.jsx)("div", {
                      className: c.container,
                      children: n.map((e) =>
                        (0, i.jsxs)(
                          "div",
                          {
                            className: c.permission,
                            children: [
                              (0, i.jsx)(o.XSmallIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: c.cross,
                              }),
                              (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: (0, s.wt)(e),
                              }),
                            ],
                          },
                          e.toString(),
                        ),
                      ),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
    },
    361213: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(981631);
      function r(e, t) {
        let n;
        let r = window.GLOBAL_ENV.CDN_HOST,
          a = window.GLOBAL_ENV.API_ENDPOINT;
        return (n =
          null != r
            ? ""
                .concat(location.protocol, "//")
                .concat(r, "/app-assets/")
                .concat(e, "/store/")
                .concat(t, ".mp4")
            : ""
                .concat(location.protocol)
                .concat(a)
                .concat(i.ANM.STORE_ASSET(e, t, "mp4")));
      }
    },
    778569: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(81063);
      let a = ["embedded_cover", "embedded_background"];
      function o(e) {
        let { applicationId: t, size: n, names: o = a } = e,
          [s, c] = i.useState(null),
          [l, u] = i.useState(!0),
          d = (0, r.getAssetImage)(t, s, n),
          p = i.useRef(o);
        return (
          i.useEffect(() => {
            p.current = o;
          }),
          i.useEffect(() => {
            let { current: e } = p;
            (0, r.getAssets)(t).then((t) => {
              for (let [n, i] of (u(!1), Object.entries(t)))
                if (null != i && "" !== i.id && e.includes(i.name)) {
                  c(i.id);
                  return;
                }
            });
          }, [t]),
          { url: d, state: l ? "loading" : null != d ? "fetched" : "not-found" }
        );
      }
    },
    312871: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(192379),
        r = n(434650);
      function a(e) {
        let { onVisible: t, threshold: n, minTimeVisibleMs: a } = e,
          o = i.useRef(!1),
          s = i.useRef(null);
        return (
          i.useEffect(
            () => () => {
              null != s.current &&
                (clearTimeout(s.current), (s.current = null));
            },
            [],
          ),
          (0, r.O)((e) => {
            if (
              (null != s.current &&
                !e &&
                !1 === o.current &&
                (clearTimeout(s.current), (s.current = null)),
              !e || !0 === o.current)
            )
              return;
            let n = () => {
              t(), (o.current = !0), (s.current = null);
            };
            null != a ? (s.current = setTimeout(n, a)) : n();
          }, n)
        );
      }
    },
    888617: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(990547),
        r = n(213609),
        a = n(541099),
        o = n(312871);
      function s(e) {
        let { sectionName: t, numItems: n, numVisibleItems: s } = e;
        return {
          trackSectionImpressionRef: (0, o.Z)({
            onVisible: () => {
              (0, r.h)({
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.APP_LAUNCHER_SECTION,
                properties: {
                  section_name: t,
                  num_items: n,
                  num_visible_items: s,
                  source: a.Z.entrypoint(),
                },
              });
            },
            threshold: 1,
          }),
        };
      }
    },
    105862: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(200651),
        r = n(192379),
        a = n(780384),
        o = n(481060),
        s = n(410030),
        c = n(782568),
        l = n(63063),
        u = n(827498),
        d = n(888617),
        p = n(981631),
        f = n(388032),
        _ = n(860156),
        m = n(983008),
        I = n(478408);
      function h(e) {
        let { showImage: t = !0, padding: n = !1 } = e,
          h = (0, s.ZP)(),
          S = (0, a.ap)(h) ? I : m,
          b = r.useCallback(() => {
            (0, c.Z)(l.Z.getAppsSupportURL(p.BhN.APPS_LEARN_MORE));
          }, []),
          { trackSectionImpressionRef: g } = (0, d.Z)({
            sectionName: u.L3.NEW_TO_APPS,
            numItems: 1,
            numVisibleItems: 1,
          });
        return (0, i.jsx)("div", {
          className: n ? _.containerPadding : void 0,
          children: (0, i.jsxs)("div", {
            ref: (e) => (g.current = e),
            className: _.container,
            children: [
              t &&
                (0, i.jsx)("img", {
                  className: _.image,
                  src: S,
                  alt: "",
                  "aria-hidden": !0,
                }),
              (0, i.jsxs)("div", {
                className: _.body,
                children: [
                  (0, i.jsx)(o.Heading, {
                    variant: "heading-lg/bold",
                    color: "header-primary",
                    children: f.intl.string(f.t["kw8/ER"]),
                  }),
                  (0, i.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-normal",
                    children: f.intl.string(f.t.GZoV1N),
                  }),
                ],
              }),
              (0, i.jsx)(o.Button, {
                size: o.Button.Sizes.MEDIUM,
                "aria-label": f.intl.formatToPlainString(f.t.xx5Sur, {
                  sectionTitle: f.intl.string(f.t["kw8/ER"]),
                  sectionBody: f.intl.string(f.t.GZoV1N),
                }),
                onClick: b,
                children: f.intl.string(f.t.Ye51oa),
              }),
            ],
          }),
        });
      }
    },
    736408: function (e, t, n) {
      n.d(t, {
        $: function () {
          return c;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i = n(134432),
        r = n(768581),
        a = n(981631);
      let { API_ENDPOINT: o, CDN_HOST: s } = window.GLOBAL_ENV;
      function c(e) {
        let { itemId: t, hash: n, containerWidth: c = 1024 } = e,
          l = new URLSearchParams({
            size: (0, i.oO)(c * (0, i.x_)()).toString(),
          }).toString(),
          u = r.$k ? "webp" : "png";
        return null != s
          ? ""
              .concat(location.protocol, "//")
              .concat(s, "/app-assets/application-directory/collection-items/")
              .concat(t, "/")
              .concat(n, ".")
              .concat(u, "?")
              .concat(l)
          : ""
              .concat(location.protocol)
              .concat(o)
              .concat(
                a.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, u),
                "?",
              )
              .concat(l);
      }
    },
    34674: function (e, t, n) {
      n.d(t, {
        $_: function () {
          return m;
        },
        KQ: function () {
          return f;
        },
        MU: function () {
          return d;
        },
        RF: function () {
          return S;
        },
        m0: function () {
          return p;
        },
        rf: function () {
          return I;
        },
        tu: function () {
          return _;
        },
      }),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i = n(860911),
        r = n(477690),
        a = n(481060),
        o = n(911969),
        s = n(703656),
        c = n(736408),
        l = n(981631),
        u = n(388032);
      let d = 0;
      function p(e) {
        return e.id === d;
      }
      function f() {
        return { id: d, name: u.intl.string(u.t.E407b2) };
      }
      function _(e) {
        switch (e.id) {
          case 0:
            return a.GlobeEarthIcon;
          case 4:
            return a.TvIcon;
          case 5:
            return a.AnalyticsIcon;
          case 6:
            return a.GameControllerIcon;
          case 8:
            break;
          case 9:
            return a.FriendsIcon;
          case 10:
            return a.WrenchIcon;
        }
        return a.AsteriskIcon;
      }
      function m(e) {
        let {
          itemId: t,
          hash: n,
          containerWidth: i = parseFloat(
            r.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH,
          ),
        } = e;
        return (0, c.$)({ itemId: t, hash: n, containerWidth: i });
      }
      function I() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = new URL(location.href);
        for (let n in e) {
          let i = e[n];
          t.searchParams.set(n, i);
        }
        let n = t.pathname + t.search,
          r = (0, i.Ui)(n, !1);
        (0, s.uL)(r);
      }
      let h = (e) => {
        if (null == e) return null;
        let t = e.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != t ? t[1] : null;
      };
      function S(e) {
        switch (e.type) {
          case o.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return { type: l.s9s.IMG, width: 0, height: 0, src: n };
          case o.ee.YOUTUBE:
            let i = h(e.url);
            if (null != i)
              return { type: l.s9s.YOUTUBE_VIDEO, youtubeVideoId: i };
        }
        return console.warn("Unsupported carousel item", e), null;
      }
    },
    150414: function (e, t, n) {
      n.d(t, {
        q: function () {
          return a;
        },
      });
      var i = n(73346),
        r = n(591759);
      function a(e, t, n) {
        var a;
        return null !== (a = r.Z.toURLSafe((0, i._W)(e, t, n))) && void 0 !== a
          ? a
          : void 0;
      }
    },
    770146: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        a = n.n(r),
        o = n(321065);
      function s(e) {
        let { children: t, tag: n, className: r } = e;
        return (
          (n = null != n ? n : "h3"),
          (0, i.jsx)(n, { className: a()(o.title, r), children: t })
        );
      }
    },
    679056: function (e, t, n) {
      n(47120);
      var i,
        r = n(200651),
        a = n(192379),
        o = n(846519);
      function s(e, t, n) {
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
      class c extends (i = a.Component) {
        static getDerivedStateFromProps(e) {
          return e.disable ? { hovered: !1 } : null;
        }
        componentDidMount() {
          let { pauseOnHover: e, disable: t } = this.props,
            n = this.state.hovered && e;
          !t && !n && this.startTimer();
        }
        componentWillUnmount() {
          this.stopTimer();
        }
        componentDidUpdate(e, t) {
          let n,
            i,
            r,
            a,
            { props: o } = this;
          let s =
            ((n = o),
            (i = this.state),
            !n.disable && !(i.hovered && n.pauseOnHover));
          let c =
            ((r = e), (a = t), !r.disable && !(a.hovered && r.pauseOnHover));
          (s && !c) || e.interval !== o.interval
            ? this.startTimer()
            : !s && c && this.stopTimer();
        }
        startTimer() {
          let { interval: e, onInterval: t, disable: n } = this.props;
          if (!n)
            this.timer.start(e, () => {
              t();
            });
        }
        stopTimer() {
          this.timer.stop();
        }
        render() {
          let { children: e, className: t, disable: n } = this.props,
            i = n
              ? null
              : {
                  onMouseEnter: this.handlePause,
                  onFocus: this.handlePause,
                  onMouseLeave: this.handleResume,
                  onBlur: this.handleResume,
                };
          return (0, r.jsx)("div", { ...i, className: t, children: e });
        }
        constructor(...e) {
          super(...e),
            s(this, "timer", new o.Xp()),
            s(this, "state", { hovered: !1 }),
            s(this, "handlePause", () => {
              !this.state.hovered && this.setState({ hovered: !0 });
            }),
            s(this, "handleResume", () => {
              this.setState({ hovered: !1 });
            });
        }
      }
      s(c, "defaultProps", { disable: !1, pauseOnHover: !1 }), (t.Z = c);
    },
    578361: function (e, t, n) {
      n.d(t, {
        n: function () {
          return r;
        },
      });
      var i,
        r,
        a = n(200651),
        o = n(192379),
        s = n(120356),
        c = n.n(s),
        l = n(748780),
        u = n(215569),
        d = n(383583);
      ((i = r || (r = {}))[(i.RIGHT = -1)] = "RIGHT"),
        (i[(i.LEFT = 1)] = "LEFT");
      let p = { friction: 7, tension: 40, clamp: !0 };
      class f extends o.PureComponent {
        componentWillEnter(e) {
          this._animated.setValue(-this.props.direction),
            l.Z.spring(this._animated, {
              toValue: 0,
              ...this.props.springSettings,
            }).start(e);
        }
        componentDidAppear() {
          this._animated.setValue(0);
        }
        componentWillLeave(e) {
          l.Z.spring(this._animated, {
            toValue: this.props.direction,
            ...this.props.springSettings,
          }).start(e);
        }
        getStyle() {
          let e = l.Z.accelerate({
            transform: [
              {
                translateX: this._animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "-100%"],
                }),
              },
            ],
          });
          return (
            this.props.fadeInOut &&
              (e.opacity = this._animated.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [0, 1, 0],
              })),
            e
          );
        }
        render() {
          return (0, a.jsx)(l.Z.div, {
            style: this.getStyle(),
            className: d.item,
            children: this.props.children,
          });
        }
        constructor(e) {
          var t, n, i;
          super(e),
            (t = this),
            (i = void 0),
            (n = "_animated") in t
              ? Object.defineProperty(t, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = i),
            (this._animated = new l.Z.Value(-1 * e.direction));
        }
      }
      t.Z = (e) => {
        let {
          children: t,
          step: n,
          direction: i,
          className: r,
          springSettings: o = p,
          fadeInOut: s = !1,
        } = e;
        return (0, a.jsx)(u.W, {
          component: "div",
          className: c()(d.animator, r),
          children: (0, a.jsx)(
            f,
            { direction: i, springSettings: o, fadeInOut: s, children: t },
            n,
          ),
        });
      };
    },
    258971: function (e, t, n) {
      n.d(t, {
        Uc: function () {
          return _;
        },
        Xh: function () {
          return m;
        },
        aQ: function () {
          return p;
        },
        m_: function () {
          return i;
        },
        z8: function () {
          return f;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i,
        r,
        a = n(512969),
        o = n(972959),
        s = n(264043),
        c = n(34674),
        l = n(703656),
        u = n(979007),
        d = n(981631);
      ((r = i || (i = {})).HOME = "home"),
        (r.SEARCH = "search"),
        (r.APPLICATION = "application"),
        (r.CATEGORY = "category");
      let p = (0, o.H)(() => ({})),
        f = (0, o.H)(() => ({
          sessionId: null,
          guildId: null,
          entrypoint: null,
          trackedOpenedFromExternalEntrypoint: !1,
        }));
      function _() {
        let {
          location: { state: e },
        } = (0, l.s1)();
        return null == e ? void 0 : e.previousView;
      }
      function m() {
        var e, t, n;
        let {
          location: { pathname: i, search: r },
        } = (0, l.s1)();
        if (
          null != (0, a.LX)(i, { path: d.Z5c.GLOBAL_DISCOVERY_APPS, exact: !0 })
        )
          return { type: "home" };
        if (
          null !=
          (0, a.LX)(i, { path: d.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, exact: !0 })
        ) {
          let e = new URLSearchParams(r),
            t = { type: "search" },
            n = e.get("q");
          null != n && "" !== n && (t.query = n);
          let i = Number(e.get("category_id"));
          Number.isInteger(i) && i !== c.MU && (t.categoryId = i.toString());
          let a = Number(e.get("page"));
          return null != a && a > 1 && (t.page = a), t;
        }
        let o = (0, a.LX)(i, {
            path: [d.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")],
            exact: !0,
          }),
          { categoryId: p } =
            null !== (e = null == o ? void 0 : o.params) && void 0 !== e
              ? e
              : {};
        if (null != o && null != p) return { type: "category", categoryId: p };
        let f = (0, a.LX)(i, {
            path: [
              d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
              d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                ":applicationId",
                ":section",
              ),
              d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                ":applicationId",
                ":skuId",
              ),
            ],
            exact: !0,
          }),
          {
            applicationId: _,
            section: m,
            skuId: I,
          } = null !== (t = null == f ? void 0 : f.params) && void 0 !== t
            ? t
            : {};
        if (null != f && null != _) {
          let e =
            null === (n = s.Z.getApplication(_)) || void 0 === n
              ? void 0
              : n.name;
          return {
            type: "application",
            applicationId: _,
            applicationName: e,
            section:
              null != m
                ? m
                : null != I
                  ? u.GlobalDiscoveryAppsSections.STORE
                  : u.GlobalDiscoveryAppsSections.ABOUT,
          };
        }
      }
    },
    241209: function (e, t, n) {
      var i,
        r,
        a = n(200651),
        o = n(192379),
        s = n(120356),
        c = n.n(s),
        l = n(477660),
        u = n.n(l),
        d = n(663993),
        p = n(770146),
        f = n(772096),
        _ = n(428595),
        m = n(532901),
        I = n(374865),
        h = n(763971);
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
      let b = new RegExp(
        "https?://".concat(
          null !== (i = window.GLOBAL_ENV.CDN_HOST) && void 0 !== i ? i : "",
        ),
      );
      function g(e) {
        return "string" == typeof e.content ? e.content : N(e.content);
      }
      let T = {
          ...u().defaultRules,
          heading: {
            ...u().defaultRules.heading,
            react(e, t, n) {
              let i = "h".concat(e.level);
              return (0, a.jsx)(
                p.Z,
                { tag: i, children: t(e.content, n) },
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
            ...f.ZP,
            ...(0, m.Z)({ enableBuildOverrides: !1 }),
            order: 6,
          },
          blockQuote: {
            ...u().defaultRules.blockQuote,
            react: (e, t, n) =>
              (0, a.jsx)(
                "blockquote",
                { className: I.blockquote, children: g(e) },
                n.key,
              ),
          },
          image: {
            ...u().defaultRules.image,
            order: 6,
            match(e, t, n) {
              let i = u().defaultRules.image;
              if (null == i || null == i.match) return !1;
              let r = i.match(e, t, n);
              if (null != r && Array.isArray(r) && r.length >= 3) {
                let e = r[2];
                if ("string" == typeof e) return null != e.match(b) ? r : null;
              }
              return !1;
            },
          },
          inlineCode: {
            ..._.Z.RULES.inlineCode,
            order: 6,
            react: (e, t, n) =>
              (0, a.jsx)(
                "code",
                { className: I.codeInline, children: g(e) },
                n.key,
              ),
          },
          codeBlock: {
            ...u().defaultRules.codeBlock,
            react(e, t, i) {
              let r = () =>
                (0, a.jsx)(
                  "pre",
                  {
                    children: (0, a.jsx)("code", {
                      className: c()(h.scrollbarGhostHairline, "hljs"),
                      children: g(e),
                    }),
                  },
                  i.key,
                );
              return (0, a.jsx)(
                d.GI,
                {
                  createPromise: () =>
                    Promise.resolve().then(n.bind(n, 364964)),
                  webpackId: 364964,
                  renderFallback: r,
                  render: (t) => {
                    if (
                      !(e.lang && t.hasLanguage(e.lang)) ||
                      "string" != typeof e.content
                    )
                      return r();
                    {
                      let n = t.highlight(e.lang, e.content, !0);
                      return null == n
                        ? r()
                        : (0, a.jsx)(
                            "pre",
                            {
                              children: (0, a.jsx)("code", {
                                className: c()(
                                  h.scrollbarGhostHairline,
                                  "hljs",
                                  n.language,
                                ),
                                dangerouslySetInnerHTML: { __html: n.value },
                              }),
                            },
                            i.key,
                          );
                    }
                  },
                },
                i.key,
              );
            },
          },
        },
        C = u().parserFor(T),
        N = u().reactFor(u().ruleOutput(T, "react"));
      class E extends (r = o.PureComponent) {
        render() {
          let {
              className: e,
              children: t,
              state: n,
              parser: i,
              output: r,
            } = this.props,
            o = r(i("".concat(t, "\n\n"), { inline: !1, ...n }));
          return (0, a.jsx)("div", {
            className: c()(I.markdown, e),
            children: o,
          });
        }
      }
      S(E, "rules", T),
        S(E, "defaultProps", { parser: C, output: N }),
        (t.Z = E);
    },
    106976: function (e, t, n) {
      n.d(t, {
        i1: function () {
          return d;
        },
        rx: function () {
          return u;
        },
        sB: function () {
          return p;
        },
        vY: function () {
          return f;
        },
      }),
        n(47120);
      var i = n(570140),
        r = n(821849),
        a = n(307643),
        o = n(981631);
      function s(e) {
        return {
          id: e.id,
          type: o.epS.SUBSCRIPTION,
          application_id: e.application_id,
          product_line: o.POd.APPLICATION,
          name: e.name,
          summary: "",
          description: e.description,
          flags: e.sku_flags,
          manifests: [],
          available_regions: [],
          legal_notice: "",
          deleted: e.soft_deleted,
          price_tier: 0,
          show_age_gate: !1,
          restricted: !1,
        };
      }
      function c(e) {
        var t;
        return {
          id: e.id,
          sku: s(e),
          summary: e.description,
          description: e.description,
          benefits:
            null !== (t = e.store_listing_benefits) && void 0 !== t ? t : [],
          thumbnail: e.image_asset,
          published: e.published,
        };
      }
      function l(e) {
        for (let t of (i.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: e.map(s),
        }),
        i.Z.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: e.map(c),
        }),
        e))
          i.Z.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: t.id,
            subscriptionPlans: t.subscription_plans,
          });
      }
      async function u(e, t) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: e,
          groupListingId: t,
        });
        try {
          var n;
          let r = await a.jz(e, t);
          return (
            i.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: e,
              groupListing: r,
            }),
            l(null !== (n = r.subscription_listings) && void 0 !== n ? n : []),
            r
          );
        } catch (t) {
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
            applicationId: e,
          });
        }
      }
      async function d(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
          guildId: e,
        });
        try {
          let t = await a.GF(e);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: e,
            entitlements: t,
          });
        } catch (t) {
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
            guildId: e,
          });
        }
      }
      function p(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
          guildId: e,
        });
      }
      async function f(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
          planId: e,
        });
        try {
          var t;
          let n = await a.a_(e);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: n,
          });
          let o =
            null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
          await Promise.all(
            o.map((t) => {
              if (t.subscription_plans[0].id === e)
                return r.GZ(t.id, void 0, void 0, !0);
            }),
          ),
            l(o);
        } catch (e) {}
      }
    },
    488915: function (e, t, n) {
      n.d(t, {
        M: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        r,
        a,
        o,
        s,
        c,
        l = n(512722),
        u = n.n(l),
        d = n(442837),
        p = n(759174),
        f = n(570140),
        _ = n(959546),
        m = n(55563);
      function I(e) {
        return "subscription_listing:".concat(e);
      }
      function h(e) {
        return "application:".concat(e);
      }
      function S(e) {
        return "plan:".concat(e);
      }
      function b(e, t, n) {
        return "entitlement:".concat(e, ":").concat(n, ":").concat(t);
      }
      function g(e, t) {
        return "entitlement:".concat(t, ":").concat(e);
      }
      ((a = i || (i = {}))[(a.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (a[(a.FETCHING = 1)] = "FETCHING"),
        (a[(a.FETCHED = 2)] = "FETCHED");
      let T = new p.h(
          (e) => [h(e.application_id), ...e.subscription_listings_ids.map(I)],
          (e) => e.id,
        ),
        C = new p.h(
          (e) => [h(e.application_id), S(e.subscription_plans[0].id)],
          (e) => e.id,
        ),
        N = new p.h(
          (e) => [
            b(e.applicationId, e.isValid(null, m.Z), e.guildId),
            g(e.isValid(null, m.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        E = {},
        v = {};
      function P(e) {
        var t;
        for (let n of (T.set(e.id, e),
        null !== (t = e.subscription_listings) && void 0 !== t ? t : []))
          (function (e) {
            C.set(e.id, e);
          })(n);
      }
      class L extends (r = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var t;
          return null !== (t = E[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionGroupListing(e) {
          return T.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let t = T.values(I(e));
          return (
            u()(t.length <= 1, "Found multiple group listings for listing"),
            t[0]
          );
        }
        getSubscriptionListing(e) {
          return C.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return C.values(h(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var t;
          return null !== (t = v[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionListingForPlan(e) {
          let t = C.values(S(e));
          return u()(t.length <= 1, "Found multiple listings for plan"), t[0];
        }
        getApplicationEntitlementsForGuild(e, t) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return N.values(b(e, n, t));
        }
        getEntitlementsForGuild(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return N.values(g(t, e));
        }
      }
      (c = "ApplicationSubscriptionStore"),
        (s = "displayName") in (o = L)
          ? Object.defineProperty(o, s, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[s] = c),
        (t.Z = new L(f.Z, {
          LOGOUT: function () {
            T.clear(), C.clear(), N.clear(), (E = {}), (v = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: t, groupListingId: n } = e;
            E[t] = 1;
            let i = T.get(n);
            if (null != i)
              for (let e of i.subscription_listings_ids) C.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: t, groupListing: n } = e;
            (E[t] = 2), P(n);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: t } = e;
            E[t] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: t } = e;
            v[t] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: t, entitlements: n } = e;
            (v[t] = 2),
              n.forEach((e) => {
                let t = _.Z.createFromServer(e);
                N.set(t.id, t);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: t } = e;
            v[t] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            e,
          ) {
            let { groupListing: t } = e;
            P(t);
          },
        }));
    },
    889711: function (e, t, n) {
      function i(e) {
        return new ResizeObserver(e);
      }
      function r(e, t) {
        e.observe(t);
      }
      function a(e, t) {
        e.unobserve(t);
      }
      n.d(t, {
        UC: function () {
          return a;
        },
        YP: function () {
          return r;
        },
        pP: function () {
          return i;
        },
      });
    },
    873199: function (e, t, n) {
      var i, r;
      n.d(t, {
        o: function () {
          return i;
        },
      }),
        n(47120),
        ((r = i || (i = {}))[(r.LIST = 1)] = "LIST"),
        (r[(r.LIST_WITH_IMAGE = 2)] = "LIST_WITH_IMAGE"),
        (r[(r.GALLERY = 3)] = "GALLERY"),
        (r[(r.EXPANDABLE_LIST = 4)] = "EXPANDABLE_LIST"),
        (r[(r.BANNER_CARDS = 5)] = "BANNER_CARDS"),
        (r[(r.SMALL_BANNER_CARDS = 6)] = "SMALL_BANNER_CARDS");
    },
    209173: function (e, t, n) {
      var i, r;
      n.d(t, {
        s: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.APPLICATION = 1)] = "APPLICATION"),
        (r[(r.ACTIVITY_APPLICATION = 2)] = "ACTIVITY_APPLICATION"),
        (r[(r.CONNECTION = 3)] = "CONNECTION");
    },
    860156: function (e, t, n) {
      e.exports = {
        container: "container_fb1469",
        containerPadding: "containerPadding_fb1469",
        image: "image_fb1469",
        body: "body_fb1469",
      };
    },
    978733: function (e, t, n) {
      e.exports = { btnContent: "btnContent_cdaed4" };
    },
    321065: function (e, t, n) {
      e.exports = { title: "title_eaa702" };
    },
    383583: function (e, t, n) {
      e.exports = { animator: "animator_abd0f1", item: "item_abd0f1" };
    },
    374865: function (e, t, n) {
      e.exports = {
        markdown: "markdown_b97ce2",
        blockquote: "blockquote_b97ce2",
        codeInline: "codeInline_b97ce2",
        paragraph: "paragraph_b97ce2",
      };
    },
    659915: function (e, t, n) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    221309: function (e, t, n) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    135970: function (e, t, n) {
      e.exports = {
        body: "body_bf926b",
        reviewStep: "reviewStep_bf926b",
        sliderBody: "sliderBody_bf926b",
        addPaymentSteps: "addPaymentSteps_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
        sliderBodyDynamic: "sliderBodyDynamic_bf926b",
      };
    },
    76962: function (e, t, n) {
      e.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    134384: function (e, t, n) {
      e.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    641479: function (e, t, n) {
      e.exports = {
        headerContainer: "headerContainer_fe5d81",
        closeContainer: "closeContainer_fe5d81",
        closeIcon: "closeIcon_fe5d81",
        headerImageContainer: "headerImageContainer_fe5d81",
        headerImage: "headerImage_fe5d81",
        confirmationContainer: "confirmationContainer_fe5d81",
        purchaseConfirmation:
          "purchaseConfirmation_fe5d81 confirmationContainer_fe5d81",
        confirmationTitle: "confirmationTitle_fe5d81",
        confirmationSubtitle: "confirmationSubtitle_fe5d81",
      };
    },
    630480: function (e, t, n) {
      e.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
      };
    },
    789864: function (e, t, n) {
      e.exports = {
        container: "container_f91bb7",
        image: "image_f91bb7",
        description: "description_f91bb7",
        card: "card_f91bb7",
        body: "body_f91bb7",
        purchaseBtn: "purchaseBtn_f91bb7",
        benefits: "benefits_f91bb7",
        benefitsContainer: "benefitsContainer_f91bb7",
        benefitsList: "benefitsList_f91bb7",
        cardBenefit: "cardBenefit_f91bb7",
        cardBenefitIcon: "cardBenefitIcon_f91bb7",
        benefitsSummary: "benefitsSummary_f91bb7",
      };
    },
    717729: function (e, t, n) {
      e.exports = { hoverCard: "hoverCard_d991d3" };
    },
  },
]);
//# sourceMappingURL=80dda69a8b01307c7273.js.map
