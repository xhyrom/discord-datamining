"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36877"],
  {
    650461: function (e, t, r) {
      r.d(t, {
        Wg: function () {
          return S;
        },
      }),
        r(47120);
      var n,
        i = r(470079),
        a = r(392711),
        o = r.n(a),
        d = r(442837),
        l = r(570140),
        s = r(944163),
        c = r(709054),
        g = r(116175),
        f = r(308083);
      function u(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      let C = new Map(),
        b = new Map(),
        p = !1,
        _ = Object.freeze({
          gameApplicationIds: new Set(),
          playstyle: f.zv.NONE,
          interests: new Set(),
          description: "",
          wildcardDescriptors: [f.U6, f.U6, f.U6],
          tag: "",
          verificationForm: { ...s.t },
          badgeKind: g.ZD.SWORD,
          badgePrimaryColor: void 0,
          badgeSecondaryColor: void 0,
          banner: f.qC.NIGHT_SKY,
          brandPrimaryColor: void 0,
          brandSecondaryColor: void 0,
          currentStep: f.Wy.GAMES,
          furthestStep: f.Wy.GAMES,
          requiredGameId: void 0,
        });
      function v() {
        let e = o().cloneDeep(_);
        return (e.badgeKind = (0, g.lP)()), (e.banner = (0, f.i1)()), e;
      }
      function S() {
        return i.useState(() => v())[0];
      }
      function m(e) {
        var t;
        return null !== (t = C.get(e)) && void 0 !== t ? t : v();
      }
      function y(e, t) {
        let r = m(e);
        C.set(e, { ...r, ...t });
        let n = b.get(e);
        if (null != n) {
          let r = { ...n };
          Object.keys(t).forEach((e) => {
            delete r[e];
          }),
            b.set(e, r);
        }
      }
      class h extends (n = d.ZP.PersistedStore) {
        initialize(e) {
          null != e &&
            c.default.keys(e.progressByGuild).forEach((t) => {
              var r, n, i, a, o;
              C.set(t, {
                gameApplicationIds: new Set(
                  (r = e.progressByGuild[t]).gameApplicationIds,
                ),
                playstyle: r.playstyle,
                interests: new Set(r.interests),
                description: r.description,
                wildcardDescriptors:
                  null !== (n = r.wildcardDescriptors) && void 0 !== n
                    ? n
                    : [f.U6, f.U6, f.U6],
                tag: r.tag,
                verificationForm:
                  null !== (i = r.verificationForm) && void 0 !== i
                    ? i
                    : { ...s.t },
                badgeKind:
                  null !== (a = r.badgeKind) && void 0 !== a ? a : g.ZD.SWORD,
                badgePrimaryColor: r.badgePrimaryColor,
                badgeSecondaryColor: r.badgeSecondaryColor,
                banner:
                  null !== (o = r.banner) && void 0 !== o ? o : f.qC.NIGHT_SKY,
                brandPrimaryColor: r.brandPrimaryColor,
                brandSecondaryColor: r.brandSecondaryColor,
                currentStep: r.currentStep,
                furthestStep: r.furthestStep,
                requiredGameId: r.requiredGameId,
              });
            });
        }
        getState() {
          let e = {};
          return (
            C.forEach((t, r) => {
              var n;
              e[r] = {
                gameApplicationIds: Array.from((n = t).gameApplicationIds),
                playstyle: n.playstyle,
                interests: Array.from(n.interests),
                description: n.description,
                wildcardDescriptors: n.wildcardDescriptors,
                tag: n.tag,
                verificationForm: n.verificationForm,
                badgeKind: n.badgeKind,
                badgePrimaryColor: n.badgePrimaryColor,
                badgeSecondaryColor: n.badgeSecondaryColor,
                banner: n.banner,
                brandPrimaryColor: n.brandPrimaryColor,
                brandSecondaryColor: n.brandSecondaryColor,
                currentStep: n.currentStep,
                furthestStep: n.furthestStep,
                requiredGameId: n.requiredGameId,
              };
            }),
            { progressByGuild: e }
          );
        }
        getStateForGuild(e) {
          return { progress: C.get(e), errors: b.get(e), submitting: p };
        }
        getGuildIds() {
          return [...C.keys()];
        }
      }
      u(h, "displayName", "ClanSetupStore"),
        u(h, "persistKey", "ClanSetupStore"),
        (t.ZP = new h(l.Z, {
          CLAN_SETUP_RESET: function () {
            C.clear(), b.clear();
          },
          CLAN_SETUP_UPDATE: function (e) {
            let { guildId: t, updates: r } = e;
            y(t, r);
          },
          CLAN_SETUP_SUBMIT: function (e) {
            let { guildId: t } = e;
            (p = !0), b.delete(t);
          },
          CLAN_SETUP_SUCCESS: function (e) {
            let { guildId: t } = e;
            (p = !1), C.delete(t), b.delete(t);
          },
          CLAN_SETUP_ERROR: function (e) {
            let { guildId: t, error: r } = e;
            (p = !1),
              b.set(t, {
                gameApplicationIds: r.getFirstFieldErrorMessage(
                  "game_application_ids",
                ),
                playstyle: r.getFirstFieldErrorMessage("play_style"),
                description: r.getFirstFieldErrorMessage("description"),
                wildcardDescriptors: r.getFirstFieldErrorMessage(
                  "wildcard_descriptors",
                ),
                interests: r.getFirstFieldErrorMessage("search_terms"),
                tag: r.getFirstFieldErrorMessage("tag"),
                verificationForm: r.getFirstFieldErrorMessage([
                  "verification_form",
                  "form_fields",
                ]),
              });
          },
          MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
            let t;
            let { form: r, guildId: n, isLocalUpdate: i } = e;
            i &&
              ((t = null == r ? s.t : { ...m(n).verificationForm, ...r }),
              y(n, { verificationForm: t }));
          },
        }));
    },
    570938: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(735250);
      r(470079);
      var i = r(325767);
      function a(e) {
        let {
          width: t = 24,
          height: r = 24,
          color: a = "currentColor",
          ...o
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, i.Z)(o),
          width: t,
          height: r,
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              d: "M11.659 0.987386C11.7762 0.670872 12.2238 0.670871 12.341 0.987385L13.7473 4.78792C13.7841 4.88744 13.8626 4.96589 13.9621 5.00272L17.7626 6.40904C18.0791 6.52616 18.0791 6.97384 17.7626 7.09096L13.9621 8.49728C13.8626 8.53411 13.7841 8.61256 13.7473 8.71207L12.341 12.5126C12.2238 12.8291 11.7762 12.8291 11.659 12.5126L10.2527 8.71207C10.2159 8.61256 10.1374 8.53411 10.0379 8.49728L6.23739 7.09096C5.92087 6.97384 5.92087 6.52616 6.23739 6.40904L10.0379 5.00272C10.1374 4.96589 10.2159 4.88744 10.2527 4.78792L11.659 0.987386Z",
              fill: a,
            }),
            (0, n.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M17.4176 10.3072C17.7105 10.0143 18.1853 10.0143 18.4782 10.3072C18.7711 10.6001 18.7711 11.075 18.4782 11.3679L22.4539 15.3436C22.6763 15.5659 22.5427 15.9467 22.2302 15.9814L20.9173 16.1273C20.743 16.1467 20.6054 16.2843 20.586 16.4586L20.4402 17.7715C20.4054 18.084 20.0246 18.2176 19.8023 17.9952L15.8266 14.0195L13.0606 16.7855L18.2495 21.9745C18.5424 22.2674 18.5424 22.7422 18.2495 23.0351C17.9566 23.328 17.4817 23.328 17.1888 23.0351L11.9999 17.8462L6.81097 23.0351C6.51807 23.328 6.0432 23.328 5.75031 23.0351C5.45741 22.7422 5.45742 22.2673 5.75031 21.9745L10.9392 16.7855L8.17322 14.0195L4.19751 17.9952C3.97517 18.2176 3.59436 18.084 3.55964 17.7715L3.41377 16.4586C3.3944 16.2843 3.25679 16.1467 3.08247 16.1273L1.76961 15.9814C1.4571 15.9467 1.32352 15.5659 1.54586 15.3436L5.52157 11.3679C5.22868 11.075 5.22868 10.6001 5.52157 10.3072C5.81447 10.0143 6.28934 10.0143 6.58223 10.3072L11.9999 15.7249L17.4176 10.3072Z",
              fill: a,
            }),
          ],
        });
      }
    },
    906326: function (e, t, r) {
      e.exports = {
        container: "container_db0691",
        overviewSidebarWrapper: "overviewSidebarWrapper_db0691",
        fullHeight: "fullHeight_db0691",
        signatureBlock: "signatureBlock_db0691",
        signatureContainer: "signatureContainer_db0691",
        signatureText: "signatureText_db0691",
        overviewSidebarContent: "overviewSidebarContent_db0691",
        scrollContentContainer: "scrollContentContainer_db0691",
        signHintAnimationContainer: "signHintAnimationContainer_db0691",
        signContainerButton: "signContainerButton_db0691",
        signTextLeft: "signTextLeft_db0691",
        signButton: "signButton_db0691",
        signCarot: "signCarot_db0691",
        signCarotCustomColors: "signCarotCustomColors_db0691",
        signTextRight: "signTextRight_db0691",
        signHintHelperText: "signHintHelperText_db0691",
        clickable: "clickable_db0691",
        signHintContainer: "signHintContainer_db0691",
        noDisplay: "noDisplay_db0691",
        signatureBlockContainer: "signatureBlockContainer_db0691",
      };
    },
    429982: function (e, t, r) {
      e.exports = {
        modal: "modal_dffb36",
        content: "content_dffb36",
        infoSide: "infoSide_dffb36",
        titlesContainer: "titlesContainer_dffb36",
        title: "title_dffb36",
        subtitle: "subtitle_dffb36",
        clanTagChiplet: "clanTagChiplet_dffb36",
        scrollMainContainer: "scrollMainContainer_dffb36",
        scrollContentsContainer: "scrollContentsContainer_dffb36",
        gameSection: "gameSection_dffb36",
        charterHeaderText: "charterHeaderText_dffb36",
        charterBodyText: "charterBodyText_dffb36",
        establishedDate: "establishedDate_dffb36",
        ctaButton: "ctaButton_dffb36",
        ctaButtonSigned: "ctaButtonSigned_dffb36",
        ctaButtonInner: "ctaButtonInner_dffb36",
      };
    },
    402488: function (e, t, r) {
      e.exports = {
        previewSection: "previewSection_a7b6f0",
        chatPreview: "chatPreview_a7b6f0",
        previewText: "previewText_a7b6f0",
        userName: "userName_a7b6f0",
        fakeMessage: "fakeMessage_a7b6f0",
        divider: "divider_a7b6f0",
        settingSection: "settingSection_a7b6f0",
      };
    },
    794459: function (e, t, r) {
      e.exports = {
        content: "content_ac101f",
        fullHeight: "fullHeight_ac101f",
        innerContent: "innerContent_ac101f",
        bottom: "bottom_ac101f",
        contentAnimContainer: "contentAnimContainer_ac101f",
        container: "container_ac101f",
        heightContainer: "heightContainer_ac101f",
        scrollSvg: "scrollSvg_ac101f",
      };
    },
    691994: function (e, t, r) {
      e.exports = {
        overviewText: "overviewText_a62d75",
        overviewHeaderPrelude:
          "overviewHeaderPrelude_a62d75 overviewText_a62d75",
        overviewGuildName: "overviewGuildName_a62d75 overviewText_a62d75",
        placeholderIcon: "placeholderIcon_a62d75",
        charterClanTag: "charterClanTag_a62d75",
        charterClanBadge: "charterClanBadge_a62d75",
      };
    },
  },
]);
//# sourceMappingURL=69581e880427362de74d.js.map
