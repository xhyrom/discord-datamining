"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81887"],
  {
    902294: function (e) {
      e.exports = "/assets/82e4627b29fa4e594d1d.svg";
    },
    211739: function (e, t, n) {
      n.d(t, {
        N5: function () {
          return c;
        },
        c4: function () {
          return r;
        },
        lc: function () {
          return o;
        },
        mJ: function () {
          return l;
        },
      });
      var i = n(570140);
      function r(e) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function l(e) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND", id: e });
      }
      function c(e) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function o(e) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    463571: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060);
      function l(e) {
        let { children: t, ...n } = e;
        return (0, i.jsx)(r.Anchor, {
          ...n,
          onClick: (e) => e.preventDefault(),
          useDefaultUnderlineStyles: !1,
          children: t,
        });
      }
    },
    738130: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return k;
        },
      });
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        c = n.n(l),
        o = n(392711),
        s = n(772848),
        a = n(873546),
        u = n(481060),
        d = n(425493),
        C = n(612226),
        p = n(714338),
        h = n(782568),
        f = n(252618),
        m = n(434404),
        E = n(677726),
        A = n(703656),
        v = n(671533),
        g = n(626135),
        x = n(63063),
        L = n(674588),
        Z = n(463571),
        N = n(887706),
        S = n(132871),
        j = n(147890),
        T = n(981631),
        y = n(420212),
        _ = n(388032),
        I = n(433027);
      let P = x.Z.getAppsSupportURL(T.BhN.APPS_LEARN_MORE);
      function R(e) {
        let { onClose: t } = e,
          n = r.useRef(null);
        return (0, i.jsx)("div", {
          ref: n,
          className: I.closeWrapper,
          children: (0, i.jsx)(u.FocusRingScope, {
            containerRef: n,
            children: (0, i.jsx)("div", {
              className: I.closeContent,
              children: (0, i.jsx)(d.Z, {
                className: I.closeIcon,
                closeAction: t,
                keybind: "ESC",
              }),
            }),
          }),
        });
      }
      function M(e) {
        let {
            onTitleClick: t,
            showsLearnMoreCta: n,
            guildId: l,
            children: o,
          } = e,
          s = (0, i.jsxs)(r.Fragment, {
            children: [
              (0, i.jsx)(E.Z, { title: _.intl.string(_.t.AKcFUl) }),
              n &&
                (0, i.jsx)(u.Anchor, {
                  onClick: function () {
                    g.default.track(T.rMx.APP_DIRECTORY_CTA_CLICKED, {
                      cta: "directory-help-center",
                      current_page: S.ApplicationDirectoryViews.HOME,
                      guild_id: l,
                    }),
                      (0, h.Z)(P);
                  },
                  children: _.intl.string(_.t.hvVgAQ),
                }),
            ],
          });
        return (0, i.jsxs)("div", {
          className: I.header,
          children: [
            null != t
              ? (0, i.jsx)(Z.Z, {
                  href: T.Z5c.APPLICATION_DIRECTORY,
                  children: (0, i.jsx)(u.Clickable, {
                    onClick: t,
                    className: c()(I.titleContainer, I.clickable),
                    children: s,
                  }),
                })
              : (0, i.jsx)("div", { className: I.titleContainer, children: s }),
            o,
          ],
        });
      }
      function O(e) {
        let t,
          { view: n, onClick: r } = e;
        if (null == n) return null;
        switch (n.type) {
          case S.ApplicationDirectoryViews.HOME:
            t = _.intl.string(_.t.Ym2Ri4);
            break;
          case S.ApplicationDirectoryViews.SEARCH:
            t = _.intl.string(_.t["5h0QOD"]);
            break;
          case S.ApplicationDirectoryViews.APPLICATION:
            var l;
            t =
              null !== (l = null == n ? void 0 : n.applicationName) &&
              void 0 !== l
                ? l
                : _.intl.string(_.t["13/7kZ"]);
            break;
          default:
            t = _.intl.string(_.t["13/7kZ"]);
        }
        return (0, i.jsxs)(u.Clickable, {
          className: I.back,
          onClick: r,
          children: [
            (0, i.jsx)(v.Z, {
              direction: v.Z.Directions.LEFT,
              className: I.backIcon,
            }),
            (0, i.jsx)(u.Heading, {
              className: I.backHeader,
              variant: "heading-sm/semibold",
              children: t,
            }),
          ],
        });
      }
      let D = (0, o.debounce)((e) => {
        let {
          scrollTop: t,
          scrollOffset: n,
          scrollHeight: i,
          location: r,
          guildId: l,
          sessionId: c,
        } = e;
        t > 0 &&
          g.default.track(T.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
            scroll_visible_percentile: (t + n) / i,
            guild_id: l,
            location: r,
            directory_session_id: c,
          });
      }, 200);
      function k(e) {
        let { children: t } = e,
          n = r.useRef(null),
          l = (0, N.Z)(),
          o = (0, S.useApplicationDirectoryHistory)((e) => e.guildId),
          d = (0, S.useApplicationDirectoryHistory)((e) => e.entrypoint),
          h = (0, S.useApplicationDirectoryHistory)(
            (e) => e.trackedOpenedFromExternalEntrypoint,
          ),
          E = (0, S.getCurrentView)(),
          v = (0, S.getPreviousView)(),
          x = r.useRef(),
          Z =
            (null == E ? void 0 : E.type) !== S.ApplicationDirectoryViews.HOME,
          P =
            (null == E ? void 0 : E.type) ===
            S.ApplicationDirectoryViews.APPLICATION
              ? null == E
                ? void 0
                : E.applicationId
              : void 0;
        (0, f.Tt)({ location: _.intl.string(_.t.AKcFUl) });
        let k =
          (null == E ? void 0 : E.type) !== S.ApplicationDirectoryViews.HOME &&
          null != v;
        r.useEffect(() => {
          !h &&
            null == d &&
            (g.default.track(T.rMx.APP_DIRECTORY_OPENED, {
              source: S.ApplicationDirectoryEntrypointNames.EXTERNAL,
            }),
            (0, S.setTrackedOpenedFromExternalEntrypoint)(!0));
        }, [d, h]),
          r.useEffect(() => {
            if (l)
              return p.Z.setLayout(C.ZP), p.Z.enable(), () => p.Z.disable();
          }, [l]),
          r.useEffect(() => {
            L.CP();
          }, []),
          r.useEffect(() => {
            l && L.g5();
          }, [l]),
          r.useEffect(() => {
            x.current = (0, s.Z)();
          }, [null == E ? void 0 : E.type, P]);
        let w = r.useCallback(() => {
          var e, t;
          (0, A.uL)(
            null !== (e = null == d ? void 0 : d.pathname) && void 0 !== e
              ? e
              : "",
          ),
            null != d &&
              d.name === S.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS &&
              null != o &&
              m.Z.open(
                o,
                null !== (t = d.guildSettingsSection) && void 0 !== t
                  ? t
                  : void 0,
              );
        }, [d, o]);
        return (
          r.useEffect(() => {
            let e = (e) => {
              e.key === y.vn.ESCAPE && (e.stopPropagation(), w());
            };
            return (
              document.addEventListener("keydown", e),
              () => {
                document.removeEventListener("keydown", e);
              }
            );
          }, [w]),
          (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(u.AdvancedScroller, {
              className: c()(I.directoryContainer, {
                [I.directoryContainerMobile]: a.tq,
                [I.directoryContainerTablet]: a.Em,
              }),
              ref: n,
              onScroll: () => {
                var e, t, i;
                return D({
                  scrollTop:
                    null === (e = n.current) || void 0 === e
                      ? void 0
                      : e.getScrollerState().scrollTop,
                  scrollOffset:
                    null === (t = n.current) || void 0 === t
                      ? void 0
                      : t.getScrollerState().offsetHeight,
                  scrollHeight:
                    null === (i = n.current) || void 0 === i
                      ? void 0
                      : i.getScrollerState().scrollHeight,
                  location: null == E ? void 0 : E.type,
                  guildId: o,
                  sessionId: x.current,
                });
              },
              children: (0, i.jsxs)("div", {
                className: I.content,
                children: [
                  (0, i.jsx)(M, {
                    onTitleClick: Z ? j.goHome : void 0,
                    showsLearnMoreCta:
                      (null == E ? void 0 : E.type) ===
                      S.ApplicationDirectoryViews.HOME,
                    guildId: o,
                    children: l ? (0, i.jsx)(R, { onClose: w }) : null,
                  }),
                  k &&
                    (0, i.jsx)(O, {
                      view: v,
                      onClick: () => {
                        (0, A.op)();
                      },
                    }),
                  t,
                ],
              }),
            }),
          })
        );
      }
    },
    924489: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
        x: function () {
          return i;
        },
      }),
        n(653041);
      var i,
        r,
        l = n(200651),
        c = n(192379),
        o = n(120356),
        s = n.n(o),
        a = n(442837),
        u = n(477690),
        d = n(481060),
        C = n(686546),
        p = n(706454),
        h = n(768581),
        f = n(624138),
        m = n(388032),
        E = n(488107);
      ((r = i || (i = {}))[
        (r.SMALL = (0, f.Mg)(u.Z.GUILD_COUNT_SMALL_ICON_SIZE))
      ] = "SMALL"),
        (r[(r.LARGE = (0, f.Mg)(u.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE");
      let A = { [i.SMALL]: E.moreGuildsSmall, [i.LARGE]: E.moreGuildsLarge },
        v = { [i.SMALL]: E.iconSmall, [i.LARGE]: E.iconLarge };
      function g(e) {
        var t, n, r;
        let {
            application: o,
            mutualGuilds: u,
            mutualGuildShownMax: f = 4,
            className: g,
            textVariant: x = "text-sm/normal",
            compact: L,
            guildIconSize: Z = i.LARGE,
            guildsClassName: N,
          } = e,
          S = (0, a.e7)([p.default], () => p.default.locale),
          j = new Intl.ListFormat(S),
          T =
            null !==
              (n =
                null === (t = o.directory_entry) || void 0 === t
                  ? void 0
                  : t.guild_count) && void 0 !== n
              ? n
              : 0,
          y =
            null !== (r = null == u ? void 0 : u.length) && void 0 !== r
              ? r
              : 0,
          _ = Math.max(0, T - y),
          { shownMutualGuilds: I, hiddenMutualGuilds: P } = c.useMemo(() => {
            let e = [],
              t = [];
            return (
              null == u ||
                u.forEach((n) => {
                  e.length < f && null != n.icon ? e.push(n) : t.push(n);
                }),
              e.length === f &&
                t.length > 0 &&
                (t.push(e[f - 1]), (e = e.slice(0, f - 1))),
              { shownMutualGuilds: e, hiddenMutualGuilds: t }
            );
          }, [u, f]),
          R = P.length,
          M = (function (e, t, n, i, r) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === n)
              return m.intl.formatToPlainString(m.t.pnzE1t, {
                mutualGuildCount: t,
              });
            let l = t > 0 ? m.t.YR8PSE : m.t.GQjq6e,
              c = new Intl.NumberFormat(i, {
                notation: r ? "compact" : "standard",
                compactDisplay: "short",
              });
            return m.intl.formatToPlainString(l, {
              guildCount: c.format(e),
              mutualGuildCount: t,
              nonMutualGuildCount: c.format(n),
            });
          })(T, y, _, S, L);
        return 0 === I.length && null == M
          ? null
          : (0, l.jsxs)("div", {
              className: s()(g, E.wrapper),
              children: [
                (0, l.jsx)("div", {
                  className: s()(E.icons, N),
                  children:
                    I.length > 0
                      ? (0, l.jsxs)(l.Fragment, {
                          children: [
                            I.map((e, t) => {
                              let n = t === I.length - 1 && 0 === R,
                                i = h.ZP.getGuildIconURL({
                                  id: e.id,
                                  icon: e.icon,
                                  size: Z,
                                  canAnimate: !1,
                                }),
                                r = (0, l.jsx)(d.Tooltip, {
                                  text: e.name,
                                  position: "top",
                                  children: (e) =>
                                    (0, l.jsx)("img", {
                                      ...e,
                                      className: s()(E.icon, v[Z]),
                                      src: i,
                                      alt: "",
                                    }),
                                });
                              return n
                                ? (0, l.jsx)(c.Fragment, { children: r }, e.id)
                                : (0, l.jsx)(
                                    C.ZP,
                                    {
                                      className: E.iconMask,
                                      height: Z,
                                      width: Z,
                                      mask: C.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                      children: r,
                                    },
                                    e.id,
                                  );
                            }),
                            R > 0
                              ? (0, l.jsx)(d.Tooltip, {
                                  text: m.intl.formatToPlainString(m.t.m6oRrK, {
                                    appNames: j.format(P.map((e) => e.name)),
                                  }),
                                  position: "top",
                                  children: (e) =>
                                    (0, l.jsxs)("div", {
                                      ...e,
                                      className: s()(E.moreGuilds, A[Z]),
                                      children: ["+", R],
                                    }),
                                })
                              : null,
                          ],
                        })
                      : (0, l.jsx)(d.ServerIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: Z,
                          height: Z,
                          className: E.defaultIcon,
                        }),
                }),
                null != M
                  ? (0, l.jsx)(d.Text, {
                      variant: x,
                      color: "header-secondary",
                      children: M,
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
      var r = n(120356),
        l = n.n(r),
        c = n(481060),
        o = n(507716);
      function s(e) {
        let { loading: t, children: n } = e;
        return (0, i.jsxs)("div", {
          className: o.container,
          children: [
            t
              ? (0, i.jsx)("div", {
                  className: o.spinnerContainer,
                  children: (0, i.jsx)(c.Spinner, {
                    className: o.spinner,
                    type: c.Spinner.Type.SPINNING_CIRCLE,
                  }),
                })
              : null,
            (0, i.jsx)("div", {
              className: l()({ [o.loading]: t }),
              children: n,
            }),
          ],
        });
      }
    },
    824606: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(653041),
        n(47120);
      var i = n(192379),
        r = n(442837),
        l = n(430824),
        c = n(973001);
      function o(e) {
        let { application: t, showMutualGuilds: n = !0 } = e,
          o = (0, r.e7)(
            [c.Z],
            () => c.Z.getGuildIdsForApplication(null == t ? void 0 : t.id),
            [t],
          ),
          s = (0, r.e7)([l.Z], () => l.Z.isLoaded());
        return i.useMemo(() => {
          let e = [];
          if (!s || !n || null == o || null == t) return e;
          for (let t of o) {
            let n = l.Z.getGuild(t);
            null != n && e.push(n);
          }
          return e;
        }, [s, o, t, n]);
      }
    },
    677726: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        c = n(481060),
        o = n(471731),
        s = n(985312);
      function a(e) {
        let { title: t, className: n, ref: r } = e;
        return (0, i.jsxs)("div", {
          className: l()(s.header, n),
          ref: r,
          children: [
            (0, i.jsx)(o.Z, { className: s.logo }),
            (0, i.jsx)(c.HeadingLevel, {
              forceLevel: 1,
              children: (0, i.jsx)(c.Heading, {
                className: s.title,
                variant: "heading-md/semibold",
                color: "header-secondary",
                children: t,
              }),
            }),
          ],
        });
      }
    },
    850840: function (e, t, n) {
      let i;
      n(653041);
      var r,
        l = n(442837),
        c = n(570140);
      function o(e, t, n) {
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
      let s = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class a extends (r = l.ZP.PersistedStore) {
        initialize(e) {
          i = null != e ? e : s;
        }
        getState() {
          return i;
        }
        get hasAcceptedStoreTerms() {
          return i.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(e) {
          return i.hasAcceptedEulaIds.includes(e);
        }
      }
      o(a, "displayName", "ApplicationStoreUserSettingsStore"),
        o(a, "persistKey", "ApplicationStoreUserSettingsStore"),
        o(a, "migrations", [
          (e) =>
            null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e,
        ]),
        (t.Z = new a(c.Z, {
          APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            i.hasAcceptedStoreTerms = !0;
          },
          APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: t } = e;
            if (i.hasAcceptedEulaIds.includes(t)) return !1;
            i.hasAcceptedEulaIds.push(t);
          },
        }));
    },
    671533: function (e, t, n) {
      n(411104);
      var i,
        r,
        l = n(200651);
      n(192379);
      var c = n(120356),
        o = n.n(c),
        s = n(325767),
        a = n(865244);
      ((r = i || (i = {})).LEFT = "LEFT"),
        (r.RIGHT = "RIGHT"),
        (r.UP = "UP"),
        (r.DOWN = "DOWN"),
        (r.UP_LEFT = "UP_LEFT"),
        (r.DOWN_RIGHT = "DOWN_RIGHT");
      let u = (e) => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = "currentColor",
          direction: r,
          foreground: c,
          className: u,
          title: d,
          ...C
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.Z)(C),
          width: t,
          height: n,
          className: o()(
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
            null != d ? (0, l.jsx)("title", { children: d }) : null,
            (0, l.jsx)("polygon", {
              className: c,
              fill: i,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (u.Directions = i), (t.Z = u);
    },
    471731: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(325767);
      function l(e) {
        let {
          width: t = 124,
          height: n = 24,
          color: l = "currentColor",
          foreground: c,
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.Z)(o),
          width: t,
          height: n,
          viewBox: "0 0 124 24",
          children: (0, i.jsxs)("g", {
            fill: l,
            className: c,
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
//# sourceMappingURL=27ce744cc7055ebc90dc.js.map
