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
    341382: function (e, t, n) {
      n.d(t, {
        M: function () {
          return i;
        },
      });
      var s = n(570140);
      function i(e) {
        s.Z.dispatch({
          type: "PREMIUM_REQUIRED_MODAL_CLOSE",
          shouldContinue: e,
        });
      }
      n(78839), n(355467);
    },
    167042: function (e, t, n) {
      n.d(t, {
        $: function () {
          return i;
        },
      });
      var s = n(51596);
      let i = {
        binds: ["mod+k", "mod+t"],
        comboKeysBindGlobal: !0,
        action: () => ((0, s.$Z)("KEYBIND", ""), !1),
      };
    },
    951483: function (e, t, n) {
      n.d(t, {
        Sr: function () {
          return I;
        },
        Xq: function () {
          return T;
        },
        Zg: function () {
          return S;
        },
      }),
        n(411104);
      var s = n(186070),
        i = n(185514),
        r = n(360038),
        o = n(175724),
        l = n(705371),
        a = n(138976),
        c = n(167042),
        u = n(239748),
        d = n(337482),
        h = n(679080),
        E = n(510761),
        p = n(189509),
        _ = n(673553),
        m = n(280492),
        C = n(746887),
        N = n(721383),
        g = n(743810),
        f = n(981631),
        R = n(388032);
      function b() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
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
          [f.EkH.UNREAD_NEXT]: g.pd,
          [f.EkH.UNREAD_PREV]: g.wk,
          [f.EkH.MENTION_CHANNEL_NEXT]: g.Nv,
          [f.EkH.MENTION_CHANNEL_PREV]: g.uX,
          [f.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
          [f.EkH.JUMP_TO_GUILD]: r.u,
          [f.EkH.SUBMIT]: p.z,
          [f.EkH.TEXTAREA_FOCUS]: _.U,
          [f.EkH.MARK_CHANNEL_READ]: o.f,
          [f.EkH.MARK_SERVER_READ]: l.l,
          [f.EkH.TOGGLE_MUTE]: m.iN,
          [f.EkH.TOGGLE_DEAFEN]: m.oV,
          [f.EkH.TOGGLE_CATEGORY_COLLAPSED]: C.u,
          [f.EkH.SCROLL_UP]: d.B2,
          [f.EkH.SCROLL_DOWN]: d.gN,
          [f.EkH.SEARCH_EMOJIS]: h.S,
          [f.EkH.TOGGLE_HOTKEYS]: N._,
          [f.EkH.JUMP_TO_FIRST_UNREAD]: a.O,
          [f.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
          [f.EkH.CALL_ACCEPT]: s.IL,
          [f.EkH.CALL_START]: s.FI,
          [f.EkH.QUICKSWITCHER_SHOW]: c.$,
        },
        T = { [f.EkH.QUICKSWITCHER_SHOW]: c.$ };
      function S() {
        return [
          {
            description: R.intl.string(R.t.bx4Uy8),
            binds: b(f.EkH.SERVER_PREV, f.EkH.SERVER_NEXT),
          },
          {
            description: R.intl.string(R.t["+Wem6u"]),
            binds: b(f.EkH.CHANNEL_PREV, f.EkH.CHANNEL_NEXT),
          },
          {
            description: R.intl.string(R.t["+2fcd3"]),
            binds: b(f.EkH.NAVIGATE_BACK, f.EkH.NAVIGATE_FORWARD),
          },
          {
            description: R.intl.string(R.t.eVmj1N),
            binds: b(f.EkH.UNREAD_PREV, f.EkH.UNREAD_NEXT),
          },
          {
            description: R.intl.string(R.t.EcqS7e),
            binds: b(f.EkH.MENTION_CHANNEL_PREV, f.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
          },
          {
            description: R.intl.string(R.t["Bqss7+"]),
            binds: b(f.EkH.TOGGLE_PREVIOUS_GUILD),
          },
          {
            description: R.intl.string(R.t.UaXAPz),
            binds: b(f.EkH.MARK_SERVER_READ),
          },
          {
            description: R.intl.string(R.t["5X9vFh"]),
            binds: b(f.EkH.MARK_CHANNEL_READ),
          },
          {
            description: R.intl.string(R.t.JoxNnp),
            binds: b(f.EkH.SEARCH_EMOJIS),
            groupEnd: !0,
          },
          {
            description: R.intl.string(R.t.tL6eVV),
            binds: b(f.EkH.TOGGLE_MUTE),
          },
          {
            description: R.intl.string(R.t["QXe/7e"]),
            binds: b(f.EkH.TOGGLE_DEAFEN),
          },
          {
            description: R.intl.string(R.t.d6UIio),
            binds: b(f.EkH.CALL_ACCEPT),
          },
          {
            description: R.intl.string(R.t.IcEW09),
            binds: b(f.EkH.MARK_CHANNEL_READ),
          },
          {
            description: R.intl.string(R.t.WN2dsb),
            binds: b(f.EkH.CALL_START),
            groupEnd: !0,
          },
          {
            description: R.intl.string(R.t.L3RYYG),
            binds: b(f.EkH.SCROLL_UP, f.EkH.SCROLL_DOWN),
          },
          {
            description: R.intl.string(R.t["3HAurK"]),
            binds: b(f.EkH.JUMP_TO_FIRST_UNREAD),
          },
          {
            description: R.intl.string(R.t.rrYBEh),
            binds: b(f.EkH.TEXTAREA_FOCUS),
          },
          {
            description: R.intl.string(R.t.yYsRlJ),
            binds: b(f.EkH.QUICKSWITCHER_SHOW),
          },
        ];
      }
    },
    134616: function (e, t, n) {
      n.d(t, {
        u: function () {
          return u;
        },
      });
      var s = n(513431),
        i = n(481060),
        r = n(40851),
        o = n(574254),
        l = n(585483),
        a = n(547420),
        c = n(981631);
      let u = {
        POP_LAYER: {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action(e) {
            if ((0, i.isInDndMode)()) return !1;
            if (l.S.hasSubscribers(c.CkL.CALL_DECLINE))
              return l.S.dispatch(c.CkL.CALL_DECLINE), !1;
            if (o.Z.close()) return !1;
            if ((0, s.k)(e.target)) {
              let t = (0, r.J5)(e.target);
              if (null == t ? void 0 : t.hasSubscribers(c.CkL.POPOUT_CLOSE))
                return t.dispatch(c.CkL.POPOUT_CLOSE), !1;
            }
            if (l.S.hasSubscribers(c.CkL.MODAL_CLOSE))
              return l.S.dispatch(c.CkL.MODAL_CLOSE), !1;
            l.S.dispatch(c.CkL.LAYER_POP_ESCAPE_KEY);
          },
        },
        ...a.ZP,
      };
    },
    472365: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return w;
        },
      }),
        n(411104);
      var s = n(200651),
        i = n(192379),
        r = n(120356),
        o = n.n(r),
        l = n(399606),
        a = n(481060),
        c = n(588705),
        u = n(100527),
        d = n(906732),
        h = n(388905),
        E = n(792766),
        p = n(600164),
        _ = n(436774),
        m = n(313201),
        C = n(451603),
        N = n(885714),
        g = n(973616),
        f = n(594174),
        R = n(855981),
        b = n(55543),
        I = n(626135),
        T = n(768581),
        S = n(358085),
        O = n(998502),
        x = n(379164),
        A = n(590965),
        y = n(981631),
        M = n(474936),
        P = n(388032),
        L = n(939661),
        v = n(232186);
      function D() {
        let { analyticsLocations: e, sourceAnalyticsLocations: t } = (0, d.ZP)(
          u.Z.PREMIUM_UPSELL_TOOLTIP,
        );
        return (
          i.useEffect(() => {
            I.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
              type: M.cd.GUILD_CAP_INLINE_INVITE_MODAL,
              location: { page: y.ZY5.NATIVE_INVITE_MODAL },
              location_stack: t,
            });
          }, [t]),
          (0, s.jsxs)(a.Clickable, {
            onClick: () =>
              (0, N.Z)({
                analyticsSource: { page: y.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                analyticsLocation: {
                  page: y.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                  section: y.jXE.GUILD_CAP_UPSELL_MODAL,
                },
                analyticsLocations: e,
              }),
            className: L.experimentUpsellError,
            children: [
              (0, s.jsx)(a.NitroWheelIcon, {
                size: "md",
                className: L.experimentUpsellIcon,
                color: _.JX.PREMIUM_TIER_2,
              }),
              (0, s.jsx)("span", {
                className: L.experimentUpsellText,
                children: P.intl.string(P.t["4/W4Pz"]),
              }),
              (0, s.jsx)("span", {
                className: L.experimentGetNitro,
                children: P.intl.string(P.t.b6KOkJ),
              }),
            ],
          })
        );
      }
      function Z(e) {
        let { className: t } = e;
        return (0, s.jsxs)("div", {
          "aria-hidden": "true",
          className: o()(L.iconContainer, t),
          children: [
            (0, s.jsx)(R.Z, { className: L.iconSparklePlus }),
            (0, s.jsx)(a.LinkIcon, {
              size: "custom",
              color: "currentColor",
              className: L.iconLink,
              width: 40,
              height: 40,
            }),
            (0, s.jsx)(b.Z, { className: L.iconSparkleStar }),
          ],
        });
      }
      function U(e) {
        let { transitionState: t } = e,
          n = (0, m.Dt)(),
          { analyticsLocations: i } = (0, d.ZP)(u.Z.INVITE_MODAL);
        return (0, s.jsx)(d.Gt, {
          value: i,
          children: (0, s.jsx)(a.ModalRoot, {
            size: a.ModalSize.DYNAMIC,
            "aria-labelledby": n,
            transitionState: t,
            children: (0, s.jsxs)(a.ModalContent, {
              className: L.errorContent,
              children: [
                (0, s.jsx)(Z, { className: L.errorImage }),
                (0, s.jsx)(a.Heading, {
                  id: n,
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  children: P.intl.string(P.t.u9zxnZ),
                }),
                (0, s.jsx)("div", {
                  className: L.errorBody,
                  children: P.intl.string(P.t.FWkU6O),
                }),
                (0, s.jsx)(h.zx, {
                  size: h.zx.Sizes.LARGE,
                  onClick: () => x.Z.close(),
                  color: h.zx.Colors.BRAND,
                  children: P.intl.string(P.t.wcqOoK),
                }),
              ],
            }),
          }),
        });
      }
      function w(e) {
        let t,
          n,
          { transitionState: r } = e;
        (0, l.e7)([f.default], () => {
          var e;
          return null === (e = f.default.getCurrentUser()) || void 0 === e
            ? void 0
            : e.premiumType;
        });
        let {
          invite: _,
          error: N,
          submitting: R,
        } = (0, l.cj)([A.Z], () => A.Z.getProps());
        i.useEffect(() => {
          !__OVERLAY__ &&
            S.isPlatformEmbedded &&
            ((0, S.isWindows)() ? O.ZP.minimize() : O.ZP.restore(),
            O.ZP.focus());
        }, []);
        let b = (0, m.Dt)(),
          { analyticsLocations: I } = (0, d.ZP)(u.Z.INVITE_MODAL);
        if (null == _) return null;
        if (
          _.state === y.r2o.EXPIRED ||
          _.state === y.r2o.BANNED ||
          _.state === y.r2o.ERROR
        )
          return (0, s.jsx)(U, { transitionState: r });
        if (null == _.channel) return null;
        function M() {
          null != _ && x.Z.acceptInvite(_);
        }
        let { guild: Z, channel: w, inviter: k, target_application: j } = _,
          H = null != Z,
          V = null != _.stage_instance,
          G = null == _.guild && null == _.channel && null != _.inviter;
        if (null != j)
          (t = null == Z ? void 0 : Z.name),
            (n = g.ZP.createFromServer(j).getCoverImageURL(1024));
        else if (null != Z)
          (t = Z.name),
            (n = T.ZP.getGuildSplashURL({ id: Z.id, splash: Z.splash }));
        else if (
          ((null == (t = w.name) || "" === t) && null != k && (t = k.username),
          null == t)
        )
          throw Error("no name for group DM invite");
        let K = (0, C.yU)(),
          W = V
            ? P.intl.string(P.t["5UKyUl"])
            : P.intl.format(P.t.QD7BDA, { guildName: t });
        return (
          G && (W = P.intl.string(P.t["e/6Ogo"])),
          (0, s.jsx)(d.Gt, {
            value: I,
            children: (0, s.jsxs)(a.ModalRoot, {
              size: a.ModalSize.DYNAMIC,
              "aria-labelledby": b,
              transitionState: r,
              className: L.container,
              children: [
                (0, s.jsx)("div", {
                  className: L.contentWrapper,
                  children: (0, s.jsx)(a.Scroller, {
                    className: L.scroller,
                    children: (0, s.jsxs)(p.Z, {
                      className: L.inviteContent,
                      direction: p.Z.Direction.VERTICAL,
                      justify: p.Z.Justify.BETWEEN,
                      children: [
                        (0, s.jsx)("div", {
                          id: b,
                          className: v.marginBottom20,
                          children: (0, s.jsx)(c.Z, {
                            invite: _,
                            disableUser: H,
                            error: N,
                          }),
                        }),
                        V && null != Z
                          ? (0, s.jsx)("div", {
                              className: o()(v.marginBottom20, L.stage),
                              children: (0, s.jsx)(E.Z, {
                                isCard: !0,
                                stageInstance: _.stage_instance,
                                guild: Z,
                              }),
                            })
                          : null,
                        (0, s.jsxs)("div", {
                          children: [
                            K ? (0, s.jsx)(D, {}) : null,
                            null == j
                              ? (0, s.jsx)(a.Tooltip, {
                                  text: K ? P.intl.string(P.t.iLyuDA) : null,
                                  position: "bottom",
                                  children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } =
                                      e;
                                    return (0, s.jsx)(h.zx, {
                                      size: h.zx.Sizes.LARGE,
                                      onClick: M,
                                      submitting: R,
                                      disabled: K,
                                      color: V
                                        ? h.zx.Colors.GREEN
                                        : h.zx.Colors.BRAND,
                                      onMouseEnter: t,
                                      onMouseLeave: n,
                                      children: K
                                        ? P.intl.string(P.t.ZNCziI)
                                        : W,
                                    });
                                  },
                                })
                              : (0, s.jsxs)("div", {
                                  className: L.buttonGroup,
                                  children: [
                                    (0, s.jsx)(h.zx, {
                                      size: h.zx.Sizes.LARGE,
                                      onClick: M,
                                      submitting: R,
                                      children: P.intl.string(P.t.RscU7O),
                                    }),
                                    (0, s.jsx)(h.zx, {
                                      color: h.zx.Colors.PRIMARY,
                                      size: h.zx.Sizes.LARGE,
                                      onClick: M,
                                      submitting: R,
                                      children: P.intl.string(P.t.eylRaW),
                                    }),
                                  ],
                                }),
                            (0, s.jsx)(p.Z, {
                              justify: p.Z.Justify.CENTER,
                              className: v.marginTop8,
                              children: (0, s.jsx)(h.zx, {
                                look: h.zx.Looks.LINK,
                                className: L.noThanksButton,
                                onClick: function () {
                                  x.Z.close();
                                },
                                color: h.zx.Colors.TRANSPARENT,
                                children: P.intl.string(P.t.ndsK4e),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                null != n &&
                  (0, s.jsx)("div", {
                    className: L.inviteSplash,
                    style: { backgroundImage: "url(".concat(n, ")") },
                  }),
              ],
            }),
          })
        );
      }
    },
    379164: function (e, t, n) {
      var s = n(570140),
        i = n(447543),
        r = n(782605);
      t.Z = {
        acceptInvite(e) {
          let t = i.Z.getInviteContext("Desktop Invite Modal", e);
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
            () => this.close(),
            (e) => {
              s.Z.dispatch({
                type: "INVITE_MODAL_ERROR",
                message: (0, r.O)(e.code),
              });
            },
          );
        },
        close() {
          s.Z.dispatch({ type: "INVITE_MODAL_CLOSE" });
        },
      };
    },
    185666: function (e, t, n) {
      var s = n(200651);
      n(192379);
      var i = n(481060),
        r = n(570140),
        o = n(317770),
        l = n(472365),
        a = n(590965);
      let c = "INVITE_MODAL_KEY";
      class u extends o.Z {
        _initialize() {
          r.Z.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            r.Z.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
        }
        _terminate() {
          (0, i.closeModal)(c),
            r.Z.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            r.Z.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
        }
        handleOpenModal() {
          a.Z.isOpen() &&
            !(0, i.hasModalOpen)(c) &&
            (0, i.openModal)((e) => (0, s.jsx)(l.Z, { ...e }), {
              modalKey: c,
              onCloseRequest: () =>
                r.Z.dispatch({ type: "INVITE_MODAL_CLOSE" }),
            });
        }
        handleCloseModal() {
          (0, i.closeModal)(c);
        }
      }
      t.Z = new u();
    },
    590965: function (e, t, n) {
      let s;
      n(47120), n(653041);
      var i,
        r,
        o,
        l,
        a = n(442837),
        c = n(570140),
        u = n(413605),
        d = n(703656),
        h = n(131704),
        E = n(601964),
        p = n(592125),
        _ = n(430824),
        m = n(701190),
        C = n(496675),
        N = n(594174),
        g = n(998502),
        f = n(981631),
        R = n(176505);
      let b = f.IlC.APP,
        I = !1,
        T = !1,
        S = [];
      function O() {
        I = !0;
      }
      class x extends (i = a.ZP.Store) {
        initialize() {
          this.waitFor(_.Z, m.Z, N.default);
        }
        isOpen() {
          let e = __OVERLAY__ ? f.IlC.OVERLAY : f.IlC.APP;
          return !!(I && S.length > 0 && b === e);
        }
        getProps() {
          return {
            invite: S.length > 0 ? S[0][0] : null,
            error: null != s && "" !== s ? s : null,
            submitting: T,
          };
        }
      }
      (l = "InviteModalStore"),
        (o = "displayName") in (r = x)
          ? Object.defineProperty(r, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[o] = l),
        (t.Z = new x(c.Z, {
          OVERLAY_INITIALIZE: O,
          CONNECTION_OPEN: O,
          CONNECTION_CLOSED: function () {
            I = !1;
          },
          INVITE_MODAL_OPEN: function (e) {
            let t = e.invite;
            if (null == t) return !1;
            if (
              !(
                t.state === f.r2o.EXPIRED ||
                t.state === f.r2o.BANNED ||
                t.state === f.r2o.ERROR
              )
            ) {
              let { channel: e, guild: n } = t;
              if (null == e) return !1;
              if ((0, h.bc)(e.type)) {
                if (null != p.Z.getChannel(e.id))
                  return (0, d.XU)(f.ME, e.id), g.ZP.focus(), !1;
              } else {
                if (null == n) return !1;
                if (null != _.Z.getGuild(n.id) && !(0, u.TY)(t)) {
                  let e = (function (e) {
                    if ((0, u.W6)(e)) return R.oC.ROLE_SUBSCRIPTIONS;
                    let { channel: t } = e;
                    if (null != t) {
                      let e = p.Z.getChannel(t.id);
                      if (C.Z.can(f.Plq.VIEW_CHANNEL, e)) return t.id;
                    }
                    return null;
                  })(t);
                  return (0, d.XU)(n.id, e), g.ZP.focus(), !1;
                }
              }
            }
            if (
              S.some((e) => {
                let [n] = e;
                return n.code === t.code;
              })
            )
              return !1;
            (b = e.context), (T = !1);
            let n = (function (e) {
              let {
                  approximate_member_count: t,
                  approximate_presence_count: n,
                  code: s,
                  state: i,
                  target_type: r,
                  target_user: o,
                  target_application: l,
                  stage_instance: a,
                  type: c,
                  channel: u,
                  guild: d,
                } = e,
                h = {
                  code: s,
                  state: i,
                  approximate_member_count: t,
                  approximate_presence_count: n,
                  target_type: r,
                  target_user: o,
                  target_application: l,
                  stage_instance: a,
                  type: c,
                };
              return (
                null != u && (h.channel = { ...u }),
                null != d && (h.guild = new E.ZP(d)),
                null != e.inviter && (h.inviter = { ...e.inviter }),
                h
              );
            })(t);
            S.push([n, e.resolve]);
          },
          INVITE_MODAL_CLOSE: function () {
            if (((s = null), (T = !1), S.length > 0)) {
              let [, e] = S.shift();
              null != e && e();
            }
          },
          INVITE_ACCEPT: function () {
            T = !0;
          },
          INVITE_MODAL_ERROR: function (e) {
            let { message: t } = e;
            (s = t), (T = !1);
          },
        }));
    },
    503737: function (e, t, n) {
      var s = n(200651);
      n(192379);
      var i = n(481060),
        r = n(570140),
        o = n(468026),
        l = n(317770),
        a = n(981631),
        c = n(388032);
      let u = "ActivityInviteManager",
        d = () => {
          r.Z.dispatch({ type: "ACTIVITY_INVITE_MODAL_CLOSE" });
        };
      class h extends l.Z {
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
          let { activity: t, isPrivate: r, context: l } = e,
            h =
              l === a.IlC.POPOUT
                ? i.POPOUT_MODAL_CONTEXT
                : i.DEFAULT_MODAL_CONTEXT;
          r
            ? (0, i.openModal)(
                (e) =>
                  (0, s.jsx)(o.default, {
                    title: c.intl.formatToPlainString(c.t["2tN7io"], {
                      name: t.name,
                    }),
                    body: c.intl.string(c.t.MAxtkp),
                    confirmText: c.intl.string(c.t.BddRzc),
                    ...e,
                  }),
                { onCloseCallback: d, modalKey: u },
                h,
              )
            : (0, i.openModalLazy)(
                async () => {
                  let { default: e } = await n
                    .e("79921")
                    .then(n.bind(n, 699099));
                  return (t) => (0, s.jsx)(e, { ...t });
                },
                { onCloseCallback: d, modalKey: u, contextKey: h },
              );
        }
        handleModalClose(e) {
          (0, i.closeModal)(u);
        }
      }
      t.Z = new h();
    },
    14429: function (e, t, n) {
      let s = (0, n(818083).B)({
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
      t.Z = s;
    },
    175281: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Z;
        },
      }),
        n(47120),
        n(653041);
      var s,
        i,
        r = n(200651),
        o = n(192379),
        l = n(120356),
        a = n.n(l),
        c = n(512722),
        u = n.n(c),
        d = n(392711),
        h = n.n(d),
        E = n(748780),
        p = n(442837),
        _ = n(215569),
        m = n(481060),
        C = n(612226),
        N = n(951483),
        g = n(714338),
        f = n(607070),
        R = n(585483),
        b = n(557177),
        I = n(264549),
        T = n(981631),
        S = n(388032),
        O = n(521287);
      function x(e, t, n) {
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
      ((i = s || (s = {})).UP = "UP"),
        (i.DOWN = "DOWN"),
        (i.LEFT = "LEFT"),
        (i.RIGHT = "RIGHT");
      let A = {
        UP: h().throttle(() => (0, b.GN)("ddr-up"), 100),
        DOWN: h().throttle(() => (0, b.GN)("ddr-down"), 100),
        LEFT: h().throttle(() => (0, b.GN)("ddr-left"), 100),
        RIGHT: h().throttle(() => (0, b.GN)("ddr-right"), 100),
      };
      function y(e) {
        switch (e.keyCode) {
          case T.yXg.ARROW_UP:
            return "UP";
          case T.yXg.ARROW_DOWN:
            return "DOWN";
          case T.yXg.ARROW_LEFT:
            return "LEFT";
          case T.yXg.ARROW_RIGHT:
            return "RIGHT";
          default:
            return null;
        }
      }
      let M = [
        C.Q2.MESSAGE,
        C.Q2.NAVIGATION,
        C.Q2.VOICE_AND_VIDEO,
        C.Q2.CHAT,
        C.Q2.MISCELLANEOUS,
      ];
      function P(e) {
        let { showBackdrop: t } = e;
        return (0, r.jsx)("div", {
          className: a()(O.backdrop, { [O.show]: t }),
        });
      }
      function L() {
        let e = o.useMemo(
          () =>
            h()((0, C.Rv)())
              .groupBy((e) => e.group)
              .value(),
          [],
        );
        return (0, r.jsx)("div", {
          className: O.keyboardShortcutList,
          children: M.map((t) => {
            let n = e[t],
              s = (0, C.UD)(t),
              i = (0, C.U6)(t);
            return (0, r.jsxs)(
              "div",
              {
                className: O.keyboardShortcutSection,
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)(m.Heading, {
                        variant: "heading-lg/semibold",
                        children: s,
                      }),
                      null != i &&
                        (0, r.jsx)(m.Text, {
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
                      children: n.map((e, t) => {
                        var n;
                        return (null === (n = e.predicate) || void 0 === n
                          ? void 0
                          : n.call(e)) === !1
                          ? null
                          : (0, r.jsxs)(
                              "div",
                              {
                                className: a()(O.keybindGroup),
                                children: [
                                  (0, r.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    children: e.description,
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "keybind-shortcuts",
                                    children: e.binds.map((e) =>
                                      (0, r.jsx)(
                                        m.KeyCombo,
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
            R.S.subscribe(T.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            R.S.subscribe(T.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.addEventListener("keydown", this.handleKeyDown, {
              capture: !0,
            }),
            window.addEventListener("keyup", this.handleKeyUp, { capture: !0 });
        }
        componentWillUnmount() {
          R.S.unsubscribe(T.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            R.S.unsubscribe(T.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.removeEventListener("keydown", this.handleKeyDown, {
              capture: !0,
            }),
            window.removeEventListener("keyup", this.handleKeyUp, {
              capture: !0,
            });
        }
        render() {
          let { UP: e, DOWN: t, LEFT: n, RIGHT: s } = this.state;
          return (0, r.jsxs)(E.Z.div, {
            className: O.keyboardShortcutsModal,
            style: this.getStyles(),
            children: [
              (0, r.jsxs)(m.H, {
                className: O.modalTitle,
                children: [
                  (0, r.jsx)("div", {
                    className: O.content,
                    children: S.intl.string(S.t["1BdUt7"]),
                  }),
                  (0, r.jsx)(m.KeyCombo, { shortcut: "mod+/" }),
                ],
              }),
              (0, r.jsx)("div", {
                className: O.modalSubtitle,
                children: S.intl.string(S.t["2t19lZ"]),
              }),
              (0, r.jsxs)("div", {
                className: O.ddrArrows,
                children: [
                  (0, r.jsx)(D, {
                    arrow: "LEFT",
                    isActive: n,
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
                    isActive: s,
                    className: O.right,
                    children: "right",
                  }),
                ],
              }),
              (0, r.jsx)(m.AdvancedScrollerAuto, {
                ref: this.scrollerRef,
                fade: !0,
                children: (0, r.jsx)(m.HeadingLevel, {
                  children: (0, r.jsx)(L, {}),
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
              u()(null != e, "Scroller is pagedUp when not mounted"),
                e.scrollPageUp({ animate: !0 });
            }),
            x(this, "scrollPageDown", () => {
              let e = this.scrollerRef.current;
              u()(null != e, "Scroller is pagedDown when not mounted"),
                e.scrollPageDown({ animate: !0 });
            }),
            x(this, "arrowUp", (e) => {
              let { direction: t } = e;
              this.setState({ [t]: !1 });
            }),
            x(this, "arrowDown", (e) => {
              let { direction: t } = e;
              A[t](), this.setState({ [t]: !0 });
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
                this.lastInputedKeys[0] === T.yXg.H &&
                  this.lastInputedKeys[1] === T.yXg.H &&
                  this.lastInputedKeys[2] === T.yXg.ARROW_RIGHT &&
                  this.lastInputedKeys[3] === T.yXg.N &&
                  this.lastInputedKeys[4] === T.yXg.K &&
                  this.props.activateRagingDemon(),
                this.props.keyboardModeEnabled)
              )
                return;
              let t = y(e);
              null !== t &&
                (e.stopPropagation(),
                e.preventDefault(),
                this.arrowDown({ direction: t }));
            }),
            x(this, "handleKeyUp", (e) => {
              if (this.props.keyboardModeEnabled) return;
              let t = y(e);
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
        let { isActive: t, arrow: n, className: s, children: i } = e,
          [l, c] = o.useState(t),
          u = o.useCallback(() => {
            A[n](), c(!0);
          }, [n]);
        return (
          o.useEffect(() => {
            if (l) {
              let e = setTimeout(() => c(!1), 500);
              return () => clearTimeout(e);
            }
          }, [l]),
          (0, r.jsx)(m.Clickable, {
            onClick: u,
            className: a()(O.arrow, s, { [O.active]: t || l }),
            children: i,
          })
        );
      }
      function Z(e) {
        let { transitionState: t, onClose: n } = e,
          [s, i] = o.useState(!1),
          [l, c] = o.useState(!1),
          u = o.useMemo(() => (__OVERLAY__ ? (0, N.Zg)() : (0, C.Rv)()), []),
          { keyboardModeEnabled: d, useReducedMotion: h } = (0, p.cj)(
            [f.Z],
            () => ({
              keyboardModeEnabled: f.Z.keyboardModeEnabled,
              useReducedMotion: f.Z.useReducedMotion,
            }),
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(P, { showBackdrop: l }),
            (0, r.jsx)(m.ModalRoot, {
              className: a()(O.noBackground, { [O.noShadow]: s }),
              size: m.ModalSize.DYNAMIC,
              "aria-label": S.intl.string(S.t.T9DA2N),
              transitionState: t,
              children: (0, r.jsx)(_.W, {
                component: "div",
                children: s
                  ? (0, r.jsx)(
                      I.Z,
                      {
                        handleDemonClose: function () {
                          c(!1), setTimeout(n, 500);
                        },
                      },
                      "raging-demo",
                    )
                  : (0, r.jsx)(
                      v,
                      {
                        content: u,
                        keyboardModeEnabled: d,
                        activateRagingDemon: function () {
                          !h && (g.Z.disable(), i(!0), c(!0));
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
    377400: function (e, t, n) {
      var s = n(200651);
      n(192379);
      var i = n(481060),
        r = n(570140),
        o = n(317770),
        l = n(175281),
        a = n(285371);
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
          (0, i.openModal)((e) => (0, s.jsx)(l.Z, { ...e }), { modalKey: a.J });
        }
        hideKeyboardShortcuts() {
          (0, i.closeModal)(a.J);
        }
      }
      t.Z = new c();
    },
    264549: function (e, t, n) {
      n(653041), n(47120);
      var s = n(200651),
        i = n(192379),
        r = n(120356),
        o = n.n(r),
        l = n(392711),
        a = n.n(l),
        c = n(714338),
        u = n(585483),
        d = n(981631),
        h = n(727688);
      function E(e, t, n) {
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
      let p = { PRIMARY: () => !0, SECONDARY: () => !0 },
        _ = () =>
          (0, s.jsxs)(
            "div",
            {
              className: h.symbol,
              children: [
                (0, s.jsx)("div", { className: h.symbolBackground }),
                (0, s.jsx)("img", { alt: "", src: n(977706) }),
              ],
            },
            "symbol",
          );
      class m extends i.PureComponent {
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
          return (0, s.jsxs)(
            "div",
            {
              className: h.primaryExplosion,
              children: [
                (0, s.jsx)("img", {
                  alt: "",
                  className: h.circleInner,
                  src: n(273226),
                  width: 70,
                  height: 69,
                }),
                (0, s.jsx)("img", {
                  alt: "",
                  className: h.circleOuter,
                  src: n(922026),
                  width: 96,
                  height: 95,
                }),
                (0, s.jsx)("img", {
                  alt: "",
                  className: h.linesSecondary,
                  src: n(827926),
                  width: 183,
                  height: 104,
                }),
                (0, s.jsx)("img", {
                  alt: "",
                  className: h.linesMain,
                  src: n(873180),
                  width: 69,
                  height: 180,
                }),
              ],
            },
            "primary-explosion",
          );
        }
        renderSecondary(e, t) {
          return (0, s.jsxs)(
            "div",
            {
              className: h.secondaryExplosion,
              style: { top: t, left: e },
              children: [
                (0, s.jsx)(
                  "img",
                  {
                    alt: "",
                    className: h.circleInner,
                    src: n(272162),
                    width: 61,
                    height: 58,
                  },
                  "circle-inner",
                ),
                (0, s.jsx)(
                  "img",
                  {
                    alt: "",
                    className: h.circleOuter,
                    src: n(632989),
                    width: 85,
                    height: 85,
                  },
                  "circle-outer",
                ),
                (0, s.jsx)(
                  "img",
                  {
                    alt: "",
                    className: h.linesSecondary,
                    src: n(376252),
                    width: 162,
                    height: 173,
                  },
                  "lines-secondary",
                ),
                (0, s.jsx)(
                  "img",
                  {
                    alt: "",
                    className: h.linesMain,
                    src: n(720617),
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
              offsetY: n,
              animating: i,
              scale: r,
            } = this.state,
            l = [this.renderPrimary()];
          return (
            e && l.push(this.renderSecondary(t, n)),
            (0, s.jsx)("div", {
              className: o()(h.container, { [h.animate]: i }),
              style: {
                top: this.props.top,
                left: this.props.left,
                transform: "scale(".concat(r, ")"),
              },
              children: l,
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
              scale: a().random(0.6, 1, !0),
              offsetX: a().random(0, 140, !1) - 70,
              offsetY: a().random(0, 140, !1) - 70,
            }),
            E(this, "done", () => {
              this.props.onAnimationComplete(this.props.componentId);
            });
        }
      }
      let C = 240;
      class N extends i.PureComponent {
        componentDidMount() {
          this.setTimeout(() => {
            this.setState({ visible: !0 }),
              u.S.dispatch(d.CkL.SHAKE_APP, { duration: 2400 });
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
          return (0, s.jsx)("div", {
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
              let n = setTimeout(e, t);
              return this._timeouts.push(n), n;
            }),
            E(this, "removeExplosion", (e) => {
              let t = this.children,
                n = t.findIndex((t) => {
                  if (t.type !== m) return !1;
                  let n = t.props;
                  return null != n.componentId && n.componentId === e;
                });
              n >= 0 && t.splice(n, 1), this.forceUpdate();
            }),
            E(this, "createExplosion", () => {
              let e = this.children,
                t = (window.innerWidth / 2) >> 0,
                n = (window.innerHeight / 2) >> 0;
              if (this.state.explosions < 8) {
                let i = "expl-".concat(this.state.explosions);
                e.push(
                  (0, s.jsx)(
                    m,
                    {
                      componentId: i,
                      top: a().random(n - 100, n + 100, !1),
                      left: a().random(t - 200, t + 200, !1),
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
              (this.children = [(0, s.jsx)(_, {}, "symbol")]),
                this.forceUpdate(),
                this.setTimeout(this.delayedClose, 3e3);
            }),
            E(this, "delayedClose", () => {
              this.props.handleDemonClose();
            });
        }
      }
      t.Z = N;
    },
    970645: function (e, t, n) {
      n.d(t, {
        o: function () {
          return a;
        },
      });
      var s = n(544891),
        i = n(570140),
        r = n(355467),
        o = n(853872),
        l = n(981631);
      async function a() {
        try {
          i.Z.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH" });
          let { body: e } = await s.tn.get({
              url: l.ANM.CHECKOUT_RECOVERY,
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
    514701: function (e, t, n) {
      n.d(t, {
        I: function () {
          return i;
        },
      });
      var s = n(570140);
      function i() {
        s.Z.dispatch({ type: "HD_STREAMING_VIEWER_UPDATE_LAST_TRIGGERED" });
      }
    },
    467721: function (e, t, n) {
      var s,
        i = n(442837),
        r = n(570140);
      function o(e, t, n) {
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
      function l() {
        return { lastTriggered: 0 };
      }
      let a = l();
      class c extends (s = i.ZP.PersistedStore) {
        initialize(e) {
          a = { ...l(), ...(null != e ? e : {}) };
        }
        getState() {
          return a;
        }
        cooldownIsActive() {
          return a.lastTriggered >= Date.now() - 1728e5;
        }
      }
      o(c, "displayName", "HDStreamingViewerStore"),
        o(c, "persistKey", "HDStreamingViewerStore"),
        (t.Z = new c(r.Z, {
          LOGOUT: function () {
            a = l();
          },
          HD_STREAMING_VIEWER_UPDATE_LAST_TRIGGERED: function (e) {
            a.lastTriggered = Date.now();
          },
        }));
    },
    841174: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = n(200651);
      n(192379);
      var i = n(481060);
      function r(e) {
        (0, i.openModalLazy)(async () => {
          let { default: t } = await n.e("16554").then(n.bind(n, 917314));
          return (n) => (0, s.jsx)(t, { guildId: e, ...n });
        });
      }
    },
    367207: function (e, t, n) {
      n(411104), n(47120);
      var s = n(200651);
      n(192379);
      var i = n(392711),
        r = n(848246),
        o = n(481060),
        l = n(570140),
        a = n(904245),
        c = n(317770),
        u = n(100527),
        d = n(358221),
        h = n(963249),
        E = n(93127),
        p = n(361291),
        _ = n(592125),
        m = n(430824),
        C = n(594174),
        N = n(431),
        g = n(626135),
        f = n(74538),
        R = n(557457),
        b = n(970645),
        I = n(30684),
        T = n(514701),
        S = n(6242),
        O = n(467721),
        x = n(757692),
        A = n(114064),
        y = n(933843),
        M = n(281494),
        P = n(276444),
        L = n(684259),
        v = n(937579),
        D = n(1163),
        Z = n(841174),
        U = n(522558),
        w = n(879463),
        k = n(822070),
        j = n(520540),
        H = n(11352),
        V = n(474936),
        G = n(981631),
        K = n(354459),
        W = n(37113),
        Y = n(388032);
      function F(e, t, n) {
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
      class z extends c.Z {
        _initialize() {
          __OVERLAY__
            ? l.Z.subscribe(
                "PREMIUM_PAYMENT_MODAL_OPEN",
                this._handlePremiumPaymentModalOpen,
              )
            : (l.Z.subscribe(
                "PREMIUM_PAYMENT_MODAL_CLOSE",
                this._handlePremiumPaymentModalClose,
              ),
              l.Z.subscribe(
                "MESSAGE_LENGTH_UPSELL",
                this.handleMessageLengthUpsell,
              ),
              l.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchPremiumOffer,
              ),
              l.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchCheckoutRecovery,
              ),
              l.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchUserAffinities,
              ),
              l.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._trackCustomNotificationSoundsExposure,
              ),
              l.Z.subscribe("POST_CONNECTION_OPEN", this._trackSkyLoadExposure),
              l.Z.subscribe(
                "RTC_CONNECTION_STATE",
                this.maybeShowHDStreamingPerksDemoPostUpsellModal,
              ),
              l.Z.subscribe(
                "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                this.maybeShowHDStreamingViewerUpsellMessage,
              ));
        }
        _terminate() {
          __OVERLAY__
            ? l.Z.unsubscribe(
                "PREMIUM_PAYMENT_MODAL_OPEN",
                this._handlePremiumPaymentModalOpen,
              )
            : (l.Z.unsubscribe(
                "PREMIUM_PAYMENT_MODAL_CLOSE",
                this._handlePremiumPaymentModalClose,
              ),
              l.Z.unsubscribe(
                "MESSAGE_LENGTH_UPSELL",
                this.handleMessageLengthUpsell,
              ),
              l.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchPremiumOffer,
              ),
              l.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchCheckoutRecovery,
              ),
              l.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchUserAffinities,
              ),
              l.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._trackCustomNotificationSoundsExposure,
              ),
              l.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._trackSkyLoadExposure,
              ),
              l.Z.unsubscribe(
                "RTC_CONNECTION_STATE",
                this.maybeShowHDStreamingPerksDemoPostUpsellModal,
              ),
              l.Z.unsubscribe(
                "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                this.maybeShowHDStreamingViewerUpsellMessage,
              ));
        }
        handleMessageLengthUpsell(e) {
          let { channel: t, content: i } = e;
          (0, o.openModalLazy)(async () => {
            let { default: e } = await n.e("33184").then(n.bind(n, 465836));
            return (n) => (0, s.jsx)(e, { channel: t, content: i, ...n });
          });
        }
        _getReferralIncentiveEligibility() {
          let e = C.default.getCurrentUser();
          if (P.Z.getIsFetchingReferralIncentiveEligibility() || !(0, f.I5)(e))
            return;
          let t = { location: "PremiumManager" },
            n = { autoTrackExposure: !1 };
          if (
            !!j.g.getCurrentConfig(t, n).enabled &&
            !w.eP.getCurrentConfig(t, n).enabled
          )
            k.$.getCurrentConfig(t, n).enabled && (0, M.bq)();
        }
        openPremiumPaymentModalInApp(e) {
          if (__OVERLAY__)
            throw Error(
              "Should not use this function from the overlay, use ModalAPI.openModal instead",
            );
          return new Promise((t, n) => {
            (0, h.Z)({
              ...e,
              onClose: (e) => {
                e ? t() : n();
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
            subscriptionTier: n,
            followupSKUInfo: s,
            analyticsObject: i,
          } = null != e ? e : {};
          return new Promise((e, r) => {
            (this._premiumPaymentModalCloseResolve = e),
              (this._premiumPaymentModalCloseReject = r),
              l.Z.dispatch({
                type: "PREMIUM_PAYMENT_MODAL_OPEN",
                initialPlanId: t,
                subscriptionTier: n,
                followupSKUInfo: s,
                analyticsObject: i,
              });
          });
        }
        maybeShowHDStreamingPerksDemoPostUpsellModal(e) {
          let { enabled: t } = D.Z.getCurrentConfig(
            { location: "PremiumManager" },
            { autoTrackExposure: !1 },
          );
          if (!t || e.state !== G.hes.DISCONNECTED || e.willReconnect) return;
          let n = _.Z.getChannel(e.channelId);
          if (null == n) return;
          let s = A.Z.hasActiveDemo(r.q.STREAM_HIGH_QUALITY);
          if (
            (s &&
              l.Z.dispatch({
                type: "PREMIUM_PERKS_DEMO_COMPLETE",
                perkType: r.q.STREAM_HIGH_QUALITY,
              }),
            !s)
          )
            return;
          let { resolution: i, fps: o } = p.Z.getState();
          !(0, y.mc)(i, o) && (0, Z.Z)(n.guild_id);
        }
        constructor(...e) {
          super(...e),
            F(this, "_premiumPaymentModalCloseResolve", null),
            F(this, "_premiumPaymentModalCloseReject", null),
            F(this, "_maybeFetchPremiumOffer", async () => {
              let e = C.default.getCurrentUser();
              if (null != e && e.verified) {
                let t = !(0, f.I5)(e) && N.Z.shouldFetchOffer();
                await (0, v.T)("PremiumManager", void 0, t);
              }
              l.Z.dispatch({ type: "PREMIUM_MARKETING_DATA_READY" });
            }),
            F(this, "_maybeFetchCheckoutRecovery", async () => {
              let e = C.default.getCurrentUser();
              null != e &&
                e.verified &&
                !(0, f.I5)(e) &&
                I.Z.shouldFetchCheckoutRecovery() &&
                (await (0, b.o)());
            }),
            F(this, "_maybeFetchUserAffinities", () => {
              let { enabled: e } = U.w.getCurrentConfig(
                { location: "PremiumManager" },
                { autoTrackExposure: !1 },
              );
              e && (0, E.W)();
            }),
            F(this, "_trackCustomNotificationSoundsExposure", () => {
              H.Y.trackExposure({ location: "PremiumManager" });
            }),
            F(this, "_trackSkyLoadExposure", () => {
              L.Z.trackExposure({ location: "PremiumManager" });
            }),
            F(this, "_handlePremiumPaymentModalOpen", (e) => {
              (0, h.Z)({
                ...e,
                analyticsLocations: [u.Z.OVERLAY],
                onClose: (e) => {
                  l.Z.dispatch({
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
              (0, i.debounce)((e, t, n) => {
                var s, i;
                let r = d.Z.getSelectedParticipant(e),
                  o = (0, x.o)(r, n),
                  { sendNitroMessage: l } = (0, S.TD)(o),
                  c =
                    null !==
                      (i =
                        null === (s = m.Z.getGuild(t)) || void 0 === s
                          ? void 0
                          : s.premiumTier) && void 0 !== i
                      ? i
                      : G.Eu4.NONE;
                if (
                  O.Z.cooldownIsActive() ||
                  !l ||
                  c >= G.Eu4.TIER_2 ||
                  (null == r ? void 0 : r.type) !== K.fO.STREAM ||
                  (null == r ? void 0 : r.id) === (null == n ? void 0 : n.id) ||
                  null == r.maxResolution ||
                  null == r.maxFrameRate
                )
                  return;
                T.I();
                let u = Y.intl.formatToPlainString(Y.t.AbyeZG, {
                  nickname: r.userNick,
                  resolution: (0, W.o6)(r.maxResolution.height),
                  fps: (0, R.bp)(r.maxFrameRate),
                });
                a.Z.sendNitroSystemMessage(e, u),
                  g.default.track(G.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                    type: V.cd.HD_STREAMING_VIEWER_UPSELL,
                    location_section:
                      null != t ? G.jXE.TEXT_IN_VOICE : G.jXE.CHANNEL_TEXT_AREA,
                    location_object: G.qAy.MESSAGE,
                    guild_id: t,
                  });
              }, 200),
            );
        }
      }
      t.Z = new z();
    },
    900085: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return W;
        },
      }),
        n(411104),
        n(47120);
      var s,
        i = n(200651),
        r = n(192379),
        o = n(120356),
        l = n.n(o),
        a = n(873546),
        c = n(442837),
        u = n(481060),
        d = n(239091),
        h = n(134616),
        E = n(714338),
        p = n(212819),
        _ = n(14429),
        m = n(576855),
        C = n(313201),
        N = n(592125),
        g = n(888369),
        f = n(430824),
        R = n(306680),
        b = n(944486),
        I = n(938475),
        T = n(585483),
        S = n(63063),
        O = n(51596),
        x = n(823385),
        A = n(415795),
        y = n(670512),
        M = n(981631),
        P = n(388032),
        L = n(449532);
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
      let D = 10,
        Z = () =>
          (0, i.jsxs)("div", {
            className: L.emptyState,
            children: [
              (0, i.jsx)("div", {
                className: L.emptyStateNote,
                children: P.intl.string(P.t.bpbATE),
              }),
              (0, i.jsx)("div", {
                className: L.emptyStateCTA,
                children: (0, i.jsx)(u.Anchor, {
                  href: S.Z.getArticleURL(M.BhN.QUICK_SWITCHER_TUTORIAL),
                  children: P.intl.string(P.t["4iPfEB"]),
                }),
              }),
            ],
          });
      class U extends (s = r.Component) {
        render() {
          let e = f.Z.getGuild(this.props.channel.guild_id);
          return (0, i.jsx)(A.$W, {
            ...this.props,
            children: (0, i.jsx)("div", {
              className: L.miscContainer,
              children: null != e ? e.name : null,
            }),
          });
        }
      }
      v(U, "defaultProps", { unread: !1 });
      let w = c.ZP.connectStores([R.ZP, N.Z], (e) => {
          let { channel: t } = e;
          return {
            unread: R.ZP.hasUnread(t.id),
            mentions: R.ZP.getMentionCount(t.id),
            isMentionLowImportance: R.ZP.getIsMentionLowImportance(t.id),
            category: N.Z.getChannel(t.parent_id),
          };
        })(U),
        k = c.ZP.connectStores([I.ZP], (e) => {
          let { channel: t } = e;
          if (null == t.guild_id)
            throw Error(
              "ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...",
            );
          return { voiceStates: I.ZP.getVoiceStates(t.guild_id)[t.id] };
        })(U),
        j = c.ZP.connectStores([g.default], (e) => {
          let { guild: t } = e;
          return { unread: g.default.hasUnread(t.id) };
        })(A.ic),
        H = c.ZP.connectStores([R.ZP], (e) => {
          let { channel: t } = e;
          return { mentions: R.ZP.getMentionCount(t.id) };
        })(A.PZ),
        V = c.ZP.connectStores([N.Z, R.ZP], (e) => {
          let { user: t } = e,
            n = N.Z.getDMFromUserId(t.id);
          return { mentions: null != n ? R.ZP.getMentionCount(n) : 0 };
        })(A.n5);
      function G(e, t, n) {
        return (0, i.jsx)(
          u.Tooltip,
          {
            text: n,
            children: (e) =>
              (0, i.jsx)("span", {
                ...e,
                className: L.autocompleteQuerySymbol,
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
          let { mouseFocusDisabled: n, query: s } = this.state,
            { selectedIndex: i } = this.props,
            { current: r } = this.scrollerRef;
          if (null != r)
            s !== t.query
              ? r.scrollTo({ to: 0 })
              : n &&
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
            { query: n } = this.state,
            s = t.length > 0 && "" !== n;
          return (0, i.jsx)(u.FocusRing, {
            children: (0, i.jsx)("input", {
              className: L.input,
              "aria-label": P.intl.string(P.t.ZvKwYW),
              ref: this.inputRef,
              type: "text",
              role: "combobox",
              "aria-controls": this._listId,
              "aria-expanded": s,
              "aria-activedescendant": s ? this.getRowId(e) : void 0,
              "aria-autocomplete": "list",
              placeholder: P.intl.string(P.t.Vtvewc),
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
            ? (0, i.jsx)(Z, {})
            : 0 === t.length
              ? null
              : (0, i.jsx)(u.ListAuto, {
                  innerId: this._listId,
                  innerRole: "listbox",
                  "aria-label": P.intl.string(P.t.Wef5Dg),
                  ref: this.scrollerRef,
                  sectionHeight: 0,
                  rowHeight: 34,
                  paddingBottom: D,
                  sections: [t.length],
                  className: L.scroller,
                  renderRow: this.renderRow,
                  renderSection: this.renderSection,
                });
        }
        focusNode(e) {
          T.S.dispatch(M.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
        }
        getRowId(e) {
          return "quick-switcher-".concat(this._listId, "-item-").concat(e);
        }
        renderProtip() {
          return (0, i.jsx)(m.Z, {
            className: l()(L.protip, {
              [L.hasContent]: this.state.query.length > 0,
            }),
            type: m.Z.Types.INLINE,
            children: P.intl.format(P.t.wukqXV, {
              userSymbolHook: (e, t) =>
                G(t, p.xQ.USER, P.intl.string(P.t.GQRCGh)),
              textChannelSymbolHook: (e, t) =>
                G(t, p.xQ.TEXT_CHANNEL, P.intl.string(P.t.wrwhub)),
              voiceChannelSymbolHook: (e, t) =>
                G(t, p.xQ.VOICE_CHANNEL, P.intl.string(P.t["jz+hJi"])),
              guildSymbolHook: (e, t) =>
                G(t, p.xQ.GUILD, P.intl.string(P.t.WuwCWl)),
              helpdeskArticle: S.Z.getArticleURL(M.BhN.QUICK_SWITCHER_TUTORIAL),
            }),
          });
        }
        renderTutorial() {
          let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
          return t
            ? null
            : (0, i.jsx)(y.Z, { hasQuery: e.length > 0 && n.length > 0 });
        }
        render() {
          return (0, i.jsx)(u.ModalRoot, {
            "aria-label": P.intl.string(P.t.ZvKwYW),
            size: u.ModalSize.DYNAMIC,
            transitionState: this.props.transitionState,
            className: l()(L.container, a.tq && L.mobileContainer),
            fullscreenOnMobile: !1,
            children: (0, i.jsxs)("div", {
              className: l()(L.quickswitcher, a.tq && L.mobileQuickswitcher),
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
                  return (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("63288"),
                      n.e("33053"),
                      n.e("17298"),
                      n.e("7654"),
                      n.e("78258"),
                      n.e("98479"),
                      n.e("53967"),
                      n.e("31113"),
                      n.e("60696"),
                      n.e("58227"),
                      n.e("16114"),
                      n.e("85060"),
                      n.e("94107"),
                      n.e("33213"),
                      n.e("46593"),
                    ]).then(n.bind(n, 545135));
                    return (n) =>
                      (0, i.jsx)(e, {
                        ...n,
                        guild: t.record,
                        onSelect: O.Cp,
                        hideSettings: !0,
                      });
                  });
                case p.h8.TEXT_CHANNEL:
                case p.h8.VOICE_CHANNEL:
                  let s = t.record,
                    r = f.Z.getGuild(s.getGuildId());
                  if (null == r) return;
                  switch (s.type) {
                    case M.d4z.GUILD_TEXT:
                    case M.d4z.GUILD_ANNOUNCEMENT:
                    case M.d4z.GUILD_FORUM:
                    case M.d4z.GUILD_MEDIA:
                      return (0, d.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                          n.e("79695"),
                          n.e("18320"),
                          n.e("44011"),
                        ]).then(n.bind(n, 373651));
                        return (t) =>
                          (0, i.jsx)(e, {
                            ...t,
                            channel: s,
                            guild: r,
                            onSelect: O.Cp,
                          });
                      });
                    case M.d4z.GUILD_VOICE:
                    case M.d4z.GUILD_STAGE_VOICE:
                      return (0, d.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                          n.e("79695"),
                          n.e("18320"),
                          n.e("83331"),
                          n.e("81070"),
                        ]).then(n.bind(n, 213202));
                        return (t) =>
                          (0, i.jsx)(e, {
                            ...t,
                            channel: s,
                            guild: r,
                            onSelect: O.Cp,
                          });
                      });
                    case M.d4z.ANNOUNCEMENT_THREAD:
                    case M.d4z.PUBLIC_THREAD:
                    case M.d4z.PRIVATE_THREAD:
                      return (0, d.jW)(e, async () => {
                        let { default: e } = await n
                          .e("40157")
                          .then(n.bind(n, 422200));
                        return (t) =>
                          (0, i.jsx)(e, { ...t, channel: s, onSelect: O.Cp });
                      });
                    case M.d4z.GUILD_STORE:
                      return (0, d.jW)(e, async () => {
                        let { default: e } = await n
                          .e("99905")
                          .then(n.bind(n, 649400));
                        return (t) =>
                          (0, i.jsx)(e, {
                            ...t,
                            channel: s,
                            guild: r,
                            onSelect: O.Cp,
                          });
                      });
                    case M.d4z.GUILD_DIRECTORY:
                      return (0, d.jW)(e, async () => {
                        let { default: e } = await n
                          .e("70623")
                          .then(n.bind(n, 99334));
                        return (t) => (0, i.jsx)(e, { ...t, channel: s });
                      });
                  }
                  break;
                case p.h8.GROUP_DM:
                  return (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("25421"),
                    ]).then(n.bind(n, 354741));
                    return (n) =>
                      (0, i.jsx)(e, {
                        ...n,
                        channel: t.record,
                        selected: b.Z.getChannelId() === t.record.id,
                        onSelect: O.Cp,
                      });
                  });
                case p.h8.USER:
                  return (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("69220"),
                      n.e("95052"),
                    ]).then(n.bind(n, 881351));
                    return (n) =>
                      (0, i.jsx)(e, { ...n, user: t.record, onSelect: O.Cp });
                  });
              }
            }),
            v(this, "handleKeyDown", (e) => {
              let { mouseFocusDisabled: t, query: n } = this.state,
                { results: s } = this.props;
              !1 === t && this.setState({ mouseFocusDisabled: !0 });
              let i = e.key.toLowerCase(),
                { selectedIndex: r } = this.props;
              switch (i) {
                case "escape":
                  e.preventDefault(),
                    e.stopPropagation(),
                    n.length > 0 ? this.search("") : (0, O.Cp)();
                  return;
                case "k":
                  (!0 === e.ctrlKey || !0 === e.metaKey) &&
                    (e.preventDefault(), e.stopPropagation(), (0, O.Cp)());
                  return;
                case "enter": {
                  if (-1 === r) return;
                  if ((e.preventDefault(), e.altKey))
                    return this.handleContextMenu(e);
                  let t = s[r];
                  null != t && this.selectResult(t);
                  return;
                }
                case "arrowup":
                  r = (0, p.gJ)(p.a8.UP, r, s);
                  break;
                case "arrowdown":
                  r = (0, p.gJ)(p.a8.DOWN, r, s);
                  break;
                case "n":
                  if (!e.ctrlKey) return;
                  r = (0, p.gJ)(p.a8.DOWN, r, s);
                  break;
                case "p":
                  if (!e.ctrlKey) return;
                  r = (0, p.gJ)(p.a8.UP, r, s);
                  break;
                default:
                  return;
              }
              e.preventDefault(), (0, O.tF)(r);
            }),
            v(this, "renderRow", (e) => {
              let { row: t } = e,
                n = this.props.results[t],
                { selectedIndex: s } = this.props,
                { showScores: r } = _.Z.getCurrentConfig(
                  { location: "62f4be_1" },
                  { autoTrackExposure: !1 },
                );
              switch (n.type) {
                case p.h8.HEADER:
                  return (0, i.jsx)(
                    A.h4,
                    { children: n.record.text },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case p.h8.TEXT_CHANNEL:
                  return (0, i.jsx)(
                    w,
                    {
                      id: this.getRowId(t),
                      focused: s >= 0 && t === s,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      channel: n.record,
                      score: r ? n.score : void 0,
                    },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case p.h8.VOICE_CHANNEL:
                  return (0, i.jsx)(
                    k,
                    {
                      id: this.getRowId(t),
                      focused: s >= 0 && t === s,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      channel: n.record,
                      score: r ? n.score : void 0,
                    },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case p.h8.GUILD:
                  return (0, i.jsx)(
                    j,
                    {
                      id: this.getRowId(t),
                      focused: s >= 0 && t === s,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      guild: n.record,
                      score: r ? n.score : void 0,
                    },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case p.h8.USER:
                  return (0, i.jsx)(
                    V,
                    {
                      id: this.getRowId(t),
                      focused: s >= 0 && t === s,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      user: n.record,
                      comparator: n.comparator,
                      score: r ? n.score : void 0,
                    },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case p.h8.GROUP_DM:
                  return (0, i.jsx)(
                    H,
                    {
                      id: this.getRowId(t),
                      focused: s >= 0 && t === s,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      channel: n.record,
                      score: r ? n.score : void 0,
                    },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case p.h8.APPLICATION:
                  return (0, i.jsx)(
                    A.Mx,
                    {
                      id: this.getRowId(t),
                      focused: s >= 0 && t === s,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      application: n.record,
                    },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case p.h8.LINK:
                  return (0, i.jsx)(
                    A.rU,
                    {
                      focused: s >= 0 && t === s,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      link: n.record,
                      score: r ? n.score : void 0,
                      id: this.getRowId(t),
                    },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case p.h8.IN_APP_NAVIGATION:
                  return (0, i.jsx)(
                    A.s8,
                    {
                      focused: s >= 0 && t === s,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      navigationRecord: n.record,
                      score: r ? n.score : void 0,
                      id: this.getRowId(t),
                    },
                    "".concat(n.type, "-").concat(n.record.id),
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
    329557: function (e, t, n) {
      var s = n(200651);
      n(192379);
      var i = n(481060),
        r = n(570140),
        o = n(317770),
        l = n(51596),
        a = n(823385),
        c = n(900085);
      let u = "QUICK_SWITCHER_MODAL_KEY";
      class d extends o.Z {
        _initialize() {
          r.Z.subscribe("QUICKSWITCHER_SHOW", this.handleShow),
            r.Z.subscribe("QUICKSWITCHER_HIDE", this.handleHide);
        }
        _terminate() {
          r.Z.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow),
            r.Z.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide);
        }
        handleShow() {
          a.Z.isOpen() &&
            !(0, i.hasModalOpen)(u) &&
            (0, i.openModal)((e) => (0, s.jsx)(c.Z, { ...e }), {
              modalKey: u,
              instant: !0,
              onCloseCallback: l.Cp,
            });
        }
        handleHide() {
          (0, i.closeModal)(u);
        }
      }
      t.Z = new d();
    },
    670512: function (e, t, n) {
      n(47120);
      var s,
        i = n(200651),
        r = n(192379),
        o = n(120356),
        l = n.n(o),
        a = n(748780),
        c = n(846519),
        u = n(481060),
        d = n(585483),
        h = n(981631),
        E = n(388032),
        p = n(159381);
      function _(e, t, n) {
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
      let m = { friction: 15, tension: 100 };
      class C extends (s = r.PureComponent) {
        componentDidMount() {
          this.setState({ shown: !0 }),
            d.S.subscribe(
              h.CkL.QUICKSWITCHER_RESULT_FOCUS,
              this.handleResultFocus,
            );
        }
        componentWillUnmount() {
          this.focusTimeout.stop(),
            d.S.unsubscribe(
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
            a.Z.spring(this.state.translateY, {
              toValue: Math.min(e, 250),
              ...m,
            }).start();
        }
        renderArrowGroup(e) {
          return (0, i.jsxs)("div", {
            className: l()(p.arrowGroup, e),
            children: [
              (0, i.jsx)(a.Z.div, {
                className: l()(p.arrowContainer, p.horizontal),
                style: this.getStyle(),
                children: (0, i.jsx)("img", {
                  alt: "",
                  src: n(403756),
                  className: p.arrowIcon,
                }),
              }),
              (0, i.jsx)("div", {
                className: l()(p.arrowContainer, p.diag1),
                children: (0, i.jsx)("img", {
                  alt: "",
                  src: n(536404),
                  className: p.arrowIcon,
                }),
              }),
              (0, i.jsx)("div", {
                className: l()(p.arrowContainer, p.diag2),
                children: (0, i.jsx)("img", {
                  alt: "",
                  src: n(569347),
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
            className: l()(p.tutorial, { [p.shown]: t, [p.hasQuery]: e }),
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
            _(this, "state", { shown: !1, translateY: new a.Z.Value(0) }),
            _(this, "rootRef", r.createRef()),
            _(this, "focusTimeout", new c.V7()),
            _(this, "handleResultFocus", (e) => {
              let { node: t } = e;
              this.focusTimeout.start(1, () => {
                if (
                  this.props.hasQuery &&
                  null != t &&
                  null != this.rootRef.current
                ) {
                  let { top: e } = this.rootRef.current.getBoundingClientRect(),
                    { top: n } = t.getBoundingClientRect(),
                    s = Math.abs(e - n);
                  this.springTo(s - 118 + 9);
                } else this.springTo(0);
              });
            });
        }
      }
      _(C, "contextType", u.AccessibilityPreferencesContext), (t.Z = C);
    },
    241890: function (e, t, n) {
      let s, i;
      var r = n(200651);
      n(192379);
      var o = n(481060),
        l = n(570140),
        a = n(341382),
        c = n(981631);
      let u = null;
      function d(e) {
        null != s && e ? s() : null != i && i(), (s = null), (i = null);
      }
      t.Z = {
        init() {
          l.Z.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", (e) => {
            if (
              (d(!1),
              (u = e.context),
              (s = e.resolve),
              (i = e.reject),
              c.e3s === e.context)
            ) {
              let e;
              (e = !1),
                (0, o.openModalLazy)(
                  async () => {
                    let { default: t } = await n
                      .e("29393")
                      .then(n.bind(n, 134817));
                    return (n) => {
                      let { onClose: s, ...i } = n;
                      return (0, r.jsx)(t, {
                        ...i,
                        onClose: (t) => {
                          (e = t), s();
                        },
                      });
                    };
                  },
                  {
                    onCloseCallback: () => {
                      (0, a.M)(e);
                    },
                  },
                );
            }
          }),
            l.Z.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", (e) => {
              let { shouldContinue: t } = e;
              (u = null), d(t);
            }),
            l.Z.subscribe("OVERLAY_SET_INPUT_LOCKED", (e) => {
              let { locked: t } = e;
              t && null != u && ((u = null), d(!1));
            });
        },
      };
    },
  },
]);
//# sourceMappingURL=2e60631a19f1d261542b.js.map
