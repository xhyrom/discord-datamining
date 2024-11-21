"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69673"],
  {
    361205: function (e) {
      e.exports = "/assets/7d5ee9202b25005e7760.svg";
    },
    812320: function (e) {
      e.exports = "/assets/179f38a447da1db28ae2.svg";
    },
    451576: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(399606),
        l = n(592125);
      function a(e) {
        var t;
        let n = (0, i.e7)([l.Z], () => l.Z.getChannel(e));
        return (
          null !== (t = null == n ? void 0 : n.isPrivate()) && void 0 !== t && t
        );
      }
    },
    665811: function (e, t, n) {
      n.d(t, {
        U: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        a = n(542094),
        r = n(388032),
        o = n(87694);
      function s(e) {
        let { action: t, onClick: n } = e,
          s =
            t === a.JS.JOIN
              ? r.intl.string(r.t["4i2vj4"])
              : r.intl.string(r.t["R/FK4O"]),
          c = t === a.JS.JOIN ? l.Button.Colors.PRIMARY : l.Button.Colors.RED;
        return (0, i.jsx)("div", {
          className: o.activityOverlay,
          children: (0, i.jsx)(l.Button, {
            className: o.actionButton,
            onClick: n,
            size: l.Button.Sizes.MEDIUM,
            color: c,
            children: s,
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
      var i = n(200651),
        l = n(192379),
        a = n(481060),
        r = n(911969),
        o = n(388032),
        s = n(899207);
      function c(e) {
        let {
            name: t,
            labelType: n,
            collapsed: c = !1,
            showTooltip: d = !1,
          } = e,
          u =
            n === r.ww.NEW
              ? o.intl.string(o.t.y2b7CA)
              : o.intl.string(o.t["/qdhkp"]),
          v = n === r.ww.NEW ? s.activityNewBadge : s.activityUpdatedBadge,
          [m, x] = l.useState(c ? "" : u);
        if (
          (l.useEffect(() => {
            c
              ? x("")
              : n === r.ww.NEW
                ? x(o.intl.string(o.t.y2b7CA))
                : n === r.ww.UPDATED && x(o.intl.string(o.t["/qdhkp"]));
          }, [c, n]),
          n === r.ww.NONE)
        )
          return null;
        let h = (0, i.jsx)(a.TextBadge, {
          className: v,
          disableColor: !0,
          text: (0, i.jsx)("span", { children: m }),
        });
        if (!d) return h;
        let g = o.intl.formatToPlainString(o.t.Vs2EeX, { activity: t });
        return (0, i.jsx)(a.TooltipContainer, {
          text: g,
          tooltipContentClassName: s.tooltip,
          children: h,
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
      var i = n(200651),
        l = n(192379),
        a = n(120356),
        r = n.n(a),
        o = n(442837),
        s = n(481060),
        c = n(239091),
        d = n(434650),
        u = n(895924),
        v = n(70097),
        m = n(695346),
        x = n(594174),
        h = n(695103),
        g = n(880448),
        C = n(823379),
        p = n(5192),
        T = n(624138),
        _ = n(115130),
        I = n(147865),
        f = n(542094),
        N = n(665811),
        j = n(182906),
        b = n(556505),
        S = n(513202),
        E = n(884338),
        y = n(823531),
        A = n(388032),
        Z = n(440775),
        O = n(969728);
      function L(e) {
        let { value: t, icon: n } = e;
        return (0, i.jsxs)(s.Text, {
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
            channel: l,
            guildId: a,
            large: r = !1,
          } = e,
          c = (0, o.Wu)([x.default], () => {
            var e;
            return Array.from(
              null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e
                ? e
                : [],
            )
              .map((e) => {
                let [t] = e;
                return x.default.getUser(t);
              })
              .filter(C.lm);
          }),
          d = p.ZP.getName(
            a,
            null == l ? void 0 : l.id,
            null == c ? void 0 : c[0],
          );
        if (((d = (0, T.aF)(d, 15)), null == t || 0 === c.length)) {
          var u, v;
          let e = "".concat(
            (0, I.ZP)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0),
          );
          return (
            r && (e = null !== (v = n.description) && void 0 !== v ? v : ""),
            (0, i.jsx)(s.Text, {
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
            (0, i.jsx)(s.Text, {
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
              guildId: a,
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
            channel: a,
            guildId: x,
            locationObject: C,
            onActivityItemVisible: p,
            onActivityItemSelected: T,
            large: E = !1,
          } = e,
          {
            imageBackground: B,
            videoUrl: M,
            activityAction: D,
            joinableEmbeddedApp: R,
            onActivityItemSelected: P,
            labelType: H,
            staffReleasePhase: F,
          } = (0, f.ZP)({
            activityItem: n,
            channel: a,
            guildId: x,
            locationObject: C,
            onActivityItemVisible: p,
            onActivityItemSelected: T,
            embeddedActivitiesManager: S.Z,
            commandOrigin: u.bB.APPLICATION_LAUNCHER,
          }),
          w = (0, o.e7)(
            [_.Z, h.Z],
            () =>
              _.Z.inDevModeForApplication(n.application.id) ||
              h.Z.inTestModeForApplication(n.application.id),
            [n.application.id],
          ),
          { application: V } = n,
          Y = l.useCallback(
            (e) =>
              e &&
              (null == p ? void 0 : p({ applicationId: n.application.id })),
            [n.application.id, p],
          ),
          W = (0, d.O)(Y, 0.8, !0),
          [G, U] = l.useState(!1),
          [q, z] = l.useState(G);
        l.useEffect(() => {
          G && z(!0);
        }, [G]);
        let J = () => U(!0),
          X = () => U(!1),
          Q = m.Sb.useSetting(),
          $ = l.useCallback(() => {
            null == P || P();
          }, [P]);
        return (0, i.jsxs)(s.Clickable, {
          onClick: D === f.JS.START ? $ : void 0,
          onContextMenu: Q
            ? (e) => {
                (0, c.vq)(e, (e) => (0, i.jsx)(y.Z, { application: V, ...e }));
              }
            : void 0,
          className: r()(Z.activityItem, {
            [Z.large]: !0 === E,
            [Z.disabled]: D !== f.JS.START,
          }),
          children: [
            (0, i.jsxs)("div", {
              ref: W,
              className: r()(Z.activityImageContainer, { [Z.large]: !0 === E }),
              onMouseEnter: J,
              onFocus: J,
              onMouseLeave: X,
              onBlur: X,
              children: [
                (0, i.jsx)(j.Z, {
                  imageBackground: B,
                  applicationName: V.name,
                  imageClassName: r()(Z.activityImage, { [Z.large]: !0 === E }),
                  imageNotFoundClassName: Z.brokenImageIconWrapper,
                }),
                null != M && q && D === f.JS.START
                  ? (0, i.jsx)("div", {
                      className: r()(Z.activityVideo, { [Z.videoFadeOut]: !G }),
                      onAnimationEnd: () => (G ? null : z(!1)),
                      children: (0, i.jsx)(v.Z, {
                        className: Z.activityVideo,
                        src: M,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                      }),
                    })
                  : null,
                D !== f.JS.START
                  ? (0, i.jsx)(N.U, { action: D, onClick: $ })
                  : null,
                (0, i.jsx)("div", {
                  className: Z.overlayBadge,
                  children: (0, i.jsx)("div", {
                    className: Z.badgeContainer,
                    children: (0, i.jsx)(b.Z, { name: V.name, labelType: H }),
                  }),
                }),
                w
                  ? (0, i.jsx)(s.Tooltip, {
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
                  ? (0, i.jsx)(s.Text, {
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
                    (0, i.jsx)(s.Heading, {
                      className: Z.activityTitleText,
                      variant: "heading-md/semibold",
                      color: "interactive-active",
                      children: V.name,
                    }),
                    null != F
                      ? (0, i.jsx)(s.Tooltip, {
                          text: F,
                          children: (e) =>
                            (0, i.jsx)("img", {
                              className: Z.staffBadge,
                              alt: F,
                              src: O,
                              ...e,
                            }),
                        })
                      : null,
                  ],
                }),
                (0, i.jsx)(k, {
                  activity: null == R ? void 0 : R.embeddedActivity,
                  application: V,
                  channel: a,
                  guildId: x,
                  large: E,
                }),
                (0, i.jsx)("div", {
                  className: Z.activityTagsContainer,
                  children: V.tags
                    .slice(0, 3)
                    .map((e) =>
                      (0, i.jsx)(
                        L,
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
        l = n(192379),
        a = n(120356),
        r = n.n(a),
        o = n(990547),
        s = n(442837),
        c = n(477690),
        d = n(481060),
        u = n(110924),
        v = n(40851),
        m = n(367907),
        x = n(565384),
        h = n(906732),
        g = n(835473),
        C = n(600164),
        p = n(592125),
        T = n(451478),
        _ = n(626135),
        I = n(585483),
        f = n(624138),
        N = n(115130),
        j = n(566620),
        b = n(421),
        S = n(895395),
        E = n(49978),
        y = n(427996),
        A = n(701488),
        Z = n(981631),
        O = n(388032),
        L = n(59168),
        k = n(361205),
        B = n(812320);
      let M = (0, f.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
        D = (0, f.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
        R =
          (0, f.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) +
          M +
          (0, f.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);
      function P(e) {
        let {
            channel: t,
            guildId: n,
            locationObject: a,
            onClose: c,
            initialSelectedApplicationId: v,
            initialSlide: T = A.ag.DIRECTORY,
            enableSelectedTextChannelInvite: f,
            analyticsLocations: M,
            ...R
          } = e,
          P = (0, s.e7)([N.Z], () => N.Z.getIsEnabled(), []),
          { analyticsLocations: F } = (0, h.ZP)(M),
          [w, V] = l.useState(T),
          Y = (0, u.Z)(w),
          [W, G] = l.useState(null),
          [U, q] = l.useState(v),
          [z, J] = l.useState(void 0),
          [X] = (0, g.Z)(null == U ? [] : [U]),
          Q = l.useRef(null),
          $ = l.useMemo(
            () => ({
              application_id: U,
              source_section: a.section,
              impression_group: o.ImpressionGroups.ACTIVITY_SHELF_FLOW,
            }),
            [a.section, U],
          );
        l.useEffect(() => {
          if (
            w === A.ag.DIRECTORY &&
            null != Y &&
            Y !== A.ag.DIRECTORY &&
            null != W
          ) {
            var e;
            null === (e = Q.current) || void 0 === e || e.scrollTo({ top: W });
          }
        }, [W, Y, w]);
        let K = l.useCallback((e) => {
            var t;
            let { applicationId: n } = e,
              i =
                null === (t = Q.current) || void 0 === t ? void 0 : t.scrollTop;
            null != i && G(i), q(n), V(A.ag.SELECT_CHANNEL);
          }, []),
          ee = l.useCallback((e) => {
            let { applicationId: t } = e;
            q(t), V(A.ag.DETAIL_PAGE);
          }, []);
        l.useEffect(() => {
          _.default.track(Z.rMx.OPEN_MODAL, {
            type: "Activity Shelf",
            channel_id: null == t ? void 0 : t.id,
            guild_id: n,
          });
        }, [t, n]),
          l.useEffect(
            () => (
              I.S.subscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, K),
              () => {
                I.S.unsubscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, K);
              }
            ),
            [K],
          ),
          l.useEffect(
            () => (
              I.S.subscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee),
              () => {
                I.S.unsubscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee);
              }
            ),
            [ee],
          ),
          l.useEffect(() => {
            j.ux();
          }, []);
        let et = () => {
            V(A.ag.DIRECTORY);
          },
          en = l.useRef(Date.now()),
          ei = l.useRef(!1),
          el = l.useRef([]),
          ea = l.useCallback((e) => {
            null == el.current.find((t) => t === e.applicationId) &&
              el.current.push(e.applicationId);
          }, []);
        return (
          l.useEffect(() => {
            let e = Q.current;
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
          l.useEffect(
            () => () => {
              let e = {
                  activity_tiles_viewed: el.current,
                  duration_ms: Date.now() - en.current,
                  scrolled: ei.current,
                },
                i = {
                  channel_id: null == t ? void 0 : t.id,
                  guild_id: n,
                  location: (0, x.k$)(),
                  ...(0, m.hH)(n),
                  ...(0, m.v_)(p.Z.getChannel(null == t ? void 0 : t.id)),
                  ...$,
                  ...e,
                };
              _.default.track(Z.rMx.ACTIVITY_SHELF_CLOSE, i);
            },
            [null == t ? void 0 : t.id, $, n],
          ),
          (0, i.jsx)(h.Gt, {
            value: F,
            children: (0, i.jsxs)(d.ModalRoot, {
              className: r()(L.root),
              "aria-label": O.intl.string(O.t.shUONj),
              ...R,
              children: [
                (0, i.jsx)("img", {
                  alt: O.intl.string(O.t["3Y9xdH"]),
                  src: k,
                  className: L.shelfTopBackground,
                }),
                (0, i.jsx)("img", {
                  alt: O.intl.string(O.t["3Y9xdH"]),
                  src: B,
                  className: L.shelfTopForeground,
                }),
                (0, i.jsxs)(d.ModalHeader, {
                  separator: !1,
                  justify: C.Z.Justify.BETWEEN,
                  className: r()(L.modalHeader),
                  children: [
                    (0, i.jsxs)("div", {
                      className: L.headerTextContainer,
                      children: [
                        (() => {
                          if (w === A.ag.DETAIL_PAGE)
                            return null == X
                              ? null
                              : (0, i.jsxs)("div", {
                                  className: L.activityShelfTitle,
                                  children: [
                                    (0, i.jsx)(d.Heading, {
                                      variant: "heading-xl/extrabold",
                                      children: X.name,
                                    }),
                                    (0, i.jsxs)(d.Clickable, {
                                      className: L.headerBackButton,
                                      onClick: et,
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
                          if (w === A.ag.DIRECTORY)
                            return (0, i.jsx)(d.Text, {
                              variant: "text-sm/normal",
                              children: P
                                ? O.intl.string(O.t.tZ3FNj)
                                : O.intl.string(O.t.Cye3SU),
                            });
                          return null;
                        })(),
                      ],
                    }),
                    (0, i.jsx)(d.ModalCloseButton, {
                      className: L.modalCloseButton,
                      onClick: c,
                    }),
                  ],
                }),
                w === A.ag.DIRECTORY && P ? (0, i.jsx)(y.W, {}) : null,
                (0, i.jsx)("div", { className: L.modalDivider }),
                (0, i.jsxs)(d.Slides, {
                  activeSlide: w,
                  centered: !1,
                  width: D,
                  children: [
                    (0, i.jsx)(d.Slide, {
                      id: A.ag.DIRECTORY,
                      impressionName: o.ImpressionNames.ACTIVITY_SHELF,
                      impressionProperties: {
                        source_section: a.section,
                        impression_group:
                          o.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                      },
                      children: (0, i.jsx)(H, {
                        slide: w,
                        children: (0, i.jsx)(S.Z, {
                          scrollerRef: Q,
                          channel: t,
                          guildId: n,
                          locationObject: a,
                          onActivityItemVisible: ea,
                          onClose: c,
                        }),
                      }),
                    }),
                    (0, i.jsx)(d.Slide, {
                      id: A.ag.SELECT_CHANNEL,
                      impressionName:
                        o.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                      impressionProperties: {
                        source_section: a.section,
                        impression_group:
                          o.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                        application_id: U,
                      },
                      children: (0, i.jsx)(H, {
                        slide: w,
                        children: (0, i.jsx)(E.Z, {
                          applicationId: U,
                          selectedChannelId: z,
                          setSelectedChannelId: J,
                          guildId: n,
                          enableSelectedTextChannelInvite: f,
                        }),
                      }),
                    }),
                    (0, i.jsx)(d.Slide, {
                      id: A.ag.DETAIL_PAGE,
                      impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
                      impressionProperties: $,
                      children: (0, i.jsx)(H, {
                        slide: w,
                        children:
                          null == U
                            ? null
                            : (0, i.jsx)(b.Z, {
                                applicationId: U,
                                channelId: null == t ? void 0 : t.id,
                                guildId: n,
                                onActivityLaunch: c,
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
                    switch (w) {
                      case A.ag.DIRECTORY:
                        return (0, i.jsx)(S.d, {});
                      case A.ag.SELECT_CHANNEL:
                        return (0, i.jsx)(E.q, {
                          onBack: et,
                          onClose: c,
                          guildId: n,
                          applicationId: U,
                          locationObject: a,
                          selectedChannelId: z,
                          enableSelectedTextChannelInvite: f,
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
          a = (0, s.e7)([N.Z], () => N.Z.getIsEnabled(), []),
          o = l.useContext(v.ZP),
          c = (0, s.e7)([T.Z], () => T.Z.windowSize(o.windowId).height, [
            o.windowId,
          ]);
        return (0, i.jsx)("div", {
          className: r()(L.slideContentOuterContainerSquished, {
            [L.slideContentOuterContainerSquishedWithDev]:
              n === A.ag.DIRECTORY && a,
            [L.slideContentOuterContainerTall]: n === A.ag.DIRECTORY && c > R,
            [L.slideContentOuterContainerTallWithDev]:
              n === A.ag.DIRECTORY && c > R && a,
            [L.slideContentOuterContainerNoMetaTextSquished]:
              n === A.ag.SELECT_CHANNEL,
            [L.slideContentOuterContainerNoMetaTextTall]:
              n === A.ag.SELECT_CHANNEL && c > R,
            [L.slideContentOuterContainerNoMetaTextNoFooterSquished]:
              n === A.ag.DETAIL_PAGE,
            [L.slideContentOuterContainerNoMetaTextNoFooterTall]:
              n === A.ag.DETAIL_PAGE && c > R,
          }),
          children: t,
        });
      };
    },
    421: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        a = n(399606),
        r = n(481060),
        o = n(100527),
        s = n(906732),
        c = n(895924),
        d = n(70097),
        u = n(592125),
        v = n(566620),
        m = n(122613),
        x = n(678173),
        h = n(636508),
        g = n(696068),
        C = n(361213),
        p = n(778569),
        T = n(182906),
        _ = n(412019),
        I = n(431136),
        f = n(226799),
        N = n(388032),
        j = n(706451);
      function b(e) {
        var t;
        let {
            applicationId: n,
            guildId: a,
            channelId: c,
            onActivityLaunch: u,
          } = e,
          { analyticsLocations: m } = (0, s.ZP)(
            o.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS,
          );
        l.useEffect(() => {
          (0, v.w1)({ guildId: a });
        }, [a]);
        let h = (0, p.Z)({ applicationId: null != n ? n : "", size: 2048 }),
          g = (0, x.T)(null != a ? a : null, n);
        if (null == g) return null;
        let T =
            null != g.activity.activity_preview_video_asset_id
              ? (0, C.Z)(n, g.activity.activity_preview_video_asset_id)
              : null,
          _ = f.o[n],
          I =
            (null == _ ? void 0 : _.playersSuggestionMin) != null &&
            (null == _ ? void 0 : _.playersSuggestionMax) != null
              ? ""
                  .concat(_.playersSuggestionMin, " - ")
                  .concat(_.playersSuggestionMax)
              : void 0;
        return (0, i.jsx)(s.Gt, {
          value: m,
          children: (0, i.jsx)("div", {
            className: j.scrollContainer,
            children: (0, i.jsxs)(r.Scroller, {
              className: j.scroller,
              children: [
                (0, i.jsx)("div", {
                  className: j.launcherOuterContainer,
                  children: (0, i.jsx)(S, {
                    activityItem: g,
                    onLaunch: u,
                    channelId: c,
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: j.activityDetailsContainer,
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        null != T
                          ? (0, i.jsx)("div", {
                              className: j.heroVideoContainer,
                              children: (0, i.jsx)(d.Z, {
                                loop: !0,
                                autoPlay: !0,
                                muted: !0,
                                className: j.heroVideo,
                                src: T,
                                poster: h.url,
                              }),
                            })
                          : null,
                        (0, i.jsx)("div", {
                          className: j.detailsTitle,
                          children: (0, i.jsx)(r.Heading, {
                            variant: "heading-xxl/bold",
                            children: g.application.name,
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: j.detailsDetails,
                          children: [
                            null != I
                              ? (0, i.jsxs)("div", {
                                  className: j.detailItem,
                                  children: [
                                    (0, i.jsx)(r.GroupIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                    }),
                                    (0, i.jsx)(r.Text, {
                                      variant: "text-xs/semibold",
                                      className: j.detailItemText,
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
                                  className: j.detailItem,
                                  children: [
                                    (0, i.jsx)(r.HourglassIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                    }),
                                    (0, i.jsx)(r.Text, {
                                      variant: "text-xs/semibold",
                                      className: j.detailItemText,
                                      children: N.intl.format(N.t.dehcUV, {
                                        nMinutes: _.timeSuggestionMinutes,
                                      }),
                                    }),
                                  ],
                                })
                              : null,
                            (0, i.jsxs)("div", {
                              className: j.detailItem,
                              children: [
                                (0, i.jsx)(r.TagsIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                }),
                                (0, i.jsx)(r.Text, {
                                  variant: "text-xs/semibold",
                                  className: j.detailItemText,
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
                      className: j.detailsDescription,
                      children: g.application.description,
                    }),
                    (0, i.jsx)("div", { className: j.divider }),
                    (0, i.jsx)("div", {
                      className: j.imagesContainer,
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
                            className: j.activityImage,
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
        var t, o;
        let { activityItem: d, onLaunch: v, channelId: x } = e,
          C = (0, p.Z)({ applicationId: d.application.id, size: 2048 }),
          { analyticsLocations: f } = (0, s.ZP)(),
          [b, S] = l.useState(
            null !==
              (t = (0, h.$)({ allowGdmActivityChannelSuggestion: !0 })) &&
              void 0 !== t
              ? t
              : void 0,
          ),
          [E, y] = l.useState(
            null !==
              (o = (0, g.d)({
                guildId: b,
                allowGdmActivityChannelSuggestion: !0,
              })) && void 0 !== o
              ? o
              : void 0,
          ),
          A = (0, a.e7)([u.Z], () => u.Z.getChannel(E), [E]),
          Z = (0, h.W)(),
          O = (0, g.F)(b),
          L = l.useCallback(async () => {
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
                analyticsLocations: f,
                commandOrigin: c.bB.APPLICATION_LAUNCHER,
              }).then(v);
          }, [d, f, v, E]),
          k = l.useCallback(() => {
            (0, r.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("60133"),
                n.e("37493"),
              ]).then(n.bind(n, 827940));
              return (t) =>
                (0, i.jsx)(e, { activityItem: d, ...t, analyticsLocations: f });
            });
          }, [d, f]),
          B =
            null == A ||
            (null != A.guild_id &&
              !(
                null != b &&
                null != E &&
                Z.some((e) => e.value === b) &&
                O.some((e) => e.value.channel.id === E)
              ) &&
              !0);
        return (0, i.jsxs)("div", {
          className: j.launcherInnerContainer,
          children: [
            (0, i.jsx)(T.Z, {
              applicationName: d.application.name,
              imageBackground: C,
              imageClassName: j.launchImage,
              imageNotFoundClassName: j.brokenLaunchImage,
            }),
            (0, i.jsx)(r.Text, {
              variant: "text-md/medium",
              children: N.intl.string(N.t.lfSF4O),
            }),
            null == x
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(r.Select, {
                      placeholder: N.intl.string(N.t.etZ9tb),
                      optionClassName: j.__invalid_option,
                      options: Z,
                      renderOptionValue: (e) => {
                        let t = e.find((e) => e.value === b);
                        return null == t
                          ? null
                          : (0, i.jsx)(I.m, { guildId: t.value });
                      },
                      renderOptionLabel: (e) => {
                        let { value: t } = e;
                        return (0, i.jsx)(I.m, { guildId: t });
                      },
                      isSelected: (e) => e === b,
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
                      optionClassName: j.__invalid_option,
                      options: O,
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
                        let e = O.find((e) => e.value.channel.id === E);
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
                      disabled: B,
                      onClick: L,
                      children: N.intl.string(N.t.I0v0Qk),
                    }),
                    (0, i.jsx)("div", { className: j.divider }),
                    (0, i.jsx)(r.Button, {
                      fullWidth: !0,
                      color: r.Button.Colors.PRIMARY,
                      onClick: k,
                      children: N.intl.string(N.t.RDE0SU),
                    }),
                  ],
                })
              : (0, i.jsxs)("div", {
                  className: j.singleRowShareContainer,
                  children: [
                    (0, i.jsx)(r.Button, {
                      fullWidth: !0,
                      disabled: B,
                      onClick: L,
                      children: N.intl.string(N.t.I0v0Qk),
                    }),
                    (0, i.jsx)(r.Button, {
                      className: j.shareIconButton,
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
        l = n(192379),
        a = n(120356),
        r = n.n(a),
        o = n(468194),
        s = n(442837),
        c = n(477690),
        d = n(481060),
        u = n(100527),
        v = n(906732),
        m = n(430824),
        x = n(594174),
        h = n(115130),
        g = n(566620),
        C = n(127255),
        p = n(880308),
        T = n(451576),
        _ = n(439934),
        I = n(701488),
        f = n(388032),
        N = n(175818);
      let j = (0, o.Mg)(
          c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP,
        ),
        b = (0, o.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
        S = (0, o.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
      function E(e) {
        let {
            channel: t,
            guildId: n,
            locationObject: a,
            onClose: o,
            onActivityItemVisible: c,
            scrollerRef: I,
          } = e,
          [E, y] = l.useState(0),
          A = (0, C.Z)({ guildId: n, enableFilter: !0 }),
          Z = (0, s.e7)([x.default], () => x.default.getCurrentUser()),
          O = (0, s.e7)([m.Z], () => m.Z.getGuild(n), [n]),
          { analyticsLocations: L } = (0, v.ZP)(u.Z.ACTIVITY_DIRECTORY),
          k = (0, T.Z)(null == t ? void 0 : t.id),
          { isDeveloperActivityShelfEnabled: B, filter: M } = (0, s.cj)(
            [h.Z],
            () => ({
              filter: h.Z.getFilter(),
              isDeveloperActivityShelfEnabled: h.Z.getIsEnabled(),
            }),
          );
        if (
          (l.useEffect(() => {
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
          l.useEffect(() => {
            (k || null != n) && (0, g.w1)({ guildId: n, force: !0 });
          }, [n, k]),
          (0, p.g)(),
          (null == O && !k) || null == Z)
        )
          return null;
        let D = A.length > 0;
        return (0, i.jsx)(v.Gt, {
          value: L,
          children: (0, i.jsxs)("div", {
            className: N.scrollContainer,
            children: [
              D
                ? (0, i.jsx)("div", {
                    className: N.scrollBackgroundContainer,
                    style: { top: -E },
                    children: (0, i.jsx)("div", {
                      className: r()(N.scrollTierBackground),
                      style: {
                        height: ((e) => {
                          let t = 1 === e.length;
                          return j + Math.ceil(e.length / 2) * (t ? S : b);
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
                  D
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
                                locationObject: a,
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
                    : B && M.length > 0
                      ? (0, i.jsx)(d.Text, {
                          variant: "text-md/normal",
                          className: N.filterError,
                          children: f.intl.format(f.t.p0PRFB, { filter: M }),
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
          children: f.intl.format(f.t.fijcEB, { surveyURL: I.Es }),
        });
      }
    },
    49978: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return L;
        },
        q: function () {
          return k;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        a = n(442837),
        r = n(481060),
        o = n(153867),
        s = n(607070),
        c = n(100527),
        d = n(906732),
        u = n(895924),
        v = n(264165),
        m = n(70097),
        x = n(740492),
        h = n(592125),
        g = n(430824),
        C = n(496675),
        p = n(944486),
        T = n(566620),
        _ = n(317381),
        I = n(122613),
        f = n(678173),
        N = n(696068),
        j = n(361213),
        b = n(778569),
        S = n(412019),
        E = n(981631),
        y = n(388032),
        A = n(760551);
      function Z(e) {
        return (0, a.e7)(
          [g.Z, C.Z],
          () => {
            let t = g.Z.getGuild(e);
            return null != t && C.Z.can(E.Plq.CREATE_INSTANT_INVITE, t);
          },
          [e],
        );
      }
      let O = ["embedded_background"];
      function L(e) {
        var t, n;
        let {
            applicationId: c,
            guildId: d,
            selectedChannelId: u,
            setSelectedChannelId: C,
            enableSelectedTextChannelInvite: _,
          } = e,
          I = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
          E = (0, f.T)(null != d ? d : null, null != c ? c : null),
          [L, k] = l.useState(
            _ && !x.ZP.disableInviteWithTextChannelActivityLaunch,
          ),
          B = (0, N.F)(d);
        l.useEffect(() => {
          var e;
          T.w1({ guildId: d }),
            C(
              null !== (e = (0, N.d)({ guildId: d })) && void 0 !== e
                ? e
                : void 0,
            );
        }, [d, C]);
        let M = null == E ? void 0 : E.activity.activity_preview_video_asset_id,
          D =
            null != M
              ? (0, j.Z)(
                  null !== (t = null == E ? void 0 : E.application.id) &&
                    void 0 !== t
                    ? t
                    : "",
                  M,
                )
              : null,
          { url: R } = (0, b.Z)({
            applicationId:
              null !== (n = null == E ? void 0 : E.application.id) &&
              void 0 !== n
                ? n
                : "",
            size: 1024,
            names: O,
          }),
          P = (0, a.e7)([g.Z], () => g.Z.getGuild(d)),
          H = (0, a.e7)([h.Z, p.Z], () => h.Z.getChannel(p.Z.getChannelId())),
          F = Z(null != d ? d : void 0);
        if ((null == E ? void 0 : E.application) == null || null == P)
          return null;
        let w =
          (null == H ? void 0 : H.name) == null ||
          (null == H ? void 0 : H.name) === ""
            ? y.intl.string(y.t.PlAffn)
            : "#".concat(H.name);
        return (0, i.jsxs)(r.Scroller, {
          className: A.scroll,
          children: [
            null != D || null != R
              ? (0, i.jsx)(v.Z, {
                  aspectRatio: 16 / 9,
                  className: A.imageContainer,
                  children: (0, i.jsx)(m.Z, {
                    className: A.video,
                    src: D,
                    loop: !0,
                    autoPlay: !I,
                    poster: R,
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
              options: B,
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
                let e = B.find((e) => e.value.channel.id === u);
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
            F && _
              ? (0, i.jsxs)(r.Clickable, {
                  className: A.checkboxContainer,
                  onClick: () => {
                    let e = !L;
                    o.ZP.updatedUnsyncedSettings({
                      disableInviteWithTextChannelActivityLaunch: !e,
                    }),
                      k(e);
                  },
                  children: [
                    (0, i.jsx)(r.Checkbox, {
                      type: r.Checkbox.Types.INVERTED,
                      className: A.checkbox,
                      value: L,
                      displayOnly: !0,
                    }),
                    (0, i.jsxs)(r.Text, {
                      variant: "text-sm/normal",
                      children: [
                        y.intl.string(y.t.x3JFq6),
                        " ",
                        (0, i.jsx)("strong", { children: w }),
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
            locationObject: l,
            onBack: o,
            onClose: s,
            selectedChannelId: v,
            enableSelectedTextChannelInvite: m,
          } = e,
          { analyticsLocations: g } = (0, d.ZP)(c.Z.ACTIVITY_CHANNEL_SELECTOR),
          C = (0, f.T)(null != n ? n : null, null != t ? t : null),
          N = (0, a.e7)([h.Z, p.Z], () => h.Z.getChannel(p.Z.getChannelId())),
          j = (0, a.e7)(
            [x.ZP],
            () => m && !x.ZP.disableInviteWithTextChannelActivityLaunch,
          ),
          b = (0, a.e7)(
            [_.ZP],
            () =>
              null != v &&
              "" !== v &&
              _.ZP.getEmbeddedActivitiesForChannel(v).some(
                (e) => e.applicationId === t,
              ),
          ),
          S = Z(n),
          O = async () => {
            var e;
            if (null != v && "" !== v && null != C && null != n && "" !== n)
              (await (0, I.Z)({
                targetApplicationId:
                  null === (e = C.application) || void 0 === e ? void 0 : e.id,
                locationObject: l,
                channelId: v,
                analyticsLocations: g,
                commandOrigin: u.bB.APPLICATION_LAUNCHER,
              })) &&
                (s(),
                null != N &&
                  S &&
                  j &&
                  (await T.sN({
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
                onClick: o,
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
                    onClick: O,
                    color: b ? r.Button.Colors.GREEN : void 0,
                    fullWidth: !0,
                    children: b
                      ? y.intl.string(y.t.sqe0ho)
                      : y.intl.string(y.t.QO7rOz),
                  }),
            ],
          }),
        });
      }
    },
    823531: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        a = n(239091),
        r = n(299206),
        o = n(388032);
      function s(e) {
        let { application: t, onSelect: n } = e,
          s = (0, r.Z)({ id: t.id, label: o.intl.string(o.t["+NP/b2"]) });
        return (0, i.jsx)(l.Menu, {
          navId: "activity-shelf-item-context",
          onClose: a.Zy,
          "aria-label": o.intl.string(o.t.WkcHT0),
          onSelect: n,
          children: (0, i.jsx)(
            l.MenuGroup,
            { children: s },
            "developer-actions",
          ),
        });
      }
    },
    264165: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var l = n(120356),
        a = n.n(l),
        r = n(354555);
      t.Z = (e) => {
        let { aspectRatio: t, style: n, className: l, children: o } = e;
        return (0, i.jsx)("div", {
          className: a()(r.outer, l),
          style: { paddingTop: "".concat((1 / t) * 100, "%"), ...n },
          children: (0, i.jsx)("div", { className: r.inner, children: o }),
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
      var l = n(120356),
        a = n.n(l),
        r = n(481060),
        o = n(925329),
        s = n(932355);
      function c(e) {
        let { className: t, embeddedApps: n, muted: l } = e;
        if (n.length <= 0) return null;
        if (1 === n.length)
          return (0, i.jsx)("div", {
            className: a()(s.container, t, l && s.modeMuted),
            children: (0, i.jsx)(o.Z, {
              game: n[0].application,
              className: s.icon20px,
            }),
          });
        {
          let e = n.length - 1;
          return (0, i.jsxs)("div", {
            className: a()(s.container, t, l && s.modeMuted),
            children: [
              (0, i.jsx)(o.Z, {
                game: n[0].application,
                className: s.icon20px,
              }),
              2 === n.length
                ? (0, i.jsx)(o.Z, {
                    game: n[1].application,
                    className: s.icon20px,
                  })
                : (0, i.jsx)(r.Text, {
                    className: s.overflow,
                    variant: "text-xs/bold",
                    color: "interactive-active",
                    children: "+".concat(e),
                  }),
            ],
          });
        }
      }
    },
    87694: function (e, t, n) {
      e.exports = {
        activityOverlay: "activityOverlay_c17b55",
        actionButton: "actionButton_c17b55",
      };
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
  },
]);
//# sourceMappingURL=02530ace998a96ef3e1a.js.map
