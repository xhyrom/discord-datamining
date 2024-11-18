"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74287"],
  {
    16084: function (e, t, o) {
      o.d(t, {
        $N: function () {
          return R;
        },
        ZZ: function () {
          return A;
        },
        df: function () {
          return f;
        },
        pB: function () {
          return m;
        },
        uE: function () {
          return y;
        },
        x2: function () {
          return C;
        },
        xA: function () {
          return U;
        },
      }),
        o(411104);
      var n = o(311570),
        r = o(544891),
        i = o(570140),
        a = o(881052),
        d = o(128069),
        c = o(34756),
        l = o(115130),
        _ = o(55563),
        s = o(695103),
        u = o(122289),
        p = o(823379),
        b = o(936101),
        E = o(73346),
        S = o(355467),
        h = o(981631);
      async function R(e, t, o) {
        if (null == _.Z.get(t)) {
          i.Z.dispatch({ type: "SKU_FETCH_START", skuId: t });
          try {
            let r =
                s.Z.inTestModeForApplication(e) ||
                l.Z.inDevModeForApplication(e),
              a = {
                url: r
                  ? h.ANM.STORE_SKU(t)
                  : h.ANM.STORE_PUBLISHED_LISTINGS_SKU(t),
              };
            o === n.v.VARIANTS_GROUP &&
              (a.query = { variants_return_style: o });
            let d = await (0, E.Kb)(a);
            i.Z.dispatch({
              type: "SKU_FETCH_SUCCESS",
              sku: r ? d.body : d.body.sku,
            }),
              !r &&
                i.Z.dispatch({
                  type: "STORE_LISTING_FETCH_SUCCESS",
                  storeListing: d.body,
                });
          } catch (e) {
            throw (
              (i.Z.dispatch({ type: "SKU_FETCH_FAIL", skuId: t }),
              new c.Z("Failed to fetch SKU ".concat(t)))
            );
          }
        }
      }
      async function y(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (
          !(
            s.Z.inTestModeForApplication(e) || l.Z.inDevModeForApplication(e)
          ) &&
          t
        )
          throw Error("this should only be used in test mode");
        let o = (await (0, E.Kb)(h.ANM.APPLICATION_SKUS(e))).body;
        return i.Z.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: o }), o;
      }
      async function C(e, t, o, n) {
        let r;
        let c = { payment_source_id: o, gift: null == n ? void 0 : n.isGift };
        (s.Z.inTestModeForApplication(e) || l.Z.inDevModeForApplication(e)) &&
          (c.test_mode = !0),
          i.Z.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH", skuId: t });
        try {
          (r = await (0, E.Kb)({
            url: h.ANM.STORE_SKU_PURCHASE(t),
            query: c,
            oldFormErrors: !0,
          })),
            i.Z.dispatch({
              type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
              skuId: t,
              paymentSourceId: o,
              price: r.body,
            });
        } catch (o) {
          i.Z.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
            skuId: t,
          });
          let e = o instanceof a.HF ? o : new a.HF(o);
          if (
            e.code === d.SM.BILLING_BUNDLE_ALREADY_PURCHASED ||
            e.code === d.SM.BILLING_BUNDLE_PARTIALLY_OWNED
          )
            throw e;
        }
        return r;
      }
      let I = { isGift: !1 };
      async function A(e, t, o) {
        let {
          paymentSource: n,
          expectedAmount: c,
          expectedCurrency: _,
          analyticsLoadId: E,
          isGift: R,
          giftInfoOptions: y,
          subscriptionPlanId: C,
          loadId: A,
          countryCode: f,
        } = { ...I, ...o };
        i.Z.wait(() => {
          i.Z.dispatch({
            type: "SKU_PURCHASE_START",
            applicationId: e,
            skuId: t,
          });
        });
        let U =
          s.Z.inTestModeForApplication(e) || l.Z.inDevModeForApplication(e);
        try {
          let e = {
            gift: R,
            sku_subscription_plan_id: C,
            gateway_checkout_context: await (0, u.cn)(n),
            load_id: A,
          };
          if (U) e.test_mode = !0;
          else {
            if (
              null != n &&
              ((e.payment_source_id = n.id),
              (e.payment_source_token = await (0, S.Zv)(n)),
              h.QL.has(n.type))
            ) {
              let t = await (0, S.EH)(n.type);
              e.return_url =
                (0, r.K0)() +
                h.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(
                  n.type,
                  null != t ? t : "",
                  "success",
                );
            }
            null != c && (e.expected_amount = c),
              null != _ && (e.expected_currency = _),
              (e.gift_info_options = y),
              null != f && (e.country_code = f),
              (e.purchase_token = (0, b.d)());
          }
          let o = await r.tn.post({
            url: h.ANM.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: E },
            oldFormErrors: !0,
          });
          return (
            i.Z.dispatch({
              type: "SKU_PURCHASE_SUCCESS",
              skuId: t,
              libraryApplications:
                null != o.body.library_applications
                  ? o.body.library_applications.filter(p.lm)
                  : [],
              entitlements: o.body.entitlements,
              giftCode: o.body.gift_code,
            }),
            { ...o.body, redirectConfirmation: !1 }
          );
        } catch (r) {
          let o = r instanceof a.HF ? r : new a.HF(r);
          if (
            ((o.code === d.SM.CONFIRMATION_REQUIRED ||
              o.code === d.SM.AUTHENTICATION_REQUIRED) &&
              i.Z.dispatch({
                type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                skuId: t,
                isGift: R,
              }),
            i.Z.dispatch({
              type: "SKU_PURCHASE_FAIL",
              applicationId: e,
              skuId: t,
              error: o,
            }),
            o.code !== d.SM.CONFIRMATION_REQUIRED)
          )
            throw o;
          if (!r.body.payment_id)
            throw (0, S.SQ)(
              "payment id cannot be null on redirected confirmations.",
            );
          return (0, S.sk)(r.body, n);
        }
      }
      async function f(e) {
        i.Z.wait(() => {
          i.Z.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: e });
        });
        try {
          let t = (
            await r.tn.post({ url: h.ANM.USER_REDEEM_VIRTUAL_CURRENCY(e) })
          ).body;
          return (
            i.Z.dispatch({
              type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS",
              skuId: e,
              entitlements: t,
            }),
            t
          );
        } catch (o) {
          let t = o instanceof a.HF ? o : new a.HF(o);
          i.Z.dispatch({
            type: "VIRTUAL_CURRENCY_REDEEM_FAIL",
            skuId: e,
            error: t,
          });
        }
      }
      async function U() {
        try {
          let e = { purchase_token: (0, b.d)() };
          return {
            ...(
              await r.tn.post({
                url: h.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                body: e,
                oldFormErrors: !0,
              })
            ).body,
          };
        } catch (e) {
          throw e instanceof a.HF ? e : new a.HF(e);
        }
      }
      function m() {
        i.Z.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
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
    497341: function (e, t, o) {
      e.exports = {
        modal: "modal_b545d5 " + o("110933").scrollbarGhostHairline,
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
    150470: function (e, t, o) {
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
    266763: function (e, t, o) {
      e.exports = { searchBar: "searchBar_ac8310" };
    },
    253654: function (e, t, o) {
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
//# sourceMappingURL=d04c70066c2d0cb7ab23.js.map
