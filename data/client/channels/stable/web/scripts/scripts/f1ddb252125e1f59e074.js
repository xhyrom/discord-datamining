"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64430"],
  {
    114954: function (e) {
      e.exports = "/assets/2206165cca793ab33af9.jpg";
    },
    956089: function (e) {
      e.exports = "/assets/050485857e958066f138.jpg";
    },
    407407: function (e) {
      e.exports = "/assets/cb36816ac228f7edd92d.jpg";
    },
    942006: function (e) {
      e.exports = "/assets/ee98723ad02fdb4e2f66.jpg";
    },
    836479: function (e) {
      e.exports = "/assets/b6e187512bc046e7f357.jpg";
    },
    779337: function (e) {
      e.exports = "/assets/47559949640c3f2eb9a4.jpg";
    },
    694111: function (e) {
      e.exports = "/assets/02d1b623a8aa4276a547.jpg";
    },
    442405: function (e) {
      e.exports = "/assets/f51af29d1074883660ee.jpg";
    },
    974379: function (e) {
      e.exports = "/assets/c83efa08f70fbd23d360.jpg";
    },
    873444: function (e) {
      e.exports = "/assets/13bc45092a7ae08d28cf.jpg";
    },
    216989: function (e) {
      e.exports = "/assets/16766d24074c0eaf5f2f.jpg";
    },
    188225: function (e) {
      e.exports = "/assets/b5454e58f2aea6a7ad26.jpg";
    },
    337664: function (e) {
      e.exports = "/assets/3a5727203a474757d35a.jpg";
    },
    585681: function (e) {
      e.exports = "/assets/924639a60e6d67b413c1.jpg";
    },
    288021: function (e) {
      e.exports = "/assets/0946ee52177675f33436.png";
    },
    114089: function (e) {
      e.exports = "/assets/8405076206059575e192.png";
    },
    8361: function (e) {
      e.exports = "/assets/54c6b44aaa62e3f1e02f.png";
    },
    655297: function (e) {
      e.exports = "/assets/b9327f5bfdf60522e079.jpg";
    },
    616297: function (e) {
      e.exports = "/assets/67d2162365bf05a975f8.jpg";
    },
    213860: function (e) {
      e.exports = "/assets/d8ab62a559169fcc06be.jpg";
    },
    747604: function (e) {
      e.exports = "/assets/fce48417369b7f632663.jpg";
    },
    237931: function (e) {
      e.exports = "/assets/57f4b39ed399fee6e409.jpg";
    },
    992910: function (e) {
      e.exports = "/assets/2469bda5ed48c12bb708.jpg";
    },
    652120: function (e) {
      e.exports = "/assets/ba78e8904a0d2cb31b97.jpg";
    },
    824046: function (e) {
      e.exports = "/assets/7a877275ab50de5541e0.jpg";
    },
    943615: function (e) {
      e.exports = "/assets/45066b829ae4dc5e063c.jpg";
    },
    669001: function (e) {
      e.exports = "/assets/5f6ac50b985fbac7834a.jpg";
    },
    248313: function (e) {
      e.exports = "/assets/850a7c9943cb4da331a1.jpg";
    },
    928119: function (e) {
      e.exports = "/assets/186f03db90b4b7384f33.jpg";
    },
    497664: function (e) {
      e.exports = "/assets/83b1bab23b45e1e176d8.jpg";
    },
    685358: function (e) {
      e.exports = "/assets/6a9dd9b8814bfaf48d50.jpg";
    },
    33218: function (e) {
      e.exports = "/assets/5e812c93334283116c17.jpg";
    },
    975570: function (e) {
      e.exports = "/assets/9f038704b1c18045e7da.jpg";
    },
    932463: function (e) {
      e.exports = "/assets/43444211c095ba20e57d.png";
    },
    361205: function (e) {
      e.exports = "/assets/7d5ee9202b25005e7760.svg";
    },
    812320: function (e) {
      e.exports = "/assets/179f38a447da1db28ae2.svg";
    },
    520599: function (e, t, n) {
      n.d(t, {
        p: function () {
          return a;
        },
      });
      let a = (0, n(818083).B)({
        kind: "user",
        id: "2024-06_amazon_music_activity_shelf_banner",
        label: "Amazon Music Activity Shelf Promo Banner",
        defaultConfig: { enableAmazonMusicShelfPoster: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable shelf promo banners",
            config: { enableAmazonMusicShelfPoster: !0 },
          },
        ],
      });
    },
    678173: function (e, t, n) {
      n.d(t, {
        T: function () {
          return l;
        },
      });
      var a = n(470079),
        i = n(127255);
      function l(e, t) {
        let n = (0, i.Z)({ guildId: e });
        return a.useMemo(() => {
          var e;
          return null !== (e = n.find((e) => e.application.id === t)) &&
            void 0 !== e
            ? e
            : null;
        }, [n, t]);
      }
    },
    636508: function (e, t, n) {
      n.d(t, {
        $: function () {
          return c;
        },
        W: function () {
          return d;
        },
      });
      var a = n(470079),
        i = n(442837),
        l = n(592125),
        s = n(944486),
        o = n(914010),
        r = n(771845);
      function c() {
        var e;
        let { allowGdmActivityChannelSuggestion: t } =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { allowGdmActivityChannelSuggestion: !1 },
          n = s.Z.getVoiceChannelId(),
          a = l.Z.getChannel(n);
        if (null != a && null != a.guild_id) return a.guild_id;
        if (null == a || !t)
          return null !== (e = o.Z.getLastSelectedGuildId()) && void 0 !== e
            ? e
            : r.ZP.getFlattenedGuildIds()[0];
      }
      function d() {
        let e = (0, i.e7)([r.ZP], () => r.ZP.getFlattenedGuildIds());
        return a.useMemo(() => e.map((e) => ({ label: e, value: e })), [e]);
      }
    },
    696068: function (e, t, n) {
      n.d(t, {
        F: function () {
          return x;
        },
        d: function () {
          return p;
        },
      }),
        n(653041),
        n(47120);
      var a = n(442837),
        i = n(592125),
        l = n(324067),
        s = n(430824),
        o = n(496675),
        r = n(944486),
        c = n(979651),
        d = n(938475),
        u = n(823379),
        g = n(374065),
        m = n(981631);
      function v(e, t, n, a, i) {
        let l = (0, g.e4)({
          channelId: e.id,
          ChannelStore: t,
          GuildStore: n,
          PermissionStore: a,
          VoiceStateStore: i,
        });
        return (e.type === m.d4z.GUILD_VOICE && l === g.jy.CAN_LAUNCH) || !1;
      }
      function p(e) {
        var t, n, a;
        let { guildId: g, allowGdmActivityChannelSuggestion: m = !1 } = e;
        if (null == g && !m) return null;
        let p = r.Z.getVoiceChannelId(),
          I = i.Z.getChannel(p);
        if (null != I && (null != I.guild_id || m)) return I.id;
        let x = [];
        for (let e of Object.values(l.Z.getCategories(g)))
          for (let t of e)
            v(t.channel, i.Z, s.Z, o.Z, c.Z) &&
              x.push({
                channel: t.channel,
                users: d.ZP.getVoiceStatesForChannel(t.channel).filter(u.lm),
              });
        return null !==
          (a =
            null ===
              (n = x.sort((e, t) =>
                e.users.length > t.users.length ? -1 : 1,
              )[0]) || void 0 === n
              ? void 0
              : null === (t = n.channel) || void 0 === t
                ? void 0
                : t.id) && void 0 !== a
          ? a
          : null;
      }
      function I(e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++)
          if (e[n].value.channel.id !== t[n].value.channel.id) return !1;
        return !0;
      }
      function x(e) {
        return (0, a.e7)(
          [l.Z, i.Z, s.Z, o.Z, c.Z, d.ZP],
          () => {
            if (null == e) return [];
            let t = [];
            return (
              Object.values(l.Z.getCategories(e)).forEach((e) => {
                e.forEach((e) => {
                  let { channel: n } = e;
                  v(n, i.Z, s.Z, o.Z, c.Z) && t.push(n);
                });
              }),
              t
                .map((e) => {
                  let t = d.ZP.getVoiceStatesForChannel(e).filter(u.lm);
                  return { value: { channel: e, users: t }, label: e.name };
                })
                .sort((e, t) =>
                  e.value.users.length > t.value.users.length ? -1 : 1,
                )
            );
          },
          [e],
          I,
        );
      }
    },
    451576: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(399606),
        i = n(592125);
      function l(e) {
        var t;
        let n = (0, a.e7)([i.Z], () => i.Z.getChannel(e));
        return (
          null !== (t = null == n ? void 0 : n.isPrivate()) && void 0 !== t && t
        );
      }
    },
    665811: function (e, t, n) {
      n.d(t, {
        U: function () {
          return r;
        },
      });
      var a = n(735250);
      n(470079);
      var i = n(481060),
        l = n(542094),
        s = n(689938),
        o = n(637389);
      function r(e) {
        let { action: t, onClick: n } = e,
          r =
            t === l.JS.JOIN
              ? s.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
              : s.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
          c = t === l.JS.JOIN ? i.Button.Colors.PRIMARY : i.Button.Colors.RED;
        return (0, a.jsx)("div", {
          className: o.activityOverlay,
          children: (0, a.jsx)(i.Button, {
            className: o.actionButton,
            onClick: n,
            size: i.Button.Sizes.MEDIUM,
            color: c,
            children: r,
          }),
        });
      }
    },
    556505: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var a = n(735250),
        i = n(470079),
        l = n(481060),
        s = n(911969),
        o = n(689938),
        r = n(661337);
      function c(e) {
        let {
            name: t,
            labelType: n,
            collapsed: c = !1,
            showTooltip: d = !1,
          } = e,
          u = n === s.ww.NEW ? o.Z.Messages.NEW : o.Z.Messages.UPDATED,
          g = n === s.ww.NEW ? r.activityNewBadge : r.activityUpdatedBadge,
          [m, v] = i.useState(c ? "" : u);
        if (
          (i.useEffect(() => {
            c
              ? v("")
              : n === s.ww.NEW
                ? v(o.Z.Messages.NEW)
                : n === s.ww.UPDATED && v(o.Z.Messages.UPDATED);
          }, [c, n]),
          n === s.ww.NONE)
        )
          return null;
        let p = (0, a.jsx)(l.TextBadge, {
          className: g,
          disableColor: !0,
          text: (0, a.jsx)("span", { children: m }),
        });
        if (!d) return p;
        let I = o.Z.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
          activity: t,
        });
        return (0, a.jsx)(l.TooltipContainer, {
          text: I,
          tooltipContentClassName: r.tooltip,
          children: p,
        });
      }
    },
    439934: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return B;
        },
      }),
        n(47120);
      var a = n(735250),
        i = n(470079),
        l = n(120356),
        s = n.n(l),
        o = n(442837),
        r = n(481060),
        c = n(239091),
        d = n(434650),
        u = n(213459),
        g = n(895924),
        m = n(70097),
        v = n(695346),
        p = n(594174),
        I = n(695103),
        x = n(880448),
        f = n(823379),
        _ = n(5192),
        T = n(624138),
        h = n(115130),
        C = n(147865),
        E = n(542094),
        S = n(665811),
        N = n(182906),
        b = n(556505),
        j = n(513202),
        A = n(884338),
        M = n(823531),
        y = n(689938),
        Z = n(325428),
        D = n(969728);
      function L(e) {
        let { value: t, icon: n } = e;
        return (0, a.jsxs)(r.Text, {
          className: Z.activityTag,
          color: "interactive-normal",
          variant: "text-xs/semibold",
          children: [
            (0, f.lm)(n) ? (0, a.jsx)(n, { className: Z.icon }) : null,
            t,
          ],
        });
      }
      function O(e) {
        let {
            activity: t,
            application: n,
            channel: i,
            guildId: l,
            large: s = !1,
          } = e,
          c = (0, o.Wu)([p.default], () => {
            var e;
            return Array.from(
              null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e
                ? e
                : [],
            )
              .map((e) => {
                let [t] = e;
                return p.default.getUser(t);
              })
              .filter(f.lm);
          }),
          d = _.ZP.getName(
            l,
            null == i ? void 0 : i.id,
            null == c ? void 0 : c[0],
          );
        if (((d = (0, T.aF)(d, 15)), null == t || 0 === c.length)) {
          var u, g;
          let e = "".concat(
            (0, C.ZP)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0),
          );
          return (
            s && (e = null !== (g = n.description) && void 0 !== g ? g : ""),
            (0, a.jsx)(r.Text, {
              className: Z.activitySubtitleText,
              variant: "text-xs/normal",
              color: "interactive-normal",
              children: e,
            })
          );
        }
        return (0, a.jsxs)("div", {
          className: Z.activitySubtitleText,
          children: [
            (0, a.jsx)(r.Text, {
              className: Z.usersArePlayingText,
              variant: "text-xs/normal",
              children:
                c.length > 1
                  ? y.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format(
                      { username: d, count: c.length - 1 },
                    )
                  : y.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
                      username: d,
                    }),
            }),
            (0, a.jsx)(A.Z, {
              size: s ? A.u.SIZE_24 : A.u.SIZE_16,
              guildId: l,
              users: c,
              max: 6,
            }),
          ],
        });
      }
      function B(e) {
        var t;
        let {
            activityItem: n,
            channel: l,
            guildId: p,
            locationObject: f,
            onActivityItemVisible: _,
            onActivityItemSelected: T,
            large: A = !1,
          } = e,
          {
            imageBackground: B,
            videoUrl: R,
            activityAction: V,
            joinableEmbeddedApp: k,
            onActivityItemSelected: P,
            labelType: H,
            staffReleasePhase: F,
          } = (0, E.ZP)({
            activityItem: n,
            channel: l,
            guildId: p,
            locationObject: f,
            onActivityItemVisible: _,
            onActivityItemSelected: T,
            embeddedActivitiesManager: j.Z,
            commandOrigin: g.bB.APPLICATION_LAUNCHER,
          }),
          U = (0, o.e7)(
            [h.Z, I.Z],
            () =>
              h.Z.inDevModeForApplication(n.application.id) ||
              I.Z.inTestModeForApplication(n.application.id),
            [n.application.id],
          ),
          { application: Y } = n,
          w = i.useCallback(
            (e) =>
              e &&
              (null == _ ? void 0 : _({ applicationId: n.application.id })),
            [n.application.id, _],
          ),
          G = (0, d.O)(w, 0.8, !0),
          [W, z] = i.useState(!1),
          [q, J] = i.useState(W);
        i.useEffect(() => {
          W && J(!0);
        }, [W]);
        let K = () => z(!0),
          X = () => z(!1),
          $ = v.Sb.useSetting(),
          Q = i.useCallback(() => {
            null == P || P(),
              u.ZP.maybeQueryForInstallLessApps(
                Y.id,
                null == l ? void 0 : l.id,
              );
          }, [Y.id, null == l ? void 0 : l.id, P]);
        return (0, a.jsxs)(r.Clickable, {
          onClick: V === E.JS.START ? Q : void 0,
          onContextMenu: $
            ? (e) => {
                (0, c.vq)(e, (e) => (0, a.jsx)(M.Z, { application: Y, ...e }));
              }
            : void 0,
          className: s()(Z.activityItem, {
            [Z.large]: !0 === A,
            [Z.disabled]: V !== E.JS.START,
          }),
          children: [
            (0, a.jsxs)("div", {
              ref: G,
              className: s()(Z.activityImageContainer, { [Z.large]: !0 === A }),
              onMouseEnter: K,
              onFocus: K,
              onMouseLeave: X,
              onBlur: X,
              children: [
                (0, a.jsx)(N.Z, {
                  imageBackground: B,
                  applicationName: Y.name,
                  imageClassName: s()(Z.activityImage, { [Z.large]: !0 === A }),
                  imageNotFoundClassName: Z.brokenImageIconWrapper,
                }),
                null != R && q && V === E.JS.START
                  ? (0, a.jsx)("div", {
                      className: s()(Z.activityVideo, { [Z.videoFadeOut]: !W }),
                      onAnimationEnd: () => (W ? null : J(!1)),
                      children: (0, a.jsx)(m.Z, {
                        className: Z.activityVideo,
                        src: R,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                      }),
                    })
                  : null,
                V !== E.JS.START
                  ? (0, a.jsx)(S.U, { action: V, onClick: Q })
                  : null,
                (0, a.jsx)("div", {
                  className: Z.overlayBadge,
                  children: (0, a.jsx)("div", {
                    className: Z.badgeContainer,
                    children: (0, a.jsx)(b.Z, { name: Y.name, labelType: H }),
                  }),
                }),
                U
                  ? (0, a.jsx)(r.Tooltip, {
                      text: y.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
                      children: (e) =>
                        (0, a.jsx)("div", {
                          className: Z.devShelfBadge,
                          ...e,
                          children: (0, a.jsx)(x.Z, {
                            className: Z.devShelfIcon,
                          }),
                        }),
                    })
                  : null,
              ],
            }),
            (0, a.jsxs)("div", {
              className: s()(Z.activityTextContainer, { [Z.large]: A }),
              children: [
                A
                  ? (0, a.jsx)(r.Text, {
                      className: Z.activityMaxParticipantsLarge,
                      variant: "text-xs/normal",
                      color: "interactive-normal",
                      children: (0, C.ZP)(
                        null !== (t = Y.maxParticipants) && void 0 !== t
                          ? t
                          : 0,
                      ),
                    })
                  : null,
                (0, a.jsxs)("div", {
                  className: Z.activityName,
                  children: [
                    (0, a.jsx)(r.Heading, {
                      className: Z.activityTitleText,
                      variant: "heading-md/semibold",
                      color: "interactive-active",
                      children: Y.name,
                    }),
                    null != F
                      ? (0, a.jsx)(r.Tooltip, {
                          text: F,
                          children: (e) =>
                            (0, a.jsx)("img", {
                              className: Z.staffBadge,
                              alt: F,
                              src: D,
                              ...e,
                            }),
                        })
                      : null,
                  ],
                }),
                (0, a.jsx)(O, {
                  activity: null == k ? void 0 : k.embeddedActivity,
                  application: Y,
                  channel: l,
                  guildId: p,
                  large: A,
                }),
                (0, a.jsx)("div", {
                  className: Z.activityTagsContainer,
                  children: Y.tags
                    .slice(0, 3)
                    .map((e) =>
                      (0, a.jsx)(
                        L,
                        { value: e },
                        "activity-tag-".concat(Y.id, "-").concat(e),
                      ),
                    ),
                }),
              ],
            }),
          ],
        });
      }
    },
    471840: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return k;
          },
        }),
        n(47120),
        n(653041);
      var a = n(735250),
        i = n(470079),
        l = n(120356),
        s = n.n(l),
        o = n(990547),
        r = n(442837),
        c = n(477690),
        d = n(481060),
        u = n(110924),
        g = n(40851),
        m = n(367907),
        v = n(565384),
        p = n(906732),
        I = n(835473),
        x = n(600164),
        f = n(592125),
        _ = n(451478),
        T = n(626135),
        h = n(585483),
        C = n(624138),
        E = n(115130),
        S = n(566620),
        N = n(421),
        b = n(895395),
        j = n(49978),
        A = n(427996),
        M = n(701488),
        y = n(981631),
        Z = n(689938),
        D = n(226786),
        L = n(361205),
        O = n(812320);
      let B = (0, C.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
        R = (0, C.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
        V =
          (0, C.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) +
          B +
          (0, C.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);
      function k(e) {
        let {
            channel: t,
            guildId: n,
            locationObject: l,
            onClose: c,
            initialSelectedApplicationId: g,
            initialSlide: _ = M.ag.DIRECTORY,
            enableSelectedTextChannelInvite: C,
            analyticsLocations: B,
            ...V
          } = e,
          k = (0, r.e7)([E.Z], () => E.Z.getIsEnabled(), []),
          { analyticsLocations: H } = (0, p.ZP)(B),
          [F, U] = i.useState(_),
          Y = (0, u.Z)(F),
          [w, G] = i.useState(null),
          [W, z] = i.useState(g),
          [q, J] = i.useState(void 0),
          [K] = (0, I.Z)(null == W ? [] : [W]),
          X = i.useRef(null),
          $ = i.useMemo(
            () => ({
              application_id: W,
              source_section: l.section,
              impression_group: o.ImpressionGroups.ACTIVITY_SHELF_FLOW,
            }),
            [l.section, W],
          );
        i.useEffect(() => {
          if (
            F === M.ag.DIRECTORY &&
            null != Y &&
            Y !== M.ag.DIRECTORY &&
            null != w
          ) {
            var e;
            null === (e = X.current) || void 0 === e || e.scrollTo({ top: w });
          }
        }, [w, Y, F]);
        let Q = i.useCallback((e) => {
            var t;
            let { applicationId: n } = e,
              a =
                null === (t = X.current) || void 0 === t ? void 0 : t.scrollTop;
            null != a && G(a), z(n), U(M.ag.SELECT_CHANNEL);
          }, []),
          ee = i.useCallback((e) => {
            let { applicationId: t } = e;
            z(t), U(M.ag.DETAIL_PAGE);
          }, []);
        i.useEffect(() => {
          T.default.track(y.rMx.OPEN_MODAL, {
            type: "Activity Shelf",
            channel_id: null == t ? void 0 : t.id,
            guild_id: n,
          });
        }, [t, n]),
          i.useEffect(
            () => (
              h.S.subscribe(y.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q),
              () => {
                h.S.unsubscribe(y.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q);
              }
            ),
            [Q],
          ),
          i.useEffect(
            () => (
              h.S.subscribe(y.CkL.SHOW_ACTIVITY_DETAILS, ee),
              () => {
                h.S.unsubscribe(y.CkL.SHOW_ACTIVITY_DETAILS, ee);
              }
            ),
            [ee],
          ),
          i.useEffect(() => {
            S.ux();
          }, []);
        let et = () => {
            U(M.ag.DIRECTORY);
          },
          en = i.useRef(Date.now()),
          ea = i.useRef(!1),
          ei = i.useRef([]),
          el = i.useCallback((e) => {
            null == ei.current.find((t) => t === e.applicationId) &&
              ei.current.push(e.applicationId);
          }, []);
        return (
          i.useEffect(() => {
            let e = X.current;
            if (null != e) {
              let t = () => (ea.current = !0);
              return (
                null != e && e.addEventListener("scroll", t),
                () => {
                  null != e && e.removeEventListener("scroll", t);
                }
              );
            }
          }, []),
          i.useEffect(
            () => () => {
              let e = {
                  activity_tiles_viewed: ei.current,
                  duration_ms: Date.now() - en.current,
                  scrolled: ea.current,
                },
                a = {
                  channel_id: null == t ? void 0 : t.id,
                  guild_id: n,
                  location: (0, v.k$)(),
                  ...(0, m.hH)(n),
                  ...(0, m.v_)(f.Z.getChannel(null == t ? void 0 : t.id)),
                  ...$,
                  ...e,
                };
              T.default.track(y.rMx.ACTIVITY_SHELF_CLOSE, a);
            },
            [null == t ? void 0 : t.id, $, n],
          ),
          (0, a.jsx)(p.Gt, {
            value: H,
            children: (0, a.jsxs)(d.ModalRoot, {
              className: s()(D.root),
              "aria-label": Z.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
              ...V,
              children: [
                (0, a.jsx)("img", {
                  alt: Z.Z.Messages
                    .EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                  src: L,
                  className: D.shelfTopBackground,
                }),
                (0, a.jsx)("img", {
                  alt: Z.Z.Messages
                    .EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                  src: O,
                  className: D.shelfTopForeground,
                }),
                (0, a.jsxs)(d.ModalHeader, {
                  separator: !1,
                  justify: x.Z.Justify.BETWEEN,
                  className: s()(D.modalHeader),
                  children: [
                    (0, a.jsxs)("div", {
                      className: D.headerTextContainer,
                      children: [
                        (() => {
                          if (F === M.ag.DETAIL_PAGE)
                            return null == K
                              ? null
                              : (0, a.jsxs)("div", {
                                  className: D.activityShelfTitle,
                                  children: [
                                    (0, a.jsx)(d.Heading, {
                                      variant: "heading-xl/extrabold",
                                      children: K.name,
                                    }),
                                    (0, a.jsxs)(d.Clickable, {
                                      className: D.headerBackButton,
                                      onClick: et,
                                      children: [
                                        (0, a.jsx)(d.ChevronSmallLeftIcon, {
                                          size: "md",
                                          color: "currentColor",
                                        }),
                                        (0, a.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          children: Z.Z.Messages.BACK,
                                        }),
                                      ],
                                    }),
                                  ],
                                });
                          return (0, a.jsx)("div", {
                            className: D.activityShelfTitle,
                            children: (0, a.jsx)(d.Heading, {
                              variant: "heading-xl/extrabold",
                              children:
                                Z.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
                            }),
                          });
                        })(),
                        (() => {
                          if (F === M.ag.DIRECTORY)
                            return (0, a.jsx)(d.Text, {
                              variant: "text-sm/normal",
                              children: k
                                ? Z.Z.Messages
                                    .EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE
                                : Z.Z.Messages
                                    .EMBEDDED_ACTIVITIES_SHELF_SUBTITLE,
                            });
                          return null;
                        })(),
                      ],
                    }),
                    (0, a.jsx)(d.ModalCloseButton, {
                      className: D.modalCloseButton,
                      onClick: c,
                    }),
                  ],
                }),
                F === M.ag.DIRECTORY && k ? (0, a.jsx)(A.W, {}) : null,
                (0, a.jsx)("div", { className: D.modalDivider }),
                (0, a.jsxs)(d.Slides, {
                  activeSlide: F,
                  centered: !1,
                  width: R,
                  children: [
                    (0, a.jsx)(d.Slide, {
                      id: M.ag.DIRECTORY,
                      impressionName: o.ImpressionNames.ACTIVITY_SHELF,
                      impressionProperties: {
                        source_section: l.section,
                        impression_group:
                          o.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                      },
                      children: (0, a.jsx)(P, {
                        slide: F,
                        children: (0, a.jsx)(b.Z, {
                          scrollerRef: X,
                          channel: t,
                          guildId: n,
                          locationObject: l,
                          onActivityItemVisible: el,
                          onClose: c,
                        }),
                      }),
                    }),
                    (0, a.jsx)(d.Slide, {
                      id: M.ag.SELECT_CHANNEL,
                      impressionName:
                        o.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                      impressionProperties: {
                        source_section: l.section,
                        impression_group:
                          o.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                        application_id: W,
                      },
                      children: (0, a.jsx)(P, {
                        slide: F,
                        children: (0, a.jsx)(j.Z, {
                          applicationId: W,
                          selectedChannelId: q,
                          setSelectedChannelId: J,
                          guildId: n,
                          enableSelectedTextChannelInvite: C,
                        }),
                      }),
                    }),
                    (0, a.jsx)(d.Slide, {
                      id: M.ag.DETAIL_PAGE,
                      impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
                      impressionProperties: $,
                      children: (0, a.jsx)(P, {
                        slide: F,
                        children:
                          null == W
                            ? null
                            : (0, a.jsx)(N.Z, {
                                applicationId: W,
                                channelId: null == t ? void 0 : t.id,
                                guildId: n,
                                onActivityLaunch: c,
                              }),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", { className: D.modalDivider }),
                (0, a.jsx)(d.ModalFooter, {
                  separator: !1,
                  className: D.footer,
                  children: (() => {
                    switch (F) {
                      case M.ag.DIRECTORY:
                        return (0, a.jsx)(b.d, {});
                      case M.ag.SELECT_CHANNEL:
                        return (0, a.jsx)(j.q, {
                          onBack: et,
                          onClose: c,
                          guildId: n,
                          applicationId: W,
                          locationObject: l,
                          selectedChannelId: q,
                          enableSelectedTextChannelInvite: C,
                        });
                      case M.ag.DETAIL_PAGE:
                      case M.ag.DIRECTORY:
                      default:
                        return null;
                    }
                  })(),
                }),
              ],
            }),
          })
        );
      }
      let P = (e) => {
        let { children: t, slide: n } = e,
          l = (0, r.e7)([E.Z], () => E.Z.getIsEnabled(), []),
          o = i.useContext(g.ZP),
          c = (0, r.e7)([_.Z], () => _.Z.windowSize(o.windowId).height, [
            o.windowId,
          ]);
        return (0, a.jsx)("div", {
          className: s()(D.slideContentOuterContainerSquished, {
            [D.slideContentOuterContainerSquishedWithDev]:
              n === M.ag.DIRECTORY && l,
            [D.slideContentOuterContainerTall]: n === M.ag.DIRECTORY && c > V,
            [D.slideContentOuterContainerTallWithDev]:
              n === M.ag.DIRECTORY && c > V && l,
            [D.slideContentOuterContainerNoMetaTextSquished]:
              n === M.ag.SELECT_CHANNEL,
            [D.slideContentOuterContainerNoMetaTextTall]:
              n === M.ag.SELECT_CHANNEL && c > V,
            [D.slideContentOuterContainerNoMetaTextNoFooterSquished]:
              n === M.ag.DETAIL_PAGE,
            [D.slideContentOuterContainerNoMetaTextNoFooterTall]:
              n === M.ag.DETAIL_PAGE && c > V,
          }),
          children: t,
        });
      };
    },
    421: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(47120);
      var a = n(735250),
        i = n(470079),
        l = n(399606),
        s = n(481060),
        o = n(100527),
        r = n(906732),
        c = n(895924),
        d = n(70097),
        u = n(592125),
        g = n(566620),
        m = n(122613),
        v = n(678173),
        p = n(636508),
        I = n(696068),
        x = n(361213),
        f = n(778569),
        _ = n(182906),
        T = n(412019),
        h = n(431136),
        C = n(226799),
        E = n(689938),
        S = n(806384);
      function N(e) {
        var t;
        let {
            applicationId: n,
            guildId: l,
            channelId: c,
            onActivityLaunch: u,
          } = e,
          { analyticsLocations: m } = (0, r.ZP)(
            o.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS,
          );
        i.useEffect(() => {
          (0, g.w1)({ guildId: l });
        }, [l]);
        let p = (0, f.Z)({ applicationId: null != n ? n : "", size: 2048 }),
          I = (0, v.T)(null != l ? l : null, n);
        if (null == I) return null;
        let _ =
            null != I.activity.activity_preview_video_asset_id
              ? (0, x.Z)(n, I.activity.activity_preview_video_asset_id)
              : null,
          T = C.o[n],
          h =
            (null == T ? void 0 : T.playersSuggestionMin) != null &&
            (null == T ? void 0 : T.playersSuggestionMax) != null
              ? ""
                  .concat(T.playersSuggestionMin, " - ")
                  .concat(T.playersSuggestionMax)
              : void 0;
        return (0, a.jsx)(r.Gt, {
          value: m,
          children: (0, a.jsx)("div", {
            className: S.scrollContainer,
            children: (0, a.jsxs)(s.Scroller, {
              className: S.scroller,
              children: [
                (0, a.jsx)("div", {
                  className: S.launcherOuterContainer,
                  children: (0, a.jsx)(b, {
                    activityItem: I,
                    onLaunch: u,
                    channelId: c,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: S.activityDetailsContainer,
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        null != _
                          ? (0, a.jsx)("div", {
                              className: S.heroVideoContainer,
                              children: (0, a.jsx)(d.Z, {
                                loop: !0,
                                autoPlay: !0,
                                muted: !0,
                                className: S.heroVideo,
                                src: _,
                                poster: p.url,
                              }),
                            })
                          : null,
                        (0, a.jsx)("div", {
                          className: S.detailsTitle,
                          children: (0, a.jsx)(s.Heading, {
                            variant: "heading-xxl/bold",
                            children: I.application.name,
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: S.detailsDetails,
                          children: [
                            null != h
                              ? (0, a.jsxs)("div", {
                                  className: S.detailItem,
                                  children: [
                                    (0, a.jsx)(s.GroupIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                    }),
                                    (0, a.jsx)(s.Text, {
                                      variant: "text-xs/semibold",
                                      className: S.detailItemText,
                                      children:
                                        E.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format(
                                          { nPlayers: h },
                                        ),
                                    }),
                                  ],
                                })
                              : null,
                            (null == T ? void 0 : T.timeSuggestionMinutes) !=
                            null
                              ? (0, a.jsxs)("div", {
                                  className: S.detailItem,
                                  children: [
                                    (0, a.jsx)(s.HourglassIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                    }),
                                    (0, a.jsx)(s.Text, {
                                      variant: "text-xs/semibold",
                                      className: S.detailItemText,
                                      children:
                                        E.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format(
                                          { nMinutes: T.timeSuggestionMinutes },
                                        ),
                                    }),
                                  ],
                                })
                              : null,
                            (0, a.jsxs)("div", {
                              className: S.detailItem,
                              children: [
                                (0, a.jsx)(s.TagsIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                }),
                                (0, a.jsx)(s.Text, {
                                  variant: "text-xs/semibold",
                                  className: S.detailItemText,
                                  children: I.application.tags
                                    .slice(0, 3)
                                    .join(", "),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(s.Heading, {
                      variant: "heading-lg/medium",
                      className: S.detailsDescription,
                      children: I.application.description,
                    }),
                    (0, a.jsx)("div", { className: S.divider }),
                    (0, a.jsx)("div", {
                      className: S.imagesContainer,
                      children: (null !==
                        (t = null == T ? void 0 : T.gameplayImageUrls) &&
                      void 0 !== t
                        ? t
                        : []
                      ).map((e) =>
                        (0, a.jsx)(
                          "img",
                          {
                            src: e,
                            alt: E.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format(
                              { activityName: I.application.name },
                            ),
                            className: S.activityImage,
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function b(e) {
        var t, o;
        let { activityItem: d, onLaunch: g, channelId: v } = e,
          x = (0, f.Z)({ applicationId: d.application.id, size: 2048 }),
          { analyticsLocations: C } = (0, r.ZP)(),
          [N, b] = i.useState(
            null !==
              (t = (0, p.$)({ allowGdmActivityChannelSuggestion: !0 })) &&
              void 0 !== t
              ? t
              : void 0,
          ),
          [j, A] = i.useState(
            null !==
              (o = (0, I.d)({
                guildId: N,
                allowGdmActivityChannelSuggestion: !0,
              })) && void 0 !== o
              ? o
              : void 0,
          ),
          M = (0, l.e7)([u.Z], () => u.Z.getChannel(j), [j]),
          y = (0, p.W)(),
          Z = (0, I.F)(N),
          D = i.useCallback(async () => {
            var e;
            if (null != j)
              await (0, m.Z)({
                targetApplicationId:
                  null == d
                    ? void 0
                    : null === (e = d.application) || void 0 === e
                      ? void 0
                      : e.id,
                channelId: j,
                analyticsLocations: C,
                commandOrigin: c.bB.APPLICATION_LAUNCHER,
              }).then(g);
          }, [d, C, g, j]),
          L = i.useCallback(() => {
            (0, s.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("60133"),
                n.e("79329"),
              ]).then(n.bind(n, 827940));
              return (t) =>
                (0, a.jsx)(e, { activityItem: d, ...t, analyticsLocations: C });
            });
          }, [d, C]),
          O =
            null == M ||
            (null != M.guild_id &&
              !(
                null != N &&
                null != j &&
                y.some((e) => e.value === N) &&
                Z.some((e) => e.value.channel.id === j)
              ) &&
              !0);
        return (0, a.jsxs)("div", {
          className: S.launcherInnerContainer,
          children: [
            (0, a.jsx)(_.Z, {
              applicationName: d.application.name,
              imageBackground: x,
              imageClassName: S.launchImage,
              imageNotFoundClassName: S.brokenLaunchImage,
            }),
            (0, a.jsx)(s.Text, {
              variant: "text-md/medium",
              children: E.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE,
            }),
            null == v
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(s.Select, {
                      placeholder: E.Z.Messages.GUILD_SELECT,
                      optionClassName: S.__invalid_option,
                      options: y,
                      renderOptionValue: (e) => {
                        let t = e.find((e) => e.value === N);
                        return null == t
                          ? null
                          : (0, a.jsx)(h.m, { guildId: t.value });
                      },
                      renderOptionLabel: (e) => {
                        let { value: t } = e;
                        return (0, a.jsx)(h.m, { guildId: t });
                      },
                      isSelected: (e) => e === N,
                      select: (e) => {
                        var t;
                        b(e),
                          A(
                            null !== (t = (0, I.d)({ guildId: e })) &&
                              void 0 !== t
                              ? t
                              : void 0,
                          );
                      },
                      serialize: (e) => e,
                    }),
                    (0, a.jsx)(s.Select, {
                      placeholder:
                        E.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                      optionClassName: S.__invalid_option,
                      options: Z,
                      isSelected: (e) => {
                        let { channel: t } = e;
                        return t.id === j;
                      },
                      select: (e) => {
                        let { channel: t } = e;
                        return A(t.id);
                      },
                      serialize: (e) => {
                        let { channel: t } = e;
                        return t.id;
                      },
                      renderOptionValue: () => {
                        let e = Z.find((e) => e.value.channel.id === j);
                        return null == e
                          ? null
                          : (0, a.jsx)(T.O, {
                              channel: e.value.channel,
                              users: e.value.users,
                            });
                      },
                      renderOptionLabel: (e) => {
                        let {
                          value: { channel: t, users: n },
                        } = e;
                        return (0, a.jsx)(T.O, { channel: t, users: n });
                      },
                    }),
                    (0, a.jsx)(s.Button, {
                      fullWidth: !0,
                      disabled: O,
                      onClick: D,
                      children: E.Z.Messages.START,
                    }),
                    (0, a.jsx)("div", { className: S.divider }),
                    (0, a.jsx)(s.Button, {
                      fullWidth: !0,
                      color: s.Button.Colors.PRIMARY,
                      onClick: L,
                      children: E.Z.Messages.SHARE,
                    }),
                  ],
                })
              : (0, a.jsxs)("div", {
                  className: S.singleRowShareContainer,
                  children: [
                    (0, a.jsx)(s.Button, {
                      fullWidth: !0,
                      disabled: O,
                      onClick: D,
                      children: E.Z.Messages.START,
                    }),
                    (0, a.jsx)(s.Button, {
                      className: S.shareIconButton,
                      color: s.Button.Colors.PRIMARY,
                      onClick: L,
                      children: (0, a.jsx)(s.ArrowAngleLeftUpIcon, {
                        size: "md",
                        color: "currentColor",
                      }),
                    }),
                  ],
                }),
          ],
        });
      }
    },
    895395: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Z;
        },
        d: function () {
          return D;
        },
      }),
        n(47120);
      var a = n(735250),
        i = n(470079),
        l = n(120356),
        s = n.n(l),
        o = n(468194),
        r = n(442837),
        c = n(477690),
        d = n(481060),
        u = n(100527),
        g = n(906732),
        m = n(703656),
        v = n(430824),
        p = n(594174),
        I = n(115130),
        x = n(566620),
        f = n(520599),
        _ = n(127255),
        T = n(880308),
        h = n(451576),
        C = n(439934),
        E = n(701488),
        S = n(981631),
        N = n(689938),
        b = n(876792),
        j = n(932463);
      let A = (0, o.Mg)(
          c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP,
        ),
        M = (0, o.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
        y = (0, o.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
      function Z(e) {
        let {
            channel: t,
            guildId: n,
            locationObject: l,
            onClose: o,
            onActivityItemVisible: c,
            scrollerRef: Z,
          } = e,
          [D, L] = i.useState(0),
          O = (0, _.Z)({ guildId: n, enableFilter: !0 }),
          B = (0, r.e7)([p.default], () => p.default.getCurrentUser()),
          R = (0, r.e7)([v.Z], () => v.Z.getGuild(n), [n]),
          { analyticsLocations: V } = (0, g.ZP)(u.Z.ACTIVITY_DIRECTORY),
          k = (0, h.Z)(null == t ? void 0 : t.id),
          { enableAmazonMusicShelfPoster: P } = f.p.useExperiment(
            { location: "ActivitiesShelf" },
            { autoTrackExposure: !0 },
          ),
          { isDeveloperActivityShelfEnabled: H, filter: F } = (0, r.cj)(
            [I.Z],
            () => ({
              filter: I.Z.getFilter(),
              isDeveloperActivityShelfEnabled: I.Z.getIsEnabled(),
            }),
          );
        if (
          (i.useEffect(() => {
            let e = Z.current;
            if (null != e)
              return (
                e.addEventListener("scroll", t, !1),
                () => {
                  if (null != e) e.removeEventListener("scroll", t, !1);
                }
              );
            function t() {
              var e, t;
              L(
                null !==
                  (t =
                    null === (e = Z.current) || void 0 === e
                      ? void 0
                      : e.scrollTop) && void 0 !== t
                  ? t
                  : 0,
              );
            }
          }, [Z]),
          i.useEffect(() => {
            (k || null != n) && (0, x.w1)({ guildId: n, force: !0 });
          }, [n, k]),
          (0, T.g)(),
          (null == R && !k) || null == B)
        )
          return null;
        let U = O.length > 0;
        function Y(e) {
          o();
        }
        return (0, a.jsx)(g.Gt, {
          value: V,
          children: (0, a.jsxs)("div", {
            className: b.scrollContainer,
            children: [
              U
                ? (0, a.jsx)("div", {
                    className: b.scrollBackgroundContainer,
                    style: { top: -D },
                    children: (0, a.jsx)("div", {
                      className: s()(b.scrollTierBackground),
                      style: {
                        height: ((e) => {
                          let t = 1 === e.length;
                          return A + Math.ceil(e.length / 2) * (t ? y : M);
                        })(O),
                      },
                    }),
                  })
                : null,
              (0, a.jsxs)(d.Scroller, {
                ref: Z,
                className: b.scroller,
                children: [
                  (function () {
                    if (P) {
                      let e =
                        N.Z.Messages
                          .EMBEDDED_ACTIVITIES_AMAZON_MUSIC_PROMO_BANNER_ALT;
                      return (0, a.jsxs)(d.Clickable, {
                        className: b.posterClickable,
                        "aria-label": e,
                        onClick: () => {
                          var e;
                          (e = E.Fu),
                            o(),
                            (0, m.uL)(S.Z5c.ACTIVITY_DETAILS(E.Fu), {
                              sourceLocationStack: V,
                            });
                        },
                        children: [
                          (0, a.jsx)("div", {
                            className: b.poster,
                            children: (0, a.jsx)("img", {
                              className: b.posterBackground,
                              src: j,
                              alt: e,
                            }),
                          }),
                          (0, a.jsx)("div", { className: b.posterDivider }),
                        ],
                      });
                    }
                    return null;
                  })(),
                  U
                    ? (0, a.jsx)("div", {
                        className: b.scrollSection,
                        children: (0, a.jsx)("div", {
                          className: s()(b.shelf),
                          children: O.map((e) =>
                            (0, a.jsx)(
                              C.Z,
                              {
                                large: 1 === O.length,
                                activityItem: e,
                                channel: t,
                                guildId: n,
                                locationObject: l,
                                onActivityItemVisible: c,
                                onActivityItemSelected: () => {
                                  var t;
                                  (t = e.application.id), o();
                                },
                              },
                              "activity-shelf-item-".concat(e.application.id),
                            ),
                          ),
                        }),
                      })
                    : H && F.length > 0
                      ? (0, a.jsx)(d.Text, {
                          variant: "text-md/normal",
                          className: b.filterError,
                          children:
                            N.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format(
                              { filter: F },
                            ),
                        })
                      : (0, a.jsx)("div", {
                          className: b.spinnerContainer,
                          children: (0, a.jsx)(d.Spinner, {}),
                        }),
                ],
              }),
            ],
          }),
        });
      }
      function D() {
        return (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: N.Z.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({
            surveyURL: E.Es,
          }),
        });
      }
    },
    49978: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return D;
        },
        q: function () {
          return L;
        },
      }),
        n(47120);
      var a = n(735250),
        i = n(470079),
        l = n(442837),
        s = n(481060),
        o = n(153867),
        r = n(607070),
        c = n(100527),
        d = n(906732),
        u = n(895924),
        g = n(264165),
        m = n(70097),
        v = n(740492),
        p = n(592125),
        I = n(430824),
        x = n(496675),
        f = n(944486),
        _ = n(566620),
        T = n(317381),
        h = n(122613),
        C = n(678173),
        E = n(696068),
        S = n(361213),
        N = n(778569),
        b = n(412019),
        j = n(981631),
        A = n(689938),
        M = n(617010);
      function y(e) {
        return (0, l.e7)(
          [I.Z, x.Z],
          () => {
            let t = I.Z.getGuild(e);
            return null != t && x.Z.can(j.Plq.CREATE_INSTANT_INVITE, t);
          },
          [e],
        );
      }
      let Z = ["embedded_background"];
      function D(e) {
        var t, n;
        let {
            applicationId: c,
            guildId: d,
            selectedChannelId: u,
            setSelectedChannelId: x,
            enableSelectedTextChannelInvite: T,
          } = e,
          h = (0, l.e7)([r.Z], () => r.Z.useReducedMotion),
          j = (0, C.T)(null != d ? d : null, null != c ? c : null),
          [D, L] = i.useState(
            T && !v.ZP.disableInviteWithTextChannelActivityLaunch,
          ),
          O = (0, E.F)(d);
        i.useEffect(() => {
          var e;
          _.w1({ guildId: d }),
            x(
              null !== (e = (0, E.d)({ guildId: d })) && void 0 !== e
                ? e
                : void 0,
            );
        }, [d, x]);
        let B = null == j ? void 0 : j.activity.activity_preview_video_asset_id,
          R =
            null != B
              ? (0, S.Z)(
                  null !== (t = null == j ? void 0 : j.application.id) &&
                    void 0 !== t
                    ? t
                    : "",
                  B,
                )
              : null,
          { url: V } = (0, N.Z)({
            applicationId:
              null !== (n = null == j ? void 0 : j.application.id) &&
              void 0 !== n
                ? n
                : "",
            size: 1024,
            names: Z,
          }),
          k = (0, l.e7)([I.Z], () => I.Z.getGuild(d)),
          P = (0, l.e7)([p.Z, f.Z], () => p.Z.getChannel(f.Z.getChannelId())),
          H = y(null != d ? d : void 0);
        if ((null == j ? void 0 : j.application) == null || null == k)
          return null;
        let F =
          (null == P ? void 0 : P.name) == null ||
          (null == P ? void 0 : P.name) === ""
            ? A.Z.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME
            : "#".concat(P.name);
        return (0, a.jsxs)(s.Scroller, {
          className: M.scroll,
          children: [
            null != R || null != V
              ? (0, a.jsx)(g.Z, {
                  aspectRatio: 16 / 9,
                  className: M.imageContainer,
                  children: (0, a.jsx)(m.Z, {
                    className: M.video,
                    src: R,
                    loop: !0,
                    autoPlay: !h,
                    poster: V,
                    muted: !0,
                  }),
                })
              : null,
            (0, a.jsxs)("div", {
              className: M.descriptionArea,
              children: [
                (0, a.jsx)(s.Heading, {
                  variant: "heading-xl/semibold",
                  children: null == j ? void 0 : j.application.name,
                }),
                (0, a.jsx)(s.Text, {
                  className: M.descriptionAreaSubtext,
                  variant: "text-md/normal",
                  children: null == j ? void 0 : j.application.description,
                }),
              ],
            }),
            (0, a.jsx)(s.Select, {
              placeholder:
                A.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
              optionClassName: M.__invalid_option,
              options: O,
              isSelected: (e) => {
                let { channel: t } = e;
                return t.id === u;
              },
              select: (e) => {
                let { channel: t } = e;
                return x(t.id);
              },
              serialize: (e) => {
                let { channel: t } = e;
                return t.id;
              },
              renderOptionValue: () => {
                let e = O.find((e) => e.value.channel.id === u);
                return null == e
                  ? null
                  : (0, a.jsx)(b.O, {
                      channel: e.value.channel,
                      users: e.value.users,
                    });
              },
              renderOptionLabel: (e) => {
                let {
                  value: { channel: t, users: n },
                } = e;
                return (0, a.jsx)(b.O, { channel: t, users: n });
              },
            }),
            H && T
              ? (0, a.jsxs)(s.Clickable, {
                  className: M.checkboxContainer,
                  onClick: () => {
                    let e = !D;
                    o.ZP.updatedUnsyncedSettings({
                      disableInviteWithTextChannelActivityLaunch: !e,
                    }),
                      L(e);
                  },
                  children: [
                    (0, a.jsx)(s.Checkbox, {
                      type: s.Checkbox.Types.INVERTED,
                      className: M.checkbox,
                      value: D,
                      displayOnly: !0,
                    }),
                    (0, a.jsxs)(s.Text, {
                      variant: "text-sm/normal",
                      children: [
                        A.Z.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE,
                        " ",
                        (0, a.jsx)("strong", { children: F }),
                      ],
                    }),
                  ],
                })
              : null,
          ],
        });
      }
      function L(e) {
        let {
            applicationId: t,
            guildId: n,
            locationObject: i,
            onBack: o,
            onClose: r,
            selectedChannelId: g,
            enableSelectedTextChannelInvite: m,
          } = e,
          { analyticsLocations: I } = (0, d.ZP)(c.Z.ACTIVITY_CHANNEL_SELECTOR),
          x = (0, C.T)(null != n ? n : null, null != t ? t : null),
          E = (0, l.e7)([p.Z, f.Z], () => p.Z.getChannel(f.Z.getChannelId())),
          S = (0, l.e7)(
            [v.ZP],
            () => m && !v.ZP.disableInviteWithTextChannelActivityLaunch,
          ),
          N = (0, l.e7)(
            [T.ZP],
            () =>
              null != g &&
              "" !== g &&
              T.ZP.getEmbeddedActivitiesForChannel(g).some(
                (e) => e.applicationId === t,
              ),
          ),
          b = y(n),
          Z = async () => {
            var e;
            if (null != g && "" !== g && null != x && null != n && "" !== n)
              (await (0, h.Z)({
                targetApplicationId:
                  null === (e = x.application) || void 0 === e ? void 0 : e.id,
                locationObject: i,
                channelId: g,
                analyticsLocations: I,
                commandOrigin: u.bB.APPLICATION_LAUNCHER,
              })) &&
                (r(),
                null != E &&
                  b &&
                  S &&
                  (await _.sN({
                    activityChannelId: g,
                    invitedChannelId: E.id,
                    applicationId: x.application.id,
                    location: j.Sbl.ACTIVITY_SHELF,
                  })));
          };
        return (0, a.jsx)(d.Gt, {
          value: I,
          children: (0, a.jsxs)("div", {
            className: M.footerContainer,
            children: [
              (0, a.jsx)(s.Clickable, {
                onClick: o,
                className: M.backToBrowse,
                children: (0, a.jsx)(s.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children: A.Z.Messages.BACK,
                }),
              }),
              null == g
                ? (0, a.jsx)("div", {})
                : (0, a.jsx)(s.Button, {
                    className: M.launchButton,
                    onClick: Z,
                    color: N ? s.Button.Colors.GREEN : void 0,
                    fullWidth: !0,
                    children: N
                      ? A.Z.Messages.EMBEDDED_ACTIVITIES_JOIN
                      : A.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH,
                  }),
            ],
          }),
        });
      }
    },
    226799: function (e, t, n) {
      n.d(t, {
        o: function () {
          return V;
        },
      });
      var a = n(701488),
        i = n(114954),
        l = n(956089),
        s = n(407407),
        o = n(942006),
        r = n(836479),
        c = n(779337),
        d = n(694111),
        u = n(442405),
        g = n(974379),
        m = n(873444),
        v = n(216989),
        p = n(188225),
        I = n(337664),
        x = n(585681),
        f = n(288021),
        _ = n(114089),
        T = n(8361),
        h = n(655297),
        C = n(616297),
        E = n(213860),
        S = n(747604),
        N = n(237931),
        b = n(992910),
        j = n(652120),
        A = n(824046),
        M = n(943615),
        y = n(669001),
        Z = n(248313),
        D = n(928119),
        L = n(497664),
        O = n(685358),
        B = n(33218),
        R = n(975570);
      let V = {
        [a.MO]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 1,
          gameplayImageUrls: [I, x],
        },
        [a.js]: {
          playersSuggestionMin: 4,
          playersSuggestionMax: 12,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [v, p],
        },
        [a.mI]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [],
        },
        [a.GR]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [L, O],
        },
        [a.PD]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [E, S],
        },
        [a.jT]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 2,
          gameplayImageUrls: [B, R],
        },
        [a.am]: {
          playersSuggestionMin: 3,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [h, C],
        },
        [a.Ec]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [s, o],
        },
        [a.l4]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [r, c],
        },
        [a.fE]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [g, m],
        },
        [a.IF]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 5,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [i, l],
        },
        [a.Zc]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 7,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [j, A],
        },
        [a.Gv]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [N, b],
        },
        [a.Cb]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [Z, D],
        },
        [a.qG]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 4,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [d, u],
        },
        [a.f9]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [M, y],
        },
        [a.In]: { gameplayImageUrls: [f, _, T] },
      };
    },
    412019: function (e, t, n) {
      n.d(t, {
        O: function () {
          return u;
        },
      });
      var a = n(735250);
      n(470079);
      var i = n(481060),
        l = n(447003),
        s = n(687352),
        o = n(237583),
        r = n(823379),
        c = n(619915),
        d = n(179665);
      function u(e) {
        let { channel: t, users: n } = e,
          u = (0, c.ZP)(t);
        return (0, a.jsxs)("div", {
          className: d.channelInfo,
          children: [
            (0, l.Z)(t)
              ? (0, a.jsx)(i.VoiceLockIcon, {
                  size: "md",
                  color: "currentColor",
                  className: d.speakerIcon,
                })
              : (0, a.jsx)(i.VoiceNormalIcon, {
                  size: "md",
                  color: "currentColor",
                  className: d.speakerIcon,
                }),
            (0, a.jsx)("div", { className: d.channelName, children: t.name }),
            u.length > 0
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", { className: d.divider }),
                    (0, a.jsx)(s.Z, {
                      embeddedApps: u,
                      className: d.channelItemActivities,
                    }),
                    (0, a.jsx)("div", {
                      className: d.channelActivitiesText,
                      children: u
                        .map((e) => {
                          var t;
                          return null === (t = e.application) || void 0 === t
                            ? void 0
                            : t.name;
                        })
                        .filter(r.lm)
                        .join(", "),
                    }),
                  ],
                })
              : null,
            (0, a.jsx)("div", {
              className: d.voiceUserContainer,
              children: (0, a.jsx)(o.Z, { users: n, max: 4 }),
            }),
          ],
        });
      }
    },
    431136: function (e, t, n) {
      n.d(t, {
        m: function () {
          return d;
        },
      });
      var a = n(735250);
      n(470079);
      var i = n(468194),
        l = n(399606),
        s = n(481060),
        o = n(430824),
        r = n(768581),
        c = n(107455);
      function d(e) {
        let { guildId: t } = e,
          n = (0, l.e7)([o.Z], () => o.Z.getGuild(t));
        if (null == n) return null;
        let d = null;
        if (null != n.icon) {
          let e = r.ZP.getGuildIconURL({ id: n.id, icon: n.icon, size: 40 });
          d = (0, a.jsx)(s.Avatar, {
            src: e,
            "aria-label": n.name,
            size: s.AvatarSizes.SIZE_24,
          });
        } else {
          let e = (0, i.Zg)(n.name).slice(0, 2);
          d = (0, a.jsx)(s.Text, {
            variant: "text-xs/semibold",
            className: c.acronym,
            "aria-hidden": !0,
            children: e,
          });
        }
        return (0, a.jsxs)("div", {
          className: c.container,
          children: [
            d,
            (0, a.jsx)(s.Text, {
              variant: "text-md/semibold",
              className: c.text,
              children: n.name,
            }),
          ],
        });
      }
    },
    264165: function (e, t, n) {
      var a = n(735250);
      n(470079);
      var i = n(120356),
        l = n.n(i),
        s = n(705671);
      t.Z = (e) => {
        let { aspectRatio: t, style: n, className: i, children: o } = e;
        return (0, a.jsx)("div", {
          className: l()(s.outer, i),
          style: { paddingTop: "".concat((1 / t) * 100, "%"), ...n },
          children: (0, a.jsx)("div", { className: s.inner, children: o }),
        });
      };
    },
    687352: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(735250);
      n(470079);
      var i = n(120356),
        l = n.n(i),
        s = n(481060),
        o = n(925329),
        r = n(184902);
      function c(e) {
        let { className: t, embeddedApps: n, muted: i } = e;
        if (n.length <= 0) return null;
        if (1 === n.length)
          return (0, a.jsx)("div", {
            className: l()(r.container, t, i && r.modeMuted),
            children: (0, a.jsx)(o.Z, {
              game: n[0].application,
              className: r.icon20px,
            }),
          });
        {
          let e = n.length - 1;
          return (0, a.jsxs)("div", {
            className: l()(r.container, t, i && r.modeMuted),
            children: [
              (0, a.jsx)(o.Z, {
                game: n[0].application,
                className: r.icon20px,
              }),
              2 === n.length
                ? (0, a.jsx)(o.Z, {
                    game: n[1].application,
                    className: r.icon20px,
                  })
                : (0, a.jsx)(s.Text, {
                    className: r.overflow,
                    variant: "text-xs/bold",
                    color: "interactive-active",
                    children: "+".concat(e),
                  }),
            ],
          });
        }
      }
    },
    637389: function (e, t, n) {
      e.exports = {
        activityOverlay: "activityOverlay_c17b55",
        actionButton: "actionButton_c17b55",
      };
    },
    661337: function (e, t, n) {
      e.exports = {
        activityNewBadge: "activityNewBadge_b4a8cd",
        activityUpdatedBadge: "activityUpdatedBadge_b4a8cd",
        tooltip: "tooltip_b4a8cd",
      };
    },
    325428: function (e, t, n) {
      e.exports = {
        activityItem: "activityItem_d46b95",
        large: "large_d46b95",
        disabled: "disabled_d46b95",
        activityImage: "activityImage_d46b95",
        brokenImageIconWrapper:
          "brokenImageIconWrapper_d46b95 activityImage_d46b95",
        activityVideo: "activityVideo_d46b95 activityImage_d46b95",
        videoFadeOut: "videoFadeOut_d46b95",
        activityImageContainer: "activityImageContainer_d46b95",
        overlayBadge: "overlayBadge_d46b95",
        devShelfBadge: "devShelfBadge_d46b95",
        devShelfIcon: "devShelfIcon_d46b95",
        badgeContainer: "badgeContainer_d46b95",
        activityTextContainer: "activityTextContainer_d46b95",
        activityTitleText: "activityTitleText_d46b95",
        activitySubtitleText: "activitySubtitleText_d46b95",
        usersArePlayingText: "usersArePlayingText_d46b95",
        activityMaxParticipantsLarge: "activityMaxParticipantsLarge_d46b95",
        activityTagsContainer: "activityTagsContainer_d46b95",
        activityName: "activityName_d46b95",
        activityTag: "activityTag_d46b95",
        icon: "icon_d46b95",
        staffBadge: "staffBadge_d46b95",
      };
    },
    226786: function (e, t, n) {
      e.exports = {
        root: "root_cd3d24",
        footer: "footer_cd3d24",
        shelfTopBackground: "shelfTopBackground_cd3d24",
        shelfTopForeground:
          "shelfTopForeground_cd3d24 shelfTopBackground_cd3d24",
        modalHeader: "modalHeader_cd3d24",
        headerBackButton: "headerBackButton_cd3d24",
        headerTextContainer: "headerTextContainer_cd3d24",
        activityShelfTitle: "activityShelfTitle_cd3d24",
        modalCloseButton: "modalCloseButton_cd3d24",
        modalDivider: "modalDivider_cd3d24",
        slideContentOuterContainerSquished:
          "slideContentOuterContainerSquished_cd3d24",
        slideContentOuterContainerSquishedWithDev:
          "slideContentOuterContainerSquishedWithDev_cd3d24",
        slideContentOuterContainerTall: "slideContentOuterContainerTall_cd3d24",
        slideContentOuterContainerTallWithDev:
          "slideContentOuterContainerTallWithDev_cd3d24",
        slideContentOuterContainerNoMetaTextSquished:
          "slideContentOuterContainerNoMetaTextSquished_cd3d24",
        slideContentOuterContainerNoMetaTextTall:
          "slideContentOuterContainerNoMetaTextTall_cd3d24",
        slideContentOuterContainerNoMetaTextNoFooterSquished:
          "slideContentOuterContainerNoMetaTextNoFooterSquished_cd3d24",
        slideContentOuterContainerNoMetaTextNoFooterTall:
          "slideContentOuterContainerNoMetaTextNoFooterTall_cd3d24",
      };
    },
    806384: function (e, t, n) {
      e.exports = {
        scrollContainer: "scrollContainer_a9c32f",
        scroller: "scroller_a9c32f",
        activityDetailsContainer: "activityDetailsContainer_a9c32f",
        heroVideoContainer: "heroVideoContainer_a9c32f",
        heroVideo: "heroVideo_a9c32f",
        detailsTitle: "detailsTitle_a9c32f",
        detailsDetails: "detailsDetails_a9c32f",
        detailItem: "detailItem_a9c32f",
        detailItemText: "detailItemText_a9c32f",
        detailsDescription: "detailsDescription_a9c32f",
        divider: "divider_a9c32f",
        imagesContainer: "imagesContainer_a9c32f",
        activityImage: "activityImage_a9c32f",
        launcherOuterContainer: "launcherOuterContainer_a9c32f",
        launcherInnerContainer: "launcherInnerContainer_a9c32f",
        launchImage: "launchImage_a9c32f",
        brokenLaunchImage: "brokenLaunchImage_a9c32f",
        singleRowShareContainer: "singleRowShareContainer_a9c32f",
        shareIconButton: "shareIconButton_a9c32f",
      };
    },
    876792: function (e, t, n) {
      e.exports = {
        scrollContainer: "scrollContainer_f09e45",
        scroller: "scroller_f09e45",
        scrollSection: "scrollSection_f09e45",
        shelf: "shelf_f09e45",
        scrollBackgroundContainer: "scrollBackgroundContainer_f09e45",
        scrollTierBackground: "scrollTierBackground_f09e45",
        spinnerContainer: "spinnerContainer_f09e45",
        filterError: "filterError_f09e45",
        poster: "poster_f09e45",
        posterClickable: "posterClickable_f09e45",
        posterBackground: "posterBackground_f09e45",
        posterDivider: "posterDivider_f09e45",
      };
    },
    617010: function (e, t, n) {
      e.exports = {
        scroll: "scroll_e3b136",
        imageContainer: "imageContainer_e3b136",
        video: "video_e3b136",
        descriptionArea: "descriptionArea_e3b136",
        descriptionAreaSubtext: "descriptionAreaSubtext_e3b136",
        checkboxContainer: "checkboxContainer_e3b136",
        checkbox: "checkbox_e3b136",
        footerContainer: "footerContainer_e3b136",
        backToBrowse: "backToBrowse_e3b136",
        launchButton: "launchButton_e3b136",
      };
    },
    464243: function (e, t, n) {
      e.exports = {
        container: "container_c4a3bb",
        searchBar: "searchBar_c4a3bb",
      };
    },
    179665: function (e, t, n) {
      e.exports = {
        channelInfo: "channelInfo_c573a1",
        speakerIcon: "speakerIcon_c573a1",
        divider: "divider_c573a1",
        channelName: "channelName_c573a1",
        channelItemActivities: "channelItemActivities_c573a1",
        channelActivitiesText:
          "channelActivitiesText_c573a1 channelName_c573a1",
        voiceUserContainer: "voiceUserContainer_c573a1",
      };
    },
    107455: function (e, t, n) {
      e.exports = {
        container: "container_e2cb96",
        acronym: "acronym_e2cb96",
        text: "text_e2cb96",
      };
    },
    705671: function (e, t, n) {
      e.exports = { outer: "outer_b15852", inner: "inner_b15852" };
    },
    184902: function (e, t, n) {
      e.exports = {
        icon20px: "icon20px_e06fdc",
        container: "container_e06fdc",
        overflow: "overflow_e06fdc",
        modeMuted: "modeMuted_e06fdc",
      };
    },
  },
]);
//# sourceMappingURL=f1ddb252125e1f59e074.js.map
