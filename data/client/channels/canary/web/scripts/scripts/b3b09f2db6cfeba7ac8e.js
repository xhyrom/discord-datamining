"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["747"],
  {
    14263: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var o = t(470079),
        i = t(442837),
        a = t(480608),
        l = t(243730);
      let r = {};
      function s(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          t = (0, i.e7)([l.Z], () => l.Z.getRoleMemberCount(e));
        return (
          o.useEffect(() => {
            if (null == e) return;
            let t = r[e];
            !(null != t && n > 0 && Date.now() - t < n) &&
              ((r[e] = Date.now()), a.E(e));
          }, [e, n]),
          t
        );
      }
    },
    440934: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return p;
          },
          openInteractionModal: function () {
            return f;
          },
        });
      var o = t(735250);
      t(470079);
      var i = t(481060),
        a = t(112831),
        l = t(970184),
        r = t(471073),
        s = t(293979),
        u = t(954654),
        d = t(689938),
        c = t(167990);
      function p(e) {
        let { title: n, onClose: t, transitionState: p } = e,
          {
            components: f,
            applicationIconURL: m,
            applicationName: h,
            submissionState: I,
            error: _,
            validators: g,
            onSubmit: C,
          } = (0, s.X9)(e, t);
        return (0, o.jsx)("form", {
          onSubmit: (e) => {
            e.preventDefault(), C();
          },
          children: (0, o.jsxs)(i.ModalRoot, {
            transitionState: p,
            children: [
              (0, o.jsxs)(i.ModalHeader, {
                separator: !1,
                children: [
                  (0, o.jsx)(i.Avatar, {
                    src: m,
                    size: i.AvatarSizes.SIZE_24,
                    "aria-label": h,
                    className: c.applicationIcon,
                  }),
                  (0, o.jsx)(a.Z, {
                    color: a.Z.Colors.HEADER_PRIMARY,
                    size: a.Z.Sizes.SIZE_24,
                    children: n,
                  }),
                  (0, o.jsx)(i.ModalCloseButton, {
                    onClick: t,
                    className: c.closeButton,
                  }),
                ],
              }),
              (0, o.jsxs)(i.ModalContent, {
                children: [
                  null != _ && "" !== _
                    ? (0, o.jsx)(i.HelpMessage, {
                        messageType: i.HelpMessageTypes.ERROR,
                        className: c.submissionWarning,
                        children: _,
                      })
                    : null,
                  (0, o.jsx)(i.HelpMessage, {
                    messageType: i.HelpMessageTypes.WARNING,
                    className: c.submissionWarning,
                    children:
                      d.Z.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format(
                        { applicationName: h },
                      ),
                  }),
                  (0, o.jsx)(i.FormSection, {
                    children: (0, o.jsx)(l.Il, {
                      modal: e,
                      validators: g,
                      children: (0, u.xX)(f),
                    }),
                  }),
                ],
              }),
              (0, o.jsxs)(i.ModalFooter, {
                children: [
                  (0, o.jsx)(i.Button, {
                    type: "submit",
                    color: i.Button.Colors.BRAND,
                    size: i.Button.Sizes.MEDIUM,
                    submitting: I === r.i.IN_FLIGHT,
                    children: d.Z.Messages.SUBMIT,
                  }),
                  (0, o.jsx)(i.Button, {
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.PRIMARY,
                    onClick: t,
                    children: d.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function f(e) {
        (0, i.openModal)((n) => (0, o.jsx)(p, { ...n, ...e }));
      }
    },
    254109: function (e, n, t) {
      t.d(n, {
        VO: function () {
          return d;
        },
        f0: function () {
          return c;
        },
        fS: function () {
          return u;
        },
      });
      var o = t(652874),
        i = t(731965),
        a = t(626135),
        l = t(981631);
      let r = {
          guildId: void 0,
          channelId: void 0,
          channelType: void 0,
          viewerSwipes: 0,
          thumbnailSwipes: 0,
          selectedItemChanges: 0,
          numMediaItems: 0,
        },
        s = (0, o.Z)(() => r);
      function u(e, n, t, o) {
        (0, i.j)(() =>
          s.setState({
            ...r,
            guildId: e,
            channelId: n,
            channelType: t,
            numMediaItems: o,
          }),
        );
      }
      function d() {
        let e = s.getState();
        a.default.track(l.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
          guild_id: e.guildId,
          channel_id: e.channelId,
          channel_type: e.channelType,
          number_viewer_swipes: e.viewerSwipes,
          number_thumbnail_swipes: e.thumbnailSwipes,
          number_selected_item_changes: e.selectedItemChanges,
          number_media_items: e.numMediaItems,
        }),
          (0, i.j)(() => s.setState({ ...r }));
      }
      function c() {
        (0, i.j)(() =>
          s.setState((e) => ({
            selectedItemChanges: e.selectedItemChanges + 1,
          })),
        );
      }
    },
    780088: function (e, n, t) {
      t.d(n, {
        Cx: function () {
          return b;
        },
        j0: function () {
          return g;
        },
        j9: function () {
          return C;
        },
        nP: function () {
          return _;
        },
      }),
        t(47120);
      var o = t(735250);
      t(470079);
      var i = t(374470),
        a = t(481060),
        l = t(794295),
        r = t(163268),
        s = t(768494),
        u = t(751586),
        d = t(254109),
        c = t(406432),
        p = t(52824),
        f = t(626135),
        m = t(591759),
        h = t(981631),
        I = t(500119);
      function _(e, n) {
        let { width: t, height: i } = e,
          a = (0, p.q)(e);
        return {
          component: (0, o.jsx)(u.y, {
            width: t,
            height: i,
            original: e.url,
            renderLinkComponent: (e) => (0, o.jsx)(l.Z, { ...e }),
            renderForwardComponent: n,
            src: a,
          }),
          width: t,
          height: i,
          src: a,
        };
      }
      function g(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          a = (function (e, n) {
            var t, i;
            let a =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              s =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, c.tw)(e.contentType)) return null;
            let d = null !== (t = e.width) && void 0 !== t ? t : 0,
              f = null !== (i = e.height) && void 0 !== i ? i : 0,
              m = (0, p.q)({ proxyURL: e.proxyUrl, url: e.url });
            return {
              component: (0, o.jsx)(u.y, {
                width: d,
                height: f,
                original: e.url,
                renderLinkComponent: (e) => (0, o.jsx)(l.Z, { ...e }),
                renderForwardComponent: n,
                src: m,
                shouldHideMediaOptions: a,
                obscure: (0, r.KP)({ type: r.lJ.GenericMedia, media: e }, s),
              }),
              width: d,
              height: f,
              src: m,
            };
          })(e, n, t, i);
        if (null != a) return a;
        let s = (function (e, n) {
          var t, i;
          let a =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!(0, c.X2)(e.contentType)) return null;
          let d = null !== (t = e.width) && void 0 !== t ? t : 0,
            f = null !== (i = e.height) && void 0 !== i ? i : 0,
            h = (0, p.q)({ proxyURL: e.proxyUrl, url: e.url }),
            I = m.Z.toURLSafe(e.proxyUrl);
          return null == I
            ? null
            : (I.searchParams.append("format", "webp"),
              {
                component: (0, o.jsx)(u.K, {
                  width: d,
                  height: f,
                  poster: I.toString(),
                  naturalWidth: d,
                  naturalHeight: f,
                  renderLinkComponent: (e) => (0, o.jsx)(l.Z, { ...e }),
                  renderForwardComponent: n,
                  src: h,
                  shouldHideMediaOptions: a,
                  obscure: (0, r.KP)({ type: r.lJ.GenericMedia, media: e }, s),
                }),
                width: d,
                height: f,
                src: h,
              });
        })(e, n, t, i);
        return null != s ? s : null;
      }
      function C(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return g((0, s.VY)(e), n, t, o);
      }
      function b(e, n) {
        let l = {};
        for (let [r, s] of e.entries())
          l[s.src] = (l) =>
            (function (e, n, l, r) {
              e.preventDefault(),
                (0, i.k)(e.currentTarget) && e.currentTarget.blur(),
                null != r &&
                  (f.default.track(
                    h.rMx.OPEN_MODAL,
                    { type: h.jXE.MEDIA_VIEWER, ...r },
                    { throttlePercent: 0.01 },
                  ),
                  (0, d.fS)(
                    r.guild_id,
                    r.channel_id,
                    r.channel_type,
                    n.length,
                  )),
                (0, a.openModalLazy)(
                  async () => {
                    let { default: e } = await t
                      .e("99857")
                      .then(t.bind(t, 895023));
                    return (t) => {
                      let { ...i } = t;
                      return (0, o.jsx)(e, {
                        ...i,
                        onIndexChange: null != r ? d.f0 : void 0,
                        className: I.zoomedCarouselModalRoot,
                        items: n,
                        modalCarouselClassName: I.modalCarouselWrapper,
                        startingIndex: l,
                      });
                    };
                  },
                  { onCloseCallback: null != r ? d.VO : void 0 },
                );
            })(l, e, r, n);
        return l;
      }
    },
    724870: function (e, n, t) {
      t.d(n, {
        h: function () {
          return f;
        },
        m: function () {
          return h;
        },
      }),
        t(789020);
      var o = t(735250);
      t(470079);
      var i = t(512722),
        a = t.n(i),
        l = t(481060),
        r = t(496929),
        s = t(171246),
        u = t(509545),
        d = t(55563),
        c = t(987209),
        p = t(981631);
      function f(e) {
        let {
          initialPlanId: n,
          activeSubscription: i,
          analyticsObject: a,
          analyticsLocation: r,
          analyticsLocations: s,
          analyticsSubscriptionType: u,
          renderHeader: d,
          planGroup: f,
          skuId: m,
          guildId: h,
          reviewWarningMessage: I,
          applicationId: _,
          showBenefitsFirst: g,
          eligibleApplicationSubscriptionGuilds: C,
          onComplete: b,
          forcesTransitionToGuild: v,
        } = e;
        (0, l.openModalLazy)(
          async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(
                t.bind(t, 598),
              ),
              l = (
                await Promise.all([
                  t.e("52249"),
                  t.e("47006"),
                  t.e("32776"),
                  t.e("66517"),
                ]).then(t.bind(t, 405083))
              ).default,
              { getApplicationPaymentSteps: p } = await Promise.all([
                t.e("96427"),
                t.e("77298"),
                t.e("23357"),
                t.e("54803"),
                t.e("15685"),
                t.e("18209"),
                t.e("30671"),
                t.e("86751"),
              ]).then(t.bind(t, 759386)),
              S = p({
                guildId: h,
                showBenefitsFirst: g,
                eligibleApplicationSubscriptionGuilds: C,
              });
            return (t) =>
              (0, o.jsx)(e, {
                applicationId: _,
                activeSubscription: i,
                stepConfigs: S,
                skuIDs: [m],
                children: (0, o.jsx)(c.KB, {
                  children: (0, o.jsx)(l, {
                    ...t,
                    initialPlanId: n,
                    skuId: m,
                    analyticsLocations: s,
                    analyticsObject: a,
                    analyticsLocation: r,
                    analyticsSubscriptionType: u,
                    renderHeader: d,
                    planGroup: f,
                    reviewWarningMessage: I,
                    applicationId: _,
                    guildId: null != h ? h : void 0,
                    onComplete: b,
                    forcesTransitionToGuild: v,
                  }),
                }),
              });
          },
          { onCloseRequest: p.dG4 },
        );
      }
      let m = async (e, n) => {
        let t = (await (0, r.yD)(e))
          .filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date())
          .find((e) => e.sku_id === n);
        a()(null == t, "User already has an active subscription to this SKU");
      };
      async function h(e) {
        var n;
        let {
            applicationId: t,
            skuId: o,
            initialPlanId: i,
            analyticsLocationObject: l,
            analyticsLocations: r,
            renderHeader: c,
          } = e,
          h = d.Z.get(o),
          I = u.Z.getForSKU(o);
        a()(null != h, "Failed to find SKU");
        let _ = (0, s.KW)(h.flags);
        a()(_, "Guild application subscriptions unsupported!"),
          await m(t, o),
          f({
            initialPlanId:
              null != i
                ? i
                : null === (n = I[0]) || void 0 === n
                  ? void 0
                  : n.id,
            activeSubscription: null,
            analyticsLocations: r,
            analyticsLocationObject: l,
            analyticsSubscriptionType: p.NYc.APPLICATION,
            renderHeader: c,
            planGroup: [],
            skuId: o,
            guildId: null,
            eligibleApplicationSubscriptionGuilds: [],
            showBenefitsFirst: !1,
            applicationId: t,
          });
      }
    },
    714441: function (e, n, t) {
      t.d(n, {
        i: function () {
          return a;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(481060);
      function a(e) {
        let { applicationName: n, onConfirm: a, onCancel: l } = e;
        return (0, i.openModalLazy)(
          async () => {
            let { ConfirmNoSharedServerSubscribeWarningModal: e } = await t
              .e("99809")
              .then(t.bind(t, 525549));
            return (t) =>
              (0, o.jsx)(e, {
                ...t,
                applicationName: n,
                onConfirm: a,
                onCancel: l,
              });
          },
          { modalKey: "application-user-subscribe-no-shared-server-warning" },
        );
      }
    },
    696906: function (e, n, t) {
      t(789020);
      var o = t(735250),
        i = t(470079),
        a = t(512722),
        l = t.n(a),
        r = t(442837),
        s = t(570140),
        u = t(821849),
        d = t(906732),
        c = t(887706),
        p = t(728345),
        f = t(724870),
        m = t(594174),
        h = t(509545),
        I = t(55563),
        _ = t(551428),
        g = t(630388),
        C = t(270144),
        b = t(171246),
        v = t(689011),
        S = t(714441),
        y = t(981631),
        M = t(689938);
      n.Z = (e) => {
        var n;
        let t,
          {
            guildId: a,
            groupListingId: x,
            analyticsLocation: w,
            showBenefitsFirst: N,
            skuId: j,
            onComplete: A,
            forcesTransitionToGuild: L,
          } = e,
          Z = (0, r.e7)([I.Z], () => (null != j ? I.Z.get(j) : void 0), [j]),
          T = (0, r.e7)([_.Z], () => (null != j ? _.Z.getForSKU(j) : void 0), [
            j,
          ]),
          P = (0, r.Wu)([h.Z], () => (null != j ? h.Z.getForSKU(j) : []), [j]),
          R = null != P ? P[0] : void 0,
          B = null == Z ? void 0 : Z.applicationId,
          k =
            (null == T ? void 0 : T.published) === !0 &&
            null != Z &&
            (0, g.yE)(Z.flags, y.l4R.AVAILABLE),
          E = null == R ? void 0 : R.skuId,
          { data: O } = (0, p.I)(B),
          U = (0, C._k)(x, { includeSoftDeleted: !0 }).map(
            (e) => e.subscription_plans[0].id,
          ),
          { analyticsLocations: D } = (0, d.ZP)(),
          { activeSubscription: W, activeEntitlement: F } = (0, C.F5)(B, a),
          G = (0, C.CR)(B, a),
          K = (0, c.Z)(),
          H = null != Z && (0, b.KW)(Z.flags),
          z =
            null != F &&
            F.userId ===
              (null === (n = m.default.getCurrentUser()) || void 0 === n
                ? void 0
                : n.id),
          V = null == F || z,
          Y = null == F || U.length > 1,
          q = null != a || G.length > 0,
          X = H && z,
          J = null != R && null != O && V && Y && (q || H) && !X;
        return (
          V
            ? q
              ? X &&
                null != R &&
                (t =
                  M.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format(
                    { tierName: R.name },
                  ))
              : (t = M.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE)
            : (t =
                M.Z.Messages
                  .APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION),
          i.useEffect(() => {
            k &&
              null != E &&
              K &&
              !(h.Z.isFetchingForSKU(E) || h.Z.isLoadedForSKU(E)) &&
              s.Z.wait(() => {
                (0, u.GZ)(E);
              });
          }, [k, E, K]),
          {
            openModal: i.useCallback(() => {
              l()(null != O, "No application"),
                l()(null != R, "No subscription plan"),
                l()(k, "Cannot purchase this unpublished plan");
              let e = () => {
                (0, f.h)({
                  activeSubscription: W,
                  analyticsSubscriptionType: y.NYc.APPLICATION,
                  analyticsLocations: D,
                  analyticsLocation: w,
                  renderHeader: (e, n, t) =>
                    (0, o.jsx)(v.t, { step: t, onClose: () => n(!1) }),
                  initialPlanId: R.id,
                  skuId: R.skuId,
                  guildId: a,
                  eligibleApplicationSubscriptionGuilds: G,
                  planGroup: U,
                  applicationId: O.id,
                  showBenefitsFirst: N,
                  onComplete: A,
                  forcesTransitionToGuild: L,
                });
              };
              !q && H
                ? (0, S.i)({
                    applicationName: O.name,
                    onConfirm: e,
                    onCancel: () => {},
                  })
                : e();
            }, [k, R, U, O, a, q, H, D, w, W, N, G, A, L]),
            canOpenModal: J,
            cannotOpenReason: t,
          }
        );
      };
    },
    834033: function (e, n, t) {
      e.exports = { title: "title_d9a510" };
    },
    458857: function (e, n, t) {
      e.exports = {
        hoverButtonGroup: "hoverButtonGroup_d0395d",
        forceShowHover: "forceShowHover_d0395d",
        hoverButton: "hoverButton_d0395d",
        selected: "selected_d0395d",
        nonMediaMosaicItem: "nonMediaMosaicItem_d0395d",
      };
    },
    167990: function (e, n, t) {
      e.exports = {
        closeButton: "closeButton_e6af31",
        applicationIcon: "applicationIcon_e6af31",
        submissionWarning: "submissionWarning_e6af31",
      };
    },
    882441: function (e, n, t) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    500119: function (e, n, t) {
      e.exports = {
        modalCarouselWrapper: "modalCarouselWrapper_f74404",
        zoomedCarouselModalRoot: "zoomedCarouselModalRoot_f74404",
      };
    },
    527926: function (e, n, t) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    853265: function (e, n, t) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    132805: function (e, n, t) {
      e.exports = {
        body: "body_bf926b",
        sliderBody: "sliderBody_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
      };
    },
    640360: function (e, n, t) {
      e.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    859993: function (e, n, t) {
      e.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    108204: function (e, n, t) {
      e.exports = {
        headerContainer: "headerContainer_fe5d81",
        closeContainer: "closeContainer_fe5d81",
        closeIcon: "closeIcon_fe5d81",
        headerImageContainer: "headerImageContainer_fe5d81",
        headerImage: "headerImage_fe5d81",
        confirmationContainer: "confirmationContainer_fe5d81",
        purchaseConfirmation:
          "purchaseConfirmation_fe5d81 confirmationContainer_fe5d81",
        confirmationTitle: "confirmationTitle_fe5d81",
        confirmationSubtitle: "confirmationSubtitle_fe5d81",
      };
    },
    164892: function (e, n, t) {
      e.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
      };
    },
  },
]);
//# sourceMappingURL=b3b09f2db6cfeba7ac8e.js.map
