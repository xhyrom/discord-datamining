"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79555"],
  {
    526232: function (e) {
      e.exports = "/assets/a30f1f73b76c0a00e345.svg";
    },
    818276: function (e) {
      e.exports = "/assets/645fa840d8b2b6da92a5.svg";
    },
    16084: function (e, t, n) {
      n.d(t, {
        $N: function () {
          return R;
        },
        ZZ: function () {
          return M;
        },
        df: function () {
          return I;
        },
        pB: function () {
          return g;
        },
        uE: function () {
          return A;
        },
        x2: function () {
          return h;
        },
        xA: function () {
          return T;
        },
      }),
        n(411104);
      var r = n(311570),
        i = n(544891),
        o = n(570140),
        a = n(881052),
        c = n(128069),
        l = n(34756),
        d = n(115130),
        _ = n(55563),
        s = n(695103),
        u = n(122289),
        E = n(823379),
        b = n(936101),
        p = n(73346),
        f = n(355467),
        S = n(981631);
      async function R(e, t, n) {
        if (null == _.Z.get(t)) {
          o.Z.dispatch({ type: "SKU_FETCH_START", skuId: t });
          try {
            let i =
                s.Z.inTestModeForApplication(e) ||
                d.Z.inDevModeForApplication(e),
              a = {
                url: i
                  ? S.ANM.STORE_SKU(t)
                  : S.ANM.STORE_PUBLISHED_LISTINGS_SKU(t),
                rejectWithError: !1,
              };
            n === r.v.VARIANTS_GROUP &&
              (a.query = { variants_return_style: n });
            let c = await (0, p.Kb)(a);
            o.Z.dispatch({
              type: "SKU_FETCH_SUCCESS",
              sku: i ? c.body : c.body.sku,
            }),
              !i &&
                o.Z.dispatch({
                  type: "STORE_LISTING_FETCH_SUCCESS",
                  storeListing: c.body,
                });
          } catch (e) {
            throw (
              (o.Z.dispatch({ type: "SKU_FETCH_FAIL", skuId: t }),
              new l.Z("Failed to fetch SKU ".concat(t)))
            );
          }
        }
      }
      async function A(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (
          !(
            s.Z.inTestModeForApplication(e) || d.Z.inDevModeForApplication(e)
          ) &&
          t
        )
          throw Error("this should only be used in test mode");
        let n = (
          await (0, p.Kb)({
            url: S.ANM.APPLICATION_SKUS(e),
            rejectWithError: !1,
          })
        ).body;
        return o.Z.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n;
      }
      async function h(e, t, n, r) {
        let i;
        let l = { payment_source_id: n, gift: null == r ? void 0 : r.isGift };
        (s.Z.inTestModeForApplication(e) || d.Z.inDevModeForApplication(e)) &&
          (l.test_mode = !0),
          o.Z.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH", skuId: t });
        try {
          (i = await (0, p.Kb)({
            url: S.ANM.STORE_SKU_PURCHASE(t),
            query: l,
            oldFormErrors: !0,
            rejectWithError: !1,
          })),
            o.Z.dispatch({
              type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
              skuId: t,
              paymentSourceId: n,
              price: i.body,
            });
        } catch (n) {
          o.Z.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
            skuId: t,
          });
          let e = n instanceof a.HF ? n : new a.HF(n);
          if (
            e.code === c.SM.BILLING_BUNDLE_ALREADY_PURCHASED ||
            e.code === c.SM.BILLING_BUNDLE_PARTIALLY_OWNED
          )
            throw e;
        }
        return i;
      }
      let C = { isGift: !1 };
      async function M(e, t, n) {
        let {
          paymentSource: r,
          expectedAmount: l,
          expectedCurrency: _,
          analyticsLoadId: p,
          isGift: R,
          giftInfoOptions: A,
          subscriptionPlanId: h,
          loadId: M,
          countryCode: I,
        } = { ...C, ...n };
        o.Z.wait(() => {
          o.Z.dispatch({
            type: "SKU_PURCHASE_START",
            applicationId: e,
            skuId: t,
          });
        });
        let T =
          s.Z.inTestModeForApplication(e) || d.Z.inDevModeForApplication(e);
        try {
          let e = {
            gift: R,
            sku_subscription_plan_id: h,
            gateway_checkout_context: await (0, u.cn)(r),
            load_id: M,
          };
          if (T) e.test_mode = !0;
          else {
            if (
              null != r &&
              ((e.payment_source_id = r.id),
              (e.payment_source_token = await (0, f.Zv)(r)),
              S.QL.has(r.type))
            ) {
              let t = await (0, f.EH)(r.type);
              e.return_url =
                (0, i.K0)() +
                S.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(
                  r.type,
                  null != t ? t : "",
                  "success",
                );
            }
            null != l && (e.expected_amount = l),
              null != _ && (e.expected_currency = _),
              (e.gift_info_options = A),
              null != I && (e.country_code = I),
              (e.purchase_token = (0, b.d)());
          }
          let n = await i.tn.post({
            url: S.ANM.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: p },
            oldFormErrors: !0,
            rejectWithError: !1,
          });
          return (
            o.Z.dispatch({
              type: "SKU_PURCHASE_SUCCESS",
              skuId: t,
              libraryApplications:
                null != n.body.library_applications
                  ? n.body.library_applications.filter(E.lm)
                  : [],
              entitlements: n.body.entitlements,
              giftCode: n.body.gift_code,
            }),
            { ...n.body, redirectConfirmation: !1 }
          );
        } catch (i) {
          let n = i instanceof a.HF ? i : new a.HF(i);
          if (
            ((n.code === c.SM.CONFIRMATION_REQUIRED ||
              n.code === c.SM.AUTHENTICATION_REQUIRED) &&
              o.Z.dispatch({
                type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                skuId: t,
                isGift: R,
              }),
            o.Z.dispatch({
              type: "SKU_PURCHASE_FAIL",
              applicationId: e,
              skuId: t,
              error: n,
            }),
            n.code !== c.SM.CONFIRMATION_REQUIRED)
          )
            throw n;
          if (!i.body.payment_id)
            throw (0, f.SQ)(
              "payment id cannot be null on redirected confirmations.",
            );
          return (0, f.sk)(i.body, r);
        }
      }
      async function I(e) {
        o.Z.wait(() => {
          o.Z.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: e });
        });
        try {
          let t = (
            await i.tn.post({
              url: S.ANM.USER_REDEEM_VIRTUAL_CURRENCY(e),
              rejectWithError: !1,
            })
          ).body;
          return (
            o.Z.dispatch({
              type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS",
              skuId: e,
              entitlements: t,
            }),
            t
          );
        } catch (n) {
          let t = n instanceof a.HF ? n : new a.HF(n);
          o.Z.dispatch({
            type: "VIRTUAL_CURRENCY_REDEEM_FAIL",
            skuId: e,
            error: t,
          });
        }
      }
      async function T() {
        try {
          let e = { purchase_token: (0, b.d)() };
          return {
            ...(
              await i.tn.post({
                url: S.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                body: e,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
            ).body,
          };
        } catch (e) {
          throw e instanceof a.HF ? e : new a.HF(e);
        }
      }
      function g() {
        o.Z.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
      }
    },
    494831: function (e, t, n) {
      n.d(t, {
        Cl: function () {
          return _;
        },
        ey: function () {
          return s;
        },
      });
      var r,
        i,
        o = n(149765),
        a = n(692547),
        c = n(700785),
        l = n(981631),
        d = n(388032);
      let _ = 371,
        s = 30;
      ((r = i || (i = {}))[(r.COSMETIC = 0)] = "COSMETIC"),
        (r[(r.MEMBER = 1)] = "MEMBER"),
        (r[(r.MODERATOR = 2)] = "MODERATOR"),
        (r[(r.MANAGER = 3)] = "MANAGER");
      let u = c.TP;
      o.Od(u, l.Plq.MENTION_EVERYONE);
      let E = o.$e(
          u,
          l.Plq.VIEW_AUDIT_LOG,
          l.Plq.MANAGE_NICKNAMES,
          l.Plq.KICK_MEMBERS,
          l.Plq.BAN_MEMBERS,
          l.Plq.MANAGE_MESSAGES,
          l.Plq.MUTE_MEMBERS,
          l.Plq.DEAFEN_MEMBERS,
          l.Plq.MOVE_MEMBERS,
          l.Plq.PRIORITY_SPEAKER,
          l.Plq.MODERATE_MEMBERS,
        ),
        b = o.$e(
          E,
          l.Plq.MANAGE_CHANNELS,
          l.Plq.MANAGE_THREADS,
          l.Plq.MANAGE_ROLES,
          l.Plq.MANAGE_GUILD_EXPRESSIONS,
          l.Plq.MANAGE_GUILD,
          l.Plq.MANAGE_WEBHOOKS,
          l.Plq.SEND_TTS_MESSAGES,
        );
      o.IH(b, l.Plq.VIEW_GUILD_ANALYTICS),
        a.Z.unsafe_rawColors.BRAND_500.css,
        c.Hn,
        a.Z.unsafe_rawColors.GREEN_360.css,
        a.Z.unsafe_rawColors.YELLOW_300.css,
        a.Z.unsafe_rawColors.RED_400.css,
        () => d.intl.string(d.t["7Dkb6+"]);
    },
    631969: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(120356),
        o = n.n(i),
        a = n(348604);
      function c(e) {
        let { className: t } = e;
        return (0, r.jsx)("div", { className: o()(a.image, t) });
      }
    },
    312146: function (e, t, n) {
      n.d(t, {
        Ui: function () {
          return a;
        },
        p$: function () {
          return l;
        },
      });
      var r = n(818083),
        i = n(981631);
      let o = (0, r.B)({
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
        let { enabled: n } = o.useExperiment(
          {
            guildId:
              null !== (t = null == e ? void 0 : e.id) && void 0 !== t
                ? t
                : i.lds,
            location: "96e84c_1",
          },
          { autoTrackExposure: !0 },
        );
        return (null == e ? void 0 : e.id) != null && n;
      }
      let c = (0, r.B)({
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
      function l() {
        let { enabledForUser: e } = c.useExperiment(
          { location: "96e84c_2" },
          { autoTrackExposure: !0 },
        );
        return e;
      }
    },
    60222: function (e, t, n) {
      n.d(t, {
        A: function () {
          return a;
        },
        m: function () {
          return c;
        },
      }),
        n(47120);
      var r = n(442837),
        i = n(430824),
        o = n(981631);
      function a(e) {
        var t;
        let [n] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [i.Z];
        return !!(null === (t = n.getGuild(e)) || void 0 === t
          ? void 0
          : t.hasFeature(o.oNc.COMMUNITY));
      }
      function c(e) {
        return (0, r.e7)([i.Z], () => a(e, [i.Z]), [e]);
      }
    },
    272786: function (e, t, n) {
      e.exports = {
        container: "container_effbe2",
        inner: "inner_effbe2",
        disabled: "disabled_effbe2",
        input: "input_effbe2",
        tag: "tag_effbe2",
        small: "small_effbe2",
        medium: "medium_effbe2",
        large: "large_effbe2",
        richTag: "richTag_effbe2",
        richTagInput: "richTagInput_effbe2",
        tagLabel: "tagLabel_effbe2",
        tagRoleColor: "tagRoleColor_effbe2",
        close: "close_effbe2",
        iconLayout: "iconLayout_effbe2",
        iconContainer: "iconContainer_effbe2",
        icon: "icon_effbe2",
        visible: "visible_effbe2",
        clear: "clear_effbe2",
      };
    },
    355069: function (e, t, n) {
      e.exports = {
        modal: "modal_b545d5 " + n("763971").scrollbarGhostHairline,
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
    612432: function (e, t, n) {
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
    259597: function (e, t, n) {
      e.exports = { searchBar: "searchBar_ac8310" };
    },
    348604: function (e, t, n) {
      e.exports = { image: "image_fea561" };
    },
    105167: function (e, t, n) {
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
//# sourceMappingURL=558b0bc06f939d5a33a4.js.map
