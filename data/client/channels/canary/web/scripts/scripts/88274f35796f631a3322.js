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
        r = t(963614),
        a = t(208156),
        o = t(701488),
        l = t(864096);
      function c(e) {
        var n, t, c;
        let {
            channelId: d,
            guildId: u,
            embeddedActivity: s,
            application: p,
          } = e,
          m = {
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
            referrer_id: s.referrerId,
            custom_id: s.customId,
          };
        return (
          null != u && "" !== u && (m.guild_id = u),
          null != d && "" !== d && (m.channel_id = d),
          (0, i.jsx)(a.J, {
            allowPopups: (0, r.h)(p),
            referrerPolicy: o.um.has(s.applicationId)
              ? "no-referrer"
              : "origin",
            url: s.url,
            queryParams: m,
            className: l.iframe,
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
        o = t.n(a),
        l = t(442837),
        c = t(481060),
        d = t(13245),
        u = t(753972),
        s = t(812206),
        p = t(726721),
        m = t(610394),
        v = t(390322),
        f = t(961048),
        h = t(871499),
        x = t(786915),
        Z = t(592125),
        _ = t(271383),
        I = t(594174),
        C = t(51144),
        j = t(145597),
        g = t(214629),
        A = t(317381),
        P = t(884338),
        S = t(473179),
        b = t(981631),
        N = t(388032),
        y = t(124062);
      let T = P.u.SIZE_24;
      function k(e) {
        let { applicationId: n, channelId: t } = e,
          a = (0, l.e7)([s.Z], () => s.Z.getApplication(n)),
          k = (0, l.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivities().get(n)),
          w = (0, l.e7)([Z.Z], () => Z.Z.getChannel(t)),
          E = (0, l.Wu)(
            [_.ZP],
            () => {
              var e;
              return null == w || null == k
                ? []
                : Array.from(
                    null !== (e = k.userIds) && void 0 !== e ? e : [],
                  ).map((e) => _.ZP.getMember(w.guild_id, e));
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
              if (null == e) return null;
              let r = R.get(e.id),
                a =
                  null !== (t = null == r ? void 0 : r.nick) && void 0 !== t
                    ? t
                    : C.ZP.getName(e);
              return (0, i.jsx)(
                c.TooltipContainer,
                {
                  text: a,
                  position: "bottom",
                  children: (0, i.jsx)(
                    "img",
                    {
                      src: e.getAvatarURL(null == n ? void 0 : n.guild_id, T),
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
          B = (0, l.Wu)(
            [I.default],
            () =>
              Array.from(null != O ? O : [])
                .map((e) => I.default.getUser(e))
                .filter((e) => null != e),
            [O],
          ),
          M = p.Z.useExperiment(
            { location: "activity_popout_overflow_menu" },
            { autoTrackExposure: !0 },
          ).enabled,
          U = r.useCallback(() => {
            let e = (0, j.QF)();
            d.Z.setInputLocked(!m.Z.isInputLocked(e), e);
          }, []),
          z = (0, g.PR)();
        return null == a || null == k
          ? null
          : (0, i.jsx)(c.ThemeProvider, {
              theme: b.BRd.DARK,
              children: (e) =>
                (0, i.jsxs)("div", {
                  className: o()(y.container, e),
                  children: [
                    (0, i.jsxs)("div", {
                      className: o()(y.headerSection, y.headerSectionLeft),
                      children: [
                        (0, i.jsx)(u.Z, {
                          application: a,
                          size: 24,
                          className: y.appIcon,
                        }),
                        (0, i.jsx)(c.Text, {
                          variant: "text-md/normal",
                          color: "header-primary",
                          children: a.name,
                        }),
                        (0, i.jsx)("div", {
                          className: y.dotSpacer,
                          children: (0, i.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: ".",
                          }),
                        }),
                        (0, i.jsx)(P.Z, {
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
                      className: o()(y.headerSection, y.headerSectionRight),
                      children: (0, i.jsxs)("div", {
                        className: y.actionButtonsContainer,
                        children: [
                          (0, i.jsx)(x.Z, {
                            appContext: b.IlC.POPOUT,
                            applicationId: n,
                            channel: w,
                            shouldPrioritizeGroupPlusIcon: !0,
                            embeddedActivity: k,
                          }),
                          z
                            ? (0, i.jsx)(h.Z, {
                                onClick: U,
                                iconComponent: c.WindowTopOutlineIcon,
                                label: N.intl.string(N.t.mseZsL),
                              })
                            : null,
                          M &&
                            (0, i.jsx)(
                              c.Popout,
                              {
                                position: "bottom",
                                renderPopout: (e) => {
                                  let { closePopout: n } = e;
                                  return (0, i.jsx)(v.Z, {
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
          return l;
        },
      });
      var i = t(200651),
        r = t(481060),
        a = t(870745),
        o = t(388032);
      function l(e) {
        let { onClose: n, onSelect: t, application: l, channelId: c } = e,
          d = (0, a.Z)(l, c);
        return (0, i.jsx)(r.Menu, {
          navId: "activity-popout-overflow-popout",
          onClose: n,
          onSelect: t,
          "aria-label": o.intl.string(o.t.SS9Y6O),
          children: d,
        });
      }
    },
    701011: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      });
      var i = t(200651),
        r = t(192379),
        a = t(442837),
        o = t(481060),
        l = t(110924),
        c = t(812206),
        d = t(554370),
        u = t(788983),
        s = t(214629),
        p = t(317381),
        m = t(16609),
        v = t(781780),
        f = t(325749),
        h = t(981631),
        x = t(175911);
      function Z() {
        let {
            embeddedActivity: e,
            channelId: n,
            guildId: t,
          } = (0, a.cj)([p.ZP], () => {
            let e = p.ZP.getCurrentEmbeddedActivity(),
              n = (0, m.p)(null == e ? void 0 : e.location),
              t = (0, m.j)(null == e ? void 0 : e.location);
            return { embeddedActivity: e, channelId: n, guildId: t };
          }),
          Z = r.useRef(null),
          _ = (0, l.Z)(e);
        r.useEffect(() => {
          null != e
            ? clearTimeout(Z.current)
            : null != _ &&
              null == e &&
              (Z.current = window.setTimeout(() => {
                (0, u.xv)(h.KJ3.ACTIVITY_POPOUT);
              }, 5e3));
        }, [e, _]);
        let I = (0, a.e7)([c.Z], () => {
            let n = null == e ? void 0 : e.applicationId;
            return null == n ? void 0 : c.Z.getApplication(n);
          }),
          C = (0, s.PR)();
        return (0, i.jsx)("div", {
          className: x.container,
          children:
            null == e || null == I
              ? (0, i.jsx)(o.Spinner, { className: x.iframe })
              : (0, i.jsx)("div", {
                  className: x.loadedContentContainer,
                  children: (0, i.jsxs)("div", {
                    className: x.iframeAndHeaderContainer,
                    children: [
                      (0, i.jsx)("div", {
                        className: x.headerContainer,
                        children: (0, i.jsx)(f.Z, {
                          applicationId: I.id,
                          channelId: n,
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: x.iframeContainer,
                        children: (0, i.jsx)(v.Z, {
                          channelId: n,
                          guildId: t,
                          embeddedActivity: e,
                          application: I,
                        }),
                      }),
                      C ? (0, i.jsx)(d.Z, { isEmbeddedActivity: !0 }) : null,
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
        r = t(238246),
        a = t(952561),
        o = t(701011),
        l = t(388032);
      function c(e) {
        var n;
        let { windowKey: t } = e,
          c = (0, a.Z)();
        return (0, i.jsx)(r.Z, {
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
          return u;
        },
      });
      var i = t(200651),
        r = t(442837),
        a = t(481060),
        o = t(726721),
        l = t(726521),
        c = t(592125),
        d = t(388032);
      function u(e, n) {
        let t = o.Z.useExperiment(
            { location: "activity_popout_overflow_menu" },
            { autoTrackExposure: !0 },
          ).enabled,
          u = (0, r.e7)([c.Z], () => c.Z.getChannel(n)),
          s = null == u ? void 0 : u.getGuildId();
        return !1 === t
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "report-app",
              color: "danger",
              label: d.intl.string(d.t.NgA5vr),
              action: () =>
                (0, l.uu)({
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
//# sourceMappingURL=88274f35796f631a3322.js.map
