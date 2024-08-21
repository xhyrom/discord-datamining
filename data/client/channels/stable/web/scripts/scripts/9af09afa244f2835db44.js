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
    969728: function (e) {
      e.exports = "/assets/368a2969db80ee62ac23.svg";
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
        r = n(914010),
        o = n(771845);
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
          return null !== (e = r.Z.getLastSelectedGuildId()) && void 0 !== e
            ? e
            : o.ZP.getFlattenedGuildIds()[0];
      }
      function d() {
        let e = (0, i.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds());
        return a.useMemo(() => e.map((e) => ({ label: e, value: e })), [e]);
      }
    },
    696068: function (e, t, n) {
      n.d(t, {
        F: function () {
          return I;
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
        r = n(496675),
        o = n(944486),
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
        let p = o.Z.getVoiceChannelId(),
          f = i.Z.getChannel(p);
        if (null != f && (null != f.guild_id || m)) return f.id;
        let I = [];
        for (let e of Object.values(l.Z.getCategories(g)))
          for (let t of e)
            v(t.channel, i.Z, s.Z, r.Z, c.Z) &&
              I.push({
                channel: t.channel,
                users: d.ZP.getVoiceStatesForChannel(t.channel).filter(u.lm),
              });
        return null !==
          (a =
            null ===
              (n = I.sort((e, t) =>
                e.users.length > t.users.length ? -1 : 1,
              )[0]) || void 0 === n
              ? void 0
              : null === (t = n.channel) || void 0 === t
                ? void 0
                : t.id) && void 0 !== a
          ? a
          : null;
      }
      function f(e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++)
          if (e[n].value.channel.id !== t[n].value.channel.id) return !1;
        return !0;
      }
      function I(e) {
        return (0, a.e7)(
          [l.Z, i.Z, s.Z, r.Z, c.Z, d.ZP],
          () => {
            if (null == e) return [];
            let t = [];
            return (
              Object.values(l.Z.getCategories(e)).forEach((e) => {
                e.forEach((e) => {
                  let { channel: n } = e;
                  v(n, i.Z, s.Z, r.Z, c.Z) && t.push(n);
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
          f,
        );
      }
    },
    147865: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return i;
        },
        lY: function () {
          return l;
        },
      });
      var a = n(689938);
      function i(e) {
        return e > 0
          ? a.Z.Messages.EMBEDDED_ACTIVITIES_MAX_PARTICIPANTS.format({
              count: e,
            })
          : a.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS;
      }
      function l(e) {
        return e > 0
          ? "1-".concat(e)
          : a.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS_SHORT;
      }
    },
    778569: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120);
      var a = n(470079),
        i = n(81063);
      let l = ["embedded_cover", "embedded_background"];
      function s(e) {
        let { applicationId: t, size: n, names: s = l } = e,
          [r, o] = a.useState(null),
          [c, d] = a.useState(!0),
          u = (0, i.getAssetImage)(t, r, n);
        return (
          a.useEffect(() => {
            (0, i.getAssets)(t).then((e) => {
              for (let [t, n] of (d(!1), Object.entries(e)))
                if (null != n && "" !== n.id && s.includes(n.name)) {
                  o(n.id);
                  return;
                }
            });
          }, [t]),
          { url: u, state: c ? "loading" : null != u ? "fetched" : "not-found" }
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
          return o;
        },
      });
      var a = n(735250);
      n(470079);
      var i = n(481060),
        l = n(542094),
        s = n(689938),
        r = n(637389);
      function o(e) {
        let { action: t, onClick: n } = e,
          o =
            t === l.JS.JOIN
              ? s.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
              : s.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
          c = t === l.JS.JOIN ? i.Button.Colors.PRIMARY : i.Button.Colors.RED;
        return (0, a.jsx)("div", {
          className: r.activityOverlay,
          children: (0, a.jsx)(i.Button, {
            className: r.actionButton,
            onClick: n,
            size: i.Button.Sizes.MEDIUM,
            color: c,
            children: o,
          }),
        });
      }
    },
    182906: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        n(47120);
      var a = n(735250),
        i = n(470079),
        l = n(558522),
        s = n(175778);
      function r(e) {
        let {
            imageBackground: t,
            applicationName: n,
            imageClassName: r,
            imageNotFoundClassName: o,
          } = e,
          [c, d] = i.useState(!1);
        return "not-found" === t.state || c
          ? (0, a.jsx)("div", {
              className: o,
              children: (0, a.jsx)(l.Z, { className: s.brokenImageIcon }),
            })
          : "loading" === t.state
            ? null
            : (0, a.jsx)("img", {
                alt: n,
                className: r,
                src: t.url,
                onError: () => d(!0),
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
        r = n(689938),
        o = n(661337);
      function c(e) {
        let {
            name: t,
            labelType: n,
            collapsed: c = !1,
            showTooltip: d = !1,
          } = e,
          u = n === s.ww.NEW ? r.Z.Messages.NEW : r.Z.Messages.UPDATED,
          g = n === s.ww.NEW ? o.activityNewBadge : o.activityUpdatedBadge,
          [m, v] = i.useState(c ? "" : u);
        if (
          (i.useEffect(() => {
            c
              ? v("")
              : n === s.ww.NEW
                ? v(r.Z.Messages.NEW)
                : n === s.ww.UPDATED && v(r.Z.Messages.UPDATED);
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
        let f = r.Z.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
          activity: t,
        });
        return (0, a.jsx)(l.TooltipContainer, {
          text: f,
          tooltipContentClassName: o.tooltip,
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
        r = n(442837),
        o = n(481060),
        c = n(239091),
        d = n(434650),
        u = n(213459),
        g = n(70097),
        m = n(695346),
        v = n(594174),
        p = n(695103),
        f = n(880448),
        I = n(823379),
        x = n(5192),
        _ = n(624138),
        h = n(115130),
        C = n(147865),
        T = n(542094),
        E = n(665811),
        S = n(182906),
        b = n(556505),
        N = n(513202),
        j = n(884338),
        M = n(823531),
        A = n(689938),
        Z = n(325428),
        y = n(969728);
      function D(e) {
        let { value: t, icon: n } = e;
        return (0, a.jsxs)(o.Text, {
          className: Z.activityTag,
          color: "interactive-normal",
          variant: "text-xs/semibold",
          children: [
            (0, I.lm)(n) ? (0, a.jsx)(n, { className: Z.icon }) : null,
            t,
          ],
        });
      }
      function L(e) {
        let {
            activity: t,
            application: n,
            channel: i,
            guildId: l,
            large: s = !1,
          } = e,
          c = (0, r.Wu)([v.default], () => {
            var e;
            return Array.from(
              null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e
                ? e
                : [],
            )
              .map((e) => {
                let [t] = e;
                return v.default.getUser(t);
              })
              .filter(I.lm);
          }),
          d = x.ZP.getName(
            l,
            null == i ? void 0 : i.id,
            null == c ? void 0 : c[0],
          );
        if (((d = (0, _.aF)(d, 15)), null == t || 0 === c.length)) {
          var u, g;
          let e = "".concat(
            (0, C.ZP)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0),
          );
          return (
            s && (e = null !== (g = n.description) && void 0 !== g ? g : ""),
            (0, a.jsx)(o.Text, {
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
            (0, a.jsx)(o.Text, {
              className: Z.usersArePlayingText,
              variant: "text-xs/normal",
              children:
                c.length > 1
                  ? A.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format(
                      { username: d, count: c.length - 1 },
                    )
                  : A.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
                      username: d,
                    }),
            }),
            (0, a.jsx)(j.Z, {
              size: s ? j.u.SIZE_24 : j.u.SIZE_16,
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
            guildId: v,
            locationObject: I,
            onActivityItemVisible: x,
            onActivityItemSelected: _,
            large: j = !1,
          } = e,
          {
            imageBackground: B,
            videoUrl: O,
            activityAction: V,
            joinableEmbeddedApp: R,
            onActivityItemSelected: k,
            labelType: P,
            staffReleasePhase: H,
          } = (0, T.ZP)({
            activityItem: n,
            channel: l,
            guildId: v,
            locationObject: I,
            onActivityItemVisible: x,
            onActivityItemSelected: _,
            embeddedActivitiesManager: N.Z,
          }),
          F = (0, r.e7)(
            [h.Z, p.Z],
            () =>
              h.Z.inDevModeForApplication(n.application.id) ||
              p.Z.inTestModeForApplication(n.application.id),
            [n.application.id],
          ),
          { application: U } = n,
          w = i.useCallback(
            (e) =>
              e &&
              (null == x ? void 0 : x({ applicationId: n.application.id })),
            [n.application.id, x],
          ),
          Y = (0, d.O)(w, 0.8, !0),
          [G, W] = i.useState(!1),
          [z, q] = i.useState(G);
        i.useEffect(() => {
          G && q(!0);
        }, [G]);
        let J = () => W(!0),
          K = () => W(!1),
          X = m.Sb.useSetting(),
          $ = i.useCallback(() => {
            null == k || k(),
              u.ZP.maybeQueryForInstallLessApps(
                U.id,
                null == l ? void 0 : l.id,
              );
          }, [U.id, null == l ? void 0 : l.id, k]);
        return (0, a.jsxs)(o.Clickable, {
          onClick: V === T.JS.START ? $ : void 0,
          onContextMenu: X
            ? (e) => {
                (0, c.vq)(e, (e) => (0, a.jsx)(M.Z, { application: U, ...e }));
              }
            : void 0,
          className: s()(Z.activityItem, {
            [Z.large]: !0 === j,
            [Z.disabled]: V !== T.JS.START,
          }),
          children: [
            (0, a.jsxs)("div", {
              ref: Y,
              className: s()(Z.activityImageContainer, { [Z.large]: !0 === j }),
              onMouseEnter: J,
              onFocus: J,
              onMouseLeave: K,
              onBlur: K,
              children: [
                (0, a.jsx)(S.Z, {
                  imageBackground: B,
                  applicationName: U.name,
                  imageClassName: s()(Z.activityImage, { [Z.large]: !0 === j }),
                  imageNotFoundClassName: Z.brokenImageIconWrapper,
                }),
                null != O && z && V === T.JS.START
                  ? (0, a.jsx)("div", {
                      className: s()(Z.activityVideo, { [Z.videoFadeOut]: !G }),
                      onAnimationEnd: () => (G ? null : q(!1)),
                      children: (0, a.jsx)(g.Z, {
                        className: Z.activityVideo,
                        src: O,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                      }),
                    })
                  : null,
                V !== T.JS.START
                  ? (0, a.jsx)(E.U, { action: V, onClick: $ })
                  : null,
                (0, a.jsx)("div", {
                  className: Z.overlayBadge,
                  children: (0, a.jsx)("div", {
                    className: Z.badgeContainer,
                    children: (0, a.jsx)(b.Z, { name: U.name, labelType: P }),
                  }),
                }),
                F
                  ? (0, a.jsx)(o.Tooltip, {
                      text: A.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
                      children: (e) =>
                        (0, a.jsx)("div", {
                          className: Z.devShelfBadge,
                          ...e,
                          children: (0, a.jsx)(f.Z, {
                            className: Z.devShelfIcon,
                          }),
                        }),
                    })
                  : null,
              ],
            }),
            (0, a.jsxs)("div", {
              className: s()(Z.activityTextContainer, { [Z.large]: j }),
              children: [
                j
                  ? (0, a.jsx)(o.Text, {
                      className: Z.activityMaxParticipantsLarge,
                      variant: "text-xs/normal",
                      color: "interactive-normal",
                      children: (0, C.ZP)(
                        null !== (t = U.maxParticipants) && void 0 !== t
                          ? t
                          : 0,
                      ),
                    })
                  : null,
                (0, a.jsxs)("div", {
                  className: Z.activityName,
                  children: [
                    (0, a.jsx)(o.Heading, {
                      className: Z.activityTitleText,
                      variant: "heading-md/semibold",
                      color: "interactive-active",
                      children: U.name,
                    }),
                    null != H
                      ? (0, a.jsx)(o.Tooltip, {
                          text: H,
                          children: (e) =>
                            (0, a.jsx)("img", {
                              className: Z.staffBadge,
                              alt: H,
                              src: y,
                              ...e,
                            }),
                        })
                      : null,
                  ],
                }),
                (0, a.jsx)(L, {
                  activity: null == R ? void 0 : R.embeddedActivity,
                  application: U,
                  channel: l,
                  guildId: v,
                  large: j,
                }),
                (0, a.jsx)("div", {
                  className: Z.activityTagsContainer,
                  children: U.tags
                    .slice(0, 3)
                    .map((e) =>
                      (0, a.jsx)(
                        D,
                        { value: e },
                        "activity-tag-".concat(U.id, "-").concat(e),
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
        r = n(990547),
        o = n(442837),
        c = n(477690),
        d = n(481060),
        u = n(110924),
        g = n(40851),
        m = n(367907),
        v = n(565384),
        p = n(906732),
        f = n(835473),
        I = n(600164),
        x = n(592125),
        _ = n(451478),
        h = n(626135),
        C = n(585483),
        T = n(624138),
        E = n(115130),
        S = n(566620),
        b = n(421),
        N = n(895395),
        j = n(49978),
        M = n(427996),
        A = n(701488),
        Z = n(981631),
        y = n(689938),
        D = n(226786),
        L = n(361205),
        B = n(812320);
      let O = (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
        V = (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
        R =
          (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) +
          O +
          (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);
      function k(e) {
        let {
            channel: t,
            guildId: n,
            locationObject: l,
            onClose: c,
            initialSelectedApplicationId: g,
            initialSlide: _ = A.ag.DIRECTORY,
            enableSelectedTextChannelInvite: T,
            analyticsLocations: O,
            ...R
          } = e,
          k = (0, o.e7)([E.Z], () => E.Z.getIsEnabled(), []),
          { analyticsLocations: H } = (0, p.ZP)(O),
          [F, U] = i.useState(_),
          w = (0, u.Z)(F),
          [Y, G] = i.useState(null),
          [W, z] = i.useState(g),
          [q, J] = i.useState(void 0),
          [K] = (0, f.Z)(null == W ? [] : [W]),
          X = i.useRef(null),
          $ = i.useMemo(
            () => ({
              application_id: W,
              source_section: l.section,
              impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
            }),
            [l.section, W],
          );
        i.useEffect(() => {
          if (
            F === A.ag.DIRECTORY &&
            null != w &&
            w !== A.ag.DIRECTORY &&
            null != Y
          ) {
            var e;
            null === (e = X.current) || void 0 === e || e.scrollTo({ top: Y });
          }
        }, [Y, w, F]);
        let Q = i.useCallback((e) => {
            var t;
            let { applicationId: n } = e,
              a =
                null === (t = X.current) || void 0 === t ? void 0 : t.scrollTop;
            null != a && G(a), z(n), U(A.ag.SELECT_CHANNEL);
          }, []),
          ee = i.useCallback((e) => {
            let { applicationId: t } = e;
            z(t), U(A.ag.DETAIL_PAGE);
          }, []);
        i.useEffect(() => {
          h.default.track(Z.rMx.OPEN_MODAL, {
            type: "Activity Shelf",
            channel_id: null == t ? void 0 : t.id,
            guild_id: n,
          });
        }, [t, n]),
          i.useEffect(
            () => (
              C.S.subscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q),
              () => {
                C.S.unsubscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q);
              }
            ),
            [Q],
          ),
          i.useEffect(
            () => (
              C.S.subscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee),
              () => {
                C.S.unsubscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee);
              }
            ),
            [ee],
          ),
          i.useEffect(() => {
            S.ux();
          }, []);
        let et = () => {
            U(A.ag.DIRECTORY);
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
                  ...(0, m.v_)(x.Z.getChannel(null == t ? void 0 : t.id)),
                  ...$,
                  ...e,
                };
              h.default.track(Z.rMx.ACTIVITY_SHELF_CLOSE, a);
            },
            [null == t ? void 0 : t.id, $, n],
          ),
          (0, a.jsx)(p.Gt, {
            value: H,
            children: (0, a.jsxs)(d.ModalRoot, {
              className: s()(D.root),
              "aria-label": y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
              ...R,
              children: [
                (0, a.jsx)("img", {
                  alt: y.Z.Messages
                    .EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                  src: L,
                  className: D.shelfTopBackground,
                }),
                (0, a.jsx)("img", {
                  alt: y.Z.Messages
                    .EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                  src: B,
                  className: D.shelfTopForeground,
                }),
                (0, a.jsxs)(d.ModalHeader, {
                  separator: !1,
                  justify: I.Z.Justify.BETWEEN,
                  className: s()(D.modalHeader),
                  children: [
                    (0, a.jsxs)("div", {
                      className: D.headerTextContainer,
                      children: [
                        (() => {
                          if (F === A.ag.DETAIL_PAGE)
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
                                          children: y.Z.Messages.BACK,
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
                                y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
                            }),
                          });
                        })(),
                        (() => {
                          if (F === A.ag.DIRECTORY)
                            return (0, a.jsx)(d.Text, {
                              variant: "text-sm/normal",
                              children: k
                                ? y.Z.Messages
                                    .EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE
                                : y.Z.Messages
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
                F === A.ag.DIRECTORY && k ? (0, a.jsx)(M.W, {}) : null,
                (0, a.jsx)("div", { className: D.modalDivider }),
                (0, a.jsxs)(d.Slides, {
                  activeSlide: F,
                  centered: !1,
                  width: V,
                  children: [
                    (0, a.jsx)(d.Slide, {
                      id: A.ag.DIRECTORY,
                      impressionName: r.ImpressionNames.ACTIVITY_SHELF,
                      impressionProperties: {
                        source_section: l.section,
                        impression_group:
                          r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                      },
                      children: (0, a.jsx)(P, {
                        slide: F,
                        children: (0, a.jsx)(N.Z, {
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
                      id: A.ag.SELECT_CHANNEL,
                      impressionName:
                        r.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                      impressionProperties: {
                        source_section: l.section,
                        impression_group:
                          r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                        application_id: W,
                      },
                      children: (0, a.jsx)(P, {
                        slide: F,
                        children: (0, a.jsx)(j.Z, {
                          applicationId: W,
                          selectedChannelId: q,
                          setSelectedChannelId: J,
                          guildId: n,
                          enableSelectedTextChannelInvite: T,
                        }),
                      }),
                    }),
                    (0, a.jsx)(d.Slide, {
                      id: A.ag.DETAIL_PAGE,
                      impressionName: r.ImpressionNames.ACTIVITY_DETAILS,
                      impressionProperties: $,
                      children: (0, a.jsx)(P, {
                        slide: F,
                        children:
                          null == W
                            ? null
                            : (0, a.jsx)(b.Z, {
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
                      case A.ag.DIRECTORY:
                        return (0, a.jsx)(N.d, {});
                      case A.ag.SELECT_CHANNEL:
                        return (0, a.jsx)(j.q, {
                          onBack: et,
                          onClose: c,
                          guildId: n,
                          applicationId: W,
                          locationObject: l,
                          selectedChannelId: q,
                          enableSelectedTextChannelInvite: T,
                        });
                      case A.ag.DETAIL_PAGE:
                      case A.ag.DIRECTORY:
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
          l = (0, o.e7)([E.Z], () => E.Z.getIsEnabled(), []),
          r = i.useContext(g.ZP),
          c = (0, o.e7)([_.Z], () => _.Z.windowSize(r.windowId).height, [
            r.windowId,
          ]);
        return (0, a.jsx)("div", {
          className: s()(D.slideContentOuterContainerSquished, {
            [D.slideContentOuterContainerSquishedWithDev]:
              n === A.ag.DIRECTORY && l,
            [D.slideContentOuterContainerTall]: n === A.ag.DIRECTORY && c > R,
            [D.slideContentOuterContainerTallWithDev]:
              n === A.ag.DIRECTORY && c > R && l,
            [D.slideContentOuterContainerNoMetaTextSquished]:
              n === A.ag.SELECT_CHANNEL,
            [D.slideContentOuterContainerNoMetaTextTall]:
              n === A.ag.SELECT_CHANNEL && c > R,
            [D.slideContentOuterContainerNoMetaTextNoFooterSquished]:
              n === A.ag.DETAIL_PAGE,
            [D.slideContentOuterContainerNoMetaTextNoFooterTall]:
              n === A.ag.DETAIL_PAGE && c > R,
          }),
          children: t,
        });
      };
    },
    421: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
      }),
        n(47120);
      var a = n(735250),
        i = n(470079),
        l = n(399606),
        s = n(481060),
        r = n(100527),
        o = n(906732),
        c = n(70097),
        d = n(592125),
        u = n(566620),
        g = n(122613),
        m = n(678173),
        v = n(636508),
        p = n(696068),
        f = n(361213),
        I = n(778569),
        x = n(182906),
        _ = n(412019),
        h = n(431136),
        C = n(226799),
        T = n(689938),
        E = n(806384);
      function S(e) {
        var t;
        let {
            applicationId: n,
            guildId: l,
            channelId: d,
            onActivityLaunch: g,
          } = e,
          { analyticsLocations: v } = (0, o.ZP)(
            r.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS,
          );
        i.useEffect(() => {
          (0, u.w1)({ guildId: l });
        }, [l]);
        let p = (0, I.Z)({ applicationId: null != n ? n : "", size: 2048 }),
          x = (0, m.T)(null != l ? l : null, n);
        if (null == x) return null;
        let _ =
            null != x.activity.activity_preview_video_asset_id
              ? (0, f.Z)(n, x.activity.activity_preview_video_asset_id)
              : null,
          h = C.o[n],
          S =
            (null == h ? void 0 : h.playersSuggestionMin) != null &&
            (null == h ? void 0 : h.playersSuggestionMax) != null
              ? ""
                  .concat(h.playersSuggestionMin, " - ")
                  .concat(h.playersSuggestionMax)
              : void 0;
        return (0, a.jsx)(o.Gt, {
          value: v,
          children: (0, a.jsx)("div", {
            className: E.scrollContainer,
            children: (0, a.jsxs)(s.Scroller, {
              className: E.scroller,
              children: [
                (0, a.jsx)("div", {
                  className: E.launcherOuterContainer,
                  children: (0, a.jsx)(b, {
                    activityItem: x,
                    onLaunch: g,
                    channelId: d,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: E.activityDetailsContainer,
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        null != _
                          ? (0, a.jsx)("div", {
                              className: E.heroVideoContainer,
                              children: (0, a.jsx)(c.Z, {
                                loop: !0,
                                autoPlay: !0,
                                muted: !0,
                                className: E.heroVideo,
                                src: _,
                                poster: p.url,
                              }),
                            })
                          : null,
                        (0, a.jsx)("div", {
                          className: E.detailsTitle,
                          children: (0, a.jsx)(s.Heading, {
                            variant: "heading-xxl/bold",
                            children: x.application.name,
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: E.detailsDetails,
                          children: [
                            null != S
                              ? (0, a.jsxs)("div", {
                                  className: E.detailItem,
                                  children: [
                                    (0, a.jsx)(s.GroupIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                    }),
                                    (0, a.jsx)(s.Text, {
                                      variant: "text-xs/semibold",
                                      className: E.detailItemText,
                                      children:
                                        T.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format(
                                          { nPlayers: S },
                                        ),
                                    }),
                                  ],
                                })
                              : null,
                            (null == h ? void 0 : h.timeSuggestionMinutes) !=
                            null
                              ? (0, a.jsxs)("div", {
                                  className: E.detailItem,
                                  children: [
                                    (0, a.jsx)(s.HourglassIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                    }),
                                    (0, a.jsx)(s.Text, {
                                      variant: "text-xs/semibold",
                                      className: E.detailItemText,
                                      children:
                                        T.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format(
                                          { nMinutes: h.timeSuggestionMinutes },
                                        ),
                                    }),
                                  ],
                                })
                              : null,
                            (0, a.jsxs)("div", {
                              className: E.detailItem,
                              children: [
                                (0, a.jsx)(s.TagsIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                }),
                                (0, a.jsx)(s.Text, {
                                  variant: "text-xs/semibold",
                                  className: E.detailItemText,
                                  children: x.application.tags
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
                      className: E.detailsDescription,
                      children: x.application.description,
                    }),
                    (0, a.jsx)("div", { className: E.divider }),
                    (0, a.jsx)("div", {
                      className: E.imagesContainer,
                      children: (null !==
                        (t = null == h ? void 0 : h.gameplayImageUrls) &&
                      void 0 !== t
                        ? t
                        : []
                      ).map((e) =>
                        (0, a.jsx)(
                          "img",
                          {
                            src: e,
                            alt: T.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format(
                              { activityName: x.application.name },
                            ),
                            className: E.activityImage,
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
        var t, r;
        let { activityItem: c, onLaunch: u, channelId: m } = e,
          f = (0, I.Z)({ applicationId: c.application.id, size: 2048 }),
          { analyticsLocations: C } = (0, o.ZP)(),
          [S, b] = i.useState(
            null !==
              (t = (0, v.$)({ allowGdmActivityChannelSuggestion: !0 })) &&
              void 0 !== t
              ? t
              : void 0,
          ),
          [N, j] = i.useState(
            null !==
              (r = (0, p.d)({
                guildId: S,
                allowGdmActivityChannelSuggestion: !0,
              })) && void 0 !== r
              ? r
              : void 0,
          ),
          M = (0, l.e7)([d.Z], () => d.Z.getChannel(N), [N]),
          A = (0, v.W)(),
          Z = (0, p.F)(S),
          y = i.useCallback(async () => {
            var e;
            if (null != N)
              await (0, g.Z)({
                targetApplicationId:
                  null == c
                    ? void 0
                    : null === (e = c.application) || void 0 === e
                      ? void 0
                      : e.id,
                channelId: N,
                analyticsLocations: C,
              }).then(u);
          }, [c, C, u, N]),
          D = i.useCallback(() => {
            (0, s.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("60133"),
                n.e("61755"),
              ]).then(n.bind(n, 827940));
              return (t) =>
                (0, a.jsx)(e, { activityItem: c, ...t, analyticsLocations: C });
            });
          }, [c, C]),
          L =
            null == M ||
            (null != M.guild_id &&
              !(
                null != S &&
                null != N &&
                A.some((e) => e.value === S) &&
                Z.some((e) => e.value.channel.id === N)
              ) &&
              !0);
        return (0, a.jsxs)("div", {
          className: E.launcherInnerContainer,
          children: [
            (0, a.jsx)(x.Z, {
              applicationName: c.application.name,
              imageBackground: f,
              imageClassName: E.launchImage,
              imageNotFoundClassName: E.brokenLaunchImage,
            }),
            (0, a.jsx)(s.Text, {
              variant: "text-md/medium",
              children: T.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE,
            }),
            null == m
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(s.Select, {
                      placeholder: T.Z.Messages.GUILD_SELECT,
                      optionClassName: E.__invalid_option,
                      options: A,
                      renderOptionValue: (e) => {
                        let t = e.find((e) => e.value === S);
                        return null == t
                          ? null
                          : (0, a.jsx)(h.m, { guildId: t.value });
                      },
                      renderOptionLabel: (e) => {
                        let { value: t } = e;
                        return (0, a.jsx)(h.m, { guildId: t });
                      },
                      isSelected: (e) => e === S,
                      select: (e) => {
                        var t;
                        b(e),
                          j(
                            null !== (t = (0, p.d)({ guildId: e })) &&
                              void 0 !== t
                              ? t
                              : void 0,
                          );
                      },
                      serialize: (e) => e,
                    }),
                    (0, a.jsx)(s.Select, {
                      placeholder:
                        T.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                      optionClassName: E.__invalid_option,
                      options: Z,
                      isSelected: (e) => {
                        let { channel: t } = e;
                        return t.id === N;
                      },
                      select: (e) => {
                        let { channel: t } = e;
                        return j(t.id);
                      },
                      serialize: (e) => {
                        let { channel: t } = e;
                        return t.id;
                      },
                      renderOptionValue: () => {
                        let e = Z.find((e) => e.value.channel.id === N);
                        return null == e
                          ? null
                          : (0, a.jsx)(_.O, {
                              channel: e.value.channel,
                              users: e.value.users,
                            });
                      },
                      renderOptionLabel: (e) => {
                        let {
                          value: { channel: t, users: n },
                        } = e;
                        return (0, a.jsx)(_.O, { channel: t, users: n });
                      },
                    }),
                    (0, a.jsx)(s.Button, {
                      fullWidth: !0,
                      disabled: L,
                      onClick: y,
                      children: T.Z.Messages.START,
                    }),
                    (0, a.jsx)("div", { className: E.divider }),
                    (0, a.jsx)(s.Button, {
                      fullWidth: !0,
                      color: s.Button.Colors.PRIMARY,
                      onClick: D,
                      children: T.Z.Messages.SHARE,
                    }),
                  ],
                })
              : (0, a.jsxs)("div", {
                  className: E.singleRowShareContainer,
                  children: [
                    (0, a.jsx)(s.Button, {
                      fullWidth: !0,
                      disabled: L,
                      onClick: y,
                      children: T.Z.Messages.START,
                    }),
                    (0, a.jsx)(s.Button, {
                      className: E.shareIconButton,
                      color: s.Button.Colors.PRIMARY,
                      onClick: D,
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
          return y;
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
        r = n(468194),
        o = n(442837),
        c = n(477690),
        d = n(481060),
        u = n(100527),
        g = n(906732),
        m = n(703656),
        v = n(430824),
        p = n(594174),
        f = n(115130),
        I = n(566620),
        x = n(520599),
        _ = n(127255),
        h = n(880308),
        C = n(451576),
        T = n(439934),
        E = n(701488),
        S = n(981631),
        b = n(689938),
        N = n(876792),
        j = n(932463);
      let M = (0, r.Mg)(
          c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP,
        ),
        A = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
        Z = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
      function y(e) {
        let {
            channel: t,
            guildId: n,
            locationObject: l,
            onClose: r,
            onActivityItemVisible: c,
            scrollerRef: y,
          } = e,
          [D, L] = i.useState(0),
          B = (0, _.Z)({ guildId: n, enableFilter: !0 }),
          O = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
          V = (0, o.e7)([v.Z], () => v.Z.getGuild(n), [n]),
          { analyticsLocations: R } = (0, g.ZP)(u.Z.ACTIVITY_DIRECTORY),
          k = (0, C.Z)(null == t ? void 0 : t.id),
          { enableAmazonMusicShelfPoster: P } = x.p.useExperiment(
            { location: "ActivitiesShelf" },
            { autoTrackExposure: !0 },
          ),
          { isDeveloperActivityShelfEnabled: H, filter: F } = (0, o.cj)(
            [f.Z],
            () => ({
              filter: f.Z.getFilter(),
              isDeveloperActivityShelfEnabled: f.Z.getIsEnabled(),
            }),
          );
        if (
          (i.useEffect(() => {
            let e = y.current;
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
                    null === (e = y.current) || void 0 === e
                      ? void 0
                      : e.scrollTop) && void 0 !== t
                  ? t
                  : 0,
              );
            }
          }, [y]),
          i.useEffect(() => {
            (k || null != n) && (0, I.w1)({ guildId: n, force: !0 });
          }, [n, k]),
          (0, h.g)(),
          (null == V && !k) || null == O)
        )
          return null;
        let U = B.length > 0;
        function w(e) {
          r();
        }
        return (0, a.jsx)(g.Gt, {
          value: R,
          children: (0, a.jsxs)("div", {
            className: N.scrollContainer,
            children: [
              U
                ? (0, a.jsx)("div", {
                    className: N.scrollBackgroundContainer,
                    style: { top: -D },
                    children: (0, a.jsx)("div", {
                      className: s()(N.scrollTierBackground),
                      style: {
                        height: ((e) => {
                          let t = 1 === e.length;
                          return M + Math.ceil(e.length / 2) * (t ? Z : A);
                        })(B),
                      },
                    }),
                  })
                : null,
              (0, a.jsxs)(d.Scroller, {
                ref: y,
                className: N.scroller,
                children: [
                  (function () {
                    if (P) {
                      let e =
                        b.Z.Messages
                          .EMBEDDED_ACTIVITIES_AMAZON_MUSIC_PROMO_BANNER_ALT;
                      return (0, a.jsxs)(d.Clickable, {
                        className: N.posterClickable,
                        "aria-label": e,
                        onClick: () => {
                          var e;
                          (e = E.Fu),
                            r(),
                            (0, m.uL)(S.Z5c.ACTIVITY_DETAILS(E.Fu), {
                              sourceLocationStack: R,
                            });
                        },
                        children: [
                          (0, a.jsx)("div", {
                            className: N.poster,
                            children: (0, a.jsx)("img", {
                              className: N.posterBackground,
                              src: j,
                              alt: e,
                            }),
                          }),
                          (0, a.jsx)("div", { className: N.posterDivider }),
                        ],
                      });
                    }
                    return null;
                  })(),
                  U
                    ? (0, a.jsx)("div", {
                        className: N.scrollSection,
                        children: (0, a.jsx)("div", {
                          className: s()(N.shelf),
                          children: B.map((e) =>
                            (0, a.jsx)(
                              T.Z,
                              {
                                large: 1 === B.length,
                                activityItem: e,
                                channel: t,
                                guildId: n,
                                locationObject: l,
                                onActivityItemVisible: c,
                                onActivityItemSelected: () => {
                                  var t;
                                  (t = e.application.id), r();
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
                          className: N.filterError,
                          children:
                            b.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format(
                              { filter: F },
                            ),
                        })
                      : (0, a.jsx)("div", {
                          className: N.spinnerContainer,
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
          children: b.Z.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({
            surveyURL: E.Es,
          }),
        });
      }
    },
    49978: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return y;
        },
        q: function () {
          return D;
        },
      }),
        n(47120);
      var a = n(735250),
        i = n(470079),
        l = n(442837),
        s = n(481060),
        r = n(153867),
        o = n(607070),
        c = n(100527),
        d = n(906732),
        u = n(264165),
        g = n(70097),
        m = n(740492),
        v = n(592125),
        p = n(430824),
        f = n(496675),
        I = n(944486),
        x = n(566620),
        _ = n(317381),
        h = n(122613),
        C = n(678173),
        T = n(696068),
        E = n(361213),
        S = n(778569),
        b = n(412019),
        N = n(981631),
        j = n(689938),
        M = n(617010);
      function A(e) {
        return (0, l.e7)(
          [p.Z, f.Z],
          () => {
            let t = p.Z.getGuild(e);
            return null != t && f.Z.can(N.Plq.CREATE_INSTANT_INVITE, t);
          },
          [e],
        );
      }
      let Z = ["embedded_background"];
      function y(e) {
        var t, n;
        let {
            applicationId: c,
            guildId: d,
            selectedChannelId: f,
            setSelectedChannelId: _,
            enableSelectedTextChannelInvite: h,
          } = e,
          N = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
          y = (0, C.T)(null != d ? d : null, null != c ? c : null),
          [D, L] = i.useState(
            h && !m.ZP.disableInviteWithTextChannelActivityLaunch,
          ),
          B = (0, T.F)(d);
        i.useEffect(() => {
          var e;
          x.w1({ guildId: d }),
            _(
              null !== (e = (0, T.d)({ guildId: d })) && void 0 !== e
                ? e
                : void 0,
            );
        }, [d, _]);
        let O = null == y ? void 0 : y.activity.activity_preview_video_asset_id,
          V =
            null != O
              ? (0, E.Z)(
                  null !== (t = null == y ? void 0 : y.application.id) &&
                    void 0 !== t
                    ? t
                    : "",
                  O,
                )
              : null,
          { url: R } = (0, S.Z)({
            applicationId:
              null !== (n = null == y ? void 0 : y.application.id) &&
              void 0 !== n
                ? n
                : "",
            size: 1024,
            names: Z,
          }),
          k = (0, l.e7)([p.Z], () => p.Z.getGuild(d)),
          P = (0, l.e7)([v.Z, I.Z], () => v.Z.getChannel(I.Z.getChannelId())),
          H = A(null != d ? d : void 0);
        if ((null == y ? void 0 : y.application) == null || null == k)
          return null;
        let F =
          (null == P ? void 0 : P.name) == null ||
          (null == P ? void 0 : P.name) === ""
            ? j.Z.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME
            : "#".concat(P.name);
        return (0, a.jsxs)(s.Scroller, {
          className: M.scroll,
          children: [
            null != V || null != R
              ? (0, a.jsx)(u.Z, {
                  aspectRatio: 16 / 9,
                  className: M.imageContainer,
                  children: (0, a.jsx)(g.Z, {
                    className: M.video,
                    src: V,
                    loop: !0,
                    autoPlay: !N,
                    poster: R,
                    muted: !0,
                  }),
                })
              : null,
            (0, a.jsxs)("div", {
              className: M.descriptionArea,
              children: [
                (0, a.jsx)(s.Heading, {
                  variant: "heading-xl/semibold",
                  children: null == y ? void 0 : y.application.name,
                }),
                (0, a.jsx)(s.Text, {
                  className: M.descriptionAreaSubtext,
                  variant: "text-md/normal",
                  children: null == y ? void 0 : y.application.description,
                }),
              ],
            }),
            (0, a.jsx)(s.Select, {
              placeholder:
                j.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
              optionClassName: M.__invalid_option,
              options: B,
              isSelected: (e) => {
                let { channel: t } = e;
                return t.id === f;
              },
              select: (e) => {
                let { channel: t } = e;
                return _(t.id);
              },
              serialize: (e) => {
                let { channel: t } = e;
                return t.id;
              },
              renderOptionValue: () => {
                let e = B.find((e) => e.value.channel.id === f);
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
            H && h
              ? (0, a.jsxs)(s.Clickable, {
                  className: M.checkboxContainer,
                  onClick: () => {
                    let e = !D;
                    r.ZP.updatedUnsyncedSettings({
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
                        j.Z.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE,
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
      function D(e) {
        let {
            applicationId: t,
            guildId: n,
            locationObject: i,
            onBack: r,
            onClose: o,
            selectedChannelId: u,
            enableSelectedTextChannelInvite: g,
          } = e,
          { analyticsLocations: p } = (0, d.ZP)(c.Z.ACTIVITY_CHANNEL_SELECTOR),
          f = (0, C.T)(null != n ? n : null, null != t ? t : null),
          T = (0, l.e7)([v.Z, I.Z], () => v.Z.getChannel(I.Z.getChannelId())),
          E = (0, l.e7)(
            [m.ZP],
            () => g && !m.ZP.disableInviteWithTextChannelActivityLaunch,
          ),
          S = (0, l.e7)(
            [_.ZP],
            () =>
              null != u &&
              "" !== u &&
              _.ZP.getEmbeddedActivitiesForChannel(u).some(
                (e) => e.applicationId === t,
              ),
          ),
          b = A(n),
          Z = async () => {
            var e;
            if (null != u && "" !== u && null != f && null != n && "" !== n)
              (await (0, h.Z)({
                targetApplicationId:
                  null === (e = f.application) || void 0 === e ? void 0 : e.id,
                locationObject: i,
                channelId: u,
                analyticsLocations: p,
              })) &&
                (o(),
                null != T &&
                  b &&
                  E &&
                  (await x.sN({
                    activityChannelId: u,
                    invitedChannelId: T.id,
                    applicationId: f.application.id,
                    location: N.Sbl.ACTIVITY_SHELF,
                  })));
          };
        return (0, a.jsx)(d.Gt, {
          value: p,
          children: (0, a.jsxs)("div", {
            className: M.footerContainer,
            children: [
              (0, a.jsx)(s.Clickable, {
                onClick: r,
                className: M.backToBrowse,
                children: (0, a.jsx)(s.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children: j.Z.Messages.BACK,
                }),
              }),
              null == u
                ? (0, a.jsx)("div", {})
                : (0, a.jsx)(s.Button, {
                    className: M.launchButton,
                    onClick: Z,
                    color: S ? s.Button.Colors.GREEN : void 0,
                    fullWidth: !0,
                    children: S
                      ? j.Z.Messages.EMBEDDED_ACTIVITIES_JOIN
                      : j.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH,
                  }),
            ],
          }),
        });
      }
    },
    226799: function (e, t, n) {
      n.d(t, {
        o: function () {
          return R;
        },
      });
      var a = n(701488),
        i = n(114954),
        l = n(956089),
        s = n(407407),
        r = n(942006),
        o = n(836479),
        c = n(779337),
        d = n(694111),
        u = n(442405),
        g = n(974379),
        m = n(873444),
        v = n(216989),
        p = n(188225),
        f = n(337664),
        I = n(585681),
        x = n(288021),
        _ = n(114089),
        h = n(8361),
        C = n(655297),
        T = n(616297),
        E = n(213860),
        S = n(747604),
        b = n(237931),
        N = n(992910),
        j = n(652120),
        M = n(824046),
        A = n(943615),
        Z = n(669001),
        y = n(248313),
        D = n(928119),
        L = n(497664),
        B = n(685358),
        O = n(33218),
        V = n(975570);
      let R = {
        [a.MO]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 1,
          gameplayImageUrls: [f, I],
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
          gameplayImageUrls: [L, B],
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
          gameplayImageUrls: [O, V],
        },
        [a.am]: {
          playersSuggestionMin: 3,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [C, T],
        },
        [a.Ec]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [s, r],
        },
        [a.l4]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [o, c],
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
          gameplayImageUrls: [j, M],
        },
        [a.Gv]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [b, N],
        },
        [a.Cb]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [y, D],
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
          gameplayImageUrls: [A, Z],
        },
        [a.In]: { gameplayImageUrls: [x, _, h] },
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
        r = n(237583),
        o = n(823379),
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
                        .filter(o.lm)
                        .join(", "),
                    }),
                  ],
                })
              : null,
            (0, a.jsx)("div", {
              className: d.voiceUserContainer,
              children: (0, a.jsx)(r.Z, { users: n, max: 4 }),
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
        r = n(430824),
        o = n(768581),
        c = n(107455);
      function d(e) {
        let { guildId: t } = e,
          n = (0, l.e7)([r.Z], () => r.Z.getGuild(t));
        if (null == n) return null;
        let d = null;
        if (null != n.icon) {
          let e = o.ZP.getGuildIconURL({ id: n.id, icon: n.icon, size: 40 });
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
        let { aspectRatio: t, style: n, className: i, children: r } = e;
        return (0, a.jsx)("div", {
          className: l()(s.outer, i),
          style: { paddingTop: "".concat((1 / t) * 100, "%"), ...n },
          children: (0, a.jsx)("div", { className: s.inner, children: r }),
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
        r = n(925329),
        o = n(184902);
      function c(e) {
        let { className: t, embeddedApps: n, muted: i } = e;
        if (n.length <= 0) return null;
        if (1 === n.length)
          return (0, a.jsx)("div", {
            className: l()(o.container, t, i && o.modeMuted),
            children: (0, a.jsx)(r.Z, {
              game: n[0].application,
              className: o.icon20px,
            }),
          });
        {
          let e = n.length - 1;
          return (0, a.jsxs)("div", {
            className: l()(o.container, t, i && o.modeMuted),
            children: [
              (0, a.jsx)(r.Z, {
                game: n[0].application,
                className: o.icon20px,
              }),
              2 === n.length
                ? (0, a.jsx)(r.Z, {
                    game: n[1].application,
                    className: o.icon20px,
                  })
                : (0, a.jsx)(s.Text, {
                    className: o.overflow,
                    variant: "text-xs/bold",
                    color: "interactive-active",
                    children: "+".concat(e),
                  }),
            ],
          });
        }
      }
    },
    237583: function (e, t, n) {
      n(653041), n(47120);
      var a,
        i = n(735250),
        l = n(470079),
        s = n(120356),
        r = n.n(s),
        o = n(481060),
        c = n(598077),
        d = n(940942),
        u = n(585867);
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class m extends (a = l.PureComponent) {
        renderUsers() {
          let {
              users: e,
              max: t,
              renderUser: n = this.defaultRenderUser,
              renderMoreUsers: a,
            } = this.props,
            i = [],
            l = e.length === t ? e.length : t - 1,
            s = 0;
          for (; s < l && s < e.length; ) {
            let t = s === e.length - 1;
            i.push(
              n(e[s] || null, t ? null : d.avatarMasked, "user-".concat(s), t),
            ),
              s++;
          }
          if (s < e.length) {
            let t = Math.min(e.length - s, 99);
            i.push(a("+".concat(t), d.moreUsers, "more-users", t));
          }
          return i;
        }
        renderIcon() {
          return this.props.icon
            ? (0, i.jsx)("div", {
                className: d.iconContainer,
                children: (0, i.jsx)(o.VoiceNormalIcon, {
                  size: "xs",
                  color: "currentColor",
                  colorClass: d.foreground,
                  className: d.icon,
                }),
              })
            : null;
        }
        render() {
          let { className: e } = this.props;
          return (0, i.jsxs)("div", {
            className: r()(e, d.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...e) {
          super(...e),
            g(this, "_ref", void 0),
            g(this, "defaultRenderUser", (e, t, n, a) => {
              let { onClick: l, size: s, guildId: g } = this.props,
                m = e instanceof c.Z ? e : null != e ? e.user : null;
              return null == m
                ? (0, i.jsx)("div", { className: r()(d.emptyUser, t) }, n)
                : (0, i.jsx)(
                    o.Avatar,
                    {
                      tabIndex: 0,
                      src: m.getAvatarURL(g, (0, o.getAvatarSize)(s)),
                      size: s,
                      "aria-label": m.username,
                      className: r()(t, u.cursorPointer, d.avatarSize),
                      onClick: (e) => (null != l ? l(e, m, this._ref) : null),
                    },
                    m.id,
                  );
            });
        }
      }
      g(m, "defaultProps", {
        max: 10,
        renderMoreUsers: function (e, t, n) {
          return (0, i.jsx)("div", { className: t, children: e }, n);
        },
        size: o.AvatarSizes.SIZE_24,
      }),
        (t.Z = m);
    },
    880448: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(735250);
      n(470079);
      var i = n(325767);
      function l(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: l = "currentColor",
          foreground: s,
          ...r
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, i.Z)(r),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          fill: "none",
          children: (0, a.jsx)("path", {
            d: "M7.39344 5.33333L5.33333 7.39344V16.6065L7.39348 18.6667H16.6065L18.6667 16.6065V7.39344L16.6065 5.33333H7.39344ZM11.0485 15.6879H9.20459C9.20459 14.1627 7.96392 12.922 6.43868 12.922V11.078C7.96392 11.078 9.20459 9.83735 9.20459 8.31211H11.0485C11.0485 9.82534 10.3057 11.159 9.17607 12C10.3057 12.8411 11.0485 14.1747 11.0485 15.6879ZM17.5556 12.922C16.0304 12.922 14.7896 14.1627 14.7896 15.6879H12.9457C12.9457 14.1747 13.6885 12.8411 14.8181 12C13.6885 11.159 12.9457 9.82534 12.9457 8.31211H14.7896C14.7896 9.83735 16.0304 11.078 17.5556 11.078V12.922Z",
            fill: l,
            className: s,
          }),
        });
      }
    },
    558522: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(735250);
      n(470079);
      var i = n(325767);
      function l(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: l = "currentColor",
          foreground: s,
          ...r
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, i.Z)(r),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            className: s,
            fill: l,
            d: "M21 5V11.59L18 8.59L14 12.59L10 8.59L6 12.59L3 9.59V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5ZM18 11.42L21 14.42V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V12.42L6 15.42L10 11.42L14 15.42L18 11.42Z",
          }),
        });
      }
    },
    637389: function (e, t, n) {
      e.exports = {
        activityOverlay: "activityOverlay_c17b55",
        actionButton: "actionButton_c17b55",
      };
    },
    175778: function (e, t, n) {
      e.exports = { brokenImageIcon: "brokenImageIcon_b88265" };
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
    940942: function (e, t, n) {
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
    585867: function (e, t, n) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
  },
]);
//# sourceMappingURL=9af09afa244f2835db44.js.map
