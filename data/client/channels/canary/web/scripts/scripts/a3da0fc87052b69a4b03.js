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
          return r;
        },
      });
      var i = n(735250);
      n(470079);
      var a = n(481060),
        l = n(542094),
        s = n(689938),
        o = n(87694);
      function r(e) {
        let { action: t, onClick: n } = e,
          r =
            t === l.JS.JOIN
              ? s.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
              : s.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
          c = t === l.JS.JOIN ? a.Button.Colors.PRIMARY : a.Button.Colors.RED;
        return (0, i.jsx)("div", {
          className: o.activityOverlay,
          children: (0, i.jsx)(a.Button, {
            className: o.actionButton,
            onClick: n,
            size: a.Button.Sizes.MEDIUM,
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
      var i = n(735250),
        a = n(470079),
        l = n(481060),
        s = n(911969),
        o = n(689938),
        r = n(899207);
      function c(e) {
        let {
            name: t,
            labelType: n,
            collapsed: c = !1,
            showTooltip: d = !1,
          } = e,
          u = n === s.ww.NEW ? o.Z.Messages.NEW : o.Z.Messages.UPDATED,
          v = n === s.ww.NEW ? r.activityNewBadge : r.activityUpdatedBadge,
          [I, _] = a.useState(c ? "" : u);
        if (
          (a.useEffect(() => {
            c
              ? _("")
              : n === s.ww.NEW
                ? _(o.Z.Messages.NEW)
                : n === s.ww.UPDATED && _(o.Z.Messages.UPDATED);
          }, [c, n]),
          n === s.ww.NONE)
        )
          return null;
        let T = (0, i.jsx)(l.TextBadge, {
          className: v,
          disableColor: !0,
          text: (0, i.jsx)("span", { children: I }),
        });
        if (!d) return T;
        let m = o.Z.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
          activity: t,
        });
        return (0, i.jsx)(l.TooltipContainer, {
          text: m,
          tooltipContentClassName: r.tooltip,
          children: T,
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
      var i = n(735250),
        a = n(470079),
        l = n(120356),
        s = n.n(l),
        o = n(442837),
        r = n(481060),
        c = n(239091),
        d = n(434650),
        u = n(213459),
        v = n(895924),
        I = n(70097),
        _ = n(695346),
        T = n(594174),
        m = n(695103),
        C = n(880448),
        E = n(823379),
        x = n(5192),
        h = n(624138),
        g = n(115130),
        p = n(147865),
        f = n(542094),
        N = n(665811),
        S = n(182906),
        A = n(556505),
        j = n(513202),
        D = n(884338),
        b = n(823531),
        Z = n(689938),
        M = n(440775),
        y = n(969728);
      function L(e) {
        let { value: t, icon: n } = e;
        return (0, i.jsxs)(r.Text, {
          className: M.activityTag,
          color: "interactive-normal",
          variant: "text-xs/semibold",
          children: [
            (0, E.lm)(n) ? (0, i.jsx)(n, { className: M.icon }) : null,
            t,
          ],
        });
      }
      function O(e) {
        let {
            activity: t,
            application: n,
            channel: a,
            guildId: l,
            large: s = !1,
          } = e,
          c = (0, o.Wu)([T.default], () => {
            var e;
            return Array.from(
              null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e
                ? e
                : [],
            )
              .map((e) => {
                let [t] = e;
                return T.default.getUser(t);
              })
              .filter(E.lm);
          }),
          d = x.ZP.getName(
            l,
            null == a ? void 0 : a.id,
            null == c ? void 0 : c[0],
          );
        if (((d = (0, h.aF)(d, 15)), null == t || 0 === c.length)) {
          var u, v;
          let e = "".concat(
            (0, p.ZP)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0),
          );
          return (
            s && (e = null !== (v = n.description) && void 0 !== v ? v : ""),
            (0, i.jsx)(r.Text, {
              className: M.activitySubtitleText,
              variant: "text-xs/normal",
              color: "interactive-normal",
              children: e,
            })
          );
        }
        return (0, i.jsxs)("div", {
          className: M.activitySubtitleText,
          children: [
            (0, i.jsx)(r.Text, {
              className: M.usersArePlayingText,
              variant: "text-xs/normal",
              children:
                c.length > 1
                  ? Z.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format(
                      { username: d, count: c.length - 1 },
                    )
                  : Z.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
                      username: d,
                    }),
            }),
            (0, i.jsx)(D.Z, {
              size: s ? D.u.SIZE_24 : D.u.SIZE_16,
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
            guildId: T,
            locationObject: E,
            onActivityItemVisible: x,
            onActivityItemSelected: h,
            large: D = !1,
          } = e,
          {
            imageBackground: B,
            videoUrl: R,
            activityAction: V,
            joinableEmbeddedApp: k,
            onActivityItemSelected: H,
            labelType: P,
            staffReleasePhase: F,
          } = (0, f.ZP)({
            activityItem: n,
            channel: l,
            guildId: T,
            locationObject: E,
            onActivityItemVisible: x,
            onActivityItemSelected: h,
            embeddedActivitiesManager: j.Z,
            commandOrigin: v.bB.APPLICATION_LAUNCHER,
          }),
          Y = (0, o.e7)(
            [g.Z, m.Z],
            () =>
              g.Z.inDevModeForApplication(n.application.id) ||
              m.Z.inTestModeForApplication(n.application.id),
            [n.application.id],
          ),
          { application: w } = n,
          W = a.useCallback(
            (e) =>
              e &&
              (null == x ? void 0 : x({ applicationId: n.application.id })),
            [n.application.id, x],
          ),
          G = (0, d.O)(W, 0.8, !0),
          [U, q] = a.useState(!1),
          [z, J] = a.useState(U);
        a.useEffect(() => {
          U && J(!0);
        }, [U]);
        let K = () => q(!0),
          X = () => q(!1),
          $ = _.Sb.useSetting(),
          Q = a.useCallback(() => {
            null == H || H(),
              u.ZP.maybeQueryForInstallLessApps(
                w.id,
                null == l ? void 0 : l.id,
              );
          }, [w.id, null == l ? void 0 : l.id, H]);
        return (0, i.jsxs)(r.Clickable, {
          onClick: V === f.JS.START ? Q : void 0,
          onContextMenu: $
            ? (e) => {
                (0, c.vq)(e, (e) => (0, i.jsx)(b.Z, { application: w, ...e }));
              }
            : void 0,
          className: s()(M.activityItem, {
            [M.large]: !0 === D,
            [M.disabled]: V !== f.JS.START,
          }),
          children: [
            (0, i.jsxs)("div", {
              ref: G,
              className: s()(M.activityImageContainer, { [M.large]: !0 === D }),
              onMouseEnter: K,
              onFocus: K,
              onMouseLeave: X,
              onBlur: X,
              children: [
                (0, i.jsx)(S.Z, {
                  imageBackground: B,
                  applicationName: w.name,
                  imageClassName: s()(M.activityImage, { [M.large]: !0 === D }),
                  imageNotFoundClassName: M.brokenImageIconWrapper,
                }),
                null != R && z && V === f.JS.START
                  ? (0, i.jsx)("div", {
                      className: s()(M.activityVideo, { [M.videoFadeOut]: !U }),
                      onAnimationEnd: () => (U ? null : J(!1)),
                      children: (0, i.jsx)(I.Z, {
                        className: M.activityVideo,
                        src: R,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                      }),
                    })
                  : null,
                V !== f.JS.START
                  ? (0, i.jsx)(N.U, { action: V, onClick: Q })
                  : null,
                (0, i.jsx)("div", {
                  className: M.overlayBadge,
                  children: (0, i.jsx)("div", {
                    className: M.badgeContainer,
                    children: (0, i.jsx)(A.Z, { name: w.name, labelType: P }),
                  }),
                }),
                Y
                  ? (0, i.jsx)(r.Tooltip, {
                      text: Z.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
                      children: (e) =>
                        (0, i.jsx)("div", {
                          className: M.devShelfBadge,
                          ...e,
                          children: (0, i.jsx)(C.Z, {
                            className: M.devShelfIcon,
                          }),
                        }),
                    })
                  : null,
              ],
            }),
            (0, i.jsxs)("div", {
              className: s()(M.activityTextContainer, { [M.large]: D }),
              children: [
                D
                  ? (0, i.jsx)(r.Text, {
                      className: M.activityMaxParticipantsLarge,
                      variant: "text-xs/normal",
                      color: "interactive-normal",
                      children: (0, p.ZP)(
                        null !== (t = w.maxParticipants) && void 0 !== t
                          ? t
                          : 0,
                      ),
                    })
                  : null,
                (0, i.jsxs)("div", {
                  className: M.activityName,
                  children: [
                    (0, i.jsx)(r.Heading, {
                      className: M.activityTitleText,
                      variant: "heading-md/semibold",
                      color: "interactive-active",
                      children: w.name,
                    }),
                    null != F
                      ? (0, i.jsx)(r.Tooltip, {
                          text: F,
                          children: (e) =>
                            (0, i.jsx)("img", {
                              className: M.staffBadge,
                              alt: F,
                              src: y,
                              ...e,
                            }),
                        })
                      : null,
                  ],
                }),
                (0, i.jsx)(O, {
                  activity: null == k ? void 0 : k.embeddedActivity,
                  application: w,
                  channel: l,
                  guildId: T,
                  large: D,
                }),
                (0, i.jsx)("div", {
                  className: M.activityTagsContainer,
                  children: w.tags
                    .slice(0, 3)
                    .map((e) =>
                      (0, i.jsx)(
                        L,
                        { value: e },
                        "activity-tag-".concat(w.id, "-").concat(e),
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
      var i = n(735250),
        a = n(470079),
        l = n(120356),
        s = n.n(l),
        o = n(990547),
        r = n(442837),
        c = n(477690),
        d = n(481060),
        u = n(110924),
        v = n(40851),
        I = n(367907),
        _ = n(565384),
        T = n(906732),
        m = n(835473),
        C = n(600164),
        E = n(592125),
        x = n(451478),
        h = n(626135),
        g = n(585483),
        p = n(624138),
        f = n(115130),
        N = n(566620),
        S = n(421),
        A = n(895395),
        j = n(49978),
        D = n(427996),
        b = n(701488),
        Z = n(981631),
        M = n(689938),
        y = n(59168),
        L = n(361205),
        O = n(812320);
      let B = (0, p.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
        R = (0, p.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
        V =
          (0, p.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) +
          B +
          (0, p.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);
      function k(e) {
        let {
            channel: t,
            guildId: n,
            locationObject: l,
            onClose: c,
            initialSelectedApplicationId: v,
            initialSlide: x = b.ag.DIRECTORY,
            enableSelectedTextChannelInvite: p,
            analyticsLocations: B,
            ...V
          } = e,
          k = (0, r.e7)([f.Z], () => f.Z.getIsEnabled(), []),
          { analyticsLocations: P } = (0, T.ZP)(B),
          [F, Y] = a.useState(x),
          w = (0, u.Z)(F),
          [W, G] = a.useState(null),
          [U, q] = a.useState(v),
          [z, J] = a.useState(void 0),
          [K] = (0, m.Z)(null == U ? [] : [U]),
          X = a.useRef(null),
          $ = a.useMemo(
            () => ({
              application_id: U,
              source_section: l.section,
              impression_group: o.ImpressionGroups.ACTIVITY_SHELF_FLOW,
            }),
            [l.section, U],
          );
        a.useEffect(() => {
          if (
            F === b.ag.DIRECTORY &&
            null != w &&
            w !== b.ag.DIRECTORY &&
            null != W
          ) {
            var e;
            null === (e = X.current) || void 0 === e || e.scrollTo({ top: W });
          }
        }, [W, w, F]);
        let Q = a.useCallback((e) => {
            var t;
            let { applicationId: n } = e,
              i =
                null === (t = X.current) || void 0 === t ? void 0 : t.scrollTop;
            null != i && G(i), q(n), Y(b.ag.SELECT_CHANNEL);
          }, []),
          ee = a.useCallback((e) => {
            let { applicationId: t } = e;
            q(t), Y(b.ag.DETAIL_PAGE);
          }, []);
        a.useEffect(() => {
          h.default.track(Z.rMx.OPEN_MODAL, {
            type: "Activity Shelf",
            channel_id: null == t ? void 0 : t.id,
            guild_id: n,
          });
        }, [t, n]),
          a.useEffect(
            () => (
              g.S.subscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q),
              () => {
                g.S.unsubscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q);
              }
            ),
            [Q],
          ),
          a.useEffect(
            () => (
              g.S.subscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee),
              () => {
                g.S.unsubscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee);
              }
            ),
            [ee],
          ),
          a.useEffect(() => {
            N.ux();
          }, []);
        let et = () => {
            Y(b.ag.DIRECTORY);
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
                  location: (0, _.k$)(),
                  ...(0, I.hH)(n),
                  ...(0, I.v_)(E.Z.getChannel(null == t ? void 0 : t.id)),
                  ...$,
                  ...e,
                };
              h.default.track(Z.rMx.ACTIVITY_SHELF_CLOSE, i);
            },
            [null == t ? void 0 : t.id, $, n],
          ),
          (0, i.jsx)(T.Gt, {
            value: P,
            children: (0, i.jsxs)(d.ModalRoot, {
              className: s()(y.root),
              "aria-label": M.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
              ...V,
              children: [
                (0, i.jsx)("img", {
                  alt: M.Z.Messages
                    .EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                  src: L,
                  className: y.shelfTopBackground,
                }),
                (0, i.jsx)("img", {
                  alt: M.Z.Messages
                    .EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                  src: O,
                  className: y.shelfTopForeground,
                }),
                (0, i.jsxs)(d.ModalHeader, {
                  separator: !1,
                  justify: C.Z.Justify.BETWEEN,
                  className: s()(y.modalHeader),
                  children: [
                    (0, i.jsxs)("div", {
                      className: y.headerTextContainer,
                      children: [
                        (() => {
                          if (F === b.ag.DETAIL_PAGE)
                            return null == K
                              ? null
                              : (0, i.jsxs)("div", {
                                  className: y.activityShelfTitle,
                                  children: [
                                    (0, i.jsx)(d.Heading, {
                                      variant: "heading-xl/extrabold",
                                      children: K.name,
                                    }),
                                    (0, i.jsxs)(d.Clickable, {
                                      className: y.headerBackButton,
                                      onClick: et,
                                      children: [
                                        (0, i.jsx)(d.ChevronSmallLeftIcon, {
                                          size: "md",
                                          color: "currentColor",
                                        }),
                                        (0, i.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          children: M.Z.Messages.BACK,
                                        }),
                                      ],
                                    }),
                                  ],
                                });
                          return (0, i.jsx)("div", {
                            className: y.activityShelfTitle,
                            children: (0, i.jsx)(d.Heading, {
                              variant: "heading-xl/extrabold",
                              children:
                                M.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
                            }),
                          });
                        })(),
                        (() => {
                          if (F === b.ag.DIRECTORY)
                            return (0, i.jsx)(d.Text, {
                              variant: "text-sm/normal",
                              children: k
                                ? M.Z.Messages
                                    .EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE
                                : M.Z.Messages
                                    .EMBEDDED_ACTIVITIES_SHELF_SUBTITLE,
                            });
                          return null;
                        })(),
                      ],
                    }),
                    (0, i.jsx)(d.ModalCloseButton, {
                      className: y.modalCloseButton,
                      onClick: c,
                    }),
                  ],
                }),
                F === b.ag.DIRECTORY && k ? (0, i.jsx)(D.W, {}) : null,
                (0, i.jsx)("div", { className: y.modalDivider }),
                (0, i.jsxs)(d.Slides, {
                  activeSlide: F,
                  centered: !1,
                  width: R,
                  children: [
                    (0, i.jsx)(d.Slide, {
                      id: b.ag.DIRECTORY,
                      impressionName: o.ImpressionNames.ACTIVITY_SHELF,
                      impressionProperties: {
                        source_section: l.section,
                        impression_group:
                          o.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                      },
                      children: (0, i.jsx)(H, {
                        slide: F,
                        children: (0, i.jsx)(A.Z, {
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
                      id: b.ag.SELECT_CHANNEL,
                      impressionName:
                        o.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                      impressionProperties: {
                        source_section: l.section,
                        impression_group:
                          o.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                        application_id: U,
                      },
                      children: (0, i.jsx)(H, {
                        slide: F,
                        children: (0, i.jsx)(j.Z, {
                          applicationId: U,
                          selectedChannelId: z,
                          setSelectedChannelId: J,
                          guildId: n,
                          enableSelectedTextChannelInvite: p,
                        }),
                      }),
                    }),
                    (0, i.jsx)(d.Slide, {
                      id: b.ag.DETAIL_PAGE,
                      impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
                      impressionProperties: $,
                      children: (0, i.jsx)(H, {
                        slide: F,
                        children:
                          null == U
                            ? null
                            : (0, i.jsx)(S.Z, {
                                applicationId: U,
                                channelId: null == t ? void 0 : t.id,
                                guildId: n,
                                onActivityLaunch: c,
                              }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", { className: y.modalDivider }),
                (0, i.jsx)(d.ModalFooter, {
                  separator: !1,
                  className: y.footer,
                  children: (() => {
                    switch (F) {
                      case b.ag.DIRECTORY:
                        return (0, i.jsx)(A.d, {});
                      case b.ag.SELECT_CHANNEL:
                        return (0, i.jsx)(j.q, {
                          onBack: et,
                          onClose: c,
                          guildId: n,
                          applicationId: U,
                          locationObject: l,
                          selectedChannelId: z,
                          enableSelectedTextChannelInvite: p,
                        });
                      case b.ag.DETAIL_PAGE:
                      case b.ag.DIRECTORY:
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
          l = (0, r.e7)([f.Z], () => f.Z.getIsEnabled(), []),
          o = a.useContext(v.ZP),
          c = (0, r.e7)([x.Z], () => x.Z.windowSize(o.windowId).height, [
            o.windowId,
          ]);
        return (0, i.jsx)("div", {
          className: s()(y.slideContentOuterContainerSquished, {
            [y.slideContentOuterContainerSquishedWithDev]:
              n === b.ag.DIRECTORY && l,
            [y.slideContentOuterContainerTall]: n === b.ag.DIRECTORY && c > V,
            [y.slideContentOuterContainerTallWithDev]:
              n === b.ag.DIRECTORY && c > V && l,
            [y.slideContentOuterContainerNoMetaTextSquished]:
              n === b.ag.SELECT_CHANNEL,
            [y.slideContentOuterContainerNoMetaTextTall]:
              n === b.ag.SELECT_CHANNEL && c > V,
            [y.slideContentOuterContainerNoMetaTextNoFooterSquished]:
              n === b.ag.DETAIL_PAGE,
            [y.slideContentOuterContainerNoMetaTextNoFooterTall]:
              n === b.ag.DETAIL_PAGE && c > V,
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
      var i = n(735250),
        a = n(470079),
        l = n(399606),
        s = n(481060),
        o = n(100527),
        r = n(906732),
        c = n(895924),
        d = n(70097),
        u = n(592125),
        v = n(566620),
        I = n(122613),
        _ = n(678173),
        T = n(636508),
        m = n(696068),
        C = n(361213),
        E = n(778569),
        x = n(182906),
        h = n(412019),
        g = n(431136),
        p = n(226799),
        f = n(689938),
        N = n(706451);
      function S(e) {
        var t;
        let {
            applicationId: n,
            guildId: l,
            channelId: c,
            onActivityLaunch: u,
          } = e,
          { analyticsLocations: I } = (0, r.ZP)(
            o.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS,
          );
        a.useEffect(() => {
          (0, v.w1)({ guildId: l });
        }, [l]);
        let T = (0, E.Z)({ applicationId: null != n ? n : "", size: 2048 }),
          m = (0, _.T)(null != l ? l : null, n);
        if (null == m) return null;
        let x =
            null != m.activity.activity_preview_video_asset_id
              ? (0, C.Z)(n, m.activity.activity_preview_video_asset_id)
              : null,
          h = p.o[n],
          g =
            (null == h ? void 0 : h.playersSuggestionMin) != null &&
            (null == h ? void 0 : h.playersSuggestionMax) != null
              ? ""
                  .concat(h.playersSuggestionMin, " - ")
                  .concat(h.playersSuggestionMax)
              : void 0;
        return (0, i.jsx)(r.Gt, {
          value: I,
          children: (0, i.jsx)("div", {
            className: N.scrollContainer,
            children: (0, i.jsxs)(s.Scroller, {
              className: N.scroller,
              children: [
                (0, i.jsx)("div", {
                  className: N.launcherOuterContainer,
                  children: (0, i.jsx)(A, {
                    activityItem: m,
                    onLaunch: u,
                    channelId: c,
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: N.activityDetailsContainer,
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        null != x
                          ? (0, i.jsx)("div", {
                              className: N.heroVideoContainer,
                              children: (0, i.jsx)(d.Z, {
                                loop: !0,
                                autoPlay: !0,
                                muted: !0,
                                className: N.heroVideo,
                                src: x,
                                poster: T.url,
                              }),
                            })
                          : null,
                        (0, i.jsx)("div", {
                          className: N.detailsTitle,
                          children: (0, i.jsx)(s.Heading, {
                            variant: "heading-xxl/bold",
                            children: m.application.name,
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: N.detailsDetails,
                          children: [
                            null != g
                              ? (0, i.jsxs)("div", {
                                  className: N.detailItem,
                                  children: [
                                    (0, i.jsx)(s.GroupIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                    }),
                                    (0, i.jsx)(s.Text, {
                                      variant: "text-xs/semibold",
                                      className: N.detailItemText,
                                      children:
                                        f.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format(
                                          { nPlayers: g },
                                        ),
                                    }),
                                  ],
                                })
                              : null,
                            (null == h ? void 0 : h.timeSuggestionMinutes) !=
                            null
                              ? (0, i.jsxs)("div", {
                                  className: N.detailItem,
                                  children: [
                                    (0, i.jsx)(s.HourglassIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                    }),
                                    (0, i.jsx)(s.Text, {
                                      variant: "text-xs/semibold",
                                      className: N.detailItemText,
                                      children:
                                        f.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format(
                                          { nMinutes: h.timeSuggestionMinutes },
                                        ),
                                    }),
                                  ],
                                })
                              : null,
                            (0, i.jsxs)("div", {
                              className: N.detailItem,
                              children: [
                                (0, i.jsx)(s.TagsIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                }),
                                (0, i.jsx)(s.Text, {
                                  variant: "text-xs/semibold",
                                  className: N.detailItemText,
                                  children: m.application.tags
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
                      className: N.detailsDescription,
                      children: m.application.description,
                    }),
                    (0, i.jsx)("div", { className: N.divider }),
                    (0, i.jsx)("div", {
                      className: N.imagesContainer,
                      children: (null !==
                        (t = null == h ? void 0 : h.gameplayImageUrls) &&
                      void 0 !== t
                        ? t
                        : []
                      ).map((e) =>
                        (0, i.jsx)(
                          "img",
                          {
                            src: e,
                            alt: f.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format(
                              { activityName: m.application.name },
                            ),
                            className: N.activityImage,
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
      function A(e) {
        var t, o;
        let { activityItem: d, onLaunch: v, channelId: _ } = e,
          C = (0, E.Z)({ applicationId: d.application.id, size: 2048 }),
          { analyticsLocations: p } = (0, r.ZP)(),
          [S, A] = a.useState(
            null !==
              (t = (0, T.$)({ allowGdmActivityChannelSuggestion: !0 })) &&
              void 0 !== t
              ? t
              : void 0,
          ),
          [j, D] = a.useState(
            null !==
              (o = (0, m.d)({
                guildId: S,
                allowGdmActivityChannelSuggestion: !0,
              })) && void 0 !== o
              ? o
              : void 0,
          ),
          b = (0, l.e7)([u.Z], () => u.Z.getChannel(j), [j]),
          Z = (0, T.W)(),
          M = (0, m.F)(S),
          y = a.useCallback(async () => {
            var e;
            if (null != j)
              await (0, I.Z)({
                targetApplicationId:
                  null == d
                    ? void 0
                    : null === (e = d.application) || void 0 === e
                      ? void 0
                      : e.id,
                channelId: j,
                analyticsLocations: p,
                commandOrigin: c.bB.APPLICATION_LAUNCHER,
              }).then(v);
          }, [d, p, v, j]),
          L = a.useCallback(() => {
            (0, s.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("60133"),
                n.e("43035"),
              ]).then(n.bind(n, 827940));
              return (t) =>
                (0, i.jsx)(e, { activityItem: d, ...t, analyticsLocations: p });
            });
          }, [d, p]),
          O =
            null == b ||
            (null != b.guild_id &&
              !(
                null != S &&
                null != j &&
                Z.some((e) => e.value === S) &&
                M.some((e) => e.value.channel.id === j)
              ) &&
              !0);
        return (0, i.jsxs)("div", {
          className: N.launcherInnerContainer,
          children: [
            (0, i.jsx)(x.Z, {
              applicationName: d.application.name,
              imageBackground: C,
              imageClassName: N.launchImage,
              imageNotFoundClassName: N.brokenLaunchImage,
            }),
            (0, i.jsx)(s.Text, {
              variant: "text-md/medium",
              children: f.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE,
            }),
            null == _
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(s.Select, {
                      placeholder: f.Z.Messages.GUILD_SELECT,
                      optionClassName: N.__invalid_option,
                      options: Z,
                      renderOptionValue: (e) => {
                        let t = e.find((e) => e.value === S);
                        return null == t
                          ? null
                          : (0, i.jsx)(g.m, { guildId: t.value });
                      },
                      renderOptionLabel: (e) => {
                        let { value: t } = e;
                        return (0, i.jsx)(g.m, { guildId: t });
                      },
                      isSelected: (e) => e === S,
                      select: (e) => {
                        var t;
                        A(e),
                          D(
                            null !== (t = (0, m.d)({ guildId: e })) &&
                              void 0 !== t
                              ? t
                              : void 0,
                          );
                      },
                      serialize: (e) => e,
                    }),
                    (0, i.jsx)(s.Select, {
                      placeholder:
                        f.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                      optionClassName: N.__invalid_option,
                      options: M,
                      isSelected: (e) => {
                        let { channel: t } = e;
                        return t.id === j;
                      },
                      select: (e) => {
                        let { channel: t } = e;
                        return D(t.id);
                      },
                      serialize: (e) => {
                        let { channel: t } = e;
                        return t.id;
                      },
                      renderOptionValue: () => {
                        let e = M.find((e) => e.value.channel.id === j);
                        return null == e
                          ? null
                          : (0, i.jsx)(h.O, {
                              channel: e.value.channel,
                              users: e.value.users,
                            });
                      },
                      renderOptionLabel: (e) => {
                        let {
                          value: { channel: t, users: n },
                        } = e;
                        return (0, i.jsx)(h.O, { channel: t, users: n });
                      },
                    }),
                    (0, i.jsx)(s.Button, {
                      fullWidth: !0,
                      disabled: O,
                      onClick: y,
                      children: f.Z.Messages.START,
                    }),
                    (0, i.jsx)("div", { className: N.divider }),
                    (0, i.jsx)(s.Button, {
                      fullWidth: !0,
                      color: s.Button.Colors.PRIMARY,
                      onClick: L,
                      children: f.Z.Messages.SHARE,
                    }),
                  ],
                })
              : (0, i.jsxs)("div", {
                  className: N.singleRowShareContainer,
                  children: [
                    (0, i.jsx)(s.Button, {
                      fullWidth: !0,
                      disabled: O,
                      onClick: y,
                      children: f.Z.Messages.START,
                    }),
                    (0, i.jsx)(s.Button, {
                      className: N.shareIconButton,
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
          return j;
        },
        d: function () {
          return D;
        },
      }),
        n(47120);
      var i = n(735250),
        a = n(470079),
        l = n(120356),
        s = n.n(l),
        o = n(468194),
        r = n(442837),
        c = n(477690),
        d = n(481060),
        u = n(100527),
        v = n(906732),
        I = n(430824),
        _ = n(594174),
        T = n(115130),
        m = n(566620),
        C = n(127255),
        E = n(880308),
        x = n(451576),
        h = n(439934),
        g = n(701488),
        p = n(689938),
        f = n(175818);
      let N = (0, o.Mg)(
          c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP,
        ),
        S = (0, o.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
        A = (0, o.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
      function j(e) {
        let {
            channel: t,
            guildId: n,
            locationObject: l,
            onClose: o,
            onActivityItemVisible: c,
            scrollerRef: g,
          } = e,
          [j, D] = a.useState(0),
          b = (0, C.Z)({ guildId: n, enableFilter: !0 }),
          Z = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
          M = (0, r.e7)([I.Z], () => I.Z.getGuild(n), [n]),
          { analyticsLocations: y } = (0, v.ZP)(u.Z.ACTIVITY_DIRECTORY),
          L = (0, x.Z)(null == t ? void 0 : t.id),
          { isDeveloperActivityShelfEnabled: O, filter: B } = (0, r.cj)(
            [T.Z],
            () => ({
              filter: T.Z.getFilter(),
              isDeveloperActivityShelfEnabled: T.Z.getIsEnabled(),
            }),
          );
        if (
          (a.useEffect(() => {
            let e = g.current;
            if (null != e)
              return (
                e.addEventListener("scroll", t, !1),
                () => {
                  if (null != e) e.removeEventListener("scroll", t, !1);
                }
              );
            function t() {
              var e, t;
              D(
                null !==
                  (t =
                    null === (e = g.current) || void 0 === e
                      ? void 0
                      : e.scrollTop) && void 0 !== t
                  ? t
                  : 0,
              );
            }
          }, [g]),
          a.useEffect(() => {
            (L || null != n) && (0, m.w1)({ guildId: n, force: !0 });
          }, [n, L]),
          (0, E.g)(),
          (null == M && !L) || null == Z)
        )
          return null;
        let R = b.length > 0;
        return (0, i.jsx)(v.Gt, {
          value: y,
          children: (0, i.jsxs)("div", {
            className: f.scrollContainer,
            children: [
              R
                ? (0, i.jsx)("div", {
                    className: f.scrollBackgroundContainer,
                    style: { top: -j },
                    children: (0, i.jsx)("div", {
                      className: s()(f.scrollTierBackground),
                      style: {
                        height: ((e) => {
                          let t = 1 === e.length;
                          return N + Math.ceil(e.length / 2) * (t ? A : S);
                        })(b),
                      },
                    }),
                  })
                : null,
              (0, i.jsxs)(d.Scroller, {
                ref: g,
                className: f.scroller,
                children: [
                  null,
                  R
                    ? (0, i.jsx)("div", {
                        className: f.scrollSection,
                        children: (0, i.jsx)("div", {
                          className: s()(f.shelf),
                          children: b.map((e) =>
                            (0, i.jsx)(
                              h.Z,
                              {
                                large: 1 === b.length,
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
                    : O && B.length > 0
                      ? (0, i.jsx)(d.Text, {
                          variant: "text-md/normal",
                          className: f.filterError,
                          children:
                            p.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format(
                              { filter: B },
                            ),
                        })
                      : (0, i.jsx)("div", {
                          className: f.spinnerContainer,
                          children: (0, i.jsx)(d.Spinner, {}),
                        }),
                ],
              }),
            ],
          }),
        });
      }
      function D() {
        return (0, i.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: p.Z.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({
            surveyURL: g.Es,
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
          return L;
        },
      }),
        n(47120);
      var i = n(735250),
        a = n(470079),
        l = n(442837),
        s = n(481060),
        o = n(153867),
        r = n(607070),
        c = n(100527),
        d = n(906732),
        u = n(895924),
        v = n(264165),
        I = n(70097),
        _ = n(740492),
        T = n(592125),
        m = n(430824),
        C = n(496675),
        E = n(944486),
        x = n(566620),
        h = n(317381),
        g = n(122613),
        p = n(678173),
        f = n(696068),
        N = n(361213),
        S = n(778569),
        A = n(412019),
        j = n(981631),
        D = n(689938),
        b = n(760551);
      function Z(e) {
        return (0, l.e7)(
          [m.Z, C.Z],
          () => {
            let t = m.Z.getGuild(e);
            return null != t && C.Z.can(j.Plq.CREATE_INSTANT_INVITE, t);
          },
          [e],
        );
      }
      let M = ["embedded_background"];
      function y(e) {
        var t, n;
        let {
            applicationId: c,
            guildId: d,
            selectedChannelId: u,
            setSelectedChannelId: C,
            enableSelectedTextChannelInvite: h,
          } = e,
          g = (0, l.e7)([r.Z], () => r.Z.useReducedMotion),
          j = (0, p.T)(null != d ? d : null, null != c ? c : null),
          [y, L] = a.useState(
            h && !_.ZP.disableInviteWithTextChannelActivityLaunch,
          ),
          O = (0, f.F)(d);
        a.useEffect(() => {
          var e;
          x.w1({ guildId: d }),
            C(
              null !== (e = (0, f.d)({ guildId: d })) && void 0 !== e
                ? e
                : void 0,
            );
        }, [d, C]);
        let B = null == j ? void 0 : j.activity.activity_preview_video_asset_id,
          R =
            null != B
              ? (0, N.Z)(
                  null !== (t = null == j ? void 0 : j.application.id) &&
                    void 0 !== t
                    ? t
                    : "",
                  B,
                )
              : null,
          { url: V } = (0, S.Z)({
            applicationId:
              null !== (n = null == j ? void 0 : j.application.id) &&
              void 0 !== n
                ? n
                : "",
            size: 1024,
            names: M,
          }),
          k = (0, l.e7)([m.Z], () => m.Z.getGuild(d)),
          H = (0, l.e7)([T.Z, E.Z], () => T.Z.getChannel(E.Z.getChannelId())),
          P = Z(null != d ? d : void 0);
        if ((null == j ? void 0 : j.application) == null || null == k)
          return null;
        let F =
          (null == H ? void 0 : H.name) == null ||
          (null == H ? void 0 : H.name) === ""
            ? D.Z.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME
            : "#".concat(H.name);
        return (0, i.jsxs)(s.Scroller, {
          className: b.scroll,
          children: [
            null != R || null != V
              ? (0, i.jsx)(v.Z, {
                  aspectRatio: 16 / 9,
                  className: b.imageContainer,
                  children: (0, i.jsx)(I.Z, {
                    className: b.video,
                    src: R,
                    loop: !0,
                    autoPlay: !g,
                    poster: V,
                    muted: !0,
                  }),
                })
              : null,
            (0, i.jsxs)("div", {
              className: b.descriptionArea,
              children: [
                (0, i.jsx)(s.Heading, {
                  variant: "heading-xl/semibold",
                  children: null == j ? void 0 : j.application.name,
                }),
                (0, i.jsx)(s.Text, {
                  className: b.descriptionAreaSubtext,
                  variant: "text-md/normal",
                  children: null == j ? void 0 : j.application.description,
                }),
              ],
            }),
            (0, i.jsx)(s.Select, {
              placeholder:
                D.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
              optionClassName: b.__invalid_option,
              options: O,
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
                let e = O.find((e) => e.value.channel.id === u);
                return null == e
                  ? null
                  : (0, i.jsx)(A.O, {
                      channel: e.value.channel,
                      users: e.value.users,
                    });
              },
              renderOptionLabel: (e) => {
                let {
                  value: { channel: t, users: n },
                } = e;
                return (0, i.jsx)(A.O, { channel: t, users: n });
              },
            }),
            P && h
              ? (0, i.jsxs)(s.Clickable, {
                  className: b.checkboxContainer,
                  onClick: () => {
                    let e = !y;
                    o.ZP.updatedUnsyncedSettings({
                      disableInviteWithTextChannelActivityLaunch: !e,
                    }),
                      L(e);
                  },
                  children: [
                    (0, i.jsx)(s.Checkbox, {
                      type: s.Checkbox.Types.INVERTED,
                      className: b.checkbox,
                      value: y,
                      displayOnly: !0,
                    }),
                    (0, i.jsxs)(s.Text, {
                      variant: "text-sm/normal",
                      children: [
                        D.Z.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE,
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
      function L(e) {
        let {
            applicationId: t,
            guildId: n,
            locationObject: a,
            onBack: o,
            onClose: r,
            selectedChannelId: v,
            enableSelectedTextChannelInvite: I,
          } = e,
          { analyticsLocations: m } = (0, d.ZP)(c.Z.ACTIVITY_CHANNEL_SELECTOR),
          C = (0, p.T)(null != n ? n : null, null != t ? t : null),
          f = (0, l.e7)([T.Z, E.Z], () => T.Z.getChannel(E.Z.getChannelId())),
          N = (0, l.e7)(
            [_.ZP],
            () => I && !_.ZP.disableInviteWithTextChannelActivityLaunch,
          ),
          S = (0, l.e7)(
            [h.ZP],
            () =>
              null != v &&
              "" !== v &&
              h.ZP.getEmbeddedActivitiesForChannel(v).some(
                (e) => e.applicationId === t,
              ),
          ),
          A = Z(n),
          M = async () => {
            var e;
            if (null != v && "" !== v && null != C && null != n && "" !== n)
              (await (0, g.Z)({
                targetApplicationId:
                  null === (e = C.application) || void 0 === e ? void 0 : e.id,
                locationObject: a,
                channelId: v,
                analyticsLocations: m,
                commandOrigin: u.bB.APPLICATION_LAUNCHER,
              })) &&
                (r(),
                null != f &&
                  A &&
                  N &&
                  (await x.sN({
                    activityChannelId: v,
                    invitedChannelId: f.id,
                    applicationId: C.application.id,
                    location: j.Sbl.ACTIVITY_SHELF,
                  })));
          };
        return (0, i.jsx)(d.Gt, {
          value: m,
          children: (0, i.jsxs)("div", {
            className: b.footerContainer,
            children: [
              (0, i.jsx)(s.Clickable, {
                onClick: o,
                className: b.backToBrowse,
                children: (0, i.jsx)(s.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children: D.Z.Messages.BACK,
                }),
              }),
              null == v
                ? (0, i.jsx)("div", {})
                : (0, i.jsx)(s.Button, {
                    className: b.launchButton,
                    onClick: M,
                    color: S ? s.Button.Colors.GREEN : void 0,
                    fullWidth: !0,
                    children: S
                      ? D.Z.Messages.EMBEDDED_ACTIVITIES_JOIN
                      : D.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH,
                  }),
            ],
          }),
        });
      }
    },
    264165: function (e, t, n) {
      var i = n(735250);
      n(470079);
      var a = n(120356),
        l = n.n(a),
        s = n(354555);
      t.Z = (e) => {
        let { aspectRatio: t, style: n, className: a, children: o } = e;
        return (0, i.jsx)("div", {
          className: l()(s.outer, a),
          style: { paddingTop: "".concat((1 / t) * 100, "%"), ...n },
          children: (0, i.jsx)("div", { className: s.inner, children: o }),
        });
      };
    },
    687352: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(735250);
      n(470079);
      var a = n(120356),
        l = n.n(a),
        s = n(481060),
        o = n(925329),
        r = n(932355);
      function c(e) {
        let { className: t, embeddedApps: n, muted: a } = e;
        if (n.length <= 0) return null;
        if (1 === n.length)
          return (0, i.jsx)("div", {
            className: l()(r.container, t, a && r.modeMuted),
            children: (0, i.jsx)(o.Z, {
              game: n[0].application,
              className: r.icon20px,
            }),
          });
        {
          let e = n.length - 1;
          return (0, i.jsxs)("div", {
            className: l()(r.container, t, a && r.modeMuted),
            children: [
              (0, i.jsx)(o.Z, {
                game: n[0].application,
                className: r.icon20px,
              }),
              2 === n.length
                ? (0, i.jsx)(o.Z, {
                    game: n[1].application,
                    className: r.icon20px,
                  })
                : (0, i.jsx)(s.Text, {
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
//# sourceMappingURL=a3da0fc87052b69a4b03.js.map
