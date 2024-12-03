"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14797"],
  {
    781780: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(200651),
        r = t(963614),
        a = t(208156),
        l = t(701488),
        o = t(864096);
      function d(e) {
        var n, t, d;
        let {
            channelId: c,
            guildId: u,
            embeddedActivity: s,
            application: p,
          } = e,
          v = {
            instance_id:
              null !==
                (d =
                  null !== (t = s.compositeInstanceId) && void 0 !== t
                    ? t
                    : s.launchId) && void 0 !== d
                ? d
                : "",
            location_id:
              null === (n = s.location) || void 0 === n ? void 0 : n.id,
            launch_id: s.launchId,
          };
        return (
          null != u && "" !== u && (v.guild_id = u),
          null != c && "" !== c && (v.channel_id = c),
          (0, i.jsx)(a.J, {
            allowPopups: (0, r.h)(p),
            referrerPolicy: l.um.has(s.applicationId)
              ? "no-referrer"
              : "origin",
            url: s.url,
            queryParams: v,
            className: o.iframe,
            shouldRefocus: !1,
          })
        );
      }
    },
    325749: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return k;
        },
      }),
        t(47120);
      var i = t(200651),
        r = t(192379),
        a = t(120356),
        l = t.n(a),
        o = t(442837),
        d = t(481060),
        c = t(13245),
        u = t(753972),
        s = t(812206),
        p = t(726721),
        v = t(610394),
        m = t(390322),
        f = t(961048),
        h = t(871499),
        x = t(786915),
        Z = t(592125),
        I = t(271383),
        C = t(594174),
        _ = t(51144),
        j = t(145597),
        g = t(214629),
        P = t(317381),
        A = t(884338),
        S = t(473179),
        N = t(981631),
        b = t(388032),
        y = t(124062);
      let T = A.u.SIZE_24;
      function k(e) {
        let { applicationId: n, channelId: t } = e,
          a = (0, o.e7)([s.Z], () => s.Z.getApplication(n)),
          k = (0, o.e7)([P.ZP], () => P.ZP.getSelfEmbeddedActivities().get(n)),
          w = (0, o.e7)([Z.Z], () => Z.Z.getChannel(t)),
          E = (0, o.Wu)(
            [I.ZP],
            () => {
              var e;
              return null == w || null == k
                ? []
                : Array.from(
                    null !== (e = k.userIds) && void 0 !== e ? e : [],
                  ).map((e) => I.ZP.getMember(w.guild_id, e));
            },
            [k, w],
          ),
          R = r.useMemo(() => {
            let e = new Map();
            return (
              E.forEach((n) => {
                null != n && void 0 !== n && e.set(n.userId, n);
              }),
              e
            );
          }, [E]),
          L = r.useCallback(
            (e, n) => {
              var t;
              if (null == e || void 0 === e || void 0 === n) return null;
              let r = R.get(e.id),
                a =
                  null !== (t = null == r ? void 0 : r.nick) && void 0 !== t
                    ? t
                    : _.ZP.getName(e);
              return (0, i.jsx)(
                d.TooltipContainer,
                {
                  text: a,
                  position: "bottom",
                  children: (0, i.jsx)(
                    "img",
                    {
                      src: e.getAvatarURL(n.guild_id, T),
                      alt: a,
                      className: y.avatar,
                    },
                    e.id,
                  ),
                },
                e.id,
              );
            },
            [R],
          ),
          O = null == k ? void 0 : k.userIds,
          B = (0, o.Wu)(
            [C.default],
            () =>
              Array.from(null != O ? O : [])
                .map((e) => C.default.getUser(e))
                .filter((e) => null != e && void 0 !== e),
            [O],
          ),
          M = p.Z.useExperiment(
            { location: "activity_popout_overflow_menu" },
            { autoTrackExposure: !1 },
          ).enabled,
          U = r.useCallback(() => {
            let e = (0, j.QF)();
            c.Z.setInputLocked(!v.Z.isInputLocked(e), e);
          }, []),
          z = (0, g.PR)();
        return null == a || null == t || null == w
          ? null
          : (0, i.jsx)(d.ThemeProvider, {
              theme: N.BRd.DARK,
              children: (e) =>
                (0, i.jsxs)("div", {
                  className: l()(y.container, e),
                  children: [
                    (0, i.jsxs)("div", {
                      className: l()(y.headerSection, y.headerSectionLeft),
                      children: [
                        (0, i.jsx)(u.Z, {
                          application: a,
                          size: 24,
                          className: y.appIcon,
                        }),
                        (0, i.jsx)(d.Text, {
                          variant: "text-md/normal",
                          color: "header-primary",
                          children: a.name,
                        }),
                        (0, i.jsx)("div", {
                          className: y.dotSpacer,
                          children: (0, i.jsx)(d.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: ".",
                          }),
                        }),
                        (0, i.jsx)(A.Z, {
                          renderIcon: !1,
                          users: B,
                          size: T,
                          max: 6,
                          className: y.userAvatars,
                          renderUser: (e) => L(e, w),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: l()(y.headerSection, y.headerSectionRight),
                      children: (0, i.jsxs)("div", {
                        className: y.actionButtonsContainer,
                        children: [
                          (0, i.jsx)(x.Z, {
                            appContext: N.IlC.POPOUT,
                            applicationId: n,
                            channel: w,
                            shouldPrioritizeGroupPlusIcon: !0,
                          }),
                          z
                            ? (0, i.jsx)(h.Z, {
                                onClick: U,
                                iconComponent: d.WindowTopOutlineIcon,
                                label: b.intl.string(b.t.mseZsL),
                              })
                            : null,
                          M &&
                            (0, i.jsx)(
                              d.Popout,
                              {
                                position: "bottom",
                                renderPopout: (e) => {
                                  let { closePopout: n } = e;
                                  return (0, i.jsx)(m.Z, {
                                    children: (0, i.jsx)(S.Z, {
                                      application: a,
                                      channelId: t,
                                      onClose: n,
                                    }),
                                  });
                                },
                                children: (e, n) => {
                                  let { isShown: t } = n;
                                  return (0, r.createElement)(f.Z, {
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
          return o;
        },
      });
      var i = t(200651),
        r = t(481060),
        a = t(870745),
        l = t(388032);
      function o(e) {
        let { onClose: n, onSelect: t, application: o, channelId: d } = e,
          c = (0, a.Z)(o, d);
        return (0, i.jsx)(r.Menu, {
          navId: "activity-popout-overflow-popout",
          onClose: n,
          onSelect: t,
          "aria-label": l.intl.string(l.t.SS9Y6O),
          children: c,
        });
      }
    },
    701011: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var i = t(200651),
        r = t(192379),
        a = t(442837),
        l = t(481060),
        o = t(110924),
        d = t(812206),
        c = t(554370),
        u = t(788983),
        s = t(214629),
        p = t(317381),
        v = t(781780),
        m = t(325749),
        f = t(981631),
        h = t(175911);
      function x() {
        var e;
        let { embeddedActivity: n, channelId: t } = (0, a.cj)([p.ZP], () => {
            let e = p.ZP.getCurrentEmbeddedActivity(),
              n = null == e ? void 0 : e.channelId;
            return { embeddedActivity: e, channelId: n };
          }),
          x = r.useRef(null),
          Z = (0, o.Z)(n);
        r.useEffect(() => {
          null != n
            ? clearTimeout(x.current)
            : null != Z &&
              null == n &&
              (x.current = window.setTimeout(() => {
                (0, u.xv)(f.KJ3.ACTIVITY_POPOUT);
              }, 5e3));
        }, [n, Z]);
        let I = (0, a.e7)([d.Z], () => {
            let e = null == n ? void 0 : n.applicationId;
            return null == e ? void 0 : d.Z.getApplication(e);
          }),
          C = (0, s.PR)();
        return (0, i.jsx)("div", {
          className: h.container,
          children:
            null == n || null == I || null == t
              ? (0, i.jsx)(l.Spinner, { className: h.iframe })
              : (0, i.jsx)("div", {
                  className: h.loadedContentContainer,
                  children: (0, i.jsxs)("div", {
                    className: h.iframeAndHeaderContainer,
                    children: [
                      (0, i.jsx)("div", {
                        className: h.headerContainer,
                        children: (0, i.jsx)(m.Z, {
                          applicationId: I.id,
                          channelId: t,
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: h.iframeContainer,
                        children: (0, i.jsx)(v.Z, {
                          channelId: t,
                          guildId:
                            null !== (e = n.guildId) && void 0 !== e
                              ? e
                              : void 0,
                          embeddedActivity: n,
                          application: I,
                        }),
                      }),
                      C ? (0, i.jsx)(c.Z, { isEmbeddedActivity: !0 }) : null,
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
            return d;
          },
        });
      var i = t(200651),
        r = t(238246),
        a = t(952561),
        l = t(701011),
        o = t(388032);
      function d(e) {
        var n;
        let { windowKey: t } = e,
          d = (0, a.Z)();
        return (0, i.jsx)(r.Z, {
          withTitleBar: !0,
          windowKey: t,
          title:
            null !== (n = null == d ? void 0 : d.name) && void 0 !== n
              ? n
              : o.intl.string(o.t.IC5Anp),
          children: (0, i.jsx)(l.Z, {}),
        });
      }
    },
    870745: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651),
        r = t(442837),
        a = t(481060),
        l = t(726721),
        o = t(726521),
        d = t(592125),
        c = t(388032);
      function u(e, n) {
        let t = l.Z.useExperiment(
            { location: "activity_popout_overflow_menu" },
            { autoTrackExposure: !1 },
          ).enabled,
          u = (0, r.e7)([d.Z], () => d.Z.getChannel(n)),
          s = null == u ? void 0 : u.getGuildId();
        return !1 === t
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "report-app",
              color: "danger",
              label: c.intl.string(c.t.NgA5vr),
              action: () =>
                (0, o.uu)({
                  application: e,
                  entrypoint: "activity_ui_popout",
                  contextualGuildId: null != s ? s : void 0,
                  contextualChannelId: null == u ? void 0 : u.id,
                }),
              icon: a.FlagIcon,
            });
      }
    },
    864096: function (e, n, t) {
      e.exports = { iframe: "iframe_e3c6c1" };
    },
    124062: function (e, n, t) {
      e.exports = {
        container: "container_c56579",
        headerSection: "headerSection_c56579",
        headerSectionLeft: "headerSectionLeft_c56579",
        headerSectionRight: "headerSectionRight_c56579",
        appIcon: "appIcon_c56579",
        avatar: "avatar_c56579",
        userAvatars: "userAvatars_c56579",
        dotSpacer: "dotSpacer_c56579",
        actionButtonsContainer: "actionButtonsContainer_c56579",
      };
    },
    175911: function (e, n, t) {
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
//# sourceMappingURL=4841869c755c98fa4462.js.map
