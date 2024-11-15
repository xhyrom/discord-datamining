"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30631"],
  {
    16084: function (e, t, n) {
      n.d(t, {
        $N: function () {
          return m;
        },
        ZZ: function () {
          return y;
        },
        df: function () {
          return R;
        },
        pB: function () {
          return A;
        },
        uE: function () {
          return S;
        },
        x2: function () {
          return I;
        },
        xA: function () {
          return f;
        },
      }),
        n(411104);
      var i = n(544891),
        o = n(570140),
        r = n(881052),
        a = n(128069),
        l = n(34756),
        d = n(115130),
        c = n(55563),
        s = n(695103),
        u = n(122289),
        _ = n(823379),
        p = n(936101),
        b = n(73346),
        E = n(355467),
        h = n(981631);
      async function m(e, t) {
        if (null == c.Z.get(t)) {
          o.Z.dispatch({ type: "SKU_FETCH_START", skuId: t });
          try {
            let n =
                s.Z.inTestModeForApplication(e) ||
                d.Z.inDevModeForApplication(e),
              i = await (0, b.Kb)(
                n ? h.ANM.STORE_SKU(t) : h.ANM.STORE_PUBLISHED_LISTINGS_SKU(t),
              );
            o.Z.dispatch({
              type: "SKU_FETCH_SUCCESS",
              sku: n ? i.body : i.body.sku,
            }),
              !n &&
                o.Z.dispatch({
                  type: "STORE_LISTING_FETCH_SUCCESS",
                  storeListing: i.body,
                });
          } catch (e) {
            throw (
              (o.Z.dispatch({ type: "SKU_FETCH_FAIL", skuId: t }),
              new l.Z("Failed to fetch SKU ".concat(t)))
            );
          }
        }
      }
      async function S(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (
          !(
            s.Z.inTestModeForApplication(e) || d.Z.inDevModeForApplication(e)
          ) &&
          t
        )
          throw Error("this should only be used in test mode");
        let n = (await (0, b.Kb)(h.ANM.APPLICATION_SKUS(e))).body;
        return o.Z.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n;
      }
      async function I(e, t, n, i) {
        let l;
        let c = { payment_source_id: n, gift: null == i ? void 0 : i.isGift };
        (s.Z.inTestModeForApplication(e) || d.Z.inDevModeForApplication(e)) &&
          (c.test_mode = !0),
          o.Z.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH", skuId: t });
        try {
          (l = await (0, b.Kb)({
            url: h.ANM.STORE_SKU_PURCHASE(t),
            query: c,
            oldFormErrors: !0,
          })),
            o.Z.dispatch({
              type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
              skuId: t,
              paymentSourceId: n,
              price: l.body,
            });
        } catch (n) {
          o.Z.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
            skuId: t,
          });
          let e = n instanceof r.HF ? n : new r.HF(n);
          if (
            e.code === a.SM.BILLING_BUNDLE_ALREADY_PURCHASED ||
            e.code === a.SM.BILLING_BUNDLE_PARTIALLY_OWNED
          )
            throw e;
        }
        return l;
      }
      let C = { isGift: !1 };
      async function y(e, t, n) {
        let {
          paymentSource: l,
          expectedAmount: c,
          expectedCurrency: b,
          analyticsLoadId: m,
          isGift: S,
          giftInfoOptions: I,
          subscriptionPlanId: y,
          loadId: R,
          countryCode: f,
        } = { ...C, ...n };
        o.Z.wait(() => {
          o.Z.dispatch({
            type: "SKU_PURCHASE_START",
            applicationId: e,
            skuId: t,
          });
        });
        let A =
          s.Z.inTestModeForApplication(e) || d.Z.inDevModeForApplication(e);
        try {
          let e = {
            gift: S,
            sku_subscription_plan_id: y,
            gateway_checkout_context: await (0, u.cn)(l),
            load_id: R,
          };
          if (A) e.test_mode = !0;
          else {
            if (
              null != l &&
              ((e.payment_source_id = l.id),
              (e.payment_source_token = await (0, E.Zv)(l)),
              h.QL.has(l.type))
            ) {
              let t = await (0, E.EH)(l.type);
              e.return_url =
                (0, i.K0)() +
                h.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(
                  l.type,
                  null != t ? t : "",
                  "success",
                );
            }
            null != c && (e.expected_amount = c),
              null != b && (e.expected_currency = b),
              (e.gift_info_options = I),
              null != f && (e.country_code = f),
              (e.purchase_token = (0, p.d)());
          }
          let n = await i.tn.post({
            url: h.ANM.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: m },
            oldFormErrors: !0,
          });
          return (
            o.Z.dispatch({
              type: "SKU_PURCHASE_SUCCESS",
              skuId: t,
              libraryApplications:
                null != n.body.library_applications
                  ? n.body.library_applications.filter(_.lm)
                  : [],
              entitlements: n.body.entitlements,
              giftCode: n.body.gift_code,
            }),
            { ...n.body, redirectConfirmation: !1 }
          );
        } catch (i) {
          let n = i instanceof r.HF ? i : new r.HF(i);
          if (
            ((n.code === a.SM.CONFIRMATION_REQUIRED ||
              n.code === a.SM.AUTHENTICATION_REQUIRED) &&
              o.Z.dispatch({
                type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                skuId: t,
                isGift: S,
              }),
            o.Z.dispatch({
              type: "SKU_PURCHASE_FAIL",
              applicationId: e,
              skuId: t,
              error: n,
            }),
            n.code !== a.SM.CONFIRMATION_REQUIRED)
          )
            throw n;
          if (!i.body.payment_id)
            throw (0, E.SQ)(
              "payment id cannot be null on redirected confirmations.",
            );
          return (0, E.sk)(i.body, l);
        }
      }
      async function R(e) {
        o.Z.wait(() => {
          o.Z.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: e });
        });
        try {
          let t = (
            await i.tn.post({ url: h.ANM.USER_REDEEM_VIRTUAL_CURRENCY(e) })
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
          let t = n instanceof r.HF ? n : new r.HF(n);
          o.Z.dispatch({
            type: "VIRTUAL_CURRENCY_REDEEM_FAIL",
            skuId: e,
            error: t,
          });
        }
      }
      async function f() {
        try {
          let e = { purchase_token: (0, p.d)() };
          return {
            ...(
              await i.tn.post({
                url: h.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                body: e,
                oldFormErrors: !0,
              })
            ).body,
          };
        } catch (e) {
          throw e instanceof r.HF ? e : new r.HF(e);
        }
      }
      function A() {
        o.Z.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
      }
    },
    797671: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        }),
        n(653041),
        n(47120),
        n(773603);
      var i = n(200651),
        o = n(192379),
        r = n(990547),
        a = n(442837),
        l = n(283693),
        d = n(481060),
        c = n(218613),
        s = n(911969),
        u = n(600164),
        _ = n(313201),
        p = n(456269),
        b = n(408987),
        E = n(312146),
        h = n(60222),
        m = n(131704),
        S = n(324067),
        I = n(430824),
        C = n(259580),
        y = n(934415),
        R = n(700785),
        f = n(573261),
        A = n(981631),
        N = n(231338),
        U = n(388032),
        T = n(496356);
      function x(e) {
        var t, n;
        let { guildId: x, transitionState: g, onSubmit: L, onClose: v } = e,
          w = (0, _.Dt)(),
          F = (0, _.Dt)(),
          M = (0, _.Dt)(),
          B = (0, _.Dt)(),
          [H, Z] = o.useState(A.Sc2),
          [D, P] = o.useState(A.d4z.GUILD_TEXT),
          [k, j] = o.useState(""),
          [O, K] = o.useState(!1),
          G = (0, a.e7)([I.Z], () => I.Z.getGuild(x), [x]),
          V = (0, h.m)(x),
          W = (0, p.W3)(x),
          Y = (0, E.Ui)(G),
          z = o.useMemo(
            () =>
              (function (e) {
                let {
                    canCreateStageChannel: t,
                    canCreateForumChannel: n,
                    canCreateMediaChannel: o,
                  } = e,
                  r = [
                    {
                      icon: d.TextIcon,
                      label: U.intl.string(U.t.pnuRXF),
                      value: A.d4z.GUILD_TEXT,
                      description: U.intl.string(U.t.Hf5Lb2),
                    },
                    {
                      icon: d.VoiceNormalIcon,
                      label: U.intl.string(U.t.Sx55Oj),
                      value: A.d4z.GUILD_VOICE,
                      description: U.intl.string(U.t.pqfkoK),
                    },
                  ];
                return (
                  t &&
                    r.push({
                      icon: d.StageIcon,
                      label: U.intl.string(U.t.pNWst7),
                      value: A.d4z.GUILD_STAGE_VOICE,
                      description: U.intl.string(U.t.VPAwgo),
                    }),
                  n &&
                    (r.push({
                      icon: d.ForumIcon,
                      label: U.intl.string(U.t.eAVIDw),
                      value: A.d4z.GUILD_FORUM,
                      description: U.intl.string(U.t.iZ5pgo),
                    }),
                    o &&
                      r.push({
                        icon: d.ImageIcon,
                        label: U.intl.string(U.t["6x6fVl"]),
                        value: A.d4z.GUILD_MEDIA,
                        description: U.intl.string(U.t.JyCrwc),
                        isBeta: !0,
                      })),
                  r.map((e) => {
                    let {
                      icon: t,
                      label: n,
                      value: o,
                      description: r,
                      isBeta: a,
                    } = e;
                    return {
                      name: (0, i.jsxs)("div", {
                        className: T.channelOptionWrapper,
                        children: [
                          (0, i.jsx)(t, { className: T.icon }),
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsxs)(d.Text, {
                                variant: "text-md/normal",
                                color: "header-primary",
                                children: [
                                  n,
                                  (0, i.jsx)(c.ChannelTypeBadge, { isBeta: a }),
                                ],
                              }),
                              (0, i.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: r,
                              }),
                            ],
                          }),
                        ],
                      }),
                      value: o,
                      channelIcon: t,
                    };
                  })
                );
              })({
                canCreateStageChannel: V,
                canCreateForumChannel: W,
                canCreateMediaChannel: Y,
              }),
            [V, W, Y],
          ),
          Q = (0, a.e7)([S.Z], () => S.Z.getCategories(x)._categories, [x]),
          X = o.useMemo(
            () =>
              Q.map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: t.name };
              }),
            [Q],
          ),
          q =
            null !==
              (n =
                null === (t = z.find((e) => e.value === D)) || void 0 === t
                  ? void 0
                  : t.channelIcon) && void 0 !== n
              ? n
              : N.Vq,
          J = "" !== k;
        return (0, i.jsx)("form", {
          onSubmit: function (e) {
            if ((e.preventDefault(), !J)) return;
            K(!0);
            let t = {
              type: D,
              name: k,
              parent_id: "null" !== H ? H : void 0,
              permission_overwrites: [
                {
                  id: x,
                  type: s.BN.ROLE,
                  allow: R.Hn,
                  deny: A.Plq.VIEW_CHANNEL,
                },
              ],
            };
            f.Z.post({
              url: A.ANM.GUILD_CHANNELS(x),
              body: t,
              oldFormErrors: !0,
              trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                  var t, n;
                  return (0, l.iG)({
                    is_private: !0,
                    channel_id:
                      null == e
                        ? void 0
                        : null === (t = e.body) || void 0 === t
                          ? void 0
                          : t.id,
                    channel_type:
                      null == e
                        ? void 0
                        : null === (n = e.body) || void 0 === n
                          ? void 0
                          : n.type,
                  });
                },
              },
            })
              .then(
                (e) => {
                  b.Z.checkGuildTemplateDirty(x), L(e.body.id), v();
                },
                (e) => {},
              )
              .finally(() => {
                K(!1);
              });
          },
          children: (0, i.jsxs)(d.ModalRoot, {
            transitionState: g,
            "aria-labelledby": w,
            children: [
              (0, i.jsxs)(d.ModalHeader, {
                children: [
                  (0, i.jsx)(d.Heading, {
                    id: w,
                    variant: "heading-md/semibold",
                    children: U.intl.string(U.t["fUYU+v"]),
                  }),
                  (0, i.jsx)(d.ModalCloseButton, {
                    className: T.closeButton,
                    onClick: v,
                  }),
                ],
              }),
              (0, i.jsxs)(d.ModalContent, {
                className: T.modalContent,
                children: [
                  (0, i.jsx)(d.FormItem, {
                    title: U.intl.string(U.t.vHCZws),
                    titleId: F,
                    children: (0, i.jsx)(d.SingleSelect, {
                      placeholder: U.intl.string(U.t["g/Rr2d"]),
                      value: H,
                      options: X,
                      onChange: (e) => Z(e),
                      "aria-labelledby": F,
                    }),
                  }),
                  (0, i.jsx)("div", { className: T.spacer }),
                  (0, i.jsx)(d.FormItem, {
                    title: U.intl.string(U.t["7ZcXGx"]),
                    titleId: M,
                    children: (0, i.jsx)(d.RadioGroup, {
                      options: z,
                      value: D,
                      onChange: (e) => {
                        let { value: t } = e;
                        return P(t);
                      },
                      "aria-labelledby": M,
                    }),
                  }),
                  (0, i.jsx)("div", { className: T.spacer }),
                  (0, i.jsx)(d.FormItem, {
                    title: U.intl.string(U.t.PVbHDg),
                    titleId: B,
                    children: (0, i.jsx)(d.TextInput, {
                      value: k,
                      onChange: function (e) {
                        (0, m.zi)(D) && (e = (0, y.Nj)(e)), j(e);
                      },
                      maxLength: A.HN8,
                      placeholder: U.intl.string(U.t["bw/b8P"]),
                      className: T.inputWrapper,
                      inputClassName: T.inputInner,
                      prefixElement: (0, i.jsx)(q, {
                        className: T.inputPrefix,
                        color: "currentColor",
                        "aria-hidden": !0,
                      }),
                      "aria-labelledby": B,
                      autoFocus: !0,
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)(d.ModalFooter, {
                justify: u.Z.Justify.BETWEEN,
                children: [
                  (0, i.jsx)(d.Button, {
                    type: "submit",
                    submitting: O,
                    disabled: !J,
                    children: U.intl.string(U.t.R3BPHx),
                  }),
                  (0, i.jsxs)(d.Button, {
                    look: d.Button.Looks.LINK,
                    color: d.Button.Colors.PRIMARY,
                    className: T.backButton,
                    innerClassName: T.backButtonInner,
                    onClick: v,
                    children: [
                      (0, i.jsx)(C.Z, { direction: C.Z.Directions.LEFT }),
                      U.intl.string(U.t["13/7kZ"]),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    312146: function (e, t, n) {
      n.d(t, {
        Ui: function () {
          return a;
        },
        p$: function () {
          return d;
        },
      });
      var i = n(818083),
        o = n(981631);
      let r = (0, i.B)({
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
        let { enabled: n } = r.useExperiment(
          {
            guildId:
              null !== (t = null == e ? void 0 : e.id) && void 0 !== t
                ? t
                : o.lds,
            location: "96e84c_1",
          },
          { autoTrackExposure: !0 },
        );
        return (null == e ? void 0 : e.id) != null && n;
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
        let { enabledForUser: e } = l.useExperiment(
          { location: "96e84c_2" },
          { autoTrackExposure: !0 },
        );
        return e;
      }
    },
    497341: function (e, t, n) {
      e.exports = {
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
    150470: function (e, t, n) {
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
    266763: function (e, t, n) {
      e.exports = { searchBar: "searchBar_ac8310" };
    },
    496356: function (e, t, n) {
      e.exports = {
        closeButton: "closeButton_b82088",
        modalContent: "modalContent_b82088",
        channelOptionWrapper: "channelOptionWrapper_b82088",
        spacer: "spacer_b82088",
        icon: "icon_b82088",
        inputWrapper: "inputWrapper_b82088",
        inputInner: "inputInner_b82088",
        inputPrefix: "inputPrefix_b82088",
        backButton: "backButton_b82088",
        backButtonInner: "backButtonInner_b82088",
      };
    },
    253654: function (e, t, n) {
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
//# sourceMappingURL=b7b59806f78bb5abd0c0.js.map
