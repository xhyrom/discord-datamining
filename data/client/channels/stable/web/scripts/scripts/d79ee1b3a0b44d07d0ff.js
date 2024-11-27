"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5246"],
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
        c = t(864096);
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
          return E;
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
        _ = t(726721),
        f = t(610394),
        p = t(390322),
        v = t(961048),
        b = t(871499),
        h = t(786915),
        m = t(592125),
        x = t(271383),
        C = t(594174),
        g = t(51144),
        I = t(145597),
        k = t(214629),
        Z = t(317381),
        y = t(884338),
        N = t(473179),
        S = t(981631),
        j = t(388032),
        z = t(124062);
      let A = y.u.SIZE_24;
      function E(e) {
        let { applicationId: n, channelId: t } = e,
          a = (0, c.e7)([u.Z], () => u.Z.getApplication(n)),
          E = (0, c.e7)([Z.ZP], () => Z.ZP.getSelfEmbeddedActivities().get(n)),
          W = (0, c.e7)([m.Z], () => m.Z.getChannel(t)),
          B = (0, c.Wu)(
            [x.ZP],
            () => {
              var e;
              return null == W || null == E
                ? []
                : Array.from(
                    null !== (e = E.userIds) && void 0 !== e ? e : [],
                  ).map((e) => x.ZP.getMember(W.guild_id, e));
            },
            [E, W],
          ),
          P = o.useMemo(() => {
            let e = new Map();
            return (
              B.forEach((n) => {
                null != n && void 0 !== n && e.set(n.userId, n);
              }),
              e
            );
          }, [B]),
          w = o.useCallback(
            (e, n) => {
              var t;
              if (null == e || void 0 === e || void 0 === n) return null;
              let o = P.get(e.id),
                a =
                  null !== (t = null == o ? void 0 : o.nick) && void 0 !== t
                    ? t
                    : g.ZP.getName(e);
              return (0, i.jsx)(
                l.TooltipContainer,
                {
                  text: a,
                  position: "bottom",
                  children: (0, i.jsx)(
                    "img",
                    {
                      src: e.getAvatarURL(n.guild_id, A),
                      alt: a,
                      className: z.avatar,
                    },
                    e.id,
                  ),
                },
                e.id,
              );
            },
            [P],
          ),
          L = null == E ? void 0 : E.userIds,
          R = (0, c.Wu)(
            [C.default],
            () =>
              Array.from(null != L ? L : [])
                .map((e) => C.default.getUser(e))
                .filter((e) => null != e && void 0 !== e),
            [L],
          ),
          T = _.Z.useExperiment(
            { location: "activity_popout_overflow_menu" },
            { autoTrackExposure: !1 },
          ).enabled,
          U = o.useCallback(() => {
            let e = (0, I.QF)();
            d.Z.setInputLocked(!f.Z.isInputLocked(e), e);
          }, []),
          O = (0, k.PR)();
        return null == a || null == t || null == W
          ? null
          : (0, i.jsx)(l.ThemeProvider, {
              theme: S.BRd.DARK,
              children: (e) =>
                (0, i.jsxs)("div", {
                  className: r()(z.container, e),
                  children: [
                    (0, i.jsxs)("div", {
                      className: r()(z.headerSection, z.headerSectionLeft),
                      children: [
                        (0, i.jsx)(s.Z, {
                          application: a,
                          size: 24,
                          className: z.appIcon,
                        }),
                        (0, i.jsx)(l.Text, {
                          variant: "text-md/normal",
                          color: "header-primary",
                          children: a.name,
                        }),
                        (0, i.jsx)("div", {
                          className: z.dotSpacer,
                          children: (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: ".",
                          }),
                        }),
                        (0, i.jsx)(y.Z, {
                          renderIcon: !1,
                          users: R,
                          size: A,
                          max: 6,
                          className: z.userAvatars,
                          renderUser: (e) => w(e, W),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: r()(z.headerSection, z.headerSectionRight),
                      children: (0, i.jsxs)("div", {
                        className: z.actionButtonsContainer,
                        children: [
                          (0, i.jsx)(h.Z, {
                            appContext: S.IlC.POPOUT,
                            applicationId: n,
                            channel: W,
                            shouldPrioritizeGroupPlusIcon: !0,
                          }),
                          O
                            ? (0, i.jsx)(b.Z, {
                                onClick: U,
                                iconComponent: l.WindowTopOutlineIcon,
                                label: j.intl.string(j.t.mseZsL),
                              })
                            : null,
                          T &&
                            (0, i.jsx)(
                              l.Popout,
                              {
                                position: "bottom",
                                renderPopout: (e) => {
                                  let { closePopout: n } = e;
                                  return (0, i.jsx)(p.Z, {
                                    children: (0, i.jsx)(N.Z, {
                                      application: a,
                                      channelId: t,
                                      onClose: n,
                                    }),
                                  });
                                },
                                children: (e, n) => {
                                  let { isShown: t } = n;
                                  return (0, o.createElement)(v.Z, {
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
        let { onClose: n, onSelect: t, application: c, channelId: l } = e,
          d = (0, a.Z)(c, l);
        return (0, i.jsx)(o.Menu, {
          navId: "activity-popout-overflow-popout",
          onClose: n,
          onSelect: t,
          "aria-label": r.intl.string(r.t.SS9Y6O),
          children: d,
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
        b = t(175911);
      function h() {
        var e;
        let { embeddedActivity: n, channelId: t } = (0, a.cj)([_.ZP], () => {
            let e = _.ZP.getCurrentEmbeddedActivity(),
              n = null == e ? void 0 : e.channelId;
            return { embeddedActivity: e, channelId: n };
          }),
          h = o.useRef(null),
          m = (0, c.Z)(n);
        o.useEffect(() => {
          null != n
            ? clearTimeout(h.current)
            : null != m &&
              null == n &&
              (h.current = window.setTimeout(() => {
                (0, s.xv)(v.KJ3.ACTIVITY_POPOUT);
              }, 5e3));
        }, [n, m]);
        let x = (0, a.e7)([l.Z], () => {
            let e = null == n ? void 0 : n.applicationId;
            return null == e ? void 0 : l.Z.getApplication(e);
          }),
          C = (0, u.PR)();
        return (0, i.jsx)("div", {
          className: b.container,
          children:
            null == n || null == x || null == t
              ? (0, i.jsx)(r.Spinner, { className: b.iframe })
              : (0, i.jsx)("div", {
                  className: b.loadedContentContainer,
                  children: (0, i.jsxs)("div", {
                    className: b.iframeAndHeaderContainer,
                    children: [
                      (0, i.jsx)("div", {
                        className: b.headerContainer,
                        children: (0, i.jsx)(p.Z, {
                          applicationId: x.id,
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
                          application: x,
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
          return s;
        },
      });
      var i = t(200651),
        o = t(442837),
        a = t(481060),
        r = t(726721),
        c = t(726521),
        l = t(592125),
        d = t(388032);
      function s(e, n) {
        let t = r.Z.useExperiment(
            { location: "activity_popout_overflow_menu" },
            { autoTrackExposure: !1 },
          ).enabled,
          s = (0, o.e7)([l.Z], () => l.Z.getChannel(n)),
          u = null == s ? void 0 : s.getGuildId();
        return !1 === t
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "report-app",
              color: "danger",
              label: d.intl.string(d.t.NgA5vr),
              action: () =>
                (0, c.uu)({
                  application: e,
                  entrypoint: "activity_ui_popout",
                  contextualGuildId: null != u ? u : void 0,
                  contextualChannelId: null == s ? void 0 : s.id,
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
    13663: function (e, n, t) {
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
    70491: function (e, n, t) {
      e.exports = {
        clickZoneDebugContainer: "clickZoneDebugContainer_afd0a0",
        clickZone: "clickZone_afd0a0",
        clickBackground: "clickBackground_afd0a0",
        clickable: "clickable_afd0a0",
      };
    },
    932209: function (e, n, t) {
      e.exports = {
        dismissButton: "dismissButton_a9614f",
        dismissIcon: "dismissIcon_a9614f",
      };
    },
    706446: function (e, n, t) {
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
    228680: function (e, n, t) {
      e.exports = {
        gridContainer: "gridContainer_dcc220",
        horizontal: "horizontal_dcc220",
        vertical: "vertical_dcc220",
        tileContainer: "tileContainer_dcc220",
        tile: "tile_dcc220",
      };
    },
    666540: function (e, n, t) {
      e.exports = { goLiveGridContainer: "goLiveGridContainer_c324b1" };
    },
    163752: function (e, n, t) {
      e.exports = {
        buttonContainer: "buttonContainer_b1ba99",
        keybind: "keybind_b1ba99",
        button: "button_b1ba99",
      };
    },
    256403: function (e, n, t) {
      e.exports = { key: "key_da7116" };
    },
    167566: function (e, n, t) {
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
    608631: function (e, n, t) {
      e.exports = {
        debugMode: "debugMode_f4091c",
        clickable: "clickable_f4091c",
      };
    },
    725775: function (e, n, t) {
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
    201636: function (e, n, t) {
      e.exports = {
        panelContainer: "panelContainer_d476d7",
        locked: "locked_d476d7",
        panelRow: "panelRow_d476d7",
        separator: "separator_d476d7",
      };
    },
    714902: function (e, n, t) {
      e.exports = { container: "container_c7fa60" };
    },
    827202: function (e, n, t) {
      e.exports = {
        videoList: "videoList_a6fa57",
        vertical: "vertical_a6fa57",
        tile: "tile_a6fa57",
      };
    },
    882110: function (e, n, t) {
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
    152397: function (e, n, t) {
      e.exports = {
        extrasContainer: "extrasContainer_b932b3",
        debug: "debug_b932b3",
        debugUnpinned: "debugUnpinned_b932b3",
        debugPinned: "debugPinned_b932b3",
      };
    },
    122087: function (e, n, t) {
      e.exports = {
        titleWrapper: "titleWrapper_e8dbc8 bgShade_e8dbc8",
        button: "button_e8dbc8 bgShade_e8dbc8",
        active: "active_e8dbc8",
      };
    },
    640784: function (e, n, t) {
      e.exports = { textArea: "textArea_daa88b" };
    },
    176463: function (e, n, t) {
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
    109020: function (e, n, t) {
      e.exports = { container: "container_a2d09c" };
    },
    802334: function (e, n, t) {
      e.exports = { container: "container_f19072" };
    },
    693215: function (e, n, t) {
      e.exports = { label: "label_eaa344" };
    },
  },
]);
//# sourceMappingURL=d79ee1b3a0b44d07d0ff.js.map
