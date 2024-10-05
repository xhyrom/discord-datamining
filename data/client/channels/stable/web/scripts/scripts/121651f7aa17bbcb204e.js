"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16692"],
  {
    16084: function (e, t, n) {
      n.d(t, {
        $N: function () {
          return h;
        },
        ZZ: function () {
          return N;
        },
        pB: function () {
          return T;
        },
        uE: function () {
          return I;
        },
        x2: function () {
          return m;
        },
        xA: function () {
          return A;
        },
      }),
        n(411104);
      var o = n(544891),
        a = n(570140),
        i = n(881052),
        r = n(128069),
        d = n(34756),
        l = n(115130),
        c = n(55563),
        s = n(695103),
        _ = n(122289),
        u = n(823379),
        p = n(936101),
        E = n(73346),
        b = n(355467),
        C = n(981631);
      async function h(e, t) {
        if (null == c.Z.get(t)) {
          a.Z.dispatch({ type: "SKU_FETCH_START", skuId: t });
          try {
            let n =
                s.Z.inTestModeForApplication(e) ||
                l.Z.inDevModeForApplication(e),
              o = await (0, E.Kb)(
                n ? C.ANM.STORE_SKU(t) : C.ANM.STORE_PUBLISHED_LISTINGS_SKU(t),
              );
            a.Z.dispatch({
              type: "SKU_FETCH_SUCCESS",
              sku: n ? o.body : o.body.sku,
            }),
              !n &&
                a.Z.dispatch({
                  type: "STORE_LISTING_FETCH_SUCCESS",
                  storeListing: o.body,
                });
          } catch (e) {
            throw (
              (a.Z.dispatch({ type: "SKU_FETCH_FAIL", skuId: t }),
              new d.Z("Failed to fetch SKU ".concat(t)))
            );
          }
        }
      }
      async function I(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (
          !(
            s.Z.inTestModeForApplication(e) || l.Z.inDevModeForApplication(e)
          ) &&
          t
        )
          throw Error("this should only be used in test mode");
        let n = (await (0, E.Kb)(C.ANM.APPLICATION_SKUS(e))).body;
        return a.Z.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n;
      }
      async function m(e, t, n, o) {
        let d;
        let c = { payment_source_id: n, gift: null == o ? void 0 : o.isGift };
        (s.Z.inTestModeForApplication(e) || l.Z.inDevModeForApplication(e)) &&
          (c.test_mode = !0),
          a.Z.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH", skuId: t });
        try {
          (d = await (0, E.Kb)({
            url: C.ANM.STORE_SKU_PURCHASE(t),
            query: c,
            oldFormErrors: !0,
          })),
            a.Z.dispatch({
              type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
              skuId: t,
              paymentSourceId: n,
              price: d.body,
            });
        } catch (n) {
          a.Z.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
            skuId: t,
          });
          let e = n instanceof i.HF ? n : new i.HF(n);
          if (
            e.code === r.SM.BILLING_BUNDLE_ALREADY_PURCHASED ||
            e.code === r.SM.BILLING_BUNDLE_PARTIALLY_OWNED
          )
            throw e;
        }
        return d;
      }
      let S = { isGift: !1 };
      async function N(e, t, n) {
        let {
          paymentSource: d,
          expectedAmount: c,
          expectedCurrency: E,
          analyticsLoadId: h,
          isGift: I,
          giftInfoOptions: m,
          subscriptionPlanId: N,
          loadId: A,
          countryCode: T,
        } = { ...S, ...n };
        a.Z.wait(() => {
          a.Z.dispatch({
            type: "SKU_PURCHASE_START",
            applicationId: e,
            skuId: t,
          });
        });
        let R =
          s.Z.inTestModeForApplication(e) || l.Z.inDevModeForApplication(e);
        try {
          let e = {
            gift: I,
            sku_subscription_plan_id: N,
            gateway_checkout_context: await (0, _.cn)(d),
            load_id: A,
          };
          if (R) e.test_mode = !0;
          else {
            if (
              null != d &&
              ((e.payment_source_id = d.id),
              (e.payment_source_token = await (0, b.Zv)(d)),
              C.QL.has(d.type))
            ) {
              let t = await (0, b.EH)(d.type);
              e.return_url =
                (0, o.K0)() +
                C.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(
                  d.type,
                  null != t ? t : "",
                  "success",
                );
            }
            null != c && (e.expected_amount = c),
              null != E && (e.expected_currency = E),
              (e.gift_info_options = m),
              null != T && (e.country_code = T),
              (e.purchase_token = (0, p.d)());
          }
          let n = await o.tn.post({
            url: C.ANM.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: h },
            oldFormErrors: !0,
          });
          return (
            a.Z.dispatch({
              type: "SKU_PURCHASE_SUCCESS",
              skuId: t,
              libraryApplications:
                null != n.body.library_applications
                  ? n.body.library_applications.filter(u.lm)
                  : [],
              entitlements: n.body.entitlements,
              giftCode: n.body.gift_code,
            }),
            { ...n.body, redirectConfirmation: !1 }
          );
        } catch (o) {
          let n = o instanceof i.HF ? o : new i.HF(o);
          if (
            ((n.code === r.SM.CONFIRMATION_REQUIRED ||
              n.code === r.SM.AUTHENTICATION_REQUIRED) &&
              a.Z.dispatch({
                type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                skuId: t,
                isGift: I,
              }),
            n.code !== r.SM.CONFIRMATION_REQUIRED)
          )
            throw (
              (a.Z.dispatch({
                type: "SKU_PURCHASE_FAIL",
                applicationId: e,
                skuId: t,
                error: n,
              }),
              n)
            );
          if (!o.body.payment_id)
            throw (0, b.SQ)(
              "payment id cannot be null on redirected confirmations.",
            );
          return (0, b.sk)(o.body, d);
        }
      }
      async function A() {
        try {
          let e = { purchase_token: (0, p.d)() };
          return {
            ...(
              await o.tn.post({
                url: C.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                body: e,
                oldFormErrors: !0,
              })
            ).body,
          };
        } catch (e) {
          throw e instanceof i.HF ? e : new i.HF(e);
        }
      }
      function T() {
        a.Z.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
      }
    },
    797671: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        }),
        n(653041),
        n(47120),
        n(773603);
      var o = n(735250),
        a = n(470079),
        i = n(990547),
        r = n(442837),
        d = n(283693),
        l = n(481060),
        c = n(218613),
        s = n(911969),
        _ = n(600164),
        u = n(313201),
        p = n(456269),
        E = n(408987),
        b = n(312146),
        C = n(60222),
        h = n(131704),
        I = n(324067),
        m = n(430824),
        S = n(259580),
        N = n(934415),
        A = n(700785),
        T = n(573261),
        R = n(981631),
        y = n(231338),
        L = n(689938),
        f = n(941465);
      function M(e) {
        var t, n;
        let { guildId: M, transitionState: x, onSubmit: g, onClose: U } = e,
          H = (0, u.Dt)(),
          Z = (0, u.Dt)(),
          F = (0, u.Dt)(),
          v = (0, u.Dt)(),
          [B, D] = a.useState(R.Sc2),
          [P, w] = a.useState(R.d4z.GUILD_TEXT),
          [O, k] = a.useState(""),
          [j, G] = a.useState(!1),
          K = (0, r.e7)([m.Z], () => m.Z.getGuild(M), [M]),
          W = (0, C.m)(M),
          V = (0, p.W3)(M),
          Y = (0, b.Ui)(K),
          z = a.useMemo(
            () =>
              (function (e) {
                let {
                    canCreateStageChannel: t,
                    canCreateForumChannel: n,
                    canCreateMediaChannel: a,
                  } = e,
                  i = [
                    {
                      icon: l.TextIcon,
                      label: L.Z.Messages.TEXT_CHANNEL_TYPE,
                      value: R.d4z.GUILD_TEXT,
                      description: L.Z.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION,
                    },
                    {
                      icon: l.VoiceNormalIcon,
                      label: L.Z.Messages.VOICE_CHANNEL_TYPE,
                      value: R.d4z.GUILD_VOICE,
                      description:
                        L.Z.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION,
                    },
                  ];
                return (
                  t &&
                    i.push({
                      icon: l.StageIcon,
                      label: L.Z.Messages.STAGE_VOICE_CHANNEL_TYPE,
                      value: R.d4z.GUILD_STAGE_VOICE,
                      description:
                        L.Z.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION,
                    }),
                  n &&
                    (i.push({
                      icon: l.ForumIcon,
                      label: L.Z.Messages.FORUM_CHANNEL_TYPE,
                      value: R.d4z.GUILD_FORUM,
                      description: L.Z.Messages.FORUM_CHANNEL_DESCRIPTION,
                    }),
                    a &&
                      i.push({
                        icon: l.ImageIcon,
                        label: L.Z.Messages.MEDIA_CHANNEL_TYPE,
                        value: R.d4z.GUILD_MEDIA,
                        description:
                          L.Z.Messages.CREATE_MEDIA_CHANNEL_DESCRIPTION,
                        isBeta: !0,
                      })),
                  i.map((e) => {
                    let {
                      icon: t,
                      label: n,
                      value: a,
                      description: i,
                      isBeta: r,
                    } = e;
                    return {
                      name: (0, o.jsxs)("div", {
                        className: f.channelOptionWrapper,
                        children: [
                          (0, o.jsx)(t, { className: f.icon }),
                          (0, o.jsxs)("div", {
                            children: [
                              (0, o.jsxs)(l.Text, {
                                variant: "text-md/normal",
                                color: "header-primary",
                                children: [
                                  n,
                                  (0, o.jsx)(c.ChannelTypeBadge, { isBeta: r }),
                                ],
                              }),
                              (0, o.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: i,
                              }),
                            ],
                          }),
                        ],
                      }),
                      value: a,
                      channelIcon: t,
                    };
                  })
                );
              })({
                canCreateStageChannel: W,
                canCreateForumChannel: V,
                canCreateMediaChannel: Y,
              }),
            [W, V, Y],
          ),
          Q = (0, r.e7)([I.Z], () => I.Z.getCategories(M)._categories, [M]),
          X = a.useMemo(
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
                null === (t = z.find((e) => e.value === P)) || void 0 === t
                  ? void 0
                  : t.channelIcon) && void 0 !== n
              ? n
              : y.Vq,
          $ = "" !== O;
        return (0, o.jsx)("form", {
          onSubmit: function (e) {
            if ((e.preventDefault(), !$)) return;
            G(!0);
            let t = {
              type: P,
              name: O,
              parent_id: "null" !== B ? B : void 0,
              permission_overwrites: [
                {
                  id: M,
                  type: s.BN.ROLE,
                  allow: A.Hn,
                  deny: R.Plq.VIEW_CHANNEL,
                },
              ],
            };
            T.Z.post({
              url: R.ANM.GUILD_CHANNELS(M),
              body: t,
              oldFormErrors: !0,
              trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                  var t, n;
                  return (0, d.iG)({
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
                  E.Z.checkGuildTemplateDirty(M), g(e.body.id), U();
                },
                (e) => {},
              )
              .finally(() => {
                G(!1);
              });
          },
          children: (0, o.jsxs)(l.ModalRoot, {
            transitionState: x,
            "aria-labelledby": H,
            children: [
              (0, o.jsxs)(l.ModalHeader, {
                children: [
                  (0, o.jsx)(l.Heading, {
                    id: H,
                    variant: "heading-md/semibold",
                    children: L.Z.Messages.CREATE_CHANNEL,
                  }),
                  (0, o.jsx)(l.ModalCloseButton, {
                    className: f.closeButton,
                    onClick: U,
                  }),
                ],
              }),
              (0, o.jsxs)(l.ModalContent, {
                className: f.modalContent,
                children: [
                  (0, o.jsx)(l.FormItem, {
                    title: L.Z.Messages.CATEGORY,
                    titleId: Z,
                    children: (0, o.jsx)(l.SingleSelect, {
                      placeholder:
                        L.Z.Messages.CREATE_CHANNEL_MODAL_CATEGORY_PLACEHOLDER,
                      value: B,
                      options: X,
                      onChange: (e) => D(e),
                      "aria-labelledby": Z,
                    }),
                  }),
                  (0, o.jsx)("div", { className: f.spacer }),
                  (0, o.jsx)(l.FormItem, {
                    title: L.Z.Messages.CHANNEL_TYPE,
                    titleId: F,
                    children: (0, o.jsx)(l.RadioGroup, {
                      options: z,
                      value: P,
                      onChange: (e) => {
                        let { value: t } = e;
                        return w(t);
                      },
                      "aria-labelledby": F,
                    }),
                  }),
                  (0, o.jsx)("div", { className: f.spacer }),
                  (0, o.jsx)(l.FormItem, {
                    title: L.Z.Messages.FORM_LABEL_CHANNEL_NAME,
                    titleId: v,
                    children: (0, o.jsx)(l.TextInput, {
                      value: O,
                      onChange: function (e) {
                        (0, h.zi)(P) && (e = (0, N.Nj)(e)), k(e);
                      },
                      maxLength: R.HN8,
                      placeholder: L.Z.Messages.CHANNEL_NAME_PLACEHOLDER,
                      className: f.inputWrapper,
                      inputClassName: f.inputInner,
                      prefixElement: (0, o.jsx)(q, {
                        className: f.inputPrefix,
                        color: "currentColor",
                        "aria-hidden": !0,
                      }),
                      "aria-labelledby": v,
                      autoFocus: !0,
                    }),
                  }),
                ],
              }),
              (0, o.jsxs)(l.ModalFooter, {
                justify: _.Z.Justify.BETWEEN,
                children: [
                  (0, o.jsx)(l.Button, {
                    type: "submit",
                    submitting: j,
                    disabled: !$,
                    children: L.Z.Messages.SAVE,
                  }),
                  (0, o.jsxs)(l.Button, {
                    look: l.Button.Looks.LINK,
                    color: l.Button.Colors.PRIMARY,
                    className: f.backButton,
                    innerClassName: f.backButtonInner,
                    onClick: U,
                    children: [
                      (0, o.jsx)(S.Z, { direction: S.Z.Directions.LEFT }),
                      L.Z.Messages.BACK,
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
          return r;
        },
        p$: function () {
          return l;
        },
      });
      var o = n(818083),
        a = n(981631);
      let i = (0, o.B)({
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
      function r(e) {
        var t;
        let { enabled: n } = i.useExperiment(
          {
            guildId:
              null !== (t = null == e ? void 0 : e.id) && void 0 !== t
                ? t
                : a.lds,
            location: "96e84c_1",
          },
          { autoTrackExposure: !0 },
        );
        return (null == e ? void 0 : e.id) != null && n;
      }
      let d = (0, o.B)({
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
        let { enabledForUser: e } = d.useExperiment(
          { location: "96e84c_2" },
          { autoTrackExposure: !0 },
        );
        return e;
      }
    },
    886974: function (e, t, n) {
      e.exports = {
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
    194419: function (e, t, n) {
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
    631155: function (e, t, n) {
      e.exports = { searchBar: "searchBar_ac8310" };
    },
    941465: function (e, t, n) {
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
    456573: function (e, t, n) {
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
//# sourceMappingURL=121651f7aa17bbcb204e.js.map
