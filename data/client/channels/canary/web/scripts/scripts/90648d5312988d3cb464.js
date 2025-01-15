"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24786"],
  {
    650461: function (e, t, r) {
      r(47120), r(192379);
      var n,
        i = r(392711),
        o = r.n(i),
        a = r(442837),
        d = r(570140),
        s = r(944163),
        l = r(709054),
        c = r(116175),
        g = r(308083);
      function f(e, t, r) {
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
      let b = new Map(),
        u = new Map(),
        p = !1,
        _ = Object.freeze({
          gameApplicationIds: new Set(),
          playstyle: g.zv.NONE,
          interests: new Set(),
          description: "",
          wildcardDescriptors: [g.U6, g.U6, g.U6],
          tag: "",
          verificationForm: { ...s.t },
          badgeKind: c.ZD.SWORD,
          badgePrimaryColor: void 0,
          badgeSecondaryColor: void 0,
          banner: g.qC.NIGHT_SKY,
          brandPrimaryColor: void 0,
          brandSecondaryColor: void 0,
          currentStep: g.Wy.GAMES,
          furthestStep: g.Wy.GAMES,
          requiredGameId: void 0,
        });
      function C(e) {
        var t;
        return null !== (t = b.get(e)) && void 0 !== t
          ? t
          : (function () {
              let e = o().cloneDeep(_);
              return (e.badgeKind = (0, c.lP)()), (e.banner = (0, g.i1)()), e;
            })();
      }
      function S(e, t) {
        let r = C(e);
        b.set(e, { ...r, ...t });
        let n = u.get(e);
        if (null != n) {
          let r = { ...n };
          Object.keys(t).forEach((e) => {
            delete r[e];
          }),
            u.set(e, r);
        }
      }
      class m extends (n = a.ZP.PersistedStore) {
        initialize(e) {
          null != e &&
            l.default.keys(e.progressByGuild).forEach((t) => {
              var r, n, i, o, a;
              b.set(t, {
                gameApplicationIds: new Set(
                  (r = e.progressByGuild[t]).gameApplicationIds,
                ),
                playstyle: r.playstyle,
                interests: new Set(r.interests),
                description: r.description,
                wildcardDescriptors:
                  null !== (n = r.wildcardDescriptors) && void 0 !== n
                    ? n
                    : [g.U6, g.U6, g.U6],
                tag: r.tag,
                verificationForm:
                  null !== (i = r.verificationForm) && void 0 !== i
                    ? i
                    : { ...s.t },
                badgeKind:
                  null !== (o = r.badgeKind) && void 0 !== o ? o : c.ZD.SWORD,
                badgePrimaryColor: r.badgePrimaryColor,
                badgeSecondaryColor: r.badgeSecondaryColor,
                banner:
                  null !== (a = r.banner) && void 0 !== a ? a : g.qC.NIGHT_SKY,
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
            b.forEach((t, r) => {
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
          return { progress: b.get(e), errors: u.get(e), submitting: p };
        }
        getGuildIds() {
          return [...b.keys()];
        }
      }
      f(m, "displayName", "ClanSetupStore"),
        f(m, "persistKey", "ClanSetupStore"),
        (t.ZP = new m(d.Z, {
          CLAN_SETUP_RESET: function () {
            b.clear(), u.clear();
          },
          CLAN_SETUP_UPDATE: function (e) {
            let { guildId: t, updates: r } = e;
            S(t, r);
          },
          CLAN_SETUP_SUBMIT: function (e) {
            let { guildId: t } = e;
            (p = !0), u.delete(t);
          },
          CLAN_SETUP_SUCCESS: function (e) {
            let { guildId: t } = e;
            (p = !1), b.delete(t), u.delete(t);
          },
          CLAN_SETUP_ERROR: function (e) {
            let { guildId: t, error: r } = e;
            (p = !1),
              u.set(t, {
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
              ((t = null == r ? s.t : { ...C(n).verificationForm, ...r }),
              S(n, { verificationForm: t }));
          },
        }));
    },
    322665: function (e, t, r) {
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
    192958: function (e, t, r) {
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
    896177: function (e, t, r) {
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
    832646: function (e, t, r) {
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
    360578: function (e, t, r) {
      e.exports = { overviewText: "overviewText_a62d75" };
    },
  },
]);
//# sourceMappingURL=90648d5312988d3cb464.js.map
