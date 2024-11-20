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
          return O;
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
        v = t(522474),
        b = t(788983),
        h = t(390322),
        m = t(961048),
        C = t(871499),
        x = t(268353),
        g = t(786915),
        I = t(592125),
        k = t(271383),
        Z = t(594174),
        N = t(51144),
        j = t(228488),
        y = t(145597),
        S = t(214629),
        A = t(566620),
        E = t(317381),
        z = t(574952),
        P = t(884338),
        W = t(473179),
        B = t(701488),
        w = t(981631),
        L = t(388032),
        T = t(114195);
      let R = P.u.SIZE_24;
      function O(e) {
        let { applicationId: n, channelId: t } = e,
          a = (0, c.e7)([u.Z], () => u.Z.getApplication(n)),
          O = (0, c.e7)([E.ZP], () => E.ZP.getSelfEmbeddedActivities().get(n)),
          U = (0, c.e7)([I.Z], () => I.Z.getChannel(t)),
          M = (0, c.Wu)(
            [k.ZP],
            () => {
              var e;
              return null == U || null == O
                ? []
                : Array.from(
                    null !== (e = O.userIds) && void 0 !== e ? e : [],
                  ).map((e) => k.ZP.getMember(U.guild_id, e));
            },
            [O, U],
          ),
          D = o.useMemo(() => {
            let e = new Map();
            return (
              M.forEach((n) => {
                null != n && void 0 !== n && e.set(n.userId, n);
              }),
              e
            );
          }, [M]),
          F = o.useCallback(
            (e, n) => {
              var t;
              if (null == e || void 0 === e || void 0 === n) return null;
              let o = D.get(e.id),
                a =
                  null !== (t = null == o ? void 0 : o.nick) && void 0 !== t
                    ? t
                    : N.ZP.getName(e);
              return (0, i.jsx)(
                l.TooltipContainer,
                {
                  text: a,
                  position: "bottom",
                  children: (0, i.jsx)(
                    "img",
                    {
                      src: e.getAvatarURL(n.guild_id, R),
                      alt: a,
                      className: T.avatar,
                    },
                    e.id,
                  ),
                },
                e.id,
              );
            },
            [D],
          ),
          K = null == O ? void 0 : O.userIds,
          G = (0, c.Wu)(
            [Z.default],
            () =>
              Array.from(null != K ? K : [])
                .map((e) => Z.default.getUser(e))
                .filter((e) => null != e && void 0 !== e),
            [K],
          ),
          H = o.useCallback(() => {
            (0, z.Z)().leaveActivity({ channelId: t, applicationId: n }),
              (0, b.xv)(w.KJ3.ACTIVITY_POPOUT);
          }, [t, n]),
          J = (0, c.e7)([E.ZP], () => E.ZP.getActivityPopoutWindowLayout()),
          Y = (0, c.e7)([v.Z], () => v.Z.getWindow(w.KJ3.ACTIVITY_POPOUT)),
          V = o.useCallback(
            () => (null == Y ? void 0 : Y.document.getElementById("app-mount")),
            [Y],
          ),
          q = o.useCallback(() => {
            let e = V();
            null != e &&
              (J !== B.GM.FULL_SCREEN
                ? ((0, A.Hp)(B.GM.FULL_SCREEN), (0, j.Dj)(e))
                : ((0, A.Hp)(B.GM.NORMAL),
                  (0, j.Pr)(e, null == Y ? void 0 : Y.document)));
          }, [J, V, Y]),
          Q = f.Z.useExperiment(
            { location: "activity_popout_overflow_menu" },
            { autoTrackExposure: !1 },
          ).enabled,
          X = o.useCallback(() => {
            let e = (0, y.QF)();
            d.Z.setInputLocked(!p.Z.isInputLocked(e), e);
          }, []),
          $ = (0, S.PR)();
        return null == a || null == t || null == U
          ? null
          : (0, i.jsx)(l.ThemeProvider, {
              theme: w.BRd.DARK,
              children: (e) =>
                (0, i.jsxs)("div", {
                  className: r()(T.container, e),
                  children: [
                    (0, i.jsxs)("div", {
                      className: r()(T.headerSection, T.headerSectionLeft),
                      children: [
                        (0, i.jsx)("div", {
                          className: T.leaveIconContainer,
                          children: (0, i.jsx)(_.ZP.Icon, {
                            onClick: H,
                            icon: l.XSmallIcon,
                            tooltip: L.intl.string(L.t["R/FK4O"]),
                          }),
                        }),
                        (0, i.jsx)(s.Z, {
                          application: a,
                          size: 24,
                          className: T.appIcon,
                        }),
                        (0, i.jsx)(l.Text, {
                          variant: "text-md/normal",
                          color: "header-primary",
                          children: a.name,
                        }),
                        (0, i.jsx)("div", {
                          className: T.dotSpacer,
                          children: (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: ".",
                          }),
                        }),
                        (0, i.jsx)(P.Z, {
                          renderIcon: !1,
                          users: G,
                          size: R,
                          max: 6,
                          className: T.userAvatars,
                          renderUser: (e) => F(e, U),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: r()(T.headerSection, T.headerSectionRight),
                      children: (0, i.jsxs)("div", {
                        className: T.actionButtonsContainer,
                        children: [
                          (0, i.jsx)(g.Z, {
                            appContext: w.IlC.POPOUT,
                            applicationId: n,
                            channel: U,
                          }),
                          $
                            ? (0, i.jsx)(C.Z, {
                                onClick: X,
                                iconComponent: l.WindowTopOutlineIcon,
                                label: L.intl.string(L.t.mseZsL),
                              })
                            : null,
                          (0, i.jsx)(x.Z, {
                            onClick: q,
                            guestWindow: Y,
                            node: V(),
                          }),
                          Q &&
                            (0, i.jsx)(
                              l.Popout,
                              {
                                position: "bottom",
                                renderPopout: (e) => {
                                  let { closePopout: n } = e;
                                  return (0, i.jsx)(h.Z, {
                                    children: (0, i.jsx)(W.Z, {
                                      application: a,
                                      onClose: n,
                                    }),
                                  });
                                },
                                children: (e, n) => {
                                  let { isShown: t } = n;
                                  return (0, o.createElement)(m.Z, {
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
          return h;
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
        b = t(466127);
      function h() {
        var e;
        let { embeddedActivity: n, channelId: t } = (0, a.cj)([_.ZP], () => {
            let e = _.ZP.getCurrentEmbeddedActivity(),
              n = null == e ? void 0 : e.channelId;
            return { embeddedActivity: e, channelId: n };
          }),
          h = (0, c.Z)(n);
        o.useEffect(() => {
          null != h && null == n && (0, s.xv)(v.KJ3.ACTIVITY_POPOUT);
        }, [n, h]);
        let m = (0, a.e7)([l.Z], () => {
            let e = null == n ? void 0 : n.applicationId;
            return null == e ? void 0 : l.Z.getApplication(e);
          }),
          C = (0, u.PR)();
        return (0, i.jsx)("div", {
          className: b.container,
          children:
            null == n || null == m || null == t
              ? (0, i.jsx)(r.Spinner, { className: b.iframe })
              : (0, i.jsx)("div", {
                  className: b.loadedContentContainer,
                  children: (0, i.jsxs)("div", {
                    className: b.iframeAndHeaderContainer,
                    children: [
                      (0, i.jsx)("div", {
                        className: b.headerContainer,
                        children: (0, i.jsx)(p.Z, {
                          applicationId: m.id,
                          channelId: t,
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: b.iframeContainer,
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
//# sourceMappingURL=2b3a53e7c4416b787ef0.js.map
