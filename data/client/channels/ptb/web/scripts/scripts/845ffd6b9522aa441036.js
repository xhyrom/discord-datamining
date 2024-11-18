"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62861"],
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
            skuId: R,
            branchId: h,
          } = t;
          o.Z.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT" });
          let C = { type: n, name: E, permission_overwrites: p };
          if (
            (null != b && b !== s.epw && (C.bitrate = b),
            null != S && S > 0 && (C.user_limit = S),
            null != A && (C.parent_id = A),
            n === s.d4z.GUILD_STORE)
          ) {
            if (null == R) throw Error("Unexpected missing SKU");
            (C.sku_id = R), (C.branch_id = h);
          }
          return c.Z.post({
            url: s.ANM.GUILD_CHANNELS(e),
            body: C,
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
          return R;
        },
        ZZ: function () {
          return M;
        },
        df: function () {
          return I;
        },
        pB: function () {
          return y;
        },
        uE: function () {
          return h;
        },
        x2: function () {
          return C;
        },
        xA: function () {
          return f;
        },
      }),
        n(411104);
      var i = n(311570),
        r = n(544891),
        o = n(570140),
        a = n(881052),
        l = n(128069),
        d = n(34756),
        c = n(115130),
        _ = n(55563),
        s = n(695103),
        u = n(122289),
        E = n(823379),
        p = n(936101),
        b = n(73346),
        S = n(355467),
        A = n(981631);
      async function R(t, e, n) {
        if (null == _.Z.get(e)) {
          o.Z.dispatch({ type: "SKU_FETCH_START", skuId: e });
          try {
            let r =
                s.Z.inTestModeForApplication(t) ||
                c.Z.inDevModeForApplication(t),
              a = {
                url: r
                  ? A.ANM.STORE_SKU(e)
                  : A.ANM.STORE_PUBLISHED_LISTINGS_SKU(e),
              };
            n === i.v.VARIANTS_GROUP &&
              (a.query = { variants_return_style: n });
            let l = await (0, b.Kb)(a);
            o.Z.dispatch({
              type: "SKU_FETCH_SUCCESS",
              sku: r ? l.body : l.body.sku,
            }),
              !r &&
                o.Z.dispatch({
                  type: "STORE_LISTING_FETCH_SUCCESS",
                  storeListing: l.body,
                });
          } catch (t) {
            throw (
              (o.Z.dispatch({ type: "SKU_FETCH_FAIL", skuId: e }),
              new d.Z("Failed to fetch SKU ".concat(e)))
            );
          }
        }
      }
      async function h(t) {
        let e =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (
          !(
            s.Z.inTestModeForApplication(t) || c.Z.inDevModeForApplication(t)
          ) &&
          e
        )
          throw Error("this should only be used in test mode");
        let n = (await (0, b.Kb)(A.ANM.APPLICATION_SKUS(t))).body;
        return o.Z.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n;
      }
      async function C(t, e, n, i) {
        let r;
        let d = { payment_source_id: n, gift: null == i ? void 0 : i.isGift };
        (s.Z.inTestModeForApplication(t) || c.Z.inDevModeForApplication(t)) &&
          (d.test_mode = !0),
          o.Z.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH", skuId: e });
        try {
          (r = await (0, b.Kb)({
            url: A.ANM.STORE_SKU_PURCHASE(e),
            query: d,
            oldFormErrors: !0,
          })),
            o.Z.dispatch({
              type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
              skuId: e,
              paymentSourceId: n,
              price: r.body,
            });
        } catch (n) {
          o.Z.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
            skuId: e,
          });
          let t = n instanceof a.HF ? n : new a.HF(n);
          if (
            t.code === l.SM.BILLING_BUNDLE_ALREADY_PURCHASED ||
            t.code === l.SM.BILLING_BUNDLE_PARTIALLY_OWNED
          )
            throw t;
        }
        return r;
      }
      let N = { isGift: !1 };
      async function M(t, e, n) {
        let {
          paymentSource: i,
          expectedAmount: d,
          expectedCurrency: _,
          analyticsLoadId: b,
          isGift: R,
          giftInfoOptions: h,
          subscriptionPlanId: C,
          loadId: M,
          countryCode: I,
        } = { ...N, ...n };
        o.Z.wait(() => {
          o.Z.dispatch({
            type: "SKU_PURCHASE_START",
            applicationId: t,
            skuId: e,
          });
        });
        let f =
          s.Z.inTestModeForApplication(t) || c.Z.inDevModeForApplication(t);
        try {
          let t = {
            gift: R,
            sku_subscription_plan_id: C,
            gateway_checkout_context: await (0, u.cn)(i),
            load_id: M,
          };
          if (f) t.test_mode = !0;
          else {
            if (
              null != i &&
              ((t.payment_source_id = i.id),
              (t.payment_source_token = await (0, S.Zv)(i)),
              A.QL.has(i.type))
            ) {
              let e = await (0, S.EH)(i.type);
              t.return_url =
                (0, r.K0)() +
                A.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(
                  i.type,
                  null != e ? e : "",
                  "success",
                );
            }
            null != d && (t.expected_amount = d),
              null != _ && (t.expected_currency = _),
              (t.gift_info_options = h),
              null != I && (t.country_code = I),
              (t.purchase_token = (0, p.d)());
          }
          let n = await r.tn.post({
            url: A.ANM.STORE_SKU_PURCHASE(e),
            body: t,
            context: { load_id: b },
            oldFormErrors: !0,
          });
          return (
            o.Z.dispatch({
              type: "SKU_PURCHASE_SUCCESS",
              skuId: e,
              libraryApplications:
                null != n.body.library_applications
                  ? n.body.library_applications.filter(E.lm)
                  : [],
              entitlements: n.body.entitlements,
              giftCode: n.body.gift_code,
            }),
            { ...n.body, redirectConfirmation: !1 }
          );
        } catch (r) {
          let n = r instanceof a.HF ? r : new a.HF(r);
          if (
            ((n.code === l.SM.CONFIRMATION_REQUIRED ||
              n.code === l.SM.AUTHENTICATION_REQUIRED) &&
              o.Z.dispatch({
                type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                skuId: e,
                isGift: R,
              }),
            o.Z.dispatch({
              type: "SKU_PURCHASE_FAIL",
              applicationId: t,
              skuId: e,
              error: n,
            }),
            n.code !== l.SM.CONFIRMATION_REQUIRED)
          )
            throw n;
          if (!r.body.payment_id)
            throw (0, S.SQ)(
              "payment id cannot be null on redirected confirmations.",
            );
          return (0, S.sk)(r.body, i);
        }
      }
      async function I(t) {
        o.Z.wait(() => {
          o.Z.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: t });
        });
        try {
          let e = (
            await r.tn.post({ url: A.ANM.USER_REDEEM_VIRTUAL_CURRENCY(t) })
          ).body;
          return (
            o.Z.dispatch({
              type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS",
              skuId: t,
              entitlements: e,
            }),
            e
          );
        } catch (n) {
          let e = n instanceof a.HF ? n : new a.HF(n);
          o.Z.dispatch({
            type: "VIRTUAL_CURRENCY_REDEEM_FAIL",
            skuId: t,
            error: e,
          });
        }
      }
      async function f() {
        try {
          let t = { purchase_token: (0, p.d)() };
          return {
            ...(
              await r.tn.post({
                url: A.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                body: t,
                oldFormErrors: !0,
              })
            ).body,
          };
        } catch (t) {
          throw t instanceof a.HF ? t : new a.HF(t);
        }
      }
      function y() {
        o.Z.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
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
        a = n(717955);
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
    497341: function (t, e, n) {
      t.exports = {
        modal: "modal_b545d5 " + n("110933").scrollbarGhostHairline,
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
    150470: function (t, e, n) {
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
    266763: function (t, e, n) {
      t.exports = { searchBar: "searchBar_ac8310" };
    },
    717955: function (t, e, n) {
      t.exports = { image: "image_fea561" };
    },
    253654: function (t, e, n) {
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
//# sourceMappingURL=845ffd6b9522aa441036.js.map
