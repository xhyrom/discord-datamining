"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16692"],
  {
    16084: function (e, t, n) {
      n.d(t, {
        $N: function () {
          return E;
        },
        ZZ: function () {
          return C;
        },
        pB: function () {
          return R;
        },
        uE: function () {
          return S;
        },
        x2: function () {
          return I;
        },
        xA: function () {
          return y;
        },
      }),
        n(411104);
      var o = n(544891),
        i = n(570140),
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
        h = n(355467),
        m = n(981631);
      async function E(e, t) {
        if (null == c.Z.get(t)) {
          i.Z.dispatch({ type: "SKU_FETCH_START", skuId: t });
          try {
            let n =
                s.Z.inTestModeForApplication(e) ||
                d.Z.inDevModeForApplication(e),
              o = await (0, b.Kb)(
                n ? m.ANM.STORE_SKU(t) : m.ANM.STORE_PUBLISHED_LISTINGS_SKU(t),
              );
            i.Z.dispatch({
              type: "SKU_FETCH_SUCCESS",
              sku: n ? o.body : o.body.sku,
            }),
              !n &&
                i.Z.dispatch({
                  type: "STORE_LISTING_FETCH_SUCCESS",
                  storeListing: o.body,
                });
          } catch (e) {
            throw (
              (i.Z.dispatch({ type: "SKU_FETCH_FAIL", skuId: t }),
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
        let n = (await (0, b.Kb)(m.ANM.APPLICATION_SKUS(e))).body;
        return i.Z.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n;
      }
      async function I(e, t, n, o) {
        let l;
        let c = { payment_source_id: n, gift: null == o ? void 0 : o.isGift };
        (s.Z.inTestModeForApplication(e) || d.Z.inDevModeForApplication(e)) &&
          (c.test_mode = !0),
          i.Z.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH", skuId: t });
        try {
          (l = await (0, b.Kb)({
            url: m.ANM.STORE_SKU_PURCHASE(t),
            query: c,
            oldFormErrors: !0,
          })),
            i.Z.dispatch({
              type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
              skuId: t,
              paymentSourceId: n,
              price: l.body,
            });
        } catch (n) {
          i.Z.dispatch({
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
      let f = { isGift: !1 };
      async function C(e, t, n) {
        let {
          paymentSource: l,
          expectedAmount: c,
          expectedCurrency: b,
          analyticsLoadId: E,
          isGift: S,
          giftInfoOptions: I,
          subscriptionPlanId: C,
          loadId: y,
          countryCode: R,
        } = { ...f, ...n };
        i.Z.wait(() => {
          i.Z.dispatch({
            type: "SKU_PURCHASE_START",
            applicationId: e,
            skuId: t,
          });
        });
        let x =
          s.Z.inTestModeForApplication(e) || d.Z.inDevModeForApplication(e);
        try {
          let e = {
            gift: S,
            sku_subscription_plan_id: C,
            gateway_checkout_context: await (0, u.cn)(l),
            load_id: y,
          };
          if (x) e.test_mode = !0;
          else {
            if (
              null != l &&
              ((e.payment_source_id = l.id),
              (e.payment_source_token = await (0, h.Zv)(l)),
              m.QL.has(l.type))
            ) {
              let t = await (0, h.EH)(l.type);
              e.return_url =
                (0, o.K0)() +
                m.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(
                  l.type,
                  null != t ? t : "",
                  "success",
                );
            }
            null != c && (e.expected_amount = c),
              null != b && (e.expected_currency = b),
              (e.gift_info_options = I),
              null != R && (e.country_code = R),
              (e.purchase_token = (0, p.d)());
          }
          let n = await o.tn.post({
            url: m.ANM.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: E },
            oldFormErrors: !0,
          });
          return (
            i.Z.dispatch({
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
        } catch (o) {
          let n = o instanceof r.HF ? o : new r.HF(o);
          if (
            ((n.code === a.SM.CONFIRMATION_REQUIRED ||
              n.code === a.SM.AUTHENTICATION_REQUIRED) &&
              i.Z.dispatch({
                type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                skuId: t,
                isGift: S,
              }),
            i.Z.dispatch({
              type: "SKU_PURCHASE_FAIL",
              applicationId: e,
              skuId: t,
              error: n,
            }),
            n.code !== a.SM.CONFIRMATION_REQUIRED)
          )
            throw n;
          if (!o.body.payment_id)
            throw (0, h.SQ)(
              "payment id cannot be null on redirected confirmations.",
            );
          return (0, h.sk)(o.body, l);
        }
      }
      async function y() {
        try {
          let e = { purchase_token: (0, p.d)() };
          return {
            ...(
              await o.tn.post({
                url: m.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                body: e,
                oldFormErrors: !0,
              })
            ).body,
          };
        } catch (e) {
          throw e instanceof r.HF ? e : new r.HF(e);
        }
      }
      function R() {
        i.Z.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
      }
    },
    797671: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n(653041),
        n(47120),
        n(773603);
      var o = n(200651),
        i = n(192379),
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
        h = n(312146),
        m = n(60222),
        E = n(131704),
        S = n(324067),
        I = n(430824),
        f = n(259580),
        C = n(934415),
        y = n(700785),
        R = n(573261),
        x = n(981631),
        A = n(231338),
        g = n(388032),
        N = n(941465);
      function T(e) {
        var t, n;
        let { guildId: T, transitionState: U, onSubmit: L, onClose: v } = e,
          w = (0, _.Dt)(),
          F = (0, _.Dt)(),
          B = (0, _.Dt)(),
          M = (0, _.Dt)(),
          [H, Z] = i.useState(x.Sc2),
          [D, P] = i.useState(x.d4z.GUILD_TEXT),
          [k, j] = i.useState(""),
          [O, K] = i.useState(!1),
          G = (0, a.e7)([I.Z], () => I.Z.getGuild(T), [T]),
          W = (0, m.m)(T),
          V = (0, p.W3)(T),
          z = (0, h.Ui)(G),
          Q = i.useMemo(
            () =>
              (function (e) {
                let {
                    canCreateStageChannel: t,
                    canCreateForumChannel: n,
                    canCreateMediaChannel: i,
                  } = e,
                  r = [
                    {
                      icon: d.TextIcon,
                      label: g.intl.string(g.t.pnuRXF),
                      value: x.d4z.GUILD_TEXT,
                      description: g.intl.string(g.t.Hf5Lb2),
                    },
                    {
                      icon: d.VoiceNormalIcon,
                      label: g.intl.string(g.t.Sx55Oj),
                      value: x.d4z.GUILD_VOICE,
                      description: g.intl.string(g.t.pqfkoK),
                    },
                  ];
                return (
                  t &&
                    r.push({
                      icon: d.StageIcon,
                      label: g.intl.string(g.t.pNWst7),
                      value: x.d4z.GUILD_STAGE_VOICE,
                      description: g.intl.string(g.t.VPAwgo),
                    }),
                  n &&
                    (r.push({
                      icon: d.ForumIcon,
                      label: g.intl.string(g.t.eAVIDw),
                      value: x.d4z.GUILD_FORUM,
                      description: g.intl.string(g.t.iZ5pgo),
                    }),
                    i &&
                      r.push({
                        icon: d.ImageIcon,
                        label: g.intl.string(g.t["6x6fVl"]),
                        value: x.d4z.GUILD_MEDIA,
                        description: g.intl.string(g.t.JyCrwc),
                        isBeta: !0,
                      })),
                  r.map((e) => {
                    let {
                      icon: t,
                      label: n,
                      value: i,
                      description: r,
                      isBeta: a,
                    } = e;
                    return {
                      name: (0, o.jsxs)("div", {
                        className: N.channelOptionWrapper,
                        children: [
                          (0, o.jsx)(t, { className: N.icon }),
                          (0, o.jsxs)("div", {
                            children: [
                              (0, o.jsxs)(d.Text, {
                                variant: "text-md/normal",
                                color: "header-primary",
                                children: [
                                  n,
                                  (0, o.jsx)(c.ChannelTypeBadge, { isBeta: a }),
                                ],
                              }),
                              (0, o.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: r,
                              }),
                            ],
                          }),
                        ],
                      }),
                      value: i,
                      channelIcon: t,
                    };
                  })
                );
              })({
                canCreateStageChannel: W,
                canCreateForumChannel: V,
                canCreateMediaChannel: z,
              }),
            [W, V, z],
          ),
          X = (0, a.e7)([S.Z], () => S.Z.getCategories(T)._categories, [T]),
          Y = i.useMemo(
            () =>
              X.map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: t.name };
              }),
            [X],
          ),
          q =
            null !==
              (n =
                null === (t = Q.find((e) => e.value === D)) || void 0 === t
                  ? void 0
                  : t.channelIcon) && void 0 !== n
              ? n
              : A.Vq,
          J = "" !== k;
        return (0, o.jsx)("form", {
          onSubmit: function (e) {
            if ((e.preventDefault(), !J)) return;
            K(!0);
            let t = {
              type: D,
              name: k,
              parent_id: "null" !== H ? H : void 0,
              permission_overwrites: [
                {
                  id: T,
                  type: s.BN.ROLE,
                  allow: y.Hn,
                  deny: x.Plq.VIEW_CHANNEL,
                },
              ],
            };
            R.Z.post({
              url: x.ANM.GUILD_CHANNELS(T),
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
                  b.Z.checkGuildTemplateDirty(T), L(e.body.id), v();
                },
                (e) => {},
              )
              .finally(() => {
                K(!1);
              });
          },
          children: (0, o.jsxs)(d.ModalRoot, {
            transitionState: U,
            "aria-labelledby": w,
            children: [
              (0, o.jsxs)(d.ModalHeader, {
                children: [
                  (0, o.jsx)(d.Heading, {
                    id: w,
                    variant: "heading-md/semibold",
                    children: g.intl.string(g.t["fUYU+v"]),
                  }),
                  (0, o.jsx)(d.ModalCloseButton, {
                    className: N.closeButton,
                    onClick: v,
                  }),
                ],
              }),
              (0, o.jsxs)(d.ModalContent, {
                className: N.modalContent,
                children: [
                  (0, o.jsx)(d.FormItem, {
                    title: g.intl.string(g.t.vHCZws),
                    titleId: F,
                    children: (0, o.jsx)(d.SingleSelect, {
                      placeholder: g.intl.string(g.t["g/Rr2d"]),
                      value: H,
                      options: Y,
                      onChange: (e) => Z(e),
                      "aria-labelledby": F,
                    }),
                  }),
                  (0, o.jsx)("div", { className: N.spacer }),
                  (0, o.jsx)(d.FormItem, {
                    title: g.intl.string(g.t["7ZcXGx"]),
                    titleId: B,
                    children: (0, o.jsx)(d.RadioGroup, {
                      options: Q,
                      value: D,
                      onChange: (e) => {
                        let { value: t } = e;
                        return P(t);
                      },
                      "aria-labelledby": B,
                    }),
                  }),
                  (0, o.jsx)("div", { className: N.spacer }),
                  (0, o.jsx)(d.FormItem, {
                    title: g.intl.string(g.t.PVbHDg),
                    titleId: M,
                    children: (0, o.jsx)(d.TextInput, {
                      value: k,
                      onChange: function (e) {
                        (0, E.zi)(D) && (e = (0, C.Nj)(e)), j(e);
                      },
                      maxLength: x.HN8,
                      placeholder: g.intl.string(g.t["bw/b8P"]),
                      className: N.inputWrapper,
                      inputClassName: N.inputInner,
                      prefixElement: (0, o.jsx)(q, {
                        className: N.inputPrefix,
                        color: "currentColor",
                        "aria-hidden": !0,
                      }),
                      "aria-labelledby": M,
                      autoFocus: !0,
                    }),
                  }),
                ],
              }),
              (0, o.jsxs)(d.ModalFooter, {
                justify: u.Z.Justify.BETWEEN,
                children: [
                  (0, o.jsx)(d.Button, {
                    type: "submit",
                    submitting: O,
                    disabled: !J,
                    children: g.intl.string(g.t.R3BPHx),
                  }),
                  (0, o.jsxs)(d.Button, {
                    look: d.Button.Looks.LINK,
                    color: d.Button.Colors.PRIMARY,
                    className: N.backButton,
                    innerClassName: N.backButtonInner,
                    onClick: v,
                    children: [
                      (0, o.jsx)(f.Z, { direction: f.Z.Directions.LEFT }),
                      g.intl.string(g.t["13/7kZ"]),
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
      var o = n(818083),
        i = n(981631);
      let r = (0, o.B)({
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
                : i.lds,
            location: "96e84c_1",
          },
          { autoTrackExposure: !0 },
        );
        return (null == e ? void 0 : e.id) != null && n;
      }
      let l = (0, o.B)({
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
//# sourceMappingURL=6d7d6996a0422a8ebdb2.js.map
