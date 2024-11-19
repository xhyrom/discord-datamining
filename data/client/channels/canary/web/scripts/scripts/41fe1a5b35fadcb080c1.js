"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14797"],
  {
    781780: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return o;
        },
      });
      var t = i(200651),
        a = i(963614),
        l = i(208156),
        r = i(701488),
        d = i(848556);
      function o(e) {
        var n, i, o;
        let {
            channelId: c,
            guildId: u,
            embeddedActivity: s,
            application: v,
          } = e,
          m = {
            instance_id:
              null !==
                (o =
                  null !== (i = s.compositeInstanceId) && void 0 !== i
                    ? i
                    : s.launchId) && void 0 !== o
                ? o
                : "",
            location_id:
              null === (n = s.location) || void 0 === n ? void 0 : n.id,
            launch_id: s.launchId,
          };
        return (
          null != u && "" !== u && (m.guild_id = u),
          null != c && "" !== c && (m.channel_id = c),
          (0, t.jsx)(l.J, {
            allowPopups: (0, a.h)(v),
            referrerPolicy: r.um.has(s.applicationId)
              ? "no-referrer"
              : "origin",
            url: s.url,
            queryParams: m,
            className: d.iframe,
            shouldRefocus: !1,
          })
        );
      }
    },
    325749: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return y;
        },
      }),
        i(47120);
      var t = i(200651),
        a = i(192379),
        l = i(120356),
        r = i.n(l),
        d = i(442837),
        o = i(481060),
        c = i(753972),
        u = i(812206),
        s = i(665149),
        v = i(522474),
        m = i(788983),
        f = i(268353),
        h = i(592125),
        p = i(271383),
        x = i(594174),
        C = i(51144),
        I = i(228488),
        Z = i(566620),
        _ = i(317381),
        j = i(574952),
        g = i(884338),
        A = i(701488),
        P = i(981631),
        S = i(388032),
        N = i(114195);
      let T = g.u.SIZE_24;
      function y(e) {
        let { applicationId: n, channelId: i } = e,
          l = (0, d.e7)([u.Z], () => u.Z.getApplication(n)),
          y = (0, d.e7)([_.ZP], () => _.ZP.getSelfEmbeddedActivities().get(n)),
          b = (0, d.e7)([h.Z], () => h.Z.getChannel(i)),
          k = (0, d.Wu)(
            [p.ZP],
            () => {
              var e;
              return null == b || null == y
                ? []
                : Array.from(
                    null !== (e = y.userIds) && void 0 !== e ? e : [],
                  ).map((e) => p.ZP.getMember(b.guild_id, e));
            },
            [y, b],
          ),
          R = a.useMemo(() => {
            let e = new Map();
            return (
              k.forEach((n) => {
                null != n && void 0 !== n && e.set(n.userId, n);
              }),
              e
            );
          }, [k]),
          w = a.useCallback(
            (e, n) => {
              var i;
              if (null == e || void 0 === e || void 0 === n) return null;
              let a = R.get(e.id),
                l =
                  null !== (i = null == a ? void 0 : a.nick) && void 0 !== i
                    ? i
                    : C.ZP.getName(e);
              return (0, t.jsx)(
                o.TooltipContainer,
                {
                  text: l,
                  position: "bottom",
                  children: (0, t.jsx)(
                    "img",
                    {
                      src: e.getAvatarURL(n.guild_id, T),
                      alt: l,
                      className: N.avatar,
                    },
                    e.id,
                  ),
                },
                e.id,
              );
            },
            [R],
          ),
          E = null == y ? void 0 : y.userIds,
          L = (0, d.Wu)(
            [x.default],
            () =>
              Array.from(null != E ? E : [])
                .map((e) => x.default.getUser(e))
                .filter((e) => null != e && void 0 !== e),
            [E],
          ),
          O = a.useCallback(() => {
            (0, j.Z)().leaveActivity({ channelId: i, applicationId: n }),
              (0, m.xv)(P.KJ3.ACTIVITY_POPOUT);
          }, [i, n]),
          U = (0, d.e7)([_.ZP], () => _.ZP.getActivityPopoutWindowLayout()),
          M = (0, d.e7)([v.Z], () => v.Z.getWindow(P.KJ3.ACTIVITY_POPOUT)),
          B = a.useCallback(
            () => (null == M ? void 0 : M.document.getElementById("app-mount")),
            [M],
          ),
          K = a.useCallback(() => {
            let e = B();
            null != e &&
              (U !== A.GM.FULL_SCREEN
                ? ((0, Z.Hp)(A.GM.FULL_SCREEN), (0, I.Dj)(e))
                : ((0, Z.Hp)(A.GM.NORMAL),
                  (0, I.Pr)(e, null == M ? void 0 : M.document)));
          }, [U, B, M]);
        return null == l || null == i || null == b
          ? null
          : (0, t.jsx)(o.ThemeProvider, {
              theme: P.BRd.DARK,
              children: (e) =>
                (0, t.jsxs)("div", {
                  className: r()(N.container, e),
                  children: [
                    (0, t.jsxs)("div", {
                      className: r()(N.headerSection, N.headerSectionLeft),
                      children: [
                        (0, t.jsx)("div", {
                          className: N.leaveIconContainer,
                          children: (0, t.jsx)(s.ZP.Icon, {
                            onClick: O,
                            icon: o.XSmallIcon,
                            tooltip: S.intl.string(S.t["R/FK4O"]),
                          }),
                        }),
                        (0, t.jsx)(c.Z, {
                          application: l,
                          size: 24,
                          className: N.appIcon,
                        }),
                        (0, t.jsx)(o.Text, {
                          variant: "text-md/normal",
                          color: "header-primary",
                          children: l.name,
                        }),
                        (0, t.jsx)("div", {
                          className: N.dotSpacer,
                          children: (0, t.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: ".",
                          }),
                        }),
                        (0, t.jsx)(g.Z, {
                          renderIcon: !1,
                          users: L,
                          size: T,
                          max: 6,
                          className: N.userAvatars,
                          renderUser: (e) => w(e, b),
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: r()(N.headerSection, N.headerSectionRight),
                      children: (0, t.jsx)("div", {
                        className: N.fullScreenButtonContainer,
                        children: (0, t.jsx)(f.Z, {
                          onClick: K,
                          guestWindow: M,
                          node: B(),
                        }),
                      }),
                    }),
                  ],
                }),
            });
      }
    },
    701011: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return h;
        },
      });
      var t = i(200651),
        a = i(192379),
        l = i(442837),
        r = i(481060),
        d = i(110924),
        o = i(812206),
        c = i(788983),
        u = i(317381),
        s = i(781780),
        v = i(325749),
        m = i(981631),
        f = i(466127);
      function h() {
        var e;
        let { embeddedActivity: n, channelId: i } = (0, l.cj)([u.ZP], () => {
            let e = u.ZP.getCurrentEmbeddedActivity(),
              n = null == e ? void 0 : e.channelId;
            return { embeddedActivity: e, channelId: n };
          }),
          h = (0, d.Z)(n);
        a.useEffect(() => {
          null != h && null == n && (0, c.xv)(m.KJ3.ACTIVITY_POPOUT);
        }, [n, h]);
        let p = (0, l.e7)([o.Z], () => {
          let e = null == n ? void 0 : n.applicationId;
          return null == e ? void 0 : o.Z.getApplication(e);
        });
        return (0, t.jsx)("div", {
          className: f.container,
          children:
            null == n || null == p || null == i
              ? (0, t.jsx)(r.Spinner, { className: f.iframe })
              : (0, t.jsx)("div", {
                  className: f.loadedContentContainer,
                  children: (0, t.jsxs)("div", {
                    className: f.iframeAndHeaderContainer,
                    children: [
                      (0, t.jsx)("div", {
                        className: f.headerContainer,
                        children: (0, t.jsx)(v.Z, {
                          applicationId: p.id,
                          channelId: i,
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: f.iframeContainer,
                        children: (0, t.jsx)(s.Z, {
                          channelId: i,
                          guildId:
                            null !== (e = n.guildId) && void 0 !== e
                              ? e
                              : void 0,
                          embeddedActivity: n,
                          application: p,
                        }),
                      }),
                    ],
                  }),
                }),
        });
      }
    },
    748623: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return o;
          },
        });
      var t = i(200651),
        a = i(238246),
        l = i(952561),
        r = i(701011),
        d = i(388032);
      function o(e) {
        var n;
        let { windowKey: i } = e,
          o = (0, l.Z)();
        return (0, t.jsx)(a.Z, {
          withTitleBar: !0,
          windowKey: i,
          title:
            null !== (n = null == o ? void 0 : o.name) && void 0 !== n
              ? n
              : d.intl.string(d.t.IC5Anp),
          children: (0, t.jsx)(r.Z, {}),
        });
      }
    },
    848556: function (e, n, i) {
      e.exports = { iframe: "iframe_e3c6c1" };
    },
    114195: function (e, n, i) {
      e.exports = {
        container: "container_c56579",
        headerSection: "headerSection_c56579",
        headerSectionLeft: "headerSectionLeft_c56579",
        headerSectionRight: "headerSectionRight_c56579",
        appIcon: "appIcon_c56579",
        avatar: "avatar_c56579",
        userAvatars: "userAvatars_c56579",
        dotSpacer: "dotSpacer_c56579",
        leaveIconContainer: "leaveIconContainer_c56579",
        fullScreenButtonContainer: "fullScreenButtonContainer_c56579",
      };
    },
    466127: function (e, n, i) {
      e.exports = {
        container: "container_d15f2c",
        loadedContentContainer: "loadedContentContainer_d15f2c",
        iframeAndHeaderContainer: "iframeAndHeaderContainer_d15f2c",
        headerContainer: "headerContainer_d15f2c",
        iframeContainer: "iframeContainer_d15f2c",
        iframe: "iframe_d15f2c",
      };
    },
  },
]);
//# sourceMappingURL=41fe1a5b35fadcb080c1.js.map
