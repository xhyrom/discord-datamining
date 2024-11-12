"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32606"],
  {
    526232: function (t) {
      t.exports = "/assets/a30f1f73b76c0a00e345.svg";
    },
    818276: function (t) {
      t.exports = "/assets/645fa840d8b2b6da92a5.svg";
    },
    333848: function (t, e, n) {
      n(411104);
      var i = n(990547),
        r = n(283693),
        o = n(570140),
        a = n(408987),
        l = n(9156),
        d = n(621600),
        c = n(573261),
        _ = n(87051),
        s = n(981631),
        u = n(526761);
      e.Z = {
        createChannel(t) {
          let {
            guildId: e,
            type: n,
            name: E,
            permissionOverwrites: p = [],
            bitrate: b,
            userLimit: S,
            parentId: A,
            skuId: h,
            branchId: R,
          } = t;
          o.Z.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT" });
          let M = { type: n, name: E, permission_overwrites: p };
          if (
            (null != b && b !== s.epw && (M.bitrate = b),
            null != S && S > 0 && (M.user_limit = S),
            null != A && (M.parent_id = A),
            n === s.d4z.GUILD_STORE)
          ) {
            if (null == h) throw Error("Unexpected missing SKU");
            (M.sku_id = h), (M.branch_id = R);
          }
          return c.Z.post({
            url: s.ANM.GUILD_CHANNELS(e),
            body: M,
            oldFormErrors: !0,
            trackedActionData: {
              event: i.NetworkActionNames.CHANNEL_CREATE,
              properties: (t) => {
                var e, n;
                return (0, r.iG)({
                  is_private: p.length > 0,
                  channel_id:
                    null == t
                      ? void 0
                      : null === (e = t.body) || void 0 === e
                        ? void 0
                        : e.id,
                  channel_type:
                    null == t
                      ? void 0
                      : null === (n = t.body) || void 0 === n
                        ? void 0
                        : n.type,
                });
              },
            },
          }).then(
            (t) => (
              l.ZP.isOptInEnabled(e) &&
                _.Z.updateChannelOverrideSettings(
                  e,
                  t.body.id,
                  { flags: u.ic.OPT_IN_ENABLED },
                  d.ZB.OptedIn,
                ),
              a.Z.checkGuildTemplateDirty(e),
              t
            ),
            (t) => {
              throw (
                (o.Z.dispatch({
                  type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                  errors: t.body,
                }),
                t)
              );
            },
          );
        },
        createRoleSubscriptionTemplateChannel: (t, e, n, o) =>
          c.Z.post({
            url: s.ANM.GUILD_CHANNELS(t),
            body: { name: e, type: n, topic: o },
            oldFormErrors: !0,
            trackedActionData: {
              event: i.NetworkActionNames.CHANNEL_CREATE,
              properties: (t) => {
                var e, n;
                return (0, r.iG)({
                  is_private: !0,
                  channel_id:
                    null == t
                      ? void 0
                      : null === (e = t.body) || void 0 === e
                        ? void 0
                        : e.id,
                  channel_type:
                    null == t
                      ? void 0
                      : null === (n = t.body) || void 0 === n
                        ? void 0
                        : n.type,
                });
              },
            },
          }),
      };
    },
    16084: function (t, e, n) {
      n.d(e, {
        $N: function () {
          return A;
        },
        ZZ: function () {
          return N;
        },
        pB: function () {
          return I;
        },
        uE: function () {
          return h;
        },
        x2: function () {
          return R;
        },
        xA: function () {
          return C;
        },
      }),
        n(411104);
      var i = n(544891),
        r = n(570140),
        o = n(881052),
        a = n(128069),
        l = n(34756),
        d = n(115130),
        c = n(55563),
        _ = n(695103),
        s = n(122289),
        u = n(823379),
        E = n(936101),
        p = n(73346),
        b = n(355467),
        S = n(981631);
      async function A(t, e) {
        if (null == c.Z.get(e)) {
          r.Z.dispatch({ type: "SKU_FETCH_START", skuId: e });
          try {
            let n =
                _.Z.inTestModeForApplication(t) ||
                d.Z.inDevModeForApplication(t),
              i = await (0, p.Kb)(
                n ? S.ANM.STORE_SKU(e) : S.ANM.STORE_PUBLISHED_LISTINGS_SKU(e),
              );
            r.Z.dispatch({
              type: "SKU_FETCH_SUCCESS",
              sku: n ? i.body : i.body.sku,
            }),
              !n &&
                r.Z.dispatch({
                  type: "STORE_LISTING_FETCH_SUCCESS",
                  storeListing: i.body,
                });
          } catch (t) {
            throw (
              (r.Z.dispatch({ type: "SKU_FETCH_FAIL", skuId: e }),
              new l.Z("Failed to fetch SKU ".concat(e)))
            );
          }
        }
      }
      async function h(t) {
        let e =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (
          !(
            _.Z.inTestModeForApplication(t) || d.Z.inDevModeForApplication(t)
          ) &&
          e
        )
          throw Error("this should only be used in test mode");
        let n = (await (0, p.Kb)(S.ANM.APPLICATION_SKUS(t))).body;
        return r.Z.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n;
      }
      async function R(t, e, n, i) {
        let l;
        let c = { payment_source_id: n, gift: null == i ? void 0 : i.isGift };
        (_.Z.inTestModeForApplication(t) || d.Z.inDevModeForApplication(t)) &&
          (c.test_mode = !0),
          r.Z.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH", skuId: e });
        try {
          (l = await (0, p.Kb)({
            url: S.ANM.STORE_SKU_PURCHASE(e),
            query: c,
            oldFormErrors: !0,
          })),
            r.Z.dispatch({
              type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
              skuId: e,
              paymentSourceId: n,
              price: l.body,
            });
        } catch (n) {
          r.Z.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
            skuId: e,
          });
          let t = n instanceof o.HF ? n : new o.HF(n);
          if (
            t.code === a.SM.BILLING_BUNDLE_ALREADY_PURCHASED ||
            t.code === a.SM.BILLING_BUNDLE_PARTIALLY_OWNED
          )
            throw t;
        }
        return l;
      }
      let M = { isGift: !1 };
      async function N(t, e, n) {
        let {
          paymentSource: l,
          expectedAmount: c,
          expectedCurrency: p,
          analyticsLoadId: A,
          isGift: h,
          giftInfoOptions: R,
          subscriptionPlanId: N,
          loadId: C,
          countryCode: I,
        } = { ...M, ...n };
        r.Z.wait(() => {
          r.Z.dispatch({
            type: "SKU_PURCHASE_START",
            applicationId: t,
            skuId: e,
          });
        });
        let f =
          _.Z.inTestModeForApplication(t) || d.Z.inDevModeForApplication(t);
        try {
          let t = {
            gift: h,
            sku_subscription_plan_id: N,
            gateway_checkout_context: await (0, s.cn)(l),
            load_id: C,
          };
          if (f) t.test_mode = !0;
          else {
            if (
              null != l &&
              ((t.payment_source_id = l.id),
              (t.payment_source_token = await (0, b.Zv)(l)),
              S.QL.has(l.type))
            ) {
              let e = await (0, b.EH)(l.type);
              t.return_url =
                (0, i.K0)() +
                S.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(
                  l.type,
                  null != e ? e : "",
                  "success",
                );
            }
            null != c && (t.expected_amount = c),
              null != p && (t.expected_currency = p),
              (t.gift_info_options = R),
              null != I && (t.country_code = I),
              (t.purchase_token = (0, E.d)());
          }
          let n = await i.tn.post({
            url: S.ANM.STORE_SKU_PURCHASE(e),
            body: t,
            context: { load_id: A },
            oldFormErrors: !0,
          });
          return (
            r.Z.dispatch({
              type: "SKU_PURCHASE_SUCCESS",
              skuId: e,
              libraryApplications:
                null != n.body.library_applications
                  ? n.body.library_applications.filter(u.lm)
                  : [],
              entitlements: n.body.entitlements,
              giftCode: n.body.gift_code,
            }),
            { ...n.body, redirectConfirmation: !1 }
          );
        } catch (i) {
          let n = i instanceof o.HF ? i : new o.HF(i);
          if (
            ((n.code === a.SM.CONFIRMATION_REQUIRED ||
              n.code === a.SM.AUTHENTICATION_REQUIRED) &&
              r.Z.dispatch({
                type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                skuId: e,
                isGift: h,
              }),
            r.Z.dispatch({
              type: "SKU_PURCHASE_FAIL",
              applicationId: t,
              skuId: e,
              error: n,
            }),
            n.code !== a.SM.CONFIRMATION_REQUIRED)
          )
            throw n;
          if (!i.body.payment_id)
            throw (0, b.SQ)(
              "payment id cannot be null on redirected confirmations.",
            );
          return (0, b.sk)(i.body, l);
        }
      }
      async function C() {
        try {
          let t = { purchase_token: (0, E.d)() };
          return {
            ...(
              await i.tn.post({
                url: S.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                body: t,
                oldFormErrors: !0,
              })
            ).body,
          };
        } catch (t) {
          throw t instanceof o.HF ? t : new o.HF(t);
        }
      }
      function I() {
        r.Z.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
      }
    },
    494831: function (t, e, n) {
      n.d(e, {
        Cl: function () {
          return _;
        },
        ey: function () {
          return s;
        },
      });
      var i,
        r,
        o = n(149765),
        a = n(692547),
        l = n(700785),
        d = n(981631),
        c = n(388032);
      let _ = 371,
        s = 30;
      ((i = r || (r = {}))[(i.COSMETIC = 0)] = "COSMETIC"),
        (i[(i.MEMBER = 1)] = "MEMBER"),
        (i[(i.MODERATOR = 2)] = "MODERATOR"),
        (i[(i.MANAGER = 3)] = "MANAGER");
      let u = l.TP;
      o.Od(u, d.Plq.MENTION_EVERYONE);
      let E = o.$e(
          u,
          d.Plq.VIEW_AUDIT_LOG,
          d.Plq.MANAGE_NICKNAMES,
          d.Plq.KICK_MEMBERS,
          d.Plq.BAN_MEMBERS,
          d.Plq.MANAGE_MESSAGES,
          d.Plq.MUTE_MEMBERS,
          d.Plq.DEAFEN_MEMBERS,
          d.Plq.MOVE_MEMBERS,
          d.Plq.PRIORITY_SPEAKER,
          d.Plq.MODERATE_MEMBERS,
        ),
        p = o.$e(
          E,
          d.Plq.MANAGE_CHANNELS,
          d.Plq.MANAGE_THREADS,
          d.Plq.MANAGE_ROLES,
          d.Plq.MANAGE_GUILD_EXPRESSIONS,
          d.Plq.MANAGE_GUILD,
          d.Plq.MANAGE_WEBHOOKS,
          d.Plq.SEND_TTS_MESSAGES,
        );
      o.IH(p, d.Plq.VIEW_GUILD_ANALYTICS),
        a.Z.unsafe_rawColors.BRAND_500.css,
        l.Hn,
        a.Z.unsafe_rawColors.GREEN_360.css,
        a.Z.unsafe_rawColors.YELLOW_300.css,
        a.Z.unsafe_rawColors.RED_400.css,
        () => c.intl.string(c.t["7Dkb6+"]);
    },
    631969: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        o = n.n(r),
        a = n(926923);
      function l(t) {
        let { className: e } = t;
        return (0, i.jsx)("div", { className: o()(a.image, e) });
      }
    },
    312146: function (t, e, n) {
      n.d(e, {
        Ui: function () {
          return a;
        },
        p$: function () {
          return d;
        },
      });
      var i = n(818083),
        r = n(981631);
      let o = (0, i.B)({
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
      function a(t) {
        var e;
        let { enabled: n } = o.useExperiment(
          {
            guildId:
              null !== (e = null == t ? void 0 : t.id) && void 0 !== e
                ? e
                : r.lds,
            location: "96e84c_1",
          },
          { autoTrackExposure: !0 },
        );
        return (null == t ? void 0 : t.id) != null && n;
      }
      let l = (0, i.B)({
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
      function d() {
        let { enabledForUser: t } = l.useExperiment(
          { location: "96e84c_2" },
          { autoTrackExposure: !0 },
        );
        return t;
      }
    },
    60222: function (t, e, n) {
      n.d(e, {
        A: function () {
          return a;
        },
        m: function () {
          return l;
        },
      }),
        n(47120);
      var i = n(442837),
        r = n(430824),
        o = n(981631);
      function a(t) {
        var e;
        let [n] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [r.Z];
        return !!(null === (e = n.getGuild(t)) || void 0 === e
          ? void 0
          : e.hasFeature(o.oNc.COMMUNITY));
      }
      function l(t) {
        return (0, i.e7)([r.Z], () => a(t, [r.Z]), [t]);
      }
    },
    886974: function (t, e, n) {
      t.exports = {
        modal: "modal_b545d5 " + n("112864").scrollbarGhostHairline,
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
    194419: function (t, e, n) {
      t.exports = {
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
    631155: function (t, e, n) {
      t.exports = { searchBar: "searchBar_ac8310" };
    },
    926923: function (t, e, n) {
      t.exports = { image: "image_fea561" };
    },
    456573: function (t, e, n) {
      t.exports = {
        modalRoot: "modalRoot_d3497c",
        header: "header_d3497c",
        headerSubtitle: "headerSubtitle_d3497c",
        headerSubtitleIcon: "headerSubtitleIcon_d3497c",
        error: "error_d3497c",
      };
    },
  },
]);
//# sourceMappingURL=2a56bbade6b607e770d1.js.map
