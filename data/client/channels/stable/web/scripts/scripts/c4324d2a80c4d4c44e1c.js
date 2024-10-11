"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26124"],
  {
    902294: function (e) {
      e.exports = "/assets/82e4627b29fa4e594d1d.svg";
    },
    211739: function (e, n, t) {
      t.d(n, {
        N5: function () {
          return l;
        },
        c4: function () {
          return r;
        },
        lc: function () {
          return c;
        },
        mJ: function () {
          return o;
        },
      });
      var i = t(570140);
      function r(e) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function o(e) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND", id: e });
      }
      function l(e) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function c(e) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    463571: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(481060);
      function o(e) {
        let { children: n, ...t } = e;
        return (0, i.jsx)(r.Anchor, {
          ...t,
          onClick: (e) => e.preventDefault(),
          useDefaultUnderlineStyles: !1,
          children: n,
        });
      }
    },
    738130: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return j;
        },
      });
      var i = t(735250),
        r = t(470079),
        o = t(120356),
        l = t.n(o),
        c = t(392711),
        s = t(772848),
        a = t(873546),
        u = t(481060),
        C = t(425493),
        d = t(612226),
        p = t(714338),
        f = t(782568),
        h = t(252618),
        A = t(434404),
        E = t(677726),
        I = t(703656),
        _ = t(671533),
        L = t(626135),
        g = t(63063),
        m = t(674588),
        T = t(463571),
        R = t(887706),
        v = t(132871),
        O = t(147890),
        P = t(981631),
        N = t(420212),
        Z = t(689938),
        x = t(433027);
      let D = g.Z.getArticleURL(P.BhN.APP_DIRECTORY_HEADER_LEARN_MORE);
      function M(e) {
        let { onClose: n } = e,
          t = r.useRef(null);
        return (0, i.jsx)("div", {
          ref: t,
          className: x.closeWrapper,
          children: (0, i.jsx)(u.FocusRingScope, {
            containerRef: t,
            children: (0, i.jsx)("div", {
              className: x.closeContent,
              children: (0, i.jsx)(C.Z, {
                className: x.closeIcon,
                closeAction: n,
                keybind: "ESC",
              }),
            }),
          }),
        });
      }
      function y(e) {
        let {
            onTitleClick: n,
            showsLearnMoreCta: t,
            guildId: o,
            children: c,
          } = e,
          s = (0, i.jsxs)(r.Fragment, {
            children: [
              (0, i.jsx)(E.Z, { title: Z.Z.Messages.APP_DIRECTORY }),
              t &&
                (0, i.jsx)(u.Anchor, {
                  onClick: function () {
                    L.default.track(P.rMx.APP_DIRECTORY_CTA_CLICKED, {
                      cta: "directory-help-center",
                      current_page: v.ApplicationDirectoryViews.HOME,
                      guild_id: o,
                    }),
                      (0, f.Z)(D);
                  },
                  children: Z.Z.Messages.LEARN_MORE,
                }),
            ],
          });
        return (0, i.jsxs)("div", {
          className: x.header,
          children: [
            null != n
              ? (0, i.jsx)(T.Z, {
                  href: P.Z5c.APPLICATION_DIRECTORY,
                  children: (0, i.jsx)(u.Clickable, {
                    onClick: n,
                    className: l()(x.titleContainer, x.clickable),
                    children: s,
                  }),
                })
              : (0, i.jsx)("div", { className: x.titleContainer, children: s }),
            c,
          ],
        });
      }
      function S(e) {
        let n,
          { view: t, onClick: r } = e;
        if (null == t) return null;
        switch (t.type) {
          case v.ApplicationDirectoryViews.HOME:
            n = Z.Z.Messages.HOME;
            break;
          case v.ApplicationDirectoryViews.SEARCH:
            n = Z.Z.Messages.SEARCH;
            break;
          case v.ApplicationDirectoryViews.APPLICATION:
            var o;
            n =
              null !== (o = null == t ? void 0 : t.applicationName) &&
              void 0 !== o
                ? o
                : Z.Z.Messages.BACK;
            break;
          default:
            n = Z.Z.Messages.BACK;
        }
        return (0, i.jsxs)(u.Clickable, {
          className: x.back,
          onClick: r,
          children: [
            (0, i.jsx)(_.Z, {
              direction: _.Z.Directions.LEFT,
              className: x.backIcon,
            }),
            (0, i.jsx)(u.Heading, {
              className: x.backHeader,
              variant: "heading-sm/semibold",
              children: n,
            }),
          ],
        });
      }
      let w = (0, c.debounce)((e) => {
        let {
          scrollTop: n,
          scrollOffset: t,
          scrollHeight: i,
          location: r,
          guildId: o,
          sessionId: l,
        } = e;
        n > 0 &&
          L.default.track(P.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
            scroll_visible_percentile: (n + t) / i,
            guild_id: o,
            location: r,
            directory_session_id: l,
          });
      }, 200);
      function j(e) {
        let { children: n } = e,
          t = r.useRef(null),
          o = (0, R.Z)(),
          c = (0, v.useApplicationDirectoryHistory)((e) => e.guildId),
          C = (0, v.useApplicationDirectoryHistory)((e) => e.entrypoint),
          f = (0, v.useApplicationDirectoryHistory)(
            (e) => e.trackedOpenedFromExternalEntrypoint,
          ),
          E = (0, v.getCurrentView)(),
          _ = (0, v.getPreviousView)(),
          g = r.useRef(),
          T =
            (null == E ? void 0 : E.type) !== v.ApplicationDirectoryViews.HOME,
          D =
            (null == E ? void 0 : E.type) ===
            v.ApplicationDirectoryViews.APPLICATION
              ? null == E
                ? void 0
                : E.applicationId
              : void 0;
        (0, h.Tt)({ location: Z.Z.Messages.APP_DIRECTORY });
        let j =
          (null == E ? void 0 : E.type) !== v.ApplicationDirectoryViews.HOME &&
          null != _;
        r.useEffect(() => {
          !f &&
            null == C &&
            (L.default.track(P.rMx.APP_DIRECTORY_OPENED, {
              source: v.ApplicationDirectoryEntrypointNames.EXTERNAL,
            }),
            (0, v.setTrackedOpenedFromExternalEntrypoint)(!0));
        }, [C, f]),
          r.useEffect(() => {
            if (o)
              return p.Z.setLayout(d.ZP), p.Z.enable(), () => p.Z.disable();
          }, [o]),
          r.useEffect(() => {
            m.CP();
          }, []),
          r.useEffect(() => {
            o && m.g5();
          }, [o]),
          r.useEffect(() => {
            g.current = (0, s.Z)();
          }, [null == E ? void 0 : E.type, D]);
        let H = r.useCallback(() => {
          var e, n;
          (0, I.uL)(
            null !== (e = null == C ? void 0 : C.pathname) && void 0 !== e
              ? e
              : "",
          ),
            null != C &&
              C.name === v.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS &&
              null != c &&
              A.Z.open(
                c,
                null !== (n = C.guildSettingsSection) && void 0 !== n
                  ? n
                  : void 0,
              );
        }, [C, c]);
        return (
          r.useEffect(() => {
            let e = (e) => {
              e.key === N.vn.ESCAPE && (e.stopPropagation(), H());
            };
            return (
              document.addEventListener("keydown", e),
              () => {
                document.removeEventListener("keydown", e);
              }
            );
          }, [H]),
          (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(u.AdvancedScroller, {
              className: l()(x.directoryContainer, {
                [x.directoryContainerMobile]: a.tq,
                [x.directoryContainerTablet]: a.Em,
              }),
              ref: t,
              onScroll: () => {
                var e, n, i;
                return w({
                  scrollTop:
                    null === (e = t.current) || void 0 === e
                      ? void 0
                      : e.getScrollerState().scrollTop,
                  scrollOffset:
                    null === (n = t.current) || void 0 === n
                      ? void 0
                      : n.getScrollerState().offsetHeight,
                  scrollHeight:
                    null === (i = t.current) || void 0 === i
                      ? void 0
                      : i.getScrollerState().scrollHeight,
                  location: null == E ? void 0 : E.type,
                  guildId: c,
                  sessionId: g.current,
                });
              },
              children: (0, i.jsxs)("div", {
                className: x.content,
                children: [
                  (0, i.jsx)(y, {
                    onTitleClick: T ? O.goHome : void 0,
                    showsLearnMoreCta:
                      (null == E ? void 0 : E.type) ===
                      v.ApplicationDirectoryViews.HOME,
                    guildId: c,
                    children: o ? (0, i.jsx)(M, { onClose: H }) : null,
                  }),
                  j &&
                    (0, i.jsx)(S, {
                      view: _,
                      onClick: () => {
                        (0, I.op)();
                      },
                    }),
                  n,
                ],
              }),
            }),
          })
        );
      }
    },
    34674: function (e, n, t) {
      t.d(n, {
        $_: function () {
          return E;
        },
        KQ: function () {
          return h;
        },
        MU: function () {
          return C;
        },
        m0: function () {
          return f;
        },
        rf: function () {
          return I;
        },
        tu: function () {
          return A;
        },
      }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120),
        t(315314);
      var i = t(860911),
        r = t(477690),
        o = t(481060),
        l = t(134432),
        c = t(703656),
        s = t(768581),
        a = t(981631),
        u = t(689938);
      let C = 0,
        { API_ENDPOINT: d, CDN_HOST: p } = window.GLOBAL_ENV;
      function f(e) {
        return e.id === C;
      }
      function h() {
        return { id: C, name: u.Z.Messages.APP_DIRECTORY_ALL_CATEGORY };
      }
      function A(e) {
        switch (e.id) {
          case 0:
            return o.GlobeEarthIcon;
          case 4:
            return o.TvIcon;
          case 5:
            return o.AnalyticsIcon;
          case 6:
            return o.GameControllerIcon;
          case 8:
            break;
          case 9:
            return o.FriendsIcon;
          case 10:
            return o.WrenchIcon;
        }
        return o.AsteriskIcon;
      }
      function E(e) {
        let { itemId: n, hash: t } = e,
          i = new URLSearchParams({
            size: (0, l.oO)(
              parseFloat(r.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, l.x_)(),
            ).toString(),
          }).toString(),
          o = s.$k ? "webp" : "png";
        return null != p
          ? ""
              .concat(location.protocol, "//")
              .concat(p, "/app-assets/application-directory/collection-items/")
              .concat(n, "/")
              .concat(t, ".")
              .concat(o, "?")
              .concat(i)
          : ""
              .concat(location.protocol)
              .concat(d)
              .concat(
                a.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(n, t, o),
                "?",
              )
              .concat(i);
      }
      function I() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = new URL(location.href);
        for (let t in e) {
          let i = e[t];
          n.searchParams.set(t, i);
        }
        let t = n.pathname + n.search,
          r = (0, i.Ui)(t, !1);
        (0, c.uL)(r);
      }
    },
    924489: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
        x: function () {
          return i;
        },
      }),
        t(653041);
      var i,
        r,
        o = t(735250),
        l = t(470079),
        c = t(120356),
        s = t.n(c),
        a = t(477690),
        u = t(481060),
        C = t(686546),
        d = t(768581),
        p = t(624138),
        f = t(689938),
        h = t(488107);
      ((r = i || (i = {}))[
        (r.SMALL = (0, p.Mg)(a.Z.GUILD_COUNT_SMALL_ICON_SIZE))
      ] = "SMALL"),
        (r[(r.LARGE = (0, p.Mg)(a.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE");
      let A = { [i.SMALL]: h.moreGuildsSmall, [i.LARGE]: h.moreGuildsLarge },
        E = { [i.SMALL]: h.iconSmall, [i.LARGE]: h.iconLarge };
      function I(e) {
        var n, t, r;
        let {
            application: c,
            mutualGuilds: a,
            mutualGuildShownMax: p = 4,
            className: I,
            textVariant: _ = "text-sm/normal",
            compact: L,
            guildIconSize: g = i.LARGE,
          } = e,
          m = new Intl.ListFormat("en-US"),
          T =
            null !==
              (t =
                null === (n = c.directory_entry) || void 0 === n
                  ? void 0
                  : n.guild_count) && void 0 !== t
              ? t
              : 0,
          R =
            null !== (r = null == a ? void 0 : a.length) && void 0 !== r
              ? r
              : 0,
          v = Math.max(0, T - R),
          { shownMutualGuilds: O, hiddenMutualGuilds: P } = l.useMemo(() => {
            let e = [],
              n = [];
            return (
              null == a ||
                a.forEach((t) => {
                  e.length < p && null != t.icon ? e.push(t) : n.push(t);
                }),
              e.length === p &&
                n.length > 0 &&
                (n.push(e[p - 1]), (e = e.slice(0, p - 1))),
              { shownMutualGuilds: e, hiddenMutualGuilds: n }
            );
          }, [a, p]),
          N = P.length,
          Z = (function (e, n, t, i) {
            if (0 === n && 0 === e) return null;
            if (n > 0 && 0 === t)
              return f.Z.Messages.APP_DIRECTORY_MUTUAL_GUILD_COUNT.format({
                mutualGuildCount: n,
              });
            let r =
                n > 0
                  ? f.Z.Messages.APP_DIRECTORY_GUILD_COUNT_WITH_MUTUALS
                  : f.Z.Messages.APP_DIRECTORY_GUILD_COUNT,
              o = new Intl.NumberFormat("en-US", {
                notation: i ? "compact" : "standard",
                compactDisplay: "short",
              });
            return r.format({
              guildCount: o.format(e),
              mutualGuildCount: n,
              nonMutualGuildCount: o.format(t),
            });
          })(T, R, v, L);
        return 0 === O.length && null == Z
          ? null
          : (0, o.jsxs)("div", {
              className: s()(I, h.wrapper),
              children: [
                (0, o.jsx)("div", {
                  className: h.icons,
                  children:
                    O.length > 0
                      ? (0, o.jsxs)(o.Fragment, {
                          children: [
                            O.map((e, n) => {
                              let t = n === O.length - 1 && 0 === N,
                                i = d.ZP.getGuildIconURL({
                                  id: e.id,
                                  icon: e.icon,
                                  size: g,
                                  canAnimate: !1,
                                }),
                                r = (0, o.jsx)(u.Tooltip, {
                                  text: e.name,
                                  position: "top",
                                  children: (e) =>
                                    (0, o.jsx)("img", {
                                      ...e,
                                      className: s()(h.icon, E[g]),
                                      src: i,
                                      alt: "",
                                    }),
                                });
                              return t
                                ? (0, o.jsx)(l.Fragment, { children: r }, e.id)
                                : (0, o.jsx)(
                                    C.ZP,
                                    {
                                      className: h.iconMask,
                                      height: g,
                                      width: g,
                                      mask: C.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                      children: r,
                                    },
                                    e.id,
                                  );
                            }),
                            N > 0
                              ? (0, o.jsx)(u.Tooltip, {
                                  text: f.Z.Messages.APP_DIRECTORY_GUILD_COUNT_PLUS_MUTUALS_TOOLTIP.format(
                                    {
                                      appNames: m.format(P.map((e) => e.name)),
                                    },
                                  ),
                                  position: "top",
                                  children: (e) =>
                                    (0, o.jsxs)("div", {
                                      ...e,
                                      className: s()(h.moreGuilds, A[g]),
                                      children: ["+", N],
                                    }),
                                })
                              : null,
                          ],
                        })
                      : (0, o.jsx)(u.CompassIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: g,
                          height: g,
                          className: h.defaultIcon,
                        }),
                }),
                null != Z
                  ? (0, o.jsx)(u.Text, {
                      variant: _,
                      color: "header-secondary",
                      children: Z,
                    })
                  : null,
              ],
            });
      }
    },
    125909: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(120356),
        o = t.n(r),
        l = t(481060),
        c = t(507716);
      function s(e) {
        let { loading: n, children: t } = e;
        return (0, i.jsxs)("div", {
          className: c.container,
          children: [
            n
              ? (0, i.jsx)("div", {
                  className: c.spinnerContainer,
                  children: (0, i.jsx)(l.Spinner, {
                    className: c.spinner,
                    type: l.Spinner.Type.SPINNING_CIRCLE,
                  }),
                })
              : null,
            (0, i.jsx)("div", {
              className: o()({ [c.loading]: n }),
              children: t,
            }),
          ],
        });
      }
    },
    147890: function (e, n, t) {
      t.r(n),
        t.d(n, {
          goHome: function () {
            return u;
          },
          goSearch: function () {
            return f;
          },
          goToAppDirectory: function () {
            return a;
          },
          goToApplication: function () {
            return C;
          },
          goToApplicationSection: function () {
            return d;
          },
          goToApplicationStoreSku: function () {
            return p;
          },
          goToCategory: function () {
            return h;
          },
          replaceAppDirectoryURLWith: function () {
            return A;
          },
        }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var i = t(703656),
        r = t(626135),
        o = t(34674),
        l = t(132871),
        c = t(272242),
        s = t(981631);
      let a = (e) => {
          let {
              view: n = l.ApplicationDirectoryViews.HOME,
              guildId: t,
              applicationId: i,
              applicationSection: o,
              entrypoint: a,
              skuId: h,
            } = e,
            A = { ...a, pathname: window.location.pathname };
          switch (
            (r.default.track(s.rMx.APP_DIRECTORY_OPENED, {
              source: null == A ? void 0 : A.name,
            }),
            (0, l.resetApplicationDirectoryHistory)(),
            (0, l.setEntrypoint)(A),
            null != t && (0, l.setGuildId)(t),
            n === l.ApplicationDirectoryViews.APPLICATION &&
              null == i &&
              (n = l.ApplicationDirectoryViews.HOME),
            n)
          ) {
            case l.ApplicationDirectoryViews.HOME:
              u();
              break;
            case l.ApplicationDirectoryViews.SEARCH:
              f();
              break;
            case l.ApplicationDirectoryViews.APPLICATION:
              if (null != i) {
                if (null != o) {
                  if (
                    o === c.ApplicationDirectoryProfileSections.STORE &&
                    null != h
                  ) {
                    p({ applicationId: i, skuId: h });
                    break;
                  }
                  d({ applicationId: i, section: o });
                  break;
                }
                C({ applicationId: i });
              }
          }
        },
        u = () => {
          let e = { previousView: (0, l.getCurrentView)() };
          (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        C = (e) => {
          let { applicationId: n } = e,
            t = { previousView: (0, l.getCurrentView)() };
          (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE(n), { state: t });
        },
        d = (e) => {
          let { applicationId: n, section: t } = e,
            r = { previousView: (0, l.getCurrentView)() };
          (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(n, t), {
            state: r,
          });
        },
        p = (e) => {
          let { applicationId: n, skuId: t } = e,
            r = { previousView: (0, l.getCurrentView)() };
          (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t), {
            state: r,
          });
        },
        f = function () {
          let {
              query: e,
              categoryId: n,
              page: t,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            r = new URLSearchParams(),
            o = { previousView: (0, l.getCurrentView)() };
          null != e && r.set("q", e),
            null != n && r.set("category_id", n.toString()),
            null != t && r.set("page", t.toString()),
            (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: r.toString(),
              state: o,
            });
        },
        h = (e) => {
          let { categoryId: n } = e;
          f({ categoryId: null != n ? n : o.MU });
        },
        A = (e) => {
          let {
            location: { state: n },
          } = (0, i.s1)();
          (0, i.dL)(e, n);
        };
    },
    491576: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(653041),
        t(47120);
      var i = t(470079),
        r = t(442837),
        o = t(430824),
        l = t(973001);
      function c(e) {
        let { application: n, showMutualGuilds: t = !0 } = e,
          c = (0, r.e7)(
            [l.Z],
            () => l.Z.getGuildIdsForApplication(null == n ? void 0 : n.id),
            [n],
          ),
          s = (0, r.e7)([o.Z], () => o.Z.isLoaded());
        return i.useMemo(() => {
          let e = [];
          if (!s || !t || null == c || null == n) return e;
          for (let n of c) {
            let t = o.Z.getGuild(n);
            null != t && e.push(t);
          }
          return e;
        }, [s, c, n, t]);
      }
    },
    677726: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(120356),
        o = t.n(r),
        l = t(481060),
        c = t(471731),
        s = t(985312);
      function a(e) {
        let { title: n, className: t, ref: r } = e;
        return (0, i.jsxs)("div", {
          className: o()(s.header, t),
          ref: r,
          children: [
            (0, i.jsx)(c.Z, { className: s.logo }),
            (0, i.jsx)(l.HeadingLevel, {
              forceLevel: 1,
              children: (0, i.jsx)(l.Heading, {
                className: s.title,
                variant: "heading-md/semibold",
                color: "header-secondary",
                children: n,
              }),
            }),
          ],
        });
      }
    },
    671533: function (e, n, t) {
      t(411104);
      var i,
        r,
        o = t(735250);
      t(470079);
      var l = t(120356),
        c = t.n(l),
        s = t(325767),
        a = t(865244);
      ((r = i || (i = {})).LEFT = "LEFT"),
        (r.RIGHT = "RIGHT"),
        (r.UP = "UP"),
        (r.DOWN = "DOWN"),
        (r.UP_LEFT = "UP_LEFT"),
        (r.DOWN_RIGHT = "DOWN_RIGHT");
      let u = (e) => {
        let {
          width: n = 24,
          height: t = 24,
          color: i = "currentColor",
          direction: r,
          foreground: l,
          className: u,
          title: C,
          ...d
        } = e;
        return (0, o.jsxs)("svg", {
          ...(0, s.Z)(d),
          width: n,
          height: t,
          className: c()(
            u,
            (function (e) {
              switch (e) {
                case "LEFT":
                  return a.left;
                case "RIGHT":
                  return a.right;
                case "UP":
                  return null;
                case "DOWN":
                  return a.down;
                case "UP_LEFT":
                  return a.upLeft;
                case "DOWN_RIGHT":
                  return a.downRight;
                default:
                  throw Error("Invalid Direction ".concat(e));
              }
            })(r),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != C ? (0, o.jsx)("title", { children: C }) : null,
            (0, o.jsx)("polygon", {
              className: l,
              fill: i,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (u.Directions = i), (n.Z = u);
    },
    471731: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(325767);
      function o(e) {
        let {
          width: n = 124,
          height: t = 24,
          color: o = "currentColor",
          foreground: l,
          ...c
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.Z)(c),
          width: n,
          height: t,
          viewBox: "0 0 124 24",
          children: (0, i.jsxs)("g", {
            fill: o,
            className: l,
            children: [
              (0, i.jsx)("path", {
                d: "M26.2421 2.00996C24.2367 1.07098 22.0925 0.388543 19.8509 0C19.5755 0.498132 19.2539 1.16812 19.0322 1.70112C16.6492 1.34247 14.2881 1.34247 11.949 1.70112C11.7273 1.16812 11.3983 0.498132 11.1206 0C8.87648 0.388543 6.72984 1.07347 4.72453 2.01494C0.679785 8.132 -0.41668 14.0971 0.131553 19.9776C2.81424 21.9826 5.41408 23.2005 7.97006 23.9975C8.60114 23.1283 9.16399 22.2042 9.64888 21.2304C8.72541 20.8792 7.84093 20.4458 7.00517 19.9427C7.2269 19.7783 7.44376 19.6065 7.65331 19.4296C12.7507 21.8157 18.289 21.8157 23.3255 19.4296C23.5374 19.6065 23.7543 19.7783 23.9736 19.9427C23.1354 20.4483 22.2485 20.8817 21.325 21.2329C21.8099 22.2042 22.3703 23.1308 23.0038 24C25.5622 23.203 28.1645 21.9851 30.8472 19.9776C31.4905 13.1606 29.7483 7.25031 26.2421 2.00996ZM10.3433 16.3611C8.81313 16.3611 7.55828 14.9315 7.55828 13.1905C7.55828 11.4496 8.78632 10.0174 10.3433 10.0174C11.9003 10.0174 13.1551 11.4471 13.1283 13.1905C13.1308 14.9315 11.9003 16.3611 10.3433 16.3611ZM20.6355 16.3611C19.1053 16.3611 17.8504 14.9315 17.8504 13.1905C17.8504 11.4496 19.0785 10.0174 20.6355 10.0174C22.1924 10.0174 23.4473 11.4471 23.4205 13.1905C23.4205 14.9315 22.1924 16.3611 20.6355 16.3611Z",
              }),
              (0, i.jsx)("path", {
                d: "M41.6289 6.12256H48.2808C49.8841 6.12256 51.2388 6.3791 52.3499 6.88968C53.4586 7.40027 54.2894 8.1126 54.8401 9.02418C55.3908 9.93576 55.6685 10.9793 55.6685 12.1549C55.6685 13.3056 55.381 14.3492 54.806 15.2832C54.2309 16.2197 53.3562 16.9594 52.1793 17.5049C51.0025 18.0503 49.5454 18.3243 47.8032 18.3243H41.6289V6.12256ZM47.735 15.2234C48.8144 15.2234 49.6453 14.947 50.2252 14.3965C50.8051 13.8436 51.0951 13.0914 51.0951 12.1375C51.0951 11.2533 50.8368 10.5485 50.3202 10.0204C49.8037 9.49242 49.0215 9.22592 47.9762 9.22592H45.8954V15.2234H47.735Z",
              }),
              (0, i.jsx)("path", {
                d: "M65.6272 18.3094C64.7061 18.0654 63.8752 17.7117 63.137 17.2459V14.3518C63.6949 14.7926 64.443 15.1563 65.3811 15.4427C66.3191 15.7266 67.2256 15.8686 68.1027 15.8686C68.5121 15.8686 68.8215 15.8138 69.0311 15.7042C69.2406 15.5946 69.3454 15.4626 69.3454 15.3107C69.3454 15.1363 69.2894 14.9919 69.1748 14.8748C69.0603 14.7578 68.8386 14.6606 68.5096 14.5784L66.4629 14.1077C65.2909 13.8287 64.46 13.4427 63.9654 12.947C63.4708 12.4539 63.2247 11.8063 63.2247 11.0043C63.2247 10.3294 63.4391 9.74406 63.8728 9.24343C64.3041 8.74281 64.9181 8.35676 65.7149 8.08528C66.5116 7.8113 67.4424 7.67432 68.5121 7.67432C69.4672 7.67432 70.342 7.77892 71.1387 7.98814C71.9355 8.19736 72.5934 8.46386 73.1172 8.79013V11.5274C72.5812 11.2011 71.9672 10.9446 71.2654 10.7503C70.5661 10.5585 69.8473 10.4639 69.1066 10.4639C68.0369 10.4639 67.5033 10.6507 67.5033 11.0218C67.5033 11.1961 67.5862 11.3256 67.7519 11.4128C67.9176 11.5 68.2221 11.5896 68.6631 11.6843L70.3688 11.9981C71.4823 12.1949 72.3132 12.5411 72.859 13.0342C73.4047 13.5274 73.6777 14.2571 73.6777 15.2235C73.6777 16.282 73.2269 17.1214 72.3229 17.7441C71.4189 18.3667 70.1373 18.6781 68.4755 18.6781C67.4985 18.6756 66.5482 18.5535 65.6272 18.3094Z",
              }),
              (0, i.jsx)("path", {
                d: "M77.703 17.9432C76.726 17.455 75.9877 16.7925 75.4955 15.9557C75.0033 15.1188 74.7548 14.1773 74.7548 13.1312C74.7548 12.0852 75.0106 11.1487 75.5223 10.3243C76.034 9.49986 76.7844 8.85229 77.7737 8.38155C78.763 7.91082 79.9447 7.6767 81.3214 7.6767C83.027 7.6767 84.4426 8.04282 85.5683 8.77508V11.9656C85.1712 11.6867 84.7082 11.46 84.1795 11.2857C83.6508 11.1113 83.0855 11.0241 82.4812 11.0241C81.4237 11.0241 80.5977 11.2209 80.0007 11.6169C79.4038 12.0129 79.1041 12.5285 79.1041 13.1686C79.1041 13.7962 79.394 14.3093 79.9739 14.7128C80.5538 15.1138 81.3945 15.3156 82.4982 15.3156C83.066 15.3156 83.6264 15.2309 84.1795 15.064C84.7302 14.8946 85.2053 14.6879 85.6025 14.4438V17.5297C84.3525 18.2969 82.9027 18.6804 81.2531 18.6804C79.8643 18.6755 78.6801 18.4314 77.703 17.9432Z",
              }),
              (0, i.jsx)("path", {
                d: "M89.8227 17.9433C88.8383 17.4551 88.0878 16.7876 87.5713 15.9383C87.0547 15.089 86.794 14.1425 86.794 13.0965C86.794 12.0504 87.0523 11.1164 87.5713 10.297C88.0903 9.47754 88.8359 8.83495 89.8154 8.3692C90.7925 7.90345 91.9596 7.67181 93.3119 7.67181C94.6642 7.67181 95.8313 7.90345 96.8084 8.3692C97.7855 8.83495 98.5311 9.47256 99.0428 10.287C99.5544 11.1015 99.8103 12.0354 99.8103 13.094C99.8103 14.1401 99.5544 15.0865 99.0428 15.9358C98.5311 16.7851 97.783 17.4526 96.7987 17.9408C95.8143 18.429 94.652 18.6731 93.3095 18.6731C91.9669 18.6731 90.8046 18.4315 89.8227 17.9433ZM95.0053 14.8499C95.4195 14.4265 95.6291 13.8661 95.6291 13.1687C95.6291 12.4713 95.422 11.9159 95.0053 11.5049C94.5911 11.0915 94.0258 10.8848 93.3095 10.8848C92.5809 10.8848 92.0108 11.0915 91.5941 11.5049C91.1799 11.9184 90.9728 12.4713 90.9728 13.1687C90.9728 13.8661 91.1799 14.4265 91.5941 14.8499C92.0083 15.2733 92.5809 15.4875 93.3095 15.4875C94.0258 15.485 94.5911 15.2733 95.0053 14.8499Z",
              }),
              (0, i.jsx)("path", {
                d: "M110.059 8.31931V12.0852C109.625 11.7938 109.065 11.6493 108.37 11.6493C107.461 11.6493 106.76 11.9308 106.272 12.4937C105.782 13.0565 105.539 13.9333 105.539 15.1188V18.3268H101.36V8.12753H105.454V11.3704C105.68 10.1848 106.048 9.31059 106.555 8.74521C107.059 8.18232 107.712 7.90088 108.507 7.90088C109.108 7.90088 109.625 8.04036 110.059 8.31931Z",
              }),
              (0, i.jsx)("path", {
                d: "M123.942 5.77393V18.3268H119.763V16.0429C119.41 16.9022 118.874 17.5572 118.153 18.0056C117.432 18.4514 116.54 18.6755 115.482 18.6755C114.537 18.6755 113.713 18.4414 113.009 17.9707C112.305 17.5 111.762 16.8549 111.379 16.0354C110.999 15.216 110.806 14.2895 110.806 13.2534C110.794 12.1849 110.997 11.226 111.413 10.3767C111.827 9.52735 112.415 8.86483 113.17 8.38912C113.925 7.9134 114.788 7.6743 115.755 7.6743C117.746 7.6743 119.081 8.55848 119.763 10.3244V5.77393H123.942ZM119.14 14.7802C119.566 14.3567 119.778 13.8063 119.778 13.1338C119.778 12.4838 119.571 11.9533 119.157 11.5473C118.742 11.1413 118.175 10.9371 117.461 10.9371C116.757 10.9371 116.194 11.1438 115.772 11.5572C115.351 11.9707 115.141 12.5062 115.141 13.1687C115.141 13.8312 115.351 14.3717 115.772 14.7901C116.194 15.2085 116.749 15.4178 117.444 15.4178C118.148 15.4153 118.713 15.2036 119.14 14.7802Z",
              }),
              (0, i.jsx)("path", {
                d: "M59.1896 9.21341C60.3401 9.21341 61.2728 8.35701 61.2728 7.30058C61.2728 6.24416 60.3401 5.38776 59.1896 5.38776C58.039 5.38776 57.1063 6.24416 57.1063 7.30058C57.1063 8.35701 58.039 9.21341 59.1896 9.21341Z",
              }),
              (0, i.jsx)("path", {
                d: "M57.1044 10.531C58.3811 11.0939 59.9649 11.1188 61.2709 10.531V18.3816H57.1044V10.531Z",
              }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=c4324d2a80c4d4c44e1c.js.map
