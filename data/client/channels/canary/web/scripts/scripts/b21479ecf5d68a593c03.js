"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47079"],
  {
    361205: function (e) {
      e.exports = "/assets/7d5ee9202b25005e7760.svg";
    },
    812320: function (e) {
      e.exports = "/assets/179f38a447da1db28ae2.svg";
    },
    678173: function (e, t, n) {
      n.d(t, {
        T: function () {
          return l;
        },
      });
      var i = n(192379),
        a = n(127255);
      function l(e, t) {
        let n = (0, a.Z)({ guildId: e });
        return i.useMemo(() => {
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
          return r;
        },
        W: function () {
          return d;
        },
      });
      var i = n(192379),
        a = n(442837),
        l = n(592125),
        s = n(944486),
        c = n(914010),
        o = n(771845);
      function r() {
        var e;
        let { allowGdmActivityChannelSuggestion: t } =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { allowGdmActivityChannelSuggestion: !1 },
          n = s.Z.getVoiceChannelId(),
          i = l.Z.getChannel(n);
        if (null != i && null != i.guild_id) return i.guild_id;
        if (null == i || !t)
          return null !== (e = c.Z.getLastSelectedGuildId()) && void 0 !== e
            ? e
            : o.ZP.getFlattenedGuildIds()[0];
      }
      function d() {
        let e = (0, a.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds());
        return i.useMemo(() => e.map((e) => ({ label: e, value: e })), [e]);
      }
    },
    696068: function (e, t, n) {
      n.d(t, {
        F: function () {
          return h;
        },
        d: function () {
          return g;
        },
      }),
        n(653041),
        n(47120);
      var i = n(442837),
        a = n(592125),
        l = n(324067),
        s = n(430824),
        c = n(496675),
        o = n(944486),
        r = n(979651),
        d = n(938475),
        u = n(823379),
        p = n(374065),
        f = n(981631);
      function m(e, t, n, i, a) {
        let l = (0, p.e4)({
          channelId: e.id,
          ChannelStore: t,
          GuildStore: n,
          PermissionStore: i,
          VoiceStateStore: a,
        });
        return (e.type === f.d4z.GUILD_VOICE && l === p.jy.CAN_LAUNCH) || !1;
      }
      function g(e) {
        var t, n, i;
        let { guildId: p, allowGdmActivityChannelSuggestion: f = !1 } = e;
        if (null == p && !f) return null;
        let g = o.Z.getVoiceChannelId(),
          v = a.Z.getChannel(g);
        if (null != v && (null != v.guild_id || f)) return v.id;
        let h = [];
        for (let e of Object.values(l.Z.getCategories(p)))
          for (let t of e)
            m(t.channel, a.Z, s.Z, c.Z, r.Z) &&
              h.push({
                channel: t.channel,
                users: d.ZP.getVoiceStatesForChannel(t.channel).filter(u.lm),
              });
        return null !==
          (i =
            null ===
              (n = h.sort((e, t) =>
                e.users.length > t.users.length ? -1 : 1,
              )[0]) || void 0 === n
              ? void 0
              : null === (t = n.channel) || void 0 === t
                ? void 0
                : t.id) && void 0 !== i
          ? i
          : null;
      }
      function v(e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++)
          if (e[n].value.channel.id !== t[n].value.channel.id) return !1;
        return !0;
      }
      function h(e) {
        return (0, i.e7)(
          [l.Z, a.Z, s.Z, c.Z, r.Z, d.ZP],
          () => {
            if (null == e) return [];
            let t = [];
            return (
              Object.values(l.Z.getCategories(e)).forEach((e) => {
                e.forEach((e) => {
                  let { channel: n } = e;
                  m(n, a.Z, s.Z, c.Z, r.Z) && t.push(n);
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
          v,
        );
      }
    },
    451576: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(399606),
        a = n(592125);
      function l(e) {
        var t;
        let n = (0, i.e7)([a.Z], () => a.Z.getChannel(e));
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
      var i = n(200651);
      n(192379);
      var a = n(481060),
        l = n(542094),
        s = n(388032),
        c = n(616919);
      function o(e) {
        let { action: t, onClick: n } = e,
          o =
            t === l.JS.JOIN
              ? s.intl.string(s.t["4i2vj4"])
              : s.intl.string(s.t["R/FK4O"]),
          r = t === l.JS.JOIN ? a.Button.Colors.PRIMARY : a.Button.Colors.RED;
        return (0, i.jsx)("div", {
          className: c.activityOverlay,
          children: (0, i.jsx)(a.Button, {
            className: c.actionButton,
            onClick: n,
            size: a.Button.Sizes.MEDIUM,
            color: r,
            children: o,
          }),
        });
      }
    },
    556505: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        l = n(481060),
        s = n(911969),
        c = n(388032),
        o = n(656625);
      function r(e) {
        let {
            name: t,
            labelType: n,
            collapsed: r = !1,
            showTooltip: d = !1,
          } = e,
          u =
            n === s.ww.NEW
              ? c.intl.string(c.t.y2b7CA)
              : c.intl.string(c.t["/qdhkp"]),
          p = n === s.ww.NEW ? o.activityNewBadge : o.activityUpdatedBadge,
          [f, m] = a.useState(r ? "" : u);
        if (
          (a.useEffect(() => {
            r
              ? m("")
              : n === s.ww.NEW
                ? m(c.intl.string(c.t.y2b7CA))
                : n === s.ww.UPDATED && m(c.intl.string(c.t["/qdhkp"]));
          }, [r, n]),
          n === s.ww.NONE)
        )
          return null;
        let g = (0, i.jsx)(l.TextBadge, {
          className: p,
          disableColor: !0,
          text: (0, i.jsx)("span", { children: f }),
        });
        if (!d) return g;
        let v = c.intl.formatToPlainString(c.t.Vs2EeX, { activity: t });
        return (0, i.jsx)(l.TooltipContainer, {
          text: v,
          tooltipContentClassName: o.tooltip,
          children: g,
        });
      }
    },
    439934: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return w;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        l = n(120356),
        s = n.n(l),
        c = n(442837),
        o = n(481060),
        r = n(239091),
        d = n(434650),
        u = n(895924),
        p = n(70097),
        f = n(695346),
        m = n(594174),
        g = n(695103),
        v = n(880448),
        h = n(823379),
        x = n(5192),
        b = n(624138),
        C = n(115130),
        I = n(147865),
        T = n(542094),
        _ = n(665811),
        Z = n(182906),
        S = n(556505),
        N = n(513202),
        y = n(884338),
        j = n(823531),
        E = n(388032),
        A = n(879727),
        M = n(969728);
      function O(e) {
        let { value: t, icon: n } = e;
        return (0, i.jsxs)(o.Text, {
          className: A.activityTag,
          color: "interactive-normal",
          variant: "text-xs/semibold",
          children: [
            (0, h.lm)(n) ? (0, i.jsx)(n, { className: A.icon }) : null,
            t,
          ],
        });
      }
      function L(e) {
        let {
            activity: t,
            application: n,
            channel: a,
            guildId: l,
            large: s = !1,
          } = e,
          r = (0, c.Wu)([m.default], () => {
            var e;
            return Array.from(
              null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e
                ? e
                : [],
            )
              .map((e) => {
                let [t] = e;
                return m.default.getUser(t);
              })
              .filter(h.lm);
          }),
          d = x.ZP.getName(
            l,
            null == a ? void 0 : a.id,
            null == r ? void 0 : r[0],
          );
        if (((d = (0, b.aF)(d, 15)), null == t || 0 === r.length)) {
          var u, p;
          let e = "".concat(
            (0, I.ZP)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0),
          );
          return (
            s && (e = null !== (p = n.description) && void 0 !== p ? p : ""),
            (0, i.jsx)(o.Text, {
              className: A.activitySubtitleText,
              variant: "text-xs/normal",
              color: "interactive-normal",
              children: e,
            })
          );
        }
        return (0, i.jsxs)("div", {
          className: A.activitySubtitleText,
          children: [
            (0, i.jsx)(o.Text, {
              className: A.usersArePlayingText,
              variant: "text-xs/normal",
              children:
                r.length > 1
                  ? E.intl.formatToPlainString(E.t.cpe6CA, {
                      username: d,
                      count: r.length - 1,
                    })
                  : E.intl.formatToPlainString(E.t["7Uuia2"], { username: d }),
            }),
            (0, i.jsx)(y.Z, {
              size: s ? y.u.SIZE_24 : y.u.SIZE_16,
              guildId: l,
              users: r,
              max: 6,
            }),
          ],
        });
      }
      function w(e) {
        var t;
        let {
            activityItem: n,
            channel: l,
            guildId: m,
            locationObject: h,
            onActivityItemVisible: x,
            onActivityItemSelected: b,
            large: y = !1,
          } = e,
          {
            imageBackground: w,
            videoUrl: k,
            activityAction: B,
            joinableEmbeddedApp: D,
            onActivityItemSelected: P,
            labelType: R,
            staffReleasePhase: F,
          } = (0, T.ZP)({
            activityItem: n,
            channel: l,
            guildId: m,
            locationObject: h,
            onActivityItemVisible: x,
            onActivityItemSelected: b,
            embeddedActivitiesManager: N.Z,
            commandOrigin: u.bB.APPLICATION_LAUNCHER,
          }),
          H = (0, c.e7)(
            [C.Z, g.Z],
            () =>
              C.Z.inDevModeForApplication(n.application.id) ||
              g.Z.inTestModeForApplication(n.application.id),
            [n.application.id],
          ),
          { application: V } = n,
          U = a.useCallback(
            (e) =>
              e &&
              (null == x ? void 0 : x({ applicationId: n.application.id })),
            [n.application.id, x],
          ),
          Y = (0, d.O)(U, 0.8, !0),
          [G, W] = a.useState(!1),
          [z, q] = a.useState(G);
        a.useEffect(() => {
          G && q(!0);
        }, [G]);
        let J = () => W(!0),
          X = () => W(!1),
          Q = f.Sb.useSetting(),
          $ = a.useCallback(() => {
            null == P || P();
          }, [P]);
        return (0, i.jsxs)(o.Clickable, {
          onClick: B === T.JS.START ? $ : void 0,
          onContextMenu: Q
            ? (e) => {
                (0, r.vq)(e, (e) => (0, i.jsx)(j.Z, { application: V, ...e }));
              }
            : void 0,
          className: s()(A.activityItem, {
            [A.large]: !0 === y,
            [A.disabled]: B !== T.JS.START,
          }),
          children: [
            (0, i.jsxs)("div", {
              ref: Y,
              className: s()(A.activityImageContainer, { [A.large]: !0 === y }),
              onMouseEnter: J,
              onFocus: J,
              onMouseLeave: X,
              onBlur: X,
              children: [
                (0, i.jsx)(Z.Z, {
                  imageBackground: w,
                  applicationName: V.name,
                  imageClassName: s()(A.activityImage, { [A.large]: !0 === y }),
                  imageNotFoundClassName: A.brokenImageIconWrapper,
                }),
                null != k && z && B === T.JS.START
                  ? (0, i.jsx)("div", {
                      className: s()(A.activityVideo, { [A.videoFadeOut]: !G }),
                      onAnimationEnd: () => (G ? null : q(!1)),
                      children: (0, i.jsx)(p.Z, {
                        className: A.activityVideo,
                        src: k,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                      }),
                    })
                  : null,
                B !== T.JS.START
                  ? (0, i.jsx)(_.U, { action: B, onClick: $ })
                  : null,
                (0, i.jsx)("div", {
                  className: A.overlayBadge,
                  children: (0, i.jsx)("div", {
                    className: A.badgeContainer,
                    children: (0, i.jsx)(S.Z, { name: V.name, labelType: R }),
                  }),
                }),
                H
                  ? (0, i.jsx)(o.Tooltip, {
                      text: E.intl.string(E.t.CfTySU),
                      children: (e) =>
                        (0, i.jsx)("div", {
                          className: A.devShelfBadge,
                          ...e,
                          children: (0, i.jsx)(v.Z, {
                            className: A.devShelfIcon,
                          }),
                        }),
                    })
                  : null,
              ],
            }),
            (0, i.jsxs)("div", {
              className: s()(A.activityTextContainer, { [A.large]: y }),
              children: [
                y
                  ? (0, i.jsx)(o.Text, {
                      className: A.activityMaxParticipantsLarge,
                      variant: "text-xs/normal",
                      color: "interactive-normal",
                      children: (0, I.ZP)(
                        null !== (t = V.maxParticipants) && void 0 !== t
                          ? t
                          : 0,
                      ),
                    })
                  : null,
                (0, i.jsxs)("div", {
                  className: A.activityName,
                  children: [
                    (0, i.jsx)(o.Heading, {
                      className: A.activityTitleText,
                      variant: "heading-md/semibold",
                      color: "interactive-active",
                      children: V.name,
                    }),
                    null != F
                      ? (0, i.jsx)(o.Tooltip, {
                          text: F,
                          children: (e) =>
                            (0, i.jsx)("img", {
                              className: A.staffBadge,
                              alt: F,
                              src: M,
                              ...e,
                            }),
                        })
                      : null,
                  ],
                }),
                (0, i.jsx)(L, {
                  activity: null == D ? void 0 : D.embeddedActivity,
                  application: V,
                  channel: l,
                  guildId: m,
                  large: y,
                }),
                (0, i.jsx)("div", {
                  className: A.activityTagsContainer,
                  children: V.tags
                    .slice(0, 3)
                    .map((e) =>
                      (0, i.jsx)(
                        O,
                        { value: e },
                        "activity-tag-".concat(V.id, "-").concat(e),
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
            return R;
          },
        }),
        n(47120),
        n(653041);
      var i = n(200651),
        a = n(192379),
        l = n(120356),
        s = n.n(l),
        c = n(990547),
        o = n(442837),
        r = n(477690),
        d = n(481060),
        u = n(493773),
        p = n(110924),
        f = n(40851),
        m = n(367907),
        g = n(565384),
        v = n(906732),
        h = n(835473),
        x = n(600164),
        b = n(592125),
        C = n(451478),
        I = n(626135),
        T = n(585483),
        _ = n(624138),
        Z = n(115130),
        S = n(566620),
        N = n(421),
        y = n(895395),
        j = n(49978),
        E = n(427996),
        A = n(701488),
        M = n(981631),
        O = n(388032),
        L = n(408011),
        w = n(361205),
        k = n(812320);
      let B = (0, _.Mg)(r.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
        D = (0, _.Mg)(r.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
        P =
          (0, _.Mg)(r.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) +
          B +
          (0, _.Mg)(r.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);
      function R(e) {
        let {
            channel: t,
            guildId: n,
            locationObject: l,
            onClose: r,
            initialSelectedApplicationId: f,
            initialSlide: C = A.ag.DIRECTORY,
            enableSelectedTextChannelInvite: _,
            analyticsLocations: B,
            ...P
          } = e,
          R = (0, o.e7)([Z.Z], () => Z.Z.getIsEnabled(), []),
          { analyticsLocations: H } = (0, v.ZP)(B),
          [V, U] = a.useState(C),
          Y = (0, p.Z)(V),
          [G, W] = a.useState(null),
          [z, q] = a.useState(f),
          [J, X] = a.useState(void 0),
          [Q] = (0, h.Z)(null == z ? [] : [z]),
          $ = a.useRef(null),
          K = a.useMemo(
            () => ({
              application_id: z,
              source_section: l.section,
              impression_group: c.ImpressionGroups.ACTIVITY_SHELF_FLOW,
            }),
            [l.section, z],
          );
        a.useEffect(() => {
          if (
            V === A.ag.DIRECTORY &&
            null != Y &&
            Y !== A.ag.DIRECTORY &&
            null != G
          ) {
            var e;
            null === (e = $.current) || void 0 === e || e.scrollTo({ top: G });
          }
        }, [G, Y, V]);
        let ee = a.useCallback((e) => {
            var t;
            let { applicationId: n } = e,
              i =
                null === (t = $.current) || void 0 === t ? void 0 : t.scrollTop;
            null != i && W(i), q(n), U(A.ag.SELECT_CHANNEL);
          }, []),
          et = a.useCallback((e) => {
            let { applicationId: t } = e;
            q(t), U(A.ag.DETAIL_PAGE);
          }, []);
        a.useEffect(() => {
          I.default.track(M.rMx.OPEN_MODAL, {
            type: "Activity Shelf",
            channel_id: null == t ? void 0 : t.id,
            guild_id: n,
          });
        }, [t, n]),
          a.useEffect(
            () => (
              T.S.subscribe(M.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ee),
              () => {
                T.S.unsubscribe(M.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ee);
              }
            ),
            [ee],
          ),
          a.useEffect(
            () => (
              T.S.subscribe(M.CkL.SHOW_ACTIVITY_DETAILS, et),
              () => {
                T.S.unsubscribe(M.CkL.SHOW_ACTIVITY_DETAILS, et);
              }
            ),
            [et],
          ),
          a.useEffect(() => {
            S.ux();
          }, []);
        let en = () => {
            U(A.ag.DIRECTORY);
          },
          ei = a.useRef(Date.now()),
          ea = a.useRef(!1),
          el = a.useRef([]),
          es = a.useCallback((e) => {
            null == el.current.find((t) => t === e.applicationId) &&
              el.current.push(e.applicationId);
          }, []);
        return (
          a.useEffect(() => {
            let e = $.current;
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
          (0, u.Z)(() => () => {
            let e = {
                activity_tiles_viewed: el.current,
                duration_ms: Date.now() - ei.current,
                scrolled: ea.current,
              },
              i = {
                channel_id: null == t ? void 0 : t.id,
                guild_id: n,
                location: (0, g.k$)(),
                ...(0, m.hH)(n),
                ...(0, m.v_)(b.Z.getChannel(null == t ? void 0 : t.id)),
                ...K,
                ...e,
              };
            I.default.track(M.rMx.ACTIVITY_SHELF_CLOSE, i);
          }),
          (0, i.jsx)(v.Gt, {
            value: H,
            children: (0, i.jsxs)(d.ModalRoot, {
              className: s()(L.root),
              "aria-label": O.intl.string(O.t.shUONj),
              ...P,
              children: [
                (0, i.jsx)("img", {
                  alt: O.intl.string(O.t["3Y9xdH"]),
                  src: w,
                  className: L.shelfTopBackground,
                }),
                (0, i.jsx)("img", {
                  alt: O.intl.string(O.t["3Y9xdH"]),
                  src: k,
                  className: L.shelfTopForeground,
                }),
                (0, i.jsxs)(d.ModalHeader, {
                  separator: !1,
                  justify: x.Z.Justify.BETWEEN,
                  className: s()(L.modalHeader),
                  children: [
                    (0, i.jsxs)("div", {
                      className: L.headerTextContainer,
                      children: [
                        (() => {
                          if (V === A.ag.DETAIL_PAGE)
                            return null == Q
                              ? null
                              : (0, i.jsxs)("div", {
                                  className: L.activityShelfTitle,
                                  children: [
                                    (0, i.jsx)(d.Heading, {
                                      variant: "heading-xl/extrabold",
                                      children: Q.name,
                                    }),
                                    (0, i.jsxs)(d.Clickable, {
                                      className: L.headerBackButton,
                                      onClick: en,
                                      children: [
                                        (0, i.jsx)(d.ChevronSmallLeftIcon, {
                                          size: "md",
                                          color: "currentColor",
                                        }),
                                        (0, i.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          children: O.intl.string(
                                            O.t["13/7kZ"],
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                });
                          return (0, i.jsx)("div", {
                            className: L.activityShelfTitle,
                            children: (0, i.jsx)(d.Heading, {
                              variant: "heading-xl/extrabold",
                              children: O.intl.string(O.t.shUONj),
                            }),
                          });
                        })(),
                        (() => {
                          if (V === A.ag.DIRECTORY)
                            return (0, i.jsx)(d.Text, {
                              variant: "text-sm/normal",
                              children: R
                                ? O.intl.string(O.t.tZ3FNj)
                                : O.intl.string(O.t.Cye3SU),
                            });
                          return null;
                        })(),
                      ],
                    }),
                    (0, i.jsx)(d.ModalCloseButton, {
                      className: L.modalCloseButton,
                      onClick: r,
                    }),
                  ],
                }),
                V === A.ag.DIRECTORY && R ? (0, i.jsx)(E.W, {}) : null,
                (0, i.jsx)("div", { className: L.modalDivider }),
                (0, i.jsxs)(d.Slides, {
                  activeSlide: V,
                  centered: !1,
                  width: D,
                  children: [
                    (0, i.jsx)(d.Slide, {
                      id: A.ag.DIRECTORY,
                      impressionName: c.ImpressionNames.ACTIVITY_SHELF,
                      impressionProperties: {
                        source_section: l.section,
                        impression_group:
                          c.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                      },
                      children: (0, i.jsx)(F, {
                        slide: V,
                        children: (0, i.jsx)(y.Z, {
                          scrollerRef: $,
                          channel: t,
                          guildId: n,
                          locationObject: l,
                          onActivityItemVisible: es,
                          onClose: r,
                        }),
                      }),
                    }),
                    (0, i.jsx)(d.Slide, {
                      id: A.ag.SELECT_CHANNEL,
                      impressionName:
                        c.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                      impressionProperties: {
                        source_section: l.section,
                        impression_group:
                          c.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                        application_id: z,
                      },
                      children: (0, i.jsx)(F, {
                        slide: V,
                        children: (0, i.jsx)(j.Z, {
                          applicationId: z,
                          selectedChannelId: J,
                          setSelectedChannelId: X,
                          guildId: n,
                          enableSelectedTextChannelInvite: _,
                        }),
                      }),
                    }),
                    (0, i.jsx)(d.Slide, {
                      id: A.ag.DETAIL_PAGE,
                      impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                      impressionProperties: K,
                      children: (0, i.jsx)(F, {
                        slide: V,
                        children:
                          null == z
                            ? null
                            : (0, i.jsx)(N.Z, {
                                applicationId: z,
                                channelId: null == t ? void 0 : t.id,
                                guildId: n,
                                onActivityLaunch: r,
                              }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", { className: L.modalDivider }),
                (0, i.jsx)(d.ModalFooter, {
                  separator: !1,
                  className: L.footer,
                  children: (() => {
                    switch (V) {
                      case A.ag.DIRECTORY:
                        return (0, i.jsx)(y.d, {});
                      case A.ag.SELECT_CHANNEL:
                        return (0, i.jsx)(j.q, {
                          onBack: en,
                          onClose: r,
                          guildId: n,
                          applicationId: z,
                          locationObject: l,
                          selectedChannelId: J,
                          enableSelectedTextChannelInvite: _,
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
      let F = (e) => {
        let { children: t, slide: n } = e,
          l = (0, o.e7)([Z.Z], () => Z.Z.getIsEnabled(), []),
          c = a.useContext(f.ZP),
          r = (0, o.e7)([C.Z], () => C.Z.windowSize(c.windowId).height, [
            c.windowId,
          ]);
        return (0, i.jsx)("div", {
          className: s()(L.slideContentOuterContainerSquished, {
            [L.slideContentOuterContainerSquishedWithDev]:
              n === A.ag.DIRECTORY && l,
            [L.slideContentOuterContainerTall]: n === A.ag.DIRECTORY && r > P,
            [L.slideContentOuterContainerTallWithDev]:
              n === A.ag.DIRECTORY && r > P && l,
            [L.slideContentOuterContainerNoMetaTextSquished]:
              n === A.ag.SELECT_CHANNEL,
            [L.slideContentOuterContainerNoMetaTextTall]:
              n === A.ag.SELECT_CHANNEL && r > P,
            [L.slideContentOuterContainerNoMetaTextNoFooterSquished]:
              n === A.ag.DETAIL_PAGE,
            [L.slideContentOuterContainerNoMetaTextNoFooterTall]:
              n === A.ag.DETAIL_PAGE && r > P,
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
      var i = n(200651),
        a = n(192379),
        l = n(399606),
        s = n(481060),
        c = n(100527),
        o = n(906732),
        r = n(895924),
        d = n(70097),
        u = n(592125),
        p = n(566620),
        f = n(122613),
        m = n(678173),
        g = n(636508),
        v = n(696068),
        h = n(361213),
        x = n(778569),
        b = n(182906),
        C = n(412019),
        I = n(431136),
        T = n(226799),
        _ = n(388032),
        Z = n(652788);
      function S(e) {
        var t;
        let {
            applicationId: n,
            guildId: l,
            channelId: r,
            onActivityLaunch: u,
          } = e,
          { analyticsLocations: f } = (0, o.ZP)(
            c.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS,
          );
        a.useEffect(() => {
          (0, p.w1)({ guildId: l });
        }, [l]);
        let g = (0, x.Z)({ applicationId: null != n ? n : "", size: 2048 }),
          v = (0, m.T)(null != l ? l : null, n);
        if (null == v) return null;
        let b =
            null != v.activity.activity_preview_video_asset_id
              ? (0, h.Z)(n, v.activity.activity_preview_video_asset_id)
              : null,
          C = T.o[n],
          I =
            (null == C ? void 0 : C.playersSuggestionMin) != null &&
            (null == C ? void 0 : C.playersSuggestionMax) != null
              ? ""
                  .concat(C.playersSuggestionMin, " - ")
                  .concat(C.playersSuggestionMax)
              : void 0;
        return (0, i.jsx)(o.Gt, {
          value: f,
          children: (0, i.jsx)("div", {
            className: Z.scrollContainer,
            children: (0, i.jsxs)(s.Scroller, {
              className: Z.scroller,
              children: [
                (0, i.jsx)("div", {
                  className: Z.launcherOuterContainer,
                  children: (0, i.jsx)(N, {
                    activityItem: v,
                    onLaunch: u,
                    channelId: r,
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: Z.activityDetailsContainer,
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        null != b
                          ? (0, i.jsx)("div", {
                              className: Z.heroVideoContainer,
                              children: (0, i.jsx)(d.Z, {
                                loop: !0,
                                autoPlay: !0,
                                muted: !0,
                                className: Z.heroVideo,
                                src: b,
                                poster: g.url,
                              }),
                            })
                          : null,
                        (0, i.jsx)("div", {
                          className: Z.detailsTitle,
                          children: (0, i.jsx)(s.Heading, {
                            variant: "heading-xxl/bold",
                            children: v.application.name,
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: Z.detailsDetails,
                          children: [
                            null != I
                              ? (0, i.jsxs)("div", {
                                  className: Z.detailItem,
                                  children: [
                                    (0, i.jsx)(s.GroupIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                    }),
                                    (0, i.jsx)(s.Text, {
                                      variant: "text-xs/semibold",
                                      className: Z.detailItemText,
                                      children: _.intl.format(_.t.T3isFB, {
                                        nPlayers: I,
                                      }),
                                    }),
                                  ],
                                })
                              : null,
                            (null == C ? void 0 : C.timeSuggestionMinutes) !=
                            null
                              ? (0, i.jsxs)("div", {
                                  className: Z.detailItem,
                                  children: [
                                    (0, i.jsx)(s.HourglassIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                    }),
                                    (0, i.jsx)(s.Text, {
                                      variant: "text-xs/semibold",
                                      className: Z.detailItemText,
                                      children: _.intl.format(_.t.dehcUV, {
                                        nMinutes: C.timeSuggestionMinutes,
                                      }),
                                    }),
                                  ],
                                })
                              : null,
                            (0, i.jsxs)("div", {
                              className: Z.detailItem,
                              children: [
                                (0, i.jsx)(s.TagsIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                }),
                                (0, i.jsx)(s.Text, {
                                  variant: "text-xs/semibold",
                                  className: Z.detailItemText,
                                  children: v.application.tags
                                    .slice(0, 3)
                                    .join(", "),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(s.Heading, {
                      variant: "heading-lg/medium",
                      className: Z.detailsDescription,
                      children: v.application.description,
                    }),
                    (0, i.jsx)("div", { className: Z.divider }),
                    (0, i.jsx)("div", {
                      className: Z.imagesContainer,
                      children: (null !==
                        (t = null == C ? void 0 : C.gameplayImageUrls) &&
                      void 0 !== t
                        ? t
                        : []
                      ).map((e) =>
                        (0, i.jsx)(
                          "img",
                          {
                            src: e,
                            alt: _.intl.formatToPlainString(_.t.YOslsL, {
                              activityName: v.application.name,
                            }),
                            className: Z.activityImage,
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
      function N(e) {
        var t, c;
        let { activityItem: d, onLaunch: p, channelId: m } = e,
          h = (0, x.Z)({ applicationId: d.application.id, size: 2048 }),
          { analyticsLocations: T } = (0, o.ZP)(),
          [S, N] = a.useState(
            null !==
              (t = (0, g.$)({ allowGdmActivityChannelSuggestion: !0 })) &&
              void 0 !== t
              ? t
              : void 0,
          ),
          [y, j] = a.useState(
            null !==
              (c = (0, v.d)({
                guildId: S,
                allowGdmActivityChannelSuggestion: !0,
              })) && void 0 !== c
              ? c
              : void 0,
          ),
          E = (0, l.e7)([u.Z], () => u.Z.getChannel(y), [y]),
          A = (0, g.W)(),
          M = (0, v.F)(S),
          O = a.useCallback(async () => {
            var e;
            if (null != y)
              await (0, f.Z)({
                targetApplicationId:
                  null == d
                    ? void 0
                    : null === (e = d.application) || void 0 === e
                      ? void 0
                      : e.id,
                channelId: y,
                analyticsLocations: T,
                commandOrigin: r.bB.APPLICATION_LAUNCHER,
              }).then(p);
          }, [d, T, p, y]),
          L = a.useCallback(() => {
            (0, s.openModalLazy)(async () => {
              let { default: e } = await n.e("60133").then(n.bind(n, 827940));
              return (t) =>
                (0, i.jsx)(e, { activityItem: d, ...t, analyticsLocations: T });
            });
          }, [d, T]),
          w =
            null == E ||
            (null != E.guild_id &&
              !(
                null != S &&
                null != y &&
                A.some((e) => e.value === S) &&
                M.some((e) => e.value.channel.id === y)
              ) &&
              !0);
        return (0, i.jsxs)("div", {
          className: Z.launcherInnerContainer,
          children: [
            (0, i.jsx)(b.Z, {
              applicationName: d.application.name,
              imageBackground: h,
              imageClassName: Z.launchImage,
              imageNotFoundClassName: Z.brokenLaunchImage,
            }),
            (0, i.jsx)(s.Text, {
              variant: "text-md/medium",
              children: _.intl.string(_.t.lfSF4O),
            }),
            null == m
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(s.Select, {
                      placeholder: _.intl.string(_.t.etZ9tb),
                      optionClassName: Z.__invalid_option,
                      options: A,
                      renderOptionValue: (e) => {
                        let t = e.find((e) => e.value === S);
                        return null == t
                          ? null
                          : (0, i.jsx)(I.m, { guildId: t.value });
                      },
                      renderOptionLabel: (e) => {
                        let { value: t } = e;
                        return (0, i.jsx)(I.m, { guildId: t });
                      },
                      isSelected: (e) => e === S,
                      select: (e) => {
                        var t;
                        N(e),
                          j(
                            null !== (t = (0, v.d)({ guildId: e })) &&
                              void 0 !== t
                              ? t
                              : void 0,
                          );
                      },
                      serialize: (e) => e,
                    }),
                    (0, i.jsx)(s.Select, {
                      placeholder: _.intl.string(_.t.SUryfX),
                      optionClassName: Z.__invalid_option,
                      options: M,
                      isSelected: (e) => {
                        let { channel: t } = e;
                        return t.id === y;
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
                        let e = M.find((e) => e.value.channel.id === y);
                        return null == e
                          ? null
                          : (0, i.jsx)(C.O, {
                              channel: e.value.channel,
                              users: e.value.users,
                            });
                      },
                      renderOptionLabel: (e) => {
                        let {
                          value: { channel: t, users: n },
                        } = e;
                        return (0, i.jsx)(C.O, { channel: t, users: n });
                      },
                    }),
                    (0, i.jsx)(s.Button, {
                      fullWidth: !0,
                      disabled: w,
                      onClick: O,
                      children: _.intl.string(_.t.I0v0Qk),
                    }),
                    (0, i.jsx)("div", { className: Z.divider }),
                    (0, i.jsx)(s.Button, {
                      fullWidth: !0,
                      color: s.Button.Colors.PRIMARY,
                      onClick: L,
                      children: _.intl.string(_.t.RDE0SU),
                    }),
                  ],
                })
              : (0, i.jsxs)("div", {
                  className: Z.singleRowShareContainer,
                  children: [
                    (0, i.jsx)(s.Button, {
                      fullWidth: !0,
                      disabled: w,
                      onClick: O,
                      children: _.intl.string(_.t.I0v0Qk),
                    }),
                    (0, i.jsx)(s.Button, {
                      className: Z.shareIconButton,
                      color: s.Button.Colors.PRIMARY,
                      onClick: L,
                      children: (0, i.jsx)(s.ArrowAngleLeftUpIcon, {
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
          return j;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        l = n(120356),
        s = n.n(l),
        c = n(468194),
        o = n(442837),
        r = n(477690),
        d = n(481060),
        u = n(100527),
        p = n(906732),
        f = n(430824),
        m = n(594174),
        g = n(115130),
        v = n(566620),
        h = n(127255),
        x = n(880308),
        b = n(451576),
        C = n(439934),
        I = n(701488),
        T = n(388032),
        _ = n(810346);
      let Z = (0, c.Mg)(
          r.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP,
        ),
        S = (0, c.Mg)(r.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
        N = (0, c.Mg)(r.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
      function y(e) {
        let {
            channel: t,
            guildId: n,
            locationObject: l,
            onClose: c,
            onActivityItemVisible: r,
            scrollerRef: I,
          } = e,
          [y, j] = a.useState(0),
          E = (0, h.Z)({ guildId: n, enableFilter: !0 }),
          A = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
          M = (0, o.e7)([f.Z], () => f.Z.getGuild(n), [n]),
          { analyticsLocations: O } = (0, p.ZP)(u.Z.ACTIVITY_DIRECTORY),
          L = (0, b.Z)(null == t ? void 0 : t.id),
          { isDeveloperActivityShelfEnabled: w, filter: k } = (0, o.cj)(
            [g.Z],
            () => ({
              filter: g.Z.getFilter(),
              isDeveloperActivityShelfEnabled: g.Z.getIsEnabled(),
            }),
          );
        if (
          (a.useEffect(() => {
            let e = I.current;
            if (null != e)
              return (
                e.addEventListener("scroll", t, !1),
                () => {
                  if (null != e) e.removeEventListener("scroll", t, !1);
                }
              );
            function t() {
              var e, t;
              j(
                null !==
                  (t =
                    null === (e = I.current) || void 0 === e
                      ? void 0
                      : e.scrollTop) && void 0 !== t
                  ? t
                  : 0,
              );
            }
          }, [I]),
          a.useEffect(() => {
            (L || null != n) && (0, v.w1)({ guildId: n, force: !0 });
          }, [n, L]),
          (0, x.g)(),
          (null == M && !L) || null == A)
        )
          return null;
        let B = E.length > 0;
        return (0, i.jsx)(p.Gt, {
          value: O,
          children: (0, i.jsxs)("div", {
            className: _.scrollContainer,
            children: [
              B
                ? (0, i.jsx)("div", {
                    className: _.scrollBackgroundContainer,
                    style: { top: -y },
                    children: (0, i.jsx)("div", {
                      className: s()(_.scrollTierBackground),
                      style: {
                        height: ((e) => {
                          let t = 1 === e.length;
                          return Z + Math.ceil(e.length / 2) * (t ? N : S);
                        })(E),
                      },
                    }),
                  })
                : null,
              (0, i.jsxs)(d.Scroller, {
                ref: I,
                className: _.scroller,
                children: [
                  null,
                  B
                    ? (0, i.jsx)("div", {
                        className: _.scrollSection,
                        children: (0, i.jsx)("div", {
                          className: s()(_.shelf),
                          children: E.map((e) =>
                            (0, i.jsx)(
                              C.Z,
                              {
                                large: 1 === E.length,
                                activityItem: e,
                                channel: t,
                                guildId: n,
                                locationObject: l,
                                onActivityItemVisible: r,
                                onActivityItemSelected: () => {
                                  var t;
                                  (t = e.application.id), c();
                                },
                              },
                              "activity-shelf-item-".concat(e.application.id),
                            ),
                          ),
                        }),
                      })
                    : w && k.length > 0
                      ? (0, i.jsx)(d.Text, {
                          variant: "text-md/normal",
                          className: _.filterError,
                          children: T.intl.format(T.t.p0PRFB, { filter: k }),
                        })
                      : (0, i.jsx)("div", {
                          className: _.spinnerContainer,
                          children: (0, i.jsx)(d.Spinner, {}),
                        }),
                ],
              }),
            ],
          }),
        });
      }
      function j() {
        return (0, i.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: T.intl.format(T.t.fijcEB, { surveyURL: I.Es }),
        });
      }
    },
    49978: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return O;
        },
        q: function () {
          return L;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        l = n(442837),
        s = n(481060),
        c = n(153867),
        o = n(607070),
        r = n(100527),
        d = n(906732),
        u = n(895924),
        p = n(264165),
        f = n(70097),
        m = n(740492),
        g = n(592125),
        v = n(430824),
        h = n(496675),
        x = n(944486),
        b = n(566620),
        C = n(317381),
        I = n(122613),
        T = n(678173),
        _ = n(696068),
        Z = n(361213),
        S = n(778569),
        N = n(412019),
        y = n(981631),
        j = n(388032),
        E = n(951671);
      function A(e) {
        return (0, l.e7)(
          [v.Z, h.Z],
          () => {
            let t = v.Z.getGuild(e);
            return null != t && h.Z.can(y.Plq.CREATE_INSTANT_INVITE, t);
          },
          [e],
        );
      }
      let M = ["embedded_background"];
      function O(e) {
        var t, n;
        let {
            applicationId: r,
            guildId: d,
            selectedChannelId: u,
            setSelectedChannelId: h,
            enableSelectedTextChannelInvite: C,
          } = e,
          I = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
          y = (0, T.T)(null != d ? d : null, null != r ? r : null),
          [O, L] = a.useState(
            C && !m.ZP.disableInviteWithTextChannelActivityLaunch,
          ),
          w = (0, _.F)(d);
        a.useEffect(() => {
          var e;
          b.w1({ guildId: d }),
            h(
              null !== (e = (0, _.d)({ guildId: d })) && void 0 !== e
                ? e
                : void 0,
            );
        }, [d, h]);
        let k = null == y ? void 0 : y.activity.activity_preview_video_asset_id,
          B =
            null != k
              ? (0, Z.Z)(
                  null !== (t = null == y ? void 0 : y.application.id) &&
                    void 0 !== t
                    ? t
                    : "",
                  k,
                )
              : null,
          { url: D } = (0, S.Z)({
            applicationId:
              null !== (n = null == y ? void 0 : y.application.id) &&
              void 0 !== n
                ? n
                : "",
            size: 1024,
            names: M,
          }),
          P = (0, l.e7)([v.Z], () => v.Z.getGuild(d)),
          R = (0, l.e7)([g.Z, x.Z], () => g.Z.getChannel(x.Z.getChannelId())),
          F = A(null != d ? d : void 0);
        if ((null == y ? void 0 : y.application) == null || null == P)
          return null;
        let H =
          (null == R ? void 0 : R.name) == null ||
          (null == R ? void 0 : R.name) === ""
            ? j.intl.string(j.t.PlAffn)
            : "#".concat(R.name);
        return (0, i.jsxs)(s.Scroller, {
          className: E.scroll,
          children: [
            null != B || null != D
              ? (0, i.jsx)(p.Z, {
                  aspectRatio: 16 / 9,
                  className: E.imageContainer,
                  children: (0, i.jsx)(f.Z, {
                    className: E.video,
                    src: B,
                    loop: !0,
                    autoPlay: !I,
                    poster: D,
                    muted: !0,
                  }),
                })
              : null,
            (0, i.jsxs)("div", {
              className: E.descriptionArea,
              children: [
                (0, i.jsx)(s.Heading, {
                  variant: "heading-xl/semibold",
                  children: null == y ? void 0 : y.application.name,
                }),
                (0, i.jsx)(s.Text, {
                  className: E.descriptionAreaSubtext,
                  variant: "text-md/normal",
                  children: null == y ? void 0 : y.application.description,
                }),
              ],
            }),
            (0, i.jsx)(s.Select, {
              placeholder: j.intl.string(j.t.SUryfX),
              optionClassName: E.__invalid_option,
              options: w,
              isSelected: (e) => {
                let { channel: t } = e;
                return t.id === u;
              },
              select: (e) => {
                let { channel: t } = e;
                return h(t.id);
              },
              serialize: (e) => {
                let { channel: t } = e;
                return t.id;
              },
              renderOptionValue: () => {
                let e = w.find((e) => e.value.channel.id === u);
                return null == e
                  ? null
                  : (0, i.jsx)(N.O, {
                      channel: e.value.channel,
                      users: e.value.users,
                    });
              },
              renderOptionLabel: (e) => {
                let {
                  value: { channel: t, users: n },
                } = e;
                return (0, i.jsx)(N.O, { channel: t, users: n });
              },
            }),
            F && C
              ? (0, i.jsxs)(s.Clickable, {
                  className: E.checkboxContainer,
                  onClick: () => {
                    let e = !O;
                    c.ZP.updatedUnsyncedSettings({
                      disableInviteWithTextChannelActivityLaunch: !e,
                    }),
                      L(e);
                  },
                  children: [
                    (0, i.jsx)(s.Checkbox, {
                      type: s.Checkbox.Types.INVERTED,
                      className: E.checkbox,
                      value: O,
                      displayOnly: !0,
                    }),
                    (0, i.jsxs)(s.Text, {
                      variant: "text-sm/normal",
                      children: [
                        j.intl.string(j.t.x3JFq6),
                        " ",
                        (0, i.jsx)("strong", { children: H }),
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
            locationObject: a,
            onBack: c,
            onClose: o,
            selectedChannelId: p,
            enableSelectedTextChannelInvite: f,
          } = e,
          { analyticsLocations: v } = (0, d.ZP)(r.Z.ACTIVITY_CHANNEL_SELECTOR),
          h = (0, T.T)(null != n ? n : null, null != t ? t : null),
          _ = (0, l.e7)([g.Z, x.Z], () => g.Z.getChannel(x.Z.getChannelId())),
          Z = (0, l.e7)(
            [m.ZP],
            () => f && !m.ZP.disableInviteWithTextChannelActivityLaunch,
          ),
          S = (0, l.e7)(
            [C.ZP],
            () =>
              null != p &&
              "" !== p &&
              C.ZP.getEmbeddedActivitiesForChannel(p).some(
                (e) => e.applicationId === t,
              ),
          ),
          N = A(n),
          M = async () => {
            var e;
            if (null != p && "" !== p && null != h && null != n && "" !== n)
              (await (0, I.Z)({
                targetApplicationId:
                  null === (e = h.application) || void 0 === e ? void 0 : e.id,
                locationObject: a,
                channelId: p,
                analyticsLocations: v,
                commandOrigin: u.bB.APPLICATION_LAUNCHER,
              })) &&
                (o(),
                null != _ &&
                  N &&
                  Z &&
                  (await b.sN({
                    activityChannelId: p,
                    invitedChannelId: _.id,
                    applicationId: h.application.id,
                    location: y.Sbl.ACTIVITY_SHELF,
                  })));
          };
        return (0, i.jsx)(d.Gt, {
          value: v,
          children: (0, i.jsxs)("div", {
            className: E.footerContainer,
            children: [
              (0, i.jsx)(s.Clickable, {
                onClick: c,
                className: E.backToBrowse,
                children: (0, i.jsx)(s.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children: j.intl.string(j.t["13/7kZ"]),
                }),
              }),
              null == p
                ? (0, i.jsx)("div", {})
                : (0, i.jsx)(s.Button, {
                    className: E.launchButton,
                    onClick: M,
                    color: S ? s.Button.Colors.GREEN : void 0,
                    fullWidth: !0,
                    children: S
                      ? j.intl.string(j.t.sqe0ho)
                      : j.intl.string(j.t.QO7rOz),
                  }),
            ],
          }),
        });
      }
    },
    226799: function (e, t, n) {
      n.d(t, {
        o: function () {
          return D;
        },
      });
      var i = n(701488),
        a = n(799911),
        l = n(222013),
        s = n(38161),
        c = n(15259),
        o = n(517288),
        r = n(724491),
        d = n(271359),
        u = n(241976),
        p = n(783466),
        f = n(128584),
        m = n(469999),
        g = n(607865),
        v = n(265661),
        h = n(121517),
        x = n(295597),
        b = n(327510),
        C = n(465087),
        I = n(920496),
        T = n(39417),
        _ = n(641322),
        Z = n(829463),
        S = n(966310),
        N = n(710227),
        y = n(820836),
        j = n(179603),
        E = n(838116),
        A = n(697333),
        M = n(168191),
        O = n(499900),
        L = n(420648),
        w = n(303865),
        k = n(993190),
        B = n(555852);
      let D = {
        [i.MO]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 1,
          gameplayImageUrls: [v.Z, h.Z],
        },
        [i.js]: {
          playersSuggestionMin: 4,
          playersSuggestionMax: 12,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [m.Z, g.Z],
        },
        [i.mI]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [],
        },
        [i.GR]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [L.Z, w.Z],
        },
        [i.PD]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [_.Z, Z.Z],
        },
        [i.jT]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 2,
          gameplayImageUrls: [k.Z, B.Z],
        },
        [i.am]: {
          playersSuggestionMin: 3,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [I.Z, T.Z],
        },
        [i.Ec]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [s.Z, c.Z],
        },
        [i.l4]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [o.Z, r.Z],
        },
        [i.fE]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [p.Z, f.Z],
        },
        [i.IF]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 5,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [a.Z, l.Z],
        },
        [i.Zc]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 7,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [y.Z, j.Z],
        },
        [i.Gv]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [S.Z, N.Z],
        },
        [i.Cb]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [M.Z, O.Z],
        },
        [i.qG]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 4,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [d.Z, u.Z],
        },
        [i.f9]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [E.Z, A.Z],
        },
        [i.In]: { gameplayImageUrls: [x.Z, b.Z, C.Z] },
      };
    },
    412019: function (e, t, n) {
      n.d(t, {
        O: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(481060),
        l = n(447003),
        s = n(687352),
        c = n(237583),
        o = n(823379),
        r = n(619915),
        d = n(69597);
      function u(e) {
        let { channel: t, users: n } = e,
          u = (0, r.ZP)(t);
        return (0, i.jsxs)("div", {
          className: d.channelInfo,
          children: [
            (0, l.Z)(t)
              ? (0, i.jsx)(a.VoiceLockIcon, {
                  size: "md",
                  color: "currentColor",
                  className: d.speakerIcon,
                })
              : (0, i.jsx)(a.VoiceNormalIcon, {
                  size: "md",
                  color: "currentColor",
                  className: d.speakerIcon,
                }),
            (0, i.jsx)("div", { className: d.channelName, children: t.name }),
            u.length > 0
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("div", { className: d.divider }),
                    (0, i.jsx)(s.Z, {
                      embeddedApps: u,
                      className: d.channelItemActivities,
                    }),
                    (0, i.jsx)("div", {
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
            (0, i.jsx)("div", {
              className: d.voiceUserContainer,
              children: (0, i.jsx)(c.Z, { users: n, max: 4 }),
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
      var i = n(200651);
      n(192379);
      var a = n(468194),
        l = n(399606),
        s = n(481060),
        c = n(430824),
        o = n(768581),
        r = n(126893);
      function d(e) {
        let { guildId: t } = e,
          n = (0, l.e7)([c.Z], () => c.Z.getGuild(t));
        if (null == n) return null;
        let d = null;
        if (null != n.icon) {
          let e = o.ZP.getGuildIconURL({ id: n.id, icon: n.icon, size: 40 });
          d = (0, i.jsx)(s.Avatar, {
            src: e,
            "aria-label": n.name,
            size: s.AvatarSizes.SIZE_24,
          });
        } else {
          let e = (0, a.Zg)(n.name).slice(0, 2);
          d = (0, i.jsx)(s.Text, {
            variant: "text-xs/semibold",
            className: r.acronym,
            "aria-hidden": !0,
            children: e,
          });
        }
        return (0, i.jsxs)("div", {
          className: r.container,
          children: [
            d,
            (0, i.jsx)(s.Text, {
              variant: "text-md/semibold",
              className: r.text,
              children: n.name,
            }),
          ],
        });
      }
    },
    823531: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(481060),
        l = n(239091),
        s = n(299206),
        c = n(388032);
      function o(e) {
        let { application: t, onSelect: n } = e,
          o = (0, s.Z)({ id: t.id, label: c.intl.string(c.t["+NP/b2"]) });
        return (0, i.jsx)(a.Menu, {
          navId: "activity-shelf-item-context",
          onClose: l.Zy,
          "aria-label": c.intl.string(c.t.WkcHT0),
          onSelect: n,
          children: (0, i.jsx)(
            a.MenuGroup,
            { children: o },
            "developer-actions",
          ),
        });
      }
    },
    264165: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var a = n(120356),
        l = n.n(a),
        s = n(546490);
      t.Z = (e) => {
        let { aspectRatio: t, style: n, className: a, children: c } = e;
        return (0, i.jsx)("div", {
          className: l()(s.outer, a),
          style: { paddingTop: "".concat((1 / t) * 100, "%"), ...n },
          children: (0, i.jsx)("div", { className: s.inner, children: c }),
        });
      };
    },
    687352: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(120356),
        l = n.n(a),
        s = n(481060),
        c = n(925329),
        o = n(621164);
      function r(e) {
        let { className: t, embeddedApps: n, muted: a } = e;
        if (n.length <= 0) return null;
        if (1 === n.length)
          return (0, i.jsx)("div", {
            className: l()(o.container, t, a && o.modeMuted),
            children: (0, i.jsx)(c.Z, {
              game: n[0].application,
              className: o.icon20px,
            }),
          });
        {
          let e = n.length - 1;
          return (0, i.jsxs)("div", {
            className: l()(o.container, t, a && o.modeMuted),
            children: [
              (0, i.jsx)(c.Z, {
                game: n[0].application,
                className: o.icon20px,
              }),
              2 === n.length
                ? (0, i.jsx)(c.Z, {
                    game: n[1].application,
                    className: o.icon20px,
                  })
                : (0, i.jsx)(s.Text, {
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
    616919: function (e, t, n) {
      e.exports = {
        activityOverlay: "activityOverlay_c17b55",
        actionButton: "actionButton_c17b55",
      };
    },
    656625: function (e, t, n) {
      e.exports = {
        activityNewBadge: "activityNewBadge_b4a8cd",
        activityUpdatedBadge: "activityUpdatedBadge_b4a8cd",
        tooltip: "tooltip_b4a8cd",
      };
    },
    879727: function (e, t, n) {
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
    408011: function (e, t, n) {
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
    652788: function (e, t, n) {
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
    810346: function (e, t, n) {
      e.exports = {
        scrollContainer: "scrollContainer_f09e45",
        scroller: "scroller_f09e45",
        scrollSection: "scrollSection_f09e45",
        shelf: "shelf_f09e45",
        scrollBackgroundContainer: "scrollBackgroundContainer_f09e45",
        scrollTierBackground: "scrollTierBackground_f09e45",
        spinnerContainer: "spinnerContainer_f09e45",
        filterError: "filterError_f09e45",
      };
    },
    951671: function (e, t, n) {
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
    780349: function (e, t, n) {
      e.exports = {
        container: "container_c4a3bb",
        searchBar: "searchBar_c4a3bb",
      };
    },
    69597: function (e, t, n) {
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
    126893: function (e, t, n) {
      e.exports = {
        container: "container_e2cb96",
        acronym: "acronym_e2cb96",
        text: "text_e2cb96",
      };
    },
    546490: function (e, t, n) {
      e.exports = { outer: "outer_b15852", inner: "inner_b15852" };
    },
    621164: function (e, t, n) {
      e.exports = {
        icon20px: "icon20px_e06fdc",
        container: "container_e06fdc",
        overflow: "overflow_e06fdc",
        modeMuted: "modeMuted_e06fdc",
      };
    },
    799911: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/4c01db851b60586bd7c5937df26af8446db5bee6ed2dc6db76593f05188014aa.webp";
    },
    222013: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/6b56edb523b4e2f6d75d64a8f4b82631e43022bfd54cfb507aa91a674cb36e34.webp";
    },
    38161: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/306c5124846a9eed82eef52c16863e1c627e29596ea4a5735612fadcb2da5d0a.webp";
    },
    15259: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/3ba9cb23d53c1f3ad84548d1f33c70e561dd52fb3f8e071bf3cb9c0a75c78029.webp";
    },
    517288: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/b4fbbb2d432e99ffeb8f045882da93033ed251f40a173a8105b06b1f1fd9a0ad.webp";
    },
    724491: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/f305db1132c563030066634afdbf39019a06f8921ce103c5f60c02052d716efc.webp";
    },
    271359: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/8e8949930966d5dd5728cd40f90a8a11a42292828f39f6f53efdee4d01d83d8b.webp";
    },
    241976: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/4a5ee7bd8bb0bbc7c1fdf12795467e400710047dc2f30ac1c50330ffb3632693.webp";
    },
    783466: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/9a0d7304c65909b61d3b93765b4a311c626487ede02e493a22c66026fb6d6b81.webp";
    },
    128584: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/fe1e5e86d073fbc336659c8796be1844d26ad8bedebcec6dfaa2827d4ad00702.webp";
    },
    469999: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/2729a543a4c56d58bfd5b83bdf5a504090940422fd49841afa33018b9cbc832e.webp";
    },
    607865: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/f74a7c3d2b16b8cd6f21be258901e6bcfc915dcf028d9b599150169c598a68e5.webp";
    },
    265661: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/4275cf7f1ee7b3172098c1b92daaa9b26648d42728b783dcaac9d9795d6ffcce.webp";
    },
    121517: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/9a0ed67e26305543547bffd61bff50760b820c347e5b9bef77d9f88fae4ec21c.webp";
    },
    295597: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/a38cf69a9864bc232e293dce13e75de2cc90dfe9f40c7de549fa9f4df5283e39.webp";
    },
    327510: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/f2b2bad6e8556256358039526c079a79f8f8ad50fdb2ee0548bf5cfba6cf7cea.webp";
    },
    465087: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/2a68659da386fe69d8e685085603c333b3fbb718a7cf682abdc5eb19d6a340c9.webp";
    },
    920496: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/2837e3bc329e41391154381124b66349658ec1e151fdf9e2e72fafef8ebd9fdf.webp";
    },
    39417: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/875f5fcf0bc87cd876775e07145282906cd9b59d73a813545af7b112621a3b76.webp";
    },
    641322: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/95864736be664b00a99a1a29f2117b63b311126779df57e101917a6ce8cade4d.webp";
    },
    829463: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/2140e4d3b04143215a0071d4b3e794666e1937745ca78fe0a303d21c116060a7.webp";
    },
    966310: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/2a48f3685e6329680003c6e66523ea00840f66dbd82a4a67288dc37c95d7b243.webp";
    },
    710227: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/ed040c7a2570b370b3aa9ee45a0d044e96b8ec8e2805a0d33b359f388bbb0b02.webp";
    },
    820836: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/e93ae1ceaa479c6b9c91870c27d7ddd0347dfa940304cde8cf0c8781c746f953.webp";
    },
    179603: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/251e553b4390d963ec52216806877152b1b30c6b0f08a574fb2cedcf4c36a5d2.webp";
    },
    838116: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/aa752d8917449525288c0d87ca38a0b482ae1f86d0b3a655c67a6dc91ac82015.webp";
    },
    697333: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/4c80691678ff47c78b00cce83d2562d4605b2580587ce4803a07eff3020f6766.webp";
    },
    168191: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/724cb192e4489d463ca267cfa9ef4cff42e105221bf745506f5650cf553c0e4f.webp";
    },
    499900: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/e38830a658e73d66d29b04922cc4407a73e43beea86a023d73f7409cbcf705c8.webp";
    },
    420648: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/c83896ec3bff6d3443e8728ff8574388eccba41ff3d38318a68d3c50a82b386e.webp";
    },
    303865: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/8b24c7853966e52a8250b53a48bbc0f276df6fd1a8bf9d60af0cca532cdc99d0.webp";
    },
    993190: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/a13a9ea3f43f4073ffdc0ebbdd7ab6e41eca8512e9bacf74b4f8811ca4773452.webp";
    },
    555852: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/17ac905beb181c6a03f87541822c95100f74482de49e48a97e79818606d36dbc.webp";
    },
  },
]);
//# sourceMappingURL=b21479ecf5d68a593c03.js.map
