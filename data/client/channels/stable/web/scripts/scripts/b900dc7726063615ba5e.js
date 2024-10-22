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
      var a = n(192379),
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
      var a = n(200651);
      n(192379);
      var i = n(481060),
        l = n(542094),
        s = n(689938),
        r = n(87694);
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
      var a = n(200651),
        i = n(192379),
        l = n(558522),
        s = n(941958);
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
      var a = n(200651),
        i = n(192379),
        l = n(481060),
        s = n(911969),
        r = n(689938),
        o = n(899207);
      function c(e) {
        let {
            name: t,
            labelType: n,
            collapsed: c = !1,
            showTooltip: d = !1,
          } = e,
          u = n === s.ww.NEW ? r.Z.Messages.NEW : r.Z.Messages.UPDATED,
          v = n === s.ww.NEW ? o.activityNewBadge : o.activityUpdatedBadge,
          [I, _] = i.useState(c ? "" : u);
        if (
          (i.useEffect(() => {
            c
              ? _("")
              : n === s.ww.NEW
                ? _(r.Z.Messages.NEW)
                : n === s.ww.UPDATED && _(r.Z.Messages.UPDATED);
          }, [c, n]),
          n === s.ww.NONE)
        )
          return null;
        let T = (0, a.jsx)(l.TextBadge, {
          className: v,
          disableColor: !0,
          text: (0, a.jsx)("span", { children: I }),
        });
        if (!d) return T;
        let m = r.Z.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
          activity: t,
        });
        return (0, a.jsx)(l.TooltipContainer, {
          text: m,
          tooltipContentClassName: o.tooltip,
          children: T,
        });
      }
    },
    439934: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return O;
        },
      }),
        n(47120);
      var a = n(200651),
        i = n(192379),
        l = n(120356),
        s = n.n(l),
        r = n(442837),
        o = n(481060),
        c = n(239091),
        d = n(434650),
        u = n(895924),
        v = n(70097),
        I = n(695346),
        _ = n(594174),
        T = n(695103),
        m = n(880448),
        C = n(823379),
        E = n(5192),
        x = n(624138),
        h = n(115130),
        g = n(147865),
        p = n(542094),
        f = n(665811),
        N = n(182906),
        S = n(556505),
        A = n(513202),
        b = n(884338),
        j = n(823531),
        D = n(689938),
        Z = n(440775),
        M = n(969728);
      function L(e) {
        let { value: t, icon: n } = e;
        return (0, a.jsxs)(o.Text, {
          className: Z.activityTag,
          color: "interactive-normal",
          variant: "text-xs/semibold",
          children: [
            (0, C.lm)(n) ? (0, a.jsx)(n, { className: Z.icon }) : null,
            t,
          ],
        });
      }
      function y(e) {
        let {
            activity: t,
            application: n,
            channel: i,
            guildId: l,
            large: s = !1,
          } = e,
          c = (0, r.Wu)([_.default], () => {
            var e;
            return Array.from(
              null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e
                ? e
                : [],
            )
              .map((e) => {
                let [t] = e;
                return _.default.getUser(t);
              })
              .filter(C.lm);
          }),
          d = E.ZP.getName(
            l,
            null == i ? void 0 : i.id,
            null == c ? void 0 : c[0],
          );
        if (((d = (0, x.aF)(d, 15)), null == t || 0 === c.length)) {
          var u, v;
          let e = "".concat(
            (0, g.ZP)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0),
          );
          return (
            s && (e = null !== (v = n.description) && void 0 !== v ? v : ""),
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
                  ? D.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format(
                      { username: d, count: c.length - 1 },
                    )
                  : D.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
                      username: d,
                    }),
            }),
            (0, a.jsx)(b.Z, {
              size: s ? b.u.SIZE_24 : b.u.SIZE_16,
              guildId: l,
              users: c,
              max: 6,
            }),
          ],
        });
      }
      function O(e) {
        var t;
        let {
            activityItem: n,
            channel: l,
            guildId: _,
            locationObject: C,
            onActivityItemVisible: E,
            onActivityItemSelected: x,
            large: b = !1,
          } = e,
          {
            imageBackground: O,
            videoUrl: B,
            activityAction: R,
            joinableEmbeddedApp: V,
            onActivityItemSelected: k,
            labelType: P,
            staffReleasePhase: H,
          } = (0, p.ZP)({
            activityItem: n,
            channel: l,
            guildId: _,
            locationObject: C,
            onActivityItemVisible: E,
            onActivityItemSelected: x,
            embeddedActivitiesManager: A.Z,
            commandOrigin: u.bB.APPLICATION_LAUNCHER,
          }),
          F = (0, r.e7)(
            [h.Z, T.Z],
            () =>
              h.Z.inDevModeForApplication(n.application.id) ||
              T.Z.inTestModeForApplication(n.application.id),
            [n.application.id],
          ),
          { application: w } = n,
          Y = i.useCallback(
            (e) =>
              e &&
              (null == E ? void 0 : E({ applicationId: n.application.id })),
            [n.application.id, E],
          ),
          U = (0, d.O)(Y, 0.8, !0),
          [W, G] = i.useState(!1),
          [z, q] = i.useState(W);
        i.useEffect(() => {
          W && q(!0);
        }, [W]);
        let J = () => G(!0),
          K = () => G(!1),
          X = I.Sb.useSetting(),
          $ = i.useCallback(() => {
            null == k || k();
          }, [k]);
        return (0, a.jsxs)(o.Clickable, {
          onClick: R === p.JS.START ? $ : void 0,
          onContextMenu: X
            ? (e) => {
                (0, c.vq)(e, (e) => (0, a.jsx)(j.Z, { application: w, ...e }));
              }
            : void 0,
          className: s()(Z.activityItem, {
            [Z.large]: !0 === b,
            [Z.disabled]: R !== p.JS.START,
          }),
          children: [
            (0, a.jsxs)("div", {
              ref: U,
              className: s()(Z.activityImageContainer, { [Z.large]: !0 === b }),
              onMouseEnter: J,
              onFocus: J,
              onMouseLeave: K,
              onBlur: K,
              children: [
                (0, a.jsx)(N.Z, {
                  imageBackground: O,
                  applicationName: w.name,
                  imageClassName: s()(Z.activityImage, { [Z.large]: !0 === b }),
                  imageNotFoundClassName: Z.brokenImageIconWrapper,
                }),
                null != B && z && R === p.JS.START
                  ? (0, a.jsx)("div", {
                      className: s()(Z.activityVideo, { [Z.videoFadeOut]: !W }),
                      onAnimationEnd: () => (W ? null : q(!1)),
                      children: (0, a.jsx)(v.Z, {
                        className: Z.activityVideo,
                        src: B,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                      }),
                    })
                  : null,
                R !== p.JS.START
                  ? (0, a.jsx)(f.U, { action: R, onClick: $ })
                  : null,
                (0, a.jsx)("div", {
                  className: Z.overlayBadge,
                  children: (0, a.jsx)("div", {
                    className: Z.badgeContainer,
                    children: (0, a.jsx)(S.Z, { name: w.name, labelType: P }),
                  }),
                }),
                F
                  ? (0, a.jsx)(o.Tooltip, {
                      text: D.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
                      children: (e) =>
                        (0, a.jsx)("div", {
                          className: Z.devShelfBadge,
                          ...e,
                          children: (0, a.jsx)(m.Z, {
                            className: Z.devShelfIcon,
                          }),
                        }),
                    })
                  : null,
              ],
            }),
            (0, a.jsxs)("div", {
              className: s()(Z.activityTextContainer, { [Z.large]: b }),
              children: [
                b
                  ? (0, a.jsx)(o.Text, {
                      className: Z.activityMaxParticipantsLarge,
                      variant: "text-xs/normal",
                      color: "interactive-normal",
                      children: (0, g.ZP)(
                        null !== (t = w.maxParticipants) && void 0 !== t
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
                      children: w.name,
                    }),
                    null != H
                      ? (0, a.jsx)(o.Tooltip, {
                          text: H,
                          children: (e) =>
                            (0, a.jsx)("img", {
                              className: Z.staffBadge,
                              alt: H,
                              src: M,
                              ...e,
                            }),
                        })
                      : null,
                  ],
                }),
                (0, a.jsx)(y, {
                  activity: null == V ? void 0 : V.embeddedActivity,
                  application: w,
                  channel: l,
                  guildId: _,
                  large: b,
                }),
                (0, a.jsx)("div", {
                  className: Z.activityTagsContainer,
                  children: w.tags
                    .slice(0, 3)
                    .map((e) =>
                      (0, a.jsx)(
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
      var a = n(200651),
        i = n(192379),
        l = n(120356),
        s = n.n(l),
        r = n(990547),
        o = n(442837),
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
        b = n(49978),
        j = n(427996),
        D = n(701488),
        Z = n(981631),
        M = n(689938),
        L = n(59168),
        y = n(361205),
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
            initialSlide: x = D.ag.DIRECTORY,
            enableSelectedTextChannelInvite: p,
            analyticsLocations: B,
            ...V
          } = e,
          k = (0, o.e7)([f.Z], () => f.Z.getIsEnabled(), []),
          { analyticsLocations: H } = (0, T.ZP)(B),
          [F, w] = i.useState(x),
          Y = (0, u.Z)(F),
          [U, W] = i.useState(null),
          [G, z] = i.useState(v),
          [q, J] = i.useState(void 0),
          [K] = (0, m.Z)(null == G ? [] : [G]),
          X = i.useRef(null),
          $ = i.useMemo(
            () => ({
              application_id: G,
              source_section: l.section,
              impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
            }),
            [l.section, G],
          );
        i.useEffect(() => {
          if (
            F === D.ag.DIRECTORY &&
            null != Y &&
            Y !== D.ag.DIRECTORY &&
            null != U
          ) {
            var e;
            null === (e = X.current) || void 0 === e || e.scrollTo({ top: U });
          }
        }, [U, Y, F]);
        let Q = i.useCallback((e) => {
            var t;
            let { applicationId: n } = e,
              a =
                null === (t = X.current) || void 0 === t ? void 0 : t.scrollTop;
            null != a && W(a), z(n), w(D.ag.SELECT_CHANNEL);
          }, []),
          ee = i.useCallback((e) => {
            let { applicationId: t } = e;
            z(t), w(D.ag.DETAIL_PAGE);
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
              g.S.subscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q),
              () => {
                g.S.unsubscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q);
              }
            ),
            [Q],
          ),
          i.useEffect(
            () => (
              g.S.subscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee),
              () => {
                g.S.unsubscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee);
              }
            ),
            [ee],
          ),
          i.useEffect(() => {
            N.ux();
          }, []);
        let et = () => {
            w(D.ag.DIRECTORY);
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
                  location: (0, _.k$)(),
                  ...(0, I.hH)(n),
                  ...(0, I.v_)(E.Z.getChannel(null == t ? void 0 : t.id)),
                  ...$,
                  ...e,
                };
              h.default.track(Z.rMx.ACTIVITY_SHELF_CLOSE, a);
            },
            [null == t ? void 0 : t.id, $, n],
          ),
          (0, a.jsx)(T.Gt, {
            value: H,
            children: (0, a.jsxs)(d.ModalRoot, {
              className: s()(L.root),
              "aria-label": M.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
              ...V,
              children: [
                (0, a.jsx)("img", {
                  alt: M.Z.Messages
                    .EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                  src: y,
                  className: L.shelfTopBackground,
                }),
                (0, a.jsx)("img", {
                  alt: M.Z.Messages
                    .EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                  src: O,
                  className: L.shelfTopForeground,
                }),
                (0, a.jsxs)(d.ModalHeader, {
                  separator: !1,
                  justify: C.Z.Justify.BETWEEN,
                  className: s()(L.modalHeader),
                  children: [
                    (0, a.jsxs)("div", {
                      className: L.headerTextContainer,
                      children: [
                        (() => {
                          if (F === D.ag.DETAIL_PAGE)
                            return null == K
                              ? null
                              : (0, a.jsxs)("div", {
                                  className: L.activityShelfTitle,
                                  children: [
                                    (0, a.jsx)(d.Heading, {
                                      variant: "heading-xl/extrabold",
                                      children: K.name,
                                    }),
                                    (0, a.jsxs)(d.Clickable, {
                                      className: L.headerBackButton,
                                      onClick: et,
                                      children: [
                                        (0, a.jsx)(d.ChevronSmallLeftIcon, {
                                          size: "md",
                                          color: "currentColor",
                                        }),
                                        (0, a.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          children: M.Z.Messages.BACK,
                                        }),
                                      ],
                                    }),
                                  ],
                                });
                          return (0, a.jsx)("div", {
                            className: L.activityShelfTitle,
                            children: (0, a.jsx)(d.Heading, {
                              variant: "heading-xl/extrabold",
                              children:
                                M.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
                            }),
                          });
                        })(),
                        (() => {
                          if (F === D.ag.DIRECTORY)
                            return (0, a.jsx)(d.Text, {
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
                    (0, a.jsx)(d.ModalCloseButton, {
                      className: L.modalCloseButton,
                      onClick: c,
                    }),
                  ],
                }),
                F === D.ag.DIRECTORY && k ? (0, a.jsx)(j.W, {}) : null,
                (0, a.jsx)("div", { className: L.modalDivider }),
                (0, a.jsxs)(d.Slides, {
                  activeSlide: F,
                  centered: !1,
                  width: R,
                  children: [
                    (0, a.jsx)(d.Slide, {
                      id: D.ag.DIRECTORY,
                      impressionName: r.ImpressionNames.ACTIVITY_SHELF,
                      impressionProperties: {
                        source_section: l.section,
                        impression_group:
                          r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                      },
                      children: (0, a.jsx)(P, {
                        slide: F,
                        children: (0, a.jsx)(A.Z, {
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
                      id: D.ag.SELECT_CHANNEL,
                      impressionName:
                        r.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                      impressionProperties: {
                        source_section: l.section,
                        impression_group:
                          r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                        application_id: G,
                      },
                      children: (0, a.jsx)(P, {
                        slide: F,
                        children: (0, a.jsx)(b.Z, {
                          applicationId: G,
                          selectedChannelId: q,
                          setSelectedChannelId: J,
                          guildId: n,
                          enableSelectedTextChannelInvite: p,
                        }),
                      }),
                    }),
                    (0, a.jsx)(d.Slide, {
                      id: D.ag.DETAIL_PAGE,
                      impressionName: r.ImpressionNames.ACTIVITY_DETAILS,
                      impressionProperties: $,
                      children: (0, a.jsx)(P, {
                        slide: F,
                        children:
                          null == G
                            ? null
                            : (0, a.jsx)(S.Z, {
                                applicationId: G,
                                channelId: null == t ? void 0 : t.id,
                                guildId: n,
                                onActivityLaunch: c,
                              }),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", { className: L.modalDivider }),
                (0, a.jsx)(d.ModalFooter, {
                  separator: !1,
                  className: L.footer,
                  children: (() => {
                    switch (F) {
                      case D.ag.DIRECTORY:
                        return (0, a.jsx)(A.d, {});
                      case D.ag.SELECT_CHANNEL:
                        return (0, a.jsx)(b.q, {
                          onBack: et,
                          onClose: c,
                          guildId: n,
                          applicationId: G,
                          locationObject: l,
                          selectedChannelId: q,
                          enableSelectedTextChannelInvite: p,
                        });
                      case D.ag.DETAIL_PAGE:
                      case D.ag.DIRECTORY:
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
          l = (0, o.e7)([f.Z], () => f.Z.getIsEnabled(), []),
          r = i.useContext(v.ZP),
          c = (0, o.e7)([x.Z], () => x.Z.windowSize(r.windowId).height, [
            r.windowId,
          ]);
        return (0, a.jsx)("div", {
          className: s()(L.slideContentOuterContainerSquished, {
            [L.slideContentOuterContainerSquishedWithDev]:
              n === D.ag.DIRECTORY && l,
            [L.slideContentOuterContainerTall]: n === D.ag.DIRECTORY && c > V,
            [L.slideContentOuterContainerTallWithDev]:
              n === D.ag.DIRECTORY && c > V && l,
            [L.slideContentOuterContainerNoMetaTextSquished]:
              n === D.ag.SELECT_CHANNEL,
            [L.slideContentOuterContainerNoMetaTextTall]:
              n === D.ag.SELECT_CHANNEL && c > V,
            [L.slideContentOuterContainerNoMetaTextNoFooterSquished]:
              n === D.ag.DETAIL_PAGE,
            [L.slideContentOuterContainerNoMetaTextNoFooterTall]:
              n === D.ag.DETAIL_PAGE && c > V,
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
      var a = n(200651),
        i = n(192379),
        l = n(399606),
        s = n(481060),
        r = n(100527),
        o = n(906732),
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
          { analyticsLocations: I } = (0, o.ZP)(
            r.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS,
          );
        i.useEffect(() => {
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
        return (0, a.jsx)(o.Gt, {
          value: I,
          children: (0, a.jsx)("div", {
            className: N.scrollContainer,
            children: (0, a.jsxs)(s.Scroller, {
              className: N.scroller,
              children: [
                (0, a.jsx)("div", {
                  className: N.launcherOuterContainer,
                  children: (0, a.jsx)(A, {
                    activityItem: m,
                    onLaunch: u,
                    channelId: c,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: N.activityDetailsContainer,
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        null != x
                          ? (0, a.jsx)("div", {
                              className: N.heroVideoContainer,
                              children: (0, a.jsx)(d.Z, {
                                loop: !0,
                                autoPlay: !0,
                                muted: !0,
                                className: N.heroVideo,
                                src: x,
                                poster: T.url,
                              }),
                            })
                          : null,
                        (0, a.jsx)("div", {
                          className: N.detailsTitle,
                          children: (0, a.jsx)(s.Heading, {
                            variant: "heading-xxl/bold",
                            children: m.application.name,
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: N.detailsDetails,
                          children: [
                            null != g
                              ? (0, a.jsxs)("div", {
                                  className: N.detailItem,
                                  children: [
                                    (0, a.jsx)(s.GroupIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                    }),
                                    (0, a.jsx)(s.Text, {
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
                              ? (0, a.jsxs)("div", {
                                  className: N.detailItem,
                                  children: [
                                    (0, a.jsx)(s.HourglassIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                    }),
                                    (0, a.jsx)(s.Text, {
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
                            (0, a.jsxs)("div", {
                              className: N.detailItem,
                              children: [
                                (0, a.jsx)(s.TagsIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                }),
                                (0, a.jsx)(s.Text, {
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
                    (0, a.jsx)(s.Heading, {
                      variant: "heading-lg/medium",
                      className: N.detailsDescription,
                      children: m.application.description,
                    }),
                    (0, a.jsx)("div", { className: N.divider }),
                    (0, a.jsx)("div", {
                      className: N.imagesContainer,
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
        var t, r;
        let { activityItem: d, onLaunch: v, channelId: _ } = e,
          C = (0, E.Z)({ applicationId: d.application.id, size: 2048 }),
          { analyticsLocations: p } = (0, o.ZP)(),
          [S, A] = i.useState(
            null !==
              (t = (0, T.$)({ allowGdmActivityChannelSuggestion: !0 })) &&
              void 0 !== t
              ? t
              : void 0,
          ),
          [b, j] = i.useState(
            null !==
              (r = (0, m.d)({
                guildId: S,
                allowGdmActivityChannelSuggestion: !0,
              })) && void 0 !== r
              ? r
              : void 0,
          ),
          D = (0, l.e7)([u.Z], () => u.Z.getChannel(b), [b]),
          Z = (0, T.W)(),
          M = (0, m.F)(S),
          L = i.useCallback(async () => {
            var e;
            if (null != b)
              await (0, I.Z)({
                targetApplicationId:
                  null == d
                    ? void 0
                    : null === (e = d.application) || void 0 === e
                      ? void 0
                      : e.id,
                channelId: b,
                analyticsLocations: p,
                commandOrigin: c.bB.APPLICATION_LAUNCHER,
              }).then(v);
          }, [d, p, v, b]),
          y = i.useCallback(() => {
            (0, s.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("60133"),
                n.e("43035"),
              ]).then(n.bind(n, 827940));
              return (t) =>
                (0, a.jsx)(e, { activityItem: d, ...t, analyticsLocations: p });
            });
          }, [d, p]),
          O =
            null == D ||
            (null != D.guild_id &&
              !(
                null != S &&
                null != b &&
                Z.some((e) => e.value === S) &&
                M.some((e) => e.value.channel.id === b)
              ) &&
              !0);
        return (0, a.jsxs)("div", {
          className: N.launcherInnerContainer,
          children: [
            (0, a.jsx)(x.Z, {
              applicationName: d.application.name,
              imageBackground: C,
              imageClassName: N.launchImage,
              imageNotFoundClassName: N.brokenLaunchImage,
            }),
            (0, a.jsx)(s.Text, {
              variant: "text-md/medium",
              children: f.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE,
            }),
            null == _
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(s.Select, {
                      placeholder: f.Z.Messages.GUILD_SELECT,
                      optionClassName: N.__invalid_option,
                      options: Z,
                      renderOptionValue: (e) => {
                        let t = e.find((e) => e.value === S);
                        return null == t
                          ? null
                          : (0, a.jsx)(g.m, { guildId: t.value });
                      },
                      renderOptionLabel: (e) => {
                        let { value: t } = e;
                        return (0, a.jsx)(g.m, { guildId: t });
                      },
                      isSelected: (e) => e === S,
                      select: (e) => {
                        var t;
                        A(e),
                          j(
                            null !== (t = (0, m.d)({ guildId: e })) &&
                              void 0 !== t
                              ? t
                              : void 0,
                          );
                      },
                      serialize: (e) => e,
                    }),
                    (0, a.jsx)(s.Select, {
                      placeholder:
                        f.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                      optionClassName: N.__invalid_option,
                      options: M,
                      isSelected: (e) => {
                        let { channel: t } = e;
                        return t.id === b;
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
                        let e = M.find((e) => e.value.channel.id === b);
                        return null == e
                          ? null
                          : (0, a.jsx)(h.O, {
                              channel: e.value.channel,
                              users: e.value.users,
                            });
                      },
                      renderOptionLabel: (e) => {
                        let {
                          value: { channel: t, users: n },
                        } = e;
                        return (0, a.jsx)(h.O, { channel: t, users: n });
                      },
                    }),
                    (0, a.jsx)(s.Button, {
                      fullWidth: !0,
                      disabled: O,
                      onClick: L,
                      children: f.Z.Messages.START,
                    }),
                    (0, a.jsx)("div", { className: N.divider }),
                    (0, a.jsx)(s.Button, {
                      fullWidth: !0,
                      color: s.Button.Colors.PRIMARY,
                      onClick: y,
                      children: f.Z.Messages.SHARE,
                    }),
                  ],
                })
              : (0, a.jsxs)("div", {
                  className: N.singleRowShareContainer,
                  children: [
                    (0, a.jsx)(s.Button, {
                      fullWidth: !0,
                      disabled: O,
                      onClick: L,
                      children: f.Z.Messages.START,
                    }),
                    (0, a.jsx)(s.Button, {
                      className: N.shareIconButton,
                      color: s.Button.Colors.PRIMARY,
                      onClick: y,
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
          return b;
        },
        d: function () {
          return j;
        },
      }),
        n(47120);
      var a = n(200651),
        i = n(192379),
        l = n(120356),
        s = n.n(l),
        r = n(468194),
        o = n(442837),
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
      let N = (0, r.Mg)(
          c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP,
        ),
        S = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
        A = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
      function b(e) {
        let {
            channel: t,
            guildId: n,
            locationObject: l,
            onClose: r,
            onActivityItemVisible: c,
            scrollerRef: g,
          } = e,
          [b, j] = i.useState(0),
          D = (0, C.Z)({ guildId: n, enableFilter: !0 }),
          Z = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
          M = (0, o.e7)([I.Z], () => I.Z.getGuild(n), [n]),
          { analyticsLocations: L } = (0, v.ZP)(u.Z.ACTIVITY_DIRECTORY),
          y = (0, x.Z)(null == t ? void 0 : t.id),
          { isDeveloperActivityShelfEnabled: O, filter: B } = (0, o.cj)(
            [T.Z],
            () => ({
              filter: T.Z.getFilter(),
              isDeveloperActivityShelfEnabled: T.Z.getIsEnabled(),
            }),
          );
        if (
          (i.useEffect(() => {
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
              j(
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
          i.useEffect(() => {
            (y || null != n) && (0, m.w1)({ guildId: n, force: !0 });
          }, [n, y]),
          (0, E.g)(),
          (null == M && !y) || null == Z)
        )
          return null;
        let R = D.length > 0;
        return (0, a.jsx)(v.Gt, {
          value: L,
          children: (0, a.jsxs)("div", {
            className: f.scrollContainer,
            children: [
              R
                ? (0, a.jsx)("div", {
                    className: f.scrollBackgroundContainer,
                    style: { top: -b },
                    children: (0, a.jsx)("div", {
                      className: s()(f.scrollTierBackground),
                      style: {
                        height: ((e) => {
                          let t = 1 === e.length;
                          return N + Math.ceil(e.length / 2) * (t ? A : S);
                        })(D),
                      },
                    }),
                  })
                : null,
              (0, a.jsxs)(d.Scroller, {
                ref: g,
                className: f.scroller,
                children: [
                  null,
                  R
                    ? (0, a.jsx)("div", {
                        className: f.scrollSection,
                        children: (0, a.jsx)("div", {
                          className: s()(f.shelf),
                          children: D.map((e) =>
                            (0, a.jsx)(
                              h.Z,
                              {
                                large: 1 === D.length,
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
                    : O && B.length > 0
                      ? (0, a.jsx)(d.Text, {
                          variant: "text-md/normal",
                          className: f.filterError,
                          children:
                            p.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format(
                              { filter: B },
                            ),
                        })
                      : (0, a.jsx)("div", {
                          className: f.spinnerContainer,
                          children: (0, a.jsx)(d.Spinner, {}),
                        }),
                ],
              }),
            ],
          }),
        });
      }
      function j() {
        return (0, a.jsx)(d.Text, {
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
          return L;
        },
        q: function () {
          return y;
        },
      }),
        n(47120);
      var a = n(200651),
        i = n(192379),
        l = n(442837),
        s = n(481060),
        r = n(153867),
        o = n(607070),
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
        b = n(981631),
        j = n(689938),
        D = n(760551);
      function Z(e) {
        return (0, l.e7)(
          [m.Z, C.Z],
          () => {
            let t = m.Z.getGuild(e);
            return null != t && C.Z.can(b.Plq.CREATE_INSTANT_INVITE, t);
          },
          [e],
        );
      }
      let M = ["embedded_background"];
      function L(e) {
        var t, n;
        let {
            applicationId: c,
            guildId: d,
            selectedChannelId: u,
            setSelectedChannelId: C,
            enableSelectedTextChannelInvite: h,
          } = e,
          g = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
          b = (0, p.T)(null != d ? d : null, null != c ? c : null),
          [L, y] = i.useState(
            h && !_.ZP.disableInviteWithTextChannelActivityLaunch,
          ),
          O = (0, f.F)(d);
        i.useEffect(() => {
          var e;
          x.w1({ guildId: d }),
            C(
              null !== (e = (0, f.d)({ guildId: d })) && void 0 !== e
                ? e
                : void 0,
            );
        }, [d, C]);
        let B = null == b ? void 0 : b.activity.activity_preview_video_asset_id,
          R =
            null != B
              ? (0, N.Z)(
                  null !== (t = null == b ? void 0 : b.application.id) &&
                    void 0 !== t
                    ? t
                    : "",
                  B,
                )
              : null,
          { url: V } = (0, S.Z)({
            applicationId:
              null !== (n = null == b ? void 0 : b.application.id) &&
              void 0 !== n
                ? n
                : "",
            size: 1024,
            names: M,
          }),
          k = (0, l.e7)([m.Z], () => m.Z.getGuild(d)),
          P = (0, l.e7)([T.Z, E.Z], () => T.Z.getChannel(E.Z.getChannelId())),
          H = Z(null != d ? d : void 0);
        if ((null == b ? void 0 : b.application) == null || null == k)
          return null;
        let F =
          (null == P ? void 0 : P.name) == null ||
          (null == P ? void 0 : P.name) === ""
            ? j.Z.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME
            : "#".concat(P.name);
        return (0, a.jsxs)(s.Scroller, {
          className: D.scroll,
          children: [
            null != R || null != V
              ? (0, a.jsx)(v.Z, {
                  aspectRatio: 16 / 9,
                  className: D.imageContainer,
                  children: (0, a.jsx)(I.Z, {
                    className: D.video,
                    src: R,
                    loop: !0,
                    autoPlay: !g,
                    poster: V,
                    muted: !0,
                  }),
                })
              : null,
            (0, a.jsxs)("div", {
              className: D.descriptionArea,
              children: [
                (0, a.jsx)(s.Heading, {
                  variant: "heading-xl/semibold",
                  children: null == b ? void 0 : b.application.name,
                }),
                (0, a.jsx)(s.Text, {
                  className: D.descriptionAreaSubtext,
                  variant: "text-md/normal",
                  children: null == b ? void 0 : b.application.description,
                }),
              ],
            }),
            (0, a.jsx)(s.Select, {
              placeholder:
                j.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
              optionClassName: D.__invalid_option,
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
                  : (0, a.jsx)(A.O, {
                      channel: e.value.channel,
                      users: e.value.users,
                    });
              },
              renderOptionLabel: (e) => {
                let {
                  value: { channel: t, users: n },
                } = e;
                return (0, a.jsx)(A.O, { channel: t, users: n });
              },
            }),
            H && h
              ? (0, a.jsxs)(s.Clickable, {
                  className: D.checkboxContainer,
                  onClick: () => {
                    let e = !L;
                    r.ZP.updatedUnsyncedSettings({
                      disableInviteWithTextChannelActivityLaunch: !e,
                    }),
                      y(e);
                  },
                  children: [
                    (0, a.jsx)(s.Checkbox, {
                      type: s.Checkbox.Types.INVERTED,
                      className: D.checkbox,
                      value: L,
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
      function y(e) {
        let {
            applicationId: t,
            guildId: n,
            locationObject: i,
            onBack: r,
            onClose: o,
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
                locationObject: i,
                channelId: v,
                analyticsLocations: m,
                commandOrigin: u.bB.APPLICATION_LAUNCHER,
              })) &&
                (o(),
                null != f &&
                  A &&
                  N &&
                  (await x.sN({
                    activityChannelId: v,
                    invitedChannelId: f.id,
                    applicationId: C.application.id,
                    location: b.Sbl.ACTIVITY_SHELF,
                  })));
          };
        return (0, a.jsx)(d.Gt, {
          value: m,
          children: (0, a.jsxs)("div", {
            className: D.footerContainer,
            children: [
              (0, a.jsx)(s.Clickable, {
                onClick: r,
                className: D.backToBrowse,
                children: (0, a.jsx)(s.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children: j.Z.Messages.BACK,
                }),
              }),
              null == v
                ? (0, a.jsx)("div", {})
                : (0, a.jsx)(s.Button, {
                    className: D.launchButton,
                    onClick: M,
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
    264165: function (e, t, n) {
      var a = n(200651);
      n(192379);
      var i = n(120356),
        l = n.n(i),
        s = n(354555);
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
      var a = n(200651);
      n(192379);
      var i = n(120356),
        l = n.n(i),
        s = n(481060),
        r = n(925329),
        o = n(932355);
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
        i = n(200651),
        l = n(192379),
        s = n(120356),
        r = n.n(s),
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
      class I extends (a = l.PureComponent) {
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
            v(this, "_ref", void 0),
            v(this, "defaultRenderUser", (e, t, n, a) => {
              let { onClick: l, size: s, guildId: v } = this.props,
                I = e instanceof c.Z ? e : null != e ? e.user : null;
              return null == I
                ? (0, i.jsx)("div", { className: r()(d.emptyUser, t) }, n)
                : (0, i.jsx)(
                    o.Avatar,
                    {
                      tabIndex: 0,
                      src: I.getAvatarURL(v, (0, o.getAvatarSize)(s)),
                      size: s,
                      "aria-label": I.username,
                      className: r()(t, u.cursorPointer, d.avatarSize),
                      onClick: (e) => (null != l ? l(e, I, this._ref) : null),
                    },
                    I.id,
                  );
            });
        }
      }
      v(I, "defaultProps", {
        max: 10,
        renderMoreUsers: function (e, t, n) {
          return (0, i.jsx)("div", { className: t, children: e }, n);
        },
        size: o.AvatarSizes.SIZE_24,
      }),
        (t.Z = I);
    },
    558522: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(200651);
      n(192379);
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
//# sourceMappingURL=b900dc7726063615ba5e.js.map
