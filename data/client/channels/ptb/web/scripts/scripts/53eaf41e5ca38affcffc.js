"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34614"],
  {
    361205: function (e) {
      e.exports = "/assets/7d5ee9202b25005e7760.svg";
    },
    812320: function (e) {
      e.exports = "/assets/179f38a447da1db28ae2.svg";
    },
    969728: function (e) {
      e.exports = "/assets/368a2969db80ee62ac23.svg";
    },
    147865: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return a;
        },
        lY: function () {
          return l;
        },
      });
      var i = n(388032);
      function a(e) {
        return e > 0
          ? i.intl.formatToPlainString(i.t["p/YmkZ"], { count: e })
          : i.intl.string(i.t.s1vQIC);
      }
      function l(e) {
        return e > 0 ? "1-".concat(e) : i.intl.string(i.t.zMNEiI);
      }
    },
    778569: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        n(47120);
      var i = n(192379),
        a = n(81063);
      let l = ["embedded_cover", "embedded_background"];
      function r(e) {
        let { applicationId: t, size: n, names: r = l } = e,
          [s, o] = i.useState(null),
          [c, d] = i.useState(!0),
          u = (0, a.getAssetImage)(t, s, n);
        return (
          i.useEffect(() => {
            (0, a.getAssets)(t).then((e) => {
              for (let [t, n] of (d(!1), Object.entries(e)))
                if (null != n && "" !== n.id && r.includes(n.name)) {
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
        r = n(388032),
        s = n(87694);
      function o(e) {
        let { action: t, onClick: n } = e,
          o =
            t === l.JS.JOIN
              ? r.intl.string(r.t["4i2vj4"])
              : r.intl.string(r.t["R/FK4O"]),
          c = t === l.JS.JOIN ? a.Button.Colors.PRIMARY : a.Button.Colors.RED;
        return (0, i.jsx)("div", {
          className: s.activityOverlay,
          children: (0, i.jsx)(a.Button, {
            className: s.actionButton,
            onClick: n,
            size: a.Button.Sizes.MEDIUM,
            color: c,
            children: o,
          }),
        });
      }
    },
    182906: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        l = n(558522),
        r = n(941958);
      function s(e) {
        let {
            imageBackground: t,
            applicationName: n,
            imageClassName: s,
            imageNotFoundClassName: o,
          } = e,
          [c, d] = a.useState(!1);
        return "not-found" === t.state || c
          ? (0, i.jsx)("div", {
              className: o,
              children: (0, i.jsx)(l.Z, { className: r.brokenImageIcon }),
            })
          : "loading" === t.state
            ? null
            : (0, i.jsx)("img", {
                alt: n,
                className: s,
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
      var i = n(200651),
        a = n(192379),
        l = n(481060),
        r = n(911969),
        s = n(388032),
        o = n(899207);
      function c(e) {
        let {
            name: t,
            labelType: n,
            collapsed: c = !1,
            showTooltip: d = !1,
          } = e,
          u =
            n === r.ww.NEW
              ? s.intl.string(s.t.y2b7CA)
              : s.intl.string(s.t["/qdhkp"]),
          v = n === r.ww.NEW ? o.activityNewBadge : o.activityUpdatedBadge,
          [m, h] = a.useState(c ? "" : u);
        if (
          (a.useEffect(() => {
            c
              ? h("")
              : n === r.ww.NEW
                ? h(s.intl.string(s.t.y2b7CA))
                : n === r.ww.UPDATED && h(s.intl.string(s.t["/qdhkp"]));
          }, [c, n]),
          n === r.ww.NONE)
        )
          return null;
        let x = (0, i.jsx)(l.TextBadge, {
          className: v,
          disableColor: !0,
          text: (0, i.jsx)("span", { children: m }),
        });
        if (!d) return x;
        let g = s.intl.formatToPlainString(s.t.Vs2EeX, { activity: t });
        return (0, i.jsx)(l.TooltipContainer, {
          text: g,
          tooltipContentClassName: o.tooltip,
          children: x,
        });
      }
    },
    439934: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return M;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        l = n(120356),
        r = n.n(l),
        s = n(442837),
        o = n(481060),
        c = n(239091),
        d = n(434650),
        u = n(895924),
        v = n(70097),
        m = n(695346),
        h = n(594174),
        x = n(695103),
        g = n(880448),
        C = n(823379),
        p = n(5192),
        f = n(624138),
        _ = n(115130),
        I = n(147865),
        T = n(542094),
        N = n(665811),
        b = n(182906),
        j = n(556505),
        S = n(513202),
        E = n(884338),
        y = n(823531),
        A = n(388032),
        Z = n(440775),
        L = n(969728);
      function O(e) {
        let { value: t, icon: n } = e;
        return (0, i.jsxs)(o.Text, {
          className: Z.activityTag,
          color: "interactive-normal",
          variant: "text-xs/semibold",
          children: [
            (0, C.lm)(n) ? (0, i.jsx)(n, { className: Z.icon }) : null,
            t,
          ],
        });
      }
      function k(e) {
        let {
            activity: t,
            application: n,
            channel: a,
            guildId: l,
            large: r = !1,
          } = e,
          c = (0, s.Wu)([h.default], () => {
            var e;
            return Array.from(
              null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e
                ? e
                : [],
            )
              .map((e) => {
                let [t] = e;
                return h.default.getUser(t);
              })
              .filter(C.lm);
          }),
          d = p.ZP.getName(
            l,
            null == a ? void 0 : a.id,
            null == c ? void 0 : c[0],
          );
        if (((d = (0, f.aF)(d, 15)), null == t || 0 === c.length)) {
          var u, v;
          let e = "".concat(
            (0, I.ZP)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0),
          );
          return (
            r && (e = null !== (v = n.description) && void 0 !== v ? v : ""),
            (0, i.jsx)(o.Text, {
              className: Z.activitySubtitleText,
              variant: "text-xs/normal",
              color: "interactive-normal",
              children: e,
            })
          );
        }
        return (0, i.jsxs)("div", {
          className: Z.activitySubtitleText,
          children: [
            (0, i.jsx)(o.Text, {
              className: Z.usersArePlayingText,
              variant: "text-xs/normal",
              children:
                c.length > 1
                  ? A.intl.formatToPlainString(A.t.cpe6CA, {
                      username: d,
                      count: c.length - 1,
                    })
                  : A.intl.formatToPlainString(A.t["7Uuia2"], { username: d }),
            }),
            (0, i.jsx)(E.Z, {
              size: r ? E.u.SIZE_24 : E.u.SIZE_16,
              guildId: l,
              users: c,
              max: 6,
            }),
          ],
        });
      }
      function M(e) {
        var t;
        let {
            activityItem: n,
            channel: l,
            guildId: h,
            locationObject: C,
            onActivityItemVisible: p,
            onActivityItemSelected: f,
            large: E = !1,
          } = e,
          {
            imageBackground: M,
            videoUrl: B,
            activityAction: R,
            joinableEmbeddedApp: D,
            onActivityItemSelected: P,
            labelType: H,
            staffReleasePhase: w,
          } = (0, T.ZP)({
            activityItem: n,
            channel: l,
            guildId: h,
            locationObject: C,
            onActivityItemVisible: p,
            onActivityItemSelected: f,
            embeddedActivitiesManager: S.Z,
            commandOrigin: u.bB.APPLICATION_LAUNCHER,
          }),
          F = (0, s.e7)(
            [_.Z, x.Z],
            () =>
              _.Z.inDevModeForApplication(n.application.id) ||
              x.Z.inTestModeForApplication(n.application.id),
            [n.application.id],
          ),
          { application: V } = n,
          Y = a.useCallback(
            (e) =>
              e &&
              (null == p ? void 0 : p({ applicationId: n.application.id })),
            [n.application.id, p],
          ),
          U = (0, d.O)(Y, 0.8, !0),
          [W, G] = a.useState(!1),
          [z, q] = a.useState(W);
        a.useEffect(() => {
          W && q(!0);
        }, [W]);
        let J = () => G(!0),
          Q = () => G(!1),
          X = m.Sb.useSetting(),
          $ = a.useCallback(() => {
            null == P || P();
          }, [P]);
        return (0, i.jsxs)(o.Clickable, {
          onClick: R === T.JS.START ? $ : void 0,
          onContextMenu: X
            ? (e) => {
                (0, c.vq)(e, (e) => (0, i.jsx)(y.Z, { application: V, ...e }));
              }
            : void 0,
          className: r()(Z.activityItem, {
            [Z.large]: !0 === E,
            [Z.disabled]: R !== T.JS.START,
          }),
          children: [
            (0, i.jsxs)("div", {
              ref: U,
              className: r()(Z.activityImageContainer, { [Z.large]: !0 === E }),
              onMouseEnter: J,
              onFocus: J,
              onMouseLeave: Q,
              onBlur: Q,
              children: [
                (0, i.jsx)(b.Z, {
                  imageBackground: M,
                  applicationName: V.name,
                  imageClassName: r()(Z.activityImage, { [Z.large]: !0 === E }),
                  imageNotFoundClassName: Z.brokenImageIconWrapper,
                }),
                null != B && z && R === T.JS.START
                  ? (0, i.jsx)("div", {
                      className: r()(Z.activityVideo, { [Z.videoFadeOut]: !W }),
                      onAnimationEnd: () => (W ? null : q(!1)),
                      children: (0, i.jsx)(v.Z, {
                        className: Z.activityVideo,
                        src: B,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                      }),
                    })
                  : null,
                R !== T.JS.START
                  ? (0, i.jsx)(N.U, { action: R, onClick: $ })
                  : null,
                (0, i.jsx)("div", {
                  className: Z.overlayBadge,
                  children: (0, i.jsx)("div", {
                    className: Z.badgeContainer,
                    children: (0, i.jsx)(j.Z, { name: V.name, labelType: H }),
                  }),
                }),
                F
                  ? (0, i.jsx)(o.Tooltip, {
                      text: A.intl.string(A.t.CfTySU),
                      children: (e) =>
                        (0, i.jsx)("div", {
                          className: Z.devShelfBadge,
                          ...e,
                          children: (0, i.jsx)(g.Z, {
                            className: Z.devShelfIcon,
                          }),
                        }),
                    })
                  : null,
              ],
            }),
            (0, i.jsxs)("div", {
              className: r()(Z.activityTextContainer, { [Z.large]: E }),
              children: [
                E
                  ? (0, i.jsx)(o.Text, {
                      className: Z.activityMaxParticipantsLarge,
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
                  className: Z.activityName,
                  children: [
                    (0, i.jsx)(o.Heading, {
                      className: Z.activityTitleText,
                      variant: "heading-md/semibold",
                      color: "interactive-active",
                      children: V.name,
                    }),
                    null != w
                      ? (0, i.jsx)(o.Tooltip, {
                          text: w,
                          children: (e) =>
                            (0, i.jsx)("img", {
                              className: Z.staffBadge,
                              alt: w,
                              src: L,
                              ...e,
                            }),
                        })
                      : null,
                  ],
                }),
                (0, i.jsx)(k, {
                  activity: null == D ? void 0 : D.embeddedActivity,
                  application: V,
                  channel: l,
                  guildId: h,
                  large: E,
                }),
                (0, i.jsx)("div", {
                  className: Z.activityTagsContainer,
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
            return P;
          },
        }),
        n(47120),
        n(653041);
      var i = n(200651),
        a = n(192379),
        l = n(120356),
        r = n.n(l),
        s = n(990547),
        o = n(442837),
        c = n(477690),
        d = n(481060),
        u = n(110924),
        v = n(40851),
        m = n(367907),
        h = n(565384),
        x = n(906732),
        g = n(835473),
        C = n(600164),
        p = n(592125),
        f = n(451478),
        _ = n(626135),
        I = n(585483),
        T = n(624138),
        N = n(115130),
        b = n(566620),
        j = n(421),
        S = n(895395),
        E = n(49978),
        y = n(427996),
        A = n(701488),
        Z = n(981631),
        L = n(388032),
        O = n(59168),
        k = n(361205),
        M = n(812320);
      let B = (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
        R = (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
        D =
          (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) +
          B +
          (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);
      function P(e) {
        let {
            channel: t,
            guildId: n,
            locationObject: l,
            onClose: c,
            initialSelectedApplicationId: v,
            initialSlide: f = A.ag.DIRECTORY,
            enableSelectedTextChannelInvite: T,
            analyticsLocations: B,
            ...D
          } = e,
          P = (0, o.e7)([N.Z], () => N.Z.getIsEnabled(), []),
          { analyticsLocations: w } = (0, x.ZP)(B),
          [F, V] = a.useState(f),
          Y = (0, u.Z)(F),
          [U, W] = a.useState(null),
          [G, z] = a.useState(v),
          [q, J] = a.useState(void 0),
          [Q] = (0, g.Z)(null == G ? [] : [G]),
          X = a.useRef(null),
          $ = a.useMemo(
            () => ({
              application_id: G,
              source_section: l.section,
              impression_group: s.ImpressionGroups.ACTIVITY_SHELF_FLOW,
            }),
            [l.section, G],
          );
        a.useEffect(() => {
          if (
            F === A.ag.DIRECTORY &&
            null != Y &&
            Y !== A.ag.DIRECTORY &&
            null != U
          ) {
            var e;
            null === (e = X.current) || void 0 === e || e.scrollTo({ top: U });
          }
        }, [U, Y, F]);
        let K = a.useCallback((e) => {
            var t;
            let { applicationId: n } = e,
              i =
                null === (t = X.current) || void 0 === t ? void 0 : t.scrollTop;
            null != i && W(i), z(n), V(A.ag.SELECT_CHANNEL);
          }, []),
          ee = a.useCallback((e) => {
            let { applicationId: t } = e;
            z(t), V(A.ag.DETAIL_PAGE);
          }, []);
        a.useEffect(() => {
          _.default.track(Z.rMx.OPEN_MODAL, {
            type: "Activity Shelf",
            channel_id: null == t ? void 0 : t.id,
            guild_id: n,
          });
        }, [t, n]),
          a.useEffect(
            () => (
              I.S.subscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, K),
              () => {
                I.S.unsubscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, K);
              }
            ),
            [K],
          ),
          a.useEffect(
            () => (
              I.S.subscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee),
              () => {
                I.S.unsubscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee);
              }
            ),
            [ee],
          ),
          a.useEffect(() => {
            b.ux();
          }, []);
        let et = () => {
            V(A.ag.DIRECTORY);
          },
          en = a.useRef(Date.now()),
          ei = a.useRef(!1),
          ea = a.useRef([]),
          el = a.useCallback((e) => {
            null == ea.current.find((t) => t === e.applicationId) &&
              ea.current.push(e.applicationId);
          }, []);
        return (
          a.useEffect(() => {
            let e = X.current;
            if (null != e) {
              let t = () => (ei.current = !0);
              return (
                null != e && e.addEventListener("scroll", t),
                () => {
                  null != e && e.removeEventListener("scroll", t);
                }
              );
            }
          }, []),
          a.useEffect(
            () => () => {
              let e = {
                  activity_tiles_viewed: ea.current,
                  duration_ms: Date.now() - en.current,
                  scrolled: ei.current,
                },
                i = {
                  channel_id: null == t ? void 0 : t.id,
                  guild_id: n,
                  location: (0, h.k$)(),
                  ...(0, m.hH)(n),
                  ...(0, m.v_)(p.Z.getChannel(null == t ? void 0 : t.id)),
                  ...$,
                  ...e,
                };
              _.default.track(Z.rMx.ACTIVITY_SHELF_CLOSE, i);
            },
            [null == t ? void 0 : t.id, $, n],
          ),
          (0, i.jsx)(x.Gt, {
            value: w,
            children: (0, i.jsxs)(d.ModalRoot, {
              className: r()(O.root),
              "aria-label": L.intl.string(L.t.shUONj),
              ...D,
              children: [
                (0, i.jsx)("img", {
                  alt: L.intl.string(L.t["3Y9xdH"]),
                  src: k,
                  className: O.shelfTopBackground,
                }),
                (0, i.jsx)("img", {
                  alt: L.intl.string(L.t["3Y9xdH"]),
                  src: M,
                  className: O.shelfTopForeground,
                }),
                (0, i.jsxs)(d.ModalHeader, {
                  separator: !1,
                  justify: C.Z.Justify.BETWEEN,
                  className: r()(O.modalHeader),
                  children: [
                    (0, i.jsxs)("div", {
                      className: O.headerTextContainer,
                      children: [
                        (() => {
                          if (F === A.ag.DETAIL_PAGE)
                            return null == Q
                              ? null
                              : (0, i.jsxs)("div", {
                                  className: O.activityShelfTitle,
                                  children: [
                                    (0, i.jsx)(d.Heading, {
                                      variant: "heading-xl/extrabold",
                                      children: Q.name,
                                    }),
                                    (0, i.jsxs)(d.Clickable, {
                                      className: O.headerBackButton,
                                      onClick: et,
                                      children: [
                                        (0, i.jsx)(d.ChevronSmallLeftIcon, {
                                          size: "md",
                                          color: "currentColor",
                                        }),
                                        (0, i.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          children: L.intl.string(
                                            L.t["13/7kZ"],
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                });
                          return (0, i.jsx)("div", {
                            className: O.activityShelfTitle,
                            children: (0, i.jsx)(d.Heading, {
                              variant: "heading-xl/extrabold",
                              children: L.intl.string(L.t.shUONj),
                            }),
                          });
                        })(),
                        (() => {
                          if (F === A.ag.DIRECTORY)
                            return (0, i.jsx)(d.Text, {
                              variant: "text-sm/normal",
                              children: P
                                ? L.intl.string(L.t.tZ3FNj)
                                : L.intl.string(L.t.Cye3SU),
                            });
                          return null;
                        })(),
                      ],
                    }),
                    (0, i.jsx)(d.ModalCloseButton, {
                      className: O.modalCloseButton,
                      onClick: c,
                    }),
                  ],
                }),
                F === A.ag.DIRECTORY && P ? (0, i.jsx)(y.W, {}) : null,
                (0, i.jsx)("div", { className: O.modalDivider }),
                (0, i.jsxs)(d.Slides, {
                  activeSlide: F,
                  centered: !1,
                  width: R,
                  children: [
                    (0, i.jsx)(d.Slide, {
                      id: A.ag.DIRECTORY,
                      impressionName: s.ImpressionNames.ACTIVITY_SHELF,
                      impressionProperties: {
                        source_section: l.section,
                        impression_group:
                          s.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                      },
                      children: (0, i.jsx)(H, {
                        slide: F,
                        children: (0, i.jsx)(S.Z, {
                          scrollerRef: X,
                          channel: t,
                          guildId: n,
                          locationObject: l,
                          onActivityItemVisible: el,
                          onClose: c,
                        }),
                      }),
                    }),
                    (0, i.jsx)(d.Slide, {
                      id: A.ag.SELECT_CHANNEL,
                      impressionName:
                        s.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                      impressionProperties: {
                        source_section: l.section,
                        impression_group:
                          s.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                        application_id: G,
                      },
                      children: (0, i.jsx)(H, {
                        slide: F,
                        children: (0, i.jsx)(E.Z, {
                          applicationId: G,
                          selectedChannelId: q,
                          setSelectedChannelId: J,
                          guildId: n,
                          enableSelectedTextChannelInvite: T,
                        }),
                      }),
                    }),
                    (0, i.jsx)(d.Slide, {
                      id: A.ag.DETAIL_PAGE,
                      impressionName: s.ImpressionNames.ACTIVITY_DETAILS,
                      impressionProperties: $,
                      children: (0, i.jsx)(H, {
                        slide: F,
                        children:
                          null == G
                            ? null
                            : (0, i.jsx)(j.Z, {
                                applicationId: G,
                                channelId: null == t ? void 0 : t.id,
                                guildId: n,
                                onActivityLaunch: c,
                              }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", { className: O.modalDivider }),
                (0, i.jsx)(d.ModalFooter, {
                  separator: !1,
                  className: O.footer,
                  children: (() => {
                    switch (F) {
                      case A.ag.DIRECTORY:
                        return (0, i.jsx)(S.d, {});
                      case A.ag.SELECT_CHANNEL:
                        return (0, i.jsx)(E.q, {
                          onBack: et,
                          onClose: c,
                          guildId: n,
                          applicationId: G,
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
      let H = (e) => {
        let { children: t, slide: n } = e,
          l = (0, o.e7)([N.Z], () => N.Z.getIsEnabled(), []),
          s = a.useContext(v.ZP),
          c = (0, o.e7)([f.Z], () => f.Z.windowSize(s.windowId).height, [
            s.windowId,
          ]);
        return (0, i.jsx)("div", {
          className: r()(O.slideContentOuterContainerSquished, {
            [O.slideContentOuterContainerSquishedWithDev]:
              n === A.ag.DIRECTORY && l,
            [O.slideContentOuterContainerTall]: n === A.ag.DIRECTORY && c > D,
            [O.slideContentOuterContainerTallWithDev]:
              n === A.ag.DIRECTORY && c > D && l,
            [O.slideContentOuterContainerNoMetaTextSquished]:
              n === A.ag.SELECT_CHANNEL,
            [O.slideContentOuterContainerNoMetaTextTall]:
              n === A.ag.SELECT_CHANNEL && c > D,
            [O.slideContentOuterContainerNoMetaTextNoFooterSquished]:
              n === A.ag.DETAIL_PAGE,
            [O.slideContentOuterContainerNoMetaTextNoFooterTall]:
              n === A.ag.DETAIL_PAGE && c > D,
          }),
          children: t,
        });
      };
    },
    421: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        l = n(399606),
        r = n(481060),
        s = n(100527),
        o = n(906732),
        c = n(895924),
        d = n(70097),
        u = n(592125),
        v = n(566620),
        m = n(122613),
        h = n(678173),
        x = n(636508),
        g = n(696068),
        C = n(361213),
        p = n(778569),
        f = n(182906),
        _ = n(412019),
        I = n(431136),
        T = n(226799),
        N = n(388032),
        b = n(706451);
      function j(e) {
        var t;
        let {
            applicationId: n,
            guildId: l,
            channelId: c,
            onActivityLaunch: u,
          } = e,
          { analyticsLocations: m } = (0, o.ZP)(
            s.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS,
          );
        a.useEffect(() => {
          (0, v.w1)({ guildId: l });
        }, [l]);
        let x = (0, p.Z)({ applicationId: null != n ? n : "", size: 2048 }),
          g = (0, h.T)(null != l ? l : null, n);
        if (null == g) return null;
        let f =
            null != g.activity.activity_preview_video_asset_id
              ? (0, C.Z)(n, g.activity.activity_preview_video_asset_id)
              : null,
          _ = T.o[n],
          I =
            (null == _ ? void 0 : _.playersSuggestionMin) != null &&
            (null == _ ? void 0 : _.playersSuggestionMax) != null
              ? ""
                  .concat(_.playersSuggestionMin, " - ")
                  .concat(_.playersSuggestionMax)
              : void 0;
        return (0, i.jsx)(o.Gt, {
          value: m,
          children: (0, i.jsx)("div", {
            className: b.scrollContainer,
            children: (0, i.jsxs)(r.Scroller, {
              className: b.scroller,
              children: [
                (0, i.jsx)("div", {
                  className: b.launcherOuterContainer,
                  children: (0, i.jsx)(S, {
                    activityItem: g,
                    onLaunch: u,
                    channelId: c,
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: b.activityDetailsContainer,
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        null != f
                          ? (0, i.jsx)("div", {
                              className: b.heroVideoContainer,
                              children: (0, i.jsx)(d.Z, {
                                loop: !0,
                                autoPlay: !0,
                                muted: !0,
                                className: b.heroVideo,
                                src: f,
                                poster: x.url,
                              }),
                            })
                          : null,
                        (0, i.jsx)("div", {
                          className: b.detailsTitle,
                          children: (0, i.jsx)(r.Heading, {
                            variant: "heading-xxl/bold",
                            children: g.application.name,
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: b.detailsDetails,
                          children: [
                            null != I
                              ? (0, i.jsxs)("div", {
                                  className: b.detailItem,
                                  children: [
                                    (0, i.jsx)(r.GroupIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                    }),
                                    (0, i.jsx)(r.Text, {
                                      variant: "text-xs/semibold",
                                      className: b.detailItemText,
                                      children: N.intl.format(N.t.T3isFB, {
                                        nPlayers: I,
                                      }),
                                    }),
                                  ],
                                })
                              : null,
                            (null == _ ? void 0 : _.timeSuggestionMinutes) !=
                            null
                              ? (0, i.jsxs)("div", {
                                  className: b.detailItem,
                                  children: [
                                    (0, i.jsx)(r.HourglassIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                    }),
                                    (0, i.jsx)(r.Text, {
                                      variant: "text-xs/semibold",
                                      className: b.detailItemText,
                                      children: N.intl.format(N.t.dehcUV, {
                                        nMinutes: _.timeSuggestionMinutes,
                                      }),
                                    }),
                                  ],
                                })
                              : null,
                            (0, i.jsxs)("div", {
                              className: b.detailItem,
                              children: [
                                (0, i.jsx)(r.TagsIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                }),
                                (0, i.jsx)(r.Text, {
                                  variant: "text-xs/semibold",
                                  className: b.detailItemText,
                                  children: g.application.tags
                                    .slice(0, 3)
                                    .join(", "),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(r.Heading, {
                      variant: "heading-lg/medium",
                      className: b.detailsDescription,
                      children: g.application.description,
                    }),
                    (0, i.jsx)("div", { className: b.divider }),
                    (0, i.jsx)("div", {
                      className: b.imagesContainer,
                      children: (null !==
                        (t = null == _ ? void 0 : _.gameplayImageUrls) &&
                      void 0 !== t
                        ? t
                        : []
                      ).map((e) =>
                        (0, i.jsx)(
                          "img",
                          {
                            src: e,
                            alt: N.intl.formatToPlainString(N.t.YOslsL, {
                              activityName: g.application.name,
                            }),
                            className: b.activityImage,
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
      function S(e) {
        var t, s;
        let { activityItem: d, onLaunch: v, channelId: h } = e,
          C = (0, p.Z)({ applicationId: d.application.id, size: 2048 }),
          { analyticsLocations: T } = (0, o.ZP)(),
          [j, S] = a.useState(
            null !==
              (t = (0, x.$)({ allowGdmActivityChannelSuggestion: !0 })) &&
              void 0 !== t
              ? t
              : void 0,
          ),
          [E, y] = a.useState(
            null !==
              (s = (0, g.d)({
                guildId: j,
                allowGdmActivityChannelSuggestion: !0,
              })) && void 0 !== s
              ? s
              : void 0,
          ),
          A = (0, l.e7)([u.Z], () => u.Z.getChannel(E), [E]),
          Z = (0, x.W)(),
          L = (0, g.F)(j),
          O = a.useCallback(async () => {
            var e;
            if (null != E)
              await (0, m.Z)({
                targetApplicationId:
                  null == d
                    ? void 0
                    : null === (e = d.application) || void 0 === e
                      ? void 0
                      : e.id,
                channelId: E,
                analyticsLocations: T,
                commandOrigin: c.bB.APPLICATION_LAUNCHER,
              }).then(v);
          }, [d, T, v, E]),
          k = a.useCallback(() => {
            (0, r.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("60133"),
                n.e("43035"),
              ]).then(n.bind(n, 827940));
              return (t) =>
                (0, i.jsx)(e, { activityItem: d, ...t, analyticsLocations: T });
            });
          }, [d, T]),
          M =
            null == A ||
            (null != A.guild_id &&
              !(
                null != j &&
                null != E &&
                Z.some((e) => e.value === j) &&
                L.some((e) => e.value.channel.id === E)
              ) &&
              !0);
        return (0, i.jsxs)("div", {
          className: b.launcherInnerContainer,
          children: [
            (0, i.jsx)(f.Z, {
              applicationName: d.application.name,
              imageBackground: C,
              imageClassName: b.launchImage,
              imageNotFoundClassName: b.brokenLaunchImage,
            }),
            (0, i.jsx)(r.Text, {
              variant: "text-md/medium",
              children: N.intl.string(N.t.lfSF4O),
            }),
            null == h
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(r.Select, {
                      placeholder: N.intl.string(N.t.etZ9tb),
                      optionClassName: b.__invalid_option,
                      options: Z,
                      renderOptionValue: (e) => {
                        let t = e.find((e) => e.value === j);
                        return null == t
                          ? null
                          : (0, i.jsx)(I.m, { guildId: t.value });
                      },
                      renderOptionLabel: (e) => {
                        let { value: t } = e;
                        return (0, i.jsx)(I.m, { guildId: t });
                      },
                      isSelected: (e) => e === j,
                      select: (e) => {
                        var t;
                        S(e),
                          y(
                            null !== (t = (0, g.d)({ guildId: e })) &&
                              void 0 !== t
                              ? t
                              : void 0,
                          );
                      },
                      serialize: (e) => e,
                    }),
                    (0, i.jsx)(r.Select, {
                      placeholder: N.intl.string(N.t.SUryfX),
                      optionClassName: b.__invalid_option,
                      options: L,
                      isSelected: (e) => {
                        let { channel: t } = e;
                        return t.id === E;
                      },
                      select: (e) => {
                        let { channel: t } = e;
                        return y(t.id);
                      },
                      serialize: (e) => {
                        let { channel: t } = e;
                        return t.id;
                      },
                      renderOptionValue: () => {
                        let e = L.find((e) => e.value.channel.id === E);
                        return null == e
                          ? null
                          : (0, i.jsx)(_.O, {
                              channel: e.value.channel,
                              users: e.value.users,
                            });
                      },
                      renderOptionLabel: (e) => {
                        let {
                          value: { channel: t, users: n },
                        } = e;
                        return (0, i.jsx)(_.O, { channel: t, users: n });
                      },
                    }),
                    (0, i.jsx)(r.Button, {
                      fullWidth: !0,
                      disabled: M,
                      onClick: O,
                      children: N.intl.string(N.t.I0v0Qk),
                    }),
                    (0, i.jsx)("div", { className: b.divider }),
                    (0, i.jsx)(r.Button, {
                      fullWidth: !0,
                      color: r.Button.Colors.PRIMARY,
                      onClick: k,
                      children: N.intl.string(N.t.RDE0SU),
                    }),
                  ],
                })
              : (0, i.jsxs)("div", {
                  className: b.singleRowShareContainer,
                  children: [
                    (0, i.jsx)(r.Button, {
                      fullWidth: !0,
                      disabled: M,
                      onClick: O,
                      children: N.intl.string(N.t.I0v0Qk),
                    }),
                    (0, i.jsx)(r.Button, {
                      className: b.shareIconButton,
                      color: r.Button.Colors.PRIMARY,
                      onClick: k,
                      children: (0, i.jsx)(r.ArrowAngleLeftUpIcon, {
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
          return E;
        },
        d: function () {
          return y;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        l = n(120356),
        r = n.n(l),
        s = n(468194),
        o = n(442837),
        c = n(477690),
        d = n(481060),
        u = n(100527),
        v = n(906732),
        m = n(430824),
        h = n(594174),
        x = n(115130),
        g = n(566620),
        C = n(127255),
        p = n(880308),
        f = n(451576),
        _ = n(439934),
        I = n(701488),
        T = n(388032),
        N = n(175818);
      let b = (0, s.Mg)(
          c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP,
        ),
        j = (0, s.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
        S = (0, s.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
      function E(e) {
        let {
            channel: t,
            guildId: n,
            locationObject: l,
            onClose: s,
            onActivityItemVisible: c,
            scrollerRef: I,
          } = e,
          [E, y] = a.useState(0),
          A = (0, C.Z)({ guildId: n, enableFilter: !0 }),
          Z = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
          L = (0, o.e7)([m.Z], () => m.Z.getGuild(n), [n]),
          { analyticsLocations: O } = (0, v.ZP)(u.Z.ACTIVITY_DIRECTORY),
          k = (0, f.Z)(null == t ? void 0 : t.id),
          { isDeveloperActivityShelfEnabled: M, filter: B } = (0, o.cj)(
            [x.Z],
            () => ({
              filter: x.Z.getFilter(),
              isDeveloperActivityShelfEnabled: x.Z.getIsEnabled(),
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
              y(
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
            (k || null != n) && (0, g.w1)({ guildId: n, force: !0 });
          }, [n, k]),
          (0, p.g)(),
          (null == L && !k) || null == Z)
        )
          return null;
        let R = A.length > 0;
        return (0, i.jsx)(v.Gt, {
          value: O,
          children: (0, i.jsxs)("div", {
            className: N.scrollContainer,
            children: [
              R
                ? (0, i.jsx)("div", {
                    className: N.scrollBackgroundContainer,
                    style: { top: -E },
                    children: (0, i.jsx)("div", {
                      className: r()(N.scrollTierBackground),
                      style: {
                        height: ((e) => {
                          let t = 1 === e.length;
                          return b + Math.ceil(e.length / 2) * (t ? S : j);
                        })(A),
                      },
                    }),
                  })
                : null,
              (0, i.jsxs)(d.Scroller, {
                ref: I,
                className: N.scroller,
                children: [
                  null,
                  R
                    ? (0, i.jsx)("div", {
                        className: N.scrollSection,
                        children: (0, i.jsx)("div", {
                          className: r()(N.shelf),
                          children: A.map((e) =>
                            (0, i.jsx)(
                              _.Z,
                              {
                                large: 1 === A.length,
                                activityItem: e,
                                channel: t,
                                guildId: n,
                                locationObject: l,
                                onActivityItemVisible: c,
                                onActivityItemSelected: () => {
                                  var t;
                                  (t = e.application.id), s();
                                },
                              },
                              "activity-shelf-item-".concat(e.application.id),
                            ),
                          ),
                        }),
                      })
                    : M && B.length > 0
                      ? (0, i.jsx)(d.Text, {
                          variant: "text-md/normal",
                          className: N.filterError,
                          children: T.intl.format(T.t.p0PRFB, { filter: B }),
                        })
                      : (0, i.jsx)("div", {
                          className: N.spinnerContainer,
                          children: (0, i.jsx)(d.Spinner, {}),
                        }),
                ],
              }),
            ],
          }),
        });
      }
      function y() {
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
          return k;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        l = n(442837),
        r = n(481060),
        s = n(153867),
        o = n(607070),
        c = n(100527),
        d = n(906732),
        u = n(895924),
        v = n(264165),
        m = n(70097),
        h = n(740492),
        x = n(592125),
        g = n(430824),
        C = n(496675),
        p = n(944486),
        f = n(566620),
        _ = n(317381),
        I = n(122613),
        T = n(678173),
        N = n(696068),
        b = n(361213),
        j = n(778569),
        S = n(412019),
        E = n(981631),
        y = n(388032),
        A = n(760551);
      function Z(e) {
        return (0, l.e7)(
          [g.Z, C.Z],
          () => {
            let t = g.Z.getGuild(e);
            return null != t && C.Z.can(E.Plq.CREATE_INSTANT_INVITE, t);
          },
          [e],
        );
      }
      let L = ["embedded_background"];
      function O(e) {
        var t, n;
        let {
            applicationId: c,
            guildId: d,
            selectedChannelId: u,
            setSelectedChannelId: C,
            enableSelectedTextChannelInvite: _,
          } = e,
          I = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
          E = (0, T.T)(null != d ? d : null, null != c ? c : null),
          [O, k] = a.useState(
            _ && !h.ZP.disableInviteWithTextChannelActivityLaunch,
          ),
          M = (0, N.F)(d);
        a.useEffect(() => {
          var e;
          f.w1({ guildId: d }),
            C(
              null !== (e = (0, N.d)({ guildId: d })) && void 0 !== e
                ? e
                : void 0,
            );
        }, [d, C]);
        let B = null == E ? void 0 : E.activity.activity_preview_video_asset_id,
          R =
            null != B
              ? (0, b.Z)(
                  null !== (t = null == E ? void 0 : E.application.id) &&
                    void 0 !== t
                    ? t
                    : "",
                  B,
                )
              : null,
          { url: D } = (0, j.Z)({
            applicationId:
              null !== (n = null == E ? void 0 : E.application.id) &&
              void 0 !== n
                ? n
                : "",
            size: 1024,
            names: L,
          }),
          P = (0, l.e7)([g.Z], () => g.Z.getGuild(d)),
          H = (0, l.e7)([x.Z, p.Z], () => x.Z.getChannel(p.Z.getChannelId())),
          w = Z(null != d ? d : void 0);
        if ((null == E ? void 0 : E.application) == null || null == P)
          return null;
        let F =
          (null == H ? void 0 : H.name) == null ||
          (null == H ? void 0 : H.name) === ""
            ? y.intl.string(y.t.PlAffn)
            : "#".concat(H.name);
        return (0, i.jsxs)(r.Scroller, {
          className: A.scroll,
          children: [
            null != R || null != D
              ? (0, i.jsx)(v.Z, {
                  aspectRatio: 16 / 9,
                  className: A.imageContainer,
                  children: (0, i.jsx)(m.Z, {
                    className: A.video,
                    src: R,
                    loop: !0,
                    autoPlay: !I,
                    poster: D,
                    muted: !0,
                  }),
                })
              : null,
            (0, i.jsxs)("div", {
              className: A.descriptionArea,
              children: [
                (0, i.jsx)(r.Heading, {
                  variant: "heading-xl/semibold",
                  children: null == E ? void 0 : E.application.name,
                }),
                (0, i.jsx)(r.Text, {
                  className: A.descriptionAreaSubtext,
                  variant: "text-md/normal",
                  children: null == E ? void 0 : E.application.description,
                }),
              ],
            }),
            (0, i.jsx)(r.Select, {
              placeholder: y.intl.string(y.t.SUryfX),
              optionClassName: A.__invalid_option,
              options: M,
              isSelected: (e) => {
                let { channel: t } = e;
                return t.id === u;
              },
              select: (e) => {
                let { channel: t } = e;
                return C(t.id);
              },
              serialize: (e) => {
                let { channel: t } = e;
                return t.id;
              },
              renderOptionValue: () => {
                let e = M.find((e) => e.value.channel.id === u);
                return null == e
                  ? null
                  : (0, i.jsx)(S.O, {
                      channel: e.value.channel,
                      users: e.value.users,
                    });
              },
              renderOptionLabel: (e) => {
                let {
                  value: { channel: t, users: n },
                } = e;
                return (0, i.jsx)(S.O, { channel: t, users: n });
              },
            }),
            w && _
              ? (0, i.jsxs)(r.Clickable, {
                  className: A.checkboxContainer,
                  onClick: () => {
                    let e = !O;
                    s.ZP.updatedUnsyncedSettings({
                      disableInviteWithTextChannelActivityLaunch: !e,
                    }),
                      k(e);
                  },
                  children: [
                    (0, i.jsx)(r.Checkbox, {
                      type: r.Checkbox.Types.INVERTED,
                      className: A.checkbox,
                      value: O,
                      displayOnly: !0,
                    }),
                    (0, i.jsxs)(r.Text, {
                      variant: "text-sm/normal",
                      children: [
                        y.intl.string(y.t.x3JFq6),
                        " ",
                        (0, i.jsx)("strong", { children: F }),
                      ],
                    }),
                  ],
                })
              : null,
          ],
        });
      }
      function k(e) {
        let {
            applicationId: t,
            guildId: n,
            locationObject: a,
            onBack: s,
            onClose: o,
            selectedChannelId: v,
            enableSelectedTextChannelInvite: m,
          } = e,
          { analyticsLocations: g } = (0, d.ZP)(c.Z.ACTIVITY_CHANNEL_SELECTOR),
          C = (0, T.T)(null != n ? n : null, null != t ? t : null),
          N = (0, l.e7)([x.Z, p.Z], () => x.Z.getChannel(p.Z.getChannelId())),
          b = (0, l.e7)(
            [h.ZP],
            () => m && !h.ZP.disableInviteWithTextChannelActivityLaunch,
          ),
          j = (0, l.e7)(
            [_.ZP],
            () =>
              null != v &&
              "" !== v &&
              _.ZP.getEmbeddedActivitiesForChannel(v).some(
                (e) => e.applicationId === t,
              ),
          ),
          S = Z(n),
          L = async () => {
            var e;
            if (null != v && "" !== v && null != C && null != n && "" !== n)
              (await (0, I.Z)({
                targetApplicationId:
                  null === (e = C.application) || void 0 === e ? void 0 : e.id,
                locationObject: a,
                channelId: v,
                analyticsLocations: g,
                commandOrigin: u.bB.APPLICATION_LAUNCHER,
              })) &&
                (o(),
                null != N &&
                  S &&
                  b &&
                  (await f.sN({
                    activityChannelId: v,
                    invitedChannelId: N.id,
                    applicationId: C.application.id,
                    location: E.Sbl.ACTIVITY_SHELF,
                  })));
          };
        return (0, i.jsx)(d.Gt, {
          value: g,
          children: (0, i.jsxs)("div", {
            className: A.footerContainer,
            children: [
              (0, i.jsx)(r.Clickable, {
                onClick: s,
                className: A.backToBrowse,
                children: (0, i.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children: y.intl.string(y.t["13/7kZ"]),
                }),
              }),
              null == v
                ? (0, i.jsx)("div", {})
                : (0, i.jsx)(r.Button, {
                    className: A.launchButton,
                    onClick: L,
                    color: j ? r.Button.Colors.GREEN : void 0,
                    fullWidth: !0,
                    children: j
                      ? y.intl.string(y.t.sqe0ho)
                      : y.intl.string(y.t.QO7rOz),
                  }),
            ],
          }),
        });
      }
    },
    264165: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var a = n(120356),
        l = n.n(a),
        r = n(354555);
      t.Z = (e) => {
        let { aspectRatio: t, style: n, className: a, children: s } = e;
        return (0, i.jsx)("div", {
          className: l()(r.outer, a),
          style: { paddingTop: "".concat((1 / t) * 100, "%"), ...n },
          children: (0, i.jsx)("div", { className: r.inner, children: s }),
        });
      };
    },
    687352: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(120356),
        l = n.n(a),
        r = n(481060),
        s = n(925329),
        o = n(932355);
      function c(e) {
        let { className: t, embeddedApps: n, muted: a } = e;
        if (n.length <= 0) return null;
        if (1 === n.length)
          return (0, i.jsx)("div", {
            className: l()(o.container, t, a && o.modeMuted),
            children: (0, i.jsx)(s.Z, {
              game: n[0].application,
              className: o.icon20px,
            }),
          });
        {
          let e = n.length - 1;
          return (0, i.jsxs)("div", {
            className: l()(o.container, t, a && o.modeMuted),
            children: [
              (0, i.jsx)(s.Z, {
                game: n[0].application,
                className: o.icon20px,
              }),
              2 === n.length
                ? (0, i.jsx)(s.Z, {
                    game: n[1].application,
                    className: o.icon20px,
                  })
                : (0, i.jsx)(r.Text, {
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
      var i,
        a = n(200651),
        l = n(192379),
        r = n(120356),
        s = n.n(r),
        o = n(481060),
        c = n(598077),
        d = n(908860),
        u = n(579861);
      function v(e, t, n) {
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
      class m extends (i = l.PureComponent) {
        renderUsers() {
          let {
              users: e,
              max: t,
              renderUser: n = this.defaultRenderUser,
              renderMoreUsers: i,
            } = this.props,
            a = [],
            l = e.length === t ? e.length : t - 1,
            r = 0;
          for (; r < l && r < e.length; ) {
            let t = r === e.length - 1;
            a.push(
              n(e[r] || null, t ? null : d.avatarMasked, "user-".concat(r), t),
            ),
              r++;
          }
          if (r < e.length) {
            let t = Math.min(e.length - r, 99);
            a.push(i("+".concat(t), d.moreUsers, "more-users", t));
          }
          return a;
        }
        renderIcon() {
          return this.props.icon
            ? (0, a.jsx)("div", {
                className: d.iconContainer,
                children: (0, a.jsx)(o.VoiceNormalIcon, {
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
          return (0, a.jsxs)("div", {
            className: s()(e, d.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...e) {
          super(...e),
            v(this, "_ref", void 0),
            v(this, "defaultRenderUser", (e, t, n, i) => {
              let { onClick: l, size: r, guildId: v } = this.props,
                m = e instanceof c.Z ? e : null != e ? e.user : null;
              return null == m
                ? (0, a.jsx)("div", { className: s()(d.emptyUser, t) }, n)
                : (0, a.jsx)(
                    o.Avatar,
                    {
                      tabIndex: 0,
                      src: m.getAvatarURL(v, (0, o.getAvatarSize)(r)),
                      size: r,
                      "aria-label": m.username,
                      className: s()(t, u.cursorPointer, d.avatarSize),
                      onClick: (e) => (null != l ? l(e, m, this._ref) : null),
                    },
                    m.id,
                  );
            });
        }
      }
      v(m, "defaultProps", {
        max: 10,
        renderMoreUsers: function (e, t, n) {
          return (0, a.jsx)("div", { className: t, children: e }, n);
        },
        size: o.AvatarSizes.SIZE_24,
      }),
        (t.Z = m);
    },
    558522: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(325767);
      function l(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: l = "currentColor",
          foreground: r,
          ...s
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, a.Z)(s),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            className: r,
            fill: l,
            d: "M21 5V11.59L18 8.59L14 12.59L10 8.59L6 12.59L3 9.59V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5ZM18 11.42L21 14.42V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V12.42L6 15.42L10 11.42L14 15.42L18 11.42Z",
          }),
        });
      }
    },
    87694: function (e, t, n) {
      e.exports = {
        activityOverlay: "activityOverlay_c17b55",
        actionButton: "actionButton_c17b55",
      };
    },
    941958: function (e, t, n) {
      e.exports = { brokenImageIcon: "brokenImageIcon_b88265" };
    },
    899207: function (e, t, n) {
      e.exports = {
        activityNewBadge: "activityNewBadge_b4a8cd",
        activityUpdatedBadge: "activityUpdatedBadge_b4a8cd",
        tooltip: "tooltip_b4a8cd",
      };
    },
    440775: function (e, t, n) {
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
    59168: function (e, t, n) {
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
    706451: function (e, t, n) {
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
    175818: function (e, t, n) {
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
    760551: function (e, t, n) {
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
    828018: function (e, t, n) {
      e.exports = {
        container: "container_c4a3bb",
        searchBar: "searchBar_c4a3bb",
      };
    },
    267027: function (e, t, n) {
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
    419091: function (e, t, n) {
      e.exports = {
        container: "container_e2cb96",
        acronym: "acronym_e2cb96",
        text: "text_e2cb96",
      };
    },
    354555: function (e, t, n) {
      e.exports = { outer: "outer_b15852", inner: "inner_b15852" };
    },
    932355: function (e, t, n) {
      e.exports = {
        icon20px: "icon20px_e06fdc",
        container: "container_e06fdc",
        overflow: "overflow_e06fdc",
        modeMuted: "modeMuted_e06fdc",
      };
    },
    908860: function (e, t, n) {
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
    579861: function (e, t, n) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
  },
]);
//# sourceMappingURL=53eaf41e5ca38affcffc.js.map
