"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14797"],
  {
    781780: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651),
        a = t(963614),
        r = t(208156),
        o = t(701488),
        l = t(848556);
      function c(e) {
        var n, t, c;
        let {
            channelId: d,
            guildId: u,
            embeddedActivity: s,
            application: p,
          } = e,
          v = {
            instance_id:
              null !==
                (c =
                  null !== (t = s.compositeInstanceId) && void 0 !== t
                    ? t
                    : s.launchId) && void 0 !== c
                ? c
                : "",
            location_id:
              null === (n = s.location) || void 0 === n ? void 0 : n.id,
            launch_id: s.launchId,
          };
        return (
          null != u && "" !== u && (v.guild_id = u),
          null != d && "" !== d && (v.channel_id = d),
          (0, i.jsx)(r.J, {
            allowPopups: (0, a.h)(p),
            referrerPolicy: o.um.has(s.applicationId)
              ? "no-referrer"
              : "origin",
            url: s.url,
            queryParams: v,
            className: l.iframe,
            shouldRefocus: !1,
          })
        );
      }
    },
    325749: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return O;
        },
      }),
        t(47120);
      var i = t(200651),
        a = t(192379),
        r = t(120356),
        o = t.n(r),
        l = t(442837),
        c = t(481060),
        d = t(753972),
        u = t(812206),
        s = t(665149),
        p = t(726721),
        v = t(522474),
        m = t(788983),
        f = t(390322),
        h = t(961048),
        x = t(268353),
        C = t(786915),
        Z = t(592125),
        I = t(271383),
        _ = t(594174),
        j = t(51144),
        g = t(228488),
        P = t(566620),
        A = t(317381),
        S = t(574952),
        N = t(884338),
        T = t(473179),
        b = t(701488),
        y = t(981631),
        E = t(388032),
        k = t(114195);
      let w = N.u.SIZE_24;
      function O(e) {
        let { applicationId: n, channelId: t } = e,
          r = (0, l.e7)([u.Z], () => u.Z.getApplication(n)),
          O = (0, l.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivities().get(n)),
          R = (0, l.e7)([Z.Z], () => Z.Z.getChannel(t)),
          L = (0, l.Wu)(
            [I.ZP],
            () => {
              var e;
              return null == R || null == O
                ? []
                : Array.from(
                    null !== (e = O.userIds) && void 0 !== e ? e : [],
                  ).map((e) => I.ZP.getMember(R.guild_id, e));
            },
            [O, R],
          ),
          M = a.useMemo(() => {
            let e = new Map();
            return (
              L.forEach((n) => {
                null != n && void 0 !== n && e.set(n.userId, n);
              }),
              e
            );
          }, [L]),
          U = a.useCallback(
            (e, n) => {
              var t;
              if (null == e || void 0 === e || void 0 === n) return null;
              let a = M.get(e.id),
                r =
                  null !== (t = null == a ? void 0 : a.nick) && void 0 !== t
                    ? t
                    : j.ZP.getName(e);
              return (0, i.jsx)(
                c.TooltipContainer,
                {
                  text: r,
                  position: "bottom",
                  children: (0, i.jsx)(
                    "img",
                    {
                      src: e.getAvatarURL(n.guild_id, w),
                      alt: r,
                      className: k.avatar,
                    },
                    e.id,
                  ),
                },
                e.id,
              );
            },
            [M],
          ),
          B = null == O ? void 0 : O.userIds,
          K = (0, l.Wu)(
            [_.default],
            () =>
              Array.from(null != B ? B : [])
                .map((e) => _.default.getUser(e))
                .filter((e) => null != e && void 0 !== e),
            [B],
          ),
          H = a.useCallback(() => {
            (0, S.Z)().leaveActivity({ channelId: t, applicationId: n }),
              (0, m.xv)(y.KJ3.ACTIVITY_POPOUT);
          }, [t, n]),
          W = (0, l.e7)([A.ZP], () => A.ZP.getActivityPopoutWindowLayout()),
          F = (0, l.e7)([v.Z], () => v.Z.getWindow(y.KJ3.ACTIVITY_POPOUT)),
          J = a.useCallback(
            () => (null == F ? void 0 : F.document.getElementById("app-mount")),
            [F],
          ),
          Y = a.useCallback(() => {
            let e = J();
            null != e &&
              (W !== b.GM.FULL_SCREEN
                ? ((0, P.Hp)(b.GM.FULL_SCREEN), (0, g.Dj)(e))
                : ((0, P.Hp)(b.GM.NORMAL),
                  (0, g.Pr)(e, null == F ? void 0 : F.document)));
          }, [W, J, F]),
          G = p.Z.useExperiment(
            { location: "activity_popout_overflow_menu" },
            { autoTrackExposure: !1 },
          ).enabled;
        return null == r || null == t || null == R
          ? null
          : (0, i.jsx)(c.ThemeProvider, {
              theme: y.BRd.DARK,
              children: (e) =>
                (0, i.jsxs)("div", {
                  className: o()(k.container, e),
                  children: [
                    (0, i.jsxs)("div", {
                      className: o()(k.headerSection, k.headerSectionLeft),
                      children: [
                        (0, i.jsx)("div", {
                          className: k.leaveIconContainer,
                          children: (0, i.jsx)(s.ZP.Icon, {
                            onClick: H,
                            icon: c.XSmallIcon,
                            tooltip: E.intl.string(E.t["R/FK4O"]),
                          }),
                        }),
                        (0, i.jsx)(d.Z, {
                          application: r,
                          size: 24,
                          className: k.appIcon,
                        }),
                        (0, i.jsx)(c.Text, {
                          variant: "text-md/normal",
                          color: "header-primary",
                          children: r.name,
                        }),
                        (0, i.jsx)("div", {
                          className: k.dotSpacer,
                          children: (0, i.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: ".",
                          }),
                        }),
                        (0, i.jsx)(N.Z, {
                          renderIcon: !1,
                          users: K,
                          size: w,
                          max: 6,
                          className: k.userAvatars,
                          renderUser: (e) => U(e, R),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: o()(k.headerSection, k.headerSectionRight),
                      children: (0, i.jsxs)("div", {
                        className: k.actionButtonsContainer,
                        children: [
                          (0, i.jsx)(C.Z, {
                            appContext: y.IlC.POPOUT,
                            applicationId: n,
                            channel: R,
                          }),
                          (0, i.jsx)(x.Z, {
                            onClick: Y,
                            guestWindow: F,
                            node: J(),
                          }),
                          G &&
                            (0, i.jsx)(
                              c.Popout,
                              {
                                position: "bottom",
                                renderPopout: (e) => {
                                  let { closePopout: n } = e;
                                  return (0, i.jsx)(f.Z, {
                                    children: (0, i.jsx)(T.Z, {
                                      application: r,
                                      onClose: n,
                                    }),
                                  });
                                },
                                children: (e, n) => {
                                  let { isShown: t } = n;
                                  return (0, a.createElement)(h.Z, {
                                    ...e,
                                    key: "more-options",
                                    isActive: t,
                                  });
                                },
                              },
                              "more-options-popout",
                            ),
                        ],
                      }),
                    }),
                  ],
                }),
            });
      }
    },
    473179: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(200651),
        a = t(481060),
        r = t(870745),
        o = t(388032);
      function l(e) {
        let { onClose: n, onSelect: t, application: l } = e,
          c = (0, r.Z)(l);
        return (0, i.jsx)(a.Menu, {
          navId: "activity-popout-overflow-popout",
          onClose: n,
          onSelect: t,
          "aria-label": o.intl.string(o.t.SS9Y6O),
          children: c,
        });
      }
    },
    701011: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = t(200651),
        a = t(192379),
        r = t(442837),
        o = t(481060),
        l = t(110924),
        c = t(812206),
        d = t(788983),
        u = t(317381),
        s = t(781780),
        p = t(325749),
        v = t(981631),
        m = t(466127);
      function f() {
        var e;
        let { embeddedActivity: n, channelId: t } = (0, r.cj)([u.ZP], () => {
            let e = u.ZP.getCurrentEmbeddedActivity(),
              n = null == e ? void 0 : e.channelId;
            return { embeddedActivity: e, channelId: n };
          }),
          f = (0, l.Z)(n);
        a.useEffect(() => {
          null != f && null == n && (0, d.xv)(v.KJ3.ACTIVITY_POPOUT);
        }, [n, f]);
        let h = (0, r.e7)([c.Z], () => {
          let e = null == n ? void 0 : n.applicationId;
          return null == e ? void 0 : c.Z.getApplication(e);
        });
        return (0, i.jsx)("div", {
          className: m.container,
          children:
            null == n || null == h || null == t
              ? (0, i.jsx)(o.Spinner, { className: m.iframe })
              : (0, i.jsx)("div", {
                  className: m.loadedContentContainer,
                  children: (0, i.jsxs)("div", {
                    className: m.iframeAndHeaderContainer,
                    children: [
                      (0, i.jsx)("div", {
                        className: m.headerContainer,
                        children: (0, i.jsx)(p.Z, {
                          applicationId: h.id,
                          channelId: t,
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: m.iframeContainer,
                        children: (0, i.jsx)(s.Z, {
                          channelId: t,
                          guildId:
                            null !== (e = n.guildId) && void 0 !== e
                              ? e
                              : void 0,
                          embeddedActivity: n,
                          application: h,
                        }),
                      }),
                    ],
                  }),
                }),
        });
      }
    },
    748623: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return c;
          },
        });
      var i = t(200651),
        a = t(238246),
        r = t(952561),
        o = t(701011),
        l = t(388032);
      function c(e) {
        var n;
        let { windowKey: t } = e,
          c = (0, r.Z)();
        return (0, i.jsx)(a.Z, {
          withTitleBar: !0,
          windowKey: t,
          title:
            null !== (n = null == c ? void 0 : c.name) && void 0 !== n
              ? n
              : l.intl.string(l.t.IC5Anp),
          children: (0, i.jsx)(o.Z, {}),
        });
      }
    },
    870745: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651),
        a = t(481060),
        r = t(726721),
        o = t(726521),
        l = t(388032);
      function c(e) {
        return !1 ===
          r.Z.useExperiment(
            { location: "activity_popout_overflow_menu" },
            { autoTrackExposure: !1 },
          ).enabled
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "report-app",
              color: "danger",
              label: l.intl.string(l.t.NgA5vr),
              action: () => (0, o.uu)(e),
              icon: a.FlagIcon,
            });
      }
    },
    848556: function (e, n, t) {
      e.exports = { iframe: "iframe_e3c6c1" };
    },
    114195: function (e, n, t) {
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
        actionButtonsContainer: "actionButtonsContainer_c56579",
      };
    },
    466127: function (e, n, t) {
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
//# sourceMappingURL=256a262789e650226118.js.map
