"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88806"],
  {
    809086: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
        e: function () {
          return i;
        },
      });
      var r = t(735250);
      t(470079);
      var o = t(468194),
        u = t(477690),
        a = t(166081),
        c = t(841762);
      let l = (0, o.Mg)(u.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
      function s(e) {
        let { listing: n, imageSize: t, alt: o, ...u } = e,
          c = (0, a.U)(n, t);
        return (0, r.jsx)("img", { src: c, alt: o, ...u });
      }
      function i(e) {
        let { listing: n, aspectRatio: t = 16 / 9, height: o, ...u } = e,
          s = (o - 2 * l) * t,
          i = (0, a.U)(n, s),
          d = (0, a.U)(n, s, { shouldAnimate: !1 });
        return (0, r.jsx)(c.Z, {
          src: i,
          backgroundSrc: d,
          aspectRatio: t,
          ...u,
        });
      }
    },
    443650: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var r = t(735250);
      t(470079);
      var o = t(120356),
        u = t.n(o),
        a = t(481060),
        c = t(809086),
        l = t(16990);
      function s(e) {
        let { className: n, onClose: t } = e;
        return (0, r.jsx)(a.Clickable, {
          className: u()(l.closeButtonContainer, n),
          onClick: t,
          children: (0, r.jsx)(a.XSmallIcon, {
            size: "xs",
            color: "currentColor",
            className: l.closeButtonIcon,
          }),
        });
      }
      function i(e) {
        let { guildProductListing: n, onClose: t, className: o } = e;
        return (0, r.jsxs)(a.ModalHeader, {
          className: u()(l.header, o),
          separator: !1,
          children: [
            (0, r.jsx)(c.Z, {
              className: l.headerImage,
              listing: n,
              imageSize: 500,
              alt: "",
            }),
            (0, r.jsx)(s, { className: l.closeButton, onClose: t }),
          ],
        });
      }
    },
    390917: function (e, n, t) {
      t.d(n, {
        u: function () {
          return u;
        },
      });
      var r = t(735250);
      t(470079);
      var o = t(481060);
      function u(e) {
        (0, o.openModalLazy)(async () => {
          let { default: n } = await t.e("16359").then(t.bind(t, 588091));
          return (t) => (0, r.jsx)(n, { ...e, ...t });
        });
      }
    },
    806984: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var r = t(470079),
        o = t(512722),
        u = t.n(o),
        a = t(598),
        c = t(390917),
        l = t(464797);
      function s(e) {
        let { handleClose: n } = e,
          { guildProductListing: t, guildId: o } = (0, l._)(),
          { selectedSkuPricePreview: s } = (0, a.usePaymentContext)();
        return (
          r.useEffect(() => {
            u()(null != s, "selectedSkuPricePreview cannot be null"),
              (0, c.u)({
                guildId: o,
                guildProductListingId: t.id,
                skuPricePreview: s,
              }),
              n();
          }, []),
          null
        );
      }
    },
    464797: function (e, n, t) {
      t.d(n, {
        R: function () {
          return d;
        },
        _: function () {
          return i;
        },
      });
      var r = t(735250),
        o = t(470079),
        u = t(512722),
        a = t.n(u),
        c = t(442837),
        l = t(240864);
      let s = o.createContext(void 0);
      function i() {
        let e = o.useContext(s);
        return a()(null != e, "GuildProductPurchaseContext not found"), e;
      }
      function d(e) {
        let { children: n, guildProductListingId: t, ...o } = e,
          u = (0, c.e7)([l.Z], () => l.Z.getGuildProduct(t));
        return (
          a()(null != u, "guildProductListing cannot be null"),
          (0, r.jsx)(s.Provider, {
            value: { guildProductListing: u, ...o },
            children: n,
          })
        );
      }
    },
    946211: function (e, n, t) {
      t.d(n, {
        L: function () {
          return s;
        },
      });
      var r = t(735250);
      t(470079);
      var o = t(409813),
        u = t(443650),
        a = t(464797),
        c = t(170038);
      function l(e) {
        let { onClose: n } = e,
          { guildProductListing: t } = (0, a._)();
        return (0, r.jsx)(u.Z, {
          guildProductListing: t,
          className: c.header,
          onClose: n,
        });
      }
      let s = (e, n, t) =>
        t === o.h8.CONFIRM ? null : (0, r.jsx)(l, { onClose: () => n(!1) });
    },
    578780: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return v;
          },
        });
      var r = t(735250);
      t(470079);
      var o = t(100527),
        u = t(906732),
        a = t(987209),
        c = t(598),
        l = t(409813),
        s = t(791785),
        i = t(276442),
        d = t(793541),
        h = t(380898),
        f = t(710094),
        x = t(865921),
        p = t(853872),
        I = t(806984),
        _ = t(464797),
        C = t(946211),
        P = t(231338);
      let j = [
        { key: null, renderStep: (e) => (0, r.jsx)(x.v, { ...e }) },
        {
          key: l.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, r.jsx)(i.J, {
              ...e,
              onReturn: () => {
                0 === Object.keys(p.Z.paymentSources).length
                  ? e.handleClose()
                  : e.handleStepChange(l.h8.REVIEW, {
                      trackedFromStep: l.h8.ADD_PAYMENT_STEPS,
                    });
              },
            }),
        },
        {
          key: l.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, r.jsx)(h.Z, {}),
        },
        {
          key: l.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, r.jsx)(d.Z, {}),
        },
        { key: l.h8.REVIEW, renderStep: (e) => (0, r.jsx)(f.l, { ...e }) },
        { key: l.h8.CONFIRM, renderStep: (e) => (0, r.jsx)(I.Z, { ...e }) },
      ];
      function v(e) {
        let {
            guildProductContext: n,
            sourceAnalyticsLocations: t,
            applicationId: l,
            ...i
          } = e,
          { analyticsLocations: d } = (0, u.ZP)(
            t,
            o.Z.GUILD_PRODUCT_PAYMENT_MODAL,
          );
        return (0, r.jsx)(_.R, {
          ...n,
          children: (0, r.jsx)(u.Gt, {
            value: d,
            children: (0, r.jsx)(c.PaymentContextProvider, {
              stepConfigs: j,
              applicationId: l,
              skuIDs: [i.skuId],
              activeSubscription: null,
              purchaseType: P.GZ.ONE_TIME,
              children: (0, r.jsx)(a.KB, {
                children: (0, r.jsx)(s.PaymentModal, {
                  initialPlanId: null,
                  analyticsLocations: d,
                  renderHeader: C.L,
                  ...i,
                }),
              }),
            }),
          }),
        });
      }
    },
    16990: function (e, n, t) {
      e.exports = {
        headerImage: "headerImage_bc97aa",
        header: "header_bc97aa",
        closeButtonContainer: "closeButtonContainer_bc97aa",
        closeButtonIcon: "closeButtonIcon_bc97aa",
        closeButton: "closeButton_bc97aa",
      };
    },
    170038: function (e, n, t) {
      e.exports = { header: "header_b6b896" };
    },
  },
]);
//# sourceMappingURL=89d91b82f73a85eeb366.js.map
