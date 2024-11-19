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
        l = t(493762);
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
          return w;
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
        C = t(592125),
        Z = t(271383),
        _ = t(594174),
        I = t(51144),
        j = t(228488),
        g = t(566620),
        A = t(317381),
        P = t(574952),
        S = t(884338),
        N = t(473179),
        b = t(701488),
        y = t(981631),
        T = t(388032),
        E = t(713622);
      let k = S.u.SIZE_24;
      function w(e) {
        let { applicationId: n, channelId: t } = e,
          r = (0, l.e7)([u.Z], () => u.Z.getApplication(n)),
          w = (0, l.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivities().get(n)),
          R = (0, l.e7)([C.Z], () => C.Z.getChannel(t)),
          L = (0, l.Wu)(
            [Z.ZP],
            () => {
              var e;
              return null == R || null == w
                ? []
                : Array.from(
                    null !== (e = w.userIds) && void 0 !== e ? e : [],
                  ).map((e) => Z.ZP.getMember(R.guild_id, e));
            },
            [w, R],
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
          O = a.useCallback(
            (e, n) => {
              var t;
              if (null == e || void 0 === e || void 0 === n) return null;
              let a = M.get(e.id),
                r =
                  null !== (t = null == a ? void 0 : a.nick) && void 0 !== t
                    ? t
                    : I.ZP.getName(e);
              return (0, i.jsx)(
                c.TooltipContainer,
                {
                  text: r,
                  position: "bottom",
                  children: (0, i.jsx)(
                    "img",
                    {
                      src: e.getAvatarURL(n.guild_id, k),
                      alt: r,
                      className: E.avatar,
                    },
                    e.id,
                  ),
                },
                e.id,
              );
            },
            [M],
          ),
          U = null == w ? void 0 : w.userIds,
          B = (0, l.Wu)(
            [_.default],
            () =>
              Array.from(null != U ? U : [])
                .map((e) => _.default.getUser(e))
                .filter((e) => null != e && void 0 !== e),
            [U],
          ),
          K = a.useCallback(() => {
            (0, P.Z)().leaveActivity({ channelId: t, applicationId: n }),
              (0, m.xv)(y.KJ3.ACTIVITY_POPOUT);
          }, [t, n]),
          H = (0, l.e7)([A.ZP], () => A.ZP.getActivityPopoutWindowLayout()),
          W = (0, l.e7)([v.Z], () => v.Z.getWindow(y.KJ3.ACTIVITY_POPOUT)),
          F = a.useCallback(
            () => (null == W ? void 0 : W.document.getElementById("app-mount")),
            [W],
          ),
          J = a.useCallback(() => {
            let e = F();
            null != e &&
              (H !== b.GM.FULL_SCREEN
                ? ((0, g.Hp)(b.GM.FULL_SCREEN), (0, j.Dj)(e))
                : ((0, g.Hp)(b.GM.NORMAL),
                  (0, j.Pr)(e, null == W ? void 0 : W.document)));
          }, [H, F, W]),
          Y = p.Z.useExperiment(
            { location: "activity_popout_overflow_menu" },
            { autoTrackExposure: !1 },
          ).enabled;
        return null == r || null == t || null == R
          ? null
          : (0, i.jsx)(c.ThemeProvider, {
              theme: y.BRd.DARK,
              children: (e) =>
                (0, i.jsxs)("div", {
                  className: o()(E.container, e),
                  children: [
                    (0, i.jsxs)("div", {
                      className: o()(E.headerSection, E.headerSectionLeft),
                      children: [
                        (0, i.jsx)("div", {
                          className: E.leaveIconContainer,
                          children: (0, i.jsx)(s.ZP.Icon, {
                            onClick: K,
                            icon: c.XSmallIcon,
                            tooltip: T.intl.string(T.t["R/FK4O"]),
                          }),
                        }),
                        (0, i.jsx)(d.Z, {
                          application: r,
                          size: 24,
                          className: E.appIcon,
                        }),
                        (0, i.jsx)(c.Text, {
                          variant: "text-md/normal",
                          color: "header-primary",
                          children: r.name,
                        }),
                        (0, i.jsx)("div", {
                          className: E.dotSpacer,
                          children: (0, i.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: ".",
                          }),
                        }),
                        (0, i.jsx)(S.Z, {
                          renderIcon: !1,
                          users: B,
                          size: k,
                          max: 6,
                          className: E.userAvatars,
                          renderUser: (e) => O(e, R),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: o()(E.headerSection, E.headerSectionRight),
                      children: (0, i.jsxs)("div", {
                        className: E.actionButtonsContainer,
                        children: [
                          (0, i.jsx)(x.Z, {
                            onClick: J,
                            guestWindow: W,
                            node: F(),
                          }),
                          Y &&
                            (0, i.jsx)(
                              c.Popout,
                              {
                                position: "bottom",
                                renderPopout: (e) => {
                                  let { closePopout: n } = e;
                                  return (0, i.jsx)(f.Z, {
                                    children: (0, i.jsx)(N.Z, {
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
        m = t(965988);
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
    493762: function (e, n, t) {
      e.exports = { iframe: "iframe_e3c6c1" };
    },
    713622: function (e, n, t) {
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
    965988: function (e, n, t) {
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
//# sourceMappingURL=0cf5dac829c21fe2bae7.js.map
