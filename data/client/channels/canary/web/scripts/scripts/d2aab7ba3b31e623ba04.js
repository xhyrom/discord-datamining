"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9334"],
  {
    781780: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(200651),
        o = t(963614),
        a = t(208156),
        r = t(701488),
        c = t(848556);
      function l(e) {
        var n, t, l;
        let {
            channelId: d,
            guildId: s,
            embeddedActivity: u,
            application: _,
          } = e,
          f = {
            instance_id:
              null !==
                (l =
                  null !== (t = u.compositeInstanceId) && void 0 !== t
                    ? t
                    : u.launchId) && void 0 !== l
                ? l
                : "",
            location_id:
              null === (n = u.location) || void 0 === n ? void 0 : n.id,
            launch_id: u.launchId,
          };
        return (
          null != s && "" !== s && (f.guild_id = s),
          null != d && "" !== d && (f.channel_id = d),
          (0, i.jsx)(a.J, {
            allowPopups: (0, o.h)(_),
            referrerPolicy: r.um.has(u.applicationId)
              ? "no-referrer"
              : "origin",
            url: u.url,
            queryParams: f,
            className: c.iframe,
            shouldRefocus: !1,
          })
        );
      }
    },
    325749: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return B;
        },
      }),
        t(47120);
      var i = t(200651),
        o = t(192379),
        a = t(120356),
        r = t.n(a),
        c = t(442837),
        l = t(481060),
        d = t(13245),
        s = t(753972),
        u = t(812206),
        _ = t(665149),
        f = t(726721),
        p = t(610394),
        v = t(788983),
        h = t(390322),
        b = t(961048),
        m = t(871499),
        C = t(786915),
        x = t(592125),
        g = t(271383),
        I = t(594174),
        k = t(51144),
        Z = t(145597),
        j = t(214629),
        N = t(317381),
        S = t(574952),
        y = t(884338),
        z = t(473179),
        A = t(981631),
        E = t(388032),
        W = t(114195);
      let P = y.u.SIZE_24;
      function B(e) {
        let { applicationId: n, channelId: t } = e,
          a = (0, c.e7)([u.Z], () => u.Z.getApplication(n)),
          B = (0, c.e7)([N.ZP], () => N.ZP.getSelfEmbeddedActivities().get(n)),
          w = (0, c.e7)([x.Z], () => x.Z.getChannel(t)),
          L = (0, c.Wu)(
            [g.ZP],
            () => {
              var e;
              return null == w || null == B
                ? []
                : Array.from(
                    null !== (e = B.userIds) && void 0 !== e ? e : [],
                  ).map((e) => g.ZP.getMember(w.guild_id, e));
            },
            [B, w],
          ),
          T = o.useMemo(() => {
            let e = new Map();
            return (
              L.forEach((n) => {
                null != n && void 0 !== n && e.set(n.userId, n);
              }),
              e
            );
          }, [L]),
          R = o.useCallback(
            (e, n) => {
              var t;
              if (null == e || void 0 === e || void 0 === n) return null;
              let o = T.get(e.id),
                a =
                  null !== (t = null == o ? void 0 : o.nick) && void 0 !== t
                    ? t
                    : k.ZP.getName(e);
              return (0, i.jsx)(
                l.TooltipContainer,
                {
                  text: a,
                  position: "bottom",
                  children: (0, i.jsx)(
                    "img",
                    {
                      src: e.getAvatarURL(n.guild_id, P),
                      alt: a,
                      className: W.avatar,
                    },
                    e.id,
                  ),
                },
                e.id,
              );
            },
            [T],
          ),
          O = null == B ? void 0 : B.userIds,
          U = (0, c.Wu)(
            [I.default],
            () =>
              Array.from(null != O ? O : [])
                .map((e) => I.default.getUser(e))
                .filter((e) => null != e && void 0 !== e),
            [O],
          ),
          D = o.useCallback(() => {
            (0, S.Z)().leaveActivity({ channelId: t, applicationId: n }),
              (0, v.xv)(A.KJ3.ACTIVITY_POPOUT);
          }, [t, n]),
          M = f.Z.useExperiment(
            { location: "activity_popout_overflow_menu" },
            { autoTrackExposure: !1 },
          ).enabled,
          F = o.useCallback(() => {
            let e = (0, Z.QF)();
            d.Z.setInputLocked(!p.Z.isInputLocked(e), e);
          }, []),
          K = (0, j.PR)();
        return null == a || null == t || null == w
          ? null
          : (0, i.jsx)(l.ThemeProvider, {
              theme: A.BRd.DARK,
              children: (e) =>
                (0, i.jsxs)("div", {
                  className: r()(W.container, e),
                  children: [
                    (0, i.jsxs)("div", {
                      className: r()(W.headerSection, W.headerSectionLeft),
                      children: [
                        (0, i.jsx)("div", {
                          className: W.leaveIconContainer,
                          children: (0, i.jsx)(_.ZP.Icon, {
                            onClick: D,
                            icon: l.XSmallIcon,
                            tooltip: E.intl.string(E.t["R/FK4O"]),
                          }),
                        }),
                        (0, i.jsx)(s.Z, {
                          application: a,
                          size: 24,
                          className: W.appIcon,
                        }),
                        (0, i.jsx)(l.Text, {
                          variant: "text-md/normal",
                          color: "header-primary",
                          children: a.name,
                        }),
                        (0, i.jsx)("div", {
                          className: W.dotSpacer,
                          children: (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: ".",
                          }),
                        }),
                        (0, i.jsx)(y.Z, {
                          renderIcon: !1,
                          users: U,
                          size: P,
                          max: 6,
                          className: W.userAvatars,
                          renderUser: (e) => R(e, w),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: r()(W.headerSection, W.headerSectionRight),
                      children: (0, i.jsxs)("div", {
                        className: W.actionButtonsContainer,
                        children: [
                          (0, i.jsx)(C.Z, {
                            appContext: A.IlC.POPOUT,
                            applicationId: n,
                            channel: w,
                            shouldPrioritizeGroupPlusIcon: !0,
                          }),
                          K
                            ? (0, i.jsx)(m.Z, {
                                onClick: F,
                                iconComponent: l.WindowTopOutlineIcon,
                                label: E.intl.string(E.t.mseZsL),
                              })
                            : null,
                          M &&
                            (0, i.jsx)(
                              l.Popout,
                              {
                                position: "bottom",
                                renderPopout: (e) => {
                                  let { closePopout: n } = e;
                                  return (0, i.jsx)(h.Z, {
                                    children: (0, i.jsx)(z.Z, {
                                      application: a,
                                      onClose: n,
                                    }),
                                  });
                                },
                                children: (e, n) => {
                                  let { isShown: t } = n;
                                  return (0, o.createElement)(b.Z, {
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
          return c;
        },
      });
      var i = t(200651),
        o = t(481060),
        a = t(870745),
        r = t(388032);
      function c(e) {
        let { onClose: n, onSelect: t, application: c } = e,
          l = (0, a.Z)(c);
        return (0, i.jsx)(o.Menu, {
          navId: "activity-popout-overflow-popout",
          onClose: n,
          onSelect: t,
          "aria-label": r.intl.string(r.t.SS9Y6O),
          children: l,
        });
      }
    },
    701011: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      });
      var i = t(200651),
        o = t(192379),
        a = t(442837),
        r = t(481060),
        c = t(110924),
        l = t(812206),
        d = t(554370),
        s = t(788983),
        u = t(214629),
        _ = t(317381),
        f = t(781780),
        p = t(325749),
        v = t(981631),
        h = t(466127);
      function b() {
        var e;
        let { embeddedActivity: n, channelId: t } = (0, a.cj)([_.ZP], () => {
            let e = _.ZP.getCurrentEmbeddedActivity(),
              n = null == e ? void 0 : e.channelId;
            return { embeddedActivity: e, channelId: n };
          }),
          b = (0, c.Z)(n);
        o.useEffect(() => {
          null != b && null == n && (0, s.xv)(v.KJ3.ACTIVITY_POPOUT);
        }, [n, b]);
        let m = (0, a.e7)([l.Z], () => {
            let e = null == n ? void 0 : n.applicationId;
            return null == e ? void 0 : l.Z.getApplication(e);
          }),
          C = (0, u.PR)();
        return (0, i.jsx)("div", {
          className: h.container,
          children:
            null == n || null == m || null == t
              ? (0, i.jsx)(r.Spinner, { className: h.iframe })
              : (0, i.jsx)("div", {
                  className: h.loadedContentContainer,
                  children: (0, i.jsxs)("div", {
                    className: h.iframeAndHeaderContainer,
                    children: [
                      (0, i.jsx)("div", {
                        className: h.headerContainer,
                        children: (0, i.jsx)(p.Z, {
                          applicationId: m.id,
                          channelId: t,
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: h.iframeContainer,
                        children: (0, i.jsx)(f.Z, {
                          channelId: t,
                          guildId:
                            null !== (e = n.guildId) && void 0 !== e
                              ? e
                              : void 0,
                          embeddedActivity: n,
                          application: m,
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
            return l;
          },
        });
      var i = t(200651),
        o = t(238246),
        a = t(952561),
        r = t(701011),
        c = t(388032);
      function l(e) {
        var n;
        let { windowKey: t } = e,
          l = (0, a.Z)();
        return (0, i.jsx)(o.Z, {
          withTitleBar: !0,
          windowKey: t,
          title:
            null !== (n = null == l ? void 0 : l.name) && void 0 !== n
              ? n
              : c.intl.string(c.t.IC5Anp),
          children: (0, i.jsx)(r.Z, {}),
        });
      }
    },
    870745: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(200651),
        o = t(481060),
        a = t(726721),
        r = t(726521),
        c = t(388032);
      function l(e) {
        return !1 ===
          a.Z.useExperiment(
            { location: "activity_popout_overflow_menu" },
            { autoTrackExposure: !1 },
          ).enabled
          ? null
          : (0, i.jsx)(o.MenuItem, {
              id: "report-app",
              color: "danger",
              label: c.intl.string(c.t.NgA5vr),
              action: () => (0, r.uu)(e),
              icon: o.FlagIcon,
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
    250145: function (e, n, t) {
      e.exports = {
        container: "container_e2d331",
        activityCard: "activityCard_e2d331",
        row: "row_e2d331",
        inviteFriendsButton: "inviteFriendsButton_e2d331",
        avatar: "avatar_e2d331",
        details: "details_e2d331",
        usernameWrapper: "usernameWrapper_e2d331",
        username: "username_e2d331",
        inviteButton: "inviteButton_e2d331",
        inviteButtonWrapper: "inviteButtonWrapper_e2d331",
        inviteButtonInner: "inviteButtonInner_e2d331",
        liveIndicator: "liveIndicator_e2d331",
        badgesContainer: "badgesContainer_e2d331",
      };
    },
    290510: function (e, n, t) {
      e.exports = {
        clickZoneDebugContainer: "clickZoneDebugContainer_afd0a0",
        clickZone: "clickZone_afd0a0",
        clickBackground: "clickBackground_afd0a0",
        clickable: "clickable_afd0a0",
      };
    },
    629769: function (e, n, t) {
      e.exports = {
        dismissButton: "dismissButton_a9614f",
        dismissIcon: "dismissIcon_a9614f",
      };
    },
    33806: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_c58c1c",
        unlocked: "unlocked_c58c1c",
        lockExtras: "lockExtras_c58c1c",
        operation: "operation_c58c1c",
        resizeNorth: "resizeNorth_c58c1c handle_c58c1c",
        resizeSouth: "resizeSouth_c58c1c handle_c58c1c",
        resizeNSCursor: "resizeNSCursor_c58c1c",
        resizeWest: "resizeWest_c58c1c handle_c58c1c",
        resizeEast: "resizeEast_c58c1c handle_c58c1c",
        resizeEWCursor: "resizeEWCursor_c58c1c",
        resizeNorthWest: "resizeNorthWest_c58c1c handle_c58c1c",
        resizeNorthEast: "resizeNorthEast_c58c1c handle_c58c1c",
        resizeSouthWest: "resizeSouthWest_c58c1c handle_c58c1c",
        resizeSouthEast: "resizeSouthEast_c58c1c handle_c58c1c",
        resizeNWSECursor: "resizeNWSECursor_c58c1c",
        resizeNESWCursor: "resizeNESWCursor_c58c1c",
        extras: "extras_c58c1c",
        extrasBottomOriented: "extrasBottomOriented_c58c1c",
        extrasRightOriented: "extrasRightOriented_c58c1c",
      };
    },
    705617: function (e, n, t) {
      e.exports = {
        gridContainer: "gridContainer_dcc220",
        horizontal: "horizontal_dcc220",
        vertical: "vertical_dcc220",
        tileContainer: "tileContainer_dcc220",
        tile: "tile_dcc220",
      };
    },
    757152: function (e, n, t) {
      e.exports = { goLiveGridContainer: "goLiveGridContainer_c324b1" };
    },
    96685: function (e, n, t) {
      e.exports = {
        buttonContainer: "buttonContainer_b1ba99",
        keybind: "keybind_b1ba99",
        button: "button_b1ba99",
      };
    },
    111519: function (e, n, t) {
      e.exports = { key: "key_da7116" };
    },
    668674: function (e, n, t) {
      e.exports = {
        videoDev: "videoDev_b99764",
        overlay: "overlay_b99764",
        overlayBackground: "overlayBackground_b99764",
        overlayActive: "overlayActive_b99764",
        overlayLocked: "overlayLocked_b99764",
        closeContainer: "closeContainer_b99764",
        invalidContainer: "invalidContainer_b99764",
        inactiveContainer: "inactiveContainer_b99764",
        layoutLocked: "layoutLocked_b99764",
        layoutUnlocked: "layoutUnlocked_b99764 layoutLocked_b99764",
      };
    },
    269041: function (e, n, t) {
      e.exports = { debugMode: "debugMode_f4091c" };
    },
    474263: function (e, n, t) {
      e.exports = {
        button: "button_a467e9",
        cutoutContainer: "cutoutContainer_a467e9",
        toggledCutoutContainer: "toggledCutoutContainer_a467e9",
        separatorDot: "separatorDot_a467e9",
        guildIconContainer: "guildIconContainer_a467e9",
        guildIcon: "guildIcon_a467e9",
        voiceChannelNameContainer: "voiceChannelNameContainer_a467e9",
        channelIcon: "channelIcon_a467e9",
        channelName: "channelName_a467e9",
      };
    },
    720870: function (e, n, t) {
      e.exports = {
        panelContainer: "panelContainer_d476d7",
        locked: "locked_d476d7",
        panelRow: "panelRow_d476d7",
        separator: "separator_d476d7",
      };
    },
    555018: function (e, n, t) {
      e.exports = { container: "container_c7fa60" };
    },
    253653: function (e, n, t) {
      e.exports = {
        videoList: "videoList_a6fa57",
        vertical: "vertical_a6fa57",
        tile: "tile_a6fa57",
      };
    },
    915990: function (e, n, t) {
      e.exports = {
        voiceUser: "voiceUser_cebb84",
        flipped: "flipped_cebb84",
        avatar: "avatar_cebb84",
        username: "username_cebb84",
        effect: "effect_cebb84",
        voiceIcons: "voiceIcons_cebb84",
        voiceIcon: "voiceIcon_cebb84",
        interactive: "interactive_cebb84",
        speaking: "speaking_cebb84",
      };
    },
    556351: function (e, n, t) {
      e.exports = { extrasContainer: "extrasContainer_b932b3" };
    },
    614043: function (e, n, t) {
      e.exports = {
        titleWrapper: "titleWrapper_e8dbc8 bgShade_e8dbc8",
        button: "button_e8dbc8 bgShade_e8dbc8",
        active: "active_e8dbc8",
      };
    },
    561990: function (e, n, t) {
      e.exports = { textArea: "textArea_daa88b" };
    },
    213973: function (e, n, t) {
      e.exports = {
        animationWrapper: "animationWrapper_eff2f7",
        clickZone: "clickZone_eff2f7",
        clickable: "clickable_eff2f7",
        overflowWrapper: "overflowWrapper_eff2f7",
        container: "container_eff2f7",
        iconAndDetails: "iconAndDetails_eff2f7",
        footer: "footer_eff2f7",
        details: "details_eff2f7",
        hint: "hint_eff2f7",
        dismissButton: "dismissButton_eff2f7",
        buttonContainer: "buttonContainer_eff2f7",
        button: "button_eff2f7",
        avatar: "avatar_eff2f7",
        icon: "icon_eff2f7",
      };
    },
    408052: function (e, n, t) {
      e.exports = { container: "container_a2d09c" };
    },
    401461: function (e, n, t) {
      e.exports = { container: "container_f19072" };
    },
    549584: function (e, n, t) {
      e.exports = { label: "label_eaa344" };
    },
  },
]);
//# sourceMappingURL=d2aab7ba3b31e623ba04.js.map
