"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5769"],
  {
    16084: function (e, t, o) {
      o.d(t, {
        $N: function () {
          return h;
        },
        ZZ: function () {
          return R;
        },
        pB: function () {
          return C;
        },
        uE: function () {
          return y;
        },
        x2: function () {
          return I;
        },
        xA: function () {
          return m;
        },
      }),
        o(411104);
      var n = o(544891),
        r = o(570140),
        i = o(881052),
        a = o(128069),
        d = o(34756),
        c = o(115130),
        l = o(55563),
        _ = o(695103),
        s = o(122289),
        u = o(823379),
        p = o(936101),
        b = o(73346),
        S = o(355467),
        E = o(981631);
      async function h(e, t) {
        if (null == l.Z.get(t)) {
          r.Z.dispatch({ type: "SKU_FETCH_START", skuId: t });
          try {
            let o =
                _.Z.inTestModeForApplication(e) ||
                c.Z.inDevModeForApplication(e),
              n = await (0, b.Kb)(
                o ? E.ANM.STORE_SKU(t) : E.ANM.STORE_PUBLISHED_LISTINGS_SKU(t),
              );
            r.Z.dispatch({
              type: "SKU_FETCH_SUCCESS",
              sku: o ? n.body : n.body.sku,
            }),
              !o &&
                r.Z.dispatch({
                  type: "STORE_LISTING_FETCH_SUCCESS",
                  storeListing: n.body,
                });
          } catch (e) {
            throw (
              (r.Z.dispatch({ type: "SKU_FETCH_FAIL", skuId: t }),
              new d.Z("Failed to fetch SKU ".concat(t)))
            );
          }
        }
      }
      async function y(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (
          !(
            _.Z.inTestModeForApplication(e) || c.Z.inDevModeForApplication(e)
          ) &&
          t
        )
          throw Error("this should only be used in test mode");
        let o = (await (0, b.Kb)(E.ANM.APPLICATION_SKUS(e))).body;
        return r.Z.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: o }), o;
      }
      async function I(e, t, o, n) {
        let d;
        let l = { payment_source_id: o, gift: null == n ? void 0 : n.isGift };
        (_.Z.inTestModeForApplication(e) || c.Z.inDevModeForApplication(e)) &&
          (l.test_mode = !0),
          r.Z.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH", skuId: t });
        try {
          (d = await (0, b.Kb)({
            url: E.ANM.STORE_SKU_PURCHASE(t),
            query: l,
            oldFormErrors: !0,
          })),
            r.Z.dispatch({
              type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
              skuId: t,
              paymentSourceId: o,
              price: d.body,
            });
        } catch (o) {
          r.Z.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
            skuId: t,
          });
          let e = o instanceof i.HF ? o : new i.HF(o);
          if (
            e.code === a.SM.BILLING_BUNDLE_ALREADY_PURCHASED ||
            e.code === a.SM.BILLING_BUNDLE_PARTIALLY_OWNED
          )
            throw e;
        }
        return d;
      }
      let f = { isGift: !1 };
      async function R(e, t, o) {
        let {
          paymentSource: d,
          expectedAmount: l,
          expectedCurrency: b,
          analyticsLoadId: h,
          isGift: y,
          giftInfoOptions: I,
          subscriptionPlanId: R,
          loadId: m,
          countryCode: C,
        } = { ...f, ...o };
        r.Z.wait(() => {
          r.Z.dispatch({
            type: "SKU_PURCHASE_START",
            applicationId: e,
            skuId: t,
          });
        });
        let A =
          _.Z.inTestModeForApplication(e) || c.Z.inDevModeForApplication(e);
        try {
          let e = {
            gift: y,
            sku_subscription_plan_id: R,
            gateway_checkout_context: await (0, s.cn)(d),
            load_id: m,
          };
          if (A) e.test_mode = !0;
          else {
            if (
              null != d &&
              ((e.payment_source_id = d.id),
              (e.payment_source_token = await (0, S.Zv)(d)),
              E.QL.has(d.type))
            ) {
              let t = await (0, S.EH)(d.type);
              e.return_url =
                (0, n.K0)() +
                E.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(
                  d.type,
                  null != t ? t : "",
                  "success",
                );
            }
            null != l && (e.expected_amount = l),
              null != b && (e.expected_currency = b),
              (e.gift_info_options = I),
              null != C && (e.country_code = C),
              (e.purchase_token = (0, p.d)());
          }
          let o = await n.tn.post({
            url: E.ANM.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: h },
            oldFormErrors: !0,
          });
          return (
            r.Z.dispatch({
              type: "SKU_PURCHASE_SUCCESS",
              skuId: t,
              libraryApplications:
                null != o.body.library_applications
                  ? o.body.library_applications.filter(u.lm)
                  : [],
              entitlements: o.body.entitlements,
              giftCode: o.body.gift_code,
            }),
            { ...o.body, redirectConfirmation: !1 }
          );
        } catch (n) {
          let o = n instanceof i.HF ? n : new i.HF(n);
          if (
            ((o.code === a.SM.CONFIRMATION_REQUIRED ||
              o.code === a.SM.AUTHENTICATION_REQUIRED) &&
              r.Z.dispatch({
                type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                skuId: t,
                isGift: y,
              }),
            o.code !== a.SM.CONFIRMATION_REQUIRED)
          )
            throw (
              (r.Z.dispatch({
                type: "SKU_PURCHASE_FAIL",
                applicationId: e,
                skuId: t,
                error: o,
              }),
              o)
            );
          if (!n.body.payment_id)
            throw (0, S.SQ)(
              "payment id cannot be null on redirected confirmations.",
            );
          return (0, S.sk)(n.body, d);
        }
      }
      async function m() {
        try {
          let e = { purchase_token: (0, p.d)() };
          return {
            ...(
              await n.tn.post({
                url: E.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                body: e,
                oldFormErrors: !0,
              })
            ).body,
          };
        } catch (e) {
          throw e instanceof i.HF ? e : new i.HF(e);
        }
      }
      function C() {
        r.Z.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
      }
    },
    312146: function (e, t, o) {
      o.d(t, {
        Ui: function () {
          return a;
        },
        p$: function () {
          return c;
        },
      });
      var n = o(818083),
        r = o(981631);
      let i = (0, n.B)({
        kind: "guild",
        id: "2023-03_guild_media_channel",
        label: "Media Channel",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enables guild to create a media channel",
            config: { enabled: !0 },
          },
        ],
      });
      function a(e) {
        var t;
        let { enabled: o } = i.useExperiment(
          {
            guildId:
              null !== (t = null == e ? void 0 : e.id) && void 0 !== t
                ? t
                : r.lds,
            location: "96e84c_1",
          },
          { autoTrackExposure: !0 },
        );
        return (null == e ? void 0 : e.id) != null && o;
      }
      let d = (0, n.B)({
        kind: "user",
        id: "2023-04_guild_media_channel_post_preview_embed_users",
        label: "Guild Role Subscription Users",
        defaultConfig: { enabledForUser: !1 },
        treatments: [
          {
            id: 1,
            label: "Enables for users Guild Media Post Preview Embeds",
            config: { enabledForUser: !0 },
          },
        ],
      });
      function c() {
        let { enabledForUser: e } = d.useExperiment(
          { location: "96e84c_2" },
          { autoTrackExposure: !0 },
        );
        return e;
      }
    },
    886974: function (e, t, o) {
      e.exports = {
        modal: "modal_b545d5 " + o("112864").scrollbarGhostHairline,
        modalContent: "modalContent_b545d5",
        modalFooter: "modalFooter_b545d5",
        name: "name_b545d5",
        type: "type_b545d5",
        channelNameNote: "channelNameNote_b545d5",
        icon: "icon_b545d5",
        error: "error_b545d5",
        header: "header_b545d5",
        title: "title_b545d5",
        subtitle: "subtitle_b545d5",
        subtitleIcon: "subtitleIcon_b545d5",
        closeButton: "closeButton_b545d5",
        sectionTitle: "sectionTitle_b545d5",
        foreground: "foreground_b545d5",
        inputWrapper: "inputWrapper_b545d5",
        inputInner: "inputInner_b545d5",
        inputPrefix: "inputPrefix_b545d5",
        switchIcon: "switchIcon_b545d5",
        storeChannelOptionSelector: "storeChannelOptionSelector_b545d5",
        channelTypeDescription: "channelTypeDescription_b545d5",
        addMembersContainer: "addMembersContainer_b545d5",
        addMemberError: "addMemberError_b545d5",
        createError: "createError_b545d5",
        radioLabelName: "radioLabelName_b545d5",
        radioLabelDescription: "radioLabelDescription_b545d5",
        newBadge: "newBadge_b545d5",
        radioBar: "radioBar_b545d5",
        radioBarLabel: "radioBarLabel_b545d5",
        radioBarIcon: "radioBarIcon_b545d5",
        radioItemName: "radioItemName_b545d5",
      };
    },
    194419: function (e, t, o) {
      e.exports = {
        modalRoot: "modalRoot_a0cc0d",
        button: "button_a0cc0d",
        header: "header_a0cc0d",
        headerSubtitle: "headerSubtitle_a0cc0d",
        alignCenter: "alignCenter_a0cc0d",
        headerSubtitleIcon: "headerSubtitleIcon_a0cc0d",
        content: "content_a0cc0d",
        searchBox: "searchBox_a0cc0d",
        roleMemberList: "roleMemberList_a0cc0d",
        addMemberRow: "addMemberRow_a0cc0d",
        selectedRow: "selectedRow_a0cc0d",
        rowBody: "rowBody_a0cc0d",
        checkboxLabel: "checkboxLabel_a0cc0d",
        rowHeight: "rowHeight_a0cc0d",
        rowLabel: "rowLabel_a0cc0d",
        rowLabelSubText: "rowLabelSubText_a0cc0d",
        sectionTitle: "sectionTitle_a0cc0d",
        noResultIcon: "noResultIcon_a0cc0d",
        description: "description_a0cc0d",
        scrollSeparator: "scrollSeparator_a0cc0d",
      };
    },
    631155: function (e, t, o) {
      e.exports = { searchBar: "searchBar_ac8310" };
    },
    456573: function (e, t, o) {
      e.exports = {
        modalRoot: "modalRoot_d3497c",
        header: "header_d3497c",
        headerSubtitle: "headerSubtitle_d3497c",
        headerSubtitleIcon: "headerSubtitleIcon_d3497c",
        error: "error_d3497c",
      };
    },
  },
]);
//# sourceMappingURL=9377a1fe32d13ffdf733.js.map
