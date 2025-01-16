"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9558"],
  {
    570849: function (e, t, n) {
      n.d(t, {
        l: function () {
          return r;
        },
        u: function () {
          return s;
        },
      });
      var a = n(544891),
        l = n(570140),
        i = n(981631);
      function r(e, t) {
        l.Z.dispatch({
          type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS",
          selectedTemplate: e,
          guildId: t,
        });
      }
      async function s(e) {
        let t = (
          await a.tn.get({
            url: i.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e),
            rejectWithError: !1,
          })
        ).body;
        null != t.templates &&
          l.Z.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES",
            templates: t.templates,
            guildId: e,
          });
      }
    },
    34460: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        }),
        n(47120);
      var a = n(200651),
        l = n(192379),
        i = n(120356),
        r = n.n(i),
        s = n(990547),
        c = n(399606),
        o = n(780384),
        d = n(481060),
        m = n(935369),
        x = n(367907),
        u = n(213609),
        h = n(44315),
        _ = n(210887),
        p = n(626135),
        T = n(923726),
        g = n(570849),
        I = n(853439),
        C = n(303737),
        j = n(587431),
        N = n(862239),
        f = n(847004),
        v = n(981631),
        b = n(388032),
        R = n(729070);
      function S(e) {
        let { name: t, imageUrl: n, selected: l, onTap: i } = e;
        return (0, a.jsxs)(d.Clickable, {
          onClick: i,
          className: R.templateCard,
          children: [
            (0, a.jsx)("img", {
              src: n,
              alt: "",
              className: R.templateCardImage,
            }),
            (0, a.jsxs)("div", {
              className: R.templateNameRow,
              children: [
                (0, a.jsx)(d.Heading, {
                  variant: "heading-md/normal",
                  className: r()({ [R.unselectedTemplateName]: !l }),
                  children: t,
                }),
                l &&
                  (0, a.jsx)(d.CircleCheckIcon, {
                    size: "md",
                    secondaryColor: (0, h.Lq)(v.Ilk.WHITE_500),
                    color: (0, h.Lq)(v.Ilk.BRAND_500),
                  }),
              ],
            }),
          ],
        });
      }
      function B(e) {
        let {
            loading: t,
            error: n,
            templates: l,
            selectedTemplateIndex: i,
            handleTapTemplate: r,
          } = e,
          s = (0, c.e7)([_.Z], () => _.Z.theme);
        return t
          ? (0, a.jsx)(d.Spinner, {})
          : null != n
            ? (0, a.jsx)(j.Z, { children: n.message })
            : null == l || 0 === l.length
              ? null
              : (0, a.jsx)("div", {
                  className: R.templateCardList,
                  children: l.map((e, t) =>
                    (0, a.jsx)(
                      S,
                      {
                        imageUrl:
                          t === i
                            ? e.category_image
                            : (0, o.ap)(s)
                              ? e.unselected_light_theme_category_image
                              : e.unselected_dark_theme_category_image,
                        name: e.category,
                        selected: t === i,
                        onTap: () => r(t),
                      },
                      t,
                    ),
                  ),
                });
      }
      function E(e) {
        var t, n;
        let {
            guildId: i,
            templates: r,
            selectedTemplateIndex: s,
            priceTiers: c,
            showPriceReselection: o,
            setShowPriceReselection: d,
            handleCreateTierFromTemplate: m,
          } = e,
          x = (0, C.g4)(
            i,
            c,
            null != r
              ? null === (n = r[s]) || void 0 === n
                ? void 0
                : null === (t = n.listings[0]) || void 0 === t
                  ? void 0
                  : t.price_tier
              : void 0,
          ),
          u = null != x && x.length > 0,
          h = l.useCallback(
            (e) => {
              u ? d(!0) : m(e);
            },
            [m, u, d],
          );
        return null == r || 0 === r.length
          ? null
          : o && u
            ? (0, a.jsx)(f.Z, {
                selectedTemplate: r[s],
                handleSelectTemplate: m,
                newPricesToPick: x,
              })
            : (0, a.jsx)(N.Z, {
                selectedTemplate: r[s],
                handleSelectTemplate: h,
              });
      }
      function L(e) {
        let {
            transitionState: t,
            onClose: n,
            guildId: i,
            addNewEditStateFromTemplate: r,
            addNewEditStateFromScratch: o,
            priceTiers: h,
          } = e,
          _ = (0, c.e7)([I.Z], () => I.Z.getTemplates(i)),
          [C, { loading: j, error: N }] = (0, m.Z)(g.u),
          f = l.useRef("voluntarily_exit");
        l.useEffect(() => {
          (null == _ || 0 === _.length) && C(i);
        }, [C, i, _]),
          l.useEffect(() => {
            t === d.ModalTransitionState.EXITING &&
              p.default.track(
                v.rMx.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED,
                { exit_reason: f.current, ...(0, x.hH)(i) },
              );
          }, [t, i, f]);
        let [S, L] = l.useState(0),
          [k, y] = l.useState(!1),
          w = l.useCallback(
            (e) => {
              (f.current = "template_selected"), (0, g.l)(e, i), r(e), n();
            },
            [i, r, n],
          ),
          U = l.useCallback(() => {
            k ? y(!1) : n();
          }, [k, n]),
          D = (0, T.yi)(i);
        return (
          (0, u.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
            properties: { guild_id: i },
          }),
          (0, a.jsxs)(d.ModalRoot, {
            transitionState: t,
            size: d.ModalSize.DYNAMIC,
            className: R.modalRoot,
            children: [
              (0, a.jsx)(d.Clickable, {
                onClick: U,
                className: R.closeButton,
                children: (0, a.jsx)(d.XSmallIcon, {
                  size: "xxs",
                  color: "currentColor",
                }),
              }),
              (0, a.jsxs)(d.ModalContent, {
                className: R.modalContent,
                children: [
                  (0, a.jsxs)("div", {
                    className: R.templatesContainer,
                    children: [
                      k &&
                        (0, a.jsx)(d.Clickable, {
                          className: R.blackoutOverlay,
                          onClick: () => {
                            k && y(!1);
                          },
                          "aria-label": "overlay",
                        }),
                      (0, a.jsxs)(d.ScrollerThin, {
                        className: R.templatesContainerBody,
                        children: [
                          (0, a.jsx)(d.Heading, {
                            variant: "heading-xl/semibold",
                            children: b.intl.string(b.t["9QQ+i4"]),
                          }),
                          (0, a.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            className: R.modalBodyText,
                            children: b.intl.string(b.t.CvFFOj),
                          }),
                          D &&
                            (0, a.jsx)(d.Text, {
                              variant: "text-sm/normal",
                              className: R.creatorPortalText,
                              children: b.intl.format(b.t.iQML2t, {
                                creatorPortalUrl:
                                  "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons",
                              }),
                            }),
                          (0, a.jsx)("div", {
                            className: R.templatesContentContainer,
                            children: (0, a.jsx)(B, {
                              loading: j,
                              error: N,
                              templates: _,
                              selectedTemplateIndex: S,
                              handleTapTemplate: (e) => {
                                L(e);
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        children: b.intl.string(b.t.jymUTE),
                      }),
                      (0, a.jsxs)(d.Button, {
                        size: d.Button.Sizes.MEDIUM,
                        onClick: () => {
                          (f.current = "create_from_scratch"), o(), n();
                        },
                        look: d.Button.Looks.OUTLINED,
                        color: d.Button.Colors.PRIMARY,
                        className: R.createFromStratchButton,
                        innerClassName: R.createFromStratchButtonInner,
                        children: [
                          (0, a.jsx)(d.PencilIcon, {
                            size: "custom",
                            color: "currentColor",
                            width: 14,
                            height: 14,
                            className: R.editIcon,
                          }),
                          b.intl.string(b.t.a3ycUV),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(E, {
                    guildId: i,
                    templates: _,
                    selectedTemplateIndex: S,
                    priceTiers: h,
                    showPriceReselection: k,
                    setShowPriceReselection: y,
                    handleCreateTierFromTemplate: w,
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    862239: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var a = n(200651);
      n(192379);
      var l = n(866442),
        i = n(481060),
        r = n(377171),
        s = n(937615),
        c = n(549631),
        o = n(981631),
        d = n(388032),
        m = n(866650);
      function x(e) {
        let { listing: t } = e,
          { name: n, image: r, description: c } = t,
          d = (0, s.T4)(t.price_tier, o.pKx.USD);
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsxs)("div", {
              className: m.listingInfoRow,
              children: [
                (0, a.jsx)("img", { src: r, alt: "", className: m.avatar }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(i.Heading, {
                      variant: "heading-md/medium",
                      className: m.tierName,
                      children: n,
                    }),
                    (0, a.jsx)(i.Text, {
                      variant: "text-md/medium",
                      tag: "span",
                      children: d,
                    }),
                    (0, a.jsx)(i.Text, {
                      variant: "text-xxs/medium",
                      tag: "span",
                      children: "/mo.",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: m.listingRoleRow,
              children: [
                (0, a.jsx)("div", {
                  style: { backgroundColor: (0, l.Rf)(t.role_color) },
                  className: m.roleColor,
                }),
                (0, a.jsx)("img", { src: r, alt: "", className: m.roleIcon }),
                (0, a.jsx)(i.Text, { variant: "text-xs/medium", children: n }),
              ],
            }),
            (0, a.jsx)(i.Text, {
              variant: "text-xs/normal",
              className: m.tierDescription,
              children: c,
            }),
          ],
        });
      }
      function u(e) {
        let { channel: t } = e,
          n = (function (e) {
            switch (e) {
              case o.d4z.GUILD_TEXT:
                return i.TextLockIcon;
              case o.d4z.GUILD_VOICE:
                return i.VoiceLockIcon;
              case o.d4z.GUILD_STAGE_VOICE:
                return i.StageLockIcon;
              case o.d4z.GUILD_FORUM:
                return i.ForumLockIcon;
              case o.d4z.GUILD_MEDIA:
                return i.ImageLockIcon;
              case o.d4z.GUILD_ANNOUNCEMENT:
                return i.AnnouncementsLockIcon;
              default:
                return null;
            }
          })(t.type);
        return (0, a.jsxs)("div", {
          className: m.channelBenefitRow,
          children: [
            null != n &&
              (0, a.jsx)(n, {
                className: m.channelBenefitIcon,
                color: "currentColor",
              }),
            (0, a.jsxs)("div", {
              className: m.channelBenefitText,
              children: [
                (0, a.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  children: t.name,
                }),
                (0, a.jsx)(i.Text, {
                  variant: "text-xs/normal",
                  className: m.channelBenefitTagline,
                  children: t.tagline,
                }),
              ],
            }),
            (0, a.jsx)(c.Z, {
              className: m.__invalid_emojiIcon,
              color: r.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON,
            }),
          ],
        });
      }
      function h(e) {
        let { benefit: t } = e;
        return void 0 === t
          ? null
          : (0, a.jsxs)("div", {
              className: m.intangibleBenefitRow,
              children: [
                (0, a.jsx)("div", { className: m.intangibleBenefitIcon }),
                (0, a.jsx)(i.Text, { variant: "text-sm/normal", children: t }),
              ],
            });
      }
      function _(e) {
        let { listing: t } = e;
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsx)(i.Heading, {
              variant: "heading-sm/semibold",
              className: m.perksHeader,
              children: d.intl.string(d.t.CjC5XV),
            }),
            (0, a.jsx)(i.Text, {
              variant: "text-xs/semibold",
              className: m.benefitTypeHeader,
              children: d.intl.string(d.t.rI43W1),
            }),
            t.channels.map((e) => (0, a.jsx)(u, { channel: e }, e.id)),
            (0, a.jsx)(i.Text, {
              variant: "text-xs/semibold",
              className: m.benefitTypeHeader,
              children: d.intl.string(d.t.XqWRLi),
            }),
            t.additional_perks.map((e, t) =>
              (0, a.jsx)(h, { benefit: e.name }, t),
            ),
          ],
        });
      }
      function p(e) {
        let { selectedTemplate: t, handleSelectTemplate: n } = e;
        if (void 0 === t) return null;
        let l = t.listings[0];
        return (0, a.jsxs)("div", {
          className: m.container,
          children: [
            (0, a.jsxs)(i.ScrollerThin, {
              className: m.content,
              children: [
                (0, a.jsx)(x, { listing: l }),
                (0, a.jsx)("div", { className: m.divider }),
                (0, a.jsx)(_, { listing: l }),
              ],
            }),
            (0, a.jsx)(i.Button, {
              size: i.Button.Sizes.MEDIUM,
              onClick: () => {
                n(t);
              },
              children: d.intl.string(d.t["1W7mCg"]),
            }),
          ],
        });
      }
    },
    847004: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      }),
        n(47120);
      var a = n(200651),
        l = n(192379),
        i = n(120356),
        r = n.n(i),
        s = n(481060),
        c = n(44315),
        o = n(937615),
        d = n(981631),
        m = n(388032),
        x = n(59150);
      function u(e) {
        let { price: t, selected: n, onClick: l } = e;
        return (0, a.jsxs)(s.Clickable, {
          className: r()(x.priceRow, { [x.selected]: n }),
          onClick: l,
          children: [
            n
              ? (0, a.jsx)(s.CircleCheckIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  secondaryColor: (0, c.Lq)(d.Ilk.WHITE_500),
                  color: (0, c.Lq)(d.Ilk.BRAND_500),
                })
              : (0, a.jsx)("svg", {
                  width: "20",
                  height: "20",
                  children: (0, a.jsx)("circle", {
                    cx: 10,
                    cy: 10,
                    r: 10,
                    className: x.circle,
                  }),
                }),
            (0, a.jsxs)("div", {
              className: x.priceRowText,
              children: [
                (0, a.jsx)(s.Text, {
                  variant: "text-sm/normal",
                  tag: "span",
                  children: (0, o.T4)(t, d.pKx.USD),
                }),
                (0, a.jsx)(s.Text, {
                  variant: "text-xxs/medium",
                  tag: "span",
                  children: "/mo.",
                }),
              ],
            }),
          ],
        });
      }
      function h(e) {
        let {
            selectedTemplate: t,
            handleSelectTemplate: n,
            newPricesToPick: i,
          } = e,
          [r, c] = l.useState(0);
        return (0, a.jsxs)("div", {
          className: x.container,
          children: [
            (0, a.jsxs)("div", {
              className: x.content,
              children: [
                (0, a.jsx)(s.Heading, {
                  variant: "heading-md/semibold",
                  children: m.intl.format(m.t["5WZ9Cg"], {
                    tierName: t.listings[0].name,
                  }),
                }),
                (0, a.jsx)(s.Text, {
                  variant: "text-sm/normal",
                  className: x.bodyText,
                  children: m.intl.format(m.t["5i7UhY"], {
                    price: (0, o.T4)(t.listings[0].price_tier, d.pKx.USD),
                  }),
                }),
                i.map((e, t) =>
                  (0, a.jsx)(
                    u,
                    { price: e, selected: t === r, onClick: () => c(t) },
                    e,
                  ),
                ),
              ],
            }),
            (0, a.jsx)(s.Button, {
              size: s.Button.Sizes.MEDIUM,
              onClick: () => {
                n({ ...t, listings: [{ ...t.listings[0], price_tier: i[r] }] });
              },
              children: m.intl.string(m.t["1W7mCg"]),
            }),
          ],
        });
      }
    },
    729070: function (e, t, n) {
      e.exports = {
        modalRoot: "modalRoot_d9aa0e",
        closeButton: "closeButton_d9aa0e",
        modalContent: "modalContent_d9aa0e",
        templatesContainer: "templatesContainer_d9aa0e",
        templatesContainerBody: "templatesContainerBody_d9aa0e",
        templatesContentContainer: "templatesContentContainer_d9aa0e",
        modalBodyText: "modalBodyText_d9aa0e",
        creatorPortalText: "creatorPortalText_d9aa0e",
        templateCardList: "templateCardList_d9aa0e",
        templateCard: "templateCard_d9aa0e",
        templateNameRow: "templateNameRow_d9aa0e",
        unselectedTemplateName: "unselectedTemplateName_d9aa0e",
        templateCardImage: "templateCardImage_d9aa0e",
        createFromStratchButton: "createFromStratchButton_d9aa0e",
        createFromStratchButtonInner: "createFromStratchButtonInner_d9aa0e",
        editIcon: "editIcon_d9aa0e",
        blackoutOverlay: "blackoutOverlay_d9aa0e",
      };
    },
    866650: function (e, t, n) {
      e.exports = {
        container: "container_db0741",
        content: "content_db0741",
        listingInfoRow: "listingInfoRow_db0741",
        avatar: "avatar_db0741",
        tierName: "tierName_db0741",
        listingRoleRow: "listingRoleRow_db0741",
        roleColor: "roleColor_db0741",
        roleIcon: "roleIcon_db0741",
        tierDescription: "tierDescription_db0741",
        divider: "divider_db0741",
        perksHeader: "perksHeader_db0741",
        benefitTypeHeader: "benefitTypeHeader_db0741",
        channelBenefitRow: "channelBenefitRow_db0741",
        channelBenefitIcon: "channelBenefitIcon_db0741",
        channelBenefitText: "channelBenefitText_db0741",
        channelBenefitTagline: "channelBenefitTagline_db0741",
        intangibleBenefitRow: "intangibleBenefitRow_db0741",
        intangibleBenefitIcon: "intangibleBenefitIcon_db0741",
      };
    },
    59150: function (e, t, n) {
      e.exports = {
        container: "container_d3aca4",
        content: "content_d3aca4",
        bodyText: "bodyText_d3aca4",
        priceRow: "priceRow_d3aca4",
        selected: "selected_d3aca4",
        circle: "circle_d3aca4",
        priceRowText: "priceRowText_d3aca4",
      };
    },
  },
]);
//# sourceMappingURL=99f0f01bbdb5cd261224.js.map
