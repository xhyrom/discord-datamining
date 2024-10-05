"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23366"],
  {
    349445: function (e, t, n) {
      n.d(t, {
        SV: function () {
          return a;
        },
      });
      var i = n(470079);
      let r = (0, i.createContext)(null),
        o = { didCatch: !1, error: null };
      class a extends i.Component {
        constructor(e) {
          super(e),
            (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
            (this.state = o);
        }
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          let { error: e } = this.state;
          if (null !== e) {
            for (
              var t, n, i = arguments.length, r = Array(i), a = 0;
              a < i;
              a++
            )
              r[a] = arguments[a];
            null === (t = (n = this.props).onReset) ||
              void 0 === t ||
              t.call(n, { args: r, reason: "imperative-api" }),
              this.setState(o);
          }
        }
        componentDidCatch(e, t) {
          var n, i;
          null === (n = (i = this.props).onError) ||
            void 0 === n ||
            n.call(i, e, t);
        }
        componentDidUpdate(e, t) {
          let { didCatch: n } = this.state,
            { resetKeys: i } = this.props;
          if (
            n &&
            null !== t.error &&
            (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
              return (
                e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
              );
            })(e.resetKeys, i)
          ) {
            var r, a;
            null === (r = (a = this.props).onReset) ||
              void 0 === r ||
              r.call(a, { next: i, prev: e.resetKeys, reason: "keys" }),
              this.setState(o);
          }
        }
        render() {
          let {
              children: e,
              fallbackRender: t,
              FallbackComponent: n,
              fallback: o,
            } = this.props,
            { didCatch: a, error: l } = this.state,
            c = e;
          if (a) {
            let e = { error: l, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, i.isValidElement)(o)) c = o;
            else if ("function" == typeof t) c = t(e);
            else if (n) c = (0, i.createElement)(n, e);
            else throw l;
          }
          return (0, i.createElement)(
            r.Provider,
            {
              value: {
                didCatch: a,
                error: l,
                resetErrorBoundary: this.resetErrorBoundary,
              },
            },
            c,
          );
        }
      }
    },
    781402: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(470079);
      function r() {
        let e = (0, i.createContext)(void 0);
        return {
          Provider: ({ initialStore: t, createStore: n, children: r }) => {
            let o = (0, i.useRef)();
            return (
              !o.current &&
                (t &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version.",
                  ),
                  !n && (n = () => t)),
                (o.current = n())),
              (0, i.createElement)(e.Provider, { value: o.current }, r)
            );
          },
          useStore: (t, n = Object.is) => {
            let r = (0, i.useContext)(e);
            if (!r)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return r(t, n);
          },
          useStoreApi: () => {
            let t = (0, i.useContext)(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return (0, i.useMemo)(
              () => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy,
              }),
              [t],
            );
          },
        };
      }
    },
    191741: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
          useAppSidebarState: function () {
            return N;
          },
        });
      var i = n(735250),
        r = n(470079),
        o = n(652874),
        a = n(442837),
        l = n(481060),
        c = n(230711),
        u = n(174556),
        s = n(565138),
        d = n(300986),
        _ = n(314451),
        f = n(35583),
        g = n(51596),
        p = n(141321),
        h = n(703656),
        E = n(592125),
        I = n(430824),
        T = n(944486),
        b = n(998502),
        S = n(981631),
        C = n(741764),
        A = n(350133);
      let N = (0, o.Z)(() => ({ isOpen: !0 }));
      function O() {
        let e = (0, a.e7)([T.Z], () => T.Z.getChannelId()),
          t = (0, a.e7)([E.Z], () => E.Z.getChannel(e), [e]),
          n = I.Z.getGuild(null == t ? void 0 : t.guild_id),
          o = N((e) => e.isOpen),
          { hasBugReporterAccess: O } = u.Z.useExperiment(
            { location: "HeaderBar" },
            { autoTrackExposure: !1 },
          );
        return (
          r.useLayoutEffect(() => {
            b.ZP.setMinimumSize(C.J, C.N);
          }, []),
          (0, i.jsxs)("div", {
            className: A.bar,
            children: [
              (0, i.jsxs)("div", {
                className: A.sidebar,
                "data-sidebar-collapsed": !o,
                children: [
                  !o &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(l.Clickable, {
                          onClick: () => {
                            N.setState({ isOpen: !N.getState().isOpen });
                          },
                          children: (0, i.jsx)(m, {}),
                        }),
                        (0, i.jsx)(l.Clickable, {
                          onClick: () => {
                            c.Z.open(S.oAB.ACCOUNT);
                          },
                          children: (0, i.jsx)(l.SettingsIcon, { size: "xs" }),
                        }),
                      ],
                    }),
                  (0, i.jsx)(l.Clickable, {
                    onClick: () => (0, g.$Z)("APP_BAR"),
                    children: (0, i.jsx)(l.MagnifyingGlassIcon, { size: "xs" }),
                  }),
                  (0, i.jsx)(l.Clickable, {
                    onClick: h.op,
                    children: (0, i.jsx)(l.ArrowSmallLeftIcon, { size: "sm" }),
                  }),
                  (0, i.jsx)(l.Clickable, {
                    onClick: h.eH,
                    children: (0, i.jsx)(l.ArrowSmallRightIcon, { size: "sm" }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: A.center,
                children:
                  null != n &&
                  (0, i.jsxs)("div", {
                    className: A.guild,
                    children: [
                      (0, i.jsx)(s.Z, {
                        guild: n,
                        size: s.Z.Sizes.SMALLER,
                        active: !0,
                        className: A.icon,
                      }),
                      (0, i.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        children: n.name,
                      }),
                    ],
                  }),
              }),
              (0, i.jsxs)("div", {
                className: A.right,
                children: [
                  (0, i.jsx)(p.Z, {}),
                  O ? (0, i.jsx)(_.Z, {}) : (0, i.jsx)(d.Z, {}),
                  (0, i.jsx)(f.Z, {}),
                ],
              }),
            ],
          })
        );
      }
      function m() {
        return (0, i.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: A.icon,
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "var(--interactive-normal)",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          children: [
            (0, i.jsx)("rect", {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
            }),
            (0, i.jsx)("path", { d: "M9 3v18" }),
          ],
        });
      }
    },
    475468: function (e, t, n) {
      n.d(t, {
        K: function () {
          return c;
        },
        z: function () {
          return u;
        },
      });
      var i = n(481060),
        r = n(475179),
        o = n(925549),
        a = n(905423),
        l = n(981631);
      function c(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!(0, i.hasAnyModalOpen)())
          n && o.Z.channelListScrollTo(e, t),
            c && null != t && r.Z.updateChatOpen(t, !0),
            a.Z.getState().updatePath(l.Z5c.CHANNEL(e, t));
      }
      function u(e) {
        if (!(0, i.hasAnyModalOpen)()) a.Z.getState().updatePath(e);
      }
    },
    34674: function (e, t, n) {
      n.d(t, {
        $_: function () {
          return E;
        },
        KQ: function () {
          return p;
        },
        MU: function () {
          return d;
        },
        m0: function () {
          return g;
        },
        rf: function () {
          return I;
        },
        tu: function () {
          return h;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(315314);
      var i = n(860911),
        r = n(477690),
        o = n(481060),
        a = n(134432),
        l = n(703656),
        c = n(768581),
        u = n(981631),
        s = n(689938);
      let d = 0,
        { API_ENDPOINT: _, CDN_HOST: f } = window.GLOBAL_ENV;
      function g(e) {
        return e.id === d;
      }
      function p() {
        return { id: d, name: s.Z.Messages.APP_DIRECTORY_ALL_CATEGORY };
      }
      function h(e) {
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
        let { itemId: t, hash: n } = e,
          i = new URLSearchParams({
            size: (0, a.oO)(
              parseFloat(r.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, a.x_)(),
            ).toString(),
          }).toString(),
          o = c.$k ? "webp" : "png";
        return null != f
          ? ""
              .concat(location.protocol, "//")
              .concat(f, "/app-assets/application-directory/collection-items/")
              .concat(t, "/")
              .concat(n, ".")
              .concat(o, "?")
              .concat(i)
          : ""
              .concat(location.protocol)
              .concat(_)
              .concat(
                u.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, o),
                "?",
              )
              .concat(i);
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
        (0, l.uL)(r);
      }
    },
    147890: function (e, t, n) {
      n.r(t),
        n.d(t, {
          goHome: function () {
            return s;
          },
          goSearch: function () {
            return g;
          },
          goToAppDirectory: function () {
            return u;
          },
          goToApplication: function () {
            return d;
          },
          goToApplicationSection: function () {
            return _;
          },
          goToApplicationStoreSku: function () {
            return f;
          },
          goToCategory: function () {
            return p;
          },
          replaceAppDirectoryURLWith: function () {
            return h;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i = n(703656),
        r = n(626135),
        o = n(34674),
        a = n(132871),
        l = n(272242),
        c = n(981631);
      let u = (e) => {
          let {
              view: t = a.ApplicationDirectoryViews.HOME,
              guildId: n,
              applicationId: i,
              applicationSection: o,
              entrypoint: u,
              skuId: p,
            } = e,
            h = { ...u, pathname: window.location.pathname };
          switch (
            (r.default.track(c.rMx.APP_DIRECTORY_OPENED, {
              source: null == h ? void 0 : h.name,
            }),
            (0, a.resetApplicationDirectoryHistory)(),
            (0, a.setEntrypoint)(h),
            null != n && (0, a.setGuildId)(n),
            t === a.ApplicationDirectoryViews.APPLICATION &&
              null == i &&
              (t = a.ApplicationDirectoryViews.HOME),
            t)
          ) {
            case a.ApplicationDirectoryViews.HOME:
              s();
              break;
            case a.ApplicationDirectoryViews.SEARCH:
              g();
              break;
            case a.ApplicationDirectoryViews.APPLICATION:
              if (null != i) {
                if (null != o) {
                  if (
                    o === l.ApplicationDirectoryProfileSections.STORE &&
                    null != p
                  ) {
                    f({ applicationId: i, skuId: p });
                    break;
                  }
                  _({ applicationId: i, section: o });
                  break;
                }
                d({ applicationId: i });
              }
          }
        },
        s = () => {
          let e = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(c.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        d = (e) => {
          let { applicationId: t } = e,
            n = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(c.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
        },
        _ = (e) => {
          let { applicationId: t, section: n } = e,
            r = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(c.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
            state: r,
          });
        },
        f = (e) => {
          let { applicationId: t, skuId: n } = e,
            r = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(c.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
            state: r,
          });
        },
        g = function () {
          let {
              query: e,
              categoryId: t,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            r = new URLSearchParams(),
            o = { previousView: (0, a.getCurrentView)() };
          null != e && r.set("q", e),
            null != t && r.set("category_id", t.toString()),
            null != n && r.set("page", n.toString()),
            (0, i.uL)(c.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: r.toString(),
              state: o,
            });
        },
        p = (e) => {
          let { categoryId: t } = e;
          g({ categoryId: null != t ? t : o.MU });
        },
        h = (e) => {
          let {
            location: { state: t },
          } = (0, i.s1)();
          (0, i.dL)(e, t);
        };
    },
    741764: function (e, t, n) {
      n.d(t, {
        J: function () {
          return i;
        },
        N: function () {
          return r;
        },
      });
      let i = 320,
        r = 500;
    },
    858822: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var i = n(735250);
      n(470079);
      var r = n(913527),
        o = n.n(r),
        a = n(442837),
        l = n(481060),
        c = n(87051),
        u = n(776568),
        s = n(777861),
        d = n(9156),
        _ = n(621600),
        f = n(689938);
      function g(e, t) {
        let n = null == e ? void 0 : e.id,
          { muted: r, muteConfig: g } = (0, a.cj)(
            [d.ZP],
            () => ({
              muted: null != n ? d.ZP.isMuted(n) : void 0,
              muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0,
            }),
            [n],
          ),
          p = (0, s.U)(g);
        return null == n
          ? null
          : r
            ? (0, i.jsx)(l.MenuItem, {
                id: "unmute-guild",
                label: f.Z.Messages.UNMUTE_SERVER,
                subtext: p,
                action: () =>
                  c.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !1 },
                    _.ZB.Unmuted,
                  ),
              })
            : (0, i.jsx)(l.MenuItem, {
                id: "mute-guild",
                label: f.Z.Messages.MUTE_SERVER,
                action: () =>
                  c.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !0 },
                    _.ZB.Muted,
                  ),
                children: (0, u.k)().map((e) => {
                  let { value: r, label: a } = e;
                  return (0, i.jsx)(
                    l.MenuItem,
                    {
                      id: "".concat(r),
                      label: a,
                      action: () =>
                        (function (e) {
                          if (null == n) return;
                          let i =
                            e > 0 ? o()().add(e, "second").toISOString() : null;
                          c.Z.updateGuildNotificationSettings(
                            n,
                            {
                              muted: !0,
                              mute_config: {
                                selected_time_window: e,
                                end_time: i,
                              },
                            },
                            _.ZB.Muted,
                            t,
                          );
                        })(r),
                    },
                    r,
                  );
                }),
              });
      }
    },
    423589: function (e, t, n) {
      n.d(t, {
        Mn: function () {
          return h;
        },
        OD: function () {
          return p;
        },
        W9: function () {
          return f;
        },
      }),
        n(47120),
        n(789020);
      var i = n(442837),
        r = n(798140),
        o = n(9156),
        a = n(630388),
        l = n(709054),
        c = n(312400),
        u = n(981631),
        s = n(969943),
        d = n(526761),
        _ = n(689938);
      function f() {
        return [
          {
            label: _.Z.Messages.MUTE_DURATION_15_MINUTES,
            value: s.Oe.MINUTES_15,
          },
          { label: _.Z.Messages.MUTE_DURATION_1_HOUR, value: s.Oe.HOURS_1 },
          { label: _.Z.Messages.MUTE_DURATION_3_HOURS, value: s.Oe.HOURS_3 },
          { label: _.Z.Messages.MUTE_DURATION_8_HOURS, value: s.Oe.HOURS_8 },
          { label: _.Z.Messages.MUTE_DURATION_24_HOURS, value: s.Oe.HOURS_24 },
          { label: _.Z.Messages.MUTE_DURATION_ALWAYS, value: s.Oe.ALWAYS },
        ];
      }
      let g = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function p(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
        return l.default.keys(e).filter((n) => {
          var i, o;
          let l = e[n].message_notifications !== u.bL.NULL,
            c =
              a.yE(
                null !== (i = e[n].flags) && void 0 !== i ? i : 0,
                d.ic.UNREADS_ALL_MESSAGES,
              ) ||
              a.yE(
                null !== (o = e[n].flags) && void 0 !== o ? o : 0,
                d.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!t.ignoreUnreadSetting && c) ||
            (!t.ignoreNotificationSetting && l) ||
            (!t.ignoreMute && (0, r.m$)(e[n]))
          );
        });
      }
      function h(e) {
        let t = (0, i.e7)([o.ZP], () => o.ZP.useNewNotifications);
        return (
          c.xT.useExperiment({ location: e }, { autoTrackExposure: !1 })
            .enabled && t
        );
      }
    },
    113449: function (e, t, n) {
      n.d(t, {
        Q4: function () {
          return o;
        },
        YF: function () {
          return a;
        },
        pq: function () {
          return l;
        },
      });
      var i = n(630388),
        r = n(526761);
      function o(e, t) {
        var n;
        return i.pj(
          ((n = e),
          i.M1(n, r.vc.UNREADS_ALL_MESSAGES, r.vc.UNREADS_ONLY_MENTIONS)),
          t,
        );
      }
      let a = (e) =>
        i.M1(e, r.ic.UNREADS_ALL_MESSAGES, r.ic.UNREADS_ONLY_MENTIONS);
      function l(e, t) {
        return i.pj(a(e), t);
      }
    },
    51596: function (e, t, n) {
      n.d(t, {
        $Z: function () {
          return R;
        },
        Cp: function () {
          return M;
        },
        F_: function () {
          return O;
        },
        Se: function () {
          return Z;
        },
        tF: function () {
          return y;
        },
        yC: function () {
          return x;
        },
      }),
        n(757143),
        n(47120);
      var i = n(570140),
        r = n(493683),
        o = n(475179),
        a = n(925549),
        l = n(287734),
        c = n(212819),
        u = n(336197),
        s = n(359110),
        d = n(769654),
        _ = n(131704),
        f = n(592125),
        g = n(283595),
        p = n(944486),
        h = n(914010),
        E = n(626135),
        I = n(777754),
        T = n(823385),
        b = n(981631),
        S = n(176505);
      let C = () => Promise.resolve();
      C = n(346329).playApplication;
      let A = Object.freeze({
          [c.xQ.USER]: c.h8.USER,
          [c.xQ.TEXT_CHANNEL]: c.h8.TEXT_CHANNEL,
          [c.xQ.VOICE_CHANNEL]: c.h8.VOICE_CHANNEL,
          [c.xQ.GUILD]: c.h8.GUILD,
          [c.xQ.APPLICATION]: c.h8.APPLICATION,
        }),
        N = new RegExp(
          "^"
            .concat(c.xQ.USER, "|")
            .concat(c.xQ.TEXT_CHANNEL, "|")
            .concat(c.xQ.VOICE_CHANNEL, "|\\")
            .concat(c.xQ.GUILD, "|\\")
            .concat(c.xQ.APPLICATION),
        );
      function O(e) {
        var t, n;
        let i;
        let [r, o] =
          ((i = null !== (n = A[(t = e).charAt(0)]) && void 0 !== n ? n : null),
          [t.replace(N, ""), i]);
        return { query: r, queryMode: o };
      }
      function m(e, t) {
        let {
            results: n,
            queryMode: i,
            query: r,
            maxQueryLength: o,
          } = T.Z.getProps(),
          a = h.Z.getGuildId(),
          l = p.Z.getChannelId(a),
          u = n[(0, c.gJ)(c.a8.DOWN, -1, n)],
          s = I.Z.isEmail(r),
          d = I.Z.isPhoneNumber(r),
          g = I.Z.isUserTagLike(r),
          b = null != l && (0, S.AB)(l),
          C = (e) =>
            null == e
              ? null
              : e.type === c.h8.IN_APP_NAVIGATION
                ? e.type + "_" + e.record.type
                : e.type,
          A = {
            current_channel_id: b ? void 0 : l,
            current_channel_static_route: b ? l : void 0,
            current_guild_id: a,
            query_mode: null != i ? i : "GENERAL",
            query_length: r.length,
            max_query_length: o,
            is_email_like: s,
            is_phone_like: d,
            is_username_like: g,
            query: s || d || g ? null : r,
            top_result_type: C(u),
            top_result_score: null != u ? u.score : null,
            num_results_total: T.Z.getResultTotals(),
            num_results_users: T.Z.getResultTotals(c.h8.USER),
            num_results_text_channels: T.Z.getResultTotals(c.h8.TEXT_CHANNEL),
            num_results_voice_channels: T.Z.getResultTotals(c.h8.VOICE_CHANNEL),
            num_results_guilds: T.Z.getResultTotals(c.h8.GUILD),
            num_results_group_dms: T.Z.getResultTotals(c.h8.GROUP_DM),
          };
        if (null != l) {
          let e = f.Z.getChannel(l);
          A.current_channel_type = null != e ? e.type : null;
        }
        if (null != t) {
          let { type: e, score: i, record: r } = t;
          switch (
            ((A.selected_type = C(t)),
            (A.selected_score = i),
            (A.selected_index = n.indexOf(t)),
            e)
          ) {
            case c.h8.GUILD:
              A.selected_guild_id = r.id;
              break;
            case c.h8.TEXT_CHANNEL:
            case c.h8.VOICE_CHANNEL:
              r instanceof _.Sf &&
                (A.selected_guild_id = null != r.guild_id ? r.guild_id : null),
                (A.selected_channel_id = r.id);
              break;
            case c.h8.GROUP_DM:
              A.selected_channel_id = r.id;
              break;
            case c.h8.USER:
              A.selected_user_id = r.id;
          }
        }
        E.default.track(e, A);
      }
      function v() {
        i.Z.dispatch({ type: "QUICKSWITCHER_HIDE" });
      }
      function R() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "KEYBIND",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        !(function (e) {
          let t;
          if (T.Z.isOpen()) return;
          let n = h.Z.getGuildId(),
            i = p.Z.getChannelId(n);
          if (null != i) {
            let e = f.Z.getChannel(i);
            t = null != e ? e.type : null;
          }
          E.default.track(b.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: i,
            current_channel_type: t,
          });
        })(e),
          i.Z.dispatch({ type: "QUICKSWITCHER_SHOW", ...O(t) });
      }
      function M() {
        m(b.rMx.QUICKSWITCHER_CLOSED), v();
      }
      function x(e) {
        i.Z.dispatch({ type: "QUICKSWITCHER_SEARCH", ...O(e) });
      }
      function y(e) {
        i.Z.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
      }
      function Z(e) {
        let t,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        v(), m(b.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
        let { type: _, record: p } = e,
          h = { page: b.ZY5.QUICK_SWITCHER };
        switch (_) {
          case c.h8.GUILD:
            (0, d.X)(p.id, { navigationReplace: !0 });
            break;
          case c.h8.TEXT_CHANNEL:
            null != (t = f.Z.getChannel(p.id)) &&
              (0, s.Kh)(t.id, {
                state: { analyticsSource: h },
                navigationReplace: !0,
              });
            break;
          case c.h8.VOICE_CHANNEL:
            null != (t = f.Z.getChannel(p.id)) &&
              (n
                ? o.Z.updateChatOpen(p.id, !0)
                : l.default.selectVoiceChannel(p.id),
              (0, s.Kh)(t.id, {
                state: { analyticsSource: h },
                navigationReplace: !0,
              }));
            break;
          case c.h8.USER:
            r.Z.openPrivateChannel([p.id], !1, !1, "Quickswitcher"),
              a.Z.channelListScrollTo(b.ME, f.Z.getDMFromUserId(p.id));
            break;
          case c.h8.GROUP_DM:
            (0, s.Kh)(p.id, { navigationReplace: !0 }),
              a.Z.channelListScrollTo(b.ME, p.id);
            break;
          case c.h8.APPLICATION:
            let E = g.Z.getActiveLibraryApplication(p.id);
            C(p.id, E, {
              analyticsParams: {
                source: b.Sbl.QUICK_SWITCHER,
                location: b.Sbl.QUICK_SWITCHER,
              },
            });
            break;
          case c.h8.LINK:
            (0, u.Z)(p.path, { navigationReplace: !0 });
            break;
          case c.h8.IN_APP_NAVIGATION:
            (0, u.Z)(p.path, { navigationReplace: !0 });
        }
        i.Z.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
      }
    },
    905423: function (e, t, n) {
      var i = n(266067),
        r = n(652874),
        o = n(731965),
        a = n(893607),
        l = n(981631);
      function c(e) {
        let t = (0, i.LX)(null != e ? e : "", {
          path: l.Z5c.CHANNEL(
            a.Hw.guildId(),
            a.Hw.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === l.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, i.LX)(null != e ? e : "", {
          path: l.Z5c.GUILD_BOOSTING_MARKETING(a.Hw.guildId()),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      t.Z = (0, r.Z)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: i } = c(t);
          (0, o.j)(() => e({ path: t, guildId: n, channelId: i }));
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = c(t);
          (0, o.j)(() =>
            e({ path: null, guildId: n, channelId: i, basePath: t }),
          );
        },
      }));
    },
    471253: function (e, t, n) {
      n.d(t, {
        DT: function () {
          return C;
        },
        Ef: function () {
          return m;
        },
        HO: function () {
          return O;
        },
        NZ: function () {
          return v;
        },
        Pq: function () {
          return N;
        },
        Q1: function () {
          return I;
        },
        RK: function () {
          return b;
        },
        _0: function () {
          return T;
        },
        hz: function () {
          return A;
        },
        yi: function () {
          return S;
        },
      });
      var i = n(512722),
        r = n.n(i),
        o = n(149765),
        a = n(544891),
        l = n(493683);
      n(749210);
      var c = n(911969),
        u = n(367907),
        s = n(944486),
        d = n(979651),
        _ = n(700785),
        f = n(922482),
        g = n(192079),
        p = n(706058),
        h = n(590415),
        E = n(981631);
      function I(e, t) {
        let n = e.getGuildId();
        return (
          r()(null != n, "This channel cannot be guildless."),
          t && (0, u.yw)(E.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, g.s$)(e) }),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(n),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function T(e, t) {
        let n = e.getGuildId();
        return (
          r()(null != n, "This channel cannot be guildless."),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(n, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function b(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == e ? void 0 : e.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let o = d.Z.getVoiceStateForChannel(e.id);
        return (
          (0, h.gf)(o) === h.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, u.yw)(E.rMx.PROMOTED_TO_SPEAKER, { ...(0, g.s$)(e) }),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(n ? { silent: n } : {}),
            },
          })
        );
      }
      function S(e) {
        let t = null == e ? void 0 : e.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function C(e, t, n) {
        let i = e.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(i, t),
            body: { suppress: n, channel_id: e.id },
          })
        );
      }
      function A(e, t) {
        if (null == t || null == e) return;
        let n = t.getGuildId();
        return (
          r()(null != n, "This channel cannot be guildless."),
          C(t, e.id, !0),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(n, e.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function N(e, t, n) {
        let i = e.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let a = e.permissionOverwrites[i],
          u = { id: i, type: c.BN.ROLE, allow: _.Hn, deny: _.Hn, ...a };
        n
          ? ((u.allow = o.IH(u.allow, t)), (u.deny = o.Od(u.deny, t)))
          : ((u.allow = o.Od(u.allow, t)), (u.deny = o.IH(u.deny, t))),
          l.Z.updatePermissionOverwrite(e.id, u);
      }
      async function O(e, t, n, i) {
        if ("" === t) return;
        s.Z.getVoiceChannelId() !== e.id && (0, f.TM)(e);
        let r = await (0, p.me)(e.id, t, n, i);
        return b(e, !1, !0), r;
      }
      async function m(e, t, n) {
        if ("" !== t) return await (0, p.Dk)(e.id, t, n);
      }
      async function v(e) {
        await (0, p.Ix)(e.id);
      }
    },
    192079: function (e, t, n) {
      n.d(t, {
        ER: function () {
          return d;
        },
        kk: function () {
          return _;
        },
        s$: function () {
          return f;
        },
      }),
        n(724458),
        n(47120),
        n(392711);
      var i = n(19780),
        r = n(5192),
        o = n(700785),
        a = n(427679),
        l = n(157925),
        c = n(981631),
        u = n(71080),
        s = n(689938);
      function d(e, t, n, i) {
        let o = t[0],
          a = r.ZP.getName(e, n, o),
          l = null != i ? i : t.length;
        return 1 === l && null != o
          ? a
          : null == o
            ? s.Z.Messages.SPEAKING_COUNT.format({ count: l })
            : s.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: a,
                count: l - 1,
              });
      }
      function _(e, t) {
        switch (e) {
          case u.aC.OWNER:
            return s.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case u.aC.ADMINISTRATOR:
            return s.Z.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case u.aC.MEMBER:
          case u.aC.ROLE:
            return t
              ? s.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : s.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case u.aC.EMPTY_STATE:
        }
        return null;
      }
      function f(e) {
        let t = a.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: o.Uu(c.Plq.REQUEST_TO_SPEAK, e)
            ? l.BM.EVERYONE
            : l.BM.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    706058: function (e, t, n) {
      n.d(t, {
        Dk: function () {
          return a;
        },
        Ix: function () {
          return l;
        },
        me: function () {
          return o;
        },
      });
      var i = n(544891),
        r = n(981631);
      async function o(e, t, n, o, a) {
        return (
          await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
              channel_id: e,
              topic: t,
              privacy_level: n,
              guild_scheduled_event_id: a,
              send_start_notification: o,
            },
          })
        ).body;
      }
      async function a(e, t, n) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(e),
            body: { topic: t, privacy_level: n },
          })
        ).body;
      }
      function l(e) {
        return i.tn.del(r.ANM.STAGE_INSTANCE(e));
      }
    },
    623633: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(442837),
        r = n(592125),
        o = n(944486);
      function a() {
        return (0, i.e7)([o.Z, r.Z], () => {
          let e = o.Z.getVoiceChannelId();
          if (null != e) {
            let t = r.Z.getChannel(e);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
          }
          return null;
        });
      }
    },
    671533: function (e, t, n) {
      n(411104);
      var i,
        r,
        o = n(735250);
      n(470079);
      var a = n(120356),
        l = n.n(a),
        c = n(325767),
        u = n(865244);
      ((r = i || (i = {})).LEFT = "LEFT"),
        (r.RIGHT = "RIGHT"),
        (r.UP = "UP"),
        (r.DOWN = "DOWN"),
        (r.UP_LEFT = "UP_LEFT"),
        (r.DOWN_RIGHT = "DOWN_RIGHT");
      let s = (e) => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = "currentColor",
          direction: r,
          foreground: a,
          className: s,
          title: d,
          ..._
        } = e;
        return (0, o.jsxs)("svg", {
          ...(0, c.Z)(_),
          width: t,
          height: n,
          className: l()(
            s,
            (function (e) {
              switch (e) {
                case "LEFT":
                  return u.left;
                case "RIGHT":
                  return u.right;
                case "UP":
                  return null;
                case "DOWN":
                  return u.down;
                case "UP_LEFT":
                  return u.upLeft;
                case "DOWN_RIGHT":
                  return u.downRight;
                default:
                  throw Error("Invalid Direction ".concat(e));
              }
            })(r),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != d ? (0, o.jsx)("title", { children: d }) : null,
            (0, o.jsx)("polygon", {
              className: a,
              fill: i,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (s.Directions = i), (t.Z = s);
    },
    361207: function (e, t, n) {
      n.d(t, {
        DW: function () {
          return d;
        },
        Gn: function () {
          return f;
        },
        t3: function () {
          return _;
        },
        w4: function () {
          return u;
        },
      });
      var i = n(525654),
        r = n.n(i),
        o = n(271579),
        a = n(314897),
        l = n(981631);
      let c = "linux";
      function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(l.fzT.DESKTOP)
          .concat(t ? "/ptb" : "", "?platform=")
          .concat(e)
          .concat(null != n ? "&format=".concat(n) : "");
      }
      function s() {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : null === (e = r().os) || void 0 === e
              ? void 0
              : e.family;
        return null == t
          ? "win"
          : -1 !== t.indexOf("Ubuntu") ||
              -1 !== t.indexOf("Debian") ||
              -1 !== t.indexOf("Fedora") ||
              -1 !== t.indexOf("Red Hat") ||
              -1 !== t.indexOf("SuSE") ||
              -1 !== t.indexOf("Linux")
            ? c
            : -1 !== t.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function d(e) {
        return { win: "Windows", osx: "Mac", [c]: "Linux" }[s(e)];
      }
      function _() {
        let e = s();
        return u(e, !1, e === c ? "tar.gz" : null);
      }
      function f(e, t, n) {
        let i = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, o.ZP)(
              null != i
                ? i
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: a.default.getFingerprint(),
                attemptId: (0, o.WS)(),
              },
            );
          case "Android":
            return (0, o.ZP)(
              null != i ? i : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: a.default.getFingerprint(),
                attemptId: (0, o.WS)(),
              },
            );
          default:
            return null != i ? i : "https://www.discord.com";
        }
      }
    },
    350133: function (e, t, n) {
      e.exports = {
        bar: "bar_b66418",
        sidebar: "sidebar_b66418",
        right: "right_b66418",
        center: "center_b66418",
        guild: "guild_b66418",
        icon: "icon_b66418",
      };
    },
    456692: function (e, t, n) {
      e.exports = {
        container: "container_dc71f0",
        imageContainer: "imageContainer_dc71f0",
        image: "image_dc71f0",
        backgroundImage: "backgroundImage_dc71f0",
        backgroundImageFilter: "backgroundImageFilter_dc71f0",
        loader: "loader_dc71f0",
      };
    },
    813778: function (e, t, n) {
      e.exports = {
        pill: "pill_c993da",
        clickable: "clickable_c993da",
        disabled: "disabled_c993da",
        small: "small_c993da",
        selected: "selected_c993da",
        emoji: "emoji_c993da",
        closeCircle: "closeCircle_c993da emoji_c993da",
        close: "close_c993da",
        tooltipPill: "tooltipPill_c993da",
      };
    },
    188662: function (e, t, n) {
      e.exports = {
        boostedGuildIconGem: "boostedGuildIconGem_d4a69b",
        iconBackgroundTierNone: "iconBackgroundTierNone_d4a69b",
        iconBackgroundTierOne: "iconBackgroundTierOne_d4a69b",
        iconBackgroundTierTwo: "iconBackgroundTierTwo_d4a69b",
        iconBackgroundTierThree: "iconBackgroundTierThree_d4a69b",
        iconTierNone: "iconTierNone_d4a69b",
        iconTierOne: "iconTierOne_d4a69b",
        iconTierTwo: "iconTierTwo_d4a69b",
        iconTierThree: "iconTierThree_d4a69b",
      };
    },
    772103: function (e, t, n) {
      e.exports = {
        productCard: "productCard_f26f9b",
        productCardClickable: "productCardClickable_f26f9b",
        productThumbnail: "productThumbnail_f26f9b",
        productInfo: "productInfo_f26f9b",
        productInfoContent: "productInfoContent_f26f9b",
        productName: "productName_f26f9b",
        productDetails: "productDetails_f26f9b",
        dotSeparator: "dotSeparator_f26f9b",
        productActionMenuButton: "productActionMenuButton_f26f9b",
        productActionMenuIcon: "productActionMenuIcon_f26f9b",
        menuContainer: "menuContainer_f26f9b",
        disabled: "disabled_f26f9b",
      };
    },
    405013: function (e, t, n) {
      e.exports = { badge: "badge_a24a11", badgeIcon: "badgeIcon_a24a11" };
    },
    427542: function (e, t, n) {
      e.exports = {
        guildIconContainer: "guildIconContainer_ed9816",
        guildIconV2Container: "guildIconV2Container_ed9816",
        guildBadge: "guildBadge_ed9816",
        disableColor: "disableColor_ed9816",
        tierTooltipTitle: "tierTooltipTitle_ed9816",
        boostedGuildTierMutedIconWithVisibleBanner:
          "boostedGuildTierMutedIconWithVisibleBanner_ed9816",
        boostedGuildTierIconBackgroundWithVisibleBanner:
          "boostedGuildTierIconBackgroundWithVisibleBanner_ed9816",
      };
    },
    679537: function (e, t, n) {
      e.exports = { container: "container_cbadbc" };
    },
    489666: function (e, t, n) {
      e.exports = {
        settingsWrapper: "settingsWrapper_e2ecbf",
        osx: "osx_e2ecbf",
        backButton: "backButton_e2ecbf",
        windows: "windows_e2ecbf",
        notice: "notice_e2ecbf",
        noticeContents: "noticeContents_e2ecbf",
        noticeText: "noticeText_e2ecbf",
        previewWarning: "previewWarning_e2ecbf",
        button: "button_e2ecbf",
        buttonInner: "buttonInner_e2ecbf",
        backArrow: "backArrow_e2ecbf",
        selectCaret: "selectCaret_e2ecbf",
      };
    },
    916315: function (e, t, n) {
      e.exports = {
        ephemeral: "ephemeral_d5deea",
        nitroMessage: "nitroMessage_d5deea",
        automodMessage: "automodMessage_d5deea",
        mentioned: "mentioned_d5deea",
        replying: "replying_d5deea",
        messageListItem: "messageListItem_d5deea",
        message: "message_d5deea",
        selected: "selected_d5deea",
        quotedChatMessage: "quotedChatMessage_d5deea",
        jump: "jump_d5deea",
        buttons: "buttons_d5deea",
        buttonsInner: "buttonsInner_d5deea",
        hideIfMessageNotFocused: "hideIfMessageNotFocused_d5deea",
        cozyMessage: "cozyMessage_d5deea",
        groupStart: "groupStart_d5deea",
        systemMessage: "systemMessage_d5deea",
        backgroundFlash: "backgroundFlash_d5deea",
        channelTextArea: "channelTextArea_d5deea",
        divider: "divider_d5deea",
        disableInteraction: "disableInteraction_d5deea",
        beforeGroup: "beforeGroup_d5deea",
        hasContent: "hasContent_d5deea",
        interactionSending: "interactionSending_d5deea",
      };
    },
    908860: function (e, t, n) {
      e.exports = {
        container: "container_a1db3b",
        iconContainer: "iconContainer_a1db3b",
        icon: "icon_a1db3b",
        foreground: "foreground_a1db3b",
        avatarSize: "avatarSize_a1db3b",
        emptyUser: "emptyUser_a1db3b",
        avatarMasked: "avatarMasked_a1db3b avatar_a1db3b",
        moreUsers: "moreUsers_a1db3b",
      };
    },
    579861: function (e, t, n) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
    865244: function (e, t, n) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
    697741: function (e, t, n) {
      n.d(t, {
        $: function () {
          return m;
        },
      });
      let i = {
          ational: "ate",
          tional: "tion",
          enci: "ence",
          anci: "ance",
          izer: "ize",
          bli: "ble",
          alli: "al",
          entli: "ent",
          eli: "e",
          ousli: "ous",
          ization: "ize",
          ation: "ate",
          ator: "ate",
          alism: "al",
          iveness: "ive",
          fulness: "ful",
          ousness: "ous",
          aliti: "al",
          iviti: "ive",
          biliti: "ble",
          logi: "log",
        },
        r = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: "",
        },
        o = "[aeiouy]",
        a = "([^aeiou][^aeiouy]*)",
        l = "(" + o + "[aeiou]*)",
        c = RegExp("^" + a + "?" + l + a),
        u = RegExp("^" + a + "?" + l + a + l + "?$"),
        s = RegExp("^" + a + "?(" + l + a + "){2,}"),
        d = RegExp("^" + a + "?" + o),
        _ = RegExp("^" + a + o + "[^aeiouwxy]$"),
        f = /ll$/,
        g = /^(.+?)e$/,
        p = /^(.+?)y$/,
        h = /^(.+?(s|t))(ion)$/,
        E = /^(.+?)(ed|ing)$/,
        I = /(at|bl|iz)$/,
        T = /^(.+?)eed$/,
        b = /^.+?[^s]s$/,
        S = /^.+?(ss|i)es$/,
        C = /([^aeiouylsz])\1$/,
        A =
          /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
        N = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        O =
          /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
      function m(e) {
        let t,
          n = String(e).toLowerCase();
        if (n.length < 3) return n;
        let o = !1;
        return (
          121 === n.codePointAt(0) && ((o = !0), (n = "Y" + n.slice(1))),
          S.test(n) ? (n = n.slice(0, -2)) : b.test(n) && (n = n.slice(0, -1)),
          (t = T.exec(n))
            ? c.test(t[1]) && (n = n.slice(0, -1))
            : (t = E.exec(n)) &&
              d.test(t[1]) &&
              ((n = t[1]),
              I.test(n)
                ? (n += "e")
                : C.test(n)
                  ? (n = n.slice(0, -1))
                  : _.test(n) && (n += "e")),
          (t = p.exec(n)) && d.test(t[1]) && (n = t[1] + "i"),
          (t = A.exec(n)) && c.test(t[1]) && (n = t[1] + i[t[2]]),
          (t = N.exec(n)) && c.test(t[1]) && (n = t[1] + r[t[2]]),
          (t = O.exec(n))
            ? s.test(t[1]) && (n = t[1])
            : (t = h.exec(n)) && s.test(t[1]) && (n = t[1]),
          (t = g.exec(n)) &&
            (s.test(t[1]) || (u.test(t[1]) && !_.test(t[1]))) &&
            (n = t[1]),
          f.test(n) && s.test(n) && (n = n.slice(0, -1)),
          o && (n = "y" + n.slice(1)),
          n
        );
      }
    },
  },
]);
//# sourceMappingURL=821c0d30533334520ffa.js.map
