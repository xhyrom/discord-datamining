"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55590"],
  {
    720617: function (e) {
      e.exports = "/assets/ebf84e1aa6fb44b7efdd.png";
    },
    272162: function (e) {
      e.exports = "/assets/88d945109097ad5c745b.png";
    },
    632989: function (e) {
      e.exports = "/assets/62c59076382ded022337.png";
    },
    376252: function (e) {
      e.exports = "/assets/93ab732d58f70a3ed0a2.png";
    },
    273226: function (e) {
      e.exports = "/assets/4c21fb0c99a526b7823c.png";
    },
    922026: function (e) {
      e.exports = "/assets/6e87c747818acee222e7.png";
    },
    873180: function (e) {
      e.exports = "/assets/71efce5219eba43e8ceb.png";
    },
    827926: function (e) {
      e.exports = "/assets/5af35b4ab800d5c7fb54.png";
    },
    450559: function (e) {
      e.exports = "/assets/8e5014ac73e2da4a4bce.svg";
    },
    454823: function (e) {
      e.exports = "/assets/8c9f4abf65e46b1bedea.svg";
    },
    951099: function (e) {
      e.exports = "/assets/274e8ecd28144b14119b.svg";
    },
    136347: function (e) {
      e.exports = "/assets/8ee23ef7e30a6475ce01.svg";
    },
    977706: function (e) {
      e.exports = "/assets/0344122956b006ea4bf8.svg";
    },
    403756: function (e) {
      e.exports = "/assets/fab2f7d5a60c0521d9d8.svg";
    },
    536404: function (e) {
      e.exports = "/assets/ba999695be8a1ce8aa72.svg";
    },
    569347: function (e) {
      e.exports = "/assets/95cebf41f09c3958f1d3.svg";
    },
    915600: function (e) {
      e.exports = "/assets/579173bc7be36cccaefd.svg";
    },
    670289: function (e) {
      e.exports = "/assets/8af67a8c4f4f507be08b.svg";
    },
    341382: function (e, t, s) {
      s.d(t, {
        M: function () {
          return i;
        },
      });
      var n = s(570140);
      function i(e) {
        n.Z.dispatch({
          type: "PREMIUM_REQUIRED_MODAL_CLOSE",
          shouldContinue: e,
        });
      }
      s(78839), s(355467);
    },
    167042: function (e, t, s) {
      s.d(t, {
        $: function () {
          return i;
        },
      });
      var n = s(51596);
      let i = {
        binds: ["mod+k", "mod+t"],
        comboKeysBindGlobal: !0,
        action: () => ((0, n.$Z)("KEYBIND", ""), !1),
      };
    },
    951483: function (e, t, s) {
      s.d(t, {
        Sr: function () {
          return I;
        },
        Xq: function () {
          return S;
        },
        Zg: function () {
          return T;
        },
      }),
        s(411104);
      var n = s(186070),
        i = s(185514),
        r = s(360038),
        o = s(175724),
        a = s(705371),
        l = s(138976),
        c = s(167042),
        d = s(239748),
        u = s(337482),
        h = s(679080),
        E = s(510761),
        p = s(189509),
        m = s(673553),
        _ = s(280492),
        C = s(746887),
        g = s(721383),
        N = s(743810),
        f = s(981631),
        b = s(388032);
      function R() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return t.map((e) => {
          let t = I[e];
          if (null == t)
            throw Error("getBindsFor(...): No bind for ".concat(t));
          return t.binds[0];
        });
      }
      let I = {
          [f.EkH.SERVER_NEXT]: E.nq,
          [f.EkH.SERVER_PREV]: E.X3,
          [f.EkH.CHANNEL_NEXT]: i.tQ,
          [f.EkH.CHANNEL_PREV]: i.x5,
          [f.EkH.NAVIGATE_BACK]: i.Nx,
          [f.EkH.NAVIGATE_FORWARD]: i.On,
          [f.EkH.UNREAD_NEXT]: N.pd,
          [f.EkH.UNREAD_PREV]: N.wk,
          [f.EkH.MENTION_CHANNEL_NEXT]: N.Nv,
          [f.EkH.MENTION_CHANNEL_PREV]: N.uX,
          [f.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
          [f.EkH.JUMP_TO_GUILD]: r.u,
          [f.EkH.SUBMIT]: p.z,
          [f.EkH.TEXTAREA_FOCUS]: m.U,
          [f.EkH.MARK_CHANNEL_READ]: o.f,
          [f.EkH.MARK_SERVER_READ]: a.l,
          [f.EkH.TOGGLE_MUTE]: _.iN,
          [f.EkH.TOGGLE_DEAFEN]: _.oV,
          [f.EkH.TOGGLE_CATEGORY_COLLAPSED]: C.u,
          [f.EkH.SCROLL_UP]: u.B2,
          [f.EkH.SCROLL_DOWN]: u.gN,
          [f.EkH.SEARCH_EMOJIS]: h.S,
          [f.EkH.TOGGLE_HOTKEYS]: g._,
          [f.EkH.JUMP_TO_FIRST_UNREAD]: l.O,
          [f.EkH.RETURN_TO_AUDIO_CHANNEL]: d.F,
          [f.EkH.CALL_ACCEPT]: n.IL,
          [f.EkH.CALL_START]: n.FI,
          [f.EkH.QUICKSWITCHER_SHOW]: c.$,
        },
        S = { [f.EkH.QUICKSWITCHER_SHOW]: c.$ };
      function T() {
        return [
          {
            description: b.intl.string(b.t.bx4Uy8),
            binds: R(f.EkH.SERVER_PREV, f.EkH.SERVER_NEXT),
          },
          {
            description: b.intl.string(b.t["+Wem6u"]),
            binds: R(f.EkH.CHANNEL_PREV, f.EkH.CHANNEL_NEXT),
          },
          {
            description: b.intl.string(b.t["+2fcd3"]),
            binds: R(f.EkH.NAVIGATE_BACK, f.EkH.NAVIGATE_FORWARD),
          },
          {
            description: b.intl.string(b.t.eVmj1N),
            binds: R(f.EkH.UNREAD_PREV, f.EkH.UNREAD_NEXT),
          },
          {
            description: b.intl.string(b.t.EcqS7e),
            binds: R(f.EkH.MENTION_CHANNEL_PREV, f.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
          },
          {
            description: b.intl.string(b.t["Bqss7+"]),
            binds: R(f.EkH.TOGGLE_PREVIOUS_GUILD),
          },
          {
            description: b.intl.string(b.t.UaXAPz),
            binds: R(f.EkH.MARK_SERVER_READ),
          },
          {
            description: b.intl.string(b.t["5X9vFh"]),
            binds: R(f.EkH.MARK_CHANNEL_READ),
          },
          {
            description: b.intl.string(b.t.JoxNnp),
            binds: R(f.EkH.SEARCH_EMOJIS),
            groupEnd: !0,
          },
          {
            description: b.intl.string(b.t.tL6eVV),
            binds: R(f.EkH.TOGGLE_MUTE),
          },
          {
            description: b.intl.string(b.t["QXe/7e"]),
            binds: R(f.EkH.TOGGLE_DEAFEN),
          },
          {
            description: b.intl.string(b.t.d6UIio),
            binds: R(f.EkH.CALL_ACCEPT),
          },
          {
            description: b.intl.string(b.t.IcEW09),
            binds: R(f.EkH.MARK_CHANNEL_READ),
          },
          {
            description: b.intl.string(b.t.WN2dsb),
            binds: R(f.EkH.CALL_START),
            groupEnd: !0,
          },
          {
            description: b.intl.string(b.t.L3RYYG),
            binds: R(f.EkH.SCROLL_UP, f.EkH.SCROLL_DOWN),
          },
          {
            description: b.intl.string(b.t["3HAurK"]),
            binds: R(f.EkH.JUMP_TO_FIRST_UNREAD),
          },
          {
            description: b.intl.string(b.t.rrYBEh),
            binds: R(f.EkH.TEXTAREA_FOCUS),
          },
          {
            description: b.intl.string(b.t.yYsRlJ),
            binds: R(f.EkH.QUICKSWITCHER_SHOW),
          },
        ];
      }
    },
    134616: function (e, t, s) {
      s.d(t, {
        u: function () {
          return d;
        },
      });
      var n = s(513431),
        i = s(481060),
        r = s(40851),
        o = s(574254),
        a = s(585483),
        l = s(547420),
        c = s(981631);
      let d = {
        POP_LAYER: {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action(e) {
            if ((0, i.isInDndMode)()) return !1;
            if (a.S.hasSubscribers(c.CkL.CALL_DECLINE))
              return a.S.dispatch(c.CkL.CALL_DECLINE), !1;
            if (o.Z.close()) return !1;
            if ((0, n.k)(e.target)) {
              let t = (0, r.J5)(e.target);
              if (null == t ? void 0 : t.hasSubscribers(c.CkL.POPOUT_CLOSE))
                return t.dispatch(c.CkL.POPOUT_CLOSE), !1;
            }
            if (a.S.hasSubscribers(c.CkL.MODAL_CLOSE))
              return a.S.dispatch(c.CkL.MODAL_CLOSE), !1;
            a.S.dispatch(c.CkL.LAYER_POP_ESCAPE_KEY);
          },
        },
        ...l.ZP,
      };
    },
    472365: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return G;
        },
      }),
        s(411104);
      var n = s(200651),
        i = s(192379),
        r = s(120356),
        o = s.n(r),
        a = s(990547),
        l = s(399606),
        c = s(481060),
        d = s(588705),
        u = s(700582),
        h = s(100527),
        E = s(906732),
        p = s(388905),
        m = s(792766),
        _ = s(600164),
        C = s(436774),
        g = s(313201),
        N = s(44609),
        f = s(731971),
        b = s(451603),
        R = s(885714),
        I = s(973616),
        S = s(594174),
        T = s(855981),
        O = s(55543),
        x = s(626135),
        y = s(768581),
        M = s(358085),
        A = s(998502),
        L = s(379164),
        P = s(590965),
        v = s(981631),
        D = s(474936),
        U = s(388032),
        Z = s(939661),
        w = s(232186);
      function k() {
        let { analyticsLocations: e, sourceAnalyticsLocations: t } = (0, E.ZP)(
          h.Z.PREMIUM_UPSELL_TOOLTIP,
        );
        return (
          i.useEffect(() => {
            x.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
              type: D.cd.GUILD_CAP_INLINE_INVITE_MODAL,
              location: { page: v.ZY5.NATIVE_INVITE_MODAL },
              location_stack: t,
            });
          }, [t]),
          (0, n.jsxs)(c.Clickable, {
            onClick: () =>
              (0, R.Z)({
                analyticsSource: { page: v.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                analyticsLocation: {
                  page: v.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                  section: v.jXE.GUILD_CAP_UPSELL_MODAL,
                },
                analyticsLocations: e,
              }),
            className: Z.experimentUpsellError,
            children: [
              (0, n.jsx)(c.NitroWheelIcon, {
                size: "md",
                className: Z.experimentUpsellIcon,
                color: C.JX.PREMIUM_TIER_2,
              }),
              (0, n.jsx)("span", {
                className: Z.experimentUpsellText,
                children: U.intl.string(U.t["4/W4Pz"]),
              }),
              (0, n.jsx)("span", {
                className: Z.experimentGetNitro,
                children: U.intl.string(U.t.b6KOkJ),
              }),
            ],
          })
        );
      }
      function j(e) {
        let { className: t } = e;
        return (0, n.jsxs)("div", {
          "aria-hidden": "true",
          className: o()(Z.iconContainer, t),
          children: [
            (0, n.jsx)(T.Z, { className: Z.iconSparklePlus }),
            (0, n.jsx)(c.LinkIcon, {
              size: "custom",
              color: "currentColor",
              className: Z.iconLink,
              width: 40,
              height: 40,
            }),
            (0, n.jsx)(O.Z, { className: Z.iconSparkleStar }),
          ],
        });
      }
      function H(e) {
        let { transitionState: t } = e,
          s = (0, g.Dt)(),
          { analyticsLocations: i } = (0, E.ZP)(h.Z.INVITE_MODAL);
        return (0, n.jsx)(E.Gt, {
          value: i,
          children: (0, n.jsx)(c.ModalRoot, {
            "aria-labelledby": s,
            transitionState: t,
            children: (0, n.jsxs)(c.ModalContent, {
              className: Z.errorContent,
              children: [
                (0, n.jsx)(j, { className: Z.errorImage }),
                (0, n.jsx)(c.Heading, {
                  id: s,
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  children: U.intl.string(U.t.u9zxnZ),
                }),
                (0, n.jsx)("div", {
                  className: Z.errorBody,
                  children: U.intl.string(U.t.FWkU6O),
                }),
                (0, n.jsx)(p.zx, {
                  size: p.zx.Sizes.LARGE,
                  onClick: () => L.Z.close(),
                  color: p.zx.Colors.BRAND,
                  children: U.intl.string(U.t.wcqOoK),
                }),
              ],
            }),
          }),
        });
      }
      function G(e) {
        let t,
          s,
          r,
          { transitionState: o } = e,
          C = (0, N.WR)({ location: "AcceptInviteModal" });
        (0, l.e7)([S.default], () => {
          var e;
          return null === (e = S.default.getCurrentUser()) || void 0 === e
            ? void 0
            : e.premiumType;
        });
        let R = (0, l.e7)([S.default], () => S.default.getCurrentUser()),
          {
            invite: T,
            error: O,
            submitting: x,
          } = (0, l.cj)([P.Z], () => P.Z.getProps()),
          { nickname: D } = (0, f.XW)();
        i.useEffect(() => {
          !__OVERLAY__ &&
            M.isPlatformEmbedded &&
            ((0, M.isWindows)() ? A.ZP.minimize() : A.ZP.restore(),
            A.ZP.focus());
        }, []);
        let j = (0, g.Dt)(),
          { analyticsLocations: G } = (0, E.ZP)(h.Z.INVITE_MODAL);
        if (null == T || null == R) return null;
        if (
          T.state === v.r2o.EXPIRED ||
          T.state === v.r2o.BANNED ||
          T.state === v.r2o.ERROR
        )
          return (0, n.jsx)(H, { transitionState: o });
        if (null == T.channel) return null;
        function V() {
          null != T && L.Z.acceptInvite(T);
        }
        let { guild: K, channel: W, inviter: Y, target_application: F } = T,
          z = null != K,
          X = null != T.stage_instance,
          Q = null == T.guild && null == T.channel && null != T.inviter;
        if (null != F)
          (t = null == K ? void 0 : K.name),
            (s = I.ZP.createFromServer(F).getCoverImageURL(1024));
        else if (null != K)
          (t = K.name),
            (s = y.ZP.getGuildSplashURL({ id: K.id, splash: K.splash }));
        else if (
          ((null == (t = W.name) || "" === t) && null != Y && (t = Y.username),
          null == t)
        )
          throw Error("no name for group DM invite");
        let B = (0, b.yU)();
        return (
          (r = X
            ? U.intl.string(U.t["5UKyUl"])
            : C
              ? U.intl.format(U.t["9sWQNT"], {
                  usernameHook: () =>
                    (0, n.jsx)("span", {
                      children: null != D && "" !== D.trim() ? D : R.globalName,
                    }),
                })
              : Q
                ? U.intl.string(U.t["e/6Ogo"])
                : U.intl.format(U.t.QD7BDA, { guildName: t })),
          (0, n.jsx)(E.Gt, {
            value: G,
            children: (0, n.jsxs)(c.ModalRoot, {
              size: c.ModalSize.DYNAMIC,
              "aria-labelledby": j,
              transitionState: o,
              className: Z.container,
              impression: {
                impressionName: a.ImpressionNames.INVITE_ACCEPT,
                impressionProperties: {
                  guild_id: null == K ? void 0 : K.id,
                  invite_code: T.code,
                },
              },
              children: [
                (0, n.jsx)(c.ModalContent, {
                  className: Z.contentWrapper,
                  children: (0, n.jsxs)(_.Z, {
                    className: Z.inviteContent,
                    direction: _.Z.Direction.VERTICAL,
                    justify: _.Z.Justify.BETWEEN,
                    children: [
                      (0, n.jsx)("div", {
                        id: j,
                        children: (0, n.jsx)(d.Z, {
                          invite: T,
                          disableUser: z,
                          error: O,
                        }),
                      }),
                      X && null != K
                        ? (0, n.jsx)("div", {
                            className: Z.stage,
                            children: (0, n.jsx)(m.Z, {
                              isCard: !0,
                              stageInstance: T.stage_instance,
                              guild: K,
                            }),
                          })
                        : null,
                      (0, n.jsxs)("div", {
                        className: Z.ctas,
                        children: [
                          B ? (0, n.jsx)(k, {}) : null,
                          null == F
                            ? (0, n.jsx)(c.Tooltip, {
                                text: B ? U.intl.string(U.t.iLyuDA) : null,
                                position: "bottom",
                                children: (e) => {
                                  let { onMouseEnter: t, onMouseLeave: s } = e;
                                  return (0, n.jsx)(p.zx, {
                                    size: p.zx.Sizes.LARGE,
                                    onClick: V,
                                    submitting: x,
                                    disabled: B,
                                    color: X
                                      ? p.zx.Colors.GREEN
                                      : p.zx.Colors.BRAND,
                                    onMouseEnter: t,
                                    onMouseLeave: s,
                                    children: B
                                      ? U.intl.string(U.t.ZNCziI)
                                      : (0, n.jsxs)("div", {
                                          className: Z.acceptAs,
                                          children: [
                                            C &&
                                              (0, n.jsx)(u.Z, {
                                                "aria-hidden": !0,
                                                size: c.AvatarSizes.SIZE_16,
                                                user: R,
                                              }),
                                            r,
                                          ],
                                        }),
                                  });
                                },
                              })
                            : (0, n.jsxs)("div", {
                                className: Z.buttonGroup,
                                children: [
                                  (0, n.jsx)(p.zx, {
                                    size: p.zx.Sizes.LARGE,
                                    onClick: V,
                                    submitting: x,
                                    children: U.intl.string(U.t.RscU7O),
                                  }),
                                  (0, n.jsx)(p.zx, {
                                    color: p.zx.Colors.PRIMARY,
                                    size: p.zx.Sizes.LARGE,
                                    onClick: V,
                                    submitting: x,
                                    children: U.intl.string(U.t.eylRaW),
                                  }),
                                ],
                              }),
                          (0, n.jsx)(_.Z, {
                            justify: _.Z.Justify.CENTER,
                            className: w.marginTop8,
                            children: (0, n.jsx)(p.zx, {
                              look: p.zx.Looks.LINK,
                              className: Z.noThanksButton,
                              onClick: function () {
                                L.Z.close();
                              },
                              color: p.zx.Colors.TRANSPARENT,
                              children: U.intl.string(U.t.ndsK4e),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                null != s &&
                  (0, n.jsx)("div", {
                    className: Z.inviteSplash,
                    style: { backgroundImage: "url(".concat(s, ")") },
                  }),
              ],
            }),
          })
        );
      }
    },
    379164: function (e, t, s) {
      s(47120);
      var n = s(570140),
        i = s(447543),
        r = s(87051),
        o = s(18438),
        a = s(731971),
        l = s(695346),
        c = s(782605),
        d = s(621600),
        u = s(88658);
      t.Z = {
        acceptInvite(e) {
          let t = i.Z.getInviteContext("Desktop Invite Modal", e),
            s = (0, a.y)(),
            h = (0, a.h6)(),
            E = (0, a.U1)(),
            p = (0, a.c4)();
          i.Z.acceptInvite({
            inviteKey: e.code,
            context: t,
            callback: (e) => {
              null != e &&
                null != e.guild &&
                null != e.channel &&
                !__OVERLAY__ &&
                i.Z.transitionToInvite(e);
            },
          }).then(
            () => {
              if ((this.close(), null != e.guild)) {
                if (h) {
                  var t;
                  let s = new Set((0, u.YK)());
                  s.add(null === (t = e.guild) || void 0 === t ? void 0 : t.id),
                    l.h2.updateSetting(Array.from(s));
                }
                if (!E) {
                  let t = new Set((0, u._o)());
                  t.add(e.guild.id), l.SE.updateSetting(Array.from(t));
                }
                null != s && (0, o.iq)(e.guild.id, { nick: s }),
                  r.Z.updateGuildNotificationSettings(
                    e.guild.id,
                    { muted: !p },
                    d.ZB.Muted,
                  );
              }
            },
            (e) => {
              n.Z.dispatch({
                type: "INVITE_MODAL_ERROR",
                message: (0, c.O)(e.code),
              });
            },
          );
        },
        close() {
          n.Z.dispatch({ type: "INVITE_MODAL_CLOSE" });
        },
      };
    },
    185666: function (e, t, s) {
      var n = s(200651);
      s(192379);
      var i = s(481060),
        r = s(570140),
        o = s(317770),
        a = s(731971),
        l = s(472365),
        c = s(590965);
      let d = "INVITE_MODAL_KEY";
      class u extends o.Z {
        _initialize() {
          r.Z.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            r.Z.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
        }
        _terminate() {
          (0, i.closeModal)(d),
            r.Z.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            r.Z.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
        }
        handleOpenModal() {
          c.Z.isOpen() &&
            !(0, i.hasModalOpen)(d) &&
            (0, i.openModal)((e) => (0, n.jsx)(l.Z, { ...e }), {
              modalKey: d,
              onCloseRequest: () => {
                (0, a.oE)(), r.Z.dispatch({ type: "INVITE_MODAL_CLOSE" });
              },
            });
        }
        handleCloseModal() {
          (0, i.closeModal)(d);
        }
      }
      t.Z = new u();
    },
    503737: function (e, t, s) {
      var n = s(200651);
      s(192379);
      var i = s(481060),
        r = s(570140),
        o = s(468026),
        a = s(317770),
        l = s(981631),
        c = s(388032);
      let d = "ActivityInviteManager",
        u = () => {
          r.Z.dispatch({ type: "ACTIVITY_INVITE_MODAL_CLOSE" });
        };
      class h extends a.Z {
        _initialize() {
          r.Z.subscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen),
            r.Z.subscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose);
        }
        _terminate() {
          r.Z.unsubscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen),
            r.Z.unsubscribe(
              "ACTIVITY_INVITE_MODAL_CLOSE",
              this.handleModalClose,
            );
        }
        handleModalOpen(e) {
          let { activity: t, isPrivate: r, context: a } = e,
            h =
              a === l.IlC.POPOUT
                ? i.POPOUT_MODAL_CONTEXT
                : i.DEFAULT_MODAL_CONTEXT;
          r
            ? (0, i.openModal)(
                (e) =>
                  (0, n.jsx)(o.default, {
                    title: c.intl.formatToPlainString(c.t["2tN7io"], {
                      name: t.name,
                    }),
                    body: c.intl.string(c.t.MAxtkp),
                    confirmText: c.intl.string(c.t.BddRzc),
                    ...e,
                  }),
                { onCloseCallback: u, modalKey: d },
                h,
              )
            : (0, i.openModalLazy)(
                async () => {
                  let { default: e } = await s
                    .e("79921")
                    .then(s.bind(s, 699099));
                  return (t) => (0, n.jsx)(e, { ...t });
                },
                { onCloseCallback: u, modalKey: d, contextKey: h },
              );
        }
        handleModalClose(e) {
          (0, i.closeModal)(d);
        }
      }
      t.Z = new h();
    },
    14429: function (e, t, s) {
      let n = (0, s(818083).B)({
        kind: "user",
        id: "2021-02_staff_qc_debugging",
        label: "Display QS scores in results. Not a real experiment",
        defaultConfig: { showScores: !1 },
        treatments: [
          {
            id: 1,
            label: "Show scores in QS results",
            config: { showScores: !0 },
          },
        ],
      });
      t.Z = n;
    },
    175281: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return U;
        },
      }),
        s(47120),
        s(653041);
      var n,
        i,
        r = s(200651),
        o = s(192379),
        a = s(120356),
        l = s.n(a),
        c = s(512722),
        d = s.n(c),
        u = s(392711),
        h = s.n(u),
        E = s(748780),
        p = s(442837),
        m = s(215569),
        _ = s(481060),
        C = s(612226),
        g = s(951483),
        N = s(714338),
        f = s(607070),
        b = s(585483),
        R = s(557177),
        I = s(264549),
        S = s(981631),
        T = s(388032),
        O = s(521287);
      function x(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      ((i = n || (n = {})).UP = "UP"),
        (i.DOWN = "DOWN"),
        (i.LEFT = "LEFT"),
        (i.RIGHT = "RIGHT");
      let y = {
        UP: h().throttle(() => (0, R.GN)("ddr-up"), 100),
        DOWN: h().throttle(() => (0, R.GN)("ddr-down"), 100),
        LEFT: h().throttle(() => (0, R.GN)("ddr-left"), 100),
        RIGHT: h().throttle(() => (0, R.GN)("ddr-right"), 100),
      };
      function M(e) {
        switch (e.keyCode) {
          case S.yXg.ARROW_UP:
            return "UP";
          case S.yXg.ARROW_DOWN:
            return "DOWN";
          case S.yXg.ARROW_LEFT:
            return "LEFT";
          case S.yXg.ARROW_RIGHT:
            return "RIGHT";
          default:
            return null;
        }
      }
      let A = [
        C.Q2.MESSAGE,
        C.Q2.NAVIGATION,
        C.Q2.VOICE_AND_VIDEO,
        C.Q2.CHAT,
        C.Q2.MISCELLANEOUS,
      ];
      function L(e) {
        let { showBackdrop: t } = e;
        return (0, r.jsx)("div", {
          className: l()(O.backdrop, { [O.show]: t }),
        });
      }
      function P() {
        let e = o.useMemo(
          () =>
            h()((0, C.Rv)())
              .groupBy((e) => e.group)
              .value(),
          [],
        );
        return (0, r.jsx)("div", {
          className: O.keyboardShortcutList,
          children: A.map((t) => {
            let s = e[t],
              n = (0, C.UD)(t),
              i = (0, C.U6)(t);
            return (0, r.jsxs)(
              "div",
              {
                className: O.keyboardShortcutSection,
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)(_.Heading, {
                        variant: "heading-lg/semibold",
                        children: n,
                      }),
                      null != i &&
                        (0, r.jsx)(_.Text, {
                          className: O.keybindGroupDescription,
                          variant: "text-sm/normal",
                          children: i,
                        }),
                    ],
                  }),
                  (0, r.jsx)(
                    "div",
                    {
                      className: O.keyboardShortcutListGroup,
                      children: s.map((e, t) => {
                        var s;
                        return (null === (s = e.predicate) || void 0 === s
                          ? void 0
                          : s.call(e)) === !1
                          ? null
                          : (0, r.jsxs)(
                              "div",
                              {
                                className: l()(O.keybindGroup),
                                children: [
                                  (0, r.jsx)(_.Text, {
                                    variant: "text-sm/normal",
                                    children: e.description,
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "keybind-shortcuts",
                                    children: e.binds.map((e) =>
                                      (0, r.jsx)(
                                        _.KeyCombo,
                                        {
                                          className: O.keybindKey,
                                          shortcut: e,
                                        },
                                        e,
                                      ),
                                    ),
                                  }),
                                ],
                              },
                              t,
                            );
                      }),
                    },
                    t,
                  ),
                ],
              },
              t,
            );
          }),
        });
      }
      class v extends o.PureComponent {
        componentDidMount() {
          (this.lastInputedKeys = []),
            b.S.subscribe(S.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            b.S.subscribe(S.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.addEventListener("keydown", this.handleKeyDown, {
              capture: !0,
            }),
            window.addEventListener("keyup", this.handleKeyUp, { capture: !0 });
        }
        componentWillUnmount() {
          b.S.unsubscribe(S.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            b.S.unsubscribe(S.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.removeEventListener("keydown", this.handleKeyDown, {
              capture: !0,
            }),
            window.removeEventListener("keyup", this.handleKeyUp, {
              capture: !0,
            });
        }
        render() {
          let { UP: e, DOWN: t, LEFT: s, RIGHT: n } = this.state;
          return (0, r.jsxs)(E.Z.div, {
            className: O.keyboardShortcutsModal,
            style: this.getStyles(),
            children: [
              (0, r.jsxs)(_.H, {
                className: O.modalTitle,
                children: [
                  (0, r.jsx)("div", {
                    className: O.content,
                    children: T.intl.string(T.t["1BdUt7"]),
                  }),
                  (0, r.jsx)(_.KeyCombo, { shortcut: "mod+/" }),
                ],
              }),
              (0, r.jsx)("div", {
                className: O.modalSubtitle,
                children: T.intl.string(T.t["2t19lZ"]),
              }),
              (0, r.jsxs)("div", {
                className: O.ddrArrows,
                children: [
                  (0, r.jsx)(D, {
                    arrow: "LEFT",
                    isActive: s,
                    className: O.left,
                    children: "left",
                  }),
                  (0, r.jsx)(D, {
                    arrow: "DOWN",
                    isActive: t,
                    className: O.down,
                    children: "down",
                  }),
                  (0, r.jsx)(D, {
                    arrow: "UP",
                    isActive: e,
                    className: O.up,
                    children: "up",
                  }),
                  (0, r.jsx)(D, {
                    arrow: "RIGHT",
                    isActive: n,
                    className: O.right,
                    children: "right",
                  }),
                ],
              }),
              (0, r.jsx)(_.AdvancedScrollerAuto, {
                ref: this.scrollerRef,
                fade: !0,
                children: (0, r.jsx)(_.HeadingLevel, {
                  children: (0, r.jsx)(P, {}),
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            x(this, "state", {
              UP: !1,
              DOWN: !1,
              LEFT: !1,
              RIGHT: !1,
              opacity: new E.Z.Value(1),
              scaleX: new E.Z.Value(1),
              scaleY: new E.Z.Value(0),
              animating: !1,
            }),
            x(this, "scrollerRef", o.createRef()),
            x(this, "lastInputedKeys", []),
            x(this, "scrollPageUp", () => {
              let e = this.scrollerRef.current;
              d()(null != e, "Scroller is pagedUp when not mounted"),
                e.scrollPageUp({ animate: !0 });
            }),
            x(this, "scrollPageDown", () => {
              let e = this.scrollerRef.current;
              d()(null != e, "Scroller is pagedDown when not mounted"),
                e.scrollPageDown({ animate: !0 });
            }),
            x(this, "arrowUp", (e) => {
              let { direction: t } = e;
              this.setState({ [t]: !1 });
            }),
            x(this, "arrowDown", (e) => {
              let { direction: t } = e;
              y[t](), this.setState({ [t]: !0 });
            }),
            x(this, "componentWillLeave", (e) => {
              this.setState({ animating: !0 }),
                this.state.opacity.setValue(1),
                this.state.scaleX.setValue(0.5),
                this.state.scaleY.setValue(1),
                E.Z.sequence([
                  E.Z.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 800,
                    easing: E.Z.Easing.cubic,
                  }),
                ]).start(e);
            }),
            x(this, "toggleOpacity", () => {
              1 === this.state.opacity._value
                ? this.state.opacity.setValue(0)
                : this.state.opacity.setValue(1);
            }),
            x(this, "getStyles", () => ({
              opacity: this.state.opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  scaleX: this.state.scaleX.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 2],
                  }),
                },
                {
                  scaleY: this.state.scaleY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ],
            })),
            x(this, "handleKeyDown", (e) => {
              if (
                (this.lastInputedKeys.push(e.keyCode),
                (this.lastInputedKeys = this.lastInputedKeys.slice(-5)),
                this.lastInputedKeys[0] === S.yXg.H &&
                  this.lastInputedKeys[1] === S.yXg.H &&
                  this.lastInputedKeys[2] === S.yXg.ARROW_RIGHT &&
                  this.lastInputedKeys[3] === S.yXg.N &&
                  this.lastInputedKeys[4] === S.yXg.K &&
                  this.props.activateRagingDemon(),
                this.props.keyboardModeEnabled)
              )
                return;
              let t = M(e);
              null !== t &&
                (e.stopPropagation(),
                e.preventDefault(),
                this.arrowDown({ direction: t }));
            }),
            x(this, "handleKeyUp", (e) => {
              if (this.props.keyboardModeEnabled) return;
              let t = M(e);
              null !== t &&
                (e.stopPropagation(),
                e.preventDefault(),
                this.arrowUp({ direction: t }));
            }),
            x(this, "onArrowClick", (e) => {
              this.arrowDown({ direction: e });
            });
        }
      }
      function D(e) {
        let { isActive: t, arrow: s, className: n, children: i } = e,
          [a, c] = o.useState(t),
          d = o.useCallback(() => {
            y[s](), c(!0);
          }, [s]);
        return (
          o.useEffect(() => {
            if (a) {
              let e = setTimeout(() => c(!1), 500);
              return () => clearTimeout(e);
            }
          }, [a]),
          (0, r.jsx)(_.Clickable, {
            onClick: d,
            className: l()(O.arrow, n, { [O.active]: t || a }),
            children: i,
          })
        );
      }
      function U(e) {
        let { transitionState: t, onClose: s } = e,
          [n, i] = o.useState(!1),
          [a, c] = o.useState(!1),
          d = o.useMemo(() => (__OVERLAY__ ? (0, g.Zg)() : (0, C.Rv)()), []),
          { keyboardModeEnabled: u, useReducedMotion: h } = (0, p.cj)(
            [f.Z],
            () => ({
              keyboardModeEnabled: f.Z.keyboardModeEnabled,
              useReducedMotion: f.Z.useReducedMotion,
            }),
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(L, { showBackdrop: a }),
            (0, r.jsx)(_.ModalRoot, {
              className: l()(O.noBackground, { [O.noShadow]: n }),
              size: _.ModalSize.DYNAMIC,
              "aria-label": T.intl.string(T.t.T9DA2N),
              transitionState: t,
              children: (0, r.jsx)(m.W, {
                component: "div",
                children: n
                  ? (0, r.jsx)(
                      I.Z,
                      {
                        handleDemonClose: function () {
                          c(!1), setTimeout(s, 500);
                        },
                      },
                      "raging-demo",
                    )
                  : (0, r.jsx)(
                      v,
                      {
                        content: d,
                        keyboardModeEnabled: u,
                        activateRagingDemon: function () {
                          !h && (N.Z.disable(), i(!0), c(!0));
                        },
                      },
                      "modal",
                    ),
              }),
            }),
          ],
        });
      }
    },
    377400: function (e, t, s) {
      var n = s(200651);
      s(192379);
      var i = s(481060),
        r = s(570140),
        o = s(317770),
        a = s(175281),
        l = s(285371);
      class c extends o.Z {
        _initialize() {
          r.Z.subscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts),
            r.Z.subscribe(
              "HIDE_KEYBOARD_SHORTCUTS",
              this.hideKeyboardShortcuts,
            );
        }
        _terminate() {
          r.Z.unsubscribe(
            "SHOW_KEYBOARD_SHORTCUTS",
            this.showKeyboardShortcuts,
          ),
            r.Z.unsubscribe(
              "HIDE_KEYBOARD_SHORTCUTS",
              this.hideKeyboardShortcuts,
            );
        }
        showKeyboardShortcuts() {
          (0, i.openModal)((e) => (0, n.jsx)(a.Z, { ...e }), { modalKey: l.J });
        }
        hideKeyboardShortcuts() {
          (0, i.closeModal)(l.J);
        }
      }
      t.Z = new c();
    },
    264549: function (e, t, s) {
      s(653041), s(47120);
      var n = s(200651),
        i = s(192379),
        r = s(120356),
        o = s.n(r),
        a = s(392711),
        l = s.n(a),
        c = s(714338),
        d = s(585483),
        u = s(981631),
        h = s(727688);
      function E(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      let p = { PRIMARY: () => !0, SECONDARY: () => !0 },
        m = () =>
          (0, n.jsxs)(
            "div",
            {
              className: h.symbol,
              children: [
                (0, n.jsx)("div", { className: h.symbolBackground }),
                (0, n.jsx)("img", { alt: "", src: s(977706) }),
              ],
            },
            "symbol",
          );
      class _ extends i.PureComponent {
        componentDidMount() {
          this.setState({ animating: !0 }),
            (this._renderSecondaryTimeout = setTimeout(() => {
              this.setState({ renderSecondary: !0 });
            }, 120)),
            (this._doneTimeout = setTimeout(this.done, 1e3)),
            p.PRIMARY();
        }
        componentDidUpdate(e, t) {
          this.state.renderSecondary && !t.renderSecondary && p.SECONDARY();
        }
        componentWillUnmount() {
          clearTimeout(this._renderSecondaryTimeout),
            clearTimeout(this._doneTimeout);
        }
        renderPrimary() {
          return (0, n.jsxs)(
            "div",
            {
              className: h.primaryExplosion,
              children: [
                (0, n.jsx)("img", {
                  alt: "",
                  className: h.circleInner,
                  src: s(273226),
                  width: 70,
                  height: 69,
                }),
                (0, n.jsx)("img", {
                  alt: "",
                  className: h.circleOuter,
                  src: s(922026),
                  width: 96,
                  height: 95,
                }),
                (0, n.jsx)("img", {
                  alt: "",
                  className: h.linesSecondary,
                  src: s(827926),
                  width: 183,
                  height: 104,
                }),
                (0, n.jsx)("img", {
                  alt: "",
                  className: h.linesMain,
                  src: s(873180),
                  width: 69,
                  height: 180,
                }),
              ],
            },
            "primary-explosion",
          );
        }
        renderSecondary(e, t) {
          return (0, n.jsxs)(
            "div",
            {
              className: h.secondaryExplosion,
              style: { top: t, left: e },
              children: [
                (0, n.jsx)(
                  "img",
                  {
                    alt: "",
                    className: h.circleInner,
                    src: s(272162),
                    width: 61,
                    height: 58,
                  },
                  "circle-inner",
                ),
                (0, n.jsx)(
                  "img",
                  {
                    alt: "",
                    className: h.circleOuter,
                    src: s(632989),
                    width: 85,
                    height: 85,
                  },
                  "circle-outer",
                ),
                (0, n.jsx)(
                  "img",
                  {
                    alt: "",
                    className: h.linesSecondary,
                    src: s(376252),
                    width: 162,
                    height: 173,
                  },
                  "lines-secondary",
                ),
                (0, n.jsx)(
                  "img",
                  {
                    alt: "",
                    className: h.linesMain,
                    src: s(720617),
                    width: 156,
                    height: 306,
                  },
                  "lines-main",
                ),
              ],
            },
            "secondary-explosion",
          );
        }
        render() {
          let {
              renderSecondary: e,
              offsetX: t,
              offsetY: s,
              animating: i,
              scale: r,
            } = this.state,
            a = [this.renderPrimary()];
          return (
            e && a.push(this.renderSecondary(t, s)),
            (0, n.jsx)("div", {
              className: o()(h.container, { [h.animate]: i }),
              style: {
                top: this.props.top,
                left: this.props.left,
                transform: "scale(".concat(r, ")"),
              },
              children: a,
            })
          );
        }
        constructor(...e) {
          super(...e),
            E(this, "_renderSecondaryTimeout", null),
            E(this, "_doneTimeout", null),
            E(this, "state", {
              animating: !1,
              renderSecondary: !1,
              scale: l().random(0.6, 1, !0),
              offsetX: l().random(0, 140, !1) - 70,
              offsetY: l().random(0, 140, !1) - 70,
            }),
            E(this, "done", () => {
              this.props.onAnimationComplete(this.props.componentId);
            });
        }
      }
      let C = 240;
      class g extends i.PureComponent {
        componentDidMount() {
          this.setTimeout(() => {
            this.setState({ visible: !0 }),
              d.S.dispatch(u.CkL.SHAKE_APP, { duration: 2400 });
          }, 1800),
            this.setTimeout(this.createExplosion, 1800);
        }
        componentWillUnmount() {
          for (let e of (c.Z.enable(),
          (this.children.length = 0),
          this._timeouts))
            clearTimeout(e);
        }
        render() {
          return (0, n.jsx)("div", {
            className: o()(h.ragingDemon, { [h.visible]: this.state.visible }),
            children: this.children,
          });
        }
        constructor(...e) {
          super(...e),
            E(this, "_timeouts", []),
            E(this, "children", []),
            E(this, "state", { explosions: 0, visible: !1 }),
            E(this, "setTimeout", (e, t) => {
              let s = setTimeout(e, t);
              return this._timeouts.push(s), s;
            }),
            E(this, "removeExplosion", (e) => {
              let t = this.children,
                s = t.findIndex((t) => {
                  if (t.type !== _) return !1;
                  let s = t.props;
                  return null != s.componentId && s.componentId === e;
                });
              s >= 0 && t.splice(s, 1), this.forceUpdate();
            }),
            E(this, "createExplosion", () => {
              let e = this.children,
                t = (window.innerWidth / 2) >> 0,
                s = (window.innerHeight / 2) >> 0;
              if (this.state.explosions < 8) {
                let i = "expl-".concat(this.state.explosions);
                e.push(
                  (0, n.jsx)(
                    _,
                    {
                      componentId: i,
                      top: l().random(s - 100, s + 100, !1),
                      left: l().random(t - 200, t + 200, !1),
                      onAnimationComplete: this.removeExplosion,
                    },
                    i,
                  ),
                ),
                  this.setTimeout(this.createExplosion, C),
                  this.setState({ explosions: this.state.explosions + 1 });
              } else this.setTimeout(this.addSymbol, 750);
            }),
            E(this, "addSymbol", () => {
              (this.children = [(0, n.jsx)(m, {}, "symbol")]),
                this.forceUpdate(),
                this.setTimeout(this.delayedClose, 3e3);
            }),
            E(this, "delayedClose", () => {
              this.props.handleDemonClose();
            });
        }
      }
      t.Z = g;
    },
    970645: function (e, t, s) {
      s.d(t, {
        o: function () {
          return l;
        },
      });
      var n = s(544891),
        i = s(570140),
        r = s(355467),
        o = s(853872),
        a = s(981631);
      async function l() {
        try {
          i.Z.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH" });
          let { body: e } = await n.tn.get({
              url: a.ANM.CHECKOUT_RECOVERY,
              rejectWithError: !0,
            }),
            t = (null == e ? void 0 : e.is_eligible) === !0;
          t && !o.Z.hasFetchedPaymentSources && (await (0, r.tZ)()),
            i.Z.dispatch({
              type: "CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS",
              isTargeted: t,
            });
        } catch (e) {
          i.Z.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE" });
        }
      }
    },
    514701: function (e, t, s) {
      s.d(t, {
        I: function () {
          return i;
        },
      });
      var n = s(570140);
      function i() {
        n.Z.dispatch({ type: "HD_STREAMING_VIEWER_UPDATE_LAST_TRIGGERED" });
      }
    },
    467721: function (e, t, s) {
      var n,
        i = s(442837),
        r = s(570140);
      function o(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      function a() {
        return { lastTriggered: 0 };
      }
      let l = a();
      class c extends (n = i.ZP.PersistedStore) {
        initialize(e) {
          l = { ...a(), ...(null != e ? e : {}) };
        }
        getState() {
          return l;
        }
        cooldownIsActive() {
          return l.lastTriggered >= Date.now() - 1728e5;
        }
      }
      o(c, "displayName", "HDStreamingViewerStore"),
        o(c, "persistKey", "HDStreamingViewerStore"),
        (t.Z = new c(r.Z, {
          LOGOUT: function () {
            l = a();
          },
          HD_STREAMING_VIEWER_UPDATE_LAST_TRIGGERED: function (e) {
            l.lastTriggered = Date.now();
          },
        }));
    },
    841174: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = s(200651);
      s(192379);
      var i = s(481060);
      function r(e) {
        (0, i.openModalLazy)(async () => {
          let { default: t } = await s.e("16554").then(s.bind(s, 917314));
          return (s) => (0, n.jsx)(t, { guildId: e, ...s });
        });
      }
    },
    367207: function (e, t, s) {
      s(411104), s(47120);
      var n = s(200651);
      s(192379);
      var i = s(392711),
        r = s(848246),
        o = s(481060),
        a = s(570140),
        l = s(904245),
        c = s(317770),
        d = s(100527),
        u = s(358221),
        h = s(963249),
        E = s(93127),
        p = s(361291),
        m = s(592125),
        _ = s(430824),
        C = s(594174),
        g = s(431),
        N = s(626135),
        f = s(74538),
        b = s(557457),
        R = s(970645),
        I = s(30684),
        S = s(514701),
        T = s(6242),
        O = s(467721),
        x = s(757692),
        y = s(114064),
        M = s(933843),
        A = s(281494),
        L = s(276444),
        P = s(684259),
        v = s(937579),
        D = s(1163),
        U = s(841174),
        Z = s(522558),
        w = s(879463),
        k = s(822070),
        j = s(520540),
        H = s(11352),
        G = s(474936),
        V = s(981631),
        K = s(354459),
        W = s(37113),
        Y = s(388032);
      function F(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      class z extends c.Z {
        _initialize() {
          __OVERLAY__
            ? a.Z.subscribe(
                "PREMIUM_PAYMENT_MODAL_OPEN",
                this._handlePremiumPaymentModalOpen,
              )
            : (a.Z.subscribe(
                "PREMIUM_PAYMENT_MODAL_CLOSE",
                this._handlePremiumPaymentModalClose,
              ),
              a.Z.subscribe(
                "MESSAGE_LENGTH_UPSELL",
                this.handleMessageLengthUpsell,
              ),
              a.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchPremiumOffer,
              ),
              a.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchCheckoutRecovery,
              ),
              a.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchUserAffinities,
              ),
              a.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._trackCustomNotificationSoundsExposure,
              ),
              a.Z.subscribe("POST_CONNECTION_OPEN", this._trackSkyLoadExposure),
              a.Z.subscribe(
                "RTC_CONNECTION_STATE",
                this.maybeShowHDStreamingPerksDemoPostUpsellModal,
              ),
              a.Z.subscribe(
                "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                this.maybeShowHDStreamingViewerUpsellMessage,
              ));
        }
        _terminate() {
          __OVERLAY__
            ? a.Z.unsubscribe(
                "PREMIUM_PAYMENT_MODAL_OPEN",
                this._handlePremiumPaymentModalOpen,
              )
            : (a.Z.unsubscribe(
                "PREMIUM_PAYMENT_MODAL_CLOSE",
                this._handlePremiumPaymentModalClose,
              ),
              a.Z.unsubscribe(
                "MESSAGE_LENGTH_UPSELL",
                this.handleMessageLengthUpsell,
              ),
              a.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchPremiumOffer,
              ),
              a.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchCheckoutRecovery,
              ),
              a.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchUserAffinities,
              ),
              a.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._trackCustomNotificationSoundsExposure,
              ),
              a.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._trackSkyLoadExposure,
              ),
              a.Z.unsubscribe(
                "RTC_CONNECTION_STATE",
                this.maybeShowHDStreamingPerksDemoPostUpsellModal,
              ),
              a.Z.unsubscribe(
                "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                this.maybeShowHDStreamingViewerUpsellMessage,
              ));
        }
        handleMessageLengthUpsell(e) {
          let { channel: t, content: i } = e;
          (0, o.openModalLazy)(async () => {
            let { default: e } = await s.e("33184").then(s.bind(s, 465836));
            return (s) => (0, n.jsx)(e, { channel: t, content: i, ...s });
          });
        }
        _getReferralIncentiveEligibility() {
          let e = C.default.getCurrentUser();
          if (L.Z.getIsFetchingReferralIncentiveEligibility() || !(0, f.I5)(e))
            return;
          let t = { location: "PremiumManager" },
            s = { autoTrackExposure: !1 };
          if (
            !!j.g.getCurrentConfig(t, s).enabled &&
            !w.eP.getCurrentConfig(t, s).enabled
          )
            k.$.getCurrentConfig(t, s).enabled && (0, A.bq)();
        }
        openPremiumPaymentModalInApp(e) {
          if (__OVERLAY__)
            throw Error(
              "Should not use this function from the overlay, use ModalAPI.openModal instead",
            );
          return new Promise((t, s) => {
            (0, h.Z)({
              ...e,
              onClose: (e) => {
                e ? t() : s();
              },
            });
          });
        }
        openPremiumPaymentModalInOverlay(e) {
          if (__OVERLAY__)
            throw Error(
              "Should not use this function from the overlay, use ModalAPI.openModal instead",
            );
          let {
            initialPlanId: t,
            subscriptionTier: s,
            followupSKUInfo: n,
            analyticsObject: i,
          } = null != e ? e : {};
          return new Promise((e, r) => {
            (this._premiumPaymentModalCloseResolve = e),
              (this._premiumPaymentModalCloseReject = r),
              a.Z.dispatch({
                type: "PREMIUM_PAYMENT_MODAL_OPEN",
                initialPlanId: t,
                subscriptionTier: s,
                followupSKUInfo: n,
                analyticsObject: i,
              });
          });
        }
        maybeShowHDStreamingPerksDemoPostUpsellModal(e) {
          let { enabled: t } = D.Z.getCurrentConfig(
            { location: "PremiumManager" },
            { autoTrackExposure: !1 },
          );
          if (!t || e.state !== V.hes.DISCONNECTED || e.willReconnect) return;
          let s = m.Z.getChannel(e.channelId);
          if (null == s) return;
          let n = y.Z.hasActiveDemo(r.q.STREAM_HIGH_QUALITY);
          if (
            (n &&
              a.Z.dispatch({
                type: "PREMIUM_PERKS_DEMO_COMPLETE",
                perkType: r.q.STREAM_HIGH_QUALITY,
              }),
            !n)
          )
            return;
          let { resolution: i, fps: o } = p.Z.getState();
          !(0, M.mc)(i, o) && (0, U.Z)(s.guild_id);
        }
        constructor(...e) {
          super(...e),
            F(this, "_premiumPaymentModalCloseResolve", null),
            F(this, "_premiumPaymentModalCloseReject", null),
            F(this, "_maybeFetchPremiumOffer", async () => {
              let e = C.default.getCurrentUser();
              if (null != e && e.verified) {
                let t = !(0, f.I5)(e) && g.Z.shouldFetchOffer();
                await (0, v.T)("PremiumManager", void 0, t);
              }
              a.Z.dispatch({ type: "PREMIUM_MARKETING_DATA_READY" });
            }),
            F(this, "_maybeFetchCheckoutRecovery", async () => {
              let e = C.default.getCurrentUser();
              null != e &&
                e.verified &&
                !(0, f.I5)(e) &&
                I.Z.shouldFetchCheckoutRecovery() &&
                (await (0, R.o)());
            }),
            F(this, "_maybeFetchUserAffinities", () => {
              let { enabled: e } = Z.w.getCurrentConfig(
                { location: "PremiumManager" },
                { autoTrackExposure: !1 },
              );
              e && (0, E.W)();
            }),
            F(this, "_trackCustomNotificationSoundsExposure", () => {
              H.Y.trackExposure({ location: "PremiumManager" });
            }),
            F(this, "_trackSkyLoadExposure", () => {
              P.Z.trackExposure({ location: "PremiumManager" });
            }),
            F(this, "_handlePremiumPaymentModalOpen", (e) => {
              (0, h.Z)({
                ...e,
                analyticsLocations: [d.Z.OVERLAY],
                onClose: (e) => {
                  a.Z.dispatch({
                    type: "PREMIUM_PAYMENT_MODAL_CLOSE",
                    didSucceed: e,
                  });
                },
              });
            }),
            F(this, "_handlePremiumPaymentModalClose", (e) => {
              let { didSucceed: t } = e;
              t && null != this._premiumPaymentModalCloseResolve
                ? this._premiumPaymentModalCloseResolve()
                : null != this._premiumPaymentModalCloseReject &&
                  this._premiumPaymentModalCloseReject(),
                (this._premiumPaymentModalCloseResolve = null),
                (this._premiumPaymentModalCloseReject = null);
            }),
            F(this, "maybeShowHDStreamingViewerUpsellMessage", (e) => {
              let t = C.default.getCurrentUser();
              (null == t ? void 0 : t.id) !== e.senderUserId &&
                this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t);
            }),
            F(
              this,
              "_maybeSendViewerUpsellMessage",
              (0, i.debounce)((e, t, s) => {
                var n, i;
                let r = u.Z.getSelectedParticipant(e),
                  o = (0, x.o)(r, s),
                  { sendNitroMessage: a } = (0, T.TD)(o),
                  c =
                    null !==
                      (i =
                        null === (n = _.Z.getGuild(t)) || void 0 === n
                          ? void 0
                          : n.premiumTier) && void 0 !== i
                      ? i
                      : V.Eu4.NONE;
                if (
                  O.Z.cooldownIsActive() ||
                  !a ||
                  c >= V.Eu4.TIER_2 ||
                  (null == r ? void 0 : r.type) !== K.fO.STREAM ||
                  (null == r ? void 0 : r.id) === (null == s ? void 0 : s.id) ||
                  null == r.maxResolution ||
                  null == r.maxFrameRate
                )
                  return;
                S.I();
                let d = Y.intl.formatToPlainString(Y.t.AbyeZG, {
                  nickname: r.userNick,
                  resolution: (0, W.o6)(r.maxResolution.height),
                  fps: (0, b.bp)(r.maxFrameRate),
                });
                l.Z.sendNitroSystemMessage(e, d),
                  N.default.track(V.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                    type: G.cd.HD_STREAMING_VIEWER_UPSELL,
                    location_section:
                      null != t ? V.jXE.TEXT_IN_VOICE : V.jXE.CHANNEL_TEXT_AREA,
                    location_object: V.qAy.MESSAGE,
                    guild_id: t,
                  });
              }, 200),
            );
        }
      }
      t.Z = new z();
    },
    900085: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return W;
        },
      }),
        s(411104),
        s(47120);
      var n,
        i = s(200651),
        r = s(192379),
        o = s(120356),
        a = s.n(o),
        l = s(873546),
        c = s(442837),
        d = s(481060),
        u = s(239091),
        h = s(134616),
        E = s(714338),
        p = s(212819),
        m = s(14429),
        _ = s(576855),
        C = s(313201),
        g = s(592125),
        N = s(888369),
        f = s(430824),
        b = s(306680),
        R = s(944486),
        I = s(938475),
        S = s(585483),
        T = s(63063),
        O = s(51596),
        x = s(823385),
        y = s(415795),
        M = s(670512),
        A = s(981631),
        L = s(388032),
        P = s(449532);
      function v(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      let D = 10,
        U = () =>
          (0, i.jsxs)("div", {
            className: P.emptyState,
            children: [
              (0, i.jsx)("div", {
                className: P.emptyStateNote,
                children: L.intl.string(L.t.bpbATE),
              }),
              (0, i.jsx)("div", {
                className: P.emptyStateCTA,
                children: (0, i.jsx)(d.Anchor, {
                  href: T.Z.getArticleURL(A.BhN.QUICK_SWITCHER_TUTORIAL),
                  children: L.intl.string(L.t["4iPfEB"]),
                }),
              }),
            ],
          });
      class Z extends (n = r.Component) {
        render() {
          let e = f.Z.getGuild(this.props.channel.guild_id);
          return (0, i.jsx)(y.$W, {
            ...this.props,
            children: (0, i.jsx)("div", {
              className: P.miscContainer,
              children: null != e ? e.name : null,
            }),
          });
        }
      }
      v(Z, "defaultProps", { unread: !1 });
      let w = c.ZP.connectStores([b.ZP, g.Z], (e) => {
          let { channel: t } = e;
          return {
            unread: b.ZP.hasUnread(t.id),
            mentions: b.ZP.getMentionCount(t.id),
            isMentionLowImportance: b.ZP.getIsMentionLowImportance(t.id),
            category: g.Z.getChannel(t.parent_id),
          };
        })(Z),
        k = c.ZP.connectStores([I.ZP], (e) => {
          let { channel: t } = e;
          if (null == t.guild_id)
            throw Error(
              "ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...",
            );
          return { voiceStates: I.ZP.getVoiceStates(t.guild_id)[t.id] };
        })(Z),
        j = c.ZP.connectStores([N.default], (e) => {
          let { guild: t } = e;
          return { unread: N.default.hasUnread(t.id) };
        })(y.ic),
        H = c.ZP.connectStores([b.ZP], (e) => {
          let { channel: t } = e;
          return { mentions: b.ZP.getMentionCount(t.id) };
        })(y.PZ),
        G = c.ZP.connectStores([g.Z, b.ZP], (e) => {
          let { user: t } = e,
            s = g.Z.getDMFromUserId(t.id);
          return { mentions: null != s ? b.ZP.getMentionCount(s) : 0 };
        })(y.n5);
      function V(e, t, s) {
        return (0, i.jsx)(
          d.Tooltip,
          {
            text: s,
            children: (e) =>
              (0, i.jsx)("span", {
                ...e,
                className: P.autocompleteQuerySymbol,
                children: t,
              }),
          },
          e,
        );
      }
      class K extends r.PureComponent {
        componentDidMount() {
          E.Z.disable(), E.Z.enableTemp(h.u);
        }
        componentWillUnmount() {
          E.Z.disableTemp(), E.Z.enable();
        }
        componentDidUpdate(e, t) {
          let { mouseFocusDisabled: s, query: n } = this.state,
            { selectedIndex: i } = this.props,
            { current: r } = this.scrollerRef;
          if (null != r)
            n !== t.query
              ? r.scrollTo({ to: 0 })
              : s &&
                i >= 0 &&
                r.scrollToIndex({ section: 0, row: i, padding: 10 });
        }
        close() {
          (0, O.Cp)();
        }
        search(e) {
          this.setState({ query: e }), (0, O.yC)(e);
        }
        renderInput() {
          let { selectedIndex: e, results: t } = this.props,
            { query: s } = this.state,
            n = t.length > 0 && "" !== s;
          return (0, i.jsx)(d.FocusRing, {
            children: (0, i.jsx)("input", {
              className: P.input,
              "aria-label": L.intl.string(L.t.ZvKwYW),
              ref: this.inputRef,
              type: "text",
              role: "combobox",
              "aria-controls": this._listId,
              "aria-expanded": n,
              "aria-activedescendant": n ? this.getRowId(e) : void 0,
              "aria-autocomplete": "list",
              placeholder: L.intl.string(L.t.Vtvewc),
              onChange: this.handleInputChange,
              onKeyDown: this.handleKeyDown,
              value: this.state.query,
              spellCheck: !1,
              autoFocus: !0,
            }),
          });
        }
        renderSection() {
          return null;
        }
        renderResults() {
          let { query: e } = this.state,
            { results: t } = this.props;
          return 0 === t.length && e.length > 0
            ? (0, i.jsx)(U, {})
            : 0 === t.length
              ? null
              : (0, i.jsx)(d.ListAuto, {
                  innerId: this._listId,
                  innerRole: "listbox",
                  "aria-label": L.intl.string(L.t.Wef5Dg),
                  ref: this.scrollerRef,
                  sectionHeight: 0,
                  rowHeight: 34,
                  paddingBottom: D,
                  sections: [t.length],
                  className: P.scroller,
                  renderRow: this.renderRow,
                  renderSection: this.renderSection,
                });
        }
        focusNode(e) {
          S.S.dispatch(A.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
        }
        getRowId(e) {
          return "quick-switcher-".concat(this._listId, "-item-").concat(e);
        }
        renderProtip() {
          return (0, i.jsx)(_.Z, {
            className: a()(P.protip, {
              [P.hasContent]: this.state.query.length > 0,
            }),
            type: _.Z.Types.INLINE,
            children: L.intl.format(L.t.wukqXV, {
              userSymbolHook: (e, t) =>
                V(t, p.xQ.USER, L.intl.string(L.t.GQRCGh)),
              textChannelSymbolHook: (e, t) =>
                V(t, p.xQ.TEXT_CHANNEL, L.intl.string(L.t.wrwhub)),
              voiceChannelSymbolHook: (e, t) =>
                V(t, p.xQ.VOICE_CHANNEL, L.intl.string(L.t["jz+hJi"])),
              guildSymbolHook: (e, t) =>
                V(t, p.xQ.GUILD, L.intl.string(L.t.WuwCWl)),
              helpdeskArticle: T.Z.getArticleURL(A.BhN.QUICK_SWITCHER_TUTORIAL),
            }),
          });
        }
        renderTutorial() {
          let { query: e } = this.state,
            { seenTutorial: t, results: s } = this.props;
          return t
            ? null
            : (0, i.jsx)(M.Z, { hasQuery: e.length > 0 && s.length > 0 });
        }
        render() {
          return (0, i.jsx)(d.ModalRoot, {
            "aria-label": L.intl.string(L.t.ZvKwYW),
            size: d.ModalSize.DYNAMIC,
            transitionState: this.props.transitionState,
            className: a()(P.container, l.tq && P.mobileContainer),
            fullscreenOnMobile: !1,
            children: (0, i.jsxs)("div", {
              className: a()(P.quickswitcher, l.tq && P.mobileQuickswitcher),
              onMouseMove: this.handleMouseMove,
              children: [
                this.renderInput(),
                this.renderResults(),
                this.renderProtip(),
                this.renderTutorial(),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            v(this, "scrollerRef", r.createRef()),
            v(this, "inputRef", r.createRef()),
            v(this, "_listId", (0, C.hQ)()),
            v(this, "state", {
              query: this.props.query,
              mouseFocusDisabled: !0,
            }),
            v(this, "handleInputChange", () => {
              let { current: e } = this.inputRef;
              null != e && this.search(e.value);
            }),
            v(this, "handleMouseMove", () => {
              let { mouseFocusDisabled: e } = this.state;
              if (!1 !== e) this.setState({ mouseFocusDisabled: !1 });
            }),
            v(this, "focusResult", (e) => {
              if (!this.state.mouseFocusDisabled)
                (0, O.tF)(this.props.results.indexOf(e));
            }),
            v(this, "selectResult", (e) => {
              (0, O.Se)(e, this.props.queryMode === p.h8.TEXT_CHANNEL);
            }),
            v(this, "handleContextMenu", (e) => {
              let t = this.props.results[this.props.selectedIndex];
              switch (t.type) {
                case p.h8.GUILD:
                  return (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      s.e("63288"),
                      s.e("7654"),
                      s.e("98479"),
                      s.e("53967"),
                      s.e("16806"),
                      s.e("60696"),
                      s.e("58227"),
                      s.e("16114"),
                      s.e("82309"),
                      s.e("94107"),
                      s.e("33213"),
                      s.e("62978"),
                    ]).then(s.bind(s, 545135));
                    return (s) =>
                      (0, i.jsx)(e, {
                        ...s,
                        guild: t.record,
                        onSelect: O.Cp,
                        hideSettings: !0,
                      });
                  });
                case p.h8.TEXT_CHANNEL:
                case p.h8.VOICE_CHANNEL:
                  let n = t.record,
                    r = f.Z.getGuild(n.getGuildId());
                  if (null == r) return;
                  switch (n.type) {
                    case A.d4z.GUILD_TEXT:
                    case A.d4z.GUILD_ANNOUNCEMENT:
                    case A.d4z.GUILD_FORUM:
                    case A.d4z.GUILD_MEDIA:
                      return (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                          s.e("79695"),
                          s.e("18320"),
                          s.e("44011"),
                        ]).then(s.bind(s, 373651));
                        return (t) =>
                          (0, i.jsx)(e, {
                            ...t,
                            channel: n,
                            guild: r,
                            onSelect: O.Cp,
                          });
                      });
                    case A.d4z.GUILD_VOICE:
                    case A.d4z.GUILD_STAGE_VOICE:
                      return (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                          s.e("79695"),
                          s.e("18320"),
                          s.e("83331"),
                          s.e("14280"),
                        ]).then(s.bind(s, 213202));
                        return (t) =>
                          (0, i.jsx)(e, {
                            ...t,
                            channel: n,
                            guild: r,
                            onSelect: O.Cp,
                          });
                      });
                    case A.d4z.ANNOUNCEMENT_THREAD:
                    case A.d4z.PUBLIC_THREAD:
                    case A.d4z.PRIVATE_THREAD:
                      return (0, u.jW)(e, async () => {
                        let { default: e } = await s
                          .e("40157")
                          .then(s.bind(s, 422200));
                        return (t) =>
                          (0, i.jsx)(e, { ...t, channel: n, onSelect: O.Cp });
                      });
                    case A.d4z.GUILD_STORE:
                      return (0, u.jW)(e, async () => {
                        let { default: e } = await s
                          .e("99905")
                          .then(s.bind(s, 649400));
                        return (t) =>
                          (0, i.jsx)(e, {
                            ...t,
                            channel: n,
                            guild: r,
                            onSelect: O.Cp,
                          });
                      });
                    case A.d4z.GUILD_DIRECTORY:
                      return (0, u.jW)(e, async () => {
                        let { default: e } = await s
                          .e("70623")
                          .then(s.bind(s, 99334));
                        return (t) => (0, i.jsx)(e, { ...t, channel: n });
                      });
                  }
                  break;
                case p.h8.GROUP_DM:
                  return (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      s.e("79695"),
                      s.e("25421"),
                    ]).then(s.bind(s, 354741));
                    return (s) =>
                      (0, i.jsx)(e, {
                        ...s,
                        channel: t.record,
                        selected: R.Z.getChannelId() === t.record.id,
                        onSelect: O.Cp,
                      });
                  });
                case p.h8.USER:
                  return (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      s.e("79695"),
                      s.e("69220"),
                      s.e("95052"),
                    ]).then(s.bind(s, 881351));
                    return (s) =>
                      (0, i.jsx)(e, { ...s, user: t.record, onSelect: O.Cp });
                  });
              }
            }),
            v(this, "handleKeyDown", (e) => {
              let { mouseFocusDisabled: t, query: s } = this.state,
                { results: n } = this.props;
              !1 === t && this.setState({ mouseFocusDisabled: !0 });
              let i = e.key.toLowerCase(),
                { selectedIndex: r } = this.props;
              switch (i) {
                case "escape":
                  e.preventDefault(),
                    e.stopPropagation(),
                    s.length > 0 ? this.search("") : (0, O.Cp)();
                  return;
                case "k":
                  (!0 === e.ctrlKey || !0 === e.metaKey) &&
                    (e.preventDefault(), e.stopPropagation(), (0, O.Cp)());
                  return;
                case "enter": {
                  if (-1 === r) return;
                  if ((e.preventDefault(), e.altKey))
                    return this.handleContextMenu(e);
                  let t = n[r];
                  null != t && this.selectResult(t);
                  return;
                }
                case "arrowup":
                  r = (0, p.gJ)(p.a8.UP, r, n);
                  break;
                case "arrowdown":
                  r = (0, p.gJ)(p.a8.DOWN, r, n);
                  break;
                case "n":
                  if (!e.ctrlKey) return;
                  r = (0, p.gJ)(p.a8.DOWN, r, n);
                  break;
                case "p":
                  if (!e.ctrlKey) return;
                  r = (0, p.gJ)(p.a8.UP, r, n);
                  break;
                default:
                  return;
              }
              e.preventDefault(), (0, O.tF)(r);
            }),
            v(this, "renderRow", (e) => {
              let { row: t } = e,
                s = this.props.results[t],
                { selectedIndex: n } = this.props,
                { showScores: r } = m.Z.getCurrentConfig(
                  { location: "62f4be_1" },
                  { autoTrackExposure: !1 },
                );
              switch (s.type) {
                case p.h8.HEADER:
                  return (0, i.jsx)(
                    y.h4,
                    { children: s.record.text },
                    "".concat(s.type, "-").concat(s.record.id),
                  );
                case p.h8.TEXT_CHANNEL:
                  return (0, i.jsx)(
                    w,
                    {
                      id: this.getRowId(t),
                      focused: n >= 0 && t === n,
                      onClick: () => this.selectResult(s),
                      onMouseEnter: () => this.focusResult(s),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      channel: s.record,
                      score: r ? s.score : void 0,
                    },
                    "".concat(s.type, "-").concat(s.record.id),
                  );
                case p.h8.VOICE_CHANNEL:
                  return (0, i.jsx)(
                    k,
                    {
                      id: this.getRowId(t),
                      focused: n >= 0 && t === n,
                      onClick: () => this.selectResult(s),
                      onMouseEnter: () => this.focusResult(s),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      channel: s.record,
                      score: r ? s.score : void 0,
                    },
                    "".concat(s.type, "-").concat(s.record.id),
                  );
                case p.h8.GUILD:
                  return (0, i.jsx)(
                    j,
                    {
                      id: this.getRowId(t),
                      focused: n >= 0 && t === n,
                      onClick: () => this.selectResult(s),
                      onMouseEnter: () => this.focusResult(s),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      guild: s.record,
                      score: r ? s.score : void 0,
                    },
                    "".concat(s.type, "-").concat(s.record.id),
                  );
                case p.h8.USER:
                  return (0, i.jsx)(
                    G,
                    {
                      id: this.getRowId(t),
                      focused: n >= 0 && t === n,
                      onClick: () => this.selectResult(s),
                      onMouseEnter: () => this.focusResult(s),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      user: s.record,
                      comparator: s.comparator,
                      score: r ? s.score : void 0,
                    },
                    "".concat(s.type, "-").concat(s.record.id),
                  );
                case p.h8.GROUP_DM:
                  return (0, i.jsx)(
                    H,
                    {
                      id: this.getRowId(t),
                      focused: n >= 0 && t === n,
                      onClick: () => this.selectResult(s),
                      onMouseEnter: () => this.focusResult(s),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      channel: s.record,
                      score: r ? s.score : void 0,
                    },
                    "".concat(s.type, "-").concat(s.record.id),
                  );
                case p.h8.APPLICATION:
                  return (0, i.jsx)(
                    y.Mx,
                    {
                      id: this.getRowId(t),
                      focused: n >= 0 && t === n,
                      onClick: () => this.selectResult(s),
                      onMouseEnter: () => this.focusResult(s),
                      onFocus: this.focusNode,
                      application: s.record,
                    },
                    "".concat(s.type, "-").concat(s.record.id),
                  );
                case p.h8.LINK:
                  return (0, i.jsx)(
                    y.rU,
                    {
                      focused: n >= 0 && t === n,
                      onClick: () => this.selectResult(s),
                      onMouseEnter: () => this.focusResult(s),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      link: s.record,
                      score: r ? s.score : void 0,
                      id: this.getRowId(t),
                    },
                    "".concat(s.type, "-").concat(s.record.id),
                  );
                case p.h8.IN_APP_NAVIGATION:
                  return (0, i.jsx)(
                    y.s8,
                    {
                      focused: n >= 0 && t === n,
                      onClick: () => this.selectResult(s),
                      onMouseEnter: () => this.focusResult(s),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      navigationRecord: s.record,
                      score: r ? s.score : void 0,
                      id: this.getRowId(t),
                    },
                    "".concat(s.type, "-").concat(s.record.id),
                  );
                default:
                  return null;
              }
            });
        }
      }
      function W(e) {
        let t = (0, c.cj)([x.Z], () => x.Z.getProps());
        return (0, i.jsx)(K, { ...t, ...e });
      }
    },
    329557: function (e, t, s) {
      var n = s(200651);
      s(192379);
      var i = s(481060),
        r = s(570140),
        o = s(317770),
        a = s(51596),
        l = s(823385),
        c = s(900085);
      let d = "QUICK_SWITCHER_MODAL_KEY";
      class u extends o.Z {
        _initialize() {
          r.Z.subscribe("QUICKSWITCHER_SHOW", this.handleShow),
            r.Z.subscribe("QUICKSWITCHER_HIDE", this.handleHide);
        }
        _terminate() {
          r.Z.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow),
            r.Z.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide);
        }
        handleShow() {
          l.Z.isOpen() &&
            !(0, i.hasModalOpen)(d) &&
            (0, i.openModal)((e) => (0, n.jsx)(c.Z, { ...e }), {
              modalKey: d,
              instant: !0,
              onCloseCallback: a.Cp,
            });
        }
        handleHide() {
          (0, i.closeModal)(d);
        }
      }
      t.Z = new u();
    },
    670512: function (e, t, s) {
      s(47120);
      var n,
        i = s(200651),
        r = s(192379),
        o = s(120356),
        a = s.n(o),
        l = s(748780),
        c = s(846519),
        d = s(481060),
        u = s(585483),
        h = s(981631),
        E = s(388032),
        p = s(159381);
      function m(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      let _ = { friction: 15, tension: 100 };
      class C extends (n = r.PureComponent) {
        componentDidMount() {
          this.setState({ shown: !0 }),
            u.S.subscribe(
              h.CkL.QUICKSWITCHER_RESULT_FOCUS,
              this.handleResultFocus,
            );
        }
        componentWillUnmount() {
          this.focusTimeout.stop(),
            u.S.unsubscribe(
              h.CkL.QUICKSWITCHER_RESULT_FOCUS,
              this.handleResultFocus,
            );
        }
        componentDidUpdate() {
          let { hasQuery: e } = this.props;
          !e && this.springTo(0);
        }
        springTo(e) {
          let { reducedMotion: t } = this.context;
          !0 !== t.enabled &&
            l.Z.spring(this.state.translateY, {
              toValue: Math.min(e, 250),
              ..._,
            }).start();
        }
        renderArrowGroup(e) {
          return (0, i.jsxs)("div", {
            className: a()(p.arrowGroup, e),
            children: [
              (0, i.jsx)(l.Z.div, {
                className: a()(p.arrowContainer, p.horizontal),
                style: this.getStyle(),
                children: (0, i.jsx)("img", {
                  alt: "",
                  src: s(403756),
                  className: p.arrowIcon,
                }),
              }),
              (0, i.jsx)("div", {
                className: a()(p.arrowContainer, p.diag1),
                children: (0, i.jsx)("img", {
                  alt: "",
                  src: s(536404),
                  className: p.arrowIcon,
                }),
              }),
              (0, i.jsx)("div", {
                className: a()(p.arrowContainer, p.diag2),
                children: (0, i.jsx)("img", {
                  alt: "",
                  src: s(569347),
                  className: p.arrowIcon,
                }),
              }),
            ],
          });
        }
        renderContent() {
          return (0, i.jsxs)("div", {
            className: p.tutorialMessages,
            children: [
              (0, i.jsx)("div", {
                className: p.searchMessage,
                children: E.intl.string(E.t.Mp0IGB),
              }),
              (0, i.jsx)("div", {
                className: p.selectMessage,
                children: E.intl.string(E.t["3CbpwM"]),
              }),
            ],
          });
        }
        render() {
          let { hasQuery: e } = this.props,
            { shown: t } = this.state;
          return (0, i.jsxs)("div", {
            ref: this.rootRef,
            className: a()(p.tutorial, { [p.shown]: t, [p.hasQuery]: e }),
            children: [
              this.renderContent(),
              this.renderArrowGroup(p.__invalid_left),
              this.renderArrowGroup(p.right),
            ],
          });
        }
        getStyle() {
          let { reducedMotion: e } = this.context;
          return !0 === e.enabled
            ? {}
            : {
                opacity: 1,
                transform: [
                  {
                    translateY: this.state.translateY.interpolate({
                      inputRange: [0, 250],
                      outputRange: ["0px", "".concat(250, "px")],
                    }),
                  },
                  { translateZ: 0 },
                ],
              };
        }
        constructor(...e) {
          super(...e),
            m(this, "state", { shown: !1, translateY: new l.Z.Value(0) }),
            m(this, "rootRef", r.createRef()),
            m(this, "focusTimeout", new c.V7()),
            m(this, "handleResultFocus", (e) => {
              let { node: t } = e;
              this.focusTimeout.start(1, () => {
                if (
                  this.props.hasQuery &&
                  null != t &&
                  null != this.rootRef.current
                ) {
                  let { top: e } = this.rootRef.current.getBoundingClientRect(),
                    { top: s } = t.getBoundingClientRect(),
                    n = Math.abs(e - s);
                  this.springTo(n - 118 + 9);
                } else this.springTo(0);
              });
            });
        }
      }
      m(C, "contextType", d.AccessibilityPreferencesContext), (t.Z = C);
    },
    241890: function (e, t, s) {
      let n, i;
      var r = s(200651);
      s(192379);
      var o = s(481060),
        a = s(570140),
        l = s(341382),
        c = s(981631);
      let d = null;
      function u(e) {
        null != n && e ? n() : null != i && i(), (n = null), (i = null);
      }
      t.Z = {
        init() {
          a.Z.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", (e) => {
            if (
              (u(!1),
              (d = e.context),
              (n = e.resolve),
              (i = e.reject),
              c.e3s === e.context)
            ) {
              let e;
              (e = !1),
                (0, o.openModalLazy)(
                  async () => {
                    let { default: t } = await s
                      .e("29393")
                      .then(s.bind(s, 134817));
                    return (s) => {
                      let { onClose: n, ...i } = s;
                      return (0, r.jsx)(t, {
                        ...i,
                        onClose: (t) => {
                          (e = t), n();
                        },
                      });
                    };
                  },
                  {
                    onCloseCallback: () => {
                      (0, l.M)(e);
                    },
                  },
                );
            }
          }),
            a.Z.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", (e) => {
              let { shouldContinue: t } = e;
              (d = null), u(t);
            }),
            a.Z.subscribe("OVERLAY_SET_INPUT_LOCKED", (e) => {
              let { locked: t } = e;
              t && null != d && ((d = null), u(!1));
            });
        },
      };
    },
  },
]);
//# sourceMappingURL=689d65cbfe10d00e4d6a.js.map
