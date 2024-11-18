"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30631"],
  {
    16084: function (e, t, n) {
      n.d(t, {
        $N: function () {
          return S;
        },
        ZZ: function () {
          return R;
        },
        df: function () {
          return f;
        },
        pB: function () {
          return N;
        },
        uE: function () {
          return I;
        },
        x2: function () {
          return C;
        },
        xA: function () {
          return A;
        },
      }),
        n(411104);
      var i = n(311570),
        o = n(544891),
        r = n(570140),
        a = n(881052),
        l = n(128069),
        c = n(34756),
        d = n(115130),
        s = n(55563),
        u = n(695103),
        _ = n(122289),
        p = n(823379),
        b = n(936101),
        E = n(73346),
        h = n(355467),
        m = n(981631);
      async function S(e, t, n) {
        if (null == s.Z.get(t)) {
          r.Z.dispatch({ type: "SKU_FETCH_START", skuId: t });
          try {
            let o =
                u.Z.inTestModeForApplication(e) ||
                d.Z.inDevModeForApplication(e),
              a = {
                url: o
                  ? m.ANM.STORE_SKU(t)
                  : m.ANM.STORE_PUBLISHED_LISTINGS_SKU(t),
                rejectWithError: !1,
              };
            n === i.v.VARIANTS_GROUP &&
              (a.query = { variants_return_style: n });
            let l = await (0, E.Kb)(a);
            r.Z.dispatch({
              type: "SKU_FETCH_SUCCESS",
              sku: o ? l.body : l.body.sku,
            }),
              !o &&
                r.Z.dispatch({
                  type: "STORE_LISTING_FETCH_SUCCESS",
                  storeListing: l.body,
                });
          } catch (e) {
            throw (
              (r.Z.dispatch({ type: "SKU_FETCH_FAIL", skuId: t }),
              new c.Z("Failed to fetch SKU ".concat(t)))
            );
          }
        }
      }
      async function I(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (
          !(
            u.Z.inTestModeForApplication(e) || d.Z.inDevModeForApplication(e)
          ) &&
          t
        )
          throw Error("this should only be used in test mode");
        let n = (
          await (0, E.Kb)({
            url: m.ANM.APPLICATION_SKUS(e),
            rejectWithError: !1,
          })
        ).body;
        return r.Z.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n;
      }
      async function C(e, t, n, i) {
        let o;
        let c = { payment_source_id: n, gift: null == i ? void 0 : i.isGift };
        (u.Z.inTestModeForApplication(e) || d.Z.inDevModeForApplication(e)) &&
          (c.test_mode = !0),
          r.Z.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH", skuId: t });
        try {
          (o = await (0, E.Kb)({
            url: m.ANM.STORE_SKU_PURCHASE(t),
            query: c,
            oldFormErrors: !0,
            rejectWithError: !1,
          })),
            r.Z.dispatch({
              type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
              skuId: t,
              paymentSourceId: n,
              price: o.body,
            });
        } catch (n) {
          r.Z.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
            skuId: t,
          });
          let e = n instanceof a.HF ? n : new a.HF(n);
          if (
            e.code === l.SM.BILLING_BUNDLE_ALREADY_PURCHASED ||
            e.code === l.SM.BILLING_BUNDLE_PARTIALLY_OWNED
          )
            throw e;
        }
        return o;
      }
      let y = { isGift: !1 };
      async function R(e, t, n) {
        let {
          paymentSource: i,
          expectedAmount: c,
          expectedCurrency: s,
          analyticsLoadId: E,
          isGift: S,
          giftInfoOptions: I,
          subscriptionPlanId: C,
          loadId: R,
          countryCode: f,
        } = { ...y, ...n };
        r.Z.wait(() => {
          r.Z.dispatch({
            type: "SKU_PURCHASE_START",
            applicationId: e,
            skuId: t,
          });
        });
        let A =
          u.Z.inTestModeForApplication(e) || d.Z.inDevModeForApplication(e);
        try {
          let e = {
            gift: S,
            sku_subscription_plan_id: C,
            gateway_checkout_context: await (0, _.cn)(i),
            load_id: R,
          };
          if (A) e.test_mode = !0;
          else {
            if (
              null != i &&
              ((e.payment_source_id = i.id),
              (e.payment_source_token = await (0, h.Zv)(i)),
              m.QL.has(i.type))
            ) {
              let t = await (0, h.EH)(i.type);
              e.return_url =
                (0, o.K0)() +
                m.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(
                  i.type,
                  null != t ? t : "",
                  "success",
                );
            }
            null != c && (e.expected_amount = c),
              null != s && (e.expected_currency = s),
              (e.gift_info_options = I),
              null != f && (e.country_code = f),
              (e.purchase_token = (0, b.d)());
          }
          let n = await o.tn.post({
            url: m.ANM.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: E },
            oldFormErrors: !0,
            rejectWithError: !1,
          });
          return (
            r.Z.dispatch({
              type: "SKU_PURCHASE_SUCCESS",
              skuId: t,
              libraryApplications:
                null != n.body.library_applications
                  ? n.body.library_applications.filter(p.lm)
                  : [],
              entitlements: n.body.entitlements,
              giftCode: n.body.gift_code,
            }),
            { ...n.body, redirectConfirmation: !1 }
          );
        } catch (o) {
          let n = o instanceof a.HF ? o : new a.HF(o);
          if (
            ((n.code === l.SM.CONFIRMATION_REQUIRED ||
              n.code === l.SM.AUTHENTICATION_REQUIRED) &&
              r.Z.dispatch({
                type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                skuId: t,
                isGift: S,
              }),
            r.Z.dispatch({
              type: "SKU_PURCHASE_FAIL",
              applicationId: e,
              skuId: t,
              error: n,
            }),
            n.code !== l.SM.CONFIRMATION_REQUIRED)
          )
            throw n;
          if (!o.body.payment_id)
            throw (0, h.SQ)(
              "payment id cannot be null on redirected confirmations.",
            );
          return (0, h.sk)(o.body, i);
        }
      }
      async function f(e) {
        r.Z.wait(() => {
          r.Z.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: e });
        });
        try {
          let t = (
            await o.tn.post({
              url: m.ANM.USER_REDEEM_VIRTUAL_CURRENCY(e),
              rejectWithError: !1,
            })
          ).body;
          return (
            r.Z.dispatch({
              type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS",
              skuId: e,
              entitlements: t,
            }),
            t
          );
        } catch (n) {
          let t = n instanceof a.HF ? n : new a.HF(n);
          r.Z.dispatch({
            type: "VIRTUAL_CURRENCY_REDEEM_FAIL",
            skuId: e,
            error: t,
          });
        }
      }
      async function A() {
        try {
          let e = { purchase_token: (0, b.d)() };
          return {
            ...(
              await o.tn.post({
                url: m.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
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
      function N() {
        r.Z.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
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
        c = n(481060),
        d = n(218613),
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
          [j, k] = o.useState(""),
          [O, G] = o.useState(!1),
          K = (0, a.e7)([I.Z], () => I.Z.getGuild(x), [x]),
          W = (0, h.m)(x),
          V = (0, p.W3)(x),
          Y = (0, E.Ui)(K),
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
                      icon: c.TextIcon,
                      label: U.intl.string(U.t.pnuRXF),
                      value: A.d4z.GUILD_TEXT,
                      description: U.intl.string(U.t.Hf5Lb2),
                    },
                    {
                      icon: c.VoiceNormalIcon,
                      label: U.intl.string(U.t.Sx55Oj),
                      value: A.d4z.GUILD_VOICE,
                      description: U.intl.string(U.t.pqfkoK),
                    },
                  ];
                return (
                  t &&
                    r.push({
                      icon: c.StageIcon,
                      label: U.intl.string(U.t.pNWst7),
                      value: A.d4z.GUILD_STAGE_VOICE,
                      description: U.intl.string(U.t.VPAwgo),
                    }),
                  n &&
                    (r.push({
                      icon: c.ForumIcon,
                      label: U.intl.string(U.t.eAVIDw),
                      value: A.d4z.GUILD_FORUM,
                      description: U.intl.string(U.t.iZ5pgo),
                    }),
                    o &&
                      r.push({
                        icon: c.ImageIcon,
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
                              (0, i.jsxs)(c.Text, {
                                variant: "text-md/normal",
                                color: "header-primary",
                                children: [
                                  n,
                                  (0, i.jsx)(d.ChannelTypeBadge, { isBeta: a }),
                                ],
                              }),
                              (0, i.jsx)(c.Text, {
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
                canCreateStageChannel: W,
                canCreateForumChannel: V,
                canCreateMediaChannel: Y,
              }),
            [W, V, Y],
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
          J = "" !== j;
        return (0, i.jsx)("form", {
          onSubmit: function (e) {
            if ((e.preventDefault(), !J)) return;
            G(!0);
            let t = {
              type: D,
              name: j,
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
              rejectWithError: !1,
            })
              .then(
                (e) => {
                  b.Z.checkGuildTemplateDirty(x), L(e.body.id), v();
                },
                (e) => {},
              )
              .finally(() => {
                G(!1);
              });
          },
          children: (0, i.jsxs)(c.ModalRoot, {
            transitionState: g,
            "aria-labelledby": w,
            children: [
              (0, i.jsxs)(c.ModalHeader, {
                children: [
                  (0, i.jsx)(c.Heading, {
                    id: w,
                    variant: "heading-md/semibold",
                    children: U.intl.string(U.t["fUYU+v"]),
                  }),
                  (0, i.jsx)(c.ModalCloseButton, {
                    className: T.closeButton,
                    onClick: v,
                  }),
                ],
              }),
              (0, i.jsxs)(c.ModalContent, {
                className: T.modalContent,
                children: [
                  (0, i.jsx)(c.FormItem, {
                    title: U.intl.string(U.t.vHCZws),
                    titleId: F,
                    children: (0, i.jsx)(c.SingleSelect, {
                      placeholder: U.intl.string(U.t["g/Rr2d"]),
                      value: H,
                      options: X,
                      onChange: (e) => Z(e),
                      "aria-labelledby": F,
                    }),
                  }),
                  (0, i.jsx)("div", { className: T.spacer }),
                  (0, i.jsx)(c.FormItem, {
                    title: U.intl.string(U.t["7ZcXGx"]),
                    titleId: M,
                    children: (0, i.jsx)(c.RadioGroup, {
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
                  (0, i.jsx)(c.FormItem, {
                    title: U.intl.string(U.t.PVbHDg),
                    titleId: B,
                    children: (0, i.jsx)(c.TextInput, {
                      value: j,
                      onChange: function (e) {
                        (0, m.zi)(D) && (e = (0, y.Nj)(e)), k(e);
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
              (0, i.jsxs)(c.ModalFooter, {
                justify: u.Z.Justify.BETWEEN,
                children: [
                  (0, i.jsx)(c.Button, {
                    type: "submit",
                    submitting: O,
                    disabled: !J,
                    children: U.intl.string(U.t.R3BPHx),
                  }),
                  (0, i.jsxs)(c.Button, {
                    look: c.Button.Looks.LINK,
                    color: c.Button.Colors.PRIMARY,
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
          return c;
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
      function c() {
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
//# sourceMappingURL=81a291c5d724086f4403.js.map
