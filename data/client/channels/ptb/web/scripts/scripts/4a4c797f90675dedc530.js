"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92446"],
  {
    620567: function (e) {
      e.exports = "/assets/eedb639c243ceed98ec6.png";
    },
    551425: function (e, t, s) {
      var i = s(200651);
      s(192379);
      var l = s(979554),
        n = s(442837),
        a = s(481060),
        r = s(1585),
        o = s(125988),
        d = s(876917),
        u = s(594174),
        c = s(597688),
        h = s(464029);
      let p = a.AvatarSizes.SIZE_152,
        f = (0, r.y9)(p),
        m = (e) => {
          let { item: t } = e,
            s = (0, n.e7)([u.default], () => u.default.getCurrentUser()),
            {
              avatarDecorationSrc: l,
              avatarPlaceholderSrc: r,
              eventHandlers: d,
            } = (0, o.Z)({ user: s, avatarDecorationOverride: t, size: f });
          return (0, i.jsx)("div", {
            className: h.avatarDecorationPreview,
            children: (0, i.jsx)(a.Avatar, {
              ...d,
              "aria-label": t.label,
              src: r,
              avatarDecoration: l,
              size: p,
            }),
          });
        },
        g = (e) => {
          let { item: t } = e;
          return (0, i.jsx)("div", {
            className: h.profileEffectPreview,
            children: (0, i.jsx)(d.Z, {
              isHovering: !0,
              profileEffectId: null == t ? void 0 : t.id,
            }),
          });
        };
      t.Z = (e) => {
        let { giftCode: t } = e,
          s = (0, n.e7)([c.Z], () => c.Z.getProduct(t.skuId)),
          a = null == s ? void 0 : s.items[0];
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (null == a ? void 0 : a.type) === l.Z.AVATAR_DECORATION &&
              (0, i.jsx)(m, { item: a }),
            (null == a ? void 0 : a.type) === l.Z.PROFILE_EFFECT &&
              (0, i.jsx)(g, { item: a }),
          ],
        });
      };
    },
    832149: function (e, t, s) {
      var i = s(200651);
      s(192379);
      var l = s(481060);
      t.Z = (e) => {
        let { product: t, analyticsLocations: n } = e;
        (0, l.openModalLazy)(async () => {
          let { default: e } = await Promise.all([
            s.e("87624"),
            s.e("74665"),
          ]).then(s.bind(s, 331042));
          return (s) =>
            (0, i.jsx)(e, { product: t, analyticsLocations: n, ...s });
        });
      };
    },
    409858: function (e, t, s) {
      s.r(t), s(47120), s(411104);
      var i = s(200651),
        l = s(192379),
        n = s(120356),
        a = s.n(n),
        r = s(979554),
        o = s(442837),
        d = s(780384),
        u = s(481060),
        c = s(533307),
        h = s(410030),
        p = s(607070),
        f = s(100527),
        m = s(906732),
        g = s(728345),
        I = s(812206),
        Z = s(884697),
        S = s(583434),
        E = s(551425),
        T = s(832149),
        R = s(745510),
        C = s(313201),
        _ = s(925329),
        v = s(703656),
        x = s(763296),
        A = s(82142),
        N = s(283595),
        O = s(594174),
        y = s(509545),
        j = s(55563),
        b = s(626135),
        M = s(176354),
        P = s(669079),
        L = s(296848),
        F = s(51144),
        G = s(902653),
        w = s(479446),
        D = s(715627),
        k = s(981632),
        U = s(474936),
        H = s(981631),
        B = s(689938),
        z = s(670629),
        V = s(167969),
        Y = s(557256);
      function Q(e, t, s) {
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
      let W = (e) => {
          let { openedGift: t } = e,
            { createMultipleConfettiAt: s } = l.useContext(R.h);
          return (
            l.useEffect(() => {
              t && s(window.innerWidth / 2, window.innerHeight / 4);
            }, [s, t]),
            null
          );
        },
        $ = (e) => {
          let { step: t, soundId: s } = e;
          return (
            l.useEffect(() => {
              var e;
              if (t !== H.wZ8.CONFIRM) return;
              let i = x.Z.getSoundById(s);
              (0, G.playGiftSound)(
                s,
                null !== (e = null == i ? void 0 : i.volume) && void 0 !== e
                  ? e
                  : 1,
              );
            }, [t, s]),
            null
          );
        };
      class q extends l.Component {
        componentDidMount() {
          let {
            application: e,
            sku: t,
            customGiftMessage: s,
            giftCode: i,
            emojiName: l,
          } = this.props;
          null == e && null != t && g.ZP.fetchApplication(t.applicationId);
          let n = null != s || null != i.giftStyle,
            a = (0, Z.mO)(i),
            r = null != l ? M.ZP.getURL(l) : void 0;
          this.setState({
            isCustomGift: n,
            isCollectiblesGift: a,
            emojiURL: r,
            opened: a,
          }),
            this.trackStepAnalytics();
        }
        get step() {
          let { libraryApplication: e, accepting: t, giftCode: s } = this.props,
            { error: i, accepted: l, opened: n, isCustomGift: a } = this.state;
          return (0, P.TO)(e, s, i, l, t, n, a);
        }
        get buttonText() {
          return (0, P.L2)(
            this.step,
            this.props.giftCode,
            this.state.isCustomGift,
          );
        }
        get firstHeaderText() {
          let { isCustomGift: e, opened: t, accepted: s } = this.state,
            {
              giftCode: i,
              subscriptionPlan: l,
              collectiblesItemType: n,
            } = this.props;
          if (e && this.step === H.wZ8.ERROR)
            return B.Z.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
          if (e && !s) {
            if (!t)
              return B.Z.Messages.GIFT_RECIPIENT_INFO.format({
                recipientDisplayName: F.ZP.getName(O.default.getCurrentUser()),
              });
            {
              let e = O.default.getUser(i.userId),
                t = F.ZP.getName(e);
              return n === r.Z.AVATAR_DECORATION
                ? B.Z.Messages.COLLECTIBLES_SENDER_GIFTED_YOU_DECORATION.format(
                    { sender: t },
                  )
                : n === r.Z.PROFILE_EFFECT
                  ? B.Z.Messages.COLLECTIBLES_SENDER_GIFTED_YOU_EFFECT.format({
                      sender: t,
                    })
                  : B.Z.Messages.GIFT_SUBSCRIPTION_INFO.format({
                      sender: t,
                      timeInterval:
                        (null == l ? void 0 : l.interval) === U.rV.MONTH
                          ? B.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                          : B.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR,
                    });
            }
          }
          return null == this.props.sku
            ? null
            : (0, P.dQ)(this.step, this.props.giftCode, this.props.sku);
        }
        get secondHeaderText() {
          if (
            !this.state.isCustomGift ||
            this.state.opened ||
            this.state.accepted
          )
            return null;
          let e = O.default.getUser(this.props.giftCode.userId);
          return B.Z.Messages.GIFT_SENDER_INFO.format({
            sender: F.ZP.getName(e),
          });
        }
        get bodyText() {
          let {
            sku: e,
            accepting: t,
            libraryApplication: s,
            subscriptionPlan: i,
          } = this.props;
          if (null == e) return null;
          let {
            error: l,
            accepted: n,
            isCustomGift: a,
            opened: r,
          } = this.state;
          return !r && a
            ? null
            : (0, P.iM)({
                step: this.step,
                sku: e,
                libraryApplication: s,
                error: l,
                accepted: n,
                accepting: t,
                onGoToLibrary: this.handleGoToLibrary,
                subscriptionPlan: i,
              });
        }
        get errorMessage() {
          let { libraryApplication: e, accepting: t } = this.props,
            { error: s, accepted: i } = this.state;
          return (0, P.e$)(e, s, i, t, this.handleGoToLibrary);
        }
        get handleClick() {
          let { giftCode: e, onClose: t } = this.props;
          switch (this.step) {
            case H.wZ8.ERROR:
              return t;
            case H.wZ8.SUCCESS:
              if (__OVERLAY__ || null != e.subscriptionPlanId) return t;
              return this.handleGoToLibrary;
            case H.wZ8.OPEN:
              return this.handleOpen;
            case H.wZ8.CONFIRM:
            default:
              return this.handleAccept;
          }
        }
        trackStepAnalytics() {
          let {
              giftCode: e,
              customGiftMessage: t,
              emojiName: s,
              soundId: i,
            } = this.props,
            { isCustomGift: l } = this.state;
          b.default.track(H.rMx.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            has_custom_message: l,
            is_custom_message_edited:
              l && t !== B.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE,
            gift_style: e.giftStyle,
            gift_code: e.code,
            emoji_name: s,
            sound_id: i,
          });
        }
        render() {
          let {
              application: e,
              accepting: t,
              onClose: s,
              giftCode: l,
              headerId: n,
              transitionState: r,
              useReducedMotion: o,
              onComplete: d,
              customGiftMessage: c,
              emojiName: h,
              soundId: p,
              isThemeDark: f,
            } = this.props,
            m = O.default.getUser(l.userId),
            {
              isCustomGift: g,
              isCollectiblesGift: I,
              accepted: Z,
              opened: S,
              emojiURL: T,
            } = this.state,
            R = O.default.getCurrentUser(),
            C = this.step === H.wZ8.ERROR,
            v =
              (null == l ? void 0 : l.userId) != null &&
              null != R &&
              (null == R ? void 0 : R.id) != null &&
              l.userId === R.id;
          switch (this.step) {
            case H.wZ8.ERROR:
              null == d || d(l, !1);
              break;
            case H.wZ8.SUCCESS:
              null == d || d(l, !0);
          }
          return (0, i.jsxs)("div", {
            ref: this.modalRef,
            children: [
              (0, i.jsxs)(u.ModalRoot, {
                transitionState: r,
                size: u.ModalSize.SMALL,
                className: z.modal,
                "aria-labelledby": n,
                children: [
                  null != l.giftStyle &&
                    !g &&
                    !I &&
                    (0, i.jsx)(k.Z, {
                      defaultAnimationState: this.getDefaultAnimationStatus(),
                      idleAnimationState: this.getIdleAnimationStatus(),
                      giftStyle: l.giftStyle,
                      className: z.seasonalGiftIcon,
                    }),
                  (0, i.jsx)("div", { className: g ? void 0 : z.backSplash }),
                  (0, i.jsxs)(u.ModalContent, {
                    className: a()({
                      [z.content]: !g,
                      [z.contentCustomGift]: g,
                    }),
                    children: [
                      !I &&
                        (0, i.jsx)(u.ModalCloseButton, {
                          onClick: s,
                          className: z.closeButton,
                        }),
                      !I &&
                        (null == l.giftStyle || (g && Z)) &&
                        (0, i.jsx)(_.Z, {
                          size: _.Z.Sizes.LARGE,
                          game: e,
                          skuId: l.skuId,
                        }),
                      C && (0, i.jsx)("img", { alt: "", src: f ? V : Y }),
                      (0, i.jsxs)(u.Heading, {
                        id: n,
                        className: a()({
                          [z.customGiftHeader]: g && !Z,
                          [z.header]: !g || Z,
                        }),
                        variant: "heading-sm/semibold",
                        children: [
                          (0, i.jsx)("div", {
                            className: a()({ [z.customGiftHeaderText]: g }),
                            children: this.firstHeaderText,
                          }),
                          (0, i.jsx)("div", {
                            children: this.secondHeaderText,
                          }),
                        ],
                      }),
                      !(g && !Z) &&
                        (0, i.jsx)(u.Text, {
                          className: z.body,
                          variant: "text-sm/normal",
                          children: this.bodyText,
                        }),
                      g &&
                        !I &&
                        null != l.giftStyle &&
                        !Z &&
                        (0, i.jsx)(k.Z, {
                          defaultAnimationState:
                            this.getDefaultAnimationStatus(),
                          idleAnimationState: this.getIdleAnimationStatus(),
                          className: z.giftAnimation,
                          giftStyle: l.giftStyle,
                        }),
                      this.state.opened &&
                        !C &&
                        (0, i.jsx)(E.Z, { giftCode: l }),
                      C &&
                        (0, i.jsx)(u.Text, {
                          className: z.body,
                          variant: "text-md/normal",
                          children: this.errorMessage,
                        }),
                      g &&
                        this.state.opened &&
                        !this.state.accepted &&
                        !C &&
                        null != c &&
                        "" !== c &&
                        !v &&
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(u.FormTitle, {
                              children: B.Z.Messages.GIFT_SENDER_INFO.format({
                                sender: F.ZP.getName(m),
                              }),
                            }),
                            (0, i.jsx)(u.Heading, {
                              id: n,
                              className: z.customMessage,
                              variant: "heading-sm/bold",
                              children: c,
                            }),
                          ],
                        }),
                      (0, i.jsx)(u.Button, {
                        submitting: t,
                        onClick: () => {
                          this.trackStepAnalytics(), this.handleClick();
                        },
                        children: this.buttonText,
                      }),
                    ],
                  }),
                ],
              }),
              null != l.giftStyle &&
                !o &&
                this.step !== H.wZ8.ERROR &&
                (0, i.jsx)(i.Fragment, {
                  children:
                    !Z &&
                    !t &&
                    S &&
                    (null == h || null == T
                      ? (0, i.jsx)(W, { openedGift: S && !Z && !t })
                      : (0, i.jsx)(D.Z, {
                          confettiTarget: this.modalRef.current,
                          emojiURL: T,
                        })),
                }),
              !Z &&
                !t &&
                S &&
                null != p &&
                (0, i.jsx)($, { soundId: p, step: this.step }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            Q(this, "state", {
              error: null,
              accepted: !1,
              opened: !1,
              isCustomGift: !1,
              isCollectiblesGift: !1,
              step: void 0,
              emojiURL: void 0,
            }),
            Q(this, "modalRef", l.createRef()),
            Q(this, "handleOpen", () => {
              this.setState({ opened: !0 });
            }),
            Q(this, "handleAccept", async () => {
              let { giftCode: e, channelContext: t, onAccept: s } = this.props;
              if (null == e) throw Error("GiftCode is null at acceptance.");
              try {
                await c.Z.redeemGiftCode({
                  code: e.code,
                  options: { channelId: t },
                }),
                  this.setState({ accepted: !0 }),
                  null == s || s();
              } catch (e) {
                this.setState({ error: e });
              }
            }),
            Q(this, "handleGoToLibrary", () => {
              let { onClose: e, libraryApplication: t } = this.props;
              (0, v.uL)(H.Z5c.APPLICATION_LIBRARY, {
                state: { applicationId: null != t ? t.id : void 0 },
              }),
                e();
            }),
            Q(this, "getDefaultAnimationStatus", () => {
              if (this.step === H.wZ8.OPEN) return w.SR.IDLE;
              return w.SR.ACTION;
            }),
            Q(this, "getIdleAnimationStatus", () => {
              if (this.step !== H.wZ8.OPEN) return w.SR.LOOP;
            });
        }
      }
      let J = o.ZP.connectStores([N.Z, j.Z, I.Z, A.Z, y.Z, p.Z], (e) => {
        let { giftCode: t } = e,
          s = j.Z.get(t.skuId),
          i = null != s ? I.Z.getApplication(s.applicationId) : null,
          l = p.Z.useReducedMotion;
        return {
          sku: s,
          libraryApplication:
            null != s && (null == t ? void 0 : t.entitlementBranches) != null
              ? (0, P.z2)(t.entitlementBranches, s, N.Z)
              : null,
          application: i,
          subscriptionPlan:
            null != t.subscriptionPlanId
              ? (0, L.oE)(t.subscriptionPlanId)
              : null,
          accepting: A.Z.getIsAccepting(t.code),
          useReducedMotion: l,
        };
      })(q);
      t.default = (e) => {
        var t;
        let {
            channelContext: s,
            code: l,
            customGiftMessage: n,
            emojiName: a,
            soundId: r,
            onClose: u,
            ...c
          } = e,
          p = (0, C.Dt)(),
          g = (0, o.e7)([A.Z], () => A.Z.get(l)),
          I = (0, h.ZP)(),
          { analyticsLocations: Z } = (0, m.ZP)(f.Z.GIFT_CODE_MODAL),
          { product: E } = (0, S.T)(null == g ? void 0 : g.skuId);
        return null == g
          ? null
          : (0, i.jsx)(J, {
              ...c,
              customGiftMessage: n,
              channelContext: s,
              giftCode: g,
              headerId: p,
              emojiName: a,
              soundId: r,
              analyticsLocations: Z,
              isThemeDark: (0, d.wj)(I),
              onClose: u,
              collectiblesItemType:
                null == E
                  ? void 0
                  : null === (t = E.items[0]) || void 0 === t
                    ? void 0
                    : t.type,
              onAccept:
                null != E
                  ? () => {
                      u(), (0, T.Z)({ product: E, analyticsLocations: Z });
                    }
                  : void 0,
            });
      };
    },
  },
]);
//# sourceMappingURL=4a4c797f90675dedc530.js.map
